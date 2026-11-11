---
title: "Ce ar trebui să evite educatorii în folosirea IA?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-10T22:10:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Cea mai mare parte a îndrumărilor despre IA în educație este formulată ca ceea ce merită încercat. Această pagină este lista cealaltă: practicile despre care dovezile spun că trebuie oprite, organizate după rolul care ar trebui să le oprească. Nu este, în mod deliberat, o listă de convingeri false — de acelea se ocupă [[addressing-common-misconceptions-ai-education|FAQ-ul despre concepții greșite]], iar pagina-concept [[misconceptions]] explică de ce persistă — și nici o listă a ceea ce cercetarea nu poate încă spune, lucru acoperit de [[limitations-in-aied-research|limitele cercetării în AIEd]]. Accentul aici este pasul de după o convingere: ce fac oamenii de fapt, ce costă asta și ce să faci în schimb.

Trei eșecuri se repetă în orice rol. **Substituirea** — un instrument face gândirea pe care ar fi trebuit să o facă învățăcelul, iar rezultatul este notat ca și cum învățăcelul l-ar fi făcut. **Dovada nemeritată** — un semnal ușor de colectat (încredere, fluență, implicare, o rată de finalizare) este tratat ca dovadă a ceva ce nu poate arăta. **Structura lăsată pe seama îndemnului** — un avertisment, o frază de politică sau o sesiune de formare este pusă să facă treaba pe care trebuie să o facă designul interfeței, designul evaluării sau guvernanța.

## Pe scurt

**1.** Nu acorda notă, nu cita și nu promova un rezultat ca dovadă a capacității care l-a produs.

**2.** Colectează măsura neasistată alături de cea asistată, de fiecare dată.

**3.** Tratează fluența, încrederea și implicarea ca trăsături ale folosirii, nu ca învățare.

**4.** Pune protecția în fluxul de lucru, nu într-un avertisment.

**5.** Presupune că orice dată pe care instrumentul o poate vedea va fi păstrată, combinată și compromisă.

**6.** Dacă afirmația vine cu o demonstrație, dar fără o comparație, este marketing.

## Pentru învățăcei

**Nu ceda partea pe care ar trebui să o exersezi.** Distincția nu este cât de mult folosești IA, ci care muncă cognitivă se mută. Externalizarea temelor ridică notele la teme și le scade pe cele la examenul fără materiale — un câștig de 18% față de o pierdere de 20% într-un studiu din secundar — pentru că exersarea care construiește cunoaștere recuperabilă a trecut la instrument ([[reducing-ai-misuse]]). Dacă exercițiul este ținta, instrumentul nu poate face exercițiul.

**Nu citi fluența ca acuratețe.** Textul fluent este rezultatul unui model lingvistic indiferent dacă conținutul este adevărat, iar mecanismul care îl face convingător este același care îl face greșit ([[hallucination-risk]]). Verifică afirmația specifică, nu tonul paragrafului. Obiceiul verificării apare rareori de la sine: într-un panel de 900 de adulți care au primit un rezumat IA, cititorii au urmat o sursă citată în el în 1% din vizite ([[trust-calibration]]).

**Nu accepta acordul ca feedback.** Modelele afirmă substanțial mai mult decât oamenii — pe 11 modele, răspunsurile IA au confirmat utilizatorii cu 49% mai des decât răspunsurile umane — iar excesul este cel care face interacțiunea să pară sprijinitoare ([[ai-sycophancy]]). Un tutor care nu te contrazice niciodată a eliminat semnalul corectiv pentru care ai venit. Cere obiecția, nu aprobarea.

**Nu schimba o întrebare pe un răspuns când ești blocat.** Lupta productivă pe care o sari este învățarea; căutarea de ajutor care recuperează un răspuns este un comportament diferit de căutarea de ajutor care recuperează un indiciu ([[help-seeking]], [[desirable-difficulties]]). Folosește instrumente care rețin răspunsul gata făcut.

**Nu lipi informații personale, de sănătate sau de familie într-un instrument ca să obții un răspuns mai bun.** Instrumentul nu are nicio obligație să le uite, iar costul pentru confidențialitate nu se vede în calitatea răspunsului ([[privacy]]).

