---
title: "Aké sú osvedčené postupy pri vývoji účinného AI tútora?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Váš tútor je tri týždne pred pilotom. Chat funguje, model čisto vysvetlí deriváciu a interné demo zožalo potlesk. Potom sa niekto z centra pre vyučovanie opýta na otázku, na ktorú vaša špecifikácia nemá pole: bude študent po semestri s touto vecou riešiť úlohu, keď tá vec nebude v miestnosti? Máte zoznam funkcií. Nemáte jednu vetu, ktorá hovorí, čo musí študent na konci zvládnuť sám.

Tútor je politika obalená okolo [[conversational-ai|chatbota]] a práve politika rozhoduje o tom, či sa učenie odohrá. Pomenujte kognitívnu prácu, ktorú musí študent vykonať, prinúťte systém, aby ju vyžadoval (pokus pred pomocou, rebrík nápovedí, ktorý sa vytráca, kontrola, ktorú model nedokáže predstierať), a hodnotte s vypnutým tútorom. Kvalita modelu určuje, ako dobrý rozhovor pôsobí. Politika rozhoduje o tom, čo študent dokáže v júni.

## Krátka verzia

**1.** Napíšte cieľ ako tvrdenie o výkone bez pomoci a z neho odvoďte každú funkciu. Ak sa funkcia nedá vystopovať k tej vete, je to demo funkcia.

**2.** Model študenta stavajte z dôkazov, ktoré viete zaznamenať, a každú diagnózu ukladajte ako hypotézu s hodnotou istoty, nie ako fakt.

**3.** Rebrík pomoci zafixujte v kóde, s pomenovanými priečkami, a rozhranie nech za každý krok nadol po študentovi niečo žiada.

**4.** Obsah zakotvite vo vlastných materiáloch a aritmetiku, algebru a kontrolu kódu odovzdajte deterministickým nástrojom, ktoré nemôžu halucinovať.

**5.** Zlyhania výučby testujte na celých rozhovoroch: presakovanie odpovedí, pritakávanie, posilňovanie miskoncepcií, inštrukčný drift.

**6.** Merajte fázou odňatia a oneskoreným testom, nie skóre spokojnosti.

## Napíšte cieľ ako tvrdenie o výkone bez pomoci

Tri zoznamy, napísané skôr, než niekto vyberie model:

- Čo by mali študenti potom vedieť alebo dokázať.
- Akú kognitívnu prácu musia vykonať sami.
- Čo smie tútor urobiť za nich.

Literatúra o [[intelligent-tutoring|inteligentnom tutorovaní]] upozorňuje, že účinnosť závisí od [[pedagogy|pedagogického]] dizajnu, nie od schopnosti modelu samotnej, a toto zlyhanie sa dá omylom ľahko postaviť. Tútor optimalizovaný na „dokonči úlohu“ podkope tútor optimalizovaný na „nauč sa úlohu riešiť“, a pritom prejde každým funkčným testom, ktorý napíšete, pretože oba produkujú správne konečné odpovede. Rozdiel žije v tom, čo študent urobil medzi otázkou a odpoveďou.

Druhý zoznam je miesto, kde vývojové tímy zostávajú konkrétne. Vezmite nálepku zvládnutia ako „zvládnutie derivácie“ a odmietnite, aby znamenala vytvorenie správnej derivácie. Rozdeľte ju na rozpoznanie, kedy je derivácia vhodná, interpretáciu derivácie ako okamžitej rýchlosti zmeny, výber pravidla, vykonanie postupu, vysvetlenie, prečo bola voľba správna, kontrolu primeranosti a aplikáciu na neznámu úlohu. Každá z týchto vecí je samostatná položka na zaznamenanie a každá implikuje inú reakciu, keď chýba. Toto rozloženie je aj obranou proti [[correct-answer-trap-misconceptions|pasci správnej odpovede]], kde sa študent dostane k správnej odpovedi cez chybnú úvahu a vaša analytika zaznamená úspech. [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] aj [[zhang-tutormoments-2026|When Help is Unhelpful]] opisujú verzie tohto zlyhania v prevádzke.

## Postavte model študenta skôr než rozhovor

Model študenta drží dva druhy stavu: odhady po konceptoch (limita: vo vývoji, mocninové pravidlo: zvládnuté, pravidlo súčinu: vo vývoji, reťazové pravidlo: nepreukázané) a hypotézy miskoncepcií s dôkazmi a istotou za každou z nich. Držte ich oddelene. Odhad konceptu riadi výber obtiažnosti. Hypotéza riadi nasledujúcu otázku.

