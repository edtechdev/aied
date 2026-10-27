---
title: "Inteligența artificială în educație"
created: "2026-10-15T14:22:00-04:00"
updated: "2026-10-27T04:16:20-04:00"
type: concept
foundations: [ai-education, ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
ethics: [equity-in-ai-education]
audience: [instructors, learners, faculty developers, administrators]
level: [higher ed, k 12]
connected_faqs: [top-10-findings-ai-education-instructors]
confidence: high
institutions: [educational-policy-ai]
reviewed_by: [editor]
translation_of: "concepts/ai-education"
source_updated: "2026-10-26T02:30:00-04:00"
translation_note: "*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-15"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

> **Inteligența artificială în educație (AIED)** — domeniul vast, interdisciplinar care aplică inteligența artificială în predare și învățare și îi studiază proiectarea, utilizarea, evaluarea și consecințele. În calitate de concept-umbrelă al bazei de cunoștințe, Inteligența artificială în educație cuprinde **IA pentru educație** (folosirea IA pentru a îmbunătăți instruirea și evaluarea) și **educația despre IA** (dezvoltarea alfabetizării în IA și a unei înțelegeri critice). Se situează la intersecția tehnologiei instrucționale, a [[learning-sciences|științelor învățării]] — domeniul de cercetare empirică care se întreabă dacă un învățăcel s-a schimbat, și nu doar dacă un instrument a performat — a informaticii, a [[educational-policy-ai|politicii educaționale]], a [[ethics|eticii]] și a [[equity-in-ai-education|echității]]. Această pagină este o introducere în domeniu și o hartă a tuturor conceptelor pe care le acoperă baza de cunoștințe.

## Întrebări de luat în considerare

- „Inteligența artificială în educație” se întinde în două direcții: IA pentru educație (folosirea IA pentru a îmbunătăți predarea) și educație despre IA (construirea alfabetizării și a unei înțelegeri critice). Care dintre ele îți este mai familiară și care ai tendința să o treci cu vederea?
- Istoria domeniului este încadrată ca o tensiune recurentă între control și autonomia învățăcelului. Pe măsură ce urmărești adoptarea instrumentelor de IA, unde observi aceeași tensiune manifestându-se astăzi?
- Inteligența artificială în educație se află la intersecția tehnologiei, științei învățării, politicilor, eticii și echității. Pe care dintre aceste lentile o aplici în mod natural atunci când evaluezi un instrument de IA — și pe care ești predispus să o uiți?
- Această bază de cunoștințe organizează domeniul în fire: pedagogie, teorii ale învățării, tehnologii, discipline, evaluare, feedback, părți interesate și guvernanță. Dacă ți-ai cartografia propriul mod de folosire a IA, în care fire te-ai regăsi?
- AIED include predarea elevilor de a folosi IA critic ca scop în sine. În contextul tău, IA este tratată mai mult ca o materie de predat sau ca un instrument de folosit — și reflectă acest echilibru ceea ce au cu adevărat nevoie învățăceii?
- Elevii pot dobândi alfabetizare în IA folosind IA critic, nu doar învățând despre IA. Cum ar putea utilizarea practică, critică să construiască o înțelegere pe care instruirea pasivă nu o poate oferi?

## Introducere

Inteligența artificială în educație este umbrela pe care toate celelalte pagini de concept o definesc colectiv. Baza de cunoștințe organizează domeniul în firele majore prezentate mai jos, fiecare legându-se de paginile de concept relevante.

O [[history-of-aied|perspectivă istorică]] de referință, cea a lui **[[mishra-control-vs-agency-history-2025|Mishra și colab.]]**, urmărește evoluția AIED de la cibernetică și conferința de la Dartmouth din 1956, prin [[intelligent-tutoring|tutorii cognitiv]] și [[constructivist|construcționismul]] lui Papert, susținând că dezbaterile actuale despre [[generative-ai|IA generativă]] reînscenează tensiunea fondatoare a domeniului dintre control și [[agency|autonomie]].

## Cum este organizată baza de cunoștințe: paginile-umbrelă

Acoperirea conceptuală a bazei de cunoștințe este ancorată de mai multe **pagini-umbrelă** care grupează conceptele înrudite în fire navigabile. Acestea sunt puncte bune de intrare pentru explorarea domeniului:

- **Inteligența artificială în educație** — această pagină, prezentarea de ansamblu a domeniului și harta întregii acoperiri.
- **[[ai-literacy|Alfabetizarea în IA]]** — umbrela pentru înțelegerea, folosirea și evaluarea critică a IA, întinzându-se peste [[prompt-engineering|ingineria prompturilor]], [[critical-thinking|gândirea critică]], [[ethics|etica în IA]] și [[reducing-ai-misuse|folosirea responsabilă]]. Alături de ea, [[human-ai-collaboration|colaborarea om–IA]] și [[agentic-ai|IA agentică]] încadrează modul în care oamenii și IA lucrează împreună.
- **[[pedagogy|Pedagogii și strategii de predare]]** — umbrela pentru modul în care are loc predarea: metodele și strategiile didactice în interiorul cărora funcționează IA ([[active-learning|activ]], [[collaborative-learning|colaborativ]], [[project-based-learning|bazat pe proiect]], [[problem-based-learning|bazat pe probleme]], [[experiential-learning|experiențial]], [[game-based-learning|bazat pe joc]], [[socratic-method|socratic]], [[scaffolding|împodobire]] și altele), inclusiv contextul distinct al [[online-teaching-and-learning|predării și învățării online]].
- **[[learning-theories|Teoriile învățării]]** — umbrela pentru modul în care are loc învățarea: cadrele teoretice ([[behaviorism|behaviorism]], [[cognitive-psychology|cognitivism]], [[constructivist|construcționism]], [[sociocultural-learning|sociocultural]], cognitiv, [[motivation|motivațional]]) care modelează proiectarea și evaluarea IA.
- **[[ai-technologies|Tehnologii]]** — umbrela pentru stratul tehnic: sistemele de IA ([[llm|LLM-uri]], [[generative-ai|IA generativă]], [[multimodal|multimodal]], [[educational-robotics|robotică]]) și tehnicile ([[rag]], [[prompt-engineering|ingineria prompturilor]], [[reinforcement-learning|învățarea prin întărire]], [[llm-training-and-fine-tuning|antrenarea modelului]], [[agentic-ai|orchestrarea agentică]]) care alimentează AIED. Familia de modelare a învățăcelului — [[knowledge-tracing|trasarea cunoștințelor]], [[cognitive-diagnosis|diagnoza cognitivă]], [[simulating-students|simularea elevilor]], și sistemele care le consumă ([[intelligent-tutoring|tutoriat inteligent]], [[adaptive-learning|învățare adaptivă]], [[personalized-learning|învățare personalizată]]) — este grupată sub umbrela [[student-modeling|Modelarea învățăcelului și instruirea adaptivă]] din acest fir tehnic.
- **[[discipline-specific-aied|IA în discipline]]** — umbrela pentru modul în care IA este aplicată în diferite arii de materie ([[math-education|matematică]], [[physics-education|fizică]], [[language-learning|învățarea limbilor]], [[cs-education|informatică]], [[writing-education|scris]], [[stem-education|STEM]], [[engineering-education|inginerie]], [[business-education|afaceri]], [[teacher-education|formarea profesorilor]], [[medical-education|profesii din sănătate]] și altele) — și, dincolo de materiile academice, firul profesional și aplicat care apreciază practica demonstrată mai degrabă decât corectitudinea ([[nursing-education|asistență medicală]], [[information-technology|tehnologia informației]], [[vocational-education|educație și formare profesională]], [[design-education|educație în design]]) — și nivelurile educaționale ([[k-12|K-12]], [[higher-ed|învățământ superior]], [[adult-learning|învățare de adulți]]).
- **[[assessment|Evaluarea]]** (cu firele [[formative-assessment|formativă]], [[summative-assessment|sumativă]], [[authentic-assessment|autentică]], [[oral-assessment|orală]] și [[automated-assessment|automată]]) — umbrela pentru modul în care IA evaluează în același timp învățăceii și remodela validitatea și integritatea evaluării.
- **[[feedback|Feedback]]** — umbrela pentru modul în care feedbackul este generat, oferit și folosit: bucla de feedback, [[ai-feedback-quality|calitatea feedbackului]], [[feedback-literacy|alfabetizarea în feedback]], și contextele sale de evaluare ([[formative-assessment|formativă]], [[peer-assessment|de la colegi]], [[automated-assessment|automată]]).
- **[[stakeholders|Părțile interesate în educația cu IA]]** — umbrela pentru cine sunt actorii: învățăcei, [[teacher-role|profesori]], [[learning-design|designeri de învățare]], [[administrator|administratori]] și [[educational-policy-ai|decidenți politici]].
- **[[ai-ed-evaluation|Evaluarea educației cu IA]]** și **[[research-methods-aied|metodele de cercetare]]** — umbrelele pentru modul în care știm dacă IA funcționează: studii de eficacitate, [[benchmark|standarde de referință]], [[rct|încercări controlate randomizate]], [[meta-analysis-systematic-review|meta-analiză]] și [[learning-gains|câștigurile de învățare]] ca măsură de rezultat de bază. Cititorii ar trebui să cântărească, de asemenea, [[limitations-in-aied-research|limitările transversale ale acestor dovezi]].
- **[[governance|Guvernanța IA]]**, **[[educational-policy-ai|politica educațională privind IA]]** și **[[equity-in-ai-education|echitatea]]** — umbrelele pentru stratul instituțional, de reglementare și de corectitudine (a se vedea și [[regulation|reglementarea]] și [[privacy|confidențialitatea]]).

Aceste pagini-umbrelă sunt legate de-a lungul secțiunilor de mai jos; fiecare fir de mai jos numește atât umbrela sa, cât și conceptele care o constituie.

## Cele două dimensiuni ale IA în educație

Cercetarea în domeniul inteligenței artificiale în educație se întinde în două direcții interconectate:

- **IA pentru educație** — folosirea sistemelor de IA pentru a îmbunătăți predarea, învățarea, evaluarea și administrarea. Aceasta include [[intelligent-tutoring|tutoriatul cu IA]], [[adaptive-learning|învățarea adaptivă]], [[personalized-learning|învățarea personalizată]], [[automated-essay-scoring|notarea automată a eseelor]], [[automated-question-generation|generarea automată de întrebări]], [[automated-assessment|evaluarea automată]], [[formative-assessment|evaluarea formativă]], [[learning-analytics|analitica învățării]] și [[feedback|buclele de feedback]].
- **Educația despre IA** — predarea pentru învățăcei și educatori a modului de a înțelege, folosi și evalua critic IA. Nucleul este [[ai-literacy|alfabetizarea în IA]], sprijinită de [[prompt-engineering|ingineria prompturilor]], [[critical-thinking|gândirea critică]], [[ethics|etica în IA]], [[governance|educația în guvernanță]], alfabetizarea digitală și [[reducing-ai-misuse|folosirea responsabilă]].

Aceste două dimensiuni nu sunt separate: [[ai-literacy|a folosi bine IA]] cere a o înțelege, iar predarea despre IA este îmbogățită de folosirea ei. Această [[human-ai-collaboration|colaborare om–IA]] este o temă centrală.

## Fundamentele IA în educație

Conceptele fondatoare și transversale ale domeniului ancorează acoperirea bazei de cunoștințe și apar primele în bara laterală. Ele se deschid cu un grup **Esențiale** — conceptele de la care ar trebui să înceapă orice cititor: umbrela însăși, [[misconceptions|ideile greșite despre IA]], [[ai-literacy|alfabetizarea în IA]], [[agentic-ai|IA agentică]], [[cognitive-offloading|descărcarea cognitivă]], [[framing-ai-use-for-students|modul în care folosirea IA este enunțată pentru elevi]], [[reducing-ai-misuse|reducerea folosirii necorespunzătoare a IA]], [[academic-integrity|integritatea academică]], [[teacher-role|predarea]], [[learning-design|designul de învățare]] și [[educational-development|dezvoltarea educațională]]. Firul **domeniului** acoperă apoi [[history-of-aied|istoria domeniului]], [[limitations-in-aied-research|limitările transversale ale bazei de dovezi]], [[philosophy-of-ai-in-education|filosofia sa]], harta [[theories-and-frameworks|teoriilor și a cadrelor]] și [[theory-development-aied|dezvoltarea teoretică]]. Temele transversale — [[human-ai-collaboration|colaborarea om–IA]], [[agency|autonomia învățăcelului]], [[learner-identity|identitatea învățăcelului]], [[design-thinking|gândirea de design]], [[curriculum-design|designul curricular]], [[critical-thinking|gândirea critică]] și [[computational-thinking|gândirea computațională]] — traversează fiecare fir, pentru că modelele mentale inexacte pe care oamenii le au despre IA stau la originea [[ai-misuse-learning-harm|folosirii necorespunzătoare]] și a unei [[trust-calibration|încrederi]] slab calibrate.

## Învățare și instruire

Modul în care IA sprijină predarea și învățarea este inima domeniului. Conceptele cheie includ:

- **Pedagogii de bază:** [[pedagogy|pedagogii și strategii de predare]] — umbrela pentru acoperirea metodelor didactice din baza de cunoștințe — alături de [[pedagogical-patterns|tipare pedagogice]] (secvențele testate în care se resolvă acele metode), [[active-learning|învățarea activă]], [[collaborative-learning|învățarea colaborativă]], [[group-work|lucrul în grup]], [[project-based-learning|învățarea bazată pe proiect]], [[problem-based-learning|învățarea bazată pe probleme]], [[productive-failure|eșecul productiv]], [[inquiry-based-learning|învățarea prin investigare]], [[experiential-learning|învățarea experiențială]], [[game-based-learning|învățarea bazată pe joc]], [[learning-by-teaching|învățarea prin predare]], [[scaffolding|împodobirea]], [[socratic-method|metoda socratică]], [[critical-pedagogy|pedagogia critică]], [[pedagogical-partnerships|parteneriatele pedagogice]], [[storytelling-in-education|povestirea]], [[learning-design|designul de învățare]], [[online-teaching-and-learning|predarea și învățarea online]] și [[video-education|video în educație]].
- **Teorii și procese ale învățării:** umbrela [[learning-theories|teoriilor învățării]] ([[behaviorism|behaviorism]], [[cognitive-psychology|cognitivism]], [[constructivist|construcționism]], [[sociocultural-learning|sociocultural]], [[distributed-cognition|cogniție distribuită]], [[situated-learning|învățare situată]], [[embodied-learning|învățare încorporată]], [[community-of-inquiry|comunitate de anchetă]]) stă alături de procesele orientate către învățăcel, precum [[self-regulated-learning|învățarea autoreglată]], [[self-determination-theory|teoria autodeterminării]], [[motivation|motivația]], [[self-efficacy|autoeficacitatea]], [[self-directed-learning|învățarea autodirijată]], [[metacognition|metacogniția]], [[desirable-difficulties|dificultățile dorite]], [[transfer-of-learning|transferul de învățare]], [[prior-knowledge|cunoștințele anterioare]], [[icap-framework|implicarea cognitivă ICAP]], [[refutation-text|textul de refutare]], [[retrieval-spacing-interleaving|recuperarea, spațierea și intercalarea]] și [[activity-theory-aied|teoria activității]].
- **Implicarea și experiența învățăcelului:** [[student-engagement|implicarea elevului]], [[help-seeking|căutarea de ajutor]], [[social-emotional-learning|învățarea socio-emoțională]], [[well-being|bunăstarea]], [[creativity|creativitatea]], [[problem-solving|rezolvarea de probleme]], [[mastery-learning|învățarea prin stăpânire]] și [[student-ai-interaction|interacțiunea elev–IA]] modelează modul în care învățăceii întâlnesc efectiv IA și sunt afectați de ea, în timp ce [[social-norms-ai-use|normele sociale care se instalează în jurul folosirii IA]] decid cât de deschis poate fi discutat oricare dintre acestea. Dincolo de curs, [[student-support-and-success|sprijinul și reușita elevului]] acoperă munca instituțională — consilierea, informarea, îndrumarea și alocarea sprijinului rar — unde IA mută în mod fiabil realizarea sarcinilor, dar nu și persistența sau absolvirea.

## Tehnologii și tehnici

Pagina [[ai-technologies|Tehnologii]] este umbrela pentru stratul tehnic:

- **Modele și tehnici:** [[generative-ai|IA generativă]], [[llm|modele mari de limbaj]], [[rag|generare augmentată prin recuperare]], [[multimodal|modele multimodale]], [[educational-nlp|NLP educațional]], [[reinforcement-learning|învățare prin întărire]], [[knowledge-graph|grafuri de cunoștințe]], [[educational-robotics|roboți în educație]], [[conversational-ai|IA conversațională]], [[simulation|simulare]] și [[llm-training-and-fine-tuning|antrenarea și ajustarea fină a LLM-urilor]]. Și metodele subiacente contează: [[machine-learning|învățarea automată]] este locul unde sunt construite aceste sisteme, [[speech-and-voice-technologies|tehnologiile de vorbire și voce]] duc tutoriatul vorbit și practica lingvistică, [[visualization|vizualizarea]] acoperă tablourile de bord și analitica vizuală pentru învățăcei și instructori, iar [[virtual-and-augmented-reality|realitatea virtuală și augmentată]] găzduiește practica imersivă al cărei strat vizual îl poate genera acum modelul. Stilurile mai noi de interacțiune aparțin, de asemenea, aici — cel mai proeminent [[vibe-coding|vibe coding]], fluxul de lucru condus de limbaj natural în care utilizatorul specifică un program prin promptarea unui LLM și judecă comportamentul rezultat mai degrabă decât să citească sau să editeze codul sursă. Aceasta reîncadrează [[cs-education|programarea]] ca un act de exprimare și verificare și coboară bariera pentru [[teacher-role|utilizatorii finali]] care își construiesc propriile instrumente. Cadrele de profunzime a integrării, precum [[samr-model|SAMR]], și teoriile adopției, precum [[technology-acceptance-model|TAM]], clasifică cât de profund este adoptată IA și cât de mult transformă sarcina.
- **Modelarea învățăcelului și sistemele adaptive:** sistemele tehnice care reprezintă învățăcelul și se adaptează la el sunt grupată sub umbrela [[student-modeling|Modelarea învățăcelului și instruirea adaptivă]] — [[knowledge-tracing|trasarea cunoștințelor]], [[cognitive-diagnosis|diagnoza cognitivă]], [[simulating-students|simularea elevilor]], [[intelligent-tutoring|tutoriatul inteligent]], [[adaptive-learning|învățarea adaptivă]], [[personalized-learning|învățarea personalizată]], [[recommender-systems-and-learning-paths|sistemele de recomandare și traseele de învățare]], [[pedagogical-agent|agenții pedagogici]], [[affective-tutoring|tutoriatul afectiv]], [[affective-computing|calculul afectiv]], [[human-in-the-loop-ai|IA cu om în buclă]] și [[learning-analytics|analitica învățării]]. Acestea se află la stratul tehnic pentru că sunt ele însele sistemele de IA, distincte de pedagogiile pe care le pun în aplicare.

## IA în discipline

IA este aplicată în discipline și niveluri educaționale diverse. [[discipline-specific-aied|Prezentarea de ansamblu a AIED în discipline]] din baza de cunoștințe cartografiază acoperirea pe arii de materie — alături de [[learning-sciences|științele învățării]], care nu sunt o materie predată, ci domeniul de cercetare transversal care studiază însăși învățarea și tratează materia ca una dintre variabile, printre altele:

- **Arii de materie:** [[math-education|matematică]], [[physics-education|fizică]], [[chemistry-education|chimie]], [[biology-education|biologie]], [[cs-education|informatică]], [[engineering-education|inginerie]], [[stem-education|STEM]], [[writing-education|scris]], [[language-learning|învățarea limbilor]], [[english-education|educație în limba engleză (EAP/EFL/ESL)]], [[science-education|educație științifică]], [[business-education|afaceri, economie și management]], [[humanities-education|umanistică și științe sociale]], [[arts-design-and-media-education|arte, design și educație media]], [[medical-education|medicină și profesii din sănătate]], [[legal-education|educație juridică]] și firele profesionale și aplicate — [[nursing-education|asistență medicală]], [[information-technology|tehnologia informației]], [[vocational-education|educație și formare profesională]] și [[design-education|educație în design]].

## Niveluri și contexte

Același instrument de IA întâlnește contexte foarte diferite, iar baza de cunoștințe separă nivelul educațional de pedagogie, astfel încât concluziile să nu se transfere silențios între ele: [[k-12|școlile K-12]], [[early-childhood-elementary-ai-education|educația timpurie și primară]], [[higher-ed|învățământul superior]], [[adult-learning|învățarea adulților]], [[vocational-education|educația și formarea profesională]], [[special-education|educația specială]] și [[teacher-education|formarea profesorilor]]. Conceptele adiacente domeniului, care traversează nivelurile, includ [[universal-design-for-learning|designul universal pentru învățare]], [[neurodiversity|neurodiversitatea]], [[multilingual-learning|învățarea multilingvă]] și [[social-emotional-learning|învățarea socio-emoțională]].

## Evaluare și măsurare

IA transformă atât modul în care evaluăm învățăceii, cât și modul în care evaluăm însăși sistemele de IA:

- **Evaluare și feedback:** [[assessment|evaluarea]], [[formative-assessment|evaluarea formativă]], [[summative-assessment|evaluarea sumativă]], [[authentic-assessment|evaluarea autentică]], [[eportfolio|e-portofoliu]], [[feedback|feedbackul]] și [[feedback-literacy|alfabetizarea în feedback]], [[ai-feedback-quality|calitatea feedbackului oferit de IA]], [[peer-assessment|evaluarea de către colegi]], [[oral-assessment|evaluarea orală]], [[automated-assessment|evaluarea automată]], [[automated-essay-scoring|notarea automată a eseelor]] și [[automated-question-generation|generarea automată de întrebări]]. Pentru că un model poate acum produce la cerere o lucrare finită plauzibilă, baza de cunoștințe aduce în prim-plan capacitatea care rămâne a învățăcelului însuși: [[evaluative-judgment|judecata evaluativă]], capacitatea de a aprecia calitatea propriei lucrări, a lucrării colegilor și a rezultatului IA în raport cu criterii raționate. Este constructul asupra căruia converg mai multe studii de feedback și de evaluare autentică — condiția hibridă de feedback depășind feedbackul direct oferit de IA într-un experiment multisite, decalajul de sustenabilitate din feedbackul formativ al IA și pasul practic de a evalua deciziile pe care le iau elevii, nu doar artefactul — și este un motiv central pentru care reconceperea din era IA trece de la [[ai-detection|detecție]] către sarcini a căror integritate supraviețuiește inspecției. [[group-work|Lucrul în grup]] este, de asemenea, evaluat atât la proces, cât și la produs, unde echipele trebuie să negocieze a cui și ce fel de implicare a IA este acceptabilă.
- **Măsurare și validitate:** [[assessment-validity|validitatea evaluării]], [[psychometrically-aware-ai|IA conștientă de psihometrie]], [[educational-measurement|măsurarea educațională]], [[item-response-theory|teoria răspunsului la item]], [[self-report-measures|măsurători auto-raportate]] (instrumentul din spatele unei părți mari din aceste dovezi, și o limitare recurentă), [[ai-detection|detecția IA]], [[remote-proctoring|supravegherea la distanță]] și [[academic-integrity|integritatea academică]].

## Metode de cercetare și evaluare

Modul în care știm dacă IA funcționează este un fir de sine stătător, iar baza de cunoștințe îl tratează ca atare:

- **Metode de cercetare:** [[research-methods-aied|metodele de cercetare în AIED]] ca umbrelă, cu abordări [[qualitative-research|calitative]], [[quantitative-research|cantitative]], [[mixed-methods-research|cu metode mixte]], [[design-based-research|bazate pe design]] și [[usability-research|de uzabilitate]], plus [[rct|încercări controlate randomizate]], [[meta-analysis-systematic-review|meta-analiză și revizuire sistematică]] și [[network-analysis|analiza de rețea]].

Munca de cercetare a domeniului însuși este acum un subiect de sine stătător. [[ai-assisted-educational-research|Cercetarea educațională asistată de IA]] acoperă IA folosită ca instrument pentru căutarea bibliografică, trierea, codarea calitativă, analiză și scris, inclusiv cercetarea practicianilor, precum bursa predării și învățării. Rămâne distinctă de designurile folosite pentru a studia ce face IA asupra învățăceilor.

- **Evaluarea sistemelor de IA:** [[ai-ed-evaluation|evaluarea educației cu IA]] și [[benchmark|standarde de referință]] pentru judecarea capacității unui sistem, cu [[learning-gains|câștigurile de învățare]] ca rezultat care contează, și [[limitations-in-aied-research|limitările transversale]] ale acestor dovezi și [[interpreting-and-applying-aied-research|cum se citește un singur studiu]] ca contragreutate de prudență.

## Oameni

Inteligența artificială în educație schimbă rolul fiecărei părți interesate. Pagina [[stakeholders|Părțile interesate în educația cu IA]] din baza de cunoștințe este umbrela care le acoperă pe toate:

- **Învățăcei:** [[student-experience|experiența elevului]], [[career-development-and-readiness|dezvoltarea carierei și pregătirea]] și [[anxiety-and-stress|anxietatea și stresul legate de IA]] modelează modul în care elevii întâlnesc IA.
- **Familii și comunități:** [[parents-and-families|părinții și familiile]] sunt publicul pe care școlile îl abordează cel mai des despre IA și cel cu cele mai puține cercetări în spatele îndrumării, astfel încât preocupările lor aparțin imaginii părților interesate, nu în afara ei.
- **Instructori și cadre didactice:** [[teacher-ai-competency|competenta instructorilor în IA]], [[tpack|cunoașterea tehnologico-pedagogică a conținutului (TPACK)]], [[samr-model|SAMR]] și [[educational-development|dezvoltarea educațională]] abordează pregătirea și sprijinirea educatorilor.
- **Constructorii:** [[educational-technology-developers|dezvoltatorii de tehnologie educațională]] — designerii de produs, dezvoltatorii de software, inginerii de învățare și designerii de analitice care transformă o capacitate a modelului în ceva pe care o instituție îl poate achiziționa. Ei sunt un public distinct de practicienii și administratorii de mai sus și stau în afara instituțiilor care își adoptă instrumentele, motiv pentru care implicirile implicite, co-proiectarea și întreținerea post-finanțare apar în această bază de cunoștințe ca întrebări pedagogice, nu comerciale.

## Instituții și politici

Stratul instituțional este locul unde deciziile privind IA sunt luate efectiv și apărate: [[administrator|administratorii]] și liderii instituționali, [[educational-policy-ai|politica educațională privind IA]], [[governance|guvernanța IA]], [[change-management|managementul schimbării]] ca munca de a face ca o adoptare să se mențină, [[regulation|reglementarea IA]] și întrebările de achiziție și platformă care decurg din [[technology-acceptance-model|adoptarea tehnologiei]], [[open-source|open source]] și [[edtech-platform|platformele edtech]], alături de [[lifelong-learning|învățarea profesională și de-a lungul vieții]] și [[professional-training|formarea profesională]].

## Echitate, etică și folosire responsabilă

Corectitudinea, accesul și responsabilitatea sunt centrale pentru IA în educație:

- **Echitate și acces:** [[equity-in-ai-education|echitatea]], [[differential-effects-across-learner-groups|efectele diferențiate între grupurile de învățăcei]] (întrebarea cui i se aplică o concluzie), [[digital-divide|decalajul digital]], [[bias-mitigation|atenuarea părtinirii]], [[culturally-relevant-pedagogy|pedagogia cultural relevantă]], [[multilingual-learning|învățarea multilingvă]], [[inclusive-learning|învățarea incluzivă]], [[accessibility|accesibilitatea]], [[assistive-technology|tehnologia asistivă]], [[neurodiversity|neurodiversitatea]], [[universal-design-for-learning|designul universal pentru învățare]] și studiile despre [[global-south|Sudul global]].
- **Etică și responsabilitate:** [[ethics|etica în IA]], [[ai-misuse-learning-harm|folosirea necorespunzătoare a IA și prejudiciul asupra învățării]], [[legal-issues-and-risks|aspecte juridice și riscuri]], [[ai-use-disclosure|dezvăluirea folosirii IA]], [[guardrails|bariere de protecție]], [[privacy|confidențialitatea]], [[hallucination-risk|riscul de halucinație]], [[ai-sycophancy|sincofanția IA]], [[trust|încrederea]], [[trust-calibration|calibrarea încrederii]], [[reducing-ai-misuse|reducerea folosirii necorespunzătoare a IA]], [[framing-ai-use-for-students|modul în care folosirea IA este enunțată pentru elevi]], [[pedagogical-safety|siguranța pedagogică]], [[sustainability|sustenabilitatea]] și [[cognitive-offloading|descărcarea cognitivă]].

O [[meta-analysis-systematic-review|revizuire sistematică]] a literaturii de etică a domeniului ([[agarwal-ethical-values-norms-aied-2026|Agarwal și colab. 2026]], 25 de articole) consolidează etica AIED în șase valori etice principale — nediscriminare, administrarea datelor, supraveghere umană, bunăvoință, explicabilitate și adecvare educațională — și proiectează normele etice pe o matrice stakeholder-valoare. Ea constată că utilizatorii finali sunt în mare parte pasivi în literatura de etică (voci elevilor fiind practic absente) și cere integrarea eticii în proiectarea AIED și un accent mai mare pe dimensiunea educațională (pedagogică) a eticii AIED.

## Teme emergente și transversale

Mai multe teme traversează domeniul:

- **Încredere și folosire critică:** [[trust|încrederea]], [[trust-calibration|calibrarea încrederii]], [[ai-sycophancy|sincofanția IA]], [[critical-thinking|gândirea critică]], [[cognitive-offloading|descărcarea cognitivă]], [[critical-pedagogy|pedagogia critică]] și [[reducing-ai-misuse|reducerea folosirii necorespunzătoare a IA]] (a se vedea și [[framing-ai-use-for-students|modul în care folosirea IA este enunțată pentru elevi]]). Modul în care învățăceii și profesorii decid să adopte IA și să se bazeze pe ea este modelat de cercetarea privind [[technology-acceptance-model|acceptarea tehnologiei]], în timp ce studiile despre [[global-south|Sudul global]] aduc în prim-plan echitatea și contextul cultural în adopție. Empiric, modul în care IA se explică însăși modelează această încredere: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor și colab. (2025)]] au arătat că [[explainable-ai|IA explicabilă]] construiește încrederea profesorilor în recomandările IA prin inteligibilitate, explicațiile conduse de domeniu (în limbaj curricular) fiind mai mult încredere și acceptate decât rezultatul bazat pe importanța caracteristicilor din date.
- **Evoluția domeniului:** baza de cunoștințe urmărește IA în educație de la primele [[intelligent-tutoring|sisteme de tutoriat inteligent]] și [[knowledge-tracing|trasarea cunoștințelor]] până la [[intelligent-tutoring|tutoriatul]] condus de LLM-uri, [[pedagogical-agent|agenții]] și [[agentic-ai|IA agentică]] — o schimbare rapidă de la studii centrate pe instrument la cadre sociotehnice ([[design-thinking|gândire de design]], [[curriculum-design|design curricular]], [[institutional-change-framework-ai|schimbare instituțională]]) și de la sisteme scrise manual la fluxuri de lucru conduse de utilizator, în care un învățăcel sau un [[teacher-role|ne-programator]] specifică comportamentul în limbaj natural ([[vibe-coding|vibe coding]]). [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian și Doroudi]] formalizează această traiectorie prin cadrul lor AI×Ed, urmărind articole din patru decenii de acte de conferință pentru a arăta că domeniul a trecut de la un amestec divers — inclusiv cercetare substanțială care tratează IA ca pe o analogie a inteligenței și învățării umane — către un accent aproape exclusiv pe folosirile aplicate, bazate pe date, orientate spre cercetători, o întoarcere pe care ascensiunea [[llm|LLM-urilor]] pare acum să o inverseze parțial (trei din cele patru articole „IA-ca-analogie” de la AIED 2024 erau bazate pe LLM-uri).
- **Emoția, anxietatea și perspectivele de carieră:** IA induce și modelează răspunsuri emoționale — [[anxiety-and-stress|anxietatea și stresul legate de IA]] întinzându-se peste supravegherea în timpul examenelor, teama de integritate și înlocuirea profesională — în timp ce [[career-development-and-readiness|dezvoltarea carierei și pregătirea]] abordează modul în care educația pregătește învățăceii pentru o piață a muncii perturbată de IA (a se vedea și [[well-being|bunăstarea]]).

