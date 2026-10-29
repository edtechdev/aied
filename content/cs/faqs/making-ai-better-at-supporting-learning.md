---
title: "Jak můžeme zlepšit AI v podpoře učení v našem vlastním předmětu?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T11:57:27-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

V tiketu stojí „doladit model na materiálech našeho kurzu“. Rozpočet je schválený, GPU je rezervovaná na příští měsíc a absolvent má za úkol sestavit datovou sadu. Nikdo na hovoru se nezeptal, jak skóruje prostý prompt nebo jak skóruje hledání podle klíčových slov na stejných otázkách.

Zeptejte se nejdřív na tyhle dvě otázky. V této znalostní bázi je mezera mezi obecným modelem a modelem kompetentním pro kurz z velké části problém zakotvení a promptování a důkazy pro toto pořadí jsou nezvykle přímé: studie kurzu s asistentem zjistila, že prvotním rozhodnutím bylo vyhledávání, ne model, a obecný model bez zakotvení skóroval *pod* úrovní prostého TF-IDF baseline.

Trénování je skutečné a někdy nutné. Je to třetí nebo čtvrtá věc, kterou zkoušet, a práce níže je seřazena tak, abyste zjistili, kterou příčku skutečně potřebujete, dřív než utratíte čtvrtletní výpočetní kapacitu.

## Stručná verze

**1.** Zaznamenejte, jak skóruje prostý prompt a jak skóruje triviální lexikální metoda, než cokoli změníte. To druhé číslo vás drží poctivými.

**2.** Postavte před model vyhledávání nad vašimi vlastními materiály. Je to největší jednotlivý přínos hlášený zde vzhledem k nákladům a je vratný.

**3.** Inženýrsky upravujte prompt proti své rubrice, dokud se zlepšování nezastaví. Plató je signál, že trénování by mohlo něco přidat.

**4.** Přizpůsobte váhy pomocí [[llm-training-and-fine-tuning|LoRA]], když je cíl stabilní a úzký: formát, rubrika, čtenářská úroveň, oborový slovník.

**5.** Dotrénujte, když je problémem chování, a ne obsah, a napište odměnu proti benchmarku, u kterého očekáváte, že bude zneužit.

**6.** Sestavte trénovací sadu na úrovni kroků. Data jen s odpověďmi nenaučí miskoncepci.

## Získejte výchozí hodnotu, kterou skutečně umíte překonat

Než cokoli změníte, zaznamenejte, co vrací prostý prompt. Potom zaznamenejte, co vrací triviální metoda.

Studie [[shen-sustainable-ai-knowledge-base-cs-education-2026|asistenta nad znalostní bází kurzu]] stojí za přečtení už kvůli tomuhle. Lokální LLM bez vyhledávání dosáhl přesnosti **52,3 %**. TF-IDF baseline, lexikální metoda stará desítky let, dosáhla **55,4 %**. Model byl horší než klasická metoda.

Vynechte tento krok a neumíte říct, zda vaše doladění pomohlo. Hůř, můžete nasadit systém, který poráží hledání podle klíčových slov, a zjistit to až tehdy, když to zmíní asistent výuky. Dvě čísla v tabulce, pořízená za odpoledne, chrání zbytek rozpočtu.

## Zakotvěte model ve svých vlastních materiálech

Přidání [[rag|generování s podporou vyhledávání]] nad materiály kurzu, zcela bez doladění, zvedlo tentýž systém z 52,3 % na **66,6 %**. Ten přínos přišel z indexu a nese vlastnost, kterou trénovací běh nemá: když se vaše dokumenty změní, přeindexujete.

