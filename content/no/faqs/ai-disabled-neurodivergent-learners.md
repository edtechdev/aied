---
title: "Hvordan kan AI støtte funksjonshemmede og nevrodivergente elever i emnet mitt?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, reducing-over-reliance]
weight: 65
type: faq
methods: [meta-analysis-systematic-review]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
research_method: [case study]
audience: [instructors, instructional designers]
level: [higher ed, k 12, special education]
updated: "2026-10-29T15:11:34-04:00"
translation_of: faqs/ai-disabled-neurodivergent-learners
source_updated: "2026-10-28T11:39:28-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Tilretteleggingsbrevet nevner en student, et emne og et verktøy du aldri har hørt om. Eller en student har spurt, med rimelig grunn, om hen kan fortsette å bruke tale-til-tekst-programvaren sin på en tidsbegrenset eksamen, og AI-regelen i emnet ditt sier nei til AI av noe slag. Eller tilgjengelighetskontoret vil ha svar innen fredag på om de skal kjøpe lisens på et leseverktøy, og leverandørens belegg er en uttalelse fra en annen campus.

Svaret som overlever alle tre: start med barrieren oppgaven skaper, bruk verktøyene som faktisk ble målt, og undervis i det du tar i bruk. To regler betyr mer enn ethvert produktvalg. Nevn transkribering og OCR i AI-policyen din som tilrettelegging i seg selv, og gi oppgaven struktur i stedet for å be studentene utlede den. Vær klar over hva belegget sier: det sterkeste tallet på denne siden kommer fra spesialundervisning i grunnskole og videregående med i hovedsak før-generativ AI, og litteraturen om høyere utdanning er et kart over hva som er forsøkt.

## Kortversjonen

**1.** Skriv den funksjonelle barrieren i tilretteleggingsbrevet før verktøynavnet: lesing og skriving, studiehåndtering, oppmerksomhet eller sosial kommunikasjon.

**2.** Start med strukturert undervisningsprogramvare, som har den målte effekten, og les hvor sikkert belegget er merket, før du kjøper chatboten du ble tilbudt.

**3.** Avgjør om dette er en designendring eller en personlig tilrettelegging. Der barrieren er delt, endre designet, fordi det fjerner steget der studenten må oppgi behovet sitt.

**4.** Undervis i verktøyet. En tilrettelegging som gis uten opplæring, er den sviktmodusen rettspraksis straffer.

**5.** Nevn transkribering og OCR uttrykkelig i AI-regelen, slik at et forbud skrevet mot generativ utforming ikke tar fra en student midlene til å produsere lesbart arbeid.

**6.** Kjør prøven mot barrieren og ikke mot en tilfredshetsundersøkelse, og si på forhånd hva du vil regne som at det virker.

## Start med barrieren oppgaven skaper

Det meste som går galt for studenter med funksjonsnedsettelser og for nevrodivergente studenter, skjer på oppgavenivå: en tekst som forutsetter trykt form, en video som forutsetter vedvarende oppmerksomhet, et gruppeprosjekt som forutsetter uskrevne sosiale regler. Disse barrierene går igjen på tvers av diagnoser, så det nyttige spørsmålet er hvilken funksjonell barriere et verktøy fjerner, og et innkjøpsspørsmål bør formuleres på samme måte.

Diagnostiske kategorier skjuler dette. Scoping-gjennomgangen nedenfor finner at litteraturen domineres av individuelle tilrettelegginger og verktøy for én nevrotype, organisert rundt formell diagnose, mens de funksjonelle forskjellene de adresserer, går på tvers av nevrotyper. Studenter med dysleksi har tendens til å ha nytte av mindre avhengighet av rent skriftlig materiale. Autistiske studenter og studenter med ADHD kan begge oppleve hyppig svingning i fokus, noe som gjør prestasjonen følsom for konsistent struktur og nok tid til å skifte oppgave. Et verktøy som er matchet mot en merkelapp, kan bomme på barrieren studenten i din gruppe faktisk har.

Den samme forsiktigheten gjelder gruppestatistikk. [[differential-effects-across-learner-groups|Differensielle effekter på tvers av studentgrupper]] rapporterer en betydelig større effekt for studenter med spesifikke lærevansker, utviklingshemming eller døvhet enn for studenter med autismespekterforstyrrelse, og den forskjellen var ikke statistisk signifikant på tvers av effektstørrelsene.

