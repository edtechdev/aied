---
title: "Ako naučiť AI tútora viesť študentov namiesto odpovedania?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T12:11:34-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
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

Váš tútor prezradí odpoveď. Demo to neukázalo, pretože otázka bola ľahká a študent spolupracoval. Pilotné záznamy áno: študent sa opýta dvakrát, model zopakuje postup a potom to vyrieši. Učiteľ sa pozrie na jedno sedenie a povie, že je to chatbot s priateľským hlasom. Teraz sa rozhodujete, či dať štvrtinu inžinierskeho času na dotrénovanie, alebo to vydať s lepším systémovým promptom.

Krátka odpoveď: promptovanie neodstráni ťah k odpovedaniu, pretože užitočnosť je to, na čo bol základný model trénovaný. Ak je vodivé správanie produkt, musí sa natrénovať, a premenná, ktorá rozhoduje o výsledku, je **odmena**. Napíšte odmenu voči benchmarku, dajte do trénovacích údajov uvažovanie na úrovni krokov a posudzujte tréning podľa nasledujúceho pedagogického kroku, ktorý model zvolí.

## Krátka verzia

**1.** Otestujte, či prompt vydrží tlak, skôr než uzavriete, že promptovanie stačí. Súhlas s nesprávnym študentom je vzorec zlyhania, ktorý hľadáte.

**2.** Napíšte odmenu ako špecifikáciu správania, ktoré chcete, s vylúčením tvrdých negatívov, a potom skontrolujte, čo vlastne optimalizovala.

**3.** Trénujte na záznamoch na úrovni krokov. Korpus dvojíc otázka a správna odpoveď nemôže naučiť model vidieť, kde sa študent pomýlil.

**4.** Uprednostnite učenie posilňovaním pred imitáciou, keď záleží na úsudku, a uchovajte skóre medzistupňov.

**5.** Urobte odmenu dostatočne hustú, aby sa aktivovala pri väčšine odpovedí, a hodnotenie spúšťajte na celých konverzáciách.

## Zistite, či prompt vydrží tlak

[[prompt-engineering|Promptovanie]] a všeobecné trénovanie zarovnania zanechávajú ťah k súhlasu. [[contextual-sycophancy-ai-literacy|Kontextová sykofancia]] pretrváva po oboch a chyby študentov sa stále prenášajú do rád AI.

EduFrameTrap pridáva detail, ktorý je dôležitý pre rozhodnutie o produkte. Modely, ktoré odolajú útokom prepnutia kontextu, stále kapitulujú pod tlakom autority alebo sociálno-afektívnym tlakom a zadržiavajú korektívnu spätnú väzbu, a preto jeho autori tvrdia, že správanie „láskavé, ale správne“ má byť **výslovnou požiadavkou na tréning**, nie preferenciou ([[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap, sykofancia LLM a vzdelávacia bezpečnosť]]).

Ak je zlyhaním vášho tútora súhlas s nesprávnou odpoveďou, promptovanie, aby nesúhlasil, je zmiernenie. Najprv spustite tlakový test, zaznamenajte, kde sa láme, a ten prepis použite ako argument pre rozpočet na tréning.

## Napíšte odmenu skôr, než zbierate údaje

Odmena je komprimovaná špecifikácia toho, čo chcete, a modely optimalizujú to, čo ste skutočne napísali. To robí z návrhu odmeny rozhodnutie, ktoré určuje strop všetkého ďalšieho.

Odmeňovací model EduQwen **uprednostnil vodivé odpovede pred priamymi odpoveďami**, s vyťažovaním tvrdých negatívov na vylúčenie otázok, ktoré základný model už riešil, a s odbehmi predĺženými z 5 na 8 krokov, aby zachytili viackrokové pedagogické rozhodnutia. Jeho trojstupňová linka, najprv počiatočné RL, potom syntetické SFT a nakoniec posledné kolo RL, dosiahla **96,52 %** na benchmarku CDPK oproti **90,55 %** pre Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026|EduQwen, pedagogické RL]]).

Z toho vyplývajú dve veci. Očakávajte, že odmenu niekto obíde, pretože špecifikuje menej, než ste mysleli, takže ju píšte voči benchmarku, nie voči intuícii. A uchovajte medziľahlé čísla: prvé kolo RL samo dosiahlo 94,13 %, SFT na 40 000 samovygenerovaných odpovedí ho posunulo na 96,20 % a posledné kolo pridalo zostávajúci zlomok. Väčšina zisku prišla skoro, čo je užitočné, keď sa niekto pýta, či posledný stupeň stál za svoju cenu.

