---
title: "Kako poučiti studente da provjere rezultate umjetne inteligencije?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T14:24:50-04:00"
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Tjedan je prije roka za ocjene i dva rada citiraju izvore koji ne postoje. Oba studenta kažu da su provjerili. Jedan je otvorio poveznicu. Drugi je pročitao odlomak i zaključio da zvuči ispravno. Već ste ovom kolegiju rekli da provjere što im chatbot daje, a to što ste rekli nije proizvelo ponašanje.

Provjera je slijed koji možete ugraditi u zadatak. Odlučite što se računa kao točno prije nego zadatak počne, neka student u pisanom obliku zapiše očekivanje, pošaljite ga na zapis umjesto na njegov dojam o tekstu i ocjenjujte zapis koji proizvede. Redak u rubrici koji kaže „provjerio izvore“ ne mjeri ništa od toga.

## Kratka verzija

**1.** Najprije napišite ključ za ocjenjivanje. Provjera treba nešto prema čemu se razrješava, a većina zadataka provjere nikada ne odredi što je točan rezultat.

**2.** Zatražite predviđanje prije nego se rezultat pojavi, da studentovo rezoniranje postoji na papiru prije nego ga alat može prebrisati.

**3.** Imenujte metu svake provjere: popis autora, mjesto objave, godinu, konkretan broj, konkretan korak. „Pobrinite se da je točno“ nije provjera.

**4.** Razdvojite provjeru koju može izvesti stroj od prosudbe koju može donijeti samo čitatelj i poučite studente koju od njih rade.

**5.** Ocjenjujte zapis prema ključu, a ne prema trudu, da provjera kao predstava ne zasluži ništa.

**6.** Predvidite provjeru unutar zadatka. Vremenski pritisak dokumentiran je razlog zašto je studenti preskaču.

## Odlučite što znači točno prije nego bilo tko bilo što provjeri

[[verification-quality-reliance-calibration-genai-2026|Wei i Shang (2026)]], pregledavši 493 deduplicirana zapisa i mapiravši 14 prioritetnih empirijskih studija, razdvajaju sedam stvari koje „kritična upotreba umjetne inteligencije“ sabija u jednu: epistemijsko vrednovanje, pokretanje provjere, kvalitetu procesa, uspjeh provjere, odluke o oslanjanju, neposrednu izvedbu u zadatku i samostalno učenje. Vaša rubrika kaže „provjerio izvore“, što stoji na drugom koraku i ne govori vam ništa o tome je li provjera bila kompetentna ni je li promijenila studentov odgovor. Pokretanje nije uspjeh. Jak proces može završiti nezaključno, slab može stići do točnog odgovora, a student koji je pokrenuo pretragu i ostao zbunjen dobiva isto kao onaj koji je pitanje razriješio.

Isti pregled povlači drugu crtu, između [[trust|povjerenja]] i oslanjanja. [[trust-calibration|Kalibracija oslanjanja]] pita je li odluka o oslanjanju bila primjerena s obzirom na stvarnu kvalitetu rezultata, što prosudbu veže uz jednu odluku i jedan rezultat. Jedna revidirana studija našla je da su lažne informacije ChatGPT-a pomaknule prijavljeno povjerenje sudionika i nikada nije zabilježila jesu li poslije prihvatili ili odbili konkretnu preporuku. Druga je bilježila odluke o prihvaćanju i odbijanju na [[feedback|povratnim informacijama]] ChatGPT-a kod 78 studenata prevođenja, ali bez neovisne stručne procjene prihvaćanje se ne može nazvati primjerenim, a odbijanje opravdanim. Bez istinitog stanja o kvaliteti rezultata oslanjanje se uopće ne može klasificirati.

To je dizajnerska posljedica i prvo što treba popraviti. Prije nego postavite zadatak provjere, napišite dva kratka opisa: kako izgleda točan rezultat za ovaj zadatak i kako izgleda uvjerljiv, ali pogrešan rezultat. Po jedan je dovoljan. Studenti tada imaju mjerilo prema kojem provjeravaju, a vi imate nešto prema čemu provjeru ocjenjujete, osim dojma o tome djeluje li student pažljivo.

## Neka se izjasne prije nego alat odgovori

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] gradi mjerni program oko načela *predvidi prije nego pokreneš*: učenik izjavi što bi se trebalo dogoditi, a zatim se ponašanje artefakta prosuduje prema tom predviđanju na disciplinarnim osnovama, a ne po tome radi li. Rezoniranje postoji prije rezultata, i to ga čini ocjenjivim.

