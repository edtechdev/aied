---
title: "Koje su značajne praznine u istraživačkoj literaturi o umjetnoj inteligenciji u obrazovanju?"
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
updated: "2026-10-29T14:24:50-04:00"
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Rok za prijavu na natječaj je za osam dana, a odjeljak o kontekstu treba jednu rečenicu o tome što ovo područje još ne zna. Ili vam je kolega rekao odboru da poučavanje uz umjetnu inteligenciju podiže postignuća, pozivajući se na dvogodišnji eksperiment u 18 srednjih škola, a vi ste osoba koja mora reći što ta studija doista može nositi. Ili birate temu doktorskog rada i čini se da je svaka njezina verzija već obrađena.

Praznine koje su važne odnose se na snagu, specifičnost i primjenjivost. Umjetna inteligencija može obavljati obrazovne zadatke; otvorena su pitanja proizvodi li određeni dizajn trajnu korist, za koga, kojim mehanizmom i pod kojim uvjetima. Ta razlika odlučuje o dvjema stvarima na vašem stolu: što sljedeće proučavati i čega se u međuvremenu prestati tvrditi. [[limitations-in-aied-research|Ograničenja u istraživanju UI u obrazovanju]] katalog je koji stoji iza ove stranice. Dokazi o [[intelligent-tutoring|inteligentnim sustavima poučavanja]], prediktivnoj [[learning-analytics|analitici]], [[generative-ai|generativnoj umjetnoj inteligenciji]] i autonomnim agentima također nisu međusobno zamjenjivi, a istraživanje o upotrebi umjetne inteligencije za podršku učenju razlikuje se od istraživanja o poučavanju ljudi o umjetnoj inteligenciji, kako objašnjava pregled [[ai-education|Umjetna inteligencija u obrazovanju]].

## Kratka verzija

**1.** Usporedite umjetnu inteligenciju sa snažnom alternativom bez umjetne inteligencije koja drži kurikul, vježbu i podršku nepromijenjenima i navedite što je umjetna inteligencija dodala.

**2.** Mjerite odgođenu izvedbu bez pomoći i navedite da potpomognuta izvedba nije dobitak u učenju.

**3.** Izvijestite koja je komponenta paketa obavila posao i koji mehanizam tvrdite.

**4.** Validirajte svaki automatizirani rezultat i simuliranog učenika prema stvarnim učenicima, uključujući učenike izvan vašeg razvojnog uzorka.

**5.** Navedite granicu populacije, jer objedinjeni prosjek ne odgovara na pitanje pravednosti.

**6.** Opišite ustroj dovoljno dobro da ga netko drugi može ponovno izgraditi.

## Odaberite usporedbu koja izolira umjetnu inteligenciju

Rigorozni razredni eksperimenti postoje, pa „potrebna su nam randomizirana ispitivanja“ više ne imenuje prazninu. Oštrije je pitanje dodaje li UI komponenta vrijednost povrh dodatne vježbe, boljih materijala, pravodobne povratne informacije ili više nastavne podrške.

[[one-click-away-khanmigo-two-year-school-experiment-2026|Jedan klik dalje]] izvješćuje o skromnim dobicima u postignućima u 18 srednjih škola uz ograničenu suštinsku uključenost u rad s tutorom, a autori napominju da su dobici nalikovali onima iz strukturirane vježbe bez umjetne inteligencije. To je dokaz o implementiranom paketu i ne može izolirati što je umjetna inteligencija unutar njega dodala.

Problem ispod je pojmovni jednako kao i empirijski. „ChatGPT“ imenuje alat, a ne metodu. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich i sur. (2025)]] pregledali su 19 usporedbi ChatGPT-a u obrazovanju: samo 4 (21%) specificiralo je sve tri stvari, ponovljiv tretman, operacionaliziranu kontrolu i valjanu mjeru učenja (74% dobro definiran tretman, 42% dobro definirana kontrola, 53% ishod učenja). Kada nova umjetna inteligencija dolazi zajedno s novim aktivnostima, povratnim informacijama ili dizajnom sučelja, medij i metoda su isprepleteni i nijedan se učinak ne može pripisati umjetnoj inteligenciji.

