---
title: "Kan jeg bruke AI til å vurdere studentarbeid rettferdig og pålitelig?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Du har en rubrikk du tror på, flere innleveringer enn timer, og et verktøy som returnerer en poengsum pluss flere selvsikre avsnitt på den tiden det tar å lese ett essay. Du prøver det på arbeid du allerede har vurdert. Halvparten av poengsummene ser riktige ut. Én er merkelig sjenerøs, én merkelig streng, og du kan ennå ikke avgjøre om det er verktøyet eller essayet.

Kort svar å gi en kollega: AI-vurdering gjør seg fortjent til en plass som overvåket assistent eller andrevurderer, på oppgaver der du har kontrollert den mot arbeid du allerede har sensurert. Samstemthet overføres ikke mellom vurderingstyper. I en farmasieksamen med seksten studenter fant [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat mfl. (2026)]] nærmest perfekt samstemthet på objektive oppgavetyper og upålitelig samstemthet på åpne svar. På tvers av tre engelske universiteter fant [[opraise-automated-marking-ai-assessment-2026|OpRaise-prosjektet]] at AI og menneskelige sensorer var enige om gradsbåndet mellom 35 % og 65 % av gangene, avhengig av institusjon, med karakterene komprimert mot midten. En flytende begrunnelse er ikke bevis for at kriteriene dine ble anvendt. Om resultatet er [[assessment-validity|gyldig for beslutningen din]] er et lokalt spørsmål du må svare på selv, og [[human-in-the-loop-ai|et menneske står ansvarlig]] for alt som blir en registrert karakter.

## Kortversjonen

**1.** Navngi rollen før du kjører noe: tilbakemeldingsassistent, andrevurderer eller primærsensor. De trenger ulik mengde evidens.

**2.** Start med den rollen som har minst konsekvenser og løser det faktiske problemet ditt. Hvis en deterministisk fasit gjør jobben, tilfører en språkmodell risiko snarere enn verdi.

**3.** Kalibrer på arbeid du allerede har vurdert, inkludert sterke, svake, grensetilfeller og uvanlig strukturerte innleveringer. Bekvemme eksempler beviser ingenting.

**4.** Hold kalibreringssettet og testsettet atskilt, ellers måler du hvor godt du tilpasset verktøyet til kjente essays.

**5.** Rapporter eksakt samstemthet, poengforskjeller og biasretning, ikke en korrelasjon. Sjekk bestått/ikke bestått-grensene spesielt.

**6.** Fortell studentene hvilken rolle verktøyet har, hvem som bestemmer karakteren, og hvordan de kan be om ny vurdering.

## Avgjør hva AI-en har lov til å gjøre

Tre ordninger kalles «AI-vurdering», og de har ulike forpliktelser.

En **tilbakemeldingsassistent** skriver utkast til kommentarer eller flagger mulige utelatelser som du kan godta, skrive om eller forkaste. Risikoen er begrenset til kommentarkvaliteten, og du leser alt før det når en student. En **andrevurderer** foreslår kriteriepoeng eller flagger uenighet for å strukturere din egen sensur. Feilene må være nyttige, ikke bare gale: et flagg som sender deg tilbake til en innlevering du ellers ville ha sensurert uaktsomt, er verdt å ha. En **primærsensor** produserer poengsummer som blir registrerte karakterer. Det er ordningen evidensen i denne kunnskapsbasen ikke støtter ut over smale, lokalt validerte tilfeller.

Velg det laveste trinnet som adresserer den faktiske begrensningen din. Hvis sensurbyrden din kommer fra å kontrollere en fast fasit, er vanlig deterministisk poenggiving mer gjennomsiktig og reviderbar enn en språkmodell, og farmasistudien antyder at språkmodellens fortrinn på objektive oppgaver delvis var en artefakt av at den fikk de riktige svarene under sensuren. Forbehold modellen til arbeid som krever tolkning, og kontroller deretter tolkningen.

[[automated-assessment|Automatisert vurdering]] dekker det bredere maskineriet for poenggiving, moderering og generering av tilbakemelding. Denne siden er skjønnsspørsmålet som ligger under det.

## Hva evidensen faktisk viser

