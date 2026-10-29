---
title: "Care sunt bunele practici pentru raportarea și interpretarea cercetării despre IA în educație?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T15:41:27-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Schița ta are o cifră de titlu în rezumat, iar un recenzent tocmai te-a întrebat ce a făcut efectiv grupul de control. Sau ești tu recenzentul, cu o meta-analiză în mână al cărei efect cumulat este 0,67 și a cărei secțiune de metode se întinde pe o pagină și jumătate. Sau departamentul tău scrie îndrumări despre cum ar trebui personalul să raporteze studiile despre IA și vrea ceva mai specific decât „urmați standardele”.

Șase omisiuni decid majoritatea acestor cazuri: ce sistem de IA a fost folosit, pentru ce a fost configurat, ce rol pedagogic a jucat, dacă oamenii au proiectat sau au revizuit rezultatul lui, ce a captat efectiv măsura rezultatului și ce au făcut autorii cu privire la părtinire, cost și limite. „Imposibil de evaluat” este verdictul onest când acestea lipsesc, și este un verdict diferit de „infirmat”.

## Pe scurt

**1.** Descrie IA ca pe un tratament, nu ca pe un furnizor. Model, versiune, configurare, prompturi, rol și cine a proiectat sau a revizuit rezultatul.

**2.** Numește rațiunea pedagogică și comparația activă. Numele unui produs nu este o metodă, iar predarea obișnuită nu este un control corect.

**3.** Fă măsura să corespundă afirmației, inclusiv dacă rezultatul a fost măsurat întârziat și fără ajutor.

**4.** Raportează incertitudinea pe care o are efectiv analiza: efecte dependente, varianță între studii, intervale de predicție, dimensiuni ale subgrupurilor, părtinire de publicare.

**5.** Validează fiecare judecată automatizată, cu un standard de referință numit și un arbitru numit.

**6.** Raportează contragreutățile: guvernanță, cost de calcul, propria ta folosire a IA, rezultate nule și doar citările pe care le-ai verificat.

## Descrie IA ca pe un tratament pe care cineva l-ar putea reconstrui

Aceasta este verificarea la care eșuează majoritatea lucrărilor trimise. Cadrul RAISE (*Reporting AI Studies in Education*, Allison 2026) este o listă de verificare de 30 de puncte, în zece domenii tematice, iar afirmația lui diagnostică este specifică: lucrările omit în mod curent ce model a fost folosit, cum a fost configurat, ce rol a jucat și dacă actori umani au proiectat sau au revizuit rezultatele lui. Recenzenților le rămân apoi patru întrebări fără răspuns. Ce anume făcea IA? Era necesară? Este replicabil? Sunt credibile afirmațiile despre învățare?

RAISE parcurge de la justificarea educațională, prin specificarea la nivel de API, interacțiunea învățăcel-IA, accesibilitate și potrivire culturală, participanți și context, implicare umană, proiectare, etică, transparență și reproductibilitate, până la limite. Matricea însoțitoare de etică și risc acoperă riscurile pentru [[agency|autonomia]] învățăcelului, [[equity-in-ai-education|echitate]], [[governance|guvernanța]] datelor și transparența algoritmică. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah și Gašević (2026)]] oferă o alternativă simplificată. TEP-AIED reunește Transparența, Etica și Pedagogia într-o singură structură interdependentă, furnizează un tabel de îndrumare corespunzător celor șapte secțiuni ale lucrării și le cere autorilor să adauge o subsecțiune de Metodă intitulată „Considerații de transparență, etică și pedagogie”. Motivul lor este practic: RAISE este cuprinzător și prea detaliat pentru folosirea empirică de rutină. Divulgarea stă sub [[ai-use-disclosure|divulgarea folosirii IA]] și este ce face verificabile afirmațiile despre [[privacy|confidențialitate]] și [[ethics|etică]].

