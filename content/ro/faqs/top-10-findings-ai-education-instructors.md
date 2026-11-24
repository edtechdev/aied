---
title: "Care sunt primele 10 constatări din cercetarea despre IA în educație pe care ar trebui să le știe cadrele didactice?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-11-14T18:10:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Aceste zece studii privesc direct deciziile pe care le iau cadrele didactice: ce teme să dea, cum să le evalueze, ce instrumente să cumpere, cum să le construiască și cum să știe dacă a avut loc învățarea. Fiecare intrare prezintă studiul, rezultatul lui și practica pe care o schimbă.

## Cele zece studii

**1. Accesul la un chatbot obișnuit a redus notele la examen cu 17% ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Aproape 1.000 de elevi de liceu din Turcia, în circa 50 de clase, au parcurs trei sesiuni de matematică pe același conținut. Un grup a avut o fereastră simplă de chat GPT-4 în timpul exersării. Altul a avut un tutore construit pe același model, cu [[guardrails|garduri de siguranță]] scrise de profesori: indicii în loc de răspunsuri, cu soluția corectă și greșelile frecvente incluse în prompt. Grupul de control nu a avut IA. Fiecare sesiune s-a încheiat cu un [[summative-assessment|examen cu cărțile închise]] pe probleme similare, cu instrumentul scos.

Grupul cu chat simplu a obținut 48% peste control în timpul exersării și 17% sub control la examen. Elevii care nu au atins niciodată IA i-au depășit. Grupul cu garduri de siguranță a câștigat 127% la exersare și a fost la egalitate la examen. Prejudiciul a dispărut, iar în locul lui nu a apărut niciun avantaj de învățare. Jurnalele de chat explică despărțirea: grupul fără restricții cerea răspunsuri și se oprea, în timp ce grupul cu restricții încerca problemele, cerea indicii și progresa încă din prima sesiune.

Pentru cadrele didactice, „IA permisă” nu este o politică. Interfața decide dacă instrumentul devine un canal de indicii sau o mașină de răspunsuri, iar un chatbot general înclină spre a doua variantă. O fereastră de chat lăsată deschisă în timpul exersării îi costă pe elevii care se sprijină cel mai tare pe ea.

Administratorii pot pune același rezultat împotriva argumentului de achiziție că un model mai puternic rezolvă pedagogia. Modelul a fost identic în ambele brațe.

Vezi și: [[training-ai-tutors-to-guide-rather-than-answer|Formarea unui tutore care ghidează, nu care răspunde]]

**2. Un tutore construit pe pedagogia cursului însuși a depășit clasa cu învățare activă, în mai puțin timp ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 este cursul introductiv de fizică al Harvardului pentru studenții la științele vieții. În toamna lui 2023, 194 studenți dintr-un studiu încrucișat au parcurs două lecții de două ori, o dată în [[active-learning|clasa cu învățare activă]] a cursului și o dată prin intermediul unui tutore construit pentru curs, cu pre-testări și post-testări în jurul fiecărei versiuni.

Studenții au învățat mai mult cu tutorele. Mediana post-testului a fost 4,5 față de 3,5, [[learning-gains|câștigurile de învățare]] mediane au fost de peste două ori mai mari decât cele ale clasei, iar estimările cuantilice ale efectului au variat de la 0,73 la 1,3 deviații standard. Au petrecut o mediană de 49 de minute cu tutorele față de aproximativ 60 de minute în clasă, iar 83% au evaluat explicațiile lui ca la fel de bune sau mai bune decât ale profesorilor lor. Evaluările implicării și ale motivației au crescut. Plăcerea și mentalitatea de creștere nu au diferit.

Rezultatul se sprijină pe proiectare. Tutorele executa aceleași mișcări ca și clasa: exemple rezolvate, indicii graduale, prompturi de autoexplicare, o secvențiere care urmează cercetarea despre felul în care se învață fizica. Comparația a fost cu învățarea activă, nu cu prelegerea, așa că obiecția obișnuită că orice bate o prelegere nu se aplică.

