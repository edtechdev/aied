---
title: "Aké sú najlepšie postupy pri vykazovaní a interpretácii výskumu AI vo vzdelávaní?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T12:11:34-04:00"
translation_of: faqs/reporting-interpreting-aied-research
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

Váš koncept má v abstrakte číslo do titulku a recenzent sa práve spýtal, čo kontrolná skupina skutočne robila. Alebo ste recenzentom a držíte metaanalýzu, ktorej zhrnutý účinok je 0,67 a ktorej časť o metódach má jeden a pol strany. Alebo vaša katedra píše usmernenie, ako majú zamestnanci vykazovať štúdie o AI, a chce niečo konkrétnejšie než „dodržiavajte štandardy“.

Šesť opomenutí rozhoduje o väčšine týchto prípadov: ktorý systém AI sa použil, na čo bol nakonfigurovaný, akú pedagogickú rolu zohrával, či ľudia navrhli alebo skontrolovali jeho výstup, čo miera výsledku skutočne zachytila a čo autori urobili so skreslením, nákladmi a obmedzeniami. „Neposúditeľné“ je čestný verdikt, keď chýbajú, a je to iný verdikt než „vyvrátené“.

## Krátka verzia

**1.** Opíšte AI ako zásah, nie ako dodávateľa. Model, verzia, konfigurácia, prompty, rola a to, kto navrhol alebo skontroloval výstup.

**2.** Pomenujte pedagogické odôvodnenie a aktívne porovnanie. Názov produktu nie je metóda a bežná výučba nie je spravodlivá kontrola.

**3.** Urobte mieru zhodnou s tvrdením, vrátane toho, či bol výsledok odložený a bez pomoci.

**4.** Vykážte neistotu, ktorú analýza skutočne má: závislé účinky, medzištudijný rozptyl, predikčné intervaly, veľkosti podskupín, publikačné skreslenie.

**5.** Overte každý automatizovaný úsudok, s pomenovaným zlatým štandardom a pomenovaným rozhodcom.

**6.** Vykážte protiváhy: správu, výpočtové náklady, vlastné používanie AI, nulové výsledky a len citácie, ktoré ste overili.

## Opíšte AI ako zásah, ktorý by niekto dokázal znovu zostaviť

Toto je kontrola, na ktorej zlyháva väčšina podaní. Rámec RAISE (*Reporting AI Studies in Education*, Allison 2026) je kontrolný zoznam s 30 položkami v desiatich tematických doménach a jeho diagnostické tvrdenie je konkrétne: podania rutinne vynechávajú, ktorý model sa použil, ako bol nakonfigurovaný, akú rolu zohrával a či ľudskí aktéri navrhli alebo skontrolovali jeho výstupy. Recenzentom potom zostanú štyri nezodpovedateľné otázky. Čo presne AI robila? Bola potrebná? Je to replikovateľné? Sú tvrdenia o učení dôveryhodné?

RAISE prechádza od pedagogického odôvodnenia cez špecifikáciu na úrovni API, interakciu študenta s AI, prístupnosť a kultúrnu vhodnosť, účastníkov a prostredie, zapojenie ľudí, dizajn, etiku, transparentnosť a reprodukovateľnosť až po obmedzenia. Jeho sprievodná Matica etiky a rizika pokrýva riziká pre [[agency|agentúru]] študenta, [[equity-in-ai-education|rovnosť]], [[governance|správu]] dát a algoritmickú transparentnosť. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah a Gašević (2026)]] ponúkajú zjednodušenú alternatívu. TEP-AIED spája transparentnosť, etiku a pedagogiku do jednej vzájomne závislej štruktúry, poskytuje tabuľku usmernení namapovanú na sedem častí článku a žiada autorov, aby pridali podsekciu Metódy s názvom „Transparency, Ethics, and Pedagogy Considerations“. Ich dôvod je praktický: RAISE je komplexný a na rutinné empirické použitie príliš jemnozrnný. Vyhlásenie patrí pod [[ai-use-disclosure|vyhlásenie o používaní AI]] a je tým, čo robí tvrdenia o [[privacy|súkromí]] a [[ethics|etike]] overiteľnými.

