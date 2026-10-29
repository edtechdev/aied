---
title: "Koje su najbolje prakse za razvoj učinkovitog AI tutora?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:24:49-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Vaš je tutor tri tjedna udaljen od pilot-projekta. Razgovor radi, model čisto objašnjava derivaciju, a interni je demo dobio pljesak. Zatim netko iz centra za poučavanje postavi pitanje za koje vaša specifikacija nema polje: hoće li studenti nakon semestra s ovom stvari riješiti zadatak kad ona nije u prostoriji? Ono što imate jest popis značajki. Ono što nemate jest jedna rečenica koja kaže što učenik mora moći sam na kraju.

Tutor je politika omotana oko [[conversational-ai|chatbota]], a politika odlučuje hoće li se učenje dogoditi. Imenujte kognitivni rad koji učenik mora obaviti, neka ga sustav zahtijeva (pokušaj prije pomoći, ljestvica savjeta koja se postupno povlači, provjera koju model ne može simulirati) i vrednujte s isključenim tutorom. Kvaliteta modela određuje koliko razgovor dobro zvuči. Politika određuje što će student moći u lipnju.

## Kratka verzija

**1.** Zapišite cilj kao tvrdnju o samostalnoj izvedbi, a zatim iz njega izvedite svaku značajku. Ako se značajka ne može povezati s tom rečenicom, to je značajka za demo.

**2.** Izgradite model učenika iz dokaza koje možete bilježiti i svaku dijagnozu pohranite kao hipotezu sa stupnjem pouzdanosti, a ne kao činjenicu.

**3.** Učvrstite ljestvicu pomoći u kodu, s imenovanim stepenicima, i neka sučelje za svaki korak niz ljestvicu naplati učeniku nešto.

**4.** Utemeljite sadržaj u vlastitim materijalima i provjeru aritmetike, algebre i koda predajte determinističkim alatima koji ne mogu halucinirati.

**5.** Testirajte nastavne neuspjehe na cijelim razgovorima: curenje odgovora, ulizivanje, učvršćivanje zabluda, nastavni drift.

**6.** Mjerite fazom povlačenja i odgođenim testom, a ne ocjenom zadovoljstva.

## Zapišite cilj kao tvrdnju o samostalnoj izvedbi

Tri popisa, napisana prije nego što itko odabere model:

- Što učenici trebaju znati ili moći učiniti nakon toga.
- Koji kognitivni rad moraju obaviti sami.
- Što tutor smije učiniti umjesto njih.

Literatura o [[intelligent-tutoring|inteligentnom poučavanju]] ističe da djelotvornost ovisi o [[pedagogy|pedagoškom]] dizajnu, a ne samo o sposobnostima modela, i taj je neuspjeh lako slučajno ugraditi. Tutor optimiziran za „dovrši zadatak“ potkopat će tutora optimiziranog za „nauči rješavati zadatak“, a pritom će proći svaki funkcionalni test koji napišete, jer oba daju točne konačne odgovore. Razlika je u tome što je student radio između pitanja i odgovora.

Drugi popis mjesto je na kojem razvojni timovi postaju konkretni. Uzmite oznaku ovladanosti kao „ovladanost derivacijama“ i odbijte dopustiti da znači proizvodnju točne derivacije. Razložite je na prepoznavanje kada je derivacija primjerena, tumačenje derivacije kao trenutačne brzine promjene, odabir pravila, provedbu postupka, objašnjenje zašto je odabir bio ispravan, provjeru razumnosti i primjenu na nepoznat zadatak. Svaka je od tih stavki zasebna stvar koju treba bilježiti i svaka implicira drukčiju reakciju kad izostane. Ta je razgradnja ujedno obrana od [[correct-answer-trap-misconceptions|zamke točnog odgovora]], u kojoj učenik dolazi do točnog odgovora pogrešnim zaključivanjem, a vaša analitika bilježi uspjeh. [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] i [[zhang-tutormoments-2026|When Help is Unhelpful]] opisuju inačice tog neuspjeha u produkciji.

## Izgradite model učenika prije razgovora

Model učenika drži dvije vrste stanja: procjene po konceptu (limes: u razvoju, pravilo potencije: ovladano, pravilo umnoška: u razvoju, lančano pravilo: nije pokazano) i hipoteze o zabludama s dokazima i pouzdanošću iza svake. Držite ih odvojenima. Procjena koncepta pokreće odabir težine. Hipoteza pokreće sljedeće pitanje.

