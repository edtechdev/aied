---
title: "Læringsdesign"
created: "2026-10-27T16:29:27-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: "concepts/learning-design"
source_updated: "2026-10-28T00:58:16-04:00"
updated: "2026-10-27T16:29:27-04:00"
translation_note: "*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

> **Læringsdesign** (også kendt som *instruktionsdesign*): den systematiske proces med at skabe effektive læringsoplevelser gennem analyse af læringsbehov og design, udvikling, implementering og evaluering af undervisningsmaterialer og -aktiviteter. AI forvandler læringsdesign ved at automatisere indholdsskabelse, muliggøre [[adaptive-learning|adaptive læringsforløb]], understøtte datadrevet iteration og forstærke, frem for at erstatte, instruktionsdesignerens rolle.

## Spørgsmål at overveje

- Tænk på et kursus eller en lektion, du har gennemgået eller designet. Hvor sluttede "hvad der skal undervises i" (kurrikulum), og hvor begyndte "hvordan det skal undervises" (læringsdesign), og hvordan spillede de to sammen?
- En udbredt antagelse er, at bedre AI-færdighed automatisk giver bedre uddannelsesindhold. Siden imødegår det med evidens for, at det er den eksplicitte pædagogiske struktur, og ikke blot AI-færdigheden, der afgør læringseffektiviteten. Hvor har du set imponerende output, der ikke formåede at undervise?
- Hvis et AI-værktøj kan generere et helt kursus ud fra en prompt, hvilke menneskelige beslutninger bliver så vigtigere frem for mindre? Siden argumenterer for, at AI forstærker og ikke erstatter instruktionsdesignerens rolle; hvordan ville den forstærkede rolle se ud?
- Nogle instruktionsdesignmodeller som ADDIE bruges som stive, lineære trin. Men siden behandler dem som iterative, fleksible planlægningsheuristikker. Hvornår kan det at følge en proces for bogstaveligt underminere et godt design?
- Siden viser, at pædagogisk funderet promptning, for eksempel en femtrinsramme baseret på læringsteori, forbedrede udfald på højere niveau signifikant. Hvis du byggede en AI-vejleder, hvad ville du så indkode i et eksplicit designlag, så dens undervisningsstrategi forbliver sporbar og reproducerbar?

## Introduktion

Læringsdesign bygger bro mellem AI's muligheder og effektiv pædagogik. Hvor [[curriculum-design|kurrikulumdesign]] handler om *hvad* der skal undervises i på programniveau, handler læringsdesign om *hvordan* det skal undervises på kursus- og lektionsniveau. Artiklerne i denne vidensbase undersøger både AI som værktøj for læringsdesignere og læringsdesignprincipper for at bygge effektive [[intelligent-tutoring|AI-vejledningssystemer]].

Hvad det designarbejde indebærer i praksis, er selv et empirisk spørgsmål. [[tang-chatbots-learning-design-2026|Tang et al. (2026)]] kodede 1 378 designer-chatbot-ture fra fem novice læringsdesignere, der arbejdede med en chatbot indlejret i et designværktøj, og fandt, at dialogen samlede sig om tilsigtede læringsmål og pædagogisk tilgang frem for indholdsskabelse. Designerne vendte tilbage til målene gentagne gange som et sammenhængstjek, mens de omdannede kurrikulumelementer til konkrete opgaver, og assistentens rolle skiftede på tværs af faser, fra at afklare begreber til at understøtte opgavedesign til at køre en verifikationsrunde før en deadline. Designstøtte handler på denne evidens mindre om at producere materiale end om at holde designintentionen sammenhængende.

Læringsanalyser og generativ AI understøtter forskellige dele af designet: på tværs af 11 fokusgrupper på et australsk universitet optrådte analysediskurs hyppigst sammen med kontekst og problemløsning på kursusniveau (0,32), mens GenAI-diskurs centrerede om evalueringsdesign (0,26) og design for studerendes selvbestemmelse (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]).

### Centrale forskningstemaer

