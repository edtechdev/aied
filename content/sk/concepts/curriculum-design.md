---
title: "Návrh kurikula"
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
updated: "2026-11-08T07:31:21-05:00"
translation_of: "concepts/curriculum-design"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

> **Návrh kurikula** — proces plánovania a štruktúrovania toho, čo sa učí v rámci kurzov, programov a inštitúcií, vrátane cieľov učenia, sekvencovania obsahu, stratégií hodnotenia a progresie zručností. V ére AI musí návrh kurikula vyvažovať základné vedomosti s nastupujúcimi kompetenciami v AI a určovať nielen to, čo sa študenti učia, ale aj to, ako sa učia pracovať s nástrojmi AI a kriticky ich hodnotiť.

## Otázky na zamyslenie

- Návrh kurikula sa pýta, čo sa majú študenti učiť na úrovni programu, kým návrh učenia sa pýta ako na úrovni kurzu. Keď AI pretvára disciplínu, ktorá z týchto dvoch vrstiev by sa podľa vás mala zmeniť prvá?
- Keďže [[generative-ai|generatívna AI]] automatizuje prácu na úrovni implementácie, niektorí tvrdia, že kurikulá sa musia posunúť k návrhu systémov, abstrakcii a [[critical-thinking|kritickému hodnoteniu]]. Čo by podľa vás študenti stratili, ak by sa dôraz na nízkoúrovňové zručnosti znížil?
- Redizajn kurikula v ére AI sa často rámuje ako rovnováha medzi plynulosťou v nástrojoch a základnými vedomosťami. Kde ste videli, že sa táto rovnováha preklopila príliš jedným smerom?
- Rámec SAIL pokladá AI gramotnosť za podporenú naprieč vekovými skupinami a navrhnutú tak, aby riešila hlbšie „digitálne priepasti“ než je prístup. Ako sa líši vloženie AI gramotnosti do celého kurikula od pridania jediného kurzu o AI?
- Ak každá disciplína teraz potrebuje zabudované AI kompetencie, kto je zodpovedný za zmenu kurikula — učitelia, programy alebo inštitúcie — a čo pedagógovia potrebujú, aby v tom uspeli?
- Kurikulum je sled zručností naprieč rokmi, nie len zoznam tém. Ako tento dlhší pohľad mení to, či „jednotka AI gramotnosti“ skutočne zostane?

## Úvod

Návrh kurikula sa zaoberá *čím* vzdelávania na úrovni programu a dopĺňa [[learning-design|návrh učenia]], ktorý sa zaoberá *ako* na úrovni kurzu. Články v tejto vedomostnej báze skúmajú, ako AI pretvára kurikulá naprieč disciplínami — od softvérového inžinierstva po architektúru a zelené vzdelávanie — a ako pedagógovia navrhujú kurikulá, ktoré vkladajú AI gramotnosť bez obetovania disciplinárnych základov.

### Kľúčové výskumné témy

**Redizajn kurikúl pre éru AI** je ústrednou výzvou. **[[reshaping-cs-education-genai|Lee a spol.]]** syntetizovali zistenia z medzinárodných workshopov o pretváraní bakalárskeho [[cs-education|informatického vzdelávania]] a argumentujú, že keď generatívna AI automatizuje programovanie na úrovni implementácie, kurikulá sa musia posunúť k návrhu systémov, abstrakcii a kritickému hodnoteniu — a zároveň znížiť dôraz na nízkoúrovňové implementačné detaily. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** formalizoval agentické softvérové inžinierstvo ako samostatnú disciplínu s 21-modulovým kurikulom zameraným na „vývoj zámeru“ a praktickú disciplínu potrebnú na riadenie [[agentic-ai|AI agentov]]. Obe sa spájajú s [[ai-literacy|AI gramotnosťou]] a [[scaffolding|podporným lešením]].

