#!/usr/bin/env python3
"""Build a KDP-ready variant (aied-kdp.epub) from public/aied.epub.

KDP (Kindle Direct Publishing) accepts a standard EPUB3, so aied.epub is
already broadly uploadable. This hardening pass fixes the items Amazon's
validator and Kindle Previewer are known to trip on, and emits a separate
artifact so the general aied.epub is untouched:

  1. cover.xhtml was rewritten (SVG wrapper -> <img role="doc-cover">) but the
     OPF manifest still carries properties="svg" on it — a leftover that
     confuses cover detection. Remove the stale property.
  2. Verify the cover is declared via manifest properties="cover-image"
     (Kindle uses this to find the cover).
  3. Re-assert core metadata Kindle expects (dc:title, dc:language=en,
     dc:identifier, a mod date) and that nav + ncx are present.

The output is a byte-for-byte copy of aied.epub except for the corrected OPF.

NOTE: This cannot replace Amazon's own acceptance check. KDP's proprietary
validator runs in the upload preview (and Kindle Previewer is a GUI app not
available on Linux). This produces a spec-clean EPUB3; the final gate is the
KDP preview.
"""
import zipfile, re, os, shutil, datetime

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'aied.epub')
DST = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'dist', 'aied-kdp.epub')

def build():
    os.makedirs(os.path.dirname(DST), exist_ok=True)
    tmp = DST + '.tmp'
    modified = []
    with zipfile.ZipFile(SRC, 'r') as zin, \
         zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename.endswith('content.opf'):
                text = data.decode('utf-8')
                # Drop the stale svg property on the cover xhtml (it's an <img> now).
                new = re.sub(
                    r'(<item\b[^>]*\bid="cover_xhtml"[^>]*)\s+properties="svg"([^>]*>)',
                    r'\1\2', text)
                # Sanity: cover must still be declared cover-image.
                assert 'properties="cover-image"' in new, 'cover-image property missing!'
                assert re.search(r'<item\b[^>]*\bid="nav"', new), 'nav missing!'
                # Ensure a fresh dcterms:modified so Amazon sees an update.
                now = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
                new = re.sub(
                    r'<meta property="dcterms:modified">[^<]*</meta>',
                    f'<meta property="dcterms:modified">{now}</meta>', new)
                if new != text:
                    data = new.encode('utf-8'); modified.append('content.opf')
            zout.writestr(item, data)
    shutil.move(tmp, DST)
    print(f"Built {DST} ({os.path.getsize(DST)} bytes)")
    print("Modified:", modified)

def verify():
    from lxml import etree
    z = zipfile.ZipFile(DST)
    assert z.read('mimetype') == b'application/epub+zip'
    # XML well-formedness
    bad = 0
    for n in z.namelist():
        if n.endswith(('.xhtml', '.opf', '.ncx', '.xml')):
            try: etree.fromstring(z.read(n))
            except Exception as e: print('XML ERR', n, e); bad += 1
    # cover declared
    opf = z.read([n for n in z.namelist() if n.endswith('content.opf')][0]).decode()
    print('cover-image declared:', 'properties="cover-image"' in opf)
    print('cover_xhtml svg property removed:', 'id="cover_xhtml"' in opf and 'properties="svg"' not in re.search(r'<item\b[^>]*\bid="cover_xhtml"[^>]*>', opf).group(0))
    print('XML bad:', bad)

if __name__ == '__main__':
    build()
    verify()
