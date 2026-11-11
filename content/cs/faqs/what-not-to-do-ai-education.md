---
title: "Čemu by se vzdělavatelé měli u AI vyhýbat?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Většina doporučení k AI ve vzdělávání říká, co vyzkoušet. Tato stránka sbírá postupy, u nichž důkazy říkají, že je třeba přestat, uspořádané podle role, která by s nimi musela přestat. Mylná přesvědčení řešíme jinde: zabývá se jimi [[addressing-common-misconceptions-ai-education|FAQ o mylných představách]] a konceptuální stránka [[misconceptions]] vysvětluje, proč přetrvávají. Co výzkum zatím neumí říct, patří k [[limitations-in-aied-research|omezením výzkumu AIEd]]. Tady jde o krok po přesvědčení: co lidé dělají, co je to stojí a co dělat místo toho.

Tři selhání se opakují napříč rolemi.

1. **Substituce.** Nástroj provádí myšlení, které měl udělat student, a výstup se hodnotí, jako by ho udělal student. Odevzdaná esej je záznamem toho, co umí model, ne toho, co umí student.
2. **Nezasloužený důkaz.** Signál, který se snadno sbírá, jako jistota, plynulost, zapojení nebo míra dokončení, se bere jako důkaz něčeho, co ukázat nemůže. Dashboard může hlásit čtyřicet minut v hodině s tutorem; nemůže hlásit, zda se někdo naučil řešit kvadratickou rovnici.
3. **Struktura ponechaná apelu.** Od varování, věty v politice nebo školení se očekává práce, kterou musí udělat návrh rozhraní, návrh hodnocení nebo správa a řízení. Sylabus říká, aby se AI používala odpovědně, a tutor přesto na první prompt vydá hotovou odpověď.

## Stručně

**1.** Nikdy neznámkujte, necitujte ani nepropagujte výstup jako důkaz schopnosti, která ho vytvořila.

**2.** Vždy sbírejte měření bez pomoci vedle měření s asistencí.

**3.** Plynulost, jistotu a zapojení berte jako rysy používání, ne jako učení.

**4.** Pojistku dejte do pracovního postupu, ne do varování.

**5.** Předpokládejte, že jakákoli data, která nástroj vidí, budou uchována, zkombinována a uniknou.

**6.** Pokud tvrzení přichází s demem, ale bez srovnání, je to marketing.

## Pro vyučující

**Necertifikujte výstup jako schopnost.** Vypilovaná odevzdaná práce je důkazem vypilované odevzdané práce. Pokud student odevzdá rešerši, jejíž zdroje nemůžete porovnat s ničím, co kurz učil, a hodnocení nedokáže rozlišit, co tento student umí bez pomoci, hodnocení přestalo měřit to, co osvědčení tvrdí ([[assessment-validity]], [[authentic-assessment]]). Řešením je přepracování úlohy; přísnější čestný kodex to neudělá.

**Nepoužívejte skóre detektoru jako důkaz pochybení.** V kontrolované studii 642 publikovaných abstraktů detektory označily 38–80 % lehkých úprav AI v souladu s pokyny a 9–15 % neupraveného lidského psaní, zatímco zachytily méně než 4 % přepisů prohnaných humanizační službou ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Nezávislý benchmark zjistil, že žádný ze 14 komerčních nástrojů nedosáhl 80 % přesnosti, a prosté parafrázování snižuje i tento výsledek na polovinu ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Při realistických základních mírách převažují falešné pozitivy nad skutečnými ([[should-we-use-ai-detectors]]). Detektor může rozhovor zahájit; nemůže ho ukončit.

**Nepřidávejte AI do hodnocení, které jste nepřepracovali.** Přišroubování nástroje k úloze navržené pro výkon bez pomoci vytváří přesně to nafouknutí známek, které ztrátu skrývá: domácí úkoly nahoru, zkouška dolů. U každé známkované úlohy se ptejte, co by ukázala verze bez pomoci, a nejdřív opravte úlohu ([[reducing-ai-misuse]]). Pokud domácí sada příkladů a test v hodině zkoušejí stejnou dovednost, měří studenta jen jeden z nich.

