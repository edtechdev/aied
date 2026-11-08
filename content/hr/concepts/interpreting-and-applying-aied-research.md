---
title: "Tumačenje i primjena istraživanja umjetne inteligencije u obrazovanju"
created: "2026-09-19T05:41:27-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied, how-can-ai-assist-with-educational-research]
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/interpreting-and-applying-aied-research"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

> **Tumačenje i primjena istraživanja umjetne inteligencije u obrazovanju** — kako procijeniti vrijedi li neki nalaz o umjetnoj inteligenciji u obrazovanju uzeti kao osnovu za djelovanje, bilo da poučavate, vodite program, osmislite kolegij ili gradite softver. Za ovu stranicu nije potrebna statistika. Počinje pitanjem koje praktičar doista ima — *trebam li to učiniti?* — prolazi kroz nekoliko stvari koje na njega odgovaraju i tehničke pojedinosti ostavlja za kasni odjeljak, za svakoga kome trebaju ili ih želi. Kratka verzija: nalaz vrijedi uzeti kao osnovu za djelovanje kada znate što je bilo uspoređeno, što je izmjereno, tko je bio istraživan i postoji li alat još u obliku u kojem je istraživan. Većina tvrdnji koje stižu do nastavnika, administratora i programera ne zadovoljava jedan od tih četiriju uvjeta.

## Pitanja za razmatranje

- Dobavljač, novinski članak ili kolega kaže da je UI alat poboljšao učenje. Koje je to jedno što biste željeli vidjeti prije nego što ga isprobate na vlastitom kolegiju — i biste li znali gdje ga tražiti?
- Svaka stranica članka u ovoj bazi znanja sada ima odjeljak **Što to znači za praksu**, a većina ima i odjeljak **Ograničenja**. Čitajući ih zajedno, što vam svaki od njih govori što onaj drugi ne govori?
- Studenti vježbaju s UI alatom i postižu bolje rezultate na vježbi, a zatim lošije na [[summative-assessment|ispitu bez knjiga]]. Koji je od tih dvaju brojeva ishod učenja koji vaš kolegij smatra važnim — i bi li vaše sadašnje procjene uočile razliku?
- Studija obećava veliko poboljšanje, ali pratila je 30 studenata na jednom kolegiju u jednoj ustanovi, a verzija alata koja je istraživana više nije verzija koju bilo tko upotrebljava. Koja od tih dviju činjenica vas više zabrinjava i zašto?
- Mnogi UI alati povećavaju to koliko ih studenti upotrebljavaju, a da pritom ne povećavaju to koliko uče. Kada biste morali birati između alata koji povećava angažman i onoga koji povećava izvedbu bez pomoći, koji bi dokaz presudio?
- Od vas se traži da odobrite ili kupite alat na temelju vlastitih brojeva dobavljača o učinkovitosti. Što biste željeli da bude otkriveno o tome kako su ti brojevi proizvedeni?

## Uvod

Ova je stranica za ljude koji moraju nešto odlučiti: nastavnika koji razmišlja treba li promijeniti zadatak, [[administrator|administratora]] koji odmjerava pilot-projekt, dizajnera učenja koji gradi kolegij, programera koji odlučuje što neka funkcija treba raditi ili istraživača koji bilo kome od njih objašnjava nalaz.

Dvije navike čine razliku, a nijedna ne zahtijeva istraživačku obuku.

**Najprije pročitajte dva odjeljka napisana za vas.** Svaka stranica članka ovdje sada nosi odjeljak **Što to znači za praksu** — obično tri do pet konkretnih radnji izvedenih iz te studije — a većina nosi i odjeljak **Ograničenja** koji navodi što studija ne može poduprijeti. Pročitajte ih prije nalaza studije, a ne poslije. Odjeljak o praksi govori vam čemu studija služi; odjeljak o ograničenjima govori vam gdje prestaje. Ako odjeljak o praksi nedostaje ili je neodređen, tretirajte tu stranicu kao nedovršenu, a ne kao dokaz.

