---
connected_resources: [pressing-prompts, student-guide-to-ai]
title: "Kritisk tænkning"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-education, ai-literacy, cognitive-offloading]
pedagogy: [scaffolding, socratic-method]
technology: [generative-ai]
connected_faqs: [verify-ai-output]
level: [higher ed]
confidence: medium
updated: "2026-11-08T06:44:50-05:00"
translation_of: "concepts/critical-thinking"
source_updated: "2026-11-05T08:55:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

> **Kritisk tænkning** — evnen til at analysere, vurdere og syntetisere information — er både en færdighed, som AI-værktøjer kan hjælpe med at udvikle, og en kompetence, som studerende skal anvende, når de bruger AI. I [[ai-education|AI i uddannelse]]-[[research-methods-aied|forskning]] optræder kritisk tænkning i to indbyrdes forbundne former: som et læringsmål (at [[teacher-role|undervise]] studerende i at tænke kritisk) og som en beskyttelse mod ukritisk AI-afhængighed.

## Spørgsmål at overveje

- Hvor sikker er du på din evne til at opdage et falsk eller vildledende AI-genereret svar? Forskning tyder på, at [[self-report-measures|selvrapporteret]] AI-kompetence langt overstiger den faktiske vurderingsevne — hvordan ville du teste dig selv?
- Kritisk tænkning optræder her i to former: en færdighed, der skal undervises i, og en beskyttelse mod ukritisk afhængighed af AI. Kan du komme på en situation, hvor et værktøj, der "lærer" kritisk tænkning, i virkeligheden træner det modsatte?
- Et studie fandt, at det at lade studerende afhøre AI-genererede fejl gav store gevinster i højere ordens tænkning. Hvordan kan det bevidst at blotlægge fejl — frem for at skjule dem — være et stærkere undervisningsgreb, end du antog?
- Let adgang til AI-svar kan fortrænge kritisk [[student-engagement|engagement]], før studerende opdager det. Hvilken designfunktion — frem for en politik eller et forbud — kunne holde den kognitive indsats i live?
- AI-rådgivning har vist sig at dæmpe villigheden til at sige "det ved jeg ikke" — selv når rådet er forkert. Hvordan ændrer det, hvad det vil sige at skabe en klassekultur, hvor det er sikkert at stille spørgsmål?

## Introduktion

Kritisk tænkning er centralt for [[ai-literacy]] — studerende, der ikke kan vurdere AI-output kritisk, er sårbare over for [[cognitive-offloading|Overafhængighed]], [[hallucination-risk|hallucineret information]] og biased anbefalinger. Forskning i [[cognitive-offloading]] viser, at let adgang til AI-svar kan fortrænge kritisk engagement, mens [[socratic-method|sokratiske tilgange]], der tilbageholder direkte svar, bevarer den kognitive indsats, der er nødvendig for dybere tænkning.

Struktureret dialogstyring, ikke en bedre prompt, er det, der adskiller en fejlslutningsvejleder fra en debatchatbot: ved at lede hver tur gennem Toulmin-baseret intentdetektion, en fast strategirækkefølge og en verifikationsagent kunne ét sokratisk system bestå 84,5 % af dialogkvalitetsmetrikkerne mod 61,5 % for en heuristisk baseline ([[lftutor-logical-fallacy-education-2026|Shi et al. (2026)]]).

### Kritisk tænkning i AI-uddannelsesforskning

Vidensbasens artikler udforsker kritisk tænkning gennem [[design-based-research|designbaserede]] og empiriske linser. [[ai-agents-constructive-conflict-design-education-2026|Adversarielle AI-agenter]] iscenesætter konstruktiv konflikt for at fremprovokere overvejelse hos nybegyndere designere — en sokratisk variant, der tvinger kritisk revurdering. [[genai-can-harm-teaching-rct-2026|RCT-forskning om GenAI i undervisning]] rejser spørgsmålet, om AI-værktøjer, der optimerer for overfladiske resultater, utilsigtet kan undertrykke den kritiske tænkning, der fører til dybere læring. Målt evidens skærper pointen: om kritisk tænkning flytter sig, afhænger af, hvordan AI-medieret feedback og opgaver designes, og af de lærendes [[metacognition|metakognitive]] regulering, ikke af adgang til en model.

