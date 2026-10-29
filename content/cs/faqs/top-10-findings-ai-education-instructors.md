---
title: "Kterých deset zjištění z výzkumu AI ve vzdělávání by měli vyučující znát?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
updated: "2026-10-29T11:57:27-04:00"
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-10-28T11:06:17-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Je týden před začátkem semestru nebo týden po první velké odevzdávce a někdo se vás zeptal na něco, co ze zkušenosti odpovědět nedokážete: co studenti smějí s AI v tomto zadání dělat a co pak známka prokazuje. Možná se vrátila domácí esej vypilovaná způsobem, který neodpovídá dřívější práci studenta. Možná vaše katedra píše zásady pro AI a chce, aby váš kurz byl v souladu do pátku. Možná se student odvolává proti známce a vy nedokážete ukázat, co práce prokazuje.

Základní zjištění z výzkumu, který tato znalostní báze shromáždila: to, jak [[generative-ai|generativní AI]] zabudujete do činnosti, rozhoduje o tom, zda posílí myšlení, nebo je nahradí. Pákou, kterou ovládáte, je návrh úlohy. Testem každého návrhu je, co studenti ještě dokážou, když nástroj zmizí. Deset zjištění, po nichž je tato stránka pojmenována, je níže, seřazeno podle rozhodnutí, k němuž každé z nich vede.

## Stručně

**1.** Pojmenujte myšlení, kvůli kterému zadání existuje, a pak dejte AI práci, která toto myšlení nevykonává.

**2.** Stanovte pravidlo pro AI na úrovni zadání, a ne kurzu, a napište vedle něj důvod tam, kde ho studenti uvidí.

**3.** Zařaďte do každé jednotky alespoň jeden známkovaný krok, který student splní bez přítomnosti AI.

**4.** Hodnoťte činnost podle toho, co studenti dokážou o týdny později bez podpory, a ne podle kvality toho, co odevzdají.

**5.** Ptejte se, jak studenti nástroj používali, a známkujte ověřování, a ne přihlášení.

**6.** Dívejte se, kterým studentům návrh pomáhá, protože průměr skrývá ty, které pouští.

## Rozhodněte, k čemu zadání je

Napište jednu větu, která pojmenuje schopnost, ještě než se dotknete nástroje: co má student na konci této jednotky umět, co na začátku neuměl? Odpověď může znít: sestavit argument z důkazů, napsat důkaz, dojít k diagnóze, učinit designové rozhodnutí v omezeních. Pokud to nedokážete pojmenovat, pravidlo pro AI bude libovolné a studenti si toho všimnou.

Proč to musí být první, vysvětlují dvě linie práce. [[productive-failure|Produktivní selhání]] je zjištění, že se žáci často naučí víc, když se o problém pokusí dřív, než jim někdo ukáže postup, takže tření je někdy mechanismem, a ne překážkou k odstranění. [[icap-framework|Rámec ICAP]] předpovídá odlišné učení při pasivním, aktivním, konstruktivním a interaktivním použití téhož materiálu. Obě linie ukazují na jedinou návrhovou otázku: co student dělá, zatímco je nástroj otevřený?

Nejjasnější ilustrace v korpusu pochází ze srovnání chatbota opřeného o teorii, který skafoldoval studentská vysvětlení, s běžným ChatGPT a s dosavadní výukou. Okamžité rozdíly nebyly signifikantní. O čtyři týdny později si skafoldovaná skupina uchovala víc konceptuálních znalostí. Je to jedna studie, a ne univerzální efekt, a jejím užitečným obsahem je tvar výsledku: návrh může převážit schopnost modelu, protože podmínky od sebe oddělovalo to, co činnost po studentech žádala.