[[rewriting-curriculum-genai-pedagogy-2026|Sabani a spol. (2026)]] hodnotia zmenu ako systémovú, a nie aditívnu, a triangulujú [[meta-analysis-systematic-review|scoping review]], bibliometrické mapovanie 209 záznamov, 36 článkov a rozhovory s desiatimi akademickými lídrami do piatich posunov — vrátane prechodu od odovzdávania vedomostí k rozvoju schopností a od lokálneho experimentovania k inštitucionálnemu riadeniu.

**Mapovanie a analýza kurikula** používa AI na porozumenie existujúcim kurikulám. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng a spol.]]** analyzovali 23 sylabov z kurzov softvérového inžinierstva asistovaných AI, identifikovali spoločné témy — [[prompt-engineering|inžinierstvo promptov]], revíziu kódu s AI, [[ethics|etické úvahy]] — a odvodili usmernenia pre návrh, ktoré zdôrazňujú vyvažovanie plynulosti v nástrojoch so základnými vedomosťami. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** aplikuje výpočtové metódy na porovnávanie štruktúr kurzov informatiky medzi inštitúciami.

Váhovanie mení to, čo analýza kurikula vykazuje: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath a spol. (2026)]] nechali GPT-o3-mini rozdeliť 100 % naprieč siedmimi podnikovými zručnosťami pre každé zo 48 hodnotení, pričom dosiahli Krippendorffovu alfu 0,81 oproti expertným váham, ale zhoda sa obrátila na negatívnu pri zručnostiach, ktoré opisy nikdy výslovne neuvádzajú (−0,19).

**Modulárna štruktúra prežíva aktuálny obsah.** Opakuje sa vzor, v ktorom sa odbor pohybuje rýchlejšie než revízny cyklus: stabilné jadro [[ai-literacy|AI gramotnosti]], kritického posudzovania, detekcie predpojatosti a [[ethics|etiky]], so špecializačným a lokálne dostupným obsahom nástrojov pripojeným ako moduly a revidovaným každých šesť až dvanásť mesiacov ([[bursic-ai-residency-education-curriculum-2026|Bursic a spol. (2026)]]). Postgraduálne [[medical-education|medicínske vzdelávanie]] je uvedeným prípadom, ale princíp sa zovšeobecňuje: program sa zaväzuje ku kompetenciám, ktoré prežijú obmenu nástrojov, a vrstvu špecifickú pre nástroje plánuje na výmenu.

**Integrácia AI gramotnosti** vkladá AI kompetencie naprieč disciplínami. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** poskytuje podporený rámec AI gramotnosti použiteľný naprieč všetkými vekmi a vzdelávacími stupňami, ktorý rieši [[digital-divide|digitálne priepasti]] druhej a tretej úrovne. **[[tracing-genai-literacy-interaction-patterns]]** skúma, ako sa AI gramotnosť rozvíja cez vzory interakcie. **[[hingle-collaborative-ai-literacy-2025]]** skúma spolupracujúce prístupy k tvorbe kurikula AI gramotnosti a spája sa s [[collaborative-learning|spolupracujúcim učením]].

LearnAI ukazuje, ako vyzerá zabudovaná verzia: široká expozičná vrstva krátkych prezentácií v 18 existujúcich kurzoch naprieč piatimi disciplínami (293 študentov) spojená s voliteľnými individuálnymi spolutvorbovými sedeniami, ktoré vedú vyškolení bakalárski rovesnícki tútori, takže študenti s rôznymi schopnosťami sa stretávajú s úlohami AI na svojej úrovni ([[learnai-just-in-time-ai-cocreation-university-2026|Qu a spol. (2026)]]).

Integrácia v praxi zaostáva za rámcami. [[critical-media-literacy-education-2026|Santos-Albardía a spol. (2025)]] zistili, že len 13,8 % opýtaných študentov vzdelávania a žurnalistiky uviedlo, že ich kurzy sa zaoberali kritickou mediálnou analýzou, oproti 97,8 %, ktorí ju hodnotili ako dôležitú, a ich expertné rozhovory vystopovali medzeru k [[teacher-education|príprave učiteľov]], ktorá uprednostňuje technické a inštrukčné zručnosti pred mediálnym vzdelávaním.

