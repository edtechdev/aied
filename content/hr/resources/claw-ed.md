---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Lokalno orijentiran asistent za poučavanje koji vaš vlastiti kurikul pretvara u nacrte lekcija koje se mogu uređivati, materijale za studente i slajdove, uz model koji sami odaberete."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**Claw-ED** je lokalno orijentiran asistent za poučavanje koji izrađuje nacrte lekcija iz vaših vlastitih kurikularnih materijala. Nastavnik uveze svoje izvore, zatraži lekciju i dobije nacrte koje može uređivati, uz materijale za studente i slajdove, generirane modelom koji nastavnik odabere, a ne jednim fiksnim dobavljačem.

## Što možete raditi s tim

Tijek rada ide od uvoza preko izrade nacrta i pregleda do izvoza, a nacrti se tretiraju kao polazišta koja nastavnik uređuje, a ne kao gotovi materijali. Poslovi izrade lekcija stavljaju se u red čekanja i mogu se obnoviti, pa se duga generacija koja ne uspije može nastaviti, a ne započeti iznova, a generirani se artefakti mogu preuzeti. Svoje alate izlaže i [[agentic-ai|agentu]] preko MCP poslužitelja i može se povezati s Google Driveom, pa ga škola može uklopiti u postojeće pohranjivanje i raspoređivanje.

Projekt je namjerno neovisan o modelu. Dokumentira lokalne Ollama modele, jeftine OpenRouter rute i hostane opcije jedne uz druge, a njegov je vodič kroz modele datiran, što jasno pokazuje da su preporuke polazišta iz kataloga, a ne nastavničke prosudbe kvalitete.

## Napomene i upozorenja

Softver je besplatan i [[open-source|otvorenog koda]] pod MIT licencijom za izvorni kod, iako komponente trećih strana zadržavaju svoje uvjete, a njegovo pokretanje znači plaćanje vlastite inferencije ako se rabi hostani model. Projekt se naziva betom koju pregledavaju nastavnici i u svojem README-u izravno kaže da prolazak kroz CI ne dokazuje kvalitetu poučavanja na živim modelima, što je pravi način čitanja zelene testne suite u ovom području: ona provjerava softver, a ne [[pedagogy|pedagogiju]]. Održava ga MacxLabs i prihvaća primjere lekcija koje su pregledali nastavnici kao doprinose.

## Povezani pojmovi
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
