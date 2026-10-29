---
title: "Ako mi môže AI pomôcť dávať lepšiu spätnú väzbu vo veľkom rozsahu?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Je šiesty týždeň. Máte kopu konceptov, rubriku, ktorej veríte, a rastúce podozrenie, že tretinu vašich komentárov študenti prelistujú a zabudnú. Kolega spomenie, že nejaký nástroj teraz komentuje každý koncept do hodiny. Na porade katedry treba odpoveď: je to vylepšenie, alebo rýchlejší spôsob, ako vyprodukovať text, ktorý nikto nečíta?

Krátka odpoveď pre kolegu: spätná väzba od AI si svoje miesto zaslúži v pokrytí, včasnosti a konzistencii, a to v úzkom pásme. Jazyková práca na úrovni korektúry a prvé komentáre vedené rubrikou sa oplatí automatizovať. Dosah je tá lacná časť. V zhlukovo randomizovanom experimente s 1 176 študentmi prvého ročníka reflexívne a hybridné dizajny porazili priamu kritiku AI v oneskorenom [[transfer-of-learning|transfere]] bez AI. V randomizovanom experimente s esejami so 70 študentmi lepšie hodnotená spätná väzba AI nepriniesla lepšie revízie než spätná väzba skúseného učiteľa. O výsledku rozhoduje to, čo študent s komentárom urobí, a [[feedback-literacy|gramotnosť spätnej väzby]] oddeľuje študentov, ktorí získavajú, od tých, ktorí kopírujú.

## Stručná verzia

**1.** Rozhodnite, čo sa počíta ako úspech, skôr než čokoľvek pilotujete: kvalita revízie a oneskorený výkon bez pomoci, nie plynulosť komentárov.

**2.** Rozdeľte svoje komentáre na opravy na jazykovej úrovni a na úsudkové rozhodnutia. Na automatizáciu prichádza do úvahy len prvá kategória.

**3.** Zoraďte zdroje do etáp. Najprv sebahodnotenie, potom spätná väzba rovesníkov, potom kritika AI. Dva zdroje položené vedľa seba prinášajú pasívne prevzatie.

**4.** Dajte modelu svoju rubriku a nechajte ho uvažovať krok za krokom. Holý pokyn produkuje všeobecný výstup.

**5.** Konečnú správu, tón a všetko, čo sa stane záznamom, držte v rukách človeka.

**6.** Naplánujte hodiny, ktoré strávite mazaním a kalibráciou, a porovnajte ich s hodinami, ktoré ste uvoľnili.

## Rozhodnite, čo sa počíta ako úspech, skôr než čokoľvek pilotujete

Lákavá metrika je kvalita toho, čo model napíše. Je to tiež metrika, ktorá zavádza.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] randomizovali 70 študentov píšucich argumentatívne eseje v perzštine do troch skupín. Promptovanie s reťazcom úvah produkovalo významne lepšie hodnotenú spätnú väzbu (M = 12,90) než promptovanie bez príkladov (M = 11,25, p = .01) a než skúsený ľudský učiteľ (M = 11,20, p = .008). Skupina s reťazcom úvah svoje eseje neupravila významne viac než skupina so spätnou väzbou učiteľa, ktorá dosiahla porovnateľné prínosy. Lepšie komentáre, tie isté revízie. Ak je vaším kritériom úspechu kvalita komentára, štúdia sa číta ako úspech. Ak je ním to, čo sa zmenilo v eseji, nie.

Dva ďalšie signály lichotia pilotu, ktorý ide zle, preto ich vopred opravte. Spokojnosť študentov je jeden. V celouniverzitnom pilotnom projekte Deakin, o ktorom píšu [[tubino-adachi-ai-automated-feedback-literacy|Tubino and Adachi (2022)]], pozitívne priemerné hodnotenia koexistovali s chybami označenými študentmi, takže prieskum s usmievavými tváričkami nie je dôkazom presnosti. Používanie je druhý. Nástroj Deakin bol voliteľný a používanie dosahovalo približne 13 % bakalárov a 12 % postgraduálnych študentov, hoci prístup malo takmer 4 000 študentov. Proaktívni, výkonní študenti ho používali viac. To je to, čo vám sprístupnenie nástroja prinesie.

