---
title: "Jak naučím studenty ověřovat výstupy AI?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T11:57:27-04:00"
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Je týden před uzávěrkou známek a dvě odevzdání citují zdroje, které neexistují. Oba studenti tvrdí, že si je ověřili. Jeden otevřel odkaz. Druhý si přečetl odstavec a rozhodl, že to zní správně. Této třídě jste už říkali, ať si ověřuje, co jí chatbot dává, a to sdělení to chování nevyvolalo.

Ověřování je sled kroků, který můžete zabudovat do úkolu. Rozhodněte, co se počítá jako správné, dřív než úkol začne, nechte studenta zavázat se k očekávání písemně, pošlete ho k záznamu místo k jeho dojmu z prózy a hodnoťte záznam, který vytvoří. Řádek rubriky, který říká „ověřené zdroje“, z toho neměří nic.

## Stručná verze

**1.** Napište nejdřív klíč správných odpovědí. Kontrola potřebuje něco, proti čemu se vyhodnocuje, a většina úkolů na ověřování nikdy nedefinuje, co znamená správně.

**2.** Vyžadujte predikci dřív, než se výstup objeví, aby studentovo uvažování existovalo na papíře předtím, než ho nástroj může přepsat.

**3.** Pojmenujte cíl každé kontroly: seznam autorů, místo publikování, rok, konkrétní číslo, konkrétní krok. „Ujistěte se, že je to správně“ není kontrola.

**4.** Oddělte kontrolu, kterou umí provést stroj, od úsudku, který umí udělat jen čtenář, a naučte studenty rozeznat, kterou z nich právě dělají.

**5.** Hodnoťte záznam proti klíči, ne vynaložené úsilí, aby divadlo ověřování nevydělalo nic.

**6.** Naplánujte kontrolu dovnitř úkolu. Časový tlak je doložený důvod, proč ji studenti vynechávají.

## Rozhodněte, co je správné, než kdokoli začne cokoli ověřovat

[[verification-quality-reliance-calibration-genai-2026|Wei a Shang (2026)]] při přehledu 493 deduplikovaných záznamů a mapování 14 prioritních empirických studií oddělují sedm věcí, které „kritické používání AI“ slévá v jednu: epistemické hodnocení, zahájení ověřování, kvalitu procesu, úspěšnost ověření, rozhodnutí o spoléhání, okamžitý výkon v úkolu a samostatné učení. Vaše rubrika říká „ověřené zdroje“, což sedí na druhém kroku a neříká vám nic o tom, zda byla kontrola kompetentní nebo zda změnila studentovu odpověď. Zahájení není úspěch. Silný proces může skončit bez závěru, slabý může trefit správnou odpověď a student, který spustil hledání a zůstal zmatený, skóruje stejně jako ten, kdo otázku vyřešil.

Stejný přehled vede druhou linii, mezi [[trust|důvěrou]] a spoléháním. [[trust-calibration|Kalibrace spoléhání]] se ptá, zda bylo rozhodnutí o spoléhání přiměřené vzhledem ke skutečné kvalitě výstupu, což váže úsudek k jednomu rozhodnutí a jednomu výstupu. Jedna auditovaná studie zjistila, že nepravdivé informace z ChatGPT posunuly vykazovanou důvěru účastníků, a nikdy nezaznamenala, zda později přijali nebo odmítli konkrétní doporučení. Jiná zaznamenala rozhodnutí o přijetí a odmítnutí u [[feedback|zpětné vazby]] ChatGPT u 78 studentů překladu, ale bez nezávislého odborného hodnocení nelze přijetí nazvat přiměřeným a odmítnutí nelze nazvat odůvodněným. Bez základní pravdy o kvalitě výstupu nelze spoléhání vůbec klasifikovat.

To je designový důsledek a je to první věc, kterou je třeba opravit. Než zadáte úkol na ověřování, napište dva krátké popisy: jak vypadá správný výstup pro tento úkol a jak vypadá pravděpodobný, ale špatný výstup. Jeden od každého stačí. Studenti pak mají standard, proti kterému kontrolují, a vy máte něco, proti čemu kontrolu oznámkujete, místo toho, zda student zní pečlivě.

