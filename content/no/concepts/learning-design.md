---
title: Læringsdesign
created: "2026-10-27T17:08:19-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: concepts/learning-design
source_updated: "2026-10-27T08:20:32-04:00"
updated: "2026-10-27T17:08:19-04:00"
translation_note: "*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

> **Læringsdesign** (også kalt *instruksjonsdesign*) - den systematiske prosessen med å skape effektive læringserfaringer gjennom analyse av læringsbehov og design, utvikling, gjennomføring og evaluering av undervisningsmaterialer og -aktiviteter. AI forandrer læringsdesign ved å automatisere innholdsproduksjon, muliggjøre [[adaptive-learning|adaptive læringsløp]], støtte datadrevet iterasjon og forsterke - snarere enn å erstatte - instruksjonsdesignerens rolle.

## Spørsmål å vurdere

- Tenk på et kurs eller en undervisningstime du har opplevd eller designet. Hvor sluttet «hva som skal læres bort» (kursutforming) og hvor begynte «hvordan det skal læres bort» (læringsdesign) - og hvordan påvirket de to hverandre?
- En vanlig antakelse er at bedre AI-flyt automatisk gir bedre pedagogisk innhold. Siden imøtegår dette med belegg for at eksplisitt pedagogisk struktur - ikke bare AI-flyt - er det som avgjør læringseffektiviteten. Hvor har du sett imponerende output som ikke klarte å lære bort noe?
- Hvis et AI-verktøy kan generere et helt kurs fra en prompt, hvilke menneskelige beslutninger blir da viktigere snarere enn mindre? Siden hevder at AI forsterker snarere enn erstatter instruksjonsdesignerens rolle - hvordan ville den forsterkede rollen se ut?
- Noen instruksjonsdesignmodeller som ADDIE brukes som rigide, lineære trinn. Men siden behandler dem som iterative, fleksible planleggingsheuristikker. Når kan det å følge en prosess for bokstavelig undergrave et godt design?
- Siden viser at pedagogisk forankret prompting - for eksempel et femtrinnsrammeverk bygget på læringsteori - forbedret høyereordens utfall betydelig. Hvis du bygde en AI-veileder, hva ville du kodet inn i et eksplisitt designlag slik at undervisningsstrategien forblir sporbar og reproduserbar?

## Introduksjon

Læringsdesign bygger bro mellom AI-ens muligheter og effektiv pedagogikk. Der [[curriculum-design]] handler om *hva* som skal læres bort på programnivå, handler læringsdesign om *hvordan* det skal læres bort på kurs- og leksjonsnivå. Artiklene i denne kunnskapsbasen utforsker både AI som verktøy for læringsdesignere og læringsdesignprinsipper for å bygge effektive [[intelligent-tutoring|AI-veiledningssystemer]].

Hva dette designarbeidet innebærer i praksis, er i seg selv et empirisk spørsmål. [[tang-chatbots-learning-design-2026|Tang et al. (2026)]] kodet 1 378 designer-chatbot-turer fra fem nybegynnerdesignere som arbeidet med en chatbot innebygd i et designverktøy, og fant at dialogen klynget seg om tiltenkte læringsutbytter og pedagogisk tilnærming snarere enn om innholdsgenerering. Designerne vendte tilbake til utbyttene gjentatte ganger som en justeringskontroll mens de gjorde kurskomponenter om til konkrete oppgaver, og assistentens rolle skiftet mellom fasene, fra å avklare begreper til å støtte oppgavedesign til å kjøre en verifiseringsrunde før en frist. Designstøtte handler, etter dette belegget, mindre om å produsere materiale enn om å holde designintensjonen sammenhengende.

Læringsanalyse og generativ AI støtter ulike deler av designet: på tvers av 11 fokusgrupper ved ett australsk universitet forekom analysediskursen oftest sammen med kontekst og problemløsning på kursnivå (0,32), mens GenAI-diskursen dreide seg om vurderingsdesign (0,26) og om å designe for elevenes selvbestemmelse (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]).

### Sentrale forskningstemaer

