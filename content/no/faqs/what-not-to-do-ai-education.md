---
title: "Hva bør undervisere unngå å gjøre med AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-11T06:20:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Det meste av veiledning om AI i utdanning sier hva man bør prøve. Denne siden samler praksisene som evidensen sier at man bør slutte med, sortert etter rollen som måtte slutte med dem. Feilaktige oppfatninger dekkes andre steder: [[addressing-common-misconceptions-ai-education|FAQ-en om misoppfatninger]] håndterer dem, og begrepssiden [[misconceptions]] forklarer hvorfor de vedvarer. Det forskningen ennå ikke kan si deg, hører til [[limitations-in-aied-research|begrensninger i AIEd-forskning]]. Det som følger her, er steget etter en oppfatning: hva folk gjør, hva det koster, og hva man bør gjøre i stedet.

Tre feil går igjen på tvers av rollene.

1. **Substitusjon.** Et verktøy gjør tenkningen den lærende skulle gjort, og resultatet vurderes som om den lærende gjorde det. Essayet som leveres inn, er en oversikt over hva modellen kan, ikke over hva studenten kan.
2. **Ufortjent evidens.** Et signal som er billig å samle inn, som selvtillit, flyt, engasjement eller en fullføringsgrad, behandles som bevis for noe det ikke kan vise. Et dashbord kan rapportere førti minutter i en veiledningsøkt; det kan ikke rapportere om noen lærte andregradsformelen.
3. **Struktur overlatt til formaninger.** En advarsel, en setning i en policy eller en opplæringsøkt får jobben som grensesnittdesign, vurderingsdesign eller styring må gjøre. Emneplanen sier at man skal bruke AI ansvarlig, og veilederen leverer fortsatt det ferdige svaret ved første prompt.

## Kortversjonen

**1.** Sett aldri karakter på, siter eller fremhev et resultat som bevis for kompetansen som produserte det.

**2.** Samle det uassisterte målet ved siden av det assisterte, hver gang.

**3.** Behandle flyt, selvtillit og engasjement som trekk ved bruken, ikke som læring.

**4.** Legg sikringstiltaket i arbeidsflyten, ikke i en advarsel.

**5.** Anta at alle data verktøyet kan se, blir lagret, kombinert og lekket.

**6.** Hvis påstanden kommer med en demo men ikke en sammenligning, er det markedsføring.

## For undervisere

**Ikke sertifiser resultat som kompetanse.** En polert innlevering er bevis på en polert innlevering. Hvis en student leverer en litteraturgjennomgang der du ikke kan sjekke kildene mot noe emnet har undervist i, og vurderingen ikke kan skille hva den studenten kan uten hjelp, har vurderingen sluttet å måle det vitnemålet hevder ([[assessment-validity]], [[authentic-assessment]]). Løsningen er å redesigne oppgaven; en strengere æreskodeks gjør ikke jobben.

**Ikke bruk en detektorscore som bevis på fusk.** I en kontrollert studie av 642 publiserte sammendrag flagget detektorene 38–80 % av lett AI-redigering som følger retningslinjene, og 9–15 % av umodifisert menneskelig skriving, mens de fanget færre enn 4 % av omskrivinger kjørt gjennom en humaniseringstjeneste ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). En uavhengig benchmark fant at ingen av 14 kommersielle verktøy nådde 80 % nøyaktighet, og enkel parafrasering halverer selv det ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Ved realistiske grunnrater er falske positive flere enn sanne positive ([[should-we-use-ai-detectors]]). En detektor kan starte en samtale; den kan ikke avslutte en.

**Ikke legg AI til en vurdering du ikke har redesignet.** Å bolte et verktøy på en oppgave designet for uassistert prestasjon gir nøyaktig den scoreinflasjonen som skjuler tapet, med hjemmeoppgaver opp og eksamen ned. Spør ved hver vurdert oppgave hva den uassisterte versjonen ville vise, og fiks oppgaven først ([[reducing-ai-misuse]]). Hvis hjemmeoppgavesettet og den skriftlige quizen tester samme ferdighet, måler bare én av dem studenten.

