"""Compare the parallel PDF path against the serial one on the English export.

Usage: python3 tooling/pdf_parallel_bench.py [chunks] [--serial]

Writes nothing into public/: the PDFs land in the scratch directory so a
benchmark can never overwrite a published artifact.
"""
import json
import os
import subprocess
import sys
import time

WIKI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(WIKI, 'tooling'))
import pdf_parallel  # noqa: E402

MD = os.path.join(WIKI, 'dist', 'aied-export-pdf.md')
OUT_DIR = '/home/doug/.hermes/cache/scratch/parallel-pdf'
CSS = [os.path.join(WIKI, 'tooling', 'pdf-style.css')]
HEADER_CSS = 'h3.conceptpage { break-before: page; }\n'
PRE = os.path.join(WIKI, 'dist', 'pdf-prefront.html')


def info(path):
    r = subprocess.run(['pdfinfo', path], capture_output=True, text=True)
    pages = next((l.split(':')[1].strip() for l in r.stdout.split('\n')
                  if l.startswith('Pages:')), '?')
    return {'bytes': os.path.getsize(path), 'pages': pages}


def serial(out_pdf):
    t = {}
    t0 = time.time()
    html = os.path.join(OUT_DIR, 'serial.html')
    subprocess.run(['pandoc', MD, '-o', html, '-t', 'html', '-s',
                    '--metadata', 'title=Knowledge Base',
                    '--metadata', 'lang=en', '--toc', '--toc-depth=3',
                    '--include-before-body=' + PRE,
                    '--css=' + CSS[0]], check=True, capture_output=True)
    t['parse_incl_write'] = time.time() - t0
    t0 = time.time()
    subprocess.run(['weasyprint', html, out_pdf], check=True,
                   capture_output=True)
    t['weasyprint'] = time.time() - t0
    return t


if __name__ == '__main__':
    chunks = int(sys.argv[1]) if len(sys.argv) > 1 and not sys.argv[1].startswith('-') else 8
    os.makedirs(OUT_DIR, exist_ok=True)
    if '--serial' in sys.argv:
        out = os.path.join(OUT_DIR, 'serial.pdf')
        t = serial(out)
        print('SERIAL', json.dumps(t), info(out))
    else:
        out = os.path.join(OUT_DIR, f'parallel-{chunks}.pdf')
        t = pdf_parallel.build_pdf_parallel(
            MD, out, chunks=chunks, lang='en', title='Knowledge Base',
            css_files=CSS, extra_css=HEADER_CSS, pre_html=PRE,
            tmpdir=OUT_DIR)
        print('PARALLEL', json.dumps(t), info(out))
