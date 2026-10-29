---
title: Oblikovanje učenja
created: "2026-10-27T16:45:22-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: concepts/learning-design
source_updated: "2026-10-27T08:20:32-04:00"
updated: "2026-10-27T16:45:22-04:00"
translation_note: "*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

> **Oblikovanje učenja** (poznato i kao *instruktivni dizajn*): sustavni proces stvaranja učinkovitih iskustava učenja kroz analizu potreba za učenjem te oblikovanje, razvoj, provedbu i procjenu nastavnih materijala i aktivnosti. Umjetna inteligencija preobražava oblikovanje učenja automatizacijom stvaranja sadržaja, omogućavanjem [[adaptive-learning|prilagodljivih putanja učenja]], podrškom iteraciji vodiljoj podacima i proširivanjem, a ne zamjenjivanjem, uloge instruktivnog dizajnera.

## Pitanja za razmatranje

- Sjetite se kolegija ili lekcije koju ste pohađali ili oblikovali. Gdje je završavalo „što poučavati“ (kurikulum), a gdje je počinjalo „kako to poučavati“ (oblikovanje učenja), i kako su ta dva aspekta međusobno djelovala?
- Česta je pretpostavka da bolja tečnost u radu s umjetnom inteligencijom automatski daje bolji obrazovni sadržaj. Stranica tome suprotstavlja dokaze da upravo eksplicitna pedagoška struktura, a ne samo tečnost u radu s umjetnom inteligencijom, određuje učinkovitost učenja. Gdje ste vidjeli impresivan rezultat koji nije uspio poučiti?
- Ako alat s umjetnom inteligencijom može iz poticaja stvoriti cijeli kolegij, koje ljudske odluke postaju važnije, a ne manje važne? Stranica tvrdi da umjetna inteligencija proširuje, a ne zamjenjuje ulogu instruktivnog dizajnera. Kako bi izgledala ta proširena uloga?
- Neki modeli instruktivnog dizajna, poput ADDIE-a, upotrebljavaju se kao kruti, linearni koraci. No stranica ih tretira kao iterativne, fleksibilne heuristike planiranja. Kada bi doslovno slijeđenje postupka moglo potkopati dobro oblikovanje?
- Stranica pokazuje da je pedagoški utemeljeno poticanje, primjerice petostupanjski okvir zasnovan na teoriji učenja, znatno poboljšalo ishode višeg reda. Kada biste gradili tutora s umjetnom inteligencijom, što biste kodirali u eksplicitni sloj oblikovanja kako bi njegova strategija poučavanja ostala sljediva i ponovljiva?

## Uvod

Oblikovanje učenja povezuje mogućnosti umjetne inteligencije i učinkovitu pedagogiju. Dok se [[curriculum-design]] bavi time *što* poučavati na razini programa, oblikovanje učenja bavi se time *kako* to poučavati na razini kolegija i lekcije. Radovi u ovoj bazi znanja istražuju i umjetnu inteligenciju kao alat za dizajnere učenja i načela oblikovanja učenja za izgradnju učinkovitih sustava [[intelligent-tutoring|podučavanja s umjetnom inteligencijom]].

Ono što taj dizajnerski rad u praksi obuhvaća i samo je empirijsko pitanje. [[tang-chatbots-learning-design-2026|Tang i sur. (2026)]] kodirali su 1 378 izmjena između dizajnera i chatbota kod pet dizajnera učenja početnika koji su radili s chatbotom ugrađenim u alat za oblikovanje i utvrdili da se dijalog grupirao oko namjeravanih ishoda učenja i pedagoškog pristupa, a ne oko stvaranja sadržaja. Dizajneri su se više puta vraćali ishodima kao provjeri usklađenosti dok su komponente kurikuluma pretvarali u konkretne zadatke, a uloga pomoćnika mijenjala se kroz faze, od razjašnjavanja pojmova preko podrške oblikovanju zadataka do provjere neposredno prije roka. Potpora oblikovanju, prema tim dokazima, manje je stvar proizvodnje materijala, a više održavanja koherentnosti dizajnerske namjere.

