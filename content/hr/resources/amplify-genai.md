---
title: "Amplify GenAI"
created: "2026-11-12T19:15:00-05:00"
updated: "2026-11-12T19:45:00-05:00"
type: resource
summary: "Vanderbiltova MIT-licencirana korporativna platforma za generativnu umjetnu inteligenciju, postavljena u vlastitom AWS računu ustanove: prilagođeni asistenti nad lokalnim dokumentima, odgovori s dohvaćanjem, dijeljenje u cijeloj organizaciji i obračun troškova do pojedinačne poruke."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
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

Amplify GenAI suprotan je ulog od sveučilišne licence za komercijalni asistent: ustanova sama vodi platformu, unutar vlastitog računa Amazon Web Services, i plaća ono što koristi. Vanderbilt ju je izgradio za vlastitu zajednicu, objavio pod MIT-om u tri repozitorija i sada je nudi drugim organizacijama kao alternativu ugovorima po korisničkom mjestu — argument je da skupi dio trebaju biti modeli, a ne broj mjesta.

## Što možete raditi s njom

Korisnici grade prilagođene asistente učitavanjem dokumenata ili povezivanjem izvora podataka, a asistenti odgovaraju pomoću [[rag|generiranja s dohvaćanjem]] nad tim materijalom, a ne samo iz općeg treniranja. Asistenti se mogu dijeliti u cijeloj organizaciji, lančano povezivati u jedan razgovor i dobivati predloške upita; platforma također izrađuje PowerPoint i Word datoteke, dijagrame i vizualizacije. Administratori dobivaju ono što zajednička usluga treba: obračun troškova do razine poruke, ograničenja po korisniku, mape i radne prostore te SSO — sve u postavi koju ustanova kontrolira.

Projektna odluka koja je najvažnija za [[higher-ed|fakultet]] jest model obračuna. Vanderbilt izvješćuje da je s 1,300 pilot-korisnika trošak po korisniku bio oko \$3 mjesečno uključujući AWS, i da je polovica tih korisnika potrošila manje od \$1 mjesečno na tokene — brojke koje sveučilište predstavlja kao studiju slučaja, a ne revidirani benchmark. Naplata prema potrošnji nagrađuje kampus u kojem manjina korisnika obavi većinu posla, što je uobičajen oblik uvođenja AI-ja, i čini pitanje financijskog ureda („koliko to košta po studentu?“) odgovorivim iz zapisa, a ne iz ugovora.

## Za koga je

Centralni IT i CIO uredi koji već izvode radna opterećenja u AWS-u i žele alternativu komercijalnom korporativnom asistentu koju podržava zajednica; nastavnici kojima trebaju asistenti utemeljeni na materijalu kolegija bez slanja tog materijala u dobavljačev potrošački proizvod; i ustanove koje žele jedno mjesto na kojem vide što ljudi rade s modelima. Budući da se postavlja u vlastiti račun ustanove, pitanje smještaja podataka rješava postava, a ne obećanje dobavljača.

## Napomene i upozorenja

Besplatna za licenciranje, ali ne i za rad: ustanova plaća AWS i pružatelje modela. Odabir modela ide kroz Amazon Bedrock (Anthropic, Mistral) ili OpenAI i Microsoft Azure, a pokretanje vlastitih lokalnih modela nije implementirano. Projekt izričito navodi da ne može podržati pojedinačne postave i upućuje organizacije na komercijalne partnere — pa realan trošak uključuje osoblje ili izvođača. Riječ je o postavi u tri repozitorija (frontend, backend, infrastruktura) s desecima zvjezdica, a ne tisućama, i gornja usporedba troškova vlastito je iskustvo Vanderbilta, a ne kontrolirana studija. Ustanove koje bi radije zadržale inferenciju na hardveru koji posjeduju trebaju pogledati [MindRouter](/aied/resources/mindrouter/) i čitati ih zajedno: Amplify je aplikacijski sloj nad modelima dobavljača, MindRouter je pristupnik nad vašim GPU-ima.

## Povezani pojmovi

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