Pazite da ne prepustite [[llm|velikom jezičnom modelu]] da sam postavi dijagnozu. [[benchmark|Mjerenje na referentnim skupovima]] pokazalo je da su LLM tutori prepoznavali jasno ispravno zaključivanje, a ponekad odbijali valjane alternative ili prihvaćali pogrešno zaključivanje. Model koji uoči dobar slučaj, a pogrešno pročita dvosmisleni, iznevjerava upravo one studente kojima je pomoć potrebna. U područjima s posljedicama arhitektura koja preživljava jest **strukturirana dijagnoza plus fleksibilan LLM dijalog**, raspored koji opisuje [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]]: vaš vlastiti detektor utvrđuje što je student vjerojatno učinio, a model piše razgovor oko tog nalaza.

Dajte dijagnozi izričit slijed koji model ne može preskočiti: otkrij, provjeri, odgovori. Model smije predložiti [[misconceptions|zabludu]] kao hipotezu, ali je zatim mora provjeriti na stvarnom radu studenta ili ciljanim pitanjem prije nego tutor na nju odgovori. Bez tog koraka sustav izmišlja dokaze i potom poučava studenta za pogrešku koju nije učinio, što je i beskorisno i pomalo uvredljivo.

Dokazi koje vrijedi bilježiti, grubo po korisnosti: nedavni pokušaji s međukoracima, pokazano znanje po konceptu, ponašanje pri traženju pomoći (koje je i samo signal o samopouzdanju) i samoprijavljeno samopouzdanje gdje ga prikupljate. Prilagođavajte težinu i pomoć iz tog zapisa i tretirajte učenikov posljednji poticaj kao jedan od ulaza u njega. Jedan je poticaj loš procjenitelj onoga što student zna, a tutor koji na njega reagira batrgat će se.

## Učvrstite ljestvicu pomoći, pa neka sučelje naplati svaki korak

Zapišite stepenike prije nego napišete poticaj, jer je ljestvica produktna odluka s imenovanim stanjima, a postavka tona ne može je izraziti. Radni slijed:

1. Samostalni pokušaj.
2. Metakognitivno pitanje o tome što je student pokušao.
3. Konceptualni mig.
4. Prepoznavanje relevantnog pravila.
5. Postavljanje dijela zadatka.
6. Razrađen međukorak.
7. Razrađeno rješenje.
8. Student objašnjava rješenje.
9. Student samostalno rješava usporediv zadatak.

Potpora se povlači kako kompetencija raste, a to je mehanizam u središtu [[scaffolding|postupne potpore]]. Viđeno razrađeno rješenje ne pokazuje ovladanost, pa svaka sesija koja dođe do sedmog stepenika duguje deveti prije nego što se može smatrati dovršenom.

