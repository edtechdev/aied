---
title: "Mogu li koristiti AI za pošteno i pouzdano ocjenjivanje studentskih radova?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Imate rubriku u koju vjerujete, više predanih radova nego sati i alat koji vraća ocjenu i nekoliko samouvjerenih odlomaka u vremenu koje je potrebno da se pročita jedan esej. Isprobate ga na radovima koje ste već ocijenili. Polovica ocjena izgleda ispravno. Jedna je neobično darežljiva, jedna neobično stroga, a još ne možete reći je li to alat ili esej.

Kratak odgovor za kolegu: AI ocjenjivanje zaslužuje mjesto kao nadzirani pomoćnik ili drugi čitatelj, na zadacima na kojima ste ga provjerili prema radovima koje ste već ocijenili. Sukladnost se ne prenosi između vrsta procjene. U ispitu iz farmacije sa šesnaest studenata [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat i sur. (2026)]] pronašli su gotovo savršenu sukladnost na objektivnim tipovima čestica i nepouzdanu sukladnost na otvorenim odgovorima. Na tri engleska sveučilišta [[opraise-automated-marking-ai-assessment-2026|projekt OpRaise]] pronašao je da se AI i ljudski ocjenjivači slažu o razini ocjene u između 35% i 65% slučajeva, ovisno o instituciji, uz ocjene sabijene prema sredini. Tečno obrazloženje nije dokaz da su vaši kriteriji primijenjeni. Je li rezultat [[assessment-validity|valjan za vašu odluku]] lokalno je pitanje na koje morate sami odgovoriti, a [[human-in-the-loop-ai|osoba ostaje odgovorna]] za sve što postaje zabilježena ocjena.

## Kratka verzija

**1.** Imenujte ulogu prije nego što bilo što pokrenete: pomoćnik za povratnu informaciju, drugi čitatelj ili primarni ocjenjivač. One traže različite količine dokaza.

**2.** Počnite s ulogom s najmanjim posljedicama koja rješava vaš stvarni problem. Ako bi posao obavio deterministički ključ, LLM dodaje rizik, a ne vrijednost.

**3.** Kalibrirajte na radovima koje ste već ocijenili, uključujući jake, slabe, granične i neobično strukturirane radove. Zgodni primjeri ne dokazuju ništa.

**4.** Držite kalibracijski skup i testni skup odvojenima, inače mjerite koliko ste dobro ugodili alat poznatim esejima.

**5.** Izvijestite o točnoj sukladnosti, razlikama u ocjenama i smjeru pristranosti, a ne o korelaciji. Posebno provjerite granice prolaza i pada.

**6.** Recite studentima koju ulogu alat ima, tko odlučuje o ocjeni i kako zatražiti pregled.

## Odlučite što AI smije raditi

Tri se aranžmana nazivaju „AI ocjenjivanjem“ i nose različite obveze.

**Pomoćnik za povratnu informaciju** sastavlja komentare ili označava moguće propuste koje vi prihvaćate, prepisujete ili odbacujete. Rizik je ograničen na kvalitetu komentara, a vi čitate sve prije nego što dođe do studenta. **Drugi čitatelj** predlaže ocjene po kriterijima ili označava neslaganja kako bi strukturirao vaše vlastito ocjenjivanje. Njegove pogreške moraju biti korisne, a ne samo pogrešne: oznaka koja vas vraća na rad koji biste inače ocijenili nemarno vrijedi imati. **Primarni ocjenjivač** proizvodi ocjene koje postaju zabilježene ocjene. To je aranžman koji dokazi u ovoj bazi znanja ne podupiru izvan uskih, lokalno provjerenih slučajeva.

Odaberite najnižu razinu koja rješava vaše stvarno ograničenje. Ako vaše opterećenje ocjenjivanjem dolazi od provjere fiksnog ključa odgovora, obično determinističko bodovanje transparentnije je i revizijski provjerljivije od jezičnog modela, a farmaceutska studija upućuje na to da je prednost LLM-a na objektivnim česticama dijelom bila artefakt toga što su mu tijekom ocjenjivanja predani točni odgovori. Sačuvajte model za rad koji traži interpretaciju, a zatim tu interpretaciju provjerite.

[[automated-assessment|Automatizirano ocjenjivanje]] pokriva širi stroj bodovanja, moderiranja i generiranja povratne informacije. Ova je stranica pitanje prosudbe ispod svega toga.

## Što dokazi doista pokazuju

