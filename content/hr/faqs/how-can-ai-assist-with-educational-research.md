---
title: "Kako umjetna inteligencija može pomoći u obrazovnom istraživanju?"
created: "2026-10-05T11:23:36-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
updated: "2026-10-29T14:24:49-04:00"
translation_of: faqs/how-can-ai-assist-with-educational-research
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

Vaš suautor želi odlomak u odjeljku o metodi o alatima umjetne inteligencije koje je tim koristio. Ili je hrpa za probir veća nego što rok dopušta. Ili je recenzent pristojno pitao je li osoba pročitala transkripte, a vi niste sigurni koji je iskren odgovor.

Kratak odgovor za taj sastanak: umjetna inteligencija može preuzeti pretraživanje, prvi prolaz probira, trijažu kodiranja i pisanje nacrta, ali ne može nositi odgovornost za ono što projekt zaključi. Odlučite koji su zadaci otvoreni za nju prije početka projekta, provjeravajte rezultate prema ljudskom standardu, s imenovanom osobom koja rješava nesuglasice, i bilježite dovoljno da vanjski čitatelj može rekonstruirati što se dogodilo. Većina timova otkrije da su sati provjere i bilježenja dodani rad, a ne uklonjen.

## Kratka verzija

**1.** Zapišite koji istraživački zadaci smiju koristiti umjetnu inteligenciju, a koji ne, prije nego što se pokrene prvo pretraživanje. Razvrstajte po ulogu, a ne po alatu.

**2.** Stavite automatizaciju na probir. Ekstrakciju podataka, usklađivanje i sintezu zadržite kod ljudi.

**3.** Utvrdite šifrarnik i rubriku prije nego što automatizirani prolaz dotakne podatke.

**4.** Odlučite što provjera znači i tko je potpisuje. Slaganje između modela i kodera mjera je sličnosti, a ne rezultat o kvaliteti.

**5.** Provjerite svaku referencu ručno, autore prve, kad god je umjetna inteligencija dotaknula tekst.

**6.** Bilježite upite, verzije modela i verzije korpusa, i planirajte sate za to.

## Odlučite čega se umjetna inteligencija smije dotaknuti prije početka projekta

Odluka o opsegu pripada u datoteku projekta, a ne u nečije sjećanje. U [[dai-chan-responsible-genai-research-ai-literacy-2026|studiji fokusnih grupa Dai i Chana (2026)]], istraživači koji su o tome razmišljali kalibrirali su upotrebu prema ulogu i intelektualnoj središnjosti: više na procedurnim zadacima s niskim ulogom, oprezno tamo gdje je znanstveni doprinos bio u središtu. Dvadeset i sedam od 28 istraživača na poslijediplomskom studiju u toj studiji koristilo je generativnu umjetnu inteligenciju negdje u tijeku rada, uključujući akademsko pisanje i prevođenje, pa je za većinu timova pitanje gdje je granica, a ne postoji li ona.

Zapišite granicu kao popis s presudom za svaki zadatak: pretraživanje literature, probir sažetaka, ekstrakcija, kvalitativno kodiranje, statistička analiza, pisanje nacrta, oblikovanje referenci. Tu studiju čitajte kao kartu onoga što su istraživači izvijestili da rade. To je izvještaj fokusne grupe, a ne rezultat o učinkovitosti.

## Stavite automatizaciju na probir, a sintezu zadržite u timu

Sustavni pregledi mjesto su na kojem je automatizacija najdalje odmaknula. Alati poput ASReview, SWIFT-Review, Covidence, AIScreenR i MetaMate smanjuju procedurno opterećenje uglavnom na probiru sažetaka, dok su ekstrakcija podataka, usklađivanje i sinteza ostali kod ljudskih recenzenata u jedinom timu koji je izvijestio o svom tijeku rada ([[scaffolding-systematic-reviews-2026|Wang i suradnici, 2026]]).

Većina koristi dolazi iz dvije dizajnerske odluke. Napišite pravila odlučivanja za granične slučajeve prije početka probira i zadržite kategoriju „možda“ sa zajedničkim dnevnikom rješavanja nesuglasica, kako bi se ista prosudba primijenila na istu vrstu zapisa. Bez tog dnevnika pravilo drugog recenzenta i pravilo prvog recenzenta tiho se raziđu, a popis isključenih prestaje biti ponovljiv.

## Utvrdite šifrarnik prije nego što model išta pročita

