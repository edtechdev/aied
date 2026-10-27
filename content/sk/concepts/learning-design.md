---
title: "Návrh učenia"
created: "2026-10-27T17:15:01-04:00"
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
updated: "2026-10-27T17:15:01-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

> **Návrh učenia** (známy aj ako *inštrukčný dizajn*) - systematický proces vytvárania efektívnych vzdelávacích skúseností prostredníctvom analýzy vzdelávacích potrieb a návrhu, vývoja, implementácie a hodnotenia výučebných materiálov a aktivít. AI pretvára návrh učenia tým, že automatizuje tvorbu obsahu, umožňuje [[adaptive-learning|adaptívne]] učebné dráhy, podporuje iteráciu riadenú dátami a rozširuje, a nie nahrádza, úlohu návrhára výučby.

## Otázky na zamyslenie

- Spomeňte si na kurz alebo hodinu, ktorú ste zažili alebo navrhli. Kde sa skončilo "čo učiť" (kurikulum) a kde sa začalo "ako to učiť" (návrh učenia), a ako na seba tieto dve veci pôsobili?
- Častým predpokladom je, že lepšia znalosť AI automaticky vytvára lepší vzdelávací obsah. Stránka to vyvracia dôkazmi, že efektívnosť učenia určuje explicitná pedagogická štruktúra, a nie iba znalosť AI. Kde ste videli pôsobivý výstup, ktorý však nič nenaučil?
- Ak nástroj AI dokáže z promptu vygenerovať celý kurz, ktoré ľudské rozhodnutia sa stávajú dôležitejšími, a nie menej dôležitými? Stránka tvrdí, že AI úlohu návrhára výučby rozširuje, a nie nahrádza. Ako by taká rozšírená úloha vyzerala?
- Niektoré modely inštrukčného dizajnu, ako ADDIE, sa používajú ako pevné, lineárne kroky. Stránka ich však chápe ako iteratívne, flexibilné heuristiky plánovania. Kedy môže príliš doslovné nasledovanie procesu podkopať dobrý návrh?
- Stránka ukazuje, že pedagogicky ukotvené promptovanie, napríklad päťkrokový rámec založený na teórii učenia, výrazne zlepšilo výsledky vyššieho rádu. Ak by ste budovali AI tutora, čo by ste zakódovali do explicitnej vrstvy návrhu, aby jeho vyučovacia stratégia zostala sledovateľná a reprodukovateľná?

## Úvod

Návrh učenia prepája schopnosti AI a efektívnu pedagogiku. Kým [[curriculum-design]] sa zaoberá tým, *čo* učiť na úrovni programu, návrh učenia sa zaoberá tým, *ako* to učiť na úrovni kurzu a hodiny. Články v tejto vedomostnej báze skúmajú AI ako nástroj pre návrhárov učenia aj princípy návrhu učenia na budovanie efektívnych systémov [[intelligent-tutoring|AI tutorstva]].

Čo táto návrhová práca v praxi obnáša, je samo empirickou otázkou. [[tang-chatbots-learning-design-2026|Tang a spol. (2026)]] kódovali 1 378 ťahov dialógu návrhára s chatbotom od piatich začínajúcich návrhárov učenia, ktorí pracovali s chatbotom zabudovaným v nástroji na návrh, a zistili, že dialóg sa zhlukoval okolo zamýšľaných výsledkov učenia a pedagogického prístupu, a nie okolo tvorby obsahu. Návrhári sa opakovane vracali k výsledkom ako ku kontrole zladenia, keď premieňali zložky kurikula na konkrétne úlohy, a úloha asistenta sa v jednotlivých fázach menila: od objasňovania pojmov cez podporu návrhu úloh až po overovací priechod pred termínom. Podpora návrhu je podľa týchto dôkazov menej o vytváraní materiálu a viac o udržiavaní koherencie zámeru návrhu.

Analytika učenia a generatívna AI podporujú odlišné časti návrhu: naprieč 11 ohniskovými skupinami na jednej austrálskej univerzite sa diskurz o analytike najčastejšie spájal s kontextom a riešením problémov na úrovni kurzu (0,32), zatiaľ čo diskurz o GenAI sa sústreďoval na návrh hodnotenia (0,26) a na návrh pre sebaurčenie študenta (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen a spol. (2026)]]).

