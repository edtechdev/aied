---
title: "Čemu by se vzdělavatelé měli u AI vyhýbat?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Většina doporučení k AI ve vzdělávání je formulována jako výčet toho, co vyzkoušet. Tato stránka je ten druhý seznam: postupy, u nichž důkazy říkají, že je třeba přestat, uspořádané podle role, která by s nimi musela přestat. Záměrně to není seznam mylných přesvědčení — těmi se zabývá [[addressing-common-misconceptions-ai-education|FAQ o mylných představách]] a konceptuální stránka [[misconceptions]] vysvětluje, proč přetrvávají — ani seznam toho, co výzkum zatím neumí říct, což pokrývá [[limitations-in-aied-research|omezení výzkumu AIEd]]. Těžiště je tady v kroku po přesvědčení: co lidé skutečně dělají, co je to stojí a co dělat místo toho.

Tři selhání se opakují napříč všemi rolemi. **Substituce** — nástroj provádí myšlení, které měl udělat student, a výstup se hodnotí, jako by ho udělal student. **Nezasloužený důkaz** — signál, který se snadno sbírá (jistota, plynulost, zapojení, míra dokončení), se bere jako důkaz něčeho, co ukázat nemůže. **Struktura ponechaná na apelu** — od varování, věty v politice nebo školení se očekává práce, kterou musí udělat návrh rozhraní, návrh hodnocení nebo správa a řízení.

## Stručně

**1.** Nikdy neznámkujte, necitujte ani nepropagujte výstup jako důkaz schopnosti, která ho vytvořila.

**2.** Vždy sbírejte měření bez pomoci vedle měření s asistencí.

**3.** Plynulost, jistotu a zapojení berte jako rysy používání, ne jako učení.

**4.** Pojistku dejte do pracovního postupu, ne do varování.

**5.** Předpokládejte, že jakákoli data, která nástroj vidí, budou uchována, zkombinována a uniknou.

**6.** Pokud tvrzení přichází s demem, ale bez srovnání, je to marketing.

## Pro studenty

**Nepředávejte tu část, kterou máte procvičovat.** Rozdíl není v tom, kolik AI používáte, ale která kognitivní práce se přesouvá. Outsourcování domácích úkolů zvyšuje známky z domácích úkolů a snižuje známky z písemné zkoušky bez pomůcek — v jedné středoškolské studii zisk 18 % proti ztrátě 20 % — protože praxe, která buduje vybavitelnou znalost, přešla na nástroj ([[reducing-ai-misuse]]). Pokud je cvičení to podstatné, nástroj cvičení udělat nemůže.

**Nečtěte plynulost jako správnost.** Plynulý text je výstup jazykového modelu bez ohledu na to, zda je obsah pravdivý, a mechanismus, který ho činí přesvědčivým, je tentýž, který ho činí chybným ([[hallucination-risk]]). Ověřujte konkrétní tvrzení, ne tón odstavce. Návyk ověřovat sám nevznikne: v panelu 900 dospělých, kterým bylo dáno shrnutí od AI, čtenáři následovali zdroj citovaný uvnitř něj v 1 % návštěv ([[trust-calibration]]).

**Nepřijímejte souhlas jako zpětnou vazbu.** Modely přitakávají podstatně víc než lidé — napříč 11 modely reakce AI potvrdily uživatele o 49 % častěji než reakce lidí — a právě ten přebytek dělá interakci pocitově podpůrnou ([[ai-sycophancy]]). Tutor, který s vámi nikdy nesouhlasí, odstranil korektivní signál, pro který jste přišli. Žádejte námitku, ne potvrzení.

**Když uvíznete, nevyměňujte otázku za odpověď.** Produktivní zápas, který přeskočíte, je to učení; hledání pomoci, které získá odpověď, je jiné chování než hledání pomoci, které získá nápovědu ([[help-seeking]], [[desirable-difficulties]]). Používejte nástroje, které hotovou odpověď zadržují.

**Nevkládejte do nástroje osobní, zdravotní ani rodinné údaje, abyste dostali lepší odpověď.** Nástroj nemá povinnost je zapomenout a cena za soukromí není v kvalitě odpovědi vidět ([[privacy]]).