Njegov pregled 24 studije našao je isti alat kako daje suprotne ishode pod različitim strukturama zadatka. Uobičajena postavka s ChatGPT-om završila je znatno niže u postignuću, [[self-efficacy|samodjelotvornosti]] i zanesenosti, dok je uvjet koji je dodao zahtjeve provjere i module refleksije o pogreškama pokazao jače [[critical-thinking|mišljenje višeg reda]]. Alat je bio isti u svim tim uvjetima. Razlikovalo se samo to je li zadatak tražio od studenta da zauzme stav koji alat može osporiti.

U praksi je to jedan redak na uputi za zadatak: prije nego otvorite alat, zapišite što očekujete da će reći i zašto. Zatim usporedite. Dva studenta mogu proizvesti isti odlomak, a samo jedan od njih može objasniti gdje odlomak odstupa od onoga što su predvidjeli.

## Pošaljite ih na zapis

[[citation-errors-hallucinations-computing-education-2026|Denny i sur. (2026)]] pratili su 113.588 referenci iz 5.225 radova o računalnom obrazovanju objavljenih od 2021. i ručno provjerili 828 sumnjivih zapisa. Našli su 30 koji sadrže provjerljivo izmišljene bibliografske podatke u 14 radova, svi iz 2025. i 2026. Trinaest je bilo posve izmišljeno. Ostalih 17 spojilo je stvaran naslov s izmišljenim ili netočnim autorstvom, mjestom objave ili godinom. Na tehničkom simpoziju SIGCSE broj je porastao s 3 u zborniku za 2025. na 17 u 2026., ili 2,3% radova u tom godišnjem zborniku.

Polja s autorima griješe češće od bilo kojeg drugog dijela generirane reference. Taj jedan nalaz govori vam što tražiti. „Otvorite izvor i pročitajte popis autora“ cilja polje koje najvjerojatnije nije točno i daje činjenicu koju student ili ima ili nema. „Pobrinite se da su izvori stvarni“ daje uvjeravanje. Tražite od studenata da potvrde autore, mjesto objave i godinu prema samom zapisu. Rad traži da se svako citirano djelo provjeri i da svaki automatizirani provjerivač ostane [[human-in-the-loop-ai|s čovjekom u petlji]], što je upravo navika koju zahtjev za citiranjem uvježbava.

## Razdvojite provjeru koju može izvesti stroj od prosudbe koju može donijeti samo čitatelj

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] postavlja branjivu granicu za ono što se smije provjeravati mehanički: dokumentirani kriteriji, usporedba s utvrđenim znanjem bez interpretativne prosudbe i jedan točan odgovor ili unaprijed određene prihvatljive alternative. Datumi, formule, citati i izračuni prolaze tu granicu. Sve interpretativno pada na toj granici, i tu je studentovo vlastito čitanje instrument provjere.

Gousopoulos istu podjelu formalizira kao problem detekcije signala s dva neovisna parametra. Osjetljivost je sposobnost razlikovanja točnog od manjkavog rezultata; kriterij je mjesto na kojem učenik postavlja prag za odbijanje. Pretjerano oslanjanje dijeli se duž te crte. Upozorenja, kontrolni popisi i poticaji na halucinacije pomiču kriterij, pa se mijenja to kada student odbija. Poduka u domeni, razrađene usporedbe i vježba s usađenim pogreškama podižu osjetljivost, jer učenik tada može razlikovati. Student koji prihvaća manjkav rezultat može imati problem s kriterijem ili problem s osjetljivošću, a to dvoje traži različitu nastavu.

Preduvjet je neugodan. Poduka o provjeri obrazovno je korisna samo tamo gdje osjetljivost može biti veća od nule, a to traži dovoljno znanja u domeni da se točan rezultat razlikuje od netočnog. U istom pregledu početnici koji su trebali objasniti kod koji je generirao [[llm|LLM]] uspjeli su u otprilike trećini zadataka, pa je prosudba povratnih informacija ili koda prema vlastitom rezoniranju stvarna provjera samo tamo gdje to rezoniranje ima supstancu. Ako vaši studenti još ne mogu samostalno obaviti disciplinarno mišljenje, više upozorenja ne kupuju ništa. Poučite sadržaj i na njega pričvrstite provjeru.