Uzročni dokaz za samu izgradnju ljestvice dolazi iz terenskog eksperimenta u kojem je nezaštićeno GPT sučelje povećalo uspjeh u matematici uz pomoć i smanjilo kasniji uspjeh na ispitu bez pomoći. Tutor koji daje savjete uglavnom je uklonio taj gubitak u učenju ([[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]). Ograničenje je arhitektonsko. Isti model, s drukčijim ponašanjem pri pružanju pomoći, dao je suprotne rezultate na mjeri koja je važna.

Veći randomizirani terenski eksperiment s više od 6.000 učenika viših razreda osnovne škole na platformi za vježbanje temeljeno na ovladanosti pokazuje kako ljestvica izgleda u zapisima. Učenici dodijeljeni potpori umjetne inteligencije napredovali su sporije i pokušali manje pitanja, a odgovarali su točnije. Najjasniji mehanizam bila je točnost sljedećeg pokušaja nakon pogreške: bilo je potrebno manje pokušaja za povratak na točan odgovor. Taj je obrazac produktivno usporavanje i to je potpis koji ljestvica savjeta treba ostaviti ([[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]]).

Ista studija daje upozorenje o vlastitim nadzornim pločama. Zahtjev za tri točna odgovora zaredom oštro je podigao ovladanost kako je definira platforma, a nije proizveo zamjetne dobitke na odgođenom testu tjedan dana kasnije. Najjači dokaz na odgođenom testu pojavio se samo tamo gdje je umjetna inteligencija bila unutar tijeka rada za ovladanost (koeficijent 0,085), a ne tamo gdje je bila dostupna kao samostalan pristup. Ako je vaša mjera uspjeha brojač nizova, isporučit ćete sustav koji optimizira niz.

Trenje u sučelju pripada istom prolazu dizajna. Neograničeni savjeti iza vidljivog gumba pretvaraju cijelu ljestvicu u prečac, a prerani zahtjevi za savjetom uz površno čitanje povezani su s nižim [[learning-gains|rezultatima učenja]]. Zamjena `[Hint][Hint][Hint][Show Answer]` pitanjima „što ste pokušali?“ i „koji vas dio blokira?“ (odabir pravila, postavljanje jednadžbe, provedba algebre, razumijevanje koncepta) stoji jedan zaslon i usmjerava studenta na stepenik koji stvarno treba. Daje vam i podatke iz zapisa koji pokazuju koji stepenik sustavno preskaču.

## Provjerljive dijelove predajte provjerivaču

Utemeljite generiranje u materijalima koje je nastavnik odobrio: odlomcima udžbenika, bilješkama s kolegija, razrađenim primjerima, terminologijom, odobrenim metodama, oznakama, pravilima zadataka, politikama i [[curriculum-design|kurikulumskim]] resursima. Generiranje potpomognuto pronalaženjem na tom korpusu smanjuje [[hallucination-risk|rizik od halucinacija]] i ne uklanja ga, kako izlaže [[rag|RAG]]. Izložite citate ili podrijetlo u sučelju gdje student može provjeriti tvrdnju, jer citat je ono što utemeljenje čini provjerljivim naknadno.

Utemeljenje obavlja i posao koji mjere točnosti promašuju. Kolegij ima odobrene metode, a tutor koji uvede matematički valjanu tehniku koju kolegij ne rabi naučio je studenta nešto zbog čega će dobiti nižu ocjenu. Pronalaženje iz sloja kolegija način je na koji tutor ostaje unutar skupa metoda.

Za područja s formalno provjerljivim odgovorima dodajte determinističke alate: kalkulatore, sustave simboličke matematike, izvršavanje koda, grafove znanja, validatore temeljene na pravilima i [[discipline-specific-aied|domenski specifične]] rješavače. Podjela rada je važan dio. LLM obrađuje objašnjenje i dijalog. Simbolički motor provjerava algebarsku ekvivalentnost, derivacije, integrale, rješenja jednadžbi, kritične točke i numeričke aproksimacije. Pogrešan međukorak koji provjerivač uhvati postaje trenutak poučavanja. Pogrešan međukorak koji ništa ne uhvati postaje zabluda koju student nosi na ispit.

## Zahtijevajte da učenik djeluje na povratnu informaciju

Povratna informacija koja kaže „Točno“, „Netočno“ ili „Bravo“ jest događaj ocjenjivanja u sučelju poučavanja. Baza znanja tretira [[feedback|povratnu informaciju]] kao petlju pružanja i prihvaćanja: povratna informacija podupire učenje kad je studenti razumiju i na nju djeluju, a druga je polovica ona koju sustavi obično preskaču. Izgradite tutora tako da imenuje uključeni korak zaključivanja, kaže što treba preispitati, da jednu konkretnu sljedeću radnju i zatraži od učenika da predvidi ili objasni prije nego što se povratna informacija otkrije.

Slijed koji to nosi jest učenik prvi, umjetna inteligencija druga, pa opet učenik. Student stvara, bira, opravdava, vrednuje ili promišlja; tutor odgovara; student nešto čini s odgovorom. Oblikujte strukturu izmjena tako da to ne bude neobavezno. Sustav u kojem model može proizvesti tri odlomka na jedno pitanje poučava studenta da pita i čita.

Dugoročni je cilj internalizacija. Učenici bi na kraju trebali sami voditi tutorovo ispitivanje i strategije [[problem-solving|rješavanja problema]], što je argument [[agency|djelotvornosti]] i razlog zašto ljestvica ima najviši stepenik na kojem tutor šuti.

## Projektirajte za ono što se događa u četrdesetoj izmjeni

Pedagoška sigurnost zaseban je skup testova od uobičajene sigurnosti chatbota, a većina timova isporučuje samo drugi. Toksičnost i otpornost na jailbreak ne govore ništa o tome hoće li tutor predati odgovor studentu koji pita dvaput, složiti se s pogrešnom metodom jer je student zvučao samouvjereno, izmaknuti se iz skupa metoda kolegija tijekom duge sesije ili gurnuti učenika u [[cognitive-offloading|kognitivno rasterećenje]]. [[ai-sycophancy|Ulizivanje]] je ono koje prođe prvo, jer se slaganje čita kao ljubaznost, a vaši podaci o preferencijama to nagrađuju.

Testirajte curenje odgovora, učvršćivanje zabluda, pretjerano slaganje, neprimjerenu težinu, rasterećenje, pristrano postupanje, gubitak djelotvornosti učenika, nastavni drift i pretjerano samopouzdanje u pogrešnim objašnjenjima. Provodite testove na produženim razgovorima, a ne na pojedinačnim izmjenama, jer se pedagoški neuspjesi nakupljaju: prvih deset izmjena može biti uzorno, a jedanaesta može poništiti sesiju. Tutor treba biti ljubazan i točan istodobno, uključujući i kad učenik ustraje u zabludi. [[pedagogical-safety|Pedagoška sigurnost]] i [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]] izlažu taksonomiju neuspjeha.

## Smjestite arhitekturu podataka u isti dizajnerski dokument

