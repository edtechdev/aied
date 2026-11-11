---
title: "Hva bør undervisere unngå å gjøre med AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Det meste av veiledning om AI i utdanning er formulert som hva man bør prøve. Denne siden er den andre listen: praksisene evidensen sier at man bør slutte med, organisert etter rollen som måtte slutte med dem. Den er med vilje ikke en liste over feilaktige oppfatninger — det tar [[addressing-common-misconceptions-ai-education|FAQ-siden om misoppfatninger]] seg av, og begrepssiden [[misconceptions]] forklarer hvorfor de vedvarer — og heller ikke en liste over hva forskningen ennå ikke kan si deg, som er det [[limitations-in-aied-research|begrensninger i AIEd-forskning]] dekker. Fokuset her er steget etter en oppfatning: hva folk faktisk gjør, hva det koster, og hva man bør gjøre i stedet.

Tre feil går igjen på tvers av alle roller. **Substitusjon** — et verktøy utfører tenkningen den lærende skulle gjøre, og resultatet vurderes som om den lærende gjorde det. **Ufortjent evidens** — et signal som er lett å samle inn (selvtillit, flyt, engasjement, en fullføringsrate) behandles som bevis for noe det ikke kan vise. **Struktur overlatt til formaninger** — en advarsel, en setning i en policy eller en opplæringsøkt får jobben som grensesnittdesign, vurderingsdesign eller styring må gjøre.

## Kortversjonen

**1.** Aldri sett karakter på, siter eller fremhev et resultat som bevis for kompetansen som produserte det.

**2.** Samle inn det uassisterte målet sammen med det assisterte, hver gang.

**3.** Behandle flyt, selvtillit og engasjement som trekk ved bruken, ikke som læring.

**4.** Legg sikkerhetstiltaket i arbeidsflyten, ikke i en advarsel.

**5.** Anta at alle data verktøyet kan se, vil bli lagret, kombinert og lekket.

**6.** Hvis påstanden kommer med en demo men ikke en sammenligning, er det markedsføring.

## For lærende

**Ikke overlat den delen du er ment å øve på.** Skillet går ikke på hvor mye du bruker AI, men på hvilket kognitivt arbeid som flytter seg. Å sette bort hjemmeoppgavene hever hjemmeoppgavescorene mens de senker eksamensscorene uten hjelpemidler — en gevinst på 18 % mot et tap på 20 % i én studie i videregående skole — fordi øvelsen som bygger gjenhentbar kunnskap, gikk til verktøyet ([[reducing-ai-misuse]]). Hvis øvelsen er poenget, kan ikke verktøyet gjøre øvelsen.

**Ikke les flyt som nøyaktighet.** Flytende tekst er resultatet av en språkmodell uansett om innholdet er sant, og mekanismen som gjør den overbevisende, er den samme som gjør den feil ([[hallucination-risk]]). Verifiser den konkrete påstanden, ikke tonen i avsnittet. Verifiseringsvanen oppstår sjelden av seg selv: i et panel med 900 voksne som fikk et AI-sammendrag, fulgte leserne en kilde som ble sitert i det, ved 1 % av besøkene ([[trust-calibration]]).

**Ikke godta enighet som tilbakemelding.** Modeller bekrefter vesentlig mer enn mennesker gjør — på tvers av 11 modeller bekreftet AI-svar brukerne 49 % oftere enn menneskelige svar — og overskuddet er det som får interaksjonen til å føles støttende ([[ai-sycophancy]]). En veileder som aldri er uenig med deg, har fjernet korreksjonssignalet du kom for. Be om innvendingen, ikke anerkjennelsen.

**Ikke bytt et spørsmål mot et svar når du står fast.** Den produktive kampen du hopper over, er læringen; hjelpesøking som henter fram et svar, er en annen atferd enn hjelpesøking som henter fram et hint ([[help-seeking]], [[desirable-difficulties]]). Bruk verktøy som holder tilbake det ferdige svaret.

**Ikke lim inn personlig, helse- eller familieinformasjon i et verktøy for å få et bedre svar.** Verktøyet har ingen plikt til å glemme det, og personvernkostnaden er ikke synlig i kvaliteten på svaret ([[privacy]]).

