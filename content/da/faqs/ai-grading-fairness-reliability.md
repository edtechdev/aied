---
title: "Kan jeg bruge AI til at bedømme studerendes arbejde retfærdigt og pålideligt?"
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Du har en rubrik, du tror på, flere besvarelser end timer, og et værktøj, der returnerer en score plus flere selvsikre afsnit på den tid, det tager at læse ét essay. Du prøver det på arbejde, du allerede har bedømt. Halvdelen af scorerne ser rigtige ud. Én er mærkeligt gavmild, én mærkeligt hård, og du kan endnu ikke afgøre, om det er værktøjet eller essayet.

Det korte svar til en kollega: AI-bedømmelse gør sig fortjent til en plads som superviseret assistent eller som anden læser, på opgaver hvor du har tjekket den mod arbejde, du allerede har bedømt. Overensstemmelse overføres ikke mellem bedømmelsestyper. I en farmacieksamen med seksten studerende fandt [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] næsten perfekt overensstemmelse på objektive opgavetyper og upålidelig overensstemmelse på åbne besvarelser. På tværs af tre engelske universiteter fandt [[opraise-automated-marking-ai-assessment-2026|OpRaise-projektet]], at AI og menneskelige bedømmere var enige om karakterbåndet i mellem 35 % og 65 % af tilfældene alt efter institution, med karakterer komprimeret mod midten. En flydende begrundelse er ikke evidens for, at dine kriterier blev anvendt. Om resultatet er [[assessment-validity|gyldigt for din beslutning]], er et lokalt spørgsmål, du selv må besvare, og [[human-in-the-loop-ai|et menneske er ansvarligt]] for alt, hvad der bliver en registreret karakter.

## Den korte version

**1.** Navngiv rollen, før du kører noget: feedbackassistent, anden læser eller primær bedømmer. De kræver forskellige mængder evidens.

**2.** Begynd med den rolle med færrest konsekvenser, som løser dit egentlige problem. Hvis en deterministisk facitliste kan klare arbejdet, tilføjer en LLM risiko frem for værdi.

**3.** Kalibrér på arbejde, du allerede har bedømt, inklusive stærke, svage, grænsetilfælde og usædvanligt strukturerede besvarelser. Bekvemme eksempler beviser intet.

**4.** Hold kalibreringssættet og testsættet adskilt, ellers måler du, hvor godt du tilpassede værktøjet til kendte essays.

**5.** Rapportér eksakt overensstemmelse, scoreforskelle og biasretning, ikke en korrelation. Tjek grænserne for bestået/ikke bestået særskilt.

**6.** Fortæl de studerende, hvilken rolle værktøjet spiller, hvem der beslutter karakteren, og hvordan man anmoder om genvurdering.

## Beslut, hvad AI'en må gøre

Tre arrangementer bliver kaldt »AI-bedømmelse«, og de har forskellige forpligtelser.

En **feedbackassistent** skriver udkast til kommentarer eller markerer mulige udeladelser, som du kan acceptere, omskrive eller kassere. Risikoen er begrænset til kommentarernes kvalitet, og du læser alt, før det når en studerende. En **anden læser** foreslår kriteriescorer eller markerer uenigheder for at strukturere din egen bedømmelse. Dens fejl skal være nyttige og ikke blot forkerte: en markering, der sender dig tilbage til en besvarelse, du ellers ville have bedømt skødesløst, er værd at have. En **primær bedømmer** producerer scorer, der bliver registrerede karakterer. Det er det arrangement, som evidensen i denne vidensbase ikke understøtter ud over snævre, lokalt validerede tilfælde.

Vælg det laveste trin, der adresserer din faktiske begrænsning. Hvis din bedømmelsesbyrde kommer fra at tjekke en fast facitliste, er almindelig deterministisk scoring mere gennemsigtig og reviderbar end en sprogmodel, og farmacistudiet tyder på, at LLM'ens fordel på objektive opgaver delvist var en artefakt af at få de korrekte svar udleveret under bedømmelsen. Gem modellen til arbejde, der kræver fortolkning, og tjek så den fortolkning.

[[automated-assessment|Automatiseret bedømmelse]] dækker det bredere maskineri af scoring, moderation og feedbackgenerering. Denne side handler om det dømmekraftsspørgsmål, der ligger under.

## Hvad evidensen faktisk viser