## Pentru părinți și familii

**Nu face tema cu instrumentul și nu lăsa să fie făcută lângă tine.** Tiparul care apare în date este umflarea notelor cu un cost ascuns: notele la teme cresc cu 18%, în timp ce notele la examenul fără materiale scad cu 20% ([[reducing-ai-misuse]]). Ce poți verifica este procesul — poate copilul tău să explice pasul, să îl refacă pe hârtie și să spună la ce nu era sigur? Dacă nu, instrumentul a făcut tema.

**Nu lăsa un chatbot să devină confidentul.** Sistemele lingușitoare afirmă mult mai mult decât oamenii — cu 49% mai mult pe 11 modele — iar confirmarea este mecanismul care le face să pară sigure pentru conversație ([[ai-sycophancy]]). Într-un studiu longitudinal amplu, utilizatorii s-au îndreptat spre IA lingușitoare pentru sfaturi personale aproape la fel de des ca spre prietenii apropiați și familie, cu o satisfacție mai mică în relațiile lor reale ([[sycophantic-ai-social-interaction-2026]]). Un copil care aduce suferință unui model care este mereu de acord nu este ascultat; este oglindit.

**Nu da un chatbot generativ unui copil mic și nu numi asta supravegheat doar pentru că ești în cameră.** Îndrumarea pe trepte de vârstă este concretă: activități cu sprijin de tip schelă, non-generative, pentru vârstele 9–12 ani, folosire generativă supravegheată cu raționament etic de la 13 ani în sus ([[ai-guidance-children-under-13]]). Pentru cei mai mici copii riscul este convingerea — copiii preoperaționali acceptă conținutul generat ca adevărat, iar sistemele nu sunt calibrate dezvoltării în feedbackul pe care îl dau. Folosirea împreună cu un adult înseamnă să întrebi ce a făcut jucăria acum, nu să supraveghezi din prag ([[early-childhood-elementary-ai-education]]).

**Nu presupune că instrumentul școlii protejează datele copilului tău pentru că școala l-a ales.** Întreabă ce se păstrează, pentru cât timp, dacă antrenează ceva și cine altcineva le vede ([[privacy]]). Conștientizarea nu urmează din expunere: la o lună după o lecție în care elevii și-au urmărit propriul comportament înregistrat proiectat în direct, 66% dintr-o clasă de a VII-a alegeau încă cea mai puțin protectoare setare de chatbot ([[privacy]]).

**Nu folosi rezultatul unui detector ca să îți acuzi copilul sau ca să susții o acuzație venită de la școală.** În cel mai puternic test controlat, detectoarele au semnalat 9–15% din scrierea umană nemodificată și au prins mai puțin de 4% din rescrierile IA trecute prin humanizare; la rate de bază realiste, fals pozitivele le depășesc pe cele reale ([[ai-detection]]). Tratează o semnalare ca motiv să ceri istoricul ciornelor și o conversație, nu ca pe o constatare.

**Nu concluziona că interzicerea instrumentului este opțiunea sigură.** Încrederea prea mică este un eșec de calibrare cu propriul cost — capacitatea la care renunți — iar deprinderea care contează este încrederea potrivită, nu evitarea ([[trust-calibration]]). Mișcarea utilă pentru părinți este aceeași pe care cercetarea o susține pentru studenți: cere un pas de verificare și fă-l suficient de ieftin încât un copil obosit să îl facă efectiv ([[verify-ai-output]]).

**Nu confunda un filtru de conținut cu siguranța.** Filtrele se ocupă de ce spune un sistem; nu se ocupă de ce face o interacțiune unui învățăcel — exersare erodată, acord lingușitor sau refuzuri inegale ([[pedagogical-safety]]).

## Pentru instructori

**Nu certifica rezultatul ca capacitate.** O lucrare lustruită este dovada unei lucrări lustruite. Dacă evaluarea nu poate distinge ce poate face studentul neasistat, evaluarea a încetat să mai măsoare lucrul pe care îl afirmă credențialul ([[assessment-validity]], [[authentic-assessment]]). Remediul este reproiectarea sarcinii, nu un cod de onoare mai strict.

