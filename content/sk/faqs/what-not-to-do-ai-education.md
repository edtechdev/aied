---
title: "Čomu by sa mali vzdelávatelia pri práci s AI vyhýbať?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Väčšina usmernení k AI vo vzdelávaní hovorí, čo skúsiť. Táto stránka zbiera postupy, o ktorých dôkazy hovoria, že s nimi treba prestať, usporiadané podľa roly, ktorá by s nimi musela prestať. Nesprávne presvedčenia riešime inde: zaoberá sa nimi [[addressing-common-misconceptions-ai-education|FAQ o mylných predstavách]] a koncepčná stránka [[misconceptions]] vysvetľuje, prečo pretrvávajú. To, čo výskum zatiaľ nevie povedať, patrí k [[limitations-in-aied-research|obmedzeniam výskumu v AIEd]]. Tu ide o krok po presvedčení: čo ľudia robia, čo ich to stojí a čo robiť namiesto toho.

Tri zlyhania sa opakujú naprieč rolami.

1. **Substitúcia.** Nástroj vykonáva myslenie, ktoré mal vykonať študent, a výstup sa hodnotí, akoby ho vykonal študent. Odovzdaná esej je záznamom toho, čo vie model, nie toho, čo vie študent.
2. **Nezaslúžený dôkaz.** Signál, ktorý sa ľahko zbiera, ako sebadôvera, plynulosť, zapojenie alebo miera dokončenia, sa berie ako dôkaz niečoho, čo ukázať nedokáže. Dashboard môže hlásiť štyridsať minút v sedení s tutorom; nedokáže hlásiť, či sa niekto naučil riešiť kvadratickú rovnicu.
3. **Štruktúra ponechaná napomenutiu.** Od varovania, vety v politike alebo školenia sa žiada práca, ktorú musí urobiť dizajn rozhrania, dizajn hodnotenia alebo riadenie. Sylabus hovorí používať AI zodpovedne a tutor aj tak na prvý prompt vydá hotovú odpoveď.

## Krátka verzia

**1.** Nikdy neznámkujte, necitujte ani nepropagujte výstup ako dôkaz schopnosti, ktorá ho vytvorila.

**2.** Vždy popri asistovanom meraní zbierajte aj meranie bez pomoci.

**3.** Plynulosť, sebadôveru a zapojenie berte ako vlastnosti používania, nie ako učenie.

**4.** Ochranný mechanizmus umiestnite do pracovného postupu, nie do varovania.

**5.** Predpokladajte, že akékoľvek údaje, ktoré nástroj vidí, budú uchované, skombinované a uniknú.

**6.** Ak tvrdenie prichádza s ukážkou, ale bez porovnania, je to marketing.

## Pre vyučujúcich

**Necertifikujte výstup ako schopnosť.** Vypracované odovzdanie je dôkazom vypracovaného odovzdania. Ak študent odovzdá prehľad literatúry, ktorého zdroje neviete porovnať s ničím, čo kurz učil, a hodnotenie nedokáže rozlíšiť, čo tento študent zvládne bez pomoci, hodnotenie prestalo merať to, čo osvedčenie tvrdí ([[assessment-validity]], [[authentic-assessment]]). Riešením je redizajn úlohy; prísnejší čestný kódex to neurobí.

**Nepoužívajte skóre detektora ako dôkaz nekalého konania.** V kontrolovanej štúdii 642 publikovaných abstraktov detektory označili 38–80 % ľahkých úprav AI v súlade s usmerneniami a 9–15 % nezmeneného ľudského písania, pričom zachytili menej ako 4 % prepisov prevedených cez humanizačnú službu ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Nezávislý benchmark zistil, že žiadny zo 14 komerčných nástrojov nedosiahol 80 % presnosti, a jednoduché parafrázovanie zníži aj tento výsledok na polovicu ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Pri realistických základných mierach prevyšujú falošné pozitíva skutočné ([[should-we-use-ai-detectors]]). Detektor môže rozhovor začať; nedokáže ho ukončiť.

**Nepridávajte AI do hodnotenia, ktoré ste neprestavali.** Priloženie nástroja k úlohe navrhnutej na výkon bez pomoci vytvára presne to nafúknutie známok, ktoré stratu skrýva: domáce úlohy hore, skúška dole. Pri každej známkovanej úlohe sa pýtajte, čo by ukázala verzia bez pomoci, a najprv opravte úlohu ([[reducing-ai-misuse]]). Ak domáca sada príkladov a test v triede preverujú tú istú zručnosť, meria študenta len jedna z nich.

