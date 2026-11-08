---
title: "Interpretace a aplikace výzkumu AIEd"
created: "2026-09-19T05:41:27-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied, how-can-ai-assist-with-educational-research]
updated: "2026-11-08T06:44:50-05:00"
translation_of: "concepts/interpreting-and-applying-aied-research"
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

> **Interpretace a aplikace výzkumu AIEd** — jak rozhodnout, zda se zjištěním o AI ve vzdělávání vyplatí jednat, ať už učíte, vedete program, navrhujete kurz nebo vyvíjíte software. K používání této stránky nepotřebujete statistiku. Začíná otázkou, kterou praktik skutečně má — *mám to udělat?* — prochází několik věcí, které na ni odpovídají, a technické podrobnosti nechává na pozdější části pro ty, kdo je chtějí nebo potřebují. Krátká verze: zjištění stojí za jednání, když víte, s čím bylo srovnáváno, co bylo měřeno, kdo byl studován a zda nástroj v podobě, v jaké byl studován, stále existuje. Většina tvrzení, která se dostanou k vyučujícím, administrátorům a vývojářům, selhává v jedné z těchto čtyř věcí.

## Otázky k zamyšlení

- Prodejce, novinový článek nebo kolega říká, že nástroj AI zlepšil učení. Co jediné byste chtěli vidět, než ho vyzkoušíte ve vlastním kurzu — a věděli byste, kde to hledat?
- Každá stránka článku v této znalostní bázi má nyní sekci **Co to znamená pro praxi** a většina také sekci **Omezení**. Co vám při jejich společném čtení říká jedna, co ta druhá ne?
- Studující procvičují s nástrojem AI a vedou si lépe v procvičovacích úlohách, ale hůř u [[summative-assessment|závěrečné zkoušky bez pomůcek]]. Které číslo je učební výsledek, na kterém vašemu kurzu záleží — a zachytilo by vaše současné hodnocení ten rozdíl?
- Studie slibuje velké zlepšení, ale sledovala 30 studujících v jednom kurzu na jedné instituci a studovaná verze nástroje už není verzí, kterou kdokoli používá. Který z těch dvou faktů vás znepokojuje víc a proč?
- Mnoho nástrojů AI zvyšuje, jak moc je studující používají, aniž zvyšuje, jak moc se učí. Kdybyste si měli vybrat mezi nástrojem, který zvyšuje angažovanost, a nástrojem, který zvyšuje výkon bez pomoci, jaké důkazy by to rozhodly?
- Někdo po vás chce, abyste nástroj schválili nebo koupili na základě prodejcových vlastních čísel o účinnosti. Co byste chtěli, aby bylo zveřejněno o tom, jak ta čísla vznikla?

## Úvod

Tato stránka je pro lidi, kteří musí něco rozhodnout: vyučující, který zvažuje změnu zadání, [[administrator|administrátor]] vážící pilotní projekt, návrhář učení, který staví kurz, vývojář softwaru rozhodující, co má funkce dělat, nebo výzkumník, který některému z nich vysvětluje zjištění.

Rozdíl dělají dva návyky a ani jeden nevyžaduje výzkumné školení.

**Nejdřív si přečtěte dvě sekce psané pro vás.** Každá stránka článku zde nyní nese sekci **Co to znamená pro praxi** — obvykle tři až pět konkrétních kroků odvozených z dané studie — a většina také sekci **Omezení**, která uvádí, co studie nemůže podpořit. Čtěte je před zjištěními studie, ne po nich. Sekce pro praxi vám říká, k čemu je studie dobrá; sekce omezení, kde končí. Pokud sekce pro praxi chybí nebo je vágní, považujte takovou stránku za nedokončenou, nikoli za důkaz.

**Posuzujte tvrzení, ne jeho sebevědomí.** Tvrzení o [[ai-education|AI ve vzdělávání]] bývají obvykle přesná ohledně *něčeho* a zavádějící ohledně věci, na které vám záleží, protože studie a vaše třída se liší ve čtyřech ohledech: s čím byla srovnávána, co měřila, kdo se účastnil a která verze nástroje byla použita. Zbytek této stránky vám dává kontroly v běžném jazyce a potom důkazy za každou z nich pro čtenáře, kteří je chtějí.

