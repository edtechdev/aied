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
updated: "2026-11-08T06:31:34-05:00"
translation_of: "concepts/curriculum-design"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

> **Návrh kurikula** — proces plánování a strukturování toho, co se vyučuje napříč kurzy, programy a institucemi, včetně cílů učení, sekvencování obsahu, strategií hodnocení a progrese dovedností. V éře AI musí návrh kurikula vyvažovat základní znalosti s novými kompetencemi v AI a určovat nejen to, co se studenti učí, ale jak se učí pracovat s nástroji AI a kriticky je hodnotit.

## Otázky k zamyšlení

- Návrh kurikula se ptá, co se mají studenti učit na úrovni programu, zatímco návrh výuky se ptá jak na úrovni kurzu. Když AI přetváří obor, která z těchto dvou vrstev by se podle vás měla změnit první?
- Protože [[generative-ai|generativní AI]] automatizuje práci na úrovni implementace, někteří tvrdí, že se kurikula musí posunout k návrhu systémů, abstrakci a [[critical-thinking|kritickému hodnocení]]. Co by podle vás studenti ztratili, kdyby se důraz na nízkoúrovňové dovednosti snížil?
- Redesign kurikula v éře AI se často rámuje jako rovnováha mezi plynulostí v nástrojích a základními znalostmi. Kde jste viděli, že se tato rovnováha vychýlila příliš jedním směrem?
- Rámec SAIL pojímá gramotnost v AI jako scaffoldovanou napříč věkem a navrženou tak, aby řešila hlubší „digitální propasti" za hranicí přístupu. Jak se liší zabudování gramotnosti v AI do celého kurikula od přidání jediného kurzu o AI?
- Pokud nyní každý obor potřebuje kompetence v AI zabudované uvnitř sebe, kdo odpovídá za změnu kurikula — učitelé, programy, nebo instituce — a co pedagogové potřebují, aby v tom uspěli?
- Kurikulum je sled dovedností napříč roky, nikoli jen seznam témat. Jak tento delší pohled mění to, zda „jednotka gramotnosti v AI" skutečně zapustí kořeny?

## Úvod

Návrh kurikula se zabývá *čím* vzdělávání na úrovni programu a doplňuje [[learning-design|návrh výuky]], který se zabývá *jak* na úrovni kurzu. Články v této znalostní bázi zkoumají, jak AI přetváří kurikula napříč obory — od softwarového inženýrství po architekturu a zelené vzdělávání — a jak pedagogové navrhují kurikula, která zabudují gramotnost v AI, aniž by obětovala oborové základy.

### Klíčová výzkumná témata

**Redesign kurikul pro éru AI** je ústřední výzvou. **[[reshaping-cs-education-genai|Lee et al.]]** syntetizovali zjištění z mezinárodních workshopů o přetváření vysokoškolského [[cs-education|vzdělávání v informatice]] a argumentovali, že protože generativní AI automatizuje programování na úrovni implementace, kurikula se musí posunout k návrhu systémů, abstrakci a kritickému hodnocení — a zároveň omezit důraz na nízkoúrovňové implementační detaily. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** formalizoval agentní softwarové inženýrství jako samostatnou disciplínu s kurikulem o 21 modulech zaměřeným na „evoluci záměru" a praktickou disciplínu potřebnou k řízení [[agentic-ai|agentů AI]]. Oba se pojí s [[ai-literacy|gramotností v AI]] a [[scaffolding|scaffoldingem]].

Pojímajíce změnu jako systémovou, nikoli aditivní, [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]] triangulují [[meta-analysis-systematic-review|scoping review]], bibliometrické mapování 209 záznamů, 36 článků a deset rozhovorů s akademickými vedoucími do pěti posunů — včetně toho, že předávání znalostí ustupuje rozvoji kapacit a lokální experimentování institucionálnímu řízení.

**Mapování a analýza kurikula** využívá AI k porozumění stávajícím kurikulům. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]** analyzovali 23 sylabů z kurzů softwarového inženýrství asistovaných AI a identifikovali společná témata — [[prompt-engineering|prompt engineering]], revizi kódu s AI, [[ethics|etická hlediska]] — a odvodili doporučení pro design, která zdůrazňují vyvažování plynulosti v nástrojích se základními znalostmi. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** aplikuje výpočetní metody na srovnání struktur kurzů informatiky napříč institucemi.

