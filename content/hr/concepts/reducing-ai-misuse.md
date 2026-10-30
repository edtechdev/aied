---
title: Smanjenje zloupotrebe umjetne inteligencije
created: "2026-10-27T16:52:10-04:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
source_updated: "2026-10-25T14:15:00-04:00"
updated: "2026-10-27T16:52:10-04:00"
translation_note: "*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

> **Smanjenje zloupotrebe umjetne inteligencije**: dizajnerske, [[pedagogy|pedagoške]] i [[educational-policy-ai|političke]] poluge koje sprječavaju učenike da [[generative-ai|generativnu umjetnu inteligenciju]] zamijene za vlastiti [[cognitive-offloading|kognitivni rad]] i umjesto toga ih usmjeravaju prema [[ethics|etičkoj]], produktivnoj upotrebi. Djelotvorni pristupi poredani su po učinku, a ne po popularnosti, i najsnažniji dokazi idu u prilog **strukturnim polugama** ([[guardrails|zaštitne ograde alata]] i preoblikovanje procjene) koje mijenjaju okruženje tako da je zloupotreba teža, neovisno o motivaciji učenika, ispred **obrazovnih poluga** koje se oslanjaju na izgradnju trajne sposobnosti i [[framing-ai-use-for-students|prihvaćanja među učenicima]].

## Pitanja za razmatranje

- Učenicima koji domaću zadaću prepuštaju umjetnoj inteligenciji ocjene iz zadaće mogu *porasti*, dok im ocjene na [[summative-assessment|ispitu bez literature]] *padaju*. Prije čitanja, zašto bi se uspjeh i učenje mogli tako oštro razići, i što taj jaz govori o tome što „uspjeh“ s umjetnom inteligencijom doista znači?
- Stranica rangira intervencije prema kauzalnim dokazima i dosegu i stavlja *strukturne* poluge (zaštitne ograde alata, preoblikovanje procjene) iznad *obrazovnih* ([[teacher-role|poučavanje]] dobre prakse), upravo zato što strukturne poluge djeluju neovisno o motivaciji učenika. Slažete li se da je promjena okruženja bolja od promjene mišljenja? Koji je rizik oslanjanja na jedne i na druge?
- Tutor s ogradom koji „daje poticaj, a ne odgovor“ uklonio je štetu za učenje koju je prouzročio tutor bez ograde, iako su se oba činila korisnima. Sjetite se alata za učenje koji prebrzo daje odgovore. Gdje je granica između poticaja koji postupno podupire i odgovora koji zamjenjuje rad, i možete li je izreći prije čitanja?
- Najučinkovitije rješenje uključuje preoblikovanje procjene: ispite u nastavi bez pomoći, usmene obrane, artefakte procesa, nagrađivanje rasuđivanja umjesto površinske tečnosti. Kako biste se osjećali pohađajući kolegij koji se tako ocjenjuje, i govori li vam taj osjećaj nešto o tome zašto je ta poluga i djelotvorna i nepopularna?
- Okviri izjava o upotrebi umjetne inteligencije koji od učenika traže da svoju upotrebu preslikaju na kognitivne faze (planiranje nasuprot generiranju sadržaja) pomiču naglasak s nadzora na profesionalnu praksu. Mislite li da takva refleksija doista gradi bolju prosudbu ili učenike samo uči kako vještije opisati zloupotrebu?
- Postavite cilj prije čitanja: prepoznajte jednu konkretnu promjenu u vlastitom kolegiju ili tijeku rada koja bi zloupotrebu umjetne inteligencije učinila težom, i jednu koja bi produktivnu upotrebu učinila lakšom. Kojoj bi razini sa stranice pripadala svaka od njih?

## Uvod