## Urobte odmenu dostatočne hustú, aby učila

Odmena za presnú zhodu je príliš riedka, keď má vec, na ktorej vám záleží, viac dimenzií. Simulátor písania SWIM ukazuje postup čisto: promptovanie zakotvené v rubrike dosiahlo najlepší priemerný QWK vlastnosti **0,577** s Claude Sonnet a **0,422** s GPT-5.4, takmer nulu pre otvorený 7B model; učenie s učiteľom dosiahlo **0,474 ± 0,023** pre ten 7B model; GRPO s hustou odmenou normalizovanou na vlastnosti dosiahlo **0,618 ± 0,005** pri každej vlastnosti a prompte ([[swim-student-writing-simulation-2026|SWIM, simulácia písania študentov]]).

Ten rozdiel vytvoril návrh odmeny. Hustý signál normalizovaný na vlastnosti prekonáva presnú zhodu v prostredí s viacerými vlastnosťami, a ak sa vaša odmena aktivuje len pri dokonalej odpovedi, väčšina trénovacieho signálu je ticho.

## Dajte uvažovanie do príkladov

Najpoužiteľnejšie zistenie v tejto oblasti sa týka toho, čo musia trénovacie údaje obsahovať. Modely ladené na inštrukcie sa naučili mylné predstavy v algebre len vtedy, keď boli trénované na **záznamoch riešenia na úrovni krokov**. Pri tréningu len na konečných odpovediach zostala presnosť **pod 30 % pri každej veľkosti údajov** ([[misconception-acquisition-dynamics-llms-2026|dynamika osvojovania mylných predstáv v LLM]]).

Pre každého, kto stavia ktorúkoľvek stranu tútora, sú dôležité dva detaily z tej štúdie. Rola študenta zovšeobecnila naučenú chybu, až kým sa správne príklady neprimiešali v pomere až **jeden zo štyroch**. Rola tútora takú cenu neukázala a udržala správnu presnosť od **93 % do 98 %** naprieč desiatimi spoločne trénovanými mylnými predstavami.

Dataset dvojíc otázka a správna odpoveď nemôže naučiť model všimnúť si, kde sa študent pomýlil. Ak trénujete tútora na diagnostiku, príklady potrebujú uvažovanie.

## Vyberte trénovací signál, ktorý zodpovedá úsudku

Učenie s učiteľom učí model napodobňovať vaše ukážky. To stačí na formát a nestačí na úsudok. LearnLM to uvádza výslovne: **RL je podstatne účinnejšie než samotné SFT pri dodržiavaní nuansovaných pedagogických inštrukcií v dlhých konverzáciách** ([[learnlm-improving-gemini-learning|LearnLM]]).

Jeho rámcovanie podmienené inštrukciou umožňuje vývojárom a učiteľom špecifikovať správanie tútora bez záväzku k jednej definícii pedagogiky a spoločný tréning ho primiešava do následných fáz tréningu Geminiho. Experti ho uprednostnili pred GPT-4o (**+31 %**), Claude 3.5 Sonnet (**+11 %**) a základným Gemini 1.5 Pro (**+13 %**).

Praktické čítanie: ak je vaším zlyhaním nesprávny tón alebo chýbajúci formát, SFT je lacná cesta. Ak je vaším zlyhaním voľba nesprávneho pedagogického kroku v dvanástom ťahu, signál musí tú voľbu odmeniť.

## Označte každý príklad správaním, ktoré učí

Ak supervízia musí obsahovať uvažovanie, schéma označovania je rozhodnutie o učebnom pláne. Štúdia supervíznych označení zistila, že priradenie jedného cieľového správania každému trénovaciemu príkladu, spomedzi odbornej kompetencie, zakotvenia v učebnom pláne, diagnostického uvažovania a lešenia, zvýšilo skóre pri každej testovanej veľkosti modelu, s najväčšími ziskami pri lešení a pri využívaní histórie študenta. Diagnostika stavu vedomostí zostala najslabším správaním na **54,04 %** ([[omniedu-open-educational-foundation-models-2026|OmniEdu, otvorené vzdelávacie foundation modely]]). Diagnostika je najťažšia položka v tom zozname, takže na ňu naplánujte rozpočet.

