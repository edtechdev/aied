---
title: "Jak může AI podpořit vícejazyčné studenty, aniž by špatně posoudila jejich znalosti nebo setřela jejich hlas?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-disabled-neurodivergent-learners, writing-instruction-ai-best-practices, redesign-assessment-ai-era, verify-ai-output]
weight: 72
foundations: [ai-literacy, theories-and-frameworks]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, feedback, ai-feedback-quality, evaluative-judgment]
methods: [meta-analysis-systematic-review, quantitative-research]
research_method: [literature review, experiment]
audience: [instructors, instructional designers, assessment designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:30:00-04:00"
translation_of: faqs/ai-multilingual-learners
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Student rozumí pojmu a potřebuje čtyři minuty navíc, aby to řekl anglicky. AI může přeložit zadání, vysvětlit terminologii, nacvičit s ním vysvětlení, nebo napsat celou odpověď. Tři z těch možností jsou výuka. Jedna je splnění úkolu za studenta.

Krátká odpověď pro kolegu: než rozhodnete, co nástroj smí dělat, rozhodněte, co v této úloze dělá jazyk. Tam, kde je jazyk okrajový, může AI odstranit překážku, která s vaším konstruktem nemá nic společného. Tam, kde je jazykem konstrukt, stejný nástroj obchází učení. Riziko běží oběma směry naráz: [[multilingual-learning|jazyková podpora]] může zlepšit přístup a automatizované skórování může studenta pořád přečíst špatně. V jedné fyzikální studii byly výklady nižší jazykové kvality systematicky hodnoceny níž, než určil odborný úsudek, a to u každého testovaného přístupu ke skórování pomocí AI, u devíti systémů strojového učení a dvou jazykových modelů napříč 116 studenty středních škol ([[ai-scoring-language-bias-physics|Feser a Tschisgale, 2026]]). Plynulost a porozumění se skórovaly jako jedna věc.

## Stručně

**1.** Pojmenujte roli jazyka v úloze: okrajová, ústřední, nebo jedno kritérium mezi několika.

**2.** Napište povolenou podporu do pokynů a kritérií a řekněte, co studenti musí pořád udělat sami.

**3.** Dejte cílenou pomoc dřív než celkové přepisy. Požádejte nástroj, aby označil nejasný význam a nabídl možnosti.

**4.** Vyžadujte, aby student porovnal navrhovanou formulaci se svým vlastním významem a se zdroji kurzu.

**5.** Skórujte pojmové uvažování a jazyk odděleně, když jsou obojí zamýšlenou kompetencí.

**6.** Nikdy nedělejte z neotestovaného nástroje jedinou cestu k podpoře.

## Rozhodněte, co dělá jazyk

Ve výkladu z biologie je gramatika pro posuzovaný pojem většinou okrajová. V jazykovém kurzu je produkování a revidování určitých struktur to učení. V profesní komunikaci se počítá oborová přesnost, publikum i registr. Stejný překladový nástroj je v prvním případě vhodný, ve druhém sporný a ve třetím vyjednatelný.

Rozhodnutí napište tam, kde si ho studenti mohou přečíst. Pokud studenti smějí překládat zadání, ale musí vysvětlení v cílovém jazyce vytvořit bez pomoci, řekněte to výslovně. Pokud je povolena terminologická podpora, určete, co student musí pořád vysvětlit a ověřit. Pak to uspořádání zkontrolujte proti požadavkům na úpravy a proti institucionální politice, místo abyste každou formu jazykové pomoci považovali za zaměnitelnou. Student s doloženou úpravou a student, který se vyhýbá procvičování, mohou žádat totéž, a jen druhý případ je váš výukový problém.

## Co výzkum podporuje a co ne

[[genai-chatbots-language-learning-affordances-review-2026|Lopez a Arabadzhy (2026)]] prošli 24 empirických studií o generativních chatbotů v jazykovém učení. Jejich přínos je taxonomický: každá dílčí affordance katalogizovaná u pregenerativních chatbotů přetrvává a tři jsou nové, včetně **translanguagingu**, záměrného přecházení mezi jazyky jako součásti učení. To je mapa hlášených použití a zkušeností, ne souhrnný odhad, a korpus je geograficky koncentrovaný: Čína, Írán, Tchaj-wan a Turecko tvoří 19 z 24 studií a všechny kromě jedné sady proběhly ve formálních institucích. Podpora použití vysvětlení napříč jazyky jako učebního kroku není podporou překladu každého zadání.

Hodnocení je místo, kde se důkazy zostřují a sázky rostou. [[ai-scoring-language-bias-physics|Feser a Tschisgale (2026)]] porovnali jedenáct přístupů k automatizovanému skórování s odborným lidským skóre u fyzikálních výkladů 116 studentů středních škol a našli systematické podhodnocení pojmového porozumění u jazykově slabších výkladů, a to v každém jednotlivém přístupu. Design izoluje mechanismus: stejný pojmový obsah vyjádřený slabší prózou dostal nižší skóre. Není to tvrzení o vícejazyčných studentech žádné konkrétní země a je to přesně ten vzorec, který dělá z celkové shody špatnou diagnostiku. Hodnotitel může průměrně souhlasit s lidskými hodnotiteli a přitom se mýlit konzistentním směrem u studentů, jejichž jazyk se teprve vyvíjí.

Syntéza [[multilingual-learning]] popisuje výzkum screeningu psaní, který ukazuje vícejazyčné vzorce prediktivní zaujatosti podobné lidským zaujatostem ve skórování. Přečtěte tři zjištění společně a operační lekce je úzká: ani „AI odstraňuje lidskou zaujatost“, ani „AI přidává jazykovou zaujatost“ není užitečné pravidlo. Potřebujete kontrolu úlohy, populace a jazyka v bodě, kde se skóre stává známkou.

## Dejte nástroji konkrétní podpůrnou roli

Začněte u zadání: nechte nástroj je přeložit nebo přeformulovat do srozumitelného jazyka, výstup zkontrolujte proti originálu a nechte studenta, aby si sám ujasnil, co úloha vyžaduje, a zeptal se na skutečnou nejednoznačnost.

Oborová slovní zásoba funguje jinak. Nastavte nástroj tak, aby srovnával významy napříč jazyky a generoval kontextové příklady, a pak nechte studenta vysvětlit pojem a identifikovat zavádějící ekvivalenty.

Nácvik mluvení volá po ohraničeném opakovaném zkoušení, při kterém odpověď produkuje student a předvádí cílovou dovednost.

Při revizi psaní žádejte několik pojmenovaných problémů s možnými opravami a rozhodnutí i jeho zdůvodnění nechte na studentovi.

Čtení obsahu kurzu je nejširší případ. Dvojjazyčné vysvětlení opřené o schválené materiály pomáhá, pokud student zkontroluje klíčová tvrzení a prokáže porozumění.

To jsou použití k pilotování, ne ověřené intervence. Nástroj, který funguje dobře v jednom jazyce nebo jednom žánru, není proto spolehlivý v jiném, a geografická koncentrace přehledu znamená, že vaše jazyková dvojice může být v důkazech sotva zastoupena.

## Chraňte studentův význam a hlas

Žádejte cílenou pomoc dřív než přepis, protože při celkovém přepisu studentovo myšlení opouští stránku. Žádost, kterou stojí za to učit: „Označ dvě místa, kde je můj význam nejasný. Vysvětli problém a nabídni možnosti. Nech moje příklady a nepřidávej tvrzení.“ Pak volí student.

Sled kroků, který nechává práci u studenta:

1. Rozviňte vysvětlení v kterémkoli jazyce nebo směsi jazyků, které studentovi umožní uvažovat, pokud to úloha dovoluje.
2. Pomocí schválené podpory prozkoumejte terminologii nebo vyjádření.
3. Porovnejte navrhovanou formulaci se zamýšleným významem a se zdroji kurzu.
4. Vytvořte požadované vysvětlení a poznamenejte si důsledné revize.

V úloze ze sociologie může student dvojjazyčně promyslet konflikt rodinných rolí, zkontrolovat krátký seznam pojmů kurzu a pak napsat odevzdávanou analýzu v požadovaném jazyce, přičemž pedagog posuzuje sociologické uvažování a případná samostatně uvedená jazyková kritéria. V úloze z jazykového učení by stejný sled prozradil hodnocení a musel by zachovat samostatnou produkci v cílovém jazyce.

Vyhněte se tomu, aby se „zní jako rodilý mluvčí“ stalo standardem, protože to měří vztah studenta k dialektu, ne jeho uchopení vašeho předmětu. Určete místo toho srozumitelnost, přesnost, žánr nebo publikum. Vyhlazený přepis může posunout stanovisko, vypustit kulturně významný výraz nebo přidat tvrzení, které student nikdy nezamýšlel, a student ho podepíše.

## Zkontrolujte nástroj a hodnocení

Kontrolujte význam, ne plynulost. Vzorkujte překlady a vysvětlení kvůli odborným termínům, opomenutím, vymyšleným detailům, kulturním předpokladům a varietám jazyka, které vaši studenti skutečně používají. Zapojte kvalifikované jazykové kolegy nebo podpůrný personál; nedělejte ze studentů jediného auditora nástroje, který jim ukládáte používat.

Oddělte kritéria. Když jsou uvažování i jazyk zamýšlenou kompetencí, skórujte je odděleně a zkontrolujte, zda hodnotitel s asistencí AI netrestá jazyk dvakrát, nebo neprohlíží správné uvažování vyjádřené nekonvenčně. To je praktická podoba [[assessment-validity|validity]] pro vícejazyčnou kohortu a otázka podskupin v [[differential-effects-across-learner-groups|diferenciálních efektech]].

Uchovejte cestu k vyjasnění. Krátký rozhovor, anotovaný diagram nebo vysvětlení jednoho klíčového rozhodnutí mohou ukázat, čemu student rozumí, když to próza neunese. Zvolte formát, který sedí na konstrukt, ne ten, který se nejsnáze známkuje.

Poskytněte použitelné alternativy. Studenti potřebují jasnou cestu k lidské jazykové podpoře a k přístupným zdrojům kurzu. Vyžadování neotestovaného nástroje může přidat překážku právě tehdy, když chcete inkluzi, což je stejné selhání, kterému se musí vyhnout [[ai-disabled-neurodivergent-learners|podpora studentů se zdravotním postižením a neurodivergentních studentů]].

## Co vám na to přijdou říct

**„Překlad znamená, že se student vyhýbá práci.“** Záleží na tom, co tou prací je. Překlad může umožnit zapojení s oborovým obsahem, s nímž nemá co dělat, a může nahradit procvičování, když je kompetencí samostatná produkce v cílovém jazyce. Rozhodněte, co posuzujete, a řekněte to.

**„AI opravila jazyk, aniž by změnila cokoli jiného.“** Zkontrolujte to. Přepis, který zlepší gramatiku, často mění důraz, změkčí tvrzení nebo vymyslí podporu. Požádejte studenta, aby pojmenoval jednu významnou změnu a řekl, zda zachovává jeho zamýšlený bod, což vám také prozradí, zda návrh vůbec četl.

**„Lidští hodnotitelé jsou férovější.“** Lidské skórování nese vlastní jazykovou zaujatost a výzkum screeningu vícejazyčného psaní zjišťuje, že automatizované systémy její vzorce reprodukují. Férovost tu plyne z explicitních kritérií, vzorkovaných důkazů o podskupinách a skutečné možnosti přehodnotit úsudek, ne z toho, kdo nebo co drží pero.

**„Naši studenti jsou v angličtině v pohodě, takže se to netýká.“** Zjištění, na kterém záleží, není tvrzení o deficitu žádné skupiny. Je to to, že pojmové porozumění vyjádřené slabší prózou je systematicky podhodnoceno, a to u každé testované metody. Platí pro spěchající pisatele, pisatele v druhém jazyce i pro každého, jehož registr se liší od registru zkoušejícího.

## Co udělat tento týden

**1.** Vezměte jedno zadání a napište větu, která říká, co v něm dělá jazyk.

**2.** Přepište pokyny tak, aby říkaly, jaká podpora je povolena a co studenti musí vytvořit samostatně.

**3.** Otestujte překlad a vysvětlení terminologie v jazycích, které vaši studenti skutečně používají, a čtěte výstup kvůli vymyšleným detailům a ztracenému významu.

**4.** Přidejte jednu kontrolu, která zaznamená studentův vlastní význam nebo rozhodnutí, například dvouvětou poznámku o změně, kterou přijal nebo odmítl.

**5.** Pokud vaše rubrika skóruje kvalitu psaní, oddělte to kritérium od pojmového a přečtěte znovu dvě odevzdání od každého s tím rozdělením na mysli.

## Kam dál

[[multilingual-learning]] je pojmová stránka pro jazyk, translanguaging a hodnocení v AI zprostředkované výuce a [[assessment-validity|validita hodnocení]] je standard pro to, zda skóre podporuje inferenci, kterou děláte. [[differential-effects-across-learner-groups]] pokrývá, jak hledat vzorce v podskupinách, místo abychom je předpokládali.

Pro případ výuky psaní, kde je jazykem konstrukt, viz [[writing-instruction-ai-best-practices|osvědčené postupy pro výuku psaní]]. Pro to, zda lze automatizovanému skórování ve vašem prostředí vůbec věřit, viz [[ai-grading-fairness-reliability|hodnocení od AI]] a [[checking-whether-educational-ai-works|ověřování, zda vzdělávací AI funguje]].
