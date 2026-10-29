---
title: "Jaké jsou osvědčené postupy pro reportování a interpretaci výzkumu AI ve vzdělávání?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T11:57:27-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

V abstraktu vašeho návrhu stojí hlavní číslo a recenzent se právě zeptal, co vlastně dělala kontrolní skupina. Nebo jste tím recenzentem a držíte metaanalýzu, jejíž sdružený efekt je 0,67 a jejíž sekce o metodách má jeden a půl strany. Nebo vaše katedra píše pokyny, jak mají zaměstnanci reportovat studie o AI, a chce něco konkrétnějšího než „dodržujte standardy“.

O většině těchto případů rozhoduje šest opomenutí: který systém AI byl použit, na co byl nakonfigurován, jakou pedagogickou roli sehrál, zda lidé navrhli nebo revidovali jeho výstup, co měřítko výsledku skutečně zachytilo a co autoři udělali s vychýlením, náklady a omezeními. „Nehodnotitelné“ je poctivý verdikt, když chybějí, a je to jiný verdikt než „vyvrácené“.

## Stručně

**1.** Popište AI jako léčbu, ne jako dodavatele. Model, verze, konfigurace, prompty, role a to, kdo výstup navrhl nebo revidoval.

**2.** Pojmenujte pedagogické zdůvodnění a aktivní srovnání. Název produktu není metoda a dosavadní praxe není spravedlivá kontrola.

**3.** Sladťte měřítko s tvrzením, včetně toho, zda byl výsledek odložený a bez podpory.

**4.** Reportujte nejistotu, kterou vaše analýza skutečně má: závislé efekty, rozptyl mezi studiemi, predikční intervaly, velikosti podskupin, publikační vychýlení.

**5.** Ověřte každý automatický úsudek, s pojmenovaným zlatým standardem a pojmenovaným rozhodčím.

**6.** Reportujte protiváhy: správu, výpočetní náklady, vlastní použití AI, nulové výsledky a jen takové citace, které jste si ověřili.

## Popište AI jako léčbu, kterou někdo dokáže znovu sestavit

Toto je kontrola, na které selhává většina podání. Rámec RAISE (*Reporting AI Studies in Education*, Allison 2026) je kontrolní seznam o 30 položkách v deseti tematických doménách a jeho diagnostické tvrzení je konkrétní: podání rutinně opomíjejí, který model byl použit, jak byl nakonfigurován, jakou roli sehrál a zda lidské aktéry jeho výstupy navrhly nebo revidovaly. Recenzentům pak zůstanou čtyři nezodpověditelné otázky. Co přesně AI dělala? Byla nezbytná? Je to replikovatelné? Jsou tvrzení o učení uvěřitelná?

RAISE probíhá od vzdělávacího zdůvodnění přes specifikaci na úrovni API, interakci žáka s AI, přístupnost a kulturní vhodnost, účastníky a prostředí, zapojení lidí, design, etiku, transparentnost a reprodukovatelnost až k omezením. Jeho doprovodná Matice etiky a rizik pokrývá rizika pro [[agency|agenturnost]] žáka, [[equity-in-ai-education|rovnost]], [[governance|správu]] dat a algoritmickou transparentnost. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah a Gašević (2026)]] nabízejí zjednodušenou alternativu. TEP-AIED skládá transparentnost, etiku a pedagogiku do jedné vzájemně závislé struktury, dodává tabulku pokynů mapovanou na sedm sekcí článku a žádá autory, aby přidali podsekci Metody nazvanou „Transparency, Ethics, and Pedagogy Considerations“. Jejich důvod je praktický: RAISE je vyčerpávající a pro rutinní empirické použití příliš jemný. Uvedení spadá pod [[ai-use-disclosure]] a je tím, co činí tvrzení o [[privacy|soukromí]] a [[ethics|etice]] ověřitelnými.

