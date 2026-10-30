---
title: "Cum verific dacă întrebările de quiz și de examen generate de IA sunt cu adevărat bune?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Ceri douăzeci de întrebări din notițele tale de curs. Ele vin înapoi cu barem, explicații, etichete de dificultate și categorii din taxonomia lui Bloom, într-un document formatat care arată terminat. Numele tău urmează să apară pe el.

Răspunsul scurt pe care să îl dai unui coleg: întrebările generate sunt candidate, nu o evaluare. Rezolvă fiecare item singur, verifică ce cere itemul ca studentul să facă de fapt și află cum răspund studenții la el înainte ca el să conteze. În cele două studii cele mai mari din această bază de cunoștințe, semnalul interesant nu este că generarea funcționează, ci unde eșuează. Generarea iterativă într-un flux de lucru specific cursului a produs examene cu alegere multiplă utilizabile în 71 de clase universitare ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). Într-un audit de știința datelor pe 311 întrebări implementate, etichetele de dificultate ale modelului au urmat aproape perfect nivelurile Bloom pe care le generase alături de ele (Spearman ρ = 0,90), în timp ce au urmat ce au obținut de fapt studenții la ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An și Wang, 2026]]). Eticheta descria promptul, nu măsura itemul.

## Pe scurt

**1.** Notează rezultatul dorit și dovezile pe care le-ar furniza un răspuns satisfăcător înainte de a genera ceva.

**2.** Construiește un plan de evaluare ca să vezi ce rezultate eșantionează setul și cât de des.

**3.** Rezolvă fiecare item singur înainte de a te încrede în barem și citește explicația ca pe o afirmație de verificat.

**4.** Întreabă ce trebuie să facă un student ca să răspundă. O întrebare care spune „analizează” și cere reproducere este o întrebare de reproducere.

**5.** Tratează etichetele de dificultate ca metadate ale promptului, nu ca psihometrie.

**6.** Pilotează itemii și inspectează cum funcționează, apoi revizuiește-i pe cei slabi.

## Pornește de la învățarea pentru care vrei dovezi

Generarea este suficient de ieftină încât formatul de ieșire devine încet-încet specificația. Dacă notițele tale produc itemi ordonați cu alegere multiplă, vei ajunge să măsori dacă studenții pot alege între afirmații plauzibile, orice rezultat ar pretinde programa.

Specifică mai întâi rezultatul, apoi dovezile pe care le-ar furniza un răspuns satisfăcător, apoi cunoștințele pe care se așteaptă să le aducă studenții. Include materialele cursului, concepțiile greșite pe care le anticipezi, orice instrumente permise și formatul răspunsului. Dacă vrei ca studenții să interpreteze dovezi, itemul trebuie să ceară interpretare, iar adăugarea cuvântului într-o întrebare de definiție nu reușește asta. Un scenariu lung poate fi totuși rezolvabil printr-o singură expresie familiară care dezvăluie răspunsul.

Un plan de evaluare este un tabel de rezultate față de itemi, iar valoarea lui este că expune lacunele înainte ca studenții să le expună. Face vizibil și compromisul: fiecare item generat din materialul cel mai ușor este un item pe care nu l-ai cheltuit pe rezultatul care îți pasă cel mai mult.

## Verifică fiecare item pe șase dimensiuni

Începe cu baremul. Este defendabil față de conținutul autorizat al cursului și rezistă explicația când o verifici independent? Baremul și explicația vin adesea din același pas defectuos, așa că verificarea unuia nu îl verifică pe celălalt.

Apoi întreabă ce cere de fapt răspunsul la item unui student să facă între citire și alegere. Aici eșuează cel mai des itemii generați și aici este eticheta cel mai puțin fiabilă.

Verifică apoi alinierea: răspunsul furnizează dovezi pentru rezultatul intenționat sau pentru ceva adiacent și mai ușor de evaluat?

Citește formularea așa cum ar citi-o un student. Informația necesară este prezentă și a fost eliminată ambiguitatea care nu are legătură cu constructul tău?

Privește opțiunile și regulile de punctare împreună. Distractorii sunt plauzibili și distincți între ei și față de barem, iar baremul recunoaște răspunsurile alternative legitime pe care grila ta le-ar credita?

