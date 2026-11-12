---
title: "Welke opties en aandachtspunten zijn er bij de invoering van AI-tools?"
created: "2026-11-12T19:15:00-05:00"
updated: "2026-11-12T19:15:00-05:00"
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
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Een vakgroepvoorzitter heeft drie offertes voor een [[intelligent-tutoring|AI-tutorplatform]] en een deadline op vrijdag. Een [[teacher-role|docent]] wil een gratis tool gebruiken die de helft van het team al gebruikt. Een chief information officer krijgt de vraag of de instelling een eigen model moet draaien en kan niet zeggen wat dat zou kosten.

Het is dezelfde vraag op drie hoogtes. De opties zijn beperkter dan een leverancierslijst suggereert, en de vraagstukken duren langer dan welk product ook.

De keuze moet passen bij de beslissing die voor je ligt. Een individu beslist wat er in een tool gaat. Een instelling beslist wie welk model mag gebruiken, op welke data, tegen welke kosten, en wie antwoordt als er iets misgaat. De meeste slechte invoeringsbeslissingen ontstaan doordat de institutionele vraag met een individuele tool wordt beantwoord.

## De korte versie

Vijf regels dekken het meeste. Leg eerst de datagrens vast, want al het andere is opnieuw te onderhandelen en dat niet. Kies de kleinste vorm die past: gratis of uitbestede tools voor een proef, een gehost platform wanneer je datacontrole nodig hebt zonder GPU's, een gateway wanneer je quota en routering nodig hebt, en eigen inferentie alleen wanneer de andere drie falen. Vergelijk prijzen per zitplaats en per verbruik met je eigen cijfers, want het gebruik komt meestal van een paar zware gebruikers. Maak het toegestane pad sneller dan het niet-goedgekeurde, want EDUCAUSE vond dat 94% van de medewerkers en docenten AI voor werk gebruikt, 54% de policy kent en 56% tools gebruikt die de instelling niet levert. Beslis dan vooraf welk bewijs je zou doen stoppen, want invoering zonder exittest wordt standaard permanent.

## Op individueel niveau

Een docent of student neemt eerst een databeslissing en dan een onderwijskundige. Namen van studenten, gegevens uit individuele onderwijsplannen, disciplinaire notities en ongepubliceerd onderzoek veroorzaken de aansprakelijkheid, dus redigeer eerst en kijk of de tool het werk nog doet. Lees dan de voorwaarden: bewaring, training op je invoer en subprocessors staan meestal in een document dat niemand opent, en als het antwoord niet binnen vijf minuten te vinden is, behandel het dan als onbekend.

Weet wat de tool goed doet. Gegenereerde tekst is het sterkst in opstellen, herstructureren en samenvatten, en het zwakst in rekenen, citaties en alles wat actuele feiten vereist. Weet ook wat het je kost. Een gratis laag is gratis omdat het gebruik het product is of omdat de laag zal veranderen, en beide zijn een reden om een uitweg in gedachten te houden.

Er blijven twee vragen. Wie worden er nog meer geraakt, want een tool die een cursus hervormt is een beslissing voor de studenten erin. En of het is toegestaan: lees de policy één keer als die er is, en als die er niet is, wijst het bewijs rond [[shadow-ai]] erop dat je al standaard beleid maakt.

De botte vuistregel: gebruik de toegestane tool als die binnen bereik is, en als dat niet zo is, schrijf op wat je hebt gedaan en waarom. Dat verslag is wat je beschermt als het oordeel later ter discussie komt.

## Op institutioneel niveau

Een instelling koopt in één aankoop een dienst, een datastroom, een ondersteuningsverplichting en een politieke toezegging. Zes vormen maken het echte menu uit, en de meeste instellingen zitten in twee of drie ervan zonder dat te weten.

De makkelijkste start is een gratis uitbestede tool. AI Tutor Pro van Contact North vereist geen account, en met Playlab bouwen docenten apps op hun eigen [[curriculum-design|curriculum]] terwijl de leverancier de modellen host. Beide zijn prima voor een proef en zwak als definitieve oplossing: geen audittrail, geen quotabeheersing en voorwaarden die kunnen veranderen.

Zitplaatsen kopen op een commerciële tenant, of dat nu [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot of Google Gemini for Education is, levert snelle inkoop, SSO en een beheerdersconsole, en laat modelkeuze en bewaring bij de leverancier.

Een platform dat je zelf host houdt de data dichterbij. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) draait in je eigen AWS-account, en de proef van Vanderbilt meldde ongeveer \$3 per gebruiker per maand bij 1.300 gebruikers, van wie de helft onder \$1 aan tokens bleef. Dat levert datacontrole zonder GPU's.

