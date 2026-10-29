---
title: "Cum mă poate ajuta IA să ofer feedback mai bun la scară largă?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T15:41:26-04:00"
translation_of: faqs/ai-feedback-at-scale
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

Este săptămâna a șasea. Ai un teanc de schițe, o grilă de evaluare în care crezi și o suspiciune crescândă că o treime dintre comentariile tale sunt parcurse în diagonală și uitate. Un coleg menționează că un instrument comentează acum fiecare schiță în decurs de o oră. Ședința de departament are nevoie de un răspuns: este o îmbunătățire sau o cale mai rapidă de a produce text pe care nimeni nu îl citește?

Răspunsul scurt pe care să îl dai unui coleg: feedbackul de IA își câștigă locul pe acoperire, promptitudine și consistență, într-o bandă îngustă. Corectura lingvistică la scară mare și comentariile de primă trecere ghidate de grilă merită automatizate. Acoperirea este partea ieftină. Într-un experiment randomizat pe clustere cu 1.176 studenți din anul întâi, designurile reflexive și hibride au depășit critica IA directă la [[transfer-of-learning|transferul]] întârziat, fără IA. Într-un experiment randomizat pe eseuri cu 70 de studenți, feedbackul de IA mai bine cotat nu a produs revizuiri mai bune decât cele ale unui profesor experimentat. Ce face un student cu un comentariu decide rezultatul, iar [[feedback-literacy|alfabetizarea în feedback]] îi separă pe studenții care câștigă de cei care copiază.

## Pe scurt

**1.** Decide ce contează ca reușită înainte de a pilota orice: calitatea revizuirii și performanța întârziată fără asistență, nu fluența comentariilor.

**2.** Sortează-ți propriile comentarii în corecturi la nivel de limbă și judecăți la nivel de decizie. Doar prima categorie este candidată la automatizare.

**3.** Etapează sursele. Autoevaluarea prima, feedbackul între colegi al doilea, critica IA al treilea. Două surse puse alături produc o preluare pasivă.

**4.** Dă-i modelului grila ta de evaluare și pune-l să raționeze pas cu pas. O instrucțiune nudă produce rezultate generice.

**5.** Păstrează mesajul final, tonul și orice devine înregistrare la un om.

**6.** Bugetează orele pe care le vei petrece pe ștergere și calibrare și compară-le cu orele pe care le-ai eliberat.

## Decide ce contează ca reușită înainte de a pilota orice

Indicatorul tentant este calitatea a ceea ce scrie modelul. Este și indicatorul care induce în eroare.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] au randomizat 70 de studenți care scriau eseuri argumentative în persană în trei grupuri. Promptarea cu lanț de gândire a produs feedback semnificativ mai bine cotat (M = 12,90) decât promptarea zero-shot (M = 11,25, p = 0,01) și decât un profesor uman experimentat (M = 11,20, p = 0,008). Grupul cu lanț de gândire nu și-a revizuit eseurile semnificativ mai mult decât grupul cu feedback de la profesor, care a obținut câștiguri comparabile. Comentarii mai bune, aceleași revizuiri. Dacă criteriul tău de succes este calitatea comentariilor, studiul se citește ca o reușită. Dacă este ce s-a schimbat în eseu, nu.

Alte două semnale flattează un pilot care merge prost, așa că stabilește-le dinainte. Satisfacția studenților este unul. În pilotul Deakin la nivel de universitate, raportat de [[tubino-adachi-ai-automated-feedback-literacy|Tubino și Adachi (2022)]], evaluări medii pozitive au coexistat cu erori semnalate de studenți, așa că un chestionar cu fețe zâmbitoare nu este dovadă de acuratețe. Utilizarea este celălalt. Instrumentul Deakin era opțional, iar utilizarea a fost în medie de aproximativ 13% dintre studenții de licență și 12% dintre studenții de masterat, deși aproape 4.000 de studenți aveau acces. Studenții proactivi și cu performanțe înalte l-au folosit mai mult. Atât îți aduce simpla punere a instrumentului la dispoziție.

