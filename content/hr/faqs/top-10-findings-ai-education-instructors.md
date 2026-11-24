---
title: "Kojih je 10 najvažnijih nalaza istraživanja umjetne inteligencije u obrazovanju koje bi nastavnici trebali znati?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
updated: "2026-11-14T18:10:00-05:00"
type: faq
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
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

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Ovih se deset studija izravno tiče odluka koje nastavnici donose: što zadati, kako to ocijeniti, koje alate kupiti, kako ih izraditi i kako prepoznati je li do učenja došlo. Svaki unos donosi studiju, njezin rezultat i praksu koju mijenja.

## Deset studija

**1. Običan pristup chatbotu smanjio je rezultate ispita za 17% ([[generative-ai-guardrails-harm-learning|Bastani i sur., 2025]]).**

Gotovo 1.000 srednjoškolaca u Turskoj, u otprilike 50 razreda, prošlo je kroz tri matematičke sesije s istim sadržajem. Jedna je skupina tijekom vježbe imala običan prozor za chat s GPT-4. Druga je imala tutora izgrađenog na istom modelu, sa [[guardrails|zaštitnim ogradama]] koje su napisali nastavnici: nagovještaji umjesto odgovora, s točnim rješenjem i uobičajenim pogreškama ugrađenima u upit. Kontrolna skupina nije imala umjetnu inteligenciju. Svaka je sesija završila [[summative-assessment|ispitom bez knjiga]] na sličnim zadacima, bez alata.

Skupina s običnim chatom imala je 48% bolji rezultat od kontrolne tijekom vježbe i 17% slabiji na ispitu. Studenti koji nikada nisu dotaknuli umjetnu inteligenciju postigli su bolji rezultat od njih. Zaštićena je skupina napredovala 127% u vježbi i bila izjednačena na ispitu. Šteta je nestala, a nikakva prednost u učenju nije se pojavila na njezinu mjestu. Zapisnici razgovora objašnjavaju tu podjelu: nezaštićena je skupina tražila odgovore i stala, dok je zaštićena skupina pokušavala riješiti zadatke, tražila nagovještaje i poboljšavala se već u prvoj sesiji.

Za nastavnike, „dopuštena umjetna inteligencija“ nije politika. Sučelje odlučuje hoće li alat postati kanal za nagovještaje ili stroj za odgovore, a opći chatbot po defaultu postaje drugo. Prozor za chat ostavljen otvoren tijekom vježbe najviše šteti studentima koji se na njega najviše oslanjaju.

Administratori mogu taj isti rezultat suprotstaviti nabavnoj tvrdnji da jači model rješava pitanje pedagogije. Model je bio identičan u obje grane.

Povezano: [[training-ai-tutors-to-guide-rather-than-answer|Osposobljavanje tutora da vodi, a ne da daje odgovore]]

**2. Tutor izgrađen na pedagogiji samog kolegija nadmašio je razred s aktivnim učenjem, uz manje vremena ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin i sur., 2025]]).**

Physical Sciences 2 uvodni je kolegij fizike na Harvardu za studente prirodnih znanosti. Tijekom jeseni 2023. 194 studenta u crossover pokusu obradila su dvije lekcije dvaput, jednom u razredu s [[active-learning|aktivnim učenjem]] kolegija i jednom putem tutora izrađenog za taj kolegij, s predtestovima i posttestovima oko svake verzije.

Studenti su više naučili s tutorom. Medijan posttesta bio je 4,5 prema 3,5, medijan [[learning-gains|ishoda učenja]] bio je više nego dvostruk u odnosu na razred, a kvantilne procjene učinka kretale su se od 0,73 do 1,3 standardne devijacije. S tutorom su proveli medijan od 49 minuta prema otprilike 60 minuta u razredu, a 83% ih je njegova objašnjenja ocijenilo jednako dobrima ili boljima od objašnjenja svojih nastavnika. Ocjene angažmana i motivacije porasle su. Užitak i mentalni sklop rasta nisu se razlikovali.

Rezultat počiva na dizajnu. Tutor je izvodio iste poteze kao razred: riješene primjere, postupne nagovještaje, poticaje za samostalno objašnjavanje, slijed koji prati istraživanja o tome kako se uči fizika. Usporedba je bila s aktivnim učenjem, a ne s predavanjem, pa uobičajeni prigovor da bilo što pobjeđuje predavanje ovdje ne vrijedi.

