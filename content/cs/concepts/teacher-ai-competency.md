---
title: Kompetence pedagogů v oblasti AI
created: "2026-10-27T16:29:46-04:00"
connected_faqs: [faculty-ai-competencies, addressing-common-misconceptions-ai-education, faculty-development-ai]
type: concept
foundations: [ai-literacy, educational-development, teacher-role]
pedagogy: [self-efficacy]
technology: [generative-ai, intelligent-tutoring, llm]
ethics: [equity-in-ai-education]
audience: [faculty developers, learners, instructors]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed, edugems, playlab, teacherserver]
translation_of: concepts/teacher-ai-competency
source_updated: "2026-10-26T12:05:00-04:00"
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

> **Kompetence pedagogů v oblasti AI**: znalosti, dovednosti a dispozice, které učitelé potřebují, aby AI efektivně, eticky a spravedlivě integrovali do výuky a učení. Sahá za technické používání nástrojů k [[pedagogy|pedagogické]] integraci, [[assessment|gramotnosti v hodnocení]], etickému úsudku a jistotě [[ai-literacy|AI používat dobře]]. Kompetence pedagogů v oblasti AI je učitelským protějškem [[ai-literacy|gramotnosti v oblasti AI]] a rozvíjí se prostřednictvím [[educational-development|vzdělávacího rozvoje]]. Je ústřední pro to, jak se [[teacher-role|role učitele]] v učebnách rozšířených o AI proměňuje.

## Otázky k zamyšlení

- Stránka tvrdí, že učitel je „rozhodujícím faktorem" toho, zda AI zlepšuje učení, že nástroje pomáhají jen tehdy, když je učitelé umějí naplánovat, poskytnout k nim scaffolding a vyhodnotit výstupy. Odpovídá to vaší zkušenosti, nebo si myslíte, že záleží více na samotném nástroji než na učiteli?
- Kompetence pedagogů v oblasti AI zahrnuje technickou zdatnost, pedagogickou integraci, gramotnost v hodnocení a etický úsudek. Která z těchto složek učitelům nejvíce chybí a kterou je nejtěžší vycvičit?
- [[research-methods-aied|Výzkum]] dokumentuje mezeru mezi sebevnímanou a skutečnou dovedností učitelů v oblasti AI. Proč podle vás lidé přeceňují svou připravenost a co by bylo zapotřebí k poctivému uzavření této mezery?
- Intenzivní program profesního rozvoje v citovaném výzkumu přinesl velké přírůstky v pedagogické dovednosti práce s AI, což naznačuje, že technicko-pedagogická dovednost je vycvičitelná. Pokud je to pravda, proč se tolik učitelů stále jeví jako nepřipravených? Co stojí v cestě?
- Pokud učitel umí „AI používat dobře", co pro vás „dobře" znamená a jak byste poznali, že toho učitel dosáhl, místo že jen nástroj přijal?

## Úvod

Kompetence pedagogů v oblasti AI je důležitá proto, že učitel je rozhodujícím faktorem toho, zda AI zlepšuje učení. Výzkum soustavně ukazuje, že nástroje AI se proměňují v lepší výsledky jen tehdy, když je učitelé dokážou naplánovat, poskytnout studentům scaffolding k jejich používání, vyhodnotit výstupy a integrovat je do koherentní výuky. Literatura znalostní báze zkoumá *dimenze* této kompetence, *mezery* mezi sebevnímáním a skutečnou dovedností a *profesní rozvoj*, který ji buduje.

[[nunez-canal-stakeholder-engagement-ai-competency-2026|Nunez-Canal et al. (2026)]] spojují kompetenci akademických pracovníků v oblasti AI přímo s výsledky studentů, když s využitím teorií lidského kapitálu a zúčastněných stran na průzkumu mezi pedagogy obchodu a ekonomie argumentují, že investice univerzit do kompetence pedagogů není dobrovolná.
- **Trénink promptování kupuje čas, nikoli lepší materiály.** V předregistrované RCT se 204 učiteli zjistili Appel, Fervers a Piepenburg (2026), že ChatGPT zlepšil kvalitu materiálů na přípravu výuky a zkrátil dobu přípravy o 34 %, zatímco předchozí školení v oblasti AI přidalo dalších 21 % úspory času, aniž by zlepšilo hodnocenou kvalitu ([[appel-genai-teacher-lesson-preparation-experiment-2026|Appel et al., 2026]]). Školení učitelé psali delší prompty a méně iterovali; obě cesty dosáhly stejné kvality.

## Klíčové dimenze kompetence

Výzkum v znalostní bázi se sbíhá na několika vzájemně propojených dimenzích:

- **Technická zdatnost:** vytváření účinných [[prompt-engineering|promptů]] pro vzdělávací cíle, [[ai-ed-evaluation|hodnocení nástrojů AI]] z hlediska pedagogické vhodnosti a bezpečnosti a řešení selhání v reálném čase. [[genai-pd-ai-pck-learning-gain-2026|Intenzivní program profesního rozvoje v GenAI]] dokumentoval významné přírůstky ve všech pěti složkách AI-PCK (celkově *d* = 2,36), což ukazuje, že technicko-pedagogická dovednost je vycvičitelná.
- **Specifikace pracovních postupů agentů:** když učitelé konfigurují chatbota v přirozeném jazyce, dominantním selháním je ztracený záměr, nikoli nesprávná fakta: boti vynechali požadované kroky pracovního postupu v 53,8 % konverzací koncových uživatelů a vynechali nastavení očekávání ve 33,4 % ([[eduwild-teacher-configured-chatbots-failures-2026|Liu et al. (2026)]]), takže psaní uspořádaných, explicitních kroků je samo o sobě vycvičitelnou dimenzí kompetence.
- **Pedagogické znalosti jsou rozhodující vrstvou.** Studie [[ai-education|AI ve vzdělávání]] na [[k-12|středních školách]] napříč úrovněmi ([[pedagogy-first-technology-second-teacher-knowledge-2026|46 učitelů, 2 832 studentů]]) zjistila, že technické znalosti AI samy o sobě nestačí a mohou dokonce mírně snížit vnímání AI studenty ve prospěch společnosti, zatímco pedagogické znalosti AI řídily vnímání studentů a jejich záměr učit se AI. Rámce kompetencí by proto měly pedagogické znalosti AI vážit jako stěžejní dimenzi, nikoli jako měkký doplněk.
- **Pedagogická integrace:** mapování používání AI na cíle učení, navrhování [[scaffolding|scaffoldu]], který podporuje [[metacognition|metakognici]] a sebe[[regulation|regulaci]] studentů, a integrace AI do [[learning-design|návrhu výuky]]. [[ai-tpack-teacher-multi-agent-workflow|Výzkum AI-TPACK]] modeluje, jak učitelé kombinují technologické, pedagogické a obsahové znalosti prostřednictvím pracovních postupů s více [[agentic-ai|agenty]], zatímco [[teacher-ai-teaming-five-levels|pětistupňový rámec týmové spolupráce učitele a AI]] (od transakční k synergické) zachycuje, jak [[generative-ai|GenAI]] může nahradit, doplnit nebo rozšířit kompetenci učitele.
- **Gramotnost v hodnocení:** vyhodnocování obsahu generovaného AI a výstupů AI studentů a porozumění tomu, jak se [[assessment-validity|validita]] posouvá, když studenti AI používají. To souvisí s [[automated-assessment|automatizovaným hodnocením]], [[ai-detection|detekcí AI]] a širší agendou přepracování [[assessment|hodnocení]]. U doporučovacích systémů to sahá k posuzování, zda jsou vysvětlení AI skutečně srozumitelná a pedagogicky smysluplná: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] zjistili, že učitelé důvěřovali doporučením AI pro seskupování více tehdy, když byla vysvětlení formulována jazykem domény (kurikula), než když odhalovala surové příznaky modelu, což je dovednost vyžadovat a posuzovat [[explainable-ai|kvalitu vysvětlení]], místo aby přijímali neprůhledný výstup.
- **Volba modelu a návrh promptu jako prokazatelné dovednosti:** instrumentální [[ai-literacy|gramotnost v oblasti AI]] zahrnuje vědět, který model použít a jak formulovat úlohu. [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] nechali ChatGPT-4, Claude 3 a Gemini Advanced kritizovat cíle plánování výuky 153 budoucích učitelů pod čtyřmi systematicky obměňovanými prompty (N = 240 zpětných vazeb ve studii 1, 345 ve studii 2), přičemž [[feedback|zpětná vazba]] byla hodnocena v devíti kategoriích kvality. Samotná volba modelu vysvětlila 26,9 % rozptylu v hodnocené kvalitě (18,4 % ve studii 2) a návrh promptu přidal významných 15,9 % (5,7 %) navrch; jediným rozhodujícím rysem promptu byl odborný jazyk specifický pro doménu, jehož odstranění významně snížilo kvalitu (β = -0,412), zatímco přidání příkladů a vypuštění instrukce chain-of-thought ve studii 1 nezpůsobilo významný rozdíl. Jejich čtení, že odborná terminologie jednak odemyká relevantní obsah trénovacích dat a jednak rámuje požadavek profesionálně, podobně jako hraní rolí, spolu s pravidlem používat nejschopnější dostupný špičkový model, činí z volby modelu didaktické, nikoli technické rozhodnutí.
- **Etické a kritické používání:** rozpoznávání [[bias-mitigation|zaujatosti]] ve výstupech AI, ochrana dat studentů ([[privacy|soukromí]]) a zajišťování spravedlivých výsledků ([[equity-in-ai-education|rovnost]]). [[llm-cultural-relevance-k12|Kulturně relevantní používání AI]] zkoumá, jak mohou učitelé používat LLM k diverzifikaci materiálů, místo aby posilovali dominantní normy.
- **Etická odpovědnost je distribuovaná, nikoli individuální.** V sedmi národních případech jsou učitelé postaveni do role morálních strážců používání AI, aniž by měli institucionální a epistemickou podporu, takže etická gramotnost v oblasti AI se musí rozšířit ke kritické a politické agenturnosti, nikoli k technické dovednosti ([[raffaghelli-situated-ai-ethics-2026|Raffaghelli et al. (2026)]]).
- **Jistota a postoje:** [[self-efficacy|sebeúčinnost]] učitelů utváří přijetí. [[teacher-ai-adoption-confidence|Výzkum přijetí]] zjišťuje, že jistota, podpora a vnímaná užitečnost určují, zda učitelé AI skutečně používají, a [[ai-pedagogical-orientation|orientace akademických pracovníků]] utvářejí přijetí ve výzkumu i výuce.

