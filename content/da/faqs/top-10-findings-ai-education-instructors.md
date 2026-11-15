---
title: "Hvilke 10 væsentlige fund fra forskningen i AI i uddannelse bør undervisere kende til?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-11-14T18:10:00-05:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Disse ti studier har direkte betydning for de beslutninger, undervisere træffer: hvad der skal stilles som opgave, hvordan den bedømmes, hvilke værktøjer der købes, hvordan de bygges, og hvordan man afgør, om der er sket læring. Hvert punkt giver studiet, resultatet og den praksis, det ændrer.

## De ti studier

**1. Adgang til en almindelig chatbot sænkede eksamensresultaterne med 17 % ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Næsten 1.000 gymnasieelever i Tyrkiet, i omkring 50 klasser, arbejdede sig gennem tre matematiksessioner med samme stof. En gruppe havde et almindeligt GPT-4-chatvindue under træningen. En anden havde en tutor bygget på samme model med lærerskrevne [[guardrails|sikkerhedsrammer]]: hints i stedet for svar, med den rigtige løsning og almindelige fejl indlejret i prompten. Kontrolgruppen havde ingen AI. Hver session sluttede med en [[summative-assessment|eksamen uden hjælpemidler]] om lignende opgaver, hvor værktøjet var væk.

Gruppen med den almindelige chat scorede 48 % over kontrolgruppen under træningen og 17 % under kontrolgruppen til eksamen. Elever, der aldrig rørte AI, klarede sig bedre end dem. Den beskyttede gruppe vandt 127 % i træningen og gik lige op til eksamen. Skaden forsvandt, og der kom ingen læringsfordel i stedet. Chatloggene forklarer opdelingen: den ubeskyttede gruppe bad om svar og stoppede, mens den beskyttede gruppe forsøgte sig med opgaverne, bad om hints og forbedrede sig inden for den første session.

For undervisere er »AI tilladt« ikke en politik. Grænsefladen afgør, om værktøjet bliver en hintkanal eller en svarmaskine, og en almindelig chatbot er som standard det sidste. Et chatvindue, der står åbent under træningen, koster de studerende mest, som læner sig mest op ad det.

Administratorer kan stille det samme resultat op mod indkøbsargumentet om, at en stærkere model løser pædagogikken. Modellen var identisk i begge arme.

Se også: [[training-ai-tutors-to-guide-rather-than-answer|At træne en tutor til at vejlede i stedet for at svare]]

**2. En tutor bygget på kursets egen pædagogik slog kurset med aktiv læring, på kortere tid ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 er Harvards introduktionskursus i fysik for studerende i biovidenskab. I efteråret 2023 gennemgik 194 studerende i et crossover-forsøg to lektioner to gange, en gang i kursets [[active-learning|aktive læring]] og en gang gennem en tutor bygget til kurset, med præ- og posttests omkring hver version.

De studerende lærte mere med tutoren. Medianen på posttesten var 4,5 mod 3,5, medianen for [[learning-gains|læringsudbytte]] var mere end dobbelt så stor som kursets, og kvantilskøn af effekten lå fra 0,73 til 1,3 standardafvigelser. De brugte i median 49 minutter med tutoren mod cirka 60 minutter i klassen, og 83 % vurderede dens forklaringer som lige så gode som eller bedre end deres underviseres. Vurderingerne af engagement og motivation steg. Glæde og growth mindset var uændrede.

Resultatet hviler på designet. Tutoren kørte de samme træk som klassen: gennemarbejdede eksempler, gradvise hints, selvforklaringer og en sekvens, der følger forskningen i, hvordan fysik læres. Sammenligningen var mod aktiv læring, ikke forelæsning, så den almindelige indvending om, at hvad som helst slår en forelæsning, gælder ikke her.

Underviserudviklere har her det stærkeste tilgængelige argument for, at tutordesign er læseplansarbejde og ikke indkøb. For produktteams er kravet konkret: match et undervisningslokale med aktiv læring, på kortere tid, med de samme undervisningstræk.

Se også: [[developing-ai-tutor|Bedste praksis for at udvikle en AI-tutor]]

**3. AI-tutoring matchede menneskelige eksperttutorer ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench samlede 2.469 tutoringsessioner med 2.383 voksne, der forberedte sig til GRE, ved hjælp af 13 AI-tutorer bygget på 12 modeller, menneskelige tutorer i realtid og en videokontrol. Udfaldet var læringsudbytte på kvantitative og verbale opgaver.

Samlet AI-tutoring var statistisk ækvivalent med eksperttutoring udført af mennesker, inden for en kvart standardafvigelse, og begge slog kontrolgruppen med omkring seks procentpoint: 6,86 i Quantitative og 5,47 i Verbal, eller cirka halvanden til to ekstra rigtige svar pr. sektion. AI-tutorerne blev vurderet svagere på lektionsplanlægning og på at skabe øvelsesopgaver, hvor de menneskelige tutorer var bedre.

