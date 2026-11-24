---
title: "Hvordan kan AI hjælpe eller skade samarbejdslæring i mit kursus?"
created: "2026-11-24T08:05:00-05:00"
updated: "2026-11-24T12:01:45-05:00"
type: faq
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
weight: 80
foundations: [human-ai-collaboration]
pedagogy: [collaborative-learning, problem-based-learning, project-based-learning, metacognition, self-regulated-learning, scaffolding, sociocultural-learning]
technology: [generative-ai, conversational-ai, llm, pedagogical-agent]
assessment: [group-work, peer-assessment, process-oriented-assessment]
methods: [meta-analysis-systematic-review, qualitative-research, mixed-methods-research]
audience: [instructors, instructional designers]
level: [higher ed, k 12]
confidence: medium
contributors: [editor]
translation_of: faqs/ai-help-hurt-collaborative-learning
source_updated: "2026-11-24T08:05:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

To studerende afleverer en grupperapport, som ingen af dem kan forklare. En tredje gruppe producerer en flad konsensus, som ingen har diskuteret, fordi det hurtigste plausible svar kom først, og værktøjet gjorde det nemt at stoppe søgningen. En fjerde udfører hele sin forhandling i ét delt chatvindue, og du kan ikke sige, om de tænkte sammen eller satte prompts i kø.

Det ærlige svar er, at evidensen understøtter fordelene ved AI i samarbejdslæring og efterlader de fleste risici som konceptuelle. Det, der er godt underbygget, er, at AI kan fremskynde koordination, levere idéer, give feedback og sænke barrieren for at deltage i en diskussion. Det, der er meget mindre etableret, er, at den beskytter den interaktion, som disse gevinster afhænger af, og det stærkeste designsignal i litteraturen er, at effektivisering og interaktionstab kan være den samme mekanisme ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei og Perkins, 2026]]). Det brugbare spørgsmål er således ikke, om AI skal tillades, men hvor i gruppens arbejde den tænker, og hvor den kun flytter tekst rundt.

## Den korte version

**1.** Sæt værktøjet ind, hvor gruppens fælles regulering foregår, ikke hvor enkelte afsnit skrives.

**2.** Gør prompten til et gruppeartefakt. Et delt dokument eller en delt grænseflade giver dig noget at læse og gruppen noget at strides om; privat prompting giver hvert medlem en anden assistent og ingen fælles registrering.

**3.** Tildel AI en eksplicit rolle, der understøtter uenighed frem for enighed, såsom det modargument, der forhindrer en hurtig konsensus i at lukke sig.

**4.** Beskyt én fase, hvor hele teamet skal tale, og sørg for, at den fase producerer noget, du indsamler.

**5.** Kræv i online og asynkront arbejde beslutningssporet: prompts, redigeringer og hvem, der bidrog med dem, fordi det er den eneste version af proces, du nogensinde vil se.

**6.** Hold én komponent fri, som hvert medlem besvarer alene, så en gruppekarakter forbliver en approximation af forståelse snarere end af den, der skrev bedst.

## Hvor hjælpen er reel

[[gao-adaptive-support-collaborative-learning-meta-2026|Gao et al. (2026)]] samlede 83 eksperimentelle og kvasi-eksperimentelle studier af adaptiv støtte i [[collaborative-learning|samarbejdslæring]], rapporteret i 80 artikler mellem 2004 og 2023, og fandt en middel positiv effekt. Gevinsterne var ujævnt fordelt på en måde, der passer til, hvad undervisere faktisk vil have: store for individuel viden, middel for gruppeprodukter og gruppeprocesser, små for affekt og fraværende for oplevet kognitiv belastning. De betingelser, der adskilte stærke fra svage interventioner, var konsistente: kognitive udløsere som forudgående viden og fejlmønstre virkede bedre end sociale eller affektive, at rette ind mod gruppens fælles aktivitet virkede bedre end at rette ind mod enkeltpersoner, system- eller lærerkontrol slog elev- og fælles kontrol, og korte episoder slog både enkeltsessioner og implementeringer på en måned eller mere.

