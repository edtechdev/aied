---
title: "Jaké měřicí nástroje a výzkumné metody může pedagog použít k hodnocení intervencí souvisejících s AI?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
audience: [instructors, researchers, faculty developers]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T11:57:26-04:00"
translation_of: faqs/evaluating-ai-interventions-methods
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Pilot jste spustili ve dvou paralelkách, sesbírali dotazník na konci bloku a za tři týdny máte poradu, kde se někdo zeptá, jestli to fungovalo. Nebo se recenzent zeptal, jaká byla vaše srovnávací podmínka, a druhá paralelka dělala něco jiného. Ať tak či tak: co by tady platilo jako důkaz?

Přiřaďte metodu k tvrzení. Dotazník vám řekne, zda se studentům činnost líbila. Zda se něco naučili, vyžaduje měřítko výkonu, a zda zisk způsobil právě ten nástroj, vyžaduje srovnávací podmínku.

## Stručně

**1.** Napište tvrzení v jedné větě a pojmenujte v ní výsledek. „Studenti, kteří používali tutora, dosáhli vyššího skóre v testu bez podpory“ je testovatelné.

**2.** Proveďte výchozí měření, intervenci, bezprostřední měření po intervenci a pozdější měření provedené bez AI.

**3.** Popište srovnávací podmínku stejně pečlivě jako intervenci, i když je to vaše dosavadní praxe.

**4.** Měřte výkon s podporou a samostatné učení odděleně a s každým publikovaným průměrem zacházejte jako s hypotézou o vaší třídě.

## Vyberte metodu, kterou vaše otázka přežije

Stránka [[research-methods-aied|Výzkumné metody v AIED]] uvádí, co která možnost přináší. Randomizované experimenty dávají nejsilnější kauzální inferenci. Kvaziexperimentální designy pre/post nebo designy s párovými skupinami se hodí k neporušeným třídám a podporují slabší tvrzení. [[qualitative-research|Kvalitativní]] rozhovory, ohniskové skupiny, pozorování a analýza artefaktů odhalují mechanismy a neočekávanou zkušenost. [[mixed-methods-research|Smíšené metody]] spojují důkazy o výsledku s vysvětlením. [[design-based-research|Designový výzkum]] se hodí pro pedagoga, který intervenci ladí napříč iteracemi.

Kvalitativní analýza s podporou AI na ten seznam patří, ale s podmínkou. Korpus rozhovorů přeskupí během minut, takže [[chain-behind-claim-warrantability-2026|prokazatelnost]] je stejně důležitá jako přesnost: zaznamenejte zdokumentovaná přeskupení, která čtenáři umožní cestu od dat k tvrzení prozkoumat, napadnout a revidovat.

Dotazník je [[self-report-measures|míra vlastního hlášení]]: správná pro postoje, špatná pro učení.

## Dejte srovnávací podmínce jméno

Tři podmínky činí kauzální tvrzení interpretovatelným: přesně popsaná intervence, dobře vymezená srovnávací podmínka a platné měřítko trvalého učení. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] prověřili 19 srovnání ChatGPT ve vzdělávání podle těchto kritérií. Všechny tři kritéria splnila čtyři z nich (21 %). Intervence byla dobře vymezena v 74 %, kontrolní skupina ve 42 % a výsledek se kvalifikoval jako učení v 53 %.

Způsob selhání lze snadno zopakovat. [[generative-ai|Nástroj pro obecné použití]] zavedený spolu s novými aktivitami, novou zpětnou vazbou nebo přepracovaným rozhraním zaměňuje médium s metodou a významný výsledek pak patří přepracování.

## Měřte výsledky, na kterých vám skutečně záleží

Syntéza [[ai-ed-evaluation|Hodnocení AI ve vzdělávání]] doporučuje přírůstek učení bez podpory, oddálené zapamatování, transfer na nový úkol, kvalitu uvažování, [[misconceptions|mylné představy]], přijetí zpětné vazby a výkon podskupin. Zapojení, spokojenost, záznamy používání AI, [[self-efficacy|sebeúčinnost]] a [[technology-acceptance-model|vnímaná užitečnost]] jsou rozumná sekundární měřítka a špatné náhrady učení. Pracovní zátěž a úspora času se počítají jako výsledky implementace, což je jiná otázka.