Specialiștii în dezvoltarea personalului didactic au aici cel mai puternic argument disponibil că proiectarea unui tutore este muncă de curriculum, nu de achiziție. Pentru echipele de produs, ștacheta este concretă: să egalezi o sală de clasă cu învățare activă, în mai puțin timp, folosind aceleași mișcări didactice.

Vezi și: [[developing-ai-tutor|Bune practici pentru dezvoltarea unui tutore de IA]]

**3. Tutoratul cu IA a egalat tutorii umani experți ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench a reunit 2.469 de sesiuni de tutorat cu 2.383 de adulți care se pregăteau pentru GRE, folosind 13 tutori de IA construiți pe 12 modele, tutori umani în direct și un control video. Rezultatul a fost câștigul de învățare la itemii de raționament cantitativ și verbal.

Tutoratul agregat cu IA a fost statistic echivalent cu tutoratul uman expert, în limita unui sfert de deviație standard, iar ambele au depășit controlul cu circa șase puncte procentuale: 6,86 la cantitativ și 5,47 la verbal, adică aproximativ una și jumătate până la două răspunsuri corecte în plus pe secțiune. Tutorii de IA au fost evaluați mai slab la planificarea lecțiilor și la crearea problemelor de exersare, lucruri la care tutorii umani s-au descurcat mai bine.

Pentru administratori, aritmetica personalului se schimbă în cazul pregătirii bine specificate pentru teste. Când un tutore licențiat egalează un tutore uman la un sfert de deviație standard, decizia ține de cost și acoperire, iar eficacitatea încetează să mai fie întrebarea. Cercetătorii vor nota limita: echivalența nu este superioritate, iar un test standardizat este rezultatul cel mai ușor de egalat pentru o mașină.

Specialiștii în dezvoltarea personalului didactic pot privi unde tutorii umani și-au păstrat avantajul: diagnosticarea a ceea ce are nevoie învățăcelul în continuare și construirea secvenței care decurge de acolo.

Vezi și: [[intelligent-tutoring|Tutorat inteligent]]

**4. Notițele scrise au bătut întrebarea adresată unui chatbot, trei zile mai târziu ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes și colegii au realizat un experiment preregistrat în șapte licee englezești. 405 elevi de clasa a X-a au parcurs două dintre trei condiții pe un text de istorie: un chatbot care putea răspunde la întrebări despre el, luarea de notițe sau ambele. Trei zile mai târziu, au susținut teste cu cărțile închise de retenție literală, comprehensiune și [[retrieval-spacing-interleaving|reamintire liberă]].

Notițele au bătut chatbotul la toate cele trei măsuri, cu aproximativ jumătate de deviație standard la retenție și aproape patru zecimi la comprehensiune. Notițele plus chatbot au bătut chatbotul singur la două din cele trei și nu au făcut nimic pentru reamintirea liberă, iar notițele singure au fost mai puternice decât combinația. În condiția combinată, circa un sfert dintre elevi au copiat rezultatul chatbotului în notițele lor. Elevii au continuat să evalueze chatbotul ca mai ușor, mai util și mai plăcut decât scrisul.

Cadrele didactice au aici dovezi directe că un asistent de lectură poate înlocui lectura. Dacă scopul temei este să înțeleagă un text, [[writing-education|scrisul este înțelegerea]], iar un instrument care răspunde la întrebări despre pasaj elimină exersarea. Păstrează notițele. Dacă permiți chatbotul, cere ceva ce el nu poate furniza: o comparație, o provocare la adresa textului sau un rezumat scris după ce instrumentul a fost închis.

Vezi și: [[ai-support-reading-comprehension|Sprijin IA pentru comprehensiunea lecturii]]

**5. Timpul de studiu a scăzut cu 27%, iar retenția a scăzut odată cu el ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Un panel de zece ani de pe platforma ALEKS, care acoperă 3,2 milioane de interacțiuni de învățare și 12,2 milioane de timpi de răspuns la evaluări de plasare, arată ce au făcut studenții după apariția ChatGPT. Proiectarea compară tipurile de probleme care pot fi lipite într-un chatbot (probleme textuale) cu tipuri care cer manipularea unui grafic în interiorul platformei, în același curriculum.