## Maturitatea domeniului

Baza de cunoștințe reflectă un domeniu în evoluție rapidă — de la primele sisteme de tutoriat inteligent la tutoriatul condus de LLM-uri și IA agentică; de la instrumentele de integritate academică axate pe detecție la reconceperea evaluării; de la studiile centrate pe instrument la cadre sociotehnice și axate pe echitate. Baza de dovezi pune din ce în ce mai mult accent pe [[research-methods-aied|metode de cercetare]] riguroase, [[ai-ed-evaluation|evaluare]], [[rct|designuri experimentale]] și rezultate pe termen lung.

## Conexiuni

Inteligența artificială în educație se leagă de fiecare concept din baza de cunoștințe — este domeniul pe care toate celelalte pagini de concept îl definesc colectiv. Folosește această pagină ca punct de plecare pentru a naviga întreaga bază de cunoștințe.

## Idei greșite frecvente

**„IA în educație este un singur domeniu cu o singură bază de dovezi."** Este o umbrelă peste fire distincte — discipline, niveluri, evaluare, metode de cercetare, instituții, echitate — care diferă prin metodele, măsurile de rezultat și maturitatea lor. Un rezultat dintr-un fir nu se transferă în altul, motiv pentru care baza de cunoștințe este organizată astfel, și nu ca o singură literatură.

