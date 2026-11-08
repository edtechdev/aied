---
title: "Oblikovanje kurikuluma"
created: "2026-06-02T10:44:35-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks, learning-commons]
updated: "2026-11-08T06:59:36-05:00"
translation_of: "concepts/curriculum-design"
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

> **Oblikovanje kurikuluma** — proces planiranja i strukturiranja onoga što se poučava na kolegijima, programima i institucijama, uključujući ciljeve učenja, slijed sadržaja, strategije procjene i napredovanje vještina. U doba umjetne inteligencije oblikovanje kurikuluma mora uravnotežiti temeljno znanje s novim UI kompetencijama, određujući ne samo što studenti uče nego i kako uče raditi s UI alatima i kritički ih vrednovati.

## Pitanja za razmatranje

- Oblikovanje kurikuluma pita što studenti trebaju naučiti na razini programa, dok oblikovanje učenja pita kako na razini kolegija. Kada umjetna inteligencija preoblikuje neku disciplinu, koji bi od tih dvaju slojeva po vašem mišljenju trebao promijeniti prvi?
- Kako [[generative-ai|generativna umjetna inteligencija]] automatizira rad na razini implementacije, neki tvrde da se kurikulumi moraju pomaknuti prema oblikovanju sustava, apstrakciji i [[critical-thinking|kritičkom vrednovanju]]. Što bi po vašem mišljenju studenti izgubili kada bi se vještine niže razine manje naglašavale?
- Redizajn kurikuluma u doba umjetne inteligencije često se uokviruje kao ravnoteža između tečnosti s alatom i temeljnog znanja. Gdje ste vidjeli da se ta ravnoteža previše nagnula na jednu stranu?
- Okvir SAIL tretira pismenost o umjetnoj inteligenciji kao postupno izgrađivanu kroz dobne skupine i osmišljenu da odgovori na dublje „digitalne jazove“ izvan samog pristupa. Kako se ugrađivanje pismenosti o umjetnoj inteligenciji u cijeli kurikulum razlikuje od dodavanja jednog kolegija o umjetnoj inteligenciji?
- Ako svaka disciplina sada treba u sebe ugraditi UI kompetencije, tko je odgovoran za promjenu kurikuluma — nastavnici, programi ili institucije — i što je edukatorima potrebno da u tome uspiju?
- Kurikulum je slijed vještina kroz godine, a ne samo popis tema. Kako taj dulji pogled mijenja to hoće li se „jedinica o pismenosti u području umjetne inteligencije“ doista zadržati?

## Uvod

Oblikovanje kurikuluma bavi se *čime* obrazovanja na razini programa, nadopunjujući [[learning-design|oblikovanje učenja]] koje se bavi *kako* na razini kolegija. Članci u ovoj bazi znanja istražuju kako umjetna inteligencija preoblikuje kurikulume u različitim disciplinama — od softverskog inženjerstva preko arhitekture do zelenog obrazovanja — i kako edukatori osmišljavaju kurikulume koji ugrađuju pismenost o umjetnoj inteligenciji bez žrtvovanja disciplinskih temelja.

### Ključne istraživačke teme

**Redizajn kurikuluma za doba umjetne inteligencije** središnji je izazov. **[[reshaping-cs-education-genai|Lee i sur.]]** sintetizirali su nalaze međunarodnih radionica o preoblikovanju preddiplomskog [[cs-education|računalnog obrazovanja]], tvrdeći da, kako GenAI automatizira programiranje na razini implementacije, kurikulumi moraju krenuti prema oblikovanju sustava, apstrakciji i kritičkom vrednovanju — uz manje naglašavanje pojedinosti implementacije na niskoj razini. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** formalizirao je agentsko softversko inženjerstvo kao zasebnu disciplinu s kurikulumom od 21 modula usmjerenim na „evoluciju namjere“ i praktičarsku disciplinu potrebnu za upravljanje [[agentic-ai|UI agentima]]. Oboje se povezuje s [[ai-literacy|pismenošću o umjetnoj inteligenciji]] i [[scaffolding|postupnom potporom]].

