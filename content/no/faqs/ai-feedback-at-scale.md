---
title: "Hvordan kan AI hjelpe meg med å gi bedre tilbakemeldinger i stor skala?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T15:11:34-04:00"
translation_of: faqs/ai-feedback-at-scale
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

Det er uke seks. Du har en stabel med utkast, en rubrikk du tror på, og en voksende mistanke om at en tredjedel av kommentarene dine blir skummet og glemt. En kollega nevner at et verktøy nå kommenterer hvert utkast innen en time. Seksjonsmøtet trenger et svar: er dette en oppgradering, eller en raskere måte å produsere tekst ingen leser?

Kort svar å gi en kollega: AI-tilbakemelding gjør seg fortjent til plassen sin på dekning, rettidighet og konsistens, innenfor et smalt bånd. Språklig arbeid på korrekturlesingsnivå og rubrikkstyrte førstegangskommentarer er verdt å automatisere. Rekkevidde er den billige delen. I et klyngerandomisert eksperiment med 1 176 førsteårsstudenter slo refleksive og hybride design direkte AI-kritikk på forsinket [[transfer-of-learning|overføring]] uten AI. I et randomisert essayeksperiment med 70 studenter ga bedre vurdert AI-tilbakemelding ingen bedre revisjoner enn en erfaren lærers. Det en student gjør med en kommentar, avgjør utfallet, og [[feedback-literacy|tilbakemeldingskompetanse]] skiller studentene som vinner fra dem som kopierer.

## Kortversjonen

**1.** Bestem hva som teller som en seier før du piloterer noe: revisjonskvalitet og forsinket uassistert prestasjon, ikke hvor flytende kommentarene er.

**2.** Sorter dine egne kommentarer i rettelser på språknivå og vurderinger på skjønnsnivå. Bare den første kategorien er kandidat for automatisering.

**3.** Sett kildene i rekkefølge. Egenvurdering først, tilbakemelding fra medstudenter neste, AI-kritikk til slutt. To kilder side om side gir passivt opptak.

**4.** Gi modellen rubrikken din og få den til å resonnere trinn for trinn. En bar instruks gir generisk resultat.

**5.** Behold den endelige meldingen, tonen og alt som blir en protokoll, hos et menneske.

**6.** Budsjetter timene du vil bruke på sletting og kalibrering, og sammenlign dem med timene du frigjorde.

## Bestem hva som teller som en seier før du piloterer noe

Det fristende målet er kvaliteten på det modellen skriver. Det er også målet som villeder.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia mfl. (2026)]] randomiserte 70 studenter som skrev argumenterende essays på persisk, til tre grupper. Tankekjedeprompting ga signifikant bedre vurdert tilbakemelding (M = 12,90) enn zero-shot-prompting (M = 11,25, p = 0,01) og enn en erfaren menneskelig lærer (M = 11,20, p = 0,008). Tankekjedegruppen reviderte ikke essayene sine signifikant mer enn gruppen som fikk lærertilbakemelding, som oppnådde sammenlignbare gevinster. Bedre kommentarer, de samme revisjonene. Hvis suksesskriteriet ditt er kommentarkvalitet, leses den studien som en seier. Hvis det er hva som endret seg i essayet, gjør den ikke det.

To andre signaler smigrer en pilot som går dårlig, så fastsett dem på forhånd. Studenttilfredshet er ett. I den universitetsomfattende Deakin-piloten som rapporteres av [[tubino-adachi-ai-automated-feedback-literacy|Tubino og Adachi (2022)]], fantes positive gjennomsnittsvurderinger samtidig med feil som studentene flagget, så en undersøkelse med smilfjes er ikke evidens for nøyaktighet. Bruk er det andre. Deakin-verktøyet var valgfritt, og bruken lå i gjennomsnitt på omtrent 13 % av bachelorstudentene og 12 % av masterstudentene, til tross for at nesten 4 000 studenter hadde tilgang. Proaktive, høytpresterende studenter brukte det mer. Det er hva du får for å gjøre et verktøy tilgjengelig.