**AI-assistert innholdsproduksjon** er den mest direkte transformerende anvendelsen. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** presenterer en arkitektur i seks faser som integrerer generativ AI med LaTeX og Python for å automatisere produksjon av [[stem-education|STEM]]-materialer, validert på tvers av 8 moduler og 28 prosjektkontekster med elevenes kvalitetsvurderinger på 8,5-9,9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** bruker et multiagentrammeverk strukturert rundt ADDIE-modellen, der rollebaserte agenter (undervisningsfakultet, instruksjonsdesigner, kurskoordinator) samarbeider om å generere komplette kursmaterialer. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** tilbyr en strukturert pipeline for adaptiv [[pedagogy|pedagogisk]] [[video-education|videogenerering]] forankret i kurskorpus, og demonstrerer at eksplisitt pedagogisk struktur - ikke bare AI-flyt - er avgjørende for generering av pedagogisk innhold. [[generative-ai|Generativ AI]]-plattformer kan også legemliggjøre læringsdesignprinsipper i innholdet de produserer: [[ai-modeling-problem-generation-platform-2026|en AI-drevet plattform for å generere matematiske modelleringsproblemer]] kombinerte etablerte designprinsipper med [[prompt-engineering|hentingsforsterket generering]], utviklet gjennom ADDIE-tilnærmingen for å produsere pedagogisk forankrede oppgaver og anbefalinger som konvensjonelle innholdsgeneratorer mangler. Likevel er avkastningen av slik AI-assistert innholds- og leksjonsgenerering betinget av lærerens egen ekspertise: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] fant at erfarne lærere kritisk tilpasser AI-genererte leksjonsideer til elever og kontekst (de prompter på nytt og utdyper output), mens nybegynnere har en tendens til å godta AI-forslag direkte - så den pedagogiske verdien av AI-innholdsverktøy avhenger av lærerens erfaring og AI-kompetanse, ikke av verktøyet alene. En systematisk oversikt over [[wang-teacher-ai-co-design-review-2026|lærer-AI-samdesign av læringsoppgaver]] (Wang, Liu & Islam 2026) bekrefter mønsteret i stor skala på tvers av 28 studier (2015-2025): GenAI brukes hovedsakelig til leksjonsplanlegging, promptgenerering og kreativ idégenerering, og den dominerende samarbeidsformen er AI som assistent og innholdsgenerator snarere enn en fullere meddesigner - med effektivitet, responsivitet, [[creativity|kreativitet]] og [[equity-in-ai-education|likestilling]] som tilbakevendende affordanser. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] skjerper funnet om lærerekspertise for design av gruppeaktiviteter: erfarne lærere produserer rikere, mer synergistiske og bedre ZPD-tilpassede rollearkitekturer i AI-designde samarbeidsaktiviteter enn nybegynnere, uavhengig av AI-kjennskap, og rammer inn «pedagogisk promptkompetanse» som spaken som gjør AI-output om til effektiv [[collaborative-learning|differensiert gruppelæring]].

Aila-forsøket setter et tall på planleggingstiden for dette mønsteret. Lærere i grunnskolene som ble randomisert, brukte 2,51 timer i uken på å forberede leksjoner med verktøyet mot 3,32 timer uten det, men medianlæreren planla likevel bare 21 % til 40 % av leksjonene fra bunnen av, som er det tilfellet et verktøy for fra-bunnen-av-planlegging adresserer ([[roy-aila-lesson-planning-teacher-choices-2026|Roy et al., 2026]]).

Der genererte materialer kommer til kort, er det i kurstilpasningen: sju matematikklærere vurderte AI-genererte problemer for produktiv feiling nær menneskelagde på overordnet kvalitet (M = 17,19 mot 17,43 av 25), men lavere på kurstilpasning (M = 2,57 mot 3,29), så genererte problemer trengte fortsatt redigering for lengde, lesenivå og visuelle elementer ([[rhaimi-productivemath-2025|Rhaimi et al. (2025)]]).

