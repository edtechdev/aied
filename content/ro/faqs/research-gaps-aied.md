---
title: "Care sunt lacunele notabile din literatura de cercetare despre IA în educație?"
created: "2026-08-24T14:10:00-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T15:41:27-04:00"
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Termenul de depunere a unei cereri de finanțare este peste opt zile, iar secțiunea de context are nevoie de o singură frază despre ceea ce acest domeniu încă nu știe. Sau un coleg a spus unui comitet că tutoriatul cu IA ridică rezultatele, citând un experiment de doi ani în 18 școli gimnaziale, iar tu ești persoana care trebuie să spună ce poate susține acel studiu. Sau îți alegi întrebarea de dizertație și fiecare versiune a ei pare deja făcută.

Lacunele care contează privesc tăria, specificitatea și aplicabilitatea. IA poate îndeplini sarcini educaționale; întrebările deschise sunt dacă un anumit design produce un beneficiu durabil, pentru cine, prin ce mecanism și în ce condiții. Această distincție decide două lucruri pe biroul tău: ce să studiezi în continuare și ce să nu mai afirmi între timp. [[limitations-in-aied-research|Limitările cercetării în IA educațională]] este catalogul din spatele acestei pagini. Nici dovezile despre [[intelligent-tutoring|sistemele de tutoriat inteligent]], despre [[learning-analytics|analitica]] predictivă, despre [[generative-ai|IA generativă]] și despre agenții autonomi nu sunt interschimbabile, iar cercetarea despre folosirea IA pentru a sprijini învățarea diferă de cercetarea despre predarea oamenilor despre IA, după cum explică prezentarea generală [[ai-education|IA în educație]].

## Pe scurt

**1.** Compară IA cu o alternativă non-IA puternică, care ține constante curriculumul, exersarea și sprijinul, și spune ce a adăugat IA.

**2.** Măsoară performanța întârziată, fără asistență, și afirmă că performanța asistată nu este un câștig de învățare.

**3.** Raportează care componentă a pachetului a făcut treaba și ce mecanism susții.

**4.** Validează fiecare scor automat și fiecare învățăcel simulat față de învățăcei reali, inclusiv învățăcei din afara eșantionului tău de dezvoltare.

**5.** Enunță granița populației, pentru că o medie agregată nu răspunde la o întrebare de echitate.

**6.** Descrie aranjamentul destul de bine încât altcineva să îl poată reconstrui.

## Alege o comparație care izolează IA

Există experimente riguroase în sala de clasă, așa că „avem nevoie de studii randomizate” nu mai numește lacuna. Întrebarea mai ascuțită este dacă componenta de IA adaugă valoare dincolo de exersarea suplimentară, de materialele mai bune, de feedbackul dat la timp sau de mai mult sprijin instrucțional.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] raportează câștiguri modeste la rezultate în 18 școli gimnaziale, alături de o implicare substanțială redusă în conversațiile cu tutorul, iar autorii notează că câștigurile semănau cu cele obținute prin exersare structurată fără IA. Aceasta este o dovadă despre un pachet implementat și nu poate izola ce a adăugat IA din interiorul lui.

Problema de dedesubt este conceptuală, nu doar empirică. „ChatGPT” numește un instrument, nu o metodă. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] au auditat 19 comparații de tip ChatGPT în educație: doar 4 (21%) au specificat toate trei elementele, adică un tratament replicabil, un control operaționalizat și o măsură validă a învățării (74% tratament bine definit, 42% control bine definit, 53% un rezultat de învățare). Când IA nouă vine împreună cu activități noi, feedback nou sau un design nou de interfață, mediul și metoda se confundă și niciun efect nu aparține IA.

Ce ar lămuri lucrurile: comparații cu alternative realiste non-IA, cu curriculumul, oportunitățile de exersare și sprijinul ținute cât mai constante, plus replicări independente între instituții, cadre didactice, discipline și modele. Metodele răspund aici la întrebări diferite. Cercetarea [[qualitative-research|calitativă]] și cea [[design-based-research|bazată pe design]] explică implementarea, în timp ce experimentele bine proiectate susțin afirmațiile cauzale, după cum arată [[research-methods-aied|Metodele cercetării de eficacitate]].

