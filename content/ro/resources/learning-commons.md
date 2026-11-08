---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Infrastructură AI deschisă pentru produse educaționale: un graf de cunoaștere al standardelor și programelor școlare, evaluatoare pentru punctarea ieșirii LLM, competențe de agent independente de model pentru fluxurile de lucru ale profesorilor și Curriculum Sync pentru încărcarea programelor școlare într-un sistem de management al învățării."
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
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**Learning Commons** publică trei instrumente deschise pentru a pune funcții AI peste conținut curricular real — un **[[knowledge-graph|Knowledge Graph]]** de standarde academice, programe școlare și cercetare în știința învățării, o bibliotecă de **Evaluators** pentru judecarea textului generat și **[[agentic-ai|Agent Skills]]** independente de model pentru fluxurile de lucru obișnuite ale profesorilor — și operează o platformă care adaugă Curriculum Sync pentru încărcarea programelor școlare într-un [[edtech-platform|sistem de management al învățării]].

## Ce poți face cu el

**Aliniază conținutul generat la un standard.** Knowledge Graph modelează standarde, [[curriculum-design|programe școlare]] și cercetare ca entități și relații într-o singură schemă comună. Un produs poate căuta standardul pe care ar trebui să îl vizeze un element, poate parcurge relații de prerechizit sau poate ancora conținutul unui tutor în programa pe care ar trebui să o predea, fără a-și construi și întreține propriul pipeline de date.

**Punctează ieșirea generată înainte ca studenții să o vadă.** **Evaluators** măsoară atribute ale [[llm|ieșirii LLM]] — complexitatea textului, [[feedback]], alinierea la standarde și competențe durabile — și sunt livrate ca SDK-uri Python și TypeScript pe npm și PyPI. În practică funcționează ca o verificare de regresie când se schimbă un prompt sau un model, ca o comparație între modele candidate sau ca un filtru pe elemente și explicații generate.

**Împachetează un flux de lucru al profesorului.** **Agent Skills** grupează instrucțiuni, referințe și gărzi de siguranță într-un format deschis, independent de model: o verificare a înțelegerii, diferențierea lecțiilor pe niveluri, un plan de lecție aliniat la standarde și pregătirea lecțiilor. Ele pot fi introduse într-un framework de agenți sau citite ca șabloane lucrate pentru câtă structură are nevoie un flux de lucru școlar de încredere.

**Mută un program școlar într-un sistem de management al învățării.** Curriculum Sync este pasul de platformă care transformă o hartă a standardelor în ceva ce un curs poate folosi efectiv în LMS.

## Pentru cine este

Dezvoltatori care construiesc funcții AI în produse de programe școlare și de [[assessment|evaluare]], și echipele de programe sau standarde care furnizează datele la care acele produse se aliniază. [[teacher-role|Instructorii]] pot folosi Agent Skills pe cont propriu, dar cadrul propriu al depozitului este infrastructură pentru cei care livrează instrumente.

## Note și precauții

Faptul că este [[open-source|sursă deschisă]] nu face datele deschise. Codul Knowledge Graph și Evaluators este MIT, iar Agent Skills este Apache-2.0, în timp ce fiecare set de date are propria etichetă de acces — Open, Open + Gated sau Gated — iar conținutul Gated nu este acoperit de licențele deschise la care se referă depozitul, așa că verifică catalogul seturilor de date înainte de a presupune drepturi de reutilizare. Conținutul prompturilor Evaluators este CC BY 4.0, dar corpusurile adnotate CLEAR și PERSUADE 2.0 pe care le folosește sunt CC BY-NC-SA 4.0. Platforma și seturile de date din spatele ei necesită un cont.

## Concepte conexe

- [[curriculum-design]] — graful există pentru a alinia conținutul generat la standarde și programe școlare
- [[open-source]] — cod MIT și Apache-2.0 cu licențiere a datelor per set
- [[educational-nlp]] — evaluatoarele sunt un strat de măsurare a textului peste ieșirea LLM
- [[agentic-ai]] — competențe care împachetează un flux de lucru pentru ca un model să îl execute
- [[edtech-platform]] — Curriculum Sync încarcă programe școlare într-un sistem de management al învățării
- [[llm]] — ținta evaluării și consumatorul competențelor
