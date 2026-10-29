---
title: "Treba li rabiti detektore umjetne inteligencije?"
created: "2026-09-17T09:21:00-04:00"
connected_faqs: [redesign-assessment-ai-era, course-ai-policy, reduce-ai-cheating, addressing-common-misconceptions-ai-education]
weight: 85
foundations: [academic-integrity]
assessment: [ai-detection, assessment-validity]
ethics: [equity-in-ai-education, trust, privacy, ai-use-disclosure]
level: [higher ed]
audience: [instructors, administrators, assessment professionals]
institutions: [educational-policy-ai, governance]
updated: "2026-10-29T14:24:50-04:00"
translation_of: faqs/should-we-use-ai-detectors
source_updated: "2026-10-28T11:14:23-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Rezultat detektora vraća se označen na radu koji ste već dvaput pročitali, ili kolega želi da se alat uključi prije roka za sljedeći esej, ili panel za integritet od vas traži da branite nalaz koji počiva na postotku. Netko će u sobi reći da je rezultat samo jedan dio dokaza. Ono o čemu odlučujete uže je od argumenta koji iz toga slijedi: može li taj broj uopće nositi težinu u postupku zbog nedoličnog ponašanja, i što ćete staviti na njegovo mjesto ako ne može.

Kratak odgovor koji možete ponoviti na sastanku: rezultat detektora ne može utemeljiti nalaz jer se ne može validirati prema referentnom stanju, ne može se unakrsno ispitati i ne zadovoljava prevagu vjerojatnosti. Njegove se pogreške ponavljaju u obrascima, a najteže pogađaju poštene urednike i studente koji pišu na drugom jeziku. Umjesto toga pitajte može li student pokazati razumijevanje onoga što je predao, i financirajte tu sposobnost.

## Kratka verzija

**1.** Upišite u pravilnik da izlaz detektora nikada ne pokreće posljedicu, nikada ne stoji sam i nikada ne utemeljuje nalaz. Stavite to u sam dokument pravilnika, gdje ga panel može naći i onda kada dopis više ne postoji.

**2.** Zamijenite pitanje „Jeste li se koristili umjetnom inteligencijom?“ pitanjem „Možete li mi pokazati da to razumijete?“ Upotrijebite kratak razgovor, ranu verziju teksta ili snimljeno objašnjenje.

**3.** U svaki zadatak s velikim ulogom ugradite jedan provjereni korak ili korak bez pomoći, dimenzioniran prema kapacitetu ocjenjivanja koji stvarno imate.

**4.** Zatražite od dobavljača stope pogrešaka u pisanom obliku, a zatim ih pokušajte reproducirati na vlastitim radovima. Vanderbilt je to pokušao i isključio alat.

**5.** Premjestite novac s licence za detekciju na kapacitet za provjeru i na savjetovanje. Na to upućuje dokumentirana pritužba nastavnika.

## Procijenite imate li nalaz ili pitanje

To su dva različita posla i oni se oslanjaju na različite dokaze. Nalaz zahtijeva dokaze koji zadovoljavaju prevagu vjerojatnosti, a rezultat detektora to ne postiže sam. Ne može se validirati prema referentnom stanju jer u stvarnim radovima nitko ne zna kako je tekst nastao, pa validacija postaje kružna, a stope lažno pozitivnih i lažno negativnih rezultata znače nešto samo unutar kontroliranog testa. Alat ne objavljuje pragove ni podatke za treniranje i ne dopušta neovisno repliciranje, što ostavlja označenog studenta bez ičega što može odgovoriti, a vas bez ičega što možete objasniti ([[bassett-ai-detectors-education-2026]], [[teichmann-detecting-undetectable-misconduct-2026]]).

