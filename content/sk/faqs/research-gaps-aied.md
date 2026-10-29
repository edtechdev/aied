---
title: "Aké sú významné medzery vo výskumnej literatúre o AI vo vzdelávaní?"
created: "2026-08-24T14:10:00-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
audience: [researchers, instructors]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T12:11:34-04:00"
translation_of: faqs/research-gaps-aied
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

Termín na žiadosť o grant je o osem dní a časť o doterajšom stave poznania potrebuje jednu vetu o tom, čo táto oblasť ešte nevie. Alebo vám kolega povedal výboru, že doučovanie s AI zvyšuje výsledky, s odvolaním na dvojročný experiment na 18 stredných školách, a vy ste človek, ktorý musí povedať, čo tá štúdia unesie. Alebo si vyberáte tému dizertácie a zdá sa, že každá jej verzia už bola spracovaná.

Medzery, na ktorých záleží, sa týkajú sily, špecifickosti a použiteľnosti. AI dokáže vykonávať vzdelávacie úlohy; otvorené otázky sú, či konkrétny dizajn prináša trvácny prínos, komu, akým mechanizmom a za akých podmienok. Toto rozlíšenie rozhoduje o dvoch veciach na vašom stole: čo študovať ďalej a čo medzitým prestať tvrdiť. [[limitations-in-aied-research|Obmedzenia výskumu AIEd]] je katalóg, na ktorom táto stránka stojí. Dôkazy o [[intelligent-tutoring|inteligentných doučovacích systémoch]], prediktívnej [[learning-analytics|analytike]], [[generative-ai|generatívnej AI]] a autonómnych agentoch tiež nie sú zameniteľné a výskum používania AI na podporu učenia sa líši od výskumu učenia ľudí o AI, ako vysvetľuje prehľad [[ai-education|AI vo vzdelávaní]].

## Stručná verzia

**1.** Porovnajte AI so silnou ne-AI alternatívou, ktorá drží kurikulum, precvičovanie a podporu konštantné, a povedzte, čo AI pridala.

**2.** Merajte oneskorený výkon bez pomoci a uveďte, že výkon s pomocou nie je prírastkom učenia.

**3.** Uveďte, ktorý komponent balíka odviedol prácu a ktorý mechanizmus tvrdíte.

**4.** Validujte každé automatizované skóre a simulovaného žiaka proti skutočným žiakom, vrátane žiakov mimo vášho vývojového súboru.

**5.** Uveďte hranicu populácie, pretože spoločný priemer neodpovedá na otázku rovnosti.

**6.** Opíšte usporiadanie dosť dobre na to, aby ho niekto iný mohol znovu postaviť.

## Zvoľte porovnanie, ktoré izoluje AI

Dôkladné experimenty v triede existujú, takže „potrebujeme randomizované štúdie“ už medzeru nepomenúva. Ostrejšia otázka je, či komponent AI pridáva hodnotu nad rámec dodatočného precvičovania, lepších materiálov, včasnej spätnej väzby alebo väčšej inštrukčnej podpory.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] uvádza mierne zlepšenie výsledkov na 18 stredných školách popri obmedzenom vecnom zapojení sa do práce s doučovateľom a autori poznamenávajú, že zlepšenia sa podobali tým zo štruktúrovaného precvičovania bez AI. To je dôkaz o implementovanom celku a nedokáže izolovať, čo doň pridala AI v ňom.

Problém pod tým je pojmový aj empirický. „ChatGPT“ pomenúva nástroj, nie metódu. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] preverili 19 porovnaní ChatGPT vo vzdelávaní: len 4 (21 %) špecifikovali všetky tri z replikovateľného zásahu, operacionalizovanej kontroly a platnej miery učenia (74 % dobre definovaný zásah, 42 % dobre definovanú kontrolu, 53 % výsledok učenia). Keď nová AI prichádza spolu s novými aktivitami, spätnou väzbou alebo dizajnom rozhrania, médium a metóda sa zamieňajú a žiadny efekt nepatrí AI.