Pedagogické odôvodnenie je v RAISE na prvom mieste, pretože AI nie je neutrálny nástroj. Hodnota závisí od zosúladenia medzi problémom učenia, teoretickým odôvodnením a mapovaním cieľov na miery výsledkov. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] zistil, že všetky okrem dvoch zo 14 auditovaných metaanalýz definovali zásah ako nástroj, ChatGPT alebo GenAI alebo všeobecne „AI“. Názov produktu nie je [[pedagogy|pedagogika]]. Zaobchádzať s vystavením ChatGPT ako s jednou spoločnou intervenciou je porovnateľné s metaanalýzou účinkov „papiera“.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich a spol. (2025)]] tvrdia to isté pre primárne štúdie. Pri audite podskupiny porovnaní, na ktorých stojí významná metaanalýza, zistili, že len 21 % malo dobre definovaný zásah, kontrolnú skupinu a platnú mieru učenia. Uvedená veľkosť účinku (g = 0,7) tiež prevyšovala veľkosť účinku [[intelligent-tutoring|inteligentných doučovacích systémov]] postavených na mieru (0,66), a tá medzera je varovný signál: zásah, ktorý prekonáva doučovanie postavené na mieru, je pravdepodobne zväzok rôznych vecí pod jedným označením.

Skúškou je jedna otázka: dokázal by kompetentný čitateľ znovu zostaviť vašu intervenciu len z časti o metódach a dostať to isté?

## Rozhodnite, čo vám vaša miera dovoľuje tvrdiť

V O'Neillovom audite dôkazov zo 46 náhodne vybraných primárnych štúdií malo 28 (61 %) problémy s validitou. Najčastejší bol nesúlad závislej premennej (n = 15), nasledoval nesúlad nezávislej premennej (n = 11), problémy s experimentálnym dizajnom (n = 7), problémy s extrakciou dát (n = 6), absencia kontrolnej skupiny (n = 6) a nenáhodné pridelenie do skupín (n = 6). Viacrozmerné výsledky sa rutinne zlučovali, ako keby boli zameniteľné, pričom skóre testov, kvalita domácich úloh, [[motivation|motivácia]], [[self-efficacy|sebaúčinnosť]], postoje a [[student-engagement|angažovanosť]] sa zliali do jedného čísla „akademického výkonu“.

Tomu zabránia dva návyky vykazovania. Uveďte, ktorý konštrukt nástroj meria a že bol validovaný pre túto populáciu; [[self-report-measures|sebavýpovedné miery]] ukazujú, kde sa miery založené na vnímaní odchyľujú od správania, a [[assessment-validity|validita hodnotenia]] pokrýva validitu konštruktu. Potom vykážte výsledok, ktorý nezávisí od presvedčenia študenta o pomôcke. Bezprostredný výkon pri úlohe s pomocou nie je [[learning-gains|prírastok učenia]] a [[cognitive-offloading|kognitívne odľahčenie]] je mechanizmus, ktorý tieto dve veci najpravdepodobnejšie oddeľuje. [[verification-quality-reliance-calibration-genai-2026|Miniprehľad z roku 2026 so 493 záznamami a 14 prioritnými štúdiami]] zistil, že žiadna nemerala úspech overovania a následné rozhodnutie o závislosti spoločne voči nezávisle rozhodnutému štandardu kvality výstupu, a málo z nich hľadelo za bezprostredný výkon na odložené uchovanie alebo [[transfer-of-learning|prenos]].

Strop uveďte výslovne v diskusii. Štúdia, ktorá merala kvíz urobený s otvoreným nástrojom, môže podporiť tvrdenie o asistovanom výkone. Nemôže podporiť tvrdenie o tom, čo sa študenti naučili, a tá veta stojí jeden riadok.

