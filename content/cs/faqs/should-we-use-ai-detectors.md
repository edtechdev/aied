---
title: "Máme používat AI detektory?"
created: "2026-09-17T09:21:00-04:00"
connected_faqs: [redesign-assessment-ai-era, course-ai-policy, reduce-ai-cheating, addressing-common-misconceptions-ai-education]
weight: 85
foundations: [academic-integrity]
assessment: [ai-detection, assessment-validity]
ethics: [equity-in-ai-education, trust, privacy, ai-use-disclosure]
level: [higher ed]
audience: [instructors, administrators, assessment professionals]
institutions: [educational-policy-ai, governance]
updated: "2026-10-29T11:57:27-04:00"
translation_of: faqs/should-we-use-ai-detectors
source_updated: "2026-10-28T11:14:23-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Skóre detektoru se vrátí jako označené u práce, kterou jste už dvakrát četli, nebo kolega chce nástroj zapnout před dalším termínem eseje, nebo se vás komise pro integritu zeptá, abyste obhájili zjištění, které stojí na procentu. Někdo v místnosti řekne, že skóre je jen jeden z důkazů. To, o čem rozhodujete, je užší než argument, který z toho plyne: zda toto číslo může v procesu projednávání nepoctivosti vůbec něco vážit, a co na jeho místo postavíte, když ne.

Krátká odpověď, kterou můžete v poradě zopakovat: skóre detektoru nemůže založit zjištění, protože je nelze validovat proti skutečnému stavu, nelze je podrobit křížovému ověření a nesplňuje míru pravděpodobnosti. Jeho chyby se opakují ve vzorcích a dopadají nejtvrději na poctivé texty a na studenty píšící v druhém jazyce. Ptejte se místo toho, zda student umí prokázat porozumění tomu, co odevzdal, a tuto kapacitu financujte.

## Stručně

**1.** Do politiky napište, že výstup detektoru nikdy nespouští žádný důsledek, nikdy nestojí sám a nikdy nezakládá zjištění. Uveďte to přímo v textu politiky, kde to komise najde i poté, co memorandum zmizí.

**2.** Nahraďte otázku „Použil jsi AI?" otázkou „Umíš mi ukázat, že tomu rozumíš?". Použijte krátký rozhovor, raný návrh nebo nahrané vysvětlení.

**3.** Zařaďte do každého klíčového úkolu jeden autentizovaný krok nebo krok bez pomůcek, dimenzovaný podle kapacity opravování, kterou skutečně máte.

**4.** Požádejte dodavatele o míru chybovosti písemně a pak se ji pokuste reprodukovat na vlastních odevzdaných pracích. Vanderbilt to zkusil a nástroj vypnul.

**5.** Přesuňte peníze z licence na detekci do kapacity pro ověřování a do metodické podpory. Tam míří doložená stížnost vyučujících.

## Rozhodněte se, zda máte zjištění, nebo otázku

Jsou to dvě různé práce a běží na různých důkazech. Zjištění vyžaduje důkazy splňující míru pravděpodobnosti a skóre detektoru se tam samo nedostane. Nelze je validovat proti skutečnému stavu, protože u skutečných odevzdaných prací nikdo neví, jak text vznikl, takže validace se stáčí do kruhu a míry falešně pozitivních a falešně negativních výsledků něco znamenají jen uvnitř kontrolovaného testu. Nástroj nezveřejňuje žádné prahové hodnoty ani trénovací data a neumožňuje nezávislou replikaci, takže označený student nemá co odpovědět a vy nemáte co vysvětlit ([[bassett-ai-detectors-education-2026]], [[teichmann-detecting-undetectable-misconduct-2026]]).

Slučování skóre s dalšími signály to nespraví. Jazykové markery, srovnávání stylu, úsudky [[llm|LLM]] a mlčení studenta stále dohromady nedají víc než tento standard. Právě mlčení je to, na co je třeba dávat pozor: studenti mají právo odmítnout a odmítnutí misky vah nepřeváží. Co se legitimně ptát můžete, je zda student umí prokázat [[learning-gains|učení]], které má [[assessment|hodnocení]] podle svého tvrzení měřit, a ústní odpověď to zodpoví způsobem, jakým skóre podobnosti nikdy nedokáže ([[bassett-ai-detectors-education-2026]]).

