---
title: "Wat zijn de beste praktijken voor het ontwikkelen van een effectieve AI-tutor?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:57:54-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatische machinale vertaling van deze Engelse pagina, nog niet nagekeken door een moedertaalspreker.*

Uw tutor staat drie weken voor een pilot. De chat werkt, het model legt een afgeleide netjes uit, en de interne demonstratie kreeg applaus. Dan stelt iemand van het onderwijscentrum de vraag waar uw specificatie geen veld voor heeft: lost een student na een semester met dit systeem nog een opgave op wanneer het niet in de ruimte is? Wat u hebt, is een lijst met functies. Wat u niet hebt, is één zin die zegt wat de lerende aan het eind alleen moet kunnen.

Een tutor is een beleid dat om een [[conversational-ai|chatbot]] heen zit, en dat beleid bepaalt of er geleerd wordt. Benoem het cognitieve werk dat de lerende moet doen, dwing het systeem af dat dit werk ook gebeurt (een poging vóór hulp, een hintladder die afbouwt, een controle die het model niet kan vervalsen), en evalueer met de tutor uitgeschakeld. De kwaliteit van het model bepaalt hoe goed het gesprek aanvoelt. Het beleid bepaalt wat de student in juni kan.

## De korte versie

**1.** Schrijf de doelstelling als een uitspraak over ongeassisteerde prestatie en leid daar elke functie uit af. Als een functie niet naar die ene zin te herleiden is, is het een demofunctie.

**2.** Bouw het leerlingmodel op bewijs dat u kunt loggen, en leg elke diagnose vast als een hypothese met een betrouwbaarheidswaarde in plaats van als een feit.

**3.** Leg de hulpladder vast in code, met benoemde treden, en laat de interface de lerende voor elke stap omlaag iets laten betalen.

**4.** Fundeer de inhoud in uw eigen materialen en laat rekenwerk, algebra en codecontrole over aan deterministische hulpmiddelen die niet kunnen hallucineren.

**5.** Test onderwijskundige fouten over hele gesprekken: het weglekken van antwoorden, sycofantie, het versterken van misconcepties, didactische drift.

**6.** Meet met een terugnamefase en een uitgestelde toets, niet met een tevredenheidsscore.

## Schrijf de doelstelling als een uitspraak over ongeassisteerde prestatie

Drie lijsten, geschreven voordat iemand een model kiest:

- Wat lerenden daarna moeten weten of kunnen.
- Welk cognitief werk zij zelf moeten verrichten.
- Wat de tutor voor hen mag doen.

De literatuur over [[intelligent-tutoring]] maakt het punt dat effectiviteit afhangt van [[pedagogy|pedagogisch]] ontwerp en niet van modelcapaciteit alleen, en de fout is gemakkelijk per ongeluk te bouwen. Een tutor die is geoptimaliseerd voor "maak de opgave af" ondermijnt een tutor die is geoptimaliseerd voor "leer de opgave oplossen", terwijl hij elke functionele test doorstaat die u schrijft, want beide leveren correcte eindantwoorden. Het verschil zit in wat de student deed tussen de vraag en het antwoord.

De tweede lijst is waar ontwikkelingsteams concreet worden. Neem een beheersingslabel als "beheersing van afgeleiden" en weiger dat het de juiste afgeleide produceren betekent. Splits het in herkennen wanneer een afgeleide passend is, haar interpreteren als een ogenblikkelijke veranderingssnelheid, de regel kiezen, de procedure uitvoeren, uitleggen waarom de keuze juist was, de redelijkheid controleren, en haar toepassen op een onbekende opgave. Elk daarvan is iets aparts om te loggen, en elk vraagt een andere reactie wanneer het ontbreekt. Deze ontleding is ook de verdediging tegen de [[correct-answer-trap-misconceptions|val van het juiste antwoord]], waarbij een lerende via een foutieve redenering op het juiste antwoord komt en uw analytics een succes registreren. [[correct-answer-trap-ai-tutor|De val van het juiste antwoord vangen]] en [[zhang-tutormoments-2026|Wanneer hulp niet helpt]] beschrijven beide varianten van die fout in productie.

## Bouw het leerlingmodel vóór het gesprek

Het leerlingmodel bevat twee soorten toestand: schattingen per concept (limiet: in ontwikkeling, machtsregel: beheerst, productregel: in ontwikkeling, kettingregel: niet aangetoond) en hypotheses over misconcepties met het bewijs en de betrouwbaarheid erachter. Houd ze gescheiden. De conceptinschatting stuurt de keuze van moeilijkheid. De hypothese stuurt de volgende vraag.

