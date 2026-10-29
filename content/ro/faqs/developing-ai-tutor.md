---
title: "Care sunt bunele practici pentru dezvoltarea unui tutore de IA eficace?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T15:41:26-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Tutorul tău este la trei săptămâni de un pilot. Chatul funcționează, modelul explică o derivată curat, iar demonstrația internă a primit aplauze. Apoi cineva de la centrul de predare pune întrebarea pentru care specificația ta nu are niciun câmp: după un semestru cu lucrul acesta, vor rezolva studenții o problemă atunci când el nu este în sală? Ce ai este o listă de funcționalități. Ce nu ai este o propoziție care să spună ce trebuie să poată face învățăcelul singur la final.

Un tutore este o politică înfășurată în jurul unui [[conversational-ai|chatbot]], iar politica decide dacă învățarea se întâmplă. Numește munca cognitivă pe care trebuie să o facă învățăcelul, fă sistemul să o ceară (o tentativă înainte de ajutor, o scară de indicii care se retrage, o verificare pe care modelul nu o poate falsifica) și evaluează cu tutorul oprit. Calitatea modelului stabilește cât de bine se simte conversația. Politica decide ce va putea face studentul în iunie.

## Pe scurt

**1.** Scrie obiectivul ca pe o afirmație despre performanța fără ajutor, apoi derivă din el fiecare funcționalitate. Dacă o funcționalitate nu poate fi urmărită până la acea propoziție, este o funcționalitate de demonstrație.

**2.** Construiește modelul învățăcelului din dovezi pe care le poți înregistra și stochează fiecare diagnoză ca pe o ipoteză cu o valoare de încredere, nu ca pe un fapt.

**3.** Fixează scara de ajutor în cod, cu trepte numite, și fă interfața să îi ceară învățăcelului ceva pentru fiecare pas în jos pe scară.

**4.** Ancreează conținutul în propriile tale materiale și dă verificarea aritmeticii, algebrei și codului unor instrumente deterministe care nu pot halucina.

**5.** Testează eșecurile de predare pe conversații întregi: scurgerea răspunsului, servilitatea, întărirea concepțiilor greșite, deriva instrucțională.

**6.** Măsoară cu o fază de retragere și un test întârziat, nu cu un scor de satisfacție.

## Scrie obiectivul ca pe o afirmație despre performanța fără ajutor

Trei liste, scrise înainte ca cineva să aleagă un model:

- Ce ar trebui să știe sau să poată face învățăceii după aceea.
- Ce muncă cognitivă trebuie să facă ei înșiși.
- Ce poate face tutorul pentru ei.

Literatura despre [[intelligent-tutoring|tutoratul inteligent]] arată că eficacitatea depinde de designul [[pedagogy|pedagogic]], nu doar de capacitatea modelului, iar eșecul este ușor de construit din greșeală. Un tutore optimizat pentru „termină problema” va submina un tutore optimizat pentru „învață să rezolvi problema” trecând în același timp fiecare test funcțional pe care îl scrii, pentru că ambele produc răspunsuri finale corecte. Diferența stă în ce a făcut studentul între întrebare și răspuns.

A doua listă este locul unde echipele de dezvoltare devin concrete. Ia o etichetă de stăpânire precum „stăpânirea derivatei” și refuză să o lași să însemne producerea derivatei corecte. Desparte-o în a recunoaște când o derivată este potrivită, a o interpreta ca rată instantanee de schimbare, a selecta regula, a executa procedura, a explica de ce alegerea a fost corectă, a verifica plauzibilitatea și a o aplica la o problemă nefamiliară. Fiecare dintre acestea este un lucru separat de înregistrat și fiecare implică un răspuns diferit când lipsește. Această descompunere este și apărarea împotriva [[correct-answer-trap-misconceptions|capcanei răspunsului corect]], în care un învățăcel ajunge la răspunsul corect printr-un raționament defectuos, iar analitica ta înregistrează un succes. [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] și [[zhang-tutormoments-2026|When Help is Unhelpful]] descriu amândouă versiuni ale acelui eșec în producție.

## Construiește modelul învățăcelului înainte de conversație

Modelul învățăcelului ține două tipuri de stare: estimări pe concept (limită: în dezvoltare, regula puterii: stăpânită, regula produsului: în dezvoltare, regula lanțului: nedemonstrată) și ipoteze despre concepții greșite, cu dovezile și încrederea din spatele fiecăreia. Ține-le separate. Estimarea pe concept este ce conduce selecția dificultății. Ipoteza este ce conduce întrebarea următoare.

