---
title: "Ako naučiť študentov overovať výstup AI?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T12:11:34-04:00"
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Je týždeň pred uzávierkou známok a dve odovzdania citujú zdroje, ktoré neexistujú. Obaja študenti tvrdia, že si ich skontrolovali. Jeden otvoril odkaz. Druhý prečítal odsek a rozhodol, že znie správne. Tejto triede ste už povedali, aby si overovali, čo im chatbot dáva, a to povedanie neprinieslo správanie.

Overovanie je sekvencia, ktorú dokážete zabudovať do úlohy. Rozhodnite, čo sa počíta ako správne, skôr než úloha začne, nechajte študenta písomne sa zaviazať k očakávaniu, pošlite ho k záznamu namiesto jeho dojmu z prózy a hodnotte záznam, ktorý vytvorí. Riadok rubriky, ktorý hovorí „skontroloval zdroje“, nemeria nič z toho.

## Stručná verzia

**1.** Najprv napíšte kľúč odpovedí. Kontrola potrebuje niečo, proti čomu sa vyhodnocuje, a väčšina overovacích úloh nikdy nedefinuje, čo znamená správne.

**2.** Vyžadujte predpoveď skôr, než sa výstup objaví, aby študentovo uvažovanie existovalo na papieri skôr, než ho nástroj môže prepísať.

**3.** Pomenujte cieľ každej kontroly: zoznam autorov, fórum, rok, konkrétne číslo, konkrétny krok. „Uisti sa, že je to správne“ nie je kontrola.

**4.** Oddeľte kontrolu, ktorú dokáže spustiť stroj, od úsudku, ktorý dokáže urobiť len čitateľ, a učte študentov, ktorú z nich práve robia.

**5.** Hodnotte záznam proti kľúču, nie úsilie, aby kontrolné divadlo nezískalo nič.

**6.** Naplánujte kontrolu dovnútra úlohy. Časový tlak je zdokumentovaný dôvod, prečo ju študenti vynechávajú.

## Rozhodnite, čo znamená správne, skôr než ktokoľvek začne kontrolovať

[[verification-quality-reliance-calibration-genai-2026|Wei a Shang (2026)]], ktorí prešli 493 deduplikovaných záznamov a zmapovali 14 prioritných empirických štúdií, oddeľujú sedem vecí, do ktorých sa „kritické používanie AI“ zlieva: epistemické hodnotenie, iniciáciu overovania, kvalitu procesu, úspešnosť overovania, rozhodnutia o spoľahnutí, okamžitý výkon v úlohe a samostatné učenie. Vaša rubrika hovorí „skontroloval zdroje“, čo sedí na druhom kroku a nehovorí vám nič o tom, či bola kontrola kompetentná alebo či zmenila študentovu odpoveď. Iniciácia nie je úspech. Silný proces môže skončiť bez výsledku, slabý môže trafiť správnu odpoveď a študent, ktorý spustil hľadanie a zostal zmätený, boduje rovnako ako ten, ktorý otázku vyriešil.

Ten istý prehľad kreslí druhú líniu, medzi [[trust|dôverou]] a spoľahnutím. [[trust-calibration|Kalibrácia spoľahnutia]] sa pýta, či bolo rozhodnutie o spoľahnutí primerané vzhľadom na skutočnú kvalitu výstupu, čo viaže úsudok na jedno rozhodnutie a jeden výstup. Jedna auditovaná štúdia zistila, že nepravdivé informácie od ChatGPT posunuli uvádzanú dôveru účastníkov, a nikdy nezaznamenala, či neskôr prijali alebo odmietli konkrétne odporúčanie. Iná zaznamenala rozhodnutia prijať a odmietnuť pri [[feedback|spätnej väzbe]] ChatGPT u 78 študentov prekladu, ale bez nezávislého odborného hodnotenia nemožno prijatie nazvať primeraným ani odmietnutie odôvodneným. Bez základnej pravdy o kvalite výstupu sa spoľahnutie nedá vôbec klasifikovať.

To je dôsledok pre dizajn a je to prvá vec, ktorú treba opraviť. Skôr než nastavíte overovaciu úlohu, napíšte dva krátke opisy: ako vyzerá správny výstup pre túto úlohu a ako vyzerá vierohodný, ale nesprávny výstup. Jeden od každého stačí. Študenti potom majú normu, proti ktorej kontrolujú, a vy máte niečo, proti čomu kontrolu oznámkujete, iné než to, či študent znie starostlivo.

