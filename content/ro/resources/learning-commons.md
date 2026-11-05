---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Infrastructură AI deschisă din inițiativa educațională a lui Mark Zuckerberg și Priscilla Chan: un graf de cunoaștere al standardelor, programelor școlare și datelor din știința învățării, evaluatoare pentru judecarea ieșirii LLM și competențe de agent independente de model pentru fluxurile de lucru ale profesorilor."
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
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**Learning Commons** este inițiativa educațională a lui Mark Zuckerberg și Priscilla Chan, lansată în 2025 pentru a duce munca Chan Zuckerberg Initiative în știința învățării în infrastructura pe care se construiesc efectiv produsele edtech. Argumentul ei este infrastructural, nu pedagogic: cercetarea există, standardele academice există și există programe școlare de calitate, dar ele stau în sisteme separate, așa că dezvoltatorii construiesc pe ce este mai ușor de accesat. Organizația publică trei instrumente deschise pe GitHub — un Knowledge Graph, un set de Evaluators și [[agentic-ai|Agent Skills]] — și operează o platformă care adaugă Curriculum Sync pentru încărcarea programelor școlare într-un [[edtech-platform|sistem de management al învățării]].

## Ce poți face cu el

**Knowledge Graph** modelează standardele academice, programele școlare și cercetarea în știința învățării ca entități și relații într-o singură schemă comună, astfel încât un instrument să poată alinia conținutul generat la un standard fără a-și construi propriul pipeline de date. **Evaluators** măsoară atribute ale [[llm|ieșirii LLM]] prin lentila științei învățării — complexitatea textului, [[feedback]], alinierea la standardele academice și competențe durabile — și vin cu SDK-uri Python și TypeScript, publicate pe npm și PyPI, pentru a puncta conținut generat sau a compara modele candidate. **Agent Skills** împachetează instrucțiuni, referințe și bariere de siguranță pentru fluxurile de lucru obișnuite ale profesorilor într-un format deschis, independent de model: o verificare a înțelegerii, diferențierea lecțiilor pe niveluri, planuri de lecție aliniate la standarde și pregătirea lecțiilor. În practică, graful este cel care le face credibile pe celelalte două: alinierea conținutului este afirmația, iar graful este referința față de care este verificată.

## Pentru cine este

Dezvoltatori care construiesc funcții AI în produse de [[curriculum-design|program școlar]] și de evaluare, și echipele de programe sau standarde care furnizează datele la care acele produse se aliniază. Instructorii pot folosi competențele de agent pe cont propriu, dar cadrul propriu al depozitului este infrastructură pentru cei care livrează instrumente.

## Note și precauții

Faptul că este deschis la [[open-source|sursă]] nu face datele deschise. Codul Knowledge Graph este MIT, în timp ce fiecare set de date are propria etichetă de acces — Open, Open + Gated sau Gated — iar conținutul Gated nu este acoperit în mod explicit de licențele deschise la care se referă depozitul, așa că verifică catalogul seturilor de date înainte de a presupune drepturi de reutilizare. Codul Evaluators este MIT, iar conținutul prompturilor CC BY 4.0, dar corpusurile adnotate CLEAR și PERSUADE 2.0 pe care le folosește sunt CC BY-NC-SA 4.0. Platforma și seturile de date din spatele ei necesită un cont. Activitatea depozitului citită la 2026-11-04: 167 stele pentru Knowledge Graph, 88 pentru Evaluators, 41 pentru Agent Skills. Inițiativa este finanțată de CZI, iar modul ei de a încadra problema este al finanțatorului.

## Concepte conexe

- [[curriculum-design]] — graful există pentru a alinia conținutul generat la standarde și programe școlare
- [[open-source]] — cod MIT și Apache-2.0 cu licențiere a datelor per set
- [[educational-nlp]] — evaluatoarele sunt un strat de măsurare a textului peste ieșirea LLM
- [[agentic-ai]] — competențe care împachetează un flux de lucru pentru ca un model să îl execute
- [[edtech-platform]] — Curriculum Sync încarcă programe școlare într-un sistem de management al învățării
- [[llm]] — ținta evaluării și consumatorul competențelor
