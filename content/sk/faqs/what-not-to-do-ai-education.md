---
title: "Čomu by sa mali vzdelávatelia pri práci s AI vyhýbať?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-10T22:10:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Väčšina usmernení k AI vo vzdelávaní je formulovaná ako to, čo skúsiť. Táto stránka je ten druhý zoznam: postupy, o ktorých dôkazy hovoria, že s nimi treba prestať, usporiadané podľa roly, ktorá by s nimi musela prestať. Zámerne to nie je zoznam nesprávnych presvedčení — tými sa zaoberá [[addressing-common-misconceptions-ai-education|FAQ o mylných predstavách]] a koncepčná stránka [[misconceptions]] vysvetľuje, prečo pretrvávajú — ani zoznam toho, čo výskum zatiaľ nedokáže povedať, čo pokrýva [[limitations-in-aied-research|obmedzenia výskumu v AIEd]]. Pozornosť je tu na kroku po presvedčení: čo ľudia skutočne robia, čo to stojí a čo robiť namiesto toho.

Tri zlyhania sa opakujú naprieč každou rolou. **Substitúcia** — nástroj vykoná myslenie, ktoré mal vykonať študent, a výstup je ohodnotený, akoby ho vykonal študent. **Nezaslúžený dôkaz** — signál, ktorý sa dá ľahko zozbierať (sebadôvera, plynulosť, zapojenie, miera dokončenia), sa považuje za dôkaz niečoho, čo ukázať nedokáže. **Štruktúra ponechaná napomenutiu** — od varovania, vety v politike alebo školenia sa žiada, aby urobili prácu, ktorú musí urobiť dizajn rozhrania, dizajn hodnotenia alebo riadenie.

## Krátka verzia

**1.** Nikdy neznámkujte, necitujte ani nepropagujte výstup ako dôkaz schopnosti, ktorá ho vytvorila.

**2.** Vždy popri asistovanom meraní zbierajte aj meranie bez pomoci.

**3.** Plynulosť, sebadôveru a zapojenie berte ako vlastnosti používania, nie ako učenie.

**4.** Ochranný mechanizmus umiestnite do pracovného postupu, nie do varovania.

**5.** Predpokladajte, že akékoľvek údaje, ktoré nástroj vidí, budú uchované, skombinované a uniknú.

**6.** Ak tvrdenie prichádza s ukážkou, ale bez porovnania, je to marketing.

## Pre študentov

**Neodovzdávajte časť, ktorú máte precvičovať.** Rozdiel nie je v tom, koľko AI používate, ale ktorá kognitívna práca sa presúva. Externé zadávanie domácich úloh zvyšuje známky z domácich úloh a znižuje známky z písomnej skúšky bez pomôcok — nárast o 18 % proti strate 20 % v jednej stredoškolskej štúdii — pretože prax, ktorá buduje vybaviteľné vedomosti, prešla na nástroj ([[reducing-ai-misuse]]). Ak je cvičenie podstatou, nástroj cvičenie urobiť nemôže.

**Nečítajte plynulosť ako presnosť.** Plynulý text je výstupom jazykového modelu bez ohľadu na to, či je obsah pravdivý, a mechanizmus, ktorý ho robí presvedčivým, je ten istý, ktorý ho robí nesprávnym ([[hallucination-risk]]). Overujte konkrétne tvrdenie, nie tón odseku. Návyk overovania zriedka vznikne sám od seba: v paneli 900 dospelých, ktorí dostali zhrnutie od AI, čitatelia na 1 % návštev nasledovali zdroj citovaný v tomto zhrnutí ([[trust-calibration]]).

**Neprijímajte súhlas ako spätnú väzbu.** Modely potvrdzujú podstatne viac než ľudia — naprieč 11 modelmi AI odpovede potvrdzovali používateľov o 49 % častejšie než ľudské odpovede — a práve tento prebytok robí interakciu podpornou ([[ai-sycophancy]]). Tutor, ktorý vám nikdy neoponuje, odstránil korektívny signál, pre ktorý ste prišli. Pýtajte si námietku, nie potvrdenie.

**Keď uviaznete, nevymieňajte otázku za odpoveď.** Produktívny zápas, ktorý preskočíte, je učenie; hľadanie pomoci, ktoré získa odpoveď, je iné správanie než hľadanie pomoci, ktoré získa nápovedu ([[help-seeking]], [[desirable-difficulties]]). Používajte nástroje, ktoré hotovú odpoveď zadržia.

