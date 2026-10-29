---
title: "At reducere misbrug af AI"
created: "2026-10-27T16:29:47-04:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
source_updated: "2026-10-25T14:15:00-04:00"
updated: "2026-10-27T16:29:47-04:00"
translation_note: "*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

> **At reducere misbrug af AI** - de designmæssige, [[pedagogy|pædagogiske]] og [[educational-policy-ai|politiske]] løftestænger, der forhindrer studerende i at erstatte deres eget [[cognitive-offloading|kognitive arbejde]] med [[generative-ai|generativ AI]] og i stedet leder dem mod [[ethics|etisk]], produktiv brug. Effektive tilgange er sorteret efter virkning frem for popularitet, og den stærkeste evidens taler for **strukturelle løftestænger** - værktøjs-[[guardrails]] og redesign af evaluering - som ændrer omgivelserne, så misbrug bliver sværere, uanset den studerendes motivation, frem for **undervisende løftestænger**, der bygger på at opbygge holdbar kapacitet og [[framing-ai-use-for-students|opbakning fra de studerende]].

## Spørgsmål at overveje

- Studerende, der outsourcer lektier til AI, kan se deres lektiekarakterer *stige*, mens deres karakterer ved [[summative-assessment|lukkede bogs eksamen]] *falder*. Før du læser videre: hvorfor kan præstation og læring divergere så skarpt, og hvad antyder det gab om, hvad 'succes' med AI egentlig betyder?
- Siden rangerer interventioner efter kausal evidens og rækkevidde og placerer *strukturelle* løftestænger (guardrails i værktøjer, redesign af evaluering) over *undervisende* ([[teacher-role|undervisning]] i god praksis) - netop fordi strukturelle løftestænger virker uanset den studerendes motivation. Er du enig i, at ændrede omgivelser slår ændrede sind? Hvad er risikoen ved at stole på hver af dem?
- En guardrail-beskyttet 'hint-ikke-svar'-tutor eliminerede den læringsskade, en ubeskyttet tutor forårsagede, selv om begge virkede hjælpsomme. Tænk på et læringsværktøj, du har set, som giver svar for let. Hvor går grænsen mellem et hint, der stilladserer, og et svar, der erstatter, og kan du formulere den, før du læser?
- Den stærkeste løsning omfatter redesign af evaluering: eksamener uden hjælpemidler i undervisningen, mundtlige forsvar, procesartefakter, belønning af ræsonnement frem for overfladisk sproglig flyden. Hvordan ville du have det med at tage et kursus, der blev bedømt sådan, og fortæller den følelse dig noget om, hvorfor denne løftestang både er effektiv og upopulær?
- Rammer for AI-deklaration, der tvinger studerende til at knytte deres brug til kognitive stadier (planlægning vs. indholdsgenerering), flytter vægten fra kontrol til professionel praksis. Tror du, at en sådan refleksion reelt opbygger bedre dømmekraft, eller lærer den bare studerende at beskrive misbrug mere smart?
- Sæt dig et mål, før du læser: identificér én konkret ændring i dit eget kursus eller din arbejdsgang, der ville gøre misbrug af AI sværere, og én, der ville gøre produktiv brug lettere. Hvilket af sidens niveauer ville hver af dem høre til?

## Introduktion

Begrebet hviler på evidensen for, at misbrug af AI aktivt skader holdbar læring - det præstations- og læringsgab, der er dokumenteret i [[ai-misuse-learning-harm]] - samtidig med at det oppuster den umiddelbare præstation. Interventioner retter sig derfor mod mekanismerne bag denne skade: kopiering af svar, [[cognitive-offloading]], erosion af motivation og fortrængning af læring. De udelukker ikke hinanden; en robust tilgang kombinerer et strukturelt gulv med undervisningsmæssig kapacitetsopbygning.

### Hvorfor strukturelle løftestænger betyder mest

