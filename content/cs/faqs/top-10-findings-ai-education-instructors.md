---
title: "Kterých 10 zjištění z výzkumu AI ve vzdělávání by měli vyučující znát?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-11-14T18:10:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Těchto deset studií se přímo dotýká rozhodnutí, která vyučující dělají: co zadat, jak to hodnotit, které nástroje koupit, jak je stavět a jak poznat, zda došlo k učení. Každý záznam uvádí studii, její výsledek a praxi, kterou mění.

## Deset studií

**1. Běžný přístup k chatbotovi snížil výsledky zkoušky o 17 % ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Téměř 1 000 středoškoláků v Turecku, zhruba v 50 třídách, prošlo třemi matematickými lekcemi se stejným obsahem. Jedna skupina měla při procvičování běžné chatovací okno GPT-4. Druhá měla tutora postaveného na stejném modelu se [[guardrails|zábranami]], které napsali učitelé: nápovědy místo odpovědí, se správným řešením a běžnými chybami vloženými do promptu. Kontrolní skupina AI neměla. Každá lekce skončila [[summative-assessment|zkouškou bez pomůcek]] z podobných úloh, bez nástroje.

Skupina s běžným chatem dosáhla při procvičování o 48 % lepšího výsledku než kontrola a u zkoušky o 17 % horšího. Studenti, kteří se AI nikdy nedotkli, je předčili. Chráněná skupina si při procvičování polepšila o 127 % a u zkoušky skončila na stejné úrovni. Škoda zmizela a na její místo se neobjevila žádná výhoda v učení. Chatlogy rozdíl vysvětlují: nechráněná skupina žádala odpovědi a přestala, zatímco chráněná skupina se o úlohy pokoušela, žádala nápovědy a zlepšovala se už v první lekci.

Pro vyučující není „AI povolena“ zásadou. Rozhraní rozhoduje, zda se nástroj stane kanálem nápověd, nebo strojem na odpovědi, a obecný chatbot je ve výchozím nastavení tím druhým. Chatovací okno ponechané otevřené při procvičování stojí nejvíc ty studenty, kteří se o ně opírají nejvíc.

Vedení školy může stejný výsledek postavit proti nákupnímu argumentu, že silnější model vyřeší pedagogiku. Model byl v obou ramenech stejný.

Související: [[training-ai-tutors-to-guide-rather-than-answer|Jak školit tutora, aby vedl, místo aby odpovídal]]

**2. Tutor postavený na vlastní pedagogice kurzu předčil výuku s aktivním učením, a to v kratším čase ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 je harvardský úvodní kurz fyziky pro studenty přírodních věd. Na podzim 2023 se 194 studentů ve zkříženém pokusu absolvovalo dvě lekce dvakrát, jednou v [[active-learning|aktivním učení]] kurzu a jednou prostřednictvím tutora postaveného pro kurz, s pretesty a posttesty kolem každé verze.

Studenti se s tutorem naučili víc. Medián posttestu byl 4,5 proti 3,5, medián [[learning-gains|přírůstků v učení]] byl více než dvojnásobný oproti kurzu a kvantilové odhady efektu sahaly od 0,73 do 1,3 směrodatné odchylky. S tutorem strávili medián 49 minut proti zhruba 60 minutám ve třídě a 83 % hodnotilo jeho vysvětlení jako stejně dobrá nebo lepší než u svých vyučujících. Hodnocení zapojení a motivace stouplo. Radost a růstové nastavení se nelišily.

Výsledek stojí na designu. Tutor prováděl stejné kroky jako výuka: řešené příklady, stupňované nápovědy, výzvy k sebevysvětlení a řazení, které sleduje výzkum toho, jak se fyzika učí. Srovnání bylo s aktivním učením, ne s přednáškou, takže běžná námitka, že cokoli porazí přednášku, tady neplatí.