Promatrajući promjenu kao sistemsku, a ne dodanu, [[rewriting-curriculum-genai-pedagogy-2026|Sabani i sur. (2026.)]] trianguliraju [[meta-analysis-systematic-review|pregled opsega]], bibliometrijsko mapiranje 209 zapisa, 36 članaka i deset intervjua s akademskim voditeljima u pet pomaka — uključujući prijenos znanja koji ustupa mjesto razvoju sposobnosti i lokalno eksperimentiranje koje ustupa mjesto institucionalnom upravljanju.

**Kartiranje i analiza kurikuluma** koriste umjetnu inteligenciju za razumijevanje postojećih kurikuluma. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng i sur.]]** analizirali su 23 nastavna plana kolegija softverskog inženjerstva uz pomoć umjetne inteligencije, prepoznajući zajedničke teme — [[prompt-engineering|inženjerstvo poticaja]], pregled koda s umjetnom inteligencijom, [[ethics|etička razmatranja]] — i izvodeći dizajnerske smjernice koje naglašavaju ravnotežu tečnosti s alatom i temeljnog znanja. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** primjenjuje računalne metode za usporedbu struktura kolegija računalnih znanosti među institucijama.

Ponderiranje mijenja ono što analiza kurikuluma izvješćuje: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath i sur. (2026.)]] dali su GPT-o3-mini da raspodijeli 100 % preko sedam poduzetničkih vještina za svaku od 48 procjena, postigavši Krippendorffovu alfu od 0,81 u odnosu na stručne pondere, ali slaganje je postalo negativno za vještine koje opisi nikada ne navode izričito (-0,19).

**Modularna struktura nadživljava trenutačni sadržaj.** Ponavlja se obrazac u kojem područje napreduje brže od ciklusa pregleda: stabilna jezgra [[ai-literacy|pismenosti o umjetnoj inteligenciji]], kritičke procjene, otkrivanja pristranosti i [[ethics|etike]], sa sadržajem o specijaliziranim i lokalno dostupnim alatima pridodanim kao moduli i revidiranim svakih šest do dvanaest mjeseci ([[bursic-ai-residency-education-curriculum-2026|Bursic i sur. (2026.)]]). Diplomsko [[medical-education|medicinsko obrazovanje]] navedeni je slučaj, ali načelo se generalizira: program se obvezuje na kompetencije koje preživljavaju smjenu alata, a sloj specifičan za alat planira za zamjenu.

**Integracija pismenosti o umjetnoj inteligenciji** ugrađuje UI kompetencije u discipline. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** nudi postupno izgrađen okvir pismenosti o umjetnoj inteligenciji primjenjiv u svim dobima i obrazovnim fazama, koji se bavi [[digital-divide|digitalnim jazovima]] drugog i trećeg stupnja. **[[tracing-genai-literacy-interaction-patterns]]** ispituje kako se pismenost o umjetnoj inteligenciji razvija kroz obrasce interakcije. **[[hingle-collaborative-ai-literacy-2025]]** istražuje suradničke pristupe razvoju kurikuluma pismenosti o umjetnoj inteligenciji, povezujući se s [[collaborative-learning|suradničkim učenjem]].

LearnAI pokazuje kako izgleda ugrađena inačica: sloj široke izloženosti kratkim prezentacijama unutar 18 postojećih kolegija u pet disciplina (293 studenta), uparen s neobveznim individualnim sesijama suoblikovanja koje vode obučeni preddiplomski vršnjački tutori, pa učenici različitih sposobnosti susreću UI zadatke na svojoj razini ([[learnai-just-in-time-ai-cocreation-university-2026|Qu i sur. (2026.)]]).

Integracija u praksi zaostaje za okvirima. [[critical-media-literacy-education-2026|Santos-Albardía i sur. (2025.)]] pronašli su da je samo 13,8 % anketiranih studenata obrazovanja i novinarstva reklo da se njihov studij bavio kritičkom medijskom analizom, prema 97,8 % koji su je ocijenili važnom, a njihovi intervjui sa stručnjacima pratili su jaz do [[teacher-education|obrazovanja nastavnika]] koje daje prednost tehničkim i nastavnim vještinama pred medijskim obrazovanjem.