Što bi to razriješilo: usporedbe sa stvarnim alternativama bez umjetne inteligencije, uz kurikul, mogućnosti vježbe i podršku držane što je moguće nepromijenjenima, plus neovisne replikacije preko ustanove, nastavnika, predmeta i modela. Metode ovdje odgovaraju na različita pitanja. [[qualitative-research|Kvalitativni]] i [[design-based-research|rad utemeljen na dizajnu]] objašnjavaju primjenu, dok dobro osmišljeni eksperimenti nose kauzalne tvrdnje, kako izlaže [[research-methods-aied|Metode istraživanja učinkovitosti]].

## Mjerite učenje nakon što alat nestane

Poboljšan rad tijekom upotrebe umjetne inteligencije nije dokaz učenja koje nadživljava prestanak pomoći. Sinteze [[learning-gains|Dobici u učenju]] i [[cognitive-offloading|Kognitivno rasterećenje]] stalno povlače istu granicu između potpomognute izvedbe, zadržanog znanja, samostalnog zaključivanja i prijenosa.

[[making-ai-tutoring-productive-mastery-math-2026|Kako poučavanje uz umjetnu inteligenciju učiniti produktivnim]] pokazuje problem mjerenja u randomiziranom eksperimentu s više od 6.000 učenika srednjih škola. Pravilo savladanosti „tri točna odgovora zaredom“ podiglo je uspjeh definiran na platformi, a da samo po sebi nije proizvelo zamjetne dobitke u učenju tjedan dana kasnije. Najjači dokaz iz odgođenog testiranja pojavio se kada je umjetna inteligencija bila unutar tijeka savladavanja i usredotočena na uvježbani materijal.

Preostala praznina tiče se putanja sposobnosti, a jedan dodani posttest je ne zatvara. Nitko nije utvrdio zadržavanje kroz mjesece, prijenos na druge zadatke, izvedbu nakon povlačenja pomoći ni točnost učenika u procjeni onoga što znaju, a područje nije razlučilo neuspjeh stjecanja vještine od propadanja već uspostavljene. Istraživanje rasterećenja još mora pokazati kada delegiranje podupire te putanje, a kada potiskuje vježbu koja ih gradi.

## Saznajte koji je dio paketa obavio posao

„Učenje potpomognuto umjetnom inteligencijom“ obično objedinjuje nekoliko promjena: nove povratne informacije, dodanu refleksiju, raspravu među vršnjacima, drukčije sljedove zadataka, izmijenjene poticaje u ocjenjivanju. Paket koji uspije ne kaže vam koje su komponente bile nužne.

[[genai-feedback-design-multisite-experiment|Dizajn povratnih informacija generativne UI usmjeren na čovjeka]] stvarni je napredak po tom pitanju. Među 1.176 studenata prve godine refleksivni i hibridni dizajni nadmašili su izravnu [[ai-feedback-quality|UI povratnu informaciju]] u odgođenom prijenosu bez umjetne inteligencije. Hibridni uvjet spojio je samoprocjenu, [[peer-assessment|povratnu informaciju vršnjaka]] i kritiku umjetne inteligencije. To razdvaja kako je povratna informacija ustrojena i upotrijebljena od toga imaju li učenici uopće pristup povratnoj informaciji.

Još je otvoreno: doprinos i vrijeme početnih samostalnih pokušaja, samoobjašnjenja, doprinosa vršnjaka, korektivne povratne informacije, natuknica i postupnog povlačenja pomoći, te kako svaki od njih djeluje s [[prior-knowledge|prethodnim znanjem]] i težinom zadatka.

Teorijska praznina ide usporedno. Imenovati [[learning-theories|teoriju učenja]] nije isto što i testirati je. Studija treba teorijsko predviđanje vezano uz određeno ponašanje sustava i mjerljiv proces učenja, a statistička medijacija obavještava to objašnjenje bez utvrđivanja kauzalnog mehanizma. [[theory-development-aied|Razvoj teorije u umjetnoj inteligenciji u obrazovanju]] i [[scaffolding|postupna potpora]] vode argument dalje.