Justificarea educațională vine prima în RAISE pentru că IA nu este un instrument neutru. Valoarea depinde de alinierea dintre problema de învățare, o rațiune teoretică și corespondența dintre obiective și măsurile rezultatului. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] a constatat că toate, în afară de două dintre cele 14 meta-analize auditate, defineau tratamentul drept un instrument, ChatGPT sau GenAI sau „IA” în general. Numele unui produs nu este o [[pedagogy|pedagogie]]. A trata expunerea la ChatGPT drept o singură intervenție comună este comparabil cu a face o meta-analiză a efectelor „hârtiei”.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] fac același argument pentru studiile primare. Auditând un subset al comparațiilor din spatele unei meta-analize proeminente, au găsit doar 21% cu un tratament bine definit, un grup de control și o măsură validă a învățării. Mărimea efectului raportată (g = 0,7) o depășea și pe cea a [[intelligent-tutoring|sistemelor de tutorat inteligent]] construite anume (0,66), iar acest decalaj este un semnal de alarmă: un tratament care întrece tutoratul construit anume este probabil un mănunchi de lucruri diferite purtând o singură etichetă.

Testul este o singură întrebare: ar putea un cititor competent să îți reconstruiască intervenția doar din secțiunea de metode și să obțină același lucru?

## Decide ce îți permite măsura să afirmi

În auditul de dovezi al lui O'Neill pe 46 de studii primare alese aleatoriu, 28 (61%) prezentau probleme de validitate. Neconcordanța variabilei dependente a fost cea mai frecventă (n = 15), urmată de neconcordanța variabilei independente (n = 11), probleme de proiectare experimentală (n = 7), probleme de extragere a datelor (n = 6), absența unui grup de control (n = 6) și repartizarea nealeatoare în grupuri (n = 6). Rezultatele multidimensionale erau cumulate în mod curent ca și cum ar fi interschimbabile, cu notele la teste, calitatea temelor, [[motivation|motivația]], [[self-efficacy|autoeficacitatea]], atitudinile și [[student-engagement|implicarea]] topite într-o singură cifră de „rezultat academic”.

Două obiceiuri de raportare previn asta. Spune ce construct măsoară instrumentul și că a fost validat pentru acea populație; [[self-report-measures|măsurile autoreportate]] arată unde măsurile bazate pe percepție se despart de comportament, iar [[assessment-validity|validitatea evaluării]] acoperă validitatea de construct. Apoi raportează un rezultat care nu depinde de convingerea învățăcelului despre ajutor. Performanța imediată la sarcină, în condiții de asistență, nu este un [[learning-gains|câștig de învățare]], iar [[cognitive-offloading|descărcarea cognitivă]] este mecanismul care le separă cel mai plauzibil pe cele două. [[verification-quality-reliance-calibration-genai-2026|Mini-revizuirea din 2026 a 493 de înregistrări și 14 studii prioritare]] a constatat că niciuna nu a măsurat împreună succesul verificării și decizia de dependență care urmează, față de un standard de calitate a rezultatului arbitrat independent, și că puține au privit dincolo de performanța imediată, spre reținerea întârziată sau [[transfer-of-learning|transfer]].

Enunță plafonul explicit în discuție. Un studiu care a măsurat un test luat cu instrumentul deschis poate susține o afirmație despre performanța asistată. Nu poate susține o afirmație despre ce au învățat studenții, iar propoziția aceea costă un rând.

## Raportează incertitudinea pe care o are efectiv analiza ta

Pentru sinteze, raportează modul de tratare a efectelor dependente, varianța între studii, intervalele de predicție și evaluarea părtinirii de publicare. I² singur nu face treaba. O'Neill a găsit eterogenitate raportată severă oriunde era dată, de la 77,2% la 94,4% în 13 meta-analize, cu 12 peste 80%, și niciodată rezolvată: nicio analiză de moderatori nu a atins dimensiunea minimă de subgrup, zece studii. Douăsprezece meta-analize au tratat mărimi ale efectului dependente din același studiu drept independente, ceea ce umflă dovezile aparente. Doar patru au raportat varianța între studii (τ²) și doar două un interval de predicție, iar ambele intervale includeau zero. Părtinirea de publicare nu a fost evaluată valid nicăieri în set.

Cifrele de eterogenitate au nevoie de modelul lor atașat, pentru că I² depinde de precizie. [[limitations-in-aied-research|Limitele cercetării despre IA în educație]] documentează o sinteză la I² = 82,98% sub un model cu efecte fixe și 15,75% sub efecte aleatorii. Un cititor care primește doar prima cifră nu poate spune cât de inconsecvent este corpusul. Raportează τ² și un interval de predicție alături de el, ceea ce este și convenția pe care o cere [[meta-analysis-systematic-review|literatura de sinteză]].

