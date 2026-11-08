---
title: "Teorije i okviri"
created: "2026-09-19T05:40:00-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/theories-and-frameworks"
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

> **Teorije i okviri** — radni inventar objašnjavajućih i organizacijskih struktura koje ova baza znanja doista rabi. Teorije objašnjavaju zašto se učenje događa ([[learning-theories]], [[self-determination-theory]], [[sociocultural-learning]], [[activity-theory-aied|teorija aktivnosti]]); okviri organiziraju odluke o dizajnu, poučavanju i usvajanju ([[tpack]], [[samr-model|SAMR]], [[technology-acceptance-model|modeli usvajanja tehnologije]], [[icap-framework|ICAP]], [[universal-design-for-learning|univerzalni dizajn za učenje]]); modeli čine tvrdnje o učenju provjerljivima i izračunljivima ([[item-response-theory|teorija odgovora na česticu]], [[assessment-validity]], [[knowledge-tracing]]). Ovu stranicu rabite da pronađete leću na kojoj studija počiva ili da odaberete jednu za vlastiti rad.

## Pitanja za razmatranje

- Teorija predviđa što se dogodi kada se nešto promijeni; okvir vam kaže na što obratiti pozornost. Kada studija izvijesti o dobitku pod zastavom nekog okvira, ali ne iznese nijedno predviđanje koje je moglo biti opovrgnuto, što je time doista naučeno?
- [[tpack|TPACK]], [[samr-model|SAMR]], [[universal-design-for-learning|UDL]], [[technology-acceptance-model|modeli usvajanja]] i [[icap-framework|ICAP]] svi su stariji od [[llm|velikih jezičnih modela]]. Koji njihovi dijelovi i dalje vrijede kada alat može sam pisati, objašnjavati i prilagođavati se, i kako biste to utvrdili?
- Nekoliko teorija katalogiziranih u nastavku skovano je za umjetnu inteligenciju u posljednjih nekoliko godina. Što bi bilo potrebno da jedna od njih bude pogrešna, i je li to netko pokušao pokazati?
- Usvajanje se često izvješćuje kao kretanje kroz faze. Ako kolega izvijesti da je njegov kolegij ove godine prešao „sa supstitucije na redefiniciju“, koje bi neovisne dokaze zatražili prije nego što biste mu povjerovali?
- Velik dio ovog područja primjenjuje posuđenu teoriju, a ne testira je. Odaberite nalaz na koji se oslanjate: može li se preformulirati kao test [[self-determination-theory|neke teorije]], i koje bi mjerenje to zahtijevalo?

## Uvod

Svaki UI tutor, sustav povratnih informacija i nadzorna ploča ugrađuju pretpostavke o tome kako ljudi uče, bez obzira na to jesu li ih dizajneri izrekli. Ova stranica prikuplja teorije, okvire i modele iz kojih te pretpostavke dolaze, poredane labavo prema tome koliko se trenutna istraživačka literatura na njima zasniva, i ukratko kaže čemu je svaki od njih dobar. Razlike među trima oznakama stvarne su, ali male, i sažete su pri kraju, a ne tretirane kao tema. Praktično je važno na kojoj leći neka tvrdnja počiva i može li je ta leća poduprijeti.

## Teorije učenja koje literatura primjenjuje

One objašnjavaju mehanizme: imenuju dijelove koji obavljaju posao i predviđaju što slijedi kada se ti dijelovi promijene. U literaturi o umjetnoj inteligenciji uglavnom su posuđene iz psihologije i [[learning-sciences|znanosti o učenju]] te se rabe kao interpretativni okviri oko novog alata.