Sukladnost ovisi o tipu čestice. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat i sur. (2026)]] ocijenili su farmaceutski ispit mješovitog formata koji je ispunilo 16 studenata i izvijestili o sukladnosti s ocjenjivanjem nastavnika između 0,935 i 1,000 za čestice višestrukog izbora, odabira svih točnih i dopunjavanja. Sukladnost na subjektivnim otvorenim odgovorima bila je nepouzdana. Dva su detalja važnija od naslova. Točni odgovori bili su dostupni tijekom ocjenjivanja, što laska rezultatima na objektivnim česticama, a dodavanje rubrike nije dosljedno poboljšalo sukladnost, što potkopava uobičajenu pretpostavku da dobra rubrika pretvara LLM u dosljednog ocjenjivača. Šesnaest studenata ne može podržati tvrdnju o vašem kolegiju. Varijacija unutar jednog ispita je nalaz koji se prenosi: sustav koji dobro rješava vaš dio s višestrukim izborom ne govori ništa o vašim esejima.

Sukladnost o razini ocjene umjerena je i nejednaka. [[opraise-automated-marking-ai-assessment-2026|Izvješće OpRaise]] ispitalo je autentične eseje iz psihologije na preddiplomskom studiju i pronašlo sukladnost između AI i ljudskih ocjenjivača o britanskoj razini ocjene od 63% u Cambridgeu, 53% u Nottinghamu i 35% na Manchester Metropolitanu. Ocjene su bile sabijene prema sredini, a krajevi distribucije ocijenjeni su najnetočnije: esej koji je čovjek ocijenio sa 75 svaki je AI sustav ocijenio nekoliko bodova niže, a esej ocijenjen sa 50 nekoliko bodova više. To je sabijanje neuspjeh na koji treba paziti, jer šteti upravo studentima na vrhu i dnu vaše distribucije, dok sredina izgleda dobro. Ovo je izvješće projekta, a ne recenzirano istraživanje, i najkorisnije je upozorenje u bazi dokaza.

Vaše vlastite ocjene nesavršen su referent. Nastavnici se međusobno ne slažu, a vaša prethodna ocjena sličnog eseja prosudba je, a ne istina o stanju stvari. Sukladnost s jednim ocjenjivačem uspostavlja dosljednost s tim ocjenjivačem, što nije isto što i pravednost. Gdje ulog to opravdava, uključite drugog kvalificiranog čitatelja da presudi teške slučajeve, a neslaganje između AI i ljudskog ocjenjivača tretirajte kao poticaj da ponovno pročitate rad, a ne kao presudu o tome koja je strana u pravu.

Dosljednost i dobra prosudba razilaze se. Model može vratiti gotovo identične ocjene pri ponovnom pokretanju, a istodobno loše primjenjivati vaše kriterije, jer ponovljivost mjeri stabilnost, a ne valjanost. Krajevi u OpRaiseu pokazuju obrazac: sustav je bio postojan i pogrešan upravo o esejima koji su najviše bili važni.

## Provjerite postupak prije nego što dotakne ocjenu

Prođite kroz ovo na prethodno ocijenjenim, primjereno zaštićenim radovima koji pokrivaju odgovore koje doista dobivate: jake, slabe, granične, nedovršene, neobično strukturirane i točne odgovore izražene na nepoznat način.

**1. Odredite kriterije i tražite dokaze.** Dajte zadatak, rubriku, pravila bodovanja i primjere kako legitimni alternativni odgovori dobivaju bodove. Zatražite sažeta obrazloženja na razini kriterija povezana s prepoznatljivim dijelovima teksta. Zatim ta obrazloženja sami provjerite prema radu.

**2. Odvojite kalibraciju od evaluacije.** Ugodite na jednom skupu, testirajte na drugom. Bez te podjele ne možete razlikovati provjereni postupak od dobro prilagođenoga.

**3. Mjerite odluke koje su važne.** Zabilježite točnu sukladnost, veličinu i smjer razlika u ocjenama te to dodjeljuje li model sustavno više ili niže ocjene. Zasebno ispitajte granicu prolaza i pada i druge granice s posljedicama. Visoka korelacija može stajati na vrhu sustavnog pomaka.

**4. Testirajte ponovljivost i ponašanje na podskupinama.** Ponovno pokrenite podskup pod identičnim postavkama. Tražite pogreške na razini kriterija i to da se jezik, formatiranje ili legitiman stil pogrešno ne shvate kao slabije razumijevanje. Mali brojevi u podskupinama podupiru oprez, a ne tvrdnju o pravednosti.

**5. Napišite pravilo eskalacije.** Odlučite koji slučajevi uvijek dobivaju ljudsko ocjenjivanje i kako se rješavaju neslaganja. Ne dopustite da odlučuje samouvjerenost koju model navede; samouvjerenost treba provjeriti prema uočenim pogreškama prije nego što može nešto nositi.

**6. Zaštitite tijek rada.** Koristite odobreno okruženje, svedite identifikacijske podatke na najmanju mjeru i držite rubriku i upute odvojenima od predanog sadržaja. Ta podjela manipulaciju čini teže skrivenom. Ne čini je nemogućom.