Dávajte pozor, aby ste [[llm|LLM]] nenechali diagnostikovať samého. [[benchmark|Benchmarking]] zistil, že LLM tútori dokázali rozpoznať jasne správnu úvahu, no niekedy odmietli platné alternatívy alebo prijali nesprávnu úvahu. Model, ktorý zachytí dobrý prípad a zle prečíta nejednoznačný, zlyháva presne u študentov, ktorí pomoc potrebujú. V doménach s dôsledkami architektúra, ktorá prežije, je **štruktúrovaná diagnóza plus flexibilný dialóg s LLM**, usporiadanie, ktoré opisuje [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]]: vlastný detektor ustanoví, čo študent pravdepodobne urobil, a model píše rozhovor okolo tohto zistenia.

Dajte diagnóze explicitnú postupnosť, ktorú model nemôže preskočiť: zisti, over, reaguj. Model smie navrhnúť [[misconceptions|miskoncepciu]] ako hypotézu, potom ju musí overiť proti študentovej skutočnej práci alebo cielenou otázkou, až potom tútor na ňu reaguje. Bez tohto kroku systém vymyslí dôkaz a potom študenta vedie k oprave chyby, ktorú nespravil, čo je zbytočné a mierne urážlivé.

Dôkazy, ktoré sa oplatí zaznamenávať, v približnom poradí užitočnosti: nedávne pokusy s medzikrokmi, preukázané vedomosti po konceptoch, správanie pri hľadaní pomoci (ktoré je samo signálom o istote) a samohlasovaná istota tam, kde ju zbierate. Obtiažnosť a pomoc prispôsobujte z tohto záznamu a študentov najnovší prompt berte ako jeden vstup doň. Jediný prompt je zlý odhad toho, čo študent vie, a tútor, ktorý naň reaguje, bude kmitať.

## Zafixujte rebrík pomoci a potom nechajte rozhranie zaň platiť

Priečky napíšte skôr, než napíšete prompt, pretože rebrík je produktové rozhodnutie s pomenovanými stavmi a nastavenie tónu ho nedokáže vyjadriť. Použiteľná postupnosť:

1. Samostatný pokus.
2. Metakognitívna otázka o tom, čo študent už skúsil.
3. Koncepčný podnet.
4. Určenie príslušného pravidla.
5. Nastavenie časti úlohy.
6. Rozpracovaný medzikrok.
7. Rozpracované riešenie.
8. Študent vysvetlí riešenie.
9. Študent vyrieši porovnateľnú úlohu bez pomoci.

Podpora sa vytráca s rastúcou kompetenciou, čo je mechanizmus v centre [[scaffolding|lešenia]]. Zhliadnutie rozpracovaného riešenia nepreukazuje zvládnutie, takže každá relácia, ktorá dosiahne siedmu priečku, vám dlhuje deviatu, kým sa počíta ako dokončená.