Kombiniranje rezultata s drugim signalima to ne popravlja. Jezični pokazatelji, usporedbe stila, prosudbe [[llm|LLM-a]] i šutnja studenta i dalje zajedno daju manje od tog standarda. Šutnja je ona na koju treba paziti: studenti zadržavaju pravo na odbijanje, a odbijanje ne prevagne vagu. Ono što legitimno možete pitati jest može li student pokazati [[learning-gains|učenje]] koje [[assessment|procjena]] tvrdi da mjeri, a usmeni odgovor na to odgovara na način na koji rezultat sličnosti nikada neće ([[bassett-ai-detectors-education-2026]]).

Dihotomija je ujedno pogrešno pitanje. Studentski radovi često nastaju uz pomoć umjetne inteligencije, na hibridnom kontinuumu, a pravilnici koji kažu „u procjeni“ rijetko definiraju kada procjena počinje, što prepušta prosudbu onome tko prvi pročita datoteku ([[bassett-ai-detectors-education-2026]]).

Ispod svega toga stoji problem referentnih podataka. Detektori se treniraju i testiraju na ljudskom pisanju iz vremena prije generativne umjetne inteligencije, a Turnitinova vlastita validacija rabila je 700.000 radova objavljenih prije 2019. Taj se korpus pretpostavlja kao reprezentativan za sadašnju studentsku prozu, pretpostavka koju nitko nije provjerio i koja se mijenja sa svakim novim modelom ([[bassett-ai-detectors-education-2026]]).

## Pogledajte brojke o točnosti prije nego što citirate neku

Najsnažniji kontrolirani test u bazi znanja obuhvatio je 642 objavljena engleska sažetka iz četiriju područja i dvaju razdoblja. Na pragu od 0,50 dva su komercijalna detektora označila lagano uređivanje uz pomoć umjetne inteligencije koje je bilo u skladu sa smjernicama u 38 do 80% slučajeva, neizmijenjene izvornike iz 2023. do 2025. u 9 do 15% (ne-[[stem-education|STEM]] znatno iznad STEM-a, p < 0,001), a nakon što je tekst prošao kroz servis za humanizaciju, uhvatila su manje od 4% prepisa označenih kao rad umjetne inteligencije, što je stopa lažno negativnih iznad 96%. Autori to nazivaju integritetnim začaranim krugom (catch-22): studenti koji priznaju i malo uređuju jesu oni koje alat hvata, a studenti koji su krenuli izbjeći ga nisu. Njihova je preporuka izričita: rezultati detektora nikada ne bi smjeli služiti kao samostalan dokaz nedoličnog ponašanja ([[karr-ai-detection-humanization-2026]]).

Neovisni [[benchmark|usporedni test]] dolazi do istoga mjesta iz drugog smjera. Nijedan od 14 alata nije dosegnuo točnost od 80%, a jednostavno parafraziranje, manje uređivanje ili servis za humanizaciju otprilike prepolovljuju i tu izvedbu. Pri realističnim osnovnim stopama lažno pozitivni rezultati nadmašuju istinski pozitivne ([[teichmann-detecting-undetectable-misconduct-2026]]).

Stope hvatanja kod cjelovitog generiranja lošije su nego što sugeriraju naslovne stope pogrešaka. U prikrivenom terenskom istraživanju istraživači su ubacili potpuno generirane radove u živi online ispitni sustav [[summative-assessment|sumativne procjene]] u pet modula psihologije: 94% ih je prošlo neotkriveno, a radovi umjetne inteligencije u prosjeku su postigli bolje rezultate od stvarnih studenata. Ugovorno varanje već je pokazalo isti strukturni problem jer ne ostavlja pouzdan trag koji bi se mogao naći ([[teichmann-detecting-undetectable-misconduct-2026]]).

Točnost se mijenja i s vrstom zadatka. Kada su istraživači testirali može li [[generative-ai|generativna umjetna inteligencija]] prepoznati vlastiti izlaz, rezultati su bili pouzdani za programiranje i dulje refleksivno pisanje, a slabi za kratke odgovore, gdje je model često svoj tekst ocjenjivao kao sličniji ljudskom nego što je autentičan studentski rad. Male varijacije u upitu oštro su smanjivale točnost ([[llm-detecting-llm-generated-content-education]]). Prag koji vrijedi za jedan zadatak neće vrijediti za drugi, a to nećete znati do žalbe.

