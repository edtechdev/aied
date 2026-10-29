---
title: "Jaké jsou osvědčené postupy pro vývoj efektivního AI tutora?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T11:57:26-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Váš tutor má do pilotu tři týdny. Chat funguje, model čistě vysvětlí derivaci a interní demo sklidilo potlesk. Pak se ale někdo z centra pro výuku zeptá na otázku, pro kterou vaše specifikace nemá kolonku: vyřeší studenti po semestru s touhle věcí úlohu, když ji nebudou mít po ruce? Co máte, je seznam funkcí. Co nemáte, je jedna věta, která říká, co musí student na konci zvládnout sám.

Tutor je politika obalená kolem [[conversational-ai|konverzační AI]] a o tom, zda dojde k učení, rozhoduje právě ta politika. Pojmenujte kognitivní práci, kterou musí student vykonat, donuťte systém ji vyžadovat (pokus před pomocí, žebřík nápověd, který se vytrácí, kontrola, kterou model nemůže obejít), a vyhodnocujte s vypnutým tutorem. Kvalita modelu určuje, jak dobrý rozhovor to pocitově je. Politika rozhoduje o tom, co student bude umět v červnu.

## Stručně

**1.** Napište cíl jako tvrzení o výkonu bez pomoci a z něj pak odvoďte každou funkci. Pokud funkci nelze do té věty dohledat, je to demo funkce.

**2.** Model studenta stavte na důkazech, které umíte zaznamenat, a každou diagnózu ukládejte jako hypotézu s hodnotou jistoty, ne jako fakt.

**3.** Žebřík pomoci zafixujte v kódu, s pojmenovanými příčkami, a v rozhraní nechte studenta za každý krok dolů něčím zaplatit.

**4.** Obsah zakotvěte ve vlastních materiálech a počítání, algebru a kontrolu kódu předejte deterministickým nástrojům, které nemohou halucinovat.

**5.** Selhání ve výuce testujte na celých rozhovorech: prosakování odpovědí, sykofantie, upevňování miskoncepcí, pedagogický drift.

**6.** Měřte pomocí fáze bez nástroje a odloženého testu, ne pomocí skóre spokojenosti.

## Napište cíl jako tvrzení o výkonu bez pomoci

Tři seznamy, napsané dřív, než kdokoli vybere model:

- Co by studenti po absolvování měli znát nebo umět.
- Jakou kognitivní práci musí vykonat sami.
- Co smí tutor udělat za ně.

Literatura o [[intelligent-tutoring|inteligentním doučování]] zdůrazňuje, že účinnost závisí na [[pedagogy|pedagogickém]] designu, a ne jen na schopnostech modelu, a že selhání lze snadno zabudovat omylem. Tutor optimalizovaný na „dokonči úlohu“ podkope tutora optimalizovaného na „nauč se úlohu řešit“, i když projde každým funkčním testem, který napíšete, protože oba produkují správné konečné odpovědi. Rozdíl je v tom, co student udělal mezi otázkou a odpovědí.

Druhý seznam je místo, kde vývojové týmy dostávají konkrétní podobu. Vezměte si štítek zvládnutí, třeba „zvládnutí derivací“, a odmítněte, aby znamenal jen vypočtení správné derivace. Rozložte ho na rozpoznání, kdy je derivace na místě, interpretaci jako okamžitou rychlost změny, volbu pravidla, provedení postupu, vysvětlení, proč byla volba správná, kontrolu rozumnosti výsledku a aplikaci na neznámou úlohu. Každá z těchto položek je samostatná věc k zaznamenání a každá implikuje jinou reakci, když chybí. Toto rozložení je zároveň obranou proti [[correct-answer-trap-misconceptions|pasti správné odpovědi]], kdy student dojde ke správnému výsledku chybným uvažováním a vaše analytika zaznamená úspěch. [[correct-answer-trap-ai-tutor|Jak zachytit past správné odpovědi]] a [[zhang-tutormoments-2026|Když pomoc nepomáhá]] popisují obě verze tohoto selhání v provozu.

## Postavte model studenta dřív než rozhovor

Model studenta drží dva druhy stavu: odhady po konceptech (limita: rozvíjí se, mocninné pravidlo: zvládnuto, pravidlo součinu: rozvíjí se, pravidlo složené funkce: neprokázáno) a hypotézy miskoncepcí s důkazy a jistotou u každé. Držte je oddělené. Odhad konceptu řídí volbu obtížnosti. Hypotéza řídí další otázku.

