---
title: "Aké sú osvedčené postupy a tipy pri navrhovaní efektívneho vzdelávacieho softvéru s AI?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Váš tím má funkčný prototyp tútora a o tri týždne ukážku pre okres. Alebo vás partnerská škola požiadala, aby ste na jej čítanku postavili chatovacie rozhranie, a niekto hovorí, že je to práca na dva týždne. Alebo vám obstarávací recenzent vrátil bezpečnostnú časť s jednou vetou: čo presne ste testovali?

Odpoveď je užšia, než predpokladá väčšina špecifikácií produktu. Vzdelávacia AI funguje ako ohraničený expert pod ľudským dohľadom: schopnosť obmedzená na definovanú doménu, ukotvená v obsahu schválenom vyučujúcim, a nie v pamäti modelu, spolutvorená s učiteľmi a študentmi, ktorí ju používajú, hodnotená na trvalej interakcii v mnohých kolách. Práve tú poslednú klauzulu väčšina tímov vynecháva. Pedagogická škoda sa objavila v každom modeli testovanom v benchmarku nižšie a miera zlyhaní stúpla zo 17,7 % pri interakciách v jednom kole na 77,8 % v rozhovoroch s mnohými kolami.

## Stručná verzia

**1.** Zapíšte, o čom rozhoduje systém a o čom rozhoduje učiteľ. Táto hranica sa stane architektúrou.

**2.** Hodnoťte interakciu v mnohých kolách a s vedomím odboru na reálnom kurikule, nie jednotlivé prompty voči všeobecnej bezpečnostnej rubrike.

**3.** Ukotvite odpovede v schválenom obsahu a overovací komponent držte oddelene od konverzačného.

**4.** Každé odovzdanie študenta berte ako nedôveryhodný vstup, vrátane situácie, keď ho systém hodnotí.

**5.** Postavte bránu pokusu, cestu eskalácie a prepísanie učiteľom skôr než pilot.

**6.** Dajte prístupnosť a rozčlenené testovanie rovnosti do špecifikácie, a nie do backlogu.

## Rozhodnite, čím systém smie byť

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Participatívna dizajnová štúdia Reicherta a kolegov]] so šiestimi učiteľmi druhého stupňa koriguje predpoklad, že vzdelávacia AI má byť autonómny agent. Keď mali na papieri prototypovať triednych [[conversational-ai|chatbotov]], každý učiteľ opísal ohraničeného experta v dvoch dimenziách. Hranice právomoci udržali učiteľov pri kontrole, pretože zodpovednosť za učenie a bezpečnosť študentov sa delegovať nedá. Hranice expertízy odrážali nedostatok kontextových vedomostí AI o jednotlivých študentoch, dynamike triedy a inštitucionálnych normách.

Architektúra, ktorú načrtli, mala štyri komponenty (vymedzenie obsahu, prezentácia obsahu, prispôsobenie študentovi, dohľad [[teacher-role|učiteľa]]) na troch ochranných vrstvách: doménové hranice, ktoré obmedzujú rozsah, filtrovanie obsahu, ktoré umožňuje bezpečnú [[personalized-learning|personalizáciu]], a prepísanie učiteľom pri nejasných prípadoch. Delegovanie bolo selektívne. Premietnuté na Gagného deväť udalostí výučby, učitelia privítali AI pri prezentácii obsahu, poskytovaní cvičných problémov a ponúkaní [[formative-assessment|formativnej]] [[feedback|spätnej väzby]] a odmietli ju pri stanovovaní cieľov alebo realizácii [[summative-assessment|sumatívneho]] [[assessment|hodnotenia]].

Do tej istej špecifikácie patria dve predvolené nastavenia: zlaďte systém s výslovnými cieľmi učenia a ladte ho smerom k láskavým, ale správnym odpovediam, a nie k súhlasu s tým, kto práve píše. Tútor, ktorý lichotí nesprávnej odpovedi, naučil študenta, že odpoveď bola správna.