**„Un instrument care îmbunătățește rezultatele cursului îmbunătățește reușita elevului."** Firul instituțional arată modelul opus: [[student-support-and-success|sprijinul și reușita elevului]] este domeniul în care IA **deplasează în mod fiabil finalizarea sarcinilor, dar nu persistența sau absolvirea**. O intervenție poate câștiga fiecare măsură din cadrul cursului și poate lăsa rezultatul finalizării neschimbat.

**„Performanța tehnologiei este dovadă despre învățare."** Domeniul se află la intersecția dintre tehnologia instrucțională și [[learning-sciences|științele învățării]], iar distincția dintre cele două este exact aceasta: dacă un elev s-a schimbat, nu doar dacă un instrument a performat. O demonstrație este o afirmație despre instrument.

**„Deoarece IA este de uz general, un rezultat de oriunde se aplică pretutindeni."** Generalitatea tehnologiei nu creează generalitatea dovezilor. Firele de disciplină, nivel și context există pentru că același instrument se comportă diferit de-a lungul lor, iar un rezultat neschimbat trecut peste o graniță este o extrapolare.

**„Maturitatea domeniului poate fi citită din volumul publicațiilor."** Volumul și maturitatea diverg; firul metodelor de cercetare documentează slăbiciuni recurente de design pe care volumul nu le repară, iar cadrele se înmulțesc mai repede decât sunt testate.

