---
title: "Computationel tænkning"
created: "2026-08-09T10:44:35-04:00"
type: concept
foundations: [ai-literacy]
technology: [adaptive-learning, generative-ai, llm, prompt-engineering]
discipline: [cs education, stem education]
level: [k 12]
confidence: high
updated: "2026-11-08T06:44:50-05:00"
translation_of: "concepts/computational-thinking"
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

> **Computational thinking** — en problemløsningstilgang, der omfatter dekomponering, mønstergenkendelse, abstraktion og algoritmisk design. I [[ai-education|AI i uddannelse]] er computational thinking både en forudsætning for at forstå AI-systemer og en færdighed, som AI-værktøjer kan hjælpe med at udvikle.

## Spørgsmål at overveje

- Når du løser et problem ved at dele det op i dele, spotte mønstre, abstrahere det væsentlige og designe trin, laver du allerede computational thinking, selv uden en computer. Hvor har du gjort det for nylig?
- En almindelig antagelse er, at computational thinking er det samme som kodning eller "computer literacy". Hvordan kan de adskille sig, og hvorfor kan den forskel have betydning for, hvordan du underviser i det?
- Forskning tyder på, at det er studerendes mangler i grundlæggende begreber — ikke AI-værktøjet selv — der begrænser deres evne til at vurdere AI-forslag. Hvad skal en lærende allerede have forstået, før den kan vurdere en AI's output kritisk?
- Nogle argumenterer for, at computational thinking bør flytte lærende fra passivt at forbruge AI-output til at bygge, kritisere og designe med AI. Hvordan ville et klasseværelse, der behandler studerende som producenter frem for forbrugere, egentlig se ud?
- Generativ AI kan nu score studerendes udvikling i computational thinking — alligevel kæmper både mennesker og AI med det sværeste konstrukt, systemtænkning. Hvor synes du, automatisering af vurdering bør stoppe, og hvorfor?
- Forskning i robotteknologi finder, at computational thinking kun udvikles, når begreberne gøres eksplicitte og kortlægges til [[curriculum-design|læseplanen]], ikke når de behandles som isolerede tekniske øvelser. Hvad er risikoen ved at undervise i "tekniske færdigheder" uden at navngive tænkningen bag?

## Introduktion

### CT i et klasseværelse i AI-tidsalderen

Vidensbasens forbundne artikler mødes i en central påstand: computational thinking (CT) er det begrebsmæssige grundfjeld, studerende har brug for for at engagere sig kritisk i AI, og det er samtidig den færdighed, der dybest set styrkes af veldesignet AI-understøttet læring. Nedenfor er evidensen grupperet i fire temaer forankret i de linkede artikler.

- **CT som fundamentet for AI-kompetence og kritisk engagement.** Flere studier viser, at CT er det, der gør lærende i stand til at vurdere AI-output i stedet for blot at forbruge det. [[chat-debugging-human-ai-collaboration-circuits|Forskning i chat-debugging]] fandt, at da bachelorstuderende debuggede analoge kredsløb med LLM-hjælp, var det deres *mangler i grundlæggende begreber og kritisk tænkning* — ikke værktøjet — der var den begrænsende faktor, da de studerende manglede de kerneideer, der skulle til for at vurdere AI-forslag. [[llm-intervention-design-cs-review|En gennemgang af LLM-interventionsdesign]] konkluderer ligeledes, at det, der adskiller effektive interventioner fra "værktøjsfrustration", er [[cs-education]]s bevægelse mod computational thinking frem for syntaksbeherskelse. I [[early-childhood-elementary-ai-education|tidlig barndom]] bygger [[ai-play-framework-early-childhood-2026|AI-Play-rammen]] unplugged, legbaseret [[ai-literacy]] ved at lære børn, at "AI er et system bygget af dele", og at "AI lærer af eksempler" — et udviklingsmæssigt forankret første lag af CT. Og [[academic-league-of-ai-2026|en akademisk AI-liga]] forbinder CT med reelle civile AI-projekter gennem [[project-based-learning]], hvilket indlejrer [[ai-literacy]] i praksis. Tilsammen tyder det på, at CT er AI-kompetencens overførbare kognitive kerne.