Sammenhængen mellem GenAI-brug og selvrapporteret kritisk tænkning gik næsten udelukkende gennem GenAI-[[feedback-literacy|feedbackkompetence]]: hos 421 kinesiske bachelorstuderende medierede feedbackkompetence 71,98 % af den samlede sammenhæng (β=0,185), og den resterende direkte bane var positiv kun for mindre reflekterende studerende (β=0,177) og ikke-signifikant for mere reflekterende ([[genai-use-critical-thinking-moderation-2026|Yan et al. (2026)]]).

Korpuset rummer også den pessimistiske læsning som argument frem for måling. [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026|Muñiz og Castro Samayoa (2026)]] argumenterer for, at det dominerende brugsmønster eroderer kritisk tænkning, ikke adgangen til en model. De bygger på Deweys påstand om, at tænkning kun forbedres gennem øvelse, og på tre mekanismer: fjernet friktion, [[automation-bias|automatiseringsbias]] og en effektivitetsramme. Spændingen med Zhao et al. er reel og uafklaret i korpuset. Deres metaanalytiske gevinst på g = 0,609 beskriver designede interventioner, mens Muñiz og Castro Samayoa beskriver typisk brug. Læst sammen er de enige om, at designvariablen er det afgørende, og uenige om, hvordan den ustyrede standard ser ud.

**Et [[meta-analysis-systematic-review|metaanalytisk]] anker for moderationspåstanden.** På tværs af 29 eksperimenter hævede GenAI højere ordens tænkning moderat (g = 0,609), med kritisk tænkning på ES = 0,691 — under [[problem-solving|problemløsning]] (0,745) og over [[creativity|kreativitet]] (0,444) — stærkest for 8–16-ugers interventioner (0,759) og for lærende med høj SRL (0,863 mod 0,284) ([[zhao-genai-higher-order-thinking-meta-2026|Zhao et al. (2025)]]).

[[chatgpt-critical-creative-thinking-review|Gennemgange af ChatGPTs indvirkning på tænkning]] dokumenterer blandede fund: AI kan [[scaffolding|stillasere]] kritisk analyse, når den bruges bevidst (f.eks. ved at bede studerende kritisere AI-genererede argumenter), men den kan også kortslutte tænkning, når den bruges som svarmaskine. Denne spænding forbinder til [[ai-literacy-assessment-misalignment|forskning i kompetencevurdering]], der viser, at selvrapporteret AI-kompetence langt overstiger den faktiske kritiske vurderingsevne. En kritisk gennemgang af 80 HCI-studier af kritisk tænkning med AI fandt, at feltet måler det, det sjældent definerer: kun 23 af de 80 angav overhovedet, hvordan de forstod kritisk tænkning, 49 (61 %) vurderede det via selvrapportering frem for præstation, og 42 (52 %) brugte ingen kontrolgruppe ([[critical-review-critical-thinking-hci-research-ai-2026]]).

[[critical-thinking-paradox-genai-learning-2026|Lin og Al-Hada (2026)]] læser det blandede billede som en produkt–proces-dissociation: GenAI kan hæve kvaliteten af en aflevering, mens den sænker den uhjulpne, forsinkede transfer bag den, så læring bør vurderes på uhjulpet forsinket præstation frem for på det AI-assisterede produkt.

- **Højere ordens kognitivt engagement i studerende-AI-chat.** Chang og Li (2026) finder, at ca. 62 % af studerendes prompts til AI koder højere ordens kognitiv efterspørgsel, med Bloom-niveauprofiler, der varierer efter disciplin ([[stem-education|STEM]] Apply-domineret 20,8 %, sprog Understand-domineret 31,7 %, samfundsvidenskab Create-domineret 33,8 %). Deres inden-for-person-design viser, at de samme studerende producerer signifikant flere højere ordens prompts i samfundsvidenskab end i STEM-kurser (p < 0,001), hvilket indikerer, at disciplinær kontekst former kritisk og højere ordens engagement med AI.

