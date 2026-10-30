---
title: "Hvordan tjekker jeg, om AI-genererede quiz- og eksamensspørgsmål faktisk er gode?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Du beder om tyve spørgsmål ud fra dine forelæsningsnoter. De kommer tilbage med facitlister, forklaringer, sværhedsgrader og Bloom-taksonomiske kategorier i et formateret dokument, der ser færdigt ud. Dit navn er ved at komme på det.

Det korte svar til en kollega: genererede spørgsmål er kandidater, ikke en bedømmelse. Løs hvert enkelt selv, tjek hvad opgaven faktisk kræver, at en studerende gør, og find ud af, hvordan studerende reagerer på den, før den tæller. I de to største studier i denne vidensbase er det interessante signal ikke, at generering virker, men hvor den svigter. Iterativ generering inde i en kursusspecifik arbejdsgang producerede brugbare multiple-choice-eksamener på tværs af 71 universitetsklasser ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). I en datavidenskabelig revision af 311 udrullede spørgsmål fulgte modellens sværhedsgrader næsten perfekt de Bloom-niveauer, den selv havde genereret samtidig med dem (Spearman ρ = 0,90), mens de fulgte det, studerende faktisk scorede, med ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An og Wang, 2026]]). Etiketten var en beskrivelse af prompten, ikke en måling af opgaven.

## Den korte version

**1.** Skriv læringsmålet og den evidens, et tilfredsstillende svar ville give, ned, før du genererer noget.

**2.** Byg en blueprint, så du kan se, hvilke læringsmål sættet dækker, og hvor ofte.

**3.** Løs hver opgave selv, før du stoler på facit, og læs forklaringen som en påstand, der skal tjekkes.

**4.** Spørg, hvad en studerende skal gøre for at besvare den. Et spørgsmål, der siger »analysér« og kræver genkaldelse, er et genkaldelsesspørgsmål.

**5.** Behandl sværhedsgrader som promptmetadata, ikke som psykometri.

**6.** Pilotér opgaverne, undersøg hvordan de fungerer, og revidér de svage.

## Begynd med den læring, du vil have evidens for

Generering er billig nok til, at outputformatet stille bliver specifikationen. Hvis dine noter giver pæne multiple-choice-opgaver, ender du med at måle, om studerende kan vælge mellem plausible udsagn, uanset hvilket læringsmål pensummet hævder.

Specificér først læringsmålet, derefter den evidens, et tilfredsstillende svar ville levere, og derefter den viden, studerende forventes at bringe med. Medtag kursusmaterialet, de misforståelser du forventer, eventuelle tilladte værktøjer og svarformatet. Hvis du vil have studerende til at fortolke evidens, skal opgaven kræve fortolkning, og det gør det ikke at tilføje ordet til et definitionsspørgsmål. Et langt scenarie kan stadig besvares gennem én velkendt vending, der afslører det hele.

En bedømmelsesblueprint er en tabel over læringsmål mod opgaver, og dens værdi er, at den afslører huller, før de studerende gør. Den gør også afvejningen synlig: hver opgave, du genererer ud fra det letteste materiale, er en opgave, du ikke brugte på det læringsmål, du holder mest af.

## Gennemgå hver opgave på seks dimensioner

Begynd med facit. Kan det forsvares mod autoritativt kursusindhold, og holder forklaringen, når du tjekker den uafhængigt? Facit og forklaring kommer ofte fra det samme fejlbehæftede trin, så det ene tjekker ikke det andet.

Spørg så, hvad besvarelsen af opgaven faktisk kræver, at en studerende gør mellem læsning og valg. Det er her, genererede opgaver oftest svigter, og hvor etiketten er mindst pålidelig.

Tjek derefter alignment: giver besvarelsen evidens for det tilsigtede læringsmål, eller for noget beslægtet og lettere at bedømme?

Læs formuleringen, som en studerende ville. Er den nødvendige information til stede, og er tvetydighed uden forbindelse til dit konstrukt fjernet?

Se på svarmulighederne og scoringsreglerne sammen. Er distraktorerne plausible og forskellige fra hinanden og fra facit, og anerkender facit legitime alternative svar, som din rubrik ville give credit for?

