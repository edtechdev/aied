---
title: "Aké možnosti a otázky treba zvážiť pri zavádzaní nástrojov AI?"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-14T04:15:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-14T04:15:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Vedúci katedry má pred sebou tri cenové ponuky na platformu [[intelligent-tutoring|AI doučovania]] a termín v piatok. [[teacher-role|Učiteľ]] chce používať bezplatný nástroj, ktorý už používa polovica zboru. Riaditeľ pre informačné technológie dostane otázku, či by inštitúcia mala prevádzkovať vlastný model, a nevie povedať, koľko by to stálo.

To je tá istá otázka v troch výškach. Možností je menej, než naznačuje zoznam od dodávateľa, a problémy vydržia dlhšie ako ktorýkoľvek produkt.

Voľba by mala zodpovedať rozhodnutiu, ktoré máte pred sebou. Jednotlivec rozhoduje o tom, čo vloží do nástroja. Inštitúcia rozhoduje o tom, kto smie používať ktorý model, na akých dátach, za akú cenu a kto odpovie, keď sa niečo pokazí. Väčšina zlých rozhodnutí o zavádzaní vzniká tým, že sa inštitucionálna otázka odpovie individuálnym nástrojom.

## Stručná verzia

Päť pravidiel pokrýva väčšinu.

1. Najprv si ujasnite hranicu dát, pretože všetko ostatné sa dá prejednať a toto nie.
2. Vyberte si najmenší tvar, ktorý stačí: bezplatné alebo externé nástroje na pilot, hostovanú platformu, keď potrebujete kontrolu nad dátami bez GPU, bránu, keď potrebujete kvóty a smerovanie, a vlastnú inferenciu len vtedy, keď zlyhajú ostatné tri.
3. Porovnajte cenu za sedadlo a meranú cenu s vlastnými číslami, pretože väčšina používania zvyčajne pochádza od niekoľkých náročných používateľov.
4. Urobte schválenú cestu rýchlejšou než neschválenú, keďže EDUCAUSE zistil, že 94 % zamestnancov a učiteľov používa AI pri práci, 54 % pozná politiku a 56 % používa nástroje, ktoré inštitúcia neposkytuje.
5. Potom vopred rozhodnite, aký dôkaz by vás prinútil skončiť, pretože zavádzanie bez testu ukončenia sa štandardne stane trvalým.

## Na individuálnej úrovni

Inštruktor alebo študent robí najprv rozhodnutie o dátach a až potom rozhodnutie o výučbe. Mená študentov, údaje z IEP, disciplinárne poznámky a nepublikovaný výskum vytvárajú zodpovednosť, preto najprv anonymizujte a skontrolujte, či nástroj ešte stále zvládne úlohu. Potom si prečítajte podmienky: uchovávanie, trénovanie na vašich vstupoch a subdodávatelia zvyčajne sedia v dokumente, ktorý nikto neotvára, a ak odpoveď nenájdete do piatich minút, považujte ju za neznámu.

Vedzte, čo nástroj robí dobre. Generovaný text je najsilnejší pri koncipovaní, prestavbe a zhrnutí a najslabší pri aritmetike, citáciách a čomkoľvek, čo potrebuje aktuálne fakty. Vedzte aj to, čo vás stojí. Bezplatná úroveň je bezplatná preto, lebo používanie je produkt, alebo preto, že sa úroveň zmení, a oboje je dôvod mať na pamäti možnosť odchodu.

Zostávajú dve otázky. Koho ešte ovplyvní, keďže nástroj, ktorý pretvára kurz, je rozhodnutím pre študentov v ňom. A či je povolený: ak politika existuje, prečítajte si ju raz, a ak neexistuje, dôkazy o [[shadow-ai|tieňovej AI]] naznačujú, že politiku už vytvárate automaticky.

Hrubé pravidlo: používajte schválený nástroj, keď je poruke, a keď nie je, zapíšte, čo ste urobili a prečo. Práve tento záznam vás ochráni, ak bude úsudok neskôr spochybnený.

## Na inštitucionálnej úrovni

Inštitúcia kupuje v jednom nákupe službu, tok dát, podpornú povinnosť a politický záväzok. Skutočné menu tvorí šesť tvarov a väčšina inštitúcií je v dvoch alebo troch, aj keď o tom nevie.

Najjednoduchší začiatok je bezplatný externý nástroj. AI Tutor Pro od Contact North nepotrebuje účet a Playlab umožňuje učiteľom vytvárať aplikácie postavené na ich vlastných [[curriculum-design|osnovách]], pričom modely hostuje dodávateľ. Oba sú dobré na pilot a slabé ako trvalé riešenie: žiadna stopa auditu, žiadna kontrola kvót a podmienky, ktoré sa môžu zmeniť.

