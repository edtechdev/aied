#!/usr/bin/env python3
"""Measure, explain, and budget the published static output.

This tool walks the final ``dist/`` tree once and reports logical file bytes,
the files that would be excluded by ``actions/upload-pages-artifact``, locale
and category totals, and repeated HTML shell regions.  It deliberately does
not compress the site, rebuild it, or infer a size from a gzip archive.

The primary budget is ``published_bytes``: the sum of ``st_size`` for regular
files that will be present in the Pages artifact.  Archive and artifact-service
sizes are separate operational metrics, not substitutes for this number.

Usage:
    python3 tooling/scripts/report-build-size.py \
        --dist dist \
        --config tooling/build-size-budget.json \
        --out reports/build-size \
        --mode report

Exit codes:
    0  report written; size budget passed, warned, or observation mode
    1  blocking size budget failed (only with --mode enforce)
    2  report is invalid/incomplete (missing output, links, unreadable files,
       missing required files, forbidden offline editions)
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import platform
import re
import shutil
import stat
import subprocess
import sys
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterable

REPORT_SCHEMA_VERSION = 1
BUDGET_SCHEMA_VERSION = 1
MB = 1_000_000
HOSTING_CEILING_BYTES = 1_000_000_000
REGION_MARKER = b'data-build-region="'
REQUIRED_FILES = (
    "index.html",
    "pagefind/pagefind-entry.json",
    "manifest.webmanifest",
    "sw.js",
)
DEFAULT_ROUTE_ROOTS = {
    "404.html",
    "admin",
    "ai",
    "articles",
    "concepts",
    "faq",
    "faqs",
    "index.html",
    "journal",
    "news",
    "offline",
    "pages",
    "resources",
    "search",
    "use-with-ai",
}
SHARED_ROOTS = {
    "_astro",
    "fonts",
    "images",
    "pagefind",
    "titles",
    "vendor",
}
SHARED_FILES = {
    "favicon.ico",
    "favicon.svg",
    "logo.svg",
    "manifest.webmanifest",
    "og-concept-map.png",
    "public-domain-mark.png",
    "registerSW.js",
    "robots.txt",
    "rss.xml",
    "sitemap-0.xml",
    "sitemap-index.xml",
    "sw.js",
}
FONT_SUFFIXES = {".woff", ".woff2", ".ttf", ".otf", ".eot"}
IMAGE_SUFFIXES = {".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif", ".svg", ".ico"}
JS_SUFFIXES = {".js", ".mjs", ".cjs"}
CSS_SUFFIXES = {".css"}


class ReportError(Exception):
    """A report cannot be produced or is structurally invalid."""


@dataclass(frozen=True)
class FileRecord:
    rel: str
    bytes: int
    category: str
    locale: str
    is_html: bool


@dataclass
class Region:
    name: str
    tag: str
    start: int
    end: int
    bytes: int
    digest: str
    page: str
    nested: bool = False


def eprint(*args: object) -> None:
    print(*args, file=sys.stderr)


def decimal_mb(value: int) -> float:
    return value / MB


def fmt_bytes(value: int) -> str:
    return f"{value:,} bytes ({decimal_mb(value):.2f} MB)"


def pct(value: float) -> str:
    return f"{value * 100:.2f}%"


def load_json(path: Path) -> dict[str, Any]:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise ReportError(f"missing file: {path}") from exc
    except json.JSONDecodeError as exc:
        raise ReportError(f"invalid JSON in {path}: {exc}") from exc


def git_commit(repo_root: Path, explicit: str | None) -> str | None:
    if explicit:
        return explicit
    env_sha = os.environ.get("GITHUB_SHA")
    if env_sha:
        return env_sha
    try:
        return subprocess.check_output(
            ["git", "-C", str(repo_root), "rev-parse", "HEAD"],
            stderr=subprocess.DEVNULL,
            text=True,
        ).strip()
    except (OSError, subprocess.SubprocessError):
        return None


def tool_versions() -> dict[str, str]:
    versions = {"python": platform.python_version()}
    node = shutil.which("node")
    if node:
        try:
            versions["node"] = subprocess.check_output(
                [node, "--version"], stderr=subprocess.DEVNULL, text=True
            ).strip()
        except (OSError, subprocess.SubprocessError):
            pass
    return versions


def is_hidden_or_ignored(rel: str) -> bool:
    parts = rel.split("/")
    return any(part in {".git", ".github"} or part.startswith(".") for part in parts)


def category_for(rel: str) -> str:
    basename = rel.rsplit("/", 1)[-1]
    suffix = Path(basename).suffix.lower()
    if suffix == ".html":
        return "HTML"
    if rel == "pagefind" or rel.startswith("pagefind/"):
        return "Pagefind"
    if basename.startswith("llms") and suffix == ".txt":
        return "AI exports"
    if suffix in JS_SUFFIXES:
        return "JS"
    if suffix in CSS_SUFFIXES:
        return "CSS"
    if suffix in FONT_SUFFIXES:
        return "Fonts"
    if suffix in IMAGE_SUFFIXES:
        return "Images"
    return "Other"


def locale_for(rel: str, locales: set[str], default_locale: str) -> str:
    """Return exactly one owner for a file.

    Directory locales win first.  Root canonical routes belong to the default
    locale; genuinely global output is ``shared``; unknown top-level output is
    ``unattributed`` rather than guessed into a language.
    """
    parts = rel.split("/")
    first = parts[0]
    basename = parts[-1]

    if first in locales:
        return first

    # Locale-suffixed AI exports and edition covers.
    match = re.fullmatch(r"llms\.([a-z]{2,3})(?:-concepts)?\.txt", basename)
    if match and match.group(1) in locales:
        return match.group(1)
    match = re.fullmatch(r"epub-cover\.([a-z]{2,3})\.png", basename)
    if match and match.group(1) in locales:
        return match.group(1)
    if basename in {"llms-concepts.txt", "epub-cover.png"}:
        return default_locale
    if basename in {"llms.txt", "llms-full.txt"}:
        return "shared"

    if first == "titles" and basename.endswith(".json"):
        stem = basename[:-5]
        return stem if stem in locales else "shared"
    if first in SHARED_ROOTS:
        return "shared"
    if rel in SHARED_FILES:
        return "shared"
    if basename.startswith("workbox-") and basename.endswith(".js"):
        return "shared"
    if basename.startswith("pwa-") and basename.endswith(".png"):
        return "shared"

    if first in DEFAULT_ROUTE_ROOTS:
        return default_locale
    return "unattributed"


def _find_tag_end(data: bytes, start: int) -> int | None:
    """Return the byte offset after the first unquoted '>' from start."""
    quote: int | None = None
    i = start
    while i < len(data):
        value = data[i]
        if quote is not None:
            if value == quote:
                quote = None
        elif value in (ord('"'), ord("'")):
            quote = value
        elif value == ord(">"):
            return i + 1
        i += 1
    return None


def _find_close(data: bytes, tag: str, after_open: int) -> tuple[int, int] | None:
    """Find the matching close tag for a marked element.

    This is a tag-boundary scanner, not a broad DOM extraction.  Explicit
    region markers keep the nesting rules simple; the depth counter handles
    the one nested same-name case (the site footer inside the footer shell).
    """
    pattern = re.compile(rb"</?" + re.escape(tag.encode("ascii")) + rb"\b", re.IGNORECASE)
    depth = 1
    pos = after_open
    while True:
        match = pattern.search(data, pos)
        if not match:
            return None
        end = _find_tag_end(data, match.start())
        if end is None:
            return None
        is_close = data[match.start() : match.start() + 2] == b"</"
        if is_close:
            depth -= 1
            if depth == 0:
                return match.start(), end
        elif not data[match.start() : end].rstrip().endswith(b"/>"):
            depth += 1
        pos = end


def find_regions(data: bytes, page: str) -> list[Region]:
    """Return explicitly marked, non-overlapping-or-nested byte regions."""
    regions: list[Region] = []
    seen: set[tuple[int, int, str]] = set()
    for marker in re.finditer(re.escape(REGION_MARKER), data):
        name_start = marker.end()
        name_end = data.find(b'"', name_start)
        if name_end < 0:
            raise ReportError(f"{page}: unterminated data-build-region value")
        name = data[name_start:name_end].decode("utf-8", "replace")
        tag_start = data.rfind(b"<", 0, marker.start())
        if tag_start < 0:
            raise ReportError(f"{page}: region marker is not inside an element")
        between = data[tag_start : marker.start()]
        if b">" in between:
            raise ReportError(f"{page}: region marker is outside a start tag")
        tag_end = _find_tag_end(data, tag_start)
        if tag_end is None:
            raise ReportError(f"{page}: unterminated start tag for region {name}")
        tag_match = re.match(rb"<\s*([A-Za-z][A-Za-z0-9:_-]*)", data[tag_start:tag_end])
        if not tag_match:
            raise ReportError(f"{page}: cannot read tag name for region {name}")
        tag = tag_match.group(1).decode("ascii").lower()
        if tag in {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}:
            raise ReportError(f"{page}: void element cannot own region {name}")
        close = _find_close(data, tag, tag_end)
        if close is None:
            raise ReportError(f"{page}: no closing </{tag}> for region {name}")
        close_start, close_end = close
        key = (tag_start, close_end, name)
        if key in seen:
            continue
        seen.add(key)
        region_bytes = data[tag_start:close_end]
        regions.append(
            Region(
                name=name,
                tag=tag,
                start=tag_start,
                end=close_end,
                bytes=len(region_bytes),
                digest=hashlib.sha256(region_bytes).hexdigest(),
                page=page,
            )
        )
    regions.sort(key=lambda region: (region.start, region.end))
    for index, region in enumerate(regions):
        region.nested = any(
            other is not region
            and other.start <= region.start
            and region.end <= other.end
            for other in regions
        )
    return regions


def walk_dist(
    dist: Path,
    locales: set[str],
    default_locale: str,
    allow_editions: set[str],
) -> tuple[list[FileRecord], list[dict[str, Any]], list[str], list[str]]:
    """Walk dist once; return published records, exclusions, failures, warnings."""
    if not dist.is_dir():
        raise ReportError(f"dist directory does not exist: {dist}")

    records: list[FileRecord] = []
    excluded: list[dict[str, Any]] = []
    failures: list[str] = []
    warnings: list[str] = []

    for root, dirs, files in os.walk(dist, topdown=True, followlinks=False):
        dirs.sort()
        files.sort()
        root_path = Path(root)
        for name in list(dirs):
            path = root_path / name
            rel = path.relative_to(dist).as_posix()
            try:
                st = os.lstat(path)
            except OSError as exc:
                failures.append(f"{rel}: cannot stat directory: {exc}")
                dirs.remove(name)
                continue
            if stat.S_ISLNK(st.st_mode):
                failures.append(f"{rel}: symbolic-link directory is not allowed")
                dirs.remove(name)
        for name in files:
            path = root_path / name
            rel = path.relative_to(dist).as_posix()
            try:
                st = os.lstat(path)
            except OSError as exc:
                failures.append(f"{rel}: cannot stat: {exc}")
                continue
            if is_hidden_or_ignored(rel):
                excluded.append({"path": rel, "bytes": st.st_size, "reason": "hidden/.git/.github"})
                continue
            if stat.S_ISLNK(st.st_mode):
                failures.append(f"{rel}: symbolic link is not allowed")
                continue
            if not stat.S_ISREG(st.st_mode):
                failures.append(f"{rel}: special file is not allowed")
                continue
            if st.st_nlink > 1:
                failures.append(f"{rel}: hard-linked file is not allowed")
                continue
            if not os.access(path, os.R_OK):
                failures.append(f"{rel}: file is not readable")
                continue
            if path.suffix.lower() in {".pdf", ".epub"} and rel not in allow_editions:
                failures.append(f"{rel}: forbidden offline edition in dist")
            records.append(
                FileRecord(
                    rel=rel,
                    bytes=st.st_size,
                    category=category_for(rel),
                    locale=locale_for(rel, locales, default_locale),
                    is_html=path.suffix.lower() == ".html",
                )
            )

    records.sort(key=lambda record: record.rel)
    if not records:
        failures.append("dist contains no published regular files")
    for required in REQUIRED_FILES:
        if not (dist / required).is_file():
            failures.append(f"required output missing: {required}")
    if excluded:
        warnings.append(
            f"{len(excluded)} hidden/.git/.github file(s) excluded from published bytes"
        )
    return records, excluded, failures, warnings


def html_reports(
    dist: Path,
    records: list[FileRecord],
    locales: set[str],
    default_locale: str,
) -> tuple[dict[str, Any], list[dict[str, Any]], list[str]]:
    html_records = [record for record in records if record.is_html]
    sizes_by_locale: dict[str, list[int]] = defaultdict(list)
    shell_by_locale: dict[str, int] = defaultdict(int)
    shell_by_page_type: dict[str, dict[str, int]] = defaultdict(
        lambda: {"pages": 0, "html_bytes": 0, "shell_bytes": 0}
    )
    pages_with_regions: dict[str, int] = defaultdict(int)
    page_types: dict[str, Counter] = defaultdict(Counter)
    region_groups: dict[tuple[str, str], dict[str, Any]] = {}
    top_shell: list[dict[str, Any]] = []
    warnings: list[str] = []
    pages_without_regions = 0
    pages_without_region_bytes = 0

    for record in html_records:
        sizes_by_locale[record.locale].append(record.bytes)
        page_type = page_type_for(record.rel, locales)
        page_types[record.locale][page_type] += 1
        type_row = shell_by_page_type[page_type]
        type_row["pages"] += 1
        type_row["html_bytes"] += record.bytes
        path = dist / record.rel
        try:
            data = path.read_bytes()
        except OSError as exc:
            warnings.append(f"{record.rel}: cannot read HTML for region analysis: {exc}")
            continue
        try:
            regions = find_regions(data, record.rel)
        except ReportError as exc:
            warnings.append(str(exc))
            regions = []
        top_level = [region for region in regions if not region.nested]
        shell = sum(region.bytes for region in top_level)
        type_row["shell_bytes"] += shell
        if top_level:
            pages_with_regions[record.locale] += 1
            shell_by_locale[record.locale] += shell
        else:
            pages_without_regions += 1
            pages_without_region_bytes += record.bytes
        top_shell.append(
            {
                "path": record.rel,
                "bytes": record.bytes,
                "shell_bytes": shell,
                "shell_pct": (shell / record.bytes) if record.bytes else 0.0,
                "region_count": len(top_level),
                "page_type": page_type,
                "locale": record.locale,
            }
        )
        for region in top_level:
            key = (region.name, region.digest)
            group = region_groups.get(key)
            if group is None:
                group = {
                    "region": region.name,
                    "tag": region.tag,
                    "digest": region.digest,
                    "bytes_per_occurrence": region.bytes,
                    "occurrences": 0,
                    "total_bytes": 0,
                    "repeated_bytes": 0,
                    "representative_path": region.page,
                }
                region_groups[key] = group
            group["occurrences"] += 1
            group["total_bytes"] += region.bytes
            group["repeated_bytes"] = (group["occurrences"] - 1) * group["bytes_per_occurrence"]

    html_bytes = sum(record.bytes for record in html_records)
    shell_bytes = sum(shell_by_locale.values())
    top_groups = sorted(
        region_groups.values(),
        key=lambda group: (-group["total_bytes"], group["region"], group["digest"]),
    )
    all_groups = top_groups
    top_groups = top_groups[:50]
    top_shell.sort(key=lambda row: (-row["shell_bytes"], row["path"]))
    locale_rows: dict[str, Any] = {}
    for locale in sorted(set(sizes_by_locale) | set(locales)):
        sizes = sorted(sizes_by_locale.get(locale, []))
        if not sizes:
            continue
        locale_rows[locale] = {
            "bytes": sum(sizes),
            "files": sum(1 for record in html_records if record.locale == locale),
            "median_bytes": percentile(sizes, 0.50),
            "p95_bytes": percentile(sizes, 0.95),
            "max_bytes": sizes[-1],
            "pages_with_regions": pages_with_regions.get(locale, 0),
            "shell_bytes": shell_by_locale.get(locale, 0),
            "page_types": dict(sorted(page_types[locale].items())),
        }
    report = {
        "html_bytes": html_bytes,
        "html_count": len(html_records),
        "shell_bytes": shell_bytes,
        "shell_pct": (shell_bytes / html_bytes) if html_bytes else 0.0,
        "pages_with_regions": sum(pages_with_regions.values()),
        "pages_without_regions": pages_without_regions,
        "pages_without_region_bytes": pages_without_region_bytes,
        "top_shell_pages": top_shell[:10],
        "shell_by_page_type": dict(sorted(shell_by_page_type.items())),
        "locales": locale_rows,
        "regions": top_groups,
        "repeated_region_bytes": sum(group["repeated_bytes"] for group in all_groups),
    }
    return report, top_groups, warnings


def percentile(sorted_values: list[int], fraction: float) -> int:
    if not sorted_values:
        return 0
    index = min(len(sorted_values) - 1, max(0, int(round((len(sorted_values) - 1) * fraction))))
    return sorted_values[index]


def page_type_for(rel: str, locales: set[str]) -> str:
    parts = rel.split("/")
    if parts and parts[0] in locales:
        parts = parts[1:]
    if not parts:
        return "other"
    first = parts[0]
    if first in {"articles", "concepts", "faqs", "resources"}:
        return first[:-1] if first != "resources" else "resource"
    if first in {"journal", "news", "search", "offline", "admin"}:
        return first
    if rel in {"index.html", "404.html"}:
        return "home"
    return "other"


def summarize_totals(records: list[FileRecord]) -> tuple[dict[str, Any], dict[str, Any]]:
    by_locale: dict[str, dict[str, int]] = {}
    by_category: dict[str, dict[str, int]] = {}
    for record in records:
        locale = by_locale.setdefault(record.locale, {"bytes": 0, "files": 0, "html": 0})
        locale["bytes"] += record.bytes
        locale["files"] += 1
        locale["html"] += 1 if record.is_html else 0
        category = by_category.setdefault(record.category, {"bytes": 0, "files": 0})
        category["bytes"] += record.bytes
        category["files"] += 1
    for row in by_locale.values():
        row["html_median_bytes"] = 0
        row["html_p95_bytes"] = 0
        row["html_max_bytes"] = 0
    return by_locale, by_category


def build_report(args: argparse.Namespace) -> tuple[dict[str, Any], list[FileRecord], int]:
    repo_root = Path(__file__).resolve().parents[2]
    dist = Path(args.dist).resolve()
    out = Path(args.out).resolve()
    if out == dist or dist in out.parents:
        raise ReportError("report output must live outside dist")
    config_path = Path(args.config).resolve()
    site_config_path = Path(args.site_config).resolve()

    config = load_json(config_path)
    if config.get("schema_version") != BUDGET_SCHEMA_VERSION:
        raise ReportError(
            f"unsupported budget schema_version {config.get('schema_version')!r}; expected {BUDGET_SCHEMA_VERSION}"
        )
    try:
        warning_bytes = int(config["published"]["warning_bytes"])
        blocking_bytes = int(config["published"]["blocking_bytes"])
    except (KeyError, TypeError, ValueError) as exc:
        raise ReportError(f"invalid published budget: {exc}") from exc
    if warning_bytes <= 0 or blocking_bytes <= warning_bytes:
        raise ReportError("budget requires 0 < warning_bytes < blocking_bytes")

    site_config = load_json(site_config_path)
    locales = {item["code"] for item in site_config["i18n"]["locales"]}
    default_locale = site_config["i18n"]["defaultLocale"]
    allow_editions = set(config.get("published", {}).get("allow_editions", []))

    records, excluded, failures, warnings = walk_dist(dist, locales, default_locale, allow_editions)
    by_locale, by_category = summarize_totals(records)
    html_report, region_groups, html_warnings = html_reports(dist, records, locales, default_locale)
    warnings.extend(html_warnings)
    diagnostics = config.get("diagnostics", {})
    large_html_pages = [
        record.rel
        for record in records
        if record.is_html
        and record.bytes >= int(diagnostics.get("html_page_warning_bytes", 1_000_000))
    ]
    if large_html_pages:
        warnings.append(
            f"{len(large_html_pages)} HTML page(s) at or above "
            f"{int(diagnostics.get('html_page_warning_bytes', 1_000_000)):,} bytes: "
            + ", ".join(large_html_pages[:10])
            + (" ..." if len(large_html_pages) > 10 else "")
        )
    shell_warning = float(diagnostics.get("shell_share_warning", 0.40))
    if html_report["pages_with_regions"] and html_report["shell_pct"] >= shell_warning:
        warnings.append(
            f"attributed HTML shell is {pct(html_report['shell_pct'])} of HTML bytes "
            f"(diagnostic threshold {pct(shell_warning)}; coverage "
            f"{html_report['pages_with_regions']:,}/{html_report['html_count']:,} pages)"
        )

    published_bytes = sum(record.bytes for record in records)
    html_count = sum(1 for record in records if record.is_html)
    excluded_bytes = sum(item["bytes"] for item in excluded)

    # Fill HTML statistics into locale rows.
    for locale, row in by_locale.items():
        html_stats = html_report["locales"].get(locale)
        if html_stats:
            row["html_median_bytes"] = html_stats["median_bytes"]
            row["html_p95_bytes"] = html_stats["p95_bytes"]
            row["html_max_bytes"] = html_stats["max_bytes"]
            row["html_pages"] = html_stats["files"]
            row["shell_bytes"] = html_stats["shell_bytes"]
            row["pages_with_regions"] = html_stats["pages_with_regions"]
        else:
            row["html_pages"] = 0
            row["shell_bytes"] = 0
            row["pages_with_regions"] = 0

    total_locale_bytes = sum(row["bytes"] for row in by_locale.values())
    total_category_bytes = sum(row["bytes"] for row in by_category.values())
    if total_locale_bytes != published_bytes:
        failures.append(
            f"locale reconciliation failed: rows={total_locale_bytes}, total={published_bytes}"
        )
    if total_category_bytes != published_bytes:
        failures.append(
            f"category reconciliation failed: rows={total_category_bytes}, total={published_bytes}"
        )

    if published_bytes >= warning_bytes:
        size_status = "block" if published_bytes >= blocking_bytes else "warn"
    else:
        size_status = "ok"
    if published_bytes >= HOSTING_CEILING_BYTES:
        warnings.append(
            "published bytes are at or above the conservative 1,000,000,000-byte "
            "GitHub Pages ceiling; the compressed artifact is not evidence of safety"
        )

    baseline = load_baseline(Path(args.baseline).resolve(), published_bytes, by_locale, by_category)
    if baseline.get("available") and baseline.get("published_bytes"):
        delta_bytes = published_bytes - baseline["published_bytes"]
        baseline["delta_bytes"] = delta_bytes
        baseline["delta_pct"] = delta_bytes / baseline["published_bytes"]
        growth_bytes = int(diagnostics.get("baseline_growth_warning_bytes", 25_000_000))
        growth_pct = float(diagnostics.get("baseline_growth_warning_percent", 5.0))
        if delta_bytes >= growth_bytes and baseline["delta_pct"] * 100 >= growth_pct:
            warnings.append(
                f"published bytes grew {delta_bytes:+,} bytes "
                f"({baseline['delta_pct'] * 100:+.2f}%) versus the compatible baseline"
            )
    else:
        baseline["delta_bytes"] = None
        baseline["delta_pct"] = None

    status = "failed" if failures else size_status
    gate_result = "failed" if failures else ("would-block" if size_status == "block" else size_status)
    if args.mode == "enforce" and not failures and size_status == "block":
        gate_result = "blocked"
    exit_code = 0
    if failures:
        exit_code = 2
    elif args.mode == "enforce" and size_status == "block":
        exit_code = 1

    report = {
        "schema_version": REPORT_SCHEMA_VERSION,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "commit": git_commit(repo_root, args.commit),
        "run_id": args.run_id or os.environ.get("GITHUB_RUN_ID"),
        "tool_versions": tool_versions(),
        "config_path": str(config_path),
        "config_schema_version": config.get("schema_version"),
        "mode": args.mode,
        "enforcement_active": bool(config.get("enforcement", {}).get("active")),
        "enforcement_reason": config.get("enforcement", {}).get("reason"),
        "status": status,
        "gate_result": gate_result,
        "published_bytes": published_bytes,
        "published_mb": decimal_mb(published_bytes),
        "archive_metrics": {
            "archive_tar_bytes": None,
            "uploaded_artifact_bytes": None,
            "note": "The official Pages action owns packaging; this report does not create or download an archive.",
        },
        "file_count": len(records),
        "html_count": html_count,
        "excluded": {
            "bytes": excluded_bytes,
            "count": len(excluded),
            "files": excluded[:100],
        },
        "budget": {
            "warning_bytes": warning_bytes,
            "blocking_bytes": blocking_bytes,
            "warning_mb": decimal_mb(warning_bytes),
            "blocking_mb": decimal_mb(blocking_bytes),
            "size_status": size_status,
            "headroom_to_warning_bytes": warning_bytes - published_bytes,
            "headroom_to_blocking_bytes": blocking_bytes - published_bytes,
            "hosting_ceiling_bytes": HOSTING_CEILING_BYTES,
            "hosting_ceiling_exceeded": published_bytes >= HOSTING_CEILING_BYTES,
        },
        "diagnostics": config.get("diagnostics", {}),
        "locales": dict(sorted(by_locale.items())),
        "categories": dict(sorted(by_category.items())),
        "top_files": [
            {
                "path": record.rel,
                "bytes": record.bytes,
                "mb": decimal_mb(record.bytes),
                "category": record.category,
                "locale": record.locale,
            }
            for record in sorted(records, key=lambda item: (-item.bytes, item.rel))[:25]
        ],
        "large_html_pages": large_html_pages,
        "html": html_report,
        "baseline": baseline,
        "failures": failures,
        "warnings": warnings,
    }
    return report, records, exit_code


def load_baseline(
    path: Path,
    published_bytes: int,
    by_locale: dict[str, Any],
    by_category: dict[str, Any],
) -> dict[str, Any]:
    if not path.is_file():
        return {"available": False, "reason": f"baseline unavailable: {path.name} not found"}
    try:
        baseline = load_json(path)
    except ReportError as exc:
        return {"available": False, "reason": str(exc)}
    if baseline.get("schema_version") != REPORT_SCHEMA_VERSION:
        return {
            "available": False,
            "reason": "baseline schema_version does not match report",
            "source_commit": baseline.get("source_commit"),
        }
    baseline["available"] = True
    baseline.setdefault("source_commit", None)
    baseline.setdefault("published_bytes", 0)
    baseline.setdefault("locales", {})
    baseline.setdefault("categories", {})
    baseline.setdefault("top_files", {})
    # Keep only deltas and the detail needed for a small changed-file list.
    current_locales = {key: row["bytes"] for key, row in by_locale.items()}
    prior_locales = {key: row.get("bytes", 0) for key, row in baseline["locales"].items()}
    baseline["locale_deltas"] = {
        key: current_locales.get(key, 0) - prior_locales.get(key, 0)
        for key in sorted(set(current_locales) | set(prior_locales))
    }
    current_categories = {key: row["bytes"] for key, row in by_category.items()}
    prior_categories = {key: row.get("bytes", 0) for key, row in baseline["categories"].items()}
    baseline["category_deltas"] = {
        key: current_categories.get(key, 0) - prior_categories.get(key, 0)
        for key in sorted(set(current_categories) | set(prior_categories))
    }
    baseline["_prior_top_files"] = baseline.get("top_files", {})
    return baseline


def write_outputs(args: argparse.Namespace, report: dict[str, Any], records: list[FileRecord]) -> None:
    out = Path(args.out).resolve()
    out.mkdir(parents=True, exist_ok=True)
    report_path = out / "report.json"
    summary_path = out / "summary.md"
    files_path = out / "files.json"

    if args.write_baseline:
        baseline_path = Path(args.write_baseline).resolve()
        prior_top = {
            record.rel: record.bytes
            for record in sorted(records, key=lambda item: (-item.bytes, item.rel))[:200]
        }
        baseline = {
            "schema_version": REPORT_SCHEMA_VERSION,
            "source_commit": report.get("commit"),
            "published_bytes": report["published_bytes"],
            "locales": {key: {"bytes": row["bytes"]} for key, row in report["locales"].items()},
            "categories": {
                key: {"bytes": row["bytes"]} for key, row in report["categories"].items()
            },
            "top_files": prior_top,
        }
        baseline_path.parent.mkdir(parents=True, exist_ok=True)
        baseline_path.write_text(json.dumps(baseline, indent=2, sort_keys=True) + "\n", encoding="utf-8")

    files = [
        {
            "path": record.rel,
            "bytes": record.bytes,
            "category": record.category,
            "locale": record.locale,
        }
        for record in records
    ]
    files_path.write_text(json.dumps(files, indent=2) + "\n", encoding="utf-8")
    report_path.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    summary_path.write_text(render_summary(report), encoding="utf-8")
    print(f"Wrote {report_path}")
    print(f"Wrote {summary_path}")
    print(f"Wrote {files_path}")


def render_summary(report: dict[str, Any]) -> str:
    budget = report["budget"]
    lines: list[str] = []
    lines.append("# Build size report")
    lines.append("")
    lines.append(f"- Commit: `{report.get('commit') or 'unknown'}`")
    lines.append(f"- Run: `{report.get('run_id') or 'local'}`")
    lines.append(f"- Mode: **{report['mode']}**; enforcement active: **{str(report['enforcement_active']).lower()}**")
    lines.append(
        f"- Published: **{fmt_bytes(report['published_bytes'])}**; files: {report['file_count']:,}; "
        f"HTML: {report['html_count']:,}"
    )
    lines.append(
        f"- Budget: warning at {fmt_bytes(budget['warning_bytes'])}, "
        f"blocking at {fmt_bytes(budget['blocking_bytes'])}"
    )
    lines.append(
        f"- Gate: **{report['gate_result']}**; size status: **{budget['size_status']}**; "
        f"headroom to warning: {fmt_bytes(budget['headroom_to_warning_bytes'])}; "
        f"headroom to blocking: {fmt_bytes(budget['headroom_to_blocking_bytes'])}"
    )
    lines.append(
        f"- Hosting ceiling check: {'**EXCEEDED**' if budget['hosting_ceiling_exceeded'] else 'below'} "
        f"the conservative {fmt_bytes(budget['hosting_ceiling_bytes'])} marker"
    )
    if report["excluded"]["count"]:
        lines.append(
            f"- Excluded from published bytes: {report['excluded']['count']:,} files, "
            f"{fmt_bytes(report['excluded']['bytes'])} (hidden/.git/.github)"
        )
    lines.append("")
    lines.append("## Largest files")
    lines.append("")
    lines.append("| Path | Size | Category | Locale |")
    lines.append("|---|---:|---|---|")
    for row in report["top_files"]:
        lines.append(
            f"| `{row['path']}` | {fmt_bytes(row['bytes'])} | {row['category']} | {row['locale']} |"
        )
    lines.append("")
    lines.append("## Locale totals")
    lines.append("")
    lines.append("| Locale | Bytes | Files | HTML | % of total | HTML median | HTML p95 | HTML max |")
    lines.append("|---|---:|---:|---:|---:|---:|---:|---:|")
    total = report["published_bytes"] or 1
    for locale, row in report["locales"].items():
        lines.append(
            f"| {locale} | {row['bytes']:,} | {row['files']:,} | {row.get('html', 0):,} | "
            f"{pct(row['bytes'] / total)} | {row.get('html_median_bytes', 0):,} | "
            f"{row.get('html_p95_bytes', 0):,} | {row.get('html_max_bytes', 0):,} |"
        )
    lines.append("")
    lines.append("## Category totals")
    lines.append("")
    lines.append("| Category | Bytes | Files | % of total |")
    lines.append("|---|---:|---:|---:|")
    for category, row in report["categories"].items():
        lines.append(f"| {category} | {row['bytes']:,} | {row['files']:,} | {pct(row['bytes'] / total)} |")
    lines.append("")
    html = report["html"]
    lines.append("## Repeated HTML shell")
    lines.append("")
    lines.append(
        f"- Shell regions: {fmt_bytes(html['shell_bytes'])} across {html['pages_with_regions']:,} pages "
        f"({pct(html['shell_pct'])} of HTML bytes); "
        f"{html['pages_without_regions']:,} pages had no marked regions."
    )
    lines.append(
        f"- Exact repeated region bytes beyond the first copy: {fmt_bytes(html['repeated_region_bytes'])}."
    )
    if html["top_shell_pages"]:
        lines.append("")
        lines.append("| Page | Shell bytes | Shell % | Regions |")
        lines.append("|---|---:|---:|---:|")
        for row in html["top_shell_pages"][:10]:
            lines.append(
                f"| `{row['path']}` | {row['shell_bytes']:,} | {pct(row['shell_pct'])} | {row['region_count']} |"
            )
    if html["regions"]:
        lines.append("")
        lines.append("| Region | Occurrences | Bytes each | Total | Repeated beyond first |")
        lines.append("|---|---:|---:|---:|---:|")
        for group in html["regions"][:10]:
            lines.append(
                f"| {group['region']} (`{group['digest'][:12]}`) | {group['occurrences']:,} | "
                f"{group['bytes_per_occurrence']:,} | {group['total_bytes']:,} | {group['repeated_bytes']:,} |"
            )
    lines.append("")
    lines.append("## Baseline")
    lines.append("")
    baseline = report["baseline"]
    if baseline.get("available"):
        lines.append(
            f"- Baseline from `{baseline.get('source_commit') or 'unknown'}`: "
            f"{baseline.get('published_bytes', 0):,} bytes; delta {baseline.get('delta_bytes', 0):+,} bytes "
            f"({baseline.get('delta_pct', 0) * 100:+.2f}%)."
        )
    else:
        lines.append(f"- Baseline unavailable: {baseline.get('reason', 'no compatible baseline')}")
    lines.append("")
    lines.append("## Failures and warnings")
    lines.append("")
    if not report["failures"] and not report["warnings"]:
        lines.append("- None.")
    for failure in report["failures"][:50]:
        lines.append(f"- **FAIL:** {failure}")
    for warning in report["warnings"][:50]:
        lines.append(f"- WARN: {warning}")
    if len(report["failures"]) > 50:
        lines.append(f"- ... {len(report['failures']) - 50} more failures in report.json")
    if len(report["warnings"]) > 50:
        lines.append(f"- ... {len(report['warnings']) - 50} more warnings in report.json")
    lines.append("")
    lines.append("## Next investigations")
    lines.append("")
    if report["budget"]["hosting_ceiling_exceeded"]:
        lines.append(
            "- Reduce published bytes before treating the site as safely under the Pages ceiling. "
            "Start with the largest HTML and AI-export files; do not remove navigation solely to shrink the report."
        )
    elif report["budget"]["size_status"] == "block":
        lines.append("- Blocking budget is exceeded; reduce output or make a deliberate budget decision.")
    elif report["budget"]["size_status"] == "warn":
        lines.append("- Warning budget is exceeded; review the largest files and repeated shell regions.")
    else:
        lines.append("- No size action is required by the current budget; keep monitoring baseline growth.")
    if html["pages_without_regions"]:
        lines.append(
            f"- {html['pages_without_regions']:,} HTML pages have no marked shell regions; "
            "their bytes are counted as non-shell content until markers cover them."
        )
    lines.append("")
    return "\n".join(lines)


def parse_args(argv: Iterable[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=(__doc__ or "").splitlines()[0])
    parser.add_argument("--dist", default="dist", help="final build output directory")
    parser.add_argument("--config", default="tooling/build-size-budget.json")
    parser.add_argument("--site-config", default="site.config.json")
    parser.add_argument("--out", default="reports/build-size")
    parser.add_argument("--baseline", default="tooling/build-size-baseline.json")
    parser.add_argument("--mode", choices=("report", "enforce"), default="report")
    parser.add_argument("--commit", default=None)
    parser.add_argument("--run-id", default=None)
    parser.add_argument(
        "--write-baseline",
        default=None,
        help="explicitly write a reviewed baseline summary to this path; never automatic",
    )
    return parser.parse_args(argv)


def main(argv: Iterable[str] | None = None) -> int:
    args = parse_args(argv)
    try:
        report, records, exit_code = build_report(args)
        # Attach current top files for a useful baseline changed-file delta.
        baseline = report["baseline"]
        if baseline.get("available"):
            prior = baseline.get("_prior_top_files", {})
            current = {record.rel: record.bytes for record in records}
            changed = [
                {
                    "path": path,
                    "before_bytes": prior.get(path, 0),
                    "after_bytes": current.get(path, 0),
                    "delta_bytes": current.get(path, 0) - prior.get(path, 0),
                }
                for path in set(prior) | set(current)
                if current.get(path, 0) != prior.get(path, 0)
            ]
            changed.sort(key=lambda row: (-abs(row["delta_bytes"]), row["path"]))
            baseline["largest_changed_files"] = changed[:10]
            for row in changed[:10]:
                baseline["delta_bytes"] = baseline.get("delta_bytes", 0)
        report["baseline"] = {key: value for key, value in baseline.items() if not key.startswith("_")}
        write_outputs(args, report, records)
        eprint(
            f"Build size: {report['published_bytes']:,} bytes "
            f"({report['published_mb']:.2f} MB), status={report['gate_result']}, "
            f"files={report['file_count']:,}, html={report['html_count']:,}"
        )
        for failure in report["failures"]:
            eprint(f"FAIL: {failure}")
        return exit_code
    except ReportError as exc:
        eprint(f"report-build-size: {exc}")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