**Pedagogisk forankret AI-veiledning** anvender instruksjonsdesignprinsipper på design av AI-systemer. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** bygde en didaktisk drevet [[llm]]-lærerassistent der veiledningsstrategien er kodet i et eksplisitt eksternt lag - noe som gjør innholdsvalg og didaktisk strukturering sporbart og reproduserbart og direkte adresserer åpenhetsproblemene i [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou et al.]]** demonstrerte at et femtrinns [[prompt-engineering|prompting]]-rammeverk forankret i generativ [[learning-theories|læringsteori]] forbedret høyereordens kognitive utfall betydelig, og viste at instruksjonsveiledning - ikke bare tilgang til AI - avgjør læringseffektiviteten. Begge knytter an til [[scaffolding]] og [[intelligent-tutoring]].

**Rammeverk og evaluering** gir strukturerte tilnærminger. **[[bridging-instructional-design-framework-math]]** og **[[cotal-formative-assessment-scoring-2026|CoTAL]]** demonstrerer [[human-in-the-loop-ai|menneske-i-sløyfen]]-designprinsipper. **[[genai-mindtool-generative-learning]]** posisjonerer AI som et «tankeverktøy» - en kognitiv partner som utvider snarere enn erstatter elevens tenkning - og anvender instruksjonsdesignteori direkte på AI-integrasjon. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** anvender prinsippene for universell utforming for læring for å lage en tilgjengelig AI-tankepartner for pedagoger, og knytter instruksjonsdesign til [[inclusive-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) er et oppgavestrukturerende rammeverk for kognitivt aktivert AI-bruk som avgrenser AI-ens bidrag slik at prediksjon, tolkning og evaluering forblir elevens - en AI-spesifikk tilpasning av undersøkelsessykluser forankret i [[self-regulated-learning]], kognitiv belastningsteori og [[human-ai-collaboration]]. Som et supplement til disse designrammeverkene tilbyr [[dohn-boundary-object-classifying-genai-learning-activities-2026|taksonomien fra Dohn et al. (2026)]] en *klassifisering* snarere enn en designmetode: seks kategorier (læringsmål, innhold, representasjonsformat, epistemisk [[student-engagement|engasjement]], sosialt design, artefakter) som lar designere og [[research-methods-aied|forskere]] beskrive, sammenligne og forestille seg GenAI-læringsaktiviteter ved å gjøre eksplisitt hvorfor, hva, hvordan, med hva og med hvem elevene engasjerer GenAI - bygget som et grenseobjekt gjennom postdigital dialog. Rammeverk for smarte klasserom utvider dette til [[teacher-education|lærerutdanning]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao og Wang (2026)]] foreslår et tredimensjonalt rammeverk for smart utdanning - læringseffektivitet, informasjons- og kommunikasjonsteknologi (IKT) og klasseromsorganisering - og instansierer det i et [[math-education|matematikk]]-emne på masternivå som integrerer [[automated-assessment|automatisk skåring]], tilpassede anbefalinger og multi-[[ai-feedback-quality|AI-tilbakemelding]] på tvers av stadier før, under og etter undervisningen. Et kvasieksperiment viste betydelige fremganger i elevenes evne til å formulere presise, profesjonelt forankrede undervisningsmål, og ga den overførbare **D-T-E-modellen** (Disciplinary Demand-Technological Empowerment-Evaluation Loop) - [[discipline-specific-aied|fagspesifikk]] veiledning for [[educational-development|lærerutdannere]] som vil flytte smartutdanningskonsepter inn i praktisk instruksjonsdesignpraksis.