Vzdělávací zdůvodnění je v RAISE na prvním místě, protože AI není neutrální nástroj. Hodnota závisí na sladění učebního problému, teoretického zdůvodnění a mapování cílů na měřítka výsledků. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] zjistil, že všechny kromě dvou ze 14 auditovaných metaanalýz definovaly léčbu jako nástroj, ChatGPT nebo GenAI nebo obecně „AI“. Název produktu není [[pedagogy|pedagogika]]. Pojímat vystavení ChatGPT jako jednu společnou intervenci je srovnatelné s metaanalýzou efektů „papíru“.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] říkají totéž pro primární studie. Při auditu podmnožiny srovnání stojících za jednou výraznou metaanalýzou zjistili, že jen 21 % mělo dobře definovanou léčbu, kontrolní skupinu a platné měřítko učení. Reportovaná velikost efektu (g = 0,7) navíc převyšovala velikost efektu [[intelligent-tutoring|inteligentních tutoringových systémů]] postavených pro tento účel (0,66), a tato mezera je varovným signálem: léčba, která překonává tutoring postavený pro tento účel, je pravděpodobně svazek různých věcí pod jedním štítkem.

Test je jedna otázka: dokázal by kompetentní čtenář znovu sestavit vaši intervenci jen ze sekce o metodách a dostat totéž?

## Rozhodněte, co vám vaše měřítko dovoluje tvrdit

V O'Neillově auditu důkazů u 46 náhodně vybraných primárních studií vykazovalo 28 (61 %) obavy o validitu. Nejčastější byl nesoulad závislé proměnné (n = 15), následoval nesoulad nezávislé proměnné (n = 11), problémy experimentálního designu (n = 7), problémy s extrakcí dat (n = 6), nepřítomnost kontrolní skupiny (n = 6) a nenáhodné přiřazení do skupin (n = 6). Vícerozměrné výsledky byly rutinně slučovány, jako by byly zaměnitelné, přičemž testová skóre, kvalita domácích úkolů, [[motivation|motivace]], [[self-efficacy|self-efficacy]], postoje a [[student-engagement|angažovanost]] se slily do jednoho čísla „akademického výkonu“.

Tomu zabrání dva reportovací návyky. Uveďte, který konstrukt nástroj měří a že byl validován pro danou populaci; [[self-report-measures|měřítka sebevýpovědi]] ukazují, kde se měřítka založená na vnímání rozcházejí s chováním, a [[assessment-validity]] pokrývá validitu konstruktu. Potom reportujte výsledek, který nezávisí na tom, čemu žák ohledně pomůcky věří. Okamžitý výkon v úloze s podporou není [[learning-gains|přírůstek učení]] a [[cognitive-offloading|kognitivní odklánění]] je mechanismus, který obojí nejpravděpodobněji odděluje. [[verification-quality-reliance-calibration-genai-2026|Mini review z roku 2026 se 493 záznamy a 14 prioritními studiemi]] nezjistila žádnou, která by měřila úspěšnost ověřování a následné rozhodnutí o spoléhání společně proti nezávisle rozhodnutému standardu kvality výstupu, a jen málo z nich hledělo za okamžitý výkon k odloženému zapamatování nebo [[transfer-of-learning|transferu]].

Strop uveďte výslovně v diskusi. Studie, která měřila kvíz vyplněný s otevřeným nástrojem, může podpořit tvrzení o výkonu s podporou. Nemůže podpořit tvrzení o tom, co se studenti naučili, a ta věta stojí jeden řádek.

## Reportujte nejistotu, kterou vaše analýza skutečně má

U syntéz reportujte zacházení se závislými efekty, rozptyl mezi studiemi, predikční intervaly a posouzení publikačního vychýlení. Samotné I² tu práci neudělá. O'Neill zjistil, že reportovaná heterogenita byla závažná všude, kde byla uvedena, od 77,2 % do 94,4 % napříč 13 metaanalýzami, přičemž u 12 byla nad 80 %, a nikdy se nevyřešila: žádná analýza moderátorů nedosáhla minimální velikosti podskupiny deseti studií. Dvanáct metaanalýz považovalo závislé velikosti efektů z téže studie za nezávislé, což nafukuje zdánlivý důkaz. Jen čtyři reportovaly rozptyl mezi studiemi (τ²) a jen dvě predikční interval, přičemž oba intervaly zahrnovaly nulu. Publikační vychýlení nebylo v celém souboru platně posouzeno nikde.

Údaje o heterogenitě potřebují připojený model, protože I² závisí na přesnosti. [[limitations-in-aied-research|Omezení ve výzkumu AIEd]] dokumentují jednu syntézu s I² = 82,98 % u modelu s pevnými efekty a 15,75 % u náhodných efektů. Čtenář, který dostane jen první číslo, nemůže poznat, jak nekonzistentní korpus je. Reportujte τ² a vedle něj predikční interval, což je také konvence, kterou žádá [[meta-analysis-systematic-review|literatura o přehledech]].