PRISMA pregled 39 STEAM studija (2016.–2025.) pronašao je usporednu neravnotežu u elementima pismenosti o umjetnoj inteligenciji: provedbe su razvijale tehničke pismenosti — temeljne UI koncepte, [[computational-thinking|računalno mišljenje]], [[statistics-and-data-science-education|podatkovnu pismenost]] — dok su nedovoljno razvijale etičku svijest, kreativnu imaginaciju te stvaranje, upravljanje i oblikovanje s umjetnom inteligencijom, pa je revidiranje svake jedinice prema njima praktični odgovor ([[niri-steam-ai-literacy-review-2026|Niri i sur., 2026.]]).

[[student-experience|Glas studenata]] još je jedan dizajnerski ulaz: 84 % od 166 studenata završne godine poslovanja željelo je da se genAI poučava u njihovim kolegijima, a 85 % ga je vidjelo kao ključan za zapošljivost, dok je samo 7 % o njemu učilo na svojem sveučilištu ([[rook-plumb-genai-curricula-student-insights-2026|Rook i Plumb (2026.)]]).

Pregled 42 studije predsveučilišnog [[ai-education|UI obrazovanja]] nalazi da se kurikulumi pomiču s tehničkog sadržaja prema kompetencijskim modelima izgrađenima na okvirima kao što su AI4K12 i Five Big Ideas in AI, pri čemu se [[ai-literacy|pismenost o umjetnoj inteligenciji]] tretira kao međupredmetna kompetencija, dok standardizirani instrumenti za njezino procjenjivanje ostaju odsutni ([[caruana-pre-university-ai-education-slr-2026|Caruana i sur. (2026.)]]).

Nastavnici i poslodavci složili su se o važnosti samo jedne od 26 UI vještina — postavljanja realnih očekivanja za rad obogaćen umjetnom inteligencijom — a samo tri od 26 poučavala je polovica ili više nastavnika, što je dokaz izvješća o jazu u UI vještinama između visokog obrazovanja i poslodavaca ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026.)]]).

Oblikovanje aktivnosti strojnog učenja u K-12 ostaje na površini: pregled iza okvira ICE-T pronašao je da nevidljiva upotreba, interakcija gumbom i postavljanje modela čine gotovo 60 % kodiranih aktivnosti nadziranog učenja, otvoreno stvaranje pojavilo se samo dvaput, a tehnička i društvena perspektiva pojavile su se zajedno u samo oko 3 % aktivnosti ([[icet-ml-education-trust-2026|Haritz i sur., 2026.]]).

**[[discipline-specific-aied|Disciplinski specifična]] inovacija kurikuluma** primjenjuje oblikovanje kurikuluma na određena područja. **[[genai-architecture-education]]** istražuje kako generativna umjetna inteligencija preoblikuje arhitektonsku [[pedagogy|pedagogiju]] oblikovanja. **[[talebzadeh-ai-green-education-2026]]** ispituje integraciju umjetne inteligencije u kurikulume zelenog obrazovanja. **[[connected-ai-lesson-planning-vietnam]]** i **[[llm-cultural-relevance-k12]]** bave se [[culturally-relevant-pedagogy|kulturno osjetljivim oblikovanjem kurikuluma]].

**Ugradite umjetnu inteligenciju unutar discipline, a ne uz nju.** Troetažni UI kurikulum (uvodna, primijenjena i napredna razina) ugradio je [[machine-learning|strojno učenje]] u postojeće teme toplinskog inženjerstva kroz kolegij od 39,1 sata, umjesto dodavanja izbornih kolegija računalnih znanosti, izbjegavši dodatno opterećenje studenata strojarstva i otvoreno objavivši svoj nastavni plan, podatke i kod ([[mechanical-engineering-ai-curriculum-2026|Li i sur. (2026.)]]).

Novinarski slučaj pokazuje varijantu koja prvo stavlja vrijednosti: trodijelni kostur vrijednosti–procesi–kompetencije pomaknuo je studente s izvještavanja samo ljudima na rad integriran s umjetnom inteligencijom, no 8 od 9 (89 %) izvijestilo je o sigurnosti u etičkim odlukama, dok su čestice ankete o autorstvu i pristranosti upućivale na samo površno razumijevanje ([[ying-genai-journalism-assessment-2026|Ngu i Weller (2026.)]]).