**Design for rekkevidde.** Halanis rammeverk med sju spaker spør, for hver kursinnstilling, hvilke av dem som fortsatt virker når eleven er alene med AI; strukturelle grep som å endre hva karakteren attesterer, eller oppgaver som ikke kan fullføres uten tenkningen, når lenger enn å fortelle elevene at prosessen betyr noe ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Begrens verktøyet for å beskytte tenkningen.** Et ni uker langt design for argumenterende skriving sekvenserte læreravgrensede chatteroboter som stiller spørsmål og nekter å generere elevprosa, og fire videregåendeelever gikk fra passive AI-konsumenter til evaluatorer som presset tilbake på output - strategisk begrensning, ikke ubegrenset generativitet, fulgte gevinstene ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Rubrikkstyrt prompting som designspak.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] demonstrerte at rubrikken fungerer som et formidlende grensesnitt mellom menneskelig pedagogisk intensjon og maskinell inferens: å behandle vurderingskriterier som reviderbare designartefakter - snarere enn faste instrumenter - og iterativt finpusse dem sammen med LLM-en økte LLM-menneske-enigheten om elevenes designarbeid fra 54,75 % til 81,25 %. Rubrikker utformet for LLM-er må balansere presisjon og fleksibilitet - for vagt inviterer til fri tolkning, for rigid reduserer modellen til mønstergjenkjenning - og rollevis prompting (underviser, medelevvurderer, søknadsvurderer) ga distinkt evaluerende tilbakemelding. Dette posisjonerer rubrikkingeniørfag som en konkret læringsdesignpraksis for å forme AI-ens evalueringsatferd, med menneske-i-sløyfen-tilsyn fortsatt avgjørende.

