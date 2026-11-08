---
title: "Ograničenja u istraživanjima umjetne inteligencije u obrazovanju"
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
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/limitations-in-aied-research"
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

> **Ograničenja u istraživanjima umjetne inteligencije u obrazovanju** — ponavljajuće slabosti i ograničenja koja utječu na to koliko povjerenja možemo imati u nalaze o umjetnoj inteligenciji u obrazovanju i kako ih čitatelji trebaju tumačiti. Ona presijecaju pojedinačne studije: metodološka ograničenja (generalizabilnost, veličina uzorka, valjanost, samoprocjena), problem brzine (umjetna inteligencija i nalazi brzo zastarijevaju, dok objavljivanje kasni), ograničenja u odnosu istraživanja i prakse (reproducibilnost, prakse FAIR, vlasnički alati) i slaba upotreba teorije. Metodološka ograničenja mjerljiva su, a ne impresionistička: u kritičkom pregledu 80 HCI studija [[critical-thinking|kritičkog mišljenja]] s umjetnom inteligencijom 42 (52 %) nije imalo kontrolnu skupinu, a većina ostalih oslanjala se na samoprocjenu, pa pozitivni nalazi područja počivaju na dizajnima koji ne mogu odvojiti učinak umjetne inteligencije od obične refleksije ([[critical-review-critical-thinking-hci-research-ai-2026]]). Kodiranje ishoda nejednako je na isti način: sustavni pregled 103 studije visokog obrazovanja razvrstao je svoj korpus u četveročlanu tipologiju ishoda i smjestio 56 % u jedan uvjetni obrazac, u kojem su samopouzdanje i motivacija rasli bez odgovarajućeg dobitka u trajnoj kompetentnosti ([[generative-ai-higher-education-systematic-review-2026]]). Prepoznavanje tih ograničenja ključno je za kritičko čitanje literature i za osmišljavanje snažnijih studija.

## Pitanja za razmatranje

- Koliko biste vjerovali naslovu poput „UI poduka povećava učenje za 30 %“ kada biste saznali da dolazi od 30 studenata na jednom kolegiju u jednoj ustanovi? Stranica ističe generalizabilnost i male uzorke kao ponavljajuća ograničenja — što biste željeli znati prije nego što postupite prema bilo kojem pojedinačnom nalazu?
- Upečatljivo ograničenje je „problem brzine“: umjetna inteligencija se razvija brže nego što se nalazi objavljuju, pa studija jedne generacije modela već može opisivati zastarjeli sustav. Kako bi to trebalo promijeniti povjerenje koje polažete u istraživanja umjetne inteligencije u obrazovanju?
- Mnoge se studije oslanjaju na [[self-report-measures|samoprocjenu]] stavova i upotrebe, koja je pristrana — ljudi precjenjuju svoju kompetentnost i podcjenjuju zloupotrebu. Jeste li ikada odgovorili na anketu o vlastitim vještinama ili ponašanju na način koji nije odgovarao stvarnosti? Zašto se mjere utemeljene na percepciji tako često razilaze s objektivnom izvedbom?
- Stranica napominje da se poznati okviri poput Bloomove taksonomije često pogrešno čitaju kao stroge ljestvice i da su čak i široko korištene teorije poput teorije [[cognitive-offloading|kognitivnog opterećenja]] osporene. Kada ste vidjeli da se neka teorija poziva kao ustaljena istina u kontekstu u kojem su njezini vlastiti dokazi zapravo bili sporni?
- Većina UI istraživanja ovisi o vlasničkim, neprozirnim modelima čije podatke i ažuriranja ne možete pregledati. Ako ne možete provjeriti koji je točno model proizveo rezultat, koliko možete vjerovati tvrdnjama izgrađenima na njemu — i što bi nalaze učinilo reproducibilnijima?
- Ako ste nastavnik ili dizajner bez vremena za čitanje primarnih istraživanja, kako odlučujete koje su UI tvrdnje dovoljno pouzdane da promijenite svoju praksu — s obzirom na to da je literatura rascjepkana, privremena i pisana za istraživače?