## Pro rodiče a rodiny

**Nedělejte domácí úkol s nástrojem ani ho nenechávejte dělat vedle sebe.** Vzorec, který se v datech objevuje, je nafouknutí známek se skrytou cenou: známky z domácích úkolů nahoru o 18 %, zatímco známky z písemné zkoušky bez pomůcek klesají o 20 % ([[reducing-ai-misuse]]). Co můžete zkontrolovat, je postup — umí vaše dítě vysvětlit krok, udělat ho znovu na papíře a říct, čím si nebylo jisté? Pokud ne, úkol udělal nástroj.

**Nenechte z chatbota důvěrníka.** Pochlebné systémy přitakávají mnohem víc než lidé — o 49 % víc napříč 11 modely — a právě přitakávání je mechanismus, který je činí bezpečnými pro rozhovor ([[ai-sycophancy]]). Ve velké longitudinální studii se uživatelé obraceli na pochlebnou AI pro osobní rady téměř tak často jako na blízké přátele a rodinu, s nižší spokojeností ve skutečných vztazích ([[sycophantic-ai-social-interaction-2026]]). Dítě, které přinese trápení modelu, jenž vždy souhlasí, není slyšeno; dostává zrcadlo.

**Nepředávejte generativní chatbot malému dítěti a neříkejte tomu dohled, protože jste v místnosti.** Věkově odstupňované doporučení je konkrétní: strukturované ne-generativní aktivity pro věk 9 až 12 let, generativní použití pod dohledem s etickým uvažováním od 13 let ([[ai-guidance-children-under-13]]). U nejmenších dětí je rizikem přesvědčení — děti v předoperačním stadiu přijímají generovaný obsah jako pravdivý a systémy nejsou vývojově kalibrované ve zpětné vazbě, kterou dávají. Společné používání s dospělým znamená ptát se, co hračka právě udělala, ne dohlížet ode dveří ([[early-childhood-elementary-ai-education]]).

**Nepředpokládejte, že školní nástroj chrání data vašeho dítěte, protože ho škola vybrala.** Ptejte se, co se uchovává, jak dlouho, zda se na něm něco trénuje a kdo další to vidí ([[privacy]]). Uvědomění nevzniká z vystavení: měsíc po hodině, v níž studenti sledovali své vlastní zaznamenané chování promítané naživo, 66 % třídy sedmého ročníku stále volilo nejméně ochranné nastavení chatbota ([[privacy]]).

**Nepoužívejte výsledek detektoru k obvinění dítěte ani k podpoře obvinění ze školy.** V nejsilnějším kontrolovaném testu detektory označily 9–15 % neupraveného lidského psaní a zachytily méně než 4 % humanizovaných přepisů od AI; při realistických základních mírách převažují falešné pozitivy nad skutečnými ([[ai-detection]]). Berte označení jako důvod vyžádat si historii verzí a rozhovor, ne jako zjištění.

**Nezávěrejte, že zákaz nástroje je bezpečná volba.** Nedůvěra je selhání kalibrace s vlastní cenou — promarněnou schopností — a dovednost, na níž záleží, je odpovídající jistota, ne vyhýbání ([[trust-calibration]]). Užitečný rodičovský krok je tentýž, který výzkum podporuje u studentů: vyžadujte krok ověření a udělejte ho tak levným, aby ho unavené dítě skutečně udělalo ([[verify-ai-output]]).

**Nepleťte si obsahový filtr s bezpečností.** Filtry řeší, co systém řekne; neřeší, co interakce dělá s žákem — erodovanou praxi, pochlebné přitakávání nebo nerovnoměrná odmítnutí ([[pedagogical-safety]]).

## Pro vyučující

**Necertifikujte výstup jako schopnost.** Vypilovaná odevzdaná práce je důkazem vypilované odevzdané práce. Pokud hodnocení nedokáže rozlišit, co student umí bez pomoci, přestalo měřit to, co osvědčení tvrdí ([[assessment-validity]], [[authentic-assessment]]). Řešením je přepracování úlohy, ne přísnější čestný kodex.

