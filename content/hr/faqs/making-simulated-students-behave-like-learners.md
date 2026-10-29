---
title: "Kako postići da se simulirani učenik ponaša kao stvarni učenik?"
created: "2026-10-02T08:36:18-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T14:24:49-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
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

U četvrtak imate demonstraciju. Simulirani učenik u njoj pogriješi u zadatku s razlomcima, dobije jedan savjet i zatim proizvede točan odgovor s točnim objašnjenjem. Netko u prostoriji pita zašto bi učenik koji se muči to učinio, a vi nemate odgovor.

Prije sljedeće demonstracije trebate ovoliko jasno: poticanje modela da glumi učenika proizvodi zvuk učenika. Ono što proizvodi ponašanje jest ograničenje onoga što simulator zna, struktura u potezima i validacija prema zapisima stvarnih učenika. Samo 3% istraživanja koja simuliraju učenike validira svoj simulator nakon upotrebe, pa to nitko neće provjeriti umjesto vas.

## Kratka verzija

**1.** Zapišite koje učenike ne simulirate i stavite tu rečenicu ondje gdje će je vaši korisnici pročitati.

**2.** Testirajte stanje uvjerenja, a ne prozu. Pitajte što simulator kaže nakon ispravka.

**3.** Namjerno ograničite znanje: odredite epistemičko stanje ili uklonite znanje.

**4.** Skriptirajte interakciju potez po potez. Bolji poticaj za personu ne ispravlja odstupanje.

**5.** Ocjenjujte vjernost ponašanja i odaziv na vođenje odvojeno, prema zapisima stvarnih učenika.

## Odlučite na koje pitanje simulator odgovara

Tri se posla stapaju pod pojmom „simulirani učenik“, a trebaju različitu mašineriju. Uvježbavanje učitelja ili poučavatelja treba partnera koji se uvjerljivo ponaša pod pritiskom. Revizija toga kako umjetna inteligencija postupa s različitim profilima učenika treba pokrivenost profila do kojih vam je stalo. Predviđanje ishoda kolegija treba distribuciju učenika, a ne jednog uvjerljivog pojedinca. Simulator izgrađen za prvi posao razočarat će vas u trećem, a dokazi u nastavku stalno ih razdvajaju.

## Imenujte učenike koje ne pokrivate

Najkorisniji nalaz za svakoga tko se sprema povjerovati simulatoru odnosi se na pokrivenost. Dvanaest učitelja koji su poučavali LLM-učenike izvijestilo je o prekompliciranom jeziku, nedostatku emocija, neprirodnoj pažljivosti i neobjašnjenim skokovima u znanju, a simulacije su predstavljale samo jedan od četiriju kvadranata stvarnog ponašanja učenika ([[llm-student-simulation-teacher-insights|Martynova i sur., 2026]]). Kvadrant koji su pokrili bio je onaj koji je najlakše simulirati.

To je važno jer gotovo nitko ne provjerava. Samo 3% istraživanja koja simuliraju učenike validira svoj simulator nakon upotrebe. Ako izgradite jedan i preskočite validaciju, u velikoj ste većini, a ujedno ste i razlog zašto ta statistika ostaje citatljiva.

## Ograničite što simulator zna

Sposoban model ne može lako glumiti djelomičnog znalca. Istraživanje to naziva **paradoksom kompetentnosti**: široko sposobni modeli od kojih se traži da oponašaju djelomično upućene učenike proizvode nerealne obrasce pogrešaka i dinamiku učenja.

Odstupanje ima smjer i pokazuje na učenike koje je najpotrebnije simulirati. Prema učeničkim idejama iz 49 nastavnih jedinica znanosti usklađenih s NGSS-om, šest je modela većinu ideja zadržalo unutar očekivanog opsega znanja i otprilike dvije trećine na razini čitanja ciljne dobi ili niže, a zatim premašilo upravo ondje gdje je učenik bio najmlađi. Ideje za osnovnu i srednju školu češće su prelazile opseg znanja i razinu čitanja ciljne dobi, a korpus je naginjao širem rezoniranju, tehničkijem rječniku i manjem broju oznaka nesigurnosti („možda“, „čini se“) nego stvarne ideje iz nastave ([[llm-simulating-student-scientific-thinking-2026|Nguyen i Cao, 2026]]).

Dvije napomene iz tog istraživanja. Izbor modela nije jednodimenzionalan, jer sustav koji blisko odgovara idejama iz nastave ipak ih može postaviti iznad razine razreda. A ispravak je često nastavni: izričit ponovni poticaj s razinom razreda vratio je većinu modela u raspon.

## Odredite stanje ili oduzmite znanje