**AI-assisteret indholdsskabelse** er den mest direkte transformerende anvendelse. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** præsenterer en seksfaset arkitektur, der integrerer generativ AI med LaTeX og Python for at automatisere skabelsen af [[stem-education|STEM]]-materialer, valideret på tværs af 8 moduler og 28 projektkontekster med studerendes kvalitetsvurderinger på 8,5-9,9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** bruger en multi-agent-ramme struktureret omkring ADDIE-modellen, hvor rollebaserede agenter (undervisere, instruktionsdesigner, kursuskoordinator) samarbejder om at generere komplette kursusmaterialer. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** leverer en struktureret pipeline til adaptiv [[pedagogy|pædagogisk]] [[video-education|videogenerering]] forankret i kursusmaterialer og demonstrerer, at eksplicit pædagogisk struktur, og ikke blot AI-færdighed, er afgørende for generering af uddannelsesindhold. [[generative-ai|Generativ AI]]-platforme kan også udmønte læringsdesignprincipper i det indhold, de producerer: [[ai-modeling-problem-generation-platform-2026|en AI-drevet platform til generering af matematiske modelleringsopgaver]] kombinerede etablerede designprincipper med [[rag|retrieval-augmented generation]], udviklet gennem ADDIE-tilgangen for at producere pædagogisk forankrede opgaver og anbefalinger, som konventionelle indholdsgeneratorer mangler. Men udbyttet af sådan AI-assisteret indholds- og lektionsgenerering medieres af lærerens egen ekspertise: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] fandt, at erfarne lærere kritisk tilpasser AI-genererede lektionsidéer til elever og kontekst (de prompter igen og udbygger output), mens nybegyndere har tendens til at acceptere AI-forslag direkte, så den pædagogiske værdi af AI-indholdsværktøjer afhænger af lærerens erfaring og AI-færdighed og ikke af værktøjet alene. En systematisk gennemgang af [[wang-teacher-ai-co-design-review-2026|lærer-AI-samdesign af læringsopgaver]] (Wang, Liu & Islam 2026) bekræfter mønstret i stor skala på tværs af 28 studier (2015-2025): generativ AI bruges især til lektionsplanlægning, promptgenerering og kreativ idégenerering, og den dominerende samarbejdsform er AI som assistent og indholdsgenerator frem for en fuldere meddesigner, med effektivitet, lydhørhed, [[creativity|kreativitet]] og [[equity-in-ai-education|ligestilling]] som tilbagevendende muligheder. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] skærper fundet om lærerekspertise for gruppeaktivitetsdesign: erfarne lærere producerer rigere, mere synergiske og bedre ZPD-tilpassede rollearkitekturer i AI-designede kooperative aktiviteter end nybegyndere, uanset AI-fortrolighed, og rammesætter "pædagogisk promptkompetence" som det håndtag, der gør AI-output til effektiv [[collaborative-learning|differentieret gruppelæring]].

Aila-forsøget sætter et planlægningstidstal på det mønster. Lærere i dets randomiserede grundskoler brugte 2,51 timer om ugen på at forberede lektioner med værktøjet mod 3,32 timer uden, men medianlæreren planlagde kun 21% til 40% af lektionerne fra bunden, hvilket er det tilfælde, et værktøj der starter fra bunden adresserer ([[roy-aila-lesson-planning-teacher-choices-2026|Roy et al., 2026]]).

Hvor genererede materialer kommer til kort, er det i forhold til kurrikulum: syv matematiklærere vurderede AI-genererede produktivt-nederlag-opgaver tæt på menneskeskabte i samlet kvalitet (M = 17,19 mod 17,43 af 25), men lavere i kurrikulær tilpasning (M = 2,57 mod 3,29), så genererede opgaver skulle stadig redigeres for længde, læseniveau og visuelle elementer ([[rhaimi-productivemath-2025|Rhaimi et al. (2025)]]).