Kauzálny dôkaz pre to, aby ste rebrík vôbec stavali, pochádza z terénneho experimentu, v ktorom nechránené rozhranie GPT zvýšilo výkon v matematike s pomocou a znížilo následný výkon na skúške bez pomoci. Tútor, ktorý dáva nápovedy, tento učebný trest do veľkej miery odstránil ([[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]). Obmedzenie je architektonické. Ten istý model, s iným správaním pri pomoci, produkoval opačné výsledky na meradle, na ktorom záleží.

Väčší randomizovaný terénny experiment s viac než 6 000 žiakmi stredných škôl na platforme pre prácu založenú na zvládnutí ukazuje, ako rebrík vyzerá v záznamoch. Žiaci pridelení k podpore AI postupovali pomalšie a skúsili menej otázok, a odpovedali presnejšie. Najjasnejší mechanizmus bola správnosť nasledujúceho pokusu po chybe: bolo treba menej pokusov na návrat k správnej odpovedi. Tento vzor je produktívne spomalenie a je to podpis, ktorý má rebrík nápovedí zanechať ([[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]]).

Tá istá štúdia prináša varovanie o vašich vlastných paneloch. Požiadavka troch správnych odpovedí za sebou prudko zvýšila zvládnutie definované platformou bez zistiteľných ziskov v oneskorenom teste o týždeň neskôr. Najsilnejší dôkaz z oneskoreného testu sa objavil len tam, kde AI sedela vnútri pracovného postupu zvládnutia (koeficient 0,085), nie tam, kde bola dostupná ako samostatný prístup. Ak je vašou metrikou úspechu počítadlo sérií, dodáte systém, ktorý optimalizuje sériu.

Trenie v rozhraní patrí do toho istého dizajnového priechodu. Neobmedzené nápovedy za viditeľným tlačidlom menia celý rebrík na skratku a predčasné žiadosti o nápovedu s povrchným čítaním sa spájajú s nižšími [[learning-gains|učebnými ziskami]]. Nahradenie `[Hint][Hint][Hint][Show Answer]` otázkami „čo ste už skúsili?“ a „ktorá časť vás blokuje?“ (výber pravidla, zostavenie rovnice, úprava algebry, pochopenie konceptu) stojí jednu obrazovku a nasmeruje študenta na priečku, ktorú skutočne potrebuje. Zároveň vám dá záznamové dáta, ktoré hovoria, ktorú priečku zvyčajne preskakuje.

## Odovzdajte kontrolovateľné časti kontrolórovi

Generovanie zakotvite v materiáli schválenom vyučujúcim: časti učebnice, poznámky z kurzu, rozpracované príklady, terminológia, schválené postupy, notácia, pravidlá zadaní, politiky a [[curriculum-design|kurikulárne]] zdroje. Generovanie obohatené vyhľadávaním proti tomuto korpusu znižuje [[hallucination-risk|riziko halucinácie]] a neodstraňuje ho, ako uvádza [[rag|RAG]]. V rozhraní ukážte citácie alebo pôvod tam, kde by študent mohol tvrdenie skontrolovať, pretože citácia je to, čo robí zakotvenie spätne auditovateľným.

Zakotvenie robí aj prácu, ktorú metrík presnosti obchádzajú. Kurz má schválené postupy a tútor, ktorý zavedie matematicky platnú techniku, ktorú kurz nepoužíva, naučil študenta niečo, za čo bude mať zníženú známku. Vyhľadávanie v kurzovej vrstve je spôsob, akým tútor zostáva vnútri množiny postupov.

Pre domény s formálne kontrolovateľnými odpoveďami pridajte deterministické nástroje: kalkulačky, systémy symbolickej matematiky, vykonávanie kódu, znalostné grafy, validátory založené na pravidlách a riešiče [[discipline-specific-aied|špecifické pre odbor]]. Dôležitá je deľba práce. LLM spracúva vysvetlenie a dialóg. Symbolický engine overuje algebraickú ekvivalenciu, derivácie, integrály, riešenia rovníc, kritické body a numerické aproximácie. Nesprávny medzikrok, ktorý overovač zachytí, sa stane vzdelávacím momentom. Nesprávny medzikrok, ktorý nezachytí nič, sa stane miskoncepciou, ktorú si študent odnesie na skúšku.

## Vyžadujte, aby študent so spätnou väzbou niečo urobil

Spätná väzba, ktorá hovorí „správne“, „nesprávne“ alebo „dobre“, je bodovacie podujatie oblečené do rozhrania výučby. Vedomostná báza chápe [[feedback|spätnú väzbu]] ako slučku poskytnutia a prevzatia: spätná väzba podporuje učenie, keď jej študenti rozumejú a konajú podľa nej, a druhá polovica je tou, ktorú systémy zvyčajne preskakujú. Tútora stavajte tak, aby pomenoval príslušný myšlienkový krok, povedal, čo treba prehodnotiť, dal jednu konkrétnu nasledujúcu akciu a požiadal študenta o predpoveď alebo vysvetlenie skôr, než sa spätná väzba odhalí.

Postupnosť, ktorá to nesie, je najprv študent, potom AI, potom znova študent. Študent generuje, vyberá, zdôvodňuje, hodnotí alebo reflektuje; tútor reaguje; študent s reakciou niečo urobí. Štruktúru ťahov navrhnite tak, aby to nebolo voliteľné. Systém, v ktorom model na jednu otázku vyprodukuje tri odseky, učí študenta pýtať sa a čítať.

Dlhodobým cieľom je internalizácia. Študenti by mali nakoniec sami viesť tútorove stratégie kladenia otázok a [[problem-solving|riešenia problémov]], čo je argument [[agency|aktérstva]] a dôvod, prečo má rebrík najvyššiu priečku, na ktorej tútor mlčí.

## Navrhujte pre to, čo sa stane v štyridsiatom ťahu

Pedagogická bezpečnosť je samostatný testovací balík od bežnej bezpečnosti chatbota a väčšina tímov dodáva len ten druhý. Toxicita a odolnosť voči jailbreaku vám nepovedia nič o tom, či tútor vydá odpoveď študentovi, ktorý sa opýta dvakrát, či bude súhlasiť s nesprávnym postupom, pretože študent znel isto, či sa počas dlhej relácie vychýli z množiny postupov kurzu alebo či dotlačí študenta k [[cognitive-offloading|kognitívnemu odľahčeniu]]. [[ai-sycophancy|Pritakávanie]] je to, čo prejde prvé, pretože súhlas sa číta ako láskavosť a vaše preferenčné dáta ho odmeňujú.

Testujte presakovanie odpovedí, posilňovanie miskoncepcií, nadmerný súhlas, nevhodnú obtiažnosť, odľahčenie, predpojaté zaobchádzanie, stratu aktérstva študenta, inštrukčný drift a prehnanú istotu v nesprávnych vysvetleniach. Testy spúšťajte na rozšírených rozhovoroch, nie na jednotlivých ťahoch, pretože pedagogické zlyhania sa kumulujú: prvých desať ťahov môže byť vzorných a jedenásty môže reláciu zrušiť. Tútor má byť láskavý a správny naraz, aj keď študent trvá na miskoncepcii. [[pedagogical-safety|Pedagogická bezpečnosť]] a [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]] rozkladajú taxonómiu zlyhaní.

