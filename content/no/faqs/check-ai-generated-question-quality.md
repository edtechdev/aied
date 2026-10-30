---
title: "Hvordan kan jeg sjekke om AI-genererte quiz- og eksamensspørsmål faktisk er gode?"
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Du ber om tjue spørsmål fra forelesningsnotatene dine. De kommer tilbake med fasit, forklaringer, vanskelighetsetiketter og Bloom-taksonomikategorier, i et formatert dokument som ser ferdig ut. Navnet ditt er i ferd med å havne på det.

Kort svar å gi en kollega: genererte spørsmål er kandidater, ikke en vurdering. Løs hvert enkelt selv, undersøk hva oppgaven faktisk krever at en student gjør, og finn ut hvordan studentene responderer på den før den teller. I de to største studiene i denne kunnskapsbasen er det interessante signalet ikke at generering virker, men hvor den svikter. Iterativ generering inne i en emnesspesifikk arbeidsflyt ga brukbare flervalgseksamener i 71 collegeklasser ([[assessing-quality-ai-generated-exams-field-2025|Isley mfl., 2025]]). I en datavitenskapsrevisjon av 311 spørsmål som var tatt i bruk, fulgte modellens vanskelighetsetiketter de Bloom-nivåene den selv hadde generert ved siden av, nærmest perfekt (Spearman ρ = 0,90), mens de fulgte det studentene faktisk skåret, med ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An og Wang, 2026]]). Etiketten var en beskrivelse av prompten, ikke en måling av oppgaven.

## Kortversjonen

**1.** Skriv ned læringsutbyttet og hvilken evidens et tilfredsstillende svar ville gi, før du genererer noe.

**2.** Lag en blåkopi, slik at du kan se hvilke utbytter settet dekker, og hvor ofte.

**3.** Løs hver oppgave selv før du stoler på fasiten, og les forklaringen som en påstand som skal kontrolleres.

**4.** Spør hva en student må gjøre for å svare. Et spørsmål som sier «analyser» og krever gjenkalling, er et gjengivelsesspørsmål.

**5.** Behandle vanskelighetsetiketter som promptmetadata, ikke som psykometri.

**6.** Prøv oppgavene ut og undersøk hvordan de fungerer, og revider de svake.

## Start med læringen du vil ha evidens for

Generering er billig nok til at utdataformatet stille blir spesifikasjonen. Hvis notatene dine gir ryddige flervalgsoppgaver, ender du med å måle om studentene kan velge mellom plausible påstander, uansett hvilket utbytte emneplanen hevder.

Spesifiser utbyttet først, deretter evidensen et tilfredsstillende svar ville gi, og så kunnskapen studentene forventes å bringe med seg. Ta med emnematerialet, misoppfatningene du forventer, eventuelle tillatte hjelpemidler og svarformatet. Hvis du vil at studentene skal tolke evidens, må oppgaven kreve tolkning, og det å legge ordet inn i et definisjonsspørsmål gjør ikke jobben. Et langt scenario kan fortsatt besvares gjennom én kjent formulering som avslører svaret.

En vurderingsblåkopi er en tabell over utbytter mot oppgaver, og verdien ligger i at den avdekker hull før studentene gjør det. Den gjør også avveiningen synlig: hver oppgave du genererer fra det enkleste materialet, er en oppgave du ikke brukte på utbyttet du bryr deg mest om.

## Vurder hver oppgave på seks dimensjoner

Start med fasiten. Er den forsvarlig mot autoritativt emneinnhold, og holder forklaringen når du kontrollerer den uavhengig? Fasiten og forklaringen kommer ofte fra samme feilbarlige trinn, så det å kontrollere den ene kontrollerer ikke den andre.

Spør deretter hva det å svare på oppgaven faktisk krever at en student gjør mellom å lese og å velge. Det er her genererte oppgaver oftest svikter, og der etiketten er minst pålitelig.

Kontroller deretter samsvaret: gir det å svare evidens for det tiltenkte utbyttet, eller for noe tilgrensende og lettere å vurdere?

Les ordlyden slik en student ville gjort. Er informasjonen som trengs til stede, og er tvetydighet som ikke har med konstruktet ditt å gjøre, fjernet?

Se på alternativene og poengreglene sammen. Er distraktorene plausible og tydelig forskjellige fra hverandre og fra fasiten, og anerkjenner fasiten legitime alternative svar som rubrikken din ville gitt uttelling for?