**Nepovažujte zapojení za učení.** Čas strávený úkolem, spokojenost, objem hledání pomoci a aktivita v chatu se snadno instrumentují a všechny jsou slučitelné s tím, že k učení nedochází vůbec. V experimentu 3 × 2 se 186 účastníky, kteří posuzovali občanskoprávní případy na platformě podporované LLM, pojistka, která snížila přepínání k nesprávnému stanovisku AI ze 42–60,5 % na 5,7–8,2 %, nepřinesla v rámci sezení žádný měřitelný učební účinek (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Chování se změnilo; měřítko učení ne ([[student-engagement]]).

**Nespoléhejte na varování tam, kde by rozhraní mohlo omezit.** Tutor, který umí vytvořit hotovou odpověď, ji pod tlakem termínu vytvoří, ať sylabus říká cokoli. Funguje pojistka zabudovaná do interakce ([[reducing-ai-misuse]], [[pedagogical-safety]]). Zadržení konečné odpovědi na první dva pokusy je rozhodnutí o návrhu; prosba na studenty, aby o ni nežádali, je prosba.

**Nevkládejte práce studentů, IVP, kázeňské záznamy ani identifikovatelné koncepty do spotřebitelského nástroje.** Minimalizace dat je rozhodnutí o návrhu, které děláte jménem studenta, ať už jste o něm přemýšleli, nebo ne ([[privacy]]). Bezplatný účet chatbota, který odpovídá na otázku o behaviorálním plánu studenta, je také kopií tohoto plánu na cizím serveru.

## Pro studenty

**Nepředávejte tu část, kterou máte procvičovat.** Předpokládejme, že zadáním je esej o pěti odstavcích: vložíte prompt do chatbota, vezmete vrácený koncept a odevzdáte ho. To, co odevzdáte, je záznamem toho, co umí model. Otázka je, která kognitivní práce se přesouvá, ne kolik AI používáte. Outsourcování domácích úkolů zvyšuje známky z domácích úkolů a snižuje známky z písemné zkoušky bez pomůcek: u 26 811 středoškoláků sledovaných 30 měsíců vzrostly známky z domácích úkolů o 18 % a známky ze zkoušky klesly o 20 % během šesti měsíců ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Praxe, která buduje vybavitelnou znalost, přešla na nástroj ([[reducing-ai-misuse]]). Pokud je cvičení to podstatné, nástroj cvičení udělat nemůže.

**Nečtěte plynulost jako správnost.** Plynulý text je výstupem [[llm|jazykového modelu]] bez ohledu na to, zda je obsah pravdivý, a mechanismus, který ho činí přesvědčivým, je tentýž, který ho činí chybným ([[hallucination-risk]]). Ověřujte konkrétní tvrzení, ne tón odstavce. Tento návyk zřídka vznikne sám: v pasivním panelu 900 dospělých v USA, kterým bylo dáno shrnutí od AI, čtenáři následovali zdroj citovaný uvnitř něj v 1 % návštěv ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). Pokud zadání vyžaduje tři zdroje, otevřete všechny tři.

**Nepřijímejte souhlas jako zpětnou vazbu.** Modely přitakávají podstatně víc než lidé: napříč 11 modely potvrzovaly reakce AI uživatele o 49 % častěji než reakce lidí a právě ten přebytek dělá interakci pocitově podpůrnou ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Tutor, který s vámi nikdy nesouhlasí, odstranil korektivní signál, pro který jste přišli ([[ai-sycophancy]]). Žádejte námitku, ne potvrzení: „Co je na tomto argumentu špatně a co by řekl skeptik?“

**Když uvíznete, nevyměňujte otázku za odpověď.** Produktivní zápas, který přeskočíte, je to učení. Hledání pomoci, které získá odpověď, je jiné chování než hledání pomoci, které získá nápovědu ([[help-seeking]], [[desirable-difficulties]]). Používejte nástroje, které hotovou odpověď zadržují, a žádejte další krok, ne řešení.