## Măsoară învățarea după ce instrumentul a dispărut

Munca îmbunătățită în timpul folosirii IA nu este dovadă că învățarea supraviețuiește după ce asistența se termină. Sintezele despre [[learning-gains|câștigurile de învățare]] și despre [[cognitive-offloading|descărcarea cognitivă]] trag aceeași linie între performanța asistată, cunoașterea reținută, raționamentul independent și transfer.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] arată problema de măsurare într-un experiment randomizat cu peste 6.000 de elevi de gimnaziu. O regulă de stăpânire de trei răspunsuri corecte la rând a ridicat succesul definit de platformă fără a produce, prin ea însăși, câștiguri de învățare detectabile o săptămână mai târziu. Cea mai puternică dovadă la testul întârziat a apărut când IA a stat în interiorul fluxului de stăpânire și s-a concentrat pe materialul exersat.

Lacuna rămasă privește traiectoriile de competență, iar un singur post-test adăugat nu o închide. Nimeni nu a stabilit reținerea pe parcursul lunilor, transferul între sarcini, performanța după retragerea instrumentului sau acuratețea învățăceilor în a-și judeca propria cunoaștere, iar domeniul nu a separat eșecul de a dobândi o competență de deteriorarea uneia deja stabilite. Cercetarea descărcării trebuie încă să arate când delegarea sprijină aceste traiectorii și când înlocuiește exersarea care le construiește.

## Află care parte a pachetului și-a făcut treaba

„Învățarea sprijinită de IA” împachetează de obicei mai multe schimbări: feedback nou, reflecție adăugată, discuție între colegi, secvențe de sarcini diferite, stimulente de evaluare modificate. Un pachet care reușește nu îți spune care componente au fost necesare.

[[genai-feedback-design-multisite-experiment|Designul de feedback GenAI centrat pe om]] este un progres real la această întrebare. Dintre cei 1.176 de studenți din anul întâi, designurile reflexive și hibride au depășit [[ai-feedback-quality|feedbackul de IA]] direct la transferul întârziat fără IA. Condiția hibridă combina autoevaluarea, [[peer-assessment|feedbackul între colegi]] și critica IA. Asta separă felul în care feedbackul este organizat și folosit de întrebarea dacă studenții au acces la feedback.

Rămân deschise: contribuția și momentul primelor încercări independente, autoexplicarea, contribuția colegilor, feedbackul corectiv, indiciile și retragerea treptată a asistenței, plus modul în care fiecare dintre ele interacționează cu [[prior-knowledge|cunoașterea prealabilă]] și cu dificultatea sarcinii.

Lacuna teoretică merge în paralel. A numi o [[learning-theories|teorie a învățării]] nu înseamnă a o testa. Un studiu are nevoie de o predicție teoretică legată de un comportament specific al sistemului și de un proces de învățare măsurabil, iar medierea statistică informează acea explicație fără a stabili un mecanism cauzal. [[theory-development-aied|Dezvoltarea teoriei în IA în educație]] și [[scaffolding|sprijinul de tip schelă]] duc argumentul mai departe.

## Validează măsura înainte de a o interpreta

Constructe precum implicarea, [[critical-thinking|gândirea critică]], alfabetizarea în IA și [[personalized-learning|personalizarea]] sunt măsurate inconsecvent în această literatură. Autodeclarările descriu percepții; ele nu pot ține locul competenței demonstrate. Acuratețea tehnică, calitatea rezultatului evaluată de experți și învățarea studenților sunt trei ținte de evaluare diferite. [[educational-measurement|Măsurarea educațională]] și [[ai-ed-evaluation|Evaluarea în IA educațională]] tratează aceste distincții ca fundamentale.

O lacună stă în interiorul problemei de măsurare: [[ai-technologies|sistemele de IA]] folosite pentru a evalua alte sisteme de IA. În [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]], [[simulating-students|studenții simulați]] abandonau frecvent [[misconceptions|concepțiile greșite]] repartizate, după feedback corectiv, indiferent dacă feedbackul aborda sau nu concepția greșită, așa că răspunsurile lor puteau face o instruire ineficace să pară reușită. Antrenamentul țintit a îmbunătățit măsura de fidelitate a studiului, iar o îmbunătățire pe acea măsură nu este validare față de învățarea umană.

