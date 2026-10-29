---
title: "Hvad er bedste praksis for skriveundervisning i en AI-kontekst?"
created: "2026-09-12T08:13:03-04:00"
connected_faqs: [ai-feedback-at-scale, redesign-assessment-ai-era, addressing-common-misconceptions-ai-education]
foundations: [academic-integrity, cognitive-offloading]
assessment: [ai-feedback-quality, assessment-validity, evaluative-judgment, feedback-literacy, peer-assessment]
ethics: [ai-use-disclosure, multilingual-learning]
weight: 80
audience: [instructors, instructional designers]
discipline: [engineering education, humanities education, writing education]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/writing-instruction-ai-best-practices
source_updated: "2026-10-28T11:14:24-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Du sidder og skriver et opgaveark om, og sætningen foran dig siger, at AI er tilladt, hvis brugen angives, hvilket ikke fortæller den studerende noget som helst om, hvorvidt værktøjet må levere selve argumentet. En kollega har foreslået et forbud for hele kurset, og du har en mistanke om, at det rammer de flersprogede skribenter i lokalet hårdest. Eller også er en bunke opgaver kommet tilbage med en glattere formulering end den seminardiskussion, der lå bag dem, og du har brug for en regel, du kan forsvare på næste møde om kursusplanlægning.

Kernen i sagen: navngiv det intellektuelle arbejde, som opgaven findes for at frembringe, behold det trin hos den studerende, og giv værktøjet opgaver, der returnerer noget, den studerende skal bedømme. En regel skrevet på den måde fortæller den studerende, hvilket trin den beskytter.

## Den korte version

**1.** Skriv én sætning, der navngiver den tænkning, opgaven bedømmes på, og sæt den et sted, hvor de studerende læser den.

**2.** Få den studerende til at forpligte sig på en påstand, en fortolkning eller et groft udkast, før værktøjet ser opgaven.

**3.** Sæt grænsen per trin. Tillad AI, hvor trinnet ikke er det, du bedømmer, og begræns det, hvor det er.

**4.** Giv AI kritikerens stol, og bedøm derefter, hvad den studerende gør med svaret.

**5.** Behold ét stykke tekst, som værktøjet aldrig rører ved, og læs det AI-understøttede arbejde op imod det.

**6.** Sig på forhånd, hvad en redegørelse betyder for karakteren.

## Navngiv den tænkning, opgaven er til for

AI-grænsen er det andet spørgsmål, og de fleste opgaveark besvarer det først. Før du beslutter, hvad der er tilladt, skal du gøre denne sætning færdig: denne opgave findes for at vise, at den studerende kan X. Hvis X er argumentation, skal den studerende formulere og forsvare påstanden. Hvis X er faglig fortolkning, skal den studerende træffe fortolkningsdommen. Hvis X er videnskabelig ræsonnering, skal den studerende forbinde evidens med en konklusion. AI, der udfører det arbejde, bryder den slutning, du vil drage af opgaven, og velformuleret prosa reparerer det ikke. [[assessment-validity|Vurderingsvaliditet]] behandler dette som et validitetsproblem snarere end et adfærdsproblem, og det er grunden til, at både [[writing-education|skriveundervisning]] og [[academic-integrity|akademisk integritet]] ender med at argumentere for regler på opgaveniveau i stedet for forbud på kursusniveau.

[[nash-preservice-teachers-classroom-ai-policies-2026|Nash og Burriss]] viser, hvor let sætningen går galt. På tværs af 27 [[teacher-education|underviserstuderendes]] engelsklæreres klasselokalepolitikker for [[educational-policy-ai|AI]] tillod 22 AI til idégenerering og brainstorming, 22 forbød eller efterlod uklart brugen af AI til at komponere sætninger, afsnit eller opgaver, og 22 sagde slet intet om læsning. De samme lærere beskrev idégenerering og revision som »tænkning«, mens de placerede den egentlige tænkning i den færdige skrevne tekst. Hvis tænkning løber gennem planlægning, kladning, revision og vurdering, beskytter en politik, der kun vogter over det sidste produkt, det forkerte trin, og læsning har lige så meget brug for en eksplicit regel som skrivning.