**Nevkládejte osobní, zdravotní ani rodinné údaje do nástroje, abyste dostali lepší odpověď.** Nástroj nemá povinnost je zapomenout a cena za soukromí není v kvalitě odpovědi vidět ([[privacy]]). Lepší prompt nepotřebuje vaši diagnózu, adresu ani jména vaší rodiny.

## Pro rodiče a rodiny

**Nedělejte domácí úkol s nástrojem ani ho nenechávejte dělat vedle sebe.** Vzorec v datech je nafouknutí známek se skrytou cenou: ve stejném 30měsíčním panelu vzrostly známky z domácích úkolů o 18 %, zatímco známky z písemné zkoušky bez pomůcek klesly o 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Dítě, které přinese domů bezchybný domácí úkol a propadne z testu z kapitoly, vám ukazuje přesně tuto mezeru. Zkontrolovat můžete postup. Umí vaše dítě vysvětlit krok, udělat jeden příklad znovu na papír a říct, v čem si nebylo jisté? Pokud ne, úkol udělal nástroj.

**Nenechte z chatbota důvěrníka.** Pochlebné systémy přitakávají mnohem víc než lidé, o 49 % víc napříč 11 modely, a právě přitakávání je mechanismus, který je činí pocitově bezpečnými pro rozhovor ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Ve velké longitudinální studii se uživatelé obraceli na pochlebnou AI pro osobní rady téměř tak často jako na blízké přátele a rodinu, s nižší spokojeností ve skutečných vztazích ([[sycophantic-ai-social-interaction-2026]]). Dítě, které přinese trápení modelu, jenž vždy souhlasí, není slyšeno. Dostává zrcadlo. Pokud vaše dítě mluví s chatbotem o přátelství nebo ztrátě, je to moment zeptat se, komu dalšímu o tom řeklo.

**Nepředávejte generativní chatbot malému dítěti a neříkejte tomu dohled, protože jste v místnosti.** Věkově odstupňované doporučení je konkrétní: strukturované negenerativní aktivity pro věk 9 až 12 let, generativní použití pod dohledem s etickým uvažováním od 13 let ([[ai-guidance-children-under-13]]). U nejmenších dětí se riziko týká přesvědčení. Děti v předoperačním stadiu přijímají generovaný obsah jako pravdivý a systémy nejsou vývojově kalibrované ve zpětné vazbě, kterou dávají. Společné používání s dospělým znamená sedět vedle dítěte a ptát se, co hračka právě udělala, ne dohlížet ode dveří ([[early-childhood-elementary-ai-education]]).

**Nepředpokládejte, že školní nástroj chrání data vašeho dítěte, protože ho škola vybrala.** Ptejte se, co se uchovává, jak dlouho, zda se na něm něco trénuje a kdo další to vidí ([[privacy]]). Uvědomění nevzniká z vystavení: měsíc po hodině, v níž třída sedmého ročníku sledovala své vlastní zaznamenané chování promítané naživo, 66 % ze 47 studentů stále volilo nejméně ochranné nastavení chatbota ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Ptejte se školy písemně a o odpovědi požádejte písemně.

**Nepoužívejte výsledek detektoru k obvinění dítěte ani k podpoře obvinění ze školy.** V kontrolované studii 642 publikovaných abstraktů detektory označily 9–15 % neupraveného lidského psaní a zachytily méně než 4 % humanizovaných přepisů AI ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Při realistických základních mírách převažují falešné pozitivy nad skutečnými ([[ai-detection]]). Berte označení jako důvod vyžádat si historii verzí a rozhovor, ne jako zjištění.