- V pětizemním průzkumu mezi 1 405 učiteli K-12 připravenost na AI předpovídala pozitivní přesvědčení o výukové hodnotě GenAI (B = 0,59, R² = 0,50), avšak předpovídala *větší* obavy o [[creativity|kreativitu]] (B = 0,18), a stejné prediktory vysvětlily u obav jen 7 % a 6 %: budování připravenosti samo nechává obavy nedotčené ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).
Připravenost by měla být řazena a odpovídajícím způsobem měřena: model Capability-Decision staví prokázanou schopnost v oblasti AI před postoje a jistotu a navrhuje ukazatele výkonu, nikoli pouze sebevýpověď: úlohy návrhu výuky, úlohy vyhodnocení promptů se zasetými chybami, posouzení obsahové validity a rubriky výukových artefaktů ([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

**Emocionální a morální připravenost je samostatná dimenze.** [[vassallo-ai-guilt-complex-faculty-2026|Vassallo (2026)]] dotazoval akademické pracovníky maltské [[higher-ed|univerzity]] (109 respondentů) a sestavil Index viny z AI (α = 0,88) ze čtyř položek morálních emocí, přičemž zjistil, že *anticipační* vina převažovala nad lítostí prožívanou po použití: nejsilnější souhlas vyjádřila obava, že používání AI podkopává vlastní kredibilitu (34,9 % souhlasilo), následovaná pocitem, že při používání [[academic-integrity|podvádí]] (25,7 %), zatímco lítost po použití získala jen 9,2 %. Pro rámce kompetencí jsou důležitá zjištění, že nepoužívající uváděli *vyšší* vinu než uživatelé (M = 3,25 vs. M = 2,32) a že vina klesala s rostoucí kariérní jistotou: akademičtí pracovníci na začátku kariéry uváděli nejvíce (M = 2,71) a nejvyšší nejméně (M = 2,03). Emocionální připravenost tedy není zachycena měřítky dovednosti ani jistoty a práce argumentuje, že rámce kompetencí mají vinu a obavy o identitu pojímat jako běžné přechodové reakce, nikoli jako chyby k opravě.

Silnější verze tohoto přerámování tvrdí, že GenAI je prahový koncept, nikoli mezera v dovednostech: autoetnografická zpráva argumentuje, že [[anxiety-and-stress|úzkost]] a odpor akademických pracovníků jsou konstitutivní součástí překročení prahu, takže školení založené na dovednostech selhává a zásadové nepřijetí je třeba respektovat, nikoli napravovat ([[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]]).

## Mezera v kompetenci

Klíčovým zjištěním je **mezera mezi [[self-report-measures|sebevýpovědí]] a kompetencí založenou na výkonu**. [[ai-literacy-assessment-misalignment|Výzkum hodnocení gramotnosti v oblasti AI]] dokumentuje podstatný rozpor (až kolem 40 %) mezi tím, co učitelé *věří*, že dokážou, a tím, co skutečně *dokážou předvést*: učitelé s jistotou ve dovednostech AI často postrádají základní schopnosti promptování a vyhodnocování. To motivuje **[[assessment|hodnocení kompetence učitelů založené na výkonu]]** místo spoléhání na sebevýpověď a souvisí s [[self-assessment|kalibrovaným sebehodnocením]]. Národní průzkum mezi 2 586 nigerijskými učiteli středních škol měřil obě strany oddělenými nástroji: střední povědomí o AI (M = 3,13 z 8) proti nižší pedagogické dovednosti v oblasti AI (M = 2,47 z 5), přičemž učitelé na začátku a uprostřed kariéry uváděli vyšší dovednost než zkušenější kolegové ([[nigerian-teachers-ai-awareness-pedagogical-skills-2026|Olurinola et al., 2026]]).

**Připravenost je v literatuře o matematice nejčastěji dokumentovanou překážkou.** Přehled 54 studií o vzdělávání v matematice zjistil, že technologicko-pedagogická integrace a připravenost učitelů jsou nejčastěji uváděnou výzvou (38 z 54), před validitou a integritou hodnocení (26) a nadměrným spoléháním (24) ([[manto-ai-integration-mathematics-education-systematic-review-2026|Manto et al. (2026)]]).

Mezera není jen mezi vnímanou a skutečnou dovedností, ale i v *šíři* toho, co učitelé vědí: národní průzkum mezi 2 018 ukrajinskými pedagogy středních škol zjistil, že 84 % uvedlo používání AI v profesní praxi, avšak jen 11 % dokázalo jmenovat specializovanou službu AI kromě ChatGPT ([[ukraine-ai-literacy-secondary-framework-2026|Marienko, Markova a Semerikov (2026)]]). Druhá úzkost se projevuje v tom, co učitelé sami nabízejí, nikoli v tom, co dokážou pojmenovat: 53 učitelů v praxi označujících své vlastní výukové případy podle rámce gramotnosti v oblasti AI OECD popsalo 43 praktik gramotných v AI proti pouze 10 selháním ([[ailithub-ai-literacy-case-infrastructure-2026|Wang et al., 2026]]). Jejich volby kompetencí se shlukovaly kolem praktického úsudku (vyhodnocování výstupů AI, N = 38) a jen zřídka dosáhly společenské zaujatosti (N = 5), etického sladění (N = 6) nebo spotřeby energie AI (N = 9).

Průzkum mezi 132 učiteli v Indonésii zjistil téměř univerzální přijetí vedle slabého mechanistického porozumění: 96,2 % schvalovalo používání AI učiteli, avšak jen 4,6 % jmenovalo tokenizaci nebo dekódování a 21,5 % věřilo, že ChatGPT prohledává databázi nebo internet ([[ai-misconceptions-indonesian-k12-teachers-2026|Aji et al. (2026)]]). Příznivý postoj není důkazem funkčního mentálního modelu nástroje.

Mezera je viditelná v artefaktu stejně jako v sebevýpovědi. [[ai-integration-instructional-design-collaboratory-2026|Mezinstitucionální kolaboratoř akademických pracovníků v přípravě učitelů]], v níž vzdělavatelé učitelů navrhovali AI do svých vlastních metodických kurzů, uvedla, že studenti dokázali vytvořit vyhotovené plány výuky s pomocí AI, aniž by uměli vysvětlit, proč plán odpovídá studujícím a standardům, protože plán sám o uvažování za ním nic neříká. Známkovat zdůvodnění, nikoli produkt, je jedna odpověď. [[bondurant-shaughnessy-ai-pedagogies-practice-2026|Rámec pedagogik praxe]] naznačuje jinou, když pojímá nácvik jako aproximaci praxe: nácvik zprostředkovaný AI se strukturovanou zpětnou vazbou po nácviku zvýšil používání zjišťovacích a objevných otázek studenty, avšak jejich vlastní úsudky o vlastním výkonu se stále rozcházely s tím, co zaznamenali pozorovatelé.

**Klesající sebehodnocení po školení může signalizovat učení, nikoli ztrátu.** V šest měsíců trvajícím programu [[educational-development|profesního rozvoje]] v [[tpack|Intelligent-TPACK]] se 64 učiteli hongkongských univerzit proti 61 kontrolám vzrostla celková kompetence v oblasti AI zhruba o půl směrodatné odchylky (Cohenovo d = -0,521), avšak někteří učitelé v obou skupinách dosáhli v posttestu nižšího skóre než v pretestu ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng a Ling, 2025]]). Rozhovory přičítaly poklesy posunu od nevědomé k vědomé nekompetentnosti, tedy rekalibraci, kterou předpovídá Dunning-Krugerův efekt, nikoli ztrátě dovednosti. Autoři uzavírají, že sebevýpověď před a po intervenci podhodnocuje, protože část zisku přichází jako korekce nástroje směrem dolů.

