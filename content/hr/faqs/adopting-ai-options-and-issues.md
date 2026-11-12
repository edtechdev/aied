---
title: "Koje su opcije i pitanja koja treba razmotriti pri uvođenju AI alata?"
created: "2026-11-12T19:15:00-05:00"
updated: "2026-11-12T19:45:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-12T17:10:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Voditelj katedre ima tri ponude za platformu za [[intelligent-tutoring|AI podučavanje]] i rok u petak. [[teacher-role|Nastavnik]] želi koristiti besplatan alat koji već koristi polovica osoblja. Glavni informacijski direktor pita se treba li ustanova pokretati vlastiti model i ne može reći koliko bi to koštalo.

To je isto pitanje na tri razine. Opcija je manje nego što sugerira popis dobavljača, a problemi traju dulje od bilo kojeg proizvoda.

Izbor mora odgovarati odluci koja je pred vama. Pojedinac odlučuje što će unijeti u alat. Ustanova odlučuje tko smije koristiti koji model, na kojim podacima, po kojoj cijeni i tko odgovara kad nešto pođe po zlu. Većina loših odluka o uvođenju dolazi iz toga da se na institucionalno pitanje odgovara osobnim alatom.

## Kratka verzija

Pet pravila pokriva većinu. Najprije odredite granicu podataka jer se sve ostalo može ponovno pregovarati, a to ne može. Odaberite najmanji oblik koji odgovara: besplatni ili vanjski alati za pilot, hostana platforma kada trebate kontrolu nad podacima bez GPU-a, pristupnik kada trebate kvote i usmjeravanje, i vlastita inferencija samo kada ostala tri zakažu. Usporedite cijenu po korisničkom mjestu i po potrošnji s vlastitim brojkama, jer većina upotrebe obično dolazi od nekoliko teških korisnika. Učinite odobreni put bržim od neodobrenog, jer je EDUCAUSE utvrdio da 94% osoblja i nastavnika koristi AI za posao, 54% zna za politiku, a 56% koristi alate koje ustanova ne osigurava. Zatim unaprijed odlučite koji bi vas dokazi natjerali da prestanete, jer uvođenje bez testa izlaza po defaultu postaje trajno.

## Na osobnoj razini

Nastavnik ili student donosi odluku o podacima prije odluke o podučavanju. Imena studenata, pojedinosti iz IEP-a, disciplinarne bilješke i neobjavljeno istraživanje stvaraju odgovornost, pa najprije uklonite osobne podatke i provjerite obavlja li alat još posao. Zatim pročitajte uvjete: zadržavanje, treniranje na vašim unosima i podizvođači obično se nalaze u dokumentu koji nitko ne otvara, a ako se odgovor ne može naći u pet minuta, tretirajte ga kao nepoznat.

Znajte što alat radi dobro. Generirani tekst najjači je u izradi nacrta, restrukturiranju i sažimanju, a najslabiji u aritmetici, citiranju i svemu što traži aktualne činjenice. Znajte i koliko vas košta. Besplatna razina besplatna je zato što je upotreba proizvod ili zato što će se razina promijeniti, i oboje je razlog da imate izlaz na umu.

Dva pitanja ostaju. Koga još to pogađa, jer alat koji preoblikuje kolegij odluka je za studente u njemu. I je li dopušten: pročitajte politiku jednom ako postoji, a ako ne postoji, dokazi o [[shadow-ai]] upućuju na to da već stvarate politiku po defaultu.

Gruba heuristika: koristite odobreni alat kad je nadohvat ruke, a kad nije, zapišite što ste učinili i zašto. Taj zapis štiti vas ako se prosudba kasnije dovede u pitanje.

## Na institucionalnoj razini

Ustanova jednom kupnjom kupuje uslugu, tijek podataka, obvezu podrške i političku obvezu. Šest oblika čini stvarni izbornik, a većina je ustanova u dva ili tri, a da to ne zna.

Najlakši početak je besplatan vanjski alat. AI Tutor Pro tvrtke Contact North ne traži račun, a Playlab omogućuje edukatorima izradu aplikacija utemeljenih na vlastitom [[curriculum-design|kurikulumu]] dok dobavljač hosta modele. Oba su dobra za pilot i loša kao trajno rješenje: nema revizijskog traga, nema kontrole kvota, a uvjeti se mogu promijeniti.

Kupnja mjesta na komercijalnom tenantu, bilo [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot ili Google Gemini for Education, donosi brzu nabavu, SSO i administratorsku konzolu, a odabir modela i zadržavanje ostavlja dobavljaču.

Platforma koju sami hostate drži podatke bliže. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) postavlja se u vaš vlastiti AWS račun, a Vanderbiltov pilot izvijestio je o oko \$3 po korisniku mjesečno na 1,300 korisnika, od kojih je polovica potrošila manje od \$1 na tokene. To kupuje kontrolu nad podacima bez GPU-a.

