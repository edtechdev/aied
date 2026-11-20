---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Un clasament public pentru modele de frontieră care evaluează răspunsuri universitare STEM reale, scrise de mână, în raport cu itemii de rubrică selectați de instructor."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
contributors: [editor]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

GradeBench pune o întrebare îngustă și utilă despre [[automated-assessment|evaluarea automată]]: având răspunsul scris de mână al unui student, rubrica instructorului, o soluție de referință și itemii de rubrică pe care instructorul i-a selectat efectiv, un model de frontieră selectează aceiași itemi? Etichetele gold sunt selecții reale de itemi de rubrică făcute de instructori și de asistenți didactici (TA) la examene și teste, nu ieșiri de model reevaluate.

## Ce poți face cu el

Citiți clasamentul înainte de a da crezare oricărei afirmații de acuratețe venite de la un furnizor de instrumente de evaluare și citiți construcția sarcinilor înainte de a da crezare clasamentului. [[benchmark]] cuprinde 464 de sarcini provenite din 125 de întrebări, de la 45 de cursuri [[higher-ed|universitare]] din peste zece instituții, restrânse la itemi cu răspuns liber din examene și teste pe care un profesor sau un asistent didactic (TA) i-a revizuit rând cu rând, și înclinate spre creditul parțial — sarcinile cu punctaj maxim și cele cu punctaj zero sunt limitate la câte 5%, pentru că modelele le găsesc ușoare.

Clasamentul actual atinge un vârf mult sub acordul dintre evaluatorii umani: cel mai bun model ajunge la 57.3% potrivire exactă cu rubrica, iar site-ul trasează acuratețea în funcție de costul per 1,000 de răspunsuri, unde un model aflat cu 0.8 puncte în urmă costă aproximativ o șime din preț. Axa costului este partea utilă în practică, deoarece evaluarea este o operațiune de volum.

Pentru un al doilea instrument, construit independent, vedeți [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) de la Learning Design Alliance, care este ambalat ca depozit deschis, nu ca clasament găzduit online, și este sintetizat în [[porcaro-ai-grading-benchmark-2026|studiul lui Porcaro]].

## Pentru cine este

Instructori care decid dacă să lase un instrument de evaluare să elibereze note neverificate, profesioniști în evaluare care redactează cerințe de achiziție și cercetători care au nevoie de o țintă la nivel de rubrică, nu de o corelație de punctare a eseurilor.

## Note și precauții

GradeBench este publicat de Pensive, o platformă comercială de evaluare cu AI, astfel încât benchmark-ul și produsul au același proprietar; construcția sarcinilor este documentată și defensabilă, dar tratați încadrarea ca fiind a furnizorului. Acoperă examene STEM cu rubrici de cel puțin patru itemi, ceea ce exclude eseurile, răspunsurile scurte și postările de discuție — formatele în care are loc cea mai mare parte a evaluării în [[humanities-education|științele umaniste]]. Potrivirea exactă cu rubrica este o metrică strictă: doi evaluatori pot fi în dezacord pe un item și amândoi să aibă dreptate în privința studentului. Scorurile descriu versiuni de model disponibile în noiembrie 2026 și se vor schimba.

## Concepte conexe

- [[automated-assessment]] — practica pe care o măsoară benchmark-ul
- [[assessment-validity]] — criteriul pentru care un scor din clasament este un indicator indirect
- [[benchmark]] — clasa mai largă de instrumente din care face parte