Čo by to vyriešilo: porovnania s realistickými ne-AI alternatívami, pri ktorých sa kurikulum, príležitosti na precvičovanie a podpora držia čo najkonštantnejšie, plus nezávislé replikácie naprieč inštitúciou, vyučujúcim, predmetom a modelom. Metódy tu odpovedajú na rôzne otázky. [[qualitative-research|Kvalitatívna]] a [[design-based-research|dizajnovo orientovaná]] práca vysvetľuje implementáciu, kým dobre navrhnuté experimenty nesú kauzálne tvrdenia, ako uvádzajú [[research-methods-aied|Metódy výskumu efektívnosti]].

## Merajte učenie po tom, čo nástroj zmizne

Zlepšená práca pri používaní AI nie je dôkazom učenia, ktoré prežije koniec pomoci. Syntézy [[learning-gains|prírastkov učenia]] a [[cognitive-offloading|kognitívneho odľahčenia]] stále kreslia tú istú líniu medzi výkonom s pomocou, uchovaným poznaním, nezávislým uvažovaním a transferom.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] ukazuje problém merania v randomizovanom experimente s viac ako 6 000 žiakmi stredných škôl. Pravidlo troch správnych odpovedí za sebou zvýšilo úspech definovaný platformou bez toho, aby samo o sebe prinieslo zistiteľné prírastky učenia o týždeň neskôr. Najsilnejší dôkaz z oneskoreného testu sa objavil vtedy, keď AI sedela vo vnútri pracovného postupu zvládnutia a sústredila sa na precvičovaný materiál.

Zostávajúca medzera sa týka trajektórií schopnosti a jeden pridaný posttest ju neuzatvára. Nikto neustanovil uchovanie naprieč mesiacmi, transfer naprieč úlohami, výkon po odňatí pomoci ani presnosť žiakov v posudzovaní toho, čo vedia, a oblasť neoddelila zlyhanie pri osvojovaní zručnosti od zhoršovania už osvojenej. Výskum odľahčenia ešte musí ukázať, kedy delegovanie tieto trajektórie podporuje a kedy vytláča precvičovanie, ktoré ich buduje.

## Zistite, ktorá časť balíka odviedla prácu

„Učenie podporované AI“ zvyčajne zabalí niekoľko zmien: novú spätnú väzbu, pridanú reflexiu, diskusiu s rovesníkmi, iné poradie úloh, zmenené motivačné nastavenia hodnotenia. Balík, ktorý uspeje, vám nepovie, ktoré komponenty boli nevyhnutné.

[[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design]] je skutočným posunom v tejto otázke. Medzi 1 176 študentmi prvého ročníka si reflexívne a hybridné dizajny viedli lepšie než priama [[ai-feedback-quality|spätná väzba AI]] v oneskorenom transfere bez AI. Hybridná podmienka spájala sebahodnotenie, [[peer-assessment|spätnú väzbu rovesníkov]] a kritiku AI. To oddeľuje, ako je spätná väzba organizovaná a používaná, od toho, či študenti majú k spätnej väzbe prístup vôbec.

Stále otvorené: prínos a načasovanie prvých nezávislých pokusov, sebarozvíjania vysvetlenia, vstupu rovesníkov, korektívnej spätnej väzby, náznakov a postupného odstraňovania pomoci a to, ako každý z nich interaguje s [[prior-knowledge|predchádzajúcim poznaním]] a náročnosťou úlohy.

Teoretická medzera ide popri tom. Pomenovať [[learning-theories|teóriu učenia]] nie je to isté ako otestovať ju. Štúdia potrebuje teoretickú predpoveď spojenú s konkrétnym správaním systému a merateľný proces učenia, a štatistická mediácia túto explanáciu informuje bez toho, aby ustanovila kauzálny mechanizmus. [[theory-development-aied|Theory Development in AI in Education]] a [[scaffolding|lešenie]] posúvajú argument ďalej.

## Validujte mieru skôr, než ju interpretujete