Koncept počiva na dokazima da zloupotreba umjetne inteligencije aktivno šteti trajnom učenju (jaz između uspjeha i učenja dokumentiran u [[ai-misuse-learning-harm|zloupotrebi umjetne inteligencije i šteti za učenje]]), iako istodobno napuhuje neposredni uspjeh. Intervencije stoga ciljaju mehanizme te štete: prepisivanje odgovora, [[cognitive-offloading|kognitivno rasterećenje]], eroziju motivacije i potiskivanje učenja. One se međusobno ne isključuju; robusna kombinacija spaja strukturni pod s obrazovnom izgradnjom sposobnosti.

### Zašto su strukturne poluge najvažnije

Intervencije se mogu poredati prema **kauzalnim dokazima × strukturnom dosegu × skalabilnosti × [[sustainability|održivosti]]**. Na tom temelju dvije *strukturne* poluge rangiraju najviše jer djeluju bez obzira na to odabere li učenik ispravno ponašanje: one ograničavaju okruženje, umjesto da ovise o unutarnjoj motivaciji. *Obrazovne* su poluge nužne, ali djelotvorne samo kada ih učenici prihvate, pa se tretiraju kao druga razina unatoč konceptualnom obećanju. [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher i Calderon (2025.)]] podižu strukturni argument na višu razinu, tretirajući upravljanje, a ne ponašanje učenika, kao obvezujuće ograničenje, i predlažu okvir od 130 pokazatelja čestitosti kako bi akademske upravljačke strukture mogle vidjeti je li procjena autentična, poznaju li nastavnici koji ocjenjuju učenike pojedinačno i pojavljuje li se čestitost u uvodnim i orijentacijskim programima. Njihove reforme ciljaju arhitekture upravljanja, ljude te [[ai-technologies|tehnologije i resurse]], i predlažu posuđivanje [[guardrails|crvenog tima]] iz kibernetičke sigurnosti kako bi se ranjivosti procjene razotkrile prije nego što ih učenici pronađu: podsjetnik da strukturni pod održavaju institucije koje trebaju i informaciju i volju da ga održavaju.

### Razina 1: izravno dokazano da smanjuje štetu za učenje

**Oblikovanje alata s zaštitnim ogradama („poticaj, a ne odgovor“ kroz [[scaffolding|postupno skidanje potpore]]).** U najsnažnijem kauzalnom nalazu u bazi znanja terenski [[rct|randomizirani kontrolirani pokus]] pokazao je da je tutor u stilu ChatGPT-a bez ograde podigao uspjeh u vježbi s pomoći za **48%**, ali snizio ocjene na ispitu bez pomoći za **17%**, dok je tutor s ogradom (poticaji umjesto odgovora, uz podatke o problemu koje su napisali nastavnici) štetu u potpunosti uklonio. To mehanički sprječava ponašanje „štake“ prepisivanja odgovora koje stoji za štetom. Aktivnosti uključuju podučavanje poticajima umjesto odgovorima, popunjavanje poticaja točnim rješenjima i uobičajenim [[misconceptions|zabludama]] te zahtjev da učenik prvo pokuša prije nego što se otkrije rezultat umjetne inteligencije.

**Uskraćivanje odgovora štiti tijekom sesije, ali ne gradi vještinu.** [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo i sur. (2026.)]] uskratili su zajednički stav u raspravi [[agentic-ai|više agenata]] i smanjili prelazak na netočan stav umjetne inteligencije s 42 do 60,5% na 5,7 do 8,2%, ali nisu našli učinak na učenje unutar sesije (β = 0,03, p = 0,18): ograda je držala dok je bila na mjestu i ostavila nepotpomognutu prosudbu nepromijenjenom.