Zatim je tu i rok trajanja. Studija iz 2026. preoblikuje detekciju kao problem prilagodbe: [[ren-test-time-adaptation-ai-text-detection-2026|napad prepisivanjem crne kutije]] spustio je komercijalni detektor Pangram na uravnoteženu točnost od 63,5% i odziv na umjetnu inteligenciju od 27,0%, a detektor treniran na modelu Llama 3.3 70B Instruct dosegnuo je samo 55% odziva na sažecima novijeg modela. Prilagodba u trenutku testiranja vratila je 94,4% uravnotežene točnosti i 99% odziva na istom tekstu, što je ohrabrujuća polovica. Isti rad pokazuje koliko taj popravak košta: kako se simulirana primjena LLM-ova širi, odziv fiksnog nadziranog detektora na ljudskom tekstu opada s 85,9% na 73,4% tijekom desetljeća. Uvjet njegova isteka izrečen je izravno: uravnotežena točnost ne može prijeći polovicu zbroja jedinice i ukupne varijacijske udaljenosti između ljudske distribucije i distribucije umjetne inteligencije, pa bi konvergencija tih dviju distribucija pobijedila svaki detektor koji se temelji na učenju. Validirani rezultat vrijedi dok se modeli ne pomaknu, a oni se pomiču svakih nekoliko mjeseci ([[ren-test-time-adaptation-ai-text-detection-2026]]).

I stroj nikada nije jasno pobijedio pažljivog čitatelja. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall i Parapadakis (2025.)]] izvješćuju o strojnom otkrivanju teksta umjetne inteligencije ili parafraziranog teksta na približno 80% nasuprot 78,4% kod ljudskih ocjenjivača, i citiraju dokaze da je generirani tekst prošao kao ljudski napisan u do 80% slučajeva. Ta razlika nestaje u pojasu pogreške koji čovjek već unosi, a on je preuzak da utemelji nalaz ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

## Utvrdite na čiji rad pada pogreška

Značajke koje detektori čitaju kao signale umjetne inteligencije, to jest gustoću dugih tokena, učestalost akademskih riječi i ujednačen stil, ujedno su značajke kompetentnog pisanja na drugom jeziku. Pogrešna klasifikacija zato slijedi jezično podrijetlo, a ne ponašanje, što ovo čini pitanjem [[equity-in-ai-education|pravednosti]] prije nego tehničkim pitanjem ([[teichmann-detecting-undetectable-misconduct-2026]]).

Ta se pristranost pokazuje i izvan engleskog jezika. [[kazakh-ai-text-detectors-2026|Usporedba 3.811 odlomaka čije je autorstvo prije ChatGPT-a dokazivo]] pokazao je da pet javnih detektora treniranih na engleskom, u verzijama kako su objavljeni, označava 81,4% ljudskih kazaških odlomaka (TMR RoBERTa) i 79,6% objavljenih kazaških studentskih eseja (Desklib DeBERTa), uz 25,5% za Fakespot, te da njihovo rekalibriranje na stopu lažno pozitivnih od 1% hvata najviše 1,3% strojnog teksta u zamjenu. Vlastita ograda studije važna je kada je citirate: ljudski odlomci su javni tekst nastao prije ChatGPT-a, onako kako je nađen, a ne studentski eseji, pa su njezine obrazovne stope najnesigurnije brojke koje iznosi ([[kazakh-ai-text-detectors-2026]]).