**Nezamieňajte zapojenie za učenie.** Čas na úlohe, spokojnosť, objem hľadania pomoci a aktivita v chate sa ľahko instrumentujú a všetky sú zlučiteľné s tým, že sa nedeje žiadne učenie. V experimente 3 × 2 so 186 účastníkmi, ktorí posudzovali občianskoprávne prípady na platforme podporovanej LLM, zábrana, ktorá znížila prepínanie na nesprávny postoj AI zo 42–60,5 % na 5,7–8,2 %, nepriniesla v rámci sedenia žiadny merateľný učebný efekt (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Správanie sa zmenilo; miera učenia nie ([[student-engagement]]).

**Nespoliehajte sa na varovanie tam, kde by rozhranie mohlo obmedziť.** Tutor, ktorý dokáže vytvoriť hotovú odpoveď, ju pod tlakom termínu vytvorí, nech sylabus hovorí čokoľvek. Funguje zábrana zabudovaná do interakcie ([[reducing-ai-misuse]], [[pedagogical-safety]]). Zadržanie konečnej odpovede na prvé dva pokusy je rozhodnutie o dizajne; prosba na študentov, aby o ňu nežiadali, je prosba.

**Nevkladajte práce študentov, IVP, disciplinárne záznamy ani identifikovateľné koncepty do spotrebiteľského nástroja.** Minimalizácia údajov je dizajnové rozhodnutie, ktoré robíte v mene študenta, či ste o tom premýšľali alebo nie ([[privacy]]). Bezplatný účet chatbota, ktorý odpovedá na otázku o behaviorálnom pláne študenta, je aj kópiou tohto plánu na cudzom serveri.

## Pre študentov

**Neodovzdávajte časť, ktorú máte precvičovať.** Predpokladajme, že zadanie je esej z piatich odsekov: vložíte prompt do chatbota, vezmete vrátený koncept a odovzdáte ho. To, čo odovzdáte, je záznamom toho, čo vie model. Otázka je, ktorá kognitívna práca sa presúva, nie koľko AI používate. Externé zadávanie domácich úloh zvyšuje známky z domácich úloh a znižuje známky z písomnej skúšky bez pomôcok: u 26 811 stredoškolákov sledovaných 30 mesiacov stúpli známky z domácich úloh o 18 % a známky zo skúšky klesli o 20 % za šesť mesiacov ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Prax, ktorá buduje vybaviteľné vedomosti, prešla na nástroj ([[reducing-ai-misuse]]). Ak je cvičenie podstatou, nástroj cvičenie urobiť nemôže.

**Nečítajte plynulosť ako presnosť.** Plynulý text je výstupom [[llm|jazykového modelu]] bez ohľadu na to, či je obsah pravdivý, a mechanizmus, ktorý ho robí presvedčivým, je ten istý, ktorý ho robí nesprávnym ([[hallucination-risk]]). Overujte konkrétne tvrdenie, nie tón odseku. Tento návyk zriedka vznikne sám: v pasívnom paneli 900 dospelých v USA, ktorí dostali zhrnutie od AI, čitatelia na 1 % návštev nasledovali zdroj citovaný v tomto zhrnutí ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). Ak zadanie vyžaduje tri zdroje, otvorte všetky tri.

**Neprijímajte súhlas ako spätnú väzbu.** Modely potvrdzujú podstatne viac než ľudia: naprieč 11 modelmi AI odpovede potvrdzovali používateľov o 49 % častejšie než ľudské odpovede a práve tento prebytok robí interakciu pocitovo podpornou ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Tutor, ktorý s vami nikdy nesúhlasí, odstránil korektívny signál, pre ktorý ste prišli ([[ai-sycophancy]]). Pýtajte si námietku, nie potvrdenie: „Čo je na tomto argumente zlé a čo by povedal skeptik?“

**Keď uviaznete, nevymieňajte otázku za odpoveď.** Produktívny zápas, ktorý preskočíte, je učenie. Hľadanie pomoci, ktoré získa odpoveď, je iné správanie než hľadanie pomoci, ktoré získa nápovedu ([[help-seeking]], [[desirable-difficulties]]). Používajte nástroje, ktoré hotovú odpoveď zadržia, a pýtajte si ďalší krok, nie riešenie.

