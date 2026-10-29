---
title: "Hva er beste praksis og tips for å designe effektiv pedagogisk AI-programvare?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T15:11:34-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Teamet ditt har en veilederprototype som virker og en demonstrasjon for skolekretsen om tre uker. Eller en partnerskole har bedt deg sette et chattegrensesnitt oppå kursleseren sin, og noen sier at det er to ukers arbeid. Eller en innkjøpsansvarlig har sendt sikkerhetsdelen tilbake med én linje: hva testet dere egentlig?

Svaret er snevrere enn de fleste produktspesifikasjoner antar. Pedagogisk AI fungerer som en avgrenset ekspert under menneskelig tilsyn: kompetanse begrenset til et definert domene, forankret i instruktørgodkjent innhold snarere enn i modellens minne, samdesignet med lærerne og de lærende som bruker det, evaluert på vedvarende interaksjon over flere runder. Den siste klausulen er den de fleste team hopper over. Pedagogisk skade dukket opp i hver modell som ble testet i referansesettet nedenfor, og feilratene steg fra 17,7 % i interaksjoner med én runde til 77,8 % i samtaler over flere runder.

## Kortversjonen

**1.** Skriv ned hva systemet bestemmer og hva en lærer bestemmer. Den grensen blir arkitekturen.

**2.** Evaluer interaksjon over flere runder, fagbevisst, mot reelt pensum, ikke enkeltprompter mot en generell sikkerhetsrubrikk.

**3.** Forankre svarene i godkjent innhold, og hold verifiseringskomponenten atskilt fra den samtalende.

**4.** Behandle hver studentinnlevering som utklarert inndata, også når systemet setter karakter på den.

**5.** Bygg forsøksporten, eskaleringsveien og lærerens overstyring før piloten.

**6.** Sett tilgjengelighet og oppdelt rettferdighetstesting i spesifikasjonen, ikke i backloggen.

## Bestem hva systemet har lov til å være

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert og kollegers deltakende designstudie]] med seks lærere i videregående skole korrigerer antakelsen om at pedagogisk AI bør være en autonom agent. Da de ble bedt om å prototype klasseroms[[conversational-ai|chatboter]] på papir, beskrev hver lærer en avgrenset ekspert langs to dimensjoner. Autoritetsgrenser holdt lærerne i kontroll, fordi ansvaret for studentenes læring og sikkerhet ikke kan delegeres. Ekspertisegrenser gjenspeilet at AI mangler kontekstuell kunnskap om enkeltelever, klasseromsdynamikk og institusjonelle normer.

Arkitekturen de skisserte, hadde fire komponenter (innholdsavgrensning, innholdspresentasjon, studenttilpasning, [[teacher-role|lærerens]] tilsyn) på tre beskyttende lag: domenegrenser som begrenser omfanget, innholdsfiltrering som muliggjør trygg [[personalized-learning|personalisering]], og læreroverstyring for tvetydige tilfeller. Delegasjonen var selektiv. Knyttet til Gagnés ni undervisningshendelser ønsket lærerne AI velkommen til å presentere innhold, levere øvingsoppgaver og gi [[formative-assessment|formativ]] [[feedback]], og avviste den for å sette mål eller gjennomføre [[summative-assessment|summativ]] [[assessment|vurdering]].

To standardvalg hører hjemme i samme spesifikasjon: knytt systemet til eksplisitte læringsmål, og innstill det mot vennlige, men riktige svar snarere enn mot enighet med den som skriver. En veileder som smigrer et feil svar, har lært studenten at svaret var riktig.

Én detalj er billig nå og dyr senere: disse lærerne ville ha atferdsgjennomsiktighet, synlige grenser og usikkerhetssignaler, mer enn forklaringer på modellens resonnement. Alle seks ba om full samtallelagring, varsler i sanntid og overstyringsmulighet, rammet inn som profesjonelt ansvar snarere enn mistillit. Design for det i første sprint, fordi å ettermontere logging i en veileder bygget for å føles usynlig er en omskriving.

## Test det i samtale, ikke i én runde

Syntesen om [[pedagogical-safety|pedagogisk sikkerhet]] argumenterer for at konvensjonell sikkerhetstesting ikke er tilstrekkelig for utdanning. Et system kan unngå giftig innhold og likevel gjøre skade ved å avsløre svar for lett, forsterke [[misconceptions|misoppfatninger]], undertrykke refleksjon, fremme avhengighet eller drive bort fra undervisningsmålene.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]-[[benchmark|referansesettet]] setter tall på det. På tvers av hver modell som ble testet, fra 3,8B åpne modeller til GPT-5-mini, var [[pedagogy|pedagogisk]] skade universell, skala forbedret ikke sikkerheten pålitelig, og feilratene eskalerte fra 17,7 % i interaksjoner med én runde til 77,8 % i samtaler over flere runder. Bruddmønstrene varierte med faget. Taksonomien deres med 11 dimensjoner og 48 underrisikoer dekker kognitive, epistemiske, [[metacognition|metakognitive]], [[motivation|motivasjonsaffektive]], utviklingsmessige og rettferdighetsmessige kategorier, samt kategorier for undervisningssamsvar, og den fungerer som sjekkliste i design så vel som testpakke.

