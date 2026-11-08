---
title: "Limitările cercetării AIEd"
created: "2026-08-15T09:18:04-04:00"
type: concept
foundations: [ai-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, educational-measurement]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, research-methods-aied]
updated: "2026-11-08T07:31:21-05:00"
translation_of: "concepts/limitations-in-aied-research"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

> **Limitările cercetării AIEd** — slăbiciunile și constrângerile recurente care afectează câtă încredere putem acorda constatărilor despre IA în educație și cum ar trebui cititorii să le interpreteze. Ele traversează studiile individuale: limitări metodologice (generalizabilitate, dimensiunea eșantionului, validitate, autoevaluare), problema vitezei (IA și constatările se perimează repede, în timp ce publicarea rămâne în urmă), limitări ale raportului cercetare–practică (reproductibilitate, practici FAIR, instrumente proprietare) și utilizarea slabă a teoriei. Limitările metodologice sunt măsurabile, nu impresioniste: într-o recenzie critică a 80 de studii HCI despre [[critical-thinking|gândirea critică]] cu IA, 42 (52%) nu au avut grup de control, iar majoritatea celorlalte s-au bazat pe autoevaluare, așa că constatările pozitive ale domeniului se sprijină pe designuri care nu pot separa efectul IA de reflecția obișnuită ([[critical-review-critical-thinking-hci-research-ai-2026]]). Codarea rezultatelor este inegală în același fel: o recenzie sistematică a 103 studii din învățământul superior și-a sortat corpusul într-o tipologie de rezultate pe patru niveluri și a plasat 56% din el într-un singur tipar condiționat, în care încrederea și motivația au crescut fără un câștig corespunzător în competență durabilă ([[generative-ai-higher-education-systematic-review-2026]]). Recunoașterea acestor limite este esențială pentru citirea critică a literaturii și pentru proiectarea unor studii mai puternice.

## Întrebări de reflecție

- Cât ai avea încredere într-un titlu precum „Tutoriatul cu IA îmbunătățește învățarea cu 30%” dacă ai afla că provine de la 30 de studenți dintr-un singur curs, la o singură instituție? Pagina semnalează generalizabilitatea și eșantioanele mici ca limite recurente — ce ai vrea să știi înainte de a acționa pe baza unei singure constatări?
- O limitare izbitoare este „problema vitezei”: IA evoluează mai repede decât se publică constatările, așa că un studiu despre o generație de modele poate descrie deja un sistem obsolet. Cum ar trebui să schimbe aceasta încrederea pe care o acorzi cercetării din educația IA?
- Multe studii se bazează pe atitudini și utilizare [[self-report-measures|autoevaluate]], care sunt părtinitoare — oamenii își supraestimează competența și raportează prea puțin utilizarea necorespunzătoare. Ai răspuns vreodată la un sondaj despre propriile competențe sau comportament într-un mod care nu corespundea realității? De ce divergează atât de des măsurătorile bazate pe percepție de performanța obiectivă?
- Pagina notează că cadre familiare precum taxonomia lui Bloom sunt adesea citite greșit ca scări stricte și că până și teorii larg folosite precum teoria [[cognitive-offloading|încărcării cognitive]] au fost contestate. Când ai văzut o teorie invocată ca adevăr stabilit într-un context în care dovezile ei erau de fapt contestate?
- Cea mai mare parte a cercetării despre IA depinde de modele proprietare, opace, ale căror date și actualizări nu le poți inspecta. Dacă nu poți verifica exact ce model a produs un rezultat, cât de mult poți avea încredere în afirmațiile construite pe el — și ce ar face constatările mai reproductibile?
- Dacă ești instructor sau designer fără timp să citești cercetarea primară, cum decizi care afirmații despre IA sunt suficient de demne de încredere pentru a-ți schimba practica — dat fiind că literatura este fragmentată, provizorie și scrisă pentru cercetători?

## Introducere