## Nechte je zavázat se dřív, než nástroj odpoví

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] staví měřicí program kolem zásady *predikuj, než spustíš*: žák uvede, co by se mělo stát, a potom se chování artefaktu posuzuje proti této predikci na oborových základech, ne podle toho, zda se spustí. Uvažování existuje dřív než výstup, a to je to, co ho činí hodnotitelným.

Jeho audit 24 studií našel stejný nástroj produkující opačné výsledky při různých strukturách úkolu. Běžné nastavení s ChatGPT skončilo výrazně níž ve výsledcích, [[self-efficacy|sebeúčinnost]] a flow, zatímco podmínka, která přidala požadavky na ověřování a moduly reflexe chyb, ukázala silnější [[critical-thinking|myšlení vyššího řádu]]. Nástroj byl ve všech podmínkách stejný. Měnilo se to, zda úkol žádal studenta zastávat pozici, kterou mu nástroj může vyvrátit.

V praxi je to jeden řádek v zadání: než nástroj otevřete, napište, co očekáváte, že řekne, a proč. Potom to porovnejte. Dva studenti mohou vytvořit stejný odstavec a jen jeden z nich umí vysvětlit, kde se odstavec odchyluje od toho, co předpověděl.

## Pošlete je k záznamu

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] dohledali 113 588 odkazů z 5 225 prací o vzdělávání v informatice publikovaných od roku 2021 a ručně ověřili 828 podezřelých záznamů. Našli 30 záznamů obsahujících prokazatelně zfalšované bibliografické údaje ve 14 pracích, všechny z let 2025 a 2026. Třináct bylo zcela vymyšlených. Zbylých 17 spojovalo skutečný název s vymyšleným nebo nesprávným autorstvím, místem publikování nebo rokem. Na technickém sympoziu SIGCSE se počet zvýšil ze 3 ve sborníku z roku 2025 na 17 v roce 2026, tedy na 2,3 % prací v tomto ročníku.

Pole autorů selhává častěji než kterákoli jiná část generovaného odkazu. To jediné zjištění vám říká, na co se ptát. „Otevřete zdroj a přečtěte seznam autorů“ míří na pole, které se nejpravděpodobněji mýlí, a produkuje fakt, který student buď má, nebo nemá. „Ujistěte se, že zdroje jsou skutečné“ produkuje ujištění. Žádejte po studentech, aby potvrdili autory, místo publikování a rok proti samotnému záznamu. Práce žádá, aby každé citované dílo bylo ověřeno a aby každý automatický kontrolor zůstal [[human-in-the-loop-ai|s člověkem ve smyčce]], což je přesně ten návyk, který požadavek na citace nacvičuje.

## Oddělte kontrolu, kterou umí spustit stroj, od úsudku, který umí udělat jen čtenář

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] staví obhajitelnou laťku pro to, co se smí kontrolovat mechanicky: doložená kritéria, srovnání s ustáleným poznáním bez interpretačního úsudku a jediná správná odpověď nebo předem určené přijatelné alternativy. Data, vzorce, citace a výpočty tu laťku splňují. Cokoli interpretačního ji nesplňuje a tam je nástrojem kontroly studentovo vlastní čtení.

Gousopoulos formalizuje stejné rozdělení jako problém detekce signálu se dvěma nezávislými parametry. Senzitivita je schopnost rozlišit správný výstup od vadného; kritérium je to, kde si žák nastaví práh pro odmítnutí. Nadměrná závislost se dělí podle této linie. Varování, kontrolní seznamy a upozornění na halucinace posouvají kritérium, tedy mění, kdy student odmítne. Oborová výuka, vypracovaná srovnání a procvičování se zasetými chybami zvyšují senzitivitu, protože žák pak umí rozlišit. Student, který přijme vadný výstup, může mít problém s kritériem nebo problém se senzitivitou, a oba případy potřebují jinou výuku.

