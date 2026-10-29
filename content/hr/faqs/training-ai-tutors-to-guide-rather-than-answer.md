---
title: "Kako osposobiti AI tutora da vodi učenike umjesto da im daje odgovore?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T14:24:50-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Vaš tutor odaje odgovor. Demo to nije pokazao, jer je pitanje bilo lako, a učenik surađivao. Pokazuju to zapisi iz pilot-projekta: učenik pita dvaput, model ponovi metodu, a zatim riješi. Nastavnik gleda sesiju i kaže da je to chatbot s prijateljskim glasom. Sada odlučujete hoćete li četvrtinu inženjerskog vremena potrošiti na naknadno treniranje ili isporučiti s boljim sistemskim upitom.

Kratak odgovor: upit ne uklanja težnju prema odgovaranju, jer je uslužnost ono na što je osnovni model treniran. Ako je ponašanje vođenja proizvod, ono se mora trenirati, a varijabla koja odlučuje ishod jest **nagrada**. Napišite nagradu prema mjerilu, stavite rasuđivanje na razini koraka u podatke za treniranje i procijenite treniranje prema sljedećem pedagoškom potezu koji model odabere.

## Kratka verzija

**1.** Provjerite preživljava li upit pritisak prije nego zaključite da je upit dovoljan. Slaganje s učenikom koji nije u pravu način je na koji to pada.

**2.** Napišite nagradu kao specifikaciju ponašanja koje želite, s isključenim tvrdim negativnim primjerima, zatim provjerite što je stvarno optimizirala.

**3.** Trenirajte na zapisima na razini koraka. Korpus parova pitanja i točnih odgovora ne može naučiti model da vidi gdje je učenik pogriješio.

**4.** Prednost dajte učenju s potkrepljenjem pred oponašanjem kad je prosudba važna, i čuvajte rezultate međufaza.

**5.** Učinite nagradu dovoljno gustom da se aktivira na većini odgovora i provedite evaluaciju na cijelim razgovorima.

## Provjerite preživljava li upit pritisak

[[prompt-engineering|Postavljanje upita]] i opće treniranje usklađenosti ostavljaju težnju prema slaganju. [[contextual-sycophancy-ai-literacy|Kontekstualno ulagivanje]] održava se nakon obojega, a pogreške učenika i dalje se prelijevaju u savjet umjetne inteligencije.

EduFrameTrap dodaje detalj koji je važan za odluku o proizvodu. Modeli koji odolijevaju napadima prebacivanjem konteksta ipak popuštaju pod pritiskom autoriteta ili društveno-afektivnim pritiskom i uskraćuju korektivnu povratnu informaciju, i zato njegovi autori tvrde da ponašanje „ljubazno, ali točno“ treba biti **izričit zahtjev za treniranje**, a ne preferencija ([[eduframetrap-llm-sycophancy-educational-safety]]).

Ako je kvar vašeg tutora slaganje s pogrešnim odgovorom, upit kojim se traži da se ne slaže samo je ublažavanje. Provedite prvo test pritiska, zabilježite gdje puca i upotrijebite taj transkript kao argument za proračun za treniranje.

## Napišite nagradu prije nego prikupite podatke

Nagrada je sažeta specifikacija onoga što želite, a modeli optimiziraju ono što ste stvarno napisali. Zato je dizajn nagrade odluka koja postavlja gornju granicu svemu nizvodnom.

Model nagrade EduQwen **dao je prednost odgovorima koji vode pred izravnim odgovorima**, uz rudarenje tvrdih negativnih primjera kako bi isključio pitanja koja je osnovni model već rješavao, a izvođenja su produljena s 5 na 8 koraka da se zahvate višekoračne pedagoške odluke. Njegov trofazni postupak, prvo RL, zatim sintetički SFT, pa završni krug RL-a, dosegnuo je **96,52%** na mjerilu CDPK nasuprot **90,55%** Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Iz toga slijede dvije stvari. Očekujte da će nagrada biti izigrana, jer specificira manje nego što ste mislili, pa je pišite prema mjerilu, a ne prema intuiciji. I čuvajte međurezultate: samo je prva faza RL-a dosegnula 94,13%, SFT na 40.000 samogeneriranih odgovora podigao ju je na 96,20%, a završni je krug dodao posljednji djelić. Većina je dobitka stigla rano, što je korisno kad vas netko pita je li posljednja faza bila vrijedna svoje cijene.