Pozor na to, nechat diagnostiku na samotném [[llm|velkém jazykovém modelu]]. [[benchmark|Srovnávací testy]] ukázaly, že LLM tutoři rozpoznají jasně správné uvažování, ale někdy odmítnou platné alternativy nebo přijmou nesprávné uvažování. Model, který pozná dobrý případ a špatně přečte nejednoznačný, selhává právě u studentů, kteří pomoc potřebují. V oblastech s vážnými důsledky obstojí architektura **strukturovaná diagnostika plus flexibilní dialog s LLM**, tedy uspořádání, které popisuje [[yasir-llm-tutoring-agents-2026|Potvrzení správného, přehlédnutí zbytku]]: váš vlastní detektor stanoví, co student pravděpodobně udělal, a model staví rozhovor kolem tohoto zjištění.

Dejte diagnóze výslovnou posloupnost, kterou model nemůže přeskočit: rozpoznej, ověř, reaguj. Model může navrhnout [[misconceptions|miskoncepci]] jako hypotézu, ale pak ji musí ověřit proti skutečné práci studenta nebo cílenou otázkou, než na ni tutor zareaguje. Bez tohoto kroku systém vymyslí důkazy a pak doučuje studenta za chybu, kterou neudělal, což je jak zbytečné, tak mírně urážlivé.

Důkazy, které stojí za zaznamenání, zhruba v pořadí užitečnosti: nedávné pokusy s mezivýsledky, prokázané znalosti po konceptech, chování při hledání pomoci (což je samo signál o jistotě) a sebehodnocená jistota tam, kde ji sbíráte. Obtížnost a pomoc upravujte podle tohoto záznamu a nejnovější zadání studenta berte jako jeden z jeho vstupů. Jediné zadání je špatný odhad toho, co student umí, a tutor, který na něj reaguje, bude kmitat.

## Zafixujte žebřík pomoci a pak za něj nechte rozhraní účtovat

Příčky napište dřív, než napíšete prompt, protože žebřík je produktové rozhodnutí s pojmenovanými stavy a nastavení tónu ho neumí vyjádřit. Fungující posloupnost:

1. Samostatný pokus.
2. Metakognitivní otázka na to, co student už zkusil.
3. Konceptuální vodítko.
4. Určení příslušného pravidla.
5. Nastavení části úlohy.
6. Vysvětlený mezistupeň.
7. Vysvětlené řešení.
8. Student vysvětlí řešení.
9. Student vyřeší srovnatelnou úlohu bez pomoci.

Podpora se s rostoucí kompetencí vytrácí, což je mechanismus v jádru [[scaffolding|scaffolding]]. Vidět vysvětlené řešení neprokazuje zvládnutí, takže každá relace, která dojde na sedmou příčku, vám dluží devátou, aby se počítala za dokončenou.

Kauzální důkaz pro to, stavět žebřík vůbec, pochází z terénního experimentu, v němž nehlídané rozhraní GPT zvýšilo výkon v matematice s pomocí a snížilo následný výkon u zkoušky bez pomoci. Tutor, který dával nápovědy, ten pokles učení z velké části odstranil ([[generative-ai-guardrails-harm-learning|Generativní AI bez zábran může škodit učení]]). Omezení je architektonické. Stejný model s jiným chováním pomoci dosáhl opačných výsledků na míře, na které záleží.

Větší randomizovaný terénní experiment s více než 6 000 žáky druhého stupně na platformě pro procvičování založené na zvládnutí ukazuje, jak žebřík vypadá v záznamech. Studenti zařazení k podpoře AI postupovali pomaleji a zkoušeli méně otázek, ale odpovídali přesněji. Nejjasnější mechanismus byla správnost dalšího pokusu po chybě: k návratu ke správné odpovědi bylo potřeba méně pokusů. Tento vzorec je produktivní zpomalení a je to podpis, který má žebřík nápověd zanechat ([[making-ai-tutoring-productive-mastery-math-2026|Jak udělat doučování s AI produktivní]]).

Stejná studie přináší varování i pro vaše dashboardy. Požadavek tří správných odpovědí v řadě prudce zvýšil zvládnutí definované platformou, aniž přinesl zjistitelné zisky v odloženém testu o týden později. Nejsilnější důkazy z odloženého testu se objevily jen tam, kde AI seděla uvnitř pracovního postupu zvládnutí (koeficient 0,085), ne tam, kde byla dostupná jako samostatný přístup. Pokud je vaší metrikou úspěchu počítadlo sérií, dodáte systém, který optimalizuje sérii.

