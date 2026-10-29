---
title: "Jak může AI pomoci s pedagogickým výzkumem?"
created: "2026-10-05T11:23:36-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
updated: "2026-10-29T11:57:27-04:00"
translation_of: faqs/how-can-ai-assist-with-educational-research
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Váš spoluautor chce do metodologické části odstavec o AI nástrojích, které tým použil. Nebo je hromada k třídění delší, než dovoluje termín. Nebo se recenzent zdvořile zeptal, jestli přepisy četl člověk, a vy si nejste jistí, co je poctivá odpověď.

Krátká odpověď na tu schůzku: AI může převzít vyhledávání, první kolo třídění, kódovací triáž a psaní návrhů, ale nemůže nést odpovědnost za to, k čemu projekt dojde. Rozhodněte, které úkoly jsou pro ni otevřené, dřív než projekt začne, ověřujte výstupy proti lidskému standardu s pojmenovaným člověkem, který rozhoduje spory, a logujte dost na to, aby outsider mohl zrekonstruovat, co se stalo. Většina týmů zjistí, že hodiny ověřování a logování jsou práce navíc, ne práce ušetřená.

## Stručně

**1.** Napište, které výzkumné úkoly smějí používat AI a které ne, dřív než proběhne první rešerše. Třiďte podle sázek, ne podle nástroje.

**2.** Automatizaci dejte na třídění. Extrakci dat, sladění a syntézu nechte lidem.

**3.** Zafixujte kódovací knihu a rubriku dřív, než se automatizovaný průchod dotkne dat.

**4.** Rozhodněte, co ověření znamená a kdo ho podepisuje. Shoda mezi modelem a kódovačem je míra podobnosti, ne výsledek o kvalitě.

**5.** Každou referenci ověřte ručně, autory první, kdykoli se AI dotkla textu.

**6.** Logujte prompty, verze modelů a verze korpusu a naplánujte na to hodiny.

## Rozhodněte, čeho se AI smí dotknout, dřív než projekt začne

Rozhodnutí o rozsahu patří do projektového souboru, ne do něčí paměti. Ve [[dai-chan-responsible-genai-research-ai-literacy-2026|fokusní studii Daie a Chana (2026)]] výzkumníci, kteří o tom přemýšleli, kalibrovali použití podle sázek a intelektuální centrality: víc u málo rizikové procedurální práce, opatrně tam, kde byl centrální vědecký přínos. Dvacet sedm z 28 postgraduálních výzkumníků v této studii použilo GenAI někde v pracovním postupu, včetně akademického psaní a překladu, takže pro většinu týmů je otázka, kde ta hranice leží, ne jestli nějaká existuje.

Napište tu hranici jako seznam s verdiktem u každého úkolu: rešerše literatury, třídění abstraktů, extrakce, kvalitativní kódování, statistická analýza, psaní, formátování referencí. Čtěte tu studii jako mapu toho, co výzkumníci uváděli, že dělají. Je to výpověď z fokusní skupiny, ne výsledek o účinnosti.

## Automatizujte třídění a syntézu nechte v týmu

Systematické review jsou místo, kde automatizace pokročila nejdál. Nástroje jako ASReview, SWIFT-Review, Covidence, AIScreenR a MetaMate snižují procedurální zátěž hlavně u třídění abstraktů, zatímco extrakce dat, sladění a syntéza zůstaly u lidských recenzentů v jediném týmu, který svůj postup popsal ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]).

Většina přínosu pochází ze dvou návrhových rozhodnutí. Napište pravidla rozhodování pro šedé zóny dřív, než třídění začne, a držte kategorii „možná“ se sdíleným logem rozhodování, aby se stejný úsudek použil na stejný typ záznamu. Bez toho loga se pravidlo druhého recenzenta a pravidlo prvního rozeznatelně rozcházejí a seznam vyloučených přestane být reprodukovatelný.

## Zafixujte kódovací knihu, než model cokoli přečte