Utfallsmålet som holder, er revisjonskvalitet pluss forsinket prestasjon uten AI. Flere innleveringer samme dag er et brukbart spor på om en student engasjerte seg i det hele tatt. De er ikke bevis for at noe ble lært.

## Sorter kommentarene dine før du automatiserer dem

Ta ditt siste sett med kommentarer og del det i to: rettelser av setninger, og vurderinger av tenkning. Delingen forteller deg hva som skal automatiseres, og den er smalere enn leverandørene antyder.

Deakin-piloten gikk i 2021 og brukte FeedbackFruits' AI-verktøy for automatisk tilbakemelding i 29 emner og nesten 4 000 studenter. Det arbeider på teksttrekk på mikronivå: setningslengde, tegnsetting, grammatikk, tekststruktur. Det støtter korrekturlesingsstadiet, der underviseren setter parameterne, studenten bruker verktøyet selvstendig, og tilbakemeldingen kommer tidsnok til å være handlingsrettet. Det er arbeidsdelingen som skalerer, ikke modellen.

Kommentarer på skjønnsnivå er der feilmekanismene bor. [[learner-centered-feedback-ai|Aldino mfl. (2026)]] samlet problemer på undervisersiden fra 21 lærere i høyere utdanning: inkonsistent tone (n = 7), potensiell feilinformasjon (n = 5) og tillitsproblemer (n = 5). Revisjonsarbeidet deres gikk til å slette overdreven ros og generiske forslag i stedet for å legge til innhold. Den listen er gjennomgangsjobben din, og det er der timene går.

## Sett kildene i rekkefølge i stedet for å stable dem

Det sterkeste designbeviset kommer fra et multisite, klyngerandomisert, longitudinelt felteksperiment: 1 176 førsteårsstudenter i 48 seksjoner ved 4 universiteter og 3 [[stem-education|realfaglige]] fagområder, randomisert på seksjonsnivå til betingelsene: bare medstudenter, direkte GenAI, reflekterende GenAI og hybrid ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Den reflekterende betingelsen krevde egenvurdering før AI-kritikk. Den hybride kjørte egenvurdering, deretter tilbakemelding fra medstudenter, deretter GenAI-kritikk. Hybrid ga de største gevinstene i argumentkvalitet og den tydeligste fordelen i begrepslæring. Reflekterende og hybrid ga begge sterkere opptak av tilbakemelding og mer [[self-regulated-learning|selvregulert læring]] enn direkte GenAI, og begge slo den på forsinket overføring uten AI. Direkte GenAI hevet umiddelbar argumentkvalitet over tilbakemelding fra medstudenter, som er fordelen den har, og den gjorde det med svakere overføring.

Mekanismen forklarer hvorfor sekvensering betyr mer enn verktøyet. Direkte kritikk inviterer til passivt opptak: studenten leser en dom og anvender den. Reflekterende og hybride design tvinger studenten til å tolke kommentaren, sammenligne den med kriterier, vurdere relevansen og deretter revidere. Pedagogisk verdi avhenger mindre av AI-tilgang enn av om tilbakemeldingsmiljøet bevarer [[agency|studentens handlekraft]] og [[evaluative-judgment|vurderingsskjønn]] under revisjonen.

Tilbakemelding fra medstudenter gjør seg fortjent til sin egen plass i sekvensen. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen og Yan (2026)]] kjørte to parallelle engelskklasser (N = 118 førsteårsstudenter i Kina; GenAI n = 56, medstudenter n = 62) gjennom tre egenvurderingssykluser over ett semester. GenAI-støtte forbedret tilbakemeldingskompetansen litt, men signifikant, sammenlignet med menneskelig medstudentvurdering (ANCOVA p = 0,049, ηp² = 0,03). GenAI-studentene finpusset prompter iterativt og verifiserte eller utfordret unøyaktige resultater. Studentene i medstudentgruppen valgte kilder etter sosial bekvemmelighet og fikk vurderingsskjønnet forvrengt av vennskapsbias. Medstudentvurdering beholdt en egen verdi for publikumsbevissthet, og det er derfor forfatterne foreslår flertrinnsdesign med anonym tilbakemelding fra medstudenter i stedet for en erstatning.