Vážení mění to, co analýza kurikula vykazuje: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath et al. (2026)]] nechali GPT-o3-mini rozdělit 100 % mezi sedm podnikových dovedností u každého ze 48 hodnocení, čímž dosáhli Krippendorffova alfa 0,81 proti vahám odborníků, ale shoda se obrátila do záporných hodnot u dovedností, které popisy nikdy explicitně neuvádějí (−0,19).

**Modulární struktura přežívá současný obsah.** Opakuje se vzorec, kdy se obor pohybuje rychleji než revizní cyklus: stabilní jádro [[ai-literacy|gramotnosti v AI]], kritického posouzení, detekce zaujatosti a [[ethics|etiky]], s obsahem o specializovaných a lokálně dostupných nástrojích připojeným jako moduly a revidovaným každých šest až dvanáct měsíců ([[bursic-ai-residency-education-curriculum-2026|Bursic et al. (2026)]]). Uvedeným případem je postgraduální [[medical-education|lékařské vzdělávání]], ale princip zobecňuje: program se zavazuje ke kompetencím, které přežijí obměnu nástrojů, a vrstvu specifickou pro nástroje plánuje na výměnu.

**Integrace gramotnosti v AI** zabudovává kompetence v AI napříč obory. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** poskytuje scaffoldovaný rámec gramotnosti v AI použitelný napříč všemi věky a vzdělávacími stupni, který se zabývá [[digital-divide|digitálními propastmi]] druhého a třetího stupně. **[[tracing-genai-literacy-interaction-patterns]]** zkoumá, jak se gramotnost v AI rozvíjí prostřednictvím vzorců interakce. **[[hingle-collaborative-ai-literacy-2025]]** zkoumá kolaborativní přístupy k tvorbě kurikula gramotnosti v AI a propojuje se s [[collaborative-learning|kolaborativním učením]].

LearnAI ukazuje, jak vypadá zabudovaná verze: vrstva široké expozice v podobě krátkých prezentací uvnitř 18 existujících kurzů napříč pěti obory (293 studentů) ve spojení s volitelnými individuálními spolutvůrčími setkáními vedenými vyškolenými vrstevnickými tutory z řad vysokoškoláků, takže studující s různou úrovní schopností se setkávají s úkoly AI na své úrovni ([[learnai-just-in-time-ai-cocreation-university-2026|Qu et al. (2026)]]).

Integrace v praxi zaostává za rámci. [[critical-media-literacy-education-2026|Santos-Albardía et al. (2025)]] zjistili, že jen 13,8 % dotázaných studentů vzdělávání a žurnalistiky uvedlo, že jejich studium zahrnovalo kritickou mediální analýzu, proti 97,8 % těch, kdo ji označili za důležitou, a jejich rozhovory s odborníky vystopovaly mezeru k [[teacher-education|přípravě učitelů]], která upřednostňuje technické a instruktážní dovednosti před mediálním vzděláváním.

Přehled PRISMA 39 studií STEAM (2016–2025) našel paralelní nerovnováhu v prvcích gramotnosti v AI: implementace rozvíjely technické gramotnosti — základní koncepty AI, [[computational-thinking|počítačové myšlení]], [[statistics-and-data-science-education|datovou gramotnost]] — zatímco nedostatečně rozvíjely etické povědomí, kreativní imaginaci a tvorbu, správu a navrhování s AI, takže praktickou odpovědí je auditovat každou jednotku proti nim ([[niri-steam-ai-literacy-review-2026|Niri et al., 2026]]).

[[student-experience|Hlas studentů]] je dalším vstupem pro design: 84 % ze 166 studentů posledního ročníku obchodu chtělo, aby se generativní AI učila v jejich předmětech, a 85 % ji považovalo za zásadní pro zaměstnatelnost, zatímco jen 7 % se o ní učilo na své univerzitě ([[rook-plumb-genai-curricula-student-insights-2026|Rook a Plumb (2026)]]).

Přehled 42 studií předuniverzitního [[ai-education|vzdělávání v AI]] zjišťuje, že kurikula se posouvají od technického obsahu k modelům založeným na kompetencích, postaveným na rámcích, jako jsou AI4K12 a Five Big Ideas in AI, přičemž [[ai-literacy|gramotnost v AI]] je pojímána jako mezipředmětová kompetence, zatímco standardizované nástroje pro její hodnocení stále chybí ([[caruana-pre-university-ai-education-slr-2026|Caruana et al. (2026)]]).

