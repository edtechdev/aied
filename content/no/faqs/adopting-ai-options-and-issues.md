---
title: "Hvilke alternativer og spørsmål bør man vurdere når man tar i bruk AI-verktøy?"
created: "2026-11-12T11:24:00-05:00"
updated: "2026-11-14T04:15:00-05:00"
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
source_updated: "2026-11-14T04:15:00-05:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

En instituttleder har tre tilbud på en plattform for [[intelligent-tutoring|AI-veiledning]] og frist på fredag. En [[teacher-role|lærer]] vil bruke et gratisverktøy som halve staben allerede bruker. En IT-sjef blir spurt om institusjonen bør kjøre sin egen modell, og kan ikke si hva det ville koste.

Det er det samme spørsmålet på tre nivåer. Alternativene er færre enn en leverandørliste antyder, og problemene varer lenger enn noe produkt.

Valget bør passe til beslutningen foran deg. En enkeltperson bestemmer hva som skal legges inn i et verktøy. En institusjon bestemmer hvem som får bruke hvilken modell, på hvilke data, til hvilken kostnad, og hvem som svarer når noe går galt. De fleste dårlige beslutninger om innføring kommer av å svare på det institusjonelle spørsmålet med et individuelt verktøy.

## Kortversjonen

Fem regler dekker det meste.

1. Fastsett datagrensen først, for alt annet kan reforhandles og det kan ikke.
2. Velg den minste formen som passer: gratis eller utkontrakterte verktøy for en pilot, en plattform du drifter selv når du trenger datakontroll uten GPU-er, en gateway når du trenger kvoter og ruting, og egen inferens bare når de tre andre svikter.
3. Sammenlign pris per plass og forbruksbasert pris mot dine egne tall, siden mesteparten av bruken vanligvis kommer fra noen få tunge brukere.
4. Gjør den godkjente veien raskere enn den ikke-godkjente, siden EDUCAUSE fant at 94 % av ansatte og undervisere bruker AI til arbeid, 54 % kjenner policyen og 56 % bruker verktøy institusjonen ikke tilbyr.
5. Bestem deretter på forhånd hvilke bevis som ville få deg til å stoppe, for innføring uten en utgangstest blir permanent som standard.

## På individnivå

En underviser eller student tar en databeslutning før en undervisningsbeslutning. Studentnavn, IEP-detaljer, disiplinære notater og upublisert forskning skaper ansvaret, så sladd først og sjekk om verktøyet fortsatt gjør jobben. Les deretter vilkårene: lagring, trening på dine inndata og underleverandører står vanligvis i et dokument ingen åpner, og hvis svaret ikke kan finnes på fem minutter, må det regnes som ukjent.

Vit hva verktøyet er godt til. Generert tekst er sterkest på å skrive utkast, omstrukturere og oppsummere, og svakest på aritmetikk, kildehenvisninger og alt som krever oppdaterte fakta. Vit også hva det koster deg. Et gratissnivå er gratis fordi bruken er produktet eller fordi nivået vil endre seg, og begge deler er grunn til å ha en utgang i tankene.

To spørsmål gjenstår. Hvem andre blir berørt, siden et verktøy som omformer et emne er en beslutning for studentene på det. Og om det er tillatt: les policyen én gang hvis det finnes en, og hvis det ikke gjør det, tyder evidensen rundt [[shadow-ai]] på at du allerede lager policy som standard.

Den grove tommelfingerregelen: bruk det godkjente verktøyet når det er innen rekkevidde, og når det ikke er det, skriv ned hva du gjorde og hvorfor. Den registreringen er det som beskytter deg hvis vurderingen blir stilt spørsmål ved senere.

## På institusjonsnivå

En institusjon kjøper en tjeneste, en dataflyt, en støtteforpliktelse og en politisk forpliktelse i ett kjøp. Seks former utgjør den egentlige menyen, og de fleste institusjoner befinner seg i to eller tre av dem uten å vite det.

Den enkleste starten er et gratis utkontraktert verktøy. AI Tutor Pro fra Contact North krever ingen konto, og Playlab lar undervisere bygge apper forankret i sin egen [[curriculum-design|læreplan]] mens leverandøren drifter modellene. Begge er greie til en pilot og dårlige som varig løsning: ingen revisjonsspor, ingen kvotekontroll og vilkår som kan endres.