Jeden detail je teraz lacný a neskôr drahý: títo učitelia chceli behaviorálnu transparentnosť, viditeľné limity a signály neistoty viac než vysvetlenia uvažovania modelu. Všetkých šesť žiadalo úplné zaznamenávanie rozhovorov, upozornenia v reálnom čase a možnosť prepísania, rámované ako profesijná zodpovednosť, a nie nedôvera. Navrhnite to už v prvom šprinte, pretože dodatočné vloženie zaznamenávania do tútora postaveného tak, aby pôsobil neviditeľne, je prepisom.

## Testujte v rozhovore, nie v jednom kole

Syntéza [[pedagogical-safety|pedagogickej bezpečnosti]] argumentuje, že konvenčné bezpečnostné testovanie pre vzdelávanie nestačí. Systém sa môže vyhnúť toxickému obsahu a stále škodiť tým, že prezrádza odpovede, posilňuje [[misconceptions|mylné predstavy]], potláča reflexiu, podporuje závislosť alebo sa odchyľuje od inštrukčných cieľov.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] [[benchmark]] to dáva do čísel. Naprieč každým testovaným modelom, od otvorených modelov s 3,8B parametrami po GPT-5-mini, bola [[pedagogy|pedagogická]] škoda všeobecná, škála spoľahlivo nezlepšila bezpečnosť a miera zlyhaní eskalačne stúpla zo 17,7 % pri interakciách v jednom kole na 77,8 % v rozhovoroch s mnohými kolami. Vzorce porušenia sa líšili podľa predmetu. Jeho taxonómia s 11 dimenziami a 48 podrizikami pokrýva kognitívne, epistemické, [[metacognition|metakognitívne]], [[motivation|motivačno-afektívne]], vývinové a rovnostné kategórie a kategórie inštrukčného zladenia a funguje ako dizajnový kontrolný zoznam rovnako ako testovacia sada.

Čítajte číslo eskalácie ako tvrdenie o svojom teste. Tútor, ktorý prejde tisíc sondami v jednom kole, môže zlyhať v štyroch rozhovoroch z piatich, keď študent zatlačí alebo sa spýta tretí raz. Postavte aparatúru pre mnoho kôl skôr než ukážku.

## Ukotvite obsah a oddeľte overovateľa

Ukotvenie je architektonické rozhodnutie. [[eduguard-safe-rag-llm-tutor|EduGuard]], bezpečný tútor pre [[rag|vyhľadávaním obohacované]] generovanie v [[cs-education|úvodnom programovaní]], spája vyhľadávanie v kurzovom obsahu schválenom vyučujúcim s architektonicky oddeleným overovateľom tvrdení, s výslovnou kontrolou [[cognitive-offloading|nadmernej závislosti]] a s benchmarkom 600 dotazov napísaným vyučujúcim, ktorý pokrýva mylné predstavy, ladenie, zmiešané jazykové dotazy a adversariálne prompty žiadajúce priamu odpoveď. Zlepšil sa oproti základom GPT-4o-mini a tútora v [[socratic-method|sokratovskom]] štýle s Llama.

Prenosnou časťou je oddelenie: komponenty, ktoré overujú, nekonverzujú, a benchmark obsahuje prompty napísané na vyťahovanie odpovedí, a nie na kontrolu slušnosti. [[hallucination-risk|Riziko halucinácií]] pokrýva režim zlyhania, ktorý má schválené vyhľadávanie ohraničiť.

## Berte študentskú prácu ako nedôveryhodný vstup

Model hrozieb, ktorý väčšina dizajnových rád vynecháva, sedí vnútri posudzovaného artefaktu. [[humble-prompt-injection-ai-grading-red-team-2026|Humbleho (2026) adversariálne red-teamové hodnotenie]] testovalo, či študenti dokážu manipulovať s hodnotiacim LLM pomocou prompt injection vo svojich odovzdaniach, a manipulácia fungovala: vstreknutia, ktoré hodnotiacemu prikazujú, prerámcujú ho alebo ho nútia hrať rolu, posunú skóre bez zmeny práce.

Držte rubriku a pokyny mimo kontextového okna, ktoré študent ovláda, odstraňujte alebo označujte obsah podobný pokynom, nikdy nedovoľte, aby si odovzdanie určilo vlastné kritériá, a pri každej dôsledkovej známke zachovajte ľudské rozhodnutie. Hodnotiaci, ktorý číta svoje pokyny z textu, ktorý posudzuje, odovzdal rubriku kandidátovi.

