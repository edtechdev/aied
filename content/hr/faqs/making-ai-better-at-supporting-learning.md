---
title: "Kako možemo učiniti da umjetna inteligencija bolje podupire učenje u našem predmetu?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:24:49-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Zahtjev kaže „dodatno istrenirajte model na materijalima kolegija“. Proračun je odobren, GPU je rezerviran za sljedeći mjesec, a student poslijediplomskog studija zamoljen je da sastavi skup podataka. Nitko na sastanku nije pitao koliko postiže običan poticaj ni koliko postiže pretraga po ključnim riječima na istim pitanjima.

Pitajte ta dva pitanja prvo. U ovoj bazi znanja jaz između općeg modela i modela koji poznaje kolegij uglavnom je problem utemeljenja u izvorima i poticaja, a dokazi za taj redoslijed neobično su izravni: studija o pomoćniku kolegija našla je da je pronalaženje, a ne model, bila odluka prvog reda, a opći model bez utemeljenja postigao je *manje* od obične osnovice TF-IDF.

Treniranje je stvarno i katkad nužno. To je treća ili četvrta stvar koju treba pokušati, a posao u nastavku poredan je tako da otkrijete koja vam je stepenica doista potrebna prije nego potrošite tromjesečnu računalnu snagu.

## Kratka verzija

**1.** Zabilježite koliko postiže običan poticaj i koliko postiže trivijalna leksička metoda prije nego išta promijenite. Taj drugi broj drži vas iskrenima.

**2.** Stavite pronalaženje po vlastitim materijalima ispred modela. To je najveći pojedinačni dobitak zabilježen ovdje s obzirom na cijenu i reverzibilan je.

**3.** Izradite poticaj prema svojoj rubrici i iterirajte dok poboljšanje ne stane. Plato je signal da bi treniranje moglo nešto dodati.

**4.** Prilagodite težine s [[llm-training-and-fine-tuning|LoRA-om]] kad je cilj stabilan i uzak: format, rubrika, razina čitljivosti, rječnik domene.

**5.** Naknadno trenirajte kad je problem ponašanje, a ne sadržaj, i napišite nagradu prema mjerilu za koje očekujete da će se igrati na njega.

**6.** Gradite skup za treniranje na razini koraka. Podaci samo s odgovorima ne poučavaju zabludu.

## Dobijte osnovicu koju doista možete pobijediti

Prije nego išta promijenite, zabilježite što vraća običan poticaj. Zatim zabilježite što vraća trivijalna metoda.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Studiju o pomoćniku baze znanja kolegija]] vrijedi pročitati već zbog ovoga. Lokalni LLM bez pronalaženja dosegnuo je **52,3%** točnosti. Osnovica TF-IDF, leksička metoda stara desetljećima, dosegnula je **55,4%**. Model je bio lošiji od klasične metode.

Preskočite ovaj korak i nećete moći reći je li vaše dodatno treniranje pomoglo. Još gore, možete pustiti u rad sustav koji pretraga po ključnim riječima pobjeđuje i to otkriti tek kad to spomene asistent u nastavi. Dva broja u tablici, uzeta u jednom poslijepodnevu, štite ostatak proračuna.

## Utemeljite model u vlastitim materijalima

Dodavanje [[rag|generiranja potpomognutog pronalaženjem]] po materijalima kolegija, bez ikakvog dodatnog treniranja, podiglo je isti sustav s 52,3% na **66,6%**. Taj je dobitak došao od indeksa i nosi svojstvo koje treniranje nema: kad se vaši dokumenti promijene, ponovno indeksirate.

Dva druga rezultata pokazuju u istom smjeru. PRISMA pregled 23 empirijske studije o prilagodbi umjetne inteligencije za [[writing-education|poučavanje pisanja]] našao je **prevlast inženjeringa poticaja (N = 13), ispred dodatnog treniranja (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026|sustavni pregled prilagodbe umjetne inteligencije poučavanju pisanja]]). Gdje baza znanja mora ostati aktualna, pronalaženje je jedina poluga koja ostaje aktualna bez ponovnog pokretanja posla treniranja.