Samstemtheten avhenger av oppgavetypen. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat mfl. (2026)]] sensurerte en farmasieksamen med blandet format besvart av 16 studenter og rapporterte samsvar med faglærersensuren mellom 0,935 og 1,000 for flervalg, «velg alle som passer» og utfyllingsoppgaver. Samstemtheten på subjektive åpne svar var upålitelig. To detaljer betyr mer enn overskriften. Riktige svar ble oppgitt under sensuren, noe som smigrer resultatene på objektive oppgaver, og å legge til en rubrikk forbedret ikke samstemtheten konsekvent, noe som undergraver den vanlige antakelsen om at en god rubrikk gjør en språkmodell til en konsistent sensor. Seksten studenter kan ikke bære en påstand om emnet ditt. Variasjonen innenfor én eksamen er funnet som lar seg overføre: et system som håndterer flervalgdelen din, sier ingenting om essayene dine.

Båndsamstemthet er moderat og ujevn. [[opraise-automated-marking-ai-assessment-2026|OpRaise-rapporten]] undersøkte autentiske bacheloressay i psykologi og fant samstemthet mellom AI og menneskelige sensorer på det britiske gradsbåndet på 63 % ved Cambridge, 53 % ved Nottingham og 35 % ved Manchester Metropolitan. Karakterene var komprimert mot midten, med halene minst nøyaktig vurdert: et essay en menneskelig sensor ga 75, fikk flere poeng lavere av alle AI-systemene, og et essay som fikk 50, fikk flere poeng høyere. Den komprimeringen er feilen å se etter, fordi den skader nettopp studentene på toppen og bunnen av fordelingen din mens midten ser fin ut. Dette er en prosjektrapport og ikke et fagfellevurdert forsøk, og den er den mest nyttige advarselen i evidensgrunnlaget.

Dine egne karakterer er en ufullkommen referanse. Sensorer er uenige med hverandre, og din tidligere poengsum på et lignende essay er et skjønn, ikke en grunnsannhet. Samstemthet med én sensor etablerer konsistens med den sensoren, som ikke er det samme som rettferdighet. Der innsatsen forsvarer det, bruk en andre kvalifisert sensor til å avgjøre vanskelige saker, og behandle uenighet mellom AI-en og en menneskelig sensor som en oppfordring til å lese arbeidet på nytt, ikke som en dom over hvem som har rett.

Konsistens og godt skjønn går fra hverandre. En modell kan returnere nærmest identiske poengsummer ved en ny kjøring mens den anvender kriteriene dine dårlig, fordi repeterbarhet måler stabilitet, ikke validitet. OpRaise-halene viser mønsteret: systemet var stabilt og tok feil om essayene som betydde mest.

## Valider prosedyren før den rører en karakter

Gå gjennom dette på tidligere vurderte, forsvarlig beskyttede innleveringer som spenner over svarene du faktisk mottar: sterke, svake, grensetilfeller, ufullstendige, uvanlig strukturerte, og riktige svar uttrykt på en ukjent måte.

**1. Spesifiser kriteriene og krev evidens.** Gi oppgaven, rubrikken, poengreglene og eksempler på hvordan legitime alternative svar oppnår uttelling. Be om konsise begrunnelser på kriterienivå knyttet til identifiserbare avsnitt. Kontroller deretter begrunnelsene mot innleveringen selv.

**2. Skill kalibrering fra evaluering.** Juster på ett sett, test på et annet. Uten den delingen kan du ikke skille en validert prosedyre fra en godt tilpasset.

**3. Mål beslutningene som betyr noe.** Registrer eksakt samstemthet, størrelsen og retningen på poengforskjeller, og om modellen systematisk gir høyere eller lavere karakterer. Undersøk bestått/ikke bestått og andre konsekvensrike grenser for seg. En høy korrelasjon kan ligge oppå et systematisk skift.

**4. Test repeterbarhet og oppførsel i undergrupper.** Kjør et utvalg på nytt under identiske innstillinger. Se etter feil på kriterienivå og etter at språk, formatering eller legitim stil blir tatt for svakere forståelse. Små undergruppetall støtter forsiktighet, ikke en påstand om rettferdighet.

**5. Skriv eskaleringsregelen.** Bestem hvilke saker som alltid får menneskelig sensur, og hvordan uenighet løses. Ikke la modellens oppgitte sikkerhet avgjøre; sikkerhet må valideres mot observerte feil før den kan bære vekt.

**6. Beskytt arbeidsflyten.** Bruk et godkjent miljø, minimer identifiserende informasjon, og hold rubrikk og instruksjoner atskilt fra innlevert innhold. Den delingen gjør manipulasjon vanskeligere å skjule. Den gjør den ikke umulig.