Nastavnici koji vode razvoj nastavnika ovdje imaju najjači dostupni argument da je dizajn tutora posao na kurikulu, a ne nabava. Za produktne timove mjerilo je konkretno: dosegnuti razred s aktivnim učenjem, u manje vremena, istim nastavnim potezima.

Povezano: [[developing-ai-tutor|Najbolje prakse za razvoj tutora s umjetnom inteligencijom]]

**3. Tutorstvo s umjetnom inteligencijom izjednačilo se s vrhunskim ljudskim tutorima ([[studentbench-ai-human-tutoring-gre-2026|Northcutt i sur., 2026]]).**

StudentBench je spojio 2.469 tutorski sesija s 2.383 odrasle osobe koje su se pripremale za GRE, koristeći 13 tutora s umjetnom inteligencijom izgrađenih na 12 modela, ljudske tutore uživo i video kontrolu. Ishod je bio dobitak u učenju na kvantitativnim i verbalnim zadacima.

Zbrojeno tutorstvo s umjetnom inteligencijom bilo je statistički ekvivalentno vrhunskom ljudskom tutorstvu, unutar četvrtine standardne devijacije, i oboje je nadmašilo kontrolu za oko šest postotnih bodova: 6,86 na kvantitativnom i 5,47 na verbalnom dijelu, odnosno otprilike jedan i pol do dva dodatna točna odgovora po odjeljku. Tutori s umjetnom inteligencijom ocijenjeni su slabije u planiranju lekcija i osmišljavanju zadataka za vježbu, u čemu su ljudski tutori bili bolji.

Za administratore se aritmetika kadrova mijenja kod dobro definiranih priprema za standardizirani test. Kada licencirani tutor dostigne ljudskog tutora na četvrtini standardne devijacije, odluka se svodi na trošak i pokrivenost, a djelotvornost prestaje biti pitanje. Istraživači će primijetiti granicu: ekvivalentnost nije superiornost, a standardizirani test najlakši je ishod koji stroj može dosegnuti.

Nastavnici koji vode razvoj nastavnika mogu pogledati gdje su ljudski tutori zadržali prednost: u dijagnosticiranju što učeniku treba sljedeće i u građenju slijeda koji iz toga slijedi.

Povezano: [[intelligent-tutoring|Inteligentno poučavanje]]

**4. Pisanje bilješki pobijedilo je pitanje chatbotu, tri dana kasnije ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes i sur., 2026]]).**

Kreijkes i kolege proveli su preregistrirani eksperiment u sedam engleskih srednjih škola. 405 učenika 10. razreda prošlo je kroz dva od tri uvjeta na tekstu iz povijesti: chatbot koji je mogao odgovarati na pitanja o tekstu, pisanje bilješki ili oboje. Tri dana kasnije pisali su ispite bez knjiga i bilježaka na doslovno pamćenje, razumijevanje i [[retrieval-spacing-interleaving|slobodno prisjećanje]].

Bilješke su pobijedile chatbot na sve tri mjere, za otprilike pola standardne devijacije u pamćenju i blizu četiri desetine u razumijevanju. Bilješke plus chatbot pobijedili su sam chatbot na dvije od tri mjere i nisu ništa promijenili u slobodnom prisjećanju, a same bilješke bile su jače od kombinacije. U kombiniranom uvjetu oko četvrtina učenika prepisala je izlaz chatbota u svoje bilješke. Učenici su i dalje chatbot ocijenili lakšim, korisnijim i ugodnijim od pisanja.

Nastavnici ovdje imaju izravan dokaz da pomoćnik za čitanje može zamijeniti čitanje. Ako je svrha zadatka razumjeti tekst, [[writing-education|pisanje je razumijevanje]], a alat koji odgovara na pitanja o tekstu uklanja vježbu. Zadržite bilješke. Ako dopustite chatbot, tražite nešto što ne može dati: usporedbu, osporavanje teksta ili sažetak napisan nakon što je alat zatvoren.

Povezano: [[ai-support-reading-comprehension|Podrška umjetne inteligencije razumijevanju pročitanog]]

**5. Vrijeme učenja palo je 27%, a s njim je palo i zadržavanje znanja ([[generative-ai-reduced-study-time-math|Rismanchian i sur., 2026]]).**

Desetogodišnji panel s platforme ALEKS, koji obuhvaća 3,2 milijuna interakcija učenja i 12,2 milijuna vremena odgovora na procjenu znanja, pokazuje što su studenti radili nakon dolaska ChatGPT-a. Dizajn uspoređuje vrste zadataka koji se mogu zalijepiti u chatbot (tekstualni problemski zadaci) s vrstama koje zahtijevaju rukovanje grafom unutar platforme, unutar istog kurikula.