Pronalaženje ima i pedagoški oblik. Utemeljenje modela u vlastitim razrađenim primjerima i rubrikama način je da ostane unutar [[scaffolding|postupne potpore]] koju ste projektirali, odgovarajući na razini koju ste postavili umjesto da odluta u generičke savjete. To odlutavanje najčešća je pritužba na gotove tutore, a češće je problem pronalaženja nego problem težina.

## Napišite poticaj prema svojoj rubrici i pazite na plato

Rad na poticaju nije uvod koji obavljate dok čekate GPU. Dva rezultata pokazuju što postiže sam:

- **Vođenje poticaja prema rubrici, iterativno zajednički dotjerano, podiglo je suglasnost LLM-a i čovjeka na studentskom projektnom radu s 54,75% na 81,25%** (Cronbachov alfa 0,393 na 0,798), bez ikakvog dodatnog treniranja ([[yasar-llms-iterative-pedagogical-design-2026|Yasar i sur.]]).
- Poticaj izrađen prema literaturi izazvao je ciljne matematičke [[misconceptions|zablude]] uz **0,98** prisutnosti, nasuprot **0,40** kod širokog poticaja ([[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang i Zhang]]).

Praktični je signal **plato**. U studiji o generiranju čestica iterativno dotjerivanje poticaja prestalo je poboljšavati, a dodatno treniranje GPT-4.1 *na optimiziranom poticaju* tada je dodalo preostali dobitak ([[gpt-item-generation-l2-listening-2026|studija o generiranju čestica za slušanje]]). Plato nakon stvarnog rada na poticaju dokaz je da treniranje ima prostora nešto dodati. Posezanje za treniranjem prije nego do njega dođete je nagađanje, a nagađanje košta mjesec.

Zapazite što rezultat o generiranju čestica znači za redoslijed. Dodatno treniranje izgrađeno je na optimiziranom poticaju, pa rad na poticaju nije bio uzaludan kad je tim na kraju trenirao. Jeftina stepenica ujedno je specifikacija za skupu.

## Prilagodite težine kad je cilj stabilan i uzak

Prilagodba se isplati kad trebate da model pouzdano drži neko svojstvo: razinu čitljivosti, izlazni format, domenu koja mu nedostaje. Nalaz koji se ponavlja jest da **ciljanje pobjeđuje veličinu**.

- Tri modela od **8B** dodatno trenirana na stručno osmišljenom kurikulu čitanja za djecu nadmašila su GPT-4o bez primjera i Llama 3.3 70B na mjerama povezanima s težinom, uz zanemarive sigurnosne probleme. Autori to uokviruju kao **kontrolabilnost umjesto razmjera** ([[llm-children-reading-story-generation|generiranje priča za čitanje djeci]]).
- Skup instrukcija od **24.795 primjera** utemeljen u indijskim sustavima znanja dao je dodatno treniranje od **7B** koje je ocijenilo **6,39** pred vanjskim panelom od pet prosuditelja, unutar **0,15** od jakog općeg referentnog modela uz djelić cijene postavljanja. Isti osnovni model ocijenio je **gotovo nulu na dimenzijama specifičnima za domenu** bez dodatnog treniranja ([[iks-instruct-dataset-indian-knowledge|skup instrukcija iz indijskih sustava znanja]]). Taj jaz između opće kompetentnosti i kompetentnosti ovdje cijeli je argument za prilagodbu domene.
- Jedan [[llm-training-and-fine-tuning|LoRA]] adapter treniran na otprilike **3.900** objedinjenih ocijenjenih primjera doveo je pet malih otvorenih modela (od 4B do 30B) na razinu ljudskog ocjenjivača ili više na dva ispita iz računarstva ([[llm-graders-computer-science-exams-2026|LLM ocjenjivači na ispitima iz računarstva]]). Jedan adapter, jedan skup podataka, nekoliko osnovnih modela: to je oblik postavljanja koji mali tim može voditi.

Riječ *stabilan* u naslovu nosi težinu. Format, rubrika, razina čitljivosti i rječnik domene stabilne su mete. Tekst prožet prosudbom nema takvu metu, i tu prilagodba pada, kako pokazuju sljedeća dva odjeljka.

## Promijenite ponašanje kad su odgovori problem