Ako model zna previše, možete imenovati stanje u kojem bi trebao biti ili oduzeti znanje koje ne bi trebao imati.

**Uvjetujte epistemičkim stanjem.** Okvir koji ne zahtijeva treniranje gradi kognitivni prototip svakog učenika iz [[knowledge-graph|grafa znanja]] i ocjenjuje kandidate pretraživanja snopom prema njemu, izvješćujući o 100% poboljšanju točnosti simulacije ([[simulating-students-diverse-cognitive-levels-2025|Wu i sur., 2025]]). Njegova kvaliteta raste s kognitivnom razinom učenika, pa slabiji učenici ostaju teži slučaj, što je nezgodno s obzirom na to da su obično poanta. Modeliranje kognitivne dinamike umjesto statične persone ide dalje: CogEvolutionova ažuriranja stanja utemeljena na ICAP-u dosegnula su R²LC = 0,92, gdje statični agenti dosežu 0,45, a pala su na 0,58 bez svog ICAP modula ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang i sur., 2026]]).

**Oduzmite znanje.** Potiskivanje 16 ciljanih komponenti znanja u Mistral-7B spustilo je točnost s oko 0,75 pri omjeru zaboravljanja od 10% na ispod 0,5 pri 40%, dok se osnovni model držao blizu 0,85. Pokazalo se da je potisnuto znanje obnovljivo kroz nadzirano ponovno učenje i dijalog vođen poučavateljem ([[simulating-novice-students-machine-unlearning-2026|Song, Guo i Lin, 2026]]). To je najbliže izravnoj proizvodnji početnika, a obnovljivost postaje prednost ako želite da simulator uči tijekom sesije.

## Skriptirajte poteze, a ne personu

Pokazuje se da je stabilnost persone problem dizajna interakcije, a ne izbora modela. Križanjem pet LLM-ova s tri dizajna poticaja i četiri persone intenziteta ADHD-a, skriptirane interakcije usidrene u zadatak uklonile su odstupanje ponašanja koje ocjenjuju promatrači, do 97% u odnosu na neskriptirani dijalog. Bez izričitih uputa o personi osnovni prikaz učenika naginjao je visokim simptomima ADHD-a ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase i Leins, 2026]]).

Ako vaš simulator odstupa, pogledajte što od njega tražite potez po potez prije nego promijenite model ili prepišete opis učenika.

## Ocjenjujte dvije stvari, a ne jednu

StudentSim zahtijeva da dvije osobine drže zajedno: **vjernost ponašanja**, koliko dobro simulator odgovara vlastitim odgovorima učenika, i **odaziv na vođenje**, koliko se pouzdano ažurira prema onome kamo vodi poučavateljevo usmjeravanje. Njegovo mjerilo pretvara javne korpuse učenika (šah, pisanje engleskog kao drugog jezika, matematika) u protokol po učeniku na kojem se svaki simulator prilagođava i ocjenjuje na pridržanim zapisima. Praćenje stanja specifično za domenu pokazalo se slabim u odazivu, a igranje uloga LLM-a samo poticajem pokazalo se slabim u vjernosti ([[studentsim-llm-student-simulators|Yang i sur., 2026]]). Simulator može proći jedan test, a pasti na drugom, zato izvijestite o objema.

Kao dokaz koncepta, zamrznuti StudentSim rabljen kao nagrada u petlji [[reinforcement-learning|učenja pojačavanjem]] šahovskog poučavatelja proizveo je poučavatelje koje su stručnjaci ocijenili točnijima, bolje vođenima i osobnijima od onih treniranih prema nagradi simulatora temeljenog na vrhunskom LLM-u ili posve bez učenja pojačavanjem. Dobar simulator može biti i signal za treniranje i mjera.

Vjernost na razini radnje ima vlastito ograničenje. Simulatori učenika reproduciraju vidljive radnje bez latentnog rezoniranja iza njih, a [[inside-llm-student-simulator-reasoning-2026|INSIDE]] fino podešava modele da generiraju unutarnji dijalog prije svake radnje, dosežući najviše podudaranje generiranog rezoniranja sa stvarnim izmjenama koda od 51,8% na poznatim problemima i 57,9% na neviđenima, bez gubitka vjernosti radnje (Niousha i sur., 2026). Ako vam je važno zašto je vaš simulirani učenik nešto učinio, podudaranje radnje nije dovoljno.

## Validirajte prema stvarnim učenicima i navedite osnovnu razinu

Dvije usporedbe pokazuju koliko validacija stoji.