**Prosudite tvrdnju, a ne samopouzdanje s kojim je iznesena.** Tvrdnje o [[ai-education|umjetnoj inteligenciji u obrazovanju]] obično su točne u vezi s *nečim* i obmanjujuće u vezi s onim što vas zanima, jer se studija i vaša učionica razlikuju u četirima stvarima: s čime je uspoređivana, što je mjerila, tko je sudjelovao i koja je verzija alata upotrijebljena. Ostatak ove stranice daje vam te provjere jednostavnim jezikom, a zatim dokaze za svaku od njih, za čitatelje koji ih žele.

Ono što slijedi nije ni zamjena za susjedne stranice. [[research-methods-aied|Istraživačke metode u umjetnoj inteligenciji u obrazovanju]] pokrivaju to kako se dizajni grade, [[limitations-in-aied-research|Ograničenja u istraživanjima UI u obrazovanju]] katalogiziraju ponavljajuće slabosti literature, [[ai-ed-evaluation|Evaluacija AIED-a]] pokriva to kako se sustavi i rezultati evaluiraju, a [[differential-effects-across-learner-groups|Različiti učinci među skupinama učenika]] pokriva to koga nalaz uključuje, a koga ne.

## Četiri pitanja koja rješavaju većinu tvrdnji

Postavite ih prije nego što na nešto potrošite vrijeme, novac ili semestar.

**1. S čime je bilo uspoređeno i je li ta usporedba bila poštena?** „Studenti koji su koristili umjetnu inteligenciju postigli su bolje rezultate od onih koji je nisu“ nešto vam govori samo ako su drugi studenti radili nešto stvarno. Ako je usporedba bila uobičajena nastava — ili ništa — tada nalaz objedinjuje alat s dodatnim vremenom, dodatnom pažnjom i novinom. Što tražiti: **kontrolnu skupinu** koja je dobila vjerodostojnu alternativu i slučajno dodjeljivanje u dva uvjeta.

**2. Što su točno izmjerili?** Ovdje većina uzbudljivih tvrdnji tiho pada. Rezultati testova, kvaliteta domaće zadaće, [[motivation|motivacija]], stavovi i [[student-engagement|angažman]] spajaju se u jedan broj „postignuća“, ili se mjera izvedbe *uz prisutnost alata* izvješćuje kao učenje. Učenje koje ovisi o prisutnosti alata nije isto što i učenje koje traje. Što tražiti: što je instrument mjerio, je li bio validiran za tu populaciju i je li ishod izmjeren **bez** umjetne inteligencije u prostoriji.

**3. Tko je bio istraživan, koliko ih je bilo i koliko dugo?** Trideset studenata na jednom kolegiju signal je, a ne rezultat. Četverotjedna intervencija ne može vam reći ništa o godini. A studija studenata koji se razlikuju od vaših ipak je korisna — to je hipoteza o vašem okruženju, a ne predviđanje. Što tražiti: veličinu uzorka, način regrutiranja sudionika, jedno mjesto provedbe, trajanje i to je li neka podskupina bila dovoljno velika za analizu.

**4. Je li alat još onaj alat koji je istraživan?** UI sposobnosti kreću se brže od objavljivanja. Nalaz iz 2025. opisuje generaciju modela iz 2025. — ponekad određenu verziju, ponekad konfiguraciju koju danas nitko ne upotrebljava. To nalaz ne čini lažnim; čini ga zastarjelim i znači da tvrdnju treba ponovno provjeriti, a ne naslijediti. Što tražiti: verziju modela i razdoblje prikupljanja podataka.

## Što dokazi govore o UI tvrdnjama općenito

Ako zapamtite samo jednu stvar s ove stranice, zapamtite da je naslovni broj obično napuhan, a usporedba obično slaba. To nije rubno gledište — to je ono što izvješćuju revizije samoga područja. Nekoliko dobro osmišljenih studija doista pokazuje stvarne dobitke; poanta je da teret dokazivanja leži na tvrdnji.