## Bruk det som er målt, og les merkingen

Det sterkeste kvantitative resultatet på denne siden er også det mest generelle, og det har begrensninger du bør ta med inn i innkjøpsbeslutningen.

[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang, Carter, Liu og Peng (2024)]] syntetiserte 29 (kvasieksperimentelle) studier av AI-baserte intervensjoner for studenter med funksjonsnedsettelser: 239 effektstørrelser fra 41 uavhengige utvalg, en statistisk signifikant middels samlet effekt på læringsutfall på Hedges' g = 0,588 (95 % KI [0,349, 0,826], p < 0,01), og høy heterogenitet mellom studiene. Akademisk prestasjon var den største utfallsundergruppen (k = 80, g = 0,929) og sosioemosjonelle ferdigheter den minste (k = 144, g = 0,382). Dataprogramvare, altså talegjenkjenning, ekspertsystemer og [[intelligent-tutoring|intelligente veiledningssystemer]], presterte sterkt (k = 74, g = 0,959) og [[educational-robotics|roboter]] middels (k = 144, g = 0,509), mens intelligent VR (g = 0,528) ikke var signifikant. Publikasjonsskjevhet var til stede (Eggers β = 2,837, p < 0,001); trim-and-fill reduserte estimatet til g = 0,269, fortsatt signifikant.

Hver studie var fra PK-12. 96,6 % brukte trinnbasert undervisning i spesialundervisning eller kliniske settinger, og de fleste brukte eldre regelbasert AI snarere enn [[generative-ai|generativ AI]]. Det støtter en forsiktig adopsjon av strukturert undervisningsprogramvare. Det overføres ikke til en allmenn chatbot, og å behandle det som om det gjør det, er den dyreste feilen som er tilgjengelig på denne siden.

Tre mindre resultater viser hva ett enkelt verktøy kan gjøre når barrieren er smal. Hvert av dem ble testet på en håndfull studenter, så behandle dem som rimelige og reversible eksperimenter snarere enn infrastruktur.

For oppmerksomhet delte [[adhd-video-segmentation-computing-education|Pimenova, Begel og kolleger (2026)]] undervisningsvideoer i etterkant inn i biter med én instruksjon og faste pauser. Med 17 studenter med ADHD og 10 uten forbedret det alle og brakte feilene og nølingen til ADHD-deltakerne opp på samme nivå som de andre. Den utjevnende effekten kom fra en lett omforming av materialet.

For språktilgang la [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al. (2026)]] til visuelle spørsmål (tidsstempler der visuell informasjon sannsynligvis leses feil) og følelsesspørsmål (tidsstempler der døve og tunghørte studenter tidligere har rapportert frustrasjon) til et [[llm|LLM]]-basissett, og produserte 30 spørsmål, ti per strategi. Med 16 studenter lå selvinnsikten i gjennomsnitt på 5,70 (SD = 1,12) på en sjudelt skala, og visuelle spørsmål ble oftere valgt av døve enn av tunghørte deltakere.

For lesing og skriving utvant [[dyslexlens-dyslexic-learners-ai|Rezazadegan et al. (2026)]] data fra dyslektiske studenters egne diskusjoner i forum. Disse studentene verdsatte AI til lese- og skrivestøtte og rapporterte ujevn kvalitet på resultatet og mangel på rettferdig tilrettelegging. Inkonsistensen er i seg selv en barriere: et verktøy man ikke kan stole på, legger til arbeid i stedet for å fjerne det.

Bildet for [[higher-ed|høyere utdanning]] er den svakeste delen av belegget og den delen som ligger nærmest jobben din. [[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel, Heimann og Prilop (2026)]] silte 766 poster fra fem databaser ned til 40 inkluderte studier publisert mellom 2015 og 2025. Generativ AI forekom i 15 av de 40 og [[virtual-and-augmented-reality|virtuell virkelighet]] i 11. Dekningen av barrierer var ujevn: lesing og skriving (n = 13) og studiehåndtering (n = 12) dominerte, oppmerksomhet (n = 4) og sosial kommunikasjon (n = 5) var forsømt, og bare 6 studier tok opp mer enn én barriere. Gjennomgangen utelukket [[k-12|grunnskole og videregående]] og spesialiserte institusjoner ved design, så den sier ingenting om yngre elever. Bruk den til å se hvilke barrierer som er adressert på ditt nivå, og hvilke som så vidt er berørt.