Binární otázka je také otázka špatná. Práce studentů často vzniká s AI, na hybridním kontinuu, a politiky, které říkají „v hodnocení", zřídka definují, kdy hodnocení začíná, což nechává úsudek na tom, kdo soubor otevře první ([[bassett-ai-detectors-education-2026]]).

Pod tím vším je problém referenčních dat. Detektory se trénují a testují na lidském psaní z doby před generativní AI a vlastní validace Turnitinu použila 700 000 prací z doby před rokem 2019. U tohoto korpusu se předpokládá, že reprezentuje současnou studentskou prózu, což nikdo neověřil a co se posouvá s každým vydáním nového modelu ([[bassett-ai-detectors-education-2026]]).

## Podívejte se na čísla o přesnosti, než nějaké uvedete

Nejsilnější kontrolovaný test ve znalostní bázi zkoumal 642 publikovaných anglických abstraktů ve čtyřech doménách a dvou časových obdobích. Při prahu 0,50 dva komerční detektory označily lehké úpravy AI v souladu s pokyny v 38-80 %, neupravené originály z let 2023-25 v 9-15 % (ne-[[stem-education|STEM]] výrazně nad STEM, p < 0,001), a poté, co text prošel službou na zlidštění, zachytily méně než 4 % přepisů označených jako AI, tedy míru falešně negativních výsledků nad 96 %. Autoři to nazývají integritní pastí typu catch-22: nástroj chytá právě ty studenty, kteří používání AI přiznají a text jen lehce upraví, a ty, kteří se mu chtějí vyhnout, nechytá. Jejich doporučení je výslovné: skóre detektorů by nikdy nemělo sloužit jako samostatný důkaz nepoctivosti ([[karr-ai-detection-humanization-2026]]).

Nezávislý [[benchmark|srovnávací test]] dospívá ke stejnému závěru z jiné strany. Žádný ze 14 nástrojů nedosáhl 80 % přesnosti a pouhé parafrázování, drobné úpravy nebo služba na zlidštění textu zhruba polovinu i tohoto výkonu smažou. Při realistických základních četnostech falešně pozitivní výsledky převyšují skutečně pozitivní ([[teichmann-detecting-undetectable-misconduct-2026]]).

Míra záchytu u celého generovaného textu je horší, než naznačují uváděné míry chyb. Ve skryté terénní studii výzkumníci vložili zcela AI generované práce do živého systému online [[summative-assessment|souhrnného hodnocení]] v pěti psychologických modulech: 94 % zůstalo neodhaleno a práce vytvořené AI v průměru předčily skutečné studenty. Smluvní podvádění už dříve ukázalo stejný strukturální problém, protože nezanechává žádnou spolehlivou stopu ([[teichmann-detecting-undetectable-misconduct-2026]]).

Přesnost se také mění podle úkolu. Když výzkumníci testovali, zda [[generative-ai|generativní AI]] dokáže detekovat vlastní výstup, výsledky byly spolehlivé u programování a delšího reflektivního psaní a slabé u krátkých odpovědí, kde model často hodnotil vlastní text jako lidštější než autentickou práci studentů. Drobné změny zadání přesnost prudce snižovaly ([[llm-detecting-llm-generated-content-education]]). Práh, který platí pro jedno zadání, selže u jiného, a který to bude, se dozvíte až u odvolání.

Pak je tu expirace. Studie z roku 2026 přerámovává detekci jako problém adaptace: [[ren-test-time-adaptation-ai-text-detection-2026|útok přepisováním metodou černé skříňky]] srazil komerční detektor Pangram na vyváženou přesnost 63,5 % a recall u AI na 27,0 % a detektor trénovaný na Llama 3.3 70B Instruct dosáhl na abstraktech z novějšího modelu jen 55 % recallu. Adaptace v čase testu se u stejného textu vrátila na 94,4 % vyvážené přesnosti a 99 % recallu, což je ta povzbudivá polovina. Stejná práce ukazuje, co oprava stojí: jak se simulované rozšíření LLM šíří, recall pevně naučeného detektoru na lidském textu klesá v průběhu dekády z 85,9 % na 73,4 %. Podmínka expirace je řečena bez okolků: vyvážená přesnost nemůže přesáhnout polovinu součtu jedné a vzdálenosti totální variace mezi distribucí lidského a AI textu, takže sbližování obou distribucí by porazilo každý učený detektor. Validované skóre platí, dokud se modely neposunou, a ty se posouvají každých několik měsíců ([[ren-test-time-adaptation-ai-text-detection-2026]]).

