---
title: "Návrh výuky"
created: "2026-10-27T16:29:38-04:00"
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
source_updated: "2026-10-28T00:58:16-04:00"
updated: "2026-10-27T16:29:38-04:00"
translation_note: "*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

> **Návrh výuky** (známý také jako *instruční design*) - systematický proces vytváření účinných učebních zkušeností prostřednictvím analýzy učebních potřeb a návrhu, vývoje, implementace a hodnocení výukových materiálů a činností. AI přetváří návrh výuky tím, že automatizuje tvorbu obsahu, umožňuje [[adaptive-learning|adaptivní]] učební cesty, podporuje iteraci řízenou daty a rozšiřuje - spíše než nahrazuje - roli instručního designéra.

## Otázky k zamyšlení

- Vzpomeňte si na kurz nebo lekci, kterou jste zažili nebo navrhli. Kde skončilo „co učit" (kurikulum) a kde začalo „jak to učit" (návrh výuky) - a jak obojí vzájemně působilo?
- Častým předpokladem je, že lepší plynulost v práci s AI automaticky vytváří lepší vzdělávací obsah. Stránka tomu čelí důkazy, že rozhodující pro účinnost učení je explicitní pedagogická struktura - ne jen plynulost v AI. Kde jste viděli působivý výstup, který selhal ve výuce?
- Pokud AI nástroj dokáže z promptu vygenerovat celý kurz, které lidské rozhodování se stává důležitějším, a ne méně důležitým? Stránka argumentuje, že AI roli instručního designéra rozšiřuje, nikoli nahrazuje - jak by taková rozšířená role vypadala?
- Některé modely instručního designu, jako je ADDIE, se používají jako rigidní, lineární kroky. Stránka je však pojímá jako iterativní a flexibilní plánovací heuristiky. Kdy může příliš doslovné následování procesu podkopat dobrý návrh?
- Stránka ukazuje, že pedagogicky ukotvené promptování - například pětistupňový rámec založený na teorii učení - výrazně zlepšilo výsledky vyššího řádu. Kdybyste stavěli AI tutora, co byste zakódovali do explicitní návrhové vrstvy, aby jeho výuková strategie zůstala vysledovatelná a reprodukovatelná?

## Úvod

Návrh výuky spojuje schopnosti AI a účinnou pedagogiku. Zatímco [[curriculum-design]] řeší *co* učit na úrovni programu, návrh výuky řeší *jak* to učit na úrovni kurzu a lekce. Články v této znalostní bázi zkoumají jak AI jako nástroj pro designéry výuky, tak principy návrhu výuky pro budování účinných [[intelligent-tutoring|systémů AI doučování]].

Co tato návrhová práce v praxi zahrnuje, je samo empirickou otázkou. [[tang-chatbots-learning-design-2026|Tang et al. (2026)]] kódovali 1 378 tahů mezi designérem a chatbotem od pěti začínajících designérů výuky pracujících s chatbotem zabudovaným v návrhovém nástroji a zjistili, že dialog se soustředil na zamýšlené výsledky učení a pedagogický přístup, nikoli na generování obsahu. Designéři se k výsledkům opakovaně vraceli jako ke kontrole sladění, zatímco převáděli složky kurikula na konkrétní úkoly, a role asistenta se napříč fázemi posouvala od vyjasňování pojmů přes podporu návrhu úkolů až po ověřovací průchod před termínem. Podpora návrhu je podle těchto důkazů méně o vytváření materiálu a více o udržování soudržnosti záměru návrhu.

Learning analytics a generativní AI podporují různé části návrhu: v 11 ohniskových skupinách na jedné australské univerzitě se diskurz analytiky nejčastěji vyskytoval společně s kontextem a řešením problémů na úrovni kurzu (0,32), zatímco diskurz GenAI se soustředil na návrh hodnocení (0,26) a na návrh pro sebeurčení žáků (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]).

### Klíčová výzkumná témata

