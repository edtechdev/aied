---
title: "Hjælper brug af AI faktisk mine studerende med at lære?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [evaluating-ai-interventions-methods, how-ai-impacts-students, top-10-findings-ai-education-instructors]
weight: 90
audience: [instructors]
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [active-learning]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/does-ai-help-students-learn
source_updated: "2026-10-28T11:06:17-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

En studerende fortæller dig, at AI-vejlederen er grunden til, at de endelig forstod stoffet, og du har ingen måde at kontrollere påstanden på. Eller et pilotprojekt lander på dit bord med en tilfredshedsundersøgelse og et skærmbillede af stigende opgavekarakterer, og nogen vil have en beslutning om licensen inden månedens udgang. Eller du står foran en klasse og spekulerer på, om det værktøj, du netop bad dem åbne, hjælper dem med at øve sig eller hjælper dem med at undgå øvelse.

Det korte svar: ja, AI kan hjælpe studerende med at lære, og ingen af de ting, du mest sandsynligt kommer til at se, fastslår, at den gjorde det: bedre opgaver, hurtigere færdiggørelse, glade studerende eller et produkt, der kaldes en vejleder. Det, der adskiller de tilfælde, hvor læringen forbedres, fra de tilfælde, hvor den ikke gør, er designet af aktiviteten og det udfald, du valgte at måle.

## Den korte version

**1.** Navngiv kapabiliteten først, og beslut derefter, hvilken evidens der ville vise, at den ændrede sig.

**2.** Mål den samme kapabilitet senere, med værktøjet taget væk, for det er det eneste mål, der besvarer dit spørgsmål.

**3.** Sæt den studerendes eget forsøg før hjælpen, og kræv en respons på hjælpen bagefter.

**4.** Bedøm verifikationen: hvad de kontrollerede, hvad de afviste, hvad de ændrede.

**5.** Se på resultaterne opdelt efter forudgående viden, for gennemsnittet skjuler de studerende, som designet svigter.

## Afgør, hvad du mener med læring, før du ser på nogen form for evidens

»Hjælper AI studerende med at lære« er ikke ét spørgsmål. Det samler mindst tre: hæver værktøjet præstationen, mens det er åbent, opbygger det en kapabilitet, der består, når det lukkes, og ændrer det, hvem der ender med den kapabilitet. En leverandørrapport, en pilotundersøgelse og et randomiseret forsøg kan alle være ærlige og stadig besvare forskellige af dem.

Skriv kapabiliteten ned før aktiviteten. »Producer en poleret rapport« er et andet udfald end »udvælg relevant evidens«, »forklar en kausal sammenhæng« eller »opdager en ubegrundet konklusion«. Bedømmelsen skal afsløre den kapabilitet, du har til hensigt at udvikle, hvilket er argumentet i [[educational-measurement|uddannelsesmåling]] og udgangspunktet for [[ai-ed-evaluation|AIEd-evaluering]].

Korpuset understøtter to påstande på én gang, og det at holde begge er den disciplin, denne side kræver. En syntese fra Verdensbanken, [[burneo-can-edtech-close-learning-gaps-2026|Can EdTech Close Learning Gaps?]], samlede 14 randomiserede undersøgelser på tværs af ti økonomier og estimerede en positiv gennemsnitlig læringseffekt på 0,125 standardafvigelser for adaptiv og AI-muliggjort uddannelsesteknologi. Den kombinerede også tidligere [[adaptive-learning|adaptive systemer]] med [[generative-ai|generative AI]]-værktøjer, fandt ingen statistisk fastslået fordel for de nyere generative værktøjer og anerkendte betydelig usikkerhed i den sammenligning. Resultatet understøtter potentialet i disse interventioner, ikke en påstand om, at enhver [[conversational-ai|chatbot]] vil forbedre læringen. Et positivt gennemsnit er med andre ord foreneligt med en hel del variation og med ingen påvist fordel for netop det, du overvejer.

