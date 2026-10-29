---
title: "Ako má byť AI začlenená do učebnej skúsenosti?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/designing-ai-into-learning
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

V osnove modulu je riadok s nápisom „AI aktivita“ a nikto nedokáže povedať, čo nahrádza. Alebo vyučujúci požiadal o pridanie chatbota do kurzu, ktorý už funguje, a vašou úlohou je umiestniť ho tak, aby ste nerozbili tú časť, vďaka ktorej kurz fungoval.

Začnite od cieľa učenia a od aktivity, ktorá ho vytvára. Ten istý model môže byť lešením, [[socratic-method|sokratovským]] partnerom, čitateľom konceptov, [[simulation|simuláciou]] alebo odpovedacím autom, a to, ktorý z nich dostanete, závisí od návrhu, nie od modelu. Pomenujte režim, ktorý budujete, postavte pokus študenta pred akúkoľvek pomoc a ponechajte aspoň jednu cestu kurzom, ktorá funguje bez nástroja.

## Stručná verzia

**1.** Napíšte vetu o tom, čo študenti dokážu po kurze bez nástroja, a overujte proti nej každú funkciu AI.

**2.** Zoslaďte interakciu: študent sa pokúsi, AI podporí, študent vyhodnotí alebo prepracuje, študent preukáže.

**3.** Pomenujte režim na rebríku ICAP. Obchádzanie a lešenie môžu byť ten istý nástroj na rôznych priečkach.

**4.** Umiestnite AI tam, kde postupnosť kurzu už zamýšľa konkrétnu aktivitu, nie na koniec ako bonus.

**5.** Odoprite nástroj, kým sa schopnosť formuje, a potom ho vráťte na kontrolnom bode, ktorý študent nedokáže predstierať.

## Rozhodnite, čo študent robí bez nástroja

Koncept [[pedagogy|Pedagogiky a vyučovacích stratégií]] v databáze poznatkov poskytuje test: zachováva konfigurácia aktivitu, ktorá vytvára zamýšľané učenie? Odpovedzte na to na papieri, skôr než niekto vyberie funkciu.

[[finkelstein-principled-ai-education-2025|Rámec principiálneho AI vzdelávania]] uvádza všeobecné pravidlo: technológia má rozširovať, nie vytláčať ľudské schopnosti, ktoré má vzdelávanie rozvíjať. Napísané ako test pre modul to znamená pomenovať schopnosť, pomenovať aktivitu, ktorá ju buduje, a spýtať sa, či AI sedí vnútri tejto aktivity, alebo vedľa nej.

## Pokus pred pomocou

Predvolený vzorec, ktorý prežije kontakt s reálnou triedou: **študent sa pokúsi, AI podporí, študent vyhodnotí alebo prepracuje, študent preukáže porozumenie.**

V praxi to znamená žiadať počiatočnú predpoveď alebo riešenie predtým, než sa objaví akákoľvek pomoc, a uprednostňovať otázky, náznaky, príklady, protiargumenty a [[feedback|spätnú väzbu]] pred okamžitým dokončením. Zachovajte [[productive-failure|produktívne zlyhanie]] tam, kde slúži učeniu. Vyžadujte overovanie závažných tvrdení, zabudujte vysvetľovanie a [[learning-by-teaching|učenie sa vyučovaním]] a podporu postupne utlmujte, ako rastie kompetencia. Ponechajte časť práce bez AI, aby študenti dokázali kalibrovať, čo zvládnu sami.

Syntéza [[reducing-ai-misuse|Redukovanie zneužívania AI]] odporúča ten istý tvar ako postup najprv myslieť, potom AI, potom reflektovať, s úmyselnými kontrolnými bodmi hodnotenia.

## Pomenujte režim, pre ktorý navrhujete