- **Interaktionsmønstre klynger efter Bloom-niveau og forhåndsviden.** I en undersøgelsesbaseret datavidenskabelig skriveopgave producerede 19 studerende 14 [[llm]]-interaktionsmønstre, der varierede med forhåndsvidensniveau, og designimplikationen var at rette stilladseringen mod specifikke højere ordens tænkningstrin frem for mod LLM-brug generelt ([[luo-ibl-patterns-llm-bloom-2026|Luo et al. (2026)]]).

- **AI som katalysator for kritisk mediekompetence hos børn.** Demir og Akar (2026) evaluerer et 18-timers kritisk mediekompetenceprogram efter 5E-modellen for tyrkiske fjerdeklasses elever, hvor [[generative-ai|generativ AI]] (ChatGPT, Grammarly) fungerede som en [[pedagogical-agent|pædagogisk agent]] indlejret fase for fase frem for som et tillæg. Sammenligninger af parrede stikprøver viste store gevinster i medielæsning (+3,50), skrivning (+1,67) og samlet mediekompetence (+5,17, alle p < 0,01), med mellemgruppe-effektstørrelser ved posttest på Cohen's *d* = 1,12 (læsning), 1,18 (skrivning) og 1,31 (samlet kompetence) til fordel for den AI-understøttede gruppe. [[qualitative-research|Kvalitativ]] analyse (interviews, elevplakater/tegninger/slogans, klasseværelsesobservation) frembragte seks domæner af vækst i kritisk mediekompetence — digital selvbeskyttelse og [[privacy|dataprivatliv]], formålsbestemt og ansvarlig mediebrug, sikker kommunikation og grænsebevidsthed, kritisk vurdering og misinformationsbevidsthed, bevidsthed om onlinerisici og medie-[[ethics|etik]]/digitalt medborgerskab — hvilket indikerer, at bevidst afhøring af AI-medieret indhold kan kultivere kritisk analyse og refleksion hos unge lærende.

- **Dimensionsspecifikke gevinster i kritisk tænkning ved multimodal skrivning i grundskolen.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] fulgte 60 [[k-12|elever i 5. klasse]] gennem en otteugers [[conversational-ai]]-understøttet multimodal skrivepraksis, hvor de omsatte fortællinger til AI-genererede billeder og korte videoer. Gentagne målinger over seks dimensioner af kritisk tænkning viste vedvarende gevinster (T1→T2 og T1→T3) i fortolkning, analyse, vurdering og forklaring, en kortvarig gevinst i selv-[[regulation|regulering]] og **ingen ændring i inferens** — et ujævnt mønster på dimensionsniveau, som en samlet score for kritisk tænkning ville have skjult. Forfatterne argumenterer for, at de AI-genererede visualiseringer *eksternaliserede* mening og dermed sænkede den inferentielle efterspørgsel, som skrivning normalt pålægger, mens [[collaborative-learning|peer-samarbejde]] (peer-spørgsmål, der tvang til at udlede andres fortolkninger) leverede de anledninger til inferens, som den individuelle [[student-ai-interaction|AI-interaktion]] ikke gav. Designlæren: [[multimodal|multimodal AI]]-komposition understøtter flere facetter af kritisk tænkning, men bør ledsages af fortsat [[scaffolding]] og struktureret peer-udveksling for at bevare inferens og [[self-regulated-learning|selvregulering]].

- **AI-stilladsering og udlicitering trækker kritisk tænkning i modsatte retninger.** Davor, Larbi og Boateng (2026) undersøgte 533 universitetsstuderende i Ghana og fandt, at AI-opgavestilladsering forudsagde højere kritisk tænkning (β = 0,185), mens tilbøjeligheden til [[cognitive-offloading|kognitiv udlicitering]] forudsagde lavere kritisk tænkning (−0,240); AI-verifikationskompetence havde ingen direkte effekt på kritisk tænkning og virkede kun gennem [[metacognition|metakognitiv selvregulering]], et fuldt medieringsmønster, som forfatterne læser som evidens for, at det ikke er nok i sig selv at lære studerende at faktatjekke AI. ([[davor-ai-supported-learning-higher-order-outcomes-2026|Davor et al. 2026]])
- **Det er udliciteringens dybde, ikke brugen, der begrænser højere ordens tænkning.** At uddelegere skrivningens ræsonnementslag — begrundelser, modargumenter, evidensfortolkning — havde den stærkeste negative sammenhæng med uafhængig højere ordens tænkning (ab = −0,34), og selvreguleret skrivning svækkede, men vendte aldrig, denne sammenhæng ([[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]]).