**Nepoužívejte skóre detektoru jako důkaz pochybení.** Nejsilnější kontrolovaný test označí 38–80 % lehkých úprav AI v souladu s pokyny a 9–15 % neupraveného lidského psaní, zatímco zachytí méně než 4 % přepisů prohnaných humanizační službou; 14 komerčních nástrojů v nezávislém benchmarku spadlo pod 80 % přesnosti a při realistických základních mírách převažují falešné pozitivy nad skutečnými ([[ai-detection]], [[should-we-use-ai-detectors]]). Detektor může rozhovor zahájit; nemůže ho ukončit.

**Nepřidávejte AI do hodnocení, které jste nepřepracovali.** Přišroubování nástroje k úloze navržené pro výkon bez pomoci vytváří přesně to nafouknutí známek, které skrývá ztrátu — domácí úkoly nahoru, zkouška dolů. U každé známkované úlohy se ptejte, co by ukázala verze bez pomoci, a nejdřív opravte úlohu ([[reducing-ai-misuse]]).

**Nepovažujte zapojení za učení.** Čas strávený úkolem, spokojenost, objem hledání pomoci a aktivita v chatu se všechny snadno instrumentují a všechny jsou slučitelné s tím, že k učení nedochází vůbec. Pojistka, která snížila přepínání studentů k nesprávnému stanovisku AI ze 42–60,5 % na 5,7–8,2 %, nepřinesla v rámci sezení žádný měřitelný účinek na učení (β = 0,03, p = 0,18). Chování vydrželo; učení se nepohnulo ([[student-engagement]]).

**Nespoléhejte na varování tam, kde by rozhraní mohlo omezit.** Tutor, který umí vytvořit hotovou odpověď, ji pod tlakem termínu vytvoří. Pojistka, která funguje, je ta zabudovaná do interakce, ne věta v sylabu ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Nevkládejte práce studentů, IVP, záznamy o kázeňských opatřeních ani identifikovatelné návrhy prací do spotřebitelského nástroje.** Minimalizace dat je rozhodnutí o návrhu, které děláte jménem studenta, ať už jste o něm přemýšleli, nebo ne ([[privacy]]).

## Pro rozvoj výuky a pedagogických sborů

**Neveďte školení na nástroj a neříkejte tomu gramotnost v AI.** Sezení o promptování učí rozhraní produktu; [[ai-literacy]] je schopnost posoudit, kdy má být nástroj použit, co dělá a co ověřit. Učitelé, kteří se naučí tlačítka bez úsudku, odcházejí s jistotou a bez kalibrace ([[teacher-ai-competency]]).

**Neveďte jednorázový profesní rozvoj a nečekejte, že se praxe změní.** Důkazy o [[professional-training|profesním učení]] jsou konzistentní ohledně délky a následné podpory: jednotlivé akce posouvají sebevykazovanou jistotu, zřídka chování ve třídě, a přírůstek jistoty může maskovat nepřítomnost změny ([[educational-development]]).

**Neignorujte systém hodnocení, který ponecháváte v platnosti.** Pedagogové přijmou praxi, kterou učíte, jen pokud hodnocení, jemuž podléhají, tuto praxi nepostihuje. Workshop o návrhu úloh odolných vůči AI, který běží vedle nezměněného zkouškového režimu, učí pedagogy, že školení je dekorace.

**Nepředvádějte nekritické použití, před nímž varujete.** Demonstrace nástroje generováním plánu hodiny před pedagogickým sborem, bez kroku ověření, učí publikum, že výstup je produkt.

**Nepřijímejte ukázku od dodavatele jako důkaz účinnosti.** Tvrzení, které hodnotíte, se týká učení a ukázka předvádí schopnost. Žádejte výsledky bez pomoci, výsledky podskupin a testování bezpečnosti v mnoha kolech ([[checking-whether-educational-ai-works]]).

## Pro vývojáře vzdělávacího softwaru

**Neoptimalizujte metriku, kterou lze snadno zaznamenat.** Délka sezení, počet zpráv a hodnocení spokojenosti se zlepší téměř při jakékoli změně; učení často ne. Tentýž tým, který dodá pojistku, může dodat dashboard odměňující objem interakce, a oba budou ukazovat opačným směrem ([[learning-analytics]], [[student-engagement]]).

