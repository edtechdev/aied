---
title: "Hoe kunnen we AI beter maken in het ondersteunen van leren binnen ons eigen vak"
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
updated: "2026-10-29T14:57:55-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Er staat een ticket: ‘fine-tune het model op onze cursusmaterialen.’ Het budget is goedgekeurd, een GPU is volgende maand geboekt, en een promovendus is gevraagd een dataset samen te stellen. Niemand in het gesprek heeft gevraagd wat een gewone prompt scoort, of wat een zoekopdracht op trefwoorden scoort, op dezelfde vragen.

Stel die twee vragen eerst. In deze kennisbank is de kloof tussen een algemeen model en een model dat een cursus kent vooral een probleem van gronding en prompting, en het bewijs voor die volgorde is ongewoon direct: een studie naar een cursusassistent vond dat retrieval, en niet het model, de eerste-orde beslissing was, en een algemeen model zonder gronding scoorde *onder* een eenvoudige TF-IDF-baseline.

Training is echt en soms nodig. Het is het derde of vierde ding dat u probeert, en het werk hieronder is zo geordend dat u ontdekt welke trede u werkelijk nodig hebt voordat u het rekenbudget van het kwartaal uitgeeft.

## De korte versie

**1.** Log wat een gewone prompt scoort, en wat een triviale lexicale methode scoort, voordat u iets verandert. Dat tweede getal houdt u eerlijk.

**2.** Zet retrieval over uw eigen materialen vóór het model. Het is de grootste afzonderlijke winst die hier wordt gerapporteerd voor de kosten, en het is omkeerbaar.

**3.** Ontwerp de prompt tegen uw rubriek en itereer tot de verbetering stopt. Het plateau is het signaal dat training iets kan toevoegen.

**4.** Pas de gewichten aan met [[llm-training-and-fine-tuning|LoRA]] wanneer het doel stabiel en smal is: een formaat, een rubriek, een leesniveau, een domeinwoordenschat.

**5.** Train na wanneer het probleem gedrag is en niet inhoud, en schrijf de beloning tegen een benchmark waarvan u verwacht dat die te bespelen is.

**6.** Bouw de trainingsset op stapniveau. Data met alleen antwoorden leert een misconceptie niet aan.

## Haal een baseline die u echt kunt verslaan

Voordat u iets verandert, logt u wat een gewone prompt teruggeeft. Log daarna wat een triviale methode teruggeeft.

De studie naar de [[shen-sustainable-ai-knowledge-base-cs-education-2026|cursuskennisbankassistent]] is alleen hierom al het lezen waard. Een lokaal LLM zonder retrieval haalde **52,3%** nauwkeurigheid. Een TF-IDF-baseline, een lexicale methode van decennia oud, haalde **55,4%**. Het model was slechter dan de klassieke methode.

Sla deze stap over en u kunt niet zeggen of uw fine-tune hielp. Erger nog, u kunt een systeem uitleveren dat een zoekopdracht op trefwoorden verslaat en dat pas ontdekken wanneer een assistent het ter sprake brengt. Twee getallen in een spreadsheet, in een middag verzameld, beschermen de rest van het budget.

## Grond het model in uw eigen materialen

Het toevoegen van [[rag|retrieval-augmented generation]] over de cursusmaterialen, zonder enige fine-tuning, tilde datzelfde systeem van 52,3% naar **66,6%**. Die winst kwam uit een index, en ze komt met een eigenschap die een trainingsrun niet heeft: wanneer uw documenten veranderen, herindexeert u.