[[qualitative-research|Kvalitativna analiza]] faza je u kojoj je interpretacija proizvod. Konstrukti, rubrike za kodiranje i podaci za obuku ljudske su odluke, a ne rezultati modela ([[ai-methodologies-science-education-research-2026|Martin i suradnici, 2026]]), što znači da šifrarnik mora biti utvrđen prije nego što se automatizirani prolaz pokrene nad korpusom. Alternativa je shema kodiranja napisana oko onoga što je model slučajno iznio na površinu, a teme tada opisuju čitanje vaših podataka od strane alata.

Delegiranje može biti finije od sve-ili-ništa. [[agreement-not-quality-llm-coding-verification|Jedna studija slijepe provjere]] klasificirala je 15 od 72 stavke šifrarnika kao dokazivo zahtjevne za ljudsku ekspertizu, 12 kao bolje pokrivene modelom i 16 kao prikladne za trijažu utemeljenu na pouzdanosti. Razvrstajte vlastite stavke na taj način i ušteda rada pada tamo gdje je sigurna.

## Odlučite što provjera znači i tko je potpisuje

Visoko slaganje između modela i ljudskog kodera izvještava se kao da utvrđuje ispravnost. Ne utvrđuje je. [[agreement-not-quality-llm-coding-verification|Liu i suradnici (2026)]] dali su neovisnom ekspertu da slijepo procijeni 855 parnih skupova kodova, bez podatka o izvoru. Slaganje čovjeka i LLM-a (prosječni Jaccard 0,30) bilo je znatno niže od slaganja čovjeka s čovjekom (0,52), a ipak je slijepi procjenjivač preferirao ljudsko i strojno kodiranje po stopama koje nije mogao razlikovati (51,5% nasuprot 48,5%, p = 0,537). U nekim slučajevima ljudski konsenzus kodirao je zajedničku pristranost koju je procjenjivač odbacio u korist modela.

Dakle, korak provjere treba zlatni standard koji nije ni rezultat modela ni slaganje kodera s njim, plus imenovanu osobu koja je riješila nesuglasice. Izvijestite o obojemu. Statistika sličnosti opisuje koliko se dva čitanja podudaraju i ne govori ništa o tome je li neko od njih ispravno.

## Pretražujte brzo, a zatim sami provjerite svaki izvor

Generativno pretraživanje sažima, preporučuje, sintetizira i razgovara, što uzdrma stariji raspored u kojem sustav pronalazi, a čitatelj interpretira ([[genai-academic-search-workshop|radionica o generativnom akademskom pretraživanju]]). Tretirajte ga kao alat za otkrivanje. Izvještaj s radionice nosi dva upozorenja: sposobnost je neravnomjerna, pri čemu se visoko citirani znanstvenici rekonstruiraju otprilike dvostruko češće od manje citiranih kolega, a knjižničar je opisao jaz povjerenja u kojem studenti previše vjeruju generativnom pretraživanju, dok ga nastavnici odbacuju.

Provjera referenci mjesto je na kojem to postaje nepodložno pregovoru, a propusti se gomilaju u polju autora, onome koje nosi zaslugu. [[citation-errors-hallucinations-computing-education-2026|Denny i suradnici (2026)]] pregledali su 723.930 publikacija i 15.872.533 referenci i potvrdili 30 izmišljenih referenci u 14 radova iz računalnog obrazovanja, sve iz 2025. i 2026. Sedamnaest od tih 30 bili su hibridi: stvarni naslov priložen izmišljenim ili netočnim autorima. Potvrđeni broj na jednom tehničkom simpoziju porastao je s 3 u 2025. na 17 u 2026., u 2,3% radova te godine. Njihov ukupni broj namjerno je donja granica, a automatizirani provjerivači nasljeđuju mane metapodataka koje tretiraju kao istinu. Provjerite autore prve.

## Tretirajte automatizirani rezultat kao hipotezu koju treba testirati

Automatizirane mjerne funkcije mogu izgledati precizno i prediktivno, a ostati neprozirne. [[ai-methodologies-science-education-research-2026|Martin i suradnici]] to uokviruju Changovim problemom nomičkog mjerenja: mjerenje neke veličine zahtijeva zakon koji je povezuje s nečim promatrljivim, a taj se zakon ne može testirati bez prethodnog poznavanja te veličine. Mjerne funkcije izvedene iz umjetne inteligencije proizlaze iz podataka za obuku i optimizacije, a ne iz istraživača, pa je rad na objašnjivosti važan da bi se pokazalo prati li model semantičko razumijevanje ili samo ključne riječi.