De mere nyttige undersøgelser er dem, der varierer designet inde i et enkelt eksperiment. [[genai-feedback-design-multisite-experiment|En multisite-randomiseret undersøgelse]] med 1.176 førsteårsstuderende på bacheloruddannelser sammenlignede [[peer-assessment|peer-feedback]], direkte AI-feedback, selvevaluering efterfulgt af AI-feedback og en hybridsekvens af selvevaluering, peer-feedback og AI-kritik. De reflekterende og hybride betingelser gav stærkere [[transfer-of-learning|forsinket AI-fri transfer]] end direkte AI-feedback: de studerende klarede sig bedre på en ny videnskabelig argumentationsopgave, ikke kun på det essay, de reviderede. De betingelser krævede også mere evaluerende arbejde og sandsynligvis mere tid, så undersøgelsen understøtter det komplette feedbackdesign frem for én komponent i det.

## Undersøg, om gevinsten overlever, at værktøjet tages væk

Det er den mest informative kontrol, du har til rådighed, og den er let at udelade af et pilotprojekt.

Den klareste advarsel i korpuset er et randomiseret felteksperiment med næsten 1.000 gymnasieelever, [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]. En grænseflade af almen karakter hævede scoren for assisteret øvelse med 48 % i forhold til kontrol, og de samme studerende scorede derefter 17 % lavere ved eksamener uden assistance. En vejleder konfigureret med læreredesignet vejledning og hints undgik stort set den straf. Den gav ikke en statistisk signifikant forbedring af eksamenspræstationen uden assistance i forhold til kontrolgruppen. At undgå skade og at demonstrere yderligere læring er to forskellige præstationer.

I national skala viser samme kløft sig med en forsinkelse. [[stromberg-generative-ai-learning-penalty-secondary-2026|The Generative AI Learning Penalty]] fulgte 26.811 kinesiske gymnasieelever i klasserne 7-12 over 30 måneder ved hjælp af forskudt ibrugtagning. Hjemmeopgavescorer steg 18 %, og færdiggørelsestiden faldt 30 %, fra 64 til 45 minutter. Scorer ved månedlige eksamener uden hjælpemidler faldt 20 % inden for seks måneder, og scorer ved adgangsgivende eksamener med høje indsatser faldt 18-24 % af baseline, men først efter cirka to år. Tabene koncentreredes blandt de cirka 81 % af brugerne, hvis adfærd indikerede udlicitering af hjemmeopgaver, mens studerende, der holdt hjemmeopgavetiden sammenlignelig med ikke-brugere, lærte omtrent lige så effektivt. To ting følger for dit fag: kløften mellem hjemmeopgave- og eksamenspræstation er [[learning-gains|kløften mellem præstation og læring]] i en national kohorte, og den toårige forsinkelse betyder, at en evaluering over ét semester systematisk vil undervurdere omkostningen.

Undervisning i datalogi viser samme struktur. Den [[kumar-genai-computing-education-systematic-review-2026|systematiske gennemgang af 72 undersøgelser]] fandt, at generativ AI pålideligt hævede korttidsfærdiggørelse og reducerede tiden på opgaven i 36 undersøgelser, uden at en enkelt undersøgelse i korpuset dokumenterede en negativ effekt på den umiddelbare præstation, og at disse gevinster »ikke overføres til uafhængig præstation« i 21 undersøgelser. Studerende assisteret af Codex gennemførte dobbelt så mange opgaver under læringen og præsterede ikke bedre end kontrolgruppen ved eftertests uden AI.

Så er der spørgsmålet, om de studerende overhovedet bruger hjælpen. Et toårigt randomiseret skoleeksperiment på 18 mellemskoler, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]], fandt beskedne præstationsgevinster i [[math-education|matematik]], og de studerende indgik sjældent i substantielle vejledningssamtaler. Forfatterne bemærkede, at gevinsterne lignede de gevinster, der rapporteres for struktureret øvelse uden AI, og designet kombinerede individualiseret øvelse med [[intelligent-tutoring|AI-vejledning]], så det isolerede ikke AI-komponentens bidrag. At en dygtig vejleder er tilgængelig, er en anden kendsgerning end at studerende bruger den produktivt.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] tilføjer en skarpere lektie fra mere end 6.000 mellemskoleelever, der brugte NUMI. AI-støtte forbedrede genopretningen efter fejl og bremsede fremdriften gennem spørgsmålene. En mestringsregel om tre rigtige i træk hævede den platformsdefinerede succes uden i sig selv at forbedre læringen en uge senere. Det stærkeste signal om forsinket læring optrådte, når AI'en blev indlejret i mestringsarbejdsgangen, og de gevinster var marginalt statistisk signifikante og koncentreret om bestemt øvet materiale. Det er suggestiv evidens for en struktureret tilgang, ikke en bevist opskrift.