Disciplina dodaje još jednu os. Ne-STEM sažeci bili su označeni znatno iznad STEM-ovih u studiji sa 642 sažetka, što odražava pisane konvencije tih područja, a ne ponašanje njihovih autora ([[karr-ai-detection-humanization-2026]]). Dva široko rabljena komercijalna alata izmjerena su s točnošću od 0,69 i 0,61 u jednoj usporedbi, i oba su zakazala na hibridnom tekstu koji spaja ljudsko i strojno ([[hadra-ai-detector-accuracy-efl-2026]], [[van-vlasselaer-ai-detector-reliability-2026]]). Detektor je test stila, a stil koji kažnjava prati jezično podrijetlo, disciplinu i registar. Nijedno od toga nije činjenica o tome je li student rabio umjetnu inteligenciju, a svako je od toga činjenica o studentu. Širi je obrazac dokumentiran u [[differential-effects-across-learner-groups|Različitim učincima među skupinama učenika]].

Dio troška pokazuje se i prije svake rasprave. Budući da formalni postupci zahtijevaju dokaz detekcijske razine koji je funkcionalno nedostupan, nastavnici završavaju s onim što jedan praktičarski izvještaj naziva „sumnjom bez pravne zaštite“, dok [[student-rationalization-ai-writing|studenti racionaliziraju]] vlastitu upotrebu, a spisi predmeta zastajkuju ([[best-response-student-ai-dialog-2026]]). Trošak [[trust|povjerenja]] pada na odnos o kojem postupak ovisi.

## Promijenite pitanje koje postavljate studentu

Sveučilište Grand Canyon prešlo je s pitanja „Je li ovaj student rabio umjetnu inteligenciju?“ na pitanje „Može li ovaj student pokazati razumijevanje onoga što je predao?“, uz kratke razgovore, rane verzije radova i snimljena objašnjenja, što je u cijeloj ustanovi provedeno u jesen 2025. Argument za to je praktičan: nastavnici su već osposobljeni prosuditi razumijevanje, a ta promjena vraća im autoritet umjesto da ih ostavlja da čekaju dokaz koji nikada neće stići ([[best-response-student-ai-dialog-2026]]).

To mijenja i to što student može učiniti s optužbom. Kada mu se pokaže zabrinutost i zatraži objašnjenje, student je može razriješiti. Kada mu se pokaže postotak, može je samo zanijekati.

## Vodite razgovor tako da izdrži provjeru

Tretirajte razgovor o provjeri kao korak u postupku, s obaviješću i zapisom, i on će izdržati kada netko pročita spis semestar kasnije.

Počnite obaviješću. Recite studentu što je potaknulo zabrinutost, jednostavnim jezikom, i recite čemu razgovor služi. Ako zabrinutost dolazi iz rezultata detektora, recite to i recite da rezultat nije nalaz. Ako studentu kažete samo da je optužen za varanje, sastanak postaje obrana karaktera, a ne prikaz rada.

Zatim pitajte o samom radu. Koju ste tvrdnju u ovom odjeljku pokušavali iznijeti. Odakle dolazi ovaj dokaz. Zašto ste ga ovako organizirali. Što ste odbacili. Student koji je napisao rad može na to odgovoriti na razini odluka. Student koji ga nije napisao odgovarat će na razini teme, a razlika se pokaže brzo, bez toga da ikome treba dokazivati namjeru.

Očuvajte pravo na šutnju. Odbijanje odgovora ništa ne priznaje, a postupak koji odbijanje tretira kao priznanje neće izdržati žalbu. Zabilježite što je pitano, što je odgovoreno i što je odbijeno.

Završite odlukom koju možete izreći bez rezultata. Ili je student pokazao razumijevanje koje procjena mjeri, ili postoji zasebna, sadržajna zabrinutost o radu koju možete opisati vlastitim riječima. Ako nijedno nije točno, spis završava ondje. Taj je ishod normalan i treba ga takvim zapisati, jer postupak koji uvijek bilježi samo krivnju uči sljedeći panel da je sumnja isto što i nalaz.

## Ugradite u zadatak jedan korak u koji alat ne može ući