## Uvod

Umjetna inteligencija u obrazovanju brzo se razvija i heterogeno je područje, a njegova dokazna osnova nosi osebujan skup ograničenja koja istraživači, praktičari i kreatori politika trebaju odvagnuti pri upotrebi bilo kojeg nalaza. Neka su od njih zajednička sa širom literaturom [[learning-sciences|znanosti o učenju]] i psihologije; druga su pojačana ili jedinstvena zbog same prirode umjetne inteligencije. Ova ih stranica organizira u četiri područja koja se međusobno presijecaju.

## Metodološka ograničenja

Stranica o [[research-methods-aied|istraživačkim metodama]] ove baze znanja detaljno opisuje prednosti i ograničenja svakog dizajna. Nekoliko se ograničenja ponavlja kroz dizajne i zaslužuje posebnu pozornost:

- **Generalizabilnost.** Nalazi iz jednog kolegija, ustanove, discipline ili nacionalnog konteksta možda se ne prenose. Mali uzorci, uzorci prigodnosti ili uzorci iz jedne ustanove ograničavaju vanjsku valjanost; rezultati jednog UI alata rijetko se protežu na drugi alat ili kontekst.

- **Međunacionalne usporedbe uvjerenja nose mjerni rizik.** Anketa na 1.405 [[k-12|nastavnika K-12]] iz pet zemalja upotrijebila je automatizirani strojni prijevod bez povratnog prijevoda i testiranja mjerne invarijantnosti, a zabrinutost zbog [[academic-integrity|plagijata]] i [[creativity|kreativnosti]] mjerila je pojedinačnim česticama, pa se njezine nacionalne razlike ne mogu čitati kao ekvivalentni konstrukti ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu i sur. (2026.)]]).
- **Rigoroznost na razini sinteze zasebna je os od rigoroznosti primarne studije.** Metaanaliza može zadovoljiti vlastite kriterije uključivanja i ipak objediniti studije koje se razlikuju po dizajnu, vjernosti provedbe i mjeri ishoda, a da ništa od toga ne ponderira: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan i kolege (2026.)]] izričito navode da nisu upotrijebili formalni alat za procjenu kvalitete i da su kriterije uključivanja tretirali kao prag rigoroznosti, pa su kvazieksperimentalna i randomizirana studija jednako doprinijele objedinjenoj procjeni za [[stem-education|STEM]]. Isti pregled pokazuje srodnu opasnost u izvješćivanju: njegova se heterogenost navodi kao I² = 82,98 % u modelu s fiksnim učinkom i I² = 15,75 % u modelu sa slučajnim učincima, što znači da čitatelji koji izvade jednu brojku heterogenosti bez njezina modela ne mogu utvrditi koliko je korpus doista nekonzistentan. Sintezu procijenite prema tome kako je postupila sa zavisnim veličinama učinka, kvalitetom i heterogenošću, a ne samo prema tome je li slijedila protokol pretraživanja.

- **Dizajn pretraživanja određuje naslovne brojeve sinteze.** U scoping pregledu 195 studija [[teacher-education|obrazovanja nastavnika]], digitalna kompetencija i [[tpack|TPACK]] bili su eksplicitni deskriptori pretraživanja, dok nastavni dizajn i procjena nisu imali ekvivalent, pa prijavljenih 46,5 % i 1,9 % karakteriziraju korpus koji je pretraživanje vratilo, a ne područje ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández i sur. (2026.)]]).
- **Male veličine uzoraka.** Mnoge su AIED studije nedovoljne statističke snage — premalo sudionika za pouzdano otkrivanje smislenih učinaka ili za podupiranje snažnih tvrdnji koje se iz njih katkad izvode.
- **Proširenje podataka može proizvesti naslovnu metriku.** U automatiziranom ocjenjivaču eseja čiji je skup za obuku sadržavao radove 83 studenta, generirani odgovori razine 1 — predlošci, skraćivanje, uklanjanje ključnih riječi — podigli su slaganje za Focus za +0,346 kvadratno ponderirane kappe s osnovice od 0,028, pa je najsnažniji ordinalni signal počivao na tekstu koji nijedan student nije napisao ([[automated-essay-scoring-critical-thinking-physics-2026|Firdausi i sur. (2026.)]]).
- **Rezultati na krajnjoj točki mogu sakriti ono što se proučava.** U PRISMA pregledu 103 studije [[higher-ed|visokog obrazovanja]] 56 % je izvijestilo o dobicima koji su bili uvjetovani podrškom ili verifikacijom, a nulte razlike u ocjenama često su išle sa stvarnim promjenama u procesu — više otklanjanja pogrešaka, više ciklusa provjere — pa same ocjene ne mogu reći je li [[generative-ai|generativna umjetna inteligencija]] praksu ojačala ili izdubila ([[hawi-genai-higher-ed-uses-outcomes-risks-2026|Hawi i Samaha (2026.)]]).

