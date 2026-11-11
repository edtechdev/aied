---
title: "Što bi edukatori trebali izbjegavati u upotrebi umjetne inteligencije?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Većina smjernica o umjetnoj inteligenciji u obrazovanju sročena je kao popis onoga što vrijedi pokušati. Ova je stranica drugi popis: prakse za koje dokazi kažu da ih treba prekinuti, organizirane prema ulozi koja bi ih morala prekinuti. Namjerno to nije popis pogrešnih uvjerenja — njima se bavi [[addressing-common-misconceptions-ai-education|FAQ o zabludama]], a konceptualna stranica [[misconceptions]] objašnjava zašto se zadržavaju — ni popis onoga što istraživanje još ne može reći, što pokriva [[limitations-in-aied-research|ograničenja istraživanja AIED-a]]. Fokus je ovdje na koraku nakon uvjerenja: što ljudi stvarno rade, koliko ih to stoji i što učiniti umjesto toga.

Tri se neuspjeha ponavljaju u svakoj ulozi. **Zamjena** — alat obavi kognitivni rad koji je učenik trebao obaviti, a izlaz se ocjenjuje kao da ga je učenik proizveo. **Nezasluženi dokaz** — signal koji je lako prikupiti (samopouzdanje, tečnost, angažman, stopa dovršenosti) tretira se kao dokaz nečega što ne može pokazati. **Struktura prepuštena apelu** — od upozorenja, rečenice u politici ili radionice traži se da obavi posao koji mora obaviti dizajn sučelja, dizajn procjene ili upravljanje.

## Kratka verzija

**1.** Nikada ne ocjenjujte, ne citirajte niti promičite izlaz kao dokaz sposobnosti koja ga je proizvela.

**2.** Uvijek prikupite mjeru bez pomoći uz onu s pomoći.

**3.** Tečnost, samopouzdanje i angažman tretirajte kao značajke upotrebe, a ne kao učenje.

**4.** Zaštitu stavite u tijek rada, a ne u upozorenje.

**5.** Pretpostavite da će svaki podatak koji alat može vidjeti biti zadržan, kombiniran i kompromitiran.

**6.** Ako tvrdnja dolazi s demonstracijom, ali bez usporedbe, to je marketing.

## Za učenike

**Ne predajte dio koji biste trebali vježbati.** Razlika nije u tome koliko se umjetnom inteligencijom koristite, nego koji se kognitivni rad premješta. Prepuštanje domaće zadaće alatima podiže ocjene iz zadaće, a snižava ocjene na ispitu bez literature — porast od 18% nasuprot gubitku od 20% u jednoj srednjoškolskoj studiji — jer je vježba koja gradi znanje dostupno dosjećanjem otišla alatu ([[reducing-ai-misuse]]). Ako je vježba poanta, alat ne može odraditi vježbu.

**Ne čitajte tečnost kao točnost.** Tečan tekst izlaz je jezičnog modela neovisno o tome je li sadržaj istinit, a mehanizam koji ga čini uvjerljivim isti je onaj koji ga čini pogrešnim ([[hallucination-risk]]). Provjerite konkretnu tvrdnju, ne ton odlomka. Navika provjere rijetko se javlja sama od sebe: u panelu od 900 odraslih koji su dobili sažetak umjetne inteligencije, čitatelji su slijedili izvor naveden u njemu u 1% posjeta ([[trust-calibration]]).

**Ne prihvaćajte slaganje kao povratnu informaciju.** Modeli potvrđuju znatno više od ljudi — u 11 modela, odgovori umjetne inteligencije potvrđivali su korisnike 49% češće od ljudskih odgovora — a višak je ono zbog čega interakcija djeluje podržavajuće ([[ai-sycophancy]]). Tutor koji se nikada ne suprotstavi uklonio je korektivni signal po koji ste došli. Tražite prigovor, ne potvrdu.

**Ne mijenjajte pitanje za odgovor kad zapnete.** Produktivna borba koju preskočite jest učenje; traženje pomoći koje dohvaća odgovor drugo je ponašanje od traženja pomoći koje dohvaća nagovještaj ([[help-seeking]], [[desirable-difficulties]]). Koristite alate koji uskraćuju dovršen odgovor.

**Ne lijepite osobne, zdravstvene ni obiteljske podatke u alat da biste dobili bolji odgovor.** Alat nema obvezu zaboraviti ih, a cijena privatnosti nije vidljiva u kvaliteti odgovora ([[privacy]]).