Interventioner kan sorteres efter **kausal evidens × strukturel rækkevidde × skalerbarhed × [[sustainability]]**. På dette grundlag rangerer de to *strukturelle* løftestænger højest, fordi de virker, uanset om studerende vælger den rette adfærd - de begrænser omgivelserne i stedet for at afhænge af indre motivation. De *undervisende* løftestænger er afgørende, men kun effektive, når studerende køber ind, så de behandles som andet niveau trods deres begrebsmæssige potentiale. [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher og Calderon (2025)]] løfter det strukturelle argument et niveau op og behandler styring frem for studerendes adfærd som den bindende begrænsning og foreslår en ramme med 130 integritetsindikatorer, så akademiske ledere kan se, om evalueringen er autentisk, om studerende kendes individuelt af de undervisere, der bedømmer dem, og om integritet indgår i introduktion og studiestart. Deres reformer retter sig mod styringsarkitekturer, mennesker og [[ai-technologies|teknologier og ressourcer]], og de foreslår at låne [[guardrails|red teaming]] fra cybersikkerhed for at afdække sårbarheder i evalueringen, før studerende finder dem - en påmindelse om, at det strukturelle gulv vedligeholdes af institutioner, der både har brug for informationen og viljen til at vedligeholde det.

### Niveau 1 - direkte dokumenteret til at reducere læringsskade

**Guardrail-design af AI-værktøjer ('hint-ikke-svar' [[scaffolding]]).** I vidensbasens stærkeste kausale fund viste et felt-[[rct]], at en ubeskyttet ChatGPT-lignende tutor hævede præstationen i assisteret øvelse med **+48 %**, men sænkede karakteren ved eksamen uden hjælp med **-17 %**, mens en guardrail-beskyttet tutor (hints i stedet for svar, plus lærerproduceret probleminformation) eliminerede skaden helt. Det forhindrer mekanisk den svar-kopierende 'krykke'-adfærd, der ligger bag skaden. Aktiviteter omfatter hint-ikke-svar-tutoring, at pode prompts med korrekte løsninger og almindelige [[misconceptions]] og at kræve et studerendeforsøg, før AI-output afsløres.

**At tilbageholde svaret beskytter i sessionen uden at opbygge færdigheden.** [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al. (2026)]] tilbageholdt den samlede position i en [[agentic-ai|multi-agent]]-debat og skar skift til en forkert AI-position ned fra 42-60,5 % til 5,7-8,2 %, men fandt ingen læringseffekt inden for sessionen (β = 0,03, p = 0,18) - guardrailen holdt, mens den var på plads, og lod usupporteret dømmekraft uændret.

**Redesign af evaluering (AI-resistente + uassisterede mål).** Fordi skaden ved misbrug afhænger af evalueringen - den viser sig ved overvågede, lukkede bogs- og uassisterede mål, mens den oppuster almindeligt bedømt kursusarbejde - ændrer det, der tæller som præstation, både afskrækker misbrug og bringer det frem i lyset. Aktiviteter omfatter uassisterede eksamener og mundtlige forsvar i undervisningen, krav om procesartefakter (kladder, refleksioner, annoteret ræsonnement), belønning af ræsonnement frem for overfladisk sproglig flyden og udpegning af AI-frie zoner. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] giver kravet om procesartefakter et konkret instrument: påbudte versionshistorikker og reproducerbare analysedokumenter, så en mistænkt aflevering kan undersøges som en tidslinje for, hvordan arbejdet udviklede sig, og mængden af fabrikeret materiale, en studerende skulle generere, stiger langt ud over, hvad outsourcing sparer dem. Storskala-feltevidens understreger dette: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei, & Wu (2026)]] fandt, at lektieoutsourcing hævede lektiekarakterer med 18 %, mens den *sænkede* karakterer ved lukket bogs eksamen med 20 % - præcis det signal, uassisterede, overvågede mål er designet til at afdække, og studiet anbefaler at vægte lukket bogs eksamen på stedet tungere. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall og Parapadakis (2025)]] giver samme logik sin mest eksplicitte formulering om situationsbestemt kriminalitetsforebyggelse og argumenterer for, at svigten tilhører evalueringer, en model kan besvare overbevisende, snarere end studerende, og rapporterer en case, hvor 25 forebyggelsesteknikker anvendt på et australsk business-capstone - sporede studerendeinteraktioner, rød-flag-detektion af for ekspert arbejde, tilfældig omfordeling af teams, ugentlige overvågede tests i undervisningen, nedtagningsmeddelelser for kursusmateriale, studerende havde offentliggjort - efter sigende skar sager om forseelse ned fra 183 til 27 inden for et år. Deres anvisninger er motiverende snarere end undersøgende: hæv det oplevede formål med evalueringen, opbyg [[self-efficacy]], og øg den oplevede sociale omkostning ved snyd, idet forfatterne advarer om, at det vil fejle kun at adressere en eller to af de tre, understøttet af fem fagligt specifikke redesigns, der omdanner tidsbegrænsede problemløsningseksamener til åbne bogs [[problem-solving|problemløsning]] med en skriftlig refleksion over den studerendes egen proces, summative essays til [[collaborative-learning|kollaborative]] arkivforskningsprojekter og [[eportfolio|porteføljer]] til iterative, peer-reviewede designprocesser.