Asinkroni usmeni ispiti, oblikovani kao pravovremeni upiti s kratkim, vremenski ograničenim snimljenim odgovorima ocjenjivanima prema ugrađenim rubrikama, bili su usporedivi s ispitima višestrukog izbora licem u lice u jednoj studiji, a znatno bolji u drugoj, pri čemu su studenti izvješćivali o aktivnijoj pripremi i višoj percipiranoj profesionalnoj relevantnosti. Za [[administrator|administratora]] je svojstvo koje je važno to što se ovo skalira bez nadzora ([[asynchronous-oral-assessment-2026]]).

Preoblikovanje zadatka čini više nego očvršćivanje provjere. Studija slučaja studenata preddiplomske ekonomije pokazala je da je samo oko trećine izvijestilo o bilo kakvoj upotrebi umjetne inteligencije, uz još rjeđe priznavanje, i nepriznavanje je protumačila kao racionalan oprez pod dvosmislenim pravilnikom, a ne kao nepoštenje. Ti su isti studenti kao rješenje preferirali zadatke iz stvarnog svijeta utemeljene na podacima ([[kirsanov-beyond-detection-ai-online-assessments-2026]]). Očekivati, objavljivati i pomno ispitivati upotrebu umjetne inteligencije bolje je od njezina nadziranja, jer se [[authentic-assessment|autentičnost]] mora osmisliti, a ne nametnuti ([[beyond-detection-authentic-assessment-ai-2025]]).

Slijede dvije odluke. Prvo je veličina. Kratka usmena provjera za svaki važniji rad priuštiva je u seminaru. U predavanju s tri stotine studenata ono što preživi deseti tjedan jesu etapne verzije radova i provjera na uzorku abnormalnih radova. Odaberite verziju koju još možete provesti u posljednjem tjednu semestra s ocjenjivačkim satima koje imate, jer provjereni korak koji se uruši pod opterećenjem ostavlja vas ponovno s gotovim proizvodom.

Drugo su bodovi. Ako obrazloženje, povijest verzija ili osvrt na odbijeni prijedlog umjetne inteligencije ne nosi nijedan bod, nastat će u pet minuta i nitko ga neće pročitati, a studenti će optimizirati onaj dio koji se ocjenjuje. Dajte mu dovoljnu težinu da preskakanje koraka košta više od njegova izvršenja.

## Učinite otkrivanje jeftinim izborom

Neodređeni ili kažnjavajući pravilnici potiču prikrivanje. Konkretni okviri izjava vezani uz kognitivne faze, uz jamstvo da istinito otkrivanje nije kažnjeno, izvlače više informacija od studenata nego nadzor ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). Pitanje dizajna je koji odgovor vaša pravila čine najlakšim za studenta koji je u iskušenju sakriti, a pravilo koje izjavu tretira kao priznanje krivnje odgovorilo je na to loše.

Formulacija ovdje čini najveći dio posla. Izjava koja traži da studenti označe kućicu i zatim ostane nepročitana u sustavu za predaju radova uči ih da je otkrivanje kazalište, a sljedeća generacija to nauči brže. Izjava vezana uz fazu rada, koja pita za što je alat u toj fazi rabljen i što je student učinio s izlazom, daje vam nešto što stvarno možete pročitati, a studentu razlog da bude točan.

## Napišite odredbe koje vas drže izvan saslušanja

Izloženost rijetko počinje kao sudski spor. Prvo se pokaže kao interna žalba ili pritužba regulatoru, a prvo što se testira jest postupak. Načelo pravičnog postupka zahtijeva da student bude obaviješten o navodu i da dobije priliku odgovoriti prije bilo kakve odluke, a ta je prilika obično istražni razgovor ili intervju pred panelom čiji zapis postaje dokaz. Nalazi doneseni bez tog koraka ranjivi su i onda kada je osnovana sumnja bila razumna ([[munoz-misconduct-allegation-evidence-2026]]).

Standardi dokazivanja dolaze drugi. Nalazi o nedoličnom ponašanju zahtijevaju dokaze koji zadovoljavaju prevagu vjerojatnosti, a ako se vaš slučaj ne može izložiti bez rezultata detektora, slučaj je slab na prvi pogled ([[bassett-ai-detectors-education-2026]]). Kada se slučaj oslanja samo na stil, put usmene provjere pripada u postupak, a ne u dobru volju predsjedatelja panela.