**Tvorba obsahu s podporou AI** je nejpřímočařeji transformativní aplikací. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** představuje šestifázovou architekturu integrující generativní AI s LaTeXem a Pythonem za účelem automatizace tvorby [[stem-education|STEM]] materiálů, ověřenou na 8 modulech a 28 projektových kontextech s hodnocením kvality studenty 8,5-9,9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** používá multiagentní rámec strukturovaný kolem modelu ADDIE, v němž role-based agenti (vyučující, instruční designér, koordinátor kurzu) spolupracují na generování kompletních materiálů kurzu. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** poskytuje strukturovanou pipeline pro adaptivní [[pedagogy|pedagogickou]] [[video-education|tvorbu videa]] ukotvenou v korpusech kurzu a ukazuje, že pro generování vzdělávacího obsahu je nezbytná explicitní pedagogická struktura - ne jen plynulost v AI. Platformy [[generative-ai|generativní AI]] mohou také ztělesňovat principy návrhu výuky v obsahu, který vytvářejí: [[ai-modeling-problem-generation-platform-2026|platforma poháněná AI pro generování úloh matematického modelování]] spojila zavedené principy návrhu s [[rag|retrieval-augmented generation]] a byla vyvinuta přístupem ADDIE, aby vytvářela pedagogicky ukotvené úlohy a doporučení, které konvenčním generátorům obsahu chybějí. Výnos takové tvorby obsahu a lekcí s podporou AI je však zprostředkován odborností samotného učitele: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] zjistili, že zkušení učitelé kriticky přizpůsobují náměty lekcí generované AI žákům a kontextu (znovu promptují a rozvádějí výstup), zatímco začátečníci mají sklon přejímat návrhy AI přímo - pedagogická hodnota nástrojů pro tvorbu obsahu tedy závisí na zkušenosti učitele a jeho zdatnosti v AI, nikoli na nástroji samotném. Systematický přehled [[wang-teacher-ai-co-design-review-2026|společného návrhu učebních úloh učitelem a AI]] (Wang, Liu & Islam 2026) tento vzorec potvrzuje ve velkém měřítku napříč 28 studiemi (2015-2025): GenAI se používá hlavně pro plánování lekcí, generování promptů a tvůrčí ideaci a dominantním režimem spolupráce je AI jako asistent a generátor obsahu, nikoli jako plnohodnotný spoludesignér - přičemž se opakovaně objevují jako přínosy efektivita, responzivnost, [[creativity]] a [[equity-in-ai-education|rovnost]]. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] zpřesňuje zjištění o odbornosti učitele pro návrh skupinových činností: zkušení učitelé vytvářejí bohatší, synergičtější a lépe na ZPD sladěné architektury rolí v kooperativních činnostech navržených AI než začátečníci bez ohledu na znalost AI, a rámují „pedagogickou promptovou gramotnost" jako páku, která mění výstup AI v účinné [[collaborative-learning|diferencované skupinové učení]].

Zkouška Aila na tento vzorec klade číslo pro plánovací čas. Učitelé v jejích randomizovaných základních školách strávili přípravou lekcí s nástrojem 2,51 hodiny týdně proti 3,32 hodiny bez něj, mediánový učitel však plánoval od nuly jen 21 % až 40 % lekcí, což je případ, na který se nástroj pro plánování od nuly zaměřuje ([[roy-aila-lesson-planning-teacher-choices-2026|Roy et al., 2026]]).

Kde generované materiály zaostávají, je soulad s kurikulem: sedm učitelů matematiky hodnotilo úlohy produktivního selhání generované AI téměř stejně jako lidské v celkové kvalitě (M = 17,19 vs 17,43 z 25), ale níže v sladění s kurikulem (M = 2,57 vs 3,29), takže generované úlohy stále vyžadovaly úpravy délky, čtenářské úrovně a vizuálů ([[rhaimi-productivemath-2025|Rhaimi et al. (2025)]]).