Propust je konkretan. U [[zhang-platform-scores-miss-ai-teaching-agents-2026|evaluaciji osam AI nastavnih agenata]], agent koji je bio treći po vlastitom rezultatu platforme bio je posljednji prema rubriku validiranoj od stručnjaka. Neslaganje čovjeka i stroja sustavno je, a ne slučajno, a operacionalizacija rubrike često je važnija od umješnosti u pisanju upita ([[machines-misread-pedagogical-quality|Tseng i suradnici, 2026]]). Prije nego što automatizirani rezultat postane vaš instrument, validirajte ga prema mjeri vezanoj na sposobnost koju namjeravate proučavati. Za same mjere vidi [[evaluating-ai-interventions-methods|evaluaciju metoda za intervencije s umjetnom inteligencijom]].

## Napišite odjeljak o metodi tako da ga vanjski čitatelj može revidirati

Prihvaćanje je odmaklo ispred izvještavanja. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta i Lin (2026)]] analizirali su 888 radova o automatizaciji pregleda: od 2023., 38,0% radova o softveru i proizvodima nije izvijestilo o nikakvoj evaluaciji, nasuprot 9,3% LLM radova, a pristup modelu bio je pretežno vlasnički (84,1%). Ni povoljna ukupna ocjena nije značila prikladnost za delegiranje, jer je 52% od 118 LLM radova sa samo pozitivnim nalazima ipak izvijestilo o zabrinutosti da tijek rada pada ispod razine koju njegova uloga zahtijeva. Njihov okvir PRISMA-LLM odvaja objavu implementacije od evaluacije osjetljive na posljedice i tretira svojih pet razina kao razine objave, a ne kao razine rizika.

Praktična verzija: navedite sustav i njegovu verziju, upite, verziju korpusa, što je čovjek provjerio i gdje je zakazao. Čuvajte dnevnike upita i odgovora, jer tečan generirani popis tema izgleda neizbježno mnogo prije nego što je njegov dokazni rad i počeo ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Planirajte i sate. [[persistent-ai-agents-academic-research|Studija slučaja od 115 dana s jednim istraživačem]] koja je pratila trajnog istraživačkog agenta pokazala je da je najsnažniji obrazac bio širenje kapaciteta, a ne dokazana zamjena rada: kako su se pamćenje i procedure gomilale, opseg delegiranog rada rastao je, a ljudski doprinos nije se smanjivao.

## Vodite praktičarsko istraživanje po istim pravilima u manjem mjerilu

Ako ste predavač koji proučava vlastiti kolegij, radite u najtanjoj niti korpusa. [[ai-assisted-educational-research|Istraživanje u obrazovanju uz pomoć umjetne inteligencije]] to navodi kao prazninu, a ne kao nalaz: praktičarsko istraživanje uz pomoć umjetne inteligencije vjerojatno je rašireno i gotovo nedokumentirano, a dokazi o automatizaciji pregleda i bibliometrijski dokazi ne rješavaju kako predavač treba proučavati vlastitu nastavu.

Ono što se prenosi jest skup dispozicija:

Koristite umjetnu inteligenciju tamo gdje vaše lokalno okruženje nije varijabla. Pretraživanje literature vašeg područja, transkribiranje i sažimanje vlastitih snimki te pisanje nacrta instrumenata ili jezika privole, sve to zadovoljava.

Zadržite interpretativne poteze. Što se računa kao tema, što znači komentar studenta i što opravdavaju dokazi iz vaše učionice, to je na vama, a u tekstu treba stajati koje je poteze napravio model, a koje vi ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Unaprijed odredite kriterije i držite ih vidljivima. Mala lokalna studija ne može se oporaviti od konstrukta definiranog nakon što su podaci već stigli.

Izvijestite o ulozi umjetne inteligencije, o provedenoj provjeri i o ograničenjima dizajna s jednim kolegijem i jednim istraživačem. Prikaz tijeka rada nije rezultat o djelotvornosti.

Simuliranje kohorte tretirajte kao naprednu opciju, a ne kao zadanu. Simulirani učenici obično pokrivaju najlakši kvadrant stvarnog studentskog ponašanja i rijetko se validiraju nakon upotrebe ([[simulating-students|simuliranje studenata]]). Pročitajte [[making-simulated-students-behave-like-learners|kako simulirane studente učiniti da se ponašaju kao učenici]] prije nego što povjerujete presudi simulatora.

## Što istraživači ovdje pogrešno shvaćaju

Slaganje s ljudskim koderom znači da je kodiranje ispravno. Slaganje čovjeka i LLM-a u slijepoj studiji bilo je 0,30 Jaccard nasuprot 0,52 za čovjeka s čovjekom, a slijepi procjenjivač nije mogao razlikovati dva izvora kodiranja na 51,5% nasuprot 48,5%. Slaganje bilježi da su se dva čitatelja približila, uključujući i slučaj kada su se približila istoj pristranosti.

