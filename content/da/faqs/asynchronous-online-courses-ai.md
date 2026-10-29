---
title: "Hvordan bør vi designe og facilitere asynkrone onlinekurser, når AI kan gøre arbejdet?"
created: "2026-09-17T03:40:00-04:00"
connected_faqs: [reducing-over-reliance, course-ai-policy, verify-ai-output, group-work-ai]
weight: 68
type: faq
foundations: [academic-integrity, cognitive-offloading, learning-design]
pedagogy: [community-of-inquiry, online-teaching-and-learning, self-regulated-learning, student-engagement]
technology: [generative-ai]
assessment: [assessment]
methods: [meta-analysis-systematic-review, rct, mixed-methods-research, design-based-research]
ethics: [guardrails]
audience: [instructors, instructional designers]
level: [higher ed, adult learning]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/asynchronous-online-courses-ai
source_updated: "2026-10-28T11:34:12-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Semesteret åbner, og der sker intet på et fast tidspunkt. Du lægger ugens læsestof op, diskussionsspørgsmålet, den første case, og så venter du på at se, hvad der kommer tilbage. Det, der kommer tilbage, er flydende, rammer emnet og fortæller dig intet om den studerende, der afleverede det. Der er ikke noget lokale at gå ind i, intet ansigt at læse klokken 10.15 en tirsdag, og intet opfølgende spørgsmål, du kan stille, mens den studerende stadig står foran dig.

Svaret, du kan give en kollega: i et asynkront kursus skal alt, hvad et klasseværelse leverer gratis, bygges med vilje. Sæt karakteren på processen i stedet for på den færdige fil, behold én måling, som den studerende producerer uden værktøjer og uden hjælp, begræns den AI, du udleverer, og hold den inde i kurset, og behandl kalenderen som en designbeslutning. Spørg for enhver opgave, hvad en studerende stadig ville være nødt til at gøre, hvis en model producerede artefaktet for dem.

## Den korte version

**1.** Bedøm processen. En beslutningslog, en trinvis kladde eller et afsnit selvforklaring viser ræsonnement, som en endelig aflevering skjuler.

**2.** Behold én uassisteret måling på enhver bedømmelse, der certificerer kompetence. Fastholdelsesgabet i befolkningsdataene nedenfor lukker sig, når overvågning er på plads.

**3.** Brug [[asynchronous-oral-assessment-2026|asynkron mundtlig bedømmelse]], hvor indsatsen berettiger produktionsarbejdet: prompter just-in-time, korte optagelser, den studerende ikke kan revidere, rubrikker indlejret, transskriptioner genereret automatisk.

**4.** Konfigurér enhver AI, du leverer, til at give hints i stedet for svar, og indlejr den i kurset i stedet for at linke ud til noget generisk.

**5.** Spred de store deadlines, og åbn et vindue på 7-8 dage før hver af dem. Så meget varsel giver interaktionsdataene dig.

**6.** Bedøm bevægelsen i en diskussion: en forpligtet position, en udfordring, en dokumenteret overvejelse.

## Beslut, hvad din opgave er evidens for

Et asynkront kursus er udsat af en strukturel grund. Dets evidens for læring er afleveringen, og afleveringer er nu billige at producere.

Demonstrationerne fjerner den studerende fra billedet helt. På et live-kursus i psykologi på bachelorniveau loggede autonome agenter ind i læringsplatformen, læste kursusmaterialet og fuldførte uovervåget bedømt arbejde uden at nogen studerende var involveret. To quizzer blev færdige på cirka **12 minutter** og på **under 5 minutter**, begge med scoren **10/10**. Et diskussionsindlæg fik agenten til at udvinde sine medstuderendes indlæg og derefter fabrikere en troværdig livshistorie i jeg-form for at svare på dem. Forfatternes bredere registrering dækker mindst **15 dokumenterede agentkørsler** på tværs af Canvas, Moodle og Brightspace med **syv agentværktøjer**. Deres indramning betyder noget for din studieordning: dette er et [[assessment-validity|bedømmelsesvaliditets]]problem, før det er et [[academic-integrity|integritets]]problem, fordi agentfuldførelse fjerner antagelsen om, at det afleverede arbejde kom fra den person, hvis læring bedømmes ([[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou og El-Haddad, 2026]]).

