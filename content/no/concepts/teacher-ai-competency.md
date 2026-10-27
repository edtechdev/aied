---
title: "Læreres AI-kompetanse"
created: "2026-10-27T17:08:16-04:00"
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
updated: "2026-10-27T17:08:16-04:00"
translation_note: "*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

> **Læreres AI-kompetanse**: den kunnskapen, de ferdighetene og de holdningene lærere trenger for å integrere AI i undervisning og læring på en effektiv, etisk og likestilt måte. Den rekker utover teknisk verktøybruk og omfatter [[pedagogy|pedagogisk]] integrasjon, [[assessment|vurderingskompetanse]], etisk dømmekraft og tryggheten til å [[ai-literacy|bruke AI godt]]. Læreres AI-kompetanse er lærersidens motstykke til [[ai-literacy]], og utvikles gjennom [[educational-development|profesjonell utvikling]]. Den er sentral for hvordan [[teacher-role|lærerrollen]] endres i AI-augmenterte klasserom.

## Spørsmål å vurdere

- Siden argumenterer for at læreren er «den avgjørende faktoren» for om AI forbedrer læring, og at verktøy bare hjelper når lærere kan planlegge for dem, støtte bruken og vurdere output. Stemmer det med din erfaring, eller mener du verktøyet selv betyr mer enn læreren?
- Læreres AI-kompetanse spenner over teknisk dyktighet, pedagogisk integrasjon, vurderingskompetanse og etisk dømmekraft. Hvilke av disse mener du lærere mangler mest, og hvilken er vanskeligst å trene opp?
- [[research-methods-aied|Forskningen]] dokumenterer et gap mellom læreres selvopplevde og faktiske AI-ferdigheter. Hvorfor tror du folk overvurderer egen beredskap, og hva skulle til for å lukke gapet på en ærlig måte?
- Et intensivt program for profesjonell utvikling ga store gevinster i AI-pedagogisk ferdighet i forskningen som siteres, noe som antyder at teknisk-pedagogisk ferdighet er trenbar. Hvis det er sant, hvorfor virker så mange lærere fortsatt uforberedte, og hva står i veien?
- Hvis en lærer kan «bruke AI godt», hva betyr «godt» for deg, og hvordan ville du vite at en lærer har oppnådd det snarere enn bare tatt verktøyet i bruk?

## Innledning

Læreres AI-kompetanse er viktig fordi læreren er den avgjørende faktoren for om AI forbedrer læring. Forskningen viser konsekvent at AI-verktøy bare omsettes til bedre resultater når lærere kan planlegge for dem, støtte studentenes bruk, vurdere output og integrere dem i sammenhengende undervisning. Kunnskapsbasens litteratur undersøker *dimensjonene* ved denne kompetansen, *gapene* mellom selvoppfatning og faktisk ferdighet, og den *profesjonelle utviklingen* som bygger den.

[[nunez-canal-stakeholder-engagement-ai-competency-2026|Nunez-Canal et al. (2026)]] kobler faglæreres AI-kompetanse direkte til studentutfall, og bruker humankapital- og interessentteorier på en undersøkelse blant faglærere i næringsliv og økonomi for å argumentere for at universitetenes investering i faglærerkompetanse ikke er valgfri.
- **Prompttrening kjøper tid, ikke bedre materiell.** I en forhåndsregistrert RCT med 204 lærere fant Appel, Fervers og Piepenburg (2026) at ChatGPT forbedret kvaliteten på forberedelsesmateriell til undervisning og kuttet forberedelsestiden med 34%, mens tidligere AI-opplæring ga ytterligere 21% tidsreduksjon uten å forbedre den vurderte kvaliteten ([[appel-genai-teacher-lesson-preparation-experiment-2026|Appel et al., 2026]]). Opplærte lærere skrev lengre prompter og itererte mindre; begge veiene nådde samme kvalitet.

## Kjernedimensjoner i kompetansen

Kunnskapsbasens forskning samler seg om flere sammenkoblede dimensjoner:

- **Teknisk dyktighet:** å utforme effektive [[prompt-engineering|prompter]] for pedagogiske formål, [[ai-ed-evaluation|vurdere AI]]-verktøy for pedagogisk egnethet og sikkerhet, og feilsøke svikt i sanntid. [[genai-pd-ai-pck-learning-gain-2026|Et intensivt GenAI-PD-program]] dokumenterte signifikante gevinster på alle fem AI-PCK-komponenter (samlet *d* = 2,36), noe som viser at teknisk-pedagogisk ferdighet er trenbar.
- **Å spesifisere agentarbeidsflyter:** når lærere konfigurerer en chatbot på naturlig språk, er den dominerende svikten tapt intensjon snarere enn gale fakta: botene hoppet over påkrevde arbeidsflyttrinn i 53,8% av sluttbrukersamtalene og utelot oppsett av forventninger i 33,4% ([[eduwild-teacher-configured-chatbots-failures-2026|Liu et al. (2026)]]), slik at det å skrive ordnede, eksplisitte trinn er en trenbar kompetansedimensjon i seg selv.
- **Pedagogisk kunnskap er det avgjørende laget.** En tverrnivåstudie av [[k-12|videregående]] [[ai-education|AI-undervisning]] ([[pedagogy-first-technology-second-teacher-knowledge-2026|46 lærere, 2 832 elever]]) fant at teknisk AI-kunnskap alene ikke var tilstrekkelig, og til og med kunne redusere elevenes oppfatning av AI for samfunnsnytte noe, mens pedagogisk AI-kunnskap drev elevenes oppfatninger og deres intensjon om å lære AI. Kompetanserammeverk bør derfor vekte pedagogisk AI-kunnskap som den sentrale dimensjonen, ikke som et mykt tillegg.
- **Pedagogisk integrasjon:** å koble AI-bruk til læringsmål, utforme [[scaffolding|støtte]] som fremmer studentenes [[metacognition|metakognisjon]] og selv[[regulation|regulering]], og integrere AI i [[learning-design|undervisningsdesign]]. [[ai-tpack-teacher-multi-agent-workflow|AI-TPACK-forskning]] modellerer hvordan lærere kombinerer teknologisk, pedagogisk og faglig kunnskap gjennom multi-[[agentic-ai|agent]]-arbeidsflyter, mens [[teacher-ai-teaming-five-levels|et femnivårammeverk for lærer-AI-teaming]] (transaksjonelt → synergistisk) fanger hvordan [[generative-ai|GenAI]] kan erstatte, utfylle eller forsterke lærerkompetanse.
- **Vurderingskompetanse:** å vurdere AI-generert innhold og studentenes AI-output, og å forstå hvordan [[assessment-validity|validitet]] endres når studenter bruker AI. Dette henger sammen med [[automated-assessment]], [[ai-detection]] og den bredere agendaen for redesign av [[assessment|vurdering]]. For anbefalingssystemer strekker dette seg til å bedømme om en AI sine forklaringer er genuint forståelige og pedagogisk meningsfulle: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] fant at lærere stolte mer på AI-grupperingsanbefalinger når forklaringene var rammet inn i faglig (læreplanmessig) språk, enn når de blottla råe modelltrekk, en ferdighet i å kreve og vurdere [[explainable-ai|forklaringskvalitet]] snarere enn å akseptere uigjennomsiktig output.
- **Modellvalg og promptdesign som påvisbare ferdigheter:** instrumentell [[ai-literacy]] omfatter å vite hvilken modell som skal brukes og hvordan oppgaven skal formuleres. [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] lot ChatGPT-4, Claude 3 og Gemini Advanced kritisere 153 lærerstudenters planleggingsmål for undervisning under fire systematisk varierte prompter (N = 240 tilbakemeldinger i studium 1, 345 i studium 2), med [[feedback|tilbakemeldingene]] vurdert på ni kvalitetskategorier. Modellvalg alene forklarte 26,9% av variansen i vurdert kvalitet (18,4% i studium 2), og promptdesign la til signifikante 15,9% (5,7%) på toppen; det enkeltstående avgjørende prompttrekket var domenespesifikt teknisk språk, hvis fjerning senket kvaliteten signifikant (β = -0,412), mens det å legge til eksempler og fjerne chain-of-thought-instruksjonen ikke gjorde noen signifikant forskjell i studium 1. Deres lesning, at fagterminologi både låser opp relevant innhold fra treningsdataene og rammer inn forespørselen profesjonelt, som rollegivende prompting, pluss en tommelfingerregel om å bruke den mest kapable tilgjengelige frontiermodellen, gjør modellvalg til en didaktisk beslutning snarere enn en teknisk.
- **Etisk og kritisk bruk:** å gjenkjenne [[bias-mitigation|skjevhet]] i AI-output, beskytte studentdata ([[privacy]]) og sikre likeverdige utfall ([[equity-in-ai-education]]). [[llm-cultural-relevance-k12|Kulturrelevant AI-bruk]] undersøker hvordan lærere kan bruke LLM-er til å variere materiell snarere enn å forsterke dominerende normer.
- **Etisk ansvar er distribuert, ikke individuelt.** På tvers av sju nasjonale caser plasseres lærere som moralske portvakter for AI-bruk mens de mangler institusjonell og epistemisk støtte, slik at etisk AI-kompetanse må strekke seg til kritisk og politisk agens snarere enn teknisk ferdighet ([[raffaghelli-situated-ai-ethics-2026|Raffaghelli et al. (2026)]]).
- **Trygghet og holdninger:** læreres [[self-efficacy|trygghet]] former adopsjon. [[teacher-ai-adoption-confidence|Adopsjonsforskning]] finner at trygghet, støtte og opplevd nytte avgjør om lærere faktisk bruker AI, og [[ai-pedagogical-orientation|faglærerorienteringer]] former adopsjon i forskning og undervisning.

- I en femlandundersøkelse blant 1 405 K-12-lærere forutsa AI-beredskap positive oppfatninger om GenAIs undervisningsverdi (B = ,59, R² = ,50), men forutsa *større* bekymring for [[creativity|kreativitet]] (B = ,18), og de samme prediktorene forklarte bare 7% og 6% av bekymringen: beredskapsbygging alene lar bekymringen stå urørt ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).