Læs det som en designbrief snarere end en dom. Støtte rettet mod, hvad gruppen laver sammen, udløst af, hvad dens medlemmer ved, ankommer kortvarigt og trækker sig så tilbage, er den profil, der gav effekter. Støtte, der overvåger følelser eller kører hele semestret, er den profil, der ikke gjorde.

Tre mekanismer dukker gentagne gange op. Idégenerering og alternative løsninger er den oftest rapporterede fordel, og [[llm-critical-thinking-teamwork-review|Martínez-Peláez et al. (2025)]] tilføjer en nyttig omvending: store sprogmodeller returnerer ofte ufuldstændigt eller forkert materiale, hvilket tvinger studerende til at spørge, verificere og forbedre det i stedet for at acceptere det. Lavere deltagelsesbarrierer betyder noget for stille medlemmer. Og [[genai-counter-learner-groupthink-2025|Wiss et al. (2025)]] viser en rolle, der ikke har noget med at skrive at gøre: deres CALIE-agent deltog i tolv tværfaglige teams i en virtuel session med [[problem-based-learning|problembaseret læring]] og blev bedt om at injicere kontroversielle synspunkter og modvirke gruppetænkning. Blandt 158 spørgeskemarespondenter fra syv kandidatprogrammer inden for sundhedsområdet rapporterede studerende, at agenten forbedrede gruppedynamikken, stimulerede kritisk tænkning og engagement og begrænsede gruppetænkningens potentiale.

## Hvor skaden er, og hvor solid den er

Skadesiden er som evidens tyndere og som risiko tykkere, og det er værd at adskille dem.

Interaktionstab er den bekymring med bedst støtte. AI-formidlet kommunikation komprimerer forhandling og kollektiv meningsskabelse: gruppen når et sammenhængende resultat, mens den bruger mindre af den samtale, der producerer et. Effektivisering og interaktionstab kan være den samme mekanisme, så du får sjældent hastigheden uden tabet, medmindre du bygger forhandlingen ind igen som påkrævet arbejde ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei og Perkins, 2026]]).

Uigennemsigtighed er den anden, og den er værre online. [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] observerede og interviewede 27 videregående studerende gennem linsen i distribueret kognition, og kontrasten løber langs synkronitetslinjen. I synkrone grupper, der arbejdede i én delt generativ AI-grænseflade, opretholdt teams fælles bevidsthed, konstruerede prompts sammen, behandlede chatten som fælles eksternt hukommelse og forhandlede åbent om værktøjets rolle. I asynkront teamarbejde brugte studerende værktøjet individuelt og omskrev eller afmærkede output, før de delte dem, så AI's indflydelse på beslutninger blev uigennemsigtig og svær at spore. Samme studerende, samme værktøj, anden synlighed.

Den tredje er homogenisering og udlicitering. Det randomiserede bevis, Wei og Perkins støtter sig på, viste, at AI producerede mere innovative forslag uden signifikant at øge deltagernes samlede innovativitet, samtidig med at det homogeniserede idéer og inviterede til [[cognitive-offloading|kognitiv udlicitering]]. En gruppe kan konvergere hurtigere mod et smallere sæt svar, hvilket ser ud som god koordinering.

Endelig er der moderationsfælden. En agent, der bedes om at regulere gruppen, kan starte processen og stadig mislykkes i at fuldende den. [[roberts-triggers-regulation-agent-supported-collaborative-learning-2026|Roberts et al. (2026)]] gennemførte en Wizard-of-Oz-studie, hvor en metakognitiv agent gav 14 grupper af lærerstuderende prompts under en 60 minutters undersøgelsesopgave. Grupper indledte en del regulering efter 55% af prompts, men en fælles strategisk ændring fulgte kun i 9 ud af 58 tilfælde, med 7% delvist. Prompts om at mangle et fælles perspektiv var mindst accepterede og vakte åben forsvarsning. [[chen-genai-team-moderator-cscl-shared-regulation-2026|Chen et al., 2026]] testede en lignende idé mere positivt: over 16 uger med 64 bachelorstuderende hævede en adaptiv agent for [[self-regulated-learning|socialt delt regulering]] ligheden i deltagelsen i forhold til statiske ark, men ikke samtalens intensitet. Begge peger den samme vej, og det er en snæver påstand: en agent kan omfordele, hvem der taler, og prompting alene ændrer sjældent, hvad gruppen beslutter sig for at gøre.