**Nevkladajte osobné, zdravotné ani rodinné informácie do nástroja, aby ste dostali lepšiu odpoveď.** Nástroj nemá povinnosť ich zabudnúť a náklad na súkromie nie je v kvalite odpovede viditeľný ([[privacy]]). Lepší prompt nepotrebuje vašu diagnózu, adresu ani mená vašej rodiny.

## Pre rodičov a rodiny

**Nerobte domácu úlohu s nástrojom ani nedovoľte, aby sa robila vedľa vás.** Vzor v údajoch je nafúknutie známok so skrytým nákladom: v tom istom 30-mesačnom paneli stúpli známky z domácich úloh o 18 %, kým známky z písomnej skúšky bez pomôcok klesli o 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Dieťa, ktoré prinesie domov bezchybnú domácu úlohu a prepadne z testu z kapitoly, vám ukazuje presne túto medzeru. Skontrolovať môžete postup. Dokáže vaše dieťa vysvetliť krok, urobiť jeden príklad znova na papieri a povedať, v čom si nebolo isté? Ak nie, úlohu urobil nástroj.

**Nedovoľte, aby sa chatbot stal dôverníkom.** Patolízalské systémy potvrdzujú oveľa viac než ľudia, o 49 % viac naprieč 11 modelmi, a práve potvrdzovanie je mechanizmus, ktorý ich robí pocitovo bezpečnými na rozhovor ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Vo veľkej longitudinálnej štúdii sa používatelia obracali na patolízalskú AI po osobné rady takmer tak často ako na blízkych priateľov a rodinu, s nižšou spokojnosťou vo svojich skutočných vzťahoch ([[sycophantic-ai-social-interaction-2026]]). Dieťa, ktoré prináša tieseň modelu, ktorý vždy súhlasí, nie je vypočuté. Zrkadlí sa mu. Ak vaše dieťa hovorí s chatbotom o priateľstve alebo strate, je to moment spýtať sa, komu ďalšiemu o tom povedalo.

**Nedávajte generatívny chatbot malému dieťaťu a nenazývajte to dohľadom len preto, že ste v miestnosti.** Usmernenie podľa veku je konkrétne: podporené negeneratívne aktivity pre vek 9 až 12 rokov, generatívne používanie pod dohľadom s etickým uvažovaním od 13 rokov ([[ai-guidance-children-under-13]]). Pri najmenších deťoch sa riziko týka presvedčenia. Deti v predoperačnom štádiu prijímajú generovaný obsah ako pravdivý a systémy nie sú vývinovo kalibrované v spätnej väzbe, ktorú dávajú. Spoločné používanie s dospelým znamená sedieť vedľa dieťaťa a pýtať sa, čo hračka práve urobila, nie dohliadať od dverí ([[early-childhood-elementary-ai-education]]).

**Nepredpokladajte, že školský nástroj chráni údaje vášho dieťaťa preto, že si ho škola vybrala.** Pýtajte sa, čo sa uchováva, ako dlho, či na niečom trénuje a kto ďalší to vidí ([[privacy]]). Uvedomenie nevyplýva z vystavenia: mesiac po lekcii, v ktorej trieda siedmeho ročníka sledovala svoje vlastné zaznamenané správanie premietané naživo, 66 % zo 47 študentov stále zvolilo najmenej ochranné nastavenie chatbota ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Pýtajte sa školy písomne a o odpovede požiadajte písomne.

**Nepoužívajte výsledok detektora na obvinenie dieťaťa ani na podporu obvinenia zo školy.** V kontrolovanej štúdii 642 publikovaných abstraktov detektory označili 9–15 % nezmeneného ľudského písania a zachytili menej ako 4 % humanizovaných prepisov AI ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Pri realistických základných mierach prevyšujú falošné pozitíva skutočné ([[ai-detection]]). Príznak berte ako dôvod vyžiadať si históriu konceptov a rozhovor, nie ako zistenie.

**Nedospievajte k záveru, že zákaz nástroja je bezpečná možnosť.** Nedôvera je zlyhanie kalibrácie s vlastným nákladom, premárnenou schopnosťou, a zručnosťou, na ktorej záleží, je primeraná sebadôvera, nie vyhýbanie sa ([[trust-calibration]]). Užitočný rodičovský krok je ten istý, ktorý výskum podporuje u študentov: vyžadujte krok overenia a urobte ho tak lacným, aby ho unavené dieťa skutočne urobilo ([[verify-ai-output]]). Požiadať o zdroj, ktorý chatbot použil, stojí minútu; zakázať chatbot stojí prax.