Timpul petrecut pe problemele sensibile la IA a scăzut cu 2,8% pe trimestru în rândul studenților, adică 26,9% în unsprezece trimestre. Elevii de liceu au scăzut cu 31,3%, cei de gimnaziu cu 9,0%, iar elevii de clasa a cincea nu au arătat nicio schimbare detectabilă. Declinul a dispărut complet sub [[remote-proctoring|supraveghere la distanță]], ceea ce este testul decisiv: cu instrumentul indisponibil, studenții au petrecut timpul de altădată. Itemii de retenție sub supraveghere au arătat un declin cumulat de 25% al șanselor unui răspuns corect.

Gradientul pe vârstă este un semnal de proiectare pentru echipele de produs. Timpul de exersare este variabila care se mișcă, și se mișcă cel mai mult acolo unde sarcina este cel mai ușor de predat. Pentru cadrele didactice, timpul petrecut pe sarcină este un semnal de alarmă ieftin: o cohortă care termină aceleași probleme mult mai repede probabil nu învață același lucru.

Vezi și: [[reducing-over-reliance|Reducerea dependenței excesive de IA]]

**6. Notele la teme au crescut cu 18%, în timp ce examenele cu cărțile închise au scăzut cu 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26.811 elevi din clasele a 7-a până a 12-a din China, urmăriți timp de 30 de luni, cu IA generativă adoptată la momente diferite între cohorte. Notele la teme au crescut cu 18%, iar timpul de finalizare a scăzut cu 30%, de la 64 la 45 de minute. Examenele lunare cu cărțile închise au scăzut cu 20% față de media de referință în șase luni, iar examenele de admitere cu miză mare au scăzut cu 18% până la 24% după circa doi ani.

Cronologia arată mecanismul. Circa 81% dintre utilizatorii de IA au terminat temele mai repede decât cel mai rapid elev fără IA și apoi s-au descurcat prost la examene. Minoritatea care a păstrat un timp de lucru comparabil cu al neutilizatorilor a învățat la fel de bine ca oricine. Pierderile au fost cele mai mari la științele sociale, apoi la STEM, apoi la limbi, și mai mari la elevii cu performanțe înalte.

Finalizarea temelor este un indicator slab al performanței, iar decalajul apare în șase luni, mult înainte ca rezultatele examenelor de admitere să se miște. Cadrele didactice pot acționa mai devreme: ține dovezile notate cu cărțile închise și tratează tema ca exersare al cărei timp de finalizare este vizibil.

Vezi și: [[checking-whether-educational-ai-works|Verificarea dacă IA educațională funcționează]]

**7. Fiecare tutore testat a eșuat la pedagogie și a eșuat mai rău de-a lungul unei conversații ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors a testat 11 tutori, de la modele cu ponderi deschise de 3,8B la 72B plus GPT-5-mini, în matematică, fizică și chimie, față de o taxonomie de 11 dimensiuni și 48 de sub-riscuri extrase din [[learning-theories|știința învățării]]. Categoriile lui de eșec sunt pedagogice: divulgarea excesivă a răspunsului, întărirea concepțiilor greșite și abandonarea [[scaffolding|sprijinului de tip schelă]]. Fiecare dintre ele pare utilă pe moment, pentru că elevul primește repede un răspuns corect.

Toate modelele au arătat prejudicii pedagogice largi. Modelele mai mari nu au fost în mod fiabil mai sigure, iar utilitatea generală s-a corelat doar slab cu siguranța pedagogică. Ratele de prejudiciu au crescut de la 17,7% în schimburile cu un singur turn la 77,8% în conversațiile de cinci până la opt turnuri.

Evaluările cu un singur turn nu sunt o dovadă a unui tutore sigur, iar echipele de produs ar trebui să își proiecteze testarea pornind de la asta. Un model care trece o verificare unică de utilitate și siguranță poate eșua în cea mai mare parte a unei conversații reale. Administratorii care cumpără un tutore au nevoie de trei răspunsuri: reține soluțiile, sondază concepțiile greșite și rezistă de-a lungul unei sesiuni. O demonstrație de vânzare cu un singur schimb nu oferă niciunul dintre ele.