Măsura de rezultat care rezistă este calitatea revizuirii plus performanța întârziată fără IA. Retrimiterile multiple în aceeași zi sunt o urmă utilizabilă a faptului dacă un student s-a implicat deloc. Nu sunt dovadă că s-a învățat ceva.

## Sortează-ți comentariile înainte de a le automatiza

Ia-ți ultimul set de comentarii și împarte-l în două: corecturi la propoziții și judecăți despre gândire. Împărțirea îți spune ce să automatizezi și este mai îngustă decât sugerează furnizorii.

Pilotul Deakin a rulat în 2021, folosind instrumentul de feedback automatizat cu IA de la FeedbackFruits, în 29 de unități și cu aproape 4.000 de studenți. Funcționează pe trăsături de text de nivel micro: lungimea propoziției, punctuație, gramatică, structura textului. Asta susține etapa de corectură lingvistică, unde instructorul stabilește parametrii, studentul folosește instrumentul independent, iar feedbackul ajunge la timp pentru a fi acționabil. Diviziunea muncii este ce scalează, nu modelul.

Comentariile la nivel de judecată sunt locul unde stau modurile de eșec. [[learner-centered-feedback-ai|Aldino et al. (2026)]] au colectat problemele semnalate de instructori de la 21 de cadre didactice din învățământul superior: ton inconsecvent (n = 7), posibile informații false (n = 5) și probleme de încredere (n = 5). Efortul lor de revizuire s-a dus pe ștergerea laudei exagerate și a sugestiilor generice, nu pe adăugarea de conținut. Acea listă este treaba ta de revizuire și acolo se duc orele.

## Etapează sursele în loc să le stivuiești

Cea mai puternică dovadă de design vine dintr-un experiment de teren longitudinal, multi-site, randomizat pe clustere: 1.176 studenți din anul întâi, în 48 de grupe, la 4 universități și în 3 domenii [[stem-education|științifice]], randomizați la nivel de grupă în condițiile doar colegi, GenAI direct, GenAI reflexiv și hibrid ([[genai-feedback-design-multisite-experiment|Ateș, 2026]]).

Condiția reflexivă cerea autoevaluare înainte de critica IA. Cea hibridă rula autoevaluarea, apoi feedbackul între colegi, apoi critica GenAI. Hibridul a produs cele mai mari câștiguri la calitatea argumentării și cel mai clar avantaj la învățarea conceptuală. Condițiile reflexivă și hibridă au produs amândouă o preluare mai puternică a feedbackului și mai multă [[self-regulated-learning|învățare autoreglată]] decât GenAI direct, iar amândouă l-au depășit la transferul întârziat, fără IA. GenAI direct a ridicat calitatea imediată a argumentării peste feedbackul între colegi, acesta fiind avantajul pe care îl are, dar cu un transfer mai slab.

Mecanismul explică de ce secvențierea contează mai mult decât instrumentul. Critica directă invită la o preluare pasivă: studentul citește un verdict și îl aplică. Designurile reflexive și hibride îl obligă pe student să interpreteze comentariul, să îl compare cu criteriile, să îi judece relevanța și apoi să revizuiască. Valoarea educațională depinde mai puțin de accesul la IA și mai mult de întrebarea dacă mediul de feedback păstrează [[agency|agentivitatea învățăcelului]] și [[evaluative-judgment|judecata evaluativă]] în timpul revizuirii.

Feedbackul între colegi își câștigă propriul loc în secvență. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen și Yan (2026)]] au condus două clase paralele de engleză (N = 118 studenți din anul întâi în China; GenAI n = 56, colegi n = 62) prin trei cicluri de autoevaluare pe parcursul unui semestru. Sprijinul de tip schelă oferit de GenAI a îmbunătățit alfabetizarea în feedback ușor, dar semnificativ, față de recenzarea între colegi umani (ANCOVA p = 0,049, ηp² = 0,03). Studenții din grupul GenAI și-au rafinat prompturile iterativ și au verificat sau contestat rezultatele inexacte. Studenții din grupul cu colegi și-au ales sursele după comoditate socială, iar judecata lor evaluativă a fost distorsionată de biasul prieteniei. Recenzarea între colegi a păstrat o valoare distinctă pentru conștientizarea publicului, motiv pentru care autorii propun designuri în mai multe etape, cu feedback anonim între colegi, în loc de o înlocuire.