### Kľúčové výskumné témy

**Tvorba obsahu s podporou AI** je najpriamejšie transformujúca aplikácia. **[[curriculum-as-code-instructional-design-2026|Kurikulum ako kód]]** predstavuje šesťfázovú architektúru, ktorá prepája generatívnu AI s LaTeXom a Pythonom s cieľom automatizovať tvorbu materiálov pre [[stem-education|STEM]], overenú na 8 moduloch a 28 projektových kontextoch s hodnotením kvality študentmi 8,5 - 9,9/10. **[[instructional-agents-multi-agent-course-gen|Inštrukční agenti]]** používajú multiagentový rámec postavený okolo modelu ADDIE, v ktorom roloví agenti (vyučujúci, návrhár výučby, koordinátor kurzu) spolupracujú na tvorbe kompletných kurzových materiálov. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** poskytuje štruktúrovaný postup na adaptívnu [[pedagogy|pedagogickú]] [[video-education|tvorbu videa]] ukotvenú v kurzových korpusoch a ukazuje, že pre tvorbu vzdelávacieho obsahu je nevyhnutná explicitná pedagogická štruktúra, a nie iba znalosť AI. Platformy [[generative-ai|generatívnej AI]] dokážu princípy návrhu učenia stelesniť aj v obsahu, ktorý vytvárajú: [[ai-modeling-problem-generation-platform-2026|platforma na generovanie úloh matematického modelovania s podporou AI]] spojila osvedčené princípy návrhu s [[prompt-engineering|generovaním rozšíreným o vyhľadávanie]] a bola vyvinutá postupom ADDIE, aby vytvárala pedagogicky ukotvené úlohy a odporúčania, ktoré bežným generátorom obsahu chýbajú. Výnos takejto tvorby obsahu a hodín s podporou AI však sprostredkúva odbornosť samotného učiteľa: [[choi-teacher-ai-interaction-lesson-design-2026|Choi a spol. (2026)]] zistili, že skúsení učitelia kriticky prispôsobujú návrhy hodín vytvorené AI študentom a kontextu (opakovaným promptovaním a rozvíjaním výstupu), kým začiatočníci majú tendenciu prijímať návrhy AI priamo, takže pedagogická hodnota nástrojov na tvorbu obsahu s AI závisí od skúsenosti učiteľa a jeho znalosti AI, nie od samotného nástroja. Systematický prehľad [[wang-teacher-ai-co-design-review-2026|spolunávrhu učebných úloh učiteľom a AI]] (Wang, Liu a Islam 2026) potvrdzuje tento vzorec vo veľkom rozsahu naprieč 28 štúdiami (2015 - 2025): GenAI sa používa najmä na plánovanie hodín, generovanie promptov a tvorivé napady a dominantným režimom spolupráce je AI ako asistent a generátor obsahu, a nie plnohodnotný spolunávrhár, pričom ako prínosy sa opakovane objavujú efektívnosť, responzívnosť, [[creativity|kreativita]] a [[equity-in-ai-education|rovnosť]]. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] zostruje zistenie o odbornosti učiteľa pre návrh skupinových aktivít: skúsení učitelia vytvárajú bohatšie, synergickejšie a lepšie na ZPD zladené rolové architektúry v kooperatívnych aktivitách navrhnutých AI než začiatočníci, bez ohľadu na oboznámenosť s AI, a "pedagogickú promptovú gramotnosť" označuje za páku, ktorá premieňa výstup AI na efektívne [[collaborative-learning|diferencované skupinové učenie]].

Štúdia Aila dáva tomuto vzorcu číselné vyjadrenie času na plánovanie. Učitelia v jeho randomizovaných základných školách strávili prípravou hodín s nástrojom 2,51 hodiny týždenne oproti 3,32 hodiny bez neho, mediánový učiteľ však naplánoval len 21 % až 40 % hodín od nuly, čo je práve prípad, na ktorý sa nástroj na tvorbu od nuly zameriava ([[roy-aila-lesson-planning-teacher-choices-2026|Roy a spol., 2026]]).