[[kumar-genai-computing-education-systematic-review-2026|Systematický přehled 72 recenzovaných studií z počítačového vzdělávání]] dochází ke stejné vrstvě z opačné strany. Kritické zapojení s výstupem AI nazývá „společným mechanismem, který v korpusu spojuje každou účinnou intervenci“, a doporučuje [[scaffolding|stupňovaný přístup]], tedy zavádět generativní AI až poté, co byla prokázána základní kompetence. Ani jedno tvrzení není o tom, který produkt si licencujete.

## Dejte AI práci, která není myšlením, jež známkujete

Desetiletí [[intelligent-tutoring|výzkumu inteligentního tutoringu]] popisují vzorec, který funguje: diagnostikovat, čemu student rozumí, klást otázky, dávat stupňované nápovědy, žádat vysvětlení, dávat zpětnou vazbu. Všechno kromě předání řešení. Současná práce na [[pedagogical-agent|pedagogických agentech]] vede stejnou hranici mezi vyučovacím chováním a produkcí odpovědí a [[thermomix-genai-education-analogy-2026|analogie s Thermomixem]] to činí konkrétním. Jeden přístroj může vařit za vás, a pak ztratíte dovednost, nebo může fungovat jako partner pro testování nápadů, kterým stále musíte porozumět. Tyto režimy odpovídají ICAP: pasivní, aktivní, konstruktivní, interaktivní.

Úzké nástroje ukazují stejný princip. [[structrag-diagram-reasoning-ai-tutoring|Tutor, který čte inženýrské diagramy strukturálně]], dosáhl F1 93,0 % na úrovni hran proti přesnosti 89,3 % u celého diagramu, což znamená, že dokáže pojmenovat konkrétní chybějící nebo špatně přečtené spojení, i když je celý diagram špatně. To je zpětná vazba, se kterou student může něco udělat, místo prospěl nebo neprospěl.

Těžší otázka je, co tutor smí doporučit. Když [[tuo-armada-multi-agent-debate-overreliance-2026|multiagentní debata]] nahradila „tady je odpověď AI“ diskusí, jejíž vlastní preferovaný postoj byl zadržen, škodlivé přepnutí na nesprávný postoj AI kleslo ze 42-60,5 % na 5,7-8,2 %. Přijetí správného postoje AI také kleslo, z 61,1-72,3 % na 22,1-33,3 %. Zadržení doporučení chrání studentův původní úsudek a opravu nechává na uvažování, takže návrh vyměňuje opravu chyb za méně sebevědomých chybných kroků. Rozhodněte, které z těch dvou od výměny chcete, než napíšete prompt.

Ve výuce je to levné na zavedení. [[socratic-method|Sokratovská]] sekvence je vzorec, k němuž mířit, s nástrojem, který se ptá, a ne odpovídá. Řekněte studentům, ať žádají o „jednu nápovědu“, „ptej se mě“ nebo „kritizuj mé uvažování“, a z „vyřeš to“ udělejte neobvyklý případ. Měníte výchozí sloveso interakce, což je ta část, kterou studenti skutečně ovládají.

Jedno omezení stojí za to říct přímo. Většina těchto důkazů pochází z krátkých úloh v hrstce kurzů a žádný z nich neslibuje, že tutor dávající nápovědy zvedne známky u zkoušky ve vaší skupině. Na tuto otázku potřebujete randomizovaný pokus probíraný níže a jeho výsledek je střízlivý.

## Stanovte pravidlo pro zadání a řekněte proč

Užitečný rámec odděluje tři případy. Omezte AI tam, kde měříte samostatnou kompetenci. Skafoldujte ji tam, kde ohraničená pomoc tuto kompetenci neoslabuje. Vyžadujte ji tam, kde je dovedná spolupráce člověka s AI sama tím, co se studenti musí naučit. Většina kurzů obsahuje všechny tři případy, v různých týdnech, a proto jedno pravidlo na úrovni kurzu neustále selhává na okrajích.