Fordelen Gu mfl. fant, var liten, og de leser den som reell, men ikke transformerende i seg selv. Lærerstøtte, promptretningslinjer og arbeidsark gjorde den bærende jobben.

## Gi modellen en rubrikk, og la den vise trinnene sine

Rubrikkreferert generering er den automatiserbare delen.

Kvalitetsgevinsten hos Farrokhnia mfl. kom fra en tankekjedeprompt som tok modellen gjennom en trinnvis evaluering mot en argumentasjonsrubrikk, ikke fra en bar instruks om å gi tilbakemelding. Gu mfl. ga GenAI-gruppen sin ChatGPT-4o med forhåndstrente rubrikker og promptretningslinjer, som er det som gjorde resultatet kontrollerbart mot oppgitte kriterier. I begge tilfeller er prompten der kriteriene dine kommer inn i systemet, og resonneringssporet er det som lar deg se om modellen anvendte dem.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson og Yan (2025)]] gjør promptkvalitet til hengslet i hele prosessen. Vage prompter gir generisk, ubrukelig resultat, og genererte kommentarer kan være hallusinerte, partiske eller overlappende, noe som skyver vurderingsskjønnet tilbake på leseren. Kalibrering er enda skarpere. Hos Farrokhnia mfl. var kvaliteten på GenAI-tilbakemelding signifikant assosiert med styrken i studentens førsteutkast, mens lærerens tilbakemeldingskvalitet ikke var det. Læreren kalibrerte mer konsistent. Volum skalerer. Kalibrering gjør det ikke.

## Hold siste ord og protokollen menneskelig

[[becerra-aicofe-feedback-2026|Becerra, Palma og Cobos (2026)]] beskriver AICoFE, som kjører tre uavhengig finjusterte modeller (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) over rubrikkscorer og kvalitative observasjoner for å produsere uavhengige utkastkommentarer. Underviseren setter deretter sammen den endelige meldingen ved å velge setninger eller avsnitt, med en tegnforklaring som viser hvilken modell som bidro med hva. Modellen skriver utkast. Underviseren leverer, og leveransen signeres av én person som leste utkastet.

Aldino mfl. finner det samme mønsteret i vanlig praksis: hjelp, deretter verifisering. Maskinlæringskomponenten flagget oftest «Oppfyller læringsmålet» som manglende (20 av 21 lærere hadde utelatt det; 16 godtok flagget) og «Student-lærer-relasjon» (14 utelatt; 12 godtok). Lærerne avgjorde hvert forslag ut fra faglig skjønn, som er poenget med å sette dem i loopen.

Tolv av de 21 lærerne hos Aldino mfl. gjorde ytterligere revisjoner på setningsnivå, og det dominerende mønsteret var å kalibrere tone: dempe ros (f = 11), fjerne forslag (f = 9), fjerne oppmuntring (f = 8). Revisjonene klumpet seg i den relasjonelle dimensjonen, særlig Student-lærer-relasjon (f = 24). De beskyttet autentisitet og faglig stemme, og det arbeidet automatiseres ikke.

## Lær studentene å lese kommentaren