Fii atent la a lăsa un [[llm|LLM]] să facă diagnoza singur. [[benchmark|Benchmarkingul]] a constatat că tutorii bazați pe LLM puteau recunoaște raționamentul clar corect, respingând uneori alternative valide sau acceptând raționament incorect. Un model care vede cazul bun și citește greșit cazul ambiguu îi eșuează exact pe studenții care au nevoie de ajutor. Pentru domenii cu consecințe, arhitectura care rezistă este **diagnoză structurată plus dialog LLM flexibil**, aranjamentul pe care îl descrie [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]]: propriul tău detector stabilește ce a făcut probabil studentul, iar modelul scrie conversația în jurul acelei constatări.

Dă diagnozei o secvență explicită pe care modelul nu o poate sări: detectează, verifică, răspunde. Modelul poate propune o [[misconceptions|concepție greșită]] ca ipoteză, apoi trebuie să o verifice față de munca reală a studentului sau printr-o întrebare țintită înainte ca tutorul să răspundă la ea. Fără acel pas, sistemul inventează dovezi și apoi îl tutorează pe student pentru o greșeală pe care nu a făcut-o, ceea ce este deopotrivă inutil și ușor insultător.

Dovezi care merită înregistrate, în ordinea aproximativă a utilității: tentativele recente cu pașii lor intermediari, cunoașterea demonstrată pe concept, comportamentul de cerere de ajutor (care este el însuși un semnal despre încredere) și încrederea autodeclarată acolo unde o colectezi. Adaptează dificultatea și asistența din acea înregistrare și tratează cel mai recent prompt al învățăcelului ca pe o singură intrare în ea. Un singur prompt este un estimator slab pentru ce știe un student, iar un tutore care reacționează la el va oscila.

## Fixează scara de ajutor, apoi fă interfața să taxeze pentru ea

Scrie treptele înainte de a scrie un prompt, pentru că scara este o decizie de produs cu stări numite, iar o setare de ton nu o poate exprima. O secvență care funcționează:

1. Tentativă independentă.
2. Întrebare metacognitivă despre ce a încercat studentul.
3. Indiciu conceptual.
4. Identificarea regulii relevante.
5. Pregătirea unei părți a problemei.
6. Pas intermediar rezolvat.
7. Soluție rezolvată.
8. Studentul explică soluția.
9. Studentul rezolvă o problemă comparabilă fără ajutor.

Sprijinul se retrage pe măsură ce competența crește, ceea ce este mecanismul din centrul [[scaffolding|sprijinului de tip schelă]]. Vederea unei soluții rezolvate nu demonstrează stăpânire, așa că orice sesiune care ajunge la treapta șapte îți datorează treapta nouă înainte de a conta ca încheiată.

Dovada cauzală că scara merită construită vine dintr-un experiment de teren în care o interfață GPT fără bariere a crescut performanța la matematică cu asistență și a redus performanța ulterioară la examen fără asistență. Un tutore care dă indicii a eliminat în mare parte acea penalizare de învățare ([[generative-ai-guardrails-harm-learning|IA generativă fără bariere de siguranță poate dăuna învățării]]). Constrângerea este arhitecturală. Același model, cu un comportament de ajutor diferit, a produs rezultate opuse pe măsura care contează.

Un experiment de teren randomizat mai mare, cu peste 6.000 de elevi de gimnaziu pe o platformă de exersare bazată pe stăpânire, arată cum arată scara în jurnale. Studenții repartizați la sprijinul cu IA au progresat mai încet și au încercat mai puține întrebări, dar au răspuns mai corect. Mecanismul cel mai clar a fost corectitudinea la următoarea încercare după o greșeală: au fost nevoie de mai puține încercări pentru a reveni la un răspuns corect. Acel tipar este o încetinire productivă și este semnătura pe care o scară de indicii ar trebui să o lase ([[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]]).

Același studiu oferă un avertisment despre propriile tale panouri. Cererea a trei răspunsuri corecte la rând a ridicat brusc stăpânirea definită de platformă fără a produce câștiguri detectabile la un test întârziat o săptămână mai târziu. Cele mai puternice dovezi la testul întârziat au apărut doar acolo unde IA stătea în interiorul fluxului de lucru de stăpânire (coeficient 0,085), nu acolo unde era disponibilă ca acces de sine stătător. Dacă metrica ta de succes este un contor de zile consecutive, vei livra un sistem care optimizează contorul.