**Pædagogisk forankret AI-vejledning** anvender instruktionsdesignprincipper på design af AI-systemer. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** byggede en didaktisk drevet [[llm]]-lærerassistent, hvor vejledningsstrategien er indkodet i et eksplicit eksternt lag, hvilket gør indholdsudvælgelse og didaktisk strukturering sporbar og reproducerbar og direkte adresserer uigennemsigtighedsbekymringerne i [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou et al.]]** demonstrerede, at en femtrins-[[prompt-engineering|promptningsramme]] forankret i generativ [[learning-theories|læringsteori]] signifikant forbedrede kognitive udfald på højere niveau og viste, at instruktionsvejledning og ikke blot AI-adgang afgør læringseffektiviteten. Begge forbinder til [[scaffolding]] og [[intelligent-tutoring]].

**Rammer og evaluering** giver strukturerede tilgange. **[[bridging-instructional-design-framework-math]]** og **[[cotal-formative-assessment-scoring-2026|CoTAL]]** demonstrerer [[human-in-the-loop-ai|menneske-i-loopet]]-designprincipper. **[[genai-mindtool-generative-learning]]** placerer AI som et "mindtool", en kognitiv partner der udvider frem for erstatter den lærendes tænkning, og anvender instruktionsdesignteori direkte på AI-integration. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** anvender principperne for universelt design for læring til at skabe en tilgængelig AI-tænkepartner for undervisere og forbinder instruktionsdesign med [[inclusive-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) er en opgavestrukturerende ramme for kognitivt aktiveret AI-brug, der afgrænser AI'ens bidrag, så forudsigelse, fortolkning og evaluering forbliver den lærendes; en AI-specifik tilpasning af undersøgelsescyklusser forankret i [[self-regulated-learning]], kognitiv belastningsteori og [[human-ai-collaboration]]. Som supplement til disse designrammer tilbyder [[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn et al.s (2026) taksonomi]] en *klassifikation* frem for en designmetode: seks kategorier (læringsmål, indhold, repræsentationsformat, epistemisk [[student-engagement|engagement]], socialt design, artefakter), der lader designere og [[research-methods-aied|forskere]] beskrive, sammenligne og forestille sig GenAI-læringsaktiviteter ved at gøre eksplicit hvorfor, hvad, hvordan, med hvad og med hvem de lærende engagerer GenAI, bygget som et grænseobjekt gennem postdigital dialog. Smartklasserumsrammer udvider dette til [[teacher-education|læreruddannelse]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao og Wang (2026)]] foreslår en tredimensionel ramme for smart uddannelse (læringseffektivitet, informations- og kommunikationsteknologi (IKT) og klasseorganisation) og udmønter den i et [[math-education|matematikstudium]] på kandidatniveau, der integrerer [[automated-assessment|automatisk scoring]], personaliserede anbefalinger og multi-[[ai-feedback-quality|AI-feedback]] på tværs af faser før, under og efter undervisningen. Et kvasi-eksperiment viste signifikante gevinster i studerendes evne til at formulere præcise, fagligt forankrede undervisningsmål og gav den overførbare **D-T-E-model** (Disciplinary Demand, Technological Empowerment, Evaluation Loop), [[discipline-specific-aied|fagspecifik]] vejledning til [[educational-development|læreruddannere]], der vil flytte smart-uddannelseskoncepter ind i praktisk instruktionsdesignpraksis.

**Design for rækkevidde.** Halanis ramme med syv greb spørger for hver kursusindstilling, hvilke der stadig virker, når den studerende er alene med AI; strukturelle greb som at ændre, hvad karakteren attesterer, eller opgaver der ikke kan gennemføres uden tænkningen, rækker længere end at fortælle studerende, at processen betyder noget ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Begræns værktøjet for at beskytte tænkningen.** Et ni uger langt argumenterende skrivedesign sekvenserede lærerafgrænsede chatbots, der stiller spørgsmål og nægter at generere studerendes prosa, og fire gymnasieelever bevægede sig fra passive AI-forbrugere til evaluatorer, der gjorde modstand mod output; strategisk begrænsning og ikke ubegrænset generativitet fulgte gevinsterne ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Rubrikstyret promptning som designhåndtag.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] demonstrerede, at rubrikken fungerer som en medierende grænseflade mellem menneskelig pædagogisk intention og maskinel inferens: at behandle vurderingskriterier som reviderbare designartefakter frem for faste instrumenter og iterativt forfine dem sammen med LLM'en hævede overensstemmelsen mellem LLM og menneske på studerendes designarbejde fra 54,75% til 81,25%. Rubrikker konstrueret til LLM'er skal balancere præcision og fleksibilitet; for vag indbyder til fri fortolkning, for stiv reducerer modellen til mønstermatchning, og rolbevidst promptning (underviser, peer-reviewer, bevillingsansøger) gav forskellig evaluativ feedback. Det placerer rubrikkonstruktion som en konkret læringsdesignpraksis til at forme AI'ens evalueringsadfærd, med menneske-i-loopet-tilsyn fortsat afgørende.