A stroj nikdy zřetelně neporazil pozorného čtenáře. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall a Parapadakis (2025)]] uvádějí strojovou detekci AI nebo parafrázovaného textu zhruba na 80 % proti 78,4 % u lidských posuzovatelů a citují důkazy, že AI generovaný text prošel jako lidský až v 80 % případů. Ten rozdíl se ztrácí v chybovém pásmu, které člověk už tak přináší, a to je příliš málo na to, aby to založilo zjištění ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

## Zjistěte, na čí práci chyba dopadá

Rysy, které detektory čtou jako signály AI, totiž hustotu dlouhých tokenů, frekvenci akademických slov a jednotný styl, jsou zároveň rysy kompetentního psaní v druhém jazyce. Chybná klasifikace proto sleduje jazykové zázemí, nikoli chování, což z toho dělá otázku [[equity-in-ai-education|rovnosti]] dřív, než je to otázka technická ([[teichmann-detecting-undetectable-misconduct-2026]]).

Toto zkreslení se objevuje i mimo angličtinu. [[kazakh-ai-text-detectors-2026|Srovnávací test 3 811 pasáží, jejichž autorství před ChatGPT lze prokázat]], zjistil, že pět veřejných detektorů trénovaných na angličtině označí v podobě, v jaké byly vydány, 81,4 % lidských kazašských pasáží (TMR RoBERTa) a 79,6 % publikovaných kazašských studentských esejí (Desklib DeBERTa), u Fakespotu 25,5 %, a že jejich rekalibrace na 1 % falešně pozitivních výsledků výměnou zachytí nejvýše 1,3 % strojového textu. Výhrada samotné studie je důležitá, když ji citujete: lidské pasáže jsou veřejné texty z doby před ChatGPT tak, jak byly nalezeny, nikoli studentské eseje, takže její vzdělávací míry jsou nejméně jisté číslo, které uvádí ([[kazakh-ai-text-detectors-2026]]).

Obor přidává další osu. Ve studii s 642 abstrakty byly ne-STEM abstrakty označovány výrazně častěji než STEM, což odráží písemné konvence těchto oborů, a ne chování jejich autorů ([[karr-ai-detection-humanization-2026]]). Dva široce používané komerční nástroje naměřily v jednom srovnání přesnost 0,69 a 0,61 a oba selhaly na hybridním textu člověka a AI ([[hadra-ai-detector-accuracy-efl-2026]], [[van-vlasselaer-ai-detector-reliability-2026]]). Detektor je test stylu a styl, který trestá, sleduje jazykové zázemí, obor a registr. Žádný z toho není fakt o tom, zda student použil AI, a každý z toho je fakt o studentovi. Širší vzorec je zdokumentován v [[differential-effects-across-learner-groups|Rozdílných účincích napříč skupinami studentů]].

Část nákladů se objeví ještě před jakýmkoli slyšením. Protože formální procesy vyžadují důkaz na úrovni detekce, který je funkčně nedostupný, vyučující končí u toho, co jeden popis praxe nazývá „podezření bez možnosti obrany", zatímco si [[student-rationalization-ai-writing|studenti své používání racionalizují]] a spisy uvíznou ([[best-response-student-ai-dialog-2026]]). Ztráta [[trust|důvěry]] dopadá na vztah, na kterém proces stojí.

## Změňte otázku, kterou studentovi kladete

Grand Canyon University přešla od otázky „Použil tento student AI?" k otázce „Umí tento student prokázat porozumění tomu, co odevzdal?", a to pomocí krátkých rozhovorů, raných návrhů a nahraných vysvětlení, celoústavně zavedených na podzim 2025. Argument pro to je praktický: vyučující jsou už kvalifikovaní posuzovat porozumění a tento posun jim vrací jejich autoritu, místo aby je nechával čekat na důkaz, který nikdy nepřijde ([[best-response-student-ai-dialog-2026]]).

