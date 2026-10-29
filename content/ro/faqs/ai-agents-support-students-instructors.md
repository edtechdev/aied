---
title: "Cum pot agenții de IA să sprijine studenții și cadrele didactice?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T15:41:26-04:00"
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Un demo de la furnizor durează patruzeci de minute. Agentul citește programa, redactează testul de săptămâna viitoare, semnalează trei studenți care nu au deschis lectura și se oferă să le scrie un e-mail. Prorectorul tău vrea o decizie de licențiere până la sfârșitul lunii.

Un [[agentic-ai|agent]] planifică, apelează instrumente, păstrează contextul, împarte munca în subsarcini și se adaptează de-a lungul mai multor ture, ceea ce este mai mult decât face un [[conversational-ai|chatbot]]. Rolurile pe partea de student și pe partea de cadru didactic care se deschid astfel sunt reale. Dovezile nu arată că mai multă autonomie produce mai multă învățare: în singurul studiu cap la cap de aici, un agent și un chatbot au fost la egalitate. Pune autonomia acolo unde o persoană verifică rezultatul, păstrează planificarea la învățăcel și evaluează calitatea predării cu propria rubrică.

## Pe scurt

**1.** Numește sarcina înainte de produs.

**2.** Începe pe partea de cadru didactic, unde un profesor inspectează deja munca.

**3.** Tratează autonomia adăugată ca un cost până când dovezile spun altceva.

**4.** Păstrează planificarea și judecata la învățăcel, pentru că exact pe acestea există tema ca să le construiască.

**5.** Evaluează agentul cu propria rubrică și programează o verificare fără asistență înainte de finalul pilotului.

## Alege sarcina înainte de a alege agentul

[[agentic-workflows-education|Agentic Workflows in Education]] numește patru capabilități recurente: reflecție, planificare, folosirea instrumentelor și colaborarea multi-agent. Fiecare adaugă un cost alături de posibilitate, în [[explainable-ai|interpretabilitate]], coordonare, [[trust-calibration|încredere]], latență și supraveghere.

Rolurile pe partea de student merg de la tutorat [[adaptive-learning|adaptiv]] și planificarea studiului, prin feedback [[formative-assessment|formativ]], [[problem-solving|rezolvare de probleme]] ghidată și generare de exerciții, până la recomandări de prerechizite și la [[metacognition|reflecție metacognitivă]] în [[prompt-engineering|formularea de prompturi]]. Rolurile pe partea de cadru didactic acoperă dezvoltarea de materiale, [[automated-question-generation|generarea de întrebări]] și validarea lor, triajul feedbackului, [[learning-analytics|analitica]] de curs, proiectarea instrucțională, regăsirea resurselor și orchestrarea unor sub-agenți specializați.

Două dintre acestea sunt mai sigure la început, pentru că ambele produc un artefact pe care o persoană îl citește înainte de studenți: un generator de întrebări însoțit de un validator și redactarea pe care profesorul o editează.

## Începe acolo unde un om verifică deja munca

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], primul [[rct|studiu randomizat controlat]] al unui sistem om-IA în tutoratul live, le-a dat tutorilor novici îndrumare în timp real derivată din raționamentul tutorilor experimentați, pe 900 de tutori și aproximativ 1.800 de studenți. Studenții tutorilor care aveau acces au fost cu 4 puncte procentuale mai predispuși să stăpânească subiectele, urcând la 9 puncte în rândul tutorilor cel mai slab cotați, ai căror studenți au ajuns din urmă studenții tutorilor mai bine cotați din grupul de control. A costat aproximativ 20 de dolari per tutore anual, iar analiza a peste 550.000 de mesaje de tutorat a arătat că tutorii au trecut de la a da răspunsuri la a pune întrebări de îndrumare. Aceasta este IA care augmentează [[teacher-role|profesorul]].

Agentul nu a predat studentului. A alimentat un om în mijlocul conversației, iar omul a decis ce să spună. Un om în buclă și un rezultat apropiat de muncă sunt ceea ce face rezultatul portabil într-un alt curs.

## Nu presupune că mai multă autonomie aduce mai multă învățare

[[ilieva-agentic-genai-higher-education-2026|Un studiu cu 130 de studenți la un curs de comerț electronic]] a constatat că atât chatboturile, cât și agenții de [[generative-ai|IA generativă]] au fost evaluați peste [[online-teaching-and-learning|învățarea online]] tradițională la învățare și [[personalized-learning|personalizare]], fără o diferență semnificativă între chatbot și agent. Autonomie adăugată, fără valoare adăugată pe aceste măsuri.

Cadrul acelui studiu tratează agenții ca parteneri de învățare delimitați, supravegheați de om, cu obiective, puncte de control și decizii finale lăsate oamenilor. [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] face din asta o regulă de [[governance|guvernanță]]: autonomia nu ar trebui să depășească maturitatea dovezilor sau puterea unui control uman responsabil, iar dovezile sunt cele mai puternice la rezultatele de nivel de artefact și cele mai slabe la [[learning-gains|învățarea]] durabilă și la [[equity-in-ai-education|echitate]].

