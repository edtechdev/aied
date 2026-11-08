---
title: "Teorier och ramverk"
created: "2026-09-19T05:40:00-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/theories-and-frameworks"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

> **Teorier och ramverk** — kunskapsbasens faktiska arbetsinventarium av förklarande och organiserande strukturer. Teorier förklarar varför lärande sker ([[learning-theories]], [[self-determination-theory]], [[sociocultural-learning]], [[activity-theory-aied|aktivititetsteori]]); ramverk organiserar design-, undervisnings- och adoptionsbeslut ([[tpack]], [[samr-model|SAMR]], [[technology-acceptance-model|modeller för teknikadoption]], [[icap-framework|ICAP]], [[universal-design-for-learning|universell design för lärande]]); modeller gör lärandepåståenden prövbara och beräkningsbara ([[item-response-theory|item response-teori]], [[assessment-validity]], [[knowledge-tracing]]). Använd den här sidan för att hitta den lins en studie vilar på, eller för att välja en för ditt eget arbete.

## Frågor att fundera över

- En teori förutsäger vad som händer när något förändras; ett ramverk säger vad du ska rikta uppmärksamheten mot. När en studie rapporterar en vinst under ett ramverks fana men inte gör någon förutsägelse som kunde ha motbevisats, vad har då egentligen lärts?
- [[tpack|TPACK]], [[samr-model|SAMR]], [[universal-design-for-learning|UDL]], [[technology-acceptance-model|adoptionsmodellerna]] och [[icap-framework|ICAP]] är alla äldre än [[llm|stora språkmodeller]]. Vilka delar av dem håller fortfarande när verktyget kan skriva, förklara och anpassa sig själv, och hur skulle du avgöra det?
- Flera av teorierna nedan myntades för AI under de senaste åren. Vad skulle krävas för att en av dem skulle vara fel, och har någon försökt visa det?
- Adoption rapporteras ofta som rörelse genom stadier. Om en kollega berättar att hens kurs i år rörde sig "från substitution till omdefiniering", vilket oberoende bevis skulle du begära innan du tror på det?
- Mycket av detta fält tillämpar lånad teori snarare än att pröva den. Välj ett fynd du förlitar dig på: skulle det kunna omramas som ett test av [[self-determination-theory|en teori]], och vilken mätning skulle det kräva?

## Introduktion

Varje AI-handledare, återkopplingssystem och instrumentpanel bär på antaganden om hur människor lär sig, oavsett om designarna uttalar dem. Den här sidan samlar de teorier, ramverk och modeller som antagandena kommer från, ordnade löst efter hur mycket av den aktuella forskningslitteraturen som lutar sig mot dem, och säger kort vad var och en är bra för. Skillnaderna mellan de tre etiketterna är verkliga men små, och de sammanfattas mot slutet i stället för att behandlas som ämnet. Det som spelar roll i praktiken är vilken lins ett påstående vilar på, och om den linsen kan bära påståendet.

## Inlärningsteorier som litteraturen tillämpar

De förklarar mekanismer: de namnger de delar som gör arbetet och förutsäger vad som följer när delarna förändras. I AI-litteraturen är de mestadels lånade från psykologin och [[learning-sciences|lärandevetenskaperna]], och används som tolkningsramar kring ett nytt verktyg.