Avantajul lui Gu et al. a fost mic, iar ei îl citesc ca real, dar nu transformator în sine. Sprijinul de tip schelă al profesorului, ghidurile de promptare și fișele de lucru au făcut munca de susținere.

## Dă-i modelului o grilă de evaluare și pune-l să își arate pașii

Generarea referențiată la grilă este partea automatizabilă.

Câștigul de calitate al lui Farrokhnia et al. a venit dintr-un prompt cu lanț de gândire care a purtat modelul printr-o evaluare pas cu pas față de o grilă de argumentare, nu dintr-o instrucțiune nudă de a da feedback. Gu et al. le-au dat grupului GenAI ChatGPT-4o cu grile preantrenate și ghiduri de promptare, ceea ce a făcut rezultatul verificabil față de criterii declarate. În ambele cazuri, promptul este locul unde criteriile tale intră în sistem, iar urma de raționament este ce îți permite să vezi dacă modelul le-a aplicat.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson și Yan (2025)]] fac din calitatea promptului balamaua întregului proces. Prompturile vagi produc rezultate generice și inutile, iar comentariile generate pot fi halucinate, părtinitoare sau suprapuse, ceea ce aruncă judecata evaluativă înapoi asupra cititorului. Calibrarea este și mai ascuțită. La Farrokhnia et al., calitatea feedbackului GenAI a fost semnificativ asociată cu tăria schiței inițiale a studentului, în timp ce calitatea feedbackului profesorului nu a fost. Profesorul a calibrat mai constant. Volumul scalează. Calibrarea nu.

## Păstrează ultimul cuvânt și înregistrarea la om

[[becerra-aicofe-feedback-2026|Becerra, Palma și Cobos (2026)]] descriu AICoFE, care rulează trei modele ajustate independent (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) peste scoruri de grilă și observații calitative pentru a produce comentarii independente pe schiță. Instructorul compune apoi mesajul final selectând propoziții sau paragrafe, cu o legendă care arată ce model a contribuit cu ce. Modelul redactează. Instructorul livrează, iar livrabilul este semnat de o singură persoană care a citit schița.

Aldino et al. găsesc același tipar de asistare și apoi verificare în practica obișnuită. Componenta de învățare automată semnala cel mai des „Îndeplinește obiectivul de învățare” ca lipsind (20 din 21 de profesori îl omiseseră; 16 au acceptat semnalarea) și „Relația student-profesor” (14 îl omiseseră; 12 au acceptat). Profesorii au decis fiecare sugestie pe baza judecății profesionale, ceea ce este rostul punerii lor în buclă.

Doisprezece dintre cei 21 de profesori ai lui Aldino et al. au făcut revizuiri suplimentare la nivel de propoziție, iar tiparul dominant a fost calibrarea tonului: reducerea laudei (f = 11), eliminarea sugestiilor (f = 9), eliminarea încurajărilor (f = 8). Revizuirile s-au grupat pe dimensiunea relațională, în special Relația student-profesor (f = 24). Protejau autenticitatea și vocea profesională, iar acea muncă nu se automatizează.

## Învață studenții să citească comentariul

