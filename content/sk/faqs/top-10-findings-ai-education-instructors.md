---
title: "Aké je 10 najdôležitejších zistení z výskumu AI vo vzdelávaní, ktoré by učitelia mali poznať?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
updated: "2026-11-14T18:10:00-05:00"
type: faq
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Týchto desať štúdií sa priamo dotýka rozhodnutí, ktoré učitelia robia: čo zadať, ako to hodnotiť, aké nástroje kúpiť, ako ich vytvoriť a ako rozpoznať, či sa učenie skutočne udialo. Každý záznam uvádza štúdiu, jej výsledok a prax, ktorú mení.

## Desať štúdií

**1. Voľný prístup k chatbotu znížil skóre skúšky o 17 % ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Takmer 1 000 stredoškolákov v Turecku, v približne 50 triedach, prešlo tromi matematickými stretnutiami s rovnakým obsahom. Jedna skupina mala počas precvičovania obyčajné chatovacie okno GPT-4. Ďalšia mala doučovateľa postaveného na tom istom modeli s [[guardrails|usmerneniami]], ktoré napísali učitelia: nápovedy namiesto odpovedí, so správnym riešením a bežnými chybami vloženými do promptu. Kontrolná skupina nemala žiadnu AI. Každé stretnutie sa skončilo [[summative-assessment|skúškou bez pomôcok]] na podobné úlohy, pričom nástroj už nebol k dispozícii.

Skupina s obyčajným chatom dosiahla počas precvičovania o 48 % viac než kontrola a na skúške o 17 % menej. Študenti, ktorí sa AI nikdy nedotkli, boli lepší než oni. Chránená skupina získala v precvičovaní 127 % a na skúške dosiahla rovnakú úroveň ako kontrola. Škoda zmizla a na jej miesto sa neobjavila žiadna výhoda v učení. Záznamy chatu vysvetľujú to rozdelenie: nechránená skupina žiadala odpovede a skončila, kým chránená skupina sa pokúšala riešiť úlohy, pýtala si nápovedy a zlepšovala sa už počas prvého stretnutia.

Pre učiteľov nie je „AI povolená“ politikou. O tom, či sa nástroj stane kanálom nápovedí alebo automatom na odpovede, rozhoduje rozhranie a všeobecný chatbot sa predvolene správa ako to druhé. Chatovacie okno ponechané otvorené počas precvičovania stojí najviac tých študentov, ktorí sa oň opierajú najviac.

Vedúci pracovníci môžu tento výsledok postaviť proti tvrdeniu z obstarávania, že silnejší model rieši pedagogiku. Model bol v oboch ramenách rovnaký.

Pozri aj: [[training-ai-tutors-to-guide-rather-than-answer|Trénovať doučovateľa, aby viedol, a nie odpovedal]]

**2. Doučovateľ postavený na vlastnej pedagogike kurzu prekonal triedu s aktívnym učením, a to za menej času ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 je úvodný kurz fyziky na Harvarde pre študentov prírodných vied so zameraním na životné vedy. Na jeseň 2023 sa 194 študentov v skríženom pokuse zúčastnilo dvoch lekcií dvakrát, raz v triede s [[active-learning|aktívnym učením]] kurzu a raz prostredníctvom doučovateľa vytvoreného pre kurz, pričom pred každou verziou a po nej absolvovali testy.

Študenti sa s doučovateľom naučili viac. Medián po teste bol 4,5 oproti 3,5, medián [[learning-gains|prírastkov v učení]] bol viac než dvojnásobný oproti triede a kvantilové odhady účinku sa pohybovali od 0,73 do 1,3 smerodajnej odchýlky. S doučovateľom strávili medián 49 minút oproti približne 60 minútam v triede a 83 % z nich hodnotilo jeho vysvetlenia ako rovnako dobré alebo lepšie než vysvetlenia svojich učiteľov. Hodnotenia angažovanosti a motivácie stúpli. Pôžitok a rastové nastavenie mysle sa nelíšili.

Výsledok stojí na dizajne. Doučovateľ používal rovnaké postupy ako trieda: vypracované príklady, stupňované nápovedy, výzvy na sebavysvetlenie, sledovanie, ktoré vychádza z výskumu o tom, ako sa fyzika učí. Porovnanie bolo s aktívnym učením, nie s prednáškou, takže bežná námietka, že čokoľvek prekoná prednášku, tu neplatí.