Ti, kdo podporují rozvoj vyučujících, tu mají nejsilnější dostupný argument, že návrh tutora je práce na kurikulu, ne nákup. Pro produktové týmy je nárok konkrétní: vyrovnat se výuce s aktivním učením, v kratším čase a se stejnými výukovými kroky.

Související: [[developing-ai-tutor|Osvědčené postupy pro vývoj AI tutora]]

**3. AI tutoring dosáhl úrovně expertních lidských tutorů ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench spojil 2 469 tutoringových sezení s 2 383 dospělými, kteří se připravovali na GRE, pomocí 13 AI tutorů postavených na 12 modelech, živě přítomných lidských tutorů a videokontroly. Výsledkem byl přírůstek v učení u kvantitativních a verbálních úloh.

Souhrnný AI tutoring byl statisticky ekvivalentní expertnímu lidskému tutoringu, v rozmezí čtvrtiny směrodatné odchylky, a oba předčily kontrolu zhruba o šest procentních bodů: 6,86 v Quantitative a 5,47 ve Verbal, tedy zhruba o jeden a půl až dva další správné odpovědi na sekci. AI tutoři byli hodnoceni slaběji v plánování lekcí a ve vytváření cvičných úloh, v čemž byli lidští tutoři lepší.

Pro vedení se při dobře vymezené přípravě na test mění personální aritmetika. Když licencovaný tutor dosáhne lidského tutora na čtvrtině směrodatné odchylky, rozhodnutí je o nákladech a pokrytí a účinnost přestává být otázkou. Výzkumníci si všimnou hranice: ekvivalence není nadřazenost a standardizovaný test je výsledek, který stroj nejsnáze napodobí.

Ti, kdo podporují rozvoj vyučujících, se mohou podívat, kde si lidští tutoři udrželi náskok: v diagnostice toho, co student potřebuje dál, a ve stavbě sekvence, která z toho vyplývá.

Související: [[intelligent-tutoring|Inteligentní tutoring]]

**4. Psaní poznámek porazilo dotazování chatbota, o tři dny později ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes a kolegové provedli předregistrovaný experiment v sedmi anglických středních školách. 405 studentů 10. ročníku prošlo dvěma ze tří podmínek s textem z dějepisu: chatbot, který mohl odpovídat na otázky k textu, psaní poznámek, nebo obojí. O tři dny později skládali zkoušky bez pomůcek z doslovného zapamatování, porozumění a [[retrieval-spacing-interleaving|volného vybavení]].

Poznámky porazily chatbota ve všech třech měřítkách, zhruba o půl směrodatné odchylky v zapamatování a téměř čtyři desetiny v porozumění. Poznámky plus chatbot porazily samotného chatbota ve dvou ze tří měřítek a ve volném vybavení nic nepřinesly a samotné poznámky byly silnější než kombinace. V kombinované podmínce zhruba čtvrtina studentů opsala výstup chatbota do poznámek. Studenti přesto hodnotili chatbota jako snazší, užitečnější a příjemnější než psaní.

Vyučující tu mají přímý důkaz, že asistent pro čtení může nahradit čtení. Pokud smyslem zadání je porozumět textu, [[writing-education|psaní je porozumění]] a nástroj, který odpovídá na otázky k textu, odstraňuje procvičování. Poznámky zachovejte. Pokud chatbota povolíte, žádejte něco, co dodat nedokáže: srovnání, zpochybnění textu nebo shrnutí napsané po zavření nástroje.

Související: [[ai-support-reading-comprehension|Podpora AI pro porozumění textu]]

**5. Čas učení klesl o 27 % a zapamatování s ním ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Desetiletý panel z platformy ALEKS, pokrývající 3,2 milionu interakcí učení a 12,2 milionu dob odezvy v rozřazovacím hodnocení, ukazuje, co studenti dělali poté, co přišel ChatGPT. Design srovnává typy úloh, které lze vložit do chatbota (textové slovní úlohy), s typy, které vyžadují manipulaci s grafem uvnitř platformy, v rámci stejného kurikula.