Den kausale evidens for, hvad værktøjet gør ved læringen, er lige så direkte. I et randomiseret forsøg med cirka 1.000 matematikstuderende i gymnasiet hævede ubeskyttet AI-hjælp øvelsespræstationen med **48 %** og sænkede karakteren ved uassisteret eksamen uden hjælpemidler med **17 %**. Studerende uden adgang klarede sig bedre end studerende med adgang. En [[guardrails|guardrail-beskyttet]] tutor, der gav hints i stedet for svar, eliminerede skaden. Begrænsningen afgjorde udfaldet.

Befolkningsdata går samme vej. På tværs af **3,2 millioner ALEKS-interaktioner** faldt studietiden på AI-følsomme opgaver med **26,9 %** efter ChatGPTs offentlige udgivelse, med et **25 % fald i oddsene for at svare korrekt på overvågede fastholdelsesopgaver**. Effekten forsvandt, da overvågning var på plads. Den forsvinden er det brugbare for kursusdesign, fordi den lokaliserer genvejen uden for platformen og viser, at skaden lever i betingelser, du selv sætter.

Der er en mere stille fejl at designe imod. [[metacognitively-discordant-completion-genai-2026|Metakognitivt diskordant fuldførelse]] navngiver tilstanden at aflevere korrekt, fuldstændigt arbejde, mens man privat ved, at forståelsen aldrig kom. I et klasseværelse kunne du fange det i en studerendes tøven. I et asynkront kursus er afleveringen den eneste kanal, og en korrekt aflevering læses som succes. [[assessment|Bedømmelsesdesign]] er din første løftestang.

## Sæt evidensen i processen

Hvis det færdige produkt intet beviser, må evidensen komme fra, hvordan arbejdet blev lavet, eller fra en betingelse, den studerende ikke kan uddelegere.

**Procesafslørende artefakter** er den billigste ændring, og de virker i skala: trinvis aflevering med en obligatorisk beslutningslog undervejs, en selvforklaring på et afsnit knyttet til hvert svar, en annotering af en kilde, en plan revideret efter feedback. De fanger [[cognitive-offloading|ræsonnementet]] snarere end dets rest, og de koster underviseren forholdsvis lidt at skimme.

**Asynkron mundtlig bedømmelse** bærer mest vægt, hvor kompetence skal certificeres. [[asynchronous-oral-assessment-2026|Pentland, Lowenthal og Krier (2026)]] evaluerede webbaserede bedømmelser, der leverer prompter just-in-time, lader studerende optage korte, tidsbegrænsede webcam-svar, de ikke kan genbesøge, og bedømmer mod indlejrede rubrikker, mens transskriptioner genereres automatisk. På tværs af to studier, en pilot i mellemniveau-regnskab og et kursus i dataanalyse, scorede studerende højere end på fysiske multiple choice-eksamener. Forskellen var signifikant i det andet studie og en positiv, men ikke-signifikant tendens i det første, med moderate korrelationer på tværs af formater, der støtter konvergent [[assessment-validity|validitet]]. Studerende rapporterede, at de forberedte sig anderledes, brugte flere [[active-learning|aktive]] studiestrategier og behandlede formatet som fagligt relevant. For et kursus uden en fælles time er dette den nærmeste strukturelle ækvivalent: tænkningen sker live, på et tidspunkt og et sted den studerende vælger, til en administrativ omkostning, der ikke vokser med årgangens størrelse.

**Én uassisteret måling** hører i ethvert kursus, hvis karakter certificerer viden. ALEKS-resultatet er argumentet: med overvågning på plads forsvandt fastholdelsesgabet. Fortæl de studerende, hvorfor betingelsen findes. Den begrundelse hører i [[course-ai-policy|din kursus-AI-politik]].