Miera výsledku, ktorá obstojí, je kvalita revízie plus oneskorený výkon bez AI. Viacnásobné odovzdania v ten istý deň sú použiteľnou stopou toho, či sa študent vôbec zapojil. Nie sú dôkazom, že sa niečo naučil.

## Rozdeľte komentáre skôr, než ich automatizujete

Vezmite svoju poslednú sadu komentárov a rozdeľte ju na dve časti: opravy viet a rozhodnutia o uvažovaní. Toto rozdelenie vám povie, čo automatizovať, a je užšie, než naznačujú predajcovia.

Pilot Deakin prebiehal v roku 2021 s nástrojom automatickej spätnej väzby FeedbackFruits v 29 jednotkách a s takmer 4 000 študentmi. Pracuje s mikroúrovňovými črtami textu: dĺžka vety, interpunkcia, gramatika, štruktúra textu. To podporuje fázu korektúry, kde vyučujúci nastaví parametre, študent nástroj používa samostatne a spätná väzba príde včas na to, aby sa dala použiť. Škáluje sa deľba práce, nie model.

Úsudkové komentáre sú miestom, kde žijú spôsoby zlyhania. [[learner-centered-feedback-ai|Aldino et al. (2026)]] zozbierali problémy na strane vyučujúcich od 21 učiteľov vysokých škôl: nekonzistentný tón (n = 7), možné dezinformácie (n = 5) a problémy s dôverou (n = 5). Ich revízna práca sa minula na mazanie prehnanej chvály a všeobecných návrhov, nie na pridávanie obsahu. Ten zoznam je vaša revízna úloha a tam idú hodiny.

## Zoraďte zdroje do etáp namiesto vrstvenia

Najsilnejší dôkaz o dizajne pochádza z viaclokálneho, zhlukovo randomizovaného, longitudinálneho terénneho experimentu: 1 176 študentov prvého ročníka v 48 sekciách na 4 univerzitách a v 3 doménach [[stem-education|prírodných vied]], randomizovaných na úrovni sekcie do podmienok len rovesníci, priama generatívna AI, reflexívna generatívna AI a hybridná ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Reflexívna podmienka vyžadovala sebahodnotenie pred kritikou AI. Hybridná prešla sebahodnotením, potom spätnou väzbou rovesníkov a potom kritikou generatívnej AI. Hybridná podmienka priniesla najvyššie prínosy v kvalite argumentácie a najjasnejšiu výhodu v pojmovom učení. Reflexívna aj hybridná podmienka priniesli silnejšie prevzatie spätnej väzby a viac [[self-regulated-learning|samoregulovaného učenia]] než priama generatívna AI a obe ju prekonali v oneskorenom transfere bez AI. Priama generatívna AI zdvihla okamžitú kvalitu argumentácie nad spätnú väzbu rovesníkov, čo je jej výhoda, a urobila to so slabším transferom.

Mechanizmus vysvetľuje, prečo záleží viac na poradí než na nástroji. Priama kritika vyzýva na pasívne prevzatie: študent prečíta verdikt a použije ho. Reflexívne a hybridné dizajny nútia študenta komentár interpretovať, porovnať ho s kritériami, posúdiť jeho relevantnosť a potom revidovať. Vzdelávacia hodnota závisí menej od prístupu k AI než od toho, či prostredie spätnej väzby zachováva [[agency|agentnosť žiaka]] a [[evaluative-judgment|hodnotiaci úsudok]] počas revízie.

Spätná väzba rovesníkov si v sekvencii zaslúži vlastné miesto. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen and Yan (2026)]] viedli dve paralelné triedy angličtiny (N = 118 študentov prvého ročníka v Číne; generatívna AI n = 56, rovesníci n = 62) cez tri cykly sebahodnotenia za jeden semester. Lešenie od generatívnej AI zlepšilo gramotnosť spätnej väzby mierne, ale významne oproti ľudskému recenzovaniu rovesníkmi (ANCOVA p = 0,049, ηp² = 0,03). Študenti s generatívnou AI iteratívne zušľachťovali prompty a overovali alebo spochybňovali nepresný výstup. Študenti v rovesníckej skupine si vyberali zdroje podľa spoločenskej výhodnosti a ich hodnotiaci úsudok skresľovala náklonnosť z priateľstva. Recenzovanie rovesníkmi si zachovalo odlišnú hodnotu pre vnímanie publika, a preto autori navrhujú viacetapové dizajny s anonymnou spätnou väzbou rovesníkov namiesto nahradenia.

