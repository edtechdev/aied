---
title: "Môžem použiť AI na spravodlivé a spoľahlivé hodnotenie študentských prác?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Máte rubriku, ktorej veríte, viac odovzdaní než hodín a nástroj, ktorý vráti skóre a niekoľko sebavedomých odsekov za čas, ktorý potrebujete na prečítanie jednej eseje. Vyskúšate ho na práci, ktorú ste už oznámkovali. Polovica skóre vyzerá správne. Jedno je podozrivo zhovievavé, jedno podozrivo prísne a zatiaľ neviete povedať, či je to nástrojom alebo esejou.

Krátka odpoveď pre kolegu: hodnotenie s AI si zaslúži miesto ako dohliadaný asistent alebo druhý čitateľ, a to pri úlohách, na ktorých ste ho overili proti práci, ktorú ste už oznámkovali. Zhoda sa neprenáša medzi typmi hodnotenia. Na skúške z farmácie so šestnástimi študentmi [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] zistili takmer dokonalú zhodu pri objektívnych typoch položiek a nespoľahlivú zhodu pri otvorených odpovediach. Na troch anglických univerzitách [[opraise-automated-marking-ai-assessment-2026|projekt OpRaise]] zistil, že hodnotitelia AI a ľudskí hodnotitelia sa zhodujú na stupni známky v 35 % až 65 % prípadov v závislosti od inštitúcie, pričom známky sa stláčajú k stredu. Plynulé zdôvodnenie nie je dôkazom, že sa vaše kritériá použili. Či je výsledok [[assessment-validity|platný pre vaše rozhodnutie]], je lokálna otázka, na ktorú si musíte odpovedať sami, a za všetko, čo sa stane zapísanou známkou, [[human-in-the-loop-ai|zostáva zodpovedný človek]].

## Stručná verzia

**1.** Pomenujte rolu skôr, než čokoľvek spustíte: asistent spätnej väzby, druhý čitateľ alebo hlavný hodnotiteľ. Potrebujú rôzne množstvo dôkazov.

**2.** Začnite s najmenej dôsledkovou rolou, ktorá rieši váš skutočný problém. Ak by úlohu zvládol deterministický kľúč, LLM pridáva riziko, nie hodnotu.

**3.** Kalibrujte na práci, ktorú ste už oznámkovali, vrátane silných, slabých, hraničných a nezvyčajne štruktúrovaných odovzdaní. Pohodlné príklady nič nepotvrdzujú.

**4.** Držte kalibračnú množinu a testovaciu množinu oddelene, inak meriate, ako dobre ste nástroj doladili na známe eseje.

**5.** Uvádzajte presnú zhodu, rozdiely v skóre a smer vychýlenia, nie koreláciu. Osobitne overte hranice prejdenia a neprejdenia.

**6.** Povedzte študentom, akú rolu nástroj hrá, kto rozhoduje o známke a ako požiadať o preskúmanie.

## Rozhodnite, čo AI smie robiť

Tri usporiadania sa nazývajú „hodnotenie s AI“ a nesú rôzne povinnosti.

**Asistent spätnej väzby** navrhuje komentáre alebo označuje možné vynechania, ktoré prijmete, prepíšete alebo zahodíte. Riziko sa obmedzuje na kvalitu komentárov a vy prečítate všetko skôr, než sa to dostane k študentovi. **Druhý čitateľ** navrhuje skóre podľa kritérií alebo označuje nezhody, aby štruktúroval vaše vlastné hodnotenie. Jeho chyby musia byť užitočné, nielen nesprávne: príznak, ktorý vás vráti k odovzdaniu, ktoré by ste inak oznámkovali nepozorne, má cenu. **Hlavný hodnotiteľ** produkuje skóre, ktoré sa stanú zapísanými známkami. To je usporiadanie, ktoré dôkazy v tejto vedomostnej báze nepodporujú za hranicou úzkych, lokálne overených prípadov.

Zvoľte najnižší stupeň, ktorý rieši vaše skutočné obmedzenie. Ak vaša záťaž pri označovaní pochádza z kontroly pevného kľúča odpovedí, bežné deterministické skórovanie je transparentnejšie a ľahšie auditovateľné než jazykový model a štúdia z farmácie naznačuje, že výhoda LLM pri objektívnych položkách bola čiastočne artefaktom toho, že počas hodnotenia dostal správne odpovede. Model si nechajte na prácu, ktorá potrebuje interpretáciu, a potom tú interpretáciu overte.

[[automated-assessment|Automatizované hodnotenie]] pokrýva širší aparát skórovania, moderovania a generovania spätnej väzby. Táto stránka je otázkou úsudku, ktorá je pod ním.

## Čo dôkazy skutočne ukazujú