Předpoklad je nepříjemný. Výuka ověřování je výchovná jen tam, kde senzitivita může být větší než nula, což vyžaduje dost oborových znalostí k rozlišení správného výstupu od nesprávného. Ve stejném auditu uspěli nováčci požádaní o vysvětlení kódu vygenerovaného [[llm|LLM]] přibližně u třetiny úloh, takže posuzovat zpětnou vazbu nebo kód od AI proti vlastnímu uvažování je skutečná kontrola jen tam, kde to uvažování má obsah. Pokud vaši studenti ještě neumějí oborové myšlení samostatně, další varování nekoupí nic. Učte obsah a kontrolu k němu připevněte.

Ještě jedno varování patří do návrhu: intervence, které snižují nevhodné přijímání, musí být také prověřeny na nechtěné odmítání správné pomoci. Nechte studentovi prostor přijmout dobrý výstup z uvedeného důvodu.

## Oznámkujte kontrolu, aniž z ní uděláte dohled

Gousopoulos vyvozuje důsledek přímo. Pokud AI umí vytvořit artefakt, artefakt nemůže být hodnocením, takže se hodnocení přesouvá ke specifikaci, k uvažování o validaci a k interpretaci. Jeho konstrukt autorství modelu má čtyři stránky, specifikaci, pojmový model, verifikaci a interpretaci, ve čtyřech seřazených úrovních od delegovaného po autorské. Autorská úroveň vyžaduje ověřitelnou specifikaci před prvním promptem, odmítnutí výstupu na oborových základech s uvedeným důvodem a interpretaci, která přesahuje vlastní zprávu artefaktu o sobě.

Rubrika čerpá z materiálů, které konstrukční úkol už generuje, takže stejný nástroj je jak [[formative-assessment|formativním hodnocením]], tak výzkumnou mírou. To odpovídá na obavu z práce navíc: známkujete vedlejší produkt úkolu, který jste už zadali. Vedle toho patří dvě omezení. Žádná studie mezi 14 prioritními případy Wei a Shanga neměřila úspěšnost ověření a následné rozhodnutí o spoléhání společně a jen málo jich sledovalo okamžitý výkon s odloženou retencí nebo [[transfer-of-learning|přenosem]], takže rubrika stojí na analytické mapě, ne na validovaném kauzálním sledu.

Tři rozhodnutí brání tomu, aby se z toho stal dohled. Hodnoťte kontrolu proti posouzené kvalitě, ne proti úsilí, jinak vytváříte pobídku k předstírání kontroly. Uvádějte provenienci, jak žádá Venetsanos: studenti potřebují vědět, které části zpětné vazby, kterou dostávají, byly strojově ověřené, které byly posouzeny hodnotícím úsudkem a že lidský úsudek má přednost, protože nemohou vážit zpětnou vazbu, kterou neumějí zařadit. A držte vymáhání mimo detekční nástroje. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] argumentují, že [[ai-detection|detekce AI]] by se ve vzdělávání neměla používat vůbec: její odhady jsou pravděpodobnostní a nelze je nezávisle ověřit, protože skutečný původ textu v reálném světě není znám, její skóre nesplňuje standard převahy pravděpodobností, který vyšetřování integrity vyžaduje, a dichotomie člověk versus AI nemá pro práci vytvořenou s AI, a ne AI, žádný smysl. Jejich závěr je, že detekce „nechrání akademickou integritu, ale podkopává ji“. Režimy dohledu plodí podezírání a narušují [[trust|důvěru]] studentů. Držte oba smysly detekce oddělené. Detekce textu vygenerovaného AI tu nemá obhajitelnou důkazní roli; učit studenty detekovat chyby ve výstupu AI je celé to cvičení.

To oddělení je architektonické a stojí za to o něm studentům říct. [[vetting-dual-llm-safety-education|Li, Zhang a Botelho (2026)]] kontrolují výstup druhým modelem, místo aby kontrolu vkládali do generátoru. Student, který vidí proč, vidí i proč „nástroj řekl, že je to správně“ není argument ověření.

## Pokud kurz navrhujete, a ne že ho učíte

Tři zjištění výše patří do stavby kurzu, kam se učitel pracující sám nedostane.

První je diagnostika. Spusťte úlohu se zasetými chybami: dvacet položek, osm s oborovou chybou. Řekne vám, zda studenti vůbec umějí rozlišovat, dřív než strávíte semestr výukou kritéria, které nedokážou použít. Třída, která zaseté chyby mine, potřebuje revizi obsahu, ať sylabus o kritickém používání říká cokoli.