Frecarea din interfață aparține aceleiași runde de design. Indicii nelimitate în spatele unui buton vizibil transformă toată scara într-o scurtătură, iar cererile premature de indicii cu citire superficială sunt asociate cu [[learning-gains|rezultate de învățare]] mai mici. Înlocuirea `[Indiciu][Indiciu][Indiciu][Arată răspunsul]` cu întrebările „ce ai încercat?” și „care parte te blochează?” (alegerea unei reguli, pregătirea ecuației, rezolvarea algebrei, înțelegerea conceptului) costă un ecran și îl îndrumă pe student spre treapta de care are de fapt nevoie. Îți dă și datele de jurnal care îți spun ce treaptă o sar sistematic.

## Dă părțile verificabile unui verificator

Ancorează generarea în material aprobat de instructor: secțiuni de manual, notițe de curs, exemple rezolvate, terminologie, metode aprobate, notație, reguli de teme, politici și resurse [[curriculum-design|curriculare]]. Generarea augmentată prin regăsire pe acel corpus reduce [[hallucination-risk|riscul de halucinație]] și nu îl elimină, după cum arată [[rag|RAG]]. Expune citările sau proveniența în interfață acolo unde un student ar putea verifica o afirmație, pentru că citarea este ce face ancorarea auditabilă după fapt.

Ancorarea face și o treabă pe care metricile de acuratețe o ratează. Un curs are metode aprobate, iar un tutore care introduce o tehnică matematic validă pe care cursul nu o folosește i-a predat studentului ceva pentru care va fi depunctat. Regăsirea din stratul de curs este felul în care tutorul rămâne în interiorul setului de metode.

Pentru domenii cu răspunsuri verificabile formal, adaugă instrumente deterministe: calculatoare, sisteme de matematică simbolică, execuție de cod, grafuri de cunoaștere, validatoare bazate pe reguli și solvere [[discipline-specific-aied|specifice domeniului]]. Împărțirea muncii este partea importantă. LLM-ul se ocupă de explicație și dialog. Motorul simbolic verifică echivalența algebrică, derivatele, integralele, soluțiile ecuațiilor, punctele critice și aproximările numerice. Un pas intermediar greșit pe care verificatorul îl prinde devine un moment de tutorat. Un pas intermediar greșit pe care nimic nu îl prinde devine o concepție greșită pe care studentul o duce în examen.

## Cere învățăcelului să acționeze pe feedback

Feedbackul care spune „Corect”, „Incorect” sau „Bună treabă” este un eveniment de notare purtat în interfața predării. Baza de cunoștințe tratează [[feedback|feedbackul]] ca pe o buclă de oferire și preluare: feedbackul sprijină învățarea când studenții îl înțeleg și acționează pe el, iar a doua jumătate este jumătatea pe care sistemele o sar de obicei. Construiește tutorul să numească pasul de raționament implicat, să spună ce trebuie regândit, să dea o acțiune următoare concretă și să îi ceară învățăcelului să prezică sau să explice înainte ca feedbackul să fie dezvăluit.

Secvența care duce asta este învățăcelul primul, IA a doua, învățăcelul din nou. Studentul generează, alege, justifică, evaluează sau reflectează; tutorul răspunde; studentul face ceva cu răspunsul. Proiectează structura turelor astfel încât asta să nu fie opțională. Un sistem în care modelul poate produce trei paragrafe la o singură întrebare îl învață pe student să întrebe și să citească.

Scopul pe termen lung este internalizarea. Învățăceii ar trebui să ajungă să își aplice singuri strategiile de întrebare și de [[problem-solving|rezolvare de probleme]] ale tutorului, ceea ce este argumentul [[agency|agentivității]] și motivul pentru care scara are o treaptă de sus în care tutorul tace.

## Proiectează pentru ce se întâmplă la tura patruzeci

Siguranța pedagogică este o suită de teste separată de siguranța obișnuită a chatbotului, iar majoritatea echipelor livrează doar cu a doua. Toxicitatea și rezistența la jailbreak nu îți spun nimic despre dacă tutorul va da un răspuns unui student care întreabă de două ori, va fi de acord cu o metodă greșită pentru că studentul a sunat încrezător, va deriva din setul de metode al cursului pe o sesiune lungă sau va împinge un învățăcel spre [[cognitive-offloading|descărcare cognitivă]]. [[ai-sycophancy|Servilitatea]] este cea care trece prima, pentru că acordul se citește ca bunătate, iar datele tale de preferințe o recompensează.

Testează scurgerea răspunsului, întărirea concepțiilor greșite, acordul excesiv, dificultatea nepotrivită, descărcarea, tratamentul părtinitor, pierderea agentivității învățăcelului, deriva instrucțională și supraîncrederea în explicații incorecte. Rulează testele pe conversații extinse, nu pe ture singulare, pentru că eșecurile pedagogice se acumulează: primele zece ture pot fi exemplare, iar a unsprezecea poate desface sesiunea. Un tutore ar trebui să fie blând și corect deodată, inclusiv când învățăcelul insistă pe o concepție greșită. [[pedagogical-safety|Siguranța pedagogică]] și [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]] expun taxonomia eșecurilor.

