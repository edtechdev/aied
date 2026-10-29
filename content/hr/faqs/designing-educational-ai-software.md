---
title: "Koje su najbolje prakse i savjeti za osmišljavanje učinkovitog obrazovnog softvera s umjetnom inteligencijom?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T14:24:49-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Vaš tim ima radni prototip tutora i demonstraciju u okrugu za tri tjedna. Ili je partnerska škola zamolila da na njezin čitač kolegija stavite chat sučelje, a netko kaže da je to posao od dva tjedna. Ili je pregledavatelj nabave vratio odjeljak o sigurnosti s jednom rečenicom: što ste točno testirali?

Odgovor je uži nego što većina specifikacija proizvoda pretpostavlja. Obrazovna umjetna inteligencija djeluje kao ograničeni stručnjak pod ljudskim nadzorom: sposobnost zatvorena u definiranu domenu, utemeljena u sadržaju koji je odobrio instruktor, a ne u pamćenju modela, suosmišljena s nastavnicima i učenicima koji je koriste, evaluirana na trajnoj interakciji kroz više okreta. Tu posljednju klauzulu većina timova preskoči. Pedagoška šteta pojavila se u svakom modelu testiranom u benchmarku u nastavku, a stope neuspjeha porasle su sa 17,7% u interakcijama s jednim okretom na 77,8% u razgovorima s više okreta.

## Kratka verzija

**1.** Zapišite što odlučuje sustav, a što odlučuje nastavnik. Ta granica postaje arhitektura.

**2.** Evaluirajte interakciju s više okreta, osjetljivu na disciplinu, prema stvarnom kurikulu, a ne pojedinačne upite prema općoj sigurnosnoj rubrici.

**3.** Utemeljite odgovore u odobrenom sadržaju i držite komponentu za provjeru odvojenom od razgovorne.

**4.** Tretirajte svaki studentski predani rad kao nepouzdan unos, uključujući i kada ga sustav ocjenjuje.

**5.** Izgradite uvjet prethodnog pokušaja, put eskalacije i nastavničko nadjačavanje prije pilota.

**6.** Stavite pristupačnost i razloženo testiranje pravednosti u specifikaciju, a ne u popis za kasnije.

## Odlučite što sustav smije biti

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Studija participativnog dizajna Reicherta i kolega]] sa šest srednjoškolskih nastavnika ispravlja pretpostavku da obrazovna umjetna inteligencija treba biti autonomni agent. Zamoljeni da na papiru izrade prototip razrednih [[conversational-ai|chatbota]], svi su nastavnici opisali ograničenog stručnjaka duž dvije dimenzije. Granice ovlasti držale su nastavnike pod kontrolom, jer odgovornost za učenje i sigurnost učenika ne može se delegirati. Granice ekspertize odražavale su nedostatak kontekstualnog znanja umjetne inteligencije o pojedinim učenicima, dinamici razreda i institucionalnim normama.

Arhitektura koju su skicirali imala je četiri komponente (definiranje opsega sadržaja, predstavljanje sadržaja, prilagodba studentu, [[teacher-role|nadzor nastavnika]]) na tri zaštitna sloja: domenske granice koje ograničavaju opseg, filtriranje sadržaja koje omogućuje sigurnu [[personalized-learning|personalizaciju]] i nastavničko nadjačavanje za dvosmislene slučajeve. Delegiranje je bilo selektivno. Preslikano na Gagnéovih devet događaja poučavanja, nastavnici su prihvatili umjetnu inteligenciju za predstavljanje sadržaja, davanje zadataka za vježbu i [[formative-assessment|formativnu]] [[feedback|povratnu informaciju]], a odbili su je za postavljanje ciljeva ili provođenje [[summative-assessment|sumativne]] [[assessment|procjene]].

Dvije zadane postavke pripadaju u istu specifikaciju: uskladite sustav s izričitim ciljevima učenja i podesite ga prema ljubaznim, ali točnim odgovorima, a ne prema slaganju s onim koji tipka. Tutor koji laska netočnom odgovoru naučio je studenta da je odgovor bio točan.

