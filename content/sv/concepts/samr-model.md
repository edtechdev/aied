---
title: "SAMR-modellen"
created: "2026-09-10T09:50:00-04:00"
type: concept
foundations: [educational-development, learning-design, teacher-ai-competency]
technology: [ai-technologies, technology-acceptance-model]
page_kind: [framework]
audience: [instructors, curriculum designers, researchers]
level: [k 12, higher ed]
confidence: high
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/samr-model"
source_updated: "2026-11-02T09:55:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
pedagogy: [tpack]
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

> **SAMR-modellen** — ett ramverk för teknikintegration utvecklat av Ruben Puentedura som klassificerar i vilken utsträckning en teknik transformerar lärandet, längs fyra nivåer: **Substitution, Augmentation, Modifikation och Omdefiniering**. De två lägre nivåerna (Substitution, Augmentation) *förstärker* en befintlig uppgift — tekniken gör det som gjordes före, men bättre eller bekvämare; de två övre (Modifikation, Omdefiniering) *transformerar* den — uppgiften själv förändras till något som inte tidigare var möjligt. Inom [[ai-education|AI i utbildningen]] är SAMR den gängse linsen för att fråga om [[generative-ai|generativ AI]] används för att gradvis förbättra befintlig praktik eller för att omkonceptualisera lärandet, och modellen står vid sidan av [[tpack|TPACK]] som ett sätt att beskriva hur lärare integrerar teknik snarare än varför de accepterar den.

## Frågor att fundera över

- När AI förs in i en kurs, är det en substitution (en [[conversational-ai|chattbot]] ersätter en sökruta) eller en omdefiniering (en uppgift blir möjlig som inte var det tidigare)? Vad avgör vilken nivå som är lämplig — och är transformation alltid målet?
- SAMR och [[technology-acceptance-model|modeller för teknikadoption]] svarar på olika frågor: adoptionsteori frågar *varför* en lärare eller institution accepterar ett verktyg; SAMR frågar *hur djupt* verktyget förändrar lärandet. Vilken fråga besvarar egentligen en given studie av AI-integration?
- En [[meta-analysis-systematic-review|systematisk genomgång]] av AI-integration i [[higher-ed|högre utbildning]] fann att de flesta användningar låg på substitutions- eller augmentationsnivå, och att bara en studie närmade sig omdefiniering. Om det är typiskt, vad säger det om gapet mellan AI:s potential och dess klassrumsverklighet?
- SAMR åberopas ofta i [[teacher-education|lärarutbildning]] och [[educational-development|fortbildning]] för att hjälpa pedagoger planera teknikbruk. Förändrar klassificeringen av en lektions SAMR-nivå vad en lärare faktiskt gör, eller är den främst en beskrivande etikett?
- Kritiker hävdar att SAMR, liksom [[tpack|TPACK]], vilar på en humanistisk ontologi som betraktar kognitionen som oförändrad av teknik, och att modellen inte säger något om makt, dataägande eller rättvisa. Räcker en lins för integrationsnivå, eller kräver integration i AI-eran en mer kritisk ram?

## Introduktion

SAMR beskriver djupet i den teknologiska transformationen av lärandeuppgifter. Dess fyra nivåer bildar en stigande skala från förstärkning till transformation: **Substitution** (verktyget ersätter ett annat utan funktionell förändring — en chattbot i stället för en sökmotor), **Augmentation** (verktyget ersätter och förbättrar — stavningskontrollen i en ordbehandlare jämfört med en skrivmaskin), **Modifikation** (uppgiften designas om i betydande grad — elever samarbetar i realtid kring ett delat AI-genererat utkast) och **Omdefiniering** (nya uppgifter som tidigare var otänkbara blir möjliga — elever samskapar med en generativ modell på sätt som saknar icke-AI-analog). Modellen används brett i [[ai-technologies|utbildningsteknologisk]] [[research-methods-aied|forskning]] och i [[educational-development|fortbildning av lärare]] som ett vokabulär för att planera och utvärdera teknikintegration, och den är en standardföljeslagare till [[tpack|TPACK]] och till ramverk för [[technology-acceptance-model|teknikadoption]] — även om den besvarar en annan fråga än båda.

## Vad de fyra nivåerna innebär

- **Förstärkning (nedre halvan):** Substitution och Augmentation förbättrar en befintlig uppgift utan att förändra dess natur. Det mesta av rutinmässig AI-användning — [[automated-question-generation|frågegenerering]], snabb textgenerering, sammanfattning — ligger här: det går snabbare och är bekvämare men förändrar inte vad eleven ombeds göra.
- **Transformation (övre halvan):** Modifikation och Omdefiniering förändrar uppgiften själv. [[vibe-coding|Vibe coding]], samkonstruktion med en modell i realtid och adaptiv interaktiv dialog är uppgifter som inte var möjliga före generativ AI, och de representerar skalans transformativa ände.