Zhoda závisí od typu položky. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] oznámkovali zmiešanú skúšku z farmácie, ktorú absolvovalo 16 študentov, a uviedli zhodu s hodnotením fakulty medzi 0,935 a 1,000 pri položkách s výberom jednej možnosti, s výberom všetkých platných možností a s doplnením. Zhoda pri subjektívnych otvorených odpovediach bola nespoľahlivá. Dva detaily sú dôležitejšie než titulok. Počas hodnotenia boli poskytnuté správne odpovede, čo výsledky pri objektívnych položkách prikrášľuje, a pridanie rubriky zhodu konzistentne nezlepšilo, čo podkopáva bežný predpoklad, že dobrá rubrika premení LLM na konzistentného hodnotiteľa. Šestnásť študentov neunesie tvrdenie o vašom kurze. Prenositeľným zistením je variácia vnútri jednej skúšky: systém, ktorý zvládne vašu časť s výberom z viacerých možností, nehovorí nič o vašich esejach.

Zhoda na stupni je mierna a nerovnomerná. [[opraise-automated-marking-ai-assessment-2026|Správa OpRaise]] skúmala autentické eseje z psychológie na bakalárskom stupni a zistila zhodu medzi hodnotiteľmi AI a ľuďmi na britskom stupni známky 63 % v Cambridgei, 53 % v Nottinghame a 35 % na Manchester Metropolitan. Známky sa stláčali k stredu, pričom konce sa označovali najmenej presne: esej, ktorú človek oznámkoval 75, dostala od každého systému AI o niekoľko bodov menej, a esej oznámkovaná 50 o niekoľko bodov viac. Práve toto stláčanie treba sledovať, pretože poškodzuje študentov na vrchole a na dne vašej distribúcie, kým stred vyzerá dobre. Je to projektová správa, nie recenzovaná štúdia, a je to najužitočnejšie varovanie v dôkazovej základni.

Vaše vlastné známky sú nedokonalá referencia. Vyučujúci sa navzájom nezhodujú a vaše predchádzajúce skóre na podobnej eseji je úsudok, nie základná pravda. Zhoda s jedným hodnotiteľom preukazuje konzistenciu s týmto hodnotiteľom, čo nie je to isté ako spravodlivosť. Kde to závažnosť prípadu odôvodňuje, použite druhého kvalifikovaného čitateľa na posúdenie ťažkých prípadov a nezhodu medzi AI a ľudským hodnotiteľom berte ako podnet prácu znovu prečítať, nie ako verdikt o tom, kto má pravdu.

Konzistencia a zdravý úsudok sa rozchádzajú. Model môže pri opakovanom behu vrátiť takmer identické skóre a zároveň zle aplikovať vaše kritériá, pretože opakovateľnosť meria stabilitu, nie platnosť. Konce v OpRaise ukazujú vzorec: systém bol stabilný a mýlil sa pri esejach, na ktorých záležalo najviac.

## Overte postup skôr, než sa dotkne známky

Prejdite to na už hodnotených, primerane chránených odovzdaniach, ktoré pokrývajú odpovede, ktoré skutočne dostávate: silné, slabé, hraničné, neúplné, nezvyčajne štruktúrované a správne odpovede vyjadrené neznámym spôsobom.

**1. Stanovte kritériá a žiadajte dôkazy.** Zadajte prácu, rubriku, pravidlá skórovania a príklady toho, ako legitímne alternatívne odpovede získavajú body. Žiadajte stručné zdôvodnenia na úrovni kritérií spojené s identifikovateľnými pasážami. Potom tie zdôvodnenia sami overte proti odovzdaniu.

**2. Oddeľte kalibráciu od vyhodnotenia.** Laďte na jednej množine, testujte na inej. Bez tohto rozdelenia nedokážete odlíšiť overený postup od dobre prispôsobeného.

**3. Merajte rozhodnutia, na ktorých záleží.** Zaznamenajte presnú zhodu, veľkosť a smer rozdielov v skóre a to, či model systematicky udeľuje vyššie alebo nižšie známky. Prejdite a neprejdite a iné dôsledkové hranice skúmajte osobitne. Vysoká korelácia môže sedieť na systematickom posune.

**4. Testujte opakovateľnosť a správanie podskupín.** Znovu spustite podmnožinu v identických nastaveniach. Hľadajte chyby na úrovni kritérií a to, či sa jazyk, formátovanie alebo legitímny štýl nepovažujú za slabšie porozumenie. Malé počty v podskupinách podporujú opatrnosť, nie tvrdenie o spravodlivosti.

**5. Napíšte pravidlo eskalácie.** Rozhodnite, ktoré prípady vždy dostanú ľudské hodnotenie a ako sa riešia nezhody. Nenechajte rozhodovať uvedenú istotu modelu; istota sa musí overiť proti pozorovaným chybám, kým môže niečo vážiť.

**6. Chráňte pracovný postup.** Používajte schválené prostredie, minimalizujte identifikujúce informácie a držte rubriku a pokyny oddelene od odovzdaného obsahu. Toto oddelenie sťažuje skrytie manipulácie. Neznemožňuje ho.