- **Otprilike dvije trećine prosječnog učinka nestaje** kada se ispravi činjenica da se impresivni rezultati objavljuju, a neimpresivni ne. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš i sur. (2026.)]] objedinili su 1.840 veličina učinka iz 67 pregleda i utvrdili da je ispravljeni prosjek bio otprilike trećina objavljenog medijana — SMD 0,196 prema 0,67.
- **Naziv proizvoda nije nastavna metoda.** Revidirajući usporedbe iza istaknute metaanalize, [[weidlich-chatgpt-effect-search-cause-2025|Weidlich i sur. (2025.)]] utvrdili su da je samo **21 %** imalo dobro definiran tretman, kontrolnu skupinu i valjanu mjeru učenja — a prijavljena prednost za „upotrebu ChatGPT-a“ ispala je veća nego za namjenski izrađene [[intelligent-tutoring|inteligentne tutorske sustave]] (g = 0,7 prema 0,66), što je znak upozorenja, a ne trijumf.
- **Izvedba s alatom rutinski se zamjenjuje za učenje.** U jednoj studiji matematike u [[k-12|K-12]] obrazovanju studenti koji su vježbali s [[conversational-ai|chatbotom]] opće namjene dobili su bolje ocjene iz vježbe, a zatim su postigli **oko 17 % lošiji rezultat** od vršnjaka bez pristupa umjetnoj inteligenciji na ispitu bez knjiga ([[stanford-evidence-base-ai-k12-2026|Stanfordska baza dokaza o umjetnoj inteligenciji u K-12]]).
- **Vlastiti pregledi područja ne izdržavaju reviziju.** [[oneill-presumed-effective-meta-analysis-2026|O'Neillova (2026.)]] revizija **14 recenziranih metaanaliza** koje tvrde da umjetna inteligencija poboljšava obrazovanje utvrdila je da **nijedna** nije pružila valjanu osnovu za tvrdnje koje iznosi, a među 46 slučajno odabranih primarnih studija **61 %** pokazao je zabrinutosti u pogledu valjanosti. Problem nije jedan loš rad; problem je kultura izvješćivanja.
- **Pregled može kvantificirati iskrivljenje izvješćivanja u vlastitom korpusu.** Sustavni pregled 155 studija visokog obrazovanja utvrdio je da 117 (75,5 %) izvješćuje o uspješnoj implementaciji, 124 (80,0 %) pokriva samo kratkoročni učinak, a samo 23 (14,8 %) izvješćuje o neuspjesima u [[ethics|etici]], ravnopravnosti ili upravljanju — neravnoteža koju opisuju gornje provjere, izmjerena na vlastitoj dokaznoj osnovi pregleda ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga (2026.)]]).
- **Samoprocjene laskaju svima.** Ljudi svoje [[ai-literacy|UI vještine]] ocjenjuju oko **40 %** višima nego što pokazuju mjere izvedbe, zbog čega su ankete o zadovoljstvu i samopouzdanju najslabiji dokaz na koji se možete osloniti ([[self-report-measures|Mjere samoprocjene]], [[educational-measurement|Obrazovno mjerenje]]).
- **Većina proizvoda koji su već u učionicama nema nikakvih neovisnih dokaza.** [[instruction-partners-ai-in-action-learning-tour-2026|Studijsko putovanje Instruction Partnersa 2025.–26.]] profiliralo je 20 UI proizvoda namijenjenih studentima i utvrdilo da je od 16 s potpunim profilima samo sedam imalo neovisnu reviziju koja ispituje [[learning-gains|postignuće studenata]] kroz skupine učenika u SAD-u; dva su istraživana samo u inozemstvu, četiri su imala studije u tijeku, a tri su se oslanjala isključivo na interne podatke. Autori tvrde da bi neovisne kauzalne studije koje pokrivaju prioritetne skupine trebale biti očekivanje za sve proizvode namijenjene studentima — što još nije norma za alate koje škole već upotrebljavaju.

## Kako nalaz pretvoriti u odluku

Slijed koji štedi najviše uzaludnog truda, po redu.

