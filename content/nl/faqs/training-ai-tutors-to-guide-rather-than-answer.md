---
title: "Hoe trainen we een AI-tutor om studenten te begeleiden in plaats van antwoorden te geven?"
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
updated: "2026-10-29T14:57:55-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Uw tutor verraadt het antwoord. De demo liet dat niet zien, omdat de vraag gemakkelijk was en de student meewerkte. De pilotlogs doen dat wel: een student vraagt twee keer, het model herhaalt de methode en lost het dan op. Een docent kijkt mee met een sessie en zegt dat het een chatbot met een vriendelijke stem is. Nu besluit u of u een kwart van de engineeringtijd aan post-training besteedt of uitrolt met een betere systeemprompt.

Het korte antwoord: prompten haalt de neiging om te antwoorden niet weg, omdat behulpzaamheid is waartoe het basismodel is getraind. Als begeleidend gedrag het product is, moet het worden getraind, en de variabele die de uitkomst bepaalt is de **beloning**. Schrijf de beloning tegen een benchmark, zet redeneringen op stapniveau in de trainingsdata, en beoordeel de training op de volgende didactische zet die het model kiest.

## De korte versie

**1.** Test of de prompt onder druk standhoudt voordat u concludeert dat prompten genoeg is. Instemmen met een student die het fout heeft, is het faalpatroon waar u op moet letten.

**2.** Schrijf de beloning als een specificatie van het gedrag dat u wilt, met harde negatieven uitgesloten, en controleer daarna wat zij werkelijk optimaliseerde.

**3.** Train op sporen op stapniveau. Een corpus van vraag-en-juist-antwoordparen kan een model niet leren zien waar een student de fout in ging.

**4.** Geef reinforcement learning de voorkeur boven imitatie wanneer oordeel ertoe doet, en bewaar de tussentijdse scores per fase.

**5.** Maak de beloning dicht genoeg dat zij bij de meeste antwoorden afgaat, en voer de evaluatie uit op hele gesprekken.

## Zoek uit of de prompt onder druk standhoudt

[[prompt-engineering|Prompten]] en algemene alignment-training laten een neiging tot instemmen achter. [[contextual-sycophancy-ai-literacy|Contextuele sycofantie]] blijft na beide bestaan, waarbij fouten van lerenden nog steeds in het advies van de AI doorwerken.

EduFrameTrap voegt het detail toe dat voor een productbeslissing ertoe doet. Modellen die aanvallen met een contextwissel weerstaan, bezwijken nog steeds onder autoriteitsdruk of sociaal-affectieve druk en houden corrigerende feedback achter, en daarom betogen de auteurs dat "vriendelijk maar correct" gedrag een **expliciete trainingseis** moet zijn in plaats van een voorkeur ([[eduframetrap-llm-sycophancy-educational-safety]]).

Als het falen van uw tutor is dat zij instemt met een fout antwoord, dan is de prompt aanpassen een mitigatie. Voer eerst de druktest uit, leg vast waar zij breekt, en gebruik dat transcript als argument voor het trainingsbudget.

## Schrijf de beloning voordat u de data verzamelt

Een beloning is een gecomprimeerde specificatie van wat u wilt, en modellen optimaliseren wat u werkelijk hebt opgeschreven. Daarmee is beloningsontwerp de beslissing die het plafond zet voor alles stroomafwaarts.

Het beloningsmodel van EduQwen **gaf begeleidende antwoorden prioriteit boven directe antwoorden**, met hard-negative mining om vragen uit te sluiten die het basismodel al oploste, en rollouts uitgebreid van 5 naar 8 stappen zodat didactische beslissingen over meerdere stappen werden vastgelegd. De pijplijn in drie fasen, eerst RL, dan synthetische SFT en dan een laatste RL-ronde, bereikte **96,52%** op de CDPK-benchmark tegen **90,55%** voor Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Daaruit volgen twee dingen. Verwacht dat de beloning wordt gemanipuleerd, omdat zij minder specificeert dan u bedoelde, dus schrijf haar tegen een benchmark en niet tegen een intuïtie. En bewaar de tussenliggende getallen: de eerste RL-fase alleen bereikte 94,13%, SFT op 40.000 zelf gegenereerde antwoorden bracht dat naar 96,20%, en de laatste ronde voegde de laatste fractie toe. Het grootste deel van de winst kwam vroeg, wat nuttig is wanneer iemand vraagt of de laatste fase haar kosten waard was.

