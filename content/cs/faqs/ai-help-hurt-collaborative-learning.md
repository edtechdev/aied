---
title: "Jak může umělá inteligence pomoci nebo škodit společnému učení v mém kurzu?"
created: "2026-11-24T08:05:00-05:00"
updated: "2026-11-24T11:52:29-05:00"
type: faq
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
weight: 80
foundations: [human-ai-collaboration]
pedagogy: [collaborative-learning, problem-based-learning, project-based-learning, metacognition, self-regulated-learning, scaffolding, sociocultural-learning]
technology: [generative-ai, conversational-ai, llm, pedagogical-agent]
assessment: [group-work, peer-assessment, process-oriented-assessment]
methods: [meta-analysis-systematic-review, qualitative-research, mixed-methods-research]
audience: [instructors, instructional designers]
level: [higher ed, k 12]
confidence: medium
contributors: [editor]
translation_of: faqs/ai-help-hurt-collaborative-learning
source_updated: "2026-11-24T08:05:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Dva studenti odevzdají skupinovou zprávu, kterou žádný z nich nedokáže vysvětlit. Třetí skupina produkuje plochý konsensus, se kterým se nikdo nepolemizoval, protože nejrychlejší věrohodná odpověď dorazila první a nástroj usnadnil přestat hledat. Čtvrtá vedou celou vyjednávání v jednom sdíleném chatovacím okně a nedá se rozpoznat, jestli přemýšleli spolu, nebo jen frontovali prompty.

Upřímná odpověď zní: důkazy podporují přínosy umělé inteligence ve společném učení a většinu rizik zanechávají koncepčně. Co je dobře podloženo, je, že umělá inteligence umí urychlit koordinaci, dodat nápady, poskytnout zpětnou vazbu a snížit bariéru vstupu do diskuze. Co je mnohem méně prokázáno, je, že chrání interakci, na níž tyto zisky visí, a nejsilnějším signálem designu v literatuře je, že zisk efektivity a ztráta interakce mohou být stejný mechanismus ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei a Perkins, 2026]]). Užitečná otázka tedy nezní, zda umělou inteligenci povolit, ale kde v práci skupiny přemýšlí a kde jen přesouvá text.

## Stručná verze

**1.** Postavte nástroj tam, kde se děje skupinová sdílená regulace, ne tam, kde se píší jednotlivé části.

**2.** Udělejte prompt skupinovým artefaktem. Sdílený dokument nebo sdílené rozhraní vám dává něco, co můžete číst, a skupině něco, s čím může polemizovat; soukromé promptování dává každému členovi jiného asistenta a žádný společný záznam.

**3.** Přiřaďte umělé inteligenci explicitní roli, která podporuje neshodu, nikoli shodu, například kontradiktorský argument, který brání rychlému konsensu v uzavření.

**4.** Chraňte jednu fázi, kde musí promluvit celý tým, a postarejte se, aby tato fáze vyprodukovala něco, co sbíráte.

**5.** V online a asynchronní práci vyžadujte stopu rozhodování: prompty, úpravy a kdo je vynesl, protože to je jediná verze procesu, kterou kdy uvidíte.

**6.** Nechte jeden prvek, na který každý člen odpovídá sám, aby skupinová známka zůstala proxy pro porozumění, nikoli pro toho, kdo napsal nejlépe.

## Kde je pomoc reálná

[[gao-adaptive-support-collaborative-learning-meta-2026|Gao a kol. (2026)]] spojili 83 experimentálních a kvaziexperimentálních studií adaptivní podpory ve [[collaborative-learning|společném učení]], ohlásených v 80 článcích mezi lety 2004 a 2023, a našli střední pozitivní efekt. Zisky byly nerovnoměrné způsobem, který se kryje s tím, co instruktoři chtějí doopravdy: velké pro individuální znalost, střední pro skupinové produkty a skupinové procesy, malé pro afekt a nulové pro vnímanou kognitivní zátěž. Podmínky oddělující silné intervence od slabých byly konzistentní: kognitivní spouštěče, jako předchozí znalost a chybové vzorce, fungovaly lépe než sociální nebo afektivní; zaměření na společnou aktivitu skupiny fungovalo lépe než zaměření na jednotlivce; kontrola systému nebo učitele vyhrála nad žiackou i sdílenou kontrolou a krátké epizody překonaly jak jednotlivá sezení, tak implementace trvající měsíc i déle.