Kde generované materiály zaostávajú, je zladenie s kurikulom: sedem učiteľov matematiky hodnotilo úlohy produktívneho zlyhania vytvorené AI v celkovej kvalite blízko ľudským (M = 17,19 oproti 17,43 z 25), ale nižšie v zladení s kurikulom (M = 2,57 oproti 3,29), takže generované úlohy stále potrebovali úpravy dĺžky, čitateľskej úrovne a vizuálov ([[rhaimi-productivemath-2025|Rhaimi a spol. (2025)]]).

**Pedagogicky ukotvené AI tutorstvo** uplatňuje princípy inštrukčného dizajnu na návrh systémov AI. **[[didactical-teacher-assistant-dimensional-modeling|Brisson a spol.]]** vytvorili didakticky riadeného učiteľského asistenta na báze [[llm]], v ktorom je stratégia tutorstva zakódovaná v explicitnej externej vrstve, čo robí výber obsahu a didaktické štruktúrovanie sledovateľným a reprodukovateľným a priamo rieši obavy z nepriehľadnosti v [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou a spol.]]** ukázali, že päťkrokový rámec [[prompt-engineering|promptovania]] ukotvený v generatívnej [[learning-theories|teórii učenia]] výrazne zlepšil kognitívne výsledky vyššieho rádu, čo dokazuje, že efektívnosť učenia určuje inštrukčné vedenie, a nie iba prístup k AI. Obe práce sa spájajú s [[scaffolding]] a [[intelligent-tutoring]].

**Rámce a hodnotenie** poskytujú štruktúrované postupy. **[[bridging-instructional-design-framework-math]]** a **[[cotal-formative-assessment-scoring-2026|CoTAL]]** demonštrujú princípy návrhu s [[human-in-the-loop-ai|človekom v slučke]]. **[[genai-mindtool-generative-learning]]** stavia AI do pozície "myšlienkového nástroja", teda kognitívneho partnera, ktorý rozširuje, a nie nahrádza myslenie študenta, a priamo uplatňuje teóriu inštrukčného dizajnu na integráciu AI. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** uplatňuje princípy univerzálneho návrhu učenia pri tvorbe prístupného myšlienkového partnera s AI pre pedagógov a prepája inštrukčný dizajn s [[inclusive-learning|inkluzívnym učením]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Aktivuj - Skúmaj - Reflektuj) je rámec štruktúrovania úloh pre kognitívne aktivované používanie AI, ktorý ohraničuje príspevok AI tak, aby predpovedanie, interpretácia a hodnotenie zostali na študentovi, ide o špecifickú adaptáciu skúmateľských cyklov pre AI ukotvenú v [[self-regulated-learning|samoregulovanom učení]], teórii kognitívnej záťaže a [[human-ai-collaboration|spolupráci človeka a AI]]. Tieto návrhové rámce dopĺňa [[dohn-boundary-object-classifying-genai-learning-activities-2026|taxonómia Dohn a spol. (2026)]], ktorá ponúka *klasifikáciu* a nie metódu návrhu: šesť kategórií (učebný cieľ, obsah, formát reprezentácie, epistemické [[student-engagement|angažovanie]], sociálny dizajn, artefakty), ktoré návrhárom a [[research-methods-aied|výskumníkom]] umožňujú opísať, porovnať a predstaviť si učebné aktivity s GenAI tým, že zviditeľňujú prečo, čo, ako, s čím a s kým sa študenti do GenAI zapájajú, a ktorá bola vytvorená ako hraničný objekt prostredníctvom postdigitálneho dialógu. Rámce inteligentnej triedy to rozširujú na [[teacher-education|vzdelávanie učiteľov]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao a Wang (2026)]] navrhujú trojdimenzionálny rámec inteligentného vzdelávania (efektívnosť učenia, informačné a komunikačné technológie (IKT) a organizácia triedy) a konkretizujú ho v magisterskom kurze [[math-education|matematiky]], ktorý prepája [[automated-assessment|automatizované hodnotenie]], personalizované odporúčania a viacnásobnú [[ai-feedback-quality|spätnú väzbu AI]] naprieč fázami pred vyučovaním, počas neho a po ňom. Kváziexperiment ukázal významné zlepšenie schopnosti študentov formulovať presné, profesijne ukotvené inštrukčné ciele a priniesol prenositeľný **model D-T-E** (Disciplinárna náročnosť - Technologické posilnenie - Evaluačná slučka), teda [[discipline-specific-aied|disciplinárne špecifické]] usmernenie pre [[educational-development|vzdelávateľov učiteľov]], ktorí prenášajú koncepty inteligentného vzdelávania do praktickej praxe návrhu výučby.