Tření v rozhraní patří do stejného návrhového kroku. Neomezené nápovědy za viditelným tlačítkem mění celý žebřík ve zkratku a předčasné žádosti o nápovědu s povrchním čtením souvisejí s nižšími [[learning-gains|výsledky učení]]. Nahradit `[Nápověda][Nápověda][Nápověda][Ukaž odpověď]` otázkami „co jste už zkusili?“ a „co vás blokuje?“ (volba pravidla, sestavení rovnice, úprava, porozumění konceptu) stojí jednu obrazovku a nasměruje studenta na příčku, kterou skutečně potřebuje. Zároveň získáte data, která vám řeknou, kterou příčku pravidelně přeskakuje.

## Ověřitelné části předejte ověřovateli

Generování zakotvěte v instruktorem schváleném materiálu: oddíly učebnice, poznámky z kurzu, řešené příklady, terminologie, schválené postupy, notace, pravidla zadání, zásady a [[curriculum-design|kurikulární]] zdroje. Generování obohacené vyhledáváním proti tomuto korpusu snižuje [[hallucination-risk|riziko halucinace]], ale neodstraňuje je, jak vysvětluje [[rag|RAG]]. V rozhraní ukazujte citace nebo provenienci tam, kde by student mohl tvrzení ověřit, protože citace je to, co činí zakotvení dodatečně auditovatelným.

Zakotvení dělá i práci, kterou metriky přesnosti minou. Kurz má schválené postupy a tutor, který zavede matematicky platnou techniku, kterou kurz nepoužívá, naučil studenta něco, za co bude hodnocen hůř. Vyhledávání ve vrstvě kurzu je způsob, jak tutor zůstane uvnitř množiny postupů.

Pro oblasti s formálně ověřitelnými odpověďmi přidejte deterministické nástroje: kalkulačky, systémy počítačové algebry, spouštění kódu, znalostní grafy, validátory založené na pravidlech a [[discipline-specific-aied|oborové]] řešiče. Důležitá je dělba práce. LLM obstará vysvětlení a dialog. Symbolický engine ověří algebraickou ekvivalenci, derivace, integrály, řešení rovnic, kritické body a numerické aproximace. Chybný mezistupeň, který ověřovatel zachytí, se stane doučovacím momentem. Chybný mezistupeň, který nezachytí nic, se stane miskoncepcí, kterou si student odnese ke zkoušce.

## Vyžadujte, aby student na zpětnou vazbu reagoval

Zpětná vazba, která říká „Správně“, „Nesprávně“ nebo „Dobrá práce“, je bodovací událost v převleku výuky. Znalostní báze chápe [[feedback|zpětnou vazbu]] jako smyčku poskytnutí a převzetí: zpětná vazba podporuje učení, když jí studenti rozumějí a jednají podle ní, a druhá polovina je ta, kterou systémy obvykle přeskakují. Postavte tutora tak, aby pojmenoval dotčený krok uvažování, řekl, co je třeba přehodnotit, dal jednu konkrétní další akci a požádal studenta, aby před odhalením zpětné vazby předpověděl nebo vysvětlil.

Posloupnost, která to nese, je student první, AI druhá, student znovu. Student generuje, volí, zdůvodňuje, hodnotí nebo reflektuje; tutor odpovídá; student s odpovědí něco udělá. Navrhněte strukturu tahů tak, aby to nebylo volitelné. Systém, kde model umí na jednu otázku vyprodukovat tři odstavce, učí studenta ptát se a číst.

Dlouhodobým cílem je internalizace. Studenti mají skončit tak, že otázky a strategie [[problem-solving|řešení problémů]] tutora vedou sami, což je argument [[agency|agentnosti]] a důvod, proč má žebřík vrchní příčku, kde tutor mlčí.

## Navrhujte pro to, co se stane ve čtyřicátém tahu

Pedagogická bezpečnost je samostatná testovací sada, oddělená od běžné bezpečnosti chatbotů, a většina týmů dodává jen tu druhou. Toxicita a odolnost proti jailbreaku vám neřeknou nic o tom, zda tutor vydá odpověď studentovi, který se zeptá dvakrát, zda bude souhlasit s chybným postupem, protože student zněl sebejistě, zda během dlouhé relace vybočí z množiny postupů kurzu nebo zda dotlačí studenta ke [[cognitive-offloading|kognitivnímu odklánění]]. [[ai-sycophancy|Sykofantie]] projde první, protože souhlas se čte jako laskavost a vaše preferenční data ho odměňují.

