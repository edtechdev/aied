---
title: "Ako môže AI pomôcť pri výskume vo vzdelávaní?"
created: "2026-10-05T11:23:36-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/how-can-ai-assist-with-educational-research
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

Váš spoluautor chce do metodologickej časti odsek o nástrojoch AI, ktoré tím použil. Alebo je hromada na skríning dlhšia, než dovoľuje termín. Alebo sa recenzent slušne spýtal, či prepisy čítal človek, a vy si nie ste istí, aká je čestná odpoveď.

Krátka odpoveď na to stretnutie: AI môže prevziať vyhľadávanie, prvý skríning, triedenie kódovania a tvorbu konceptu, ale nemôže niesť zodpovednosť za to, k čomu projekt dospeje. Rozhodnite, ktoré úlohy sú pre ňu otvorené, ešte pred začiatkom projektu, overujte výstupy voči ľudskému štandardu s menovanou osobou, ktorá rozhoduje o nezhodách, a zaznamenávajte toho dosť na to, aby vonkajší pozorovateľ dokázal zrekonštruovať, čo sa stalo. Väčšina tímov zistí, že hodiny overovania a zaznamenávania sú pridanou prácou, a nie odobranou.

## Stručná verzia

**1.** Zapíšte, ktoré výskumné úlohy môžu používať AI a ktoré nie, skôr než sa spustí prvé vyhľadávanie. Triedte podľa stávok, nie podľa nástroja.

**2.** Automatizáciu nasaďte na skríning. Extrakciu údajov, zjednocovanie a syntézu nechajte ľuďom.

**3.** Ukotvite kódovací manuál a rubriku skôr, než sa automatizovaný priechod dotkne údajov.

**4.** Rozhodnite, čo znamená overenie a kto ho podpíše. Zhoda medzi modelom a kódujúcim je miera podobnosti, nie výsledok kvality.

**5.** Overte každý odkaz ručne, autormi počnúc, vždy, keď sa AI dotkla textu.

**6.** Zaznamenávajte prompty, verzie modelov a verzie korpusu a naplánujte na to hodiny.

## Rozhodnite, čoho sa AI môže dotknúť, pred začiatkom projektu

Rozhodnutie o rozsahu patrí do projektového súboru, nie do niekoho pamäti. V [[dai-chan-responsible-genai-research-ai-literacy-2026|fokusovej štúdii Dai a Chana (2026)]] výskumníci, ktorí o tom premýšľali, kalibrovali používanie podľa stávok a intelektuálnej centrality: viac pri procedurálnej práci s nízkymi stávkami, opatrne tam, kde bol vedecký prínos ústredný. Dvadsaťsedem z 28 doktorandov v tejto štúdii použilo GenAI niekde v pracovnom postupe vrátane akademického písania a prekladu, takže pre väčšinu tímov je otázkou, kde hranica leží, a nie či existuje.

Napíšte hranicu ako zoznam s verdiktom pre každú úlohu: vyhľadávanie literatúry, skríning abstraktov, extrakcia, kvalitatívne kódovanie, štatistická analýza, tvorba textu, formátovanie odkazov. Čítajte tú štúdiu ako mapu toho, čo výskumníci hlásili, že robia. Je to správa z fokusových skupín, nie výsledok účinnosti.

## Automatizáciu na skríning, syntézu do tímu

Systematické prehľady sú miesto, kde automatizácia postúpila najďalej. Nástroje ako ASReview, SWIFT-Review, Covidence, AIScreenR a MetaMate znižujú procedurálnu záťaž hlavne pri skríningu abstraktov, kým extrakcia údajov, zjednocovanie a syntéza zostali ľudským recenzentom v jedinom tíme, ktorý svoj postup opísal ([[scaffolding-systematic-reviews-2026|Wang a kol., 2026]]).

Väčšina prínosu pochádza z dvoch dizajnových rozhodnutí. Napíšte rozhodovacie pravidlá pre šedé prípady skôr, než skríning začne, a udržujte kategóriu „možno“ so spoločným záznamom o rozhodnutiach, aby sa rovnaký úsudok použil na rovnaký typ záznamu. Bez záznamu sa pravidlo druhého recenzenta a pravidlo prvého recenzenta potichu rozídu a zoznam vylúčení prestane byť reprodukovateľný.

## Ukotvite kódovací manuál skôr, než model čokoľvek prečíta

