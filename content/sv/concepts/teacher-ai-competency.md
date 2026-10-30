---
title: Lärarnas AI-kompetens
created: "2026-10-27T17:23:18-04:00"
connected_faqs: [faculty-ai-competencies, addressing-common-misconceptions-ai-education, faculty-development-ai]
type: concept
foundations: [ai-literacy, educational-development, teacher-role]
pedagogy: [self-efficacy]
technology: [generative-ai, intelligent-tutoring, llm]
ethics: [equity-in-ai-education]
audience: [faculty developers, learners, instructors]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed, edugems, playlab, teacherserver]
translation_of: concepts/teacher-ai-competency
source_updated: "2026-10-26T12:05:00-04:00"
updated: "2026-10-27T17:23:18-04:00"
translation_note: "*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

> **Lärarnas AI-kompetens**: den kunskap, de färdigheter och de förhållningssätt lärare behöver för att effektivt, etiskt och rättvist integrera AI i undervisning och lärande. Den sträcker sig bortom teknisk verktygsanvändning till [[pedagogy|pedagogisk]] integration, [[assessment|bedömningskompetens]], etiskt omdöme och tilltron att [[ai-literacy|använda AI väl]]. Lärarnas AI-kompetens är lärarsidans motsvarighet till [[ai-literacy]] och utvecklas genom [[educational-development|fortbildning]]. Den är central för hur [[teacher-role|lärarrollen]] förändras i AI-förstärkta klassrum.

## Frågor att fundera över

- Sidan hävdar att läraren är "den avgörande faktorn" för huruvida AI förbättrar lärandet: att verktyg bara hjälper när lärare kan planera för dem, stötta användningen och utvärdera resultaten. Stämmer det med din erfarenhet, eller tror du att verktyget i sig spelar större roll än läraren?
- Lärarnas AI-kompetens spänner över teknisk färdighet, pedagogisk integration, bedömningskompetens och etiskt omdöme. Vilken av dessa tror du att lärare saknar mest, och vilken är svårast att utbilda?
- [[research-methods-aied|Forskningen]] dokumenterar ett gap mellan lärares självupplevda och faktiska AI-färdighet. Varför tror du att människor överskattar sin beredskap, och vad skulle krävas för att stänga gapet ärligt?
- Ett intensivt fortbildningsprogram gav stora vinster i AI-pedagogisk färdighet i den forskning som citeras, vilket antyder att teknisk-pedagogisk färdighet är utbildbar. Om det är sant, varför verkar så många lärare fortfarande oförberedda: vad står i vägen?
- Om en lärare kan "använda AI väl", vad betyder "väl" för dig, och hur skulle du veta att en lärare har uppnått det snarare än bara antagit verktyget?

## Introduktion

Lärarnas AI-kompetens spelar roll eftersom läraren är den avgörande faktorn för huruvida AI förbättrar lärandet. Forskningen visar konsekvent att AI-verktyg bara omsätts i bättre resultat när lärare kan planera för dem, stötta elevernas användning, utvärdera resultaten och integrera dem i en sammanhängande undervisning. Kunskapsbasens litteratur undersöker *dimensionerna* i denna kompetens, *gapet* mellan självuppfattning och faktisk färdighet, och den *fortbildning* som bygger den.

[[nunez-canal-stakeholder-engagement-ai-competency-2026|Nunez-Canal m.fl. (2026)]] kopplar lärarnas AI-kompetens direkt till elevutfall, med humankapital- och intressentteori på en enkät bland lärare i företagsekonomi och nationalekonomi, och hävdar att universitetens investering i lärarkompetens inte är frivillig.
- **Promptträning köper tid, inte bättre material.** I en förregistrerad RCT med 204 lärare fann Appel, Fervers och Piepenburg (2026) att ChatGPT förbättrade kvaliteten på lektionsförberedande material och kortade förberedelsetiden med 34 %, medan tidigare AI-utbildning gav ytterligare 21 % tidsreduktion utan att förbättra den bedömda kvaliteten ([[appel-genai-teacher-lesson-preparation-experiment-2026|Appel m.fl., 2026]]). Utbildade lärare skrev längre promptar och itererade mindre; båda vägarna nådde likvärdig kvalitet.

## Kärndimensioner i kompetensen

Kunskapsbasens forskning konvergerar mot flera sammankopplade dimensioner:

- **Teknisk färdighet:** att utforma ändamålsenliga [[prompt-engineering|promptar]] för pedagogiska mål, [[ai-ed-evaluation|utvärdera AI]]-verktyg för pedagogisk passform och säkerhet, och felsöka problem i realtid. [[genai-pd-ai-pck-learning-gain-2026|Ett intensivt GenAI-fortbildningsprogram]] dokumenterade signifikanta vinster i alla fem AI-PCK-komponenterna (total *d* = 2,36), vilket visar att teknisk-pedagogisk färdighet är utbildbar.
- **Att specificera agentarbetsflöden:** när lärare konfigurerar en chatbot i naturligt språk är det dominerande felet förlorad avsikt snarare än felaktiga fakta: bottar hoppade över obligatoriska arbetsflödessteg i 53,8 % av slutanvändarsamtalen och utelämnade förväntansuppsättningen i 33,4 % ([[eduwild-teacher-configured-chatbots-failures-2026|Liu m.fl. (2026)]]), så att skriva ordnade, uttryckliga steg är en utbildbar kompetensdimension i sig.
- **Pedagogisk kunskap är det avgörande lagret.** En studie över nivåer av [[ai-education|AI-utbildning]] på [[k-12|gymnasiet]] ([[pedagogy-first-technology-second-teacher-knowledge-2026|46 lärare, 2 832 elever]]) fann att teknisk AI-kunskap ensam var otillräcklig och till och med kunde minska elevernas uppfattning om AI för samhällsnytta något, medan pedagogisk AI-kunskap drev elevernas uppfattningar och deras avsikt att lära sig AI. Kompetensramverk bör därför vikta pedagogisk AI-kunskap som den avgörande dimensionen, inte som ett mjukt tillägg.
- **Pedagogisk integration:** att koppla AI-användning till lärandemål, utforma [[scaffolding|stödstrukturer]] som stöder elevernas [[metacognition|metakognition]] och själv[[regulation|reglering]], och integrera AI i [[learning-design|undervisningsdesign]]. [[ai-tpack-teacher-multi-agent-workflow|AI-TPACK-forskning]] modellerar hur lärare kombinerar teknisk, pedagogisk och ämneskunskap genom arbetsflöden med flera [[agentic-ai|agenter]], medan [[teacher-ai-teaming-five-levels|ett ramverk för lärar-AI-samarbete i fem nivåer]] (transaktionellt till synergistiskt) fångar hur [[generative-ai|GenAI]] kan ersätta, komplettera eller förstärka lärarkompetens.
- **Bedömningskompetens:** att utvärdera AI-genererat innehåll och elevers AI-utdata, och att förstå hur [[assessment-validity|validiteten]] förändras när elever använder AI. Detta knyter an till [[automated-assessment]], [[ai-detection]] och den bredare agendan för att omforma [[assessment|bedömningen]]. För rekommendationssystem sträcker det sig till att bedöma huruvida en AI:s förklaringar är genuint begripliga och pedagogiskt meningsfulla: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor m.fl. (2025)]] fann att lärare litade mer på AI-rekommendationer för gruppering när förklaringarna formulerades i domänens (läroplanens) språk än när de exponerade råa modellattribut, en färdighet i att kräva och bedöma [[explainable-ai|förklaringskvalitet]] snarare än att acceptera ogenomskinliga resultat.
- **Modellval och promptdesign som påvisbara färdigheter:** instrumentell [[ai-literacy]] omfattar att veta vilken modell som ska användas och hur uppgiften ska formuleras. [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen m.fl. (2026)]] lät ChatGPT-4, Claude 3 och Gemini Advanced kritisera 153 blivande lärares lektionsplaneringsmål under fyra systematiskt varierade promptar (N = 240 omdömen i studie 1, 345 i studie 2), med [[feedback]] bedömd i nio kvalitetskategorier. Enbart modellval förklarade 26,9 % av variansen i bedömd kvalitet (18,4 % i studie 2) och promptdesign tillförde signifikanta 15,9 % (5,7 %) ovanpå; det enda avgörande promptdraget var domänspecifikt tekniskt språk, vars borttagande signifikant sänkte kvaliteten (β = −0,412), medan tillägg av exempel och borttagande av chain-of-thought-instruktionen inte gjorde någon signifikant skillnad i studie 1. Deras tolkning, att ämnesterminologi både låser upp relevant träningsdatainnehåll och ramar in förfrågan professionellt, som rollpromptning, plus en tumregel att använda den mest kapabla aktuella frontiermodellen, gör modellvalet till ett didaktiskt beslut snarare än ett tekniskt.
- **Etisk och kritisk användning:** att känna igen [[bias-mitigation|bias]] i AI-utdata, skydda elevdata ([[privacy]]) och säkerställa rättvisa utfall ([[equity-in-ai-education]]). [[llm-cultural-relevance-k12|Kulturellt relevant AI-användning]] undersöker hur lärare kan använda LLM:er för att diversifiera material snarare än att förstärka dominerande normer.
- **Etiskt ansvar är fördelat, inte individuellt.** I sju nationella fall positioneras lärare som moraliska grindvakter för AI-användning samtidigt som de saknar institutionellt och epistemiskt stöd, så etisk AI-kompetens måste sträcka sig till kritisk och politisk handlingskraft snarare än teknisk färdighet ([[raffaghelli-situated-ai-ethics-2026|Raffaghelli m.fl. (2026)]]).
- **Tilltro och attityder:** lärarnas [[self-efficacy|tilltro till egen förmåga]] formar antagandet. [[teacher-ai-adoption-confidence|Forskning om antagande]] finner att tilltro, stöd och upplevd nytta styr huruvida lärare faktiskt använder AI, och [[ai-pedagogical-orientation|lärarnas orienteringar]] formar antagandet i forskning och undervisning.

- I en enkät över fem länder med 1 405 K-12-lärare förutsade AI-beredskap positiva övertygelser om GenAI:s undervisningsvärde (B = 0,59, R² = 0,50) men förutsade *större* oro för [[creativity|kreativitet]] (B = 0,18), och samma prediktorer förklarade bara 7 % respektive 6 % av oron: beredskapsbyggande ensamt lämnar oron orörd ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu m.fl. (2026)]]).