## Avgjør om du endrer designet eller tilretteleggingen

Universell utforming fjerner behovet for at en student må identifisere seg som en som trenger særskilt tilrettelegging. Tilrettelegging krever nettopp det, og stigmatiseringen er en del av prisen. Når en barriere viser seg å være delt, er derfor designendringen det bedre kjøpet: den når studentene som aldri oppgir behovet sitt.

Segmenteringsresultatet er det klareste tilfellet. En video kuttet i biter med én instruksjon og faste pauser forbedret alle studentene i studien, ikke bare dem med ADHD, og brakte feilene og nølingen til ADHD-deltakerne opp på samme nivå som de andre. Det er universell utforming som utfall, oppnådd med en klippejobb snarere enn med et produkt.

Den ærlige begrensningen: det er 17 studenter med ADHD og 10 uten, i én studie, og ingenting i denne litteraturen sier hvor langt du kan generalisere fra ett klasseromsresultat, eller når en students behov er så særegent at det krever en individuell ordning. Den vurderingen blir liggende hos deg og tilgjengelighetskontoret.

## Undervis i verktøyet, og sett et navn på opplæringen

Den dokumenterte svikten er en tilrettelegging som gis uten opplæring. I *W.A. v. Clarksville/Montgomery County School System* (2024) gikk en student som fikk AI som tilrettelegging, ut med eksamen uten å kunne lese, og retten fant at det ikke var gitt en gratis og hensiktsmessig offentlig utdanning.

To forhold gjør den svikten sannsynlig, og begge er institusjonelle. [[shin-ai-policies-sld-2026|Shin et al. (2026)]] brukte LLM-basert emnemodellering og to runder med Delphi-undersøkelser med 17 eksperter på tvers av 12 amerikanske policydokumenter om AI i utdanning fra 2015 til 2025. Utdanning av pedagogen er ett av deres fem validerte temaer, med 4 av 36 elementer, og ekspertene rangerte studentmedvirkning og AI-kompetanse som det mest essensielle: disse studentene skal lære å bruke AI ansvarlig og selvstendig, med vern mot overavhengighet undervist som en del av samme ferdighet. Forfatterne bak [[ludia-udl-ai-thought-partner-2026|LUDIA]] navngir hindringen som «kunnskapshandlingsgapet»: veiledning finnes i overflod, er skrevet i generelle vendinger, og en barriere er alltid spesiell for dette rommet, denne uken.

Det denne siden ikke kan gi deg, er en opplæringsprotokoll. Det finnes ingen formelle kunnskapsbaserte retningslinjer som hjelper pedagoger eller familier med å ta AI i bruk for disse studentene, så mengden opplæring, rekkefølgen i den og hvem som gir den, er skjønnsvurderinger. Rettspraksis setter gulvet snarere enn standarden: studenten må ende opp med å kunne gjøre det, og noen må stå ansvarlig for å få hen dit.

## Skriv transkribering og OCR inn i AI-regelen ved navn

[[wright-transcription-not-generation-2026|Wright (2026)]] argumenterer for at regler som behandler all «AI-bruk» likt, er for omfattende, fordi de ikke skiller tale-til-tekst-transkribering og OCR fra generativ utforming. Studenter med tilstander som påvirker finmotorikk, håndskriftens lesbarhet eller skrivetreffsikkerhet, har støttet seg på frittstående tale-til-tekst-produkter som Dragon NaturallySpeaking og frittstående OCR, og flere av dem er blitt avviklet eller svekket, mens AI-drevet transkribering har fylt det funksjonelle tomrommet.

En regel skrevet som «ingen AI» kan derfor ta fra studenten det viktigste middelet hen har til å produsere lesbart arbeid. Ingen har målt omfanget av denne fortrengningen ennå, og det er grunn til å være uttrykkelig snarere enn å vente på tallet. Nevn transkribering og OCR som tilrettelegging i policyen, side om side med forbudene mot utforming, slik at de to spørsmålene avgjøres hver for seg. Eksponeringen dette skaper for institusjonen, hører hjemme under [[legal-issues-and-risks]].

