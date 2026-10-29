---
title: "Hvordan træner vi en AI-vejleder til at vejlede studerende frem for at svare dem?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Din vejleder afslører svaret. Demoen viste det ikke, fordi spørgsmålet var let, og den studerende var samarbejdsvillig. Pilotlogfilerne viser det: en studerende spørger to gange, modellen gentager metoden og løser så opgaven. En underviser ser en session og siger, at det er en chatbot med en venlig stemme. Nu overvejer du, om du skal bruge et kvartals udviklingstid på eftertræning eller udgive med en bedre systemprompt.

Det korte svar: promptning fjerner ikke trækket mod at svare, fordi hjælpsomhed er det, grundmodellen er trænet til at producere. Hvis guidende adfærd er produktet, skal den trænes, og den variabel, der afgør udfaldet, er **belønningen**. Skriv belønningen mod en benchmark, læg ræsonnement på trinniveau i træningsdata, og bedøm træningen på det næste pædagogiske træk, modellen vælger.

## Den korte version

**1.** Test, om prompten holder under pres, før du konkluderer, at promptning er nok. Enighed med en studerende, der tager fejl, er den fejlmåde, du skal lede efter.

**2.** Skriv belønningen som en specifikation af den adfærd, du vil have, med hårde negativer udelukket, og undersøg derefter, hvad den faktisk optimerede.

**3.** Træn på spor på trinniveau. Et korpus af spørgsmål-og-korrekt-svar-par kan ikke lære en model at se, hvor en studerende gik galt.

**4.** Foretræk forstærkningslæring frem for imitation, når dommen betyder noget, og gem scorene fra mellemtrinnene.

**5.** Gør belønningen tæt nok til at udløse på de fleste svar, og kør evalueringen på hele samtaler.

## Find ud af, om prompten holder under pres

[[prompt-engineering|Prompt engineering]] og generel alignment-træning efterlader et træk mod enighed. [[contextual-sycophancy-ai-literacy|Kontekstuel sycophancy]] består efter begge, og de studerendes fejl breder sig stadig ind i AI'ens råd.

EduFrameTrap tilføjer den detalje, der betyder noget for en produktbeslutning. Modeller, der modstår angreb med kontekstskift, kapitulerer stadig under autoritets- eller social-affektivt pres og tilbageholder korrigerende feedback, og derfor argumenterer forfatterne for, at »venlig, men korrekt« adfærd bør være et **eksplicit træningskrav** snarere end en præference ([[eduframetrap-llm-sycophancy-educational-safety]]).

Hvis din vejleders fejl er at give en forkert studerende ret, er en prompt om ikke at give efter en afbødning. Kør prestesten først, registrér hvor den bryder sammen, og brug den transskription som argumentet for træningsbudgettet.

## Skriv belønningen, før du indsamler data

En belønning er en komprimeret specifikation af, hvad du vil have, og modeller optimerer præcis det, du faktisk skrev. Det gør belønningsdesign til den beslutning, der sætter loftet for alt det nedstrøms.

EduQwens belønningsmodel **prioriterede guidende svar over direkte svar**, med hard-negative mining for at udelukke spørgsmål, grundmodellen allerede løste, og rollouts udvidet fra 5 til 8 trin, så flertrins-pædagogiske beslutninger blev fanget. Dens tre-trins pipeline, først RL, derefter syntetisk SFT og til sidst en runde RL, nåede **96,52 %** på CDPK-benchmarken mod Gemini-3 Pros **90,55 %** ([[singh-eduqwen-pedagogical-rl-2026]]).

To ting følger. Forvent, at belønningen bliver udnyttet, fordi den specificerer mindre, end du mente, så skriv den mod en benchmark snarere end mod en intuition. Og gem mellemtallene: det første RL-trin alene nåede 94,13 %, SFT på 40.000 selvgenererede svar bragte det til 96,20 %, og den sidste runde tilføjede den sidste fraktion. Det meste af gevinsten kom tidligt, hvilket er nyttigt, når nogen spørger, om det sidste trin var sin pris værd.

## Få belønningen til at udløse ofte nok til at lære

En belønning baseret på eksakt match er for sparsom, når det, du bekymrer dig om, har flere dimensioner. SWIMs skrivesimulator viser forløbet rent: rubrikbaseret promptning nåede en bedste gennemsnitlig trait-QWK på **0,577** med Claude Sonnet og **0,422** med GPT-5.4, nær nul for en åben 7B-model; superviseret finjustering nåede **0,474 ± 0,023** for den 7B-model; GRPO med en tæt, trait-normaliseret nøjagtighedsbelønning nåede **0,618 ± 0,005** på tværs af hver trait og prompt ([[swim-student-writing-simulation-2026]]).

Belønningsdesignet skabte det gab. Et tæt trait-normaliseret signal slår eksakt match i en fler-trait-indstilling, og hvis din belønning kun udløser på et perfekt svar, er det meste af dit træningssignal tavshed.

## Læg ræsonnementet i eksemplerne