Konštrukty ako zapojenie, [[critical-thinking|kritické myslenie]], AI gramotnosť a [[personalized-learning|personalizácia]] sa v tejto literatúre merajú nekonzistentne. Sebaposudzovanie opisuje vnímanie; nemôže zastúpiť preukázanú kompetenciu. Technická presnosť, kvalita výstupu hodnotená expertom a učenie študentov sú tri rôzne ciele hodnotenia. [[educational-measurement|Educational Measurement]] a [[ai-ed-evaluation|AI Ed Evaluation]] považujú tieto rozlíšenia za základné.

Jedna medzera sedí vo vnútri problému merania: [[ai-technologies|systémy AI]] použité na hodnotenie iných systémov AI. V [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]] [[simulating-students|simulovaní žiaci]] často opustili pridelené [[misconceptions|mylné predstavy]] po korektívnej spätnej väzbe bez ohľadu na to, či sa spätná väzba mylnou predstavou zaoberala, takže ich odpovede mohli neúčinnú výučbu vykresliť ako úspešnú. Cielený tréning zlepšil mieru vernosti tejto štúdie a zlepšenie na tejto miere nie je validáciou proti ľudskému učeniu.

Chýba validácia celého reťazca hodnotenia, od správania modelu cez [[pedagogy|pedagogický]] úsudok po reakciu žiaka a vzdelávací výsledok, na žiakoch a v prostrediach, ktoré sa počas vývoja nepoužili. Ľudský úsudok potrebuje rovnakú kontrolu, pretože zhoda medzi hodnotiteľmi nie je dôkazom, že sa hodnotil správny konštrukt.

## Rozhodnite, čo hodnotenie ešte môže osvedčiť

AI vytvára dva prepojené problémy hodnotenia: pomáha vytvárať prácu, ktorá sa hodnotí, a môže ovplyvniť, ako sa táto práca boduje.

[[ai-agents-complete-lms-assessment-validity-2026|štúdia o agentoch AI, ktorí plnia hodnotené úlohy v LMS]] v tejto znalostnej báze dokumentuje agentov, ktorí prechádzajú živým bakalárskym kurzom a dokončujú hodnotené aktivity. To ukazuje schopnosť, ktorá spochybňuje predpoklady o dôkazoch vytváraných študentmi. Neustanovuje, aké bežné je takéto používanie, a neruší platnosť asynchrónneho hodnotenia ako kategórie.

Výskumná otázka je, ktoré dizajny ešte podporujú obhájiteľné závery o študentovi. [[eportfolio|Portfóliá]], reflexie, stupňovité odovzdania a záznamy aktivít potrebujú validáciu ako dôkazy namiesto toho, aby sa predpokladalo, že ustanovujú autorstvo alebo porozumenie. Štúdie by mali testovať kombinácie dôkazov proti nezávisle pozorovanej kompetencii a zároveň počítať s prístupnosťou, pracovnou záťažou, súkromím a úzkosťou študentov. Podrobnosti drží [[assessment-validity|Assessment Validity]].

Pri [[automated-assessment|automatizovanom bodovaní]] [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] uvádza systematickú nezhodu medzi modelmi v predvolenom nastavení a ľudskými hodnotiteľmi. Zistenia sú špecifické pre konfiguráciu a ukazujú, prečo vnútorná konzistencia nemôže niesť nárok na platnosť.