## Vykážte neistotu, ktorú vaša analýza skutočne má

Pri syntézach vykážte spracovanie závislých účinkov, medzištudijný rozptyl, predikčné intervaly a posúdenie publikačného skreslenia. Samotné I² tú prácu nezvládne. O'Neill zistil závažnú heterogenitu všade, kde bola uvedená, od 77,2 % do 94,4 % v 13 metaanalýzach, pričom 12 bolo nad 80 %, a nikdy nevyriešenú: žiadna analýza moderátorov nedosiahla minimálnu veľkosť podskupiny desať štúdií. Dvanásť metaanalýz považovalo závislé veľkosti účinku z tej istej štúdie za nezávislé, čo nafukuje zdanlivý dôkaz. Len štyri uviedli medzištudijný rozptyl (τ²) a len dve predikčný interval, a oba intervaly obsahovali nulu. Publikačné skreslenie nebolo v tomto súbore nikde posúdené platne.

Údaje o heterogenite potrebujú pripojený model, pretože I² závisí od presnosti. [[limitations-in-aied-research|Obmedzenia výskumu AIEd]] dokumentujú jednu syntézu s I² = 82,98 % pri modeli s fixnými účinkami a 15,75 % pri náhodných účinkoch. Čitateľ, ktorý dostane len prvé číslo, nevie určiť, ako nekonzistentný korpus je. Vykážte τ² a predikčný interval vedľa neho, čo je aj konvencia, ktorú žiada [[meta-analysis-systematic-review|literatúra o prehľadoch]].

Potom zľavte zo svojho vlastného titulku. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš a spol. (2026)]] zlúčili 1 840 veľkostí účinku zo 67 metaanalýz a zistili, že po modelovaní publikačného skreslenia priemerný účinok klesne na približne jednu tretinu publikovaného mediánu (SMD = 0,196 oproti 0,67), s predikčným intervalom od -1,521 do +1,908. Ten interval siaha od podstatnej škody po podstatný prínos pre hypotetickú novú štúdiu. Je to najužitočnejšie číslo v článku a zároveň to, ktoré sa z abstraktu najpravdepodobnejšie vynechá.

## Povedzte, ako ďaleko tvrdenie dosiahne

Spravodlivosť a rozsah zlyhávajú rovnako: veľký účinok, ktorý znamená menej, než vyzerá. Jedenásť zo 14 auditovaných metaanalýz nestanovilo hranicu populácie, takže „študenti“ siahlali od detí po medikov v príprave. Jeden kurz, jedna inštitúcia, jedna disciplína alebo jedna krajina neoprávňujú všeobecné tvrdenie a výsledky pre jeden nástroj sa na iný prenášajú len zriedka.

Väčšinu veľkých účinkov vysvetľujú tri dôvody a každý sa dá vykázať. Jedným je novosť. Ďalším je čas navyše na úlohe. Tretím je porovnávacia podmienka, ktorá dostala bežnú výučbu, a nie aktívnu kontrolu. Vykážte, čo kontrola skutočne robila, koľko času každé rameno strávilo a ako nový nástroj bol. Uveďte aj hranicu populácie, pretože účinky sa medzi skupinami študentov líšia a práve neuvedená hranica umožňuje, aby jedno zhrnuté číslo zastupovalo všetky; [[differential-effects-across-learner-groups|Rozdielne účinky naprieč skupinami študentov]] vykladá tú variáciu.

Berte nástroj ako pohyblivý cieľ. Proprietárne systémy sa menia bez oznámenia, takže zistenie je viazané na verziu modelu a [[benchmark]] môže v ďalšom vydaní už neplatiť. Verzia a dátum prístupu preto patria do časti o metódach, a nie len pre replikovateľnosť.

## Overte automatizované úsudky