Prehľad PRISMA 39 štúdií STEAM (2016–2025) zistil paralelnú nerovnováhu v prvkoch AI gramotnosti: implementácie rozvíjali technické gramotnosti — základné koncepty AI, [[computational-thinking|počítačové myslenie]], [[statistics-and-data-science-education|dátovú gramotnosť]] — kým nedostatočne rozvíjali etické povedomie, kreatívnu predstavivosť a tvorbu, riadenie a návrh s AI, takže praktickou odpoveďou je auditovať každú jednotku proti nim ([[niri-steam-ai-literacy-review-2026|Niri a spol., 2026]]).

[[student-experience|Hlas študenta]] je ďalším návrhovým vstupom: 84 % zo 166 študentov obchodu v poslednom ročníku chcelo, aby sa generatívna AI učila v ich jednotkách, a 85 % ju videlo ako nevyhnutnú pre zamestnateľnosť, kým len 7 % sa o nej učilo na svojej univerzite ([[rook-plumb-genai-curricula-student-insights-2026|Rook a Plumb (2026)]]).

Prehľad 42 štúdií preduniverzitného [[ai-education|AI vzdelávania]] zisťuje, že kurikulá sa posúvajú od technického obsahu k modelom založeným na kompetenciách, postaveným na rámcoch ako AI4K12 a Five Big Ideas in AI, pričom [[ai-literacy|AI gramotnosť]] sa pokladá za prierezovú kompetenciu, kým štandardizované nástroje na jej hodnotenie stále chýbajú ([[caruana-pre-university-ai-education-slr-2026|Caruana a spol. (2026)]]).

Učitelia a zamestnávatelia sa zhodli na dôležitosti len jednej z 26 zručností AI — stanovovania realistických očakávaní pre prácu rozšírenú o AI — a len tri z 26 učila polovica alebo viac učiteľov, čo je dôkaz správy o medzere v zručnostiach AI medzi vysokým školstvom a zamestnávateľmi ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

Návrh aktivít strojového učenia v K-12 zostáva na povrchu: prehľad za rámcom ICE-T zistil, že neviditeľné používanie, interakcia s tlačidlami a nasadenie modelu tvoria takmer 60 % kódovaných aktivít učenia s učiteľom, otvorená tvorba sa objavila len dvakrát a technické a spoločenské perspektívy sa vyskytli spolu len v približne 3 % aktivít ([[icet-ml-education-trust-2026|Haritz a spol., 2026]]).

**[[discipline-specific-aied|Doménovo špecifická]] inovácia kurikula** aplikuje návrh kurikula na konkrétne odbory. **[[genai-architecture-education]]** skúma, ako generatívna AI pretvára [[pedagogy|pedagogiku]] architektonického návrhu. **[[talebzadeh-ai-green-education-2026]]** skúma integráciu AI v kurikulách zeleného vzdelávania. **[[connected-ai-lesson-planning-vietnam]]** a **[[llm-cultural-relevance-k12]]** sa zaoberajú [[culturally-relevant-pedagogy|kultúrne citlivým návrhom kurikula]].

**Vložte AI dovnútra disciplíny, nie vedľa nej.** Trojúrovňové kurikulum AI (úvodné, aplikačné, pokročilé) vložilo [[machine-learning|strojové učenie]] do existujúcich tém tepelného inžinierstva v kurze s 39,1 hodiny, namiesto pridania informatických voliteľných predmetov, čím sa vyhlo dodatočnému zaťaženiu študentov strojárstva a jeho sylabus, dáta a kód boli otvorene zverejnené ([[mechanical-engineering-ai-curriculum-2026|Li a spol. (2026)]]).

