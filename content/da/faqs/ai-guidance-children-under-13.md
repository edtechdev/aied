---
title: "Hvordan bør forældre og lærere håndtere AI med børn under 13?"
created: "2026-09-16T15:25:00-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, incorporating-ai-literacy, how-ai-impacts-students]
weight: 75
type: faq
foundations: [ai-literacy]
pedagogy: [social-emotional-learning]
methods: [meta-analysis-systematic-review]
ethics: [privacy, pedagogical-safety]
research_method: [literature review, experiment]
audience: [instructors, administrators, policymakers, parents and families]
level: [preschool, primary education, k 12]
institutions: [educational-policy-ai, governance, regulation]
updated: "2026-10-29T12:23:32-04:00"
translation_of: faqs/ai-guidance-children-under-13
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Leverandørens vilkår siger, at værktøjet er for brugere på 13 år og derover. I sidste uge viste en lærer i tredje klasse dig de digte, hendes klasse havde genereret med det, en forælder skrev for at spørge, om det talende legetøj, hendes søn fik i fødselsdagsgave, er sikkert, og bestyrelsen vil have en policy på én side inden sit novembermøde.

Tre spørgsmål er filtret ind i den anmodning: hvad en seksårig må gøre med disse systemer, hvad skolen skylder familier, hvis børn møder AI derhjemme, og hvad man gør, når et forbud ikke er det svar, man kan forsvare.

Det korte svar, du kan give bestyrelsen: differentier adgangen efter alder, undervis børnene i, hvordan disse systemer er bygget, før du giver dem et, og hold en voksen i loopet, hvor end barnet ikke kan vurdere outputtet. Et generelt forbud er den mulighed, der har mindst evidens bag sig. Der findes ingen undersøgelse af aldersbaserede forbud i denne vidensbase, og det meste af denne aldersgruppes eksponering sker derhjemme, hvor en skoleregel ikke rækker.

## Den korte version

**1.** Skriv reglen for hvert aldersbånd, ikke for K-12 som helhed. Under 9: leg, skabelse, håndgribelig kodning og forklaringer på, hvad en maskine er. Fra 9 til 12 år: stilladseret, for det meste ikke-generativ aktivitet på godkendte platforme, plus eksplicit undervisning om data og om, hvad AI ikke kan vide.

**2.** Sæt generativ chat sidst i rækkefølgen, og kun med en navngivet voksenrolle og et angivet formål.

**3.** Screen hvert værktøj før ibrugtagning på fire spørgsmål: hvilke barnespecifikke farer der blev testet, hvad det gør med stemme- og transskriptionsdata som standard, hvad det koster familierne, hvis gratisniveauet forsvinder, og om det fungerer på de sprog, dine familier taler.

**4.** Offentliggør, hvad skolen bruger, og hvordan en familie kan spørge. Åbenhed er en institutionel forpligtelse.

**5.** Hold detektion ude af håndhævelsesplanen.

## Sæt reglen efter aldersbånd

Lagdelt design er ikke noget, du selv skal opfinde. [[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang og Wu (2026)]] evaluerede en alderslagdelt AI-kompetenceressource bygget til Taiwans K-12-system i to udgaver: en grundskoleudgave for 9- til 12-årige med stilladserede, platformbaserede, ikke-generative aktiviteter og en avanceret udgave for 13- til 18-årige med etisk ræsonnement og superviseret brug af [[generative-ai|generativ AI]].

Deres evaluering er en enkelt spørgeskemaundersøgelse efter eksponering med 831 deltagere, og grundskolekohorten vurderede materialerne signifikant højere på præstationsforventning, indsatsforventning, legesyghed og adfærdsintention, med opfattet legesyghed som det stærkeste korrelat til intention i begge grupper. Forfatterne er eksplicitte om begrænsningen: cirka tredive minutters eksponering, der måler accept snarere end [[learning-gains|læring]], etisk kompetence eller faktisk brug. Læs det som evidens for, at denne rækkefølge kan undervises og er tiltalende; det siger intet om, hvorvidt rækkefølgen virker.