**Pedagogicky ukotvené AI doučování** aplikuje principy instručního designu na návrh AI systémů. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** vytvořili didakticky řízeného [[llm]] učitelského asistenta, v němž je doučovací strategie zakódována v explicitní vnější vrstvě - což činí výběr obsahu a didaktické strukturování vysledovatelnými a reprodukovatelnými a přímo řeší obavy z neprůhlednosti v [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou et al.]]** ukázali, že pětistupňový [[prompt-engineering|promptovací]] rámec ukotvený v generativní [[learning-theories|teorii učení]] výrazně zlepšil kognitivní výsledky vyššího řádu, což ukazuje, že účinnost učení určuje instruční vedení - ne jen přístup k AI. Obojí souvisí se [[scaffolding]] a [[intelligent-tutoring]].

**Rámce a evaluace** poskytují strukturované přístupy. **[[bridging-instructional-design-framework-math]]** a **[[cotal-formative-assessment-scoring-2026|CoTAL]]** ukazují principy návrhu s [[human-in-the-loop-ai|člověkem v kruhu]]. **[[genai-mindtool-generative-learning]]** pojímá AI jako „mindtool" - kognitivního partnera, který rozšiřuje, a nenahrazuje myšlení žáka - a přímo aplikuje teorii instručního designu na integraci AI. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** aplikuje principy univerzálního designu výuky, aby vytvořila přístupného myšlenkového partnera v AI pro pedagogy, a spojuje instruční design s [[inclusive-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) je rámec pro strukturování úkolů kognitivně aktivovaného používání AI, který ohraničuje příspěvek AI tak, aby predikce, interpretace a hodnocení zůstaly na žákovi - jde o adaptaci zkoumavých cyklů specifickou pro AI, ukotvenou v [[self-regulated-learning]], teorii kognitivní zátěže a [[human-ai-collaboration]]. Tyto návrhové rámce doplňuje [[dohn-boundary-object-classifying-genai-learning-activities-2026|taxonomie Dohn et al. (2026)]], která nabízí *klasifikaci* spíše než návrhovou metodu: šest kategorií (výsledek učení, obsah, forma reprezentace, epistemická [[student-engagement|angažovanost]], sociální design, artefakty), které designérům a [[research-methods-aied|výzkumníkům]] umožňují popisovat, srovnávat a představovat si učební činnosti s GenAI tím, že zpřesňují, proč, co, jak, s čím a s kým žáci s GenAI pracují - postavená jako hraniční objekt prostřednictvím postdigitálního dialogu. Rámce chytré učebny to rozšiřují na [[teacher-education|vzdělávání učitelů]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao a Wang (2026)]] navrhují trojdimenzionální rámec pro chytré vzdělávání - účinnost učení, informační a komunikační technologie (ICT) a organizace výuky - a konkretizují jej v magisterském kurzu [[math-education|matematiky]], který propojuje [[automated-assessment|automatizované skórování]], personalizovaná doporučení a vícečetnou [[ai-feedback-quality|zpětnou vazbu od AI]] napříč fázemi před výukou, během ní a po ní. Kvaziexperiment ukázal významné zisky ve schopnosti studentů formulovat přesné, profesně ukotvené výukové cíle a přinesl přenositelný **model D-T-E** (Disciplinary Demand-Technological Empowerment-Evaluation Loop) - [[discipline-specific-aied|oborově specifické]] vodítko pro [[educational-development|vzdělavatele učitelů]], kteří převádějí koncepty chytrého vzdělávání do praktické praxe instručního designu.