Jedan detalj sada je jeftin, a kasnije skup: ti su nastavnici htjeli bihevioralnu transparentnost, vidljive granice i znakove nesigurnosti, više nego objašnjenja modelova zaključivanja. Svih šest tražilo je potpuno bilježenje razgovora, upozorenja u stvarnom vremenu i mogućnost nadjačavanja, uokvireno kao profesionalna odgovornost, a ne nepovjerenje. Dizajnirajte to u prvom sprintu, jer dodavanje bilježenja u tutor izgrađen da djeluje nevidljivo znači prepisivanje.

## Testirajte ga u razgovoru, a ne u jednom okretu

[[pedagogical-safety|Pedagoška sigurnost]] u svojoj sintezi tvrdi da konvencionalno sigurnosno testiranje nije dovoljno za obrazovanje. Sustav može izbjeći toksičan sadržaj i ipak naškoditi prekomjernim otkrivanjem odgovora, jačanjem [[misconceptions|pogrešnih shvaćanja]], potiskivanjem refleksije, poticanjem ovisnosti ili skretanjem od nastavnih ciljeva.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] [[benchmark|mjerni skup]] to popisuje brojkama. U svakom testiranom modelu, od modela s otvorenim težinama od 3,8B do GPT-5-mini, [[pedagogy|pedagoška]] šteta bila je univerzalna, razmjera nije pouzdano poboljšala sigurnost, a stope neuspjeha eskalirale su sa 17,7% u interakcijama s jednim okretom na 77,8% u razgovorima s više okreta. Obrasci kršenja varirali su po predmetu. Njegova taksonomija od 11 dimenzija i 48 podrizika pokriva kognitivne, epistemičke, [[metacognition|metakognitivne]], [[motivation|motivacijsko-afektivne]], razvojne i kategorije pravednosti te kategorije usklađenosti s nastavom, i služi kao kontrolni popis za dizajn jednako kao i kao skup testova.

Brojku o eskalaciji čitajte kao tvrdnju o svom planu testiranja. Tutor koji prođe tisuću sondi s jednim okretom može pasti četiri razgovora od pet kada student uzvrati ili pita treći put. Izgradite okvir za više okreta prije demonstracije.

## Utemeljite sadržaj i odvojite provjerivača

Utemeljenje je arhitektonska odluka. [[eduguard-safe-rag-llm-tutor|EduGuard]], siguran tutor [[rag|s dohvatom potpomognutim generiranjem]] za [[cs-education|uvodno programiranje]], spaja dohvat sadržaja kolegija koji je odobrio instruktor s arhitektonski odvojenim provjerivačem tvrdnji, izričitom kontrolom [[cognitive-offloading|pretjeranog oslanjanja]] i mjernim skupom od 600 upita koji je sastavio instruktor, a pokriva pogrešna shvaćanja, otklanjanje pogrešaka, upite s miješanim jezikom i protivničke upite za izravan odgovor. Bio je bolji od osnovnih verzija tutora GPT-4o-mini i Llama [[socratic-method|sokratskog]] tutora.

Prenosiv je dio razdvajanje: komponente koje provjeravaju ne razgovaraju, a mjerni skup uključuje upite napisane da izvuku odgovore, a ne da provjere pristojnost. [[hallucination-risk|Rizik halucinacija]] pokriva način neuspjeha koji odobreni dohvat treba ograničiti.

## Tretirajte studentski rad kao nepouzdan unos

Model prijetnje koji većina dizajnerskih savjeta izostavlja nalazi se unutar samog artefakta koji se ocjenjuje. [[humble-prompt-injection-ai-grading-red-team-2026|Humbleova (2026) protivnička evaluacija crvenog tima]] testirala je mogu li studenti manipulirati ocjenjivačem utemeljenim na LLM-u ubacivanjem uputa u svoje predaje, i manipulacija je uspjela: ubacivanja koja ocjenjivaču daju upute, preokreću okvir ili ga uvode u igru uloga mijenjaju ocjenu bez promjene rada.

Držite rubriku i upute izvan kontekstnog okna koje student kontrolira, uklanjajte ili označavajte sadržaj koji nalikuje uputama, nikada ne dopustite da predaja sama postavi svoje kriterije i zadržite ljudsku odluku o svakoj ocjeni s posljedicama. Ocjenjivač koji svoje upute čita iz teksta koji prosuđuje predao je rubriku kandidatu.

