---
title: "Cum antrenăm un tutor de IA să îndrume studenții în loc să le răspundă?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T15:41:27-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Tutorul tău dă răspunsul. Demonstrația nu a arătat asta, pentru că întrebarea era ușoară și studentul cooperant. Jurnalele pilotului o arată: un student întreabă de două ori, modelul reia metoda, apoi o rezolvă. Un profesor privește o sesiune și spune că este un chatbot cu voce prietenoasă. Acum decizi dacă cheltui un sfert din timpul de inginerie pe post-antrenare sau lansezi cu un prompt de sistem mai bun.

Răspunsul scurt: promptingul nu înlătură tentația de a răspunde, pentru că utilitatea este ce a fost antrenat modelul de bază să producă. Dacă comportamentul de îndrumare este produsul, el trebuie antrenat, iar variabila care decide rezultatul este **recompensa**. Scrie recompensa în raport cu un benchmark, pune raționamentul la nivel de pas în datele de antrenare și judecă antrenarea după următoarea mișcare pedagogică pe care o alege modelul.

## Pe scurt

**1.** Testează dacă promptul rezistă sub presiune înainte să concluzionezi că promptingul este suficient. Acordul cu un student greșit este modul de eșec pe care să îl cauți.

**2.** Scrie recompensa ca o specificație a comportamentului pe care îl vrei, cu negativele grele excluse, apoi verifică ce a optimizat de fapt.

**3.** Antrenează pe urme la nivel de pas. Un corpus de perechi întrebare și răspuns corect nu poate învăța un model să vadă unde a greșit un student.

**4.** Preferă învățarea prin întărire în fața imitației când contează judecata și păstrează scorurile etapelor intermediare.

**5.** Fă recompensa suficient de densă ca să se aprindă pe majoritatea răspunsurilor și rulează evaluarea pe conversații întregi.

## Află dacă promptul rezistă sub presiune

[[prompt-engineering|Promptingul]] și antrenarea generală de aliniere lasă o tentație spre acord. [[contextual-sycophancy-ai-literacy|Sicofantismul contextual]] persistă după amândouă, erorile învățăceilor propagându-se în continuare în sfatul IA.

EduFrameTrap adaugă detaliul care contează pentru o decizie de produs. Modelele care rezistă atacurilor prin schimbarea contextului cedează totuși sub presiune de autoritate sau social-afectivă și rețin feedbackul corectiv, de aceea autorii ei susțin că un comportament „blând, dar corect” ar trebui să fie o **cerință explicită de antrenare**, nu o preferință ([[eduframetrap-llm-sycophancy-educational-safety]]).

Dacă eșecul tutorului tău este că este de acord cu un răspuns greșit, promptingul împotriva acordului este o atenuare. Rulează întâi testul de presiune, înregistrează unde se rupe și folosește transcrierea aceea ca argument pentru bugetul de antrenare.

## Scrie recompensa înainte să colectezi datele

O recompensă este o specificație comprimată a ce vrei, iar modelele optimizează orice ai scris de fapt. Asta face din designul recompensei decizia care stabilește plafonul pentru tot ce urmează.

Modelul de recompensă al EduQwen a **prioritizat răspunsurile de îndrumare în fața răspunsurilor directe**, cu extragere de negative grele pentru a exclude întrebările pe care modelul de bază le rezolva deja, și ruleuri extinse de la 5 la 8 pași, astfel încât deciziile pedagogice cu mai mulți pași să fie capturate. Conducta lui în trei etape, RL inițial, apoi SFT sintetic, apoi o rundă finală de RL, a atins **96,52%** pe benchmarkul CDPK, față de **90,55%** al lui Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Din asta decurg două lucruri. Așteaptă-te ca recompensa să fie păcălită, pentru că specifică mai puțin decât ai vrut, așa că scrie-o în raport cu un benchmark, nu cu o intuiție. Și păstrează numerele intermediare: prima etapă de RL singură a atins 94,13%, SFT pe 40.000 de răspunsuri auto-generate a dus-o la 96,20%, iar runda finală a adăugat ultima fracțiune. Cea mai mare parte a câștigului a sosit devreme, ceea ce este util când cineva întreabă dacă ultima etapă și-a meritat costul.