## Podopierajte prácu lešením, nedokončujte ju

Systém, ktorý odpovedá, ukončuje myslenie, kvôli ktorému bol kúpený. Do tiketu patria dve veci: brána pokusu, aby sa neobjavil žiadny výstup skôr, než študent niečo zaviaže, a [[human-in-the-loop-ai|cesta ľudskej eskalácie]] s menovaným cieľom, čo pri produkte pre triedu znamená učiteľa, vo forme, s ktorou učiteľ dokáže pracovať. [[scaffolding|Lešenie]] a [[socratic-method|sokratovský]] vzorec sú produktovými verziami toho, čo plán hodiny robí ručne; [[developing-ai-tutor]] pokrýva diagnostiku, rebríky nápovedí a spätnú väzbu podrobne.

## Dajte prístupnosť a rovnosť do špecifikácie

Požiadavky na prístupnosť sú dosť konkrétne na šprint: obsluhovateľnosť klávesnicou, kompatibilita s čítacími obrazovkami, titulky a prepisy, primeraný kontrast, použiteľné textové alternatívy a kompatibilita s asistívnymi [[ai-technologies|technológiami]]. Prístupnostné prvky vytvorené AI stále potrebujú kontrolu kvality. Pozri [[accessibility]].

Testovanie rovnosti má skúmať celý reťazec a rozčleniť správanie podľa jazyka, zdravotného postihnutia, kultúry a ďalších relevantných charakteristík študenta, namiesto spoliehania sa na agregovanú presnosť. Systém, ktorý má dobré skóre v priemere a zlé pre jednu skupinu, odovzdal zlyhanie tejto skupine. Pozri [[bias-mitigation]] a [[equity-in-ai-education|Rovnosť]].

## Navrhujte s ľuďmi, ktorí ho budú používať

[[ko-hughes-vsd-student-centered-its-2026|Ko a Hughes]] použili dizajn citlivý na hodnoty na [[intelligent-tutoring|inteligentný tútorský systém]] so študentmi a vyučujúcimi komunitnej vysokej školy, teda so skupinou, ktorá bola historicky vylúčená z dizajnu učebných platforiem. Našli hodnotové napätia, ktoré treba riadiť, a nie vyriešiť: transparentnosť proti interpretovateľnosti, [[privacy|súkromie]] proti inštrukčnému vhľadu a [[agency|agentúru študenta]] proti systémom vedenému [[scaffolding|lešeniu]]. Študenti uprednostnili kolaboratívne, humanizované vysvetlenia pred surovou transparentnosťou modelu a prototyp zakódoval 16 funkcií zladených s hodnotami naprieč [[explainable-ai|vysvetliteľnou AI]], slučkou s človekom a kontrolami súkromia.

[[wang-teacher-ai-co-design-review-2026|Prehľad Wanga, Liua a Islama]] 28 empirických štúdií pridáva slovník na výber nástrojov. [[generative-ai|Generatívna AI]] sa používa hlavne na plánovanie hodín, generovanie promptov a tvorivú ideáciu, pričom AI vystupuje ako asistent alebo generátor obsahu oveľa častejšie než ako spoludizajnér, a štyri afordancie, efektívnosť, responzívnosť, [[creativity|tvorivosť]] a [[equity-in-ai-education|rovnosť]], ktoré učitelia môžu použiť na posúdenie, ktorý nástroj sedí na ktorý dizajnový problém.

Obe štúdie berú dizajn ako [[human-in-the-loop-ai|kolaboráciu s človekom v slučke]], teda [[human-ai-collaboration|spoluprácu človeka a AI]], a zároveň ako [[usability-research|výskum použiteľnosti]], a nie ako osvetu. Obe zistili, že zainteresovaní vyniesli požiadavky, ktoré by žiadny benchmark presnosti nezachytil, čo je praktický argument za zaplatenie týchto sedení: požiadavky, ktoré by ste inak spĺňali až v pilote.

## V čom sa dizajnové tímy mýlia

