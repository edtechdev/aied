#!/usr/bin/env python3
"""Fetch recent AI in Education articles from journal RSS feeds.
Outputs JSON lines for the agent to process: one article per line, newest first.
Only returns articles from the most recent issue (last 90 days for CAEAI, last 30 for BJET)."""
import json
import re
import sys
import html
import time
import os
from datetime import datetime, timedelta
from urllib.request import urlopen, Request
from xml.etree import ElementTree as ET

# Single source of truth for site-wide metadata (site URL, name, base path).
with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'site.config.json'), encoding='utf-8') as _cfg:
    SITE = json.load(_cfg)
SITE_URL = SITE['url']

def load_feeds():
    """Journal feeds from wiki.config.yaml (single source of truth).

    Falls back to the embedded FEEDS copy when the config is unavailable, so the
    script still runs when copied on its own.
    """
    here = os.path.dirname(os.path.abspath(__file__))
    wiki = os.path.dirname(os.path.dirname(here))
    cfg_path = os.path.join(wiki, 'wiki.config.yaml')
    if not os.path.exists(cfg_path):
        print(f"# note: {cfg_path} not found - using the embedded feed list", file=sys.stderr)
        return EMBEDDED_FEEDS
    try:
        import yaml
    except ImportError:
        print("# note: PyYAML missing - using the embedded feed list", file=sys.stderr)
        return EMBEDDED_FEEDS
    with open(cfg_path, encoding='utf-8') as fh:
        cfg = yaml.safe_load(fh) or {}
    out = {}
    for feed in ((cfg.get('journal_scan') or {}).get('feeds') or []):
        key = feed.get('id') or feed['name']
        out[key] = {k: v for k, v in feed.items() if k != 'id'}
    return out or EMBEDDED_FEEDS


