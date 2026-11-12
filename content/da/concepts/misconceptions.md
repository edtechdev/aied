---
title: "Misopfattelser om AI"
created: "2026-11-12T04:06:17-05:00"
updated: "2026-11-12T04:06:17-05:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading, teacher-role]
pedagogy: [metacognition]
technology: [generative-ai]
ethics: [trust-calibration]
audience: [learners, instructors]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education]
translation_of: concepts/misconceptions
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

> **Misopfattelser om AI** — de unøjagtige forestillinger, folk har om, hvad AI-systemer er, hvad de gør, og hvad det betyder for læring og arbejde at bruge dem. Misopfattelser er ikke en enkelt usandhed, men en familie af kalibreringsfejl, der klynger sig om to kernefejl: at fejlvurdere, hvad modellen er (autoritet vs. værktøj, neutral vs. forudindtaget, forståelse vs. generering) og at fejlvurdere, hvad læring kræver (output vs. proces). De findes ikke kun hos studerende, men også hos lærere, administratorer, beslutningstagere og den brede offentlighed — og at rette dem er et kerneformål med [[ai-literacy]] og [[trust-calibration]]-undervisning.

## Spørgsmål at overveje

- Mange mennesker tror, at en AI-chatbots svar er en verificeret kendsgerning, fordi det lyder selvsikkert og flydende. Siden kalder dette "autoritetsfejlslutningen". Når du læser en AI-genereret forklaring, hvordan afgør du så, om du skal acceptere den — og hvor ofte verificerer du den faktisk?
- Misopfattelsen "læring er lig med output" er troen på, at det at producere et arbejde med AI er det samme som at have lært det. Har du nogensinde følt, at du "lærte" noget ved at lade et værktøj skrive udkastet? Hvad manglede der faktisk bagefter?
- Folk antager ofte, at AI er objektiv og upartisk. Siden kalder dette "neutralitetsillusionen" — modeller indkoder fordomme fra træningsdata, som i skrivekontekster kan homogenisere idéer på tværs af en hel klasse. Hvor kan bias skjule sig i et værktøj, der føles neutralt?
- Misopfattelser om akademisk integritet klynger sig ved to yderpunkter: nogle studerende betragter AI-output som "ikke at kopiere en person" og derfor tilladt, mens andre mener, at enhver brug er snyd. Hvor synes du, grænsen bør gå, og hvem bør beslutte den?
- En udbredt forestilling er, at ét spørgsmål er nok, og at AI-output er deterministisk — det samme spørgsmål giver altid det samme svar. Siden beskriver dette som determinismefejlen. Hvordan kan den misopfattelse føre til, at nogen overbetror et enkelt output?
- Misopfattelser beskrives som stabile, plausible og modstandsdygtige over for korrektion — ligesom misopfattelser i ethvert domæne. Hvis det sjældent ændrer folks holdning blot at fortælle dem sandheden, hvordan bør AI-kompetence så egentlig undervises?

## Introduktion

Misopfattelser om AI betyder noget, fordi de er den kognitive forløber for de skadelige adfærdsmønstre, som vidensbasen dokumenterer under [[cognitive-offloading|Overafhængighed]] og [[academic-integrity]]-problemer. Folk sætter sjældent bevidst kurs mod at [[ai-misuse-learning-harm|misbruge]] AI; de gør det, fordi unøjagtige mentale modeller får dem til at placere tilliden forkert, springe verifikationen over og behandle output som forståelse. I uddannelse former disse fejl alt fra, hvordan studerende læser, til hvordan lærere og institutioner designer pensum, [[assessment]] og politik.

### Hvad misopfattelser om AI er

En misopfattelse her er ikke blot uvidenhed om, hvordan en model fungerer — det er en aktivt fastholdt, ofte selvforstærkende overbevisning, som producerer systematiske fejl i måden, studerende interagerer med AI på. De er direkte analoge til de domænemisopfattelser, der studeres i [[learning-sciences|læringsvidenskab]]: stabile, plausible og modstandsdygtige over for korrektion, indtil de konfronteres. At rette dem er et kerneformål med [[ai-literacy]]- og [[trust-calibration]]-undervisning.

### Almindelige misopfattelser i akademiske sammenhænge