[[ai-ed-evaluation|Hodnotenie AIEd]] čoraz častejšie deleguje skórovanie na modely, čo robí z postupu overovania súčasť výsledku, a nie prílohu. Opis metrík [[intelligent-tutoring|doučovacieho systému AI]] v Khan Academy uvádza, že kognitívnu angažovanosť skóruje [[llm|rozhodca LLM]] kalibrovaný voči ľudským pedagogickým expertom na F1 0,83, a že pohyby metrík prišli z viac než 40 živých experimentov za päť mesiacov, a nie z offline hodnotenia ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi a spol. 2026]]). [[machines-misread-pedagogical-quality|Tseng a spol. (2026)]] ukazujú, že nezhoda medzi človekom a strojom v kvalite [[formative-assessment|predtestovej otázky]] je systematická, a nie náhodná, a že operacionalizácia rubriky záleží viac než promptovanie najprv s odôvodnením.

Zhoda s ľudskými kódiermi je iná vec než kvalita a vykazovať ju, akoby bola kvalitou, je terčom recenzentov. [[agreement-not-quality-llm-coding-verification|Liu a spol. (2026)]] dali nezávislému expertovi posúdiť 855 párových sád kódov naslepo voči zdroju. Zhoda človeka a LLM dosiahla priemerný Jaccard 0,30 oproti 0,52 pri zhode človeka s človekom, kým slepý overovateľ preferoval ľudské a strojové kódovanie v nerozoznateľnej miere (51,5 % oproti 48,5 %, p = 0,537). Vykážte kalibračný cieľ, zlatý štandard a to, kto rozhodol o nezhode. Tieto tri položky umožňujú čitateľovi rozhodnúť, akú váhu automatizované skóre unesie.

## Vykážte náklady a vlastné používanie

Prehľad všetkých konferenčných článkov AIED 2025 našiel vzorec prijímania LLM bez vyhlásenia: väčšina projektov LLM používala a menej než hŕstka uviedla spotrebu zdrojov alebo uhlíkovú stopu. Ten článok poskytuje open-source metódu s nástrojmi na meranie pre lokálny aj cloudový hardvér a vzorec na odhad výpočtových nákladov frontierových modelov, ktorých počet parametrov nie je zverejnený. Jeho argument je, že nevykazovať tieto náklady je samo etickým problémom. Správa dát, súhlas, prístupnosť a kultúrna vhodnosť patria do toho istého odseku (položky RAISE; [[universal-design-for-learning|univerzálny dizajn pre učenie]], [[accessibility|prístupnosť]]). [[equity-ethics-pedagogical-safety-research|Rovnosť, etika a pedagogická bezpečnosť vo výskume]] prináša plnšie spracovanie.

Vaše vlastné používanie AI vo výskumnom procese potrebuje rovnaké vyhlásenie. [[prisma-llm-ai-assisted-systematic-reviews-2026|Analýza PRISMA-LLM od Zabaletu a Lin]] z 888 článkov o automatizácii prehľadov ukazuje, ako nerovnomerné toto vykazovanie je. Od roku 2023 38,0 % článkov o softvéri a produktoch neuviedlo žiadne hodnotenie, oproti 9,3 % článkov o LLM. Priemerná bohatosť vykazovania bola 6,3 pri článkoch o LLM a 3,3 pri článkoch o softvéri a produktoch. 84,1 % používania LLM sa opieralo o proprietárne alebo hostované systémy, len 4,9 % o otvorené váhy. Ich rámec oddeľuje vyhlásenie o implementácii od hodnotenia citlivého na dôsledky v piatich úrovniach vykazovania, čo je použiteľná šablóna na opis toho, čo nástroj v prehľade robil.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai a Chan (2026)]] dopĺňajú pohľad zo strany autora. Z 28 výskumníkov v postgraduálnom štúdiu 27 používalo GenAI pri tvorbe nápadov, prehľade literatúry, vysvetľovaní, spracovaní dát, programovaní, [[writing-education|akademickom písaní]], úprave a preklade. Používanie kalibrovali podľa závažnosti a disciplinárnych noriem. Pravidlá ich inštitúcií sa zaoberali výučbou a hodnotením, a nie výskumnou praxou, čo necháva rozhodnutie o vykazovaní na autorovi.