[[qualitative-research|Kvalitativní analýza]] je fáze, kde je interpretace produktem. Konstrukty, kódovací rubriky a trénovací data jsou lidská rozhodnutí, ne výstupy modelu ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]), což znamená, že kódovací kniha musí být hotová dřív, než se přes korpus pustí automatizovaný průchod. Alternativou je kódovací schéma napsané kolem toho, co model náhodou vynesl, a témata pak popisují čtení vašich dat nástrojem.

Delegování může být jemnější než všechno, nebo nic. [[agreement-not-quality-llm-coding-verification|Jedna studie slepého ověřování]] klasifikovala 15 ze 72 položek kódovací knihy jako prokazatelně vyžadující lidskou expertizu, 12 jako vhodnější pro model a 16 jako vhodné pro třídění podle míry jistoty. Roztřiďte tak své vlastní položky a úspora práce přistane tam, kde je bezpečná.

## Rozhodněte, co ověření znamená a kdo ho podepisuje

Vysoká shoda mezi modelem a lidským kódovačem se vykazuje, jako by prokazovala správnost. Neprokazuje. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] nechali nezávislého experta slepě k původu posoudit 855 párových sad kódů. Shoda člověk-LLM (průměrný Jaccard 0,30) byla výrazně pod shodou člověk-člověk (0,52), přesto slepý ověřovatel preferoval lidské a strojové kódování v mírách, které nedokázal rozlišit (51,5 % proti 48,5 %, p = 0,537). V některých případech lidský konsenzus zakódoval sdílené zkreslení, které ověřovatel odmítl ve prospěch modelu.

Krok ověření tedy potřebuje zlatý standard, který není ani výstupem modelu, ani shodou kódovače s ním, a k tomu pojmenovaného člověka, který rozhodl spory. Vykazujte obojí. Statistika podobnosti popisuje, jak těsně dvě čtení sedí, a neříká nic o tom, jestli je některé z nich správné.

## Hledejte rychle, pak si každý zdroj zkontrolujte sami

Generativní vyhledávání shrnuje, doporučuje, syntetizuje a konverzuje, což rozvrací starší uspořádání, v němž systém lokalizuje a čtenář interpretuje ([[genai-academic-search-workshop]]). Berte ho jako nástroj objevování. Zpráva z workshopu nese dvě varování: schopnost je nerovnoměrná, vysoce citovaní badatelé jsou rekonstruováni zhruba dvakrát častěji než méně citovaní kolegové, a knihovník popsal mezeru v důvěře, v níž studenti generativnímu vyhledávání příliš důvěřovali, zatímco akademičtí pracovníci mu nedůvěřovali.

Ověřování referencí je místo, kde se to stává nepřekročitelným, a selhání se kupí v poli autorů, tedy v tom, které nese kredit. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] auditovali 723 930 publikací a 15 872 533 referencí a ověřili 30 zfalšovaných referencí ve 14 článcích o informatické výuce, všechny z let 2025 a 2026. Sedmnáct z těch 30 byly hybridy: skutečný název připojený k vymyšleným nebo nesprávným autorům. Ověřený počet na jednom technickém sympoziu stoupl z 3 v roce 2025 na 17 v roce 2026, v 2,3 % tehdejších sborníkových článků. Jejich součet je záměrně dolní hranicí a automatizované kontroly dědí chyby metadat, která berou jako ground truth. Kontrolujte nejdřív autory.

## S automatizovaným skóre zacházejte jako s hypotézou k testování

Automatizované měřicí funkce mohou vypadat přesně a prediktivně, a přitom zůstat neprůhledné. [[ai-methodologies-science-education-research-2026|Martin et al.]] to rámují Changovým problémem nomického měření: měření veličiny vyžaduje zákon, který ji vztahuje k něčemu pozorovatelnému, a ten zákon nelze testovat, aniž bychom tu veličinu už znali. Měřicí funkce odvozené z AI vycházejí z trénovacích dat a optimalizace, ne z výzkumníka, takže práce na vysvětlitelnosti má smysl pro to, aby se ukázalo, zda model sleduje sémantické porozumění, nebo jen klíčová slova.