- **Autoritetsfejlslutningen** — at behandle [[llm]]-output som verificeret kendsgerning snarere end som en probabilistisk færdiggørelse. Det driver ukritisk accept og det mønster, hvor svaret søges frem for forståelsen, som er dokumenteret i forskning i [[intelligent-tutoring|AI-tutoring]], hvor lærende accepterer en models svar uden at kontrollere det mod [[hallucination-risk]].
- **Illusionen om uafhængig kontrol** — at behandle [[ai-feedback-quality|AI-feedback]] som en udefrakommende korrektion, når modellen spejler ens egen ræsonnering. Brugernes basale nøjagtighed var den dominerende forudsigelse for den endelige præstation, og prompting målrettet [[ai-sycophancy|sycophancy]] reducerede positionel efterligning (OR = 0,26), men lod fejlopformering være urørt, så træning af den lærende er ikke beskyttelsen ([[contextual-sycophancy-ai-literacy|Koyuturk et al. (2026)]]).
- **Læring er lig med output** — at tro, at det at producere et arbejde *med* AI er det samme som at have lært det. Det er præcis fejlen bag [[cognitive-offloading|Overafhængighed]]: processerne med at skrive udkast, hente viden frem og revidere, som opbygger holdbar viden, bliver outsourcet.
- **Neutralitetsillusionen** — at antage, at AI er objektiv og upartisk. Studerende overser ofte, at modeller indkoder fordomme fra træningsdata, og at dette i [[writing-education]] producerer homogenisering af idéer på tværs af en årgang.
- **Integritetens gråzone** — at fejlvurdere, om [[academic-integrity|AI-brug er acceptabel]]. Nogle studerende ser AI-output som "ikke at kopiere en person" og derfor tilladt; andre overkorrigerer og mener, at *enhver* brug er snyd. [[governance|Institutionel]] inkonsistens nærer begge fejl.
- **Antropomorfisme** — at tro, at modellen har hensigt, hukommelse og forståelse af *deres* kontekst. Denne overbetroenhed er særligt risikabel akademisk, fordi studerende kan stole på plausible forklaringer, som modellen ikke reelt kan fundere.
- **Determinismefejlen** — at forvente, at ét spørgsmål er nok, og ikke indse, at output er ikke-deterministisk og følsomt over for prompten. At undervurdere dette skaber "[[prompt-engineering|prompting]]-kløften", hvor studerende forveksler overfladiske resultater med værktøjets loft.
- **Fejlkalibreringen af [[ai-detection|detektion]]** — at undervurdere både institutionel detektion og, vigtigere, den selvskade det er at aflevere arbejde, som man senere ikke kan forklare eller forsvare.
- **Effektivitetsillusionen** — at behandle sparet tid som ren gevinst og overse, at grundlæggende færdigheder, der ikke bruges, forvitrer, og at nybegyndere endnu ikke kan skelne godt output fra dårligt.
- **Venskabs-sikkerhedsillusionen (børn)** — at tro, at en AI, der virker venlig, i sig selv er sikker og mindre tilbøjelig til at spionere. [[children-ai-safety-misconceptions-2026|Leisten et al. (2026)]] undersøgte 71 børn i alderen 10–16 år (*M*alder = 12,90) og gennemførte seks fokusgrupper (n = 36) omkring den [[open-source]]-sociale robot Blossom og fandt, at grundlæggende AI-viden steg pålideligt med alderen (*M* = 4,41 af 6; β = 0,17), mens sikkerhedsholdninger forblev ambivalente (vigtighed *M* = 2,51, nuværende sikkerhed *M* = 2,77 på en skala fra 1–4), indfanget i en 12–13-årigs tro på, at "måske hvis de er gode venner, spionerer han ikke så meget" — sammen med troen på, at AI's viden kan slettes med et tryk på en knap, at hacking fører til kidnapning, og at "wifi stråler ind i hjernen".

Integritetens gråzone har en struktur, ikke bare to yderpunkter. Interview med 20 studerende, sammen med deres chatlogger og kursusdokumenter, fandt fem separate steder, hvor AI-politik lever: fra fakultetets intention over formel politik og studerendes egen politik til faktisk praksis — plus 23 forskellige rationaliseringer i seks klasser ([[student-rationalization-ai-writing|Kim et al., 2026]]). Rationaliseringerne var ad hoc og post hoc, samlet for at forklare brug, der allerede var sket, snarere end for at styre den. Et strengt forbud forhindrede ikke brugen så meget som det forstærkede den moralske konflikt hos studerende, der gerne ville overholde reglerne, hvilket placerer korrektionsmålet i politikstedet snarere end i selve regelformuleringen.