- **Uddannelsesrobotter som bærer af CT.** Robotter er den mest undersøgte kontekst for at udvikle CT på tværs af [[k-12]] og [[stem-education]]. [[computational-thinking-educational-robotics-secondary-2026|Forskning fra sekundærtrinnet]] argumenterer for, at uddannelsesrobotter kun styrker [[problem-solving|problemløsning]] og kritisk tænkning, når CT-begreberne gøres eksplicitte og kortlægges til [[stem-education|STEAM]]-læseplanen frem for at behandles som isolerede tekniske øvelser. En [[game-based-gamified-robotics-education-review-2026|systematisk gennemgang af 95 studier]] bekræfter, at robotteknologi fremmer CT, [[creativity]] og problemløsning, og at [[game-based-learning]] passer til uformelle rammer, mens gamification dominerer i formelle klasseværelser og understøtter projektbaseret læring. [[microbit-robotics-machine-learning-teacher-training-2026|Evidens fra læreruddannelse]] viser, at en integreret Micro:bit + robot + [[machine-learning]]-intervention gav signifikante gevinster i CT-viden (d = 0,638) i den grundlæggende læreruddannelse, og argumenterer for, at robotteknologi bør indlejres, så kommende lærere kan undervise i CT. LLM'er kan sænke tærsklen yderligere: [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] kobler en LLM med robotsimulering, så begyndere kan styre robotter via naturligt sprog og gøre CT-indlejret robotteknologi tilgængelig uden kodning på lavt niveau.
- **AI som en "mere kapabel jævnaldrende" kan bære CT i underresourcede robotkurser.** Et 14-ugers kvasi-eksperiment med 103 grundstuderende på første år i Nigeria fandt, at AI-understøttet [[problem-based-learning|problembaseret læring]] (ChatGPT og Teachable Machine inden for den [[sociocultural-learning|nærmeste udviklingszone]]) overgik konventionel undervisning i computational thinking og robotprogrammering ved posttest, uden kønsmoderering ([[ai-pbl-computational-thinking-2026|AI-PBL-robotstudie (2026)]]).

- **LLM'er som værktøjer til vurdering og udvikling af CT.** [[generative-ai|Generativ AI]] tilbyder skalerbare måder at måle og understøtte CT på. [[llm-computational-thinking-physics-2026|Forskning i fysikfaglig CT-vurdering]] viste, at LLM'er kan matche menneskelige bedømmere i at score vækst i datapraksis og computationel problemløsningspraksis på tværs af [[physics-education|fysik]]-kurser med stor tilmelding — mens både mennesker og LLM'en kæmpede med det mere komplekse systemtænkningskonstrukt, hvilket markerer en klar grænse for automatisering. [[visual-query-tracer-declarative-logic-learning|Visuel forespørgselssporing]] viser, hvordan [[visualization]] kan understøtte abstrakt beregning og opbygge den intuition, der bærer CT-udvikling. [[student-misconceptions-conditionals-loops-taxonomy|En taksonomi over fejlopfattelser om betingelser og løkker]] giver finkornede mål for [[scaffolding]] og for automatiseret detektion af fejlopfattelser, hvilket forbinder til [[misconceptions]]. Disse værktøjer fungerer dog bedst, når [[pedagogy|pædagogisk]] design leder: [[llm-intervention-design-cs-review|CS-gennemgangen]] fandt, at semesterlange "Virtual Tutor"-designs med stilladseret feedback konsekvent forbedrede CT, mens ustruktureret værktøjsadgang øgede frustrationen.

