---
title: "Jak přimět simulovaného žáka, aby se choval jako skutečný žák?"
created: "2026-10-02T08:36:18-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T11:57:27-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
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

Ve čtvrtek máte demo. Simulovaný žák v něm nevyřeší úlohu se zlomky, dostane jednu nápovědu a pak dá správnou odpověď se správným vysvětlením. Někdo v místnosti se zeptá, proč by to žák, kterému to nejde, udělal, a vy nemáte odpověď.

Před dalším demem potřebujete tohle jasně: promptování modelu, aby hrál žáka, vytváří zvuk žáka. Chování vytváří omezení toho, co simulátor ví, struktura v tazích a validace proti záznamům skutečných žáků. Jen 3 % studií, které simulují žáky, svůj simulátor po použití validují, takže vám to nikdo nezkontroluje.

## Stručná verze

**1.** Zapište, které žáky nesimulujete, a tu větu dejte tam, kde si ji vaši uživatelé přečtou.

**2.** Testujte stav přesvědčení, ne prózu. Zeptejte se, co simulátor řekne po opravě.

**3.** Omezte znalosti záměrně: určete epistemický stav, nebo znalost odeberte.

**4.** Skriptujte interakci tah po tahu. Lepší prompt s personou drift neopraví.

**5.** Hodnoťte behaviorální věrnost a citlivost na vedení odděleně, proti záznamům skutečných žáků.

## Rozhodněte, na jakou otázku simulátor odpovídá

Pod pojmem „simulovaný žák" se slévají tři úlohy a potřebují různý aparát. Nacvičovat učitele nebo lektora potřebuje partnera, který se pod tlakem chová uvěřitelně. Auditovat, jak AI zachází s různými profily žáků, potřebuje pokrytí profilů, na kterých vám záleží. Predikovat výsledky pro kurz potřebuje rozdělení žáků, ne jednoho přesvědčivého jedince. Simulátor postavený pro první úlohu vás u třetí zklame a evidence níže je pořád odděluje.

## Pojmenujte žáky, které nepokrýváte

Nejužitečnější zjištění pro každého, kdo se chystá simulátoru věřit, se týká pokrytí. Dvanáct učitelů, kteří doučovali žáky simulované pomocí LLM, hlásilo příliš složitý jazyk, chybějící emoce, nepřirozenou pozornost a nevysvětlené skoky ve znalostech, a simulace zastupovaly jen jeden ze čtyř kvadrantů skutečného chování žáků ([[llm-student-simulation-teacher-insights|Martynova a kol., 2026]]). Kvadrant, který pokryly, byl ten nejsnazší k simulaci.

To je důležité, protože to téměř nikdo nekontroluje. Jen 3 % studií simulujících žáky validuje svůj simulátor po použití. Pokud nějaký postavíte a validaci vynecháte, jste v převažující většině a jste také důvodem, proč ten statistický údaj zůstává citovatelný.

## Omezte, co simulátor ví

Schopný model nedokáže snadno předstírat, že ví jen část. Výzkum tomu říká **paradox kompetence**: široce schopné modely požádané, aby napodobovaly částečně znalé žáky, vytvářejí nerealistické vzorce chyb a dynamiku učení.

Drift má směr a míří na žáky, kteří simulaci potřebují nejvíc. Proti žákovským nápadům získaným ze 49 přírodovědných lekcí v souladu s NGSS udrželo šest modelů většinu nápadů uvnitř očekávaného rozsahu znalostí a zhruba dvě třetiny na cílové čtenářské úrovni nebo pod ní, a pak přestřelily přesně tam, kde byl žák nejmladší. Nápady pro základní a střední školu častěji přesáhly rozsah znalostí a čtenářskou úroveň cílového ročníku a korpus se klonil k širšímu uvažování, odbornější slovní zásobě a méně znakům nejistoty („možná", „zdá se") než skutečné nápady z lekcí ([[llm-simulating-student-scientific-thinking-2026|Nguyen a Cao, 2026]]).

Dvě poznámky z té studie. Volba modelu není jednorozměrná, protože systém, který se nápadům z lekce blíží, je stále může nasadit nad úroveň ročníku. A náprava je často instruktážní: explicitní znovuzadání na úrovni ročníku vrátilo většinu modelů do rozsahu.

## Určete stav, nebo znalost odeberte

Pokud model ví příliš, můžete pojmenovat stav, ve kterém má být, nebo odebrat znalost, kterou mít nemá.