Treći je opseg. Opće zabrane umjetne inteligencije koje ne razlikuju transkripciju i OCR od generativnog sastavljanja mogu ukloniti pomoćni alat o kojem ovise studenti sa stanjima koja utječu na motoričku kontrolu, čitljivost rukopisa ili točnost tipkanja, a nekoliko je takvih alata ukinuto, pri čemu prazninu popunjava transkripcija umjetnom inteligencijom. To je pravna izloženost kao i nepreciznost ([[wright-transcription-not-generation-2026]]). Imenujte [[assistive-technology|pomoćne]] alate i alate za transkripciju u tekstu pravilnika.

Četvrta je nabava. Detektori pohranjuju studentske radove na poslužiteljima trećih strana, ponekad u inozemstvu uz slabiju zaštitu [[privacy|privatnosti]], što povredu, zadržavanje i daljnju komercijalnu upotrebu stavlja u registar rizika vaše ustanove, a ne na marketinšku stranicu dobavljača. Uvjeti bi trebali pokrivati zadržavanje, upotrebu za [[llm-training-and-fine-tuning|treniranje modela]], mjesto pohrane, obavijest o povredi i prava na žalbu ([[bassett-ai-detectors-education-2026]]). Prikaz pravne izloženosti u bazi znanja nalazi se u [[legal-issues-and-risks|Pravnim pitanjima i rizicima]], i iskren je o svojim granicama: dokumentira postupke, kategorije dokaza i pouzdanost instrumenata, a ne presuđene ishode.

Ono što snižava rizik jest postupovno. Nikada ne tretirajte izlaz kao samostalan dokaz ili automatski okidač. Dokumentirajte standard koji vaš postupak primjenjuje. Dajte obavijest i stvarnu priliku da se odgovori u zapisnik. Ponudite provjeru kada se slučaj oslanja na stil. Čuvajte revizijski trag koji pokazuje da se sve to dogodilo.

## Testirajte formulaciju na četiri slučaja

Jezične formulacije pravilnika padaju na slučajevima koje nitko nije zamislio kada su pisane. Provedite ova četiri kroz svoj nacrt prije nego što ode u odbor i zabilježite gdje tekst nema odgovora.

Student koji je proveo nacrt kroz alat za prijevod. Pravilnik mora reći računa li se prijevod kao upotreba umjetne inteligencije i računa li se isto za studenta koji piše na drugom jeziku kao za onoga koji piše na prvom. Ako šuti, panel će improvizirati, a improvizacija je mjesto gdje počinje argument o pravednosti.

Netko tko je rabio umjetnu inteligenciju za skicu i sam napisao svaki odlomak. Prema pravilu koje pita je li umjetna inteligencija dotaknula rad, taj je student u istoj kategoriji kao onaj koji je generirao cijeli rad. Prema pravilu vezanom uz korake nije, i možete reći zašto. Ta je razlika konstrukt, a pravilnik ga mora imenovati.

Netko tko je generirao tekst i ne može ga objasniti. To je slučaj za koji je vaš postupak građen i onaj koji se rješava bez rezultata detektora.

Student koji rabi transkripciju jer je tipkanje nepouzdano. Imenujte [[assistive-technology|pomoćne]] alate kao zasebnu kategoriju s vlastitim putem, tako da prilagodba ne postane navod.

## Što administratori pogrešno razumiju o detektorima

**Objavljena stopa lažno pozitivnih rezultata dobavljača jest brojka rizika prema kojoj možete planirati proračun.** Vanderbilt je licencirao detektor koji je oglašavao stopu lažno pozitivnih od 1%, zatim je pokušao validirati tu brojku i nije uspio. Na 75.000 godišnjih radova 1% je značio otprilike 750 pogrešno označenih studenata. Sveučilište je isključilo alat ([[teichmann-detecting-undetectable-misconduct-2026]]). Stopa koju ne možete reproducirati na vlastitom korpusu marketinška je brojka, a pogrešno označeni studenti i dalje su vaši za obradu.

