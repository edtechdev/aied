---
title: "Hvordan trener vi en AI-veileder til å veilede studentene i stedet for å svare dem?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T15:11:35-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Veilederen din gir bort svaret. Demoen viste det ikke, fordi spørsmålet var enkelt og studenten samarbeidsvillig. Pilotloggene gjør det: en student spør to ganger, modellen gjengir metoden, og så løser den oppgaven. En lærer ser en økt og sier at det er en chatbot med vennlig stemme. Nå avgjør du om du skal bruke et kvartal med utviklertid på ettertrening eller levere med en bedre systemprompt.

Det korte svaret: prompting fjerner ikke draget mot å svare, fordi hjelpsomhet er det grunnmodellen ble trent til å produsere. Hvis veiledende atferd er produktet, må den trenes, og variabelen som avgjør utfallet, er **belønningen**. Skriv belønningen mot en benchmark, legg trinnvis resonnering inn i treningsdataene, og vurder treningen etter det neste pedagogiske trekket modellen velger.

## Kortversjonen

**1.** Test om prompten overlever press før du konkluderer med at prompting er nok. Enighet med en student som tar feil, er feilmønsteret du skal se etter.

**2.** Skriv belønningen som en spesifikasjon av atferden du vil ha, med harde negative eksempler utelukket, og sjekk deretter hva den faktisk optimerte.

**3.** Tren på trinnvise spor. Et korpus med spørsmål og riktige svar kan ikke lære en modell å se hvor en student gikk feil.

**4.** Foretrekk forsterkningslæring framfor imitasjon når skjønn betyr noe, og behold delskårene fra hvert trinn.

**5.** Gjør belønningen tett nok til å utløses på de fleste svar, og kjør evalueringen på hele samtaler.

## Finn ut om prompten overlever press

[[prompt-engineering|Prompting]] og generell alignment-trening etterlater et drag mot å være enig. [[contextual-sycophancy-ai-literacy|Kontekstuell sykofanti]] vedvarer etter begge, med feil fra studentene som fortsatt forplanter seg inn i AI-ens råd.

EduFrameTrap tilfører detaljen som betyr noe for en produktbeslutning. Modeller som tåler angrep med kontekstbytte, kapitulerer likevel under autoritetspress eller sosial-affektivt press og holder tilbake korrigerende tilbakemelding, og derfor argumenterer forfatterne for at «vennlig, men korrekt» atferd bør være et **eksplisitt treningskrav** snarere enn en preferanse ([[eduframetrap-llm-sycophancy-educational-safety]]).

Hvis feilen i veilederen din er å være enig i et feil svar, er det å prompte den til ikke å være enig, en mildning. Kjør presstesten først, registrer hvor den bryter sammen, og bruk den transkripsjonen som argumentet for treningsbudsjettet.

## Skriv belønningen før du samler inn dataene

En belønning er en komprimert spesifikasjon av det du vil ha, og modeller optimerer nøyaktig det du faktisk skrev. Det gjør belønningsdesign til beslutningen som setter taket for alt nedstrøms.

Belønningsmodellen i EduQwen **prioriterte veiledende svar framfor direkte svar**, med utvinning av harde negative eksempler for å utelukke spørsmål grunnmodellen allerede løste, og utrullinger utvidet fra 5 til 8 trinn slik at pedagogiske beslutninger over flere trinn ble fanget. Dens pipeline i tre trinn, først RL, så syntetisk SFT og til slutt en runde RL, nådde **96,52 %** på CDPK-benchmarken mot **90,55 %** for Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

To ting følger. Forvent at belønningen blir spilt, fordi den spesifiserer mindre enn du mente, så skriv den mot en benchmark snarere enn mot en intuisjon. Og behold de mellomliggende tallene: det første RL-trinnet alene nådde 94,13 %, SFT på 40 000 selvgemte svar tok den til 96,20 %, og den siste runden la til den siste brøkdelen. Mesteparten av gevinsten kom tidlig, noe som er nyttig når noen spør om det siste trinnet var verdt kostnaden.

## Gjør belønningen tett nok til å lære bort

En belønning basert på eksakt match er for sparsom når det du bryr deg om, har flere dimensjoner. Skrivesimulatoren SWIM viser progresjonen tydelig: rubrikkforankret prompting nådde beste gjennomsnittlige QWK per trekk på **0,577** med Claude Sonnet og **0,422** med GPT-5.4, nær null for en åpen 7B-modell; veiledet finjustering nådde **0,474 ± 0,023** for den 7B-modellen; GRPO med en tett, trekknormalisert nøyaktighetsbelønning nådde **0,618 ± 0,005** på tvers av alle trekk og prompter ([[swim-student-writing-simulation-2026]]).

Belønningsdesignet produserte det gapet. Et tett trekknormalisert signal slår eksakt match i en setting med flere trekk, og hvis belønningen din bare utløses på et perfekt svar, er mesteparten av treningssignalet stillhet.

## Legg resonnementet inn i eksemplene