Dette er en endring på én linje i de fleste dokumenter, og det er linjen med de største konsekvensene på denne siden.

## Gi struktur der oppgaven forutsetter det

Struktur er det billigste tiltaket her og det som oftest utelates fra planen. [[neurodivergent-computing-students|Zastudil et al. (2026)]] undersøkte 24 nevrodivergente dataelever (autistiske og/eller med ADHD) og 20 nevrotypiske medelever, med fire oppfølgingsintervjuer. Gruppen av nevrodivergente var ukomfortabel med ustrukturerte eller tvetydige oppgaver og foretrakk sterkt mindre team som arbeider sammen over tid med uttrykkelig definerte roller, og mestret situasjonen ved å velge roller selv og oppgi behov strategisk.

Det er preferansedata, ikke en effektstudie, og det er samtidig designbriefen studentene skrev til seg selv. [[agentic-ai|AI]]-formidlet arbeid bærer en spesiell versjon av risikoen, fordi et verktøys samhandlingsmodell kan gjenskape den samme strukturelle tvetydigheten som oppgaven allerede hadde. Sjekk hva verktøyet ber studenten avgjøre alene, før du legger det til en oppgave.

## Kjør prøven mot barrieren, og skriv ned hva du tellet

Samlede effekter gir deg en retning. De sier ikke om verktøyet virker for studenten i din gruppe neste uke, så enhver prøve trenger et mål som er valgt før den starter.

Tre forbehold bør forme det målet. Det første er at rekkefølgen mellom undergrupper er antydende og ikke etablert: ingen moderator av noe slag nådde signifikans i metaanalysen fra 2024, så rangeringer som undervisbare agenter (g = 1,100) foran sosioemosjonelle coacher (g = 0,336), eller dyadisk interaksjon foran triadisk (g = 0,973 mot g = 0,385), bør ikke behandles som avgjorte. Retningen på effekten er understøttet; størrelsen, det optimale designet og holdbarheten til en eventuell gevinst er det ikke.

Det andre er at dette korpuset beskriver utplasseringer og oppfatninger mer enn målt læring. Oppmerksomhet (n = 4) og sosial kommunikasjon (n = 5) er de minst studerte barrierene, og knappheten på (kvasieksperimentelle) og longitudinelle design er grunnen til at arbeidet om høyere utdanning er en scoping-gjennomgang snarere enn en metaanalyse. Dekningen skjever mot bachelorstudenter og det globale nord, søket var engelskspråklig fagfellevurdert arbeid, og doktorgradsstudenter er underrepresentert. Engasjement og tilfredshet er svake indikatorer.

Det tredje er at et verktøy som retter opp én barriere, kan la en annen stå. Sjekk verktøyet mot den konkrete vanskeligheten studenten rapporterer, enten det er lesing og skriving, studiehåndtering, oppmerksomhet eller sosial kommunikasjon, og vurder mot den vanskeligheten snarere enn mot hvordan studenten opplevde produktet. Spør studenten hva som skal telles. Deltakerne til Zastudil et al. og forumskribentene til Rezazadegan et al. beskriver behovene sine mer presist enn produktene som er bygget for dem.

Det du ikke finner her, er et validert instrument for å måle en barriere i ett enkelt emne, eller belegg for hvor lenge en prøve bør vare. Begge deler er hull i litteraturen og ikke svikt i søket ditt, og de er verdt å skrive ned i gjennomgangsnotatene.

## Kjøp for barrieren, og avvis standardvalget som er dyrt

To innkjøpskrav kommer rett ut av gjennomgangen: skriv universell utforming og deltakende utvikling som vilkår, og bygg verktøy sammen med nevrodivergente studenter snarere enn for dem. Gjennomgangens eget utvalg viser hvor sjeldent det er, med bare 3 av 40 studier som behandlet miljøet eller nevrotypiske medelever som gjenstand for intervensjon.