Beredskap bör ordnas och mätas därefter: Capability-Decision Model placerar demonstrerad AI-förmåga uppströms attityd och tilltro och föreslår prestationsindikatorer i stället för enbart självrapportering: lektionsdesignuppgifter, promptutvärderingsuppgifter försedda med fel, innehållsvaliditetsbedömningar och bedömningsmatriser för klassrumsartefakter ([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

**Emotionell och moralisk beredskap är en egen dimension.** [[vassallo-ai-guilt-complex-faculty-2026|Vassallo (2026)]] enkätade den akademiska personalen vid ett maltesiskt [[higher-ed|universitet]] (109 svarande) och byggde ett AI Guilt Index (α = 0,88) av fyra moralemotionsposter, och fann att *förväntad* skuld vägde tyngre än ånger efter användning: det starkaste instämmandet var oro för att AI-användning undergräver ens trovärdighet (34,9 % instämde), därefter känslan av att man [[academic-integrity|fuskar]] när man använder den (25,7 %), medan ånger efter användning bara fick 9,2 %. De resultat som spelar roll för kompetensramverk är att icke-användare rapporterade *högre* skuld än användare (M = 3,25 mot M = 2,32) och att skulden sjönk i takt med stigande anställningstrygghet: akademiker tidigt i karriären rapporterade mest (M = 2,71) och seniora akademiker minst (M = 2,03). Emotionell beredskap fångas därför inte av färdighets- eller tilltromått, och artikeln hävdar att kompetensramverk bör behandla skuld och identitetsoro som normala övergångsreaktioner snarare än som fel att korrigera.

En starkare version av den omramningen hävdar att GenAI är ett tröskelbegrepp snarare än ett kompetensgap: en autoetnografisk redogörelse hävdar att lärarnas [[anxiety-and-stress|ångest]] och motstånd är konstitutiva för tröskelöverskridandet, så färdighetsbaserad utbildning misslyckas och principiellt icke-antagande bör respekteras snarare än korrigeras ([[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]]).

## Kompetensgapet

Ett centralt resultat är **gapet mellan [[self-report-measures|självrapporterad]] och prestationsbaserad kompetens**. [[ai-literacy-assessment-misalignment|Forskning om bedömning av AI-kompetens]] dokumenterar en betydande diskrepans (upp till cirka 40 %) mellan vad lärare *tror* att de kan och vad de faktiskt kan *visa*: lärare som är trygga i AI-färdigheter saknar ofta grundläggande prompt- och utvärderingsförmåga. Detta motiverar **[[assessment|prestationsbaserad bedömning]]** av lärarkompetens i stället för förlitande på självrapportering, och knyter an till [[self-assessment|kalibrerad självbedömning]]. En nationell enkät med 2 586 nigerianska gymnasielärare mätte de två sidorna med separata instrument: måttlig AI-medvetenhet (M = 3,13 av 8) mot lägre AI-pedagogisk färdighet (M = 2,47 av 5), där lärare tidigt och mitt i karriären rapporterade högre färdighet än erfarna kollegor ([[nigerian-teachers-ai-awareness-pedagogical-skills-2026|Olurinola m.fl., 2026]]).

**Beredskap är det mest dokumenterade hindret i matematiklitteraturen.** En översikt av 54 matematikdidaktiska studier fann att teknisk-pedagogisk integration och lärarnas beredskap var den oftast rapporterade utmaningen (38 av 54), före bedömningsvaliditet och integritet (26) och överberoende (24) ([[manto-ai-integration-mathematics-education-systematic-review-2026|Manto m.fl. (2026)]]).

Gapet gäller inte bara mellan upplevd och faktisk färdighet utan också *bredden* i vad lärare vet: en nationell enkät med 2 018 ukrainska lärare på gymnasienivå fann att 84 % uppgav att de använde AI i yrkesutövningen medan bara 11 % kunde namnge en specialiserad AI-tjänst utöver ChatGPT ([[ukraine-ai-literacy-secondary-framework-2026|Marienko, Markova & Semerikov (2026)]]). En andra trånghet syns i vad lärare frivilligt rapporterar snarare än vad de kan namnge: 53 yrkesverksamma lärare som taggade sina egna klassrumscase mot OECD:s ramverk för AI-kompetens beskrev 43 AI-kompetenta praktiker mot bara 10 misslyckanden ([[ailithub-ai-literacy-case-infrastructure-2026|Wang m.fl., 2026]]). Deras kompetensval klustrade kring praktiskt omdöme (att utvärdera AI-utdata, N = 38) och nådde sällan samhällelig bias (N = 5), etisk samstämmighet (N = 6) eller AI:s energianvändning (N = 9).

En enkät med 132 lärare i Indonesien fann nära nog universellt accepterande vid sidan av tunn mekanistisk förståelse: 96,2 % stödde lärares AI-användning, men bara 4,6 % nämnde tokenisering eller avkodning och 21,5 % trodde att ChatGPT sökte i en databas eller på internet ([[ai-misconceptions-indonesian-k12-teachers-2026|Aji m.fl. (2026)]]). En positiv attityd är inte bevis för en användbar mental modell av verktyget.

Gapet syns i artefakten likaväl som i självrapporteringen. En [[ai-integration-instructional-design-collaboratory-2026|tvärinstitutionell lärarkollaboration i lärarutbildningen]], där lärarutbildare designade in AI i sina egna metodikkurser, rapporterade att kandidater kunde producera polerade AI-assisterade lektionsplaner men inte förklara varför en plan passade eleverna och styrdokumenten, eftersom planen i sig inte säger något om resonemanget bakom den. Att betygsätta motiveringen snarare än produkten är ett svar. [[bondurant-shaughnessy-ai-pedagogies-practice-2026|Ramen pedagogies of practice]] antyder ett annat, och behandlar repetition som en approximation av praktiken: AI-medierad repetition med strukturerad återkoppling efter repetitionen ökade kandidaternas användning av utforskande och sonderande frågor, men kandidaternas egna bedömningar av sin prestation avvek fortfarande från vad observatörerna registrerade.

**En sjunkande självbedömning efter utbildning kan signalera lärande snarare än förlust.** I ett sex månader långt [[tpack|Intelligent-TPACK]]-[[educational-development|fortbildningsprogram]] med 64 universitetslärare i Hongkong mot 61 i kontrollgrupp steg den samlade AI-kompetensen med ungefär en halv standardavvikelse (Cohens d = −0,521), men en del lärare i båda grupperna fick lägre poäng vid eftermätningen än vid förmätningen ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng & Ling, 2025]]). Intervjuer tillskrev nedgångarna ett skifte från omedveten till medveten inkompetens, den omkalibrering som Dunning-Kruger-effekten förutsäger, snarare än förlorad färdighet. Författarna drar slutsatsen att självrapportering före och efter underskattar en insats, eftersom en del av vinsten kommer som en nedåtkorrektion i instrumentet självt.

