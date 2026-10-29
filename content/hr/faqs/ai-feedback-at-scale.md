---
title: "Kako mi umjetna inteligencija može pomoći davati bolje povratne informacije u velikom opsegu?"
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
updated: "2026-10-29T14:24:49-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Šesti je tjedan. Pred vama je hrpa nacrta, rubrika u koju vjerujete i rastuća sumnja da trećinu vaših komentara studenti prelete pogledom i zaborave. Kolega spominje da alat sada komentira svaki nacrt unutar jednog sata. Sastanak odjela traži odgovor: je li to nadogradnja ili brži način da se proizvede tekst koji nitko ne čita?

Kratak odgovor za kolegu: povratna informacija umjetne inteligencije zaslužuje svoje mjesto po pokrivenosti, pravodobnosti i dosljednosti, unutar uskog raspona. Jezični rad na razini lekture i prvi prolaz komentara vođenih rubrikom vrijede automatizirati. Doseg je jeftini dio. U klaster-randomiziranom eksperimentu s 1.176 studenata prve godine refleksivni i hibridni dizajni nadmašili su izravnu UI kritiku u odgođenom [[transfer-of-learning|prijenosu]] bez umjetne inteligencije. U randomiziranom eksperimentu s esejima sa 70 studenata bolje ocijenjena UI povratna informacija nije proizvela bolje dorade od iskusnog nastavnika. Ono što student čini s komentarom odlučuje ishod, a [[feedback-literacy|pismenost o povratnoj informaciji]] razdvaja studente koji imaju koristi od onih koji prepisuju.

## Kratka verzija

**1.** Odlučite što se računa kao uspjeh prije nego što pokrenete bilo kakav pilot: kvaliteta dorade i odgođena izvedba bez pomoći, a ne tečnost komentara.

**2.** Razvrstajte vlastite komentare na ispravke na jezičnoj razini i prosudbe na razini zaključivanja. Samo je prva kategorija kandidat za automatizaciju.

**3.** Posložite izvore u faze. Prvo samovrednovanje, drugo povratna informacija vršnjaka, treće UI kritika. Dva izvora postavljena jedan uz drugi proizvode pasivno prihvaćanje.

**4.** Dajte modelu svoju rubriku i neka zaključuje korak po korak. Gola uputa proizvodi općenit rezultat.

**5.** Završnu poruku, ton i sve što postaje zapis zadržite kod čovjeka.

**6.** Predvidite sate koje ćete potrošiti na brisanje i kalibraciju i usporedite ih sa satima koje ste oslobodili.

## Odlučite što se računa kao uspjeh prije nego što pokrenete pilot

Mamljiv je pokazatelj kvaliteta onoga što model napiše. To je ujedno pokazatelj koji zavarava.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia i sur. (2026)]] randomizirali su 70 studenata koji su pisali argumentacijske eseje na perzijskom u tri skupine. Poticanje lancem misli proizvelo je znatno bolje ocijenjenu povratnu informaciju (M = 12,90) od poticanja bez primjera (M = 11,25, p = 0,01) i od iskusnog ljudskog nastavnika (M = 11,20, p = 0,008). Skupina s lancem misli nije znatno više doradila svoje eseje od skupine s nastavnikovom povratnom informacijom, koja je postigla usporedive dobitke. Bolji komentari, iste dorade. Ako je vaš kriterij uspjeha kvaliteta komentara, ta studija čita se kao pobjeda. Ako je kriterij ono što se promijenilo u eseju, ne čita se tako.

Dva druga signala uljepšavaju pilot koji ide loše, pa ih unaprijed odredite. Prvi je zadovoljstvo studenata. U sveučilišnom pilotu na Deakinu o kojem izvješćuju [[tubino-adachi-ai-automated-feedback-literacy|Tubino i Adachi (2022)]], pozitivne prosječne ocjene postojale su istodobno s pogreškama koje su studenti označili, pa anketa sa zadovoljnim licima nije dokaz točnosti. Drugi je upotreba. Deakinov alat bio je neobavezan, a upotreba je u prosjeku iznosila otprilike 13% studenata preddiplomskog i 12% postdiplomskog studija, iako je pristup imalo gotovo 4.000 studenata. Proaktivni, visokopostignući studenti rabili su ga više. To je ono što vam donosi to što je alat dostupan.