Varige kompetencer forskydes, når implementeringen automatiseres: en workshoprapport nævner abstraktion, computational thinking og et "verifikationsspektrum" som de færdigheder, der skal undervises i, med henvisning til et forsøg med næsten 1.000 studerende, hvor ubegrænset GPT-4-adgang hævede praksisresultatet med 48 %, men skar eksamensscorerne med 17 %, da AI'en blev fjernet ([[reshaping-cs-education-genai|Lee et al. (2026)]]).

- **CT på tværs af K-12, læreruddannelse og redesign af vurdering.** CT spænder over hele spektret fra [[k-12]] til [[higher-ed]] og er ved at omforme vurdering. I den tidlige barndom udvider AI-Play CT og AI-kompetence til Pre-K–K2-lærende og ikke-tekniske familier; på universitetsniveau fandt [[genai-oop-programming-assessments-2026|OOP-vurderingsstudiet]], at GenAI-systemer i 2026 overgår den gennemsnitlige studerende ved autentiske programmeringseksamener, men stadig fejler på grænseflader, abstrakte klasser og nedarvning — tilbagevendende begrebsmæssige huller, der netop markerer, hvor CT fortsat er svært at automatisere. [[solving-vs-evaluating-genai-solutions|Et randomiseret A/B-crossover-studie]] viste, at evaluerings- og kritikopgaver giver sammenlignelige resultater med generering, hvilket tyder på, at CT kan udøves gennem vurdering af fejlbehæftede AI-løsninger, selv om gevinsterne kræver bevidst stilladsering. Under alt dette ligger læreren: micro:bit-studiet knytter CT-undervisning direkte til [[teacher-education]], og [[hashmi-socratic-physics-chatbot-2025|forskning i sokratiske chatbots]] forbinder den præcise problemformulering, som CT kræver, med målbar kursuspræstation.

- **Et valideret instrument lokaliserer, hvor CT er sværest.** En 34-leds computational-thinking-test udviklet med Evidence-Centered Design og valideret med item-response-teori hos 461 AI-programmeringsstuderende koncentrerede sværhedsgraden om datarepræsentation, sekvensering af logiske operatorer og løkkestrukturer frem for jævnt fordelt over pensum ([[zhang-ct-ai-training-test-2026|Zhang & Zhang (2026)]]).

### CT og skiftet fra AI-forbrugere til producenter, skabere og designere

Et centralt mål for CT i AI-tidsalderen er at flytte studerende og undervisere ud over *passivt forbrug* af AI-output og mod at *skabe, bygge og designe* med og til AI — en dagsorden der forbinder CT med konstruktionistisk læring (læring gennem at skabe). Vidensbasens forbundne artikler gør i stigende grad denne producent/skaber/designer-vending eksplicit. [[ai-writes-code-student-writes-model-2026|Forskning i modelforfatterskab]] omformulerer læring gennem konstruktion med GenAI som en målbar "modelforfatterskabs"-proces — studerende forfatter, debugger og itererer på AI-modeller i stedet for blot at forbruge AI-genereret kode eller svar. [[code-to-learn-genai-artifact-construction-2026|CtL-GenAI-rammen]] operationaliserer dette som [[constructivist|konstruktionisme]] for GenAI-tidsalderen og behandler de artefakter, studerende bygger med AI, som motoren i CT-udvikling. [[computational-thinking-ai-agent-creation|CT gennem skabelse af AI-agenter]] viser, at design — ikke blot brug — af AI-agenter direkte udøver dekomponering, abstraktion og algoritmisk ræsonnement.

Den nye metaanalytiske evidens skærper billedet. [[astor-computational-thinking-meta-review-2026|En meta-gennemgang af 128 systematiske CT-gennemgange]] finder, at feltet konvergerer mod en fælles definition af CT som ræsonnement med abstrakte modeller, der bruger computationelle trin og algoritmer til at løse problemer — netop den slags modelbygning (frem for svarforbrug), som produktionsorienteret læring kræver. [[tsingidou-ct-robotics-kindergarten-2026|Forskning i CT-robotter i børnehaven]] viser, at selv lærende i tidlig barndom bliver producenter gennem legbaseret byggeri med robotter med problembaseret læring, [[storytelling-in-education|storytelling]] og stilladsering — et udviklingsmæssigt første skridt mod at se teknologi som noget, man konstruerer, ikke blot betjener. Og [[solving-vs-evaluating-genai-solutions|forskning i evaluering og kritik]] demonstrerer, at CT kan udøves gennem at vurdere og debugge fejlbehæftede AI-løsninger — en producentposition over for AI-output, der modstår passivt-forbrug-fælden.