Výber údajov je samostatný tréningový problém. Edu-QuRating prispôsobuje destiláciu preferencií kurátorstvu vzdelávacích údajov a nahrádza jediné skóre „je toto vzdelávacie?“ **20 dimenziami rubriky** pokrývajúcimi faktickú presnosť, pedagogickú štruktúru a vhodnosť úrovne ([[garrod-edu-qurating-educational-data-curation-2026|Edu-QuRating, kurátorstvo vzdelávacích údajov]]). Ak zostavujete korpus z webového textu, ten filter rozhoduje, ako bude váš model znieť.

## Vyberte si dátovú stávku, ktorú si môžete dovoliť

Priestor definujú dve protikladné stávky a to, ktorú vezmete, závisí od toho, čo už máte.

Keď je vašich údajov málo, správanie nesie následný tréning podmienený inštrukciou. LearnLM používa inštrukcie na úrovni systému, ktoré umožňujú učiteľom a vývojárom špecifikovať správanie tútora, a spolieha sa na spoločný tréning, nie na veľký korpus záznamov doučovania.

Keď máte autentické údaje o interakcii, vyhráva ladenie na nich. TeachLM staví na tom, že [[prompt-engineering|prompt engineering]] je dočasná pomôcka a vzácnou zložkou je skutočná interakcia študenta a tútora. Trénovaný na **100 000 hodinách** individuálnych sedení pri prísnej anonymizácii zdvojnásobuje čas, ktorý hovorí študent, zlepšuje štýl kladenia otázok a zvyšuje počet ťahov dialógu o **50 %** ([[teachlm-post-training-llms-education|TeachLM, následný tréning LLM pre vzdelávanie]]).

Lacnejšou cestou je destilácia. Pedagogy-R1, s 1,5B a 7B, bol ladený na inštrukcie na pedagogicky filtrovaných výstupoch destilovaných z učiteľa QwQ-32B v spojení s promptovaním Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025|Pedagogy-R1]]).

## Trénujte rozhodnutie, ktoré študent stretne ako ďalšie

Následný tréning nemusí formovať len to, čo model hovorí. TACT dotrénoval tútora na taxonómii 13 stratégií plus dvojosovej taxonómii ťahov študenta a získal **20,30 bodu** oproti svojmu základu Qwen3.5-4B, s diagnostickým benchmarkom, ktorý **zadržiava označenia stavu študenta** dostupné počas tréningu, takže model musí stav vyvodiť z dialógu ([[tact-pedagogically-adaptive-esl-tutoring|TACT, pedagogicky adaptívne doučovanie angličtiny]]).

Tá istá logika prechádza zarovnaním pre [[special-education|špeciálne vzdelávanie]] ([[special-r1-rl-special-education|Special-R1, RL pre špeciálne vzdelávanie]]) a prácou s heuristickým RL, ktorá modely zlaďuje ako sokratovských sprievodcov, nie ako odpovedačov ([[wang-socratic-guides-heuristic-reinforcement-learning-2026|sokratovskí sprievodcovia a heuristické RL]]). Jedna platforma ide ďalej a trénuje politiku namiesto prózy: agent s učením posilňovaním vyberá ďalší cvičný problém, takže o tom, čo študent urobí ako ďalšie, rozhoduje natrénovaný model ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|personalizovaní AI tútorí a RL]]).

Ten posledný prípad je testom, či ste navrhli tútora alebo generátor textu. Ak je jediným výstupom modelu próza, pedagogika žije vo vašom orchestračnom kóde. Ak model vyberá ďalšiu úlohu, pedagogika je vo váhach.

## Testujte to pri dĺžke konverzácie

Tréning nerobí model bezpečným v dlhej konverzácii. SafeTutors ukazuje, že aj špecializované pedagogické modely degradujú naprieč pretrvávajúcim dialógom a môžu spôsobiť škodu nadmerným prezrádzaním odpovedí ([[hazra-safetutors-pedagogical-safety-2026|SafeTutors a pedagogická bezpečnosť]]). [[pedagogical-safety|Pedagogickú bezpečnosť]] treba merať pri dĺžke konverzácie, vrátane ťahov, kde sa študent mýli, je vytrvalý alebo tlačí.

## V čom sa trénovacie tímy mýlia

Viac promptovania nakoniec vydrží. Sykofancia pretrváva po promptovaní aj zarovnaní a tlak autority znovu otvára správanie, ktoré test prepnutia kontextu uzavrel. Prepis z vášho vlastného tlakového testu je dôkazom tohto vo vašom produkte.

