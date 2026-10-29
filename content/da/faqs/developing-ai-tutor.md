---
title: "Hvad er god praksis for at udvikle en effektiv AI-vejleder?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Din vejleder er tre uger fra en pilot. Chatten virker, modellen forklarer en afledt funktion rent, og den interne demo fik klapsalver. Så stiller en fra det pædagogiske center det spørgsmål, som din kravspecifikation ikke har et felt til: vil de studerende efter et semester med den her ting kunne løse en opgave, når den ikke er i rummet? Det, du har, er en funktionsliste. Det, du ikke har, er én sætning om, hvad den lærende skal kunne alene til sidst.

En vejleder er en politik pakket omkring en [[conversational-ai|chatbot]], og politikken afgør, om der sker læring. Navngiv det kognitive arbejde, den lærende skal udføre, få systemet til at kræve det (et forsøg før hjælpen, en hjælpetrappe der fader ud, en kontrol som modellen ikke kan simulere), og evaluér med vejlederen slukket. Modellens kvalitet afgør, hvor god samtalen føles. Politikken afgør, hvad den studerende kan i juni.

## Den korte version

**1.** Skriv målet som en påstand om uassisteret præstation, og udled derefter hver eneste funktion fra den. Kan en funktion ikke spores tilbage til den sætning, er det en demofunktion.

**2.** Byg den lærendes model ud fra evidens, du kan logge, og gem hver diagnose som en hypotese med en konfidensværdi frem for som en kendsgerning.

**3.** Fastlæg hjælpetrappen i koden, med navngivne trin, og lad grænsefladen koste den lærende noget for hvert trin ned ad den.

**4.** Forankr indholdet i dine egne materialer og overlad aritmetik, algebra og kodekontrol til deterministiske værktøjer, som ikke kan hallucinere.

**5.** Test undervisningsfejl på tværs af hele samtaler: svarlækage, sycophancy, forstærkning af misforståelser, undervisningsdrift.

**6.** Mål med en tilbagetrækningsfase og en forsinket test, ikke med en tilfredshedsscore.

## Skriv målet som en påstand om uassisteret præstation

Tre lister, skrevet før nogen vælger en model:

- Hvad de lærende skal vide eller kunne bagefter.
- Hvilket kognitivt arbejde de selv skal udføre.
- Hvad vejlederen må gøre for dem.

Litteraturen om [[intelligent-tutoring|intelligent vejledning]] understreger, at effektiviteten afhænger af [[pedagogy|pædagogisk]] design og ikke af modellens formåen alene, og fejlen er let at bygge ved et tilfælde. En vejleder optimeret til »færdiggør opgaven« vil underminere en vejleder optimeret til »lær at løse opgaven«, mens den består hver eneste funktionelle test, du skriver, fordi begge producerer korrekte slutresultater. Forskellen ligger i, hvad den studerende gjorde mellem spørgsmålet og svaret.

Den anden liste er, hvor udviklingsteams bliver konkrete. Tag en mestringsetiket som »mestring af afledte funktioner« og nægt at lade den betyde at producere den korrekte afledte. Bryd den op i at genkende, hvornår en afledt er relevant, at fortolke den som en øjeblikkelig ændringsrate, at vælge reglen, at udføre proceduren, at forklare hvorfor valget var rigtigt, at kontrollere rimeligheden og at anvende den på en ukendt opgave. Hver af dem er en separat ting at logge, og hver af dem implicerer en anden respons, når den mangler. Denne opdeling er også forsvaret mod [[correct-answer-trap-misconceptions|fælden med det rigtige svar]], hvor en lærende når det rigtige svar gennem fejlbehæftet ræsonnement, og din analyse registrerer en succes. [[correct-answer-trap-ai-tutor|At fange fælden med det rigtige svar]] og [[zhang-tutormoments-2026|Når hjælp ikke hjælper]] beskriver begge versioner af den fejl i produktion.

## Byg den lærendes model før samtalen

Den lærendes model rummer to slags tilstand: skøn per begreb (grænseværdi: under udvikling, potensregel: mestret, produktregel: under udvikling, kæderegel: ikke demonstreret) og hypoteser om misforståelser med den evidens og konfidens, der ligger bag hver af dem. Hold dem adskilt. Begrebsskønnet er det, der driver valget af sværhedsgrad. Hypotesen er det, der driver det næste spørgsmål.