Skriv reglen som en sætning om et trin, altså: »Du må bruge AI til at afprøve indvendinger mod en påstand, du allerede har fremsat. Du må ikke bruge det til at generere påstanden eller evidensen for den.« Det kan en studerende handle på. »AI tilladt, hvis brugen angives« giver dem intet at handle på.

## Få den studerende til at forpligte sig, før værktøjet svarer

Rækkefølgen af operationer er det mest anvendelige designvalg i denne litteratur. [[layer-sensitive-cognitive-offloading-writing-2026|Chens lagfølsomme studie]] af 168 bachelorstuderende i seks intakte klasser skelnede mellem fire slags udlicitering: overfladisk, strukturel, idébaseret og ræsonnementsmæssig udlicitering. Åben AI-samarbejde gav den stærkeste AI-understøttede skrivning og den svageste senere selvstændige præstation. At udlicitere ræsonnementet var det lag, der var mest negativt forbundet med selvstændig [[critical-thinking|højereordens tænkning]]. En afgrænset betingelse, som begrænsede, hvad de studerende måtte udlicitere, og krævede, at de forklarede, hvordan de havde accepteret, ændret eller forkastet hvert AI-forslag, klarede sig bedre på selvstændig skrivning, argumentdybde og revision.

Behandl den kausale påstand med varsomhed. Den er kvasi-eksperimentel, med seks intakte klasser og ingen tilfældig fordeling af studerende, så forskelle mellem klasserne forbliver filtret sammen med behandlingen. Retningen passer med den bredere litteratur om [[cognitive-offloading|kognitiv udlicitering]], og det er grunden til, at den er værd at handle på, men effektens størrelse er ikke noget, man citerer i et udvalg.

På opgavearket koster det én linje: den studerende medbringer en fortolkning, en hypotese, et argument eller en analyse, og AI bliver bedt om at angribe den. »Her er tre indvendinger mod mit argument« beholder tænkningen hos skribenten. »Skriv mit argument« gør ikke, uanset hvad den studerende efterfølgende gør med outputtet.

## Behandl det første udkast som det dyre trin

Assistance på forskellige stadier gør forskellig skade. I et studie af 253 skribenter reducerede enhver form for AI-assistance det oplevede ejerskab over arbejdet, assistance til kladning reducerede den mest, og assistance til planlægning reducerede den mindst. Mere AI-bidraget tekst og flere AI-bidragte idéer fulgtes med bedre opgavekvalitet og lavere ejerskab i samme aflevering ([[ai-writing-support-stage-ownership-2026|studiet om ejerskab fra planlægning til revision]]). Den kombination er den, man skal planlægge efter: en stærkere opgave og en svagere fornemmelse af forfatterskab ankommer sammen, og det andet er det, som [[agency]] i skrivning hviler på.

Hvis forfatterskab betyder noget i dit kursus, skal du dele tilladelserne. AI, der stiller spørgsmål ved planlægningen, spørger, hvilken evidens den studerende allerede har, eller navngiver en modargument, den studerende har overset, er forsvarlig næsten overalt. AI, der genererer afsnit, er svær at forsvare, hvor det at komponere er målfærdigheden. Hvor komponering ikke er målet, ændrer regnestykket sig.

## Sæt reglen for hvert trin

En sekvens, der er værd at låne, holder AI i en konsulentrolle og placerer ræsonnementet hos den studerende:

| Trin | Den studerende gør | AI må | Artefakt, du kan indsamle |
|---|---|---|---|
| **1. Møde evidensen** | Læse, observere, annotere, beregne, udføre eksperimentet | Intet, eller kun afklaring | Noter, annotationer, observationer |
| **2. Danne en position** | Generere fortolkning, spørgsmål, hypotese, påstand | Stille spørgsmål, udfordre antagelser | Notat med påstand eller hypotese |
| **3. Planlægge** | Beslutte evidens, rækkefølge, målgruppe, genre | Kritisere en disposition, foreslå alternativer | Disposition med begrundelse |
| **4. Kladde** | Frembringe substantiel prosa og ræsonnement | Begrænset efter læringsmålet | Udkast og versionshistorik |
| **5. Menneskeligt svar** | Give og modtage peer-feedback eller underviserfeedback | Intet nødvendigt | Peer-kommentarer |
| **6. AI-feedback** | Bede om kriterierefereret kritik | Kritiker, læser, generator af modargumenter, klarhedskontrol | Transskription af AI-feedback |
| **7. Vurdere feedback** | Sammenligne peer-, underviser- og AI-forslag, acceptere eller forkaste med begrundelse | Dets output er nu genstanden for vurdering | Beslutningsnotat om feedback |
| **8. Revidere** | Foretage og begrunde substantielle ændringer | Afprøve klarhed, tilbyde alternativer | Revision |
| **9. Verificere** | Kontrollere enhver faktuel eller kildeafhængig påstand | Kan ikke verificere sit eget output | Kilder og evidens |
| **10. Reflektere og redegøre** | Forklare AI's rolle og hvad der ændrede sig i deres tænkning | Intet | Kort procesrefleksion |
| **11. Uafhængig kontrol** | Forklare eller anvende ræsonnementet uden AI | Intet | Mundtligt forsvar, hurtigskrivning, ny case |

Dette er [[pairr-ai-peer-review-2025|PAIRR]] i udvidet form: udkast, menneskelig feedback, AI-feedback, sammenligning, revision, refleksion, med en uafhængig baseline og en strammere grænse omkring ræsonnementet. Brug den midterste kolonne som selve opgaven og den højre kolonne som det, en karakter kan hvile på.

Elleve rækker er mere, end de fleste opgaver har brug for. Skær tabellen ned til de trin, du faktisk kan skelne i undervisningen: at møde evidensen, at danne en position, at kladde og at revidere. I den kortere version er mødet med evidensen og positionen der, hvor konstruktet lever, kladning er det omstridte trin, og formatering eller referencekontrol kan tillades helt. Det er ved at skrive tabellen, du finder de to eller tre steder, hvor din regel er nødt til at sige noget, så en regel med tre klausuler, som en studerende kan følge, slår en matrix, som ingen læser.

## Behold den menneskelige feedback i loopet

Det største klasseværelsesstudie her er [[pairr-ai-peer-review-2025|PAIRR]]: 654 studerende på tværs af ti skrivekurser og tre skriveintensive [[stem-education|STEM]]-kurser. De skrev udkast, gennemførte [[peer-assessment|peer-vurdering]], indhentede rubrikbaseret AI-feedback, sammenlignede og vurderede begge kilder, skrev revisionsplaner, reviderede og reflekterede. Otteoghalvtreds procent foretrak kombineret peer- og AI-feedback. Seks procent foretrak AI-feedback alene. De studerende fandt AI nyttig til bred rubrikorienteret revisionsrådgivning, og peerne leverede kontekstuel viden og en autentisk målgrupperespons.

Vær præcis med påstanden. PAIRR målte de studerendes oplevelse og vurdering af feedback, ikke [[learning-gains|læringsudbytte]] på lang sigt, så det er stærk evidens for et feedbackdesign og svagere evidens for, at skrivningen bliver bedre måneder senere. Behold peer-trinnet, også når AI-trinnet er hurtigere. En stor del af arbejdet med [[feedback]] sker i sammenligningen mellem de to kilder, og hvis man dropper den, fjerner man netop den del, de studerende sagde, de værdsatte.

## Bedøm, hvad den studerende gjorde med feedbacken