## Validirajte mjeru prije nego što je protumačite

Konstrukti poput uključenosti, [[critical-thinking|kritičkog mišljenja]], pismenosti u području umjetne inteligencije i [[personalized-learning|personalizacije]] mjere se nedosljedno u ovoj literaturi. Samoprocjene opisuju percepcije; ne mogu zamijeniti dokazanu kompetenciju. Tehnička točnost, kvaliteta rezultata koju ocjenjuju stručnjaci i učenje studenata tri su različita cilja evaluacije. [[educational-measurement|Obrazovno mjerenje]] i [[ai-ed-evaluation|Evaluacija UI u obrazovanju]] te razlike tretiraju kao temeljne.

Jedna praznina leži unutar problema mjerenja: [[ai-technologies|UI sustavi]] koji se rabe za evaluaciju drugih UI sustava. U tekstu [[llm-student-simulation-misconception-faithfulness|Simuliranje studenata ili ulizničko rješavanje problema?]] [[simulating-students|simulirani studenti]] često su napuštali zadane [[misconceptions|zablude]] nakon korektivne povratne informacije, bez obzira na to je li se povratna informacija bavila zabludom, pa su njihovi odgovori mogli učiniti nedjelotvorno poučavanje uspješnim. Ciljana obuka poboljšala je mjeru vjernosti u studiji, a poboljšanje na toj mjeri nije validacija prema ljudskom učenju.

Nedostaje validacija cijelog lanca evaluacije, od ponašanja modela do [[pedagogy|pedagoške]] prosudbe, do odgovora učenika, do obrazovnog ishoda, na učenicima i u okruženjima koji nisu korišteni tijekom razvoja. Ljudska prosudba treba istu pažnju, jer slaganje među ocjenjivačima nije dokaz da je procijenjen pravi konstrukt.

## Odlučite što ocjenjivanje još može potvrditi

Umjetna inteligencija stvara dva povezana problema ocjenjivanja: pomaže u proizvodnji rada koji se ocjenjuje i može utjecati na to kako se taj rad boduje.

Studija baze znanja o [[ai-agents-complete-lms-assessment-validity-2026|agentima umjetne inteligencije koji dovršavaju ocjenjivane zadatke u LMS-u]] dokumentira agente koji se kreću živim preddiplomskim kolegijem i dovršavaju ocjenjivane aktivnosti. To pokazuje sposobnost koja dovodi u pitanje pretpostavke o dokazima koje proizvode studenti. Ne utvrđuje koliko je takva upotreba česta i ne čini asinkrono ocjenjivanje kao kategoriju nevaljanim.

Istraživačko je pitanje koji dizajni još podupiru obranjive zaključke o učeniku. [[eportfolio|Portfelji]], refleksije, stupnjevite predaje i zapisi aktivnosti trebaju validaciju kao dokazi, a ne pretpostavku da utvrđuju autorstvo ili razumijevanje. Studije bi trebale testirati kombinacije dokaza prema neovisno promatranoj kompetenciji, uzimajući u obzir pristupačnost, radno opterećenje, privatnost i anksioznost studenata. [[assessment-validity|Valjanost ocjenjivanja]] drži pojedinosti.

Za [[automated-assessment|automatizirano bodovanje]], [[llms-do-not-grade-essays-like-humans-2026|LLM-ovi ne ocjenjuju eseje kao ljudi]] izvješćuje o sustavnom neslaganju između gotovih modela i ljudskih ocjenjivača. Nalazi su specifični za konfiguraciju i pokazuju zašto unutarnja dosljednost ne može nositi tvrdnju o valjanosti.

[[human-capability-test-learning-outcomes-ai-2026|Test ljudskih sposobnosti za ishode učenja u eri umjetne inteligencije]] predlaže odvojeno ocjenjivanje onoga što učenici moraju činiti samostalno, onoga što mogu postići uz umjetnu inteligenciju i onoga što moraju provjeriti i obraniti. To je okvir koji čeka empirijsku validaciju.