**Podmiňte epistemickým stavem.** Rámec bez trénování staví kognitivní prototyp každého žáka ze [[knowledge-graph|znalostního grafu]] a skóruje proti němu kandidáty z paprskového prohledávání, přičemž uvádí 100 % zlepšení přesnosti simulace ([[simulating-students-diverse-cognitive-levels-2025|Wu a kol., 2025]]). Jeho kvalita roste s kognitivní úrovní žáka, takže slabší žáci zůstávají těžším případem, což je nešťastné vzhledem k tomu, že jde obvykle právě o ně. Modelování kognitivní dynamiky místo statické persony jde dál: aktualizace stavu CogEvolution založené na ICAP dosáhly R²LC = 0,92 tam, kde statičtí agenti dosahují 0,45, a bez svého modulu ICAP spadly na 0,58 ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang a kol., 2026]]).

**Odeberte znalost.** Potlačení 16 cílených znalostních komponentů v Mistral-7B snížilo přesnost z přibližně 0,75 při 10 % zapomínání pod 0,5 při 40 %, zatímco základní model se držel kolem 0,85. Potlačená znalost se ukázala jako obnovitelná řízeným doučením a dialogem vedeným koučem ([[simulating-novice-students-machine-unlearning-2026|Song, Guo a Lin, 2026]]). Tohle je nejblíž přímé výrobě nováčka a obnovitelnost se stává předností, pokud chcete, aby se simulátor během sezení učil.

## Skriptujte tahy, ne personu

Stabilita persony se ukazuje jako problém designu interakce, ne volby modelu. Při křížení pěti LLM se třemi návrhy promptů a čtyřmi personami s intenzitou ADHD skriptované interakce ukotvené v úkolu odstranily pozorovateli hodnocený behaviorální drift, a to až o 97 % proti neskriptovanému dialogu. Bez explicitních pokynů k persone se základní zobrazení žáka vychýlilo k vysokým symptomům ADHD ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase a Leins, 2026]]).

Když váš simulátor driftuje, podívejte se, co po něm tah po tahu žádáte, dřív než změníte model nebo přepíšete popis žáka.

## Hodnoťte dvě věci, ne jednu

StudentSim vyžaduje, aby spolu držely dvě vlastnosti: **behaviorální věrnost**, tedy jak dobře simulátor odpovídá vlastním odpovědím žáka, a **citlivost na vedení**, tedy jak spolehlivě se aktualizuje směrem, kam vede vedení lektora. Jeho benchmark převádí veřejné korpusy žáků (šachy, psaní v angličtině jako druhém jazyce, matematika) do protokolu pro jednotlivé žáky, na kterém se každý simulátor natrénuje a skóruje na vyčleněných záznamech. Sledování stavu specifické pro doménu vyšlo slabě v citlivosti a hraní role LLM pouze pomocí promptu vyšlo slabě ve věrnosti ([[studentsim-llm-student-simulators|Yang a kol., 2026]]). Simulátor může projít jedním testem a selhat v druhém, takže uvádějte oba.

Jako ověření konceptu zmrazený StudentSim použitý jako odměna ve smyčce [[reinforcement-learning|posilovaného učení]] šachového lektora vytvořil lektory, které experti hodnotili jako přesnější, lépe vedoucí a osobnější než ty trénované proti odměně ze simulátoru postaveného na frontierovém LLM nebo zcela bez posilovaného učení. Dobrý simulátor může být trénovacím signálem stejně jako měřítkem.

Věrnost na úrovni akcí má vlastní limit. Simulátory žáků reprodukují pozorovatelné akce bez skrytého uvažování za nimi a [[inside-llm-student-simulator-reasoning-2026|INSIDE]] doladuje modely tak, aby před každou akcí generovaly vnitřní dialog, a dosahuje nejvyšší shody mezi generovaným uvažováním a skutečnými úpravami kódu v 51,8 % u známých úloh a 57,9 % u neviděných, aniž by ztratil věrnost akcí (Niousha a kol., 2026). Pokud vám záleží na tom, proč váš simulovaný žák něco udělal, shoda v akci nestačí.

## Validujte proti skutečným žákům a uveďte výchozí stav

Dvě srovnání ukazují, co validace stojí.

