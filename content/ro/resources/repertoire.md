---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "O aplicație web pentru construirea de sarcini AI pas cu pas, în care instructorul stabilește rolul modelului și barierele privind utilizarea de către studenți, iar identitatea studentului este păstrată în afara contextului modelului."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Un builder pentru sarcini integrate cu AI, construit de Joseph Slade la Oregon State University și operat de AI Education Labs, Inc. Premisa este că alternativa la un chatbot fără reguli nu este interdicția, ci structura: instructorul definește pașii prin care trece un student, decide ce rol joacă modelul la fiecare pas și stabilește cât de mult se poate sprijini studentul pe el. Sarcina este apoi publicată ca un link de înscriere, în loc să fie distribuită ca un document de prompt.

## Ce poți face cu el

- **Stabilește rolul modelului pentru fiecare sarcină.** Builderul oferă preseturi de tutore, interlocutor socratic, furnizor de feedback și asistent de cercetare, plus un prompt personalizat, astfel încât asistentul să se comporte așa cum cere sarcina.
- **Pune bariere între pași.** Un pas poate cere ca studentul să își explice raționamentul înainte de a avansa, iar ajutorul AI poate fi limitat per pas — interfața arată un număr rămas în loc de acces nelimitat.
- **Alege suprafața de lucru.** Studenții scriu pe o pagină de document cu comentarii pe margine, cu aranjamente de chat și de caiet disponibile acolo unde se potrivesc sarcinii mai bine decât o pagină.
- **Publică și urmărește raționamentul, nu doar rezultatul.** Un link de înscriere înscrie studenții, progresul se salvează pe parcurs, iar instructorul poate citi transcrierea fiecărui student și o poate exporta ca CSV sau Markdown.
- **Schițează cu AI, apoi rafinează.** Configurarea poate porni de la câteva întrebări, de la o sarcină existentă încărcată sau de la una anterioară, cu un asistent de partea instructorului care completează o primă schiță.

Exemplele publicate sugerează gama vizată: o sarcină de fizică despre dovezi și mărturii, un exercițiu de biologie care diagnostichează eroarea de raționament din explicația unui intern AI și o sarcină de psihologie care verifică dacă o știre descrie designul unui studiu.

## Pentru cine este

Instructori din învățământul superior care vor ca [[learning-design|designul învățării]] să poarte politica AI — adică preferă să constrângă modul în care un model poate fi folosit în interiorul unei sarcini decât să controleze dacă a fost folosit. Barierele și setările de rol sunt o expresie a [[guardrails|barierelor de siguranță]] în faza de proiectare, iar aplicația este orientată spre sarcinile de curs, nu spre implementarea instituțională a chatului.

## Note și precauții

- **Faza pilot.** Termenii spun că serviciul este în prezent furnizat gratuit pentru pilotări și că planurile plătite pot fi introduse cu notificare, și că funcțiile se pot schimba sau pot fi retrase. Nu există o pagină publică de prețuri; ajungi la prețuri doar după autentificare.
- **Afirmația despre confidențialitate este arhitecturală și merită citită cu atenție.** Fiecare student primește un identificator de sesiune aleatoriu per sarcină, maparea de la contul studentului la sesiune rămâne pe serverul Repertoire, iar modelul primește sesiunea anonimă, contextul sarcinii și textul scris de student. Precauția este în însăși politica: textul pe care studentul îl tastează și care îl identifică este trimis ca orice alt text, iar instructorul cursului poate citi transcrierile.
- **Inferență terță.** Răspunsurile sunt generate prin API-ul Claude al Anthropic, cu API-ul OpenAI ca rezervă, în condiții comerciale care, potrivit politicii, exclud antrenarea pe intrările și ieșirile API începând cu September 2026. O instituție ar trebui să confirme acest lucru prin propriul acord, nu printr-o pagină web.
- **Nu este un evaluator.** Politica și termenii descriu ambele judecățile asistentului, precum „obiectiv îndeplinit", ca ajutoare pentru instructor; notele și deciziile academice rămân la instructor și instituție, iar deciziile despre [[ai-use-disclosure|divulgarea utilizării AI]] către studenți sunt lăsate instructorului.
- **Găzduit în SUA.** Datele stau în Google Cloud Firestore cu găzduire Vercel, iar politica abordează obligațiile FERPA acolo unde serviciul gestionează înregistrări educaționale; utilizatorii din afara Statelor Unite sunt informați că datele lor sunt procesate acolo.