**Mezera se projevuje i jako neúčast.** [[watson-rainie-ai-challenge-faculty-survey-2026|Watson a Rainie (2026)]] dotazovali 1 057 amerických vysokoškolských pedagogů na konci roku 2025 a zjistili, že 26 % nástroje [[generative-ai|generativní AI]] vůbec nepoužívá, přičemž třetina se rozhodla je nepoužívat pro výuku a nepoužívání se soustředí v umění a [[humanities-education|humanitních oborech]] (40 %). Institucionální strana mezery byla větší než individuální: 68 % uvedlo, že jejich školy pedagogický sbor na používání generativní AI pro výuku a mentorování nepřipravily, a pedagogové jmenovali odpor kolegů (82 %) a jejich neznalost (83 %) jako hlavní překážky přijetí na katedře, což je obraz, v němž se budování kapacity, normy vrstevníků a politika musí hýbat společně.

**Prezenční příprava se etické dimenzi kompetence z velké části vyhýbá.** [[meta-analysis-systematic-review|Systematický přehled]] AI v počátečním vzdělávání učitelů pro budoucí učitele matematiky na prvním stupni ([[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto et al. 2026]], 11 studií vybraných z 341 záznamů) zjistil, že intervence se soustředily na krátkodobé technické a pedagogické přírůstky, přičemž devět z jedenácti byly krátké intervence o jedné až šesti sezeních, a uvedl, že etika byla řešena jen ve třech z jedenácti studií. Rámce kompetencí jmenují etický úsudek jako dimenzi; prezenční literatura, která jej má budovat, jej zřídka učí nebo měří.

- **Sedm shluků kompetencí, s etikou jako nejslabším článkem.** Tematická syntéza 78 studií vytváří shluky pro prompt engineering, kritické vyhodnocování výstupů AI, etické povědomí a detekci zaujatosti, sladění s pedagogickým obsahem, konceptuální gramotnost v oblasti AI, lidský dohled a reflexi. Prompt engineering byl nejkonzistentněji dokumentovaný a chová se jako **vývojové spektrum**, nikoli jediná dovednost, což recenzenty vedlo k argumentu, že je nejlépe chápat jako pedagogické uvažování vedené novým médiem: prompt jako externalizované rozhodnutí o návrhu. Etické povědomí bylo **nejslaběji dokumentovanou kompetencí** v prezenčních studiích ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou a Kameas, 2026]]).
- **Učitelé přeceňují svou vlastní dovednost vyhodnocování.** Vedle zjištění, že pouze **38,3 % cílů učení generovaných AI splnilo všechna kritéria kvality bez revize**, budoucí učitelé **systematicky přeceňují svou schopnost vyhodnocovat výstup chatbota**, což recenzenti čtou jako možný percepční, nikoli deklarativní deficit. Proto argumentují, že kompetence má být hodnocena prostřednictvím výkonových artefaktů (plánů výuky, záznamů rozhodnutí, mikrovýuky), nikoli sebevýpovědi: nespolehlivost sebehodnocení je prokázána právě v literatuře, kterou má školení řešit.
## Profesní rozvoj, který funguje

Literatura o profesním rozvoji v znalostní bázi identifikuje účinné přístupy:

- **Intenzivní programy zakotvené v teorii:** [[genai-pd-ai-pck-learning-gain-2026|Intenzivní program profesního rozvoje v GenAI]] se 163 učiteli a budoucími učiteli přinesl významné přírůstky ve všech složkách AI-PCK, přičemž nejvíce těžili budoucí učitelé. [[teacher-education-ai-literacy-sdt-2026|Profesní rozvoj založený na teorii sebeurčení]] ukazuje, že školení podporující potřeby zlepšuje gramotnost učitelů v oblasti AI, postoje a [[student-engagement|zapojení]] a zároveň snižuje úzkost.
- **[[design-based-research|Designové]] a integrované přístupy:** [[genai-literacy-training-teacher-education-dbr-2026|Školení gramotnosti v GenAI založené na DBR]] řeší přehnaný důraz na technické znalosti a nástroje z doby před GenAI; [[rail-ed-genai-literacy-teacher-education|integrativní, vývojové rámce]] a [[sec-ai-literacy-narrative-review-2026|integrace sociálně-emocionálních kompetencí]] rozšiřují gramotnost za pouhou techniku.
- **Zkoumání a autentická praxe:** [[quest-ai-inquiry-preservice-teachers|Modely zkoumání podporované AI]] budují gramotnost v oblasti AI a autentický výkon u budoucích učitelů.
- **Připravenost specifická pro kontext:** [[sangwa-epiq-ai-faculty-readiness-2026|Rámec připravenosti EPIQ-AI]] zdůrazňuje, že připravenost pedagogického sboru je sociotechnická záležitost vyžadující sladění kapacity sboru, [[governance|řízení]] a zajišťování kvality.
- **Podpora musí být diferencovaná podle zkušeností a zdatnosti v AI.** [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] zjistili, že to, jak učitelé při návrhu výuky skutečně interagují s AI, závisí na *souhře* učitelské zkušenosti a zdatnosti v AI, nikoli na jedné z nich samotné. Zkušení učitelé s vysokou zdatností v AI kriticky přizpůsobují výstup AI kontextu (opakované promptování, rozvedení), zatímco nováčci, i technicky zdatní, mají sklon přijímat odpovědi AI přímo a studenty a kontext zvažují jen zřídka. To mluví pro profesní rozvoj založený na profilaci: kontrolní seznamy pro vyhodnocování odpovědí a šablony promptů pro nováčky a praktické budování dovedností pro zkušené učitele s nižší zdatností v AI.
- **Časový přínos sám sleduje zkušenost a jistotu, nikoli jen návrh podpory.** V pokusu [[roy-aila-lesson-planning-teacher-choices-2026|Roy et al. (2026)]] s asistentem pro plánování výuky založeným na AI bylo snížení pracovní zátěže větší u učitelů s nižší jistotou v obsahových znalostech, nižšími pedagogickými znalostmi, kratší dobou v profesi nebo vyšší jistotou v technologiích. Zdatnost a jistota jsou tedy součástí účinku intervence, nejen jejího přijetí.