**Preoblikovanje procjene (mjere otporne na umjetnu inteligenciju i mjere bez pomoći).** Budući da šteta od zloupotrebe ovisi o procjeni (pojavljuje se na nadziranim mjerenjima, mjerenjima bez literature i mjerenjima bez pomoći, dok napuhuje uobičajene ocjenjivane kolegijske zadatke), promjena onoga što se računa kao postignuće i odvraća od zloupotrebe i razotkriva je. Aktivnosti uključuju ispite u nastavi bez pomoći i usmene obrane, zahtijevanje artefakata procesa (nacrti, refleksije, anotirano rasuđivanje), nagrađivanje rasuđivanja umjesto površinske tečnosti i određivanje zona bez umjetne inteligencije. [[ivory-psychology-assessment-integrity-2026|Ivory i sur. (2026.)]] zahtjevu za artefaktima procesa daju konkretan instrument: propisane povijesti verzija i reproducibilne analitičke dokumente, tako da se sumnjiva predaja može pregledati kao vremenska crta razvoja rada, a količina izmišljenog materijala koju bi učenik morao proizvesti daleko premašuje ono što mu prijenos na vanjskog izvođača štedi. Terenski dokazi velikog opsega to naglašavaju: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei i Wu (2026.)]] našli su da je prenošenje domaće zadaće podiglo ocjene iz zadaće za 18%, dok je *snizilo* ocjene na ispitu bez literature za 20%, upravo signal koji su mjerenja bez pomoći i pod nadzorom osmišljena razotkriti, a studija preporučuje veće ponderiranje procjene uživo bez literature. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall i Parapadakis (2025.)]] istoj logici daju njezinu najizričitiju formulaciju prevencije situacijskog kriminala, tvrdeći da propust pripada procjenama na koje model može uvjerljivo odgovoriti, a ne učenicima, i izvješćujući o slučaju u kojem je 25 tehnika prevencije primijenjenih na australski završni kolegij poslovanja (praćene interakcije učenika, otkrivanje „previše stručnih“ radova, slučajno preslagivanje timova, tjedni nadzirani testovi u nastavi, zahtjevi za uklanjanjem materijala kolegija koje su učenici objavili) u godinu dana, kako se izvješćuje, smanjilo slučajeve nedoličnog ponašanja sa 183 na 27. Njihovi su recepti motivacijski, a ne istražni: podignuti percipiranu svrhu procjene, izgraditi [[self-efficacy|samoučinkovitost]] i povećati percipirani društveni trošak varanja, uz upozorenje autora da će bavljenje samo jednim ili dvama od tih triju čimbenika propasti, potkrijepljeno pet disciplinski specifičnih preoblikovanja koja vremenski ograničene ispite rješavanja problema pretvaraju u [[problem-solving|rješavanje problema]] s otvorenom literaturom uz pisanu refleksiju o vlastitom procesu, sumativne eseje u [[collaborative-learning|suradničke]] arhivske istraživačke projekte, a [[eportfolio|e-portfelje]] u iterativne, recenzirane dizajnerske procese.

