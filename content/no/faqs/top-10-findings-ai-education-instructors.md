---
title: "Hvilke 10 hovedfunn fra forskningen på AI i utdanning bør undervisere kjenne til?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
updated: "2026-11-14T18:10:00-05:00"
type: faq
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Disse ti studiene er direkte relevante for beslutninger undervisere tar: hva de gir som oppgave, hvordan de vurderer det, hvilke verktøy de kjøper, hvordan de bygger dem, og hvordan de avgjør om læring har funnet sted. Hver oppføring gir studien, resultatet og praksisen den endrer.

## De ti studiene

**1. Vanlig tilgang til en chatbot senket eksamensresultatene med 17 % ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Nesten 1 000 videregåendeelever i Tyrkia, i omtrent 50 klasser, arbeidet seg gjennom tre mattetimer med samme innhold. Én gruppe hadde et vanlig GPT-4-chatvindu under øvingen. Én hadde en veileder bygget på samme modell med lærerskrevne [[guardrails|sikkerhetsmekanismer]]: hint i stedet for svar, med riktig løsning og vanlige feil innebygd i instruksen. Kontrollgruppen hadde ingen AI. Hver økt endte med en [[summative-assessment|eksamen uten hjelpemidler]] på lignende oppgaver, med verktøyet fjernet.

Gruppen med vanlig chat scoret 48 % over kontrollen under øvingen og 17 % under kontrollen på eksamen. Studenter som aldri hadde tatt i AI, presterte bedre enn dem. Gruppen med sikkerhetsmekanismer økte med 127 % under øvingen og gikk i null på eksamen. Skaden forsvant, og det kom ingen læringsfordel i stedet. Chatloggene forklarer splittelsen: gruppen uten sikkerhetsmekanismer ba om svar og stoppet, mens gruppen med sikkerhetsmekanismer forsøkte oppgavene, ba om hint og forbedret seg innen den første økten.

For undervisere er «AI tillatt» ikke en retningslinje. Grensesnittet avgjør om verktøyet blir en hintkanal eller en svarmaskin, og en generell chatbot faller som standard i den andre kategorien. Et chatvindu som står åpent under øvingen, koster studentene som lener seg mest på det.

Administratorer kan stille det samme resultatet mot innkjøpspåstanden om at en sterkere modell løser pedagogikken. Modellen var identisk i begge armer.

Se også: [[training-ai-tutors-to-guide-rather-than-answer|Å trene en veileder til å veilede i stedet for å svare]]

**2. En veileder bygget på emnets egen pedagogikk slo klassen med aktiv læring, på kortere tid ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 er Harvards innføringsemne i fysikk for livsvitenskapsstudenter. Høsten 2023 møtte 194 studenter i et overkrysningsforsøk to leksjoner to ganger, én gang i emnets klasse med [[active-learning|aktiv læring]] og én gang gjennom en veileder bygget for emnet, med før- og ettertester rundt hver versjon.

Studentene lærte mer med veilederen. Median ettertest var 4,5 mot 3,5, median [[learning-gains|læringsutbytte]] var mer enn det dobbelte av klassens, og kvantilestimater av effekten gikk fra 0,73 til 1,3 standardavvik. De brukte median 49 minutter med veilederen mot omtrent 60 minutter i klassen, og 83 % vurderte forklaringene som like gode som eller bedre enn undervisernes. Vurderingene av engasjement og motivasjon steg. Glede og veksttankesett skilte seg ikke.

Resultatet hviler på utforming. Veilederen brukte de samme grepene som klassen: gjennomarbeidede eksempler, graderte hint, oppfordringer til selvforklaring, en sekvens som følger forskningen på hvordan fysikk læres. Sammenligningen var mot aktiv læring, ikke forelesning, så den vanlige innvendingen om at alt slår en forelesning, gjelder ikke.

Utdanningsutviklere har her det sterkeste tilgjengelige argumentet for at veilederutforming er læreplanarbeid, ikke innkjøp. For produktteam er listen konkret: match et aktivt læringsklasserom, på kortere tid, med de samme undervisningsgrepene.

Se også: [[developing-ai-tutor|Beste praksis for å utvikle en AI-veileder]]

**3. AI-veiledning matchet ekspertveiledning fra mennesker ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench samlet 2 469 veiledningsøkter med 2 383 voksne som forberedte seg til GRE, med 13 AI-veiledere bygget på 12 modeller, menneskelige veiledere i sanntid og en videokontroll. Utfallet var læringsgevinst på Quantitative- og Verbal-oppgaver.

