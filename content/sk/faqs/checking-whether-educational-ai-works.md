---
title: "Ako vieme, že vzdelávacia AI funguje správne, a nielen dobre skóruje?"
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
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/checking-whether-educational-ai-works
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Hodnotiaca správa od dodávateľa pristane s jedným číslom navrchu: zhoda s ľudskými hodnotiteľmi 0,84. Alebo sa váš pilot končí v piatok a dôkazy pozostávajú z prieskumu spokojnosti a riadku s výsledkom benchmarku skopírovaného z poznámok k vydaniu modelu. Na stretnutí sa niekto spýta, či systém funguje, a vy máte číslo, ktoré znie ako odpoveď.

Krátka odpoveď: skóre, ktoré vidíte najčastejšie, meria podobnosť, a podobnosť je slabšie tvrdenie než „toto učí“ alebo dokonca „táto spätná väzba je čitateľná“. Rozhodnite, čo smie každé číslo dokázať, skórujte každý výstup, ktorý váš systém produkuje, a premeňte presnosť na pravidlo s prahom, človekom a úsporou. Číslo, podľa ktorého nikto nedokáže konať, nie je dôkaz.

## Krátka verzia

**1.** Napíšte jednu vetu, ktorá pomenuje, na čom vám záleží, a potom vyberte mieru, ktorá tú vec číta. Prekryv slov vám nepovie, či je uvažovanie správne.

**2.** Hodnotte každý výstup samostatne. Silné skóre známkovania nehovorí nič o module spätnej väzby vedľa neho.

**3.** Dajte človeku ohodnotiť približne päťdesiat výstupov a porovnajte tieto hodnotenia so svojím automatickým kontrolórom. Kde sa tí dvaja rozchádzajú, testovanou vecou je kontrolór.

**4.** Nahraďte „presnosť 0,84“ pravidlom: pod touto istotou číta odpoveď človek. Vykážte prah, podiel práce, ktorý ušetrí, a čím sa zhoda stala.

**5.** Testujte bezpečnosť naprieč celými konverzáciami a každého simulovaného študenta overte skôr, než uveríte tomu, čo hovorí o vašom doučovacom systéme.

## Rozhodnite, čo smie číslo dokázať

Tejto literatúre dominujú dve rodiny čísel. Obe merajú, ako veľmi sa váš výstup podobá na niečo iné, čo je slabšie tvrdenie než správnosť.

**Skóre podobnosti** (ROUGE a BLEU) porovnávajú formulácie odpovede vášho systému s formuláciami referenčnej odpovede. Model, ktorý napíše niečo blízke očakávanému textu, dosiahne dobré skóre, aj keď jeho uvažovanie je nesprávne, alebo keď by sa študent k správnej odpovedi dostal cestou, ktorá nič neučí.

**Skóre zhody** (QWK, kvadraticky vážená kappa) merajú, ako tesne sa známky modelu zhodujú s známkami človeka. Model môže pri konečnej známke sedieť s hodnotiteľom a zároveň sa mýliť v tom prečo, a práve to prečo je časť, z ktorej sa študent učí.

Študent sa môže dostať k nesprávnej odpovedi nesprávnou cestou, ktorá vyzerá ako správna, a žiadne skóre podobnosti si to nevšimne. Ak je uvažovanie to, na čom vám záleží, miera ho musí čítať: rubrika aplikovaná človekom alebo kontrola napísaná pre ten konkrétny krok.

Asistent kurzu Lineárne riadiace systémy to vykazuje správne. Jeho najlepšia konfigurácia dosiahla skóre podobnosti **0,4093** voči referenčným odpovediam, pričom zlepšenie bolo spoľahlivo merateľné nad nulou, a autori priamo uvádzajú, že tie čísla merajú formulácie a formát ([[lora-finetuned-control-systems-course-qa-2026]]). Skóre je nepresvedčivé a článok je napriek tomu užitočný, pretože hovorí, čo skóre pokrýva.

## Skórujte každý výstup samostatne

V projekte WrAFT dosiahol doladený model skóre zhody **0,84** s ľudskými hodnotiteľmi na 360 vyčlenených esejach TOEFL. To je silný výsledok pre známkovanie. Model toho istého projektu trénovaný na písanie spätnej väzby produkoval výstup, ktorý bol skrátený a neparsovateľný, kým jednoduché promptovanie iného modelu prinieslo spätnú väzbu, ktorú učitelia preferovali ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Vedomostná báza nesie to isté zlyhanie v druhej podobe: nasadenie, ktorého modul známkovania skóroval dobre a ktorého spätná väzba prichádzala odseknutá uprostred vety a nečitateľná. Nič v čísle do titulku to nehovorilo.

Takže vypíšte výstupy, ktoré váš systém produkuje, a potom každému dajte vlastnú mieru a vlastnú podmienku splnenia. Známkovanie, text spätnej väzby, výber nápovedy a bezpečnostné odmietnutia zlyhávajú rôznymi spôsobmi a skóre na úrovni modulu nevidí za hranice svojho modulu.

## Dajte človeka tam, kde si model nie je istý

