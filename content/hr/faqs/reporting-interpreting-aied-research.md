---
title: "Koje su najbolje prakse za izvještavanje o istraživanju umjetne inteligencije u obrazovanju i njegovo tumačenje?"
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
updated: "2026-10-29T14:24:50-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Vaš nacrt ima istaknuti broj u sažetku, a recenzent je upravo pitao što je kontrolna skupina doista radila. Ili ste vi recenzent i držite meta-analizu čiji je objedinjeni efekt 0,67, a čiji odjeljak o metodama ima stranicu i pol. Ili vaš odjel piše smjernice o tome kako osoblje treba izvještavati o studijama umjetne inteligencije i želi nešto određenije od „slijedite standarde“.

Šest propusta odlučuje o većini takvih slučajeva: koji je sustav umjetne inteligencije rabljen, za što je bio konfiguriran, koju je pedagošku ulogu imao, jesu li ljudi osmislili ili pregledali njegov izlaz, što je mjera ishoda doista obuhvatila i što su autori učinili u vezi s pristranošću, troškovima i ograničenjima. „Neprocjenjivo“ je poštena presuda kad ti podaci nedostaju, i to je drugačija presuda od „opovrgnuto“.

## Kratka verzija

**1.** Opišite umjetnu inteligenciju kao tretman, a ne kao dobavljača. Model, verzija, konfiguracija, upiti, uloga i to tko je osmislio ili pregledao izlaz.

**2.** Imenujte pedagoško obrazloženje i aktivnu usporedbu. Naziv proizvoda nije metoda, a nastava kao i obično nije poštena kontrolna skupina.

**3.** Neka mjera odgovara tvrdnji, uključujući i to je li ishod bio odgođen i bez pomoći.

**4.** Izvijestite o nesigurnosti koju analiza doista ima: zavisni efekti, varijanca među studijama, intervali predviđanja, veličine podskupina, pristranost objavljivanja.

**5.** Provjerite svaku automatiziranu prosudbu, s imenovanim zlatnim standardom i imenovanim arbitrom.

**6.** Izvijestite o protutežama: upravljanje, računalni trošak, vlastita upotreba umjetne inteligencije, nulti rezultati i samo citati koje ste provjerili.

## Opišite umjetnu inteligenciju kao tretman koji bi netko mogao ponovno izgraditi

To je provjera na kojoj većina prijava pada. RAISE okvir (*Reporting AI Studies in Education*, Allison 2026) popis je od 30 stavki u deset tematskih područja, a njegova je dijagnostička tvrdnja određena: prijave redovito izostavljaju koji je model rabljen, kako je bio konfiguriran, koju je ulogu imao i jesu li ljudski akteri osmislili ili pregledali njegove izlaze. Recenzentima tada ostaju četiri pitanja bez odgovora. Što je umjetna inteligencija točno radila? Je li bila nužna? Je li to moguće replicirati? Jesu li tvrdnje o učenju vjerodostojne?

RAISE ide od obrazovnog opravdanja preko specifikacije na razini API-ja, interakcije učenika i umjetne inteligencije, pristupačnosti i kulturne prikladnosti, sudionika i okruženja, ljudske uključenosti, dizajna, etike, transparentnosti i ponovljivosti, do ograničenja. Njegova prateća matrica etike i rizika pokriva rizike za [[agency|autonomiju]] učenika, [[equity-in-ai-education|pravičnost]], [[governance|upravljanje]] podacima i algoritamsku transparentnost. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah i Gašević (2026)]] nude pojednostavljenu alternativu. TEP-AIED spaja transparentnost, etiku i pedagogiju u jednu međuovisnu strukturu, daje tablicu smjernica preslikanu na sedam odjeljaka rada i traži od autora da dodaju pododjeljak o metodama naslovljen „Transparency, Ethics, and Pedagogy Considerations“. Njihov je razlog praktičan: RAISE je sveobuhvatan i previše granularan za rutinsku empirijsku upotrebu. Prijava spada pod [[ai-use-disclosure|prijavu upotrebe umjetne inteligencije]] i ona je ono što tvrdnje o [[privacy|privatnosti]] i [[ethics|etici]] čini provjerljivima.