To, co následuje, také nenahrazuje sousední stránky. [[research-methods-aied|Výzkumné metody v AI ve vzdělávání]] pokrývají, jak se designy stavějí, [[limitations-in-aied-research|Omezení výzkumu AIEd]] katalogizují opakující se slabiny literatury, [[ai-ed-evaluation|Hodnocení AIED]] pokrývá, jak se hodnotí systémy a výstupy, a [[differential-effects-across-learner-groups|Rozdílné efekty napříč skupinami studujících]] pokrývá, koho zjištění zahrnuje a koho ne.

## Čtyři otázky, které rozhodnou většinu tvrzení

Položte si je, než na něco vynaložíte čas, peníze nebo semestr.

**1. S čím bylo srovnáváno a bylo to srovnání spravedlivé?** „Studující, kteří AI používali, si vedli lépe než ti, kteří ji nepoužívali,“ vám něco řekne jen tehdy, pokud ti druzí dělali něco skutečného. Pokud srovnání bylo běžná výuka — nebo nic — pak zjištění směšuje nástroj s časem navíc, pozorností navíc a novostí. Co hledat: **kontrolní skupinu**, která dostala věrohodnou alternativu, a náhodné přidělení do obou podmínek.

**2. Co přesně měřili?** Tady většina vzrušujících tvrzení tiše selhává. Výsledky testů, kvalita domácích úkolů, [[motivation|motivace]], postoje a [[student-engagement|angažovanost]] se slijí do jediného čísla „výkonu“, nebo se měřítko výkonu *za přítomnosti nástroje* vydává za učení. Učení, které závisí na přítomnosti nástroje, není totéž jako učení, které vydrží. Co hledat: co nástroj měřil, zda byl validován pro danou populaci a zda byl výsledek měřen **bez** AI v místnosti.

**3. Kdo byl studován, kolik lidí a jak dlouho?** Třicet studujících v jednom kurzu je signál, ne výsledek. Čtyřtýdenní intervence vám neřekne nic o roce. A studie studujících odlišných od vašich je stále užitečná — je to hypotéza o vašem prostředí, ne předpověď. Co hledat: velikost vzorku, jak byli účastníci rekrutováni, jedno pracoviště, trvání a zda byla některá podskupina dost velká na analýzu.

**4. Je nástroj stále tím nástrojem, který byl studován?** Schopnosti AI se vyvíjejí rychleji než publikace. Zjištění z roku 2025 popisuje generaci modelů z roku 2025 — někdy konkrétní verzi, někdy konfiguraci, kterou už nikdo nepoužívá. To zjištění nečiní nepravdivým; činí ho datovaným, a znamená to, že tvrzení je třeba znovu ověřit, ne ho dědit. Co hledat: verzi modelu a okno sběru dat.

## Co důkazy říkají o tvrzeních o AI obecně

Pokud si z této stránky zapamatujete jednu věc, ať je to tvrzení, že titulní číslo bývá nafouknuté a srovnání obvykle slabé. Není to okrajový názor — je to to, co uvádějí audity samotného oboru. Několik dobře navržených studií skutečně ukazuje reálné zisky; jde o to, že břemeno důkazu leží na tvrzení.