- **Dizajn validacije može proizvesti naslovni broj.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara i Halloluwa (2026.)]] testirali su petnaest modela na prepoznavanju poznatosti temeljenom na EEG-u i pokazali da standardna stratificirana unakrsna validacija dopušta vremensko propuštanje i izvješćuje do 0,9853 F1, dok validacija Group K-Fold neovisna o pokusu spušta vrhunac na 0,6038 F1 — još iznad slučajnosti, ali daleko od navedenog rezultata.
- **Benchmarkovi mogu dati upravo one neuspjehe o kojima izvješćuju.** Stručno ponovno ocjenjivanje 250 odbijenih zadataka iz fizike pripisalo je 238 (95,20 %) pogreškama benchmarka ili ocjenjivača, a samo 12 (4,80 %) stvarnim pogreškama modela, pa izmjerena stopa pogreške modela ne može pasti ispod stope defektnosti instrumenta.([[frontier-models-physics-benchmark-audit-2026|Ansari i sur. (2026.)]])
- **Valjanost i mjerenje.** [[assessment-validity|Konstruktna valjanost]] često je tanka: zamjenske mjere za „učenje“, „[[student-engagement|angažman]]“ ili „pismenost“ vrlo se razlikuju, a instrumenti nisu uvijek validirani za populaciju ili konstrukt koji se proučava. Točnost [[benchmark|benchmarka]] nije jednaka obrazovnoj učinkovitosti.
- **Podaci samoprocjene i anketa.** Velik dio korpusa oslanja se na samoprocjenu stavova, motivacije i upotrebe. Samoprocjena je podložna pristranosti — ispitanici precjenjuju kompetentnost, podcjenjuju [[ai-misuse-learning-harm|zloupotrebu]] i pogrešno procjenjuju vlastito ponašanje — pa se mjere utemeljene na percepciji često razilaze s objektivnom izvedbom (vidi [[ai-literacy-assessment-misalignment]] i [[educational-measurement]]).
- **Izvješćivanje o kontekstu i validaciji može se kvantificirati kroz literaturu.** PRISMA-ScR pregled 421 studije o NLP-u na komentarima nastavničke evaluacije utvrdio je neriješenu zemlju u 221 studiji, opseg jedne ustanove u 232 od 284 riješena slučaja (81,7 %), vanjsku validaciju u 33 (7,8 %) i slaganje među anotatorima u 54 (12,8 %) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher i da Silva (2026.)]]).
- **Bogatstvo izvješćivanja mjerljivo je, a vrsta metode ga predviđa.** U 888 radova o automatizaciji pregleda, 38,0 % radova o softveru i proizvodima od 2023. nije izvijestilo o nikakvoj evaluaciji, nasuprot 9,3 % radova o LLM-ovima, a 52 % od 118 radova o LLM-ovima koji izvješćuju samo pozitivne rezultate ipak je označilo neispunjeni prag pouzdanosti — obrazac koji stoji za pet razina otkrivanja u PRISMA-LLM-u ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta i Lin (2026.)]]).
- **Standardizacija unutar svakog skupa podataka može sakriti pogrešnu tvrdnju o raspršenju.** Kada su sintetičke obrazovne kohorte standardizirane prema vlastitom raspršenju, činjenica da je njihova tjedna struktura varirala 2,6 do 4,9 puta manje od stvarne kohorte postala je nevidljiva za prijavljene statistike — rutinsko predprocesiranje, po riječima autora, a ne hipotetska briga ([[synthetic-educational-data-structural-fidelity-2026|Inoue i Yasutake, 2026.]]).

