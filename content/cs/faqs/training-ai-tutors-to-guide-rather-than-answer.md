---
title: "Jak naučit AI tutora, aby studenty vedl, místo aby jim odpovídal?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T11:57:27-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
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

Váš tutor prozradí odpověď. Demo to neukázalo, protože otázka byla snadná a student spolupracoval. Logy z pilotu to ukazují: student se zeptá dvakrát, model zopakuje postup a pak to vyřeší. Učitel se podívá na sezení a řekne, že je to chatbot s přátelským hlasem. Teď rozhodujete, zda dát čtvrtinu inženýrského času do post-tréninku, nebo to vydat s lepším systémovým promptem.

Krátká odpověď: promptování neodstraní tah k odpovídání, protože vstřícnost je to, k čemu byl základní model trénován. Pokud je vodící chování produkt, musí se natrénovat, a proměnná, která rozhoduje o výsledku, je **odměna**. Napište odměnu proti benchmarku, dejte do trénovacích dat uvažování na úrovni kroků a hodnoťte trénink podle dalšího pedagogického kroku, který model zvolí.

## Stručně

**1.** Otestujte, zda prompt vydrží tlak, než usoudíte, že promptování stačí. Souhlas s chybným studentem je vzorec selhání, který hledáte.

**2.** Napište odměnu jako specifikaci chování, které chcete, s vyloučením tvrdých negativů, a pak zkontrolujte, co vlastně optimalizovala.

**3.** Trénujte na záznamech na úrovni kroků. Korpus dvojic otázka a správná odpověď nemůže model naučit vidět, kde student udělal chybu.

**4.** Dejte přednost posilovanému učení před imitací, když jde o úsudek, a uchovejte skóre mezistupňů.

**5.** Udělejte odměnu dost hustou, aby se aktivovala u většiny odpovědí, a vyhodnocení spouštějte na celých konverzacích.

## Zjistěte, zda prompt vydrží tlak

[[prompt-engineering|Promptování]] a obecný trénink sladění nechávají tah k souhlasu. [[contextual-sycophancy-ai-literacy|Kontextuální patolízalství]] přetrvává po obojím a chyby studentů se stále přenášejí do rad AI.

EduFrameTrap dodává detail, který je důležitý pro produktové rozhodnutí. Modely, které odolají útokům přepnutí kontextu, stále kapitulují pod tlakem autority nebo sociálně-afektivním tlakem a zadržují korektivní zpětnou vazbu, a proto jeho autoři tvrdí, že chování „laskavé, ale správné“ má být **výslovným požadavkem na trénink**, ne preferencí ([[eduframetrap-llm-sycophancy-educational-safety]]).

Pokud je selháním vašeho tutoru souhlas s chybnou odpovědí, prompt, aby nesouhlasil, je zmírněním. Pusťte nejdřív tlakový test, zaznamenejte, kde se láme, a použijte ten přepis jako argument pro rozpočet na trénink.

## Napište odměnu, než začnete sbírat data

Odměna je komprimovaná specifikace toho, co chcete, a modely optimalizují to, co jste skutečně napsali. To dělá z návrhu odměny rozhodnutí, které stanovuje strop pro všechno další.

Model odměny u EduQwen **upřednostnil vodící odpovědi před přímými**, s těžbou tvrdých negativů, která vyloučila otázky, jež základní model už řešil, a s rollouty prodlouženými z 5 na 8 kroků, aby se zachytila vícekroková pedagogická rozhodnutí. Jeho třífázový postup, nejprve RL, potom syntetické SFT a nakonec poslední kolo RL, dosáhl **96,52 %** na benchmarku CDPK proti **90,55 %** u Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Z toho plynou dvě věci. Počítejte s tím, že odměna bude ohnuta, protože specifikuje méně, než jste mysleli, takže ji pište proti benchmarku, ne proti intuici. A uchovejte mezilehlá čísla: první fáze RL sama dosáhla 94,13 %, SFT na 40 000 vlastních vygenerovaných odpovědí ji zvedlo na 96,20 % a poslední kolo přidalo ten poslední zlomek. Většina zisku přišla brzy, což je užitečné, když se někdo ptá, zda poslední fáze stála za svou cenu.