Pristupnik preko mješovitih pružatelja stavlja jedna ulazna vrata pred nekoliko njih. Nosi kvote, SSO, bilježenje i regionalno usmjeravanje; Fontys je vodio jedan za 300 korisnika pod mjesečnim ograničenjem od \$500 koje nikada nije prekoračeno, a [MindRouter](/aied/resources/mindrouter/) dodaje raspoređivanje s težinama uloga i mjerenje energije.

Vlastita inferencija najskuplji je oblik i najneovisniji. Purdueove dvije usluge dosegnule su preko 1000 korisnika na 10+ [[open-source]] modela za otprilike \$100,000 u hardveru, prije osoblja. Odgovara regulatoru bez traženja dopuštenja dobavljača.

Posljednji oblik je AI unutar alata koje već vodite: tip pitanja u Moodleu, AI partner platforme za raspravu, alat za povratne informacije o eseju. Mali trud i promjena kolegij po kolegij, s malo toga naučenog u središtu.

## Problemi koji ne nestaju

[[privacy|Zaštita podataka]] dolazi prva. Važno je koji zapis sada postoji, a prije nije, gdje živi i tko ga može dohvatiti. Alat koji primi popis razreda stvorio je institucionalni zapis, što god ugovor govorio.

Identitet i pristup slijede. Sve što se koristi u mjerilu treba SSO, pristup temeljen na ulogama i isključivanje, a alat koji ne može ukinuti pristup zaposleniku koji odlazi ostavlja aktivan račun s vašim podacima.

Troškovi ovise o tome kako se cijena računa. Cijena po mjestu nagrađuje broj osoba, a cijena po potrošnji nagrađuje upotrebu. Budući da mali udio korisnika obično stvara većinu tokena, cijena po mjestu izgleda jeftino dok teški korisnici ne odu drugamo.

Mjerenje je obično dio koji nedostaje. EDUCAUSE je utvrdio 92% s AI strategijom povezanom s poslom i 13% koji mjere povrat ulaganja. Ako ne možete reći što je alat zamijenio, ne možete braniti obnovu.

[[equity-in-ai-education|Pravednost]] i pristupačnost pripadaju nabavi, a ne kasnijem popravku. Alat koji traži brzu vezu, plaćenu razinu ili tečan engleski širi svoju korist neravnomjerno.

[[academic-integrity|Akademska čestitost]] mijenja ono što procjena mjeri. Kad alat može dovršiti zadatak, zadatak je ono što treba preispitati.

Osoblje i ovisnost o dobavljaču važni su jednako kao cijena. Svaki gornji oblik osim besplatnog treba vlasnika, a uobičajeni je neuspjeh kupiti četvrti ili peti oblik i popuniti ga onima koji su već bili zauzeti. Pitajte što se događa pri obnovi, pri promjeni cijene i pri ukidanju modela; oblici pristupnika postoje zato da odgovor bude promjena usmjeravanja, a ne migracija.

## Kako izgleda dobra prva godina

Odaberite dvije ili tri mjere prije nego što išta krene: tko ga je koristio, za što, koliko je koštao po aktivnom korisniku i što se promijenilo u radu. Pilot koji ne može proizvesti te brojke demonstracija je s proračunom.

Provjerite granične uvjete istodobno. Ako je alat dotaknuo studentske zapise, je li tijek podataka odgovarao onome što ste rekli uredu za privatnost? Ako je upotreba ostala nemjerena, je li to bilo zato što alat ne može izvijestiti ili zato što nitko nije pitao?

Držite odobreni put kratkim. Brojke EDUCAUSE-a upućuju na to da ljudi zaobilaze upravljanje jer odobreni put traje dulje od zadatka. Pristupnik s karticom modela i istodnevnim pristupom instrument je upravljanja koliko i IT pogodnost.

## Česte pogreške

Kupnja platforme prije nego što se imenuje problem daje statistiku upotrebe i malo više. Tretiranje besplatnog kao strategije radi za pilot, a kao infrastruktura ne uspijeva. Lokalni model mijenja koga se može pozvati sudskim nalogom; ne odlučuje hoće li se upiti zadržavati. Mjerenje zadovoljstva umjesto učinka pretvara „nastavnicima se svidjelo“ u nalaz koji to nije. A politika objavljena bez provedivog puta opisuje sklonosti, a ne pravila.