Čas u úloh náchylných na AI klesl u vysokoškoláků o 2,8 % za čtvrtletí, o 26,9 % za jedenáct čtvrtletí. U středoškoláků klesl o 31,3 %, na druhém stupni o 9,0 % a u páťáků se neprojevil žádný zjistitelný rozdíl. Pokles zcela zmizel pod [[remote-proctoring|dohledem]], což je rozhodující test: když nástroj nebyl dostupný, studenti trávili stejný čas jako dřív. Pod dohledem vykazovaly položky zapamatování kumulativní pokles šance na správnou odpověď o 25 %.

Věkový gradient je designovým signálem pro produktové týmy. Proměnnou, která se hýbe, je čas procvičování a hýbe se nejvíc tam, kde je úloha nejsnazší předat. Pro vyučující je čas strávený úlohou levným včasným varováním: kohorta, která stejné úlohy dokončí mnohem rychleji, se pravděpodobně neučí totéž.

Související: [[reducing-over-reliance|Jak omezit nadměrnou závislost na AI]]

**6. Známky z domácích úkolů stouply o 18 %, zatímco zkoušky bez pomůcek klesly o 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26 811 studentů 7. až 12. ročníku v Číně, sledovaných 30 měsíců, s generativní AI zaváděnou v různých kohortách v různou dobu. Známky z domácích úkolů stouply o 18 % a doba dokončení klesla o 30 %, z 64 na 45 minut. Měsíční zkoušky bez pomůcek klesly během šesti měsíců o 20 % výchozího průměru a přijímací zkoušky s vysokými důsledky klesly po zhruba dvou letech o 18 % až 24 %.

Načasování ukazuje mechanismus. Zhruba 81 % uživatelů AI dokončilo domácí úkol rychleji než nejrychlejší student bez AI a pak si u zkoušek vedlo špatně. Menšina, která udržela dobu domácích úkolů srovnatelnou s neuživateli, se učila stejně dobře jako kdokoli jiný. Ztráty byly největší ve společenských vědách, potom v STEM, potom v jazycích, a větší u vysoce výkonných studentů.

Dokončení domácích úkolů je špatným zástupcem výkonu a rozdíl se objeví během šesti měsíců, dlouho předtím, než se pohnuly výsledky přijímacích zkoušek. Vyučující mohou jednat dřív: udržet známkované důkazy bez pomůcek a domácí práci brát jako procvičování, jehož doba dokončení je viditelná.

Související: [[checking-whether-educational-ai-works|Jak ověřit, zda vzdělávací AI funguje]]

**7. Každý testovaný tutor selhal v pedagogice a v rozhovoru selhával hůř ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors testoval 11 tutorů, od open-weight modelů od 3,8B do 72B plus GPT-5-mini, v matematice, fyzice a chemii, proti taxonomii 11 dimenzí a 48 dílčích rizik čerpaných z [[learning-theories|věd o učení]]. Jeho kategorie selhání jsou pedagogické: nadměrné vyzrazování odpovědí, posilování mylných představ a opouštění [[scaffolding|scaffoldingu]]. Každé z nich vypadá v danou chvíli užitečně, protože student rychle dostane správnou odpověď.

Každý model vykazoval širokou pedagogickou škodu. Větší modely nebyly spolehlivě bezpečnější a obecná užitečnost korelovala s pedagogickou bezpečností jen slabě. Míra škod stoupla ze 17,7 % v jednostupňových výměnách na 77,8 % v rozhovorech o pěti až osmi tazích.

Jednostupňová hodnocení nejsou důkazem bezpečného tutora a produktové týmy by podle toho měly navrhnout testování. Model, který projde jednorázovou kontrolou užitečnosti a bezpečnosti, může selhat ve většině skutečného rozhovoru. Vedení, které kupuje tutora, potřebuje tři odpovědi: zadržuje řešení, zkoumá mylné představy a vydrží celé sezení. Ukázka od dodavatele s jednou výměnou neposkytne ani jednu.

