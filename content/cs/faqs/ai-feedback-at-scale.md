---
title: "Jak mi může AI pomoci dávat lepší zpětnou vazbu ve velkém měřítku?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T11:57:26-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Je šestý týden. Na stole máte hromadu konceptů, rubriku, které věříte, a rostoucí podezření, že třetinu vašich komentářů studenti jen prolétnou a zapomenou. Kolega zmíní, že jeden nástroj teď do hodiny okomentuje každý koncept. Porada katedry potřebuje odpověď: je to zlepšení, nebo jen rychlejší způsob, jak vyrábět text, který nikdo nečte?

Krátká odpověď pro kolegu: zpětná vazba od AI si své místo zaslouží v pokrytí, včasnosti a konzistenci, a to v úzkém pásmu. Jazyková práce v rozsahu korektury a první komentáře vedené rubrikou stojí za automatizaci. Dosah je ta levná část. Ve shlukově randomizovaném experimentu s 1 176 studenty prvního ročníku porazily reflektivní a hybridní návrhy přímou kritiku od AI v odloženém [[transfer-of-learning|přenosu]] bez AI. V randomizovaném experimentu s esejemi u 70 studentů nepřinesla lépe hodnocená zpětná vazba od AI lepší revize než zkušený učitel. O výsledku rozhoduje to, co student s komentářem udělá, a [[feedback-literacy|gramotnost v oblasti zpětné vazby]] odděluje studenty, kteří z ní těží, od těch, kteří ji opisují.

## Stručně

**1.** Než cokoli pilotujete, rozhodněte, co budete považovat za úspěch: kvalitu revize a odložený výkon bez pomoci, ne plynulost komentářů.

**2.** Rozdělte vlastní komentáře na opravy na jazykové úrovni a na soudy o myšlení. Pro automatizaci přichází v úvahu jen první kategorie.

**3.** Zdroje vrstvěte v pořadí. Nejprve sebehodnocení, potom vzájemná zpětná vazba, nakonec kritika od AI. Dva zdroje položené vedle sebe vedou k pasivnímu převzetí.

**4.** Dejte modelu svou rubriku a přinuťte ho uvažovat krok za krokem. Holý pokyn vede k obecnému výstupu.

**5.** Poslední slovo, tón a cokoli, co se stane záznamem, nechte na člověku.

**6.** Naplánujte hodiny, které strávíte mazáním a kalibrací, a porovnejte je s hodinami, které jste uvolnili.

## Než cokoli pilotujete, rozhodněte, co bude úspěch

Lákavá metrika je kvalita toho, co model napíše. Je to zároveň metrika, která klame.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia a kol. (2026)]] randomizovali 70 studentů píšících argumentativní eseje v perštině do tří skupin. Promptování s řetězcem myšlenek přineslo výrazně lépe hodnocenou zpětnou vazbu (M = 12,90) než zero-shot promptování (M = 11,25, p = 0,01) i než zkušený lidský učitel (M = 11,20, p = 0,008). Skupina s řetězcem myšlenek však své eseje neupravila výrazně více než skupina se zpětnou vazbou od učitele, která dosáhla srovnatelných zisků. Lepší komentáře, stejné revize. Pokud je vaším kritériem úspěchu kvalita komentářů, studie se čte jako vítězství. Pokud je jím to, co se změnilo v eseji, ne.

Dva další signály lichotí pilotu, který probíhá špatně, proto je zafixujte předem. Jedním je spokojenost studentů. V celouniverzitním pilotu na Deakin University, o němž referují [[tubino-adachi-ai-automated-feedback-literacy|Tubino a Adachi (2022)]], se kladná průměrná hodnocení snášela s chybami, které označili sami studenti, takže dotazník se smajlíky není dokladem přesnosti. Druhým je používání. Nástroj na Deakin byl volitelný a používalo ho zhruba 13 % bakalářských a 12 % magisterských studentů, přestože k němu mělo přístup téměř 4 000 studentů. Využívali ho spíše aktivní a vysoce výkonní studenti. To je vše, co vám dostupnost nástroje přinese.