Til slutt: spør hvem oppgaven utelukker. Lesemengde, kulturell kontekst, visuelle elementer og formatering kan stille krav som ikke har med utbyttet å gjøre. For en flerspråklig eller funksjonshemmet student måler en oppgave som belønner rask lesing noe du ikke hadde til hensikt, og [[differential-effects-across-learner-groups|undergruppeprestasjon]] er der det viser seg.

En andre modell kan hjelpe deg å oppdage problemer, og enighet mellom to modeller er ikke uavhengig verifisering av korrekthet. De deler treningsdata og feilmåter. Løs oppgaven, og la deretter en kvalifisert person se på dem som skal telle.

## Ikke la vanskelighetsetiketten bestemme

Litteraturen om [[automated-question-generation|spørsmålsgenerering]] er mer nyttig om etikettenes svikt enn om genereringens suksess. [[student-llm-use-ai-question-difficulty-data-science-2026|An og Wang (2026)]] undersøkte 378 forfatterlagde spørsmål i datavitenskapsemner, hvorav 311 ble tatt i bruk mot 54 studenter og 7 888 svar. Modellens etiketter for lett, middels og vanskelig korrelerte med de egne, samtidig genererte Bloom-nivåene på ρ = 0,90 og med empirisk oppgavevanskelighet på ρ = 0,06. Omtrent 70 % av oppgavene som var tatt i bruk, ble besvart riktig av alle studenter, noe som i praksis ikke lot det være variasjon for en vanskelighetsetikett å følge.

To lærdommer følger. For det første er vanskelighet en egenskap ved samspillet mellom en oppgave og en populasjon, så ingen etikett laget før oppgaven er administrert, kan stoles på som en målt verdi. For det andre er en bank med oppgaver alle svarer riktig på, ikke en lett vurdering, men en ubrukelig en: den bærer nesten ingen informasjon om hvem som kan hva.

Det positive tilfellet er smalere enn leverandørenes påstander og verdt å kjenne presist. [[assessing-quality-ai-generated-exams-field-2025|Isley mfl. (2025)]] genererte flervalgseksamener med ti spørsmål til 71 collegeklasser, omtrent 1 200 studenter, ved hjelp av en løkke som genererer, bedømmer og reviderer hver oppgave betinget på hvert emnes egne, faglærerleverte materialer, og deretter sammenlignet oppgavene med menneskeskrevne eksamener. Det er en arbeidsflyt med en gjennomgåer innebygd, kjørt per emne, ikke én enkelt prompt over generisk innhold. Støtten gjelder arbeidsflyten under de betingelsene, og den strekker seg ikke til det samme modellen produserer fra en innliming av uredigerte notater.

## Kjør en syklus med generering, gjennomgang, utprøving og revisjon

Generer mot en blåkopi, og be om det tiltenkte utbyttet, fasiten, en konsis løsning og hvilken misoppfatning hver distraktor skal fange. Annotasjonene gjør designet reviderbart. De er ikke evidens for at designet er godt.

Reparer før du akkumulerer. Slett påstander uten støtte, dupliserte oppgaver, utilsiktede hint i oppgaveteksten, flere forsvarlige fasiter og kompleksitet som ikke har med konstruktet å gjøre, og noter hva du endret, fordi mønsteret i reparasjonene forteller deg hvilken del av prompten som skal fikses.

Prøv ut der en utprøving står i forhold til innsatsen. Lavinnsatsøving, eller en styrt utprøving inne i vurderingen, gir deg svardata. Fortell studentene hvordan de skal melde fra om et tvetydig eller feil spørsmål, og les meldingene, siden de er ditt mest informative feilsignal.

Undersøk deretter hvordan oppgavene fungerer: andelen som svarer riktig, hvilke distraktorer som tiltrekker seg svar, og om suksess på oppgaven følger med prestasjon på resten av vurderingen. En oppgave der sterke studenter feiler og svake lykkes, er en defekt snarere enn et vanskelig spørsmål. I en liten klasse er disse statistikkene ustabile, så kombiner dem med innholdsgjennomgang og studentenes egne forklaringer i stedet for å behandle en prosentandel som en dom.