**Návrh pro dosah.** Sedmipákový rámec Halaniho se u každého nastavení kurzu ptá, které páky stále působí, když je student sám s AI; strukturální kroky, jako změna toho, co certifikuje známka, nebo úlohy, které nelze dokončit bez myšlení, dosáhnou dál než sdělování studentům, že na procesu záleží ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Ohraničte nástroj, aby se ochránilo myšlení.** Devítitýdenní návrh argumentativního psaní řadil učiteli vymezené chatboty, kteří kladou otázky a odmítají generovat žákovskou prózu, a čtyři studenti střední školy se posunuli od pasivních konzumentů AI k hodnotitelům, kteří výstupům oponovali - zisky sledovala strategická omezení, nikoli neomezená generativita ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Promptování vedené rubrikou jako návrhová páka.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] ukázali, že rubrika funguje jako zprostředkující rozhraní mezi lidským pedagogickým záměrem a strojovou inferencí: pojímání hodnoticích kritérií jako revidovatelných návrhových artefaktů - spíše než pevných nástrojů - a jejich iterativní spoluvylaďování s LLM zvýšilo shodu LLM s člověkem u studentských návrhových prací z 54,75 % na 81,25 %. Rubriky konstruované pro LLM musí vyvažovat přesnost a flexibilitu - příliš vágní vybízí k volné interpretaci, příliš rigidní redukuje model na porovnávání vzorů - a promptování s ohledem na roli (vyučující, vzájemný hodnotitel, hodnotitel grantů) přineslo odlišnou hodnoticí zpětnou vazbu. To staví rubrikové inženýrství jako konkrétní praxi návrhu výuky pro utváření hodnoticího chování AI, přičemž dohled s člověkem v kruhu zůstává nezbytný.