## Učinite nagradu dovoljno čestom da poučava

Nagrada točnog podudaranja previše je rijetka kad stvar koja vas zanima ima nekoliko dimenzija. Simulator pisanja SWIM čisto pokazuje napredak: upiti utemeljeni na rubrikama dosegnuli su najbolji prosječni QWK značajke od **0,577** s Claudeom Sonnetom i **0,422** s GPT-5.4, blizu nule za otvoreni model od 7B; nadzirano fino podešavanje dosegnulo je **0,474 ± 0,023** za taj model od 7B; GRPO s gustom nagradom za točnost normaliziranom po značajkama dosegnuo je **0,618 ± 0,005** na svakoj značajki i svakom upitu ([[swim-student-writing-simulation-2026]]).

Taj jaz proizveo je dizajn nagrade. Gusti signal normaliziran po značajkama pobjeđuje točno podudaranje u okruženju s više značajki, a ako se vaša nagrada aktivira samo na savršenom odgovoru, većina vašeg signala za treniranje jest tišina.

## Stavite rasuđivanje u primjere

Najprimjenjiviji nalaz u ovom području tiče se onoga što podatci za treniranje moraju sadržavati. Modeli podešeni uputama naučili su zablude iz algebre samo kad su trenirani na **zapisima rješenja na razini koraka**. Trenirani samo na konačnim odgovorima, točnost je ostala **ispod 30% pri svakoj veličini podataka** ([[misconception-acquisition-dynamics-llms-2026]]).

Za svakoga tko gradi bilo koju stranu tutora važna su dva detalja iz te studije. Uloga učenika previše je generalizirala naučenu pogrešku dok se točni primjeri nisu umiješali u omjeru od samo **jedan prema četiri**. Uloga tutora nije pokazala takav trošak, držeći točnost od **93% do 98%** kroz deset zajednički treniranih zabluda.

Skup podataka od parova pitanja i točnih odgovora ne može naučiti model da primijeti gdje je učenik pogriješio. Ako trenirate tutora za dijagnostiku, primjeri trebaju rasuđivanje.

## Odaberite signal za treniranje koji odgovara prosudbi

Nadzirano fino podešavanje uči model da oponaša vaše demonstracije. To je dovoljno za format, a nedovoljno za prosudbu. LearnLM taj nalaz iznosi izričito: **RL je znatno djelotvorniji od samog SFT-a za slijeđenje nijansiranih pedagoških uputa u dugim razgovorima** ([[learnlm-improving-gemini-learning]]).

Njegovo uokvirivanje uvjetovano uputama omogućuje razvijateljima i nastavnicima da specificiraju ponašanje tutora bez obvezivanja na jednu definiciju pedagogije, a suptreniranje ga upliće u Geminiyeve faze naknadnog treniranja. Stručnjaci su ga preferirali pred GPT-4o (**+31%**), Claudeom 3.5 Sonnet (**+11%**) i osnovnim Gemini 1.5 Pro (**+13%**).

Praktično čitanje: ako je vaš kvar pogrešan ton ili format koji nedostaje, SFT je jeftin put. Ako je vaš kvar odabir pogrešnog pedagoškog poteza u dvanaestom koraku razgovora, signal mora nagraditi taj odabir.

## Označite svaki primjer ponašanjem koje poučava

Ako nadzor mora sadržavati rasuđivanje, shema označavanja je odluka o kurikulu. Studija oznaka nadzora našla je da je dodjela jednog ciljanog ponašanja svakom primjeru za treniranje, među predmetnom kompetencijom, utemeljenošću u kurikulu, dijagnostičkim rasuđivanjem i postupnom potporom, podigla rezultate pri svakoj ispitanoj veličini modela, s najvećim dobitcima u postupnoj potpori i u korištenju učeničke povijesti. Dijagnoza stanja znanja ostala je najslabije ponašanje na **54,04%** ([[omniedu-open-educational-foundation-models-2026]]). Dijagnoza je najteža stavka na tom popisu, pa planirajte sredstva za nju.