For administratorer ændrer bemandingsregnestykket sig ved veldefineret testforberedelse. Når en licenseret tutor matcher en menneskelig tutor på en fjerdedel af en standardafvigelse, handler beslutningen om pris og dækning, og effektivitet er ikke længere spørgsmålet. Forskere vil bemærke grænsen: ækvivalens er ikke overlegenhed, og en standardiseret test er det udfald, en maskine lettest kan matche.

Underviserudviklere kan se på, hvor de menneskelige tutorer beholdt en fordel: at diagnosticere, hvad en studerende har brug for næste gang, og at bygge den sekvens, der følger af det.

Se også: [[intelligent-tutoring|Intelligent tutoring]]

**4. At skrive notater slog at spørge en chatbot, tre dage senere ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes og kolleger kørte et forhåndsregistreret eksperiment på syv engelske sekundære skoler. 405 elever i 10. klasse gennemgik to af tre betingelser med en historisk tekst: en chatbot, der kunne svare på spørgsmål om den, notatagning, eller begge. Tre dage senere tog de eksamener uden hjælpemidler i bogstavelig retention, forståelse og [[retrieval-spacing-interleaving|fri genkaldelse]].

Notater slog chatbotten på alle tre mål, med omkring en halv standardafvigelse på retention og tæt på fire tiendedele på forståelse. Notater plus chatbot slog chatbotten alene på to af de tre og gjorde intet for fri genkaldelse, og notater alene var stærkere end kombinationen. I den kombinerede betingelse kopierede omkring en fjerdedel af eleverne chatbotens output ind i deres notater. Eleverne vurderede stadig chatbotten som lettere, mere hjælpsom og mere underholdende end at skrive.

Undervisere har her direkte evidens for, at en læseassistent kan erstatte læsningen. Hvis pointen med opgaven er at forstå en tekst, [[writing-education|er skrivningen forståelsen]], og et værktøj, der svarer på spørgsmål om teksten, fjerner øvelsen. Behold notaterne. Hvis du tillader chatbotten, bed om noget, den ikke kan levere: en sammenligning, en udfordring af teksten eller et resumé skrevet, efter værktøjet er lukket.

Se også: [[ai-support-reading-comprehension|AI-støtte til læseforståelse]]

**5. Studietiden faldt 27 %, og retentionen faldt med den ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Et tiårigt panel fra ALEKS-platformen, der dækker 3,2 millioner læringsinteraktioner og 12,2 millioner svartider i placeringsvurderingen, viser, hvad studerende gjorde, efter ChatGPT kom. Designet sammenligner opgavetyper, der kan indsættes i en chatbot (tekstbaserede ordproblemer), med typer, der kræver at manipulere en graf inde i platformen, inden for samme curriculum.

Tiden på de AI-følsomme opgaver faldt 2,8 % pr. kvartal blandt universitetsstuderende, 26,9 % over elleve kvartaler. Gymnasieelever faldt 31,3 %, mellemskolen 9,0 %, og femteklasserne viste ingen målbar ændring. Faldet forsvandt helt under [[remote-proctoring|tilsyn]], og det er den afgørende test: når værktøjet ikke var tilgængeligt, brugte eleverne den samme tid som før. Retentionselementer under tilsyn viste et kumulativt fald på 25 % i oddsene for et rigtigt svar.

Aldersgradienten er et designsignal for produktteams. Øvelsestiden er den variabel, der flytter sig, og den flytter sig mest, hvor opgaven er lettest at aflevere. For undervisere er tid på opgaven en billig tidlig advarsel: en årgang, der færdiggør de samme opgaver meget hurtigere, lærer sandsynligvis noget andet.

Se også: [[reducing-over-reliance|At reducere overafhængighed af AI]]

**6. Lektiekarakterer steg 18 %, mens eksamener uden hjælpemidler faldt 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26.811 elever i 7. til 12. klasse i Kina, fulgt i 30 måneder, med generativ AI indført på forskellige tidspunkter i årgangene. Lektiekaraktererne steg 18 %, og færdiggørelsestiden faldt 30 %, fra 64 til 45 minutter. Månedlige eksamener uden hjælpemidler faldt 20 % af udgangsgennemsnittet inden for seks måneder, og afgørende adgangseksamener faldt 18 % til 24 % efter omkring to år.

Timingen viser mekanismen. Omkring 81 % af AI-brugerne færdiggjorde lektierne hurtigere end den hurtigste elev uden AI og klarede sig derefter dårligt til eksamen. Det mindretal, der holdt lektietiden sammenlignelig med ikke-brugernes, lærte lige så godt som alle andre. Tabene var størst i samfundsfag, derefter STEM, derefter sprog, og større for højtpræsterende elever.