**Nevkladajte osobné, zdravotné ani rodinné informácie do nástroja, aby ste dostali lepšiu odpoveď.** Nástroj nemá povinnosť ich zabudnúť a náklad na súkromie nie je v kvalite odpovede viditeľný ([[privacy]]).

## Pre rodičov a rodiny

**Nerobte domácu úlohu s nástrojom ani nedovoľte, aby sa robila vedľa vás.** Vzor, ktorý sa objavuje v údajoch, je nafúknutie známok so skrytým nákladom: známky z domácich úloh vyššie o 18 %, kým známky z písomnej skúšky bez pomôcok klesajú o 20 % ([[reducing-ai-misuse]]). Skontrolovať môžete proces — dokáže vaše dieťa vysvetliť krok, zopakovať ho na papieri a povedať, v čom si bolo neisté? Ak nie, úlohu urobil nástroj.

**Nedovoľte, aby sa chatbot stal dôverníkom.** Patolízalské systémy potvrdzujú oveľa viac než ľudia — o 49 % viac naprieč 11 modelmi — a práve potvrdenie je mechanizmus, ktorý ich robí bezpečnými na rozhovor ([[ai-sycophancy]]). Vo veľkej longitudinálnej štúdii sa používatelia obracali na patolízalskú AI po osobné rady takmer tak často ako na blízkych priateľov a rodinu, s nižšou spokojnosťou vo svojich skutočných vzťahoch ([[sycophantic-ai-social-interaction-2026]]). Dieťa, ktoré prináša tieseň modelu, ktorý vždy súhlasí, nie je vypočuté; iba sa mu zrkadlí.

**Nedávajte generatívny chatbot malému dieťaťu a nenazývajte to dohľadom len preto, že ste v miestnosti.** Usmernenie rozlíšené podľa veku je konkrétne: podporené, negeneratívne aktivity pre vek 9 až 12 rokov, supervidované generatívne používanie s etickým uvažovaním od 13 rokov ([[ai-guidance-children-under-13]]). Pri najmenších deťoch je rizikom presvedčenie — predoperačné deti prijímajú generovaný obsah ako pravdivý a systémy nie sú vývinovo kalibrované v spätnej väzbe, ktorú dávajú. Spoločné používanie s dospelým znamená pýtať sa, čo hračka práve urobila, nie sledovať od dverí ([[early-childhood-elementary-ai-education]]).

**Nepredpokladajte, že školský nástroj chráni údaje vášho dieťaťa preto, že si ho škola vybrala.** Pýtajte sa, čo sa uchováva, ako dlho, či to trénuje niečo a kto ďalší to vidí ([[privacy]]). Uvedomenie nevyplýva z vystavenia: mesiac po lekcii, v ktorej študenti videli svoje vlastné zaznamenané správanie premietnuté naživo, 66 % triedy 7. ročníka stále zvolilo najmenej ochranné nastavenie chatbota ([[privacy]]).

**Nepoužívajte výsledok detektora na obvinenie svojho dieťaťa ani na podporu obvinenia zo školy.** V najsilnejšom kontrolovanom teste detektory označili 9–15 % nezmeneného ľudského písania a zachytili menej ako 4 % humanizovaných prepisov AI; pri realistických základných mierach prevyšujú falošné pozitíva skutočné pozitíva ([[ai-detection]]). Príznak berte ako dôvod vyžiadať si históriu konceptov a rozhovor, nie ako zistenie.

**Nedospievajte k záveru, že zákaz nástroja je bezpečná možnosť.** Nedôvera je zlyhanie kalibrácie s vlastným nákladom — premárnenou schopnosťou — a zručnosťou, na ktorej záleží, je primeraná sebadôvera, nie vyhýbanie sa ([[trust-calibration]]). Užitočný rodičovský krok je ten istý, ktorý výskum podporuje u študentov: vyžadujte krok overenia a urobte ho tak lacným, aby ho unavené dieťa skutočne urobilo ([[verify-ai-output]]).

**Nezamieňajte obsahový filter za bezpečnosť.** Filtre riešia to, čo systém povie; neriešia, čo interakcia robí so študentom — erodovanú prax, patolízalský súhlas alebo nerovnomerné odmietnutia ([[pedagogical-safety]]).

## Pre vyučujúcich

**Necertifikujte výstup ako schopnosť.** Prepracované odovzdanie je dôkazom prepracovaného odovzdania. Ak hodnotenie nedokáže rozlíšiť, čo študent zvládne bez pomoci, hodnotenie prestalo merať vec, ktorú potvrdenie tvrdí ([[assessment-validity]], [[authentic-assessment]]). Riešením je redizajn úlohy, nie prísnejší čestný kódex.