**AI agenti pro instruční design** rozšiřují obor do [[agentic-ai|agentní AI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** je prvním standardizovaným, teoreticky ukotveným benchmarkem pro hodnocení LLM agentů pro instruční design - jeho Kontextová matice s 25 795 scénáři (51 kontextových proměnných × 33 dílčích kroků ISD z ADDIE) ukazuje, že agenti ukotvení v klasických rámcích ISD (ADDIE, Dick & Carey, Rapid Prototyping ISD) překonávají agenty bez teorie, což empiricky potvrzuje, že instruční design je strukturovaná disciplína, nikoli generický úkol promptování. Agenti nejsou jen *tvůrci* návrhů, ale také jejich *kritiky*: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] používají jediného autonomního webového agenta, který prochází vícekrokovou online lekci jako student, aby vyhodnotil návrh výuky *předtím*, než se do něj zapojí skuteční žáci - jeho popis zkušenosti studenta predikuje, kde začátečníci odejdou, a přináší akceschopnou zpětnou vazbu k návrhu, přičemž překonává všechny baseline a dokonce i simulovanou kohortu studentů v globálním kurzu CS1. To rámuje předspouštěcí agentní evaluaci jako levnou doplňkovou oporu lidské iterace návrhu. **[[wang-multi-agent-systems-learning-designers-2025]]** a **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** zkoumají multiagentní rámce, které orchestrují role-based agenty kolem modelů instručního designu, zatímco **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** zkoumá, jak učitelé a agenti společně uplatňují technologické, pedagogické a obsahové znalosti. Tato práce spojuje instruční design s [[benchmark|benchmarkingem]], [[ai-ed-evaluation]] a návrhem [[curriculum-design|kurikula]] ve velkém měřítku.

### Vazby na související koncepty

Návrh výuky je mostní disciplínou [[ai-education|AI ve vzdělávání]] - spojuje [[curriculum-design]] (co učit) se [[scaffolding]] (jak podporovat žáky), [[educational-development]] (jak připravit pedagogy) a [[generative-ai]] (samotnými nástroji). Je těsně propojen s [[teacher-role]], protože AI nástroje přetvářejí to, co designéři výuky a učitelé dělají, a s [[ai-literacy]], protože účinná integrace AI vyžaduje, aby pedagogové rozuměli schopnostem a limitům AI. Návrhová práce se nakonec rozpadá na *řád činnosti*: [[pedagogical-patterns|pedagogické vzory]] katalogizují ověřené pořadí kroků, takže designér může rozhodnout, kam v lekci AI patří, a ne jen co má lekce obsahovat. [[learning-sciences|Vědy o učení]] jsou výzkumným oborem stojícím za těmito principy: zatímco tato stránka pokrývá profesní praxi vytváření učebních zkušeností, vědy o učení tuto praxi a její návrhy zkoumají empiricky a vytvářejí kognitivní, motivační a sociální principy, které návrh výuky pak operationalizuje.

### Jak návrh výuky určuje zisky v učení

Návrh výuky je pákou, která rozhoduje, zda AI přinese [[learning-gains|zisky v učení]], nebo jen výkon nafouknutý AI. Důkazy znalostní báze jsou v tomto konzistentní: **stejný AI nástroj přináší velké zisky nebo čistou újmu podle toho, jak je učební zkušenost kolem něj navržena.** [[instructional-guidance-genai-learning|Hou et al.]] ukázali, že pětistupňový promptovací rámec ukotvený v teorii učení výrazně zlepšil kognitivní výsledky vyššího řádu, zatímco samotný přístup k AI nikoli; rámce [[genai-mindtool-generative-learning|mindtool]] a [[airis-cognitively-activated-ai-physics-2026|AIRIS]] zachovávají kognitivní práci žáka, takže výsledkem jsou trvalé zisky (a ne jen efektivita plnění úkolů). Návrhová rozhodnutí, která chrání [[learning-gains]] - scaffolding vyžadující žákův pokus, [[formative-assessment]] s měřením výsledků bez pomoci a pedagogická struktura, jež udržuje žáka jako aktéra - zrcadlí zjištění oboru (viz [[learning-gains]]), že AI je silným ziskem, když koučuje, a újmou, když odpovídá. Naopak špatně navržené lekce s integrovanou AI propadají [[cognitive-offloading|mezeře mezi výkonem a učením]], kde zdánlivý úspěch zakrývá absenci učení.

### Praktické doporučení pro designéry a vývojáře

Pro instruční designéry, tvůrce kurzů a inženýry budující učební zkušenosti s podporou AI se zjištění znalostní báze překládají do akceschopné praxe. Před samotnými postupy stojí za to vyznačit jednu hranici: návrh výuky, jak jej tato stránka popisuje, je návrhem kurzu pro známou kohortu, zatímco tytéž principy zapečené do produktu, který bude používat mnoho kurzů - vyučovaných lidmi, s nimiž se designér nikdy nesetká - jsou prací [[educational-technology-developers]], kde pedagogickou váhu nesou výchozí nastavení, konfigurovatelnost a dokumentace:

**Ukotvěte generování AI ve strukturovaném instručním modelu.** Obsah z AI je jen tak dobrý jako pedagogická struktura za ním - kvalitu určuje explicitní struktura, ne plynulost v AI. Navrhujte kolem uznávaného modelu (ADDIE, Dick & Carey, rapid prototyping) a pedagogická rozhodnutí zakódujte explicitně, místo abyste spoléhali, že je model odvodí.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Přijměte rámec na úrovni principů vedle instručního modelu.** Model na úrovni kurzu strukturalizuje jeden návrh; publikovaný rámec stanovuje kritéria, která by mělo splňovat mnoho návrhů. Příkladem, který stojí za přečtení celý, je *Powerful Learning with Emerging Technology* organizace Digital Promise, jenž svá doporučení organizuje pod třemi principy - Evidence-Based, Learner-Centered, Skill-Building -, z nichž každý rozvádí do praxí a strategií, a připojuje [[privacy]], [[explainable-ai|vysvětlitelnost]] a férovost ke konkrétním praxím jako bezpečnostní povinnosti, nikoli jako volitelné doplňky.([[powerful-learning-with-emerging-technology-2025]])
**Přizpůsobte konfiguraci AI úkolu, ne sofistikovanosti.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] rozlišuje čtyři vrstvy - prompt, kontext, harness a ověřenou smyčku - a uplatňuje princip minimálně dostatečné vrstvy: používejte nejméně složitou konfiguraci schopnou ověřitelného výsledku, protože přidaná orchestrace přináší náklady na koordinaci, ověřování, soukromí a porozumění.