[[feedback-literacy|Feedback-kompetence]] er evnen til at opsøge feedback, bedømme dens kvalitet, håndtere sin egen reaktion på den og omsætte den til revision. Studerende med mere af den har langt større udbytte af AI-feedback. Studerende, der behandler outputtet som autoritativt, får mindre ud af det ([[ai-feedback-quality|Kvaliteten af AI-feedback]]).

En kort beslutningstabel gør den kompetence synlig, med én række per forslag: AI-forslaget, accepter / forkast / ændr, hvorfor, og den rubrik eller det evidensgrundlag, der ligger bag beslutningen. Fire kolonner, ingen opgave påkrævet. Det forvandler modeloutput til materiale for [[evaluative-judgment|evaluerende dømmekraft]], og det giver dig noget, der kan bedømmes, og som ikke er prosaen.

Beskriv en stærk række lige så omhyggeligt, som du beskriver en teseformulering: den navngiver rubrikkriteriet, peger på en passage eller en evidens, og forklarer en ændring, den studerende faktisk foretog. En række, der siger »god pointe, enig«, giver ingen point. Studerende skriver efter det eksempel, de har foran sig, så eksemplet er instruktionen.

## Gør redegørelsen billig og specifik

Studerende skjuler AI-brug, når politikkerne er tvetydige, straffende eller stigmatiserende, og ærlighed kan tiltrække mistanke ([[ai-use-disclosure|AI-brug og redegørelseserklæringer]]; [[student-rationalization-ai-writing|forskning i studerendes rationalisering]]). Det, der gør redegørelsen pædagogisk nyttig, er, at den registrerer beslutninger: hvad værktøjet blev brugt til, hvad den studerende gav det, hvilke forslag der betød noget, og hvad den studerende accepterede eller forkastede.

[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed og Temimi]] leverer mekanismen. Redegørelsen bliver kun den attraktive mulighed, når prisen for ærlighed forbliver lav. Detektorer giver også falske positive over for ærlige studerende, så tungere overvågning kan gøre det relativt mere attraktivt at skjule noget. Deres råd er at designe for den studerende, der er mest fristet til at skjule, og at læse en angivet brug som kontekst snarere end som en tilståelse.

To detaljer gør mest arbejdet på formularen. Bed om specifikke anvendelser i stedet for en kategori, og angiv, hvordan en redegørelse vil påvirke karakteren. En studerende, der ikke ved det, vil antage det værste.

Fire spørgsmål er nok til de fleste opgaver: hvilket trin i arbejdet værktøjet blev brugt på, hvad den studerende gav det, hvilke forslag der ændrede udkastet, og hvilke der blev forkastet og hvorfor. Det sidste spørgsmål er det mest informative, fordi en forkastelse med en begrundelse er evidens for dømmekraft, mens en liste over accepterede forslag ikke er.

## Tilpas reglen til det, dit fag kalder skrivning

### Kompositions- og skrivekurser

Skriveundervisere har den stærkeste grund til at beskytte processen, fordi kladning, retoriske beslutninger, revision, målgruppebevidsthed og stemme er læringsmålene snarere end fremvisningen af dem. Indsaml flere uafhængige prøver tidligt i semesteret, så både du og den studerende ved, hvad skribenten kan nu. Introducer AI som målgruppe, kritiker og revisionspartner: spørg, hvor en læser mister tråden, generer indvendinger mod en tese, sammenlign et udkast med rubrikken, markér påstande uden støtte, forklar, hvorfor et afsnit føles usammenhængende. Den studerende bedømmer hvert forslag.