Konfigurace přesvědčení je druhou osou profilace: mezi 40 680 učiteli v TALIS 2024 skrýval stejný status nepoužívání opačné překážky, jelikož 83,3 % profilu „lhostejní" uvádělo pedagogické výhrady, zatímco 66,2 % profilu „odměřeného souhlasu" uvádělo nedostatečné znalosti a dovednosti ([[teachers-ai-belief-profiles-talis-2024-2026|Fang a Jin (2026)]]). Profesní učení související s AI sledovalo členství v profilu konzistentněji než věk nebo dosažené vzdělání.

- **Učitelé nesdílejí jediné pojetí AI.** Fenomenografická studie 16 dánských vysokoškolských učitelů našla tři pojetí výuky s AI a tři pojetí učení s AI, takže jediný model workshopu zasáhne jen část jakékoli skupiny pedagogů ([[stenalt-good-education-teacher-ai-conceptions-2026|Stenalt (2026)]]).
- **Kodesign a pedagogická gramotnost v promptování jsou kompetence, nikoli doplňky.** [[meta-analysis-systematic-review|Systematický přehled]] kodesignu výukových úloh učitelem a AI ([[wang-teacher-ai-co-design-review-2026|Wang, Liu a Islam 2026]], 28 studií) zjišťuje, že dominantním režimem spolupráce je AI jako asistent a generátor obsahu, a lokalizuje mezeru v plnějších schopnostech učitelů spolunavrhovat a vést dialogické partnerství. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] ukazuje, že profesní rozvoj, který páruje technické školení v AI s pedagogickým uvažováním (budováním „pedagogické gramotnosti v promptování", tedy kódováním [[tpack|PCK]] do promptů), je tím, co umožňuje učitelům proměnit výstup AI v účinné [[collaborative-learning|diferencované skupinové aktivity]].
- **Struktury, které budují kompetenci, nikoli seznamy kompetencí.** [[physics-faculty-learning-community-ai-2026|Perl-Nussbaum a Finkelstein (2026)]] vedli šestisetkání, dvoutýdenní komunitu učení akademických pracovníků na velké veřejné fyzikální katedře R1 (devatenáct pedagogů v průběhu série, zhruba deset na každém setkání), kde každé setkání začínalo u místních dat, přešlo k testování AI v malých skupinách proti skutečným anonymizovaným domácím úlohám studentů a končilo společnou diskusí, a přineslo pětipoložkové sdílené úložiště, nikoli školicí balík. Gramotnost v hodnocení lze budovat stejně prostřednictvím návrhového nástroje: v pilotu [[authentic-assessments-generative-ai-pilot-2026|Paula et al. (2026)]] osm zkušených koordinátorů kurzů STEM a zdravotnictví rozvíjelo svou gramotnost v hodnocení tím, že kritizovali návrhy hodnocení od vlastního GPT proti oborovým standardům, i když výstupy opakovaně míjely oborový kontext, ignorovaly posloupnost témat a v jednom případě nesly zfalšované odkazy i přes opakované promptování. Všech osm si ponechalo [[evaluative-judgment|akademický úsudek]] u sebe a odmítlo automatizaci od začátku do konce, což činí strukturovanou kritiku generovaných návrhů mechanismem rozvoje, nikoli školením nástroje.
- **Krátká sezení mohou pohnout přijetím, aniž by pohnula adopcí.** [[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller a Böhme (2026)]] hodnotili tříhodinové sezení INSIGHT se 100 německými učiteli a zjistili, že vnímaná užitečnost i [[technology-acceptance-model|vnímaná snadnost použití]] významně vzrostly (užitečnost t(99) = -3,24, p = 0,002, d = 0,32; snadnost použití d = 0,25), zatímco behaviorální záměr používat technologie založené na AI pro diferenciaci se nezměnil. Autoři poznamenávají, že jejich výchozí hodnoty už byly příznivé, takže stropní efekt je možný. Čtení pro návrh profesního rozvoje je úzké, ale užitečné: krátké sezení může posunout, jak učitelé nástroje AI posuzují, aniž by posunulo, zda je plánují používat, což je změna, která potřebuje pokračování, nikoli jednorázovou akci.

- **Vyučující preferují plynulost, ale učení připisují scaffoldu.** Mezi 41 vyučujícími byl celkově preferován základní model GPT-4o (21 proti 13), avšak jemně doladěnému tříkrokovému modelu (identifikovat, prozkoumat, rozvinout) bylo častěji přičítáno učení (18 proti 13), a oba úsudky se shodly jen v 39 % případů ([[teachingcoach-chatbot-instructor-guidance|Molnar et al. (2026)]]).
- **Institucionální podpora:** [[educational-development|profesní rozvoj]] musí být spárován s institucionální infrastrukturou ([[educational-policy-ai|politika]], [[institutional-change-framework-ai|institucionální změna]]), aby adopce byla udržitelná.
- **Autorské nástroje nezaručují pedagogickou věrnost.** [[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]] studovali 27 učitelů druhého stupně, kteří konfigurovali vzdělávací [[conversational-ai|chatboty]] v dílnách profesního rozvoje, a analyzovali ohniskové skupiny vedle konfiguračních a interakčních záznamů. Učitelé pojímali chatbota jako výukový scaffolding ohraničený pravidly definovanými učitelem, avšak shoda mezi záměrem a chováním podle záznamů byla silnější u vstřícnosti (88,9 %) a persony (81,5 %) než u pravidel (70,4 %) a účelu (59,3 %). Konfigurovatelné ovládací prvky samy nepřenášejí pedagogický záměr do chování, takže vyjádřit, otestovat a zpřesnit pedagogiku chatbota je samo kompetencí, kterou musí autorské nástroje podporovat.

Designový protipříklad pojímá kompetenci jako situační, nikoli jako příčku na žebříku. [[adaptive-ai-model-teacher-educators-2025|Eyalova designová studie z roku 2025 s 22 vysokoškolskými vzdělavateli učitelů]] nechala účastníky prozkoumat pět publikovaných rámců hodnocení a spolunavrhnout alternativu organizovanou kolem tří vzájemně propojených os: vhodnost pro kontext (infrastruktura, sociokulturní faktory, místní potřeby, vývojová fáze), profesní potřeby (obor, pedagogika, vedení, podpora) a dynamický rozvoj. Model odmítá pevné úrovně kompetence a umožňuje nelineární postup a dodává se s dvacetipoložkovým reflektivním sebehodnoticím dotazníkem hodnoceným 1 až 5. Jeho validace je pouze [[qualitative-research|kvalitativní]], bez [[quantitative-research|kvantitativního]] testování reliability, takže stojí jako designový přínos, nikoli jako validovaný nástroj.
- **Metaanalytický odhad.** [[teacher-ai-literacy-professional-development-meta-2026|Guo et al. (2026)]] sloučili 212 velikostí účinku z 34 studií a odhadují profesní rozvoj gramotnosti učitelů v oblasti AI na g = 0,76 (95% CI [0,50; 1,02]), nejsilnější u dovedností (g = 0,91) a nejslabší u postojů a hodnot (g = 0,61); korekce na zjevnou publikační selektivitu odhad snižuje na zhruba g = 0,49.

- **Účast předpovídá přírůstky tam, kde pocit účasti nikoli.** Ve stejném šest měsíců trvajícím programu míra účasti předpovídala přírůstek kompetence (β = 0,407, p = 0,001), zatímco sebevnímaná účast nikoli (β = 0,049, p = 0,692), a obor, délka praxe ani profesní titul vysvětlily jen málo; autoři čtou účast jako behaviorální investici a vnímanou účast jako povrchní zapojení ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng a Ling, 2025]]).