## Za roditelje i obitelji

**Ne radite zadaću s alatom, ni ne dopustite da se radi pokraj vas.** Obrazac koji se pokazuje u podacima je inflacija ocjena sa skrivenom cijenom: ocjene iz zadaće veće su za 18%, dok ocjene ispita bez literature padaju za 20% ([[reducing-ai-misuse]]). Ono što možete provjeriti jest proces — može li vaše dijete objasniti korak, ponoviti ga na papiru i reći u što nije bilo sigurno? Ako ne može, alat je odradio zadatak.

**Ne dopustite da chatbot postane pouzdanik.** Podlizni sustavi potvrđuju mnogo više od ljudi — 49% više u 11 modela — a potvrda je mehanizam zbog kojeg se s njima osjeća sigurno razgovarati ([[ai-sycophancy]]). U velikoj longitudinalnoj studiji korisnici su se za osobne savjete obraćali podliznoj umjetnoj inteligenciji gotovo jednako često kao bliskim prijateljima i obitelji, uz manje zadovoljstvo u stvarnim odnosima ([[sycophantic-ai-social-interaction-2026]]). Dijete koje donosi uznemirenost modelu koji se uvijek slaže nije saslušano; ono je zrcaljeno.

**Ne dajte generativni chatbot malom djetetu i ne nazivajte to nadzorom zato što ste u sobi.** Smjernice po dobnim razinama konkretne su: postupno potpomognute, negenerativne aktivnosti za dob od 9 do 12 godina, nadzirana generativna upotreba s etičkim rasuđivanjem od 13 godina naviše ([[ai-guidance-children-under-13]]). Za najmlađu djecu rizik je u uvjerenju — predoperacijska djeca prihvaćaju generirani sadržaj kao istinit, a sustavi nisu razvojno kalibrirani u povratnim informacijama koje daju. Zajednička upotreba odraslih znači pitati što je igračka upravo učinila, ne nadzirati s vrata ([[early-childhood-elementary-ai-education]]).

**Ne pretpostavljajte da školska zaštita čuva podatke vašeg djeteta zato što je škola odabrala alat.** Pitajte što se zadržava, koliko dugo, trenira li se na tome išta i tko još to vidi ([[privacy]]). Svjesnost ne proizlazi iz izloženosti: mjesec dana nakon lekcije u kojoj su učenici gledali vlastito bilježeno ponašanje projicirano uživo, 66% učenika jednog 7. razreda još je odabralo najmanje zaštitnu postavku chatbota ([[privacy]]).

**Ne koristite rezultat detektora da biste optužili dijete ni da biste poduprli optužbu iz škole.** U najstrožem kontroliranom testu detektori su označili 9–15% neizmijenjenog ljudskog pisanja i uhvatili manje od 4% humaniziranih prepisa umjetne inteligencije; pri realističnim osnovnim stopama lažno pozitivni nalazi nadmašuju istinski pozitivne ([[ai-detection]]). Oznaku tretirajte kao razlog da zatražite povijest verzija i razgovor, ne kao nalaz.

**Ne zaključujte da je zabrana alata sigurna opcija.** Premalo povjerenja kalibracijska je pogreška koja ima svoju cijenu — propuštenu sposobnost — a vještina koja je važna jest usklađeno samopouzdanje, ne izbjegavanje ([[trust-calibration]]). Koristan roditeljski potez isti je onaj koji istraživanje podupire za učenike: zahtijevajte korak provjere i učinite ga dovoljno jeftinim da ga umorno dijete doista izvede ([[verify-ai-output]]).

**Ne poistovjećujte filtar sadržaja sa sigurnošću.** Filtri se bave onim što će sustav reći; ne bave se onim što interakcija čini učeniku — oslabljenom vježbom, podliznim slaganjem ili nejednakim odbijanjima ([[pedagogical-safety]]).

## Za nastavnike

**Ne potvrđujte izlaz kao sposobnost.** Uglađen uratak dokaz je uglađenog uratka. Ako procjena ne može razlučiti što student može bez pomoći, procjena je prestala mjeriti ono što kvalifikacija tvrdi ([[assessment-validity]], [[authentic-assessment]]). Rješenje je redizajn zadatka, ne stroži kodeks časti.

