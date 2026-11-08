---
title: "Ako môže AI pomôcť podporiť čítanie a porozumenie textu u študentov?"
created: "2026-11-06T01:45:00-05:00"
type: faq
connected_faqs: [ai-multilingual-learners, reducing-over-reliance]
weight: 62
foundations: [ai-education]
pedagogy: [scaffolding, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
ethics: [accessibility]
audience: [instructors, curriculum designers, instructional designers]
level: [higher ed, secondary, primary education]
updated: "2026-11-08T04:27:05-05:00"
translation_of: "faqs/ai-support-reading-comprehension"
source_updated: "2026-11-06T02:10:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Ak učíte akýkoľvek predmet, vyberáte texty na čítanie, upravujete texty a rozhodujete, či je zdroj pre vašich študentov príliš náročný. AI môže pomôcť pri každej z týchto úloh, ale čísla náročnosti, ktoré vám dáva, nie sú meraniami náročnosti — sú odhadmi o priemernom texte a priemernom čitateľovi a študenti, ktorých skutočne učíte, môžu byť od priemeru ďaleko. Tento FAQ vám hovorí, kde nástroje skutočne pomáhajú, kde zlyhávajú a čo s tým robiť.

## Čo AI skutočne dokáže

**Nájsť a upraviť texty vo veľkom rozsahu.** AI je silná v hľadaní zdrojov, zjednodušovaní slovnej zásoby, vytváraní slovníkov a premene pasáže na [[study-with-ai|študijného sprievodcu alebo zhrnutie]]. Používajte ju na mechanické časti prípravy čítania — skenovanie, zaraďovanie podľa úrovne, vyťahovanie kľúčových pojmov — a ľudskú kontrolu si nechajte na to, čo je dôležité.

**Modelovať čitateľa, nie text.** Keďže premenné čitateľa nesú veľkú časť signálu o tom, ako náročný sa text zdá, nástroje, ktoré profilujú čitateľa, predpovedajú vnímanú náročnosť lepšie než akýkoľvek vzorec. V najväčšej štúdii v znalostnej báze 193 nemeckých stredoškolákov ohodnotilo 3 954 viet a modely založené na profile (najlepší súbor RMSE 0,822 oproti priemernému základu 1,070) prekonali skóre Flesch pre texty, ktoré ohodnotili ten istý materiál ako oveľa náročnejší, než ho študenti zažívali — 72,8% anotácií bolo ľahkých alebo veľmi ľahkých ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck and Conrad, 2025]]). Praktická verzia: hodnotenia niekoľkých študentov k pasáži prekonajú označenie akéhokoľvek vzorca.

## Kde AI zaostáva

**Označenia náročnosti nie sú merania.** Označenie ako „stredná úroveň“ alebo skóre Flesch opisuje povrch textu, nie skúsenosť vašich študentov. Charakteristiky čitateľa — jazyk, ktorým sa hovorí doma, sebahodnotenie zručnosti, dokonca rod — niesli v uvedenej štúdii viac signálu než štatistiky textu a zhoda medzi anotátormi bola nízka (Krippendorffova alfa = 0,23) práve preto, že vnímaná náročnosť sa medzi čitateľmi líši. Berte vzorce a označenia ako hypotézy a kalibrujte ich podľa študentov, ktorí musia text čítať.

**Požiadať AI, aby zastúpila vašich študentov, tiež nefunguje.** V tej istej štúdii ChatGPT a Claude s promptami na hranie rolí nedokázali reprodukovať vnímanie náročnosti študentmi ani s označenými príkladmi — LLM nedokáže [[simulating-students|simulovať čitateľa]] dosť dobre na to, aby za vás posúdil text ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck and Conrad, 2025]]).

**Text napísaný AI sa číta inak než ľudská próza.** V 14 modeloch jazyk AI nadmerne používa zriedkavé nízkofrekvenčné slová a nahromadené podstatné mená, vynecháva voliteľné slová a má dlhšie závislosti v porovnaní s ľudským písaním rovnakého žánru; efekty sú silnejšie vo viackolovom chate než v jednokolových esejach, čo autori spájajú s tlakom iteratívneho rozhovoru ([[clark-ai-generated-language-readability-2026|Clark, Martin and Mahowald, 2026]]). Generované vysvetlenia aj generované materiály na čítanie nesú tento profil, takže text napísaný AI môže byť náročnejší na spracovanie, než naznačuje jeho nameraná úroveň čitateľnosti.

**Zhrnutia AI môžu nahradiť čítanie.** Nástroj, ktorý premení článok na zhrnutie, je užitočný na triedenie, ale ak zhrnutie nahradí text, študenti stratia prax v porozumení, pre ktorú zadanie existovalo — tá istá pasca ako [[reducing-over-reliance|nadmerná závislosť]] inde.

## Čo s tým robiť

**Predtým, než zadáte text,** získajte druhý názor mimo nástroja: prelistujte ho sami, sledujte profil AI prózy vyššie, ak bol vygenerovaný, a — najsilnejší dôkaz — požiadajte jedného či dvoch študentov, aby ho vyskúšali. 5-minútový pilot so skutočnými čitateľmi prekoná akýkoľvek algoritmus náročnosti.

**Keď upravujete text pomocou AI,** udržujte úpravu viditeľnú a kontrolovateľnú. Originály a zjednodušené verzie vedľa seba umožňujú študentom (aj vám) vidieť, čo sa zmenilo, a dávajú viacjazyčným študentom oporu, ktorá neskrýva originál ([[ai-multilingual-learners|ako AI zaobchádza s viacjazyčnými študentmi]] pokrýva riziká jazykovej vhodnosti).

**Keď hodnotíte nástroj alebo rozhranie na čítanie,** pýtajte sa, či modeluje jednotlivého čitateľa alebo nalepí jedno globálne označenie. Pre čitateľov v druhom jazyku je rozdiel často celý príbeh. Pre výskumníkov je otvoreným problémom meranie: stránka [[reading-education|vzdelávanie v čítaní]] mapuje štyri výskumné línie — podpora počas čítania, hodnotenie čítania, adaptívny text a otázka merania pod všetkými tromi ([[educational-measurement|meranie]] je slabým článkom reťaze) — a uvádza dôkazy ako sľubné, ale nerovnomerné, takže silné tvrdenia o prínosoch nástroja na čítanie si zaslúžia rovnaký skepticizmus ako akékoľvek [[checking-whether-educational-ai-works|tvrdenie o učení s AI]].