- **Hodnoty zaostávají za dovednostmi i v programu specifickém pro doménu.** V ročním hongkongském programu s 30 učiteli angličtiny vzrostly znalosti strategií [[multimodal|multimodálního]] hodnocení z 3,13 na 4,15 z 5 (parciální η² = 0,571) a kompetence v podpoře studentů z 3,05 na 3,98 (0,482), obojí významně, zatímco každá subdoména hodnot zůstala statisticky plochá při alfa korigované Bonferronim na 0,006. Učitelé přičítali přírůstky společnému plánování ve škole a meziškolním setkáním klastrů, nikoli samotným dílnám ([[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang et al., 2026]]).

- **Mikroučení může rozvíjet kompetenci vysokoškolských učitelů v oblasti AI.** [[microlearning-ai-modules-vocational-teacher-education-2026|Cechovsky (2026)]] zpřesnil dva moduly [[vocational-education|odborného vzdělávání]] ve dvou online skupinových diskusích do pěti návrhových principů (jasná struktura a orientace, vedení a navigační podpora, segmentace a modularizace, multimodální prezentace a aktivizace studujících) a zjistil, že hlavními praktickými překážkami byly navigace v platformě a hledání modulů.
## Kompetence pedagogů v oblasti AI a proměňující se role učitele

Jak AI přebírá rutinní výukové a hodnoticí úkoly, osobitý přínos učitele se přesouvá k orchestraci, úsudku a vztahu: rozhodovat, kdy a jak se AI používá, poskytovat scaffolding [[agency|agenturnosti studentů]] a kritickému používání, zajišťovat rovnost a poskytovat sociální a emocionální podporu, kterou AI nedokáže. To přerámovává kompetenci učitele kolem [[human-in-the-loop-ai|dohledu s člověkem v kruhu]], [[ethics|etického úsudku]] a [[self-regulated-learning|podpory seberegulovaného učení]] a souvisí s [[teacher-role|rolí učitele]] a s [[cognitive-offloading|ochranou před nadměrným spoléháním]].

## Důsledky pro AI ve vzdělávání

- **Hodnoťte výkon, nejen sebevýpověď:** kompetence učitelů má být vyhodnocována předvedením, vzhledem k dokumentované mezeře v sebevýpovědi.
- **Školte celou kompetenci, nejen nástroje:** profesní rozvoj má budovat technické, pedagogické, hodnoticí a etické dimenze společně, zakotvené v [[learning-theories|teorii učení]].
- **Budujte jistotu vedle dovednosti:** postoje a [[self-efficacy|sebeúčinnost]] utvářejí přijetí, takže profesní rozvoj má snižovat úzkost a budovat jistotu prostřednictvím autentické, podporované praxe.
- **Podporujte institucionální vrstvu:** udržitelná kompetence učitelů vyžaduje sladěnou politiku, řízení a kapacitu, nikoli izolované školení.