Mění to také to, co student s obviněním může udělat. Když mu ukážete obavu a požádáte ho o vysvětlení, může ji vyřešit. Když mu ukážete procento, může je jen popřít.

## Veďte rozhovor tak, aby obstál při přezkumu

Berte ověřovací rozhovor jako krok procesu, s oznámením a záznamem, a obstojí, až někdo za semestr soubor otevře.

Začněte oznámením. Řekněte studentovi srozumitelně, co obavu vyvolalo, a k čemu rozhovor je. Pokud obava přišla ze skóre detektoru, řekněte to a řekněte, že skóre není zjištění. Pokud studentovi sdělíte jen to, že je obviněn z podvádění, schůzka se stane obhajobou charakteru, nikoli výkladem práce.

Pak se ptejte na práci samotnou. Jaké tvrzení jste chtěl v této části vyslovit. Odkud tento důkaz pochází. Proč jste to uspořádal takto. Co jste vyřadil. Student, který text napsal, na to odpoví na úrovni rozhodnutí. Student, který ho nenapsal, bude odpovídat na úrovni tématu, a rozdíl se ukáže rychle, aniž by kdokoli musel prokazovat úmysl.

Zachovejte právo mlčet. Odmítnutí odpovědět nic nepřiznává a postup, který odmítnutí bere jako doznání, u odvolání neobstojí. Zaznamenejte, na co se ptali, co bylo odpovězeno a co bylo odmítnuto.

Uzavřete rozhodnutím, které umíte vyslovit bez skóre. Buď student prokázal porozumění, které hodnocení měří, nebo existuje samostatná, věcná obava o práci, kterou umíte popsat vlastními slovy. Pokud neplatí ani jedno, soubor tam končí. Takový výsledek je normální a takto se má i zapsat, protože proces, který zaznamenává jen vinu, učí další komisi, že podezření je totéž jako zjištění.

## Zařaďte do zadání jeden krok, do kterého se nástroj nevejde

Asynchronní ústní hodnocení, postavená jako prompty připravené v pravý čas s krátkými, časově omezenými nahranými odpověďmi hodnocenými podle vložených rubrik, si v jedné studii vedla srovnatelně s prezenčními testy s výběrem odpovědí a v jiné výrazně lépe, přičemž studenti uváděli aktivnější přípravu a vyšší vnímanou profesní relevanci. Pro [[administrator|administrátora]] je podstatná vlastnost ta, že se to škáluje bez dozoru ([[asynchronous-oral-assessment-2026]]).

Přepracování úkolu udělá víc práce než zpevňování kontroly. Případová studie studentů bakalářské ekonomie zjistila, že jen asi třetina uvedla nějaké použití AI a přiznání bylo ještě vzácnější, a neoznámení četla jako racionální opatrnost v nejasné politice, nikoli jako nepoctivost. Titíž studenti preferovali reálné úkoly založené na datech jako řešení ([[kirsanov-beyond-detection-ai-online-assessments-2026]]). Očekávat, deklarovat a zkoumat používání AI je lepší než ho hlídat, protože [[authentic-assessment|autentické hodnocení]] se musí navrhnout, ne vynutit ([[beyond-detection-authentic-assessment-ai-2025]]).

Plynou z toho dvě rozhodnutí. První je rozsah. Krátká ústní kontrola u každé větší odevzdané práce je v semináři únosná. V přednášce pro tři sta lidí přežijí do desátého týdne etapové návrhy a namátková kontrola u anomální práce. Vyberte verzi, kterou v posledním týdnu semestru ještě s hodinami na opravování zvládnete, protože autentizovaný krok, který se pod zátěží zhroutí, vás vrátí k artefaktu.

Druhé jsou body. Pokud odůvodnění, historie návrhů nebo reflexe odmítnutého návrhu AI nezíská žádné body, vznikne za pět minut a nikdo ho nebude číst, a studenti budou optimalizovat tu část, která se známkuje. Dejte mu takovou váhu, aby vynechání kroku stálo víc než jeho udělání.

## Udělejte z přiznání levnou volbu