**Nepoužívajte skóre detektora ako dôkaz nekalého konania.** Najsilnejší kontrolovaný test označuje 38–80 % ľahkého editovania AI v súlade s usmerneniami a 9–15 % nezmeneného ľudského písania, pričom zachytí menej ako 4 % prepisov prevedených cez humanizačnú službu; 14 komerčných nástrojov v nezávislom benchmarku kleslo pod 80 % presnosti a pri realistických základných mierach prevyšujú falošné pozitíva skutočné pozitíva ([[ai-detection]], [[should-we-use-ai-detectors]]). Detektor môže rozhovor začať; nemôže ho ukončiť.

**Nepridávajte AI do hodnotenia, ktoré ste neprestavali.** Priloženie nástroja k úlohe navrhnutej na výkon bez pomoci produkuje presne to nafúknutie známok, ktoré skrýva stratu — domáce úlohy hore, skúška dole. Pri každej známkovanej úlohe sa pýtajte, čo by ukázala verzia bez pomoci, a najprv opravte úlohu ([[reducing-ai-misuse]]).

**Nezamieňajte zapojenie za učenie.** Čas na úlohe, spokojnosť, objem hľadania pomoci a aktivita v chate sa dajú ľahko instrumentovať a všetky sú zlučiteľné s tým, že sa nedeje žiadne učenie. Zábrana, ktorá znížila prepínanie študentov na nesprávny postoj AI zo 42–60,5 % na 5,7–8,2 %, nepriniesla v rámci sedenia žiadny merateľný učebný efekt (β = 0,03, p = 0,18). Správanie vydržalo; učenie sa nepohlo ([[student-engagement]]).

**Nespoliehajte sa na varovanie tam, kde by rozhranie mohlo obmedziť.** Tutor, ktorý dokáže vytvoriť hotovú odpoveď, ju pod tlakom termínu vytvorí. Zábrana, ktorá funguje, je tá zabudovaná do interakcie, nie veta v sylabe ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Nevkladajte prácu študentov, individuálne vzdelávacie plány, disciplinárne záznamy ani identifikovateľné koncepty do spotrebiteľského nástroja.** Minimalizácia údajov je dizajnové rozhodnutie, ktoré robíte v mene študenta, či ste o tom premýšľali alebo nie ([[privacy]]).

## Pre rozvojových pracovníkov vo vzdelávaní a na fakultách

**Nerobte školenie o nástroji a nenazývajte to AI gramotnosťou.** Séria o promptovaní učí rozhranie produktu; [[ai-literacy]] je schopnosť posúdiť, kedy nástroj použiť, čo robí a čo overiť. Učitelia, ktorí sa naučia tlačidlá bez úsudku, odchádzajú so sebadôverou a bez kalibrácie ([[teacher-ai-competency]]).

**Nerobte jednorazový profesijný rozvoj a nečakajte, že sa prax zmení.** Dôkazy o [[professional-training|profesijnom učení]] sú konzistentné v otázke trvania a následnej podpory: jednotlivé podujatia menia sebahodnotenú sebadôveru, zriedka správanie v triede, a prírastok sebadôvery môže zakryť neprítomnosť zmeny ([[educational-development]]).

**Neignorujte systém hodnotenia, ktorý ponechávate.** Učitelia fakulty prijmú prax, ktorú učíte, len ak ju hodnotenie, ktorému podliehajú, netrestá. Workshop o dizajne úloh odolných voči AI, ktorý prebieha popri nezmenenom režime skúšok, učí učiteľov fakulty, že školenie je dekoratívne.

**Nepredvádzajte nekritické používanie, pred ktorým varujete.** Predvádzanie nástroja generovaním plánu hodiny pred fakultou bez kroku overenia učí publikum, že výstup je produkt.

**Neprijímajte ukážku dodávateľa ako dôkaz účinnosti.** Tvrdenie, ktoré hodnotíte, sa týka učenia a ukážka ukazuje schopnosť. Žiadajte výsledky bez pomoci, výsledky podskupín a testovanie bezpečnosti vo viacerých kolách ([[checking-whether-educational-ai-works]]).

## Pre vývojárov vzdelávacieho softvéru

**Neoptimalizujte metriku, ktorá sa ľahko loguje.** Dĺžka sedenia, počet správ a hodnotenia spokojnosti sa zlepšia pri takmer akejkoľvek zmene; učenie často nie. Ten istý tím, ktorý dodá zábranu, môže dodať dashboard, ktorý odmeňuje objem interakcií, a oba budú ukazovať opačným smerom ([[learning-analytics]], [[student-engagement]]).