Revider, og ta vare på protokollen: den godkjente versjonen, utbyttet den tjener, fasiten, begrunnelsen, gjennomgangsnotatene og administrasjonshistorikken. For store eller høyinnsatsbanker er det her vurderingsspesialister og ordentlige psykometriske metoder hører hjemme, og [[educational-measurement|målekompetanse]] er ikke noe en nøye lesing kan erstatte.

## Hvordan dette ser ut i et emne

I et innføringsemne i sosiologi kan utbyttet være å skille en strukturell forklaring fra en individuell. En svak oppgave ber studentene definere «strukturell», noe som måler ordforrådsgjenkjenning. En sterkere kandidat gir et kort scenario om en familie og en ansettelsesbeslutning, og spør deretter hvilken forklaring som best identifiserer en strukturell begrensning, med distraktorer som representerer plausible, men ulike tolkninger.

Faglæreren kontrollerer at scenariet faktisk støtter fasiten, at ingen to alternativer uttrykker samme idé, og at svaret ikke avhenger av terminologi emnet aldri har innført. Et oppfølgingsspørsmål på én linje, «hvilken detalj støtter valget ditt?», får fram resonnementet som det valgte alternativet skjuler. Tilpasningen er ikke testet som oppgaveformat, og verdien er smalere: gjennomgangsspørsmålene over kan besvares før en oppgave administreres, og en dårlig fasit kan repareres før studentene ser den.

For studenter som genererer egne øvingsspørsmål, gjelder samme regel på deres nivå: forsøk oppgaven, kontroller forklaringen mot emnets kilder, og ta de uløselige tilfellene med til noen som kan faget. [[study-with-ai|Øvingspraksis]] som trener studenter til å godta genererte fasiter ukritisk, lærer dem den gale vanen.

## Hva som kommer tilbake på deg

**«Det ga et svar og en forklaring.»** Begge kan gjenta samme feil, og forklaringen skaper tillit nettopp fordi den er flytende. Verifiser resonnementet mot materialet ditt, ikke mot dets egen gjengivelse.

**«Dette er bare øvingsspørsmål.»** Øving lærer bort misoppfatninger når gale fasiter ikke rettes, og studenter repeterer feilen like gjerne som det riktige svaret. Lavere innsats endrer hvor mye gjennomgang som står i forhold til innsatsen. Den endrer ikke om nøyaktighet betyr noe.

**«Studentene likte quizen.»** Glede er evidens om opplevelsen. En lett quiz alle fullfører komfortabelt, føles bra og måler lite, og datavitenskapsrevisjonen fant at oppgavenes popularitet ikke fulgte med noe brukbart vanskelighetssignal.

**«Rubrikken eller Bloom-taggene viser at den treffer utbyttene.»** Bloom-etiketter levert av samme genereringstrinn er den minst uavhengige evidensen som finnes. ρ = 0,90 mot etikettene og ρ = 0,06 mot studentenes prestasjon er nøyaktig hvordan det ser ut når det måles.

## Hva du kan gjøre denne uken

**1.** Velg ett læringsutbytte og skriv hvilken evidens et tilfredsstillende svar ville gi. Generer deretter fem oppgaver mot det, og be om fasit, løsning og den tiltenkte misoppfatningen bak hver distraktor.

**2.** Løs alle fem uten å se på fasitene, og logg dem der du og modellen er uenige.

**3.** Be en kollega undersøke de to sterkeste kandidatene for samsvar og tvetydighet, og slett alt ingen av dere kan forsvare.

**4.** Prøv ut de overlevende med et kort oppfølgingsspørsmål der studentene sier hvilken detalj som støtter valget deres.

**5.** Registrer hva du endret og hvorfor, slik at neste parti starter fra en bedre prompt i stedet for den samme.

## Hvor du kan gå videre

[[automated-question-generation]] er begrepssiden for genereringsmetoder og deres målte kvalitet, og [[educational-measurement]] dekker oppgaveanalyse, reliabilitet og den psykometrien en utprøving bare antyder. Begge ligger under [[assessment-validity|vurderingsvaliditet]], som er standarden hele syklusen tjener.

Skjønnssiden av samme problem hører til [[ai-grading-fairness-reliability|AI-vurdering]], siden en god oppgave vurdert dårlig ikke er bedre enn en dårlig oppgave vurdert godt. For det bredere spørsmålet om hva en karakter skal representere når studentene kan bruke AI, se [[redesign-assessment-ai-era|ny utforming av vurdering i AI-tiden]].
