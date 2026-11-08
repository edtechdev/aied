---
title: "Teorier og rammer"
created: "2026-09-19T05:40:00-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
updated: "2026-11-08T06:59:36-05:00"
translation_of: "concepts/theories-and-frameworks"
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

> **Teorier og rammer** — det arbejdsinventar af forklarende og organiserende strukturer, som denne vidensbase faktisk bruger. Teorier forklarer, hvorfor læring finder sted ([[learning-theories]], [[self-determination-theory]], [[sociocultural-learning]], [[activity-theory-aied|aktivitetsteori]]); rammer organiserer beslutninger om design, undervisning og adoption ([[tpack]], [[samr-model|SAMR]], [[technology-acceptance-model|modeller for teknologiadoption]], [[icap-framework|ICAP]], [[universal-design-for-learning|universelt design for læring]]); modeller gør læringspåstande testbare og beregnelige ([[item-response-theory|item response-teori]], [[assessment-validity]], [[knowledge-tracing]]). Brug denne side til at finde den linse, en undersøgelse hviler på, eller til at vælge en til dit eget arbejde.

## Spørgsmål at overveje

- En teori forudsiger, hvad der sker, når noget ændres; en ramme fortæller dig, hvad du skal være opmærksom på. Når en undersøgelse rapporterer en gevinst under en rammes banner, men ikke fremsætter nogen forudsigelse, der kunne have slået fejl, hvad har man så egentlig lært?
- [[tpack|TPACK]], [[samr-model|SAMR]], [[universal-design-for-learning|UDL]], [[technology-acceptance-model|adoptionsmodellerne]] og [[icap-framework|ICAP]] er alle ældre end [[llm|store sprogmodeller]]. Hvilke dele af dem holder stadig, når værktøjet selv kan skrive, forklare og tilpasse sig, og hvordan ville du afgøre det?
- Flere af de teorier, der katalogiseres nedenfor, blev skabt til AI inden for de seneste år. Hvad skulle der til, for at en af dem var forkert, og har nogen forsøgt at vise det?
- Adoption rapporteres ofte som bevægelse gennem stadier. Hvis en kollega fortæller, at deres kursus i år bevægede sig "fra substitution til redefinition", hvilke uafhængige beviser ville du så bede om, før du troede på det?
- En stor del af dette felt anvender lånt teori snarere end at teste den. Vælg et fund, du læner dig op ad: kunne det omformuleres som en test af [[self-determination-theory|en teori]], og hvilken måling ville det kræve?

## Introduktion

Enhver AI-vejleder, ethvert feedbacksystem og ethvert dashboard indlejrer antagelser om, hvordan mennesker lærer, uanset om designerne udtaler dem. Denne side samler de teorier, rammer og modeller, som disse antagelser kommer fra, ordnet løst efter hvor meget af den aktuelle forskningslitteratur der læner sig op ad dem, og siger kort, hvad hver enkelt er god til. Skelnen mellem de tre betegnelser er reel, men mindre betydningsfuld, og den opsummeres mod slutningen snarere end at være emnet. Det, der betyder noget i praksis, er, hvilken linse en påstand hviler på, og om den linse kan bære påstanden.

## Læringsteorier, som litteraturen anvender

Disse forklarer mekanismer: de navngiver de dele, der gør arbejdet, og forudsiger, hvad der følger, når disse dele ændres. I AI-litteraturen er de for det meste lånt fra psykologien og [[learning-sciences|læringsvidenskaberne]] og brugt som fortolkende rammer omkring et nyt værktøj.