Selhání je konkrétní. V [[zhang-platform-scores-miss-ai-teaching-agents-2026|hodnocení osmi AI výukových agentů]] se agent, který byl podle skóre samotné platformy třetí, umístil poslední podle experty validované rubriky. Nesouhlas člověka a stroje je systematický, ne náhodný, a operacionalizace rubriky často rozhoduje víc než řemeslo promptu ([[machines-misread-pedagogical-quality|Tseng et al., 2026]]). Než se automatizované skóre stane vaším nástrojem, validujte ho proti měřítku navázanému na schopnost, kterou hodláte zkoumat. K měřením samotným viz [[evaluating-ai-interventions-methods]].

## Napište metodologickou část tak, aby ji outsider mohl auditovat

Přijetí předběhlo vykazování. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta a Lin (2026)]] analyzovali 888 článků o automatizaci review: od roku 2023 uvedlo 38,0 % článků o softwaru a produktech žádné hodnocení, proti 9,3 % u článků o LLM, a přístup k modelům byl drtivě proprietární (84,1 %). Ani příznivé celkové posouzení neznamenalo vhodnost k delegování, protože 52 % ze 118 článků o LLM, které uváděly jen pozitiva, přesto uvedlo obavu, že postup nedosahuje laťky, kterou jeho role vyžaduje. Jejich rámec PRISMA-LLM odděluje zveřejnění implementace od hodnocení citlivého na důsledky a svých pět úrovní bere jako úrovně zveřejnění, ne jako úrovně rizika.

Praktická verze: pojmenujte systém a jeho verzi, prompty, verzi korpusu, co člověk zkontroloval a kde to selhalo. Držte logy promptů a odpovědí, protože plynulý generovaný seznam témat vypadá nevyhnutelně dávno předtím, než jeho evidenční práce vůbec začala ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Naplánujte i hodiny. [[persistent-ai-agents-academic-research|Případová studie jednoho výzkumníka za 115 dní]] s trvalým výzkumným agentem našla jako nejsilnější vzorec rozšíření kapacity, ne prokázané nahrazení práce: jak se hromadila paměť a postupy, rostl rozsah delegované práce, zatímco lidský vstup se nezmenšoval.

## Veďte praktický výzkum podle stejných pravidel v menším měřítku

Pokud jste přednášející, který zkoumá svůj vlastní kurz, pracujete v nejtenčím prameni korpusu. [[ai-assisted-educational-research|AI-Assisted Educational Research]] to uvádí jako mezeru, ne jako zjištění: AI asistovaný praktický výzkum je pravděpodobně rozšířený a téměř nedokumentovaný a důkazy o automatizaci review ani bibliometrické důkazy neřeší, jak má přednášející zkoumat vlastní výuku.

Co se přenáší, je soubor dispozic:

Používejte AI tam, kde vaše lokální prostředí není proměnnou. Prohledávání literatury vašeho oboru, přepis a shrnutí vlastních nahrávek a psaní nástrojů nebo formulací souhlasu všechno kvalifikuje.

Ponechte si interpretační kroky. Co se počítá jako téma, co znamená komentář studenta a co vaše důkazy z výuky ospravedlňují, je na vás, a písemná zpráva má uvést, které kroky udělal model a které jste udělali vy ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Předdefinujte kritéria a držte je viditelná. Malá lokální studie se nemůže vzpamatovat z konstruktu definovaného poté, co data dorazila.

Vykazujte roli AI, ověření, které jste provedli, a limity designu jednoho kurzu a jednoho výzkumníka. Zpráva o postupu není výsledek o účinnosti.

Simulování kohorty berte jako pokročilou volbu, ne jako výchozí. Simulovaní studenti mají tendenci pokrývat nejsnazší kvadrant skutečného chování studentů a po použití bývají zřídka validováni ([[simulating-students]]). Přečtěte si [[making-simulated-students-behave-like-learners]], než uvěříte verdiktu simulátoru.

## V čem se výzkumníci mýlí

Shoda s lidským kódovačem znamená, že kódování je správné. Shoda člověk-LLM ve slepé studii byla 0,30 Jaccard proti 0,52 u člověk-člověk a slepý ověřovatel nedokázal oba zdroje kódování rozlišit, 51,5 % proti 48,5 %. Shoda zaznamenává, že dva čtenáři se sešli, včetně případů, kdy se sešli na stejném zkreslení.