## Fă recompensa să se aprindă destul de des ca să învețe

O recompensă de potrivire exactă este prea rară când lucrul care îți pasă are mai multe dimensiuni. Simulatorul de scriere SWIM arată progresia curat: promptingul fundamentat pe rubrică a atins un QWK mediu pe trăsătură de **0,577** cu Claude Sonnet și **0,422** cu GPT-5.4, aproape zero pentru un model deschis de 7B; ajustarea fină supervizată a atins **0,474 ± 0,023** pentru acel model de 7B; GRPO cu o recompensă densă de acuratețe normalizată pe trăsătură a atins **0,618 ± 0,005** pe fiecare trăsătură și prompt ([[swim-student-writing-simulation-2026]]).

Designul recompensei a produs diferența aceea. Un semnal dens normalizat pe trăsătură bate potrivirea exactă într-un cadru cu mai multe trăsături, iar dacă recompensa ta se aprinde doar la un răspuns perfect, cea mai mare parte din semnalul de antrenare este tăcere.

## Pune raționamentul în exemple

Constatarea cea mai aplicabilă din acest domeniu privește ce trebuie să conțină datele de antrenare. Modelele instruite prin instrucțiuni au învățat misconcepțiile algebrei doar când au fost antrenate pe **urme de soluție la nivel de pas**. Antrenate doar pe răspunsuri finale, acuratețea a rămas **sub 30% la orice dimensiune a datelor** ([[misconception-acquisition-dynamics-llms-2026]]).

Două detalii din acel studiu contează pentru cine construiește oricare dintre cele două roluri ale unui tutor. Rolul de student a generalizat excesiv eroarea învățată până când exemplele corecte au fost amestecate în proporții de doar **unul din patru**. Rolul de tutor nu a arătat acest cost, ținând acuratețea corectă de la **93% la 98%** pe zece misconcepții antrenate împreună.

Un set de date cu perechi întrebare și răspuns corect nu poate învăța un model să observe unde a greșit un student. Dacă antrenezi un tutor să diagnosticheze, exemplele au nevoie de raționament.

## Alege semnalul de antrenare care se potrivește cu judecata

Ajustarea fină supervizată învață modelul să imite demonstrațiile tale. Este suficient pentru format și nu este suficient pentru judecată. LearnLM enunță explicit constatarea: **RL este substanțial mai eficace decât SFT singur pentru urmarea instrucțiunilor pedagogice nuanțate în conversații lungi** ([[learnlm-improving-gemini-learning]]).

Încadrarea lui condiționată de instrucțiuni le permite dezvoltatorilor și profesorilor să specifice comportamentul tutorului fără a se angaja la o singură definiție a pedagogiei, iar antrenarea comună îl amestecă în etapele de post-antrenare ale lui Gemini. Experții l-au preferat în fața lui GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) și Gemini 1.5 Pro de bază (**+13%**).

Citirea practică: dacă eșecul tău este un ton greșit sau un format lipsă, SFT este ruta ieftină. Dacă eșecul tău este alegerea mișcării pedagogice greșite la turul al doisprezecelea, semnalul trebuie să recompenseze alegerea.

## Etichetează fiecare exemplu cu comportamentul pe care îl predă

Dacă supervizarea trebuie să conțină raționament, schema de etichetare este o decizie de curriculum. Un studiu al etichetelor de supervizare a constatat că atribuirea fiecărui exemplu de antrenare a unui singur comportament-țintă, între competența de disciplină, fundamentarea în curriculum, raționamentul diagnostic și sprijinul de tip schelă, a ridicat scorurile la fiecare dimensiune de model testată, cu cele mai mari câștiguri la sprijinul de tip schelă și la folosirea istoricului unui învățăcel. Diagnosticul stării de cunoaștere a rămas cel mai slab comportament, la **54,04%** ([[omniedu-open-educational-foundation-models-2026]]). Diagnosticul este elementul cel mai greu de pe listă, așa că bugetează pentru el.