## Byg aktiviteten, så den studerende gør den tænkning, der betyder noget

[[learning-design|Undervisningsdesign]] betyder mere end, hvilken model du kører. Det design, der overlever disse resultater, har fire træk: et forsøg, hjælp rettet mod vanskeligheden, noget den studerende gør med hjælpen, og en ny anvendelse med støtten trukket tilbage.

**1.** Bed om et indledende forsøg, en forudsigelse, et udkast, en forklaring eller en fortolkning.

**2.** Tilbyd målrettet assistance: et hint, en forklaring, et kontrasterende eksempel eller fokuseret feedback på det punkt, hvor de gik i stå.

**3.** Kræv en respons på assistance. De forklarer den, reviderer med den, verificerer den eller begrunder at acceptere og afvise den.

**4.** Kontrollér en sammenlignelig opgave eller en anden kontekst med støtten trukket tilbage.

Det er et undervisningsmæssigt udgangspunkt frem for en valideret sekvens, og den rette mængde og timing af støtte afhænger af de studerende og opgaven. Det afspejler, hvad synteserne om [[scaffolding|stilladsning]] og [[active-learning|aktiv læring]] fremhæver: støtte, der hjælper de lærende med at forstå, øve, evaluere og til sidst præstere med mindre af den.

Anvend princippet på målet, ikke mekanisk på hver funktion. »Stilladsning, ikke substitution« er en god regel med en fælde i sig. Et komplet gennemarbejdet eksempel kan være noget, studerende lærer af, og en sekvens af hints kan stadig blive noget, de klikker igennem uden at tænke. Det, der betyder noget, er, hvad den lærende gør med assistance, og derfor sidder [[cognitive-offloading|kognitiv udlicitering]] og [[help-seeking|hjælpsøgning]] i hver sin ende af, hvad det samme værktøj kan frembringe.

Modstykket er værd at holde for øje, for det forhindrer dig i at gøre indsats til en proxy for læring. I de præregistrerede eksperimenter, der rapporteres i [[coach-not-crutch-ai-writing|Coach not crutch]], producerede voksne, der øvede revidering af ansøgninger med AI, bedre skrivning uden AI bagefter end dem, der øvede alene, og de brugte mindre indsats på det. Fordelene bestod ved en opfølgning dagen efter, og et andet eksperiment fandt, at det at se et AI-revideret eksempel gav sammenlignelige fordele med at øve sig med værktøjet. Det var korte, afgrænsede skriveopgaver, ikke evidens for varig forbedring af al skrivning. De viser dog, at mindre indsats ikke automatisk er mindre læring, og at målet er at bevare læringsaktiviteten, ikke at maksimere sværhedsgraden.

## Gør den fastholdte tænkning synlig i det, du bedømmer

Hvordan studerende bruger værktøjet, betyder mere end om de har det. I [[yan-cognitive-outsourcing-genai-assessments-2026|en kvalitativ undersøgelse af 38 studerende på bacheloruddannelser]] i ikke-overvågede essaybedømmelser gik engagementet fra [[cognitive-offloading|kognitiv outsourcing]] til kognitiv reallokering, flytningen af indsats fra lavniveau-genkaldelse til [[critical-thinking|kritisk evaluering]]. De fleste studerende, 31 af de 38, havde til hensigt at bruge generativ AI som læringsassistent. I praksis stolede 76,32 % på en enkelt tur med spørg, få svar, stop dialogen, og 78,94 % brugte værktøjet før eller efter udarbejdelsen frem for gennem opgaven. Kun 8 studerende arbejdede som kognitive partnere gennem vedvarende, iterativ dialog. Det spektrum, fra outsourcing til reallokering, er det, [[student-ai-interaction|elev-AI-interaktion]] beskriver. En deltager beskrev effekten som »den hastighed, hvormed du glemmer det, er også meget høj«.