Vær forsigtig med at lade en [[llm]] stille diagnosen på egen hånd. [[benchmark|Benchmarking]] fandt, at LLM-vejledere kunne genkende klart korrekt ræsonnement, mens de nogle gange afviste gyldige alternativer eller accepterede forkert ræsonnement. En model, der spotter det gode tilfælde og fejllæser det tvetydige, svigter præcis de studerende, der har brug for hjælpen. I konsekvensrige domæner er den arkitektur, der holder, **struktureret diagnose plus fleksibel LLM-dialog**, den opsætning som [[yasir-llm-tutoring-agents-2026|At bekræfte det korrekte og overse resten]] beskriver: din egen detektor fastslår, hvad den studerende sandsynligvis gjorde, og modellen skriver samtalen omkring det fund.

Giv diagnosen en eksplicit sekvens, som modellen ikke kan springe over: registrér, verificér, svar. Modellen må foreslå en [[misconceptions|misforståelse]] som en hypotese og skal derefter verificere den mod den studerendes faktiske arbejde eller et målrettet spørgsmål, før vejlederen reagerer på den. Uden det trin opfinder systemet evidens og vejleder derefter den studerende i en fejl, de ikke begik, hvilket både er ubrugeligt og let krænkende.

Evidens, der er værd at logge, i grov rækkefølge efter anvendelighed: seneste forsøg med deres mellemtrin, demonstreret viden per begreb, hjælpsøgningsadfærd (som i sig selv er et signal om selvtillid) og selvrapporteret selvtillid, hvor du indsamler den. Tilpas sværhedsgrad og assistance ud fra den registrering, og behandl den lærendes seneste prompt som ét input til den. En enkelt prompt er et dårligt skøn over, hvad en studerende ved, og en vejleder, der reagerer på den, vil køre i ring.

## Fastlæg hjælpetrappen, og lad grænsefladen koste for den

Skriv trinene ned, før du skriver en prompt, for trappen er en produktbeslutning med navngivne tilstande, og en toneindstilling kan ikke udtrykke den. En brugbar sekvens:

1. Selvstændigt forsøg.
2. Metakognitivt spørgsmål om, hvad den studerende har prøvet.
3. Konceptuelt vink.
4. Identificér den relevante regel.
5. Sæt en del af opgaven op.
6. Gennemregnet mellemtrin.
7. Gennemregnet løsning.
8. Den studerende forklarer løsningen.
9. Den studerende løser en sammenlignelig opgave uden hjælp.

Støtten fader ud, i takt med at kompetencen vokser, og det er mekanismen i centrum af [[scaffolding|stilladsning]]. At se en gennemregnet løsning demonstrerer ikke mestring, så enhver session, der når trin syv, skylder dig trin ni, før den tæller som afsluttet.

De kausale beviser for overhovedet at bygge trappen kommer fra et felteksperiment, hvor en ubeskyttet GPT-grænseflade øgede assisteret matematikpræstation og sænkede den efterfølgende uassisterede eksamenspræstation. En vejleder, der gav hints, fjernede i vid udstrækning den læringsstraf ([[generative-ai-guardrails-harm-learning|Generativ AI uden guardrails kan skade læring]]). Begrænsningen er arkitektonisk. Den samme model gav, med en anden hjælpeadfærd, modsatte resultater på det mål, der betyder noget.

Et større randomiseret felteksperiment med mere end 6.000 elever i folkeskolens udskoling på en mestringsbaseret øvelsesplatform viser, hvordan trappen ser ud i loggene. Studerende, der blev tildelt AI-støtte, kom langsommere frem og forsøgte sig på færre spørgsmål, og de svarede mere korrekt. Den tydeligste mekanisme var korrekthed i næste forsøg efter en fejl: der skulle færre forsøg til at vende tilbage til et korrekt svar. Det mønster er en produktiv opbremsning, og det er den signatur, en hjælpetrappe skal efterlade ([[making-ai-tutoring-productive-mastery-math-2026|At gøre AI-vejledning produktiv]]).

Det samme studie giver en advarsel om dine egne dashboards. Kravet om tre korrekte svar i træk hævede markant platformens definerede mestring uden at producere målbare gevinster på en forsinket test en uge senere. Den stærkeste evidens fra den forsinkede test optrådte kun der, hvor AI'en sad inde i mestringsarbejdsgangen (koefficient 0,085), ikke hvor den var tilgængelig som selvstændig adgang. Er din succesmetrik en streak-tæller, leverer du et system, der optimerer streaken.