Testujte prosakování odpovědí, upevňování miskoncepcí, nadměrný souhlas, nevhodnou obtížnost, odklánění, zaujaté zacházení, ztrátu agentnosti studenta, pedagogický drift a přehnanou jistotu u nesprávných vysvětlení. Testy spouštějte na rozšířených rozhovorech, ne na jednotlivých tazích, protože pedagogická selhání se sčítají: prvních deset tahů může být vzorových a jedenáctý může celou relaci zničit. Tutor má být laskavý a správný zároveň, i když student trvá na miskoncepci. [[pedagogical-safety|Pedagogická bezpečnost]] a [[hazra-safetutors-pedagogical-safety-2026|Bezpečnost AI tutorů a pedagogické škody]] vykládají taxonomii selhání.

## Dejte datovou architekturu do stejného návrhového dokumentu

Sbírejte jen data o studentech, která jsou pedagogicky nutná, a umějte u každého pole říct, proč existuje. Kde uchováváte trvalou paměť nebo [[student-modeling|model studenta]], udělejte jeho účel studentovi viditelným, dejte mu přiměřenou kontrolu, chraňte citlivé informace, definujte dobu uchování a rozhodnutí s vážnými důsledky směrujte instruktorovi nebo jinému [[human-in-the-loop-ai|kontrolnímu bodu s člověkem]]. Model studenta, který potichu hromadí odhad jistoty, který student nikdy nevidí, je problém ochrany dat i problém pedagogický.

Auditujte chování napříč jazykovým zázemím, úrovněmi schopností, kulturními kontexty, potřebami [[accessibility|přístupnosti]] a úrovněmi [[prior-knowledge|předchozích znalostí]] a zkušeností s AI. Rozdílný výkon na stejném cíli je chyba, ke které patří student, a v agregované metrice přesnosti se neobjeví.

Jedno rozhodnutí o přístupnosti si zaslouží vlastní řádek: nedělejte z pokročilého [[prompt-engineering|psaní promptů]] předpoklad dobré výuky. Pokud tutor učí dobře jen tehdy, když student napíše pečlivý prompt, postavili jste systém, který zvýhodňuje studenty, kteří už vědí, jak s modely mluvit. Tutor má studentům pomáhat formulovat produktivní otázky, což je také dovednost [[metacognition|metakognice]], kterou stojí za to mít.

## Změřte interval po odebrání nástroje

Metriky relací vám neřeknou, zda to funguje. Přesnost odpovědí, délka rozhovoru, preference studentů, spokojenost, dokončení úloh a [[student-engagement|zapojení]] rostou i u systémů, které nic neučí, protože studenti mají pomoc rádi a pomoc se snadno měří. Vyhodnocujte výkon bez pomoci, odložené zapamatování, přenos na nové úlohy, opravu miskoncepcí, samostatnost studenta, převzetí zpětné vazby a [[differential-effects-across-learner-groups|rozdílné efekty mezi skupinami studentů]]. [[ai-ed-evaluation|Hodnocení vzdělávací AI]] má metody a [[ai-tutor-behavioral-evaluation|Chybějící osa hodnocení]] argumentuje, že konstruktem je chování.

Dvě studie zostřují pravidlo proti [[self-report-measures|sebeposuzovacím měřítkům]] a krátkým horizontům. Pilot se 38 začínajícími studenty programování našel silnou souvislost mezi používáním [[generative-ai|generativní AI]] a *vnímaným* učením (rs = 0,802, p < 0,001), zatímco ukazatele samostatného pokroku bez podpory instruktora skórovaly nejníž. Autoři mezeru nazývají iluzí kompetence a epistemickým dluhem a je to přesně mezera, kterou metrika spokojenosti odměňuje ([[genai-cognitive-tutor-programming-2026|Generativní AI jako neformální kognitivní tutor]]).

Zásadněji: většina hodnocení končí v okamžiku, kdy pomoc přestane. [[cognitive-washout-ai-skill-decay-2026|Dynamika kognitivního vymývání]] pojmenovává nezměřený interval po odebrání nástroje a formalizuje čtyři výsledky: elastické odražení, částečné plató, latentní scaffolding a nadměrné zotavení. Její křivka vymývání nese časovou konstantu zotavení, člen úplnosti zotavení a index hystereze, který srovnává úsilí při znovuučení s původním úsilím. Protože závažnost určuje vratnost, rámec tvrdí, že plánované procvičování bez pomoci má být dávkováno podle křivky zotavení, a ne diskutováno jako otázka principu. Váš plán hodnocení potřebuje fázi bez nástroje i okamžitý posttest a [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|randomizované důkazy, že krátká pomoc snižuje pozdější výkon bez pomoci]] jsou důvodem naplánovat ji brzy.

## Dejte učitelům něco, co mohou upravovat

