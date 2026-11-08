---
title: "Obmedzenia výskumu AIEd"
created: "2026-08-15T09:18:04-04:00"
type: concept
foundations: [ai-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, educational-measurement]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, research-methods-aied]
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/limitations-in-aied-research"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

> **Obmedzenia výskumu AIEd** — opakujúce sa slabiny a obmedzenia, ktoré ovplyvňujú, akú dôveru môžeme vkladať do zistení o AI vo vzdelávaní a ako ich čitatelia majú interpretovať. Prenikajú naprieč jednotlivými štúdiami: metodologické obmedzenia (zovšeobecniteľnosť, veľkosť vzorky, platnosť, samozapísanie), problém rýchlosti (AI a zistenia rýchlo zastarávajú, kým publikovanie zaostáva), obmedzenia výskum–prax (reprodukovateľnosť, praktiky FAIR, proprietárne nástroje) a slabé využitie teórie. Metodologické limity sú merateľné, nie dojmové: v kritickom prehľade 80 štúdií HCI o [[critical-thinking|kritickom myslení]] s AI 42 (52 %) nemalo kontrolnú skupinu a väčšina ostatných sa spoliehala na samozapísanie, takže pozitívne zistenia odboru stoja na dizajnoch, ktoré nedokážu oddeliť efekt AI od bežnej reflexie ([[critical-review-critical-thinking-hci-research-ai-2026]]). Kódovanie výsledkov je nerovnomerné rovnakým spôsobom: systematický prehľad 103 štúdií vysokého školstva roztriedil svoj korpus do štvorúrovňovej typológie výsledkov a 56 % z neho umiestnil do jedného podmieneného vzorca, kde dôvera a motivácia rástli bez zodpovedajúceho zisku v trvalej kompetencii ([[generative-ai-higher-education-systematic-review-2026]]). Rozpoznanie týchto limitov je nevyhnutné pre kritické čítanie literatúry a pre navrhovanie silnejších štúdií.

## Otázky na zamyslenie

- Ako veľmi by ste dôverovali titulku ako „AI doučovanie zvyšuje učenie o 30 %", keby ste zistili, že pochádza od 30 študentov v jednom kurze na jednej inštitúcii? Stránka označuje zovšeobecniteľnosť a malé vzorky za opakujúce sa limity — čo by ste chceli vedieť, než by ste konali na základe akéhokoľvek jediného zistenia?
- Nápadným obmedzením je „problém rýchlosti": AI sa vyvíja rýchlejšie, než sa zistenia publikujú, takže štúdia jednej generácie modelu môže už opisovať zastaraný systém. Ako by to malo zmeniť dôveru, ktorú vkladáte do výskumu AI vo vzdelávaní?
- Mnohé štúdie sa spoliehajú na [[self-report-measures|samozapísané]] postoje a používanie, ktoré sú skreslené — ľudia preceňujú svoju kompetenciu a podhodnocujú zneužívanie. Odpovedali ste niekedy na prieskum o svojich vlastných zručnostiach alebo správaní spôsobom, ktorý nezodpovedal realite? Prečo sa merania založené na vnímaní tak často odchyľujú od objektívneho výkonu?
- Stránka poznamenáva, že známe rámce ako Bloomova taxonómia sa často nesprávne čítajú ako prísne rebríky a že aj široko používané teórie, ako teória [[cognitive-offloading|kognitívneho zaťaženia]], boli spochybnené. Kedy ste videli teóriu uvádzanú ako usadenú pravdu v kontexte, kde jej vlastné dôkazy boli v skutočnosti sporné?
- Väčšina výskumu AI závisí od proprietárnych, nepriehľadných modelov, ktorých dáta a aktualizácie nemôžete skontrolovať. Ak nemôžete overiť, ktorý model presne výsledok vytvoril, ako veľmi môžete dôverovať tvrdeniam postaveným na ňom — a čo by urobilo zistenia reprodukovateľnejšími?
- Ak ste učiteľ alebo dizajnér bez času čítať primárny výskum, ako sa rozhodujete, ktoré tvrdenia o AI sú dosť dôveryhodné na to, aby zmenili vašu prax — keďže literatúra je fragmentovaná, predbežná a napísaná pre výskumníkov?