- **Oznake koje generiraju modeli nisu zlatni standard.** Kada su oznake kojima se sustav trenira ili evaluira i same proizveli jezični modeli, slaganje među anotatorima ne može utvrditi valjanost: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado i sur. (2026.)]] nikada nisu validirali svoje anotacije tvrdnji prema ljudskim zlatnim oznakama, a 49 klasifikatora kodera koje objavljuju nasljeđuju to podrijetlo i možda nisu valjani tamo gdje se primjene značajno razlikuju. Njihova je shema također izrazito zaostajala za fino podešenim klasifikatorom treniranim na podacima koje su anotirali stručnjaci (macro-F1 0,673 prema 0,76), pa korpusi s oznakama stručnjaka ostaju vrijedni kada je potrebno visoko povjerenje.
- **Sama dokazna osnova nejednako je raspoređena.** Scoping pregled 407 studija [[formative-assessment|formativne procjene]] potpomognute tehnologijom oslonio se samo na Web of Science i Scopus. Također je isključio 61 zapis zbog jezičnih kriterija, pa zemljopisna neravnoteža o kojoj područje izvješćuje dijelom može odražavati to koji su izvori indeksirani ([[bulut-technology-supported-formative-assessment-2026|Bulut, 2026.]]).

## Problem brzine: umjetna inteligencija se razvija brže od nalaza

Umjetna se inteligencija neprestano mijenja, a zaključci izvedeni iz bilo kojeg modela ili sustava mogu **brzo zastarjeti**. Studija jedne generacije [[llm|LLM-ova]] možda ne opisuje sljedeću; rezultati benchmarka, kvaliteta poduke i čak praktična korisnost nalaza mijenjaju se kako se modeli poboljšavaju. Uz to, **proces objavljivanja je spor** — od osmišljavanja studije do recenzirane objave može proći godina ili više — pa objavljeni rezultat već može opisivati zastarjeli sustav. Recenzenti i čitatelji stoga bi AIED nalaze trebali tretirati kao privremene, vremenski osjetljive tvrdnje, a ne kao stabilne istine, i davati prednost novijim radovima, radovima usmjerenima na replikaciju i onima koji izričito navode verziju.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni i Fryer (2026.)]] posljedicu čine konkretnom za jednu literaturu: budući da su sustavi temeljeni na [[rag|RAG-u]] postali javno dostupni tek u studenome 2023., tvrde da nalaze o [[intelligent-tutoring|inteligentnom tutorstvu]] prije 2023. — utemeljene na pravilima, podudaranju ključnih riječi ili heurističkim NLP sustavima koji malo funkcionalno nalikuju današnjim velikim jezičnim modelima — treba tretirati kao povijesni kontekst, a ne kao izravno usporediv dokaz, i izvješćuju da njihov pregled nije pronašao nijedan objavljeni [[rct]] koji ispituje RAG-om temeljen UI [[conversational-ai|chatbot]] u preddiplomskom obrazovanju tijekom cijelog akademskog semestra. Implikacija je da temeljna pitanja o tome kako generativna umjetna inteligencija utječe na učenje možda treba iznova postaviti za svaku novu generaciju modela, umjesto da ih se rješava objedinjavanjem starijih rezultata.

## Ograničenja u odnosu istraživanja i prakse

Nekoliko se ograničenja tiče provođenja i infrastrukture samog istraživanja:

- **Nedostatak reproducibilnosti.** Studije često ne izvješćuju dovoljno pojedinosti (upiti, verzije modela, hiperparametri, podaci, analitički kod) da bi drugi mogli reproducirati ili provjeriti rezultate — što je poseban problem s obzirom na to kako je rezultat LLM-a osjetljiv na upite i postavke.
- **Prakse FAIR u istraživanju.** Otvorena i reproducibilna praksa — podaci i kod koji su **F**indable (pronalažljivi), **A**ccessible (dostupni), **I**nteroperable (interoperabilni) i **R**eusable (ponovno upotrebljivi), preregistracija i zajednički benchmarkovi — nejednako se prihvaća u AIED-u. Slabo pridržavanje načela FAIR otežava ponovnu upotrebu, usporedbu i nadgradnju studija.
- **Vlasnički alati i modeli.** Velik dio istraživanja ovisi o zatvorenim, vlasničkim [[ai-technologies|UI sustavima]] čije je unutarnje ponašanje, podaci za obuku i ažuriranja modela neprozirno i može se promijeniti bez najave. To ograničava reproducibilnost, onemogućuje točnu replikaciju i može nalaze vezati uz dobavljačev plan razvoja. Također postavlja pitanja o neovisnosti evaluacije (vidi [[ai-ed-evaluation]]).

## Slaba ili ograničena upotreba teorije

Ponavljajuća je kritika da mnogi empirijski članci imaju **ograničen ili zastario teorijski okvir**. Istraživači mogu:

- **Nekritički usvajati teorije.** Okviri se posuđuju jer su poznati, bez potpunog bavljenja njihovim pretpostavkama, opsegom ili dokaznom osnovom.
- **Pogrešno tumačiti okvire kao fiksne slijedove.** Nekoliko široko korištenih okvira tretira se kao uređene ljestvice po kojima učenici moraju uspinjati od „niske“ prema „visokoj“ razini — no dokazi ne podupiru uvijek početak na dnu. Na primjer:
    - **Bloomova taksonomija** često se čita kao stroga hijerarhija (prisjećanje → primjena → evaluacija), no ciljevi višega reda ne zahtijevaju prethodno uvježbavanje nižih; zadaci se mogu osmisliti tako da od početka angažiraju evaluaciju ili stvaranje (vidi [[cross-dataset-bloom-question-classification]]).
    - **ADDIE** i drugi modeli nastavnog dizajna katkad se tretiraju kao krute linearne faze, umjesto kao iterativne, fleksibilne heuristike planiranja kakve bi trebale biti (vidi [[learning-design]]).
- **Zanemarivati osporene teorije.** Neke teorije široko korištene u AIED-u same su osporene. **Teorija kognitivnog opterećenja**, primjerice, kritizirana je, a njezine su empirijske tvrdnje opovrgnute ili sporne u prethodnim studijama, no i dalje se poziva kao ustaljen temelj u novim AIED radovima.

Implikacija nije da su [[theories-and-frameworks|teorije i okviri]] beskorisni, nego da ih treba upotrebljavati s pažnjom prema njihovoj stvarnoj dokaznoj osnovi, namjeravanom opsegu i poznatim kritikama — a ne kao samorazumljive [[scaffolding|potpore]] ili krute proceduralne slijedove.

## Kriza metaanalitičkih dokaza

Sve veći korpus metaiistraživanja — pregleda koji propituju preglede — tvrdi da naslovne tvrdnje područja o dobicima u učenju potaknutima umjetnom inteligencijom počivaju na dokaznoj osnovi koja je daleko slabija nego što izgleda. Tri komplementarne kritike iznose taj argument neuobičajenom snagom:

- **Pristranost pozitivnih sinteza ozbiljna je i mjerljiva.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš i sur. (2026.)]], u metaanalizi metaanaliza na razini studije s 1.840 veličina učinka iz 67 metaanaliza, našli su snažne dokaze pristranosti objavljivanja (svi Eggerovi testovi *p* < .0001) i ekstremnu heterogenost među studijama (τ = 0,869). Učinci ispravljeni za pristranost objavljivanja bili su otprilike **trećina** uobičajeno prijavljivane veličine (SMD = 0,196 prema medijanu od 0,67 u objavljenoj literaturi), s intervalom predikcije od −1,521 do +1,908 — od velike štete do velike koristi. Nijedna podskupina prema ishodu, području, razini ili ulozi umjetne inteligencije nije pokazala dosljedne dobitke, a nije bilo razlike između studija prije i poslije 2023. Njihov je sud: široke tvrdnje o generaliziranim dobicima u učenju preuranjene su.
- **Metaanalitičke metode sustavno se pogrešno primjenjuju.** Forenzička revizija 14 utjecajnih AIED metaanaliza [[oneill-presumed-effective-meta-analysis-2026|O'Neillove (2026.)]] utvrdila je da *nijedna* nije pružila valjanu osnovu za svoje tvrdnje: nijedna nije imala koherentan konstrukt (tretirajući alat „ChatGPT“ kao da je jedna intervencija i objedinjujući rezultate testova, motivaciju, [[self-efficacy|samoučinkovitost]] i stavove u jedan broj „[[learning-gains|akademskog postignuća]]“); prijavljena heterogenost bila je ozbiljna, s I² od 77,2 % do 94,4 % u 13 metaanaliza koje su je prijavile, a 12 od tih 13 iznad 80 %, i nikada nije razriješena (nijedna nije dosegnula najmanju veličinu podskupine od deset studija, pet se oslanjalo na podskupine s jednom studijom, a tri na podskupine s dvije); dvanaest je zavisne veličine učinka iz iste studije tretiralo kao neovisne, napuhujući prividne dokaze; i nijedna nije valjano procijenila pristranost objavljivanja (diskreditirane metrike fail-safe N i pogrešno primijenjeni Eggerovi testovi bili su uobičajeni). Budući da I² ovisi o preciznosti, on sam ne može utvrditi koliko su pravi učinci međusobno udaljeni, a izvješćivanje koje bi to pokazalo uglavnom je izostalo: samo su četiri metaanalize izvijestile o varijanci među studijama (τ²), a samo dvije o intervalu predikcije, oba uključujući nulu. Većina (61 %) nasumično provjerenih primarnih studija bila je problematična, a studiju s izmišljenim referencama uključilo je šest od 14 metaanaliza.
- **„Tretman“ je crna kutija.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich i sur. (2025.)]] oživljavaju raspravu o medijima i metodama kako bi tvrdili da je „ChatGPT“ alat, a ne metoda — pitanje „poboljšava li učenje“ non sequitur je. Revidirajući podskup studija iza metaanalize Denga i sur. (2025.), našli su da je samo 21 % usporedbi imalo dobro definiran tretman, kontrolnu skupinu *i* valjanu mjeru učenja; prijavljene veličine učinka (g = 0,7) čak su premašile one namjenski izrađenih [[intelligent-tutoring|inteligentnih tutorskih sustava]] (0,66), što je znak upozorenja da je „tretman“ bio heterogeni „tajni sastojak“.

Spajanje tih triju neovisnih kritika samo je po sebi dokaz: kroz različite metode, korpuse i uokvirivanja dolaze do istog zaključka — da pozitivne AIED veličine učinka, posebno iz ranih metaanaliza, vjerojatno odražavaju **pristranost objavljivanja, nekoherentnost konstrukata i metodološke prečice** jednako kao (ili više nego) stvarne dobitke u učenju. To ne znači da UI alati nemaju obrazovnu vrijednost; znači da je dokaz *na razini područja* za tu vrijednost trenutačno napuhan i da se mora čitati u skladu s tim. To također prenosi odgovornost na [[meta-analysis-systematic-review|kvalitetu sinteze]]: metaanaliza je pouzdana onoliko koliko su koherentni njezini konstrukti, neovisne njezine veličine učinka, primjerena njezina analiza moderatora i heterogenosti i valjana njezina procjena pristranosti objavljivanja — a kritike pokazuju da se svaka od tih stvari rutinski krši.