Přečtěte si to jako návrhový brief, ne jako verdikt. Podpora zaměřená na to, co skupina dělá společně, spouštěná tím, co její členové znají, přicházející krátce a pak ustupující, je profil, který produkoval efekty. Podpora, která monitoruje pocity nebo běží celý semestr, je profil, který je neprodukoval.

Tři mechanismy se objevují opakovaně. Generování nápadů a alternativních řešení je nejčastěji hlášeným přínosem a [[llm-critical-thinking-teamwork-review|Martínez-Peláez a kol. (2025)]] přidávají užitečnou inverzi: velké jazykové modely často vracejí neúplné nebo nesprávné materiály, což studenty nutí, aby je zpochybňovali, ověřovali a zlepšovali, a nepřijímali je. Nižší bariéry participace mají význam pro tišší členy. A [[genai-counter-learner-groupthink-2025|Wiss a kol. (2025)]] ukazují roli, která nemá nic společného s redigováním: jejich agent CALIE připojil dvanáct interprofesionálních týmů v rámci virtuální [[problem-based-learning|problémově zaměřené výuky]] a byl požádán, aby vpravil kontroverzní pohledy a odrazil groupthink. Mezi 158 respondenty průzkumu ze sedmi magisterských programů ve zdravotnictví studenti hlásili, že agent zlepšil dynamiku skupiny, stimuloval kritické myšlení a angažovanost a omezil potenciál groupthinku.

## Kde je škoda a jak pevná je

Strana škody je jako důkazní báze tenčí a jako riziko tlustší a stojí za to je oddělit.

Ztráta interakce je nejlépe podloženým problémem. Komunikace zprostředkovaná umělou inteligencí komprimuje vyjednávání a kolektivní výrobu smyslu: skupina dosáhne koherentního výstupu a zároveň utratí méně z té konverzace, která ho produkuje. Zisk efektivity a ztráta interakce mohou být stejný mechanismus, takže rychlost bez ztráty zřídka dostanete, pokud nepřimějete vyjednávání vrátit se jako povinnou práci ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei a Perkins, 2026]]).

Nejasnost je druhým a je horší online. [[xu-genai-collaborative-space-2026|Xu a kol. (2026)]] pozorovali a vyzpovídali 27 studentů vyššího vzdělávání optikou distribuované kognice a kontrast ubíhá podle linie synchronie. Ve synchronních skupinách pracujících na jednom sdíleném generativním rozhraní AI týmy udržovaly sdílené povědomí, společně konstruovaly prompty, považovaly chat za sdílenou externí paměť a otevřeně vyjednávaly roli nástroje. V asynchronní týmové práci studenti používali nástroj individuálně a před sdílením přepisovali nebo opatřovali popiskem, takže vliv umělé inteligence na rozhodnutí se stal nejasným a obtížně stopovatelným. Stejní studenti, stejný nástroj, jiná viditelnost.

Třetím je homogenizace a delegace. Randomizované důkazy, na které Wei a Perkins volají, zjistily, že umělá inteligence produkovala inovativnější návrhy, aniž by významně zvýšila celkovou inovativitu účastníků, a současně homogenizovala nápady a vybízela ke [[cognitive-offloading|kognitivnímu delegování]]. Skupina může konvergencí urychlit na užší soubor odpovědí, což vypadá jako dobrá koordinace.

Nakonec tu je past moderace. Agent požádán o regulaci skupiny může proces zahájit a stále ho nedokončit. [[roberts-triggers-regulation-agent-supported-collaborative-learning-2026|Roberts a kol. (2026)]] provedli Wizard-of-Oz studii, v níž metakognitivní agent podával prompty 14 skupinám pregraduálních učitelů během 60minutového badatelského úkolu. Skupiny zahájily určitou regulaci po 55 % promptů, ale sdílená strategická změna nastoupila jen v 9 z 58 případů, z toho 7 % částečných. Prompty o nedostatku sdílené perspektivy byly nejméně přijímány a vyvolávaly otevřenou obranu. [[chen-genai-team-moderator-cscl-shared-regulation-2026|Chen a kol. (2026)]] otestovali podobný nápad pozitivněji: během 16 týdnů se 64 bakalářskými studenty adaptivní agent podpořující [[self-regulated-learning|sociálně sdílenou regulaci]] zvýšil rovnost participace oproti statickým pracovním listům, i když ne intenzitu řeči. Oba ukazují stejným směrem a je to úzké tvrzení: agent umí přerozdělit, kdo mluví, a samotné promptování málokdy změní to, co se skupina rozhodne dělat.

