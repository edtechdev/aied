---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Besplatan alat u pregledniku koji za svakog studenta na kolegiju programiranja provodi pisani, vremenski ograničen oblik usmenog ispita o kodu i predlaže ocjene s citiranim dokazima koje nastavnik odobrava."
url: https://code-viva.pisan.me/
author: "Code Viva"
author_url: https://code-viva.pisan.me/
resource_type: [software]
access: [free]
last_verified: "2026-11-04"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Code Viva za svakog studenta na kolegiju programiranja provodi pisani, vremenski ograničen oblik [[oral-assessment|usmenog ispita]], otprilike petnaest do dvadeset minuta po studentu, bez nastavnika u prostoriji. Čita studentov predani kod i povijest commita, piše četiri do šest pitanja o studentovim vlastitim funkcijama, nazivima i commitima te svakom studentu daje osobnu poveznicu s koje odgovara.

## Što možete raditi s tim

Predaje dolaze iz izvoza iz Gradescopea, zipa preuzetog iz Canvasa, zipa s mapom po studentu ili iz GitHub Classrooma s tokenom za čitanje. Nastavnik određuje trajanje sesije, broj pitanja i rok, označava produženo vrijeme od 1,25x do 3x te čita, uređuje ili zamjenjuje generirana pitanja prije slanja poveznica. Pitanja pokrivaju bazne slučajeve rekurzije, zaštitne uvjete, odabir struktura podataka, neprozirna imena varijabli, razmjere i praćenje izvršavanja, rečenice iz specifikacije zadatka i obrasce commita poput jednog velikog ili noćnog commita. Odgovori se vraćaju kao kod odgovora, a zaslon za pregled prikazuje svaki transkript uz predloženu ocjenu od 0 do 3 i rečenice na kojima počiva, plus red čekanja s oznakama poredan po tome koliko je razgovor opravdan. Rezultati se izvoze u CSV, a jedanaest demo kolegija omogućuje čitatelju da isproba cijelu petlju na izmišljenim podacima.

## Za koga je

Nastavnici na kolegijima programiranja koji žele dokaz da student može objasniti vlastiti kod i koji bi radije razgovarali s kratkim popisom studenata nego sa svima; pitanja o commitima čine ga oblikom [[process-oriented-assessment|ocjenjivanja usmjerenog na proces]].

## Napomene i upozorenja

Sve se odvija u pregledniku: kolegij stoji u lokalnoj pohrani s izvozom u JSON, pitanja putuju u dijelu poveznice koji preglednici ne šalju poslužiteljima, a odgovori se vraćaju samo kao kodovi koje studenti odluče poslati, pa nikakvi podaci o studentima ne dolaze do treće strane. Generator pitanja temelji se na pravilima, a ne na modelu. Prema vlastitim riječima alata njegov je čitač koda heuristički, pa neobično oblikovanje ili makronaredbe mogu sakriti funkciju, a ocjena može nagraditi poznavanje rječnika umjesto razumijevanja koda, zbog čega su ocjene prijedlozi koje nastavnik odobrava i zbog čega alat savjetuje da ulozi budu niske. Nijedna licencija ni izvorni repozitorij nisu objavljeni, a budući da poveznice nose pitanja, dosežu nekoliko kilobajta, dovoljno da se prelome u okviru poruke u sustavu za upravljanje učenjem.

## Povezani pojmovi

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