Obrazovno opravdanje dolazi prvo u RAISE-u jer umjetna inteligencija nije neutralan alat. Vrijednost ovisi o usklađenosti između problema učenja, teorijskog obrazloženja i preslikavanja ciljeva na mjere ishoda. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] našao je da su sve osim dvije od 14 revidiranih meta-analiza tretman definirale kao alat, ChatGPT ili GenAI ili „umjetnu inteligenciju“ općenito. Naziv proizvoda nije [[pedagogy|pedagogija]]. Tretirati izloženost ChatGPT-u kao jednu zajedničku intervenciju usporedivo je s meta-analizom učinaka „papira“.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich i sur. (2025)]] iznose isti argument za primarne studije. Revidirajući podskup usporedbi koje stoje za istaknutom meta-analizom, našli su da samo 21% ima dobro definiran tretman, kontrolnu skupinu i valjanu mjeru učenja. Prijavljena veličina efekta (g = 0,7) također je premašila onu namjenski izgrađenih [[intelligent-tutoring|sustava inteligentnog poučavanja]] (0,66), a taj je jaz znak upozorenja: tretman koji pobjeđuje namjenski izgrađeno poučavanje vjerojatno je skup različitih stvari pod jednom etiketom.

Provjera je jedno pitanje: bi li kompetentan čitatelj mogao ponovno izgraditi vašu intervenciju samo iz odjeljka o metodama i dobiti istu stvar?

## Odlučite što vam vaša mjera dopušta tvrditi

U O'Neillovu revizijskom pregledu dokaza na 46 slučajno odabranih primarnih studija 28 (61%) pokazalo je zabrinjavajuće naznake valjanosti. Nepodudarnost zavisne varijable bila je najčešća (n = 15), zatim nepodudarnost nezavisne varijable (n = 11), problemi eksperimentalnog dizajna (n = 7), problemi izdvajanja podataka (n = 6), odsutnost kontrolne skupine (n = 6) i nerandomizirana podjela u skupine (n = 6). Višedimenzionalni ishodi redovito su objedinjavani kao da su međusobno zamjenjivi, pri čemu su rezultati testova, kvaliteta domaćih zadaća, [[motivation|motivacija]], [[self-efficacy|samoefikasnost]], stavovi i [[student-engagement|angažiranost]] svedeni na jedan broj „akademskog postignuća“.

Dvije navike u izvještavanju to sprječavaju. Navedite koji konstrukt instrument mjeri i da je valjan za tu populaciju; [[self-report-measures|mjere samoprijave]] pokazuju gdje se mjere temeljene na percepciji razilaze s ponašanjem, a [[assessment-validity|valjanost vrednovanja]] pokriva konstruktnu valjanost. Zatim izvijestite o ishodu koji ne ovisi o uvjerenju učenika o pomoći. Neposredna izvedba na zadatku uz pomoć nije [[learning-gains|dobitak u učenju]], a [[cognitive-offloading|kognitivno rasterećenje]] je mehanizam koji najvjerojatnije razdvaja to dvoje. [[verification-quality-reliance-calibration-genai-2026|Mini pregled iz 2026. na 493 zapisa i 14 prioritetnih studija]] našao je da nijedna nije mjerila uspjeh provjere i sljedeću odluku o oslanjanju zajedno, prema neovisno utvrđenom standardu kvalitete izlaza, a malo ih je gledalo dalje od neposredne izvedbe prema odgođenom zadržavanju ili [[transfer-of-learning|prijenosu]].

Navedite gornju granicu izričito u raspravi. Studija koja je mjerila kviz rješavan uz otvoren alat može poduprijeti tvrdnju o izvedbi s pomoći. Ne može poduprijeti tvrdnju o tome što su studenti naučili, a ta rečenica stoji jedan redak.