Otkrivanje je najjasnija slijepa ulica na ovom području. [[karr-ai-detection-humanization-2026|Karr i sur. (2026)]] pokrenuli su dva komercijalna detektora pri τ = 0,50 na 642 objavljena engleska sažetka. Lagano uređivanje umjetnom inteligencijom u skladu sa smjernicama označeno je u 38-80%. Neizmijenjeni izvornici iz 2023-25 označeni su u 9-15%, pri čemu je rad izvan [[stem-education|STEM]] područja daleko iznad STEM-a uz p < 0,001. Nakon humanizacije alati su uhvatili manje od 4% pretvorbi označenih kao UI, stopa lažno negativnih veća od 96%. Rezultat koji kažnjava poštenu pomoć i propušta izbjegavanje ne može utemeljiti zaključak o učeniku.

## Prestanite čitati rezultate pismenosti kao dokaz ponašanja

Istraživanje intervencija u pismenosti u području umjetne inteligencije dovoljno je opsežno za sintezu. [[liu-ai-literacy-interventions-meta-analysis-2026|Intervencije u pismenosti u području umjetne inteligencije u obrazovanju]] obuhvaća 59 studija i 7.211 sudionika, izvješćuje o pozitivnom prosječnom učinku i također o znatnoj varijaciji sa širokim intervalom predviđanja koji prelazi nulu. Ishodi usmjereni na znanje ispali su snažniji od vještina, stavova ili etike.

Oštrija je praznina mijenja li poučavanje pismenosti ono što ljudi čine kada rabe umjetnu inteligenciju, a još jedan okvir kompetencija to ne bi zatvorio. Mogu li učenici prepoznati nepotkrijepljene tvrdnje, provjeriti izvore, odbiti zavaravajuće prijedloge, uočiti neprimjereno slaganje i odabrati kada ne delegirati? Drži li išta od toga pod vremenskim pritiskom i prenosi li se na nepoznate sustave i discipline?

Rješavanje toga traži ocjenjivanje utemeljeno na izvedbi u kombinaciji s promatranjem stvarnih odluka i odgođenim praćenjem, uz pojmovno znanje, operativnu vještinu i kritičku prosudbu držane odvojeno, a ne objedinjene. [[ai-literacy|Pismenost u području umjetne inteligencije]] i [[trust-calibration|Kalibracija povjerenja]] pružaju te razlike.

## Izvijestite koga nalaz izostavlja

Nalazi iz jednog kolegija, ustanove, jezika ili populacije učenika rijetko daju pravo na odluke drugdje, problem koji sinteza [[limitations-in-aied-research|Ograničenja u istraživanju UI u obrazovanju]] tretira kao ponavljajući. Kako se učinci razlikuju prema razvojnoj fazi, disciplini, prethodnom znanju, invaliditetu, jeziku i uvjetima resursa, ostaje uglavnom nemjereno.

Istraživanje pravednosti također mora razdvojiti pristup, vještine i ishode. Sinteza [[digital-divide|Digitalni jaz]] jasno kaže da uređaji i pristup alatima ne uspostavljaju jednaku sposobnost za korist. [[school-ai-education-readiness-gaps-agency-2026|Smanjuje li školsko obrazovanje o umjetnoj inteligenciji jazove u pripremljenosti?]] pratilo je 752 učenika nižih razreda srednje škole u Hong Kongu: jazovi u psihološkoj pripremljenosti su se smanjili, dok su razlike na objektivnom testu pismenosti u području umjetne inteligencije ostale. Svaka skupina je napredovala, a nejednakost se nije zatvorila. Profili prethodnog učenja nisu bili slučajno dodijeljeni, pa njihova kauzalna uloga ostaje nepoznata.

Pokrivenost je tanka na određenim mjestima. [[differential-effects-across-learner-groups|Različiti učinci među skupinama učenika]] broji literaturu po populaciji: učenici drugog jezika i višejezični učenici te učenici s invaliditetom najdublji su nizovi, slijede rod i neurodivergentnost, učenici prve generacije i međunarodni studenti imaju po jednu studiju u ovom korpusu, daroviti i visokopostignući učenici praktički su neistraženi, a izbjeglice, imigranti i raseljeni učenici ne pojavljuju se ni u jednoj. Baza dokaza takvog oblika ne može odgovoriti na pitanje pravednosti zbrajanjem.