Beredskap bør ordnes og måles deretter: Capability-Decision Model plasserer påvist AI-kapabilitet oppstrøms for holdning og trygghet, og foreslår resultatindikatorer snarere enn bare selvrapportering: oppgaver med undervisningsdesign, promptvurderingsoppgaver seedet med feil, vurderinger av innholdsvaliditet og rubrikker for klasseromsartefakter ([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

**Emosjonell og moralsk beredskap er en egen dimensjon.** [[vassallo-ai-guilt-complex-faculty-2026|Vassallo (2026)]] undersøkte det akademiske personalet ved et maltesisk [[higher-ed|universitet]] (109 respondenter) og bygde en AI Guilt Index (α = 0,88) av fire moralske emosjonsledd, og fant at *forventet* skyld veide tyngre enn anger etter bruk: den sterkeste tilslutningen var bekymring for at AI-bruk undergraver ens troverdighet (34,9% enige), deretter følelsen av å [[academic-integrity|jukse]] når man bruker det (25,7%), mens anger etter bruk bare fikk 9,2%. Funnene som betyr noe for kompetanserammeverk, er at ikke-brukere rapporterte *høyere* skyld enn brukere (M = 3,25 mot M = 2,32), og at skylden falt etter hvert som karrieretryggheten steg: akademikere tidlig i karrieren rapporterte mest (M = 2,71) og seniorakademikere minst (M = 2,03). Emosjonell beredskap fanges derfor ikke av ferdighets- eller trygghetsmål, og artikkelen argumenterer for at kompetanserammeverk bør behandle skyld og identitetsbekymring som normale overgangsresponser snarere enn feil som skal korrigeres.

En sterkere versjon av denne omrammingen hevder at GenAI er et terskelbegrep snarere enn et ferdighetsgap: en autoetnografisk redegjørelse argumenterer for at faglæreres [[anxiety-and-stress|angst]] og motstand er konstitutive for terskelovergangen, slik at ferdighetsbasert opplæring svikter og prinsipiell ikke-adopsjon bør respekteres snarere enn korrigeres ([[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]]).
"""

## Kompetansegapet

Et sentralt funn er **gapet mellom [[self-report-measures|selvrapportert]] og prestasjonsbasert kompetanse**. [[ai-literacy-assessment-misalignment|Forskning på vurdering av AI-kompetanse]] dokumenterer et betydelig avvik (opptil rundt 40%) mellom hva lærere *tror* de kan og hva de faktisk kan *demonstrere*: lærere som er trygge på AI-ferdighetene sine, mangler ofte grunnleggende prompt- og vurderingsevner. Dette motiverer **[[assessment|prestasjonsbasert vurdering]]** av lærerkompetanse snarere enn å stole på selvrapportering, og henger sammen med [[self-assessment|kalibrert selvvurdering]]. En nasjonal undersøkelse blant 2 586 nigerianske lærere i videregående skole målte de to sidene med separate instrumenter: moderat AI-bevissthet (M = 3,13 av 8) mot lavere AI-pedagogisk ferdighet (M = 2,47 av 5), med høyere rapportert ferdighet blant lærere tidlig og midt i karrieren enn blant erfarne kolleger ([[nigerian-teachers-ai-awareness-pedagogical-skills-2026|Olurinola et al., 2026]]).

**Beredskap er den mest dokumenterte hindringen i matematikkfaglitteraturen.** En gjennomgang av 54 studier i matematikkdidaktikk fant at teknologisk-pedagogisk integrasjon og lærerberedskap var den hyppigst rapporterte utfordringen (38 av 54), foran vurderingsvaliditet og integritet (26) og overavhengighet (24) ([[manto-ai-integration-mathematics-education-systematic-review-2026|Manto et al. (2026)]]).

Gapet gjelder ikke bare forskjellen mellom opplevd og faktisk ferdighet, men også *bredden* i det lærerne kan: en nasjonal undersøkelse blant 2 018 ukrainske lærere i videregående skole fant at 84% rapporterte å bruke AI i profesjonell praksis, mens bare 11% kunne navngi en spesialisert AI-tjeneste utover ChatGPT ([[ukraine-ai-literacy-secondary-framework-2026|Marienko, Markova & Semerikov (2026)]]). En andre innsnevring viser seg i det lærerne selv tar opp, snarere enn i det de kan navngi: 53 yrkesaktive lærere som merket egne klasseromscaser mot OECDs AI Literacy Framework, beskrev 43 AI-kompetente praksiser mot bare 10 sviktende ([[ailithub-ai-literacy-case-infrastructure-2026|Wang et al., 2026]]). Kompetansevalgene deres klumpet seg om praktisk dømmekraft (vurdering av AI-output, N = 38) og nådde sjelden samfunnsmessig skjevhet (N = 5), etisk samsvar (N = 6) eller AI-ens energibruk (N = 9).

En undersøkelse blant 132 lærere i Indonesia fant nesten universell aksept sammen med tynn mekanistisk forståelse: 96,2% støttet læreres AI-bruk, men bare 4,6% nevnte tokenisering eller dekoding, og 21,5% trodde ChatGPT søkte i en database eller på internett ([[ai-misconceptions-indonesian-k12-teachers-2026|Aji et al. (2026)]]). En positiv holdning er ikke bevis på en brukbar mental modell av verktøyet.

Gapet er synlig i artefakten så vel som i selvrapporteringen. Et [[ai-integration-instructional-design-collaboratory-2026|tverrinstitusjonelt faglærerkollektiv i lærerutdanningen]], der lærerutdannere designet AI inn i sine egne metodeemner, rapporterte at kandidatene kunne produsere polerte AI-assisterte undervisningsopplegg uten å kunne forklare hvorfor et opplegg passet for elevene og læreplanen, siden selve opplegget ikke sier noe om resonneringen bak. Å sensurere begrunnelsen snarere enn produktet er én respons. [[bondurant-shaughnessy-ai-pedagogies-practice-2026|Rammeverket pedagogies of practice]] antyder en annen, ved å behandle prøving som en tilnærming til praksis: AI-formidlet prøving med strukturert tilbakemelding etter prøvingen økte kandidatenes bruk av undersøkende og utforskende spørsmål, men kandidatenes egne vurderinger av prestasjonen avvek fortsatt fra det observatørene registrerte.

**En fallende selvvurdering etter opplæring kan signalisere læring snarere enn tap.** I et seks måneders [[tpack|Intelligent-TPACK]]-program for [[educational-development|profesjonell utvikling]] med 64 universitetslærere i Hongkong mot 61 i kontrollgruppe steg den samlede AI-kompetansen med rundt en halv standardavvik (Cohens d = -,521), men noen lærere i begge gruppene skåret lavere ved ettertest enn ved førtest ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng & Ling, 2025]]). Intervjuer tilskrev nedgangen et skifte fra ubevisst til bevisst inkompetanse, den rekalibreringen Dunning-Kruger-effekten forutsier, snarere enn tapt ferdighet. Forfatterne konkluderer med at selvrapportering før og etter undervurderer en intervensjon, fordi en del av gevinsten kommer som en nedadgående korreksjon i instrumentet selv.

**Gapet viser seg også som ikke-deltakelse.** [[watson-rainie-ai-challenge-faculty-survey-2026|Watson & Rainie (2026)]] undersøkte 1 057 amerikanske universitetslærere sent i 2025 og fant at 26% ikke bruker [[generative-ai|generativ AI]]-verktøy i det hele tatt, at en tredjedel velger å ikke bruke dem til undervisning, og at ikke-bruken konsentreres i kunst- og [[humanities-education|humaniorafag]] (40%). Den institusjonelle siden av gapet var større enn den individuelle: 68% sa at deres institusjon ikke hadde forberedt faglærerne på å bruke generativ AI til undervisning og veiledning, og faglærerne oppga kollegers motstand (82%) og ukjenthet (83%) som de ledende hindringene for adopsjon ved instituttet, et bilde der kapasitetsbygging, kollegiale normer og policy alle må bevege seg sammen.

**Lærerutdanningen går i stor grad utenom den etiske dimensjonen av kompetansen.** En [[meta-analysis-systematic-review|systematisk oversikt]] over AI i grunnutdanningen for lærerstudenter i matematikk for barnetrinnet ([[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto et al. 2026]], 11 studier valgt ut av 341 poster) fant at intervensjonene konsentrerte seg om kortsiktige tekniske og pedagogiske gevinster, med ni av de elleve som korte intervensjoner på én til seks økter, og rapporterte at etikk ble behandlet i bare tre av de elleve studiene. Kompetanserammeverkene nevner etisk dømmekraft som en dimensjon; litteraturen om lærerutdanning som skal bygge den, underviser sjelden i eller måler den.

- **Sju kompetanseklynger, med etikk som det svakeste leddet.** En tematisk syntese av 78 studier gir klynger for prompt engineering, kritisk vurdering av AI-output, etisk bevissthet og skjevhetsdeteksjon, pedagogisk-innholdsmessig samsvar, begrepsmessig AI-kompetanse, menneskelig tilsyn og refleksjon. Prompt engineering var den mest konsekvent dokumenterte og oppfører seg som et **utviklingsspekter** snarere enn en enkelt ferdighet, noe som fikk gjennomgangsforfatterne til å argumentere for at det best forstås som pedagogisk resonnering utført gjennom et nytt medium: prompten som en eksternalisert designbeslutning. Etisk bevissthet var den **svakest dokumenterte kompetansen** i studiene om lærerstudenter ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Lærere overvurderer egen vurderingsevne.** Utover funnet om at bare **38,3% av AI-genererte læringsmål oppfylte alle kvalitetskriterier uten revisjon**, **overvurderer lærerstudenter systematisk evnen sin til å vurdere chatbot-output**, noe gjennomgangsforfatterne leser som en mulig perseptuell snarere enn deklarativ svikt. Det er grunnen til at de argumenterer for at kompetanse bør vurderes gjennom prestasjonsartefakter (undervisningsopplegg, beslutningslogger, mikro-undervisning) snarere enn selvrapportering: upåliteligheten i selvvurdering er demonstrert i nettopp den litteraturen opplæringen skal adressere.

## Profesjonell utvikling som virker

Kunnskapsbasens litteratur om profesjonell utvikling identifiserer effektive tilnærminger:

- **Intensive, teoriforankrede programmer:** [[genai-pd-ai-pck-learning-gain-2026|Et intensivt GenAI-PD-program]] med 163 lærere og lærerstudenter ga signifikante gevinster på alle AI-PCK-komponenter, med størst utbytte for lærerstudentene. [[teacher-education-ai-literacy-sdt-2026|PD basert på selvbestemmelsesteori]] viser at behovsstøttende opplæring forbedrer læreres AI-kompetanse, holdninger og [[student-engagement|engasjement]] mens den reduserer angst.
- **[[design-based-research|Designbaserte]] og integrerte tilnærminger:** [[genai-literacy-training-teacher-education-dbr-2026|DBR-basert GenAI-kompetansetrening]] adresserer overvekten av teknisk kunnskap og verktøy fra før GenAI; [[rail-ed-genai-literacy-teacher-education|integrative, utviklingsorienterte rammeverk]] og [[sec-ai-literacy-narrative-review-2026|integrering av sosioemosjonell kompetanse]] utvider kompetansen utover ren teknikk.
- **Undersøkelse og autentisk praksis:** [[quest-ai-inquiry-preservice-teachers|AI-støttede undersøkelsesmodeller]] bygger AI-kompetanse og autentisk prestasjon hos lærerstudenter.
- **Kontekstspesifikk beredskap:** [[sangwa-epiq-ai-faculty-readiness-2026|EPIQ-AI-beredskapsrammeverket]] understreker at faglærerberedskap er et sosi teknisk spørsmål som krever samsvar mellom faglærerkapasitet, [[governance|styring]] og kvalitetssikring.
- **Støtten må differensieres etter erfaring og AI-dyktighet.** [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] fant at hvordan lærere faktisk samhandler med AI i undervisningsdesign, avhenger av *samspillet* mellom undervisningserfaring og AI-dyktighet, ikke av noen av dem alene. Erfarne lærere med høy AI-dyktighet tilpasser kritisk AI-output til konteksten (re-prompting, utdyping), mens nybegynnere, selv teknisk flytende, har en tendens til å akseptere AI-svar direkte og vurderer sjelden elever og kontekst. Dette taler for profileringsbasert PD: sjekklister for responsvurdering og promptmaler for nybegynnere, og praktisk ferdighetsbygging for erfarne lærere med lavere AI-dyktighet.
- **Tidsgevinsten følger selv erfaring og trygghet, ikke bare støttedesignet.** I [[roy-aila-lesson-planning-teacher-choices-2026|Roy et al.s (2026)]] forsøk med en AI-undervisningsassistent var arbeidsbelastningsreduksjonen større for lærere med lavere trygghet på fagkunnskap, lavere pedagogisk kunnskap, kortere tid i yrket eller høyere trygghet på teknologi. Dyktighet og trygghet er derfor en del av intervensjonens effekt, ikke bare av opptaket av den.


Oppfatningskonfigurasjon er en andre profileringsakse: blant 40 680 lærere i TALIS 2024 skjulte den samme ikke-bruksstatusen motsatte hindringer: 83,3% av profilen «likegyldig» oppga pedagogiske betenkeligheter, mens 66,2% av «måteholden tilslutning» oppga utilstrekkelig kunnskap og ferdigheter ([[teachers-ai-belief-profiles-talis-2024-2026|Fang & Jin (2026)]]). AI-relatert profesjonell læring fulgte profilmedlemskap mer konsekvent enn alder eller utdanningsnivå.

- **Lærere deler ikke én oppfatning av AI.** En fenomenografisk studie av 16 danske universitetslærere fant tre oppfatninger av å undervise med AI og tre av å lære med AI, slik at en enkelt workshopmodell bare når en del av en faglærergruppe ([[stenalt-good-education-teacher-ai-conceptions-2026|Stenalt (2026)]]).
- **Samdesign og pedagogisk promptkompetanse er kompetanser, ikke tillegg.** En [[meta-analysis-systematic-review|systematisk oversikt]] over læreres og AI-samdesign av læringsoppgaver ([[wang-teacher-ai-co-design-review-2026|Wang, Liu & Islam 2026]], 28 studier) finner at den dominerende samarbeidsmodusen er AI som assistent og innholdsgenerator, og lokaliserer et gap i lærernes evne til fullverdig samdesign og dialogisk partnerskap. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] viser at PD som parrer teknisk AI-opplæring med pedagogisk resonnering, og bygger «pedagogisk promptkompetanse» (å kode [[tpack|PCK]] inn i prompter), er det som lar lærere gjøre AI-output om til effektive [[collaborative-learning|differensierte gruppeaktiviteter]].
- **Strukturer som bygger kompetanse, snarere enn lister over den.** [[physics-faculty-learning-community-ai-2026|Perl-Nussbaum og Finkelstein (2026)]] drev et to ukentlige faglærerlæringsfellesskap over seks økter ved et stort offentlig R1-fysikkdepartement: nitten faglærere gjennom serien, rundt ti på hvert møte, der hver økt åpnet med lokale data, gikk over til smågruppetesting av AI mot ekte anonymiserte elevhjemmelekser, og ble avsluttet med felles diskusjon, og det produserte et felles arkiv med fem oppføringer snarere enn en opplæringspakke. Vurderingskompetanse kan bygges på samme måte gjennom et designverktøy: i [[authentic-assessments-generative-ai-pilot-2026|Paula et al.s (2026)]] pilot økte åtte erfarne emnekoordinatorer i STEM og helsefag sin vurderingskompetanse ved å kritisere en tilpasset GPTs vurderingsutkast mot faglige standarder, selv om outputene gjentatte ganger bommet på faglig kontekst, ignorerte emnerekkefølge og i ett tilfelle hadde fabrikkerte referanser gjennom gjentatt prompting. Alle åtte beholdt [[evaluative-judgment|akademisk dømmekraft]] hos seg selv og nektet ende-til-ende-automatisering, noe som gjør strukturert kritikk av genererte utkast til utviklingsmekanismen snarere enn verktøyopplæring.
- **Korte økter kan flytte aksept uten å flytte adopsjon.** [[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller og Böhme (2026)]] evaluerte en tre timers INSIGHT-økt med 100 tyske lærere og fant at både opplevd nytte og [[technology-acceptance-model|opplevd brukervennlighet]] steg signifikant (nytte t(99) = -3,24, p = ,002, d = ,32; brukervennlighet d = ,25), mens atferdsintensjonen om å bruke AI-baserte teknologier til differensiering ikke endret seg. Forfatterne bemerker at utgangsnivåene deres allerede var gunstige, så en takeffekt er plausibel. Lesningen for PD-design er smal men nyttig: en kort økt kan endre hvordan lærere vurderer AI-verktøy uten å endre om de planlegger å bruke dem, den typen endring som trenger oppfølging snarere enn en enkeltstående hendelse.

- **Undervisere foretrekker flyt, men tilskriver læring til stillas.** På tvers av 41 undervisere ble en GPT-4o-baseline foretrukket samlet (21 mot 13), men den finjusterte tre-trinnsmodellen (identifiser, utforsk, utvikle) ble oftere kreditert for læring (18 mot 13), og de to vurderingene var enige bare 39% av tiden ([[teachingcoach-chatbot-instructor-guidance|Molnar et al. (2026)]]).
- **Institusjonell støtte:** [[educational-development|profesjonell utvikling]] må kombineres med institusjonell infrastruktur ([[educational-policy-ai|policy]], [[institutional-change-framework-ai|institusjonell endring]]) for bærekraftig adopsjon.
- **Forfatterverktøy garanterer ikke pedagogisk troskap.** [[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]] studerte 27 ungdomsskolelærere som konfigurerte pedagogiske [[conversational-ai|chatboter]] i PD-workshops, og analyserte fokusgrupper sammen med konfigurasjons- og interaksjonslogger. Lærerne behandlet chatboten som et undervisningsstillass avgrenset av lærerdefinerte regler, men loggbasert samsvar mellom intensjon og atferd var sterkere for responsivitet (88,9%) og persona (81,5%) enn for regler (70,4%) og formål (59,3%). Konfigurerbare kontroller alene bærer ikke pedagogisk intensjon inn i atferd, slik at det å uttrykke, teste og forfine en chatbots pedagogikk selv er en kompetanse forfatterverktøyene må støtte.


Et designbasert moteksempel behandler kompetanse som situasjonell snarere enn et trinn på en stige. [[adaptive-ai-model-teacher-educators-2025|Eyal sin designbaserte studie fra 2025 med 22 lærerutdannere i høyere utdanning]] lot deltakerne undersøke fem publiserte vurderingsrammeverk og samdesigne et alternativ organisert rundt tre sammenkoblede akser: konteksttilpasning (infrastruktur, sosiokulturelle faktorer, lokale behov, utviklingsstadium), profesjonelle behov (fag, pedagogikk, ledelse, støtte) og dynamisk utvikling. Modellen avviser faste kompetansenivåer og tillater ikke-lineær progresjon, og den leveres med et refleksivt selvvurderingsskjema med 20 elementer vurdert 1 til 5. Valideringen er bare [[qualitative-research|kvalitativ]], uten [[quantitative-research|kvantitativ]] reliabilitetstesting, slik at den står som et designbidrag snarere enn et validert instrument.
- **Metaanalytisk anslag.** [[teacher-ai-literacy-professional-development-meta-2026|Guo et al. (2026)]] samlet 212 effektstørrelser fra 34 studier og anslår PD i læreres AI-kompetanse til g = 0,76 (95% KI [0,50, 1,02]), sterkest for ferdigheter (g = 0,91) og svakest for holdninger og verdier (g = 0,61); korrigering for tilsynelatende publikasjonsseleksjon senker anslaget til rundt g = 0,49.

- **Oppmøte forutsier gevinster der følelsen av å delta ikke gjør det.** I det samme seksmånedersprogrammet forutsa oppmøteraten kompetansegevinsten (β = ,407, p = ,001), mens selvopplevd deltakelse ikke gjorde det (β = ,049, p = ,692), og fag, undervisningserfaring og profesjonell tittel forklarte lite; forfatterne leser oppmøte som atferdsmessig investering og opplevd deltakelse som overfladisk engasjement ([[intelligent-tpack-pd-intervention-hongkong-2025|Tan, Cheng & Ling, 2025]]).

- **Verdier henger etter ferdigheter også i et domenespesifikt program.** I et ettårig program i Hongkong med 30 engelsklærere steg kunnskapen om [[multimodal]]-vurderingsstrategier fra 3,13 til 4,15 av 5 (partiell η² = 0,571) og kompetansen i å støtte elever fra 3,05 til 3,98 (0,482), begge signifikante, mens hvert verdidomene forble statistisk flatt under en Bonferroni-korrigert alfa på ,006. Lærerne tilskrev gevinstene felles planlegging i skolen og tverrskoliske klyngemøter snarere enn workshopene alene ([[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang et al., 2026]]).

- **Mikrolæring kan utvikle universitetslæreres AI-kompetanse.** [[microlearning-ai-modules-vocational-teacher-education-2026|Cechovsky (2026)]] forfinet to [[vocational-education|yrkesfaglige]] moduler gjennom to nettbaserte gruppediskusjoner til fem designprinsipper: klar struktur og orientering, veiledning og navigasjonsstøtte, segmentering og modularisering, multimodal presentasjon og aktivering av den lærende, og fant at plattformnavigasjon og å finne modulene var de viktigste praktiske barrierene.

## Læreres AI-kompetanse og den endrede lærerrollen

Etter hvert som AI overtar rutinemessige undervisnings- og vurderingsoppgaver, flytter lærerens særegne bidrag seg mot orkestrering, dømmekraft og relasjon: å avgjøre når og hvordan AI brukes, støtte [[agency|elevagens]] og kritisk bruk, sikre likestilling, og gi den sosiale og emosjonelle støtten AI ikke kan. Dette omformulerer lærerkompetanse rundt [[human-in-the-loop-ai|menneskelig tilsyn i sløyfen]], [[ethics|etisk dømmekraft]] og [[self-regulated-learning|støtte til selvregulert læring]], og knytter an til [[teacher-role]] og [[cognitive-offloading|vern mot overavhengighet]].

## Implikasjoner for AI i utdanning

- **Vurder prestasjon, ikke bare selvrapportering:** lærerkompetanse bør evalueres gjennom demonstrasjon, gitt det dokumenterte selvrapporteringsgapet.
- **Tren hele kompetansen, ikke bare verktøy:** PD bør bygge tekniske, pedagogiske, vurderingsmessige og etiske dimensjoner sammen, forankret i [[learning-theories|læringsteori]].
- **Bygg trygghet sammen med ferdighet:** holdninger og [[self-efficacy]] former adopsjon, så PD bør redusere angst og bygge trygghet gjennom autentisk, støttet praksis.
- **Støtt det institusjonelle laget:** bærekraftig lærerkompetanse krever samordnet policy, styring og kapasitet, ikke isolert opplæring.

- **Læreres digitale kompetanse for GenAI i [[curriculum-design|læreplansdesign]].** [[guillen-curriculum-genai-teacher-competence-2026|Guillén-Gámez (2026)]] validerer et TAM-basert diagnostisk instrument med 434 yrkesaktive lærere; atferdsintensjon var den viktigste prediktoren for digital kompetanse i å bruke GenAI i læreplansplanlegging, med self-efficacy som rotårsak.
### Et psykometrisk instrument for læreres AI-kompetanse

- En psykometrisk studie utviklet Teachers' AI Literacy Scale (TAILS) for å måle AI-kompetanse spesifikt innen [[teacher-education|språklærerutdanning]], ved å operasjonalisere ED-AI-rammeverkets seks dimensjoner. Instrumentets utvikling fyller et gap i vurderinger som retter seg mot studenter eller generelle brukere, og støtter måling av læreres AI-kompetanse.

Instrumentlandskapet er siden blitt gjennomgått. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore og Maats systematiske oversikt fra 2026 over måleinstrumenter for læreres AI-kompetanse]] vurderte 33 instrumenter publisert mellom 2019 og 2025 og fant feltet metodologisk ensformig: 31 (93,9%) er selvrapporteringsskalaer for opplevd trygghet, bare to (6,1%) tester kunnskap objektivt, og ingen bruker prestasjonsbaserte oppgaver. Intern konsistens var det sterkeste kvalitetsdomenet (28 av 33 på karakter A) og rettferdighet det svakeste, med fem instrumenter (15,2%) som rapporterte måleinvarianse eller differensiell oppgavefunksjon. Innholdet henger også etter teknologien, siden 29 instrumenter (87,9%) retter seg mot generelle AI-begreper og bare fire (12,1%), alle fra 2025, mot generativ AI.

## Vanlige misoppfatninger

- **«Prompttrening gjør lærernes materiell bedre.»** **Prompttrening kjøper tid, ikke bedre materiell**: i en **forhåndsregistrert RCT med 204 lærere** fant Appel, Fervers og Piepenburg (2026) at ChatGPT forbedret **tiden brukt** mens materialkvaliteten ikke fulgte etter. Effektivitetsgevinsten er reell, og den er ikke kvalitetsgevinsten.
- **«Når lærere konfigurerer en chatbot, er svikten faktisk feil.»** **Når lærere konfigurerer en chatbot på naturlig språk, er den dominerende svikten tapt intensjon snarere enn gale fakta**: botene **hopper over** trinnet læreren mente. Instruksjonsfølging svikter strukturelt snarere enn faktisk.
- **«Teknisk ferdighet er det avgjørende laget.»** **Pedagogisk kunnskap er det avgjørende laget**: en tverrnivåstudie av [[ai-education|AI-undervisning]] i videregående skole [[pedagogy-first-technology-second-teacher-knowledge-2026|Shen et al., 2026]]. Kompetansen som avgjør utfallet, er den de fleste opplæringsprogrammer investerer minst i.
## Beslektede begreper

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
- [[pedagogy]]: paraply for pedagogikker og undervisningsstrategier i AI-undervisning

## Beslektede artikler

- [[roy-aila-lesson-planning-teacher-choices-2026]]: Hvilke lærere fikk mer planleggingstid: lavere trygghet på fagkunnskap, lavere pedagogisk kunnskap, nyere i yrket eller høy trygghet på teknologi
- [[ai-misconceptions-indonesian-k12-teachers-2026]]: Lærere aksepterer AI mens de misforstår hvordan den virker (Aji et al. 2026)
- [[manto-ai-integration-mathematics-education-systematic-review-2026]]: Lærerberedskap og teknologisk-pedagogisk integrasjon som den hyppigst rapporterte utfordringen på tvers av 54 studier i matematikkdidaktikk (Manto et al. 2026)
- [[multimodal-assessment-literacy-l2-teachers-genai-2026]]: Multimodal vurderingskompetanse: et ettårig program der kunnskap og kompetanse beveget seg og verdiene ikke
- [[teacher-ai-literacy-professional-development-meta-2026]]
- [[intelligent-tpack-pd-intervention-hongkong-2025]]: Intelligent-TPACK-PD: en halv standardavvik i gevinst, og negative gevinster som leses som rekalibrering. Påvirkningen av programmer for profesjonell utvikling på K-12-læreres AI-kompetanse: en systematisk oversikt og metaanalyse

- [[ailithub-ai-literacy-case-infrastructure-2026]]: Lærere merket egne AI-caser fra klasserommet og nådde praktiske kompetanser lett, men samfunnsmessige og etiske sjelden (Wang et al. 2026)
- [[typology-generative-ai-tools-education-2026]]: Verktøyvalg som utøvelse av utdannerens agens
- [[generative-ai-k12-teaching-learning-systematic-review-2026]]: Systematisk oversikt over generativ AI i K-12-undervisning og -læring (Marzano 2026)
- [[pedagogy-first-technology-second-teacher-knowledge-2026]]: Læreres profesjonskunnskap i K-12-AI-undervisning: TAIK mot TPAIK og elevenes læring (Shen et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]]: Mønstre for lærer-AI-samhandling i undervisningsdesign på tvers av erfaring og AI-dyktighet (Choi et al. 2026)
- [[preservice-teachers-responsible-genai-2026]]: Lærerstudenters ansvarlige GenAI-bruk: læreplanskonsekvenser (Kohnke et al. 2026)
- [[melo-llm-classroom-observation-teach-2026]]: LLM-basert klasseromsobservasjon for læreres profesjonelle utvikling (Melo et al. 2026)
- [[bondurant-shaughnessy-ai-pedagogies-practice-2026]]: Generativ AI på tvers av representasjoner, dekomponeringer og tilnærminger: prøving, strukturert tilbakemelding og presisjonsadvarslene
- [[genai-pd-ai-pck-learning-gain-2026]]: Effekten av et intensivt GenAI-program for profesjonell utvikling
- [[ai-tpack-teacher-multi-agent-workflow]]: Å modellere AI-TPACK gjennom læreres multiagent-arbeidsflyter
- [[teacher-ai-teaming-five-levels]]: Mot synergistiske lærer-AI-interaksjoner
- [[teacher-education-ai-literacy-sdt-2026]]: Lærerutdanning for AI-kompetanse gjennom selvbestemmelsesteori
- [[genai-literacy-training-teacher-education-dbr-2026]]: Designbasert forskning på GenAI-kompetansetrening
- [[rail-ed-genai-literacy-teacher-education]]: Å tenke nytt om GenAI-kompetanse i lærerutdanningen
- [[sec-ai-literacy-narrative-review-2026]]: Å integrere sosioemosjonelle kompetanser med AI-kompetanse
- [[teacher-ai-adoption-confidence]]: AI-adopsjon blant lærere: trygghet og støtte
- [[ai-pedagogical-orientation]]: Faglærerorienteringer former AI-adopsjon
- [[ai-literacy-assessment-misalignment]]: Manglende samsvar mellom selvrapportert og prestasjonsbasert AI-kompetanse
- [[quest-ai-inquiry-preservice-teachers]]: AI-støttet undersøkelse for lærerstudenter
- [[sangwa-epiq-ai-faculty-readiness-2026]]: EPIQ-AI-rammeverket for faglærerberedskap
- [[llm-cultural-relevance-k12]]: LLM-er for kulturrelevant K-12-pedagogikk
- [[institutional-change-framework-ai]]: Rammeverk for institusjonell endring for AI
- [[teachingcoach-chatbot-instructor-guidance]]: TeachingCoach-chatbot for veiledning av undervisere
- [[laidlaw-genai-identity-crisis-faculty-2026]]: GenAI som identitetskrise, ikke ferdighetsgap
- [[raffaghelli-situated-ai-ethics-2026]]
- [[guillen-curriculum-genai-teacher-competence-2026]]: Å vurdere læreres digitale kompetanse for GenAI-læreplansdesign (Guillén-Gámez 2026)
- [[stenalt-good-education-teacher-ai-conceptions-2026]]: fenomenografisk studie av universitetslæreres oppfatninger av AI
- [[ukraine-ai-literacy-secondary-framework-2026]]: Femnivårammeverk for AI-kompetanse og PD for ukrainske lærere i videregående skole (Marienko et al. 2026)
- [[wang-teacher-ai-co-design-review-2026]]: Læreres og AI-samdesign av læringsoppgaver: trender og perspektiver (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]]: Rollarkitektur i AI-designede differensierte gruppeaktiviteter (Talebzadeh 2026)
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[teacher-ai-literacy-prompt-feedback-quality-2026]]: Prompt engineering og modellvalg som prediktorer for AI-tilbakemeldingens kvalitet (Jacobsen et al. 2026)
- [[vassallo-ai-guilt-complex-faculty-2026]]: AI-skyldkomplekset: forventet skyld og fire moralske responsprofiler blant akademisk personale (Vassallo 2026)
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]]: En tre timers PD-økt for lærere hevet opplevd nytte og brukervennlighet, men ikke uttalt intensjon om å ta verktøyet i bruk (Mesenhöller & Böhme 2026)
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]]: Systematisk oversikt over AI i lærerutdanningen i matematikk for barnetrinnet: etikk behandlet i bare tre av elleve studier (Pinto et al. 2026)
- [[watson-rainie-ai-challenge-faculty-survey-2026]]: AAC&U/Elon-undersøkelse blant 1 057 amerikanske faglærere: forberedthet, ikke-bruk og gapet mellom individ og institusjon i policy (Watson & Rainie 2026)
- [[ai-integration-instructional-design-collaboratory-2026]]: Tverrinstitusjonelt faglærerkollektiv: AI-integrasjon som undervisningsdesign i lærerutdanningen
- [[assessing-teachers-ai-literacy-measurement-tools-2026]]: Systematisk oversikt over 33 instrumenter for å måle læreres AI-kompetanse: 31 selvrapportering, to objektive kunnskapstester, ingen prestasjonsoppgaver (Zainal, Mohd Matore & Maat 2026)
- [[adaptive-ai-model-teacher-educators-2025]]: En designbasert adaptiv AI-kompetansemodell og et refleksivt skjema med 20 elementer samdesignet med 22 lærerutdannere (Eyal 2025)
- [[physics-faculty-learning-community-ai-2026]]: En workshopserie for effektiv bruk av AI i usikre tider: å bygge et faglærerlæringsfellesskap i fysikk
- [[authentic-assessments-generative-ai-pilot-2026]]: Å designe autentiske vurderinger med generativ AI: en pilotstudie av Assessment Authentifire i høyere utdanning
- [[teachers-configure-educational-chatbots-2026]]: Vil den undervise som tiltenkt? Hvordan lærere konfigurerer pedagogiske AI-chatboter
- [[capability-decision-model-teacher-readiness-2026]]: Ordnet kapabilitetsførst-modell for lærerberedskap med prestasjonsbaserte kapabilitetsindikatorer
- [[k12-teachers-genai-beliefs-five-countries-2026]]: Tverrnasjonal undersøkelse blant 1 405 K-12-lærere: beredskap forutsier positive oppfatninger, men ikke bekymring
- [[teachers-ai-belief-profiles-talis-2024-2026]]: Fire lærerprofiler fra TALIS 2024 knytter profesjonell læring og profilspesifikke hindringer til AI-bruk
- [[microlearning-ai-modules-vocational-teacher-education-2026]]: Å designe mikrolæringsmoduler om AI for universitetslærere i yrkesfaglærerutdanningen: en designbasert forskningsstudie
- [[eduwild-teacher-configured-chatbots-failures-2026]]: EduWild: hvordan lærerkonfigurerte chatboter svikter i virkelig bruk, og hvordan det kan rettes