---
title: "Jak poznáme, že vzdělávací AI funguje správně, a ne že jen dobře skóruje?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T11:57:26-04:00"
translation_of: faqs/checking-whether-educational-ai-works
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Hodnoticí zpráva od dodavatele přistane na stole a nahoře v ní stojí jediné číslo: shoda s lidskými hodnotiteli 0,84. Nebo váš pilot končí v pátek a důkazy sestávají z dotazníku spokojenosti a z řádku s benchmarkem opsaného z poznámek k vydání modelu. Na poradě se někdo zeptá, jestli systém funguje, a vy máte k ruce údaj, který zní jako odpověď.

Krátká odpověď: čísla, která vidíte nejčastěji, měří podobnost, a podobnost je slabší tvrzení než „toto učí“ nebo dokonce „tato zpětná vazba je čitelná“. Rozhodněte, co které číslo smí prokázat, ohodnoťte každý výstup, který váš systém produkuje, a převeďte přesnost na pravidlo, které má prahovou hodnotu, člověka a ušetřenou práci. Číslo, podle kterého se nedá nic udělat, není důkaz.

## Stručně

**1.** Napište jednu větu, která pojmenuje to, na čem vám záleží, a pak vyberte měřítko, které tuto věc čte. Překryv slov vám neřekne, jestli je uvažování správné.

**2.** Hodnoťte každý výstup zvlášť. Silné skóre známkování neříká nic o modulu zpětné vazby, který stojí vedle něj.

**3.** Nechte člověka ohodnotit zhruba padesát výstupů a tato hodnocení porovnejte se svým automatickým kontrolorem. Kde se obojí rozchází, tam je kontrolor tou věcí, která se testuje.

**4.** Nahraďte „přesnost 0,84“ pravidlem: pod touto mírou jistoty čte odpověď člověk. Uveďte prahovou hodnotu, podíl ušetřené práce a to, jaká shoda z toho vznikla.

**5.** Testujte bezpečnost napříč celými konverzacemi a každého simulovaného studenta prověřte, než uvěříte tomu, co říká o vašem tutorovi.

## Rozhodněte, co číslo smí prokázat

Této literatuře dominují dvě rodiny čísel. Obě měří, jak blízko má váš výstup k něčemu jinému, což je slabší tvrzení než správnost.

**Skóre podobnosti** (ROUGE a BLEU) porovnávají formulaci odpovědi vašeho systému s formulací referenční odpovědi. Model, který napíše něco blízkého očekávanému textu, dostane dobré skóre, i když je jeho uvažování chybné nebo i když se student může dostat ke správné odpovědi cestou, která nic nenaučí.

**Skóre shody** (QWK, kvadraticky vážená kappa) měří, jak těsně se známky modelu kryjí s lidskými. Model se může shodnout s hodnotitelem na výsledné známce a zároveň se mýlit v tom proč, a právě to „proč“ je část, ze které se student učí.

Student se může dostat k chybné odpovědi chybnou cestou, která vypadá jako správná, a žádné skóre podobnosti si toho nevšimne. Pokud je uvažování to, na čem vám záleží, musí ho měřítko číst: rubrikou, kterou aplikuje člověk, nebo kontrolou napsanou pro ten konkrétní krok.

Asistent kurzu lineárních řídicích systémů to podává správným způsobem. Jeho nejlepší konfigurace dosáhla skóre podobnosti **0,4093** proti referenčním odpovědím, přičemž zlepšení bylo spolehlivě měřitelné nad nulou, a autoři výslovně uvádějí, že čísla měří formulaci a formát ([[lora-finetuned-control-systems-course-qa-2026]]). Skóre není oslnivé a článek je přesto užitečný, protože říká, co skóre pokrývá.

## Skórujte každý výstup zvlášť

V projektu WrAFT dosáhl doladěný model skóre shody **0,84** s lidskými hodnotiteli na 360 odložených esejích TOEFL. To je silný výsledek pro známkování. Model téhož projektu trénovaný na psaní zpětné vazby však produkoval výstup, který byl zkrácený a neparsovatelný, zatímco pouhé zadání promptu jinému modelu vyprodukovalo zpětnou vazbu, kterou učitelé preferovali ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Znalostní báze nese stejné selhání v druhé podobě: nasazení, jehož modul známkování skóroval dobře a jehož zpětná vazba dorazila uříznutá uprostřed věty a nečitelná. Nic v hlavním čísle to neříkalo.

Seberte tedy výstupy, které váš systém produkuje, a každému dejte vlastní měřítko a vlastní podmínku splnění. Známkování, text zpětné vazby, výběr nápovědy a bezpečnostní odmítnutí selhávají různými způsoby a skóre na úrovni modulu nevidí za hranice svého modulu.