Měřítko výsledku, které obstojí, je kvalita revize plus odložený výkon bez AI. Několikanásobné odevzdání v tentýž den je použitelná stopa toho, zda se student vůbec zapojil. Není to důkaz, že se něco naučil.

## Než je automatizujete, roztřiďte své komentáře

Vezměte svou poslední sadu komentářů a rozdělte ji na dvě části: opravy vět a soudy o myšlení. Rozdělení vám řekne, co automatizovat, a je užší, než naznačují dodavatelé.

Pilot na Deakin proběhl v roce 2021 s nástrojem AI automated feedback od FeedbackFruits ve 29 předmětech a u téměř 4 000 studentů. Pracuje s rysy textu na mikroúrovni: délkou vět, interpunkcí, gramatikou, strukturou textu. To podporuje fázi korektury, kdy pedagog nastaví parametry, student nástroj používá samostatně a zpětná vazba dorazí včas, aby se s ní dalo pracovat. Škáluje se dělba práce, ne model.

Soudy o myšlení jsou místem, kde sídlí režimy selhání. [[learner-centered-feedback-ai|Aldino a kol. (2026)]] shromáždili problémy na straně pedagogů od 21 vysokoškolských učitelů: nekonzistentní tón (n = 7), možné dezinformace (n = 5) a problémy s důvěrou (n = 5). Jejich revizní úsilí šlo do mazání přehnané chvály a obecných doporučení, nikoli do přidávání obsahu. To je váš kontrolní úkol a tam jdou hodiny.

## Zdroje vrstvěte, ne skládejte na sebe

Nejsilnější důkazy o designu pocházejí z vícemístného, shlukově randomizovaného longitudinálního terénního experimentu: 1 176 studentů prvního ročníku ve 48 sekcích na 4 univerzitách a ve 3 doménách [[stem-education|přírodních věd]], randomizovaných na úrovni sekce do podmínek: pouze vzájemná zpětná vazba, přímá GenAI, reflektivní GenAI a hybridní ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Reflektivní podmínka vyžadovala sebehodnocení před kritikou od AI. Hybridní podmínka probíhala jako sebehodnocení, potom vzájemná zpětná vazba a nakonec kritika od GenAI. Hybrid přinesl nejvyšší zisky v kvalitě argumentace a nejjasnější výhodu v pojmovém učení. Reflektivní i hybridní podmínka vedly k silnějšímu přijetí zpětné vazby a k větší míře [[self-regulated-learning|seberegulovaného učení]] než přímá GenAI a obě ji překonaly v odloženém přenosu bez AI. Přímá GenAI sice okamžitou kvalitu argumentace nad vzájemnou zpětnou vazbou zvedla, v čemž spočívá její přednost, ale učinila tak se slabším přenosem.

Mechanismus vysvětluje, proč na nástroji záleží méně než na pořadí. Přímá kritika vybízí k pasivnímu převzetí: student přečte verdikt a použije ho. Reflektivní a hybridní návrhy nutí studenta komentář interpretovat, porovnat s kritérii, posoudit jeho relevanci a teprve pak revidovat. Vzdělávací hodnota závisí méně na přístupu k AI než na tom, zda prostředí zpětné vazby zachovává [[agency|agency studenta]] a [[evaluative-judgment|hodnotící úsudek]] během revize.

Vzájemná zpětná vazba má v tomto pořadí své vlastní místo. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen a Yan (2026)]] provedli dvě paralelní třídy angličtiny (N = 118 studentů prvního ročníku v Číně; GenAI n = 56, vzájemná zpětná vazba n = 62) třemi cykly sebehodnocení za jeden semestr. Scaffolding od GenAI zlepšilo gramotnost v oblasti zpětné vazby mírně, ale významně oproti vzájemnému hodnocení od spolužáků (ANCOVA p = 0,049, ηp² = 0,03). Studenti s GenAI iterativně zpřesňovali prompty a ověřovali nebo zpochybňovali nepřesný výstup. Studenti ve skupině se vzájemnou zpětnou vazbou volili zdroje podle sociální pohodlnosti a jejich hodnotící úsudek byl zkreslen náklonností k přátelům. Vzájemné hodnocení si zachovalo zvláštní hodnotu pro vnímání publika, a proto autoři navrhují vícestupňové návrhy s anonymní vzájemnou zpětnou vazbou, ne její nahrazení.