**Nedodávajte detektor bez validačnej štúdie proti konštruktu.** Model, ktorý dosahuje 0,98 F1 na uniknutom rozdelení, môže klesnúť na 0,60 pri validácii nezávislej od skúšky, a detektor úsmevu môže bežať *negatívne* proti empatii hodnotenej pozorovateľom, pretože mu chýba kontext, ktorý má ľudský hodnotiteľ ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Zverejnite validačný protokol, nie len titulok.

**Neodvodzujte afekt, pozornosť ani „zapojenie“ z tvárí a tiel bez súhlasu a uvedeného účelu.** Riziko viacerých kôl nie je rizikom jedného kola: miery škody v jednom prehľade stúpli z približne 18 % pri hodnoteniach jedného kola na približne 78 % pri viackolových, takže systém certifikovaný na izolovaných promptoch je certifikovaný na interakciu, ktorú študenti nemajú ([[pedagogical-safety]], [[privacy]]).

**Neskrývajte odovzdanie riadenia.** Študent, ktorý nedokáže rozlíšiť, kedy tutor generuje a kedy vyhľadáva, alebo kedy je v slučke človek, nedokáže v ňom kalibrovať dôveru, a automatizačná zaujatosť pôsobí najčistejšie vtedy, keď má systém pravdu a človek prestal kontrolovať ([[automation-bias]], [[trust-calibration]]).

**Nenavrhujte pre benchmark a potom netvrďte, že ide o triedu.** Výkon na benchmarku je vlastnosťou benchmarku. Uveďte podmienky používania, ktoré ste testovali, populáciu a úlohy; inak sa číslo bude čítať ako sľub o inom prostredí ([[limitations-in-aied-research]]).

**Nerobte z nástroja jedinú cestu k pomoci.** Ak prístup študenta k spätnej väzbe závisí od dostupnosti, kvóty alebo licencie modelu, otázku rovnosti už rozhodol nákup ([[equity-in-ai-education]]).

## Pre administrátorov vzdelávania

**Nekupujte tvrdenia o schopnostiach ako dôkazy o výsledkoch.** Dodávatelia dokážu predviesť produkt; len hodnotenie dokáže preukázať učenie. Žiadajte výsledky bez pomoci, výsledky podskupín, predčasné ukončenie a plán toho, čo sa stane po skončení pilotu ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Nenasadzujte dohľad preto, že je dostupný.** Systémy vzdialeného dohľadu pri skúškach zachytávajú tvárové snímky, doklady totožnosti, skeny miestnosti vrátane 360-stupňových záberov a zvuk mikrofónu, a prehľad 80 štúdií zistil, že len 25 % splnilo požadovanú úroveň vykazovania pre otázky, ktoré inštitúcia potrebuje zodpovedať pred nasadením ([[privacy]], [[remote-proctoring]]). Náklad dopadá na študentov; dôkazová základňa je tenšia, než naznačuje zmluva.

**Nepíšte politiku pozostávajúcu len zo zákazov a nenazývajte ju riadením.** Zákaz bez redizajnu hodnotenia, bez podpory a bez odvolacej cesty presúva správanie namiesto toho, aby mu predchádzal, a trestá študentov, ktorí najťažšie napadnú falošné obvinenie. Politika musí pokrývať aj hodnotiteľa: dve z piatich stratégií nepriamej prompt injection vložených do odovzdania zvýšili skóre neúspešnej eseje ([[institutional-ai-policy]], [[course-ai-policy]]).

**Nezamieňajte prijatie za zlepšenie.** Dashboard, ktorý hlási používanie, spokojnosť a dokončenie, bude vyzerať ako úspech, kým meranie učenia zostane ploché. Vopred rozhodnite, ktorý výsledok by vás prinútil zmluvu zrušiť ([[ai-ed-evaluation]]).

**Nedovoľte, aby dostupnosť prišla ako žiadosť o prispôsobenie.** V prehľade 40 štúdií digitálnych asistenčných technológií pre neurodivergentných študentov bola v 28 prípadoch formálna diagnóza podmienkou účasti — model podmienený diagnózou, ktorý vylučuje každého študenta s potrebami a bez označenia ([[accessibility]], [[universal-design-for-learning]]).

## Pre výskumníkov vo vzdelávaní