În fine, întreabă pe cine exclude itemul. Volumul de lectură, contextul cultural, elementele vizuale și formatarea pot impune cerințe fără legătură cu rezultatul. Pentru un student multilingv sau cu dizabilități, un item care recompensează cititul rapid măsoară ceva ce nu ai intenționat, iar [[differential-effects-across-learner-groups|performanța pe subgrupuri]] este locul unde asta se vede.

Un al doilea model te poate ajuta să observi probleme, iar acordul între două modele nu este o verificare independentă a corectitudinii. Ele împart datele de antrenare și modurile de eșec. Rezolvă itemul, apoi pune o persoană calificată să se uite la cei care vor conta.

## Nu lăsa eticheta de dificultate să decidă

Literatura despre [[automated-question-generation|generarea de întrebări]] este mai utilă despre eșecul etichetelor decât despre succesul generării. [[student-llm-use-ai-question-difficulty-data-science-2026|An și Wang (2026)]] au examinat 378 de întrebări scrise de autori în cursuri de știința datelor, dintre care 311 au fost implementate la 54 de studenți, cu 7.888 de răspunsuri. Etichetele ușor, mediu și greu ale modelului au corelat cu nivelurile Bloom pe care le generase el însuși la ρ = 0,90 și cu dificultatea empirică a itemilor la ρ = 0,06. Aproximativ 70% dintre itemii implementați au fost răspuns corect de fiecare student, ceea ce a lăsat aproape nicio variație pe care o etichetă de dificultate să o poată urmări nici măcar în principiu.

Urmează două lecții. Prima: dificultatea este o proprietate a interacțiunii dintre item și o populație, așa că nicio etichetă produsă înainte de administrarea itemului nu poate fi considerată o valoare măsurată. A doua: o bancă de itemi la care toată lumea răspunde corect nu este o evaluare ușoară, este una inutilă: nu poartă aproape nicio informație despre cine știe ce.

Cazul pozitiv este mai îngust decât susțin furnizorii și merită cunoscut cu precizie. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] au generat examene cu alegere multiplă de zece întrebări pentru 71 de clase universitare, aproximativ 1.200 de studenți, folosind o buclă care generează, judecă și revizuiește fiecare item în funcție de materialele furnizate de instructorul fiecărui curs, apoi au comparat itemii cu examene scrise de oameni. Acesta este un flux de lucru cu un revizor în interiorul lui, rulat pentru fiecare curs, nu un singur prompt peste conținut generic. Sprijinul vizează fluxul de lucru în acele condiții și nu se extinde la ce produce același model dintr-o notă needitată lipită în prompt.

## Rulează un ciclu de generare, revizuire, pilotare, revizuire

Generează pe baza unui plan de evaluare și cere rezultatul intenționat, baremul, o soluție concisă și concepția greșită pe care fiecare distractor ar trebui să o prindă. Adnotările fac designul inspectabil. Ele nu sunt dovada că designul este solid.

Repară înainte de a acumula. Șterge afirmațiile nesuportate, itemii duplicați, indiciile accidentale din enunț, baremurile multiple defendabile și complexitatea fără legătură cu constructul, și notează ce ai schimbat, pentru că tiparul reparațiilor îți spune ce parte a promptului să repari.

Pilotează acolo unde o pilotare este proporționată. Practica cu miză mică sau o pilotare gestionată în interiorul evaluării îți dau date de răspuns. Spune-le studenților cum să raporteze o întrebare ambiguă sau greșită și citește acele raportări, pentru că ele sunt cel mai informativ semnal de eroare pe care îl ai.

Apoi inspectează cum funcționează itemii: proporția care răspunde corect, ce distractori atrag răspunsuri și dacă succesul pe item merge împreună cu performanța pe restul evaluării. Un item la care studenții puternici eșuează și cei slabi reușesc este un defect, nu o întrebare grea. Într-o clasă mică aceste statistici sunt instabile, așa că combină-le cu revizuirea de conținut și cu explicațiile studenților, în loc să tratezi un procent ca pe un verdict.

Revizuiește și păstrează evidența: versiunea aprobată, rezultatul pe care îl servește, baremul, rațiunea, notele de revizuire și istoricul administrării. Pentru bănci mari sau cu miză mare, aici își au locul specialiștii în evaluare și metodele psihometrice adecvate, iar expertiza în [[educational-measurement|măsurare]] nu este ceva ce o lectură atentă poate înlocui.

