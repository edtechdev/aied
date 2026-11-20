---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Javna ljestvica detektora AI teksta bodovanih na RAID-u, benchmarku izgrađenom za testiranje robusnosti na modele, domene, postavke dekodiranja i adversarijalne napade."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

RAID je benchmark iza većine ozbiljnih tvrdnji o [[ai-detection|otkrivanju AI teksta]], a njegova je ljestvica mjesto gdje možete provjeriti preživljava li objavljena točnost detektora promjenu modela, domene, postavke dekodiranja ili namjernog napada. Unosi se boduju na testnom skupu i može ih podnijeti svatko tko slijedi postupak podnošenja u repozitoriju.

## Što možete raditi s tim

Filtrirajte po domeni — sažetci, knjige, vijesti, poezija, recepti, Reddit, recenzije, wiki — po strategiji dekodiranja (pohlepno ili uzorkovanje), po kazni za ponavljanje i po adversarijalnom napadu, uključujući bjeline, homoglife, zamjenu sinonimima, parafraziranje, razmake nulte širine i brisanje članova. Zatim usporedite detektor kroz metrike: AUROC, TPR pri stopi lažno pozitivnih od 5% i TPR pri 1%.

Upravo je taj skup filtara poanta. Detektor koji na zbirnoj razini postiže rezultat blizu 1.000 može posustati čim se tekst parafrazira ili promijeni izvorni model, a ljestvica vam omogućuje da vidite pad prije nego što institucija na njemu utemelji slučaj [[academic-integrity|akademskog nepoštenja]]. Stupac lažno pozitivnih od 1% najvažniji je u obrazovanju, jer na institucionalnoj razini stopa pogreške od 1% znači stotine nepravedno optuženih studenata.

## Za koga je

Istraživači koji evaluiraju metode otkrivanja, administratori koji pišu politike koje bi mogle upućivati na detektor, i nastavnici koji žele konkretan odgovor na „može li se ovo otkriti?" prije nego što to kažu u silabu.

## Napomene i upozorenja

Benchmark mjeri otkrivanje strojno generiranog teksta, a ne nepoštenje: student koji koristi AI za planiranje, izradu nacrta ili reviziju proizvodi tekst koji detektori nisu izgrađeni da uhvate, a student koji [[language-learning|piše na drugom jeziku]] poznat je rizik lažno pozitivnih koji ljestvica ne može pokazati. RAID je istraživački artefakt koji održava akademski tim; pokrivenost prati generativne modele u njegovu testnom skupu, pa noviji modeli mogu biti nedovoljno zastupljeni dok se benchmark ne osvježi. Ljestvica rangira detektore, a ne prakse rukovanja podacima njihovih dobavljača, a visok AUROC ne govori ništa o tome je li slanje studentskih radova toj usluzi zakonito ili etično u vašoj jurisdikciji.