Dva další výsledky ukazují stejným směrem. Přehled PRISMA 23 empirických studií o přizpůsobování AI pro [[writing-education|výuku psaní]] našel **převahu promptového inženýrství (N = 13) před doladěním (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Kde znalostní báze musí zůstat aktuální, je vyhledávání jediná páka, která zůstává aktuální bez opětovného spuštění trénovací úlohy.

Vyhledávání má také pedagogickou podobu. Zakotvení modelu ve vašich vlastních vypracovaných příkladech a rubrikách je to, jak zůstává uvnitř [[scaffolding|scaffolding]], které jste navrhli, a odpovídá na úrovni, kterou jste nastavili, místo aby se svezl do obecných rad. To svezení je nejčastější stížnost na hotové tutory a je to problém vyhledávání častěji než problém vah.

## Napište prompt proti své rubrice a hlídejte plató

Práce na promptu není příprava, kterou děláte, než přijde GPU. Dva výsledky ukazují, co samo o sobě dokáže:

- **Promptování vedené rubrikou, iterativně spoluupravované, zvedlo shodu LLM s člověkem u studentských konstrukčních prací z 54,75 % na 81,25 %** (Cronbachova alfa 0,393 až 0,798), zcela bez doladění ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Prompt na míru opřený o literaturu vyvolal cílové matematické [[misconceptions|miskoncepce]] s **0,98** přítomnosti, proti **0,40** u širokého promptu ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Praktickým signálem je **plató**. Ve studii generování položek se iterativní ladění promptu přestalo zlepšovat a doladění GPT-4.1 *na optimalizovaném promptu* pak přidalo zbývající zisk ([[gpt-item-generation-l2-listening-2026]]). Plató po skutečné práci na promptu je důkazem, že trénování má prostor něco přidat. Sáhnout po trénování, než na něj narazíte, je hádání a hádání stojí měsíc.

Všimněte si, co výsledek s generováním položek implikuje pro pořadí. Doladění bylo postaveno na optimalizovaném promptu, takže práce na promptu nepřišla nazmar, když tým nakonec trénoval. Levná příčka je zároveň specifikací pro tu drahou.

## Přizpůsobte váhy, když je cíl stabilní a úzký

Adaptace se vyplatí, když potřebujete, aby model spolehlivě držel nějakou vlastnost: čtenářskou úroveň, výstupní formát, obor, který mu chybí. Opakujícím se výsledkem je, že **cílení poráží velikost**.

- Tři **8B** modely doladěné na expertně navrženém kurikulu čtení pro děti předčily zero-shot GPT-4o i Llama 3.3 70B v metrikách obtížnosti, s nepatrnými problémy bezpečnosti. Autoři to rámují jako **ovladatelnost před škálou** ([[llm-children-reading-story-generation]]).
- Instrukční datová sada s **24 795 příklady** zakotvená v indických systémech poznání dala **7B** doladění skóre **6,39** u externího panelu pěti hodnotitelů, tedy **0,15** od silného obecného referenčního modelu při zlomku nákladů na nasazení. Stejný základní model skóroval **téměř nulově v oborově specifických dimenzích** bez doladění ([[iks-instruct-dataset-indian-knowledge]]). Ta mezera mezi kompetentností obecně a kompetentností zde je celý argument pro oborovou adaptaci.
- Jediný adaptér [[llm-training-and-fine-tuning|LoRA]] trénovaný na zhruba **3 900** sesbíraných oznámkovaných příkladech přivedl pět malých otevřených modelů (4B až 30B) na roveň lidskému hodnotiteli nebo nad něj ve dvou zkouškách z informatiky ([[llm-graders-computer-science-exams-2026]]). Jeden adaptér, jedna datová sada, několik základních modelů: to je tvar nasazení, který malý tým umí provozovat.

Slovo *stabilní* v nadpisu nese váhu. Formát, rubrika, čtenářská úroveň a oborový slovník jsou stabilní cíle. Próza naložená úsudkem takový cíl nemá a tam adaptace selhává, jak ukazují následující dvě sekce.

## Změňte chování, když jsou problémem odpovědi

Adaptace učí model, *co produkovat*. Dotrénování ho učí, *jak se chovat*. U tutorování je ten rozdíl celým problémem: obecné modely jsou dotrénované na lidské preferenci užitečnosti, což znamená odpovídat pohotově, a výuka vyžaduje odpověď zadržet.

Nejsilnější vzdělávací výsledky v tomto korpusu jsou tady. Odměnový model EduQwen výslovně upřednostnil **navádějící odpovědi před přímými** a jeho třífázový postup dosáhl **96,52 %** na benchmarku CDPK proti **90,55 %** u Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Simulátor psaní SWIM se posunul od promptování zakotveného v rubrice (nejlepší QWK **0,577**) k učenému doladění (**0,474 ± 0,023**) a k učení posilováním (**0,618 ± 0,005**) napříč každým rysem a promptem ([[swim-student-writing-simulation-2026]]).

Čtěte čísla SWIM pozorně, protože prostřední krok šel zpět. Učené doladění na demonstracích udělalo simulátor horším než prompt, ze kterého vycházel, a ztrátu napravil až signál odměny, který pak překonal i výchozí stav. Pokud se váš plán zastaví u učeného doladění, plán může být objížďka.

## Dohlížejte na úrovni kroků

Jedno zjištění se tu snadno přehlédne a je drahé ho ignorovat: **kvalita dohledu poráží jeho množství**. Modely doladěné na instrukcích se naučily algebraické miskoncepce jen tehdy, když byly trénované na **rozhodnutích po krocích**. Při tréninku jen na konečných odpovědích zůstala přesnost **pod 30 % při každé velikosti dat** ([[misconception-acquisition-dynamics-llms-2026]]).

Pokud jsou vaše trénovací příklady dvojice otázka a správná odpověď, trénujete špatnou věc a přidávání příkladů to nenapraví. Potřebujete mezilehlou práci: špatné odbočení, krok, kde student sešel z cesty, opravu. Sbírat to je datově inženýrský problém s pedagogickým omezením a obvykle to znamená logovat sezení, ne stahovat klíče odpovědí.

## Kde adaptace tiše selhává

Tohle je část, kterou nadšení přeskakuje.

**Text naložený úsudkem.** Ve WrAFT tentýž projekt, který úspěšně doladil model na *skórování* esejí (QWK 0,84), produkoval zkrácený a neparsovatelný výstup, když ho doladil na *zpětnou vazbu*, zatímco přímé promptování Claude 3.7 dalo zpětnou vazbu, kterou učitelé ohodnotili nejlépe ([[wraft-automated-writing-evaluation-argumentative-2026]]). Doladění naučilo model trefit skóre a skórování bylo to jediné, co se naučil.

**Přenos mezi modely.** Škála není spolehlivý prediktor výkonu níže v řetězu při adaptaci LoRA a **identické hyperparametry produkovaly kvalitativně odlišné chování napříč architekturami** ([[aiawe-automated-writing-evaluation]]). Recept, který fungoval na jednom modelu, není recept.

**Architektura před počtem parametrů.** Doladění tří otevřených modelů převádějících text na obrázek na 1 000 popsaných snímcích z jaderného inženýrství podstatně zlepšilo Stable Diffusion XL, dalo omezené zisky u SD-v3.5-Medium a neprodukovalo **žádné měřitelné zlepšení u Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Problémem byla validace.** Netrénovaný GPT-4 na špičkové úrovni produkoval zhruba **35 %** příliš obecných, nesprávných nebo odpověď prozrazujících nápověd, když tvořil tutorskou zpětnou vazbu, a jeho vlastní automatické kontroly kvality se neshodovaly s lidským úsudkem ([[reddig-maclellan-personalized-feedback-llm-2026]]). To je problém filtrování a LoRA ho nevyřeší.

Vzorec ve všech čtyřech případech: adaptace spolehlivě posouvá model k cíli, který umíte specifikovat a skórovat. Nepřidává žádný úsudek a postup, kterému chybí kontrola, přesto dodá špatný výstup.

## Naplánujte adaptaci poctivě

U příčky adaptace je laťka nižší, než většina týmů předpokládá: **několik stovek až několik tisíc příkladů a jedna GPU**. LoRA trénuje malý počet přidaných parametrů a základní váhy nechává zmrazené, takže z jednoho adaptéru lze obsluhovat několik modelů.

Hodnost je kompromis, ne knoflík k maximalizaci. Zisk na milion parametrů adaptéru klesal monotónně s rostoucí hodností a sladění s kurzem bylo rozhodnutím o škále a hodnosti, ne bezplatným vylepšením ([[lora-finetuned-control-systems-course-qa-2026]]).

Které vrstvy adaptujete, je také skutečná volba. Aktualizace **jen posledních čtyř vrstev Transformeru** u diskurzního analyzátoru založeného na BERT předčila adaptaci jen horní vrstvy i plné doladění ([[bert-discourse-english-teaching-2026]]). Tři konfigurace, tři různé výsledky, a nejlevnější vyhrála.

Náklad, který se snadno podcení, je vyhodnocení, a to je větší než účet za výpočet. Viz [[checking-whether-educational-ai-works|Jak poznáme, že vzdělávací AI funguje správně, a ne že jen dobře skóruje?]]

## Kalibrujte, co očekáváte

Volba modelu a promptu dohromady vysvětluje jen asi **15 %** nesouladu mezi LLM a učebními přínosy studentů a v té studii sladění *zhoršily* soubory vážící benchmarky i jednomyslné hlasování ([[educational-llm-alignment]]). Data z předtréninku jsou dominantní pákou toho, jak se model chová, a to je jediná páka, kterou nemůžete zatáhnout.

Nic z toho neargumentuje proti práci výše. Argumentuje to proti očekávání, že doladění opraví designový problém. Pokud je problém v tom, že váš tutor odpovídá příliš ochotně, trénování to může řešit. Pokud je problém v tom, že se vaši studenti do práce nepouštějí, trénování to nevyřeší, a číslo 15 % říká, že peníze lépe utratíte jinde.

## V čem se týmy mýlí

Doladění je způsob, jak model naučit váš kurz. Vyhledávání nad vašimi vlastními materiály zvedlo tentýž systém z 52,3 % na 66,6 % zcela bez trénování a prompt upravený proti rubrice posunul shodu z 54,75 % na 81,25 %. Trénování učí chování a formát mnohem spolehlivěji než obsah.

Větší základní model tohle všechno odstraní. Model 8B doladěný na kurikulu čtení pro děti předčil zero-shot GPT-4o i Llama 3.3 70B v metrikách obtížnosti a doladění 7B se dostalo na 0,15 od silného obecného referenčního modelu při zlomku nákladů na nasazení. Velikost a vhodnost jsou různé osy a jen jedna z nich se prodává po tokenech.

Víc dat opraví špatně postavenou trénovací sadu. Dohled jen nad odpověďmi nechal přesnost pod 30 % při každé velikosti dat ve studii miskoncepcí. Škála nenapraví cíl, kterému chybí informace, které model potřebuje.

Recept, který fungoval na jednom modelu, bude fungovat na dalším. Identické hyperparametry produkovaly kvalitativně odlišné chování napříč architekturami a stejná metoda doladění podstatně zlepšila jeden obrazový model a u druhého neudělala nic měřitelného. Spusťte recept znovu na svém základním modelu, nebo hádáte.

Učené doladění je bezpečný prostřední krok před učením posilováním. V SWIM učená fáze skórovala 0,474 proti 0,577 z promptu, který nahradila, a zachránil ji až signál odměny. Prostřední krok vás může stát měsíc a regresi.

## Co vám na to řeknou

**„Rozpočet je schválený na doladění, tak dolaďme.“** Strávte nejdřív týden na výchozí hodnotě a indexu. Pokud vyhledávání pohne číslem, doladění je pozdější rozhodnutí učiněné s lepšími informacemi a budete pro ně mít silnější argument, nebo dobrý důvod GPU vrátit.

**„Náš problém je, že to studenti nepoužívají.“** Trénování mění to, co model produkuje. Číslo 15 % popisuje, kolik z nesouladu s učebními přínosy vysvětluje volba modelu a promptu, a angažovanost stojí mimo ně. Změřte, kde studenti odpadají, než koupíte výpočet.

**„Nemůžeme posílat práce studentů do API dodavatele.“** Nejsilnější výsledek s LoRA zde přišel z otevřených modelů v rozsahu 4B až 30B a jeden adaptér obsloužil několik z nich. Ten tvar nasazení je dostupný týmu s jednou GPU a bez smlouvy o zpracování dat.

**„Promptování je hack, skutečná práce znamená trénování.“** Přehled 23 studií o výuce psaní našel promptování jako dominantní přístup a doladění za ním a největší hlášený zisk na této stránce přišel z indexu. Přehled i studie asistenta kurzu seřadily ty příčky podle změřeného zisku.

**„Zkusili jsme promptování a dostali se na plató, takže potřebujeme trénování.“** To je správné čtení a je to jediný případ, kdy je výstup nahoru oprávněný. Vezměte optimalizovaný prompt do doladění, jak to udělal tým generování položek, a očekávejte, že zisk bude menší než práce na promptu.

**„Naše materiály kurzu jsou nekonzistentní, takže vyhledávání vrátí brak.“** Vrátí, a vyhledávání dědí kvalitu korpusu. Vyčistit korpus je levnější než trénovat model, aby ho obcházel, a zisk z 52,3 % na 66,6 % byl měřen na běžných materiálech kurzu, ne na kurátorované sadě.

## Co udělat tento týden

**1.** Spusťte baseline jen s promptem a baseline s klíčovými slovy na 50 skutečných otázkách z vašeho kurzu a zapište si obě čísla.

**2.** Namiřte vyhledávání na materiály, které už máte, a spusťte znovu stejných 50 otázek, aby byl zisk měřen proti vaší vlastní výchozí hodnotě.

**3.** Vložte rubriku do systémového promptu a iterujte týden. Zastavte se, když dvě kola nic nepřidají.

**4.** Projděte svou trénovací sadu a hledejte stopy po krocích. Pokud jsou to dvojice otázka a odpověď, datová sada není připravená.

**5.** Napište jednu vlastnost, kterou potřebujete spolehlivě držet, a rozhodněte, zda je to chování, nebo obsah. To rozhodnutí vybírá příčku.

## Kam dál

[[training-ai-tutors-to-guide-rather-than-answer|Jak naučíme AI tutora navádět studenty, místo aby jim odpovídal?]] pokrývá polovinu s dotrénováním podrobně. [[checking-whether-educational-ai-works|Jak poznáme, že vzdělávací AI funguje správně?]] pokrývá, jak zjistit, zda něco z toho zabralo. [[developing-ai-tutor|Jaké jsou osvědčené postupy pro vývoj účinného AI tutora?]] je strana návrhu interakce stejného cíle a [[designing-educational-ai-software|Jaké jsou osvědčené postupy pro návrh vzdělávacího AI softwaru?]] pokrývá okolní systém. Celá konceptuální stránka je [[llm-training-and-fine-tuning]].