Behold peer-review ved siden af AI-feedback, da peerne leverer kontekstuel viden og målgruppeviden, som modellen mangler, og det at vurdere forskellen mellem de to er i sig selv skrivetræning. Vær konservativ med at lade AI generere lange stræk af et første udkast, når det at lære at komponere er målet, af de grunde om ejerskab og udlicitering, der er nævnt ovenfor. Undgå generelle forbud mod grammatik-, formulerings- eller sproghjælp, som skaber unødvendige barrierer for [[multilingual-learning|flersprogede skribenter]]. Adskil sprogstøtte fra intellektuelt forfatterskab i stedet: hjælp til udtrykket er fin, og den studerende forbliver ansvarlig for idéer, evidens, retoriske beslutninger og betydning. Gransk selve feedbacken, fordi [[marked-pedagogies-linguistic-bias-writing-feedback|Tan m.fl.]] fandt, at identisk skrivning fik mere ros og mindre substantiv kritik, når studerendes demografiske eller uddannelsesmæssige karakteristika blev inkluderet i prompten, hvilket placerer [[bias-mitigation|bias-afhjælpning]] inde i selve feedbackdesignet.

### Kurser i humaniora og samfundsvidenskab

Fortolkning er normalt målkompetencen, så lad mødet med kilden komme før mødet med AI. De studerende annoterer primærteksten, den historiske kilde, kunstværket, arkivmaterialet, interviewet eller den teoretiske passage og danner en første læsning, før de konsulterer noget som helst. Derefter fungerer modellen som en modstemme: tilbyd en alternativ læsning, sig hvilken evidens der ville udfordre denne fortolkning, navngiv de antagelser, argumentet gør, generer en læsning fra et kontrasterende teoretisk perspektiv. Den studerende afgør, hvilken læsning teksten faktisk understøtter.

Giv kritikken af modellen som fagligt arbejde. Giv de studerende en AI-fortolkning af et digt, en begivenhed, et argument eller et socialt fænomen og spørg, hvad den bemærker, hvad den overser, hvilken evidens der understøtter dens påstande, hvis perspektiv der mangler, og hvor den sammensmelter tvetydighed til et glat svar. Det holder fortolkningsdommen som det, et [[humanities-education|humaniora]]-kursus findes for at lære. Bedøm fortolkningsbeslutningerne og deres evidensmæssige begrundelse, og brug et kort samtalespørgsmål som »Hvorfor læste du denne passage sådan i stedet for det alternativ, du forkastede?« At gætte på, om en sætning ser maskinskrevet ud, er et svagere mål, som [[ai-detection|AI-detektion]] forklarer.

### STEM-kurser og laboratorierapporter

Først et forbehold: denne vidensbase har langt stærkere evidens om AI-understøttet akademisk skrivning generelt end om skrivning af laboratorierapporter specifikt. Praktisk og laboratoriebaseret [[pedagogy|pædagogik]] er stadig underbelyst, også i [[engineering-education|ingeniøruddannelseslitteraturen]], så det følgende anvender fund om skrivning, udlicitering, validitet og ingeniørfag på en kontekst, som de studier ikke har testet.

Træk grænsen omkring videnskabelig ræsonnering snarere end omkring prosa som helhed. De studerende forbliver ansvarlige for observationer, rådata, beregninger, usikkerhed, figurer, analysevalg, resultater og ræsonnering fra påstand til evidens. Når disse ting findes, kan AI med rimelighed hjælpe med organisering, læsbarhed, overgange og faglige konventioner, hvilket er den samme opdeling mellem overflade og ræsonnement som i [[layer-sensitive-cognitive-offloading-writing-2026|Chens studie]].

En rapportpakke til et laboratoriekursus i AI-alderen indeholder rapporten plus udvalgte rådata, beregninger eller notebook-output, en figur med en studerendes egen fortolkning og en kort erklæring om, hvordan den centrale konklusion følger af evidensen. Ved rapporter med stor vægt, stil et eller to individualiserede opfølgende spørgsmål om en graf, et anomalt resultat, et [[research-methods-aied|metodisk]] valg eller en begrænsning. Lad ikke skrivefærdighed stå i stedet for begrebsmæssig forståelse: automatiseret [[physics-education|fysik]]-bedømmelse kan undervurdere begrebsmæssig forståelse, når den sproglige formulering er svagere, og det rammer [[multilingual-learning|flersprogede studerende]] hårdest ([[automated-essay-scoring|Automatiseret opgavebedømmelse]]). Hvis både ræsonnering og skrivning er mål, skal de bedømmes separat.