Kúpa sedadiel u komerčného nájomcu, či už [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot alebo Google Gemini for Education, prináša rýchle obstarávanie, SSO a administrátorskú konzolu, a výber modelu i uchovávanie necháva na dodávateľovi.

Platforma, ktorú hostujete, udrží dáta bližšie. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) sa nasadzuje do vášho vlastného účtu AWS a pilot na Vanderbilt University uvádzal približne \$3 na používateľa mesačne pri 1 300 používateľoch, pričom polovica z nich minula na tokeny menej ako \$1. To kupuje kontrolu nad dátami bez GPU.

Brána nad zmiešanými poskytovateľmi postaví pred niekoľko z nich jedny dvere. Prenáša kvóty, SSO, logovanie a regionálne smerovanie; Fontys ju prevádzkoval pre 300 používateľov s mesačným stropom \$500, ktorý sa nikdy neprekročil, a [MindRouter](/aied/resources/mindrouter/) pridáva plánovanie vážené podľa rolí a meranie energie.

Vaša vlastná inferencia je najdrahší a najnezávislejší tvar. Dve služby Purdue University dosiahli viac ako 1000 používateľov na 10+ modeloch [[open-source|s otvoreným zdrojovým kódom]] za približne \$100,000 na hardvér, ešte pred personálnymi nákladmi. Odpovie regulátorovi bez toho, aby žiadala o povolenie dodávateľa.

Posledným tvarom je AI v nástrojoch, ktoré už prevádzkujete: typ otázky v Moodle, AI partner diskusnej platformy, nástroj na spätnú väzbu k esejam. Nízka námaha a zmena po kurzoch, pričom v centre sa naučíte málo.

## Problémy, ktoré nezmiznú

[[privacy|Ochrana údajov]] je na prvom mieste. Dôležité je, ktorý záznam teraz existuje a predtým neexistoval, kde žije a kto ho môže získať. Nástroj, ktorý dostane zoznam triedy, vytvoril inštitucionálny záznam bez ohľadu na to, čo hovorí zmluva.

Ďalej sú identita a prístup. Čokoľvek používané vo veľkom potrebuje SSO, prístup podľa rolí a odoberanie prístupu, a nástroj, ktorý nevie zrušiť účet odchádzajúceho zamestnanca, zanechá trvalý účet s vašimi dátami.

Náklady závisia od toho, ako sa cena počíta. Cena za sedadlo odmeňuje počet ľudí a meraná cena odmeňuje používanie. Keďže malý podiel používateľov zvyčajne generuje väčšinu tokenov, cena za sedadlo vyzerá lacno, kým nároční používatelia neodídu inam.

Meranie zvyčajne chýba. EDUCAUSE zistil, že 92 % má stratégiu AI súvisiacu s prácou a 13 % meria návratnosť investícií. Ak neviete povedať, čo nástroj nahradil, neviete obhájiť obnovenie.

[[equity-in-ai-education|Rovnosť]] a prístupnosť patria do obstarávania, nie do neskoršej opravy. Nástroj, ktorý vyžaduje rýchle pripojenie, platenú úroveň alebo plynulú angličtinu, rozdáva svoj prínos nerovnomerne.

[[academic-integrity|Akademická integrita]] mení to, čo hodnotenie meria. Keď nástroj dokáže splniť zadanie, revíziu potrebuje zadanie.

Personál a závislosť od dodávateľa sú rovnako dôležité ako cena. Každý z vyššie uvedených tvarov okrem bezplatného potrebuje vlastníka a zvyčajná chyba je kúpiť štvrtý alebo piaty tvar a obsadiť ho niekým, kto už bol zaneprázdnený. Pýtajte sa, čo sa stane pri obnovení, pri zmene ceny a pri ukončení modelu; brány existujú preto, aby odpoveďou bola zmena smerovania, nie migrácia.

## Ako vyzerá dobrý prvý rok

Pred spustením čohokoľvek vyberte dve alebo tri miery: kto to používal, na čo, koľko to stálo na aktívneho používateľa a čo sa zmenilo v práci. Pilot, ktorý nevie vyprodukovať tieto čísla, je demo s rozpočtom.

Súčasne skontrolujte okrajové podmienky. Ak sa nástroj dotkol študentských záznamov, zhodoval sa tok dát s tým, čo ste povedali kancelárii pre ochranu údajov? Ak používanie zostalo nemerané, bolo to preto, že nástroj nevedel reportovať, alebo preto, že sa nikto nepýtal?

Udržte schválenú cestu krátku. Čísla EDUCAUSE naznačujú, že ľudia obchádzajú správu preto, že schválená cesta trvá dlhšie než úloha. Brána s kartou modelu a prístupom v ten istý deň je nástroj správy rovnako ako IT pohodlie.

## Bežné chyby

Kúpa platformy pred pomenovaním problému prinesie štatistiky používania a málo iného. Brať bezplatnosť ako stratégiu funguje na pilot a zlyháva ako infraštruktúra. Lokálny model mení to, koho možno predvolať na súd; nerozhoduje o tom, či sa prompty uchovávajú. Meranie spokojnosti namiesto účinku mení „učiteľom sa to páčilo“ na zistenie, ktorým nie je. A politika zverejnená bez schodnej cesty opisuje preferencie, nie pravidlá.