IA în educație este un domeniu care se mișcă rapid și este eterogen, iar baza sa de dovezi poartă un set distinctiv de limitări pe care cercetătorii, practicienii și factorii de decizie politică ar trebui să le cântărească atunci când folosesc orice constatare. Unele sunt comune cu literatura mai largă din [[learning-sciences|științele învățării]] și psihologie; altele sunt amplificate sau făcute unice de natura IA înseși. Această pagină le organizează în patru arii transversale.

## Limitări metodologice

Pagina de [[research-methods-aied|metode de cercetare]] a bazei de cunoștințe detaliează punctele forte și limitările fiecărui design. Câteva limite se repetă între designuri și merită o atenție deosebită:

- **Generalizabilitatea.** Constatările dintr-un singur curs, o singură instituție, disciplină sau context național pot să nu se transfere. Eșantioanele mici, de conveniență sau dintr-o singură instituție limitează validitatea externă; rezultatele unui instrument de IA rareori se extind la un instrument sau un context diferit.
- **Comparațiile transnaționale de convingeri poartă un risc de măsurare.** Un sondaj în cinci țări cu 1.405 profesori [[k-12|K-12]] a folosit traducere automată fără retroversiune sau testarea invarianței de măsurare și a măsurat îngrijorarea privind [[academic-integrity|plagiatul]] și [[creativity|creativitatea]] cu itemi unici, astfel încât contrastele dintre țări nu pot fi citite ca constructe echivalente ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).
- **Rigoarea la nivel de sinteză este o axă separată de rigoarea studiului primar.** O meta-analiză poate satisface propriile criterii de includere și totuși poate agrega studii care diferă prin design, fidelitatea implementării și măsura rezultatului fără a pondera nimic din toate acestea: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan și colegii (2026)]] afirmă răspicat că nu au folosit niciun instrument formal de evaluare a calității și au tratat criteriile de includere drept prag de rigoare, astfel încât un studiu cvasiexperimental și unul randomizat au contribuit în mod egal la estimarea agregată pentru [[stem-education|STEM]]. Aceeași recenzie arată un pericol de raportare înrudit: heterogenitatea ei este citată ca I² = 82,98% sub un model cu efecte fixe și I² = 15,75% sub modelul cu efecte aleatoare, ceea ce înseamnă că cititorii care preiau o singură cifră de heterogenitate fără modelul ei nu pot spune cât de inconsistent este de fapt corpusul. Evaluează o sinteză după modul în care a tratat dimensiunile de efect dependente, calitatea și heterogenitatea, nu doar după dacă a urmat un protocol de căutare.
- **Designul căutării stabilește numerele din titlul unei sinteze.** Într-o recenzie de scop asupra a 195 de studii de [[teacher-education|formare a profesorilor]], competența digitală și [[tpack|TPACK]] erau descriptori expliciți de căutare, în timp ce proiectarea instrucțională și evaluarea nu aveau un echivalent, așa că procentele raportate de 46,5% și 1,9% caracterizează corpusul returnat de căutare, nu domeniul ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández et al. (2026)]]).
- **Eșantioane mici.** Multe studii AIED au putere statistică redusă — prea puțini participanți pentru a detecta în mod fiabil efecte semnificative sau pentru a susține afirmațiile puternice pe care le trag uneori din ele.
- **Augmentarea datelor poate fabrica metrica din titlu.** Într-un scorer automat de eseuri a cărui partiție de antrenament conținea lucrările a 83 de studenți, răspunsurile generate de nivelul 1 — șabloane, trunchieri, eliminare de cuvinte-cheie — au ridicat acordul pentru Focus cu +0,346 kappa ponderat pătratic de la o bază de 0,028, așa că cel mai puternic semnal ordinal se sprijinea pe text pe care niciun student nu l-a scris ([[automated-essay-scoring-critical-thinking-physics-2026|Firdausi et al. (2026)]]).
- **Scorurile finale pot ascunde chiar lucrul studiat.** Într-o recenzie PRISMA a 103 studii din [[higher-ed|învățământul superior]], 56% raportau câștiguri condiționate de sprijinul de tip schelă sau de verificare, iar diferențele nule de note însoțeau adesea schimbări reale de proces — mai mult debugging, mai multe cicluri de verificare — așa că notele singure nu pot spune dacă [[generative-ai|GenAI]] a întărit sau a golit practica ([[hawi-genai-higher-ed-uses-outcomes-risks-2026|Hawi și Samaha (2026)]]).
- **Designul de validare poate fabrica numărul din titlu.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara și Halloluwa (2026)]] evaluează cincisprezece modele pe familiaritatea bazată pe EEG și arată că validarea încrucișată stratificată standard permite scurgerea temporală și raportează până la 0,9853 F1, în timp ce validarea Group K-Fold independentă de trial scade vârful la 0,6038 F1 — încă peste nivelul întâmplării, dar departe de rezultatul citat.
- **Etaloanele pot furniza eșecurile pe care le raportează.** Reevaluarea de către experți a 250 de itemi de fizică respinși a atribuit 238 (95,20%) erorilor de etalon sau de evaluator și doar 12 (4,80%) erorilor reale ale modelului, așa că rata de eroare măsurată a unui model nu poate coborî sub rata de defect a instrumentului ([[frontier-models-physics-benchmark-audit-2026|Ansari et al. (2026)]]).
- **Validitatea și măsurarea.** [[assessment-validity|Validitatea de construct]] este adesea subțire: proxy-urile pentru „învățare”, „[[student-engagement|implicare]]” sau „alfabetizare” variază larg, iar instrumentele nu sunt întotdeauna validate pentru populația sau constructul studiat. Acuratețea unui [[benchmark|etalon]] nu este egală cu eficacitatea educațională.
- **Datele de autoevaluare și de sondaj.** O parte mare a corpusului se bazează pe atitudini, motivație și utilizare autoevaluate. Autoevaluarea este supusă părtinirii — respondenții își supraestimează competența, raportează prea puțin [[ai-misuse-learning-harm|utilizarea necorespunzătoare]] și își judecă greșit propriul comportament — așa că măsurătorile bazate pe percepție divergează frecvent de performanța obiectivă (vezi [[ai-literacy-assessment-misalignment]] și [[educational-measurement]]).
- **Bogăția raportării contextului și a validării poate fi cuantificată pe o literatură întreagă.** O recenzie PRISMA-ScR a 421 de studii de NLP pe comentarii de evaluare a predării a constatat că țara era nerezolvată în 221 de studii, scopuri cu o singură instituție în 232 din 284 de cazuri rezolvate (81,7%), validare externă în 33 (7,8%) și acord între adnotatori în 54 (12,8%) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher & da Silva (2026)]]).
- **Bogăția raportării este măsurabilă, iar tipul de metodă o prezice.** În 888 de lucrări despre automatizarea recenziilor, 38,0% dintre lucrările despre software/produs din 2023 încoace nu raportau nicio evaluare, față de 9,3% dintre lucrările despre LLM, iar 52% dintre cele 118 lucrări despre LLM cu rezultate doar pozitive semnalau totuși un prag de fiabilitate neatins — tiparul din spatele celor cinci niveluri de dezvăluire ale PRISMA-LLM ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta & Lin (2026)]]).
- **Standardizarea în interiorul fiecărui set de date poate ascunde o declarație greșită despre dispersie.** Când cohortele educaționale sintetice au fost standardizate după propria dispersie, faptul că structura lor săptămânală varia de 2,6 până la 4,9 ori mai puțin decât cea a cohortelor reale a devenit invizibil pentru statisticile raportate — preprocesare de rutină, în cuvintele autorilor, nu o îngrijorare ipotetică ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake, 2026]]).
- **Etichetele generate de modele nu sunt adevăr de referință.** Acolo unde etichetele care antrenează sau evaluează un sistem sunt ele însele produse de modele de limbaj, acordul între adnotatori nu poate stabili validitatea: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] nu au validat niciodată adnotările lor de afirmații față de etichete umane de referință, iar cei 49 de clasificatori encoder pe care îi publică moștenesc acea proveniență și pot să nu fie valizi acolo unde aplicațiile diferă în dimensiuni semnificative. Schema lor a avut de asemenea rezultate strict inferioare clasificatorului fin-reglat antrenat pe date adnotate de experți (macro-F1 0,673 față de 0,76), ceea ce lasă corpusurile etichetate de experți valoroase atunci când este cerută încredere ridicată.
- **Baza de dovezi în sine este distribuită inegal.** O recenzie de scop asupra a 407 studii de [[formative-assessment|evaluare formativă]] sprijinită de tehnologie s-a bazat doar pe Web of Science și Scopus. A exclus și 61 de înregistrări pe criterii de limbă, așa că dezechilibrul geografic pe care îl raportează domeniul poate reflecta parțial ce publicații sunt indexate ([[bulut-technology-supported-formative-assessment-2026|Bulut, 2026]]).