## Nechajte ich zaujať stanovisko skôr, než nástroj odpovie

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] stavia merací program okolo *predpovedz, kým spustíš*: študent uvedie, čo by sa malo stať, a potom sa správanie artefaktu posudzuje proti tejto predpovedi na odborových základoch, nie podľa toho, či sa spustí. Uvažovanie existuje skôr než výstup, a to ho robí hodnotiteľným.

Jeho audit 24 štúdií zistil ten istý nástroj produkujúci opačné výsledky pri rôznych štruktúrach úlohy. Konvenčné nastavenie s ChatGPT skončilo významne nižšie vo výkone, [[self-efficacy|sebaúčinnosti]] a plynutí, zatiaľ čo podmienka, ktorá pridala požiadavky na overovanie a moduly reflexie chýb, ukázala silnejšie [[critical-thinking|vyššie myslenie]]. Nástroj bol v týchto podmienkach konštantný. Menilo sa to, či úloha žiadala od študenta zastávať pozíciu, ktorú nástroj mohol vyvrátiť.

V praxi je to jeden riadok v zadaní: skôr než otvoríte nástroj, napíšte, čo očakávate, že povie, a prečo. Potom to porovnajte. Dvaja študenti môžu vyprodukovať rovnaký odsek a len jeden z nich dokáže vysvetliť, kde sa odsek odchyľuje od toho, čo predpovedal.

## Pošlite ich k záznamu

[[citation-errors-hallucinations-computing-education-2026|Denny a kol. (2026)]] vystopovali 113 588 referencií z 5 225 prác o informatickom vzdelávaní publikovaných od roku 2021 a manuálne overili 828 podozrivých záznamov. Našli 30 obsahujúcich overiteľne sfalšované bibliografické údaje naprieč 14 prácami, všetky z rokov 2025 a 2026. Trinásť bolo celých vymyslených. Zvyšných 17 skombinovalo skutočný názov so sfalšovaným alebo nesprávnym autorstvom, fórom či rokom. Na sympóziu SIGCSE Technical Symposium počet stúpol z 3 v zborníku 2025 na 17 v roku 2026, čiže 2,3 % prác v tom ročníku.

Polia autorov zlyhávajú častejšie než ktorákoľvek iná časť generovanej referencie. To jedno zistenie vám hovorí, čo žiadať. „Otvorte zdroj a prečítajte zoznam autorov“ mieri na pole, ktoré má najväčšiu pravdepodobnosť chyby, a produkuje fakt, ktorý študent buď má, alebo nemá. „Uistite sa, že zdroje sú skutočné“ produkuje uistenie. Požiadajte študentov, aby potvrdili autorov, fórum a rok proti samotnému záznamu. Práca žiada, aby každé citované dielo bolo overené a aby každý automatizovaný kontrolór zostal [[human-in-the-loop-ai|s človekom v procese]], čo je presne ten návyk, ktorý požiadavka na citovanie nacvičuje.

## Oddeľte kontrolu, ktorú zvládne stroj, od úsudku, ktorý zvládne len čitateľ

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] stavia obhájiteľnú hranicu pre to, čo sa smie kontrolovať mechanicky: zdokumentované kritériá, porovnanie s etablovaným poznaním bez interpretačného úsudku a jediná správna odpoveď alebo vopred určené prijateľné alternatívy. Dátumy, vzorce, citácie a výpočty túto hranicu prechádzajú. Čokoľvek interpretačné ju nespĺňa a tam je nástrojom kontroly študentovo vlastné čítanie.

Gousopoulos formalizuje to isté rozdelenie ako problém detekcie signálu s dvoma nezávislými parametrami. Citlivosť je schopnosť rozlíšiť správny výstup od chybného; kritérium je to, kde si študent nastaví prah pre odmietnutie. Nadmerná závislosť sa delí pozdĺž tejto línie. Varovania, kontrolné zoznamy a prompty proti halucináciám posúvajú kritérium a menia, kedy študent odmietne. Odborná výuka, vypracované porovnania a prax s nasadenými chybami zvyšujú citlivosť, pretože študent potom dokáže rozlíšiť. Študent, ktorý prijme chybný výstup, môže mať problém s kritériom alebo problém s citlivosťou, a tieto dve veci potrebujú inú výučbu.

Predpoklad je nepríjemný. Výučba overovania je vzdelávacia len tam, kde citlivosť môže presiahnuť nulu, čo vyžaduje dosť odborových znalostí na rozlíšenie správneho výstupu od nesprávneho. V tom istom audite nováčikovia požiadaní vysvetliť kód vygenerovaný [[llm|LLM]] uspeli približne v tretine úloh, takže posudzovať spätnú väzbu AI alebo kód proti vlastnému uvažovaniu je skutočná kontrola len tam, kde to uvažovanie má podstatu. Ak vaši študenti ešte nedokážu odborovo myslieť bez pomoci, viac varovaní neprinesie nič. Učte obsah a kontrolu naň pripnite.