Samlet AI-veiledning var statistisk likeverdig med ekspertveiledning fra mennesker, innen et kvart standardavvik, og begge slo kontrollen med omtrent seks prosentpoeng: 6,86 i Quantitative og 5,47 i Verbal, eller omtrent halvannet til to ekstra riktige svar per del. AI-veilederne ble vurdert svakere på leksjonsplanlegging og på å lage øvingsoppgaver, som de menneskelige veilederne gjorde bedre.

For administratorer endres bemanningsregnestykket for godt spesifisert testforberedelse. Når en lisensiert veileder matcher en menneskelig veileder innen et kvart standardavvik, handler beslutningen om kostnad og dekning, og effektivitet er ikke lenger spørsmålet. Forskere vil bemerke grensen: likeverdighet er ikke overlegenhet, og en standardisert test er det enkleste utfallet for en maskin å matche.

Utdanningsutviklere kan se hvor de menneskelige veilederne beholdt en fordel: å diagnostisere hva en lærende trenger neste gang, og bygge sekvensen som følger av det.

Se også: [[intelligent-tutoring|Intelligent veiledning]]

**4. Notater slo det å spørre en chatbot, tre dager senere ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes og kolleger gjennomførte et forhåndsregistrert eksperiment i sju engelske videregående skoler. 405 elever på tiende trinn arbeidet seg gjennom to av tre betingelser på en historietekst: en chatbot som kunne svare på spørsmål om den, notatskriving, eller begge. Tre dager senere tok de tester uten hjelpemidler av ordrett hukommelse, forståelse og [[retrieval-spacing-interleaving|fri gjenkalling]].

Notater slo chatboten på alle tre målene, med omtrent et halvt standardavvik på hukommelse og nær fire tideler på forståelse. Notater pluss chatbot slo chatboten alene på to av tre og gjorde ingenting for fri gjenkalling, og notater alene var sterkere enn kombinasjonen. I den kombinerte betingelsen kopierte omtrent en fjerdedel av elevene chatbotens utdata inn i notatene. Elevene vurderte likevel chatboten som enklere, mer nyttig og morsommere enn å skrive.

Undervisere har her direkte evidens for at en leseassistent kan erstatte lesingen. Hvis poenget med oppgaven er å forstå en tekst, er [[writing-education|skrivingen forståelsen]], og et verktøy som svarer på spørsmål om teksten, fjerner øvelsen. Behold notatene. Hvis du tillater chatboten, be om noe den ikke kan levere: en sammenligning, en utfordring av teksten, eller et sammendrag skrevet etter at verktøyet er lukket.

Se også: [[ai-support-reading-comprehension|AI-støtte for leseforståelse]]

**5. Studietiden falt 27 %, og hukommelsen falt med den ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Et tiårig panel fra ALEKS-plattformen, som dekker 3,2 millioner læringsinteraksjoner og 12,2 millioner responstider på plasseringstester, viser hva studentene gjorde etter at ChatGPT kom. Utformingen sammenligner oppgavetyper som kan limes inn i en chatbot (tekstbaserte ordproblemer) med typer som krever å manipulere en graf inne i plattformen, innenfor samme læreplan.

Tiden på de AI-utsatte oppgavene falt 2,8 % per kvartal blant studenter i høyere utdanning, 26,9 % over elleve kvartaler. Videregåendeelever falt 31,3 %, ungdomsskoleelever 9,0 %, og femteklassinger viste ingen påvisbar endring. Fallet forsvant helt under [[remote-proctoring|overvåking]], som er den avgjørende testen: med verktøyet utilgjengelig brukte studentene den gamle mengden tid. Overvåkede hukommelsesoppgaver viste en kumulativ nedgang på 25 % i oddsen for et riktig svar.

Aldersgradienten er et utformingssignal for produktteam. Øvingstid er variabelen som beveger seg, og den beveger seg mest der oppgaven er enklest å overlate. For undervisere er tid på oppgave en billig tidlig advarsel: en kohort som fullfører de samme oppgavene mye raskere, lærer sannsynligvis ikke det samme.

Se også: [[reducing-over-reliance|Å redusere overavhengighet av AI]]

**6. Leksepoengsummene steg 18 % mens eksamener uten hjelpemidler falt 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26 811 elever på trinn 7 til 12 i Kina, fulgt i 30 måneder, med generativ AI innført på ulike tidspunkter i kohortene. Leksepoengsummene steg 18 % og fullføringstiden falt 30 %, fra 64 til 45 minutter. Månedlige eksamener uten hjelpemidler falt 20 % av utgangsnivået innen seks måneder, og opptaksprøver med høye konsekvenser falt 18 % til 24 % etter omtrent to år.

Timingen viser mekanismen. Omtrent 81 % av AI-brukerne fullførte leksene raskere enn den raskeste eleven uten AI og gjorde det deretter dårlig på eksamen. Mindretallet som holdt leksetiden sammenlignbar med ikke-brukere, lærte like godt som alle andre. Tapene var størst i samfunnsfag, deretter realfag, deretter språk, og større for høyt presterende elever.