Mjerivši devet metoda simulacije prema sedam referentnih mjera na 382 pridržana dijaloga iz najvećeg javnog korpusa stvarnih matematičkih dijaloga učenika i poučavatelja, poticanje je zaostajalo za finim podešavanjem u govornim činovima (0,4998 prema 0,6840), ROUGE-L (0,1648 prema 0,3212) i kosinusnoj sličnosti (0,5460 prema 0,7390). Najbolja testirana metoda, optimizacija preferencija na modelu od 8B, nadmašila je nadzirano fino podešavanje samo neznatno i bila je lošija u pogreškama, a ljudska evaluacija s tri poučavatelja ponovila je taj poredak ([[simulated-students-tutoring-dialogues-2026|Scarlatos i sur., 2026]]). Vrh te ljestvice blizu je sredine, pa osnovna razina o kojoj izvijestite odlučuje koliko impresivno izgleda vaš vlastiti broj.

SWIM je najjasnija usporedba poticanja, finog podešavanja i učenja pojačavanjem, jer ocjenjuje svaki generirani esej prema ciljnom profilu osobine, a ne prosudbom po dojmu. Poticanje utemeljeno na rubrikama dalo je ograničenu kontrolu čak i kod jakih vlasničkih modela, s najboljim prosječnim QWK-om osobine od 0,577 (Claude Sonnet) i 0,422 (GPT-5.4) te gotovo nula za otvoreni model od 7B. Nadzirano fino podešavanje na stvarnim parovima ocjena i eseja dosegnulo je 0,474 ± 0,023 za taj model od 7B. GRPO s nagradom izvedenom iz automatiziranog ocjenjivanja eseja dosegnuo je 0,618 ± 0,005, a dobici su se zadržali i kod dvaju neovisnih ocjenjivača na kojima politika nikada nije trenirana ([[swim-student-writing-simulation-2026|SWIM]]).

Poticanje je također proizvelo idealiziranu populaciju, a ne realnu: srednji normalizirani ukupni rezultat 0,74 prema 0,58 kod stvarnih učenika i medijalnu duljinu od 304 riječi prema 167. Trenirani modeli obnovili su ljudske distribucije ocjena i duljina bez ikakvog nadzora duljine. Jedno je ostalo teško: autentičan oblik niske kompetentnosti. Trenirani modeli obnovili su sintaksu, ali napisali su premalo pravopisnih i gramatičkih pogrešaka, dok je poticanje simuliralo slabost kroz površinsko kvarenje, pogreške razasute po inače kompetentnoj prozi.

Površinski realizam slab je test u obama smjerovima. U zaslijepljenoj studiji stručni su označivači pogrešno klasificirali 164 od 196 (83,7%) Java predaja koje je generirao LLM kao ljudske, jer su pogreške funkcionalno bile nerazlučive od autentičnih, a podudaranje sa stvarnim pogreškama zatim je padalo kako je težina problema rasla ([[simulating-students-java-programming-errors-llms|Keramati i sur., 2026]]). Na sedam modela od 4B do 120B parametara simulatori su prelazili na točan odgovor gotovo jednolikim stopama bez obzira na povratnu informaciju koju su dobili, pa sličnost rezultata ne govori ništa o stanju uvjerenja iza njega. Treniranje prema **rezultatu selektivnog preokreta** podiglo je vjernost do +0,56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar i Sachan, 2026]]).

## Provjerite bi li opis bio dovoljan

Prije nego izgradite kohortu, provjerite jeftiniju opciju. Za evaluaciju online iskustva učenja prije nego se studenti uključe, predviđanje odustajanja i dovršetka te davanje povratnih informacija o dizajnu, jedan web-agent koji „opisuje“, prođe kroz lekciju i proizvede bogat opis iskustva nadmašio je izravnu simulaciju populacije studenata.

Simulirani učenici u toj usporedbi pokazali su mnogo manji raspon ponašanja od stvarnih učenika: na 100 agenata i pet testnih lekcija reproducirali su samo oko 4% putanja koje su prošli stvarni studenti, uz znatno veći trošak računalnih resursa. Postupak „opiši pa predvidi“ postigao je najbolju predikciju distribucije odustajanja na velikom globalnom kolegiju CS1, sa srednjim JSD-om od 0,060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell i Piech, 2025]]).

Granica koju povlači praktična je. Simuliranje distribucije studenata može biti nepotrebno ili kontraproduktivno kad je cilj predviđanje ishoda ili kritika dizajna. Simulacija opravdava svoj trošak kada je pokrivanje stvarne raznolikosti učenika važno, primjerice pri reviziji toga kako umjetna inteligencija postupa s raznolikim profilima ili kad učitelju treba nešto s čime može uvježbavati.

## U čemu graditelji griješe u vezi s tim

