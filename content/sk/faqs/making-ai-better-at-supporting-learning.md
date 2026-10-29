---
title: "Ako môžeme dosiahnuť, aby AI lepšie podporovala učenie v našom predmete?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Lístok v systéme hovorí „doladiť model na materiáloch kurzu“. Rozpočet je schválený, GPU je rezervovaná na budúci mesiac a doktorand má zostaviť dátovú sadu. Nikto na hovore sa nepýtal, koľko boduje obyčajný prompt alebo koľko boduje fulltextové hľadanie na tých istých otázkach.

Najprv si položte tieto dve otázky. V tejto vedomostnej báze je rozdiel medzi všeobecným modelom a modelom kompetentným v kurze väčšinou problém ukotvenia a promptovania a dôkazy pre toto poradie sú nezvyčajne priame: štúdia kurzového asistenta zistila, že prvotným rozhodnutím bolo vyhľadávanie, nie model, a všeobecný model bez ukotvenia bodoval *pod* úrovňou obyčajného TF-IDF východiska.

Tréning je skutočný a niekedy nevyhnutný. Je to tretia alebo štvrtá vec, ktorú treba skúsiť, a práca nižšie je usporiadaná tak, aby ste zistili, ktorý stupeň skutočne potrebujete, skôr než miniete výpočtový rozpočet štvrťroka.

## Stručná verzia

**1.** Zaznamenajte, koľko boduje obyčajný prompt a koľko boduje triviálna lexikálna metóda, skôr než čokoľvek zmeníte. To druhé číslo vás drží v čestnosti.

**2.** Postavte vyhľadávanie nad svoje vlastné materiály pred model. Je to najväčší jednotlivý prínos hlásený tu vzhľadom na cenu a je reverzibilný.

**3.** Navrhnite prompt proti svojej rubrike a iterujte, kým sa zlepšovanie nezastaví. Plató je signál, že tréning môže niečo pridať.

**4.** Prispôsobte váhy pomocou [[llm-training-and-fine-tuning|LoRA]], keď je cieľ stabilný a úzky: formát, rubrika, čitateľská úroveň, odborová slovná zásoba.

**5.** Dotrénujte, keď je problémom správanie a nie obsah, a odmenu napíšte proti meradlu, o ktorom očakávate, že bude obchádzané.

**6.** Trénovaciu sadu stavajte na úrovni krokov. Dáta len s odpoveďami nevedia naučiť miskoncepciu.

## Získajte východisko, ktoré dokážete prekonať

Skôr než čokoľvek zmeníte, zaznamenajte, čo vráti obyčajný prompt. Potom zaznamenajte, čo vráti triviálna metóda.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Štúdia kurzového asistenta nad vedomostnou bázou]] stojí za prečítanie už len pre toto. Lokálny LLM bez vyhľadávania dosiahol presnosť **52,3 %**. Východisko TF-IDF, lexikálna metóda stará desaťročia, dosiahlo **55,4 %**. Model bol horší než klasická metóda.

Tento krok vynechajte a nedokážete povedať, či vaše doladenie pomohlo. Horšie, môžete nasadiť systém, ktorý prekoná fulltextové hľadanie, a zistíte to až vtedy, keď to spomenie asistent výučby. Dve čísla v tabuľke, získané za jedno popoludnie, chránia zvyšok rozpočtu.

## Ukotvite model vo vlastných materiáloch

Pridanie [[rag|vyhľadávaním rozšíreného generovania]] nad materiálmi kurzu, bez akéhokoľvek doladenia, zdvihlo ten istý systém z 52,3 % na **66,6 %**. Ten prínos prišiel z indexu a má vlastnosť, ktorú tréningový beh nemá: keď sa vaše dokumenty zmenia, preindexujete ich.