Apoi aplică o reducere propriei cifre de titlu. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] au cumulat 1.840 de mărimi ale efectului din 67 de meta-analize și au constatat că, odată modelată părtinirea de publicare, efectul mediu scade la aproximativ o treime din mediana publicată (SMD = 0,196 față de 0,67), cu un interval de predicție de la -1,521 la +1,908. Acel interval acoperă de la un prejudiciu substanțial la un beneficiu substanțial pentru un studiu nou ipotetic. Este cifra cea mai utilă din lucrare și cea mai probabilă să fie scoasă din rezumat.

## Spune cât de departe ajunge afirmația

Corectitudinea și aria de aplicare eșuează în același fel: un efect mare care înseamnă mai puțin decât pare. Unsprezece dintre cele 14 meta-analize auditate nu au stabilit nicio graniță de populație, așa că „studenții” acopereau de la copii la rezidenți în medicină. Un singur curs, o singură instituție, o singură disciplină sau o singură țară nu justifică o afirmație generală, iar rezultatele pentru un instrument se transferă rar la altul.

Trei explicații acoperă majoritatea efectelor mari, și fiecare poate fi raportată. Noutatea este una. Timpul suplimentar de lucru la sarcină este alta. A treia este o condiție de comparație care a primit predare obișnuită, nu un control activ. Raportează ce a făcut efectiv controlul, cât timp a petrecut fiecare braț și cât de nou era instrumentul. Enunță și granița de populație, pentru că efectele diferă între grupurile de învățăcei, iar o graniță nedeclarată este ce permite unei singure cifre cumulate să stea în locul tuturor; [[differential-effects-across-learner-groups|Efecte diferențiate între grupurile de învățăcei]] expune variația.

Tratează instrumentul ca pe o țintă mișcătoare. Sistemele proprietare se schimbă fără anunț, așa că o constatare este legată de o versiune de model, iar [[benchmark|etalonul]] care a entuziasmat într-o lansare poate să nu mai reziste în următoarea. Versiunea și data accesării au loc în secțiunea de metode din acest motiv, nu doar pentru reproductibilitate.

## Validează judecățile automatizate

[[ai-ed-evaluation|Evaluarea IA în educație]] deleagă tot mai mult notarea către modele, ceea ce face din procedura de validare parte a rezultatului, nu un anex. Relatarea Khan Academy despre metricile [[intelligent-tutoring|tutorului său IA]] arată că implicarea cognitivă este notată de un judecător [[llm|LLM]] calibrat față de experți pedagogi umani la F1 0,83 și că mișcările metricilor au venit din peste 40 de experimente live în cinci luni, nu din evaluare offline ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] arată că dezacordul om-mașină despre calitatea [[formative-assessment|întrebărilor de pretest]] este sistematic, nu aleatoriu, și că operaționalizarea rubricii contează mai mult decât promptarea care începe cu rațiunea.

Acordul cu codificatori umani este un lucru separat de calitate, iar raportarea lui ca și cum ar fi calitate este o țintă a recenzenților. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] au pus un expert independent să judece 855 de seturi de coduri în perechi, fără să știe sursa. Acordul om-LLM a fost în medie un Jaccard de 0,30 față de 0,52 pentru acordul om-om, în timp ce verificatorul orb a preferat codificarea umană și pe cea a mașinii în proporții indistinguibile (51,5% față de 48,5%, p = 0,537). Raportează ținta de calibrare, standardul de referință și cine a arbitrat dezacordul. Aceste trei elemente sunt ce îi permit unui cititor să decidă câtă greutate poate purta scorul automatizat.

## Divulgă costurile și propria ta folosire

O revizuire a tuturor lucrărilor conferinței AIED 2025 a găsit un tipar de adoptare a LLM-urilor fără divulgare: majoritatea proiectelor foloseau LLM-uri, iar mai puțin de o mână au raportat consum de resurse sau amprentă de carbon. Acea lucrare oferă o metodă open-source cu instrumente de măsurare pentru hardware local și în cloud, plus o formulă pentru estimarea cheltuielii de calcul a modelelor de frontieră al căror număr de parametri nu este divulgat. Argumentul ei este că nedeclararea acestor costuri este ea însăși o problemă etică. Guvernanța datelor, consimțământul, accesibilitatea și potrivirea culturală aparțin aceluiași paragraf (puncte RAISE; [[universal-design-for-learning|proiectare universală pentru învățare]], [[accessibility|accesibilitate]]). [[equity-ethics-pedagogical-safety-research|Echitate, etică și siguranță pedagogică]] oferă tratamentul mai amplu.