Kapacitet se razlikuje i unutar jednog nacionalnog sustava. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye i sur. (2026)]] ocijenili su integraciju umjetne inteligencije na 45 nigerijskih sveučilišta i našli umjerenu ukupnu usvojenost (M = 4,79, raspon 1,83-7,83 na ljestvici od 10 bodova), pri čemu tip ustanove nije predviđao integraciju kada su starost i zemljopis kontrolirani (starost β = 0,43; lokacija jugozapad β = 0,31). Unutarnje sposobnosti međusobno su korelirale pri r = 0,79-0,80, a međunarodne suradnje s partnerstvima s industrijom pri r = 0,74, pa povezane ustanove akumuliraju složene prednosti. Koji dizajni izgradnje kapaciteta mijenjaju ishode u novijim, slabije povezanim ustanovama, nije testirano.

Istraživački je prioritet prepoznati dizajne koji smanjuju razlike u dokazanoj sposobnosti, sudjelovanju i [[agency|djelovanju]], uz ishode i opterećenja podskupina izviještene uz prosječne dobitke. Pristupačnost nosi vlastito neriješeno pitanje: uklanja li dizajn prepreku sudjelovanju ili zamjenjuje sposobnost koju učenik treba razviti. Vidi [[equity-in-ai-education|Pravednost u obrazovanju o umjetnoj inteligenciji]] i [[accessibility|pristupačnost]].

## Recite tko drži kontrolu i kada se ona mijenja

Kako sustavi planiraju, pokreću radnje, drže pamćenje i koordiniraju alate, obrazovno pitanje postaje tko bi trebao kontrolirati koje dijelove procesa učenja i kada bi se ta kontrola trebala promijeniti.

[[agentic-ai-education-scoping-review|Agentna umjetna inteligencija u obrazovanju: pregled područja]] mapira 474 studije i nalazi ograničenu longitudinalnu validaciju, koncentraciju u [[higher-ed|visokom obrazovanju]] i STEM-u te slabu integraciju obrazovne teorije: samo 29% pregledanih studija eksplicitno se oslanjalo na obrazovnu teoriju, što je nalaz o tom korpusu, a ne o cijelom istraživanju umjetne inteligencije u obrazovanju.

Otvorena pitanja slijede. Proizvodi li pomoć koju pokreće učenik drukčije ishode od pomoći koju pokreće agent? Može li se podrška povući kako se kompetencija razvija, bez gubitka? Zadržavaju li učenici sposobnost osporiti sustav? Sinteze [[agentic-ai|Agentna umjetna inteligencija]] i [[human-ai-collaboration|Suradnja čovjeka i umjetne inteligencije]] dodaju intervenciju i odgovornost [[teacher-role|nastavnika]] u okruženjima s više agenata, gdje nitko nije utvrdio tko odgovara za odluku agenta. Veća autonomija pedagoški je izbor čiju bazu dokaza tek treba izgraditi.

## Testirajte sigurnosne neuspjehe na stvarnim učenicima

Obrazovna sigurnost seže dalje od činjenične točnosti i zabranjenih zahtjeva. Tutor može dati točan odgovor, a pritom ukloniti priliku učenika da zaključuje, pojačati zabludu ili izgraditi ovisnost. [[pedagogical-safety|Pedagoška sigurnost]] pokriva taj konstrukt.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] prepoznaje neuspjehe, uključujući prekomjerno otkrivanje odgovora i napuštanje postupne potpore, sa znatno više neuspjeha u testiranju kroz više krugova. To su nalazi [[benchmark|referentnih testova]] pod određenim uvjetima, a ne procjene koliko često šteta nastaje u učionicama.