## Dajte dátovú architektúru do toho istého dizajnového dokumentu

Zbierajte len tie údaje o študentoch, ktoré sú pedagogicky nevyhnutné, a vedzte pri každom poli povedať, prečo existuje. Tam, kde uchovávate trvalú pamäť alebo [[student-modeling|model študenta]], urobte jeho účel študentovi viditeľným, dajte mu primeranú kontrolu nad ním, chráňte citlivé informácie, definujte retenciu a dôsledkové rozhodnutia smerujte vyučujúcemu alebo inej [[human-in-the-loop-ai|ľudskej]] kontrolnej zásuvke. Model študenta, ktorý potichu hromadí odhad istoty, ktorý študent nikdy neuvidí, je problém ochrany údajov aj pedagogický problém.

Auditujte správanie naprieč jazykovým zázemím, úrovňami schopností, kultúrnymi kontextmi, potrebami [[accessibility|prístupnosti]] a úrovňami [[prior-knowledge|predchádzajúcich vedomostí]] a skúseností s AI. Rozdielny výkon pri tom istom cieli je chyba, ku ktorej je pripútaný študent, a v agregovanom čísle presnosti sa neobjaví.

Jedno rozhodnutie o prístupnosti si zaslúži vlastný riadok: nerobte zo sofistikovaného [[prompt-engineering|promptovania]] predpoklad dobrého vyučovania. Ak tútor dobre učí len vtedy, keď študent napíše starostlivý prompt, postavili ste systém, ktorý zvýhodňuje študentov, ktorí už vedia, ako s modelmi hovoriť. Tútor má študentom pomôcť formulovať produktívne otázky, čo je aj zručnosť [[metacognition|metakognície]], ktorú sa oplatí mať.

## Inštrumentujte interval odňatia

Metriky relácií vám nepovedia, či vec funguje. Presnosť odpovedí, dĺžka rozhovoru, preferencia študentov, spokojnosť, dokončenie úlohy a [[student-engagement|angažovanosť]] rastú aj pri systémoch, ktoré nič neučia, pretože študenti majú pomoc radi a pomoc sa ľahko meria. Hodnoťte výkon bez pomoci, oneskorené zapamätanie, prenos na nové úlohy, opravu miskoncepcií, nezávislosť študenta, prevzatie spätnej väzby a [[differential-effects-across-learner-groups|rozdielne účinky naprieč skupinami študentov]]. Metódy má [[ai-ed-evaluation|hodnotenie AI vo vzdelávaní]] a [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]] argumentuje, že konštruktom je správanie.

Dve štúdie zostrujú pravidlo proti [[self-report-measures|samohlasovacím meraniam]] a krátkym horizontom. Pilot s 38 začiatočníkmi v programovaní zistil silnú asociáciu medzi používaním [[generative-ai|generatívnej AI]] a *vnímaným* učením (rs=0,802, p<0,001), kým ukazovatele autonómneho pokroku bez podpory vyučujúceho skórovali najnižšie. Autori nazývajú túto medzeru ilúziou kompetencie a epistemickým dlhom a je to presne medzera, ktorú metrika spokojnosti odmeňuje ([[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]]).

Zásadnejšie, väčšina hodnotení sa zastaví v momente, keď sa pomoc končí. [[cognitive-washout-ai-skill-decay-2026|Dynamika kognitívneho vyplavenia]] pomenúva nemeraný interval po odňatí a formalizuje štyri výsledky: elastické odrazenie, čiastočné plató, latentné lešenie a nadmerné zotavenie. Jej krivka vyplavenia nesie časovú konštantu zotavenia, člen úplnosti zotavenia a index hysterézy, ktorý porovnáva úsilie pri opätovnom učení s pôvodným úsilím. Keďže závažnosť určuje reverzibilita, rámec argumentuje, že plánovaná prax bez pomoci by sa mala dávkovať podľa krivky zotavenia, a nie debatovať ako otázka princípu. Váš plán hodnotenia potrebuje fázu odňatia aj bezprostredný posttest a [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|randomizovaný dôkaz, že krátka pomoc znižuje neskorší výkon bez pomoci]] je dôvodom naplánovať ju skoro.

## Dajte učiteľom niečo na úpravu

Pred nasadením nechajte pedagógov testovať realistické profily študentov, bežné miskoncepcie, hraničné prípady, nepriateľské prompty, nejednoznačné odpovede a dlhé tutorské rozhovory. Pedagogické zlyhania zaznamenajte a vráťte ich do systémových promptov, tutorskej politiky, zdrojov poznatkov, [[guardrails|zábradlí]], pravidiel modelu študenta a výberu modelu. Plynulá odpoveď môže byť stále pedagogicky nesprávna a učiteľ je jediný recenzent, ktorý to vidí.