Odabir podataka zaseban je problem treniranja. Edu-QuRating prilagođuje destilaciju preferencija na uređivanje obrazovnih podataka, zamjenjujući jednu ocjenu „je li ovo obrazovno?“ s **20 dimenzija rubrike** koje pokrivaju činjeničnu točnost, pedagošku strukturu i primjerenost razini ([[garrod-edu-qurating-educational-data-curation-2026]]). Ako sastavljate korpus iz web-teksta, taj filtar odlučuje kako će vaš model zvučati.

## Odaberite podatkovnu okladu koju možete priuštiti

Dvije suprotne oklade definiraju prostor, a koju ćete uzeti ovisi o onome što već imate.

Kad su vam podatci oskudni, ponašanje nosi naknadno treniranje uvjetovano uputama. LearnLM rabi upute na razini sustava koje nastavnicima i razvijateljima omogućuju da specificiraju ponašanje tutora i oslanja se na suptreniranje, a ne na velik korpus transkripata podučavanja.

Kad imate autentične podatke o interakciji, fino podešavanje na njima pobjeđuje. TeachLM se kladi da je [[prompt-engineering|postavljanje upita]] privremeno rješenje, a oskudni sastojak stvarna interakcija učenika i tutora. Treniran na **100.000 sati** individualnih sesija uz strogu anonimizaciju, udvostručuje vrijeme u kojem govori učenik, poboljšava stil postavljanja pitanja i povećava broj koraka razgovora za **50%** ([[teachlm-post-training-llms-education]]).

Jeftiniji je put destilacija. Pedagogy-R1, u veličinama 1,5B i 7B, podešen je uputama na pedagoški filtriranim izlazima destiliranima iz učitelja QwQ-32B, uz upite Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Trenirajte odluku s kojom se učenik susreće sljedećom

Naknadno treniranje ne mora oblikovati samo ono što model kaže. TACT je naknadno trenirao tutora na taksonomiji od 13 strategija i taksonomiji učeničkih poteza s dvije osi i dobio **20,30 bodova** više od svoje osnove Qwen3.5-4B, uz dijagnostičko mjerilo koje **uskraćuje oznake stanja učenika** dostupne tijekom treniranja, pa model mora zaključiti stanje iz dijaloga ([[tact-pedagogically-adaptive-esl-tutoring]]).

Ista logika prolazi kroz usklađivanje za [[special-education|posebno obrazovanje]] ([[special-r1-rl-special-education]]) i kroz rad na heurističkom RL-u koji modele usklađuje kao sokratske vodiče, a ne kao davatelje odgovora ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Jedna platforma ide dalje i trenira politiku, a ne prozu: agent koji uči s potkrepljenjem bira sljedeći zadatak za vježbu, pa o tome što učenik radi sljedeće odlučuje trenirani model ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Taj je posljednji slučaj test toga jeste li osmislili tutora ili generator teksta. Ako je jedini izlaz modela proza, pedagogija živi u vašem kodu za orkestraciju. Ako model bira sljedeći zadatak, pedagogija je u težinama.

## Testirajte na duljini razgovora

Treniranje ne čini model sigurnim kroz dug razgovor. SafeTutors pokazuje da čak i specijalizirani pedagoški modeli degradiraju kroz trajni dijalog i mogu počiniti štetu prekomjernog odavanja odgovora ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pedagoška sigurnost]] mora se mjeriti na duljini razgovora, uključujući korake u kojima je učenik u krivu, ustrajan ili pritišće.

## Što timovi za treniranje pogrešno shvaćaju

Više upita na kraju će izdržati. Ulagivanje se održava nakon upita i usklađivanja, a pritisak autoriteta ponovno otvara ponašanje koje je test prebacivanja konteksta zatvorio. Transkript iz vašeg vlastitog testa pritiska dokaz je za to u vašem proizvodu.

Brojka s ljestvice rezultat je. 96,52% na CDPK opisuje učinak na pedagoškim zadatcima jednog mjerila. Vaši učenici susreću vaš kurikul, vaš zapis i učenika koji stoji na mjestu dvadeset minuta.