### Institutionelle og offentlige AI-myter

Misopfattelser er ikke begrænset til studerende — de gennemsyrer den institutionelle og offentlige diskurs om AI, som studerende arver. [[rudolph-ai-myths-critical-higher-ed|Rudolph et al. (2025)]] afmonterer otte indgroede "myter", der former politik og undervisning i videregående uddannelse: at AI virkelig er "kunstig" (snarere end bygget på udnyttet menneskeligt arbejde), at den virkelig er "intelligent" og [[agentic-ai|agentisk]], at den uden problemer vil "gøre verden til et bedre sted", at den er "objektiv og upartisk", at USA har monopol som eneste supermagt, at den ikke vil forstyrre arbejdsmarkedet, at den "revolutionerer [[higher-ed|videregående uddannelse]]", og at lærere pålideligt kan opdage AI-genereret arbejde. Disse institutionelle myter er den bagvedliggende kilde til mange af de studerendemisopfattelser, der er dokumenteret ovenfor — mest direkte [[trust|neutralitetsillusionen]] ("AI er objektiv") og [[trust-calibration|autoritetsfejlslutningen]] ("AI er intelligent") samt den fejlkalibrering af detektion, der får studerende til at antage, at uopdagelig, uverificerbar brug er sikker. Når studerende optager og handler på myter, der gentages institutionelt, kræver korrektion, at man konfronterer ikke blot den lærendes overbevisning, men også den diskurs, der nærer den.

### Hvorfor misopfattelser betyder noget for læring

Misopfattelser omsættes direkte til de adfærdsmønstre, der forårsager læringsskade. Troen på, at "AI altid har ret", undertrykker verifikation; troen på, at "at bruge AI er læring", undertrykker anstrengende bearbejdning; troen på, at "det er ikke snyd", omgår den metakognitive gennemgang, der konsoliderer forståelsen. I den forstand ligger misopfattelser opstrøms for den [[ai-misuse-learning-harm]], som er dokumenteret i hele vidensbasens evidensgrundlag.

Troen på, at brug af AI er læring, holdes ikke kun før brugen; værktøjet kan fremstille den. [[llm-fallacy-misattribution|Kim et al.]] beskriver en LLM-fejlslutning, hvor uigennemsigtigt, flydende og øjeblikkeligt output fejllæses som bevis på brugerens egen kompetence, så den oplevede og den faktiske formåen divergerer med et gab, de kalder ΔC. Fordi mekanismen er flyden og uklarhed om tilskrivning snarere end fejl, består fejlslutningen, uanset om modellen er korrekt eller hallucinerer, hvilket betyder, at et korrekt AI-assisteret svar ikke er bevis på, at overbevisningen er blevet rettet.

### Misopfattelser ud over studerende: lærere, institutioner og offentligheden

Misopfattelser om AI er ikke begrænset til lærende — de er udbredte blandt de voksne, der former uddannelse:

- **Lærere og undervisere** kan overvurdere AI's evne til pålideligt at bedømme eller opdage misbrug eller undervurdere dens bias, hvilket fører til enten ukritisk adoption eller refleksmæssigt forbud. Den antagelse om pålidelighed er delvist testbar og delvist falsk: [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] lavede red teaming på en almindelig [[automated-assessment|AI-bedømmelses]]arbejdsgang og fandt, at instruktioner skjult i en indsendt fil hævede karakteren for et dumpet essay uden synlig advarsel, i 9 af 9 iterationer for én strategi og 17 af 18 for en anden. Når lærere fastholder [[trust|autoritetsfejlslutningen]] om AI-output, modellerer de den samme ukritiske holdning, som de burde rette hos studerende. At ruste [[teacher-role|undervisere]] med retvisende mentale modeller af AI er en forudsætning for [[teacher-ai-competency|ansvarlig AI-integration]] og [[pedagogical-safety|sikker pædagogik]].
- **Administratorer og beslutningstagere** arver og videregiver institutionelle myter — at AI er "objektiv", at den vil "revolutionere" uddannelse, eller at detektionsværktøjer er til at stole på — som derefter former [[educational-policy-ai|politik]], indkøb og regler for vurdering. Den [[trust-calibration|tillid]], studerende udvikler, er delvist et produkt af den institutionelle ramme, de arver.
- **Den brede offentlighed** optager mediernes og leverandørernes fortællinger om AI's kapaciteter og risici. Fordi studerende lærer inden for denne diskurs, bliver offentlige myter det substrat, som studerendes misopfattelser gror ud af. At rette misopfattelser om AI er derfor en [[ai-literacy]]-opgave rettet mod hele uddannelsesøkosystemet, ikke kun mod de lærende.