- **Asi dvě třetiny průměrného efektu zmizí**, jakmile zohledníte, že působivé výsledky se publikují a nepůsobivé ne. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] sloučili 1 840 veličin efektu ze 67 přehledů a zjistili, že korigovaný průměr byl zhruba jednou třetinou publikovaného mediánu — SMD 0,196 proti 0,67.
- **Název produktu není vyučovací metoda.** Při auditu srovnání za prominentní metaanalýzou [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] zjistili, že jen **21 %** mělo dobře definovanou intervenci, kontrolní skupinu a validní měřítko učení — a uváděná výhoda pro „používání ChatGPT“ vyšla větší než pro účelově stavěné [[intelligent-tutoring|inteligentní doučovací systémy]] (g = 0,7 proti 0,66), což je varovný signál, nikoli triumf.
- **Výkon s nástrojem se běžně zaměňuje za učení.** V jedné studii matematiky [[k-12|K-12]] studující procvičující s [[conversational-ai|chatbotem pro obecné účely]] získali lepší známky z procvičování a poté dosáhli **zhruba o 17 % horšího** výsledku než vrstevníci bez přístupu k AI u závěrečné zkoušky bez pomůcek ([[stanford-evidence-base-ai-k12-2026|Stanfordská důkazní základna pro AI v K-12]]).
- **Vlastní přehledy oboru neprojdou auditem.** Audit [[oneill-presumed-effective-meta-analysis-2026|O'Neilla (2026)]] **14 recenzovaných metaanalýz** tvrdících, že AI zlepšuje vzdělávání, zjistil, že **žádná** neposkytla validní základ pro tvrzení, která předkládala, a mezi 46 náhodně vybranými primárními studiemi mělo **61 %** problémy s validitou. Problém není jeden špatný článek; je to kultura reportování.
- **Přehled může kvantifikovat zkreslení reportování ve vlastním korpusu.** Systematický přehled 155 studií vysokoškolského vzdělávání zjistil, že 117 (75,5 %) uvádělo úspěšnou implementaci, 124 (80,0 %) pokrývalo jen krátkodobý dopad a pouze 23 (14,8 %) informovalo o selháních v oblasti [[ethics|etiky]], rovnosti nebo řízení — nerovnováhu, kterou popisují výše uvedené kontroly, měřenou na vlastní důkazní základně přehledu ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga (2026)]]).
- **Sebeposudky lichotí všem.** Lidé hodnotí své vlastní [[ai-literacy|dovednosti v AI]] zhruba o **40 %** výše, než ukazují měřítka výkonu, a proto jsou průzkumy spokojenosti a sebedůvěry nejslabším důkazem, o který se lze opřít ([[self-report-measures|Sebeposuzovací měření]], [[educational-measurement|Vzdělávací měření]]).
- **Většina produktů, které už ve třídách jsou, nemá vůbec žádné nezávislé důkazy.** [[instruction-partners-ai-in-action-learning-tour-2026|Vzdělávací turné Instruction Partners 2025–26]] profilovalo 20 produktů AI určených studujícím a zjistilo, že ze 16 s kompletními profily mělo jen sedm nezávislý přehled zkoumající [[learning-gains|studijní výsledky]] napříč skupinami studujících v USA; dvě byly studovány jen v zahraničí, u čtyř probíhaly studie a tři se opíraly výhradně o interní data. Autoři argumentují, že nezávislé kauzální studie pokrývající prioritní skupiny by měly být očekáváním u všech produktů určených studujícím — zatím to však není normou pro nástroje, které školy už používají.

## Jak převést zjištění v rozhodnutí

Sled kroků, který ušetří nejvíc zbytečné práce, v tomto pořadí.

1. **Nejdřív si napište svůj výsledek.** Ne „používat AI víc“, ale „studující umí X bez nástroje“. Pokud je vaším výsledkem výkon bez pomoci, pak studie, která měřila výkon s pomocí, je sousední důkaz, ne přímý důkaz.
2. **Najděte srovnání a měřítko** — ve studii nebo v sekci pro praxi na její stránce článku. Pokud chybí jedno z nich, považujte tvrzení za ukázku, ne za zjištění.
3. **Čtěte sekci omezení jako instrukce, ne jako výhrady.** „Jeden kurz, sebeposuzované výsledky, čtyři týdny“ vám přesně říká, které z vašich předpokladů studie nepokrývá.
4. **Zkontrolujte verzi a datum.** Pokud studie používala generaci modelu starou dva roky, plánujte opakované testování, ne předpoklad.
5. **Pojmenujte podmínky, které intervenci umožňují.** Náklady, licence, čas zaměstnanců, pravidla pro data a to, zda studující musí platit za úroveň, která skutečně funguje. Studie je zřídka zachycují, a přesto rozhodují o tom, zda intervence přežije semestr. V [[chick-faculty-development-ethical-ai-2026|studii profesního rozvoje s deseti účastníky]] všichni uvedli, že by AI používali dál, zatímco ti samí lidé popisovali osobní předplatné pro přístup k nástrojům a žádnou časovou podporu pro přepracování, které plánovali.
6. **Pilotujte v malém a měřte podmínku bez podpory.** Krátké pre/post s jedním hodnocením provedeným bez nástroje je lepší než průzkum spokojenosti. Malé a poctivé je lepší než velké a rétorické. Viz [[learning-design|Návrh výuky]], kde to zapadá do návrhu kurzu.
7. **Zapište si datum revize a buďte ochotni tvrzení opustit.** Když je premisa studie schopnost, která už neexistuje, poctivým krokem je tvrzení vyřadit, ne ho donekonečna citovat — stejná disciplína, kterou tato znalostní báze uplatňuje na své vlastní stránky.

## Pojmy, se kterými se ve výzkumu setkáte

Běžné překlady, abyste mohli prolistovat studii nebo stránku prodejce bez metodologického zázemí.