Dve ďalšie zistenia ukazujú tým istým smerom. Prehľad PRISMA s 23 empirickými štúdiami o prispôsobovaní AI pre [[writing-education|výučbu písania]] zistil **dominanciu promptového inžinierstva (N = 13) pred doladením (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Kde vedomostná báza musí zostať aktuálna, vyhľadávanie je jediná páka, ktorá zostáva aktuálna bez opakovaného tréningového behu.

Vyhľadávanie má aj pedagogickú formu. Ukotvenie modelu vo vlastných vypracovaných príkladoch a rubrikách je spôsob, ako zostane vnútri [[scaffolding|lešenia]], ktoré ste navrhli, a odpovedá na úrovni, ktorú ste nastavili, namiesto toho, aby sa odklonil k všeobecným radám. Ten odklon je najčastejšia sťažnosť na hotových tútorov a je to problém vyhľadávania častejšie než problém váh.

## Píšte prompt proti rubrike a sledujte plató

Promptová práca nie je prípravná fáza, ktorú robíte pri čakaní na GPU. Dve zistenia ukazujú, čo dosiahne sama:

- **Promptovanie vedené rubrikou, iteratívne spoločne spresňované, zdvihlo zhodu LLM a človeka na študentskej dizajnérskej práci z 54,75 % na 81,25 %** (Cronbachova alfa 0,393 až 0,798), bez akéhokoľvek doladenia ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Literatúrou podložený vlastný prompt vyvolal cieľové matematické [[misconceptions|miskoncepcie]] s prítomnosťou **0,98** oproti **0,40** pri širokom prompte ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Praktickým signálom je **plató**. V štúdii generovania položiek sa iteratívne spresňovanie promptu prestalo zlepšovať a doladenie GPT-4.1 *na optimalizovanom prompte* potom pridalo zostávajúci prínos ([[gpt-item-generation-l2-listening-2026]]). Plató po skutočnej promptovej práci je dôkaz, že tréning má priestor niečo pridať. Siahať po tréningu skôr, než naň narazíte, je hádanie a hádanie stojí mesiac.

Všimnite si, čo výsledok generovania položiek znamená pre poradie. Doladenie bolo postavené na optimalizovanom prompte, takže promptová práca nebola premrhaná, keď tím napokon trénoval. Lacný stupeň je aj špecifikáciou pre ten drahý.

## Prispôsobte váhy, keď je cieľ stabilný a úzky

Adaptácia sa vypláca, keď potrebujete, aby model spoľahlivo držal vlastnosť: čitateľskú úroveň, výstupný formát, odbor, ktorý mu chýba. Opakujúce sa zistenie je, že **cielenie prekonáva veľkosť**.

- Tri modely s **8B** doladené na expertne navrhnutom detskom čítacom kurikule prekonali zero-shot GPT-4o a Llama 3.3 70B v metrikách obtiažnosti, so zanedbateľnými bezpečnostnými problémami. Autori to rámujú ako **kontrolovateľnosť pred rozsahom** ([[llm-children-reading-story-generation]]).
- Inštrukčná dátová sada s **24 795 príkladmi** ukotvená v indických systémoch poznania priniesla **7B** doladenie so skóre **6,39** na externej päťčlennej porote sudcov, len **0,15** od silného všeobecného referenčného modelu pri zlomku nákladov na nasadenie. Ten istý základný model dosiahol bez doladenia **takmer nulu v odborovo špecifických dimenziách** ([[iks-instruct-dataset-indian-knowledge]]). Ten rozdiel medzi kompetentnosťou všeobecne a kompetentnosťou tu je celý argument pre odborovú adaptáciu.
- Jediný adaptér [[llm-training-and-fine-tuning|LoRA]] trénovaný na približne **3 900** zlúčených oznámkovaných príkladoch priviedol päť malých otvorených modelov (4B až 30B) na úroveň alebo lepšie než ľudský hodnotiteľ v dvoch skúškach z informatiky ([[llm-graders-computer-science-exams-2026]]). Jeden adaptér, jedna dátová sada, niekoľko základných modelov: to je tvar nasadenia, ktorý malý tím dokáže prevádzkovať.

Slovo *stabilný* v nadpise nesie váhu. Formát, rubrika, čitateľská úroveň a odborová slovná zásoba sú stabilné ciele. Próza naložená úsudkom taký cieľ nemá, a tam adaptácia zlyháva, ako ukazujú ďalšie dve časti.

## Zmeňte správanie, keď problémom sú odpovede

Adaptácia učí model *čo produkovať*. Dotréning ho učí *ako sa správať*. Pri tútoringu je ten rozdiel celý problém: všeobecné modely sú dotrénované na ľudskej preferencii užitočnosti, čo znamená odpovedať rýchlo, a učenie vyžaduje zadržať odpoveď.

Najsilnejšie vzdelávacie výsledky v tomto korpuse žijú tu. Odmenový model EduQwen výslovne uprednostnil **navádzajúce odpovede pred priamymi** a jeho trojstupňová pipeline dosiahla **96,52 %** na meradle CDPK oproti **90,55 %** Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Simulátor písania SWIM sa posunul z promptovania ukotveného v rubrike (najlepšie QWK **0,577**) k supervidovanému doladeniu (**0,474 ± 0,023**) a k učeniu posilňovaním (**0,618 ± 0,005**) naprieč každou črtou a promptom ([[swim-student-writing-simulation-2026]]).

Čítajte čísla SWIM pozorne, pretože stredný krok išiel späť. Supervidované doladenie na ukážkach urobilo simulátor horším než prompt, z ktorého vychádzal, a stratu získal späť až odmenový signál, ktorý potom prekonal východisko. Ak sa váš plán zastaví pri supervidovanom doladení, plán môže byť obchádzkou.

## Dohliadajte na úrovni krokov

Jedno zistenie sa tu ľahko prehliadne a je drahé ho ignorovať: **kvalita supervízie prekonáva jej množstvo**. Modely doladené na inštrukcie sa naučili algebraické miskoncepcie len vtedy, keď boli trénované na **stopách riešenia na úrovni krokov**. Trénované len na konečných odpovediach, presnosť zostala **pod 30 % pri každej veľkosti dát** ([[misconception-acquisition-dynamics-llms-2026]]).

Ak sú vaše trénovacie príklady dvojice otázka a správna odpoveď, trénujete nesprávnu vec a pridávanie príkladov to nenapraví. Potrebujete medzistupňovú prácu: nesprávny obrat, krok, v ktorom sa študent stratil, opravu. Zbierať to je problém dátového inžinierstva s pedagogickým obmedzením a obvykle to znamená logovať sedenia namiesto zoškrabovania kľúčov odpovedí.

## Kde adaptácia potichu zlyháva

Toto je časť, ktorú nadšenie preskakuje.

**Text naložený úsudkom.** V WrAFT ten istý projekt, ktorý úspešne doladil model na *bodovanie* esejí (QWK 0,84), produkoval skrátený a neparsovateľný výstup, keď ho doladil na *spätnú väzbu*, zatiaľ čo priame promptovanie Claude 3.7 produkovalo spätnú väzbu, ktorú učitelia ohodnotili najlepšie ([[wraft-automated-writing-evaluation-argumentative-2026]]). Doladenie naučilo model trafiť skóre a bodovanie bolo to jediné, čo sa naučil.

**Prenos medzi modelmi.** Rozsah nie je spoľahlivý prediktor následného výkonu pri adaptácii LoRA a **identické hyperparametre produkovali kvalitatívne odlišné správanie naprieč architektúrami** ([[aiawe-automated-writing-evaluation]]). Recept, ktorý fungoval na jednom modeli, nie je recept.

**Architektúra pred počtom parametrov.** Doladenie troch otvorených modelov text na obraz na 1 000 obrázkoch jadrovej techniky s popismi podstatne zlepšilo Stable Diffusion XL, prinieslo obmedzené zisky pre SD-v3.5-Medium a neprinieslo **žiadne merateľné zlepšenie pre Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Problémom bola validácia.** Netrénovaný frontier model GPT-4 produkoval pri tvorbe tútorovskej spätnej väzby približne **35 %** príliš všeobecných, nesprávnych alebo odpoveď prezrádzajúcich rád a jeho vlastné automatické kontroly kvality sa nezhodovali s ľudským úsudkom ([[reddig-maclellan-personalized-feedback-llm-2026]]). To je problém filtrovania a LoRA ho nevyrieši.

Vzorec naprieč všetkými štyrmi: adaptácia spoľahlivo posúva model k cieľu, ktorý dokážete špecifikovať a bodovať. Nepridáva úsudok a pipeline, ktorému chýba kontrola, aj tak nasadí zlý výstup.

## Rozpočítajte adaptáciu čestne

Pre stupeň adaptácie je latka nižšia, než väčšina tímov predpokladá: **niekoľko stoviek až niekoľko tisíc príkladov a jedna GPU**. LoRA trénuje malý počet pridaných parametrov a základné váhy necháva zmrazené, takže z jedného adaptéra možno obsluhovať niekoľko modelov.

Hodnosť je kompromis, nie gombík na maximalizáciu. Zisk na milión parametrov adaptéra klesal monotónne s rastúcou hodnosťou a zarovnanie na úrovni kurzu bolo rozhodnutím o rozsahu a hodnosti, nie bezplatným vylepšením ([[lora-finetuned-control-systems-course-qa-2026]]).

Ktoré vrstvy adaptujete, je tiež skutočná voľba. Aktualizácia **len posledných štyroch vrstiev Transformer** analyzátora diskurzu založeného na BERT prekonala adaptáciu len hornej vrstvy aj plnohodnotné doladenie ([[bert-discourse-english-teaching-2026]]). Tri konfigurácie, tri rôzne výsledky a najlacnejšia vyhrala.

Náklad, ktorý sa ľahko podcení, je hodnotenie, ktoré je väčšie než účet za výpočet. Pozrite [[checking-whether-educational-ai-works|Ako vieme, že vzdelávacia AI funguje správne, a nielen že dobre boduje?]]

## Kalibrujte, čo očakávate

Voľba modelu a promptu spolu vysvetľujú len asi **15 %** nesúladu medzi LLM a prínosmi učenia študentov a v tej štúdii urobili zoskupenia s vážením meradla a s jednomyselným hlasovaním zarovnanie *horším* ([[educational-llm-alignment]]). Predtrénovacie dáta sú dominantná páka na to, ako sa model správa, a je to jediná páka, ktorú nemôžete potiahnuť.

Nič z toho nehovorí proti práci vyššie. Hovorí proti očakávaniu, že doladenie opraví dizajnový problém. Ak je problémom, že váš tútor odpovedá príliš ochotne, tréning to môže riešiť. Ak je problémom, že sa vaši študenti doň nezapájajú, tréning to nerieši, a číslo 15 % hovorí, že peniaze sa minú lepšie inde.

## V čom sa tímy mýlia

Doladenie je spôsob, ako naučiť model váš kurz. Vyhľadávanie nad vašimi vlastnými materiálmi zdvihlo ten istý systém z 52,3 % na 66,6 % bez akéhokoľvek tréningu a prompt spresnený proti rubrike posunul zhodu z 54,75 % na 81,25 %. Tréning učí správanie a formát oveľa spoľahlivejšie než obsah.

Väčší základný model odstráni potrebu všetkého toho. Model 8B doladený na detskom čítacom kurikule prekonal zero-shot GPT-4o a Llama 3.3 70B v metrikách obtiažnosti a doladenie 7B sa dostalo na 0,15 od silného všeobecného referenčného modelu pri zlomku nákladov na nasadenie. Veľkosť a vhodnosť sú rôzne osi a len jedna z nich sa predáva po tokenoch.

Viac dát opraví trénovaciu sadu, ktorá je postavená nesprávne. Supervízia len s odpoveďami nechala presnosť pod 30 % pri každej veľkosti dát v štúdii miskoncepcií. Rozsah nenapraví cieľ, ktorému chýba informácia, ktorú model potrebuje.

Recept, ktorý fungoval na jednom modeli, bude fungovať na ďalšom. Identické hyperparametre produkovali kvalitatívne odlišné správanie naprieč architektúrami a tá istá metóda doladenia podstatne zlepšila jeden obrazový model a neurobila nič merateľné pre iný. Znovu spustite recept na svojom základnom modeli, alebo len hádžte.

Supervidované doladenie je bezpečný stredný krok pred učením posilňovaním. V SWIM supervidovaná fáza dosiahla 0,474 oproti 0,577 z promptu, ktorý nahradila, a obnovil ju až odmenový signál. Stredný krok vás môže stáť mesiac a regresiu.

## Čo sa vám vráti

**„Rozpočet je schválený na doladenie, tak doladíme.“** Minite týždeň na východisko a index. Ak vyhľadávanie pohne číslom, doladenie je neskoršie rozhodnutie urobené s lepšími informáciami a budete mať silnejší argument preň alebo dobrý dôvod vrátiť GPU.

**„Náš problém je, že študenti to nepoužívajú.“** Tréning mení, čo model produkuje. Číslo 15 % opisuje, koľko voľba modelu a promptu vysvetľuje v nesúlade s prínosmi učenia, a angažovanosť stojí mimo toho. Zmerajte, kde študenti odpadávajú, skôr než kúpite výpočet.

**„Nemôžeme posielať študentské práce do API dodávateľa.“** Najsilnejší výsledok LoRA tu prišiel z otvorených modelov v rozsahu 4B až 30B a jeden adaptér obsluhoval niekoľko z nich. Tento tvar nasadenia je dostupný tímu s jednou GPU a bez dohody o spracovaní dát.

**„Promptovanie je hack, skutočná práca znamená tréning.“** Prehľad 23 štúdií o výučbe písania zistil, že promptovanie je dominantný prístup a doladenie stojí za ním, a najväčší hlásený prínos v tejto stránke prišiel z indexu. Prehľad aj štúdia kurzového asistenta zoradili tie stupne podľa meraného prínosu.

**„Skúsili sme promptovanie a dosiahlo plató, tak potrebujeme tréning.“** To je správne čítanie a je to jediný prípad, keď je výstup po stupňoch odôvodnený. Vezmite optimalizovaný prompt do doladenia, ako to urobil tím generovania položiek, a očakávajte, že prínos bude menší, než bola promptová práca.

**„Naše materiály kurzu sú nekonzistentné, tak vyhľadávanie vráti odpad.“** Vráti, a vyhľadávanie dedí kvalitu korpusu. Vyčistenie korpusu je lacnejšie než trénovať model, aby ho obchádzal, a prínos z 52,3 % na 66,6 % bol meraný na bežných materiáloch kurzu, nie na kurátorovanej sade.

## Čo urobiť tento týždeň

**1.** Spustite východisko len s promptom a fulltextové východisko na 50 skutočných otázkach z vášho kurzu a zapíšte obe čísla.

**2.** Namierte vyhľadávanie na materiály, ktoré už máte, a znovu spustite tých istých 50, aby bol prínos meraný proti vášmu vlastnému východisku.

**3.** Vložte rubriku do systémového promptu a iterujte týždeň. Zastavte, keď dve kolá neprinesú nič.

**4.** Auditujte svoju trénovaciu sadu na stopy na úrovni krokov. Ak sú to dvojice otázka a odpoveď, sada nie je pripravená.

**5.** Napíšte jedinú vlastnosť, ktorú potrebujete spoľahlivo držať, a rozhodnite, či je to správanie alebo obsah. To rozhodnutie vyberá stupeň.

## Kam ísť ďalej

[[training-ai-tutors-to-guide-rather-than-answer|Ako trénovať AI tútor, aby študentov viedol, a nie im odpovedal?]] pokrýva polovicu dotréningu podrobne. [[checking-whether-educational-ai-works|Ako vieme, že vzdelávacia AI funguje správne?]] pokrýva, ako zistiť, či niečo z toho fungovalo. [[developing-ai-tutor|Aké sú osvedčené postupy pre vývoj efektívneho AI tútor?]] je stránka dizajnu interakcie k tomu istému cieľu a [[designing-educational-ai-software|Aké sú osvedčené postupy pre návrh vzdelávacieho AI softvéru?]] pokrýva okolitý systém. Celá koncepčná stránka je [[llm-training-and-fine-tuning|tréning a doladenie LLM]].