**7. Registrer hva som ville ugyldiggjøre kontrollen.** Ta vare på modell og versjon, prompt, rubrikk og innstillinger. En modelloppdatering eller en rubrikkrevisjon er grunn til å gjenta de representative kontrollene i stedet for å anta kontinuitet.

## Gjør ordningen synlig for studentene

Studenter har rett til å vite hvilken rolle verktøyet har, hvem som bestemmer, og hvordan de kan bestride et resultat. Vag informasjon skaper mistenksomhet; konkrete detaljer skaper et arbeidsdyktig forhold. Noe i retning av: «Et godkjent AI-verktøy kan skrive utkast til rubrikkkommentarer på utkastet ditt. Jeg gjennomgår hver kommentar og fastsetter karakteren din. Ta kontakt hvis en kommentar gir et feil bilde av arbeidet ditt.» Sørg deretter for at det er sant.

To feilretninger trenger hver sin oppmerksomhet. Overdrevne trekk er det studentene rapporterer, og de dominerer klagene. Ufortjent uttelling er den som ikke nevnes, og som stille forringer protokollen. Ta utvalg for begge, og ta med verifiseringstimene dine når du vurderer om arbeidsflyten sparte deg noe.

## Hva som kommer tilbake på deg

**«Mennesker er også partiske.»** Det er de, og derfor trenger sammenligningen eksplisitte kriterier i stedet for én sensors poengsum som standard. OpRaise-spredningen mellom institusjonene er argumentet her: hvis menneskelige sensorer ved tre universiteter ga så ulik båndsamstemthet med de samme systemene, er den menneskelige referansen noe som må spesifiseres, ikke en fast målestokk.

**«Rubrikken gjør det objektivt.»** En rubrikk gjør forventningene eksplisitte. Å anvende den er fortsatt tolkning, og farmasistudien fant at det å oppgi en rubrikk ikke forbedret samstemtheten konsekvent. Det rubrikken gir deg, er en kontrollerbar standard for begrunnelsene, ikke en garanti for poengsummene.

**«Jeg måtte jo kontrollere alt, og da er poenget borte.»** For noen oppgaver er det riktig konklusjon, og svaret er å snevre inn jobben. Å skrive utkast til kommentarer fra dine egne sensurnotater lar skjønnet bli hos deg og fjerner skrivingen. Andrevurdererflagg på grensetilfeller samler oppmerksomheten din der den endrer et utfall.

**«Kollegaen min prøvde det, og det fungerte bra.»** Spør hva de målte. Positive vurderinger lever side om side med feil i denne litteraturen, rutinemessig, og en kollega som leste noen fornuftige resultater, har kjørt en demonstrasjon, ikke en validering. Spørsmålet er hva prosedyren deres ville gjort med essayene du ville lagt merke til sist.

## Hva du kan gjøre denne uken

**1.** Velg én vurdering og skriv ned den ene rollen AI-en skal ha. Skriv ned hvilken evidens som ville la deg flytte den ett trinn opp.

**2.** Kjør den på fem innleveringer du allerede har vurdert, valgt slik at de omfatter en sterk, en svak, et grensetilfelle og en med uvanlig, men legitim struktur.

**3.** Logg hver uenighet med arbeidet og kriteriet, og navngi feilene du ville anse som uakseptable, ikke bare gale.

**4.** Test om poengforskjellene går i en konsistent retning, og sjekk bestått/ikke bestått-grensen din separat.

**5.** Skriv utkastet til informasjonsavsnittet til studentene og veien til ny vurdering, og sammenlign verifiseringstiden din med sensurtiden du unngikk.

## Hvor du kan gå videre

[[assessment-validity|Vurderingsvaliditet]] er begrepet som avgjør disse spørsmålene: om evidensen støtter slutningen du vil trekke. [[automated-assessment]] dekker teknologien og dens målte ytelse på tvers av formater, og [[ai-feedback-at-scale]] håndterer det tilgrensende problemet med genererte kommentarer og hvorvidt studenter handler på dem.

For hva en karakter skal representere når studentene bruker AI, inkludert konstruktsubstitusjon og autentisert prosessevidens, se [[redesign-assessment-ai-era|ny utforming av vurdering i AI-tiden]]. For om deteksjon kan erstatte en forsvarlig oppgavedesign, se [[should-we-use-ai-detectors|om vi bør bruke AI-detektorer]]. For evalueringsspørsmålet som ligger under alt dette, se [[checking-whether-educational-ai-works|om en pedagogisk AI faktisk virker]].