- **Velikost efektu** — jak velký rozdíl byl, na škále, kde 0 znamená nic. Malé hodnoty berte jako „popostrčení“, ne „proměnu“.
- **Statistická významnost** — nepravděpodobné, že jde o pouhou náhodu *v tomto vzorku*. Neříká nic o tom, zda je efekt velký nebo zda nastane ve vaší třídě.
- **Interval spolehlivosti** — rozsah výsledků, které data nedokážou vyloučit. Pokud rozsah zahrnuje nulu, zjištění nemusí být vůbec nic, ať je titulní číslo jakkoli zajímavé.
- **[[meta-analysis-systematic-review|Metaanalýza]]** — studie, která slučuje mnoho studií. Mocná, ale jen tak dobrá, jak dobré je to, co sloučila, a proto se přehledy auditují.
- **Publikační zkreslení** — zajímavé výsledky se publikují a nudné ne, takže průměr literatury vypadá růžověji než realita.
- **Sebeposudek** — lidé popisují sami sebe. Užitečný pro postoje, slabý pro kompetenci nebo chování.
- **Kontrolní skupina** — srovnávací podmínka. Jediná nejdůležitější věc, kterou je třeba hledat.
- **Pre/post** — měření před a po bez srovnávací skupiny. Sugestivní, nikdy průkazné.
- **Analýza podskupin** — výsledky pro část vzorku. Obvykle nedostatečně silná, takže ji berte jako hypotézu.
- **Replikace** — někdo jiný dospěl ke stejnému výsledku. Vzácná, a přesto nejsilnější dostupný důkaz.
- **[[benchmark|Benchmark]]** — pevná sada úloh pro skórování systémů. Skóre se mění, když se cíl posune, takže zkontrolujte datum.

## Kdy i tak zpomalit

- **Tvrzení pochází od prodejce a na prodejcových metrikách.** I to může být informativní — jeden poskytovatel [[intelligent-tutoring|AI doučování]] uvádí metriku angažovanosti kalibrovanou proti lidským expertům na F1 0,83, s vylepšeními vycházejícími z více než 40 experimentů za pět měsíců ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al., 2026]]) — ale konstrukt, hodnotitelé i metrika jsou volbou prodejce. Žádejte srovnávací skupinu a výsledek bez pomoci.
- **Automatické skórování se považuje za vyřešené.** Vysoká shoda s lidskými hodnotiteli je reliabilita, ne kvalita. V jedné studii skórování se lidští hodnotitelé shodli s konsensem více hodnotitelů na zhruba r = 0,88, takže automatická skóre kolem r = 0,85 už byla na vlastním měřicím stropu úlohy ([[know-when-to-trust-ai-scoring-reliability-2026|Kdy věřit AI skórování]]).
- **Seznam literatury nese příliš velkou váhu.** Třicet položek s ověřitelně zfalšovanými bibliografickými údaji bylo potvrzeno ve 14 článcích z [[cs-education|informatického vzdělávání]], všechny z let 2025 a 2026 ([[citation-errors-hallucinations-computing-education-2026|Denny et al., 2026]]). Pokud tvrzení stojí na citaci, zkontrolujte citaci.
- **Nikdo neměřil chování, na kterém závisí vaše politika.** Napříč 493 deduplikovanými záznamy a 14 prioritními studiemi žádná studie neměřila, zda ověření uspělo *a* co studující potom s jeho výsledkem udělal, posuzováno proti nezávislému standardu kvality výstupu ([[verification-quality-reliance-calibration-genai-2026|kalibrace ověřování a spoléhání]]). Politiky kurzů závisí právě na tomto chování.

## Pokud nástroj vyvíjíte nebo kupujete

Stejné kontroly se obracejí v požadavky na design a stránky znalostní báze o hodnocení nesou podrobnosti ([[ai-ed-evaluation|Hodnocení AIED]], [[automated-assessment|Automatické hodnocení]]).

- **Udělejte ze srovnání součást specifikace funkce.** Rozhodněte, co by studující dělal, kdyby nástroj neexistoval, a umějte říct, proč je váš nástroj lepší než to — ne proč je lepší než nic.
- **Měřte podmínku bez podpory.** Pokud je vaším výsledkem učení, zahrňte úlohu dokončenou bez nástroje; výkon s pomocí sám vás bude mást stejně jako vaše kupující.
- **Uveďte, jak byla vaše automatická hodnocení validována** — zlatý standard, kalibrační cíl, kdo rozhodoval o neshodách — a uvádějte to jako reliabilitu, ne kvalitu.
- **Uveďte verzi a datum** v každém tvrzení o účinnosti, protože vaše příští vydání ho zneplatní.
- **Ukažte protiváhy:** náklady na studujícího, [[accessibility|přístupnost]], nakládání s daty a co se stane se studujícími na bezplatné úrovni. Viz [[ai-use-disclosure|Zveřejnění používání AI]], [[privacy|soukromí]] a [[governance|řízení]].