**[[governance|Institucionalni]] okviri** bave se promjenom kurikuluma na velikoj skali. **[[finkelstein-principled-ai-education-2025]]** i **[[finkelstein-principled-ai-education-2025]]** nude načela za integraciju umjetne inteligencije u obrazovne programe. **[[ai-adoption-training-public-sector]]** ispituje prepreke usvajanju UI kurikuluma u obrazovanju javnog sektora.

**Slijed umjetne inteligencije kroz program.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli i sur.]] predlažu okvir „suzdržati, zatim pojačati“ koji slaže generativnu umjetnu inteligenciju na razini programa: uskratite generativni alat dok se sposobnost oblikuje, zatim ga vratite da tu sposobnost pojača kada je student može usmjeravati i prosuditi njezine prinose. Vođen kriterijem oblikovanja nasuprot rasterećenju (gradi li dio rada sposobnost ili je samo propušta kroz alat), okvir povezuje oblikovanje kurikuluma s [[cognitive-offloading|kognitivnim rasterećenjem]], [[self-regulated-learning|samoreguliranim učenjem]] i [[academic-integrity|akademskom čestitošću]], s kontrolnim točkama koje je teško lažirati na svakom prijelazu sa suzdržavanja na pojačavanje.

Poluga za najviše stupnjeve nije više kolegija: kroz 89 sponzoriranih završnih projekata napredovanje sa šeste na sedmu razinu [[career-development-and-readiness|spremnosti za radnu snagu]] bilo je uvjetovano iskustvom ugrađenim u industriju — kooperativnim programima i projektima programa Manufacturing Extension Partnership — pa diplome trebaju učenje integrirano s radom, a ne još jedan tehnički izborni kolegij ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith i sur. (2026.)]]).

Kurikularna posljedica sposobnosti modela jest da dizajn otporan na umjetnu inteligenciju istječe. Informatički edukatori opisali su kalibriranje zadataka prema onome što modeli još nisu mogli i promatranje kako kalibracija propada — problemi jednog nastavnika kibersigurnosti zahtijevali su istinsko [[problem-solving|rješavanje problema]] prije sedam ili osam mjeseci, a zatim su jednostavno bili riješeni — uz procjenu voditelja radionice da je rok trajanja otprilike jedan semestar. Strukturni nalaz radionice jest da je gotovo svaku prilagodbu napravio pojedini nastavnik unutar jednog kolegija, bez institucionalne koordinacije koju bi trajan kurikularni odgovor zahtijevao ([[computing-assessment-genai-workshop-report-2026|Akbar i sur., 2026.]]).

**Usklađivanje cijelog kolegija kada je generativna umjetna inteligencija dopuštena.** Redizajn uvodnog kolegija nuklearne i čestične [[physics-education|fizike]] iz 2026. ([[ai-particle-physics-education-redesign-2026|Mikhasenko i sur.]]) integrirao je tri vrste aktivnosti s različitim ulogama — predavanja za koncepte i notaciju, vježbe za standardnu analitičku praksu i domaće zadaće kao istraživačku „u obliku istraživanja“ komponentu neuobičajeno teških problema s više metoda. Prijavljeno trenje (nenaveden preduvjet programiranja, nedovoljno vremena za razumijevanje umjesto pukog dobivanja odgovora i neusklađenost predavanja, vježbi, zadaća i [[summative-assessment|ispita]]) pokazuje da dopuštanje generativne umjetne inteligencije zahtijeva usklađivanje kurikuluma kroz cijeli kolegij, a ne promjenu jedne vrste zadatka; njihova preporučena struktura zadržava istraživački rad uz dopuštenu umjetnu inteligenciju kao napredne zadatke s bonusom, dok ocjenu određuje pisani ispit bez pomoći.