Wees voorzichtig met een [[llm]] de diagnose alleen te laten stellen. [[benchmark|Benchmarken]] vond dat LLM-tutors duidelijk juiste redeneringen konden herkennen, maar soms geldige alternatieven verwierpen of onjuiste redeneringen accepteerden. Een model dat het goede geval herkent en het dubbelzinnige geval verkeerd leest, laat precies de studenten falen die de hulp nodig hebben. Voor domeinen met gevolgen is de architectuur die standhoudt **gestructureerde diagnose plus flexibele LLM-dialoog**, de opzet die [[yasir-llm-tutoring-agents-2026|Juist goedkeuren, de rest missen]] beschrijft: uw eigen detector stelt vast wat de student waarschijnlijk deed, en het model schrijft het gesprek rond die bevinding.

Geef de diagnose een expliciete volgorde die het model niet kan overslaan: detecteren, verifiëren, reageren. Het model mag een [[misconceptions|misconceptie]] als hypothese voorstellen, maar moet die tegen het werkelijke werk van de student of tegen een gerichte vraag verifiëren voordat de tutor erop reageert. Zonder die stap verzint het systeem bewijs en begeleidt het de student vervolgens voor een fout die hij niet maakte, wat zowel nutteloos als lichtelijk beledigend is.

Bewijs dat de moeite loont om te loggen, ruwweg in volgorde van nut: recente pogingen met hun tussenstappen, aangetoonde kennis per concept, hulpzoekgedrag (op zichzelf een signaal over vertrouwen), en zelfgerapporteerd vertrouwen waar u dat verzamelt. Pas moeilijkheid en ondersteuning aan op dat verslag, en behandel de laatste prompt van de lerende als één invoer daarvoor. Een enkele prompt is een slechte schatter van wat een student weet, en een tutor die daarop reageert, slingert heen en weer.

## Leg de hulpladder vast en laat de interface ervoor laten betalen

Schrijf de treden op voordat u een prompt schrijft, want de ladder is een productbeslissing met benoemde toestanden, en een tooninstelling kan die niet uitdrukken. Een werkbare reeks:

1. Zelfstandige poging.
2. Metacognitieve vraag over wat de student al heeft geprobeerd.
3. Conceptuele aanwijzing.
4. De relevante regel benoemen.
5. Een deel van de opgave opzetten.
6. Uitgewerkte tussenstap.
7. Uitgewerkte oplossing.
8. Student legt de oplossing uit.
9. Student lost een vergelijkbare opgave zelfstandig op.

Ondersteuning bouwt af naarmate de bekwaamheid toeneemt, en dat is het mechanisme dat centraal staat in [[scaffolding]]. Een uitwerking zien toont geen beheersing aan, dus elk gesprek dat trede zeven bereikt, is u trede negen schuldig voordat het als afgerond telt.

Het causale bewijs om de ladder überhaupt te bouwen komt uit een veldexperiment waarin een onbeschermde GPT-interface de geassisteerde wiskundeprestatie verhoogde en de latere ongeassisteerde toetsprestatie verlaagde. Een tutor die hints gaf, nam die leerstraf grotendeels weg ([[generative-ai-guardrails-harm-learning|Generatieve AI zonder vangrails kan leren schaden]]). De beperking is architectonisch. Hetzelfde model, met ander hulpgedrag, leverde tegengestelde resultaten op de maatstaf die ertoe doet.

Een groter gerandomiseerd veldexperiment met meer dan 6.000 middelbare scholieren op een op beheersing gericht oefenplatform laat zien hoe de ladder er in de logs uitziet. Studenten die aan AI-ondersteuning waren toegewezen, vorderden langzamer en probeerden minder vragen, en zij antwoordden nauwkeuriger. Het duidelijkste mechanisme was de juistheid van de volgende poging na een fout: er waren minder pogingen nodig om terug te keren naar een correct antwoord. Dat patroon is een productieve vertraging, en het is de signatuur die een hintladder hoort achter te laten ([[making-ai-tutoring-productive-mastery-math-2026|AI-tutoring productief maken]]).

Dezelfde studie levert een waarschuwing op over uw eigen dashboards. Drie juiste antwoorden op rij eisen verhoogde de door het platform gedefinieerde beheersing sterk, zonder aantoonbare winst op een uitgestelde toets een week later. Het sterkste bewijs op de uitgestelde toets verscheen alleen waar de AI binnen de beheersingsworkflow zat (coëfficiënt 0,085), niet waar zij als losstaande toegang beschikbaar was. Als uw succesmaatstaf een teller van reeksen is, levert u een systeem dat de reeks optimaliseert.