Výhoda Gu et al. bola malá a oni ju čítajú ako skutočnú, ale nie samu o sebe transformatívnu. Podpornú prácu odviedlo lešenie učiteľa, usmernenia k promptom a pracovné listy.

## Dajte modelu rubriku a potom ho nechajte ukázať kroky

Generovanie odkazované na rubriku je tá automatizovateľná časť.

Kvalitatívny prínos Farrokhnia et al. pochádzal z promptu s reťazcom úvah, ktorý previedol model hodnotením krok za krokom podľa rubriky argumentácie, nie z holého pokynu dať spätnú väzbu. Gu et al. dali svojej skupine s generatívnou AI ChatGPT-4o s predtrénovanými rubrikami a usmerneniami k promptom, čo umožnilo výstup overiť proti uvedeným kritériám. V oboch prípadoch je prompt miestom, kde vaše kritériá vstupujú do systému, a stopa uvažovania je to, čo vám umožní vidieť, či ich model použil.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson and Yan (2025)]] robia z kvality promptu pánt celého procesu. Nejasné prompty dávajú všeobecný, nepoužiteľný výstup a vygenerované komentáre môžu byť halucinované, predpojaté alebo sa prekrývať, čo vracia hodnotiaci úsudok čitateľovi. Kalibrácia je ešte ostrejšia. U Farrokhnia et al. bola kvalita spätnej väzby generatívnej AI významne spojená so silou prvého konceptu študenta, kým kvalita spätnej väzby učiteľa nebola. Učiteľ kalibroval konzistentnejšie. Objem škáluje. Kalibrácia neškáluje.

## Nechajte posledné slovo a záznam človeku

[[becerra-aicofe-feedback-2026|Becerra, Palma and Cobos (2026)]] opisujú AICoFE, ktorý prevádzkuje tri nezávisle doladené modely (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) nad skóre rubriky a kvalitatívnymi pozorovaniami, aby vytvoril nezávislé komentáre ku konceptu. Vyučujúci potom zostaví konečnú správu výberom viet alebo odsekov, s legendou ukazujúcou, ktorý model prispel čím. Model navrhuje. Vyučujúci doručuje a doručené dielo podpisuje jeden človek, ktorý koncept prečítal.

Aldino et al. nachádzajú ten istý vzorec „pomôž a potom over“ v bežnej praxi. Komponent strojového učenia najčastejšie označil „Napĺňanie cieľa učenia“ ako chýbajúce (20 z 21 učiteľov ho vynechalo; 16 označenie prijalo) a „Vzťah študenta a učiteľa“ (14 vynechalo; 12 prijalo). Učitelia rozhodli o každom návrhu podľa profesionálneho úsudku, čo je zmyslom toho, aby boli v slučke.

Dvanásť z 21 učiteľov Aldino et al. urobilo ďalšie revízie na úrovni viet a prevládajúcim vzorcom bola kalibrácia tónu: zoslabenie chvály (f = 11), odstránenie návrhov (f = 9), odstránenie povzbudenia (f = 8). Revízie sa zhlukovali v relačnej dimenzii, najmä vo vzťahu študenta a učiteľa (f = 24). Chránili autentickosť a profesionálny hlas a táto práca sa neautomatizuje.

## Naučte študentov čítať komentár