1. **Najprije zapišite svoj ishod.** Ne „više upotrebljavati umjetnu inteligenciju“, nego „studenti mogu X bez alata“. Ako je vaš ishod izvedba bez pomoći, tada je studija koja je mjerila izvedbu s pomoći srodan dokaz, a ne izravan.
2. **Pronađite usporedbu i mjeru** — u studiji ili u odjeljku o praksi na njezinoj stranici članka. Ako bilo koja nedostaje, tretirajte tvrdnju kao demonstraciju, a ne kao nalaz.
3. **Čitajte odjeljak o ograničenjima kao upute, a ne kao ograde.** „Jedan kolegij, samoprocjena ishoda, četiri tjedna“ točno vam kaže koje vaše pretpostavke studija ne pokriva.
4. **Provjerite verziju i datum.** Ako je studija upotrijebila generaciju modela staru dvije godine, planirajte ponovno testiranje umjesto pretpostavke.
5. **Imenujte uvjete koji omogućuju provedbu.** Trošak, licence, vrijeme osoblja, pravila o podacima i to moraju li studenti plaćati razinu koja doista funkcionira. Studije rijetko nose te podatke, a oni odlučuju hoće li intervencija preživjeti semestar. U [[chick-faculty-development-ethical-ai-2026|studiji profesionalnog razvoja s deset sudionika]] svi su rekli da će nastaviti upotrebljavati umjetnu inteligenciju, dok su ti isti ljudi opisivali osobne pretplate za pristup alatima i nedostatak vremenske podrške za redizajne koje su planirali.
6. **Probno provedite u malom i izmjerite uvjet bez podrške.** Kratak pre/post s jednom procjenom obavljenom bez alata pobjeđuje anketu o zadovoljstvu. Malo i pošteno pobjeđuje veliko i retoričko. Pogledajte [[learning-design|Oblikovanje učenja]] za to gdje se to uklapa u osmišljavanje kolegija.
7. **Zapišite datum revizije i budite spremni odustati od tvrdnje.** Kada je premisa studije sposobnost koja više ne postoji, pošten je potez povući tvrdnju, a ne citirati je neograničeno — ista disciplina koju ova baza znanja primjenjuje na vlastite stranice.

## Riječi koje ćete susresti u istraživanju

Jednostavni prijevodi, kako biste mogli preletjeti studiju ili stranicu dobavljača bez metodološkog obrazovanja.

- **Veličina učinka** — kolika je razlika bila, na ljestvici na kojoj 0 znači ništa. Male vrijednosti tretirajte kao „blagi poticaj“, a ne kao „preobrazbu“.
- **Statistički značajno** — malo vjerojatno da je puka slučajnost *u ovom uzorku*. Ne govori ništa o tome je li učinak velik ni hoće li se dogoditi u vašem razredu.
- **Interval pouzdanosti** — raspon rezultata koje podaci ne mogu isključiti. Ako raspon uključuje nulu, nalaz možda ne znači ništa, koliko god naslov bio zanimljiv.
- **[[meta-analysis-systematic-review|Metaanaliza]]** — studija koja objedinjuje mnoge studije. Snažna je, ali samo onoliko koliko je dobro ono što je objedinila, zbog čega se pregledi revidiraju.
- **Pristranost objavljivanja** — zanimljivi se rezultati objavljuju, a dosadni ne, pa prosjek literature izgleda ružičastije od stvarnosti.
- **Samoprocjena** — ljudi opisuju sami sebe. Korisna za stavove, slaba za kompetentnost ili ponašanje.
- **Kontrolna skupina** — usporedni uvjet. Jedna najvažnija stvar koju treba tražiti.
- **Pre/post** — mjerenje prije i poslije bez usporedne skupine. Sugestivno, nikada konačno.
- **Analiza podskupina** — rezultati za dio uzorka. Obično nedovoljne statističke snage, pa ih tretirajte kao hipotezu.
- **Replikacija** — netko drugi dobio je isti rezultat. Rijetka i najsnažniji dostupni dokaz.
- **[[benchmark|Benchmark]]** — fiksni skup zadataka za ocjenjivanje sustava. Rezultati se mijenjaju kada se cilj pomakne, pa provjerite datum.

## Kada ipak usporiti