Mjera ishoda koja se drži jest kvaliteta dorade plus odgođena izvedba bez umjetne inteligencije. Višestruke ponovne predaje istoga dana upotrebljiv su trag o tome je li student uopće bio uključen. Nisu dokaz da je išta naučeno.

## Razvrstajte komentare prije nego što ih automatizirate

Uzmite svoj posljednji skup komentara i podijelite ga na dvoje: ispravke rečenica i prosudbe o mišljenju. Ta podjela govori vam što automatizirati i uža je nego što dobavljači impliciraju.

Deakinov pilot proveden je 2021. s alatom za automatiziranu povratnu informaciju FeedbackFruits u 29 kolegija i s gotovo 4.000 studenata. Alat radi na značajkama teksta na mikrorazini: duljina rečenice, interpunkcija, gramatika, struktura teksta. To podupire fazu lekture, u kojoj nastavnik postavlja parametre, student samostalno rabi alat, a povratna informacija stiže na vrijeme da bi bila djelotvorna. Podjela rada je ono što se skalira, a ne model.

Komentari na razini prosudbe mjesto su na kojem žive načini neuspjeha. [[learner-centered-feedback-ai|Aldino i sur. (2026)]] prikupili su probleme na strani nastavnika od 21 nastavnika u visokom obrazovanju: nedosljedan ton (n = 7), moguće netočne informacije (n = 5) i pitanja povjerenja (n = 5). Njihov trud u doradi otišao je na brisanje pretjerane hvale i općenitih prijedloga, a ne na dodavanje sadržaja. Taj popis vaš je posao pregleda i tu odlaze sati.

## Posložite izvore u faze umjesto da ih slažete jedan na drugi

Najsnažniji dokaz o dizajnu dolazi iz višelokacijskog, klaster-randomiziranog, longitudinalnog terenskog eksperimenta: 1.176 studenata prve godine u 48 skupina na 4 sveučilišta i u 3 [[stem-education|znanstvena]] područja, randomiziranih na razini skupine u uvjete samo vršnjaci, izravna generativna UI, refleksivna generativna UI i hibridni uvjet ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Refleksivni je uvjet zahtijevao samovrednovanje prije UI kritike. Hibridni je proveo samovrednovanje, zatim povratnu informaciju vršnjaka, zatim kritiku generativne umjetne inteligencije. Hibridni je proizveo najveće dobitke u kvaliteti argumentacije i najjasniju prednost u pojmovnom učenju. Refleksivni i hibridni oboje su proizveli snažnije prihvaćanje povratne informacije i više [[self-regulated-learning|samoreguliranog učenja]] od izravne generativne umjetne inteligencije, a oboje su je nadmašili u odgođenom prijenosu bez umjetne inteligencije. Izravna generativna umjetna inteligencija doista je podigla neposrednu kvalitetu argumentacije iznad povratne informacije vršnjaka, što je prednost koju ima, i to je učinila uz slabiji prijenos.

Mehanizam objašnjava zašto slijed važniji od alata. Izravna kritika poziva na pasivno prihvaćanje: student pročita presudu i primijeni je. Refleksivni i hibridni dizajni prisiljavaju studenta da protumači komentar, usporedi ga s kriterijima, procijeni njegovu relevantnost i zatim doradi. Obrazovna vrijednost manje ovisi o pristupu umjetnoj inteligenciji nego o tome čuva li okruženje povratne informacije [[agency|djelovanje učenika]] i [[evaluative-judgment|evaluacijsku prosudbu]] tijekom dorade.

Povratna informacija vršnjaka zaslužuje vlastito mjesto u slijedu. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen i Yan (2026)]] proveli su dva paralelna razreda engleskog (N = 118 studenata prve godine u Kini; generativna UI n = 56, vršnjaci n = 62) kroz tri ciklusa samovrednovanja tijekom jednog semestra. Postupna potpora generativne umjetne inteligencije poboljšala je pismenost o povratnoj informaciji neznatno, ali značajno u odnosu na ljudski pregled vršnjaka (ANCOVA p = 0,049, ηp² = 0,03). Studenti s generativnom umjetnom inteligencijom iterativno su dotjerivali poticaje i provjeravali ili osporavali netočan rezultat. Studenti u skupini s vršnjacima birali su izvore prema društvenoj pogodnosti, a njihovu je evaluacijsku prosudbu iskrivljavala pristranost prijateljstva. Pregled vršnjaka zadržao je zasebnu vrijednost za svijest o publici, zbog čega autori predlažu višefazne dizajne s anonimnom povratnom informacijom vršnjaka, a ne zamjenu.