Nejasné nebo represivní politiky ženou ke skrývání. Konkrétní rámce deklarace navázané na kognitivní fáze, spojené s ujištěním, že pravdivé přiznání není sankcionováno, dostanou ze studentů víc informací než dohled ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). Otázka návrhu zní, kterou odpověď vaše pravidla dělají pro studenta, který má chuť se skrýt, nejsnazší, a pravidlo, které bere deklaraci jako doznání, na ni odpovědělo špatně.

Většinu práce tady udělá formulace. Deklarace, která studenty nechá zaškrtnout políčko a pak leží nepřečtená v odevzdávacím systému, je učí, že přiznání je divadlo, a další ročník se to naučí rychleji. Deklarace navázaná na fázi práce, která se ptá, k čemu byl nástroj v té fázi použit a co student s výstupem udělal, vám dá něco, co skutečně můžete číst, a studentovi důvod být přesný.

## Napište klauzule, které vás udrží mimo slyšení

Vystavení riziku zřídka začíná soudním sporem. Objeví se nejdřív jako interní odvolání nebo stížnost regulátorovi a první, co se testuje, je postup. Přirozená spravedlnost vyžaduje, aby student byl seznámen s obviněním a dostal příležitost reagovat před jakýmkoli rozhodnutím, a tou příležitostí je obvykle vyšetřovací schůzka nebo pohovor s komisí, jehož záznam se stane důkazem. Zjištění dosažená bez tohoto kroku jsou zranitelná, i když podezření pod nimi bylo rozumné ([[munoz-misconduct-allegation-evidence-2026]]).

Důkazní standardy jsou druhé. Zjištění nepoctivosti potřebují důkazy splňující míru pravděpodobnosti, a pokud váš případ nelze vyslovit bez skóre detektoru, je případ na první pohled slabý ([[bassett-ai-detectors-education-2026]]). Kde případ stojí jen na stylu, patří cesta ústního ověření do postupu, ne do dobré vůle předsedy komise.

Třetí je rozsah. Plošné zákazy AI, které neoddělí přepis a OCR od generativního psaní, mohou odebrat kompenzační nástroj, na kterém závisí studenti s obtížemi s motorikou, čitelností rukopisu nebo přesností psaní, a několik takových nástrojů bylo ukončeno právě s tím, že mezeru vyplnil AI přepis. To je právní riziko stejně jako nepřesnost ([[wright-transcription-not-generation-2026]]). Pojmenujte [[assistive-technology|kompenzační]] a přepisové nástroje v textu politiky.

Čtvrtý je nákup. Detektory ukládají studentské práce na servery třetích stran, někdy v zahraničí a pod slabší ochranou [[privacy|soukromí]], což staví únik, uchovávání a další komerční využití do registru rizik vaší instituce, ne na marketingovou stránku dodavatele. Podmínky by měly pokrýt uchovávání, použití pro [[llm-training-and-fine-tuning|trénování modelů]], místo uložení, hlášení incidentů a práva na odvolání ([[bassett-ai-detectors-education-2026]]). Popis právního rizika ve znalostní bázi je v [[legal-issues-and-risks|právních otázkách a rizicích]] a je poctivý ohledně svých mezí: dokumentuje postupy, kategorie důkazů a spolehlivost nástrojů, ne rozsouzené výsledky.

Riziko snižuje to, co je procesní. Nikdy neberte výstup jako samostatný důkaz nebo automatický spouštěč. Zdokumentujte standard, který váš proces uplatňuje. Dejte oznámení a skutečnou možnost reagovat do záznamu. Nabídněte ověření, když případ stojí na stylu. Uchovejte auditní stopu, která ukáže, že se to všechno stalo.

## Otestujte formulaci na čtyřech případech

Jazyk politiky selhává na případech, které si při psaní nikdo nepředstavil. Prožeňte tyto čtyři svým návrhem, než půjde do komise, a poznamenejte si, kde text nemá odpověď.

Student, který prohnal návrh překladovým nástrojem. Politika musí říct, zda se překlad počítá jako použití AI a zda se počítá stejně u studenta píšícího v druhém jazyce jako u toho, kdo píše v jazyce prvním. Pokud mlčí, komise bude improvizovat, a právě v improvizaci začíná argument rovnosti.

Někdo, kdo použil AI na osnovu a každý odstavec napsal sám. Pod pravidlem, které se ptá, zda se AI práce dotkla, je tento student ve stejné kategorii jako ten, kdo vygeneroval celou práci. Pod pravidlem navázaným na kroky ne a můžete říct proč. Ten rozdíl je konstrukt a politika ho musí pojmenovat.