## Publikujte nulové výsledky a overte každú citáciu

[[citation-errors-hallucinations-computing-education-2026|Denny a spol. (2026)]] overili 30 vymyslených odkazov v 14 článkoch, pričom počet na jednom technickom sympóziu stúpol z 3 v roku 2025 na 17 v roku 2026, teda 2,3 % článkov v tom ročníku. Písanie s pomocou LLM robí z vierohodnej vymyslenej citácie lacnú záležitosť, a preto musí overovanie prebehnúť pred podaním, a nie po prijatí.

Protiváhy v tom audite záležia, keď ho citujete. Väčšina označených odkazov bola neškodná: 229 boli nesúlady v metadátach ACM, kde bol PDF správny, a 188 boli platné bibliografické varianty. Počet vymyslených je zámerná dolná hranica a neškodná väčšina nie je zaokrúhľovacia chyba. Overte každú položku, ktorú osobne skontrolovať nedokážete.

Vykazovanie nulových a negatívnych zistení je druhá polovica čestnej dôkazovej základne. Bartoš a spol. našli silný dôkaz o potlačených nulových výsledkoch (každý Eggerov test p < 0,0001) a extrémnu heterogenitu (τ = 0,869), pričom žiadna podskupina podľa výsledku, odboru, úrovne alebo roly AI neukazovala konzistentné prírastky. Našli tiež žiadny rozdiel medzi štúdiami publikovanými pred januárom 2023 a po ňom, čo podkopáva tvrdenie, že práve moderné generatívne nástroje prinášajú prírastky.

## V čom sa výskumníci v tomto mýlia

**„Veľkosť účinku je vlastnosť modality.“** Neexistuje žiadny účinok AI vo vzdelávaní, ktorý by sa dal vykázať. Všetky okrem dvoch auditovaných metaanalýz definovali zásah ako názov nástroja, len 21 % auditovaných porovnaní malo definovaný zásah, kontrolu a platnú mieru a zhrnuté g = 0,7 sedelo nad doučovaním postaveným na mieru s 0,66. Veľkosť účinku patrí dizajnu, populácii a príležitosti merania.

**„Zhrnutý priemer je to, čo sa stane mojim študentom.“** Priemer opisuje súbor štúdií a nič v ňom nefixuje jednu konkrétnu triedu. Priemer upravený o skreslenie je SMD = 0,196 a jeho predikčný interval siaha od -1,521 do +1,908. Uvedená heterogenita je nad 80 % v 12 z 13 metaanalýz a žiadna podskupina vo väčšom súbore neukazovala konzistentné prírastky. Zmenu na úrovni študenta z ani jedného čísla identifikovať nemožno.

**„Nulový výsledok znamená, že nástroj nefunguje.“** Nula je tvrdenie o dizajne pri danej presnosti a absencia zistiteľného účinku v jednej štúdii je fakt o tej štúdii. SMD = 0,196 upravené o skreslenie prišlo z literatúry, v ktorej bol každý Eggerov test významný, takže obhájiteľné čítanie korpusu je malý a neistý priemer. Ani žiadna podskupina podľa výsledku, odboru, úrovne alebo roly AI vo väčšom súbore neukazovala konzistentné prírastky. Zdokumentovaný problém tejto literatúry je potláčanie.

**„Jedna štúdia to rozhodne.“** Základné miery hovoria inak. 61 % preverených primárnych štúdií malo problémy s validitou, jeden kurz alebo inštitúcia neoprávňuje všeobecné tvrdenie a proprietárny systém je pohyblivý cieľ viazaný na verziu modelu. Jedna štúdia je dátový bod s pripojeným dizajnom.