- **Det er afhængighed, ikke brug, der vender sammenhængen med kritisk tænkning.** Shojaei og kolleger (2026) undersøgte 412 businessstuderende i Oman og fandt en næsten nul bivariat korrelation mellem [[generative-ai|GenAI]]-brug og selvrapporteret kritisk-tænkning-disposition (r = 0,050), hvor afhængighed forudsagde lavere disposition (β = −0,389) og svækkede forbindelsen fra brug til disposition (β = −0,239), så den simple hældning faldt fra 0,424 ved lav afhængighed til −0,054 ved høj afhængighed. ([[shojaei-genai-dependence-critical-thinking-employability-2026|Shojaei et al. 2026]])

En større tværsnitsundersøgelse peger den anden vej: blandt 1.157 kinesiske kandidatstuderende var [[generative-ai|GenAI]]-afhængighed positivt forbundet med kritisk tænkning (β = 0,492), og kritisk tænkning bar ca. 85,0 % af banen fra funktionel afhængighed til forskningskreativitet ([[genai-dependence-research-creativity-2026|Yin et al. (2026)]]).

- **Forhåndsviden og opgavetidspunkt bestemmer effektens fortegn.** På tværs af 108 gennemgåede dokumenter hævede GenAI præstationen i kritisk tænkning for erfarne forskere (+0,20) og sænkede den for nybegyndere (−0,13); tidlig adgang hjælper under tidspres, men hæmmer kritisk tænkning, når der er tid til eftertanke ([[zapata-hernandez-genai-cognitive-infrastructure-review-2026|Zapata-Hernandez et al. 2026]]).

- **En kort refleksionsprompt gør afhængigheden af AI-råd mere diskriminerende.** I et trebetingelseseksperiment med 342 bachelorstuderende fandt Ren (2026), at åben ChatGPT-støtte førte til accept af forkerte AI-anbefalinger i 62,4 % af forsøgene, faldende til 39,7 % med en kort metakognitiv refleksionsprompt (OR = 0,40, 95 % CI [0,28, 0,56]); refleksion forbedrede også bevidsthedskalibreringen (0,59 mod 0,41) og skar det AI-specifikke attribution-bias-indeks fra 0,42 til 0,21 uden at reducere anbefalingernes nøjagtighed eller udløse generel afvisning af nyttig rådgivning. ([[ren-metacognitive-awareness-genai-reliance-2026|Ren 2026]])

- **Tillid kan stige, mens nøjagtigheden falder.** [[shaw-nave-cognitive-surrender-2026|Shaw og Nave (2026)]] fandt, at konsultation af en AI-assistent hævede nøjagtigheden med 25 procentpoint, når den havde ret, og sænkede den med 15, når den tog fejl, men at brugen af den øgede selvtilliden selv efter fejl, og 73,2 % af forsøgene med forkert AI endte i [[cognitive-surrender|overgivelse]] frem for strategisk udlicitering.
- **Lærerkurateret ChatGPT-feedback hæver kritisk tænkning gennem højere ordens revision.** Chen og kolleger (2026) gennemførte et 18-ugers kvasi-eksperiment med 64 bachelorstuderende, alle kommende kemi-, fysik- eller matematiklærere, og sammenlignede konventionel lærerfeedback (n = 32) med ChatGPT-assisteret lærerfeedback (n = 32) på tværs af to argumenterende skriveopgaver. Grupperne startede ækvivalente, og kun den assisterede gruppe forbedredes signifikant (p < 0,001), med Cohen's *d* stigende fra 0,25 ved pretest til 3,74 ved posttest. Mekanismen var feedbacktypen, ikke blot tilstedeværelsen af en model: den assisterede gruppe modtog mere demonstration (33,1 % vs. 10,9 %) og tæt afhørende feedback (21,5 % vs. 6,0 %), reviderede 91,00 % (435 af 478) af feedbackenhederne mod 85,21 % (242 af 284), og [[network-analysis|epistemisk netværksanalyse]] knyttede disse revisioner til analyse, vurdering og skabelse frem for genkendelse og forståelse, mens lærerens undervisning og evalueringsfeedback mest gav revisioner af typen genkendelse og forståelse. Lærerne behandlede modellens output som udkastmateriale og udvidede, reviderede eller forkastede det (14 % forkastet, 9 % krævede korrektion), og seks af otte interviewpersoner påpegede stadig upræcision eller uprofessionalisme. Designlæren er, at gevinsten i kritisk tænkning kom fra feedback, der modellerer alternativer og afhører den studerendes ræsonnement, med en [[teacher-role|lærer]], der kuraterer, hvad modellen producerede; den lille, enkeltsemesterprøve betyder, at den meget store effektstørrelse bør læses med forsigtighed. ([[chen-chatgpt-assisted-teacher-feedback-critical-thinking-2026|Chen et al. 2026]])