Prilagodba poučava model *što proizvoditi*. Naknadno treniranje poučava ga *kako se ponašati*. Za tutorstvo je ta razlika cijeli problem: opći su modeli naknadno trenirani na ljudskoj sklonosti korisnosti, što znači odgovarati brzo, a poučavanje traži zadržavanje odgovora.

Najjači obrazovni rezultati u ovom korpusu žive ovdje. Nagradni model EduQwen izričito je dao prednost **vođenju odgovora pred izravnim odgovorima**, a njegov trostupanjski postupak dosegnuo je **96,52%** na mjerilu CDPK nasuprot **90,55%** kod Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026|Singh i sur.]]). Simulator pisanja SWIM pomaknuo se od poticaja utemeljenog u rubrici (najbolji QWK **0,577**) preko nadziranog dodatnog treniranja (**0,474 ± 0,023**) do učenja s pojačanjem (**0,618 ± 0,005**) na svakom svojstvu i svakom poticaju ([[swim-student-writing-simulation-2026|simulacija studentskog pisanja]]).

Čitajte brojeve SWIM-a pažljivo, jer je srednji korak išao unatrag. Nadzirano dodatno treniranje na demonstracijama učinilo je simulator lošijim od poticaja s kojim je počeo, a tek je nagradni signal vratio gubitak i zatim pobijedio osnovicu. Ako se vaš plan zaustavlja na nadziranom dodatnom treniranju, plan može biti obilazak.

## Nadzirite na razini koraka

Jedan je nalaz ovdje lako propustiti i skupo zanemariti: **kvaliteta nadzora pobjeđuje količinu nadzora**. Modeli podešeni na instrukcijama naučili su algebarske zablude samo kad su bili trenirani na **tragovima rješavanja na razini koraka**. Trenirani samo na konačnim odgovorima, točnost je ostala **ispod 30% na svakoj veličini podataka** ([[misconception-acquisition-dynamics-llms-2026|dinamika usvajanja zabluda u LLM-ovima]]).

Ako su vaši primjeri za treniranje parovi pitanja i točnog odgovora, trenirate pogrešnu stvar, a dodavanje primjera to neće popraviti. Treba vam posredni rad: pogrešno skretanje, korak na kojem je student zalutao, ispravak. Prikupljanje toga inženjerski je problem podataka s pedagoškim ograničenjem, i obično znači bilježenje sesija umjesto skidanja ključeva odgovora.

## Gdje prilagodba tiho pada

Ovo je dio koji entuzijazam preskače.

**Tekst prožet prosudbom.** U WrAFT-u je isti projekt koji je uspješno dodatno trenirao za *ocjenjivanje* eseja (QWK 0,84) dao skraćen i neparsabilan izlaz kad je dodatno trenirao za *povratne informacije*, dok je izravno poticanje Claudea 3.7 dalo povratne informacije koje su nastavnici ocijenili najboljima ([[wraft-automated-writing-evaluation-argumentative-2026|automatizirano vrednovanje argumentativnog pisanja]]). Dodatno treniranje poučilo je model da pogodi ocjenu, i ocjenjivanje je bilo jedino što je naučio.

**Prijenos među modelima.** Razmjer nije pouzdan prediktor daljnje izvedbe pod LoRA prilagodbom, a **identični hiperparametri dali su kvalitativno različito ponašanje po arhitekturama** ([[aiawe-automated-writing-evaluation|automatizirano vrednovanje pisanja]]). Recept koji je radio na jednom modelu nije recept.

**Arhitektura prije broja parametara.** Dodatno treniranje triju otvorenih modela za slike na 1.000 opisanih slika iz nuklearnog inženjerstva znatno je poboljšalo Stable Diffusion XL, dalo ograničene dobitke za SD-v3.5-Medium i proizvelo **nikakvo mjerljivo poboljšanje za Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026|učenje na slikama iz nuklearnog inženjerstva]]).

**Problem je bila validacija.** Neistrenirani vrhunski GPT-4 dao je otprilike **35%** preslabo usmjerenih, netočnih ili savjeta koji otkrivaju odgovor kad je sastavljao povratne informacije za tutorstvo, a njegove vlastite automatizirane provjere kvalitete nisu se slagale s ljudskom prosudbom ([[reddig-maclellan-personalized-feedback-llm-2026|Reddig i MacLellan]]). To je problem filtriranja, a LoRA ga neće riješiti.