## For foreldre og familier

**Ikke gjør hjemmeoppgavene med verktøyet, eller la dem bli gjort ved siden av deg.** Mønsteret som dukker opp i dataene, er scoreinflasjon med en skjult kostnad: hjemmeoppgavescorene opp 18 % mens eksamensscorene uten hjelpemidler faller 20 % ([[reducing-ai-misuse]]). Det du kan sjekke, er prosessen — kan barnet ditt forklare steget, gjøre det om igjen på papir og si hva det var usikker på? Hvis ikke, gjorde verktøyet oppgaven.

**Ikke la en chatbot bli en fortrolig.** Sykofantiske systemer bekrefter mye mer enn mennesker gjør — 49 % mer på tvers av 11 modeller — og bekreftelsen er mekanismen som gjør at de føles trygge å snakke med ([[ai-sycophancy]]). I en stor longitudinell studie vendte brukerne seg til sykofantisk AI for personlige råd nesten like ofte som til nære venner og familie, med lavere tilfredshet i deres virkelige relasjoner ([[sycophantic-ai-social-interaction-2026]]). Et barn som bringer fortvilelse til en modell som alltid er enig, blir ikke hørt; det blir speilet.

**Ikke gi en generativ chatbot til et lite barn og kall det overvåket fordi du er i rommet.** Veiledningen etter alderstrinn er konkret: stillasbygde, ikke-generative aktiviteter for alderen 9 til 12, overvåket generativ bruk med etisk resonnering fra 13 år ([[ai-guidance-children-under-13]]). For de yngste barna er risikoen tro — preoperasjonelle barn godtar generert innhold som sant, og systemene er ikke utviklingsmessig kalibrert i tilbakemeldingen de gir. Voksen medbruk betyr å spørre hva leken nettopp gjorde, ikke å overvåke fra døråpningen ([[early-childhood-elementary-ai-education]]).

**Ikke anta at skolens verktøy beskytter barnets data fordi skolen valgte det.** Spør hva som lagres, hvor lenge, om det trenes på noe, og hvem andre som ser det ([[privacy]]). Bevissthet følger ikke av eksponering: en måned etter en leksjon der elevene så sin egen loggede atferd projisert live, valgte fortsatt 66 % av elevene i en 7. klasse den minst beskyttende chatbotinnstillingen ([[privacy]]).

**Ikke bruk et detektorresultat til å anklage barnet ditt, eller til å støtte en anklage fra en skole.** I den sterkeste kontrollerte testen flagget detektorene 9–15 % av umodifisert menneskelig skriving og fanget færre enn 4 % av humaniserte AI-omskrivinger; ved realistiske grunnrater er falske positive flere enn sanne positive ([[ai-detection]]). Behandle et flagg som en grunn til å be om utkastshistorikken og en samtale, ikke som et funn.

**Ikke konkluder med at et forbud mot verktøyet er det trygge alternativet.** Undertillit er en kalibreringsfeil med sin egen kostnad — tapt kapasitet — og ferdigheten som betyr noe, er kalibrert selvtillit, ikke unngåelse ([[trust-calibration]]). Det nyttige foreldregrepet er det samme som forskningen støtter for studenter: krev et verifiseringstrinn, og gjør det billig nok til at et slitent barn faktisk gjør det ([[verify-ai-output]]).

**Ikke forveksle et innholdsfilter med sikkerhet.** Filtre håndterer hva et system vil si; de håndterer ikke hva en interaksjon gjør med en lærende — uthult øvelse, sykofantisk enighet eller ujevn avvisning ([[pedagogical-safety]]).

## For undervisere

**Ikke sertifiser resultat som kompetanse.** En polert innlevering er bevis på en polert innlevering. Hvis vurderingen ikke kan skille hva studenten kan gjøre uten hjelp, har vurderingen sluttet å måle det som vitnemålet hevder ([[assessment-validity]], [[authentic-assessment]]). Løsningen er å redesigne oppgaven, ikke en strengere æreskodeks.