### Ingeniørkurser

Fagligt ansvar ændrer formuleringen. En gennemgang af [[ethical-use-ai-engineering-education-review-2026|99 empiriske ingeniøruddannelsesstudier]] identificerede gennemsigtighed, [[human-in-the-loop-ai|menneskeligt tilsyn]], studerendes uafhængighed, privatliv, forfatterskab, retfærdighed og beneficens som tilbagevendende [[ethics|etiske]] problemstillinger og argumenterede for, at AI-etik hører til i den faglige dannelse og ikke kun i regeloverholdelse. I en laboratorie- eller designrapport kan du bede de studerende om at redegøre for assistance og bekræfte, at de har verificeret beregningerne, kilderne, antagelserne og de sikkerhedsrelevante påstande.

## Behold én prøve, som værktøjet aldrig rører ved

Assisteret præstation er ikke selvstændig formåen, og du har brug for mindst én læsning af den anden. Lejlighedsvise tilbagetrækningsbetingelser er nok: kort skrivning uden AI, fortolkning i undervisningen, en mundtlig forklaring, en samtale, spontan revision eller et opfølgende problem, der overfører det samme ræsonnement til en ny case. Det betyder mest, når den afsluttende opgave bærer en substantiel del af karakteren. Det betyder ikke, at hver opgave skal overvåges. Nogle få placerede prøver giver både dig og den studerende en baseline til at fortolke det assisterede arbejde, hvilket er skrivningsspecifikke tilfælde af argumentet i [[redesign-assessment-ai-era]].

Læs de to stykker side om side, og spørg, om ræsonnementet i det assisterede også er synligt i det uassisterede. Hvor det er tilfældet, gør opgaven sin pligt som evidens. Hvor det ikke er, måler den assisterede karakter det, værktøjet leverede. Den sammenligning er også det, du skal vise en studerende, der klager over en karakter, fordi den peger på et bestemt stykke tænkning snarere end på et indtryk af prosaen.

## Beslut, hvad AI må bedømme

To resultater, der ser modstridende ud, er forenelige. Omhyggeligt kalibrerede systemer med detaljerede rubrikker og eksempler kan bedømme bestemte opgaver godt, og [[llm|LLM]]-bedømmelse ud af boksen afviger betydeligt fra menneskelig dømmekraft. [[llms-do-not-grade-essays-like-humans-2026|Mathew m.fl.]] fandt svag overensstemmelse mellem mennesker og LLM'er, som varierer systematisk med opgavekvaliteten: modellerne overbelønner korte, overfladisk læsbare opgaver, underbelønner længere og stærkere opgaver med mindre overfladiske fejl og klumper sig sammen mod midten af skalaen. Det mønster understøtter AI til [[formative-assessment|formativ]] feedback med lav indsats, udkast til kommentarer og triage langt mere end til autonom [[summative-assessment|summativ]] bedømmelse ([[automated-essay-scoring|Automatiseret opgavebedømmelse]]).

De studerende drager selv en lignende grænse. I et bachelor-kursus i teknisk kommunikation, hvor [[generative-ai|ChatGPT]] bedømte håndskrevne tekster, og de studerende fik det at vide, fandt alle 13 deltagere feedbacken klar og nyttig til revision på overfladeniveau. De fleste skilte feedbackens nytteværdi fra dens vurderingsmæssige autoritet: de accepterede kritikken og insisterede på, at underviseren besluttede karakteren ([[student-perspectives-ai-writing-grading-2026]]). Design [[human-in-the-loop-ai|menneskeligt tilsyn]] som det punkt, hvor AI-output bliver til en karakter, snarere end som en høflighed, der tilbydes, når det passer.