**Ikke behandle engasjement som læring.** Tid på oppgaven, tilfredshet, volumet av hjelpesøking og chataktivitet er alle enkle å instrumentere og alle forenlige med ingen læring i det hele tatt. I et 3 × 2-eksperiment med 186 deltakere som vurderte sivile saker på en LLM-støttet plattform, ga et sikkerhetsgjerde som kuttet bytte til en feilaktig AI-posisjon fra 42–60,5 % til 5,7–8,2 %, ingen målbar læringseffekt i økten (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Atferden endret seg; læringsmålet gjorde det ikke ([[student-engagement]]).

**Ikke stol på en advarsel der grensesnittet kunne begrense.** En veileder som kan produsere det ferdige svaret, vil produsere det under tidsfristpress, uansett hva emneplanen sier. Sikkerhetsgjerdet som virker, er bygget inn i interaksjonen ([[reducing-ai-misuse]], [[pedagogical-safety]]). Å holde tilbake det endelige svaret i de to første forsøkene er et designvalg; å be studentene la være å spørre om det er en anmodning.

**Ikke lim inn studentarbeid, IEP-er, disiplinærsaker eller identifiserbare utkast i et forbrukerverktøy.** Dataminimering er et designvalg du tar på studentens vegne, enten du har tenkt på det eller ikke ([[privacy]]). Den gratis chatbotkontoen som svarer på et spørsmål om en students atferdsplan, er også en kopi av den planen på noen andres server.

## For lærende

**Ikke overlat den delen du er ment å øve på.** Tenk deg at oppgaven er et essay på fem avsnitt: du limer inn oppgaveteksten i en chatbot, tar utkastet du får tilbake, og leverer det. Det du leverer, er en oversikt over hva modellen kan. Spørsmålet er hvilket kognitivt arbeid som flytter seg, ikke hvor mye AI du bruker. Å sette bort hjemmeoppgavene hever hjemmeoppgavescorene mens de senker eksamensscorene uten hjelpemidler: på tvers av 26 811 elever i videregående skole fulgt i 30 måneder steg hjemmeoppgavescorene 18 % og eksamensscorene falt 20 % innen seks måneder ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Øvelsen som bygger gjenhentbar kunnskap, gikk til verktøyet ([[reducing-ai-misuse]]). Hvis øvelsen er poenget, kan ikke verktøyet gjøre øvelsen.

**Ikke les flyt som nøyaktighet.** Flytende tekst er resultatet av en [[llm|språkmodell]] uansett om innholdet er sant, og mekanismen som gjør den overbevisende, er den samme som gjør den feil ([[hallucination-risk]]). Verifiser den konkrete påstanden, ikke tonen i avsnittet. Den vanen oppstår sjelden av seg selv: i et passivt sporingspanel med 900 amerikanske voksne som fikk et AI-sammendrag, fulgte leserne en kilde som ble sitert i det, ved 1 % av besøkene ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). Hvis oppgaven krever tre kilder, åpne alle tre.

**Ikke godta enighet som tilbakemelding.** Modeller bekrefter vesentlig mer enn mennesker gjør: på tvers av 11 modeller bekreftet AI-svar brukerne 49 % oftere enn menneskelige svar, og overskuddet er det som får interaksjonen til å føles støttende ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). En veileder som aldri er uenig med deg, har fjernet korreksjonssignalet du kom for ([[ai-sycophancy]]). Be om innvendingen, ikke anerkjennelsen: «Hva er galt med dette argumentet, og hva ville en skeptiker sagt?»

**Ikke bytt et spørsmål mot et svar når du står fast.** Den produktive kampen du hopper over, er læringen. Hjelpesøking som henter fram et svar, er en annen atferd enn hjelpesøking som henter fram et hint ([[help-seeking]], [[desirable-difficulties]]). Bruk verktøy som holder tilbake det ferdige svaret, og be om neste steg i stedet for løsningen.