- **[[learning-theories|Inlärningsteorier (paraply)]]** — familjen som helhet, inklusive de klassiska polerna [[behaviorism]] och [[constructivist|konstruktivism]] och gapet "konstruktivism till namnet, behaviorism i praktiken" som återkommer i AI-implementationer. Konnektivism och kognitiv belastningsteori behandlas också här.
- **[[constructivist|Konstruktivism]]** — lärande som aktiv kunskapskonstruktion. Den underbygger [[project-based-learning|projektbaserat]] arbete, dialogbaserad [[intelligent-tutoring|AI-handledning]] och kritiken att drill-och-feedback-system bryter mot sin egen uttalade pedagogik.
- **[[sociocultural-learning|Sociokulturell teori]]** — lärande som medierat av verktyg och social interaktion, vilket är varför AI teoretiseras som en medierande artefakt snarare än ett blott hjälpmedel.
- **[[activity-theory-aied|Aktivititetsteori]]** — tar hela aktivitetssystemet, inklusive motsägelserna, som analysenhet. Vanlig i lärarriktade AI-studier, där det intressanta fyndet oftast är spänningen mellan verktyg, regler och gemenskap.
- **[[situated-learning|Situerat lärande]]** och **[[embodied-learning|Förkroppsligat lärande]]** — lärande som bundet till kontext och kropp, motvikten mot att behandla AI som ett rent språkligt medium.
- **[[distributed-cognition|Distribuerad kognition]]** — tänkande utspritt över människor och artefakter, vilket ramar in AI-assistans som en omfördelning av kognitivt arbete snarare än en ersättning för det.
- **[[community-of-inquiry|Community of inquiry]]** — de sociala, kognitiva och undervisande närvaron som får en onlineupplevelse att fungera; en teori om upplevelsen och en designram på samma gång.
- **[[self-determination-theory|Självbestämmandeteorin]]** — autonomi, kompetens och samhörighet som motivationella förutsättningar. Ofta den förklaring som erbjuds när AI-användning höjer engagemanget utan att höja lärandet.
- **[[cognitive-psychology|Kognitivism]]** — informationsbearbetning, arbetsminne och divergensen mellan känslan av att lära sig och det faktiska lärandet.
- **Social perceptionsteori (värme och kompetens)** — importerad från social kognition och servicerobotforskning, ramar in hur användare bedömer en [[agentic-ai|AI-agents]] trovärdighet: upplevd kompetens förutsade ChatGPT:s feedbacktrovärdighet direkt medan värme verkade bara genom människolik empati (SEM, 230 studenter; [[chatgpt-feedback-credibility-perceived-learning|Pérez-López m.fl. (2026)]]).
- **En fjärde affordanskategori föreslogs, men prövades inte.** När granskarna kodade 24 studier mot ett tredelat affordansschema fann de att engagemang, säkerhet och självförmåga inte passade in i de teknologiska, [[pedagogy|pedagogiska]] eller sociala kategorierna, och föreslog emotionella affordanser grundade i Banduras reciproka determinism ([[genai-chatbots-language-learning-affordances-review-2026|Lopez & Arabadzhy (2026)]]).

## Modeller över eleven och lärandeprocessen

- **[[self-regulated-learning|Självreglerat lärande]]** — planering, övervakning och utvärdering av sitt eget lärande. Arbetshästen för att fråga om AI-stöd når de faser som spelar roll eller bara utförandet.
- **[[metacognition|Metakognition]]** — att tänka på sitt eget tänkande, och det begrepp som oftast namnges när AI anklagas för att tänka åt eleverna.
- **[[motivation|Motivation]]** — varför elever engagerar sig, och begreppet som skiljer engagemang från lärande i AI-studier.
- **[[self-efficacy|Självförmåga]]** — tilltro till sin egen förmåga, skild från kompetens, och en vanlig medierare mellan AI-användning och utfall.
- **[[agency|Agens]]** — vem som styr arbetet: begreppet bakom fältets spänning mellan kontroll och autonomi, och bakom den delegerade agens-mekanismen i den nyaste teorin.
- **[[desirable-difficulties|Önskvärda svårigheter]]**, **[[retrieval-spacing-interleaving|återhämtning, spridning och interfoliering]]** och **[[refutation-text|refutationstext]]** — fynd som gör friktion pedagogiskt värdefull, tillämpade på beslut om hur mycket en AI bör göra.
- **[[transfer-of-learning|Överföring av lärande]]** — om förmågan består när stödet dras tillbaka, vilket nyare teori behandlar som kriteriet som skiljer lärande från assistans snarare än som ett utfall bland flera.