Provjerivač referenci zamjenjuje provjeru referenci. Trideset izmišljenih referenci u Dennyjevu pregledu uključuje 17 hibrida u kojima je naslov bio stvaran, a autori nisu, što je upravo slučaj s kojim provjerivač obučen na metapodacima postupa najgore, jer metapodaci su ono što je pogrešno.

Povoljna evaluacija čini tijek rada prikladnim za vašu ulogu. Od 118 LLM radova sa samo pozitivnim nalazima, 52% je ipak izvijestilo o zabrinutosti da tijek rada pada ispod razine koju njegova uloga zahtijeva. Čitajte dubinu evaluacije prema poslu koji mu dajete.

Umješnost u upitima glavna je poluga kvalitete. Operacionalizacija rubrike često je važnija od umješnosti u pisanju upita za slaganje čovjeka i stroja, a evaluacija osam agenata rangirala je isti sustav trećim i posljednjim, ovisno o tome čija je rubrika primijenjena.

Umjetna inteligencija uklanja rad iz projekta. Studija slučaja od 115 dana otkrila je da delegirani opseg raste kako se pamćenje agenta gomila. Provjera, rješavanje nesuglasica i bilježenje sati su koji rastu s njim.

## Što će vam se vratiti

**„Moj suautor to već radi i nitko se nije žalio.“** To što se nitko ne žali nije nalaz o valjanosti. Pitanje objave odvojeno je od pitanja kvalitete, a brojka od 38,0% za neevaluirane softverske radove govori da je šutnja polja raširena.

**„Dva modela složila su se međusobno, pa je kodiranje riješeno.“** Dva modela koja dijele podatke za obuku dijele i svoje pogreške. Slijepi procjenjivač u Liuovoj studiji preferirao je strojno kodiranje na 48,5%, a ono što je taj broj učinilo interpretabilnim bio je neovisni procjenjivač, a ne samo slaganje.

**„Ne možemo revidirati vlasnički model, pa nema što izvijestiti.“** PRISMA-LLM traži objavu implementacije kao razinu odvojenu od dubine evaluacije. Sustav, verzija, upiti, što su ljudi provjerili i gdje je zakazao, sve je to objavljivo i za zatvoreni model.

**„Etičko povjerenstvo to nikada neće odobriti.“** Pristup modelu bio je vlasnički u 84,1% pregledanih radova, što znači da studentski tekst obično napušta vašu ustanovu. Prikupljajte samo ono što obrazovna svrha zahtijeva, provjerite obučavaju li se modeli dobavljača na podacima učenika i dajte prednost lokalnim ili sintetičkim podacima tamo gdje je osjetljivost visoka. [[equity-ethics-pedagogical-safety-research|Pravednost, etika i pedagoška sigurnost u istraživanju]] pokriva obveze u cijelosti.

**„To će biti sporije nego raditi ručno.“** Za mali projekt često i jest. Argument za to počiva na opsegu pri velikom broju, a argument protiv pretjerivanja počiva na istom prikazu od 115 dana.

## Što učiniti ovaj tjedan

**1.** Napišite popis zadataka s presudom uz svaku stavku i stavite ga tamo gdje ga cijeli tim može vidjeti.

**2.** Dodajte pravila odlučivanja za granične slučajeve i dnevnik rješavanja nesuglasica u svoj protokol probira prije nego što počne sljedeća serija.

**3.** Odaberite jedan automatizirani rezultat na koji se već oslanjate i validirajte ga prema ljudskoj prosudbi na uzorku koji još niste pogledali.

**4.** Pročitajte posljednji rukopis koji ste predali i ručno provjerite svako ime autora na popisu referenci.

**5.** Dodajte u svoj predložak metode redak „gdje je umjetna inteligencija zakazala“, da navika objave bude zapisana jednom.

## Kamo dalje

Popratna pitanja su [[evaluating-ai-interventions-methods|kako mjeriti intervenciju]], [[reporting-interpreting-aied-research|izvještavanje o sustavu i vlastitoj upotrebi umjetne inteligencije]] i [[research-gaps-aied|gdje je literatura tanka]]. [[equity-ethics-pedagogical-safety-research|Pravednost, etika i pedagoška sigurnost u istraživanju]] pokriva studentske podatke, a [[ai-assisted-educational-research|istraživanje u obrazovanju uz pomoć umjetne inteligencije]] je puna konceptualna stranica iza ove.