De strukturelle løftestænger har en håndhævelsesarm, og dens evidensgrundlag er svagere, end dens rækkevidde antyder. [[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] kodede 1.162 sager om forseelse med generativ AI og fandt, at den evidens, der oftest blev henvist til på anklagetidspunktet - [[ai-detection|detektor]]output, lighedsrapporter, AI-typiske indholdsmønstre - havde den svageste bevisværdi, mens optagelsesmateriale, observeret eksamensadfærd og uafhængigt verificerede fabrikerede referencer var de stærkeste; fordi institutionelle procedurer ikke sætter nogen mindste tærskel for bevis, havde evidensens kvalitet ingen pålidelig sammenhæng med sagens udfald, og studerende, hvis sager hvilede på tynd evidens, havde hovedsagelig klageadgang som udvej. [[wright-transcription-not-generation-2026|Wright (2026)]] viser en anden omkostning ved samme upræcision: forbud, der er formuleret omkring "generativ AI" snarere end omkring funktion, rammer værktøjer, der blot konverterer formatet af arbejde, en studerende allerede har forfattet, så transskriptionsbaseret brug alene kan sanktioneres som forseelse - en overinkludering, der rammer hårdest på handicappede og [[equity-in-ai-education|ligestillings]]udsatte [[learners]] og intet gør for [[assessment-validity|validiteten]]. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana, Mtshali og Mchunu (2026)]] tilføjer, at [[remote-proctoring|fjernovervågning]], den mest udbredte integritetskontrol, begrunder sin afskrækkelseseffekt med, hvordan studerende siger, de har det, snarere end med reduceret forseelse, og påfører angst, koncentrationstab og infrastrukturbetinget udelukkelse, som der ikke er vist at være svar på lavere misbrug. [[li-genai-assessment-language-equity-2026|Li (2026)]] tilføjer regelsdesign-dimensionen: fordi samme grænseflade udfører tilladt sprogredigering og forbudt substantiv udarbejdelse, pålægger udifferentierede GenAI-regler skævt fordelte efterlevelsesbyrder på studerende, der bruger engelsk som ekstra sprog, så den mere forsvarlige forebyggelse er en formålsbaseret grænse mellem støtte og substitution forankret i evalueringskonstruktet, med kalibreret deklaration, proportionalitet fordelt over tærskel-, bevis- og sanktionsbeslutninger, og designløftestænger - etapedelte afleveringer, kort konstruktionsaligned mundtlig verifikation, kritikbaserede spørgsmål - der gør det arbejde, detektion ikke kan. Forebyggelse skal også dække bedømmeren selv: [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026)]] red-team-evaluering fandt, at to af fem indirekte prompt-injektionsstrategier indlejret i en afleveringsfil hævede et dumpet essay til bestået uden at blive opdaget, med rapporterede succesrater på 100 % og 94 %, så hvor AI-værktøjer bedømmer studerendes arbejde, hører [[human-in-the-loop-ai|menneskelig gennemgang]], klarere adskillelse af instruktioner fra afleveret indhold og robusthedstest til det strukturelle gulv snarere end til et valgfrit niveau.

### Niveau 2 - stærk rammemæssig understøttelse, højt potentiale

**Stilladserede brugssekvenser: tænk først, AI derefter, reflektér til sidst.** Otte designprincipper for at integrere LLM'er uden at fortrænge [[critical-thinking]]: bevar kognitiv friktion, positionér AI som en foreløbig tænkepartner snarere end en autoritet, indlæg evalueringscheckpoints, kræv [[metacognition|metakognitiv]] journalføring og promptlogs, og balancér AI-formidlede med AI-frie faser. Korrelationel evidens (selvstændigt arbejde før AI giver stærkere output) er stærk; det er den pædagogisk komplette version af Niveau 1.

**[[ai-literacy|AI-kompetence]] og [[prompt-engineering|prompt]]-kompetence med bevidst øvelse og umiddelbar [[feedback]].** Et [[k-12]]-modul, der brugte scenariebaseret promptøvelse med en [[llm]]-automatbedømmer, forbedrede faktiske promptfærdigheder og hævede tilliden til at bruge AI til læring med **+10,4 %**, hvor 87 % rapporterede, at de havde lært at bruge AI ansvarligt. Dokumenterede færdighedsgevinster; det åbne spørgsmål er, om de omsættes til [[learning-gains|læringsudbytte]] længere fremme. Det adresserer også [[equity-in-ai-education|ligestillings]]gabet i tidligere AI-adgang.