Interfacewrijving hoort in dezelfde ontwerpronde. Onbeperkte hints achter een zichtbare knop maken de hele ladder tot een snelkoppeling, en voortijdige hintverzoeken met oppervlakkig lezen hangen samen met lagere [[learning-gains|leerwinst]]. `[Hint][Hint][Hint][Show Answer]` vervangen door de vragen "wat hebt u al geprobeerd?" en "welk deel houdt u tegen?" (een regel kiezen, de vergelijking opzetten, de algebra doen, het concept begrijpen) kost één scherm en stuurt de student naar de trede die hij werkelijk nodig heeft. Het levert u ook de loggegevens op die vertellen welke trede hij gewoonlijk overslaat.

## Laat de controleerbare delen aan een controleur over

Fundeer generatie in door de docent goedgekeurd materiaal: hoofdstukken uit het boek, cursusnotities, uitgewerkte voorbeelden, terminologie, goedgekeurde methoden, notatie, opdrachtregels, beleid en [[curriculum-design|curriculumbronnen]]. Retrieval-augmented generation tegen dat corpus verlaagt [[hallucination-risk|hallucinatierisico]] en neemt het niet weg, zoals [[rag]] uiteenzet. Toon citaties of herkomst in de interface waar een student een bewering zou kunnen controleren, want de citatie is wat de fundering achteraf controleerbaar maakt.

Fundering doet ook werk dat nauwkeurigheidsmaatstaven missen. Een cursus heeft goedgekeurde methoden, en een tutor die een wiskundig geldige techniek introduceert die de cursus niet gebruikt, heeft de student iets geleerd waarop hij punten verliest. Retrieval uit de cursuslaag is hoe de tutor binnen de methodeset blijft.

Voeg voor domeinen met formeel controleerbare antwoorden deterministische hulpmiddelen toe: rekenmachines, symbolische wiskundesystemen, code-uitvoering, kennisgrafen, op regels gebaseerde validators en [[discipline-specific-aied|domeinspecifieke]] oplossers. De taakverdeling is het belangrijke deel. Het LLM verzorgt uitleg en dialoog. De symbolische engine verifieert algebraïsche gelijkwaardigheid, afgeleiden, integralen, oplossingen van vergelijkingen, kritieke punten en numerieke benaderingen. Een foute tussenstap die de verifier vangt, wordt een leermoment. Een foute tussenstap die niets vangt, wordt een misconceptie die de student mee het tentamen in neemt.

## Vraag de lerende iets te doen met de feedback

Feedback die "Juist", "Onjuist" of "Goed gedaan" zegt, is een scoremoment in de kleren van onderwijs. De kennisbasis behandelt [[feedback]] als een lus van aanbod en gebruik: feedback ondersteunt leren wanneer studenten haar begrijpen en er iets mee doen, en de tweede helft is de helft die systemen gewoonlijk overslaan. Bouw de tutor zo dat hij de betrokken redeneerstap benoemt, zegt wat heroverwogen moet worden, één concrete volgende actie geeft, en de lerende vraagt te voorspellen of uit te leggen voordat de feedback zichtbaar wordt.

De volgorde die dit draagt is: lerende eerst, AI tweede, lerende weer. De student genereert, kiest, verantwoordt, evalueert of reflecteert; de tutor reageert; de student doet iets met de reactie. Ontwerp de beurtstructuur zo dat dit niet optioneel is. Een systeem waarin het model drie alinea's kan produceren als antwoord op één vraag, leert de student vragen en lezen.

Het langetermijndoel is internalisering. Lerenden zouden op den duur de ondervragings- en [[problem-solving|probleemoplossingsstrategieën]] van de tutor zelf moeten uitvoeren, wat het [[agency|handelingsvermogen]]-argument is en de reden dat de ladder een bovenste trede heeft waarop de tutor zwijgt.

## Ontwerp voor wat er in beurt veertig gebeurt

Didactische veiligheid is een aparte testset naast gewone chatbotveiligheid, en de meeste teams leveren met alleen de tweede. Toxiciteit en weerbaarheid tegen jailbreaks zeggen niets over de vraag of de tutor een antwoord geeft aan een student die twee keer vraagt, instemt met een foute methode omdat de student zelfverzekerd klonk, over een lang gesprek uit de methodeset van de cursus wegdrijft, of een lerende in [[cognitive-offloading|cognitieve offloading]] duwt. [[ai-sycophancy|Sycofantie]] is degene die er als eerste doorheen komt, want instemming leest als vriendelijkheid en uw preferentiedata belonen haar.

Test op het weglekken van antwoorden, het versterken van misconcepties, buitensporige instemming, onpasselijke moeilijkheid, offloading, bevooroordeelde behandeling, verlies van handelingsvermogen van de lerende, didactische drift en overmoed in onjuiste uitleg. Voer de tests uit op langere gesprekken, niet op losse beurten, want didactische fouten hopen zich op: de eerste tien beurten kunnen voorbeeldig zijn en de elfde kan het gesprek ongedaan maken. Een tutor moet tegelijk vriendelijk en juist zijn, ook wanneer de lerende op een misconceptie aandringt. [[pedagogical-safety]] en [[hazra-safetutors-pedagogical-safety-2026|Veiligheid van AI-tutors en didactische schade]] zetten de taxonomie van fouten uiteen.