- **Et semester med AI-adgang efterlod kritisk tænkning uændret, mens reflekteret brug fulgte den.** Melanou, Beege og Kimmig (2026) fulgte 87 business-informatikstuderende gennem et ni-ugers kursus i tre parallelle betingelser (tutor-indrammet AI, ustyret AI og ingen AI) målt tre gange. Viden steg i alle grupper uden fordel for nogen af AI-betingelserne og uden Matthew-effekt (BF01 = 8,70), mens selvrapporteret kritisk tænkning og [[motivation]] forblev stabile. Det, der adskilte studerende, var reflekteret brug, praksissen med at tjekke kilder og verificere AI-output, før man tilegner sig det: den var højere i AI-betingelsen end i kontrolgruppen (gennemsnit 3,72 vs. 2,82) og forudsagde kritisk tænkning ved den sidste måling (R² = 0,183, β = 0,43, p < 0,001). Resultatet kvalificerer enhver forventning om, at et kursus med AI-brug flytter kritisk tænkning af sig selv: [[metacognition|metakognitiv]] regulering, ikke værktøjsadgang, er der, hvor sammenhængen bor, og forfatterne bemærker, at et semester sandsynligvis er for kort til at se varig forandring. ([[melanou-genai-learning-dynamics-longitudinal-2026|Melanou et al. 2026]])

### Forbindelser til andre begreber

Kritisk tænkning krydser [[scaffolding]] (at designe AI-støtte, der bevarer kognitiv efterspørgsel), [[prompt-engineering]] (at formulere spørgsmål, der fremkalder kritisk analyse) og [[cognitive-offloading|Overafhængighed]] (at vide, hvornår man skal stole på og hvornår man skal stille spørgsmål ved AI). Det er grundlæggende for [[academic-integrity]] og fungerer som en nøgledimension i [[ai-literacy]]-rammer i både [[k-12]]- og [[higher-ed]]-kontekster.