Rozvojoví pracovníci pre učiteľov tu majú najsilnejší dostupný argument, že dizajn doučovateľa je práca na kurikule, nie obstarávanie. Pre produktové tímy je latka konkrétna: vyrovnať sa triede s aktívnym učením, za menej času a s rovnakými vyučovacími postupmi.

Pozri aj: [[developing-ai-tutor|Osvedčené postupy pri vývoji doučovateľa AI]]

**3. Doučovanie od AI dosiahlo úroveň expertných ľudských doučovateľov ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench spojil 2 469 doučovacích sedení s 2 383 dospelými, ktorí sa pripravovali na GRE, pričom použil 13 doučovateľov AI postavených na 12 modeloch, živých ľudských doučovateľov a video kontrolu. Výsledkom bol prírastok v učení pri kvantitatívnych a verbálnych položkách.

Združené doučovanie od AI bolo štatisticky rovnocenné s doučovaním od expertných ľudí, a to v rozmedzí štvrtiny smerodajnej odchýlky, a obe prekonali kontrolu približne o šesť percentuálnych bodov: 6,86 v kvantitatívnej a 5,47 vo verbálnej časti, teda približne o jeden a pol až dva ďalšie správne body na sekciu. Doučovatelia AI boli hodnotení slabšie v plánovaní lekcií a vo vytváraní cvičných úloh, v čom boli ľudskí doučovatelia lepší.

Pre vedúcich pracovníkov sa pri dobre vymedzenej príprave na testy mení aritmetika personálneho zabezpečenia. Keď licencovaný doučovateľ dosahuje úroveň ľudského doučovateľa v rozmedzí štvrtiny smerodajnej odchýlky, rozhodnutie sa týka nákladov a pokrytia a účinnosť prestáva byť otázkou. Výskumníci si všimnú hranicu: rovnocennosť nie je prevaha a štandardizovaný test je pre stroj najľahší výsledok na dosiahnutie.

Rozvojoví pracovníci pre učiteľov sa môžu pozrieť na to, kde si ľudskí doučovatelia udržali výhodu: diagnostikovanie toho, čo študent potrebuje ďalej, a zostavenie postupnosti, ktorá z toho vyplýva.

Pozri aj: [[intelligent-tutoring|Inteligentné doučovanie]]

**4. Písanie poznámok prekonalo pýtanie sa chatbota, o tri dni neskôr ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes a kolegovia uskutočnili preregistrovaný experiment v siedmich anglických stredných školách. 405 študentov desiateho ročníka prešlo dvoma z troch podmienok pri texte z dejepisu: chatbot, ktorý mohol odpovedať na otázky o ňom, písanie poznámok, alebo oboje. O tri dni neskôr absolvovali testy bez pomôcok z doslovného zapamätania, porozumenia a [[retrieval-spacing-interleaving|voľného vybavenia]].

Poznámky prekonali chatbot vo všetkých troch mierach, približne o pol smerodajnej odchýlky v zapamätaní a takmer o štyri desatiny v porozumení. Poznámky plus chatbot prekonali samotný chatbot v dvoch z troch prípadov a nič nepriniesli pre voľné vybavenie, a samotné poznámky boli silnejšie než kombinácia. V kombinovanej podmienke približne štvrtina študentov skopírovala výstup chatbota do svojich poznámok. Študenti napriek tomu hodnotili chatbot ako ľahší, užitočnejší a príjemnejší než písanie.

Učitelia tu majú priamy dôkaz, že asistent na čítanie môže nahradiť čítanie. Ak má úloha slúžiť na porozumenie textu, [[writing-education|písanie je porozumením]] a nástroj, ktorý odpovedá na otázky o texte, odstraňuje precvičovanie. Poznámky si ponechajte. Ak chatbot povolíte, žiadajte niečo, čo nedokáže poskytnúť: porovnanie, spochybnenie textu alebo zhrnutie napísané po zatvorení nástroja.

Pozri aj: [[ai-support-reading-comprehension|Podpora AI pri porozumení čítanému]]

**5. Čas štúdia klesol o 27 % a spolu s ním kleslo aj zapamätanie ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Desaťročný panel z platformy ALEKS, ktorý zahŕňa 3,2 milióna učebných interakcií a 12,2 milióna časov odpovedí v rozraďovacom hodnotení, ukazuje, čo študenti robili po príchode ChatGPT. Dizajn porovnáva typy úloh, ktoré sa dajú vložiť do chatbota (textové slovné úlohy), s typmi, ktoré vyžadujú manipuláciu s grafom v rámci platformy, a to v tom istom kurikule.