Pedagogové a zaměstnavatelé se shodli na důležitosti jen u jedné z 26 dovedností AI — stanovení realistických očekávání od práce rozšířené AI — a jen tři z 26 byly vyučovány u poloviny nebo více pedagogů, což je důkaz zprávy o mezeře v dovednostech AI mezi vysokoškolským vzděláváním a zaměstnavateli ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

Návrh aktivit strojového učení na K-12 zůstává na povrchu: přehled za rámcem ICE-T zjistil, že neviditelné používání, interakce s tlačítky a nasazení modelu tvoří téměř 60 % kódovaných aktivit učení s učitelem, otevřená tvorba se objevila jen dvakrát a technická a společenská perspektiva se společně vyskytly jen u přibližně 3 % aktivit ([[icet-ml-education-trust-2026|Haritz et al., 2026]]).

**[[discipline-specific-aied|Oborově specifické]] inovace kurikula** aplikují návrh kurikula na konkrétní obory. **[[genai-architecture-education]]** zkoumá, jak generativní AI přetváří architektonickou designovou [[pedagogy|pedagogiku]]. **[[talebzadeh-ai-green-education-2026]]** zkoumá integraci AI v kurikulech zeleného vzdělávání. **[[connected-ai-lesson-planning-vietnam]]** a **[[llm-cultural-relevance-k12]]** se zabývají [[culturally-relevant-pedagogy|kulturně odpovědným návrhem kurikula]].

**Zabudujte AI dovnitř oboru, nikoli vedle něj.** Tříúrovňové kurikulum AI (úvodní, aplikační, pokročilé) vložilo [[machine-learning|strojové učení]] do existujících témat tepelného inženýrství v kurzu o 39,1 hodinách, místo aby přidalo volitelné předměty informatiky, čímž se vyhnulo další zátěži studentů strojního inženýrství a otevřeně uvolnilo svůj sylabus, data a kód ([[mechanical-engineering-ai-curriculum-2026|Li et al. (2026)]]).

Případ žurnalistiky ukazuje variantu s hodnotami na prvním místě: trojice hodnoty–procesy–kompetence posunula studenty od reportáže pouze lidské k práci integrované s AI, přesto 8 z 9 (89 %) uvedlo důvěru v etická rozhodnutí, zatímco položky průzkumu o autorství a zaujatosti naznačovaly jen povrchní porozumění ([[ying-genai-journalism-assessment-2026|Ngu a Weller (2026)]]).

**[[governance|Institucionální]] rámce** se zabývají změnou kurikula ve velkém měřítku. **[[finkelstein-principled-ai-education-2025]]** a **[[finkelstein-principled-ai-education-2025]]** poskytují principy integrace AI napříč vzdělávacími programy. **[[ai-adoption-training-public-sector]]** zkoumá překážky adopce kurikula AI ve vzdělávání veřejného sektoru.

**Sekvencování AI napříč programem.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]] navrhují rámec „nejprve zdržet, poté zesílit", který sekvencuje generativní AI na úrovni programu: zadržet generativní nástroj, dokud se utváří kapacita, a poté ho vrátit, aby tuto kapacitu zesílil, jakmile ji student dokáže řídit a posoudit její výnosy. Řízen kritériem utváření versus offloading (zda úsek práce kapacitu buduje, nebo ji jen protlačí nástrojem), rámec spojuje návrh kurikula s [[cognitive-offloading|kognitivním offloadingem]], [[self-regulated-learning|seberegulovaným učením]] a [[academic-integrity|akademickou integritou]], s kontrolními body, které lze jen těžko obejít, v každém přechodu od zdržení k zesílení.

Pákou pro nejvyšší stupně není více kurzů: napříč 89 sponzorovanými závěrečnými projekty byl postup z úrovně 6 na 7 [[career-development-and-readiness|připravenosti na pracovní sílu]] podmíněn zkušeností zakotvenou v průmyslu — stážemi a projekty Manufacturing Extension Partnership — takže tituly potřebují učení integrované s prací, nikoli další technický volitelný předmět ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al. (2026)]]).