**„Vysoká zhoda s ľudskými kódiermi znamená, že model skóruje správnu vec.“** Zhoda človeka a LLM bola 0,30 oproti 0,52 pri zhode človeka s človekom a slepý overovateľ nedokázal rozlíšiť tie dve sady kódov, 51,5 % oproti 48,5 %. Zhoda meria konzistenciu s kóderom a kvalita je samostatná otázka, ktorá potrebuje zlatý štandard a rozhodcu.

## Námietky, ktoré budete počuť

**„Recenzenti chcú novosť, nie detaily o metódach.“** Časopisy sa uberajú iným smerom. RAISE a TEP-AIED dávajú redaktorom konštrukt, ktorý môžu vyžadovať, a podsekcia Metódy v TEP-AIED je vstupný bod s malým trením. Detail o metódach je to, čo premieňa neposúditeľný článok na citovateľný.

**„Nemáme na to miesto.“** Päť úrovní vyhlásenia sú úrovne vykazovania, a nie úrovne rizika, takže hĺbka hodnotenia môže byť veta alebo dve. Verzia, prompty a rola sa zmestia do krátkeho odseku. Náklady a správa sa zmestia do vety o obmedzeniach.

**„Všetci to vykazujú takto.“** Čísla hovoria, že problémom je norma: 61 % preverených primárnych štúdií s problémami s validitou, 12 z 13 metaanalýz nad 80 % heterogenity, 38,0 % článkov o softvéri a produktoch bez hodnotenia.

**„Náš nástroj je proprietárny, takže model vykázať nemôžeme.“** Vykážte verziu, dátum prístupu, konfiguráciu, prompty, ktoré ste zadali, rolu a zábrany. Ak dodávateľ nechce povedať, toto obmedzenie patrí do obmedzení ako hranica tvrdenia.

**„Vykazovanie núl nám uškodí.“** Potlačené nuly sú zdokumentovaný mechanizmus za priemerom SMD = 0,196 upraveným o skreslenie. Práve ich publikovanie udržiava váš pozitívny výsledok čitateľný.

## Čo urobiť tento týždeň

**1.** Prečítajte svoj abstrakt proti časti o metódach a vymažte každé tvrdenie, ktoré metódy nedokážu podporiť. Jedna veta o strope miery zvyčajne stačí.

**2.** Pridajte odsek so špecifikáciou: model, verzia, dátum prístupu, konfigurácia, prompty, rola a to, kto navrhol alebo skontroloval výstup.

**3.** Vytiahnite τ², predikčný interval a posúdenie publikačného skreslenia z prílohy do výsledkov, alebo priamo povedzte, že ste ich nevypočítali.

**4.** Napíšte hranicu populácie a kontrolnú podmienku do vyhlásenia o dizajne vrátane toho, koľko času každé rameno strávilo.

**5.** Overte každý odkaz, ktorý ste osobne nečítali, a začnite poľom autora.

## Kam ďalej

[[research-methods-aied|Výskumné metódy v AI vo vzdelávaní]] pokrývajú dizajnové voľby pod týmito rozhodnutiami o vykazovaní a [[limitations-in-aied-research|Obmedzenia výskumu AIEd]] sú katalógom režimov zlyhania s pripojenými číslami. [[interpreting-and-applying-aied-research|Interpretácia a uplatňovanie výskumu AIEd]] je čitateľská strana toho istého problému, [[does-ai-help-students-learn|dôkazy o trvácom učení]] sú to, k čomu väčšina týchto mier smeruje, [[evaluating-ai-interventions-methods]] pokrýva miery a porovnávacie dizajny a [[checking-whether-educational-ai-works]] je kratšia verzia otázky. Medzery, ktoré táto literatúra nevyplnila, nájdete v [[research-gaps-aied]].