De to udgaver viser også, hvad grænsen er til for. Det yngste bånd får platformbaserede aktiviteter, der er stilladserede og ikke-generative, så et barn lærer, hvad systemet gør, uden et system, der taler igen. Det avancerede bånd knytter etisk ræsonnement til superviseret generativ brug. Medarbejdere, der forventer, at engagement følger værktøjets sofistikering, oplever som regel det modsatte.

Det, lagdelingen køber dig, er en forsvarlig rækkefølge af operationer. Masser af skoler kører den baglæns, køber chatbot'en om efteråret og underviser om den om foråret, og evidensen om den rækkefølge står længere nede på denne side.

## Start de yngste børn med leg, skabelse og maskiner

[[play-ai-pre-k-kindergarten-ai-literacy-2026|Play With AI]] er et legcentreret børnehavepensum bygget på [[embodied-learning|leg med kroppen]], håndgribelig kodning som proceduremæssig bro, guidet dialog som reflekterende [[scaffolding]] og lærersamdesign som ankeret for [[sustainability|bæredygtighed]]. På tværs af designcyklusser steg lærernes selvvurderede tryghed, og børnene ræsonnerede om AI som menneskeskabt, byggede sekventering og fejlfinding gennem håndgribelig kodning og reflekterede over retfærdighed gennem guidet dialog. [[ai-play-framework-early-childhood-2026|AI-Play]] tager den afkoblede vej med skærmfri aktiviteter, som forældre kan køre derhjemme.

For de yngste er risikoen tro. [[creative-project-approach-ai-early-childhood-2025|Yang, Li og Lee (2025)]] advarer om, at generative sociale robotter kan producere indhold, som præoperationelle børn accepterer som sandt, at disse systemer ikke er udviklingsmæssigt kalibreret i den feedback, de giver, og at deres pris og tilgængelighed udvider eksisterende [[digital-divide|skel]]. [[ai-toys-child-development-2026|Xu, Girouard og Shi (2026)]] beskriver mekanismen som en omfordeling af handlekraft i legen: kontrollen flytter sig mod barn-legestøj-interaktionen, begrænser legen, når legetøjet organiserer den, og muliggør den, når legetøjet følger barnets fantasi. Det samme legetøj kan gøre begge dele, og derfor er den voksnes tilstedeværelse den designvariabel, du kontrollerer.

Voksen sam-brug betyder noget specifikt her: at sidde sammen med barnet, spørge hvad legetøjet eller skærmen lige gjorde, og holde skabelsen synlig. Stille overvågning fra døren er ikke den samme ordning, og for en fireårig rammer den slet ikke tro-problemet.

Undervisning i, hvordan maskiner virker, hører også til i dette bånd. [[tsingidou-ct-robotics-kindergarten-2026|Tsingidou et al. (2026)]] finder problembaseret læring, historiefortælling og stilladsning som de mest brugte strategier i [[educational-robotics|robotformidlet]] computationel tænkning i børnehaven, med sekventering, fejlfinding og algoritmisk design som de mest vurderede færdigheder, oftest gennem TechCheck-K. Mange af værktøjerne i den litteratur blev udviklet ad hoc og aldrig valideret. Springer du undervisningen over, dukker risiciene senere op som [[cognitive-offloading|overafhængighed]].

## Flyt de 9- til 12-årige over på godkendt, for det meste ikke-generativt arbejde

Det er det bånd, hvor pensumevidensen er stærkest. [[demir-akar-ai-media-literacy-children-2026|Demir og Akar (2026)]] kørte et 18-timers, 5E-baseret kritisk mediekompetenceprogram for 36 tyrkiske fjerdeklasser, der dækkede databeskyttelse, sikker kommunikation og medieetik, med Cohens *d* mellem grupper på 1,12 for læsning, 1,18 for skrivning og 1,31 for samlet kompetence. Et program, der passer inden for et enkelt semester og rapporterer effekter af den størrelse, er det mest opmuntrende resultat på denne side.

9- til 12-årige får stilladseret eksponering på platforme, som skolen har screenet, med de generative dele reserveret til senere og under supervision. Når børn kan læse, argumentere og tjekke en påstand, bliver arbejdet at lære dem, hvad et system gør, og værktøjet kan komme ind som undersøgelsesobjekt i stedet for hjælper.