## Pune arhitectura de date în același document de design

Colectează doar datele despre învățăcel care sunt necesare pedagogic și fii în stare să spui de ce există fiecare câmp. Acolo unde ții memorie persistentă sau un [[student-modeling|model al învățăcelului]], fă-i scopul vizibil pentru învățăcel, dă-i un control adecvat asupra lui, protejează informațiile sensibile, definește retenția și îndrumă deciziile cu consecințe către un instructor sau un alt punct de control [[human-in-the-loop-ai|uman]]. Un model al învățăcelului care acumulează în tăcere o estimare de încredere pe care studentul nu o vede niciodată este o problemă de protecție a datelor și una pedagogică.

Auditează comportamentul între medii lingvistice, niveluri de abilitate, contexte culturale, nevoi de [[accessibility|accesibilitate]] și niveluri de [[prior-knowledge|cunoaștere prealabilă]] și experiență cu IA. Performanța diferențială pe același obiectiv este un bug cu un student atașat la el și nu va apărea în numărul tău agregat de acuratețe.

O decizie de accesibilitate merită propriul rând: nu face din [[prompt-engineering|formularea de prompturi]] sofisticată o condiție prealabilă pentru instruire bună. Dacă tutorul predă bine doar când un student scrie un prompt atent, ai construit un sistem care îi avantajează pe studenții care știu deja să vorbească cu modelele. Tutorul ar trebui să îi ajute pe învățăcei să formuleze întrebări productive, ceea ce este și o abilitate de [[metacognition|metacogniție]] care merită avută.

## Instrumentează intervalul de retragere

Metricile de sesiune nu îți vor spune dacă lucrul funcționează. Acuratețea răspunsului, lungimea conversației, preferința studentului, satisfacția, finalizarea sarcinii și [[student-engagement|angajamentul]] urcă toate pentru sisteme care nu predau nimic, pentru că studenților le place ajutorul și ajutorul este ușor de măsurat. Evaluează performanța fără ajutor, retenția întârziată, transferul la probleme noi, corectarea concepțiilor greșite, independența învățăcelului, preluarea feedbackului și [[differential-effects-across-learner-groups|efectele diferențiale între grupurile de învățăcei]]. [[ai-ed-evaluation|Evaluarea în educația cu IA]] are metodele, iar [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]] susține că comportamentul este constructul.

Două studii ascut regula împotriva [[self-report-measures|autodeclarării]] și a orizonturilor scurte. Un pilot cu 38 de studenți novici la programare a găsit o asociere puternică între folosirea [[generative-ai|IA generative]] și învățarea *percepută* (rs=0,802, p<0,001), în timp ce indicatorii progresului autonom fără sprijinul instructorului au obținut cele mai mici scoruri. Autorii numesc decalajul iluzie a competenței și datorie epistemică, iar acesta este exact decalajul pe care o metrică de satisfacție îl recompensează ([[genai-cognitive-tutor-programming-2026|IA generativă ca tutore cognitiv informal]]).

Mai fundamental, cea mai mare parte a evaluării se oprește în momentul în care asistența se termină. [[cognitive-washout-ai-skill-decay-2026|Dinamica spălării cognitive]] numește intervalul nemăsurat de după retragere și formalizează patru rezultate: revenire elastică, platou parțial, schelă latentă și supra-recuperare. Curba ei de spălare poartă o constantă de timp a recuperării, un termen de completitudine a recuperării și un indice de histerezis care compară efortul de reînvățare cu efortul inițial. Deoarece reversibilitatea determină severitatea, cadrul argumentează că exersarea programată fără ajutor ar trebui dozată după curba de recuperare, nu dezbătută ca principiu. Planul tău de evaluare are nevoie de o fază de retragere la fel ca de un posttest imediat, iar [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|dovada randomizată că asistența scurtă deprimă performanța ulterioară fără asistență]] este motivul să o programezi devreme.

## Dă-le profesorilor ceva de editat

Înainte de implementare, pune educatori să testeze profiluri realiste de învățăcel, concepții greșite frecvente, cazuri limită, prompturi adversariale, răspunsuri ambigue și conversații lungi de tutorat. Înregistrează eșecurile pedagogice și du-le înapoi în prompturile de sistem, politicile de tutorat, sursele de cunoaștere, [[guardrails|barierele de siguranță]], regulile modelului învățăcelului și selecția modelului. Un răspuns fluent poate fi în continuare pedagogic greșit, iar un profesor este singurul evaluator care poate vedea asta.

