---
title: "Hvad er bedste praksis for at rapportere og fortolke forskning i AI i uddannelse?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Dit manuskript har et hovedtal i abstraktet, og en bedømmer har netop spurgt, hvad kontrolgruppen egentlig gjorde. Eller du er bedømmeren og sidder med en metaanalyse, hvis samlede effekt er 0,67, og hvis metodeafsnit fylder halvanden side. Eller din afdeling skriver vejledning om, hvordan medarbejdere skal rapportere AI-studier, og vil have noget mere konkret end »følg standarderne«.

Seks udeladelser afgør de fleste af disse sager: hvilket AI-system der blev brugt, hvad det var konfigureret til at gøre, hvilken pædagogisk rolle det spillede, om mennesker designede eller gennemgik dets output, hvad udfaldsmålet egentlig indfangede, og hvad forfatterne gjorde ved bias, omkostninger og begrænsninger. »Ikke vurderbar« er den ærlige dom, når de mangler, og det er en anden dom end »afvist«.

## Den korte version

**1.** Beskriv AI'en som en indsats, ikke som en leverandør. Model, version, konfiguration, prompter, rolle og hvem der designede eller gennemgik outputtet.

**2.** Navngiv den pædagogiske begrundelse og den aktive sammenligning. Et produktnavn er ikke en metode, og undervisning som sædvanligt er ikke en retfærdig kontrol.

**3.** Få målet til at passe til påstanden, inklusive om udfaldet var forsinket og uden hjælp.

**4.** Rapportér den usikkerhed, analysen faktisk har: afhængige effekter, varians mellem studier, prædiktionsintervaller, undergruppestørrelser, publikationsbias.

**5.** Validér enhver automatiseret vurdering, med en navngiven guldstandard og en navngiven skønsmand.

**6.** Rapportér modvægtene: styring, beregningsomkostninger, din egen AI-brug, nulresultater og kun de kilder, du har tjekket.

## Beskriv AI'en som en indsats, nogen kunne genopbygge

Det er den kontrol, de fleste indsendelser fejler. RAISE-rammeværket (*Reporting AI Studies in Education*, Allison 2026) er en tjekliste med 30 punkter fordelt på ti tematiske domæner, og dets diagnostiske påstand er konkret: indsendelser udelader rutinemæssigt, hvilken model der blev brugt, hvordan den var konfigureret, hvilken rolle den spillede, og om menneskelige aktører designede eller gennemgik dens output. Bedømmerne står så tilbage med fire ubesvarlige spørgsmål. Hvad lavede AI'en helt præcist? Var den nødvendig? Kan dette replikeres? Er læringspåstandene troværdige?

RAISE løber fra pædagogisk begrundelse over API-niveau-specifikation, lærende-AI-interaktion, tilgængelighed og kulturel pasform, deltagere og kontekst, menneskelig involvering, design, etik, gennemsigtighed og reproducerbarhed til begrænsninger. Dens ledsagende Etik- og risikomatrix dækker risici for den lærendes [[agency|handlekraft]], [[equity-in-ai-education|ligestilling]], data[[governance|styring]] og algoritmisk gennemsigtighed. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah og Gašević (2026)]] tilbyder et strømlinet alternativ. TEP-AIED folder gennemsigtighed, etik og pædagogik ind i én indbyrdes afhængig struktur, leverer en retningslinjetabel knyttet til syv artikelafsnit og beder forfattere tilføje et metodeunderafsnit med titlen »Transparency, Ethics, and Pedagogy Considerations«. Deres begrundelse er praktisk: RAISE er omfattende og for granulær til rutinemæssig empirisk brug. Oplysningen hører under [[ai-use-disclosure|oplysning om AI-brug]] og er det, der gør påstande om [[privacy|privatliv]] og [[ethics|etik]] efterprøvelige.