## Problema vitezei: IA evoluează mai repede decât constatările

IA se schimbă continuu, iar concluziile trase dintr-un anumit model sau sistem pot deveni **repede depășite**. Un studiu despre o generație de [[llm|LLM]] poate să nu o descrie pe următoarea; scorurile etaloanelor, calitatea tutoriatului și până și utilitatea practică a unei constatări se schimbă pe măsură ce modelele se îmbunătățesc. Peste aceasta se adaugă faptul că **procesul de publicare este lent** — de la designul studiului până la publicarea evaluată de colegi pot trece un an sau mai mult — așa că un rezultat publicat poate descrie deja un sistem obsolet. Recenzenții și cititorii ar trebui, prin urmare, să trateze constatările AIED ca afirmații provizorii, sensibile la dată, nu ca adevăruri stabile, și să prefere lucrările recente, orientate spre replicare și explicite privind versiunea.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni și Fryer (2026)]] fac consecința concretă pentru o literatură: pentru că sistemele bazate pe [[rag|RAG]] au devenit disponibile public abia în noiembrie 2023, ei susțin că constatările despre [[intelligent-tutoring|tutoriatul inteligent]] de dinainte de 2023 — sprijinite pe sisteme NLP bazate pe reguli, potrivire de cuvinte-cheie sau euristice, care au puțină asemănare funcțională cu modelele de limbaj mari actuale — ar trebui tratate ca context istoric, nu ca dovezi direct comparabile, și raportează că recenzia lor nu a găsit niciun [[rct|RCT]] publicat care să examineze un [[conversational-ai|chatbot]] cu IA bazat pe RAG în educația universitară de licență pe un semestru academic întreg. Implicația este că întrebările fundamentale despre modul în care genAI afectează învățarea pot trebui repuse față de fiecare generație nouă de modele, în loc să fie tranșate prin agregarea rezultatelor mai vechi.