Grænsen følger kompetence mere end fødselsdag. En 9-årig, der læser flydende, kan undervises i, hvad et træningskorpus er, og hvorfor et system, der forudsiger det næste ord, kan producere et selvsikkert forkert svar. En 6-årig kan ikke, og derfor kommer leg- og skabelsesbåndet først, og derfor kører børnehavepensummet gennem håndgribelig kodning frem for skærme. Læsning, argumentation og selvmonitorering er de kapaciteter, du reelt inddeler børn efter, og alderen er den proxy, skoler kan administrere.

## Sæt reglen der, hvor eksponeringen faktisk er

Antag, at ansvaret vil være uklart, medmindre du fastlægger det skriftligt. I interview med 33 amerikanske K-12-lærere fandt [[k12-teachers-ai-companion-literacy-2026|Xiao et al. (2026)]], at 10 nævnte scenariet med den forældrevendte companion som det mest bekymrende, 17 sagde, at en lærer burde engagere sig, og 11 sagde, at det kommer an på. Deres synlighedstest placerede AI-brug i hjemmet uden for skolens jurisdiktion, medmindre der var observerbare effekter, og forældrene endte som primært ansvarlige, samtidig med at de blev beskrevet som uvidende eller overbelastede. Det er en jurisdiktionel tomhed, og en policy skrevet, som om den ikke findes, regulerer den nemme halvdel af problemet.

[[family-school-autonomy-support-genai-2026|Fan, Li og Zhang (2026)]] formaliserer ordningerne som additive, synergistiske og kompensatoriske modeller og siger rent ud, at den synergistiske version ikke har understøttende evidens. En fungerende familie-skole-ordning skal bygges med vilje, hvilket betyder at fortælle forældre, hvad de skal gøre derhjemme, ikke kun hvad de ikke skal gøre.

Åbenhed er skolens opgave, ikke familiens detektivarbejde. Skriv ned, hvilke værktøjer skolen bruger, hvilke data de beholder, og hvordan en familie kan spørge. [[privacy|Privatliv]], [[pedagogical-safety|pædagogisk sikkerhed]] og [[ai-use-disclosure|åbenhed om AI-brug]] dækker substansen, og [[equity-ethics-pedagogical-safety-research|syntesen om lighed, etik, privatliv og sikkerhed]] dækker, hvor tynd det meste af det er i praksis.

## Screen værktøjet, før du tager det i brug

Antag, at sikkerhedslaget ikke blev bygget til dine elever. [[child-safety-genai|En ramme for børnesikkerhedsevaluering forankret i ekspertvejledning og reelle hændelsesdata]] rapporterer, at de fleste AI-sikkerhedsrammer og benchmarks er rettet mod voksne brugere trods evidens for stærk ungdomsbrug, og at en national undersøgelse citeret i det arbejde fandt, at 72 % af amerikanske unge havde brugt AI-companions. Da tre Llama Guard-modeller blev testet på uddannelsesrelaterede usikre prompts, havde de svært ved at identificere dem.

Fire spørgsmål sparer dig en indkøbscyklus. Hvilke barnespecifikke farer blev testet? Hvad sker der med optagelser, transskriptioner og stemmedata som standard? Hvad vil det koste familierne, hvis gratisniveauet forsvinder? Virker det på de sprog, dine familier taler?

[[all-girls-genai-makerspace-gender-equity-2026|En case fra et makerspace for piger (Liu et al. 2026)]] viser, hvorfor de sidste tre ikke er fodnoter. Forældre rapporterede, at piger blev bange og talte mindre i kønsblandede miljøer, at en gratis billedgenerator droppede sine gratis funktioner til et betalt niveau, som nonprofiten ikke kunne absorbere, og at engelsksprogede prompts udelukkede familier, som programmet var ment at betjene.

Medarbejdernes selvtillid er en privatlivskontrol lige så meget som et træningsmål. [[preschool-teachers-ai-behavioral-intention-2026|En undersøgelse af dagtilbud]] finder, at opfattet anvendelighed og brugervenlighed er centrale for pædagogers intention om at bruge AI, at AI-selvvirkeevne er en meningsfuld prædiktor, at AI-angst hæmmer, og at subjektiv norm (kolleger og ledelse) former intentionen. Medarbejdere, der ikke kan vurdere et værktøj, opdager ikke, hvad det indsamler.