Ce lipsește este validarea întregului lanț de evaluare, de la comportamentul modelului la judecata [[pedagogy|pedagogică]], la răspunsul învățăcelului și la rezultatul educațional, pe învățăcei și în contexte care nu au fost folosite în dezvoltare. Judecata umană are nevoie de aceeași scrutare, pentru că acordul între evaluatori nu este dovadă că a fost evaluat constructul corect.

## Decide ce poate certifica încă o evaluare

IA creează două probleme de evaluare conectate: ajută la producerea lucrării evaluate și poate influența felul în care acea lucrare este notată.

[[ai-agents-complete-lms-assessment-validity-2026|Studiul bazei de cunoștințe despre agenții de IA care îndeplinesc sarcini evaluate în LMS]] documentează agenți care navighează un curs universitar live și finalizează activități evaluate. Asta demonstrează o capacitate care contestă presupunerile despre dovezile produse de studenți. Nu stabilește cât de răspândită este o astfel de utilizare și nu invalidează evaluarea asincronă ca categorie.

Întrebarea de cercetare este ce designuri mai susțin concluzii defendabile despre învățăcel. [[eportfolio|Portofoliile]], reflecțiile, trimiterile în etape și jurnalele de activitate au nevoie de validare ca dovezi, în loc să se presupună că stabilesc autoratul sau înțelegerea. Studiile ar trebui să testeze combinații de dovezi față de competența observată independent, ținând cont de accesibilitate, volum de muncă, confidențialitate și anxietatea studenților. [[assessment-validity|Validitatea evaluării]] păstrează detaliile.

Pentru [[automated-assessment|notarea automată]], [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] raportează dezacord sistematic între modelele folosite ca atare și evaluatorii umani. Constatările sunt specifice configurației și arată de ce consistența internă nu poate susține o afirmație de validitate.

[[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] propune evaluarea separată a ceea ce învățăceii trebuie să facă independent, a ceea ce pot realiza cu IA și a ceea ce trebuie să verifice și să apere. Este un cadru care așteaptă validare empirică.

Detecția este cea mai clară fundătură din acest domeniu. [[karr-ai-detection-humanization-2026|Karr et al. (2026)]] au rulat două detectoare comerciale la τ = 0,50 pe 642 de rezumate științifice publicate în engleză. Editarea ușoară cu IA, conformă cu ghidurile, a fost semnalată în proporție de 38-80%. Originalele nemodificate din 2023-25 au fost semnalate în proporție de 9-15%, cu lucrările non-[[stem-education|STEM]] mult peste cele STEM la p < 0,001. După umanizare, instrumentele au prins mai puțin de 4% dintre rescrierile etichetate ca IA, o rată de fals negativ de peste 96%. Un scor care pedepsește asistența onestă și ratează eludarea nu poate fundamenta o concluzie despre un învățăcel.

## Nu citi scorurile de alfabetizare ca dovezi de comportament

Cercetarea despre intervențiile de alfabetizare în IA este suficient de substanțială pentru a fi sintetizată. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education]] acoperă 59 de studii și 7.211 participanți, raportează un efect mediu pozitiv și raportează totodată o variație substanțială, cu un interval de predicție larg care traversează zero. Rezultatele axate pe cunoaștere au ieșit mai puternice decât cele privind competențele, atitudinile sau etica.

Lacuna mai ascuțită este dacă instruirea în alfabetizare schimbă ceea ce fac oamenii când folosesc IA, iar încă un cadru de competențe nu o va închide. Pot învățăceii să recunoască afirmații nesușinute, să verifice surse, să respingă sugestii înșelătoare, să observe acordul nepotrivit și să aleagă când să nu delege? Rezistă ceva din toate acestea sub presiunea timpului și se transferă la sisteme și discipline nefamiliare?

A lămuri asta cere evaluare bazată pe performanță, combinată cu observarea deciziilor reale și cu urmărire întârziată, ținând separate cunoașterea conceptuală, competența operațională și judecata critică, în loc să fie agregate la un loc. [[ai-literacy|Alfabetizarea în IA]] și [[trust-calibration|Calibrarea încrederii]] oferă distincțiile.