Twee andere resultaten wijzen dezelfde kant op. Een PRISMA-review van 23 empirische studies naar het aanpassen van AI voor [[writing-education|schrijfonderwijs]] vond **prompt engineering dominant (N = 13), vóór fine-tuning (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Waar een kennisbank actueel moet blijven, is retrieval de enige hendel die actueel blijft zonder een trainingsklus opnieuw te draaien.

Retrieval heeft ook een pedagogische vorm. Een model gronden in uw eigen uitgewerkte voorbeelden en rubrieken is hoe het binnen de [[scaffolding|scaffolding die u hebt ontworpen]] blijft, antwoordend op het niveau dat u hebt gezet in plaats van af te drijven naar algemeen advies. Die afwijking is de meest gehoorde klacht over kant-en-klare tutoren, en het is vaker een retrievalprobleem dan een gewichtenprobleem.

## Schrijf de prompt tegen uw rubriek, en let op het plateau

Promptwerk is geen voorbereiding die u doet terwijl u op de GPU wacht. Twee resultaten laten zien wat het alleen al oplevert:

- **Op de rubriek gerichte prompting, iteratief samen verfijnd, verhoogde de overeenstemming tussen LLM en mens op ontwerpwerk van studenten van 54,75% naar 81,25%** (Cronbachs alfa 0,393 naar 0,798), zonder enige fine-tuning ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Een op literatuur gebaseerde aangepaste prompt ontlokte doel-[[misconceptions|misconcepties]] bij wiskunde met **0,98** aanwezigheid, tegen **0,40** bij een brede prompt ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Het praktische signaal is het **plateau**. In de studie naar itembouw stopte iteratieve promptverfijning met verbeteren, en fine-tuning van GPT-4.1 *op de geoptimaliseerde prompt* voegde daarna de resterende winst toe ([[gpt-item-generation-l2-listening-2026]]). Een plateau na echt promptwerk is bewijs dat training ruimte heeft om iets toe te voegen. Naar training grijpen voordat u er een bereikt is gokken, en gokken kost een maand.

Let op wat het resultaat over itembouw impliceert voor de volgorde. De fine-tune was gebouwd op de geoptimaliseerde prompt, dus het promptwerk was niet verspild toen het team uiteindelijk trainde. De goedkope trede is ook de specificatie voor de dure.

## Pas de gewichten aan wanneer het doel stabiel en smal is

Aanpassing loont wanneer u wilt dat het model een eigenschap betrouwbaar vasthoudt: een leesniveau, een uitvoerformaat, een domein dat het mist. De terugkerende bevinding is dat **gerichtheid het wint van omvang**.

- Drie **8B**-modellen die waren fine-getuned op een door experts ontworpen leescurriculum voor kinderen presteerden beter dan zero-shot GPT-4o en Llama 3.3 70B op moeilijkheidsgerelateerde maten, met verwaarloosbare veiligheidsproblemen. De auteurs noemen dit **beheersbaarheid boven schaal** ([[llm-children-reading-story-generation]]).
- Een instructiedataset van **24.795 voorbeelden**, gegrond in Indiase kennissystemen, leverde een **7B**-fine-tune op die **6,39** scoorde bij een extern panel van vijf beoordelaars, binnen **0,15** van een sterk algemeen referentiemodel tegen een fractie van de uitrolkosten. Hetzelfde basismodel scoorde **bijna nul op domeinspecifieke dimensies** zonder de fine-tune ([[iks-instruct-dataset-indian-knowledge]]). Die kloof tussen algemeen bekwaam en hier bekwaam is de hele zaak voor domeinaanpassing.
- Een enkele [[llm-training-and-fine-tuning|LoRA]]-adapter, getraind op ongeveer **3.900** samengevoegde beoordeelde voorbeelden, bracht vijf kleine open modellen (4B tot 30B) op het niveau van of beter dan een menselijke beoordelaar bij twee informatica-examens ([[llm-graders-computer-science-exams-2026]]). Eén adapter, één dataset, meerdere basismodellen: dat is de vorm van uitrol die een klein team kan draaien.

Het woord *stabiel* in de kop draagt het gewicht. Formaat, rubriek, leesniveau en domeinwoordenschat zijn stabiele doelen. Proza vol oordeel heeft zo'n doel niet, en daar faalt aanpassing, zoals de volgende twee secties laten zien.

## Verander het gedrag wanneer de antwoorden het probleem zijn

Aanpassing leert een model *wat het moet produceren*. Natraining leert het *hoe het zich moet gedragen*. Voor tutoring is dat onderscheid het hele probleem: algemene modellen zijn nagetraind op menselijke voorkeur voor behulpzaamheid, wat betekent snel antwoorden, en onderwijzen vereist het antwoord achterhouden.

De sterkste onderwijskundige resultaten in dit corpus zitten hier. Het beloningsmodel van EduQwen gaf expliciet prioriteit aan **sturende reacties boven directe antwoorden**, en de drietrapspijplijn haalde **96,52%** op de CDPK-benchmark tegen **90,55%** van Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). De schrijfsimulator van SWIM ging van op de rubriek gegronde prompting (beste QWK **0,577**) naar supervised fine-tuning (**0,474 ± 0,023**) naar reinforcement learning (**0,618 ± 0,005**) over elk kenmerk en elke prompt ([[swim-student-writing-simulation-2026]]).

