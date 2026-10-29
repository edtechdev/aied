---
title: "Cum facem ca un student simulat să se comporte ca un cursant real?"
created: "2026-10-02T08:36:18-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T15:41:26-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
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

Ai o demonstrație joi. Studentul simulat din ea greșește o problemă cu fracții, primește un singur indiciu și apoi produce răspunsul corect cu explicația corectă. Cineva din sală întreabă de ce ar face asta un cursant care se zbate, și nu ai un răspuns.

Înainte de următoarea demonstrație, ai nevoie de atât lucru clar: un prompt care pune un model să joace un student produce sunetul unui cursant. Ce produce comportamentul este o constrângere asupra a ce știe simulatorul, structură în replici și validare față de înregistrări de la cursanți reali. Doar 3% dintre studiile care simulează cursanți își validează simulatorul după utilizare, deci nimeni nu va verifica asta pentru tine.

## Pe scurt

**1.** Scrie care cursanți nu sunt simulați și pune acea propoziție unde o vor citi utilizatorii tăi.

**2.** Testează starea de credință, nu proza. Întreabă ce spune simulatorul după o corectare.

**3.** Constrânge cunoașterea deliberat: specifică starea epistemică sau elimină cunoașterea.

**4.** Scenarizează interacțiunea replică cu replică. Un prompt de personaj mai bun nu repară deriva.

**5.** Punctează separat fidelitatea comportamentală și receptivitatea la îndrumare, față de înregistrări de la cursanți reali.

## Decide la ce întrebare răspunde simulatorul

Trei sarcini se prăbușesc sub eticheta „student simulat” și au nevoie de mecanisme diferite. Exersarea unui profesor sau a unui tutore are nevoie de un partener care se comportă plauzibil sub presiune. Auditarea felului în care o IA tratează profile diferite de cursanți are nevoie de acoperirea profilelor care te interesează. Prezicerea rezultatelor pentru un curs are nevoie de o distribuție de cursanți, nu de un individ convingător. Un simulator construit pentru prima sarcină te va dezamăgi la a treia, iar dovezile de mai jos le separă mereu.

## Numește cursanții pe care nu îi acoperi

Constatarea cea mai utilă pentru cineva care e pe punctul să aibă încredere într-un simulator privește acoperirea. Doisprezece profesori care au meditat studenți LLM au raportat limbaj excesiv de complex, emoție lipsă, atenție nenaturală și salturi de cunoaștere neexplicate, iar simulările reprezentau doar unul din patru cadrane reale de comportament al studenților ([[llm-student-simulation-teacher-insights|Martynova et al., 2026]]). Cadranul pe care îl acopereau era cel mai ușor de simulat.

Asta contează pentru că aproape nimeni nu verifică. Doar 3% dintre studiile care simulează cursanți își validează simulatorul după utilizare. Dacă construiești unul și sari peste validare, ești în majoritatea covârșitoare și ești și motivul pentru care statistica rămâne citabilă.

## Constrânge ce știe simulatorul

Un model capabil nu se poate preface cu ușurință că știe doar parțial. Cercetarea numește asta **paradoxul competenței**: modelele larg capabile cărora li se cere să emuleze cursanți cu cunoaștere parțială produc tipare de eroare și dinamici de învățare nerealiste.

Deriva are o direcție și indică exact spre cursanții care au cea mai mare nevoie să fie simulați. Față de ideile elevilor extrase din 49 de lecții de știință aliniate NGSS, șase modele au ținut cele mai multe idei în domeniul de cunoaștere așteptat și aproximativ două treimi la nivelul de citire țintă sau sub el, apoi au depășit exact acolo unde cursantul era cel mai mic. Ideile pentru ciclul elementar și gimnaziu depășeau mai des domeniul de cunoaștere și nivelul de citire al clasei țintă, iar corpusul înclina spre raționamente mai largi, vocabular mai tehnic și mai puțini markeri de incertitudine („poate”, „pare că”) decât ideile reale din lecții ([[llm-simulating-student-scientific-thinking-2026|Nguyen și Cao, 2026]]).

Două observații din acel studiu. Alegerea modelului nu este unidimensională, pentru că un sistem care se potrivește bine ideilor din lecție poate totuși să le plaseze peste nivelul clasei. Iar repararea este adesea instrucțională: un re-prompt explicit cu nivelul clasei a readus cele mai multe modele în interval.

## Specifică starea sau ia cunoașterea

Dacă modelul știe prea mult, poți numi starea în care ar trebui să fie sau poți scădea cunoașterea pe care nu ar trebui să o aibă.