**Strukturerede rammer for AI-brugsdeklaration.** At erstatte generiske "jeg brugte AI"-afkrydsningsfelter med [[discipline-specific-aied|domænespecifikke]] deklarationer, der knytter brug til kognitive stadier (strukturel planlægning vs. indholdsgenerering), tvinger refleksion over læringsprocessen og tydeliggør grænsen mellem acceptabel støtte og forseelse, hvilket flytter vægten fra kontrol til professionel praksis.

Undervisende løftestænger ser igen anderledes ud, når integritet behandles som en praksis, der skal undervises i, snarere end en regel, der skal håndhæves. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] argumenterer for, at detektions- og verifikationsbaserede integritetsregimer er ude af trit med GenAI-forstærket arbejde, og omformulerer integritet som pædagogisk praksis udøvet gennem [[evaluative-judgment|evaluerende dømmekraft]] - den studerendes evne til at veje muligheder, begrunde akademiske valg og tage ansvar under usikkerhed - gjort synlig gennem artefakter som annoterede beslutningsspor, dokumenteret verifikation, mundtligt forsvar og versionshistorik fra kladde til kladde, med detektion degraderet til et supplerende lag snarere end den primære infrastruktur. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa og Mezgebu (2026)]] finder samme åbning fra de studerendes side: på tværs af 27 interview på et etiopisk [[higher-ed|universitet]] var brugen næsten universel, de fleste deltagere tilskrev GenAI højere præstation, og den skarpeste klage gik den anden vej - AI-brugere scorede højere end flittige uafhængige arbejdere, hvilket deltagerne beskrev som demotiverende. Forfatterne konkluderer, at studerendes overbevisninger forudsiger etisk brug stærkere, end institutionelle regler gør, så bevidsthed, klar politik og redesign af evaluering skal komme samtidigt - hvilket er sidens undervisende niveau formuleret som en betingelse: kapacitetsopbygning ændrer kun adfærd gennem [[framing-ai-use-for-students|opbakning fra de studerende]] ledsaget af et strukturelt gulv. [[ji-student-voices-academic-integrity-scoping-2026|Jis (2026)]] [[meta-analysis-systematic-review|scoping-gennemgang]] af 38 studier af studerendes stemmer leverer felt-niveau-versionen af samme konklusion: de gennemgåede studier konvergerer mod et skift fra retrospektiv detektion til proaktiv etisk ræsonnement, mod at undervise i AI-etik og AI-plagiat i [[curriculum-design|læseplanen]] snarere end i enkeltstående [[ai-literacy|kompetence]]sessioner, og mod detaljerede retningslinjer samskabt af ledere, undervisere og studerende, fordi uklar vejledning læses som stiltiende tilladelse snarere end som forsigtighed. Jis egen læsning er, at ejerskab og moralsk ræsonnement motiverer studerende mere end frygt for straf, og at studerende hverken er passive modtagere af GenAI eller skyldige uden moralsk bånd, men moralske agenter, der arbejder i en gråzone - dette niveaus præmis, formuleret som et fund.

### Niveau 3 - lovende, lavere direkte kausal evidens

**Metakognitive og selvevalueringsinterventioner.** Reflekterende journaler, promptlogs og kalibreringstræning genopbygger den "fraværende kognitive baseline" hos AI-native studerende, som ikke kan lokalisere deres egen kognitive grænse, fordi AI-genereret sproglig flyden slører den. Begrebsmæssigt centralt, men endnu ikke kausalt testet.

**Motivationsredesign.** Fordi AI-tilgængelighed eroderer [[motivation|autonom motivation]] ("hvorfor gøre en indsats?"), rammer omstrukturering af opgaver omkring mål, AI ikke kan opfylde, og omkring [[agency|studerendes agens]] direkte den udholdenhedserosion, der forstærker den direkte skade.

**Kritisk AI-kompetence.** En magt-viden-indramning, der lærer studerende at afhøre, udfordre og deltage i [[governance|AI-styring]] snarere end at forbruge den. Langsigtet, ligestillingsorienteret og strukturel i sine ambitioner, selv om dens læringseffekter i vid udstrækning er utestede.

