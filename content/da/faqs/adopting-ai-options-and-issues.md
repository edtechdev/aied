---
title: "Hvilke muligheder og problemer skal man overveje, når man indfører AI-værktøjer?"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-12T17:10:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

En institutleder har tre tilbud på en platform til [[intelligent-tutoring|AI-tutoring]] og en deadline på fredag. En [[teacher-role|lærer]] vil bruge et gratis værktøj, som halvdelen af kollegiet allerede bruger. En it-chef bliver spurgt, om institutionen selv skal køre en model, og kan ikke sige, hvad det ville koste.

Det er det samme spørgsmål på tre niveauer. Mulighederne er færre, end en leverandørliste antyder, og problemerne holder længere end noget produkt.

Valget bør passe til den beslutning, der ligger foran dig. En enkeltperson beslutter, hvad der skal indsættes i et værktøj. En institution beslutter, hvem der må bruge hvilken model, på hvilke data, til hvilken pris, og hvem der svarer, når noget går galt. De fleste dårlige beslutninger om indførelse kommer af at besvare det institutionelle spørgsmål med et individuelt værktøj.

## Den korte version

Fem regler dækker det meste. Fastlæg datagrænsen først, for alt andet kan genforhandles, og det kan ikke. Vælg den mindste form, der passer: gratis eller udliciterede værktøjer til en pilot, en hostet platform, når du har brug for datakontrol uden GPU'er, en gateway, når du har brug for kvoter og routing, og egen inference kun når de tre andre svigter. Sammenlign pris pr. plads og forbrugsbaseret pris med dine egne tal, da det meste forbrug normalt kommer fra få tunge brugere. Gør den godkendte vej hurtigere end den ikke-godkendte, da EDUCAUSE fandt, at 94 % af ansatte og undervisere bruger AI til arbejde, 54 % kender politikken og 56 % bruger værktøjer, som institutionen ikke stiller til rådighed. Beslut derefter på forhånd, hvilke beviser der ville få dig til at stoppe, for indførelse uden en exit-test bliver permanent som standard.

## På individniveau

En underviser eller studerende træffer en databeslutning før en undervisningsbeslutning. Studerendes navne, IEP-oplysninger, disciplinære noter og upubliceret forskning skaber ansvaret, så anonymiser først, og undersøg, om værktøjet stadig løser opgaven. Læs derefter vilkårene: opbevaring, træning på dine input og underleverandører står normalt i et dokument, ingen åbner, og hvis svaret ikke kan findes på fem minutter, skal det behandles som ukendt.

Vid, hvad værktøjet er godt til. Genereret tekst er stærkest til at udkaste, omstrukturere og opsummere og svagest til aritmetik, citater og alt, der kræver aktuelle fakta. Vid også, hvad det koster dig. Et gratis niveau er gratis, fordi brugen er produktet, eller fordi niveauet vil ændre sig, og begge dele er en grund til at have en exit i tankerne.

To spørgsmål står tilbage. Hvem ellers bliver berørt, da et værktøj, der omformer et kursus, er en beslutning for de studerende på det. Og om det er tilladt: læs politikken én gang, hvis der er en, og hvis der ikke er, tyder evidensen i [[shadow-ai|shadow-AI]] på, at du allerede laver politik som standard.

Den grove tommelfingerregel: brug det godkendte værktøj, når det er inden for rækkevidde, og når det ikke er, så skriv ned, hvad du gjorde og hvorfor. Den registrering er det, der beskytter dig, hvis vurderingen senere bliver betvivlet.

## På institutionsniveau

En institution køber en service, et dataflow, en supportforpligtelse og en politisk forpligtelse i ét køb. Seks former udgør den reelle menu, og de fleste institutioner er i to eller tre af dem uden at vide det.

Den nemmeste start er et gratis, udliciteret værktøj. AI Tutor Pro fra Contact North kræver ingen konto, og Playlab lader undervisere bygge apps på deres egen [[curriculum-design|læseplan]], mens leverandøren hoster modellerne. Begge er fine til en pilot og dårlige som en varig løsning: ingen revisionsspor, ingen kvotekontrol og vilkår, der kan ændre sig.

Køb af pladser hos en kommerciel lejer, hvad enten det er [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot eller Google Gemini for Education, giver hurtig indkøb, SSO og en adminkonsol og overlader modelvalg og opbevaring til leverandøren.

En platform, du selv hoster, holder data tættere på. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) installeres i din egen AWS-konto, og Vanderbilts pilot rapporterede omkring \$3 pr. bruger pr. måned ved 1.300 brugere, hvoraf halvdelen brugte under \$1 i tokens. Det køber datakontrol uden GPU'er.

