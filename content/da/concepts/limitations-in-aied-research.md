---
title: "Begrænsninger i AIEd-forskning"
created: "2026-08-15T09:18:04-04:00"
type: concept
foundations: [ai-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, educational-measurement]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, research-methods-aied]
updated: "2026-11-08T06:44:50-05:00"
translation_of: "concepts/limitations-in-aied-research"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

> **Begrænsninger i AIEd-forskning** — de tilbagevendende svagheder og begrænsninger, der påvirker, hvor meget tillid vi kan have til fund om AI i uddannelse, og hvordan læsere bør fortolke dem. De skærer på tværs af enkeltstudier: metodologiske begrænsninger (generaliserbarhed, stikprøvestørrelse, validitet, selvrapportering), hastighedsproblemet (AI og fund bliver hurtigt forældede, mens publiceringen halter efter), forskning–praksis-begrænsninger (reproducerbarhed, FAIR-praksis, proprietære værktøjer) og svag teoribrug. Metodologiske grænser er målbare snarere end impressionistiske: i et kritisk review af 80 HCI-studier af [[critical-thinking|kritisk tænkning]] med AI kørte 42 (52 %) uden kontrolgruppe, og de fleste af de øvrige støttede sig til selvrapportering, så feltets positive fund hviler på designs, der ikke kan adskille AI's effekt fra almindelig refleksion ([[critical-review-critical-thinking-hci-research-ai-2026]]). Udfaldskodning er ujævn på samme måde: et systematisk review af 103 videregående studier sorterede sit korpus i en fire-niveau-udfaldstypologi og placerede 56 % af det i ét betinget mønster, hvor selvtillid og motivation steg uden en tilsvarende gevinst i varig kompetence ([[generative-ai-higher-education-systematic-review-2026]]). At anerkende disse grænser er afgørende for at læse litteraturen kritisk og for at designe stærkere studier.

## Spørgsmål at overveje

- Hvor meget ville du stole på en overskrift som 'AI-vejledning løfter læringen med 30 %', hvis du fik at vide, at den kom fra 30 studerende i ét kursus på én institution? Siden fremhæver generaliserbarhed og små stikprøver som tilbagevendende grænser — hvad ville du gerne vide, før du handler på et enkelt fund?
- En påfaldende begrænsning er 'hastighedsproblemet': AI udvikler sig hurtigere, end fund bliver publiceret, så et studium af én modelgeneration kan allerede beskrive et forældet system. Hvordan bør det ændre den tillid, du har til forskning i AI-uddannelse?
- Mange studier støtter sig til [[self-report-measures|selvrapporterede]] holdninger og brug, som er biased — folk overvurderer deres kompetence og underrapporterer misbrug. Har du nogensinde besvaret en undersøgelse om dine egne færdigheder eller din adfærd på en måde, der ikke passede med virkeligheden? Hvorfor afviger perceptionsbaserede mål så ofte fra objektiv præstation?
- Siden bemærker, at velkendte rammer som Blooms taksonomi ofte fejllæses som strenge stiger, og at selv udbredte teorier som [[cognitive-offloading|kognitiv belastningsteori]] er blevet udfordret. Hvornår har du set en teori påberåbt som fastslået sandhed i en kontekst, hvor dens egen evidens faktisk var omstridt?
- Det meste AI-forskning afhænger af proprietære, uigennemsigtige modeller, hvis data og opdateringer du ikke kan inspicere. Hvis du ikke kan verificere præcis, hvilken model der producerede et resultat, hvor meget kan du så stole på påstande bygget på det — og hvad ville gøre fund mere reproducerbare?
- Hvis du er underviser eller designer uden tid til at læse primærforskning, hvordan beslutter du så, hvilke AI-påstande der er troværdige nok til at ændre din praksis — givet at litteraturen er fragmenteret, foreløbig og skrevet for forskere?

## Introduktion

AI i uddannelse er et hurtigt bevægende, heterogent felt, og dets evidensbase bærer et særligt sæt begrænsninger, som forskere, praktikere og politikere bør veje, når de bruger et fund. Nogle af dem deles med den bredere [[learning-sciences|læringsvidenskabs]]- og psykologilitteratur; andre forstærkes eller gøres unikke af AI's egen natur. Denne side organiserer dem i fire tværgående områder.