Prednost Gu i sur. bila je mala i čitaju je kao stvarnu, ali ne i sama po sebi preobražavajuću. Postupna potpora nastavnika, smjernice za poticaje i radni listovi obavili su potporni posao.

## Dajte modelu rubriku, a zatim neka pokaže korake

Generiranje s upućivanjem na rubriku automatizirani je dio.

Farrokhniin dobitak u kvaliteti došao je od poticaja s lancem misli koji je model proveo kroz evaluaciju korak po korak prema rubriki argumentacije, a ne od gole upute da da povratnu informaciju. Gu i sur. dali su svojoj skupini s generativnom umjetnom inteligencijom ChatGPT-4o s unaprijed uvježbanim rubrikama i smjernicama za poticaje, što je omogućilo da se rezultat provjeri prema navedenim kriterijima. U oba slučaja poticaj je mjesto na kojem vaši kriteriji ulaze u sustav, a trag zaključivanja omogućuje vam da vidite je li ih model primijenio.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson i Yan (2025)]] čine kvalitetu poticaja stožerom cijelog procesa. Neodređeni poticaji daju općenit, beskoristan rezultat, a generirani komentari mogu biti halucinirani, pristrani ili preklapajući, što evaluacijsku prosudbu vraća čitatelju. Kalibracija je još oštrija. U Farrokhnia i sur. kvaliteta UI povratne informacije bila je značajno povezana sa snagom studentova početnog nacrta, dok kvaliteta nastavnikove povratne informacije nije. Nastavnik je kalibrirao dosljednije. Opseg se skalira. Kalibracija ne.

## Zadržite posljednju riječ i zapis kod čovjeka

[[becerra-aicofe-feedback-2026|Becerra, Palma i Cobos (2026)]] opisuju AICoFE, koji pokreće tri neovisno fino podešena modela (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) preko rezultata rubrike i kvalitativnih zapažanja kako bi proizveo neovisne komentare na nacrt. Nastavnik zatim sastavlja završnu poruku odabirom rečenica ili odlomaka, uz legendu koja pokazuje koji je model pridonio čime. Model piše nacrt. Nastavnik dostavlja, a dostavljeno potpisuje jedna osoba koja je nacrt pročitala.

Aldino i sur. nalaze isti obrazac pomozi pa provjeri u uobičajenoj praksi. Komponenta strojnog učenja najčešće je označila „Ispunjava cilj učenja“ kao nedostajući (20 od 21 nastavnika ga je izostavilo; 16 je prihvatilo oznaku) i „Odnos studenta i nastavnika“ (14 ga je izostavilo; 12 je prihvatilo). Nastavnici su o svakom prijedlogu odlučivali profesionalnom prosudbom, što je smisao uključivanja njih u proces.

Dvanaest od 21 nastavnika u Aldino i sur. napravilo je dodatne ispravke na razini rečenice, a prevladavajući je obrazac bila kalibracija tona: smanjivanje hvale (f = 11), uklanjanje prijedloga (f = 9), uklanjanje ohrabrenja (f = 8). Ispravci su se grupirali u relacijskoj dimenziji, posebno u odnosu studenta i nastavnika (f = 24). Štitili su autentičnost i profesionalni glas, a taj se rad ne automatizira.

## Naučite studente čitati komentar

