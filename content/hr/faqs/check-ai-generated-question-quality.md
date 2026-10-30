---
title: "Kako provjeriti jesu li pitanja za kvizove i ispite koja generira AI doista dobra?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Zatražite dvadeset pitanja iz svojih bilježaka s predavanja. Vraćaju se s ključem odgovora, objašnjenjima, oznakama težine i kategorijama Bloomove taksonomije, u oblikovanom dokumentu koji izgleda dovršeno. Vaše ime uskoro ide na njega.

Kratak odgovor za kolegu: generirana pitanja su kandidati, a ne procjena. Riješite svako sami, provjerite što čestica traži da student doista učini i saznajte kako studenti na nju odgovaraju prije nego što se počne brojati. U dvije najveće studije u ovoj bazi znanja zanimljiv signal nije to da generiranje funkcionira, nego gdje ne uspijeva. Iterativno generiranje unutar tijeka rada specifičnog za kolegij proizvelo je upotrebljive ispite s višestrukim izborom u 71 sveučilišnom razredu ([[assessing-quality-ai-generated-exams-field-2025|Isley i sur., 2025]]). U reviziji 311 pitanja u uporabi na području znanosti o podacima oznake težine koje je dao model gotovo su se savršeno poklapale s razinama Bloomove taksonomije koje je generirao uz njih (Spearman ρ = 0,90), dok su se s onim što su studenti doista postizali poklapale s ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An i Wang, 2026]]). Oznaka je bila opis poticaja, a ne mjerenje čestice.

## Kratka verzija

**1.** Zapišite ishod i dokaze koje bi zadovoljavajući odgovor pružio prije nego što išta generirate.

**2.** Izradite nacrt rasporeda kako biste vidjeli koje ishode skup uzorkuje i koliko često.

**3.** Riješite svaku česticu sami prije nego što se pouzdate u ključ, a objašnjenje čitajte kao tvrdnju koju treba provjeriti.

**4.** Pitajte što student mora učiniti da bi odgovorio. Pitanje koje kaže „analiziraj“, a traži prisjećanje, pitanje je prisjećanja.

**5.** Oznake težine tretirajte kao metapodatke poticaja, a ne kao psihometriju.

**6.** Pilotirajte čestice i pregledajte kako funkcioniraju, zatim revidirajte slabe.

## Počnite s učenjem za koje želite dokaze

Generiranje je dovoljno jeftino da izlazni format tiho postane specifikacija. Ako vaše bilješke daju uredne čestice višestrukog izbora, na kraju ćete mjeriti mogu li studenti birati među uvjerljivim tvrdnjama, kakav god ishod nastavni plan navodio.

Najprije odredite ishod, zatim dokaze koje bi zadovoljavajući odgovor pružio, a potom znanje koje se od studenata očekuje. Uključite materijale kolegija, pogrešne predodžbe koje očekujete, dopuštene alate i format odgovora. Ako želite da studenti tumače dokaze, čestica mora tražiti tumačenje, a dodavanje te riječi pitanju o definiciji to ne postiže. Duga scenarij i dalje može biti rješiv preko jedne poznate fraze koja odaje rješenje.

Nacrt rasporeda procjene tablica je ishoda prema česticama, a njegova je vrijednost u tome što otkriva praznine prije studenata. On također čini vidljivim kompromis: svaka čestica koju generirate iz najlakšeg materijala čestica je koju niste potrošili na ishod koji vam je najvažniji.

## Pregledajte svaku česticu po šest dimenzija

Počnite s ključem. Je li obranjiv prema mjerodavnom sadržaju kolegija i drži li objašnjenje kada ga samostalno provjerite? Ključ i objašnjenje često dolaze iz istog pogrešnog koraka, pa provjera jednoga ne provjerava drugo.

Zatim pitajte što odgovaranje na česticu doista traži od studenta između čitanja i biranja. Tu generirane čestice najčešće podbacuju i tu je oznaka najmanje pouzdana.

Sljedeće provjerite usklađenost: pruža li odgovaranje dokaze za namjeravani ishod ili za nešto susjedno i lakše mjerljivo?

Pročitajte formulaciju kao student. Je li potrebna informacija prisutna i je li uklonjena dvosmislenost koja nije povezana s vašim konstruktom?

Pogledajte zajedno opcije i pravila bodovanja. Jesu li ometači uvjerljivi i razlikuju li se međusobno i od ključa, i prepoznaje li ključ legitimne alternativne odgovore koje bi vaša rubrika bodovala?