Korelácia vám povie, že model má zvyčajne pravdu. Nepovie vám, čo robiť v prípadoch, keď ju nemá. Výsledok s presmerovaním podľa istoty je najčistejšou šablónou vo vedomostnej báze a je dosť krátky na to, aby ste ho skopírovali.

Istota sa ukázala ako spoľahlivý varovný signál: keď si model nebol istý, mal väčšiu pravdepodobnosť, že sa mýli (**β = -0,602, p < 0,001**). Tím poslal najmenej istých **20 %** odpovedí človeku. To jediné pravidlo zvýšilo zhodu s ľudskými známkami z **0,78 na 0,82** a znížilo ručné známkovanie približne o **80 %** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Pozrite sa, čo správa obsahuje: prah, človeka a úsporu. „Zhoda 0,84“ neobsahuje ani jedno z toho, a preto je ťažké podľa nej konať a ľahké sa o nej hádať.

## Overte svojho automatického kontrolóra voči človeku

Mnohé tímy dnes používajú druhý model na posudzovanie prvého. To usporiadanie je rozumné a druhý model nemá automaticky pravdu.

Štúdia, v ktorej frontierový model písal nápovedy pre [[intelligent-tutoring|inteligentný doučovací systém]], zistila, že približne **35 %** z nich bolo príliš všeobecných, nesprávnych alebo prezrádzalo odpoveď, a že automatické kontroly kvality samotného modelu sa nezhodovali s ľudským úsudkom v tom, ktoré z nich sú zlé ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Praktická verzia: vezmite vzorku približne päťdesiatich výstupov, dajte ju ohodnotiť človeku a porovnajte to s hodnoteniami vášho kontrolóra. Kde sa tí dvaja rozídu, dozvedeli ste sa niečo o kontrolórovi. Vzorku aj tabuľku nezhôd si ponechajte, pretože je to aj artefakt, ktorý odpovie recenzentovi, ktorý sa spýta, ako to viete.

## Merajte samotnú veličinu, keď to úloha dovoľuje

Najčistejšou opravou je trénovať model na tej istej veličine, ktorú chcete merať. Doladený model bol trénovaný reprodukovať štatistické vlastnosti testových otázok: ako je každá položka ťažká, ako dobre oddeľuje silnejších od slabších študentov. Tie vzorce sa naučil, a nie boli mu povedané ([[multimodal-item-parameter-estimation-2026]]). Pretože cieľom bola vlastnosť samotného hodnotenia, hodnotenie sa mohlo týkať tej vlastnosti namiesto formulácií.

Vykazujte aj postup, nielen koncový bod. Simulátor písania SWIM zverejnil skóre každého štádia vedľa seba: promptovanie podľa rubriky **0,577**, doladenie **0,474 ± 0,023**, učenie posilňovaním **0,618 ± 0,005** ([[swim-student-writing-simulation-2026]]). Čitateľ z tej tabuľky vidí, či tréning niečo urobil. Jedno konečné číslo mu to nepovie a zároveň skryje štádium, v ktorom si doladený model počínal horšie než prompt.

## Porovnajte sa s niečím mimo svojho projektu

Najprv získajte základnú líniu, vrátane lacnej. Model asistenta kurzu bez zakotvenia skóroval pod jednoduchým vyhľadávaním podľa kľúčových slov, čo je výsledok, ktorý mení plán a stojí jeden deň hľadania.

Vonkajší benchmark potom povie, či je vaše číslo vôbec dobré. Na pedagogickom benchmarku CDPK dosiahol EduQwen **96,52 %** oproti **90,55 %** Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Pedagogy Benchmark, postavený zo skutočných skúšok profesijného rozvoja učiteľov a pokrývajúci **97 modelov**, našiel presnosť od **28 % do 89 %** ([[cdpk-pedagogy-benchmark-llms|Lelièvre a spol., 2025]]).

Pri úlohe o vyučovaní sa modely pohybovali od slabých po dobré, takže výsledok benchmarku umiestňuje váš systém niekam do širokého rozsahu.

## Testujte bezpečnosť na celej konverzácii

Väčšina bezpečnostného testovania kontroluje jednu výmenu. Škody, ktoré pri doučovaní záležia, sa hromadia. SafeTutors zistil, že aj modely postavené špeciálne na vyučovanie degradujú počas dlhej konverzácie a môžu prezradiť odpovede, ktoré by mali zadržiavať ([[hazra-safetutors-pedagogical-safety-2026]]).

Spustite kontrolu na celých konverzáciách a testovacie ťahy napíšte zámerne: študent, ktorý sa mýli, ten, ktorý stále tlačí, ten, ktorý sa pokúša vymlátiť model z jeho roly. Doučovací systém, ktorý vydrží desať ťahov a zlomí sa pri jedenástom, zlyháva v teste, na ktorom záleží, a sada na úrovni jednotlivých odpovedí ho vyhodnotí ako čistý.

## Overte simulovaného študenta, než mu uveríte

Generovanie simulovaných študentov namiesto získavania skutočných robí hodnotenie oveľa lacnejším. Simulovaný študent je však aj merací nástroj a môže sa mýliť spôsobmi, akými sa nástroje mýlia: je príliš ochotný spolupracovať, príliš plynulý, príliš rýchlo prijme nápovedu.