Strukturne poluge imaju i provedbeni krak, a njegova je baza dokaza slabija od dosega koji sugerira. [[munoz-misconduct-allegation-evidence-2026|Munoz i sur. (2026.)]] kodirali su 1.162 slučaja nedoličnog ponašanja s generativnom umjetnom inteligencijom i našli da su dokazi najčešće citirani u trenutku optužbe (rezultat [[ai-detection|detektora]], izvješća o sličnosti, obrasci sadržaja tipični za umjetnu inteligenciju) nosili najslabiju dokaznu vrijednost, dok su priznanja, opaženo ponašanje na ispitu i neovisno provjerene izmišljene reference bili najsnažniji; budući da institucionalni postupci ne postavljaju minimalni dokazni prag, kvaliteta dokaza nije imala pouzdan odnos s ishodima slučajeva, a učenici čiji su se slučajevi temeljili na slabim dokazima imali su uglavnom samo žalbu. [[wright-transcription-not-generation-2026|Wright (2026.)]] pokazuje drugi trošak iste nepreciznosti: zabrane napisane oko „generativne umjetne inteligencije“, a ne oko funkcije, obuhvaćaju alate koji samo pretvaraju format rada koji je učenik već napisao, pa se upotreba isključivo za transkripciju može sankcionirati kao nedolično ponašanje: preširok obuhvat koji najteže pogađa [[learners|učenike]] s invaliditetom i one izložene [[equity-in-ai-education|nejednakosti]], a ne čini ništa za [[assessment-validity|valjanost]]. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana, Mtshali i Mchunu (2026.)]] dodaju da [[remote-proctoring|daljinski nadzor ispita]], najraširenija kontrola čestitosti, svoj argument o odvraćanju temelji na tome kako se učenici kažu osjećati, a ne na smanjenom nedoličnom ponašanju, i nameće anksioznost, gubitak koncentracije i isključenost zbog infrastrukture za koju nije pokazano da je rješava manja zloupotreba. [[li-genai-assessment-language-equity-2026|Li (2026.)]] dodaje dimenziju oblikovanja pravila: budući da isto sučelje obavlja dopušteno jezično uređivanje i zabranjeno sadržajno sastavljanje, nediferencirana pravila o generativnoj umjetnoj inteligenciji nameću obveze usklađenosti nerazmjerno nagnute prema skupini učenika koji engleski upotrebljavaju kao dodatni jezik, pa je obranjivija prevencija granica između potpore i zamjene utemeljena na svrsi i usidrena u konstruktu procjene, uz kalibrirano objavljivanje, proporcionalnost stupnjevanu kroz odluke o pragu, dokazima i sankciji te dizajnerske poluge (stupnjevane predaje, kratka usmena provjera usklađena s konstruktom, pitanja utemeljena na kritici) koje obavljaju posao koji otkrivanje ne može. Prevencija mora pokriti i sam alat za ocjenjivanje: [[humble-prompt-injection-ai-grading-red-team-2026|Humbleovo (2026.)]] crveno-timsko ocjenjivanje našlo je da su dvije od pet strategija neizravnog ubacivanja poticaja ugrađenih u datoteku predaje podigle esej koji nije prolazio do prolaza neotkriveno, uz prijavljene stope uspjeha od 100% i 94%, pa ondje gdje alati umjetne inteligencije ocjenjuju rad učenika, [[human-in-the-loop-ai|ljudski pregled]], jasnije razdvajanje uputa od predanog sadržaja i testiranje otpornosti pripadaju u strukturni pod, a ne u neobveznu razinu.

### Razina 2: snažna potpora okvira, visok potencijal

**Sekvence upotrebe s postupnom potporom: prvo misliti, zatim umjetna inteligencija, zatim refleksija.** Osam načela oblikovanja za integriranje LLM-ova bez potiskivanja [[critical-thinking|kritičkog mišljenja]]: sačuvati kognitivno trenje, postaviti umjetnu inteligenciju kao privremenog partnera u razmišljanju, a ne kao autoritet, ugraditi kontrolne točke vrednovanja, zahtijevati [[metacognition|metakognitivno]] vođenje dnevnika i zapise poticaja te uravnotežiti faze posredovane umjetnom inteligencijom s fazama bez nje. Korelacijski dokazi (samostalan rad prije umjetne inteligencije daje snažnije rezultate) snažni su; to je pedagoški potpuna inačica Razine 1.

**[[ai-literacy|Pismenost o umjetnoj inteligenciji]] i pismenost o [[prompt-engineering|poticajima]] uz namjernu vježbu i neposredne [[feedback|povratne informacije]].** Modul za [[k-12|škole K-12]] koji je upotrebljavao vježbu poticaja utemeljenu na scenarijima s automatskim ocjenjivačem [[llm|LLM-om]] poboljšao je stvarne vještine oblikovanja poticaja i podigao pouzdanje u upotrebu umjetne inteligencije za učenje za **10,4%**, pri čemu je 87% izvijestilo da je naučilo kako odgovorno upotrebljavati umjetnu inteligenciju. Dokazani su dobici u vještini; otvoreno je pitanje pretvaraju li se oni u kasnije [[learning-gains|ishode učenja]]. Modul se bavi i [[equity-in-ai-education|nejednakošću]] u prethodnom pristupu umjetnoj inteligenciji.