Još jedno upozorenje pripada u dizajn: intervencije koje smanjuju neprimjereno prihvaćanje moraju se provjeriti i na neželjeno odbijanje ispravne pomoći. Ostavite prostor da student prihvati dobar rezultat uz naveden razlog.

## Ocjenjujte provjeru, a da je ne pretvorite u nadzor

Gousopoulos izvodi posljedicu izravno. Ako umjetna inteligencija može proizvesti artefakt, artefakt ne može biti procjena, pa se vrednovanje premješta na specifikaciju, rezoniranje o validaciji i interpretaciju. Njegov konstrukt autorskog modela ima četiri aspekta, specifikaciju, konceptualni model, provjeru i interpretaciju, na četiri poredana stupnja od delegiranog do autorskog. Autorski stupanj traži provjerljivu specifikaciju prije prvog poticaja, odbijanje rezultata na disciplinarnim osnovama s navedenim razlogom i interpretaciju koja nadilazi vlastiti izvještaj artefakta o sebi.

Rubrika se oslanja na materijale koje konstrukcijski zadatak ionako generira, pa je isti instrument i [[formative-assessment|formativna procjena]] i istraživačka mjera. To odgovara na brigu o suvišnom poslu: ocjenjujete nusproizvod zadatka koji ste već zadali. Uz to pripadaju dva ograničenja. Nijedna studija među 14 prioritetnih slučajeva Weija i Shanga nije mjerila uspjeh provjere i sljedeću odluku o oslanjanju zajedno, a malo ih je pratilo neposrednu izvedbu odgođenim zadržavanjem ili [[transfer-of-learning|prijenosom]], pa rubrika počiva na analitičkoj karti, a ne na validiranom kauzalnom slijedu.

Tri odluke sprečavaju da to postane nadzor. Ocjenjujte provjeru prema prosudbeno utvrđenoj kvaliteti, a ne prema trudu, jer inače gradite poticaj za izvođenje provjere. Navedite podrijetlo, kako traži Venetsanos: studenti trebaju znati koji su dijelovi povratnih informacija koje dobivaju strojno provjereni, koji su prosudbeno ocijenjeni i da ljudska prosudba ima primat, jer ne mogu odvagnuti povratne informacije koje ne mogu smjestiti. I držite provedbu podalje od detekcijskih alata. [[bassett-ai-detectors-education-2026|Bassett i sur. (2026)]] tvrde da se [[ai-detection|otkrivanje umjetne inteligencije]] u obrazovanju uopće ne bi smjelo rabiti: njegove su procjene vjerojatnosne i ne mogu se neovisno provjeriti jer je stvarno podrijetlo teksta nepoznato, njegovi rezultati ne zadovoljavaju standard ravnoteže vjerojatnosti koji traže istrage o čestitosti, a dihotomija čovjek nasuprot umjetnoj inteligenciji besmislena je za rad nastao s umjetnom inteligencijom, a ne od nje. Njihov je zaključak da detekcija „ne štiti akademsku čestitost; ona je potkopava“. Nadzorni režimi njeguju sumnju i troše studentsko [[trust|povjerenje]]. Držite dva smisla detekcije odvojenima. Otkrivanje teksta koji je generirala umjetna inteligencija ovdje nema branjivu dokaznu ulogu; poučavanje studenata da otkriju pogreške u rezultatima umjetne inteligencije cijela je vježba.

Ta je podjela arhitektonska i vrijedi je reći studentima. [[vetting-dual-llm-safety-education|Li, Zhang i Botelho (2026)]] provjeravaju rezultat drugim modelom, umjesto da provjeru ugrade u generator. Student koji vidi zašto to tako može vidjeti i zašto „alat je rekao da je točno“ nije argument provjere.

## Ako dizajnirate kolegij, a ne predajete ga

Tri nalaza gore pripadaju u izgradnju kolegija, gdje do njih nastavnik koji radi sam neće doći.

Prvi je dijagnostika. Provedite zadatak s usađenim pogreškama: dvadeset čestica, osam s pogreškom na razini domene. Govori vam mogu li studenti uopće razlikovati, prije nego potrošite semestar poučavajući kriterij koji ne mogu upotrijebiti. Razred koji promašuje usađene pogreške treba pregled sadržaja, što god silabus govorio o kritičnoj upotrebi.