Naposljetku, pitajte koga čestica isključuje. Opterećenje čitanjem, kulturni kontekst, vizualni elementi i oblikovanje mogu nametnuti zahtjeve nepovezane s ishodom. Za višejezičnog studenta ili studenta s invaliditetom čestica koja nagrađuje brzo čitanje mjeri nešto što niste namjeravali, a [[differential-effects-across-learner-groups|izvedba podskupina]] mjesto je na kojem se to pokazuje.

Drugi model može vam pomoći uočiti probleme, a suglasnost dvaju modela nije neovisna provjera točnosti. Dijele podatke za treniranje i načine neuspjeha. Riješite česticu, a zatim neka kvalificirana osoba pogleda one koje će se brojati.

## Ne dopustite da oznaka težine odluči

Literatura o [[automated-question-generation|generiranju pitanja]] korisnija je o neuspjehu oznaka nego o uspjehu generiranja. [[student-llm-use-ai-question-difficulty-data-science-2026|An i Wang (2026)]] ispitali su 378 autorskih pitanja u kolegijima znanosti o podacima, od kojih je 311 upotrijebljeno kod 54 studenata u 7.888 odgovora. Oznake lako, srednje i teško koje je dao model korelirale su s njegovim vlastitim sugeneriranim razinama Bloomove taksonomije s ρ = 0,90, a s empirijskom težinom čestice s ρ = 0,06. Otprilike 70% upotrijebljenih čestica svaki je student točno riješio, što je ostavilo gotovo nikakvu varijaciju koju bi oznaka težine uopće mogla pratiti.

Slijede dvije pouke. Prvo, težina je svojstvo interakcije između čestice i populacije, pa se nijedna oznaka dobivena prije primjene čestice ne može uzeti kao izmjerena vrijednost. Drugo, banka čestica koje svi rješavaju točno nije laka procjena, nego beskorisna: gotovo da ne nosi informaciju o tome tko što zna.

Pozitivan je slučaj uži od tvrdnji dobavljača i vrijedi ga znati precizno. [[assessing-quality-ai-generated-exams-field-2025|Isley i sur. (2025)]] generirali su ispite s višestrukim izborom od deset pitanja za 71 sveučilišni razred, otprilike 1.200 studenata, koristeći petlju koja generira, prosuđuje i revidira svaku česticu pod uvjetom materijala koje je za svaki kolegij dao njegov nastavnik, a zatim su čestice usporedili s ispitima koje su napisali ljudi. To je tijek rada s pregledavateljem unutar sebe, proveden po kolegiju, a ne jedan poticaj nad općenitim sadržajem. Potpora vrijedi za taj tijek rada pod tim uvjetima i ne proteže se na sve što isti model proizvede iz zalijepljenih neuređenih bilježaka.

## Provedite ciklus generiraj, pregledaj, pilotiraj, revidiraj

Generirajte prema nacrtu rasporeda i tražite namjeravani ishod, ključ, sažeto rješenje i pogrešnu predodžbu koju svaki ometač treba uhvatiti. Te napomene čine dizajn preglednim. Nisu dokaz da je dizajn dobar.

Popravite prije nego što nagomilate. Izbrišite nepotkrijepljene tvrdnje, dvostruke čestice, slučajne tragove u tekstu pitanja, više obranjivih ključeva i složenost nepovezanu s konstruktom, i zabilježite što ste promijenili, jer obrazac popravaka govori koji dio poticaja treba ispraviti.

Pilotirajte gdje je pilot razmjeran. Praktična vježba s malim ulogom ili vođeni pilot unutar procjene daje vam podatke o odgovorima. Recite studentima kako prijaviti dvosmisleno ili pogrešno pitanje i čitajte te prijave, jer su vaš najinformativniji signal o pogreškama.

Zatim pregledajte kako čestice funkcioniraju: udio točnih odgovora, koji ometači privlače odgovore i prati li se uspjeh na čestici s izvedbom na ostatku procjene. Čestica na kojoj jaki studenti podbacuju, a slabi uspijevaju, greška je, a ne teško pitanje. U malom razredu te su statistike nestabilne, pa ih kombinirajte s pregledom sadržaja i objašnjenjima studenata umjesto da postotak tretirate kao presudu.

Revidirajte i čuvajte zapis: odobrenu verziju, ishod kojem služi, ključ, obrazloženje, bilješke s pregleda i povijest primjene. Za velike banke ili banke s visokim ulogom tu pripadaju stručnjaci za procjenu i odgovarajuće psihometrijske metode, a stručnost u [[educational-measurement|mjerenju]] nije nešto što pažljivo čitanje može zamijeniti.

