---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Javna ljestvica za vrhunske modele koji ocjenjuju stvarne rukom pisane sveučilišne STEM odgovore prema stavkama rubrike koje je nastavnik odabrao."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
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

GradeBench postavlja usko, korisno pitanje o [[automated-assessment|automatiziranom ocjenjivanju]]: s obzirom na studentov rukom pisani odgovor, nastavnikovu rubriku, referentno rješenje i stavke rubrike koje je nastavnik doista odabrao, odabire li vrhunski model iste stavke? Zlatne oznake stvarni su odabiri nastavnika i asistenata u rubrikama s ispita i kvizova, a ne ponovno ocijenjeni izlaz modela.

## Što možete raditi s tim

Pročitajte ljestvicu prije nego što povjerujete tvrdnji o točnosti bilo kojeg dobavljača alata za ocjenjivanje, i pročitajte konstrukciju zadataka prije nego što povjerujete ljestvici. [[benchmark]] sadrži 464 zadatka izvučena iz 125 pitanja u 45 [[higher-ed|sveučilišnih]] kolegija na više od deset institucija, ograničen na ispitne i kvizovske stavke slobodnog odgovora koje je profesor ili asistent pregledao redak po redak, s naglaskom na djelomičnom bodovanju — zadatci s punim brojem bodova i zadatci s nula bodova ograničeni su na po 5% jer su modelima laki.

Trenutačna ljestvica doseže vrhunac daleko ispod slaganja među ljudima: najbolji model postiže 57.3% točnog podudaranja s rubrikom, a stranica prikazuje točnost u odnosu na cijenu po 1,000 odgovora, gdje model koji zaostaje 0.8 bodova košta otprilike sedminu te cijene. Ta je os cijene praktično koristan dio, budući da je ocjenjivanje operacija velikog obujma.

Za drugi, neovisno izgrađeni instrument pogledajte [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) Learning Design Alliancea, koji je pakiran kao otvoreni repozitorij, a ne kao hostana ljestvica, i sažet je u [[porcaro-ai-grading-benchmark-2026|Porcarovoj studiji]].

## Za koga je

Nastavnici koji odlučuju hoće li alatu za ocjenjivanje dopustiti da objavljuje ocjene bez pregleda, stručnjaci za procjenu koji pišu zahtjeve za nabavu, i istraživači kojima treba cilj na razini rubrike, a ne korelacija bodovanja eseja.

## Napomene i upozorenja

GradeBench objavljuje Pensive, komercijalna platforma za AI ocjenjivanje, pa benchmark i proizvod dijele vlasnika; konstrukcija zadataka dokumentirana je i obranjiva, ali okvirivanje tretirajte kao dobavljačevo. Pokriva STEM ispite s rubrikama od najmanje četiri stavke, što isključuje eseje, kratke odgovore i objave u raspravama — formate u kojima se odvija većina ocjenjivanja u [[humanities-education|humanističkim znanostima]]. Točno podudaranje s rubrikom stroga je metrika: dva ocjenjivača mogu se ne slagati oko stavke, a obojica mogu biti u pravu o studentu. Rezultati opisuju verzije modela dostupne u studenom 2026. i mijenjat će se.

## Povezani pojmovi

- [[automated-assessment]] — praksa koju benchmark mjeri
- [[assessment-validity]] — kriterij kojemu je rezultat ljestvice posredni pokazatelj
- [[benchmark]] — šira klasa instrumenata kojoj ovo pripada