**Ne koristite rezultat detektora kao dokaz nedoličnog ponašanja.** Najstroži kontrolirani test označava 38–80% laganog uređivanja umjetnom inteligencijom koje je u skladu sa smjernicama i 9–15% neizmijenjenog ljudskog pisanja, a hvata manje od 4% prepisa propuštenih kroz uslugu humanizacije; 14 komercijalnih alata u neovisnom mjernom ogledalu palo je ispod 80% točnosti, a pri realističnim osnovnim stopama lažno pozitivni nalazi nadmašuju istinski pozitivne ([[ai-detection]], [[should-we-use-ai-detectors]]). Detektor može započeti razgovor; ne može ga završiti.

**Ne dodajte umjetnu inteligenciju procjeni koju niste redizajnirali.** Pričvršćivanje alata na zadatak osmišljen za rad bez pomoći proizvodi upravo inflaciju ocjena koja skriva gubitak — zadaća gore, ispit dolje. Za svaki ocijenjeni zadatak pitajte što bi pokazala verzija bez pomoći i prvo popravite zadatak ([[reducing-ai-misuse]]).

**Ne tretirajte angažman kao učenje.** Vrijeme na zadatku, zadovoljstvo, obujam traženja pomoći i aktivnost u chatu lako je instrumentirati i sve je to spojivo s potpunim izostankom učenja. Zaštitna ograda koja je smanjila prebacivanje studenata na pogrešan stav umjetne inteligencije s 42–60,5% na 5,7–8,2% nije proizvela mjerljiv učinak na učenje unutar sesije (β = 0,03, p = 0,18). Ponašanje se zadržalo; učenje se nije pomaknulo ([[student-engagement]]).

**Ne oslanjajte se na upozorenje ondje gdje sučelje može ograničiti.** Tutor koji može proizvesti dovršen odgovor proizvest će ga pod pritiskom roka. Zaštitna ograda koja djeluje jest ona ugrađena u interakciju, a ne rečenica u nastavnom programu ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Ne lijepite učeničke radove, individualne obrazovne planove (IEP), disciplinske zapise ni prepoznatljive nacrte u potrošački alat.** Minimizacija podataka dizajnerska je odluka koju donosite u ime učenika, bez obzira na to jeste li o njoj razmišljali ([[privacy]]).

## Za stručnjake za razvoj obrazovanja i nastave

**Ne vodite obuku o alatima i ne nazivajte je pismenošću o umjetnoj inteligenciji.** Sesija o poticajima poučava sučelje proizvoda; [[ai-literacy]] je sposobnost prosuđivanja kada alat treba upotrijebiti, što radi i što provjeriti. Nastavnici koji nauče gumbe bez prosudbe odlaze sa samopouzdanjem i bez kalibracije ([[teacher-ai-competency]]).

**Ne vodite jednokratno stručno usavršavanje i ne očekujte da će se praksa promijeniti.** Dokazi o [[professional-training|profesionalnom učenju]] dosljedni su glede trajanja i praćenja: pojedinačni događaji mijenjaju samoprijavljeno samopouzdanje, rijetko ponašanje u razredu, a porast samopouzdanja može prikriti odsutnost promjene ([[educational-development]]).

**Ne zanemarujte sustav procjene koji ostavljate na mjestu.** Nastavnici će usvojiti praksu koju poučavate samo ako ih procjena kojoj podliježu ne kažnjava zbog nje. Radionica o dizajnu zadataka otpornih na umjetnu inteligenciju koja se odvija uz nepromijenjen režim ispita poučava nastavnike da je obuka dekorativna.

**Ne modelirajte nekritičnu upotrebu od koje upozoravate.** Demonstracija alata generiranjem nastavnog plana pred nastavnicima, bez koraka provjere, poučava publiku da je izlaz proizvod.

**Ne prihvaćajte prodajnu demonstraciju kao dokaz djelotvornosti.** Tvrdnja koju procjenjujete odnosi se na učenje, a demonstracija pokazuje sposobnost. Tražite ishode bez pomoći, rezultate po podskupinama i testiranje sigurnosti u više koraka ([[checking-whether-educational-ai-works]]).

## Za razvojne programere obrazovnog softvera

**Ne optimizirajte metriku koju je lako bilježiti.** Trajanje sesije, broj poruka i ocjene zadovoljstva poboljšat će se pod gotovo svakom promjenom; učenje često neće. Isti tim koji isporuči zaštitnu ogradu može isporučiti nadzornu ploču koja nagrađuje obujam interakcije, a te će dvije stvari pokazivati u suprotnim smjerovima ([[learning-analytics]], [[student-engagement]]).