Před nasazením nechte vzdělavatele otestovat realistické profily studentů, běžné miskoncepce, okrajové případy, adversariální prompty, nejednoznačné odpovědi a dlouhé doučovací rozhovory. Zaznamenejte pedagogická selhání a vraťte je do systémových promptů, doučovacích politik, zdrojů znalostí, [[guardrails|zábran]], pravidel modelu studenta a volby modelu. Plynulá odpověď může být pedagogicky chybná a učitel je jediný recenzent, který to vidí.

[[teacher-intervention-k12-ai-based-instruction-2026|Leeho systematický přehled 29 studií z K-12]] popisuje, z čeho takový dohled sestává a kde selhává. Intervence [[teacher-role|učitele]] je opakující se čtyřfázový cyklus: monitorování, úsudek, intervence a orchestrace. Upozornění AI, [[visualization|dashboardy]] a automatizovaná skóre „nevedou automaticky k pedagogickému jednání“. Nejsilnější učitelská strategie, kterou přehled nachází, je pedagogický překlad: vybírat, upravovat, doplňovat, shrnovat nebo mazat zpětnou vazbu chatbota, místo aby ji jen předal dál.

Z toho plynou dvě návrhová varování a obě odporují obvyklému plánu. Více informací z AI není lepší: systémy, které nepřetržitě vysílají diagnostiku, učitele přetěžovaly a odváděly pozornost od jejich vlastního pozorování. Upřednostněte to, na co stojí za to reagovat, udělejte to interpretovatelným a nabídněte doporučení ve formě, kterou učitel může přijmout, upravit, odložit nebo odmítnout. Ani více podpory pro učitele není lepší: odložit intervenci, aby studenti mohli pracovat samostatně, je samo o sobě expertiza. Strukturální podmínky, tedy čas na prohlédnutí dat, velikost třídy a možnost fyzicky se dostat ke skupinám, které pomoc potřebují, jsou součástí intervence, ne zázemím. Dashboard postavený pro učitele bez volné hodiny se neotevře.

## Případ první: tutor na kalkulus, kde je ověřování levné

Tutor na vysokoškolský kalkulus v prvním semestru má zvýšit to, co studenti umějí samostatně vyřešit a vysvětlit po jeho odebrání, ne maximalizovat správně dokončené úlohy. Doučování matematiky je zvlášť náchylné k nadměrnému scaffolding, předčasnému užívání nápověd a nesprávné diagnóze uvažování studenta, a všechny tři jsou ve vašich záznamech vidět, když se podíváte ([[math-education|Matematické vzdělávání]]).

**Zakotvení a ověřování.** Šest vrstev: materiály kurzu a zásady instruktora, pak vrstva vyhledávání, pak engine úloh a model studenta vedle symbolického ověřovatele a diagnostického enginu, pak vrstva pedagogické politiky, pak konverzační generování, pak student a pak zpět do modelu studenta. Ověřovatel je důvod, proč je tento návrh zvládnutelný. Rozhoduje, zda je výraz ekvivalentní, derivace správná, integrál vypočten, kritický bod nalezen, a dělá to bez dotazu na názor modelu.

**Jedna interakce.** Při derivování $f(x)=(x^2+1)\sin x$ konvenční chatbot prozradí odpověď. Tutor orientovaný na učení vnitřně usoudí, že student zderivoval obě složky, ale výsledky vynásobil, což je možná [[misconceptions|miskoncepce]] pravidla součinu jako $f'g'$, a nejdřív položí diagnostickou otázku: jaké pravidlo platí, když se násobí dvě funkce? Pak student zapíše pravidlo součinu symbolicky, určí $u$ a $v$, a teprve potom tutor ověří konečný výraz. Všimněte si, kolik doučování proběhlo dřív, než se ke studentovi dostal jakýkoli text modelu.

**Více reprezentací.** Propojte symbolické postupy se vzorcem, grafem, tabulkou, slovním výkladem a fyzikálním kontextem rychlosti změny. Procedurální plynulost a konceptuální porozumění vypadají na listu se správnými odpověďmi stejně a rozcházejí se u úlohy na přenos.

**Dashboard.** Ukazujte agregované důkazy místo neprůhledných soudů: „pravidlo součinu, 62 % prokázaného zvládnutí; běžné vzorce, 18 % vynechá jeden člen, 11 % násobí derivace.“ Individuální diagnózy odcházejí jako hypotézy s podpůrnými důkazy, což je také činí kontrolovatelnými pro učitele ([[explainable-ai|vysvětlitelnost]] je tu pro učitele důležitější než pro studenta).