Analitika učenja i generativna umjetna inteligencija podupiru različite dijelove oblikovanja: u 11 fokus-grupa na jednom australskom sveučilištu analitički se diskurs najčešće pojavljivao uz kontekst i rješavanje problema na razini kolegija (0,32), dok se diskurs o generativnoj umjetnoj inteligenciji usredotočio na oblikovanje procjene (0,26) i oblikovanje za samoodređenje studenata (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen i sur. (2026)]]).

### Ključne istraživačke teme

**Stvaranje sadržaja uz pomoć umjetne inteligencije** najizravnije je preobražavajuća primjena. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** predstavlja šesterofaznu arhitekturu koja integrira generativnu umjetnu inteligenciju s LaTeX-om i Pythonom radi automatizacije stvaranja [[stem-education|STEM]] materijala, validiranu na 8 modula i 28 konteksta projekata, s ocjenama kvalitete studenata od 8,5 do 9,9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** rabi višeagentski okvir ustrojen oko modela ADDIE, u kojem agentske uloge (nastavno osoblje, instruktivni dizajner, koordinator kolegija) surađuju na stvaranju cjelovitih materijala za kolegij. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** nudi strukturirani postupak za prilagodljivo [[pedagogy|pedagoško]] [[video-education|stvaranje videozapisa]] utemeljeno na korpusima kolegija, pokazujući da je eksplicitna pedagoška struktura, a ne samo tečnost u radu s umjetnom inteligencijom, ključna za stvaranje obrazovnog sadržaja. Platforme [[generative-ai|generativne umjetne inteligencije]] također mogu utjeloviti načela oblikovanja učenja u sadržaju koji stvaraju: [[ai-modeling-problem-generation-platform-2026|platforma potpomognuta umjetnom inteligencijom za stvaranje problema matematičkog modeliranja]] spojila je ustaljena načela oblikovanja s [[prompt-engineering|generiranjem potpomognutim pronalaženjem]] i razvijena je pristupom ADDIE kako bi dala pedagoški utemeljene zadatke i preporuke koje konvencionalni generatori sadržaja nemaju. Ipak, isplativost takvog stvaranja sadržaja i lekcija uz pomoć umjetne inteligencije posreduje vlastita stručnost nastavnika: [[choi-teacher-ai-interaction-lesson-design-2026|Choi i sur. (2026)]] utvrdili su da iskusni nastavnici kritički prilagođavaju ideje za lekcije koje je stvorila umjetna inteligencija studentima i kontekstu (ponovno potičući i razrađujući rezultat), dok su početnici skloni prihvatiti prijedloge umjetne inteligencije izravno, pa pedagoška vrijednost alata za sadržaj s umjetnom inteligencijom ovisi o iskustvu nastavnika i njegovoj osposobljenosti za umjetnu inteligenciju, a ne samo o alatu. Sustavni pregled [[wang-teacher-ai-co-design-review-2026|suoblikovanja zadataka učenja od strane nastavnika i umjetne inteligencije]] (Wang, Liu i Islam 2026) potvrđuje taj obrazac na razini 28 studija (2015-2025): generativna umjetna inteligencija upotrebljava se uglavnom za planiranje lekcija, stvaranje poticaja i kreativno osmišljavanje ideja, a prevladavajući način suradnje jest umjetna inteligencija kao pomoćnik i generator sadržaja, a ne cjelovitiji suoblikovatelj, pri čemu se učinkovitost, responzivnost, [[creativity]] i [[equity-in-ai-education|ravnopravnost]] ponavljaju kao prednosti. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] izoštrava nalaz o nastavničkoj stručnosti za oblikovanje grupnih aktivnosti: iskusni nastavnici stvaraju bogatije, sinergijski usklađenije arhitekture uloga bolje usklađene s razvojnim područjem u aktivnostima suradnje koje je osmislila umjetna inteligencija nego početnici, neovisno o poznavanju umjetne inteligencije, te određuje „pismenost pedagoškog poticanja“ kao polugu koja rezultat umjetne inteligencije pretvara u učinkovito [[collaborative-learning|diferencirano grupno učenje]].