## Postavte člověka tam, kde si model není jistý

Korelace vám říká, že model má obvykle pravdu. Neříká vám, co dělat v případech, kdy ji nemá. Výsledek směrování podle jistoty je nejčistší šablonou ve znalostní bázi a je dost krátký na to, aby se dal opsat.

Jistota se ukázala jako spolehlivý varovný signál: když si model nebyl jistý, pravděpodobněji se mýlil (**β = -0,602, p < 0,001**). Tým poslal nejméně jistých **20 %** odpovědí člověku. Toto jediné pravidlo zvedlo shodu s lidskými známkami z **0,78 na 0,82** a snížilo ruční práci se známkováním zhruba o **80 %** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Podívejte se, co zpráva obsahuje: prahovou hodnotu, člověka a úsporu. „Shoda 0,84“ neobsahuje nic z toho, a proto se podle ní dá těžko jednat a snadno se o ní dá hádat.

## Prověřte svůj automatický kontrolor proti člověku

Mnoho týmů dnes používá druhý model, aby posuzoval první. Uspořádání je rozumné a druhý model nemá automaticky pravdu.

Studie, v níž model na špičkové úrovni psal nápovědy pro [[intelligent-tutoring|inteligentní tutoringový systém]], zjistila, že zhruba **35 %** z nich bylo příliš obecných, nesprávných nebo prozradilo odpověď, a že vlastní automatické kontroly kvality tohoto modelu se neshodly s lidským úsudkem o tom, které z nich jsou špatné ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Praktická verze: vezměte vzorek zhruba padesáti výstupů, nechte je ohodnotit člověka a porovnejte to s hodnocením svého kontroloru. Kde se obojí rozchází, dozvěděli jste se něco o kontroloru. Vzorek i tabulku neshod si ponechte, protože je to také artefakt, který odpovídá recenzentovi, jenž se ptá, jak to víte.

## Měřte samotnou veličinu, když to úloha dovolí

Nejčistší oprava je trénovat model na téže veličině, kterou hodláte měřit. Doladěný model byl trénován tak, aby reprodukoval statistické vlastnosti testových otázek: jak je každá položka obtížná a jak dobře odděluje silnější studenty od slabších. Tyto vzorce se naučil, místo aby mu byly sděleny ([[multimodal-item-parameter-estimation-2026]]). Protože cílem byla vlastnost samotného hodnocení, evaluace se mohla týkat této vlastnosti, a ne formulace.

Uvádějte postup i koncový bod. Simulátor psaní SWIM publikoval skóre každé fáze vedle sebe: promptování podle rubriky **0,577**, doladění **0,474 ± 0,023**, posilované učení **0,618 ± 0,005** ([[swim-student-writing-simulation-2026]]). Čtenář z takové tabulky pozná, jestli trénink něco přinesl. Jediné konečné číslo mu to neřekne a navíc skryje fázi, v níž si doladěný model vedl hůř než prompt.

## Porovnávejte s něčím mimo svůj projekt

Nejdřív si pořiďte výchozí hodnotu, i kdyby byla levná. Model asistenta kurzu bez ukotvení skóroval hůř než prosté vyhledávání podle klíčových slov, což je typ výsledku, který změní plán a jehož zjištění stojí jeden den.

Vnější benchmark vám pak řekne, jestli vaše číslo vůbec něco znamená. Na pedagogickém benchmarku CDPK dosáhl EduQwen **96,52 %** proti **90,55 %** modelu Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Benchmark pedagogiky, postavený na skutečných zkouškách z profesního rozvoje učitelů a pokrývající **97 modelů**, našel přesnost v rozmezí od **28 % do 89 %** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

V úloze o vyučování se modely pohybovaly od slabých po dobré, takže výsledek z benchmarku umísťuje váš systém někam do širokého rozpětí.

## Testujte bezpečnost na celé konverzaci

Většina bezpečnostního testování prověřuje jedinou výměnu. Škody, na kterých při tutorování záleží, se hromadí. SafeTutors zjistil, že i modely postavené speciálně pro vyučování degradují v průběhu dlouhé konverzace a mohou prozradit odpovědi, které by měly zadržovat ([[hazra-safetutors-pedagogical-safety-2026]]).

Proveďte kontrolu napříč celými konverzacemi a testovací tahy pište záměrně: student, který se mýlí, ten, který stále tlačí, ten, který se snaží modelu vymluvit jeho roli. Tutor, který vydrží deset tahů a v jedenáctém povolí, neprojde testem, na kterém záleží, a sada testů po jednotlivých odpovědích ho ohodnotí jako čistého.

## Prověřte simulovaného studenta, než mu uvěříte

Generování simulovaných studentů místo najímání skutečných činí evaluaci mnohem levnější. Simulovaný student je také měřicí nástroj a může se mýlit tak, jak se nástroje mýlí: je příliš ochotný, příliš plynný, příliš rychle přijímá nápovědu.