Što se događa kada ti neuspjesi susretnu stvarne učenike tijekom trajne upotrebe, nije poznato. Koji proizvode privremenu zbrku, koji trajne zablude, koji smanjuju motivaciju, a koji slabe samostalnu sposobnost, nije izmjereno. Nitko nije utvrdio ni koje zaštitne mjere smanjuju te rizike bez prekomjernog odbijanja ili frustracije. Dugoročni rad također treba povjerenje, spremnost na traženje ljudske pomoći, [[agency|djelovanje učenika]] i odnose s vršnjacima i nastavnicima kao ishode. Za djecu to zahtijeva studije primjerene razvojnoj fazi koje povezuju ponašanje sustava s obrazovnim i relacijskim ishodima.

## Razdvojite usvajanje od primjene

Tehnička sposobnost ne utvrđuje da se alat dobro rabi, a stručno usavršavanje ne doseže automatski učenike. Veza koja nedostaje obično ide od pripreme nastavnika, preko promijenjene razredne prakse, do ishoda učenika.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Prvo pedagogija, drugo tehnologija]] višerazinska je studija 46 nastavnika i 2.832 učenika. Pedagoško znanje o umjetnoj inteligenciji bilo je povezano s percepcijama i namjerama učenika, a nijedna mjerena komponenta znanja nastavnika nije bila izravno povezana s dobitcima u znanju učenika o umjetnoj inteligenciji. Takve povezanosti ne utvrđuju da bi intervencija usavršavanja uzrokovala bolje učenje.

Otvoreno je pitanje koje kombinacije mentoriranja, [[curriculum-design|usklađenosti s kurikulom]], rutina pregleda, rasporeda i institucionalne podrške proizvode trajno poboljšanje, a studije trebaju promatrati provedeno poučavanje, a ne samopouzdanje nastavnika ili namjeru usvajanja. [[teacher-ai-competency|Kompetencija nastavnika za umjetnu inteligenciju]] i [[educational-development|Obrazovni razvoj]] pokrivaju to područje.

Komparativna isplativost druga je praznina. Evaluacije bi trebale uračunati provjeru, ispravljanje, obuku, nadzor, održavanje i vrijeme primjene uz troškove pretplate i upotrebe modela te usporediti pružanje potpomognuto umjetnom inteligencijom sa stvarnim alternativama. Pitanje na koje vrijedi odgovoriti jest kakvu obrazovnu korist cijeli ustroj donosi za resurse koje troši.

## Brojite dokumente upravljanja kao namjere

[[ethics|Etička]] načela i okviri upravljanja nužni su, a njihovo postojanje ne utvrđuje da mijenjaju praksu ili štite učenike.

[[agarwal-ethical-values-norms-aied-2026|Agarwal i sur.]] pregledali su 25 članaka i našli da su krajnji korisnici u etičkoj literaturi uglavnom pasivni, a glasovi studenata praktički odsutni, uz napetosti među vrijednostima i asimetrije moći među dionicima. To opisuje pregledanu literaturu. To nije tvrdnja da studenti nikada ne sudjeluju u dizajnu umjetne inteligencije u obrazovanju.

Nedostaju dokazi o tome koje upravljačke odredbe čine mjerljivu razliku. Mijenja li sudjelovanje studenata i nastavnika nabavu, dizajn alata, pravila ocjenjivanja ili pravnu zaštitu nakon pogreške? Hvataju li postupci ljudskog pregleda posljedične pogreške? Jesu li alternative upotrebi umjetne inteligencije doista dostupne ljudima kojima se kaže da je rabe? Istraživanje privatnosti ima paralelnu prazninu: obrazovna vrijednost dodatnog prikupljanja podataka obično se pretpostavlja, a dizajni koji minimaliziraju podatke rijetko su uspoređivani s invazivnijima po učenju i autonomiji učenika. Vidi [[governance|Upravljanje umjetnom inteligencijom]] i [[privacy|privatnost]].

## Učinite studiju ponovno izgradivom

Umjetna inteligencija u obrazovanju ima neuobičajeno težak problem ponovljivosti. Studije izostavljaju upute, verzije modela, postavke, kod i pojedinosti poučavanja, a vlasnički sustavi mogu se promijeniti tijekom ili nakon intervencije. [[limitations-in-aied-research|Ograničenja u istraživanju UI u obrazovanju]] dokumentira taj obrazac.