## Limitări ale raportului cercetare–practică

Câteva limitări privesc desfășurarea și infrastructura cercetării înseși:

- **Lipsa reproductibilității.** Studiile adesea nu raportează suficiente detalii (prompturi, versiuni de model, hiperparametri, date, cod de analiză) pentru ca alții să reproducă sau să verifice rezultatele — o problemă deosebită dat fiind cât de sensibilă este ieșirea LLM la prompturi și setări.
- **Practici de cercetare FAIR.** Practica deschisă și reproductibilă — date și cod **F**indabile, **A**ccesibile, **I**nteroperabile, **R**eutilizabile, preregistrare și etaloane partajate — este adoptată inegal în AIED. Aderarea slabă la principiile FAIR face mai dificilă reutilizarea, compararea și construirea pe studii.
- **Instrumente și modele proprietare.** Multă cercetare depinde de [[ai-technologies|sisteme de IA]] închise, proprietare, al căror comportament intern, date de antrenament și actualizări de model sunt opace și se pot schimba fără notificare. Aceasta limitează reproductibilitatea, face imposibilă replicarea exactă și poate lega constatările de foaia de parcurs a unui furnizor. Ridică și întrebări despre independența evaluării (vezi [[ai-ed-evaluation]]).

## Utilizarea slabă sau limitată a teoriei