## Cum arată asta într-un curs

Într-un curs introductiv de sociologie, rezultatul ar putea fi distingerea unei explicații structurale de una individuală. Un item slab le cere studenților să definească „structural”, ceea ce măsoară recunoașterea vocabularului. Un candidat mai puternic dă un scurt scenariu despre o familie și o decizie privind angajarea, apoi cere care explicație identifică cel mai bine o constrângere structurală, cu distractori care reprezintă interpretări plauzibile, dar diferite.

Instructorul verifică dacă scenariul susține cu adevărat baremul, dacă nu cumva două opțiuni exprimă aceeași idee și dacă răspunsul nu depinde de terminologie pe care cursul nu a introdus-o niciodată. O întrebare de continuare pe un rând, „ce detaliu susține alegerea ta?”, scoate la suprafață raționamentul pe care opțiunea selectată îl ascunde. Adaptarea este netestată ca format de item, iar valoarea ei este mai îngustă: întrebările de revizuire de mai sus pot fi puse înainte ca un item să fie administrat, iar un barem greșit poate fi reparat înainte ca studenții să îl vadă.

Pentru studenții care își generează propriile întrebări de practică, aceeași regulă se aplică la nivelul lor: încearcă itemul, verifică explicația față de sursele cursului și adu cazurile nerezolvabile la cineva care cunoaște materia. [[study-with-ai|Practica de studiu]] care îi învață pe studenți să accepte fără critică baremuri generate le formează obiceiul greșit.

## Ce se va întoarce împotriva ta

**„A dat un răspuns și o explicație.”** Amândouă pot repeta aceeași greșeală, iar explicația generează încredere exact pentru că este fluentă. Verifică raționamentul față de materialele tale, nu față de propria lui reformulare.

**„Sunt doar întrebări de practică.”** Practica predă concepții greșite când baremurile greșite rămân necorectate, iar studenții repetă eroarea la fel de lesne ca răspunsul corect. Miza mai mică schimbă cât de multă revizuire este proporționată. Nu schimbă dacă acuratețea contează.

**„Studenților le-a plăcut quizul.”** Plăcerea este o dovadă despre experiență. Un quiz ușor pe care toată lumea îl termină confortabil se simte bine și măsoară puțin, iar auditul din știința datelor a constatat că popularitatea itemilor nu era însoțită de niciun semnal de dificultate utilizabil.

**„Grila sau etichetele Bloom arată că atinge rezultatele.”** Etichetele Bloom furnizate de același pas de generare sunt cele mai puțin independente dovezi disponibile. ρ = 0,90 față de etichete și ρ = 0,06 față de performanța studenților este exact cum arată asta când este măsurat.

## Ce să faci săptămâna aceasta

**1.** Alege un rezultat și notează dovezile pe care le-ar furniza un răspuns satisfăcător. Apoi generează cinci itemi față de el, cerând baremul, soluția și concepția greșită intenționată din spatele fiecărui distractor.

**2.** Rezolvă toți cinci fără să te uiți la barem și înregistrează-i pe cei la care tu și modelul nu sunteți de acord.

**3.** Roagă un coleg să inspecteze cei doi candidați cei mai puternici pentru aliniere și ambiguitate și șterge orice nu puteți apăra niciunul dintre voi.

**4.** Pilotează supraviețuitorii cu o scurtă întrebare de continuare care le cere studenților ce detaliu susține alegerea lor.

**5.** Înregistrează ce ai schimbat și de ce, astfel încât următorul lot să pornească de la un prompt mai bun, nu de la același.

## Încotro mai departe

[[automated-question-generation]] este pagina de concept pentru metodele de generare și calitatea lor măsurată, iar [[educational-measurement]] acoperă analiza itemilor, fiabilitatea și psihometria pe care o pilotare doar le sugerează. Amândouă stau sub [[assessment-validity|validitatea evaluării]], care este standardul pe care îl servește tot ciclul.

Partea de judecată a aceleiași probleme aparține de [[ai-grading-fairness-reliability|notarea cu IA]], pentru că un item bun notat prost nu este mai bun decât un item prost notat bine. Pentru întrebarea mai largă despre ce ar trebui să reprezinte o notă atunci când studenții pot folosi IA, vezi [[redesign-assessment-ai-era|reproiectarea evaluării în era IA]].