Potom si slevte ze svého vlastního hlavního čísla. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] sloučili 1 840 velikostí efektů ze 67 metaanalýz a zjistili, že po zmodelování publikačního vychýlení průměrný efekt klesá na zhruba jednu třetinu publikovaného mediánu (SMD = 0,196 proti 0,67), s predikčním intervalem od -1,521 do +1,908. Tento interval sahá od podstatné škody k podstatnému prospěchu u hypotetické nové studie. Je to nejužitečnější číslo v článku a to, které nejpravděpodobněji vypadne z abstraktu.

## Řekněte, jak daleko tvrzení dojde

Spravedlnost a rozsah selhávají stejně: velký efekt, který znamená méně, než se zdá. Jedenáct ze 14 auditovaných metaanalýz nestanovilo žádnou hranici populace, takže „studenti“ zahrnovali děti až po lékaře ve specializační přípravě. Jediný kurz, instituce, obor nebo země neopravňují k obecnému tvrzení a výsledky pro jeden nástroj se zřídka přenášejí na jiný.

Většinu velkých efektů vysvětlují tři vysvětlení a každé je reportovatelné. Jedním je novost. Dalším je čas navíc strávený úlohou. Třetím je srovnávací podmínka, která dostala dosavadní výuku, a ne aktivní kontrolu. Reportujte, co kontrola skutečně dělala, kolik času každá větev strávila a jak nový nástroj byl. Uveďte také hranici populace, protože efekty se mezi skupinami žáků liší a neuvedená hranice je to, co dovoluje jednomu sdruženému číslu zastupovat je všechny; [[differential-effects-across-learner-groups|Rozdílné efekty mezi skupinami žáků]] vykládají tuto variaci.

Považujte nástroj za pohyblivý cíl. Proprietární systémy se mění bez oznámení, takže zjištění je vázáno na verzi modelu a [[benchmark]], který nadchl v jednom vydání, nemusí platit v dalším. Verze a datum přístupu patří do sekce o metodách právě proto, a ne jen kvůli replikovatelnosti.

## Ověřte automatické úsudky

[[ai-ed-evaluation|Evaluace v AIEd]] stále častěji deleguje skórování na modely, což činí z validační procedury součást výsledku, a ne přílohu. Khan Academy ve svém popisu metrik [[intelligent-tutoring|AI tutora]] uvádí, že kognitivní angažovanost skóruje posuzovatel na bázi [[llm|LLM]] kalibrovaný proti lidským pedagogickým expertům na F1 0,83, a že pohyby metrik vzešly z více než 40 živých experimentů za pět měsíců, a ne z offline evaluace ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] ukazují, že neshoda mezi člověkem a strojem o kvalitě [[formative-assessment|otázek pretestu]] je systematická, a ne náhodná, a že operacionalizace rubriky záleží víc než promptování začínající zdůvodněním.

Shoda s lidskými kodéry je jiná věc než kvalita a reportovat ji, jako by byla kvalitou, je terčem recenzentů. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] nechali nezávislého experta naslepo posoudit 855 párových sad kódů bez znalosti zdroje. Shoda člověka s LLM vyšla na průměrný Jaccard 0,30 proti 0,52 u shody člověka s člověkem, zatímco slepý ověřovatel preferoval lidské a strojové kódování v nerozlišitelné míře (51,5 % proti 48,5 %, p = 0,537). Reportujte kalibrační cíl, zlatý standard a to, kdo rozhodoval o neshodě. Tyto tři položky jsou tím, co čtenáři umožní rozhodnout, jakou váhu automatické skóre unese.

## Uveďte náklady a vlastní použití

Přehled všech konferenčních článků AIED 2025 našel vzorec přijetí LLM bez uvedení: většina projektů LLM používala a jen hrstka reportovala spotřebu zdrojů nebo uhlíkovou stopu. Ten článek dodává open-source metodu s měřicími nástroji pro lokální i cloudový hardware a vzorec pro odhad výpočetní zátěže modelů na špičkové úrovni, jejichž počty parametrů nejsou zveřejněny. Jeho argument je, že nereportovat tyto náklady je samo o sobě etický problém. Správa dat, souhlas, přístupnost a kulturní vhodnost patří do stejného odstavce (položky RAISE; [[universal-design-for-learning]], [[accessibility]]). [[equity-ethics-pedagogical-safety-research]] nese plnější zpracování.