Druhé je umístění varování. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings a Park (2026)]] ukázali obecnou varovnou zprávu bezprostředně před dvěma úkoly u 100 studentů v USA, 40 domácích a 60 mezinárodních studentů angličtiny jako cizího jazyka. Očkovaní studenti ověřovali úlohu se shrnutím akademického zdroje výrazně pravděpodobněji (M = 0,34 proti 0,18), zatímco sebeposuzované záměry ověřovat se nezměnily. Účinek byl také závislý na úkolu: objevil se u úlohy se shrnutím zdroje, ale ne jednotně u matematického kvízu na umocňování a násobení velkých čísel. Umístěte varování do místa použití, pro každý typ úkolu, ne jednou do sylabu nebo do úvodního modulu.

Třetí je plánování. Sylabus, který nechává ověřování nenaplánované, říká, že je nepovinné, a časový tlak je doložený důvod, proč studenti kontroly vynechávají. Ověřování, které žije uvnitř úkolu s označeným artefaktem, se děje. Ověřování, které žije v odstavci zásad, ne.

## Pokud jste student a čtete to

Čtyři tahy pokrývají většinu toho, co po vás výzkum žádá.

Napište své očekávání dřív, než zadáte prompt. Jednu větu o tom, jaká by odpověď měla být, a potom výstup proti ní porovnejte.

Otevřete zdroj. Přečtěte seznam autorů, místo publikování a rok proti záznamu, protože pole autorů je místo, kde generované odkazy selhávají nejčastěji.

U čehokoli interpretačního napište důvod vlastními slovy. Vymyšlený důvod je stejně viditelný jako vymyšlená citace.

Nedůvěřujte pocitu, že se próza čte dobře. Nováčci požádaní o vysvětlení kódu vygenerovaného LLM uspěli přibližně u třetiny úloh a terénní studie rozhovorů studentů s ChatGPT nad kvízy zjistila, že následování správného vedení přesto vyústilo ve špatnou odpověď. To, co umíte zkontrolovat, je užší než to, co umíte přečíst.

## V čem se učitelé v této věci mýlí

**„Už jsem jim řekl, aby si ověřovali zdroje.“** Varování žádá dispozici. Pečliví studenti ji mají, ti spěchající ne, a ve větě není nic, podle čeho by student mohl jednat v 11 hodin večer s výstupem na obrazovce, který se čte dokonale dobře.

**„Řádek rubriky o ověřování zdrojů to pokrývá.“** Ten řádek sedí u zahájení a neříká nic o kvalitě procesu ani o úspěchu. Student, který spustil jedno hledání a vzdal to, skóruje stejně jako student, který otázku vyřešil, takže rubrika odměňuje gesto.

**„Když budou číst pozorně, chyby najdou.“** Plynulost nese úsudek. Auditovaná literatura ukazuje nováčky přibližně na třetině úspěšnosti při vysvětlování generovaného kódu a terénní studie zaznamenala špatnou odpověď, která přišla přes správné vedení.

**„Studenti, kteří říkají, že budou ověřovat, to dělají.“** Ve studii Vu, Cummingse a Parka se sebeposuzované záměry nezměnily, zatímco vykonané chování ano (M = 0,34 proti 0,18). Známkujte chování, to se pohnulo.

**„Studenti, kteří kontrolu vynechají, jsou ti, kterým je to jedno.“** [[trust-calibration-chatbots-design-problem-2026|Jaidka a Cai (2026)]] kříží schopnost ověřovat s motivací ověřovat a ty profily potřebují různá řešení. Student s vysokou schopností a nízkou motivací má sklon k samolibému nadměrné závislosti. Student s nízkou schopností a nízkou motivací je nejvíc vystavený. Dva studenti, kteří neuspějí ve stejné kontrole, mohou potřebovat opačnou výuku a [[prior-knowledge|předchozí znalosti]] rozhodují o tom, na kterého se díváte.

**„Víc varování napraví studenty, kteří to neumějí rozlišit.“** Varování posouvají kritérium. Nezvyšují senzitivitu a senzitivita je to, co odděluje studenta, který vadu najde, od toho, který ne.