Kontrolor referencí nahradí kontrolu referencí. Třicet zfalšovaných referencí v Dennyho auditu zahrnuje 17 hybridů, kde byl název skutečný a autoři ne, což je přesně případ, který kontrola trénovaná na metadatech zvládá nejhůř, protože špatná jsou právě ta metadata.

Příznivé hodnocení dělá postup vhodným pro vaši roli. Ze 118 článků o LLM, které uváděly jen pozitiva, jich 52 % přesto uvedlo obavu, že postup nedosahuje laťky, kterou jeho role vyžaduje. Čtěte hloubku hodnocení proti úloze, kterou mu dáváte.

Řemeslo promptu je hlavní páka na kvalitu. Operacionalizace rubriky často rozhoduje o shodě člověka a stroje víc než řemeslo promptu a hodnocení osmi agentů zařadilo stejný systém třetí a poslední podle toho, čí rubrika se použila.

AI bere z projektu práci. Případová studie za 115 dní našla rostoucí delegovaný rozsah, jak se hromadila paměť agenta. Ověřování, rozhodování sporů a logování jsou hodiny, které s tím rostou.

## Co vám vrátí

**„Můj spoluautor to už dělá a nikdo si nestěžoval.“** To, že si nikdo nestěžuje, není zjištění o validitě. Otázka zveřejnění je oddělená od otázky kvality a údaj 38,0 % u nehodnocených softwarových článků říká, že mlčení oboru je rozšířené.

**„Dva modely se shodly, takže kódování je hotové.“** Dva modely se sdílenými trénovacími daty sdílejí i své chyby. Slepý ověřovatel v Liuově studii preferoval strojové kódování v 48,5 % a to, co to číslo udělalo interpretovatelným, byl nezávislý posuzovatel, ne shoda sama.

**„Nemůžeme auditovat proprietární model, takže není co vykazovat.“** PRISMA-LLM žádá zveřejnění implementace jako vrstvu oddělenou od hloubky hodnocení. Systém, verze, prompty, co zkontrolovali lidé a kde to selhalo, jsou vykazatelné i u uzavřeného modelu.

**„Etická komise to nikdy neschválí.“** Přístup k modelům byl proprietární v 84,1 % zkoumaných článků, což znamená, že text studentů obvykle opouští vaši instituci. Sbírejte jen to, co vzdělávací účel potřebuje, ověřte, zda data studentů trénují modely dodavatele, a tam, kde je citlivost vysoká, dejte přednost lokálním nebo syntetickým datům. [[equity-ethics-pedagogical-safety-research]] pokrývá povinnosti v plné šíři.

**„Bude to pomalejší než ruční práce.“** U malého projektu to tak často je. Argument pro to stojí na rozsahu ve velkém a argument proti přehánění stojí na stejné zprávě o 115 dnech.

## Co udělat tento týden

**1.** Napište seznam úkolů s verdiktem u každé položky a dejte ho tam, kde ho vidí celý tým.

**2.** Přidejte do protokolu třídění pravidla pro šedé zóny a log rozhodování dřív, než začne další dávka.

**3.** Vyberte jeden automatizovaný výstup, na který už spoléháte, a validujte ho proti lidskému úsudku na vzorku, který jste ještě neviděli.

**4.** Přečtěte si poslední odevzdaný rukopis a ručně zkontrolujte každé jméno autora v seznamu referencí.

**5.** Přidejte do šablony metodiky řádek „kde AI selhala“, aby ten návyk zveřejňování byl jednou napsaný.

## Kam dál

Doprovodné otázky jsou [[evaluating-ai-interventions-methods]] o tom, jak měřit intervenci, [[reporting-interpreting-aied-research]] o vykazování systému a vlastního použití AI a [[research-gaps-aied]] o tom, kde je literatura tenká. [[equity-ethics-pedagogical-safety-research]] pokrývá data studentů a [[ai-assisted-educational-research]] je plná konceptuální stránka za touto otázkou.