## Kritičko čitanje AIED literature

Uzeti zajedno, ta ograničenja zagovaraju kritičko, višesignalno čitanje AIED istraživanja: provjerite generalizira li nalaz i ima li dostatnu statističku snagu; provjerite kako su konstrukti mjereni (i oslanjaju li se tvrdnje na samoprocjenu); dajte prednost novijim, verzijski eksplicitnim i reproducibilnim radovima; i propitajte teorijski okvir umjesto da poznate okvire uzimate kao zadane. To je dopuna rigoroznom [[research-methods-aied|izboru metoda]] i [[ai-ed-evaluation|evaluaciji]]: dobre metode i dobra evaluacija nužni su, ali čitanje s pažnjom na ograničenja pretvara dokaze u obranjive odluke.

## Od istraživanja do prakse

Dodatno, praktično ograničenje je **izazov primjene istraživanja u [[teacher-role|poučavanju]] i nastavnom dizajnu**. Praktičari — nastavnici, [[stakeholders|dizajneri nastave]] i osoblje za profesionalni razvoj — često nemaju vremena ni specijalizirane stručnosti za čitanje, procjenu i prevođenje primarnih istraživanja u konkretne razredne odluke. Literatura je velika, rascjepkana i pisana za istraživače; nalazi se izvješćuju sa statističkim i metodološkim pojedinostima koje nisu odmah primjenjive; a budući da su tvrdnje privremene (vidi problem brzine gore), praktičar ne može jednostavno uzeti jednu studiju zdravo za gotovo. Time nastaje jaz između onoga što dokazi podupiru i onoga što doista stiže u [[pedagogy|nastavnu praksu]].

Svrha je ove baze znanja pomoći zatvoriti taj jaz — olakšati praćenje, tumačenje i primjenu istraživanja umjetne inteligencije u obrazovanju u praksi — kurirajući nalaze u otvorenom pristupu u strukturirane, dostupne sažetke, povezujući srodne radove kroz [[ai-education|konceptualne stranice]] i ističući ograničenja koja čitatelji trebaju odvagnuti. Cilj je poduprijeti [[interpreting-and-applying-aied-research|praksu utemeljenu na dokazima]] u poučavanju i nastavnom dizajnu i pritom također iznijeti na vidjelo praznine i pitanja koja mogu usmjeriti nova istraživanja i razvoj. Razumijevanje granica istraživanja stoga nije samo sebi cilj: ono je ono što praktičarima omogućuje da nalaze primijene primjereno, a istraživačima da osmisle snažnije studije koje bolje služe praksi.

## Dvije revizijske zamke koje vrijedi znati

Dvije specifične prakse izvješćivanja napuhuju ili iskrivljuju sintezu, a obje su vidljive u objavljenom materijalu, a ne hipotetske.

**Brojka heterogenosti ovisi o modelu, a model se rijetko navodi.** Heterogenost jednog pregleda navodi se kao **I² = 82,98 % u modelu s fiksnim učinkom i I² = 15,75 % u modelu sa slučajnim učincima**. Te brojke opisuju iste podatke. Čitatelj koji izvadi jednu brojku heterogenosti bez njezina modela dobio je tehničku tvrdnju bez ikakva tumačenja, a razlika između „većina varijance nije objašnjena“ i „malo varijance nije objašnjeno“ razlika je između odbacivanja i vjerovanja području.

**Naslovni postotak može biti artefakt pojmova pretraživanja.** Scoping pregled 195 studija obrazovanja nastavnika učinio je digitalnu kompetenciju i [[tpack|TPACK]] eksplicitnim deskriptorima pretraživanja, dok nastavni dizajn i procjena nisu imali ekvivalentan pojam, pa su prijavljenih **46,5 % i 1,9 %** stope koje je sam upit konstruirao. Tvrdnja o prevalenciji smislena je onoliko koliko je smisleno pretraživanje iza nje.