Prípad z žurnalistiky ukazuje variant s hodnotami na prvom mieste: triádové podporné lešenie hodnoty–procesy–kompetencie posunulo študentov od reportovania len ľuďmi k práci integrovanej s AI, no 8 z 9 (89 %) uviedlo dôveru v etické rozhodnutia, kým položky prieskumu o autorstve a predpojatosti naznačovali len povrchné porozumenie ([[ying-genai-journalism-assessment-2026|Ngu a Weller (2026)]]).

**[[governance|Inštitucionálne]] rámce** riešia zmenu kurikula vo veľkom meradle. **[[finkelstein-principled-ai-education-2025]]** a **[[finkelstein-principled-ai-education-2025]]** poskytujú princípy pre integráciu AI naprieč vzdelávacími programami. **[[ai-adoption-training-public-sector]]** skúma prekážky prijímania kurikula AI vo vzdelávaní verejného sektora.

**Sekvencovanie AI naprieč programom.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli a spol.]] navrhujú rámec „najprv zadržať, potom zosilniť“, ktorý sekvencuje generatívnu AI na úrovni programu: zadržať generatívny nástroj, kým sa formuje schopnosť, a potom ho obnoviť, aby túto schopnosť zosilnil, keď ju študent dokáže viesť a posúdiť jej výnosy. Rámec, riadený kritériom formovania verzus odľahčenia (či úsek práce buduje schopnosť, alebo ju len prevedie nástrojom), spája návrh kurikula s [[cognitive-offloading|kognitívnym odľahčením]], [[self-regulated-learning|samoregulovaným učením]] a [[academic-integrity|akademickou integritou]], s ťažko falšovateľnými kontrolnými bodmi na každom prechode medzi zadržaním a zosilnením.

Pákou pre najvyššie stupne nie je viac kurzov: naprieč 89 sponzorovanými záverečnými projektmi bol postup z úrovne 6 na úroveň 7 [[career-development-and-readiness|Pripravenosti na pracovnú silu]] podmienený skúsenosťou zakotvenou v priemysle — kooperatívnymi programami a projektmi Manufacturing Extension Partnership — takže tituly potrebujú učenie integrované s prácou, a nie ďalší technický voliteľný predmet ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith a spol. (2026)]]).

Kurikulárnym dôsledkom schopnosti modelov je, že návrh odolný voči AI expiruje. Pedagógovia informatiky opísali, ako kalibrovali zadania proti tomu, čo modely ešte nedokázali, a sledovali, ako kalibrácia vyprcháva — problémy jedného inštruktora kybernetickej bezpečnosti vyžadovali skutočné [[problem-solving|riešenie problémov]] ešte sedem alebo osem mesiacov predtým a potom ich model jednoducho vyriešil — pričom facilitátor odhadol životnosť približne jeden semester. Štrukturálne zistenie workshopu je, že takmer každú adaptáciu urobil individuálny inštruktor v rámci jedného kurzu, bez inštitucionálnej koordinácie, ktorú by trvácna kurikulárna odpoveď vyžadovala ([[computing-assessment-genai-workshop-report-2026|Akbar a spol., 2026]]).

**Zosúladenie celého kurzu, keď je generatívna AI povolená.** Redizajn úvodného kurzu jadrovej a časticovej [[physics-education|fyziky]] z roku 2026 ([[ai-particle-physics-education-redesign-2026|Mikhasenko a spol.]]) integroval tri typy aktivít s odlišnými rolami — prednášky pre koncepty a notáciu, cvičenia pre štandardnú analytickú prax a domáce úlohy ako objaviteľskú, „výskumne tvarovanú“ zložku s nezvyčajne ťažkými problémami s viacerými metódami. Uvedené trenie (neohlásený predpoklad programovania, nedostatok času na porozumenie a nie len získanie odpovedí a nesúlad medzi prednáškami, cvičeniami, domácimi úlohami a [[summative-assessment|skúškou]]) ilustruje, že povolenie generatívnej AI vynucuje prácu na zosúladení kurikula v celom kurze, a nie zmenu jedného typu zadania; ich odporúčaná štruktúra ponecháva objaviteľskú prácu s povolenou AI ako bonusové pokročilé úlohy, kým známku určuje písomná skúška bez pomôcok.