**Plán hodnocení.** Výkon s tutorem, výkon na srovnatelných úlohách bez něj, odložené zapamatování, přenos na neznámé úlohy, kvalita konceptuálního vysvětlení, oprava miskoncepcí, přiměřené proti předčasnému [[help-seeking|hledání pomoci]], prosakování odpovědí, míra falešně pozitivních a falešně negativních diagnóz a rozdílné výsledky. Srovnání, které rozhoduje o projektu, je výkon s pomocí proti pozdějšímu výkonu bez pomoci. Student, který se s tutorem posune z 60 % na 95 % a sám zůstane na 60 %, doučován nebyl.

## Případ druhý: kouč psaní, kde o povolení rozhoduje fáze

Psaní nemá jedinou správnou odpověď, takže ověřování je úsudek a návrhová práce se přesouvá k etapizaci. Znalostní báze rámuje psaní jako kognitivní, sociální a rétorický proces, což znamená, že systém AI pro psaní může podporovat učení a zároveň může odstranit právě to myšlení, kvůli kterému zadání existovalo ([[writing-education|Vzdělávání v psaní]], [[coach-not-crutch-ai-writing|Kouč, ne berlička]]).

**Model kompetencí.** Sledujte argumentaci (konkrétnost teze, soulad tvrzení a důkazů, protiargument), organizaci (zaměření odstavce, logický postup, přechody), důkazy (relevantnost zdroje, zapojení, interpretace), revizi (globální i větová revize, hodnocení zpětné vazby) a styl (srozumitelnost, gramatika, hlas). Každá položka se stane samostatným signálem v modelu studenta, což je to, co cílenou zpětnou vazbu vůbec umožňuje.

**Zakotvěte kouče v zadání.** Načtěte instrukce, rubriku instruktora, texty kurzu, požadavky na citace, žánrové konvence, příklady instruktora a zásady používání AI, aby zpětná vazba mohla říct „rubrika vašeho instruktora žádá, abyste každé hlavní tvrzení propojili s důkazy nejméně ze dvou textů kurzu“ místo vymýšlení obecných očekávání. Obecná rada je výchozí selhání nezakotveného nástroje na psaní a studenti to poznají do dvou relací.

**Nastavte povolení podle fáze.** Zapojení AI v různých fázích ovlivňuje vnímané vlastnictví různě. Podpora při plánování snižuje vlastnictví méně než podpora při psaní konceptu a text generovaný AI přináší největší pokles ([[ai-writing-support-stage-ownership-2026|Od plánování k revizi]]). Tento nález se přímo překládá do tabulky povolení. Při plánování kouč klade otázky, srovnává pozice, zpochybňuje předpoklady a kritizuje osnovy, ale argument negeneruje. Při psaní konceptu student nejdřív vytvoří text a kouč ho rozvíjí, nepřebírá ho. Při revizi kouč diagnostikuje a tam skončí: nejasná tvrzení, chybějící důkazy, důkazy, které tvrzení nepodporují, organizační problémy, koncept proti rubrice. Při editaci, po revizi, řeší gramatiku, interpunkci, stručnost a formát citací.

**Jedna rozpracovaná interakce.** U eseje o povinných [[online-teaching-and-learning|online kurzech]] obecný systém přepíše studentův odstavec do vybroušené prózy a odvede intelektuální práci. Kouč řekne, co funguje, pojmenuje hlavní problém (odstavec uvádí důvody, ale nikdy nevysvětlí, proč odůvodňují celouniverzitní nařízení), položí otázku k revizi a požádá studenta, aby vlastními slovy dokončil větu. Argument zůstane tam, kam patří.

**Prioritizovaná zpětná vazba.** Jedna silná stránka k zachování, jeden problém s velkým dopadem, jedna otázka vyžadující úsudek pisatele, jeden konkrétní cíl revize. Ne čtyřicet komentářů. Student, který dostane čtyřicet komentářů, je třídí podle délky a to třídění nemá s důležitostí nic společného.

**Nechte studenta zpětnou vazbu posoudit.** [[feedback-literacy|Gramotnost ve zpětné vazbě]] je sama o sobě učební cíl. Pravidelně se ptejte, zda student s návrhem souhlasí a proč, a dovolte mu ho odmítnout. Výstupem je [[evaluative-judgment|hodnotící úsudek]], ne poslušnost, a je to také jediná obrana proti kouči, který se sebejistě mýlí.

**Zachovejte hlas.** Rozlišujte chyby, problémy se srozumitelností, rétorické volby a stylové preference a poslední dvě nechte být. Kouč, který „opravuje“ rétorické volby, homogenizuje psaní směrem ke stylu, který preferuje model, a nejvíc škodí [[multilingual-learning|mnohojazyčným]] pisatelům a nestandardním rétorickým tradicím ([[ai-feedback-quality|kvalita zpětné vazby AI]] je obecnou verzí tohoto problému).