Overensstemmelsen afhænger af opgavetypen. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] bedømte en farmacieksamen i blandet format besvaret af 16 studerende og rapporterede samstemmighed med fakultetets bedømmelse mellem 0,935 og 1,000 for multiple-choice-, select-all-that-apply- og fill-in-the-blank-opgaver. Overensstemmelsen på subjektive åbne besvarelser var upålidelig. To detaljer betyder mere end overskriften. De korrekte svar blev udleveret under bedømmelsen, hvilket smigrer resultaterne for objektive opgaver, og tilføjelsen af en rubrik forbedrede ikke overensstemmelsen konsistent, hvilket undergraver den almindelige antagelse, at en god rubrik forvandler en LLM til en konsistent bedømmer. Seksten studerende kan ikke bære en påstand om dit kursus. Variationen inden for én eksamen er det overførbare fund: et system, der klarer din multiple-choice-del, siger intet om dine essays.

Båndoverensstemmelsen er moderat og ujævn. [[opraise-automated-marking-ai-assessment-2026|OpRaise-rapporten]] undersøgte autentiske bachelor-essays i psykologi og fandt overensstemmelse mellem AI og menneskelige bedømmere om det britiske karakterbånd på 63 % ved Cambridge, 53 % ved Nottingham og 35 % ved Manchester Metropolitan. Karaktererne blev komprimeret mod midten, med halerne bedømt mindst præcist: et essay, som et menneske bedømte til 75, blev scoret flere point lavere af hvert eneste AI-system, og et essay bedømt til 50 blev scoret flere point højere. Den komprimering er den svigt, man skal holde øje med, fordi den rammer præcis de studerende i top og bund af din fordeling, mens midten ser fin ud. Det er en projektrapport og ikke et peer-reviewet forsøg, og det er den mest nyttige advarsel i evidensgrundlaget.

Dine egne karakterer er en ufuldkommen reference. Undervisere er uenige med hinanden, og din tidligere score på et lignende essay er en vurdering, ikke en grundsandhed. Overensstemmelse med én bedømmer etablerer konsistens med den bedømmer, hvilket ikke er det samme som retfærdighed. Hvor indsatsen berettiger det, brug en anden kvalificeret læser til at afgøre vanskelige sager, og behandl en uenighed mellem AI'en og en menneskelig bedømmer som en anledning til at læse arbejdet igen frem for som en dom over, hvem der har ret.

Konsistens og sund dømmekraft divergerer. En model kan returnere næsten identiske scorer ved en genkørsel, mens den anvender dine kriterier dårligt, fordi repeterbarhed måler stabilitet, ikke validitet. OpRaise-halerne viser mønstret: systemet var stabilt og forkert om de essays, der betød mest.

## Validér proceduren, før den rører en karakter

Arbejd dig igennem dette på tidligere bedømte, passende beskyttede besvarelser, der spænder over de svar, du faktisk modtager: stærke, svage, grænsetilfælde, ufuldstændige, usædvanligt strukturerede og korrekte svar udtrykt på en uvant måde.

**1. Specificér kriterier og kræv evidens.** Giv opgaven, rubrikken, scorerreglerne og eksempler på, hvordan legitime alternative svar opnår credit. Bed om korte begrundelser på kriterieniveau, knyttet til identificerbare passager. Tjek så selv de begrundelser mod besvarelsen.

**2. Adskil kalibrering fra evaluering.** Tilpas på ét sæt, test på et andet. Uden den opdeling kan du ikke skelne en valideret procedure fra en godt tilpasset.

**3. Mål de beslutninger, der betyder noget.** Registrér eksakt overensstemmelse, størrelsen og retningen af scoreforskelle, og om modellen systematisk giver højere eller lavere karakterer. Undersøg bestået/ikke bestået og andre konsekvensrige grænser for sig. En høj korrelation kan ligge oven på et systematisk skred.

**4. Test repeterbarhed og undergruppeadfærd.** Kør et delmængde igen under identiske indstillinger. Led efter fejl på kriterieniveau og efter, at sprog, formatering eller legitim stil bliver forvekslet med svagere forståelse. Små undergruppetal understøtter forsigtighed, ikke en påstand om retfærdighed.

**5. Skriv eskaleringsreglen.** Beslut, hvilke sager der altid får menneskelig bedømmelse, og hvordan uenigheder afgøres. Lad ikke modellens angivne sikkerhed afgøre det; sikkerhed skal valideres mod observerede fejl, før den kan bære vægt.

**6. Beskyt arbejdsgangen.** Brug et godkendt miljø, minimér identificerende oplysninger, og hold rubrik og instruktioner adskilt fra indsendt indhold. Den adskillelse gør manipulation sværere at skjule. Den gør den ikke umulig.