Minimem v měřítku třídy je výchozí měření, intervence, bezprostřední měření po intervenci a pozdější měření bez podpory. Kde můžete, přidejte srovnávací podmínku: dosavadní praxi, žádnou AI, neomezenou AI proti AI s vodítky nebo dva alternativní designy. Výkon s podporou a bez podpory skórujte oddělenými nástroji, protože jedna rubrika je smíchá.

## Čtěte každé číslo jako hypotézu

Průměrný účinek z literatury je slabým vodítkem pro jednu konkrétní třídu. [[oneill-presumed-effective-meta-analysis-2026|Audit O'Neilla (2026)]] u 14 vlivných [[meta-analysis-systematic-review|metaanalýz]] zjistil, že žádná neposkytla platný základ pro svá tvrzení. Sloučený [[learning-gains|„akademický výkon“]] míchal výsledky testů, motivaci, [[self-efficacy|sebeúčinnost]] a postoje do jednoho odhadu. Heterogenita byla extrémní: I² se ve 13 analýzách, které jej uvedly, pohyboval od 77,2 % do 94,4 % a 12 z nich leželo nad 80 %. Všech 14 posoudilo [[limitations-in-aied-research|publikační zkreslení]] neplatným způsobem a 61 % náhodně prověřených primárních studií mělo problémy s validitou. Čtyři analýzy uvedly rozptyl mezi studiemi, dvě uvedly predikční interval a oba intervaly zahrnovaly nulu.

Pohodlné skóre může měřit špatný konstrukt. V [[zhang-platform-scores-miss-ai-teaching-agents-2026|hodnocení osmi AI výukových agentů]] se agent, který se umístil třetí podle vlastního skóre platformy, umístil poslední podle rubriky ověřené odborníky, protože skóre platformy indexovalo výkon studenta během interakce. S metrikou na dashboardu zacházejte jako s hypotézou.

## V čem se pedagogové mýlí

Dotazník spokojenosti měří učení. Měří spokojenost, kterou syntéza Hodnocení AI ve vzdělávání uvádí jako sekundární měřítko vedle výsledků učení.

Přírůstek pre/post ukazuje, že intervence fungovala. Ukazuje, že skóre stouplo. Zda se měřítko počítalo jako učení, je samostatná otázka, a audit našel kvalifikovaný výsledek učení v 53 % srovnání, která prověřil.

Publikované velikosti účinku se přenášejí do mé třídy. O'Neillových 14 metaanalýz nemohlo unést tvrzení, která na nich byla postavena, a oba uvedené predikční intervaly zahrnovaly nulu.

Analytika platformy měří kvalitu výuky. Zhangův agent na třetím místě byl podle odborné rubriky poslední.

## Co vám budou namítat

**„Hodnocení na konci kurzu už máme.“** Ta měří kurz a přicházejí po semestru, ve kterém jste odpověď potřebovali.

**„Srovnávací skupina je v neporušeném kurzu nemožná.“** Srovnejte s loňskou verzí stejného zadání nebo s druhou paralelkou a ten rozdíl popište poctivě. Kvaziexperimentální designy jsou slabší, a přesto informativní, když je alternativou tvrzení bez jakéhokoli srovnání.

**„Velikost účinku v metaanalýze je velká.“** Na kterém výsledku, v čí třídě? Oba predikční intervaly, které O'Neill našel, zahrnovaly nulu.

**„Náš dashboard ukazuje silné zapojení.“** Zapojení je sekundární měřítko na seznamu Hodnocení AI ve vzdělávání. Postavte vedle něj měřítko učení bez podpory.

## Co udělat tento týden

**1.** Napište své tvrzení jako jednu větu a podtrhněte v ní výsledek.

**2.** Zapište do kalendáře pozdější měření bez podpory, po intervenci a ne ve stejném týdnu.

**3.** Napište jeden odstavec popisující srovnávací podmínku, se stejnou podrobností jako intervenci.

**4.** Vytáhněte čísla z platformy, která už máte, a označte u každého, zda jde o výsledek artefaktu, nebo o výsledek učení.

**5.** Poproste jednoho kolegu, aby si design přečetl a řekl, co dalšího se během semestru změnilo.

## Kam dál

[[does-ai-help-students-learn|Pomáhá AI studentům se učit?]] shrnuje, co ukazují důkazy o výsledcích, a [[research-gaps-aied|Mezery ve výzkumu AIED]] pokrývá, kde důkazy řídnou. [[checking-whether-educational-ai-works|Jak poznáme, že vzdělávací AI funguje správně?]] je verze této otázky pro lidi, kteří systém stavějí nebo kupují.