Drugi je smještaj upozorenja. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings i Park (2026)]] pokazali su generičku preventivnu poruku neposredno prije dva zadatka skupini od 100 studenata u Sjedinjenim Državama, 40 domaćih i 60 međunarodnih koji uče engleski kao strani jezik. Inokulirani su studenti bili znatno skloniji provjeriti zadatak sažetka akademskog izvora (M = 0,34 prema 0,18), dok se samoprijavljena namjera provjere nije pomaknula. Učinak je ovisio i o zadatku: pojavio se kod zadatka sažetka izvora, ali ne ujednačeno kod matematičkog kviza o potenciranju i množenju velikih brojeva. Stavite upozorenje na mjesto upotrebe, po vrsti zadatka, a ne jednom u silabus ili u uvodni modul.

Treći je terminiranje. Silabus koji provjeru ostavlja bez termina kaže da je neobavezna, a vremenski pritisak dokumentiran je razlog zašto je studenti preskaču. Provjera koja živi unutar zadatka, s pridruženim ocijenjenim artefaktom, događa se. Provjera koja živi u odlomku politike ne događa se.

## Ako ste student koji ovo čita

Četiri poteza pokrivaju većinu onoga što istraživanje od vas traži.

Napišite svoje očekivanje prije nego pošaljete poticaj. Jedna rečenica o tome kakav bi odgovor trebao biti, zatim usporedite rezultat s njim.

Otvorite izvor. Pročitajte popis autora, mjesto objave i godinu prema zapisu, jer polje s autorima najčešće je mjesto na kojem generirane reference griješe.

Za sve interpretativno napišite razlog vlastitim riječima. Izmišljen razlog jednako je vidljiv kao izmišljen citat.

Ne vjerujte osjećaju da se tekst dobro čita. Početnici koji su trebali objasniti kod koji je generirao LLM uspjeli su u otprilike trećini zadataka, a terenska studija razgovora studenata s ChatGPT-om o kvizu našla je da je praćenje ispravnih smjernica ipak dalo pogrešan odgovor. Ono što možete provjeriti uže je od onoga što možete pročitati.

## Što nastavnici pogrešno shvaćaju u vezi s ovim

**„Već sam im rekao da provjere izvore.“** Upozorenje traži dispoziciju. Pažljivi je studenti imaju, užurbani ne, a u toj rečenici nema ničega po čemu student može postupiti u 11 sati navečer s rezultatom na zaslonu koji se čita posve dobro.

**„Redak u rubrici o provjeri izvora to pokriva.“** Taj redak stoji na pokretanju i ne govori ništa o kvaliteti procesa ni o uspjehu. Student koji je pokrenuo jednu pretragu i odustao dobiva isto kao student koji je pitanje razriješio, pa rubrika nagrađuje gestu.

**„Ako čitaju pažljivo, uhvatit će pogreške.“** Tečnost nosi prosudbu. Revidirana literatura pokazuje početnike na otprilike trećini uspjeha u objašnjavanju generiranog koda, a terenska studija zabilježila je pogrešan odgovor koji je stigao kroz ispravne smjernice.

**„Studenti koji kažu da će provjeriti, provjere.“** U studiji Vua, Cummingsa i Parka samoprijavljene namjere nisu se pomaknule, dok je provedeno ponašanje pomaknuto (M = 0,34 prema 0,18). Ocjenjujte ponašanje, koje se pomaknulo.

**„Studenti koji preskoče provjeru su oni kojima nije stalo.“** [[trust-calibration-chatbots-design-problem-2026|Jaidka i Cai (2026)]] križaju sposobnost provjere s motivacijom za provjeru, a profili traže različite lijekove. Student visoke sposobnosti i niske motivacije sklon je samozadovoljnom pretjeranom povjerenju. Student niske sposobnosti i niske motivacije najizloženiji je. Dva studenta koja padnu na istoj provjeri mogu trebati suprotnu nastavu, a [[prior-knowledge|prethodno znanje]] odlučuje kojega gledate.

**„Više upozorenja popravit će studente koji ne razlikuju.“** Upozorenja pomiču kriterij. Ne podižu osjetljivost, a osjetljivost je ono što razlikuje studenta koji uoči manjkavost od onoga koji ne može.