At færdiggøre lektier er en dårlig proxy for præstation, og gabet viser sig inden for seks måneder, længe før adgangseksamensresultater flytter sig. Undervisere kan handle tidligere: hold bedømt evidens uden hjælpemidler, og behandl hjemmearbejde som øvelse, hvis færdiggørelsestid er synlig.

Se også: [[checking-whether-educational-ai-works|At afgøre, om AI i uddannelse virker]]

**7. Hver testet tutor fejlede på pædagogik, og fejlede værre i løbet af en samtale ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors testede 11 tutorer, fra open-weight-modeller på 3,8B til 72B plus GPT-5-mini, i matematik, fysik og kemi, mod en taksonomi på 11 dimensioner og 48 underrisici hentet fra [[learning-theories|læringsvidenskab]]. Deres fejlkategorier er pædagogiske: overdreven afsløring af svar, forstærkning af misforståelser og opgivelse af [[scaffolding|stilladsering]]. Hver af dem virker hjælpsom i øjeblikket, fordi den studerende hurtigt får et rigtigt svar.

Hver model viste bred pædagogisk skade. Større modeller var ikke pålideligt sikrere, og generel hjælpsomhed korrelerede kun svagt med pædagogisk sikkerhed. Skadesraterne steg fra 17,7 % i enkeltrundeudvekslinger til 77,8 % i samtaler på fem til otte runder.

Enkeltrundevurderinger er ikke evidens for en sikker tutor, og produktteams bør designe deres testning efter det. En model, der består en engangskontrol af hjælpsomhed og sikkerhed, kan fejle i det meste af en rigtig samtale. Administratorer, der køber en tutor, har brug for tre svar: holder den løsninger tilbage, undersøger den misforståelser, og holder den hele en session igennem. En leverandørdemo med én udveksling giver ingen af dem.

Se også: [[pedagogical-safety|Pædagogisk sikkerhed]]

**8. Sager om forseelser hviler på tyndere evidens, end anklagerne antyder ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz og kolleger kodede hver sag om generativ-AI-forseelse på et australsk universitet over tre år: 1.162 sager med 1.855 evidenselementer, hver vurderet efter relevans, troværdighed og inferentiel styrke.

Anklager om generativ AI steg fra 11,9 % af forseelsessagerne i 2023 til 36,9 % i 2025, mens det samlede sagstal var fladt. 58 sager, 5 % af det samlede antal GenAI-sager, hvilede alene på en påstand uden ét eneste evidenselement. Detektoroutput var sjældent og svagt: Turnitin- eller lighedsrapporter havde ingen inferentiel styrke i 73 elementer, og selvstændigt GPTZero-output havde lav troværdighed i 69. Den stærkeste evidens kom fra undersøgelsen snarere end anklagen, med mundtlige tilståelser i 410 elementer, hvor 97,2 % var stærke. [[hallucination-risk|Fabrikerede referencer]] var det største strukturelle skift, 22,3 % af elementerne, med en stigning fra 10,4 % i 2023 til 30,0 % i 2025.

For administratorer er læren proceduremæssig. En sag bygget på en detektorscore overlever ikke en klage, og en undersøgelse, der starter med værktøjet i stedet for interviewet, producerer svage sagsakter. Undervisere kan handle på det artefakt, der bliver ved med at dukke op: fabrikerede referencer er almindelige, og et referencetjek er billigt.

Se også: [[should-we-use-ai-detectors|At bruge AI-detektorer]]

**9. Underviseres selvtillid til deres AI-kompetence følger næsten ikke deres målte færdighed ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 K-12-undervisere gennemførte en selvrapporteringsundersøgelse om AI-kompetence og et objektivt præstationsmål bygget på samme ramme: Concept, Use, Evaluate og Ethics. Korrelationerne mellem de to lå fra 0,07 til 0,24.

Latent profilanalyse fandt seks grupper. 43 undervisere vurderede sig selv konsekvent højt, mens de scorede lavere på det objektive mål. 59 viste det modsatte. Resten samlede sig omkring gennemsnittet eller delte sig efter forudgående erfaring med AI.

For underviserudviklere er [[self-assessment|selvvurdering]] ikke en behovsanalyse. En undersøgelse, der spørger undervisere, hvor sikre de er, vil overfinansiere de selvsikre og underbetjene de fåmælte, og de grupper er ikke de kompetente og de kæmpende. Korte præstationsopgaver skiller dem. Forskere bør behandle de lave korrelationer som en advarsel om målingen: enhver undersøgelse af [[ai-literacy|AI-kompetence]], der bygger på [[self-report-measures|selvrapportering]], måler selvtillid.

Se også: [[faculty-development-ai|Underviserudvikling, der ændrer praksis]]

