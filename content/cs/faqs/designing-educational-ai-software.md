---
title: "Jaké jsou osvědčené postupy a tipy pro návrh efektivního vzdělávacího softwaru s AI?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T11:57:26-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Váš tým má funkční prototyp tutora a za tři týdny ukázku pro školní obvod. Nebo vás partnerská škola požádala, abyste na její čtečku kurzů nasadili chatovací rozhraní, a někdo tvrdí, že to je práce na dva týdny. Nebo vám hodnotitel veřejných zakázek vrátil bezpečnostní část s jedinou větou: co přesně jste testovali?

Odpověď je užší, než většina zadání produktu předpokládá. Vzdělávací AI funguje jako ohraničený expert pod lidským dohledem: schopnosti omezené na vymezenou doménu, ukotvené v obsahu schváleném vyučujícím, nikoli v paměti modelu, navržené společně s učiteli a studenty, kteří ji používají, a hodnocené na trvající interakci v mnoha kolech. Právě tuto poslední klauzuli většina týmů vynechává. Pedagogická škoda se objevila u každého modelu testovaného v níže uvedeném benchmarku a míra selhání stoupla ze 17,7 % u jednokolových interakcí na 77,8 % u vícekolových konverzací.

## Stručně

**1.** Sepište, co rozhoduje systém a co rozhoduje učitel. Tahle hranice se stane architekturou.

**2.** Hodnoťte vícekolovou interakci citlivou na obor proti skutečnému kurikulu, ne jednotlivé prompty proti obecné bezpečnostní rubrice.

**3.** Ukotvěte odpovědi ve schváleném obsahu a držte ověřovací komponentu oddělenou od konverzační.

**4.** Ke každému studentskému odevzdání přistupujte jako k nedůvěryhodnému vstupu, i když ho systém známkuje.

**5.** Postavte pokusovou bránu, eskalační cestu a učitelské přepsání dřív než pilot.

**6.** Zařaďte přístupnost a disagregované testování spravedlnosti do specifikace, ne do backlogu.

## Rozhodněte, čím systém smí být

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Participativní designová studie Reicherta a kolegů]] se šesti středoškolskými učiteli opravuje předpoklad, že vzdělávací AI má být autonomní agent. Když měli na papíře prototypovat třídní [[conversational-ai|chatboty]], každý učitel popsal ohraničeného experta ve dvou dimenzích. Hranice pravomocí držely učitele v kontrole, protože odpovědnost za učení a bezpečnost studentů nelze delegovat. Hranice odbornosti odrážely nedostatek kontextových znalostí AI o jednotlivých studentech, dynamice třídy a institucionálních normách.

Architektura, kterou načrtli, měla čtyři komponenty (vymezení obsahu, prezentace obsahu, adaptace na studenta, dohled [[teacher-role|učitele]]) na třech ochranných vrstvách: doménové hranice omezující záběr, filtrování obsahu umožňující bezpečnou [[personalized-learning|personalizaci]] a učitelské přepsání pro nejednoznačné případy. Delegování bylo selektivní. Promítnuto do devíti událostí výuky podle Gagného, učitelé vítali AI při prezentaci obsahu, nabízení procvičovacích úloh a poskytování [[formative-assessment|formativní]] [[feedback|zpětné vazby]] a odmítali ji při stanovování cílů nebo vedení [[summative-assessment|sumativního]] [[assessment|hodnocení]].

Do stejné specifikace patří dvě výchozí nastavení: sladit systém s explicitními cíli učení a ladit ho spíš k laskavým, ale správným odpovědím než k souhlasu s tím, kdo zrovna píše. Tutor, který pochválí špatnou odpověď, naučil studenta, že ta odpověď byla správná.

Jeden detail je teď levný a později drahý: tito učitelé chtěli behaviorální transparentnost, viditelné limity a signály nejistoty víc než vysvětlení uvažování modelu. Všech šest žádalo kompletní logování konverzací, upozornění v reálném čase a možnost přepsání, a rámovali to jako profesní odpovědnost, ne jako nedůvěru. Navrhněte to už v prvním sprintu, protože dodatečné zabudování logování do tutora stavěného tak, aby byl neviditelný, je přepis.

## Testujte v konverzaci, ne v jednom kole

[[pedagogical-safety|Syntéza pedagogické bezpečnosti]] dokládá, že konvenční bezpečnostní testování vzdělávání nestačí. Systém se může vyhnout toxickému obsahu a přesto škodit tím, že příliš prozrazuje odpovědi, posiluje [[misconceptions|mylné představy]], potlačuje reflexi, podporuje závislost nebo se odchyluje od výukových cílů.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]], [[benchmark]] pedagogické bezpečnosti, to vyjadřuje čísly. U všech testovaných modelů, od otevřených modelů s 3,8 B parametrů po GPT-5-mini, byla [[pedagogy|pedagogická]] škoda všeobecná, škála spolehlivě nezlepšila bezpečnost a míra selhání stoupla ze 17,7 % u jednokolových interakcí na 77,8 % u vícekolových konverzací. Vzorce porušení se lišily podle předmětu. Jeho taxonomie o 11 dimenzích a 48 dílčích rizicích pokrývá kategorie kognitivní, epistemické, [[metacognition|metakognitivní]], [[motivation|motivačně-afektivní]], vývojové, spravedlnostní a kategorie sladění s výukou a funguje jako návrhový kontrolní seznam i jako testovací sada.

