---
title: "Hvordan kan AI hjælpe mig med at give bedre feedback i stor skala?"
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
updated: "2026-10-29T12:23:32-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Det er sjette uge. Du har en stak udkast, en rubrik du tror på, og en voksende mistanke om, at en tredjedel af dine kommentarer bliver skimmet og glemt. En kollega nævner, at et værktøj nu kommenterer hvert udkast inden for en time. Afdelingsmødet har brug for et svar: er det her en opgradering, eller en hurtigere måde at producere tekst, som ingen læser?

Det korte svar til en kollega: AI-feedback gør sig fortjent til sin plads på dækning, rettidighed og konsistens, inden for et snævert bånd. Sprogarbejde på korrekturlæsningsniveau og rubrikstyrede førstegangskommentarer er værd at automatisere. Rækkevidde er den billige del. I et klyngerandomiseret eksperiment med 1.176 førsteårsstuderende på bacheloruddannelser slog reflekterende og hybride design direkte AI-kritik på forsinket, AI-fri [[transfer-of-learning|transfer]]. I et randomiseret essayeksperiment med 70 studerende gav bedre bedømt AI-feedback ikke bedre revisioner end en erfaren undervisers. Det, en studerende gør med en kommentar, afgør udfaldet, og [[feedback-literacy|feedbackkompetence]] adskiller de studerende, der får noget ud af det, fra dem, der kopierer.

## Den korte version

**1.** Afgør, hvad der tæller som en sejr, før du piloterer noget: revisionskvalitet og forsinket ustøttet præstation, ikke kommentarernes flyden.

**2.** Sortér dine egne kommentarer i rettelser på sprogniveau og vurderinger på dømmekraftsniveau. Kun den første kategori er kandidat til automatisering.

**3.** Sæt kilderne i rækkefølge. Selvevaluering først, peer-feedback som nummer to, AI-kritik som nummer tre. To kilder sat side om side giver passiv optagelse.

**4.** Giv modellen din rubrik, og lad den ræsonnere skridt for skridt. En bar instruktion giver generisk output.

**5.** Behold den endelige besked, tonen og alt, der bliver en journal, hos et menneske.

**6.** Budgetlæg de timer, du vil bruge på sletning og kalibrering, og sammenlign dem med de timer, du frigjorde.

## Afgør, hvad der tæller som en sejr, før du piloterer noget

Den fristende metrik er kvaliteten af det, modellen skriver. Det er også den metrik, der vildleder.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] randomiserede 70 studerende, der skrev argumenterende essays på persisk, i tre grupper. Chain-of-thought-prompting gav signifikant højere bedømt feedback (M = 12,90) end zero-shot-prompting (M = 11,25, p = 0,01) og end en erfaren menneskelig underviser (M = 11,20, p = 0,008). Chain-of-thought-gruppen reviderede ikke sine essays signifikant mere end gruppen med underviserfeedback, som opnåede sammenlignelige gevinster. Bedre kommentarer, de samme revisioner. Hvis dit succeskriterium er kommentarkvalitet, læses den undersøgelse som en sejr. Hvis det er, hvad der ændrede sig i essayet, gør den ikke.

To andre signaler smigrer for et pilotprojekt, der går dårligt, så fastlæg dem på forhånd. Studerendes tilfredshed er det ene. I det universitetsdækkende Deakin-pilotprojekt, som [[tubino-adachi-ai-automated-feedback-literacy|Tubino og Adachi (2022)]] rapporterer om, eksisterede positive gennemsnitsvurderinger side om side med fejl, som studerende gjorde opmærksom på, så en smiley-undersøgelse er ikke evidens for nøjagtighed. Brug er det andet. Deakin-værktøjet var valgfrit, og brugen lå i gennemsnit på cirka 13 % af de studerende på bacheloruddannelser og 12 % af de studerende på kandidatuddannelser, selv om næsten 4.000 studerende havde adgang. Proaktive, højtpræsterende studerende brugte det mere. Det er, hvad man får for at gøre et værktøj tilgængeligt.