Å kjøpe plasser hos en kommersiell tenant, enten [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot eller Google Gemini for Education, gir rask anskaffelse, SSO og en administrasjonskonsoll, og overlater modellvalg og lagring til leverandøren.

En plattform du drifter selv holder dataene nærmere. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) distribueres til din egen AWS-konto, og Vanderbilts pilot rapporterte omtrent \$3 per bruker per måned ved 1 300 brukere, hvorav halvparten under \$1 i tokens. Det kjøper datakontroll uten GPU-er.

En gateway over blandede leverandører setter én inngang foran flere. Den bærer kvoter, SSO, logging og regional ruting; Fontys kjørte en for 300 brukere under et månedstak på \$500 som aldri ble brutt, og [MindRouter](/aied/resources/mindrouter/) legger til rollevektet planlegging og energimåling.

Egen inferens er den dyreste formen og den mest uavhengige. Purdues to tjenester nådde over 1000 brukere på 10+ [[open-source]]-modeller for rundt \$100 000 i maskinvare, før bemanning. Det svarer en tilsynsmyndighet uten å spørre en leverandør om lov.

Den siste formen er AI inne i verktøy du allerede kjører: en Moodle-spørsmålstype, en diskusjonsplattforms AI-partner, et verktøy for essaytilbakemelding. Lav innsats og endring emne for emne, med lite læring i sentrum.

## Problemene som ikke forsvinner

[[privacy|Databeskyttelse]] kommer først. Det som betyr noe, er hvilken post som nå finnes og ikke fantes før, hvor den ligger og hvem som kan hente den. Et verktøy som mottar en klasseliste har skapt en institusjonell post uansett hva avtalen sier.

Identitet og tilgang kommer neste. Alt som brukes i skala trenger SSO, rollebasert tilgang og avslutning, og et verktøy som ikke kan avvikle en ansatt som slutter, etterlater en stående konto med dataene dine i.

Kostnader avhenger av hvordan prisen telles. Pris per plass belønner antall personer og forbruksbasert pris belønner bruk. Fordi en liten andel av brukerne vanligvis genererer mesteparten av tokens, ser pris per plass billig ut til de tunge brukerne går et annet sted.

Måling er vanligvis den manglende brikken. EDUCAUSE fant at 92 % hadde en arbeidsrelatert AI-strategi og 13 % målte avkastning på investeringen. Hvis du ikke kan si hva verktøyet erstattet, kan du ikke forsvare fornyelsen.

[[equity-in-ai-education|Rettsferdighet]] og tilgjengelighet hører hjemme i anskaffelsen snarere enn i en senere utbedring. Et verktøy som krever rask tilkobling, et betalt nivå eller engelsk flyt, sprer nytten ujevnt.

[[academic-integrity|Akademisk integritet]] endrer hva vurderingen måler. Når et verktøy kan fullføre oppgaven, er det oppgaven som må revideres.

Bemanning og leverandøravhengighet betyr like mye som prisen. Hver form ovenfor unntatt den gratis trenger en eier, og den vanlige feilen er å kjøpe den fjerde eller femte formen og bemanne den med den som allerede var opptatt. Spør hva som skjer ved fornyelse, ved en prisendring og ved en modellutfasing; gateway-formene finnes for at svaret skal være en ruteendring i stedet for en migrering.

## Hvordan et godt førsteår ser ut

Velg to eller tre mål før noe lanseres: hvem som brukte det, til hva, hva det kostet per aktive bruker, og hva som endret seg i arbeidet. En pilot som ikke kan produsere de tallene, er en demo med budsjett.

Sjekk randbetingelsene samtidig. Hvis verktøyet berørte studentregistre, samsvarte dataflyten med det du fortalte personvernkontoret? Hvis bruken ikke ble målt, var det fordi verktøyet ikke kunne rapportere eller fordi ingen spurte?

Hold den godkjente veien kort. EDUCAUSE-tallene tyder på at folk går utenom styringen fordi den godkjente veien tar lenger tid enn oppgaven. En gateway med et modellkort og samme-dags tilgang er et styringsinstrument like mye som en IT-bekvemmelighet.

## Vanlige feil

Å kjøpe en plattform før problemet er navngitt gir bruksstatistikk og lite annet. Å behandle gratis som en strategi fungerer for en pilot og svikter som infrastruktur. En lokal modell endrer hvem som kan bli gjenstand for en rettslig kjennelse; den avgjør ikke om prompts lagres. Å måle tilfredshet i stedet for effekt gjør «lærerne likte det» til et funn det ikke er. Og en policy som publiseres uten en fungerende vei, beskriver preferanser snarere enn regler.