## Bedøm evidensen, før du omskriver studieordningen

Sagen for disse designs er lovende og endnu ikke stærk nok til at retfærdiggøre én universel politik for AI-skrivning. Noget af den bedste evidens kommer fra substantielle klasseværelsesstudier som [[pairr-ai-peer-review-2025|PAIRR]] med dets 654 studerende. Meget af resten hviler på kvasi-eksperimenter, små eksperimentelle stikprøver, begrebsanalyser og arbejde fra 2025-2026, der stadig er nyt: [[layer-sensitive-cognitive-offloading-writing-2026|Chens afgrænsede skrivestudie]] havde 168 studerende, men kun seks intakte klasser, [[ai-writing-support-stage-ownership-2026|ejerskabsstudiet]] brugte en kort eksperimentel skriveopgave, og et studie, der rapporterede øjeblikkelige kvalitetsgevinster efter ChatGPT-træning, omfattede kun 21 internationale førsteårsstuderende og fastslog ikke [[transfer-of-learning|transfer]] på lang sigt ([[chatgpt-academic-writing-quality-ownership-2026]]). Det, [[ai-education|AI i uddannelse]]-vidensbasen understøtter, er et sæt designprincipper, og det mest pålidelige fund på tværs af studier er at bevare de studerendes [[agency|handlekraft]], [[evaluative-judgment|evaluerende dømmekraft]], selvstændige kompetence, faglige ræsonnement og menneskelige feedback, mens AI bruges til at udvide adgangen til kritik, øvelse, revisionsstøtte og sproglig assistance.

Den blanding har en praktisk konsekvens. Ændr én opgave, behold artefaktet, og sammenlign den næste årgang med denne på den samme måling. En regel, du kan revidere efter et semester, er mere værd end en politik, du ikke kan teste, og de små studier ovenfor fortæller dig ikke, hvad der sker i dit kursus.

## Hvad undervisere tager fejl af her

**En detektor afgør, om skrivningen er den studerendes.** Det gør den ikke. I et skjult feltstudie blev 94 % af AI-genererede eksamensbesvarelser ikke opdaget og fik højere score end rigtige studerende, og et kontrolleret studie fandt, at detektorer flaggede lovlig let AI-redigering i 38-80 % af tilfældene, mens de overså mere end 96 % af menneskeliggjorte omskrivninger ([[teichmann-detecting-undetectable-misconduct-2026]]; [[karr-ai-detection-humanization-2026]]). Detektion besvarer et detektionsspørgsmål, og [[assessment-validity|validitet]] er et andet spørgsmål.

**En politik på kursusniveau er klarere end en regel per opgave.** Nash og Burriss' politikker var dokumenter på kursusniveau, og 22 af 27 tillod brainstorming, 22 begrænsede eller slørede komponering, og 22 var tavse om læsning. Et dokument, der dækker alt, har en tendens til at være specifikt om det trin, underviseren bekymrer sig om, og vagt om resten.

**Bedre prosa betyder, at skriveundervisningen virkede.** Ejerskabsstudiet fandt bedre opgavekvalitet og lavere ejerskab i samme aflevering, og Chens betingelse med åbent samarbejde gav den stærkeste assisterede skrivning med den svageste senere selvstændige præstation. Prosaens kvalitet er et produktmål. Det, kurset er til for, er et kompetencemål.

**Ubegrænset adgang plus en god prompt er nok.** Studerende, der behandler AI-feedback som autoritativ, får mindre ud af den end studerende med udviklet feedback-kompetence. Adgang til kritik og evnen til at bruge kritik er to forskellige aktiver.

**Et forbud beskytter skriveprocessen.** Et forbud besvarer et spørgsmål, der varierer fra trin til trin, og det skaber barrierer for flersprogede skribenter, der har brug for sprogstøtte, som intet har med forfatterskab at gøre. En brugbar opdeling går mellem udtryk og intellektuelt ansvar.