[[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] navrhuje hodnotiť oddelene to, čo žiaci musia zvládnuť samostatne, čo môžu dosiahnuť s AI a čo musia overiť a obhájiť. To je rámec, ktorý čaká na empirickú validáciu.

Detekcia je najjasnejšia slepá ulička v tejto oblasti. [[karr-ai-detection-humanization-2026|Karr et al. (2026)]] spustili dva komerčné detektory pri τ = 0,50 na 642 publikovaných anglických abstraktoch. Ľahké úpravy textu AI v súlade s usmerneniami boli označené v 38-80 %. Neupravené originály z rokov 2023-25 boli označené v 9-15 %, pričom práce mimo [[stem-education|STEM]] výrazne prevyšovali STEM pri p < 0,001. Po humanizácii nástroje zachytili menej ako 4 % prepisov označených ako AI, teda mieru falošných negatívov nad 96 %. Skóre, ktoré trestá čestnú pomoc a prehliada obchádzanie, nemôže podložiť záver o žiakovi.

## Prestaňte čítať skóre gramotnosti ako dôkaz správania

Výskum intervencií v AI gramotnosti je dosť rozsiahly na syntézu. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education]] pokrýva 59 štúdií a 7 211 účastníkov, uvádza pozitívny priemerný efekt a zároveň podstatnú variabilitu so širokým intervalom predikcie, ktorý pretína nulu. Výsledky zamerané na znalosti vyšli silnejšie než zručnosti, postoje alebo etika.

Ostrejšia medzera je, či výučba gramotnosti mení to, čo ľudia robia, keď AI používajú, a ďalší rámec kompetencií by ju neuzavrel. Dokážu žiaci rozpoznať nepodložené tvrdenia, overiť zdroje, odmietnuť zavádzajúce návrhy, všimnúť si neprimeraný súhlas a zvoliť, kedy nedelegovať? Platí to pod časovým tlakom a prenáša sa to na neznáme systémy a disciplíny?

Vyriešiť to vyžaduje hodnotenie založené na výkone spojené s pozorovaním skutočných rozhodnutí a oneskoreným sledovaním, pričom pojmové znalosti, operačná zručnosť a kritický úsudok sa držia oddelene a nie zlúčené. [[ai-literacy|AI gramotnosť]] a [[trust-calibration|Trust Calibration]] dodávajú rozlíšenia.

## Uveďte, koho zistenie vynecháva

Zistenia z jedného kurzu, inštitúcie, jazyka alebo populácie žiakov zriedka oprávňujú rozhodnutia inde, čo syntéza [[limitations-in-aied-research|Obmedzenia výskumu AIEd]] považuje za opakujúci sa problém. Ako sa efekty líšia podľa vývojovej fázy, disciplíny, predchádzajúceho poznania, postihnutia, jazyka a podmienok zdrojov, zostáva z väčšej časti nezmerané.

Výskum rovnosti tiež musí oddeliť prístup, zručnosti a výsledky. Syntéza [[digital-divide|digitálnej priepasti]] jasne uvádza, že zariadenia a prístup k nástrojom neustanovujú rovnakú schopnosť mať z nich úžitok. [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] sledovala 752 žiakov nižšieho stredného stupňa v Hongkongu: medzery v psychologickej pripravenosti sa zúžili, kým rozdiely v objektívnom teste AI gramotnosti pretrvávali. Každá skupina sa zlepšila a nerovnosť sa neuzavrela. Profily predchádzajúceho učenia neboli náhodne pridelené, takže ich kauzálna úloha zostáva neznáma.

Pokrytie je na konkrétnych miestach riedke. [[differential-effects-across-learner-groups|Differential Effects Across Learner Groups]] počíta literatúru podľa populácie: žiaci učiace sa druhý jazyk a viacjazyční žiaci a študenti s postihnutím sú najhlbšími vláknami, rod a neurodiverzita nasledujú, študenti prvej generácie a medzinárodní študenti majú v tomto korpuse po jednej štúdii, nadaní a vysoko výkonní študenti sú v podstate nepreskúmaní a utečenci, imigranti a vysídlení žiaci sa neobjavujú v žiadnej. Dôkazová základňa s takýmto tvarom nemôže na otázku rovnosti odpovedať agregovaním.