## Concepte conexe
- [[pedagogical-patterns]] — Secvențele testate care operationalizează pedagogiile domeniului
- [[ai-literacy]] — umbrelă: înțelegerea, folosirea și evaluarea IA
- [[human-ai-collaboration]] — umbrelă: cum lucrează împreună oamenii și IA
- [[pedagogy]] — umbrelă: metode și strategii de predare
- [[learning-theories]] — umbrelă: cum are loc învățarea
- [[ai-technologies]] — umbrelă: modele, tehnici și sisteme
- [[discipline-specific-aied]] — umbrelă: IA în arii de materie și niveluri
- [[assessment]] — umbrelă: cum IA evaluează învățăceii și remodela validitatea
- [[feedback]] — umbrelă: cum este generat, oferit și folosit feedbackul
- [[stakeholders]] — umbrelă: cine sunt actorii
- [[learners]] — umbrelă: conceptele din partea învățăcelului (experiență, identitate, autonomie, interacțiune, modele ale învățăcelului)
- [[ai-ed-evaluation]] — umbrelă: cum știm dacă IA funcționează
- [[research-methods-aied]] — umbrelă: metode de cercetare a eficacității
- [[ai-assisted-educational-research]] — Cercetarea educațională asistată de IA
- [[governance]] — umbrelă: stratul instituțional și de reglementare
- [[educational-policy-ai]] — umbrelă: politici, îndrumări și implementare
- [[equity-in-ai-education]] — umbrelă: corectitudine, acces și incluziune
- [[learning-sciences]] — domeniul empiric din spatele AIED
- [[ethics]] — dimensiunile etice ale IA în educație
- [[misconceptions]] — modelele mentale pe care oamenii le aduc la IA
- [[interpreting-and-applying-aied-research]] — citirea unui studiu și transferarea unei concluzii în practică
- [[limitations-in-aied-research]] — limitele transversale ale bazei de dovezi
- [[meta-analysis-systematic-review]] — ce stabilesc revizuirile și meta-analizele
- [[history-of-aied]] — cum a evoluat domeniul
- [[philosophy-of-ai-in-education]] — fundamentele filosofice
- [[theories-and-frameworks]] — harta nodurilor de teorie și de cadre
- [[theory-development-aied]] — construirea și revizuirea teoriei

## Articole conexe

Revizuiri la nivelul întregului domeniu al IA în educație — studiile care trece în revistă întregul domeniu sau un întreg nivel educațional, mai degrabă decât o singură temă:

- [[rismanchian-ai-education-four-decades-aixed-2026]] — Evoluția cercetării în IA și educație de-a lungul a patru decenii (cadrul AIxEd)
- [[mishra-control-vs-agency-history-2025]] — Control vs. autonomie: o istorie a IA în educație
- [[genai-higher-education-systematic-review-2026]] — IA generativă în învățământul superior: revizuire sistematică a 125 de studii
- [[stanford-evidence-base-ai-k12-2026]] — Baza de dovezi privind IA în K-12: o revizuire a 818 articole
- [[genai-educational-outcomes-meta-analysis]] — IA generativă și rezultate educaționale: o meta-analiză cuprinzătoare