**Gapet visar sig också som icke-deltagande.** [[watson-rainie-ai-challenge-faculty-survey-2026|Watson & Rainie (2026)]] enkätade 1 057 amerikanska universitetslärare i slutet av 2025 och fann att 26 % inte använder [[generative-ai|generativa AI]]-verktyg alls, att en tredjedel väljer att inte använda dem i undervisningen och att icke-användningen är koncentrerad till konst och [[humanities-education|humaniora]] (40 %). Den institutionella sidan av gapet var större än den individuella: 68 % uppgav att deras lärosäten inte hade förberett lärarna på att använda generativ AI för undervisning och handledning, och lärarna angav kollegors motstånd (82 %) och obekantskap (83 %) som de främsta hindren för institutionell användning: en bild där kapacitetsbyggande, kamratnormer och policy måste röra sig tillsammans.

**Lärarutbildningen kringgår till stor del kompetensens etiska dimension.** En [[meta-analysis-systematic-review|systematisk översikt]] av AI i grundutbildningen för blivande grundskollärare i matematik ([[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto m.fl. 2026]], 11 studier valda bland 341 poster) fann att insatserna koncentrerades till kortsiktiga tekniska och pedagogiska vinster, med nio av de elva som korta insatser över en till sex sessioner, och rapporterade att etik behandlades i bara tre av de elva studierna. Kompetensramverken namnger etiskt omdöme som en dimension; lärarutbildningslitteraturen som ska bygga den undervisar eller mäter den sällan.

- **Sju kompetenskluster, med etiken som svagaste länk.** En tematisk syntes av 78 studier ger kluster för promptteknik, kritisk utvärdering av AI-utdata, etisk medvetenhet och biasdetektion, pedagogisk-innehållslig samstämmighet, konceptuell AI-kompetens, mänsklig övervakning och reflektion. Promptteknik var det mest konsekvent dokumenterade och beter sig som ett **utvecklingsspektrum** snarare än en enskild färdighet, vilket ledde granskarna till slutsatsen att det bäst förstås som pedagogiskt resonemang genomfört i ett nytt medium: prompten som ett externaliserat designbeslut. Etisk medvetenhet var den **svagast dokumenterade kompetensen** i lärarutbildningsstudierna ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Lärare överskattar sin egen utvärderingsförmåga.** Utöver resultatet att bara **38,3 % av AI-genererade lärandemål uppfyllde alla kvalitetskriterier utan revidering** överskattar blivande lärare **systematiskt sin förmåga att utvärdera chatbotars utdata**, vilket granskarna läser som ett möjligen perceptuellt snarare än deklarativt underskott. Det är därför de hävdar att kompetens bör bedömas genom prestationsartefakter (lektionsplaner, beslutsloggar, mikroundervisning) snarare än självrapportering: självbedömningens opålitlighet visas i just den litteratur som utbildningen är tänkt att adressera.

## Fortbildning som fungerar

Kunskapsbasens fortbildningslitteratur identifierar verksamma angreppssätt:

- **Intensiva, teoriförankrade program:** [[genai-pd-ai-pck-learning-gain-2026|Ett intensivt GenAI-fortbildningsprogram]] med 163 lärare och blivande lärare gav signifikanta vinster i alla AI-PCK-komponenter, med störst nytta för blivande lärare. [[teacher-education-ai-literacy-sdt-2026|Fortbildning baserad på självbestämmandeteori]] visar att behovsstödjande träning förbättrar lärarnas AI-kompetens, attityder och [[student-engagement|engagemang]] samtidigt som den minskar ångest.
- **[[design-based-research|Designbaserade]] och integrerade angreppssätt:** [[genai-literacy-training-teacher-education-dbr-2026|DBR-baserad GenAI-kompetensträning]] adresserar överbetoningen av teknisk kunskap och verktyg från före GenAI; [[rail-ed-genai-literacy-teacher-education|integrativa, utvecklingsinriktade ramverk]] och [[sec-ai-literacy-narrative-review-2026|integrering av socioemotionell kompetens]] vidgar kompetensen bortom ren teknik.
- **Undersökning och autentisk praktik:** [[quest-ai-inquiry-preservice-teachers|AI-stödda undersökningsmodeller]] bygger AI-kompetens och autentisk prestation hos blivande lärare.
- **Kontextspecifik beredskap:** [[sangwa-epiq-ai-faculty-readiness-2026|Beredskapsramverket EPIQ-AI]] betonar att lärarnas beredskap är en socioteknisk fråga som kräver samstämmighet mellan lärarkapacitet, [[governance|styrning]] och kvalitetssäkring.
- **Stöd måste differentieras efter erfarenhet och AI-färdighet.** [[choi-teacher-ai-interaction-lesson-design-2026|Choi m.fl. (2026)]] fann att hur lärare faktiskt interagerar med AI i lektionsdesign beror på *samspel* mellan undervisningserfarenhet och AI-färdighet, inte på någon av dem ensam. Erfarna lärare med hög AI-färdighet anpassar kritiskt AI-utdata till sammanhanget (ompromptning, utbyggnad), medan nybörjare, även tekniskt flytande sådana, tenderar att acceptera AI-svar direkt och sällan beakta elever och sammanhang. Detta talar för profileringsbaserad fortbildning: checklistor för svarsutvärdering och promptmallar för nybörjare, och praktisk färdighetsträning för erfarna lärare med lägre AI-färdighet.
- **Tidsvinsten följer i sig erfarenhet och tilltro, inte bara stödets utformning.** I [[roy-aila-lesson-planning-teacher-choices-2026|Roy m.fl:s (2026)]] försök med en AI-lektionsassistent var arbetsbelastningsminskningen större för lärare med lägre tilltro till ämneskunskapen, lägre pedagogisk kunskap, kortare tid i yrket eller högre tilltro till teknik. Färdighet och tilltro är därför en del av insatsens effekt, inte bara av dess upptag.