## Úvod

AI vo vzdelávaní je rýchlo sa pohybujúci, heterogénny odbor a jeho dôkazový základ nesie osobitnú sadu obmedzení, ktoré by výskumníci, praktici a tvorcovia politík mali vážiť pri používaní akéhokoľvek zistenia. Niektoré z nich zdieľa so širšou literatúrou [[learning-sciences|vied o učení]] a psychológie; iné sú zosilnené alebo jedinečné vďaka povahe samotnej AI. Táto stránka ich organizuje do štyroch prierezových oblastí.

## Metodologické obmedzenia

Stránka o [[research-methods-aied|výskumných metódach]] v tejto vedomostnej báze detailne opisuje silné stránky a obmedzenia každého dizajnu. Viacero limitov sa opakuje naprieč dizajnmi a zaslúži si osobitnú pozornosť:

- **Zovšeobecniteľnosť.** Zistenia z jedného kurzu, inštitúcie, odboru alebo národného kontextu sa nemusia preniesť. Malé, príležitostné alebo jednoinštitučné vzorky obmedzujú vonkajšiu platnosť; výsledky jedného nástroja AI sa zriedka rozširujú na iný nástroj alebo kontext.

- **Ceznárodné porovnania presvedčení nesú meracie riziko.** Päťkrajinový prieskum 1 405 učiteľov [[k-12|K-12]] použil automatický strojový preklad bez spätného prekladu alebo testovania invariancie merania a meral obavy z [[academic-integrity|plagiátorstva]] a [[creativity|tvorivosti]] jednou položkou, takže jeho krajinové kontrasty nemožno čítať ako ekvivalentné konštrukty ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu a spol. (2026)]]).
- **Prísnosť na úrovni syntézy je samostatná os od prísnosti primárnej štúdie.** Metaanalýza môže splniť vlastné inkluzívne kritériá a stále zlučovať štúdie, ktoré sa líšia dizajnom, vernosťou implementácie a meraním výsledku, bez toho, aby čokoľvek z toho vážila: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan a kolegovia (2026)]] jasne uvádzajú, že nepoužili žiadny formálny nástroj hodnotenia kvality a inkluzívne kritériá pokladali za prah prísnosti, takže kvázijexperimentálna štúdia a randomizovaná prispeli k zlúčenému odhadu [[stem-education|STEM]] rovnako. Ten istý prehľad ukazuje súvisiace reportovacie riziko: jeho heterogenita sa uvádza ako I² = 82,98 % pri modeli s fixnými efektmi a I² = 15,75 % pri modeli s náhodnými efektmi, čo znamená, že čitateľ, ktorý prevezme jediné číslo heterogenity bez jeho modelu, nemôže povedať, ako nekonzistentný korpus skutočne je. Syntézu posudzujte podľa toho, ako naložila so závislými veľkosťami efektu, kvalitou a heterogenitou, nie len podľa toho, či dodržala vyhľadávací protokol.

- **Dizajn vyhľadávania určuje titulné čísla syntézy.** V scopingovom prehľade 195 štúdií [[teacher-education|vzdelávania učiteľov]] boli digitálna kompetencia a [[tpack|TPACK]] explicitnými deskriptormi vyhľadávania, kým inštrukčný dizajn a hodnotenie nemali ekvivalent, takže uvádzaných 46,5 % a 1,9 % charakterizuje korpus, ktorý vyhľadávanie vrátilo, nie odbor ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández a spol. (2026)]]).
- **Malé veľkosti vzoriek.** Mnohé štúdie AIED majú nedostatočnú silu — príliš málo účastníkov na spoľahlivé zistenie zmysluplných efektov alebo na podporu silných tvrdení, ktoré sa z nich niekedy vyvodzujú.
- **Rozširovanie dát môže vyrobiť titulnú metriku.** V automatizovanom hodnotení esejí, ktorého trénovacia časť obsahovala práce 83 študentov, generované odpovede úrovne 1 — šablóny, skrátenie, odstránenie kľúčových slov — zvýšili zhodu Focus o +0,346 kvadraticky váženej kappy z východiskovej hodnoty 0,028, takže najsilnejší ordinálny signál spočíval na texte, ktorý žiadny študent nenapísal ([[automated-essay-scoring-critical-thinking-physics-2026|Firdausi a spol. (2026)]]).
- **Skóre koncových bodov môže skryť to, čo sa skúma.** V prehľade PRISMA 103 štúdií [[higher-ed|vysokého školstva]] 56 % hlásilo zisky, ktoré boli podmienené podporným lešením alebo overovaním, a nulové rozdiely v známkach často sprevádzali skutočné zmeny v procese — viac ladenia, viac kontrolných cyklov — takže známky samy nemôžu povedať, či [[generative-ai|GenAI]] prax posilnila alebo vyprázdnila ([[hawi-genai-higher-ed-uses-outcomes-risks-2026|Hawi a Samaha (2026)]]).