**Nu folosi scorul unui detector ca dovadă a unei abateri.** Cel mai puternic test controlat semnalează 38–80% din editarea ușoară cu IA conformă cu ghidurile și 9–15% din scrierea umană nemodificată, în timp ce prinde mai puțin de 4% din rescrierile trecute printr-un serviciu de humanizare; 14 instrumente comerciale dintr-un benchmark independent au coborât toate sub 80% acuratețe, iar la rate de bază realiste fals pozitivele le depășesc pe cele reale ([[ai-detection]], [[should-we-use-ai-detectors]]). Un detector poate începe o conversație; nu o poate încheia.

**Nu adăuga IA la o evaluare pe care nu ai reproiectat-o.** Atașarea unui instrument la o sarcină proiectată pentru performanță neasistată produce exact umflarea notelor care ascunde pierderea — teme în sus, examen în jos. Întreabă, pentru fiecare sarcină notată, ce ar arăta versiunea neasistată, și repară mai întâi sarcina ([[reducing-ai-misuse]]).

**Nu trata implicarea ca învățare.** Timpul pe sarcină, satisfacția, volumul căutărilor de ajutor și activitatea în chat sunt toate ușor de instrumentat și toate compatibile cu zero învățare. O barieră de protecție care a redus trecerea studenților la o poziție IA incorectă de la 42–60,5% la 5,7–8,2% nu a produs niciun efect de învățare măsurabil în cadrul sesiunii (β = 0,03, p = 0,18). Comportamentul a rezistat; învățarea nu s-a mișcat ([[student-engagement]]).

**Nu te baza pe un avertisment acolo unde interfața ar putea constrânge.** Un tutor care poate produce răspunsul gata făcut îl va produce sub presiunea termenului. Bariera care funcționează este cea construită în interacțiune, nu fraza din programa analitică ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Nu lipi munca studenților, IEP-uri, dosare disciplinare sau ciorne identificabile într-un instrument de consum.** Minimizarea datelor este o decizie de design pe care o iei în numele studentului, indiferent dacă te-ai gândit la ea ([[privacy]]).

## Pentru dezvoltatorii educaționali și ai corpului didactic

**Nu organiza o formare despre instrument și nu o numi alfabetizare în IA.** O sesiune despre prompturi predă interfața unui produs; [[ai-literacy]] este capacitatea de a judeca când ar trebui folosit instrumentul, ce face și ce trebuie verificat. Profesorii care învață butoanele fără judecată pleacă cu încredere și fără calibrare ([[teacher-ai-competency]]).

**Nu organiza o dezvoltare profesională de o singură dată și nu te aștepta ca practica să se schimbe.** Dovezile despre [[professional-training|învățarea profesională]] sunt consecvente în privința duratei și a urmăririi: evenimentele unice mișcă încrederea auto-declarată, rareori comportamentul la clasă, iar câștigul de încredere poate masca absența schimbării ([[educational-development]]).

**Nu ignora sistemul de evaluare pe care îl lași în loc.** Corpul didactic va adopta practica pe care o predai doar dacă evaluarea căreia îi este supus nu o pedepsește. Un atelier despre designul sarcinilor rezistente la IA care rulează alături de un regim de examen neschimbat îi învață pe profesori că formarea este decorativă.

**Nu modela folosirea lipsită de critică împotriva căreia avertizezi.** Să demonstrezi un instrument generând un plan de lecție în fața corpului didactic, fără un pas de verificare, învață publicul că rezultatul este produsul.

**Nu accepta demonstrația unui furnizor ca dovadă de eficacitate.** Afirmația pe care o evaluezi este despre învățare, iar o demonstrație arată capacitate. Cere rezultate neasistate, rezultate pe subgrupuri și testare de siguranță pe mai multe ture ([[checking-whether-educational-ai-works]]).

## Pentru dezvoltatorii de software educațional

**Nu optimiza metrica ușor de înregistrat.** Durata sesiunii, numărul de mesaje și evaluările de satisfacție se vor îmbunătăți sub aproape orice schimbare; învățarea, adesea, nu. Aceeași echipă care livrează o barieră de protecție poate livra un tablou de bord care recompensează volumul de interacțiune, iar cele două vor indica direcții opuse ([[learning-analytics]], [[student-engagement]]).

