---
title: "Teorier og rammeverk"
created: "2026-09-19T05:40:00-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
updated: "2026-11-08T07:31:21-05:00"
translation_of: "concepts/theories-and-frameworks"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

> **Teorier og rammeverk** — den arbeidsinventaren av forklarende og organiserende strukturer som denne kunnskapsbasen faktisk bruker. Teorier forklarer hvorfor læring skjer ([[learning-theories]], [[self-determination-theory]], [[sociocultural-learning]], [[activity-theory-aied|aktivititetsteori]]); rammeverk organiserer design-, undervisnings- og adopsjonsbeslutninger ([[tpack]], [[samr-model|SAMR]], [[technology-acceptance-model|modeller for teknologiadopsjon]], [[icap-framework|ICAP]], [[universal-design-for-learning|universell design for læring]]); modeller gjør læringspåstander testbare og beregnbare ([[item-response-theory|item response-teori]], [[assessment-validity]], [[knowledge-tracing]]). Bruk denne siden til å finne linsen en studie hviler på, eller til å velge én for ditt eget arbeid.

## Spørsmål å vurdere

- En teori forutsier hva som skjer når noe endres; et rammeverk forteller deg hva du skal være oppmerksom på. Når en studie rapporterer en gevinst under et rammeverks fane, men ikke fremsetter noen forutsigelse som kunne ha slått feil, hva har man egentlig lært?
- [[tpack|TPACK]], [[samr-model|SAMR]], [[universal-design-for-learning|UDL]], [[technology-acceptance-model|adopsjonsmodellene]] og [[icap-framework|ICAP]] er alle eldre enn [[llm|store språkmodeller]]. Hvilke deler av dem holder fortsatt når verktøyet kan skrive, forklare og tilpasse på egen hånd, og hvordan ville du avgjøre det?
- Flere av teoriene som katalogiseres nedenfor, ble laget for AI i løpet av de siste årene. Hva skulle til for at én av dem var feil, og har noen forsøkt å vise det?
- Adopsjon rapporteres ofte som bevegelse gjennom stadier. Hvis en kollega forteller at emnet deres i år beveget seg «fra substitusjon til redefinisjon», hvilke uavhengige bevis ville du bedt om før du trodde på det?
- Mye av dette feltet anvender lånt teori snarere enn å teste den. Velg et funn du støtter deg på: kunne det omformuleres som en test av [[self-determination-theory|en teori]], og hvilken måling ville det kreve?

## Introduksjon

Hver AI-veileder, hvert tilbakemeldingssystem og hvert dashbord bygger inn antakelser om hvordan mennesker lærer, enten designerne uttrykker dem eller ikke. Denne siden samler teoriene, rammeverkene og modellene som disse antakelsene kommer fra, ordnet løst etter hvor mye av den nåværende forskningslitteraturen som lener seg på dem, og sier kort hva hver av dem er god for. Skillene mellom de tre betegnelsene er reelle, men små, og de oppsummeres mot slutten snarere enn å behandles som emnet. Det som betyr noe i praksis, er hvilken linse en påstand hviler på, og om den linsen kan bære påstanden.

## Læringsteorier litteraturen anvender

Disse forklarer mekanismer: de navngir delene som gjør arbeidet og forutsier hva som følger når disse delene endres. I AI-litteraturen er de stort sett lånt fra psykologien og [[learning-sciences|læringsvitenskapene]], og brukt som fortolkende rammer rundt et nytt verktøy.

