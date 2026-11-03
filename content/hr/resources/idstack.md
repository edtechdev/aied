---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Skup od jedanaest vještina otvorenog koda za oblikovanje nastave utemeljeno na dokazima koje kolegij provjeravaju prema dokaznoj osnovi i svaku preporuku označuju razinom dokaza."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**idstack** je zbirka od jedanaest vještina otvorenog koda za [[learning-design|oblikovanje nastave]] utemeljeno na dokazima, dostupna kao dodatak za Claude Code uz popratno proširenje u bočnoj ploči Chromea. Umjesto da piše nacrt kolegija, vještine ga provjeravaju: razvrstavaju ishode prema revidiranoj Bloomovoj taksonomiji, provjeravaju konstruktivnu usklađenost ishoda, aktivnosti i ocjenjivanja, označuju probleme kognitivnog opterećenja i pregledavaju pristupačnost prema WCAG 2.1 AA i univerzalnom dizajnu za učenje. Svaka preporuka nosi razinu dokaza, od T1 za metaanalize i randomizirane pokuse do T5 za mišljenje stručnjaka. Projekt navodi da se njegovi citati oslanjaju na 108 recenziranih studija u jedanaest istraživačkih područja; taj je broj tvrdnja samog projekta, a njegova je bibliografija objavljena u Markdownu pa je recenzent može provjeriti.

Kolegiji ulaze preko veze s API-jem Canvasa, datoteke IMS Common Cartridge, paketa SCORM, izvoza u PDF iz alata za izradu ili zalijepljenih dokumenata. Zajednički manifest projekta pamti kolegij kroz sesije, a vještina cjevovoda povezuje faze dizajna preskačući dovršen posao. Pregledi izvještavaju prema osam standarda Quality Matters i okviru Community of Inquiry, razdvajajući nastavnu, društvenu i kognitivnu prisutnost, a zatim rangiraju preporuke po težini.

## Što treba znati prije primjene

Dodatak zahtijeva Claude Code i bash ljusku za instalaciju; PowerShell i cmd ne mogu pokrenuti instalacijsku skriptu, a Python 3 preporučuje se za trendove ocjena. Podaci kolegija ostaju u mapi projekta na čitateljevu vlastitom računalu i napuštaju je samo preko integracije koju korisnik sam pokrene, poput poziva API-ja Canvasa. Živa inferencija u proširenju za Chrome zahtijeva vlastiti besplatni API ključ Google AI Studija, iako simulacijski način to pokazuje i bez njega. Projekt se označava betom u verziji 3.5.1.0 i upozorava na prijelomne promjene između manjih verzija, a objavljen je pod GitHub računom savvides, a ne pod imenom autora.

## Povezani pojmovi
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
