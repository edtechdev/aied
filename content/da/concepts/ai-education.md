---
title: "AI i uddannelse"
created: "2026-10-15T14:22:00-04:00"
updated: "2026-10-27T04:14:20-04:00"
type: concept
foundations: [ai-education, ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
ethics: [equity-in-ai-education]
audience: [instructors, learners, faculty developers, administrators]
level: [higher ed, k 12]
connected_faqs: [top-10-findings-ai-education-instructors]

confidence: high
institutions: [educational-policy-ai]
reviewed_by: [editor]
translation_of: "concepts/ai-education"
source_updated: "2026-10-26T02:30:00-04:00"
translation_note: "*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-15"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---
*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

> **AI i uddannelse (AIED)** — det brede, tværfaglige felt, der anvender kunstig intelligens til undervisning og læring, og som undersøger dens design, anvendelse, evaluering og konsekvenser. Som vidensbasens paraplybegreb omfatter AI i uddannelse både **AI til uddannelse** (brug af AI til at forbedre undervisning og evaluering) og **uddannelse om AI** (udvikling af AI-kompetencer og kritisk forståelse). Feltet befinder sig i skæringspunktet mellem undervisningsteknologi, de [[learning-sciences|læringsvidenskaber]] — det empiriske forskningsfelt, der spørger, om den studerende har forandret sig, snarere end kun om et værktøj virkede — datalogi, [[educational-policy-ai|uddannelsespolitik]], [[ethics|etik]] og [[equity-in-ai-education|ligestilling]]. Denne side er en introduktion til feltet og et kort over alle begreber, som vidensbasen dækker.

## Spørgsmål at overveje

- 'AI i uddannelse' spænder over to retninger: AI til uddannelse (brug af AI til at forbedre undervisningen) og uddannelse om AI (opbygning af kompetencer og kritisk forståelse). Hvilken er mest bekendt for dig, og hvilken har du tendens til at overse?
- Feltets historie skildres som en tilbagevendende spænding mellem kontrol og elevhandlingsrum. Når du ser på, hvordan AI-værktøjer tages i brug, hvor bemærker du den samme spænding i dag?
- AI i uddannelse befinder sig i skæringspunktet mellem teknologi, læringsvidenskab, politik, etik og ligestilling. Hvilke af disse briller bruger du naturligt, når du vurderer et AI-værktøj — og hvilke er du tilbøjelig til at glemme?
- Denne vidensbase organiserer feltet i grene: pædagogik, læringsteorier, teknologier, fag, evaluering, feedback, interessenter og styring. Hvis du skulle kortlægge din egen brug af AI, hvilken gren ville du befinde dig i?
- AIED omfatter at undervise elever i kritisk brug af AI som et mål i sig selv. Er AI i din sammenhæng mere et fag, der skal undervises i, eller et værktøj, der skal bruges — og afspejler denne balance det, de studerende faktisk har brug for?
- Elever kan lære AI-kompetence ved at bruge AI kritisk, ikke kun ved at lære om AI. Hvordan kunne praktisk, kritisk brug opbygge en forståelse, som passiv undervisning ikke kan?

## Introduktion

AI i uddannelse er den paraply, som alle andre begrebssider tilsammen definerer. Vidensbasen organiserer feltet i de store grene nedenfor, der hver især knytter sig til de relevante begrebssider.

Et banebrydende [[history-of-aied|historisk]] perspektiv fra **[[mishra-control-vs-agency-history-2025|Mishra et al.]]** sporer AIED fra kybernetik og Dartmouth-konferencen i 1956 gennem [[intelligent-tutoring|kognitive vejledere]] og Paperts [[constructivist|konstruktionisme]], idet de argumenterer for, at dagens [[generative-ai|GenAI]]-debatter genskaber feltets grundlæggende spænding mellem kontrol og [[agency|handlingsrum]].

## Sådan er vidensbasen organiseret: paraplysiderne

Vidensbasens dækning af begreber er forankret i flere **paraplysider**, der grupperer relaterede begreber i navigerbare grene. Disse er gode indgangspunkter til at udforske feltet:

- **AI i uddannelse** — denne side, feltets overblik og kort over al dækning.
- **[[ai-literacy|AI-kompetence]]** — paraplyen for at forstå, bruge og kritisk vurdere AI, omfattende [[prompt-engineering|promptkonstruktion]], [[critical-thinking|kritisk tænkning]], [[ethics|AI-etik]] og [[reducing-ai-misuse|ansvarlig brug]]. Sammen med den indrammer [[human-ai-collaboration|menneske–AI-samarbejde]] og [[agentic-ai|agentbaseret AI]], hvordan mennesker og AI arbejder sammen.
- **[[pedagogy|Pædagogikker og undervisningsstrategier]]** — paraplyen for, hvordan undervisning foregår: de undervisningsmetoder og -strategier, som AI opererer inden for ([[active-learning|aktive]], [[collaborative-learning|samarbejdsbaserede]], [[project-based-learning|projektbaserede]], [[problem-based-learning|problembaserede]], [[experiential-learning|erfaringsbaserede]], [[game-based-learning|spilbaserede]], [[socratic-method|sokratiske]], [[scaffolding|stilladsning]] og flere), herunder den særlige kontekst [[online-teaching-and-learning|online undervisning og læring]].
- **[[learning-theories|Læringsteorier]]** — paraplyen for, hvordan læring foregår: de teoretiske rammer ([[behaviorism|behaviorisme]], [[cognitive-psychology|kognitivisme]], [[constructivist|konstruktivisme]], [[sociocultural-learning|sociokulturelt]], kognitive, [[motivation|motiverende]]), der former AI-design og -evaluering.
- **[[ai-technologies|Teknologier]]** — paraplyen for det tekniske lag: AI-systemerne ([[llm|LLM'er]], [[generative-ai|generativ AI]], [[multimodal]], [[educational-robotics|robotik]]) og teknikkerne ([[rag]], [[prompt-engineering|promptkonstruktion]], [[reinforcement-learning|forstærkende læring]], [[llm-training-and-fine-tuning|modeltræning]], [[agentic-ai|agentbaseret orkestrering]]), der driver AIED. Elevmodelleringsfamilien — [[knowledge-tracing|videnssporing]], [[cognitive-diagnosis|kognitiv diagnose]], [[simulating-students|simulering af elever]] og de systemer, der forbruger dem ([[intelligent-tutoring|intelligent undervisning]], [[adaptive-learning|adaptiv læring]], [[personalized-learning|personaliseret læring]]) — er grupperet under paraplyen [[student-modeling|Elevmodellering og adaptiv undervisning]] inden for dette tekniske lag.
- **[[discipline-specific-aied|AI i fagene]]** — paraplyen for, hvordan AI anvendes på tværs af fagområder ([[math-education|matematik]], [[physics-education|fysik]], [[language-learning|sproglæring]], [[cs-education|datalogi]], [[writing-education|skriftlig fremstilling]], [[stem-education|STEM]], [[engineering-education|ingeniørvidenskab]], [[business-education|erhvervsliv]], [[teacher-education|læreruddannelse]], [[medical-education|sundhedsfag]] og flere) — og, forbi de akademiske fag, den professionelle og anvendte gren, der vurderer demonstreret praksis frem for korrekthed ([[nursing-education|sygepleje]], [[information-technology|informationsteknologi]], [[vocational-education|erhvervsuddannelse og -træning]], [[design-education|designuddannelse]]) — og uddannelsesniveauer ([[k-12]], [[higher-ed|højere uddannelse]], [[adult-learning|voksenlæring]]).
- **[[assessment]]** (med de [[formative-assessment|formative]], [[summative-assessment|summative]], [[authentic-assessment|autentiske]], [[oral-assessment|mundtlige]] og [[automated-assessment|automatiserede]] grene) — paraplyen for, hvordan AI både evaluerer elever og omformer evalueringens validitet og integritet.
- **[[feedback]]** — paraplyen for, hvordan feedback genereres, leveres og bruges: feedbackloopet, [[ai-feedback-quality|feedbackkvalitet]], [[feedback-literacy|feedback-kompetence]] og dets evalueringskontekster ([[formative-assessment|formativ]], [[peer-assessment|medelever]], [[automated-assessment|automatiseret]]).
- **[[stakeholders|Interessenter i AI-uddannelse]]** — paraplyen for, hvem aktørerne er: elever, [[teacher-role|lærere]], [[learning-design|læringsdesignere]], [[administrator|administratorer]] og [[educational-policy-ai|politiske beslutningstagere]].
- **[[ai-ed-evaluation|Evaluering af AI-undervisning]]** og **[[research-methods-aied|forskningsmetoder]]** — paraplyerne for, hvordan vi ved, om AI virker: effektivitetsstudier, [[benchmark|benchmarks]], [[rct|randomiserede kontrollerede forsøg]], [[meta-analysis-systematic-review|meta-analyse]] og [[learning-gains|læringsgevinster]] som det centrale udfaldsmål. Læsere bør også veje de [[limitations-in-aied-research|tværgående begrænsninger af denne evidens]].
- **[[governance|AI-styring]]**, **[[educational-policy-ai|uddannelsespolitik for AI]]** og **[[equity-in-ai-education|ligestilling]]** — paraplyerne for det institutionelle, regulatoriske og rimelighedslag (se også [[regulation|regulering]] og [[privacy|privatliv]]).

Disse paraplysider er knyttet til i afsnittene nedenfor; hver gren nedenfor nævner både sin paraply og dens bestanddele.

## To dimensioner af AI i uddannelse

Forskning i AI i uddannelse spænder over to indbyrdes forbundne retninger:

- **AI til uddannelse** — brug af AI-systemer til at styrke undervisning, læring, evaluering og administration. Dette omfatter [[intelligent-tutoring|AI-vejledning]], [[adaptive-learning|adaptiv læring]], [[personalized-learning|personaliseret læring]], [[automated-essay-scoring|automatisk vurdering af opgaver]], [[automated-question-generation|automatisk generering af spørgsmål]], [[automated-assessment|automatisk evaluering]], [[formative-assessment|formativ evaluering]], [[learning-analytics|læringsanalyser]] og [[feedback|feedback-loops]].
- **Uddannelse om AI** — at undervise elever og undervisere i at forstå, bruge og kritisk vurdere AI. Kernen er [[ai-literacy|AI-kompetence]], understøttet af [[prompt-engineering|promptkonstruktion]], [[critical-thinking|kritisk tænkning]], [[ethics|AI-etik]], [[governance|undervisning i styring]], digital kompetence og [[reducing-ai-misuse|ansvarlig brug]].

Disse to dimensioner er ikke adskilte: [[ai-literacy|at bruge AI godt]] kræver forståelse af det, og undervisning om AI beriges af at bruge det. Dette [[human-ai-collaboration|menneske-AI-samarbejde]] er et centralt tema.

## Grundlaget for AI i uddannelse

Feltets tværgående og grundlæggende begreber forankrer vidensbasens dækning og står først i sidepanelet. De åbner med en gruppe med **Essentials** — de begreber, enhver læser bør starte med: selve paraplyen, [[misconceptions|fejlopfattelser om AI]], [[ai-literacy|AI-kompetence]], [[agentic-ai|agentbaseret AI]], [[cognitive-offloading|kognitiv udlicitering]], [[framing-ai-use-for-students|hvordan AI-brug indrammes for elever]], [[reducing-ai-misuse|reduktion af AI-misbrug]], [[academic-integrity|akademisk integritet]], [[teacher-role|undervisning]], [[learning-design|læringsdesign]] og [[educational-development|uddannelsesudvikling]]. Grenen **field** dækker derefter [[history-of-aied|feltets historie]], de [[limitations-in-aied-research|tværgående begrænsninger af evidensgrundlaget]], [[philosophy-of-ai-in-education|dets filosofi]], kortet over [[theories-and-frameworks|teorier og rammer]] og [[theory-development-aied|teoriudvikling]]. De tværgående temaer — [[human-ai-collaboration|menneske–AI-samarbejde]], [[agency|elevens handlingsrum]], [[learner-identity|elevidentitet]], [[design-thinking|designtænkning]], [[curriculum-design|kurrikulumdesign]], [[critical-thinking|kritisk tænkning]] og [[computational-thinking|datategning]] — gennemskærer alle grene, fordi de unøjagtige mentale modeller, mennesker har om AI, ligger opstrøms for [[ai-misuse-learning-harm|misbrug]] og underkalibreret [[trust-calibration|tillid]].

## Læring og undervisning

Hvordan AI understøtter undervisning og læring, er hjertet af feltet. Nøglebegreber omfatter:

- **Kernepædagogikker:** [[pedagogy|pædagogikker og undervisningsstrategier]] — paraplyen for vidensbasens dækning af undervisningsmetoder — sammen med [[pedagogical-patterns|pædagogiske mønstre]] (de afprøvede sekvenser, disse metoder løser sig i), [[active-learning|aktiv læring]], [[collaborative-learning|samarbejdslæring]], [[group-work|gruppearbejde]], [[project-based-learning|projektbaseret læring]], [[problem-based-learning|problembaseret læring]], [[productive-failure|produktivt nederlag]], [[inquiry-based-learning|undersøgelsesbaseret læring]], [[experiential-learning|erfaringsbaseret læring]], [[game-based-learning|spilbaseret læring]], [[learning-by-teaching|læring gennem undervisning]], [[scaffolding|stilladsning]], [[socratic-method|den sokratiske metode]], [[critical-pedagogy|kritisk pædagogik]], [[pedagogical-partnerships|pædagogiske partnerskaber]], [[storytelling-in-education|fortælling]], [[learning-design|læringsdesign]], [[online-teaching-and-learning|online undervisning og læring]] og [[video-education|video i uddannelse]].
- **Læringsteorier og -processer:** paraplyen [[learning-theories|læringsteorier]] ([[behaviorism|behaviorisme]], [[cognitive-psychology|kognitivisme]], [[constructivist|konstruktivisme]], [[sociocultural-learning|sociokulturelt]], [[distributed-cognition|distribueret kognition]], [[situated-learning|situeret læring]], [[embodied-learning|legemliggjort læring]], [[community-of-inquiry|undersøgelsesfællesskab]]) sidder side om side med elevvendte processer som [[self-regulated-learning|selvreguleret læring]], [[self-determination-theory|teori om selvbestemmelse]], [[motivation|motivation]], [[self-efficacy|selvtillid]], [[self-directed-learning|selvstyret læring]], [[metacognition|metakognition]], [[desirable-difficulties|ønskværdige vanskeligheder]], [[transfer-of-learning|læringsoverførsel]], [[prior-knowledge|forudgående viden]], [[icap-framework|ICAP-kognitivt engagement]], [[refutation-text|modbevisningstekst]], [[retrieval-spacing-interleaving|genkaldelse, spredning og indfleksning]] og [[activity-theory-aied|aktivitetsteori]].
- **Elevengagement og -oplevelse:** [[student-engagement|elevengagement]], [[help-seeking|hjælpsøgning]], [[social-emotional-learning|social-emotionel læring]], [[well-being|trivsel]], [[creativity|kreativitet]], [[problem-solving|problem-løsning]], [[mastery-learning|mestringslæring]] og [[student-ai-interaction|elev–AI-interaktion]] former, hvordan elever faktisk møder og påvirkes af AI, mens de [[social-norms-ai-use|sociale normer, der fæstner sig omkring AI-brug]], bestemmer, hvor åbent noget af det kan diskuteres. Uden for kurset dækker [[student-support-and-success|elevstøtte og -succes]] det institutionsvendte arbejde — vejledning, opsøgende arbejde, henvisning og fordelingen af knappe støtteressourcer — hvor AI pålideligt flytter opgavefuldførelse, men ikke vedbliven eller færdiggørelse af uddannelsen.

## Teknologier og teknikker

Siden [[ai-technologies|Teknologier]] er paraplyen for det tekniske lag:

- **Modeller og teknikker:** [[generative-ai|generativ AI]], [[llm|store sprogmodeller]], [[rag|retrieval-augmented generation]], [[multimodal|multimodale modeller]], [[educational-nlp|uddannelses-NLP]], [[reinforcement-learning|forstærkende læring]], [[knowledge-graph|vidensgrafer]], [[educational-robotics|robotter i uddannelse]], [[conversational-ai|konverserende AI]], [[simulation]] og [[llm-training-and-fine-tuning|LLM-træning og finjustering]]. De underliggende metoder betyder også noget: [[machine-learning|machine learning]] er der, hvor disse systemer bygges, [[speech-and-voice-technologies|tale- og stemmeteknologier]] bærer mundtlig vejledning og sprogøvelser, [[visualization|visualisering]] dækker dashboards og visuel analyse til elever og undervisere, og [[virtual-and-augmented-reality|virtuel og augmenteret virkelighed]] er vært for immersiv øvelse, hvis visuelle lag modellen nu kan generere. Nyere interaktionsformer hører også hjemme her — mest prominent [[vibe-coding|vibe coding]], det naturligsprogsdrevne workflow, hvor brugeren specificerer et program ved at prompte en LLM og bedømmer den resulterende adfærd frem for at læse eller redigere kildekode. Det omformulerer [[cs-education|programmering]] som en handling af udtryk og verifikation og sænker barrieren for [[teacher-role|slutbrugere]], der bygger deres egne værktøjer. Integrationsdybdrammer som [[samr-model|SAMR]] og adoptionsteorier som [[technology-acceptance-model|TAM]] klassificerer, hvor dybt AI tages i brug, og hvor meget det transformerer opgaven.
- **Elevmodellering og adaptive systemer:** de tekniske systemer, der repræsenterer og tilpasser sig eleven, er grupperet under paraplyen [[student-modeling|Elevmodellering og adaptiv undervisning]] — [[knowledge-tracing|videnssporing]], [[cognitive-diagnosis|kognitiv diagnose]], [[simulating-students|simulering af elever]], [[intelligent-tutoring|intelligent undervisning]], [[adaptive-learning|adaptiv læring]], [[personalized-learning|personaliseret læring]], [[recommender-systems-and-learning-paths|anbefalingssystemer og læringsstier]], [[pedagogical-agent|pædagogiske agenter]], [[affective-tutoring|affektiv vejledning]], [[affective-computing|affektiv databehandling]], [[human-in-the-loop-ai|menneske-i-loopet-AI]] og [[learning-analytics|læringsanalyser]]. Disse befinder sig på det tekniske lag, fordi de er AI-systemerne selv, forskellige fra de pædagogikker, de udfolder.

## AI i fagene

AI anvendes på tværs af fag og uddannelsesniveauer. Vidensbasens [[discipline-specific-aied|overblik over AIEd i fagene]] kortlægger dækningen af fagområder — sammen med [[learning-sciences|læringsvidenskaberne]], som ikke er et undervist fag, men det tværgående forskningsfelt, der studerer læring i sig selv og behandler fagindhold som én variabel blandt andre:

- **Fagområder:** [[math-education|matematik]], [[physics-education|fysik]], [[chemistry-education|kemi]], [[biology-education|biologi]], [[cs-education|datalogi]], [[engineering-education|ingeniørvidenskab]], [[stem-education|STEM]], [[writing-education|skriftlig fremstilling]], [[language-learning|sproglæring]], [[english-education|engelskundervisning (EAP/EFL/ESL)]], [[science-education|naturvidenskabsundervisning]], [[business-education|erhvervsliv, økonomi og ledelse]], [[humanities-education|humaniora og samfundsvidenskaber]], [[arts-design-and-media-education|kunst-, design- og medieundervisning]], [[medical-education|medicinske og sundhedsfaglige uddannelser]], [[legal-education|juraundervisning]] og de professionelle og anvendte grene — [[nursing-education|sygepleje]], [[information-technology|informationsteknologi]], [[vocational-education|erhvervsuddannelse og -træning]] og [[design-education|designuddannelse]].

## Niveauer og kontekster

Det samme AI-værktøj møder meget forskellige settinger, og vidensbasen adskiller uddannelsesniveau fra pædagogik, så resultater ikke ubemærket overføres på tværs af dem: [[k-12|K-12-skoler]], [[early-childhood-elementary-ai-education|tidlig barndom og grundskolen]], [[higher-ed|højere uddannelse]], [[adult-learning|voksenlæring]], [[vocational-education|erhvervsuddannelse og -træning]], [[special-education|specialundervisning]] og [[teacher-education|læreruddannelse]]. Domæneadjacente begreber, der gennemskærer niveauer, omfatter [[universal-design-for-learning|universelt design for læring]], [[neurodiversity|neurodiversitet]], [[multilingual-learning|flersproget læring]] og [[social-emotional-learning|social-emotionel læring]].

## Evaluering og måling

AI forvandler både, hvordan vi evaluerer elever, og hvordan vi vurderer AI-systemer selv:

- **Evaluering og feedback:** [[assessment]], [[formative-assessment|formativ evaluering]], [[summative-assessment|summativ evaluering]], [[authentic-assessment|autentisk evaluering]], [[eportfolio|e-portfolio]], [[feedback]] og [[feedback-literacy|feedback-kompetence]], [[ai-feedback-quality|kvalitet af AI-feedback]], [[peer-assessment|medelevervurdering]], [[oral-assessment|mundtlig evaluering]], [[automated-assessment|automatisk evaluering]], [[automated-essay-scoring|automatisk vurdering af opgaver]] og [[automated-question-generation|automatisk generering af spørgsmål]]. Fordi en model nu kan producere plausibelt færdigt arbejde på forespørgsel, sætter vidensbasen den kompetence i første plan, der forbliver elevens egen: [[evaluative-judgment|evaluativ dømmekraft]], evnen til at vurdere kvaliteten af sit eget arbejde, kammeraters arbejde og AI-output mod begrundede kriterier. Det er den konstruktion, som flere feedback- og autentisk-evaluerings-studier konvergerer omkring — den hybride feedbackbetingelse, der overgår direkte AI-feedback i et multisite-eksperiment, bæredygtighedshullet i formativ AI-feedback og det praktiske greb om at vurdere de beslutninger, eleverne træffer, frem for kun artefaktet — og det er en kerneårsag til, at omdesignet i AI-tiden forskubber sig fra [[ai-detection|detektion]] mod opgaver, hvis integritet overstår inspektion. [[group-work|Gruppearbejde]] vurderes ligeledes langs både proces og produkt, hvor teams skal forhandle, hvis og hvilken slags AI-engagement, der tæller som acceptabelt.
- **Måling og validitet:** [[assessment-validity|evalueringsvaliditet]], [[psychometrically-aware-ai|psykometrisk bevidst AI]], [[educational-measurement|uddannelsesmåling]], [[item-response-theory|item-response-teori]], [[self-report-measures|selvrapporteringsmål]] (instrumentet bag en stor del af denne evidens og en tilbagevendende begrænsning), [[ai-detection|AI-detektion]], [[remote-proctoring|fjernovervåget eksamen]] og [[academic-integrity|akademisk integritet]].

## Forskningsmetoder og evaluering

Hvordan vi ved, om AI virker, er sin egen gren, og vidensbasen behandler den som en sådan:

- **Forskningsmetoder:** [[research-methods-aied|forskningsmetoder i AIED]] som paraply, med [[qualitative-research|kvalitative]], [[quantitative-research|kvantitative]], [[mixed-methods-research|mixed-methods]], [[design-based-research|designbaserede]] og [[usability-research|brugbarheds]] tilgange, plus [[rct|randomiserede kontrollerede forsøg]], [[meta-analysis-systematic-review|meta-analyse og systematisk gennemgang]] og [[network-analysis|netværksanalyse]].

Feltets eget forskningsarbejde er nu et emne i sin egen ret. [[ai-assisted-educational-research|AI-assisteret uddannelsesforskning]] dækker AI brugt som instrument til litteratursøgning, screening, kvalitativ kodning, analyse og skrivning, herunder praksisforskning som undervisnings- og læringsforskning. Det forbliver adskilt fra de designs, der bruges til at studere, hvad AI gør ved elever.

- **Evaluering af AI-systemer:** [[ai-ed-evaluation|evaluering af AI-undervisning]] og [[benchmark|benchmarks]] til at bedømme et systems kapacitet, med [[learning-gains|læringsgevinster]] som det udfald, der betyder noget, og de [[limitations-in-aied-research|tværgående begrænsninger]] af denne evidens og [[interpreting-and-applying-aied-research|hvordan man læser en enkelt studie]] som det advarende modvægt.

## Mennesker

AI i uddannelse ændrer rollerne for enhver interessent. Vidensbasens side [[stakeholders|Interessenter i AI-uddannelse]] er paraplyen, der dækker dem alle:

- **Elever:** [[student-experience|elevoplevelse]], [[career-development-and-readiness|karriereudvikling og -parathed]] og [[anxiety-and-stress|AI-angst og -stress]] former, hvordan de studerende møder AI.
- **Familier og lokalsamfund:** [[parents-and-families|forældre og familier]] er den målgruppe, som skoler oftest henvender sig til om AI, og den med mindst forskning bag vejledningen, så deres bekymringer hører hjemme i interessentbilledet snarere end uden for det.
- **Undervisere og undervisningsrammer:** [[teacher-ai-competency|lærerens AI-kompetence]], [[tpack|teknologisk pædagogisk fagkundskab (TPACK)]], [[samr-model|SAMR]] og [[educational-development|uddannelsesudvikling]] dækker forberedelse og støtte til undervisere.
- **Udbyggere:** [[educational-technology-developers|udviklere af uddannelsesteknologi]] — produktdesignerne, softwareudviklerne, læringsingeniørerne og analysedesignerne, der forvandler en modelkapacitet til noget, en institution kan indkøbe. De er en distinkt målgruppe adskilt fra praktikerne og administratorerne ovenfor, og de befinder sig uden for de institutioner, der indfører deres værktøjer, hvilket er grunden til, at standardindstillinger, co-design og vedligeholdelse efter finansiering vises i denne vidensbase som pædagogiske spørgsmål frem for kommercielle.

## Institutioner og politik

Det institutionslag, hvor AI-beslutninger faktisk træffes og forsvares: [[administrator|administratorer]] og institutionsledere, [[educational-policy-ai|uddannelsespolitik for AI]], [[governance|AI-styring]], [[change-management|forandringsledelse]] som arbejdet med at få en indførslen til at hænge sammen, [[regulation|AI-regulering]] og de indkøbs- og platformspørgsmål, der følger af [[technology-acceptance-model|teknologiadoption]], [[open-source|open source]] og [[edtech-platform|edtech-platforme]], sammen med [[lifelong-learning|professionel og livslang læring]] og [[professional-training|professionel træning]].

## Ligestilling, etik og ansvarlig brug

Retfærdighed, adgang og ansvar er centrale for AI i uddannelse:

- **Ligestilling og adgang:** [[equity-in-ai-education|ligestilling]], [[differential-effects-across-learner-groups|differentielle effekter på tværs af elevgrupper]] (spørgsmålet om, for hvem en resultat gælder), [[digital-divide|digital kløft]], [[bias-mitigation|begrænsning af bias]], [[culturally-relevant-pedagogy|kulturelt relevant pædagogik]], [[multilingual-learning|flersproget læring]], [[inclusive-learning|inkluderende læring]], [[accessibility|tilgængelighed]], [[assistive-technology|hjælpeteknologi]], [[neurodiversity|neurodiversitet]], [[universal-design-for-learning|universelt design for læring]] og studier af [[global-south|globale syd]].
- **Etik og ansvar:** [[ethics|AI-etik]], [[ai-misuse-learning-harm|AI-misbrug og læringsskade]], [[legal-issues-and-risks|juridiske spørgsmål og risici]], [[ai-use-disclosure|indberetning af AI-brug]], [[guardrails|sikkerhedsrammer]], [[privacy|privatliv]], [[hallucination-risk|hallucinationsrisiko]], [[ai-sycophancy|AI-smiger]], [[trust|tillid]], [[trust-calibration|tillidskalibrering]], [[reducing-ai-misuse|reduktion af AI-misbrug]], [[framing-ai-use-for-students|hvordan AI-brug indrammes for elever]], [[pedagogical-safety|pædagogisk sikkerhed]], [[sustainability|bæredygtighed]] og [[cognitive-offloading|kognitiv udlicitering]].

En [[meta-analysis-systematic-review|systematisk gennemgang]] af feltets etiklitteratur ([[agarwal-ethical-values-norms-aied-2026|Agarwal et al. 2026]], 25 artikler) konsoliderer AIED-etik i seks hovedetiske værdier — ikkediskrimination, dataforvaltning, menneskelig overvågning, velvillighed, forklarbarhed og uddannelsesmæssig egnethed — og kortlægger de etiske normer i en interessent-for-værdi-matrix. Den finder slutbrugere stort set passive i etiklitteraturen (elevstemmer praktisk talt fraværende) og opfordrer til at integrere etik i AIED-design og et større fokus på den uddannelsesmæssige (pædagogiske) dimension af AIED-etik.

## Nye og tværgående temaer

Flere temaer gennemskærer feltet:

- **Tillid og kritisk brug:** [[trust|tillid]], [[trust-calibration|tillidskalibrering]], [[ai-sycophancy|AI-smiger]], [[critical-thinking|kritisk tænkning]], [[cognitive-offloading|kognitiv udlicitering]], [[critical-pedagogy|kritisk pædagogik]] og [[reducing-ai-misuse|reduktion af AI-misbrug]] (se også [[framing-ai-use-for-students|hvordan AI-brug indrammes for elever]]). Hvordan elever og lærere beslutter at indføre og stole på AI, modelleres af forskning i [[technology-acceptance-model|teknologiaccept]], mens studier af [[global-south|globale syd]] fremhæver ligestilling og kulturel kontekst i adoptionen. Empirisk former det, hvordan AI forklarer sig selv, denne tillid: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] viste, at [[explainable-ai|forklarbar AI]] opbygger læreres tillid til AI-anbefalinger gennem forståelighed, hvor domænedrevne (kurrikulærsprogede) forklaringer har større tillid og accept end datadrevet feature-importance-output.
- **Feltets udvikling:** vidensbasen sporer AI i uddannelse fra tidlige [[intelligent-tutoring|intelligente vejledningssystemer]] og [[knowledge-tracing|videnssporing]] til LLM-drevet [[intelligent-tutoring|vejledning]], [[pedagogical-agent|agenter]] og [[agentic-ai|agentbaseret AI]] — en hurtig forskydning fra værktøjcentrerede studier til sociotekniske rammer ([[design-thinking|designtænkning]], [[curriculum-design|kurrikulumdesign]], [[institutional-change-framework-ai|institutionsforandring]]), og fra håndskrevne systemer til brugerdrevne workflows, hvor en elev eller [[teacher-role|ikke-programmør]] specificerer adfærd i naturligt sprog ([[vibe-coding|vibe coding]]). [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] formaliserer denne bane med deres AI×Ed-ramme og sporer artikler på tværs af fire årtiers proceedinger for at vise, at feltet bevægede sig fra en alsidig blanding — herunder betydelig forskning, der behandlede AI som en analogi til menneskelig intelligens og læring — mod en næsten eksklusiv fokus på anvendte, datadrevne, forskervendte anvendelser, en drejning, som fremkomsten af [[llm|LLM'er]] nu tilsyneladende delvist vender (tre af de fire "AI-som-analogi"-artikler ved AIED 2024 var LLM-baserede).
- **Følelser, angst og karrierefremtider:** AI fremkalder og former følelsesmæssige reaktioner — [[anxiety-and-stress|AI-angst og -stress]], der spænder fra overvågning ved eksamen og frygt for integritetsbrud til karriereforskelse — mens [[career-development-and-readiness|karriereudvikling og parathed]] beskæftiger sig med, hvordan uddannelse forbereder elever på et AI-forstyrret arbejdsmarked (se også [[well-being|trivsel]]).

## Feltets modenhed

Vidensbasen afspejler et felt i hurtig udvikling — fra tidlige intelligente vejledningssystemer til LLM-drevet vejledning og agentbaseret AI; fra detektionsfokuserede akademiske-integritets-værktøjer til evalueringsredesign; fra værktøjcentrerede studier til sociotekniske og ligestillingsfokuserede rammer. Evidensgrundlaget lægger i stigende grad vægt på stringente [[research-methods-aied|forskningsmetoder]], [[ai-ed-evaluation|evaluering]], [[rct|eksperimentelle designs]] og langsigtede udfald.

## Forbindelser

AI i uddannelse forbinder til hvert begreb i vidensbasen — det er det felt, som alle andre begrebssider tilsammen definerer. Brug denne side som udgangspunkt for at navigere i hele vidensbasen.

## Almindelige fejlopfattelser

**'AI i uddannelse er ét felt med én evidensbase.'** Det er en paraply over forskellige grene — fag, niveauer, evaluering, forskningsmetoder, institutioner, lighed — som adskiller sig i deres metoder, deres resultatmål og deres modenhed. Et fund fra én gren overføres ikke til en anden, og derfor er vidensbasen organiseret sådan og ikke som én samlet litteratur.

**'Et værktøj, der forbedrer kursets resultater, forbedrer elevernes succes.'** Den institutionelle gren viser det modsatte mønster: i [[student-support-and-success|elevstøtte og -succes]] **flytter AI pålideligt opgavefuldførelse, men ikke vedbliven eller færdiggørelse af uddannelsen**. En intervention kan vinde hvert eneste mål i kurset og lade færdiggørelsesresultatet stå uændret.

**'Teknologiens ydeevne er evidens om læring.'** Feltet ligger i krydsfeltet mellem instruktionsteknologi og [[learning-sciences|læringsvidenskaber]], og forskellen mellem de to er netop dette: om en elev forandrede sig, og ikke kun om et værktøj præsterede. En demonstration er en påstand om værktøjet.

**'Fordi AI er generel, gælder et fund et sted overalt.'** Teknologiens generalitet skaber ikke evidensens generalitet. Grenene for fag, niveau og kontekst findes, fordi det samme værktøj opfører sig forskelligt på tværs af dem, og et uændret fund båret over en grænse er en ekstrapolation.

**'Feltets modenhed kan aflæses af dets publikationsvolumen.'** Volumen og modenhed divergerer; forskningsmetodegrenen dokumenterer tilbagevendende svagheder i design, som volumen ikke retter, og rammer formerer sig hurtigere, end de testes.

## Forbundne begreber
- [[pedagogical-patterns]] — De afprøvede sekvenser, der operationaliserer feltets pædagogikker
- [[ai-literacy]] — paraply: forståelse, brug og evaluering af AI
- [[human-ai-collaboration]] — paraply: hvordan mennesker og AI arbejder sammen
- [[pedagogy]] — paraply: undervisningsmetoder og -strategier
- [[learning-theories]] — paraply: hvordan læring foregår
- [[ai-technologies]] — paraply: modeller, teknikker og systemer
- [[discipline-specific-aied]] — paraply: AI på tværs af fagområder og niveauer
- [[assessment]] — paraply: hvordan AI evaluerer elever og omformer validitet
- [[feedback]] — paraply: hvordan feedback genereres, leveres og bruges
- [[stakeholders]] — paraply: hvem aktørerne er
- [[learners]] — paraply: de elevvendte begreber (oplevelse, identitet, handlingsrum, interaktion, elevmodeller)
- [[ai-ed-evaluation]] — paraply: hvordan vi ved, om AI virker
- [[research-methods-aied]] — paraply: forskningsmetoder for effektivitet
- [[ai-assisted-educational-research]] — AI-assisteret uddannelsesforskning
- [[governance]] — paraply: det institutions- og reguleringslag
- [[educational-policy-ai]] — paraply: politik, vejledning og implementering
- [[equity-in-ai-education]] — paraply: retfærdighed, adgang og inklusion
- [[learning-sciences]] — det empiriske felt bag AIED
- [[ethics]] — de etiske dimensioner af AI i uddannelse
- [[misconceptions]] — de mentale modeller, mennesker bringer til AI
- [[interpreting-and-applying-aied-research]] — at læse en studie og overføre en resultat til praksis
- [[limitations-in-aied-research]] — tværgående begrænsninger af evidensgrundlaget
- [[meta-analysis-systematic-review]] — hvad gennemgangene og meta-analyserne etablerer
- [[history-of-aied]] — hvordan feltet udviklede sig
- [[philosophy-of-ai-in-education]] — de filosofiske fundamenter
- [[theories-and-frameworks]] — kortet over teori- og rammeknuder
- [[theory-development-aied]] — opbygning og revision af teori

## Forbundne artikler

Feltdækkende gennemgange af AI i uddannelse — de studier, der undersøger hele feltet eller et helt uddannelsesniveau frem for et enkelt emne:

- [[rismanchian-ai-education-four-decades-aixed-2026]] — Udviklingen af forskning i AI og uddannelse på tværs af fire årtier (AIxEd-rammen)
- [[mishra-control-vs-agency-history-2025]] — Kontrol vs. handlingsrum: en historie om AI i uddannelse
- [[genai-higher-education-systematic-review-2026]] — Generativ AI i højere uddannelse: systematisk gennemgang af 125 studier
- [[stanford-evidence-base-ai-k12-2026]] — Evidensgrundlaget om AI i K-12: en gennemgang af 818 artikler
- [[genai-educational-outcomes-meta-analysis]] — Generativ AI og uddannelsesmæssige udfald: omfattende meta-analyse