**7. Registrér, hvad der ville ugyldiggøre tjekket.** Gem model og version, prompt, rubrik og indstillinger. En modelopdatering eller en rubrikrevision er en grund til at gentage de repræsentative tjek frem for at antage kontinuitet.

## Gør arrangementet synligt for de studerende

De studerende har krav på at vide, hvilken rolle værktøjet spiller, hvem der beslutter, og hvordan man anfægter et resultat. Vag oplysning skaber mistanke; det konkrete skaber et brugbart forhold. Noget i retning af: »Et godkendt AI-værktøj kan skrive udkast til rubrikkommentarer på dit udkast. Jeg gennemgår hver kommentar og fastsætter din karakter. Kontakt mig, hvis en kommentar giver et forkert billede af dit arbejde.« Så sørg for, at det er sandt.

To fejlretninger kræver særskilt opmærksomhed. Overdrevne fradrag er dem, de studerende rapporterer, og de dominerer klagerne. Ufortjent credit er den, der ikke nævnes, og som stille forvansker registret. Udtag stikprøver for begge, og medregn dine verifikationstimer, når du vurderer, om arbejdsgangen sparede dig noget.

## Hvad der vil komme tilbage til dig

**»Mennesker er også biaserede.«** Det er de, og derfor kræver sammenligningen eksplicitte kriterier frem for én bedømmers score som standard. OpRaise-institutionernes spredning er argumentet her: hvis menneskelige bedømmere på tre universiteter opnåede så forskellig båndoverensstemmelse med de samme systemer, er den menneskelige reference en del af det, der skal specificeres, ikke en fast målestok.

**»Rubrikken gør det objektivt.«** En rubrik gør forventningerne eksplicitte. At anvende den er stadig fortolkning, og farmacistudiet fandt, at en udleveret rubrik ikke forbedrede overensstemmelsen konsistent. Det, rubrikken giver dig, er en tjekbar standard for begrundelserne, ikke en garanti for scorerne.

**»Så skulle jeg tjekke alt, og det ødelægger formålet.«** For nogle opgaver er det den rigtige konklusion, og svaret er at indsnævre jobbet. At skrive kommentarer ud fra dine egne bedømmelsesnoter lader dømmekraften blive hos dig og fjerner skrivningen. Anden-læser-markeringer på grænsetilfælde koncentrerer din opmærksomhed der, hvor den ændrer et udfald.

**»Min kollega prøvede det, og det virkede godt.«** Spørg, hvad de målte. Positive vurderinger lever side om side med fejl i denne litteratur, og en kollega, der har læst nogle få fornuftige output, har kørt en demonstration, ikke en validering. Spørgsmålet er, hvad deres procedure ville gøre ved de essays, du ville opdage sidst.

## Hvad du kan gøre i denne uge

**1.** Vælg én bedømmelse og skriv ned, hvilken enkelt rolle AI'en skulle spille. Skriv ned, hvilken evidens der ville lade dig flytte den ét trin op.

**2.** Kør den på fem besvarelser, du allerede har bedømt, udvalgt så de omfatter en stærk, en svag, et grænsetilfælde og en med en usædvanlig, men legitim struktur.

**3.** Log hver uenighed med arbejdet og kriteriet, og navngiv de fejl, du ville betragte som uacceptable, frem for blot forkerte.

**4.** Test, om scoreforskellene går i en konsistent retning, og tjek din bestået/ikke bestået-grænse særskilt.

**5.** Skriv udkast til afsnittet til de studerende og vejen til genvurdering, og sammenlign din verifikationstid med den bedømmelsestid, du undgik.

## Hvor du kan gå videre hen

[[assessment-validity|Bedømmelsesvaliditet]] er det begreb, der afgør disse spørgsmål: om evidensen understøtter den slutning, du vil drage. [[automated-assessment|Automatiseret bedømmelse]] dækker teknologien og dens målte ydeevne på tværs af formater, og [[ai-feedback-at-scale|AI-feedback i stor skala]] håndterer det tilstødende problem med genererede kommentarer og spørgsmålet om, hvorvidt studerende handler på dem.

For hvad en karakter bør repræsentere, når studerende bruger AI, inklusive konstruktsubstitution og autentificeret procesevidens, se [[redesign-assessment-ai-era|at gentænke bedømmelse i AI-tidsalderen]]. For om detektion kan erstatte et forsvarligt opgavedesign, se [[should-we-use-ai-detectors|om man bør bruge AI-detektorer]]. For evalueringsspørgsmålet under det hele, se [[checking-whether-educational-ai-works|at tjekke, om en pædagogisk AI virker]].