Les eskaleringsfiguren som en uttalelse om testplanen din. En veileder som består tusen enkeltprompter, kan feile i fire av fem samtaler når en student motsier eller spør en tredje gang. Bygg flerrundes-testbenken før demonstrasjonen.

## Forankre innholdet og skill ut verifisereren

Forankring er en arkitekturbeslutning. [[eduguard-safe-rag-llm-tutor|EduGuard]], en trygg [[rag|gjenfinningsforsterket]] veileder for [[cs-education|innføring i programmering]], parer instruktørgodkjent kursgjenfinning med en arkitektonisk atskilt påstandsverifiserer, eksplisitt kontroll av [[cognitive-offloading|overavhengighet]], og et instruktørskrevet referansesett med 600 spørringer som dekker misoppfatninger, feilsøking, kodemiksede spørringer og motstandsdyktige prompter som ber om direkte svar. Den forbedret seg på GPT-4o-mini og Llama-[[socratic-method|sokratiske]] veilederbasislinjer.

Det overførbare er separasjonen: komponentene som verifiserer, samtaler ikke, og referansesettet inneholder prompter skrevet for å trekke ut svar snarere enn å sjekke høflighet. [[hallucination-risk|Hallusinasjonsrisiko]] dekker feilmodusen godkjent gjenfinning skal avgrense.

## Behandle studentarbeid som utklarert inndata

Trusselmodellen de fleste designtips utelater, sitter inne i artefakten som vurderes. [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026) motstandsdyktige red-team-evaluering]] testet om studenter kunne manipulere en LLM-basert karaktersetter gjennom prompt-injeksjon i innleveringene sine, og manipulasjonen virket: injeksjoner som instruerer, rammer inn på nytt eller spiller en rolle for karaktersetteren, flytter poengsummen uten å endre arbeidet.

Hold rubrikken og instruksjonene utenfor det studentkontrollerte kontekstvinduet, fjern eller flagg instruksjonslignende innhold, la aldri en innlevering sette egne kriterier, og behold en menneskelig beslutning på alle konsekvensrike karakterer. En karaktersetter som leser instruksjonene sine fra teksten den dømmer, har gitt rubrikken til kandidaten.

## Støtt arbeidet i stedet for å fullføre det

Et system som svarer, avslutter tenkningen det ble kjøpt for å støtte. To ting hører hjemme i saken: en forsøksport, slik at ingen output vises før studenten har forpliktet seg til noe, og en [[human-in-the-loop-ai|menneskelig eskaleringsvei]] med en navngitt mottaker, som for et klasseromsprodukt betyr læreren, i en form en lærer kan handle på. [[scaffolding|Støtte]] og det [[socratic-method|sokratiske]] mønsteret er produktversjonene av det en undervisningsplan gjør for hånd; [[developing-ai-tutor]] dekker diagnostikk, hintstiger og tilbakemelding i detalj.

## Sett tilgjengelighet og rettferdighet i spesifikasjonen

Tilgjengelighetskravene er konkrete nok for en sprint: tastaturbetjening, kompatibilitet med skjermleser, undertekster og transkripsjoner, passende kontrast, brukbare tekstalternativer, og kompatibilitet med hjelpe[[ai-technologies|teknologier]]. AI-genererte tilgjengelighetsfunksjoner trenger fortsatt kvalitetssjekk. Se [[accessibility]].

Rettferdighetstesting bør undersøke hele kjeden og dele opp atferden etter språk, funksjonsnedsettelse, kultur og andre relevante kjennetegn ved de lærende, i stedet for å stole på samlet nøyaktighet. Et system som scorer godt i gjennomsnitt og dårlig for én gruppe, har levert svikten til den gruppen. Se [[bias-mitigation]] og [[equity-in-ai-education|Rettferdighet]].

## Design med dem som skal bruke det

[[ko-hughes-vsd-student-centered-its-2026|Ko og Hughes]] anvendte verdifølsomt design på et [[intelligent-tutoring|intelligent veiledningssystem]] med studenter og instruktører ved en toårig høyskole, en gruppe som historisk er utelatt fra design av læringsplattformer. De fant verdikonflikter å håndtere snarere enn å løse: gjennomsiktighet mot forklarbarhet, [[privacy|personvern]] mot pedagogisk innsikt, og [[agency|studentens handlingskraft]] mot systemstyrt [[scaffolding|støtte]]. Studentene foretrakk samarbeidende, menneskeliggjorte forklaringer fremfor rå modellgjennomsiktighet, og prototypen kodet 16 verditilpassede funksjoner på tvers av [[explainable-ai|forklarbar AI]], menneske-i-løkken og personvernkontroller.

