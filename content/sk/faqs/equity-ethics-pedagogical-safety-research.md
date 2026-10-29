---
title: "Ako by mal výskum AI vo vzdelávaní zohľadňovať rovnosť, prístupnosť, súkromie, etiku a pedagogickú bezpečnosť?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [ai-disabled-neurodivergent-learners, ai-guidance-children-under-13, institutional-ai-policy, research-gaps-aied]
weight: 60
audience: [researchers, instructors, instructional designers]
ethics: [accessibility, digital-divide, equity-in-ai-education, ethics, privacy, pedagogical-safety]
methods: [research-methods-aied]
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/equity-ethics-pedagogical-safety-research
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Protokol má byť hotový v piatok. Časť 7 o etike hovorí, že riziká sa budú monitorovať. Nábor prebieha cez existujúci prvoročný predmet a odsek o obmedzeniach poznamenáva, že zistenia sa nemusia dať zovšeobecniť. Panel posudzovateľov sa bude pýtať, kto z toho bude pravdepodobne mať úžitok, či študenti so zdravotným postihnutím dokážu tú vec používať, čo sa stane so záznamami interakcií a ako vyzerá škodlivá odpoveď tutora v dátach. Štyri otázky a ani jedna z nich nemá zatiaľ vlastnú časť.

Odpoveď, ktorú treba dať panelu: rovnosť, prístupnosť, súkromie a [[pedagogy|pedagogická]] bezpečnosť patria do dizajnu aj do meraní výsledkov už od prvého návrhu. Každá z nich mení to, koho naberáte, čo meriate a čo reportujete, preto ich pripútajte k rozhodnutiu, kým je protokol ešte upraviteľný.

## Krátka verzia

**1.** Pomenujte porovnanie podskupín skôr, než začnete zbierať dáta, a zapíšte ho do analytického plánu.

**2.** Pustite študentov so zdravotným postihnutím do dizajnového sedenia a otestujte skutočné rozhranie.

**3.** Zapíšte kompromis v oblasti súkromia vrátane toho, kto o ňom rozhodol a kto ho môže zvrátiť.

**4.** Testujte bezpečnosť na celých konverzáciách, v scenároch vlastného odboru.

**5.** Spojte údaje o výsledkoch s rozhovormi a nechajte stopu, ktorú čitateľ dokáže preskúmať.

## Spýtajte sa, kto má z toho úžitok

Koncept [[digital-divide|digitálnej priepasti]] oddeľuje priepasť v prístupe, v zručnostiach a vo výsledkoch, čo znamená, že odstránenie prístupovej bariéry pomocou [[conversational-ai|chatbota]] neprináša [[equity-in-ai-education|rovnaký]] úžitok. Navrhujte pre tretiu priepasť. Reportujte výsledky podskupín a testujte rozdielnu účinnosť namiesto spoliehania sa na celkový priemer ([[differential-effects-across-learner-groups|rozdielne účinky medzi skupinami študentov]]).

[[adeniranye-ai-integration-nigerian-higher-education-2026|Porovnávacia štúdia 45 nigérijských univerzít]] (15 federálnych, 15 štátnych, 15 súkromných) ukazuje, ako sa tieto priepasti sčítavajú. Celková integrácia [[ai-education|AI]] bola mierna, M = 4,79 na 10-bodovej škále, rozsah 1,83 až 7,83. Typ [[governance|správy]] ju nepredpovedal (F(2,42) = 1,01, p = 0,372). Predpovedal ju vek inštitúcie (β = 0,43, p = 0,016) a umiestnenie na juhozápade (β = 0,31, p = 0,029). Vnútorné kapacity sa navzájom posilňovali (r = 0,79 až 0,80) a medzinárodné spolupráce a priemyselné partnerstvá sa sčítavali (r = 0,74), čo autori zhŕňajú ako „spojenia plodia spojenia“. Politické rámce boli najslabšie (M = 4,09; len 27 % inštitúcií dosiahlo 6 alebo viac), takže medzi formálnou stratégiou a operačnou činnosťou v oblasti [[curriculum-design|tvorby kurikula]] zostáva medzera.

Z toho vyplývajú dva dôsledky pre dizajn. Cieľte na novšie inštitúcie a nedostatočne obsluhované regióny, keďže kategória neurčuje kapacitu. A berte do úvahy kontexty [[global-south|globálneho Juhu]], ktoré širšia dôkazová základňa stále vynecháva.

## Pustite študentov so zdravotným postihnutím do dizajnérskej miestnosti

Zahrňte študentov so zdravotným postihnutím do dizajnu a hodnotenia, testujte skutočné rozhrania proti požiadavkám prístupnosti a poskytnite rovnocenné cesty k účasti aj k preukázaniu učenia. Technická zhoda s predpismi a inkluzívne vyučovanie sú dve oddelené skúšky a [[accessibility|prístupnosť]] pokrýva obe.