Benchmarkování devíti simulačních metod proti sedmi metrikám s referencí na 382 vyčleněných dialozích z největšího veřejného korpusu skutečných dialogů žáka a lektora o matematice: promptování zaostalo za doladěním v dialogových aktech (0,4998 proti 0,6840), v ROUGE-L (0,1648 proti 0,3212) a v kosinové podobnosti (0,5460 proti 0,7390). Nejlepší testovaná metoda, optimalizace preferencí na modelu s 8B, porazila řízené doladění jen nepatrně a byla horší v chybách, a lidské hodnocení se třemi lektory toto pořadí zopakovalo ([[simulated-students-tutoring-dialogues-2026|Scarlatos a kol., 2026]]). Vrchol tohoto žebříku sedí blízko středu, takže výchozí stav, který uvedete, rozhoduje o tom, jak působivě vaše vlastní číslo vypadá.

SWIM je nejjasnější srovnání promptování, doladění a posilovaného učení, protože každou generovanou esej skóruje proti cílovému profilu rysů, místo aby ji posuzoval dojmem. Promptování ukotvené v rubrice dávalo omezenou kontrolu i u silných proprietárních modelů, s nejlepším průměrným QWK rysů 0,577 (Claude Sonnet) a 0,422 (GPT-5.4), a téměř nulovým u otevřeného modelu s 7B. Řízené doladění na skutečných dvojicích skóre a esej dosáhlo u tohoto modelu s 7B 0,474 ± 0,023. GRPO s odměnou odvozenou z automatizovaného skórování esejí dosáhlo 0,618 ± 0,005, přičemž zisky vydržely u dvou nezávislých hodnotitelů, na kterých se politika nikdy netrénovala ([[swim-student-writing-simulation-2026|SWIM]]).

Promptování také vytvořilo idealizovanou populaci, ne realistickou: průměrné normalizované celkové skóre 0,74 proti 0,58 u skutečných žáků a medián délky 304 slov proti 167. Trénované modely obnovily lidské rozdělení skóre a délky bez jakéhokoli dohledu nad délkou. Jedna věc zůstala těžká: autentická forma nízké pokročilosti. Trénované modely obnovily syntaxi, ale psaly příliš málo pravopisných a gramatických chyb, zatímco promptování simulovalo slabost povrchovým poškozením, pravopisnými chybami nastříkanými do jinak kompetentní prózy.

Povrchový realismus je slabý test v obou směrech. V zaslepené studii expertní anotátoři chybně klasifikovali 164 z 196 (83,7 %) odevzdání v Javě generovaných LLM jako psaná člověkem, protože chyby byly funkčně nerozlišitelné od autentických, a shoda se skutečnými chybami pak klesala s rostoucí obtížností úlohy ([[simulating-students-java-programming-errors-llms|Keramati a kol., 2026]]). Napříč sedmi modely od 4B do 120B parametrů se simulátory přepínaly ke správné odpovědi v téměř jednotné míře bez ohledu na zpětnou vazbu, kterou dostaly, takže podobnost výstupu neříká nic o stavu přesvědčení za ním. Trénování proti **skóre selektivního obratu** zvedlo věrnost až o +0,56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar a Sachan, 2026]]).

## Ověřte, zda by nestačil popis

Než postavíte kohortu, ověřte levnější variantu. Pro hodnocení online výukové zkušenosti předtím, než se studenti zapojí, pro predikci odpadnutí a dokončení a pro zpětnou vazbu k designu překonal jediný „popisující" webový agent, který projde lekcí a vytvoří bohatý popis zkušenosti, přímou simulaci populace žáků.

Simulovaní žáci v tom srovnání ukázali mnohem menší behaviorální rozsah než skuteční žáci: napříč 100 agenty na pěti testovacích lekcích reprodukovali jen asi 4 % cest, kterými skuteční studenti šli, a stáli přitom podstatně víc výpočtu. Postup popsat a pak predikovat dosáhl nejlepší predikce rozdělení odpadnutí na masovém globálním kurzu CS1, s průměrným JSD 0,060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell a Piech, 2025]]).

Hranice, kterou to kreslí, je praktická. Simulace rozdělení žáků může být zbytečná nebo kontraproduktivní, když je cílem predikce výsledku nebo kritika designu. Simulace si svou cenu zaslouží, když záleží na pokrytí skutečné rozmanitosti žáků, jako při auditování toho, jak AI zachází s různými profily, nebo když má učitel proti čemu nacvičovat.

## V čem tvůrci chybují