**Condiționează pe o stare epistemică.** Un cadru fără antrenare construiește prototipul cognitiv al fiecărui student dintr-un [[knowledge-graph|graf de cunoaștere]] și punctează candidații din căutarea beam față de el, raportând o îmbunătățire de 100% a acurateței simulării ([[simulating-students-diverse-cognitive-levels-2025|Wu et al., 2025]]). Calitatea lui crește cu nivelul cognitiv al studentului, deci cursanții mai slabi rămân cazul mai greu, ceea ce este nefericit dat fiind că de obicei ei sunt miza. Modelarea dinamicii cognitive în locul unui personaj static merge mai departe: actualizările de stare bazate pe ICAP din CogEvolution au atins R²LC = 0,92, unde agenții statici ating 0,45, și au căzut la 0,58 fără modulul lor ICAP ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang et al., 2026]]).

**Elimină cunoașterea.** Suprimarea a 16 componente de cunoaștere țintite în Mistral-7B a scăzut acuratețea de la aproximativ 0,75, la un raport de uitare de 10%, la sub 0,5 la 40%, în timp ce modelul de bază s-a menținut aproape de 0,85. Cunoașterea suprimată s-a dovedit recuperabilă prin reînvățare supervizată și dialog ghidat de un coach ([[simulating-novice-students-machine-unlearning-2026|Song, Guo & Lin, 2026]]). Acesta este lucrul cel mai apropiat de fabricarea unui novice direct, iar recuperabilitatea devine un avantaj dacă vrei ca simulatorul să învețe în timpul unei sesiuni.

## Scenarizează replicile, nu personajul

Stabilitatea personajului se dovedește a fi o problemă de design al interacțiunii, nu de alegere a modelului. Combinând cinci LLM-uri cu trei designuri de prompt și patru personaje cu intensitate ADHD, interacțiunile scenarizate și ancorate în sarcină au eliminat deriva comportamentală evaluată de observatori, cu până la 97% față de dialogul nescenarizat. Fără instrucțiuni explicite de personaj, reprezentarea de bază a studenților înclina spre simptome ADHD ridicate ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase & Leins, 2026]]).

Dacă simulatorul tău derivă, uită-te la ce îi ceri să facă replică cu replică înainte de a schimba modelul sau de a rescrie descrierea studentului.

## Punctează două lucruri, nu unul

StudentSim cere ca două proprietăți să se țină împreună: **fidelitatea comportamentală**, cât de bine se potrivește simulatorul cu răspunsurile proprii ale unui student, și **receptivitatea la îndrumare**, cât de fiabil se actualizează spre locul unde duce îndrumarea tutorelui. Benchmark-ul său transformă corpusuri publice de cursanți (șah, scriere în engleză ca limbă secundară, matematică) într-un protocol per student pe care orice simulator este antrenat și punctat pe înregistrări ținute deoparte. Urmărirea stării specifice domeniului a ieșit slabă la receptivitate, iar jocul de rol LLM doar cu prompt a ieșit slab la fidelitate ([[studentsim-llm-student-simulators|Yang et al., 2026]]). Un simulator poate trece un test și îl poate rata pe celălalt, deci raportează-le pe amândouă.

Ca dovadă de concept, un StudentSim înghețat folosit drept recompensă într-o buclă de [[reinforcement-learning|învățare prin întărire]] pentru un tutore de șah a produs tutori pe care experții i-au evaluat drept mai acurați, mai bine ghidați și mai personalizați decât cei antrenați cu o recompensă din simulator de LLM de frontieră sau fără niciun RL. Un simulator bun poate fi și semnalul de antrenare, și măsura.

Fidelitatea la nivel de acțiune are propria limită. Simulatoarele de studenți reproduc acțiuni observabile fără raționamentul latent din spatele lor, iar [[inside-llm-student-simulator-reasoning-2026|INSIDE]] ajustează fin modele pentru a genera un dialog intern înainte de fiecare acțiune, atingând cea mai înaltă aliniere între raționamentul generat și editările reale de cod la 51,8% pe probleme familiare și 57,9% pe probleme nevăzute, fără a pierde fidelitatea acțiunii (Niousha et al., 2026). Dacă te interesează de ce a făcut ceva studentul tău simulat, potrivirea acțiunii nu este suficientă.

## Validează față de cursanți reali și raportează linia de bază

Două comparații arată cât costă validarea.

