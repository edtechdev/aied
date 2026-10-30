---
title: "Ako môže AI podporiť viacjazyčných študentov bez toho, aby nesprávne posúdila ich poznanie alebo vymazala ich hlas?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-disabled-neurodivergent-learners, writing-instruction-ai-best-practices, redesign-assessment-ai-era, verify-ai-output]
weight: 72
foundations: [ai-literacy, theories-and-frameworks]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, feedback, ai-feedback-quality, evaluative-judgment]
methods: [meta-analysis-systematic-review, quantitative-research]
research_method: [literature review, experiment]
audience: [instructors, instructional designers, assessment designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:30:00-04:00"
translation_of: faqs/ai-multilingual-learners
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Študent konceptu rozumie a potrebuje štyri minúty navyše, aby to povedal po anglicky. AI môže preložiť zadanie, vysvetliť terminológiu, precvičiť s ním vysvetlenie alebo napísať celú odpoveď. Tri z toho sú vyučovanie. Jedno je robenie zadania.

Krátka odpoveď pre kolegu: rozhodnite, čo v tejto úlohe robí jazyk, skôr než rozhodnete, čo smie nástroj. Kde je jazyk vedľajší, AI môže odstrániť bariéru, ktorá s vaším konštruktom nesúvisí. Kde je jazykom konštrukt, ten istý nástroj obchádza učenie. Riziko ide oboma smermi naraz: [[multilingual-learning|jazyková podpora]] môže zlepšiť prístup a automatizované skórovanie môže študenta stále prečítať nesprávne. V jednej štúdii z fyziky boli vysvetlenia nižšej jazykovej kvality systematicky ohodnotené pod úroveň odborného úsudku pri každom testovanom prístupe k skórovaniu s AI, teda pri deviatich systémoch strojového učenia a dvoch jazykových modeloch u 116 stredoškolákov ([[ai-scoring-language-bias-physics|Feser a Tschisgale, 2026]]). Plynulosť a porozumenie sa hodnotili ako jedna vec.

## Stručná verzia

**1.** Povedzte, akú rolu má jazyk v úlohe: vedľajšiu, ústrednú alebo jednu z viacerých kritérií.

**2.** Zapíšte povolenú podporu do pokynov a kritérií a povedzte, čo študenti musia urobiť sami.

**3.** Dávajte cielenú pomoc pred celkovými prepismi. Požiadajte nástroj, aby označil nejasný význam a ponúkol možnosti.

**4.** Vyžadujte, aby študent porovnal navrhovanú formuláciu so svojím vlastným významom a so zdrojmi kurzu.

**5.** Skórujte pojmové uvažovanie a jazyk oddelene, keď sú obe zamýšľanými výsledkami.

**6.** Nikdy nerobte z neotestovaného nástroja jedinú cestu k podpore.

## Rozhodnite, čo robí jazyk

V biologickom vysvetlení je gramatika väčšinou vedľajšia vzhľadom na hodnotený koncept. V jazykovom kurze je produkovanie a revidovanie konkrétnych štruktúr tým učením. V profesijnej komunikácii sa počítajú vecná presnosť, publikum aj register. Ten istý prekladový nástroj je v prvom prípade vhodný, v druhom otázny a v treťom vecou rokovania.

Zapíšte rozhodnutie tam, kde si ho študenti môžu prečítať. Ak študenti môžu prekladať pokyny, ale vysvetlenie v cieľovom jazyku musia vytvoriť sami, povedzte to výslovne. Ak je povolená terminologická podpora, špecifikujte, čo študent musí ešte vysvetliť a overiť. Potom porovnajte usporiadanie s požiadavkami na úpravy a s inštitucionálnou politikou, namiesto toho, aby ste každú formu jazykovej pomoci považovali za zameniteľnú. Študent s doloženou úpravou a študent, ktorý sa vyhýba precvičovaniu, môžu žiadať to isté a len druhý z nich je váš vyučovací problém.

## Čo výskum podporuje a čo nie

[[genai-chatbots-language-learning-affordances-review-2026|Lopez a Arabadzhy (2026)]] preskúmali 24 empirických štúdií o generatívnych chatbotoch v učení jazykov. Ich prínos je taxonomický: každá čiastková možnosť zaevidovaná pri predgeneratívnych chatbotoch pretrváva a tri sú nové, vrátane **translanguagingu**, teda zámerného prechádzania medzi jazykmi ako súčasti učenia. Je to mapa hlásených použití a skúseností, nie spoločný odhad, a korpus je geograficky koncentrovaný, pričom Čína, Irán, Taiwan a Turecko tvoria 19 z 24 štúdií a všetky až na jednu sedia vnútri formálnych inštitúcií. Podpora pre používanie medzijazykovej vysvetľovacej výmeny ako učebného kroku nie je podporou pre prekladanie každého zadania.

Hodnotenie je miesto, kde sa dôkazy vyostrujú a závažnosť rastie. [[ai-scoring-language-bias-physics|Feser a Tschisgale (2026)]] porovnali jedenásť prístupov k automatizovanému skórovaniu s hodnotením ľudských expertov pri fyzikálnych vysvetleniach 116 stredoškolákov a zistili systematické podhodnocovanie pojmového porozumenia pri jazykovo slabších vysvetleniach, a to v každom jednom prístupe. Dizajn izoluje mechanizmus: ten istý pojmový obsah vyjadrený slabšou prózou dostal nižšie skóre. Nie je to tvrdenie o viacjazyčných študentoch nejakej konkrétnej krajiny a je to presne ten vzorec, ktorý robí z celkovej zhody skórovania slabú diagnostiku. Hodnotiteľ môže priemerne súhlasiť s ľudskými hodnotiteľmi a zároveň sa mýliť konzistentným smerom pri študentoch, ktorých jazyk sa ešte vyvíja.

Syntéza [[multilingual-learning]] opisuje výskum skríningu písania, ktorý ukazuje vzorce prediktívnej predpojatosti pri viacjazyčných študentoch podobné predpojatostiam ľudského skórovania. Prečítajte tri zistenia spolu a prevádzkové ponaučenie je úzke: ani „AI odstraňuje ľudskú predpojatosť“, ani „AI pridáva jazykovú predpojatosť“ nie je užitočným pravidlom. Potrebujete kontrolu úlohy, populácie a jazyka v bode, kde sa skóre stáva známkou.

## Dajte nástroju konkrétnu podpornú rolu

Začnite pokynmi: nechajte nástroj preložiť alebo preformulovať ich do jednoduchého jazyka, overte výstup proti originálu a nechajte študenta, aby si sám ujasnil, čo úloha vyžaduje, a spýtal sa na skutočnú nejednoznačnosť.

Odborná slovná zásoba funguje inak. Nastavte nástroj tak, aby porovnával významy naprieč jazykmi a generoval kontextové príklady, a potom nechajte študenta vysvetliť koncept a identifikovať zavádzajúce ekvivalenty.

Nácvik hovorenia si žiada ohraničené precvičenie s opakovaniami, pričom odpoveď produkuje študent a predvádza cieľovú zručnosť.

Pri revízii písania žiadajte niekoľko pomenovaných problémov s možnými opravami a rozhodnutie aj jeho zdôvodnenie nechajte na študentovi.

Čítanie obsahu kurzu je najširší prípad. Dvojjazyčné vysvetlenie opreté o schválené materiály pomáha za predpokladu, že študent overí kľúčové tvrdenia a preukáže porozumenie.

Toto sú použitia na pilotovanie, nie overené intervencie. Nástroj, ktorý funguje dobre v jednom jazyku alebo jednom žánri, nie je tým spoľahlivý v inom, a geografická koncentrácia prehľadu znamená, že vaša jazyková dvojica môže byť v dôkazoch sotva zastúpená.

## Chráňte význam a hlas študenta

Žiadajte cielenú pomoc skôr, než požiadate o prepis, pretože pri celkovom prepise myslenie študenta opúšťa stránku. Žiadosť, ktorá stojí za to ju učiť: „Označ dve miesta, kde je môj význam nejasný. Vysvetli problém a ponúkni možnosti. Nechaj moje príklady a nepridávaj tvrdenia.“ Potom vyberá študent.

Postup, ktorý necháva prácu študentovi:

1. Rozviňte vysvetlenie v akomkoľvek jazyku alebo miešaní jazykov, ktoré študentovi umožňuje uvažovať, ak to úloha dovoľuje.
2. Použite schválenú podporu na preskúmanie terminológie alebo vyjadrenia.
3. Porovnajte navrhovanú formuláciu so zamýšľaným významom a so zdrojmi kurzu.
4. Vytvorte požadované vysvetlenie a poznačte si dôsledkové revízie.

V sociologickom zadaní môže študent dvojjazyčne premýšľať o konflikte rodinných rolí, overiť krátky zoznam pojmov z kurzu a potom napísať odovzdávanú analýzu v požadovanom jazyku, pričom vyučujúci hodnotí sociologické uvažovanie a akékoľvek osobitne uvedené jazykové kritériá. V úlohe z výučby jazykov by ten istý postup prezradil hodnotenie a musel by zachovať nezávislú produkciu v cieľovom jazyku.

Vyhnite sa tomu, aby sa „znie ako rodený hovorca“ stalo štandardom, pretože to meria vzťah študenta k dialektu, nie jeho zvládnutie vášho predmetu. Špecifikujte namiesto toho jasnosť, presnosť, žáner alebo publikum. Vyhladený prepis môže posunúť stanovisko, vypustiť kultúrne významný výraz alebo pridať tvrdenie, ktoré študent nikdy nezamýšľal, a študent ho podpíše.

## Preverte nástroj a hodnotenie

Prezerajte význam, nie plynulosť. Vzorkujte preklady a vysvetlenia na odborné termíny, vynechania, vymyslené detaily, kultúrne predpoklady a variety jazyka, ktoré vaši študenti skutočne používajú. Zapojte kvalifikovaných jazykových kolegov alebo podporný personál; nerobte zo študentov jediného audítora nástroja, ktorý im predpisujete.

Oddeľte kritériá. Keď sú uvažovanie aj jazyk zamýšľanými výsledkami, skórujte ich oddelene a preverte, či hodnotiteľ podporovaný AI nepenalizuje jazyk dvakrát alebo či mu neuniká správne uvažovanie vyjadrené nekonvenčne. To je praktická podoba [[assessment-validity|platnosti]] pre viacjazyčnú kohortu a otázka podskupín v [[differential-effects-across-learner-groups|diferenčných účinkoch]].

Zachovajte cestu k objasneniu. Krátky rozhovor, anotovaný diagram alebo vysvetlenie jedného kľúčového rozhodnutia môžu ukázať, čomu študent rozumie, keď to próza neunesie. Vyberte formát, ktorý sedí ku konštruktu, nie ten, ktorý sa najľahšie hodnotí.

Poskytnite použiteľné alternatívy. Študenti potrebujú jasnú cestu k ľudskej jazykovej podpore a k prístupným zdrojom kurzu. Vyžadovanie neotestovaného nástroja môže pridať bariéru pri zamýšľanej inklúzii, čo je to isté zlyhanie, ktorému sa musí vyhnúť [[ai-disabled-neurodivergent-learners|podpora študentov s postihnutím a neurodivergentných študentov]].

## Čo sa vám vráti

**„Preklad znamená, že sa študent vyhýba práci.“** Závisí od toho, čo je tou prácou. Preklad môže umožniť zapojenie do odborného obsahu, s ktorým nemá nič spoločné, a môže nahradiť precvičovanie, keď je výsledkom nezávislá produkcia v cieľovom jazyku. Rozhodnite, čo hodnotíte, a povedzte to.

**„AI opravila jazyk bez toho, aby zmenila čokoľvek iné.“** Overte to. Prepis, ktorý zlepší gramatiku, často zmení dôraz, zjemní tvrdenie alebo si vymyslí podporu. Požiadajte študenta, aby pomenoval jednu zmysluplnú zmenu a povedal, či zachováva jeho zamýšľaný bod, čo vám tiež prezradí, či návrh vôbec čítal.

**„Ľudskí hodnotitelia sú spravodlivejší.“** Ľudské skórovanie nesie vlastnú jazykovú predpojatosť a výskum skríningu písania pri viacjazyčných študentoch zisťuje, že automatizované systémy reprodukujú jeho vzorce. Spravodlivosť tu prichádza z explicitných kritérií, vzorkovaných dôkazov o podskupinách a reálnej šance prehodnotiť úsudok, nie z toho, kto alebo čo drží pero.

**„Naši študenti sú v angličtine v poriadku, takže sa to netýka.“** Zistenie, na ktorom záleží, nie je tvrdením o deficite žiadnej skupiny. Je to to, že pojmové porozumenie vyjadrené slabšou prózou je systematicky podhodnocované, a to pri každej testovanej metóde. To platí pre pisákov v zhone, pisákov v druhom jazyku a kohokoľvek, koho register sa odlišuje od registra skúšajúceho.

## Čo urobiť tento týždeň

**1.** Vezmite jedno zadanie a napíšte vetu, ktorá hovorí, čo v ňom robí jazyk.

**2.** Prepíšte pokyny tak, aby hovorili, aká podpora je povolená a čo študenti musia vytvoriť nezávisle.

**3.** Otestujte preklad a vysvetlenie terminológie v jazykoch, ktoré vaši študenti skutočne používajú, a čítajte výstup na vymyslené detaily a stratený význam.

**4.** Pridajte jednu kontrolu, ktorá zaznamenáva vlastný význam alebo rozhodnutie študenta, napríklad dvojvetovú poznámku o zmene, ktorú prijal alebo odmietol.

**5.** Ak vaša rubrika skóruje kvalitu písania, oddeľte to kritérium od pojmového a znovu prečítajte dve odovzdania z každého s týmto rozdelením na mysli.

## Kam ísť ďalej

[[multilingual-learning]] je koncepčná stránka pre jazyk, translanguaging a hodnotenie v AI sprostredkovanom vyučovaní a [[assessment-validity|platnosť hodnotenia]] je štandardom pre to, či skóre podporuje inferenciu, ktorú robíte. [[differential-effects-across-learner-groups]] pokrýva, ako hľadať vzorce podskupín namiesto ich predpokladania.

Pre prípad výučby písania, kde je jazykom konštrukt, pozri [[writing-instruction-ai-best-practices|osvedčené postupy pre výučbu písania]]. O tom, či sa automatizovanému skórovaniu dá vo vašom prostredí vôbec dôverovať, pozri [[ai-grading-fairness-reliability|hodnotenie s AI]] a [[checking-whether-educational-ai-works|overovanie, či vzdelávacia AI funguje]].