Najpriamejší test vo vedomostnej báze porovnal simulovaných a promptovaných študentov s **382 vyčlenenými dialógmi** z najväčšej verejnej zbierky skutočných dialógov študenta a doučovacieho systému v matematike, pomocou siedmich mier pokrývajúcich jazyk, správanie a myslenie ([[simulated-students-tutoring-dialogues-2026]]). Iná práca tlačí na realizmus z rôznych strán: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] trénuje modely, aby sa správali aj mysleli ako študenti, a profily zohľadňujúce históriu podmieňujú simuláciu minulosťou študenta namiesto fixnej persony ([[history-aware-student-simulation]]).

Ak je vaším zariadením simulovaný študent, overte simulátor voči skutočným prepisom skôr, než mu dovolíte hodnotiť váš doučovací systém.

## V čom sa hodnotiace tímy mýlia

Vysoké skóre zhody znamená, že systém je správny. Znamená, že systém známkuje tak ako hodnotiteľ, s ktorým ste ho porovnávali, na esejach, na ktorých ste ho porovnávali. WrAFT s 0,84 prišiel so spätnou väzbou, ktorá sa nedala parsovať.

Jedno číslo môže zastupovať produkt. Tímy dodajú panel s „presnosťou 0,84“ v rohu a bez poľa pre modul spätnej väzby, pravidlo nápovedí alebo správanie pri odmietnutí. Skóre na úrovni modulu je najľahšie vypočítateľné číslo a najmenej informatívna vec, ktorú možno vykázať.

Vonkajší benchmark rozhoduje, či nástroj funguje. Rozptyl Pedagogy Benchmarku od 28 % do 89 % hovorí, že rodina úloh je náročná a nerovnomerne obsluhovaná. Vaša pozícia v tom rozsahu je fakt o vašom modeli. To, čo vaši študenti dokážu potom, je iný fakt.

Model posudzujúci model je lacná náhrada ľudských hodnotení. Je lacný. Číslo 35 % a nezhoda v tom, ktoré nápovedy boli zlé, opisujú, čo pustí cez seba rozhodca, ktorý nikdy nebol overený.

Simulovaní študenti robia hodnotenie bezplatným. Robia ho lacným a presúvajú náklad do validácie. Porovnanie s 382 dialógmi existuje preto, že nástroj potreboval kalibráciu.

## Čo sa vám vráti

**„Nemáme na to anotátorov.“** Päťdesiat ohodnotených výstupov stačí na začiatok. Ohodnoťte ich sami, ak niekto iný nemá čas, a tabuľku si ponechajte.

**„Naše skóre v benchmarku prekonáva Gemini.“** Prekonáva, na CDPK, na promptoch, ktoré ten benchmark používa. Dajte vedľa neho mieru bez pomoci.

**„Náš automatický rozhodca sa zhoduje s našimi ľudskými hodnotiteľmi.“** Potom máte jednu koreláciu na jednej vzorke. Spýtajte sa, na ktorých výstupoch sa nezhodovali, a prečítajte si ich, pretože práve tam žije zlyhanie.

**„Pred spustením nestihneme celé hodnotenie.“** Spustite tie lacné tri: jeden výstup ohodnotený samostatne, päťdesiat výstupov ohodnotených človekom, jeden bezpečnostný prechod na dĺžku konverzácie. Drahé položky môžu prísť po pilote.

**„Systém je len demo, takže hodnotenie je predčasné.“** Demo je najlacnejšie miesto, kde zistíte, že vaše číslo meria formulácie. Keď je k nemu pripojený plán, to isté zistenie stojí viac na to, aby sa podľa neho konalo.

## Čo urobiť tento týždeň

**1.** Napíšte jednovetné tvrdenie, ktoré má vaše hodnotenie podporiť. Dajte ho na začiatok dokumentu s hodnotením.

**2.** Vypíšte každý výstup, ktorý systém produkuje, a každému dajte riadok, mieru a podmienku splnenia.

**3.** Vytiahnite päťdesiat výstupov, ohodnoťte ich sami a svoje hodnotenia položte vedľa hodnotení kontrolóra.

**4.** Vypočítajte rozdelenie istoty a napíšte pravidlo presmerovania s číslom v ňom, plus meno osoby, ktorá číta to, čo pod prah spadne.

**5.** Spustite jednu bezpečnostnú konverzáciu, v ktorej sa študent mýli, dvakrát zatlačí a požiada o odpoveď.

## Kam ďalej

[[making-ai-better-at-supporting-learning|Ako dokážeme zlepšiť AI v podpore učenia v našom vlastnom predmete?]] pokrýva dizajnovú stranu toho istého problému. [[training-ai-tutors-to-guide-rather-than-answer]] sa zaoberá tréningovou cestou k doučovaciemu správaniu a [[evaluating-ai-interventions-methods]] je verzia tejto otázky pre vyučujúcich, kým [[reporting-interpreting-aied-research]] je verzia pre výskumníkov. Metódy sídlia pod [[ai-ed-evaluation]] a [[llm-training-and-fine-tuning]].