Lees de SWIM-getallen zorgvuldig, want de middelste stap ging achteruit. Supervised fine-tuning op demonstraties maakte de simulator slechter dan de prompt waarmee hij begon, en alleen het beloningssignaal herstelde het verlies en versloeg daarna de baseline. Als uw plan stopt bij supervised fine-tuning, is het plan misschien een omweg.

## Superviseer op stapniveau

Eén bevinding is hier gemakkelijk te missen en duur om te negeren: **kwaliteit van supervisie wint van kwantiteit**. Instructie-getunede modellen leerden algebraïsche misconcepties alleen wanneer ze waren getraind op **oplossingssporen op stapniveau**. Getraind op alleen eindantwoorden bleef de nauwkeurigheid **onder 30% bij elke datagrootte** ([[misconception-acquisition-dynamics-llms-2026]]).

Als uw trainingsvoorbeelden paren van vraag en juist antwoord zijn, traint u het verkeerde, en meer voorbeelden repareren dat niet. Wat u nodig hebt is het tussenwerk: de verkeerde afslag, de stap waar de student afdwaalde, de correctie. Dat verzamelen is een data-engineeringprobleem met een pedagogische beperking, en het betekent meestal sessies loggen in plaats van antwoordsleutels schrapen.

## Waar aanpassing stil faalt

Dit is het deel dat het enthousiasme overslaat.

**Proza vol oordeel.** In WrAFT leverde hetzelfde project dat met succes fine-tunede voor het *scoren* van essays (QWK 0,84) afgekapte en onontleedbare output toen het fine-tunede voor *feedback*, terwijl direct prompten van Claude 3.7 de feedback opleverde die docenten het beste vonden ([[wraft-automated-writing-evaluation-argumentative-2026]]). Fine-tuning leerde het model een score te raken, en scoren was het enige dat het leerde.

**Transfer tussen modellen.** Schaal is geen betrouwbare voorspeller van downstream-prestatie onder LoRA-aanpassing, en **identieke hyperparameters gaven kwalitatief ander gedrag over architecturen heen** ([[aiawe-automated-writing-evaluation]]). Een recept dat op één model werkte is geen recept.

**Architectuur boven parametertal.** Fine-tuning van drie open tekst-naar-beeldmodellen op 1.000 van onderschriften voorziene beelden uit de nucleaire techniek verbeterde Stable Diffusion XL substantieel, gaf beperkte winst voor SD-v3.5-Medium, en leverde **helemaal geen meetbare verbetering voor Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Het probleem was validatie.** Een frontier-GPT-4 zonder training produceerde ongeveer **35%** te algemene, onjuiste of het antwoord verradende hints bij het schrijven van tutorfeedback, en de eigen geautomatiseerde kwaliteitscontroles waren het oneens met menselijk oordeel ([[reddig-maclellan-personalized-feedback-llm-2026]]). Dat is een filterprobleem, en een LoRA lost dat niet op.