Det er denne bredde, der gør, at vidensbasen behandler misopfattelser som et tværgående grundtema snarere end et rent studerenderettet: de samme kalibreringsfejl går igen hos lærende, lærere, institutioner og offentligheden, og at rette dem kræver, at man konfronterer både individuelle overbevisninger og den diskurs, der nærer dem.

Lærernes pædagogiske misopfattelser er spejlbilledet af dette: ikke misforståelser om AI, men evidensstridige overbevisninger om undervisning, som består uafhængigt af AI. [[etq-ai-conversational-teacher-training-2026|Miranda og Calvani (2026)]] operationaliserer dette med Effective Teaching Questionnaire, hvor 50 binære items mapper til [[meta-analysis-systematic-review|meta-analytiske]] effektstørrelser (d ≥ 0,40), så en lærers svar kan sammenlignes med en evidensbaseret benchmark — og deres fund er, at misopfattelserne er dybe og specifikke. Et pilotprojekt med 123 undervisere i Italien fandt den skarpeste uenighed om påstanden om læringsstile (78 % af lærerne forsvarede visuel/auditiv tilpasning), derefter om inklusion og [[group-work|gruppearbejde]] (68 %) og EdTech-overbelastning (54 %); den gennemsnitlige overensstemmelse lå omkring 50 % på tværs af dimensionerne planlægning, kognition, evaluering og ledelse. To detaljer er vigtige for designet af korrektion. For det første overlever misopfattelserne universitetsuddannelse og undervisningspraksis — forfatterne beskriver en "internaliseret sund fornuft", der "går forud for indtræden i skolen" og består — så de er ikke videnshuller, som en forelæsning lukker. For det andet, da en konversationel AI genindførte de samme items først efter at have valideret lærerens egen kontekst, henviste 41 % af indvendingerne til reelle kontekstuelle begrænsninger — klassestørrelser, studerende med [[special-education|særlige behov]], [[curriculum-design|læreplans]]dækning — snarere end til evidensen selv. Yderligere 5,9 % kaldte systemet "en algoritmisk dogmemaskine": den grænsetilstand, hvor normativ rammesætning avler defensivitet i stedet for refleksion. For udvikling af [[teacher-ai-competency]] er implikationen, at diagnostik plus dialog kan afdække, hvilke overbevisninger der er evidensbaseret uenighed, og hvilke der er misopfattelse — en skelnen, som en score alene ikke kan foretage.

### At rette misopfattelser

Korrektion er ikke en engangsoplysning, men en vedvarende [[ai-literacy]]-proces, der udvikler [[metacognition]] og [[self-regulated-learning]]: at hjælpe studerende (og de voksne omkring dem) med at overvåge deres afhængighed, kalibrere hvornår de skal stole på, og hvornår de skal betvivle en model, og se prisen for at omgå deres eget [[cognitive-offloading|kognitive arbejde]]. Fordi misopfattelser er modstandsdygtige, håndteres de bedst gennem direkte konfrontation med evidens — herunder fundet, at studerende ofte *ikke oplever* læringsskaden ved AI-misbrug.

**Refutationstekst er en kerneteknik til korrektion.** Fordi misopfattelser fastholdes aktivt og er modstandsdygtige, er den mest direkte evidensbaserede strategi [[refutation-text|refutationsteksten]] — en undervisningstekst, der formulerer misopfattelsen, eksplicit tilbageviser den og præsenterer den korrekte forestilling. Det er samme familie af teknik, som bruges til at rette de domænemisopfattelser, der studeres i [[learning-theories|læringsvidenskab]], her anvendt på studerendes overbevisninger om AI selv. Vidensbasens begrebside om [[refutation-text]] syntetiserer, hvordan dette udspiller sig i [[ai-education|AI i uddannelse]] på tre komplementære måder:

- **AI som korrektør.** [[conversational-ai|Konversationel AI]]-tutorer kan levere *personlig* tilbagevisning og tilpasse den til den lærendes specifikke misopfattelse undervejs. [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen (2026)]] fandt, at personlig AI-dialog gav større og hurtigere reduktioner i overbevisning end statisk tilbagevisning i lærebogsstil, med højere [[student-engagement|engagement]] og selvtillid — selv om fordelen forsvandt efter to måneder uden forstærkning.
- **AI som generator af tilbagevisningsindhold.** [[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan (2025)]] fandt, at AI-genereret begrebsændrings-/refutationstekst matchede ekspertskrevet kvalitet (og begge overgik en promptet interaktiv dialog i den naturfaglige kontekst), hvilket viser, at AI kan producere effektive korrektionsmaterialer i skala.
- **AI-genererede misopfattelser som læringsressource.** I stedet for at behandle AI-genererede misopfattelser som blot skadelige foreslår [[llms-misconception-collaborative-learning-healthcare-2026|Cheah et al. (2026)]] at generere misopfattelser og håndtere dem gennem struktureret peer-diskussion — en [[collaborative-learning|kollaborativ]] form for tilbagevisning, der fremmer begrebsændring og [[critical-thinking|kritisk tænkning]].

For misopfattelser om AI betyder det, at korrektion bør kombinere **direkte konfrontation** (tilbagevisningsmaterialer, der navngiver og gendriver specifikke myter) med **stilladseret øvelse** — ved at bruge [[ai-literacy]]-undervisning og [[metacognition]] til at hjælpe folk med at se både den falske overbevisning og den korrekte model. Evidensen advarer om, at *formatet* betyder noget: personlig, interaktiv korrektion er mere engagerende og initialt mere effektiv, men kræver forstærkning for at holde; og det målte udfald (viden vs. holdninger vs. færdigheder) former, hvor stor en korrektionsseffekt der vises. Fordi misopfattelser spænder over lærende og de voksne, der former læring, skal effektiv korrektion nå [[teacher-role|lærere]], [[administrator|administratorer]] og [[educational-policy-ai|beslutningstagere]] lige så meget som studerende.

Bernstein og Sibia (2026) viser, at [[generative-ai|GenAI]]-genererede analogier introducerer strukturelle misopfattelser, som kun kendskab til kildedomænet kan fange ([[student-reception-genai-analogies-computing-2026]]): en cirkelruteanalogi for en linket liste antyder en løkke tilbage til starten, og en badmintonrallyanalogi for rekursion indeholder ingen garanteret indskrumpende input. Studerende, der kendte kildedomænet, identificerede disse fejl og foreslog reparationer, mens deltagerne bemærkede, at en fejlbehæftet analogi stadig kan være mindeværdig — hvilket indikerer, at en velkendt analogikilde kan hjælpe lærende med at opdage snarere end absorbere en AI-produceret misopfattelse, og at det at rammesætte fejl som bevidste artefakter til kritik forvandler risikoen til en vurderingsmulighed.