## Zorg dat de beloning vaak genoeg afgaat om iets te leren

Een beloning op exacte overeenkomst is te schaars wanneer wat u belangrijk vindt meerdere dimensies heeft. De schrijfsimulator van SWIM laat de progressie helder zien: prompten op basis van een rubric bereikte een beste gemiddelde QWK per kenmerk van **0,577** met Claude Sonnet en **0,422** met GPT-5.4, bijna nul voor een open 7B-model; supervised fine-tuning bereikte **0,474 ± 0,023** voor dat 7B-model; GRPO met een dichte, per kenmerk genormaliseerde accuratesse-beloning bereikte **0,618 ± 0,005** over elk kenmerk en elke prompt ([[swim-student-writing-simulation-2026]]).

Het beloningsontwerp veroorzaakte dat verschil. Een dicht, per kenmerk genormaliseerd signaal verslaat exacte overeenkomst in een setting met meerdere kenmerken, en als uw beloning alleen afgaat bij een volmaakt antwoord, is het grootste deel van uw trainingssignaal stilte.

## Zet de redenering in de voorbeelden

De meest bruikbare bevinding in dit gebied gaat over wat de trainingsdata moet bevatten. Op instructie afgestemde modellen leerden algebraïsche misvattingen alleen wanneer zij op **sporen van oplossingen op stapniveau** werden getraind. Getraind op alleen eindantwoorden bleef de accuratesse **onder 30% bij elke datagrootte** ([[misconception-acquisition-dynamics-llms-2026]]).

Twee details uit die studie zijn van belang voor iedereen die een van beide kanten van een tutor bouwt. De studentrol overgeneraliseerde de aangeleerde fout totdat juiste voorbeelden werden bijgemengd in verhoudingen van slechts **één op de vier**. De tutorrol liet die kosten niet zien en hield een juiste accuratesse van **93% tot 98%** over tien gezamenlijk getrainde misvattingen.

Een dataset van vraag-en-juist-antwoordparen kan een model niet leren opmerken waar een student de fout in ging. Als u een tutor traint om te diagnosticeren, moeten de voorbeelden de redenering bevatten.

## Kies het trainingssignaal dat bij het oordeel past

Supervised fine-tuning leert het model uw demonstraties na te bootsen. Dat is genoeg voor vorm en niet genoeg voor oordeel. LearnLM formuleert de bevinding expliciet: **RL is aanzienlijk effectiever dan SFT alleen voor het volgen van genuanceerde didactische instructies in lange gesprekken** ([[learnlm-improving-gemini-learning]]).

Het kader op instructievoorwaarde stelt ontwikkelaars en docenten in staat tutorgedrag te specificeren zonder zich aan één definitie van didactiek te binden, en co-training mengt dat in de post-trainingsfasen van Gemini. Experts gaven er de voorkeur aan boven GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) en het basis-Gemini 1.5 Pro (**+13%**).

De praktische lezing: als uw falen een verkeerde toon of een ontbrekende vorm is, is SFT de goedkope route. Als uw falen is dat het model in beurt twaalf de verkeerde didactische zet kiest, moet het signaal die keuze belonen.

## Label elk voorbeeld met het gedrag dat het onderwijst

Als de supervisie redeneringen moet bevatten, is het labelschema een curriculumbeslissing. Een studie naar supervisielabels vond dat het toekennen van één doelgedrag aan elk trainingsvoorbeeld, uit vakbekwaamheid, curriculumverankering, diagnostisch redeneren en scaffolding, de scores verhoogde bij elke geteste modelgrootte, met de grootste winst bij scaffolding en bij het gebruiken van de geschiedenis van een lerende. Diagnose van de kennistoestand bleef het zwakste gedrag met **54,04%** ([[omniedu-open-educational-foundation-models-2026]]). Diagnose is het moeilijkste item op die lijst, dus begroot het.