[[teacher-intervention-k12-ai-based-instruction-2026|Revizuirea sistematică a lui Lee pe 29 de studii K-12]] descrie în ce constă acea supraveghere și unde se rupe. Intervenția [[teacher-role|profesorului]] este un ciclu repetitiv în patru faze: monitorizare, judecată, intervenție și orchestrare. Alertele IA, [[visualization|panourile]] și scorurile automatizate „nu duc automat la acțiune pedagogică”. Cea mai puternică strategie de profesor pe care o găsește revizuirea este traducerea pedagogică: selectarea, revizuirea, completarea, rezumarea sau ștergerea feedbackului chatbotului în loc să îl transmită mai departe.

Două avertismente de design decurg de aici și amândouă contrazic foaia de parcurs obișnuită. Mai multă informație din IA nu este mai bine: sistemele care emit diagnostice în continuu i-au supraîncărcat pe profesori și au tras atenția departe de propria lor observație. Prioritizează ce merită acțiune, fă-l interpretabil și oferă recomandări într-o formă pe care un profesor le poate accepta, modifica, amâna sau respinge. Nici mai mult sprijin pentru profesori nu este mai bine: amânarea intervenției ca să poată lucra studenții independent este ea însăși expertiză. Condițiile structurale, adică timpul de a revizui date, mărimea clasei și capacitatea de a ajunge fizic la grupurile care au nevoie de ajutor, fac parte din intervenție, nu din logistica de fundal. Un panou construit pentru un profesor fără nicio oră liberă nu se deschide.

## Cazul unu: un tutore de analiză matematică, unde verificarea este ieftină

Un tutore de analiză matematică pentru primul semestru de facultate ar trebui să ridice ce pot studenții să rezolve și să explice independent după ce el este retras, nu să maximizeze problemele completate corect. Tutoratul la matematică este deosebit de vulnerabil la sprijin de tip schelă excesiv, la folosirea prematură a indiciilor și la diagnosticarea incorectă a raționamentului studenților, iar toate trei sunt vizibile în jurnalele tale dacă te uiți ([[math-education|educația matematică]]).

**Ancorare și verificare.** O construcție în șase straturi: materialele cursului și politicile instructorului, apoi un strat de regăsire, apoi un motor de probleme și modelul învățăcelului alături de un verificator simbolic și un motor de diagnostic, apoi un strat de politică pedagogică, apoi generarea conversațională, apoi studentul, apoi înapoi în modelul învățăcelului. Verificatorul este motivul pentru care acest design este tratabil. El decide dacă o expresie este echivalentă, dacă o derivată este corectă, dacă o integrală este evaluată, dacă un punct critic este găsit, și o face fără să ceară părerea modelului.

**O interacțiune.** Pentru derivarea lui $f(x)=(x^2+1)\sin x$, un chatbot convențional dezvăluie răspunsul. Un tutore orientat spre învățare raționează intern că studentul a derivat ambele componente dar a înmulțit rezultatele, o posibilă [[misconceptions|concepție greșită]] de tip regula-produsului-ca-$f'g'$, și pune mai întâi o întrebare de diagnostic: ce regulă se aplică atunci când două funcții sunt înmulțite? Apoi studentul scrie simbolic regula produsului, stabilește $u$ și $v$, și doar după aceea tutorul verifică expresia finală. Observă cât de mult din tutorat s-a întâmplat înainte ca vreo proză a modelului să ajungă la student.

**Reprezentări multiple.** Leagă procedurile simbolice de formulă, de grafic, de tabel, de o interpretare verbală și de un context fizic de rată de schimbare. Fluența procedurală și înțelegerea conceptuală arată identic pe o foaie de răspunsuri corecte și diverg pe problema de transfer.

**Panoul.** Expune dovezi agregate în locul judecăților opace: „regula produsului, 62% stăpânire demonstrată; tipare frecvente, 18% omit un termen, 11% înmulțesc derivatele.” Diagnozele individuale pleacă sub formă de ipoteze cu dovezile lor justificative, ceea ce este și ceea ce le face revizuibile de un profesor ([[explainable-ai|explicabilitatea]] contează mai mult pentru profesor decât pentru student aici).

**Planul de evaluare.** Performanța cu tutorul, performanța pe probleme comparabile fără el, retenția întârziată, transferul la probleme nefamiliare, calitatea explicației conceptuale, corectarea concepțiilor greșite, [[help-seeking|cererea de ajutor]] adecvată față de cea prematură, scurgerea răspunsului, ratele de fals pozitiv și fals negativ ale diagnozei și rezultatele diferențiale. Comparația care decide proiectul este cea cu asistență față de cea ulterioară fără asistență. Un student care trece de la 60% la 95% cu tutorul și rămâne la 60% singur nu a fost tutorat.