## Ramverk för undervisning, integration och adoption

- **[[tpack|TPACK]]** — lärarkunskapen som blandar teknik, pedagogik och ämne; standardramverket för lärarriktade AI-studier.
- **[[technology-acceptance-model|Adoptionsmodeller]]** — intention som funktion av upplevd användbarhet och användarvänlighet. Använda så brett att fältets tilltro till intention snarare än beteende är en stående kritik.
- **[[icap-framework|ICAP]]** — rangordnar engagemang som passivt, aktivt, konstruktivt, interaktivt; användbart för att fråga vilket läge en [[student-ai-interaction|AI-interaktion]] faktiskt medger.
- **[[samr-model|SAMR]]** — från substitution till omdefiniering. Populärt som mognadsberättelse, svagt som mätinstrument.
- **[[universal-design-for-learning|Universell design för lärande]]**, **[[inclusive-learning|inkluderande lärande]]** och **[[accessibility|tillgänglighet]]** — designramar för vem som får del av undervisningen, och de som oftast åberopas i funktionshinder- och [[equity-in-ai-education|rättvise]]arbete.
- **[[learning-design|Lärandedesign]]**, **[[curriculum-design|Kursplanedesign]]** och **[[design-thinking|Designtänkande]]** — hur uppgifter, sekvenser och program struktureras innan något verktyg väljs.
- **[[change-management|Förändringsledning]]** — om ett system tas upp över huvud taget, vilket vanligen är en institutionell fråga snarare än en pedagogisk.

## Mätning och beräkningsmodeller

- **[[item-response-theory|Item response-teori]]** — skattning av item och förmåga, och modellen som gör ett tests siffror tolkningsbara.
- **[[educational-measurement|Utbildningsmätning]]** — instrumentlandskapet, inklusive de mått som byggts specifikt för [[ai-literacy|AI-kompetens]].
- **[[assessment-validity|Validitet]]** — om ett instrument mäter det begrepp det påstår, vilket avgör om ett rapporterat utfall stöder det teoretiska påstående som hänger på det.
- **[[self-report-measures|Självskattningsmått]]** — den dominerande och mest bräckliga evidenskällan i denna litteratur; flera av begreppen ovan är kända för att divergera kraftigt mellan självrapport och prestation.
- **[[knowledge-tracing|Knowledge tracing]]** och **[[student-modeling|Elevmodellering]]** — att skatta en elevs tillstånd över tid utifrån interaktionsdata.
- **[[cognitive-diagnosis|Kognitiv diagnostik]]** — att tillskriva prestation specifika färdighetskomponenter, modelleringsmotstycket till diagnostisk undervisning.
- **[[benchmark|Benchmarks]]**, **[[ai-ed-evaluation|utvärdering av AI i utbildningen]]** och **[[psychometrically-aware-ai|psykometrisk medvetenhet i AI-design]]** — hur system och insatser poängsätts, jämförs och granskas.
- **[[design-based-research|Designbaserad forskning]]** — metoden som genererar teori ur designade insatser i stället för att pröva den i förväg.

## Teorier skapade för AI-eran

Fyra förslag i kunskapsbasen bygger teori snarare än lånar den. De är artikelsidor snarare än begreppsmoder, eftersom var och en är ett enda argument:

- **[[generativism-learning-theory|Generativism]]** — en ny inlärningsteori som hävdar att de klassiska fyra uppvisar betydande begreppsliga begränsningar när [[generative-ai|generativ AI]] sprids.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Epistemisk sam-agens]]** — en modell för hur elever och AI-system gemensamt producerar kunskap och förståelse.
- **[[absent-cognitive-baseline-2026|Den frånvarande kognitiva baslinjen]]** — teoretiserar varför AI-infödda elever överskattar sitt eget lärande när AI blåser upp prestationen.
- **[[yan-agentivism-learning-theory-ai-2026|Agentivism]]** — en mellannivåteori som namnger fyra mekanismer (delegerad agens, epistemisk övervakning och verifiering, rekonstruktiv internalisering och överföring under reducerat stöd) och anger sex prövbara propositioner.