**Učte se z revizí.** Ukládejte historii revizí, ne jen závěrečné eseje. Opakovaný vzorec „důkaz zaveden, ale neinterpretován“, který se napříč třemi eseji zlepšuje, je nejužitečnější signál, jaký systém na psaní může mít, a je zdarma.

**Hodnocení.** Kvalita psaní s AI a později bez ní, schopnost najít slabiny v cizím textu, kvalita revize, převzetí zpětné vazby, schopnost vysvětlit revize, vlastnictví, závislost na próze z AI, zachování hlasu, zaujatost napříč dialekty a mnohojazyčnými pisateli, soulad s úsudkem instruktora a odložený přenos. Návrh, který na to odpovídá, má tři ramena: psaní samostatně, text generovaný AI a kouč. Všechny tři skupiny pak napíší novou esej bez AI. Pokud skupina s generovanou AI vyhraje v praxi a prohraje bez ní, systém zlepšil výkon, ne učení. Vzorce na úrovni třídy z dashboardu (41 % potřebuje podporu v propojení tvrzení a důkazů) jsou signálem [[formative-assessment|formativního hodnocení]] pro instruktora.

## Srovnání obou řešení

| Návrhová otázka | Tutor na kalkulus | Kouč psaní |
|---|---|---|
| Primární objekt učení | Matematické koncepty a řešení úloh | Argumentace a proces psaní |
| Ověřování | Často objektivně ověřitelné | Obvykle vyžaduje kontextový úsudek |
| Deterministické nástroje | Symbolický matematický engine, kalkulačka | Kontroly gramatiky, citací a rubriky |
| Hlavní role AI | Diagnostikovat a stavět scaffolding uvažování | Diagnostikovat a stavět scaffolding revize |
| Hlavní riziko | Prozrazení řešení | Napsání textu za studenta |
| Jednání studenta, na kterém záleží | Řešit a vysvětlovat | Psát koncept, hodnotit a revidovat |
| Model studenta | Koncepty, postupy, miskoncepce | Argumentace, důkazy, organizace, revize |
| Klíčová zábrana | Pokus před řešením | Text studenta před přepsáním AI |
| Test přenosu | Nové úlohy z kalkulu bez AI | Nová úloha v psaní bez AI |
| Kritérium úspěchu | Samostatné matematické uvažování | Samostatné psaní a hodnotící úsudek |

Oba systémy používají stejnou sadu [[ai-technologies|technologií AI]] a ztělesňují různé pedagogické politiky, protože obory vyžadují různé druhy myšlení. Pravidlo, které lze zobecnit, je určit kognitivní činnost, která produkuje učení, a navrhnout AI tak, aby tuto činnost podporovala, aniž by ji vykonávala. To pravidlo převažuje nad jakýmkoli konkrétním modelem, promptem, rámcem agenta nebo rozhraním.

## V čem se vývojové týmy mýlí

Pedagogika žije v systémovém promptu, takže pečlivý prompt je pedagogický design. Prompt je jedna vrstva politiky, která zahrnuje i to, jaké důkazy sbíráte, kterou příčku rozhraní nabízí, co ověřovatel kontroluje a co ukazuje dashboard. Dobře napsaný prompt nad modelem studenta, který nic neukládá, vytvoří plynulého tutora bez paměti na studenta a žebřík se bude restartovat každou relaci.

Lepší model opraví diagnózu. Výsledek srovnávacích testů výše ukázal, že LLM tutoři rozpoznají správné uvažování, ale odmítnou platné alternativy a přijmou nesprávné, což je vzorec chyby, který rozsah zjevně neopraví. Strukturovaná diagnostika existuje proto, že úsudek modelu je ta část, kterou neumíte auditovat.

Spokojenost a dokončení dokazují, že návrh funguje. Dokazují, že studenti dostali pomoc. Pilot se 38 studenty programování našel silnou souvislost vnímaného učení s používáním, zatímco samostatný pokrok skóroval nejníž, a studie zvládnutí našla požadavek série, který zvyšoval zvládnutí na platformě bez zisku v odloženém testu. Zabuďte měření bez pomoci do pilotu, jinak se špatnou lekci naučíte efektivně.

Vyhledávání dělá odpovědi důvěryhodnými. Snižuje [[hallucination-risk|riziko halucinace]] a zbytek plochy selhání nechává nedotčený: nalezenou pasáž lze špatně přečíst, platná technika může být pro kurz nevhodná a model může být stále sebejistě špatný u kroku, který odvodil sám. Vyhledávání je podlaha.