## Beslut, hvor værktøjet ligger i sekvensen

Når produktet er upålidelig evidens, bliver rækkefølgen af arbejdet en del af bedømmelsesdesignet.

[[brcic-effortless-trap-productive-struggle-2026|Brcic og Frljic (2026)]] sætter placeringen i centrum af argumentet: tillad eller forbyd er et falsk valg, og det designspørgsmål, der betyder noget, er **hvor værktøjet ligger**. Den kausale evidens, de samler, viser udfaldet vende alene på placeringen. Den samme ubeskyttede hjælper, der efterlod gymnasieelever cirka **17 % dårligere** ved en eksamen uden hjælp, gjorde ingen skade, da den blev genopbygget til at tilbageholde svar, og en velkonstrueret [[intelligent-tutoring|tutor]] cirka **fordoblede** læringen. Deres ramme med seks træk til at placere værktøjet (prime, probe, point, attach, strengthen, test) er én brugbar menu. Behold deres diagnostik: *hvis det at lukke AI ind gør opgaven let, ligger den det forkerte sted.* Dårlig placering efterlader en illusion af læring, der kollapser på den uassisterede opgave, den tilstand som [[metacognitively-discordant-completion-genai-2026|metakognitivt diskordant fuldførelse]] beskriver.

Skrevet ind i en opgave giver det en sekvens, du kan trykke på arket:

**Tænk, forpligt dig, brug AI, kritiser, revidér, forklar.**

Studerende forsøger det intellektuelle arbejde og forpligter sig på en indledende fortolkning, forudsigelse, disposition eller beslutning. Derefter kommer modellen ind, for feedback, alternativer, modargumenter eller kritik. Så vurderer de studerende, hvad den producerede, reviderer og forklarer, hvad der ændrede sig, og hvorfor. Forpligtelsestrinnet er det, der gør resten bedømmeligt. En studerende, der ikke har forpligtet sig, har intet at revidere, og et artefakt, en model skrev fra bunden, har slet ingen revisionshistorik.

Den overkorrektion, du skal undgå: at indsamle hver prompt og dokumentere hvert tastetryk producerer arbejdsbyrde uden evidens. Bed om de beslutningspunkter, du faktisk ville læse, hvilken evidens der blev valgt, hvilket alternativ der blev afvist, hvad der ændrede sig efter kritikken.

## Par den opgave, du ikke kan forsvare, med en tvilling

Den strukturelle mulighed her er at holde op med at vælge mellem en pædagogisk forsvarlig opgave og en forsvarlig opgave. [[roe-assessment-twins-2026|Roe, Perkins og Giray (2026)]] foreslår **bedømmelsestvillinger**: par den AI-sårbare opgave, et hjemmeessay eller en analyse, med en anden, mindre sårbar opgave, der bedømmer de *samme* læringsmål, planlagt tæt nok til krydsverifikation og bedømt indbyrdes afhængigt. Deres kortlægning løber på tværs af Messicks seks spor af validitetsevidens, og deres designproces har tre trin: identificér sårbarhederne, afstem læringsmålene og vælg tvillingen, udvikl derefter bedømmelse, der forbinder de to. Hjemmeanalysen beholder sin værdi for udstrakt undersøgelse. Tvillingen kan være en kort casevariation, en forklaring af én nøglebeslutning eller et kort mundtligt eller multimodalt forsvar.

Det ledsagende spørgsmål er ejerskab. [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani og Buckingham Shum]] argumenterer for, at medforfatterskab med generativ AI underminerer flere former for validitetsevidens, og foreslår **medforfatterskabsintegritet** som en kilde til validitetsevidens i sig selv, krænket når en studerende afleverer AI-genereret indhold, de ikke forstår. For at tjekke ejerskab i skala rapporterer de arbejde med en **AI-viva**: en samtalende agent, der kører en hybrid viva voce, stiller forståelsesspørgsmål af kontrollerbar type og kompleksitet, valideret i dybden af ekspertundervisere og bedømmelsesspecialister. Vej det mod at overvåge alt. Et mundtligt forsvar af ens egen ræsonnering skalerer, hvor overvågning af et lokale ikke gør, og det producerer evidens om forståelse.