**Detekcija odvraća studente koji bi inače varali.** Odvraćanje djeluje kroz razlučivanje detektora između skrivene upotrebe i legitimnog rada, a ne kroz njegovu sirovu stopu hvatanja. Kada povećana osjetljivost daje više novih lažno pozitivnih nego novih istinski pozitivnih rezultata, snažniji nadzor prikrivanje čini relativno privlačnijim, pa kredibilitet trošite na studente koji nisu učinili ništa loše brže nego što prepoznajete one koji jesu ([[mohamed-temimi-assessment-imperfect-information-disclosure-2026]]). Metaanaliza Krova i sur., citirana u istom pregledu, nalazi da je samoefikasnost u negativnoj korelaciji s varanjem, dok stvarna sposobnost s njim uopće nije u obrnutoj korelaciji, pa sposobni studenti mogu varati kada procijene da je procjena nepravedna. Detekcija nije ni pouzdan instrument ni očito sredstvo odvraćanja ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

**Rezultat plus nekoliko pokazatelja daje slučaj.** Ne daje. Standard su dokazi koji zadovoljavaju prevagu vjerojatnosti, a rezultati u kombinaciji s pokazateljima, usporedbama stila, prosudbama LLM-a ili šutnjom i dalje ostaju ispod njega. Jedan test vrijedi primijeniti: biste li to obrazloženje izgovorili naglas na saslušanju ([[bassett-ai-detectors-education-2026]]).

**Licenca za detektor košta manje od preoblikovanja procjene.** Licenca je najmanja stavka, a nosi izloženost zaštiti podataka, nabavni posao i trajan priljev žalbi utemeljenih na instrumentu čija je pogreška obrascem vezana uz jezično podrijetlo. Nastavnici to iskustvo opisuju kao „sumnju bez pravne zaštite“, pa je proračunska stavka koja mijenja ishode kapacitet za provjeru i savjetovanje ([[best-response-student-ai-dialog-2026]]).

**Opća zabrana štiti ustanovu.** Preširoka pravila mogu ukinuti prilagodbu i pozvati argument o diskriminaciji koji ste htjeli izbjeći, jer je pogreška koju proizvode koncentrirana na prepoznatljive skupine, a ne ravnomjerno raspoređena ([[wright-transcription-not-generation-2026]], [[hadra-ai-detector-accuracy-efl-2026]]).

## Što će vam se vratiti

**„Naš dobavljač oglašava stopu lažno pozitivnih od 1%.“** Vanderbiltov licencirani detektor tvrdio je upravo to, a tvrdnja nije preživjela pokušaj sveučilišta da je validira. Neovisni usporedni testovi ne stavljaju nijedan alat iznad 80% točnosti ([[teichmann-detecting-undetectable-misconduct-2026]]). Zatražite studiju validacije i korpus na kojem je provedena, a zatim zatražite da je provedete sami.

**„Rabimo ga samo kao jedan dio dokaza.“** Standard su dokazi koji zadovoljavaju prevagu vjerojatnosti, a rezultat u kombinaciji s pokazateljima, usporedbama stila, prosudbama LLM-a ili šutnjom i dalje ga ne zadovoljava ([[bassett-ai-detectors-education-2026]]). Ako panel ne bi prihvatio obrazloženje izgovoreno naglas, spis ga ne bi smio sadržavati.

**„Ako prestanemo detektirati, varanje pobjeđuje.“** Varanje već prolazi pored ovih alata. 94% ubacenih radova umjetne inteligencije prošlo je neprimijećeno na živom online ispitu, humanizacija pobjeđuje detekciju u više od 96% slučajeva, a ugovorno varanje već nije ostavljalo pouzdan trag. Ono što detektori hvataju, s izmjerenom pouzdanošću, jest pošteno lagano uređivanje i proza onih koji nisu izvorni govornici ([[teichmann-detecting-undetectable-misconduct-2026]], [[karr-ai-detection-humanization-2026]]).