**Nezamieňajte obsahový filter za bezpečnosť.** Filtre riešia to, čo systém povie. Neriešia, čo interakcia robí študentovi: erodovanú prax, patolízalský súhlas alebo nerovnomerné odmietnutia ([[pedagogical-safety]]).

## Pre rozvojových pracovníkov vo vzdelávaní a na fakultách

**Nerobte školenie o nástroji a nenazývajte to AI gramotnosťou.** Sedenie o [[prompt-engineering|promptovaní]] učí rozhranie produktu. [[ai-literacy|AI gramotnosť]] je schopnosť posúdiť, kedy nástroj použiť, čo robí a čo overiť. Učitelia, ktorí sa naučia tlačidlá bez tohto úsudku, odchádzajú so sebadôverou a bez kalibrácie ([[teacher-ai-competency]]). Workshop, ktorý sa skončí tým, že všetci vedia vygenerovať plán hodiny a nikto nevie povedať, kedy sa plán použiť nemá, naučil rozhranie.

**Nerobte jednorazový profesijný rozvoj a nečakajte, že sa prax zmení.** Dôkazy o [[professional-training|profesijnom učení]] sú konzistentné v otázke trvania a následnej podpory: jednotlivé podujatia menia sebahodnotenú sebadôveru, zriedka správanie v triede, a prírastok sebadôvery môže zakryť neprítomnosť zmeny ([[educational-development]]). Dvojhodinové sedenie v auguste bez následnej podpory v októbri je intervenciou do sebadôvery.

**Neignorujte systém hodnotenia, ktorý ponechávate.** Učitelia prijmú prax, ktorú učíte, len ak ju hodnotenie, ktorému podliehajú, netrestá. Workshop o dizajne úloh odolných voči AI, ktorý prebieha popri nezmenenom režime skúšok, učí učiteľov, že školenie je dekorácia.

**Nepredvádzajte nekritické používanie, pred ktorým varujete.** Predvádzanie nástroja generovaním plánu hodiny pred učiteľmi bez kroku overenia učí publikum, že výstup je produkt. Vygenerujte ho pred nimi a potom označte dve tvrdenia, ktoré treba overiť.

**Neprijímajte ukážku dodávateľa ako dôkaz účinnosti.** Tvrdenie, ktoré hodnotíte, sa týka učenia a ukážka ukazuje schopnosť. Žiadajte výsledky bez pomoci, výsledky podskupín a testovanie bezpečnosti vo viacerých kolách ([[checking-whether-educational-ai-works]]).

## Pre vývojárov vzdelávacieho softvéru

**Neoptimalizujte metriku, ktorá sa ľahko loguje.** Dĺžka sedenia, počet správ a hodnotenia spokojnosti sa zlepšia pri takmer akejkoľvek zmene; učenie často nie. Ten istý tím, ktorý dodá zábranu, môže dodať dashboard, ktorý odmeňuje objem interakcií, a oba budú ukazovať opačným smerom ([[learning-analytics]], [[student-engagement]]). Ak je vašou metrikou úspechu počet správ na sedenie, postavili ste produkt, ktorý odmeňuje študentov za to, že zostávajú v chate.

**Nedodávajte detektor bez validačnej štúdie proti konštruktu.** Benchmark pätnástich modelov EEG dosiahol 0,9853 F1 pri stratifikovanej krížovej validácii; validácia Group K-Fold nezávislá od pokusu, ktorá rešpektuje hranice pokusov, znížila vrchol na 0,6038 proti 25 % úrovni náhody ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). Detektor úsmevu môže bežať *negatívne* proti empatii hodnotenej pozorovateľom, pretože mu chýba kontext, ktorý má ľudský hodnotiteľ ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Zverejnite validačný protokol spolu s titulkovým číslom.

**Neodvodzujte afekt, pozornosť ani „zapojenie“ z tvárí a tiel bez súhlasu a uvedeného účelu.** Riziko viacerých kôl nie je rizikom jedného kola: v jednom prehľade pedagogickej bezpečnosti stúpol podiel zlyhaní zo 17,7 % pri jednotlivých kolách na 77,8 % pri viackolových ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Systém certifikovaný na izolovaných promptoch je certifikovaný na interakciu, ktorú študenti nezažívajú ([[pedagogical-safety]], [[privacy]]).