Friktion i grænsefladen hører til i samme designrunde. Ubegrænsede hints bag en synlig knap gør hele trappen til en genvej, og for tidlige hintanmodninger med overfladisk læsning er forbundet med lavere [[learning-gains|læringsudbytte]]. At erstatte `[Hint][Hint][Hint][Vis svar]` med spørgsmålene »hvad har du prøvet?« og »hvilken del blokerer dig?« (at vælge en regel, at sætte ligningen op, at regne algebraen, at forstå begrebet) koster én skærm og sender den studerende til det trin, de faktisk har brug for. Det giver dig også de logdata, der viser, hvilket trin de plejer at springe over.

## Overlad de kontrollerbare dele til en kontrollør

Forankr genereringen i undervisergodkendt materiale: afsnit i lærebogen, kursusnoter, gennemregnede eksempler, terminologi, godkendte metoder, notation, regler for afleveringer, politikker og [[curriculum-design|pensum]]ressourcer. Retrieval-augmented generation mod det korpus reducerer [[hallucination-risk|risikoen for hallucination]] og fjerner den ikke, som [[rag]] redegør for. Vis kildehenvisninger eller proveniens i grænsefladen, hvor en studerende kan tjekke en påstand, for det er kildehenvisningen, der gør forankringen reviderbar bagefter.

Forankring gør også et arbejde, som nøjagtighedsmetrikker misser. Et kursus har godkendte metoder, og en vejleder, der introducerer en matematisk gyldig teknik, som kurset ikke bruger, har lært den studerende noget, de bliver trukket ned for. Retrieval fra kursuslaget er måden, vejlederen bliver inde i metodesættet på.

I domæner med formelt kontrollerbare svar tilføjer du deterministiske værktøjer: lommeregnere, symbolske matematiksystemer, kodekørsel, vidensgrafer, regelbaserede validatorer og [[discipline-specific-aied|domænespecifikke]] løsere. Arbejdsdelingen er det vigtige. LLM'en håndterer forklaring og dialog. Den symbolske motor verificerer algebraisk ækvivalens, afledte funktioner, integraler, ligningsløsninger, kritiske punkter og numeriske tilnærmelser. Et forkert mellemtrin, som verificeringen fanger, bliver et vejledningsøjeblik. Et forkert mellemtrin, som intet fanger, bliver en misforståelse, den studerende tager med til eksamen.

## Kræv, at den lærende handler på feedbacken

Feedback, der siger »Korrekt«, »Forkert« eller »Godt gået«, er en scoringshændelse i undervisningens klæder. Vidensbasen behandler [[feedback]] som en loop mellem tilbud og optag: feedback understøtter læring, når de studerende forstår den og handler på den, og den anden halvdel er den halvdel, systemerne plejer at springe over. Byg vejlederen til at navngive det ræsonnementstrin, der er involveret, sige hvad der skal overvejes igen, give én konkret næste handling og bede den lærende forudsige eller forklare, før feedbacken afsløres.

Den sekvens, der bærer dette, er lærende først, AI derefter, lærende igen. Den studerende genererer, vælger, begrunder, vurderer eller reflekterer; vejlederen svarer; den studerende gør noget med svaret. Design turstrukturen, så det ikke er valgfrit. Et system, hvor modellen kan producere tre afsnit som svar på ét spørgsmål, lærer den studerende at spørge og læse.

Det langsigtede mål er internalisering. De lærende skal ende med selv at køre vejlederens udspørgen og [[problem-solving|problemløsnings]]strategier, og det er argumentet om [[agency|den lærendes handlekraft]] og grunden til, at trappen har et øverste trin, hvor vejlederen er tavs.

## Design til det, der sker i tur fyrre

Pædagogisk sikkerhed er en anden testsuite end almindelig chatbotsikkerhed, og de fleste teams leverer kun den anden. Toksicitet og modstandsdygtighed over for jailbreaks fortæller intet om, hvorvidt vejlederen udleverer et svar til en studerende, der spørger to gange, er enig i en forkert metode, fordi den studerende lød sikker, driver ud af kursets metodesæt over en lang session eller skubber en lærende ind i [[cognitive-offloading|kognitiv udlicitering]]. [[ai-sycophancy|Sycophancy]] er den, der kommer igennem først, fordi enighed læses som venlighed, og dine præferencedata belønner det.