Prikupljajte samo podatke o učeniku koji su pedagoški nužni i budite u stanju reći zašto svako polje postoji. Gdje držite trajnu memoriju ili [[student-modeling|model učenika]], učinite svrhu toga vidljivom učeniku, dajte mu primjerenu kontrolu nad time, zaštitite osjetljive informacije, definirajte zadržavanje i usmjerite posljedične odluke nastavniku ili drugoj [[human-in-the-loop-ai|ljudskoj]] kontrolnoj točki. Model učenika koji tiho nakuplja procjenu pouzdanosti koju student nikad ne vidi istodobno je problem zaštite podataka i pedagoški problem.

Revizijom provjerite ponašanje preko jezičnih sredina, razina sposobnosti, kulturnih konteksta, potreba [[accessibility|pristupačnosti]] te razina [[prior-knowledge|prethodnog znanja]] i iskustva s umjetnom inteligencijom. Različita uspješnost na istom cilju jest bug s prikvačenim studentom i neće se pojaviti u vašem zbrojnom broju točnosti.

Jedna odluka o pristupačnosti zaslužuje vlastiti redak: ne činite sofisticirano [[prompt-engineering|oblikovanje poticaja]] preduvjetom dobre poduke. Ako tutor dobro poučava samo kad student napiše pažljiv poticaj, izgradili ste sustav koji pogoduje studentima koji već znaju razgovarati s modelima. Tutor treba pomoći učenicima da formuliraju produktivna pitanja, što je i [[metacognition|metakognitivna]] vještina koju vrijedi imati.

## Instrumentirajte interval povlačenja

Mjere sesije neće vam reći radi li stvar. Točnost odgovora, duljina razgovora, studentske preferencije, zadovoljstvo, dovršetak zadatka i [[student-engagement|angažman]] rastu i kod sustava koji ničemu ne poučavaju, jer studenti vole pomoć, a pomoć je lako mjeriti. Vrednujte samostalnu izvedbu, odgođeno zadržavanje, prijenos na nove zadatke, ispravljanje zabluda, neovisnost učenika, prihvaćanje povratne informacije i [[differential-effects-across-learner-groups|različite učinke među skupinama učenika]]. [[ai-ed-evaluation|Vrednovanje obrazovne umjetne inteligencije]] ima metode, a [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]] argumentira da je ponašanje konstrukt.

Dvije studije pooštravaju pravilo protiv [[self-report-measures|samoprijavljivanja]] i kratkih vremenskih okvira. Pilot s 38 studenata programiranja početnika pokazao je jaku povezanost između upotrebe [[generative-ai|generativne umjetne inteligencije]] i *doživljenog* učenja (rs=0,802, p<0,001), dok su pokazatelji samostalnog napretka bez nastavničke potpore imali najniže vrijednosti. Autori tu prazninu nazivaju iluzijom kompetencije i epistemičkim dugom, a upravo je to praznina koju mjera zadovoljstva nagrađuje ([[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]]).

Još temeljnije, većina vrednovanja staje u trenutku kad pomoć prestaje. [[cognitive-washout-ai-skill-decay-2026|Cognitive washout dynamics]] imenuje nemjereni interval nakon povlačenja i formalizira četiri ishoda: elastični odskok, djelomičnu zaravnatost, latentnu potporu i pretjerani oporavak. Njegova krivulja ispiranja nosi vremensku konstantu oporavka, član potpunosti oporavka i indeks histereze koji uspoređuje trud ponovnog učenja s izvornim trudom. Budući da reverzibilnost određuje ozbiljnost, okvir argumentira da planiranu samostalnu vježbu treba dozirati prema krivulji oporavka, a ne raspravljati o njoj načelno. Vaš plan vrednovanja treba fazu povlačenja kao i neposredni test nakon nje, a [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|randomizirani dokaz da kratka pomoć snižava kasniju samostalnu izvedbu]] razlog je da je zakažete rano.

## Dajte nastavnicima nešto što mogu uređivati

Prije uvođenja neka edukatori testiraju realistične profile učenika, uobičajene zablude, rubne slučajeve, protivničke poticaje, dvosmislene odgovore i duge tutorske razgovore. Bilježite pedagoške neuspjehe i vraćajte ih u sistemske poticaje, tutorske politike, izvore znanja, [[guardrails|zaštitne mjere]], pravila modela učenika i odabir modela. Tečan odgovor i dalje može biti pedagoški pogrešan, a nastavnik je jedini recenzent koji to može vidjeti.

[[teacher-intervention-k12-ai-based-instruction-2026|Leejev sustavni pregled 29 studija u osnovnom i srednjem obrazovanju]] opisuje od čega se taj nadzor sastoji i gdje se lomi. [[teacher-role|Nastavnička]] intervencija ponavljajući je četverofazni ciklus praćenja, prosudbe, intervencije i orkestracije. Upozorenja umjetne inteligencije, [[visualization|nadzorne ploče]] i automatske ocjene „ne vode automatski do pedagoškog djelovanja“. Najjača nastavnička strategija koju pregled nalazi jest pedagoško prevođenje: odabir, revizija, dopuna, sažimanje ili brisanje povratne informacije chatbota, umjesto njezina propuštanja dalje.

