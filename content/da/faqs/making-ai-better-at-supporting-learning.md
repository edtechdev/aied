---
title: "Hvordan kan vi gøre AI bedre til at støtte læring i vores eget fag?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Sagen siger »finjustér modellen på vores kursusmaterialer«. Budgettet er godkendt, en GPU er booket til næste måned, og en ph.d.-studerende er blevet bedt om at samle et datasæt. Ingen på mødet har spurgt, hvad en almindelig prompt scorer, eller hvad en søgning på nøgleord scorer, på de samme spørgsmål.

Stil de to spørgsmål først. I denne vidensbase er forskellen mellem en generel model og en kursuskompetent model mest et forankrings- og promptproblem, og evidensen for den rækkefølge er usædvanligt direkte: et studie af en kursusassistent fandt, at retrieval, ikke modellen, var den førsterangs beslutning, og en generel model uden forankring scorede *under* en simpel TF-IDF-baseline.

Træning er reel og nogle gange nødvendig. Det er den tredje eller fjerde ting, man prøver, og arbejdet nedenfor er ordnet, så du finder ud af, hvilket trin du faktisk har brug for, før du bruger kvartalets computekraft.

## Den korte version

**1.** Log, hvad en almindelig prompt scorer, og hvad en triviel leksikalsk metode scorer, før du ændrer noget. Det andet tal er det, der holder dig ærlig.

**2.** Sæt retrieval over dine egne materialer foran modellen. Det er den største enkeltstående gevinst, der rapporteres her, for prisen, og den kan rulles tilbage.

**3.** Engineering prompten op imod din rubrik, og iterér, indtil forbedringen stopper. Plateauet er signalet om, at træning måske kan tilføje noget.

**4.** Tilpas vægtene med [[llm-training-and-fine-tuning|LoRA]], når målet er stabilt og snævert: et format, en rubrik, et læseniveau, et fagligt ordforråd.

**5.** Eftertræn, når problemet er adfærd snarere end indhold, og skriv belønningen op imod en benchmark, du forventer bliver spillet.

**6.** Byg træningssættet på trinniveau. Data med kun svar lærer ikke en misforståelse.

## Få en baseline, du faktisk kan slå

Før du ændrer noget, skal du logge, hvad en almindelig prompt returnerer. Log derefter, hvad en triviel metode returnerer.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Studiet af kursusvidensbaseassistenten]] er værd at læse alene for dette. En lokal LLM uden retrieval nåede **52,3 %** nøjagtighed. En TF-IDF-baseline, en leksikalsk metode, der er årtier gammel, nåede **55,4 %**. Modellen var dårligere end den klassiske metode.

Springer du dette trin over, kan du ikke afgøre, om din finjustering hjalp. Værre, du kan sende et system ud, som en nøgleordssøgning slår, og først opdage det, når en undervisningsassistent nævner det. To tal i et regneark, taget på en eftermiddag, beskytter resten af budgettet.

## Forankr modellen i dine egne materialer

At tilføje [[rag|retrieval-augmented generation]] over kursusmaterialerne, uden nogen finjustering overhovedet, løftede det samme system fra 52,3 % til **66,6 %**. Den gevinst kom fra et indeks, og den kommer med en egenskab, en træningskørsel ikke har: når dine dokumenter ændrer sig, genindekserer du.