Den [[pedagogy|pædagogiske]] lektie er, at blanke tilladelser og blanke forbud begge efterlader de studerende gættende. Det, der ændrede adfærd i den undersøgelses fremstilling, var opgavespecifik vejledning om, hvilket kognitivt arbejde de studerende skulle beholde, og hvilken assistance der var passende, den designretning der udvikles i [[reduce-ai-cheating|at reducere AI-snyd]] og [[reducing-ai-misuse|at reducere misbrug af AI]].

Så gør den fastholdte tænkning til et artefakt, du kan bedømme. I matematik: bed om det forsøgte svar, før der bedes om hjælp, og lad derefter de studerende bruge en prompt som »identificer det første skridt, jeg bør overveje igen, giv mig ét brugbart hint, og bed mig prøve igen«, og kræv en ny løsning plus en forklaring frem for en gengivelse af AI'ens svar. I skrivning: lad de studerende vurdere deres udkast mod rubrikken, før de beder om kritik, og derefter forklare, hvilke forslag de accepterede, ændrede eller afviste. Hvis argumentopbygning er målet, kan AI-prosa ikke stå i stedet for evidens for, at den studerende kan bygge et argument. Hvis vurdering af alternative revisioner er målet, er sammenligning af komplette eksempler passende. Siderne om [[writing-education|skriveundervisning]] og [[feedback-literacy|feedbackkompetence]] har detaljerne.

Gennemgangens designkrav er samme træk på fagniveau: verifikation, det vil sige at læse, teste, ændre, forklare og kritisere AI-output, gjort til en bedømt og observerbar komponent frem for en aspiration overladt til den studerendes skøn. Og ikke alle legitime udfald skal demonstreres uden AI. Et fag kan bevidst undervise i effektivt AI-understøttet arbejde, og i så fald bedømmer du den studerendes evne til at udvælge, verificere, revidere og forsvare sin brug af værktøjet side om side med de uafhængige grundlag, faget kræver. [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] foreslår netop den tredelte skelnen mellem uafhængig kapabilitet, AI-forstærket præstation og verifikationsansvar. Det er en begrebsmæssig ramme, ikke et valideret instrument.

## Undersøg, hvem værktøjet hjælper, og hvem det stille og roligt dropper

En gennemsnitlig forbedring kan skjule studerende, der ikke fik noget ud af det eller stødte på en ny barriere. Syntesen om det [[digital-divide|digitale skel]] adskiller adgang til et værktøj fra den færdighed, der skal til for at bruge det, og fra hvem der ender med et brugbart resultat, og alle tre betyder noget for et fag.

[[prior-knowledge|Forudgående viden]] modererer alt i datalogigennemgangen: godt forberedte studerende omsætter assistance til varig færdighed, mens dårligt forberedte studerende risikerer at bruge den som en krykke, der fjerner den øvelse, de har brug for. Kohortestudiet på nationalt plan viser samme koncentration på sin egen måde, med læringstabene placeret i de 81 %, hvis hjemmeopgaveadfærd indikerede outsourcing.

Til en klasseværelsesvurdering: opdel resultaterne efter forudgående viden, sprogbehov og tilgængelighedskrav frem for at rapportere et gennemsnit for faget. At lære studerende at indhente og vurdere brugbar feedback er en del af [[ai-literacy|AI-kompetence]], og den kommer ikke med licensen. Når du vurderer uafhængig læring, skal du fjerne den assistance, der leverer den tænkning, der er målet, og beholde de tilpasninger, der giver adgang til opgaven, hvilket er den skelnen som både [[accessibility|tilgængelighed]] og [[equity-in-ai-education|lighed i AI-uddannelse]] afhænger af.

Inspicér også den feedback, de studerende faktisk får. Et flydende svar kan fejldiagnosticere vanskeligheden, forstærke en fejl eller aflevere et svar, hvor en anden form for støtte var nødvendig. Brug fagtilpassede materialer, hold en vej til menneskelig hjælp åben, og indsaml ikke flere oplysninger om studerende, end aktiviteten kræver. [[ai-feedback-quality|AI-feedbackkvalitet]], [[pedagogical-safety|pædagogisk sikkerhed]] og [[privacy|privatliv]] dækker detaljerne.

## Stol ikke på dashbordet, heller ikke dit eget