[[zou-is-this-a-trap-student-teachers-genai-2026|Smíšená studie 85 budoucích učitelů]] ukazuje, co vzniká z pravidla bez důvodu. 62,4 % vzorku odmítlo generativní AI použít, i když byla povolena, a 41,5 % z těch, kdo odmítli, uvedlo strach, že budou obviněni z [[academic-integrity|plagiátorství]]. 9 z 11 dotazovaných četlo permisivní zásadu samu jako past. V téže studii použilo povolenou generativní AI vůbec jen 37,6 %, jejich volby sledovaly kulturu programu a [[assessment|návrh hodnocení]] víc než povolení kteréhokoli jednotlivého kurzu a jejich vlastní prohlášení o použití podhodnocovala skutečné použití v každém kurzu.

Čtěte ta čísla jako zadání pro návrh. Povolení bez uvedeného účelu vypadá jako pastička a zákaz bez uvedeného účelu vypadá jako překážka, kterou je třeba obejít. Studenti reagují na zdůvodnění připojené k této úloze. Dejte pravidlo do zadání, jeden řádek, a udělejte ten řádek tak konkrétní, aby student poznal, jestli pomoc, kterou se chystá přijmout, podkopává to, co známkujete.

## Známkujte něco, co student vytvořil bez nástroje

To je krok, který dělá tu práci, a důkazy jsou tu nejméně dvojznačné na celé stránce.

Přehled 72 studií zjistil, že generativní AI spolehlivě zvyšovala krátkodobé dokončení a zkracovala čas strávený úlohou ve 36 studiích, což autoři považují za nejlépe replikovaný výsledek v korpusu, a že se tyto zisky v efektivitě „nepřenášejí do samostatného výkonu“ ve 21 studiích. [[yan-cognitive-outsourcing-genai-assessments-2026|Studie myšlení nahlas u 38 vysokoškoláků]] ukazuje, jak se to děje v běžném případě. [[cognitive-offloading|Kognitivní odklánění]] škodí učení nejvíc tehdy, když AI vykonává uvažování, které měl student procvičovat. Zde 76,32 % zůstalo ve vzorci jediného tahu: zeptej se, dostat odpověď, skončit, a jen 21,06 % střídalo použití AI se samostatným čtením a psaním. Největší skupina, 31 z 38, popsala cíle mistrovství, pracovala v roztříštěných jediných tazích a poté uvedla nadměrnou závislost, duševní uspokojení a rychlé zapomínání; jeden z nich to vyjádřil tak, že „rychlost, s jakou to zapomenete, je také velmi vysoká“. [[critical-thinking-paradox-genai-learning-2026|Rámcový článek z roku 2026]] dává tomuto vzorci jméno. Známky a produkty rostou, zatímco duševní práce, která vytváří trvalé učení, klesá.

Randomizovaný pokus rozhoduje argument alespoň pro jedno prostředí. [[bassner-performance-learning-dissociation-ai-programming-2026|Tříramenný RCT s 275 studenty kurzu CS1]] srovnával tutora dávajícího nápovědy, který zadržoval plná řešení, neomezený ChatGPT a tradiční webové zdroje. Skóre z cvičení se ostře oddělila: 71,84 % pro ChatGPT proti 29,85 % u kontroly bez AI, s tutorem dávajícím nápovědy na 57,50 %. Přírůstky konceptuálních znalostí se mezi třemi rameny vůbec nelišily, byly 0,83, 0,71 a 0,85 bodu (čas × skupina p = 0,773). Obě podmínky s AI snižovaly frustraci a vnější zátěž a jen tutor dávající nápovědy zvedl vnitřní motivaci. Nástroj, který studenti hodnotili jako užitečnější a snazší, byl také tím, který nejvíc snižoval zpracování, jež vytváří učení.

