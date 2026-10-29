---
title: "Hvordan kan AI-agenter støtte studenter og undervisere?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T15:11:34-04:00"
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

En leverandørdemo varer i førti minutter. Agenten leser emneplanen, lager utkast til neste ukes quiz, flagger tre studenter som ikke har åpnet pensum, og tilbyr å sende dem e-post. Prorektoren din vil ha en lisensbeslutning innen månedens slutt.

En [[agentic-ai|agent]] planlegger, kaller verktøy, holder på kontekst, deler arbeidet i deloppgaver og tilpasser seg over flere turer, som er mer enn en [[conversational-ai|chatbot]] gjør. Rollene dette åpner for, på studentsiden og på undervisersiden, er reelle. Belegget viser ikke at mer autonomi gir mer læring: i den ene direkte sammenligningen her endte en agent og en chatbot likt. Legg autonomien der et menneske sjekker utdataene, behold planleggingen hos den som lærer, og mål undervisningskvalitet mot din egen vurderingsmatrise.

## Kortversjonen

**1.** Navngi jobben før produktet.

**2.** Start på undervisersiden, der en lærer allerede inspiserer arbeidet.

**3.** Behandle økt autonomi som en kostnad til belegget sier noe annet.

**4.** Hold planleggingen og vurderingen hos den som lærer, fordi det er det oppgaven finnes for å bygge.

**5.** Mål agenten mot matrisen din, og planlegg en kontroll uten hjelp før piloten slutter.

## Velg jobben før du velger agenten

[[agentic-workflows-education|Agentiske arbeidsflyter i utdanning]] navngir fire tilbakevendende evner: refleksjon, planlegging, verktøybruk og multiagent-samarbeid. Hver av dem legger til en kostnad ved siden av muligheten, i [[explainable-ai|forklarbarhet]], koordinering, [[trust-calibration|tillit]], ventetid og tilsyn.

Rollene på studentsiden går fra [[adaptive-learning|adaptiv]] veiledning og studieplanlegging, gjennom [[formative-assessment|formativ]] tilbakemelding, guidet [[problem-solving|problemløsning]] og oppgavegenerering, til anbefalinger om forkunnskaper og refleksiv, [[metacognition|metakognitiv]] [[prompt-engineering|prompting]]. Rollene på undervisersiden dekker materialutvikling, [[automated-question-generation|spørsmålsgenerering]] og validering, triagering av tilbakemelding, [[learning-analytics|kursanalyser]], undervisningsdesign, gjenfinning av ressurser og orkestrering av spesialiserte delagenter.

To av disse er tryggere tidlig, fordi begge produserer en artefakt et menneske leser før studentene gjør det: en spørsmålsgenerator koblet til en validator, og utkastskriving som en lærer redigerer.

## Start der et menneske allerede sjekker arbeidet

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], den første [[rct|randomiserte kontrollerte studien]] av et menneske-AI-system i levende veiledning, ga uerfarne veiledere sanntidsveiledning hentet fra erfarne veilederes resonnement, på tvers av 900 veiledere og omtrent 1 800 studenter. Studenter hos veiledere med tilgang hadde 4 prosentpoeng større sannsynlighet for å mestre temaer, stigende til 9 prosentpoeng blant veilederne med lavest vurdering, der studentene tok igjen studentene til bedre vurderte veiledere i kontrollgruppen. Det kostet omtrent 20 dollar per veileder i året, og analyse av mer enn 550 000 veiledningsmeldinger viste at veiledere skiftet fra å gi svar til å stille veiledende spørsmål. Det er AI som forsterker [[teacher-role|læreren]].

Agenten underviste ikke studenten. Den matet et menneske midt i samtalen, og mennesket bestemte hva som skulle sies. Et menneske i sløyfen og et utfall nær arbeidet er det som gjør resultatet overførbart til et annet kurs.

## Ikke anta at mer autonomi kjøper mer læring

[[ilieva-agentic-genai-higher-education-2026|En studie av 130 studenter i et e-handelskurs]] fant at både [[generative-ai|generativ AI]]-chatboter og agenter ble vurdert høyere enn tradisjonell [[online-teaching-and-learning|e-læring]] på læring og [[personalized-learning|personalisering]], uten signifikant forskjell mellom chatboten og agenten. Mer autonomi, ingen mer verdi på disse målene.

Rammeverket i den studien behandler agenter som avgrensede, menneskeovervåkede læringspartnere, med mål, kontrollpunkter og endelige beslutninger hos mennesker. [[beyond-agent-label-agentic-ai-governance-2026|Forbi agentetiketten]] gjør det til en [[governance|styringsregel]]: autonomi skal ikke overstige modenheten i belegget eller styrken i ansvarlig menneskelig kontroll, og belegget er sterkest på utfall på artefaktnivå, svakest på varig [[learning-gains|læring]] og [[equity-in-ai-education|likestilling]].