En gateway over blandede udbydere sætter én indgang foran flere. Den bærer kvoter, SSO, logning og regional routing; Fontys kørte en sådan til 300 brugere under et månedligt loft på \$500, som aldrig blev overskredet, og [MindRouter](/aied/resources/mindrouter/) tilføjer rollevægtet planlægning og energimåling.

Din egen inference er den dyreste form og den mest uafhængige. Purdues to tjenester nåede over 1000 brugere på 10+ [[open-source|open source]]-modeller for cirka \$100,000 i hardware, før bemanding. Den svarer en regulator uden at spørge en leverandør om lov.

Den sidste form er AI inde i værktøjer, du allerede kører: en Moodle-spørgsmålstype, en diskussionsplatforms AI-partner, et værktøj til essayfeedback. Lav indsats og ændring kursus for kursus, med lidt læring i centrum.

## Problemerne, der ikke forsvinder

[[privacy|Databeskyttelse]] kommer først. Det afgørende er, hvilken registrering der nu findes, som ikke gjorde før, hvor den ligger, og hvem der kan hente den. Et værktøj, der modtager en klasseliste, har skabt en institutionel registrering, uanset hvad kontrakten siger.

Identitet og adgang kommer derefter. Alt, der bruges i stor skala, kræver SSO, rollebaseret adgang og offboarding, og et værktøj, der ikke kan nedlægge en fratrædende medarbejders konto, efterlader en fast konto med dine data i.

Omkostninger afhænger af, hvordan prisen tælles. Pris pr. plads belønner antal hoveder, og forbrugsbaseret pris belønner brug. Fordi en lille andel af brugerne normalt genererer det meste af tokens, ser pris pr. plads billig ud, indtil de tunge brugere går andre steder hen.

Måling er normalt den manglende brik. EDUCAUSE fandt, at 92 % har en arbejdsrelateret AI-strategi, og 13 % måler afkastet af investeringen. Hvis du ikke kan sige, hvad værktøjet erstattede, kan du ikke forsvare fornyelsen.

[[equity-in-ai-education|Ligeværdighed]] og tilgængelighed hører til i indkøbet snarere end i en senere rettelse. Et værktøj, der kræver en hurtig forbindelse, et betalt niveau eller flydende engelsk, fordeler sin gevinst ulige.

[[academic-integrity|Akademisk integritet]] ændrer, hvad bedømmelsen måler. Når et værktøj kan løse opgaven, er det opgaven, der skal revideres.

Bemanding og afhængighed af leverandøren betyder lige så meget som prisen. Hver form ovenfor undtagen den gratis kræver en ejer, og den sædvanlige fejl er at købe den fjerde eller femte form og bemande den med den, der allerede var travl. Spørg, hvad der sker ved fornyelse, ved en prisændring og ved en modeludfasning; gateway-formerne findes, så svaret er en routingændring i stedet for en migrering.

## Hvordan et godt første år ser ud

Vælg to eller tre mål, før noget lanceres: hvem brugte det, til hvad, hvad kostede det pr. aktiv bruger, og hvad ændrede sig i arbejdet. En pilot, der ikke kan producere de tal, er en demo med et budget.

Kontroller randbetingelserne på samme tid. Hvis værktøjet rørte ved studerendes registreringer, passede dataflowet så med det, du fortalte databeskyttelseskontoret? Hvis brugen forblev umålt, var det så, fordi værktøjet ikke kunne rapportere, eller fordi ingen spurgte?

Hold den godkendte vej kort. EDUCAUSE-tallene tyder på, at folk omgår styringen, fordi den godkendte rute tager længere tid end opgaven. En gateway med et modelkort og adgang samme dag er et styringsinstrument lige så meget som en it-bekvemmelighed.

## Almindelige fejl

At købe en platform, før problemet er navngivet, giver brugsstatistik og lidt andet. At behandle gratis som en strategi virker til en pilot og svigter som infrastruktur. En lokal model ændrer, hvem der kan indkaldes til retten; den afgør ikke, om prompts opbevares. At måle tilfredshed i stedet for effekt gør »lærerne kunne lide det« til et fund, det ikke er. Og en politik, der offentliggøres uden en brugbar vej, beskriver præferencer snarere end regler.