Bezpečnosť znamená moderovanie obsahu. Škoda vo vzdelávacom produkte často prichádza ako užitočná odpoveď v nesprávnom okamihu. SafeTutors našiel pedagogickú škodu v každom testovanom modeli a zlyhanie stúpajúce na 77,8 % naprieč rozhovorom, čo nie je kategória, ktorú sú filtre obsahu postavené vidieť.

Väčší model pedagogiku opraví. Škála spoľahlivo nezlepšila bezpečnosť v rozsahu od otvorených modelov s 3,8B parametrami po GPT-5-mini.

Dobrý index vyhľadávania znamená, že obsah je vybavený. EduGuard spája vyhľadávanie s oddeleným overovateľom a testuje adversariálne prompty žiadajúce priamu odpoveď, pretože ukotvené vyhľadávanie stále necháva cestu k prezradeniu odpovede.

Učiteľ je záložné riešenie. Všetkých šesť učiteľov v dizajnovej štúdii žiadalo zaznamenávanie, upozornenia a prepísanie ako podmienku profesijnej zodpovednosti. Podporný tiket nie je prepísanie.

Prístupnosť je neskorší tiket. Buď sedí v špecifikácii, alebo sa stane prepisom, a vygenerované alternatívne texty a titulky stále potrebujú ľudskú kontrolu.

## Čo proti vám príde

**„Aparatúru na hodnotenie nedokážeme postaviť pred spustením.“** Postavte malú. Prvé tvrdenie, ktoré potrebujete, je, čo sa deje naprieč piatimi kolami. Vezmite 40 reálnych kurikulových otázok, každú spustite ako rozhovor v piatich kolách so študentom, ktorý odoláva nápovede, a skórujte podľa 11 dimenzií. To je obhájiteľná bezpečnostná časť a vmestí sa do šprintu.

**„Učitelia chcú upravovať prompty a my nedokážeme zaručiť, čo napíšu.“** Potom zúžte plochu, ktorú upravujú. Systémový prompt zostáva váš; ciele, schválený obsah, rebrík nápovedí a kontakt pre eskaláciu sú ich. Architektúra ohraničeného experta existuje preto, aby konfigurácia zostala v rozsahu, ktorý dokážete testovať.

**„Naše skóre v benchmarku je vysoké.“** Presnosť pri odpovediach v jednom kole nepredpovedá správanie naprieč rozhovorom a benchmark, ktorý meria druhú vec, našiel 77,8 % zlyhaní v mnohokolových nastaveniach pri každom testovanom modeli. Vykážte obe čísla, inak sa to prvé bude čítať ako to druhé.

**„Úplné zaznamenávanie je problém súkromia.“** Je, čo volá po obmedzení účelu, a nie po absencii. Zaznamenávajte to, na čo učiteľ potrebuje reagovať, zvyšok minimalizujte, obmedzte prístup a v produkte uveďte, čo sa uchováva a ako dlho.

## Čo urobiť tento týždeň

**1.** Napíšte hranicu právomoci na jednu stranu: o čom rozhoduje systém, o čom rozhoduje učiteľ a čo by ste obhájili v obstarávacom hodnotení.

**2.** Premeňte taxonómiu s 11 dimenziami na testovací plán a spustite ho v mnohých kolách na 40 reálnych otázkach z jedného kurzu.

**3.** V dizajnovom dokumente oddeľte overovateľa od generátora, aj keď ich prvé zostavenie beží v jednom procese.

**4.** Pridajte bránu pokusu, cieľ eskalácie a prepísanie učiteľom do frontu, s priradenými menami.

**5.** Dajte zoznam prístupnosti a jednu požiadavku na rozčlenenie do akceptačných kritérií tohto vydania.

## Kam ísť ďalej

[[developing-ai-tutor]] pokrýva stavbu a [[designing-ai-into-learning]] pokrýva pedagogické predvolené nastavenia okolo nej. Či vec funguje po nasadení, pozri [[checking-whether-educational-ai-works]]; bezpečnostné koncepty za testovacím plánom [[pedagogical-safety]] a [[hallucination-risk]]; kontext obstarávania [[legal-issues-and-risks]].