- **[[learning-theories|Læringsteorier (paraply)]]** — familien som helhed, inklusive de klassiske poler [[behaviorism|behaviorisme]] og [[constructivist|konstruktivisme]] og den "konstruktivisme i navnet, behaviorisme i praksis"-kløft, der går igen i AI-implementeringer. Konnektivisme og kognitiv belastningsteori dækkes også her.
- **[[constructivist|Konstruktivisme]]** — læring som aktiv videnskonstruktion. Den understøtter [[project-based-learning|projektbaseret]] arbejde, dialogbaseret [[intelligent-tutoring|AI-vejledning]] og kritikken af, at drill-og-feedback-systemer bryder deres egen erklærede pædagogik.
- **[[sociocultural-learning|Sociokulturel teori]]** — læring som medieret af værktøjer og social interaktion, hvilket er grunden til, at AI teoretiseres som et medierende artefakt snarere end et blot hjælpemiddel.
- **[[activity-theory-aied|Aktivitetsteori]]** — tager hele aktivitetssystemet, inklusive modsætningerne, som analyseenhed. Almindelig i lærerrettede AI-studier, hvor det interessante fund normalt er spændingen mellem værktøjer, regler og fællesskab.
- **[[situated-learning|Situeret læring]]** og **[[embodied-learning|kropslig læring]]** — læring som bundet til kontekst og til kroppen, modvægten til at behandle AI som et rent sprogligt medie.
- **[[distributed-cognition|Distribueret kognition]]** — tænkning spredt over mennesker og artefakter, hvilket indrammer AI-assistance som en omfordeling af kognitivt arbejde snarere end en erstatning for det.
- **[[community-of-inquiry|Community of Inquiry]]** — de sociale, kognitive og undervisningsmæssige tilstedeværelser, der får en onlineoplevelse til at fungere; en teori om oplevelsen og en designramme på én gang.
- **[[self-determination-theory|Selvbestemmelsesteori]]** — autonomi, kompetence og tilhørighed som motiverende forudsætninger. Ofte den forklaring, der tilbydes, når AI-brug øger engagement uden at øge læring.
- **[[cognitive-psychology|Kognitivisme]]** — informationsbehandling, arbejdshukommelse og divergensen mellem følelsen af at lære og faktisk læring.
- **Social perceptionsteori (varme og kompetence)** — importeret fra social kognition og servicerobotforskning; den indrammer, hvordan brugere vurderer en [[agentic-ai|AI-agent]]s troværdighed: opfattet kompetence forudsagde direkte ChatGPT's feedbacktroværdighed, mens varme kun virkede gennem menneskelignende empati (SEM, 230 studerende; [[chatgpt-feedback-credibility-perceived-learning|Pérez-López m.fl. (2026)]]).
- **En fjerde affordance-kategori blev foreslået, ikke testet.** Ved at kode 24 studier op imod et tredelt affordance-skema fandt reviewerne, at engagement, sikkerhed og self-efficacy ikke passede i de teknologiske, [[pedagogy|pædagogiske]] eller sociale kategorier, og foreslog følelsesmæssige affordances forankret i Banduras reciprokke determinisme ([[genai-chatbots-language-learning-affordances-review-2026|Lopez & Arabadzhy (2026)]]).

## Modeller over den lærende og læreprocessen

- **[[self-regulated-learning|Selvreguleret læring]]** — planlægning, overvågning og evaluering af ens egen læring. Det mest anvendte konstrukt til at spørge, om AI-støtte når de faser, der betyder noget, eller kun udførelsen.
- **[[metacognition|Metakognition]]** — at tænke over sin egen tænkning, og det konstrukt der oftest nævnes, når AI beskyldes for at tænke for de studerende.
- **[[motivation|Motivation]]** — hvorfor lærende engagerer sig, og det konstrukt der adskiller engagement fra læring i AI-studier.
- **[[self-efficacy|Self-efficacy]]** — troen på ens egen formåen, forskellig fra kompetence, og en hyppig mediator mellem AI-brug og udfald.
- **[[agency|Handlingsrum]]** — hvem der styrer arbejdet: konstruktet bag feltets spænding mellem kontrol og autonomi og bag den delegerede-handlingsrum-mekanisme i den nyeste teori.
- **[[desirable-difficulties|Ønskværdige vanskeligheder]]**, **[[retrieval-spacing-interleaving|retrieval, spacing og interleaving]]** og **[[refutation-text|refutationstekst]]** — fund, der gør friktion pædagogisk værdifuld, anvendt på beslutninger om, hvor meget en AI bør gøre.
- **[[transfer-of-learning|Transfer af læring]]** — om formåen vedvarer, når støtten fjernes, hvilket nyere teori behandler som det kriterium, der adskiller læring fra assistance, snarere end som ét udfald blandt flere.