Spørg til sidst, hvem opgaven udelukker. Læsebyrde, kulturel kontekst, visuelle elementer og formatering kan pålægge krav uden forbindelse til læringsmålet. For en flersproget studerende eller en studerende med handicap måler en opgave, der belønner hurtig læsning, noget, du ikke havde til hensigt, og [[differential-effects-across-learner-groups|undergruppepræstation]] er der, hvor det viser sig.

En anden model kan hjælpe med at finde problemer, og enighed mellem to modeller er ikke uafhængig verifikation af korrekthed. De deler træningsdata og fejlmønstre. Løs opgaven, og lad så en kvalificeret person se på dem, der skal tælle.

## Lad ikke sværhedsgraden afgøre

Litteraturen om [[automated-question-generation|spørgsmålsgenerering]] er mere nyttig om etiketternes svigt end om genereringens succes. [[student-llm-use-ai-question-difficulty-data-science-2026|An og Wang (2026)]] undersøgte 378 forfatterdesignede spørgsmål i datavidenskabskurser, hvoraf 311 blev udrullet til 54 studerende over 7.888 besvarelser. Modellens etiketter let, mellem og svær korrelerede med dens egne samtidigt genererede Bloom-niveauer ved ρ = 0,90 og med empirisk opgavesværhed ved ρ = 0,06. Cirka 70 % af de udrullede opgaver blev besvaret korrekt af hver eneste studerende, hvilket efterlod næsten ingen variation, som en sværhedsgrad overhovedet kunne følge.

To læresætninger følger. For det første er sværhedsgrad en egenskab ved samspillet mellem en opgave og en population, så ingen etiket produceret før opgaven administreres, kan bruges som en målt værdi. For det andet er en bank af opgaver, alle besvarer korrekt, ikke en let bedømmelse, men en ubrugelig: den bærer næsten ingen information om, hvem der ved hvad.

Det positive tilfælde er snævrere end leverandørernes påstande og værd at kende præcist. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] genererede ti-spørgsmåls multiple-choice-eksamener til 71 universitetsklasser, cirka 1.200 studerende, ved hjælp af en løkke, der genererer, bedømmer og reviderer hver opgave betinget af hvert kursus' egne underviserleverede materialer, og benchmarkede derefter opgaverne mod menneskeskrevne eksamener. Det er en arbejdsgang med en gennemlæser indbygget, kørt per kursus, ikke en enkelt prompt over generisk indhold. Støtten gælder arbejdsgangen under de betingelser, og den strækker sig ikke til, hvad den samme model producerer ud fra en indsat klump uredigerede noter.

## Kør en cyklus: generér, gennemgå, pilotér, revidér

Generér mod en blueprint, og bed om det tilsigtede læringsmål, facit, en kort løsning og den misforståelse, hver distraktor skal fange. Annotationerne gør designet inspicerbar. De er ikke evidens for, at designet er holdbart.

Reparér, før du akkumulerer. Slet ubegrundede påstande, dubletter, tilfældige spor i opgaveteksten, flere forsvarlige facit og kompleksitet uden forbindelse til konstruktet, og notér, hvad du ændrede, fordi mønstret i reparationerne fortæller dig, hvilken del af prompten der skal rettes.

Pilotér, hvor en pilot er proportional. Lav indsats i øvekontekst eller en styret pilot inde i bedømmelsen giver dig besvarelsesdata. Fortæl de studerende, hvordan de rapporterer et tvetydigt eller forkert spørgsmål, og læs rapporterne, for de er dit mest informative fejlsignal.

Undersøg derefter, hvordan opgaverne fungerer: andelen med korrekt svar, hvilke distraktorer der tiltrækker besvarelser, og om succes på opgaven følger med præstation på resten af bedømmelsen. En opgave, hvor stærke studerende fejler og svage lykkes, er en defekt og ikke et svært spørgsmål. I en lille klasse er disse statistikker ustabile, så kombiner dem med indholdsgennemgang og studerendes forklaringer i stedet for at behandle en procentdel som en dom.

Revidér, og gem registret: den godkendte version, det læringsmål den tjener, facit, begrundelsen, gennemgangsnoterne og administrationshistorikken. For store eller højindsatsmæssige opgavebanker er det her, bedømmelsesspecialister og ordentlige psykometriske metoder hører til, og ekspertise i [[educational-measurement|måling]] er ikke noget, en omhyggelig læsning kan erstatte.