Benchmark-uirea a nouă metode de simulare față de șapte metrici bazate pe referință, pe 382 de dialoguri ținute deoparte din cel mai mare corpus public de dialoguri reale student-tutore la matematică, a arătat că promptingul a rămas în urma ajustării fine la actele de dialog (0,4998 față de 0,6840), la ROUGE-L (0,1648 față de 0,3212) și la similaritatea cosinus (0,5460 față de 0,7390). Cea mai bună metodă testată, optimizarea preferințelor pe un model de 8B, a depășit doar marginal ajustarea fină supervizată și a fost mai slabă la erori, iar o evaluare umană cu trei tutori a reprodus acea ierarhie ([[simulated-students-tutoring-dialogues-2026|Scarlatos et al., 2026]]). Vârful acestei scări stă aproape de mijloc, deci linia de bază pe care o raportezi decide cât de impresionant arată numărul tău.

SWIM este cea mai clară comparație între prompting, ajustare fină și învățare prin întărire, pentru că punctează fiecare eseu generat față de un profil-țintă de trăsături, în loc să îl judece impresionist. Promptingul fundamentat pe rubrică a dat control limitat chiar și pentru modele proprietare puternice, cu cel mai bun QWK mediu pe trăsături de 0,577 (Claude Sonnet) și 0,422 (GPT-5.4), și aproape zero pentru un model deschis de 7B. Ajustarea fină supervizată pe perechi reale scor-escu a atins 0,474 ± 0,023 pentru acel model de 7B. GRPO cu o recompensă derivată din notarea automată a eseurilor a atins 0,618 ± 0,005, cu câștiguri care s-au menținut pe doi evaluatori independenți față de care politica nu s-a antrenat niciodată ([[swim-student-writing-simulation-2026|SWIM]]).

Promptingul a produs și o populație idealizată, nu una realistă: scorul general normalizat mediu de 0,74 față de 0,58 pentru studenții reali și o lungime mediană de 304 cuvinte față de 167. Modelele antrenate au recuperat distribuțiile umane de scor și lungime fără nicio supervizare pe lungime. Un lucru a rămas greu: forma autentică de competență scăzută. Modelele antrenate au recuperat sintaxa, dar au scris prea puține greșeli de ortografie și gramatică, în timp ce promptingul a simulat slăbiciunea prin corupere superficială, greșeli de scriere împrăștiate peste o proză altfel competentă.

Realismul de suprafață este un test slab în ambele direcții. Într-un studiu orb, adnotatorii experți au clasificat greșit 164 din 196 (83,7%) de trimiteri Java generate de LLM drept scrise de oameni, pentru că erorile erau funcțional indistinguibile de cele autentice, iar alinierea cu erorile reale a scăzut apoi pe măsură ce dificultatea problemelor creștea ([[simulating-students-java-programming-errors-llms|Keramati et al., 2026]]). Pe șapte modele de la 4B la 120B parametri, simulatoarele au basculat spre răspunsul corect la rate aproape uniforme, indiferent de feedbackul primit, deci similaritatea rezultatului nu spune nimic despre starea de credință din spate. Antrenarea față de **Selective Flip Score** a ridicat fidelitatea cu până la +0,56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar & Sachan, 2026]]).

## Verifică dacă o descriere ar fi suficientă

Înainte de a construi o cohortă, verifică opțiunea mai ieftină. Pentru evaluarea unei experiențe de învățare online înainte ca studenții să se implice, pentru prezicerea abandonului și a finalizării și pentru feedback de design, un singur agent web care descrie, parcurgând lecția și producând o descriere bogată a experienței, a depășit simularea directă a unei populații de studenți.

Studenții simulați din acea comparație au arătat o gamă comportamentală mult mai mică decât cursanții reali: pe 100 de agenți și cinci lecții de test, au reprodus doar aproximativ 4% din traseele pe care le-au urmat studenții reali, costând în același timp considerabil mai mult calcul. Pipeline-ul descrie-apoi-prezice a obținut cea mai bună predicție a distribuției abandonului pe un curs CS1 global masiv, cu un JSD mediu de 0,060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell și Piech, 2025]]).

Granița pe care o trasează este practică. Simularea unei distribuții de studenți poate fi inutilă sau contraproductivă când scopul este prezicerea rezultatelor sau critica de design. Simularea își merită costul când acoperirea variației reale a cursanților contează, cum ar fi auditarea tratamentului pe care îl aplică o IA unor profile diverse sau oferirea unui profesor cu ce să exerseze.

## Ce greșesc cei care construiesc, în privința asta