## Zet de data-architectuur in hetzelfde ontwerpdocument

Verzamel alleen leerlinggegevens die didactisch noodzakelijk zijn, en kun zeggen waarom elk veld bestaat. Waar u permanent geheugen of een [[student-modeling|leerlingmodel]] aanhoudt, maakt u het doel ervan zichtbaar voor de lerende, geeft u hem passende controle erover, beschermt u gevoelige informatie, legt u de bewaartermijn vast, en leidt u beslissingen met gevolgen naar een docent of een ander [[human-in-the-loop-ai|menselijk]] controlepunt. Een leerlingmodel dat stilzwijgend een vertrouwensschatting verzamelt die een student nooit ziet, is een probleem voor gegevensbescherming en een didactisch probleem.

Controleer gedrag over taalachtergronden, bekwaamheidsniveaus, culturele contexten, behoeften op het gebied van [[accessibility|toegankelijkheid]], en niveaus van [[prior-knowledge|voorkennis]] en AI-ervaring. Verschillende prestaties op dezelfde doelstelling zijn een bug met een student eraan vast, en die zal niet in uw samengevoegde nauwkeurigheidscijfer verschijnen.

Eén toegankelijkheidsbeslissing verdient een eigen regel: maak geavanceerd [[prompt-engineering|prompten]] niet tot voorwaarde voor goed onderwijs. Als de tutor alleen goed lesgeeft wanneer een student een zorgvuldige prompt schrijft, hebt u een systeem gebouwd dat studenten bevoordeelt die al weten hoe ze met modellen moeten praten. De tutor hoort lerenden te helpen vruchtbare vragen te formuleren, wat ook een [[metacognition|metacognitieve]] vaardigheid is die de moeite waard is.

## Meet het interval na het wegnemen

Sessiemetingen vertellen u niet of het ding werkt. Antwoordnauwkeurigheid, gesprekslengte, studentenvoorkeur, tevredenheid, taakvoltooiing en [[student-engagement|betrokkenheid]] stijgen allemaal bij systemen die niets leren, omdat studenten hulp prettig vinden en hulp gemakkelijk te meten is. Evalueer ongeassisteerde prestatie, uitgestelde retentie, transfer naar nieuwe problemen, correctie van misconcepties, zelfstandigheid van de lerende, gebruik van feedback, en [[differential-effects-across-learner-groups|verschillende effecten tussen groepen lerenden]]. [[ai-ed-evaluation]] heeft de methoden, en [[ai-tutor-behavioral-evaluation|De ontbrekende evaluatieas]] beargumenteert dat gedrag het construct is.

Twee studies scherpen de regel tegen [[self-report-measures|zelfrapportage]] en korte termijnen aan. Een pilot met 38 beginnende programmeerstudenten vond een sterke samenhang tussen het gebruik van [[generative-ai|generatieve AI]] en *ervaren* leren (rs=0,802, p<0,001), terwijl de indicatoren van zelfstandige voortgang zonder docentondersteuning het laagst scoorden. De auteurs noemen de kloof een illusie van bekwaamheid en epistemische schuld, en het is precies de kloof die een tevredenheidsmaatstaf beloont ([[genai-cognitive-tutor-programming-2026|Generatieve AI als informele cognitieve tutor]]).

Fundamenteler is dat de meeste evaluatie stopt op het moment dat de ondersteuning eindigt. [[cognitive-washout-ai-skill-decay-2026|Dynamiek van cognitieve uitspoeling]] benoemt het ongemeten interval na het wegnemen en formaliseert vier uitkomsten: elastische terugkeer, gedeeltelijk plateau, latente scaffold en overherstel. De uitspoelingscurve bevat een hersteltijdconstante, een term voor de volledigheid van het herstel, en een hysterese-index die de herleerinspanning vergelijkt met de oorspronkelijke inspanning. Omdat omkeerbaarheid de ernst bepaalt, beargumenteert het raamwerk dat geplande ongeassisteerde oefening gedoseerd moet worden naar de herstelcurve in plaats van als principe te worden bediscussieerd. Uw evaluatieplan heeft een fase zonder ondersteuning nodig naast een directe nameting, en [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|het gerandomiseerde bewijs dat korte ondersteuning latere ongeassisteerde prestatie drukt]] is de reden om die vroeg te plannen.

## Geef docenten iets om te bewerken