[[ko-hughes-vsd-student-centered-its-2026|Štúdia dizajnu citlivého na hodnoty]] so študentmi komunitnej vysokej školy, vyučujúcimi a vývojármi ukazuje túto prácu v praxi. Vytvorila 16 funkcií zosúladených s hodnotami naprieč [[explainable-ai|vysvetliteľnosťou]] (E1-E5), kontrolou [[human-in-the-loop-ai|s človekom v slučke]] (H1-H9) a [[privacy|súkromím]] (P1-P4) a odhalila napätia namiesto uprataných odpovedí: transparentnosť proti interpretovateľnosti, súkromie proti pedagogickému vhľadu, [[agency|konanie študenta]] proti [[scaffolding|lešeniu]] vedenému systémom. Očakávajte, že o týchto napätiach budete rozhodovať, a zaznamenajte, ktorú stranu ste zvolili.

## Rozhodnite o kompromise v súkromí a pomenujte, kto rozhoduje

Zbierajte dáta, ktoré vzdelávací účel potrebuje, zviditeľnite používanie dát a limity systému a udržte ľudskú zodpovednosť konkrétnu. Spravodlivosť, súhlas, zaujatosť, vysvetliteľnosť, autonómia študenta a dôsledky rozhodnutí sprostredkovaných AI sú základné dimenzie [[ethics|etiky]] a v praxi si navzájom odporujú. Študenti chceli kontrolu nad [[learning-analytics|učebnou analytikou]] a afektívnymi dátami, vyučujúci chceli viditeľnosť na podporu učenia. Obe pozície sú obhájiteľné, a práve preto rozhodnutie potrebuje pomenovaného vlastníka.

Keď systémy preberajú [[agency|konanie]], otázka sa stáva štrukturálnou. [[beyond-agent-label-agentic-ai-governance-2026|Kritická prehliadka správy agentickej AI]] tvrdí, že autonómia by nemala presiahnuť zrelosť dôkazov ani silu zodpovednej ľudskej kontroly. Navrhuje spoločný jazyk reportovania: úrovne autonómie A0-A4, úrovne dohľadu O0-O4 a stupne zrelosti dôkazov M0-M5. Následkové použitia (A4: prijímanie, známkovanie, postup) si vyžadujú replikovanú validáciu relevantnú pre kontext a trvalú ľudskú autoritu a vysoké skóre v [[benchmark|benchmarku]] nenahrádza ani jedno z toho.

## Testujte škody, ktoré benchmarky vynechávajú

Pedagogická bezpečnosť znamená merať to, čo benchmark nebude: [[cognitive-offloading|nadmernú závislosť]], nadmerné odhaľovanie odpovedí, upevňovanie [[misconceptions|mylných predstáv]], stratu konania, potláčanie [[metacognition|metakognície]], nerovnaké zaobchádzanie, [[motivation|škodu na motivácii]] a nesúlad s výučbou. Testujte viackolové interakcie v [[discipline-specific-aied|scenároch špecifických pre odbor]]. Syntéza [[pedagogical-safety|pedagogickej bezpečnosti]] a benchmark [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] ukazujú, prečo systém, ktorý vyzerá presne, môže napriek tomu poškodiť učenie.

Praktiky sa zhodujú na zlučiteľnom dizajne. V [[reichert-human-centered-llm-chatbot-design-teachers-2026|participatívnej dizajnovej štúdii so šiestimi stredoškolskými učiteľmi]] učitelia nezávisle navrhli „ohraničených expertov“ namiesto [[agentic-ai|autonómnych agentov]]: úzku doménu, ľudský dohľad a tri ochranné vrstvy v podobe hraníc domény, filtrovania obsahu a zásahu [[teacher-role|učiteľa]]. AI prijali na prezentovanie obsahu, poskytovanie cvičenia a [[formative-assessment|formujúcu]] [[feedback|spätnú väzbu]] a odmietli delegovať stanovovanie cieľov alebo [[summative-assessment|sumatívne hodnotenie]]. Dohľad rámovali ako profesijnú zodpovednosť.

## Spojte metódy a ukážte cestu od dát k tvrdeniu

Disagregované [[quantitative-research|kvantitatívne]] výsledky môžu odhaliť [[differential-effects-across-learner-groups|rozdielne účinky]]. Rozhovory, pozorovania, ohniskové skupiny a spoludizajn vynášajú na povrch bariéry, škody, kultúrne predpoklady a skúsenosť študenta, ktoré agregované skóre vynecháva. Syntéza [[research-methods-aied|výskumných metód v AIED]] považuje trianguláciu za nevyhnutnú, pretože žiadna jednotlivá [[qualitative-research|kvalitatívna]] ani kvantitatívna metóda nemaximalizuje súčasne kauzálne usudzovanie, ekologickú validitu, porozumenie kontextu a zovšeobecniteľnosť.