**Hĺbka zosúladenia, nie frekvencia používania, oddeľuje vzory integrácie.** Naprieč 17 prípadmi obchodných modulov šesť vložilo generatívnu AI systematicky naprieč výučbou, učením a hodnotením (konštruktívne), deväť to urobilo nekonzistentne (zmiešane) a dva sporadicky (ad hoc); konštruktívne prípady hlásili najsilnejšie výsledky v angažovanosti, schopnostiach a relevantnosti pre kurikulum ([[zhou-constructive-alignment-genai-business-2026|Zhou a spol. (2026)]]).

**Rada o konštruktívnom zosúladení pod kritickým skúmaním.** Kým vyššie uvedené zdroje referujú o zosúladovaní v praxi, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes a spol. (2026)]] čítajú samotné usmernenie ako diskurz. Ich [[qualitative-research|kritická diskurzívna analýza]] 14 kusov šedej literatúry publikovanej od novembra 2022 do apríla 2025 — prevažne inštitucionálnych stránok a kapitol z centrálne postavených [[educational-development|jednotiek učenia a výučby]] — zistila, že konštruktívne zosúladenie sa prezentuje ako problém efektívnosti: generatívna AI bola „efektívny a účinný spôsob, ako načrtnúť rubriky“, ktorý dokáže „zefektívniť proces“, antropomorfizovaná ako „vzdelávací expert a asistent“, „partner na tréning“ alebo „inteligentný asistent v inštrukčnom dizajne“, kým akademický personál dodával len „odbornosť v predmete“ a nástroj prevzal „ťažkú prácu pri vytváraní cieľov učenia, organizovaní obsahu kurzu ... a zosúlaďovaní zložiek kurzu“. Recepty promptov na kopírovanie a vkladanie a číslované šablóny rámovali konštruktívne zosúladenie ako štandardizovateľný produkt, čo vytvorilo tri režimy zlyhania: performativitu (zosúladenie, ktoré len vyzerá zosúladené), vymazanie situovaného a kritického kontextu a plytké zosúladenie, ktoré zamieňa zosúladenie s konštruktívnou dimenziou. Ich náprava presekvencúva pracovný postup návrhu kurikula — pedagógovia musia rozumieť konštruktívnemu zosúladeniu natoľko, aby dokázali viesť, hodnotiť a odmietnuť výstup AI skôr, než mu delegujú akúkoľvek časť — a ohraničuje akýkoľvek nástroj na inštitucionálneho [[rag|retrievalovo obohateného]] agenta ukotveného v lokálnej politike, rubrikách a absolventských atribútoch, s rolou „liminálneho tútora“, ktorá rozširuje, a nie nahrádza vzťah s [[educational-development|rozvojovým pracovníkom]].

**Generovanie úloh modelovania zosúladených s kurikulom.** Platformy poháňané AI môžu riešiť nedostatok času a zdrojov učiteľov na navrhovanie kvalitných úloh [[math-education|matematického modelovania]] generovaním problémov zosúladených s kurikulom a pedagogických odporúčaní ukotvených v dizajnových princípoch a [[rag|retrievalovo obohatenom]] generovaní — prístup ilustrovaný na priamej variácii na strednej škole v matematike ([[ai-modeling-problem-generation-platform-2026]]). Aj samotné čítania kurzu sú teraz cieľom generovania: Sidorkin (2026) nahradil komerčnú učebnicu týždennými čítaniami generovanými AI v postgraduálnom kurze vedenia vzdelávania, a hoci študenti ich hodnotili ako užitočné a 75 percent súhlasilo, že sa naučili viac než v porovnateľnom kurze, 4 487 strán logov nieslo APA citácie v texte len na približne 0,80 percenta strán a spájalo pomenovaný kampus alebo systém s asertívnymi politickými tvrdeniami na približne 1,03 percenta strán bez overiteľného zdroja. Lekcia pre kurikulárne materiály je pokladať generované čítania za konceptovú produkciu pod revíziou inštruktora, vyčleniť rozpočet na prácu inštruktora s návrhom promptov a overovaním a kurátorovať overené zdroje do asistenta, namiesto toho aby sa kvalita zdrojov nechávala študentom odvodzovať z kontextu.