Površinski realizam je cilj. Stopa pogrešne klasifikacije od 83,7% za strojno napisan kod i gotovo jednoliko preokretanje odgovora na sedam modela govore da ljudski prosuditelj koji čita rezultat ne može vidjeti osobinu koju tvrdite. Testirajte umjesto toga odgovor na ispravak.

Bolji poticaj za personu ispravlja odstupanje. Skriptirani potezi usidreni u zadatak smanjili su odstupanje koje ocjenjuju promatrači za do 97% na pet modela i tri dizajna poticaja. Posao je odradio dizajn poteza.

Jači osnovni model zatvara jaz u kompetentnosti. Jak vlasnički model postigao je 0,422 na QWK-u osobine uz poticanje, dok je fino podešeni model od 7B dosegnuo 0,474, a ista usporedba šest modela najviše je premašila upravo na najmlađim razinama razreda. Izbor modela razmjenjuje jednu os vjernosti za drugu.

Validacija znači da je kolega pročitao transkript i pomislio da zvuči ispravno. Java rezultat pokazuje dokle ta prosudba dopire. Validacija znači pridržane zapise stvarnih učenika i osnovnu razinu koju možete imenovati.

Simuliranje populacije temeljita je opcija. Na 100 agenata simulacije su pokrile oko 4% putanja koje su prošli stvarni studenti, uz znatno veći trošak računalnih resursa od agenta koji opisuje.

## Što će vam se vratiti

**„Učitelji nisu mogli razlikovati naš simulator od učenika.“** U zaslijepljenoj Java studiji stručni su označivači pogrešno klasificirali 83,7% strojnih predaja kao ljudske. To mjeri označivače i ostavlja stanje uvjerenja neispitanim.

**„Fino podešavanje je izvan dosega našeg tima.“** Onda suzite tvrdnju na ono što poticanje podupire i recite to. Poticanje je postavilo gornju granicu od 0,577 za najjači testirani model i gotovo nulu za otvoreni model od 7B, a proizvelo je i idealiziranu distribuciju ocjena.

**„Nemamo pristup podacima stvarnih učenika.“** StudentSimov je protokol izgrađen iz javnih korpusa učenika u šahu, pisanju drugog jezika i matematici. Javni podaci ograničavaju što možete tvrditi o vlastitoj populaciji, a daju vam osnovnu razinu, što je stvar koju većina izvješća izostavlja.

**„GRPO je pobijedio nadzirano fino podešavanje, pa bismo trebali trenirati učenjem pojačavanjem.“** Jest, s 0,618 prema 0,474. Oblik niske kompetentnosti ostao je težak u obama slučajevima, s premalo pravopisnih i gramatičkih pogrešaka, a u zasebnom mjerilu optimizacija preferencija nadmašila je fino podešavanje samo neznatno i izgubila u pogreškama. Provjerite o kojoj osobini ovisi vaš slučaj upotrebe.

**„Najslabiji učenici mali su dio naših korisnika.“** Oni su najteži slučaj za svaku metodu na ovoj stranici, a nalaz o pokrivenosti kaže da se simulacije grupiraju u najlakši kvadrant. Ako će se vaš simulator rabiti za izvođenje zaključaka o učenicima koji se muče, taj jaz pripada u izvješće.

## Što učiniti ovog tjedna

**1.** Napišite rečenicu o pokrivenosti: koje učenike ovaj simulator ne predstavlja. Stavite je u README i u bilješke za demonstraciju.

**2.** Dodajte jednu sondu u svoj testni skup koja ispravlja simulator i provjerava ostaje li u pogrešci.

**3.** Zamijenite slobodni razgovor s personom u jednom toku potezima usidrenima u zadatak i usporedite odstupanje.

**4.** Ocijenite jedan postojeći simulator prema pridržanim stvarnim zapisima u pogledu vjernosti i odaziva i izvijestite o tim dvama brojevima odvojeno.

**5.** Provedite provjeru agenta koji opisuje na pitanju na koje doista trebate odgovor prije nego financirate kohortu.

## Kamo dalje

[[simulating-students|Simuliranje učenika]] puna je konceptualna stranica. [[checking-whether-educational-ai-works|Provjera djeluje li obrazovna umjetna inteligencija]] pokriva evaluaciju sustava koje testirate prema simulatoru, a [[making-ai-better-at-supporting-learning|Kako umjetnu inteligenciju učiniti boljom u podršci učenju]] pokriva metode treniranja iza rezultata finog podešavanja ovdje. [[addressing-common-misconceptions-ai-education|Suočavanje s uobičajenim zabludama o umjetnoj inteligenciji u obrazovanju]] bavi se pitanjem mogu li simulirani učenici zamijeniti stvarne učenike u istraživanju.