## Design gruppens brug af AI i stedet for at tillade eller forbyde den

Start fra fasen, ikke kurset. Navngiv de faser, der er AI-åbne, og de faser, der skal udformes uden AI, og sig hvorfor i én sætning for hver. Gao et al.s mønster antyder, at de AI-åbne faser er dem, der producerer alternativer og giver feedback, og de beskyttede faser dem, hvor gruppen beslutter, hvad den mener.

Gør så forhandlingen synlig. [[kaya-ssrl-sdt-chatgpt-mathematical-modeling-2026|Kaya og Yildiz Durak (2026)]] klassificerede 18 ChatGPT-4o-formidlede matematiske modelaktiviteter op mod de fire træk ved [[sociocultural-learning|socialt delt regulering]] og de kollektive behov i [[self-determination-theory|selvbestemmelsesteorien]] og rapporterede, at værktøjet betjente kompetence og autonomi godt, men kom til kort i tilhørigheden. Det er et konkret argument for at kræve, at gruppen taler om værktøjet i stedet for kun at bruge det, for det behov, der mest sandsynligt forbliver udækket, er det, ingen navngiver.

Tildel værktøjet en rolle med en stillingsbeskrivelse. Kladdeassistent, djævlens advokat, opsummering af gruppens egen tekst eller forklaring af et medlems kladde producerer alle forskellig adfærd. Wiss et al.s modpart er det tydeligste eksempel på en rolle, der er valgt for at gøre enigheden sværere i stedet for lettere.

For [[project-based-learning|projektbaseret]] og [[problem-based-learning|problembaseret]] arbejde kan du billede værktøjet ind på de faser, der bærer reguleringen. [[ai-project-hybrid-learning-self-regulated-2026|Priyambudi et al. (2026)]] byggede en projektbaseret hybridmodel, der billeder forudseelse, udførelse og selvreflektion ind på projektsyntaks, hvor AI optræder som metakognitiv scaffolding og en kognitiv samtalepartner i stedet for en indholdskilde. Deres udgangspunkt var lærerigt: blandt 65 studerende i engelsk litteratur lå selvreguleret læring i gennemsnit på 2.21 på en 4-point-skala, kun 24.4% satte læringsmål, og 17.8% evaluerede sig selv. Værktøjet rettede sig mod de faser, som studerende allerede sprang over, og det er den del, der generaliseres.

## Online og asynkront gruppearbejde

Det asynkrone tilfælde behøver sit eget design, fordi den synlige delte grænseflade er præcis det, der forsvinder. Xu et al. fandt, at studerende, der arbejdede asynkront, brugte AI individuelt og sanerede output, før de delte det, så gruppens egentlige ræsonnement aldrig nåede det delte rum.

Praktiske svar:

- Kræv promptloggen som en leverance, i en delt fil med tidsstempler, så gruppens AI-brug bliver læselig i stedet for at blive gættet.
- Giv hvert medlem en roterende rolle på den delte tråd, såsom spørgsmålstiller, skeptiker eller opsummerer, så én person ikke er gruppens eneste mellemmand med værktøjet.
- Afhold et synkront kontrolpunkt, selv et kort, hvor gruppen afstemmer, hvad værktøjet har produceret parallelt. Afstemningen er den interaktion, som det asynkrone format fjerner.
- Brug små, afgrænsede opgaver tidligt, i tråd med Gao et al.s fund om, at korte adaptive episoder overgik både enkeltsessioner og semestrale implementeringer.