Údaj o eskalaci čtěte jako tvrzení o vašem testovacím plánu. Tutor, který projde tisícem jednokolových sond, může selhat ve čtyřech konverzacích z pěti, jakmile student zatlačí nebo se zeptá potřetí. Postavte vícekolový testovací rám dřív než demo.

## Ukotvěte obsah a oddělte ověřovatele

Ukotvení je architektonické rozhodnutí. [[eduguard-safe-rag-llm-tutor|EduGuard]], bezpečný tutor s [[rag|retrievalovým rozšířením]] pro [[cs-education|úvodní programování]], páruje vyhledávání ve vyučujícím schváleném kurzu s architektonicky odděleným ověřovatelem tvrzení, s explicitní kontrolou [[cognitive-offloading|nadměrné závislosti]] a s benchmarkem o 600 dotazech napsaným vyučujícím, který pokrývá mylné představy, ladění kódu, dotazy ve smíšeném jazyce a adversariální prompty žádající přímou odpověď. Překonal baseline GPT-4o-mini i [[socratic-method|sokratovského]] tutora na bázi Llama.

Přenosná je právě ta separace: komponenty, které ověřují, nekonverzují, a benchmark obsahuje prompty psané tak, aby vylákaly odpovědi, ne aby prověřily slušnost. [[hallucination-risk|Riziko halucinací]] pokrývá režim selhání, který má schválené vyhledávání ohraničit.

## Ke studentské práci přistupujte jako k nedůvěryhodnému vstupu

Model hrozeb, který většina návrhových doporučení vynechává, sedí uvnitř hodnoceného artefaktu. [[humble-prompt-injection-ai-grading-red-team-2026|Humbleho (2026) adversariální red-teamové hodnocení]] testovalo, zda studenti dokážou manipulovat známkovačem založeným na LLM pomocí prompt injection ve svých odevzdáních, a manipulace fungovala: injekce, které známkovači přikazují, přerámovávají ho nebo ho nutí hrát roli, posouvají skóre, aniž by se práce změnila.

Držte rubriku a instrukce mimo kontextové okno, které student ovládá, obsah připomínající instrukce odstraňujte nebo označujte, nikdy nedovolte, aby si odevzdání stanovilo vlastní kritéria, a u každé závažné známky ponechte lidské rozhodnutí. Známkovač, který si čte instrukce z textu, který posuzuje, předal rubriku kandidátovi.

## Podpořte práci, nedokončujte ji

Systém, který odpovídá, ukončuje myšlení, kvůli kterému byl koupen. Do zadání patří dvě věci: pokusová brána, aby se žádný výstup neobjevil dřív, než student něco sám vloží, a [[human-in-the-loop-ai|lidská eskalační cesta]] s pojmenovaným cílem, což u produktu pro třídu znamená učitele, a to ve formě, se kterou učitel umí pracovat. [[scaffolding]] a [[socratic-method|sokratovský]] vzorec jsou produktovou verzí toho, co plán hodiny dělá ručně; [[developing-ai-tutor]] podrobně pokrývá diagnostiku, žebříky nápověd a zpětnou vazbu.

## Dejte přístupnost a spravedlnost do specifikace

Požadavky na přístupnost jsou dost konkrétní na jeden sprint: ovladatelnost klávesnicí, kompatibilita se čtečkami obrazovky, titulky a přepisy, odpovídající kontrast, použitelné textové alternativy a kompatibilita s asistivními [[ai-technologies|technologiemi]]. Přístupnostní funkce generované AI stejně potřebují kontrolu kvality. Viz [[accessibility]].

Testování spravedlnosti má zkoumat celý řetězec a disagregovat chování podle jazyka, postižení, kultury a dalších relevantních charakteristik studentů, místo aby se spoléhalo na agregovanou přesnost. Systém, který má dobré průměrné skóre a špatné pro jednu skupinu, dodal tu chybu právě té skupině. Viz [[bias-mitigation]] a [[equity-in-ai-education|Spravedlnost]].

## Navrhujte s lidmi, kteří to budou používat

[[ko-hughes-vsd-student-centered-its-2026|Ko a Hughes]] aplikovali design citlivý na hodnoty na [[intelligent-tutoring|inteligentní tutoringový systém]] se studenty a vyučujícími komunitní vysoké školy, tedy se skupinou, která bývá z návrhu vzdělávacích platforem vynechávána. Našli hodnotová napětí, která je třeba řídit, ne vyřešit: transparentnost proti interpretovatelnosti, [[privacy|soukromí]] proti výukovému vhledu a [[agency|studentská autonomie]] proti systémem vedené [[scaffolding|strukturované podpoře]]. Studenti dávali přednost spolupracujícím, polidštěným vysvětlením před surovou transparentností modelu a prototyp zakódoval 16 funkcí sladěných s hodnotami napříč [[explainable-ai|vysvětlitelnou AI]], human-in-the-loop kontrolami a kontrolami soukromí.