## Giv den voksne en defineret rolle

Lad rollen være udefineret, og noget andet tager den. [[paratutor-parent-child-tutoring|ParaTutor (Luo et al. 2026)]] adskilte forældre- og barneroller i LLM-formidlet matematikvejledning i hjemmet med 23 forældre-barn-dyader, børn i alderen 10 til 12 år, på tværs af fire betingelser. Generisk assistance havde tendens til at fortrænge forælderens vejlederrolle; grænsefladen med adskilte roller bevarede den. Forældre havde også svært ved indholdet og ved, hvordan man taler om det, hvilket er et designkrav snarere end en forældresvigt.

Companions, der læser med børn, har brug for samme omhu. [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]] fandt, at en fast peer-rolle-[[conversational-ai|AI-companion]] gav signifikant længere interaktioner, men en lavere andel af ord og sætninger fra eleven, og var stærkere på faktuel genkaldelse end på emotionel eller fremtidsorienteret refleksion. Deraf Parent Advisor-rollen i den foreslåede ramme, og det støttevakuum, artiklen navngiver for lærere og forældre.

Noget af dette arbejde tilhører mennesker uanset, hvad værktøjet kan. [[human-ai-complementarity-social-emotional-learning-2026|Raave og kolleger (2026)]] sammenlignede en generativ AI-samtaleagent med menneskelige undervisere, der faciliterede historiebaserede [[social-emotional-learning|social-emotionelle læringsaktiviteter]] med et statisk AI-barn: 18 simulationer pr. facilitator, 108 observationer, vurderet blindt for facilitatortype. Agenten var stærk på respektfuld tone og rutinemæssig proceduremæssig stilladsning. Menneskelige undervisere var stærkere i dybere SEL-undervisning, i at guide refleksion og i at opbygge social-emotionel viden. Tidlig SEL bør som standard bygge på komplementaritet, med den voksne som den, der holder den reflekterende del.

Rollen har brug for et navn på et stykke papir. Beslut, hvem der sidder sammen med barnet i en session, hvem der læser, hvad systemet har gemt, og hvem der svarer den forælder, der spørger, hvad der skete. I en grundskoleklasse er det som regel klasselæreren for de to første og skolelederen for det tredje. Skrevet ned overlever ordningen en medarbejders fravær.

## Hold barnets egen tænkning synlig

Mønstret at holde øje med er outputkvalitet, der stiger, mens uassisteret arbejde falder. [[stromberg-generative-ai-learning-penalty-secondary-2026|En sekundæranalyse med 26.811 elever]] fandt, at lektiescorer steg, mens eksamensscorer uden hjælpemidler faldt, og derfor er anbefalingen at overvåge input frem for kun produkter. I en grundskoleklasse betyder det at holde øje med kladden, forklaringen og revisionen og behandle et pludseligt poleret artefakt som et spørgsmål snarere end en præstation.

Skriveevidensen fra grundskolen støtter værktøjer brugt inde i undervisningen. [[elementary-writing-genai-systematic-review-2026|Et systematisk review af 8 studier af AI i skriveundervisning i grundskolen fra 2019 til 2025]] finder, at samtaleværktøjer støtter skriveøvelse, og at multimodale værktøjer udvider komposition ud over tekst, mens det konkluderer, at automatiseret vurdering stadig kræver [[human-in-the-loop-ai|menneskeligt tilsyn]] for retfærdighed og nøjagtighed. [[genai-writing-program-primary-l2-motivation-engagement|Et ni uger langt GenAI-støttet program i meningstilkendegivelse]] med 301 elever i 5. og 6. klasse hævede ideelt skriveselv og akademisk modstandsdygtighed og løftede adfærdsmæssig og emotionel engagement. Det flyttede ikke growth mindset, kognitiv eller metakognitiv engagement eller organisering, og forfatterne navngiver risiciene: overafhængighed, genvejssøgning og svækket selvmonitorering.

## Håndtér det forkerte svar, mens barnet ser på