Een gateway over gemengde leveranciers zet één voordeur voor meerdere. Die draagt quota, SSO, logging en regionale routering; Fontys draaide er een voor 300 gebruikers onder een maandplafond van \$500 dat nooit werd overschreden, en [MindRouter](/aied/resources/mindrouter/) voegt rolgewogen planning en energiemeting toe.

Eigen inferentie is de duurste vorm en de meest onafhankelijke. De twee diensten van Purdue bereikten meer dan 1000 gebruikers op 10+ [[open-source]]-modellen voor ongeveer \$100.000 aan hardware, nog voor personeel. Het antwoordt een toezichthouder zonder een leverancier om toestemming te vragen.

De laatste vorm is AI binnen tools die je al draait: een Moodle-vraagtype, een AI-partner van een discussieplatform, een tool voor essayfeedback. Weinig inspanning en verandering per cursus, met weinig geleerd in het centrum.

## De vraagstukken die niet weggaan

[[privacy|Gegevensbescherming]] komt eerst. Wat telt is welk record nu bestaat dat er eerst niet was, waar het leeft en wie het kan opvragen. Een tool die een klasselijst ontvangt, heeft een institutioneel record gecreëerd, wat het contract ook zegt.

Identiteit en toegang komen daarna. Alles wat op schaal wordt gebruikt, heeft SSO, rolgebaseerde toegang en offboarding nodig, en een tool die een vertrekkende medewerker niet kan deprovisioneren, laat een slapend account met jouw data erin achter.

Kosten hangen af van hoe de prijs wordt geteld. Prijs per zitplaats beloont aantallen en prijs per verbruik beloont gebruik. Omdat een klein deel van de gebruikers meestal de meeste tokens genereert, lijkt per zitplaats goedkoop totdat de zware gebruikers elders heen gaan.

Meting is meestal het ontbrekende stuk. EDUCAUSE vond 92% met een werkgerelateerde AI-strategie en 13% die het rendement op investering meet. Als je niet kunt zeggen wat de tool heeft vervangen, kun je de verlenging niet verdedigen.

[[equity-in-ai-education|Gelijkheid]] en toegankelijkheid horen in de inkoop, niet in een latere reparatie. Een tool die een snelle verbinding, een betaalde laag of Engelse taalvaardigheid vereist, verdeelt de opbrengst ongelijk.

[[academic-integrity|Academische integriteit]] verandert wat toetsing meet. Als een tool de opdracht kan voltooien, is de opdracht wat herzien moet worden.

Personeel en leveranciersafhankelijkheid tellen even zwaar als de prijs. Elke vorm hierboven behalve de gratis variant heeft een eigenaar nodig, en de gebruikelijke fout is de vierde of vijfde vorm kopen en die bemannen met wie al druk was. Vraag wat er gebeurt bij verlenging, bij een prijswijziging en bij het uitfaseren van een model; de gatewayvormen bestaan zodat het antwoord een routeringswijziging is en geen migratie.

## Hoe een goed eerste jaar eruitziet

Kies twee of drie maten voordat er iets start: wie het gebruikte, waarvoor, wat het kostte per actieve gebruiker, en wat er in het werk veranderde. Een proef die die cijfers niet kan produceren, is een demo met een budget.

Controleer tegelijk de randvoorwaarden. Als de tool studentendossiers heeft aangeraakt, klopte de datastroom met wat je de privacyafdeling hebt verteld? Als het gebruik ongemeten bleef, kwam dat omdat de tool niet kon rapporteren of omdat niemand het vroeg?

Houd het toegestane pad kort. De cijfers van EDUCAUSE suggereren dat mensen governance omzeilen omdat de goedgekeurde route langer duurt dan de taak. Een gateway met een modelkaart en toegang op dezelfde dag is net zo goed een governance-instrument als een IT-gemak.

## Veelgemaakte fouten

Een platform kopen voordat je het probleem benoemt, levert gebruiksstatistieken op en weinig meer. Gratis als strategie behandelen werkt voor een proef en faalt als infrastructuur. Een lokaal model verandert wie gedagvaard kan worden; het beslist niet of prompts worden bewaard. Tevredenheid meten in plaats van effect maakt van 'docenten vonden het leuk' een bevinding die het niet is. En een gepubliceerd beleid zonder werkbaar pad beschrijft voorkeuren, geen regels.