Obrazac u sva četiri slučaja: prilagodba pouzdano pomiče model prema meti koju možete specificirati i ocijeniti. Ne dodaje prosudbu, a postupak bez provjere i dalje će pustiti loš rezultat.

## Planirajte prilagodbu iskreno

Za stepenicu prilagodbe letvica je niža nego što većina timova pretpostavlja: **nekoliko stotina do nekoliko tisuća primjera i jedan GPU**. LoRA trenira malen broj dodanih parametara i ostavlja osnovne težine zamrznutima, pa se nekoliko modela može posluživati iz jednog adaptera.

Rang je kompromis, a ne brojčanik koji treba povećati do maksimuma. Dobitak po milijunu parametara adaptera padao je monotono kako je rang rastao, a usklađenost na razini kolegija bila je odluka o razmjeru i rangu, a ne besplatna nadogradnja ([[lora-finetuned-control-systems-course-qa-2026|LoRA na pitanjima iz kolegija upravljanja sustavima]]).

Koje slojeve prilagođavate također je stvaran izbor. Ažuriranje **samo posljednja četiri sloja Transformera** BERT-ovog analizatora diskursa pobijedilo je i prilagodbu samo gornjeg sloja i dodatno treniranje pune dubine ([[bert-discourse-english-teaching-2026|BERT u poučavanju engleskog]]). Tri konfiguracije, tri različita rezultata, i najjeftinija je pobijedila.

Trošak koji je lako podcijeniti je vrednovanje, koje je veće od računa za računalnu snagu. Vidi [[checking-whether-educational-ai-works|Kako znamo da obrazovna umjetna inteligencija radi ispravno, a ne samo da dobro ocjenjuje?]]

## Kalibrirajte što očekujete

Izbor modela i poticaja zajedno objašnjava samo oko **15%** neusklađenosti između LLM-ova i ishoda učenja studenata, a u toj su studiji ansambli s ponderiranjem po mjerilu i jednoglasnim glasovanjem usklađenost učinili *gorom* ([[educational-llm-alignment|usklađenost obrazovnih LLM-ova]]). Podaci predtreniranja vodeća su poluga ponašanja modela i jedina poluga koju ne možete povući.

Ništa od toga ne govori protiv posla gore. Govori protiv očekivanja da će dodatno treniranje popraviti dizajnerski problem. Ako je problem to što vaš tutor odgovara prezorno, treniranje ga može riješiti. Ako je problem to što se vaši učenici ne angažiraju s njim, treniranje neće, a brojka od 15% kaže da je novac bolje potrošiti drugdje.

## Što timovi pogrešno shvaćaju

Dodatno treniranje način je da model nauči vaš kolegij. Pronalaženje po vlastitim materijalima podiglo je isti sustav s 52,3% na 66,6% bez ikakvog treniranja, a poticaj dotjeran prema rubrici pomaknuo je suglasnost s 54,75% na 81,25%. Treniranje poučava ponašanje i format daleko pouzdanije nego sadržaj.

Veći osnovni model uklanja potrebu za svim tim. Model od 8B dodatno treniran na kurikulu čitanja za djecu pobijedio je GPT-4o bez primjera i Llama 3.3 70B na mjerama težine, a dodatno treniranje od 7B palo je unutar 0,15 od jakog općeg referenta uz djelić cijene postavljanja. Veličina i prikladnost različite su osi, i samo se jedna od njih prodaje po tokenu.

Više podataka popravit će skup za treniranje koji je pogrešno građen. Nadzor samo s odgovorima ostavio je točnost ispod 30% na svakoj veličini podataka u studiji o zabludama. Razmjer ne popravlja metu kojoj nedostaje informacija koja modelu treba.

Recept koji je radio na jednom modelu radit će na sljedećem. Identični hiperparametri dali su kvalitativno različito ponašanje po arhitekturama, a ista metoda dodatnog treniranja znatno je poboljšala jedan model za slike, a drugome nije dala nikakvo mjerljivo poboljšanje. Ponovno pokrenite recept na svom osnovnom modelu ili nagađate.

