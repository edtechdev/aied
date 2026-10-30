---
title: "Kako AI može podržati višejezične studente, a da pritom ne pogrešno procijeni njihovo znanje i ne izbriše njihov glas?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-disabled-neurodivergent-learners, writing-instruction-ai-best-practices, redesign-assessment-ai-era, verify-ai-output]
weight: 72
foundations: [ai-literacy, theories-and-frameworks]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, feedback, ai-feedback-quality, evaluative-judgment]
methods: [meta-analysis-systematic-review, quantitative-research]
research_method: [literature review, experiment]
audience: [instructors, instructional designers, assessment designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:30:00-04:00"
translation_of: faqs/ai-multilingual-learners
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Student razumije pojam i trebaju mu četiri dodatne minute da to kaže na engleskom. AI može prevesti zadatak, definirati terminologiju, uvježbati objašnjenje s njim ili napisati cijeli odgovor. Troje od toga je poučavanje. Jedno je pisanje zadaće.

Kratak odgovor za kolegu: odlučite što jezik radi u ovom zadatku prije nego što odlučite što alat smije raditi. Gdje je jezik sporedan, AI može ukloniti prepreku koja nema veze s vašim konstruktom. Gdje je jezik konstrukt, isti alat zaobilazi učenje. Rizik ide u oba smjera istodobno: [[multilingual-learning|jezična podrška]] može poboljšati pristup, a automatizirano bodovanje i dalje može pogrešno pročitati studenta. U jednoj studiji iz fizike objašnjenja slabije jezične kvalitete bila su sustavno ocijenjena niže od procjene stručnjaka u svakom ispitanom pristupu automatiziranog bodovanja, u devet sustava strojnog učenja i dva jezična modela, kod 116 srednjoškolaca ([[ai-scoring-language-bias-physics|Feser i Tschisgale, 2026]]). Tečnost i razumijevanje bodovali su se kao jedna stvar.

## Kratka verzija

**1.** Navedite ulogu jezika u zadatku: sporedna, središnja ili jedan kriterij među nekoliko.

**2.** Upišite dopuštenu podršku u upute i kriterije i recite što studenti i dalje moraju sami.

**3.** Dajte ciljanu pomoć prije cjelovitih prepisivanja. Zatražite od alata da prepozna nejasno značenje i ponudi mogućnosti.

**4.** Zahtijevajte da student usporedi predloženu formulaciju sa svojim značenjem i izvorima kolegija.

**5.** Bodujte pojmovno zaključivanje i jezik odvojeno kada su oboje namjeravani ishodi.

**6.** Nikada ne činite netestirani alat jedinim putem do podrške.

## Odlučite što jezik radi

U biološkom objašnjenju gramatika je uglavnom sporedna za pojam koji se procjenjuje. U kolegiju jezika proizvodnja i revidiranje određenih struktura jest učenje. U profesionalnoj komunikaciji sve se broji: disciplinarna točnost, publika i registar. Isti alat za prevođenje primjeren je u prvom slučaju, upitan u drugom i predmet pregovora u trećem.

Zapišite odluku tamo gdje je studenti mogu pročitati. Ako studenti smiju prevesti upute, ali moraju samostalno proizvesti objašnjenje na ciljnom jeziku, recite to izričito. Ako je podrška u terminologiji dopuštena, odredite što student i dalje mora objasniti i provjeriti. Zatim provjerite aranžman prema zahtjevima za prilagodbu i institucionalnoj politici, umjesto da svaki oblik jezične pomoći tretirate kao zamjenjiv. Student s dokumentiranom prilagodbom i student koji izbjegava vježbu mogu zatražiti istu stvar, a samo je drugi vaš nastavni problem.

## Što istraživanja podupiru, a što ne

[[genai-chatbots-language-learning-affordances-review-2026|Lopez i Arabadzhy (2026)]] pregledali su 24 empirijske studije o generativnim chatbotovima u učenju jezika. Njihov je doprinos taksonomski: svaka potporna mogućnost zabilježena za predgenerativne chatbotove ostaje, a tri su nove, među njima **translanguaging**, namjerno kretanje između jezika kao dio učenja. To je karta zabilježenih upotreba i iskustava, a ne objedinjena procjena, a korpus je geografski koncentriran: Kina, Iran, Tajvan i Turska čine 19 od 24 studije, a sve osim jedne smještene su u formalne institucije. Potpora korištenju međujezičnog objašnjenja kao poteza u učenju nije potpora prevođenju svake zadaće.

Procjena je mjesto gdje dokazi postaju oštriji, a ulog raste. [[ai-scoring-language-bias-physics|Feser i Tschisgale (2026)]] usporedili su jedanaest pristupa automatiziranom bodovanju s ocjenama ljudskih stručnjaka za fizička objašnjenja 116 srednjoškolaca i pronašli sustavno podcjenjivanje pojmovnog razumijevanja kod jezično slabijih objašnjenja, u svakom pojedinom pristupu. Dizajn izdvaja mehanizam: isti pojmovni sadržaj, izražen slabijom prozom, ocijenjen je niže. To nije tvrdnja o višejezičnim studentima neke zemlje, i upravo je to obrazac zbog kojeg je ukupna sukladnost bodovanja loša dijagnostika. Ocjenjivač se može slagati s ljudskim ocjenjivačima u prosjeku, a griješiti u dosljednom smjeru za studente čiji se jezik još razvija.

Sinopsis [[multilingual-learning]] opisuje istraživanja o probiru pisanja koja pokazuju obrasce prediktivne pristranosti kod višejezičnih pisaca slične ljudskim pristranostima u ocjenjivanju. Pročitajte ta tri nalaza zajedno i operativna je pouka uska: ni „AI uklanja ljudsku pristranost“ ni „AI dodaje jezičnu pristranost“ nije korisno pravilo. Trebate provjeru zadatka, populacije i jezika, na mjestu gdje ocjena postaje ocjena u zapisu.

## Dajte alatu konkretnu potpornu ulogu

Počnite s uputama: neka alat prevede ili prepriča upute jednostavnim jezikom, provjerite rezultat prema izvorniku i prepustite studentu da razradi što zadatak traži i da pita o svakoj stvarnoj dvosmislenosti.

Disciplinarni vokabular funkcionira drukčije. Postavite alat da usporedi značenja među jezicima i generira kontekstualne primjere, a zatim neka student objasni pojam i prepozna zavaravajuće ekvivalente.

Vježba govorenja traži ograničeno uvježbavanje s ponovnim pokušajima, pri čemu student proizvodi odgovor i pokazuje ciljnu vještinu.

Kada revidira pisanje, zatražite nekoliko imenovanih problema s mogućim ispravcima i zadržite odluku i njezino obrazloženje kod studenta.

Čitanje sadržaja kolegija najširi je slučaj. Dvojezično objašnjenje utemeljeno na odobrenim materijalima pomaže, pod uvjetom da student provjeri ključne tvrdnje i pokaže razumijevanje.

To su upotrebe koje treba pilotirati, a ne provjerene intervencije. Alat koji dobro radi na jednom jeziku ili u jednom žanru nije time pouzdan u drugom, a geografska koncentriranost pregleda znači da vaš jezični par u dokazima može biti jedva zastupljen.

## Zaštitite studentovo značenje i glas

Zatražite ciljanu pomoć prije nego zatražite prepisivanje, jer cjelovito prepisivanje je mjesto gdje studentovo razmišljanje nestaje sa stranice. Zahtjev koji vrijedi poučavati: „Prepoznaj dva mjesta gdje je moje značenje nejasno. Objasni problem i ponudi mogućnosti. Zadrži moje primjere i ne dodavaj tvrdnje.“ Student zatim bira.

Slijed koji rad zadržava kod studenta:

1. Razvijte objašnjenje na kojem god jeziku ili mješavini jezika koji studentu omogućuju zaključivanje, gdje zadatak to dopušta.
2. Rabite odobrenu podršku za ispitivanje terminologije ili izraza.
3. Usporedite predloženu formulaciju s namjeravanim značenjem i izvorima kolegija.
4. Proizvedite traženo objašnjenje i zabilježite revizije koje su nešto promijenile.

U zadaći iz sociologije student bi mogao dvojezično promisliti sukob obiteljskih uloga, provjeriti kratak popis pojmova iz kolegija, a zatim napisati predanu analizu na traženom jeziku, pri čemu nastavnik procjenjuje sociološko zaključivanje i sve zasebno navedene jezične kriterije. U zadatku učenja jezika isti bi slijed odao procjenu i morao bi sačuvati samostalnu proizvodnju na ciljnom jeziku.

Izbjegavajte postavljati „zvuči kao izvorni govornik“ kao standard, jer to mjeri studentov odnos prema dijalektu, a ne njegovo razumijevanje vašeg predmeta. Odredite jasnoću, točnost, žanr ili publiku. Uglađeno prepisivanje može pomaknuti stav, ispustiti kulturno značajan izraz ili dodati tvrdnju koju student nikad nije namjeravao, a student to potpisuje.

## Provjerite alat i procjenu

Pregledajte značenje, a ne tečnost. Uzmite uzorke prijevoda i objašnjenja i tražite stručne pojmove, propuste, izmišljene pojedinosti, kulturne pretpostavke i varijetete jezika koje vaši studenti doista rabe. Uključite kvalificirane kolege jezikoslovce ili osoblje za podršku; ne činite studente jedinim revizorom alata koji im namećete.

Odvojite kriterije. Kada su i zaključivanje i jezik namjeravani ishodi, bodujte ih odvojeno i provjerite kažnjava li ocjenjivač uz pomoć AI-ja jezik dvaput ili propušta točno zaključivanje izraženo neuobičajeno. To je praktični oblik [[assessment-validity|valjanosti]] za višejezičnu skupinu i pitanje podskupina u [[differential-effects-across-learner-groups|diferencijalnim učincima]].

Zadržite put do pojašnjenja. Kratak razgovor, označen dijagram ili objašnjenje jedne ključne odluke mogu pokazati što student razumije kada ga proza ne može prenijeti. Odaberite format koji odgovara konstruktu, a ne onaj koji je najlakše ocijeniti.

Osigurajte izvedive alternative. Studentima treba jasan put do ljudske jezične podrške i pristupačnih materijala kolegija. Zahtijevanje netestiranog alata može dodati prepreku dok namjerava uključivost, a to je isti neuspjeh koji mora izbjeći i [[ai-disabled-neurodivergent-learners|podrška studentima s invaliditetom i neurodivergentnim studentima]].

## Što će vam se vratiti

**„Prijevod znači da student izbjegava rad.“** Ovisi o tome što je rad. Prijevod može omogućiti bavljenje disciplinarnim sadržajem na koji ne utječe, a može zamijeniti vježbu kada je samostalna proizvodnja na ciljnom jeziku ishod. Odlučite što procjenjujete i recite to.

**„AI je popravio jezik, a ništa drugo nije promijenio.“** Provjerite. Prepisivanje koje poboljšava gramatiku često mijenja naglasak, ublažava tvrdnju ili izmišlja potporu. Zamolite studenta da navede jednu značajnu promjenu i kaže čuva li njegovu namjeravanu poantu, što vam ujedno govori je li predlog pročitao.

**„Ljudski su ocjenjivači pravedniji.“** Ljudsko bodovanje nosi vlastitu jezičnu pristranost, a istraživanja o probiru pisanja kod višejezičnih pisaca nalaze da automatizirani sustavi reproduciraju njezine obrasce. Pravednost ovdje dolazi iz izričitih kriterija, uzorkovanih dokaza o podskupinama i stvarne prilike da se prosudba preispita, a ne iz toga tko ili što drži olovku.

**„Naši studenti dobro stoje s engleskim, pa se to ne odnosi na njih.“** Nalaz koji je važan nije tvrdnja o manjku bilo koje skupine. Nalaz je da se pojmovno razumijevanje izraženo slabijom prozom sustavno podcjenjuje, u svakoj ispitanoj metodi. To se odnosi na pisce koji pišu u žurbi, pisce kojima je to drugi jezik i svakoga čiji se registar razlikuje od ispitivačeva.

## Što učiniti ovaj tjedan

**1.** Uzmite jednu zadaću i napišite rečenicu koja kaže što jezik u njoj radi.

**2.** Prepisite upute tako da kažu koja je podrška dopuštena i što studenti moraju proizvesti samostalno.

**3.** Testirajte prijevod i objašnjenje terminologije na jezicima koje vaši studenti doista rabe i pročitajte rezultat tražeći izmišljene pojedinosti i ispušteno značenje.

**4.** Dodajte jednu provjeru koja bilježi studentovo vlastito značenje ili odluku, poput bilješke od dvije rečenice o promjeni koju je prihvatio ili odbio.

**5.** Ako vaša rubrika boduje kvalitetu pisanja, odvojite taj kriterij od pojmovnoga i ponovno pročitajte po dva rada svake vrste imajući tu podjelu na umu.

## Kamo dalje

[[multilingual-learning]] pojmovna je stranica za jezik, translanguaging i procjenu u nastavi posredovanoj AI-jem, a [[assessment-validity|valjanost procjene]] standard je za to podupire li ocjena zaključak koji izvodite. [[differential-effects-across-learner-groups]] pokriva kako tražiti obrasce u podskupinama, a ne pretpostavljati ih.

Za slučaj poučavanja pisanja u kojem je jezik konstrukt vidi [[writing-instruction-ai-best-practices|najbolje prakse za poučavanje pisanja]]. Za pitanje može li se automatiziranom bodovanju uopće vjerovati u vašem okruženju vidi [[ai-grading-fairness-reliability|AI ocjenjivanje]] i [[checking-whether-educational-ai-works|provjeru radi li obrazovni AI]].