## Udělejte odměnu dost hustou, aby učila

Odměna na přesnou shodu je příliš řídká, když má věc, o kterou vám jde, několik dimenzí. Simulátor psaní SWIM ukazuje postup čistě: promptování ukotvené v rubrice dosáhlo nejlepšího průměrného QWK pro rys **0,577** s Claude Sonnet a **0,422** s GPT-5.4, u otevřeného 7B modelu téměř nula; supervizované doladění dosáhlo **0,474 ± 0,023** u toho 7B modelu; GRPO s hustou, na rys normalizovanou odměnou za přesnost dosáhlo **0,618 ± 0,005** napříč všemi rysy a prompty ([[swim-student-writing-simulation-2026]]).

Ten rozdíl vytvořil návrh odměny. Hustý signál normalizovaný na rysy poráží přesnou shodu v prostředí s více rysy, a pokud se vaše odměna aktivuje jen u dokonalé odpovědi, většina vašeho trénovacího signálu je ticho.

## Dejte uvažování do příkladů

Nejlépe použitelné zjištění v této oblasti se týká toho, co musí trénovací data obsahovat. Modely doladěné na instrukce se naučily chybná pojetí algebry jen tehdy, když byly trénovány na **záznamech řešení na úrovni kroků**. Při tréninku jen na konečných odpovědích zůstala přesnost **pod 30 % při každé velikosti dat** ([[misconception-acquisition-dynamics-llms-2026]]).

Pro každého, kdo staví kteroukoli stranu tutoru, jsou důležité dva detaily z té studie. Role studenta přehnaně zobecnila naučenou chybu, dokud se správné příklady nepřimíchaly v poměru až **jedna ku čtyřem**. Role tutora takovou cenu neukázala a udržela správnou přesnost od **93 % do 98 %** napříč deseti společně trénovanými chybnými pojetími.

Datová sada dvojic otázka a správná odpověď nemůže model naučit všimnout si, kde student udělal chybu. Pokud trénujete tutora, aby diagnostikoval, příklady potřebují uvažování.

## Vyberte trénovací signál, který odpovídá úsudku

Supervizované doladění učí model napodobovat vaše demonstrace. To stačí na formát a nestačí na úsudek. LearnLM to říká výslovně: **RL je podstatně účinnější než samotné SFT pro následování jemných pedagogických instrukcí v dlouhých konverzacích** ([[learnlm-improving-gemini-learning]]).

Jeho rámování podmíněné instrukcemi dovoluje vývojářům a učitelům specifikovat chování tutora, aniž by se zavázali k jedné definici pedagogiky, a společný trénink to míchá do fází post-tréninku Gemini. Experti mu dali přednost před GPT-4o (**+31 %**), Claude 3.5 Sonnet (**+11 %**) a základním Gemini 1.5 Pro (**+13 %**).

Praktické čtení: pokud je vaším selháním špatný tón nebo chybějící formát, SFT je levná cesta. Pokud je vaším selháním volba špatného pedagogického kroku ve dvanáctém tahu, signál musí tu volbu odměňovat.

## Označte každý příklad chováním, které učí

Pokud supervize musí obsahovat uvažování, schéma označování je rozhodnutí o kurikulu. Studie supervizních štítků zjistila, že přiřazení jednoho cílového chování každému trénovacímu příkladu, mezi oborovou kompetencí, ukotvením v kurikulu, diagnostickým uvažováním a scaffoldingem, zvýšilo skóre při každé testované velikosti modelu, s největšími zisky u scaffoldu a u využívání historie žáka. Diagnóza stavu znalostí zůstala nejslabším chováním na **54,04 %** ([[omniedu-open-educational-foundation-models-2026]]). Diagnóza je nejtěžší položka na tom seznamu, takže na ni naplánujte rozpočet.