**Ikke lim inn personlig, helse- eller familieinformasjon i et verktøy for å få et bedre svar.** Verktøyet har ingen plikt til å glemme det, og personvernkostnaden er ikke synlig i kvaliteten på svaret ([[privacy]]). En bedre prompt krever ikke diagnosen din, adressen din eller navnene i familien din.

## For foreldre og familier

**Ikke gjør hjemmeoppgavene med verktøyet, eller la dem bli gjort ved siden av deg.** Mønsteret i dataene er scoreinflasjon med en skjult kostnad: i det samme 30-månederspanelet steg hjemmeoppgavescorene 18 % mens eksamensscorene uten hjelpemidler falt 20 % ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Et barn som kommer hjem med perfekte hjemmeoppgaver og en strøket kapitteltest, viser deg akkurat denne forskjellen. Det du kan sjekke, er prosessen. Kan barnet ditt forklare steget, gjøre en oppgave om igjen på papir, og si hvilken del det var usikker på? Hvis ikke, gjorde verktøyet oppgaven.

**Ikke la en chatbot bli fortrolig.** Sykofantiske systemer bekrefter mye mer enn mennesker gjør, 49 % mer på tvers av 11 modeller, og den bekreftelsen er det som gjør at de føles trygge å snakke med ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). I en stor longitudinell studie vendte brukerne seg til sykofantisk AI for personlige råd nesten like ofte som til nære venner og familie, med lavere tilfredshet i deres virkelige relasjoner ([[sycophantic-ai-social-interaction-2026]]). Et barn som bringer fortvilelse til en modell som alltid er enig, blir ikke hørt. Det blir speilet. Hvis barnet ditt snakker med en chatbot om et vennskap eller et tap, er det øyeblikket å spørre hvem andre det har fortalt det til.

**Ikke gi en generativ chatbot til et lite barn og kall det overvåket fordi du er i rommet.** Veiledningen etter alderstrinn er konkret: stillasbygde, ikke-generative aktiviteter for alderen 9 til 12, overvåket generativ bruk med etisk resonnering fra 13 år ([[ai-guidance-children-under-13]]). For de yngste barna gjelder risikoen tro. Preoperasjonelle barn godtar generert innhold som sant, og systemene er ikke utviklingsmessig kalibrert i tilbakemeldingen de gir. Voksen medbruk betyr å sitte ved siden av barnet og spørre hva leken nettopp gjorde, ikke å se på fra døråpningen ([[early-childhood-elementary-ai-education]]).

**Ikke anta at skolens verktøy beskytter barnets data fordi skolen valgte det.** Spør hva som lagres, hvor lenge, om det trenes på noe, og hvem andre som ser det ([[privacy]]). Bevissthet følger ikke av eksponering: en måned etter en leksjon der en 7. klasse så sin egen loggede atferd projisert live, valgte fortsatt 66 % av de 47 elevene den minst beskyttende chatbotinnstillingen ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Still spørsmålene til skolen skriftlig, og be om svarene skriftlig.

**Ikke bruk et detektorresultat til å anklage barnet ditt, eller til å støtte en anklage fra en skole.** I en kontrollert studie av 642 publiserte sammendrag flagget detektorene 9–15 % av umodifisert menneskelig skriving og fanget færre enn 4 % av humaniserte AI-omskrivinger ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Ved realistiske grunnrater er falske positive flere enn sanne positive ([[ai-detection]]). Behandle et flagg som en grunn til å be om utkastshistorikken og en samtale, ikke som et funn.