- **[[learning-theories|Læringsteorier (paraply)]]** — familien som helhet, inkludert de klassiske polene [[behaviorism|behaviorisme]] og [[constructivist|konstruktivisme]] og gapet «konstruktivisme i navnet, behaviorisme i praksis» som går igjen i AI-implementeringer. Konnektivisme og kognitiv belastningsteori dekkes også her.
- **[[constructivist|Konstruktivisme]]** — læring som aktiv kunnskapskonstruksjon. Den underbygger [[project-based-learning|prosjektbasert]] arbeid, dialogbasert [[intelligent-tutoring|AI-veiledning]] og kritikken av at drill-og-tilbakemeldingssystemer bryter sin egen uttalte pedagogikk.
- **[[sociocultural-learning|Sosiokulturell teori]]** — læring som mediert av verktøy og sosial interaksjon, som er grunnen til at AI teoretiseres som en medierende artefakt snarere enn et rent hjelpemiddel.
- **[[activity-theory-aied|Aktivititetsteori]]** — tar hele aktivitetssystemet, inkludert motsetningene, som analyseenhet. Vanlig i lærerrettede AI-studier, der det interessante funnet vanligvis er spenningen mellom verktøy, regler og fellesskap.
- **[[situated-learning|Situert læring]]** og **[[embodied-learning|legemliggjort læring]]** — læring som bundet til kontekst og til kroppen, motvekten mot å behandle AI som et rent språklig medium.
- **[[distributed-cognition|Distribuert kognisjon]]** — tenkning spredt på tvers av mennesker og artefakter, som rammer inn AI-støtte som en omfordeling av kognitivt arbeid snarere enn en erstatning for det.
- **[[community-of-inquiry|Community of inquiry]]** — de sosiale, kognitive og undervisningsmessige tilstedeværelsene som får en nettbasert opplevelse til å fungere; en teori om opplevelsen og en designramme på samme tid.
- **[[self-determination-theory|Selvbestemmelsesteori]]** — autonomi, kompetanse og tilhørighet som motivasjonelle forutsetninger. Ofte forklaringen som tilbys når AI-bruk øker engasjementet uten å øke læringen.
- **[[cognitive-psychology|Kognitivisme]]** — informasjonsbehandling, arbeidsminne og divergensen mellom følelsen av læring og faktisk læring.
- **Teori om sosial persepsjon (varme og kompetanse)** — importert fra sosial kognisjon og tjenesteroboterforskning, rammer den inn hvordan brukere vurderer troverdigheten til en [[agentic-ai|AI-agent]]: opplevd kompetanse forutsa troverdigheten av ChatGPTs tilbakemelding direkte, mens varme bare virket gjennom menneskelik empati (SEM, 230 elever; [[chatgpt-feedback-credibility-perceived-learning|Pérez-López et al. (2026)]]).
- **En fjerde affordanskategori ble foreslått, ikke testet.** Ved å kode 24 studier mot et tredelt affordansskjema fant gjennomgangerne at engasjement, trygghet og self-efficacy ikke passet i de teknologiske, [[pedagogy|pedagogiske]] eller sosiale kategoriene, og foreslo emosjonelle affordanser forankret i Banduras gjensidige determinisme ([[genai-chatbots-language-learning-affordances-review-2026|Lopez & Arabadzhy (2026)]]).

## Modeller for eleven og læringsprosessen

- **[[self-regulated-learning|Selvregulert læring]]** — å planlegge, overvåke og evaluere sin egen læring. Arbeidshesten for å spørre om AI-støtte når de fasene som betyr noe, eller bare utførelsen.
- **[[metacognition|Metakognisjon]]** — å tenke på sin egen tenkning, og konstruktet som oftest nevnes når AI anklages for å tenke for elevene.
- **[[motivation|Motivasjon]]** — hvorfor elever engasjerer seg, og konstruktet som skiller engasjement fra læring i AI-studier.
- **[[self-efficacy|Self-efficacy]]** — troen på egen kapasitet, forskjellig fra kompetanse, og en hyppig mediator mellom AI-bruk og utfall.
- **[[agency|Handlekraft]]** — hvem som styrer arbeidet: konstruktet bak feltets spenning mellom kontroll og autonomi, og bak den delegerte handlekraftsmekanismen i den nyeste teorien.
- **[[desirable-difficulties|Ønskelige vanskeligheter]]**, **[[retrieval-spacing-interleaving|henting, spredning og interleaving]]** og **[[refutation-text|refutasjonstekst]]** — funn som gjør friksjon pedagogisk verdifull, anvendt på beslutninger om hvor mye en AI skal gjøre.
- **[[transfer-of-learning|Overføring av læring]]** — om kapasiteten vedvarer når støtten trekkes tilbake, noe nyere teori behandler som kriteriet som skiller læring fra assistanse, snarere enn som ett utfall blant flere.