**Nedodávejte detektor bez validační studie proti konstruktu.** Model, který má 0,98 F1 na uniklém rozdělení dat, může spadnout na 0,60 při validaci nezávislé na testu, a detektor úsměvu může běžet *negativně* proti empatii hodnocené pozorovatelem, protože mu chybí kontext, který má lidský hodnotitel ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Zveřejněte validační protokol, ne jen titulní číslo.

**Neodvozujte afekt, pozornost ani „zapojení“ z tváří a těl bez souhlasu a uvedeného účelu.** Riziko v mnoha kolech není rizikem jednoho kola: míra újmy v jednom přehledu stoupla z přibližně 18 % při hodnocení jednoho kola na přibližně 78 % při hodnocení mnoha kol, takže systém certifikovaný na izolovaných promtech je certifikovaný na interakci, kterou studenti nezažívají ([[pedagogical-safety]], [[privacy]]).

**Neskrývejte předání.** Student, který nepozná, kdy tutor generuje a kdy vyhledává, nebo kdy je ve smyčce člověk, nemůže v něm kalibrovat důvěru, a automatizační zkreslení funguje nejčistěji, když má systém pravdu a člověk přestal kontrolovat ([[automation-bias]], [[trust-calibration]]).

**Nenavrhujte pro benchmark a pak to vydávejte za třídu.** Výkon na benchmarku je vlastnost benchmarku. Uveďte podmínky použití, které jste testovali, populaci a úlohy; jinak bude číslo čteno jako slib o jiném prostředí ([[limitations-in-aied-research]]).

**Nedělejte z nástroje jedinou cestu k pomoci.** Pokud přístup studenta ke zpětné vazbě závisí na dostupnosti modelu, kvótě nebo licenci, otázku spravedlnosti už rozhodl nákup ([[equity-in-ai-education]]).

## Pro administrátory ve vzdělávání

**Nekupujte tvrzení o schopnostech jako důkazy o výsledcích.** Dodavatelé umí předvést produkt; jen hodnocení umí předvést učení. Vyžadujte výsledky bez pomoci, výsledky podskupin, úbytek účastníků a plán, co se stane po skončení pilotu ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Nenasazujte dohled jen proto, že je dostupný.** Proctoringové systémy snímají snímky tváří, doklady totožnosti, skeny místnosti včetně 360stupňových záběrů a zvuk z mikrofonu, a přehled 80 studií zjistil, že jen 25 % splnilo laťku vykazování pro otázky, na které instituce před nasazením potřebuje odpovědi ([[privacy]], [[remote-proctoring]]). Cena dopadá na studenty; důkazní základna je tenčí, než smlouva naznačuje.

**Nepište politiku složenou jen ze zákazů a neříkejte tomu správa a řízení.** Zákaz bez přepracování hodnocení, bez podpory a bez cesty odvolání chování přesouvá, místo aby mu předcházel, a trestá studenty, kteří nejméně umí napadnout falešné obvinění. Politika musí pokrýt i hodnotitele: dvě z pěti strategií nepřímé injekce promptu vložených do odevzdané práce zvýšily skóre neprospívající eseje ([[institutional-ai-policy]], [[course-ai-policy]]).

**Nezaměňujte adopci se zlepšením.** Dashboard, který hlásí používání, spokojenost a dokončení, bude vypadat jako úspěch, zatímco míra učení zůstane plochá. Rozhodněte předem, který výsledek by vás přiměl smlouvu zrušit ([[ai-ed-evaluation]]).

**Nenechte přístupnost přicházet jako žádost o úpravu.** V přehledu 40 studií digitálních asistivních technologií pro neurodivergentní studenty jich 28 podmiňovalo účast formální diagnózou — model podmíněný diagnózou vylučuje každého studenta, který má potřeby a nemá nálepku ([[accessibility]], [[universal-design-for-learning]]).

## Pro výzkumníky ve vzdělávání

