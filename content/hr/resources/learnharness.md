---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Besplatna stolna aplikacija otvorenog koda (AGPL-3.0) u kojoj agenti mjere što učenik već razumije, planiraju kartu ovisnosti do cilja, poučavaju jedan korak zaključivanja po jedan i prilagođuju uvježbavanje, uz trajni graf znanja."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**LearnHarness** je stolna aplikacija za [[agentic-ai|učenje uz pomoć agenata]] koja lekciju ustrojava oko [[prior-knowledge|onoga što učenik već razumije]], a ne oko popisa tema. Projekt opisuje četiri poteza: **mjerenje**, ispitivanje ideja o kojima cilj ovisi kako bi se našlo gdje razumijevanje prestaje; **planiranje**, izvođenje karte ovisnosti do cilja i njezin prikaz kao karte lekcije; **poučavanje**, rad kroz jedan korak zaključivanja po jedan u ritmu predvidi–objasni–provjeri, pa se zabune popravljaju prije nego se na njima nešto gradi; i **uvježbavanje**, niz zadataka usmjerenih na učenikove vlastite poteškoće.

## Što možete raditi s tim

Razlikovni je unos polje mišljenja: učenici pišu ili diktiraju svoje zaključivanje i nesigurnost, umjesto da samo odgovaraju, što projekt tretira kao način na koji agent zamišlja zaključivanje, a ne kao zapis točno/netočno. Može i istraživati pitanja u pozadini, generirati vizualna objašnjenja i izrađivati interaktivne demonstracije.

Ono što se nakuplja jest [[knowledge-graph|graf znanja]] tvrdnji i lanaca zaključivanja, povezan s izvornim sesijama i pročitan od kasnijih agenata za poučavanje i uvježbavanje kao kontekst; bilješke se mogu uvesti. Projekt kaže da graf čuva ideje i veze, a ne ocjene sposobnosti.

## Za koga je

Samostalni učenici koji rade na teškom gradivu te nastavnici ili razvijatelji koji žele vidjeti kako izgleda [[intelligent-tutoring|AI tutor]] nativan za agente kad se njegovi poticaji i stanje mogu pregledati. Napisan je u TypeScriptu, pokreće se iz izvornog koda, a testovi su dokumentirani kao deterministički, bez poziva modela.

## Napomene i upozorenja

Besplatno pokriva softver, a ne inferenciju: učenici donose ključeve davatelja, pretplatu, lokalni Claude Code CLI ili bilo koju krajnju točku kompatibilnu s OpenAI-jem i plaćaju davatelju bez marže; mjerač uživo procjenjuje samo poznate troškove API-ja. Zapisnici, razgovori i ključevi ostaju na računalu kao obične datoteke, ali projekt upozorava da lokalna pohrana ne znači lokalnu obradu, jer zahtjevi modela, neobavezno diktiranje i web-istraživanje dosežu vanjske usluge. Instalacijski program za Windows x64 nije potpisan, pa će Windows upozoriti. Nikakva studija djelotvornosti nije objavljena, pa se argument oslanja na navedeno obrazloženje, a ne na izmjerene ishode; repozitorij je imao otprilike 4.800 zvjezdica pri provjeri 2. studenoga 2026.

## Povezani pojmovi

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