Důsledkem schopnosti modelů na úrovni kurikula je, že design odolný vůči AI vyprší. Pedagogové informatiky popsali kalibraci zadání proti tomu, co modely ještě neuměly, a sledovali, jak kalibrace propadá — úlohy jednoho učitele kyberbezpečnosti vyžadovaly skutečné [[problem-solving|řešení problémů]] před sedmi nebo osmi měsíci a pak je model prostě vyřešil — a facilitátor odhadl životnost na přibližně jeden semestr. Strukturálním zjištěním workshopu je, že téměř každou adaptaci provedl jednotlivý učitel v rámci jednoho kurzu, bez institucionální koordinace, kterou by trvalá kurikulární odpověď vyžadovala ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026]]).

**Soulad celého kurzu, když je generativní AI povolena.** Redesign úvodního kurzu jaderné a částicové [[physics-education|fyziky]] z roku 2026 ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]]) integroval tři typy aktivit s odlišnými rolemi — přednášky pro koncepty a notaci, cvičení pro standardní analytickou praxi a domácí úkoly jako průzkumnou „výzkumně tvarovanou" složku neobvykle obtížných problémů s více metodami. Uváděné tření (nedeklarovaný předpoklad programování, nedostatek času porozumět, místo aby šlo jen získat odpovědi, a nesoulad mezi přednáškami, cvičeními, domácími úkoly a [[summative-assessment|zkouškou]]) ilustruje, že povolení generativní AI vynucuje práci na souladu kurikula napříč celým kurzem, nikoli změnu jednoho typu zadání; jejich doporučená struktura ponechává průzkumnou práci s povolenou AI jako bonusové pokročilé úkoly, zatímco známku určuje písemná zkouška bez pomoci.

**Hloubka souladu, nikoli frekvence používání, odlišuje vzorce integrace.** Napříč 17 případy obchodních modulů šest zabudovalo generativní AI systematicky napříč výukou, učením a hodnocením (konstruktivní), devět tak učinilo nekonzistentně (smíšené) a dva sporadicky (ad hoc); konstruktivní případy vykázaly nejsilnější výsledky v angažovanosti, kapacitě a relevanci pro kurikulum ([[zhou-constructive-alignment-genai-business-2026|Zhou et al. (2026)]]).

**Rada pro konstruktivní soulad pod kritickým zkoumáním.** Zatímco výše uvedené zdroje referují o souladu v praxi, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al. (2026)]] čtou samotné doporučení jako diskurz. Jejich [[qualitative-research|kritická diskurzní analýza]] 14 textů šedé literatury publikovaných od listopadu 2022 do dubna 2025 — většinou institucionálních stránek a kapitol z centrálně postavených [[educational-development|jednotek pro učení a výuku]] — zjistila, že konstruktivní soulad je prezentován jako problém efektivity: generativní AI byla „účinným a efektivním způsobem, jak navrhnout rubriky", který mohl „zefektivnit proces", antropomorfizována jako „vzdělávací expert a asistent", „tréninkový partner" nebo „inteligentní asistent v instruktážním designu", zatímco akademičtí pracovníci dodávali jen „odbornost v předmětu" a nástroj převzal „těžkou práci při vytváření cílů učení, organizaci obsahu kurzu ... a slaďování složek kurzu". Recepty promptů typu kopírovat–vložit a číslované šablony rámovaly konstruktivní soulad jako standardizovatelný produkt, což produkovalo tři režimy selhání: performativitu (soulad, který jen vypadá sladěný), vymazání situovaného a kritického kontextu a mělký soulad, který zaměňuje soulad s konstruktivní dimenzí. Jejich náprava přesekvencovává pracovní postup návrhu kurikula — pedagogové musí rozumět konstruktivnímu souladu natolik, aby mohli výstup AI řídit, hodnotit a odmítnout, než mu delegují jakoukoli část — a ohraničuje jakýkoli nástroj institucionálním [[rag|retrieval-augmented]] agentem zakotveným v místní politice, rubrikách a atributech absolventa, s rolí „liminálního tutora", která vztah s [[educational-development|vývojářem]] rozšiřuje, nikoli nahrazuje.