Vrijeme na zadacima osjetljivima na umjetnu inteligenciju padalo je 2,8% po tromjesečju među studentima, 26,9% tijekom jedanaest tromjesečja. Kod srednjoškolaca pad je bio 31,3%, u osnovnoj školi 9,0%, a učenici petog razreda nisu pokazali nikakvu zamjetnu promjenu. Pad je potpuno nestao pod [[remote-proctoring|nadzorom na daljinu]], što je odlučujući test: kad alat nije bio dostupan, studenti su provodili staru količinu vremena. Zadatci provjere znanja pod nadzorom pokazali su kumulativni pad od 25% u izgledima za točan odgovor.

Dobni gradijent je signal za dizajn produktnih timova. Vrijeme vježbe je varijabla koja se pomiče, i pomiče se najviše tamo gdje je zadatak najlakše predati. Za nastavnike je vrijeme na zadatku jeftino rano upozorenje: skupina koja iste zadatke završava mnogo brže vjerojatno ne uči istu stvar.

Povezano: [[reducing-over-reliance|Smanjenje pretjeranog oslanjanja na umjetnu inteligenciju]]

**6. Ocjene zadaće porasle su 18%, dok su ispiti bez knjiga pali 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg i sur., 2026]]).**

26.811 učenika od 7. do 12. razreda u Kini praćeno je 30 mjeseci, a generativna umjetna inteligencija uvedena je u različitim trenucima u različitim skupinama. Ocjene zadaće porasle su 18%, a vrijeme dovršetka palo je 30%, sa 64 na 45 minuta. Mjesečni ispiti bez knjiga pali su 20% u odnosu na početni prosjek unutar šest mjeseci, a prijamni ispiti s velikim ulogom pali su 18% do 24% nakon otprilike dvije godine.

Vremenski raspored pokazuje mehanizam. Oko 81% korisnika umjetne inteligencije završilo je zadaću brže od najbržeg učenika bez umjetne inteligencije, a zatim je loše prošlo na ispitima. Manjina koja je zadržala vrijeme za zadaću usporedivo s nekorisnicima naučila je jednako dobro kao i svi ostali. Gubici su bili najveći u društvenim znanostima, zatim u STEM-u, pa u jezicima, i veći kod učenika s visokim postignućima.

Dovršetak zadaće loš je pokazatelj postignuća, a jaz se pojavljuje unutar šest mjeseci, mnogo prije nego što se pomaknu rezultati prijamnih ispita. Nastavnici mogu djelovati ranije: ocijenjene dokaze držite bez knjiga, a domaće zadatke tretirajte kao vježbu čije je vrijeme dovršetka vidljivo.

Povezano: [[checking-whether-educational-ai-works|Provjera djeluje li obrazovna umjetna inteligencija]]

**7. Svaki testirani tutor pao je na pedagogiji, i to gore tijekom razgovora ([[hazra-safetutors-pedagogical-safety-2026|Hazra i sur., 2026]]).**

SafeTutors je testirao 11 tutora, od modela otvorenih težina od 3,8B do 72B te GPT-5-mini, u matematici, fizici i kemiji, prema taksonomiji od 11 dimenzija i 48 podrizika izvedenih iz [[learning-theories|znanosti o učenju]]. Njegove kategorije neuspjeha pedagoške su: prekomjerno otkrivanje odgovora, učvršćivanje zabluda i napuštanje [[scaffolding|postupne potpore]]. Svaka od njih u trenutku izgleda korisno, jer učenik brzo dobije točan odgovor.

Svaki model pokazao je široku pedagošku štetu. Veći modeli nisu bili pouzdano sigurniji, a opća korisnost bila je samo slabo povezana s pedagoškom sigurnošću. Stope štete porasle su sa 17,7% u razmjenama jednog poteza na 77,8% u razgovorima od pet do osam poteza.

Evaluacije jednog poteza nisu dokaz sigurnog tutora, i produktni timovi trebali bi oko toga graditi svoje testiranje. Model koji prođe jednokratnu provjeru korisnosti i sigurnosti može pasti u većini stvarnog razgovora. Administratori koji kupuju tutora trebaju tri odgovora: uskraćuje li rješenja, propituje li zablude i drži li se tijekom sesije. Prodajna demonstracija jedne razmjene ne daje nijedan od njih.

