---
title: "Kako AI agenti mogu poduprijeti studente i nastavnike?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T14:24:49-04:00"
translation_of: faqs/ai-agents-support-students-instructors
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

Demonstracija dobavljača traje četrdeset minuta. Agent čita izvedbeni plan, sastavlja nacrt provjere znanja za sljedeći tjedan, označava troje studenata koji nisu otvorili tekst i nudi da im pošalje e-poštu. Vaš prorektor želi odluku o licenciji do kraja mjeseca.

[[agentic-ai|Agent]] planira, poziva alate, drži kontekst, dijeli rad na podzadatke i prilagođava se kroz izmjene, što je više nego što čini [[conversational-ai|chatbot]]. Studentske i nastavničke uloge koje to otvara stvarne su. Dokazi ne pokazuju da više autonomije proizvodi više učenja: u jedinoj ovdje izravno uspoređenoj studiji agent i chatbot bili su izjednačeni. Stavite autonomiju tamo gdje osoba provjerava rezultat, zadržite planiranje kod učenika i ocijenite kvalitetu poučavanja prema vlastitoj rubrici.

## Kratka verzija

**1.** Imenujte posao prije proizvoda.

**2.** Počnite na nastavničkoj strani, gdje nastavnik već pregledava rad.

**3.** Tretirajte dodanu autonomiju kao trošak dok dokazi ne kažu drukčije.

**4.** Zadržite planiranje i prosudbu kod učenika, jer se zadatak radi upravo o njima.

**5.** Ocijenite agenta prema svojoj rubrici i zakažite samostalnu provjeru prije kraja pilota.

## Odaberite posao prije nego odaberete agenta

[[agentic-workflows-education|Agentic Workflows in Education]] imenuje četiri ponavljajuće sposobnosti: refleksiju, planiranje, upotrebu alata i višeagentsku suradnju. Svaka uz mogućnost dodaje i trošak, u [[explainable-ai|tumačivosti]], koordinaciji, [[trust-calibration|povjerenju]], latenciji i nadzoru.

Studentske uloge protežu se od [[adaptive-learning|prilagodljivog]] poučavanja i planiranja učenja preko [[formative-assessment|formativne]] povratne informacije, vođenog [[problem-solving|rješavanja problema]] i generiranja vježbe do preporuka preduvjeta i refleksivnog [[metacognition|metakognitivnog]] [[prompt-engineering|oblikovanja poticaja]]. Nastavničke uloge pokrivaju razvoj materijala, [[automated-question-generation|generiranje pitanja]] i njihovu provjeru, trijažu povratnih informacija, [[learning-analytics|analitiku]] kolegija, dizajn poučavanja, dohvaćanje resursa i orkestraciju specijaliziranih podagenata.

Dvije su od njih sigurnije u ranoj fazi, jer obje proizvode artefakt koji osoba pročita prije studenata: generator pitanja uparen s validatorom i nacrt koji nastavnik uređuje.

## Počnite tamo gdje čovjek već provjerava rad

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], prvo [[rct|randomizirano kontrolirano ispitivanje]] sustava čovjeka i umjetne inteligencije u poučavanju uživo, dao je tutorima početnicima smjernice u stvarnom vremenu izvedene iz zaključivanja iskusnih tutora, na 900 tutora i otprilike 1.800 studenata. Studenti tutora s pristupom imali su 4 postotna boda veću vjerojatnost ovladati temama, što se popelo na 9 bodova kod najslabije ocijenjenih tutora, čiji su studenti sustigli studente bolje ocijenjenih tutora u kontrolnoj skupini. Stajalo je oko 20 dolara po tutoru godišnje, a analiza više od 550.000 tutorskih poruka pokazala je da tutori prelaze s davanja odgovora na postavljanje usmjeravajućih pitanja. To je umjetna inteligencija koja pojačava [[teacher-role|nastavnika]].

Agent nije poučavao studenta. Hranio je čovjeka usred razgovora, a čovjek je odlučio što reći. Osoba u petlji i ishod blizak samom radu ono je što rezultat čini prenosivim na drugi kolegij.

## Ne pretpostavljajte da više autonomije kupuje više učenja

[[ilieva-agentic-genai-higher-education-2026|Studija sa 130 studenata na kolegiju o e-trgovini]] pronašla je da su i chatboti i agenti s [[generative-ai|generativnom umjetnom inteligencijom]] ocijenjeni više od tradicionalnog [[online-teaching-and-learning|e-učenja]] po učenju i [[personalized-learning|personalizaciji]], bez značajne razlike između chatbota i agenta. Dodana autonomija, nikakva dodana vrijednost na tim mjerama.

Okvir te studije tretira agente kao ograničene partnere u učenju pod ljudskim nadzorom, s ciljevima, kontrolnim točkama i konačnim odlukama prepuštenim ljudima. [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] od toga pravi [[governance|pravilo upravljanja]]: autonomija ne smije premašiti zrelost dokaza ni snagu odgovornog ljudskog nadzora, a dokazi su najjači za ishode na razini artefakta, a najslabiji za trajno [[learning-gains|učenje]] i [[equity-in-ai-education|ravnopravnost]].