## Metodologiske begrænsninger

Vidensbasens side om [[research-methods-aied|forskningsmetoder]] detaljerer styrker og begrænsninger ved hvert design. Flere grænser går igen på tværs af designs og fortjener særlig opmærksomhed:

- **Generaliserbarhed.** Fund fra et enkelt kursus, en enkelt institution, et enkelt fag eller en enkelt national kontekst overføres måske ikke. Små, bekvemmeligheds- eller enkeltinstitutionsstikprøver begrænser ekstern validitet; resultater fra ét AI-værktøj strækker sig sjældent til et andet værktøj eller en anden kontekst.

- **Tværnationale overbevisningssammenligninger bærer en målerisiko.** En femlandeundersøgelse af 1.405 [[k-12]]-lærere brugte automatisk maskinoversættelse uden tilbageoversættelse eller test af måleinvarians og målte [[academic-integrity|plagiering]] og [[creativity|kreativitet]]sbekymring med enkeltitems, så dens landekontraster kan ikke læses som ækvivalente konstrukter ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu m.fl. (2026)]]).
- **Stringens på synteseniveau er en separat akse fra stringens i primærstudiet.** En metaanalyse kan opfylde sine egne inklusionskriterier og stadig samle studier, der adskiller sig i design, implementeringstroskab og udfaldsmål, uden at vægte noget af det: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan og kolleger (2026)]] siger rent ud, at de ikke brugte et formelt kvalitetsvurderingsværktøj og behandlede inklusionskriterierne som stringens-tærsklen, så et kvasi-eksperimentelt studium og et randomiseret bidrog lige meget til det samlede [[stem-education|STEM]]-estimat. Det samme review viser en beslægtet rapporteringsfare: dets heterogenitet citeres som I² = 82,98 % under en fixed effect-model og I² = 15,75 % under random effects-modellen, hvilket betyder, at læsere, der løfter et enkelt heterogenitetstal uden dets model, ikke kan se, hvor inkonsistent korpusset faktisk er. Vurdér en syntese på, hvordan den håndterede afhængige effektstørrelser, kvalitet og heterogenitet, ikke kun på, om den fulgte en søgeprotokol.

- **Søgedesignet sætter en synteses overskriftstal.** I et scoping review af 195 [[teacher-education|læreruddannelses]]studier var digital kompetence og [[tpack|TPACK]] eksplicitte søgedeskriptorer, mens undervisningsdesign og evaluering ikke havde nogen tilsvarende, så de rapporterede 46,5 % og 1,9 % karakteriserer det korpus, søgningen returnerede, snarere end feltet ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández m.fl. (2026)]]).
- **Små stikprøvestørrelser.** Mange AIED-studier er underpowered — for få deltagere til pålideligt at opdage meningsfulde effekter eller til at understøtte de stærke påstande, der nogle gange udledes af dem.
- **Dataforøgelse kan fremstille overskriftsmålingen.** I en automatisk essay-scorer, hvis træningspartition indeholdt 83 studerendes arbejde, løftede genererede niveau-1-svar — skabeloner, afkortning, fjernelse af nøgleord — Focus-enighed med +0,346 kvadratisk vægtet kappa fra en baseline på 0,028, så det stærkeste ordinale signal hvilede på tekst, ingen studerende havde skrevet ([[automated-essay-scoring-critical-thinking-physics-2026|Firdausi m.fl. (2026)]]).
- **Slutscorer kan skjule det, der undersøges.** I et PRISMA-review af 103 [[higher-ed|videregående]] studier rapporterede 56 % gevinster, der var betinget af stilladsering eller verifikation, og nul karakterforskelle ledsagede ofte reelle ændringer i processen — mere debugging, flere kontrolcyklusser — så karakterer alene ikke kan fortælle, om [[generative-ai|GenAI]] styrkede eller udhulede praksis ([[hawi-genai-higher-ed-uses-outcomes-risks-2026|Hawi og Samaha (2026)]]).