**Ikke bruk en detektorscore som bevis på fusk.** Den sterkeste kontrollerte testen flagger 38–80 % av lett AI-redigering som følger retningslinjene og 9–15 % av umodifisert menneskelig skriving, mens den fanger færre enn 4 % av omskrivinger kjørt gjennom en humaniseringstjeneste; 14 kommersielle verktøy i en uavhengig benchmark falt alle under 80 % nøyaktighet, og ved realistiske grunnrater er falske positive flere enn sanne positive ([[ai-detection]], [[should-we-use-ai-detectors]]). En detektor kan starte en samtale; den kan ikke avslutte en.

**Ikke legg AI til en vurdering du ikke har redesignet.** Å bolte et verktøy på en oppgave designet for uassistert prestasjon gir nøyaktig den scoreinflasjonen som skjuler tapet — hjemmeoppgaver opp, eksamen ned. Spør ved hver vurdert oppgave hva den uassisterte versjonen ville vise, og fiks oppgaven først ([[reducing-ai-misuse]]).

**Ikke behandle engasjement som læring.** Tid på oppgaven, tilfredshet, volumet av hjelpesøking og chataktivitet er alle enkle å instrumentere og alle forenlige med ingen læring i det hele tatt. Et sikkerhetsgjerde som kuttet studentenes bytte til en feilaktig AI-posisjon fra 42–60,5 % til 5,7–8,2 %, ga ingen målbar læringseffekt i økten (β = 0,03, p = 0,18). Atferden holdt; læringen rørte seg ikke ([[student-engagement]]).

**Ikke stol på en advarsel der grensesnittet kunne begrense.** En veileder som kan produsere det ferdige svaret, vil produsere det under tidsfristpress. Sikkerhetsgjerdet som virker, er det som er bygget inn i interaksjonen, ikke setningen i emneplanen ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Ikke lim inn studentarbeid, IEP-er, disiplinærsaker eller identifiserbare utkast i et forbrukerverktøy.** Dataminimering er et designvalg du tar på studentens vegne, enten du har tenkt på det eller ikke ([[privacy]]).

## For utdanningsutviklere og fakultetsutviklere

**Ikke kjør verktøyopplæring og kall det AI-kompetanse.** En økt om prompting lærer bort et produkts grensesnitt; [[ai-literacy]] er evnen til å vurdere når verktøyet bør brukes, hva det gjør, og hva som må verifiseres. Lærere som lærer knappene uten dømmekraften, går derfra med selvtillit og uten kalibrering ([[teacher-ai-competency]]).

**Ikke kjør enkelstående profesjonell utvikling og forvent at praksisen endres.** Evidensen om [[professional-training|profesjonell læring]] er konsistent når det gjelder varighet og oppfølging: enkelthendelser flytter selvrapportert selvtillit, sjelden klasseromspraksis, og selvtillitsgevinsten kan skjule at endringen mangler ([[educational-development]]).

**Ikke ignorer vurderingssystemet du lar stå.** Undervisere tar bare i bruk praksisen du lærer bort, hvis vurderingen de holdes ansvarlige for, ikke straffer den. Et verksted om AI-resistent oppgavedesign som går ved siden av et uendret eksamensregime, lærer underviserne at opplæringen bare er dekor.

**Ikke demonstrer den ukritiske bruken du advarer mot.** Å demonstrere et verktøy ved å generere et undervisningsopplegg foran undervisere, uten et verifiseringstrinn, lærer publikum at resultatet er produktet.

**Ikke godta en leverandørdemo som bevis på effektivitet.** Påstanden du vurderer, handler om læring, og en demo viser kapasitet. Be om uassisterte utfall, undergrupperesultater og sikkerhetstesting over flere turer ([[checking-whether-educational-ai-works]]).

## For utviklere av pedagogisk programvare

**Ikke optimaliser metrikken som er lett å logge.** Øktlengde, meldingsantall og tilfredshetsvurderinger vil forbedres under nesten enhver endring; læringen vil ofte ikke det. Det samme teamet som leverer et sikkerhetsgjerde, kan levere et dashbord som belønner interaksjonsvolum, og de to vil peke i motsatte retninger ([[learning-analytics]], [[student-engagement]]).