## Beslut, hvad den AI, du leverer, må gøre

Det, der betyder noget, er forskellen mellem indlejret, begrænset AI og en løsrevet chatbot. De to giver forskellige resultater.

[[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Open Universitys AIDA-assistent]] er det bedst dokumenterede indlejrede tilfælde: seks iterative designbaserede studier over 18 måneder med 498 studerende og 20 ansatte på en institution, der betjener mere end 200.000 lærende i mere end 50 lande. I et eksplorativt randomiseret forsøg brugte studerende med AIDA **dobbelt så lang tid** og besøgte flere sider i deres kursus end kontrolgruppen, og **96 %** ønskede assistenten tilgængelig i deres formelle studier. Den samme institutions erfaring med en ekstern, løsrevet chatbot gik den anden vej.

[[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga og Johnsons (2025) gennemgang]], 63 citater på tværs af 32 lande, tilføjer en social betingelse: studerende, der brugte ChatGPT *side om side* med lærertutoring, oplevede større [[learning-gains|læringsudbytte]] end dem, der brugte den alene. En assistent supplerer underviseren, eller den erstatter relationen, og kun det ene af dem er et kursusdesign.

To advarsler fortjener vægt. KhanMigos fiasko var ikke teknisk. De lærende engagerede sig ikke i chatboten, og evidensen for gevinster var begrænset, hvilket peger på [[governance|organisatorisk parathed]] og undervisningsmæssig pasform. Undervisersiden er heller ikke klar: i en sammenligning af sydafrikansk læreruddannelse var selvrapporteret TPACK for AI-integreret naturfagsundervisning **64,0 %** på et universitetscampus mod **47,4 %** på et fjernuniversitet, med pædagogisk viden som det svageste domæne i begge ([[online-teaching-and-learning|online undervisning og læring]]). At udrulle en assistent i et asynkront kursus træner ikke de mennesker, der skal vurdere dens output.

## Bedøm bevægelsen i en diskussion

Diskussionsfora er der, hvor et asynkront kursus bygger [[community-of-inquiry|fællesskab]], eller lydløst bliver en afleveringskasse. To fund bør forme, hvad du automatiserer der.

Timing er det svære. [[llm-facilitation-timing-online-discussions|Tsirmpas og kolleger]] byggede PEFK-korpus for at sammenligne faciliteringsdatasæt og kørte derefter den første undersøgelse af faciliterings*timing* med ekspertfacilitatorer og LLM-dommere. Mennesker var mere forsigtige med at gribe ind. LLM'er var overdrevent ivrige. Begge var mere sikre, når de vurderede, at facilitering **ikke** var nødvendig, end når de vurderede, at den var. Trænede klassifikatormodeller klarede sig bedre end LLM-opsætningerne, og selv da satte de eksisterende datasæt en grænse for præstationen. Praktisk læsning: hold autonom moderering ude af den kritiske vej, og hvis du overhovedet bruger AI i en diskussion, så konfigurér den til at tie stille som standard.

Opsummeringer hjælper studerende med at navigere i et forum uden at få dem til at deltage. Med 128 universitetsstuderende over tre iterationer fandt [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao og Cukurova (2026)]], at AI-genererede diskussionsopsummeringer udvidede eksponeringen for medstuderendes bidrag og styrkede netværksforbundetheden, de svage bånd som social kapital-teori kalder brobygning, ved at sænke indsatsen for at finde meningsfulde indlæg. De standsede ikke et fald i visningsaktivitet gennem kurset. Opsummering er en navigationsmæssig [[scaffolding]].

