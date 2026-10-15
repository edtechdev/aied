---
title: "AI i utbildningen"
created: "2026-10-15T14:22:00-04:00"
type: concept
foundations: [ai-education, ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
ethics: [equity-in-ai-education]
audience: [instructors, learners, faculty developers, administrators]
level: [higher ed, k 12]
connected_faqs: [top-10-findings-ai-education-instructors]

confidence: high
institutions: [educational-policy-ai]
reviewed_by: [editor]
translation_of: "concepts/ai-education"
source_updated: "2026-10-02T07:35:56-04:00"
translation_note: "*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-15"
    agent: hermes-agent
---
*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

> **AI i utbildningen (AIED)** — det breda, tvärvetenskapliga fältet som tillämpar artificiell intelligens på undervisning och lärande, och som studerar dess design, användning, utvärdering och konsekvenser. Som kunskapsbasens paraplybegrepp omfattar AI i utbildningen både **AI för utbildning** (att använda AI för att förbättra undervisning och bedömning) och **utbildning om AI** (att utveckla AI-kompetens och kritisk förståelse). Fältet ligger i skärningspunkten mellan undervisningsteknologi, [[learning-sciences|lärandets vetenskaper]] — det empiriska forskningsfältet som frågar om elevens lärande förändrats snarare än enbart om ett verktyg presterade väl — datavetenskap, [[educational-policy-ai|utbildningspolitik]], [[ethics|etik]] och [[equity-in-ai-education|rättvisa]]. Den här sidan är en introduktion till fältet och en karta över alla begrepp som kunskapsbasen omfattar.

## Frågor att fundera över

- 'AI i utbildningen' spänner över två riktningar: AI för utbildning (att använda AI för att förbättra undervisningen) och utbildning om AI (att bygga upp kunskaper om AI och kritisk förståelse). Vilket av dem känner du bäst igen, och vilket brukar du förbise?
- Fältets historia beskrivs som en återkommande spänning mellan kontroll och elevens handlingsutrymme. När du ser AI-verktyg spridas — var ser du samma spänning spelas ut idag?
- AI i utbildningen ligger i skärningspunkten mellan teknik, lärandevetenskap, politik, etik och rättvisa. Vilken av dessa glasögon anlägger du naturligt när du utvärderar ett AI-verktyg — och vilken glömmer du sannolikt bort?
- Den här kunskapsbasen organiserar fältet i strängar: pedagogik, lärandeteorier, tekniker, discipliner, bedömning, feedback, intressenter och styrning. Om du skulle kartlägga din egen användning av AI, i vilken sträng skulle du hamna?
- AIED innefattar att undervisa elever i att använda AI kritiskt som ett mål i sig. I ditt sammanhang behandlas AI mer som ett ämne att undervisa i eller som ett verktyg att använda — och speglar den balansen det eleverna faktiskt behöver?
- Elever kan utveckla AI-kompetens genom att använda AI kritiskt, inte bara genom att lära sig om AI. Hur skulle praktiskt, kritiskt bruk kunna bygga en förståelse som passiv undervisning inte kan?

## Introduktion

AI i utbildningen är det paraply som alla andra begreppssidor tillsammans definierar. Kunskapsbasen organiserar fältet i de stora strängarna nedan, var och en med länkar till de relevanta begreppssidorna.

Ett landmärkande [[history-of-aied|historiskt]] perspektiv: **[[mishra-control-vs-agency-history-2025|Mishra m.fl.]]** spårar AIED från cybernetiken och Dartmouthkonferensen 1956 via [[intelligent-tutoring|kognitiva handledarsystem]] och Paperts [[constructivist|konstruktionism]], och menar att dagens diskussion om [[generative-ai|generativ AI]] återuppspelar fältets grundläggande spänning mellan kontroll och [[agency|handlingsutrymme]].

## Hur kunskapsbasen är organiserad: paraplysidorna

Kunskapsbasens begreppstäckning förankras av flera **paraplysidor** som grupperar närbesläktade begrepp i navigerbara strängar. Dessa är bra utgångspunkter för att utforska fältet:

- **AI i utbildningen** — den här sidan, fältets översikt och karta över allt innehåll.
- **[[ai-literacy|AI-kompetens]]** — paraplyt för att förstå, använda och kritiskt utvärdera AI, och omfattar [[prompt-engineering|promptkonstruktion]], [[critical-thinking|kritiskt tänkande]], [[ethics|AI-etik]] och [[reducing-ai-misuse|ansvarsfull användning]]. Vid sidan av detta ramar [[human-ai-collaboration|människa–AI-samarbete]] och [[agentic-ai|agentisk AI]] in hur människor och AI arbetar tillsammans.
- **[[pedagogy|Pedagogiker och undervisningsstrategier]]** — paraplyt för hur undervisning sker: de undervisningsmetoder och strategier som AI verkar inom ([[active-learning|aktivt]], [[collaborative-learning|samarbetsinriktat]], [[project-based-learning|projektbaserat]], [[problem-based-learning|problembaserat]], [[experiential-learning|erfarandebaserat]], [[game-based-learning|spelbaserat]], [[socratic-method|sokratiskt]], [[scaffolding|strukturering]] med mera), inklusive det särskilda sammanhanget [[online-teaching-and-learning|distansundervisning och -lärande]].
- **[[learning-theories|Lärandeteorier]]** — paraplyt för hur lärande sker: de teoretiska ramverken ([[behaviorism|behaviorism]], [[cognitive-psychology|kognitivism]], [[constructivist|konstruktivism]], [[sociocultural-learning|sociokulturellt]], kognitivt, [[motivation|motivationellt]]) som formar AI:s design och utvärdering.
- **[[ai-technologies|Tekniker]]** — paraplyt för det tekniska lagret: AI-systemen ([[llm|LLM:er]], [[generative-ai|generativ AI]], [[multimodal|multimodala]], [[educational-robotics|robotik]]) och metoderna ([[rag|RAG]], [[prompt-engineering|promptkonstruktion]], [[reinforcement-learning|förstärkande inlärning]], [[llm-training-and-fine-tuning|modellträning]], [[agentic-ai|agentisk orkestrering]]) som driver AIED. Elevmodelleringsfamiljen — [[knowledge-tracing|kunskapsspårning]], [[cognitive-diagnosis|kognitiv diagnostik]], [[simulating-students|elever i simulering]] och de system som förbrukar dem ([[intelligent-tutoring|intelligent handledning]], [[adaptive-learning|adaptivt lärande]], [[personalized-learning|individualiserat lärande]]) — grupperas under paraplyt [[student-modeling|Elevmodellering och adaptiv undervisning]] inom denna tekniska sträng.
- **[[discipline-specific-aied|AI inom disciplinerna]]** — paraplyt för hur AI tillämpas inom olika ämnesområden ([[math-education|matematik]], [[physics-education|fysik]], [[language-learning|språkinlärning]], [[cs-education|datavetenskap]], [[writing-education|skrivande]], [[stem-education|STEM]], [[engineering-education|ingenjörsutbildning]], [[business-education|ekonomi och management]], [[teacher-education|lärarutbildning]], [[medical-education|vårdutbildningar]] med flera) — och, bortom de akademiska ämnena, den professionella och tillämpade strängen som bedömer visad praktik snarare än korrekthet ([[nursing-education|sjuksköterskeutbildning]], [[information-technology|informationsteknik]], [[vocational-education|yrkesutbildning]], [[design-education|designutbildning]]) — samt utbildningsnivåerna ([[k-12]], [[higher-ed|högskola]], [[adult-learning|vuxenlärande]]).
- **[[assessment|Bedömning]]** (med [[formative-assessment|formativ]], [[summative-assessment|summativ]], [[authentic-assessment|autentisk]], [[oral-assessment|muntlig]] och [[automated-assessment|automatiserad]] strömning) — paraplyt för hur AI både bedömer elever och omformar bedömningars validitet och integritet.
- **[[feedback|Feedback]]** — paraplyt för hur feedback genereras, levereras och används: feedbackloopen, [[ai-feedback-quality|feedbackkvalitet]], [[feedback-literacy|feedbackkompetens]] och dess bedömningssammanhang ([[formative-assessment|formativ]], [[peer-assessment|kamratbedömning]], [[automated-assessment|automatiserad]]).
- **[[stakeholders|Intressenter inom AI i utbildningen]]** — paraplyt för vilka aktörerna är: elever, [[teacher-role|lärare]], [[learning-design|lärandedesigners]], [[administrator|administratörer]] och [[educational-policy-ai|politiska beslutsfattare]].
- **[[ai-ed-evaluation|Utvärdering inom AI-utbildning]]** och **[[research-methods-aied|forskningsmetoder]]** — paraplyerna för hur vi vet om AI fungerar: effektstudier, [[benchmark|benchmarktest]], [[rct|randomiserade kontrollerade försök]], [[meta-analysis-systematic-review|metaanalyser]] och [[learning-gains|lärandeeffekter]] som det centrala utfallsmåttet. Läsare bör också väga in [[limitations-in-aied-research|de övergripande begränsningarna i detta underlag]].
- **[[governance|AI-styrning]]**, **[[educational-policy-ai|utbildningspolitik för AI]]** och **[[equity-in-ai-education|rättvisa]]** — paraplyerna för det institutionella, regulatoriska och rättviselagret (se även [[regulation|reglering]] och [[privacy|integritet]]).

Dessa paraplysidor länkas igenom avsnitten nedan; varje sträng nedan namnger både sitt paraply och sina beståndsdelar.

## Två dimensioner av AI i utbildningen

Forskning om AI i utbildningen spänner över två sammankopplade riktningar:

- **AI för utbildning** — att använda AI-system för att stärka undervisning, lärande, bedömning och administration. Detta omfattar [[intelligent-tutoring|AI-handledning]], [[adaptive-learning|adaptivt lärande]], [[personalized-learning|individualiserat lärande]], [[automated-essay-scoring|automatisk rättning av uppsatser]], [[automated-question-generation|automatisk generering av frågor]], [[automated-assessment|automatisk bedömning]], [[formative-assessment|formativ bedömning]], [[learning-analytics|lärandeanalys]] och [[feedback|feedbackloopar]].
- **Utbildning om AI** — att undervisa elever och pedagoger i att förstå, använda och kritiskt utvärdera AI. Kärnan är [[ai-literacy|AI-kompetens]], stödd av [[prompt-engineering|promptkonstruktion]], [[critical-thinking|kritiskt tänkande]], [[ethics|AI-etik]], [[governance|styrningsutbildning]], digital kompetens och [[reducing-ai-misuse|ansvarsfull användning]].

Dessa två dimensioner är inte åtskilda: [[ai-literacy|att använda AI väl]] kräver att man förstår det, och undervisning om AI berikas av att använda det. Detta [[human-ai-collaboration|människa–AI-samarbete]] är ett centralt tema.

## Grunderna i AI i utbildningen

Fältets övergripande och grundläggande begrepp förankrar kunskapsbasens innehåll och visas först i sidofältet. De inleds med gruppen **Grundläggande** — de begrepp varje läsare bör börja med: paraplyt självt, [[misconceptions|vanföreställningar om AI]], [[ai-literacy|AI-kompetens]], [[agentic-ai|agentisk AI]], [[cognitive-offloading|kognitiv avlastning]], [[framing-ai-use-for-students|hur AI-användning ramas in för elever]], [[reducing-ai-misuse|att minska AI-missbruk]], [[academic-integrity|akademisk integritet]], [[teacher-role|undervisning]], [[learning-design|lärandedesign]] och [[educational-development|utveckling av undervisningen]]. Strängen **fält** täcker därefter [[history-of-aied|fältets historia]], [[limitations-in-aied-research|de övergripande begränsningarna i evidensbasen]], [[philosophy-of-ai-in-education|dess filosofi]], kartan över [[theories-and-frameworks|teorier och ramverk]] samt [[theory-development-aied|teoriutveckling]]. De övergripande temana — [[human-ai-collaboration|människa–AI-samarbete]], [[agency|elevens handlingsutrymme]], [[learner-identity|elevens identitet]], [[design-thinking|designtänkande]], [[curriculum-design|kurrikulumdesign]], [[critical-thinking|kritiskt tänkande]] och [[computational-thinking|komputationellt tänkande]] — skär igenom varje sträng, eftersom de felaktiga mentala modeller människor har om AI ligger före [[ai-misuse-learning-harm|missbruk]] och underkalibrerat [[trust-calibration|förtroende]].

## Lärande och undervisning

Hur AI stöder undervisning och lärande är fältets hjärta. Nyckelbegreppen omfattar:

- **Centrala pedagogiker:** [[pedagogy|pedagogiker och undervisningsstrategier]] — paraplyt för kunskapsbasens undervisningsmetoder — tillsammans med [[pedagogical-patterns|pedagogiska mönster]] (de beprövade sekvenser som dessa metoder löser upp sig i), [[active-learning|aktivt lärande]], [[collaborative-learning|samarbetsinriktat lärande]], [[group-work|grupparbete]], [[project-based-learning|projektbaserat lärande]], [[problem-based-learning|problembaserat lärande]], [[productive-failure|produktivt misslyckande]], [[inquiry-based-learning|undersökande lärande]], [[experiential-learning|erfarandebaserat lärande]], [[game-based-learning|spelbaserat lärande]], [[learning-by-teaching|lärande genom undervisning]], [[scaffolding|strukturering]], [[socratic-method|den sokratiska metoden]], [[critical-pedagogy|kritisk pedagogik]], [[pedagogical-partnerships|pedagogiska partnerskap]], [[storytelling-in-education|berättande]], [[learning-design|lärandedesign]], [[online-teaching-and-learning|distansundervisning och -lärande]] och [[video-education|video i utbildningen]].
- **Lärandeteorier och -processer:** paraplyt [[learning-theories|lärandeteorier]] ([[behaviorism|behaviorism]], [[cognitive-psychology|kognitivism]], [[constructivist|konstruktivism]], [[sociocultural-learning|sociokulturellt]], [[distributed-cognition|distribuerad kognition]], [[situated-learning|situerat lärande]], [[embodied-learning|kroppsligt förankrat lärande]], [[community-of-inquiry|undersökningsgemenskap]]) står sida vid sida med elevinriktade processer som [[self-regulated-learning|självreglerat lärande]], [[self-determination-theory|teorin om självbestämmande]], [[motivation|motivation]], [[self-efficacy|självtillit]], [[self-directed-learning|självstyrt lärande]], [[metacognition|metakognition]], [[desirable-difficulties|önskvärda svårigheter]], [[transfer-of-learning|överföring av lärande]], [[prior-knowledge|tidigare kunskaper]], [[icap-framework|ICAP kognitivt engagemang]], [[refutation-text|motargumentstext]], [[retrieval-spacing-interleaving|hämtning, fördelning och intervling]] och [[activity-theory-aied|aktivitetsteori]].
- **Elevengagemang och erfarenhet:** [[student-engagement|elevengagemang]], [[help-seeking|hjälpsökande]], [[social-emotional-learning|social-emotionellt lärande]], [[well-being|välbefinnande]], [[creativity|kreativitet]], [[problem-solving|problemlösning]], [[mastery-learning|mästarlärande]] och [[student-ai-interaction|elev–AI-interaktion]] formar hur elever faktiskt möter och påverkas av AI, medan de [[social-norms-ai-use|sociala normer som etableras kring AI-användning]] avgör hur öppet något av detta kan diskuteras. Bortom kursen täcker [[student-support-and-success|elevstöd och elevframgång]] det institutionssida av arbetet — studievägledning, uppsökande verksamhet, hänvisning och fördelning av knappa stödresurser — där AI pålitligt förbättrar slutförandet av uppgifter men inte studiefortsättning eller examen.

## Tekniker och metoder

Sidan [[ai-technologies|Tekniker]] är paraplyt för det tekniska lagret:

- **Modeller och tekniker:** [[generative-ai|generativ AI]], [[llm|stora språkmodeller]], [[rag|retrieval-augmented generation]], [[multimodal|multimodala modeller]], [[educational-nlp|utbildningsrelaterad NLP]], [[reinforcement-learning|förstärkande inlärning]], [[knowledge-graph|kunskapsgrafer]], [[educational-robotics|robotar i utbildningen]], [[conversational-ai|konversations-AI]], [[simulation|simulering]] och [[llm-training-and-fine-tuning|LLM-träning och finjustering]]. De underliggande metoderna spelar också roll: [[machine-learning|maskininlärning]] är där dessa system byggs, [[speech-and-voice-technologies|tal- och rösttekniker]] bär talad handledning och språkövning, [[visualization|visualisering]] täcker instrumentpaneler och visuell analys för elever och pedagoger, och [[virtual-and-augmented-reality|virtuell och förstärkt verklighet]] är värd för fördjupad övning vars visuella lager modellen nu kan generera. Nyare interaktionsformer hör också hemma här — mest framstående [[vibe-coding|vibe coding]], det naturligt språkdrivna arbetssättet där användaren specificerar ett program genom att prompta en LLM och bedömer det resulterande beteendet snarare än att läsa eller redigera källkod. Det omformar [[cs-education|programmering]] till en handling av uttryck och verifiering och sänker tröskeln för [[teacher-role|slutanvändare]] att bygga egna verktyg. Ramverk för integrationsdjup som [[samr-model|SAMR]] och adoptionsteorier som [[technology-acceptance-model|TAM]] klassificerar hur djupt AI tas i bruk och hur mycket det förvandlar uppgiften.
- **Elevmodellering och adaptiva system:** de tekniska systemen som representerar och anpassar sig till eleven grupperas under paraplyt [[student-modeling|Elevmodellering och adaptiv undervisning]] — [[knowledge-tracing|kunskapsspårning]], [[cognitive-diagnosis|kognitiv diagnostik]], [[simulating-students|elever i simulering]], [[intelligent-tutoring|intelligent handledning]], [[adaptive-learning|adaptivt lärande]], [[personalized-learning|individualiserat lärande]], [[recommender-systems-and-learning-paths|rekommendationssystem och lärandestigar]], [[pedagogical-agent|pedagogiska agenter]], [[affective-tutoring|affektiv handledning]], [[affective-computing|affektiv databehandling]], [[human-in-the-loop-ai|human-in-the-loop-AI]] och [[learning-analytics|lärandeanalys]]. Dessa ligger i det tekniska lagret eftersom de är AI-systemen själva, åtskilda från de pedagogiker de förverkligar.

## AI inom disciplinerna

AI tillämpas inom discipliner och utbildningsnivåer. Kunskapsbasens [[discipline-specific-aied|översikt över AIEd inom disciplinerna]] kartlägger ämnesområdestäckningen — vid sidan av [[learning-sciences|lärandets vetenskaper]], som inte är ett undervisningsämne utan det övergripande forskningsfältet som studerar lärande i sig och betraktar ämnesinnehållet som en variabel bland andra:

- **Ämnesområden:** [[math-education|matematik]], [[physics-education|fysik]], [[chemistry-education|kemi]], [[biology-education|biologi]], [[cs-education|datavetenskap]], [[engineering-education|ingenjörsutbildning]], [[stem-education|STEM]], [[writing-education|skrivande]], [[language-learning|språkinlärning]], [[english-education|engelskkunskap (EAP/EFL/ESL)]], [[science-education|naturvetenskaplig utbildning]], [[business-education|ekonomi och management]], [[humanities-education|humaniora och samhällsvetenskap]], [[arts-design-and-media-education|konst-, design- och medieutbildning]], [[medical-education|vård- och hälsoutbildningar]], [[legal-education|juridikutbildning]] och de professionella och tillämpade strängarna — [[nursing-education|sjuksköterskeutbildning]], [[information-technology|informationsteknik]], [[vocational-education|yrkesutbildning]] och [[design-education|designutbildning]].

## Nivåer och sammanhang

Samma AI-verktyg möter mycket olika miljöer, och kunskapsbasen håller isär utbildningsnivån från pedagogiken så att fynd inte i tysthet överförs mellan dem: [[k-12|K-12-skolor]], [[early-childhood-elementary-ai-education|förskoleklass och grundskola]], [[higher-ed|högskola]], [[adult-learning|vuxenlärande]], [[vocational-education|yrkesutbildning]], [[special-education|specialpedagogik]] och [[teacher-education|lärarutbildning]]. Ämnesnärliggande begrepp som skär över nivåer omfattar [[universal-design-for-learning|universal design for learning]], [[neurodiversity|neurodiversitet]], [[multilingual-learning|flerspråkigt lärande]] och [[social-emotional-learning|social-emotionellt lärande]].

## Bedömning och mätning

AI förvandlar både hur vi bedömer elever och hur vi utvärderar AI-systemen själva:

- **Bedömning och feedback:** [[assessment|bedömning]], [[formative-assessment|formativ bedömning]], [[summative-assessment|summativ bedömning]], [[authentic-assessment|autentisk bedömning]], [[eportfolio|e-portfölj]], [[feedback|feedback]] och [[feedback-literacy|feedbackkompetens]], [[ai-feedback-quality|kvalitet på AI-feedback]], [[peer-assessment|kamratbedömning]], [[oral-assessment|muntlig bedömning]], [[automated-assessment|automatiserad bedömning]], [[automated-essay-scoring|automatisk rättning av uppsatser]] och [[automated-question-generation|automatisk generering av frågor]]. Eftersom en modell nu kan producera plausible färdigt arbete på begäran lyfter kunskapsbasen fram den förmåga som förblir elevens egen: [[evaluative-judgment|värderande omdöme]], förmågan att bedöma kvaliteten på eget arbete, kamraters arbete och AI-output mot genomtänkta kriterier. Det är det begrepp flera feedback- och autentisk-bedömningsstudier konvergerar mot — det hybrida feedbackvillkoret som överträffar direkt AI-feedback i ett flercenterförsök, hållbarhetsglappen i formativ AI-feedback, och det praktiska steget att bedöma de beslut elever fattar snarare än enbart artefakten — och det är en central orsak till att omarbetning i AI-eran förskjuts från [[ai-detection|detektering]] mot uppgifter vars integritet klarar inspektion. Även [[group-work|grupparbete]] bedöms längs både process och produkt, där team måste förhandla om vilket och vilken typ av AI-engagemang som räknas som acceptabelt.
- **Mätning och validitet:** [[assessment-validity|bedömningsvaliditet]], [[psychometrically-aware-ai|psykometriskt medveten AI]], [[educational-measurement|utbildningsmätning]], [[item-response-theory|item response-teori]], [[self-report-measures|självskattningsmått]] (instrumentet bakom en stor del av detta underlag, och en återkommande begränsning), [[ai-detection|AI-detektering]], [[remote-proctoring|distansövervakad examination]] och [[academic-integrity|akademisk integritet]].

## Forskningsmetoder och utvärdering

Hur vi vet om AI fungerar är en egen sträng, och kunskapsbasen behandlar den som en:

- **Forskningsmetoder:** [[research-methods-aied|forskningsmetoder inom AIED]] som paraply, med [[qualitative-research|kvalitativa]], [[quantitative-research|kvantitativa]], [[mixed-methods-research|blandade metoder]], [[design-based-research|designbaserade]] och [[usability-research|användbarhetsinriktade]] tillvägagångssätt, plus [[rct|randomiserade kontrollerade försök]], [[meta-analysis-systematic-review|metaanalys och systematisk genomgång]] och [[network-analysis|nätverksanalys]].

Fältets eget forskningsarbete är nu ett ämne i sig. [[ai-assisted-educational-research|AI-assisterad utbildningsforskning]] täcker AI som instrument för litteratursökning, screening, kvalitativ kodning, analys och skrivande, inklusive praktikernära forskning som scholarship of teaching and learning. Det förblir åtskilt från de designer som används för att studera vad AI gör med elever.

- **Utvärdering av AI-system:** [[ai-ed-evaluation|utvärdering inom AI-utbildning]] och [[benchmark|benchmarktest]] för att bedöma ett systems förmåga, med [[learning-gains|lärandeeffekter]] som det utfall som betyder något, och de [[limitations-in-aied-research|övergripande begränsningarna]] i detta underlag och [[interpreting-and-applying-aied-research|hur man läser en enskild studie]] som den varnande motvikten.

## Människor

AI i utbildningen förändrar rollerna för varje intressent. Kunskapsbasens sida [[stakeholders|Intressenter inom AI i utbildningen]] är paraplyt som täcker dem alla:

- **Elever:** [[student-experience|elevernas erfarenhet]], [[career-development-and-readiness|karriärutveckling och beredskap]] och [[anxiety-and-stress|AI-oro och stress]] formar hur elever möter AI.
- **Familjer och samhällen:** [[parents-and-families|föräldrar och familjer]] är den målgrupp skoler oftast vänder sig till om AI och den med minst forskning bakom sin vägledning, så deras frågor hör hemma i intressentbilden snarare än utanför den.
- **Pedagoger och undervisningsramverk:** [[teacher-ai-competency|lärares AI-kompetens]], [[tpack|teknologiskt pedagogiskt ämneskunnande (TPACK)]], [[samr-model|SAMR]] och [[educational-development|utveckling av undervisningen]] behandlar pedagogers förberedelse och stöd.
- **Utvecklare:** [[educational-technology-developers]] — produktdesignerna, mjukvaruutvecklarna, utbildningsingenjörerna och analytikerdesignerna som förvandlar en modellförmåga till något en institution kan anskaffa. De är en distinkt målgrupp från praktikerna och administratörerna ovan, och de står utanför de institutioner som antar deras verktyg, vilket är varför standardinställningar, samdesign och underhåll efter finansiering förekommer i denna kunskapsbas som pedagogiska snarare än kommersiella frågor.

## Institutioner och politik

Det institutionella lagret är där AI-beslut faktiskt fattas och försvaras: [[administrator|administratörer]] och institutionella ledare, [[educational-policy-ai|utbildningspolitik för AI]], [[governance|AI-styrning]], [[change-management|förändringsledning]] som arbetet med att få en adoption att hålla, [[regulation|AI-reglering]], samt upphandlings- och plattformfrågorna som följer av [[technology-acceptance-model|teknikadoption]], [[open-source|öppen källkod]] och [[edtech-platform|edtech-plattformar]], vid sidan av [[lifelong-learning|yrkesinriktat och livslångt lärande]] och [[professional-training|yrkesutbildning]].

## Rättvisa, etik och ansvarsfull användning

Rättvisa, tillgång och ansvar är centrala för AI i utbildningen:

- **Rättvisa och tillgång:** [[equity-in-ai-education|rättvisa]], [[differential-effects-across-learner-groups|differentiella effekter mellan elevgrupper]] (frågan om för vem ett fynd gäller), [[digital-divide|den digitala klyftan]], [[bias-mitigation|biasreducering]], [[culturally-relevant-pedagogy|kulturellt relevant pedagogik]], [[multilingual-learning|flerspråkigt lärande]], [[inclusive-learning|inkluderande lärande]], [[accessibility|tillgänglighet]], [[assistive-technology|assistiv teknologi]], [[neurodiversity|neurodiversitet]], [[universal-design-for-learning|universal design for learning]] och forskning om [[global-south|det globala Syden]].
- **Etik och ansvar:** [[ethics|AI-etik]], [[ai-misuse-learning-harm|AI-missbruk och lärandeskada]], [[legal-issues-and-risks|rättsliga frågor och risker]], [[ai-use-disclosure|deklaration av AI-användning]], [[guardrails|skyddsräcken]], [[privacy|integritet]], [[hallucination-risk|hallucinationsrisk]], [[ai-sycophancy|AI-smickring]], [[trust|förtroende]], [[trust-calibration|förtroendekalibrering]], [[reducing-ai-misuse|att minska AI-missbruk]], [[framing-ai-use-for-students|hur AI-användning ramas in för elever]], [[pedagogical-safety|pedagogisk säkerhet]], [[sustainability|hållbarhet]] och [[cognitive-offloading|kognitiv avlastning]].

En [[meta-analysis-systematic-review|systematisk genomgång]] av fältets etiklitteratur ([[agarwal-ethical-values-norms-aied-2026|Agarwal m.fl. 2026]], 25 artiklar) konsoliderar AIED-etik till sex huvudsakliga etiska värden — ickediskriminering, förvaltning av data, mänsklig tillsyn, välvilja, förklarbarhet och utbildningsmässig lämplighet — och avbildar de etiska normerna i en intressent-för-värde-matris. Studien finner slutanvändare till stor del passiva i etiklitteraturen (elevröster i praktiken frånvarande) och efterlyser integration av etik i AIED-design och ett större fokus på den utbildningsmässiga (pedagogiska) dimensionen av AIED-etik.

## Framväxande och övergripande teman

Flera teman skär över fältet:

- **Förtroende och kritiskt bruk:** [[trust|förtroende]], [[trust-calibration|förtroendekalibrering]], [[ai-sycophancy|AI-smickring]], [[critical-thinking|kritiskt tänkande]], [[cognitive-offloading|kognitiv avlastning]], [[critical-pedagogy|kritisk pedagogik]] och [[reducing-ai-misuse|att minska AI-missbruk]] (se även [[framing-ai-use-for-students|hur AI-användning ramas in för elever]]). Hur elever och lärare beslutar att anta och lita på AI modelleras av forskning om [[technology-acceptance-model|teknikacceptans]], medan forskning om [[global-south|det globala Syden]] lyfter fram rättvisa och kulturellt sammanhang i adoptionen. Empiriskt formar det hur AI förklarar sig själv detta förtroende: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor m.fl. (2025)]] visade att [[explainable-ai|förklarbar AI]] bygger lärares förtroende för AI-rekommendationer genom begriplighet, med domändrivna (kurrikulärspråkliga) förklaringar som åtnjuter högre förtroende och acceptans än datadrivna output om variabelbetydelse.
- **Fältets utveckling:** kunskapsbasen spårar AI i utbildningen från tidiga [[intelligent-tutoring|intelligenta handledarsystem]] och [[knowledge-tracing|kunskapsspårning]] till LLM-driven [[intelligent-tutoring|handledning]], [[pedagogical-agent|agenter]] och [[agentic-ai|agentisk AI]] — en snabb förskjutning från verktygscentrerade studier till sociotekniska ramverk ([[design-thinking|designtänkande]], [[curriculum-design|kurrikulumdesign]], [[institutional-change-framework-ai|institutionell förändring]]), och från handskrivna system till användardrivna arbetsflöden där en elev eller en [[teacher-role|icke-programmerare]] specificerar beteende på naturligt språk ([[vibe-coding|vibe coding]]). [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] formaliserar denna bana med sitt AI×Ed-ramverk och spårar artiklar över fyra decennier av konferenshandlingar för att visa att fältet gick från en blandad mängd — inklusive betydande forskning som behandlade AI som en analogi till mänsklig intelligens och lärande — mot ett nästintill exklusivt fokus på tillämpade, datadrivna, forskarinriktade användningar, en vändning som framväxten av [[llm|LLM:er]] nu tycks delvis reversera (tre av de fyra "AI-som-analogi"-artiklarna vid AIED 2024 var LLM-baserade).
- **Känslor, oro och karriärsframtid:** AI framkallar och formar känslomässiga reaktioner — [[anxiety-and-stress|AI-oro och stress]] omfattande övervakning vid examination, integritetsfarhågor och fördrivning från arbetsmarknaden — medan [[career-development-and-readiness|karriärutveckling och beredskap]] handlar om hur utbildningen förbereder elever för en AI-störd arbetsmarknad (se även [[well-being|välbefinnande]]).