SAMR kombineras ofta med [[icap-framework|ICAP-ramverket]] eftersom de två överensstämmer: de fyra scenarierna från matlagning till lärande i [[thermomix-genai-education-analogy-2026|Rummel, Nachtigall och Panadero (2026)]] mappar ICAP:s [[student-engagement|engagemangsmodi]] mot SAMR-nivåer — ICAP *Passive* mot SAMR *Substitution*, *Active* mot *Augmentation*, *Constructive* mot *Modifikation* och *Interactive* mot *Omdefiniering* — och illustrerar en progression från passiv delegering till interaktiv samkonstruktion.

## Evidens från kunskapsbasen

- **AI-integration i högre utbildning är till stor del inkrementell, inte transformativ.** [[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh m.fl. (2026)]] graderade AI-integration med SAMR-modellen i en PRISMA-systematisk genomgång av 22 interventionsstudier som sållats fram ur 959 poster, och fann att de flesta studier klustrade på **substitutions- eller augmentationsnivå**, med färre på modifikation och bara en som närmade sig omdefiniering. AI infördes vanligen för att förbättra befintlig praktik — dominerat av [[automated-assessment|bedömningsautomatisering]] och [[personalized-learning|stöd för personligt anpassat lärande]] — snarare än för att omkonceptualisera kursplaner eller [[learning-gains|läranderesultat]].
- **SAMR är en vanlig analytisk lins för GenAI-driven [[curriculum-design|kursplaneförändring]].** [[rewriting-curriculum-genai-pedagogy-2026|Sabani m.fl. (2026)]] mappar fem kursplaneförskjutningar (statisk till dynamisk, förmedling till förmåga, lokal till [[governance|institutionell]]) mot etablerade linser, däribland SAMR och konstruktiv länkning, och använder modellen för att klargöra de [[pedagogy|pedagogiska]] mekanismer genom vilka GenAI omformar kursplanen.
- **SAMR och TPACK förankrar standarder för lärares teknikintegration.** [[crompton-faculty-technology-integration-standards-2026|Crompton m.fl. (2026)]] placerar sina sex fakultetsstandarder för teknik mot befintliga ramverk — [[tpack]], RAT, SAMR, SETI — och standarder (ISTE, UNESCO, DigCompEdu), varav de flesta riktar sig till [[k-12]]-pedagoger eller bara den [[teacher-role|undervisande]] delen av fakultetsrollen, vilket lämnar ett gap i fakultetsutvecklingen inom högre utbildning.
- **SAMR är ett mål för den posthumanistiska kritiken.** [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]] kritiserar TPACK, SAMR och modeller för [[ai-literacy|AI-kompetens]] för att dela en humanistisk ontologi som förutsätter en avgränsad elev vars kognition i grunden är oförändrad av teknologisk mediering, och hävdar att dessa instrumentalistiska ramverk inte kan hantera AI:s konstitutiva roll för kognitionen.
- **Ett ramverk för integration, inte för makt.** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]] utvärderar SAMR vid sidan av TPACK och andra integrationsramverk och finner att inget av dem behandlar rättvis makt, dataägande eller ansvarsutkrävande, vilket motiverar ett alternativt ekologiskt ramverk för sam-agens.
- **Även elevers användning kan mappas mot SAMR, och feedback spänner över alla nivåer.** Kodning av GenAI-deklarationerna från 31–36 elever i en [[physics-education|fysik]]kurs placerade lärande på substitutions–augmentationsnivå, formatering på substitution och uppgiftsutförande på modifikation–omdefiniering, medan feedback — kontroll, klargörande, verifiering — förekom på alla fyra nivåer ([[genai-use-changing-institutional-policy-physics-2026|Quince och Faulconer (2026)]]).
- **Djup och inkludering är separata axlar.** [[jita-ai-mathematics-classrooms-inclusion-2026|Jita, Jita och Omoniyi (2026)]] parar SAMR med [[universal-design-for-learning|UDL]] över 38 källor och hävdar att uppgifter på omdefinieringsnivå fortfarande kan utesluta elever vars språk, enhet eller uppkoppling inte passar designen.

## SAMR, TPACK och teknikadoption: hur de skiljer sig

Tre ramverk blandas ofta samman men besvarar olika frågor:

- **[[technology-acceptance-model|Modeller för teknikadoption]]** (TAM, UTAUT) förklarar *varför* en individ eller institution accepterar och fortsätter använda en teknik — upplevd användbarhet, användarvänlighet och social påverkan.
- **[[tpack|TPACK]]** beskriver den *kunskap* en lärare behöver för att integrera teknik effektivt — samspelet mellan teknologisk, pedagogisk och innehållslig kunskap, i AI-eran utvidgad till AI-TPACK/GenAI-TPACK.
- **SAMR** klassificerar *hur djupt* en teknik transformerar en lärandeuppgift, från förstärkning till omdefiniering.