**Návrh pre dosah.** Halaniho rámec siedmich pák sa pri každom nastavení kurzu pýta, ktoré z nich ešte fungujú, keď je študent s AI sám; štrukturálne kroky, ako zmena toho, čo známka certifikuje, alebo úlohy, ktoré sa bez daného myslenia nedajú dokončiť, dosiahnu ďalej než tvrdenie študentom, že na procese záleží ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Obmedzte nástroj, aby ste ochránili myslenie.** Deväťtýždňový návrh argumentačného písania zoradil učiteľom ohraničené chatboty, ktoré kladú otázky a odmietajú generovať študentskú prózu, a štyria študenti strednej školy sa posunuli od pasívnych konzumentov AI k hodnotiteľom, ktorí výstupy spochybňovali; zisky sledovali strategické obmedzenie, a nie neobmedzená generatívnosť ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote a Taub (2026)]]).

**Promptovanie vedené rubrikou ako páka návrhu.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar a spol. (2026)]] ukázali, že rubrika funguje ako sprostredkujúce rozhranie medzi ľudským pedagogickým zámerom a strojovým odvodzovaním: chápanie hodnotiacich kritérií ako prehodnotiteľných návrhových artefaktov, a nie pevných nástrojov, a ich iteratívne spoločné dolaďovanie s LLM zvýšilo zhodu LLM s človekom pri študentských návrhových prácach z 54,75 % na 81,25 %. Rubriky vyvíjané pre LLM musia vyvažovať presnosť a flexibilitu: príliš vágna rubrika vyzýva k voľnej interpretácii, príliš rigidná redukuje model na porovnávanie vzorov. Promptovanie citlivé na rolu (inštruktor, recenzent rovesníka, recenzent grantu) prinieslo odlišnú hodnotiacu spätnú väzbu. To stavia tvorbu rubrík ako konkrétnu prax návrhu učenia na formovanie hodnotiaceho správania AI, pričom dohľad s človekom v slučke zostáva nevyhnutný.