## Rammer for undervisning, integration og adoption

- **[[tpack|TPACK]]** — den lærerviden, der forener teknologi, pædagogik og indhold; standardrammen for lærerrettede AI-studier.
- **[[technology-acceptance-model|Adoptionsmodeller]]** — intention som en funktion af opfattet anvendelighed og brugervenlighed. Brugt så bredt, at feltets afhængighed af intention frem for adfærd er en fast kritik.
- **[[icap-framework|ICAP]]** — rangerer engagement som passivt, aktivt, konstruktivt, interaktivt; nyttig til at spørge, hvilken tilstand en [[student-ai-interaction|AI-interaktion]] faktisk muliggør.
- **[[samr-model|SAMR]]** — fra substitution til redefinition. Populær som en modenhedsfortælling, svag som måleinstrument.
- **[[universal-design-for-learning|Universelt design for læring]]**, **[[inclusive-learning|inkluderende læring]]** og **[[accessibility|tilgængelighed]]** — designrammer for hvem der bliver betjent, og dem der oftest påkaldes i arbejde med handicap og [[equity-in-ai-education|ligestilling]].
- **[[learning-design|Læringsdesign]]**, **[[curriculum-design|Læseplansdesign]]** og **[[design-thinking|Designtænkning]]** — hvordan opgaver, sekvenser og programmer struktureres, før noget værktøj vælges.
- **[[change-management|Forandringsledelse]]** — om et system overhovedet tages i brug, hvilket normalt er et institutionelt spørgsmål snarere end et pædagogisk.

## Målings- og beregningsmodeller

- **[[item-response-theory|Item response-teori]]** — estimering af item og evne, og den model der gør en tests tal fortolkelige.
- **[[educational-measurement|Uddannelsesmåling]]** — instrumentlandskabet, inklusive de mål, der er bygget specifikt til [[ai-literacy|AI-kompetence]].
- **[[assessment-validity|Validitet]]** — om et instrument måler det konstrukt, det hævder, hvilket afgør, om et rapporteret udfald understøtter den teoretiske påstand, der er knyttet til det.
- **[[self-report-measures|Selvrapporteringsmål]]** — den dominerende og mest skrøbelige evidenskilde i denne litteratur; flere af konstrukterne ovenfor vides at divergere skarpt mellem selvrapportering og præstation.
- **[[knowledge-tracing|Knowledge tracing]]** og **[[student-modeling|Elevmodellering]]** — estimering af en lærendes tilstand over tid ud fra interaktionsdata.
- **[[cognitive-diagnosis|Kognitiv diagnostik]]** — at tilskrive præstation til specifikke færdighedskomponenter, modelleringsmodstykket til diagnostisk undervisning.
- **[[benchmark|Benchmarks]]**, **[[ai-ed-evaluation|evaluering af AI i uddannelse]]** og **[[psychometrically-aware-ai|psykometrisk bevidsthed i AI-design]]** — hvordan systemer og interventioner scores, sammenlignes og revideres.
- **[[design-based-research|Designbaseret forskning]]** — metoden, der genererer teori ud fra designede interventioner snarere end at teste den på forhånd.

## Teorier skabt til AI-tiden

Fire forslag i vidensbasen bygger teori snarere end at låne den. De er artikelsider snarere end begrebsnoder, fordi hvert af dem er et enkelt argument:

- **[[generativism-learning-theory|Generativisme]]** — en ny læringsteori, der argumenterer for, at de klassiske fire viser betydelige begrebsmæssige begrænsninger, efterhånden som [[generative-ai|generativ AI]] breder sig.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Epistemisk samhandling]]** — en model for, hvordan lærende og AI-systemer i fællesskab producerer viden og forståelse.
- **[[absent-cognitive-baseline-2026|Den fraværende kognitive baseline]]** — teoretiserer, hvorfor AI-native studerende overvurderer deres egen læring, når AI oppuster præstationen.
- **[[yan-agentivism-learning-theory-ai-2026|Agentivisme]]** — en mellemrangsteori, der navngiver fire mekanismer (delegeret handlingsrum, epistemisk overvågning og verifikation, rekonstruktiv internalisering og transfer under reduceret støtte) og fremsætter seks testbare propositioner.