Ponovna izgradnja studije znači opisati nastavni ustroj jednako kao i model: zadatke učenja, izvore sadržaja, dopuštene radnje, sučelje, podršku nastavnika, uvjete ocjenjivanja i sve što se promijenilo tijekom primjene. Reproducirati jednu konfiguraciju i testirati prenosi li se njezino pedagoško načelo na drugu dva su odvojena postignuća, a smjernice za izvješćivanje u [[research-methods-aied|Metodama istraživanja učinkovitosti]] bave se objema.

Sinteza treba istu pažnju. [[meta-analysis-systematic-review|Meta-analiza i sustavni pregled]] navodi slabe primarne studije, pristranost objavljivanja, heterogene intervencije i nekompatibilne ishode kao ograničenja objedinjenih zaključaka, a jedan prosječni „učinak umjetne inteligencije“ skriva razlike koje su edukatorima potrebne. Pregledi bi trebali razdvojiti potpomognutu izvedbu od samostalnog učenja, razlikovati vrste intervencija i uvjete usporedbe te učiniti odluke o kodiranju provjerljivima.

Literatura sinteza i sama je praznina. [[oneill-presumed-effective-meta-analysis-2026|Forenzički pregled O'Neilla (2026)]] obuhvatio je 14 [[meta-analysis-systematic-review|meta-analiza]] s visokim učinkom i našao da nijedna nije pružila valjanu osnovu za svoje tvrdnje. Nema koherentnog konstrukta: alat se tretira kao jedna intervencija, višedimenzionalni ishodi se objedinjuju. Pristranost objavljivanja nevaljano je procijenjena u svih 14. Prijavljeni I² kretao se od 77,2% do 94,4% u svakoj analizi koja ga je prijavila, a 12 od 13 bilo je iznad 80%. 61% slučajno provjerenih primarnih studija imalo je zabrinutosti o valjanosti. Tih 14 analiza prikupilo je više od 2.000 citata u otprilike 16 mjeseci, a povučena meta-analiza još je citirana kao autoritativna u 60% radova koji su je citirali nakon povlačenja, bez napomene. Od 14 radova koji citiraju drugu provjerenu meta-analizu čiji je sažetak najavljivao velik učinak „obrazovanja o umjetnoj inteligenciji“, a koja je zapravo mjerila poučavanje studenata o umjetnoj inteligenciji, samo 2 su je citirala primjereno, 8 ju je čitalo kao dokaz da integracija umjetne inteligencije poboljšava učenje, a 4 su bila pogrešna na druge načine. Pregled traži od časopisa da zahtijevaju potpunu transparentnost podataka za meta-analize (protokole pretraživanja, kodirane karakteristike studija, izdvojene statistike, analitički kod), traži od urednika da objavljivanje ne tretiraju kao dokaz kompetencije za recenziranje i traži da povlačenja budu vidljiva gdje god se članak otkrije, izveze ili citira. Ponovljivost pokriva lanac sinteze, ne samo pojedinačnu studiju.

Nastavnici koji žele verziju na razini učionice mogu slijediti [[evaluating-ai-interventions-methods|metode evaluacije UI intervencija]].

## U čemu istraživači i nastavnici griješe u vezi s ovim

**Području nedostaju studije.** Nedostaju mu specificirane studije. Postoje višelokacijski eksperimenti, randomizirana ispitivanja s tisućama učenika i 14 meta-analiza s visokim učinkom. Samo 21% provjerenih usporedbi definiralo je tretman, kontrolu i ishod dovoljno dobro da se učinak može pripisati.

**Imenovanje teorije je njezino testiranje.** Citiranje teorije učenja odluka je o uokvirivanju. Test treba predviđanje, ponašanje sustava koje ga provodi i mjeru procesa koja bi mogla ispasti obrnuto.

**Validirani automatizirani rezultat validiran je ishod.** Slaganje s ljudskim kodirateljima utvrđuje dosljednost s tim kodirateljima. Simulirani studenti poboljšali su se na mjeri vjernosti, a da nisu validirani prema ljudskom učenju, a lanac od ponašanja modela do ishoda ostaje neizgrađen.

**Pristup je pravednost.** U hongkonškoj studiji jazovi u psihološkoj pripremljenosti smanjili su se dok su razlike na objektivnom testu ostale, a svaka skupina je napredovala bez zatvaranja nejednakosti. Uređaji i licence mijenjaju tko može doći do alata.

**Više autonomije je napredak.** Veća neovisnost agenta dizajnerski je izbor. Uz 29% od 474 agentne studije koje se oslanjaju na obrazovnu teoriju i ograničenu longitudinalnu validaciju, nitko nije pokazao da premještanje kontrole na sustav poboljšava učenje.

## Prigovori koje ćete čuti

**„Praznina je samo u tome da trebamo više randomiziranih ispitivanja.“** Dovoljno ih već postoji, a problem je uzvodno od oznaka dizajna: ispitivanje paketa koji objedinjuje nove povratne informacije, nove zadatke i novo sučelje ne može ništa pripisati umjetnoj inteligenciji. Uvjet usporedbe mjesto je gdje je posao.

**„Ne mogu provesti višegodišnje praćenje.“** Tada izmjerite jednu odgođenu priliku bez pomoći i recite koji interval pokriva. Tjedan je stvarni nalaz, a studija pravila savladanosti dobila je rezultat na tjedan dana tako što je umjetnu inteligenciju ugradila u tijek rada i usredotočila se na uvježbani materijal.

**„Randomizacija je u mom kolegiju nemoguća.“** Rad utemeljen na dizajnu i kvalitativni rad odgovaraju na pitanja primjene na koja ispitivanja ne mogu, a područje treba oboje. Gdje je slučajna dodjela moguća, ona i dalje nosi kauzalnu tvrdnju.

**„Objedinjena veličina učinka već mi kaže što djeluje.“** 14 provjerenih meta-analiza definiralo je tretman kao alat, objedinilo nekompatibilne ishode i prijavilo I² iznad 80% u 12 od 13 analiza koje su ga dale. Objedinjeni broj opisuje skup studija s problemom konstrukta.

**„Simulirani studenti jeftiniji su, pa validacija može čekati.“** U studiji ulizivanja simulirani studenti napuštali su zablude bez obzira na to je li se povratna informacija njima bavila, a to je način neuspjeha zbog kojeg nedjelotvoran tutor izgleda djelotvorno.

## Što učiniti ovaj tjedan

**1.** Napišite uvjet usporedbe studije koju planirate u jednoj rečenici. Ako je to uobičajena praksa, revidirajte ga prije nego bilo što drugo.

**2.** Dodajte dizajnu jedno odgođeno mjerenje bez pomoći i navedite interval u odjeljku o metodi.

**3.** Upišite granicu populacije u izjavu o dizajnu, a zatim u sažetak, kako tvrdnja ne bi mogla putovati dalje od uzorka.

**4.** Uzmite najjaču tvrdnju u svom trenutnom nacrtu i izbrišite verziju koju vaša mjera ne može nositi. Zadržite rečenicu o gornjoj granici.

**5.** Za svaki automatizirani rezultat ili simuliranog učenika u studiji imenujte ljudski standard i suca prije početka prikupljanja podataka.

## Kamo dalje

[[reporting-interpreting-aied-research|Izvješćivanje i tumačenje istraživanja umjetne inteligencije u obrazovanju]] izvještajni je par ovoj stranici, a [[research-methods-aied|Metode istraživanja u umjetnoj inteligenciji u obrazovanju]] pokrivaju dizajnerske izbore iza svake praznine. [[evaluating-ai-interventions-methods|Evaluacija UI intervencija]] bavi se mjerama i dizajnima usporedbe, [[checking-whether-educational-ai-works|Provjera djeluje li obrazovna umjetna inteligencija]] kraća je verzija pitanja učinkovitosti, a [[does-ai-help-students-learn|Pomaže li umjetna inteligencija studentima da uče]] prikuplja što se zna o trajnom učenju. [[theory-development-aied|Razvoj teorije u umjetnoj inteligenciji u obrazovanju]] i [[equity-ethics-pedagogical-safety-research|Pravednost, etika i pedagoška sigurnost u istraživanju]] vode teorijski i pravednosni niz dalje.