- **Tvrdnja dolazi od dobavljača, na dobavljačevim metrikama.** To još može biti informativno — jedan pružatelj [[intelligent-tutoring|UI poduke]] izvješćuje o metrici angažmana kalibriranoj prema ljudskim stručnjacima na F1 0,83, s poboljšanjima iz više od 40 eksperimenata u pet mjeseci ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi i sur., 2026.]]) — ali konstrukt, ocjenjivači i metrika dobavljačevi su izbori. Tražite usporednu skupinu i ishod bez pomoći.
- **Automatizirano ocjenjivanje tretira se kao riješen problem.** Visoko slaganje s ljudskim ocjenjivačima je pouzdanost, a ne kvaliteta. U jednoj studiji ocjenjivanja ljudski su se ocjenjivači slagali s konsenzusom više ocjenjivača na oko r = 0,88, pa su automatizirani rezultati blizu r = 0,85 već bili na vlastitom mjernom plafonu zadatka ([[know-when-to-trust-ai-scoring-reliability-2026|Kada vjerovati UI ocjenjivanju]]).
- **Popis referenci nosi težak teret.** Trideset referenci koje sadrže provjerljivo izmišljene bibliografske podatke potvrđeno je u 14 radova iz [[cs-education|računalnog obrazovanja]], svi iz 2025. i 2026. ([[citation-errors-hallucinations-computing-education-2026|Denny i sur., 2026.]]). Ako se tvrdnja oslanja na citat, provjerite citat.
- **Nitko nije izmjerio ponašanje o kojem ovisi vaša politika.** Kroz 493 deduplicirana zapisa i 14 prioritetnih studija nijedna studija nije izmjerila je li verifikacija uspjela *i* što je učenik zatim učinio s njom, prosuđeno prema neovisnom standardu kvalitete rezultata ([[verification-quality-reliance-calibration-genai-2026|verifikacija i kalibracija oslanjanja]]). Politike kolegija ovise upravo o tom ponašanju.

## Ako gradite ili kupujete alat

Iste provjere preokreću se u zahtjeve dizajna, a pojedinosti nose stranice o evaluaciji ove baze znanja ([[ai-ed-evaluation|Evaluacija AIED-a]], [[automated-assessment|Automatizirana procjena]]).

- **Učinite usporedbu dijelom specifikacije funkcije.** Odlučite što bi učenik inače radio i budite u stanju reći zašto vaš alat pobjeđuje to — a ne zašto pobjeđuje ništa.
- **Izmjerite uvjet bez podrške.** Ako je vaš ishod učenje, uključite zadatak obavljen bez alata; sama izvedba s pomoći zavest će vas jednako kao i vaše kupce.
- **Izvijestite kako su vaše automatizirane prosudbe validirane** — zlatni standard, cilj kalibracije, tko je rješavao neslaganja — i izvijestite o tome kao o pouzdanosti, a ne kvaliteti.
- **Navedite verziju i datum** u svakoj tvrdnji o učinkovitosti, jer ih vaše sljedeće izdanje poništava.
- **Pokažite protuteže:** trošak po studentu, [[accessibility|pristupačnost]], rukovanje podacima i što se događa s učenicima na besplatnoj razini. Pogledajte [[ai-use-disclosure|Otkrivanje upotrebe umjetne inteligencije]], [[privacy|privatnost]] i [[governance|upravljanje]].

## Za čitatelje koji žele dokaze

Gornje provjere nisu narodna mudrost; proizlaze iz dokumentiranih neuspjeha u ovoj literaturi. Ovaj odjeljak čuva pojedinosti za svakoga tko recenzira rad, brani odluku ili tvrdi da alat treba valjano evaluirati.