## At skelne de tre betegnelser

Ordene bruges løst i litteraturen, og forskellen er et afsnit værd snarere end en hel side:

- **En teori forklarer en mekanisme** og forudsiger, hvad der sker, når dens dele ændres. Den kan slå fejl, hvilket er grunden til, at undersøgelser, der tester en teori, kan rapportere effektstørrelser.
- **En ramme organiserer eller foreskriver.** Den navngiver de komponenter, man skal være opmærksom på, normalt uden at forudsige størrelsesordener, og den kan ikke falsificeres.
- **En model er en formel repræsentation**, oftest af måling eller af den lærendes tilstand. Den kan tilpasses, sammenlignes og vises at være forkert på en måde, en ramme ikke kan.
- **Betegnelserne overlapper.** [[community-of-inquiry|Community of Inquiry]] er en teori og en designramme på én gang; [[activity-theory-aied|aktivitetsteori]] er forklarende og analytisk. Behandl betegnelsen som et fingerpeg om, hvad en kilde hævder, ikke som en arkiveringskategori.

## Beslægtede lag

To nabosider handler bevidst om noget andet. [[philosophy-of-ai-in-education|Filosofien om AI i uddannelse]] stiller normative og begrebsmæssige spørgsmål — hvad uddannelse er *til for*, om en maskine kan undervise — og forudsiger ikke effektstørrelser; en undersøgelse kan være filosofisk naiv og teoretisk solid, eller det modsatte. [[theory-development-aied|Teoriudvikling]] er metaaktiviteten at bygge, låne og revidere teori, inklusive den faste kritik, at meget [[ai-education|AIEd]]-arbejde anvender eksisterende teori snarere end at teste den. Denne side er inventaret; teoriudvikling handler om at producere og revidere inventaret.

## At vælge en linse, når spørgsmålet er praktisk

- **Undervisere**, der starter fra et problem, kan arbejde baglæns: hvis de lærende ikke engagerer sig, navngiver [[icap-framework|ICAP]] og [[self-determination-theory|SDT]] forskellige årsager og foreslår forskellige løsninger; hvis spørgsmålet er, om et værktøj overhovedet skal tages i brug, spørger [[technology-acceptance-model|adoptionsmodeller]] og [[samr-model|SAMR]] om forskellige ting.
- **Læringsdesignere** får mest ud af designrammerne — [[universal-design-for-learning|UDL]], [[learning-design]] og [[scaffolding]] — parret med en teori, der forudsiger, hvad der sker, når stilladseringen fjernes.
- **Forskere** bør angive, hvilken node en undersøgelse hævder, og om designet faktisk kan teste den; målingsmodellerne ([[item-response-theory|IRT]], [[assessment-validity]], [[self-report-measures]]) afgør, om et rapporteret udfald understøtter den påstand.
- **Administratorer** møder disse rammer som spørgsmål om adoption og forandring, hvor en stadiemodel ofte bruges som en modenhedsfortælling snarere end et instrument.

## Hvad rammer ikke kan

Rammer er ikke evidens. De er normalt lånt fra kontekster før LLM'er og lokaliseret af den, der anvender dem, de kan fungere som branding, og stadiemodeller indbyder til afkrydsningsadoption, der rapporterer bevægelse gennem niveauer snarere end læring. Påstande, der hviler på en ramme, bør læses sammen med [[limitations-in-aied-research|feltets tværgående begrænsninger]], [[assessment-validity|validiteten]] af det, der målte udfaldet, og de kendte grænser for [[self-report-measures|selvrapportering]].

Mekanisme-til-teori-sammenhæng kan ikke desto mindre være afgørende: en tematisk syntese af 55 AI-understøttede [[game-based-learning|spilbaserede lærings]]studier fandt, at effektiviteten afhang af, om AI-mekanismen udlevede den pædagogik, den skulle tjene, snarere end af algoritmisk raffinement ([[ai-game-based-learning-systematic-review-2026|Kaşarcı og Yurt (2026)]]).