## Rammeverk for undervisning, integrering og adopsjon

- **[[tpack|TPACK]]** — lærerkunnskapen som blander teknologi, pedagogikk og fag; standardrammeverket for lærerrettede AI-studier.
- **[[technology-acceptance-model|Adopsjonsmodeller]]** — intensjon som en funksjon av opplevd nytte og brukervennlighet. Brukt så bredt at feltets avhengighet av intensjon snarere enn atferd er en stående kritikk.
- **[[icap-framework|ICAP]]** — rangerer engasjement som passivt, aktivt, konstruktivt, interaktivt; nyttig for å spørre hvilken modus en [[student-ai-interaction|AI-interaksjon]] faktisk muliggjør.
- **[[samr-model|SAMR]]** — fra substitusjon til redefinisjon. Populær som en modenhetsfortelling, svak som måleinstrument.
- **[[universal-design-for-learning|Universell design for læring]]**, **[[inclusive-learning|inkluderende læring]]** og **[[accessibility|tilgjengelighet]]** — designrammer for hvem som blir ivaretatt, og de som oftest påberopes i arbeid med funksjonshemming og [[equity-in-ai-education|likestilling]].
- **[[learning-design|Læringsdesign]]**, **[[curriculum-design|læreplansdesign]]** og **[[design-thinking|designtenkning]]** — hvordan oppgaver, sekvenser og programmer struktureres før noe verktøy velges.
- **[[change-management|Endringsledelse]]** — om et system tas i bruk i det hele tatt, noe som vanligvis er et institusjonelt spørsmål snarere enn et pedagogisk.

## Målemodeller og beregningsmodeller

- **[[item-response-theory|Item response-teori]]** — estimering av oppgavevanskelighet og evne, og modellen som gjør tallene i en test tolkbare.
- **[[educational-measurement|Utdanningsmåling]]** — instrumentlandskapet, inkludert målene som er bygget spesielt for [[ai-literacy|AI-kompetanse]].
- **[[assessment-validity|Validitet]]** — om et instrument måler konstruktet det hevder, noe som avgjør om et rapportert utfall støtter den teoretiske påstanden som er knyttet til det.
- **[[self-report-measures|Selvrapporteringsmål]]** — den dominerende og mest skjøre evidenskilden i denne litteraturen; flere av konstruktene ovenfor er kjent for å avvike kraftig mellom selvrapportering og prestasjon.
- **[[knowledge-tracing|Knowledge tracing]]** og **[[student-modeling|elevmodellering]]** — å estimere en elevs tilstand over tid fra interaksjonsdata.
- **[[cognitive-diagnosis|Kognitiv diagnostikk]]** — å tilskrive prestasjon til spesifikke ferdighetskomponenter, den modellerende motparten til diagnostisk undervisning.
- **[[benchmark|Benchmarker]]**, **[[ai-ed-evaluation|evaluering av AI-utdanning]]** og **[[psychometrically-aware-ai|psykometrisk bevissthet i AI-design]]** — hvordan systemer og intervensjoner skåres, sammenlignes og revideres.
- **[[design-based-research|Designbasert forskning]]** — metoden som genererer teori fra designerte intervensjoner snarere enn å teste den på forhånd.

## Teorier skapt for AI-æraen

Fire forslag i kunnskapsbasen bygger teori snarere enn å låne den. De er artikkelsider snarere enn begrepsnoder, fordi hver av dem er ett enkelt argument:

- **[[generativism-learning-theory|Generativisme]]** — en ny læringsteori som hevder at de klassiske fire har betydelige begrepsmessige begrensninger etter hvert som [[generative-ai|generativ AI]] sprer seg.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Epistemisk samhandlekraft]]** — en modell for hvordan elever og AI-systemer i fellesskap produserer kunnskap og forståelse.
- **[[absent-cognitive-baseline-2026|Den fraværende kognitive baselinjen]]** — teoretiserer hvorfor AI-innfødte elever overvurderer sin egen læring når AI blåser opp prestasjonen.
- **[[yan-agentivism-learning-theory-ai-2026|Agentivisme]]** — en mellomdistanseteori som navngir fire mekanismer (delegert handlekraft, epistemisk overvåking og verifisering, rekonstruktiv internalisering og overføring under redusert støtte) og fremsetter seks testbare proposisjoner.

## Å skille de tre betegnelsene

Ordene brukes løst i litteraturen, og forskjellen er verdt ett avsnitt snarere enn en hel side:

- **En teori forklarer en mekanisme** og forutsier hva som skjer når delene endres. Den kan slå feil, og det er derfor studier som tester én, kan rapportere effektstørrelser.
- **Et rammeverk organiserer eller foreskriver.** Det navngir komponentene man skal være oppmerksom på, vanligvis uten å forutsi størrelsesforhold, og det kan ikke falsifiseres.
- **En modell er en formell representasjon**, oftest av måling eller av elevens tilstand. Den kan tilpasses, sammenlignes og vises å være feil på en måte et rammeverk ikke kan.
- **Betegnelsene overlapper.** [[community-of-inquiry|Community of inquiry]] er en teori og en designramme på samme tid; [[activity-theory-aied|aktivititetsteori]] er forklarende og analytisk. Behandle betegnelsen som et hint om hva en kilde hevder, ikke som en arkivkategori.

## Beslektede lag

To nabosider handler bevisst om noe annet. [[philosophy-of-ai-in-education|Filosofien om AI i utdanning]] stiller normative og begrepsmessige spørsmål — hva utdanning er *for*, om en maskin kan undervise — og forutsier ikke effektstørrelser; en studie kan være filosofisk naiv og teoretisk solid, eller omvendt. [[theory-development-aied|Teoriutvikling]] er metaaktiviteten med å bygge, låne og revidere teori, inkludert den stående kritikken av at mye [[ai-education|AIEd]]-arbeid anvender eksisterende teori snarere enn å teste den. Denne siden er inventaret; teoriutvikling handler om å produsere og revidere inventaret.

## Å velge en linse når spørsmålet er praktisk

- **Undervisere** som starter fra et problem, kan arbeide baklengs: hvis elevene ikke engasjerer seg, navngir [[icap-framework|ICAP]] og [[self-determination-theory|SDT]] ulike årsaker og foreslår ulike tiltak; hvis spørsmålet er om et verktøy skal tas i bruk i det hele tatt, spør [[technology-acceptance-model|adopsjonsmodeller]] og [[samr-model|SAMR]] ulike ting om det.
- **Læringsdesignere** får mest ut av designrammene — [[universal-design-for-learning|UDL]], [[learning-design]] og [[scaffolding|stillas]] — kombinert med en teori som forutsier hva som skjer når stillaset fjernes.
- **Forskere** bør oppgi hvilken node en studie hevder, og om designet faktisk kan teste den; målemodellene ([[item-response-theory|IRT]], [[assessment-validity]], [[self-report-measures]]) avgjør om et rapportert utfall støtter den påstanden.
- **Administratorer** møter disse rammeverkene som adopsjons- og endringsspørsmål, der en stadiemodell ofte brukes som en modenhetsfortelling snarere enn som et instrument.

## Hva rammeverk ikke kan gjøre

Rammeverk er ikke evidens. De er vanligvis lånt fra kontekster før LLM-ene og lokalisert av den som anvender dem, de kan fungere som merkevarebygging, og stadiemodeller inviterer til avkrysningsadopsjon som rapporterer bevegelse gjennom nivåer snarere enn læring. Påstander som hviler på et rammeverk, bør leses sammen med [[limitations-in-aied-research|feltets gjennomgående begrensninger]], [[assessment-validity|validiteten]] til det som målte utfallet, og de kjente grensene for [[self-report-measures|selvrapportering]].