**Generování úloh modelování sladěných s kurikulem.** Platformy poháněné AI mohou řešit nedostatek času a zdrojů učitelů na navrhování kvalitních úloh [[math-education|matematického modelování]] tím, že generují problémy sladěné s kurikulem a pedagogická doporučení zakotvená v designových principech a [[rag|retrieval-augmented]] generování — přístup ilustrovaný přímou úměrností v matematice na střední škole ([[ai-modeling-problem-generation-platform-2026]]). Samotné četby kurzu jsou nyní také cílem generování: Sidorkin (2026) nahradil komerční učebnici týdenními četbami generovanými AI v postgraduálním kurzu vedení vzdělávání, a přestože je studenti hodnotili jako užitečné a 75 procent souhlasilo, že se naučili více než ve srovnatelném kurzu, 4 487 stran logů neslo odkazy v textu ve stylu APA jen na přibližně 0,80 procenta stran a kombinovalo pojmenovaný kampus nebo systém s asertivními tvrzeními o politice na přibližně 1,03 procenta stran bez ověřitelného zdroje. Poučením pro kurikulární materiály je pojímat generované četby jako konceptovou produkci pod učitelskou revizí, počítat s učitelskou prací na návrhu promptů a verifikaci a kurátorovat ověřené zdroje do asistenta, místo aby kvalitu zdrojů odvozovali studenti z kontextu.

**Plánování výuky asistované AI na vrstvě přechodu kurikula do třídy.** V bodě, kdy se kurikulum stává vyučovanou lekcí, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo a Tahir (2025)]] experimentálně srovnávali plány vytvořené učiteli a plány asistované ChatGPT v dětském [[stem-education|STEAM]] [[arts-design-and-media-education|uměleckém vzdělávání]] a zjistili, že plány asistované AI hodnotilo šest expertních profesorů významně výše (medián 20,5 vs. 17,6, p = ,002, velký efekt). Ukazují, že výnos závisí na tom, jak učitel deleguje: doporučená metoda vyplňuje obsahové mezery v lekci, kterou si učitel sám načrtl (a zachovává tak designovou [[agency|autonomii]] učitele), místo aby delegovala celý plán. Přispívají také šablonou promptu Role–Instrukce–Koncový cíl pro reprodukovatelné generování s kontrolou kvality — důkaz, že plánování výuky s AI je nejsilnější, když je vloženo do kurikulárních rozhodnutí učitele, nikoli když je nahrazuje. V přírodovědném vzdělávání dospívá expertní validace k paralelnímu verdiktu o designu platformy: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli a Yildirim (2026)]] nechali jedenáct specialistů na [[science-education|přírodovědné vzdělávání]] hodnotit ChatGPT-4 a nástroj zaměřený na vzdělávání (Teacher's Buddy) na plánech pro šestou třídu sladěných s revidovaným tureckým kurikulem a modelem Engineering [[design-based-research|Design-Based]] Learning. Platforma zaměřená na vzdělávání skórovala výše ve všech osmi kritériích kvality — včetně fází intenzivních na zpětnou vazbu a souladu s kurikulem — což je důkaz, že zabudování pedagogické struktury do AI přináší sladěnější výstup. Přesto někteří experti stále preferovali plán univerzálního nástroje pro jeho silnější sociálně-emocionální důraz a 7 z 11 hodnotilo plány jako „použitelné po opravě", nikoli přímo použitelné. Volba platformy a rámování promptu, nejen AI samotná, utváří, jak dobře se generované plány sladí s kurikulárními standardy a procesními modely.

Struktura, nikoli formulace promptu, je to, co činí návrh s AI v produkci spolehlivým: pipeline Curriculum-as-Code [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] agresivně prořezávala kontext a generovala materiály sekci po sekci napříč 28 kontexty projektů, což zkrátilo čas přípravy učitele z přibližně osmi na dvě hodiny na instrukci a nezanechalo žádné koncepční ani matematické [[hallucination-risk|halucinace]], které by musela zachytit [[human-in-the-loop-ai|lidská revize]].

### Souvislosti se souvisejícími koncepty

Návrh kurikula se přímo pojí s [[learning-design|návrhem výuky]] — kurikulum definuje co, výuka definuje jak. Pojí se s [[ai-literacy|gramotností v AI]], protože zabudování kompetencí v AI je primární kurikulární výzvou, s [[teacher-role|rolí učitele]] a [[educational-development|vzdělávacím rozvojem]], protože změna kurikula vyžaduje přípravu pedagogů, a se [[scaffolding|scaffoldingem]], protože dobře navržená kurikula scaffoldují rozvoj dovedností napříč kurzy a roky. Propojení s [[higher-ed|vysokoškolským vzděláváním]] a [[k-12]] odráží relevanci návrhu kurikula napříč vzdělávacími stupni.

**Volba jednoho rámce gramotnosti v AI znamená volbu slovníku, který nikdo nepřemostil.** V přehledu rozsahu (scoping review) 50 rámců pro K-12 [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach et al. (2026)]] zjistili, že definice kompetencí se sbíhají v kognitivních, afektivních, behaviorálních, etických a sociálních dimenzích, zatímco označení a konstrukty se neshodují. Ke sdílené měřicí tradici se blížil jen rámec ABCE, validovaný v Hongkongu, Šanghaji a na Tchaj-wanu, a progrese napříč ročníky byla opakovaně navrhována a nikde testována.