## Almindelige fejlopfattelser

**"At anvende en lånt teori på et AI-værktøj er at bruge teori."** En stor del af dette felt anvender lånt teori snarere end at teste den, og forskellen er, om rammen fremsatte en forudsigelse, der kunne have slået fejl. Når en undersøgelse rapporterer en gevinst under en rammes banner, men ikke forpligter sig på nogen falsificerbar forudsigelse, er der intet lært om rammen — et udfald, der er foreneligt med enhver teori i kataloget, er evidens for ingen af dem.

**"En rammes værdi er, hvor godt den beskriver et system, du allerede har bygget."** Det er efterrationaliserende mærkning. En taksonomi, der rummer ethvert design, har ingen diskriminerende kraft, hvilket er grunden til, at beskrivende rammer bør vurderes på, hvad de udelukker. Evalueringsspørgsmålet er ikke "passer mit system til dette?", men "hvilken slags system ville denne ramme sige er forkert?"

**"Læringsteorier, modeller over den lærende og adoptionsrammer er udskiftelige linser."** De besvarer forskellige spørgsmål — hvordan læring finder sted, hvad den lærendes tilstand er, og hvorfor en praksis spredes — og deres evidensformer varierer tilsvarende. At vælge det forkerte lag producerer en undersøgelse, der måler den rigtige variabel op imod den forkerte forudsigelse, hvilket læses som et nulresultat, når det er en kategorifejl.

**"Flere rammer betyder et mere modent felt."** Rammer skabt til AI-tiden akkumuleres hurtigere, end de testes, og akkumulation uden falsifikation er et symptom snarere end fremskridt. Modenhed viser sig ved, at konkurrerende forudsigelser bliver afgjort, ikke ved at ordforrådet vokser.

## Forbundne begreber

- [[theory-development-aied]] — at bygge og revidere teori i feltet
- [[philosophy-of-ai-in-education]] — det normative og begrebsmæssige lag
- [[learning-theories]] — paraplyen for læringsteori
- [[learning-sciences]] — nabofeltet, som det meste teori lånes fra
- [[limitations-in-aied-research]] — hvad evidensbasen kan og ikke kan understøtte
- [[tpack]] — ramme for lærerviden
- [[technology-acceptance-model]] — adoptionsrammer
- [[item-response-theory]] — en målingsmodel
- [[universal-design-for-learning]] — en designramme
- [[research-methods-aied]] — hvordan teori bliver testet

## Forbundne artikler

- [[genai-chatbots-language-learning-affordances-review-2026]] — Følelsesmæssige affordances foreslået som en fjerde kategori i en affordance-taksonomi
- [[ai-game-based-learning-systematic-review-2026]] — Mekanisme-til-teori-sammenhæng, ikke algoritmisk raffinement, drev effektiviteten i 55 AI-spilbaserede læringsstudier

- [[rismanchian-ai-education-four-decades-aixed-2026]] — fire årtier af AIEd gennem AI×Ed-rammen
- [[educating-minds-generative-ai-2026]] — teoritung syntese af generativ AI og læring
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — aktivitetsteori anvendt på læreres professionelle udvikling
- [[activity-theory-teachers-adoption-ai-sem-2026]] — aktivitetsteori og læreres adoption
- [[generativism-learning-theory]] — en læringsteori foreslået til generativ-AI-tiden
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — mod en teori om epistemisk samhandling
- [[absent-cognitive-baseline-2026]] — teoretisering af et strukturelt gab i AI-native studerendes selvurdering
- [[yan-agentivism-learning-theory-ai-2026]] — en mellemrangsteori om læring i menneske-AI-interaktion
- [[ai-literacy-instrument-development-systematic-review-2026]] — instrumentudvikling omkring et ungt konstrukt
- [[mishra-control-vs-agency-history-2025]] — feltets grundlæggende spænding mellem kontrol og handlingsrum