Riscul pe partea învățăcelului merge în aceeași direcție. Un agent care planifică și monitorizează pentru un student elimină exersarea care construiește [[self-regulated-learning|autoreglarea]] și invită la [[cognitive-offloading|descărcare]]. [[agentic-ai-pedagogical-best-practice-2026|Îndrumările de bună practică]] cer frecare intenționată, [[scaffolding|sprijin de tip schelă]] care se retrage și [[human-in-the-loop-ai|supraveghere umană]]. [[desirable-difficulties|Frecarea productivă]] are exemple care funcționează. Agenții de conflict constructiv care argumentează cu un design slab au îmbunătățit rezultatele de design în cercetarea analizată. [[simulating-students|Colegii simulați]] sprijină [[collaborative-learning|învățarea colaborativă]] și sondarea [[socratic-method|socratică]], iar [[medical-education|simulările]] [[simulation|clinice]] le permit învățăceilor să exerseze acolo unde o greșeală costă puțin.

Testul pentru oricare dintre ele: după sesiune, ce poate face studentul pe care agentul îl făcea înainte? Predarea judecății îi ia studentului [[agency|exersarea]] folosirii ei.

## Verifică agentul față de propria judecată

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Opt agenți de predare cu IA implementați într-un curriculum medical]] au fost clasați diferit de scorurile generate de platformă și de o rubrică independentă de experți. Agentul clasat pe locul trei de platformă a ieșit ultimul la calitatea predării. Scorurile platformei indexează performanța studenților, care se mișcă din motive ce nu au legătură cu predarea.

Întreabă ce anume numără un număr din panou, cine a scris rubrica din spatele lui și cum ar arăta un scor mic în munca studenților. [[pedagogical-safety|Siguranța pedagogică]] aparține aceleiași evaluări, pentru că un lanț de [[pedagogical-agent|agenți]] face greu de spus care componentă este responsabilă când un răspuns este greșit.

## Planifică oprirea

Studiile randomizate arată că asistența scurtă din partea IA poate deprima performanța ulterioară fără asistență, iar intervalul de după retragere, [[cognitive-washout-ai-skill-decay-2026|spălarea cognitivă]], este aproape în întregime nemăsurat. Sinteza din spatele acestei pagini se sprijină pe o [[meta-analysis-systematic-review|revizuire de tip scoping]] a 474 de studii și constată că munca este concentrată în [[higher-ed|învățământul superior]], [[stem-education|STEM]], designuri pe termen scurt și tutorat bazat pe text, cu doar o minoritate fundamentată explicit în teoria educațională. Un pilot care se termină când se termină licența a măsurat fereastra greșită.

## Ce greșește administrația aici

Un agent este un chatbot actualizat, deci actualizarea ar trebui să se vadă în rezultate. În comparația cu 130 de studenți, ambele condiții cu IA au bătut învățarea online și niciuna nu a bătut-o pe cealaltă.

Panoul clasifică calitatea predării. El clasifică performanța studenților, iar opt agenți au produs o clasare care a inversat locul trei cu ultimul loc față de o rubrică de experți.

Autonomia este funcția de cumpărat. Regula proporționalității merge în cealaltă direcție, iar dovezile sunt cele mai subțiri acolo unde autonomia este cea mai mare.

Accesul închide decalajul de echitate. Accesul inegal la sisteme agentice capabile îl poate lărgi, iar un agent reproduce părtinirea din datele de antrenament la scară.

## Ce se va întoarce împotriva ta

**„Studenții pur și simplu o vor lăsa să facă munca.”** Unii o vor face, iar arhitectura decide cât de ușor le este. Agenții care planifică și redactează pentru student invită asta. Agenții care cer o tentativă, apoi pun o întrebare, nu.

**„Evaluarea furnizorului spune că funcționează.”** Întreabă ce măsoară numărul respectiv. Dacă este performanța studenților măsurată de platformă, ea îi măsoară pe studenți tot atât cât măsoară agentul.

**„Nimeni nu poate spune care agent este responsabil într-un lanț.”** Adevărat pentru majoritatea implementărilor actuale. Numește un proprietar pentru lanț, înregistrează care componentă a produs care rezultat și păstrează un punct de control uman înainte ca ceva să ajungă într-un dosar de student.

## Ce să faci săptămâna aceasta

**1.** Scrie sarcina și rezultatul după care o vei judeca, câte o propoziție fiecare, înainte de următorul apel cu furnizorul.

**2.** Evaluează rezultatul unui agent cu propria rubrică pe zece lucrări reale ale unor studenți și păstrează scorurile.

**3.** Adaugă în planul pilotului o sarcină fără asistență, datată și cu un proprietar.

## Încotro mai departe

[[developing-ai-tutor|Dezvoltarea unui tutor de IA]] acoperă construcția orientată spre student, de la obiectiv la scara de ajutor, iar [[evaluating-ai-interventions-methods|evaluarea intervențiilor de IA]] acoperă dacă lucrul respectiv a funcționat. [[intelligent-tutoring|Tutoratul inteligent]] și [[ai-literacy|alfabetizarea în IA]] furnizează vocabularul de design pe care se sprijină această pagină.
