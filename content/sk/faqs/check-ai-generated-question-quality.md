---
title: "Ako zistím, či sú kvízové a skúšobné otázky vytvorené AI skutočne dobré?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Požiadate o dvadsať otázok zo svojich prednáškových poznámok. Prídu s kľúčom odpovedí, vysvetleniami, štítkami obtiažnosti a kategóriami Bloomovej taxonómie, vo formátovanom dokumente, ktorý vyzerá hotový. Vaše meno sa naň o chvíľu dostane.

Krátka odpoveď pre kolegu: vygenerované otázky sú kandidáti, nie hodnotenie. Vyriešte každú sami, preverte, čo položka od študenta skutočne žiada, a zistite, ako študenti na ňu reagujú, kým sa začne počítať. V dvoch najväčších štúdiách v tejto vedomostnej báze nie je zaujímavým signálom to, že generovanie funguje, ale to, kde zlyháva. Iteratívne generovanie v rámci pracovného postupu špecifického pre kurz vyprodukovalo použiteľné skúšky s výberom z viacerých možností v 71 vysokoškolských triedach ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). V audite 311 nasadených otázok z dátovej vedy štítky obtiažnosti modelu sledovali Bloomove úrovne, ktoré vygeneroval spolu s nimi, takmer dokonale (Spearman ρ = 0,90), kým so skutočným skóre študentov korelovali na ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An a Wang, 2026]]). Štítok bol opisom promptu, nie meraním položky.

## Stručná verzia

**1.** Zapíšte výsledok a dôkazy, ktoré by poskytla uspokojivá odpoveď, skôr než čokoľvek vygenerujete.

**2.** Zostavte plán, aby ste videli, ktoré výsledky súbor vzorkuje a ako často.

**3.** Vyriešte každú položku sami, kým uveríte kľúču, a vysvetlenie čítajte ako tvrdenie, ktoré treba overiť.

**4.** Spýtajte sa, čo musí študent urobiť, aby odpovedal. Otázka, ktorá hovorí „analyzujte“ a vyžaduje vybavenie si, je otázkou na vybavenie si.

**5.** Berte štítky obtiažnosti ako metadáta promptu, nie ako psychometriku.

**6.** Pilotujte položky a skúmajte, ako fungujú, potom slabé opravte.

## Začnite učením, o ktorom chcete dôkazy

Generovanie je dosť lacné na to, aby sa výstupný formát potichu stal špecifikáciou. Ak vaše poznámky produkujú upratané položky s výberom z viacerých možností, skončíte meraním toho, či študenti vedia vyberať medzi vierohodnými tvrdeniami, nech už sylabus sľubuje akýkoľvek výsledok.

Najprv špecifikujte výsledok, potom dôkazy, ktoré by poskytla uspokojivá odpoveď, a potom poznanie, ktoré sa od študentov očakáva. Zahrňte materiály kurzu, mylné predstavy, ktoré očakávate, povolené nástroje a formát odpovede. Ak chcete, aby študenti interpretovali dôkazy, položka musí vyžadovať interpretáciu, a pridanie slova do definičnej otázky to nezabezpečí. Dlhý scenár môže byť stále zodpovedateľný cez jednu známu frázu, ktorá prezradí riešenie.

Plán hodnotenia je tabuľka výsledkov proti položkám a jeho hodnota je v tom, že odhalí medzery skôr než študenti. Zviditeľňuje aj kompromis: každá položka, ktorú vygenerujete z najľahšieho materiálu, je položka, ktorú ste neminuli na výsledok, na ktorom vám záleží najviac.

## Preverte každú položku v šiestich dimenziách

Začnite kľúčom. Je obhájiteľný proti autoritatívnemu obsahu kurzu a obstojí vysvetlenie, keď ho overíte nezávisle? Kľúč a vysvetlenie často pochádzajú z toho istého chybného kroku, takže overenie jedného neoverí druhé.

Potom sa spýtajte, čo odpovedanie na položku od študenta skutočne vyžaduje medzi čítaním a výberom. Tu vygenerované položky zlyhávajú najčastejšie a tu je štítok najmenej spoľahlivý.

Ďalej preverte zarovnanie: poskytuje odpovedanie dôkazy pre zamýšľaný výsledok, alebo pre niečo susedné a ľahšie hodnotiteľné?

Prečítajte formuláciu tak, ako by ju čítal študent. Sú potrebné informácie prítomné a odstránila sa nejednoznačnosť nesúvisiaca s vaším konštruktom?

Pozrite sa na možnosti a pravidlá skórovania spolu. Sú distraktory vierohodné a navzájom odlišné aj od kľúča a uznáva kľúč legitímne alternatívne odpovede, ktoré by vaša rubrika ohodnotila?