## Sådan ser det ud i et kursus

I et introduktionskursus i sociologi kan læringsmålet være at skelne en strukturel forklaring fra en individuel. En svag opgave beder studerende definere »strukturel«, hvilket måler ordforrådsgenkendelse. En stærkere kandidat giver et kort scenarie om en familie og en beskæftigelsesbeslutning og spørger så, hvilken forklaring der bedst identificerer en strukturel begrænsning, med distraktorer, der repræsenterer plausible, men forskellige fortolkninger.

Underviseren tjekker, at scenariet reelt understøtter facit, at ingen to svarmuligheder udtrykker den samme idé, og at besvarelsen ikke afhænger af terminologi, som kurset aldrig har introduceret. Et opfølgningsspørgsmål på én linje, »hvilken detalje understøtter dit valg?«, frembringer den ræsonneren, som den valgte mulighed skjuler. Tilpasningen er utestet som opgaveformat, og dens værdi er snævrere: gennemgangsspørgsmålene ovenfor kan besvares, før en opgave administreres, og et dårligt facit kan repareres, før de studerende ser det.

For studerende, der genererer deres egne øvespørgsmål, gælder den samme regel på deres niveau: forsøg opgaven, tjek forklaringen mod kursuskilder, og bring de uafklarlige tilfælde til nogen, der kender faget. [[study-with-ai|Øvelse med AI]] der træner studerende i at acceptere genererede facit ukritisk, lærer den forkerte vane.

## Hvad der vil komme tilbage til dig

**»Den gav et svar og en forklaring.«** Begge kan gentage den samme fejl, og forklaringen skaber tillid præcis, fordi den er flydende. Verificér ræsonnementet mod dine materialer, ikke mod dets egen gengivelse.

**»Det er kun øvespørgsmål.«** Øvelse lærer misforståelser, når forkerte facit ikke rettes, og studerende indøver fejlen lige så villigt som det korrekte svar. Lavere indsats ændrer, hvor meget gennemgang der er proportional. De ændrer ikke, om nøjagtighed betyder noget.

**»De studerende kunne godt lide quizzen.«** Glæde er evidens om oplevelsen. En let quiz, alle gennemfører komfortabelt, føles god og måler lidt, og datavidenskabsrevisionen fandt, at opgavernes popularitet ikke blev ledsaget af noget brugbart sværhedssignal.

**»Rubrikken eller Bloom-taggene viser, at den rammer læringsmålene.«** Bloom-etiketter leveret af det samme genereringstrin er den mindst uafhængige evidens, der findes. ρ = 0,90 mod etiketter og ρ = 0,06 mod studerendes præstation er præcis, hvordan det ser ud, når det bliver målt.

## Hvad du kan gøre i denne uge

**1.** Vælg et læringsmål og skriv den evidens, et tilfredsstillende svar ville give. Generér så fem opgaver mod det, og bed om facit, løsning og den tilsigtede misforståelse bag hver distraktor.

**2.** Løs alle fem uden at se på facit, og log dem, hvor du og modellen er uenige.

**3.** Bed en kollega inspicere de to stærkeste kandidater for alignment og tvetydighed, og slet alt, som ingen af jer kan forsvare.

**4.** Pilotér de overlevende med et kort opfølgningsspørgsmål, der spørger studerende, hvilken detalje der understøtter deres valg.

**5.** Registrér, hvad du ændrede og hvorfor, så den næste omgang starter fra en bedre prompt i stedet for den samme.

## Hvor du kan gå videre hen

[[automated-question-generation|Automatiseret spørgsmålsgenerering]] er begrebssiden for genereringsmetoder og deres målte kvalitet, og [[educational-measurement|pædagogisk måling]] dækker opgaveanalyse, reliabilitet og den psykometri, som en pilot kun antyder. Begge ligger under [[assessment-validity|bedømmelsesvaliditet]], som er den standard, hele cyklussen tjener.

Dømmekraftssiden af det samme problem hører til [[ai-grading-fairness-reliability|AI-bedømmelse]], for en god opgave bedømt dårligt er ikke bedre end en dårlig opgave bedømt godt. For det bredere spørgsmål om, hvad en karakter bør repræsentere, når studerende kan bruge AI, se [[redesign-assessment-ai-era|at gentænke bedømmelse i AI-tidsalderen]].