Ispitivanje Aila pridaje tom obrascu brojku o vremenu planiranja. Nastavnici u njegovim randomiziranim osnovnim školama proveli su 2,51 sat tjedno na pripremu lekcija s alatom, nasuprot 3,32 sata bez njega, a ipak je srednji nastavnik od početka isplanirao samo 21% do 40% lekcija, što je slučaj kojemu alat za planiranje od početka služi ([[roy-aila-lesson-planning-teacher-choices-2026|Roy i sur., 2026]]).

Ono u čemu stvoreni materijali zaostaju jest usklađenost s kurikulumom: sedam nastavnika matematike ocijenilo je probleme produktivnog neuspjeha koje je stvorila umjetna inteligencija blizu ljudskima po ukupnoj kvaliteti (M = 17,19 prema 17,43 od 25), ali niže po usklađenosti s kurikulumom (M = 2,57 prema 3,29), pa su stvoreni problemi i dalje trebali uređivanje zbog duljine, razine čitljivosti i vizualnih elemenata ([[rhaimi-productivemath-2025|Rhaimi i sur. (2025)]]).


**Pedagoški utemeljeno podučavanje s umjetnom inteligencijom** primjenjuje načela instruktivnog dizajna na oblikovanje sustava umjetne inteligencije. **[[didactical-teacher-assistant-dimensional-modeling|Brisson i sur.]]** izgradili su didaktički vođenog [[llm]] pomoćnika za nastavnike u kojem je strategija podučavanja kodirana u eksplicitnom vanjskom sloju, čime odabir sadržaja i didaktičko strukturiranje postaju sljedivi i ponovljivi, što se izravno bavi zabrinutošću zbog neprozirnosti u [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou i sur.]]** pokazali su da je petostupanjski okvir [[prompt-engineering|poticanja]] utemeljen na generativnoj [[learning-theories|teoriji učenja]] znatno poboljšao kognitivne ishode višeg reda, pokazujući da učinkovitost učenja određuje instruktivno vođenje, a ne samo pristup umjetnoj inteligenciji. Oboje se povezuje sa [[scaffolding]] i [[intelligent-tutoring]].

**Okviri i evaluacija** nude strukturirane pristupe. **[[bridging-instructional-design-framework-math]]** i **[[cotal-formative-assessment-scoring-2026|CoTAL]]** pokazuju načela oblikovanja sa [[human-in-the-loop-ai|čovjekom u petlji]]. **[[genai-mindtool-generative-learning]]** pozicionira umjetnu inteligenciju kao „mentalni alat“, kognitivnog partnera koji proširuje, a ne zamjenjuje mišljenje učenika, izravno primjenjujući teoriju instruktivnog dizajna na integraciju umjetne inteligencije. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** primjenjuje načela univerzalnog oblikovanja za učenje kako bi stvorio pristupačnog misaonog partnera s umjetnom inteligencijom za edukatore, povezujući instruktivni dizajn s [[inclusive-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) okvir je za strukturiranje zadataka kognitivno aktivirane upotrebe umjetne inteligencije koji ograničava doprinos umjetne inteligencije tako da predviđanje, interpretacija i evaluacija ostanu učenikovi, što je prilagodba istraživačkih ciklusa specifična za umjetnu inteligenciju, utemeljena na [[self-regulated-learning]], teoriji kognitivnog opterećenja i [[human-ai-collaboration]]. Kao dopuna tim okvirima oblikovanja, [[dohn-boundary-object-classifying-genai-learning-activities-2026|taksonomija Dohn i sur. (2026)]] nudi *klasifikaciju*, a ne metodu oblikovanja: šest kategorija (cilj učenja, sadržaj, format prikaza, epistemičko [[student-engagement|angažiranje]], društveni dizajn, artefakti) koje dizajnerima i [[research-methods-aied|istraživačima]] omogućuju opisivanje, usporedbu i zamišljanje aktivnosti učenja s generativnom umjetnom inteligencijom tako što eksplicitno izriču zašto, što, kako, s čime i s kim se učenici angažiraju na generativnoj umjetnoj inteligenciji, izgrađena kao granični objekt kroz postdigitalni dijalog. Okviri pametne učionice proširuju to na [[teacher-education|obrazovanje nastavnika]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao i Wang (2026)]] predlažu trodimenzionalni okvir za pametno obrazovanje (učinkovitost učenja, informacijska i komunikacijska tehnologija, ustroj učionice) i primjenjuju ga u diplomskom kolegiju iz [[math-education|matematike]] koji integrira [[automated-assessment|automatizirano ocjenjivanje]], personalizirane preporuke i višestruke [[ai-feedback-quality|povratne informacije umjetne inteligencije]] u fazama prije nastave, tijekom nastave i nakon nje. Kvazieksperiment pokazao je znatne pomake u sposobnosti studenata da formuliraju precizne, profesionalno utemeljene nastavne ciljeve, što je dalo prenosivi **D-T-E model** (Disciplinary Demand-Technological Empowerment-Evaluation Loop), [[discipline-specific-aied|disciplinski specifične]] smjernice za [[educational-development|obrazovne razvojne djelatnike]] koji koncepte pametnog obrazovanja prenose u praktičnu praksu instruktivnog dizajna.