Övertygelsekonfiguration är en andra profileringsaxel: bland 40 680 lärare i TALIS 2024 dolde samma status som icke-användare motsatta hinder: 83,3 % av profilen Indifferent angav pedagogiska invändningar medan 66,2 % av Measured Endorsement angav otillräcklig kunskap och färdighet ([[teachers-ai-belief-profiles-talis-2024-2026|Fang & Jin (2026)]]). AI-relaterat professionellt lärande följde profiltillhörighet mer konsekvent än ålder eller utbildningsnivå.

- **Lärare delar inte en enda uppfattning om AI.** En fenomenografisk studie av 16 danska universitetslärare fann tre uppfattningar om att undervisa med AI och tre om att lära med AI, så en enda workshopmodell når bara en del av en lärargrupp ([[stenalt-good-education-teacher-ai-conceptions-2026|Stenalt (2026)]]).
- **Samdesign och pedagogisk promptkompetens är kompetenser, inte tillägg.** En [[meta-analysis-systematic-review|systematisk översikt]] av lärares och AI:s samdesign av lärandeuppgifter ([[wang-teacher-ai-co-design-review-2026|Wang, Liu & Islam 2026]], 28 studier) finner att det dominerande samarbetsläget är AI som assistent och innehållsgenerator, och lokaliserar ett gap i lärarnas förmåga till fullödig samdesign och dialogiskt partnerskap. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] visar att fortbildning som parar teknisk AI-träning med pedagogiskt resonemang, och bygger "pedagogisk promptkompetens" (att koda [[tpack|PCK]] i promptar), är det som låter lärare förvandla AI-utdata till ändamålsenliga [[collaborative-learning|differentierade gruppaktiviteter]].
- **Strukturer som bygger kompetens, snarare än listor över den.** [[physics-faculty-learning-community-ai-2026|Perl-Nussbaum och Finkelstein (2026)]] drev en lärargrupp som möttes varannan vecka i sex sessioner vid en stor offentlig R1-institution i fysik, med nitton lärare över serien och omkring tio vid varje möte, där varje session öppnade med lokal data, gick vidare till smågruppstestning av AI mot verkliga anonymiserade elevhemuppgifter och avslutades i gemensam diskussion, och den producerade ett gemensamt arkiv med fem poster snarare än ett utbildningspaket. Bedömningskompetens kan byggas på samma sätt genom ett designverktyg: i [[authentic-assessments-generative-ai-pilot-2026|Paula m.fl:s (2026)]] pilot växte åtta erfarna kurskoordinatorer inom STEM och hälsa sin bedömningskompetens genom att kritisera en anpassad GPT:s bedömningsutkast mot disciplinära standarder, trots att resultaten gång på gång missade disciplinärt sammanhang, ignorerade ämnesordning och i ett fall bar påhittade referenser genom upprepad promptning. Alla åtta behöll [[evaluative-judgment|det akademiska omdömet]] hos sig själva och vägrade helautomatisering, vilket gör strukturerad kritik av genererade utkast till utvecklingsmekanismen snarare än verktygsutbildning.
- **Korta sessioner kan flytta acceptans utan att flytta antagande.** [[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller och Böhme (2026)]] utvärderade en tre timmar lång INSIGHT-session med 100 tyska lärare och fann att upplevd användbarhet och [[technology-acceptance-model|upplevd användarvänlighet]] båda steg signifikant (användbarhet t(99) = -3,24, p = ,002, d = ,32; användarvänlighet d = ,25) medan den beteendemässiga avsikten att använda AI-baserad teknik för differentiering inte förändrades. Författarna noterar att deras utgångsvärden redan var gynnsamma, så en takeffekt är trolig. Läsningen för fortbildningsdesign är snäv men användbar: en kort session kan förändra hur lärare bedömer AI-verktyg utan att förändra huruvida de planerar att använda dem, vilket är den sorts förändring som kräver uppföljning snarare än en engångshändelse.

- **Lärare föredrar flyt men tillskriver lärande stödstruktur.** Bland 41 lärare föredrogs en GPT-4o-baslinje sammantaget (21 mot 13), medan den finjusterade trestegsmodellen (identifiera, utforska, utveckla) oftare tillskrevs lärande (18 mot 13), och de två bedömningarna var överens bara 39 % av gångerna ([[teachingcoach-chatbot-instructor-guidance|Molnar m.fl. (2026)]]).
- **Institutionellt stöd:** [[educational-development|fortbildning]] måste paras med institutionell infrastruktur ([[educational-policy-ai|policy]], [[institutional-change-framework-ai|institutionell förändring]]) för hållbart antagande.
- **Författarverktyg garanterar inte pedagogisk trohet.** [[teachers-configure-educational-chatbots-2026|Riahi m.fl. (2026)]] studerade 27 mellanstadielärare som konfigurerade pedagogiska [[conversational-ai|chatbotar]] i fortbildningsworkshoppar och analyserade fokusgrupper tillsammans med konfigurations- och interaktionsloggar. Lärarna behandlade chatboten som en undervisningsstödstruktur avgränsad av lärardefinierade regler, men den loggbaserade överensstämmelsen mellan avsikt och beteende var starkare för responsivitet (88,9 %) och persona (81,5 %) än för regler (70,4 %) och syfte (59,3 %). Konfigurerbara kontroller ensamma bär inte pedagogisk avsikt in i beteendet, så att uttrycka, testa och förfina en chatbots pedagogik är i sig en kompetens som författarverktygen måste stödja.