Pædagogisk begrundelse kommer først i RAISE, fordi AI ikke er et neutralt værktøj. Værdien afhænger af sammenhæng mellem læringsproblemet, en teoretisk begrundelse og koblingen fra læringsmål til udfaldsmål. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] fandt, at alle undtagen to af 14 granskede metaanalyser definerede indsatsen som et værktøj, ChatGPT eller GenAI eller »AI« generelt. Et produktnavn er ikke en [[pedagogy|pædagogik]]. At behandle eksponering for ChatGPT som én fælles intervention svarer til at metaanalysere effekterne af »papir«.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] fremfører samme argument for primærstudier. Da de granskede en delmængde af de sammenligninger, der ligger bag en fremtrædende metaanalyse, fandt de, at kun 21 % havde en veldefineret indsats, en kontrolgruppe og et gyldigt læringsmål. Den rapporterede effektstørrelse (g = 0,7) oversteg også den for specialbyggede [[intelligent-tutoring|intelligente tutorsystemer]] (0,66), og det gab er et advarselstegn: en indsats, der slår specialbygget tutoring, er sandsynligvis en bunke forskellige ting med ét fælles mærkat.

Prøven er ét spørgsmål: kunne en kompetent læser genopbygge din intervention alene ud fra metodeafsnittet og få det samme?

## Beslut hvad dit mål giver dig lov til at påstå

I O'Neills evidensgranskning af 46 tilfældigt udvalgte primærstudier fremviste 28 (61 %) gyldighedsproblemer. Mismatch mellem afhængig variabel var det hyppigste (n = 15), efterfulgt af mismatch mellem uafhængig variabel (n = 11), problemer med eksperimentelt design (n = 7), problemer med dataudtræk (n = 6), manglende kontrolgruppe (n = 6) og ikke-randomiseret gruppetildeling (n = 6). Flerdimensionale udfald blev rutinemæssigt slået sammen, som om de var udskiftelige, med testresultater, lektiekvalitet, [[motivation]], [[self-efficacy|self-efficacy]], holdninger og [[student-engagement|engagement]] presset sammen til ét tal for »fagligt udbytte«.

To rapporteringsvaner forhindrer det. Angiv, hvilket konstrukt instrumentet måler, og at det blev valideret til den population; [[self-report-measures|selvrapporteringsmål]] viser, hvor perceptionsbaserede mål afviger fra adfærd, og [[assessment-validity|bedømmelsesgyldighed]] dækker konstruktvaliditet. Rapportér derefter et udfald, der ikke afhænger af den lærendes tro på hjælpen. Umiddelbar opgavepræstation under assistance er ikke en [[learning-gains|læringsgevinst]], og [[cognitive-offloading|kognitiv udlicitering]] er den mekanisme, der mest sandsynligt adskiller de to. Den [[verification-quality-reliance-calibration-genai-2026|mini-gennemgang fra 2026 af 493 poster og 14 prioriterede studier]] fandt, at ingen målte verifikationssucces og den efterfølgende afhængighedsbeslutning sammen mod en uafhængigt bedømt standard for outputkvalitet, og få kiggede forbi umiddelbar præstation til forsinket fastholdelse eller [[transfer-of-learning|overførsel]].

Angiv loftet eksplicit i diskussionen. Et studie, der målte en quiz taget med værktøjet åbent, kan understøtte en påstand om assisteret præstation. Det kan ikke understøtte en påstand om, hvad de studerende lærte, og den sætning koster én linje.

## Rapportér den usikkerhed, din analyse faktisk har

For synteser skal du rapportere håndtering af afhængige effekter, varians mellem studier, prædiktionsintervaller og vurdering af publikationsbias. I² alene gør ikke arbejdet. O'Neill fandt rapporteret heterogenitet alvorlig, hvor den blev angivet, fra 77,2 % til 94,4 % på tværs af 13 metaanalyser, hvor 12 lå over 80 %, og aldrig opløst: ingen moderatoranalyse nåede den mindste undergruppestørrelse på ti studier. Tolv metaanalyser behandlede afhængige effektstørrelser fra samme studie som uafhængige, hvilket oppuster den tilsyneladende evidens. Kun fire rapporterede varians mellem studier (τ²), og kun to et prædiktionsinterval, og begge intervaller indeholdt nul. Publikationsbias blev ikke vurderet gyldigt nogen steder i sættet.

Heterogenitetstal kræver deres model vedhæftet, fordi I² afhænger af præcision. [[limitations-in-aied-research|Begrænsninger i AIEd-forskning]] dokumenterer én syntese ved I² = 82,98 % under en fixed effect-model og 15,75 % under random effects. En læser, der kun får det første tal, kan ikke se, hvor inkonsistent korpusset er. Rapportér τ² og et prædiktionsinterval ved siden af, hvilket også er den konvention, [[meta-analysis-systematic-review|reviewlitteraturen]] beder om.