- **Dizajn validácie môže vyrobiť titulné číslo.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara a Halloluwa (2026)]] porovnali pätnásť modelov na EEG-založenej známosti a ukazujú, že štandardná stratifikovaná krížová validácia pripúšťa časový únik a hlási až 0,9853 F1, kým validácia Group K-Fold nezávislá od pokusu znižuje vrchol na 0,6038 F1 — stále nad náhodou, ale ďaleko od uvádzaného výsledku.
- **Benchmarky môžu dodávať zlyhania, ktoré hlásia.** Odborné prehodnotenie 250 zamietnutých fyzikálnych položiek pripísalo 238 (95,20 %) chybám benchmarku alebo hodnotiteľa a len 12 (4,80 %) skutočným chybám modelu, takže nameraná miera chybovosti modelu nemôže klesnúť pod mieru chybovosti nástroja ([[frontier-models-physics-benchmark-audit-2026|Ansari a spol. (2026)]]).
- **Platnosť a meranie.** [[assessment-validity|Konštruktová platnosť]] je často tenká: zástupné merania „učenia", „[[student-engagement|angažovanosti]]" alebo „gramotnosti" sa široko líšia a nástroje nie sú vždy validované pre populáciu alebo konštrukt, ktorý sa skúma. Presnosť [[benchmark|benchmarku]] sa nerovná vzdelávacej účinnosti.
- **Samozapísané a prieskumné údaje.** Veľká časť korpusu sa spolieha na samozapísané postoje, motiváciu a používanie. Samozapísanie podlieha skresleniu — respondenti preceňujú kompetenciu, podhodnocujú [[ai-misuse-learning-harm|zneužívanie]] a nesprávne posudzujú svoje správanie — takže merania založené na vnímaní sa často odchyľujú od objektívneho výkonu (pozrite [[ai-literacy-assessment-misalignment]] a [[educational-measurement]]).
- **Reportovanie kontextu a validácie sa dá kvantifikovať naprieč literatúrou.** Prehľad PRISMA-ScR 421 štúdií NLP o komentároch z hodnotenia výučby našiel krajinu nevyriešenú v 221 štúdiách, jednoinštitučné rozsahy v 232 z 284 vyriešených prípadov (81,7 %), externú validáciu v 33 (7,8 %) a zhodu medzi anotátormi v 54 (12,8 %) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher a da Silva (2026)]]).
- **Bohatosť reportovania je merateľná a typ metódy ju predikuje.** V 888 prácach o automatizácii prehľadov 38,0 % prác o softvéri alebo produktoch od roku 2023 nehlásilo žiadne hodnotenie oproti 9,3 % prác o LLM a 52 % zo 118 LLM prác s výlučne pozitívnym výsledkom stále označilo nesplnenú latku spoľahlivosti — vzorec, ktorý stojí za piatimi úrovňami zverejňovania PRISMA-LLM ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta a Lin (2026)]]).
- **Štandardizácia v rámci každého súboru dát môže skryť nesprávne vyjadrenie rozptylu.** Keď sa syntetické vzdelávacie kohorty štandardizovali podľa vlastnej disperzie, fakt, že ich týždenná štruktúra kolísala 2,6- až 4,9-krát menej ako u skutočných kohort, sa stal pre reportované štatistiky neviditeľným — rutinné predspracovanie, podľa slov autorov nie hypotetická obava ([[synthetic-educational-data-structural-fidelity-2026|Inoue a Yasutake, 2026]]).