## Cazul doi: un antrenor de scriere, unde etapa decide permisiunea

Scrierea nu are un singur răspuns corect, așa că verificarea este judecată, iar munca de design se mută spre etapizare. Baza de cunoștințe încadrează scrierea ca proces cognitiv, social și retoric, ceea ce înseamnă că un sistem de scriere cu IA poate sprijini învățarea și poate și elimina exact gândirea pe care tema exista ca să o dezvolte ([[writing-education|educația pentru scriere]], [[coach-not-crutch-ai-writing|antrenor, nu cârjă]]).

**Un model de capabilități.** Urmărește argumentarea (specificitatea tezei, alinierea afirmație-evidență, contraargumentul), organizarea (focusul paragrafului, progresia logică, tranzițiile), dovezile (relevanța sursei, integrarea, interpretarea), revizuirea (revizuire globală și la nivel de propoziție, evaluarea feedbackului) și stilul (claritate, gramatică, voce). Fiecare devine un semnal separat în modelul învățăcelului, ceea ce este exact ce face feedbackul țintit posibil.

**Ancorează antrenorul în temă.** Regăsește instrucțiunile, rubrica instructorului, lecturile de curs, cerințele de citare, convențiile de gen, exemplele instructorului și politica de folosire a IA, astfel încât feedbackul să poată spune „rubrica instructorului tău îți cere să legi fiecare afirmație majoră de dovezi din cel puțin două lecturi de curs” în loc să inventeze așteptări generice. Sfatul generic este eșecul implicit al unui instrument de scriere neancorat, iar studenții își dau seama în două sesiuni.

**Setează permisiuni pe etapă.** Implicarea IA în etape diferite afectează diferit proprietatea percepută. Sprijinul la planificare reduce proprietatea mai puțin decât sprijinul la redactare, iar redactarea generată de IA produce cea mai mare scădere ([[ai-writing-support-stage-ownership-2026|De la planificare la revizuire]]). Acea constatare se convertește direct într-un tabel de permisiuni. La planificare, antrenorul pune întrebări, compară poziții, contestă presupuneri și critică schițe, și nu generează argumentul. La redactare, învățăcelul produce mai întâi proză, iar antrenorul dezvoltă în loc să preia. La revizuire, antrenorul diagnostichează și se oprește acolo: afirmații neclare, dovezi lipsă, dovezi care nu susțin afirmația, probleme de organizare, schița față de rubrică. La editare, după revizuire, se ocupă de gramatică, punctuație, concizie și formatarea citărilor.

**O interacțiune rezolvată.** Pentru un eseu despre obligativitatea [[online-teaching-and-learning|cursurilor online]], un sistem generic rescrie paragraful studentului în proză lustruită și face munca intelectuală. Un antrenor spune ce funcționează, numește problema principală (paragraful dă motive, dar nu explică niciodată de ce ele justifică un mandat la nivel de universitate), pune o întrebare de revizuire și îi cere studentului să termine o propoziție în propriile cuvinte. Argumentul rămâne unde îi este locul.

**Feedback prioritizat.** O calitate de păstrat, o problemă cu impact mare, o întrebare care cere judecata autorului, un obiectiv concret de revizuire. Nu patruzeci de comentarii. Un student care primește patruzeci de comentarii le triază după lungime, iar triajul nu are nicio legătură cu ce contează.

**Fă studentul să judece feedbackul.** [[feedback-literacy|Alfabetizarea privind feedbackul]] este un obiectiv de învățare în sine. Întreabă periodic dacă învățăcelul este de acord cu o sugestie și de ce, și lasă-l să o respingă. Rezultatul este [[evaluative-judgment|judecată evaluativă]] în loc de conformare și este și singura apărare împotriva unui antrenor care greșește cu încredere.

**Păstrează vocea.** Distinge erorile, problemele de claritate, alegerile retorice și preferințele de stil, și lasă-le pe ultimele două în pace. Un antrenor care „corectează” alegerile retorice omogenizează scrierea spre stilul preferat de model și face cel mai mult rău scriitorilor [[multilingual-learning|multilingvi]] și tradițiilor retorice non-standard ([[ai-feedback-quality|calitatea feedbackului IA]] este versiunea generală a acestei probleme).

**Învață din revizuiri.** Stochează istoricul revizuirilor, nu doar eseurile finale. Un tipar repetat de „dovadă introdusă, dar neinterpretată” care se îmbunătățește pe trei eseuri este cel mai util semnal pe care îl poate avea un sistem de scriere și este gratuit.