[[thermomix-genai-education-analogy-2026|Analógia kuchynského stroja od Rummelovej, Nachtigallovej a Panaderovej]] preformulúva otázku z toho, či študenti používajú [[generative-ai|generatívnu AI]], na to, ako toto používanie formuje to, čím sa stanú. Premietnutá na [[icap-framework|ICAP]] a [[samr-model|SAMR]] dáva rebrík. Úplné zadanie úlohy bez prepracovania alebo [[critical-thinking|kritického zapojenia]] je pasívna substitúcia a hrozí pri nej [[cognitive-offloading|úbytok zručností a nadmerná závislosť]]. [[prompt-engineering|Spresňovanie promptov]] a krížová kontrola výstupov si vyžadujú [[prior-knowledge|predchádzajúce vedomosti]] a [[self-regulated-learning|samoreguláciu]], čo je aktívna úroveň alebo augmentácia. Používanie AI na brainstorming, osnovu a hodnotenie vlastnej práce je konštruktívna úroveň alebo modifikácia. AI ako skutočný dialógový partner pri spoluvytváraní a adaptívnej spätnej väzbe je interaktívna úroveň alebo redefinícia.

Dôsledok je priamy. Ten istý nástroj je obchádzkou na jednej priečke a [[scaffolding|lešením]] na nasledujúcej, takže návrhový dokument má pomenovať zamýšľaný režim.

## Umiestnite ho tam, kde postupnosť zamýšľa aktivitu

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec a Horvat]] analyzovali plánovanú postupnosť 29 064 vyučovacích a učebných aktivít v 554 kurzoch a našli viditeľnú gramatiku návrhu. Aktivity typu osvojovania sú najčastejším vstupným bodom a najväčším jednotlivým typom, nad 20 %. Typ učenia sleduje zamýšľanú úroveň Bloomovej taxonómie, pričom osvojovanie klesá z približne 50 % na úrovni 1 na približne 20 % na úrovni 6 a produkcia rastie nad 20 % na úrovniach 5 a 6. Najsilnejším prechodom v dátach je prechod od hodnotenia k diskusii, s hodnotou 0,332.

Pre návrh AI z toho vyplývajú dve poučenia. Umiestnite nástroj tam, kde postupnosť zamýšľa typ aktivity. A keďže spätná väzba sa zhlukovala s [[collaborative-learning|spolupracou]], [[group-work|skupinovou prácou]] a prítomnosťou [[teacher-role|učiteľa]], práve do štruktúr s rovesníkmi a do synchrónnych štruktúr sa má AI podpora zapájať, a nie ich nahrádzať.

## Rozhodnite, čo odoprieť a kedy to vrátiť

[[refrain-amplify-genai-curriculum-2026|Rámec „najprv zdržať, potom zosilniť“ od Torres-Sahli a kolegov]] posúva túto otázku na úroveň programu. Odoprite generatívny nástroj, kým sa schopnosť formuje, a potom ho vráťte, keď ho študent dokáže viesť, posúdiť, čo vráti, a zodpovedať za to, s kontrolným bodom, ktorý sa nedá ľahko predstierať, na každom zlome.

Zariadenia sa riadia hľadiskom formovania verzus [[cognitive-offloading|odľahčenia]]: povolené tam, kde podporujú angažovanú prácu, vylúčené tam, kde odčerpávajú pozornosť. To mení rozhodnutia o odľahčení na otázku [[curriculum-design|kurikula]] a [[governance|riadenia]], ktorá prichádza pred návrhom na úrovni kurzu, nie po ňom.

## Overte, či je zladenie skutočné

[[mcinnes-salvaging-constructive-alignment-genai-2026|Diskurzívna analýza McInnesa a kolegov]] zo 14 dokumentov usmernení pre vysoké školy varuje, že rady formulované cez efektivitu, napríklad používanie generatívnej AI na tvorbu výsledkov učenia, hodnotiacich kritérií a osnov kurzu, vytvárajú [[assessment|zladenie]], ktoré vyzerá zladené, ale zanedbáva konštruktívnu polovicu. Výsledky, aktivity a hodnotenia sa generujú ako samostatné položky, nie ako vzájomne závislé.