**„Rabimo ga samo interno, da započnemo razgovor.“** To je najmanje štetna upotreba i ona ipak nešto košta, jer su studenti koji će najvjerojatnije biti označeni upravo oni koji najmanje vjerojatno zloupotrebljavaju umjetnu inteligenciju. Sumnja tako pada na pogrešne ljude prije nego što razgovor uopće počne ([[teichmann-detecting-undetectable-misconduct-2026]]). Odgovor sveučilišta Grand Canyon bio je prestati uopće polaziti od sumnje ([[best-response-student-ai-dialog-2026]]).

**„Student koji nema što skrivati nema se čega bojati.“** Studija sa 642 sažetka našla je da je lagano uređivanje u skladu sa smjernicama označeno u 38 do 80% slučajeva na pragu od 0,50, a kazaška studija našla je 81,4% i 79,6% dokazivo ljudskih odlomaka označenih od objavljenih detektora ([[karr-ai-detection-humanization-2026]], [[kazakh-ai-text-detectors-2026]]). Čist dosje ne pruža zaštitu kada je signal stil. Zato i kazaški autori vlastite obrazovne stope označavaju kao najslabiju brojku u studiji, i zato ih ne biste smjeli citirati kao stopu za studentske eseje.

**„Možemo li jednostavno zahtijevati izjavu i smatrati da je nedostatak izjave krivnja?“** Nedostatak izjave nije dokaz skrivene upotrebe, a njegovo tretiranje kao dokaza prikrivanje čini racionalnim. Konkretni okviri vezani uz kognitivne faze, sa zaštitom istinitog otkrivanja od kazne, izvlače više informacija nego nadzor ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). Dokazi na ovoj stranici odnose se na to što proizvodi otkrivanje. Oni ne govore ništa o tome koliko varanja režim izjava sprječava.

## Što učiniti ovaj tjedan

**1.** Otvorite svoj postupak za nedolično ponašanje i pronađite svako mjesto na kojem bi rezultat detektora mogao pokrenuti korak. Napišite jednu rečenicu koja uklanja taj okidač i odnesite je onome tko je vlasnik dokumenta.

**2.** Pošaljite dobavljaču e-poruku sa zahtjevom za studijom validacije koja stoji iza oglašene stope pogrešaka, i pitajte koji je korpus rabljen.

**3.** Odaberite svoj zadatak s najvećim ulogom i dodajte jedan provjereni korak koji možete ocijeniti u vremenu koje imate.

**4.** Sastavite tri pitanja koja ćete postaviti označenom studentu, počevši od toga što je pokušavao tvrditi i kako je to provjerio.

**5.** Pošaljite odredbe o nabavi i pristupačnosti uredu koji potpisuje ugovore, s izričito navedenim uvjetima zadržavanja, upotrebe za treniranje i povrede.

## Kamo dalje

Prateća stranica o dizajnu jest [[reduce-ai-cheating|Kako mogu smanjiti varanje uz pomoć umjetne inteligencije na svom kolegiju?]], a [[redesign-assessment-ai-era|Preoblikovanje procjene u eri umjetne inteligencije]] vodi argument o procjeni dalje. [[course-ai-policy|Pravilnik kolegija o umjetnoj inteligenciji]] pokriva kako formulirati i prenijeti pravilnik kolegija, a [[ai-literacy|pismenost u području umjetne inteligencije]] pokriva što studenti trebaju znati da bi radili s ovim alatima bez gubljenja samog rada. Konceptualne stranice iza argumenta jesu [[academic-integrity|akademski integritet]], [[equity-in-ai-education|pravednost u obrazovanju uz umjetnu inteligenciju]] i [[legal-issues-and-risks|pravna pitanja i rizici]]; gore navedene odredbe specifične za detekciju institucionalni su sloj [[educational-policy-ai|obrazovne politike o umjetnoj inteligenciji]].