Vezi și: [[pedagogical-safety|Siguranță pedagogică]]

**8. Cazurile de abatere se sprijină pe dovezi mai subțiri decât sugerează acuzațiile ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz și colegii au codificat fiecare caz de abatere legată de IA generativă dintr-o universitate australiană pe parcursul a trei ani: 1.162 de cazuri cu 1.855 de elemente de probă, fiecare evaluat pentru relevanță, credibilitate și forță inferențială.

Acuzațiile de IA generativă au crescut de la 11,9% din cazurile de abatere în 2023 la 36,9% în 2025, în timp ce volumul total de cazuri a rămas constant. 58 de cazuri, 5% din totalul pentru IA generativă, se bazau doar pe afirmație, fără niciun element de probă. Rezultatul detectoarelor era rar și slab: rapoartele Turnitin sau de similaritate nu aveau forță inferențială în 73 de elemente, iar rezultatul izolat al GPTZero avea credibilitate scăzută în 69. Cele mai puternice dovezi veneau din investigație, nu din acuzație, cu recunoașteri în interviu oral în 410 elemente, 97,2% puternice. [[hallucination-risk|Referințele fabricate]] au fost cea mai mare schimbare structurală, 22,3% din elemente, crescând de la 10,4% în 2023 la 30,0% în 2025.

Pentru administratori, lecția este procedurală. Un caz construit pe scorul unui detector nu va supraviețui unei contestații, iar o investigație care începe cu instrumentul în loc de interviu produce dosare slabe. Cadrele didactice pot acționa asupra artefactului care apare mereu: referințele fabricate sunt frecvente, iar verificarea unei referințe este ieftină.

Vezi și: [[should-we-use-ai-detectors|Folosirea detectoarelor de IA]]

**9. Încrederea profesorilor în propria alfabetizare în IA abia urmărește competența măsurată ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 de profesori din învățământul preuniversitar au completat un chestionar de autoreportare despre alfabetizarea în IA și o măsură obiectivă de performanță construită pe același cadru: Concept, Utilizare, Evaluare și Etică. Corelațiile dintre cele două au variat de la 0,07 la 0,24.

Analiza profilelor latente a găsit șase grupuri. 43 de profesori s-au evaluat constant sus, în timp ce obțineau scoruri mai mici la măsura obiectivă. 59 au arătat inversul. Restul s-au grupat aproape de medie sau s-au despărțit după experiența anterioară cu IA.

Pentru specialiștii în dezvoltarea personalului didactic, [[self-assessment|autoevaluarea]] nu este o analiză de nevoi. Un chestionar care îi întreabă pe profesori cât de încrezători sunt va suprafinanța pe cei încrezători și îi va servi prost pe cei discreți, iar aceste grupuri nu sunt cei competenți și cei în dificultate. Sarcinile scurte de performanță îi separă. Cercetătorii ar trebui să trateze corelațiile scăzute ca pe un avertisment de măsurare: orice studiu despre [[ai-literacy|alfabetizarea în IA]] construit pe [[self-report-measures|autoreportare]] măsoară încrederea.

Vezi și: [[faculty-development-ai|Dezvoltarea personalului didactic care schimbă practica]]

**10. Notarea cu IA îi penalizează pe elevii care scriu mai slab ([[ai-scoring-language-bias-physics|Feser și Tschisgale, 2026]]).**

Explicațiile de fizică ale 116 elevi de liceu au fost notate de 9 abordări de învățare automată și 2 abordări cu modele lingvistice mari, apoi comparate cu scorurile experților umani. Acordul cu experții a variat de la 67,2% la 78,4%, ceea ce sună acceptabil până când erorile sunt descompuse.

Fiecare abordare a subestimat înțelegerea conceptuală la explicațiile cu calitate lingvistică mai scăzută. Părtinirea mergea într-o singură direcție: scrisul mai puternic nu a fost umflat. Tiparul oglindește ce s-a raportat pentru profesorii de fizică înșiși, ceea ce sugerează că dificultatea stă în a infera înțelegerea din proză, la fel pentru oameni ca și pentru modele.