**AI-agenter til instruktionsdesign** udvider feltet til [[agentic-ai|agentbaseret AI]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** er det første standardiserede, teorigrundede benchmark til at evaluere LLM-baserede instruktionsdesignagenter; dets kontekstmatrix med 25 795 scenarier (51 kontekstvariable × 33 ISD-deltrin fra ADDIE) viser, at agenter forankret i klassiske ISD-rammer (ADDIE, Dick & Carey, Rapid Prototyping ISD) overgår teorifrie agenter, hvilket empirisk validerer, at instruktionsdesign er en struktureret disciplin og ikke en generisk promptopgave. Agenter er ikke kun *byggere* af designs, men også *kritikere* af dem: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] bruger en enkelt autonom webagent, der navigerer en flertrins onlinelektion som en studerende for at evaluere et læringsdesign, *før* rigtige lærende engagerer sig; dens beskrivelse af den studerendes oplevelse forudsiger, hvor nybegyndere falder fra, og bringer handlingsorienteret designfeedback frem, idet den overgår hver baseline og endda en simuleret kohorte af studerende på et globalt CS1-kursus. Det rammesætter agentbaseret evaluering før lancering som et billigt supplement til menneskelig designiteration. **[[wang-multi-agent-systems-learning-designers-2025]]** og **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** undersøger multi-agent-rammer, der orkestrerer rollebaserede agenter omkring instruktionsdesignmodeller, mens **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** undersøger, hvordan lærere og agenter i fællesskab anvender teknologisk-pædagogisk-faglig viden. Dette arbejde forbinder instruktionsdesign med [[benchmark|benchmarking]], [[ai-ed-evaluation]] og design af [[curriculum-design|kurrikulum]] i stor skala.

### Forbindelser til relaterede begreber

Læringsdesign er brodisciplinen i [[ai-education|AI i uddannelse]]; den forbinder [[curriculum-design|kurrikulumdesign]] (hvad der skal undervises i) med [[scaffolding]] (hvordan lærende støttes), [[educational-development]] (hvordan undervisere forberedes) og [[generative-ai]] (selve værktøjerne). Den er tæt koblet til [[teacher-role|undervisning]], fordi AI-værktøjer omformer, hvad læringsdesignere og lærere gør, og til [[ai-literacy]], fordi effektiv AI-integration kræver, at undervisere forstår AI's muligheder og begrænsninger. Designarbejde udmunder i sidste ende i en *aktivitetsrækkefølge*: [[pedagogical-patterns|pædagogiske mønstre]] katalogiserer de afprøvede rækkefølger af træk, så en designer kan afgøre, hvor i en lektion AI hører hjemme, frem for kun hvad der skal med. [[learning-sciences|Læringsvidenskaberne]] er det forskningsfelt, der ligger bag disse principper: hvor denne side dækker den professionelle praksis med at skabe læringsoplevelser, studerer læringsvidenskaberne denne praksis og dens designs empirisk og genererer de kognitive, motiverende og sociale principper, som læringsdesign derefter operationaliserer.

### Hvordan læringsdesign afgør læringsgevinster