**Nezávěrejte, že zákaz nástroje je bezpečná volba.** Nedůvěra je selhání kalibrace s vlastní cenou, promarněnou schopností, a dovednost, na níž záleží, je odpovídající jistota, ne vyhýbání ([[trust-calibration]]). Užitečný rodičovský krok je tentýž, který výzkum podporuje u studentů: vyžadujte krok ověření a udělejte ho tak levným, aby ho unavené dítě skutečně udělalo ([[verify-ai-output]]). Požádat o zdroj, který chatbot použil, stojí minutu; zakázat chatbot stojí praxi.

**Nepleťte si obsahový filtr s bezpečností.** Filtry řeší, co systém řekne. Neřeší, co interakce dělá studentovi: erodovanou praxi, pochlebné přitakávání nebo nerovnoměrná odmítnutí ([[pedagogical-safety]]).

## Pro rozvoj výuky a pedagogických sborů

**Neveďte školení na nástroj a neříkejte tomu gramotnost v AI.** Sezení o [[prompt-engineering|promptování]] učí rozhraní produktu. [[ai-literacy|Gramotnost v AI]] je schopnost posoudit, kdy má být nástroj použit, co dělá a co ověřit. Učitelé, kteří se naučí tlačítka bez tohoto úsudku, odcházejí s jistotou a bez kalibrace ([[teacher-ai-competency]]). Workshop, který skončí tím, že všichni umějí vygenerovat plán hodiny a nikdo neumí říct, kdy se plán použít nemá, naučil rozhraní.

**Neveďte jednorázový profesní rozvoj a nečekejte, že se praxe změní.** Důkazy o [[professional-training|profesním učení]] jsou konzistentní ohledně délky a následné podpory: jednotlivé akce posouvají sebevykazovanou jistotu, zřídka chování ve třídě, a přírůstek jistoty může maskovat nepřítomnost změny ([[educational-development]]). Dvouhodinové sezení v srpnu bez následné podpory v říjnu je intervencí do jistoty.

**Neignorujte systém hodnocení, který ponecháváte v platnosti.** Pedagogové přijmou praxi, kterou učíte, jen pokud hodnocení, jemuž podléhají, tuto praxi netrestá. Workshop o návrhu úloh odolných vůči AI, který běží vedle nezměněného zkouškového režimu, učí pedagogy, že školení je dekorace.

**Nepředvádějte nekritické použití, před nímž varujete.** Demonstrace nástroje generováním plánu hodiny před pedagogickým sborem bez kroku ověření učí publikum, že výstup je produkt. Vygenerujte ho před nimi a pak označte dvě tvrzení, která je třeba ověřit.

**Nepřijímejte ukázku od dodavatele jako důkaz účinnosti.** Tvrzení, které hodnotíte, se týká učení a ukázka předvádí schopnost. Žádejte výsledky bez pomoci, výsledky podskupin a testování bezpečnosti v mnoha kolech ([[checking-whether-educational-ai-works]]).

## Pro vývojáře vzdělávacího softwaru

**Neoptimalizujte metriku, kterou lze snadno zaznamenat.** Délka sezení, počet zpráv a hodnocení spokojenosti se zlepší téměř při jakékoli změně; učení často ne. Tentýž tým, který dodá pojistku, může dodat dashboard odměňující objem interakce, a oba budou ukazovat opačným směrem ([[learning-analytics]], [[student-engagement]]). Pokud je vaší metrikou úspěchu počet zpráv na sezení, postavili jste produkt, který odměňuje studenty za to, že zůstávají v chatu.

**Nedodávejte detektor bez validační studie proti konstruktu.** Benchmark patnácti modelů EEG dosáhl 0,9853 F1 při stratifikované křížové validaci; validace Group K-Fold nezávislá na pokusu, která respektuje hranice pokusů, snížila vrchol na 0,6038 proti 25% úrovni náhody ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). Detektor úsměvu může běžet *negativně* proti empatii hodnocené pozorovatelem, protože mu chybí kontext, který má lidský hodnotitel ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Zveřejněte validační protokol spolu s titulním číslem.

