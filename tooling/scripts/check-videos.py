#!/usr/bin/env python3
"""Check the explainer-video data against YouTube, and emit new entries.

`src/data/videos.ts` pins each video's id, title and runtime by hand, so the site
builds without a network call and a renamed or deleted video fails loudly at build
time instead of leaving a hole in a page. This script is the other half of that
bargain: it is the manual drift check you run when the playlist changes.

    python3 tooling/scripts/check-videos.py                 # verify pinned entries
    python3 tooling/scripts/check-videos.py --offline       # no network: pairings only
    python3 tooling/scripts/check-videos.py --emit <playlist-id>

`--emit` prints ready-to-paste entries for every video in the playlist that is not
already in the data module, with the pages taken from the video description (the
notebook writes "see the X page: <url>" there). It prints; it does not edit.

Needs `yt-dlp` on PATH for anything that touches the network. Not part of the gate
suite: the gates must stay offline and deterministic.
"""
import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "src" / "data" / "videos.ts"
CONTENT = ROOT / "content"

ENTRY_RE = re.compile(
    r"\{\s*slug:\s*'([^']+)',\s*youtubeId:\s*'([^']+)',\s*title:\s*'([^']*)',"
    r".*?seconds:\s*(\d+),\s*concepts:\s*\[([^\]]*)\],\s*faqs:\s*\[([^\]]*)\],\s*\}",
    re.S,
)


def parse_data():
    """Read the pinned entries out of the TS module (it is a literal array)."""
    text = DATA.read_text()
    entries = []
    for m in ENTRY_RE.finditer(text):
        slug, vid, title, secs, concepts, faqs = m.groups()
        entries.append({
            "slug": slug,
            "id": vid,
            "title": title,
            "seconds": int(secs),
            "concepts": re.findall(r"'([^']+)'", concepts),
            "faqs": re.findall(r"'([^']+)'", faqs),
        })
    if not entries:
        sys.exit("could not parse any entries out of src/data/videos.ts")
    return entries


def check_pairings(entries):
    """Every page a video names must exist, and must name the video back."""
    bad = []
    for e in entries:
        for folder, slugs in (("concepts", e["concepts"]), ("faqs", e["faqs"])):
            for slug in slugs:
                page = CONTENT / "en" / folder / f"{slug}.md"
                if not page.exists():
                    bad.append(f"{e['slug']}: no {folder}/{slug}.md")
                    continue
                head = page.read_text().split("\n---\n", 1)[0]
                if e["slug"] not in head:
                    bad.append(f"{e['slug']}: {folder}/{slug}.md does not name it in connected_videos")
    return bad


def yt(*args):
    if not shutil.which("yt-dlp"):
        sys.exit("yt-dlp is not on PATH (needed unless you pass --offline)")
    out = subprocess.run(["yt-dlp", "--no-update", *args], capture_output=True, text=True)
    if out.returncode != 0:
        sys.exit(f"yt-dlp failed:\n{out.stderr.strip()[-800:]}")
    return out.stdout


def fetch(video_id):
    return json.loads(yt("--skip-download", "--dump-json", f"https://www.youtube.com/watch?v={video_id}"))


def check_live(entries):
    """Compare what YouTube says now with what the module pins."""
    drift = []
    for e in entries:
        try:
            info = fetch(e["id"])
        except SystemExit as exc:
            drift.append(f"{e['slug']} ({e['id']}): {exc}")
            continue
        # The uploads carry a channel prefix ("AI in Education Knowledge Base - ");
        # the data module keeps the display title, so accept either form.
        live_title = (info.get("title") or "").strip()
        if e["title"] not in (live_title, live_title.split(" - ", 1)[-1]):
            drift.append(f"{e['slug']}: title is now {live_title!r}, pinned {e['title']!r}")
        secs = int(info.get("duration") or 0)
        if abs(secs - e["seconds"]) > 1:
            drift.append(f"{e['slug']}: runtime is now {secs}s, pinned {e['seconds']}s")
    return drift


def page_slugs(description):
    """Pull the aied page URLs out of a description, in order, deduped."""
    seen, out = set(), []
    for m in re.finditer(r"https?://[^\s]+/aied/(concepts|faqs)/([a-z0-9-]+)/?", description or ""):
        key = (m.group(1), m.group(2))
        if key not in seen:
            seen.add(key)
            out.append(key)
    return out


def emit(playlist_id, entries):
    known = {e["id"] for e in entries}
    raw = yt("--flat-playlist", "--dump-json", f"https://youtube.com/playlist?list={playlist_id}")
    ids = [json.loads(line)["id"] for line in raw.splitlines() if line.strip()]
    fresh = [i for i in ids if i not in known]
    if not fresh:
        print(f"all {len(ids)} playlist videos are already in src/data/videos.ts")
        return
    for vid in fresh:
        info = fetch(vid)
        concept: list[str] = []
        faqs: list[str] = []
        for folder, slug in page_slugs(info.get("description", "")):
            (concept if folder == "concepts" else faqs).append(slug)
        slug = re.sub(r"[^a-z0-9]+", "-", info["title"].lower()).strip("-")
        print("  {")
        print(f"    slug: '{slug}',")
        print(f"    youtubeId: '{vid}',")
        print(f"    title: {json.dumps(info['title'], ensure_ascii=False)},")
        print("    summary: '',   # one sentence, in the site's voice")
        print(f"    seconds: {int(info['duration'])},\n    concepts: [{', '.join(repr(c) for c in concept).replace(chr(39), chr(39))}],")
        print(f"    faqs: [{', '.join(repr(f) for f in faqs)}],\n  }},")


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--emit", metavar="PLAYLIST_ID", help="print entries for new videos in a playlist")
    ap.add_argument("--offline", action="store_true", help="skip the network checks")
    args = ap.parse_args()

    entries = parse_data()
    problems = check_pairings(entries)
    if problems:
        print("pairing problems:")
        for p in problems:
            print("  -", p)
    else:
        print(f"pairings OK: {len(entries)} videos, both directions")

    if args.emit:
        emit(args.emit, entries)
    elif not args.offline:
        drift = check_live(entries)
        if drift:
            print("drift against YouTube:")
            for d in drift:
                print("  -", d)
            problems += drift
        else:
            print(f"YouTube metadata matches all {len(entries)} pinned entries")

    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