**Pro tvorbu obsahu používejte multiagentní pracovní postupy založené na rolích.** Místo jednoho generického promptu orchestrajte odlišné agenty a role (vyučující, instruční designér, koordinátor kurzu), kteří spolupracují prostřednictvím definované pipeline - to zrcadlí, jak pracují skutečné týmy kurzů, a přináší ucelenější materiály než jediný prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Poskytněte instruční vedení, ne jen přístup k AI.** Ať už žáci pracují s AI přímo, nebo s materiály generovanými AI, výsledky vyššího řádu pohání vedení založené na teorii učení (například stupňovitý promptovací [[scaffolding|scaffold]] ukotvený v principech generativního učení); samotný přístup to nedělá. Navrhujte učební činnost podle toho, jak se mysl učí, a pojímejte AI jako kognitivní „mindtool", který myšlení rozšiřuje, nikoli nahrazuje.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modelujte zapomínání a plánujte opakování tam, kde je úbytek nejhorší.** G4L reprezentuje úbytek znalostí Ebbinghausovou křivkou zapomínání řízenou uplynulým časem a počtem opakování a upřednostňuje jednotky nejvíce ohrožené úbytkem, místo aby znovu servíroval to, co bylo naposledy hodnoceno ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin et al. (2026) přidávají operační krok pro rozhodování, kam AI vstoupí: rozbalte činnost na složky, které se nejlépe dělají samostatně, a na ty, které se nejlépe dělají ve spojení s AI, přičemž úsudek pedagoga zůstává pro toto rozdělení ústřední ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Učiňte obsah vysledovatelným a kontrolovatelným.** Nechte lidského designéra zkontrolovat a opravit výstup AI dřív, než se dostane k žákům, a strukturalizujte generování AI tak, aby pedagogické odůvodnění (proč tento obsah, v tomto pořadí) bylo prohlédnutelné - což řeší jak kvalitu, tak obavy z neprůhlednosti, které podkopávají výuku generovanou bez [[trust]].([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Kontrolujte média generovaná AI ve fázi scénáře, ne až po syntéze.** PedaCo staví kontrolu pedagogem na scénář - kde jsou pedagogické chyby levné na opravu - dřív, než se cokoli vyrenderuje; hodnocená instruční validita vzrostla z 3,07 na 3,86, zatímco automatizovaná vrstva po syntéze zlepšila jen dvě z pěti dimenzí ([[ai-video-dual-gatekeeping-2026|Kim, Baek a Kwak (2026)]]).

**Navrhujte s ohledem na [[accessibility]] od začátku.** Při vytváření AI nástrojů a materiálů generovaných AI uplatňujte principy [[universal-design-for-learning|UDL]], aby sloužily rozmanitým žákům, místo abyste přístupnost doplňovali dodatečně.([[ludia-udl-ai-thought-partner-2026]])

**Plánujte pro médium doručení.** Instruční design pro [[online-teaching-and-learning|online výuku a učení]] není neutrálním překladem designu pro prezenční výuku - médium mění to, jaký scaffolding, jaké hodnocení a jaká interakce jsou životaschopné, a AI násobí jak příležitosti (škálovatelná [[personalized-learning|personalizace]], podpora nepřetržitě), tak rizika ([[academic-integrity|integrita]], [[cognitive-offloading|kognitivní odklánění]]), s nimiž musí designéři počítat. Pedagogické obalení AI navrhujte v online prostředí stejně záměrně jako v prezenčním.

**Vyhodnocujte proti benchmarku, ne podle dojmu.** Pokud stavíte agenta pro instruční design, vyhodnocujte jej proti standardizovanému, teoreticky ukotvenému benchmarku (např. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]), abyste mohli měřit, zda ukotvení ve skutečném rámci ISD opravdu zlepšuje výstup oproti generickému LLM.([[jeon-isd-agent-bench-2026]])

- **AI přetváří praxi instručního designu.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|systematicky přezkoumávají]] 28 studií (2020-2025) a zjišťují, že AI pomáhá designérům s tvorbou obsahu, šablonami a personalizací a je pojímána jako spolupracovník, partner či kolega, nikoli jen nástroj - ačkoli pedagogické sladění a připravenost praktiků zůstávají výzvami.