Kapacita sa líši aj vnútri jedného národného systému. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] ohodnotili integráciu AI na 45 nigérijských univerzitách a našli strednú celkovú adopciu (M = 4,79, rozsah 1,83-7,83 na 10-bodovej škále), pričom typ inštitúcie nepredpovedal integráciu, keď sa kontroloval vek a geografia (vek β = 0,43; poloha juhozápad β = 0,31). Vnútorné kapacity navzájom korelovali pri r = 0,79-0,80 a medzinárodné spolupráce s partnerskými vzťahmi s priemyslom pri r = 0,74, takže prepojené inštitúcie hromadia zložené výhody. Ktoré dizajny budovania kapacít menia výsledky na novších, menej prepojených inštitúciách, je neotestované.

Výskumnou prioritou je identifikovať dizajny, ktoré zmenšujú rozdiely v preukázanej schopnosti, účasti a [[agency|konaní]], pričom výsledky podskupín a záťaže sa uvádzajú popri priemerných prínosoch. Prístupnosť nesie vlastnú nevyriešenú otázku: či dizajn odstraňuje bariéru účasti, alebo nahrádza schopnosť, ktorú má žiak rozvíjať. Pozri [[equity-in-ai-education|Equity in AI Education]] a [[accessibility|prístupnosť]].

## Povedzte, kto drží kontrolu a kedy sa mení

Keď systémy plánujú, iniciujú akcie, držia pamäť a koordinujú nástroje, vzdelávacia otázka sa stáva tým, kto by mal kontrolovať ktoré časti procesu učenia a kedy sa táto kontrola má posunúť.

[[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] mapuje 474 štúdií a nachádza obmedzenú longitudinálnu validáciu, koncentráciu v [[higher-ed|vyššom vzdelávaní]] a STEM a slabú integráciu vzdelávacej teórie: len 29 % skúmaných štúdií sa výslovne opieralo o vzdelávaciu teóriu, čo je zistenie o tomto korpuse, nie o celej práci v AIED.

Otvorené otázky nasledujú. Prináša pomoc iniciovaná žiakom iné výsledky než pomoc iniciovaná agentom? Dá sa podpora odňať, ako sa kompetencia rozvíja, bez straty? Zachovávajú si žiaci schopnosť spochybniť systém? Syntézy [[agentic-ai|Agentic AI]] a [[human-ai-collaboration|Human-AI Collaboration]] pridávajú [[teacher-role|zásah učiteľa]] a zodpovednosť v prostrediach s viacerými agentmi, kde nikto neustanovil, kto odpovedá za rozhodnutie agenta. Väčšia autonómia je pedagogickou voľbou dizajnu s dôkazovou základňou, ktorú ešte treba postaviť.

## Testujte zlyhania bezpečnosti proti skutočným žiakom

Vzdelávacia bezpečnosť siaha za faktickú presnosť a zakázané požiadavky. Doučovateľ môže dať správnu odpoveď a zároveň odobrať žiakovi príležitosť uvažovať, posilniť mylnú predstavu alebo vybudovať závislosť. [[pedagogical-safety|Pedagogická bezpečnosť]] pokrýva tento konštrukt.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] identifikuje zlyhania vrátane nadmerného prezrádzania odpovedí a opúšťania lešenia, pričom pri testovaní vo viacerých kolách bolo zlyhaní podstatne viac. To sú zistenia typu [[benchmark|referenčnej úlohy]] za špecifikovaných podmienok, nie odhady toho, ako často škoda v triedach nastáva.

Čo sa stane, keď sa tieto zlyhania stretnú so skutočnými žiakmi pri dlhodobom používaní, nie je známe. Ktoré spôsobujú dočasný zmätok, ktoré trvalé mylné predstavy, ktoré znižujú motiváciu a ktoré oslabujú samostatnú schopnosť, nebolo zmerané. Nikto tiež neustanovil, ktoré ochranné opatrenia znižujú tieto riziká bez nadmerného odmietania alebo frustrácie. Dlhodobejšia práca potrebuje ako výsledky aj dôveru, ochotu hľadať ľudskú pomoc, [[agency|agentnosť žiaka]] a vzťahy s rovesníkmi a učiteľmi. Pre deti to vyžaduje vývojovo primerané štúdie spájajúce správanie systému so vzdelávacími a vzťahovými výsledkami.