- **AI-fejl som provokationer til højere ordens tænkning:** [[pedagogy-ai-mistakes|Hosseini (2026)]] operationaliserer Blooms højere ordens niveauer (Analyze, Evaluate, Create) ved at lade studerende afhøre AI-genererede fejl i et databasekursus, med signifikante præ/post-gevinster (Cohen's *d*=1,49) i faglig kompetence.
- **Kritik af AI-output er en færdighed, der kan stilladseres, ikke et biprodukt af problemløsning.** Grupper, der kun løste et relateret fysikproblem, accepterede en poleret AI-løsning eller kritiserede den ud fra deres egne [[misconceptions|fejlopfattelser]], hvorimod MAPS-rubrikstyret refleksion gav ekspertlignende kritik af manglende integration og udefineret notation ([[probing-ai-generated-physics-solutions-2026|Borse et al. (2026)]]).

- **Afgræns AI'en for at bevare kognitivt handlefrirum.** E3-HOT-blueprinten kortlægger tre [[embodied-learning|kropsliggjorte]] veje — situationel indlejring, kropslig deltagelse, kognitiv skabelse — til Analyze, Evaluate og Create og begrænser AI'en til prompts, kritik og strategiforslag, så studerende må formulere begrundelser og citere evidens, før en påstand accepteres ([[zhu-e3-hot-embodied-intelligence-sustainable-learning|Zhu et al. (2026)]]).

- **Tosidet revision af AI-forklaringer.** Bernstein og Sibia (2026) brugte Paul–Elder-standarder (nøjagtighed, klarhed, antagelser, synspunkt) som interviewprober med ti studerende, der havde gennemført CS2, og fandt mekanismeniveau-granskning af [[generative-ai|GenAI]]-forklaringer: studerende lokaliserede, hvor en analogis mapping brød sammen (en ø-rute-analogi for en linket liste, der antydede en cirkel, en badminton-serie til rekursion uden garanteret skrumpende input), krævede præcis ordlyd frem for forbehold og behandlede forklaringer som argumenter med et synspunkt. Afgørende var, at denne granskning fulgte ekspertise i kilde- eller måldomænet frem for personlig interesse — hvilket omformulerer kritisk [[ai-ed-evaluation|vurdering af AI]]-output som et vidensproblem ("tosidet analogirevision") frem for et dispositionelt — og antyder, at det at give fejlbehæftede AI-analogier som objekter, der skal undersøges og repareres, er en hårdere test af begrebslig forståelse end at læse en færdig forklaring.([[student-reception-genai-analogies-computing-2026]])

- **Kritisk tænkning som engagement, der ikke kan outsources.** Xie (2026) tilføjer en [[philosophy-of-ai-in-education|filosofisk]] modpart fra daoistisk selvdyrkelse: fordi AI er en uigennemsigtig "black box", passer en ramme, der er orienteret mod at harmonisere usikkerhed frem for at afgøre sandhed i absolutte termer, bedre til det nuværende epistemiske landskab, og kritisk tænkning bliver vedvarende, førstepersons, ikke-outsourcebart engagement med virkeligheden frem for en demonstrerbar rationel procedure. I Neidan (內丹)-praksis "er der ingen kognitive genveje", så AI positioneres som "ikke en kognitiv surrogat, men et instrumentelt supplement" til menneskelig blomstring.([[daoism-ai-education-philosophy-2026]])

- **Roterende roller som struktur for kritisk [[human-ai-collaboration|menneske-AI-interaktion]].** Kenzhebayeva og kolleger (2026) rapporterer et designbaseret studie, hvor 62 kommende uddannelsespsykologer roterede gennem fire professionelle roller (Case Constructor, Research Analyst, Practitioner-Interventionist, Reflective Researcher), som gjorde genererede anbefalinger til genstand for diskussion. Deltagerne sammenlignede AI-output med psykologisk teori og modificerede eller forkastede anbefalinger, der ikke passede til casen, og senere cyklusser viste flere anmodninger om teoretisk begrundelse, mens overafhængigheden af tilsyneladende autoritative svar vedvarede. ([[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al. 2026]])

- **Verifikationscentreret integration i en disciplin.** En kritisk gennemgang af [[generative-ai|generativ AI]] i universitets-[[chemistry-education|kemisk uddannelse]] (Vega-Baudrit og Rivera Álvarez, 2026) argumenterer for, at fordi kemisk ræsonnement skal koordineres på tværs af makroskopiske, submikroskopiske og symbolske repræsentationer, kan studerende ikke verificere, hvad de ikke forstår, så [[prior-knowledge|forhåndsviden]] og [[scaffolding]] kommer først, og verifikation bør designes ind i [[assessment|vurderingen]] som en vurderet aktivitet: identificér en falsk antagelse, ret en enheds- eller mekanismefejl eller begrund afvisningen af et genereret svar, og behold promptlogs og revisionshistorikker som ræsonnementsspor. ([[vega-baudrit-genai-university-chemistry-education-review-2026|Vega-Baudrit og Rivera Álvarez 2026]])
- **Verifikation som læringsaktivitet, ikke kun som sikkerhedsforanstaltning.** [[pearls-epistemic-verification-2026|Wang (2026)]] organiserer vurdering af AI-artefakter omkring seks indbyrdes afhængige dimensioner — Process, Evidence, Access, Reproducibility, Legitimacy og Source — og behandler det at samle denne berettigelse, frem for outputtets flydenhed, som det, der opbygger disciplinær ekspertise.

**Den største ekspertvurderede sårbarhed i vidensbasen er kritisk tænkning.** På tværs af 65 læringsprocesser vurderet af 30 eksperter fik Critical Thinking og Critical-Analytic Thinking rapportens højeste forstyrrelsesrating (gennemsnit 4,00 af 5; 96 % af bedømmerne på eller over 3), med forbedring under tærsklen (2,40; 43 %) ([[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou, Greene & Nixon et al., 2026]]). Ti af atten højere ordens processer opnåede konsensus om kun sårbarhed, hvilket rapporten læser som ensidig risiko frem for en afvejning.

- **Det er partnerskabets struktur, ikke eksponeringen, der bærer sammenhængen.** [[akgun-toker-genai-critical-thinking-transactive-memory-2026|Akgun og Toker (2026)]] modellerede 891 amerikanske og tyrkiske universitetsstuderende med transaktiv hukommelsesteori og fandt, at hverken selvurderet tænkningsevne eller tillid til AI-partnerskabet direkte forudsagde udøvelse af kritisk tænkning. Begge nærede GenAI-fortrolighed, som igen kun forudsagde to adfærder: specialisering og arbejdsdeling (b = 0,636) og refleksiv transformation af output (b = 0,367). Disse adfærder forudsagde kritisk tænkning (b = 0,230 og b = 0,175), uden at der var en direkte bane tilbage (CFI = 0,974, RMSEA = 0,048). Dette er mekanismeniveau-versionen af feltets tilbagevendende nulresultat: brugstimer og selvurderet kompetence er ikke proxyer for kritisk tænkning, og det, et studie måler, når det spørger til eksponering, er inputtet til kæden frem for dens resultat.

## Almindelige fejlopfattelser

- **"En bedre prompt giver bedre kritisk tænkning."** **Struktureret dialogstyring, ikke en bedre prompt**, adskiller en fejlslutningsvejleder fra en debatchatbot: at lede hver tur gennem **Toulmin-baseret intentdetektion** gjorde arbejdet. Mekanismen er interaktionsstrukturen frem for ordlyden.
- **"GenAI-brug hæver kritisk tænkning direkte."** GenAI-brugs sammenhæng med **selvrapporteret** kritisk tænkning gik **næsten udelukkende gennem GenAI-[[feedback-literacy|feedbackkompetence]]** — hos **421 kinesiske bachelorstuderende** medierede feedbackkompetence **71 %** af sammenhængen. Kompetencen er vejen.
- **"Den metaanalytiske effekt er ensartet."** På tværs af **29 eksperimenter** hævede GenAI højere ordens tænkning moderat (**g = 0,609**) med kritisk tænkning på **ES = 0,691**. Moderate samlede effekter over heterogene interventioner understøtter kategorien, ikke et specifikt design.

## Forbundne begreber

- [[metacognition]]
- [[cognitive-offloading]]
- [[ai-literacy]]
- [[generative-ai]]
- [[higher-ed]]
- [[problem-based-learning]]
- [[intelligent-tutoring]]
- [[educational-development]]
- [[teacher-role]]
- [[student-experience]]
- [[chemistry-education]] — Kemisk uddannelse og AI: laboratorier, formativ vurdering, LLM-grænser, eksperimentfilosofi
- [[biology-education]] — Biologiuddannelse og AI: undervisningsassistenter i laboratoriet, AI-kompetence i biologi, kritisk tænkning, specialiserede værktøjer
- [[cognitive-surrender]]
- [[reflection]]

## Forbundne artikler
- [[akgun-toker-genai-critical-thinking-transactive-memory-2026]] — Kritisk tænkning går gennem arbejdsdeling og omarbejdning af output, ikke gennem eksponering
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] - En konsensus blandt 30 eksperter: kritisk tænkning bærer rapportens højeste forstyrrelsesrating (gennemsnit 4,00)
- [[pearls-epistemic-verification-2026]] — PEARLS-rammen for epistemisk handlefrirum og verifikation af AI-output (Wang 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Lagfølsom kognitiv udlicitering i GenAI-assisteret skrivning (Chen 2026)
- [[critical-thinking-paradox-genai-learning-2026]] — Kritisk-tænkning-paradokset i GenAI-integreret læring
- [[pedagogy-ai-mistakes]] — Pædagogikken i AI-fejl: at fremme højere ordens tænkning (Hosseini 2026)
- [[shaw-nave-cognitive-surrender-2026]] — Tri-System-teori og kognitiv overgivelse: hvordan AI omformer menneskelig ræsonnering (Shaw & Nave 2026)
- [[cognitive-commons-ai-expertise-regeneration]] — Tragedien om det kognitive fællesgode: AI og regenerering af ekspertise
- [[zhao-genai-higher-order-thinking-meta-2026]] — Metaanalyse af GenAI og højere ordens tænkning
- [[avraamidou-ai-colonization-science-education]] — At forstyrre AI-koloniseringen af naturfagsundervisningen
- [[li-mroziak-reorienting-critical-ai-literacy]] — At reorientere kritisk AI-kompetence
- [[luo-ibl-patterns-llm-bloom-2026]] — IBL-mønstre i LLM-drevne miljøer (Blooms perspektiv)
- [[probing-ai-generated-physics-solutions-2026]] — At forberede studerende på at kritisere AI-genererede fysikløsninger
- [[student-reception-genai-analogies-computing-2026]] — Fejlbehæftet, men mindeværdigt: studerendes kritiske reception af interessepersonaliserede GenAI-analogier i datalogiundervisning
- [[daoism-ai-education-philosophy-2026]] — Alternativ AI-filosofi: daoisme som metode til AI i uddannelse
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — At fremme bæredygtig læring gennem kropsliggjort intelligens (E3-HOT)
- [[ai-overreliance-complex-adaptive-system-2026]] — AI-overafhængighed modelleret som et komplekst adaptivt system
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Dimensionsspecifikke gevinster i kritisk tænkning ved AI-understøttet multimodal skrivning (Lu et al. 2027)
- [[lftutor-logical-fallacy-education-2026]] — at undervise i genkendelse af fejlslutninger gennem struktureret flertursdialog
- [[caeai-ai-companions-learning-over-performance-2026]] — læring frem for præstation: hvad følgesvende bør optimeres og måles for
- [[davor-ai-supported-learning-higher-order-outcomes-2026]] — AI-stilladsering, udlicitering og verifikationskompetence via metakognitiv selvregulering (Davor et al. 2026)
- [[shojaei-genai-dependence-critical-thinking-employability-2026]] — GenAI-afhængighed afgrænser forbindelsen mellem brug og kritisk tænkning hos businessstuderende (Shojaei et al. 2026)
- [[ren-metacognitive-awareness-genai-reliance-2026]] — Refleksionsprompt skærer accepten af forkerte AI-råd og attributionsbias (Ren 2026)
- [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026]] — Rollerotation som struktur for kritisk menneske-AI-interaktion (Kenzhebayeva et al. 2026)
- [[vega-baudrit-genai-university-chemistry-education-review-2026]] — Verifikationscentreret GenAI-integration i universitetskemisk uddannelse (Vega-Baudrit og Rivera Álvarez 2026)
- [[chen-chatgpt-assisted-teacher-feedback-critical-thinking-2026]] — lærerkurateret ChatGPT-feedback hævede kritisk tænkning via højere ordens revision (Chen et al. 2026)
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — et semester med AI-adgang efterlod kritisk tænkning uændret; reflekteret brug forudsagde den (Melanou et al. 2026)

- [[genai-dependence-research-creativity-2026]] — GenAI-afhængighed positivt forbundet med kritisk tænkning hos 1.157 kandidatstuderende
- [[genai-use-critical-thinking-moderation-2026]] — GenAI-brug til kritisk tænkning via feedbackkompetence, med en direkte bane kun for mindre reflekterende studerende
- [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026]] — Den pessimistiske læsning af moderationsevidenen: friktionstab, automationsbias, effektivitetsramme
- [[zapata-hernandez-genai-cognitive-infrastructure-review-2026]] — Narrativ gennemgang af 108 dokumenter: effektens fortegn følger forhåndsviden og opgavetidspunkt (AMCIF-rammen)