## Kako to izgleda u kolegiju

U uvodnom kolegiju sociologije ishod bi mogao biti razlikovanje strukturnog objašnjenja od individualnoga. Slaba čestica traži da studenti definiraju „strukturno“, što mjeri prepoznavanje vokabulara. Jači kandidat daje kratak scenarij o obitelji i odluci o zaposlenju, a zatim pita koje objašnjenje najbolje prepoznaje strukturno ograničenje, s ometačima koji predstavljaju uvjerljiva, ali različita tumačenja.

Nastavnik provjerava da scenarij doista podupire ključ, da nijedna dva izbora ne izražavaju istu ideju i da odgovor ne ovisi o terminologiji koju kolegij nikad nije uveo. Nastavak u jednom retku, „koji detalj podupire vaš izbor?“, iznosi na vidjelo zaključivanje koje odabrani izbor skriva. Prilagodba nije testirana kao format čestice, a njezina je vrijednost uža: na pitanja za pregled gore može se odgovoriti prije primjene čestice, a loš se ključ može popraviti prije nego što ga studenti vide.

Za studente koji generiraju vlastita pitanja za vježbu isto pravilo vrijedi na njihovoj razini: pokušajte riješiti česticu, provjerite objašnjenje prema izvorima kolegija i nerješive slučajeve donesite nekome tko poznaje predmet. [[study-with-ai|Vježba učenja]] koja uči studente da nekritički prihvaćaju generirane ključeve uči pogrešnu naviku.

## Što će vam se vratiti

**„Dalo je odgovor i objašnjenje.“** Oboje može ponoviti istu pogrešku, a objašnjenje stvara povjerenje upravo zato što je tečno. Provjerite zaključivanje prema svojim materijalima, a ne prema njegovu vlastitom prepričavanju.

**„To su samo pitanja za vježbu.“** Vježba poučava pogrešne predodžbe kada pogrešni ključevi ostanu neispravljeni, a studenti uvježbavaju pogrešku jednako spremno kao i točan odgovor. Manji ulog mijenja to koliko je pregleda razmjerno. Ne mijenja to je li točnost važna.

**„Studentima se kviz svidio.“** Užitak je dokaz o iskustvu. Lagani kviz koji svi ugodno dovrše dobro se osjeća i malo mjeri, a revizija na području znanosti o podacima pokazala je da popularnost čestica nije bila popraćena nikakvim upotrebljivim signalom o težini.

**„Rubrika ili oznake Bloomove taksonomije pokazuju da pogađa ishode.“** Oznake Bloomove taksonomije koje daje isti korak generiranja najmanje su neovisan dokaz koji je dostupan. ρ = 0,90 prema oznakama i ρ = 0,06 prema izvedbi studenata upravo je to kako to izgleda kad se izmjeri.

## Što učiniti ovaj tjedan

**1.** Odaberite jedan ishod i zapišite dokaze koje bi zadovoljavajući odgovor pružio. Zatim generirajte pet čestica prema njemu, tražeći ključ, rješenje i namjeravanu pogrešnu predodžbu iza svakog ometača.

**2.** Riješite svih pet ne gledajući u ključeve i zabilježite one u kojima se vi i model ne slažete.

**3.** Zamolite kolegu da pregleda dva najjača kandidata na usklađenost i dvosmislenost i izbrišite sve što ni jedno od vas ne može obraniti.

**4.** Pilotirajte preživjele s kratkim nastavkom koji pita studente koji detalj podupire njihov izbor.

**5.** Zabilježite što ste promijenili i zašto, kako bi sljedeća serija počela od boljeg poticaja, a ne od istoga.

## Kamo dalje

[[automated-question-generation]] pojmovna je stranica za metode generiranja i njihovu izmjerenu kvalitetu, a [[educational-measurement]] pokriva analizu čestica, pouzdanost i psihometriju na koju pilot samo upućuje. Obje stoje pod [[assessment-validity|valjanošću procjene]], standardom kojem cijeli ciklus služi.

Prosudbeni dio istog problema pripada [[ai-grading-fairness-reliability|AI ocjenjivanju]], jer dobra čestica loše ocijenjena nije ništa bolja od loše čestice dobro ocijenjene. Za šire pitanje što bi ocjena trebala predstavljati kada se studenti mogu koristiti AI-jem, vidi [[redesign-assessment-ai-era|redizajn ocjenjivanja u eri AI-ja]].