**AI-agenter for instruksjonsdesign** utvider feltet inn i [[agentic-ai|agentisk AI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** er den første standardiserte, teoriforankrede benchmarken for å evaluere LLM-baserte instruksjonsdesignagenter - dens kontekstmatrise med 25 795 scenarier (51 kontekstvariabler × 33 ISD-deltrinn fra ADDIE) viser at agenter forankret i klassiske ISD-rammeverk (ADDIE, Dick & Carey, Rapid Prototyping ISD) presterer bedre enn teorifrie agenter, og validerer empirisk at instruksjonsdesign er en strukturert disiplin snarere enn en generisk promptoppgave. Agenter er ikke bare *byggerne* av design, men også *kritikerne* av dem: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] bruker en enkelt autonom webagent som navigerer en flertrinns nettleksjon som en elev for å evaluere et læringsdesign *før* ekte elever møter det - beskrivelsen av elevopplevelsen forutsier hvor nybegynnere faller fra og avdekker handlingsrettet designfeedback, og presterer bedre enn hver baseline og til og med en simulert elevkohort i et globalt CS1-kurs. Dette rammer inn evaluering før lansering, utført av agenter, som et rimelig supplement til menneskelig designiterasjon. **[[wang-multi-agent-systems-learning-designers-2025]]** og **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** utforsker multiagentrammeverk som orkestrerer rollebaserte agenter rundt instruksjonsdesignmodeller, mens **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** undersøker hvordan lærere og agenter sammen anvender teknologisk-pedagogisk-faglig kunnskap. Dette arbeidet knytter instruksjonsdesign til [[benchmark|benchmarking]], [[ai-ed-evaluation]] og design av [[curriculum-design|læreplaner]] i stor skala.
### Forbindelser til beslektede begreper

Læringsdesign er brodisiplinen i [[ai-education|AI i undervisning]] - den knytter [[curriculum-design]] (hva som skal læres bort) sammen med [[scaffolding]] (hvordan elever støttes), [[educational-development]] (hvordan pedagoger forberedes) og [[generative-ai]] (verktøyene selv). Den er tett koplet til [[teacher-role]] fordi AI-verktøy forandrer hva læringsdesignere og lærere gjør, og til [[ai-literacy]] fordi effektiv AI-integrasjon krever at pedagoger forstår AI-ens muligheter og begrensninger. Designarbeid løser seg til slutt ut i en *rekkefølge av aktiviteter*: [[pedagogical-patterns|pedagogiske mønstre]] katalogiserer de testede rekkefølgene av grep, slik at en designer kan avgjøre hvor i en leksjon AI hører hjemme, snarere enn bare hva som skal være med. [[learning-sciences|læringsvitenskapene]] er forskningsfeltet bak disse prinsippene: der denne siden dekker den profesjonelle praksisen med å skape læringserfaringer, studerer læringsvitenskapene denne praksisen og dens design empirisk og genererer de kognitive, motivasjonelle og sosiale prinsippene som læringsdesign deretter operationaliserer.

### Hvordan læringsdesign avgjør læringsutbytte

Læringsdesign er spaken som avgjør om AI gir [[learning-gains|læringsutbytte]] eller bare AI-oppblåst prestasjon. Belegget i kunnskapsbasen er entydig på dette: **det samme AI-verktøyet gir store gevinster eller netto skade, avhengig av hvordan læringserfaringen er designet rundt det.** [[instructional-guidance-genai-learning|Hou et al.]] viste at et femtrinns promptrammeverk forankret i læringsteori forbedret høyereordens kognitive utfall betydelig, mens tilgang til AI alene ikke gjorde det; [[genai-mindtool-generative-learning|tankeverktøy]]- og [[airis-cognitively-activated-ai-physics-2026|AIRIS]]-rammeverkene bevarer elevens kognitive arbeid slik at varige gevinster (snarere enn oppgaveeffektivitet) blir resultatet. Designvalg som beskytter [[learning-gains]] - scaffolding som krever et elevforsøk, [[formative-assessment]] med uassisterte utfallsmål og pedagogisk struktur som holder eleven som aktør - speiler feltets funn (se [[learning-gains]]) om at AI er en sterk gevinst når den veileder og en skade når den svarer. Omvendt faller dårlig designede AI-integrerte leksjoner offer for [[cognitive-offloading|gapet mellom prestasjon og læring]], der tilsynelatende suksess skjuler at ingen læring har funnet sted.

### Praktisk veiledning for designere og utviklere

For instruksjonsdesignere, kursutviklere og ingeniører som bygger AI-assisterte læringserfaringer, oversettes funnene i kunnskapsbasen til handlingsrettet praksis. Én grense er verdt å markere før praksisene selv: læringsdesign slik denne siden beskriver det, er designet av et kurs for en kjent kohort, mens de samme prinsippene bakt inn i et produkt som mange kurs - undervist av mennesker designeren aldri vil møte - skal bruke, er arbeidet til [[educational-technology-developers]], der standardvalg, konfigurerbarhet og dokumentasjon bærer pedagogisk vekt:

**Forankre AI-generering i en strukturert instruksjonsmodell.** AI-innhold er bare så godt som den pedagogiske strukturen bak det - eksplisitt struktur, ikke AI-flyt, avgjør kvaliteten. Design rundt en anerkjent modell (ADDIE, Dick & Carey, rapid prototyping) og kod pedagogiske beslutninger eksplisitt i stedet for å overlate til modellen å utlede dem.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Ta i bruk et prinsippnivårammeverk i tillegg til en instruksjonsmodell.** En kursnivåmodell strukturerer ett design; et publisert rammeverk setter kriteriene som mange design bør oppfylle. Et eksempel verdt å lese i sin helhet er Digital Promise sitt *Powerful Learning with Emerging Technology*, som organiserer veiledningen sin under tre prinsipper - evidensbasert, elevsentrert og ferdighetsbyggende - hvert utvidet til praksiser og strategier, og knytter [[privacy]], [[explainable-ai|forklarbarhet]] og rettferdighet til bestemte praksiser som sikkerhetsforpliktelser snarere enn valgfritt tilbehør.([[powerful-learning-with-emerging-technology-2025]])

**Tilpass AI-konfigurasjonen til oppgaven, ikke til sofistikerthet.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] skiller fire lag - prompt, kontekst, rammeverk og verifisert sløyfe - og anvender et prinsipp om minst mulig tilstrekkelig lag: bruk den minst komplekse konfigurasjonen som kan gi et verifiserbart resultat, siden tilført orkestrering medfører koordinerings-, verifiserings-, personvern- og forståelseskostnader.