Pismenost o povratnoj informaciji preduvjet je i nejednako je raspoređena.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths i Lodge (2026)]] dali su 32 studenta psihologije da naprave 25-minutni zadatak eseja snimljen snimanjem zaslona, s neograničenim pristupom ChatGPT-u, a zatim su pogledali snimku u intervjuu potaknutom videom. Pismenost o povratnoj informaciji bila je jedini značajni pozitivni prediktor ocjene eseja (β = 0,46, p = 0,017). Učestalost upotrebe generativne umjetne inteligencije, [[trust|pouzdanost izvora]] i [[prior-knowledge|prethodno znanje]] nisu predviđali izvedbu, što navode i [[feedback-futures-genai|Zhan, Wood, Carless i Yan (2026)]] u uvodniku posebnoga izdanja. Manje od trećine studenata usporedilo je UI rezultat s drugim internetskim izvorom. Polovica je izrazila namjerno izbjegavanje umjetne inteligencije zbog [[academic-integrity|akademske čestitosti]] ili zato što su esej htjeli napisati svojim riječima. Većina je tražila povratnu informaciju na razini zadatka, koja se slabo prenosi na druge zadatke.

Krajnosti su vidljive u paru pisaca IELTS-a koje opisuju Zhan i sur. Student s niskom pismenošću napisao je neodređen poticaj, dobio općenitu povratnu informaciju, povjerovao joj ili je prekomjerno prepisao i površno se uključio. Student s visokom pismenošću napisao je poticaj s upućivanjem na kriterije, nastavio dijalog, unakrsno provjerio izvore i pratio dorade. Razlika je bila u pouci i navici, a ne u pristupu alatu.

Recite studentima izravno da komentari modela mogu biti halucinirani, pristrani ili preklapajući i da student nosi doradu. Uokvirite rezultat kao nacrt mišljenja koji treba prosuditi, a ne kao odgovor koji treba prepisati. Zatim zatražite usporedbu, jer je manje od trećine studenata čini bez poticaja.

## U čemu nastavnici griješe u vezi s ovim

Više komentara znači više povratne informacije. Komentare je jeftino proizvesti, a skupo ih je upiti, a ograničenje je na strani studenta u toj petlji. Bolje ocijenjeni UI komentari u Farrokhnia i sur. nisu proizveli ništa više dorade od nastavnikovih komentara.

Bolji model riješit će općenit rezultat. Neuspjesi Deakinova alata bili su neuspjesi opsega: značajke na razini rečenice, uski raspon lekture. Zhan i sur. rješenje smještaju u poticaj, rubriku ili čovjeka, a ne u veći model. Par pisaca IELTS-a je demonstracija: isti alat, drukčije navike, drukčiji rezultati.

To što je alat dostupan jest intervencija. Upotreba je iznosila otprilike 13% preddiplomskih i 12% postdiplomskih studenata kada je alat bio neobavezan. Ostatak pitanja dizajna jest što se događa s ostalih 87%.

Ušteda vremena automatska je. Na pitanje što im je alat za UI povratnu informaciju donio, 21 nastavnik rijetko je naveo uštedu vremena (n = 2). Mnogo su češće naveli refleksiju (n = 14), bolji jezik i strukturu (n = 11) i prepoznavanje nedostajućih komponenti (n = 10). Dorada (f = 32) i uklanjanje (f = 27) prevladavali su u njihovu radu na ispravcima, uz rijetko dodavanje (f = 8). Ono što nastaje jest nacrt i dijagnostički poticaj. Ono što također nastaje jest rad na pregledu, kalibraciji i provjeri. [[ai-save-instructor-time|Pitanje radnog opterećenja]] najčešće je obećano i otpisano, a generativna umjetna inteligencija raspoređuje nastavnički rad na drugu stranu, umjesto da ga uklanja.

Ocjene zadovoljstva kažu vam da su komentari točni. U Deakinovu pilotu pozitivne prosječne ocjene postojale su istodobno s pogreškama koje su studenti označili. Uzmite uzorak rezultata i usporedite ga s vlastitim čitanjem istih nacrta te zabilježite gdje je model bio općenit, pogrešan ili laskav.

## Što će vam se vratiti

**„UI povratna informacija nije osobna.“** Često točno i to je razlog da posljednja riječ ostane kod čovjeka. AICoFE postoji zato što općenita modelova proza nije ono što student treba dobiti: nastavnik odabire, uređuje i potpisuje završnu poruku. 21 nastavnik u Aldino i sur. prepisao je ton iz istog razloga. Personalizacija je vaš posao u ovom dizajnu, a model obavlja pripremni rad.