Nakoniec sa spýtajte, koho položka vylučuje. Čítacia záťaž, kultúrny kontext, vizuály a formátovanie môžu uvaliť nároky nesúvisiace s výsledkom. Pre viacjazyčného študenta alebo študenta s postihnutím položka, ktorá odmeňuje rýchle čítanie, meria niečo, čo ste nezamýšľali, a [[differential-effects-across-learner-groups|výkon podskupín]] je miesto, kde sa to ukáže.

Druhý model vám môže pomôcť nájsť problémy a zhoda medzi dvoma modelmi nie je nezávislé overenie správnosti. Zdieľajú trénovacie dáta aj spôsoby zlyhania. Položku vyriešte a potom na tie, ktoré sa budú počítať, nechajte pozrieť kvalifikovanú osobu.

## Nedovoľte, aby rozhodoval štítok obtiažnosti

Literatúra o [[automated-question-generation|generovaní otázok]] je užitočnejšia pri zlyhaní štítkov než pri úspechu generovania. [[student-llm-use-ai-question-difficulty-data-science-2026|An a Wang (2026)]] skúmali 378 autorských otázok v kurzoch dátovej vedy, z ktorých 311 bolo nasadených 54 študentom v 7 888 odpovediach. Štítky modelu ľahké, stredné a ťažké korelovali s jeho vlastnými spolugenerovanými Bloomovými úrovňami na ρ = 0,90 a s empirickou obtiažnosťou položky na ρ = 0,06. Približne 70 % nasadených položiek zodpovedali správne všetci študenti, čo nezanechalo takmer žiadnu variáciu, ktorú by štítok obtiažnosti mohol v zásade sledovať.

Z toho vyplývajú dve ponaučenia. Po prvé, obtiažnosť je vlastnosť interakcie medzi položkou a populáciou, takže žiadny štítok vytvorený pred administráciou položky nemožno brať ako nameranú hodnotu. Po druhé, banka položiek, ktoré všetci zodpovedajú správne, nie je ľahké hodnotenie, je to zbytočné hodnotenie: neobsahuje takmer žiadnu informáciu o tom, kto čo vie.

Pozitívny prípad je užší než tvrdenia predajcov a stojí za to ho poznať presne. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] vygenerovali desaťpoložkové skúšky s výberom z viacerých možností pre 71 vysokoškolských tried, približne 1 200 študentov, pomocou slučky, ktorá každú položku generuje, posudzuje a reviduje s podmienením na materiáloch, ktoré pre každý kurz poskytol jeho vyučujúci, a potom položky porovnali s človekom napísanými skúškami. To je pracovný postup s recenzentom vnútri, spustený pre každý kurz, nie jediný prompt nad všeobecným obsahom. Podpora platí pre ten postup za tých podmienok a nevzťahuje sa na to, čo ten istý model vyprodukuje z vložených needitovaných poznámok.

## Spustite cyklus generovanie, revízia, pilot, revízia

Generujte proti plánu a žiadajte zamýšľaný výsledok, kľúč, stručné riešenie a mylnú predstavu, ktorú má každý distraktor zachytiť. Anotácie robia dizajn preskúmateľným. Nie sú dôkazom, že dizajn je zdravý.

Opravujte skôr, než hromadíte. Vymažte nepodložené tvrdenia, duplicitné položky, náhodné vodítka v zadaní, viac obhájiteľných kľúčov a zložitosť nesúvisiacu s konštruktom, a poznačte si, čo ste zmenili, pretože vzorec opráv vám povie, ktorú časť promptu treba opraviť.

Pilotujte tam, kde je pilot úmerný. Nízko-dôsledkové precvičovanie alebo riadený pilot vnútri hodnotenia vám dajú údaje o odpovediach. Povedzte študentom, ako nahlásiť nejednoznačnú alebo nesprávnu otázku, a tie hlásenia čítajte, pretože sú vaším najinformovanejším signálom o chybách.

Potom skúmajte, ako položky fungujú: podiel správnych odpovedí, ktoré distraktory priťahujú odpovede a či úspech v položke ide spolu s výkonom v zvyšku hodnotenia. Položka, kde silní študenti zlyhávajú a slabí uspejú, je chyba, nie ťažká otázka. V malej triede sú tieto štatistiky nestabilné, takže ich kombinujte s obsahovou revíziou a vysvetleniami študentov, namiesto toho, aby ste percento brali ako verdikt.

Revidujte a uchovajte záznam: schválenú verziu, výsledok, ktorému slúži, kľúč, zdôvodnenie, poznámky z revízie a históriu administrácie. Pri veľkých alebo vysoko-dôsledkových bankách patria sem špecialisti na hodnotenie a riadne psychometrické metódy a odbornosť v [[educational-measurement|meraní]] sa nedá nahradiť pozorným čítaním.