[[teacher-intervention-k12-ai-based-instruction-2026|Leeho systematický prehľad 29 štúdií K-12]] opisuje, z čoho tento dohľad pozostáva a kde sa láme. Intervencia [[teacher-role|učiteľa]] je opakujúci sa štvorfázový cyklus monitorovania, úsudku, intervencie a orchestrácie. Upozornenia AI, [[visualization|panely]] a automatické skóre „automaticky nevedú k pedagogickému konaniu“. Najsilnejšia učiteľská stratégia, ktorú prehľad nachádza, je pedagogický preklad: vybrať, prepracovať, doplniť, zhrnúť alebo vymazať spätnú väzbu chatbota namiesto jej prepustenia ďalej.

Z toho vyplývajú dve dizajnové varovania a obe odporujú obvyklej cestovnej mape. Viac informácií od AI nie je lepšie: systémy, ktoré nepretržite emitujú diagnostiku, preťažovali učiteľov a odťahovali pozornosť od ich vlastného pozorovania. Uprednostnite to, čo sa oplatí riešiť, urobte to interpretovateľným a ponúkajte odporúčania vo forme, ktorú učiteľ môže prijať, upraviť, odložiť alebo odmietnuť. Ani viac podpory pre učiteľa nie je lepšie: odloženie intervencie, aby študenti mohli pracovať samostatne, je samo expertízou. Štrukturálne podmienky, teda čas na prezeranie dát, veľkosť triedy a schopnosť fyzicky sa dostať k skupinám, ktoré pomoc potrebujú, sú súčasťou intervencie, nie zázemím logistiky. Panel postavený pre učiteľa bez voľnej hodiny sa neotvorí.

## Prípad prvý: tútor kalkulu, kde je overovanie lacné

Tútor kalkulu pre prvý semester vysokej školy má zvýšiť to, čo študenti dokážu vyriešiť a vysvetliť samostatne po jeho odňatí, nie maximalizovať správne dokončené úlohy. Matematické tutorovanie je obzvlášť náchylné na nadmerné lešenie, predčasné používanie nápovedí a nesprávnu diagnózu študentovej úvahy, a všetky tri sú viditeľné v záznamoch, ak sa pozriete ([[math-education|matematické vzdelávanie]]).

**Zakotvenie a overovanie.** Šesťvrstvová stavba: materiály kurzu a politiky vyučujúceho, potom vrstva vyhľadávania, potom engine úloh a model študenta popri symbolickom overovači a diagnostickom engine, potom vrstva pedagogickej politiky, potom konverzačné generovanie, potom študent, potom späť do modelu študenta. Overovač je dôvod, prečo je tento dizajn zvládnuteľný. Rozhoduje, či je výraz ekvivalentný, derivácia správna, integrál vyčíslený, kritický bod nájdený, a robí to bez pýtania sa modelu na názor.

**Jedna interakcia.** Pri derivovaní $f(x)=(x^2+1)\sin x$ bežný chatbot prezradí odpoveď. Tútor orientovaný na učenie vnútorne usúdi, že študent zderivoval obe zložky, ale výsledky vynásobil, čo je možná [[misconceptions|miskoncepcia]] pravidla súčinu ako $f'g'$, a najprv položí diagnostickú otázku: aké pravidlo platí, keď sa násobia dve funkcie? Potom študent napíše pravidlo súčinu symbolicky, zostaví $u$ a $v$, a až potom tútor overí konečný výraz. Všimnite si, koľko z tutorovania sa odohralo skôr, než sa k študentovi dostal akýkoľvek text modelu.

**Viaceré reprezentácie.** Spojte symbolické postupy so vzorcom, grafom, tabuľkou, slovnou interpretáciou a fyzikálnym kontextom rýchlosti zmeny. Procedurálna plynulosť a konceptuálne porozumenie vyzerajú na liste so správnymi odpoveďami rovnako a rozchádzajú sa na úlohe prenosu.

**Panel.** Ukážte agregované dôkazy namiesto nepriehľadných úsudkov: „pravidlo súčinu, 62 % preukázaného zvládnutia; bežné vzorce, 18 % vynechá jeden člen, 11 % násobí derivácie“. Individuálne diagnózy odchádzajú ako hypotézy s podpornými dôkazmi, čo je aj to, čo ich robí pre učiteľa recenzovateľnými ([[explainable-ai|vysvetliteľnosť]] je tu dôležitejšia pre učiteľa než pre študenta).

**Plán hodnotenia.** Výkon s tútorom, výkon na porovnateľných úlohách bez neho, oneskorené zapamätanie, prenos na neznáme úlohy, kvalita konceptuálneho vysvetlenia, oprava miskoncepcií, primerané proti predčasnému [[help-seeking|hľadaniu pomoci]], presakovanie odpovedí, miery falošne pozitívnych a falošne negatívnych diagnóz a rozdielne výsledky. Porovnanie, ktoré rozhoduje o projekte, je výkon s pomocou proti neskoršiemu výkonu bez pomoci. Študent, ktorý sa s tútorom posunie zo 60 % na 95 % a sám zostane na 60 %, nebol tutorovaný.