**Ikke konkluder med at et forbud mot verktøyet er det trygge alternativet.** Undertillit er en kalibreringsfeil med sin egen kostnad, som er tapt kapasitet, og ferdigheten som betyr noe, er kalibrert selvtillit, ikke unngåelse ([[trust-calibration]]). Det nyttige foreldregrepet er det samme som forskningen støtter for studenter: krev et verifiseringstrinn, og gjør det billig nok til at et slitent barn faktisk gjør det ([[verify-ai-output]]). Å be om å se kilden en chatbot brukte, koster et minutt; å forby chatboten koster øvelsen.

**Ikke forveksle et innholdsfilter med sikkerhet.** Filtre håndterer hva et system vil si. De håndterer ikke hva en interaksjon gjør med en lærende: uthult øvelse, sykofantisk enighet eller ujevn avvisning ([[pedagogical-safety]]).

## For utdanningsutviklere og fakultetsutviklere

**Ikke kjør verktøyopplæring og kall det AI-kompetanse.** En økt om [[prompt-engineering|prompting]] lærer bort grensesnittet til et produkt. [[ai-literacy|AI-kompetanse]] er evnen til å vurdere når verktøyet bør brukes, hva det gjør, og hva som må verifiseres. Lærere som lærer knappene uten dømmekraften, går derfra med selvtillit og uten kalibrering ([[teacher-ai-competency]]). Et verksted som ender med at alle kan generere en undervisningsplan, og ingen kan si når den planen ikke bør brukes, har undervist i grensesnittet.

**Ikke kjør enkelstående profesjonell utvikling og forvent at praksisen endres.** Evidensen om [[professional-training|profesjonell læring]] er konsistent når det gjelder varighet og oppfølging: enkelthendelser flytter selvrapportert selvtillit, sjelden klasseromspraksis, og selvtillitsgevinsten kan skjule at endringen mangler ([[educational-development]]). En to timers økt i august, uten oppfølging i oktober, er en selvtillitsintervensjon.

**Ikke ignorer vurderingssystemet du lar stå.** Undervisere tar bare i bruk praksisen du lærer bort, hvis vurderingen de holdes ansvarlige for, ikke straffer den. Et verksted om AI-resistent oppgavedesign som går ved siden av et uendret eksamensregime, lærer underviserne at opplæringen bare er dekor.

**Ikke demonstrer den ukritiske bruken du advarer mot.** Å demonstrere et verktøy ved å generere en undervisningsplan foran undervisere, uten et verifiseringstrinn, lærer publikum at resultatet er produktet. Generer den foran dem, og merk deretter de to påstandene som må sjekkes.

**Ikke godta en leverandørdemo som bevis på effektivitet.** Påstanden du vurderer, handler om læring, og en demo viser kapasitet. Be om uassisterte utfall, undergrupperesultater og sikkerhetstesting over flere turer ([[checking-whether-educational-ai-works]]).

## For utviklere av pedagogisk programvare

**Ikke optimaliser metrikken som er lett å logge.** Øktlengde, meldingsantall og tilfredshetsvurderinger vil forbedres under nesten enhver endring; læringen vil ofte ikke det. Det samme teamet som leverer et sikkerhetsgjerde, kan levere et dashbord som belønner interaksjonsvolum, og de to vil peke i motsatte retninger ([[learning-analytics]], [[student-engagement]]). Hvis suksessmetrikken din er meldinger per økt, har du bygget et produkt som belønner studenter for å bli i chatten.

**Ikke lever en detektor uten en valideringsstudie mot konstruktet.** En benchmark med femten EEG-modeller nådde 0,9853 F1 under stratifisert kryssvalidering; forsøksuavhengig Group K-Fold, som respekterer grenser mellom forsøk, falt til 0,6038 mot et sjansenivå på 25 % ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). En smiledetektor kan gå *negativt* mot observatørvurdert empati fordi den mangler konteksten en menneskelig vurderer har ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publiser valideringsprotokollen sammen med overskriftstallet.