Den struktur, der holder, er en sekvens snarere end en tråd: **position, udfordring, overvejelse.** Studerende forpligter sig på en fortolkning forankret i kursusmaterialet, møder derefter et andet perspektiv, et modeksempel eller en kritik og forklarer så, om og hvordan deres ræsonnering flyttede sig. Det, du bedømmer, er bevægelsen mellem ideer. Et afleveret indlæg plus to svar holdt op med at demonstrere det, i det øjeblik en agent kunne udvinde en medstuderendes indlæg og efterligne en klassekammerats livshistorie for at bestille.

Fordi det, en agent imiterer, er overfladisk adfærd, bliver dine egne bidrag den knappe ressource. At svare mekanisk på snesevis af enkeltindlæg er den svageste form for undervisertilstedeværelse; at syntetisere på tværs af diskussionen er den stærkeste: *tre antagelser bliver ved med at dukke op i jeres analyser; flere af jer læser denne evidens forskelligt; dette argument er overbevisende, indtil vi indfører dette modeksempel.* Det er [[teacher-role|orkestrering]] snarere end medieproduktion.

Spørgsmålet om ramme under begge er ansvarlighed. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim og Anderson (2026)]] argumenterer for, at generativ AI forstyrrer [[community-of-inquiry|undersøgelsesfællesskabets]] antagelse om, at tilstedeværelsesindikatorer overhovedet kan tilskrives mennesker. De behandler GenAI som en epistemisk betingelse og tilstedeværelser som sociotekniske præstationer, hvis forhold til undersøgelseskvalitet afhænger af, hvor den menneskelige ansvarlighed ligger. Konkret: beslut og formidl, hvem der er ansvarlig for hvad i hver udveksling, i stedet for at antage, at tilstedeværelse opstår, fordi der findes et forum.

## Hold semesteret i gang uden et lokale at gå ind i

Selvstyrede formater forudsætter [[self-regulated-learning|selvregulering]] og underviser sjældent i den. Evidensen for, hvilke adfærder der faktisk korrelerer med at holde sig til opgaven, er usædvanligt praktisk.

I en undersøgelse af 530 collegestuderende med associationsregel-mining og klustring fandt [[decreasing-digital-distraction-college-online-learning-2026|Shi et al. (2026)]], at selvregulerende læringsadfærder, **målsætning, strukturering af omgivelser og tidsstyring**, forekom mest konsistent sammen med lav digital distraktion, sammen med lærer-studerende- og studerende-indhold-[[student-engagement|engagement]] og teknisk kompetence. Afhængighed af hjælp fra medstuderende og studerende-studerende-engagement forekom *sjældnere* i profilerne med lav distraktion. Strukturér omgivelserne og skemaet, før du designer endnu en gruppeaktivitet.

Selvregulering er heller ikke et fast træk. Over et helt semester med 75 studerende på første år fandt [[song-genai-learning-partner-srl-over-time-2026|Song et al. (2026)]], at den fungerede både som en stabil aptitude og en fluktuerende tilstand. Individuelle baselines holdt sig stabile, mens metakognitiv viden og [[well-being|trivsel]] faldt systemisk gennem semesteret, drevet af studieordningskrav som store bedømmelsesdeadlines. At klumpe deadlines kan være et effektivt administrativt valg, og det er også en målbar skat på den regulering, dit format afhænger af.

Indgrebsvinduet er kendeligt. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries og Koprinska (2025)]] viste, at fortolkelig maskinlæring på logfiler over indholdsinteraktion forudsiger fremgang på modulniveau og flaggør frafaldsudfald op til **7-8 dage før moduldeadlines** i store online programmeringskurser. Det er varsel nok til at sende et specifikt puf til en specifik studerende, hvilket slår at opdage fejlen ved bedømmelsen. For [[adult-learning|voksne]] og fjernstuderende tilføjer AI-ALOE-designretningslinjerne den begrænsning, der betyder mest: mobil adgang, offlinekapacitet og ægte asynkron tilgængelighed, fordi disse lærende studerer i brudstykker af tid mellem andre forpligtelser.