## Att skilja de tre etiketterna åt

Orden används löst i litteraturen, och skillnaden förtjänar en paragraf snarare än en hel sida:

- **En teori förklarar en mekanism** och förutsäger vad som händer när dess delar förändras. Den kan misslyckas, vilket är varför studier som prövar en teori kan rapportera effektstorlekar.
- **Ett ramverk organiserar eller föreskriver.** Det namnger de komponenter man ska uppmärksamma, vanligen utan att förutsäga storlekar, och det kan inte falsifieras.
- **En modell är en formell representation**, oftast av mätning eller av elevens tillstånd. Den kan anpassas, jämföras och visas vara fel på ett sätt som ett ramverk inte kan.
- **Etiketterna överlappar.** [[community-of-inquiry|Community of inquiry]] är en teori och en designram på samma gång; [[activity-theory-aied|aktivititetsteori]] är både förklarande och analytisk. Behandla etiketten som en ledtråd om vad en källa påstår, inte som en arkiveringskategori.

## Närliggande lager

Två närliggande sidor handlar medvetet om något annat. [[philosophy-of-ai-in-education|Filosofin om AI i utbildningen]] ställer normativa och begreppsliga frågor — vad utbildning är *till för*, om en maskin kan undervisa — och förutsäger inte effektstorlekar; en studie kan vara filosofiskt naiv och teoretiskt sund, eller tvärtom. [[theory-development-aied|Teoriutveckling]] är metaaktiviteten att bygga, låna och revidera teori, inklusive den stående kritiken att mycket av arbetet inom [[ai-education|AIED]] tillämpar befintlig teori snarare än prövar den. Den här sidan är inventariet; teoriutveckling handlar om att producera och revidera inventariet.

## Att välja en lins när frågan är praktisk

- **Lärare** som utgår från ett problem kan arbeta baklänges: om eleverna inte engagerar sig namnger [[icap-framework|ICAP]] och [[self-determination-theory|SDT]] olika orsaker och föreslår olika åtgärder; om frågan är om ett verktyg alls ska införas ställer [[technology-acceptance-model|adoptionsmodeller]] och [[samr-model|SAMR]] olika frågor om det.
- **Lärandedesigners** får mest ut av designramarna — [[universal-design-for-learning|UDL]], [[learning-design]] och [[scaffolding]] — parade med en teori som förutsäger vad som händer när struktureringen tas bort.
- **Forskare** bör ange vilken nod en studie påstår sig handla om och om designen faktiskt kan pröva den; mätmodellerna ([[item-response-theory|IRT]], [[assessment-validity]], [[self-report-measures]]) avgör om ett rapporterat utfall stöder det påståendet.
- **Administratörer** möter dessa ramverk som adoptions- och förändringsfrågor, där en stadiemodell ofta används som mognadsberättelse snarare än som instrument.

## Vad ramverk inte kan göra

Ramverk är inte evidens. De är vanligen lånade från kontexter före LLM och lokaliseras av den som tillämpar dem, de kan fungera som varumärkesbyggande, och stadiemodeller inbjuder till kryssruteadoption som rapporterar rörelse genom nivåer snarare än lärande. Påståenden som vilar på ett ramverk bör läsas vid sidan av [[limitations-in-aied-research|fältets genomgående begränsningar]], [[assessment-validity|validiteten]] hos det som mätte utfallet och de kända gränserna för [[self-report-measures|självrapport]].

Mekanism-till-teori-anpassning kan ändå vara avgörande: en tematisk syntes av 55 AI-stödda [[game-based-learning|spelbaserade lärande]]studier fann att effektiviteten avgjordes av om AI-mekanismen förverkligade den pedagogik den skulle tjäna, snarare än av algoritmisk sofistikering ([[ai-game-based-learning-systematic-review-2026|Kaşarcı och Yurt (2026)]]).