**Ikke utled affekt, oppmerksomhet eller «engasjement» fra ansikter og kropper uten samtykke og et oppgitt formål.** Risikoen over flere turer er ikke risikoen på én tur: i én gjennomgang av pedagogisk sikkerhet eskalerte feilene fra 17,7 % på evalueringer med én tur til 77,8 % på dem over flere turer ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Et system som er sertifisert på isolerte prompter, er sertifisert på en interaksjon studentene ikke har ([[pedagogical-safety]], [[privacy]]).

**Ikke skjul overgangen.** En student som ikke kan se når en veileder genererer kontra henter, eller når et menneske er i loopen, kan ikke kalibrere tilliten til den. [[automation-bias|Automatiseringsskjevhet]] virker renest når systemet har rett og mennesket har sluttet å sjekke ([[trust-calibration]]). Si i grensesnittet når et menneske vil lese arbeidet.

**Ikke design for benchmarken og hevd deretter klasserommet.** Benchmarkytelse er en egenskap ved benchmarken. Rapporter bruksforholdene du testet, populasjonen og oppgavene; ellers vil tallet bli lest som et løfte om en annen setting ([[limitations-in-aied-research]]).

**Ikke gjør verktøyet til den eneste veien til hjelp.** Hvis en students tilgang til [[feedback|tilbakemelding]] avhenger av en modells tilgjengelighet, kvote eller lisens, er likestillingsspørsmålet allerede avgjort av anskaffelsen ([[equity-in-ai-education]]).

## For utdanningsadministratorer

**Ikke kjøp kapasitetspåstander som utfallsbevis.** Leverandører kan demonstrere et produkt; bare en evaluering kan demonstrere læring. Krev uassisterte utfall, undergrupperesultater, frafall og en plan for hva som skjer når piloten slutter ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). En demo viser en veileder som løser en oppgave; den viser ikke en student som løser den neste.

**Ikke innfør overvåking fordi det er tilgjengelig.** Proktoring-systemer fanger ansiktsbilder, identitetsdokumenter, romskanninger inkludert 360-graders sveip og mikrofonlyd. En gjennomgang av 80 studier fant at bare 25 % behandlet etiske spørsmål i det hele tatt, 35 % oppgav ikke datasettet sitt, og 30 % kunne ikke reproduseres ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). Kostnaden lander på studentene, og evidensgrunnlaget er tynnere enn kontrakten antyder ([[privacy]], [[remote-proctoring]]).

**Ikke skriv en policy som bare forbyr, og kall det styring.** Et forbud uten redesign av vurdering, uten støtte og uten klagevei flytter atferden snarere enn å forhindre den, og det straffer studentene som er minst i stand til å bestride en falsk anklage. [[governance|Policy]] må også dekke sensoren: i en red-team-test av en vanlig karaktersettingsarbeidsflyt flyttet to av fem prompt-injeksjonsstrategier skjult i en innlevering en strøket tekst til bestått med 100 % og 94 % suksess på tvers av filtyper ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). En policy som binder studentene og ikke karaktersettingsløpet, er en halv policy.

**Ikke likestill adopsjon med forbedring.** Et dashbord som rapporterer bruk, tilfredshet og fullføring, vil se ut som suksess mens læringsmålet står flatt. Bestem på forhånd hvilket utfall som ville få deg til å si opp kontrakten ([[ai-ed-evaluation]]). Skriv ned det tallet før piloten starter.

**Ikke la tilgjengelighet komme som en tilretteleggingssøknad.** I en scoping-gjennomgang av 40 studier av digitale hjelpeteknologier for [[neurodiversity|nevrodiverse studenter]] gjorde 28 en formell diagnose til en betingelse for deltakelse. Den diagnoseporten utelukker hver lærende som har behov og ingen merkelapp ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## For utdanningsforskere