**Neodvozujte afekt, pozornost ani „zapojení“ z tváří a těl bez souhlasu a uvedeného účelu.** Riziko v mnoha kolech není rizikem jednoho kola: v jednom přehledu pedagogické bezpečnosti stoupl podíl selhání ze 17,7 % při jednotlivých kolech na 77,8 % při mnoha kolech ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Systém certifikovaný na izolovaných promtech je certifikovaný na interakci, kterou studenti nezažívají ([[pedagogical-safety]], [[privacy]]).

**Neskrývejte předání.** Student, který nepozná, kdy tutor generuje a kdy vyhledává, nebo kdy je ve smyčce člověk, nemůže v něm kalibrovat důvěru. [[automation-bias|Automatizační zkreslení]] funguje nejčistěji, když má systém pravdu a člověk přestal kontrolovat ([[trust-calibration]]). Řekněte v rozhraní, kdy práci přečte člověk.

**Nenavrhujte pro benchmark a pak to nevydávejte za třídu.** Výkon na benchmarku je vlastnost benchmarku. Uveďte podmínky použití, které jste testovali, populaci a úlohy; jinak bude číslo čteno jako slib o jiném prostředí ([[limitations-in-aied-research]]).

**Nedělejte z nástroje jedinou cestu k pomoci.** Pokud přístup studenta ke [[feedback|zpětné vazbě]] závisí na dostupnosti modelu, kvótě nebo licenci, otázku spravedlnosti už rozhodl nákup ([[equity-in-ai-education]]).

## Pro administrátory ve vzdělávání

**Nekupujte tvrzení o schopnostech jako důkazy o výsledcích.** Dodavatelé umí předvést produkt; jen hodnocení umí předvést učení. Vyžadujte výsledky bez pomoci, výsledky podskupin, úbytek účastníků a plán, co se stane po skončení pilotu ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Ukázka předvede tutora, jak řeší úlohu; nepředvede studenta, jak vyřeší další.

**Nenasazujte dohled jen proto, že je dostupný.** Proctoringové systémy snímají snímky tváří, doklady totožnosti, skeny místnosti včetně 360stupňových záběrů a zvuk z mikrofonu. Přehled 80 studií zjistil, že jen 25 % se vůbec zabývalo etickými otázkami, 35 % neodhalilo svůj datový soubor a 30 % nešlo reprodukovat ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). Cena dopadá na studenty a důkazní základna je tenčí, než smlouva naznačuje ([[privacy]], [[remote-proctoring]]).

**Nepište politiku složenou jen ze zákazů a neříkejte tomu správa a řízení.** Zákaz bez přepracování hodnocení, bez podpory a bez cesty odvolání chování přesouvá, místo aby mu předcházel, a trestá studenty, kteří nejméně umějí napadnout falešné obvinění. [[governance|Politika]] musí pokrýt i hodnotitele: v red-team testu každodenního hodnoticího postupu posunuly dvě z pěti strategií vkládání promptů ukrytých v odevzdané práci neprospívající esej k prospěchu se 100% a 94% úspěšností napříč typy souborů ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Politika, která omezuje studenty, ale ne hodnoticí pipeline, je polovinou politiky.

**Nezaměňujte adopci se zlepšením.** Dashboard, který hlásí používání, spokojenost a dokončení, bude vypadat jako úspěch, zatímco míra učení zůstane plochá. Rozhodněte předem, který výsledek by vás přiměl smlouvu zrušit ([[ai-ed-evaluation]]). Zapište to číslo před začátkem pilotu.

**Nenechte přístupnost přicházet jako žádost o úpravu.** V přehledu 40 studií digitálních asistivních technologií pro [[neurodiversity|neurodivergentní studenty]] jich 28 podmiňovalo účast formální diagnózou. Model podmíněný diagnózou vylučuje každého studenta, který má potřeby a nemá nálepku ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Pro výzkumníky ve vzdělávání