**Strukturirani okviri izjava o upotrebi umjetne inteligencije.** Zamjena generičkih kućica „upotrebljavao sam umjetnu inteligenciju“ [[discipline-specific-aied|izjavama specifičnima za domenu]] koje upotrebu preslikavaju na kognitivne faze (strukturno planiranje nasuprot generiranju sadržaja) iznuđuje refleksiju o procesu učenja i pojašnjava granicu između prihvatljive pomoći i nedoličnog ponašanja, pomičući naglasak s nadzora na profesionalnu praksu.

Obrazovne poluge izgledaju drukčije kada se čestitost tretira kao praksa koju treba poučavati, a ne kao pravilo koje treba provoditi. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026.)]] tvrdi da su režimi čestitosti utemeljeni na otkrivanju i provjeri neusklađeni s radom pojačanim generativnom umjetnom inteligencijom i preoblikuje čestitost u pedagošku praksu koja se ostvaruje kroz [[evaluative-judgment|procjenjivačku prosudbu]] (sposobnost učenika da odvaže mogućnosti, opravda akademske odluke i preuzme odgovornost u nesigurnosti), učinjenu vidljivom kroz artefakte kao što su anotirani tragovi odluka, dokumentirana provjera, usmena obrana i povijesti verzija od nacrta do nacrta, pri čemu je otkrivanje degradirano na jedan dopunski sloj, a ne na glavnu infrastrukturu. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa i Mezgebu (2026.)]] isti otvor nalaze s učenikove strane: u 27 intervjua na jednom etiopskom [[higher-ed|sveučilištu]] upotreba je bila gotovo univerzalna, većina sudionika pripisivala je generativnoj umjetnoj inteligenciji porast postignuća, a najoštrija je pritužba išla u drugom smjeru: korisnici umjetne inteligencije dobivali su bolje ocjene od marljivih samostalnih radnika, što su sudionici opisali kao demotivirajuće. Autori zaključuju da uvjerenja učenika bolje predviđaju etičku upotrebu nego institucionalna pravila, pa svijest, jasna politika i preoblikovanje procjene moraju stići zajedno: to je obrazovna razina sa stranice izrečena kao uvjet, jer izgradnja sposobnosti mijenja ponašanje samo kroz [[framing-ai-use-for-students|prihvaćanje među učenicima]] popraćeno strukturnim podom. [[ji-student-voices-academic-integrity-scoping-2026|Jijev (2026.)]] [[meta-analysis-systematic-review|pregled opsega]] 38 studija o glasovima učenika daje inačicu istog zaključka na razini područja: pregledane studije konvergiraju prema pomaku s retrospektivnog otkrivanja na proaktivno etičko rasuđivanje, prema poučavanju etike umjetne inteligencije i „AI-plagiranja“ u [[curriculum-design|kurikulumu]], a ne u jednokratnim sesijama [[ai-literacy|pismenosti]], i prema detaljnim smjernicama koje zajedno stvaraju voditelji, nastavnici i učenici, jer se nejasne smjernice čitaju kao prešutno dopuštenje, a ne kao oprez. Ji vlastito čitanje vidi u tome da vlasništvo i moralno rasuđivanje motiviraju učenike više od straha od kazne, i da učenici nisu ni pasivni primatelji generativne umjetne inteligencije ni krivci bez moralnog ograničenja, nego moralni akteri koji rade u sivoj zoni: premisa ove razine izrečena kao nalaz.

### Razina 3: obećavajuće, slabiji izravni kauzalni dokazi