Ešte jedno varovanie patrí do dizajnu: intervencie, ktoré znižujú neprimerané prijímanie, treba tiež skontrolovať na neúmyselné odmietnutie správnej pomoci. Nechajte študentovi priestor prijať dobrý výstup s uvedeným dôvodom.

## Hodnotte kontrolu bez toho, aby ste z nej urobili dohľad

Gousopoulos vyvodzuje dôsledok priamo. Ak AI dokáže vyprodukovať artefakt, artefakt nemôže byť hodnotením, takže hodnotenie sa presúva k špecifikácii, k overovaciemu uvažovaniu a k interpretácii. Jeho konštrukt autorstva modelu má štyri rozmery, špecifikáciu, konceptuálny model, overenie a interpretáciu, na štyroch usporiadaných úrovniach od delegovaného po autorské. Autorská úroveň vyžaduje overiteľnú špecifikáciu pred prvým promptom, odmietnutie výstupu na odborových základoch s uvedeným dôvodom a interpretáciu, ktorá presahuje správu artefaktu o sebe samom.

Rubrika čerpá z materiálov, ktoré konštrukčná úloha aj tak generuje, takže ten istý nástroj je [[formative-assessment|formatívne hodnotenie]] aj výskumná miera. To odpovedá na obavu zo zbytočnej práce: bodujete vedľajší produkt úlohy, ktorú ste aj tak zadali. Popri tom patria dve obmedzenia. Žiadna štúdia medzi 14 prioritnými prípadmi Wei a Shang nemerala úspešnosť overovania a nasledujúce rozhodnutie o spoľahnutí spolu a len málo z nich sledovalo okamžitý výkon oneskoreným zapamätaním alebo [[transfer-of-learning|prenosom]], takže rubrika stojí na analytickej mape, nie na validovanej kauzálnej sekvencii.

Tri rozhodnutia bránia tomu, aby sa z toho stal dohľad. Hodnotte kontrolu proti posúdenej kvalite, nie proti úsiliu, inak budujete stimul predvádzať kontrolu. Uveďte pôvod, ako to vyžaduje Venetsanos: študenti potrebujú vedieť, ktoré časti spätnej väzby, ktorú dostávajú, boli overené strojom, ktoré boli posúdené interpretačne a že ľudský úsudok má primát, pretože nemôžu vážiť spätnú väzbu, ktorú nevedia zaradiť. A držte presadzovanie mimo detekčných nástrojov. [[bassett-ai-detectors-education-2026|Bassett a kol. (2026)]] argumentujú, že [[ai-detection|detekcia AI]] by sa vo vzdelávaní nemala používať vôbec: jej odhady sú pravdepodobnostné a nedajú sa nezávisle overiť, pretože skutočný pôvod textu v reálnom svete nie je známy, jej skóre nespĺňa normu prevahy pravdepodobností, ktorú vyžadujú vyšetrovania integrity, a dichotómia človek verzus AI je pre prácu vytvorenú s AI, a nie AI, bezvýznamná. Ich záver je, že detekcia „nechráni akademickú integritu, podkopáva ju“. Režimy dohľadu živia podozrenie a podrývajú [[trust|dôveru]] študentov. Držte oba zmysly detekcie oddelene. Detekcia textu vygenerovaného AI tu nemá obhájiteľnú dôkaznú rolu; učiť študentov rozpoznávať chyby vo výstupe AI je celé to cvičenie.

To rozdelenie je architektonické a oplatí sa o ňom študentom povedať. [[vetting-dual-llm-safety-education|Li, Zhang a Botelho (2026)]] kontrolujú výstup druhým modelom, namiesto toho, aby kontrolu vložili do generátora. Študent, ktorý vidí prečo, vidí aj prečo „nástroj povedal, že je to správne“ nie je argument overenia.

## Ak kurz navrhujete a neučíte ho

Tri zistenia vyššie patria do stavby kurzu, kam sa vyučujúci pracujúci sám nedostane.

Prvé je diagnostika. Spustite úlohu s nasadenými chybami: dvadsať položiek, osem s odborovou chybou. Povie vám, či študenti dokážu vôbec rozlišovať, skôr než strávite semester výučbou kritéria, ktoré nedokážu použiť. Trieda, ktorá nasadené chyby prehliadne, potrebuje revíziu obsahu, nech sylabus o kritickom používaní hovorí čokoľvek.