**Oblikovanje za doseg.** Halanijev okvir od sedam poluga pita za svaki kontekst kolegija koje poluge još djeluju kad je student sam s umjetnom inteligencijom; strukturni potezi poput promjene toga što ocjena potvrđuje ili zadataka koji se ne mogu dovršiti bez mišljenja dosežu dalje od govorenja studentima da je proces važan ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Ograničite alat da biste zaštitili mišljenje.** Devettedjeljni dizajn argumentacijskog pisanja redao je chatbote koje nastavnik ograničava, a koji postavljaju pitanja i odbijaju stvarati tekst učenika, pa su se četiri srednjoškolca pomaknula od pasivnih korisnika umjetne inteligencije do evaluatora koji su osporavali rezultate: strateško ograničenje, a ne neograničena generativnost, pratilo je pomake ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote i Taub (2026)]]).

**Poticanje vođeno rubrikom kao dizajnerska poluga.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar i sur. (2026)]] pokazali su da rubrika djeluje kao posredujuće sučelje između ljudske pedagoške namjere i strojnog zaključivanja: tretiranje kriterija procjene kao promjenjivih dizajnerskih artefakata, a ne fiksnih instrumenata, i njihovo iterativno sufinjenje s LLM-om podiglo je slaganje LLM-a i čovjeka o studentskim dizajnerskim radovima s 54,75% na 81,25%. Rubrike izrađene za LLM-ove moraju uravnotežiti preciznost i fleksibilnost: previše neodređene pozivaju na slobodno tumačenje, previše krute svode model na prepoznavanje obrazaca, a poticanje svjesno uloge (nastavnik, recenzent, ocjenjivač prijava) dalo je različite evaluacijske povratne informacije. To određuje inženjerstvo rubrika kao konkretnu praksu oblikovanja učenja za usmjeravanje evaluacijskog ponašanja umjetne inteligencije, pri čemu nadzor sa čovjekom u petlji ostaje ključan.