**At genkende [[ai-sycophancy|sycophancy]] for at forhindre ukritisk accept.** Fordi [[ai-sycophancy|sycophantisk]] AI bekræfter snarere end udfordrer brugeren, er den en direkte misbrugsvektor: studerende, der får bekræftende tilslutning til forkert tænkning, tilskyndes til at erstatte deres eget [[cognitive-offloading|kognitive arbejde]] med AI. [[contextual-sycophancy-ai-literacy|Kontekstuel sycophancy]] viser, at AI-kompetence og prompttræning reducerer, men ikke eliminerer fejlløkken, så forebyggelse af misbrug skal parre undervisende genkendelsestræning med design af korrigerende friktion på systemniveau (se guardrails i Niveau 1).

- **[[desirable-difficulties|Produktiv friktion]] og pædagogisk funktion.** Sydneys hurtige review argumenterer for, at GenAI underminerer læring, når det lader studerende omgå den kognitive og metakognitive friktion, der er nødvendig for at lære, og at formålstjenligt designede værktøjer indfører *produktiv friktion* (tilbageholder svar, opfordrer til forklaring). Det skelner mellem fire pædagogiske funktioner - at lære *af*, *med*, *om* eller *ved at forme* GenAI - hver med forskellige krav til agens og evaluering.([[young-people-learning-generative-ai-rapid-review-2026]])

## Almindelige fejlopfattelser

**"At undervise studerende i risiciene er den vigtigste løftestang mod misbrug."** Det er den løftestang, der afhænger af, at den studerende samarbejder, hvilket er grunden til, at den her rangerer under de strukturelle. Guardrails og redesign af evaluering virker, uanset om en studerende vælger den rette adfærd; undervisende tilgange virker kun med opbakning. Skellet er ikke moralsk, men mekanisk - ændrede omgivelser begrænser adfærden direkte, mens en ændret overbevisning skal overleve natten før deadline.

**"Hvis en guardrail holder i sessionen, er læringen sikret."** At holde og at undervise er separate udfald, og korpus indeholder et rent dobbeltresultat. At tilbageholde den samlede position i en [[agentic-ai|multi-agent]]-debat skar studerendes skift til en forkert AI-position ned fra 42-60,5 % til 5,7-8,2 % - en stor beskyttende effekt - men gav **ingen læringseffekt inden for sessionen** (β = 0,03, p = 0,18). Skinnerne gjorde deres arbejde som skinne og blev ikke til undervisning. At designe til forebyggelse af misbrug er ikke det samme som at designe til læring.

**"At opdage misbrug og straffe det er en forebyggelsesstrategi."** Forebyggelse skal også dække bedømmeren selv. [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026)]] red-team-evaluering fandt, at to af fem indirekte prompt-injektionsstrategier indlejret i en afleveringsfil hævede karakteren for et dumpet essay. En pipeline, der opdager studerendes misbrug, men stoler på uundersøgt afleveringsindhold, er kun forsvaret på den ene side.

**"Misbrug er et spørgsmål om studerendes motivation."** [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher og Calderon (2025)]] løfter den bindende begrænsning et niveau op og behandler styring snarere end studerendes adfærd som det, der skal ændres, og foreslår en ramme med 130 integritetsindikatorer. Og læringsskaden er målbar i stor skala: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei og Wu (2026)]] fandt, at lektieoutsourcing hævede lektiekarakterer med 18 %, mens den *sænkede* karakterer ved lukket bogs eksamen med 20 % - en designfejl, der viser sig præcis i det gab, denne side handler om.

## Implementeringsvejledning efter rolle

**For undervisere og kursteams**

- Start med evalueringen, ikke med politikteksten. Spørg ved hver bedømt opgave, om den uassisterede version ville vise det, du vil certificere, og ret opgaven først - det er den løftestang, der ikke kræver studerendes samtykke.
- Tag hint-ikke-svar-værktøjer i brug, hvor en AI-tutor er tilgængelig, da felt-RCT'en om beskyttet versus ubeskyttet tutoring er det stærkeste kausale evidens i området.
- Kontrollér, at din egen bedømmelsespipeline modstår injicerede instruktioner i afleverede filer, før du behandler studerendes misbrug som den eneste trussel.
- Behandl AI-tilladt og uassisteret præstation som to forskellige målinger; opdelingen på 18 %/20 % ovenfor er usynlig, medmindre du indsamler begge.

**For udviklere**