- **[[learning-theories|Teorije učenja (krovni koncept)]]** — cijela obitelj, uključujući klasične polove [[behaviorism|biheviorizma]] i [[constructivist|konstruktivizma]] te jaz „konstruktivizam po imenu, biheviorizam u praksi“ koji se ponavlja u UI implementacijama. Konektivizam i teorija kognitivnog opterećenja također su obrađeni ovdje.
- **[[constructivist|Konstruktivizam]]** — učenje kao aktivna izgradnja znanja. Podupire [[project-based-learning|učenje temeljeno na projektima]], [[intelligent-tutoring|UI tutorstvo]] zasnovano na dijalogu i kritiku da sustavi za vježbu i povratne informacije krše vlastitu proklamiranu pedagogiju.
- **[[sociocultural-learning|Sociokulturna teorija]]** — učenje posredovano alatima i društvenom interakcijom, zbog čega se umjetna inteligencija teoretizira kao posredujući artefakt, a ne puko pomagalo.
- **[[activity-theory-aied|Teorija aktivnosti]]** — uzima cijeli sustav aktivnosti, uključujući proturječja, kao jedinicu analize. Uobičajena u studijama o umjetnoj inteligenciji usmjerenima na nastavnike, gdje je zanimljiv nalaz obično napetost među alatima, pravilima i zajednicom.
- **[[situated-learning|Situirano učenje]]** i **[[embodied-learning|utjelovljeno učenje]]** — učenje vezano uz kontekst i uz tijelo, protuteža tretiranju umjetne inteligencije kao posve jezičnog medija.
- **[[distributed-cognition|Distribuirana kognicija]]** — mišljenje raspoređeno po ljudima i artefaktima, što UI pomoć uokviruje kao preraspodjelu kognitivnog rada, a ne kao njegovu zamjenu.
- **[[community-of-inquiry|Zajednica istraživanja]]** — društvena, kognitivna i nastavna prisutnost koje čine da mrežno iskustvo funkcionira; istovremeno teorija iskustva i dizajnerski okvir.
- **[[self-determination-theory|Teorija samoodređenja]]** — autonomija, kompetentnost i povezanost kao motivacijski preduvjeti. Često objašnjenje koje se nudi kada upotreba umjetne inteligencije podigne angažman, a ne i učenje.
- **[[cognitive-psychology|Kognitivizam]]** — obrada informacija, radno pamćenje i razilaženje između osjećaja učenja i stvarnog učenja.
- **Teorija društvene percepcije (toplina i kompetentnost)** — preuzeta iz društvene kognicije i istraživanja uslužnih robota, uokviruje kako korisnici prosuđuju kredibilitet [[agentic-ai|UI agenta]]: percipirana kompetentnost izravno je predviđala kredibilitet povratnih informacija ChatGPT-a, dok je toplina djelovala samo kroz ljudsku empatiju (SEM, 230 studenata; [[chatgpt-feedback-credibility-perceived-learning|Pérez-López i sur. (2026.)]]).
- **Četvrta kategorija afordancija predložena je, ali nije testirana.** Kodirajući 24 studije prema trodjelnoj shemi afordancija, recenzenti su utvrdili da se angažman, sigurnost i samoučinkovitost ne uklapaju u tehnološku, [[pedagogy|pedagošku]] ni društvenu kategoriju, pa su predložili emocionalne afordancije utemeljene u Bandurinoj recipročnoj determinaciji ([[genai-chatbots-language-learning-affordances-review-2026|Lopez i Arabadzhy (2026.)]]).

## Modeli učenika i procesa učenja

- **[[self-regulated-learning|Samoregulirano učenje]]** — planiranje, praćenje i vrednovanje vlastitog učenja. Radni konstrukt za pitanje doseže li UI potpora faze koje su važne ili samo izvedbu.
- **[[metacognition|Metakognicija]]** — mišljenje o vlastitom mišljenju, i konstrukt koji se najčešće imenuje kada se umjetnu inteligenciju optužuje da misli umjesto učenika.
- **[[motivation|Motivacija]]** — zašto se učenici angažiraju, i konstrukt koji u UI studijama razdvaja angažman od učenja.
- **[[self-efficacy|Samoučinkovitost]]** — uvjerenje u vlastitu sposobnost, različito od kompetentnosti, i čest medijator između upotrebe umjetne inteligencije i ishoda.
- **[[agency|Djelotvornost]]** — tko usmjerava rad: konstrukt koji stoji za napetošću kontrole i autonomije u području i za mehanizmom delegirane djelotvornosti u najnovijoj teoriji.
- **[[desirable-difficulties|Poželjne teškoće]]**, **[[retrieval-spacing-interleaving|dosjećanje, raspoređivanje i izmjenjivanje]]** i **[[refutation-text|opovrgavajući tekst]]** — nalazi koji trenje čine pedagoški vrijednim, primijenjeni na odluke o tome koliko umjetna inteligencija treba obaviti.
- **[[transfer-of-learning|Prijenos učenja]]** — ostaje li sposobnost kada se potpora povuče, što nedavna teorija tretira kao kriterij koji razdvaja učenje od pomoći, a ne kao jedan ishod među mnogima.