- **Valideringsdesign kan fremstille overskriftstallet.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara og Halloluwa (2026)]] benchmarkede femten modeller på EEG-baseret familiaritet og viser, at standard stratificeret krydsvalidering tillader tidsmæssig lækage og rapporterer op til 0,9853 F1, mens trial-uafhængig Group K-Fold-validering sænker toppen til 0,6038 F1 — stadig over chance, men langt fra det citerede resultat.
- **Benchmarks kan levere de fejl, de rapporterer.** Eksperternes revurdering af 250 afviste fysikopgaver tilskrev 238 (95,20 %) benchmark- eller bedømmerfejl og kun 12 (4,80 %) genuine modelfejl, så en models målte fejlrate ikke kan falde under instrumentets defektrate ([[frontier-models-physics-benchmark-audit-2026|Ansari m.fl. (2026)]]).
- **Validitet og måling.** [[assessment-validity|Konstruktvaliditet]] er ofte tynd: proxyer for "læring", "[[student-engagement|engagement]]" eller "kompetence" varierer kraftigt, og instrumenter er ikke altid valideret til den population eller det konstrukt, der undersøges. [[benchmark|Benchmark]]-nøjagtighed er ikke lig med pædagogisk effektivitet.
- **Selvrapport og surveyedata.** En stor del af korpusset hviler på selvrapporterede holdninger, motivation og brug. Selvrapport er udsat for bias — respondenter overvurderer kompetence, underrapporterer [[ai-misuse-learning-harm|misbrug]] og fejlvurderer deres egen adfærd — så perceptionsbaserede mål afviger ofte fra objektiv præstation (se [[ai-literacy-assessment-misalignment]] og [[educational-measurement]]).
- **Kontekst og valideringsrapportering kan kvantificeres på tværs af en litteratur.** Et PRISMA-ScR-review af 421 studier af NLP på undervisningsevalueringskommentarer fandt land uafklaret i 221 studier, enkeltinstitutionsomfang i 232 af 284 afklarede tilfælde (81,7 %), ekstern validering i 33 (7,8 %) og interannotator-enighed i 54 (12,8 %) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher og da Silva (2026)]]).
- **Rapporteringsrigdom er målbar, og metodetype forudsiger den.** I 888 papers om reviewautomatisering rapporterede 38,0 % af software-/produktpapers siden 2023 ingen evaluering mod 9,3 % af LLM-papers, og 52 % af 118 LLM-papers med kun positive resultater markerede stadig en uopfyldt reliabilitetsbarriere — mønstret bag PRISMA-LLMs fem oplysningsniveauer ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta og Lin (2026)]]).
- **Standardisering inden for hvert datasæt kan skjule en fejlagtig fremstilling af spredning.** Da syntetiske uddannelseskohorter blev standardiseret efter deres egen spredning, blev kendsgerningen, at deres ugentlige struktur varierede 2,6 til 4,9 gange mindre end de rigtige kohorters, usynlig for den rapporterede statistik — rutinemæssig forbehandling, i forfatternes ord ikke en hypotetisk bekymring ([[synthetic-educational-data-structural-fidelity-2026|Inoue og Yasutake, 2026]]).

- **Modelgenererede labels er ikke ground truth.** Når de labels, der træner eller evaluerer et system, selv er produceret af sprogmodeller, kan enighed mellem annotatorer ikke fastslå validitet: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado m.fl. (2026)]] validerede aldrig deres assertionsannoteringer mod menneskelige guldlabels, og de 49 encoder-klassifikatorer, de udgiver, arver den herkomst og er muligvis ikke valide, hvor anvendelser adskiller sig på væsentlige dimensioner. Deres skema klarede sig også strengt under den finjusterede klassifikator, der var trænet på ekspertannoterede data (macro-F1 0,673 mod 0,76), så ekspertmærkede korpora er stadig værdifulde, når høj sikkerhed kræves.
- **Evidensbasen selv er ujævnt fordelt.** Et scoping review af 407 teknologistøttede [[formative-assessment|formative evaluerings]]studier trak kun på Web of Science og Scopus. Det udelukkede også 61 poster på sprogkriterier, så den geografiske ubalance, feltet rapporterer, afspejler måske delvist, hvilke tidsskrifter der er indekseret ([[bulut-technology-supported-formative-assessment-2026|Bulut, 2026]]).