## Prípad druhý: kouč písania, kde o povolení rozhoduje fáza

Písanie nemá jedinú správnu odpoveď, takže overovaním je úsudok a dizajnová práca sa presúva na etapy. Vedomostná báza rámuje písanie ako kognitívny, sociálny a rétorický proces, čo znamená, že systém písania s AI môže učenie podporiť a tiež môže odstrániť presne to myslenie, ktoré mala úloha rozvinúť ([[writing-education|vzdelávanie v písaní]], [[coach-not-crutch-ai-writing|kouč, nie barle]]).

**Model schopností.** Sledujte argumentáciu (konkrétnosť tézy, súlad tvrdenia a dôkazu, protiargument), organizáciu (zameranie odseku, logický postup, prechody), dôkazy (relevantnosť zdroja, integrácia, interpretácia), revíziu (globálna revízia a revízia na úrovni viet, hodnotenie spätnej väzby) a štýl (jasnosť, gramatika, hlas). Každá z nich sa stáva samostatným signálom v modeli študenta, čo je to, čo cielenú spätnú väzbu vôbec umožňuje.

**Zakotvite kouča v zadaní.** Načítajte pokyny, rubriku vyučujúceho, čítania z kurzu, požiadavky na citovanie, žánrové konvencie, príklady vyučujúceho a politiku používania AI, aby spätná väzba mohla povedať „rubrika vášho vyučujúceho žiada spojiť každé hlavné tvrdenie s dôkazom aspoň z dvoch čítaní kurzu“ namiesto vymýšľania všeobecných očakávaní. Všeobecná rada je predvoleným zlyhaním nezakotveného nástroja na písanie a študenti to spoznajú do dvoch sedení.

**Nastavte povolenia po fázach.** Zapojenie AI v rôznych fázach ovplyvňuje vnímané vlastníctvo rôzne. Podpora pri plánovaní znižuje vlastníctvo menej než podpora pri tvorení textu a text vytvorený AI produkuje najväčší pokles ([[ai-writing-support-stage-ownership-2026|From Planning to Revision]]). Toto zistenie sa priamo prevádza do tabuľky povolení. Pri plánovaní kouč kladie otázky, porovnáva pozície, spochybňuje predpoklady a kritizuje osnovy, a argument negeneruje. Pri tvorení textu študent najprv produkuje prózu a kouč ju rozvíja, namiesto toho, aby ju prevzal. Pri revízii kouč diagnostikuje a tam sa zastaví: nejasné tvrdenia, chýbajúce dôkazy, dôkazy, ktoré tvrdenie nepodporujú, organizačné problémy, koncept proti rubrike. Pri editovaní, po revízii, rieši gramatiku, interpunkciu, výstižnosť a formátovanie citácií.

**Rozpracovaná interakcia.** Pri eseji o povinných [[online-teaching-and-learning|online kurzoch]] všeobecný systém prepíše študentov odsek do vybrúsenej prózy a odvedie intelektuálnu prácu. Kouč povie, čo funguje, pomenuje hlavný problém (odsek uvádza dôvody, ale nikdy nevysvetlí, prečo odôvodňujú celouniverzitný mandát), položí otázku k revízii a požiada študenta, aby vlastnými slovami dokončil vetu. Argument zostáva tam, kam patrí.

**Prioritizovaná spätná väzba.** Jedna silná stránka na zachovanie, jeden problém s vysokým dopadom, jedna otázka vyžadujúca úsudok pisateľa, jeden konkrétny cieľ revízie. Nie štyridsať komentárov. Študent, ktorý dostane štyridsať komentárov, ich triážuje podľa dĺžky, a triáž nemá nič spoločné s tým, čo je dôležité.

**Nechajte študenta posúdiť spätnú väzbu.** [[feedback-literacy|Gramotnosť v spätnej väzbe]] je učebný cieľ sám o sebe. Pravidelne sa pýtajte, či študent s návrhom súhlasí a prečo, a nechajte ho ho odmietnuť. Výstupom je [[evaluative-judgment|hodnotiaci úsudok]] namiesto poslušnosti a je to aj jediná obrana proti koučovi, ktorý sa sebavedomo mýli.

**Zachovajte hlas.** Rozlišujte chyby, problémy s jasnosťou, rétorické voľby a štýlové preferencie a posledné dve nechajte na pokoji. Kouč, ktorý „opravuje“ rétorické voľby, homogenizuje písanie smerom k štýlu, ktorý model preferuje, a najviac škodí [[multilingual-learning|viacjazyčným]] pisateľom a neštandardným rétorickým tradíciám ([[ai-feedback-quality|kvalita spätnej väzby AI]] je všeobecnou verziou tohto problému).

**Učte sa z revízií.** Ukladajte históriu revízií, nielen záverečné eseje. Opakovaný vzorec „dôkaz zavedený, ale neinterpretovaný“, ktorý sa naprieč tromi esejami zlepšuje, je najužitočnejší signál, aký systém písania môže mať, a je zadarmo.