Výběr dat je samostatný trénovací problém. Edu-QuRating přizpůsobuje destilaci preferencí kurátorství vzdělávacích dat a nahrazuje jediné skóre „je toto vzdělávací?“ **20 dimenzemi rubriky**, které pokrývají faktickou správnost, pedagogickou strukturu a vhodnost úrovně ([[garrod-edu-qurating-educational-data-curation-2026]]). Pokud skládáte korpus z webového textu, ten filtr rozhoduje o tom, jak bude váš model znít.

## Vyberte sázku na data, kterou si můžete dovolit

Prostor definují dvě protichůdné sázky a to, kterou vezmete, závisí na tom, co už máte.

Když je vašich dat málo, chování nese post-trénink podmíněný instrukcemi. LearnLM používá instrukce na úrovni systému, které umožňují učitelům a vývojářům specifikovat chování tutora, a spoléhá na společný trénink, ne na velký korpus přepisů tutoringu.

Když máte autentická data interakcí, vyhrává doladění na nich. TeachLM sází na to, že [[prompt-engineering|promptování]] je provizorium a vzácnou složkou je skutečná interakce žáka a tutora. Trénován na **100 000 hodinách** sezení jeden na jednoho za důkladné anonymizace zdvojnásobuje čas, kdy mluví student, zlepšuje styl kladení otázek a zvyšuje počet tahů dialogu o **50 %** ([[teachlm-post-training-llms-education]]).

Levnější cestou je destilace. Pedagogy-R1, ve velikostech 1,5B a 7B, byl doladěn na instrukce na pedagogicky filtrovaných výstupech destilovaných z učitele QwQ-32B, ve spojení s promptováním Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Trénujte rozhodnutí, se kterým se student setká příště

Post-trénink nemusí formovat jen to, co model říká. TACT dotrénoval tutora na taxonomii 13 strategií a dvouosé taxonomii tahů studenta a získal **20,30 bodu** proti svému základu Qwen3.5-4B, s diagnostickým benchmarkem, který **zadržuje štítky stavu žáka** dostupné při tréninku, takže model musí stav odvodit z dialogu ([[tact-pedagogically-adaptive-esl-tutoring]]).

Stejná logika prochází sladěním pro [[special-education|speciální vzdělávání]] ([[special-r1-rl-special-education]]) a prací s heuristickým RL, která modely slazuje jako sokratovské průvodce, ne jako odpovídače ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Jedna platforma jde dál a trénuje politiku, ne prózu: agent posilovaného učení volí další cvičný problém, takže o tom, co žák udělá příště, rozhoduje natrénovaný model ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Ten poslední případ je test, zda jste navrhli tutora, nebo generátor textu. Pokud je jediným výstupem modelu próza, pedagogika žije ve vašem orchestračním kódu. Pokud model volí další úkol, pedagogika je ve vahách.

## Testujte to v délce konverzace

Trénink nedělá model bezpečným v dlouhé konverzaci. SafeTutors ukazuje, že i specializované pedagogické modely degradují napříč trvajícím dialogem a mohou páchat újmu nadměrného vyzrazení odpovědí ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pedagogickou bezpečnost]] je třeba měřit v délce konverzace, včetně tahů, kde student chybuje, je vytrvalý nebo tlačí.

## V čem se tréninkové týmy mýlí

Víc promptování to nakonec udrží. Patolízalství přetrvává po promptování i sladění a tlak autority znovu otevírá chování, které test přepnutí kontextu uzavřel. Přepis z vašeho vlastního tlakového testu je důkazem pro toto tvrzení ve vašem produktu.

Číslo z žebříčku je výsledek. 96,52 % na CDPK popisuje výkon na pedagogických úlohách jednoho benchmarku. Vaši studenti se setkávají s vaším kurikulem, vaší notací a studentem, který uvízl na dvacet minut.

