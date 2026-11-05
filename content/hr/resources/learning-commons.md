---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Otvorena infrastruktura umjetne inteligencije iz obrazovne inicijative Marka Zuckerberga i Priscille Chan: graf znanja o standardima, kurikulima i podacima o znanosti učenja, evaluatori za ocjenu izlaza LLM-a i agentske vještine neovisne o modelu za učiteljske radne tokove."
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**Learning Commons** obrazovna je inicijativa Marka Zuckerberga i Priscille Chan, pokrenuta 2025. kako bi rad Chan Zuckerberg Initiative na znanosti učenja prenijela u infrastrukturu na kojoj se edtech proizvodi doista grade. Njezin je argument infrastrukturan, a ne pedagoški: istraživanja postoje, akademski standardi postoje i kvalitetni kurikuli postoje, ali nalaze se u odvojenim sustavima, pa programeri grade na onome što je najlakše dostupno. Organizacija na GitHubu objavljuje tri otvorena alata – graf znanja (Knowledge Graph), skup evaluatora i [[agentic-ai|agentske vještine]] – te vodi platformu koja dodaje Curriculum Sync za učitavanje kurikula u [[edtech-platform|sustav za upravljanje učenjem]].

## Što možete raditi s tim

**Knowledge Graph** modelira akademske standarde, kurikule i istraživanja o znanosti učenja kao entitete i odnose pod jednom zajedničkom shemom, pa alat može uskladiti generirani sadržaj sa standardom bez izgradnje vlastitog podatkovnog toka. **Evaluators** mjere svojstva [[llm|izlaza LLM-a]] kroz prizmu znanosti učenja – složenost teksta, [[feedback|povratna informacija]], usklađenost s akademskim standardima i trajne vještine – i isporučuju se s Python i TypeScript SDK-ovima, objavljenima na npm-u i PyPI-ju, za bodovanje generiranog sadržaja ili usporedbu kandidatskih modela. **Agent Skills** pakiraju upute, reference i zaštitne ograde za uobičajene učiteljske radne tokove u otvorenom formatu neovisnom o modelu: provjera razumijevanja, slojevita diferencijacija nastave, planovi nastave usklađeni sa standardima i priprema nastave. U praksi graf čini druga dva alata vjerodostojnima: usklađivanje sadržaja je tvrdnja, a graf je referenca prema kojoj se provjerava.

## Za koga je

Programerima koji grade AI značajke u [[curriculum-design|kurikul]] i proizvode za ocjenjivanje te timovima za kurikul ili standarde koji opskrbljuju podatke s kojima se ti proizvodi usklađuju. Nastavnici mogu agentske vještine koristiti sami, no okvir samoga repozitorija je infrastruktura za ljude koji isporučuju alate.

## Napomene i upozorenja

Otvorenost [[open-source|izvornog koda]] ne čini podatke otvorenima. Kôd grafa znanja je MIT, dok svaki skup podataka nosi vlastitu oznaku pristupa – Open, Open + Gated ili Gated – a Gated sadržaj izričito nije obuhvaćen otvorenim licencijama na koje se repozitorij poziva, pa provjerite katalog skupova podataka prije nego pretpostavite prava na ponovnu upotrebu. Kôd evaluatora je MIT, a sadržaj njihovih upita CC BY 4.0, no anotirani korpusi CLEAR i PERSUADE 2.0 koje koriste licencirani su CC BY-NC-SA 4.0. Platforma i skupovi podataka iza nje zahtijevaju račun. Aktivnost repozitorija kako je čitana 2026-11-04: 167 zvjezdica za graf znanja, 88 za Evaluators, 41 za Agent Skills. Inicijativu financira CZI, a njezino uokvirenje problema uokvirenje je samoga financijera.

## Povezani pojmovi

- [[curriculum-design]] — graf postoji kako bi generirani sadržaj uskladio sa standardima i kurikulima
- [[open-source]] — MIT i Apache-2.0 kôd, uz licenciranje podataka po skupu
- [[educational-nlp]] — evaluatori su sloj mjerenja teksta nad izlazom LLM-a
- [[agentic-ai]] — vještine koje pakiraju radni tok da ga model provede
- [[edtech-platform]] — Curriculum Sync učitava kurikule u sustav za upravljanje učenjem
- [[llm]] — meta ocjene i korisnik vještina
