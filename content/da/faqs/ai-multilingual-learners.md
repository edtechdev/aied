---
title: "Hvordan kan AI støtte flersprogede lærende uden at fejlvurdere deres viden eller slette deres stemme?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-disabled-neurodivergent-learners, writing-instruction-ai-best-practices, redesign-assessment-ai-era, verify-ai-output]
weight: 72
foundations: [ai-literacy, theories-and-frameworks]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, feedback, ai-feedback-quality, evaluative-judgment]
methods: [meta-analysis-systematic-review, quantitative-research]
research_method: [literature review, experiment]
audience: [instructors, instructional designers, assessment designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:30:00-04:00"
translation_of: faqs/ai-multilingual-learners
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

En studerende forstår begrebet og har brug for fire minutter ekstra for at sige det på engelsk. AI'en kan oversætte opgaveformuleringen, definere terminologien, indøve forklaringen sammen med dem eller skrive hele svaret. Tre af disse er undervisning. Én er at lave opgaven for dem.

Det korte svar til en kollega: afgør, hvad sproget gør i denne opgave, før du afgør, hvad værktøjet må gøre. Hvor sproget er perifert, kan AI fjerne en barriere, der intet har med dit konstrukt at gøre. Hvor sproget er konstruktet, omgår det samme værktøj læringen. Risikoen løber begge veje på én gang: [[multilingual-learning|sprogstøtte]] kan forbedre adgangen, og automatiseret scoring kan stadig fejllæse den studerende. I ét fysikstudie blev forklaringer af lavere sproglig kvalitet systematisk bedømt under ekspertvurderingen af hver eneste testede AI-scoringsmetode, ni maskinlærings- og to sprogmodelsystemer blandt 116 gymnasieelever ([[ai-scoring-language-bias-physics|Feser og Tschisgale, 2026]]). Flydende sprog og forståelse blev scoret som én ting.

## Den korte version

**1.** Angiv sprogets rolle i opgaven: perifer, central eller ét kriterium blandt flere.

**2.** Skriv tilladt støtte ind i instruktionerne og kriterierne, og sig, hvad de studerende stadig selv skal gøre.

**3.** Giv målrettet hjælp før hele omskrivninger. Bed værktøjet identificere uklar betydning og tilbyde valgmuligheder.

**4.** Kræv, at den studerende sammenligner den foreslåede formulering med sin egen betydning og med kursuskilderne.

**5.** Bedøm begrebsmæssig ræsonneren og sprog hver for sig, når begge er tilsigtede læringsmål.

**6.** Gør aldrig et utestet værktøj til den eneste vej til støtte.

## Afgør, hvad sproget gør

I en biologiforklaring er grammatik mest perifer i forhold til det begreb, der bedømmes. I et sprogkursus er det at producere og revidere bestemte strukturer selve læringen. I professionel kommunikation tæller faglig præcision, modtager og register alt sammen. Det samme oversættelsesværktøj er passende i det første tilfælde, tvivlsomt i det andet og til forhandling i det tredje.

Skriv beslutningen ned, hvor de studerende kan læse den. Hvis studerende må oversætte instruktioner, men skal producere en forklaring på målsproget uden hjælp, så sig det eksplicit. Hvis terminologistøtte er tilladt, specificér, hvad den studerende stadig skal forklare og verificere. Tjek derefter arrangementet mod krav om tilpasning og institutionel politik i stedet for at behandle enhver form for sproglig assistance som udskiftelig. En studerende med en dokumenteret tilpasning og en studerende, der undgår øvelse, kan anmode om det samme, og kun den anden er dit undervisningsproblem.

## Hvad forskningen understøtter, og hvad den ikke gør

[[genai-chatbots-language-learning-affordances-review-2026|Lopez og Arabadzhy (2026)]] gennemgik 24 empiriske studier af generative chatbots i sprogindlæring. Deres bidrag er taksonomisk: hver undermulighed, der er katalogiseret for prægenerative chatbots, består, og tre er nye, heriblandt **translanguaging**, den bevidste bevægelse mellem sprog som del af læringen. Det er et kort over rapporterede anvendelser og oplevelser frem for et samlet estimat, og korpusset er geografisk koncentreret, med Kina, Iran, Taiwan og Türkiye som ophav til 19 af de 24 studier og alle på nær ét inde i formelle institutioner. Støtte til at bruge forklaring på tværs af sprog som læringstræk er ikke støtte til at oversætte enhver opgave.

Bedømmelse er der, hvor evidensen bliver skarpere, og indsatsen stiger. [[ai-scoring-language-bias-physics|Feser og Tschisgale (2026)]] sammenlignede elleve automatiserede scoringsmetoder med menneskelige ekspertscorer for 116 gymnasieelevers fysikforklaringer og fandt systematisk undervurdering af begrebsmæssig forståelse for sprogligt svagere forklaringer, i hver eneste metode. Designet isolerer mekanismen: det samme begrebsmæssige indhold, udtrykt i svagere prosa, blev scoret lavere. Det er ikke en påstand om noget bestemt lands flersprogede studerende, og det er præcis det mønster, der gør overordnet scoringsenighed til et dårligt diagnosticeringsværktøj. En scorer kan være enig med menneskelige bedømmere i gennemsnit og samtidig tage fejl i en konsistent retning for de studerende, hvis sprog stadig er under udvikling.

[[multilingual-learning|Syntesen om flersproget læring]] beskriver skrive-screeningsforskning, der viser flersprogede prædiktionsbiasmønstre, som ligner menneskelige bedømmelsesbiaser. Læs de tre fund sammen, og den operationelle lære er snæver: hverken »AI fjerner menneskelig bias« eller »AI tilføjer sproglig bias« er en brugbar regel. Det, du har brug for, er et tjek af opgaven, populationen og sproget på det punkt, hvor en score bliver til en karakter.

## Giv værktøjet en specifik støtterolle

Begynd med instruktionerne: lad værktøjet oversætte eller gengive dem i et enkelt sprog, tjek outputtet mod originalen, og lad den studerende selv finde ud af, hvad opgaven kræver, og spørge om enhver reel tvetydighed.

Fagligt ordforråd fungerer anderledes. Indstil værktøjet til at sammenligne betydninger på tværs af sprog og generere kontekstuelle eksempler, og lad så den studerende forklare begrebet og identificere de vildledende ækvivalenter.

Taleøvelse kræver en afgrænset indøvning med gentagelser, hvor den studerende producerer svaret og demonstrerer den tilsigtede færdighed.

Når du reviderer skriftligt arbejde, bed om nogle få navngivne problemer med mulige rettelser, og behold beslutningen og dens begrundelse hos den studerende.

At læse kursusindhold er det bredeste tilfælde. En tosproget forklaring forankret i godkendte materialer hjælper, forudsat at den studerende tjekker hovedpåstandene og demonstrerer forståelse.

Dette er anvendelser, der skal piloteres, ikke validerede interventioner. Et værktøj, der klarer sig godt på ét sprog eller i én genre, er ikke dermed pålideligt på et andet, og gennemgangens geografiske koncentration betyder, at dit sprogpar måske knap nok er repræsenteret i evidensen.

## Beskyt den studerendes betydning og stemme

Bed om målrettet hjælp, før du beder om en omskrivning, for en hel omskrivning er der, hvor den studerendes tænkning forlader siden. En anmodning, der er værd at undervise i: »Identificér to steder, hvor min betydning er uklar. Forklar problemet og tilbyd valgmuligheder. Behold mine eksempler, og tilføj ikke nye påstande.« Så vælger den studerende.

En sekvens, der beholder arbejdet hos den studerende:

1. Udvikl forklaringen på det sprog eller den sprogblanding, der lader den studerende tænke, hvor opgaven tillader det.
2. Brug godkendt støtte til at undersøge terminologi eller formulering.
3. Sammenlign den foreslåede formulering med den tilsigtede betydning og kursuskilderne.
4. Producer den krævede forklaring, og notér de konsekvensrige revisioner.

I en sociologiopgave kan en studerende tænke sig igennem en konflikt om familieroller tosproget, tjekke en kort liste af kursustermer og derefter skrive den afleverede analyse på det krævede sprog, hvor underviseren bedømmer den sociologiske ræsonneren og eventuelle særskilt angivne sprogkriterier. I en sprogindlæringsopgave ville den samme sekvens give bedømmelsen væk og skulle bevare uafhængig produktion på målsproget.

Undgå at gøre »lyder som en modersmålstalende« til standarden, for det måler den studerendes forhold til en dialekt frem for deres greb om dit fag. Specificér i stedet klarhed, præcision, genre eller modtager. En poleret omskrivning kan flytte standpunktet, fjerne et kulturelt betydningsfuldt udtryk eller tilføje en påstand, den studerende aldrig havde til hensigt, og den studerende skriver under på det.

## Tjek værktøjet og bedømmelsen

Gennemgå betydning, ikke flydende sprog. Udtag stikprøver af oversættelser og forklaringer for fagtermer, udeladelser, opdigtede detaljer, kulturelle antagelser og de sprogvarianter, dine studerende faktisk bruger. Inddrag kvalificerede sprogkolleger eller støttepersonale; gør ikke de studerende til den eneste revisor af et værktøj, du kræver, at de bruger.

Adskil kriterierne. Når både ræsonneren og sprog er tilsigtede læringsmål, bedøm dem hver for sig, og tjek, om en AI-assisteret bedømmer straffer sproget dobbelt eller overser korrekt ræsonneren udtrykt ukonventionelt. Det er den praktiske form for [[assessment-validity|validitet]] for en flersproget kohorte og undergruppespørgsmålet i [[differential-effects-across-learner-groups|differentielle effekter]].

Behold en vej til afklaring. En kort samtale, et annoteret diagram eller en forklaring af én central beslutning kan vise, hvad en studerende forstår, når prosaen ikke kan bære det. Vælg det format, der passer til konstruktet, frem for det, der er lettest at bedømme.

Tilbyd brugbare alternativer. De studerende har brug for en klar vej til menneskelig sprogstøtte og tilgængelige kursusressourcer. At kræve et utestet værktøj kan tilføje en barriere med hensigten om inklusion, hvilket er den samme fejl, som [[ai-disabled-neurodivergent-learners|støtte til studerende med handicap og neurodivergens]] skal undgå.

## Hvad der vil komme tilbage til dig

**»Oversættelse betyder, at den studerende undgår arbejdet.«** Det afhænger af, hvad arbejdet er. Oversættelse kan muliggøre engagement i fagligt indhold, den intet har med at gøre, og den kan erstatte øvelse, når uafhængig produktion på målsproget er læringsmålet. Afgør, hvilket af dem du bedømmer, og sig det.

**»AI'en rettede sproget uden at ændre noget andet.«** Tjek det. En omskrivning, der forbedrer grammatikken, ændrer ofte vægtningen, forbeholder en påstand eller opdigter belæg. Bed den studerende navngive én betydningsfuld ændring og sige, om den bevarer deres tilsigtede pointe, hvilket også fortæller dig, om de læste forslaget.

**»Menneskelige bedømmere er mere retfærdige.«** Menneskelig scoring bærer sin egen sprogrelaterede bias, og den flersprogede skrive-screeningsforskning finder automatiserede systemer, der reproducerer mønstre af den. Retfærdighed her kommer fra eksplicitte kriterier, stikprøvebaseret undergruppeevidens og en reel chance for at genoverveje en vurdering, ikke fra hvem eller hvad der holder pennen.

**»Vores studerende er fine på engelsk, så det gælder ikke her.«** Det afgørende fund er ikke en påstand om mangler hos nogen gruppe. Det er, at begrebsmæssig forståelse udtrykt i svagere prosa systematisk scores for lavt, i hver eneste testede metode. Det gælder for hurtigt skrivende, for andetsprogsskrivende og for alle, hvis register afviger fra eksaminators.

## Hvad du kan gøre i denne uge

**1.** Tag én opgave og skriv en sætning, der angiver, hvad sproget gør i den.

**2.** Omskriv instruktionerne, så de siger, hvilken støtte der er tilladt, og hvad de studerende skal producere selvstændigt.

**3.** Test en oversættelse og en terminologiforklaring på de sprog, dine studerende faktisk bruger, og læs outputtet for opdigtede detaljer og tabt betydning.

**4.** Tilføj ét tjek, der registrerer den studerendes egen betydning eller beslutning, fx en note på to sætninger om en ændring, de accepterede eller afviste.

**5.** Hvis din rubrik scorer skrivekvalitet, adskil det kriterium fra det begrebsmæssige, og læs to besvarelser af hver igen med opdelingen i mente.

## Hvor du kan gå videre hen

[[multilingual-learning|Flersproget læring]] er begrebssiden for sprog, translanguaging og bedømmelse i AI-medieret undervisning, og [[assessment-validity|bedømmelsesvaliditet]] er standarden for, om en score understøtter den slutning, du drager. [[differential-effects-across-learner-groups|Differentielle effekter på tværs af lærergrupper]] dækker, hvordan man leder efter undergruppemønstre i stedet for at antage dem.

For skriveundervisningstilfældet, hvor sproget er konstruktet, se [[writing-instruction-ai-best-practices|bedste praksis for skriveundervisning i en AI-kontekst]]. For om automatiseret scoring overhovedet kan betros i din sammenhæng, se [[ai-grading-fairness-reliability|AI-bedømmelse]] og [[checking-whether-educational-ai-works|at tjekke, om en pædagogisk AI virker]].