**A osnovna stopa je broj koji nitko ne navodi.** Metodološka ograničenja ovdje su mjerljiva, a ne impresionistička: u kritičkom pregledu 80 HCI studija kritičkog mišljenja s umjetnom inteligencijom **42 (52 %) nije imalo kontrolnu skupinu**, a većina ostalih oslanjala se na samoprocjenu. Kada više od polovice pozitivnih nalaza nekog područja dolazi iz dizajna koji ne mogu odvojiti učinak umjetne inteligencije od obične aktivnosti, primjerena prethodna vjerojatnost za bilo koji pojedinačni nalaz je skepticizam, a ne privremeno prihvaćanje.

## Uobičajene zablude

- **„Odjeljci o ograničenjima su šablonski.“** Metodološka ograničenja **mjerljiva su, a ne impresionistička**: u kritičkom pregledu **80 HCI studija** kritičkog mišljenja s umjetnom inteligencijom **42 (52 %) nije imalo kontrolnu skupinu**. Precizan broj je ono što ograničenje čini primjenjivim.
- **„Heterogenost je jedan broj koji možete citirati.“** Isti pregled pokazuje opasnost u izvješćivanju: heterogenost se navodi kao **I² = 82,98 % u modelu s fiksnim učinkom i I² = 15,75 % u modelu sa slučajnim učincima**. Isti podaci daju priču od devet bodova ili priču od dva boda, ovisno o odabranom modelu, pa je navedeni I² bez modela netumačljiv.
- **„Velik prijavljeni učinak broj je kojemu treba vjerovati.“** Naslov poput učinka iz **30 studenata na jednom kolegiju na jednom mjestu** uobičajen je oblik krhke tvrdnje, a broj studija bez kontrolnih skupina pokazuje kako često ta krhkost ostaje neizviještena.

## Povezani koncepti

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
- [[theory-development-aied]] — Razvoj teorije u umjetnoj inteligenciji u obrazovanju

## Povezani članci
- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — AI chatbots in higher education: comparing expectations to evidence (Thoeni & Fryer 2026)

- [[ground-truth-reliability-aied]] — Pouzdanost i valjanost zlatnog standarda u evaluaciji
- [[ai-literacy-assessment-misalignment]] — Samoprocjena prema izvedbi utemeljena pismenost u području umjetne inteligencije
- [[machines-misread-pedagogical-quality]] — Zašto strojevi pogrešno čitaju pedagošku kvalitetu
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Kritičke granice UI tutora i upotrebe teorije
- [[cross-dataset-bloom-question-classification]] — Bloomova taksonomija i klasifikacija pitanja
- [[eeg-familiarity-automated-assessment-2026]] — Automating Learner Assessment: EEG-Based Familiarity Prediction
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT u obrazovanju: učinak u potrazi za uzrokom (kritika usporedbe medija)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Metaanaliza metaanaliza: UI učinci ispravljeni za pristranost objavljivanja ~1/3 prijavljene veličine
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: empirijski okvir izvješćivanja za sustavne preglede potpomognute umjetnom inteligencijom
- [[frontier-models-physics-benchmark-audit-2026]] — How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Kriteriji uključivanja kao prag rigoroznosti i brojka heterogenosti koja se mijenja s modelom (Doğan i sur. 2026.)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Klaster-randomizirano razredno ispitivanje čiji ishod izvedbe nije dosegnuo značajnost (Rücker i Becker-Genschow 2025.)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data

- [[digital-competence-ai-responsive-pedagogy-2026]] — Scoping pregled 195 studija obrazovanja nastavnika u kojem dizajn pretraživačkog niza oblikuje prijavljene frekvencije
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Međunacionalna anketa nastavnika K-12: strojno prevedene čestice, pojedinačne mjere zabrinutosti, bez testiranja invarijantnosti
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Sustavni pregled 103 studije generativne umjetne inteligencije u visokom obrazovanju: 56 % uvjetnih dobitaka, ocjene prikrivaju promjenu procesa (Hawi i Samaha 2026.)
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Proširenje podataka može proizvesti naslovnu metriku
