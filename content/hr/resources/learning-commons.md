---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Otvorena AI infrastruktura za obrazovne proizvode: graf znanja o standardima i kurikulima, evaluatori za ocjenjivanje izlaza LLM-a, agentske vještine neovisne o modelu za učiteljske radne tokove i Curriculum Sync za učitavanje kurikula u sustav za upravljanje učenjem."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**Learning Commons** objavljuje tri otvorena alata za izgradnju AI značajki na stvarnom sadržaju kurikula — **[[knowledge-graph|graf znanja]]** akademskih standarda, kurikula i istraživanja o znanosti učenja, biblioteku **Evaluators** za prosudbu generiranog teksta i **[[agentic-ai|agentske vještine]]** neovisne o modelu za uobičajene učiteljske radne tokove — te vodi platformu koja dodaje Curriculum Sync za učitavanje kurikula u [[edtech-platform|sustav za upravljanje učenjem]].

## Što možete raditi s tim

**Uskladite generirani sadržaj sa standardom.** Graf znanja modelira standarde, [[curriculum-design|kurikule]] i istraživanja kao entitete i odnose pod jednom zajedničkom shemom. Proizvod može pronaći standard kojemu neka jedinica treba težiti, proći kroz odnose preduvjeta ili utemeljiti sadržaj tutora u kurikulu koji bi trebao poučavati, bez izgradnje i održavanja vlastitog podatkovnog toka.

**Ocijenite generirani izlaz prije nego što ga studenti vide.** **Evaluators** mjere svojstva [[llm|izlaza LLM-a]] — složenost teksta, [[feedback|povratna informacija]], usklađenost sa standardima i trajne vještine — i isporučuju se kao Python i TypeScript SDK-ovi na npm-u i PyPI-ju. U praksi služe kao regresijska provjera kad se upit ili model promijeni, kao usporedba kandidatskih modela ili kao filtar na generiranim jedinicama i objašnjenjima.

**Pakirajte učiteljski radni tok.** **Agent Skills** pakiraju upute, reference i zaštitne ograde u otvorenom formatu neovisnom o modelu: provjera razumijevanja, slojevita diferencijacija nastave, plan nastave usklađen sa standardima i priprema nastave. Mogu se ubaciti u agentski okvir ili čitati kao razrađeni predlošci za to koliko strukture treba pouzdan radni tok u učionici.

**Premjestite kurikul u sustav za upravljanje učenjem.** Curriculum Sync je korak platforme koji kartu standarda pretvara u nešto što kolegij može stvarno upotrijebiti u LMS-u.

## Za koga je

Programerima koji grade AI značajke u kurikul i [[assessment|proizvode za ocjenjivanje]] te timovima za kurikul ili standarde koji opskrbljuju podatke s kojima se ti proizvodi usklađuju. [[teacher-role|Nastavnici]] mogu agentske vještine koristiti sami, no okvir samoga repozitorija je infrastruktura za ljude koji isporučuju alate.

## Napomene i upozorenja

Otvorenost [[open-source|izvornog koda]] ne čini podatke otvorenima. Kôd grafa znanja i evaluatora je MIT, a Agent Skills je Apache-2.0, dok svaki skup podataka nosi vlastitu oznaku pristupa — Open, Open + Gated ili Gated — a Gated sadržaj nije obuhvaćen otvorenim licencijama na koje se repozitorij poziva, pa provjerite katalog skupova podataka prije nego pretpostavite prava na ponovnu upotrebu. Sadržaj upita evaluatora je CC BY 4.0, no anotirani korpusi CLEAR i PERSUADE 2.0 koje koriste licencirani su CC BY-NC-SA 4.0. Platforma i skupovi podataka iza nje zahtijevaju račun.

## Povezani pojmovi

- [[curriculum-design]] — graf postoji kako bi generirani sadržaj uskladio sa standardima i kurikulima
- [[open-source]] — MIT i Apache-2.0 kôd, uz licenciranje podataka po skupu
- [[educational-nlp]] — evaluatori su sloj mjerenja teksta nad izlazom LLM-a
- [[agentic-ai]] — vještine koje pakiraju radni tok da ga model provede
- [[edtech-platform]] — Curriculum Sync učitava kurikule u sustav za upravljanje učenjem
- [[llm]] — meta ocjene i korisnik vještina
