---
title: "MindRouter"
created: "2026-11-12T19:15:00-05:00"
updated: "2026-11-12T19:45:00-05:00"
type: resource
summary: "Apache-2.0 pristupnik za inferenciju sa Sveučilišta u Idahu koji ispred kampusnog klastera vLLM i Ollama GPU čvorova postavlja jedan API kompatibilan s OpenAI-jem, dodajući pravično raspoređivanje, kvote tokena po korisniku, SSO, revizijsko bilježenje te praćenje GPU-a i energije uživo."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
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

Većina kampusnih rasprava o AI-ju počinje pitanjem koji model kupiti i staje prije težeg pitanja: gdje se izvodi, tko ga mjeri i tko može vidjeti zapise. MindRouter je odgovor na to drugo pitanje. To je samostalno hostan pristupnik koji stoji ispred heterogenog klastera [[llm|LLM]] poslužitelja — vLLM i Ollama čvorova na GPU-ima koje ustanova posjeduje — i izlaže jedan API koji govori dijalekte OpenAI-ja, Anthropica i Ollame, prevodeći između njih tako da postojeći klijentski kod nastavi raditi.

## Što možete raditi s njim

Usmjerite alat na pristupnik umjesto na dobavljačevu krajnju točku. Iza njega MindRouter preuzima dijelove koje zajednička postava treba: pravično raspoređivanje s ponderiranim deficit round robinom, kvote tokena i zahtjeva po korisniku, pristup temeljen na ulogama s neobveznim SSO-om kroz Azure AD/Entra, Google, bilo kojeg OIDC pružatelja ili SAML 2.0, i potpuno revizijsko bilježenje upita, odgovora i artefakata. Popratni agent na GPU-u izvješćuje o iskorištenosti, memoriji, temperaturi i snazi svakog čvora, pa administrator može vidjeti energetski trošak po zahtjevu i postupno isprazniti pozadinski poslužitelj kad slijedi održavanje. Pokriva više od razgovora — ugrađivanja, vid, generiranje slika i videa, sintezu i prepoznavanje govora, OCR dokumenata — i isporučuje MCP poslužitelje i vještine agenata za pomoćnike u programiranju.

Razlog zašto bi fakultet to primijetio jest onaj koji projekt imenuje: [[institutional-ai-infrastructure|institucionalni AI suverenitet]]. Upiti i dokumenti ostaju na infrastrukturi koju ustanova vodi, umjesto da prolaze kroz oblak treće strane, što je lakše braniti pred fakultetskim senatom ili uredom za [[privacy|privatnost]] nego ugovor o obradi podataka s dobavljačem. Drži li taj argument, ovisi o tome ima li ustanova GPU-e, struju i osoblje — pristupnik lokalni hosting čini upravljivim, ne jeftinim.

## Za koga je

Istraživačke računalne i centralne IT skupine s postojećim GPU kapacitetom; centri za nastavu i učenje koji žele jedno mjesto za mjerenje upotrebe nastavnika i studenata; i administratori koji odvažu hostane korporativne platforme nasuprot vlastitoj inferenciji. Riječ je o postavi s Docker Composeom, s dokumentiranom SSO konfiguracijom i prilagođenim brendiranjem, a održava se na Sveučilištu u Idahu, gdje ju je autor predstavio na PEARC '26; projekt ima 22 zvjezdice i 3 račvanja do studenoga 2026.

## Napomene i upozorenja

Besplatan i otvorenog koda pod Apache-2.0, ali trošak se premješta, a ne nestaje: hardver, struja i vrijeme osoblja za vođenje klastera. Softver je mlad prema infrastrukturnim mjerilima — tri suradnika, jedna ustanova podrijetla i izdanja numerirana u stotinama oznaka — pa bi ga fakultet trebao pilotirati uz postojeću uslugu, a ne kao jedini put do modela. Objavljena evaluacija ponašanja raspoređivanja i kvota pod stvarnim kampusnim opterećenjem nije u repozitoriju; rad s PEARC-a mjesto je na kojem treba tražiti vlastiti prikaz autora.

## Povezani pojmovi

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
