"""Render wiki [[wikilinks]] as plain readable text.

Both offline builders need the same thing when they flatten a page's prose:
`[[slug|label]]` must become `label`, and `[[slug]]` must become something a
reader can understand. A bare slug leaking into the output ("use AI
ai-technologies in educational contexts") is the failure this module exists to
prevent, so it is deliberately the single implementation shared by
build-epub.py and scripts/generate-llms-files.py.
"""
import re

# Acronyms that must not be title-cased into nonsense (Ai, Llm, Rag).
KNOWN = {'ai': 'AI', 'llm': 'LLM', 'rag': 'RAG', 'nlp': 'NLP', 'k-12': 'K-12',
         'irt': 'IRT', 'its': 'ITS', 'rct': 'RCT', 'stem': 'STEM', 'cs': 'CS',
         'ide': 'IDE', 'api': 'API', 'srl': 'SRL', 'lms': 'LMS', 'mooc': 'MOOC',
         'vr': 'VR', 'ar': 'AR', 'ui': 'UI', 'ux': 'UX', 'sdk': 'SDK',
         'tpack': 'TPACK', 'asag': 'ASAG', 'kt': 'KT', 'rl': 'RL', 'ml': 'ML',
         'xai': 'XAI', 'genai': 'GenAI', 'aied': 'AIED', 'pjbl': 'PjBL',
         'hci': 'HCI', 'zpd': 'ZPD'}

# The label may contain brackets of its own ("Young Scholar[s] on the Beat"),
# so the label part is non-greedy up to the closing ]] instead of [^\]]+.
WIKILINK_RE = re.compile(r'\[\[([^\]|]+)(?:\|([\s\S]+?))?\]\]')
MDLINK_RE = re.compile(r'\[([^\]]+)\]\([^)]+\)')


def smart_title(label):
    """Turn a slug fragment into a readable label: 'ai-technologies' -> 'AI Technologies'."""
    return re.sub(r'\b\w+\b',
                  lambda m: KNOWN.get(m.group(0).lower(),
                                      m.group(0)[0].upper() + m.group(0)[1:]),
                  label)


def resolve_wikilinks(text, title_of=None):
    """Flatten wikilinks to plain text.

    A piped link uses its label. A bare link prefers the target's real page
    title (`title_of`), because that is what the site shows for it; failing
    that it falls back to a readable title built from the slug.
    """
    def repl(m):
        target = m.group(1).replace('.md', '').strip()
        label = (m.group(2) or '').strip()
        if label:
            return label
        if title_of:
            title = title_of(target)
            if title:
                return title
        return smart_title(target.replace('-', ' '))

    return WIKILINK_RE.sub(repl, text)


def strip_md_links(text):
    """`[label](url)` -> `label`."""
    return MDLINK_RE.sub(r'\1', text)