- **Digitální kompetence učitelů pro [[curriculum-design|návrh kurikula]] s GenAI.** [[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámez (2026)]] validují diagnostický nástroj založený na TAM se 434 učiteli v praxi; behaviorální záměr byl hlavním prediktorem digitální kompetence pro používání GenAI při plánování kurikula, se sebeúčinností jako kořenovým hybatelem.
### Psychometrický nástroj pro kompetenci pedagogů v oblasti AI

- Psychometrická studie vyvinula škálu gramotnosti učitelů v oblasti AI (TAILS) k měření gramotnosti v oblasti AI specificky v [[teacher-education|vzdělávání učitelů jazyků]] a operacionalizovala šest dimenzí rámce ED-AI. Vývoj nástroje zaplňuje mezeru v hodnoceních zaměřených na studenty nebo běžné uživatele a podporuje měření kompetence pedagogů v oblasti AI.

Krajina nástrojů byla od té doby přezkoumána. [[assessing-teachers-ai-literacy-measurement-tools-2026|Systematický přehled nástrojů pro měření gramotnosti učitelů v oblasti AI Zainala, Mohd Matore a Maata z roku 2026]] posoudil 33 nástrojů publikovaných mezi lety 2019 a 2025 a zjistil, že obor je metodologicky monotónní: 31 (93,9 %) jsou sebehodnoticí škály vnímané jistoty, pouze dva (6,1 %) testují znalosti objektivně a žádný nepoužívá úlohy založené na výkonu. Vnitřní konzistence byla nejsilnější doménou kvality (28 z 33 na stupni A) a férovost nejslabší, přičemž pět nástrojů (15,2 %) uvádělo důkazy o invarianci měření nebo diferenciálním fungování položek. Obsah také zaostává za technologií, protože 29 nástrojů (87,9 %) cílí na obecné koncepty AI a pouze čtyři (12,1 %), všechny z roku 2025, se zabývají generativní AI.

## Časté mylné představy

- **„Školení v promptování zlepšuje materiály učitelů."** **Školení v promptování kupuje čas, nikoli lepší materiály**: v **předregistrované RCT se 204 učiteli** zjistili Appel, Fervers a Piepenburg (2026), že ChatGPT zlepšil **strávený čas**, zatímco kvalita materiálů tomu nenásledovala. Zisk v efektivitě je skutečný a není to zisk v kvalitě.
- **„Když učitelé konfigurují chatbota, selháním je faktická chyba."** **Když učitelé konfigurují chatbota v přirozeném jazyce, dominantním selháním je ztracený záměr, nikoli nesprávná fakta**: boti **přeskakují** krok, který učitel zamýšlel. Dodržování instrukcí selhává strukturálně, nikoli fakticky.
- **„Technická dovednost je rozhodující vrstvou."** **Rozhodující vrstvou jsou pedagogické znalosti**: studie [[ai-education|AI ve vzdělávání]] na středních školách napříč úrovněmi [[pedagogy-first-technology-second-teacher-knowledge-2026|Shen et al., 2026]]. Kompetence, která určuje výsledek, je ta, do níž většina školicích programů investuje nejméně.
## Související koncepty

- [[ai-literacy]]
- [[educational-development]]
- [[teacher-role]]
- [[prompt-engineering]]
- [[learning-design]]
- [[scaffolding]]
- [[metacognition]]
- [[assessment-validity]]
- [[equity-in-ai-education]]
- [[ethics]]
- [[self-efficacy]]
- [[human-in-the-loop-ai]]
- [[agency]]
- [[cognitive-offloading]]
- [[educational-policy-ai]]
- [[ai-education]]
- [[tpack]]
- [[teacher-education]]
- [[pedagogy]] — zastřešující pojem: pedagogiky a strategie výuky v AI ve vzdělávání

## Související články

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Kteří učitelé získali čas na plánování: nižší jistota v obsahových znalostech, nižší pedagogické znalosti, kratší praxe nebo vysoká jistota v technologiích
- [[ai-misconceptions-indonesian-k12-teachers-2026]] — Učitelé AI přijímají, a přitom nerozumějí tomu, jak funguje (Aji et al. 2026)
- [[manto-ai-integration-mathematics-education-systematic-review-2026]] — Připravenost učitelů a technologicko-pedagogická integrace jako nejčastěji uváděná výzva v 54 studiích matematického vzdělávání (Manto et al. 2026)
- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — Gramotnost v multimodálním hodnocení: roční program, v němž se znalosti a kompetence posunuly a hodnoty nikoli
- [[teacher-ai-literacy-professional-development-meta-2026]]
- [[intelligent-tpack-pd-intervention-hongkong-2025]] — Profesní rozvoj v Intelligent-TPACK: půl směrodatné odchylky zisku a negativní zisky, které se čtou jako rekalibrace. The impact of professional development programs on K-12 teachers' AI literacy: A systematic review and meta-analysis