[[qualitative-research|Kvalitatívna analýza]] je fáza, kde je interpretácia produktom. Konštrukty, kódovacie rubriky a trénovacie údaje sú ľudské rozhodnutia, a nie výstupy modelu ([[ai-methodologies-science-education-research-2026|Martin a kol., 2026]]), čo znamená, že kódovací manuál musí byť ukotvený skôr, než sa cez korpus spustí automatizovaný priechod. Alternatívou je kódovacia schéma napísaná okolo toho, čo model náhodou vyniesol na povrch, a témy potom opisujú čítanie vašich údajov nástrojom.

Delegovanie môže byť jemnejšie než všetko alebo nič. [[agreement-not-quality-llm-coding-verification|Jedna štúdia so slepým overovaním]] klasifikovala 15 zo 72 položiek kódovacieho manuálu ako preukázateľne vyžadujúce ľudskú expertízu, 12 ako lepšie obslúžených modelom a 16 ako vhodných na triedenie podľa istoty. Zoraďte svoje položky takto a úspora práce pristane tam, kde je bezpečná.

## Rozhodnite, čo znamená overenie a kto ho podpíše

Vysoká zhoda medzi modelom a ľudským kódujúcim sa vykazuje, akoby ustanovila správnosť. Neustanovuje. [[agreement-not-quality-llm-coding-verification|Liu a kol. (2026)]] nechali nezávislého experta posúdiť 855 párových súborov kódov naslepo voči zdroju. Zhoda človek-LLM (priemer Jaccard 0,30) bola výrazne pod zhodou človek-človek (0,52), a napriek tomu slepý overovateľ uprednostnil ľudské a strojové kódovanie v pomere, ktorý nedokázal rozlíšiť (51,5 % proti 48,5 %, p = 0,537). V niektorých prípadoch ľudský konsenzus kódoval zdieľanú zaujatosť, ktorú overovateľ odmietol v prospech modelu.

Krok overenia teda potrebuje zlatý štandard, ktorým nie je ani výstup modelu, ani zhoda kódujúceho s ním, plus menovanú osobu, ktorá rozhodla o nezhodách. Vykážte oboje. Štatistika podobnosti opisuje, ako tesne sa dve čítania zhodujú, a nehovorí nič o tom, či je niektoré z nich správne.

## Hľadajte rýchlo, potom si overte každý zdroj

Generatívne vyhľadávanie zhrňuje, odporúča, syntetizuje a konverzuje, čo narúša staršie usporiadanie, v ktorom systém lokalizuje a čitateľ interpretuje ([[genai-academic-search-workshop]]). Berte ho ako nástroj objavovania. Správa z workshopu nesie dve upozornenia: schopnosť je nerovnomerná, pričom vysoko citovaní vedci sa rekonštruujú približne dvakrát častejšie než menej citovaní kolegovia, a knihovník opísal priepasť dôvery, v ktorej študenti generatívnemu vyhľadávaniu príliš dôverovali, kým fakulta mu nedôverovala.

Overovanie odkazov je miesto, kde sa to stáva nevyhnutným, a zlyhania sa zhlukujú v poli autorov, teda v tom, ktoré nesie kredit. [[citation-errors-hallucinations-computing-education-2026|Denny a kol. (2026)]] preverili 723 930 publikácií a 15 872 533 odkazov a overili 30 vymyslených odkazov v 14 prácach o informatickom vzdelávaní, všetky z rokov 2025 a 2026. Sedemnásť z 30 boli hybridy: skutočný názov pripojený k vymysleným alebo nesprávnym autorom. Overený počet na jednom technickom sympóziu stúpol z 3 v roku 2025 na 17 v roku 2026, v 2,3 % príspevkov toho ročníka. Ich súčet je zámerne dolná hranica a automatizované kontrolory dedia chyby metadát, ktoré berú ako pravdu. Kontrolujte najprv autorov.

## Berte automatizované skóre ako hypotézu na testovanie

Automatizované meracie funkcie môžu vyzerať presne a prediktívne, pričom zostávajú nepriehľadné. [[ai-methodologies-science-education-research-2026|Martin a kol.]] to rámujú Changovým problémom nomického merania: meranie veličiny vyžaduje zákon, ktorý ju spája s niečím pozorovateľným, a ten zákon sa nedá testovať bez toho, aby ste veličinu už poznali. Meracie funkcie odvodené z AI vychádzajú z trénovacích údajov a optimalizácie, a nie z výskumníka, takže práca na vysvetliteľnosti je dôležitá na ukázanie, či model sleduje sémantické porozumenie, alebo len kľúčové slová.