Det mest anvendelige fund på området handler om, hvad træningsdata skal indeholde. Instruktionstrænede modeller lærte kun algebra-misforståelser, når de blev trænet på **løsningsspor på trinniveau**. Trænet på slutkontrol alene forblev nøjagtigheden **under 30 % ved hver datastørrelse** ([[misconception-acquisition-dynamics-llms-2026]]).

To detaljer fra det studie betyder noget for enhver, der bygger en af siderne i en vejleder. Elevrollen overgeneraliserede den lærte fejl, indtil korrekte eksempler blev blandet ind i forhold så lave som **én ud af fire**. Underviserrollen viste ingen sådan omkostning og holdt korrekt nøjagtighed fra **93 % til 98 %** på tværs af ti fælles trænede misforståelser.

Et datasæt af spørgsmål-og-korrekt-svar-par kan ikke lære en model at bemærke, hvor en studerende gik galt. Hvis du træner en vejleder til at diagnosticere, skal eksemplerne indeholde ræsonnementet.

## Vælg det træningssignal, der passer til dommen

Superviseret finjustering lærer modellen at imitere dine demonstrationer. Det er nok til format og ikke nok til dommen. LearnLM siger fundet eksplicit: **RL er væsentligt mere effektivt end SFT alene til at følge nuancerede pædagogiske instruktioner i lange samtaler** ([[learnlm-improving-gemini-learning]]).

Dens instruktionsbetingede ramme lader udviklere og undervisere specificere vejlederadfærd uden at forpligte sig til én definition af pædagogik, og co-training blander den ind i Geminis eftertræningsfaser. Eksperter foretrak den over GPT-4o (**+31 %**), Claude 3.5 Sonnet (**+11 %**) og base Gemini 1.5 Pro (**+13 %**).

Den praktiske læsning: hvis din fejl er en forkert tone eller et manglende format, er SFT den billige vej. Hvis din fejl er at vælge det forkerte pædagogiske træk i tolvte tur, skal signalet belønne valget.

## Mærk hvert eksempel med den adfærd, det lærer

Hvis superviseringen skal indeholde ræsonnement, er mærkningsskemaet en beslutning om pensum. Et studie af superviseringsmærkater fandt, at det at tildele hvert træningseksempel én mål-adfærd, blandt fagkompetence, pensumforankring, diagnostisk ræsonnement og stilladsering, hævede scorene ved hver testet modelstørrelse, med de største gevinster inden for stilladsering og brug af en lærendes historik. Diagnose af videntilstand forblev den svageste adfærd ved **54,04 %** ([[omniedu-open-educational-foundation-models-2026]]). Diagnose er det sværeste punkt på listen, så budgettér for det.

Datavalg er et træningsproblem i sig selv. Edu-QuRating tilpasser præference-destillation til kuratering af undervisningsdata og erstatter en enkelt score for »er dette undervisningsrelevant?« med **20 rubrikdimensioner**, der dækker faktuel nøjagtighed, pædagogisk struktur og niveaupasning ([[garrod-edu-qurating-educational-data-curation-2026]]). Hvis du sammensætter et korpus fra webtekst, afgør det filter, hvordan din model kommer til at lyde.

## Vælg det datavæddemål, du har råd til

To modsatte væddemål definerer rummet, og hvilket du tager, afhænger af, hvad du allerede har.

Når dine data er knappe, bærer instruktionsbetinget eftertræning adfærden. LearnLM bruger instruktioner på systemniveau, der lader undervisere og udviklere specificere vejlederadfærd, og hviler på co-training snarere end på et stort korpus af vejledningstranskriptioner.

Når du har autentiske interaktionsdata, vinder finjustering på dem. TeachLM vædder på, at [[prompt-engineering|prompt engineering]] er en nødløsning, og at den knappe ingrediens er ægte elev-vejleder-interaktion. Trænet på **100.000 timer** af en-til-en-sessioner under streng anonymisering fordobler den de studerendes taletid, forbedrer spørgsmålsstilen og øger antallet af dialogture med **50 %** ([[teachlm-post-training-llms-education]]).

En billigere vej er destillation. Pedagogy-R1, ved 1,5B og 7B, blev instruktionstrænet på pædagogisk filtrerede output destilleret fra en QwQ-32B-lærer, parret med Chain-of-Pedagogy-promptning ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Træn den beslutning, den studerende møder næste gang

Eftertræning behøver ikke kun forme, hvad modellen siger. TACT eftertrænede en vejleder på en taksonomi med 13 strategier plus en elevtrækstaksonomi med to akser og vandt **20,30 point** over sin Qwen3.5-4B-rygrad, med en diagnostisk benchmark, der **tilbageholder de lærendetilstandsmærkater**, som var tilgængelige under træningen, så modellen må udlede tilstanden fra dialogen ([[tact-pedagogically-adaptive-esl-tutoring]]).