**Ikke la selvrapportering bære den kausale påstanden.** Selvtillit, opplevd læring og tilfredshet er utfall, men de er ikke utfallene de fleste studier sier at de måler. [[empathy|Empati]]-litteraturen er det tydeligste tilfellet: et felt som har til hensikt å lære bort empati, måler for det meste komfort, og en gjennomgang av 17 studier fant selvtillitsgevinster langt vanligere enn evidens for empati i seg selv ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Ikke siter en effekt uten å oppgi designet.** I en kritisk gjennomgang av 80 HCI-studier av [[critical-thinking|kritisk tenkning]] med AI kjørte 42 (52 %) uten kontrollgruppe ([[critical-review-critical-thinking-hci-research-ai-2026]]). En overskriftseffekt fra 30 studenter i ett emne ved ett sted er den vanlige formen for en skjør påstand ([[limitations-in-aied-research]]).

**Ikke rapporter heterogenitet uten modellen.** De samme dataene gir I² = 82,98 % under en fixed-effects-modell og I² = 15,75 % under en random-effects-modell ([[ai-supported-instruction-stem-meta-analysis-2026]]). En sitert I² uten modellen sin er ikke tolkbar ([[meta-analysis-systematic-review]]).

**Ikke generaliser fra én kontekst og kall det et funn.** Ett emne, én institusjon, én modellversjon, ett språk. Modellatferd endres med hver utgivelse, og detektorer trent på én generasjon mister recall på den neste ([[research-gaps-aied]], [[ai-detection]]).

**Ikke behandle en korrelasjon mellom interaksjon og utfall som en mekanisme.** Promptvolum måler ikke kognitiv avlasting. Klynger etter volum skilte seg ikke i fordelingen av kognitivt arbeid, og håndkodet dialog fant ingen avlasting i det hele tatt i 49,6 % av 125 dialoger ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Mål arbeidet selv.

**Ikke publiser et begrensningsavsnitt som kunne vært skrevet før studien.** Navngi den konkrete trusselen, det konkrete antallet og påstanden den avgrenser. Det er det som gjør en begrensning brukbar for neste leser ([[interpreting-and-applying-aied-research]]).

## Hvorfor disse hører sammen

Hvert punkt over forfremmer en proxy til en dom. Essayet står for skribenten, scoren står for fusket, smilet står for empatien, og demoen står for læringen. Korreksjonen er den samme hver gang: navngi konstruktet, finn et mål som kunne falle motsatt ut, og samle det ved siden av det bekvemme.

Ingen av disse advarslene betyr at verktøyet alltid er galt. En detektor kan være en grunn til å snakke med en student. En chatbot kan være en nyttig generalprøve. Et dashbord kan være en anledning til å stille et spørsmål. Det som gjør skade, er substitusjonen.

## Hva du kan gjøre denne uken

- Velg én vurdert oppgave og skriv ned hva den ville vise med verktøyet lukket. Hvis svaret er «ingenting annerledes», er oppgaven problemet.
- Legg til ett uassistert mål i et emne som i dag bare rapporterer assistert prestasjon.
- Les institusjonens kontrakt for proktoring eller AI-verktøy på lagring, sekundærbruk og bruddvilkår, og sjekk om samtykkteksten beskriver det systemet faktisk fanger.
- Be en leverandør om uassisterte utfall og undergrupperesultater. Hvis svaret er en demo, har du svaret ditt.
- I neste fakultetsøkt bruker du andre halvdel på redesign av vurdering i stedet for på prompter.

## Hvor du kan gå videre

- [[addressing-common-misconceptions-ai-education]]: oppfatningene bak disse praksisene, og hvordan man korrigerer dem uten å være nedlatende.
- [[limitations-in-aied-research]]: hva evidensgrunnlaget ennå ikke kan støtte.
- [[reducing-ai-misuse]]: strukturelle spaker mot misbruk, og hvorfor de slår formaninger.
- [[pedagogical-safety]]: hva en veileder kan gjøre med en lærende mens den passerer hver innholdssjekk.
- [[should-we-use-ai-detectors]]: detektorbevisene i sin helhet.
- [[checking-whether-educational-ai-works]]: hvordan du vurderer en påstand før du tar den i bruk.