Někdo, kdo text vygeneroval a neumí ho vysvětlit. To je případ, pro který je váš proces postaven, a je to ten, který se vyřeší bez skóre detektoru.

Student, který používá přepis, protože psaní na klávesnici je nespolehlivé. Pojmenujte [[assistive-technology|kompenzační]] nástroje jako samostatnou kategorii s vlastní cestou, aby se z úpravy podmínek nestalo obvinění.

## V čem se administrátoři u detektorů mýlí

**Zveřejněná míra falešně pozitivních výsledků dodavatele je rizikové číslo, proti kterému lze rozpočtovat.** Vanderbilt si licencoval detektor, který inzeroval 1 % falešně pozitivních výsledků, pak se to číslo pokusil validovat a nedokázal to. Při 75 000 odevzdaných pracích ročně znamenalo 1 % zhruba 750 chybně označených studentů. Univerzita nástroj vypnula ([[teichmann-detecting-undetectable-misconduct-2026]]). Míra, kterou na vlastním korpusu nedokážete reprodukovat, je marketingové číslo, a chybně označení studenti jsou pořád vaši na vyřízení.

**Detekce odrazuje studenty, kteří by jinak podváděli.** Odrazování běží přes rozlišování mezi skrytým použitím a legitimní prací, ne přes hrubou míru záchytu. Když zvýšená citlivost produkuje víc nových falešně pozitivních než nových skutečně pozitivních výsledků, silnější dohled činí skrývání relativně přitažlivějším, takže utratíte kredibilitu u studentů, kteří nic špatného neudělali, rychleji, než identifikujete ty, kteří to udělali ([[mohamed-temimi-assessment-imperfect-information-disclosure-2026]]). Metaanalýza Kroua a kol., citovaná ve stejném přehledu, zjišťuje, že vnímaná vlastní účinnost koreluje s podváděním negativně, zatímco skutečná schopnost s ním nekoreluje inverzně vůbec, takže schopní studenti mohou podvádět, když hodnotí hodnocení jako nespravedlivé. Detekce není spolehlivý nástroj ani zjevný odstrašující prostředek ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

**Skóre plus pár indikátorů dá dohromady případ.** Nedá. Standardem jsou důkazy splňující míru pravděpodobnosti a skóre zkombinované s markery, srovnáním stylu, úsudky LLM nebo mlčením na to stále nestačí. Jeden test, který stojí za to použít, je, zda byste to uvažování řekli nahlas u slyšení ([[bassett-ai-detectors-education-2026]]).

**Licence detektoru stojí méně než přepracování hodnocení.** Licence je nejmenší položka a nese s sebou riziko ochrany dat, práci s nákupem a trvalý proud odvolání postavených na nástroji, jehož chyba je vzorcovaná podle jazykového zázemí. Vyučující tu zkušenost popisují jako „podezření bez možnosti obrany", takže rozpočtová položka, která mění výsledky, je kapacita pro ověřování a metodická podpora ([[best-response-student-ai-dialog-2026]]).

**Plošný zákaz chrání instituci.** Příliš široká pravidla mohou připravit o úpravu podmínek a pozvat argument diskriminace, kterému jste se chtěli vyhnout, protože chyba, kterou produkují, je soustředěná na identifikovatelné skupiny, místo aby byla rozložena rovnoměrně ([[wright-transcription-not-generation-2026]], [[hadra-ai-detector-accuracy-efl-2026]]).

## Co se na vás vrátí

**„Náš dodavatel inzeruje 1 % falešně pozitivních výsledků."** Vanderbiltův licencovaný detektor tvrdil přesně to a tvrzení nepřežilo pokus univerzity o jeho validaci. Nezávislé srovnávací testy nedávají žádnému nástroji přesnost nad 80 % ([[teichmann-detecting-undetectable-misconduct-2026]]). Požádejte o validační studii a o korpus, na kterém běžela, a pak o to, abyste si ji mohli spustit sami.