Dataselectie is een eigen trainingsprobleem. Edu-QuRating past preferentiedistillatie toe op het samenstellen van educatieve data, waarbij een enkele score "is dit educatief?" wordt vervangen door **20 rubricdimensies** over feitelijke juistheid, didactische structuur en geschiktheid van niveau ([[garrod-edu-qurating-educational-data-curation-2026]]). Als u een corpus uit webtekst samenstelt, bepaalt dat filter hoe uw model gaat klinken.

## Kies de data-inzet die u zich kunt veroorloven

Twee tegengestelde keuzes bepalen de ruimte, en welke u maakt hangt af van wat u al hebt.

Wanneer uw data schaars is, draagt post-training op instructievoorwaarde het gedrag. LearnLM gebruikt instructies op systeemniveau waarmee docenten en ontwikkelaars tutorgedrag specificeren, en leunt op co-training in plaats van op een groot corpus tutortranscripten.

Wanneer u authentieke interactiedata hebt, wint fine-tuning daarop. TeachLM wedt dat [[prompt-engineering|prompt engineering]] een lapmiddel is en dat het schaarse ingrediënt echte interactie tussen lerende en tutor is. Getraind op **100.000 uur** een-op-een-sessies onder strenge anonimisering verdubbelt het de spreektijd van studenten, verbetert het de vraagstijl en verhoogt het het aantal gespreksbeurten met **50%** ([[teachlm-post-training-llms-education]]).

Een goedkopere route is distillatie. Pedagogy-R1, op 1,5B en 7B, werd op instructie afgestemd op didactisch gefilterde output die was gedistilleerd uit een QwQ-32B-leraar, gekoppeld aan Chain-of-Pedagogy-prompting ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Train de beslissing die de student als volgende tegenkomt

Post-training hoeft niet alleen vorm te geven aan wat het model zegt. TACT post-trainde een tutor op een taxonomie van 13 strategieën plus een taxonomie van studentzetten met twee assen en won **20,30 punten** ten opzichte van zijn Qwen3.5-4B-basis, met een diagnostische benchmark die **de labels van de lerendetoestand achterhoudt** die tijdens de training beschikbaar waren, zodat het model de toestand uit de dialoog moet afleiden ([[tact-pedagogically-adaptive-esl-tutoring]]).

Dezelfde logica loopt door de alignment voor [[special-education|speciaal onderwijs]] ([[special-r1-rl-special-education]]) en door heuristisch-RL-werk dat modellen afstemt als socratische gidsen in plaats van als antwoordgevers ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Eén platform gaat verder en traint het beleid in plaats van het proza: een reinforcement-learning-agent kiest de volgende oefenopgave, dus wat de lerende daarna doet wordt bepaald door het getrainde model ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Dat laatste geval is de toets of u een tutor hebt ontworpen of een tekstgenerator. Als de enige output van het model proza is, woont de didactiek in uw orkestratiecode. Als het model de volgende taak kiest, zit de didactiek in de gewichten.

## Test het op gesprekslengte

Training maakt een model niet veilig over een lang gesprek. SafeTutors laat zien dat zelfs gespecialiseerde didactische modellen achteruitgaan over aanhoudende dialoog en schade kunnen veroorzaken door te veel antwoorden prijs te geven ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Didactische veiligheid]] moet op gesprekslengte worden gemeten, inclusief de beurten waarin de student het fout heeft, volhoudt of aandringt.

## Wat trainingsteams fout doen

Meer prompten houdt het uiteindelijk wel. Sycofantie blijft bestaan na prompten en alignment, en autoriteitsdruk opent het gedrag weer dat een contextwisseltest sloot. Het transcript van uw eigen druktest is het bewijs hiervoor in uw product.

Het leaderboardcijfer is het resultaat. 96,52% op CDPK beschrijft prestatie op de didactiektaken van één benchmark. Uw studenten treffen uw curriculum, uw notatie en een student die twintig minuten vastzit.