Alfabetizarea în feedback este o condiție prealabilă și este distribuită inegal.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths și Lodge (2026)]] au pus 32 de studenți la psihologie să facă o sarcină de eseu de 25 de minute înregistrată pe ecran, cu acces nerestricționat la ChatGPT, apoi să vizioneze înregistrarea într-un interviu stimulat de video. Alfabetizarea în feedback a fost singurul predictor pozitiv semnificativ al notei eseului (β = 0,46, p = 0,017). Frecvența folosirii GenAI, [[trust|credibilitatea sursei]] și [[prior-knowledge|cunoașterea prealabilă]] nu au prezis performanța, un punct pe care îl fac și [[feedback-futures-genai|Zhan, Wood, Carless și Yan (2026)]] în editorialul numărului special. Mai puțin de o treime dintre studenți au comparat rezultatul IA cu o altă sursă de internet. Jumătate au exprimat o evitare deliberată a IA pentru [[academic-integrity|integritate academică]] sau pentru că voiau eseul în propriile cuvinte. Majoritatea au cerut feedback la nivel de sarcină, care se transferă slab la alte sarcini.

Extremele sunt vizibile în perechea de scriitori IELTS pe care o descriu Zhan et al. Un student cu alfabetizare scăzută a scris un prompt vag, a primit feedback generic, l-a crezut sau l-a copiat excesiv și s-a implicat superficial. Un student cu alfabetizare înaltă a scris un prompt referențiat la criterii, a revenit cu întrebări, a verificat surse încrucișat și a monitorizat revizuirile. Diferența a fost instruirea și obiceiul, nu accesul la instrument.

Spune-le studenților direct că comentariile modelului pot fi halucinate, părtinitoare sau suprapuse și că studentul deține revizuirea. Formulează rezultatul ca o opinie-schiță care trebuie judecată, nu ca un răspuns de copiat. Apoi cere comparația, pentru că mai puțin de o treime dintre studenți o fac fără să li se ceară.

## Ce greșesc cadrele didactice aici

Mai multe comentarii înseamnă mai mult feedback. Comentariile sunt ieftine de produs și scumpe de absorbit, iar constrângerea stă pe partea studentului din buclă. Comentariile de IA mai bine cotate ale lui Farrokhnia et al. nu au produs mai multe revizuiri decât comentariile profesorului.

Un model mai bun va rezolva rezultatul generic. Eșecurile instrumentului Deakin au fost eșecuri de sferă de aplicare: trăsături la nivel de propoziție, o bandă îngustă de corectură lingvistică. Zhan et al. localizează soluția în prompt, în grilă sau în om, nu într-un model mai mare. Perechea de scriitori IELTS este demonstrația: același instrument, obiceiuri diferite, rezultate diferite.

Punerea instrumentului la dispoziție este intervenția. Utilizarea a fost de aproximativ 13% dintre studenții de licență și 12% dintre studenții de masterat când instrumentul era opțional. Restul întrebării de design este ce se întâmplă cu ceilalți 87%.

Economia de timp este automată. Întrebați ce le-a dat instrumentul de feedback cu IA, 21 de profesori au numit economia de timp doar rareori (n = 2). Au numit reflecția (n = 14), limba și structura îmbunătățite (n = 11) și identificarea componentelor lipsă (n = 10) mult mai des. Editarea (f = 32) și eliminarea (f = 27) au dominat munca lor de revizuire, cu adăugarea rară (f = 8). Ce apare este o schiță și un prompt diagnostic. Ce apare de asemenea este munca de revizuire, calibrare și verificare. [[ai-save-instructor-time|Întrebarea despre volumul de muncă]] este cea mai des promisă ca rezolvată, iar GenAI redistribuie munca profesorului în loc să o elimine.

Evaluările de satisfacție îți spun că comentariile sunt exacte. În pilotul Deakin, evaluări medii pozitive au coexistat cu erori semnalate de studenți. Eșantionează rezultatul față de propria ta lectură a acelorași schițe și notează unde modelul a fost generic, greșit sau lingușitor.

## Ce se va întoarce împotriva ta

**„Feedbackul de IA nu este personal.”** Adesea adevărat, și este motivul pentru care ultimul cuvânt rămâne uman. AICoFE există pentru că proza generică a modelului nu este ce ar trebui să primească un student: instructorul selectează, editează și semnează mesajul final. Cei 21 de profesori din Aldino et al. au rescris tonul din același motiv. Personalizarea este treaba ta în acest design, iar modelul face munca de pregătire.