## Okviri poučavanja, integracije i usvajanja

- **[[tpack|TPACK]]** — nastavničko znanje koje spaja tehnologiju, pedagogiju i sadržaj; zadani okvir za studije o umjetnoj inteligenciji usmjerene na nastavnike.
- **[[technology-acceptance-model|Modeli usvajanja]]** — namjera kao funkcija percipirane korisnosti i lakoće upotrebe. Rabi se dovoljno široko da je oslanjanje područja na namjeru, a ne na ponašanje, stalna kritika.
- **[[icap-framework|ICAP]]** — rangira angažman kao pasivan, aktivan, konstruktivan i interaktivan; koristan za pitanje koji način [[student-ai-interaction|interakcija s umjetnom inteligencijom]] doista omogućuje.
- **[[samr-model|SAMR]]** — od supstitucije do redefinicije. Popularan kao priča o zrelosti, slab kao mjerni instrument.
- **[[universal-design-for-learning|Univerzalni dizajn za učenje]]**, **[[inclusive-learning|uključivo učenje]]** i **[[accessibility|pristupačnost]]** — dizajnerski okviri za pitanje kome se služi, i oni koji se najčešće zazivaju u radu na invaliditetu i [[equity-in-ai-education|ravnopravnosti]].
- **[[learning-design|Oblikovanje učenja]]**, **[[curriculum-design|oblikovanje kurikuluma]]** i **[[design-thinking|dizajnersko mišljenje]]** — kako se zadaci, slijedovi i programi strukturiraju prije nego što se odabere ikakav alat.
- **[[change-management|Upravljanje promjenama]]** — hoće li sustav uopće biti prihvaćen, što je obično institucionalno, a ne pedagoško pitanje.

## Mjerni i računski modeli

- **[[item-response-theory|Teorija odgovora na česticu]]** — procjena čestica i sposobnosti, i model koji brojeve testa čini tumačivima.
- **[[educational-measurement|Obrazovno mjerenje]]** — krajolik instrumenata, uključujući mjere izgrađene posebno za [[ai-literacy|pismenost o umjetnoj inteligenciji]].
- **[[assessment-validity|Valjanost]]** — mjeri li instrument konstrukt koji tvrdi da mjeri, što odlučuje o tome podupire li izvješćeni ishod teorijsku tvrdnju koja je uz njega vezana.
- **[[self-report-measures|Mjere samoprocjene]]** — dominantan i najkrhkiji izvor dokaza u ovoj literaturi; za nekoliko gore navedenih konstrukata poznato je da se oštro razilaze između samoprocjene i izvedbe.
- **[[knowledge-tracing|Praćenje znanja]]** i **[[student-modeling|modeliranje učenika]]** — procjena stanja učenika tijekom vremena iz podataka o interakciji.
- **[[cognitive-diagnosis|Kognitivna dijagnostika]]** — pripisivanje izvedbe određenim komponentama vještine, modelirajući pandan dijagnostičkom poučavanju.
- **[[benchmark|Referentni skupovi]]**, **[[ai-ed-evaluation|vrednovanje obrazovanja o umjetnoj inteligenciji]]** i **[[psychometrically-aware-ai|psihometrijska svijest u UI dizajnu]]** — kako se sustavi i intervencije boduju, uspoređuju i revidiraju.
- **[[design-based-research|Istraživanje temeljeno na dizajnu]]** — metoda koja proizvodi teoriju iz osmišljenih intervencija, a ne testira je unaprijed.

## Teorije skovane za eru umjetne inteligencije

Četiri prijedloga u bazi znanja grade teoriju, a ne posuđuju je. To su stranice članaka, a ne konceptualni čvorovi, jer je svaki od njih jedan argument:

- **[[generativism-learning-theory|Generativizam]]** — nova teorija učenja koja tvrdi da klasične četiri pokazuju znatna konceptualna ograničenja kako se [[generative-ai|generativna umjetna inteligencija]] širi.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Epistemička sudjelotvornost]]** — model toga kako učenici i UI sustavi zajednički proizvode znanje i razumijevanje.
- **[[absent-cognitive-baseline-2026|Odsutna kognitivna osnovica]]** — teoretizira zašto UI-nativni učenici precjenjuju vlastito učenje kada umjetna inteligencija napuhuje izvedbu.
- **[[yan-agentivism-learning-theory-ai-2026|Agentivizam]]** — teorija srednjeg dosega koja imenuje četiri mehanizma (delegirana djelotvornost, epistemičko praćenje i verifikacija, rekonstruktivna internalizacija i prijenos uz smanjenu potporu) i iznosi šest provjerljivih propozicija.

## Razlikovanje triju oznaka

Riječi se u literaturi rabe labavo, a razliku vrijedi objasniti jednim odlomkom, a ne cijelom stranicom:

- **Teorija objašnjava mehanizam** i predviđa što se događa kada se njezini dijelovi promijene. Može propasti, zbog čega studije koje je testiraju mogu izvijestiti o veličinama učinka.
- **Okvir organizira ili propisuje.** Imenuje komponente na koje treba obratiti pozornost, obično bez predviđanja veličina, i ne može se opovrgnuti.
- **Model je formalna reprezentacija**, najčešće mjerenja ili stanja učenika. Može se prilagoditi, usporediti i pokazati pogrešnim na način na koji okvir ne može.
- **Oznake se preklapaju.** [[community-of-inquiry|Zajednica istraživanja]] istovremeno je teorija i dizajnerski okvir; [[activity-theory-aied|teorija aktivnosti]] je i eksplanatorna i analitička. Tretirajte oznaku kao trag o tome što izvor tvrdi, a ne kao arhivsku kategoriju.

## Susjedni slojevi

Dvije susjedne stranice namjerno se bave nečim drugim. [[philosophy-of-ai-in-education|Filozofija umjetne inteligencije u obrazovanju]] postavlja normativna i konceptualna pitanja — čemu obrazovanje *služi*, može li stroj poučavati — i ne predviđa veličine učinka; studija može biti filozofski naivna i teorijski valjana, ili obrnuto. [[theory-development-aied|Razvoj teorije]] metadjelatnost je građenja, posuđivanja i revidiranja teorije, uključujući stalnu kritiku da velik dio rada u [[ai-education|umjetnoj inteligenciji u obrazovanju]] primjenjuje postojeću teoriju, a ne testira je. Ova stranica inventar je; razvoj teorije bavi se proizvodnjom i revidiranjem inventara.

## Odabir leće kada je pitanje praktično

- **Nastavnici** koji kreću od problema mogu raditi unatrag: ako se učenici ne angažiraju, [[icap-framework|ICAP]] i [[self-determination-theory|SDT]] imenuju različite uzroke i sugeriraju različita rješenja; ako je pitanje treba li alat uopće usvojiti, [[technology-acceptance-model|modeli usvajanja]] i [[samr-model|SAMR]] pitaju o njemu različite stvari.
- **Dizajneri učenja** najviše dobivaju od dizajnerskih okvira — [[universal-design-for-learning|UDL]], [[learning-design]] i [[scaffolding|postupna potpora]] — u paru s teorijom koja predviđa što se događa kada se potpora ukloni.
- **Istraživači** trebaju navesti koji čvor studija tvrdi i može li ga nacrt doista testirati; mjerni modeli ([[item-response-theory|IRT]], [[assessment-validity]], [[self-report-measures]]) odlučuju podupire li izvješćeni ishod tu tvrdnju.
- **Administratori** susreću te okvire kao pitanja usvajanja i promjene, gdje se fazni model često rabi kao priča o zrelosti, a ne kao instrument.

## Što okviri ne mogu

Okviri nisu dokaz. Obično su posuđeni iz konteksta prije LLM-ova i lokaliziraju ih oni koji ih primjenjuju, mogu djelovati kao brendiranje, a fazni modeli potiču usvajanje po kontrolnom popisu, koje izvješćuje o kretanju kroz razine, a ne o učenju. Tvrdnje koje počivaju na okviru treba čitati uz [[limitations-in-aied-research|prekogranična ograničenja područja]], [[assessment-validity|valjanost]] svega što je mjerilo ishod i poznate granice [[self-report-measures|samoprocjene]].