## Navrhujte používání AI skupinou, ne její povolování nebo zakazování

Začněte od fáze, ne od kurzu. Pojmenujte etapy otevřené pro umělou inteligenci a etapy, které mají být vypracovány bez ní, a řekněte proč jednou větou pro každou. Vzorec Gao a kol. naznačuje, že fázemi otevřenými pro umělou inteligenci jsou ty, které produkují alternativy a dávají zpětnou vazbu, a fázemi chráněnými jsou ty, kde skupina rozhoduje, co si myslí.

Potom udělejte vyjednávání viditelným. [[kaya-ssrl-sdt-chatgpt-mathematical-modeling-2026|Kaya a Yildiz Durak (2026)]] klasifikovali 18 matematických modelovacích aktivit zprostředkovaných ChatGPT-4o vůči čtyřem rysům [[sociocultural-learning|sociálně sdílené regulace]] a kolektivním potřebám [[self-determination-theory|teorie sebeurčení]] a hlásili, že nástroj dobře obsluhoval kompetence a autonomii, zatímco selhal v propojení. To je konkrétní argument pro to, abyste požadovali, aby o nástroji skupina mluvila, ne jen ho používala, protože potřebou nejvíce ohroženou bývá ta, kterou nikdo nepojmenuje.

Přiřaďte nástroji roli s popisem práce. Redakční asistent, ďábelský advokát, shrnovatel vlastního textu skupiny nebo vysvětlovatel návrhu člena všechny vyvolávají jiné chování. Wiss a kol. kontradiktor je nejjasnějším příkladem role vybrané proto, aby shoda byla těžší, nikoli snazší.

Pro [[project-based-learning|projektové]] a [[problem-based-learning|problémové]] vyučování naneste nástroj na fáze, které regulaci nesou. [[ai-project-hybrid-learning-self-regulated-2026|Priyambudi a kol. (2026)]] postavili hybridní model založený na projektu, který mapuje předmyslení, provedení a sebereflexi na syntaxi projektu, přičemž umělá inteligence působí jako metakognitivní scaffolding a kognitivní interlocutor, nikoli zdroj obsahu. Jejich výchozí stav byl poučný: mezi 65 studenty anglické literatury dosahovalo samoregulované učení průměrně 2,21 na škále 4 bodů, jen 24,4 % si stanovilo učební cíle a 17,8 % se samoevaluovalo. Nástroj mířil na fáze, které studenti už přeskakovali, a to je ta část, která se zobecňuje.

## Online a asynchronní skupinová práce

Asynchronní případ potřebuje vlastní návrh, protože viditelné sdílené rozhraní je přesně to, co mizí. Xu a kol. zjistili, že studenti pracující asynchronně používali umělou inteligenci individuálně a před sdílením očistili výstupy, takže skutečné uvažování skupiny nikdy nevstoupilo do sdíleného prostoru.

Praktické reakce:

- Vyžadujte protokol promptů jako odevzdávatelný výstup ve sdíleném souboru s časovými razítky, aby se použití AI skupinou stalo čitelným, nikoli odvozeným.
- Dejte každému členu střídající roli na sdíleném vlákně, například tazatele, skeptika nebo shrnovatele, aby jedna osoba nebyla jediným zprostředkovatelem skupiny u nástroje.
- Provedte synchronní kontrolní bod, i krátký, kde skupina srovná, co nástroj vyprodukoval paralelně. Srovnání je ta interakce, kterou asynchronní formát odebírá.
- Na počátku používejte malé, ohraničené úkoly, v souladu s nálezem Gao a kol., že krátké adaptivní epizody překonaly jak jednosezení, tak implementace trvající celý semestr.