Povezano: [[pedagogical-safety|Pedagoška sigurnost]]

**8. Slučajevi nedoličnog ponašanja počivaju na slabijim dokazima nego što optužbe sugeriraju ([[munoz-misconduct-allegation-evidence-2026|Munoz i sur., 2026]]).**

Munoz i kolege kodirali su svaki slučaj nedoličnog ponašanja povezan s generativnom umjetnom inteligencijom na jednom australskom sveučilištu tijekom tri godine: 1.162 slučaja s 1.855 dokaznih elemenata, od kojih je svaki ocijenjen prema relevantnosti, vjerodostojnosti i dokaznoj snazi.

Optužbe o generativnoj umjetnoj inteligenciji porasle su s 11,9% slučajeva nedoličnog ponašanja u 2023. na 36,9% u 2025., dok je ukupan broj slučajeva ostao ravan. 58 slučajeva, 5% ukupnog broja slučajeva s generativnom umjetnom inteligencijom, počivalo je samo na tvrdnji, bez ijednog dokaznog elementa. Rezultati detektora bili su rijetki i slabi: izvješća Turnitina ili sličnosti nisu imala dokaznu snagu u 73 elementa, a samostalni izlaz GPTZero imao je nisku vjerodostojnost u 69. Najjači dokazi dolazili su iz istrage, a ne iz optužbe, s usmenim priznanjima na razgovoru u 410 elemenata, od kojih je 97,2% bilo snažno. [[hallucination-risk|Izmišljene reference]] bile su najveći strukturni pomak, 22,3% elemenata, uz porast s 10,4% u 2023. na 30,0% u 2025.

Za administratore je pouka proceduralna. Slučaj izgrađen na rezultatu detektora neće preživjeti žalbu, a istraga koja počinje alatom umjesto razgovorom proizvodi slabe spise. Nastavnici mogu djelovati na artefaktu koji se stalno pojavljuje: izmišljene reference česte su, a provjera referenci je jeftina.

Povezano: [[should-we-use-ai-detectors|Korištenje detektora umjetne inteligencije]]

**9. Samopouzdanje nastavnika u vlastitu pismenost o umjetnoj inteligenciji jedva prati njihovu izmjerenu vještinu ([[ai-literacy-assessment-misalignment|Zhang i sur., 2026]]).**

288 nastavnika u osnovnim i srednjim školama ispunilo je samoprocjenu pismenosti o umjetnoj inteligenciji i objektivnu mjeru uspješnosti izgrađenu na istom okviru: koncept, uporaba, evaluacija i etika. Korelacije između njih kretale su se od 0,07 do 0,24.

Analiza latentnih profila pronašla je šest skupina. 43 nastavnika ocijenila su sebe dosljedno visoko, a pritom su postigli niže rezultate na objektivnoj mjeri. 59 pokazalo je obrnuto. Ostali su se grupirali blizu prosjeka ili su se podijelili prema prethodnom iskustvu s umjetnom inteligencijom.

Za one koji razvijaju nastavnike, [[self-assessment|samoprocjena]] nije analiza potreba. Anketa koja pita nastavnike koliko su sigurni previše će financirati samouvjerene, a premalo služiti tihima, i te skupine nisu iste kao kompetentni i oni koji se muče. Kratki zadaci izvedbe razdvajaju ih. Istraživači bi niske korelacije trebali uzeti kao mjerno upozorenje: svaka studija [[ai-literacy|pismenosti o umjetnoj inteligenciji]] izgrađena na [[self-report-measures|samoprocjeni]] mjeri samopouzdanje.

Povezano: [[faculty-development-ai|Razvoj nastavnika koji mijenja praksu]]

**10. Ocjenjivanje umjetnom inteligencijom kažnjava učenike koji pišu slabije ([[ai-scoring-language-bias-physics|Feser i Tschisgale, 2026]]).**

Objašnjenja iz fizike 116 srednjoškolaca ocijenilo je 9 pristupa strojnog učenja i 2 pristupa velikih jezičnih modela, a zatim su uspoređena s ocjenama stručnjaka. Slaganje sa stručnjacima kretalo se od 67,2% do 78,4%, što zvuči prihvatljivo dok se pogreške ne raščlane.

Svaki pristup podcijenio je konceptualno razumijevanje kod objašnjenja niže jezične kvalitete. Pristranost je išla u jednom smjeru: bolje pisanje nije bilo precijenjeno. Obrazac odgovara onome što je zabilježeno i kod nastavnika fizike, što sugerira da je poteškoća u zaključivanju o razumijevanju iz proznog teksta, jednako kod ljudi kao i kod modela.