Rizik na strani učenika ide u istom smjeru. Agent koji planira i prati umjesto studenta uklanja praksu koja gradi [[self-regulated-learning|samoregulaciju]] i poziva na [[cognitive-offloading|rasterećenje]]. [[agentic-ai-pedagogical-best-practice-2026|Smjernice najbolje prakse]] traže namjerno trenje, [[scaffolding|postupnu potporu]] koja se povlači i [[human-in-the-loop-ai|ljudski nadzor]]. [[desirable-difficulties|Produktivno trenje]] ima radne primjere. Agenti konstruktivnog sukoba koji se spore sa slabim dizajnom poboljšali su rezultate dizajna u pregledanim istraživanjima. [[simulating-students|Simulirani vršnjaci]] podupiru [[collaborative-learning|suradničko učenje]] i [[socratic-method|sokratsko]] propitivanje, a [[medical-education|kliničke]] [[simulation|simulacije]] omogućuju učenicima da uvježbavaju tamo gdje je pogreška jeftina.

Test za svaku od njih: što student nakon sesije može učiniti što je prije toga činio agent? Predaja prosudbe studenta košta [[agency|vježbe]] u njezinoj upotrebi.

## Provjerite agenta prema vlastitoj prosudbi

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Osam AI nastavnih agenata raspoređenih kroz medicinski kurikulum]] dobilo je različit rang prema rezultatima koje je generirala platforma i prema neovisnoj stručnoj rubrici. Agent koji je na platformi bio treći završio je posljednji po kvaliteti poučavanja. Rezultati platforme indeksiraju uspješnost studenata, koja se mijenja iz razloga koji nemaju veze s poučavanjem.

Pitajte što broj na nadzornoj ploči broji, ko je napisao rubriku iza njega i kako bi nizak rezultat izgledao u studentskom radu. [[pedagogical-safety|Pedagoška sigurnost]] pripada istoj reviziji, jer lanac [[pedagogical-agent|agenata]] otežava reći koja je komponenta odgovorna kad je odgovor pogrešan.

## Planirajte isključivanje

Randomizirana ispitivanja pokazuju da kratka pomoć umjetne inteligencije može sniziti kasniju samostalnu izvedbu, a interval nakon povlačenja, [[cognitive-washout-ai-skill-decay-2026|kognitivno ispiranje]], gotovo je posve nemjeren. Sinteza na kojoj počiva ova stranica oslanja se na [[meta-analysis-systematic-review|pregled opsega]] 474 studije i nalazi da je rad koncentriran u [[higher-ed|visokom obrazovanju]], [[stem-education|STEM područjima]], kratkoročnim nacrtima i poučavanju temeljenom na tekstu, a samo je manjina izričito utemeljena u obrazovnoj teoriji. Pilot koji završava kad završi licencija izmjerio je pogrešan prozor.

## Što administratori o tome pogrešno shvaćaju

Agent je nadograđeni chatbot, pa bi se nadogradnja trebala vidjeti u ishodima. U usporedbi sa 130 studenata oba uvjeta s umjetnom inteligencijom nadmašila su e-učenje, a nijedan nije nadmašio drugi.

Nadzorna ploča rangira kvalitetu poučavanja. Ona rangira uspješnost studenata, a osam agenata dalo je poredak koji je preokrenuo treće i posljednje mjesto u odnosu na stručnu rubriku.

Autonomija je značajka koju treba kupiti. Pravilo proporcionalnosti ide u suprotnom smjeru, a dokazi su najtanji tamo gdje je autonomija najveća.

Pristup zatvara jaz u ravnopravnosti. Nejednak pristup sposobnim agentskim sustavima može ga proširiti, a agent reproducira pristranost podataka za obuku na velikoj skali.

## Što će vam se vratiti kao prigovor

**„Studenti će jednostavno pustiti da to odradi posao.“** Neki hoće, a arhitektura odlučuje koliko je to lako. Agenti koji planiraju i pišu nacrt umjesto studenta na to pozivaju. Agenti koji zahtijevaju pokušaj, a zatim postavljaju pitanje, ne pozivaju.

**„Dobavljačeva evaluacija kaže da radi.“** Pitajte što taj broj broji. Ako je to uspješnost studenata koju mjeri platforma, mjeri studente jednako kao i agenta.

**„Nitko ne može reći koji je agent odgovoran u lancu.“** To vrijedi za većinu sadašnjih implementacija. Imenujte vlasnika lanca, bilježite koja je komponenta proizvela koji rezultat i držite ljudsku kontrolnu točku prije nego išta dođe u studentski dosje.

## Što učiniti ovaj tjedan

**1.** Napišite posao i ishod po kojem ćete ga prosuditi, po jednu rečenicu za svako, prije sljedećeg razgovora s dobavljačem.

**2.** Ocijenite rezultat jednog agenta prema svojoj rubrici na deset primjera stvarnog studentskog rada i sačuvajte ocjene.

**3.** Dodajte samostalan zadatak s datumom i odgovornom osobom u plan pilota.

## Kamo dalje

[[developing-ai-tutor|Razvoj AI tutora]] pokriva studentsku izgradnju od cilja do ljestvice pomoći, a [[evaluating-ai-interventions-methods|Metode vrednovanja intervencija s umjetnom inteligencijom]] pokriva je li stvar funkcionirala. [[intelligent-tutoring|Inteligentno poučavanje]] i [[ai-literacy|pismenost u području umjetne inteligencije]] daju rječnik dizajna koji ova stranica pretpostavlja.