Tilbakemeldingskompetanse er en forutsetning, og den er ujevnt fordelt.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths og Lodge (2026)]] lot 32 psykologistudenter gjøre en skjerminnspilt essayoppgave på 25 minutter med ubegrenset tilgang til ChatGPT, og deretter se opptaket på nytt i et videostimulert intervju. Tilbakemeldingskompetanse var den eneste signifikante positive prediktoren for essaykarakteren (β = 0,46, p = 0,017). Hyppighet av GenAI-bruk, [[trust|kildens pålitelighet]] og [[prior-knowledge|forkunnskaper]] predikerte ikke prestasjon, et poeng [[feedback-futures-genai|Zhan, Wood, Carless og Yan (2026)]] også gjør i lederen for temanummeret. Færre enn en tredjedel av studentene sammenlignet AI-resultatet med en annen internettkilde. Halvparten uttrykte bevisst AI-unngåelse av hensyn til [[academic-integrity|akademisk integritet]] eller fordi de ville ha essayet i egne ord. De fleste ba om tilbakemelding på oppgavenivå, som overføres dårlig til andre oppgaver.

Ytterpunktene er synlige i paret av IELTS-skrivere som Zhan mfl. beskriver. En student med lav kompetanse skrev en vag prompt, fikk generisk tilbakemelding, stolte på den eller kopierte den for mye, og engasjerte seg overflatisk. En student med høy kompetanse skrev en kriteriespesifikk prompt, fulgte opp, kryssjekket kilder og overvåket revisjonene. Forskjellen var opplæring og vane, ikke verktøytilgang.

Fortell studentene rett ut at modellkommentarer kan være hallusinerte, partiske eller overlappende, og at studenten eier revisjonen. Ramm inn resultatet som en utkastmening som skal vurderes, ikke et svar som skal kopieres. Be deretter om sammenligningen, fordi færre enn en tredjedel av studentene gjør den uoppfordret.

## Hva undervisere tar feil om her

**Flere kommentarer betyr mer tilbakemelding.** Kommentarer er billige å produsere og dyre å absorbere, og begrensningen ligger på studentens side av loopen. De bedre vurderte AI-kommentarene hos Farrokhnia mfl. ga ikke mer revisjon enn lærerkommentarene gjorde.

**En bedre modell vil fikse det generiske resultatet.** Feilene i Deakin-verktøyet handlet om omfang: trekk på setningsnivå, et smalt korrekturlesingsbånd. Zhan mfl. plasserer løsningen i prompten, rubrikken eller mennesket, ikke i en større modell. Paret av IELTS-skrivere er demonstrasjonen; samme verktøy, ulike vaner, ulike resultater.

**Å gjøre verktøyet tilgjengelig er intervensjonen.** Bruken lå på omtrent 13 % av bachelorstudentene og 12 % av masterstudentene da verktøyet var valgfritt. Resten av designspørsmålet er hva som skjer med de andre 87 %.

**Tidsbesparelsen er automatisk.** Spurt om hva AI-tilbakemeldingsverktøyet ga dem, nevnte de 21 lærerne tidsbesparelse bare sjelden (n = 2). De nevnte refleksjon (n = 14), forbedret språk og struktur (n = 11) og identifisering av manglende komponenter (n = 10) langt oftere. Redigering (f = 32) og fjerning (f = 27) dominerte revisjonsarbeidet deres, med tilføyelse sjelden (f = 8). Det som dukker opp, er et utkast og en diagnostisk prompt. Det som også dukker opp, er gjennomgang, kalibrering og verifisering. [[ai-save-instructor-time|Arbeidsmengdespørsmålet]] er det som oftest loves bort, og GenAI omfordeler snarere enn fjerner lærerarbeid.

**Tilfredshetsvurderinger forteller deg at kommentarene er nøyaktige.** I Deakin-piloten fantes positive gjennomsnittsvurderinger samtidig med feil som studentene flagget. Ta et utvalg av resultatet mot din egen lesing av de samme utkastene, og logg hvor modellen var generisk, feil eller smigrende.

## Hva som kommer tilbake på deg

**«AI-tilbakemelding er ikke personlig.»** Ofte sant, og det er grunnen til å holde siste ord menneskelig. AICoFE finnes fordi generisk modellprosa ikke er det en student skal få: underviseren velger, redigerer og signerer den endelige meldingen. De 21 lærerne hos Aldino mfl. skrev om tonen av samme grunn. Personalisering er din jobb i dette designet, og modellen gjør forarbeidet.