**„Detektor podporuje zásadu.“** Podle důkazů výše skóre detektoru nesplňuje standard, který případ integrity vyžaduje, rozdělení člověk versus AI neplatí pro práci vytvořenou s AI a režim vás stojí [[trust|důvěru]], kterou potřebujete, aby studenti cokoli přiznali.

## Co vám na to řeknou

**„Prostě to udělají kvůli známce.“** Částečně pravda, takže známkujte materiály, které AI za studenta vyrobit neumí. Specifikace napsaná před prvním promptem, predikce zaznamenaná před spuštěním artefaktu, seznam zdrojů ověřený proti záznamu, uvedený oborový důvod odmítnutí: každé z toho vyžaduje, aby student zastával pozici, kterou generátor dodat neumí. Vymyšlený důvod je stejně viditelný jako vymyšlená citace. Kde student nemá oborové znalosti, proti kterým by kontroloval, je ověřování divadlem a žádná rubrika ho nezachrání, což je argument pro to učit nejdřív obsah.

**„V sylabu na to není čas.“** Varování před úkolem je jedna zpráva. Úloha se zasetými chybami znovu použije kvíz, který už zadáváte. Rubrika veze materiály, které úkol už generuje, takže stojí čas na známkování u důkazů, které byste jinak neměli. Alternativa stojí víc: neověřená odevzdání, vymyšlené odkazy a rozhovory o integritě, které po nich následují.

**„Nástroj má obvykle pravdu.“** Pak je kontrola levná a výjimky jsou to podstatné. Pole autorů selhává častěji než kterákoli jiná část generovaného odkazu, 17 z 30 zfalšovaných položek spojovalo skutečný název s nesprávným autorstvím, místem publikování nebo rokem a 17 se objevilo ve sborníku jediného ročníku sympozia. Přesnost v částech, kterých si náhodou všimnete, neříká nic o částech, kterých si nevšimnete.

**„Moji studenti nevědí dost na to, aby výstup posoudili.“** To je práh senzitivity a je skutečný. Gousopoulos předpovídá, že výuka ověřování selhává pod určitou hranicí oborových znalostí, a poznamenává, že některé obory poskytují vnější kritérium, mezi nimi fyzika, chemie, ekologie a epidemiologie, zatímco historie, literatura a [[ethics|etika]] ho z velké části neposkytují. Učte obor a kontrolu k němu připevněte, nebo očekávejte, že se kontrola stane rituálem.

**„Tohle je dohled.“** Je, pokud známkujete úsilí nebo sledujete, jak studenti pracují. Známkujte artefakt proti klíči, uveďte, která zpětná vazba byla strojově zkontrolovaná a kterou posoudil člověk, a detektory nechte mimo.

## Co udělat tento týden

**1.** Napište dva popisy pro svůj příští úkol: správný výstup a pravděpodobně špatný. To je klíč, proti kterému se kontrola vyhodnocuje.

**2.** Přidejte řádek s predikcí. Jedna věta, napsaná před otevřením nástroje, potom porovnaná na oborových základech.

**3.** Nahraďte „zkontrolujte si zdroje“ větou „otevřete záznam a potvrďte autory, místo publikování a rok“.

**4.** Dejte osm zasetých chyb do kvízu, který už zadáváte, a podívejte se, kteří studenti je najdou.

**5.** Oznámkujte jeden artefakt ověření proti klíči a řekněte studentovi, která část kontroly selhala: standard, proces, nebo rozhodnutí.

## Kam dál

[[incorporating-ai-literacy]] pokrývá, jak vybudovat porozumění, které tato stránka uvádí do práce, a [[ai-literacy-evidence]] pokrývá, co ta práce na gramotnosti má za hodnotu. [[reducing-over-reliance]] řeší designovou stranu studentů, kteří se opírají o nástroj, [[study-with-ai]] je protějšek pro studenty a [[asynchronous-online-courses-ai]] pokrývá verzi tohoto problému bez výuky, do které by se dala kontrola naplánovat. O zpětné vazbě, kterou studenti kontrolují, viz [[ai-feedback-quality]] a [[hallucination-risk]].