Platformsmetrikker er det letteste bevis at bære med ind i en indkøbsbeslutning og det letteste at overtolke. I [[zhang-platform-scores-miss-ai-teaching-agents-2026|en evaluering af otte AI-undervisningsagenter]] i [[medical-education|medicinsk uddannelse]] afveg rangordenen efter platformens egen score fra en ekspertvalideret rubrik for undervisningskvalitet. Den agent, der blev rangeret som nummer tre af platformen, blev rangeret sidst på rubrikkvalitet, fordi platformscooren sporede de studerendes præstation under interaktionen frem for agentens undervisningsadfærd. En indbygget metrik er en hypotese, der skal valideres.

Samme skepsis gælder for den evidens, du selv producerer. En tilfredshedsundersøgelse måler tilfredshed, og oplevet læring er et [[self-report-measures|selvrapporteringsmål]], som korpuset dokumenterer driver langt væk fra målt læring. Opgavekarakterer måler opgaven. Ingen af dem fortæller dig, hvad en studerende kan om tre uger med værktøjet lukket, og [[evaluating-ai-interventions-methods|metoder til evaluering af AI-interventioner]] fremstiller de sammenligningsdesign, der bringer dig tættere på.

## Hvad undervisere tager fejl af her

**»Højere karakterer på opgaven betyder, at de lærte mere.«** De to kan bevæge sig i modsatte retninger. Eksperimentet med guardrails hævede assisteret øvelse med 48 %, mens eksamener uden assistance faldt 17 %, og den nationale kohorte så hjemmeopgavescorer stige 18 %, mens scorer ved eksamener uden hjælpemidler faldt 20 % inden for seks måneder. Ingen af mønstrene ville vise sig i en karakterbog, der kun registrerer den endelige aflevering.

**»Det er en vejleder, så det er sikkert.«** Vejleder er en etiket, og resultaterne bag etiketten er blandede. Den lærerkonfigurerede vejleder undgik eksamensstraffen og slog ikke kontrolgruppen ved eksamener uden assistance. Khanmigo gav beskedne gevinster, der lignede struktureret øvelse, med lidt substantiel vejledning. NUMI's AI bremsede fremdriften gennem spørgsmålene. En vejleder kan tilbageholde løsninger og stadig absorbere øvelsen.

**»Hvis det føles lettere, lærer det dem ikke noget.«** Forkert i begge retninger, og derfor er indsats en dårlig proxy. Coach not crutch fandt mindre indsats med bedre skrivning uden AI dagen efter, så lethed er ikke kendetegnet. Det, der adskiller tilfældene, er, om den studerende gjorde den tænkning, målet navngiver, og det er et designspørgsmål frem for en sværhedsindstilling.

**»En blanket regel, eller en bedre prompt, løser, hvordan de bruger det.«** Undersøgelsen med 38 studerende fandt de fleste studerende i enkeltturs spørg-og-stop-tilstand under netop de betingelser, hvor de var blevet fortalt, at AI var en læringsassistent. Det, der flyttede adfærd, var vejledning specifik for opgaven og et bedømt krav om at verificere. En politiklinje og en smart prompt er begge input til det, og ingen af dem erstatter det.

**»Platformscoren, eller tilfredshedsundersøgelsen, fortæller mig, at det virker.«** Evalueringen af de otte agenter fandt en platformrangorden, der vendte under en ekspertrubrik. Tilfredshed og oplevet læring er selvrapporteringer. Begge er værd at indsamle som procesinformation, og ingen af dem er et læringsmål.

**»Adgang er lighedsproblemet, og vi har løst adgangen.«** Adgang er en af tre linjer, side om side med færdighed og med hvem der får et brugbart resultat. Forudgående viden afgør, om hjælp bliver færdighed eller en krykke, og tabene i den nationale kohorte koncentreredes i gruppen, hvis adfærd tydede på substitution, ikke i gruppen uden enheder.

## Hvad der vil komme tilbage til dig

**»Mine studerende siger, at det hjælper.«** Det hjælper sandsynligvis med det arbejde, de har foran sig, og det er fundet, ikke en afvisning af det. Spørg, hvad de kan på en lignende opgave med værktøjet lukket, og du får det svar, der betyder noget.