**Hodnotenie.** Kvalita písania s AI a neskoršieho písania bez nej, schopnosť nájsť slabiny v neznámom texte, kvalita revízie, prevzatie spätnej väzby, schopnosť vysvetliť revízie, vlastníctvo, závislosť od prózy AI, zachovanie hlasu, predpojatosť naprieč dialektmi a viacjazyčnými pisateľmi, súlad s úsudkom vyučujúceho a oneskorený prenos. Dizajn, ktorý na to odpovedá, má tri ramená: písanie samostatne, AI generujúca text a kouč. Všetky tri skupiny potom píšu novú esej bez AI. Ak skupina s generovanou AI vyhrá v praxi a prehrá bez nej, systém zlepšil výkon, nie učenie. Vzorce na úrovni triedy z panela (41 % potrebuje podporu pri spájaní tvrdenia s dôkazom) sú signálom [[formative-assessment|formujúceho hodnotenia]] pre vyučujúceho.

## Porovnanie oboch stavieb

| Dizajnová otázka | Tútor kalkulu | Kouč písania |
|---|---|---|
| Hlavný predmet učenia | Matematické koncepty a riešenie úloh | Argumentácia a proces písania |
| Overovanie | Často objektívne kontrolovateľné | Zvyčajne vyžaduje kontextový úsudok |
| Deterministické nástroje | Symbolický matematický engine, kalkulačka | Kontroly gramatiky, citácií, rubriky |
| Hlavná rola AI | Diagnostikovať a lešením podopierať uvažovanie | Diagnostikovať a lešením podopierať revíziu |
| Hlavné riziko | Prezradenie riešenia | Napísanie textu za študenta |
| Dôležitá akcia študenta | Vyriešiť a vysvetliť | Vytvoriť koncept, hodnotiť a revidovať |
| Model študenta | Koncepty, postupy, miskoncepcie | Argument, dôkazy, organizácia, revízia |
| Kľúčové zábradlie | Pokus pred riešením | Próza študenta pred prepisom AI |
| Test prenosu | Nové úlohy z kalkulu bez AI | Nová úloha v písaní bez AI |
| Kritérium úspechu | Nezávislé matematické uvažovanie | Nezávislé písanie a hodnotiaci úsudok |

Oba systémy používajú tú istú množinu [[ai-technologies|technológií AI]] a stelesňujú odlišné pedagogické politiky, pretože odbory vyžadujú odlišné druhy myslenia. Pravidlo, ktoré sa zovšeobecňuje, je určiť kognitívnu činnosť, ktorá produkuje učenie, a navrhnúť AI tak, aby túto činnosť podporovala bez toho, aby ju vykonávala. Toto pravidlo prevažuje nad akýmkoľvek konkrétnym modelom, promptom, rámcom agenta alebo rozhraním.

## V čom sa vývojové tímy mýlia

Pedagogika žije v systémovom prompte, takže starostlivý prompt je pedagogický dizajn. Prompt je jedna vrstva politiky, ktorá zahŕňa aj to, ktoré dôkazy zbierate, ktorú priečku rozhranie ponúka, čo overovač kontroluje a čo panel ukazuje. Dobre napísaný prompt navrchu modelu študenta, ktorý nič neukladá, vyprodukuje plynulého tútora bez pamäti na študenta a rebrík sa bude reštartovať každú reláciu.

Lepší model opraví diagnózu. Benchmarkingové zistenie vyššie našlo LLM tútorov, ktorí rozpoznávajú správnu úvahu, no odmietajú platné alternatívy a prijímajú nesprávne, čo je vzorec chyby, ktorý škálovanie zjavne neopravuje. Štruktúrovaná diagnóza existuje preto, lebo úsudok modelu je časť, ktorú nedokážete auditovať.

Spokojnosť a dokončenie dokazujú, že dizajn funguje. Dokazujú, že študenti dostali pomoc. Pilot s 38 študentmi programovania našiel silnú asociáciu vnímaného učenia s používaním, kým autonómny pokrok skóroval najnižšie, a štúdia o zvládnutí našla požiadavku série, ktorá zvýšila zvládnutie na platforme bez zisku v oneskorenom teste. Zabudujte meranie odňatia do pilota, inak sa efektívne naučíte nesprávnu lekciu.

Vyhľadávanie robí odpovede dôveryhodnými. Znižuje [[hallucination-risk|riziko halucinácie]] a necháva zvyšok povrchu zlyhania nedotknutý: nájdený pasáž sa dá zle prečítať, platná technika môže byť pre kurz nesprávna a model môže byť stále sebavedomo nesprávny v kroku, ktorý odvodil sám. Vyhľadávanie je podlaha.