Gramotnosť spätnej väzby je predpoklad a je rozložená nerovnomerne.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths and Lodge (2026)]] dali 32 študentom psychológie 25-minútovú esejistickú úlohu so záznamom obrazovky a s neobmedzeným prístupom k ChatGPT, potom im záznam prehrali v interview stimulovanom videom. Gramotnosť spätnej väzby bola jediným významným pozitívnym prediktorom známky z eseje (β = 0,46, p = .017). Frekvencia používania generatívnej AI, [[trust|dôveryhodnosť zdroja]] a [[prior-knowledge|predchádzajúce poznanie]] výkon nepredpovedali, čo uvádzajú aj [[feedback-futures-genai|Zhan, Wood, Carless and Yan (2026)]] v úvodníku k špeciálnemu číslu. Menej ako tretina študentov porovnala výstup AI s iným internetovým zdrojom. Polovica vyjadrila zámerné vyhýbanie sa AI pre [[academic-integrity|akademickú integritu]] alebo preto, že chceli esej vlastnými slovami. Väčšina žiadala spätnú väzbu na úrovni úlohy, ktorá sa na iné úlohy prenáša slabo.

Krajnosti sú viditeľné na dvojici pisateľov IELTS, ktorú opisujú Zhan et al. Študent s nízkou gramotnosťou napísal nejasný prompt, dostal všeobecnú spätnú väzbu, dôveroval jej alebo ju prepísal priveľa a zapojil sa povrchne. Študent s vysokou gramotnosťou napísal prompt odkazujúci na kritériá, dopytoval sa, križovo overoval zdroje a sledoval revízie. Rozdielom bola výučba a návyk, nie prístup k nástroju.

Povedzte študentom priamo, že komentáre modelu môžu byť halucinované, predpojaté alebo sa prekrývať, a že revízia patrí študentovi. Rámujte výstup ako koncept názoru, ktorý treba posúdiť, nie ako odpoveď na kopírovanie. Potom žiadajte porovnanie, pretože menej ako tretina študentov ho urobí bez vyzvania.

## Čo vyučujúci na tomto chápu nesprávne

Viac komentárov znamená viac spätnej väzby. Komentáre sa lacno produkujú a draho vstrebávajú a obmedzenie sedí na strane študenta v slučke. Lepšie hodnotené komentáre AI u Farrokhnia et al. nepriniesli viac revízií než komentáre učiteľa.

Lepší model opraví všeobecný výstup. Zlyhania nástroja Deakin boli zlyhaniami rozsahu: črty na úrovni vety, úzke pásmo korektúry. Zhan et al. lokalizujú opravu do promptu, rubriky alebo človeka, nie do väčšieho modelu. Dvojica pisateľov IELTS je dôkazom; ten istý nástroj, iné návyky, iné výsledky.

Sprístupnenie nástroja je intervencia. Používanie dosahovalo približne 13 % bakalárov a 12 % postgraduálnych študentov, keď bol nástroj voliteľný. Zvyšok dizajnovej otázky je, čo sa deje s ostatnými 87 %.

Úspora času je automatická. Na otázku, čo im nástroj spätnej väzby s AI dal, 21 učiteľov uviedlo úsporu času len zriedka (n = 2). Oveľa častejšie uviedli reflexiu (n = 14), zlepšený jazyk a štruktúru (n = 11) a identifikáciu chýbajúcich komponentov (n = 10). Ich revíznej práci dominovalo upravovanie (f = 32) a odstraňovanie (f = 27), s pridaním zriedkavým (f = 8). Objaví sa koncept a diagnostický podnet. Objaví sa aj revízna, kalibračná a overovacia práca. [[ai-save-instructor-time|Otázka pracovnej záťaže]] je tou, ktorá sa najčastejšie sľubuje ako vyriešená, a generatívna AI prácu učiteľa prerozdeľuje, nie odstraňuje.

Hodnotenia spokojnosti vám hovoria, že komentáre sú presné. V pilote Deakin pozitívne priemerné hodnotenia koexistovali s chybami označenými študentmi. Navzorkujte výstup proti vlastnému čítaniu tých istých konceptov a zaznamenajte, kde bol model všeobecný, nesprávny alebo lichotivý.

## Čo sa vám vráti

**„Spätná väzba AI nie je osobná.“** Často pravda a je to dôvod, prečo nechať posledné slovo človeku. AICoFE existuje preto, že všeobecná próza modelu nie je to, čo by študent mal dostať: vyučujúci vyberá, upravuje a podpisuje konečnú správu. 21 učiteľov u Aldino et al. prepisovalo tón z toho istého dôvodu. Personalizácia je v tomto dizajne vaša práca a model robí prípravnú prácu.