## Izvijestite o nesigurnosti koju vaša analiza doista ima

Za sinteze izvijestite o postupanju sa zavisnim efektima, varijanci među studijama, intervalima predviđanja i procjeni pristranosti objavljivanja. Sam I² neće obaviti posao. O'Neill je našao da je prijavljena heterogenost teška gdje god je navedena, od 77,2% do 94,4% u 13 meta-analiza, s 12 iznad 80%, i da nikad nije razriješena: nijedna analiza moderatora nije zadovoljila najmanju veličinu podskupine od deset studija. Dvanaest meta-analiza tretiralo je zavisne veličine efekta iz iste studije kao neovisne, što napuhuje prividne dokaze. Samo četiri prijavile su varijancu među studijama (τ²) i samo dvije interval predviđanja, a oba su intervala uključivala nulu. Pristranost objavljivanja nije bila valjano procijenjena nigdje u skupu.

Brojke o heterogenosti trebaju svoj model uz sebe, jer I² ovisi o preciznosti. [[limitations-in-aied-research|Ograničenja u istraživanju umjetne inteligencije u obrazovanju]] dokumentiraju jednu sintezu na I² = 82,98% pod modelom fiksnih efekata i 15,75% pod slučajnim efektima. Čitatelj koji dobije samo prvi broj ne može znati koliko je korpus nedosljedan. Izvijestite o τ² i intervalu predviđanja uz njega, što je i konvencija koju traži [[meta-analysis-systematic-review|literatura o pregledima]].

Zatim umanjite vlastiti istaknuti broj. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš i sur. (2026)]] objedinili su 1.840 veličina efekta iz 67 meta-analiza i našli da, kad se modelira pristranost objavljivanja, prosječni efekt pada na otprilike trećinu objavljene srednje vrijednosti (SMD = 0,196 nasuprot 0,67), s intervalom predviđanja od -1,521 do +1,908. Taj interval seže od znatne štete do znatne koristi za hipotetsku novu studiju. To je najkorisniji broj u radu i onaj koji najčešće ispadne iz sažetka.

## Recite dokle tvrdnja dopire

Pravičnost i doseg propadaju na isti način: velik efekt koji znači manje nego što izgleda. Jedanaest od 14 revidiranih meta-analiza nije postavilo granicu populacije, pa su „studenti“ obuhvaćali djecu do medicinskih specijalizanata. Jedan kolegij, ustanova, disciplina ili zemlja ne daju pravo na opću tvrdnju, a rezultati za jedan alat rijetko se prenose na drugi.

Tri objašnjenja pokrivaju većinu velikih efekata i o svakome se može izvijestiti. Novost je jedno. Dodatno vrijeme na zadatku drugo. Treće je usporedni uvjet koji je dobio nastavu kao i obično, a ne aktivnu kontrolnu skupinu. Izvijestite što je kontrolna skupina doista radila, koliko je vremena svaki krak proveo i koliko je alat bio nov. Navedite i granicu populacije, jer se efekti razlikuju među skupinama učenika, a neizrečena granica je ono što dopušta da jedan objedinjeni broj stoji za sve njih; [[differential-effects-across-learner-groups|Različiti efekti među skupinama učenika]] izlažu tu varijaciju.

Tretirajte alat kao pokretnu metu. Vlasnički sustavi mijenjaju se bez najave, pa je nalaz vezan uz verziju modela, a [[benchmark|mjerilo]] koje je oduševilo u jednom izdanju možda neće vrijediti u sljedećem. Verzija i datum pristupa zato pripadaju u odjeljak o metodama, i to ne samo zbog ponovljivosti.

## Provjerite automatizirane prosudbe