[[wang-teacher-ai-co-design-review-2026|Přehled Wanga, Liua a Islama]] o 28 empirických studiích přidává slovník pro volbu nástrojů. [[generative-ai|Generativní AI]] se používá hlavně na plánování hodin, tvorbu promptů a kreativní ideaci, přičemž AI vystupuje jako asistent nebo generátor obsahu mnohem častěji než jako spolunavrhář, a nabízí čtyři afordanci, efektivitu, responzivitu, [[creativity|kreativitu]] a [[equity-in-ai-education|spravedlnost]], podle kterých učitelé mohou soudit, který nástroj sedí na který návrhový problém.

Obě studie berou design jako [[human-in-the-loop-ai|human-in-the-loop]] [[human-ai-collaboration|spolupráci]] a jako [[usability-research|výzkum použitelnosti]], ne jako osvětu. Obě zjistily, že zainteresované strany odhalily požadavky, které by žádný benchmark přesnosti nezachytil, což je praktický argument pro zaplacení těch sezení: jsou to požadavky, které byste jinak potkali až v pilotu.

## V čem se návrhové týmy mýlí

Bezpečnost znamená moderování obsahu. Škoda ve vzdělávacím produktu často přichází jako užitečná odpověď ve špatnou chvíli. SafeTutors našel pedagogickou škodu u každého testovaného modelu a selhání stoupající na 77,8 % v průběhu konverzace, což není kategorie, kterou jsou filtry obsahu stavěné vidět.

Větší model pedagogiku spraví. Škála spolehlivě nezlepšila bezpečnost v rozsahu od otevřených modelů s 3,8 B parametrů po GPT-5-mini.

Dobrý index vyhledávání znamená, že obsah je vyřešený. EduGuard páruje vyhledávání se samostatným ověřovatelem a testuje adversariální prompty žádající přímou odpověď, protože ukotvené vyhledávání pořád nechává cestu k nadměrnému prozrazení.

Učitel je záložní varianta. Všech šest učitelů v designové studii žádalo logování, upozornění a přepsání jako podmínku profesní odpovědnosti. Support ticket není přepsání.

Přístupnost je pozdější tiket. Buď je ve specifikaci, nebo se z ní stane přepis, a generované alternativní texty a titulky stejně potřebují lidskou kontrolu.

## Co vám vrátí

**„Nemůžeme postavit hodnoticí rám před launchem.“** Postavte malý. První tvrzení, které potřebujete, je, co se stane v průběhu pěti kol. Vezměte 40 skutečných otázek z kurikula, každou prožeňte jako pětikolovou konverzaci se studentem, který nápovědě odolává, a skórujte proti 11 dimenzím. To je obhajitelná bezpečnostní část a vejde se do sprintu.

**„Učitelé chtějí upravovat prompty a my nemůžeme zaručit, co napíšou.“** Pak zúžte plochu, kterou upravují. Systémový prompt zůstává váš; cíle, schválený obsah, žebřík nápověd a eskalační kontakt jsou jejich. Architektura ohraničeného experta existuje proto, aby konfigurace zůstala v rozsahu, který umíte otestovat.

**„Naše benchmark skóre jsou vysoká.“** Přesnost u jednokolových odpovědí nepředpovídá chování v průběhu konverzace a benchmark, který měří to druhé, našel 77,8 % selhání ve vícekolových nastaveních u každého testovaného modelu. Vykazujte obě čísla, jinak to první bude čteno jako to druhé.

**„Kompletní logování je problém soukromí.“** Je, což volá po omezení účelu, ne po jeho absenci. Logujte to, co učitel potřebuje k jednání, zbytek minimalizujte, omezte přístup a v produktu uveďte, co se uchovává a jak dlouho.

## Co udělat tento týden

**1.** Napište hranici pravomocí na jednu stránku: co rozhoduje systém, co rozhoduje učitel a co byste obhájili v kontrole veřejné zakázky.

**2.** Převeďte taxonomii o 11 dimenzích na testovací plán a prožeňte ho vícekolově na 40 skutečných otázkách z jednoho kurzu.

**3.** V návrhovém dokumentu oddělte ověřovatele od generátoru, i když první build běží v jednom procesu.

**4.** Přidejte do fronty pokusovou bránu, eskalační cíl a učitelské přepsání, s přiřazenými jmény.

**5.** Dejte seznam přístupnosti a jeden požadavek na disagregaci do akceptačních kritérií tohoto vydání.

## Kam dál

[[developing-ai-tutor]] pokrývá stavbu a [[designing-ai-into-learning]] pedagogické výchozí hodnoty kolem ní. Zda věc funguje po nasazení, viz [[checking-whether-educational-ai-works]]; bezpečnostní koncepty za testovacím plánem [[pedagogical-safety]] a [[hallucination-risk]]; kontext veřejných zakázek [[legal-issues-and-risks]].