Risikoen på studentsiden går i samme retning. En agent som planlegger og overvåker for en student, fjerner øvelsen som bygger [[self-regulated-learning|selvregulering]] og inviterer til [[cognitive-offloading|kognitiv avlasting]]. [[agentic-ai-pedagogical-best-practice-2026|Veiledning om beste praksis]] ber om bevisst friksjon, [[scaffolding|støtte]] som trappes ned og [[human-in-the-loop-ai|menneskelig tilsyn]]. [[desirable-difficulties|Produktiv friksjon]] har fungerende eksempler. Agenter som skaper konstruktiv konflikt og argumenterer mot et svakt design, forbedret designutfall i forskningen som ble gjennomgått. [[simulating-students|Simulerte medstudenter]] støtter [[collaborative-learning|samarbeidslæring]] og [[socratic-method|sokratisk]] utspørring, og [[medical-education|kliniske]] [[simulation|simuleringer]] lar studenter øve der en feil er billig.

Testen for alle disse: etter økten, hva kan studenten gjøre som agenten gjorde før? Å overlevere vurderingen koster studenten [[agency|øvelsen]] i å bruke den.

## Sjekk agenten mot din egen vurdering

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Åtte AI-undervisningsagenter tatt i bruk i et medisinstudium]] ble rangert ulikt av plattformgenererte scorer og av en uavhengig ekspertmatrise. Plattformens tredjerangerte agent kom sist på undervisningskvalitet. Plattformscorer indekserer studentytelse, som beveger seg av grunner som ikke har noe med undervisning å gjøre.

Spør hva et dashbordtall teller, hvem som skrev matrisen bak det, og hvordan en lav score ville sett ut i studentarbeid. [[pedagogical-safety|Pedagogisk sikkerhet]] hører hjemme i samme gjennomgang, siden en kjede av [[pedagogical-agent|agenter]] gjør det vanskelig å si hvilken komponent som er ansvarlig når et svar er galt.

## Planlegg for utkoblingen

Randomiserte studier viser at kortvarig AI-hjelp kan dempe senere ytelse uten hjelp, og intervallet etter at hjelpen er fjernet, [[cognitive-washout-ai-skill-decay-2026|kognitiv utvasking]], er nesten helt umålt. Syntesen bak denne siden bygger på en [[meta-analysis-systematic-review|scoping-gjennomgang]] av 474 studier og finner at arbeidet er konsentrert i [[higher-ed|høyere utdanning]], [[stem-education|STEM]], korttidsdesign og tekstbasert veiledning, med bare et mindretall eksplisitt forankret i utdanningsteori. En pilot som slutter når lisensen slutter, har målt feil vindu.

## Hva administratorer tar feil om her

En agent er en oppgradert chatbot, så oppgraderingen bør vises i utfallene. I sammenligningen med 130 studenter slo begge AI-betingelsene e-læring, og ingen av dem slo den andre.

Dashbordet rangerer undervisningskvalitet. Det rangerer studentytelse, og åtte agenter ga en rangering som snudde tredje- og sisteplassen mot en ekspertmatrise.

Autonomi er funksjonen du skal kjøpe. Proporsjonalitetsregelen går motsatt vei, og belegget er tynnest der autonomien er størst.

Tilgang lukker likestillingsgapet. Ulik tilgang til kapable agentiske systemer kan utvide det, og en agent reproduserer skjevhet i treningsdata i stor skala.

## Hva som kommer tilbake på deg

**«Studentene kommer bare til å la den gjøre arbeidet.»** Noen vil det, og arkitekturen avgjør hvor lett det blir. Agenter som planlegger og skriver utkast for studenten, inviterer til det. Agenter som krever et forsøk og deretter stiller et spørsmål, gjør det ikke.

**«Leverandørens evaluering sier at det virker.»** Spør hva tallet teller. Hvis det er plattformmålt studentytelse, måler det studentene like mye som agenten.

**«Ingen kan si hvilken agent som er ansvarlig i en kjede.»** Sant for de fleste nåværende utrullinger. Navngi en eier for kjeden, loggfør hvilken komponent som produserte hvilke utdata, og hold et menneskelig kontrollpunkt før noe når en studentjournal.

## Hva du kan gjøre denne uken

**1.** Skriv jobben og utfallet du vil vurdere den etter, én setning hver, før neste leverandørsamtale.

**2.** Mål utdataene fra én agent mot matrisen din på ti stykker reelt studentarbeid, og ta vare på scorene.

**3.** Legg en datert oppgave uten hjelp med en navngitt eier til pilotplanen.

## Hvor du kan gå videre

[[developing-ai-tutor|Å utvikle en effektiv AI-tutor]] dekker byggingen på studentsiden, fra mål til hjelpestige, og [[evaluating-ai-interventions-methods|Å evaluere AI-intervensjoner]] dekker om tingen virket. [[intelligent-tutoring|Intelligent veiledning]] og [[ai-literacy|AI-kompetanse]] leverer designvokabularet denne siden forutsetter.