**Neskrývajte odovzdanie.** Študent, ktorý nedokáže rozlíšiť, kedy tutor generuje a kedy vyhľadáva, alebo kedy je v slučke človek, nedokáže v ňom kalibrovať dôveru. [[automation-bias|Automatizačná zaujatosť]] pôsobí najčistejšie vtedy, keď má systém pravdu a človek prestal kontrolovať ([[trust-calibration]]). Povedzte v rozhraní, kedy prácu prečíta človek.

**Nenavrhujte pre benchmark a potom to nevydávajte za triedu.** Výkon na benchmarku je vlastnosťou benchmarku. Uveďte podmienky používania, ktoré ste testovali, populáciu a úlohy; inak sa číslo bude čítať ako sľub o inom prostredí ([[limitations-in-aied-research]]).

**Nerobte z nástroja jedinú cestu k pomoci.** Ak prístup študenta k [[feedback|spätnej väzbe]] závisí od dostupnosti modelu, kvóty alebo licencie, otázku rovnosti už rozhodol nákup ([[equity-in-ai-education]]).

## Pre administrátorov vzdelávania

**Nekupujte tvrdenia o schopnostiach ako dôkazy o výsledkoch.** Dodávatelia dokážu predviesť produkt; len hodnotenie dokáže preukázať učenie. Žiadajte výsledky bez pomoci, výsledky podskupín, predčasné ukončenie a plán toho, čo sa stane po skončení pilotu ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Ukážka predvedie tutora, ako rieši úlohu; nepredvedie študenta, ako vyrieši ďalšiu.

**Nenasadzujte dohľad preto, že je dostupný.** Systémy vzdialeného dohľadu pri skúškach zachytávajú tvárové snímky, doklady totožnosti, skeny miestnosti vrátane 360-stupňových záberov a zvuk mikrofónu. Prehľad 80 štúdií zistil, že len 25 % sa vôbec zaoberalo etickými otázkami, 35 % neuviedlo svoj súbor údajov a 30 % sa nedalo reprodukovať ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). Náklad dopadá na študentov a dôkazová základňa je tenšia, než naznačuje zmluva ([[privacy]], [[remote-proctoring]]).

**Nepíšte politiku pozostávajúcu len zo zákazov a nenazývajte ju riadením.** Zákaz bez redizajnu hodnotenia, bez podpory a bez odvolacej cesty presúva správanie namiesto toho, aby mu predchádzal, a trestá študentov, ktorí najťažšie napadnú falošné obvinenie. [[governance|Politika]] musí pokrývať aj hodnotiteľa: v red-team teste každodenného hodnotiaceho postupu posunuli dve z piatich stratégií vkladania promptov ukrytých v odovzdaní neúspešnú esej k úspechu so 100 % a 94 % úspešnosťou naprieč typmi súborov ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Politika, ktorá obmedzuje študentov, ale nie hodnotiaci proces, je polovicou politiky.

**Nezamieňajte prijatie za zlepšenie.** Dashboard, ktorý hlási používanie, spokojnosť a dokončenie, bude vyzerať ako úspech, kým meranie učenia zostane ploché. Vopred rozhodnite, ktorý výsledok by vás prinútil zmluvu zrušiť ([[ai-ed-evaluation]]). Zapíšte to číslo pred začiatkom pilotu.

**Nedovoľte, aby dostupnosť prišla ako žiadosť o prispôsobenie.** V prehľade 40 štúdií digitálnych asistenčných technológií pre [[neurodiversity|neurodivergentných študentov]] bola v 28 prípadoch formálna diagnóza podmienkou účasti. Model podmienený diagnózou vylučuje každého študenta s potrebami a bez označenia ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Pre výskumníkov vo vzdelávaní