Ett designbaserat motexempel behandlar kompetens som situerad snarare än som ett trappsteg. [[adaptive-ai-model-teacher-educators-2025|Eyal:s designbaserade studie 2025 med 22 lärarutbildare i högre utbildning]] lät deltagarna granska fem publicerade bedömningsramverk och samdesigna ett alternativ organiserat kring tre sammankopplade axlar: kontextpassning (infrastruktur, sociokulturella faktorer, lokala behov, utvecklingsstadium), professionella behov (disciplin, pedagogik, ledarskap, stöd) och dynamisk utveckling. Modellen avvisar fasta kompetensnivåer och tillåter icke-linjär progression, och den levereras med ett reflekterande självbedömningsformulär med 20 poster skattat 1 till 5. Dess validering är enbart [[qualitative-research|kvalitativ]], utan [[quantitative-research|kvantitativ]] reliabilitetstestning, så den står som ett designbidrag snarare än ett validerat instrument.
- **Metaanalytisk skattning.** [[teacher-ai-literacy-professional-development-meta-2026|Guo m.fl. (2026)]] slog samman 212 effektstorlekar från 34 studier och skattar fortbildning i AI-kompetens för lärare till g = 0,76 (95 % CI [0,50, 1,02]), starkast för färdigheter (g = 0,91) och svagast för attityder och värderingar (g = 0,61); korrigering för uppenbar publikationsselektion sänker skattningen till omkring g = 0,49.

- **Närvaro förutsäger vinster där känslan av att delta inte gör det.** I samma sexmånadersprogram förutsade närvarofrekvensen kompetensvinsten (β = ,407, p = ,001) medan självupplevt deltagande inte gjorde det (β = ,049, p = ,692), och disciplin, undervisningserfarenhet och tjänstetitel förklarade lite; författarna läser närvaro som beteendemässig investering och upplevt deltagande som ytligt engagemang ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng & Ling, 2025]]).

- **Värderingar släpar efter färdigheter även i ett domänspecifikt program.** I ett ettårigt program i Hongkong med 30 engelsklärare steg kunskapen om [[multimodal|multimodala]] bedömningsstrategier från 3,13 till 4,15 av 5 (partiell η² = 0,571) och kompetensen att stödja elever från 3,05 till 3,98 (0,482), båda signifikanta, medan varje värderingsunderdomän förblev statistiskt oförändrad under ett Bonferroni-korrigerat alfa på ,006. Lärarna tillskrev vinsterna gemensam planering i skolan och klustermöten mellan skolor snarare än enbart workshopparna ([[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang m.fl., 2026]]).

- **Mikrolärande kan utveckla universitetslärares AI-kompetens.** [[microlearning-ai-modules-vocational-teacher-education-2026|Cechovsky (2026)]] förfinade två [[vocational-education|yrkesutbildnings]]moduler genom två onlinegruppsdiskussioner till fem designprinciper (tydlig struktur och orientering, vägledning och navigationsstöd, segmentering och modularisering, multimodal presentation och elevaktivering) och fann att plattformsnavigering och att hitta modulerna var de främsta praktiska hindren.

## Lärarnas AI-kompetens och den föränderliga lärarrollen

I takt med att AI tar över rutinmässiga undervisnings- och bedömningsuppgifter förskjuts lärarens särskiljande bidrag mot orkestrering, omdöme och relation: att avgöra när och hur AI används, att stödja [[agency|elevens handlingskraft]] och kritiska användning, att säkerställa rättvisa och att ge det sociala och emotionella stöd AI inte kan ge. Detta omramar lärarkompetensen kring [[human-in-the-loop-ai|mänsklig övervakning i loopen]], [[ethics|etiskt omdöme]] och [[self-regulated-learning|att stödja självreglerat lärande]], med koppling till [[teacher-role]] och [[cognitive-offloading|att värna mot överberoende]].

## Implikationer för AI i utbildningen

- **Bedöm prestation, inte bara självrapportering:** lärarkompetens bör utvärderas genom demonstration, givet det dokumenterade självrapporteringsgapet.
- **Utbilda hela kompetensen, inte bara verktygen:** fortbildning bör bygga tekniska, pedagogiska, bedömningsmässiga och etiska dimensioner tillsammans, förankrade i [[learning-theories|lärandeteori]].
- **Bygg tilltro vid sidan av färdighet:** attityder och [[self-efficacy]] formar antagandet, så fortbildning bör minska ångest och bygga tilltro genom autentisk, stöttad praktik.
- **Stöd det institutionella lagret:** hållbar lärarkompetens kräver samstämmig policy, styrning och kapacitet, inte isolerad utbildning.

- **Lärarnas digitala kompetens för GenAI i [[curriculum-design|läroplanearbete]].** [[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámez (2026)]] validerar ett TAM-baserat diagnostiskt instrument med 434 yrkesverksamma lärare; beteendemässig avsikt var den främsta prediktorn för digital kompetens att använda GenAI i lärandeplanering, med self-efficacy som en grundläggande drivkraft.