**Metakognitivne intervencije i intervencije samoprocjene.** Refleksivni dnevnici, zapisi poticaja i obuka u kalibraciji obnavljaju „odsutnu kognitivnu osnovicu“ učenika odraslih uz umjetnu inteligenciju koji ne mogu locirati vlastitu kognitivnu granicu jer je tečnost koju generira umjetna inteligencija maskira. Konceptualno središnje, ali još nije kauzalno testirano.

**Preoblikovanje motivacije.** Budući da dostupnost umjetne inteligencije nagriza [[motivation|autonomnu motivaciju]] („zašto se uopće truditi?“), restrukturiranje zadataka oko ciljeva koje umjetna inteligencija ne može ispuniti i oko [[agency|djelotvornosti učenika]] izravno cilja eroziju ustrajnosti koja pojačava izravnu štetu.

**Kritička pismenost o umjetnoj inteligenciji.** Okvir znanja i moći koji učenike uči da ispituju, osporavaju i sudjeluju u [[governance|upravljanju umjetnom inteligencijom]], umjesto da je troše. Dugoročno, usmjereno na jednakost i strukturno u svojim ambicijama, iako su njegovi učinci na učenje uglavnom neispitani.

**Prepoznavanje [[ai-sycophancy|podlizivanja]] radi sprječavanja nekritičkog prihvaćanja.** Budući da [[ai-sycophancy|podliziva]] umjetna inteligencija potvrđuje, a ne izaziva korisnika, ona je izravan put zloupotrebe: učenici koji dobiju potvrđujuće slaganje s netočnim razmišljanjem potiču se da umjetnu inteligenciju zamijene za vlastiti [[cognitive-offloading|kognitivni rad]]. [[contextual-sycophancy-ai-literacy|Kontekstualno podlizivanje]] pokazuje da pismenost o umjetnoj inteligenciji i obuka u poticajima smanjuju, ali ne uklanjaju petlju pogreške, pa prevencija zloupotrebe mora obrazovnu obuku u prepoznavanju upariti s dizajnom korektivnog trenja na razini sustava (vidi ograde na Razini 1).

- **[[desirable-difficulties|Produktivno trenje]] i pedagoška funkcija.** Sydneyski brzi pregled tvrdi da generativna umjetna inteligencija potkopava učenje kada učenicima omogući da zaobiđu kognitivno i metakognitivno trenje potrebno za učenje, i da namjerno oblikovani alati uvode *produktivno trenje* (uskraćivanje odgovora, traženje objašnjenja). Razlikuje četiri pedagoške funkcije: učenje *od*, *s*, *o* i *oblikovanjem* generativne umjetne inteligencije, svaka sa svojim zahtjevima prema djelotvornosti i procjeni ([[young-people-learning-generative-ai-rapid-review-2026]]).

## Uobičajene zablude

**„Poučavanje učenika o rizicima glavna je poluga protiv zloupotrebe.“** To je poluga koja ovisi o suradnji učenika, zato je ovdje rangirana ispod strukturnih. Ograde i preoblikovanje procjene djeluju bez obzira na to odabere li učenik ispravno ponašanje; obrazovni pristupi djeluju samo uz prihvaćanje. Razlika nije moralna, nego mehanička: promijenjeno okruženje izravno ograničava ponašanje, dok promijenjeno uvjerenje mora preživjeti noć prije roka.

**„Ako ograda drži tijekom sesije, učenje je osigurano.“** Držanje i poučavanje odvojeni su ishodi, a korpus sadrži čist dvostruki rezultat. Uskraćivanje zajedničkog stava u raspravi [[agentic-ai|više agenata]] smanjilo je prelazak učenika na netočan stav umjetne inteligencije s 42 do 60,5% na 5,7 do 8,2%, što je snažan zaštitni učinak, ali nije proizvelo **nikakav učinak na učenje unutar sesije** (β = 0,03, p = 0,18). Ograda je odradila svoj posao kao ograda i nije postala poduka. Oblikovati za prevenciju zloupotrebe nije isto što i oblikovati za učenje.