Realismul de suprafață este ținta. O rată de clasificare greșită de 83,7% pentru cod scris de mașină și bascularea aproape uniformă a răspunsurilor pe șapte modele spun amândouă că un judecător uman care citește rezultatul nu poate vedea proprietatea pe care o pretinzi. Testează în schimb răspunsul la o corectare.

Un prompt de personaj mai bun repară deriva. Replicile scenarizate și ancorate în sarcină au redus deriva evaluată de observatori cu până la 97% pe cinci modele și trei designuri de prompt. Designul replicilor a făcut treaba.

Un model de bază mai puternic închide decalajul de competență. Un model proprietar puternic a obținut 0,422 la QWK pe trăsături cu prompting, în timp ce un model de 7B ajustat fin a atins 0,474, iar aceeași comparație pe șase modele a depășit cel mai rău exact la nivelurile de clasă cele mai mici. Alegerea modelului schimbă o axă de fidelitate pe alta.

Validarea înseamnă că un coleg a citit o transcriere și i s-a părut că sună bine. Rezultatul Java arată cât de departe ajunge acea judecată. Validarea înseamnă înregistrări ținute deoparte de la cursanți reali și o linie de bază pe care o poți numi.

Simularea unei populații este opțiunea temeinică. Pe 100 de agenți, simulările au acoperit aproximativ 4% din traseele pe care le-au urmat studenții reali, la un cost de calcul substanțial mai mare decât agentul care descrie.

## Ce se va întoarce împotriva ta

**„Profesorii nu au putut distinge simulatorul nostru de un student.”** În studiul Java orb, adnotatorii experți au clasificat greșit 83,7% dintre trimiterile de mașină drept umane. Asta îi măsoară pe adnotatori și lasă starea de credință neexaminată.

**„Ajustarea fină este în afara sferei echipei noastre.”** Atunci limitează afirmația la ce susține promptingul și spune-o. Promptingul a stabilit un plafon de 0,577 pentru cel mai puternic model testat și aproape zero pentru un model deschis de 7B și a produs o distribuție idealizată a scorurilor.

**„Nu avem acces la date de la cursanți reali.”** Protocolul StudentSim este construit din corpusuri publice de cursanți la șah, scriere în a doua limbă și matematică. Datele publice limitează ce poți afirma despre propria populație și îți dau o linie de bază, care este exact lucrul pe care cele mai multe rapoarte îl omit.

**„GRPO a bătut ajustarea fină supervizată, deci ar trebui să antrenăm cu RL.”** A bătut-o, cu 0,618 față de 0,474. Forma de competență scăzută a rămas grea în ambele cazuri, cu prea puține greșeli de ortografie și gramatică, iar într-un benchmark separat optimizarea preferințelor a depășit ajustarea fină doar marginal și a pierdut la erori. Verifică de ce proprietate depinde cazul tău de utilizare.

**„Cursanții cei mai slabi sunt o felie mică din utilizatorii noștri.”** Sunt cazul cel mai greu pentru fiecare metodă de pe această pagină, iar constatarea despre acoperire spune că simulările se grupează în cadranul cel mai ușor. Dacă simulatorul tău va fi folosit pentru a trage concluzii despre studenți care se zbat, acel decalaj își are locul în raport.

## Ce să faci săptămâna aceasta

**1.** Scrie propoziția despre acoperire: pe care cursanți nu îi reprezintă acest simulator. Pune-o în README și în notele demonstrației.

**2.** Adaugă o probă în setul tău de teste care corectează simulatorul și verifică dacă rămâne în eroare.

**3.** Înlocuiește chatul liber de personaj dintr-un flux cu replici ancorate în sarcină și compară deriva.

**4.** Punctează un simulator existent față de înregistrări reale ținute deoparte, pe fidelitate și pe receptivitate, și raportează cele două numere separat.

**5.** Rulează verificarea cu agentul care descrie pe întrebarea la care ai de fapt nevoie de răspuns înainte de a finanța o cohortă.

## Încotro mai departe

[[simulating-students|Simularea studenților]] este pagina de concept completă. [[checking-whether-educational-ai-works|Verificarea dacă IA educațională funcționează]] acoperă evaluarea sistemelor pe care le testezi față de un simulator, iar [[making-ai-better-at-supporting-learning|Cum facem IA mai bună la sprijinirea învățării]] acoperă metodele de antrenare din spatele rezultatelor de ajustare fină de aici. [[addressing-common-misconceptions-ai-education|Abordarea concepțiilor greșite comune despre IA în educație]] preia întrebarea dacă studenții simulați pot ține locul cursanților reali în cercetare.
