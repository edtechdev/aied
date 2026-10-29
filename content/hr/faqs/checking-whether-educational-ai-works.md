---
title: "Kako znamo da obrazovna umjetna inteligencija radi ispravno, a ne samo da dobro ocjenjuje?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T14:24:49-04:00"
translation_of: faqs/checking-whether-educational-ai-works
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

Dobavljačevo izvješće o evaluaciji stiže s jednim brojem na vrhu: slaganje s ljudskim ocjenjivačima, 0,84. Ili vaš pilot završava u petak, a dokazi se sastoje od ankete o zadovoljstvu i retka mjerila prepisanog iz bilješki o izdanju modela. Na sastanku netko pita djeluje li sustav, a vi imate brojku koja zvuči kao odgovor.

Kratak odgovor: ocjene koje najčešće vidite mjere sličnost, a sličnost je slabija tvrdnja od „ovo poučava“ ili čak „ova je povratna informacija čitljiva“. Odlučite što svaki broj smije dokazati, ocijenite svaki izlaz koji vaš sustav proizvodi i pretvorite točnost u pravilo s pragom, osobom i uštedom. Broj po kojemu nitko ne može djelovati nije dokaz.

## Kratka verzija

**1.** Napišite jednu rečenicu koja imenuje ono do čega vam je stalo, zatim odaberite mjeru koja to čita. Preklapanje riječi neće vam reći je li zaključivanje točno.

**2.** Vrednujte svaki izlaz zasebno. Jaka ocjena ocjenjivanja ne govori ništa o modulu za povratnu informaciju uz njega.

**3.** Neka osoba ocijeni pedesetak izlaza i usporedite te ocjene sa svojim automatskim provjeravateljem. Gdje se njih dvoje ne slažu, provjeravatelj je ono što se ispituje.

**4.** Zamijenite „točnost 0,84“ pravilom: ispod te sigurnosti odgovor čita čovjek. Izvijestite o pragu, udjelu posla koji štedi i tome što je slaganje postalo.

**5.** Provjerite sigurnost na cijelim razgovorima i provjerite svakog simuliranog studenta prije nego što povjerujete onome što govori o vašem poučavatelju.

## Odlučite što broj smije dokazati

Dvije obitelji brojeva prevladavaju u ovoj literaturi. Obje mjere koliko vaš izlaz nalikuje nečemu drugome, što je slabija tvrdnja od ispravnosti.

**Ocjene sličnosti** (ROUGE i BLEU) uspoređuju formulaciju odgovora vašeg sustava s formulacijom referentnog odgovora. Model koji napiše nešto blizu očekivanom tekstu dobiva visoku ocjenu, čak i kad je njegovo zaključivanje pogrešno ili kad bi student mogao doći do točnog odgovora putem koji ne poučava ničemu.

**Ocjene slaganja** (QWK, kvadratno ponderirana kapa) mjere koliko se modelove ocjene poklapaju s ljudskima. Model se može poklopiti s ocjenjivačem u konačnoj ocjeni, a biti u krivu o tome zašto, a „zašto“ je dio iz kojega student uči.

Student može doći do pogrešnog odgovora pogrešnim putem koji izgleda kao točan, i nijedna ocjena sličnosti to ne primjećuje. Ako je zaključivanje ono do čega vam je stalo, mjera ga mora čitati: rubrika koju primjenjuje osoba ili provjera napisana za taj određeni korak.

Asistent kolegija Linearni upravljački sustavi to izvještava kako treba. Njegova najbolja konfiguracija dosegla je ocjenu sličnosti **0,4093** u odnosu na referentne odgovore, s poboljšanjem pouzdano mjerenim iznad nule, a autori izričito navode da brojevi mjere formulaciju i format ([[lora-finetuned-control-systems-course-qa-2026]]). Ocjena nije impresivna, a rad je ipak koristan, jer kaže što ocjena pokriva.

## Ocijenite svaki izlaz zasebno

U projektu WrAFT fino podešeni model dosegao je ocjenu slaganja **0,84** s ljudskim ocjenjivačima na 360 izdvojenih TOEFL eseja. To je jak rezultat za ocjenjivanje. Model istog projekta osposobljen za pisanje povratne informacije proizveo je izlaz koji je bio odsječen i neraščlanjiv, dok je puko zadavanje upita drugom modelu proizvelo povratnu informaciju koju su nastavnici preferirali ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Baza znanja nosi isti promašaj u drugom obliku: primjenu čiji je modul za ocjenjivanje dobio dobru ocjenu, a čija je povratna informacija stigla odsječena na pola rečenice i nečitljiva. Ništa u istaknutom broju to nije reklo.

Zato popišite izlaze koje vaš sustav proizvodi, pa svakome dajte vlastitu mjeru i vlastiti uvjet prolaza. Ocjenjivanje, tekst povratne informacije, odabir nagovještaja i sigurnosna odbijanja propadaju na različite načine, a ocjena na razini modula ne vidi dalje od vlastitog modula.

## Stavite osobu tamo gdje model nije siguran

