---
title: "Moodleov tip pitanja s AI tekstom"
created: "2026-11-12T19:15:00-05:00"
updated: "2026-11-12T19:45:00-05:00"
type: resource
summary: "Moodleov tip pitanja otvorenog koda (GPL v3) koji ocjenjuje odgovore slobodnog teksta velikim jezičnim modelom prema upitu za svako pitanje i neobveznoj shemi ocjenjivanja, koristeći OpenAI, Azure ili samostalno hostani Ollama model i prikazujući AI-jeve povratne informacije ljudskom ocjenjivaču."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Većina AI integracija u kvizove šalje svaki odgovor na fiksni poziv za ocjenjivanje. Ovaj Moodleov tip pitanja radi obrnuto: nastavnik piše rubriku. Svako pitanje nosi **upit** koji modelu govori kako procijeniti odgovor i neobveznu **shemu ocjenjivanja** koja opisuje kako se dodjeljuju bodovi, pa stavka „napišite rečenicu u prošlom vremenu“ može odrediti deset bodova za bez pogrešaka, nula za slomljenu gramatiku i minus jedan bod za svaku pravopisnu pogrešku. Model vraća ocjenu i [[feedback|povratnu informaciju]], a nastavnik tu povratnu informaciju može vidjeti uz odgovor kad ocjenjuje ručno.

## Što možete raditi s njim

Dodajte AIText pitanje u bilo koji Moodle kviz, napišite upit i shemu ocjenjivanja te testirajte upite AJAX **testerom upita** u obrascu za uređivanje, umjesto da prolazite kroz pokušaje pregleda. Ocjenjivanje ide kroz dva popratna ponašanja pitanja (trenutačno i odgođeno) koja se moraju instalirati uz tip pitanja, što AI ocjenjivanje drži izoliranim od Moodleovih temeljnih ponašanja; postojeći pokušaji koji su koristili naslijeđeno ponašanje `interactivecountback` migriraju se pri nadogradnji. Ako model nije dostupan, ocjenjivanje degradira umjesto da prijavi grešku, pa se pokušaj ne gubi. Budući da je pitanje izvorni tip kviza, rezultati završavaju u imeniku ocjena kao svaka druga stavka — što je ono što kolegijski tim treba prije nego što [[automated-assessment|automatizirano ocjenjivanje]] može tretirati kao pilot, a ne kao demonstraciju.

Dizajn također stavlja rubriku tamo gdje se odlučuje [[ai-feedback-quality|kvaliteta povratne informacije]]: u upit koji piše nastavnik, a ne u dobavljačevu zadanu postavku. To je poštena upotreba alata — kriteriji koje možete pregledati i revidirati — iako ujedno znači da je gornja granica kvalitete rubrika, a nejasan upit daje nejasno ocjenjivanje. Ustanove mu se okreću kod čestih provjera niskog rizika o kojima ovisi [[formative-assessment|formativno ocjenjivanje]], gdje bi inače čovjek čitao četrdeset kratkih odgovora na večer.

## Za koga je

Moodleovi administratori i programeri koji već vode stranicu; nastavnici koji žele AI ocjenjivanje bez zasebne platforme ili komercijalne licence; i istraživači kojima treba kontroliran ocjenjivački pipeline za proučavanje. Zahtijeva Moodle 4.5 ili noviji i API pristup modelu — bilo OpenAI ili Azure kroz Moodleov AI podsustav, bilo samostalno hostanu instancu Ollame kroz Local AI Manager, što tekst studenata drži na lokalnoj infrastrukturi. Dodatak održava Marcus Green, nalazi se na Moodleovu tržištu dodataka i imao je 33 zvjezdice i 36 račvanja kad je ova stranica provjerena.

## Napomene i upozorenja

Otvorenog koda pod GPL v3 ili novijim, ali besplatno ne znači besplatno za rad: netko plaća API modela, a kvaliteta ocjenjivanja ovisi o odabiru modela i dizajnu upita. Odgovori slobodnog teksta napuštaju Moodleov poslužitelj kad se koristi udaljeni pružatelj, pa ugovor o podacima ustanove određuje što se smije poslati; ruta sa samostalno hostanom Ollamom postoji za stranice koje ne mogu slati studentski rad van. Repozitorij ne navodi objavljenu studiju točnosti ili podudarnosti, pa dodatak ne treba prihvatiti uz pretpostavku da je LLM ocjenjivanje jednako ljudskom — [[assessment-validity|valjanost]] se mora utvrditi lokalno prema ljudskim ocjenama prije nego što ijedna ocjena nosi težinu. Popratna ponašanja tvrda su ovisnost: instalacija samo tipa pitanja ostavlja pitanja bez mogućnosti ocjenjivanja.

## Povezani pojmovi

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