Iz toga slijede dva dizajnerska upozorenja i oba proturječe uobičajenom planu. Više informacija iz umjetne inteligencije nije bolje: sustavi koji neprestano emitiraju dijagnostiku preopterećivali su nastavnike i odvlačili pozornost od njihova vlastitog promatranja. Odredite prioritet onome na što vrijedi djelovati, učinite to tumačivim i ponudite preporuke u obliku koji nastavnik može prihvatiti, izmijeniti, odgoditi ili odbiti. Ni više nastavničke potpore nije bolje: suzdržavanje od intervencije kako bi studenti mogli raditi samostalno i samo je vještina. Strukturni uvjeti, to jest vrijeme za pregled podataka, veličina razreda i mogućnost da se fizički dođe do skupina kojima je pomoć potrebna, dio su intervencije, a ne pozadinska logistika. Nadzorna ploča napravljena za nastavnika bez slobodnog sata neće se otvoriti.

## Prvi slučaj: tutor za diferencijalni račun, gdje je provjera jeftina

Tutor za diferencijalni račun u prvom semestru studija treba podići ono što studenti mogu samostalno riješiti i objasniti nakon što se ukloni, a ne maksimizirati ispravno dovršene zadatke. Matematičko poučavanje posebno je osjetljivo na pretjeranu postupnu potporu, preranu upotrebu savjeta i pogrešnu dijagnozu studentskog zaključivanja, a sve su tri pojave vidljive u vašim zapisima ako pogledate ([[math-education|matematičko obrazovanje]]).

**Utemeljenje i provjera.** Šesteroslojna izvedba: materijali kolegija i nastavničke politike, zatim sloj pronalaženja, zatim motor zadataka i model učenika uz simbolički provjerivač i dijagnostički motor, zatim sloj pedagoške politike, zatim razgovorno generiranje, zatim student i na kraju natrag u model učenika. Provjerivač je razlog zašto je taj dizajn izvediv. Odlučuje je li izraz ekvivalentan, je li derivacija točna, je li integral izračunat, je li kritična točka nađena, i to bez pitanja za mišljenje modela.

**Jedna interakcija.** Za deriviranje $f(x)=(x^2+1)\sin x$ uobičajeni chatbot otkriva odgovor. Tutor usmjeren na učenje interno zaključuje da je student derivirao obje komponente, ali je rezultate pomnožio, moguću [[misconceptions|zabludu]] pravila umnoška kao $f'g'$, i prvo postavlja dijagnostičko pitanje: koje pravilo vrijedi kad se dvije funkcije množe? Zatim student simbolički zapisuje pravilo umnoška, postavlja $u$ i $v$, i tek nakon toga tutor provjerava konačni izraz. Primijetite koliko se poučavanja dogodilo prije nego što je ikakav tekst modela stigao do studenta.

**Višestruki prikazi.** Povežite simboličke postupke s formulom, grafom, tablicom, verbalnim tumačenjem i fizičkim kontekstom brzine promjene. Proceduralna tečnost i konceptualno razumijevanje izgledaju jednako na listi točnih odgovora, a razilaze se na zadatku prijenosa.

**Nadzorna ploča.** Izložite zbrojene dokaze umjesto neprozirnih prosudbi: „pravilo umnoška, 62% pokazane ovladanosti; uobičajeni obrasci, 18% izostavlja jedan član, 11% množi derivacije“. Pojedinačne dijagnoze izlaze kao hipoteze s dokazima koji ih podupiru, što ih ujedno čini preglednima za nastavnika ([[explainable-ai|objašnjivost]] je ovdje važnija nastavniku nego studentu).

**Plan vrednovanja.** Izvedba uz tutora, izvedba na usporedivim zadacima bez njega, odgođeno zadržavanje, prijenos na nepoznate zadatke, kvaliteta konceptualnog objašnjenja, ispravljanje zabluda, primjereno nasuprot preranom [[help-seeking|traženju pomoći]], curenje odgovora, stope lažno pozitivnih i lažno negativnih dijagnoza i različiti ishodi. Usporedba koja odlučuje o projektu jest ona između izvedbe s pomoći i kasnije izvedbe bez nje. Student koji s tutorom prijeđe sa 60% na 95% i sam ostane na 60% nije bio poučavan.

## Drugi slučaj: trener za pisanje, gdje faza odlučuje o dopuštenju