## Beslut, hvad der skal automatiseres i produktionen

To anvendelser har rimelig evidens bag sig, og begge retter sig mod underviserens arbejdsbyrde.

**Produktionsomkostning.** [[mooc-to-maic|MAIC]] omformulerer MOOC'ens »én video til N studerende« til »N agenter til én studerende« ved at bruge specialiserede lærer-, assistent-, medstuderende- og analysatoragenter på et fælles modelfundament. Forfatterne rapporterer, at kursusproduktionen faldt fra cirka **25.000 $ og 60 timer** per MOOC til **under 2 $ og 30 minutter**, pilottestet på Tsinghua på tværs af to kurser med **100.000+ læringsregistreringer fra 500+ studerende**, og udgivet som open source under navnet OpenMAIC. Personligt medie er samme idé på aktivniveau: i et stort onlinekursus fandt [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]], at studerende foretrak AI-genererede personlige videoer frem for ikke-personlige, menneskeindspillede, hvor personaliseringseffekten opvejede værdien af en menneskelig oplægsholder.

**Forumnavigation.** Opsummeringsstilladsningen ovenfor sænkede omkostningen ved at finde gode bidrag uden at øge underviserens læsebyrde.

Tre opgaver bliver hos dig: at afgøre, om et stykke skrift er den studerendes egen tænkning, at vurdere, om en diskussion har brug for indgreb, og at kalibrere sværhedsgraden. Genereret materiale har også brug for pædagogisk gennemgang, før det bærer merit. Billig produktion er et spørgsmål for sig i forhold til forsvarligt design.

## Navngiv AI'ens rolle, og tjek at den studerende stadig har en

»Studerende må bruge AI« er en for bred specifikation at designe imod. At navngive rollen er det, der gør en aktivitet designbar, og roller har konsekvenser for tilstedeværelse: et studie af generativ AI i marketingundervisning skelner mellem **tutor, holdkammerat og værktøj**, viser at hver af dem påvirker undervisnings-, social og kognitiv tilstedeværelse forskelligt, og lister de velkendte etiske eksponeringer: databeskyttelse, plagiering, afhængighed og retfærdighed i bedømmelsen ([[genai-marketing-education-roles-2026|GenAI i marketingundervisning]]). Den samme model kan være en sokratisk spørger før en opgave, en kritiker efter en første kladde, en simuleret interessent under en caseanalyse, en modstander, hvis argument skal gendrives, en hintgivende tutor under øvelse eller en redaktør, der hentes ind, efter den substantielle ræsonnering findes. Det er forskellige aktiviteter, og at blande dem sammen er, hvordan »AI er tilladt« kommer til at betyde »der blev ikke designet noget«.

[[scaffolding|stilladsning]] leverer testen. Støtte skal hjælpe lærende med det, de endnu ikke kan alene, og skal aftrappes, efterhånden som kompetencen udvikles. En model, der bliver ved med at levere komplette løsninger, udfører opgaven. For hver AI-aktiveret aktivitet bør du kunne færdiggøre denne sætning uden at tøve:

*AI'ens opgave her er _____, mens den studerendes opgave er ________.*

Hvis den anden tomme indeholder lidt tænkning, skal aktiviteten designes om.

## Bed dem vurdere et svar, de ikke selv skrev

[[ai-literacy|AI-kompetence]] dækker kritisk evaluering, [[metacognition|metakognitiv]] dømmekraft og at vide, hvornår man skal springe værktøjet over. Selvrapporteret selvtillid er en dårlig proxy for demonstreret kompetence.

Én ændring, som ethvert asynkront kursus kan indføre med det samme: **giv nogle gange de studerende AI-outputtet selv.** Ræk to konkurrerende svar over, og spørg, hvilket der er stærkere, og hvorfor. Bed om den svageste påstand, den manglende antagelse, den uverificerbare kilde, den plausible forklaring, der ikke desto mindre er forkert. Spørg, hvilken evidens der ville ændre deres mening.

