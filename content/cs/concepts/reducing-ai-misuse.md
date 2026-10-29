---
title: Omezování zneužívání AI
created: "2026-10-27T16:29:46-04:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
source_updated: "2026-10-25T14:15:00-04:00"
updated: "2026-10-27T16:29:46-04:00"
translation_note: "*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

> **Omezování zneužívání AI**: návrhové, [[pedagogy|pedagogické]] a [[educational-policy-ai|politické]] páky, které brání studentům, aby [[generative-ai|generativní AI]] nahradili svou vlastní [[cognitive-offloading|kognitivní práci]], a místo toho je vedou k [[ethics|etickému]], produktivnímu používání. Účinné přístupy jsou řazeny podle dopadu, nikoli podle popularity, a nejsilnější důkazy upřednostňují **strukturální páky** ([[guardrails|zábrany]] v nástrojích a přepracování hodnocení), které mění prostředí tak, aby zneužívání bylo obtížnější bez ohledu na motivaci studenta, před **vzdělávacími pákami**, které spoléhají na budování trvalé kapacity a na [[framing-ai-use-for-students|souhlas studentů]].

## Otázky k zamyšlení

- Studenti, kteří zadají domácí úlohu AI, mohou vidět, jak jejich skóre z domácích úloh *roste*, zatímco skóre z [[summative-assessment|zkoušky bez pomůcek]] *klesá*. Proč se před čtením výkon a učení mohou rozcházet tak ostře a co tato mezera naznačuje o tom, co vlastně znamená „úspěch" s AI?
- Stránka řadí intervence podle kauzálního důkazu a dosahu a staví *strukturální* páky (zábrany v nástrojích, přepracování hodnocení) nad *vzdělávací* ([[teacher-role|výuka]] správné praxe), právě proto, že strukturální páky fungují bez ohledu na motivaci studenta. Souhlasíte, že změna prostředí překonává změnu smýšlení? Jaké je riziko spoléhání na každou z nich?
- Tutor se zábranou „nápověda, ne odpověď" odstranil újmu na učení, kterou způsobil tutor bez zábrany, i když se oba zdály být užitečné. Vzpomeňte na učební nástroj, který dává odpovědi příliš ochotně. Kde leží hranice mezi nápovědou, která poskytuje scaffolding, a odpovědí, která nahrazuje, a dokážete ji vymezit ještě před čtením?
- Nejsilnější náprava zahrnuje přepracování hodnocení: zkoušky ve výuce bez pomůcek, ústní obhajoby, procesní artefakty, odměňování uvažování před povrchní plynulostí. Jak byste se cítili v kurzu takto známkovaném a říká vám tento pocit něco o tom, proč je tato páka současně účinná i nepopulární?
- Rámce deklarace AI, které nutí studenty mapovat své používání na kognitivní fáze (plánování versus generování obsahu), přesouvají důraz z dohledu na profesní praxi. Myslíte si, že taková reflexe skutečně buduje lepší úsudek, nebo jen učí studenty popisovat zneužívání chytřeji?
- Stanovte si před čtením cíl: určete jednu konkrétní změnu ve svém kurzu nebo pracovním postupu, která by ztížila zneužívání AI, a jednu, která by usnadnila produktivní používání. Do které z úrovní na této stránce by každá patřila?

## Úvod

Koncept stojí na důkazu, že zneužívání AI aktivně škodí trvalému učení, což je mezera mezi výkonem a učením dokumentovaná v [[ai-misuse-learning-harm|zneužívání AI a újmě na učení]], i když zároveň nafukuje okamžitý výkon. Intervence proto cílí na mechanismy této újmy: opisování odpovědí, [[cognitive-offloading|kognitivní odklánění]], erozi motivace a vytlačování učení. Nejsou vzájemně výlučné; robustní přístup kombinuje strukturální podlahu s budováním vzdělávací kapacity.

### Proč záleží nejvíce na strukturálních pákách