Propria ta folosire a IA în procesul de cercetare are nevoie de aceeași divulgare. [[prisma-llm-ai-assisted-systematic-reviews-2026|Analiza PRISMA-LLM a lui Zabaleta și Lin]] pe 888 de lucrări despre automatizarea revizuirilor arată cât de inegală este această raportare. Din 2023, 38,0% dintre lucrările despre software și produse nu au raportat nicio evaluare, față de 9,3% dintre lucrările despre LLM. Bogăția medie a raportării a fost 6,3 la lucrările despre LLM și 3,3 la cele despre software și produse. 84,1% din folosirea LLM se baza pe sisteme proprietare sau găzduite, doar 4,9% cu greutăți deschise. Cadrul lor separă divulgarea implementării de evaluarea sensibilă la consecințe, pe cinci niveluri de divulgare, ceea ce este un șablon utilizabil pentru a descrie ce a făcut un instrument în interiorul unei revizuiri.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai și Chan (2026)]] adaugă imaginea din partea autorilor. Dintre 28 de cercetători doctoranzi, 27 au folosit GenAI în ideare, revizuirea literaturii, explicare, prelucrarea datelor, programare, [[writing-education|scriere academică]], editare și traducere. Ei și-au calibrat folosirea după miză și după normele disciplinei. Politicile instituțiilor lor vizau predarea și evaluarea, nu practica de cercetare, ceea ce lasă decizia de raportare în seama autorului.

## Publică rezultatul nul și verifică fiecare citare

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] au verificat 30 de referințe fabricate în 14 lucrări, iar numărul la un simpozion tehnic a crescut de la 3 în 2025 la 17 în 2026, adică 2,3% din lucrările din volumul acelui an. Redactarea asistată de LLM face ieftin de produs o citare inventată plauzibilă, de aceea verificarea trebuie să aibă loc înainte de trimitere, nu după acceptare.

Contragreutățile din acel audit contează când îl citezi. Majoritatea referințelor semnalate erau benigne: 229 erau nepotriviri de metadate ACM, cu PDF-ul corect, iar 188 erau variante bibliografice valide. Numărul celor fabricate este în mod deliberat o limită inferioară, iar majoritatea benignă nu este o eroare de rotunjire. Verifică fiecare intrare pe care nu o poți controla personal.

Raportarea rezultatelor nule și negative este cealaltă jumătate a unei baze de dovezi oneste. Bartoš et al. au găsit dovezi puternice de suprimare a rezultatelor nule (fiecare test Egger p < 0,0001) și eterogenitate extremă (τ = 0,869), fără niciun subgrup de rezultat, domeniu, nivel sau rol al IA care să arate câștiguri consistente. Nu au găsit de asemenea nicio diferență între studiile publicate înainte și după ianuarie 2023, ceea ce subminează afirmația că instrumentele generative moderne produc în mod specific câștiguri.

## Ce greșesc cercetătorii aici

**„O mărime a efectului este o proprietate a modalității.”** Nu există un efect al IA în educație de raportat. Toate, în afară de două, dintre meta-analizele auditate defineau tratamentul printr-un nume de instrument, doar 21% dintre comparațiile auditate aveau un tratament definit, un control și o măsură validă, iar g = 0,7 cumulat stătea peste tutoratul inteligent construit anume, la 0,66. O mărime a efectului aparține unei proiectări, unei populații și unei ocazii de măsurare.

**„Media cumulată este ce li se va întâmpla studenților mei.”** Media descrie setul de studii, și nimic din ea nu fixează o singură sală de clasă. Media ajustată pentru părtinire este SMD = 0,196, iar intervalul ei de predicție merge de la -1,521 la +1,908. Eterogenitatea raportată stă peste 80% în 12 din 13 meta-analize, iar niciun subgrup din ansamblul mai mare nu a arătat câștiguri consistente. O schimbare la nivel de student nu poate fi identificată din niciuna dintre cele două cifre.

**„Un rezultat nul înseamnă că instrumentul nu funcționează.”** Un rezultat nul este o afirmație despre o proiectare la o anumită precizie, iar absența unui efect detectabil într-un studiu este un fapt despre acel studiu. SMD = 0,196 ajustat pentru părtinire a venit dintr-o literatură în care fiecare test Egger a fost semnificativ, așa că lectura defendabilă a corpusului este o medie mică și incertă. Niciun subgrup de rezultat, domeniu, nivel sau rol al IA din ansamblul mai mare nu a arătat câștiguri consistente. Problema documentată în această literatură este suprimarea.