Vaša vlastná analýza potrebuje rovnakú disciplínu. [[chain-behind-claim-warrantability-2026|Návrh na obhájiteľnosť tvrdení]] argumentuje, že interpretácia podporená AI zostáva preskúmateľná, spochybniteľná a revidovateľná, keď sa dodáva s artefaktmi, ako sú tabuľky tém prepojené na zdroje, vrstvené perspektívy a rieky dôkazov. Plynulé zhrnutie by nemalo skryť cestu, ktorá k nemu viedla.

Udržujte oddelené aj úrovne výsledkov. [[beyond-agent-label-agentic-ai-governance-2026|Prehliadka agentickej AI]] oddeľuje výsledky artefaktu, ako sú presnosť a [[ai-feedback-quality|kvalita spätnej väzby]], od úžitku pre študenta. Výsledky artefaktu môžu byť nevyhnutné a nikdy nie sú postačujúce, pričom najredšie sú dôkazy práve o výsledkoch v oblasti rovnosti a inštitúcií.

## V čom sa toto publikum mýli

Rovnosť znamená prístup. Koncept digitálnej priepasti stavia zručnosti a výsledky na ten istý zoznam ako prístup a Adeniranyova štúdia zistila, že kapacita sa líši podľa veku inštitúcie a regiónu, kým typ správy nepredpovedal nič.

Prístupnosť je kontrolný zoznam na rozhraní. Štúdia dizajnu citlivého na hodnoty odhalila napätia medzi vysvetliteľnosťou a interpretovateľnosťou, ktoré žiadny kontrolný zoznam nevyrieši.

Súkromie je formulár súhlasu. Dizajnová štúdia zistila, že študenti a vyučujúci chcú z tých istých dát opačné veci, a prehliadka správy spája autonómiu so zrelosťou dôkazov.

Bezpečnosť znamená, že model odmietne škodlivé požiadavky. Pedagogická bezpečnosť pokrýva nadmernú závislosť, upevňovanie mylných predstáv a stratu konania, čoho sa test odmietnutia vôbec nedotýka.

Na otázku odpovie jediná metóda. Syntéza metód výslovne uvádza, že tie štyri vlastnosti sa navzájom vymieňajú.

## Čo vám príde späť

**„Rovnosť vyriešime v diskusii.“** Potom ju váš analytický plán nemôže otestovať. Pomenujte porovnanie podskupín teraz, inak zistenie príde až po uzavretí dát.

**„Naša vzorka je primalá na analýzu podskupín.“** Potom povedzte, čo unesie, a reportujte, kto v nej bol. Nulový výsledok podskupiny z málo silnej vzorky nie je dôkazom rovnosti.

**„Testovanie prístupnosti je práca úradu pre študentov so zdravotným postihnutím.“** Ich posúdenie pokrýva zhodu s predpismi. Či študent dokáže preukázať, čo vie, v rámci vašej aktivity, je dizajnová otázka, a práve preto vyššie uvedená dizajnová štúdia posadila študentov za stôl.

**„Dáta sú anonymizované, takže súkromie je vyriešené.“** Napätia v dizajnovej štúdii sa týkali kontroly a viditeľnosti, nie identifikátorov. Študenti chceli vedieť, kto vidí ich afektívne dáta a prečo.

**„Naša bezpečnostná sada prechádza.“** Na ktorých kolách? SafeTutors zistil, že vyučovacie modely degradujú počas dlhých konverzácií, a to je práve tá dĺžka, ktorú vaši študenti naozaj použijú.

## Čo urobiť tento týždeň

**1.** Pridajte do analytického plánu odsek o podskupinách, v ktorom pomenujete, ktoré skupiny a ktorý výsledok.

**2.** Zarezervujte jedno dizajnové sedenie so študentmi so zdravotným postihnutím alebo s personálom, ktorý ich podporuje, skôr než bude rozhranie finálne.

**3.** Zapíšte rozhodnutie o súkromí ako vetu s vlastníkom: čo sa zbiera, kto to vidí, kto to môže zastaviť.

**4.** Napíšte desať protivníckych kôl konverzácie vo svojom predmete a pustite ich proti systému.

**5.** Pridajte do analytického priečinka jeden preskúmateľný artefakt, napríklad tabuľku prepojenú na zdroje alebo súbor kódovaných výňatkov.

## Kam ďalej

[[evaluating-ai-interventions-methods|Hodnotenie intervencií s AI: metódy]] je sprievodná stránka o meraniach a dizajne. [[top-10-findings-ai-education-instructors|10 najdôležitejších zistení pre vyučujúcich]] nesie tieto obmedzenia v zisteniach 9 a 10, [[addressing-common-misconceptions-ai-education|Riešenie častých mylných predstáv o AI vo vzdelávaní]] sa zaoberá námietkami zainteresovaných strán a [[research-gaps-aied|Medzery vo výskume AIED]] uvádzajú, kde dôkazy chýbajú.