Advarslen er, at intet af dette er blevet testet som en pakke. Xu et al. er en kvalitativ studie med 27 studerende, og designanbefalingerne er slutninger fra det, de asynkrone grupper ikke kunne se.

## Hvad undervisere gør galt her

En tilladende kursuspolitik afgør, hvad grupper gør. Samme institutionelle politik produceede modstridende gruppslutninger afhængigt af opgaven og gruppens risikovurdering, så beslutningen lever i opgaven, om underviseren vil have den der eller ej.

Mere AI betyder bedre samarbejde. Evidensen understøtter fordele og efterlader risicosiden stort set konceptuel, men de konkrete skader ovenfor er nok til at retfærdiggøre at beskytte interaktion frem for at maksimere brugen.

At bede gruppen om at regulere løser det. Roberts et al. målte en stor afstand mellem accepterede prompts og ændrede strategier. Promptning starter overvågning; den fuldender ikke arbejdet.

En delt mappe betyder en delt proces. De registreringer, der overlever, er dem, gruppen valgte at lægge der. Bed om beslutningsartefakten, ikke arkivet.

En agent holder gruppen på sporet. Chen et al. fandt omfordeling af deltagelse, ikke mere af det, og Roberts et al. fandt, at prompts om fælles perspektiv vakte modstand. Positionering betyder mere end tilstedeværelse.

## De indvendinger, du kommer til at høre

**"Gruppearbejde er allerede uretfærdigt, og AI gør det værre."** Retfærdighedsproblemet er ældre end værktøjet, og AI gør en del af det billigere: ét medlem kan nu producere et plausibelt afsnit alene. Individuelle kontrolpunkter og en synlig proces har en designbegrundelse, og ingen af dem er blevet vist at reducere free-riding.

**"Jeg kan ikke bedømme proces ved denne tilmeldingsstørrelse."** Du behøver ikke bedømme alt. Bedøm artefaktet, der kun eksisterer, hvis processen fandt sted: promptloggen, forhandlingserklæringen, den korte individuelle forklaring. Alle tre er afgrænsede.

**"Studerende vil prompte privat, lige meget hvad jeg foreskriver."** Nogle vil. Design for den synlige sag, og behandl den private sag som ukendt i stedet for som misbrug, der venter på at blive opdaget.

**"Er det ikke et spørgsmål om institutpolitik?"** Institutet sætter standarden. Det kan ikke sekventiere din opgave, vælge faserne eller beslutte, hvor promptsne skal ligge.

## Hvad du kan gøre i denne uge

**1.** Vælg en kommende gruppeopgave og markér to faser som AI-frie, med en begrundelse på én sætning til hver.

**2.** Beslut, hvor promptsne skal ligge, og skriv det ind i briefingen som et krav i stedet for en præference.

**3.** Tilføj et modargumentstrin: fem minutter, hvor et medlem argumenterer imod gruppens nuværende ledende svar, med eller uden AI.

**4.** Tilføj promptloggen til afleveringstjeklisten for alt online eller asynkront gruppearbejde.

**5.** Tilføj et individuelt kontrolpunkt til rubrikken, bedømt ud fra forståelse af et afsnit, som den studerende ikke har udarbejdet.

## Hvor du skal hen som det næste

[[group-work-ai]] dækker håndtering af AI i gruppe- og samarbejdsopgaver, herunder sekventering og bedømmelse. [[collaborative-learning|Samarbejdslæring]] bærer den underliggende forskning i, hvad der gør gruppearbejde produktivt, og [[metacognition|metakognition]] og [[self-regulated-learning|selvreguleret læring]] dækker de individuelle kapaciteter, som gruppeprocessen bygger på. [[online-teaching-and-learning|Online undervisning og læring]] dækker fjernkonteksten, [[pedagogical-patterns|pædagogiske mønstre]] dækker de tilbagevendende designs, disse opgaver bruger, og [[asynchronous-online-courses-ai|asynkrone onlinekurser]] dækker det format, hvor AI-brug bliver usynlig hurtigst.