**„Un singur studiu închide întrebarea.”** Ratele de bază spun altceva. 61% dintre studiile primare verificate aveau probleme de validitate, un singur curs sau o singură instituție nu justifică o afirmație generală, iar un sistem proprietar este o țintă mișcătoare legată de o versiune de model. Un singur studiu este un punct de date cu o proiectare atașată.

**„Un acord mare cu codificatorii umani înseamnă că modelul notează lucrul corect.”** Acordul om-LLM a fost 0,30 față de 0,52 pentru om-om, iar verificatorul orb nu a putut distinge cele două seturi de coduri, la 51,5% față de 48,5%. Acordul măsoară consistența cu un codificator, iar calitatea este o întrebare separată, care are nevoie de un standard de referință și de un arbitru.

## Obiecțiile pe care le vei auzi

**„Recenzenții vor noutate, nu detalii de metodă.”** Revistele se mișcă în direcția opusă. RAISE și TEP-AIED le dau editorilor un construct pe care să îl ceară, iar subsecțiunea de Metodă din TEP-AIED este un punct de intrare cu frecare mică. Detaliul de metodă este ce transformă o lucrare imposibil de evaluat într-una citabilă.

**„Nu avem spațiu.”** Cele cinci niveluri de divulgare sunt niveluri de raportare, nu niveluri de risc, așa că adâncimea evaluării poate fi o propoziție sau două. Versiunea, prompturile și rolul încap într-un paragraf scurt. Costul și guvernanța încap într-o propoziție la limite.

**„Toată lumea raportează așa.”** Cifrele spun că norma este problema: 61% dintre studiile primare verificate cu probleme de validitate, 12 din 13 meta-analize peste 80% eterogenitate, 38,0% dintre lucrările despre software și produse fără nicio evaluare.

**„Instrumentul nostru este proprietar, deci nu putem raporta modelul.”** Raportează versiunea, data accesării, configurarea, prompturile pe care le-ai furnizat, rolul și barierele de siguranță. Dacă furnizorul nu vrea să spună, acea constrângere aparține secțiunii de limite, ca o limitare a afirmației.

**„Raportarea rezultatelor nule ne va dăuna.”** Rezultatele nule suprimate sunt mecanismul documentat din spatele mediei ajustate SMD = 0,196. Publicarea lor este ce îți ține rezultatul pozitiv lizibil.

## Ce să faci săptămâna aceasta

**1.** Citește-ți rezumatul față de secțiunea de metode și șterge fiecare afirmație pe care metodele nu o pot susține. O propoziție despre plafonul măsurii este de obicei suficientă.

**2.** Adaugă paragraful de specificare: model, versiune, data accesării, configurare, prompturi, rol și cine a proiectat sau a revizuit rezultatul.

**3.** Scoate τ², intervalul de predicție și evaluarea părtinirii de publicare din anexă în rezultate, sau spune deschis că nu le-ai calculat.

**4.** Scrie granița de populație și condiția de control în enunțul de proiectare, inclusiv cât timp a petrecut fiecare braț.

**5.** Verifică fiecare referință pe care nu ai citit-o personal și începe cu câmpul autorilor.

## Încotro mai departe

[[research-methods-aied|Metodele de cercetare în IA în educație]] acoperă alegerile de proiectare din spatele acestor decizii de raportare, iar [[limitations-in-aied-research|Limitele cercetării despre IA în educație]] este catalogul modurilor de eșec, cu cifrele atașate. [[interpreting-and-applying-aied-research|Interpretarea și aplicarea cercetării despre IA în educație]] este partea cititorului din aceeași problemă, [[does-ai-help-students-learn|dovezile despre învățarea durabilă]] sunt exact ce încearcă să atingă majoritatea acestor măsuri, [[evaluating-ai-interventions-methods|Evaluarea intervențiilor cu IA: metode]] acoperă măsurile și proiectările de comparație, iar [[checking-whether-educational-ai-works|Dacă IA educațională funcționează]] este versiunea mai scurtă a întrebării. Pentru golurile pe care această literatură nu le-a umplut, vezi [[research-gaps-aied|Golurile cercetării despre IA în educație]].