Osoblje za procjenu i produktni timovi trebaju izvještavati stope podcjenjivanja prema jezičnoj kvaliteti, a ne samo ukupno slaganje sa stručnjacima, jer prosjek skriva skupinu koja trpi štetu. Svatko tko ocjenjuje [[multilingual-learning|višejezične učenike]] trebao bi odgovore niske jezične kvalitete usmjeriti na [[human-in-the-loop-ai|ljudski pregled]] ili osmisliti zadatke koji ne ovise o proznom tekstu.

Povezano: [[ai-grading-fairness-reliability|Pravedno i pouzdano ocjenjivanje umjetnom inteligencijom]]

## Što imaju zajedničko

Tri studije mjere dvije stvari istodobno: što studenti proizvode s alatom i što mogu bez njega. Bastani, Rismanchian i Strömberg svi nalaze da se to dvoje razilazi, i samo se mjera bez pomoći ponaša kao učenje. Četiri ovise o dizajnerskom izboru, a ne o modelu: zaštitne ograde u Bastaniju, pedagogija ugrađena u Kestinov tutor, pisanje koje je Kreijkes zadržao u zadatku i višepotezni scenarij koji je SafeTutors testirao. Tri promatraju sustav oko alata, što znači dokaze korištene u slučajevima nedoličnog ponašanja, način na koji se mjeri kompetencija nastavnika i jezične pretpostavke u [[automated-assessment|automatiziranom ocjenjivanju]]. StudentBench uspostavlja jednakost na standardiziranom testu, jedinom ishodu na kojem stroj najlakše može dosegnuti čovjeka. Bastani se pojavljuje u dvije skupine jer daje i jaz i dizajnersko rješenje.

Ostaju tri pitanja koja vrijedi ponijeti u svaku odluku o kolegiju ili proizvodu. Što bi student trebao moći učiniti kad alat nestane? Što od njega aktivnost traži dok je alat otvoren? Koji bi dokaz mjesec dana kasnije pokazao razliku?

## Gdje su ti dokazi slabi

Ove studije dijele [[limitations-in-aied-research|ograničenja istraživanja umjetne inteligencije u obrazovanju]] u cjelini. Dvije najveće smještene su u Turskoj i Kini, tri u Sjedinjenim Državama, jedna u Engleskoj, jedna u Australiji, a studija ocjenjivanja u Njemačkoj. Jedna je mjerilo komercijalnih modela, a ne terenska studija. Prevladava srednjoškolska matematika, zatim fizika i računarstvo. Vrlo malo studija promatra [[humanities-education|pisanje u humanističkim znanostima]] na velikom uzorku, strukovno obrazovanje ili učenike s invaliditetom.

Samo kineski panel i panel ALEKS promatraju učenike dulje od dvije godine nakon uvođenja, a kineski autori tvrde da kraće studije sustavno podcjenjuju dugoročnu kaznu. Šest od ovih rezultata su pretisci ili radni dokumenti koji nisu završili recenzentski postupak: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang i Feser. Studije Bastanija, Kestina, Kreijkesa i Munuza objavljene su u recenziranim časopisima.

Nulti i negativni rezultati rijetki su u ovoj literaturi, pa objavljeni zapis vjerojatno preuveličava koliko često umjetna inteligencija pomaže. Ove studije najbolje su trenutačno vodstvo za deset odluka, i nijedna od njih ne rješava pitanje.

## Kamo dalje

[[does-ai-help-students-learn|Pomaže li umjetna inteligencija studentima da uče?]] širi je pregled dokaza koji stoji za ovim tvrdnjama. [[redesign-assessment-ai-era|Kako redizajnirati ocjenjivanje za doba umjetne inteligencije?]] ide dalje s dijelom o ocjenjivanju. Za slučajeve integriteta, [[reduce-ai-cheating|Kako smanjiti varanje uz pomoć umjetne inteligencije?]] pokriva procesne dokaze i politiku. Za nalaze o profesionalnom razvoju, [[faculty-ai-competencies|Koje kompetencije u području umjetne inteligencije trebaju nastavnici?]] popratna je stranica, a [[addressing-common-misconceptions-ai-education|Kako se nositi s uobičajenim zabludama o umjetnoj inteligenciji u obrazovanju?]] bavi se prigovorima koje ćete vjerojatno čuti od kolega.