- [[ailithub-ai-literacy-case-infrastructure-2026]] — Učitelé označili své vlastní výukové případy AI a snadno dosáhli praktických kompetencí, zatímco společenských a etických jen zřídka (Wang et al. 2026)
- [[typology-generative-ai-tools-education-2026]] — Volba nástroje jako projev agenturnosti vzdělavatele
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] — Systematický přehled generativní AI ve výuce a učení K-12 (Marzano 2026)
- [[pedagogy-first-technology-second-teacher-knowledge-2026]] — Profesní znalosti učitelů v AI vzdělávání K-12: TAIK versus TPAIK a učení studentů (Shen et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Vzorce interakce učitele a AI při návrhu výuky napříč zkušeností a zdatností v AI (Choi et al. 2026)
- [[preservice-teachers-responsible-genai-2026]] — Odpovědné používání GenAI budoucími učiteli: důsledky pro kurikulum (Kohnke et al. 2026)
- [[melo-llm-classroom-observation-teach-2026]] — Pozorování výuky pomocí LLM pro profesní rozvoj učitelů (Melo et al. 2026)
- [[bondurant-shaughnessy-ai-pedagogies-practice-2026]] — Generativní AI napříč reprezentacemi, dekompozicemi a aproximacemi: nácvik, strukturovaná zpětná vazba a varování ohledně přesnosti
- [[genai-pd-ai-pck-learning-gain-2026]] — Účinnost intenzivního programu profesního rozvoje v GenAI
- [[ai-tpack-teacher-multi-agent-workflow]] — Modelování AI-TPACK prostřednictvím pracovních postupů učitele s více agenty
- [[teacher-ai-teaming-five-levels]] — K synergickým interakcím učitele a AI
- [[teacher-education-ai-literacy-sdt-2026]] — Vzdělávání učitelů pro gramotnost v oblasti AI prostřednictvím teorie sebeurčení
- [[genai-literacy-training-teacher-education-dbr-2026]] — Školení gramotnosti v GenAI založené na designovém výzkumu
- [[rail-ed-genai-literacy-teacher-education]] — Nové pojetí gramotnosti v GenAI ve vzdělávání učitelů
- [[sec-ai-literacy-narrative-review-2026]] — Integrace sociálně-emocionálních kompetencí s gramotností v oblasti AI
- [[teacher-ai-adoption-confidence]] — Přijetí AI učiteli: jistota a podpora
- [[ai-pedagogical-orientation]] — Orientace akademických pracovníků utvářejí přijetí AI
- [[ai-literacy-assessment-misalignment]] — Nesoulad mezi sebevýpovědí a kompetencí v oblasti AI založenou na výkonu
- [[quest-ai-inquiry-preservice-teachers]] — Zkoumání podporované AI pro budoucí učitele
- [[sangwa-epiq-ai-faculty-readiness-2026]] — Rámec připravenosti akademických pracovníků EPIQ-AI
- [[llm-cultural-relevance-k12]] — LLM pro kulturně relevantní pedagogiku K-12
- [[institutional-change-framework-ai]] — Rámec institucionální změny pro AI
- [[teachingcoach-chatbot-instructor-guidance]] — Chatbot TeachingCoach pro vedení vyučujících
- [[laidlaw-genai-identity-crisis-faculty-2026]] — GenAI jako krize identity, nikoli mezera v dovednostech
- [[raffaghelli-situated-ai-ethics-2026]]
- [[guillen-curriculum-genai-teacher-competence-2026]] — Hodnocení digitální kompetence učitelů pro návrh kurikula s GenAI (Guillén-Gámez 2026)
- [[stenalt-good-education-teacher-ai-conceptions-2026]] — fenomenografická studie pojetí AI u vysokoškolských učitelů
- [[ukraine-ai-literacy-secondary-framework-2026]] — Pětistupňový rámec gramotnosti v oblasti AI a profesní rozvoj pro ukrajinské pedagogy středních škol (Marienko et al. 2026)
- [[wang-teacher-ai-co-design-review-2026]] — Kodesign výukových úloh učitelem a AI: trendy a perspektivy (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Architektura rolí v diferencovaných skupinových aktivitách navržených AI (Talebzadeh 2026)
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Prompt engineering a volba modelu jako prediktory kvality zpětné vazby od AI (Jacobsen et al. 2026)
- [[vassallo-ai-guilt-complex-faculty-2026]] — Komplex viny z AI: anticipační vina a čtyři profily morální reakce u akademických pracovníků (Vassallo 2026)
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]] — Tříhodinové sezení profesního rozvoje zvýšilo vnímanou užitečnost a snadnost použití, ale nikoli deklarovaný záměr přijmout (Mesenhöller a Böhme 2026)
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — Systematický přehled AI v prezenčním vzdělávání učitelů matematiky na prvním stupni: etika řešena jen ve třech z jedenácti studií (Pinto et al. 2026)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — Průzkum AAC&U/Elon mezi 1 057 americkými pedagogy: připravenost, nepoužívání a mezera mezi individuální a institucionální politikou (Watson a Rainie 2026)
- [[ai-integration-instructional-design-collaboratory-2026]] — Mezinstitucionální kolaboratoř akademických pracovníků: integrace AI jako návrh výuky v přípravě učitelů
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Systematický přehled 33 nástrojů pro měření gramotnosti učitelů v oblasti AI: 31 sebevýpovědí, dva objektivní testy znalostí, žádné výkonové úlohy (Zainal, Mohd Matore a Maat 2026)
- [[adaptive-ai-model-teacher-educators-2025]] — Designový adaptivní model gramotnosti v oblasti AI a dvacetipoložkový reflektivní dotazník spolunavržený s 22 vzdělavateli učitelů (Eyal 2025)
- [[physics-faculty-learning-community-ai-2026]] — Série workshopů pro účinné používání AI v nejistých časech: budování komunity učení fyzikálních kateder
- [[authentic-assessments-generative-ai-pilot-2026]] — Navrhování autentických hodnocení s generativní AI: pilotní studie Assessment Authentifire ve vysokoškolském vzdělávání
- [[teachers-configure-educational-chatbots-2026]] — Bude učit tak, jak bylo zamýšleno? Jak učitelé konfigurují vzdělávací chatboty AI
- [[capability-decision-model-teacher-readiness-2026]] — Uspořádaný model připravenosti učitelů s prioritou schopnosti a ukazateli schopnosti založenými na výkonu
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Mezinárodní průzkum mezi 1 405 učiteli K-12: připravenost předpovídá pozitivní přesvědčení, ale ne obavy
- [[teachers-ai-belief-profiles-talis-2024-2026]] — Čtyři profily přesvědčení učitelů z TALIS 2024 spojují profesní učení a překážky používání AI specifické pro profil
- [[microlearning-ai-modules-vocational-teacher-education-2026]] — Navrhování mikroučebních modulů o AI pro vysokoškolské učitele v odborném vzdělávání učitelů: studie designového výzkumu
- [[eduwild-teacher-configured-chatbots-failures-2026]] — EduWild: Jak chatboty konfigurované učiteli selhávají v reálném používání a jak je opravit