At slette et dårligt output lærer et barn, at outputs enten er korrekte eller forbudte. At spørge, hvordan de selv ville tjekke det, lærer den vane, du gerne vil have. Et barn, hvis chatbot får en faktuel detalje forkert, kan sendes til to andre kilder og spørges, hvilken der er uenig, og vanen følger med til det næste system, der lyder selvsikkert.

Når et barn siger, at companionen »forstod« dem, er det samtalen, der skal føres. Et system, der forudsiger det næste ord, har ingen model af barnet, og det nyttige spørgsmål er, hvad det ville have skullet vide for at forstå. Hold det konkret og spring forelæsningen om neurale netværk over.

Flydende sprog køber tro, og det er mekanismen at holde øje med. [[lu-ai-multimodal-writing-critical-thinking-2026|Et studie af multimodal skrivning i 5. klasse]] fandt, at visualisering af børns historier gav vedvarende gevinster i fortolkning, analyse, evaluering og forklaring, uden gevinst i inferens: da billeder gjorde betydningen eksplicit, rapporterede børnene mindre behov for at udlede den. Et flydende AI-svar gør det samme arbejde og leverer den inferens, barnet ellers selv ville have lavet.

Nogle af de sværeste samtaler har et køretøj. [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] bruger robotformidlet anvendt drama til bystander-intervention mod mobning: børn ser et mobbescenarie opført af sociale robotter og øver forsvarsstrategier ved at styre en robotavatar. I en mixed-methods play-test med 18 børn i alderen 9 til 10 år støttede det selvvirkeevne, perspektivtagning og forståelse af konsekvenserne ved at forsvare. Robotter og rollespil bærer et svært emne med en voksen i rummet.

Intet af dette er en testet intervention til at lære et barn at tjekke et AI-svar. Det er, hvad evidensen om flydende sprog, tro og rollespil antyder, og medarbejdere bør behandle det som praksis snarere end bevis.

## Hvad du kan love bestyrelsen

[[young-people-learning-generative-ai-rapid-review-2026|Arthars og kolleger (2026)]] gennemgik 271 empiriske artikler om generativ AI fra førskole til 12. klasse og fandt ingen enkeltstående GenAI-effekt. Affektive gevinster er almindelige og svage indikatorer på læring; den mest konsistente evidens handler om forbedret umiddelbar præstation og produktkvalitet; evidensen om varig læring, [[transfer-of-learning|transfer]] og vedvarende [[self-regulated-learning|selvregulering]] er ujævn. Udfald afhænger af fem sammenfiltrede betingelser: den lærende, værktøjet, opgaven, de sociale arrangementer og den kulturelle og institutionelle kontekst. Deres ramme adskiller fire pædagogiske funktioner, at lære af AI, med den, om den eller ved at forme den, og spørger, om en elev overgiver, udliciterer eller udøver handlekraft.

For dette aldersbånd mapper det over på en rækkefølge: om og ved at forme først, af senere, voksen sam-brug hvor end barnet endnu ikke kan vurdere outputtet, og ingen påstande om varig læring ud fra et godt eftermiddagsprodukt.

Et bestyrelsespapir kan love en revisionsdato og en definition af succes, som din skole faktisk kan tjekke: lektioner undervist, lærere der kan svare på en forælders spørgsmål, dataanmodninger besvaret skriftligt. At påstå en læringsgevinst ville overskride hvert eneste studie, der citeres her.

Der findes ingen undersøgelse af aldersbaserede forbud i denne vidensbase. Intet her kan afgøre, om de forbud, der nu dukker op i nogle skolesystemer, virker, og den ærlige version af den sætning hører i dit bestyrelsespapir. Hvad evidensen viser, er, at alternativet til et forbud ikke er laissez-faire. [[moral-panic-genai-classroom|Studiet af GenAI-tilgængelighed kontra integration]] fandt, at det at gøre GenAI tilgængeligt uden at undervise eleverne i at bruge det var forbundet med signifikant lavere præstation på anvendte spørgsmål (ω² = 0,35), mens eksplicit undervisning i dets brug til opgaver som opsummering bragte anvendt præstation tilbage til før-GenAI-niveauer og overgik baseline på én sværere quiz. Dette aldersbånd kan undervises: fjerdeklasseprogrammet ovenfor gav effekter på *d* = 1,12 til 1,31.