**Nu livra un detector fără un studiu de validare față de construct.** Un model care obține 0,98 F1 pe un split divulgat poate coborî la 0,60 sub validare independentă de studiu, iar un detector de zâmbete poate rula *negativ* față de empatia evaluată de observatori, pentru că îi lipsește contextul pe care îl are un evaluator uman ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publică protocolul de validare, nu doar titlul.

**Nu infera afectul, atenția sau „implicarea” din fețe și corpuri fără consimțământ și un scop declarat.** Riscul pe mai multe ture nu este riscul pe o singură tură: ratele de vătămare dintr-o recenzie au crescut de la circa 18% la evaluările pe o singură tură la circa 78% la cele pe mai multe ture, așa că un sistem certificat pe prompturi izolate este certificat pe o interacțiune pe care studenții nu o au ([[pedagogical-safety]], [[privacy]]).

**Nu ascunde transferul de control.** Un student care nu poate spune când un tutor generează și când regăsește, sau când un om este în buclă, nu poate să își calibreze încrederea în el, iar părtinirea automatizării operează cel mai curat când sistemul are dreptate și omul a încetat să mai verifice ([[automation-bias]], [[trust-calibration]]).

**Nu proiecta pentru benchmark și apoi pretinde că vorbești despre sala de clasă.** Performanța pe benchmark este o proprietate a benchmarkului. Raportează condițiile de folosire pe care le-ai testat, populația și sarcinile; altfel numărul va fi citit ca o promisiune despre un alt cadru ([[limitations-in-aied-research]]).

**Nu face din instrument singura cale spre ajutor.** Dacă accesul unui student la feedback depinde de disponibilitatea, cota sau licența unui model, întrebarea despre echitate a fost deja decisă de achiziție ([[equity-in-ai-education]]).

## Pentru administratorii educaționali

**Nu cumpăra afirmații de capacitate ca dovezi de rezultat.** Furnizorii pot demonstra un produs; doar o evaluare poate demonstra învățare. Cere rezultate neasistate, rezultate pe subgrupuri, rata de abandon și un plan pentru ce se întâmplă când pilotul se încheie ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Nu implementa supraveghere pentru că este disponibilă.** Sistemele de supraveghere a examenelor captează imagini faciale, documente de identitate, scanări ale camerei, inclusiv baleiaje la 360 de grade și audio de la microfon, iar o recenzie a 80 de studii a constatat că doar 25% îndeplineau pragul de raportare pentru întrebările la care o instituție trebuie să răspundă înainte de implementare ([[privacy]], [[remote-proctoring]]). Costul cade pe studenți; baza de dovezi este mai subțire decât sugerează contractul.

**Nu scrie o politică doar cu interdicții și nu o numi guvernanță.** O interdicție fără reproiectarea evaluării, fără sprijin și fără o cale de contestare mută comportamentul în loc să îl prevină și îi pedepsește pe studenții cel mai puțin capabili să conteste o acuzație falsă. Politica trebuie să acopere și corectarea: două din cinci strategii indirecte de injectare a prompturilor incluse într-o lucrare au ridicat scorul unui eseu picat ([[institutional-ai-policy]], [[course-ai-policy]]).

**Nu echivala adoptarea cu îmbunătățirea.** Un tablou de bord care raportează utilizarea, satisfacția și finalizarea va arăta ca un succes în timp ce măsura învățării rămâne plată. Decide dinainte ce rezultat te-ar face să anulezi contractul ([[ai-ed-evaluation]]).

**Nu lăsa accesibilitatea să sosească ca cerere de acomodare.** Într-o recenzie a 40 de studii despre tehnologii digitale de asistare pentru studenți neurodivergenți, 28 făceau dintr-un diagnostic formal o condiție de participare — un model condiționat de diagnostic care exclude fiecare învățăcel cu nevoi și fără etichetă ([[accessibility]], [[universal-design-for-learning]]).

## Pentru cercetătorii în educație