**„Moji študenti aj tak nebudú čítať spätnú väzbu.“** Čítajú menej, než dúfame, a dôkazy hovoria, že opravou je dizajn, nie objem. Prevzatie v pilote Deakin dosahovalo približne 13 % a 12 %. Lepšie hodnotené komentáre Farrokhnia et al. nepriniesli extra revíziu. Ručičku posunulo poradie, ktoré vynucuje zapojenie, sebahodnotenie, potom spätná väzba rovesníkov, potom kritika AI, plus tri cykly revízie za semester, ktoré priniesli merateľné rozdiely v gramotnosti spätnej väzby.

**„To nie je to, za čo študenti platia.“** Potom nedovoľte, aby sa AI stala jediným hlasom, ktorý od vás počujú. Obhájiteľná verzia dáva študentom viac okamihov spätnej väzby, kým vy trávite hodiny na častiach náročných na úsudok: posledné slovo, kalibrácia, komentáre, ktoré nesú vašu autoritu. Čo študenti pri neopatrnom nasadení stratia, je súdržnosť medzi kritériami, komentármi a výsledkom. Špecifikujte komplementárnosť cez poradie, porovnávanie, upravovanie a správu a námietka stratí silu. Nechajte dva zdroje vedľa seba a nestratí.

**„Nemám čas recenzovať všetko, čo model napíše.“** Potom nerecenzujte všetko. Automatizujte pásmo, kde sú chyby lacné na zachytenie, jazykovú prácu na úrovni vety, a navzorkujte úsudkový výstup proti konceptom, ktoré ste už oznámkovali. Čísla Aldino vám povedia, čo hľadať: tón, dezinformácie, prehnanú chválu, prekrývanie.

## Čo urobiť tento týždeň

**1.** Rozdeľte svoju poslednú sadu komentárov na opravy na jazykovej úrovni a úsudkové rozhodnutia a spočítajte každú kopu.

**2.** Napíšte prompt s reťazcom úvah odkazujúci na rubriku, ktorý by ste dali modelu, a otestujte ho na troch konceptoch, ktoré ste už oznámkovali.

**3.** Navzorkujte výstup proti vlastným komentárom a zaznamenajte, kde bol model všeobecný, nesprávny alebo lichotivý.

**4.** Usporiadajte jedno zadanie ako sebahodnotenie, potom spätnú väzbu rovesníkov, potom kritiku AI, a povedzte študentom, že AI je koncept názoru, ktorý sa od nich očakáva spochybniť.

**5.** Žiadajte jedno porovnanie s druhým zdrojom alebo s kritériami, keďže menej ako tretina študentov to robí bez vyzvania.

**6.** Zaznamenajte, koľko z konečnej spätnej väzby prišlo z modelu a koľko ste zmenili. Sledovanie kurátorstva v AICoFE je vzorom pre takýto záznam.

**7.** Sledujte rozdelenie medzi expertmi a nováčikmi. Vyučujúci s viac ako piatimi rokmi skúseností hlásili viac problémov s výstupom nástroja než menej skúsení kolegovia, ktorí si cenili lešenie. Ak vaši skúsení kolegovia vidia viac zlyhaní než vy, je to informácia o vašej vlastnej kalibrácii.

## Kam ísť ďalej

[[feedback|Spätná väzba]] je zastrešujúcim konceptom celého systému: poskytovanie, slučka, prevzatie a kontext hodnotenia. [[ai-feedback-quality|Kvalita spätnej väzby AI]] pokrýva, čo robí vygenerované komentáre presnými, užitočnými, včasnými a pedagogicky zdravými, a táto stránka je praktickým stredom o tom, ktoré kombinácie týchto častí prinášajú lepšiu spätnú väzbu v meradle.

Otázky o tom, čo má známka znamenať, keď je zapojená AI, vrátane nahradenia konštruktu, overených dôkazov o procese a pravidiel integrity, patria na [[redesign-assessment-ai-era|preprojektovanie hodnotenia v ére AI]] a [[assessment-validity|platnosť hodnotenia]], nie sem. Špeciálny prípad výučby písania nájdete v [[writing-instruction-ai-best-practices|osvedčených postupoch pre výučbu písania v kontexte AI]].