[[wang-teacher-ai-co-design-review-2026|Wang, Liu og Islams gjennomgang]] av 28 empiriske studier tilfører et vokabular for å velge verktøy. [[generative-ai|Generativ AI]] brukes hovedsakelig til undervisningsplanlegging, promptgenerering og kreativ idémyldring, med AI som assistent eller innholdsgenerator langt oftere enn som samdesigner, og fire egenskaper, effektivitet, responsivitet, [[creativity|kreativitet]] og [[equity-in-ai-education|rettferdighet]], som lærere kan bruke til å vurdere hvilket verktøy som passer hvilket designproblem.

Begge studiene behandler design som [[human-in-the-loop-ai|menneske-i-løkken-]][[human-ai-collaboration|samarbeid]] og som [[usability-research|brukbarhetsforskning]] snarere enn oppsøkende virksomhet. Begge fant at interessentene avdekket krav ingen nøyaktighetsmåling ville fanget, som er det praktiske argumentet for å betale for øktene: kravene du ellers ville møtt i piloten.

## Hva designteam tar feil om

Sikkerhet betyr innholdsmoderering. Skade i et pedagogisk produkt kommer ofte som et hjelpsomt svar på feil øyeblikk. SafeTutors fant pedagogisk skade i hver modell som ble testet, og feil som steg til 77,8 % gjennom en samtale, noe som ikke er en kategori innholdsfiltre er bygget for å se.

En større modell fikser pedagogikken. Skala forbedret ikke sikkerheten pålitelig i området fra 3,8B åpne modeller til GPT-5-mini.

En god gjenfinningsindeks betyr at innholdet er håndtert. EduGuard parer gjenfinning med en separat verifiserer og tester motstandsdyktige prompter som ber om direkte svar, fordi forankret gjenfinning fortsatt etterlater en vei til for lett avsløring.

Læreren er reserveløsningen. Alle seks lærerne i designstudien ba om logging, varsler og overstyring som en betingelse for profesjonelt ansvar. En supportsak er ikke en overstyring.

Tilgjengelighet er en senere sak. Den ligger i spesifikasjonen, eller den blir en omskriving, og generert alt-tekst og undertekster trenger fortsatt en menneskelig sjekk.

## Hva som kommer tilbake på deg

**«Vi kan ikke bygge en evalueringsbenk før lansering.»** Bygg en liten en. Den første påstanden du trenger, er hva som skjer over fem runder. Ta 40 reelle pensumspørsmål, kjør hvert som en samtale på fem runder med en student som motsetter seg hintet, og score mot de 11 dimensjonene. Det er en forsvarlig sikkerhetsdel, og det får plass i en sprint.

**«Lærere vil redigere prompter, og vi kan ikke garantere det de skriver.»** Så snevre inn flaten de redigerer. Systemprompten forblir deres; mål, godkjent innhold, hintstigen og eskaleringkontakten er lærernes. Arkitekturen med avgrenset ekspert finnes for at konfigurasjonen skal holde seg innenfor et omfang du kan teste.

**«Poengsummene våre på referansesettet er høye.»** Nøyaktighet på enkeltsvar forutsier ikke atferd gjennom en samtale, og referansesettet som måler det andre, fant 77,8 % feil i flerrundesoppsett på tvers av hver modell det testet. Rapporter begge tallene, ellers blir det første lest som det andre.

**«Full logging er et personvernproblem.»** Det er det, noe som taler for formålsbegrensning snarere enn fravær. Logg det en lærer trenger for å handle, minimer resten, begrens tilgangen, og si i produktet hva som lagres og hvor lenge.

## Hva du kan gjøre denne uken

**1.** Skriv autoritetsgrensen på én side: hva systemet bestemmer, hva læreren bestemmer, og hva du ville forsvart i en innkjøpsrevisjon.

**2.** Gjør taksonomien med 11 dimensjoner om til en testplan og kjør den over flere runder på 40 reelle spørsmål fra ett kurs.

**3.** Skill verifisereren fra generatoren i designdokumentet, selv om første bygg kjører dem i én prosess.

**4.** Legg forsøksporten, eskaleringsmottakeren og lærerens overstyring i køen, med navn knyttet til.

**5.** Sett tilgjengelighetslisten og ett krav om oppdeling inn i denne utgivelsens akseptansekriterier.

## Hvor du kan gå videre

[[developing-ai-tutor]] dekker byggingen, og [[designing-ai-into-learning]] dekker de pedagogiske standardvalgene rundt den. For om ting virker etter at det er tatt i bruk, se [[checking-whether-educational-ai-works]]; for sikkerhetsbegrepene bak testplanen, [[pedagogical-safety]] og [[hallucination-risk]]; for innkjøpskonteksten, [[legal-issues-and-risks]].