**Agenti AI pre inštrukčný dizajn** rozširujú odbor do [[agentic-ai|agentickej AI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** je prvý štandardizovaný, teóriou ukotvený benchmark na hodnotenie agentov inštrukčného dizajnu založených na LLM; jeho kontextová matica s 25 795 scenármi (51 kontextových premenných × 33 podkrokov ISD z ADDIE) ukazuje, že agenti ukotvení v klasických rámcoch ISD (ADDIE, Dick a Carey, Rapid Prototyping ISD) prekonávajú agentov bez teórie, čím empiricky potvrdzuje, že inštrukčný dizajn je štruktúrovaná disciplína, a nie generická úloha promptovania. Agenti nie sú len *tvorcami* návrhov, ale aj ich *kritikmi*: [[ai-web-agents-lesson-design-2025|Wang, Mitchell a Piech (2025)]] používajú jedného autonómneho webového agenta, ktorý prechádza viackrokovú online hodinu ako študent, aby vyhodnotil návrh učenia *predtým*, než sa do neho zapoja skutoční študenti; jeho opis študentskej skúsenosti predpovedá, kde začiatočníci vypadnú, a prináša použiteľnú spätnú väzbu k návrhu, pričom prekonáva všetky východiská a dokonca aj simulovanú kohortu študentov v globálnom kurze CS1. To rámuje predspustené agentické hodnotenie ako nízkonákladový doplnok ľudskej iterácie návrhu. **[[wang-multi-agent-systems-learning-designers-2025]]** a **[[instructional-agents-multi-agent-course-gen|Inštrukční agenti]]** skúmajú multiagentové rámce, ktoré orchestrujú rolových agentov okolo modelov inštrukčného dizajnu, zatiaľ čo **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** skúma, ako učitelia a agenti spoločne uplatňujú technologicko-pedagogicko-obsahové vedomosti. Táto práca prepája inštrukčný dizajn s [[benchmark|benchmarkovaním]], [[ai-ed-evaluation|hodnotením AI vo vzdelávaní]] a návrhom [[curriculum-design|kurikula]] vo veľkom rozsahu.

### Prepojenia na súvisiace koncepty

Návrh učenia je mostová disciplína [[ai-education|AI vo vzdelávaní]]: prepája [[curriculum-design]] (čo učiť) s [[scaffolding]] (ako podporovať študentov), [[educational-development]] (ako pripraviť pedagógov) a [[generative-ai]] (samotné nástroje). Je tesne spojený s [[teacher-role]], pretože nástroje AI pretvárajú to, čo návrhári učenia a učitelia robia, a s [[ai-literacy]], pretože efektívna integrácia AI vyžaduje, aby pedagógovia rozumeli schopnostiam a obmedzeniam AI. Návrhová práca sa napokon rozkladá na *poradie činností*: [[pedagogical-patterns|pedagogické vzory]] katalogizujú overené poradia krokov, takže návrhár môže rozhodnúť, kde v hodine AI patrí, a nie iba čo do nej zaradiť. [[learning-sciences|Vedy o učení]] sú výskumným odborom za týmito princípmi: kým táto stránka pokrýva profesijnú prax vytvárania vzdelávacích skúseností, vedy o učení skúmajú túto prax a jej návrhy empiricky a vytvárajú kognitívne, motivačné a sociálne princípy, ktoré návrh učenia následne operacionalizuje.

### Ako návrh učenia určuje prírastky v učení

Návrh učenia je páka, ktorá rozhoduje, či AI prinesie [[learning-gains|prírastky v učení]], alebo iba výkon nafúknutý AI. Dôkazy vedomostnej bázy sú v tomto bode konzistentné: **ten istý nástroj AI prináša veľké prírastky alebo čistú škodu podľa toho, ako je okolo neho navrhnutá učebná skúsenosť.** [[instructional-guidance-genai-learning|Hou a spol.]] ukázali, že päťkrokový rámec promptovania ukotvený v teórii učenia výrazne zlepšil kognitívne výsledky vyššieho rádu, kým samotný prístup k AI nie; rámce [[genai-mindtool-generative-learning|myšlienkového nástroja]] a [[airis-cognitively-activated-ai-physics-2026|AIRIS]] zachovávajú kognitívnu prácu študenta, takže výsledkom sú trvácne prírastky a nie iba efektívnosť úlohy. Návrhové voľby, ktoré chránia [[learning-gains]], teda podporné lešenie vyžadujúce študentov pokus, [[formative-assessment|formatívne hodnotenie]] s mierami výsledkov bez pomoci a pedagogickú štruktúru, ktorá ponecháva študentovi rolu aktéra, zrkadlia zistenie odboru (pozri [[learning-gains]]), že AI je silným prínosom, keď koučuje, a škodou, keď odpovedá. Naopak, slabo navrhnuté hodiny s integrovanou AI podliehajú [[cognitive-offloading|medzere medzi výkonom a učením]], kde zjavný úspech zakrýva absenciu učenia.

### Praktické usmernenie pre návrhárov a vývojárov

Pre návrhárov výučby, tvorcov kurzov a inžinierov budujúcich učebné skúsenosti s podporou AI sa zistenia vedomostnej bázy prekladajú do použiteľnej praxe. Jednu hranicu treba vyznačiť ešte pred samotnými postupmi: návrh učenia, ako ho táto stránka opisuje, je návrh kurzu pre známu kohortu, kým tie isté princípy zapečené do produktu, ktorý bude používať mnoho kurzov, ktoré učia ľudia, s ktorými sa návrhár nikdy nestretne, sú prácou [[educational-technology-developers|vývojárov vzdelávacích technológií]], kde pedagogickú váhu nesú predvolené nastavenia, konfigurovateľnosť a dokumentácia:

**Ukotvite generovanie AI v štruktúrovanom inštrukčnom modeli.** Obsah AI je len taký dobrý, ako je pedagogická štruktúra za ním; kvalitu určuje explicitná štruktúra, a nie znalosť AI. Navrhujte okolo uznávaného modelu (ADDIE, Dick a Carey, rapid prototyping) a pedagogické rozhodnutia zakódujte explicitne, namiesto toho, aby ste očakávali, že ich model odvodí.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Prijmite aj rámec na úrovni princípov, nielen inštrukčný model.** Model na úrovni kurzu štruktúruje jeden návrh; publikovaný rámec nastavuje kritériá, ktoré by malo spĺňať mnoho návrhov. Príkladom hodným prečítania v celku je *Powerful Learning with Emerging Technology* od Digital Promise, ktorý svoje usmernenie organizuje pod tri princípy (na dôkazoch založené, na študentovi centrické, budovanie zručností), každý rozvedený do postupov a stratégií, a k jednotlivým postupom pripája [[privacy|súkromie]], [[explainable-ai|vysvetliteľnosť]] a spravodlivosť ako bezpečnostné povinnosti, a nie ako voliteľné doplnky.([[powerful-learning-with-emerging-technology-2025]])
**Prispôsobte konfiguráciu AI úlohe, nie sofistikovanosti.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] rozlišuje štyri vrstvy (prompt, kontext, postroj a overená slučka) a uplatňuje princíp minimálne dostatočnej vrstvy: použite najmenej zložitú konfiguráciu schopnú overiteľného výsledku, keďže pridaná orchestrácia prináša náklady na koordináciu, overovanie, súkromie a porozumenie.

**Používajte rolové multiagentové pracovné postupy na tvorbu obsahu.** Namiesto jedného generického promptu orchestrujte odlišných agentov a roly (vyučujúci, návrhár výučby, koordinátor kurzu), ktorí spolupracujú cez definovaný postup; to zrkadlí prácu skutočných kurzových tímov a prináša kompletnejšie materiály než jeden prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Poskytnite inštrukčné vedenie, nielen prístup k AI.** Či už študenti pracujú s AI priamo alebo s materiálmi vytvorenými AI, výsledky vyššieho rádu poháňa vedenie postavené na teórii učenia (napríklad stupňovité promptovacie [[scaffolding|lešenie]] ukotvené v princípoch generatívneho učenia); samotný prístup nie. Navrhujte učebnú aktivitu okolo toho, ako sa učí myslenie, a s AI zaobchádzajte ako s kognitívnym "myšlienkovým nástrojom", ktorý myslenie rozširuje, a nie nahrádza.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modelujte zabúdanie a plánujte opakovanie tam, kde je úbytok najväčší.** G4L reprezentuje úbytok vedomostí Ebbinghausovou krivkou zabúdania poháňanou uplynutým časom a počtom opakovaní a uprednostňuje jednotky najviac ohrozené úbytkom pred opätovným predkladaním toho, čo bolo naposledy hodnotené ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes a Kovács, 2026]]).