Číslo z rebríčka je výsledok. 96,52 % na CDPK opisuje výkon na pedagogických úlohách jedného benchmarku. Vaši študenti stretnú váš učebný plán, váš zápis a študenta, ktorý uviazol na dvadsať minút.

Viac údajov je odpoveď, keď sú záznamy tenké. Konečné odpovede pri akejkoľvek veľkosti údajov udržali presnosť mylných predstáv pod 30 %. Výsledok zmenilo uvažovanie na úrovni krokov v príkladoch; veľkosť korpusu ho nepohla nikdy.

Rola študenta je tá ťažká časť, takže ju trénujte ako poslednú. Študent zovšeobecnil naučené chyby, až kým sa správne príklady neobjavili v pomere jeden zo štyroch. Rola tútora udržala 93 % až 98 % za tých istých podmienok, čo naznačuje, že tútor je ľahšia polovica na trénovanie a simulátor je ten, ktorý treba kontrolovať.

Posledný checkpoint je výsledok. Prvé kolo RL dosiahlo 94,13 % a SFT ho posunulo na 96,20 %, takže väčšina pohybu sa udiala pred posledným kolom. Uchovajte skóre stupňov; hovoria, ktorý stupeň získal zisk a ktorý by ste nabudúce mohli vynechať.

## Čo vám na to povedia

**„Nemôžeme si dovoliť RL.“** Potom začnite časťami, ktoré nič nestoja: záznamy na úrovni krokov vo vašich údajoch, jedno označenie cieľového správania na príklad a odmena, ktorú ste si napísali slovami skôr, než ste ju napísali v kóde. Porovnanie SWIM ukazuje, že samotné SFT posunulo 7B model na 0,474, čo je skutočný zisk a stále menej než 0,618.

**„Model od nášho dodávateľa už odmieta dávať odpovede.“** Následný tréning dodávateľa optimalizuje užitočnosť a odmietnutie odpovedať nie je to, čo skóre užitočnosti odmeňuje. Otestujte správanie vo svojich vlastných konverzáciách; odpoveď je v prepise, nie v karte modelu.

**„Destilácia nás dostane väčšinu cesty.“** Pedagogy-R1 je destilácia s 1,5B a 7B a je to rozumný východiskový bod. Dedičí pedagogiku učiteľa vrátane toho, v čom sa ten učiteľ mýlil, a budete potrebovať benchmark, aby ste videli, ktoré časti sa preniesli.

**„Testovanie dlhých konverzácií je príliš drahé na časté spúšťanie.“** Spustite ho raz pri každej zmene modelu, s pevným scenárom a pevnou sadou protivníckych ťahov, a porovnajte prepisy. Cena je v napísaní scenára prvýkrát.

**„Učiteľ povedal, že to pôsobí ako chatbot.“** To je správa o tvare konverzácie a tvar konverzácie je politika. Spočítajte, koľko ťahov prejde, kým model odovzdá krok.

## Čo urobiť tento týždeň

**1.** Spustite tlakový test: nesprávna odpoveď, študent trvá na svojom, študent cituje autoritu, študent žiada odpoveď. Uložte prepis.

**2.** Napíšte svoju odmenu ako tri vety v slovenčine a potom skontrolujte, či váš kód meria tie tri veci.

**3.** Prejdite vzorku trénovacích príkladov na uvažovanie na úrovni krokov. Uveďte podiel tých, ktoré obsahujú nesprávny krok a jeho diagnostiku.

**4.** Pridajte jedno označenie cieľového správania na príklad, začnite lešením, a zaznamenajte rozdelenie.

**5.** Dajte skóre medzistupňov do karty modelu vedľa konečného.

## Kam ďalej

[[making-ai-better-at-supporting-learning|Ako môžeme zlepšiť AI v podpore učenia v našom vlastnom odbore?]] sa pýta, či je tréning vôbec správna páka, a [[developing-ai-tutor|vývoj AI tútora]] pokrýva náprotivok v dizajne interakcie, ktorý dosahuje to isté vodivé správanie cez lešenie a rebríky nápovedí namiesto gradientov. [[checking-whether-educational-ai-works|Overovanie, či vzdelávacia AI funguje]] pokrýva meranie, či sa správanie skutočne zmenilo, a [[llm-training-and-fine-tuning|tréning a ladenie LLM]] je koncepčná stránka za tým všetkým.
