---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Un clasament de modele pentru benchmark-uri educaționale destinate țărilor cu venituri mici și medii, acoperind pedagogia, alfabetizarea de bază, SEND, matematica vizuală și performanța multilingvă, cu coloane pentru preț și ponderi deschise."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
contributors: [editor]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Fab AI evaluează modele pe sarcini educaționale care contează acolo unde bugetele, lățimea de bandă și acoperirea lingvistică sunt constrânse, în [[global-south|țările cu venituri mici și medii]] pentru care este construit benchmark-ul, și publică rezultatele ca un clasament sortabil, nu ca o lucrare academică. Tabelul principal punctează un benchmark de pedagogie alături de SEND, matematică vizuală și raționament vizual, cu file separate pentru pedagogie multilingvă, alfabetizare de bază și evaluarea citirii cu voce tare.

## Ce poți face cu el

Comparați aproximativ 300 de modele pe scoruri de pedagogie care în prezent merg de la puțin peste 90% până la 21%, apoi sortați după ceea ce un minister al educației trebuie efectiv să cântărească: prețul per milion de tokeni, numărul de parametri, ponderile deschise și data lansării. Dispersia de la coadă este partea utilă. Modelele deschise sub 2B se situează între 21% și 43% la benchmark-ul de pedagogie, în timp ce modelele de frontieră stau în zona de puțin peste 90%, ceea ce transformă întrebarea „putem rula asta offline pe hardware ieftin" într-un compromis cuantificat, nu într-o presupunere.

Fila de pedagogie [[multilingual-learning|multilingvă]] este motivul pentru care merită să salvați pagina la favorite. Majoritatea benchmark-urilor educaționale sunt doar în engleză, iar întrebarea dacă pedagogia unui model supraviețuiește traducerii este exact întrebarea la care un minister dintr-un sistem multilingv are nevoie de răspuns. Datele pot fi descărcate ca CSV, astfel încât comparațiile pot fi reluate local.

## Pentru cine este

Factori de decizie și echipe de achiziții care aleg modele pentru sisteme naționale, cercetători care studiază [[digital-divide|decalajul de acces]] în educația susținută de AI și dezvoltatori care au nevoie de o țintă de pedagogie care să nu fie un examen în limba engleză.

## Note și precauții

Un clasament măsoară modelele pe sarcinile proprii ale benchmark-ului: un scor mare de pedagogie este o dovadă despre acei itemi, nu despre o clasă de elevi. Coloana de preț combină prețurile tokenilor de intrare și de ieșire într-un raport de 3:1, ceea ce este o alegere de modelare, nu costul unei implementări concrete. Acoperirea limbilor și a modelelor găzduite local se schimbă pe măsură ce apar modele noi, iar scorurile scăzute ale modelelor mici reflectă parțial formatul sarcinilor la fel de mult ca capacitățile. Încadrarea Fab AI este explicit despre țările cu venituri mici și medii, astfel încât setul de itemi al benchmark-ului reflectă acel context și nu trebuie citit ca un clasament general al educației. Verificați datele de lansare: mai multe intrări preced generația actuală de modele.

## Concepte conexe

- [[benchmark]] — clasa mai largă de instrumente din care face parte
- [[digital-divide]] — constrângerea pe care coloanele de preț și ponderi deschise există pentru a o face vizibilă
- [[equity-in-ai-education]] — întrebarea de politică publică pe care o informează clasamentul