## Oddeľte adopciu od implementácie

Technická schopnosť neustanovuje, že nástroj sa používa dobre, a profesijný rozvoj sa automaticky nedostane k študentom. Chýbajúci článok zvyčajne vedie od prípravy učiteľa cez zmenenú prax v triede po výsledky študentov.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]] je viacúrovňová štúdia 46 učiteľov a 2 832 študentov. Pedagogické znalosti AI boli spojené s vnímaním a zámermi študentov a ani jeden meraný komponent znalostí učiteľa nebol priamo spojený s prírastkami znalostí AI u študentov. Takéto asociácie neustanovujú, že tréningová intervencia by spôsobila lepšie učenie.

Otvorená otázka je, ktoré kombinácie koučingu, [[curriculum-design|zosúladenia kurikula]], revíznych rutín, rozvrhovania a inštitucionálnej podpory prinášajú trvalé zlepšenie, a štúdie musia pozorovať uskutočňované vyučovanie, nie dôveru učiteľa alebo zámer adoptovať. [[teacher-ai-competency|Teacher AI Competency]] a [[educational-development|Educational Development]] pokrývajú tento terén.

Porovnávacia nákladová efektívnosť je druhou medzerou. Hodnotenia by mali počítať overovanie, opravy, tréning, supervíziu, údržbu a čas implementácie popri nákladoch na predplatné a používanie modelu a porovnávať poskytovanie podporované AI s realistickými alternatívami. Otázka, na ktorú stojí za to odpovedať, je, aký vzdelávací prínos celé usporiadanie prináša za zdroje, ktoré spotrebuje.

## Počítajte dokumenty správy ako zámery

[[ethics|Etické]] princípy a rámce správy sú nevyhnutné a ich existencia neustanovuje, že menia prax alebo chránia žiakov.

[[agarwal-ethical-values-norms-aied-2026|Agarwal et al.]] preskúmali 25 článkov a našli koncových používateľov zväčša pasívnych v etickej literatúre, s hlasom študentov v podstate neprítomným, popri napätiach medzi hodnotami a mocenských asymetriách medzi zainteresovanými stranami. To opisuje preskúmanú literatúru. Nie je to tvrdenie, že študenti sa nikdy nezúčastňujú na dizajne AIED.

Chýba dôkaz o tom, ktoré usporiadania správy prinášajú merateľný rozdiel. Mení účasť študentov a učiteľov obstarávanie, dizajn nástrojov, pravidlá hodnotenia alebo nápravu po chybe? Zachytia postupy ľudskej revízie závažné chyby? Sú alternatívy k používaniu AI skutočne dostupné ľuďom, ktorým sa prikazuje ju používať? Výskum súkromia má paralelnú medzeru: vzdelávacia hodnota dodatočného zberu údajov sa zvyčajne predpokladá a dizajny minimalizujúce údaje sa zriedka porovnávali s invazívnejšími na učení aj autonómii žiaka. Pozri [[governance|AI Governance]] a [[privacy|súkromie]].

## Urobte štúdiu znovu postaviteľnou

AIED má nezvyčajne ťažký problém reprodukovateľnosti. Štúdie vynechávajú prompty, verzie modelov, nastavenia, kód a inštrukčné podrobnosti a proprietárne systémy sa môžu zmeniť počas intervencie alebo po nej. [[limitations-in-aied-research|Obmedzenia výskumu AIEd]] dokumentujú tento vzorec.

Znovu postaviť štúdiu znamená opísať inštrukčné usporiadanie aj model: učebné úlohy, zdroje obsahu, povolené akcie, rozhranie, podporu učiteľa, podmienky hodnotenia a čokoľvek, čo sa počas nasadenia zmenilo. Reprodukovať jednu konfiguráciu a testovať, či sa jej pedagogický princíp prenáša do inej, sú oddelené úspechy a usmernenia k reportovaniu v [[research-methods-aied|Metódy výskumu efektívnosti]] sa zaoberajú oboma.