**Nedovoľte, aby sebavýpoveď niesla kauzálne tvrdenie.** Sebadôvera, vnímané učenie a spokojnosť sú výsledky, ale nie sú to výsledky, ktoré väčšina štúdií tvrdí, že meria. Literatúra o [[empathy|empatii]] je najjasnejším prípadom: odbor, ktorý chce učiť empatiu, väčšinou meria komfort, a prehľad 17 štúdií zistil prírastky sebadôvery oveľa častejšie než dôkazy samotnej empatie ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Necitujte efekt bez jeho dizajnu.** V kritickom prehľade 80 štúdií HCI o [[critical-thinking|kritickom myslení]] s AI nemalo 42 (52 %) z nich kontrolnú skupinu ([[critical-review-critical-thinking-hci-research-ai-2026]]). Titulkový efekt z 30 študentov v jednom kurze na jednom pracovisku je bežná podoba krehkého tvrdenia ([[limitations-in-aied-research]]).

**Nezverejňujte heterogenitu bez modelu.** Tie isté údaje dávajú I² = 82,98 % pri modeli s fixnými efektmi a I² = 15,75 % pri modeli s náhodnými efektmi ([[ai-supported-instruction-stem-meta-analysis-2026]]). Citované I² bez modelu je neinterpretovateľné ([[meta-analysis-systematic-review]]).

**Nezovšeobecňujte z jedného kontextu a nenazývajte to zistením.** Jeden kurz, jedna inštitúcia, jedna verzia modelu, jeden jazyk. Správanie modelu sa mení s každým vydaním a detektory trénované na jednej generácii strácajú recall na ďalšej ([[research-gaps-aied]], [[ai-detection]]).

**Nepovažujte koreláciu medzi interakciou a výsledkom za mechanizmus.** Objem promptov nemeria kognitívne odľahčenie. Klastre podľa objemu sa nelíšili v distribúcii kognitívnej práce a ručne kódovaný dialóg nenašiel žiadne odľahčenie v 49,6 % zo 125 dialógov ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Merajte prácu samotnú.

**Nezverejňujte odsek o obmedzeniach, ktorý mohol byť napísaný pred štúdiou.** Pomenujte konkrétnu hrozbu, konkrétny počet a tvrdenie, ktoré vymedzuje. To robí obmedzenie použiteľným pre ďalšieho čitateľa ([[interpreting-and-applying-aied-research]]).

## Prečo tieto patria k sebe

Každá položka vyššie povyšuje zástupný ukazovateľ na verdikt. Esej zastupuje pisateľa, skóre zastupuje nekalé konanie, úsmev zastupuje empatiu, ukážka zastupuje učenie. Korekcia je vždy ten istý krok: pomenujte konštrukt, nájdite meranie, ktoré by mohlo vyjsť opačne, a zberajte ho popri pohodlnom.

Žiadne z týchto upozornení neznamená, že nástroj je vždy nesprávny. Detektor môže byť dôvodom porozprávať sa so študentom. Chatbot môže byť užitočnou skúškou. Dashboard môže byť podnetom položiť otázku. Škoda je v substitúcii.

## Čo urobiť tento týždeň

- Vyberte jednu známkovanú úlohu a napíšte, čo by ukázala so zatvoreným nástrojom. Ak je odpoveď „nič iné“, problémom je úloha.
- Pridajte jedno meranie bez pomoci do kurzu, ktorý teraz hlási len asistovaný výkon.
- Prečítajte si zmluvu svojej inštitúcie o dohľade pri skúškach alebo o nástroji AI z hľadiska uchovávania, sekundárneho použitia a podmienok pri porušení, a skontrolujte, či text súhlasu opisuje, čo systém skutočne zachytáva.
- Požiadajte dodávateľa o výsledky bez pomoci a výsledky podskupín. Ak je odpoveďou ukážka, máte svoju odpoveď.
- Na najbližšom stretnutí s učiteľmi venujte druhú polovicu redizajnu hodnotenia, nie promptom.

## Kam ďalej

- [[addressing-common-misconceptions-ai-education]]: presvedčenia za týmito postupmi a ako ich korigovať bez blahosklonnosti.
- [[limitations-in-aied-research]]: čo dôkazová základňa zatiaľ nedokáže podporiť.
- [[reducing-ai-misuse]]: štrukturálne páky proti zneužívaniu a prečo prekonávajú napomenutia.
- [[pedagogical-safety]]: čo môže tutor urobiť študentovi, aj keď prejde každou obsahovou kontrolou.
- [[should-we-use-ai-detectors]]: dôkazy o detektoroch v plnom rozsahu.
- [[checking-whether-educational-ai-works]]: ako vyhodnotiť tvrdenie skôr, než ho prijmete.