Det udfaldsmål, der holder, er revisionskvalitet plus forsinket præstation uden AI. Flere genafleveringer samme dag er et brugbart spor af, om en studerende overhovedet engagerede sig. De er ikke evidens for, at noget blev lært.

## Sortér dine kommentarer, før du automatiserer dem

Tag dit sidste sæt kommentarer og del det i to: rettelser til sætninger og vurderinger af tænkning. Opdelingen fortæller dig, hvad du skal automatisere, og den er smallere, end leverandører antyder.

Deakin-pilotprojektet kørte i 2021 med FeedbackFruits' AI-værktøj til automatisk feedback på tværs af 29 moduler og næsten 4.000 studerende. Det arbejder på teksttræk på mikroniveau: sætningslængde, tegnsætning, grammatik, tekststruktur. Det understøtter korrekturlæsningsfasen, hvor underviseren sætter parametrene, den studerende bruger værktøjet selvstændigt, og feedbacken ankommer i tide til at være handlingsanvisende. Det er arbejdsdelingen, der skalerer, ikke modellen.

Kommentarer på dømmekraftsniveau er der, hvor fejltilstandene bor. [[learner-centered-feedback-ai|Aldino et al. (2026)]] indsamlede underviserproblemer fra 21 undervisere i videregående uddannelse: inkonsistent tone (n = 7), potentiel misinformation (n = 5) og tillidsproblemer (n = 5). Deres revisionsindsats gik til at slette overdreven ros og generiske forslag frem for at tilføje indhold. Den liste er dit gennemgangsarbejde, og det er der, timerne går.

## Sæt kilderne i rækkefølge i stedet for at stable dem

Den stærkeste designevidens kommer fra et multisite, klyngerandomiseret, longitudinelt felteksperiment: 1.176 førsteårsstuderende på bacheloruddannelser i 48 sektioner på 4 universiteter og 3 [[stem-education|naturvidenskabelige]] domæner, randomiseret på sektionsniveau i betingelserne kun-peer, direkte GenAI, reflekterende GenAI og hybrid ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Den reflekterende betingelse krævede selvevaluering før AI-kritik. Den hybride kørte selvevaluering, derefter peer-feedback, derefter GenAI-kritik. Hybrid gav de højeste gevinster i argumentkvalitet og den klareste fordel i begrebsmæssig læring. Reflekterende og hybrid gav begge stærkere optagelse af feedback og mere [[self-regulated-learning|selvreguleret læring]] end direkte GenAI, og begge klarede sig bedre end den på forsinket, AI-fri transfer. Direkte GenAI hævede den umiddelbare argumentkvalitet over peer-feedback, hvilket er den fordel, den har, og den gjorde det med svagere transfer.

Mekanismen forklarer, hvorfor rækkefølgen betyder mere end værktøjet. Direkte kritik indbyder til passiv optagelse: den studerende læser en dom og anvender den. Reflekterende og hybride design tvinger den studerende til at fortolke kommentaren, sammenligne den med kriterier, bedømme dens relevans og derefter revidere. Den uddannelsesmæssige værdi afhænger mindre af AI-adgang end af, om feedbackmiljøet bevarer [[agency|den lærendes agens]] og [[evaluative-judgment|evaluativ dømmekraft]] under revisionen.

Peer-feedback gør sig fortjent til sin egen plads i sekvensen. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen og Yan (2026)]] kørte to parallelle engelske klasser (N = 118 førsteårsstuderende i Kina; GenAI n = 56, peer n = 62) gennem tre selvvurderingscyklusser over et semester. GenAI-stilladsning forbedrede feedbackkompetencen en smule, men signifikant, i forhold til menneskelig peer-review (ANCOVA p = 0,049, ηp² = 0,03). GenAI-studerende finpudsede prompts iterativt og verificerede eller udfordrede unøjagtigt output. Studerende i peergruppen valgte kilder efter social bekvemmelighed og fik deres evaluative dømmekraft forvansket af venskabsbias. Peer-review bevarede en særskilt værdi for bevidsthed om modtageren, hvilket er grunden til, at forfatterne foreslår flertrinsdesign med anonym peer-feedback frem for en erstatning.