## Hvad du vil få tilbage

**»Jeg har ikke tid til at læse endnu et artefakt.«** Så gør artefaktet lille: fire kolonner i en beslutningstabel eller fem minutter af skrivning i undervisningen som den uafhængige prøve. Vidensbasen rapporterer ingen data om rettetid for disse designs, så arbejdsbelastningsargumentet må testes på én opgave snarere end antages ud fra denne side.

**»Mine studerende bruger AI, uanset hvad reglen siger.«** Det gør de, og designspørgsmålet er, hvilket svar din opgave gør nemmest. En redegørelse, der ikke koster noget, og en rubrik, der belønner processen, gør redegørelsen til den billigere vej. Den mekanisme kommer fra modellering snarere end fra et forsøg med en redegørelsespolitik, så behandl forudsigelsen som rimelig og ubekræftet.

**»Et forbud er enklere, og det beskytter processen.«** Enklere, ja. Politikkerne ovenfor viser, hvordan én regel på kursusniveau glider over i tavshed om de trin, der betyder noget, og generelle sprogrestriktioner rammer de studerende, der har mest brug for dem.

**»Peer-review er overflødigt nu, hvor AI svarer på sekunder.«** Otteoghalvtreds procent af PAIRR-studerende foretrak kombinationen, og 6 % foretrak AI alene, og grunden, de angav, var den kontekstuelle viden og målgruppeviden, peerne leverede. Det måler oplevelse, så det rækker mindre langt, end et resultat om læringsudbytte ville gøre.

**»Modellen bedømmer denne opgave lige så godt som jeg.«** Kalibrerede systemer med detaljerede rubrikker og gennemarbejdede eksempler kan bedømme bestemte opgaver godt. Generisk bedømmelse gør det ikke, og Mathew m.fl. viser, at uenigheden følger opgavekvaliteten snarere end at sprede sig tilfældigt, hvilket er den sværere fejl at opdage. Afprøv værktøjet på dit eget rettede sæt, før det rører ved en karakter.

**»Det her straffer studerende, hvis akademiske engelsk er svagere.«** Det kan det, hvis reglen behandler udtryk og forfatterskab som én ting. Adskil dem, og gransk AI-feedbacken for det mønster, Tan m.fl. fandt, hvor identisk skrivning fik mere ros og mindre substantiv kritik, når demografiske eller uddannelsesmæssige karakteristika var i prompten. Korpus dokumenterer den bias. Det rapporterer ikke en afprøvet løsning, så din egen sammenligning er kontrollen.

## Hvad du kan gøre i denne uge

**1.** Skriv kompetencesætningen til din næste store opgave, og sæt den på opgavearket.

**2.** Tilføj én linje, der kræver den studerendes påstand, fortolkning eller grove udkast før enhver AI-brug, og sig, hvad du vil indsamle.

**3.** Markér hvert trin i opgaven som konstruktbærende eller ikke, og omskriv AI-reglen, så den tillader værktøjet, hvor trinnet ikke bedømmes.

**4.** Tilføj en beslutningstabel om feedback med fire kolonner til rubrikken, med point knyttet til.

**5.** Planlæg ét kort stykke skrivning, som intet værktøj rører ved, og beslut nu, hvilken opgave det hører til.

## Hvor du kan gå videre

Vurderingssiden af dette argument, inklusive designet af autentificerede trin, findes i [[redesign-assessment-ai-era]]. For det politikdokument, de studerende faktisk læser, se [[course-ai-policy]], og for selve feedbackværktøjerne, [[ai-feedback-quality]]. [[verify-ai-output]] dækker, hvad de studerende bør kontrollere, når modellen leverer en påstand eller en kilde, og konceptsiden [[coach-not-crutch-ai-writing]] formulerer den grænse, som denne side hele tiden vender tilbage til.