Det mest handlingsrettede funnet på dette området gjelder hva treningsdataene må inneholde. Instruksjonstrente modeller lærte algebrafeiloppfatninger bare når de ble trent på **trinnvise løsningsspor**. Trent på bare sluttsvar holdt nøyaktigheten seg **under 30 % ved hver datastørrelse** ([[misconception-acquisition-dynamics-llms-2026]]).

To detaljer fra den studien betyr noe for alle som bygger en av sidene i en veileder. Studentrollen overgeneraliserte den lærte feilen helt til riktige eksempler ble blandet inn i forhold så lave som **én av fire**. Veilederrollen viste ingen slik kostnad og holdt riktig nøyaktighet fra **93 % til 98 %** på tvers av ti feiloppfatninger som ble trent samtidig.

Et datasett med spørsmål og riktige svar kan ikke lære en modell å legge merke til hvor en student gikk feil. Hvis du trener en veileder til å diagnostisere, trenger eksemplene resonnementet.

## Velg treningssignalet som passer skjønnet

Veiledet finjustering lærer modellen å imitere demonstrasjonene dine. Det er nok for format og ikke nok for skjønn. LearnLM formulerer funnet eksplisitt: **RL er vesentlig mer effektivt enn SFT alene for å følge nyanserte pedagogiske instruksjoner i lange samtaler** ([[learnlm-improving-gemini-learning]]).

Dens instruksjonsbetingede innramming lar utviklere og lærere spesifisere veilederatferd uten å binde seg til én definisjon av pedagogikk, og samtrenning blander den inn i Geminis ettertreningsfaser. Eksperter foretrakk den framfor GPT-4o (**+31 %**), Claude 3.5 Sonnet (**+11 %**) og grunnmodellen Gemini 1.5 Pro (**+13 %**).

Den praktiske lesningen: hvis feilen din er feil tone eller et manglende format, er SFT den billige veien. Hvis feilen din er å velge feil pedagogisk trekk i tur tolv, må signalet belønne valget.

## Merk hvert eksempel med atferden det lærer bort

Hvis supervisjonen må inneholde resonnement, er merkeordningen en læreplanbeslutning. En studie av supervisjonsetiketter fant at det å tildele hvert treningseksempel én målatferd, blant fagkompetanse, læreplanforankring, diagnostisk resonnering og støtte, hevet skårene ved hver modellstørrelse som ble testet, med de største gevinstene i støtte og i å bruke en students historikk. Diagnose av kunnskapstilstand forble den svakeste atferden på **54,04 %** ([[omniedu-open-educational-foundation-models-2026]]). Diagnose er det vanskeligste elementet på listen, så budsjetter for det.

Dataseleksjon er et treningsproblem i seg selv. Edu-QuRating tilpasser preferansedestillasjon til kuratering av utdanningsdata og erstatter én enkelt skår for «er dette pedagogisk?» med **20 rubrikkdimensjoner** som dekker faktisk nøyaktighet, pedagogisk struktur og nivåegnethet ([[garrod-edu-qurating-educational-data-curation-2026]]). Hvis du setter sammen et korpus fra webtekst, avgjør det filteret hvordan modellen din lærer å høres ut.

## Velg dataveddemålet du har råd til

To motsatte veddemål definerer rommet, og hvilket du tar, avhenger av hva du allerede har.

Når dataene dine er knappe, bærer instruksjonsbetinget ettertrening atferden. LearnLM bruker instruksjoner på systemnivå som lar lærere og utviklere spesifisere veilederatferd, og hviler på samtrenning snarere enn et stort korpus av veiledningstranskripsjoner.

Når du har autentiske samhandlingsdata, vinner finjustering på dem. TeachLM vedder på at [[prompt-engineering|prompt engineering]] er en midlertidig løsning og at den knappe ingrediensen er ekte student-veileder-samhandling. Trent på **100 000 timer** med en-til-en-økter under streng anonymisering dobler den studentenes taletid, forbedrer spørsmålsstilen og øker antall dialogturer med **50 %** ([[teachlm-post-training-llms-education]]).

En billigere vei er destillasjon. Pedagogy-R1, i 1,5B og 7B, ble instruksjonstrent på pedagogisk filtrerte output destillert fra en QwQ-32B-lærer, kombinert med Chain-of-Pedagogy-prompting ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Tren beslutningen studenten møter neste gang

Ettertrening trenger ikke bare forme hva modellen sier. TACT ettertrente en veileder på en taksonomi med 13 strategier pluss en studenttrekkstaksonomi med to akser, og vant **20,30 poeng** over Qwen3.5-4B-grunnmodellen, med en diagnostisk benchmark som **holder tilbake etikettene for studenttilstand** som var tilgjengelige under treningen, slik at modellen må utlede tilstanden fra dialogen ([[tact-pedagogically-adaptive-esl-tutoring]]).

