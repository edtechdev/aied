---
title: "Construirea manualelor inteligente"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Ghidul open-source al lui Dan McCreary pentru manuale online inteligente, cu căutare, glosare, quiz-uri, grafuri conceptuale și simulări integrate, construite cu MkDocs Material și IA generativă."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Site-ul **Intelligent Textbooks** este ghidul pas cu pas al lui Dan McCreary pentru construirea *manualelor inteligente* — manuale online care merg dincolo de PDF-urile statice prin căutare, navigare în site, un glosar de termeni, un cuprins, gestionarea quiz-urilor, formule randate, previzualizări pentru rețelele sociale, verificarea linkurilor și un **graf conceptual** ușor de vizualizat, care arată toate conceptele unui curs și dependențele dintre ele. Ghidul argumentează că multe cursuri de astăzi pot beneficia de manuale online de calitate cu aceste caracteristici și arată cum să le construiești folosind sistemul de build [MkDocs](http://mkdocs.com/) împreună cu tema Material și IA generativă pentru a crea și întreține conținutul.

Mișcarea definitorie este că manualul este *scris în Markdown și generat de IA*, o instanță concretă a tiparului de [[vibe-coding|autorare asistată de IA]] aplicat [[curriculum-design|conținutului de curs]]: în loc să întreții manual un site mare, descrii cursul și lași IA generativă să producă și să întrețină paginile, cu lanțul de instrumente ocupându-se de navigare, căutare și graful conceptual. O bibliotecă însoțitoare de [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) pretinde că automatizează peste 90% din sarcinile necesare pentru a construi un manual de nivel 2 pornind de la o descriere de curs.

## O resursă corolară: MicroSims

Însoțitorul natural al acestui ghid este biblioteca **MicroSims** a lui McCreary, la <https://dmccreary.github.io/microsims/> (sursă: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), care furnizează simulările interactive pe care le integrează un manual inteligent. Un *MicroSim* (micro-simulare) este o simulare interactivă simplă, generată cu IA, pentru a ajuta profesorii să explice un concept, și poate fi integrată într-un manual inteligent sau în orice site care acceptă un `iframe`. MicroSims se disting prin trei lucruri: **generare asistată de IA** (tipare de design standardizate transformă o descriere în limbaj natural a unei simulări într-un activ partajabil), **integrare universală** (un singur element HTML `iframe` îl așază într-o pagină oarecare) și **cod transparent și modificabil** (nicio cutie neagră — un clic deschide simularea într-un editor web, iar o licență Creative Commons permite majorității profesorilor să le folosească fără taxe de licență). Termenul a fost creat de Valerie Lockhart în 2023, după ce a descoperit că profesorii și elevii puteau construi simulări cu biblioteca JavaScript p5.js cu puțină pregătire sau deloc.

Proiectul publică și o schemă JSON pentru metadatele MicroSim, ca instrumentele IA să poată genera descriptori căutabili, cu un registru faceted de MicroSim pe roadmap. O lucrare de cercetare care descrie cadrul — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — este pe arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Simulări-exemplu includ Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula și un grafic al randamentelor bursiere, fiecare rulând live pe site.

## Pentru cine este

Cadre didactice și designeri instrucționali care vor să construiască sau să întrețină un manual de curs, mai ales în învățământul superior și în formarea profesională, plus dezvoltatorii de programe pentru cadre didactice și oricine folosește IA generativă pentru a scrie conținut educațional. Se potrivește educatorilor confortabili cu un flux Markdown-plus-Git (sau dispuși să îl învețe) și care vor ca IA să se ocupe de instalațiile site-ului — căutare, navigare, graf conceptual — ca să se concentreze pe pedagogie.

## Note și precauții

Acesta este un ghid de practician și un lanț de instrumente, nu un studiu recenzat inter-pares — prezintă un flux de lucru și propria rațiune educațională („manualele inteligente ghidează studenții prin concepte în căutarea lor de cunoaștere”), nu dovezi privind rezultatele învățării. Lucrarea despre MicroSims este cel mai apropiat lucru de sprijin empiric și este auto-publicată pe arXiv. Ambele proiecte sunt cu sursă deschisă (depozitul intelligent-textbooks raportează o licență MIT și 38 de stele; MicroSims raportează o licență Creative Commons și 13 stele) și sunt întreținute activ. Grafurile conceptuale și structura care pune glosarul pe primul loc sunt cu adevărat utile pentru descoperire, dar ghidul presupune un flux de autorare destul de tehnic — MkDocs, Git și unelte de IA generativă — care poate fi o barieră pentru unii membri ai corpului didactic. La data ingerării, registrul pentru MicroSims este încă doar pe roadmap, așa că găsirea unei simulări existente anume se bazează pe căutarea și navigarea proprii ale site-ului.

## Concepte conexe

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