Laat docenten vóór de ingebruikname realistische leerlingprofielen testen, gangbare misconcepties, randgevallen, vijandige prompts, dubbelzinnige reacties en langdurige tutoringsgesprekken. Log de didactische fouten en voer ze terug in systeem-prompts, tutoringbeleid, kennisbronnen, [[guardrails|vangrails]], regels voor het leerlingmodel en modelkeuze. Een vloeiend antwoord kan didactisch nog steeds fout zijn, en een docent is de enige beoordelaar die dat kan zien.

[[teacher-intervention-k12-ai-based-instruction-2026|Lee's systematische review van 29 K-12-onderzoeken]] beschrijft waaruit dat toezicht bestaat en waar het breekt. Interventie door de [[teacher-role|docent]] is een zich herhalende cyclus van vier fasen: monitoren, beoordelen, interveniëren en orkestreren. AI-meldingen, [[visualization|dashboards]] en geautomatiseerde scores "leiden niet automatisch tot didactisch handelen." De sterkste docentstrategie die de review vindt, is didactische vertaling: chatbotfeedback selecteren, herzien, aanvullen, samenvatten of verwijderen in plaats van haar door te geven.

Daaruit volgen twee ontwerpwaarschuwingen, en beide spreken de gebruikelijke routekaart tegen. Meer AI-informatie is niet beter: systemen die voortdurend diagnoses uitstuurden, overbelastten docenten en trokken de aandacht weg van hun eigen observatie. Prioriteer wat de moeite van handelen waard is, maak het interpreteerbaar, en bied aanbevelingen aan in een vorm die een docent kan accepteren, wijzigen, uitstellen of verwerpen. Meer docentondersteuning is ook niet beter: interventie uitstellen zodat studenten zelfstandig kunnen werken, is zelf expertise. Structurele voorwaarden, dat wil zeggen tijd om gegevens te bekijken, klassengrootte, en de mogelijkheid om de groepen die hulp nodig hebben fysiek te bereiken, maken deel uit van de interventie en zijn geen achtergrondlogistiek. Een dashboard dat is gebouwd voor een docent zonder vrij uur, wordt niet geopend.

## Geval één: een calculustutor, waar verificatie goedkoop is

Een tutor voor eerstejaars calculus hoort te verhogen wat studenten na het wegnemen zelfstandig kunnen oplossen en uitleggen, niet het aantal correct afgeronde opgaven te maximaliseren. Wiskundetutoring is bijzonder kwetsbaar voor overmatige scaffolding, voortijdig hintgebruik en een onjuiste diagnose van de redenering van de student, en alle drie zijn in uw logs zichtbaar als u kijkt ([[math-education]]).

**Fundering en verificatie.** Een opbouw in zes lagen: cursusmateriaal en docentbeleid, dan een retrievallaag, dan een opgavenengine en leerlingmodel naast een symbolische verifier en diagnose-engine, dan een laag met didactisch beleid, dan conversationele generatie, dan de student, en dan terug naar het leerlingmodel. De verifier is de reden dat dit ontwerp haalbaar is. Hij beslist of een expressie gelijkwaardig is, een afgeleide correct, een integraal berekend, een kritiek punt gevonden, en hij doet dat zonder de mening van het model te vragen.

**Eén interactie.** Voor het differentiëren van $f(x)=(x^2+1)\\sin x$ geeft een conventionele chatbot het antwoord weg. Een op leren gerichte tutor redeneert intern dat de student beide componenten differentieerde maar de resultaten vermenigvuldigde, een mogelijke [[misconceptions|misconceptie]] waarbij de productregel als $f'g'$ wordt toegepast, en stelt eerst een diagnostische vraag: welke regel geldt wanneer twee functies worden vermenigvuldigd? Dan schrijft de student de productregel symbolisch op, zet $u$ en $v$ op, en pas daarna verifieert de tutor de uiteindelijke expressie. Merk op hoeveel van het tutoren gebeurde voordat er enige modeltekst de student bereikte.

**Meerdere representaties.** Verbind symbolische procedures met de formule, de grafiek, de tabel, een verbale interpretatie en een fysische context van veranderingssnelheid. Procedurele vlotheid en conceptueel begrip zien er identiek uit op een vel met juiste antwoorden en lopen uiteen op de transferopgave.

**Het dashboard.** Toon samengevoegd bewijs in plaats van ondoorzichtige oordelen, bijvoorbeeld: productregel, 62% aangetoonde beheersing; gangbare patronen, 18% laat één term weg, 11% vermenigvuldigt afgeleiden. Individuele diagnoses gaan uit als hypotheses met het ondersteunende bewijs, wat ze ook controleerbaar maakt voor een docent ([[explainable-ai|uitlegbaarheid]] is hier voor de docent belangrijker dan voor de student).

**Het evaluatieplan.** Prestatie met de tutor, prestatie op vergelijkbare opgaven zonder hem, uitgestelde retentie, transfer naar onbekende opgaven, kwaliteit van de conceptuele uitleg, correctie van misconcepties, passend zoeken naar hulp tegenover voortijdig [[help-seeking|hulpzoeken]], weglekken van antwoorden, percentages fout-positieven en fout-negatieven in de diagnose, en verschillende uitkomsten. De vergelijking die over het project beslist, is geassisteerd tegen later ongeassisteerd. Een student die met de tutor van 60% naar 95% gaat en alleen op 60% blijft, heeft geen tutoring gehad.

## Geval twee: een schrijfcoach, waar de fase de toestemming bepaalt

Schrijven heeft geen enkel juist antwoord, dus verificatie is beoordeling en verschuift het ontwerpwerk naar fasering. De kennisbasis ziet schrijven als een cognitief, sociaal en retorisch proces, wat betekent dat een AI-schrijfsysteem leren kan ondersteunen en ook precies het denken kan wegnemen dat de opdracht beoogde te ontwikkelen ([[writing-education]], [[coach-not-crutch-ai-writing]]).

**Een bekwaamheidsmodel.** Volg argumentatie (specificiteit van de these, aansluiting van bewering en bewijs, tegenargument), organisatie (alineafocus, logische voortgang, overgangen), bewijs (relevantie van bronnen, integratie, interpretatie), revisie (revisie op alinea- en zinsniveau, beoordeling van feedback) en stijl (helderheid, grammatica, stem). Elk daarvan wordt een apart signaal in het leerlingmodel, en dat is wat gerichte feedback überhaupt mogelijk maakt.

**Fundeer de coach in de opdracht.** Haal de instructies op, het beoordelingsformulier van de docent, cursusliteratuur, citeervereisten, genreconventies, voorbeelden van de docent en het beleid voor AI-gebruik, zodat feedback kan zeggen dat het beoordelingsformulier van uw docent vraagt om elke centrale bewering te verbinden met bewijs uit ten minste twee cursusteksten, in plaats van generieke verwachtingen te verzinnen. Generiek advies is de standaardfout van een ongefundamenteerd schrijfgereedschap, en studenten merken dat binnen twee sessies.

**Stel toestemming per fase in.** AI-betrokkenheid in verschillende fasen beïnvloedt het ervaren eigenaarschap anders. Ondersteuning bij de planning verlaagt eigenaarschap minder dan ondersteuning bij het schrijven, en door AI gegenereerde tekst bij het schrijven geeft de grootste daling ([[ai-writing-support-stage-ownership-2026|Van planning tot revisie]]). Die bevinding vertaalt zich direct in een toestemmingstabel. Bij de planning stelt de coach vragen, vergelijkt hij standpunten, betwist hij aannames en bekritiseert hij schema's, en genereert hij het betoog niet. Bij het schrijven levert de lerende eerst tekst en ontwikkelt de coach die in plaats van haar over te nemen. Bij de revisie diagnosticeert de coach en stopt daar: onduidelijke beweringen, ontbrekend bewijs, bewijs dat de bewering niet ondersteunt, organisatieproblemen, de tekst tegen het beoordelingsformulier. Bij het redigeren, na de revisie, behandelt hij grammatica, interpunctie, bondigheid en de opmaak van citaties.

**Een uitgewerkte interactie.** Voor een essay over het verplicht stellen van [[online-teaching-and-learning|online cursussen]] herschrijft een generiek systeem de alinea van de student tot gepolijste tekst en doet het intellectuele werk. Een coach zegt wat werkt, benoemt het belangrijkste probleem (de alinea geeft redenen maar legt nooit uit waarom die een universiteitsbrede verplichting rechtvaardigen), stelt een revisievraag, en vraagt de student een zin in eigen woorden af te maken. Het betoog blijft waar het hoort.

**Geprioriteerde feedback.** Eén sterk punt om te behouden, één probleem met grote impact, één vraag die het oordeel van de schrijver vereist, één concreet revisiedoel. Niet veertig opmerkingen. Een student die veertig opmerkingen krijgt, trieert ze op lengte, en die triage heeft niets te maken met wat ertoe doet.

**Laat de student de feedback beoordelen.** [[feedback-literacy|Feedbackgeletterdheid]] is een leerdoel op zich. Vraag periodiek of de lerende het eens is met een suggestie en waarom, en laat hem haar verwerpen. De uitkomst is [[evaluative-judgment|evaluatief oordeel]] in plaats van navolging, en het is ook de enige verdediging tegen een coach die overtuigd ongelijk heeft.

**Behoud de stem.** Onderscheid fouten, helderheidsproblemen, retorische keuzes en stijlvoorkeuren, en laat de laatste twee met rust. Een coach die retorische keuzes corrigeert, homogeniseert schrijven naar de stijl die het model prefereert, en hij richt de meeste schade aan bij [[multilingual-learning|meertalige]] schrijvers en niet-standaard retorische tradities ([[ai-feedback-quality|Kwaliteit van AI-feedback]] is de algemene versie van dit probleem).

**Leer van de revisies.** Bewaar de revisiegeschiedenis in plaats van alleen eindessays. Een terugkerend patroon van bewijs dat wordt ingebracht maar niet geïnterpreteerd en dat over drie essays verbetert, is het nuttigste signaal dat een schrijfsysteem kan hebben, en het is gratis.

**Evaluatie.** Kwaliteit van AI-ondersteund en later ongeassisteerd schrijven, vermogen om zwakke punten in onbekend schrijfwerk te vinden, kwaliteit van revisies, gebruik van feedback, vermogen om revisies uit te leggen, eigenaarschap, afhankelijkheid van AI-tekst, behoud van stem, bias tussen dialecten en meertalige schrijvers, overeenstemming met het oordeel van de docent, en uitgestelde transfer. Het ontwerp dat daar antwoord op geeft, heeft drie armen: zelfstandig schrijven, AI die de tekst genereert, en een coach. Alle drie groepen schrijven daarna een nieuw essay zonder AI. Als de door AI gegenereerde groep in de praktijk wint en zonder AI verliest, heeft het systeem de prestatie verbeterd en niet het leren. Patronen op klasniveau uit het dashboard (41% heeft ondersteuning nodig bij het verbinden van bewering en bewijs) zijn een signaal van [[formative-assessment|formatieve beoordeling]] voor de docent.

## De twee opbouwen vergelijken

| Ontwerpvraag | Calculustutor | Schrijfcoach |
|---|---|---|
| Primair leerobject | Wiskundige concepten en probleemoplossing | Betoog en schrijfproces |
| Verificatie | Vaak objectief controleerbaar | Vereist gewoonlijk contextueel oordeel |
| Deterministische hulpmiddelen | Symbolische wiskunde-engine, rekenmachine | Grammatica-, citatie- en rubriekcontroles |
| Belangrijkste AI-rol | Redeneren diagnosticeren en ondersteunen | Revisie diagnosticeren en ondersteunen |
| Grootste risico | De oplossing weggeven | De tekst voor de lerende schrijven |
| Belangrijke actie van de lerende | Oplossen en uitleggen | Schrijven, beoordelen en reviseren |
| Leerlingmodel | Concepten, procedures, misconcepties | Argumentatie, bewijs, organisatie, revisie |
| Belangrijkste vangrail | Poging vóór oplossing | Studenttekst vóór AI-herschrijving |
| Transfertoets | Nieuwe calculusopgaven zonder AI | Nieuwe schrijftaak zonder AI |
| Succescriterium | Zelfstandig wiskundig redeneren | Zelfstandig schrijven en evaluatief oordeel |

Beide systemen gebruiken dezelfde verzameling [[ai-technologies|AI-technologieën]] en belichamen verschillend didactisch beleid, omdat de disciplines verschillende soorten denken vereisen. De regel die generaliseert, is: identificeer de cognitieve activiteit die het leren oplevert en ontwerp de AI om die activiteit te ondersteunen zonder haar uit te voeren. Die regel gaat boven elk bepaald model, elke prompt, elk agent-framework of elke interface.

## Wat ontwikkelingsteams verkeerd doen

De didactiek zit in de systeem-prompt, dus een zorgvuldige prompt is een didactisch ontwerp. Een prompt is één laag van een beleid dat ook bepaalt welk bewijs u verzamelt, welke trede de interface aanbiedt, wat de verifier controleert en wat het dashboard toont. Een goed geschreven prompt bovenop een leerlingmodel dat niets opslaat, levert een vloeiende tutor zonder geheugen van de student, en de ladder begint elke sessie opnieuw.

Een beter model lost de diagnose op. De benchmarkbevinding hierboven vond LLM-tutors die juiste redeneringen herkenden maar geldige alternatieven verwierpen en onjuiste accepteerden, wat een foutpatroon is dat schaal niet vanzelf herstelt. Gestructureerde diagnose bestaat omdat het oordeel van het model het deel is dat u niet kunt controleren.

Tevredenheid en voltooiing bewijzen dat het ontwerp werkt. Ze bewijzen dat studenten hulp kregen. De pilot met 38 programmeerstudenten vond ervaren leren sterk samenhangend met gebruik, terwijl zelfstandige voortgang het laagst scoorde, en de beheersingsstudie vond dat een reeksvereiste de platformbeheersing verhoogde zonder winst op de uitgestelde toets. Bouw de meting na het wegnemen in de pilot in, anders leert u de verkeerde les efficiënt.

Retrieval maakt de antwoorden betrouwbaar. Het verlaagt [[hallucination-risk|hallucinatierisico]] en laat de rest van het foutoppervlak intact: een opgehaalde passage kan verkeerd worden gelezen, een geldige techniek kan fout zijn voor de cursus, en het model kan nog steeds overtuigd ongelijk hebben over een stap die het zelf afleidde. Retrieval is een ondergrens.

De veiligheidssuite doorstaan betekent dat het veilig is voor studenten. Gewone veiligheidstests dekken toxiciteit en jailbreaks. De didactische fouten die hier tellen, het weglekken van antwoorden, sycofantie en drift, zijn er onzichtbaar voor, en zij hopen zich op over een gesprek in plaats van in één beurt te verschijnen.

Betrokkenheid is het doel. Gesprekslengte en sessieaantal zijn de goedkoopste maten om te instrumenteren, en daarom worden ze tot doelen verheven. Het [[scaffolding]]-argument zegt dat de ideale sessie korter wordt naarmate de student vordert, dus een stijging in betrokkenheid is evengoed een symptoom.

## Wat er op u afkomt

**"Wij leveren over zes weken en dit is werk voor een kwartaal."** Het meeste van de architectuur is goedkoop. Een poort op de poging, een geconfigureerde ladder, retrieval over notities die u al hebt, en een logschema met een veld voor het wegnemen zijn dagen werk. De dure onderdelen (leerlingmodel, verifier, dashboard) kunnen achter een feature flag voor één cursus beginnen, en de pilot is informatiever als de goedkope delen klaar zijn.

**"Studenten zijn er dol op en de voltooiing stijgt."** Beide feiten zijn verenigbaar met een systeem dat vragen goed beantwoordt en niets leert. De studie met 6.000 studenten vond langzamere voortgang en minder geprobeerde vragen naast betere nauwkeurigheid, dus een daling in voltooiing is ook niet automatisch slecht nieuws. Rapporteer ongeassisteerde prestatie naast de betrokkenheidscijfers en laat de twee elkaar in het openbaar tegenspreken.

**"Wij kunnen geen gerandomiseerde trial doen."** U kunt zonder trial een vergelijking binnen dezelfde student doen: dezelfde doelstelling, geassisteerd tijdens de eenheid, twee weken later ongeassisteerd getoetst, met de geassisteerde score ernaast gerapporteerd. Dat ontwerp beantwoordt de productvraag en heeft geen controlegroep nodig. Wat het u niet kan vertellen, is het tegenfeitelijke scenario voor studenten die de tutor nooit gebruikten.

**"Het model is een API van een leverancier, dus het hulpgedrag ligt buiten ons bereik."** De treden zitten in uw orkestratielaag, en het resultaat van het vangrail-experiment kwam uit het veranderen van wat de tutor mocht zeggen, niet uit het wisselen van model. Verwacht dat de post-training van de leverancier naar snel antwoorden trekt, want daarop is het afgestemd, en leg de terughoudendheid in uw eigen code.

**"Docenten gaan nog een dashboard niet gebruiken."** Ze gebruiken er geen dat voortdurend diagnoses uitstuurt, wat volgens de K-12-review de aandacht van hun eigen observatie wegtrok. Geef ze een klein aantal interpreteerbare signalen, een manier om elke aanbeveling te accepteren of te verwerpen, en tijd in de week om ernaar te kijken.

**"Wij hebben geen vakinhoudelijke experts in huis."** Dan geeft de tutor generieke methode en drijft de notatie van de cursus binnen een semester weg. Een vakdocent voor twee dagen in de ontwerpfase, die de misconceptielijst en de lijst met goedgekeurde methoden schrijft, is de goedkoopste post in het project en degene die teams het eerst schrappen.

## Wat u deze week kunt doen

**1.** Schrijf de zin over ongeassisteerde prestatie voor de pilot en zet die in de specificatie, boven de functielijst.

**2.** Voeg een poort op de poging toe en log die. Registreer of de student een poging deed vóór de eerste hint, en welke trede hij bereikte.

**3.** Vervang de hintknop door de vraag naar het blokkerende punt, en log het antwoord als categorie.

**4.** Plan één ongeassisteerde controle twee weken na de eenheid en zet die met een verantwoordelijke in de agenda.

**5.** Reserveer twee dagen met een vakdocent om de misconceptielijst en de lijst met goedgekeurde methoden te schrijven.

## Waar u verder kunt gaan

[[designing-educational-ai-software]] behandelt de regels op softwareniveau waaraan een tutor moet voldoen, en [[designing-ai-into-learning]] behandelt waar de tutor in een cursusreeks zit. [[evaluating-ai-interventions-methods]] en [[checking-whether-educational-ai-works]] behandelen of het ding werkt. Als uw probleem is dat het model te snel antwoordt, werken [[making-ai-better-at-supporting-learning]] en [[training-ai-tutors-to-guide-rather-than-answer]] de trainingskant van dezelfde vraag uit.