**Ne isporučujte detektor bez studije valjanosti prema konstruktu.** Model koji postiže 0,98 F1 na procurjelom skupu podataka može pasti na 0,60 pri validaciji neovisnoj o pokusu, a detektor osmijeha može djelovati *negativno* prema empatiji koju procjenjuju promatrači jer mu nedostaje kontekst koji ljudski procjenjivač ima ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Objavite protokol validacije, ne samo naslovni rezultat.

**Ne zaključujte o afektu, pažnji ni „angažmanu“ iz lica i tijela bez privole i navedene svrhe.** Rizik u više koraka nije rizik u jednom koraku: stope štete u jednom pregledu porasle su s oko 18% u evaluacijama s jednim korakom na oko 78% u onima s više koraka, pa je sustav certificiran na izoliranim poticajima certificiran za interakciju koju učenici nemaju ([[pedagogical-safety]], [[privacy]]).

**Ne skrivajte prijelaz.** Učenik koji ne može razlikovati kada tutor generira, a kada dohvaća, ni kada je čovjek u petlji, ne može kalibrirati povjerenje u njega, a pristranost automatizacije djeluje najčišće kada je sustav u pravu, a čovjek prestao provjeravati ([[automation-bias]], [[trust-calibration]]).

**Ne dizajnirajte za mjerno ogledalo i zatim tvrdite da vrijedi za razred.** Učinak na mjernom ogledalu svojstvo je mjernog ogledala. Izvijestite o uvjetima upotrebe koje ste testirali, populaciji i zadatcima; inače će se broj čitati kao obećanje o drugom okruženju ([[limitations-in-aied-research]]).

**Ne činite alat jedinim putem do pomoći.** Ako pristup povratnim informacijama učenika ovisi o dostupnosti, kvoti ili licenciji modela, pitanje ravnopravnosti već je odlučeno nabavom ([[equity-in-ai-education]]).

## Za obrazovne administratore

**Ne kupujte tvrdnje o sposobnostima kao dokaz o ishodima.** Dobavljači mogu demonstrirati proizvod; samo evaluacija može demonstrirati učenje. Zahtijevajte ishode bez pomoći, rezultate po podskupinama, stopu odustajanja i plan za ono što se događa kad pilot završi ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Ne uvodite nadzor zato što je dostupan.** Sustavi za nadzor ispita snimaju slike lica, identifikacijske dokumente, skeniranja prostorije uključujući 360-stupanjske preglede i audio s mikrofona, a pregled 80 studija našao je da samo 25% zadovoljava prag izvještavanja za pitanja na koja ustanova treba odgovore prije uvođenja ([[privacy]], [[remote-proctoring]]). Trošak pada na učenike; baza dokaza tanja je nego što ugovor implicira.

**Ne pišite politiku koja se sastoji samo od zabrane i ne nazivajte je upravljanjem.** Zabrana bez redizajna procjene, bez podrške i bez puta žalbe premješta ponašanje umjesto da ga sprječava i kažnjava učenike koji najmanje mogu osporiti lažnu optužbu. Politika mora pokriti i ocjenjivača: dvije od pet neizravnih strategija ubacivanja poticaja ugrađenih u predani rad podigle su ocjenu eseja koji je padao ([[institutional-ai-policy]], [[course-ai-policy]]).

**Ne izjednačujte usvajanje s poboljšanjem.** Nadzorna ploča koja izvješćuje o upotrebi, zadovoljstvu i dovršenosti izgledat će kao uspjeh dok mjera učenja ostaje ravna. Unaprijed odlučite koji bi vas ishod naveo da otkažete ugovor ([[ai-ed-evaluation]]).

**Ne dopustite da pristupačnost stigne kao zahtjev za prilagodbu.** U pregledu 40 studija digitalnih pomoćnih tehnologija za neurodivergentne učenike, 28 je formalnu dijagnozu učinilo uvjetom sudjelovanja — model uvjetovan dijagnozom koji isključuje svakog učenika s potrebama i bez oznake ([[accessibility]], [[universal-design-for-learning]]).

## Za obrazovne istraživače