## Raportează pe cine lasă la o parte constatarea

Constatările dintr-un curs, o instituție, o limbă sau o populație de învățăcei rareori autorizează decizii în altă parte, o problemă pe care sinteza [[limitations-in-aied-research|Limitările cercetării în IA educațională]] o tratează ca recurentă. Cum variază efectele între stadiul de dezvoltare, disciplină, cunoaștere prealabilă, dizabilitate, limbă și condiții de resurse rămâne în mare parte nemăsurat.

Cercetarea despre echitate trebuie să separe și ea accesul, competențele și rezultatele. Sinteza despre [[digital-divide|decalajul digital]] spune clar că dispozitivele și accesul la instrumente nu stabilesc o capacitate egală de a beneficia. [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] a urmărit 752 de elevi din învățământul secundar inferior din Hong Kong: decalajele de pregătire psihologică s-au îngustat, în timp ce diferențele la un test obiectiv de alfabetizare în IA au persistat. Fiecare grup s-a îmbunătățit, iar inegalitatea nu s-a închis. Profilele de învățare prealabilă nu au fost repartizate aleatoriu, așa că rolul lor cauzal rămâne necunoscut.

Acoperirea este subțire în locuri specifice. [[differential-effects-across-learner-groups|Efectele diferențiale între grupurile de învățăcei]] numără literatura după populație: învățăceii de limbă a doua și multilingvi, împreună cu studenții cu dizabilități, sunt firele cele mai adânci, genul și neurodiversitatea urmează, studenții de prima generație și studenții internaționali au câte un studiu fiecare în acest corpus, studenții supradotați și cu performanțe înalte sunt practic necercetați, iar învățăceii refugiați, imigranți și strămutați nu apar în niciunul. O bază de dovezi cu această formă nu poate răspunde la o întrebare de echitate prin agregare.

Capacitatea variază și în interiorul unui singur sistem național. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] au evaluat integrarea IA în 45 de universități nigeriene și au găsit o adoptare generală moderată (M = 4,79, interval 1,83-7,83 pe o scală de 10 puncte), tipul instituției nereușind să prezică integrarea odată ce vârsta și geografia au fost controlate (vârsta β = 0,43; localizarea în sud-vest β = 0,31). Capacitățile interne s-au corelat între ele la r = 0,79-0,80, iar colaborările internaționale cu parteneriatele industriale la r = 0,74, așa că instituțiile conectate acumulează avantaje cumulative. Ce designuri de construire a capacității schimbă rezultatele în instituțiile mai noi și mai puțin conectate nu a fost testat.

Prioritatea de cercetare este identificarea designurilor care reduc diferențele în capacitatea demonstrată, în participare și în [[agency|agentivitate]], cu rezultatele pe subgrupuri și poverile raportate alături de câștigurile medii. Accesibilitatea are propria întrebare nerezolvată: dacă un design înlătură o barieră în calea participării sau înlocuiește o capacitate pe care învățăcelul ar trebui să o dezvolte. Vezi [[equity-in-ai-education|Echitatea în educația cu IA]] și [[accessibility|accesibilitatea]].

## Spune cine deține controlul și când se schimbă

Pe măsură ce sistemele planifică, inițiază acțiuni, păstrează memorie și coordonează instrumente, întrebarea educațională devine cine ar trebui să controleze care părți ale procesului de învățare și când ar trebui să se deplaseze acel control.

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] cartografiază 474 de studii și găsește validare longitudinală limitată, concentrare în [[higher-ed|învățământul superior]] și în STEM, plus o integrare slabă a teoriei educaționale: doar 29% dintre studiile analizate se bazau explicit pe teorie educațională, o constatare despre acel corpus, nu despre toată cercetarea din domeniu.

Întrebările deschise urmează. Ajutorul inițiat de învățăcel produce rezultate diferite de ajutorul inițiat de agent? Poate fi retras sprijinul pe măsură ce competența se dezvoltă, fără pierderi? Își păstrează învățăceii capacitatea de a contesta sistemul? Sintezele despre [[agentic-ai|IA agentică]] și [[human-ai-collaboration|colaborarea om-IA]] adaugă intervenția [[teacher-role|profesorului]] și responsabilitatea în contexte cu mai mulți agenți, unde nimeni nu a stabilit cine răspunde pentru decizia unui agent. O autonomie mai mare este o alegere de design pedagogic cu o bază de dovezi încă de construit.