**Evaluare.** Calitatea scrierii asistate de IA și a celei ulterioare fără asistență, abilitatea de a găsi slăbiciuni în scrierea nefamiliară, calitatea revizuirii, preluarea feedbackului, abilitatea de a explica revizuirile, proprietatea, dependența de proza IA, păstrarea vocii, părtinirea între dialecte și scriitori multilingvi, alinierea cu judecata instructorului și transferul întârziat. Designul care răspunde la asta are trei brațe: scriere independentă, IA care generează textul și un antrenor. Toate trei grupurile scriu apoi un eseu nou fără IA. Dacă grupul cu IA generată câștigă în practică și pierde fără ea, sistemul a îmbunătățit performanța, nu învățarea. Tiparele la nivel de clasă din panou (41% au nevoie de sprijin la legarea afirmație-evidență) sunt un semnal de [[formative-assessment|evaluare formativă]] pentru instructor.

## Compararea celor două construcții

| Întrebarea de design | Tutore de analiză matematică | Antrenor de scriere |
|---|---|---|
| Obiectul principal de învățare | Concepte matematice și rezolvare de probleme | Argumentare și proces de scriere |
| Verificare | Adesea verificabilă obiectiv | Cere de obicei judecată contextuală |
| Instrumente deterministe | Motor simbolic de matematică, calculator | Verificări de gramatică, citare, rubrică |
| Rolul principal al IA | Diagnostichează raționamentul și îl sprijină de tip schelă | Diagnostichează revizuirea și o sprijină de tip schelă |
| Riscul major | A da soluția | A scrie textul pentru învățăcel |
| Acțiunea învățăcelului care contează | Rezolvă și explică | Redactează, evaluează și revizuiește |
| Modelul învățăcelului | Concepte, proceduri, concepții greșite | Argumentare, dovezi, organizare, revizuire |
| Bariera-cheie | Tentativă înainte de soluție | Proză de student înainte de rescrierea IA |
| Test de transfer | Probleme noi de analiză matematică fără IA | Sarcină nouă de scriere fără IA |
| Criteriu de succes | Raționament matematic independent | Scriere independentă și judecată evaluativă |

Ambele sisteme folosesc același set de [[ai-technologies|tehnologii de IA]] și întruchipează politici pedagogice diferite, pentru că disciplinele cer tipuri diferite de gândire. Regula care se generalizează este să identifici activitatea cognitivă care produce învățarea și să proiectezi IA să sprijine acea activitate fără să o execute. Acea regulă depășește ca importanță orice model, prompt, cadru de agenți sau interfață anume.

## Ce greșesc echipele de dezvoltare

Pedagogia stă în promptul de sistem, deci un prompt atent este un design pedagogic. Un prompt este un strat al unei politici care include și ce dovezi colectezi, ce treaptă oferă interfața, ce verifică verificatorul și ce arată panoul. Un prompt bine scris peste un model al învățăcelului care nu stochează nimic va produce un tutore fluent fără memorie a studentului, iar scara va reporni la fiecare sesiune.

Un model mai bun va repara diagnoza. Rezultatul de benchmarking de mai sus a constatat tutori LLM care recunoșteau raționamentul corect, respingând alternative valide și acceptându-le pe cele incorecte, ceea ce este un tipar de eroare pe care scara nu îl repară în mod evident. Diagnoza structurată există pentru că judecata modelului este partea pe care nu o poți audita.

Satisfacția și finalizarea dovedesc că designul funcționează. Dovedesc că studenții au primit ajutor. Pilotul cu 38 de studenți la programare a găsit învățarea percepută puternic asociată cu folosirea, în timp ce progresul autonom a obținut cele mai mici scoruri, iar studiul despre stăpânire a găsit o cerință de zile consecutive care ridica stăpânirea pe platformă fără câștig la testul întârziat. Construiește măsura de retragere în pilot sau vei învăța lecția greșită eficient.

Regăsirea face răspunsurile demne de încredere. Reduce [[hallucination-risk|riscul de halucinație]] și lasă intact restul suprafeței de eșec: un pasaj regăsit poate fi citit greșit, o tehnică validă poate fi greșită pentru curs, iar modelul poate fi în continuare încrezător și greșit despre un pas pe care l-a derivat singur. Regăsirea este un prag minim.

Trecerea suitei de siguranță înseamnă că este sigur pentru studenți. Testarea obișnuită de siguranță acoperă toxicitatea și jailbreak-urile. Eșecurile pedagogice care contează aici, scurgerea răspunsului, servilitatea și deriva, sunt invizibile pentru ea și se acumulează de-a lungul unei conversații în loc să apară într-o singură tură.