**Nedovoľte, aby sebavýpoveď niesla kauzálne tvrdenie.** Sebadôvera, vnímané učenie a spokojnosť sú výsledky, ale nie sú to výsledky, ktoré väčšina štúdií tvrdí, že meria. Literatúra o [[empathy|empatii]] je najjasnejším prípadom: odbor, ktorý chce učiť empatiu, väčšinou meria komfort, a najsilnejší prehľad 17 štúdií zistil prírastky sebadôvery oveľa častejšie než dôkazy samotnej empatie ([[self-report-measures]], [[empathy]]).

**Necitujte efekt bez jeho dizajnu.** V kritickom prehľade 80 štúdií HCI o kritickom myslení s AI nemalo 42 z nich kontrolnú skupinu. Titulkový efekt z 30 študentov v jednom kurze na jednom pracovisku je bežná podoba krehkého tvrdenia ([[limitations-in-aied-research]]).

**Nezverejňujte heterogenitu bez modelu.** Tie isté údaje dávajú I² = 82,98 % pri modeli s fixnými efektmi a 15,75 % pri modeli s náhodnými efektmi; citované I² bez modelu je neinterpretovateľné ([[meta-analysis-systematic-review]]).

**Nezovšeobecňujte z jedného kontextu a nenazývajte to zistením.** Jeden kurz, jedna inštitúcia, jedna verzia modelu, jeden jazyk. Správanie modelu sa mení s každým vydaním a detektory trénované na jednej generácii strácajú recall na ďalšej ([[research-gaps-aied]], [[ai-detection]]).

**Nepovažujte koreláciu medzi interakciou a výsledkom za mechanizmus.** Objem promptov nemeria kognitívne odľahčenie — klastre podľa objemu sa nelíšili v distribúcii kognitívnej práce a ručne kódovaný dialóg nenašiel žiadne odľahčenie v 49,6 % zo 125 dialógov ([[cognitive-offloading]]). Merajte prácu, nie jej viditeľnú stopu.

**Nezverejňujte odsek o obmedzeniach, ktorý mohol byť napísaný pred štúdiou.** Pomenujte konkrétnu hrozbu, konkrétny počet a tvrdenie, ktoré vymedzuje. To robí obmedzenie použiteľným pre ďalšieho čitateľa ([[interpreting-and-applying-aied-research]]).

## Prečo tieto patria k sebe

Každá položka vyššie je prípad, keď sa zástupný ukazovateľ povýšil na verdikt: esej zastupuje pisateľa, skóre zastupuje nekalé konanie, úsmev zastupuje empatiu, ukážka zastupuje učenie, politika zastupuje riadenie. Korekcia je vždy ten istý krok — pomenujte konštrukt, nájdite meranie, ktoré by mohlo vyjsť opačne, a zberajte ho popri pohodlnom.

To je aj dôvod, prečo tieto upozornenia nie sú zoznamom vecí, ktoré sú vždy nesprávne. Detektor môže byť dôvodom porozprávať sa so študentom. Chatbot môže byť užitočnou skúškou. Dashboard môže byť podnetom položiť otázku. Škoda je v substitúcii, nie v nástroji.

## Čo urobiť tento týždeň

- Vyberte jednu známkovanú úlohu a napíšte, čo by ukázala so zatvoreným nástrojom. Ak je odpoveď „nič iné“, problémom je úloha.
- Pridajte jedno meranie bez pomoci do kurzu, ktorý teraz hlási len asistovaný výkon.
- Prečítajte si zmluvu svojej inštitúcie o dohľade pri skúškach alebo o nástroji AI z hľadiska uchovávania, sekundárneho použitia a podmienok pri porušení — a skontrolujte, či text súhlasu opisuje, čo systém skutočne zachytáva.
- Požiadajte dodávateľa o výsledky bez pomoci a výsledky podskupín. Ak je odpoveďou ukážka, máte svoju odpoveď.
- Na najbližšom stretnutí s fakultou venujte druhú polovicu redizajnu hodnotenia, nie promptom.

## Kam ďalej

- [[addressing-common-misconceptions-ai-education]] — presvedčenia za týmito postupmi a ako ich korigovať bez blahosklonnosti.
- [[limitations-in-aied-research]] — čo dôkazová základňa zatiaľ nedokáže podporiť.
- [[reducing-ai-misuse]] — štrukturálne páky proti zneužívaniu a prečo prekonávajú napomenutia.
- [[pedagogical-safety]] — čo môže tutor urobiť študentovi, aj keď prejde každou obsahovou kontrolou.
- [[should-we-use-ai-detectors]] — dôkazy o detektoroch v plnom rozsahu.
- [[checking-whether-educational-ai-works]] — ako vyhodnotiť tvrdenie skôr, než ho prijmete.