Test for svarlækage, forstærkning af misforståelser, overdreven enighed, uhensigtsmæssig sværhedsgrad, udlicitering, biased behandling, tab af den lærendes agency, undervisningsdrift og overkonfidens i forkerte forklaringer. Kør testene på udvidede samtaler, ikke på enkelte ture, for pædagogiske fejl akkumulerer: de første ti ture kan være eksemplariske, og den ellevte kan ødelægge sessionen. En vejleder skal være venlig og korrekt på én gang, også når den lærende insisterer på en misforståelse. [[pedagogical-safety]] og [[hazra-safetutors-pedagogical-safety-2026|AI-vejlederes sikkerhed og pædagogiske skader]] lægger fejltaksonomien frem.

## Læg dataarkitekturen i samme designdokument

Indsaml kun lærendedata, der er pædagogisk nødvendige, og vær i stand til at sige, hvorfor hvert felt findes. Hvor du holder vedvarende hukommelse eller en [[student-modeling|lærendemodel]], skal du gøre dens formål synligt for den lærende, give dem passende kontrol over den, beskytte følsomme oplysninger, definere opbevaring og sende konsekvensrige beslutninger til en underviser eller et andet [[human-in-the-loop-ai|menneskeligt]] kontrolpunkt. En lærendemodel, der stille akkumulerer et selvtillidsskøn, som en studerende aldrig ser, er et databeskyttelsesproblem og et pædagogisk problem.

Revider adfærd på tværs af sproglige baggrunde, færdighedsniveauer, kulturelle kontekster, [[accessibility|tilgængeligheds]]behov og niveauer af [[prior-knowledge|forhåndsviden]] og AI-erfaring. Forskellig præstation på samme mål er en fejl med en studerende hængt på, og den vil ikke dukke op i dit samlede nøjagtighedstal.

Én tilgængelighedsbeslutning fortjener sin egen linje: gør ikke sofistikeret [[prompt-engineering|promptning]] til en forudsætning for god undervisning. Hvis vejlederen kun underviser godt, når en studerende skriver en omhyggelig prompt, har du bygget et system, der favoriserer studerende, som allerede ved, hvordan man taler med modeller. Vejlederen bør hjælpe de lærende med at formulere produktive spørgsmål, hvilket også er en [[metacognition|metakognitiv]] færdighed, der er værd at have.

## Instrumentér tilbagetrækningsintervallet

Sessionmetrikker fortæller dig ikke, om tingesten virker. Responsnøjagtighed, samtalelængde, studerendes præference, tilfredshed, opgavefuldførelse og [[student-engagement|engagement]] stiger alt sammen for systemer, der ikke underviser i noget, fordi studerende kan lide hjælp, og hjælp er let at måle. Evaluer uassisteret præstation, forsinket retention, transfer til nye opgaver, rettelse af misforståelser, den lærendes uafhængighed, optag af feedback og [[differential-effects-across-learner-groups|forskellige effekter på tværs af lærendegrupper]]. [[ai-ed-evaluation]] har metoderne, og [[ai-tutor-behavioral-evaluation|Den manglende evalueringsakse]] argumenterer for, at adfærd er konstruktet.

To studier skærper reglen mod [[self-report-measures|selvrapportering]] og korte tidshorisonter. En pilot med 38 studerende på begynderniveau i programmering fandt en stærk sammenhæng mellem brug af [[generative-ai|generativ AI]] og *oplevet* læring (rs=0,802, p<0,001), mens indikatorerne for selvstændig fremgang uden underviserstøtte scorede lavest. Forfatterne kalder gabet en kompetenceillusion og epistemisk gæld, og det er præcis det gab, en tilfredshedsmetrik belønner ([[genai-cognitive-tutor-programming-2026|Generativ AI som uformel kognitiv vejleder]]).

Mere grundlæggende stopper det meste evaluering i det øjeblik, assistance slutter. [[cognitive-washout-ai-skill-decay-2026|Dynamikken i kognitiv washout]] navngiver det umålte interval efter tilbagetrækningen og formaliserer fire udfald: elastisk tilbagefjedring, delvist plateau, latent stillads og overgenopretning. Dens washout-kurve bærer en tidskonstant for genopretning, et led for genopretningens fuldstændighed og et hystereseindeks, der sammenligner genindlæringsindsats med den oprindelige indsats. Da reversibilitet afgør alvor, argumenterer rammeværket for, at planlagt uassisteret øvelse bør doseres efter genopretningskurven frem for at debatteres principielt. Din evalueringsplan har brug for en tilbagetrækningsfase såvel som en umiddelbar eftertest, og [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|den randomiserede evidens for, at kortvarig assistance trykker senere uassisteret præstation]], er grunden til at planlægge den tidligt.

## Giv underviserne noget at redigere