Læringsdesign er det håndtag, der afgør, om AI giver [[learning-gains|læringsgevinster]] eller blot AI-oppustet præstation. Vidensbasens evidens er entydig på dette punkt: **det samme AI-værktøj giver store gevinster eller netto skade, afhængigt af hvordan læringsoplevelsen er designet omkring det.** [[instructional-guidance-genai-learning|Hou et al.]] viste, at en femtrins-promptningsramme forankret i læringsteori signifikant forbedrede kognitive udfald på højere niveau, mens adgang til AI alene ikke gjorde det; [[genai-mindtool-generative-learning|mindtool]]- og [[airis-cognitively-activated-ai-physics-2026|AIRIS]]-rammerne bevarer den lærendes kognitive arbejde, så varige gevinster (frem for opgaveeffektivitet) følger. Designvalg, der beskytter [[learning-gains|læringsgevinster]], nemlig stilladsning der kræver et forsøg fra den studerende, [[formative-assessment|formativ evaluering]] med uassisterede udfaldsmål og pædagogisk struktur, der holder den lærende som aktør, spejler feltets fund (se [[learning-gains]]) om, at AI er en stærk gevinst, når den coacher, og en skade, når den svarer. Omvendt falder dårligt designede AI-integrerede lektioner i [[cognitive-offloading|gabet mellem præstation og læring]], hvor tilsyneladende succes dækker over ingen læring.

### Praktisk vejledning til designere og udviklere

For instruktionsdesignere, kursusudviklere og ingeniører, der bygger AI-assisterede læringsoplevelser, omsætter vidensbasens fund sig til handlingsorienteret praksis. Én grænse er værd at markere, før praksisserne selv: læringsdesign, som denne side beskriver det, er designet af et kursus for en kendt kohorte, mens de samme principper indbagt i et produkt, som mange kurser (undervist af mennesker, designeren aldrig møder) vil bruge, er arbejdet for [[educational-technology-developers]], hvor standardindstillinger, konfigurerbarhed og dokumentation bærer pædagogisk vægt:

**Forankr AI-generering i en struktureret instruktionsmodel.** AI-indhold er kun så godt som den pædagogiske struktur bag det; eksplicit struktur, ikke AI-færdighed, afgør kvaliteten. Design omkring en anerkendt model (ADDIE, Dick & Carey, rapid prototyping) og indkod de pædagogiske beslutninger eksplicit frem for at overlade det til modellen at udlede dem.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Antag også en ramme på principniveau, ikke kun en instruktionsmodel.** En model på kursusniveau strukturerer ét design; en offentliggjort ramme sætter de kriterier, som mange designs bør opfylde. Et eksempel værd at læse i sin helhed er Digital Promises *Powerful Learning with Emerging Technology*, der organiserer sin vejledning under tre principper, evidensbaseret, elevcentreret og kompetenceopbyggende, hver udfoldet i praksisser og strategier, og knytter [[privacy|privatliv]], [[explainable-ai|forklarbarhed]] og retfærdighed til bestemte praksisser som sikkerhedsforpligtelser frem for valgfrit ekstra.([[powerful-learning-with-emerging-technology-2025]])
**Tilpas AI-konfigurationen til opgaven, ikke til sofistikation.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] skelner fire lag (prompt, kontekst, harness og verificeret loop) og anvender et princip om minimal tilstrækkelighed: brug den mindst komplekse konfiguration, der kan give et verificerbart resultat, da tilføjet orkestrering medfører koordinations-, verifikations-, privatlivs- og forståelsesomkostninger.