Syntéza potrebuje rovnakú starostlivosť. [[meta-analysis-systematic-review|Meta-Analýza a systematický prehľad]] uvádza slabé primárne štúdie, publikačnú zaujatosť, heterogénne intervencie a nezlučiteľné výsledky ako obmedzenia zovšeobecnených záverov a jediný priemerný „efekt AI“ skrýva rozlíšenia, ktoré pedagógovia potrebujú. Prehľady by mali oddeľovať výkon s pomocou od samostatného učenia, rozlišovať typy intervencií a porovnávacie podmienky a robiť kódovacie rozhodnutia auditovateľnými.

Syntetická literatúra je sama medzerou. [[oneill-presumed-effective-meta-analysis-2026|O'Neillov (2026) forenzný audit]] 14 vplyvných [[meta-analysis-systematic-review|meta-analýz]] zistil, že žiadna neposkytla platný základ pre svoje tvrdenia. Žiadny koherentný konštrukt: nástroj považovaný za jednu intervenciu, viacrozmerné výsledky zlúčené. Publikačná zaujatosť bola neplatne posúdená vo všetkých 14. Uvedené I² sa pohybovalo od 77,2 % do 94,4 % v každej analýze, ktorá ho uviedla, pričom 12 z 13 bolo nad 80 %. 61 % náhodne preverených primárnych štúdií malo obavy o platnosť. Týchto 14 analýz nazbieralo viac ako 2 000 citácií za približne 16 mesiacov a stiahnutá meta-analýza bola stále citovaná ako autoritatívna v 60 % článkov, ktoré ju citovali po stiahnutí, bez zmienky o tom. Zo 14 článkov, ktoré citovali inú auditovanú meta-analýzu, ktorej abstrakt inzeroval veľký efekt „vzdelávania v AI“, ktoré v skutočnosti meralo učenie študentov o AI, len 2 ju citovali primerane, 8 ju čítali ako dôkaz, že integrovanie AI zlepšuje učenie, a 4 boli nesprávne inak. Audit žiada od časopisov vyžadovať úplnú transparentnosť dát pri meta-analýzach (protokoly vyhľadávania, kódované charakteristiky štúdií, extrahované štatistiky, analytický kód), žiada redaktorov, aby nepovažovali publikačný záznam za dôkaz kompetencie recenzovať, a žiada, aby stiahnutia boli viditeľné všade, kde sa článok objaví, exportuje alebo cituje. Reprodukovateľnosť pokrýva syntetický reťazec, nielen jednotlivú štúdiu.

Vyučujúci, ktorí chcú verziu na úrovni triedy, môžu pokračovať na [[evaluating-ai-interventions-methods]].

## Čo výskumníci a vyučujúci na tomto chápu nesprávne

**Oblasti chýbajú štúdie.** Chýbajú jej špecifikované štúdie. Existujú viaclokálne experimenty, randomizované štúdie s tisíckami študentov a 14 vplyvných meta-analýz. Len 21 % auditovaných porovnaní definovalo zásah, kontrolu a výsledok dosť dobre na to, aby sa efekt dal pripísať.

**Pomenovať teóriu znamená otestovať ju.** Citácia teórie učenia je rozhodnutie o zarámovaní. Test potrebuje predpoveď, správanie systému, ktoré ju implementuje, a mieru procesu, ktorá by mohla vyjsť opačne.

**Validované automatizované skóre je validovaný výsledok.** Zhoda s ľudskými kódujúcimi ustanovuje konzistenciu s týmito kódujúcimi. Simulovaní žiaci sa zlepšili na miere vernosti bez validácie proti ľudskému učeniu a reťazec od správania modelu k výsledku zostáva nepostavený.

**Prístup je rovnosť.** V hongkonskej štúdii sa medzery v psychologickej pripravenosti zúžili, kým rozdiely v objektívnom teste pretrvávali, a každá skupina sa zlepšila bez uzavretia nerovnosti. Zariadenia a licencie menia to, kto sa k nástroju dostane.

**Väčšia autonómia je pokrok.** Väčšia nezávislosť agenta je voľbou dizajnu. Keďže 29 % zo 474 agentických štúdií sa opiera o vzdelávaciu teóriu a longitudinálna validácia je obmedzená, nikto neukázal, že presun kontroly na systém zlepšuje učenie.

## Námietky, ktoré budete počuť

**„Medzera je len v tom, že potrebujeme viac randomizovaných štúdií.“** Teraz ich existuje dosť a problém sedí pred označeniami dizajnu: štúdia balíka, ktorý spája novú spätnú väzbu, nové úlohy a nové rozhranie, nemôže nič pripísať AI. Práca je v porovnávacej podmienke.

**„Nemôžem viesť viacročné sledovanie.“** Potom zmerajte jednu oneskorenú príležitosť bez pomoci a povedzte, aký interval pokrýva. Týždeň je skutočné zistenie a štúdia pravidla zvládnutia dosiahla svoj výsledok za týždeň tým, že vložila AI do pracovného postupu a sústredila sa na precvičovaný materiál.

**„Randomizácia je v mojom kurze nemožná.“** Dizajnovo orientovaná a kvalitatívna práca odpovedá na otázky implementácie, na ktoré štúdie nedokážu, a oblasť potrebuje obe. Kde je náhodné pridelenie možné, stále nesie kauzálne tvrdenie.

**„Zovšeobecnená veľkosť efektu mi už hovorí, čo funguje.“** 14 auditovaných meta-analýz definovalo zásah ako nástroj, zlúčilo nezlučiteľné výsledky a uviedlo I² nad 80 % v 12 z 13 analýz, ktoré ho poskytli. Zovšeobecnené číslo opisuje súbor štúdií s problémom konštruktu.

**„Simulovaní žiaci sú lacnejší, takže ich validácia môže počkať.“** V štúdii patolízalstva simulovaní žiaci odkladali mylné predstavy bez ohľadu na to, či sa im spätná väzba venovala, čo je práve ten spôsob zlyhania, ktorý robí neúčinného doučovateľa účinným.

## Čo urobiť tento týždeň

**1.** Napíšte porovnávaciu podmienku štúdie, ktorú plánujete, v jednej vete. Ak je to bežný stav, upravte ju skôr, než upravíte čokoľvek iné.

**2.** Pridajte do dizajnu jednu oneskorenú mieru bez pomoci a pomenujte interval v časti o metóde.

**3.** Napíšte hranicu populácie do vyhlásenia o dizajne a potom do abstraktu, aby sa tvrdenie nemohlo dostať ďalej než vzorka.

**4.** Vezmite najsilnejšie tvrdenie v aktuálnom návrhu a vymažte verziu, ktorú vaša miera neunesie. Vetu o strope si nechajte.

**5.** Pri každom automatizovanom skóre alebo simulovanom žiakovi v štúdii pomenujte ľudský štandard a rozhodcu predtým, než sa začne zber dát.

## Kam ísť ďalej

[[reporting-interpreting-aied-research|Reportovanie a interpretácia výskumu AIEd]] je reportovacím náprotivkom tejto stránky a [[research-methods-aied|Research Methods in AI in Education]] pokrýva voľby dizajnu za každou medzerou. [[evaluating-ai-interventions-methods|Hodnotenie metód intervencií s AI]] sa zaoberá mierami a porovnávacími dizajnmi, [[checking-whether-educational-ai-works|Overovanie, či vzdelávacia AI funguje]] je kratšou verziou otázky efektívnosti a [[does-ai-help-students-learn|Pomáha AI študentom učiť sa?]] zhromažďuje, čo je známe o trvalom učení. [[theory-development-aied|Theory Development in AI in Education]] a [[equity-ethics-pedagogical-safety-research|Výskum rovnosti, etiky a pedagogickej bezpečnosti]] posúvajú teoretickú a rovnostnú líniu ďalej.