Druhé je umiestnenie varovania. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings a Park (2026)]] ukázali všeobecnú očkovaciu správu tesne pred dvoma úlohami 100 študentom v USA, 40 domácim a 60 medzinárodným študentom angličtiny ako cudzieho jazyka. Očkovaní študenti mali významne väčšiu pravdepodobnosť, že overia úlohu so zhrnutím akademického zdroja (M = 0,34 oproti 0,18), zatiaľ čo samozapísané zámery overovať sa nepohli. Účinok bol aj závislý od úlohy: objavil sa pri úlohe so zhrnutím zdroja, ale nie rovnomerne pri matematickom kvíze o umocňovaní a násobení veľkých čísel. Varovanie umiestnite na miesto použitia, podľa typu úlohy, nie raz do sylabu alebo do orientačného modulu.

Tretie je plánovanie. Sylabus, ktorý necháva overovanie nenaplánované, hovorí, že je nepovinné, a časový tlak je zdokumentovaný dôvod, prečo študenti kontroly vynechávajú. Overovanie, ktoré žije vo vnútri úlohy s oznámkovaným artefaktom, sa deje. Overovanie, ktoré žije v odseku politiky, sa nedeje.

## Ak ste študent a čítate toto

Štyri kroky pokrývajú väčšinu toho, čo od vás výskum žiada.

Napíšte svoje očakávanie skôr, než zadáte prompt. Jedna veta o tom, aká by mala byť odpoveď, a potom porovnajte výstup s ňou.

Otvorte zdroj. Prečítajte zoznam autorov, fórum a rok proti záznamu, pretože pole autorov je miesto, kde generované referencie zlyhávajú najčastejšie.

Pri čomkoľvek interpretačnom napíšte dôvod vlastnými slovami. Sfalšovaný dôvod je rovnako viditeľný ako sfalšovaná citácia.

Nedôverujte pocitu, že próza znie dobre. Nováčikovia požiadaní vysvetliť kód vygenerovaný LLM uspeli približne v tretine úloh a terénna štúdia konverzácií študentov s ChatGPT pri kvízoch zistila, že nasledovanie správneho usmernenia aj tak viedlo k nesprávnej odpovedi. To, čo dokážete skontrolovať, je užšie než to, čo dokážete prečítať.

## V čom sa vyučujúci mýlia

**„Už som im povedal, aby si kontrolovali zdroje.“** Varovanie žiada dispozíciu. Starostliví študenti ju majú, uponáhľaní nie, a vo vete nie je nič, podľa čoho by sa študent o 11. hodine večer zachoval, keď má na obrazovke výstup, ktorý sa číta úplne dobre.

**„Riadok rubriky o kontrole zdrojov to pokrýva.“** Ten riadok sedí pri iniciácii a nehovorí nič o kvalite procesu ani o úspechu. Študent, ktorý spustil jedno hľadanie a vzdal to, boduje rovnako ako študent, ktorý otázku vyriešil, takže rubrika odmeňuje gesto.

**„Ak budú čítať pozorne, chyby zachytia.“** Plynulosť nesie úsudok. Auditovaná literatúra ukazuje nováčikov približne na tretine úspešnosti pri vysvetľovaní generovaného kódu a terénna štúdia zaznamenala nesprávnu odpoveď, ktorá prišla cez správne usmernenie.

**„Študenti, ktorí povedia, že budú overovať, to robia.“** V štúdii Vu, Cummingsa a Parka sa samozapísané zámery nepohli, zatiaľ čo vykonané správanie áno (M = 0,34 oproti 0,18). Hodnotte správanie, ktoré sa pohlo.

**„Študenti, ktorí kontrolu vynechajú, sú tí, ktorým to je jedno.“** [[trust-calibration-chatbots-design-problem-2026|Jaidka a Cai (2026)]] krížia schopnosť overovať s motiváciou overovať a profily potrebujú rôzne nápravy. Študent s vysokou schopnosťou a nízkou motiváciou má sklon k sebauspokojujúcej nadmernej dôvere. Študent s nízkou schopnosťou a nízkou motiváciou je najviac vystavený. Dvaja študenti, ktorí zlyhajú v tej istej kontrole, môžu potrebovať opačnú výučbu a [[prior-knowledge|predchádzajúce znalosti]] rozhodujú o tom, na ktorého sa pozeráte.

**„Viac varovaní napraví študentov, ktorí nedokážu rozlíšiť.“** Varovania posúvajú kritérium. Nezvyšujú citlivosť a citlivosť je to, čo oddeľuje študenta, ktorý chybu postrehne, od toho, ktorý nie.