Samsvar mellom mekanisme og teori kan likevel være avgjørende: en tematisk syntese av 55 AI-støttede [[game-based-learning|spillbaserte lærings]]studier fant at effektiviteten avhang av om AI-mekanismen iverksatte pedagogikken den skulle tjene, snarere enn av algoritmisk sofistikasjon ([[ai-game-based-learning-systematic-review-2026|Kaşarcı og Yurt (2026)]]).

## Vanlige misoppfatninger

**«Å anvende en lånt teori på et AI-verktøy er å bruke teori.»** Mye av dette feltet anvender lånt teori snarere enn å teste den, og forskjellen ligger i om rammeverket fremsatte en forutsigelse som kunne ha slått feil. Når en studie rapporterer en gevinst under et rammeverks fane uten å forplikte seg til noen falsifiserbar forutsigelse, har man ikke lært noe om rammeverket — et utfall som er forenlig med enhver teori i katalogen, er evidens for ingen av dem.

**«Verdien av et rammeverk er hvor godt det beskriver et system du allerede har bygget.»** Det er etterpåklok merking. En taksonomi som rommer ethvert design, har ingen diskriminerende kraft, og det er derfor beskrivende rammeverk bør vurderes etter hva de utelukker. Evalueringsspørsmålet er ikke «passer systemet mitt i dette?», men «hva slags system ville dette rammeverket si er galt?»

**«Læringsteorier, modeller for eleven og adopsjonsrammeverk er utskiftbare linser.»** De svarer på ulike spørsmål — hvordan læring skjer, hva elevens tilstand er, og hvorfor en praksis sprer seg — og evidenstypene deres varierer tilsvarende. Å velge feil lag gir en studie som måler den riktige variabelen mot den gale forutsigelsen, noe som leses som et nullresultat når det er en kategorifeil.

**«Flere rammeverk betyr et mer modent felt.»** Rammeverk skapt for AI-æraen akkumuleres raskere enn de testes, og akkumulering uten falsifisering er et symptom snarere enn framgang. Modenhet viser seg ved at konkurrerende forutsigelser blir avgjort, ikke ved vekst i vokabular.

## Tilknyttede begrep

- [[theory-development-aied]] — å bygge og revidere teori i feltet
- [[philosophy-of-ai-in-education]] — det normative og begrepsmessige laget
- [[learning-theories]] — paraplyen for læringsteori
- [[learning-sciences]] — nabofeltet det meste av teorien lånes fra
- [[limitations-in-aied-research]] — hva evidensgrunnlaget kan og ikke kan støtte
- [[tpack]] — rammeverk for lærerkunnskap
- [[technology-acceptance-model]] — adopsjonsrammeverk
- [[item-response-theory]] — en målemodell
- [[universal-design-for-learning]] — et designrammeverk
- [[research-methods-aied]] — hvordan teori blir testet

## Tilknyttede artikler

- [[genai-chatbots-language-learning-affordances-review-2026]] — Emotional affordances proposed as a fourth category in an affordance taxonomy
- [[ai-game-based-learning-systematic-review-2026]] — Mechanism-to-theory alignment, not algorithmic sophistication, drove effectiveness in 55 AI game-based learning studies

- [[rismanchian-ai-education-four-decades-aixed-2026]] — four decades of AIED through the AI×Ed framework
- [[educating-minds-generative-ai-2026]] — theory-heavy synthesis of generative AI and learning
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — activity theory applied to teacher professional development
- [[activity-theory-teachers-adoption-ai-sem-2026]] — activity theory and teacher adoption
- [[generativism-learning-theory]] — a learning theory proposed for the generative AI era
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — toward a theory of epistemic co-agency
- [[absent-cognitive-baseline-2026]] — theorizing a structural gap in AI-native students' self-assessment
- [[yan-agentivism-learning-theory-ai-2026]] — a mid-range learning theory for human-AI interaction
- [[ai-literacy-instrument-development-systematic-review-2026]] — instrument development across a young construct
- [[mishra-control-vs-agency-history-2025]] — the field's foundational control-versus-agency tension