**«Studentene mine kommer ikke til å lese tilbakemelding uansett.»** De leser mindre enn vi håper, og evidensen sier at løsningen er design, ikke volum. Opptaket i Deakin-piloten lå på omtrent 13 % og 12 %. De bedre vurderte kommentarene hos Farrokhnia mfl. ga ingen ekstra revisjon. Det som flyttet nålen, var sekvensering som tvinger engasjement, egenvurdering og deretter tilbakemelding fra medstudenter og deretter AI-kritikk, pluss tre revisjonssykluser over et semester som ga målbare forskjeller i tilbakemeldingskompetanse.

**«Dette er ikke det studentene betaler for.»** Hold da AI-en fra å bli den eneste stemmen de hører fra deg. Den forsvarlige versjonen gir studentene flere tilbakemeldingsøyeblikk mens du bruker timene dine på de skjønnstunge delene: det siste ordet, kalibreringen, kommentarene som bærer din autoritet. Det studentene mister ved uaktsom utrulling, er sammenhengen mellom kriterier, kommentarer og utfall. Spesifiser komplementariteten gjennom sekvensering, sammenligning, redigering og styring, og innvendingen mister sin kraft. La to kilder stå side om side, og den gjør det ikke.

**«Jeg har ikke tid til å gjennomgå alt modellen skriver.»** Så gjennomgå ikke alt. Automatiser båndet der feil er billige å fange, språklig arbeid på setningsnivå, og ta utvalg av resultatet på skjønnsnivå mot utkast du allerede har vurdert. Tallene fra Aldino mfl. forteller deg hva du skal se etter: tone, feilinformasjon, overdreven ros, overlapp.

## Hva du kan gjøre denne uken

**1.** Sorter ditt eget siste sett med kommentarer i rettelser på språknivå og vurderinger på skjønnsnivå, og tell hver haug.

**2.** Skriv den rubrikkrefererte, trinnvise prompten du ville gitt en modell, og test den mot tre utkast du allerede har vurdert.

**3.** Ta et utvalg av resultatet mot dine egne kommentarer, og logg hvor modellen var generisk, feil eller smigrende.

**4.** Legg opp én oppgave som egenvurdering, deretter tilbakemelding fra medstudenter, deretter AI-kritikk, og fortell studentene at AI-en er en utkastmening de forventes å utfordre.

**5.** Be om én sammenligning mot en annen kilde eller mot kriteriene, siden færre enn en tredjedel av studentene gjør dette uoppfordret.

**6.** Logg hvor mye av den endelige tilbakemeldingen som kom fra modellen, og hvor mye du endret. AICoFEs sporing av kuratering er modellen for den protokollen.

**7.** Følg med på skillet mellom erfarne og uerfarne. Undervisere med mer enn fem års erfaring rapporterte flere problemer med verktøyets resultat enn mindre erfarne kolleger, som verdsatte støtten. Hvis erfarne kolleger ser flere feil enn du gjør, er det informasjon om din egen kalibrering.

## Hvor du kan gå videre

[[feedback|Tilbakemelding]] er paraplybegrepet for hele systemet: tilbud, sløyfe, opptak og vurderingskontekst. [[ai-feedback-quality|Kvalitet på AI-tilbakemelding]] dekker hva som gjør genererte kommentarer nøyaktige, nyttige, rettidige og pedagogisk forsvarlige, og denne siden er den praktiske midten, om hvilke kombinasjoner av disse delene som gir bedre tilbakemelding i stor skala.

Spørsmål om hva en karakter skal bety når AI er involvert, inkludert konstruktsubstitusjon, autentisert prosessevidens og integritetsregler, hører til [[redesign-assessment-ai-era|ny utforming av vurdering i AI-tiden]] og [[assessment-validity|vurderingsvaliditet]] snarere enn her. For spesialtilfellet skriveopplæring, se [[writing-instruction-ai-best-practices|beste praksis for skriveopplæring i en AI-kontekst]].