Povrchový realismus je cíl. Míra chybné klasifikace 83,7 % u strojově psaného kódu a téměř jednotné přepínání odpovědí napříč sedmi modely říkají, že lidský posuzovatel čtoucí výstup nevidí vlastnost, kterou tvrdíte. Testujte místo toho reakci na opravu.

Lepší prompt s personou opraví drift. Skriptované tahy ukotvené v úkolu snížily pozorovateli hodnocený drift až o 97 % napříč pěti modely a třemi návrhy promptů. Práci odvedl design tahů.

Silnější základní model zavře mezeru v kompetenci. Silný proprietární model skóroval 0,422 v QWK rysů při promptování, zatímco doladěný model s 7B dosáhl 0,474, a stejné srovnání šesti modelů přestřelilo nejhůř na nejnižších ročnících. Volba modelu směňuje jednu osu věrnosti za jinou.

Validace znamená, že kolega přečetl přepis a myslel si, že to zní správně. Výsledek s Java kódem ukazuje, jak daleko ten úsudek dojde. Validace znamená vyčleněné záznamy od skutečných žáků a výchozí stav, který dokážete pojmenovat.

Simulace populace je ta důkladná varianta. Napříč 100 agenty simulace pokryly asi 4 % cest, kterými šli skuteční studenti, a to při podstatně vyšším výpočtu než popisující agent.

## Co na vás přiletí

**„Učitelé nepoznali váš simulátor od žáka."** V zaslepené studii s Java kódem expertní anotátoři chybně klasifikovali 83,7 % strojových odevzdání jako lidská. To měří anotátory a stav přesvědčení nechává neprozkoumaný.

**„Doladění je pro náš tým mimo rozsah."** Pak omezte tvrzení na to, co promptování unese, a řekněte to. Promptování mělo strop 0,577 u nejsilnějšího testovaného modelu a téměř nulu u otevřeného modelu s 7B a vytvořilo idealizované rozdělení skóre.

**„Nemáme přístup k datům skutečných žáků."** Protokol StudentSim je postaven z veřejných korpusů žáků v šachách, psaní v druhém jazyce a matematice. Veřejná data omezují, co můžete tvrdit o vlastní populaci, a dávají vám výchozí stav, což je věc, kterou většina zpráv vynechává.

**„GRPO porazilo řízené doladění, takže bychom měli trénovat posilovaným učením."** Porazilo, 0,618 proti 0,474. Forma nízké pokročilosti zůstala těžká v obou případech, s příliš malým počtem pravopisných a gramatických chyb, a v samostatném benchmarku optimalizace preferencí porazila doladění jen nepatrně a prohrála v chybách. Ověřte, na které vlastnosti váš případ použití závisí.

**„Nejslabší žáci jsou malý díl našich uživatelů."** Jsou nejtěžším případem pro každou metodu na této stránce a zjištění o pokrytí říká, že se simulace shlukují v nejsnazším kvadrantu. Pokud má váš simulátor sloužit k vyvozování závěrů o žácích, kterým to nejde, ta mezera patří do zprávy.

## Co udělat tento týden

**1.** Napište větu o pokrytí: které žáky tento simulátor nezastupuje. Dejte ji do README a do poznámek k demu.

**2.** Přidejte do testovací sady jednu sondu, která simulátor opraví a zkontroluje, zda zůstane u chyby.

**3.** Nahraďte volný chat s personou v jednom toku tahy ukotvenými v úkolu a porovnejte drift.

**4.** Ohodnoťte jeden existující simulátor proti vyčleněným skutečným záznamům ve věrnosti i citlivosti a uveďte ta dvě čísla odděleně.

**5.** Projděte kontrolu popisujícím agentem na otázce, na kterou skutečně potřebujete odpověď, než začnete financovat kohortu.

## Kam dál

[[simulating-students|Simulace žáků]] je plná koncepční stránka. [[checking-whether-educational-ai-works|Ověřování, zda vzdělávací AI funguje]] pokrývá hodnocení systémů, které testujete proti simulátoru, a [[making-ai-better-at-supporting-learning|Jak udělat AI lepší v podpoře učení]] pokrývá trénovací metody za výsledky doladění zde. [[addressing-common-misconceptions-ai-education|Vyrovnávání se s běžnými mylnými představami o AI ve vzdělávání]] se zabývá tím, zda mohou simulovaní žáci ve výzkumu zastoupit skutečné žáky.