**Agenti umjetne inteligencije za instruktivni dizajn** proširuju područje u [[agentic-ai|agentsku umjetnu inteligenciju]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** prvi je standardizirani mjerni okvir utemeljen na teoriji za evaluaciju agentskih sustava instruktivnog dizajna zasnovanih na LLM-ovima: njegova matrica konteksta od 25 795 scenarija (51 kontekstna varijabla × 33 podkoraka ISD-a iz ADDIE-a) pokazuje da agenti utemeljeni u klasičnim ISD okvirima (ADDIE, Dick i Carey, brzo prototipiranje) nadmašuju agente bez teorije, empirijski potvrđujući da je instruktivni dizajn strukturirana disciplina, a ne generički zadatak poticanja. Agenti nisu samo *graditelji* dizajna nego i njegovi *kritičari*: [[ai-web-agents-lesson-design-2025|Wang, Mitchell i Piech (2025)]] rabe jednog autonomnog web-agenta koji prolazi kroz višekorak online lekciju kao student kako bi ocijenio dizajn učenja *prije* nego se uključe stvarni učenici; njegov opis studentskog iskustva predviđa gdje će početnici odustati i daje provedive povratne informacije o dizajnu, nadmašujući svaku osnovnu liniju, pa čak i simuliranu skupinu studenata na globalnom kolegiju CS1. Time se evaluacija agentima prije pokretanja određuje kao jeftina dopuna ljudskoj iteraciji dizajna. **[[wang-multi-agent-systems-learning-designers-2025]]** i **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** istražuju višeagentske okvire koji orkestriraju agente prema ulogama oko modela instruktivnog dizajna, dok **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** ispituje kako nastavnici i agenti zajedno primjenjuju tehnološko-pedagoško-sadržajno znanje. Taj rad povezuje instruktivni dizajn s [[benchmark|mjerenjem prema referentnim vrijednostima]] i oblikovanjem [[curriculum-design|kurikuluma]] u velikom opsegu, uz [[ai-ed-evaluation]].

### Veze s povezanim konceptima

Oblikovanje učenja mostovna je disciplina [[ai-education|umjetne inteligencije u obrazovanju]]: povezuje [[curriculum-design]] (što poučavati) sa [[scaffolding]] (kako poduprijeti učenike), [[educational-development]] (kako pripremiti edukatore) i [[generative-ai]] (samim alatima). Usko je povezano s [[teacher-role]] jer alati s umjetnom inteligencijom preoblikuju ono što dizajneri učenja i nastavnici rade, te s [[ai-literacy]] jer učinkovita integracija umjetne inteligencije zahtijeva da edukatori razumiju njezine mogućnosti i ograničenja. Dizajnerski rad u konačnici se razrješava u *redoslijedu aktivnosti*: [[pedagogical-patterns|pedagoški obrasci]] katalogiziraju provjerene redoslijede poteza, pa dizajner može odlučiti gdje u lekciji umjetna inteligencija pripada, a ne samo što uključiti. [[learning-sciences|Znanosti o učenju]] istraživačko su polje iza tih načela: dok ova stranica obrađuje profesionalnu praksu stvaranja iskustava učenja, znanosti o učenju tu praksu i njezine dizajne proučavaju empirijski i stvaraju kognitivna, motivacijska i društvena načela koja oblikovanje učenja zatim operacionalizira.

### Kako oblikovanje učenja određuje dobitke u učenju

Oblikovanje učenja poluga je koja odlučuje hoće li umjetna inteligencija dati [[learning-gains|dobitke u učenju]] ili samo umjetnom inteligencijom napuhanu izvedbu. Dokazi baze znanja o tome su dosljedni: **isti alat s umjetnom inteligencijom daje velike dobitke ili neto štetu, ovisno o tome kako je iskustvo učenja oblikovano oko njega.** [[instructional-guidance-genai-learning|Hou i sur.]] pokazali su da je petostupanjski okvir poticanja utemeljen na teoriji učenja znatno poboljšao kognitivne ishode višeg reda, dok sam pristup umjetnoj inteligenciji to nije učinio; okviri [[genai-mindtool-generative-learning|mentalnog alata]] i [[airis-cognitively-activated-ai-physics-2026|AIRIS]] čuvaju kognitivni rad učenika tako da nastaju trajni dobici, a ne samo učinkovitost u zadatku. Dizajnerske odluke koje štite [[learning-gains]] (postupno skidanje potpore koje zahtijeva pokušaj studenta, [[formative-assessment]] s mjerama ishoda bez pomoći i pedagoška struktura koja učenika zadržava kao djelatnog aktera) zrcale nalaz polja (vidi [[learning-gains]]) da je umjetna inteligencija snažan dobitak kad poučava, a šteta kad daje odgovore. Suprotno tome, loše oblikovane lekcije s integriranom umjetnom inteligencijom upadaju u [[cognitive-offloading|jaz između izvedbe i učenja]], gdje prividni uspjeh prikriva izostanak učenja.

### Praktične smjernice za dizajnere i programere

Za instruktivne dizajnere, razvijatelje kolegija i inženjere koji grade iskustva učenja potpomognuta umjetnom inteligencijom, nalazi baze znanja prevode se u provedivu praksu. Jednu granicu vrijedi označiti prije samih praksi: oblikovanje učenja kako ga ova stranica opisuje jest oblikovanje kolegija za poznatu skupinu, dok su ista načela ugrađena u proizvod koji će upotrebljavati mnogi kolegiji, koje poučavaju ljudi koje dizajner nikada neće upoznati, rad [[educational-technology-developers]], gdje zadane postavke, mogućnost prilagodbe i dokumentacija nose pedagošku težinu:

**Utemeljite stvaranje pomoću umjetne inteligencije u strukturiranom instruktivnom modelu.** Sadržaj s umjetnom inteligencijom dobar je onoliko koliko je dobra pedagoška struktura iza njega: kvalitetu određuje eksplicitna struktura, a ne tečnost u radu s umjetnom inteligencijom. Oblikujte oko priznatog modela (ADDIE, Dick i Carey, brzo prototipiranje) i kodirajte pedagoške odluke eksplicitno, umjesto da se oslanjate na to da će ih model zaključiti.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Usvojite okvir na razini načela, kao i instruktivni model.** Model na razini kolegija strukturira jedan dizajn; objavljeni okvir postavlja kriterije koje mnogi dizajni trebaju zadovoljiti. Primjer koji vrijedi pročitati u cijelosti jest *Powerful Learning with Emerging Technology* organizacije Digital Promise, koja svoje smjernice organizira pod tri načela (utemeljeno na dokazima, usmjereno na učenika, izgradnja vještina), svako razrađeno u prakse i strategije, i veže [[privacy]], [[explainable-ai|objasnidbene sposobnosti]] i pravednost uz pojedine prakse kao sigurnosne obveze, a ne kao neobavezne dodatke.([[powerful-learning-with-emerging-technology-2025]])
**Uskladite konfiguraciju umjetne inteligencije sa zadatkom, a ne sa složenošću.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] razlikuje četiri sloja (poticaj, kontekst, izvršni okvir i verificirana petlja) i primjenjuje načelo minimalno dostatnog sloja: upotrijebite najmanje složenu konfiguraciju koja može dati provjerljiv rezultat, jer dodana orkestracija sa sobom nosi troškove koordinacije, verifikacije, privatnosti i razumijevanja.