Nejpřímější test ve znalostní bázi porovnával simulované a promptované studenty proti **382 odloženým dialogům** z největší veřejné sbírky skutečných matematických dialogů studenta s tutorem, pomocí sedmi měřítek pokrývajících jazyk, chování a myšlení ([[simulated-students-tutoring-dialogues-2026]]). Jiná práce tlačí na realističnost z různých stran: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] trénuje modely, aby se chovaly i myslely jako studenti, a profily zohledňující historii podmiňují simulaci minulostí studenta, a ne pevnou personou ([[history-aware-student-simulation]]).

Pokud je vaším nástrojem simulovaný student, ověřte simulátor proti skutečným přepisům, než ho pustíte k hodnocení vašeho tutora.

## V čem se hodnoticí týmy mýlí

Vysoké skóre shody znamená, že systém je správný. Znamená, že systém známkuje jako hodnotitel, se kterým jste ho porovnávali, na esejích, na kterých jste ho porovnávali. WrAFT měl 0,84 a přitom zpětnou vazbu, která se nedala parsovat.

Jedno číslo může zastupovat celý produkt. Týmy vydají dashboard s „přesností 0,84“ v rohu a bez pole pro modul zpětné vazby, zásady nápověd nebo chování při odmítnutí. Skóre na úrovni modulu je nejjednodušší číslo k výpočtu a nejméně informativní věc k reportování.

Vnější benchmark rozhoduje, jestli nástroj funguje. Rozpětí benchmarku pedagogiky od 28 % do 89 % říká, že tato rodina úloh je obtížná a že se jí dostává nerovnoměrně. Vaše pozice v tomto rozpětí je fakt o vašem modelu. Co pak dokážou vaši studenti, je jiný fakt.

Model posuzující model je levná náhrada lidského hodnocení. Je levný. Číslo 35 % a neshoda o tom, které nápovědy byly špatné, popisují, co posuzovatel, který nikdy nebyl prověřen, propustí.

Simulovaní studenti činí evaluaci zdarma. Činí ji levnou a přesouvají náklad do validace. Srovnání na 382 dialozích existuje proto, že nástroj potřeboval kalibraci.

## Co vám na to řeknou

**„Na tohle nemáme anotátory.“** Padesát ohodnocených výstupů stačí na začátek. Ohodnoťte je sami, pokud nikdo jiný nemá čas, a tabulku si ponechte.

**„Naše skóre z benchmarku převyšuje Gemini.“** Převyšuje, na CDPK, na promptech, které tento benchmark používá. Postavte vedle něj měřítko bez podpory.

**„Náš automatický posuzovatel se shoduje s našimi lidskými hodnotiteli.“** Pak máte jednu korelaci na jednom vzorku. Zeptejte se, na kterých výstupech se neshodly, a ty si přečtěte, protože právě tam žije selhání.

**„Nemůžeme spustit plnou evaluaci před nasazením.“** Spusťte ty tři levné: jeden výstup ohodnocený zvlášť, padesát výstupů ohodnocených člověkem, jeden bezpečnostní průchod na délku konverzace. Drahé položky mohou následovat po pilotu.

**„Systém je jen demo, takže evaluace je předčasná.“** Demo je nejlevnější místo, kde zjistit, že vaše číslo měří formulaci. Jakmile je k němu připojen plán, stejné zjištění stojí víc práce.

## Co udělat tento týden

**1.** Napište větu s tvrzením, které má vaše evaluace podpořit. Dejte ji na začátek dokumentu s evaluací.

**2.** Vypište každý výstup, který systém produkuje, a každému dejte řádek, měřítko a podmínku splnění.

**3.** Vytáhněte padesát výstupů, ohodnoťte je sami a svá hodnocení položte vedle hodnocení kontroloru.

**4.** Spočítejte rozdělení jistoty a napište pravidlo směrování s číslem v něm, plus jméno člověka, který čte to, co pod ním spadne.

**5.** Projděte jednu bezpečnostní konverzaci, v níž se student mýlí, dvakrát zatlačí a požádá o odpověď.

## Kam dál

[[making-ai-better-at-supporting-learning|Jak můžeme zlepšit AI v podpoře učení v našem vlastním oboru?]] pokrývá návrhovou stránku stejného problému. [[training-ai-tutors-to-guide-rather-than-answer]] se zabývá cestou tréninku k tutorskému chování a [[evaluating-ai-interventions-methods]] je verze této otázky určená vyučujícím, zatímco [[reporting-interpreting-aied-research]] je verze určená výzkumu. Metody spadají pod [[ai-ed-evaluation]] a [[llm-training-and-fine-tuning]].