- **Menovky generované modelom nie sú základnou pravdou.** Tam, kde menovky, ktoré trénujú alebo hodnotia systém, samy produkujú jazykové modely, zhoda medzi anotátormi nemôže ustanoviť platnosť: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado a spol. (2026)]] nikdy nevalidovali svoje anotácie tvrdení proti ľudským zlatým menovkám a 49 klasifikátorov založených na enkóderoch, ktoré zverejňujú, dedí ten pôvod a nemusia byť platné tam, kde sa aplikácie líšia v podstatných dimenziách. Ich schéma tiež výrazne zaostala za doladeným klasifikátorom trénovaným na expertne anotovaných dátach (makro-F1 0,673 oproti 0,76), takže expertne označené korpusy zostávajú hodnotné, keď je potrebná vysoká istota.
- **Dôkazový základ je sám nerovnomerne rozložený.** Scopingový prehľad 407 štúdií [[formative-assessment|formatívneho hodnotenia]] podporovaného technológiami čerpal len z Web of Science a Scopus. Vylúčil tiež 61 záznamov podľa jazykových kritérií, takže geografická nerovnováha, ktorú odbor hlási, môže čiastočne odrážať, ktoré kanály sú indexované ([[bulut-technology-supported-formative-assessment-2026|Bulut, 2026]]).

## Problém rýchlosti: AI sa vyvíja rýchlejšie ako zistenia

AI sa mení nepretržite a závery vyvodené z akéhokoľvek daného modelu alebo systému môžu **rýchlo zastarať**. Štúdia jednej generácie [[llm|LLM]] nemusí opisovať nasledujúcu; skóre benchmarkov, kvalita doučovania a dokonca praktická užitočnosť zistenia sa menia, ako sa modely zlepšujú. K tomu sa pridáva, že **proces publikovania je pomalý** — od návrhu štúdie po recenzované publikovanie môže uplynúť rok alebo viac — takže publikovaný výsledok môže už opisovať zastaraný systém. Recenzenti a čitatelia by preto mali pokladať zistenia AIED za predbežné, na dátum citlivé tvrdenia, a nie za stabilné pravdy, a uprednostňovať nedávnu, na replikáciu orientovanú a verziu explicitne uvádzajúcu prácu.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni a Fryer (2026)]] robia dôsledok konkrétnym pre jednu literatúru: keďže systémy založené na [[rag|RAG]] sa stali verejne dostupnými až v novembri 2023, argumentujú, že zistenia o [[intelligent-tutoring|inteligentnom doučovaní]] spred roku 2023 — spočívajúce na pravidlových, kľúčové slová porovnávajúcich alebo heuristických NLP systémoch, ktoré majú málo funkčnej podobnosti so súčasnými veľkými jazykovými modelmi — by sa mali pokladať za historický kontext, a nie za priamo porovnateľný dôkaz, a uvádzajú, že ich prehľad nenašiel žiadne publikované [[rct|RCT]], ktoré by skúmalo AI [[conversational-ai|chatbota]] založeného na RAG vo vysokoškolskom vzdelávaní počas celého akademického semestra. Dôsledok je, že základné otázky o tom, ako genAI ovplyvňuje učenie, možno bude treba znova klásť voči každej novej generácii modelov, a nie ich uzavrieť zlučovaním starších výsledkov.

## Obmedzenia výskum–prax

Viacero obmedzení sa týka vedenia výskumu a jeho infraštruktúry:

- **Nedostatok reprodukovateľnosti.** Štúdie často neuvádzajú dosť detailov (prompty, verzie modelov, hyperparametre, dáta, analytický kód), aby iní mohli výsledky reprodukovať alebo overiť — čo je osobitný problém vzhľadom na to, ako citlivo výstup LLM reaguje na prompty a nastavenia.
- **Praktiky FAIR.** Otvorená a reprodukovateľná prax — **F**indable, **A**ccessible, **I**nteroperable, **R**eusable dáta a kód, predregistrácia a zdieľané benchmarky — sa v AIED osvojuje nerovnomerne. Slabé dodržiavanie princípov FAIR sťažuje opätovné používanie, porovnávanie a nadväzovanie na štúdie.
- **Proprietárne nástroje a modely.** Veľká časť výskumu závisí od uzavretých, proprietárnych [[ai-technologies|systémov AI]], ktorých vnútorné správanie, trénovacie dáta a aktualizácie modelov sú nepriehľadné a môžu sa zmeniť bez oznámenia. To obmedzuje reprodukovateľnosť, robí presnú replikáciu nemožnou a môže zviazať zistenia s plánom dodávateľa. Vyvoláva to aj otázky o nezávislosti hodnotenia (pozrite [[ai-ed-evaluation]]).