Výhoda Gu a kol. byla malá a sami ji čtou jako skutečnou, ale sama o sobě nepřevratnou. Podpůrnou práci odvedlo scaffolding od učitele, pokyny k promptům a pracovní listy.

## Dejte modelu rubriku a nechte ho ukázat kroky

Generování s odkazem na rubriku je ta automatizovatelná část.

Kvalitativní zisk ve studii Farrokhnia a kol. vzešel z promptu s řetězcem myšlenek, který model provedl krok za krokem hodnocením podle rubriky argumentace, nikoli z holého pokynu dát zpětnou vazbu. Gu a kol. dali své skupině GenAI ChatGPT-4o s předtrénovanými rubrikami a pokyny k promptům, a právě proto šel výstup kontrolovat proti uvedeným kritériím. V obou případech se kritéria dostávají do systému promptem a záznam uvažování vám umožní vidět, zda je model použil.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson a Yan (2025)]] považují kvalitu promptu za pant celého procesu. Vágní prompty vedou k obecnému a nepoužitelnému výstupu a generované komentáře mohou být halucinované, zaujaté nebo se mohou překrývat, což vrací hodnotící úsudek zpět čtenáři. Kalibrace je ještě ostřejší rozdíl. Ve studii Farrokhnia a kol. kvalita zpětné vazby od GenAI významně souvisela se silou prvního konceptu studenta, kdežto kvalita zpětné vazby od učitele ne. Učitel kalibroval konzistentněji. Objem škáluje. Kalibrace ne.

## Poslední slovo a záznam nechte člověku

[[becerra-aicofe-feedback-2026|Becerra, Palma a Cobos (2026)]] popisují AICoFE, který provozuje tři nezávisle doladěné modely (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) nad skóre z rubriky a kvalitativními pozorováními a vytváří nezávislé komentáře ke konceptu. Pedagog pak sestaví výslednou zprávu výběrem vět nebo odstavců, s legendou ukazující, který model co přinesl. Model koncept sepíše. Pedagog ho doručí a výsledek podepisuje jeden člověk, který koncept přečetl.

Aldino a kol. nacházejí stejný vzorec pomoc, pak ověření i v běžné praxi. Komponenta strojového učení nejčastěji označila jako chybějící „Naplnění cíle učení“ (20 z 21 učitelů ho vynechalo; 16 označení přijalo) a „Vztah učitele a studenta“ (14 vynechalo; 12 přijalo). O každém návrhu učitelé rozhodovali odborným úsudkem, a v tom spočívá smysl zapojení člověka do smyčky.

Dvanáct z 21 učitelů u Aldina a kol. provedlo další revize na úrovni vět a převládajícím vzorcem byla kalibrace tónu: snižování chvály (f = 11), odstraňování doporučení (f = 9), odstraňování povzbuzení (f = 8). Revize se shlukovaly v relační dimenzi, zejména u Vztahu učitele a studenta (f = 24). Chránili autenticitu a profesní hlas, a tato práce se automatizovat nedá.

## Naučte studenty číst komentář