O critică recurentă este că multe articole empirice au **o încadrare teoretică limitată sau depășită**. Cercetătorii pot:

- **Adopta teorii fără critică.** Cadrele sunt împrumutate pentru că sunt familiare, fără a le angaja pe deplin ipotezele, scopul sau baza de dovezi.
- **Interpreta cadrele ca secvențe fixe.** Mai multe cadre larg folosite sunt tratate ca scări ordonate pe care învățăceii trebuie să urce de la o etapă „joasă” la una „înaltă” — dar dovezile nu susțin că trebuie să începi întotdeauna de jos. De exemplu:
    - **Taxonomia lui Bloom** este adesea citită ca o ierarhie strictă (recunoaștere → aplicare → evaluare), însă obiectivele de ordin superior nu cer mai întâi exersarea celor de ordin inferior; sarcinile pot fi proiectate să angajeze evaluarea sau creația încă de la început (vezi [[cross-dataset-bloom-question-classification]]).
    - **ADDIE** și alte modele de proiectare instrucțională sunt uneori tratate ca faze liniare rigide, în loc de euristicile de planificare iterative și flexibile care ar trebui să fie (vezi [[learning-design]]).
- **Ignora teorii contestate.** Unele teorii folosite larg în AIED au fost ele însele contestate. **Teoria încărcării cognitive**, de exemplu, a fost criticată, iar afirmațiile ei empirice au fost respinse sau contestate în studii anterioare, dar continuă să fie invocată ca fundament stabilit în lucrări AIED noi.

Implicația nu este că [[theories-and-frameworks|teoriile și cadrele]] sunt inutile, ci că ar trebui folosite cu atenție la baza lor reală de dovezi, la scopul lor prevăzut și la criticile cunoscute — nu ca [[scaffolding|schele]] de la sine înțelese sau ca secvențe procedurale rigide.

## Criza dovezilor meta-analitice

Un corp crescând de meta-cercetare — recenzii care scrutează recenziile — susține că afirmațiile din titluri despre câștiguri de învățare produse de IA se sprijină pe o bază de dovezi mult mai slabă decât pare. Trei critici complementare fac cazul cu o forță neobișnuită:

- **Părtinirea sintezei pozitive este severă și cuantificabilă.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]], într-o meta-meta-analiză la nivel de studiu a 1.840 de dimensiuni de efect din 67 de meta-analize, au găsit dovezi puternice de părtinire a publicării (toate testele Egger *p* < .0001) și heterogenitate extremă între studii (τ = 0,869). Efectele ajustate pentru părtinirea publicării aveau aproximativ **o treime** din mărimea raportată de obicei (SMD = 0,196 față de o mediană de 0,67 în literatura publicată), cu un interval de predicție de la −1,521 la +1,908 — de la prejudiciu mare la beneficiu mare. Niciun subgrup de rezultat, domeniu, nivel sau rol al IA nu a arătat câștiguri consistente și nu a existat nicio diferență între studiile dinainte și după 2023. Verdictul lor: afirmațiile largi despre câștiguri generalizate de învățare sunt premature.
- **Metodele meta-analitice sunt aplicate sistematic greșit.** Auditul criminalistic al [[oneill-presumed-effective-meta-analysis-2026|lui O'Neill (2026)]] asupra a 14 meta-analize AIED cu impact mare a constatat că *niciuna* nu oferea o bază validă pentru afirmațiile sale: niciuna nu avea un construct coerent (tratând instrumentul „ChatGPT” ca și cum ar fi o singură intervenție și agregând scoruri la teste, motivație, [[self-efficacy|autoeficacitate]] și atitudini într-un singur număr de „[[learning-gains|rezultate academice]]”); heterogenitatea raportată era severă, cu I² între 77,2% și 94,4% în cele 13 meta-analize care o raportau și 12 din aceste 13 peste 80%, și nu a fost niciodată rezolvată (niciuna nu a atins dimensiunea minimă de subgrup de zece studii, cinci se bazau pe subgrupuri cu un singur studiu, iar alte trei pe subgrupuri de două); douăsprezece au tratat dimensiuni de efect dependente din același studiu ca independente, umflând dovezile aparente; și niciuna nu a evaluat valid părtinirea publicării (metricile discreditate fail-safe N și testele Egger aplicate greșit erau frecvente). Pentru că I² depinde de precizie, el nu poate stabili singur cât de departe sunt efectele reale, iar raportarea care ar arăta asta lipsea în mare parte: doar patru meta-analize raportau varianța între studii (τ²) și doar două raportau un interval de predicție, ambele incluzând zero. O majoritate (61%) dintre studiile primare verificate aleatoriu erau problematice, iar un studiu cu referințe fabricate a fost inclus de șase dintre cele 14 meta-analize.
- **„Tratamentul” este o cutie neagră.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] readuc în discuție dezbaterea media/metode pentru a susține că „ChatGPT” este un instrument, nu o metodă — a întreba dacă „îmbunătățește învățarea” este un non sequitur. Auditorind un subset din studiile din spatele meta-analizei lui Deng et al. (2025), au constatat că doar 21% dintre comparații aveau un tratament bine definit, un grup de control *și* o măsură validă a învățării; dimensiunile de efect raportate (g = 0,7) depășeau chiar pe cele ale [[intelligent-tutoring|sistemelor de tutoriat inteligent]] construite special (0,66), un semnal de alarmă că „tratamentul” era un „secret sauce” eterogen.

Convergența acestor trei critici independente este ea însăși o dovadă: prin metode, corpusuri și încadrări diferite, ele ajung la aceeași concluzie — că dimensiunile de efect AIED pozitive, mai ales din meta-analizele timpurii, reflectă probabil **părtinirea publicării, incoerența constructelor și scurtăturile metodologice** la fel de mult ca (sau mai mult decât) câștigurile reale de învățare. Aceasta nu înseamnă că instrumentele de IA nu au valoare educațională; înseamnă că dovezile *la nivel de domeniu* pentru valoarea lor sunt în prezent umflate și trebuie citite în consecință. Mută și responsabilitatea asupra [[meta-analysis-systematic-review|calității sintezei]]: o meta-analiză este doar atât de demnă de încredere pe cât sunt coerența constructelor ei, independența dimensiunilor ei de efect, adecvarea analizei moderatorilor și a heterogenității și validitatea evaluării părtinirii publicării — fiecare dintre acestea fiind, arată criticile, încălcată în mod curent.

## Citirea critică a literaturii AIED

Luate împreună, aceste limitări pledează pentru o citire critică, cu semnale multiple, a cercetării AIED: verifică dacă o constatare se generalizează și are putere statistică adecvată; verifică modul în care au fost măsurate constructele (și dacă afirmațiile se sprijină pe autoevaluare); preferă lucrările recente, explicite privind versiunea și reproductibile; și interoghează încadrarea teoretică în loc să tratezi cadrele familiare ca date. Acesta este complementul [[research-methods-aied|alegerii riguroase a metodei]] și al [[ai-ed-evaluation|evaluării]]: metodele bune și evaluarea bună sunt necesare, dar citirea cu atenție la limitări este ceea ce transformă dovezile în decizii defendabile.

## De la cercetare la practică

O limitare suplimentară, practică, este **provocarea de a aplica cercetarea în [[teacher-role|predare]] și proiectare instrucțională**. Practicienii — instructorii, [[stakeholders|designerii instrucționali]] și dezvoltatorii de cadre didactice — adesea nu au timpul sau expertiza specializată pentru a citi, aprecia și traduce cercetarea primară în decizii concrete de clasă. Literatura este mare, fragmentată și scrisă pentru cercetători; constatările sunt raportate cu un detaliu statistic și metodologic care nu este imediat acționabil; iar pentru că afirmațiile sunt provizorii (vezi problema vitezei de mai sus), un practician nu poate pur și simplu să ia un singur studiu la valoarea nominală. Aceasta creează un decalaj între ceea ce susțin dovezile și ceea ce ajunge efectiv în [[pedagogy|practica didactică]].

Scopul acestei baze de cunoștințe este să ajute la închiderea acelui decalaj — să facă mai ușor de urmărit, interpretat și aplicat în practică cercetarea despre IA în educație — prin curatarea constatărilor cu acces deschis în rezumate structurate și accesibile, conectarea lucrărilor înrudite prin [[ai-education|pagini de concept]] și semnalarea limitărilor pe care cititorii ar trebui să le cântărească. Ea își propune să sprijine [[interpreting-and-applying-aied-research|practica informată de dovezi]] în predare și proiectare instrucțională și, astfel, să scoată la iveală și lipsurile și întrebările care pot informa cercetarea și dezvoltarea noi. Înțelegerea limitelor cercetării nu este, așadar, un scop în sine: ea este ceea ce le permite practicienilor să aplice constatările în mod corespunzător și cercetătorilor să proiecteze studii mai puternice care să servească mai bine practica.

## Două capcane de audit care merită cunoscute

Două practici specifice de raportare umflă sau distorsionează o sinteză și ambele sunt vizibile în registrul publicat, nu ipotetice.

**Cifra heterogenității depinde de model, iar modelul este rar citat.** Heterogenitatea unei recenzii este citată ca **I² = 82,98% sub un model cu efecte fixe și I² = 15,75% sub modelul cu efecte aleatoare**. Acestea descriu aceleași date. Un cititor care preia o singură cifră de heterogenitate fără modelul ei a primit o afirmație tehnică fără nicio interpretare atașată, iar diferența dintre „cea mai mare parte a varianței este neexplicată” și „puțină varianță este neexplicată” este diferența dintre a arunca și a avea încredere în domeniu.

**Procentul din titlu poate fi un artefact al termenilor de căutare.** O recenzie de scop asupra a 195 de studii de formare a profesorilor a făcut din competența digitală și [[tpack|TPACK]] descriptori expliciți de căutare, în timp ce proiectarea instrucțională și evaluarea nu aveau un termen echivalent, așa că procentele raportate de **46,5% și 1,9%** sunt rate pe care interogarea însăși le-a construit. O afirmație de prevalență este doar atât de semnificativă pe cât este căutarea din spatele ei.

**Iar rata de bază este numărul pe care nimeni nu îl afirmă.** Limitările metodologice de aici sunt măsurabile, nu impresioniste: într-o recenzie critică a 80 de studii HCI despre gândirea critică cu IA, **42 (52%) nu au avut grup de control**, iar majoritatea celorlalte s-au bazat pe autoevaluare. Când peste jumătate dintre constatările pozitive ale unui domeniu provin din designuri care nu pot separa efectul IA de activitatea obișnuită, priorul adecvat pentru orice constatare individuală este scepticismul, nu acceptarea provizorie.

## Idei greșite frecvente

- **„Secțiunile de limitări sunt clișee.”** Limitările metodologice sunt **măsurabile, nu impresioniste**: într-o recenzie critică a **80 de studii HCI** despre gândirea critică cu IA, **42 (52%) nu au avut grup de control**. O numărătoare precisă este ceea ce face limitarea acționabilă.
- **„Heterogenitatea este un singur număr pe care îl poți cita.”** Aceeași recenzie arată un pericol de raportare: heterogenitatea este citată ca **I² = 82,98% sub un model cu efecte fixe și I² = 15,75% sub modelul cu efecte aleatoare**. Aceleași date dau o poveste de nouă puncte sau una de două puncte, în funcție de modelul ales, așa că un I² citat fără modelul lui este neinterpretabil.
- **„Un efect raportat mare este numărul în care să ai încredere.”** Un titlu precum un efect de la **30 de studenți într-un curs, într-un singur sit** este forma comună a unei afirmații fragile, iar numărul de studii fără grupuri de control arată cât de des rămâne această fragilitate neraportată.

## Concepte conectate

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[rct]]
- [[meta-analysis-systematic-review]]
- [[ai-education]]
- [[icap-framework]]
- [[learning-design]]
- [[llm]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[theory-development-aied]] — Dezvoltarea teoriei în IA în educație