**Neuspjesi valjanosti imaju raspodjelu, a ne samo prisutnost.** U 46 revidiranih studija [[oneill-presumed-effective-meta-analysis-2026|O'Neillove (2026.)]] neusklađenost zavisne varijable bila je najčešći problem (n = 15) — mjera nije obuhvaćala ono što je tvrdnja iznosila — slijedila je neusklađenost nezavisne varijable (n = 11), problemi eksperimentalnog dizajna (n = 7), problemi izdvajanja podataka (n = 6), odsutnost kontrolne skupine (n = 6) i neslučajno dodjeljivanje skupina (n = 6). Od 14 metaanaliza, dvanaest je više veličina učinka izvučenih iz iste primarne studije tretiralo kao neovisne, što napuhuje prividnu dokaznu osnovu.

**Tvrdnje o podskupinama obično su neodlučive u studijama koje ih iznose.** [[ai-tutoring-micro-rct-gcse-science-2026|Mikro-RCT u znanosti za GCSE]] izvješćuje o interakciji tretmana i statusa od **0,57 bodova (95 % CI −2,25 do 3,39)**, sa stratificiranim procjenama od **g = 0,28 (95 % CI −0,04 do 0,59)** za jednu skupinu i **g = 0,35 (95 % CI 0,18 do 0,52)** za drugu. Interval koji prelazi nulu nije nalaz o [[equity-in-ai-education|ravnopravnosti]]; to je pitanje za lokalni pilot-projekt.

**Sinteza može zadovoljiti vlastiti protokol i ipak objediniti kvalitetu bez ponderiranja.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan i sur. (2026.)]] izričito navode da nisu upotrijebili nikakav formalni alat za procjenu kvalitete i da su kriterije uključivanja tretirali kao prag rigoroznosti, pa su kvazieksperimentalna i randomizirana studija doprinijele jednako — a njihova heterogenost iznosi **I² = 82,98 % u modelu s fiksnim učinkom, ali 15,75 % u modelu sa slučajnim učincima**, zbog čega brojka heterogenosti navedena bez modela ne može reći koliko je korpus nekonzistentan.

**[[assessment-validity|Validacija]] automatizirane prosudbe dio je rezultata.** Slaganje s ljudskim kodiračima izjava je o pouzdanosti, a gornji plafon pokazuje zašto to nije isto što i kvaliteta ([[machines-misread-pedagogical-quality|strojevi pogrešno čitaju pedagošku kvalitetu]]).

**Starost alata ograničenje je prvoga reda.** Pregled procjene potpomognute umjetnom inteligencijom napominje da njegovi nalazi odražavaju određene verzije modela u određenim trenucima i da kretanje područja svaki prikaz sposobnosti modela može učiniti zastarjelim u roku od nekoliko mjeseci ([[ai-assisted-assessment-instruction-higher-ed-2026|Procjena i poučavanje potpomognuti umjetnom inteligencijom u visokom obrazovanju]]). Tvrđuje ograničite na njihovu generaciju: „[[generative-ai|generativna umjetna inteligencija]] poboljšala je X“ nije prenosivo, dok „alati ere GPT-4, u ovom zadatku, uz ovaj [[scaffolding]]“ jest.

**Ciljevi benchmarka se pomiču**, pa se rezultat koji sustav danas zasićuje ili na kojem pada može obrnuti sa sljedećim izdanjem; provjere zasićenja i kontaminacije pripadaju uz svaku tvrdnju utemeljenu na benchmarku.

**Čitanje ove literature uz njezine vlastite kritičare ovdje je uobičajena praksa.** Kontrolni popisi za autore i recenzente na strani izvješćivanja nalaze se u [[reporting-interpreting-aied-research|čestom pitanju o izvješćivanju i tumačenju UI istraživanja]], a navike procjene s ove stranice uparuju se s [[theory-development-aied|Razvojem teorije u umjetnoj inteligenciji u obrazovanju]] kada je tvrdnja teorijska, a ne empirijska.

## Kratki kontrolni popis

1. Izrecite svoj ishod u jednoj rečenici, uključujući i to je li alat u njemu prisutan.
2. Pronađite usporedbu. Nema vjerodostojne usporedbe, nema odluke.
3. Uskladite mjeru sa svojom tvrdnjom i dajte prednost ishodu bez pomoći.
4. Spustite broj: čitajte učinak ispravljen za pristranost, a ne naslovni.
5. Provjerite verziju modela i datume studije.
6. Čitajte odjeljak o ograničenjima kao upute o tome što još ne znate.
7. Izračunajte trošak: licence, razine, vrijeme osoblja, pravila o podacima.
8. Probno provedite u malom s mjerom bez pomoći, a zatim odlučite.
9. Zapišite datum revizije za godinu dana i budite spremni povući tvrdnju.