## Testează eșecurile de siguranță pe învățăcei reali

Siguranța educațională depășește acuratețea factuală și cererile interzise. Un tutor poate da un răspuns corect în timp ce înlătură oportunitatea învățăcelului de a raționa, consolidează o concepție greșită sau construiește dependență. [[pedagogical-safety|Siguranța pedagogică]] acoperă constructul.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] identifică eșecuri, inclusiv divulgarea excesivă a răspunsurilor și abandonarea sprijinului de tip schelă, cu substanțial mai multe eșecuri în testarea cu mai multe tururi. Sunt constatări de [[benchmark|referință]] în condiții specificate, nu estimări ale frecvenței cu care apare prejudiciul în sălile de clasă.

Ce se întâmplă când acele eșecuri întâlnesc învățăcei reali pe o utilizare susținută este necunoscut. Care produc confuzie temporară, care produc concepții greșite persistente, care reduc motivația și care slăbesc capacitatea independentă nu a fost măsurat. Nimeni nu a stabilit nici ce garanții reduc acele riscuri fără a produce refuz excesiv sau frustrare. Munca pe termen mai lung are nevoie și de încredere, de disponibilitatea de a căuta ajutor uman, de [[agency|agentivitatea învățăcelului]] și de relațiile cu colegii și profesorii ca rezultate. Pentru copii, asta cere studii adecvate vârstei care leagă comportamentul sistemului de rezultate educaționale și relaționale.

## Separă adoptarea de implementare

Capacitatea tehnică nu stabilește că un instrument este folosit bine, iar dezvoltarea profesională nu ajunge automat la studenți. Veriga lipsă merge de obicei de la pregătirea profesorului, prin practica schimbată din sala de clasă, la rezultatele studenților.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]] este un studiu multinivel cu 46 de profesori și 2.832 de studenți. Cunoașterea pedagogică a IA a fost asociată cu percepțiile și intențiile studenților, iar niciuna dintre componentele de cunoaștere a profesorului măsurate nu a fost asociată direct cu câștigurile de cunoaștere în IA ale studenților. Asocieri de acest fel nu stabilesc că o intervenție de formare ar cauza o învățare mai bună.

Întrebarea deschisă este ce combinații de coaching, [[curriculum-design|aliniere la curriculum]], rutine de revizuire, programare și sprijin instituțional produc o îmbunătățire susținută, iar studiile trebuie să observe predarea efectivă, nu încrederea profesorului sau intenția de a adopta. [[teacher-ai-competency|Competența profesorului în IA]] și [[educational-development|Dezvoltarea educațională]] acoperă terenul.

Costul comparativ și eficiența sunt o a doua lacună. Evaluările ar trebui să ia în calcul timpul de verificare, corectare, formare, supervizare, întreținere și implementare alături de costurile abonamentelor și ale utilizării modelelor și să compare oferta sprijinită de IA cu alternative realiste. Întrebarea care merită un răspuns este ce beneficiu educațional livrează aranjamentul complet pentru resursele pe care le consumă.

## Tratează documentele de guvernanță ca intenții

Principiile [[ethics|etice]] și cadrele de guvernanță sunt necesare, iar existența lor nu stabilește că schimbă practica sau că protejează învățăceii.

[[agarwal-ethical-values-norms-aied-2026|Agarwal et al.]] au analizat 25 de articole și au găsit utilizatorii finali în mare parte pasivi în literatura despre etică, cu vocile studenților practic absente, alături de tensiuni între valori și asimetrii de putere între părțile interesate. Asta descrie literatura analizată. Nu este o afirmație că studenții nu participă niciodată la designul IA în educație.

