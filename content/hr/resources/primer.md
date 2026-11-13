---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Sustav za autorstvo otvorenog koda iz Wharton Generative AI Labs koji strukturirani intervju s nastavnikom pretvara u pokretljivu, prilagodljivu simulaciju učenja s vlastitim agentima mentora, vježbe i povratne informacije."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Primer je [[open-source|sustav otvorenog koda]] za izradu obrazovne [[simulation|simulacije]] opisivanjem lekcije AI-ju umjesto programiranja iste. Prosudba nastavnika određuje što simulacija poučava: intervju izvlači ono što predavač zna o lekciji i studentima, nacrt dokumenta čini to znanje preglednim, a ništa se ne gradi dok ga nastavnik ne odobri.

## Što možete raditi s tim

Intervju teče jedno pitanje po jedno pitanje: lekcija, razina studenata i prethodno znanje, uobičajene zablude, pristup predavača i način na koji će se uspjeh ocjenjivati. Nastavnici mogu govoriti ili tipkati te učitati syllabus, nastavne pripreme ili rubrike. Ono što se vraća jest nacrt dokumenta koji pokriva ciljeve, tijek scenarija, likove, uloge i logiku prilagodbe, a koji nastavnik revidira i odobrava kao što bi nastavnu pripremu. Zatim ga grade pet agenata: Intake, Design, Casting Director, Image Generation i Experience Builder, koji sastavlja rezultat za jednog studenta ili cijeli razred.

Za vrijeme rada tri se agenta susreću sa studentom. Mentor aktivira prethodno znanje i iznosi zablude na površinu. Agent za vježbu glumi sugovornika u igri uloga ili učenika u teachbacku, gdje student objašnjava pojam i revidira objašnjenje kad ga se propituje. Agent za povratnu informaciju radi na temelju transkripta, raspravljajući o konkretnim trenucima i o tome kako se učenje nastavlja izvan scenarija. Svaki agent ima lik unutar svijeta i nastavni sloj koji prati ciljeve i prikuplja dokaze, a nastavnik dobiva pojedinačna i zbirna izvješća.

## Za koga je

Predavači, dizajneri poučavanja i razvojni stručnjaci za nastavnike mogu detaljno opisati lekciju bez želje da za nju pišu kod. Istraživači koji proučavaju autorstvo s nastavnikom u petlji ili [[agentic-ai|višeagentske tokove rada]] dobivaju radni sustav za pregled, a razvijatelji ga mogu proširiti jer su promptovi, predlošci, kontrolne liste, obrasci orkestracije i TypeScript kod svi otvorenog koda.

## Napomene i upozorenja

Autori Primer nazivaju eksperimentalnim prototipom, a ne provjerenim proizvodom za razred. Nije evaluiran kao obrazovna intervencija u razredima i nitko ga nije pregledao u pogledu FERPA-e, COPPA-e, državnih zakona o privatnosti studenata ni politike okruga, pa ustanova koja ga rabi sa studentima sama snosi tu provjeru. Softver je pod MIT licencijom i besplatan, ali pokretanje simulacije zahtijeva pristup modelu, što košta. Budući da ne ovisi o modelu i radi na lokalnim modelima ili modelima s otvorenim težinama, može se postaviti tamo gdje su pravila privatnosti stroža. Bijeli papir o arhitekturi i promptovima povezan je sa stranice projekta. Repozitorij je imao 98 zvjezdica i 16 forkova kad je provjeren u studenome 2026.

## Povezani pojmovi

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