## Vanliga missuppfattningar

**"Att tillämpa en lånad teori på ett AI-verktyg är att använda teori."** Mycket av detta fält tillämpar lånad teori snarare än att pröva den, och skillnaden ligger i om ramverket gjorde en förutsägelse som kunde ha motbevisats. När en studie rapporterar en vinst under ett ramverks fana men inte förbinder sig till någon falsifierbar förutsägelse har inget lärts om ramverket — ett utfall som är förenligt med varje teori i katalogen är evidens för ingen av dem.

**"Ett ramverks värde är hur väl det beskriver ett system du redan har byggt."** Det är efterhandsetikettering. En taxonomi som rymmer vilken design som helst har ingen särskiljande kraft, vilket är varför beskrivande ramverk bör bedömas efter vad de utesluter. Utvärderingsfrågan är inte "passar mitt system in här?" utan "vilken sorts system skulle detta ramverk säga är fel?"

**"Inlärningsteorier, modeller över eleven och adoptionsramverk är utbytbara linser."** De besvarar olika frågor — hur lärande sker, vad elevens tillstånd är och varför en praktik sprids — och deras evidenstyper skiljer sig därefter. Att välja fel lager ger en studie som mäter rätt variabel mot fel förutsägelse, vilket läses som ett nollresultat när det är ett kategorifel.

**"Fler ramverk betyder ett mognare fält."** Ramverk myntade för AI-eran ackumuleras snabbare än de prövas, och ackumulering utan falsifiering är ett symptom snarare än framsteg. Mognad visar sig i att konkurrerande förutsägelser avgörs, inte i att vokabulären växer.

## Anslutna begrepp

- [[theory-development-aied]] — att bygga och revidera teori i fältet
- [[philosophy-of-ai-in-education]] — det normativa och begreppsliga lagret
- [[learning-theories]] — paraplyet för inlärningsteori
- [[learning-sciences]] — grannfältet som det mesta av teorin lånas från
- [[limitations-in-aied-research]] — vad evidensbasen kan och inte kan bära
- [[tpack]] — ramverk för lärarkunskap
- [[technology-acceptance-model]] — adoptionsramverk
- [[item-response-theory]] — en mätmodell
- [[universal-design-for-learning]] — ett designramverk
- [[research-methods-aied]] — hur teori blir prövad

## Anslutna artiklar

- [[genai-chatbots-language-learning-affordances-review-2026]] — Emotionella affordanser föreslagna som en fjärde kategori i en affordanstaxonomi
- [[ai-game-based-learning-systematic-review-2026]] — Mekanism-till-teori-anpassning, inte algoritmisk sofistikering, avgjorde effektiviteten i 55 AI-stödda studier av spelbaserat lärande

- [[rismanchian-ai-education-four-decades-aixed-2026]] — fyra decennier av AIED genom AI×Ed-ramverket
- [[educating-minds-generative-ai-2026]] — teoritung syntes av generativ AI och lärande
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — aktivitetsteori tillämpad på lärares fortbildning
- [[activity-theory-teachers-adoption-ai-sem-2026]] — aktivitetsteori och lärares adoption
- [[generativism-learning-theory]] — en inlärningsteori föreslagen för den generativa AI-eran
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — mot en teori om epistemisk sam-agens
- [[absent-cognitive-baseline-2026]] — teoretisering av ett strukturellt gap i AI-infödda elevers självbedömning
- [[yan-agentivism-learning-theory-ai-2026]] — en mellannivåinlärningsteori för människa-AI-interaktion
- [[ai-literacy-instrument-development-systematic-review-2026]] — instrumentutveckling kring ett ungt begrepp
- [[mishra-control-vs-agency-history-2025]] — fältets grundläggande spänning mellan kontroll och agens