Pisanje nema jedinstven točan odgovor, pa je provjera prosudba, a dizajnerski se rad pomiče na fazno strukturiranje. Baza znanja pisanje opisuje kao kognitivni, društveni i retorički proces, što znači da sustav za pisanje s umjetnom inteligencijom može poduprijeti učenje, ali i ukloniti upravo ono mišljenje koje je zadatak trebao razviti ([[writing-education|obrazovanje za pisanje]], [[coach-not-crutch-ai-writing|Trener, a ne štaka]]).

**Model sposobnosti.** Pratite argumentaciju (specifičnost teze, usklađenost tvrdnje i dokaza, protuargument), organizaciju (usredotočenost odlomka, logički slijed, prijelaze), dokaze (relevantnost izvora, integraciju, tumačenje), reviziju (globalnu i rečeničnu reviziju, vrednovanje povratne informacije) i stil (jasnoću, gramatiku, glas). Svaka stavka postaje zaseban signal u modelu učenika, što ciljanu povratnu informaciju uopće omogućuje.

**Utemeljite trenera u zadatku.** Dohvatite upute, nastavnikovu rubriku, tekstove kolegija, zahtjeve citiranja, žanrovske konvencije, nastavnikove primjere i politiku upotrebe umjetne inteligencije, kako bi povratna informacija mogla reći „vaša rubrika traži da svaku glavnu tvrdnju povežete s dokazima iz najmanje dva teksta s kolegija“, umjesto da izmišlja općenita očekivanja. Općeniti savjet uobičajeni je neuspjeh neutemeljenog alata za pisanje, a studenti to prepoznaju već nakon dvije sesije.

**Postavite dopuštenja po fazama.** Sudjelovanje umjetne inteligencije u različitim fazama različito utječe na doživljeno vlasništvo. Potpora u planiranju smanjuje vlasništvo manje od potpore pri pisanju nacrta, a nacrt koji generira umjetna inteligencija proizvodi najveće smanjenje ([[ai-writing-support-stage-ownership-2026|From Planning to Revision]]). Taj se nalaz izravno prevodi u tablicu dopuštenja. U planiranju trener postavlja pitanja, uspoređuje stajališta, osporava pretpostavke i kritizira skice, a ne generira argument. U pisanju nacrta učenik prvo proizvodi tekst, a trener ga razvija, umjesto da preuzme. U reviziji trener dijagnosticira i tu staje: nejasne tvrdnje, nedostajući dokazi, dokazi koji ne podupiru tvrdnju, organizacijski problemi, nacrt prema rubrici. U lektoriranju, nakon revizije, obrađuje gramatiku, interpunkciju, sažetost i oblikovanje citata.

**Razrađena interakcija.** Za esej o uvođenju obveznih [[online-teaching-and-learning|online kolegija]] općeniti sustav prepisuje studentski odlomak u uglađen tekst i obavlja intelektualni rad. Trener kaže što funkcionira, imenuje glavni problem (odlomak daje razloge, ali nikad ne objašnjava zašto oni opravdavaju obvezu na razini sveučilišta), postavlja revizijsko pitanje i traži da student dovrši rečenicu svojim riječima. Argument ostaje gdje mu je mjesto.

**Prioritetna povratna informacija.** Jedna snaga koju treba sačuvati, jedno pitanje s velikim učinkom, jedno pitanje koje zahtijeva piščevu prosudbu, jedan konkretan revizijski cilj. Ne četrdeset komentara. Student koji dobije četrdeset komentara razvrstava ih po duljini, a to razvrstavanje nema veze s onim što je važno.

**Neka student prosudi povratnu informaciju.** [[feedback-literacy|Pismenost o povratnoj informaciji]] i sama je cilj učenja. Povremeno pitajte slaže li se učenik s prijedlogom i zašto, i dopustite mu da ga odbije. Rezultat je [[evaluative-judgment|procjenjivačka prosudba]], a ne poslušnost, i to je ujedno jedina obrana od trenera koji je samouvjereno u krivu.

**Sačuvajte glas.** Razlikujte pogreške, probleme jasnoće, retoričke odabire i stilske preferencije, a posljednje dvije ostavite na miru. Trener koji „ispravlja“ retoričke odabire homogenizira pisanje prema stilu koji model preferira, a najviše šteti [[multilingual-learning|višejezičnim]] piscima i nestandardnim retoričkim tradicijama ([[ai-feedback-quality|kvaliteta povratne informacije umjetne inteligencije]] općenita je inačica tog problema).

**Učite iz revizija.** Pohranjujte povijest revizija, a ne samo završne eseje. Ponavljajući obrazac „dokaz uveden, ali nije protumačen“ koji se popravlja kroz tri eseja najkorisniji je signal koji sustav za pisanje može imati, i to besplatan.