**Dubina usklađivanja, a ne učestalost upotrebe, razdvaja obrasce integracije.** Kroz 17 slučajeva poslovnih modula, šest je genAI sustavno ugradilo u poučavanje, učenje i procjenu (konstruktivno), devet je to činilo nedosljedno (mješovito), a dva sporadično (ad hoc); konstruktivni slučajevi izvijestili su o najjačim ishodima angažmana, sposobnosti i relevantnosti kurikuluma ([[zhou-constructive-alignment-genai-business-2026|Zhou i sur. (2026.)]]).

**Savjeti o konstruktivnom usklađivanju pod kritičkim povećalom.** Dok izvori iznad izvješćuju o usklađivanju u praksi, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes i sur. (2026.)]] čitaju same smjernice kao diskurs. Njihova [[qualitative-research|kritička analiza diskursa]] 14 tekstova sive literature objavljenih od studenoga 2022. do travnja 2025. — uglavnom institucionalnih stranica i poglavlja iz centralno pozicioniranih [[educational-development|jedinica za učenje i poučavanje]] — pronašla je da je konstruktivno usklađivanje predstavljeno kao problem učinkovitosti: generativna umjetna inteligencija bila je „učinkovit i djelotvoran način za izradu rubrika“ koji može „racionalizirati proces“, antropomorfizirana kao „obrazovni stručnjak i asistent“, „partner za sparing“ ili „inteligentni asistent u oblikovanju nastave“, dok su akademsko osoblje osiguravalo samo „stručnost u predmetu“, a alat je preuzimao „najteži dio razvoja ciljeva učenja, organiziranja sadržaja kolegija ... i usklađivanja komponenti kolegija“. Recepti poticaja za kopiranje i lijepljenje i numerirani predlošci uokvirivali su konstruktivno usklađivanje kao standardiziran proizvod, proizvodeći tri načina neuspjeha: performativnost (usklađivanje koje samo izgleda usklađeno), brisanje situiranog i kritičkog konteksta i plitko usklađivanje koje poistovjećuje usklađivanje s konstruktivnom dimenzijom. Njihov lijek preslaže tijek rada oblikovanja kurikuluma — edukatori moraju razumjeti konstruktivno usklađivanje dovoljno dobro da usmjere, procijene i odbiju UI rezultat prije nego što mu prepuste bilo koji dio — i ograničava svaki alat na institucionalnog [[rag|retrieval-augmented]] agenta utemeljenog na lokalnoj politici, rubrikama i atributima diplomanata, s ulogom „liminalnog tutora“ koja proširuje, a ne zamjenjuje odnos s [[educational-development|razvojnim djelatnikom]].

**Generiranje zadataka modeliranja usklađenih s kurikulumom.** UI platforme mogu odgovoriti na nedostatak vremena i resursa nastavnika za osmišljavanje kvalitetnih zadataka [[math-education|matematičkog modeliranja]] generiranjem problema usklađenih s kurikulumom i pedagoških preporuka utemeljenih na načelima dizajna i [[rag|retrieval-augmented]] generiranju — pristup ilustriran izravnom varijacijom u srednjoškolskoj matematici ([[ai-modeling-problem-generation-platform-2026]]). I sama literatura za kolegije sada je meta generiranja: Sidorkin (2026.) zamijenio je komercijalni udžbenik tjednim UI-generiranim tekstovima na diplomskom kolegiju obrazovnog vodstva, i premda su ih studenti ocijenili korisnima i 75 posto se složilo da su naučili više nego na usporedivom kolegiju, 4.487 stranica zapisa sadržavalo je APA citate u tekstu na samo oko 0,80 posto stranica, a imenovani kampus ili sustav bio je uparen s tvrdim tvrdnjama o politici na otprilike 1,03 posto stranica bez provjerljivog izvora. Lekcija za kurikularne materijale jest tretirati generirane tekstove kao nacrt proizvodnje pod nastavničkim pregledom, predvidjeti rad nastavnika na osmišljavanju poticaja i verifikaciji te kurirati provjerene izvore u asistenta, umjesto da kvalitetu izvora prepuste studentima da je zaključe iz konteksta.