## Omogućite postupnu potporu umjesto dovršavanja

Sustav koji odgovara prekida razmišljanje koje je kupljen da podupre. U radni nalog pripadaju dva dijela: uvjet prethodnog pokušaja, tako da se nikakav rezultat ne pojavi prije nego što se student na nešto obveže, i [[human-in-the-loop-ai|put ljudske eskalacije]] s imenovanim odredištem, što za proizvod za razred znači nastavnika, u obliku na koji nastavnik može djelovati. [[scaffolding|Postupna potpora]] i [[socratic-method|sokratski]] obrazac proizvodne su verzije onoga što nastavni plan radi ručno; [[developing-ai-tutor|razvoj AI tutora]] detaljno pokriva dijagnozu, ljestvice naznaka i povratnu informaciju.

## Stavite pristupačnost i pravednost u specifikaciju

Zahtjevi pristupačnosti dovoljno su konkretni za jedan sprint: rad tipkovnicom, kompatibilnost s čitačima zaslona, titlovi i transkripti, odgovarajući kontrast, upotrebljivi tekstualni opisi i kompatibilnost s pomoćnim [[ai-technologies|tehnologijama]]. Značajke pristupačnosti koje generira umjetna inteligencija ipak trebaju provjeru kvalitete. Vidi [[accessibility|pristupačnost]].

Testiranje pravednosti treba pregledati cijeli tijek i razložiti ponašanje po jeziku, invaliditetu, kulturi i drugim relevantnim karakteristikama učenika, umjesto da se osloni na zbirnu točnost. Sustav koji dobro prolazi u prosjeku, a loše za jednu skupinu, isporučio je neuspjeh toj skupini. Vidi [[bias-mitigation|ublažavanje pristranosti]] i [[equity-in-ai-education|pravednost]].

## Dizajnirajte s ljudima koji će ga koristiti

[[ko-hughes-vsd-student-centered-its-2026|Ko i Hughes]] primijenili su dizajn osjetljiv na vrijednosti na [[intelligent-tutoring|inteligentni tutorski sustav]] sa studentima i nastavnicima dvogodišnjeg koledža, skupinom koja je povijesno izostavljena iz dizajna platformi za učenje. Otkrili su napetosti vrijednosti kojima treba upravljati, a ne koje treba riješiti: transparentnost nasuprot interpretabilnosti, [[privacy|privatnost]] nasuprot nastavnom uvidu i [[agency|studentska djelatnost]] nasuprot vođenoj [[scaffolding|postupnoj potpori]]. Studenti su preferirali suradnička, humanizirana objašnjenja nad sirovom transparentnošću modela, a prototip je kodirao 16 značajki usklađenih s vrijednostima kroz [[explainable-ai|objašnjivu umjetnu inteligenciju]], ljudski nadzor i kontrole privatnosti.

[[wang-teacher-ai-co-design-review-2026|Pregled Wanga, Liua i Islama]] o 28 empirijskih studija dodaje rječnik za odabir alata. [[generative-ai|Generativna umjetna inteligencija]] koristi se uglavnom za planiranje nastave, generiranje upita i kreativno osmišljavanje ideja, pri čemu umjetna inteligencija mnogo češće djeluje kao pomoćnik ili generator sadržaja nego kao sukreator, uz četiri mogućnosti (učinkovitost, responzivnost, [[creativity|kreativnost]] i [[equity-in-ai-education|pravednost]]) pomoću kojih nastavnici mogu procijeniti koji alat odgovara kojem dizajnerskom problemu.

Obje studije tretiraju dizajn kao [[human-in-the-loop-ai|ljudski nadzor]] i [[human-ai-collaboration|suradnju čovjeka i umjetne inteligencije]] te kao [[usability-research|istraživanje upotrebljivosti]], a ne kao informiranje dionika. Obje su otkrile da su dionici iznijeli zahtjeve koje nijedan mjerni skup točnosti ne bi uhvatio, što je praktični argument za plaćanje tih sesija: to su zahtjevi koje biste inače sresti tek u pilotu.

## Što dizajnerski timovi pogrešno shvaćaju