Indrammet sådan er den kompetence, der bedømmes, om en studerende kan genkende et svar, der fortjener tillid, hvilket er tættere på, hvad faget kræver, og langt sværere at uddelegere. [[verify-ai-output|Verifikationspraksisserne]] er der, hvor teknikken lever. Det, der betyder noget her, er at lægge evalueringen inde i den bedømte opgave i stedet for at lade den blive et råd i en modulmeddelelse.

## Hvad instruktionsdesignere tager fejl af ved asynkrone kurser

Afleveringen er problemet, så afleveringen er det, der skal rettes. Den er også din eneste kanal, hvilket er grunden til, at det at stramme artefaktet alene ændrer lidt. Tilføj en anden kanal: en procesregistrering, en optaget forklaring, én uassisteret måling.

Fleksibilitet betyder, at den studerende ejer tempoet. Formatet forudsætter selvregulering, og semesterstudiet med 75 studerende viser metakognitiv viden og trivsel falde, når deadlines klumper. Tempo er en designbeslutning, du træffer for dem.

Et forum er deltagelse, så jeg tæller indlæg. Agentdemonstrationen ovenfor producerede et indlæg, der udvandt medstuderende og opfandt en livshistorie; en optælling kan ikke skelne det fra et godt et. Hao og Cukurovas opsummeringer forbedrede navigationen og lod visningsaktiviteten falde alligevel.

At tilføje en assistent gør kurset AI-integreret. AIDA var formålsbygget, indlejret og itereret over seks studier; en ekstern chatbot på samme institution gik den anden vej, og KhanMigos lærende engagerede sig simpelthen ikke.

Procesevidens betyder at dokumentere alt. At indsamle hver prompt og hvert tastetryk producerer papirarbejde og lidt andet. Den version, der er værd at bedømme, beder om nogle få beslutningspunkter: hvilken evidens der blev valgt, hvilket alternativ der blev afvist, hvad der ændrede sig efter kritikken.

## Hvad du vil få igen

**»Det er voksne, der har valgt et asynkront kursus. Hvis de lader AI skrive det, er det deres beslutning.«** Valgargumentet ville holde, hvis kurset ikke certificerede noget. Det gør det. ALEKS-evidensen viser en genvej, der producerer en tilsyneladende kompetence, som ikke overlever et overvåget tjek, og omkostningen lander senere, i det næste kursus, ved autorisationseksamenen eller i jobbet. Der er en ligestillingskant: de lærende, der mest sandsynligt uddelegerer, er ofte dem med mindst tid, netop den gruppe et asynkront kursus findes for at betjene.

**»Detektion er svaret.«** Detektion er omstridt, og overvågningsresultatet viser, hvorfor design slår kontrol: skaden forsvandt, da betingelserne ændrede sig. Detektion har også omkostninger ved falske positive og gør undervisning til et våbenkapløb. Design opgaven om, og behold én uassisteret måling. Se [[reduce-ai-cheating|at reducere AI-snyd]] og [[redesign-assessment-ai-era|redesign af bedømmelse i AI-tidsalderen]].

**»Undervisertilstedeværelse er umulig på afstand, så asynkront er iboende ringere.«** Tilstedeværelse i et asynkront kursus er designet. CoI-omformuleringen ovenfor siger, at indikatorerne er sociotekniske præstationer i GenAI-tidsalderen, og AIDA-forsøget fordoblede tiden på opgaven i et kursus helt uden synkrone møder.

**»Overvågning er surveillance, og jeg vil ikke påtvinge det.«** En forsvarlig holdning, og den efterlader muligheder åbne. Procesafslørende artefakter, asynkron mundtlig bedømmelse og AI-vivaen fanger ræsonnering uden at overvåge nogens lokale. Hvis du bruger en overvåget betingelse, så sæt den i studieordningen, forklar begrundelsen, og hold den til de bedømmelser, der certificerer kompetence.