Fowlin a spol. (2026) pridávajú operatívny krok na rozhodnutie, kde AI vstúpi: rozdeľte aktivitu na zložky, ktoré sa najlepšie robia samostatne, a tie, ktoré sa najlepšie robia v spojení s AI, pričom úsudok pedagóga zostáva v centre tohto rozdelenia ([[fowlin-operationalizing-learning-principles-ai|Fowlin a spol. (2026)]]).

**Urobte obsah sledovateľným a kontrolovateľným.** Nechajte ľudského návrhára skontrolovať a opraviť výstup AI predtým, než sa dostane k študentom, a štruktúrujte generovanie AI tak, aby pedagogické odôvodnenie (prečo tento obsah, v tomto poradí) bolo preskúmateľné; rieši to kvalitu aj obavy z nepriehľadnosti, ktoré podkopávajú výučbu vytvárajúcu [[trust|dôveru]].([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Kontrolujte médiá vytvorené AI vo fáze scenára, nie po syntéze.** PedaCo kladie kontrolu pedagóga na scenár, kde sú pedagogické chyby lacné na opravu, ešte predtým, než sa čokoľvek vyrenderuje; hodnotená inštrukčná platnosť stúpla z 3,07 na 3,86, kým automatizovaná vrstva po syntéze zlepšila len dve z piatich dimenzií ([[ai-video-dual-gatekeeping-2026|Kim, Baek a Kwak (2026)]]).

**Navrhujte pre [[accessibility|prístupnosť]] od začiatku.** Uplatňujte princípy [[universal-design-for-learning|UDL]] pri budovaní nástrojov AI a materiálov vytvorených AI, aby slúžili rôznorodým študentom, a nie aby sa prístupnosť dopĺňala dodatočne.([[ludia-udl-ai-thought-partner-2026]])

**Plánujte pre médium doručenia.** Inštrukčný dizajn pre [[online-teaching-and-learning|online výučbu a učenie]] nie je neutrálnym prekladom dizajnu prezenčného; médium mení, aké podporné lešenie, hodnotenie a interakcia sú životaschopné, a AI znásobuje príležitosti (škálovateľná [[personalized-learning|personalizácia]], podpora nonstop) aj riziká ([[academic-integrity|integrita]], [[cognitive-offloading|kognitívne odľahčenie]]), ktoré musia návrhári plánovať. Pedagogický obal AI navrhujte v online prostredí rovnako zámerne ako v prezenčnom.

**Hodnoťte voči benchmarku, nie podľa dojmu.** Ak budujete agenta inštrukčného dizajnu, hodnotte ho voči štandardizovanému, teóriou ukotvenému benchmarku (napr. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]), aby ste mohli merať, či ukotvenie v skutočnom rámci ISD skutočne zlepšuje výstup oproti generickému LLM.([[jeon-isd-agent-bench-2026]])

- **AI pretvára prax inštrukčného dizajnu.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar a Ilgaz (2026)]] [[meta-analysis-systematic-review|systematicky prehliadajú]] 28 štúdií (2020 - 2025) a zisťujú, že AI pomáha návrhárom s tvorbou obsahu, šablónami a personalizáciou a je konceptualizovaná ako spolupracovník, partner či kolega, a nielen ako nástroj, hoci pedagogické zladenie a pripravenosť praktikov zostávajú výzvami.