Gu et al.s fordel var lille, og de læser den som reel, men ikke transformerende i sig selv. Lærerstøtte, promptvejledninger og arbejdsark gjorde det understøttende arbejde.

## Giv modellen en rubrik, og lad den derefter vise sine skridt

Rubrikrefereret generering er den automatisérbare del.

Farrokhnia et al.s kvalitetsgevinst kom fra en chain-of-thought-prompt, der guidede modellen gennem en skridtvis evaluering mod en argumentationsrubrik, ikke fra en bar instruktion om at give feedback. Gu et al. gav deres GenAI-gruppe ChatGPT-4o med forudtrænede rubrikker og promptvejledninger, hvilket er det, der gjorde outputtet kontrollerbart mod oplyste kriterier. I begge tilfælde er prompten der, hvor dine kriterier kommer ind i systemet, og ræsonnementssporet er det, der lader dig se, om modellen anvendte dem.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson og Yan (2025)]] gør promptkvalitet til hele processens hængsel. Vage prompts giver generisk, ubrugeligt output, og genererede kommentarer kan være hallucinerede, biaserede eller overlappende, hvilket skubber den evaluative dømmekraft tilbage til læseren. Kalibrering er endnu skarpere. Hos Farrokhnia et al. var GenAI-feedbackkvaliteten signifikant forbundet med styrken af den studerendes indledende udkast, mens underviserfeedbackens kvalitet ikke var. Underviseren kalibrerede mere konsekvent. Volumen skalerer. Kalibrering gør ikke.

## Behold det sidste ord og journalen hos et menneske

[[becerra-aicofe-feedback-2026|Becerra, Palma og Cobos (2026)]] beskriver AICoFE, som kører tre uafhængigt finjusterede modeller (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) over rubrikscorer og kvalitative observationer for at producere uafhængige udkastkommentarer. Underviseren sammensætter derefter den endelige besked ved at vælge sætninger eller afsnit, med en forklaring der viser, hvilken model der bidrog med hvad. Modellen skriver udkast. Underviseren leverer, og det leverede er underskrevet af én person, der læste udkastet.

Aldino et al. finder samme mønster med assistance og derefter verifikation i almindelig praksis. Maskinlæringskomponenten markerede oftest »Meeting Learning Objective« som manglende (20 af 21 undervisere havde udeladt det; 16 accepterede markeringen) og »Student-Teacher Relationship« (14 udeladt; 12 accepterede). Underviserne afgjorde hvert forslag på fagligt skøn, hvilket er pointen med at sætte dem i loopet.

Tolv af Aldino et al.s 21 undervisere lavede yderligere revisioner på sætningsniveau, og det dominerende mønster var at kalibrere tone: at skrue ros ned (f = 11), fjerne forslag (f = 9), fjerne opmuntring (f = 8). Revisionerne klyngede sig i den relationelle dimension, især Student-Teacher Relationship (f = 24). De beskyttede autenticitet og faglig stemme, og det arbejde automatiseres ikke.

## Lær studerende at læse kommentaren