Sigurnost znači moderiranje sadržaja. Šteta u obrazovnom proizvodu često dolazi kao koristan odgovor u pogrešnom trenutku. SafeTutors je našao pedagošku štetu u svakom testiranom modelu i porast neuspjeha na 77,8% kroz razgovor, a to nije kategorija koju filtri sadržaja vide.

Veći model popravit će pedagogiju. Razmjera nije pouzdano poboljšala sigurnost u rasponu od modela s otvorenim težinama od 3,8B do GPT-5-mini.

Dobar indeks dohvata znači da je sadržaj riješen. EduGuard spaja dohvat s odvojenim provjerivačem i testira protivničke upite za izravan odgovor, jer utemeljeni dohvat i dalje ostavlja put do prekomjernog otkrivanja.

Nastavnik je rezervna opcija. Svih šest nastavnika u studiji dizajna tražilo je bilježenje, upozorenja i nadjačavanje kao uvjet profesionalne odgovornosti. Zahtjev prema korisničkoj podršci nije nadjačavanje.

Pristupačnost je kasniji zadatak. Ili je u specifikaciji ili postaje prepisivanje, a generirani alternativni tekst i titlovi ipak trebaju ljudsku provjeru.

## Što će vam se vratiti

**„Ne možemo izgraditi okvir za evaluaciju prije lansiranja.“** Izgradite mali. Prva tvrdnja koja vam treba jest što se događa kroz pet okreta. Uzmite 40 stvarnih nastavnih pitanja, provedite svako kao razgovor od pet okreta sa studentom koji se opire naznaci i ocijenite prema 11 dimenzija. To je obranjiv odjeljak o sigurnosti i stane u jedan sprint.

**„Nastavnici žele uređivati upute, a mi ne možemo jamčiti što će napisati.“** Onda suzite površinu koju uređuju. Sistemski upit ostaje vaš; ciljevi, odobreni sadržaj, ljestvica naznaka i kontakt za eskalaciju njihovi su. Arhitektura ograničenog stručnjaka postoji upravo zato da konfiguracija ostane unutar opsega koji možete testirati.

**„Naši su rezultati na mjernom skupu visoki.“** Točnost na odgovorima s jednim okretom ne predviđa ponašanje kroz razgovor, a mjerni skup koji mjeri drugo pronašao je 77,8% neuspjeha u okruženjima s više okreta u svakom testiranom modelu. Izvijestite o oba broja, inače će se prvi čitati kao drugi.

**„Potpuno bilježenje je problem privatnosti.“** Jest, što traži ograničenje svrhe, a ne izostanak bilježenja. Bilježite ono na što nastavnik treba djelovati, sve ostalo svedite na minimum, ograničite pristup i navedite u proizvodu što se čuva i koliko dugo.

## Što učiniti ovaj tjedan

**1.** Napišite granicu ovlasti na jednoj stranici: što odlučuje sustav, što odlučuje nastavnik i što biste branili u pregledu nabave.

**2.** Pretvorite taksonomiju od 11 dimenzija u plan testiranja i provedite ga s više okreta na 40 stvarnih pitanja iz jednog kolegija.

**3.** Odvojite provjerivača od generatora u dizajnerskom dokumentu, čak i ako ih prva verzija izvodi u jednom procesu.

**4.** Dodajte uvjet prethodnog pokušaja, odredište eskalacije i nastavničko nadjačavanje u red čekanja, s imenima.

**5.** Stavite popis zahtjeva pristupačnosti i jedan zahtjev za razloženu analizu u kriterije prihvaćanja ovog izdanja.

## Kamo dalje

[[developing-ai-tutor|Razvoj AI tutora]] pokriva izgradnju, a [[designing-ai-into-learning|dizajn učenja s umjetnom inteligencijom]] pokriva pedagoške zadane postavke oko nje. Za pitanje funkcionira li to nakon uvođenja vidi [[checking-whether-educational-ai-works|provjeru radi li obrazovna umjetna inteligencija]]; za sigurnosne koncepte iza plana testiranja, [[pedagogical-safety|pedagošku sigurnost]] i [[hallucination-risk|rizik halucinacija]]; za kontekst nabave, [[legal-issues-and-risks|pravna pitanja i rizike]].