[[ai-ed-evaluation|Vrednovanje u području umjetne inteligencije u obrazovanju]] sve više prepušta ocjenjivanje modelima, što postupak provjere čini dijelom rezultata, a ne dodatkom. Khan Academy u prikazu mjera svog [[intelligent-tutoring|poučavatelja s umjetnom inteligencijom]] navodi da kognitivnu angažiranost ocjenjuje [[llm|LLM]] prosuditelj kalibriran prema ljudskim pedagoškim stručnjacima na F1 0,83, te da su se pomaci mjera dogodili zahvaljujući više od 40 živih eksperimenata u pet mjeseci, a ne izvanmrežnom evaluacijom ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi i sur. 2026]]). [[machines-misread-pedagogical-quality|Tseng i sur. (2026)]] pokazuju da je neslaganje između ljudi i stroja o kvaliteti [[formative-assessment|pitanja predtesta]] sustavno, a ne slučajno, i da je operacionalizacija rubrike važnija od upita koji prvo daje obrazloženje.

Slaganje s ljudskim kodiračima nešto je drugo od kvalitete, a izvještavati o njemu kao o kvaliteti meta je recenzenta. [[agreement-not-quality-llm-coding-verification|Liu i sur. (2026)]] dali su neovisnom stručnjaku da naslijepo prosudi 855 parnih skupova kodova. Slaganje čovjeka i LLM-a iznosilo je prosječni Jaccard 0,30 nasuprot 0,52 za slaganje među ljudima, dok je slijepi provjeravatelj preferirao ljudsko i strojno kodiranje po nerazlučivim stopama (51,5% nasuprot 48,5%, p = 0,537). Izvijestite o cilju kalibracije, zlatnom standardu i tome tko je presudio neslaganje. Ta tri podatka omogućuju čitatelju da odluči koliku težinu automatizirana ocjena može nositi.

## Objavite troškove i vlastitu upotrebu

Pregled svih radova s konferencije AIED 2025 našao je obrazac usvajanja LLM-ova bez prijave: većina projekata rabila je LLM-ove, a manje od nekolicine prijavilo je potrošnju resursa ili ugljikov otisak. Taj rad daje metodu otvorenog koda s mjernim alatima za lokalni i oblakovni hardver, uz formulu za procjenu računalnog troška vrhunskih modela čiji broj parametara nije objavljen. Njegov je argument da je neizvještavanje o tim troškovima samo po sebi etički problem. Upravljanje podacima, privola, pristupačnost i kulturna prikladnost pripadaju u isti odlomak (stavke RAISE-a; [[universal-design-for-learning|univerzalni dizajn za učenje]], [[accessibility|pristupačnost]]). [[equity-ethics-pedagogical-safety-research|Pravičnost, etika i pedagoška sigurnost u istraživanju]] donosi cjelovitiju obradu.

Vaša vlastita upotreba umjetne inteligencije u istraživačkom procesu treba istu prijavu. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaletina i Linova analiza PRISMA-LLM]] na 888 radova o automatizaciji pregleda pokazuje koliko je to izvještavanje neujednačeno. Od 2023. 38,0% radova o softveru i proizvodima nije prijavilo nikakvu evaluaciju, nasuprot 9,3% radova o LLM-ovima. Prosječna bogatost izvještavanja bila je 6,3 za radove o LLM-ovima i 3,3 za radove o softveru i proizvodima. 84,1% upotrebe LLM-ova oslanjalo se na vlasničke ili hostane sustave, a samo 4,9% na modele otvorenih težina. Njihov okvir razdvaja prijavu implementacije od evaluacije osjetljive na posljedice kroz pet razina prijave, što je upotrebljiv predložak za opisivanje onoga što je alat radio unutar pregleda.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai i Chan (2026)]] dodaju sliku sa strane autora. Od 28 poslijediplomskih istraživača, 27 je rabilo GenAI u osmišljavanju, pregledu literature, objašnjavanju, obradi podataka, programiranju, [[writing-education|akademskom pisanju]], uređivanju i prevođenju. Upotrebu su kalibrirali prema ulozima i disciplinarnim normama. Politike njihovih ustanova bavile su se nastavom i vrednovanjem, a ne istraživačkom praksom, što odluku o izvještavanju ostavlja autoru.