Feedbackkompetence er en forudsætning, og den er ulige fordelt.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths og Lodge (2026)]] lod 32 psykologistuderende løse en skærmoptaget essayopgave på 25 minutter med ubegrænset adgang til ChatGPT og derefter se optagelsen igen i et videostimuleret interview. Feedbackkompetence var den eneste signifikante positive prædiktor for essaykarakteren (β = 0,46, p = 0,017). Hyppighed af GenAI-brug, [[trust|kildens troværdighed]] og [[prior-knowledge|forudgående viden]] forudsagde ikke præstationen, et punkt som [[feedback-futures-genai|Zhan, Wood, Carless og Yan (2026)]] også fremfører i deres leder til temanummeret. Færre end en tredjedel af de studerende sammenlignede AI-output med en anden internetkilde. Halvdelen udtrykte bevidst AI-undgåelse af hensyn til [[academic-integrity|akademisk integritet]] eller fordi de ville have essayet i deres egne ord. De fleste bad om feedback på opgaveniveau, som overføres dårligt til andre opgaver.

Yderpunkterne er synlige i det par IELTS-skrivere, som Zhan et al. beskriver. En studerende med lav kompetence skrev en vag prompt, fik generisk feedback, stolede på den eller kopierede den for meget og engagerede sig overfladisk. En studerende med høj kompetence skrev en kriterierefereret prompt, fulgte op, krydstjekkede kilder og overvågede revisionerne. Forskellen var undervisning og vane, ikke værktøjsadgang.

Fortæl de studerende direkte, at modelkommentarer kan være hallucinerede, biaserede eller overlappende, og at den studerende ejer revisionen. Indram outputtet som en udkastmening, der skal bedømmes, frem for et svar, der skal kopieres. Bed derefter om sammenligningen, for færre end en tredjedel af de studerende laver den af sig selv.

## Hvad undervisere tager fejl af her

Flere kommentarer betyder mere feedback. Kommentarer er billige at producere og dyre at optage, og flaskehalsen sidder på den studerendes side af loopet. Farrokhnia et al.s højere bedømte AI-kommentarer gav ikke mere revision end underviserkommentarer.

En bedre model vil løse det generiske output. Deakin-værktøjets svigt var omfangssvigt: træk på sætningsniveau, et snævert korrekturlæsningsbånd. Zhan et al. placerer rettelsen i prompten, rubrikken eller mennesket, ikke i en større model. Parret af IELTS-skrivere er demonstrationen: samme værktøj, forskellige vaner, forskellige resultater.

At gøre værktøjet tilgængeligt er interventionen. Brugen lå på cirka 13 % af de studerende på bacheloruddannelser og 12 % af de studerende på kandidatuddannelser, da værktøjet var valgfrit. Resten af designspørgsmålet er, hvad der sker for de andre 87 %.

Tidsbesparelsen er automatisk. Adspurgt om, hvad AI-feedbackværktøjet gav dem, nævnte de 21 undervisere kun sjældent tidsbesparelse (n = 2). De nævnte refleksion (n = 14), forbedret sprog og struktur (n = 11) og identifikation af manglende komponenter (n = 10) langt oftere. Redigering (f = 32) og fjernelse (f = 27) dominerede deres revisionsarbejde, med tilføjelse sjælden (f = 8). Det, der dukker op, er et udkast og en diagnostisk prompt. Det, der også dukker op, er gennemgangs-, kalibrerings- og verifikationsarbejde. [[ai-save-instructor-time|Arbejdsbyrdespørgsmålet]] er det, der oftest loves væk, og GenAI omfordeler underviserarbejdet frem for at fjerne det.

Tilfredshedsvurderinger fortæller dig, at kommentarerne er nøjagtige. I Deakin-pilotprojektet eksisterede positive gennemsnitsvurderinger side om side med fejl, som studerende gjorde opmærksom på. Udtag stikprøver af outputtet og sammenlign med din egen læsning af de samme udkast, og registrér, hvor modellen var generisk, forkert eller smigrende.

## Hvad der vil komme tilbage til dig

**»AI-feedback er ikke personlig.«** Ofte sandt, og det er grunden til at beholde det sidste ord hos et menneske. AICoFE findes, fordi generisk modelprosa ikke er det, en studerende bør modtage: underviseren vælger, redigerer og underskriver den endelige besked. De 21 undervisere hos Aldino et al. omskrev tone af samme grund. Personalisering er din opgave i dette design, og modellen laver forarbejdet.