Intervence lze seřadit podle **kauzálního důkazu × strukturálního dosahu × škálovatelnosti × [[sustainability|udržitelnosti]]**. Na tomto základě se dvě *strukturální* páky řadí nejvýše, protože fungují bez ohledu na to, zda se studenti rozhodnou pro správné chování: omezují prostředí, místo aby závisely na vnitřní motivaci. *Vzdělávací* páky jsou nezbytné, ale účinné jen tehdy, když je studenti přijmou, takže jsou navzdory svému koncepčnímu příslibu pojímány jako druhá úroveň. [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher a Calderon (2025)]] posouvají strukturální argument o úroveň výš, když za omezující podmínku považují řízení, nikoli chování studentů, a navrhují rámec 130 indikátorů integrity, aby akademičtí správci viděli, zda je hodnocení autentické, zda studenty osobně znají učitelé, kteří je hodnotí, a zda se integrita objevuje v uvítacích a orientačních programech. Jejich reformy cílí na architektury řízení, lidi a [[ai-technologies|technologie a zdroje]] a navrhují vypůjčit si [[guardrails|red teaming]] z kybernetické bezpečnosti, aby odhalili zranitelnosti hodnocení dříve, než je najdou studenti, což je připomínka, že strukturální podlahu udržují instituce, které k tomu potřebují informace i vůli.

### Úroveň 1: přímo prokázané snížení újmy na učení

**Návrh nástroje AI se zábranami ([[scaffolding|scaffolding]] typu „nápověda, ne odpověď").** V nejsilnějším kauzálním zjištění znalostní báze terénní [[rct|randomizovaná kontrolovaná studie]] ukázala, že tutor ve stylu ChatGPT bez zábran zvýšil výkon při asistovaném procvičování o **48 %**, ale snížil skóre neasistované zkoušky o **17 %**, zatímco tutor se zábranami (nápovědy místo odpovědí a navíc informace o úloze od učitele) újmu zcela odstranil. Mechanicky to brání chování „berličky" spočívajícímu v opisování odpovědí, které je za škodou. Aktivity zahrnují doučování typu nápověda, ne odpověď, vkládání správných řešení a běžných [[misconceptions|mylných představ]] do promptů a požadavek, aby student nejprve zkusil vlastní pokus, než se výstup AI zobrazí.

**Zadržení odpovědi chrání v rámci sezení, aniž by budovalo dovednost.** [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al. (2026)]] zadrželi souhrnnou pozici v [[agentic-ai|multiagentní]] debatě a snížili přecházení k nesprávné pozici AI ze 42 až 60,5 % na 5,7 až 8,2 %, avšak v rámci sezení nezjistili žádný účinek na učení (β = 0,03, p = 0,18): zábrana držela, dokud byla na místě, a neasistovaný úsudek nechala nezměněný.