**Nenechte sebevýpověď nést kauzální tvrzení.** Jistota, vnímané učení a spokojenost jsou výsledky, ale ne ty výsledky, které většina studií tvrdí, že měří. Literatura o [[empathy|empatii]] je nejjasnější případ: obor, který chce učit empatii, většinou měří pohodlí, a přehled 17 studií našel přírůstky jistoty mnohem častěji než důkazy o samotné empatii ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Necitujte účinek bez jeho designu.** V kritickém přehledu 80 studií HCI o [[critical-thinking|kritickém myšlení]] s AI jich 42 (52 %) nemělo kontrolní skupinu ([[critical-review-critical-thinking-hci-research-ai-2026]]). Titulní účinek z 30 studentů v jednom kurzu na jednom pracovišti je obvyklá podoba křehkého tvrzení ([[limitations-in-aied-research]]).

**Nevykazujte heterogenitu bez modelu.** Tatáž data dávají I² = 82,98 % při modelu s pevnými efekty a I² = 15,75 % při modelu s náhodnými efekty ([[ai-supported-instruction-stem-meta-analysis-2026]]). Citované I² bez modelu je neinterpretovatelné ([[meta-analysis-systematic-review]]).

**Nezobecňujte z jednoho kontextu a neříkejte tomu zjištění.** Jeden kurz, jedna instituce, jedna verze modelu, jeden jazyk. Chování modelu se mění s každým vydáním a detektory trénované na jedné generaci ztrácejí senzitivitu na další ([[research-gaps-aied]], [[ai-detection]]).

**Nepovažujte korelaci mezi interakcí a výsledkem za mechanismus.** Objem promptů neměří kognitivní odklánění. Shluky podle objemu se nelišily v rozložení kognitivní práce a ručně kódovaný dialog nenašel odklánění vůbec v 49,6 % ze 125 dialogů ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Měřte práci samotnou.

**Nezveřejňujte odstavec o omezeních, který mohl být napsán před studií.** Pojmenujte konkrétní hrozbu, konkrétní počet a tvrzení, které ohraničuje. To dělá omezení použitelným pro dalšího čtenáře ([[interpreting-and-applying-aied-research]]).

## Proč to patří k sobě

Každá položka výše povyšuje zástupný ukazatel na verdikt. Esej zastupuje pisatele, skóre zastupuje pochybení, úsměv zastupuje empatii, demo zastupuje učení. Oprava je vždy tentýž krok: pojmenovat konstrukt, najít měřítko, které by mohlo vyjít opačně, a sbírat ho vedle toho pohodlného.

Žádné z těchto varování neznamená, že nástroj je vždy špatný. Detektor může být důvodem promluvit se studentem. Chatbot může být užitečná zkouška nanečisto. Dashboard může být podnětem položit otázku. Škoda je v substituci.

## Co udělat tento týden

- Vyberte jednu známkovanou úlohu a napište, co by ukázala se zavřeným nástrojem. Pokud je odpověď „nic jiného“, problém je v úloze.
- Přidejte jedno měření bez pomoci do kurzu, který zatím vykazuje jen výkon s asistencí.
- Přečtěte si smlouvu své instituce na proctoring nebo nástroje AI kvůli uchovávání, sekundárnímu využití a podmínkám porušení, a zkontrolujte, zda popis souhlasu odpovídá tomu, co systém skutečně snímá.
- Požádejte dodavatele o výsledky bez pomoci a výsledky podskupin. Pokud je odpovědí demo, máte odpověď.
- Na příštím sezení s pedagogickým sborem věnujte druhou polovinu přepracování hodnocení, ne promptům.

## Kam dál

- [[addressing-common-misconceptions-ai-education]]: přesvědčení za těmito postupy a jak je korigovat bez blahosklonnosti.
- [[limitations-in-aied-research]]: co důkazní základna zatím neumí podpořit.
- [[reducing-ai-misuse]]: strukturální páky proti zneužití a proč vítězí nad apelem.
- [[pedagogical-safety]]: co tutor může udělat studentovi, i když projde každou obsahovou kontrolou.
- [[should-we-use-ai-detectors]]: důkazy o detektorech v plném rozsahu.
- [[checking-whether-educational-ai-works]]: jak vyhodnotit tvrzení, než ho přijmete.