## Objavite nulti rezultat i provjerite svaki citat

[[citation-errors-hallucinations-computing-education-2026|Denny i sur. (2026)]] provjerili su 30 izmišljenih referencija u 14 radova, pri čemu je broj na jednom tehničkom simpoziju porastao s 3 u 2025. na 17 u 2026., ili 2,3% radova u tom godišnjem zborniku. Pisanje uz pomoć LLM-a čini uvjerljiv izmišljeni citat jeftinim za proizvesti, i zato provjera mora uslijediti prije predaje, a ne nakon prihvaćanja.

Protuteže u tom pregledu važne su kad ga citirate. Većina označenih referencija bila je bezazlena: 229 su bile nepodudarnosti u ACM metapodacima gdje je PDF bio točan, a 188 su bile valjane bibliografske varijante. Broj izmišljenih referencija namjerno je donja granica, a bezazlena većina nije pogreška zaokruživanja. Provjerite svaku stavku koju ne možete osobno provjeriti.

Objavljivanje nulih i negativnih nalaza druga je polovica poštene dokazne osnove. Bartoš i sur. našli su snažne dokaze potisnutih nulih rezultata (svaki Eggerov test p < 0,0001) i ekstremnu heterogenost (τ = 0,869), pri čemu nijedan podskup po ishodu, području, razini ili ulozi umjetne inteligencije nije pokazao dosljedne dobitke. Također nisu našli razliku između studija objavljenih prije i poslije siječnja 2023., što potkopava tvrdnju da suvremeni generativni alati upravo oni koji proizvode dobitke.

## Što istraživači o ovome pogrešno shvaćaju

**„Veličina efekta svojstvo je modaliteta.“** Ne postoji efekt umjetne inteligencije u obrazovanju o kojemu bi se moglo izvijestiti. Sve osim dvije revidirane meta-analize definirale su tretman kao naziv alata, samo je 21% revidiranih usporedbi imalo definiran tretman, kontrolnu skupinu i valjanu mjeru, a objedinjeni g = 0,7 sjedio je iznad namjenski izgrađenog inteligentnog poučavanja na 0,66. Veličina efekta pripada dizajnu, populaciji i prilici mjerenja.

**„Objedinjeni prosjek je ono što će se dogoditi mojim studentima.“** Prosjek opisuje skup studija i ništa u njemu ne određuje nijednu pojedinu učionicu. Prosjek prilagođen pristranosti je SMD = 0,196, a njegov interval predviđanja ide od -1,521 do +1,908. Prijavljena heterogenost iznad je 80% u 12 od 13 meta-analiza, a nijedan podskup u većem skupu nije pokazao dosljedne dobitke. Promjena na razini studenta nije prepoznatljiva ni iz jednog od tih brojeva.

**„Nulti rezultat znači da alat ne djeluje.“** Nulti rezultat tvrdnja je o dizajnu pri zadanoj preciznosti, a odsutnost zamjetnog efekta u jednoj studiji činjenica je o toj studiji. SMD = 0,196 prilagođen pristranosti došao je iz literature u kojoj je svaki Eggerov test bio značajan, pa je obranjivo čitanje korpusa mali i nesiguran prosjek. Nijedan podskup po ishodu, području, razini ili ulozi umjetne inteligencije u većem skupu nije pokazao dosljedne dobitke. Dokumentirani problem u ovoj literaturi je potiskivanje.

**„Jedna studija sve rješava.“** Osnovne stope govore drukčije. 61% provjerenih primarnih studija imalo je zabrinjavajuće naznake valjanosti, jedan kolegij ili ustanova ne daju pravo na opću tvrdnju, a vlasnički sustav je pokretna meta vezana uz verziju modela. Jedna studija je podatkovna točka s priloženim dizajnom.