Všimněte si, co takový design nemůže podepřít. Je to jeden kurz, jeden semestr, jeden jazyk a skóre z cvičení je svou konstrukcí výkon s podporou, tedy právě to měřítko, před jehož důvěrou studie varuje. Neukazuje, že tutori jsou k ničemu. Ukazuje, že výsledek, který se rozhodnete měřit, rozhoduje o odpovědi, kterou dostanete, a že preference studentů není měřítkem učení.

Známkujte tedy verzi bez podpory. Jedna úloha na jednotku, v níž studenti vybavují, vysvětlují, řeší nebo obhajují myšlenky bez přítomnosti AI, a dejte jí skutečné body. Argument validity, který za tím stojí, je v [[assessment-validity|validitě hodnocení]]: vypilovaný domácí artefakt už neukazuje, že ten, kdo ho odevzdal, má kompetenci, kterou artefakt předvádí. [[redesign-assessment-ai-era]] prochází celou architekturu, včetně levného autentizovaného kroku pro velké kurzy.

## Změňte zadání, které už máte, ne celý kurz

Většina vyučujících, kteří se na to ptají, nestaví nový kurz. Mají semestrální práci, protokol z laboratoře nebo sadu úloh, která roky fungovala, a chtějí vědět, kam umístit šev. Rozeberte zadání krok za krokem, u každého se ptejte, co tam hodnotíte, a nechte odpověď stanovit hranici. To je metoda na úrovni úlohy popsaná v [[mccorkle-aligned-genai-course-policy-2025|McCorkleho práci o sladěné kurzové politice]] a jeden průchod vaším nejspornějším zadáním obvykle stačí k tomu, abyste viděli jeho tvar.

Desetistránková semestrální práce se typicky rozdělí takto. Volba tématu a vyhledávání zdrojů jsou tam, kde žije úsudek, takže nástroj, který navrhne tezi nebo sestaví seznam četby, vykonal část, kterou známkujete. Syntéza a argument jsou konstrukt sám. Formátování citací, kontrola referencí a jazyková úprava jsou kroky, v nichž je použití nástroje pro váš konstrukt neviditelné, a zakazovat ho tam vám nekoupí nic kromě nevole. Řekněte to v zadání, krok za krokem, klidně v krátké tabulce.

Pak učiňte prostřední krok viditelným. Žádejte jednostránkové okomentované zdůvodnění odevzdané s prací, které pojmenuje dva zdroje, jež student odmítl, a proč, jedno tvrzení, které po ověření revidoval, a místo, kde se rozhodl nenásledovat návrh. Známkujte ho se stejnou konkrétností, jakou používáte u textu. Zdůvodnění má váhu jen tehdy, když student, který ho vynechá, ztratí víc, než získá, takže mu dejte dost bodů, aby byla aritmetika zřejmá.

Sada úloh je jednodušší a šev leží jinde. Odpovědi nejsou konstrukt; volba metody a diagnostika chyb jsou. Vyžadujte první krok každé úlohy vlastními slovy studenta, než se otevře jakýkoli nástroj, a jednu úlohu ze sady projděte v hodině bez čehokoli k dispozici. Je to menší změna, než to zní, a mění sadu z produktu, který nedokážete ověřit, na záznam o tom, jak student přemýšlel.

U protokolu z laboratoře je šev obvykle interpretace dat a analýza chyb. Nechte nástroj naformátovat tabulku a zkontrolovat jednotky. Interpretaci, volbu toho, co se počítá jako anomálie, a vysvětlení neshody s očekávaným výsledkem ponechte v rukou studenta a známkujte je s přiřazenými body.

Vzorec se zobecňuje: najděte krok, v němž žije schopnost, ten chraňte, ostatní uvolněte a důkazy o procesu dejte tam, kde jsou body. Čemu se vyhýbáte, je redesign, který mění to, jak práce vzniká, aniž by měnil to, co známka může podepřít.

## Hodnoťte nástroje zpětné vazby a známkování podle pozdějšího výkonu

