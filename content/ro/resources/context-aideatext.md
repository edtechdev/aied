---
title: "conText (AIdeaText)"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "Un tutor gratuit în browser care citește fotografia unui caiet, un PDF sau un text, apoi poartă studentul printr-o conversație socratică în engleză sau spaniolă, desenând în același timp un grafic live al ideilor pe care le conectează pe măsură ce vorbește."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
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

conText este cea mai curată demonstrație mică a unei direcții despre care [[intelligent-tutoring|tutoriatul cu IA]] vorbește mult și implementează rar: modelul nu răspunde la întrebarea studentului, ci o pune pe următoarea, iar ideile studentului sunt desenate ca grafic în timp ce vorbește. Încarcă o fotografie a unei pagini de caiet, un PDF sau un text, iar instrumentul spune mai întâi ce a înțeles, apoi începe un dialog [[socratic-method|socratic]] vorbit. Fiecare idee pe care o numește studentul apare ca nod într-un [[knowledge-graph|graf de cunoștințe]] live; muchiile apar pe măsură ce conversația le conectează, iar panoul raportează câte idei rămân neconectate.

## Ce poți face cu el

Bucla este intenționat scurtă. Materialul intră (până la 10 MB, opt pagini PDF sau 15.000 de caractere de text), tutorul îl recitește, iar conversația este vocală — site-ul spune că tutorul nu notează și nu scrie pentru student. Graficul este artefactul care face sesiunea utilă după aceea: arată ce idei a pus studentul efectiv în relație și care au rămas libere, ceea ce este un lucru mult mai specific de revizuit decât o transcriere de chat. Sesiunea poate fi exportată ca fișier XML de grafic și reîncărcată altă dată pentru a continua, iar butonul de ștergere o șterge imediat; altfel, serverul o elimină după o oră.

Această combinație — un tutor care reține răspunsul, plus o înregistrare vizuală a raționamentului — se află exact în ce încearcă să realizeze [[scaffolding|schelarea]] și reflecția [[metacognition|metacognitivă]], și îi dă profesorului ceva concret despre care să întrebe, în loc de un eseu finalizat sau un număr corect. Formularea site-ului este că un rezultat corect nu mai dovedește înțelegerea odată ce IA generativă îl poate produce, așa că procesul trebuie să fie vizibil.

## Pentru cine este

Studenți care lucrează la o lectură sau o fișă de probleme și vor să fie întrebați, nu să li se răspundă în loc; profesori care vor o verificare cu miză mică a faptului dacă un student poate conecta idei; și dezvoltatori de programe didactice care caută un exemplu concret de dovadă a procesului. Profesorii au un ghid aliniat la curriculum în engleză, spaniolă, portugheză și franceză; instrumentul în sine rulează în engleză și spaniolă, iar videoclipul demonstrativ este în spaniolă.

## Note și precauții

Nu este publicat niciun preț sau cont pentru instrumentul destinat studenților, în timp ce implementarea instituțională — cloud, on-premises sau hibrid — este oferită printr-o propunere personalizată și o întâlnire; tratează „gratuit” ca starea demonstrației publice din noiembrie 2026, nu ca o garanție. Textul și imaginile ajung la un serviciu găzduit alimentat de Claude, iar site-ul le spune utilizatorilor să elimine numele, sumele, adresele și numele companiilor înainte de încărcare, ceea ce mută sarcina de anonimizare asupra persoanei care încarcă, nu asupra platformei. Sesiunile se șterg automat după o oră dacă nu sunt exportate. Compania din spate comercializează de asemenea o platformă mai largă de evaluare prin grafuri de raționament pentru instituții, iar afirmațiile sale despre distingerea grafului deductiv, inductiv, abductiv și analogic provin din patru texte de referință — site-ul numește asta o demonstrație, cu validarea la scară încă în viitor.

## Concepte conexe

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