**„Studenții mei oricum nu citesc feedbackul.”** Citesc mai puțin decât sperăm, iar dovezile spun că soluția este designul, nu volumul. Preluarea în pilotul Deakin a fost de aproximativ 13% și 12%. Comentariile mai bine cotate ale lui Farrokhnia et al. nu au produs revizuiri suplimentare. Ce a mișcat acul a fost o secvențiere care forțează implicarea, autoevaluare, apoi feedback între colegi, apoi critică IA, plus trei cicluri de revizuire pe parcursul unui semestru care au produs diferențe măsurabile în alfabetizarea în feedback.

**„Nu pentru asta plătesc studenții.”** Atunci fă în așa fel încât IA să nu devină singura voce pe care o aud de la tine. Versiunea defendabilă le dă studenților mai multe momente de feedback, în timp ce tu îți petreci orele pe părțile intensive în judecată: ultimul cuvânt, calibrarea, comentariile care poartă autoritatea ta. Ce pierd studenții într-o implementare neglijentă este coerența între criterii, comentarii și rezultat. Specifică complementaritatea prin secvențiere, comparație, editare și guvernanță, și obiecția își pierde forța. Lasă două surse alături și obiecția nu își pierde forța.

**„Nu am timp să revizuiesc tot ce scrie modelul.”** Atunci nu revizui tot. Automatizează banda unde erorile sunt ieftin de prins, lucrul lingvistic la nivel de propoziție, și eșantionează rezultatul la nivel de judecată față de schițe pe care le-ai notat deja. Numerele lui Aldino îți spun la ce să te uiți: ton, informații false, laudă exagerată, suprapunere.

## Ce să faci săptămâna aceasta

**1.** Sortează-ți propriul ultim set de comentarii în corecturi la nivel de limbă și judecăți la nivel de decizie și numără fiecare teanc.

**2.** Scrie promptul pas cu pas, referențiat la grilă, pe care l-ai da unui model și testează-l pe trei schițe pe care le-ai notat deja.

**3.** Eșantionează rezultatul față de propriile tale comentarii și notează unde modelul a fost generic, greșit sau lingușitor.

**4.** Etapează o temă ca autoevaluare, apoi feedback între colegi, apoi critică IA, și spune-le studenților că IA este o opinie-schiță pe care se așteaptă să o conteste.

**5.** Cere o comparație cu o a doua sursă sau cu criteriile, pentru că mai puțin de o treime dintre studenți fac asta fără să li se ceară.

**6.** Notează cât din feedbackul final a venit de la model și cât ai schimbat tu. Urmărirea curatorierii din AICoFE este modelul pentru acea înregistrare.

**7.** Urmărește diferența expert-novice. Instructorii cu peste cinci ani de experiență au raportat mai multe probleme cu rezultatul instrumentului decât colegii mai puțin experimentați, care au valorizat sprijinul de tip schelă. Dacă colegii tăi experimentați văd mai multe eșecuri decât vezi tu, aceasta este o informație despre propria ta calibrare.

## Încotro mai departe

[[feedback]] este conceptul umbrelă pentru întregul sistem: oferire, buclă, preluare și context de evaluare. [[ai-feedback-quality|Calitatea feedbackului de IA]] acoperă ce face comentariile generate exacte, utile, la timp și solide pedagogic, iar această pagină este mijlocul practic, despre ce combinații ale acestor părți produc feedback mai bun la scară.

Întrebările despre ce ar trebui să însemne o notă odată ce IA este implicată, inclusiv substituirea constructului, dovezile de proces autentificate și regulile de integritate, aparțin de [[redesign-assessment-ai-era|reproiectarea evaluării în era IA]] și de [[assessment-validity|validitatea evaluării]], nu de aici. Pentru cazul special al instruirii în scriere, vezi [[writing-instruction-ai-best-practices|bunele practici pentru instruirea în scriere în contextul IA]].