Zlyhanie je konkrétne. V [[zhang-platform-scores-miss-ai-teaching-agents-2026|hodnotení ôsmich vyučovacích agentov AI]] sa agent, ktorý bol tretí podľa vlastného skóre platformy, umiestnil posledný podľa rubriky overenej expertmi. Nezhoda človeka a stroja je systematická, a nie náhodná, a operacionalizácia rubriky často záleží viac než remeselnosť promptu ([[machines-misread-pedagogical-quality|Tseng a kol., 2026]]). Skôr než sa automatizované skóre stane vaším nástrojom, overte ho voči meraniu naviazanému na schopnosť, ktorú chcete študovať. K meraniam samotným pozri [[evaluating-ai-interventions-methods]].

## Napíšte metodologickú časť tak, aby ju outsider dokázal zrekonštruovať

Prijatie predbehlo vykazovanie. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta a Lin (2026)]] analyzovali 888 prác o automatizácii prehľadov: od roku 2023 neuviedlo 38,0 % prác o softvéri a produktoch žiadne hodnotenie, proti 9,3 % prác o LLM, a prístup k modelom bol prevažne proprietárny (84,1 %). Priaznivé celkové hodnotenie tiež neznamenalo vhodnosť na delegovanie, keďže 52 % zo 118 prác o LLM s výlučne pozitívnym hodnotením stále uvádzalo obavu, že postup nedosahuje latku vyžadovanú jeho rolou. Ich rámec PRISMA-LLM oddeľuje zverejnenie implementácie od hodnotenia citlivého na dôsledky a svojich päť úrovní berie ako úrovne zverejnenia, a nie úrovne rizika.

Praktická verzia: pomenujte systém a jeho verziu, prompty, verziu korpusu, čo skontroloval človek a kde to zlyhalo. Uchovávajte záznamy promptov a odpovedí, pretože plynulý vygenerovaný zoznam tém vyzerá nevyhnutne dávno predtým, než sa jeho dôkazná práca začala ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Naplánujte aj hodiny. [[persistent-ai-agents-academic-research|Prípadová štúdia jedného výskumníka za 115 dní]] s pretrvávajúcim výskumným agentom zistila, že najsilnejším vzorcom bolo rozšírenie kapacity, a nie preukázané nahradenie práce: ako sa hromadila pamäť a postupy, rástol rozsah delegovanej práce, kým vklad človeka sa nezmenšoval.

## Robte praktický výskum podľa rovnakých pravidiel v menšom meradle

Ak ste prednášajúci, ktorý skúma svoj vlastný kurz, pracujete v najtenšom prameni korpusu. [[ai-assisted-educational-research|Výskum vo vzdelávaní podporovaný AI]] to uvádza ako medzeru, a nie ako zistenie: praktický výskum podporovaný AI je pravdepodobne rozšírený a takmer nezdokumentovaný a dôkazy o automatizácii prehľadov a bibliometrické dôkazy nerozhodujú, ako má prednášajúci skúmať svoju vlastnú výučbu.

Prenáša sa súbor dispozícií:

Používajte AI tam, kde vaše lokálne prostredie nie je premennou. Prehľadávanie literatúry vášho odboru, prepis a zhrnutie vlastných nahrávok a tvorba nástrojov alebo textu súhlasu, to všetko spadá do tejto kategórie.

Zachovajte interpretačné kroky. Čo sa počíta ako téma, čo znamená komentár študenta a čo vaše dôkazy z triedy oprávňujú tvrdiť, je na vás, a správa má uviesť, ktoré kroky urobil model a ktoré ste urobili vy ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Vopred definujte kritériá a udržujte ich viditeľné. Malá lokálna štúdia sa nedokáže spamätať z konštruktu definovaného po tom, čo údaje prišli.

Vykážte rolu AI, overenie, ktoré ste urobili, a obmedzenia dizajnu s jedným kurzom a jedným výskumníkom. Opis pracovného postupu nie je výsledok účinnosti.

Simulovanie kohorty berte ako pokročilú možnosť, nie ako predvolenú. Simulovaní študenti majú tendenciu pokrývať najľahší kvadrant správania skutočných študentov a po použití sa overujú len zriedka ([[simulating-students]]). Prečítajte si [[making-simulated-students-behave-like-learners]] skôr, než uveríte verdiktu simulátora.

## V čom sa výskumníci mýlia

Zhoda s ľudským kódujúcim znamená, že kódovanie je správne. Zhoda človek-LLM v slepej štúdii bola 0,30 Jaccard proti 0,52 pre človek-človek a slepý overovateľ nedokázal rozlíšiť dva zdroje kódovania pri 51,5 % proti 48,5 %. Zhoda zaznamenáva, že dvaja čitatelia sa zblížili, vrátane prípadov, keď sa zblížili na tej istej zaujatosti.