EMBEDDED_FEEDS = {
    "caeai": {
        "name": "Computers and Education: Artificial Intelligence",
        "url": "https://rss.sciencedirect.com/publication/science/2666920X",
        "max_age_days": 90,
        "journal": "Computers and Education: Artificial Intelligence",
        "doi_prefix": "caeai",
    },
    "ceao": {
        "name": "Computers and Education Open",
        "url": "https://rss.sciencedirect.com/publication/science/26665573",
        "max_age_days": 90,
        "journal": "Computers and Education Open",
        "doi_prefix": "caeo",
    },
    "bjet": {
        "name": "British Journal of Educational Technology",
        "url": "https://bera-journals.onlinelibrary.wiley.com/feed/14678535/most-recent",
        "max_age_days": 30,
    },
    "frontiers": {
        "name": "Frontiers in Psychology",
        "url": "https://www.frontiersin.org/journals/psychology/rss",
        "max_age_days": 30,
    },
    "ijethel": {
        "name": "International Journal of Educational Technology in Higher Education",
        "url": "https://link.springer.com/search.rss?facet-content-type=Article&facet-journal-id=41239",
        "max_age_days": 90,
        "journal": "International Journal of Educational Technology in Higher Education",
        "doi_prefix": "ijethel",
    },
    "ijaied": {
        "name": "International Journal of Artificial Intelligence in Education",
        "url": "https://rss.sciencedirect.com/publication/science/15604292",
        "max_age_days": 90,
        "journal": "International Journal of Artificial Intelligence in Education",
        "doi_prefix": "ijaied",
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
    # ScienceDirect: "December 2026" or a range "March–June 2026" (take the LAST month)
    m = re.match(r'(\w+)\s*[–—-]\s*(\w+)\s+(\d{4})', raw)
    if m:
        try:
            return datetime.strptime(f"1 {m.group(2)} {m.group(3)}", "%d %B %Y")
        except:
            pass
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

def parse_caeai(root, cutoff, journal_name='Computers and Education: Artificial Intelligence', doi_prefix='caeai'):
    """Parse ScienceDirect RSS (CAEAI / CEAO). Articles inside CDATA blocks."""
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
                doi = f"10.1016/j.{doi_prefix}.{pii_match.group(1)}"
        
        articles.append({
            'title': title,
            'url': link,
            'authors': authors,
            'doi': doi,
            'date': date_str if date_str else (parsed_date.strftime('%Y-%m-%d') if parsed_date else ''),
            'journal': journal_name,
            'source': doi_prefix,
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

def parse_frontiers(root, cutoff):
    """Parse Frontiers in Psychology RSS. Items have link=article URL w/ DOI,
    multiple <author> elements, CDATA title/description (description = abstract)."""
    articles = []
    seen = set()

    for item in root.findall('.//item'):
        link_el = item.find('link')
        title_el = item.find('title')
        pubdate_el = item.find('pubdate')
        category_el = item.find('category')

        link = clean(link_el.text) if link_el is not None and link_el.text else ''
        title = clean(title_el.text) if title_el is not None and title_el.text else ''
        category = clean(category_el.text) if category_el is not None and category_el.text else ''

        if not title or title in seen:
            continue
        seen.add(title)

        # Skip editorials, corrigenda, retractions (only original research/perspective)
        if any(w in category.lower() for w in ['corrigendum', 'retraction', 'erratum', 'editorial']):
            continue

        # Date: Frontiers uses "2026-08-13T00:00:00Z"
        date_str = clean(pubdate_el.text) if pubdate_el is not None else ''
        parsed_date = parse_date(date_str)
        if parsed_date and cutoff and parsed_date < cutoff:
            continue

        # DOI is embedded in the URL: .../articles/10.3389/fpsyg.2026.1883053
        doi = ''
        doi_match = re.search(r'/articles/(10\.[^\s?&]+)', link)
        if doi_match:
            doi = doi_match.group(1)

        # Authors: multiple <author> elements
        authors = [clean(a.text) for a in item.findall('author') if a.text and clean(a.text)]
        # Drop trailing part after last comma in each (Frontiers appends affiliation emails)
        authors = [a for a in authors if a]

        # Abstract from description CDATA
        abstract = ''
        desc_el = item.find('description')
        if desc_el is not None and desc_el.text:
            abstract = clean(desc_el.text)[:2000]

        articles.append({
            'title': title,
            'url': link,
            'abstract': abstract,
            'authors': authors,
            'doi': doi,
            'date': parsed_date.strftime('%Y-%m-%d') if parsed_date else date_str[:10],
            'journal': 'Frontiers in Psychology',
            'source': 'frontiers',
            'open_access': True,  # Frontiers is fully open access
        })

    return articles

def parse_springer(root, cutoff, journal_name='International Journal of Educational Technology in Higher Education'):
    """Parse Springer Link RSS (IJETHE). Items: title, description (abstract),
    link (with DOI), pubDate (YYYY-MM-DD), guid (DOI)."""
    articles = []
    seen = set()

    for item in root.findall('.//item'):
        title_el = item.find('title')
        link_el = item.find('link')
        desc_el = item.find('description')
        pubdate_el = item.find('pubDate')
        guid_el = item.find('guid')

        title = clean(title_el.text) if title_el is not None and title_el.text else ''
        link = clean(link_el.text) if link_el is not None and link_el.text else ''

        # Skip corrections
        if not title or any(w in title.lower() for w in ['correction', 'retraction', 'erratum']):
            continue
        if title in seen:
            continue
        seen.add(title)

        # Date
        date_str = clean(pubdate_el.text) if pubdate_el is not None else ''
        parsed_date = parse_date(date_str)
        if parsed_date and cutoff and parsed_date < cutoff:
            continue

        # DOI from link or guid
        doi = clean(guid_el.text) if guid_el is not None and guid_el.text else ''
        if not doi:
            doi_match = re.search(r'(10\.\d{4,}/[^\s"<>]+)', link)
            if doi_match:
                doi = doi_match.group(1)

        # Abstract from description
        abstract = ''
        if desc_el is not None and desc_el.text:
            abstract = clean(desc_el.text)[:2000]

        articles.append({
            'title': title,
            'url': link,
            'abstract': abstract,
            'authors': [],
            'doi': doi,
            'date': parsed_date.strftime('%Y-%m-%d') if parsed_date else date_str[:10],
            'journal': journal_name,
            'source': 'ijethel',
            'open_access': True,  # IJETHE is fully open access
        })

    return articles

PARSERS = {
    'parse_caeai': lambda root, cutoff, feed: parse_caeai(
        root, cutoff,
        journal_name=feed.get('journal', feed['name']),
        doi_prefix=feed.get('doi_prefix', 'caeai')),
    'parse_frontiers': lambda root, cutoff, feed: parse_frontiers(root, cutoff),
    'parse_springer': lambda root, cutoff, feed: parse_springer(
        root, cutoff, journal_name=feed.get('journal', feed['name'])),
    'parse_bjet': lambda root, cutoff, feed: parse_bjet(root, cutoff),
}


def main():
    all_articles = []
    feeds = load_feeds()

    for key, feed in feeds.items():
        try:
            req = Request(feed['url'], headers={
                'User-Agent': f'Mozilla/5.0 (AIEdWiki/1.0; +{SITE_URL})',
                'Accept': 'application/rss+xml, application/xml'
            })
            with urlopen(req, timeout=30) as resp:
                content = resp.read()
            root = ET.fromstring(content)
            
            max_age = feed['max_age_days']
            cutoff = datetime.now() - timedelta(days=max_age)
            
            parser_name = feed.get('parser')
            if parser_name is None:
                # legacy embedded list has no `parser:` field
                parser_name = {'caeai': 'parse_caeai', 'ceao': 'parse_caeai',
                               'ijaied': 'parse_caeai', 'frontiers': 'parse_frontiers',
                               'ijethel': 'parse_springer'}.get(key, 'parse_bjet')
            parse = PARSERS.get(parser_name)
            if parse is None:
                print(f"# ERROR unknown parser {parser_name!r} for {feed['name']}", file=sys.stderr)
                continue
            articles = parse(root, cutoff, feed)
            
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