**Brug rollebaserede multi-agent-workflows til indholdsproduktion.** I stedet for én generisk prompt, orkestrér forskellige agenter og roller (undervisere, instruktionsdesigner, kursuskoordinator), der samarbejder gennem en defineret pipeline; det spejler, hvordan rigtige kurusteams arbejder, og giver mere komplette materialer end en enkelt prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Giv instruktionsvejledning, ikke blot AI-adgang.** Uanset om de lærende interagerer direkte med AI eller med AI-genererede materialer, driver vejledning bygget på læringsteori (fx et trinvist promptnings[[scaffolding|stillads]] forankret i generative læringsprincipper) udfald på højere niveau; adgang alene gør ikke. Design læringsaktiviteten omkring, hvordan sindet lærer, og behandl AI som et kognitivt "mindtool", der udvider tænkningen frem for at erstatte den.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modellér glemsel, og planlæg repetition, hvor forfaldet er værst.** G4L repræsenterer vidensforfald med en Ebbinghaus-glemselskurve drevet af forløbet tid og gentagelser og prioriterer de enheder, der er mest udsatte for forfald, frem for at genlevere det, der senest blev scoret ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin et al. (2026) tilføjer et operationelt greb til at afgøre, hvor AI kommer ind: opdel en aktivitet i de komponenter, der bedst udføres selvstændigt, og dem, der bedst kobles med AI, og hold underviserens dømmekraft central i opdelingen ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Gør indhold sporbart og reviderbart.** Lad en menneskelig designer revidere og rette AI-output, før det når de lærende, og strukturér AI-genereringen, så den pædagogiske begrundelse (hvorfor dette indhold, i denne rækkefølge) kan inspiceres, hvilket adresserer både kvalitet og de uigennemsigtighedsbekymringer, der underminerer [[trust|tillidsfuldt]] genereret undervisning.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Revider AI-genererede medier på manuskriptstadiet, ikke efter syntesen.** PedaCo placerer underviserrevidering på manuskriptet, hvor pædagogiske fejl er billige at rette, før noget renderes; den vurderede instruktionsvaliditet steg fra 3,07 til 3,86, mens det automatiske lag efter syntesen kun forbedrede to af fem dimensioner ([[ai-video-dual-gatekeeping-2026|Kim, Baek og Kwak (2026)]]).

**Design for [[accessibility|tilgængelighed]] fra begyndelsen.** Anvend [[universal-design-for-learning|UDL]]-principper, når du bygger AI-værktøjer og AI-genererede materialer, så de tjener forskelligartede lærende, frem for at eftermontere tilgængelighed bagefter.([[ludia-udl-ai-thought-partner-2026]])

**Planlæg for leveringsmediet.** Instruktionsdesign til [[online-teaching-and-learning|online undervisning og læring]] er ikke en neutral oversættelse af design til fysisk undervisning; mediet ændrer, hvilken stilladsning, evaluering og interaktion der er levedygtig, og AI mangedobler både mulighederne (skalerbar [[personalized-learning|personalisering]], altid-tilgængelig støtte) og risiciene ([[academic-integrity|integritet]], [[cognitive-offloading|kognitiv udlicitering]]), som designere må planlægge for. Design AI'ens pædagogiske indpakning lige så bevidst online som i fysiske kontekster.

**Evaluer mod et benchmark, ikke mod fornemmelser.** Hvis du bygger en instruktionsdesignagent, så evaluer den mod et standardiseret, teorigrundet benchmark (fx [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]), så du kan måle, om forankring i en rigtig ISD-ramme faktisk forbedrer output i forhold til en generisk LLM.([[jeon-isd-agent-bench-2026]])

- **AI omformer instruktionsdesignpraksis.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|gennemgår systematisk]] 28 studier (2020-2025) og finder, at AI assisterer designere med indholdsgenerering, skabeloner og personalisering og begrebsliggøres som en medarbejder, samarbejdspartner eller partner frem for blot et værktøj, selv om pædagogisk sammenhæng og praktikerparathed fortsat er udfordringer.

- **Den dokumenterede aktivitet er koncentreret i én fase af cyklussen.** I en gennemgang af 78 studier af AI-understøttet instruktionsdesign optræder aktivitet i designfasen i **74 af 78 studier (95%)** og i udviklingsfasen i 44 (56%), mens analyse kun når 11 (14%), evaluering 10 (13%) og implementering 7 (9%), og **ingen studie undersøgte AI-støtte på tværs af hele ADDIE-cyklussen**. Cyklussen er en ambition, evidensgrundlaget ikke dækker, hvilket betyder noget for enhver, der sælges "AI-drevet kursusudvikling" som en ende-til-ende-kapabilitet ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Tre AI-roller, hierarkisk fordelt.** *Generativ* brug, hvor AI producerer designindhold efter underviserens anvisning, dominerer i **96% af studierne**; *stillads*-brug, hvor AI strukturerer designerens egen ræsonnering, optræder i 35%; *evaluativ* brug, hvor AI vurderer artefaktkvalitet, i 21%. Feltet bruger overvejende AI til at lave ting frem for til at afhøre sine egne designbeslutninger, hvilket er det modsatte af den kritiske-ven-konfiguration, som gennemgangen fremhæver som pædagogisk lovende.