## Pro čtenáře, kteří chtějí důkazy

Výše uvedené kontroly nejsou lidová moudrost; pocházejí z doložených selhání v této literatuře. Tato sekce uchovává podrobnosti pro každého, kdo recenzuje článek, obhajuje rozhodnutí nebo argumentuje, že nástroj by měl být řádně vyhodnocen.

**Selhání validity mají distribuci, ne jen výskyt.** Ve 46 auditovaných studiích [[oneill-presumed-effective-meta-analysis-2026|O'Neilla (2026)]] byl nejčastějším problémem nesoulad závislé proměnné (n = 15) — měřítko nezachycovalo to, co tvrzení uvádělo — následoval nesoulad nezávislé proměnné (n = 11), problémy experimentálního designu (n = 7), problémy s extrakcí dat (n = 6), absence kontrolní skupiny (n = 6) a nenáhodné přidělení do skupin (n = 6). Ze 14 metaanalýz dvanáct zacházelo s více veličinami efektu z téže primární studie jako s nezávislými, což nafukuje zdánlivou důkazní základnu.

**Tvrzení o podskupinách jsou ve studiích, které je činí, obvykle nerozhodnutelná.** [[ai-tutoring-micro-rct-gcse-science-2026|Mikro-RCT v přírodovědě GCSE]] uvádí interakci mezi intervencí a statusem **0,57 bodu (95% CI -2,25 až 3,39)**, se stratifikovanými odhady **g = 0,28 (95% CI -0,04 až 0,59)** pro jednu skupinu a **g = 0,35 (95% CI 0,18 až 0,52)** pro druhou. Interval protínající nulu není zjištění o [[equity-in-ai-education|rovnosti]]; je to otázka pro místní pilot.

**Syntéza může splnit vlastní protokol a přesto sloučit kvalitu bez vážení.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan et al. (2026)]] výslovně uvádějí, že nepoužili žádný formální nástroj hodnocení kvality a za práh rigoróznosti považovali svá kritéria zařazení, takže kvaziexperimentální a randomizovaná studie přispěly stejně — a jejich heterogenita je uváděna jako **I² = 82,98 % u modelu s fixními efekty, ale 15,75 % u modelu s náhodnými efekty**, a proto údaj o heterogenitě citovaný bez svého modelu nemůže říct, jak nekonzistentní korpus je.

**[[assessment-validity|Validace]] automatického úsudku je součástí výsledku.** Shoda s lidskými kodéry je tvrzení o reliabilitě a výše uvedený strop ukazuje, proč není totéž jako kvalita ([[machines-misread-pedagogical-quality|stroje špatně čtou pedagogickou kvalitu]]).

**Stáří nástroje je prvořadé omezení.** Přehled hodnocení s asistencí AI poznamenává, že jeho vlastní zjištění odrážejí konkrétní verze modelů v konkrétních časech a že pohyb oboru činí jakýkoli popis schopností modelů potenciálně zastaralým během měsíců ([[ai-assisted-assessment-instruction-higher-ed-2026|Hodnocení a výuka s asistencí AI ve vysokoškolském vzdělávání]]). Tvrzení ohraničte jejich generací: „[[generative-ai|generativní AI]] zlepšila X“ není přenosné, zatímco „nástroje éry GPT-4, v této úloze, s tímto [[scaffolding|scaffoldingem]]“ je.

**Cíle benchmarků se posouvají**, takže výsledek, který systém dnes saturuje nebo nezvládá, se může s příštím vydáním obrátit; kontroly saturace a kontaminace patří vedle každého tvrzení založeného na benchmarku.

**Číst tuto literaturu spolu s jejími vlastními kritiky je zde běžná praxe.** Kontrolní seznamy pro autory a recenzenty týkající se reportování jsou v [[reporting-interpreting-aied-research|FAQ o reportování a interpretaci výzkumu AI]] a návyky posuzování z této stránky se pojí s [[theory-development-aied|Vývojem teorie v AI ve vzdělávání]], když je tvrzení teoretické, nikoli empirické.

## Krátký kontrolní seznam