Det praktiske resultat er, at CT-undervisning bør designes, så lærende *skaber ting med AI* — forfatter modeller, bygger agenter, konstruerer artefakter og kritiserer AI-output — i stedet for at modtage færdige løsninger. Det dyber både CT og opbygger [[ai-literacy]] som deltagende og kreativ frem for blot begrebsmæssig. Lærere har til gengæld brug for støtte til at bevæge sig fra at bruge AI-værktøjer til at designe AI-forstærkede læringsaktiviteter (se [[teacher-role]] og [[professional-training]]).

Genbrug af andres modeller hører til producentpositionen: at implementere en offentliggjort AI-model — vælge, installere, køre og validere den — kan undervises som en lærbar, struktureret færdighed med en fallback-rute for hver forudset fejl, og tre BSc-studerende i [[chemistry-education|kemi]] uden programmeringsbaggrund reproducerede og udvidede en enzym-substrat-prædiktionsmodel inden for fire måneder ([[praise-non-programmer-ai-model-implementation-2026|Achterweust et al. (2026)]]).

### Praktisk vejledning

For undervisere er budskabet konsekvent, at CT udvikles gennem *eksplicit, stilladseret, observerbar* engagement frem for passiv AI-brug. Par robotteknologi med eksplicit kortlægning af CT-begreber til læseplanen; brug LLM'er til [[simulation]], naturligsprogsstyring og skalerbar vurdering af CT-vækst, mens menneskelig dømmekraft reserveres til konstrukter som systemtænkning; og redesign vurderinger, så de vægter evaluering og diagnosticering af AI-output højere end rå generering. Uanset rammen — unplugged leg i tidlig barndom, robotter i sekundær [[stem-education]] eller Virtual Tutors i [[higher-ed]] — skal aktiviteten struktureres, så studerende må ræsonnere om dekomponering, mønstre, abstraktion og algoritmer i stedet for at modtage færdige løsninger.

### Forbindelser til relaterede begreber

Computational thinking er det fælles kognitive fundament under [[ai-literacy]] og [[critical-thinking]], den læseplansmæssige kerne i [[cs-education]] og [[k-12]]-computing og det begrebsmæssige mål, som [[educational-robotics]], [[game-based-learning]] og [[project-based-learning]] bedst designes til at tjene. Det uddybes af [[llm|store sprogmodeller]] og [[generative-ai]], når disse bruges som stilladseringværktøjer, og det er den færdighed, som taksonomier over studerendes fejlopfattelser og CT-bevidste vurderinger sigter mod at måle. Lærere udvikler det gennem [[teacher-education]] og [[professional-training]], og det overføres på tværs af domæner, herunder [[physics-education]] og [[stem-education|STEM]] bredt.

- **Computational thinking forudsiger læring med AI-assistent.** [[computational-thinking-aica-2026|Ottende klasses studerende]] med høj computational thinking klarede sig signifikant bedre end jævnaldrende med lav CT i et AI-kodningsassistentkursus og brugte assistenten til forståelse frem for svarhentning.

## Almindelige fejlopfattelser