Korelacija vam kaže da je model obično u pravu. Ne kaže vam što učiniti u prilikama kad nije. Rezultat o usmjeravanju prema sigurnosti najčišći je predložak u bazi znanja i dovoljno je kratak da ga prepišete.

Pokazalo se da je sigurnost pouzdan znak upozorenja: kad model nije bio siguran, vjerojatnije je bio u krivu (**β = -0,602, p < 0,001**). Tim je najmanje sigurnih **20%** odgovora poslao čovjeku. To jedno pravilo podiglo je slaganje s ljudskim ocjenama s **0,78 na 0,82** i smanjilo ručni posao ocjenjivanja za otprilike **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Pogledajte što izvješće sadrži: prag, osobu i uštedu. „Slaganje 0,84“ ne sadrži nijedno od toga, i zato je po njemu teško djelovati, a o njemu lako raspravljati.

## Provjerite svoj automatski provjeravatelj prema osobi

Mnogi timovi danas rabe drugi model da prosuđuje prvi. Raspored je razuman, a drugi model nije automatski u pravu.

Studija u kojoj je vrhunski model pisao nagovještaje za [[intelligent-tutoring|sustav inteligentnog poučavanja]] našla je da je otprilike **35%** njih bilo preopćenito, netočno ili je odavalo odgovor, a modelove vlastite automatizirane provjere kvalitete nisu se složile s ljudskom prosudbom o tome koji su loši ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Praktična verzija: uzmite uzorak od pedesetak izlaza, dajte ga ocijeniti osobi i usporedite s ocjenama svog provjeravatelja. Gdje se njih dvoje razilaze, naučili ste nešto o provjeravatelju. Sačuvajte uzorak i tablicu neslaganja, jer je to ujedno artefakt koji odgovara recenzentu koji pita kako znate.

## Mjerite samu veličinu kad zadatak to dopušta

Najčišće rješenje jest osposobiti model na istoj veličini koju namjeravate mjeriti. Fino podešeni model osposobljen je da reproducira statistička svojstva ispitnih pitanja: koliko je svaka čestica teška i koliko dobro razdvaja jače od slabijih studenata. Te je obrasce naučio, a nisu mu bili izrečeni ([[multimodal-item-parameter-estimation-2026]]). Budući da je cilj bilo svojstvo samog vrednovanja, evaluacija je mogla biti o tom svojstvu, a ne o formulaciji.

Izvijestite o napredovanju kao i o krajnjoj točki. SWIM-ov simulator pisanja objavio je ocjenu svake faze jednu uz drugu: oblikovanje upita temeljeno na rubrici **0,577**, fino podešavanje **0,474 ± 0,023**, učenje s pojačanjem **0,618 ± 0,005** ([[swim-student-writing-simulation-2026]]). Čitatelj iz te tablice vidi je li osposobljavanje išta promijenilo. Jedan konačni broj to ne može reći i skriva fazu u kojoj je fino podešeni model bio lošiji od upita.

## Usporedite s nečim izvan svog projekta

Prvo uzmite osnovnu vrijednost, uključujući jeftinu. Model asistenta kolegija bez ikakvog utemeljenja dobio je ocjenu nižu od običnog pretraživanja po ključnim riječima, što je vrsta rezultata koja mijenja plan rada, a košta jedan dan da se otkrije.

Vanjsko mjerilo zatim vam kaže vrijedi li vaš broj uopće. Na CDPK mjerilu pedagogije EduQwen je dosegao **96,52%** nasuprot **90,55%** koliko je dobio Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Pedagogy Benchmark, izgrađen iz stvarnih ispita stručnog usavršavanja nastavnika i obuhvaćajući **97 modela**, našao je točnost od **28% do 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre i sur., 2025.]]).

Na zadatku o poučavanju modeli su se kretali od slabih do dobrih, pa rezultat na mjerilu smješta vaš sustav negdje unutar širokog raspona.

## Provjerite sigurnost na cijelom razgovoru

Većina sigurnosnih provjera ispituje jednu razmjenu. Štete koje su u poučavanju važne akumuliraju se. SafeTutors je našao da čak i modeli izgrađeni upravo za poučavanje degradiraju tijekom dugog razgovora i mogu otkriti odgovore koje bi trebali zadržati ([[hazra-safetutors-pedagogical-safety-2026]]).

Provedite provjeru na cijelim razgovorima i napišite ispitne poteze namjerno: student koji je u krivu, onaj koji stalno pritišće, onaj koji pokušava nagovoriti model da odstupi od svoje uloge. Poučavatelj koji izdrži deset poteza i popusti na jedanaestom pada na ispitu koji je važan, a niz provjera po odgovoru ocijenit će ga kao čist.

## Provjerite simuliranog studenta prije nego što mu povjerujete

Generiranje simuliranih studenata umjesto regrutiranja stvarnih čini evaluaciju mnogo jeftinijom. Simulirani student ujedno je mjerni instrument i može biti pogrešan na načine na koje instrumenti griješe: previše suradljiv, previše tečan, prebrzo prihvaća nagovještaj.