[[ai-feedback-quality|Zpětná vazba od AI]] může být včasná, konkrétní, škálovatelná a pro studenty přijatelná, i ve [[higher-ed|vysokoškolském vzdělávání]]. Zda učí, závisí na přesnosti, [[pedagogy|pedagogické]] vhodnosti a na [[feedback-literacy|gramotnosti studentů v práci se zpětnou vazbou]], tedy jejich schopnosti zpětnou vazbu posoudit a jednat podle ní. Pokud ji zvažujete pro zpětnou vazbu nebo známkování, čísla níže jsou ta, která přinesete do jednání o nákupu.

[[mcinnes-salvaging-constructive-alignment-genai-2026|Kritická analýza 14 institucionálních pokynů]] zjistila, že obecné prompty produkují výsledky, činnosti a hodnocení izolovaně. Nástroj nemůže vědět, jak propojené téma je, takže jeho zpětná vazba zůstává obecná, a ne diagnosticky přesná.

Konfigurace kvalitu měřitelně posouvá. Ve [[teacher-ai-literacy-prompt-feedback-quality-2026|studii zpětné vazby AI k učebním cílům]] vysvětlil samotný model 26,9 % variace v kvalitě zpětné vazby a přidání promptu to zvedlo na 42,8 %, tedy o dalších 15,9 %. Jediným rysem promptu, na kterém záleželo, byla oborová terminologie; její nahrazení běžnými parafrázemi učinilo zpětnou vazbu výrazně horší. Záležela i volba modelu: Claude 3 a Gemini Advanced produkovaly výrazně hůř hodnocenou zpětnou vazbu než ChatGPT-4.

Známkování je ještě vratší. [[llm-automated-grading-programming-comparison-2026|Srovnání 18 jazykových modelů známkujících 6 081 programátorských odevzdání]] našlo průměrné známky od 0,290 do 0,608 podle modelu, s mírou přesné shody až 0,20 u některých a 0,74 v nejlepším případě. Dva studenti s identickou prací mohou dostat různou známku podle toho, který model katedra licencovala.

Pak je tu otázka, která studenty zajímá, totiž zda zpětná vazba mění to, co dokážou později. [[llm-feedback-handwritten-mathematics-exam-performance-2026|Nasazení na celý semestr v bakalářském kurzu matematiky]] s 343 studenty angličtiny a 236 studenty nizozemštiny generovalo individualizované komentáře a cvičné úlohy z nafocených odpovědních archů. Recenzenti hodnotili cvičné úlohy jako nejsilnější a diagnostickou specifičnost a srozumitelnost jako nejslabší. Randomizované křížení na propojených zkouškových otázkách nenašlo po adjustaci statisticky signifikantní rozdíl (pHolm = 0,104) a návštěvnost sledovala známky u zkoušky mnohem zřetelněji než vystavení zpětné vazbě (ρ = 0,49 a 0,54, obojí p < 0,001). Zpětná vazba, které si studenti cení a podle níž jednají, není totéž jako zpětná vazba, která vytváří měřitelné učení.

Je tu další past, pokud necháte známkovat model. Ve [[llm-grading-self-preference-bias-2026|studii 1 426 psychologických disertací z deseti akademických let]] všechny čtyři hodnotitelé AI ohodnotili studentský text nejníž a text napsaný AI nejvýš. 10 ze 16 srovnání bylo tak velkých, že rozdíly této velikosti jsou ve výzkumu vzdělávání vzácné, až po největší pozorovanou mezeru, a vychýlení bylo nejsilnější u plně AI generovaného textu. Hodnotitel může odměňovat text za to, že je strojový, i když jeho instrukce říkají, aby posuzoval obsah.

## Oddělte studenty, kterým návrh pomáhá, od těch, které pouští