Meer data is het antwoord wanneer de sporen dun zijn. Eindantwoorden hielden bij elke datagrootte de accuratesse op misvattingen onder 30%. Wat het resultaat veranderde was redenering op stapniveau in de voorbeelden; de corpusgrootte heeft het nooit bewogen.

De studentrol is het moeilijke deel, dus train die als laatste. De student overgeneraliseerde aangeleerde fouten totdat juiste voorbeelden bij één op de vier verschenen. De tutorrol hield 93% tot 98% onder dezelfde omstandigheden, wat erop wijst dat de tutor de gemakkelijkere helft is om te trainen en de simulator de kant is die u moet controleren.

Het eindcheckpoint is het resultaat. De eerste RL-fase bereikte 94,13% en SFT bracht dat naar 96,20%, dus het meeste bewoog zich vóór de laatste ronde. Bewaar de scores per fase; zij zeggen welke fase de winst verdiende en welke u de volgende keer kunt schrappen.

## Wat er op u afkomt

**"Wij kunnen ons RL niet veroorloven."** Begin dan met de onderdelen die niets kosten: sporen op stapniveau in uw data, één label voor doelgedrag per voorbeeld, en een beloning die u in woorden hebt opgeschreven voordat u haar in code schrijft. De vergelijking van SWIM laat zien dat SFT alleen een 7B-model naar 0,474 brengt, wat een echte winst is en nog steeds onder 0,618 ligt.

**"Het model van onze leverancier weigert al antwoorden te geven."** Post-training door leveranciers optimaliseert behulpzaamheid, en weigeren te antwoorden is niet wat behulpzaamheidsscores belonen. Test het gedrag in uw eigen gesprekken; het antwoord staat in het transcript, niet in de modelkaart.

**"Met distillatie komen we het grootste deel van de weg."** Pedagogy-R1 is een distillatie op 1,5B en 7B en een redelijk startpunt. Wat zij erft is de didactiek van de leraar, inclusief alles wat die leraar fout deed, en u zult een benchmark nodig hebben om te zien welke delen zijn overgedragen.

**"Langgesprekstests zijn te duur om vaak te draaien."** Draai ze één keer per modelwijziging, met een vast script en een vaste set vijandige beurten, en diff de transcripten. De kosten zitten in het eerste keer schrijven van het script.

**"De docent zei dat het als een chatbot voelt."** Dat is een verslag over de vorm van het gesprek, en de vorm van het gesprek is beleid. Tel hoeveel beurten er verstrijken voordat het model een stap overdraagt.

## Wat u deze week kunt doen

**1.** Voer de druktest uit: fout antwoord, student houdt vol, student beroept zich op autoriteit, student vraagt om het antwoord. Bewaar het transcript.

**2.** Schrijf uw beloning als drie Engelse zinnen en controleer daarna of uw code die drie dingen meet.

**3.** Audit een steekproef van uw trainingsvoorbeelden op redenering op stapniveau. Rapporteer het aandeel dat een foute stap en een diagnose daarvan bevat.

**4.** Voeg één label voor doelgedrag per voorbeeld toe, te beginnen met scaffolding, en log de verdeling.

**5.** Zet de tussentijdse scores per fase in de modelkaart, naast de laatste.

## Waar u verder kunt gaan

[[making-ai-better-at-supporting-learning|Hoe maken we AI beter in het ondersteunen van leren in ons eigen vak?]] vraagt of training überhaupt de juiste hefboom is, en [[developing-ai-tutor|een AI-tutor ontwikkelen]] behandelt de tegenhanger in interactieontwerp, die hetzelfde begeleidende gedrag uit scaffolding en hintladders haalt in plaats van uit gradiënten. [[checking-whether-educational-ai-works|Nagaan of educatieve AI werkt]] gaat over het meten of het gedrag werkelijk is veranderd, en [[llm-training-and-fine-tuning|LLM-training en fine-tuning]] is de conceptpagina achter dit alles.