Najizravniji test u bazi znanja ocijenio je simulirane i potaknute studente prema **382 izdvojena dijaloga** iz najveće javne zbirke stvarnih dijaloga studenata i poučavatelja iz matematike, uz sedam mjera koje pokrivaju jezik, ponašanje i mišljenje ([[simulated-students-tutoring-dialogues-2026]]). Drugi radovi pritišću na realističnost iz drugih kutova: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] osposobljava modele da istodobno djeluju i misle kao studenti, a profili koji poznaju povijest uvjetuju simulaciju studentovom prošlošću, a ne fiksnom personom ([[history-aware-student-simulation]]).

Ako je vaš sustav za provjeru simulirani student, provjerite simulator prema stvarnim transkriptima prije nego što mu dopustite da ocjenjuje vašeg poučavatelja.

## Što evaluacijski timovi pogrešno shvaćaju

Visoka ocjena slaganja znači da je sustav ispravan. Znači da sustav ocjenjuje kao ocjenjivač s kojim ste ga usporedili, na esejima na kojima ste ga usporedili. WrAFT-ovih 0,84 došlo je s povratnom informacijom koja se nije dala raščlaniti.

Jedan broj može stajati za cijeli proizvod. Timovi isporuče nadzornu ploču s „točnost 0,84“ u kutu i bez polja za modul povratne informacije, politiku nagovještaja ili ponašanje pri odbijanju. Ocjena na razini modula najlakši je broj za izračunati i najmanje informativna stvar o kojoj se može izvijestiti.

Vanjsko mjerilo rješava pitanje djeluje li alat. Raspon Pedagogy Benchmarka od 28% do 89% kaže da je ta obitelj zadataka teška i nejednako pokrivena. Vaš položaj u tom rasponu činjenica je o vašem modelu. Ono što vaši studenti mogu poslije druga je činjenica.

Model koji prosuđuje model jeftina je zamjena za ljudske ocjene. Jeftin je. Brojka od 35% i neslaganje o tome koji su nagovještaji loši opisuju što će propustiti prosuditelj koji nikad nije bio provjeren.

Simulirani studenti čine evaluaciju besplatnom. Čine je jeftinom i premještaju trošak u provjeru. Usporedba na 382 dijaloga postoji zato što je instrument trebalo kalibrirati.

## Što će vam se vratiti

**„Nemamo označivače za ovo.“** Pedeset ocijenjenih izlaza dovoljno je za početak. Ocijenite ih sami ako nitko drugi nije slobodan i sačuvajte tablicu.

**„Naša ocjena na mjerilu pobjeđuje Gemini.“** Pobjeđuje, na CDPK-u, na upitima koje to mjerilo rabi. Stavite uz nju i mjeru bez pomoći.

**„Naš automatizirani prosuditelj slaže se s našim ljudskim ocjenjivačima.“** Tada imate jednu korelaciju na jednom uzorku. Pitajte na kojim se izlazima nije složio i pročitajte ih, jer tu živi promašaj.

**„Ne možemo provesti cjelovitu evaluaciju prije lansiranja.“** Provedite tri jeftine: jedan izlaz ocijenjen zasebno, pedeset izlaza koje je ocijenila osoba, jedan sigurnosni prolaz u duljini razgovora. Skupi dijelovi mogu slijediti nakon pilota.

**„Sustav je samo demo, pa je evaluacija prerana.“** Demo je najjeftinije mjesto da otkrijete da vaš broj mjeri formulaciju. Kad se uz njega priloži plan rada, isti nalaz skuplje je ispraviti.

## Što učiniti ovaj tjedan

**1.** Napišite tvrdnju u jednoj rečenici koju vaša evaluacija treba poduprijeti. Stavite je na vrh dokumenta o evaluaciji.

**2.** Popišite svaki izlaz koji sustav proizvodi i svakome dajte redak, mjeru i uvjet prolaza.

**3.** Izvucite pedeset izlaza, ocijenite ih sami i stavite svoje ocjene uz ocjene provjeravatelja.

**4.** Izračunajte raspodjelu sigurnosti i napišite pravilo usmjeravanja s brojem u sebi, uz ime osobe koja čita ono što padne ispod praga.

**5.** Provedite jedan sigurnosni razgovor u kojemu je student u krivu, dva puta uzvraća i traži odgovor.

## Kamo dalje

[[making-ai-better-at-supporting-learning|Kako možemo učiniti umjetnu inteligenciju boljom u podupiranju učenja u vlastitom predmetu?]] pokriva dizajnersku stranu istog problema. [[training-ai-tutors-to-guide-rather-than-answer|Osposobljavanje poučavatelja s umjetnom inteligencijom da vode, a ne odgovaraju]] bavi se putem osposobljavanja do ponašanja poučavanja, a [[evaluating-ai-interventions-methods|vrednovanje intervencija s umjetnom inteligencijom]] verzija je ovog pitanja okrenuta nastavnicima, dok je [[reporting-interpreting-aied-research|izvještavanje o istraživanju i njegovo tumačenje]] verzija okrenuta istraživačima. Metode stoje pod [[ai-ed-evaluation|vrednovanjem u području umjetne inteligencije u obrazovanju]] i [[llm-training-and-fine-tuning|osposobljavanjem i finim podešavanjem LLM-ova]].