Prejdenie balíka bezpečnosti znamená, že je bezpečný pre študentov. Bežné bezpečnostné testovanie pokrýva toxicitu a jailbreaky. Pedagogické zlyhania, na ktorých tu záleží, presakovanie odpovedí, pritakávanie a drift, sú preň neviditeľné a kumulujú sa počas rozhovoru, namiesto toho, aby sa objavili v jedinom ťahu.

Angažovanosť je cieľ. Dĺžka rozhovoru a počet relácií sú najlacnejšie metriky na inštrumentáciu, a preto sa povyšujú na ciele. Argument [[scaffolding|lešenia]] hovorí, že ideálna relácia sa so zlepšovaním študenta skracuje, takže rast angažovanosti je rovnako pravdepodobne príznakom.

## Čo vám bude vracať

**„Dodávame za šesť týždňov a toto je štvrťročná práca.“** Väčšina architektúry je lacná. Brána pokusu, nakonfigurovaný rebrík, vyhľadávanie v poznámkach, ktoré už máte, a schéma záznamov s poľom pre odňatie sú dni práce. Drahé položky (model študenta, overovač, panel) môžu začať za prepínačom funkcie pre jeden kurz a pilot je informatívnejší, keď sú lacné časti hotové.

**„Študenti to milujú a dokončenie rastie.“** Oba fakty sú zlučiteľné so systémom, ktorý dobre odpovedá na otázky a nič neučí. Štúdia so 6 000 študentmi našla pomalší postup a menej skúšaných otázok popri lepšej presnosti, takže pokles dokončenia tiež nie je automaticky zlá správa. Referujte výkon bez pomoci vedľa čísel angažovanosti a nechajte ich nezhodovať sa verejne.

**„Nemôžeme spustiť randomizovanú štúdiu.“** Porovnanie vnútri študenta môžete spustiť aj bez nej: ten istý cieľ, s pomocou počas celku, testovaný bez pomoci o dva týždne neskôr, s referovaným skóre s pomocou vedľa toho. Taký dizajn odpovedá na produktovú otázku a nepotrebuje kontrolné rameno. Čo vám povedať nedokáže, je protifakt pre študentov, ktorí tútora nikdy nepoužili.

**„Model je API dodávateľa, takže správanie pri pomoci je mimo našich rúk.“** Priečky žijú vo vašej orchestračnej vrstve a výsledok experimentu so zábradlím prišiel zo zmeny toho, čo tútor smel povedať, nie z výmeny modelov. Očakávajte, že posttréning dodávateľa bude ťahať k rýchlemu odpovedaniu, pretože na to bol ladený, a zdržanlivosť dajte do vlastného kódu.

**„Učitelia nebudú používať ďalší panel.“** Nebudú používať ten, ktorý emituje nepretržitú diagnostiku, čo podľa prehľadu K-12 odťahovalo pozornosť od ich vlastného pozorovania. Dajte im malý počet interpretovateľných signálov, spôsob prijatia alebo odmietnutia každého odporúčania a čas v týždni sa na ne pozrieť.

**„Nemáme v tíme odborníkov na odbor.“** Potom tútor bude učiť všeobecný postup a notácia kurzu sa počas semestra vychýli. Odborník na predmet na dva dni v čase dizajnu, ktorý napíše zoznam miskoncepcií a zoznam schválených postupov, je najlacnejšia položka projektu a tá, ktorú tímy škrtajú ako prvú.

## Čo urobiť tento týždeň

**1.** Napíšte vetu o výkone bez pomoci pre pilot a dajte ju do špecifikácie, nad zoznam funkcií.

**2.** Pridajte bránu pokusu a zaznamenávajte ju. Zaznamenajte, či sa študent pokúsil pred prvou nápovedou a na ktorú priečku sa dostal.

**3.** Nahraďte tlačidlo nápovedy otázkou o blokujúcom bode a odpoveď zaznamenajte ako kategóriu.

**4.** Naplánujte jednu kontrolu bez pomoci dva týždne po celku a dajte ju do kalendára s vlastníkom.

**5.** Rezervujte dva dni s učiteľom predmetu na napísanie zoznamu miskoncepcií a zoznamu schválených postupov.

## Kam ďalej

[[designing-educational-ai-software|Navrhovanie vzdelávacieho softvéru s AI]] pokrýva pravidlá na úrovni softvéru, ktoré tútor musí spĺňať, a [[designing-ai-into-learning|vkladanie AI do učenia]] pokrýva, kde tútor sedí v sekvencii kurzu. [[evaluating-ai-interventions-methods|Metódy hodnotenia AI intervencií]] a [[checking-whether-educational-ai-works|Overovanie, či vzdelávacia AI funguje]] riešia, či vec funguje. Ak je vaším problémom, že model odpovedá príliš ochotne, [[making-ai-better-at-supporting-learning|Zlepšovanie AI v podpore učenia]] a [[training-ai-tutors-to-guide-rather-than-answer|Trénovanie tútorov, aby viedli a nie odpovedali]] prepracúvajú tréningovú stránku tej istej otázky.