**Vrednovanje.** Kvaliteta pisanja uz umjetnu inteligenciju i kasnijeg pisanja bez nje, sposobnost pronalaženja slabosti u nepoznatom tekstu, kvaliteta revizije, prihvaćanje povratne informacije, sposobnost objašnjavanja revizija, vlasništvo, ovisnost o tekstu umjetne inteligencije, očuvanje glasa, pristranost prema dijalektima i višejezičnim piscima, usklađenost s nastavnikovom prosudbom i odgođeni prijenos. Dizajn koji na to odgovara ima tri kraka: samostalno pisanje, generiranje teksta umjetnom inteligencijom i trenera. Sve tri skupine zatim pišu novi esej bez umjetne inteligencije. Ako skupina s generiranim tekstom pobjeđuje u praksi, a gubi bez alata, sustav je poboljšao izvedbu, a ne učenje. Obrasci na razini razreda s nadzorne ploče (41% treba potporu u povezivanju tvrdnje i dokaza) signal su [[formative-assessment|formativnog vrednovanja]] za nastavnika.

## Usporedba dviju izvedbi

| Dizajnersko pitanje | Tutor za diferencijalni račun | Trener za pisanje |
|---|---|---|
| Primarni predmet učenja | Matematički koncepti i rješavanje problema | Argumentacija i proces pisanja |
| Provjera | Često objektivno provjerljiva | Obično zahtijeva kontekstualnu prosudbu |
| Deterministički alati | Simbolički matematički motor, kalkulator | Provjere gramatike, citata i rubrike |
| Glavna uloga umjetne inteligencije | Dijagnosticira i postupno podupire zaključivanje | Dijagnosticira i postupno podupire reviziju |
| Glavni rizik | Odavanje rješenja | Pisanje teksta umjesto učenika |
| Učenikova radnja koja je važna | Rješavanje i objašnjavanje | Pisanje nacrta, vrednovanje i revizija |
| Model učenika | Koncepti, postupci, zablude | Argumentacija, dokazi, organizacija, revizija |
| Ključna zaštitna mjera | Pokušaj prije rješenja | Studentski tekst prije prepisivanja umjetnom inteligencijom |
| Test prijenosa | Novi zadaci iz diferencijalnog računa bez umjetne inteligencije | Novi zadatak pisanja bez umjetne inteligencije |
| Kriterij uspjeha | Samostalno matematičko zaključivanje | Samostalno pisanje i procjenjivačka prosudba |

Oba sustava rabe isti skup [[ai-technologies|tehnologija umjetne inteligencije]] i utjelovljuju različite pedagoške politike, jer discipline zahtijevaju različite vrste mišljenja. Pravilo koje se generalizira jest prepoznati kognitivnu aktivnost koja proizvodi učenje i oblikovati umjetnu inteligenciju tako da tu aktivnost podupire, a ne obavlja. To pravilo nadjačava svaki pojedini model, poticaj, okvir agenata ili sučelje.

## Što razvojni timovi pogrešno shvaćaju

Pedagogija živi u sistemskom poticaju, pa je pažljiv poticaj pedagoški dizajn. Poticaj je jedan sloj politike koja uključuje i to koje dokaze prikupljate, koji stepenik sučelje nudi, što provjerivač provjerava i što nadzorna ploča pokazuje. Dobro napisan poticaj na modelu učenika koji ništa ne pohranjuje proizvest će tečnog tutora bez sjećanja na studenta, a ljestvica će se ponovno pokretati u svakoj sesiji.

Bolji model popravit će dijagnozu. Gore navedeni rezultat mjerenja pokazao je da LLM tutori prepoznaju ispravno zaključivanje, a odbijaju valjane alternative i prihvaćaju pogrešne, što je obrazac pogreške koji se skaliranjem očito ne popravlja. Strukturirana dijagnoza postoji zato što je prosudba modela dio koji ne možete revidirati.

Zadovoljstvo i dovršetak dokazuju da dizajn funkcionira. Dokazuju da su studenti dobili pomoć. Pilot s 38 studenata programiranja pokazao je jaku povezanost doživljenog učenja s upotrebom, dok je samostalni napredak imao najniže vrijednosti, a studija o ovladanosti pokazala je da zahtjev za nizom podiže ovladanost na platformi bez dobitka na odgođenom testu. Ugradite mjeru povlačenja u pilot ili ćete naučiti pogrešnu lekciju vrlo učinkovito.

Pronalaženje čini odgovore pouzdanima. Ono smanjuje [[hallucination-risk|rizik od halucinacija]] i ostavlja ostatak površine neuspjeha netaknutim: dohvaćeni odlomak može se pogrešno pročitati, valjana tehnika može biti pogrešna za kolegij, a model i dalje može biti samouvjereno u krivu o koraku koji je sam izveo. Pronalaženje je samo pod.

Prolazak sigurnosnog skupa znači da je sustav siguran za studente. Uobičajeno sigurnosno testiranje pokriva toksičnost i jailbreakove. Pedagoški neuspjesi koji su ovdje važni, curenje odgovora, ulizivanje i drift, njemu su nevidljivi, i nakupljaju se kroz razgovor, umjesto da se pojave u jednoj izmjeni.