**„Detektor podopiera politiku.“** Podľa dôkazov vyššie skóre detektora nespĺňa normu, ktorú prípad integrity vyžaduje, rozdelenie človek verzus AI neplatí pre prácu vytvorenú s AI a režim vás stojí [[trust|dôveru]], ktorú potrebujete, aby študenti čokoľvek priznali.

## Čo sa vám vráti

**„Môžu to urobiť len pre známku.“** Čiastočne pravda, preto hodnotte materiály, ktoré AI nedokáže vyprodukovať v mene študenta. Špecifikácia napísaná pred prvým promptom, predpoveď zaznamenaná pred spustením artefaktu, zoznam zdrojov skontrolovaný proti záznamu, uvedený odborový dôvod odmietnutia: každé z toho vyžaduje, aby študent zastával pozíciu, ktorú generátor nedokáže dodať. Sfalšovaný dôvod je rovnako viditeľný ako sfalšovaná citácia. Kde študent nemá odborové znalosti, proti ktorým by kontroloval, overovanie je divadlo a žiadna rubrika ho nezachráni, čo je argument pre to učiť najprv obsah.

**„V sylabuse na to nie je čas.“** Vopred vyslovené varovanie je jedna správa pred úlohou. Úloha s nasadenými chybami znovu použije kvíz, ktorý aj tak zadávate. Rubrika sa vezie na materiáloch, ktoré úloha aj tak generuje, takže stojí čas na opravovanie pri dôkazoch, ktoré by ste inak nemali. Alternatíva stojí viac: neoverené odovzdania, sfalšované referencie a rozhovory o integrite, ktoré nasledujú.

**„Nástroj má zvyčajne pravdu.“** Potom je kontrola lacná a výnimky sú pointou. Polia autorov zlyhávajú častejšie než ktorákoľvek iná časť generovanej referencie, 17 z 30 sfalšovaných položiek spájalo skutočný názov s nesprávnym autorstvom, fórom alebo rokom a 17 sa objavilo v zborníku jedného ročníka sympózia. Presnosť v častiach, ktoré si náhodou všimnete, nehovorí nič o častiach, ktoré si nevšimnete.

**„Moji študenti nevedia dosť na to, aby výstup posúdili.“** To je prah citlivosti a je skutočný. Gousopoulos predpovedá, že výučba overovania zlyháva pod podlahou odborových znalostí, a poznamenáva, že niektoré odbory poskytujú externé kritérium, fyzika, chémia, ekológia a epidemiológia medzi nimi, zatiaľ čo história, literatúra a [[ethics|etika]] zväčša nie. Učte odbor a kontrolu naň pripnite, alebo očakávajte, že sa kontrola stane rituálom.

**„Toto je dohľad.“** Je, ak hodnotíte úsilie alebo sledujete, ako študenti pracujú. Hodnotte artefakt proti kľúču, uveďte, ktorá spätná väzba bola overená strojom a ktorú posúdil človek, a detektory nechajte bokom.

## Čo urobiť tento týždeň

**1.** Napíšte dva opisy pre svoju najbližšiu úlohu: správny výstup a vierohodný nesprávny výstup. To je kľúč, proti ktorému sa kontrola vyhodnocuje.

**2.** Pridajte riadok s predpoveďou. Jedna veta, napísaná pred otvorením nástroja, porovnaná potom na odborových základoch.

**3.** Nahraďte „skontrolujte si zdroje“ vetou „otvorte záznam a potvrďte autorov, fórum a rok“.

**4.** Vložte osem nasadených chýb do kvízu, ktorý aj tak zadávate, a pozrite sa, ktorí študenti ich nájdu.

**5.** Oznámkujte jeden overovací artefakt proti kľúču a povedzte študentovi, ktorá časť kontroly zlyhala: norma, proces, alebo rozhodnutie.

## Kam ísť ďalej

[[incorporating-ai-literacy|Začlenenie AI gramotnosti]] pokrýva, ako vybudovať porozumenie, ktoré táto stránka uvádza do praxe, a [[ai-literacy-evidence|dôkazy o AI gramotnosti]] pokrývajú, čo táto práca s gramotnosťou prináša. [[reducing-over-reliance|Znižovanie nadmernej závislosti]] rieši dizajnovú stránku študentov, ktorí sa opierajú o nástroj, [[study-with-ai|štúdium s AI]] je spoločník pre študentov a [[asynchronous-online-courses-ai|asynchrónne online kurzy s AI]] pokrývajú verziu tohto problému bez stretnutia triedy, do ktorého by sa dala kontrola naplánovať. O spätnej väzbe, ktorú študenti kontrolujú, pozrite [[ai-feedback-quality|kvalitu spätnej väzby AI]] a [[hallucination-risk|riziko halucinácií]].