**Plánovanie hodín asistované AI na vrstve prechodu kurikula do triedy.** V bode, kde sa kurikulum stáva vyučovanou hodinou, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo a Tahir (2025)]] experimentálne porovnávali plány vytvorené učiteľom s plánmi asistovanými ChatGPT v detskom [[stem-education|STEAM]] [[arts-design-and-media-education|umeleckom vzdelávaní]] a zistili, že plány asistované AI hodnotilo šesť expertných profesorov významne vyššie (medián 20,5 oproti 17,6, p = ,002, veľký efekt). Ukazujú, že prínos závisí od toho, ako učiteľ deleguje: odporúčaná metóda dopĺňa obsahové medzery v hodine, ktorú si učiteľ sám načrtol (čím sa zachováva návrhová [[agency|autonómia]] učiteľa), namiesto delegovania celého plánu. Prinášajú aj šablónu promptu Rola–Inštrukcie–Koncový cieľ pre reprodukovateľné generovanie s kontrolovanou kvalitou — dôkaz, že plánovanie hodín s AI je najsilnejšie vtedy, keď je vložené do kurikulárnych rozhodnutí učiteľa, a nie keď ich nahrádza. Vo vedeckom vzdelávaní dospieva expertná validácia k paralelnému verdiktu o dizajne platformy: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli a Yildirim (2026)]] nechali jedenásť špecialistov na [[science-education|vedecké vzdelávanie]] hodnotiť ChatGPT-4 a nástroj zameraný na vzdelávanie (Teacher's Buddy) na plánoch šiesteho ročníka zosúladených s revidovaným kurikulom Turecka a modelom inženierskeho [[design-based-research|učenia založeného na dizajne]]. Platforma zameraná na vzdelávanie skórovala vyššie vo všetkých ôsmich kritériách kvality — vrátane etáp intenzívnych na spätnú väzbu a zosúladenia s kurikulom — čo je dôkaz, že vloženie pedagogickej štruktúry do AI prináša lepšie zosúladený výstup. Napriek tomu niektorí experti stále preferovali všeobecný plán pre jeho silnejší sociálno-emocionálny dôraz a 7 z 11 hodnotilo plány ako „použiteľné po korekcii“, a nie priamo použiteľné. Voľba platformy a rámcovania promptu, nielen samotná AI, formuje to, ako dobre sa generované plány zosúlaďujú so štandardmi kurikula a procesnými modelmi.

Štruktúra, a nie formulácia promptu, je to, čo robí navrhovanie s AI spoľahlivým v produkcii: [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] a jeho postup Curriculum-as-Code agresívne prerezával kontext a generoval materiály sekciu po sekcii naprieč 28 kontextmi projektov, čím skrátil čas prípravy inštruktora z približne ôsmich na dve hodiny na inštrukciu a nezanechal žiadne konceptuálne alebo matematické [[hallucination-risk|halucinácie]], ktoré by [[human-in-the-loop-ai|ľudská revízia]] musela zachytiť.

### Súvislosti s príbuznými konceptmi

Návrh kurikula sa priamo spája s [[learning-design|návrhom učenia]] — kurikulum definuje čo, výučba definuje ako. Spája sa s [[ai-literacy|AI gramotnosťou]], pretože vloženie AI kompetencií je primárnou kurikulárnou výzvou, s [[teacher-role|rolou učiteľa]] a [[educational-development|vzdelávacím rozvojom]], pretože zmena kurikula vyžaduje prípravu pedagógov, a s [[scaffolding|podporným lešením]], pretože dobre navrhnuté kurikulá podopierajú rozvoj zručností naprieč kurzmi a rokmi. Väzby na [[higher-ed|vysoké školstvo]] a [[k-12|K-12]] odrážajú relevantnosť návrhu kurikula naprieč vzdelávacími úrovňami.

**Vybrať si jeden rámec AI gramotnosti znamená vybrať si slovník, ktorý nikto neprepojil.** V scoping prehľade 50 rámcov pre K-12 [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach a spol. (2026)]] zistili, že definície kompetencií sa zbiehajú na kognitívnych, afektívnych, behaviorálnych, etických a sociálnych dimenziách, kým označenia a konštrukty sa nezhodujú. Len rámec ABCE sa priblížil zdieľanej meracej tradícii, validovaný v Hongkongu, Šanghaji a na Taiwane, a progresia naprieč ročníkmi bola opakovane navrhovaná a nikde netestovaná.