**Modelgenererede misopfattelser er en målbar kapacitet, ikke et uheld.** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] byggede SocraticTrap-CS, som promptede syv open-weight-modeller til at skrive en "[[socratic-method|sokratisk]] fælde" for 35 kernebegreber i datalogi — en forklaring, der er flydende og autoritativ, men hviler på en subtil, domænespecifik fejl. Af 241 promptede segmenter blev 221 (91,7 %) bekræftet som strategiske misopfattelser ved ekspertflertalsafstemning (Fleiss' κ = 0,9487), uden signifikante forskelle mellem datalogiske domæner; 66,5 % af de bekræftede fejl var konceptuelle snarere end faktuelle, og ingen var rent logiske. Flyden er mekanismen snarere end en forsvarslinje: overbevisningskraften lå i gennemsnit på 3,71 på en fempunktsskala og var stærkt modelafhængig, og hyppighed og alvorlighed dissocierede, idet de to modeller, der oftest producerede fælder, også blev vurderet som de mest overbevisende. Fordi en studerendes dårligt formulerede spørgsmål selv kan virke som en adversariel prompt, behandler forfatterne raten som en kapacitet under adversariel prompting snarere end som en basisrate for almindelige studiesessioner — og argumenterer for, at [[ai-literacy]]-opgaven flytter sig fra faktatjek af enkeltudsagn til konceptuel verifikation og validering af mentale modeller. Det er den mørkere side af den generative brug ovenfor: den samme kapacitet, der kan så frø til produktiv peer-diskussion, kan også befæste en fejl, som den lærende allerede var ved at danne.

### Tilbagevisningsbaseret korrektion af almindelige AI-misopfattelser

Fordi misopfattelser fastholdes aktivt og er modstandsdygtige, er den mest direkte måde at håndtere dem — også på denne side — [[refutation-text]]-strukturen: **navngiv misopfattelsen, tilbagevis den eksplicit, og angiv den korrekte forestilling.** Nedenstående punkter anvender denne struktur på de mest konsekvensrige misopfattelser om AI og om læring, undervisning og uddannelse:

**"AI har altid ret."** *Det er en misopfattelse.* AI-output er en probabilistisk færdiggørelse, ikke en verificeret kendsgerning. *Korrektionen:* LLM'er genererer plausibelt klingende tekst ud fra statistiske mønstre; de kan [[hallucination-risk|hallucinere]], være biased og tage fejl med stor selvsikkerhed. Behandl output som et udkast, der skal tjekkes mod kilder, ikke som en autoritet, der skal accepteres. Det er kernen i [[trust-calibration]], og derfor slår "verificer altid" "stol altid på".

**"At bruge AI er læring."** *Det er en misopfattelse.* At producere et arbejde *med* AI er ikke det samme som at tilegne sig den viden eller færdighed, arbejdet skal demonstrere. *Korrektionen:* holdbar læring sker gennem de anstrengende processer med at skrive udkast, huske, revidere og metakognitivt gennemgå — netop de processer, som [[cognitive-offloading|udlicitering]] til AI kortslutter. Brug AI som et værktøj ved siden af denne indsats, ikke som en erstatning for den.

**"AI er neutral og objektiv."** *Det er en misopfattelse.* Modeller arver fordomme, huller og perspektiver fra deres træningsdata. *Korrektionen:* AI kan reproducere og forstærke [[bias-mitigation|bias]]; behandl dens output med samme kildekritiske granskning, som du ville anvende på enhver anden tekst. Erkendelsen af dette er en del af [[ai-literacy]] og hjælper med at modvirke de [[equity-in-ai-education|ligestillings]]skader, som ukritisk adoption medfører.

**"AI vil erstatte lærere."** *Det er en misopfattelse.* AI forstærker, men fortrænger ikke [[teacher-role|lærernes]] [[pedagogy|pædagogiske]] arbejde — dømmekraft, kontekstualisering og de relationelle og [[ethics|etiske]] dimensioner af undervisning. *Korrektionen:* AI øger behovet for pædagogisk mediation og kritisk dømmekraft; lærere, der forstår AI, bliver mere effektive, ikke overflødige. Denne omramning betyder noget, fordi den former, om institutioner investerer i [[teacher-ai-competency|læreres AI-kompetence]] eller refleksmæssigt modsætter sig eller overadopterer.

**"AI forstår som et menneske."** *Det er en misopfattelse.* Modeller har ingen hensigt, ingen hukommelse om dig og ingen egentlig forståelse af din kontekst. *Korrektionen:* antropomorfisering af AI fører til overbetroenhed og afhængighed af forklaringer, som modellen ikke reelt kan fundere. Hold grænsen klar: AI er et stærkt værktøj, ikke et sind.

**"AI vil automatisk forvandle uddannelse."** *Det er en misopfattelse.* Teknologi alene ændrer ikke læring; det er pædagogikken omkring den, der gør det. *Korrektionen:* AI's fordele afhænger af bevidst [[learning-design|undervisningsdesign]], lærerforberedelse og institutionel støtte — ikke af blot at implementere værktøjet. Derfor betyder [[ai-ed-evaluation|evidens]] og [[research-methods-aied|stringent evaluering]] noget, og derfor rammesætter vidensbasen ansvarlig AI-brug som et [[governance]]- og [[educational-policy-ai|politisk]] spørgsmål snarere end et rent teknisk.

**"Én prompt bør give mig svaret."** *Det er en misopfattelse.* Output er ikke-deterministisk og følsomt over for prompten. *Korrektionen:* forvent at iterere, forfine og krydstjekke; "prompting-kløften" — at forveksle overfladiske første resultater med værktøjets loft — er et færdighedsproblem, ikke en værktøjsbegrænsning. At udvikle dette er en del af [[prompt-engineering]].

**"Det er ikke snyd, hvis en person ikke har skrevet det."** *Det er en misopfattelse.* Akademisk integritet handler om ærlig, tilskrivelig produktion af arbejde, ikke kun om ikke at kopiere en person. *Korrektionen:* en ikke-oplyst AI-genereret aflevering kan krænke [[academic-integrity]], selv når intet menneske er blevet kopieret; spørgsmålet er, om arbejdet reelt er den lærendes. I tvivlstilfælde: oplys det og tjek din institutions politik.

Disse tilbagevisninger er bevidst skrevet i [[refutation-text]]-formen, så de selv kan bruges (eller tilpasses til interaktiv [[conversational-ai|AI-dialog]]) til at konfrontere og rette misopfattelser om AI — og om læring, undervisning og uddannelse mere bredt.

## Almindelige misopfattelser

- **"Læreres misopfattelser kan rettes ved at præsentere evidens."** I et pilotprojekt med **123 italienske undervisere** klyngede uenigheden sig hårdest om **kognitive læringsstile (78 % af lærerne forsvarede visuel/auditiv tilpasning)**, inklusion og gruppearbejde (68 %) og EdTech-overbelastning (54 %). De stærkeste uenigheder var dem, der var mest modstandsdygtige over for evidens, og derfor slår [[refutation-text|tilbagevisning]] en påstand.
- **"Læreres indvendinger mod evidens er alt sammen modstand."** Da de samme items blev leveret gennem en konversationel AI, der **validerede lærerens kontekst, før den genindførte evidensen**, drejede **41 % af indvendingerne sig om reelle kontekstuelle begrænsninger** — klassestørrelse, særlige behov, læreplanskrav. En betydelig andel af det, der så ud som misopfattelser, var præcis indvending.
- **"Misopfattelser kan pålideligt detekteres ud fra dialog."** **Af 241 promptede segmenter blev 221 (91,7 %) bekræftet som strategiske misopfattelser ved ekspertflertalsafstemning (Fleiss' κ = 0,9487)**, med **ingen signifikante forskelle** mellem grupper. Høj pålidelighed er opnåelig under ekspertbedømmelse, og det er den betingelse, påstanden afhænger af.

## Relaterede begreper

- [[pedagogical-patterns]] — De begrebsændringssekvenser, der konfronterer en specifik fastholdt overbevisning
- [[learners]] — Lærende: paraplyen for begreberne på den lærendes side
- [[ai-literacy]]
- [[trust-calibration]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[generative-ai]]
- [[student-experience]]
- [[framing-ai-use-for-students]]
- [[refutation-text]]
- [[teacher-role]]
- [[educational-policy-ai]]
- [[trust]]

## Relaterede artikler
- [[rudolph-ai-myths-critical-higher-ed]] — Tro ikke på hypen: otte AI-myter og behovet for en kritisk tilgang i videregående uddannelse
- [[student-rationalization-ai-writing]] — Studerendes rationalisering af AI-skrivning
- [[genai-skill-bypass-literacy]] — GenAI-færdighedsomgåelse og AI-kompetence
- [[trust-reliance-ai-education-2026]] — Tillid og afhængighed i AI-uddannelse
- [[contextual-sycophancy-ai-literacy]] — Kontekstuel sycophancy og AI-kompetence
- [[sycophantic-ai-social-interaction-2026]] — Sycophantisk AI i social interaktion
- [[llm-fallacy-misattribution]] — LLM-fejlslutning og fejltilskrivning (Kim et al.)
- [[student-reception-genai-analogies-computing-2026]] — Fejlbehæftet, men mindeværdig: Studerendes kritiske reception af interessepersonaliserede GenAI-analogier i datalogiundervisning
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: flydende, autoritative forklaringer, der er konceptuelt snarere end faktuelt forkerte (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Skjulte instruktioner i en indsendt fil kan hæve en AI-bedømt karakter uden synlig advarsel (Humble 2026)
- [[children-ai-safety-misconceptions-2026]] — Børns misopfattelser om AI-sikkerhed: venskab med en robot fejllæst som en garanti for privatliv (Leisten et al. 2026)
- [[etq-ai-conversational-teacher-training-2026]] — Konversationel AI-diagnostik af undervisningsmisopfattelser med evidensforankret dialog (Miranda & Calvani 2026)