Průměrné zlepšení může skrývat kurz, v němž silní ještě zesílí a slabí dopadnou hůř. [[digital-divide|Digitální propast]] dnes probíhá nejméně ve třech liniích: přístup k nástrojům, dovednost je používat a to, kdo skutečně dostane užitečný výsledek. Už jen dovednost promptování vytváří „promptové privilegium“, v němž zkušenější uživatelé dostávají z téhož systému lepší výstup.

Přehled 72 studií odděluje dva mechanismy. Mezera v dovednostech se objevuje tam, kde studenti se silnějšími [[prior-knowledge|předchozími znalostmi]] mění pomoc v trvalé zisky, zatímco nedostatečně připravení studenti jí nahrazují praxi. Mezera ve zdrojích se objevuje tam, kde spolehlivý internet a placený přístup udržují lepší použití nástrojů napříč institucemi. Jen šest studií v korpusu přímo zkoumalo rovnost, což autoři považují za problém, a ne za poznámku pod čarou; [[equity-in-ai-education|rovnost ve vzdělávání s AI]] je místo, kde se tento argument rozvíjí.

Pomoc může mezeru zavřít, když se zapojí právě ti studenti, kteří ji potřebují. [[co-learning-ai-agent-hidden-rules-2026|Studie se čtyřmi experimenty, v níž se žáci s pomocí AI agenta učí odhalovat skrytá pravidla]], zjistila, že pomoc snížila potřebné tahy o 33-52 % a že prospěch se soustředil u nejslabších, zatímco silnější žáci zůstali převážně nedotčeni. To je nadějná verze a závisí na tom, že pomoc dobře využijí právě ti, kdo ji nejvíc potřebují, což podle mezery v dovednostech bez výuky nezvládnou.

## Ponechte závažná rozhodnutí člověku

Gramotnost akademiků v oblasti AI není tam, kde ji konverzace o zásadách předpokládá. Mezi [[science-educators-ai-literacy-postqualification-2026|učiteli přírodních věd, kteří už dokončili školení o AI]], byla průměrná gramotnost v oblasti AI 16,7 z 30, tedy pod 18,79 referenčního vzorku, a nesouvisela s věkem, pohlavím, délkou praxe ani s tím, kolik AI použili. [[ai-tpack-mathematics-teacher-education-2026|Průzkum 412 budoucích učitelů matematiky]] našel připravenost v rané fázi, s vyučovacími přesvědčeními nejvýš na průměru 5,24 na škále o 7 bodech a technickými znalostmi AI nejníž na 4,23.

To je argument pro ohraničené nástroje, ne pro autonomní. Analýza pokynů navrhuje institucionálně nakonfigurovaného [[rag|retrievalem podpořeného]] agenta, který vede myšlení, aniž by dodával odpovědi, označuje nesoulad a na okrajích eskaluje na člověka, s pravomocí popsanou jako „odvozená a ohraničená“. Pro ponechání lidí ve smyčce, a ne před ní, existuje přímý důkaz: [[instructional-agents-multi-agent-course-gen|systém pro generování materiálů kurzu]] skóroval lépe, když lidé zůstali zapojeni, přičemž režim s největším lidským vstupem zlepšil skóre recenzentů o 0,5-0,9 bodu proti plně autonomnímu režimu. Jeho autonomní recenzenti se těsně shlukovali kolem 2,9-3,1, zatímco lidští hodnotitelé se rozprostřeli a rozlišovali víc, takže autoři ponechali lidský úsudek jako primární signál kvality.

Praktická verze pro kurz: nechte AI navrhovat, třídit a označovat. Přesnost, spravedlnost, soukromí a jakékoli rozhodnutí o postupu studenta ponechte pod [[human-in-the-loop-ai|smysluplným lidským dohledem]]. Rizika, která to činí nezbytným, jsou známá sada: vychýlení, soukromí, transparentnost, [[agency|autonomie]] žáka, odpovědnost a [[pedagogical-safety|pedagogická bezpečnost]]. Kvůli tomuto seznamu záleží [[teacher-ai-competency|pedagogická kompetence v AI]] víc než technická obeznámenost.