**Ne dopustite da samoprocjena nosi kauzalnu tvrdnju.** Samopouzdanje, percipirano učenje i zadovoljstvo jesu ishodi, ali nisu ishodi za koje većina studija tvrdi da ih mjeri. Literatura o [[empathy|empatiji]] najjasniji je slučaj: područje koje namjerava poučavati empatiju uglavnom mjeri udobnost, a najjači pregled 17 studija našao je poraste samopouzdanja mnogo češće od dokaza o samoj empatiji ([[self-report-measures]], [[empathy]]).

**Ne citirajte učinak bez njegova dizajna.** U kritičkom pregledu 80 HCI studija kritičkog mišljenja s umjetnom inteligencijom, 42 nije imalo kontrolnu skupinu. Naslovni učinak iz 30 studenata na jednom kolegiju na jednoj lokaciji uobičajen je oblik krhke tvrdnje ([[limitations-in-aied-research]]).

**Ne izvješćujte heterogenost bez modela.** Isti podaci daju I² = 82,98% pod modelom fiksnih učinaka i 15,75% pod modelom slučajnih učinaka; citirani I² bez modela nije interpretabilan ([[meta-analysis-systematic-review]]).

**Ne generalizirajte iz jednog konteksta i ne nazivajte to nalazom.** Jedan kolegij, jedna ustanova, jedna verzija modela, jedan jezik. Ponašanje modela mijenja se sa svakim izdanjem, a detektori trenirani na jednoj generaciji gube odziv na sljedećoj ([[research-gaps-aied]], [[ai-detection]]).

**Ne tretirajte korelaciju između interakcije i ishoda kao mehanizam.** Obujam poticaja ne mjeri kognitivno rasterećenje — klasteri po obujmu nisu se razlikovali u raspodjeli kognitivnog rada, a ručno kodirani dijalog nije našao nikakvo rasterećenje u 49,6% od 125 dijaloga ([[cognitive-offloading]]). Mjerite rad, ne njegov vidljivi trag.

**Ne objavljujte odlomak o ograničenjima koji je mogao biti napisan prije studije.** Imenujte konkretnu prijetnju, konkretan broj i tvrdnju koju ograničava. To je ono što ograničenje čini upotrebljivim sljedećem čitatelju ([[interpreting-and-applying-aied-research]]).

## Zašto ovo pripada zajedno

Svaka stavka gore slučaj je posredne mjere koja je promaknuta u presudu: esej predstavlja pisca, rezultat predstavlja nedolično ponašanje, osmijeh predstavlja empatiju, demonstracija predstavlja učenje, politika predstavlja upravljanje. Ispravak je uvijek isti potez — imenujte konstrukt, nađite mjeru koja bi mogla ispasti obrnuto i prikupite je uz onu koja je pri ruci.

Zato ove opaske nisu popis stvari koje su uvijek pogrešne. Detektor može biti razlog za razgovor s učenikom. Chatbot može biti korisna proba. Nadzorna ploča može biti poticaj da postavite pitanje. Šteta je u zamjeni, ne u alatu.

## Što učiniti ovaj tjedan

- Odaberite jedan ocijenjeni zadatak i zapišite što bi pokazao kad je alat zatvoren. Ako je odgovor „ništa drugačije“, problem je zadatak.
- Dodajte jednu mjeru bez pomoći kolegiju koji trenutačno izvješćuje samo o potpomognutom učinku.
- Pročitajte ugovor svoje ustanove o nadzoru ispita ili alatu umjetne inteligencije u pogledu zadržavanja, sekundarne upotrebe i uvjeta u slučaju povrede podataka — i provjerite opisuje li tekst privole ono što sustav doista snima.
- Zatražite od dobavljača ishode bez pomoći i rezultate po podskupinama. Ako je odgovor demonstracija, imate svoj odgovor.
- Na sljedećoj sesiji za nastavnike drugu polovicu posvetite redizajnu procjene, a ne poticajima.

## Kamo dalje

- [[addressing-common-misconceptions-ai-education]] — uvjerenja iza ovih praksi i kako ih ispraviti bez snishodljivosti.
- [[limitations-in-aied-research]] — što baza dokaza još ne može poduprijeti.
- [[reducing-ai-misuse]] — strukturne poluge protiv zloupotrebe i zašto nadmašuju apele.
- [[pedagogical-safety]] — što tutor može učiniti učeniku dok prolazi svaku provjeru sadržaja.
- [[should-we-use-ai-detectors]] — dokazi o detektorima u cijelosti.
- [[checking-whether-educational-ai-works]] — kako procijeniti tvrdnju prije nego je usvojite.