- **Dokumentovaná činnost se soustředí do jedné fáze cyklu.** V přehledu 78 studií instručního designu s podporou AI se činnost ve fázi Design objevuje v **74 z 78 studií (95 %)** a ve fázi Development ve 44 (56 %), zatímco Analysis dosahuje jen 11 (14 %), Evaluation 10 (13 %) a Implementation 7 (9 %) - a **žádná studie nezkoumala podporu AI napříč celým cyklem ADDIE**. Cyklus je aspirace, kterou důkazní základna nepokrývá, což je důležité pro každého, komu se „vývoj kurzů poháněný AI" prodává jako end-to-end schopnost ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Tři role AI, hierarchicky rozložené.** *Generativní* použití - AI vytvářející návrhový obsah podle pokynů pedagoga - dominuje v **96 % studií**; *scaffoldingové* použití, kde AI strukturuje vlastní uvažování designéra, se objevuje ve 35 %; *hodnoticí* použití, kde AI posuzuje kvalitu artefaktu, ve 21 %. Obor drtivě používá AI k tomu, aby vyráběl věci, a ne aby zpochybňoval vlastní návrhová rozhodnutí, což je opak konfigurace kritického přítele, kterou přehled označuje za pedagogicky slibnou.

## Časté mylné představy

- **„Plánování lekcí s AI vrací učitelům čas."** Plánovací čas skutečně klesl, z 3,32 hodiny týdně na 2,51 s nástrojem, ale **mediánový učitel plánoval od nuly jen 21 % až 40 % lekcí**. Čas se ušetřil a plánování se výrazněji nedůkladnější nestalo - úspora se akumulovala, místo aby byla reinvestována.
- **„Společný návrh s AI je dobře doložen."** Systematický přehled [[wang-teacher-ai-co-design-review-2026|společného návrhu učebních úloh učitelem a AI]] **potvrzuje vzorec ve velkém měřítku napříč 28 studiemi**, což popisuje konzistentní praxi, nikoli prokázání lepších výsledků.
- **„Rubrika je pevný vstup."** Rubrika funguje jako **zprostředkující rozhraní mezi lidským pedagogickým záměrem a strojovou inferencí**: právě pojímání hodnoticích kritérií jako **revidovatelných** umožňuje, aby nástroj nesl záměr pedagoga. Pevná rubrika přenáší do hodnocení výchozí rámování stroje.
## Související koncepty

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Pedagogická partnerství
- [[online-teaching-and-learning]] - Online výuka a učení
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
- [[pedagogy]] - Zastřešující pojem: pedagogiky a strategie výuky v AI ve vzdělávání
- [[stakeholders]] - Zastřešující pojem: lidé a publikum v AI ve vzdělávání (žáci, učitelé, designéři, administrátoři, tvůrci politik)

## Související články

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Měřená úspora plánovacího času vedle zjištění, že učitelé plánují od nuly jen 21 % až 40 % lekcí
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA a GenAI v rozhodování o návrhu výuky
- [[tang-chatbots-learning-design-2026]] — Použití chatbota v návrhu výuky: designéři se zdržují u výsledků a pedagogiky, nikoli u generování obsahu (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Vzorce interakce učitele s AI při návrhu lekcí napříč zkušenostmi a zdatností v AI (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI ve vysokoškolském vzdělávání: angažovanost a zprostředkující role metod výuky
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taxonomie (hraniční objekt) pro klasifikaci učebních činností s GenAI
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
- [[ai-web-agents-lesson-design-2025]] — AI Web Agents: autonomní webový agent vyhodnocuje návrhy lekcí a predikuje odchody studentů dřív, než se studenti zapojí (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: rámec pro kognitivně aktivované rozšíření AI ve fyzice
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Designing for Reach: sedm pák a student sám s AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: dvojí kontrola pro pedagogicky ukotvenou tvorbu obsahu s AI
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI na podporu návrhu úloh produktivního selhání
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI a praxe instručního designu: systematický přehled (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Grafově založené inteligentní doučování pro dynamické domény (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Making AI annoying on purpose: omezení v psaní s podporou AI (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Model chytré učebny a smyčka D-T-E zlepšující zdatnost v instručním designu v magisterském studiu matematiky (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Platforma poháněná AI generující úlohy matematického modelování (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Společný návrh učebních úloh učitelem a AI: trendy a perspektivy (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Architektura rolí v diferencovaných skupinových činnostech navržených AI (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM jako agenti iterativního pedagogického designu