## V čem se vyučující v tomto mýlí

**„Vypilovaná práce přede mnou je důkaz, že to student umí.“** Je to důkaz, že práce je vypilovaná. Rozptyl 71,84 % proti 29,85 % ve skóre z cvičení, s plochými konceptuálními zisky v témže pokusu, a 36 studií v přehledu, které našly efektivitu bez transferu, to všechno popisuje vzdálenost mezi výkonem s podporou a schopností. Pokud známkujete jen artefakt, změřili jste jen artefakt.

**„Když je AI tutor, je na správné straně hranice.“** Štítek tu záruku nenese. V pokusu CS1 se tutor dávající nápovědy vyhnul škodě, kterou neomezený ChatGPT napáchal u cvičení, a přesto nepřinesl žádnou konceptuální výhodu proti situaci zcela bez AI. Zadržet konečnou odpověď není totéž jako zadržet uvažování a tutor může dělat to druhé, zatímco to vypadá, že dělá jen to první.

**„Detektor nebo přísnější pravidlo vyřeší problém integrity.“** Detekce řeší jednu reakci z několika. Studie budoucích učitelů zjistila, že strach z obvinění potlačoval povolené použití, že kultura programu předpovídala chování lépe než jakákoli kurzová politika a že vlastní prohlášení podhodnocovala použití v každém kurzu. Přísnější pravidlo mění to, co studenti tají, a ne to, co se učí.

**„Jedno pravidlo pro celý kurz je spravedlivější a jednodušší.“** Jednodušší ano. Důkazy mluví pro pravidla stanovená po jednotlivých zadáních, protože tři případy, omezit, skafoldovat a vyžadovat, v většině kurzů koexistují a totéž povolení znamená něco jiného v protokolu z laboratoře a v reflexi. Plošná stanoviska jsou navíc ta, která studenti nejsnáze obejdou.

**„Studenti, kteří říkají, že nástroj pomáhá, se z něj učí.“** Spokojenost je [[self-report-measures|měřítko sebevýpovědi]] a v pokusu CS1 byla nejlépe hodnocenou podmínkou ta, která nejvíc snižovala zpracování stojící za učením. Nasazení v matematice našlo stejné rozdělení: zpětná vazba, které si studenti cenili, a žádný signifikantní rozdíl u zkoušky.

**„Gramotnost v oblasti AI je dovednost promptovat a studenti ji pochytí používáním nástroje.“** Rámce pojímají [[ai-literacy|gramotnost v oblasti AI]] jako konceptuální porozumění, operační dovednost, [[critical-thinking|kritické hodnocení]], [[ethics|etický]] úsudek a vědomí omezení. Přehled výslovně uvádí, že [[prompt-engineering|prompt engineering]], ověřování výstupů a analýza chyb AI jsou naučitelné dovednosti, které se vystavením nástroji nevyvinou. Vyškolení učitelé přírodních věd se skóre 16,7 z 30 jsou empirickou verzí tohoto tvrzení.

**„Problém rovnosti je přístup.“** Přístup je jedna ze tří linií. Dovednost a to, kdo dostane užitečný výsledek, jsou další dvě, a jen šest studií v korpusu zkoumalo cokoli z toho přímo. Dát každému studentovi licenci řeší tu nejsnazší třetinu.

## Co vám na to řeknou

**„Moji studenti říkají, že jim AI pomáhá.“** Obvykle jim pomáhá s prací, která leží před nimi, a zjištění je o tom, co zůstane potom. Zeptejte se, co ještě dokážou bez podpory, a dostanete jinou odpověď, a proto existuje známkovaný krok bez podpory.