Før udrulning skal undervisere teste realistiske lærendeprofiler, almindelige misforståelser, grænsetilfælde, adversarielle prompts, tvetydige svar og lange vejledningssamtaler. Log de pædagogiske fejl og før dem tilbage i systemprompts, vejledningspolitikker, videnskilder, [[guardrails]], regler for lærendemodellen og valg af model. Et flydende svar kan stadig være pædagogisk forkert, og en underviser er den eneste bedømmer, der kan se det.

[[teacher-intervention-k12-ai-based-instruction-2026|Lee's systematiske gennemgang af 29 K-12-studier]] beskriver, hvad det tilsyn består i, og hvor det bryder sammen. [[teacher-role|Underviserens]] intervention er en tilbagevendende firefaset cyklus af overvågning, vurdering, intervention og orkestrering. AI-alarmer, [[visualization|dashboards]] og automatiserede scorer »fører ikke automatisk til pædagogisk handling«. Den stærkeste lærerstrategi, gennemgangen finder, er pædagogisk oversættelse: at vælge, revidere, supplere, opsummere eller slette chatbotfeedback frem for at give den videre uændret.

To designadvarsler følger, og begge modsiger den sædvanlige køreplan. Mere AI-information er ikke bedre: systemer, der konstant udsender diagnostik, overbelastede underviserne og trak opmærksomheden væk fra deres egen observation. Prioritér det, der er værd at handle på, gør det fortolkeligt, og giv anbefalinger i en form, en underviser kan acceptere, ændre, udskyde eller afvise. Mere underviserstøtte er heller ikke bedre: at udskyde interventionen, så de studerende kan arbejde selvstændigt, er i sig selv ekspertise. Strukturelle vilkår, det vil sige tid til at gennemgå data, klassestørrelse og muligheden for fysisk at nå de grupper, der har brug for hjælp, er en del af interventionen frem for baggrundslogistik. Et dashboard bygget til en underviser uden en fri periode bliver ikke åbnet.

## Case et: en calculusvejleder, hvor verifikation er billig

En vejleder til første semester på universitetets calculuskursus bør hæve, hvad de studerende kan løse og forklare selvstændigt, efter den er fjernet, ikke maksimere korrekt fuldførte opgaver. Matematikvejledning er særligt udsat for overstilladsning, for tidlig brug af hints og forkert diagnose af studerendes ræsonnement, og alle tre er synlige i dine logs, hvis du kigger ([[math-education]]).

**Forankring og verifikation.** Et byggeri i seks lag: kursusmaterialer og underviserens politikker, derefter et retrieval-lag, derefter en opgavemotor og en lærendemodel side om side med en symbolsk verifikator og en diagnostisk motor, derefter et pædagogisk politiklag, derefter konversationel generering, derefter den studerende og tilbage i lærendemodellen. Verifikatoren er grunden til, at dette design er håndterbart. Den afgør, om et udtryk er ækvivalent, en afledt funktion korrekt, et integral udregnet, et kritisk punkt fundet, og den gør det uden at spørge modellen om dens mening.

**Én interaktion.** For at differentiere $f(x)=(x^2+1)\sin x$ afslører en konventionel chatbot svaret. En læringsorienteret vejleder ræsonnerer internt over, at den studerende differentierede begge komponenter, men gangede resultaterne, en mulig [[misconceptions|misforståelse]] af produktreglen som $f'g'$, og stiller først et diagnostisk spørgsmål: hvilken regel gælder, når to funktioner ganges? Derefter skriver den studerende produktreglen symbolsk, sætter $u$ og $v$ op, og først efter det verificerer vejlederen det endelige udtryk. Læg mærke til, hvor meget af vejledningen der skete, før nogen modelprosa nåede den studerende.

**Flere repræsentationer.** Forbind symbolske procedurer med formlen, grafen, tabellen, en verbal fortolkning og en fysisk ændringsrate-kontekst. Proceduremæssig flyden og konceptuel forståelse ser identiske ud på et ark med rigtige svar og divergerer på transferopgaven.

**Dashboardet.** Vis aggregeret evidens i stedet for uigennemsigtige vurderinger: »produktregel, 62 % demonstreret mestring; almindelige mønstre, 18 % udelader et led, 11 % ganger afledte funktioner.« Individuelle diagnoser udsendes som hypoteser med den understøttende evidens, og det er også det, der gør dem reviderbare for en underviser ([[explainable-ai|forklarlighed]] betyder mere for underviseren end for den studerende her).

**Evalueringsplanen.** Præstation med vejlederen, præstation på sammenlignelige opgaver uden den, forsinket retention, transfer til ukendte opgaver, kvaliteten af konceptuel forklaring, rettelse af misforståelser, hensigtsmæssig kontra for tidlig [[help-seeking|hjælpsøgning]], svarlækage, diagnostiske falsk-positive og falsk-negative rater samt forskellige udfald. Den sammenligning, der afgør projektet, er assisteret mod senere uassisteret. En studerende, der går fra 60 % til 95 % med vejlederen og bliver på 60 % alene, er ikke blevet vejledt.

## Case to: en skrivecoach, hvor fasen afgør tilladelsen

Skrivning har ikke ét korrekt svar, så verifikation er vurdering, og designarbejdet flytter til fasestyring. Vidensbasen rammesætter skrivning som en kognitiv, social og retorisk proces, hvilket betyder, at et AI-skrivesystem kan understøtte læring og også kan eliminere præcis den tænkning, opgaven fandtes for at udvikle ([[writing-education]], [[coach-not-crutch-ai-writing]]).

**En kapacitetsmodel.** Følg argumentation (tesens specificitet, påstandes sammenhæng med evidens, modargument), organisering (afsnittets fokus, logisk fremdrift, overgange), evidens (kildens relevans, integration, fortolkning), revision (global og sætningsniveau, vurdering af feedback) og stil (klarhed, grammatik, stemme). Hver bliver et separat signal i lærendemodellen, og det er det, der overhovedet gør målrettet feedback mulig.

**Forankr coachen i opgaven.** Hent instruktionerne, underviserens rubric, kursuslitteraturen, citationskravene, genrens konventioner, underviserens eksempler og politikken for AI-brug, så feedback kan sige »din undervisers rubric kræver, at du forbinder hver større påstand med evidens fra mindst to kursustekster« i stedet for at opfinde generiske forventninger. Generisk rådgivning er standardfejlen i et uforankret skriveværktøj, og studerende kan se det inden for to sessioner.

**Sæt tilladelser per fase.** AI-inddragelse i forskellige faser påvirker oplevet ejerskab forskelligt. Støtte til planlægning reducerer ejerskab mindre end støtte til kladdeskrivning, og AI-genereret kladdeskrivning giver det største fald ([[ai-writing-support-stage-ownership-2026|Fra planlægning til revision]]). Det fund omsættes direkte til en tilladelsestabel. I planlægningen stiller coachen spørgsmål, sammenligner positioner, udfordrer antagelser og kritiserer dispositioner og genererer ikke argumentet. I kladdeskrivningen producerer den lærende først prosa, og coachen udvikler frem for at overtage. I revisionen diagnosticerer coachen og stopper der: uklare påstande, manglende evidens, evidens der ikke understøtter påstanden, organisatoriske problemer, kladden mod rubricen. I korrekturlæsningen, efter revisionen, håndterer den grammatik, tegnsætning, koncision og formatering af kildehenvisninger.

**En gennemført interaktion.** Til en opgave om at kræve [[online-teaching-and-learning|onlinekurser]] skriver et generisk system den studerendes afsnit om til poleret prosa og gør det intellektuelle arbejde. En coach siger, hvad der fungerer, navngiver hovedproblemet (afsnittet giver grunde, men forklarer aldrig, hvorfor de retfærdiggør et krav for hele universitetet), stiller et revisionsspørgsmål og beder den studerende færdiggøre en sætning med egne ord. Argumentet bliver, hvor det hører hjemme.

**Prioriteret feedback.** Én styrke at bevare, ét problem med stor effekt, ét spørgsmål der kræver forfatterens vurdering, ét konkret revisionsmål. Ikke fyrre kommentarer. En studerende, der får fyrre kommentarer, triagerer dem efter længde, og triagen har intet at gøre med, hvad der betyder noget.

**Lad den studerende bedømme feedbacken.** [[feedback-literacy|Feedbackkompetence]] er et læringsmål i sig selv. Spørg med jævne mellemrum, om den lærende er enig i et forslag og hvorfor, og lad dem afvise det. Resultatet er [[evaluative-judgment|evaluerende dømmekraft]] frem for compliance, og det er også det eneste forsvar mod en coach, der er overbevisende forkert.

**Bevar stemmen.** Skeln mellem fejl, klarhedsproblemer, retoriske valg og stilpræferencer, og lad de to sidste være. En coach, der »retter« retoriske valg, homogeniserer skrivningen mod den stil, modellen foretrækker, og den gør størst skade på [[multilingual-learning|flersprogede]] skribenter og ikke-standardiserede retoriske traditioner ([[ai-feedback-quality|kvaliteten af AI-feedback]] er den generelle version af dette problem).

**Lær af revisionerne.** Gem revisionshistorikken frem for kun de endelige opgaver. Et gentaget mønster med »evidens indført, men ikke fortolket«, der forbedres over tre opgaver, er det mest brugbare signal, et skrivesystem kan have, og det er gratis.

**Evaluering.** Kvaliteten af AI-assisteret og senere uassisteret skrivning, evnen til at finde svagheder i ukendt tekst, revisionskvalitet, optag af feedback, evnen til at forklare revisioner, ejerskab, afhængighed af AI-prosa, bevarelse af stemme, bias på tværs af dialekter og flersprogede skribenter, overensstemmelse med underviserens vurdering og forsinket transfer. Det design, der besvarer det, har tre arme: at skrive selvstændigt, at AI'en genererer teksten, og en coach. Alle tre grupper skriver derefter en ny opgave uden AI. Hvis den AI-genererede gruppe vinder i praksis og taber uden, forbedrede systemet præstationen frem for læringen. Mønstre på klasseniveau fra dashboardet (41 % har brug for støtte til at forbinde påstand og evidens) er et signal til [[formative-assessment|formativ evaluering]] for underviseren.

## Sammenligning af de to byggerier

| Designspørgsmål | Calculusvejleder | Skrivecoach |
|---|---|---|
| Primært læringsobjekt | Matematiske begreber og problemløsning | Argumentation og skriveproces |
| Verifikation | Ofte objektivt kontrollerbar | Kræver som regel kontekstuel vurdering |
| Deterministiske værktøjer | Symbolsk matematikmotor, lommeregner | Grammatik, kildehenvisning, rubrickontrol |
| AI'ens hovedrolle | Diagnosticér og stilladsér ræsonnement | Diagnosticér og stilladsér revision |
| Største risiko | At give løsningen væk | At skrive teksten for den lærende |
| Den lærendes handling, der betyder noget | Løse og forklare | Skrive kladde, vurdere og revidere |
| Lærendemodel | Begreber, procedurer, misforståelser | Argument, evidens, organisering, revision |
| Central guardrail | Forsøg før løsning | Studerendes prosa før AI-omskrivning |
| Transfertest | Nye calculusopgaver uden AI | Ny skriveopgave uden AI |
| Succeskriterium | Selvstændigt matematisk ræsonnement | Selvstændig skrivning og evaluerende dømmekraft |

Begge systemer bruger det samme sæt [[ai-technologies|AI-teknologier]] og legemliggør forskellige pædagogiske politikker, fordi fagene kræver forskellige slags tænkning. Den regel, der generaliserer, er at identificere den kognitive aktivitet, der producerer læringen, og designe AI'en til at understøtte den aktivitet uden at udføre den. Den regel går forud for enhver bestemt model, prompt, agentramme eller grænseflade.

## Hvad udviklingsteams tager fejl af

**Pædagogikken bor i systemprompten, så en omhyggelig prompt er et pædagogisk design.** En prompt er ét lag i en politik, der også omfatter, hvilken evidens du indsamler, hvilket trin grænsefladen tilbyder, hvad verifikatoren kontrollerer, og hvad dashboardet viser. En velformuleret prompt oven på en lærendemodel, der intet gemmer, giver en flydende vejleder uden hukommelse om den studerende, og trappen starter forfra hver session.

**En bedre model løser diagnosen.** Benchmarkresultatet ovenfor fandt LLM-vejledere, der genkendte korrekt ræsonnement, mens de afviste gyldige alternativer og accepterede forkerte, og det er et fejlmønster, som skala ikke åbenlyst reparerer. Struktureret diagnose findes, fordi modellens vurdering er den del, du ikke kan revidere.

**Tilfredshed og fuldførelse beviser, at designet virker.** De beviser, at de studerende fik hjælp. Piloten med 38 programmeringsstuderende fandt oplevet læring stærkt forbundet med brug, mens selvstændig fremgang scorede lavest, og mestringsstudiet fandt, at et streakkrav hævede platformens mestring uden gevinst på den forsinkede test. Byg tilbagetrækningsmålet ind i piloten, ellers lærer du den forkerte lektie effektivt.

**Retrieval gør svarene troværdige.** Det reducerer [[hallucination-risk|risikoen for hallucination]] og lader resten af fejlfladen være intakt: en hentet passage kan fejllæses, en gyldig teknik kan være forkert for kurset, og modellen kan stadig tage overbevisende fejl om et trin, den selv udledte. Retrieval er et gulv.

**At bestå sikkerhedssuiten betyder, at den er sikker for studerende.** Almindelig sikkerhedstest dækker toksicitet og jailbreaks. De pædagogiske fejl, der betyder noget her, svarlækage, sycophancy og drift, er usynlige for den, og de akkumulerer over en samtale frem for at vise sig i en enkelt tur.

**Engagement er målet.** Samtalelængde og antal sessioner er de billigste metrikker at instrumentere, og derfor bliver de forfremmet til mål. Argumentet om [[scaffolding|stilladsning]] siger, at den ideelle session bliver kortere, i takt med at den studerende bliver bedre, så en stigning i engagement er lige så sandsynligt et symptom.

## Hvad du vil få tilbage

**»Vi leverer om seks uger, og det her er et kvartals arbejde.«** Det meste af arkitekturen er billig. En port til forsøg, en konfigureret trappe, retrieval over noter du allerede har, og et logskema med et tilbagetrækningsfelt er dages arbejde. De dyre dele (lærendemodel, verifikator, dashboard) kan starte bag et feature flag for ét kursus, og piloten er mere informativ, når de billige dele er gjort.

**»De studerende elsker det, og fuldførelsen er oppe.«** Begge fakta er forenelige med et system, der svarer godt på spørgsmål og ikke underviser i noget. Studiet med 6.000 studerende fandt langsommere fremgang og færre forsøgte spørgsmål sammen med bedre nøjagtighed, så et fald i fuldførelse er heller ikke automatisk dårligt nyt. Rapportér uassisteret præstation ved siden af engagementstallene, og lad de to være uenige offentligt.

**»Vi kan ikke køre et randomiseret forsøg.«** Du kan køre en sammenligning inden for den enkelte studerende uden: samme mål, assisteret i løbet af forløbet, testet uassisteret to uger senere, med den assisterede score rapporteret ved siden af. Det design besvarer produktspørgsmålet og kræver ingen kontrolarm. Det, det ikke kan fortælle dig, er kontrafaktummet for studerende, der aldrig brugte vejlederen.

**»Modellen er en leverandørs API, så hjælpeadfærden er ude af vores hænder.«** Trinnene bor i dit orkestreringslag, og resultatet i guardrail-eksperimentet kom fra at ændre, hvad vejlederen måtte sige, ikke fra at skifte model. Forvent, at leverandørens eftertræning trækker mod at svare med det samme, fordi hjælpsomhed er det, den er tunet til, og læg tilbageholdenheden i din egen kode.

**»Underviserne vil ikke bruge endnu et dashboard.«** De vil ikke bruge et, der udsender konstant diagnostik, hvilket K-12-gennemgangen fandt trak opmærksomheden væk fra deres egen observation. Giv dem et lille antal fortolkelige signaler, en måde at acceptere eller afvise hver anbefaling og tid i ugen til at se på dem.

**»Vi har ikke fageksperter ansat.«** Så vil vejlederen undervise i generisk metode, og kursets notation driver inden for et semester. En fagekspert i to dage i designfasen, som skriver listen over misforståelser og listen over godkendte metoder, er den billigste post i projektet og den, teams skærer først.

## Hvad du kan gøre i denne uge

**1.** Skriv sætningen om uassisteret præstation for piloten, og sæt den i kravspecifikationen, over funktionslisten.

**2.** Tilføj en port til forsøg, og log den. Registrér, om den studerende forsøgte, før det første hint, og hvilket trin de nåede.

**3.** Erstat hintknappen med spørgsmålet om blokeringspunktet, og log svaret som en kategori.

**4.** Planlæg én uassisteret kontrol to uger efter forløbet, og sæt den i kalenderen med en ansvarlig.

**5.** Book to dage med en fagunderviser for at skrive listen over misforståelser og listen over godkendte metoder.

## Hvor du kan gå videre

[[designing-educational-ai-software]] dækker de regler på softwareniveau, en vejleder skal opfylde, og [[designing-ai-into-learning]] dækker, hvor vejlederen sidder i et kursusforløb. [[evaluating-ai-interventions-methods]] og [[checking-whether-educational-ai-works]] håndterer, om tingesten virker. Er dit problem, at modellen svarer for beredvilligt, arbejder [[making-ai-better-at-supporting-learning]] og [[training-ai-tutors-to-guide-rather-than-answer]] gennem træningssiden af samme spørgsmål.