Fullføring av lekser er en dårlig indikator på måloppnåelse, og gapet vises innen seks måneder, lenge før opptaksprøveresultatene beveger seg. Undervisere kan handle tidligere: hold vurdert evidens uten hjelpemidler, og behandle hjemmearbeid som øving der fullføringstiden er synlig.

Se også: [[checking-whether-educational-ai-works|Å kontrollere om pedagogisk AI virker]]

**7. Hver veileder som ble testet, feilet på pedagogikk, og feilet verre gjennom en samtale ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors testet 11 veiledere, fra 3,8B til 72B åpne modeller pluss GPT-5-mini, i matematikk, fysikk og kjemi, mot en taksonomi med 11 dimensjoner og 48 delrisikoer hentet fra [[learning-theories|læringsvitenskap]]. Feilkategoriene er pedagogiske: for mye avsløring av svar, forsterking av misoppfatninger og å forlate [[scaffolding|stillas]]. Hver av dem ser nyttig ut i øyeblikket, fordi eleven raskt får et riktig svar.

Hver modell viste bred pedagogisk skade. Større modeller var ikke pålitelig tryggere, og generell hjelpsomhet korrelerte bare svakt med pedagogisk sikkerhet. Skadefrekvensene steg fra 17,7 % i enkeltutvekslinger til 77,8 % i samtaler på fem til åtte runder.

Enkeltrundevurderinger er ikke evidens for en trygg veileder, og produktteam bør utforme testene sine etter det. En modell som består en engangs sjekk av hjelpsomhet og sikkerhet, kan feile i det meste av en reell samtale. Administratorer som kjøper en veileder, trenger tre svar: holder den tilbake løsninger, undersøker den misoppfatninger, og holder den gjennom en økt. En leverandørdemo av én utveksling gir ingen av dem.

Se også: [[pedagogical-safety|Pedagogisk sikkerhet]]

**8. Fuskesaker hviler på tynnere evidens enn anklagene antyder ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz og kolleger kodet hver sak om fusk med generativ AI ved ett australsk universitet over tre år: 1 162 saker med 1 855 evidensposter, hver vurdert for relevans, troverdighet og inferensstyrke.

Anklager om generativ AI steg fra 11,9 % av fuskesakene i 2023 til 36,9 % i 2025, mens det totale sakvolumet holdt seg flatt. 58 saker, 5 % av GenAI-totalen, bygget bare på en påstand uten noen evidenspost i det hele tatt. Detektorutdata var sjeldent og svakt: Turnitin- eller likhetsrapporter hadde ingen inferensstyrke i 73 poster, og frittstående GPTZero-utdata hadde lav troverdighet i 69. Den sterkeste evidensen kom fra etterforskningen snarere enn anklagen, med muntlige innrømmelser i intervjuer i 410 poster, hvorav 97,2 % sterke. [[hallucination-risk|Fabrikkerte referanser]] var den største strukturelle endringen, 22,3 % av postene, opp fra 10,4 % i 2023 til 30,0 % i 2025.

For administratorer er læren prosessuell. En sak bygget på en detektorscore overlever ikke en klage, og en etterforskning som starter med verktøyet i stedet for intervjuet, gir svake saksmapper. Undervisere kan handle på artefakten som stadig dukker opp: fabrikkerte referanser er vanlige, og en referansesjekk er billig.

Se også: [[should-we-use-ai-detectors|Å bruke AI-detektorer]]

**9. Læreres tillit til egen AI-kompetanse følger knapt den målte ferdigheten ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 lærere i grunnskole og videregående skole fullførte en selvrapporteringsundersøkelse om AI-kompetanse og et objektivt prestasjonsmål bygget på samme rammeverk: Konsept, Bruk, Vurdering og Etikk. Korrelasjonene mellom de to gikk fra 0,07 til 0,24.

Latent profilanalyse fant seks grupper. 43 lærere vurderte seg selv konsekvent høyt mens de scoret lavere på det objektive målet. 59 viste det motsatte. Resten klynget seg rundt gjennomsnittet eller delte seg etter tidligere erfaring med AI.

For utdanningsutviklere er [[self-assessment|egenvurdering]] ikke en behovsanalyse. En undersøkelse som spør lærere hvor trygge de er, gir for mye til de trygge og for lite til de stille, og disse gruppene er ikke de kompetente og de som strever. Korte prestasjonsoppgaver skiller dem. Forskere bør behandle de lave korrelasjonene som en måleadvarsel: enhver studie av [[ai-literacy|AI-kompetanse]] bygget på [[self-report-measures|selvrapportering]], måler tillit.

Se også: [[faculty-development-ai|Faglig utvikling som endrer praksis]]