Související: [[pedagogical-safety|Pedagogická bezpečnost]]

**8. Případy nevhodného jednání stojí na slabších důkazech, než naznačují obvinění ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz a kolegové kódovali každý případ nevhodného jednání s generativní AI na jedné australské univerzitě za tři roky: 1 162 případů s 1 855 důkazními položkami, každou hodnocenou z hlediska relevance, věrohodnosti a inferenční síly.

Obvinění z generativní AI stoupla z 11,9 % případů nevhodného jednání v roce 2023 na 36,9 % v roce 2025, zatímco celkový objem případů zůstal stejný. 58 případů, tedy 5 % celkového počtu případů GenAI, stálo pouze na tvrzení bez jediné důkazní položky. Výstupy detektorů byly vzácné a slabé: zprávy Turnitin nebo jiné podobnostní zprávy neměly v 73 položkách žádnou inferenční sílu a samostatné výstupy GPTZero měly v 69 nízkou věrohodnost. Nejsilnější důkazy přišly z vyšetřování, ne z obvinění, s ústními přiznáními v 410 položkách, z nichž 97,2 % bylo silných. [[hallucination-risk|Vymyšlené odkazy]] byly největším strukturálním posunem, 22,3 % položek, s růstem z 10,4 % v roce 2023 na 30,0 % v roce 2025.

Pro vedení je ponaučení procesní. Případ postavený na skóre detektoru nepřežije odvolání a vyšetřování, které začíná nástrojem místo rozhovoru, vytváří slabé spisy. Vyučující mohou jednat podle artefaktu, který se stále objevuje: vymyšlené odkazy jsou běžné a kontrola odkazů je levná.

Související: [[should-we-use-ai-detectors|Používání AI detektorů]]

**9. Sebedůvěra učitelů v jejich AI gramotnost sotva sleduje jejich měřenou dovednost ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 učitelů K-12 vyplnilo sebevýpovědní dotazník AI gramotnosti a objektivní měření výkonu postavené na stejném rámci: Concept, Use, Evaluate a Ethics. Korelace mezi oběma se pohybovaly od 0,07 do 0,24.

Analýza latentních profilů našla šest skupin. 43 učitelů hodnotilo sebe trvale vysoko, přitom dosahovalo nižších skóre v objektivním měření. 59 jich ukázalo opak. Zbytek se shlukl kolem průměru nebo se rozdělil podle předchozích zkušeností s AI.

Pro rozvoj vyučujících není [[self-assessment|sebehodnocení]] analýzou potřeb. Dotazník, který se učitelů ptá, jak si jsou jisti, přeplatí ty jisté a podpoří málo ty tiché, a tyto skupiny nejsou totéž jako kompetentní a ti, kdo bojují. Krátké výkonové úlohy je oddělí. Výzkumníci by měli nízké korelace brát jako varování pro měření: každá studie [[ai-literacy|AI gramotnosti]] postavená na [[self-report-measures|sebevýpovědi]] měří sebedůvěru.

Související: [[faculty-development-ai|Rozvoj vyučujících, který mění praxi]]

**10. AI známkování znevýhodňuje studenty, kteří píší hůř ([[ai-scoring-language-bias-physics|Feser a Tschisgale, 2026]]).**

Fyzikální vysvětlení 116 středoškoláků hodnotily 9 přístupů strojového učení a 2 přístupy velkých jazykových modelů; poté byla srovnána s hodnocením lidských expertů. Shoda s experty se pohybovala od 67,2 % do 78,4 %, což zní přijatelně, dokud se chyby nerozloží.

Každý přístup podcenil konceptuální porozumění u vysvětlení nižší jazykové kvality. Zkreslení šlo jedním směrem: silnější psaní nebylo nadhodnoceno. Vzorec odpovídá tomu, co bylo popsáno u samotných učitelů fyziky, což naznačuje, že obtíž spočívá ve vyvozování porozumění z prózy, u lidí stejně jako u modelů.