**Bruk rollebaserte multiagentarbeidsflyter for innholdsproduksjon.** I stedet for én generisk prompt, orkestrer distinkte agenter eller roller (undervisningsfakultet, instruksjonsdesigner, kurskoordinator) som samarbeider gjennom en definert pipeline - dette speiler hvordan ekte kursteam arbeider og gir mer komplette materialer enn en enkelt prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Gi instruksjonsveiledning, ikke bare tilgang til AI.** Enten elevene samhandler direkte med AI eller med AI-genererte materialer, driver veiledning bygget på læringsteori (for eksempel en trinnvis prompt-[[scaffolding|støtte]] forankret i prinsipper for generativ læring) høyereordens utfall; tilgang alene gjør det ikke. Design læringsaktiviteten rundt hvordan hjernen lærer, og behandle AI som et kognitivt «tankeverktøy» som utvider tenkningen snarere enn å erstatte den.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modeller glemming, og legg repetisjonen der forfallet er størst.** G4L representerer kunnskapsforfall med en Ebbinghaus-glemningskurve drevet av medgått tid og repetisjoner, og prioriterer enhetene som er mest utsatt for forfall, snarere enn å servere på nytt det som ble skåret sist ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin et al. (2026) tilfører et operativt grep for å avgjøre hvor AI skal inn: løs opp en aktivitet i komponentene som gjøres best uavhengig og dem som gjøres best sammen med AI, og hold pedagogens skjønn sentralt i delingen ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Gjør innholdet sporbart og gjennomgåelig.** La en menneskelig designer gjennomgå og rette AI-output før det når elevene, og strukturer AI-genereringen slik at den pedagogiske begrunnelsen (hvorfor dette innholdet, i denne rekkefølgen) kan inspiseres - noe som adresserer både kvalitet og de åpenhetsproblemene som undergraver [[trust]]-generert undervisning.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Gjennomgå AI-genererte medier på manusstadiet, ikke etter syntesen.** PedaCo legger pedagoggenomgang på manuset - der pedagogiske feil er billige å rette - før noe rendres; vurdert instruksjonsvaliditet steg fra 3,07 til 3,86, mens det automatiserte laget etter syntesen bare forbedret to av fem dimensjoner ([[ai-video-dual-gatekeeping-2026|Kim, Baek og Kwak (2026)]]).

**Design for [[accessibility]] fra starten.** Anvend prinsipper for [[universal-design-for-learning|universell utforming for læring]] når du bygger AI-verktøy og AI-genererte materialer, slik at de tjener et mangfold av elever, i stedet for å ettermontere tilgjengelighet i etterkant.([[ludia-udl-ai-thought-partner-2026]])

**Planlegg for distribusjonsmediet.** Instruksjonsdesign for [[online-teaching-and-learning|nettundervisning og nettbasert læring]] er ikke en nøytral oversettelse av design for fysisk oppmøte - mediet endrer hva som er mulig av scaffolding, vurdering og samhandling, og AI multipliserer både mulighetene (skalerbar [[personalized-learning|tilpasning]], støtte tilgjengelig hele tiden) og risikoene ([[academic-integrity|integritet]], [[cognitive-offloading|kognitiv avlasting]]) som designere må planlegge for. Design AI-ens pedagogiske innpakning like bevisst for nett som for ansikt-til-ansikt-kontekster.

**Evaluer mot en benchmark, ikke mot magefølelsen.** Hvis du bygger en instruksjonsdesignagent, evaluer den mot en standardisert, teoriforankret benchmark (for eksempel [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]), slik at du kan måle om forankring i et reelt ISD-rammeverk faktisk forbedrer output sammenlignet med en generisk LLM.([[jeon-isd-agent-bench-2026]])

- **AI er i ferd med å forme instruksjonsdesignpraksisen på nytt.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|gjennomgår systematisk]] 28 studier (2020-2025) og finner at AI hjelper designere med innholdsgenerering, maler og tilpasning, og konseptualiseres som en medarbeider, samarbeidspartner eller partner snarere enn bare et verktøy - selv om pedagogisk tilpasning og utøvernes beredskap fortsatt er utfordringer.