Gramotnost v oblasti zpětné vazby je předpokladem a je rozložena nerovnoměrně.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths a Lodge (2026)]] nechali 32 studentů psychologie plnit 25minutový úkol s esejí se záznamem obrazovky a s neomezeným přístupem k ChatGPT, potom jim záznam přehráli v rozhovoru stimulovaném videem. Gramotnost v oblasti zpětné vazby byla jediným významným pozitivním prediktorem známky z eseje (β = 0,46, p = 0,017). Frekvence používání GenAI, [[trust|důvěryhodnost zdroje]] ani [[prior-knowledge|předchozí znalosti]] výkon nepředpovídaly, což je bod, který v úvodníku zvláštního čísla uvádějí také [[feedback-futures-genai|Zhan, Wood, Carless a Yan (2026)]]. Méně než třetina studentů porovnala výstup AI s jiným internetovým zdrojem. Polovina uvedla záměrné vyhýbání se AI kvůli [[academic-integrity|akademické integritě]] nebo proto, že chtěli esej vlastními slovy. Většina žádala zpětnou vazbu na úrovni úkolu, která se na jiné úkoly přenáší špatně.

Krajní případy jsou vidět na dvojici autorů IELTS, kterou popisují Zhan a kol. Student s nízkou gramotností napsal vágní prompt, dostal obecnou zpětnou vazbu, důvěřoval jí nebo ji příliš opsal a zapojil se povrchně. Student s vysokou gramotností napsal prompt odkazující na kritéria, doptával se, křížově ověřoval zdroje a sledoval revize. Rozdíl byl ve výuce a návyku, ne v přístupu k nástroji.

Řekněte studentům přímo, že komentáře modelu mohou být halucinované, zaujaté nebo se mohou překrývat, a že revizi vlastní student. Rámujte výstup jako návrh názoru, který se má posoudit, ne jako odpověď, která se má opsat. Pak si vyžádejte to srovnání, protože méně než třetina studentů ho udělá bez pobídky.

## V čem se pedagogové v tomto bodě mýlí

Více komentářů znamená více zpětné vazby. Komentáře se levně vyrábějí a draze vstřebávají a omezení leží na straně studenta ve smyčce. Lépe hodnocené komentáře od AI ve studii Farrokhnia a kol. nevedly k větší revizi než komentáře od učitele.

Lepší model obecný výstup spraví. Selhání nástroje na Deakin byla selhání rozsahu: rysy na úrovni vět, úzké pásmo korektury. Zhan a kol. umisťují nápravu do promptu, rubriky nebo člověka, ne do většího modelu. Dvojice autorů IELTS je toho ukázkou: stejný nástroj, jiné návyky, jiné výsledky.

Zpřístupnit nástroj je intervence. Když byl nástroj volitelný, používalo ho zhruba 13 % bakalářských a 12 % magisterských studentů. Zbytek otázky designu se týká toho, co se děje se zbývajícími 87 %.

Úspora času je automatická. Na otázku, co jim nástroj zpětné vazby od AI dal, uvedlo 21 učitelů úsporu času jen zřídka (n = 2). Mnohem častěji uváděli reflexi (n = 14), lepší jazyk a strukturu (n = 11) a identifikaci chybějících složek (n = 10). Jejich revizní práci dominovalo editování (f = 32) a odstraňování (f = 27), přidávání bylo vzácné (f = 8). Co se objeví, je koncept a diagnostická pobídka. Co se objeví také, je práce na kontrole, kalibraci a ověřování. [[ai-save-instructor-time|Otázka pracovní zátěže]] je ta, která se nejčastěji slibuje pryč, a GenAI práci učitele spíše přerozděluje než odstraňuje.

Hodnocení spokojenosti vám říká, že komentáře jsou přesné. V pilotu na Deakin se kladná průměrná hodnocení snášela s chybami označenými studenty. Vzorkujte výstup proti vlastnímu čtení stejných konceptů a zaznamenávejte, kde byl model obecný, chybný nebo lichotivý.

## Co vám na to přijdou říct

**„Zpětná vazba od AI není osobní.“** Často pravda, a právě proto má poslední slovo zůstat na člověku. AICoFE existuje proto, že obecný text modelu není to, co má student dostat: pedagog výslednou zprávu vybírá, upravuje a podepisuje. 21 učitelů u Aldina a kol. přepisovalo tón ze stejného důvodu. Personalizace je v tomto návrhu vaše práce a model dělá přípravnou práci.