**»Undersøgelserne modsiger hinanden, så hvorfor handle på nogen af dem?«** De modsiger sjældent hinanden, når du stiller det udfald op, som hver af dem målte. De positive resultater har tendens til at måle assisteret præstation, tilfredshed eller en velstruktureret aktivitet med forsinkede kontroller; de negative måler ustøttet præstation senere. Burneo-syntesen gør usikkerheden eksplicit: 0,125 standardafvigelser i gennemsnit på tværs af 14 forsøg, ingen fastslået fordel for de nyere generative værktøjer. En forbedring før og efter kan ikke vise, at AI'en forårsagede gevinsten, da studerende forbedres gennem resten af [[teacher-role|undervisningen]], og [[research-methods-aied|effektivitetsforskningsmetoder]] fremstiller de sammenligningsdesign, der bringer dig tættere på. Handl på de designpåstande, der replikerer, og hold dig åben om effektens størrelse, som ikke gør.

**»Jeg har 200 studerende. Jeg kan ikke gennemføre forsinkede bedømmelser.«** Du har brug for én kort baseline-opgave og ét forsinket element, ikke en undersøgelse. Brug samme opgavetype tre uger senere uden værktøjet, behold sidste års version af eksamen som en grov sammenligning, og udtag stikprøver af det arbejde, der ser inkonsistent ud med tidligere afleveringer. Det er nok til at se en assisteret gevinst på 48 % ved siden af et ustøttet tab på 17 %, hvis det sker i dit fag.

**»Khanmigo fik et positivt resultat, så vejledning virker.«** Det gav beskedne matematikgevinster på 18 mellemskoler i et design, der samlede individualiseret øvelse med AI-vejledning, mens studerende sjældent førte substantielle vejledningssamtaler. Læs det som evidens for, at et velstruktureret øvelsesmiljø kan give små gevinster, ikke som evidens for, at AI-komponenten forårsagede dem.

**»Jeg kan ikke forbyde det, og jeg kan ikke patruljere det.«** Korrekt på begge punkter, og ingen af delene er nødvendige. Designspørgsmålet er, hvad din aktivitet gør let. Hvis verifikation bedømmes, koster åbenhed intet, og den ustøttede kontrol findes, tager de fleste studerende den vej, du byggede.

**»Jeg underviser ikke i AI. Det er ikke mit fag.«** Indblandingen sker inde i dit fag, på det trin hvor AI'en udfører den øvelse, som dit fag findes for at give. Derfor er rettelsen en ændret opgave frem for en ny enhed.

## Hvad du kan gøre i denne uge

**1.** Tag en aktivitet, du allerede kører, og skriv kapabilitetssætningen: hvad en studerende bør kunne bagefter, med værktøjet lukket.

**2.** Tilføj en baseline på to minutter i starten og samme slags element tre uger senere. Bedøm begge uden AI i lokalet.

**3.** Skift én prompt, du giver de studerende, fra »forklar dette« til »giv mig ét hint, og stil mig derefter et spørgsmål«, og kræv et revideret forsøg, før de går videre.

**4.** Tilføj ét bedømt verifikationsartefakt: en kort note om, hvad de kontrollerede, hvad de afviste, og hvad de ændrede.

**5.** Opdel resultatet efter forudgående viden for de studerende, du allerede ved har svært ved det, og læs den AI-feedback, en stikprøve af dem modtog.

## Hvor du kan gå videre hen

[[evaluating-ai-interventions-methods|Evaluering af AI-interventioner]] dækker målene og sammenligningsdesignene bag kontrollerne ovenfor, og [[ai-ed-evaluation|AIEd-evaluering]] er den praktiske evalueringsguide. [[how-ai-impacts-students|Hvordan AI påvirker studerende]] tager elevperspektivet, [[top-10-findings-ai-education-instructors|de ti vigtigste fund for undervisere]] komprimerer samme evidens til underviserbeslutninger, og [[limitations-in-aied-research|begrænsninger i AIEd-forskning]] er den ærlige redegørelse for, hvad denne litteratur endnu ikke kan fortælle dig. Er dit spørgsmål blevet et bedømmelsesspørgsmål, er [[reduce-ai-cheating|at reducere AI-snyd]] den næste side.