## Hastighedsproblemet: AI udvikler sig hurtigere end fundene

AI ændrer sig kontinuerligt, og konklusionerne fra en given model eller et givet system kan blive **forældede hurtigt**. Et studium af én [[llm]]-generation beskriver måske ikke den næste; benchmark-scorer, vejledningskvalitet og endda den praktiske anvendelighed af et fund skifter, efterhånden som modellerne forbedres. Forstærket af dette er **publiceringsprocessen langsom** — fra studiedesign til fagfællebedømt publicering kan der gå et år eller mere — så et publiceret resultat kan allerede beskrive et forældet system. Bedømmere og læsere bør derfor behandle AIED-fund som foreløbige, datofølsomme påstande snarere end stabile sandheder og foretrække nyere, replikationsorienteret og versionseksplicit arbejde.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni og Fryer (2026)]] gør konsekvensen konkret for én litteratur: fordi [[rag|RAG]]-baserede systemer først blev offentligt tilgængelige i november 2023, argumenterer de for, at [[intelligent-tutoring|intelligent vejlednings]]fund fra før 2023 — som hvilede på regelbaserede, nøgleordsmatchende eller heuristiske NLP-systemer, der har ringe funktionel lighed med nutidens store sprogmodeller — bør behandles som historisk kontekst snarere end som direkte sammenlignelig evidens, og rapporterer, at deres review ikke fandt noget publiceret [[rct]], der undersøgte en RAG-baseret AI-[[conversational-ai|chatbot]] i bachelorundervisning over et fuldt akademisk semester. Implikationen er, at grundlæggende spørgsmål om, hvordan genAI påvirker læring, måske skal stilles igen mod hver ny modelgeneration snarere end afgøres ved at samle ældre resultater.

## Begrænsninger i forskning–praksis

Flere begrænsninger angår selve forskningens udførelse og infrastruktur:

- **Manglende reproducerbarhed.** Studier rapporterer ofte ikke nok detaljer (prompts, modelversioner, hyperparametre, data, analysekode) til, at andre kan reproducere eller verificere resultater — et særligt problem, givet hvor følsomt LLM-output er over for prompts og indstillinger.
- **FAIR-forskningspraksis.** Åben og reproducerbar praksis — **F**indbare, **A**ccessible, **I**nteroperable, **R**eanvendelige data og kode, præregistrering og fælles benchmarks — anvendes ujævnt i AIED. Svag efterlevelse af FAIR-principperne gør det sværere at genbruge, sammenligne og bygge videre på studier.
- **Proprietære værktøjer og modeller.** Meget forskning afhænger af lukkede, proprietære [[ai-technologies|AI-systemer]], hvis interne adfærd, træningsdata og modelopdateringer er uigennemsigtige og kan ændre sig uden varsel. Det begrænser reproducerbarheden, gør eksakt replikation umulig og kan binde fund til en leverandørs roadmap. Det rejser også spørgsmål om evalueringens uafhængighed (se [[ai-ed-evaluation]]).

## Svag eller begrænset teoribrug

En tilbagevendende kritik er, at mange empiriske artikler har **begrænset eller forældet teoretisk indramning**. Forskere kan:

- **Adoptere teorier ukritisk.** Rammer lånes, fordi de er velkendte, uden fuldt at engagere sig i deres antagelser, anvendelsesområde eller evidensbase.
- **Fejlfortolke rammer som faste sekvenser.** Flere udbredte rammer behandles som ordnede stiger, som lærende skal klatre fra et "lavt" til et "højt" trin — men evidensen understøtter ikke altid at begynde i bunden. For eksempel:
    - **Blooms taksonomi** læses ofte som en streng hierarki (genkaldelse → anvendelse → evaluering), men højere-ordens mål kræver ikke først at indøve lavere-ordens mål; opgaver kan designes til at engagere evaluering eller skabelse fra begyndelsen (se [[cross-dataset-bloom-question-classification]]).
    - **ADDIE** og andre undervisningsdesignmodeller behandles nogle gange som stive lineære faser snarere end de iterative, fleksible planlægningsheuristikker, de er ment som (se [[learning-design]]).