Čas strávený na úlohách náchylných na AI klesal u vysokoškolákov o 2,8 % za štvrťrok, teda o 26,9 % za jedenásť štvrťrokov. U stredoškolákov klesol o 31,3 %, u žiakov druhého stupňa o 9,0 % a u piatakov sa neprejavila žiadna zistiteľná zmena. Pokles úplne zmizol pri [[remote-proctoring|dohľade]], čo je rozhodujúci test: keď nástroj nebol dostupný, študenti trávili rovnaký čas ako predtým. Položky zapamätania pod dohľadom ukázali 25 % kumulatívny pokles šance na správnu odpoveď.

Vekový gradient je pre produktové tímy signálom o dizajne. Premennou, ktorá sa hýbe, je čas precvičovania a hýbe sa najviac tam, kde je úlohu najľahšie odovzdať. Pre učiteľov je čas strávený úlohou lacným včasným varovaním: kohorta, ktorá rovnaké úlohy dokončí oveľa rýchlejšie, sa pravdepodobne neučí to isté.

Pozri aj: [[reducing-over-reliance|Znižovanie nadmernej závislosti od AI]]

**6. Známky z domácich úloh stúpli o 18 %, kým skúšky bez pomôcok klesli o 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26 811 študentov v ročníkoch 7 až 12 v Číne, sledovaných 30 mesiacov, pričom generatívna AI bola v kohortách zavádzaná v rôznom čase. Skóre domácich úloh stúplo o 18 % a čas dokončenia klesol o 30 %, zo 64 na 45 minút. Mesačné skúšky bez pomôcok klesli o 20 % oproti priemeru základnej úrovne v priebehu šiestich mesiacov a prijímacie skúšky s vysokými stávkami klesli o 18 % až 24 % po približne dvoch rokoch.

Načasovanie ukazuje mechanizmus. Približne 81 % používateľov AI dokončilo domácu úlohu rýchlejšie než najrýchlejší študent bez AI a potom si na skúškach viedlo slabo. Menšina, ktorá si udržala čas na domácu úlohu porovnateľný s nepoužívateľmi, sa učila rovnako dobre ako ktokoľvek iný. Straty boli najväčšie v spoločenských vedách, potom v STEM a potom v jazykoch, a väčšie u výkonných študentov.

Dokončenie domácej úlohy je slabou náhradou za dosiahnutý výsledok a rozdiel sa objaví do šiestich mesiacov, dávno predtým, než sa pohne výsledok prijímacích skúšok. Učitelia môžu konať skôr: hodnotené dôkazy ponechajte bez pomôcok a domácu prácu berte ako precvičovanie, ktorého čas dokončenia je viditeľný.

Pozri aj: [[checking-whether-educational-ai-works|Overovanie, či vzdelávacia AI funguje]]

**7. Každý testovaný doučovateľ zlyhal v pedagogike a v rozhovore zlyhával horšie ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors testoval 11 doučovateľov, od modelov s otvorenými váhami od 3,8B do 72B až po GPT-5-mini, v matematike, fyzike a chémii, proti taxonómii 11 dimenzií a 48 čiastkových rizík odvodených z [[learning-theories|vedy o učení]]. Jeho kategórie zlyhania sú pedagogické: nadmerné prezrádzanie odpovedí, upevňovanie mylných predstáv a opúšťanie [[scaffolding|lešenia]]. Každé z nich v danom okamihu vyzerá užitočne, pretože študent rýchlo dostane správnu odpoveď.

Každý model vykazoval širokú pedagogickú škodu. Väčšie modely neboli spoľahlivo bezpečnejšie a všeobecná užitočnosť korelovala s pedagogickou bezpečnosťou len slabo. Miera škody stúpla zo 17,7 % pri jednokolových výmenách na 77,8 % v rozhovoroch o piatich až ôsmich kolách.

Jednokolové hodnotenia nie sú dôkazom bezpečného doučovateľa a produktové tímy by okolo toho mali stavať svoje testovanie. Model, ktorý prejde jednorazovou kontrolou užitočnosti a bezpečnosti, môže zlyhať vo väčšine skutočného rozhovoru. Vedúci pracovníci kupujúci doučovateľa potrebujú tri odpovede: zadržiava riešenia, skúma mylné predstavy a vydrží celé sedenie. Ukážka od dodávateľa s jednou výmenou neposkytuje ani jednu z nich.

