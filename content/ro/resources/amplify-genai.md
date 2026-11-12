---
title: "Amplify GenAI"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "Platforma enterprise de IA generativă a Vanderbilt, cu licență MIT, implementată în propriul cont AWS al unei instituții: asistenți personalizați pe documente locale, răspunsuri augmentate prin recuperare, partajare în cadrul organizației și contabilizarea costurilor până la nivelul mesajului individual."
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
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Amplify GenAI este pariul opus față de o licență la nivel de campus pentru un asistent comercial: instituția rulează platforma ea însăși, în propriul cont Amazon Web Services, și plătește pentru ce folosește. Vanderbilt a construit-o pentru propria comunitate, a publicat-o sub MIT în trei repository-uri și acum o oferă altor organizații ca alternativă la contractele enterprise pe loc — argumentul fiind că partea scumpă ar trebui să fie modelele, nu numărul de locuri.

## Ce poți face cu ea

Utilizatorii construiesc asistenți personalizați încărcând documente sau conectând surse de date, iar asistenții răspund cu [[rag|generare augmentată prin recuperare]] pe acel material, nu doar din antrenarea generală. Asistenții pot fi partajați în cadrul organizației, înlănțuiți într-o conversație și dotați cu șabloane de prompt; platforma produce și fișiere PowerPoint și Word, diagrame și vizualizări. Administratorii primesc ce are nevoie un serviciu partajat: contabilizarea costurilor până la nivel de mesaj, limite per utilizator, foldere și spații de lucru și SSO, totul într-o implementare pe care instituția o controlează.

Decizia de design care contează cel mai mult pentru un [[higher-ed|colegiu]] este modelul de contabilizare. Vanderbilt raportează că, cu 1.300 de utilizatori în pilot, costul pe utilizator a fost de aproximativ \$3 pe lună, inclusiv AWS, și că jumătate dintre acești utilizatori au consumat mai puțin de \$1 pe lună în tokenuri — cifre pe care universitatea le prezintă ca studiu de caz, nu ca benchmark auditat. Facturarea pe consum favorizează un campus în care o minoritate de utilizatori face cea mai mare parte a muncii, care este forma normală a adoptării IA, și face întrebarea biroului financiar („cât costă asta per student?”) să poată fi răspunsă din loguri, nu dintr-un contract.

## Pentru cine este

Birourile centrale de IT și CIO care rulează deja sarcini în AWS și vor o alternativă susținută de comunitate la un asistent enterprise comercial; cadrele didactice care au nevoie de asistenți ancorați în materialul de curs fără a-l trimite într-un produs de consum al unui furnizor; și instituțiile care vor un singur loc în care să vadă ce fac oamenii cu modelele. Pentru că se implementează în contul propriu al instituției, întrebarea despre rezidența datelor este rezolvată de implementare, nu de promisiunea unui furnizor.

## Note și precauții

Gratuit de licențiat, nu gratuit de rulat: instituția plătește AWS și furnizorii de modele. Alegerea modelului trece prin Amazon Bedrock (Anthropic, Mistral) sau OpenAI și Microsoft Azure, iar rularea propriilor modele locale nu este implementată. Proiectul declară clar că nu poate sprijini implementări individuale și îndrumă organizațiile către parteneri comerciali — așa că costul realist include personal sau un contractant. Este o implementare din trei repository-uri (frontend, backend, infrastructură) cu zeci de stele, nu mii, iar comparația de costuri de mai sus este experiența proprie a Vanderbilt, nu un studiu controlat. Instituțiile care ar prefera să țină inferența pe hardware propriu ar trebui să se uite la [MindRouter](/aied/resources/mindrouter/) și să le citească pe amândouă împreună: Amplify este un strat aplicativ peste modelele furnizorilor, MindRouter este un gateway peste propriile GPU-uri.

## Concepte conexe

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