Ce lipsește sunt dovezile despre ce aranjamente de guvernanță fac o diferență măsurabilă. Participarea studenților și a profesorilor schimbă achizițiile, designul instrumentelor, regulile de evaluare sau remediile după o greșeală? Procedurile de revizuire umană prind erorile cu consecințe? Alternativele la folosirea IA sunt cu adevărat disponibile celor cărora li se spune să o folosească? Cercetarea despre confidențialitate are o lacună paralelă: valoarea educațională a colectării suplimentare de date este de obicei presupusă, iar designurile care minimizează datele au fost rareori comparate cu cele mai intruzive pe învățare și pe autonomia învățăcelului. Vezi [[governance|Guvernanța IA]] și [[privacy|confidențialitatea]].

## Fă studiul reconstruibil

IA în educație are o problemă de reproductibilitate neobișnuit de grea. Studiile omit prompturile, versiunile modelelor, setările, codul și detaliile instrucționale, iar sistemele proprietare se pot schimba în timpul sau după o intervenție. [[limitations-in-aied-research|Limitările cercetării în IA educațională]] documentează tiparul.

A reconstrui un studiu înseamnă a descrie aranjamentul instrucțional la fel de bine ca modelul: sarcinile de învățare, sursele de conținut, acțiunile permise, interfața, sprijinul profesorului, condițiile de evaluare și tot ce s-a schimbat în timpul implementării. Reproducerea unei configurații și testarea faptului dacă principiul ei pedagogic se transferă în alta sunt realizări separate, iar îndrumările de raportare din [[research-methods-aied|Metodele cercetării de eficacitate]] le abordează pe amândouă.

Sinteza are nevoie de aceeași grijă. [[meta-analysis-systematic-review|Meta-analiza și sinteza sistematică]] enumeră studiile primare slabe, biasul de publicare, intervențiile eterogene și rezultatele incompatibile ca limite ale concluziilor agregate, iar un singur „efect al IA” mediu ascunde distincțiile de care au nevoie educatorii. Recenziile ar trebui să separe performanța asistată de învățarea independentă, să distingă tipurile de intervenție și condițiile de comparație și să facă deciziile de codare auditabile.