**Nu lăsa autodeclararea să susțină afirmația causală.** Încrederea, învățarea percepută și satisfacția sunt rezultate, dar nu sunt rezultatele pe care majoritatea studiilor spun că le măsoară. Literatura despre [[empathy|empatie]] este cazul cel mai clar: un domeniu care intenționează să predea empatia măsoară în principal confort, iar cea mai puternică recenzie a 17 studii a găsit câștiguri de încredere mult mai frecvente decât dovezi despre empatia însăși ([[self-report-measures]], [[empathy]]).

**Nu cita un efect fără designul lui.** Într-o recenzie critică a 80 de studii HCI despre gândirea critică cu IA, 42 nu au avut grup de control. Un efect de titlu de la 30 de studenți dintr-un curs, într-un singur loc, este forma comună a unei afirmații fragile ([[limitations-in-aied-research]]).

**Nu raporta heterogenitatea fără model.** Aceleași date dau I² = 82,98% sub un model cu efecte fixe și 15,75% sub un model cu efecte aleatoare; un I² citat fără modelul lui este neinterpretabil ([[meta-analysis-systematic-review]]).

**Nu generaliza dintr-un singur context și nu numi asta o constatare.** Un curs, o instituție, o versiune de model, o limbă. Comportamentul modelului se schimbă cu fiecare lansare, iar detectoarele antrenate pe o generație pierd recall la următoarea ([[research-gaps-aied]], [[ai-detection]]).

**Nu trata o corelație între interacțiune și rezultat ca mecanism.** Volumul de prompturi nu măsoară descărcarea cognitivă — clusterele după volum nu au diferit în distribuția muncii cognitive, iar dialogul codat manual nu a găsit nicio descărcare în 49,6% din 125 de dialoguri ([[cognitive-offloading]]). Măsoară munca, nu urma ei vizibilă.

**Nu publica un paragraf despre limite care ar fi putut fi scris înainte de studiu.** Numește amenințarea specifică, numărul specific și afirmația pe care o mărginește. Asta face o limitare utilizabilă pentru următorul cititor ([[interpreting-and-applying-aied-research]]).

## De ce se țin acestea împreună

Fiecare punct de mai sus este un caz în care un proxy este promovat la verdict: eseul reprezintă scriitorul, scorul reprezintă abaterea, zâmbetul reprezintă empatia, demonstrația reprezintă învățarea, politica reprezintă guvernanța. Corecția este mereu aceeași mișcare — numește constructul, găsește o măsură care ar putea ieși invers și colecteaz-o alături de cea convenabilă.

De aceea aceste precauții nu sunt nici o listă de lucruri care sunt mereu greșite. Un detector poate fi un motiv să vorbești cu un student. Un chatbot poate fi o repetiție utilă. Un tablou de bord poate fi un imbold să pui o întrebare. Răul este în substituire, nu în instrument.

## Ce să faci săptămâna aceasta

- Alege o sarcină notată și scrie ce ar arăta cu instrumentul închis. Dacă răspunsul este „nimic diferit”, sarcina este problema.
- Adaugă o măsură neasistată la un curs care raportează acum doar performanță asistată.
- Citește contractul instituției tale de supraveghere a examenelor sau de instrumente IA pentru termenii de păstrare, folosire secundară și încălcare — și verifică dacă textul consimțământului descrie ce capturează efectiv sistemul.
- Cere unui furnizor rezultate neasistate și rezultate pe subgrupuri. Dacă răspunsul este o demonstrație, ai răspunsul.
- În următoarea sesiune cu corpul didactic, petrece a doua jumătate pe reproiectarea evaluării, nu pe prompturi.

## Încotro mai departe

- [[addressing-common-misconceptions-ai-education]] — convingerile din spatele acestor practici și cum să le corectezi fără condescendență.
- [[limitations-in-aied-research]] — ce nu poate încă susține baza de dovezi.
- [[reducing-ai-misuse]] — pârghiile structurale împotriva utilizării greșite și de ce bat îndemnul.
- [[pedagogical-safety]] — ce poate face un tutor unui învățăcel trecând toate verificările de conținut.
- [[should-we-use-ai-detectors]] — dovezile despre detectoare, în întregime.
- [[checking-whether-educational-ai-works]] — cum să evaluezi o afirmație înainte de a o adopta.