## Hvad skolerne gør forkert

**»Under 13 betyder ingen AI.«** Den offentliggjorte lagdeling placerer ikke-generativ, stilladseret aktivitet i 9-12-båndet og reserverer generativ brug til 13 og derover. En skole, der forbyder alt, har ingen pensum på området, og dens børn møder værktøjerne derhjemme uden lektionen.

**»Værktøjet er compliant, så det er sikkert.«** De fleste rammer og benchmarks er rettet mod voksne, og tre Llama Guard-modeller havde svært ved uddannelsesrelaterede usikre prompts. Compliance-papirarbejde besvarer et indkøbsspørgsmål. Det besvarer ikke farespørgsmålet.

**»En policysætning er en policy.«** [[nash-preservice-teachers-classroom-ai-policies-2026|Nash og Burriss (2026)]] fandt, at 26 af 27 lærerstuderende tillod en vis AI-brug på lærerfastsatte vilkår, og én forbød det helt, med grænser sjældent operationaliseret: én policy tillod AI »for at få din tænkning i gang« og erklærede derefter »her bør grænsen gå« uden at sige hvor. [[genai-policies-higher-ed-computing|En komparativ analyse af institutionelle policyer og kursusbeskrivelser]] fandt, at institutioner bredt opmuntrede til GenAI-brug i 63 % af 116 policyer, mens halvdelen af 98 kursusbeskrivelser forbød det rent ud. [[adarkwah-genai-unesco-policy-2026|En UNESCO-rammeanalyse af 30 universiteters policyer]] tilføjer, at etik- og styringsprincipper er bredt vedtaget, mens inklusion, lighed, internetadgang og miljøpåvirkning ofte overses, med mange bestemmelser efterladt deklarative.

**»Forældrene dækker hjemmehalvdelen.«** De 33 lærere beskrev forældre som primært ansvarlige og samtidig som uvidende eller overbelastede. Den synergistiske familie-skole-model har endnu ingen understøttende evidens. Den skal bygges.

**»Seksårige kan ikke forstå, hvordan en maskine virker.«** Børn i børnehavepensummet ræsonnerede om AI som menneskeskabt, byggede sekventering og fejlfinding med håndgribelig kodning og reflekterede over retfærdighed gennem guidet dialog. Børnehaverobotlitteraturen finder sekventering, fejlfinding og algoritmisk design blandt de mest vurderede færdigheder i det bånd. Kapaciteten er der. Pensummet er det som regel ikke.

## Hvad der vil komme imod dig

**»Forbyd det. Det er den eneste forsvarlige linje.«** Der findes ingen undersøgelse af disse forbud, så ingen kan fortælle dig, at de virker, og håndhævelsesvejen er svag. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] argumenterer for, at detektion slet ikke bør bruges i uddannelse: dens estimater er probabilistiske og uverificerbare, fordi den virkelige teksts oprindelse er ukendt, dens brug krænker proceduremæssig retfærdighed, da detektorscorer ikke opfylder den standard, integritetsundersøgelser kræver, og detektion »beskytter ikke akademisk integritet; den underminerer den« og nedbryder [[trust|tillid]]. Et forbud regulerer også den mindst vigtige kanal, da companion-apps, AI-legetøj og familiens vejledning sker derhjemme, uden for skolens rækkevidde.

**»Alle andres børn bruger det allerede.«** Delvist sandt, og det tal, der normalt citeres, handler om unge: 72 % af amerikanske unge havde brugt AI-companions i den undersøgelse, der citeres i [[child-safety-genai|arbejdet om børnesikkerhed]]. Det er ikke din tiårige. Reviewet af 271 artikler fandt ingen enkeltstående GenAI-effekt, så hvad jævnaldrende gør, fortæller dig, hvad der er normalt, ikke hvad der er sikkert eller nyttigt.