Literatura de sinteză este ea însăși o lacună. [[oneill-presumed-effective-meta-analysis-2026|Auditul forensic al lui O'Neill (2026)]] asupra a 14 [[meta-analysis-systematic-review|meta-analize]] cu impact mare a constatat că niciuna nu a oferit o bază validă pentru afirmațiile ei. Niciun construct coerent: un instrument tratat ca o singură intervenție, rezultate multidimensionale agregate. Biasul de publicare a fost evaluat în mod invalid în toate cele 14. I² raportat a mers de la 77,2% la 94,4% în fiecare analiză care l-a raportat, cu 12 din 13 peste 80%. 61% dintre studiile primare verificate aleatoriu aveau probleme de validitate. Acele 14 analize au strâns peste 2.000 de citări în aproximativ 16 luni, iar o meta-analiză retrasă era încă citată ca autoritară în 60% dintre lucrările care o citau după retragere, fără nicio recunoaștere. Din 14 lucrări care citează o altă meta-analiză auditată, al cărei rezumat anunța un efect mare al „educației în IA” și care măsura de fapt predarea despre IA către studenți, doar 2 au citat-o adecvat, 8 au citit-o ca dovadă că integrarea IA îmbunătățește învățarea, iar 4 au greșit în alte feluri. Auditul cere revistelor să impună transparență completă a datelor pentru meta-analize (protocoale de căutare, caracteristici codate ale studiilor, statistici extrase, cod analitic), cere editorilor să nu trateze un istoric de publicare ca dovadă a competenței de recenzare și cere ca retragerile să fie vizibile oriunde un articol este descoperit, exportat sau citat. Reproducibilitatea acoperă lanțul de sinteză, nu doar studiul individual.

Instructorii care vor versiunea la nivel de sală de clasă pot urma [[evaluating-ai-interventions-methods]].

## Ce greșesc cercetătorii și cadrele didactice aici

**Domeniul duce lipsă de studii.** Duce lipsă de studii specificate. Există experimente multi-site, studii randomizate cu mii de studenți și 14 meta-analize cu impact mare. Doar 21% dintre comparațiile auditate au definit tratamentul, controlul și rezultatul destul de bine încât să atribuie un efect.

**A numi o teorie înseamnă a o testa.** O citare a unei teorii a învățării este o decizie de încadrare. Un test are nevoie de o predicție, de un comportament al sistemului care o implementează și de o măsură de proces care ar putea ieși în sens invers.

**Un scor automat validat este un rezultat validat.** Acordul cu codificatorii umani stabilește consistența cu acei codificatori. Studenții simulați s-au îmbunătățit pe o măsură de fidelitate fără a fi validați față de învățarea umană, iar lanțul de la comportamentul modelului la rezultat rămâne neconstruit.

**Accesul este echitate.** În studiul din Hong Kong, decalajele de pregătire psihologică s-au îngustat în timp ce diferențele la testele obiective au rezistat, iar fiecare grup s-a îmbunătățit fără ca inegalitatea să se închidă. Dispozitivele și licențele schimbă cine poate ajunge la instrument.

**Mai multă autonomie este progres.** Independența mai mare a agenților este o alegere de design. Cu 29% din 474 de studii agentice care se sprijină pe teorie educațională și cu validare longitudinală limitată, nimeni nu a arătat că mutarea controlului la sistem îmbunătățește învățarea.

## Obiecțiile pe care le vei auzi

**„Lacuna este doar că avem nevoie de mai multe studii randomizate.”** Există destule acum, iar problema stă în amonte de etichetele de design: un studiu al unui pachet care îmbină feedback nou, sarcini noi și o interfață nouă nu poate atribui nimic IA. Condiția de comparație este locul unde se face munca.

**„Nu pot face o urmărire de mai mulți ani.”** Atunci măsoară o singură ocazie întârziată, fără asistență, și spune ce interval acoperă. O săptămână este o constatare reală, iar studiul regulii de stăpânire și-a obținut rezultatul la o săptămână, integrând IA în fluxul de lucru și concentrându-se pe materialul exersat.

**„Randomizarea este imposibilă în cursul meu.”** Munca bazată pe design și cea calitativă răspund la întrebări de implementare la care studiile randomizate nu pot răspunde, iar domeniul are nevoie de amândouă. Acolo unde atribuirea aleatorie este posibilă, ea poartă în continuare afirmația cauzală.

**„Mărimea efectului agregată îmi spune deja ce funcționează.”** Cele 14 meta-analize auditate au definit tratamentul ca un instrument, au agregat rezultate incompatibile și au raportat I² peste 80% în 12 din 13 analize care l-au dat. Numărul agregat descrie un set de studii cu o problemă de construct.

**„Studenții simulați sunt mai ieftini, așa că validarea lor poate aștepta.”** În studiul despre servilism, studenții simulați abandonau concepțiile greșite indiferent dacă feedbackul le aborda, ceea ce este exact modul de eșec care face un tutor ineficace să pară eficace.

## Ce să faci săptămâna aceasta

**1.** Scrie într-o singură frază condiția de comparație a studiului pe care îl planifici. Dacă este „ca de obicei”, revizuiește-o înainte de a revizui orice altceva.

**2.** Adaugă o măsură întârziată, fără asistență, la design și numește intervalul în secțiunea de metodă.

**3.** Scrie granița populației în enunțul de design, apoi în rezumat, așa încât afirmația să nu poată călători mai departe decât eșantionul.

**4.** Ia cea mai puternică afirmație din draftul tău actual și șterge versiunea pe care măsura ta nu o poate susține. Păstrează fraza despre plafon.

**5.** Pentru orice scor automat sau învățăcel simulat din studiu, numește standardul uman și pe cel care adjudecă înainte de a începe colectarea datelor.

## Încotro mai departe

[[reporting-interpreting-aied-research]] este omologul de raportare al acestei pagini, iar [[research-methods-aied|Metodele cercetării în IA în educație]] acoperă alegerile de design din spatele fiecărei lacune. [[evaluating-ai-interventions-methods]] tratează măsurile și designurile de comparație, [[checking-whether-educational-ai-works]] este versiunea scurtă a întrebării despre eficacitate, iar [[does-ai-help-students-learn]] adună ce se știe despre învățarea durabilă. [[theory-development-aied]] și [[equity-ethics-pedagogical-safety-research]] duc mai departe firele teoretice și cele de echitate.