Projít sadou bezpečnostních testů znamená, že je to pro studenty bezpečné. Běžné bezpečnostní testování pokrývá toxicitu a jailbreaky. Pedagogická selhání, na kterých tu záleží, tedy prosakování odpovědí, sykofantie a drift, jsou pro ně neviditelná a sčítají se během rozhovoru, místo aby se objevila v jediném tahu.

Zapojení je cíl. Délka rozhovoru a počet relací jsou nejlevnější metriky k instrumentaci, a proto se povyšují na cíle. Logika [[scaffolding|scaffolding]] říká, že ideální relace se s rostoucí zdatností studenta zkracuje, takže růst zapojení je stejně pravděpodobně symptom.

## Co vám budou říkat

**„Dodáváme za šest týdnů a tohle je práce na čtvrt roku.“** Většina architektury je levná. Brána pokusu, nastavený žebřík, vyhledávání v poznámkách, které už máte, a schéma záznamů s polem pro odebrání jsou dny práce. Drahé položky (model studenta, ověřovatel, dashboard) mohou začít za přepínačem funkcí pro jeden kurz a pilot je informativnější s hotovými levnými částmi.

**„Studenti to milují a dokončení roste.“** Obě skutečnosti jsou slučitelné se systémem, který dobře odpovídá na otázky a nic neučí. Studie se 6 000 studenty našla pomalejší postup a méně zkoušených otázek vedle lepší přesnosti, takže pokles dokončení také není automaticky špatná zpráva. Vykazujte výkon bez pomoci vedle čísel o zapojení a nechte je veřejně se rozejít.

**„Nemůžeme spustit randomizovaný pokus.“** Můžete spustit srovnání v rámci studenta i bez něj: stejný cíl, s pomocí během celku, testovaný bez pomoci o dva týdny později, s výsledkem s pomocí uvedeným vedle. Takový návrh odpovídá na produktovou otázku a nepotřebuje kontrolní rameno. Co vám neřekne, je protifakt pro studenty, kteří tutora nikdy nepoužívali.

**„Model je API dodavatele, takže chování pomoci je mimo naše ruce.“** Příčky žijí ve vaší orchestrační vrstvě a výsledek experimentu se zábranami vzešel ze změny toho, co tutor směl říkat, ne z výměny modelů. Očekávejte, že další trénování u dodavatele bude táhnout k okamžitému odpovídání, protože na užitečnost bylo laděno, a zdrženlivost dejte do vlastního kódu.

**„Učitelé nebudou používat další dashboard.“** Nebudou používat takový, který vysílá nepřetržitou diagnostiku, což podle přehledu z K-12 odvádělo pozornost od jejich vlastního pozorování. Dejte jim malý počet interpretovatelných signálů, způsob, jak každé doporučení přijmout nebo odmítnout, a čas v týdnu se na ně podívat.

**„Nemáme v týmu oborové experty.“** Pak bude tutor učit obecný postup a notace kurzu se během semestru rozjede. Oborový expert na dva dny v době návrhu, který napíše seznam miskoncepcí a seznam schválených postupů, je nejlevnější položka projektu a ta, kterou týmy škrtají první.

## Co udělat tento týden

**1.** Napište pro pilot větu o výkonu bez pomoci a dejte ji do specifikace, nad seznam funkcí.

**2.** Přidejte bránu pokusu a zaznamenávejte ji. Zaznamenejte, zda se student pokusil před první nápovědou a které příčky dosáhl.

**3.** Nahraďte tlačítko nápovědy otázkou na blokující místo a odpověď zaznamenejte jako kategorii.

**4.** Naplánujte jednu kontrolu bez pomoci dva týdny po celku a dejte ji do kalendáře s vlastníkem.

**5.** Zarezervujte dva dny s učitelem předmětu na napsání seznamu miskoncepcí a seznamu schválených postupů.

## Kam dál

[[designing-educational-ai-software|Navrhování vzdělávacího AI softwaru]] pokrývá pravidla na úrovni softwaru, která tutor musí splnit, a [[designing-ai-into-learning|Zabudování AI do učení]] pokrývá, kde tutor sedí v sekvenci kurzu. [[evaluating-ai-interventions-methods|Hodnocení intervencí s AI]] a [[checking-whether-educational-ai-works|Ověřování, zda vzdělávací AI funguje]] řeší, zda to funguje. Pokud je vaším problémem, že model odpovídá příliš ochotně, [[making-ai-better-at-supporting-learning|Zlepšování AI v podpoře učení]] a [[training-ai-tutors-to-guide-rather-than-answer|Školení AI tutorů, aby vedli, ne odpovídali]] procházejí tréninkovou stránku stejné otázky.