- **Den dokumenterte aktiviteten er konsentrert i én fase av syklusen.** I en gjennomgang av 78 studier av AI-støttet instruksjonsdesign forekommer aktivitet i designfasen i **74 av 78 studier (95 %)** og i utviklingsfasen i 44 (56 %), mens analyse bare når 11 (14 %), evaluering 10 (13 %) og implementering 7 (9 %) - og **ingen studie undersøkte AI-støtte på tvers av hele ADDIE-syklusen**. Syklusen er en ambisjon som bevisgrunnlaget ikke dekker, noe som betyr noe for alle som blir solgt «AI-drevet kursutvikling» som en ende-til-ende-egenskap ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Tre AI-roller, hierarkisk fordelt.** *Generativ* bruk - AI som produserer designinnhold etter pedagogens anvisning - dominerer med **96 % av studiene**; *scaffolding*-bruk, der AI strukturerer designerens egen tenkning, forekommer i 35 %; *evaluerende* bruk, der AI vurderer artefaktkvalitet, i 21 %. Feltet bruker overveldende AI til å lage ting snarere enn til å avhøre sine egne designbeslutninger, som er det motsatte av den kritiske venn-konfigurasjonen gjennomgangen peker ut som pedagogisk lovende.

## Vanlige misoppfatninger

- **«AI-leksjonsplanlegging gir lærerne tid tilbake.»** Planleggingstiden falt, fra 3,32 timer i uken til 2,51 med verktøyet, men **medianlæreren planla bare 21 % til 40 % av leksjonene fra bunnen av**. Tid ble spart, og planleggingen ble ikke vesentlig grundigere - besparelsen ble liggende i stedet for å bli reinvestert.
- **«Samdesign med AI er godt dokumentert.»** En systematisk oversikt over [[wang-teacher-ai-co-design-review-2026|lærer-AI-samdesign av læringsoppgaver]] **bekrefter mønsteret i stor skala på tvers av 28 studier**, noe som beskriver en konsistent praksis snarere enn å demonstrere overlegne utfall.
- **«Rubrikken er et fast input.»** Rubrikken fungerer som et **formidlende grensesnitt mellom menneskelig pedagogisk intensjon og maskinell inferens**: det at vurderingskriteriene behandles som **reviderbare**, er det som lar instrumentet bære pedagogens intensjon. En fast rubrikk overfører maskinens standardinnramming til vurderingen.
## Beslektede begreper

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Pedagogiske partnerskap
- [[online-teaching-and-learning]] - Nettundervisning og nettbasert læring
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] - Paraply: pedagogiske tilnærminger og undervisningsstrategier i AI-utdanning
- [[stakeholders]] - Paraply: mennesker og målgrupper i AI-utdanning (elever, lærere, designere, administratorer, beslutningstakere)

## Beslektede artikler

- [[roy-aila-lesson-planning-teacher-choices-2026]] — En målt besparelse i planleggingstid, sammen med funnet at lærere bare planlegger 21 % til 40 % av leksjonene fra bunnen av
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA og GenAI i beslutningstaking om læringsdesign
- [[tang-chatbots-learning-design-2026]] — Chatbotbruk i læringsdesign: designere dveler ved utbytter og pedagogikk snarere enn ved innholdsgenerering (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Mønstre for lærer-AI-samhandling i leksjonsdesign på tvers av erfaring og AI-kompetanse (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI i høyere utdanning: engasjement og undervisningsmetoders formidlende rolle
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taksonomi (grenseobjekt) for å klassifisere GenAI-læringsaktiviteter
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — AI-webagenter: en autonom webagent evaluerer leksjonsdesign og forutsier elevfrafall før elevene engasjerer seg (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: et rammeverk for kognitivt aktivert AI-forsterkning i fysikk
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Designing for Reach: sju spaker og eleven alene med AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — Når det å si nei gir bedre videoer: dobbel kvalitetskontroll for pedagogisk forankret AI-innholdsproduksjon
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI som støtte for design av problemer for produktiv feiling
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI og instruksjonsdesignpraksis: en systematisk oversikt (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Grafbasert intelligent veiledning for dynamiske domener (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Å gjøre AI irriterende med vilje: begrensning i AI-støttet skriving (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Smartklasseromsmodell og D-T-E-sløyfe som forbedrer instruksjonsdesignkompetanse i matematikk på masternivå (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-drevet plattform som genererer matematiske modelleringsproblemer (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Lærer-AI-samdesign av læringsoppgaver: trender og perspektiver (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Arkitektur av roller i AI-designde differensierte gruppeaktiviteter (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM-er som agenter for iterativt pedagogisk design