**„Detektor podupire politiku.“** Prema dokazima gore, rezultat detektora ne zadovoljava standard koji traži slučaj čestitosti, podjela čovjek nasuprot umjetnoj inteligenciji ne vrijedi za rad nastao s umjetnom inteligencijom, a režim vas košta [[trust|povjerenja]] koje trebate da bi studenti ikoga prijavili.

## Što će vam se vratiti

**„Mogu to napraviti samo zbog ocjene.“** Djelomice točno, pa ocjenjujte materijale koje umjetna inteligencija ne može proizvesti u studentovo ime. Specifikacija napisana prije prvog poticaja, predviđanje zabilježeno prije nego artefakt radi, popis izvora provjeren prema zapisu, naveden disciplinarni razlog za odbijanje: svaki traži od studenta da zauzme stav koji generator ne može dati. Izmišljen razlog jednako je vidljiv kao izmišljen citat. Gdje student nema znanja u domeni prema kojem bi provjeravao, provjera je predstava i nijedna je rubrika ne spašava, što je argument za to da se sadržaj pouči prvo.

**„U silabusu nema vremena.“** Preventivno upozorenje jedna je poruka prije zadatka. Zadatak s usađenim pogreškama rabi kviz koji ionako dajete. Rubrika se oslanja na materijale koje zadatak već generira, pa košta vrijeme ocjenjivanja na dokazima koje inače ne biste imali. Alternativa košta više: neprovjereni radovi, izmišljene reference i razgovori o čestitosti koji slijede.

**„Alat je obično u pravu.“** Onda je provjera jeftina i iznimke su poanta. Polja s autorima griješe češće od bilo kojeg drugog dijela generirane reference, 17 od 30 izmišljenih stavki spojilo je stvaran naslov s pogrešnim autorstvom, mjestom objave ili godinom, a 17 se pojavilo u zborniku jednoga simpozija u jednoj godini. Točnost u dijelovima koje slučajno primijetite ne govori ništa o dijelovima koje ne primjećujete.

**„Moji studenti ne znaju dovoljno da prosude rezultat.“** To je prag osjetljivosti i stvaran je. Gousopoulos predviđa da poduka o provjeri pada ispod razine znanja u domeni i napominje da neke domene daju vanjski kriterij, među njima fizika, kemija, ekologija i epidemiologija, dok povijest, književnost i [[ethics|etika]] uglavnom ne daju. Poučite domenu i na nju pričvrstite provjeru, ili očekujte da će provjera postati ritual.

**„Ovo je nadzor.“** Jest, ako ocjenjujete trud ili gledate kako studenti rade. Ocjenjujte artefakt prema ključu, navedite koje su povratne informacije strojno provjerene, a koje je prosudio čovjek, i ostavite detektore po strani.

## Što učiniti ovaj tjedan

**1.** Napišite dva opisa za svoj sljedeći zadatak: točan rezultat i uvjerljiv pogrešan. To je ključ prema kojem se provjera razrješava.

**2.** Dodajte redak s predviđanjem. Jedna rečenica, napisana prije nego se alat otvori, poslije uspoređena na disciplinarnim osnovama.

**3.** Zamijenite „provjerite izvore“ s „otvorite zapis i potvrdite autore, mjesto objave i godinu“.

**4.** Stavite osam usađenih pogrešaka u kviz koji ionako dajete i pogledajte koji ih studenti nađu.

**5.** Ocijenite jedan artefakt provjere prema ključu i recite studentu koji je dio provjere podbacio: mjerilo, proces ili odluku.

## Kamo dalje

[[incorporating-ai-literacy|Ugrađivanje pismenosti u području umjetne inteligencije]] pokriva kako izgraditi razumijevanje koje ova stranica stavlja u pogon, a [[ai-literacy-evidence|dokazi o pismenosti u području umjetne inteligencije]] pokrivaju koliko taj rad vrijedi. [[reducing-over-reliance|Smanjivanje pretjeranog oslanjanja]] bavi se dizajnerskom stranom studenata koji se naslanjaju na alat, [[study-with-ai|učenje s umjetnom inteligencijom]] studentski je pratilac, a [[asynchronous-online-courses-ai|asinkroni online kolegiji]] pokrivaju verziju ovog problema bez nastave u koju bi se provjera mogla smjestiti. O povratnim informacijama koje studenti provjeravaju vidi [[ai-feedback-quality|kvalitetu povratnih informacija umjetne inteligencije]] i [[hallucination-risk|rizik halucinacija]].