Ich liek je zmena poradia. Pedagógovia by mali rozumieť konštruktívnemu zladeniu natoľko, aby dokázali výstup AI viesť, vypočuť a odmietnuť skôr, než mu odovzdajú akúkoľvek časť, pretože prijatie vierohodného povrchu je tá istá chyba hodnotenia, pred ktorou učitelia varujú študentov. Tam, kde sa AI používa, argumentujú za inštitucionálne ohraničené systémy [[rag|rozšírené vyhľadávaním]], nastavené podľa miestnej politiky a štandardov kvality, a nie podľa všeobecných predvolených nastavení trénovaných na internete.

## V čom sa návrhári učenia mýlia

Pridanie AI sa počíta ako intervencia. Učenie mení aktivita, ktorú študent vykonáva, a AI je jednou časťou prostredia pre ňu. Dobre umiestnený náznak a dobre umiestnená odpoveď môžu bežať na tom istom modeli a produkovať opačné učenie.

Napísanie povolenia je návrhová práca. Povolenie určuje, čo je dovolené. Neurčuje postupnosť, režim ani kontrolný bod, a tieto tri veci rozhodujú, či aktivita prežije.

Efektivita je cieľom prepracovania. Tvoriť výsledky učenia a hodnotiace kritériá s modelom je rýchle a analýza 14 dokumentov zistila, že výsledok môže vyzerať zladený, kým časti prestanú podporovať jedna druhú.

## Čo sa vám vráti

**„Študenti to budú používať tak či tak, takže navrhovať okolo toho je naivné.“** Budú, a to je argument pre špecifikovanie režimu a jeho vyučovanie. Modul, ktorý pomenúva režim, dáva študentovi niečo, čo môže dodržať.

**„Nemáme čas preusporiadať celý kurz.“** Tak preusporiadajte jeden modul a jedno hodnotenie. Zlom „najprv zdržať, potom zosilniť“ je jeden kontrolný bod a postup „najprv myslieť“ sú tri pokyny na pracovnom liste.

**„Naša funkcia AI už obsahuje zábrany.“** Zábrany obmedzujú, čo model hovorí. Nerozhodujú o tom, či sa študent pokúsil prvý, či sa podpora utlmuje alebo či existuje cesta bez AI. To sú návrhové rozhodnutia vo vašom kurze, nie nastavenia v produkte.

## Čo urobiť tento týždeň

**1.** Napíšte vetu o výkone bez pomoci pre modul a umiestnite ju nad zoznam aktivít.

**2.** Označte zamýšľaný režim ICAP pri každej aktivite s AI v osnove.

**3.** Presuňte jednu aktivitu s AI tak, aby sa študent najprv pokúsil vyriešiť problém.

**4.** Vyberte jednu cestu modulom bez AI a označte ju pre študentov.

**5.** Pomenujte jeden zlom, kde sa nástroj odopiera, a kontrolný bod, ktorý ho vracia.

## Kam ďalej

[[learning-design|Návrh učenia]], [[active-learning|Aktívne učenie]] a [[scaffolding|lešenie]] nesú slovník návrhu. Pre predvolené nastavenia na úrovni interakcie, ktoré rozhodujú, či navrhnutá aktivita zachová učenie, pozri [[reduce-ai-cheating|Ako znížiť podvádzanie s AI]] a [[redesign-assessment-ai-era|Prečo je potrebné prepracovať hodnotenie v ére AI]]. [[designing-educational-ai-software|Navrhovanie vzdelávacieho softvéru s AI]] pokrýva, ako tie isté princípy obmedzujú samotný softvér, a [[developing-ai-tutor|Vyvinúť efektívneho AI tutora]] ich prekladá do architektúry tutora.
