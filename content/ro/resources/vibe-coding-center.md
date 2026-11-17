---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Un ghid de teren pentru educatori despre construirea unui site educațional static cu un asistent de programare IA: trei fișiere de instrucțiuni Markdown pentru design, securitate și confidențialitatea studenților, cu ghiduri lizibile și un pachet descărcabil."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**The Vibe-Coding Center** este ghidul de teren gratuit al lui Miguel Guhlin pentru un profesor care vrea să construiască în stil [[vibe-coding|vibe coding]] un site educațional static mic cu un asistent de programare IA — un bilet de ieșire, un quiz, un portofoliu de clasă — fără a livra odată cu el o cheie API expusă sau date ale studenților.

## Ce poți face cu el

Trei fișiere de instrucțiuni poartă îndrumarea: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` și `securevcc.md`. Descarcă-le în rădăcina unui proiect, completează șablonul de brief al proiectului, apoi cere asistentului să le citească și să le aplice pe toate trei; ghidul spune explicit că prezența nu înseamnă activare, așa că fișierele trebuie numite în cerere. Ghiduri lizibile explică fiecare dintre ele, inclusiv o parcurgere „Trei verificări esențiale înainte de a partaja”: colectează mai puține date despre studenți, inspectează o cheie API expusă și potrivește designul unui instrument la sarcina lui de învățare. Pachetul complet adaugă site-ul însuși, un set de prompturi, o recenzie de lansare și scripturi de reconstrucție, cu un manifest SHA-256 pentru descărcare.

Pagina însoțitoare [exemple EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) arată rezultatele ca instrumente statice funcționale, nu ca instantanee: un generator de bilete de ieșire care scrie o întrebare la un nivel ales din taxonomia SOLO, un portofoliu de student care este un singur fișier HTML pe GitHub Pages și o bibliotecă de resurse căutabilă pentru dezvoltare profesională, toate rulând pe client, fără autentificare în LMS.

## Pentru cine este

Profesori și [[learning-design|designeri instrucționali]] din K-12 și învățământul superior care pot descrie instrumentul pe care îl vor și sunt dispuși să verifice ce a produs asistentul. Se potrivește și unui departament care vrea o singură listă de verificare comună înainte ca cineva să publice un instrument destinat studenților, și instructorilor care predau [[ai-literacy|alfabetizarea în IA]] prin construcție, nu prin critică.

## Note și precauții

Centrul este îndrumare, nu un produs de conformitate: site-ul nu face nicio afirmație de conformitate pentru propria țintă WCAG 2.2 AA, răspunde cu „nu” la întrebarea „utilizarea acestor fișiere face site-ul meu conform?”, și spune că o recenzie de inginerie nu înlocuiește autorizarea școlii sau recenzia juridică. Raftul de securitate trimite la axe-core, Gitleaks, ZAP și Playwright; acestea sunt referințe, nu software inclus, iar cele invazive sunt destinate unei ținte de unică folosință sau autorizate explicit. Citirea nu cere cont. Reconstruirea paginilor HTML cere Python și `markdown-it-py`, care este o dependență de build, nu una pentru vizitator. Repository-ul este licențiat MIT, în timp ce lucrările de artă și materialele terților și proiectele linkuite își păstrează propriii termeni, documentați în `CREDITS.md`.

## Concepte conexe

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