**Upotrebljavajte višeagentske tijekove rada prema ulogama za proizvodnju sadržaja.** Umjesto jednog generičkog poticaja, orkestrirajte različite agente i uloge (nastavno osoblje, instruktivni dizajner, koordinator kolegija) koji surađuju kroz definirani postupak: to zrcali način na koji stvarni kolegijski timovi rade i daje cjelovitije materijale od jednog poticaja.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Pružite instruktivno vođenje, a ne samo pristup umjetnoj inteligenciji.** Bilo da učenici izravno komuniciraju s umjetnom inteligencijom ili s materijalima koje je ona stvorila, vođenje utemeljeno na teoriji učenja (primjerice stupnjevito poticanje kao [[scaffolding|postupno skidanje potpore]] utemeljeno na načelima generativnog učenja) pokreće ishode višeg reda; sam pristup to ne čini. Oblikujte aktivnost učenja oko toga kako um uči i tretirajte umjetnu inteligenciju kao kognitivni „mentalni alat“ koji proširuje mišljenje, a ne zamjenjuje ga.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modelirajte zaboravljanje i rasporedite ponavljanje tamo gdje je propadanje najizraženije.** G4L prikazuje propadanje znanja Ebbinghausovom krivuljom zaboravljanja koju pokreću proteklo vrijeme i ponavljanja te daje prednost jedinicama najosjetljivijima na propadanje, umjesto da iznova nudi ono što je nedavno ocijenjeno ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes i Kovács, 2026]]).

Fowlin i sur. (2026) dodaju operativni potez za odlučivanje gdje umjetna inteligencija ulazi: razdvojite aktivnost na komponente koje je najbolje raditi samostalno i one koje je najbolje vezati uz umjetnu inteligenciju, zadržavajući prosudbu edukatora središnjom za tu podjelu ([[fowlin-operationalizing-learning-principles-ai|Fowlin i sur. (2026)]]).