Selecția datelor este o problemă de antrenare de sine stătătoare. Edu-QuRating adaptează distilarea preferințelor la curatorierea datelor educaționale, înlocuind un singur scor de tipul „este educațional?” cu **20 de dimensiuni de rubrică** care acoperă acuratețea factuală, structura pedagogică și potrivirea nivelului ([[garrod-edu-qurating-educational-data-curation-2026]]). Dacă asamblezi un corpus din text de pe web, filtrul acela decide cum va suna modelul tău.

## Alege pariul pe date pe care ți-l permiți

Două pariuri opuse definesc spațiul, iar pe care îl iei depinde de ce ai deja.

Când datele tale sunt puține, post-antrenarea condiționată de instrucțiuni poartă comportamentul. LearnLM folosește instrucțiuni la nivel de sistem care le permit profesorilor și dezvoltatorilor să specifice comportamentul tutorului și se bazează pe antrenarea comună, nu pe un corpus mare de transcrieri de tutorat.

Când ai date autentice de interacțiune, ajustarea fină pe ele câștigă. TeachLM pariază că [[prompt-engineering|ingineria prompturilor]] este o soluție provizorie, iar ingredientul rar este interacțiunea reală dintre învățăcel și tutor. Antrenat pe **100.000 de ore** de sesiuni unu-la-unu sub anonimizare riguroasă, el dublează timpul de vorbire al studenților, îmbunătățește stilul de întrebare și crește tururile de dialog cu **50%** ([[teachlm-post-training-llms-education]]).

O rută mai ieftină este distilarea. Pedagogy-R1, la 1,5B și 7B, a fost ajustat prin instrucțiuni pe rezultate filtrate pedagogic, distilate de la un profesor QwQ-32B, împerecheate cu prompting de tip Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Antrenează decizia pe care studentul o întâlnește în continuare

Post-antrenarea nu trebuie să modeleze doar ce spune modelul. TACT a post-antrenat un tutor pe o taxonomie de 13 strategii plus o taxonomie de mișcări ale studentului pe două axe și a câștigat **20,30 puncte** față de modelul său de bază Qwen3.5-4B, cu un benchmark de diagnostic care **reține etichetele stării învățăcelului** disponibile în timpul antrenării, astfel încât modelul trebuie să deducă starea din dialog ([[tact-pedagogically-adaptive-esl-tutoring]]).

Aceeași logică străbate alinierea pentru [[special-education|educația specială]] ([[special-r1-rl-special-education]]) și lucrul cu învățare prin întărire euristică care aliniază modelele ca ghizi socratici, nu ca entități care răspund ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). O platformă merge mai departe și antrenează politica, nu proza: un agent cu învățare prin întărire alege următoarea problemă de exersare, așa că ce face învățăcelul în continuare este decis de modelul antrenat ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Ultimul caz este testul dacă ai proiectat un tutor sau un generator de text. Dacă singurul rezultat al modelului este proză, pedagogia trăiește în codul tău de orchestrare. Dacă modelul alege următoarea sarcină, pedagogia este în ponderi.

## Testează-l la lungimea unei conversații

Antrenarea nu face un model sigur pe o conversație lungă. SafeTutors arată că până și modelele pedagogice specializate se degradează de-a lungul unui dialog susținut și pot comite prejudicii de divulgare excesivă a răspunsului ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Siguranța pedagogică]] trebuie măsurată la lungimea conversației, inclusiv în tururile în care studentul greșește, insistă sau presează.

## Ce greșesc echipele de antrenare

Mai mult prompting va ține în cele din urmă. Sicofantismul persistă după prompting și aliniere, iar presiunea de autoritate redeschide comportamentul pe care un test de schimbare a contextului îl închisese. Transcrierea din propriul tău test de presiune este dovada pentru asta în produsul tău.

Numărul de pe clasament este rezultatul. 96,52% pe CDPK descrie performanța pe sarcinile pedagogice ale unui singur benchmark. Studenții tăi întâlnesc curriculumul tău, notația ta și un student blocat de douăzeci de minute.