Poravnanje mehanizma s teorijom ipak može biti odlučujuće: tematska sinteza 55 studija [[game-based-learning|učenja temeljenog na igri]] uz potporu umjetne inteligencije utvrdila je da je djelotvornost ovisila o tome provodi li UI mehanizam pedagogiju kojoj je trebao služiti, a ne o algoritamskoj sofisticiranosti ([[ai-game-based-learning-systematic-review-2026|Kaşarcı i Yurt (2026.)]]).

## Uobičajene zablude

**„Primijeniti posuđenu teoriju na UI alat znači koristiti teoriju.“** Velik dio ovog područja primjenjuje posuđenu teoriju, a ne testira je, a razlika je u tome je li okvir iznio predviđanje koje je moglo propasti. Kada studija izvijesti o dobitku pod zastavom okvira, a pritom se ne obveže ni na jedno opovrgljivo predviđanje, o okviru nije naučeno ništa — ishod koji je sukladan svakoj teoriji u katalogu dokaz je za nijednu od njih.

**„Vrijednost okvira je u tome koliko dobro opisuje sustav koji ste već izgradili.“** To je naknadno označavanje. Taksonomija koja prihvaća svaki dizajn nema razlikovnu moć, zbog čega opisne okvire treba prosuđivati prema onome što isključuju. Pitanje vrednovanja nije „uklapa li se moj sustav u ovo?“ nego „koju bi vrstu sustava ovaj okvir proglasio pogrešnom?“

**„Teorije učenja, modeli učenika i okviri usvajanja zamjenjive su leće.“** Odgovaraju na različita pitanja — kako se učenje događa, kakvo je stanje učenika i zašto se praksa širi — pa se i vrste dokaza razlikuju. Odabir pogrešnog sloja proizvodi studiju koja mjeri pravu varijablu prema pogrešnom predviđanju, što se čita kao nulti rezultat, a zapravo je kategorijska pogreška.

**„Više okvira znači zrelije područje.“** Okviri skovani za eru umjetne inteligencije nakupljaju se brže nego što se testiraju, a nakupljanje bez opovrgavanja simptom je, a ne napredak. Zrelost se pokazuje rješavanjem konkurentskih predviđanja, a ne rastom rječnika.

## Povezani koncepti

- [[theory-development-aied]] — građenje i revidiranje teorije u području
- [[philosophy-of-ai-in-education]] — normativni i konceptualni sloj
- [[learning-theories]] — krovni koncept za teorije učenja
- [[learning-sciences]] — susjedno polje iz kojeg se posuđuje većina teorije
- [[limitations-in-aied-research]] — što baza dokaza može i ne može poduprijeti
- [[tpack]] — okvir nastavničkog znanja
- [[technology-acceptance-model]] — okviri usvajanja
- [[item-response-theory]] — mjerni model
- [[universal-design-for-learning]] — dizajnerski okvir
- [[research-methods-aied]] — kako se teorija testira

## Povezani članci

- [[genai-chatbots-language-learning-affordances-review-2026]] — emocionalne afordancije predložene kao četvrta kategorija u taksonomiji afordancija
- [[ai-game-based-learning-systematic-review-2026]] — poravnanje mehanizma s teorijom, a ne algoritamska sofisticiranost, pokretalo je djelotvornost u 55 studija učenja temeljenog na igri uz umjetnu inteligenciju

- [[rismanchian-ai-education-four-decades-aixed-2026]] — četiri desetljeća umjetne inteligencije u obrazovanju kroz okvir AI×Ed
- [[educating-minds-generative-ai-2026]] — teorijski bogata sinteza generativne umjetne inteligencije i učenja
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — teorija aktivnosti primijenjena na profesionalni razvoj nastavnika
- [[activity-theory-teachers-adoption-ai-sem-2026]] — teorija aktivnosti i usvajanje među nastavnicima
- [[generativism-learning-theory]] — teorija učenja predložena za eru generativne umjetne inteligencije
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — prema teoriji epistemičke sudjelotvornosti
- [[absent-cognitive-baseline-2026]] — teoretiziranje strukturne praznine u samoprocjeni UI-nativnih učenika
- [[yan-agentivism-learning-theory-ai-2026]] — teorija učenja srednjeg dosega za interakciju čovjeka i umjetne inteligencije
- [[ai-literacy-instrument-development-systematic-review-2026]] — razvoj instrumenata za mlad konstrukt
- [[mishra-control-vs-agency-history-2025]] — temeljna napetost kontrole i djelotvornosti u području