Deretter må du budsjettere ærlig. Hjelpeteknologi trenger enheter og nettforbindelse, og verktøy som er gratis i en pilot, flytter rutinemessig bak en betalingsmur. [[virtual-and-augmented-reality|Virtuell virkelighet]] er det mest ressurskrevende alternativet i settet, og feltet er konsentrert i det globale nord, så de mest innlevende verktøyene er de minst skalerbare. [[shin-ai-policies-sld-2026|Shin et al.]] peker direkte på [[digital-divide|den digitale kløften]]: prisen på avanserte AI-verktøy kan utvide forskjellene mellom rikere og fattigere skoler, sammen med algoritmisk skjevhet og hull i lærerutdanningen.

LUDIA er én bearbeidet versjon av det rimelige alternativet, og forfatterne er uvanlig tydelige på hva de ikke har vist. Det kobler pedagoger til [[universal-design-for-learning|universell utforming for læring]] mens en designbeslutning ennå er åpen, og fjerner tilgangsbarrierer gjennom arkitekturen: ingen kostnad, ingen kontoer eller lagrede samtaler, samsvar med WCAG 2.2 nivå AA, og 13 maskinoversatte språk, selv om versjoner på andre språk enn engelsk kan bære antakelsene fra engelsk de kom fra. Det er en tenkepartner og ikke en løsningsmotor, og forfatterne oppgir at de ikke har belegg for at det forbedrer læring. De navngir også en begrensning som hører hjemme i enhver utplasseringsplan: automatiseringsskjevhet betyr at pedagogen som mest sannsynlig godtar et dårlig forslag, er den som stoler på at verktøyet kan universell utforming for læring. Ingen har testet resultatene fra det for kulturell eller språklig skjevhet heller.

Ha en andre sviktmodus i sikte. Overavhengighet av chatboter og den kognitive overbelastningen i innlevende miljøer er dokumentert som inversjonseffekter, der det å legge til teknologien senker læringen. Et verktøy som bare gjengir eksisterende undervisning i digital form, bør forventes å gi begrensede [[learning-gains|læringsgevinster]].

## Hva undervisere tar feil om her

En diagnose forteller meg hvilket verktøy jeg skal kjøpe. Barrierene går på tvers av diagnoser, og et verktøy matchet mot en merkelapp kan bomme på barrieren som er i rommet. Spør hva oppgaven forutsetter: trykt form, vedvarende oppmerksomhet, uskrevne sosiale regler, en bestemt måte å produsere tekst på.

En tilrettelegging er en personlig ordning, så løsningen tilhører studenten. Noen er det, og de som er verdt å generalisere, er de du uansett ville ha designet inn. Segmentering hjalp hver student i studien sin. Designendringer fjerner steget med å oppgi behovet, og med det stigmatiseringen.

Engasjement og tilfredshet viser at verktøyet virket. De viser at studenten likte det. Dette korpuset er i hovedsak utplasseringer og oppfatninger, og bare 6 av 40 studier om høyere utdanning tok opp mer enn én barriere, så en tilfreds student er ennå ikke belegg for at en barriere falt.

Verktøyet bærer støtten, og undervisning er et tillegg. Rettspraksis behandler et verktøy uten opplæring som svikten, og policyekspertene rangerte studentmedvirkning og AI-kompetanse som sitt mest essensielle tema. Budsjetter undervisningstiden sammen med lisensen.

## Hva som kommer tilbake på deg

**«Vi kan ikke kreve et verktøy for alle.»** Der verktøyet er en designegenskap, er kravet selve poenget. Videosegmentering med faste pauser forbedret alle studentene og brakte feilene og nølingen til ADHD-deltakerne opp på samme nivå som de andre, og det er universell utforming som utfall, som fjerner behovet for å oppgi noe. Tilgjengelige standardvalg bærer samme logikk: opplesing, OCR og verktøy for tekstnivå går igjen i Shin et al.s validerte policyelementer. Korpuset deres viser også hvor langt policyen har å reise, siden bare 2 av de 12 dokumentene spesifikt tar opp lærevansker, mens 18 temaer som finnes i generell AI-policy eller policy for andre funksjonsnedsettelser, blant dem databeskyttelse, håndtering av juridisk risiko og etiske retningslinjer, mangler i policyen for spesifikke lærevansker.