Den samme logikken går gjennom alignment for [[special-education|spesialundervisning]] ([[special-r1-rl-special-education]]) og gjennom heuristisk RL-arbeid som aligner modeller som sokratiske veiledere snarere enn svarere ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Én plattform går lenger og trener policyen snarere enn prosaen: en forsterkningslæringsagent velger neste øvelsesoppgave, så det studenten gjør neste gang, bestemmes av den trente modellen ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Det siste tilfellet er testen på om du har designet en veileder eller en tekstgenerator. Hvis modellens eneste output er prosa, bor pedagogikken i orkestreringskoden din. Hvis modellen velger neste oppgave, er pedagogikken i vektene.

## Test det ved samtalelengde

Trening gjør ikke en modell trygg over en lang samtale. SafeTutors viser at selv spesialiserte pedagogiske modeller forringes over vedvarende dialog og kan påføre skade ved å avsløre svar ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pedagogisk trygghet]] må måles ved samtalelengde, inkludert turene der studenten tar feil, er vedholdende eller presser på.

## Hva treningsteam tar feil om

Mer prompting vil til slutt holde. Sykofanti vedvarer etter prompting og alignment, og autoritetspress åpner atferden som en kontekstbyttetest lukket. Transkripsjonen fra din egen presstest er evidensen for dette i produktet ditt.

Ledertavletallet er resultatet. 96,52 % på CDPK beskriver prestasjon på én benchmarks pedagogikkoppgaver. Studentene dine møter din læreplan, din notasjon og en student som har sittet fast i tjue minutter.

Mer data er svaret når sporene er tynne. Sluttsvar holdt nøyaktigheten på feiloppfatninger under 30 % ved enhver datastørrelse. Det som endret resultatet, var trinnvis resonnering i eksemplene; korpusstørrelse flyttet det aldri.

Studentrollen er den vanskelige delen, så tren den sist. Studenten overgeneraliserte lærte feil helt til riktige eksempler dukket opp ved én av fire. Veilederrollen holdt 93 % til 98 % under de samme forholdene, noe som antyder at veilederen er den enklere halvdelen å trene og at simulatoren er den du bør sjekke.

Den endelige sjekkpunktmodellen er resultatet. Det første RL-trinnet nådde 94,13 % og SFT tok den til 96,20 %, så mesteparten av bevegelsen skjedde før den siste runden. Behold delskårene; de sier hvilket trinn som tjente gevinsten og hvilket du kunne kuttet neste gang.

## Hva som kommer tilbake på deg

**«Vi har ikke råd til RL.»** Start da med delene som ikke koster noe: trinnvise spor i dataene dine, én målatferdsetikett per eksempel, og en belønning du har skrevet ned i ord før du skriver den i kode. SWIM-sammenligningen viser at SFT alene flyttet en 7B-modell til 0,474, som er en reell gevinst og likevel et stykke fra 0,618.

**«Modellen til leverandøren vår nekter allerede å gi svar.»** Leverandørens ettertrening optimerer hjelpsomhet, og å nekte å svare er ikke det hjelpsomhetsskårene belønner. Test atferden i dine egne samtaler; svaret står i transkripsjonen, ikke i modellkortet.

**«Destillasjon får oss mesteparten av veien.»** Pedagogy-R1 er en destillasjon i 1,5B og 7B, og det er et rimelig startpunkt. Det den arver, er lærerens pedagogikk, inkludert det den læreren gjorde feil, og du trenger en benchmark for å se hvilke deler som ble overført.

**«Testing over lange samtaler er for dyrt til å kjøres ofte.»** Kjør den én gang per modellendring, med et fast manus og et fast sett med adversarielle turer, og diff transkripsjonene. Kostnaden ligger i å skrive manuset første gang.

**«Læreren sa det føles som en chatbot.»** Det er en rapport om samtalens form, og samtalens form er en policy. Tell hvor mange turer som går før modellen overlater et trinn.

## Hva du kan gjøre denne uken

**1.** Kjør presstesten: feil svar, studenten insisterer, studenten viser til autoritet, studenten ber om svaret. Lagre transkripsjonen.

**2.** Skriv belønningen som tre setninger på norsk, og sjekk deretter om koden din måler de tre tingene.

**3.** Revider et utvalg av treningseksemplene dine for trinnvis resonnering. Rapporter andelen som inneholder et feil trinn og en diagnose av det.

**4.** Legg til én målatferdsetikett per eksempel, med støtte som startpunkt, og logg fordelingen.

**5.** Sett delskårene fra hvert trinn inn i modellkortet sammen med den endelige.

## Hvor du kan gå videre

[[making-ai-better-at-supporting-learning|Hvordan kan vi gjøre AI bedre til å støtte læring i vårt eget fag?]] spør om trening i det hele tatt er riktig spak, og [[developing-ai-tutor]] dekker motstykket i samhandlingsdesign, som får den samme veiledende atferden ut av støtte og hinttrapper snarere enn av gradienter. [[checking-whether-educational-ai-works]] dekker måling av om atferden faktisk endret seg, og [[llm-training-and-fine-tuning]] er konseptsiden bak det hele.