- **Overse omstridte teorier.** Nogle teorier, der bruges bredt i AIED, er selv blevet udfordret. **Kognitiv belastningsteori** er for eksempel blevet kritiseret, og dens empiriske påstande er blevet afvist eller bestridt i tidligere studier, men den påberåbes fortsat som et fastslået fundament i nyt AIED-arbejde.

Implikationen er ikke, at [[theories-and-frameworks|teorier og rammer]] er ubrugelige, men at de bør bruges med opmærksomhed på deres faktiske evidensbase, deres tilsigtede anvendelsesområde og deres kendte kritik — snarere end som selvindlysende [[scaffolding|stilladser]] eller stive procedursekvenser.

## Krise i den metaanalytiske evidens

En voksende mængde metaforskning — reviews, der gransker reviewene — argumenterer for, at feltets overskriftspåstande om AI-drevne læringsgevinster hviler på en evidensbase, der er langt svagere, end den ser ud. Tre komplementære kritikker fremfører sagen med usædvanlig styrke:

- **Positiv-syntesebias er alvorlig og kvantificerbar.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš m.fl. (2026)]] fandt i en studiedækkende metaanalyse af metaanalyser med 1.840 effektstørrelser fra 67 metaanalyser stærk evidens for publikationsbias (alle Egger-tests *p* < 0,0001) og ekstrem heterogenitet mellem studier (τ = 0,869). Publikationsbias-korrigerede effekter var omkring **en tredjedel** af den størrelse, der almindeligvis rapporteres (SMD = 0,196 mod en median på 0,67 i den publicerede litteratur), med et prædiktionsinterval fra −1,521 til +1,908 — fra stor skade til stor gavn. Intet udfald, felt, niveau eller AI-rolle-undergruppe viste konsistente gevinster, og der var ingen forskel mellem studier før og efter 2023. Deres dom: brede påstande om generaliserede læringsgevinster er for tidlige.
- **Metaanalytiske metoder anvendes systematisk forkert.** [[oneill-presumed-effective-meta-analysis-2026|O'Neills (2026)]] retsmedicinske revision af 14 AIED-metanalyser med stor gennemslagskraft fandt, at *ingen* af dem gav et gyldigt grundlag for deres påstande: ingen havde et sammenhængende konstrukt (de behandlede værktøjet "ChatGPT", som om det var én intervention, og slog testresultater, motivation, [[self-efficacy]] og holdninger sammen til ét "[[learning-gains|akademisk præstation]]"-tal); den rapporterede heterogenitet var alvorlig, med I² fra 77,2 % til 94,4 % på tværs af de 13 metaanalyser, der rapporterede den, og 12 af de 13 over 80 %, og den blev aldrig løst (ingen nåede minimumsundergruppen på ti studier, fem hvilede på enkeltstudieundergrupper, og tre andre på undergrupper af to); tolv behandlede afhængige effektstørrelser fra samme studium som uafhængige, hvilket oppuster den tilsyneladende evidens; og ingen vurderede publikationsbias gyldigt (diskrediterede fail-safe N-målinger og fejlanvendte Egger-tests var almindelige). Fordi I² er præcisionsafhængig, kan den ikke alene fastslå, hvor langt de sande effekter er fra hinanden, og den rapportering, der ville vise det, var stort set fraværende: kun fire metaanalyser rapporterede varians mellem studier (τ²), og kun to rapporterede et prædiktionsinterval, som begge indeholdt nul. Et flertal (61 %) af tilfældigt vurderede primærstudier var problematiske, og ét studium med fabrikerede referencer var inkluderet af seks af de 14 metaanalyser.
- **"Behandlingen" er en sort boks.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich m.fl. (2025)]] genopliver medie/metode-debatten for at argumentere for, at "ChatGPT" er et værktøj, ikke en metode — at spørge, om det "forbedrer læring", er en non sequitur. Ved at revidere en delmængde af studierne bag Deng m.fl.s (2025) metaanalyse fandt de, at kun 21 % af sammenligningerne havde en veldefineret behandling, kontrolgruppe *og* et gyldigt læringsmål; rapporterede effektstørrelser (g = 0,7) oversteg endda dem for specialbyggede [[intelligent-tutoring|intelligente vejledningssystemer]] (0,66), et rødt flag om, at "behandlingen" var en heterogen "hemmelig opskrift".