**Učinite sadržaj sljedivim i pregledljivim.** Neka ljudski dizajner pregleda i ispravi rezultat umjetne inteligencije prije nego dođe do učenika i ustrojite stvaranje tako da pedagoško obrazloženje (zašto ovaj sadržaj, u ovom redoslijedu) bude pregledno, čime se rješavaju i pitanja kvalitete i zabrinutosti zbog neprozirnosti koje potkopavaju poučavanje utemeljeno na [[trust]].([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Pregledajte medije koje je stvorila umjetna inteligencija u fazi scenarija, a ne nakon sinteze.** PedaCo postavlja pregled edukatora na scenarij, gdje je pedagoške pogreške jeftino ispraviti, prije nego se išta generira; ocijenjena instruktivna valjanost porasla je s 3,07 na 3,86, dok je automatizirani sloj nakon sinteze poboljšao samo dvije od pet dimenzija ([[ai-video-dual-gatekeeping-2026|Kim, Baek i Kwak (2026)]]).

**Oblikujte za [[accessibility]] od početka.** Primijenite načela [[universal-design-for-learning|univerzalnog oblikovanja za učenje]] pri izgradnji alata i materijala koje stvara umjetna inteligencija kako bi služili raznolikim učenicima, umjesto da pristupačnost naknadno dograđujete.([[ludia-udl-ai-thought-partner-2026]])

**Planirajte za medij isporuke.** Instruktivni dizajn za [[online-teaching-and-learning|poučavanje i učenje na mreži]] nije neutralan prijevod oblikovanja za rad uživo: medij mijenja to što je od postupnog skidanja potpore, procjene i interakcije izvedivo, a umjetna inteligencija umnožava i mogućnosti (prilagodljiva [[personalized-learning|personalizacija]], stalna dostupna podrška) i rizike ([[academic-integrity|akademska neporočnost]], [[cognitive-offloading|kognitivno rasterećenje]]) koje dizajneri moraju predvidjeti. Oblikujte pedagoški omotač umjetne inteligencije jednako namjerno na mreži kao i u izravnom kontaktu.

**Evaluajte prema mjernom okviru, a ne prema osjećaju.** Ako gradite agenta za instruktivni dizajn, evaluajte ga prema standardiziranom mjernom okviru utemeljenom na teoriji (primjerice [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]) kako biste mogli izmjeriti poboljšava li utemeljenje u stvarnom ISD okviru rezultat u odnosu na generički LLM.([[jeon-isd-agent-bench-2026]])

- **Umjetna inteligencija preoblikuje praksu instruktivnog dizajna.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar i Ilgaz (2026)]] [[meta-analysis-systematic-review|sustavno pregledavaju]] 28 studija (2020-2025) i nalaze da umjetna inteligencija pomaže dizajnerima u stvaranju sadržaja, predlošcima i personalizaciji te da se poima kao suradnik, suradnik ili partner, a ne samo kao alat, iako pedagoška usklađenost i spremnost praktičara ostaju izazovi.

- **Dokumentirana aktivnost koncentrirana je u jednoj fazi ciklusa.** U pregledu 78 studija o instruktivnom dizajnu potpomognutom umjetnom inteligencijom aktivnost faze oblikovanja pojavljuje se u **74 od 78 studija (95%)**, a razvoj u 44 (56%), dok analiza doseže samo 11 (14%), evaluacija 10 (13%) i provedba 7 (9%), i **nijedna studija nije ispitivala potporu umjetne inteligencije kroz cijeli ciklus ADDIE**. Ciklus je težnja koju dokazna osnova ne pokriva, što je važno za svakoga kome se „razvoj kolegija pokretan umjetnom inteligencijom“ prodaje kao cjelovita sposobnost ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou i Kameas, 2026]]).
- **Tri uloge umjetne inteligencije, hijerarhijski raspoređene.** *Generativna* upotreba, u kojoj umjetna inteligencija stvara dizajnerski sadržaj prema uputi edukatora, prevladava u **96% studija**; *potporna* upotreba, u kojoj umjetna inteligencija strukturira vlastito rezoniranje dizajnera, pojavljuje se u 35%; *evaluacijska* upotreba, u kojoj umjetna inteligencija ocjenjuje kvalitetu artefakta, u 21%. Područje u velikoj većini rabi umjetnu inteligenciju za stvaranje stvari, a ne za propitivanje vlastitih dizajnerskih odluka, što je suprotno od konfiguracije kritičkog prijatelja koju pregled izdvaja kao obrazovno obećavajuću.