Het patroon over alle vier: aanpassing beweegt een model betrouwbaar naar een doel dat u kunt specificeren en scoren. Het voegt geen oordeel toe, en een pijplijn zonder controle levert nog steeds slechte output.

## Begroot de aanpassing eerlijk

Voor de aanpassingstrede is de lat lager dan de meeste teams denken: **een paar honderd tot een paar duizend voorbeelden en één GPU**. LoRA traint een klein aantal toegevoegde parameters en laat de basisgewichten bevroren, dus meerdere modellen kunnen vanuit één adapter worden bediend.

Rang is een afweging en geen knop om te maximaliseren. Winst per miljoen adapterparameters daalde monotoon naarmate de rang steeg, en uitlijning op cursusniveau was een beslissing over schaal en rang in plaats van een gratis upgrade ([[lora-finetuned-control-systems-course-qa-2026]]).

Welke lagen u aanpast is ook een echte keuze. Alleen **de laatste vier Transformer-lagen** bijwerken van een BERT-gebaseerde discourse-analysator versloeg zowel het aanpassen van alleen de bovenste laag als fine-tuning over de volle diepte ([[bert-discourse-english-teaching-2026]]). Drie configuraties, drie verschillende resultaten, en de goedkoopste won.

De kosten die u gemakkelijk onderschat is de evaluatie, en die is groter dan de rekening voor compute. Zie [[checking-whether-educational-ai-works|Hoe weten we of een educatieve AI correct werkt en niet alleen goed scoort?]]

## Kalibreer wat u verwacht

Model- en promptkeuze samen verklaren slechts ongeveer **15%** van de misuitlijning tussen LLM's en leerwinst van studenten, en in die studie maakten benchmarkweging en ensembles met unanimiteit-stemming de uitlijning *slechter* ([[educational-llm-alignment]]). Pretrainingsdata is de dominante hendel op hoe een model zich gedraagt, en het is de enige hendel die u niet kunt overhalen.

Niets daarvan pleit tegen het werk hierboven. Het pleit tegen de verwachting dat een fine-tune een ontwerpprobleem oplost. Als het probleem is dat uw tutor te graag antwoordt, kan training dat aanpakken. Als het probleem is dat uw lerenden zich er niet mee bezighouden, doet training dat niet, en het getal van 15% zegt dat het geld elders beter is besteed.

## Wat teams verkeerd doen

Fine-tuning is hoe u een model uw cursus leert. Retrieval over uw eigen materialen tilde hetzelfde systeem van 52,3% naar 66,6% zonder enige training, en een prompt die tegen een rubriek was verfijnd bewoog de overeenstemming van 54,75% naar 81,25%. Training leert gedrag en formaat veel betrouwbaarder dan inhoud.

Een groter basismodel maakt dit alles overbodig. Een 8B-model dat was fine-getuned op een leescurriculum voor kinderen versloeg zero-shot GPT-4o en Llama 3.3 70B op moeilijkheidsmaten, en een 7B-fine-tune landde binnen 0,15 van een sterk algemeen referentiemodel tegen een fractie van de uitrolkosten. Omvang en pasvorm zijn verschillende assen, en slechts één ervan is per token te koop.

Meer data repareert een verkeerd opgebouwde trainingsset. Supervisie met alleen antwoorden liet de nauwkeurigheid onder 30% bij elke datagrootte in de misconceptiestudie. Schaal repareert geen doel dat de informatie mist die het model nodig heeft.

Een recept dat op één model werkte, werkt op het volgende. Identieke hyperparameters gaven kwalitatief ander gedrag over architecturen heen, en dezelfde fine-tuningmethode verbeterde het ene beeldmodel substantieel en deed meetbaar niets voor het andere. Draai het recept opnieuw op uw basismodel of u gokt.