## Articole conectate

- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — Chatboturile de IA în învățământul superior: compararea așteptărilor cu dovezile (Thoeni & Fryer 2026)

- [[ground-truth-reliability-aied]] — Fiabilitatea și validitatea adevărului de referință în evaluare
- [[ai-literacy-assessment-misalignment]] — Alfabetizarea în IA autoevaluată față de cea bazată pe performanță
- [[machines-misread-pedagogical-quality]] — De ce mașinile citesc greșit calitatea pedagogică
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Limitele critice ale tutorilor de IA și utilizarea teoriei
- [[cross-dataset-bloom-question-classification]] — Taxonomia lui Bloom și clasificarea întrebărilor
- [[eeg-familiarity-automated-assessment-2026]] — Automatizarea evaluării cursanților: predicția familiarității bazată pe EEG
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT în educație: un efect în căutarea unei cauze (critica comparației media)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analiză: efectele IA ajustate pentru părtinirea publicării, ~1/3 din mărimea raportată
- [[oneill-presumed-effective-meta-analysis-2026]] — Presupus eficace: audit criminalistic al 14 meta-analize AIED
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: un cadru empiric de raportare pentru recenziile sistematice asistate de IA
- [[frontier-models-physics-benchmark-audit-2026]] — Cât de bune sunt modelele de frontieră la fizică? Reevaluarea de către experți dezvăluie evaluări defectuoase și aproape-saturarea etaloanelor de vârf
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Criteriile de includere folosite drept prag de rigoare și o cifră de heterogenitate care se schimbă cu modelul (Doğan et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Un trial de clasă randomizat pe clustere al cărui rezultat de performanță nu a atins semnificația (Rücker & Becker-Genschow 2025)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutoriatul cu IA și cel uman produc câștiguri GRE echivalente
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluarea focalizării feedbackului și a adaptivității pedagogice în feedbackul generat de LLM la scrierea studenților
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: scheme bazate pe afirmații pentru codarea auditabilă a dialogurilor educaționale
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — De la clasificarea sentimentelor la feedback acționabil și responsabil: o recenzie de scop și o hartă a dovezilor despre NLP în evaluarea predării de către studenți, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — Ce ratează metricile de fidelitate: o verificare structurală a datelor educaționale sintetice

- [[digital-competence-ai-responsive-pedagogy-2026]] — Recenzie de scop a 195 de studii de formare a profesorilor în care designul șirului de căutare modelează frecvențele raportate
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Sondaj transnațional al profesorilor K-12: itemi traduși automat, măsuri de îngrijorare cu item unic, fără testarea invarianței
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Recenzie sistematică a 103 studii GenAI din învățământul superior: 56% câștiguri condiționate, notele maschează schimbarea de proces (Hawi & Samaha 2026)
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Augmentarea datelor poate fabrica metrica din titlu