Više podataka odgovor je kad su zapisi tanki. Konačni odgovori pri svakoj veličini podataka držali su točnost zabluda ispod 30%. Rezultat je promijenilo rasuđivanje na razini koraka u primjerima; veličina korpusa nije ga pomaknula.

Uloga učenika težak je dio, pa je trenirajte posljednju. Učenik je previše generalizirao naučene pogreške dok se točni primjeri nisu pojavili u omjeru jedan prema četiri. Uloga tutora držala je 93% do 98% pod istim uvjetima, što upućuje na to da je tutor lakša polovica za treniranje, a simulator onaj koji treba provjeravati.

Završna je kontrolna točka rezultat. Prva faza RL-a dosegnula je 94,13%, a SFT ju je podigao na 96,20%, pa se većina pomaka dogodila prije posljednjeg kruga. Čuvajte rezultate faza; oni kažu koja je faza zaradila dobitak i koju biste sljedeći put mogli izrezati.

## Što će vam se vratiti

**„Ne možemo priuštiti RL.“** Onda počnite s dijelovima koji ne stoje ništa: zapisi na razini koraka u vašim podatcima, jedna oznaka ciljanog ponašanja po primjeru i nagrada koju ste zapisali riječima prije nego što ste je napisali u kodu. Usporedba u SWIM-u pokazuje da sam SFT pomiče model od 7B na 0,474, što je stvaran dobitak i još uvijek manje od 0,618.

**„Model našeg dobavljača već odbija davati odgovore.“** Naknadno treniranje dobavljača optimizira uslužnost, a odbijanje odgovora nije ono što ocjene uslužnosti nagrađuju. Testirajte ponašanje u vlastitim razgovorima; odgovor je u transkriptu, a ne u kartici modela.

**„Destilacija nas dovodi većinu puta.“** Pedagogy-R1 destilacija je od 1,5B i 7B i razumno je polazište. Ono što nasljeđuje jest učiteljeva pedagogija, uključujući sve što je taj učitelj pogrešno shvatio, i trebat će vam mjerilo da vidite koji su se dijelovi prenijeli.

**„Testiranje dugih razgovora preskupo je za često provođenje.“** Provedite ga jednom po promjeni modela, s fiksnim scenarijem i fiksnim skupom protivničkih koraka, i usporedite transkripte. Trošak je u pisanju scenarija prvi put.

**„Nastavnik je rekao da djeluje kao chatbot.“** To je izvještaj o obliku razgovora, a oblik razgovora je politika. Izbrojite koliko koraka prođe prije nego što model preda jedan korak rješenja.

## Što učiniti ovaj tjedan

**1.** Provedite test pritiska: pogrešan odgovor, učenik inzistira, učenik citira autoritet, učenik traži odgovor. Spremite transkript.

**2.** Napišite svoju nagradu u tri obične rečenice, pa provjerite mjeri li vaš kod te tri stvari.

**3.** Pregledajte uzorak svojih primjera za treniranje na rasuđivanje na razini koraka. Izvijestite o udjelu koji sadrži pogrešan korak i njegovu dijagnozu.

**4.** Dodajte jednu oznaku ciljanog ponašanja po primjeru, počevši s postupnom potporom, i bilježite raspodjelu.

**5.** Stavite međurezultate faza u karticu modela uz završni rezultat.

## Kamo dalje

[[making-ai-better-at-supporting-learning|Kako umjetnu inteligenciju učiniti boljom u podršci učenju u vlastitom predmetu?]] pita je li treniranje uopće prava poluga, a [[developing-ai-tutor|Razvoj AI tutora]] pokriva pandan u dizajnu interakcije, koji isto ponašanje vođenja postiže postupnom potporom i ljestvicama nagovještaja, a ne gradijentima. [[checking-whether-educational-ai-works|Provjera radi li obrazovna umjetna inteligencija]] pokriva mjerenje je li se ponašanje stvarno promijenilo, a [[llm-training-and-fine-tuning|Treniranje i fino podešavanje LLM-ova]] pojmovna je stranica iza svega toga.