**»Så gør det hele synkront og overvåget.«** Mange studerende vælger asynkront studium på grund af arbejde, omsorgsforpligtelser, handicap eller geografi. Detektion har også sine egne ligestillingsomkostninger: værktøjer, der flagger ikke-native skribenter, producerer uforholdsmæssigt mange falske positive, der straffer ærligt arbejde ([[ai-detection|AI-detektion]]). Det proportionerede alternativ er et lille antal verifikationsmomenter inde i et ellers fleksibelt kursus: en kort optaget forklaring, en personlig anvendelse, et svar på et spørgsmål underviseren har valgt, et annoteret beslutningsspor, et individuelt tjek med lav indsats. Verifikation bør hæve validiteten af din evidens og bevare den fleksibilitet, der gjorde formatet værd at tilbyde.

## Hvad evidensen ikke afgør

[[ai-distance-education-systematic-review-2026|Den systematiske gennemgang af AI i fjernundervisning]] (56 artikler, 2020-2025) dækker personalisering (24 studier), bedømmelse og feedback (19), menneske-AI-interaktion (17) samt styring og ligestilling, og konkluderer, at grundlaget er kortsigtet og tværsnitligt, med lidt longitudinelt arbejde. [[ai-student-engagement-online-learning-review-2025|Gennemgangen af AI og studerendes engagement i online læring]] (24 studier) er begrænset til én database, behandler kun engagement og blander synkrone med asynkrone kontekster, så dens konklusioner er ikke asynkron-specifikke. Asynkron mundtlig bedømmelse hviler på to studier i to kurser. MAIC er en pilot. Faciliteringstiming-datasæt sætter en grænse for præstationen selv med trænede klassifikatorer. Intet studie her følger en asynkron årgang længe nok til at vise, om redesignet bedømmelse giver holdbar læring eller kun bedre evidens for den. Det hele er stærkt nok til at ændre dit næste kursus og for tyndt til at begrunde en politikpåstand.

## Hvad du kan gøre i denne uge

**1.** Vælg din mest risikofyldte bedømmelse, og tilføj én betingelse, den studerende gennemfører uassisteret. Fortæl dem, hvorfor den findes.

**2.** Tag den opgave, AI nu fuldfører ende til ende, og skriv den om, så processen er artefaktet: en beslutningslog, en trinvis kladde, en selvforklaring, en sammenligning af to forsøg.

**3.** Konvertér én større bedømmelse til et asynkront mundtligt forsvar med indlejrede rubrikker, og sæt AI-tilladelsen per opgave i studieordningen, hvor de studerende faktisk læser den.

**4.** Spred de store deadlines, og blokér et vindue på 7-8 dage før deadline til at kontakte studerende, hvis interaktionsdata er blevet stille.

**5.** Kør tre spørgsmål over din svageste opgave. Kunne et AI-system fuldføre denne aktivitet uden at den studerende forstod materialet? Hvilken kognitiv aktivitet skal producere læringen her? Hvilken evidens vil vise, at den studerende faktisk udførte den aktivitet? Hvis det første svar er ja, og de to andre er svære at svare på, ligger problemet i læringsdesignet, og ingen formulering af politikken retter det.

**Hvor du kan gå videre:** de kursusniveau-regler hører i [[course-ai-policy|din kursus-AI-politik]]; ombygningen af bedømmelsen er dækket i [[redesign-assessment-ai-era|redesign af bedømmelse i AI-tidsalderen]]; afhængighedsproblemet under den i [[reducing-over-reliance|at reducere overafhængighed]]; underviseres arbejdsbyrde og hvad AI realistisk fjerner i [[ai-save-instructor-time|at spare undervisertid med AI]]; og det designmæssige syn på at indlejre AI i en læringsoplevelse i [[designing-ai-into-learning|at designe AI ind i læring]].