## Ako to vyzerá v kurze

V úvodnom kurze sociológie môže byť výsledkom rozlíšenie štrukturálneho vysvetlenia od individuálneho. Slabá položka žiada študentov definovať „štrukturálne“, čo meria rozpoznávanie slovnej zásoby. Silnejší kandidát dá krátky scenár o rodine a rozhodnutí o zamestnaní a potom sa pýta, ktoré vysvetlenie najlepšie identifikuje štrukturálne obmedzenie, pričom distraktory predstavujú vierohodné, ale odlišné interpretácie.

Vyučujúci overí, že scenár skutočne podporuje kľúč, že žiadne dve možnosti nevyjadrujú tú istú myšlienku a že odpovedanie nezávisí od terminológie, ktorú kurz nikdy nezaviedol. Jednoriadková doplňujúca otázka „ktorý detail podporuje váš výber?“ odkryje uvažovanie, ktoré zvolená možnosť skrýva. Táto úprava je ako formát položky neotestovaná a jej hodnota je užšia: otázky z revízie vyššie sa dajú zodpovedať pred administráciou položky a zlý kľúč sa dá opraviť skôr, než ho študenti uvidia.

Pre študentov, ktorí si generujú vlastné cvičné otázky, platí to isté pravidlo na ich úrovni: skúste položku vyriešiť, overte vysvetlenie proti zdrojom kurzu a neriešiteľné prípady prineste niekomu, kto látku pozná. [[study-with-ai|Cvičenie so štúdiom]], ktoré učí študentov prijímať vygenerované kľúče nekriticky, učí nesprávny návyk.

## Čo sa vám vráti

**„Dal odpoveď aj vysvetlenie.“** Obe môžu opakovať jednu chybu a vysvetlenie generuje dôveru práve preto, že je plynulé. Overte uvažovanie proti svojim materiálom, nie proti jeho vlastnému preformulovaniu.

**„Sú to len cvičné otázky.“** Precvičovanie učí mylné predstavy, keď nesprávne kľúče zostanú neopravené, a študenti si chybu nacvičia rovnako ochotne ako správnu odpoveď. Nižšia závažnosť mení, koľko revízie je úmerné. Nemenia to, či na presnosti záleží.

**„Študentom sa kvíz páčil.“** Potešenie je dôkaz o zážitku. Ľahký kvíz, ktorý všetci pohodlne dokončia, chutí dobre a meria málo, a audit z dátovej vedy zistil, že obľúbenosť položiek nebola sprevádzaná žiadnym použiteľným signálom obtiažnosti.

**„Rubrika alebo Bloomove štítky ukazujú, že zasahuje výsledky.“** Bloomove štítky poskytnuté tým istým krokom generovania sú najmenej nezávislým dôkazom, aký je k dispozícii. ρ = 0,90 proti štítkom a ρ = 0,06 proti výkonu študentov je presne to, ako to vyzerá, keď sa to meria.

## Čo urobiť tento týždeň

**1.** Vyberte jeden výsledok a napíšte dôkazy, ktoré by poskytla uspokojivá odpoveď. Potom proti nemu vygenerujte päť položiek a žiadajte kľúč, riešenie a zamýšľanú mylnú predstavu za každým distraktorom.

**2.** Vyriešte všetkých päť bez pohľadu na kľúče a zaznamenajte tie, kde sa s modelom nezhodujete.

**3.** Poproste kolegu, aby preveril dvoch najsilnejších kandidátov na zarovnanie a nejednoznačnosť, a vymažte všetko, čo ani jeden z vás nedokáže obhájiť.

**4.** Pilotujte tých, čo prežili, s krátkou doplňujúcou otázkou, ktorý detail podporuje ich výber.

**5.** Zaznamenajte, čo ste zmenili a prečo, aby ďalšia dávka začínala z lepšieho promptu a nie z toho istého.

## Kam ísť ďalej

[[automated-question-generation]] je koncepčná stránka pre metódy generovania a ich meranú kvalitu a [[educational-measurement]] pokrýva analýzu položiek, reliabilitu a psychometriku, na ktorú pilot len naznačuje. Obe sedia pod [[assessment-validity|platnosťou hodnotenia]], ktorá je štandardom, ktorému celý cyklus slúži.

Úsudková strana toho istého problému patrí k [[ai-grading-fairness-reliability|hodnoteniu s AI]], pretože dobrá položka ohodnotená zle nie je lepšia než zlá položka ohodnotená dobre. O širšej otázke, čo má známka predstavovať, keď študenti môžu používať AI, pozri [[redesign-assessment-ai-era|preprojektovanie hodnotenia v ére AI]].