**„Moji studenti ionako neće čitati povratnu informaciju.“** Čitaju manje nego što se nadamo, a dokazi kažu da je rješenje u dizajnu, a ne u količini. Prihvaćanje u Deakinovu pilotu iznosilo je otprilike 13% i 12%. Bolje ocijenjeni komentari u Farrokhnia i sur. nisu proizveli dodatnu doradu. Kazaljku je pomaknuo slijed koji prisiljava na uključenost, samovrednovanje pa povratna informacija vršnjaka pa UI kritika, uz tri ciklusa dorade tijekom semestra koji su proizveli mjerljive razlike u pismenosti o povratnoj informaciji.

**„To nije ono što studenti plaćaju.“** Tada spriječite da umjetna inteligencija postane jedini glas koji od vas čuju. Obranjiva inačica daje studentima više trenutaka povratne informacije, dok vi svoje sate trošite na dijelove koji zahtijevaju prosudbu: posljednju riječ, kalibraciju, komentare koji nose vaš autoritet. Ono što studenti gube pri nemarnoj primjeni jest koherentnost između kriterija, komentara i ishoda. Odredite komplementarnost kroz slijed, usporedbu, uređivanje i upravljanje, i prigovor gubi snagu. Ostavite dva izvora jedan uz drugi i ne gubi snagu.

**„Nemam vremena pregledati sve što model napiše.“** Tada ne pregledavajte sve. Automatizirajte raspon u kojem je pogreške jeftino uhvatiti, jezični rad na razini rečenice, i uzmite uzorke rezultata na razini prosudbe prema nacrtima koje ste već ocijenili. Aldinovi brojevi kažu što tražiti: ton, netočne informacije, pretjeranu hvalu, preklapanje.

## Što učiniti ovaj tjedan

**1.** Razvrstajte vlastiti posljednji skup komentara na ispravke na jezičnoj razini i prosudbe na razini zaključivanja i prebrojite svaku hrpu.

**2.** Napišite poticaj korak po korak s upućivanjem na rubriku koji biste dali modelu i testirajte ga na tri nacrta koja ste već ocijenili.

**3.** Uzmite uzorak rezultata i usporedite ga sa svojim komentarima te zabilježite gdje je model bio općenit, pogrešan ili laskav.

**4.** Posložite jedan zadatak kao samovrednovanje, zatim povratnu informaciju vršnjaka, zatim UI kritiku i recite studentima da je umjetna inteligencija nacrt mišljenja koji se od njih očekuje da ospore.

**5.** Zatražite jednu usporedbu s drugim izvorom ili s kriterijima, jer manje od trećine studenata to čini bez poticaja.

**6.** Zabilježite koliko je završne povratne informacije došlo od modela i koliko ste toga promijenili. AICoFEovo praćenje odabira model je za takav zapis.

**7.** Pazite na podjelu između stručnjaka i početnika. Nastavnici s više od pet godina iskustva prijavili su više problema s rezultatom alata od manje iskusnih kolega, koji su cijenili postupnu potporu. Ako vaše iskusne kolege vide više neuspjeha od vas, to je informacija o vašoj vlastitoj kalibraciji.

## Kamo dalje

[[feedback|Povratna informacija]] krovni je pojam za cijeli sustav: pružanje, petlja, prihvaćanje i kontekst ocjenjivanja. [[ai-feedback-quality|Kvaliteta UI povratne informacije]] pokriva što generirane komentare čini točnima, korisnima, pravodobnima i pedagoški utemeljenima, a ova je stranica praktična sredina, o tome koje kombinacije tih dijelova proizvode bolju povratnu informaciju u velikom opsegu.

Pitanja o tome što bi ocjena trebala značiti kada je umjetna inteligencija uključena, uključujući zamjenu konstrukta, autentificirane dokaze o procesu i pravila čestitosti, pripadaju stranicama [[redesign-assessment-ai-era|redizajn ocjenjivanja u eri umjetne inteligencije]] i [[assessment-validity|valjanost ocjenjivanja]], a ne ovoj. Za poseban slučaj poučavanja pisanja vidi [[writing-instruction-ai-best-practices|najbolje prakse za poučavanje pisanja u kontekstu umjetne inteligencije]].