**„Moji studenti zpětnou vazbu stejně nečtou.“** Čtou méně, než doufáme, a důkazy říkají, že náprava je v designu, ne v objemu. Přijetí v pilotu na Deakin se pohybovalo kolem 13 % a 12 %. Lépe hodnocené komentáře ve studii Farrokhnia a kol. nepřinesly žádnou revizi navíc. Jehlou pohnulo pořadí, které vynucuje zapojení, sebehodnocení, potom vzájemná zpětná vazba a potom kritika od AI, a k tomu tři revizní cykly za semestr, které přinesly měřitelné rozdíly v gramotnosti v oblasti zpětné vazby.

**„To není to, za co studenti platí.“** Pak nedopusťte, aby se AI stala jediným hlasem, který od vás slyší. Obhajitelná verze dává studentům více okamžiků zpětné vazby, zatímco vy trávíte hodiny na částech náročných na úsudek: poslední slovo, kalibrace, komentáře, které nesou vaši autoritu. Co studenti při nepozorném nasazení ztrácejí, je soudržnost mezi kritérii, komentáři a výsledkem. Vymezte komplementaritu pořadím, srovnáváním, editací a správou a námitka ztratí sílu. Nechte dva zdroje ležet vedle sebe a neztratí ji.

**„Nemám čas kontrolovat všechno, co model napíše.“** Pak nekontrolujte všechno. Automatizujte pásmo, kde jsou chyby levné na zachycení, totiž jazykovou práci na úrovni vět, a vzorkujte výstup na úrovni úsudku proti konceptům, které jste už oznámkovali. Čísla od Aldina vám řeknou, co hledat: tón, dezinformace, přehnaná chvála, překryv.

## Co udělat tento týden

**1.** Rozdělte svou poslední sadu komentářů na opravy na jazykové úrovni a soudy o myšlení a obě hromádky spočítejte.

**2.** Napište prompt s odkazem na rubriku a krok za krokem, který byste dali modelu, a otestujte ho na třech konceptech, které jste už oznámkovali.

**3.** Vzorkujte výstup proti vlastním komentářům a zaznamenejte, kde byl model obecný, chybný nebo lichotivý.

**4.** Naplánujte jeden úkol jako sebehodnocení, potom vzájemnou zpětnou vazbu a potom kritiku od AI, a řekněte studentům, že AI je návrh názoru, který mají zpochybnit.

**5.** Vyžádejte si jedno srovnání s druhým zdrojem nebo s kritérii, protože méně než třetina studentů to udělá bez pobídky.

**6.** Zaznamenejte, kolik z výsledné zpětné vazby pocházelo z modelu a kolik jste změnili. Sledování kurátorství v AICoFE je pro takový záznam vzorem.

**7.** Sledujte rozdíl mezi zkušenými a začínajícími. Pedagogové s více než pěti lety praxe hlásili více problémů s výstupem nástroje než méně zkušení kolegové, kteří scaffolding oceňovali. Pokud vaši zkušení kolegové vidí více selhání než vy, je to informace o vaší vlastní kalibraci.

## Kam dál

[[feedback|zpětná vazba]] je zastřešující pojem pro celý systém: poskytování, smyčku, přijetí a kontext hodnocení. [[ai-feedback-quality|Kvalita zpětné vazby od AI]] pokrývá, co dělá generované komentáře přesnými, užitečnými, včasnými a pedagogicky správnými, a tato stránka je praktickým středem: které kombinace těchto částí vedou k lepší zpětné vazbě ve velkém měřítku.

Otázky, co má známka znamenat, když je zapojena AI, včetně záměny konstruktu, autentizovaných dokladů o procesu a pravidel integrity, patří spíš na [[redesign-assessment-ai-era|přepracování hodnocení v éře AI]] a [[assessment-validity|validitu hodnocení]] než sem. Zvláštní případ výuky psaní najdete v [[writing-instruction-ai-best-practices|osvědčených postupech pro výuku psaní v kontextu AI]].