## Slabé alebo obmedzené využitie teórie

Opakovanou kritikou je, že mnohé empirické články majú **obmedzené alebo zastarané teoretické rámovanie**. Výskumníci môžu:

- **Prijímať teórie nekriticky.** Rámce sa preberajú preto, že sú známe, bez plného zaoberania sa ich predpokladmi, rozsahom alebo dôkazovým základom.
- **Nesprávne interpretovať rámce ako pevné sekvencie.** Viacero široko používaných rámcov sa pokladá za usporiadané rebríky, po ktorých musia študenti stúpať z „nízkej" do „vysokej" fázy — ale dôkazy nepodporujú vždy začínať zdola. Napríklad:
    - **Bloomova taxonómia** sa často číta ako prísna hierarchia (zapamätanie → aplikácia → hodnotenie), no ciele vyššieho rádu nevyžadujú najprv drilovať nižšie rádu; úlohy možno navrhnúť tak, aby zapájali hodnotenie alebo tvorbu od začiatku (pozrite [[cross-dataset-bloom-question-classification]]).
    - **ADDIE** a iné modely inštrukčného dizajnu sa niekedy pokladajú za pevné lineárne fázy, a nie za iteratívne, flexibilné plánovacie heuristiky, ktorými majú byť (pozrite [[learning-design]]).
- **Prehliadať sporné teórie.** Niektoré teórie široko používané v AIED boli samy spochybnené. **Teória kognitívnej záťaže** bola napríklad kritizovaná a jej empirické tvrdenia boli v predchádzajúcich štúdiách vyvrátené alebo spochybnené, no stále sa uvádza ako usadený základ v nových prácach AIED.

Dôsledkom nie je, že [[theories-and-frameworks|teórie a rámce]] sú zbytočné, ale že by sa mali používať s pozornosťou k ich skutočnému dôkazovému základu, zamýšľanému rozsahu a známym kritikám — a nie ako samozrejmé [[scaffolding|podporné lešenia]] alebo pevné procedurálne sekvencie.

## Kríza metaanalytických dôkazov

Rastúci súbor metavýskumu — prehľadov, ktoré skúmajú prehľady — argumentuje, že titulné tvrdenia odboru o ziskoch v učení poháňaných AI stoja na dôkazovom základe, ktorý je omnoho slabší, než sa zdá. Tri doplňujúce kritiky to ukazujú s nezvyčajnou silou:

- **Skreslenie pozitívnych syntéz je vážne a kvantifikovateľné.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš a spol. (2026)]] v metaanalýze metaanalýz na úrovni štúdií s 1 840 veľkosťami efektu zo 67 metaanalýz našli silný dôkaz publikačného skreslenia (všetky Eggerove testy *p* < 0,0001) a extrémnu heterogenitu medzi štúdiami (τ = 0,869). Efekty korigované na publikačné skreslenie boli približne **tretinou** bežne uvádzanej veľkosti (SMD = 0,196 oproti mediánu 0,67 v publikovanej literatúre), s predikčným intervalom od −1,521 do +1,908 — od veľkej škody po veľký prospech. Žiadny výsledok, odbor, úroveň ani podskupina podľa roly AI nevykazovali konzistentné zisky a medzi štúdiami pred rokom 2023 a po ňom nebol rozdiel. Ich verdikt: široké tvrdenia o zovšeobecnených ziskoch v učení sú predčasné.
- **Metaanalytické metódy sa systematicky nesprávne používajú.** Forenzný audit [[oneill-presumed-effective-meta-analysis-2026|O'Neilla (2026)]] 14 vysokopostavených metaanalýz AIED zistil, že *žiadna* neposkytla platný základ pre svoje tvrdenia: žiadna nemala koherentný konštrukt (zaobchádzala s nástrojom „ChatGPT" ako s jednou intervenciou a zlučovala testové skóre, motiváciu, [[self-efficacy|sebaúčinnosť]] a postoje do jedného čísla „[[learning-gains|akademického dosiahnutia]]"); hlásená heterogenita bola vážna, s I² od 77,2 % do 94,4 % naprieč 13 metaanalýzami, ktoré ju uviedli, a 12 z tých 13 nad 80 %, a nikdy nebola vyriešená (žiadna nesplnila minimálnu veľkosť podskupiny desiatich štúdií, päť sa spoliehalo na podskupiny s jedinou štúdiou a tri ďalšie na podskupiny s dvoma); dvanásť pokladalo závislé veľkosti efektu z tej istej štúdie za nezávislé, čo nafukuje zdanlivý dôkaz; a žiadna platne neposúdila publikačné skreslenie (bežné boli diskreditované metriky fail-safe N a nesprávne použité Eggerove testy). Pretože I² závisí od presnosti, nemôže samo o sebe ustanoviť, ako ďaleko sú skutočné efekty od seba, a reportovanie, ktoré by to ukázalo, vo veľkej miere chýbalo: len štyri metaanalýzy uviedli varianciu medzi štúdiami (τ²) a len dve uviedli predikčný interval, pričom oba zahŕňali nulu. Väčšina (61 %) náhodne posúdených primárnych štúdií bola problematická a jednu štúdiu s vyfabulovanými referenciami zaradilo šesť zo 14 metaanalýz.
- **„Intervencia" je čierna skrinka.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich a spol. (2025)]] oživujú debatu médiá/metódy, aby argumentovali, že „ChatGPT" je nástroj, nie metóda — pýtať sa, či „zlepšuje učenie", je non sequitur. Pri audite podmnožiny štúdií za metaanalýzou Denga a spol. (2025) zistili, že len 21 % porovnaní malo dobre definovanú intervenciu, kontrolnú skupinu *a* platné meranie učenia; uvádzané veľkosti efektu (g = 0,7) dokonca prevýšili tie u účelovo postavených [[intelligent-tutoring|inteligentných doučovacích systémov]] (0,66), čo je varovný signál, že „intervencia" bola heterogénna „tajná omáčka".

Zbiehanie týchto troch nezávislých kritík je samo dôkazom: naprieč rôznymi metódami, korpusmi a rámcami dospievajú k rovnakému záveru — že pozitívne veľkosti efektu AIED, najmä z raných metaanalýz, pravdepodobne odrážajú **publikačné skreslenie, nekoherenciu konštruktov a metodologické skratky** rovnako ako (alebo viac ako) skutočné zisky v učení. Neznamená to, že nástroje AI nemajú vzdelávaciu hodnotu; znamená to, že *dôkazy na úrovni odboru* o ich hodnote sú v súčasnosti nafúknuté a musia sa tak aj čítať. Presúva to tiež zodpovednosť na [[meta-analysis-systematic-review|kvalitu syntézy]]: metaanalýza je len tak dôveryhodná, ako je koherentnosť jej konštruktov, nezávislosť jej veľkostí efektu, primeranosť jej analýzy moderátorov a heterogenity a platnosť jej posúdenia publikačného skreslenia — pričom kritiky ukazujú, že každá z týchto vecí sa rutinne porušuje.

## Kritické čítanie literatúry AIED

Spolu tieto obmedzenia argumentujú za kritické, viacsignálové čítanie výskumu AIED: skontrolujte, či sa zistenie zovšeobecňuje a má dostatočnú silu; overte, ako sa konštrukty merali (a či tvrdenia stoja na samozapísaní); uprednostnite nedávnu, verziu uvádzajúcu a reprodukovateľnú prácu; a spochybňujte teoretické rámovanie namiesto pokladania známych rámcov za dané. To je doplnok rigoróznej [[research-methods-aied|voľby metódy]] a [[ai-ed-evaluation|hodnotenia]]: dobré metódy a dobré hodnotenie sú nevyhnutné, ale čítanie s pozornosťou k obmedzeniam je to, čo mení dôkazy na obhájiteľné rozhodnutia.

## Od výskumu k praxi

Ďalším, praktickým obmedzením je **výzva aplikovať výskum do [[teacher-role|vyučovania]] a inštrukčného dizajnu**. Praktici — učitelia, [[stakeholders|inštrukční dizajnéri]] a rozvojoví pracovníci fakúlt — často nemajú čas ani špecializovanú expertízu čítať, posudzovať a prekladať primárny výskum do konkrétnych triednych rozhodnutí. Literatúra je rozsiahla, fragmentovaná a napísaná pre výskumníkov; zistenia sa hlásia so štatistickým a metodologickým detailom, ktorý nie je okamžite použiteľný; a pretože tvrdenia sú predbežné (pozrite problém rýchlosti vyššie), praktik nemôže jednoducho vziať jednu štúdiu za nominálnu hodnotu. Vytvára to medzeru medzi tým, čo dôkazy podporujú, a tým, čo sa skutočne dostane do [[pedagogy|vyučovacej praxe]].

Účelom tejto vedomostnej bázy je pomôcť tú medzeru uzavrieť — uľahčiť sledovanie, interpretáciu a uplatňovanie výskumu AI vo vzdelávaní v praxi — kurátorstvom zistení s otvoreným prístupom do štruktúrovaných, dostupných zhrnutí, prepájaním súvisiacich prác cez [[ai-education|stránky konceptov]] a označovaním obmedzení, ktoré by čitatelia mali vážiť. Cieľom je podporiť [[interpreting-and-applying-aied-research|prax informovanú dôkazmi]] vo vyučovaní a inštrukčnom dizajne a zároveň vyniesť na povrch medzery a otázky, ktoré môžu informovať nový výskum a vývoj. Porozumenie limitom výskumu preto nie je cieľom samo o sebe: je to to, čo praktikom umožňuje primerane uplatňovať zistenia a výskumníkom navrhovať silnejšie štúdie, ktoré lepšie slúžia praxi.

## Dve pasce auditu, ktoré stojí za to poznať

Dve konkrétne reportovacie praktiky nafukujú alebo skresľujú syntézu a obe sú viditeľné v publikovanom zázname, nie hypotetické.

**Číslo heterogenity závisí od modelu a model sa zriedka uvádza.** Heterogenita jedného prehľadu sa uvádza ako **I² = 82,98 % pri modeli s fixnými efektmi a I² = 15,75 % pri modeli s náhodnými efektmi**. Tie opisujú tie isté dáta. Čitateľ, ktorý prevezme jediné číslo heterogenity bez jeho modelu, dostal technické tvrdenie bez pripojenej interpretácie, a rozdiel medzi „väčšina variancie je nevysvetlená" a „malá variancia je nevysvetlená" je rozdiel medzi zahodením a dôverou v odbor.

**Titulné percento môže byť artefaktom vyhľadávacích výrazov.** Scopingový prehľad 195 štúdií vzdelávania učiteľov urobil z digitálnej kompetencie a [[tpack|TPACK]] explicitné deskriptory vyhľadávania, kým inštrukčný dizajn a hodnotenie nemali ekvivalentný výraz, takže uvádzaných **46,5 % a 1,9 %** sú miery, ktoré vytvoril samotný dotaz. Tvrdenie o výskyte je len také zmysluplné, ako vyhľadávanie za ním.

**A základná miera je číslo, ktoré nikto neuvádza.** Metodologické limity sú tu merateľné, nie dojmové: v kritickom prehľade 80 štúdií HCI o kritickom myslení s AI **42 (52 %) nemalo kontrolnú skupinu** a väčšina ostatných sa spoliehala na samozapísanie. Keď viac ako polovica pozitívnych zistení odboru pochádza z dizajnov, ktoré nedokážu oddeliť efekt AI od bežnej činnosti, primeraná predchádzajúca pravdepodobnosť pri akomkoľvek jedinom zistení je skepticizmus, nie predbežné prijatie.

## Časté mylné predstavy

- **„Sekcie o obmedzeniach sú šablónovité."** Metodologické limity sú **merateľné, nie dojmové**: v kritickom prehľade **80 štúdií HCI** o kritickom myslení s AI **42 (52 %) nemalo kontrolnú skupinu**. Práve presný počet robí limit použiteľným.
- **„Heterogenita je jediné číslo, ktoré môžete uviesť."** Ten istý prehľad ukazuje reportovacie riziko: heterogenita sa uvádza ako **I² = 82,98 % pri modeli s fixnými efektmi a I² = 15,75 % pri modeli s náhodnými efektmi**. Tie isté dáta dávajú deväťbodový alebo dvojbodový príbeh podľa zvoleného modelu, takže uvedené I² bez svojho modelu je neinterpretovateľné.
- **„Veľký uvádzaný efekt je číslo, ktorému treba dôverovať."** Titulok ako efekt z **30 študentov v jednom kurze na jednom pracovisku** je bežnou formou krehkého tvrdenia a počet štúdií bez kontrol ukazuje, ako často táto krehkosť zostáva nenahlásená.

## Prepojené koncepty

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[rct]]
- [[meta-analysis-systematic-review]]
- [[ai-education]]
- [[icap-framework]]
- [[learning-design]]
- [[llm]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[theory-development-aied]] — Vývoj teórie v AI vo vzdelávaní

## Prepojené články

- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — AI chatboti vo vysokom školstve: porovnanie očakávaní s dôkazmi (Thoeni a Fryer 2026)

- [[ground-truth-reliability-aied]] — Spoľahlivosť a platnosť základnej pravdy pri hodnotení
- [[ai-literacy-assessment-misalignment]] — Samozapísaná verzus výkonovo založená AI gramotnosť
- [[machines-misread-pedagogical-quality]] — Prečo stroje nesprávne čítajú pedagogickú kvalitu
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Kritické limity AI tutorov a využitia teórie
- [[cross-dataset-bloom-question-classification]] — Bloomova taxonómia a klasifikácia otázok
- [[eeg-familiarity-automated-assessment-2026]] — Automatizácia hodnotenia študentov: predikcia známosti na základe EEG
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT vo vzdelávaní: efekt hľadajúci príčinu (kritika porovnávania médií)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Metaanalýza metaanalýz: efekty AI korigované na publikačnú skreslenosť sú približne 1/3 uvádzanej veľkosti
- [[oneill-presumed-effective-meta-analysis-2026]] — Predpokladaná účinnosť: forenzný audit 14 metaanalýz AIED
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: empirický reportovací rámec pre systematické prehľady podporované AI
- [[frontier-models-physics-benchmark-audit-2026]] — Aké dobré sú špičkové modely vo fyzike? Odborné prehodnotenie odhaľuje pokazené hodnotenia a takmer nasýtenie vedúcich benchmarkov
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inkluzívne kritériá použité ako prah prísnosti a číslo heterogenity, ktoré sa mení s modelom (Doğan a spol. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Klasterovo randomizovaný triedny pokus, ktorého výkonový výsledok nedosiahol významnosť (Rücker a Becker-Genschow 2025)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI a ľudské doučovanie prinášajú rovnaké učebné zisky v GRE
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Hodnotenie zamerania spätnej väzby a pedagogickej adaptivity v spätnej väzbe generovanej LLM na študentské písanie
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: schémy založené na tvrdeniach pre auditovateľné kódovanie vzdelávacích dialógov
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — Od klasifikácie sentimentu k použiteľnej a zodpovednej spätnej väzbe: scopingový prehľad a mapa dôkazov NLP v študentskom hodnotení výučby, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — Čo metriky vernosti prehliadajú: štrukturálna kontrola syntetických vzdelávacích dát

- [[digital-competence-ai-responsive-pedagogy-2026]] — Scopingový prehľad 195 štúdií vzdelávania učiteľov, kde dizajn vyhľadávacieho reťazca formuje hlásené frekvencie
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Ceznárodný prieskum učiteľov K-12: strojovo preložené položky, jednopoložkové miery obáv, žiadne testovanie invariancie
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Systematický prehľad 103 štúdií GenAI vo vysokom školstve: 56 % podmienených ziskov, známky maskujúce zmenu procesu (Hawi a Samaha 2026)
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Rozširovanie dát môže vyrobiť titulnú metriku
