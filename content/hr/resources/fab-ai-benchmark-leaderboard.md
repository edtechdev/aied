---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Ljestvica modela za obrazovne benchmarkove usmjerene na zemlje s niskim i srednjim dohotkom, koja pokriva pedagogiju, temeljnu pismenost, SEND, vizualnu matematiku i višejezičnu izvedbu, sa stupcima cijene i otvorenih težina."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Fab AI vrjednuje modele na obrazovnim zadatcima koji su važni ondje gdje su proračuni, propusnost i jezična pokrivenost ograničeni u [[global-south|zemljama s niskim i srednjim dohotkom]] za koje je benchmark izgrađen, i objavljuje rezultate kao ljestvicu koja se može sortirati, a ne kao znanstveni rad. Glavna tablica boduje benchmark pedagogije uz SEND, vizualnu matematiku i vizualno zaključivanje, s odvojenim karticama za višejezičnu pedagogiju, temeljnu pismenost i procjenu čitanja naglas.

## Što možete raditi s tim

Usporedite otprilike 300 modela po pedagoškim rezultatima koji se trenutačno kreću od niskih devedesetih do 21%, a zatim sortirajte prema onome što ministarstvo obrazovanja doista mora vagati: cijena po milijunu tokena, broj parametara, otvorene težine i datum izdanja. Raspon na dnu koristan je dio. Otvoreni modeli ispod 2B nalaze se između 21% i 43% na benchmarku pedagogije, dok su vrhunski modeli u niskim devedesetima, što pitanje „možemo li ovo pokretati offline na jeftinom hardveru" pretvara u kvantificiran kompromis, a ne u nagađanje.

Kartica [[multilingual-learning|višejezične]] pedagogije razlog je da spremite stranicu u oznake. Većina obrazovnih benchmarkova samo je na engleskom, a pitanje preživljava li pedagogija modela prijevod upravo je pitanje na koje ministarstvo u višejezičnom sustavu treba odgovor. Podatci se mogu preuzeti kao CSV, pa se usporedbe mogu ponovno pokrenuti lokalno.

## Za koga je

Kreatori politika i nabavni timovi koji biraju modele za nacionalne sustave, istraživači koji proučavaju [[digital-divide|jaz u pristupu]] u obrazovanju uz podršku AI-ja, i programeri kojima treba pedagoški cilj koji nije ispit na engleskom jeziku.

## Napomene i upozorenja

Ljestvica mjeri modele na vlastitim zadatcima benchmarka: visok pedagoški rezultat dokaz je o tim stavkama, a ne o učionici. Stupac cijene miješa cijene ulaznih i izlaznih tokena u omjeru 3:1, što je odluka modeliranja, a ne ono što će bilo koja konkretna primjena koštati. Pokrivenost jezika i lokalno hostanih modela mijenja se kako se novi modeli pojavljuju, a niski rezultati malih modela djelomično odražavaju format zadataka jednako koliko i sposobnost. Okvirivanje Fab AI-ja izričito je o zemljama s niskim i srednjim dohotkom, pa skup stavki benchmarka odražava taj kontekst i ne treba ga čitati kao opću ljestvicu obrazovanja. Provjerite datume izdanja: nekoliko unosa prethodi trenutačnoj generaciji modela.

## Povezani pojmovi

- [[benchmark]] — šira klasa instrumenata kojoj ovo pripada
- [[digital-divide]] — ograničenje radi čije vidljivosti postoje stupci cijene i otvorenih težina
- [[equity-in-ai-education]] — pitanje javne politike o kojemu ljestvica pruža informacije