Pozri aj: [[pedagogical-safety|Pedagogická bezpečnosť]]

**8. Prípady porušenia pravidiel stoja na tenších dôkazoch, než naznačujú obvinenia ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz a kolegovia zakódovali každý prípad porušenia pravidiel súvisiaci s generatívnou AI na jednej austrálskej univerzite za tri roky: 1 162 prípadov s 1 855 dôkazovými položkami, pričom každá bola hodnotená z hľadiska relevantnosti, dôveryhodnosti a dôkaznej sily.

Obvinenia z generatívnej AI stúpli z 11,9 % prípadov porušenia pravidiel v roku 2023 na 36,9 % v roku 2025, kým celkový objem prípadov zostal rovnaký. 58 prípadov, teda 5 % z celkového počtu prípadov GenAI, stálo len na tvrdení bez akejkoľvek dôkazovej položky. Výstup detektorov bol zriedkavý a slabý: správy Turnitin alebo o podobnosti nemali dôkaznú silu v 73 položkách a samostatný výstup GPTZero mal nízku dôveryhodnosť v 69 položkách. Najsilnejšie dôkazy prišli z vyšetrovania, nie z obvinenia, pričom ústne priznania z rozhovorov tvorili 410 položiek s 97,2 % silou. [[hallucination-risk|Vymyslené odkazy]] boli najväčším štrukturálnym posunom, 22,3 % položiek, s rastom z 10,4 % v roku 2023 na 30,0 % v roku 2025.

Pre vedúcich pracovníkov je ponaučenie procedurálne. Prípad postavený na skóre detektora neprežije odvolanie a vyšetrovanie, ktoré sa začína nástrojom namiesto rozhovoru, produkuje slabé spisy. Učitelia môžu konať na základe artefaktu, ktorý sa stále objavuje: vymyslené odkazy sú bežné a kontrola odkazov je lacná.

Pozri aj: [[should-we-use-ai-detectors|Používanie detektorov AI]]

**9. Sebadôvera učiteľov vo vlastnú AI gramotnosť takmer nesleduje ich meranú zručnosť ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 učiteľov základných a stredných škôl vyplnilo sebavýpovedný prieskum AI gramotnosti a objektívnu mieru výkonu postavenú na tom istom rámci: koncept, používanie, hodnotenie a etika. Korelácie medzi nimi sa pohybovali od 0,07 do 0,24.

Analýza latentných profilov našla šesť skupín. 43 učiteľov sa hodnotilo trvalo vysoko, pričom v objektívnej miere dosiahli nižšie skóre. 59 vykazovalo opak. Zvyšok sa zoskupil okolo priemeru alebo sa rozdelil podľa predchádzajúcich skúseností s AI.

Pre rozvojových pracovníkov pre učiteľov nie je [[self-assessment|sebahodnotenie]] analýzou potrieb. Prieskum, ktorý sa učiteľov pýta, akí sú si istí, prefinancuje sebaistých a nedostatočne obslúži tichých, a tieto skupiny nie sú totožné s kompetentnými a tými, ktorí zápasia. Krátke výkonové úlohy ich od seba oddelia. Výskumníci by mali nízke korelácie brať ako varovanie o meraní: každá štúdia [[ai-literacy|AI gramotnosti]] postavená na [[self-report-measures|sebavýpovedi]] meria sebadôveru.

Pozri aj: [[faculty-development-ai|Rozvoj učiteľov, ktorý mení prax]]

**10. Hodnotenie AI znevýhodňuje študentov, ktorí píšu horšie ([[ai-scoring-language-bias-physics|Feser a Tschisgale, 2026]]).**

Vysvetlenia z fyziky od 116 stredoškolákov boli ohodnotené 9 prístupmi strojového učenia a 2 prístupmi veľkých jazykových modelov a potom porovnané s hodnotením expertov. Zhoda s expertmi sa pohybovala od 67,2 % do 78,4 %, čo znie prijateľne, kým sa chyby nerozložia.

Každý prístup podcenil konceptuálne porozumenie pri vysvetleniach s nižšou jazykovou kvalitou. Skreslenie išlo jedným smerom: silnejšie písanie nebolo nafúknuté. Vzorec zrkadlí to, čo bolo hlásené pri samotných učiteľoch fyziky, čo naznačuje, že ťažkosť spočíva vo vyvodzovaní porozumenia z prózy, a to u ľudí rovnako ako u modelov.