**Přepracování hodnocení (měřítka odolná vůči AI a bez pomůcek).** Protože újma ze zneužívání závisí na hodnocení (projevuje se u měřítek pod dohledem, bez pomůcek a bez asistence, zatímco běžné známkované práce nafukuje), změna toho, co se počítá jako výkon, zneužívání jak odrazuje, tak odhaluje. Aktivity zahrnují zkoušky ve výuce bez pomůcek a ústní obhajoby, požadavek procesních artefaktů (koncepty, reflexe, anotované uvažování), odměňování uvažování před povrchní plynulostí a vyhlašování zón bez AI. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] dávají požadavku na procesní artefakty konkrétní nástroj: povinné historie verzí a reprodukovatelné analytické dokumenty, takže podezřelé odevzdání lze zkoumat jako časovou osu vývoje práce a množství zfalšovaného materiálu, které by student musel vytvořit, roste daleko za to, co mu externalizace ušetří. Rozsáhlé terénní důkazy to podtrhují: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei a Wu (2026)]] zjistili, že externalizace domácích úloh zvýšila skóre z domácích úloh o 18 %, zatímco skóre zkoušky bez pomůcek *snížila* o 20 %, což je přesně signál, který mají neasistovaná měřítka pod dohledem odhalovat, a studie doporučuje dávat prezenčnímu hodnocení bez pomůcek větší váhu. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall a Parapadakis (2025)]] dávají stejné logice nejvýslovnější podobu prevence situační kriminality, když tvrdí, že selhání patří hodnocením, na která model dokáže přesvědčivě odpovědět, nikoli studentům, a uvádějí případ, v němž 25 preventivních technik uplatněných na australský závěrečný kurz podnikání (sledované interakce studentů, detekce „příliš odborné" práce pomocí varovných signálů, náhodné přeskupování týmů, týdenní testy ve výuce pod dohledem, výzvy k odstranění studijních materiálů, které studenti zveřejnili) podle zprávy snížilo případy pochybení ze 183 na 27 během roku. Jejich doporučení jsou motivační, nikoli vyšetřovací: zvyšovat vnímaný účel hodnocení, budovat [[self-efficacy|sebeúčinnost]] a zvyšovat vnímaný společenský náklad podvádění, přičemž autoři varují, že řešit jen jednu nebo dvě ze tří věcí selže, a podporují to pěti přepracováními specifickými pro obor, která mění časově omezené zkoušky z řešení problémů na otevřené [[problem-solving|řešení problémů]] s písemnou reflexí vlastního postupu studenta, sumativní eseje na [[collaborative-learning|spolupracující]] archivní výzkumné projekty a [[eportfolio|portfolia]] na iterativní recenzované designové procesy.

Strukturální páky mají donucovací rameno a jejich důkazní základ je slabší, než naznačuje jejich dosah. [[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] kódovali 1 162 případů pochybení s generativní AI a zjistili, že důkazy nejčastěji citované v okamžiku obvinění (výstup [[ai-detection|detektoru]], zprávy o podobnosti, obsahové vzorce typické pro AI) nesly nejslabší důkazní hodnotu, zatímco přiznání, pozorované chování u zkoušky a nezávisle ověřené zfalšované odkazy byly nejsilnější; protože institucionální postupy nestanoví žádný minimální důkazní práh, kvalita důkazů neměla spolehlivý vztah k výsledkům případů a studenti, jejichž případy stály na tenkých důkazech, měli k dispozici hlavně odvolání. [[wright-transcription-not-generation-2026|Wright (2026)]] ukazuje druhý náklad stejné nepřesnosti: zákazy psané kolem „generativní AI", nikoli kolem funkce, zachycují nástroje, které pouze převádějí formát práce, kterou student už vytvořil, takže pouhé přepsání může být sankcionováno jako pochybení, což je příliš široké zachycení, které dopadá nejtvrději na [[learners|studující]] se zdravotním postižením a na ty vystavené [[equity-in-ai-education|nerovnosti]] a pro [[assessment-validity|validitu]] nedělá nic. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana, Mtshali a Mchunu (2026)]] dodávají, že [[remote-proctoring|vzdálený dohled nad zkouškami]], nejrozšířenější kontrola integrity, staví svůj argument odstrašení na tom, jak se studenti říkají, že se cítí, nikoli na sníženém pochybení, a ukládá úzkost, ztrátu soustředění a vyloučení související s infrastrukturou, u něhož není prokázáno, že by bylo vyváženo nižším zneužíváním. [[li-genai-assessment-language-equity-2026|Li (2026)]] přidává dimenzi návrhu pravidel: protože stejné rozhraní provádí povolenou jazykovou editaci i zakázané podstatné psaní, nerozlišená pravidla GenAI ukládají kohortně vychýlené náklady na compliance studentům, kteří používají angličtinu jako další jazyk, takže obhajitelnější prevencí je hranice mezi podporou a substitucí založená na účelu a zakotvená v konstruktu hodnocení, s kalibrovanou deklarací, proporcionalitou odstupňovanou mezi rozhodnutím o prahu, o důkazu a o sankci, a návrhovými pákami (postupná odevzdání, krátké ústní ověření sladěné s konstruktem, otázky založené na kritice), které dělají práci, kterou detekce nedokáže. Prevence musí pokrývat i samotného hodnotitele: [[humble-prompt-injection-ai-grading-red-team-2026|Humbleho (2026)]] red teaming zjistil, že dvě z pěti strategií nepřímé prompt injection vložených do souboru odevzdané práce pozvedly neprospívající esej na prospívající bez odhalení, s uváděnou úspěšností 100 % a 94 %, takže tam, kde práci studentů známkují nástroje AI, patří [[human-in-the-loop-ai|lidská kontrola]], jasnější oddělení instrukcí od odevzdaného obsahu a testování odolnosti do strukturální podlahy, nikoli do volitelné úrovně.

### Úroveň 2: silná podpora v rámcích, vysoký potenciál

**Sekvence používání se scaffoldingem: nejprve myslet, potom AI, nakonec reflektovat.** Osm návrhových principů pro integraci LLM bez vytlačení [[critical-thinking|kritického myšlení]]: zachovat kognitivní tření, postavit AI do role provizorního myšlenkového partnera, nikoli autority, vložit kontrolní body pro hodnocení, vyžadovat [[metacognition|metakognitivní]] deník a protokoly promptů a vyvážit fáze zprostředkované AI s fázemi bez AI. Korelační důkazy (samostatná práce před AI vede k silnějším výstupům) jsou silné; jde o pedagogicky úplnou verzi úrovně 1.

**[[ai-literacy|Gramotnost v oblasti AI]] a [[prompt-engineering|gramotnost v promptování]] se záměrným procvičováním a okamžitou [[feedback|zpětnou vazbou]].** Modul pro [[k-12|K-12]] využívající scénářové procvičování promptů s automatickým hodnotitelem založeným na [[llm|LLM]] zlepšil skutečné dovednosti v promptování a zvýšil jistotu v používání AI k učení o **10,4 %**, přičemž 87 % uvedlo, že se naučilo AI používat odpovědně. Prokázané přírůstky dovedností; otevřenou otázkou je, zda se promění v [[learning-gains|výsledky učení]] po proudu. Rovněž řeší mezeru v [[equity-in-ai-education|rovnosti]] v předchozím přístupu k AI.

**Strukturované rámce deklarace používání AI.** Nahrazení generických zaškrtávacích polí „použil jsem AI" [[discipline-specific-aied|deklaracemi specifickými pro doménu]], které spojují používání s kognitivními fázemi (strukturální plánování versus generování obsahu), vynucuje reflexi učebního procesu a objasňuje hranici mezi přijatelnou pomocí a pochybením, čímž přesouvá důraz z dohledu na profesní praxi.

Vzdělávací páky vypadají jinak, jakmile se integrita pojímá jako praxe, kterou je třeba učit, nikoli jako pravidlo, které je třeba vymáhat. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] tvrdí, že režimy integrity založené na detekci a ověřování jsou nesladěné s prací rozšířenou o GenAI, a přerámovává integritu jako pedagogickou praxi uskutečňovanou prostřednictvím [[evaluative-judgment|hodnotícího úsudku]] (schopnosti studujícího vážit možnosti, odůvodňovat akademické volby a nést odpovědnost v nejistotě), který se stává viditelným díky artefaktům, jako jsou anotované stopy rozhodnutí, dokumentované ověřování, ústní obhajoba a historie verzí od konceptu ke konceptu, přičemž detekce je degradována na jednu doplňující vrstvu, nikoli na primární infrastrukturu. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa a Mezgebu (2026)]] nacházejí stejné otevření ze strany studentů: ve 27 rozhovorech na etiopské [[higher-ed|univerzitě]] bylo používání téměř univerzální, většina účastníků přičítala GenAI zlepšení svého výkonu a nejostřejší stížnost šla opačným směrem: uživatelé AI získávali lepší známky než pilní samostatně pracující, což účastníci popsali jako demotivující. Autoři uzavírají, že přesvědčení studentů předpovídá etické používání silněji než institucionální pravidla, takže povědomí, jasná politika a přepracování hodnocení musí přijít společně, což je vzdělávací úroveň této stránky vyjádřená jako podmínka: budování kapacity mění chování jen prostřednictvím [[framing-ai-use-for-students|souhlasu studentů]] doprovázeného strukturální podlahou. [[ji-student-voices-academic-integrity-scoping-2026|Jiho (2026)]] [[meta-analysis-systematic-review|scoping review]] 38 studií hlasů studentů dodává celopolní verzi stejného závěru: přezkoumané studie se sbíhají na posunu od retrospektivní detekce k proaktivnímu etickému uvažování, na výuce etiky AI a AI-plagiátorství v [[curriculum-design|kurikulu]], nikoli v jednorázových [[ai-literacy|gramotnostních]] sezeních, a na podrobných pokynech spoluvytvářených vedením, vyučujícími a studenty, protože nejasná doporučení se čtou jako tiché svolení, nikoli jako varování. Jiho vlastní čtení je, že vlastnictví a morální uvažování motivují studenty více než strach z trestu a že studenti nejsou ani pasivními příjemci GenAI, ani viníky bez morálního omezení, ale morálními aktéry pracujícími v šedé zóně, což je premisa této úrovně vyjádřená jako zjištění.