Pracovníci v oblasti hodnocení a produktové týmy musí vykazovat míru podcenění podle jazykové kvality, ne jen celkovou shodu s experty, protože průměr skrývá skupinu, která utrpí škodu. Kdokoli hodnotí [[multilingual-learning|vícejazyčné studenty]], měl by odpovědi s nízkou jazykovou kvalitou posílat k [[human-in-the-loop-ai|lidskému přezkoumání]] nebo navrhovat úlohy, které na próze nezávisí.

Související: [[ai-grading-fairness-reliability|Spravedlivé a spolehlivé AI známkování]]

## Co těch deset má společného

Tři ze studií měří dvě věci najednou: co studenti vytvoří s nástrojem a co dokážou bez něj. Bastani, Rismanchian a Strömberg všichni zjišťují, že se obě rozcházejí, a jako učení se chová jen měření bez pomoci. Čtyři stojí na designové volbě, ne na modelu: zábrany u Bastaniho, pedagogika zabudovaná do Kestinova tutora, psaní, které Kreijkes v úloze zachoval, a vícetahové prostředí, které testoval SafeTutors. Tři zkoumají systém kolem nástroje, totiž důkazy v případech nevhodného jednání, způsob měření kompetence učitelů a jazykové předpoklady v [[automated-assessment|automatizovaném hodnocení]]. StudentBench stanovuje paritu u standardizovaného testu, tedy u jediného výsledku, který stroj nejsnáze napodobí. Bastani se objevuje ve dvou skupinách, protože dodává jak mezeru, tak designovou opravu.

Zůstávají tři otázky, které stojí za to nést do každého rozhodnutí o kurzu nebo produktu. Co má student umět, když nástroj zmizí? Co po něm aktivita žádá, dokud je otevřený? Jaký důkaz by rozdíl ukázal o měsíc později?

## Kde jsou tyto důkazy slabé

Tyto studie sdílejí [[limitations-in-aied-research|omezení výzkumu AIEd]] jako celku. Dvě z největších se odehrávají v Turecku a Číně, tři ve Spojených státech, jedna v Anglii, jedna v Austrálii a studie hodnocení v Německu. Jedna je benchmarkem komerčních modelů, ne terénní studií. Dominuje středoškolská matematika, následuje fyzika a informatika. Velmi málo studií se zabývá [[humanities-education|psaním v humanitních oborech]] ve velkém měřítku, odborným vzděláváním nebo studenty se zdravotním postižením.

Jen čínský panel a panel ALEKS sledují studenty déle než dva roky po zavedení a čínští autoři tvrdí, že kratší studie systematicky podceňují dlouhodobý negativní dopad. Šest z těchto výsledků jsou preprinty nebo pracovní dokumenty, které neprošly recenzním řízením: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang a Feser. Studie Bastani, Kestin, Kreijkes a Munoz vyšly v recenzovaných časopisech.

Nulové a negativní výsledky jsou v této literatuře vzácné, takže publikovaná evidence pravděpodobně přeceňuje, jak často AI pomáhá. Tyto studie jsou nejlepším současným vodítkem pro deset rozhodnutí a žádná z nich otázku neuzavírá.

## Kam dál

[[does-ai-help-students-learn|Pomáhá AI studentům se učit?]] je širší přehled důkazů za těmito tvrzeními. [[redesign-assessment-ai-era|Jak má být hodnocení přepracováno pro éru AI?]] posouvá dál polovinu věnovanou hodnocení. Pro případy integrity pokrývá [[reduce-ai-cheating|Jak snížit podvádění s AI?]] procesní důkazy a zásady. Pro zjištění o profesním rozvoji je [[faculty-ai-competencies|Jaké AI kompetence potřebují vyučující?]] doprovodnou stránkou a [[addressing-common-misconceptions-ai-education|Jak můžeme řešit běžné mylné představy o AI ve vzdělávání?]] se zabývá námitkami, které pravděpodobně uslyšíte od kolegů.