**UI-potpomognuto planiranje nastave na sloju prijelaza kurikuluma u razred.** Na mjestu gdje kurikulum postaje održana lekcija, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo i Tahir (2025.)]] eksperimentalno su usporedili planove koje su izradili nastavnici s planovima uz pomoć ChatGPT-a u dječjem [[stem-education|STEAM]] [[arts-design-and-media-education|umjetničkom obrazovanju]], pronašavši da je UI-potpomognute planove šest stručnih profesora ocijenilo značajno višima (medijan 20,5 prema 17,6, p = ,002, velik učinak). Pokazuju da isplata ovisi o tome kako nastavnik prepušta: preporučena metoda popunjava praznine u sadržaju lekcije koju je nastavnik sam skicirao (čuvajući nastavnikovu dizajnersku [[agency|autonomiju]]), umjesto da prepusti cijeli plan. Doprinose i predloškom poticaja uloga–upute–krajnji cilj za reproducibilno generiranje pod kontrolom kvalitete — dokaz da je UI planiranje nastave najjače kada je ugrađeno u nastavnikove kurikularne odluke, a ne da ih zamjenjuje. U znanstvenom obrazovanju stručna validacija dolazi do usporednog suda o dizajnu platforme: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli i Yildirim (2026.)]] dali su jedanaestorici specijalista [[science-education|znanstvenog obrazovanja]] da ocijene ChatGPT-4 i alat usmjeren na obrazovanje (Teacher's Buddy) na planovima šestog razreda usklađenima s revidiranim turskim kurikulumom i modelom učenja utemeljenog na inženjerskom [[design-based-research|dizajnu]]. Platforma usmjerena na obrazovanje postigla je više na svih osam kriterija kvalitete — uključujući faze intenzivne povratne informacije i usklađenost s kurikulumom — dokaz da ugrađivanje pedagoške strukture u umjetnu inteligenciju daje usklađeniji rezultat. Ipak, neki su stručnjaci još preferirali opći plan zbog njegova jačeg socioemocionalnog naglaska, a 7 od 11 ocijenilo je planove „primjenjivima uz ispravke“, a ne izravno upotrebljivima. Izbor platforme i uokvirivanje poticaja, a ne samo umjetna inteligencija, oblikuju to koliko se generirani planovi usklađuju s kurikularnim standardima i procesnim modelima.

Struktura, a ne formulacija poticaja, čini UI izradu nacrta pouzdanom u proizvodnji: tijek rada Curriculum-as-Code [[curriculum-as-code-instructional-design-2026|Paive (2026.)]] agresivno je orezivao kontekst i generirao materijale dio po dio u 28 konteksta projekata, što je skratilo vrijeme pripreme nastavnika s otprilike osam na dva sata po satu nastave i ostavilo bez konceptualnih ili matematičkih [[hallucination-risk|halucinacija]] koje bi [[human-in-the-loop-ai|ljudski pregled]] trebao uhvatiti.

### Veze s povezanim konceptima

Oblikovanje kurikuluma izravno se povezuje s [[learning-design|oblikovanjem učenja]] — kurikulum definira što, nastava definira kako. Povezuje se s [[ai-literacy|pismenošću o umjetnoj inteligenciji]] jer je ugrađivanje UI kompetencija primarni kurikularni izazov, s [[teacher-role|ulogom nastavnika]] i [[educational-development|obrazovnim razvojem]] jer promjena kurikuluma zahtijeva pripremu edukatora, te sa [[scaffolding|postupnom potporom]] jer dobro osmišljeni kurikulumi podupiru razvoj vještina kroz kolegije i godine. Veze s [[higher-ed|visokim obrazovanjem]] i [[k-12|K-12]] odražavaju relevantnost oblikovanja kurikuluma na svim obrazovnim razinama.

**Odabir jednog okvira pismenosti o umjetnoj inteligenciji znači odabir rječnika koji nitko nije unakrsno preslikao.** U pregledu opsega 50 okvira za K-12, [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach i sur. (2026.)]] pronašli su da se definicije kompetencija usklađuju oko kognitivnih, afektivnih, bihevioralnih, etičkih i društvenih dimenzija, dok se oznake i konstrukti nisu uskladili. Samo se okvir ABCE približio zajedničkoj mjernoj tradiciji, validiran u Hong Kongu, Šangaju i na Tajvanu, a napredovanje kroz razrede predlagano je više puta i nigdje testirano.