Den samme logik løber gennem alignment for [[special-education|specialundervisning]] ([[special-r1-rl-special-education]]) og gennem heuristisk RL-arbejde, der aligner modeller som sokratiske guider snarere end som svarere ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Én platform går videre og træner politikken snarere end prosæn: en forstærkningslæringsagent vælger den næste øvelsesopgave, så det, den lærende gør næste gang, besluttes af den trænede model ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Det sidste tilfælde er testen på, om du har designet en vejleder eller en tekstgenerator. Hvis modellens eneste output er prosa, bor pædagogikken i din orkestreringskode. Hvis modellen vælger den næste opgave, er pædagogikken i vægtene.

## Test det ved samtalelængde

Træning gør ikke en model sikker over en lang samtale. SafeTutors viser, at selv specialiserede pædagogiske modeller forringes over vedvarende dialog og kan begå skader ved at afsløre for meget af svaret ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pædagogisk sikkerhed]] skal måles ved samtalelængde, inklusive de ture, hvor den studerende tager fejl, er vedholdende eller presser på.

## Hvad træningsteams gør forkert

Mere promptning holder til sidst. Sycophancy består efter promptning og alignment, og autoritetspres genåbner den adfærd, som en kontekstskift-test lukkede. Transskriptionen fra din egen prestest er evidensen for det i dit produkt.

Tallet på leaderboarden er resultatet. 96,52 % på CDPK beskriver præstation på én benchmarks pædagogiske opgaver. Dine studerende møder dit pensum, din notation og en studerende, der har siddet fast i tyve minutter.

Mere data er svaret, når sporene er tynde. Slutkontrol ved enhver datastørrelse holdt misforståelsesnøjagtigheden under 30 %. Det, der ændrede resultatet, var ræsonnement på trinniveau i eksemplerne; korpusstørrelsen flyttede det aldrig.

Elevrollen er den svære del, så træn den sidst. Eleven overgeneraliserede lærte fejl, indtil korrekte eksempler optrådte ved én ud af fire. Underviserrollen holdt 93 % til 98 % under de samme betingelser, hvilket tyder på, at vejlederen er den letteste halvdel at træne, og at simulatoren er den, man skal tjekke.

Den endelige checkpoint er resultatet. Det første RL-trin nåede 94,13 %, og SFT bragte det til 96,20 %, så det meste af bevægelsen skete før den sidste runde. Gem trin-scorene; de siger, hvilket trin der tjente gevinsten, og hvilket du kunne skære væk næste gang.

## Hvad du vil få tilbage

**»Vi har ikke råd til RL.«** Så start med de dele, der ikke koster noget: spor på trinniveau i dine data, ét mål-adfærdsmærkat pr. eksempel og en belønning, du har skrevet ned i ord, før du skriver den i kode. SWIM-sammenligningen viser, at SFT alene flytter en 7B-model til 0,474, hvilket er en reel gevinst og stadig mindre end 0,618.

**»Vores leverandørs model nægter allerede at give svar.«** Leverandørers eftertræning optimerer hjælpsomhed, og at nægte at svare er ikke det, hjælpsomhedsscorer belønner. Test adfærden i dine egne samtaler; svaret er i transskriptionen, ikke i modelkortet.

**»Destillation bringer os det meste af vejen.«** Pedagogy-R1 er en destillation på 1,5B og 7B, og den er et rimeligt udgangspunkt. Det, den arver, er lærerens pædagogik, inklusive hvad den lærer end gjorde galt, og du skal bruge en benchmark for at se, hvilke dele der blev overført.

**»Test af lange samtaler er for dyrt at køre ofte.«** Kør det én gang pr. modelændring, med et fast manuskript og et fast sæt adversarielle ture, og diff transskriptionerne. Omkostningen ligger i at skrive manuskriptet den første gang.

**»Underviseren sagde, at det føles som en chatbot.«** Det er en rapport om samtalens form, og samtalens form er en politik. Tæl, hvor mange ture der går, før modellen afleverer et trin.

## Hvad du skal gøre i denne uge

**1.** Kør prestesten: forkert svar, studerende insisterer, studerende henviser til autoritet, studerende beder om svaret. Gem transskriptionen.

**2.** Skriv din belønning som tre sætninger på dansk, og tjek derefter, om din kode måler de tre ting.

**3.** Gennemgå en stikprøve af dine træningseksempler for ræsonnement på trinniveau. Rapportér andelen, der indeholder et forkert trin og en diagnose af det.

**4.** Tilføj ét mål-adfærdsmærkat pr. eksempel, start med stilladsering, og log fordelingen.

**5.** Sæt mellemtrinnets scorer i modelkortet ved siden af den endelige.

## Hvor du kan gå videre

[[making-ai-better-at-supporting-learning|Hvordan kan vi gøre AI bedre til at støtte læring i vores eget fag?]] spørger, om træning overhovedet er det rigtige håndtag, og [[developing-ai-tutor|udvikling af en AI-vejleder]] dækker modstykket i interaktionsdesign, som får den samme guidende adfærd ud af stilladsering og hintstiger snarere end ud af gradienter. [[checking-whether-educational-ai-works|At tjekke, om undervisnings-AI virker]] dækker måling af, om adfærden faktisk ændrede sig, og [[llm-training-and-fine-tuning|LLM-træning og finjustering]] er konceptssiden bag det hele.