- Byg begrænsningen ind i grænsefladen snarere end i en advarsel. En tutor, der kan producere det færdige svar, vil under deadline-pres producere det færdige svar.
- Slut ikke fra overholdelse af guardrailen til læring. Debatresultatet viser, at adfærden holdt, mens læringsmålene forblev flade, så instrumentér udfald separat fra interaktioner.
- Vis misbrugssignaler til undervisere som diagnostik snarere end som domme, da styringsindramningen i evidensen ligger over den enkelte studerendes adfærd.

**For administratorer og beslutningstagere**

- Placer den bindende begrænsning, hvor evidensen placerer den. Indikatorer og styringsstrukturer adresserer omgivelserne; formaninger til studerende adresserer den person, der er mindst i stand til at ændre institutionelt design.

## Forbundne begreber

- [[ai-misuse-learning-harm]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[assessment]]
- [[ai-literacy]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[motivation]]
- [[prompt-engineering]]
- [[ai-sycophancy]]
- [[trust-calibration]]
- [[framing-ai-use-for-students]]
- [[cognitive-surrender]]

## Forbundne artikler

- [[ivory-psychology-assessment-integrity-2026]] — Versionskontrollerede evidensspor og reproducerbare analysedokumenter som afskrækkelse mod misbrug (Ivory et al. 2026)
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — At tilbageholde en anbefaling forebyggede i vid udstrækning overafhængighed uden at opbygge den dømmekraft, den beskytter
- [[generative-ai-guardrails-harm-learning]] — GenAI uden guardrails kan skade læringen
- [[genai-performance-vs-learning]] — At skelne præstationsgevinster fra læring
- [[ai-assessment-scale-reform]] — AI Assessment Scale og reform af evaluering
- [[critical-thinking-genai-scaffolding]] — At stilladsere kritisk tænkning med generativ AI
- [[aaai2026-prompting-literacy-k12]] — At lære at bruge AI til læring (K-12 AI-kompetencemodul)
- [[genai-declaration-frameworks-higher-education]] — At strukturere gennemsigtighed: rammer for GenAI-deklaration
- [[absent-cognitive-baseline-2026]] — Den fraværende kognitive baseline
- [[ai-literacy-power-knowledge]] — AI-kompetence: en øvelse i magt-viden
- [[contextual-sycophancy-ai-literacy]] — Den skjulte omkostning ved kontekstuel sycophancy: en AI-kompetenceintervention
- [[sycophantic-ai-social-interaction-2026]] — Sycophantisk AI gør menneskelig interaktion mere anstrengende og mindre tilfredsstillende over tid
- [[ssaho-ai-academic-integrity-review-2025]] — Kulturopbygning og redesign af evaluering frem for detektionskontrol
- [[young-people-learning-generative-ai-rapid-review-2026]] — Kognitiv overgivelse, produktiv friktion og metakognitiv ulighed
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — At gentænke mundtlige eksamener som autentisk, AI-resistent evaluering
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Læringsstraffen ved generativ AI: lektieoutsourcing skader læringen
- [[ai-overreliance-complex-adaptive-system-2026]] — Overafhængighed af AI modelleret som et komplekst adaptivt system
- [[burneo-can-edtech-close-learning-gaps-2026]] — Fjernede guardrails skadede uden at forbedre eksamenskarakterer
- [[munoz-misconduct-allegation-evidence-2026]] — Hvad sagsmapper om forseelse faktisk indeholder af evidens
- [[wright-transcription-not-generation-2026]] — Overinkluderende AI-regler og de studerende, de rammer
- [[sharma-judgment-visible-genai-assessment-2026]] — Integritet som evaluerende dømmekraft snarere end efterlevelse
- [[mulisa-students-genai-integrity-perspectives-2026]] — Studerende om, hvorvidt GenAI er et snyderværktøj eller en læringspartner
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Hvad fjernovervågning gør ved studerende og ved ligestilling
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — Situationsbestemt kriminalitetsforebyggelse mod AI-faciliteret snyd: 183 til 27 sager og fem fagligt specifikke redesigns (Leaton Gray, Edsall & Parapadakis 2025)
- [[ji-student-voices-academic-integrity-scoping-2026]] — Hvad 38 studier af studerendes stemmer anbefaler: samskabt klarhed og undervisende ræsonnement frem for detektion (Ji 2026)
- [[li-genai-assessment-language-equity-2026]] — Hvor sprogstøtte slutter, og substitution begynder for EAL-skrivere (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt-injektion som misbrugsvektor mod AI-bedømmelse (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Styring som den bindende begrænsning for integritet: en ramme med 130 indikatorer (Coates, Croucher & Calderon 2025)