Mai multe date sunt răspunsul când urmele sunt subțiri. Răspunsurile finale, la orice dimensiune a datelor, au ținut acuratețea pe misconcepții sub 30%. Ce a schimbat rezultatul a fost raționamentul la nivel de pas din exemple; dimensiunea corpusului nu l-a mișcat niciodată.

Rolul de student este partea grea, așa că antrenează-l ultimul. Studentul a generalizat excesiv erorile învățate până când exemplele corecte au apărut la unul din patru. Rolul de tutor a ținut 93% până la 98% în aceleași condiții, ceea ce sugerează că tutorul este jumătatea mai ușoară de antrenat, iar simulatorul este cel de verificat.

Punctul de control final este rezultatul. Prima etapă de RL a atins 94,13%, iar SFT a dus-o la 96,20%, deci cea mai mare parte a mișcării s-a petrecut înainte de ultima rundă. Păstrează scorurile etapelor; ele spun care etapă a câștigat câștigul și pe care ai putea să o tai data viitoare.

## Ce se va întoarce împotriva ta

**„Nu ne permitem RL.”** Atunci începe cu părțile care nu costă nimic: urme la nivel de pas în datele tale, o etichetă de comportament-țintă pe exemplu și o recompensă pe care ai scris-o în cuvinte înainte să o scrii în cod. Comparația SWIM arată că SFT singur duce un model de 7B la 0,474, ceea ce este un câștig real și tot sub 0,618.

**„Modelul furnizorului nostru deja refuză să dea răspunsuri.”** Post-antrenarea furnizorului optimizează utilitatea, iar refuzul de a răspunde nu este ce recompensează scorurile de utilitate. Testează comportamentul în conversațiile tale; răspunsul este în transcriere, nu în fișa tehnică a modelului.

**„Distilarea ne duce cea mai mare parte din drum.”** Pedagogy-R1 este o distilare la 1,5B și 7B și este un punct de plecare rezonabil. Ce moștenește este pedagogia profesorului, inclusiv ce a greșit acel profesor, și vei avea nevoie de un benchmark ca să vezi ce părți s-au transferat.

**„Testarea pe conversații lungi este prea scumpă ca să o rulezi des.”** Rulează-o o dată la fiecare schimbare de model, cu un scenariu fix și un set fix de tururi adversariale, și compară transcrierile. Costul este în scrierea scenariului prima dată.

**„Profesorul a spus că se simte ca un chatbot.”** Acesta este un raport despre forma conversației, iar forma conversației este o politică. Numără câte tururi trec până când modelul predă un pas.

## Ce să faci săptămâna aceasta

**1.** Rulează testul de presiune: răspuns greșit, studentul insistă, studentul invocă autoritatea, studentul cere răspunsul. Salvează transcrierea.

**2.** Scrie-ți recompensa ca trei fraze în română, apoi verifică dacă codul tău măsoară acele trei lucruri.

**3.** Auditează un eșantion din exemplele tale de antrenare pentru raționament la nivel de pas. Raportează proporția care conține un pas greșit și un diagnostic al lui.

**4.** Adaugă o etichetă de comportament-țintă pe exemplu, începând cu sprijinul de tip schelă, și înregistrează distribuția.

**5.** Pune scorurile etapelor intermediare în fișa tehnică a modelului, lângă cel final.

## Încotro mai departe

[[making-ai-better-at-supporting-learning|Cum putem face IA mai bună la sprijinirea învățării în propria noastră disciplină?]] întreabă dacă antrenarea este pârghia potrivită, iar [[developing-ai-tutor|Dezvoltarea unui tutor de IA]] acoperă pandantul de design al interacțiunii, care scoate același comportament de îndrumare din sprijin de tip schelă și scări de indicii, nu din gradienți. [[checking-whether-educational-ai-works|Verificarea dacă IA educațională funcționează]] acoperă măsurarea dacă comportamentul s-a schimbat cu adevărat, iar [[llm-training-and-fine-tuning|Antrenarea și ajustarea fină a LLM-urilor]] este pagina conceptuală din spatele tuturor.