## Almindelige fejlopfattelser

- **"AI-lektionsplanlægning giver lærerne tid tilbage."** Planlægningstiden faldt ganske vist, fra 3,32 timer om ugen til 2,51 med værktøjet, men **medianlæreren planlagde kun 21% til 40% af lektionerne fra bunden**. Der blev sparet tid, og planlægningen blev ikke væsentligt grundigere; besparelsen blev akkumuleret frem for geninvesteret.
- **"Samdesign med AI er godt underbygget."** En systematisk gennemgang af [[wang-teacher-ai-co-design-review-2026|lærer-AI-samdesign af læringsopgaver]] **bekræfter mønstret i stor skala på tværs af 28 studier**, hvilket beskriver en konsistent praksis frem for at demonstrere bedre udfald.
- **"Rubrikken er et fast input."** Rubrikken fungerer som **en medierende grænseflade mellem menneskelig pædagogisk intention og maskinel inferens**: at behandle vurderingskriterier som **reviderbare** er det, der lader instrumentet bære underviserens intention. En fast rubrik overfører maskinens standardrammesætning til evalueringen.

## Forbundne begreber

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] — Pædagogiske partnerskaber
- [[online-teaching-and-learning]] — Online undervisning og læring
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
- [[pedagogy]] — Paraply: pædagogikker og undervisningsstrategier i AI-uddannelse
- [[stakeholders]] — Paraply: mennesker og målgrupper i AI-uddannelse (elever, lærere, designere, administratorer, politiske beslutningstagere)

## Forbundne artikler

- [[roy-aila-lesson-planning-teacher-choices-2026]] — En målt besparelse i planlægningstid side om side med fundet, at lærere kun planlægger 21% til 40% af lektionerne fra bunden
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — Læringsanalyser og GenAI i beslutningstagning om læringsdesign
- [[tang-chatbots-learning-design-2026]] — Chatbotbrug i læringsdesign: designere dvæler ved mål og pædagogik frem for indholdsgenerering (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Mønstre i lærer-AI-interaktion i lektionsdesign på tværs af erfaring og AI-færdighed (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI i videregående uddannelse: engagement og undervisningsmetodernes medierende rolle
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taksonomi (grænseobjekt) til klassifikation af GenAI-læringsaktiviteter
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
- [[ai-web-agents-lesson-design-2025]] — AI-webagenter: en autonom webagent evaluerer lektionsdesigns og forudsiger studerendes frafald, før de engagerer sig (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: en ramme for kognitivt aktiveret AI-forstærkning i fysik
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Design for rækkevidde: syv greb og den studerende alene med AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — Når et nej giver bedre videoer: dobbelt gatekeeping for pædagogisk forankret AI-indholdsskabelse
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI til at understøtte design af produktivt-nederlag-opgaver
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI og instruktionsdesignpraksis: en systematisk gennemgang (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Grafbaseret intelligent vejledning i dynamiske domæner (2026)
- [[making-ai-annoying-constrained-writing-2026]] — At gøre AI irriterende med vilje: begrænsning i AI-understøttet skrivning (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Smartklasserumsmodel og D-T-E-loop, der forbedrer instruktionsdesignkompetence på kandidatniveau i matematik (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-drevet platform, der genererer matematiske modelleringsopgaver (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Lærer-AI-samdesign af læringsopgaver: tendenser og perspektiver (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Arkitektur af roller i AI-designede differentierede gruppeaktiviteter (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM'er som agenter for iterativt pædagogisk design