## Uobičajene zablude

- **„Planiranje lekcija s umjetnom inteligencijom vraća nastavnicima vrijeme.“** Vrijeme planiranja doista je palo, s 3,32 sata tjedno na 2,51 s alatom, ali **srednji nastavnik isplanirao je od početka samo 21% do 40% lekcija**. Vrijeme je ušteđeno, a planiranje nije postalo bitno temeljitije: ušteda se nakupljala, a nije se reinvestirala.
- **„Suoblikovanje s umjetnom inteligencijom dobro je dokazano.“** Sustavni pregled [[wang-teacher-ai-co-design-review-2026|suoblikovanja zadataka učenja od strane nastavnika i umjetne inteligencije]] **potvrđuje obrazac u velikom opsegu kroz 28 studija**, što opisuje dosljednu praksu, ali ne pokazuje bolje ishode.
- **„Rubrika je fiksni ulaz.“** Rubrika djeluje kao **posredujuće sučelje između ljudske pedagoške namjere i strojnog zaključivanja**: upravo tretiranje kriterija procjene kao **promjenjivih** omogućuje instrumentu da nosi namjeru edukatora. Fiksna rubrika prenosi zadani okvir stroja u procjenu.
## Povezani koncepti

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Pedagoška partnerstva
- [[online-teaching-and-learning]] - Poučavanje i učenje na mreži
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] - Krov: pedagogije i strategije poučavanja u obrazovanju s umjetnom inteligencijom
- [[stakeholders]] - Krov: ljudi i publike u obrazovanju s umjetnom inteligencijom (učenici, nastavnici, dizajneri, administratori, donositelji politika)

## Povezani članci

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Izmjereno skraćenje vremena planiranja uz nalaz da nastavnici od početka planiraju samo 21% do 40% lekcija
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — Analitika učenja i generativna umjetna inteligencija u odlučivanju o oblikovanju učenja
- [[tang-chatbots-learning-design-2026]] — Upotreba chatbota u oblikovanju učenja: dizajneri se zadržavaju na ishodima i pedagogiji, a ne na stvaranju sadržaja (Tang i sur. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Obrasci interakcije nastavnika i umjetne inteligencije u oblikovanju lekcija prema iskustvu i osposobljenosti za umjetnu inteligenciju (Choi i sur. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — Umjetna inteligencija u visokom obrazovanju: angažman i posredujuća uloga metoda poučavanja
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taksonomija (granični objekt) za klasificiranje aktivnosti učenja s generativnom umjetnom inteligencijom
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — Web-agenti s umjetnom inteligencijom: autonomni web-agent ocjenjuje dizajne lekcija i predviđa odustajanje studenata prije nego se uključe (Wang, Mitchell i Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: okvir za kognitivno aktiviranu nadgradnju umjetnom inteligencijom u fizici
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Oblikovanje za doseg: sedam poluga i student sam s umjetnom inteligencijom
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — Kad „ne“ daje bolje videozapise: dvostruka kontrola za pedagoški utemeljeno stvaranje sadržaja umjetnom inteligencijom
- [[rhaimi-productivemath-2025]] — ProductiveMath: umjetna inteligencija za potporu oblikovanju problema produktivnog neuspjeha
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — Umjetna inteligencija i praksa instruktivnog dizajna: sustavni pregled (Kibar i Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Inteligentno podučavanje utemeljeno na grafovima za dinamične domene (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Namjerno dosadna umjetna inteligencija: ograničenje u pisanju potpomognutom umjetnom inteligencijom (Konradt, Boote i Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Model pametne učionice i D-T-E petlja koji poboljšavaju osposobljenost za instruktivni dizajn u diplomskom studiju matematike (Zhu i sur. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Platforma potpomognuta umjetnom inteligencijom za stvaranje problema matematičkog modeliranja (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Suoblikovanje zadataka učenja od strane nastavnika i umjetne inteligencije: trendovi i perspektive (Wang i sur. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Arhitektura uloga u diferenciranim grupnim aktivnostima koje je osmislila umjetna inteligencija (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM-ovi kao nositelji iterativnog pedagoškog oblikovanja