## Časté mylné představy

- **„[[llm|LLM]] dokáže zmapovat kurikulum, jakmile je jednou validován s vysokou reliabilitou."** GPT-o3-mini rozdělil **100 % mezi sedm podnikových dovedností u každého ze 48 hodnocení** a dosáhl **Krippendorffova alfa 0,81** proti vahám odborníků — a **shoda** se rozpadla u konkrétních dovedností. Vysoká celková reliabilita s nerovnoměrnou shodou je vzorec, který je třeba zkontrolovat, než mapování uvěříte.
- **„Zabudovat gramotnost v AI znamená přidat kurz."** LearnAI ukazuje zabudovanou formu: **vrstvu široké expozice v podobě krátkých prezentací uvnitř 18 existujících kurzů napříč pěti obory (293 studentů)**. Expozice byla distribuována napříč kurikulem, nikoli shromážděna do jedné jednotky.
- **„Studenti přicházejí už schopni kriticky hodnotit média."** Jen **13,8 % dotázaných studentů vzdělávání a žurnalistiky** uvedlo, že jejich studium zahrnovalo kritickou mediální analýzu, proti **97,8 %, kteří ji označili za důležitou**. Mezera mezi ceněním dovednosti a jejím vyučováním je kurikulární příležitostí.

## Související koncepty
- [[pedagogical-partnerships]] — Pedagogická partnerství
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
- [[pedagogy]] — Zastřešující: pedagogiky a výukové strategie ve vzdělávání s AI
- [[recommender-systems-and-learning-paths]]

## Související články
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Vážené, odborníky validované mapování dovedností pro akreditaci
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Kritická diskurzní analýza doporučení pro generativní AI a konstruktivní soulad (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Řešení důvěry v systémy AI prostřednictvím vzdělávání: didaktická perspektiva
- [[refrain-amplify-genai-curriculum-2026]] — Kurikulární rámec „nejprve zdržet, poté zesílit" pro sekvencování generativní AI (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Projektově založené kurikulum AI ve vzdělávání v tepelném inženýrství
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Rámec úrovně připravenosti na pracovní sílu pro inteligentní výrobu v éře AI
- [[rewriting-curriculum-genai-pedagogy-2026]] — Přepisování kurikula: pedagogická změna poháněná generativní AI
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Rámec dovedností AI: 26 hodnotitelných dovedností pro mapování kurikula
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: spolutvorba s AI v pravý čas napříč obory
- [[ai-video-dual-gatekeeping-2026]] — Když říci ne dělá lepší videa: dvojí gatekeeping pro pedagogicky zakotvenou tvorbu obsahu s AI
- [[niri-steam-ai-literacy-review-2026]] — Vzdělávání STEAM pro gramotnost v AI: systematický přehled
- [[caruana-pre-university-ai-education-slr-2026]] — Příprava studujících a učitelů na budoucnost řízenou AI: SLR předuniverzitního vzdělávání v AI (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Platforma poháněná AI generující úlohy matematického modelování (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI ve vzdělávání v částicové fyzice: výzkumné problémy a základní dovednosti
- [[computing-assessment-genai-workshop-report-2026]] — AI umí udělat váš domácí úkol. Co teď? Zpráva z online workshopu o hodnocení v informatice v éře generativní AI
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - kompetenční rámce se sbíhají v pěti dimenzích bez sdíleného slovníku nebo přemostění
- [[bursic-ai-residency-education-curriculum-2026]] — Překážky integrace AI do kurikul atestací: kvalitativní rozhovory s dvanácti vedoucími lékaři