1. Vyslovte svůj výsledek v jedné větě, včetně toho, zda je v něm nástroj přítomen.
2. Najděte srovnání. Bez věrohodného srovnání žádné rozhodnutí.
3. Přiřaďte měřítko ke svému tvrzení a upřednostněte výsledek bez pomoci.
4. Číslo zmenšete: čtěte efekt korigovaný na zkreslení, ne titulní.
5. Zkontrolujte verzi modelu a data studie.
6. Čtěte sekci omezení jako instrukce k tomu, co ještě nevíte.
7. Spočítejte náklady: licence, úrovně, čas zaměstnanců, pravidla pro data.
8. Pilotujte v malém s měřítkem bez pomoci a potom rozhodněte.
9. Zapište si datum revize o rok dopředu a buďte připraveni tvrzení vyřadit.

## Časté mylné představy

**„Publikovaná metaanalýza je definitivní důkaz o AI ve vzdělávání.“** Syntézy oboru neprošly auditem. Audit [[oneill-presumed-effective-meta-analysis-2026|O'Neilla (2026)]] **14 recenzovaných metaanalýz** tvrdících, že AI zlepšuje vzdělávání, zjistil, že **žádná** neposkytla validní základ pro takový závěr. Sloučená velikost efektu je jen tak dobrá, jak dobré jsou sloučené studie, a v této literatuře slučování běžně zahrnovalo designy, které nemohly výsledek připsat AI. Než uvedete metaanalytické číslo, zeptejte se, co agregovalo.

**„Větší velikost efektu patří lepší intervenci.“** Často naopak. V kontextu přehledu, který tato stránka dokumentuje, mělo jen **21 %** studií dobře definovanou intervenci, kontrolní skupinu a validní měřítko učení — a uváděná výhoda pro „používání ChatGPT“ vyšla *větší* než pro účelově stavěné [[intelligent-tutoring|inteligentní doučovací systémy]]. Slabě specifikované intervence mají tendenci produkovat nafouknuté efekty, protože srovnání je vágnější a měřítko výsledku volnější. Větší číslo je důvod podívat se na design, ne důvod upřednostnit intervenci.

**„Vyšší známky při používání nástroje znamenají, že nástroj naučil víc.“** V jedné studii matematiky [[k-12|K-12]] studující procvičující s [[conversational-ai|chatbotem pro obecné účely]] získali lepší známky z procvičování a poté dosáhli **zhruba o 17 % horšího** výsledku v hodnocení bez pomoci. Výkon v procvičování měřený za přítomnosti nástroje je nafouknuté měřítko; to bez pomoci je výsledek, a rostlo jen jedno z nich.

**„Pokud je efekt skutečný, na podrobnostech implementace příliš nezáleží.“** Právě ty podrobnosti jsou tím efektem. Studie, která sledovala 30 studujících v jednom kurzu na jedné instituci s verzí nástroje, kterou dnes nikdo nepoužívá, vytvořila zjištění o konfiguraci, která už neexistuje. Specifikace intervence, verze a prostředí jsou součástí tvrzení, ne kontextem kolem něj.

## Související koncepty

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[ai-assisted-educational-research]] — Výzkum vzdělávání s asistencí AI
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]

## Související články

- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forenzní audit 14 metaanalýz AIED
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Efekty AI korigované na publikační zkreslení jsou asi třetinou uváděné velikosti
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Kritéria zařazení jako práh rigoróznosti a heterogenita, která se mění s modelem
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Když se reliabilita automatického skórování setká s měřicím stropem úlohy
- [[verification-quality-reliance-calibration-genai-2026]] — Co literatura o ověřování a spoléhání neměří
- [[citation-errors-hallucinations-computing-education-2026]] — Zfalšované reference, které se v letech 2025–2026 dostaly do tisku
- [[stanford-evidence-base-ai-k12-2026]] — Zisky v procvičování, ztráty u zkoušky: problém odebrání pomoci v matematice K-12
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Efekty podskupin, jejichž intervaly spolehlivosti protínají nulu
- [[chick-faculty-development-ethical-ai-2026]] — Podmínky umožňující použití: signály politiky, osobní předplatné, žádný čas
- [[ai-tutoring-quality-k12-methodologies-2026]] — Prodejcovy metriky se zveřejněnou kalibrací a počtem experimentů
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Zjištění vázaná na verze modelů a pohyb oboru
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Počty nezávislých důkazů u 16 produktů AI určených studujícím, které se už používají
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — Přehled může kvantifikovat zkreslení reportování ve vlastním korpusu