**„Otkrivanje zloupotrebe i kažnjavanje strategija je prevencije.“** Prevencija mora pokriti i sam alat za ocjenjivanje. [[humble-prompt-injection-ai-grading-red-team-2026|Humbleovo (2026.)]] crveno-timsko ocjenjivanje našlo je da su dvije od pet strategija neizravnog ubacivanja poticaja ugrađenih u datoteku predaje podigle ocjenu eseja koji nije prolazio. Tijek rada koji otkriva zloupotrebu među učenicima, a vjeruje nepregledanom sadržaju predaje, branjen je samo s jedne strane.

**„Zloupotreba je problem motivacije učenika.“** [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher i Calderon (2025.)]] podižu obvezujuće ograničenje na višu razinu, tretirajući upravljanje, a ne ponašanje učenika, kao ono što treba mijenjati, i predlažu okvir od 130 pokazatelja čestitosti. A šteta za učenje mjerljiva je na razini opsega: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei i Wu (2026.)]] našli su da je prenošenje domaće zadaće podiglo ocjene iz zadaće za 18%, dok je *snizilo* ocjene na ispitu bez literature za 20%: dizajnerski propust koji se pojavljuje upravo u jazu o kojem govori ova stranica.

## Smjernice za provedbu prema ulozi

**Za nastavnike i timove kolegija**

- Počnite od procjene, a ne od teksta politike. Za svaki ocjenjivani zadatak pitajte bi li inačica bez pomoći pokazala ono što namjeravate potvrditi, i prvo popravite zadatak: to je poluga koja ne zahtijeva pristanak učenika.
- Prihvatite alate koji daju poticaj, a ne odgovor, ondje gdje je tutor s umjetnom inteligencijom dostupan, jer je terenski randomizirani pokus o tutorima s ogradom i bez nje najsnažniji kauzalni dokaz na ovom području.
- Provjerite otpornost vlastitog tijeka ocjenjivanja na ubačene upute u predanim datotekama prije nego što zloupotrebu među učenicima tretirate kao jedinu prijetnju.
- Tretirajte uspjeh uz dopuštenu umjetnu inteligenciju i uspjeh bez pomoći kao dva različita mjerenja; podjela 18%/20% iznad nevidljiva je ako ne prikupite oba.

**Za razvojne programere**

- Ugradite ograničenje u sučelje, a ne u upozorenje. Tutor koji može proizvesti gotov odgovor pod pritiskom roka i proizvest će gotov odgovor.
- Ne zaključujte o učenju iz usklađenosti s ogradom. Rezultat rasprave pokazuje da je ponašanje držalo dok su mjere učenja ostale nepromijenjene, pa ishode mjerite odvojeno od interakcija.
- Signale zloupotrebe pokažite nastavnicima kao dijagnostiku, a ne kao presude, jer u dokazima uokvirivanje upravljanja stoji iznad ponašanja pojedinog učenika.

**Za administratore i kreatore politika**

- Postavite obvezujuće ograničenje ondje gdje ga dokazi postavljaju. Pokazatelji i strukture upravljanja bave se okruženjem; poticanje učenika bavi se osobom koja najmanje može promijeniti institucionalno oblikovanje.

## Povezani koncepti

- [[ai-misuse-learning-harm]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[assessment]]
- [[ai-literacy]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[motivation]]
- [[prompt-engineering]]
- [[ai-sycophancy]]
- [[trust-calibration]]
- [[framing-ai-use-for-students]]
- [[cognitive-surrender]]