- **Zachytená činnosť sa sústreďuje v jednej fáze cyklu.** V prehľade 78 štúdií o inštrukčnom dizajne podporovanom AI sa činnosť vo fáze návrhu objavuje v **74 zo 78 štúdií (95 %)** a vo fáze vývoja v 44 (56 %), kým analýza dosahuje len 11 (14 %), hodnotenie 10 (13 %) a implementácia 7 (9 %), a **žiadna štúdia neskúmala podporu AI v celom cykle ADDIE**. Cyklus je túžba, ktorú dôkazová základňa nepokrýva, čo je dôležité pre každého, komu sa "tvorba kurzov poháňaná AI" predáva ako komplexná schopnosť ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou a Kameas, 2026]]).
- **Tri roly AI, hierarchicky rozdelené.** *Generatívne* použitie, keď AI vytvára návrhový obsah podľa pokynov pedagóga, dominuje v **96 % štúdií**; *lešenárske* použitie, keď AI štruktúruje vlastné uvažovanie návrhára, sa objavuje v 35 %; *evaluačné* použitie, keď AI posudzuje kvalitu artefaktu, v 21 %. Odbor prevažne používa AI na vytváranie vecí, a nie na spochybňovanie vlastných návrhových rozhodnutí, čo je opak konfigurácie kritického priateľa, ktorú prehľad označuje za pedagogicky nádejnú.

## Časté mylné predstavy