To andre resultater peger samme vej. En PRISMA-gennemgang af 23 empiriske studier om tilpasning af AI til [[writing-education|skriveundervisning]] fandt **prompt-engineering dominerende (N = 13), foran finjustering (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Hvor en vidensbase skal forblive aktuel, er retrieval det eneste håndtag, der forbliver aktuelt uden at køre et træningsjob igen.

Retrieval har også en pædagogisk form. At forankre en model i dine egne gennemarbejdede eksempler og rubrikker er, hvordan den holder sig inden for det [[scaffolding|stilladsning]], du har designet, og svarer på det niveau, du har sat, i stedet for at drive ud i generisk rådgivning. Den drift er den mest almindelige klage over færdige tutorværktøjer, og det er oftere et retrievalproblem end et vægtproblem.

## Skriv prompten op imod din rubrik, og hold øje med plateauet

Promptarbejde er ikke en forberedelse, man laver, mens man venter på GPU'en. To resultater viser, hvad det opnår alene:

- **Rubrikstyret prompting, iterativt samforfinet, løftede overensstemmelsen mellem LLM og menneske på studerendes designarbejde fra 54,75 % til 81,25 %** (Cronbachs alfa 0,393 til 0,798), uden nogen finjustering overhovedet ([[yasar-llms-iterative-pedagogical-design-2026]]).
- En litteraturforankret tilpasset prompt fremkaldte målrettede matematiske [[misconceptions|misforståelser]] med **0,98** i tilstedeværelse, mod **0,40** for en bred prompt ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Det praktiske signal er **plateauet**. I studiet om opgavegenerering stoppede iterativ promptforfining med at forbedre, og finjustering af GPT-4.1 *på den optimerede prompt* tilføjede derefter den resterende gevinst ([[gpt-item-generation-l2-listening-2026]]). Et plateau efter reelt promptarbejde er evidens for, at træning har plads til at tilføje noget. At gribe efter træning, før man har nået et, er gætteri, og gætteri koster en måned.

Bemærk, hvad resultatet om opgavegenerering antyder om rækkefølgen. Finjusteringen blev bygget på den optimerede prompt, så promptarbejdet var ikke spildt, da holdet til sidst trænede. Det billige trin er også specifikationen for det dyre.

## Tilpas vægtene, når målet er stabilt og snævert

Tilpasning betaler sig, når du har brug for, at modellen pålideligt holder en egenskab: et læseniveau, et outputformat, et domæne den mangler. Det tilbagevendende resultat er, at **målretning slår størrelse**.

- Tre **8B**-modeller finjusteret på et ekspertdesignet læsepensum for børn overgik zero-shot GPT-4o og Llama 3.3 70B på sværhedsgraderelaterede målinger, med ubetydelige sikkerhedsproblemer. Forfatterne rammer det ind som **styrbarhed frem for skala** ([[llm-children-reading-story-generation]]).
- Et instruktionsdatasæt med **24.795** eksempler forankret i indiske videnssystemer gav en **7B**-finjustering, der scorede **6,39** hos et eksternt panel med fem dommere, inden for **0,15** af en stærk generel referencemodel til en brøkdel af udrulningsomkostningen. Den samme basismodel scorede **nær nul på domænespecifikke dimensioner** uden finjusteringen ([[iks-instruct-dataset-indian-knowledge]]). Det gab mellem at være kompetent generelt og kompetent her er hele argumentet for domænetilpasning.
- Én enkelt [[llm-training-and-fine-tuning|LoRA]]-adapter trænet på omkring **3.900** samlede bedømte eksempler bragte fem små åbne modeller (4B til 30B) på niveau med eller bedre end en menneskelig bedømmer på tværs af to datalogieksamener ([[llm-graders-computer-science-exams-2026]]). Én adapter, ét datasæt, flere basismodeller: det er den udrulningsform, et lille hold kan køre.

Ordet *stabilt* i overskriften bærer vægten. Format, rubrik, læseniveau og fagligt ordforråd er stabile mål. Prosa, der er præget af dømmekraft, har ikke et sådant mål, og det er der, tilpasning fejler, som de næste to afsnit viser.

## Ændr adfærden, når svarene er problemet

Tilpasning lærer en model *hvad den skal producere*. Eftertræning lærer den *hvordan den skal opføre sig*. For tutoring er den skelnen hele problemet: generelle modeller er eftertrænet på menneskelig præference for hjælpsomhed, hvilket betyder at svare hurtigt, og undervisning kræver, at man tilbageholder svaret.

De stærkeste pædagogiske resultater i dette korpus findes her. EduQwens belønningsmodel prioriterede eksplicit **vejledende svar frem for direkte svar**, og dens tre-trins-pipeline nåede **96,52 %** på CDPK-benchmarken mod Gemini-3 Pros **90,55 %** ([[singh-eduqwen-pedagogical-rl-2026]]). SWIMs skrivesimulator bevægede sig fra rubrikforankret prompting (bedste QWK **0,577**) til superviseret finjustering (**0,474 ± 0,023**) til forstærkningslæring (**0,618 ± 0,005**) på tværs af hver egenskab og prompt ([[swim-student-writing-simulation-2026]]).

Læs SWIM-tallene omhyggeligt, fordi det midterste trin gik baglæns. Superviseret finjustering på demonstrationer gjorde simulatoren dårligere end den prompt, den startede fra, og kun belønningssignalet genvandt tabet og slog derefter baselinen. Hvis din plan stopper ved superviseret finjustering, kan planen være en omvej.

## Superviser på trinniveau

Ét fund her er let at overse og dyrt at ignorere: **supervisionskvalitet slår supervisionsmængde**. Instruktionstunede modeller lærte kun algebraiske misforståelser, når de blev trænet på **løsningsspor på trinniveau**. Trænet på slutsvar alene forblev nøjagtigheden **under 30 % ved hver datastørrelse** ([[misconception-acquisition-dynamics-llms-2026]]).

Hvis dine træningseksempler er par af spørgsmål og korrekt svar, træner du det forkerte, og flere eksempler reparerer det ikke. Det, du har brug for, er mellemarbejdet: det forkerte sving, det trin hvor den studerende gik galt, rettelsen. At indsamle det er et dataengineeringproblem med en pædagogisk begrænsning, og det betyder normalt, at man logger sessioner i stedet for at skrabe facitlister.

## Hvor tilpasning fejler i det stille

Det er den del, begejstringen springer over.

**Dømmekraftspræget tekst.** I WrAFT gav det samme projekt, som finjusterede med succes til *bedømmelse* af opgaver (QWK 0,84), afkortet og uparserbart output, da det finjusterede til *feedback*, mens direkte prompting af Claude 3.7 gav den feedback, lærerne vurderede højest ([[wraft-automated-writing-evaluation-argumentative-2026]]). Finjusteringen lærte modellen at ramme en score, og det var det eneste, den lærte.

**Transfer mellem modeller.** Skala er ikke en pålidelig forudsigelse for downstream-præstation under LoRA-tilpasning, og **identiske hyperparametre gav kvalitativt forskellig adfærd på tværs af arkitekturer** ([[aiawe-automated-writing-evaluation]]). En opskrift, der virkede på én model, er ikke en opskrift.

**Arkitektur frem for parameterantal.** Finjustering af tre åbne tekst-til-billede-modeller på 1.000 billeder af kernefysik med billedtekst forbedrede Stable Diffusion XL betydeligt, gav begrænsede gevinster for SD-v3.5-Medium og gav **slet ingen målbar forbedring for Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Problemet var validering.** En frontiermodel, utrænet GPT-4, producerede omkring **35 %** for generelle, forkerte eller svarafslørende hints, når den forfattede tutoringfeedback, og dens egne automatiske kvalitetskontroller var uenige med menneskelig dømmekraft ([[reddig-maclellan-personalized-feedback-llm-2026]]). Det er et filtreringsproblem, og en LoRA løser det ikke.

Mønstret på tværs af alle fire: tilpasning flytter pålideligt en model mod et mål, du kan specificere og score. Den tilføjer ingen dømmekraft, og en pipeline, der mangler en kontrol, sender stadig dårligt output ud.

## Budgetter tilpasningen ærligt

For tilpasningstrinnet er barren lavere, end de fleste hold antager: **et par hundrede til et par tusind eksempler og én GPU**. LoRA træner et lille antal tilføjede parametre og lader basisvægtene være frosne, så flere modeller kan betjenes fra én adapter.

Rang er en afvejning snarere end et hjul, man skruer op. Gevinst per million adapterparametre faldt monotont, efterhånden som rangen steg, og justering på kursusniveau var en beslutning om skala og rang snarere end en gratis opgradering ([[lora-finetuned-control-systems-course-qa-2026]]).

Hvilke lag du tilpasser, er også et reelt valg. At opdatere **kun de sidste fire Transformer-lag** i en BERT-baseret diskursanalysator slog både at tilpasse kun det øverste lag og finjustering i fuld dybde ([[bert-discourse-english-teaching-2026]]). Tre konfigurationer, tre forskellige resultater, og den billigste vandt.

Den omkostning, der er let at undervurdere, er evalueringen, som er større end computerregningen. Se [[checking-whether-educational-ai-works|Hvordan ved vi, at en pædagogisk AI fungerer korrekt og ikke bare scorer godt?]]

## Kalibrér dine forventninger

Model- og promptvalg tegner sig tilsammen for kun omkring **15 %** af misforholdet mellem LLM'er og studerendes læringsudbytte, og i det studie gjorde benchmark-vægtning og enighedsafstemning i ensembler tilpasningen *værre* ([[educational-llm-alignment]]). Forudtræningsdata er det dominerende håndtag for, hvordan en model opfører sig, og det er det ene håndtag, du ikke kan trække i.

Intet af det taler imod arbejdet ovenfor. Det taler imod at forvente, at en finjustering retter et designproblem. Hvis problemet er, at din tutor svarer for beredvilligt, kan træning adressere det. Hvis problemet er, at dine lærende ikke engagerer sig i den, vil træning ikke, og tallet 15 % siger, at pengene er bedre brugt andre steder.

## Hvad holdene gør forkert

Finjustering er måden, du lærer en model dit kursus. Retrieval over dine egne materialer tog det samme system fra 52,3 % til 66,6 % uden nogen træning overhovedet, og en prompt forfinet imod en rubrik flyttede overensstemmelsen fra 54,75 % til 81,25 %. Træning lærer adfærd og format langt mere pålideligt, end den lærer indhold.

En større basismodel fjerner behovet for alt dette. En 8B-model finjusteret på et læsepensum for børn slog zero-shot GPT-4o og Llama 3.3 70B på sværhedsgradsmålinger, og en 7B-finjustering landede inden for 0,15 af en stærk generel reference til en brøkdel af udrulningsomkostningen. Størrelse og pasform er forskellige akser, og kun én af dem kan købes per token.

Mere data retter et træningssæt, der er bygget forkert. Supervision med kun svar efterlod nøjagtigheden under 30 % ved hver datastørrelse i studiet om misforståelser. Skala reparerer ikke et mål, der mangler den information, modellen har brug for.

En opskrift, der virkede på én model, virker på den næste. Identiske hyperparametre gav kvalitativt forskellig adfærd på tværs af arkitekturer, og den samme finjusteringsmetode forbedrede én billedmodel betydeligt og gjorde intet målbart for en anden. Kør opskriften igen på din basismodel, eller du gætter.

Superviseret finjustering er det sikre midterste trin før forstærkningslæring. I SWIM scorede det superviserede trin 0,474 mod 0,577 fra den prompt, det erstattede, og kun belønningssignalet genvandt det. Det midterste trin kan koste dig en måned og en regression.

## Hvad du vil få tilbage

**»Budgettet er godkendt til finjustering, så lad os finjustere.«** Brug en uge på baselinen og indekset først. Hvis retrieval flytter tallet, er finjusteringen en senere beslutning taget med bedre information, og du vil have en stærkere sag for den eller en god grund til at returnere GPU'en.

**»Vores problem er, at de studerende ikke bruger den.«** Træning ændrer, hvad modellen producerer. Tallet 15 % beskriver, hvor meget model- og promptvalg betyder for misforholdet til læringsudbyttet, og engagement ligger uden for det. Instrumentér, hvor de studerende falder fra, før du køber computekraft.

**»Vi kan ikke sende studerendes arbejde til en leverandørs API.«** Det stærkeste LoRA-resultat her kom fra åbne modeller i 4B til 30B-området, og én adapter betjente flere af dem. Den udrulningsform er tilgængelig for et hold med én GPU og ingen databehandleraftale.

**»Prompting er et hack; rigtigt arbejde betyder træning.«** Gennemgangen af 23 studier om skriveundervisning fandt prompting som den dominerende tilgang og finjustering bag den, og den største rapporterede gevinst på denne side kom fra et indeks. Både gennemgangen og studiet af kursusassistenten ordnede de trin efter målt gevinst.

**»Vi prøvede prompting, og det nåede et plateau, så vi har brug for træning.«** Det er den korrekte læsning, og det er det ene tilfælde, hvor klatringen er berettiget. Tag den optimerede prompt med ind i finjusteringen, som holdet bag opgavegenereringen gjorde, og forvent, at gevinsten er mindre, end promptarbejdet var.

**»Vores kursusmaterialer er inkonsistente, så retrieval vil returnere skrald.«** Det vil den, og retrieval arver korpusets kvalitet. At rense korpuset er billigere end at træne en model til at arbejde uden om det, og gevinsten fra 52,3 % til 66,6 % blev målt over almindelige kursusmaterialer snarere end et kurateret sæt.

## Hvad du kan gøre i denne uge

**1.** Kør en baseline med kun prompt og en baseline med nøgleord på 50 rigtige spørgsmål fra dit kursus, og skriv begge tal ned.

**2.** Ret retrieval mod de materialer, du allerede har, og kør de samme 50 igen, så gevinsten måles imod din egen baseline.

**3.** Sæt rubrikken ind i systemprompten, og iterér i en uge. Stop, når to runder ikke tilføjer noget.

**4.** Gransk dit træningssæt for spor på trinniveau. Hvis det er par af spørgsmål og svar, er datasættet ikke klar.

**5.** Skriv den ene egenskab, du har brug for holdes pålideligt, og beslut, om det er adfærd eller indhold. Den beslutning vælger trinnet.

## Hvor du kan gå videre

[[training-ai-tutors-to-guide-rather-than-answer|Hvordan træner vi en AI-tutor til at vejlede studerende i stedet for at svare dem?]] dækker eftertræningshalvdelen i detaljer. [[checking-whether-educational-ai-works|Hvordan ved vi, at en pædagogisk AI fungerer korrekt?]] dækker, hvordan man afgør, om noget af det virkede. [[developing-ai-tutor|Hvad er bedste praksis for at udvikle en effektiv AI-tutor?]] er interaktionsdesignsiden af det samme mål, og [[designing-educational-ai-software|Hvad er bedste praksis for at designe pædagogisk AI-software?]] dækker det omgivende system. Den fulde konceptside er [[llm-training-and-fine-tuning]].