**„Učím 200 studentů. Nemůžu číst návrhy ani dělat ústní kontroly.“** Nemusíte číst všechno. Jedna aplikace v hodině nebo krátké nahrané vysvětlení v nejrizikovějším zadání plus namátková kontrola u práce, která nevypadá v souladu s dřívějšími odevzdávkami, pokryje většinu rizika. Stupňované odevzdávky, okomentovaná zdůvodnění a procesní [[eportfolio|portfolia]] se škálují; známkování ověření záměrně chybného výstupu AI také.

**„Máme jen detekci.“** Detektory mají dokumentované problémy se spolehlivostí a spravedlností a validita je těžší problém: vypilovaný domácí produkt už neukazuje, že ten, kdo ho odevzdal, má danou kompetenci. Důkazy o procesu jsou levnější než závody ve zbrojení a produkují něco, co dokážete obhájit při odvolání.

**„Zakázat to je jednodušší.“** Jednodušší, a obvykle to selže. Přijetí ve studii budoucích učitelů sledovalo kulturu programu, a ne politiku jediného kurzu, a uvádění podhodnocovalo skutečné použití v každém kurzu. Zákaz vám také bere možnost vidět, jak by studenti nástroj používali, když odejdou.

**„Neučím o AI. To není můj předmět.“** Zjištění se týkají vašeho předmětu. Když AI vykonává praxi, kterou váš kurz existuje poskytnout, právě tehdy zasahuje, a toto zasahování se objeví ve vašich hodnoceních, ať už nástroj zmíníte, nebo ne.

**„Důkazy jsou příliš nové, než aby se podle nich dalo jednat.“** Částečně pravda a platí to oběma směry. Velká část korpusu jsou krátké intervence, studie se [[self-report-measures|sebevýpovědí]], jednotlivé obory nebo práce z let 2025 a 2026, a tvrzení z vyzrálého výzkumu [[intelligent-tutoring|inteligentního tutoringu]] jsou silnější než tvrzení o neomezených univerzálních [[conversational-ai|chatbotech]]. Kde za tvrzením dnes stojí randomizovaný pokus, tedy oddělení výkonu a učení v pokusu CS1 a výsledek zpětné vazby v nasazení v matematice, je tento pokus citován zde. Kde nestojí, berte zjištění jako nejlepší dostupné vodítko, a ne jako ustálené pravidlo, a buďte nejskeptičtější u výsledků, které ukazují jen spokojenost, rychlost úlohy, kvalitu výstupu nebo okamžitý výkon s podporou.

## Co udělat tento týden

**1.** Vyberte zadání, které dokážete obhájit nejméně. Napište větu o schopnosti na začátek zadání.

**2.** Přidejte jeden krok, který proběhne bez přítomnosti AI: pětiminutovou aplikaci v hodině, krátké nahrané vysvětlení nebo odstavec napsaný v učebně. Dejte mu skutečné body.

**3.** Uveďte podmínku pro AI u tohoto zadání a přidejte jeden řádek důvodu. Pokud zadání míchá kroky, řekněte, které kroky jsou které.

**4.** Přepište jeden prompt, který dáváte studentům, z „vyřeš to“ na „dej mi jednu nápovědu a polož mi otázku“, a řekněte jim proč.

**5.** Před začátkem semestru odneste změnu vedoucímu programu a tomu, kdo schvaluje úpravy, aby první odvolání nebylo zároveň prvním rozhovorem.

## Kam dál

Pro verzi těchto nedorozumění podle jednotlivých zainteresovaných stran viz [[addressing-common-misconceptions-ai-education]]. Pro požadavky na návrh, které vyplývají ze zjištění o rovnosti a lidském úsudku, viz [[equity-ethics-pedagogical-safety-research]]. [[redesign-assessment-ai-era]] dotahuje hodnoticí polovinu dál a [[does-ai-help-students-learn]] je přehled důkazů stojících za tvrzeními na této stránce. Pokud volíte mezi redesignem a vymáháním, [[reduce-ai-cheating]] a [[course-ai-policy]] jsou doprovodné stránky.