**„Visoko slaganje s ljudskim kodiračima znači da model ocjenjuje pravu stvar.“** Slaganje čovjeka i LLM-a bilo je 0,30 nasuprot 0,52 među ljudima, a slijepi provjeravatelj nije mogao razlikovati dva skupa kodova na 51,5% nasuprot 48,5%. Slaganje mjeri dosljednost s kodiračem, a kvaliteta je zasebno pitanje koje traži zlatni standard i arbitra.

## Prigovori koje ćete čuti

**„Recenzenti žele novost, a ne pojedinosti o metodi.“** Časopisi idu u drugom smjeru. RAISE i TEP-AIED daju urednicima konstrukt koji mogu zahtijevati, a TEP-AIED-ov pododjeljak o metodama ulazna je točka s malo trenja. Pojedinosti o metodi pretvaraju rad koji se ne može procijeniti u rad koji se može citirati.

**„Nemamo prostora.“** Pet razina prijave razine su izvještavanja, a ne razine rizika, pa dubina evaluacije može biti jedna ili dvije rečenice. Verzija, upiti i uloga stanu u kratak odlomak. Trošak i upravljanje stanu u rečenicu o ograničenjima.

**„Svi izvještavaju tako.“** Brojke kažu da je norma problem: 61% provjerenih primarnih studija sa zabrinjavajućim naznakama valjanosti, 12 od 13 meta-analiza s heterogenošću iznad 80%, 38,0% radova o softveru i proizvodima bez ikakve evaluacije.

**„Naš alat je vlasnički, pa ne možemo prijaviti model.“** Prijavite verziju, datum pristupa, konfiguraciju, upite koje ste dali, ulogu i zaštitne ograde. Ako dobavljač ne želi reći, to ograničenje pripada u ograničenja kao granica tvrdnje.

**„Izvještavanje o nulama naštetit će nam.“** Potisnute nule dokumentirani su mehanizam koji stoji za prosjekom SMD = 0,196 prilagođenim pristranosti. Njihovo objavljivanje održava vaš pozitivan rezultat čitljivim.

## Što učiniti ovaj tjedan

**1.** Pročitajte svoj sažetak uz odjeljak o metodama i izbrišite svaku tvrdnju koju metoda ne može poduprijeti. Jedna rečenica o gornjoj granici mjere obično je dovoljna.

**2.** Dodajte odlomak o specifikaciji: model, verzija, datum pristupa, konfiguracija, upiti, uloga i to tko je osmislio ili pregledao izlaz.

**3.** Izvadite τ², interval predviđanja i procjenu pristranosti objavljivanja iz dodatka u rezultate ili izravno recite da ih niste izračunali.

**4.** Upišite granicu populacije i kontrolni uvjet u izjavu o dizajnu, uključujući koliko je vremena svaki krak proveo.

**5.** Provjerite svaku referenciju koju niste osobno pročitali i prvo provjerite polje autora.

## Kamo dalje

[[research-methods-aied|Istraživačke metode u području umjetne inteligencije u obrazovanju]] pokrivaju dizajnerske odluke koje stoje ispod ovih odluka o izvještavanju, a [[limitations-in-aied-research|Ograničenja u istraživanju umjetne inteligencije u obrazovanju]] katalog su načina na koji istraživanja propadaju, s pridruženim brojkama. [[interpreting-and-applying-aied-research|Tumačenje i primjena istraživanja umjetne inteligencije u obrazovanju]] čitateljska je strana istog problema, [[does-ai-help-students-learn|dokazi o trajnom učenju]] ono su čemu većina ovih mjera pokušava doći, [[evaluating-ai-interventions-methods|vrednovanje intervencija s umjetnom inteligencijom]] pokriva mjere i usporedne dizajne, a [[checking-whether-educational-ai-works|provjera djeluje li obrazovna umjetna inteligencija]] kraća je verzija pitanja. Za praznine koje ova literatura nije popunila pogledajte [[research-gaps-aied|istraživačke praznine u području umjetne inteligencije u obrazovanju]].