SAMR förstås bäst som en lins för integrationsdjup som används i planering och utvärdering, som komplement till adoptionsteori (som förklarar upptag) och TPACK (som förklarar lärarkapacitet). I AI-eran används den mest produktivt för att fråga om generativ AI tillämpas för att förstärka befintliga uppgifter eller för att möjliggöra genuint nya — en åtskillnad som går genom hela kunskapsbasens forskning om bedömning och kursplaner.

## Implikationer för praktiken

- **Använd SAMR för att ställa djupfrågan, inte för att föreskriva transformation.** Förstärkning är inte i sig underlägsen; många rutinmässiga AI-användningar är legitima substitutioner. Modellen är diagnostisk och klargör vad en given användning faktiskt förändrar.
- **Para ihop den med ICAP.** SAMR beskriver vad *uppgiften* blir; ICAP beskriver hur eleven *engagerar sig*. Tillsammans skiljer de ytlig substitution från djup interaktiv samkonstruktion.
- **Komplettera med linser för adoption och rättvisa.** SAMR säger inget om varför ett verktyg införs eller vem som gynnas. Para ihop den med [[technology-acceptance-model|adoptionsmodeller]] och [[equity-in-ai-education|rättvise]]analys för att undvika att en etikett för djup ersätter en [[critical-thinking|kritisk utvärdering]].
- **Behandla evidens om inkrementell integration som ett fynd, inte ett misslyckande.** Om det mesta av AI-integrationen klustrar på substitution/augmentation är designuppgiften inte att tvinga fram omdefiniering utan att inse att transformativ användning kräver andra uppgiftsdesigner, inte bara bättre verktyg.

## Vanliga missuppfattningar

**"Högre upp på SAMR är bättre undervisning."** SAMR är en lins för att fråga om AI *omkonceptualiserar* lärandet eller *förbättrar* befintlig praktik; det är ingen kvalitetsrangordning, och omdefiniering är inte rätt svar på varje uppgift. En substitution som tar bort ett improduktivt steg är en framgång bedömd efter lärande, inte efter vilken nivå den ligger på.

**"AI-adoptionen rör sig uppåt i stegen."** Fördelningen är koncentrerad till botten. En systematisk genomgång av AI-integration i [[higher-ed|högre utbildning]] fann att **de flesta användningar låg på substitution eller augmentation, och bara en studie närmade sig omdefiniering**. SAMR:s praktiska användning i denna litteratur är därför till stor del diagnostisk — den namnger var fältet faktiskt befinner sig.

**"SAMR och TPACK är konkurrerande ramverk."** De beskriver olika saker: SAMR beskriver *graden av transformation* i en uppgift, medan [[tpack|TPACK]] beskriver den *kunskap* en lärare behöver för att integrera teknik väl. En lärare kan vara mycket TPACK-kompetent och ändå arbeta på substitutionsnivå, vilket är varför de två används tillsammans i stället för att väljas emellan.

**"Ett verktyg som är transformativt på en nivå är transformativt på alla nivåer."** Samma generativa verktyg kan stödja en substitution i en kurs och en omdefiniering i en annan, eftersom nivån är en egenskap hos uppgiftsdesignen snarare än hos tekniken. Att tillskriva nivån till verktyget leder till adoptionsbeslut i stället för designbeslut.

## Anslutna begrepp

- [[ai-education]] — AI i utbildningen (paraply)
- [[tpack]] — Teknologisk pedagogisk innehållskunskap
- [[technology-acceptance-model]] — Modeller för teknikadoption
- [[icap-framework]] — ICAP-ramverket för kognitivt engagemang
- [[ai-technologies]] — AI-tekniker och -metoder
- [[teacher-ai-competency]] — Lärarnas AI-kompetens
- [[educational-development]] — Utveckling av undervisningen
- [[learning-design]] — Lärandedesign
- [[k-12]] — K-12-utbildning
- [[higher-ed]] — Högre utbildning
- [[generative-ai]] — Generativ AI

## Anslutna artiklar

- [[alsheikh-mapping-ai-integration-higher-education-2026]] — AI-integration i högre utbildning graderad med SAMR: mestadels substitution/augmentation
- [[thermomix-genai-education-analogy-2026]] — ICAP och SAMR som mappar de fyra scenarierna från matlagning till lärande
- [[rewriting-curriculum-genai-pedagogy-2026]] — SAMR bland linserna för GenAI-driven kursplaneförändring
- [[crompton-faculty-technology-integration-standards-2026]] — SAMR bland de ramverk som informerar fakultetens teknikstandarder
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — Den posthumanistiska kritiken av SAMR:s humanistiska ontologi
- [[reclaiming-epistemic-agency-co-agency-2026]] — SAMR:s tystnad om makt, dataägande och ansvarsutkrävande
- [[genai-use-changing-institutional-policy-physics-2026]] — Elevers GenAI-användning under förändrad institutionell policy: användningsfunktioner mappade mot SAMR-nivåer (Quince & Faulconer 2026)
- [[jita-ai-mathematics-classrooms-inclusion-2026]] — AI i matematikklassrum: en synergistisk strategi för mångfald och inkludering