## Povezani članci
- [[ivory-psychology-assessment-integrity-2026]] — Tragovi dokaza u sustavu kontrole verzija i reproducibilni analitički dokumenti kao odvraćanje od zloupotrebe (Ivory i sur. 2026.)
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Uskraćivanje preporuke uvelike je spriječilo pretjerano oslanjanje, a da nije izgradilo prosudbu koju štiti
- [[generative-ai-guardrails-harm-learning]] — Generativna umjetna inteligencija bez ograda može naškoditi učenju
- [[genai-performance-vs-learning]] — Razlikovanje dobitaka u uspjehu od učenja
- [[ai-assessment-scale-reform]] — Skala procjene s umjetnom inteligencijom i reforma procjene
- [[critical-thinking-genai-scaffolding]] — Postupno podupiranje kritičkog mišljenja generativnom umjetnom inteligencijom
- [[aaai2026-prompting-literacy-k12]] — Učenje upotrebe umjetne inteligencije za učenje (modul pismenosti o umjetnoj inteligenciji za K-12)
- [[genai-declaration-frameworks-higher-education]] — Strukturiranje transparentnosti: okviri izjava o generativnoj umjetnoj inteligenciji
- [[absent-cognitive-baseline-2026]] — Odsutna kognitivna osnovica
- [[ai-literacy-power-knowledge]] — Pismenost o umjetnoj inteligenciji: vježba u znanju i moći
- [[contextual-sycophancy-ai-literacy]] — Skriveni trošak kontekstualnog podlizivanja: intervencija u pismenosti o umjetnoj inteligenciji
- [[sycophantic-ai-social-interaction-2026]] — Podliziva umjetna inteligencija čini ljudsku interakciju s vremenom napornijom i manje zadovoljavajućom
- [[ssaho-ai-academic-integrity-review-2025]] — Izgradnja kulture i preoblikovanje procjene umjesto nadzora putem otkrivanja
- [[young-people-learning-generative-ai-rapid-review-2026]] — Kognitivna predaja, produktivno trenje i metakognitivna nejednakost
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Promišljanje usmenih ispita kao autentične procjene otporne na umjetnu inteligenciju
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Kazna za učenje od generativne umjetne inteligencije: prenošenje domaće zadaće šteti učenju
- [[ai-overreliance-complex-adaptive-system-2026]] — Pretjerano oslanjanje na umjetnu inteligenciju modelirano kao složeni prilagodljivi sustav
- [[burneo-can-edtech-close-learning-gaps-2026]] — Uklanjanje ograda uklonilo je štetu bez poboljšanja ocjena na ispitu
- [[munoz-misconduct-allegation-evidence-2026]] — Što spisi o optužbama za nedolično ponašanje doista sadrže kao dokaz
- [[wright-transcription-not-generation-2026]] — Preširoka pravila o umjetnoj inteligenciji i učenici koje zahvaćaju
- [[sharma-judgment-visible-genai-assessment-2026]] — Čestitost kao procjenjivačka prosudba, a ne usklađenost
- [[mulisa-students-genai-integrity-perspectives-2026]] — Učenici o tome je li generativna umjetna inteligencija alat za varanje ili partner u učenju
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Što daljinski nadzor ispita čini učenicima i jednakosti
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — Prevencija situacijskog kriminala protiv varanja uz pomoć umjetne inteligencije: sa 183 na 27 slučajeva i pet disciplinski specifičnih preoblikovanja (Leaton Gray, Edsall i Parapadakis 2025.)
- [[ji-student-voices-academic-integrity-scoping-2026]] — Što preporučuje 38 studija o glasovima učenika: suoblikovana jasnoća i obrazovno rasuđivanje umjesto otkrivanja (Ji 2026.)
- [[li-genai-assessment-language-equity-2026]] — Gdje jezična potpora prestaje, a zamjena počinje za pisce koji engleski uče kao dodatni jezik (Li 2026.)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Ubacivanje poticaja kao put zloupotrebe protiv ocjenjivanja umjetnom inteligencijom (Humble 2026.)
- [[coates-governing-academic-integrity-indicators-2025]] — Upravljanje kao obvezujuće ograničenje čestitosti: okvir od 130 pokazatelja (Coates, Croucher i Calderon 2025.)