Rabatér derefter på dit eget hovedtal. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] samlede 1.840 effektstørrelser fra 67 metaanalyser og fandt, at når publikationsbias modelleres, falder gennemsnitseffekten til omkring en tredjedel af det publicerede median (SMD = 0,196 mod 0,67), med et prædiktionsinterval fra -1,521 til +1,908. Det interval spænder fra betydelig skade til betydelig gavn for et hypotetisk nyt studie. Det er det mest nyttige tal i artiklen og det, der lettest falder ud af abstraktet.

## Sig hvor langt påstanden rækker

Retfærdighed og rækkevidde svigter på samme måde: en stor effekt, der betyder mindre, end den ser ud til. Elleve af de 14 granskede metaanalyser satte ingen populationsgrænse, så »studerende« spændte fra børn til medicinske praktikanter. Et enkelt kursus, en institution, et fag eller et land giver ikke licens til en generel påstand, og resultater for ét værktøj overføres sjældent til et andet.

Tre forklaringer står for de fleste store effekter, og hver af dem kan rapporteres. Nyhed er én. Ekstra tid på opgaven er en anden. Den tredje er en sammenligningsbetingelse, der fik undervisning som sædvanligt i stedet for en aktiv kontrol. Rapportér, hvad kontrollen faktisk gjorde, hvor meget tid hver arm brugte, og hvor ny værktøjet var. Angiv også populationsgrænsen, fordi effekter varierer mellem grupper af lærende, og en uangivet grænse er det, der lader ét samlet tal stå i stedet for alle; [[differential-effects-across-learner-groups|Forskellige effekter på tværs af grupper af lærende]] redegør for variationen.

Behandl værktøjet som et bevægeligt mål. Proprietære systemer ændrer sig uden varsel, så et fund er bundet til en modelversion, og det [[benchmark]], der imponerede i én udgivelse, holder måske ikke i den næste. Version og adgangsdato hører i metodeafsnittet netop derfor, ikke kun af replikationshensyn.

## Validér de automatiserede vurderinger

[[ai-ed-evaluation|AIED-evaluering]] overlader i stigende grad scoring til modeller, hvilket gør valideringsproceduren til en del af resultatet snarere end et bilag. Khan Academys redegørelse for deres [[intelligent-tutoring|AI-tutor]]-målinger rapporterer, at kognitivt engagement scores af en [[llm|LLM]]-bedømmer kalibreret mod menneskelige pædagogiske eksperter ved F1 0,83, og at målingernes bevægelser kom fra mere end 40 live-eksperimenter på fem måneder snarere end fra offline-evaluering ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] viser, at uenighed mellem menneske og maskine om kvaliteten af [[formative-assessment|pretest-spørgsmål]] er systematisk snarere end tilfældig, og at operationalisering af bedømmelsesrubrikken betyder mere end rationale-first-prompting.

Enighed med menneskelige kodere er noget andet end kvalitet, og at rapportere det, som om det var kvalitet, er et mål for bedømmere. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] lod en uafhængig ekspert bedømme 855 parrede kodesæt blindt for kilde. Menneske-LLM-enighed lå på et gennemsnitligt Jaccard på 0,30 mod 0,52 for menneske-menneske-enighed, mens den blinde verifikator foretrak menneskelig og maskinel kodning lige ofte (51,5 % mod 48,5 %, p = 0,537). Rapportér kalibreringsmålet, guldstandarden og hvem der afgjorde uenigheden. De tre punkter er det, der lader en læser afgøre, hvor meget vægt den automatiske score kan bære.

## Oplys omkostningerne og din egen brug

En gennemgang af alle konferenceartikler fra AIED 2025 fandt et mønster med LLM-anvendelse uden oplysning: de fleste projekter brugte LLM'er, og færre end en håndfuld rapporterede ressourceforbrug eller klimaaftryk. Den artikel leverer en open source-metode med måleværktøjer til lokal og cloud-baseret hardware, plus en formel til at estimere beregningsomkostningerne for frontiermodeller, hvis parameterantal ikke er oplyst. Dens argument er, at det i sig selv er et etisk problem ikke at rapportere disse omkostninger. Datastyring, samtykke, tilgængelighed og kulturel pasform hører i samme afsnit (RAISE-punkter; [[universal-design-for-learning|universelt design for læring]], [[accessibility|tilgængelighed]]). [[equity-ethics-pedagogical-safety-research]] har den fyldigere behandling.