Kontrolor odkazov nahrádza kontrolu odkazov. Tridsať vymyslených odkazov v Dennyho audite zahŕňa 17 hybridov, kde bol názov skutočný a autori nie, čo je presne prípad, ktorý kontrolor trénovaný na metadátach zvláda najhoršie, keďže metadáta sú tou vecou, ktorá je nesprávna.

Priaznivé hodnotenie robí pracovný postup vhodným pre vašu rolu. Zo 118 prác o LLM s výlučne pozitívnym hodnotením ich 52 % stále uvádzalo obavu, že postup nedosahuje latku, ktorú jeho rola vyžaduje. Čítajte hĺbku hodnotenia voči práci, ktorú mu dávate.

Remeselnosť promptu je hlavná páka kvality. Operacionalizácia rubriky často záleží viac než remeselnosť promptu pri zhode človeka a stroja a hodnotenie ôsmich agentov zaradilo ten istý systém na tretie a na posledné miesto podľa toho, čia rubrika sa použila.

AI uberá prácu z projektu. Prípadová štúdia za 115 dní zistila, že delegovaný rozsah rástol, ako sa hromadila pamäť agenta. Overovanie, rozhodovanie o nezhodách a zaznamenávanie sú hodiny, ktoré s tým rastú.

## Čo proti vám príde

**„Môj spoluautor to už robí a nikto sa nesťažoval.“** To, že sa nikto nesťažuje, nie je zistenie o validite. Otázka zverejnenia je oddelená od otázky kvality a číslo 38,0 % pri nehodnotených prácach o softvéri hovorí, že mlčanie odboru je rozšírené.

**„Dva modely sa zhodli, takže kódovanie je uzavreté.“** Dva modely, ktoré zdieľajú trénovacie údaje, zdieľajú svoje chyby. Slepý overovateľ v Liuovej štúdii uprednostnil strojové kódovanie pri 48,5 %, a to, čo to číslo urobilo interpretovateľným, bol nezávislý sudca, nie zhoda samotná.

**„Proprietárny model nedokážeme auditovať, takže niet čo vykázať.“** PRISMA-LLM žiada zverejnenie implementácie ako úroveň oddelenú od hĺbky hodnotenia. Systém, verzia, prompty, čo ľudia skontrolovali a kde to zlyhalo, sú vykázateľné aj pri uzavretom modeli.

**„Etická komisia to nikdy neschváli.“** Prístup k modelom bol proprietárny v 84,1 % skúmaných prác, čo znamená, že text študentov obvykle opúšťa vašu inštitúciu. Zbierajte len to, čo vzdelávací účel potrebuje, overte, či sa na údajoch študentov trénujú modely dodávateľa, a tam, kde je citlivosť vysoká, uprednostnite lokálne alebo syntetické údaje. [[equity-ethics-pedagogical-safety-research]] pokrýva záväzky v plnom rozsahu.

**„Bude to pomalšie než ručne.“** Pri malom projekte to tak často je. Argument za to stojí na rozsahu pri veľkom objeme a argument proti preceňovaniu stojí na tej istej správe o 115 dňoch.

## Čo urobiť tento týždeň

**1.** Napíšte zoznam úloh s verdiktom pri každej položke a umiestnite ho tam, kde ho vidí celý tím.

**2.** Pridajte rozhodovacie pravidlá pre šedé prípady a záznam o rozhodnutiach do svojho skríningového protokolu skôr, než sa spustí ďalšia dávka.

**3.** Vyberte jeden automatizovaný výstup, na ktorý sa už spoliehate, a overte ho voči ľudskému úsudku na vzorke, na ktorú ste sa ešte nepozreli.

**4.** Prečítajte si posledný odovzdaný rukopis a ručne skontrolujte každé meno autora v zozname odkazov.

**5.** Pridajte do svojej šablóny metodológie riadok „kde AI zlyhala“, aby bol návyk zverejňovania raz zapísaný.

## Kam ísť ďalej

Sprievodné otázky sú [[evaluating-ai-interventions-methods]] o tom, ako merať intervenciu, [[reporting-interpreting-aied-research]] o vykazovaní systému a vlastného používania AI a [[research-gaps-aied]] o tom, kde je literatúra tenká. [[equity-ethics-pedagogical-safety-research]] pokrýva údaje študentov a [[ai-assisted-educational-research]] je úplná koncepčná stránka za touto.