Zdržení zní: nic z toho nebylo testováno jako celek. Xu a kol. je kvalitativní studie 27 studentů a návrhová doporučení jsou inferencí z toho, co asynchronní skupiny nemohly vidět.

## Co si učitelé o tom myslí špatně

Uvolněné kurzové pravidlo rozhoduje o tom, co skupiny dělají. Stejné institucionální pravidlo vedlo k opačným skupinovým závěrům podle úkolu a podle toho, jak skupina četla riziko, takže rozhodnutí žije v zadání, ať o to učitel chce, nebo ne.

Více umělé inteligence znamená lepší spolupráci. Důkazy podporují přínosy a rizikovou stranu zanechávají z velké části koncepční, ale konkrétní škody výše stačí na to, aby bylo ospravedlněné chránit interakci, nikoli maximalizovat použití.

Promptování skupiny k regulaci to vyřeší. Roberts a kol. změřili velkou mezeru mezi přijatými prompty a změněnými strategiemi. Promptování zahajuje monitorování; nedokončuje práci.

Sdílená složka znamená sdílený proces. Záznamy, které přežijí, jsou ty, které se skupina rozhodla tam položit. Žádejte rozhodovací artefakt, ne archiv.

Agent udrží skupinu na správné cestě. Chen a kol. našli přerozdělení participace, ne její vzrůst, a Roberts a kol. našli, že prompty o sdílené perspektivě vyvolaly odpor. Pozicování má větší význam než přítomnost.

## Námitky, které uslyšíte

**„Skupinová práce je už nespravedlivá a umělá inteligence to zhoršuje."** Problém spravedlnosti existuje dřív než nástroj, a umělá inteligence zlevňuje jednu jeho část: jeden člen může teď vyprodukovat věrohodnou část sám. Individuální kontrolní body a viditelný proces mají za sebou návrhovou racionalitu a žádný z nich se neukázal snižovat neplacenou participaci.

**„Nemohu hodnotit proces při tomto zápisu."** Nemusíte hodnotit celý. Hodnoťte artefakt, který existuje jen tehdy, když se proces odehrál: protokol promptů, vyjádření o vyjednávání, krátké individuální vysvětlení. Všechny tři jsou ohraničené.

**„Studenti budou soukromě promptovat, ať specifikuji cokoli."** Někteří budou. Navrhujte na viditelný případ a soukromý berte jako neznámý, nikoli jako provinění čekající na chycení.

**„Není to otázka oddělení?"** Oddělení nastavuje výchozí stav. Nemůže sekvencovat vaše zadání, vybrat fáze ani rozhodnout, kde žijí prompty.

## Co dělat tento týden

**1.** Zvolte jednu nadcházející skupinovou úlohu a označte dvě fáze bez AI, každou s jednovětovým důvodem.

**2.** Rozhodněte, kde budou prompty žít, a zapište to do briefu jako požadavek, nikoli preference.

**3.** Přidejte krok kontradiktorství: pět minut, během nichž jeden člen argumentuje proti aktuální vedoucí odpovědi skupiny, s AI nebo bez ní.

**4.** Pro jakoukoli online nebo asynchronní skupinovou práci přidejte protokol promptů do kontrolního seznamu odevzdání.

**5.** Přidejte do rubriky jeden individuální kontrolní bod, hodnocený na porozumění části, kterou student neredigoval.

## Kam dál

[[group-work-ai]] se zabývá zacházením s umělou inteligencí v skupinových a kolaborativních zadáních, včetně jejich sekvencování a hodnocení. [[collaborative-learning|Společné učení]] nese základní výzkum o tom, co dělá skupinovou práci produktivní, a [[metacognition|metakognice]] a [[self-regulated-learning|samoregulované učení]] pokrývají individuální schopnosti, na nichž skupinový proces staví. [[online-teaching-and-learning|Online výuka a učení]] pokrývá vzdálený kontext, [[pedagogical-patterns|pedagogické vzorce]] pokrývají opakující se návrhy, které tyto zadání používají, a [[asynchronous-online-courses-ai|asynchronní online kurzy]] pokrývají formát, ve kterém použití AI nejrychleji mizí z dohledu.