**10. AI-bedømmelse straffer studerende, der skriver dårligere ([[ai-scoring-language-bias-physics|Feser og Tschisgale, 2026]]).**

116 gymnasieelevers fysikforklaringer blev bedømt af 9 machine learning-tilgange og 2 store sprogmodeltilgange og derefter sammenlignet med menneskelige ekspertvurderinger. Overensstemmelsen med eksperterne lå fra 67,2 % til 78,4 %, hvilket lyder acceptabelt, indtil fejlene opdeles.

Hver tilgang undervurderede begrebslig forståelse for forklaringer af lavere sproglig kvalitet. Biasen gik én vej: stærkere skrivning blev ikke overvurderet. Mønstret spejler, hvad der er rapporteret for fysiklærere selv, hvilket tyder på, at vanskeligheden ligger i at udlede forståelse af prosa, for mennesker lige så vel som for modeller.

Bedømmelsespersonale og produktteams skal rapportere undervurderingsrater efter sproglig kvalitet, ikke kun den samlede overensstemmelse med eksperter, fordi gennemsnittet skjuler den gruppe, der rammes. For alle, der bedømmer [[multilingual-learning|flersprogede lærende]], bør svar med lav sproglig kvalitet sendes til [[human-in-the-loop-ai|menneskelig gennemgang]], eller opgaverne bør designes, så de ikke afhænger af prosa.

Se også: [[ai-grading-fairness-reliability|Fair og pålidelig AI-bedømmelse]]

## Hvad de ti har til fælles

Tre af studierne måler to ting på én gang: hvad studerende producerer med værktøjet, og hvad de kan uden det. Bastani, Rismanchian og Strömberg finder alle, at de to divergerer, og kun det uhjulpne mål opfører sig som læring. Fire handler om et designvalg snarere end om modellen: guardrails hos Bastani, pædagogikken bygget ind i Kestin-tutoren, skrivningen Kreijkes beholdt i opgaven, og multi-turn-rammen SafeTutors testede. Tre undersøger systemet omkring værktøjet, nemlig evidensen i forseelsessager, måden underviserkompetence måles på, og de sproglige antagelser i [[automated-assessment|automatiseret bedømmelse]]. StudentBench fastslår paritet på en standardiseret test, det ene udfald, hvor en maskine lettest kan matche et menneske. Bastani optræder i to grupper, fordi den leverer både gabet og designrettelsen.

Det efterlader tre spørgsmål, der er værd at tage med ind i enhver kursus- eller produktbeslutning. Hvad skal den studerende kunne, når værktøjet er væk? Hvad beder aktiviteten dem om at gøre, mens det er åbent? Hvilken evidens ville vise forskellen en måned senere?

## Hvor denne evidens er tynd

Disse studier deler [[limitations-in-aied-research|begrænsningerne i AIEd-forskningen]] som helhed. To af de største foregår i Tyrkiet og Kina, tre i USA, en i England, en i Australien og bedømmelsesstudiet i Tyskland. Et er et benchmark for kommercielle modeller snarere end et feltstudie. Matematik på ungdomsuddannelserne dominerer, med fysik og datalogi næst. Meget få studier ser på [[humanities-education|humanistisk skrivning]] i stor skala, på erhvervsuddannelse eller på studerende med handicap.

Kun det kinesiske panel og ALEKS-panelet observerer studerende i mere end to år efter indførelsen, og de kinesiske forfattere argumenterer for, at kortere studier systematisk undervurderer den langsigtede straf. Seks af disse resultater er preprints eller working papers, der ikke har gennemført fagfællebedømmelse: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang og Feser. Studierne af Bastani, Kestin, Kreijkes og Munoz er udgivet i fagfællebedømte tidsskrifter.

Null- og negativeresultater er sjældne i denne litteratur, så den udgivne rekord overdriver sandsynligvis, hvor ofte AI hjælper. Disse studier er den bedste nuværende vejledning om ti beslutninger, og ingen af dem afgør et spørgsmål.

## Hvor du kan gå videre

[[does-ai-help-students-learn|Hjælper AI studerende med at lære?]] er den bredere evidensgennemgang bag disse påstande. [[redesign-assessment-ai-era|Hvordan bør bedømmelse redesignes til AI-æraen?]] fører bedømmelseshalvdelen videre. For integritetssagerne dækker [[reduce-ai-cheating|Hvordan reducerer jeg AI-snyd?]] procesevidens og retningslinjer. For fundene om faglig udvikling er [[faculty-ai-competencies|Hvilke AI-kompetencer har undervisere brug for?]] søstersiden, og [[addressing-common-misconceptions-ai-education|Hvordan kan vi håndtere almindelige misforståelser om AI i uddannelse?]] tager de indvendinger, du sandsynligvis hører fra kolleger.