Personalul de evaluare și echipele de produs trebuie să raporteze ratele de subestimare după calitatea limbii, nu doar acordul general cu experții, pentru că media ascunde grupul care este afectat. Pentru oricine notează [[multilingual-learning|învățăcei multilingvi]], trimite răspunsurile cu calitate lingvistică scăzută la [[human-in-the-loop-ai|revizuire umană]] sau proiectează sarcini care nu depind de proză.

Vezi și: [[ai-grading-fairness-reliability|Notare cu IA corectă și fiabilă]]

## Ce au cele zece în comun

Trei dintre studii măsoară două lucruri deodată: ce produc elevii cu instrumentul și ce pot face fără el. Bastani, Rismanchian și Strömberg găsesc cu toții o divergență între cele două, iar doar măsura fără ajutor se comportă ca învățare. Patru depind de o alegere de proiectare, nu de model: gardurile din Bastani, pedagogia încorporată în tutorele Kestin, scrisul pe care Kreijkes l-a păstrat în sarcină și cadrul cu mai multe turnuri pe care l-a testat SafeTutors. Trei examinează sistemul din jurul instrumentului, adică dovezile folosite în cazurile de abatere, felul în care este măsurată competența profesorilor și ipotezele lingvistice din [[automated-assessment|notarea automată]]. StudentBench stabilește paritatea pe un test standardizat, singurul rezultat la care o mașină poate egala cel mai ușor o persoană. Bastani apare în două grupuri pentru că oferă atât decalajul, cât și soluția de proiectare.

Rămân trei întrebări care merită purtate în orice decizie despre un curs sau un produs. Ce ar trebui să poată face elevul când instrumentul nu mai este? Ce îi cere activitatea să facă în timp ce instrumentul este deschis? Ce dovezi ar arăta diferența o lună mai târziu?

## Unde aceste dovezi sunt subțiri

Aceste studii împărtășesc [[limitations-in-aied-research|limitările cercetării în IA educațională]] în ansamblu. Două dintre cele mai mari sunt realizate în Turcia și China, trei în Statele Unite, unul în Anglia, unul în Australia, iar studiul de notare în Germania. Unul este o comparație de referință între modele comerciale, nu un studiu de teren. Matematica de liceu domină, cu fizica și informatica imediat după. Foarte puține studii privesc [[humanities-education|scrisul în științe umaniste]] la scară, învățământul profesional sau elevii cu dizabilități.

Doar panelul chinez și panelul ALEKS observă elevii mai mult de doi ani după adoptare, iar autorii chinezi susțin că studiile mai scurte subestimează sistematic penalizarea pe termen lung. Șase dintre aceste rezultate sunt preprinturi sau lucrări de lucru care nu au finalizat recenzia: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang și Feser. Studiile Bastani, Kestin, Kreijkes și Munoz sunt publicate în reviste cu recenzie.

Rezultatele nule și negative sunt rare în această literatură, așa că registrul publicat probabil supraestimează cât de des ajută IA. Aceste studii sunt cea mai bună îndrumare actuală pentru zece decizii și niciunul dintre ele nu închide o întrebare.

## Încotro mai departe

[[does-ai-help-students-learn|Chiar îi ajută IA pe studenții mei să învețe?]] este revizuirea mai amplă a dovezilor din spatele acestor afirmații. [[redesign-assessment-ai-era|Cum ar trebui regândită evaluarea pentru era IA?]] duce mai departe jumătatea despre evaluare. Pentru cazurile de integritate, [[reduce-ai-cheating|Cum pot reduce trișatul cu IA la cursul meu?]] acoperă dovezile de proces și politica. Pentru constatările despre dezvoltarea profesională, [[faculty-ai-competencies|De ce competențe au nevoie cadrele didactice în privința IA?]] este pagina însoțitoare, iar [[addressing-common-misconceptions-ai-education|Cum putem aborda concepțiile greșite frecvente despre IA în educație?]] tratează obiecțiile pe care probabil le vei auzi de la colegi.