**7. Zaznamenajte, čo by overenie zneplatnilo.** Uchovajte model a verziu, prompt, rubriku a nastavenia. Aktualizácia modelu alebo revízia rubriky je dôvod reprezentatívne overenia zopakovať, nie predpokladať kontinuitu.

## Urobte usporiadanie viditeľným pre študentov

Študenti majú právo vedieť, akú rolu nástroj hrá, kto rozhoduje a ako možno výsledok napadnúť. Nejasné zverejnenie vyvoláva podozrenie; konkrétnosti vytvárajú funkčný vzťah. Niečo ako: „Schválený nástroj AI môže k vášmu konceptu navrhnúť komentáre podľa rubriky. Každý komentár prezerám a známku určujem ja. Ozvite sa mi, ak komentár skresľuje vašu prácu.“ Potom zabezpečte, aby to bola pravda.

Dva smery zlyhania potrebujú osobitnú pozornosť. Nadmerné zrážky sú tie, ktoré študenti hlásia, a dominujú odvolaniam. Nezaslúžené body sú tie, o ktorých sa nehovorí a ktoré potichu kazia záznam. Vzorkujte oba a pri posudzovaní, či vám postup ušetril čas, zahrňte aj hodiny overovania.

## Čo sa vám vráti

**„Aj ľudia sú predpojatí.“** Sú, a práve preto porovnanie potrebuje explicitné kritériá, nie skóre jedného hodnotiteľa ako štandard. Inštitucionálny rozptyl v OpRaise je tu argumentom: ak ľudskí hodnotitelia na troch univerzitách dosiahli s tými istými systémami takú rozdielnu zhodu na stupni, ľudská referencia je súčasťou toho, čo treba špecifikovať, nie pevné meradlo.

**„Rubrika to robí objektívnym.“** Rubrika robí očakávania explicitnými. Jej aplikácia zostáva interpretáciou a štúdia z farmácie zistila, že poskytnutie rubriky zhodu konzistentne nezlepšilo. Rubrika vám kupuje overiteľný štandard pre zdôvodnenia, nie záruku skóre.

**„Musel by som skontrolovať všetko, a to ruší zmysel.“** Pri niektorých úlohách je to správny záver a odpoveďou je zúžiť prácu. Navrhovanie komentárov z vašich vlastných poznámok k skórovaniu necháva úsudok na vás a odstraňuje písanie. Príznaky druhého čitateľa pri hraničných odovzdaniach sústreďujú vašu pozornosť tam, kde menia výsledok.

**„Kolega to vyskúšal a fungovalo to dobre.“** Spýtajte sa, čo meral. Pozitívne hodnotenia v tejto literatúre bežne koexistujú s chybami a kolega, ktorý prečítal niekoľko rozumných výstupov, urobil ukážku, nie validáciu. Otázka je, čo by ich postup urobil s esejami, ktoré by ste si všimli ako posledné.

## Čo urobiť tento týždeň

**1.** Vyberte jedno hodnotenie a zapíšte jedinú rolu, ktorú by AI hrala. Zapíšte, aké dôkazy by vám dovolili posunúť ju o stupeň vyššie.

**2.** Spustite ju na piatich odovzdaniach, ktoré ste už oznámkovali, vybraných tak, aby zahŕňali jedno silné, jedno slabé, jedno hraničné a jedno s nezvyčajnou, ale legitímnou štruktúrou.

**3.** Zaznamenajte každú nezhodu s prácou a kritériom a pomenujte chyby, ktoré by ste považovali za neprijateľné, nie len nesprávne.

**4.** Otestujte, či rozdiely v skóre idú konzistentným smerom, a hranicu prejdenia a neprejdenia overte osobitne.

**5.** Napíšte odsek o zverejnení smerom k študentom a cestu k preskúmaniu a porovnajte čas overovania s časom označovania, ktorému ste sa vyhli.

## Kam ísť ďalej

[[assessment-validity|Platnosť hodnotenia]] je koncept, ktorý tieto otázky rozhoduje: či dôkazy podporujú inferenciu, ktorú chcete urobiť. [[automated-assessment]] pokrýva technológiu a jej meraný výkon naprieč formátmi a [[ai-feedback-at-scale]] rieši susedný problém generovaných komentárov a toho, či na ne študenti reagujú.

O tom, čo má známka predstavovať, keď študenti používajú AI, vrátane nahradenia konštruktu a overených dôkazov o procese, pozri [[redesign-assessment-ai-era|preprojektovanie hodnotenia v ére AI]]. O tom, či detekcia môže nahradiť obhájiteľný dizajn úlohy, pozri [[should-we-use-ai-detectors|či používať detektory AI]]. O otázke vyhodnotenia, ktorá je pod tým všetkým, pozri [[checking-whether-educational-ai-works|overovanie, či vzdelávacia AI funguje]].