Vaše vlastní použití AI ve výzkumném procesu potřebuje stejné uvedení. [[prisma-llm-ai-assisted-systematic-reviews-2026|Analýza PRISMA-LLM od Zabalety a Lin]] u 888 článků o automatizaci přehledů ukazuje, jak nerovnoměrné toto reportování je. Od roku 2023 neuvedlo 38,0 % článků o softwaru a produktech žádnou evaluaci, proti 9,3 % článků o LLM. Průměrná bohatost reportování byla 6,3 u článků o LLM a 3,3 u článků o softwaru a produktech. 84,1 % použití LLM se opíralo o proprietární nebo hostované systémy a jen 4,9 % o otevřené váhy. Jejich rámec odděluje uvedení implementace od evaluace citlivé na důsledky v pěti úrovních uvedení, což je použitelná šablona pro popis toho, co nástroj v přehledu dělal.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai a Chan (2026)]] dodávají pohled ze strany autora. Z 28 doktorandů jich 27 používalo GenAI při vytváření nápadů, rešerši literatury, vysvětlování, zpracování dat, programování, [[writing-education|akademickém psaní]], editaci a překladu. Použití kalibrovali podle závažnosti a oborových norem. Zásady jejich institucí se týkaly výuky a hodnocení, a ne výzkumné praxe, což nechává rozhodnutí o reportování na autorovi.

## Publikujte nulu a ověřte každou citaci

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] ověřili 30 zfabrikovaných referencí ve 14 článcích, přičemž jejich počet na jednom technickém sympoziu vzrostl z 3 v roce 2025 na 17 v roce 2026, tedy 2,3 % tamějších konferenčních článků. Návrh s podporou LLM činí vymyšlenou, ale uvěřitelnou citaci levnou na vyrobení, a proto se kontrola musí dít před podáním, a ne po přijetí.

Protiváhy v tomto auditu záleží, když ho citujete. Většina označených referencí byla neškodná: 229 byly neshody v metadatech ACM, kde PDF bylo správné, a 188 byly platné bibliografické varianty. Počet zfabrikovaných je záměrně dolní mez a neškodná většina není zaokrouhlovací chyba. Ověřte každou položku, kterou nemůžete osobně zkontrolovat.

Reportování nulových a negativních zjištění je druhá polovina poctivé důkazní základny. Bartoš et al. našli silný důkaz o potlačených nulových výsledcích (každý Eggerův test p < 0,0001) a extrémní heterogenitu (τ = 0,869), přičemž žádná podskupina podle výsledku, oboru, úrovně ani role AI nevykazovala konzistentní zisky. Zjistili také žádný rozdíl mezi studiemi publikovanými před lednem 2023 a po něm, což podkopává tvrzení, že moderní generativní nástroje specificky přinášejí zisky.

## V čem se výzkumníci v tomto mýlí

**„Velikost efektu je vlastnost modality.“** Neexistuje žádný efekt AI ve vzdělávání, který by se dal reportovat. Všechny kromě dvou auditovaných metaanalýz definovaly léčbu názvem nástroje, jen 21 % auditovaných srovnání mělo definovanou léčbu, kontrolu a platné měřítko a sdružené g = 0,7 sedělo nad úrovní inteligentního tutoringu postaveného pro tento účel, který měl 0,66. Velikost efektu patří designu, populaci a měřicí příležitosti.

**„Sdružený průměr je to, co se stane mým studentům.“** Průměr popisuje soubor studií a nic v něm nefixuje jedinou konkrétní třídu. Průměr korigovaný na vychýlení je SMD = 0,196 a jeho predikční interval sahá od -1,521 do +1,908. Reportovaná heterogenita je nad 80 % u 12 ze 13 metaanalýz a žádná podskupina ve větším souboru nevykazovala konzistentní zisky. Změnu na úrovni studenta z žádného z těch čísel identifikovat nelze.