## Bežné mylné predstavy

- **„[[llm|LLM]] dokáže zmapovať kurikulum, keď sa raz validuje s vysokou spoľahlivosťou.“** GPT-o3-mini rozdelil **100 % naprieč siedmimi podnikovými zručnosťami pre každé zo 48 hodnotení** a dosiahol **Krippendorffovu alfu 0,81** oproti expertným váham — a **zhoda** sa zrútila pri konkrétnych zručnostiach. Vysoká celková spoľahlivosť s nerovnomernou zhodou je vzor, ktorý treba skontrolovať pred dôverou v mapovanie.
- **„Vložiť AI gramotnosť znamená pridať kurz.“** LearnAI ukazuje vloženú formu: **širokú expozičnú vrstvu krátkych prezentácií v 18 existujúcich kurzoch naprieč piatimi disciplínami (293 študentov)**. Expozícia bola distribuovaná naprieč kurikulom, a nie zhromaždená do jednej jednotky.
- **„Študenti prichádzajú už schopní kriticky hodnotiť médiá.“** Len **13,8 % opýtaných študentov vzdelávania a žurnalistiky** uviedlo, že ich kurzy sa zaoberali kritickou mediálnou analýzou, oproti **97,8 %, ktorí ju hodnotili ako dôležitú**. Medzera medzi hodnotením zručnosti a jej výučbou je kurikulárnou príležitosťou.

## Súvisiace koncepty
- [[pedagogical-partnerships]] — Pedagogické partnerstvá
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
- [[pedagogy]] — Zastrešujúci koncept: pedagogiky a výučbové stratégie v AI vzdelávaní
- [[recommender-systems-and-learning-paths]]

## Súvisiace články
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Weighted, expert-validated skill mapping for accreditation
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Critical discourse analysis of GenAI-for-constructive-alignment guidance (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Addressing Trust in AI Systems through Education: A Didactic Perspective
- [[refrain-amplify-genai-curriculum-2026]] — Refrain-then-amplify curriculum framework for sequencing GenAI (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Project-Based AI Education Curriculum in Thermal Engineering
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Workforce Readiness Level framework for smart manufacturing in the AI era
- [[rewriting-curriculum-genai-pedagogy-2026]] — Rewriting the curriculum: GenAI-driven pedagogical change
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — AI Skills Framework: 26 assessable skills for curriculum mapping
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Just-in-Time AI Co-Creation Across Disciplines
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[niri-steam-ai-literacy-review-2026]] — STEAM education for AI literacy: systematic review
- [[caruana-pre-university-ai-education-slr-2026]] — Preparing learners and teachers for an AI-driven future: SLR of pre-university AI education (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Report from an online workshop on computing assessment in the age of generative AI
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - competency frameworks converge on five dimensions without a shared vocabulary or crosswalk
- [[bursic-ai-residency-education-curriculum-2026]] — Barriers to integrating AI into residency curricula: qualitative interviews with twelve physician leaders