**„Používáme to jen jako jeden z důkazů."** Standardem jsou důkazy splňující míru pravděpodobnosti a skóre zkombinované s markery, srovnáním stylu, úsudky LLM nebo mlčením ho stále nesplňuje ([[bassett-ai-detectors-education-2026]]). Kdyby komise nepřijala to uvažování vyslovené nahlas, soubor by ho neměl obsahovat.

**„Když přestaneme detekovat, podvádění vyhraje."** Podvádění už těmito nástroji prochází. 94 % vložených AI prací prošlo živou online zkouškou bez povšimnutí, zlidštění poráží detekci ve více než 96 % případů a smluvní podvádění už nezanechávalo spolehlivou stopu. Co detektory chytají s měřenou spolehlivostí, jsou poctivé lehké úpravy a projev nerodilých mluvčích ([[teichmann-detecting-undetectable-misconduct-2026]], [[karr-ai-detection-humanization-2026]]).

**„Používáme to jen soukromě, abychom rozhovor otevřeli."** To je nejméně škodlivé použití a přesto něco stojí, protože studenti, u nichž je největší pravděpodobnost označení, mají nejmenší pravděpodobnost zneužívání AI. Podezření pak dopadá na špatné lidi dřív, než rozhovor začne ([[teichmann-detecting-undetectable-misconduct-2026]]). Odpovědí Grand Canyonu bylo přestat vůbec vycházet z podezření ([[best-response-student-ai-dialog-2026]]).

**„Student, který nemá co skrývat, se nemá čeho bát."** Studie s 642 abstrakty zjistila označení vyhovujících lehkých úprav v 38-80 % při prahu 0,50 a kazašský srovnávací test našel 81,4 % a 79,6 % prokazatelně lidských pasáží označených vydanými detektory ([[karr-ai-detection-humanization-2026]], [[kazakh-ai-text-detectors-2026]]). Čistý záznam neposkytuje žádnou ochranu, když je signálem styl. Proto také kazašští autoři označují své vzdělávací míry za nejslabší číslo studie a proto je nemáte citovat jako míru u studentských esejí.

**„Nemůžeme prostě vyžadovat deklaraci a chybějící brát jako vinu?"** Chybějící deklarace není důkazem skrytého použití a brát ji jako důkaz činí skrývání racionálním. Konkrétní rámce navázané na kognitivní fáze s ochranou pravdivého přiznání před sankcí vytáhnou víc informací než dohled ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). Důkazy na této stránce se týkají toho, co produkuje přiznání. Neříkají nic o tom, kolik podvádění režim deklarací zabrání.

## Co udělat tento týden

**1.** Otevřete svůj postup projednávání nepoctivosti a najděte každé místo, kde by skóre detektoru mohlo spustit krok. Napište jednu větu, která spouštěč odstraní, a vezměte ji tomu, kdo dokument vlastní.

**2.** Napište dodavateli a požádejte o validační studii za inzerovanou mírou chybovosti, a zeptejte se, jaký korpus použil.

**3.** Vyberte své zadání s nejvyšším dopadem a přidejte jeden autentizovaný krok, který stihnete oznámkovat v čase, který máte.

**4.** Sepište tři otázky, které označenému studentovi položíte, počínaje tím, co chtěl tvrdit a jak to ověřoval.

**5.** Pošlete klauzule o nákupu a přístupnosti úřadu, který podepisuje smlouvy, s výslovně uvedenými podmínkami uchovávání, použití pro trénování a hlášení incidentů.

## Kam dál

Protějšek na straně návrhu je [[reduce-ai-cheating|Jak mohu ve svém kurzu omezit podvádění s AI?]] a [[redesign-assessment-ai-era|přepracování hodnocení v éře AI]] posouvá argument hodnocení dál. [[course-ai-policy|politika kurzu k AI]] pokrývá, jak politiku kurzu formulovat a komunikovat, a [[ai-literacy|gramotnost v oblasti AI]] pokrývá, co studenti potřebují vědět, aby s těmito nástroji pracovali, aniž by ztratili práci samotnou. Koncepční stránky za argumentem jsou [[academic-integrity|akademická integrita]], [[equity-in-ai-education|rovnost ve vzdělávání s AI]] a [[legal-issues-and-risks|právní otázky a rizika]]; klauzule specifické pro detekci výše jsou institucionální vrstvou [[educational-policy-ai|vzdělávací politiky k AI]].