Nadzirano dodatno treniranje siguran je srednji korak prije učenja s pojačanjem. U SWIM-u je nadzirana faza ocijenila 0,474 nasuprot 0,577 iz poticaja koji je zamijenila, i tek ju je nagradni signal vratio. Srednji korak može vas koštati mjeseca i nazadovanja.

## Što će vam se vratiti

**„Proračun je odobren za dodatno treniranje, pa dodatno trenirajmo.“** Potrošite tjedan na osnovicu i indeks prvo. Ako pronalaženje pomakne broj, dodatno treniranje kasnija je odluka donesena s boljim informacijama, i imat ćete jači argument za njega ili dobar razlog da vratite GPU.

**„Naš je problem to što ga studenti ne rabe.“** Treniranje mijenja ono što model proizvodi. Brojka od 15% opisuje koliko izbor modela i poticaja objašnjava u neusklađenosti s ishodima učenja, a angažman stoji izvan toga. Izmjerite gdje studenti odustaju prije nego kupite računalnu snagu.

**„Ne možemo slati studentske radove API-ju dobavljača.“** Najjači LoRA rezultat ovdje došao je iz otvorenih modela u rasponu od 4B do 30B, a jedan adapter poslužio je nekoliko njih. Taj oblik postavljanja dostupan je timu s jednim GPU-om i bez ugovora o obradi podataka.

**„Poticanje je hak; pravi posao znači treniranje.“** Pregled 23 studije o poučavanju pisanja našao je poticaje vodećim pristupom, a dodatno treniranje iza njih, a najveći dobitak zabilježen na ovoj stranici došao je od indeksa. I pregled i studija o pomoćniku kolegija poredali su te stepenice po izmjerenom dobitku.

**„Pokušali smo poticanje i došlo je do plata, pa trebamo treniranje.“** To je ispravno čitanje i to je jedini slučaj u kojem je uspon opravdan. Unesite optimizirani poticaj u dodatno treniranje kako je učinio tim za generiranje čestica i očekujte da će dobitak biti manji nego što je bio rad na poticaju.

**„Materijali našeg kolegija nisu dosljedni, pa će pronalaženje vraćati smeće.“** Hoće, i pronalaženje nasljeđuje kvalitetu korpusa. Čišćenje korpusa jeftinije je od treniranja modela da ga zaobiđe, a dobitak s 52,3% na 66,6% izmjeren je na uobičajenim materijalima kolegija, a ne na probranom skupu.

## Što učiniti ovaj tjedan

**1.** Pokrenite osnovicu samo s poticajem i osnovicu s ključnim riječima na 50 stvarnih pitanja iz svog kolegija i zapišite oba broja.

**2.** Usmjerite pronalaženje na materijale koje već imate i ponovno pokrenite istih 50, da se dobitak mjeri prema vašoj vlastitoj osnovici.

**3.** Stavite rubriku u sistemski poticaj i iterirajte tjedan dana. Zaustavite se kad dva kruga ne dodaju ništa.

**4.** Pregledajte svoj skup za treniranje na tragove na razini koraka. Ako su to parovi pitanja i odgovora, skup podataka nije spreman.

**5.** Napišite jedno svojstvo koje trebate da se pouzdano drži i odlučite je li to ponašanje ili sadržaj. Ta odluka bira stepenicu.

## Kamo dalje

[[training-ai-tutors-to-guide-rather-than-answer|Kako istrenirati tutora s umjetnom inteligencijom da vodi studente, a ne da im odgovara?]] detaljno pokriva polovicu naknadnog treniranja. [[checking-whether-educational-ai-works|Kako znamo da obrazovna umjetna inteligencija radi ispravno?]] pokriva kako reći je li išta od toga uspjelo. [[developing-ai-tutor|Koje su najbolje prakse za razvoj djelotvornog tutora s umjetnom inteligencijom?]] je strana dizajna interakcije istog cilja, a [[designing-educational-ai-software|Koje su najbolje prakse za dizajn obrazovnog softvera s umjetnom inteligencijom?]] pokriva okolni sustav. Puna konceptualna stranica je [[llm-training-and-fine-tuning|treniranje i fino podešavanje LLM-ova]].