### Ett psykometriskt instrument för lärarnas AI-kompetens

- En psykometrisk studie utvecklade Teachers' AI Literacy Scale (TAILS) för att mäta AI-kompetens specifikt inom [[teacher-education|språklärarutbildning]], genom att operationalisera ED-AI-ramverkets sex dimensioner. Instrumentets utveckling fyller ett gap i bedömningar som riktar sig till elever eller allmänna användare, och stöder mätning av lärarnas AI-kompetens.

Instrumentlandskapet har sedan dess granskats. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore och Maats systematiska översikt 2026 av instrument för att mäta lärares AI-kompetens]] bedömde 33 instrument publicerade mellan 2019 och 2025 och fann att fältet är metodologiskt enahanda: 31 (93,9 %) är självrapporteringsskalor för upplevd tilltro, bara två (6,1 %) prövar kunskap objektivt och inget använder prestationsbaserade uppgifter. Intern konsistens var den starkaste kvalitetsdomänen (28 av 33 i betyg A) och rättvisa den svagaste, med fem instrument (15,2 %) som rapporterade mätinvarians eller differential item functioning. Innehållet släpar också efter tekniken, eftersom 29 instrument (87,9 %) riktar sig mot allmänna AI-begrepp och bara fyra (12,1 %), alla från 2025, behandlar generativ AI.

## Vanliga missuppfattningar

- **"Promptträning gör lärarnas material bättre."** **Promptträning köper tid, inte bättre material**: i en **förregistrerad RCT med 204 lärare** fann Appel, Fervers och Piepenburg (2026) att ChatGPT förbättrade **nedlagd tid** medan materialkvaliteten inte följde med. Effektivitetsvinsten är verklig och den är inte kvalitetsvinsten.
- **"När lärare konfigurerar en chatbot är felet en sakfel."** **När lärare konfigurerar en chatbot i naturligt språk är det dominerande felet förlorad avsikt snarare än felaktiga fakta**: bottar **hoppar över** det steg läraren avsåg. Instruktionsföljning misslyckas strukturellt snarare än faktamässigt.
- **"Teknisk färdighet är det avgörande lagret."** **Pedagogisk kunskap är det avgörande lagret**: en studie över nivåer i [[ai-education|AI-utbildning]] på gymnasiet [[pedagogy-first-technology-second-teacher-knowledge-2026|Shen m.fl., 2026]]. Den kompetens som avgör utfallet är den som de flesta utbildningsprogram investerar minst i.

## Anslutna begrepp

- [[ai-literacy]]
- [[educational-development]]
- [[teacher-role]]
- [[prompt-engineering]]
- [[learning-design]]
- [[scaffolding]]
- [[metacognition]]
- [[assessment-validity]]
- [[equity-in-ai-education]]
- [[ethics]]
- [[self-efficacy]]
- [[human-in-the-loop-ai]]
- [[agency]]
- [[cognitive-offloading]]
- [[educational-policy-ai]]
- [[ai-education]]
- [[tpack]]
- [[teacher-education]]
- [[pedagogy]] — paraply för pedagogiker och undervisningsstrategier i AI-utbildning

## Anslutna artiklar

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Vilka lärare vann planeringstid: lägre tilltro till ämneskunskap, lägre pedagogisk kunskap, nyare i yrket eller hög tilltro till teknik
- [[ai-misconceptions-indonesian-k12-teachers-2026]] — Lärare accepterar AI samtidigt som de missförstår hur det fungerar (Aji m.fl. 2026)
- [[manto-ai-integration-mathematics-education-systematic-review-2026]] — Lärarnas beredskap och teknisk-pedagogisk integration som den oftast rapporterade utmaningen i 54 matematikdidaktiska studier (Manto m.fl. 2026)
- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — Multimodal bedömningskompetens: ett ettårigt program där kunskap och kompetens rörde sig och värderingarna inte
- [[teacher-ai-literacy-professional-development-meta-2026]]
- [[intelligent-tpack-pd-intervention-hongkong-2025]] — Intelligent-TPACK-fortbildning: en halv standardavvikelse i vinst, och negativa vinster som läses som omkalibrering. Effekten av fortbildningsprogram på K-12-lärares AI-kompetens: en systematisk översikt och metaanalys