### Úroveň 3: slibné, nižší přímý kauzální důkaz

**Metakognitivní intervence a intervence sebehodnocení.** Reflexivní deníky, protokoly promptů a trénink kalibrace obnovují „chybějící kognitivní základnu" studentů odkojených AI, kteří nedokážou lokalizovat vlastní kognitivní hranici, protože ji plynulost generovaná AI maskuje. Koncepčně ústřední, ale dosud kauzálně netestované.

**Přepracování motivace.** Protože dostupnost AI eroduje [[motivation|autonomní motivaci]] („proč se namáhat?"), restrukturalizace úloh kolem cílů, které AI nesplní, a kolem [[agency|agenturnosti studujícího]] přímo cílí na erozi vytrvalosti, která násobí přímou újmu.

**Kritická gramotnost v oblasti AI.** Rámování moc-vědění, které učí studující vyslýchat, zpochybňovat a účastnit se [[governance|řízení AI]], místo aby je konzumovali. Dlouhodobé, na rovnost orientované a ve svých ambicích strukturální, i když jeho účinky na učení jsou z velké části netestované.

**Rozpoznání [[ai-sycophancy|patolízalství]] jako prevence nekritického přijetí.** Protože [[ai-sycophancy|patolízalská]] AI spíše potvrzuje než zpochybňuje uživatele, je přímým vektorem zneužití: studenti, kteří dostávají přitakávající souhlas za nesprávné uvažování, jsou povzbuzováni, aby AI nahradili svou vlastní [[cognitive-offloading|kognitivní práci]]. [[contextual-sycophancy-ai-literacy|Kontextuální patolízalství]] ukazuje, že gramotnost v oblasti AI a trénink promptování tuto chybovou smyčku snižují, ale neodstraňují, takže prevence zneužívání musí párovat vzdělávací trénink rozpoznávání s návrhem korektivního tření na úrovni systému (viz zábrany v úrovni 1).

- **[[desirable-difficulties|Produktivní tření]] a pedagogická funkce.** Rychlý přehled ze Sydney tvrdí, že GenAI podkopává učení, když studentům umožní obejít kognitivní a metakognitivní tření potřebné k učení, a že záměrně navržené nástroje zavádějí *produktivní tření* (zadržování odpovědí, vyžadování vysvětlení). Rozlišuje čtyři pedagogické funkce: učení *z* GenAI, *s* GenAI, *o* GenAI nebo *utvářením* GenAI, z nichž každá klade jiné nároky na agenturnost a hodnocení.([[young-people-learning-generative-ai-rapid-review-2026]])
## Časté mylné představy

**„Hlavní pákou proti zneužívání je učit studenty o rizicích."** Je to páka, která závisí na tom, zda student spolupracuje, a proto se zde řadí pod strukturální páky. Zábrany a přepracování hodnocení fungují bez ohledu na to, zda se student rozhodne pro správné chování; vzdělávací přístupy fungují jen se souhlasem. Rozdíl není morální, ale mechanický: změněné prostředí omezuje chování přímo, zatímco změněné přesvědčení musí přežít noc před termínem odevzdání.

**„Když zábrana vydrží během sezení, učení je zajištěno."** Vydržet a učit jsou odlišné výsledky a korpus obsahuje čistý dvojí výsledek. Zadržení souhrnné pozice v [[agentic-ai|multiagentní]] debatě snížilo přecházení studentů k nesprávné pozici AI ze 42 až 60,5 % na 5,7 až 8,2 %, což je velký ochranný účinek, avšak **v rámci sezení nevedlo k žádnému účinku na učení** (β = 0,03, p = 0,18). Zábrana udělala svou práci jako zábrana a nestala se výukou. Navrhovat prevenci zneužívání není totéž jako navrhovat učení.

**„Odhalit zneužívání a potrestat je strategie prevence."** Prevence musí pokrývat i samotného hodnotitele. [[humble-prompt-injection-ai-grading-red-team-2026|Humbleho (2026)]] red teaming zjistil, že dvě z pěti strategií nepřímé prompt injection vložených do souboru odevzdané práce zvýšily známku neprospívající eseje. Postup, který odhaluje zneužívání studenty, a přitom důvěřuje nezkontrolovanému obsahu odevzdané práce, je chráněn jen z jedné strany.

**„Zneužívání je problém motivace studentů."** [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher a Calderon (2025)]] posouvají omezující podmínku o úroveň výš, když za věc, kterou je třeba změnit, považují řízení, nikoli chování studentů, a navrhují rámec 130 indikátorů integrity. A újmu na učení lze měřit ve velkém: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei a Wu (2026)]] zjistili, že externalizace domácích úloh zvýšila skóre z domácích úloh o 18 %, zatímco skóre zkoušky bez pomůcek *snížila* o 20 %, což je selhání návrhu, které se projeví přesně v mezeře, o níž je tato stránka.

## Doporučení pro zavádění podle rolí

**Pro vyučující a kurzy**

- Začněte hodnocením, nikoli textem politiky. U každé známkované úlohy se ptejte, zda by neasistovaná verze ukázala to, co chcete certifikovat, a nejprve opravte úlohu: je to páka, která nevyžaduje souhlas studenta.
- Zaveďte nástroje typu nápověda, ne odpověď, kde je k dispozici tutor AI, protože terénní RCT s doučováním se zábranami a bez nich je nejsilnějším kauzálním důkazem v této oblasti.
- Ověřte, že váš vlastní postup známkování odolává instrukcím vloženým do odevzdaných souborů, dříve než budete zneužívání studenty považovat za jedinou hrozbu.
- Považujte výkon s povolenou AI a výkon bez asistence za dvě různá měření; rozdíl 18 % a 20 % výše je neviditelný, pokud oba nezměříte.

**Pro vývojáře**

- Vestavte omezení do rozhraní, nikoli do varování. Tutor, který dokáže vytvořit hotovou odpověď, ji pod tlakem termínu také vytvoří.
- Neusuzujte na učení z dodržování zábrany. Výsledek debaty ukazuje, že chování drželo, zatímco měřítka učení zůstala plochá, takže měřte výsledky odděleně od interakcí.
- Ukazujte signály zneužívání vyučujícím jako diagnostiku, nikoli jako verdikty, protože rámování řízení v důkazech stojí nad chováním jednotlivého studenta.

**Pro administrátory a tvůrce politik**

- Umístěte omezující podmínku tam, kam ji staví důkazy. Indikátory a struktury řízení se obracejí k prostředí; nabádání studentů se obrací k osobě, která může institucionální návrh změnit nejméně.

## Související koncepty

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

## Související články
- [[ivory-psychology-assessment-integrity-2026]] — Stopy důkazů ve verzipovaném úložišti a reprodukovatelné analytické dokumenty jako odstrašení zneužívání (Ivory et al. 2026)
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Zadržení doporučení z velké části zabránilo nadměrnému spoléhání, aniž by vybudovalo úsudek, který chrání
- [[generative-ai-guardrails-harm-learning]] — GenAI bez zábran může škodit učení
- [[genai-performance-vs-learning]] — Rozlišení přírůstků výkonu od učení
- [[ai-assessment-scale-reform]] — Škála hodnocení s AI a reforma hodnocení
- [[critical-thinking-genai-scaffolding]] — Scaffolding kritického myšlení s generativní AI
- [[aaai2026-prompting-literacy-k12]] — Učit se používat AI k učení (modul gramotnosti v oblasti AI pro K-12)
- [[genai-declaration-frameworks-higher-education]] — Strukturování transparentnosti: rámce deklarace GenAI
- [[absent-cognitive-baseline-2026]] — Chybějící kognitivní základna
- [[ai-literacy-power-knowledge]] — Gramotnost v oblasti AI: cvičení v moc-vědění
- [[contextual-sycophancy-ai-literacy]] — Skrytý náklad kontextuálního patolízalství: intervence v gramotnosti v oblasti AI
- [[sycophantic-ai-social-interaction-2026]] — Patolízalská AI činí lidskou interakci postupem času namáhavější a méně uspokojivou
- [[ssaho-ai-academic-integrity-review-2025]] — Budování kultury a přepracování hodnocení před dohledem a detekcí
- [[young-people-learning-generative-ai-rapid-review-2026]] — Kognitivní odevzdání, produktivní tření a metakognitivní nerovnost
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Nové zvážení ústních zkoušek jako autentického hodnocení odolného vůči AI
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Trest generativní AI na učení: externalizace domácích úloh škodí učení
- [[ai-overreliance-complex-adaptive-system-2026]] — Nadměrné spoléhání na AI modelované jako komplexní adaptivní systém
- [[burneo-can-edtech-close-learning-gaps-2026]] — Zábrany odstranily újmu, aniž by zlepšily skóre zkoušek
- [[munoz-misconduct-allegation-evidence-2026]] — Co vlastně obsahují spisy o obvinění z pochybení jako důkazy
- [[wright-transcription-not-generation-2026]] — Příliš široká pravidla o AI a studenti, které zachycují
- [[sharma-judgment-visible-genai-assessment-2026]] — Integrita jako hodnotící úsudek, nikoli compliance
- [[mulisa-students-genai-integrity-perspectives-2026]] — Studenti o tom, zda je GenAI nástroj k podvádění, nebo partner při učení
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Co vzdálený dohled nad zkouškami dělá se studenty a s rovností
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — Prevence situační kriminality proti podvádění usnadněnému AI: 183 až 27 případů a pět přepracování specifických pro obor (Leaton Gray, Edsall a Parapadakis 2025)
- [[ji-student-voices-academic-integrity-scoping-2026]] — Co doporučuje 38 studií hlasů studentů: spoluvytvářená srozumitelnost a vzdělávací uvažování před detekcí (Ji 2026)
- [[li-genai-assessment-language-equity-2026]] — Kde pro pisatele angličtiny jako dalšího jazyka končí jazyková podpora a začíná substituce (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injection jako vektor zneužití proti známkování pomocí AI (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Řízení jako omezující podmínka integrity: rámec 130 indikátorů (Coates, Croucher a Calderon 2025)