**«Teksting og oversettelse er ikke faglig støtte.»** Teksting er en begynnelse, ikke hele språktilgangen. De visuelle spørsmålene og følelsesspørsmålene til Chen et al. finnes fordi en utskrift alene lar en døv student rekonstruere kontekst videoen aldri uttalte. Rangereringen fra policyekspertene er også uenig med innvendingen. Deres 36 validerte elementer fordeler seg på fem temaer, med inkluderende og personalisert læring størst med 11 (30,56 %) og etikk, likestilling og inkludering med 9 (25,00 %), og utdanning av pedagogen med 4 (11,11 %), men ekspertene rangerte studentmedvirkning og AI-kompetanse som det mest essensielle av de fem, med 6 elementer (16,67 %), på nivå med vurdering og forskning.

**«Studenter må være selvstendige.»** Selvstendighet er det opplæringen skal føre til, og derfor er verktøyet uten undervisningen svikten. Temaet om utdanning av pedagogen hos Shin et al. finnes av samme grunn. Omfanget av behovet er lett å underslå: rundt 240 millioner barn i verden lever med funksjonsnedsettelse, omtrent halvparten av dem står utenfor skolen i lav- og mellominntektsland, og omtrent en tredjedel av lærerne i OECD-systemer rapporterer at de mangler kompetansen til å støtte studenter med spesielle behov. I USA plasserer Assistive Technology Act (2004) og IDEA (2004) vurdering av hjelpeteknologi inne i hver individuell opplæringsplan og krever en gratis og hensiktsmessig offentlig utdanning, men ingen formelle kunnskapsbaserte retningslinjer hjelper pedagoger eller familier med å ta AI i bruk for disse studentene. Selvstendighet bygget på et verktøy uten opplæring er det rettspraksis straffer.

**«Vi har ikke råd.»** Da avviser du standardvalget som er dyrt. Virtuell virkelighet er det mest ressurskrevende alternativet i settet, og feltets mest innlevende verktøy er de minst skalerbare. Et gratis verktøy som bevarer personvernet og forbedrer designssamtalen, med forfatternes forbehold lest først, er et bedre åpningskjøp enn et headset.

**«Belegget er for tynt til å handle på.»** Tynt, og ikke tomt. Metaanalysen fra 2024 gir deg en retning med et bredt intervall og en korreksjon for publikasjonsskjevhet som kutter estimatet med mer enn halvparten, de tre enkeltverktøystudiene er små, og gjennomgangen av høyere utdanning måler dekning snarere enn effekt. Det dette understøtter, er det billige og reversible trekket: en designendring, en navngitt tilrettelegging, en prøve med et mål avtalt på forhånd. Å utsette beslutningen er også en beslutning, og den lar studenten foran deg sitte igjen med det standardordningen gir.

## Hva du kan gjøre denne uken

**1.** For hver tilretteleggingsforespørsel på bordet ditt, skriv den funksjonelle barrieren ved siden av verktøynavnet, og sjekk at verktøyet adresserer den barrieren og ikke diagnosen.

**2.** Spør om barrieren er delt av hele klassen. Er den det, endre designet: del videoen i biter, fjern tvetydigheten, slå på opplesing, og gi oppgaven den strukturen den manglet.

**3.** Legg transkribering og OCR inn i AI-regelen ved navn, slik at forbudet mot generativ utforming og tilretteleggingen for å produsere tekst avgjøres hver for seg.

**4.** Sett et navn og en dato på opplæringen: hvem som viser studenten verktøyet, når, og hvem som sjekker at det virker.

**5.** Bli enig om målet med studenten før prøven starter, og før resultatet inn i gjennomgangsnotatene, også når svaret er at det ikke hjalp.

## Hvor du kan gå videre

[[universal-design-for-learning]] dekker designtilnærmingen som forebygger barrierer før de oppstår, [[assistive-technology]] verktøylaget en student bruker, [[accessibility]] om et format i det hele tatt kan oppfattes og betjenes, og [[neurodiversity]] linsen som behandler forskjell som mangfold snarere enn som mangel, alt innenfor paraplyen [[inclusive-learning]]. [[reducing-over-reliance]] dekker overavhengighet og inversjonseffektene som avgjør om et verktøy fortsetter å hjelpe, og [[equity-ethics-pedagogical-safety-research|å innlemme likestilling, tilgjengelighet, personvern, etikk og pedagogisk sikkerhet i AIED-forskning]] dekker forpliktelsene på forskningssiden.