## Uobičajene zablude

- **„[[llm|LLM]] može kartirati kurikulum nakon što se jednom validira uz visoku pouzdanost.“** GPT-o3-mini raspodijelio je **100 % preko sedam poduzetničkih vještina za svaku od 48 procjena**, postigavši **Krippendorffovu alfu od 0,81** u odnosu na stručne pondere — a **slaganje** se slomilo na pojedinim vještinama. Visoka ukupna pouzdanost uz neujednačeno slaganje obrazac je koji treba provjeriti prije nego što se kartiranju povjeruje.
- **„Ugrađivanje pismenosti o umjetnoj inteligenciji znači dodati kolegij.“** LearnAI pokazuje ugrađeni oblik: **sloj široke izloženosti kratkim prezentacijama unutar 18 postojećih kolegija u pet disciplina (293 studenta)**. Izloženost je bila raspodijeljena kroz kurikulum, a ne skupljena u jedinicu.
- **„Studenti dolaze već sposobni kritički vrednovati medije.“** Samo **13,8 % anketiranih studenata obrazovanja i novinarstva** reklo je da se njihov studij bavio kritičkom medijskom analizom, prema **97,8 % koji su je ocijenili važnom**. Jaz između vrednovanja vještine i poučavanja njoj kurikularna je prilika.

## Povezani koncepti
- [[pedagogical-partnerships]] — Pedagoška partnerstva
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Krovni pojam: pedagogije i nastavne strategije u UI obrazovanju
- [[recommender-systems-and-learning-paths]]

## Povezani članci
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Ponderirano kartiranje vještina validirano od stručnjaka za akreditaciju
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Kritička analiza diskursa smjernica za genAI u konstruktivnom usklađivanju (McInnes i sur. 2026.)
- [[icet-ml-education-trust-2026]] — Rješavanje pitanja povjerenja u UI sustave kroz obrazovanje: didaktička perspektiva
- [[refrain-amplify-genai-curriculum-2026]] — Kurikularni okvir „suzdržati, zatim pojačati“ za slijed genAI-a (Torres-Sahli i sur. 2026.)
- [[mechanical-engineering-ai-curriculum-2026]] — Projektno utemeljen kurikulum UI obrazovanja u toplinskom inženjerstvu
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Okvir razine spremnosti za radnu snagu za pametnu proizvodnju u doba umjetne inteligencije
- [[rewriting-curriculum-genai-pedagogy-2026]] — Preoblikovanje kurikuluma: pedagoška promjena vođena genAI-om
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Okvir UI vještina: 26 procjenjivih vještina za kartiranje kurikuluma
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: pravovremeno UI suoblikovanje kroz discipline
- [[ai-video-dual-gatekeeping-2026]] — Kada „ne“ daje bolje videozapise: dvostruka kontrola za pedagoški utemeljeno UI stvaranje sadržaja
- [[niri-steam-ai-literacy-review-2026]] — STEAM obrazovanje za pismenost o umjetnoj inteligenciji: sustavni pregled
- [[caruana-pre-university-ai-education-slr-2026]] — Priprema učenika i nastavnika za budućnost vođenu umjetnom inteligencijom: sustavni pregled predsveučilišnog UI obrazovanja (Caruana i sur. 2026.)
- [[ai-modeling-problem-generation-platform-2026]] — UI platforma koja generira zadatke matematičkog modeliranja (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — Umjetna inteligencija u obrazovanju čestične fizike: istraživački problemi i temeljne vještine
- [[computing-assessment-genai-workshop-report-2026]] — UI može napraviti tvoju zadaću. Što sad? Izvješće s mrežne radionice o procjeni u računalnom obrazovanju u doba generativne umjetne inteligencije
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - okviri kompetencija usklađuju se oko pet dimenzija bez zajedničkog rječnika ili unakrsnog preslikavanja
- [[bursic-ai-residency-education-curriculum-2026]] — Prepreke integraciji umjetne inteligencije u kurikulume specijalizacije: kvalitativni intervjui s dvanaest liječnika voditelja