- **"Plánovanie hodín s AI vracia učiteľom čas."** Čas na plánovanie naozaj klesol, z 3,32 hodiny týždenne na 2,51 s nástrojom, ale **mediánový učiteľ naplánoval len 21 % až 40 % hodín od nuly**. Čas sa ušetril a plánovanie sa nestalo podstatne dôkladnejším; úspora sa hromadila, a nie reinvestovala.
- **"Spolunávrh s AI je dobre podložený."** Systematický prehľad [[wang-teacher-ai-co-design-review-2026|spolunávrhu učebných úloh učiteľom a AI]] **potvrdzuje tento vzorec vo veľkom rozsahu naprieč 28 štúdiami**, čo opisuje konzistentnú prax, a nie preukázanie lepších výsledkov.
- **"Rubrika je pevný vstup."** Rubrika funguje ako **sprostredkujúce rozhranie medzi ľudským pedagogickým zámerom a strojovým odvodzovaním**: práve chápanie hodnotiacich kritérií ako **prehodnotiteľných** umožňuje, aby nástroj niesol zámer pedagóga. Pevná rubrika prenáša predvolené rámcovanie stroja do hodnotenia.

## Prepojené koncepty

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Pedagogické partnerstvá
- [[online-teaching-and-learning]] - Online výučba a učenie
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
- [[pedagogy]] - Zastrešujúci rámec: pedagogiky a stratégie výučby vo vzdelávaní s AI
- [[stakeholders]] - Zastrešujúci rámec: ľudia a publikum vo vzdelávaní s AI (študenti, učitelia, návrhári, administrátori, tvorcovia politiky)

## Prepojené články

- [[roy-aila-lesson-planning-teacher-choices-2026]] - Merateľná úspora času na plánovanie popri zistení, že učitelia plánujú len 21 % až 40 % hodín od nuly
- [[powerful-learning-with-emerging-technology-2025]] - Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] - Analytika učenia a GenAI v rozhodovaní o návrhu učenia
- [[tang-chatbots-learning-design-2026]] - Používanie chatbota v návrhu učenia: návrhári sa zdržiavajú pri výsledkoch a pedagogike, a nie pri tvorbe obsahu (Tang a spol. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] - Vzorce interakcie učiteľa s AI pri návrhu hodín naprieč skúsenosťou a znalosťou AI (Choi a spol. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] - AI vo vysokom školstve: angažovanosť a sprostredkujúca úloha vyučovacích metód
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] - Taxonómia (hraničný objekt) na klasifikáciu učebných aktivít s GenAI
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
- [[ai-web-agents-lesson-design-2025]] - Agenti AI na webe: autonómny webový agent hodnotí návrhy hodín a predpovedá vypadnutie študentov ešte pred ich zapojením (Wang, Mitchell a Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] - AIRIS: rámec kognitívne aktivovaného rozšírenia AI vo fyzike
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] - Designing for Reach: sedem pák a študent sám s AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] - Keď "nie" robí videá lepšími: dvojité hradlovanie pre pedagogicky ukotvenú tvorbu obsahu s AI
- [[rhaimi-productivemath-2025]] - ProductiveMath: AI na podporu návrhu úloh produktívneho zlyhania
- [[kibar-ilgaz-ai-instructional-design-review-2026]] - AI a prax inštrukčného dizajnu: systematický prehľad (Kibar a Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] - Grafové inteligentné tutorstvo pre dynamické domény (2026)
- [[making-ai-annoying-constrained-writing-2026]] - Úmyselne otravovať AI: obmedzenie v písaní podporovanom AI (Konradt, Boote a Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] - Model inteligentnej triedy a slučka D-T-E zlepšujúce zručnosť inštrukčného dizajnu v magisterskom štúdiu matematiky (Zhu a spol. 2026)
- [[ai-modeling-problem-generation-platform-2026]] - Platforma s podporou AI na generovanie úloh matematického modelovania (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] - Spolunávrh učebných úloh učiteľom a AI: trendy a perspektívy (Wang a spol. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] - Architektúra rolí v diferencovaných skupinových aktivitách navrhnutých AI (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] - LLM ako agenti iteratívneho pedagogického návrhu