**7. Zabilježite što bi provjeru obezvrijedilo.** Čuvajte model i verziju, poticaj, rubriku i postavke. Ažuriranje modela ili revizija rubrike razlog je da ponovite reprezentativne provjere, a ne da pretpostavite kontinuitet.

## Učinite aranžman vidljivim studentima

Studenti imaju pravo znati koju ulogu alat ima, tko odlučuje i kako osporiti rezultat. Neodređeno otkrivanje proizvodi sumnju; pojedinosti proizvode radni odnos koji funkcionira. Nešto poput: „Odobreni AI alat može sastaviti komentare po rubrici na vaš nacrt. Ja pregledavam svaki komentar i određujem vašu ocjenu. Obratite mi se ako komentar pogrešno predstavlja vaš rad.“ Zatim to učinite istinitim.

Dva smjera neuspjeha traže zasebnu pažnju. Pretjerani odbici ono je o čemu studenti izvješćuju i prevladavaju u žalbama. Nezasluženi bodovi ono je o čemu se šuti i što tiho kvari zapis. Uzmite uzorke za oboje i uključite svoje sate provjere kada prosuđujete je li vam tijek rada uštedio išta.

## Što će vam se vratiti

**„I ljudi su pristrani.“** Jesu, i zato usporedba traži izričite kriterije, a ne ocjenu jednog ocjenjivača kao mjerilo. Raspršenost institucija u OpRaiseu ovdje je argument: ako su ljudski ocjenjivači na tri sveučilišta postigli tako različitu sukladnost o razini s istim sustavima, ljudski je referent dio onoga što treba odrediti, a ne fiksna mjera.

**„Rubrika to čini objektivnim.“** Rubrika čini očekivanja izričitima. Njezina primjena ostaje interpretacija, a farmaceutska studija pokazuje da davanje rubrike nije dosljedno poboljšalo sukladnost. Ono što rubrika daje jest provjerljiv standard za obrazloženja, a ne jamstvo za ocjene.

**„Morao bih provjeriti sve, što obesmišljava svrhu.“** Za neke zadatke to je ispravan zaključak, a odgovor je suziti posao. Sastavljanje komentara iz vlastitih bilježaka o bodovanju ostavlja prosudbu kod vas i uklanja tipkanje. Oznake drugog čitatelja na graničnim radovima usmjeravaju vašu pažnju tamo gdje mijenjaju ishod.

**„Kolega je to isprobao i dobro je radilo.“** Pitajte što je mjerio. Pozitivne ocjene u ovoj literaturi rutinski postoje zajedno s pogreškama, a kolega koji je pročitao nekoliko razumnih rezultata proveo je demonstraciju, a ne provjeru. Pitanje je što bi njegov postupak učinio esejima koje biste primijetili posljednje.

## Što učiniti ovaj tjedan

**1.** Odaberite jednu procjenu i zapišite jedinu ulogu koju bi AI imao. Zapišite koji bi vam dokazi dopustili da ga pomaknete jednu razinu više.

**2.** Pokrenite ga na pet radova koje ste već ocijenili, odabranih tako da uključuju jedan jak, jedan slab, jedan granični i jedan s neobičnom, ali legitimnom strukturom.

**3.** Zabilježite svako neslaganje s radom i kriterijem te imenujte pogreške koje biste smatrali neprihvatljivima, a ne samo pogrešnima.

**4.** Provjerite idu li razlike u ocjenama u dosljednom smjeru i zasebno provjerite svoju granicu prolaza i pada.

**5.** Sastavite odlomak o otkrivanju namijenjen studentima i put do pregleda te usporedite svoje vrijeme provjere s vremenom ocjenjivanja koje ste izbjegli.

## Kamo dalje

[[assessment-validity|Valjanost procjene]] pojam je koji odlučuje o ovim pitanjima: podupiru li dokazi zaključak koji želite izvesti. [[automated-assessment]] pokriva tehnologiju i njezinu izmjerenu izvedbu po formatima, a [[ai-feedback-at-scale]] bavi se susjednim problemom generiranih komentara i toga djeluju li studenti na njih.

Za ono što bi ocjena trebala predstavljati kada se studenti koriste AI-jem, uključujući zamjenu konstrukta i autentificirane dokaze o procesu, vidi [[redesign-assessment-ai-era|redizajn ocjenjivanja u eri AI-ja]]. Za pitanje može li detekcija zamijeniti obranjiv dizajn zadatka, vidi [[should-we-use-ai-detectors|treba li koristiti AI detektore]]. Za evaluacijsko pitanje ispod svega toga, vidi [[checking-whether-educational-ai-works|provjeru radi li obrazovni AI]].