**»Vi er en skole. Hvorfor kører vi en forældrekampagne?«** Fordi eksponeringen er der. Ti af 33 lærere nævnte scenariet med companionen i hjemmet som det mest bekymrende, de stod i, og synlighedstesten placerede det uden for deres jurisdiktion. En skole, der offentliggør, hvad den bruger, hvad den anbefaler derhjemme, og hvordan man stiller spørgsmål, regulerer mere af problemet end en, der skriver en regel for sit eget netværk.

<a id="do-not-build-your-rule-on-a-detector"></a>

**»Overvågning holder dem ærlige.«** [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed og Temimi (2026)]] modellerer det som ufuldstændig information: eleven ved, hvordan arbejdet blev produceret, og institutionen ser kun artefakten. Afskrækkelse går gennem detektorens evne til at skelne skjult brug fra legitimt arbejde snarere end dens rå fangstrate, og når falske positiver stiger hurtigere end sande positiver, gør stærkere overvågning skjul relativt mere attraktivt. [[qu-wang-disclose-or-not-genai-2026|Qu og Wang (2026)]] fandt, at manglende åbenhed blandt 409 bachelorstuderende var strategisk tilpasning til jævnaldrendes normer og lav fortolkningstillid snarere end moralsk forsømmelse.

**»Vores familier har ikke råd til det, du anbefaler.«** Makerspace-casen er advarslen: et gratisniveau forsvandt til et betalt niveau, som nonprofiten ikke kunne absorbere, og engelsksprogede prompts udelukkede familier. Indkøb, der forudsætter et betalt niveau, er en policy, der udvider det [[digital-divide|skel]], du forsøgte at lukke.

**»Vores lærere er ikke uddannet til noget af dette.«** Ofte sandt, og løsningen er mindre, end det ser ud. I børnehavepensummet steg lærernes selvvurderede tryghed på tværs af designcyklusser, og det er, hvad samdesign gør, som en træningsdag ikke gør. I dagtilbud forudsiger selvvirkeevne intentionen om at bruge AI, og angst hæmmer den. Start med én lektion i én klasse og lad de medarbejdere, der kører den, skrive vejledningen.

**»Al denne forsigtighed er en moralsk panik over legetøj.«** Der er reel usikkerhed her, og reviewet af 271 artikler er den ærlige opsummering af den. Argumentet for at undervise frem for at forbyde hviler på et jurisdiktionelt hul, en mislykket håndhævelsesvej og et fjerdeklasseprogram, der flyttede kompetence med mere end en standardafvigelse på atten timer.

## Hvad du kan gøre i denne uge

**1.** Skriv aldersbåndene ned på én side: hvad under-9-årige gør, hvad 9- til 12-årige gør, og hvad der kræver en navngivet voksen og et angivet formål.

**2.** Tag de fire screen-spørgsmål med til den, der underskriver softwarekontrakten, og bed om svar skriftligt.

**3.** Send familierne en note på én side, der lister, hvad skolen bruger, hvad den beholder, og hvem man kan spørge.

**4.** Vælg én ikke-generativ aktivitet til det yngste bånd og én mediekompetencelektion til 9-12-båndet, og sæt dem i terminens plan.

**5.** Stryg detektion fra policyudkastet, erstat det med en regel om, hvad skolen vil og ikke vil stille til rådighed, og sæt en revisionsdato med tre ting at tjekke: hvad lærerne brugte, hvad familierne spurgte om, og om 9-12-lektionerne blev holdt.

## Hvor du kan gå videre

[[how-ai-impacts-students|Hvordan AI påvirker elever]] dækker, hvad værktøjerne gør ved læringen, og [[incorporating-ai-literacy|At integrere AI-kompetence]] sammen med [[ai-literacy|AI-kompetence]] dækker, hvad der skal undervises i. [[parents-and-families|Forældre og familier]] og [[early-childhood-elementary-ai-education|AI i dagtilbud og grundskole]] rummer forskningsgrundlaget for denne side, og [[equity-ethics-pedagogical-safety-research|lighed, etik, pædagogisk sikkerhed]] er, hvor argumentet om privatliv og sikkerhed fortsætter. Hvis dit spørgsmål er vurderingssiden for ældre elever, tager [[should-we-use-ai-detectors|Skal vi bruge AI-detektorer?]] og [[reduce-ai-cheating|At reducere AI-snyd]] det videre.