Víc dat je odpověď, když jsou záznamy řídké. Konečné odpovědi při jakékoli velikosti dat držely přesnost u chybných pojetí pod 30 %. Výsledek změnilo uvažování na úrovni kroků v příkladech; velikost korpusu s ním nikdy nepohnula.

Role studenta je ta těžká část, takže ji trénujte nakonec. Student přehnaně zobecnil naučené chyby, dokud se správné příklady neobjevily v poměru jedna ku čtyřem. Role tutora držela 93 % až 98 % za stejných podmínek, což naznačuje, že tutor je lehčí polovina k trénování a simulátor je ta, kterou je třeba kontrolovat.

Konečný checkpoint je výsledek. První fáze RL dosáhla 94,13 % a SFT ji zvedlo na 96,20 %, takže většina pohybu nastala před posledním kolem. Uchovejte skóre fází; říkají, která fáze si zisk zasloužila a kterou byste příště mohli vynechat.

## Co se vám vrátí

**„Na RL nemáme peníze.“** Pak začněte díly, které nic nestojí: záznamy na úrovni kroků ve vašich datech, jeden štítek cílového chování na příklad a odměna, kterou jste napsali slovy dřív, než ji napíšete v kódu. Srovnání SWIM ukazuje, že samotné SFT zvedlo 7B model na 0,474, což je skutečný zisk a stále méně než 0,618.

**„Model od našeho dodavatele už odpovědi odmítá dávat.“** Post-trénink dodavatele optimalizuje vstřícnost a odmítání odpovědi není to, co skóre vstřícnosti odměňuje. Otestujte chování ve vašich vlastních konverzacích; odpověď je v přepisu, ne v kartě modelu.

**„Destilace nás dostane většinu cesty.“** Pedagogy-R1 je destilace 1,5B a 7B a je to rozumný výchozí bod. Co dědí, je pedagogika učitele, včetně toho, v čem se ten učitel spletl, a budete potřebovat benchmark, abyste viděli, které části se přenesly.

**„Testování dlouhých konverzací je na časté spouštění moc drahé.“** Pusťte ho jednou při každé změně modelu, s pevným scénářem a pevnou sadou adversariálních tahů, a porovnejte přepisy. Cena je v napsání scénáře poprvé.

**„Učitel říká, že to působí jako chatbot.“** To je zpráva o tvaru konverzace a tvar konverzace je politika. Spočítejte, kolik tahů projde, než model vydá krok.

## Co udělat tento týden

**1.** Pusťte tlakový test: chybná odpověď, student trvá na svém, student cituje autoritu, student žádá odpověď. Uložte přepis.

**2.** Napište svou odměnu jako tři věty česky a potom zkontrolujte, zda váš kód měří ty tři věci.

**3.** Projděte vzorek trénovacích příkladů a hledejte uvažování na úrovni kroků. Uveďte podíl těch, které obsahují chybný krok a jeho diagnózu.

**4.** Přidejte jeden štítek cílového chování na příklad, počínaje scaffoldingem, a zaznamenejte rozdělení.

**5.** Dejte skóre mezistupňů do karty modelu vedle konečného skóre.

## Kam dál

[[making-ai-better-at-supporting-learning|Jak můžeme udělat AI lepší v podpoře učení v našem vlastním předmětu?]] se ptá, zda je trénink vůbec ta správná páka, a [[developing-ai-tutor|Vývoj AI tutora]] pokrývá protějšek v návrhu interakce, který dosahuje stejného vodícího chování pomocí scaffoldu a žebříků nápověd, ne pomocí gradientů. [[checking-whether-educational-ai-works|Ověření, zda vzdělávací AI funguje]] pokrývá měření, zda se chování skutečně změnilo, a [[llm-training-and-fine-tuning|Trénink a doladění LLM]] je konceptuální stránka za tím vším.