## Fältets mognad

Kunskapsbasen speglar ett fält i snabb utveckling — från tidiga intelligenta handledarsystem till LLM-driven handledning och agentisk AI; från detekteringsfokuserade verktyg för akademisk integritet till omarbetning av bedömningen; från verktygscentrerade studier till sociotekniska och rättviseinriktade ramverk. Evidensbasen betonar i allt högre grad rigorös [[research-methods-aied|forskningsmetodik]], [[ai-ed-evaluation|utvärdering]], [[rct|experimentella designer]] och långsiktiga utfall.

## Kopplingar

AI i utbildningen kopplar till varje begrepp i kunskapsbasen — det är fältet som alla andra begreppssidor tillsammans definierar. Använd den här sidan som utgångspunkt för att navigera hela kunskapsbasen.

## Anslutna begrepp
- [[pedagogical-patterns]] — De beprövade sekvenser som operationaliserar fältets pedagogiker
- [[ai-literacy]] — paraply: att förstå, använda och utvärdera AI
- [[human-ai-collaboration]] — paraply: hur människor och AI arbetar tillsammans
- [[pedagogy]] — paraply: undervisningsmetoder och strategier
- [[learning-theories]] — paraply: hur lärande sker
- [[ai-technologies]] — paraply: modeller, tekniker och system
- [[discipline-specific-aied]] — paraply: AI över ämnesområden och nivåer
- [[assessment]] — paraply: hur AI bedömer elever och omformar validitet
- [[feedback]] — paraply: hur feedback genereras, levereras och används
- [[stakeholders]] — paraply: vilka aktörerna är
- [[learners]] — paraply: elevsidans begrepp (erfarenhet, identitet, handlingsutrymme, interaktion, elevmodeller)
- [[ai-ed-evaluation]] — paraply: hur vi vet om AI fungerar
- [[research-methods-aied]] — paraply: effektforskningsmetoder
- [[ai-assisted-educational-research]] — AI-assisterad utbildningsforskning
- [[governance]] — paraply: det institutionella och regulatoriska lagret
- [[educational-policy-ai]] — paraply: politik, vägledning och implementering
- [[equity-in-ai-education]] — paraply: rättvisa, tillgång och inkludering
- [[learning-sciences]] — det empiriska fältet bakom AIED
- [[ethics]] — de etiska dimensionerna av AI i utbildningen
- [[misconceptions]] — de mentala modeller människor tar med sig till AI
- [[interpreting-and-applying-aied-research]] — att läsa en studie och föra ett fynd in i praktiken
- [[limitations-in-aied-research]] — övergripande begränsningar i evidensbasen
- [[meta-analysis-systematic-review]] — vad genomgångarna och metaanalyserna fastställer
- [[history-of-aied]] — hur fältet utvecklades
- [[philosophy-of-ai-in-education]] — de filosofiska grunderna
- [[theories-and-frameworks]] — kartan över teori- och ramverksnoder
- [[theory-development-aied]] — att bygga och revidera teori

## Anslutna artiklar

Fältomfattande genomgångar av AI i utbildningen — de studier som beskriver hela fältet eller en hel utbildningsnivå snarare än ett enskilt ämne:

- [[rismanchian-ai-education-four-decades-aixed-2026]] — Utvecklingen av forskning om AI och utbildning över fyra decennier (ramverket AIxEd)
- [[mishra-control-vs-agency-history-2025]] — Kontroll vs. handlingsutrymme: en historia om AI i utbildningen
- [[genai-higher-education-systematic-review-2026]] — Generativ AI i högre utbildning: systematisk genomgång av 125 studier
- [[stanford-evidence-base-ai-k12-2026]] — Evidensbasen om AI i K-12: en genomgång av 818 artiklar
- [[genai-educational-outcomes-meta-analysis]] — Generativ AI och utbildningsutfall: omfattande metaanalys