Din egen brug af AI i forskningsprocessen kræver samme oplysning. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta og Lins PRISMA-LLM-analyse]] af 888 artikler om reviewautomatisering viser, hvor ujævn denne rapportering er. Siden 2023 rapporterede 38,0 % af artikler om software og produkter slet ingen evaluering, mod 9,3 % af LLM-artikler. Den gennemsnitlige rapporteringsrigdom var 6,3 for LLM-artikler og 3,3 for software- og produktartikler. 84,1 % af LLM-anvendelsen hvilede på proprietære eller hostede systemer, med kun 4,9 % åbne vægte. Deres rammeværk adskiller oplysning om implementering fra konsekvensfølsom evaluering på tværs af fem oplysningsniveauer, hvilket er en brugbar skabelon til at beskrive, hvad et værktøj gjorde inde i et review.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai og Chan (2026)]] tilføjer forfattersidens billede. Af 28 ph.d.-studerende brugte 27 GenAI til ideudvikling, litteraturgennemgang, forklaring, databehandling, programmering, [[writing-education|akademisk skrivning]], redigering og oversættelse. De kalibrerede brugen efter indsats og faglige normer. Deres institutioners politikker handlede om undervisning og bedømmelse snarere end forskningspraksis, hvilket overlader rapporteringsbeslutningen til forfatteren.

## Publicér nulresultatet, og tjek hver citation

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verificerede 30 opdigtede referencer på tværs af 14 artikler, hvor antallet ved et teknisk symposium steg fra 3 i 2025 til 17 i 2026, eller 2,3 % af årets proceedingartikler. LLM-assisteret udkastskrivning gør en plausibel opdigtet citation billig at producere, og det er derfor, tjekket skal ske før indsendelse snarere end efter accept.

Modvægtene i den granskning betyder noget, når du citerer den. De fleste markerede referencer var godartede: 229 var ACM-metadatafejl, hvor PDF'en var korrekt, og 188 var gyldige bibliografiske varianter. Antallet af opdigtede referencer er en bevidst nedre grænse, og det godartede flertal er ikke en afrundingsfejl. Verificér hver post, du ikke selv kan tjekke.

At rapportere nul- og negative fund er den anden halvdel af en ærlig evidensbase. Bartoš et al. fandt stærk evidens for undertrykte nulresultater (hver Egger-test p < 0,0001) og ekstrem heterogenitet (τ = 0,869), uden at noget udfald, fag, niveau eller AI-rolle-undergruppe viste konsistente gevinster. De fandt heller ingen forskel mellem studier publiceret før og efter januar 2023, hvilket underminerer påstanden om, at moderne generative værktøjer specifikt frembringer gevinster.

## Det, forskere tager fejl af her

**»En effektstørrelse er en egenskab ved modaliteten.«** Der findes ingen effekt af AI i uddannelse at rapportere. Alle undtagen to af de granskede metaanalyser definerede indsatsen som et værktøjsnavn, kun 21 % af de granskede sammenligninger havde en defineret indsats, en kontrol og et gyldigt mål, og det samlede g = 0,7 lå over specialbygget intelligent tutoring på 0,66. En effektstørrelse tilhører et design, en population og en målelejlighed.

**»Det samlede gennemsnit er, hvad der vil ske med mine studerende.«** Gennemsnittet beskriver sættet af studier, og intet i det fastlægger noget enkelt klasselokale. Det biasjusterede gennemsnit er SMD = 0,196, og dets prædiktionsinterval løber fra -1,521 til +1,908. Rapporteret heterogenitet ligger over 80 % i 12 af 13 metaanalyser, og ingen undergruppe i den større pulje viste konsistente gevinster. En ændring på studerendeniveau kan ikke identificeres ud fra noget af tallene.