Angajamentul este scopul. Lungimea conversației și numărul de sesiuni sunt cele mai ieftine metrici de instrumentat, motiv pentru care sunt promovate la rang de scopuri. Argumentul [[scaffolding|sprijinului de tip schelă]] spune că sesiunea ideală devine mai scurtă pe măsură ce studentul se îmbunătățește, așa că o creștere a angajamentului este la fel de probabil un simptom.

## Ce se va întoarce împotriva ta

**„Livrăm în șase săptămâni și asta este un sfert de muncă.”** Cea mai mare parte a arhitecturii este ieftină. O poartă de tentativă, o scară configurată, regăsire peste notițele pe care le ai deja și o schemă de jurnal cu un câmp de retragere sunt zile de muncă. Elementele scumpe (modelul învățăcelului, verificatorul, panoul) pot porni în spatele unui indicator de funcționalitate pentru un singur curs, iar pilotul este mai informativ cu părțile ieftine făcute.

**„Studenților le place și finalizarea a crescut.”** Ambele fapte sunt consistente cu un sistem care răspunde bine la întrebări și nu predă nimic. Studiul cu 6.000 de studenți a găsit progres mai lent și mai puține întrebări încercate alături de acuratețe mai bună, așa că nici o scădere a finalizării nu este automat o veste proastă. Raportează performanța fără ajutor lângă numerele de angajament și lasă-le să se contrazică în public.

**„Nu putem face un trial randomizat.”** Poți face o comparație în interiorul aceluiași student fără el: același obiectiv, cu asistență în timpul unității, testat fără asistență două săptămâni mai târziu, cu scorul asistat raportat alături. Acel design răspunde la întrebarea de produs și nu are nevoie de un braț de control. Ce nu îți poate spune este contra-factualul pentru studenții care nu au folosit niciodată tutorul.

**„Modelul este un API de la furnizor, deci comportamentul de ajutor este în afara mâinilor noastre.”** Treptele stau în stratul tău de orchestrare, iar rezultatul experimentului cu bariere a venit din schimbarea a ce avea voie tutorul să spună, nu din schimbarea modelului. Așteaptă-te ca post-antrenarea furnizorului să tragă spre răspunsuri prompte, pentru că utilitatea este ce a fost reglată, și pune reținerea în propriul tău cod.

**„Profesorii nu vor folosi încă un panou.”** Nu vor folosi unul care emite diagnostice în continuu, despre care revizuirea K-12 a constatat că trage atenția departe de propria observație. Dă-le un număr mic de semnale interpretabile, o modalitate de a accepta sau respinge fiecare recomandare și timp în săptămână ca să se uite la ele.

**„Nu avem experți pe discipline în echipă.”** Atunci tutorul va preda metodă generică, iar notația cursului va deriva într-un semestru. Un expert de materie pentru două zile în timpul designului, care scrie lista de concepții greșite și lista de metode aprobate, este cel mai ieftin element din proiect și primul pe care echipele îl taie.

## Ce să faci săptămâna aceasta

**1.** Scrie propoziția despre performanța fără ajutor pentru pilot și pune-o în specificație, deasupra listei de funcționalități.

**2.** Adaugă o poartă de tentativă și înregistreaz-o. Notează dacă studentul a încercat înainte de primul indiciu și la ce treaptă a ajuns.

**3.** Înlocuiește butonul de indiciu cu întrebarea despre punctul de blocaj și înregistrează răspunsul ca categorie.

**4.** Programează o verificare fără asistență la două săptămâni după unitate și pune-o în calendar cu un proprietar.

**5.** Rezervă două zile cu un profesor de materie ca să scrie lista de concepții greșite și lista de metode aprobate.

## Încotro mai departe

[[designing-educational-ai-software|Proiectarea de software educațional cu IA]] acoperă regulile la nivel de software pe care un tutore trebuie să le respecte, iar [[designing-ai-into-learning|Integrarea IA în învățare]] acoperă unde stă tutorul într-o secvență de curs. [[evaluating-ai-interventions-methods|Evaluarea intervențiilor de IA]] și [[checking-whether-educational-ai-works|Verificarea dacă IA educațională funcționează]] tratează dacă lucrul funcționează. Dacă problema ta este că modelul răspunde prea repede, [[making-ai-better-at-supporting-learning|Cum facem IA mai bună la sprijinirea învățării]] și [[training-ai-tutors-to-guide-rather-than-answer|Antrenarea tutorilor de IA să îndrume, nu să răspundă]] lucrează partea de training a aceleiași întrebări.
