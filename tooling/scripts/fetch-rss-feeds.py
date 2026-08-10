#!/usr/bin/env python3
"""Fetch recent AI in Education articles from journal RSS feeds.
Outputs JSON lines for the agent to process: one article per line, newest first.
Only returns articles from the most recent issue (last 90 days for CAEAI, last 30 for BJET)."""
import json
import re
import sys
import html
import time
from datetime import datetime, timedelta
from urllib.request import urlopen, Request
from xml.etree import ElementTree as ET

FEEDS = {
    "caeai": {
        "name": "Computers and Education: Artificial Intelligence",
        "url": "https://rss.sciencedirect.com/publication/science/2666920X",
        "max_age_days": 90,
    },
    "bjet": {
        "name": "British Journal of Educational Technology",
        "url": "https://bera-journals.onlinelibrary.wiley.com/feed/14678535/most-recent",
        "max_age_days": 30,
    },
}

def clean(text):
    """Strip HTML, normalize whitespace, decode entities."""
    if not text:
        return ''
    text = re.sub(r'<[^>]+>', ' ', text)
    text = html.unescape(text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def parse_date(raw):
    """Try to parse various date formats, return datetime or None."""
    if not raw:
        return None
    raw = clean(raw).strip()
    # ScienceDirect: "December 2026"
    m = re.match(r'(\w+)\s+(\d{4})', raw)
    if m:
        try:
            return datetime.strptime(f"1 {m.group(1)} {m.group(2)}", "%d %B %Y")
        except:
            pass
    # Wiley: "Fri, 07 Aug 2026 23:44:27 -0700"
    try:
        from email.utils import parsedate_to_datetime
        return parsedate_to_datetime(raw)
    except:
        pass
    # ISO format
    for fmt in ['%Y-%m-%dT%H:%M:%S', '%Y-%m-%d']:
        try:
            return datetime.strptime(raw[:19], fmt)
        except:
            pass
    return None

def parse_caeai(root, cutoff):
    """Parse ScienceDirect/CAEAI RSS. Articles inside CDATA blocks."""
    articles = []
    for item in root.findall('.//item'):
        title_el = item.find('title')
        link_el = item.find('link')
        desc_el = item.find('description')
        
        title = clean(title_el.text) if title_el is not None and title_el.text else ''
        link = clean(link_el.text) if link_el is not None and link_el.text else ''
        
        if not title or 'ScienceDirect Publication' in title:
            continue
        
        # Skip corrigenda, retractions, errata
        if any(w in title.lower() for w in ['corrigendum', 'retraction', 'erratum']):
            continue
        
        desc = desc_el.text if desc_el is not None else ''
        desc_clean = clean(desc)
        
        # Extract publication date
        pub_match = re.search(r'Publication date:\s*(.+?)(?:\n|<)', desc)
        date_str = pub_match.group(1).strip() if pub_match else ''
        parsed_date = parse_date(date_str)
        
        # Skip old articles
        if parsed_date and cutoff and parsed_date < cutoff:
            continue
        
        # Extract authors
        authors = []
        auth_match = re.search(r'Author\(s\):\s*(.+?)(?:\n|<)', desc)
        if auth_match:
            authors = [a.strip() for a in auth_match.group(1).split(',') if a.strip()]
        
        # Extract DOI
        doi = ''
        doi_match = re.search(r'doi\.org/([^\s&<>]+)', link + desc)
        if doi_match:
            doi = doi_match.group(1)
        else:
            # Try pii-based DOI: S2666920X26001177 -> 10.1016/j.caeai.xxxxx
            pii_match = re.search(r'/pii/(S\d+)', link)
            if pii_match:
                doi = f"10.1016/j.caeai.{pii_match.group(1)}"
        
        articles.append({
            'title': title,
            'url': link,
            'authors': authors,
            'doi': doi,
            'date': date_str if date_str else (parsed_date.strftime('%Y-%m-%d') if parsed_date else ''),
            'journal': 'Computers and Education: Artificial Intelligence',
            'source': 'caeai',
            'open_access': True,
        })
    return articles

def parse_bjet(root, cutoff):
    """Parse Wiley/BJET RSS with proper namespace handling."""
    articles = []
    seen = set()
    ns = {'dc': 'http://purl.org/dc/elements/1.1/'}
    
    for item in root.findall('.//item'):
        title_el = item.find('title')
        link_el = item.find('link')
        pub_date_el = item.find('pubDate')
        date_el = item.find('dc:date', ns)
        category_el = item.find('category')
        section_el = item.find('section')
        creator_el = item.find('dc:creator', ns)
        doi_el = item.find('doi')
        encoded_el = item.find('encoded')  # Full abstract in HTML
        # ScienceDirect has dc:date but Wiley uses dc:date
        
        title = clean(title_el.text) if title_el is not None and title_el.text else ''
        link = clean(link_el.text) if link_el is not None and link_el.text else ''
        
        # Skip corrigenda, retractions, errata, issue info
        if any(w in title.lower() for w in ['corrigendum', 'retraction', 'erratum', 'issue information']):
            continue
        
        if not title or 'Table of Contents' in title or title in seen:
            continue
        seen.add(title)
        
        # Only ORIGINAL ARTICLEs (check category and section)
        category = clean(category_el.text) if category_el is not None and category_el.text else ''
        section = clean(section_el.text) if section_el is not None and section_el.text else ''
        if 'ORIGINAL ARTICLE' not in category and 'ORIGINAL ARTICLE' not in section:
            continue
        
        # Parse date
        date_str = date_el.text if date_el is not None else ''
        pub_date = pub_date_el.text if pub_date_el is not None else ''
        parsed_date = parse_date(date_str) or parse_date(pub_date)
        if parsed_date and cutoff and parsed_date < cutoff:
            continue
        
        # Extract DOI
        doi = clean(doi_el.text) if doi_el is not None and doi_el.text else ''
        if not doi:
            doi_match = re.search(r'(10\.\d{4,}/[^\s"<>]+)', link)
            if doi_match:
                doi = doi_match.group(1)
        
        # Extract abstract from encoded element (contains full HTML)
        abstract = ''
        encoded = encoded_el.text if encoded_el is not None else ''
        if encoded:
            abs_match = re.search(r'<h2>Abstract</h2>\s*<p>(.*?)</p>', encoded, re.DOTALL)
            if abs_match:
                abstract = clean(abs_match.group(1))[:2000]
            else:
                abstract = clean(encoded)[:2000]
        
        # Authors from dc:creator
        authors = []
        if creator_el is not None and creator_el.text:
            authors = [a.strip() for a in creator_el.text.replace('\n', ',').split(',') if a.strip()]
        
        articles.append({
            'title': title,
            'url': link,
            'abstract': abstract,
            'authors': authors,
            'doi': doi,
            'date': parsed_date.strftime('%Y-%m-%d') if parsed_date else date_str[:10],
            'journal': 'British Journal of Educational Technology',
            'source': 'bjet',
            'open_access': True,
        })
    
    return articles

def main():
    all_articles = []
    
    for key, feed in FEEDS.items():
        try:
            req = Request(feed['url'], headers={
                'User-Agent': 'Mozilla/5.0 (AIEdWiki/1.0; +https://edtechdev.github.io/aied)',
                'Accept': 'application/rss+xml, application/xml'
            })
            with urlopen(req, timeout=30) as resp:
                content = resp.read()
            root = ET.fromstring(content)
            
            max_age = feed['max_age_days']
            cutoff = datetime.now() - timedelta(days=max_age)
            
            if key == 'caeai':
                articles = parse_caeai(root, cutoff)
            else:
                articles = parse_bjet(root, cutoff)
            
            print(f"# {feed['name']}: {len(articles)} recent articles (last {max_age}d)", file=sys.stderr)
            all_articles.extend(articles)
            
        except Exception as e:
            print(f"# ERROR fetching {feed['name']}: {e}", file=sys.stderr)
    
    # Sort by date descending (newest first)
    all_articles.sort(key=lambda a: a.get('date', ''), reverse=True)
    
    # Output as JSON array
    print(json.dumps(all_articles, indent=2, ensure_ascii=False))

if __name__ == '__main__':
    main()