Sammenfaldet mellem disse tre uafhængige kritikker er selv evidens: på tværs af forskellige metoder, korpora og indramninger når de samme konklusion — at positive AIED-effektstørrelser, især fra tidlige metaanalyser, sandsynligvis afspejler **publikationsbias, konstruktinkohærens og metodologiske genveje** lige så meget som (eller mere end) genuine læringsgevinster. Det betyder ikke, at AI-værktøjer ikke har pædagogisk værdi; snarere betyder det, at *feltniveau*-evidensen for deres værdi i øjeblikket er oppustet og må læses derefter. Det flytter også ansvaret til [[meta-analysis-systematic-review|syntesekvalitet]]: en metaanalyse er kun så troværdig som sammenhængen i dens konstrukter, uafhængigheden af dens effektstørrelser, tilstrækkeligheden af dens moderator- og heterogenitetsanalyse og gyldigheden af dens publikationsbiasvurdering — som kritikkerne viser hver især rutinemæssigt overtrædes.

## At læse AIEd-litteraturen kritisk

Sammenlagt taler disse begrænsninger for en kritisk læsning af AIED-forskning med flere signaler: tjek, om et fund generaliserer og har tilstrækkelig styrke; verificer, hvordan konstrukter blev målt (og om påstande hviler på selvrapportering); foretræk nyere, versionseksplicit og reproducerbart arbejde; og afhør den teoretiske indramning i stedet for at behandle velkendte rammer som givne. Det er komplementet til et stringent [[research-methods-aied|metodevalg]] og [[ai-ed-evaluation|evaluering]]: gode metoder og god evaluering er nødvendige, men det er læsningen med opmærksomhed på begrænsninger, der gør evidens til forsvarlige beslutninger.

## Fra forskning til praksis

En yderligere, praktisk begrænsning er **udfordringen med at anvende forskning i [[teacher-role|undervisning]] og undervisningsdesign**. Praktikere — undervisere, [[stakeholders|undervisningsdesignere]] og fakultetsudviklere — mangler ofte tid eller specialiseret ekspertise til at læse, vurdere og oversætte primærforskning til konkrete klasseværelsesbeslutninger. Litteraturen er stor, fragmenteret og skrevet for forskere; fund rapporteres med statistisk og metodologisk detalje, der ikke umiddelbart kan handles på; og fordi påstande er foreløbige (se hastighedsproblemet ovenfor), kan en praktiker ikke blot tage et enkelt studium for pålydende. Det skaber et gab mellem det, evidensen understøtter, og det, der faktisk når [[pedagogy|undervisningspraksis]].

Formålet med denne vidensbase er at hjælpe med at lukke det gab — at gøre det lettere at følge med i, fortolke og anvende forskning i AI i uddannelse i praksis — ved at kuratere open access-fund til strukturerede, tilgængelige resuméer, forbinde relateret arbejde gennem [[ai-education|begrebssider]] og markere de begrænsninger, læsere bør veje. Den sigter mod at understøtte [[interpreting-and-applying-aied-research|evidensinformeret praksis]] i undervisning og undervisningsdesign og dermed også at synliggøre huller og spørgsmål, der kan informere ny forskning og udvikling. At forstå forskningens grænser er derfor ikke et mål i sig selv: det er det, der lader praktikere anvende fund hensigtsmæssigt og lader forskere designe stærkere studier, der tjener praksis bedre.

## To revisionstal-fælder, der er værd at kende

To specifikke rapporteringspraksisser oppuster eller forvrænger en syntese, og begge er synlige i den publicerede litteratur snarere end hypotetiske.

**Heterogenitetstallet afhænger af modellen, og modellen citeres sjældent.** Ét reviews heterogenitet citeres som **I² = 82,98 % under en fixed effect-model og I² = 15,75 % under random effects-modellen**. De beskriver de samme data. En læser, der løfter et enkelt heterogenitetstal uden dets model, har fået en teknisk påstand uden fortolkning vedhæftet, og forskellen mellem "det meste varians er uforklaret" og "lidt varians er uforklaret" er forskellen mellem at kassere og at stole på feltet.