**10. AI-vurdering straffer elever som skriver mindre godt ([[ai-scoring-language-bias-physics|Feser og Tschisgale, 2026]]).**

Fysikkforklaringene til 116 elever i videregående skole ble vurdert av 9 maskinlæringstilnærminger og 2 tilnærminger med store språkmodeller, og deretter sammenlignet med menneskelige ekspertvurderinger. Enigheten med ekspertene varierte fra 67,2 % til 78,4 %, noe som høres akseptabelt ut til feilene brytes ned.

Hver tilnærming undervurderte konseptuell forståelse for forklaringer med lavere språklig kvalitet. Skjevheten gikk én vei: sterkere skriving ble ikke overvurdert. Mønsteret speiler det som er rapportert for fysikklærere selv, noe som tyder på at vanskeligheten ligger i å utlede forståelse fra prosa, for mennesker like mye som for modeller.

De som vurderer, og produktteam må rapportere undervurderingsrater etter språkkvalitet, ikke bare samlet enighet med eksperter, fordi gjennomsnittet skjuler gruppen som blir skadet. Den som vurderer [[multilingual-learning|flerspråklige elever]], bør sende svar med lav språkkvalitet til [[human-in-the-loop-ai|menneskelig gjennomgang]] eller utforme oppgaver som ikke avhenger av prosa.

Se også: [[ai-grading-fairness-reliability|Rettferdig og pålitelig AI-vurdering]]

## Hva de ti har til felles

Tre av studiene måler to ting samtidig: hva studentene produserer med verktøyet, og hva de kan uten det. Bastani, Rismanchian og Strömberg finner alle at de to divergerer, og bare det uassisterte målet oppfører seg som læring. Fire dreier seg om et utformingsvalg snarere enn modellen: sikkerhetsmekanismene hos Bastani, pedagogikken bygget inn i Kestin-veilederen, skrivingen Kreijkes beholdt i oppgaven, og den flerrundede samtaleformen SafeTutors testet. Tre undersøker systemet rundt verktøyet: evidensen som brukes i fuskesaker, måten lærerkompetanse måles på, og de språklige antakelsene i [[automated-assessment|automatisert vurdering]]. StudentBench etablerer likeverdighet på en standardisert test, det ene utfallet der en maskin lettest kan matche en person. Bastani opptrer i to grupper fordi den leverer både gapet og utformingsgrepet.

Det etterlater tre spørsmål som er verdt å ta med seg i enhver emne- eller produktbeslutning. Hva skal studenten kunne når verktøyet er borte? Hva ber aktiviteten dem gjøre mens det er åpent? Hvilken evidens ville vise forskjellen en måned senere?

## Hvor evidensen er tynn

Disse studiene deler [[limitations-in-aied-research|begrensningene i AIEd-forskning]] som helhet. To av de største er satt i Tyrkia og Kina, tre i USA, én i England, én i Australia, og vurderingsstudien i Tyskland. Én er en referansetest av kommersielle modeller snarere enn en feltstudie. Matematikk i videregående skole dominerer, med fysikk og informatikk neste. Svært få studier ser på [[humanities-education|skriving i humaniora]] i skala, på yrkesfag eller på elever med funksjonsnedsettelser.

Bare det kinesiske panelet og ALEKS-panelet observerer studenter i mer enn to år etter innføring, og de kinesiske forfatterne argumenterer for at kortere studier systematisk undervurderer straffen på lang sikt. Seks av disse resultatene er upubliserte manuskripter eller arbeidsnotater som ikke har fullført fagfellevurdering: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang og Feser. Studiene til Bastani, Kestin, Kreijkes og Munoz er publisert i fagfellevurderte tidsskrifter.

Null- og negative resultater er sjeldne i denne litteraturen, så den publiserte litteraturen overdriver trolig hvor ofte AI hjelper. Disse studiene er den beste nåværende veiledningen for ti beslutninger, og ingen av dem avgjør et spørsmål.

## Hvor du kan gå videre

[[does-ai-help-students-learn|Hjelper AI studenter å lære?]] er den bredere gjennomgangen av evidensen bak disse påstandene. [[redesign-assessment-ai-era|Hvordan bør vurdering utformes på nytt for AI-tiden?]] tar vurderingshalvdelen videre. For integritetssakene dekker [[reduce-ai-cheating|Hvordan kan jeg redusere AI-juks?]] prosessevidens og retningslinjer. For funnene om faglig utvikling er [[faculty-ai-competencies|Hvilke AI-kompetanser trenger faglærere?]] den tilhørende siden, og [[addressing-common-misconceptions-ai-education|Hvordan kan vi håndtere vanlige misoppfatninger om AI i utdanning?]] tar innvendingene du sannsynligvis vil høre fra kolleger.