- **"AI fjerner behovet for computational thinking."** [[chat-debugging-human-ai-collaboration-circuits|Chat-debugging-studiet]] fandt, at da bachelorstuderende debuggede kredsløb med LLM-hjælp, var deres **mangler i grundlæggende begreber og kritisk tænkning — ikke værktøjet — den begrænsende faktor**. CT er det, der gør en lærende i stand til at vurdere et output frem for at acceptere det, og netop den kapacitet gør AI-assistance brugbar overhovedet.
- **"AI-assistance udligner vilkårene i underresourcede rammer."** Det kan den, under visse betingelser. Et **14-ugers kvasi-eksperiment med 103 grundstuderende på første år i Nigeria** fandt, at AI-understøttet problembaseret læring (ChatGPT og Teachable Machine) gav gevinster, og AI som "mere kapabel jævnaldrende" bærer CT, hvor andre tilbud mangler. Men det er et fund om en struktureret intervention, ikke en egenskab ved at give studerende en [[conversational-ai|chatbot]].
- **"LLM'er kan ikke vurdere CT pålideligt."** [[llm-computational-thinking-physics-2026|Forskning i fysikfaglig CT-vurdering]] fandt, at LLM'er kan **matche menneskelige bedømmere** i at score vækst i datapraksis og computationel problemløsningspraksis på tværs af kurser med stor tilmelding. Forhindringen for at skalere CT-vurdering har været bedømmerkapacitet, og den begrænsning blødes op — hvilket flytter designproblemet til, hvorvidt instrumentet måler CT frem for compliance.
- **"CT er en kodningsfærdighed, som robotteknologi tilfældigvis lærer fra sig."** En **[[meta-analysis-systematic-review|systematisk gennemgang]] af 95 studier** bekræfter, at robotteknologi fremmer CT, kreativitet og problemløsning, men også at **rammen modererer resultatet**: [[game-based-learning|spilbaseret]] levering passer til uformelle rammer, mens gamification fungerer anderledes i formelle. CT er et sæt praksisser, der overføres ujævnt, så overførselsargumentet har brug for den opgavedesign, det faktisk brugte.

## Forbundne begreber

- [[cs-education]]
- [[stem-education]]
- [[ai-literacy]]
- [[k-12]]
- [[prompt-engineering]]
- [[adaptive-learning]]
- [[llm]]
- [[generative-ai]]
- [[higher-ed]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[project-based-learning]]
- [[physics-education]]
- [[scaffolding]]
- [[critical-thinking]]
- [[teacher-education]]
- [[simulation]]
- [[socratic-method]]
- [[misconceptions]]
- [[agentic-ai]]

## Forbundne artikler

- [[ai-pbl-computational-thinking-2026]]
- [[computational-thinking-ai-agent-creation]]
- [[reshaping-cs-education-genai]]
- [[prompt-problems-nl-programming-mistakes]]
- [[llm-computational-thinking-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[visual-query-tracer-declarative-logic-learning]]
- [[llm-intervention-design-cs-review]]
- [[academic-league-of-ai-2026]]
- [[ai-play-framework-early-childhood-2026]]
- [[edusim-llm-robotic-simulation-education-2026]]
- [[computational-thinking-educational-robotics-secondary-2026]]
- [[microbit-robotics-machine-learning-teacher-training-2026]]
- [[chat-debugging-human-ai-collaboration-circuits]]
- [[student-misconceptions-conditionals-loops-taxonomy]]
- [[genai-oop-programming-assessments-2026]]
- [[game-based-gamified-robotics-education-review-2026]]
- [[solving-vs-evaluating-genai-solutions]]
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[computational-thinking-aica-2026]] — Computational Thinking Levels and AI Coding Assistants (2026)
- [[ai-writes-code-student-writes-model-2026]] — Model authorship: theory & measurement for learning-by-construction with GenAI
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: constructionism framework for artifact construction
- [[astor-computational-thinking-meta-review-2026]] — CT meta-review of 128 systematic reviews
- [[tsingidou-ct-robotics-kindergarten-2026]] — Systematic review of CT via robotics in kindergarten
- [[praise-non-programmer-ai-model-implementation-2026]] — PRAISE: A Reproducible Workflow for Non-Programmer Scientists to Implement Published AI Models