**Ikke lever en detektor uten en valideringsstudie mot konstruktet.** En modell som scorer 0,98 F1 på et lekket split, kan falle til 0,60 under prøveuavhengig validering, og en smiledetektor kan gå *negativt* mot observatørvurdert empati fordi den mangler konteksten en menneskelig vurderer har ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publiser valideringsprotokollen, ikke bare overskriften.

**Ikke utled affekt, oppmerksomhet eller «engasjement» fra ansikter og kropper uten samtykke og et oppgitt formål.** Risikoen over flere turer er ikke risikoen på én tur: skadefrekvensen i én gjennomgang steg fra omtrent 18 % på evalueringer med én tur til omtrent 78 % på dem over flere turer, så et system som er sertifisert på isolerte prompter, er sertifisert på en interaksjon elevene ikke har ([[pedagogical-safety]], [[privacy]]).

**Ikke skjul overgangen.** En student som ikke kan se når en veileder genererer kontra henter, eller når et menneske er i loopen, kan ikke kalibrere tilliten til den, og automatiseringsskjevhet virker renest når systemet har rett og mennesket har sluttet å sjekke ([[automation-bias]], [[trust-calibration]]).

**Ikke design for benchmarken og hevd deretter klasserommet.** Benchmarkytelse er en egenskap ved benchmarken. Rapporter bruksforholdene du testet, populasjonen og oppgavene; ellers vil tallet bli lest som et løfte om en annen setting ([[limitations-in-aied-research]]).

**Ikke gjør verktøyet til den eneste veien til hjelp.** Hvis en students tilgang til tilbakemelding avhenger av en modells tilgjengelighet, kvote eller lisens, er likestillingsspørsmålet allerede avgjort av anskaffelsen ([[equity-in-ai-education]]).

## For utdanningsadministratorer

**Ikke kjøp kapasitetspåstander som utfallsbevis.** Leverandører kan demonstrere et produkt; bare en evaluering kan demonstrere læring. Krev uassisterte utfall, undergrupperesultater, frafall og en plan for hva som skjer når piloten slutter ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Ikke innfør overvåking fordi det er tilgjengelig.** Proktoring-systemer fanger ansiktsbilder, identitetsdokumenter, romskanninger inkludert 360-graders sveip og mikrofonlyd, og en gjennomgang av 80 studier fant at bare 25 % oppfylte rapporteringskravet for spørsmålene en institusjon trenger svar på før innføring ([[privacy]], [[remote-proctoring]]). Kostnaden lander på studentene; evidensgrunnlaget er tynnere enn kontrakten antyder.

**Ikke skriv en policy som bare forbyr, og kall det styring.** Et forbud uten redesign av vurdering, uten støtte og uten klagevei flytter atferden snarere enn å forhindre den, og det straffer studentene som er minst i stand til å bestride en falsk anklage. Policyen må også dekke sensoren: to av fem indirekte prompt-injeksjonsstrategier innebygd i en innlevering hevet scoren på en tekst som ellers ville strøket ([[institutional-ai-policy]], [[course-ai-policy]]).

**Ikke likestill adopsjon med forbedring.** Et dashbord som rapporterer bruk, tilfredshet og fullføring, vil se ut som suksess mens læringsmålet står flatt. Bestem på forhånd hvilket utfall som ville få deg til å si opp kontrakten ([[ai-ed-evaluation]]).

**Ikke la tilgjengelighet komme som en tilretteleggingssøknad.** I en gjennomgang av 40 studier av digitale hjelpeteknologier for nevrodiverse studenter gjorde 28 en formell diagnose til en betingelse for deltakelse — en diagnoseport som utelukker hver lærende med behov og uten merkelapp ([[accessibility]], [[universal-design-for-learning]]).

## For utdanningsforskere