Supervised fine-tuning is de veilige tussenstap vóór reinforcement learning. In SWIM scoorde de gesuperviseerde fase 0,474 tegen 0,577 van de prompt die ze verving, en alleen het beloningssignaal herstelde dat. De tussenstap kan u een maand en een regressie kosten.

## Wat er op u afkomt

**‘Het budget is goedgekeurd voor fine-tuning, dus laten we fine-tunen.’** Besteed eerst een week aan de baseline en de index. Als retrieval het getal beweegt, is de fine-tune een latere beslissing met betere informatie, en u hebt een sterker pleidooi ervoor of een goede reden om de GPU terug te geven.

**‘Ons probleem is dat studenten het niet gebruiken.’** Training verandert wat het model produceert. Het getal van 15% beschrijft hoeveel model- en promptkeuze verklaren in de misuitlijning met leerwinst, en betrokkenheid valt daarbuiten. Meet waar studenten afhaken voordat u compute koopt.

**‘Wij kunnen werk van studenten niet naar de API van een leverancier sturen.’** Het sterkste LoRA-resultaat hier kwam van open modellen in het bereik van 4B tot 30B, en één adapter bediende er meerdere. Die uitrolvorm is beschikbaar voor een team met één GPU en geen verwerkersovereenkomst.

**‘Prompten is een truc; echt werk betekent trainen.’** De review van 23 studies naar schrijfonderwijs vond prompting de dominante aanpak en fine-tuning daarachter, en de grootste gerapporteerde winst op deze pagina kwam uit een index. Zowel de review als de studie naar de cursusassistent ordende die tredes naar gemeten winst.

**‘We hebben prompten geprobeerd en het liep vast, dus we hebben training nodig.’** Dat is de juiste lezing, en het is het enige geval waarin de klim gerechtvaardigd is. Neem de geoptimaliseerde prompt mee de fine-tune in zoals het itembouwteam deed, en verwacht dat de winst kleiner is dan het promptwerk was.

**‘Onze cursusmaterialen zijn inconsistent, dus retrieval levert rommel op.’** Dat doet het, en retrieval erft de kwaliteit van het corpus. Het corpus opschonen is goedkoper dan een model trainen om eromheen te werken, en de winst van 52,3% naar 66,6% is gemeten over gewone cursusmaterialen en niet over een samengestelde set.

## Wat u deze week kunt doen

**1.** Draai een baseline met alleen prompting en een baseline met trefwoorden op 50 echte vragen uit uw cursus, en schrijf beide getallen op.

**2.** Richt retrieval op de materialen die u al hebt en draai dezelfde 50 opnieuw, zodat de winst tegen uw eigen baseline wordt gemeten.

**3.** Zet de rubriek in de systeemprompt en itereer een week. Stop wanneer twee rondes niets toevoegen.

**4.** Controleer uw trainingsset op sporen op stapniveau. Als het paren van vraag en antwoord zijn, is de dataset niet klaar.

**5.** Schrijf de enige eigenschap op die u betrouwbaar wilt vasthouden, en beslis of het gedrag of inhoud is. Die beslissing kiest de trede.

## Waar u verder kunt gaan

[[training-ai-tutors-to-guide-rather-than-answer|Hoe trainen we een AI-tutor om studenten te begeleiden in plaats van hen te antwoorden?]] behandelt de natrainingshelft in detail. [[checking-whether-educational-ai-works|Hoe weten we of een educatieve AI correct werkt?]] behandelt hoe u kunt vaststellen of iets daarvan werkte. [[developing-ai-tutor|Wat zijn best practices voor het ontwikkelen van een effectieve AI-tutor?]] is de interactieontwerpkant van hetzelfde doel, en [[designing-educational-ai-software|Wat zijn best practices voor het ontwerpen van educatieve AI-software?]] behandelt het omringende systeem. De volledige conceptpagina is [[llm-training-and-fine-tuning]].