## Uobičajene zablude

**„Objavljena metaanaliza ustaljen je dokaz o umjetnoj inteligenciji u obrazovanju.“** Sinteze područja nisu izdržale reviziju. [[oneill-presumed-effective-meta-analysis-2026|O'Neillova (2026.)]] revizija **14 recenziranih metaanaliza** koje tvrde da umjetna inteligencija poboljšava obrazovanje utvrdila je da **nijedna** nije pružila valjanu osnovu za taj zaključak. Objedinjena veličina učinka vrijedi onoliko koliko vrijede objedinjene studije, a u ovoj je literaturi objedinjavanje rutinski uključivalo dizajne koji ishod nisu mogli pripisati umjetnoj inteligenciji. Prije nego što citirate metaanalitički broj, pitajte što je agregirao.

**„Veća veličina učinka pripada boljoj intervenciji.“** Često obrnuto. U kontekstu pregleda koji ova stranica dokumentira, samo je **21 %** studija imalo dobro definiran tretman, kontrolnu skupinu i valjanu mjeru učenja — a prijavljena prednost za „upotrebu ChatGPT-a“ ispala je *veća* nego za namjenski izrađene [[intelligent-tutoring|inteligentne tutorske sustave]]. Slabo specificirani tretmani obično proizvode napuhane učinke jer je usporedba neodređenija, a mjera ishoda labavija. Veći broj razlog je da pogledate dizajn, a ne da preferirate intervenciju.

**„Više ocjene tijekom upotrebe alata znače da je alat više naučio.“** U jednoj studiji matematike u [[k-12|K-12]] obrazovanju studenti koji su vježbali s [[conversational-ai|chatbotom]] opće namjene dobili su bolje ocjene iz vježbe, a zatim su postigli **oko 17 % lošiji rezultat** na procjeni bez pomoći. Izvedba iz vježbe mjerena uz prisutnost alata napuhana je mjera; ona bez pomoći je ishod, a rasla je samo jedna od njih.

**„Ako je učinak stvaran, pojedinosti provedbe ne igraju veliku ulogu.“** One *jesu* učinak. Studija koja je pratila 30 studenata na jednom kolegiju u jednoj ustanovi, na verziji alata koju danas nitko ne upotrebljava, proizvela je nalaz o konfiguraciji koja više ne postoji. Specificiranje tretmana, verzija i okruženje dio su tvrdnje, a ne kontekst oko nje.

## Povezani koncepti

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]

## Povezani članci

- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[bartos-ai-learning-meta-meta-analysis-2026]] — UI učinci ispravljeni za pristranost objavljivanja iznose oko trećine prijavljene veličine
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Kriteriji uključivanja kao prag rigoroznosti i heterogenost koja se mijenja s modelom
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Kada pouzdanost automatiziranog ocjenjivanja dosegne mjerni plafon zadatka
- [[verification-quality-reliance-calibration-genai-2026]] — Što literatura o verifikaciji i oslanjanju ne mjeri
- [[citation-errors-hallucinations-computing-education-2026]] — Izmišljene reference koje su dospjele u tisak 2025.–2026.
- [[stanford-evidence-base-ai-k12-2026]] — Dobici u vježbi, gubici na ispitu: problem uklanjanja pomoći u K-12 matematici
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Učinci na podskupine čiji intervali pouzdanosti prelaze nulu
- [[chick-faculty-development-ethical-ai-2026]] — Uvjeti koji omogućuju provedbu: signali politike, osobne pretplate, nedostatak vremena
- [[ai-tutoring-quality-k12-methodologies-2026]] — Metrike dobavljača s otkrivenom kalibracijom i brojem eksperimenata
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Nalazi vezani uz verzije modela i previranje u području
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Brojevi neovisnih dokaza za 16 UI proizvoda namijenjenih studentima koji su već u upotrebi
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — Pregled može kvantificirati iskrivljenje izvješćivanja u vlastitom korpusu