- [[ailithub-ai-literacy-case-infrastructure-2026]] — Lärare taggade sina egna AI-case från klassrummet och nådde praktiska kompetenser lätt men samhälleliga och etiska sällan (Wang m.fl. 2026)
- [[typology-generative-ai-tools-education-2026]] — Verktygsval som en utövning av pedagogens handlingskraft
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] — Systematisk översikt av generativ AI i K-12-undervisning och lärande (Marzano 2026)
- [[pedagogy-first-technology-second-teacher-knowledge-2026]] — Lärarnas yrkeskunskap i K-12-AI-utbildning: TAIK mot TPAIK och elevernas lärande (Shen m.fl. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Mönster i lärares AI-interaktion vid lektionsdesign över erfarenhet och AI-färdighet (Choi m.fl. 2026)
- [[preservice-teachers-responsible-genai-2026]] — Blivande lärares ansvarsfulla GenAI-användning: läroplanskonsekvenser (Kohnke m.fl. 2026)
- [[melo-llm-classroom-observation-teach-2026]] — LLM-baserad klassrumsobservation för lärares fortbildning (Melo m.fl. 2026)
- [[bondurant-shaughnessy-ai-pedagogies-practice-2026]] — Generativ AI över representationer, dekompositioner och approximationer: repetition, strukturerad återkoppling och noggrannhetsvarningarna
- [[genai-pd-ai-pck-learning-gain-2026]] — Effekt av ett intensivt GenAI-fortbildningsprogram
- [[ai-tpack-teacher-multi-agent-workflow]] — Att modellera AI-TPACK genom lärares multiagentarbetsflöden
- [[teacher-ai-teaming-five-levels]] — Mot synergistiska lärar-AI-interaktioner
- [[teacher-education-ai-literacy-sdt-2026]] — Lärarutbildning för AI-kompetens genom självbestämmandeteori
- [[genai-literacy-training-teacher-education-dbr-2026]] — Designbaserad forskning om GenAI-kompetensträning
- [[rail-ed-genai-literacy-teacher-education]] — Att tänka om GenAI-kompetens i lärarutbildningen
- [[sec-ai-literacy-narrative-review-2026]] — Att integrera socioemotionella kompetenser med AI-kompetens
- [[teacher-ai-adoption-confidence]] — AI-antagande bland lärare: tilltro och stöd
- [[ai-pedagogical-orientation]] — Lärarnas orienteringar formar AI-antagandet
- [[ai-literacy-assessment-misalignment]] — Felanpassning mellan självrapporterad och prestationsbaserad AI-kompetens
- [[quest-ai-inquiry-preservice-teachers]] — AI-stödd undersökning för blivande lärare
- [[sangwa-epiq-ai-faculty-readiness-2026]] — Beredskapsramverket EPIQ-AI för lärare
- [[llm-cultural-relevance-k12]] — LLM:er för kulturellt relevant K-12-pedagogik
- [[institutional-change-framework-ai]] — Ramverk för institutionell förändring kring AI
- [[teachingcoach-chatbot-instructor-guidance]] — Chatboten TeachingCoach för lärarvägledning
- [[laidlaw-genai-identity-crisis-faculty-2026]] — GenAI som identitetskris, inte kompetensgap
- [[raffaghelli-situated-ai-ethics-2026]]
- [[guillen-curriculum-genai-teacher-competence-2026]] — Att bedöma lärares digitala kompetens för GenAI i läroplanearbete (Guillén-Gámez 2026)
- [[stenalt-good-education-teacher-ai-conceptions-2026]] — fenomenografisk studie av universitetslärares uppfattningar om AI
- [[ukraine-ai-literacy-secondary-framework-2026]] — Ramverk för AI-kompetens i fem nivåer plus fortbildning för ukrainska lärare på gymnasienivå (Marienko m.fl. 2026)
- [[wang-teacher-ai-co-design-review-2026]] — Lärares och AI:s samdesign av lärandeuppgifter: trender och perspektiv (Wang m.fl. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Rollarkitektur i AI-designade differentierade gruppaktiviteter (Talebzadeh 2026)
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Promptteknik och modellval som prediktorer för AI-feedbackens kvalitet (Jacobsen m.fl. 2026)
- [[vassallo-ai-guilt-complex-faculty-2026]] — AI-skuldkomplexet: förväntad skuld och fyra moraliska svarsprofiler bland akademisk personal (Vassallo 2026)
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]] — En tre timmar lång lärarfortbildning höjde upplevd användbarhet och användarvänlighet men inte den uttalade avsikten att anta AI (Mesenhöller & Böhme 2026)
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — Systematisk översikt av AI i grundutbildningen för blivande grundskollärare i matematik: etik behandlad i bara tre av elva studier (Pinto m.fl. 2026)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — AAC&U/Elon-enkät med 1 057 amerikanska universitetslärare: beredskap, icke-användning och gapet mellan individ och institution (Watson & Rainie 2026)
- [[ai-integration-instructional-design-collaboratory-2026]] — Tvärinstitutionell lärarkollaboration: AI-integration som undervisningsdesign i lärarutbildningen
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Systematisk översikt av 33 instrument för att mäta lärares AI-kompetens: 31 självrapportering, två objektiva kunskapstest, inga prestationsuppgifter (Zainal, Mohd Matore & Maat 2026)
- [[adaptive-ai-model-teacher-educators-2025]] — En designbaserad adaptiv modell för AI-kompetens och ett reflekterande frågeformulär med 20 poster samdesignat med 22 lärarutbildare (Eyal 2025)
- [[physics-faculty-learning-community-ai-2026]] — En workshopserie för effektiv AI-användning i osäkra tider: att bygga en lärargrupp i fysik
- [[authentic-assessments-generative-ai-pilot-2026]] — Att designa autentiska bedömningar med generativ AI: en pilotstudie av Assessment Authentifire i högre utbildning
- [[teachers-configure-educational-chatbots-2026]] — Undervisar den som avsett? Hur lärare konfigurerar pedagogiska AI-chatbotar
- [[capability-decision-model-teacher-readiness-2026]] — Ordnad, kapacitetsförst inriktad beredskapsmodell för lärare med prestationsbaserade kapacitetsindikatorer
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Tvärnationell enkät med 1 405 K-12-lärare: beredskap förutsäger positiva övertygelser men inte oro
- [[teachers-ai-belief-profiles-talis-2024-2026]] — Fyra övertygelsesprofiler bland lärare i TALIS 2024 kopplar professionellt lärande och profilspecifika hinder till AI-användning
- [[microlearning-ai-modules-vocational-teacher-education-2026]] — Att designa mikrolärandemoduler om AI för universitetslärare i yrkeslärarutbildning: en designbaserad forskningsstudie
- [[eduwild-teacher-configured-chatbots-failures-2026]] — EduWild: hur lärarkonfigurerade chatbotar misslyckas i verklig användning och hur det kan åtgärdas