**»Mine studerende læser alligevel ikke feedback.«** De læser mindre, end vi håber, og evidensen siger, at rettelsen er design frem for volumen. Optagelsen i Deakin-pilotprojektet lå på cirka 13 % og 12 %. Farrokhnia et al.s højere bedømte kommentarer gav ingen ekstra revision. Det, der flyttede noget, var en rækkefølge, der tvinger engagement, selvevaluering, derefter peer-feedback, derefter AI-kritik, plus tre revisionscyklusser over et semester, som gav målbare forskelle i feedbackkompetence.

**»Det er ikke det, studerende betaler for.«** Så lad ikke AI'en blive den eneste stemme, de hører fra dig. Den forsvarlige version giver studerende flere feedbackøjeblikke, mens du bruger dine timer på de dømmekraftstunge dele: det sidste ord, kalibreringen, de kommentarer der bærer din autoritet. Det, studerende mister ved uagtsom udrulning, er sammenhængen mellem kriterier, kommentarer og udfald. Specificér komplementariteten gennem rækkefølge, sammenligning, redigering og styring, og indvendingen mister sin kraft. Lad to kilder stå side om side, og den gør ikke.

**»Jeg har ikke tid til at gennemgå alt, hvad modellen skriver.«** Så gennemgå ikke alt. Automatisér det bånd, hvor fejl er billige at fange, sprogarbejde på sætningsniveau, og udtag stikprøver af outputtet på dømmekraftsniveau mod udkast, du allerede har bedømt. Aldino-tallene fortæller dig, hvad du skal lede efter: tone, misinformation, overdreven ros, overlap.

## Hvad du kan gøre i denne uge

**1.** Sortér dit eget sidste sæt kommentarer i rettelser på sprogniveau og vurderinger på dømmekraftsniveau, og tæl hver bunke.

**2.** Skriv den rubrikrefererede, skridtvise prompt, du ville give en model, og test den mod tre udkast, du allerede har bedømt.

**3.** Udtag stikprøver af outputtet mod dine egne kommentarer, og registrér, hvor modellen var generisk, forkert eller smigrende.

**4.** Sæt én opgave op som selvevaluering, derefter peer-feedback, derefter AI-kritik, og fortæl de studerende, at AI'en er en udkastmening, de forventes at udfordre.

**5.** Bed om én sammenligning mod en anden kilde eller mod kriterierne, for færre end en tredjedel af de studerende gør dette af sig selv.

**6.** Registrér, hvor meget af den endelige feedback der kom fra modellen, og hvor meget du ændrede. AICoFEs sporing af kuratering er modellen for den journal.

**7.** Hold øje med kløften mellem erfarne og uerfarne. Undervisere med mere end fem års erfaring rapporterede flere problemer med værktøjets output end mindre erfarne kolleger, som værdsatte stilladsningen. Hvis dine erfarne kolleger ser flere fejl end dig, er det information om din egen kalibrering.

## Hvor du kan gå videre hen

[[feedback|Feedback]] er paraplybegrebet for hele systemet: levering, loop, optagelse og bedømmelseskontekst. [[ai-feedback-quality|AI-feedbackkvalitet]] dækker, hvad der gør genererede kommentarer nøjagtige, brugbare, rettidige og pædagogisk forsvarlige, og denne side er den praktiske midterdel om, hvilke kombinationer af de dele der giver bedre feedback i stor skala.

Spørgsmål om, hvad en karakter bør betyde, når AI er involveret, herunder konstruktsubstitution, autentificeret procesevidens og integritetsregler, hører til [[redesign-assessment-ai-era|at gentænke bedømmelse i AI-tidsalderen]] og [[assessment-validity|bedømmelsesvaliditet]] frem for her. Det særlige tilfælde med skriveundervisning findes i [[writing-instruction-ai-best-practices|bedste praksis for skriveundervisning i en AI-kontekst]].