**Overskriftsprocenten kan være et artefakt af søgeordene.** Et scoping review af 195 læreruddannelsesstudier gjorde digital kompetence og [[tpack|TPACK]] til eksplicitte søgedeskriptorer, mens undervisningsdesign og evaluering ikke havde nogen tilsvarende term, så de rapporterede **46,5 % og 1,9 %** er rater, som selve forespørgslen konstruerede. En prævalenspåstand er kun så meningsfuld som søgningen bag den.

**Og baseraten er det tal, ingen angiver.** Metodologiske grænser her er målbare snarere end impressionistiske: i et kritisk review af 80 HCI-studier af kritisk tænkning med AI **kørte 42 (52 %) uden kontrolgruppe**, og de fleste af de øvrige støttede sig til selvrapportering. Når mere end halvdelen af et felts positive fund kommer fra designs, der ikke kan adskille AI's effekt fra almindelig aktivitet, er den passende forventning til et enkelt fund skepsis, ikke foreløbig accept.

## Almindelige fejlopfattelser

- **"Afsnit om begrænsninger er standardtekst."** Metodologiske grænser er **målbare snarere end impressionistiske**: i et kritisk review af **80 HCI-studier** af kritisk tænkning med AI **kørte 42 (52 %) uden kontrolgruppe**. Et præcist antal er det, der gør grænsen handlingsanvisende.
- **"Heterogenitet er et enkelt tal, du kan citere."** Det samme review viser en rapporteringsfare: heterogenitet citeres som **I² = 82,98 % under en fixed effect-model og I² = 15,75 % under random effects-modellen**. De samme data giver en historie på ni point eller en historie på to point, afhængigt af den valgte model, så et citeret I² uden sin model er ufortolkeligt.
- **"En stor rapporteret effekt er det tal, man skal stole på."** En overskrift som en effekt fra **30 studerende i ét kursus på ét sted** er den almindelige form for en skrøbelig påstand, og optællingen af studier uden kontrolgrupper viser, hvor ofte den skrøbelighed forbliver urapporteret.

## Forbundne begreber

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[rct]]
- [[meta-analysis-systematic-review]]
- [[ai-education]]
- [[icap-framework]]
- [[learning-design]]
- [[llm]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[theory-development-aied|Teoriudvikling i AI i uddannelse]]

## Forbundne artikler

- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — AI-chatbots i videregående uddannelse: forventninger sammenlignet med evidens (Thoeni & Fryer 2026)

- [[ground-truth-reliability-aied]] — Reliabilitet og validitet af ground truth i evaluering
- [[ai-literacy-assessment-misalignment]] — Selvrapporteret vs. præstationsbaseret AI-kompetence
- [[machines-misread-pedagogical-quality]] — Hvorfor maskiner læser pædagogisk kvalitet forkert
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Kritiske grænser for AI-vejledere og teoribrug
- [[cross-dataset-bloom-question-classification]] — Blooms taksonomi og spørgsmålsklassifikation
- [[eeg-familiarity-automated-assessment-2026]] — Automatisering af elevvurdering: EEG-baseret familiaritetsforudsigelse
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause (kritik af mediesammenligning)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-metaanalyse: publikationsbias-korrigerede AI-effekter ~1/3 af rapporteret størrelse
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews
- [[frontier-models-physics-benchmark-audit-2026]] — How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inklusionskriterier brugt som stringens-tærskel, og et heterogenitetstal der skifter med modellen (Doğan m.fl. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Et klyngerandomiseret klasseværelsesforsøg, hvis præstationsudfald ikke nåede signifikans (Rücker & Becker-Genschow 2025)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI og menneskelig vejledning giver ækvivalente GRE-læringsgevinster
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data

- [[digital-competence-ai-responsive-pedagogy-2026]] — Scoping review af 195 læreruddannelsesstudier, hvor søgestrengens design former de rapporterede frekvenser
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Tværnational K-12-lærerundersøgelse: maskinoversatte items, enkeltitem-bekymringsmål, ingen invarianstest
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Systematisk review af 103 GenAI-studier i videregående uddannelse: 56 % betingede gevinster, karakterer der maskerer procesændring (Hawi & Samaha 2026)
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Dataforøgelse kan fremstille overskriftsmålingen