Angažman je cilj. Duljina razgovora i broj sesija najjeftinije su mjere za instrumentiranje, zbog čega se promoviraju u ciljeve. Argument [[scaffolding|postupne potpore]] kaže da idealna sesija postaje kraća kako student napreduje, pa je porast angažmana jednako vjerojatno simptom.

## Što će vam se vratiti kao prigovor

**„Isporučujemo za šest tjedana, a ovo je tromjesečni posao.“** Većina arhitekture je jeftina. Vrata za pokušaj, konfigurirana ljestvica, pronalaženje po bilješkama koje već imate i shema zapisa s poljem povlačenja posao su od nekoliko dana. Skupi dijelovi (model učenika, provjerivač, nadzorna ploča) mogu početi iza prekidača za jedan kolegij, a pilot je informativniji kad su jeftini dijelovi dovršeni.

**„Studenti to vole, a dovršetak je viši.“** Obje su činjenice u skladu sa sustavom koji dobro odgovara na pitanja i ničemu ne poučava. Studija sa 6.000 studenata našla je sporiji napredak i manje pokušanih pitanja uz bolju točnost, pa ni pad dovršetka nije automatski loša vijest. Izvijestite o samostalnoj izvedbi uz brojke o angažmanu i dopustite im da se javno razilaze.

**„Ne možemo provesti randomizirano ispitivanje.“** Možete provesti usporedbu unutar studenta i bez njega: isti cilj, s pomoći tijekom cjeline, testiran bez nje dva tjedna kasnije, s rezultatom uz pomoć prijavljenim uz njega. Taj dizajn odgovara na produktno pitanje i ne treba kontrolnu skupinu. Ono što ne može reći jest kakav bi bio kontrafaktual za studente koji tutor nikad nisu rabili.

**„Model je dobavljačev API, pa nam ponašanje pri pomoći nije u rukama.“** Stepenici žive u vašem sloju orkestracije, a rezultat eksperimenta sa zaštitnim mjerama došao je iz promjene onoga što tutor smije reći, a ne iz zamjene modela. Očekujte da će dobavljačeva naknadna obuka vući prema brzom odgovaranju, jer je korisnost ono za što je ugađana, i smjestite suzdržanost u vlastiti kod.

**„Nastavnici neće rabiti još jednu nadzornu ploču.“** Neće rabiti onu koja neprestano emitira dijagnostiku, a pregled za osnovno i srednje obrazovanje pokazao je da to odvlači pozornost od njihova vlastitog promatranja. Dajte im mali broj tumačivih signala, način da prihvate ili odbiju svaku preporuku i vrijeme u tjednu da ih pogledaju.

**„Nemamo stručnjake za discipline u osoblju.“** Tada će tutor poučavati općenitu metodu, a oznake kolegija izmaknut će se tijekom semestra. Predmetni stručnjak na dva dana u fazi dizajna, koji piše popis zabluda i popis odobrenih metoda, najjeftinija je stavka u projektu i prva koju timovi izrezuju.

## Što učiniti ovaj tjedan

**1.** Napišite rečenicu o samostalnoj izvedbi za pilot i stavite je u specifikaciju, iznad popisa značajki.

**2.** Dodajte vrata za pokušaj i bilježite ih. Zabilježite je li student pokušao prije prvog savjeta i do kojeg je stepenika došao.

**3.** Zamijenite gumb za savjet pitanjem o točki blokade i zabilježite odgovor kao kategoriju.

**4.** Zakažite jednu samostalnu provjeru dva tjedna nakon cjeline i stavite je u kalendar s odgovornom osobom.

**5.** Rezervirajte dva dana s predmetnim nastavnikom za pisanje popisa zabluda i popisa odobrenih metoda.

## Kamo dalje

[[designing-educational-ai-software|Oblikovanje obrazovnog softvera s umjetnom inteligencijom]] pokriva pravila na razini softvera koja tutor mora zadovoljiti, a [[designing-ai-into-learning|Ugrađivanje umjetne inteligencije u učenje]] pokriva gdje tutor stoji u slijedu kolegija. [[evaluating-ai-interventions-methods|Metode vrednovanja intervencija s umjetnom inteligencijom]] i [[checking-whether-educational-ai-works|Provjera funkcionira li obrazovna umjetna inteligencija]] obrađuju radi li stvar. Ako je vaš problem to što model odgovara previše spremno, [[making-ai-better-at-supporting-learning|Kako umjetnu inteligenciju učiniti boljom u podupiranju učenja]] i [[training-ai-tutors-to-guide-rather-than-answer|Obuka AI tutora da usmjeravaju, a ne odgovaraju]] razrađuju stranu obuke istog pitanja.
