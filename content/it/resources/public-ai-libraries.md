---
title: "Biblioteche pubbliche di IA"
created: "2026-11-05T02:58:35-05:00"
type: resource
summary: "Un progetto pilota nazionale 2025–2026 che installa una postazione di lavoro Public AI condivisa nelle biblioteche pubbliche statunitensi — chat, generazione di immagini, musica e video, un IDE per il codice e una guida educativa — con un account privato per ogni utente."
url: https://libraries.publicai.co/
source_code: https://github.com/forpublicai/libraries-kiosk
author: "Public AI"
author_url: https://libraries.publicai.co/
resource_type: [software, collection of tools]
access: [freemium]
license: "GPL-3.0 (kiosk site); MIT (inference utility)"
last_verified: "2026-11-05"
foundations: [ai-literacy]
technology: [llm, generative-ai]
ethics: [digital-divide, equity-in-ai-education]
level: [adult learning]
audience: [librarians, administrators, learners]
confidence: high
updated: "2026-11-08T04:49:42-05:00"
translation_of: "resources/public-ai-libraries"
source_updated: "2026-11-05T07:06:00-05:00"
translation_note: "Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**Biblioteche pubbliche di IA** è un progetto pilota nazionale 2025–2026 che installa una postazione di lavoro IA condivisa, chiamata chiosco, nelle [[libraries|biblioteche pubbliche]] degli Stati Uniti. È una partnership tra Library of Congress, Metagov e Public Knowledge, a cui si sono unite le biblioteche statali dello Utah e del New Jersey; otto biblioteche in cinque stati avevano un chiosco attivo quando la pagina del programma è stata letta l'ultima volta. La premessa è la fornitura e non la formazione: la [[digital-divide|biblioteca fornisce l'accesso]] che i singoli utenti non possono comprare, in un luogo con personale dove qualcuno può aiutare.

## Cosa si può fare

Ogni chiosco è una postazione ospitata nel cloud che gira su un computer che la biblioteca possiede già. Offre un assistente chat per ricerca, apprendimento e domande generali; generazione di immagini, musica e video; un IDE online per la programmazione e piccoli progetti di app; e un'area educativa con una guida di apprendimento interattiva e materiali verificati dalla biblioteca. Ogni utente riceve un account separato, così il lavoro e la cronologia restano privati anche su una macchina condivisa — il programma dichiara di non conservare le conversazioni o i contenuti generati dagli utenti sulla propria piattaforma.

## A chi è rivolto

Biblioteche pubbliche che vogliono ospitare un chiosco (il programma accoglie candidature per le sedi pilota), e il personale che assiste gli utenti che lo usano. I casi d'uso pubblicati sono candidature di lavoro, piani aziendali, elaborati di corso e progetti creativi. Il codice merita una lettura anche per chi costruisce servizi IA di interesse pubblico: il sito del programma e il front end del chiosco sono GPL-3.0 su [libraries-kiosk](https://github.com/forpublicai/libraries-kiosk), e il servizio chat è la Public AI Inference Utility [[open-source|open source]] (MIT) su [chat.publicai.co](https://github.com/forpublicai/chat.publicai.co), un deployment di Open WebUI che chiunque può usare con un account gratuito.

## Note e avvertenze

- Le biblioteche partecipanti contribuiscono con **\$1,000 per ogni installazione di un chiosco all'anno**; il progetto pilota stesso è limitato alle sedi che hanno presentato domanda.
- L'informativa sulla privacy è un'affermazione del programma, non un accertamento verificato; una biblioteca dovrebbe confermare i termini di conservazione e di sicurezza per i minori nel proprio accordo sul trattamento dei dati.
- La seconda e la terza fase della roadmap, che consentono alle biblioteche di importare archivi locali e governare i sistemi che ne derivano, sono pianificate e non ancora rilasciate.

## Concetti collegati

- [[libraries]]
- [[digital-divide]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[open-source]]
- [[lifelong-learning]]
- [[llm]]