Pracovníci zodpovední za hodnotenie a produktové tímy musia uvádzať mieru podcenenia podľa jazykovej kvality, nie len celkovú zhodu s expertmi, pretože priemer skrýva skupinu, ktorá utrpí. Kto hodnotí [[multilingual-learning|mnohojazyčných študentov]], mal by odpovede s nízkou jazykovou kvalitou posielať na [[human-in-the-loop-ai|ľudské posúdenie]] alebo navrhovať úlohy, ktoré nezávisia od prózy.

Pozri aj: [[ai-grading-fairness-reliability|Spravodlivé a spoľahlivé hodnotenie AI]]

## Čo má týchto desať spoločné

Tri štúdie merajú dve veci naraz: čo študenti vytvoria s nástrojom a čo dokážu bez neho. Bastani, Rismanchian a Strömberg všetci nachádzajú rozchod medzi nimi a ako učenie sa správa iba miera bez pomoci. Štyri závisia od dizajnového rozhodnutia, nie od modelu: usmernenia u Bastaniho, pedagogika zabudovaná do Kestinovho doučovateľa, písanie, ktoré Kreijkes ponechal v úlohe, a viackolové nastavenie, ktoré testoval SafeTutors. Tri skúmajú systém okolo nástroja, teda dôkazy použité v prípadoch porušenia pravidiel, spôsob merania kompetencie učiteľov a jazykové predpoklady v [[automated-assessment|automatickom hodnotení]]. StudentBench ustanovuje rovnocennosť na štandardizovanom teste, teda výsledok, v ktorom sa stroj najľahšie vyrovná človeku. Bastani sa objavuje v dvoch skupinách, pretože poskytuje aj medzeru, aj dizajnovú opravu.

Zostávajú tri otázky, ktoré sa oplatí preniesť do každého rozhodnutia o kurze alebo produkte. Čo by mal študent dokázať, keď nástroj zmizne? Čo od neho činnosť žiada, kým je otvorený? Aký dôkaz by o mesiac ukázal rozdiel?

## Kde sú tieto dôkazy slabé

Tieto štúdie zdieľajú [[limitations-in-aied-research|obmedzenia výskumu AI vo vzdelávaní]] ako celku. Dve z najväčších sa odohrávajú v Turecku a Číne, tri v Spojených štátoch, jedna v Anglicku, jedna v Austrálii a hodnotiaca štúdia v Nemecku. Jedna je referenčným meraním komerčných modelov, nie terénnou štúdiou. Dominuje stredoškolská matematika, nasledujú fyzika a informatika. Veľmi málo štúdií skúma [[humanities-education|písanie v humanitných vedách]] vo veľkom rozsahu, odborné vzdelávanie alebo študentov so zdravotným postihnutím.

Iba čínsky panel a panel ALEKS pozorujú študentov viac než dva roky po zavedení a čínski autori tvrdia, že kratšie štúdie systematicky podceňujú dlhodobú sankciu. Šesť z týchto výsledkov sú preprinty alebo pracovné dokumenty, ktoré neprešli recenzným konaním: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang a Feser. Štúdie Bastani, Kestin, Kreijkes a Munoz sú publikované v recenzovaných časopisoch.

Nulové a negatívne výsledky sú v tejto literatúre zriedkavé, takže publikovaný záznam pravdepodobne nadhodnocuje, ako často AI pomáha. Tieto štúdie sú najlepším súčasným usmernením pre desať rozhodnutí a žiadna z nich otázku neuzatvára.

## Kam ďalej

[[does-ai-help-students-learn|Pomáha AI študentom učiť sa?]] je širší prehľad dôkazov za týmito tvrdeniami. [[redesign-assessment-ai-era|Ako by sa malo hodnotenie prepracovať pre éru AI?]] rozvíja hodnotiacu polovicu ďalej. Pre prípady akademickej integrity [[reduce-ai-cheating|Ako znížiť podvádzanie s AI?]] pokrýva procesné dôkazy a politiku. Pre zistenia o profesijnom rozvoji je sprievodnou stránkou [[faculty-ai-competencies|Aké kompetencie v oblasti AI potrebujú učitelia?]] a [[addressing-common-misconceptions-ai-education|Ako môžeme riešiť bežné mylné predstavy o AI vo vzdelávaní?]] sa zaoberá námietkami, ktoré pravdepodobne začujete od kolegov.