**»Et nulresultat betyder, at værktøjet ikke virker.«** Et nul er en udtalelse om et design ved en given præcision, og fraværet af en påviselig effekt i ét studie er et faktum om det studie. Den biasjusterede SMD = 0,196 kom fra en litteratur, hvor hver Egger-test var signifikant, så den forsvarlige læsning af korpusset er et lille og usikkert gennemsnit. Intet udfald, fag, niveau eller AI-rolle-undergruppe i den større pulje viste heller konsistente gevinster. Det dokumenterede problem i denne litteratur er undertrykkelse.

**»Ét studie afgør sagen.«** Basisfrekvenserne taler imod. 61 % af de granskede primærstudier havde gyldighedsproblemer, ét kursus eller én institution giver ikke licens til en generel påstand, og et proprietært system er et bevægeligt mål bundet til en modelversion. Et enkelt studie er et datapunkt med et design vedhæftet.

**»Høj enighed med menneskelige kodere betyder, at modellen scorer det rigtige.«** Menneske-LLM-enighed var 0,30 mod 0,52 for menneske-menneske, og den blinde verifikator kunne ikke skelne de to kodesæt (51,5 % mod 48,5 %). Enighed måler konsistens med en koder, og kvalitet er et separat spørgsmål, der kræver en guldstandard og en skønsmand.

## De indvendinger, du vil høre

**»Bedømmere vil have nyhed, ikke metodedetaljer.«** Tidsskrifter bevæger sig den anden vej. RAISE og TEP-AIED giver redaktører et konstrukt at kræve, og TEP-AIED's metodeunderafsnit er et indgangspunkt med lav friktion. Metodedetaljer er det, der forvandler en ikke-vurderbar artikel til en citerbar.

**»Vi har ikke pladsen.«** De fem oplysningsniveauer er rapporteringsniveauer snarere end risikoniveauer, så evalueringsdybden kan være en sætning eller to. Version, prompter og rolle passer i et kort afsnit. Omkostninger og styring passer i en begrænsningssætning.

**»Alle rapporterer det på denne måde.«** Tallene siger, at normen er problemet: 61 % af de granskede primærstudier med gyldighedsproblemer, 12 af 13 metaanalyser over 80 % heterogenitet, 38,0 % af software- og produktartikler uden evaluering.

**»Vores værktøj er proprietært, så vi kan ikke rapportere modellen.«** Rapportér version, adgangsdato, konfiguration, de prompter du gav, rolle og guardrails. Hvis leverandøren ikke vil sige det, hører den begrænsning i begrænsningerne som en grænse for påstanden.

**»At rapportere nuller vil skade os.«** Undertrykte nuller er den dokumenterede mekanisme bag det biasjusterede gennemsnit på SMD = 0,196. At publicere dem er det, der holder dit positive resultat læsbart.

## Det, du kan gøre i denne uge

**1.** Læs dit abstrakt op mod dit metodeafsnit, og slet hver påstand, metoden ikke kan understøtte. Én sætning om målets loft er som regel nok.

**2.** Tilføj specifikationsafsnittet: model, version, adgangsdato, konfiguration, prompter, rolle og hvem der designede eller gennemgik outputtet.

**3.** Træk τ², prædiktionsintervallet og vurderingen af publikationsbias ud af bilaget og ind i resultaterne, eller sig klart, at du ikke beregnede dem.

**4.** Skriv populationsgrænsen og kontrolbetingelsen ind i designbeskrivelsen, inklusive hvor meget tid hver arm brugte.

**5.** Verificér hver reference, du ikke selv har læst, og tjek forfatterfeltet først.

## Hvor du kan gå videre

[[research-methods-aied|Forskningsmetoder i AI i uddannelse]] dækker de designvalg, der ligger under disse rapporteringsbeslutninger, og [[limitations-in-aied-research|Begrænsninger i AIEd-forskning]] er kataloget over fejlmønstre med tallene vedhæftet. [[interpreting-and-applying-aied-research|Fortolkning og anvendelse af AIEd-forskning]] er læserens side af samme problem, [[does-ai-help-students-learn|evidensen om varig læring]] er det, de fleste af disse mål forsøger at nå, [[evaluating-ai-interventions-methods]] dækker målene og sammenligningsdesignene, og [[checking-whether-educational-ai-works]] er den kortere version af spørgsmålet. For de huller, denne litteratur ikke har fyldt, se [[research-gaps-aied]].