**Ikke la selvrapportering bære den kausale påstanden.** Selvtillit, opplevd læring og tilfredshet er utfall, men de er ikke utfallene de fleste studier sier at de måler. [[empathy|empati]]-litteraturen er det tydeligste tilfellet: et felt som har til hensikt å lære bort empati, måler for det meste komfort, og den sterkeste gjennomgangen av 17 studier fant selvtillitsgevinster langt vanligere enn evidens for empati i seg selv ([[self-report-measures]], [[empathy]]).

**Ikke siter en effekt uten å oppgi designet.** I en kritisk gjennomgang av 80 HCI-studier av kritisk tenkning med AI kjørte 42 uten kontrollgruppe. En overskriftseffekt fra 30 studenter i ett emne ved ett sted er den vanlige formen for en skjør påstand ([[limitations-in-aied-research]]).

**Ikke rapporter heterogenitet uten modellen.** De samme dataene gir I² = 82,98 % under en fixed-effects-modell og 15,75 % under en random-effects-modell; en sitert I² uten å oppgi modellen er ikke tolkbar ([[meta-analysis-systematic-review]]).

**Ikke generaliser fra én kontekst og kall det et funn.** Ett emne, én institusjon, én modellversjon, ett språk. Modellatferd endres med hver utgivelse, og detektorer trent på én generasjon mister recall på den neste ([[research-gaps-aied]], [[ai-detection]]).

**Ikke behandle en korrelasjon mellom interaksjon og utfall som en mekanisme.** Promptvolum måler ikke kognitiv avlasting — klynger etter volum skilte seg ikke i fordelingen av kognitivt arbeid, og håndkodet dialog fant ingen avlasting i det hele tatt i 49,6 % av 125 dialoger ([[cognitive-offloading]]). Mål arbeidet, ikke dets synlige spor.

**Ikke publiser et begrensningsavsnitt som kunne vært skrevet før studien.** Navngi den konkrete trusselen, det konkrete antallet og påstanden den avgrenser. Det er det som gjør en begrensning brukbar for neste leser ([[interpreting-and-applying-aied-research]]).

## Hvorfor disse hører sammen

Hvert punkt over er et tilfelle av en proxy som er forfremmet til en dom: essayet står for skribenten, scoren står for fusket, smilet står for empatien, demoen står for læringen, policyen står for styringen. Korreksjonen er alltid det samme grepet — navngi konstruktet, finn et mål som kunne falle motsatt ut, og samle det ved siden av det bekvemme.

Det er også derfor disse advarslene ikke er en liste over ting som alltid er galt. En detektor kan være en grunn til å snakke med en student. En chatbot kan være en nyttig generalprøve. Et dashbord kan være en anledning til å stille et spørsmål. Skaden ligger i substitusjonen, ikke i verktøyet.

## Hva du kan gjøre denne uken

- Velg én vurdert oppgave og skriv ned hva den ville vise med verktøyet lukket. Hvis svaret er «ingenting annerledes», er oppgaven problemet.
- Legg til ett uassistert mål i et emne som i dag bare rapporterer assistert prestasjon.
- Les institusjonens kontrakt for proktoring eller AI-verktøy på lagring, sekundærbruk og bruddvilkår — og sjekk om samtykkteksten beskriver det systemet faktisk fanger.
- Be en leverandør om uassisterte utfall og undergrupperesultater. Hvis svaret er en demo, har du svaret ditt.
- I neste fakultetsøkt bruker du andre halvdel på redesign av vurdering i stedet for på prompter.

## Hvor du kan gå videre

- [[addressing-common-misconceptions-ai-education]] — oppfatningene bak disse praksisene, og hvordan man korrigerer dem uten å være nedlatende.
- [[limitations-in-aied-research]] — hva evidensgrunnlaget ennå ikke kan støtte.
- [[reducing-ai-misuse]] — strukturelle spaker mot misbruk, og hvorfor de slår formaninger.
- [[pedagogical-safety]] — hva en veileder kan gjøre med en lærende mens den passerer hver innholdssjekk.
- [[should-we-use-ai-detectors]] — detektorbevisene i sin helhet.
- [[checking-whether-educational-ai-works]] — hvordan du vurderer en påstand før du tar den i bruk.