**„Nulový výsledek znamená, že nástroj nefunguje.“** Nula je tvrzení o designu při dané přesnosti a nepřítomnost detekovatelného efektu v jedné studii je fakt o této studii. SMD = 0,196 korigované na vychýlení vzešlo z literatury, v níž byl každý Eggerův test signifikantní, takže obhajitelné čtení korpusu je malý a nejistý průměr. Ani žádná podskupina podle výsledku, oboru, úrovně nebo role AI ve větším souboru nevykazovala konzistentní zisky. Dokumentovaným problémem v této literatuře je potlačování.

**„Jedna studie to rozhodne.“** Základní míry mluví jinak. 61 % prověřených primárních studií mělo obavy o validitu, jeden kurz nebo instituce neopravňují k obecnému tvrzení a proprietární systém je pohyblivý cíl vázaný na verzi modelu. Jedna studie je datový bod s připojeným designem.

**„Vysoká shoda s lidskými kodéry znamená, že model skóruje správnou věc.“** Shoda člověka s LLM byla 0,30 proti 0,52 u shody člověka s člověkem a slepý ověřovatel nedokázal obě sady kódů rozlišit, 51,5 % proti 48,5 %. Shoda měří konzistenci s kodérem a kvalita je samostatná otázka, která potřebuje zlatý standard a rozhodčího.

## Námitky, které uslyšíte

**„Recenzenti chtějí novost, ne detaily metody.“** Časopisy se ubírají opačným směrem. RAISE a TEP-AIED dávají editorům konstrukt, který mohou vyžadovat, a podsekce Metody v TEP-AIED je vstupním bodem s nízkým třením. Detail metody je to, co z nehodnotitelného článku činí citovatelný.

**„Nemáme na to místo.“** Pět úrovní uvedení jsou úrovně reportování, a ne úrovně rizika, takže hloubka evaluace může být jedna nebo dvě věty. Verze, prompty a role se vejdou do krátkého odstavce. Náklady a správa se vejdou do věty v omezeních.

**„Všichni to tak reportují.“** Čísla říkají, že problémem je norma: 61 % prověřených primárních studií s obavami o validitu, 12 ze 13 metaanalýz nad 80 % heterogenity, 38,0 % článků o softwaru a produktech bez jakékoli evaluace.

**„Náš nástroj je proprietární, takže model reportovat nemůžeme.“** Reportujte verzi, datum přístupu, konfiguraci, prompty, které jste zadali, roli a guardrails. Pokud dodavatel nechce nic říct, patří toto omezení do omezení jako hranice tvrzení.

**„Reportování nul nám uškodí.“** Potlačené nuly jsou dokumentovaným mechanismem, který stojí za průměrem SMD = 0,196 korigovaným na vychýlení. Právě jejich publikování udržuje váš pozitivní výsledek čitelným.

## Co udělat tento týden

**1.** Přečtěte abstrakt proti sekci o metodách a vymažte každé tvrzení, které metoda nemůže podepřít. Jedna věta o stropu měřítka obvykle stačí.

**2.** Přidejte odstavec se specifikací: model, verze, datum přístupu, konfigurace, prompty, role a to, kdo výstup navrhl nebo revidoval.

**3.** Vytáhněte τ², predikční interval a posouzení publikačního vychýlení z přílohy do výsledků, nebo jasně napište, že jste je nespočítali.

**4.** Napište hranici populace a kontrolní podmínku do prohlášení o designu, včetně toho, kolik času každá větev strávila.

**5.** Ověřte každou referenci, kterou jste osobně nečetli, a začněte polem autorů.

## Kam dál

[[research-methods-aied|Výzkumné metody v AI ve vzdělávání]] pokrývají designová rozhodnutí, která stojí pod těmito reportovacími rozhodnutími, a [[limitations-in-aied-research|Omezení ve výzkumu AIEd]] jsou katalogem způsobů selhání s připojenými čísly. [[interpreting-and-applying-aied-research|Interpretace a aplikace výzkumu AIEd]] je čtenářská strana stejného problému, [[does-ai-help-students-learn|důkazy o trvalém učení]] jsou to, k čemu většina těchto měřítek směřuje, [[evaluating-ai-interventions-methods]] pokrývá měřítka a srovnávací designy a [[checking-whether-educational-ai-works]] je kratší verze otázky. Mezery, které tato literatura nezaplnila, najdete v [[research-gaps-aied]].