**Nenechte sebevýpověď nést kauzální tvrzení.** Jistota, vnímané učení a spokojenost jsou výsledky, ale ne ty výsledky, které většina studií tvrdí, že měří. Literatura o [[empathy|empatii]] je nejjasnější případ: obor, který chce učit empatii, většinou měří pohodlí, a nejsilnější přehled 17 studií našel přírůstky jistoty mnohem častěji než důkazy o samotné empatii ([[self-report-measures]], [[empathy]]).

**Necitujte účinek bez jeho designu.** V kritickém přehledu 80 studií HCI o kritickém myšlení s AI jich 42 nemělo kontrolní skupinu. Titulní účinek z 30 studentů v jednom kurzu na jednom pracovišti je obvyklá podoba křehkého tvrzení ([[limitations-in-aied-research]]).

**Nevykazujte heterogenitu bez modelu.** Tatáž data dávají I² = 82,98 % při modelu s pevnými efekty a 15,75 % při modelu s náhodnými efekty; citované I² bez modelu je neinterpretovatelné ([[meta-analysis-systematic-review]]).

**Nezobecňujte z jednoho kontextu a neříkejte tomu zjištění.** Jeden kurz, jedna instituce, jedna verze modelu, jeden jazyk. Chování modelu se mění s každým vydáním a detektory trénované na jedné generaci ztrácejí senzitivitu na další ([[research-gaps-aied]], [[ai-detection]]).

**Nepovažujte korelaci mezi interakcí a výsledkem za mechanismus.** Objem promptů neměří kognitivní odklánění — shluky podle objemu se nelišily v rozložení kognitivní práce a ručně kódovaný dialog nenašel odklánění vůbec v 49,6 % ze 125 dialogů ([[cognitive-offloading]]). Měřte práci, ne její viditelnou stopu.

**Nezveřejňujte odstavec o omezeních, který mohl být napsán před studií.** Pojmenujte konkrétní hrozbu, konkrétní počet a tvrzení, které ohraničuje. To dělá omezení použitelným pro dalšího čtenáře ([[interpreting-and-applying-aied-research]]).

## Proč to patří k sobě

Každá položka výše je případ, kdy se zástupný ukazatel povýšil na verdikt: esej zastupuje pisatele, skóre zastupuje pochybení, úsměv zastupuje empatii, demo zastupuje učení, politika zastupuje správu a řízení. Oprava je vždy tentýž krok — pojmenovat konstrukt, najít měřítko, které by mohlo vyjít opačně, a sbírat ho vedle toho pohodlného.

To je také důvod, proč tato varování nejsou seznamem věcí, které jsou vždy špatné. Detektor může být důvodem promluvit se studentem. Chatbot může být užitečná zkouška nanečisto. Dashboard může být podnětem položit otázku. Škoda je v substituci, ne v nástroji.

## Co udělat tento týden

- Vyberte jednu známkovanou úlohu a napište, co by ukázala se zavřeným nástrojem. Pokud je odpověď „nic jiného“, problém je v úloze.
- Přidejte jedno měření bez pomoci do kurzu, který zatím vykazuje jen výkon s asistencí.
- Přečtěte si smlouvu své instituce na proctoring nebo nástroje AI kvůli uchovávání, sekundárnímu využití a podmínkám porušení — a zkontrolujte, zda popis souhlasu odpovídá tomu, co systém skutečně snímá.
- Požádejte dodavatele o výsledky bez pomoci a výsledky podskupin. Pokud je odpovědí demo, máte odpověď.
- Na příštím sezení s pedagogickým sborem věnujte druhou polovinu přepracování hodnocení, ne promptům.

## Kam dál

- [[addressing-common-misconceptions-ai-education]] — přesvědčení za těmito postupy a jak je korigovat bez blahosklonnosti.
- [[limitations-in-aied-research]] — co důkazní základna zatím neumí podpořit.
- [[reducing-ai-misuse]] — strukturální páky proti zneužití a proč vítězí nad apelem.
- [[pedagogical-safety]] — co tutor může udělat studentovi, i když projde každou obsahovou kontrolou.
- [[should-we-use-ai-detectors]] — důkazy o detektorech v plném rozsahu.
- [[checking-whether-educational-ai-works]] — jak vyhodnotit tvrzení, než ho přijmete.
