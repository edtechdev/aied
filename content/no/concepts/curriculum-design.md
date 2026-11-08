---
title: "Læreplansdesign"
created: "2026-06-02T10:44:35-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks, learning-commons]
updated: "2026-11-08T07:16:46-05:00"
translation_of: "concepts/curriculum-design"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

> **Læreplansdesign** — prosessen med å planlegge og strukturere hva som undervises på tvers av emner, programmer og institusjoner, inkludert læringsmål, innholdssekvensering, vurderingsstrategier og ferdighetsprogresjon. I AI-tiden må læreplansdesign balansere grunnleggende kunnskap mot nye AI-kompetanser, og avgjøre ikke bare hva elevene lærer, men hvordan de lærer å arbeide med og kritisk vurdere AI-verktøy.

## Spørsmål å vurdere

- Læreplansdesign spør hva elevene skal lære på programnivå, mens læringsdesign spør hvordan på emnenivå. Når AI omformer et fag, hvilket av disse to lagene mener du bør endres først?
- Etter hvert som [[generative-ai|generativ AI]] automatiserer arbeid på implementeringsnivå, hevder noen at læreplaner må dreies mot systemdesign, abstraksjon og [[critical-thinking|kritisk vurdering]]. Hva tror du elevene ville tape hvis lavnivåferdigheter ble nedprioritert?
- Redesign av læreplaner i AI-tiden rammes ofte inn som en balanse mellom verktøyflyt og grunnleggende kunnskap. Hvor har du sett den balansen tippe for langt i én retning?
- SAIL-rammeverket behandler AI-kompetanse som stillasbygd på tvers av alderstrinn og designet for å ta tak i dypere «digitale kløfter» enn tilgang. Hvordan er det å bygge AI-kompetanse inn i en hel læreplan forskjellig fra å legge til et enkelt AI-kurs?
- Hvis hvert fag nå trenger AI-kompetanser bygd inn i seg, hvem er ansvarlig for læreplanendringen — undervisere, programmer eller institusjoner — og hva trenger underviserne for å lykkes med det?
- En læreplan er en sekvens av ferdigheter over år, ikke bare en liste over temaer. Hvordan endrer det lengre perspektivet om en «AI-kompetanseenhet» faktisk fester seg?

## Introduksjon

Læreplansdesign handler om *hva* i utdanningen på programnivå, og utfyller [[learning-design|læringsdesign]], som handler om *hvordan* på emnenivå. Artiklene i denne kunnskapsbasen utforsker hvordan AI omformer læreplaner på tvers av fag — fra programvareutvikling til arkitektur til grønn utdanning — og hvordan undervisere designer læreplaner som bygger inn AI-kompetanse uten å ofre faglige grunnsteiner.

### Nøkkeltemaer i forskningen

**Redesign av læreplaner for AI-tiden** er den sentrale utfordringen. **[[reshaping-cs-education-genai|Lee et al.]]** syntetiserte funn fra internasjonale workshoper om å omforme [[cs-education|informatikkutdanning]] på bachelornivå, og hevdet at ettersom GenAI automatiserer programmering på implementeringsnivå, må læreplaner dreies mot systemdesign, abstraksjon og kritisk vurdering — samtidig som detaljer på lavnivå nedprioriteres. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** formaliserte Agentic Software Engineering som en egen disiplin med en læreplan på 21 moduler rettet mot «intensjonens utvikling» og den utøvende disiplinen som trengs for å styre [[agentic-ai|AI-agenter]]. Begge knytter an til [[ai-literacy|AI-kompetanse]] og [[scaffolding|stillas]].

Ved å gjennomgå endringen som systemisk snarere enn additiv triangulerer [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]] en [[meta-analysis-systematic-review|scoping-gjennomgang]], bibliometrisk kartlegging av 209 poster, 36 artikler og ti intervjuer med akademiske ledere til fem skift — blant dem at kunnskapsoverføring viker for kapasitetsutvikling, og at lokal eksperimentering viker for institusjonell styring.

**Læreplanskartlegging og -analyse** bruker AI til å forstå eksisterende læreplaner. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]** analyserte 23 emnebeskrivelser fra AI-assisterte programvareutviklingsemner, identifiserte felles temaer — [[prompt-engineering|prompt engineering]], kodegjennomgang med AI, [[ethics|etiske hensyn]] — og utledet designveiledning som vektlegger å balansere verktøyflyt mot grunnleggende kunnskap. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** anvender beregningsmetoder for å sammenligne strukturen i informatikkemner på tvers av institusjoner.

Vekting endrer hva en læreplansanalyse rapporterer: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath et al. (2026)]] lot GPT-o3-mini fordele 100 % over sju virksomhetsferdigheter for hver av 48 vurderinger, og oppnådde Krippendorffs alfa på 0.81 mot ekspertvekter, men samsvaret ble negativt for ferdigheter beskrivelsene aldri uttrykker eksplisitt (-0.19).

**Modulstruktur overlever nåværende innhold.** Et mønster går igjen der feltet beveger seg raskere enn gjennomgangssyklusen: en stabil kjerne av [[ai-literacy|AI-kompetanse]], kritisk vurdering, skjevhetsdeteksjon og [[ethics|etikk]], med spesialitetsinnhold og lokalt tilgjengelig verktøyinnhold festet som moduler og revidert hver sjette til tolvte måned ([[bursic-ai-residency-education-curriculum-2026|Bursic et al. (2026)]]). Medisinsk [[medical-education|videreutdanning]] er det uttalte caset, men prinsippet generaliserer: programmet forplikter seg til kompetanser som overlever verktøyutskiftning, og planlegger utskifting av det verktøyspesifikke laget.

**Integrering av AI-kompetanse** bygger AI-kompetanser inn i fagene. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** gir et stillasbygd AI-kompetanserammeverk som kan brukes på tvers av alle aldre og utdanningsstadier, og tar tak i [[digital-divide|digitale kløfter]] på andre og tredje nivå. **[[tracing-genai-literacy-interaction-patterns]]** undersøker hvordan AI-kompetanse utvikles gjennom interaksjonsmønstre. **[[hingle-collaborative-ai-literacy-2025]]** utforsker samarbeidsbaserte tilnærminger til læreplansutvikling i AI-kompetanse, og knytter an til [[collaborative-learning|samarbeidslæring]].

LearnAI viser hvordan en innebygd versjon ser ut: et breddeeksponeringslag med korte presentasjoner inne i 18 eksisterende emner på tvers av fem fag (293 studenter), paret med valgfrie en-til-en-samskapingøkter drevet av opplærte bachelorstudenter som jevnaldrende veiledere, slik at elever med ulik bakgrunn møter AI-oppgaver på sitt eget nivå ([[learnai-just-in-time-ai-cocreation-university-2026|Qu et al. (2026)]]).

Integreringen i praksis henger etter rammeverkene. [[critical-media-literacy-education-2026|Santos-Albardía et al. (2025)]] fant at bare 13.8 % av de spurte utdannings- og journalistikkstudentene sa at emnene deres tok opp kritisk medieanalyse, mot 97.8 % som vurderte det som viktig, og ekspertintervjuene deres sporet gapet til [[teacher-education|lærerutdanning]] som prioriterer tekniske og instruksjonsmessige ferdigheter framfor medieopplæring.

En PRISMA-gjennomgang av 39 STEAM-studier (2016–2025) fant en parallell ubalanse i AI-kompetanseelementene: implementeringene utviklet tekniske kompetanser — grunnleggende AI-begrep, [[computational-thinking|beregningstenkning]], [[statistics-and-data-science-education|datakompetanse]] — mens de underutviklet etisk bevissthet, kreativ fantasi og å skape, styre og designe med AI, så det praktiske svaret er å revidere hver enhet mot dem ([[niri-steam-ai-literacy-review-2026|Niri et al., 2026]]).

[[student-experience|Elevstemmen]] er et annet designinnspill: 84 % av 166 avgangsstudenter i forretningsfag ønsket at GenAI ble undervist i emnene deres, og 85 % så det som avgjørende for ansettbarhet, mens bare 7 % hadde lært om det fra universitetet ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

En gjennomgang av 42 studier av [[ai-education|AI-utdanning]] før universitetsnivå finner at læreplaner beveger seg fra teknisk innhold mot kompetansebaserte modeller bygget på rammeverk som AI4K12 og Five Big Ideas in AI, med [[ai-literacy|AI-kompetanse]] behandlet som en tverrfaglig kompetanse mens standardiserte instrumenter for å vurdere den fortsatt mangler ([[caruana-pre-university-ai-education-slr-2026|Caruana et al. (2026)]]).

Undervisere og arbeidsgivere var enige om viktigheten av bare én av 26 AI-ferdigheter — å sette realistiske forventninger til AI-augmentert arbeid — og bare tre av de 26 ble undervist av halvparten eller flere undervisere, noe som er rapportens belegg for et AI-ferdighetsgap mellom høyere utdanning og arbeidsgivere ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

Design av maskinlæringsaktiviteter i K-12 holder seg på overflaten: en gjennomgang bak ICE-T-rammeverket fant at usynlig bruk, knappinteraksjon og modelldistribusjon utgjør nesten 60 % av de kodede veiledede læringsaktivitetene, at åpen skaping forekom bare to ganger, og at tekniske og samfunnsmessige perspektiver opptrådte sammen i bare omtrent 3 % av aktivitetene ([[icet-ml-education-trust-2026|Haritz et al., 2026]]).

**[[discipline-specific-aied|Fagspesifikk]] læreplansinnovasjon** anvender læreplansdesign på bestemte felt. **[[genai-architecture-education]]** utforsker hvordan generativ AI omformer [[pedagogy|pedagogikken]] i arkitekturdesign. **[[talebzadeh-ai-green-education-2026]]** undersøker AI-integrering i læreplaner for grønn utdanning. **[[connected-ai-lesson-planning-vietnam]]** og **[[llm-cultural-relevance-k12]]** tar opp [[culturally-relevant-pedagogy|kulturresponsivt læreplansdesign]].

**Bygg AI inn i faget i stedet for ved siden av det.** En AI-læreplan i tre nivåer (innføring, anvendelse, avansert) foldet [[machine-learning|maskinlæring]] inn i eksisterende temaer i termisk engineering i et emne på 39.1 timer i stedet for å legge til informatikkvalgfag, unngikk ekstra belastning på maskiningeniørstudenter og publiserte pensum, data og kode åpent ([[mechanical-engineering-ai-curriculum-2026|Li et al. (2026)]]).

En journalistikkcase viser verdiene-først-varianten: et triadisk stillas av verdier–prosesser–kompetanser flyttet studentene fra rent menneskelig reporterarbeid til AI-integrert arbeid, men likevel rapporterte 8 av 9 (89 %) trygghet på etiske beslutninger mens spørreskjemapunkter om forfatterskap og skjevhet antydet bare overfladisk forståelse ([[ying-genai-journalism-assessment-2026|Ngu og Weller (2026)]]).

**[[governance|Institusjonelle]] rammeverk** tar opp læreplanendring i skala. **[[finkelstein-principled-ai-education-2025]]** og **[[finkelstein-principled-ai-education-2025]]** gir prinsipper for å integrere AI på tvers av utdanningsprogrammer. **[[ai-adoption-training-public-sector]]** undersøker barrierer for innføring av AI-læreplaner i offentlig utdanning.

**Sekvensering av AI gjennom programmet.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]] foreslår et rammeverk for «hold tilbake, så forsterk» som sekvenserer generativ AI på programnivå: hold et generativt verktøy tilbake mens en kapasitet formes, og gjeninnfør det for å forsterke kapasiteten når studenten kan styre det og bedømme avkastningen. Styrt av et kriterium om forming kontra avlasting (om et arbeidsstykke bygger en kapasitet eller bare sender den gjennom verktøyet) knytter rammeverket læreplansdesign til [[cognitive-offloading|kognitiv avlasting]], [[self-regulated-learning|selvregulert læring]] og [[academic-integrity|akademisk integritet]], med kontrollpunkter som er vanskelige å forfalske ved hvert hengsel fra hold tilbake til forsterk.

Spaken for de høyeste nivåene er ikke mer kursarbeid: på tvers av 89 sponsede capstone-prosjekter var avansement fra nivå 6 til 7 i [[career-development-and-readiness|Workforce Readiness]] betinget av bransjeintegrert erfaring — co-op-ordninger og Manufacturing Extension Partnership-prosjekter — så grader trenger arbeidsintegrert læring snarere enn et nytt teknisk valgfag ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al. (2026)]]).

En læreplanskonsekvens av modellkapasitet er at AI-motstandsdyktig design utløper. Informatikkundervisere beskrev hvordan de kalibrerte oppgaver mot det modellene ennå ikke kunne gjøre, og så kalibreringen falle bort — oppgavene til én sikkerhetsunderviser krevde ekte [[problem-solving|problemløsning]] sju eller åtte måneder tidligere og ble deretter rett og slett løst — med en fasilitator som anslo en holdbarhet på omtrent ett semester. Workshopens strukturelle funn er at nesten hver tilpasning ble gjort av en enkelt underviser innenfor ett emne, uten den institusjonelle koordineringen en varig læreplansrespons ville kreve ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026]]).

**Helhetlig emnejustering når generativ AI er tillatt.** En redesign fra 2026 av et innføringsemne i [[physics-education|fysikk]] om kjerne- og partikkelfysikk ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]]) integrerte tre aktivitetstyper med ulike roller — forelesninger for begrep og notasjon, kollokvier for standard analytisk praksis, og hjemmearbeid som en utforskende, «forskningsformet» komponent av uvanlig vanskelige flermetodeproblemer. Friksjonen de rapporterer (en ikke-erkjent programmeringsforutsetning, utilstrekkelig tid til å forstå snarere enn bare å hente svar, og manglende samsvar mellom forelesninger, kollokvier, hjemmearbeid og [[summative-assessment|eksamen]]) illustrerer at det å tillate generativ AI tvinger fram justeringsarbeid på tvers av hele emnet snarere enn en endring i én oppgavetype; deres anbefalte struktur beholder det AI-tillatte utforskende arbeidet som bonusgivende avanserte oppgaver, mens den uassisterte skriftlige eksamenen avgjør karakteren.

**Justeringsdybde, ikke bruksfrekvens, skiller integreringsmønstre.** På tvers av 17 forretningsemnecaser bygde seks GenAI systematisk inn i undervisning, læring og vurdering (konstruktivt), ni gjorde det inkonsekvent (blandet) og to sporadisk (ad hoc); de konstruktive casene rapporterte de sterkeste utfallene for engasjement, kapasitet og læreplansrelevans ([[zhou-constructive-alignment-genai-business-2026|Zhou et al. (2026)]]).

**Råd om konstruktiv tilpasning under kritisk gransking.** Der kildene over rapporterer om tilpasning i praksis, leser [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al. (2026)]] veiledningen selv som en diskurs. Deres [[qualitative-research|kritiske diskursanalyse]] av 14 dokumenter med grå litteratur publisert fra november 2022 til april 2025 — for det meste institusjonelle sider og kapitler fra sentralt plasserte [[educational-development|lærings- og undervisningsenheter]] — fant at konstruktiv tilpasning ble presentert som et effektivitetsproblem: generativ AI var «en effektiv og effektiv måte å utarbeide rubrikker på» som kunne «strømlinjeforme prosessen», antropomorfisert som «en pedagogisk ekspert og assistent», en «sparringspartner» eller en «intelligent assistent i instruksjonsdesign», mens fagpersonalet bare leverte «fagekspertise» og verktøyet tok på seg «det tunge løftet med å utvikle læringsmål, organisere emneinnhold ... og justere emnekomponenter». Kopier-og-lim-promptoppskrifter og nummererte maler rammet inn konstruktiv tilpasning som et standardiserbart produkt, med tre sviktmoduser: performativitet (tilpasning som bare ser tilpasset ut), utsletting av situert og kritisk kontekst, og overflatisk konstruktiv tilpasning som forveksler justering med den konstruktive dimensjonen. Deres botemiddel sekvenserer læreplansdesignarbeidsflyten på nytt — undervisere må forstå konstruktiv tilpasning godt nok til å styre, vurdere og forkaste AI-resultater før de delegerer noen del av den — og avgrenser ethvert verktøy til en institusjonell [[rag|gjenfinningsforsterket]] agent forankret i lokal politikk, rubrikker og kandidatmål, med en «liminal veileder»-rolle som utvider snarere enn erstatter forholdet til [[educational-development|utvikleren]].

**Generering av læreplansjusterte modelleringsoppgaver.** AI-drevne plattformer kan bøte på læreres mangel på tid og ressurser til å designe gode [[math-education|matematiske modelleringsoppgaver]] ved å generere læreplansjusterte problemer og pedagogiske anbefalinger forankret i designprinsipper og [[rag|gjenfinningsforsterket]] generering — en tilnærming illustrert med direkte variasjon i videregående matematikk ([[ai-modeling-problem-generation-platform-2026]]). Også emnelitteratur er nå et genereringsobjekt: Sidorkin (2026) erstattet en kommersiell lærebok med ukentlige AI-genererte tekster i et masteremne i utdanningsledelse, og selv om studentene vurderte dem som nyttige og 75 prosent var enige i at de lærte mer enn i et sammenlignbart emne, hadde de 4 487 sidene med logger APA-stil tekstreferanser på bare omtrent 0.80 prosent av sidene, og koblet en navngitt campus eller et system til påståelige politikkpåstander på omtrent 1.03 prosent av sidene uten en verifiserbar kilde. Læreplansleksen for materialer er å behandle genererte tekster som utkastproduksjon under lærergjennomgang, å budsjettere med lærerarbeidet med promptdesign og verifisering, og å kuratere kvalitetssikrede kilder inn i assistenten i stedet for å la elevene utlede kildekvalitet fra konteksten.

**AI-assistert leksjonsplanlegging på laget mellom læreplan og klasserom.** På punktet der en læreplan blir en undervist leksjon, sammenlignet [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo og Tahir (2025)]] eksperimentelt lærergenererte planer med ChatGPT-assisterte planer i barns [[stem-education|STEAM]]-[[arts-design-and-media-education|kunstutdanning]], og fant at de AI-assisterte planene ble vurdert signifikant høyere av seks ekspertprofessorer (median 20.5 mot 17.6, p = .002, stor effekt). De viser at avkastningen avhenger av hvordan læreren delegerer: den anbefalte metoden fyller innholdshull i en selvskissert leksjon (og bevarer lærerens design[[agency|autonomi]]) snarere enn å delegere hele planen. De bidrar også med en promptmal for rolle–instruksjoner–sluttmål for reproduserbar, kvalitetskontrollert generering — belegg for at AI-leksjonsplanlegging er sterkest når den er innebygd i, og ikke erstatter, lærerens læreplansbeslutninger. I naturfagsundervisning kommer ekspertvalidering til en parallell konklusjon om plattformdesign: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli og Yildirim (2026)]] lot elleve [[science-education|naturfagsspesialister]] vurdere ChatGPT-4 og et utdanningsrettet verktøy (Teacher's Buddy) på sjetteklasseplaner justert mot Tyrkias reviderte læreplan og Engineering [[design-based-research|Design-Based]] Learning-modellen. Den utdanningsrettede plattformen skåret høyere på alle åtte kvalitetskriterier — inkludert tilbakemeldingstunge stadier og læreplansjustering — belegg for at det å bygge pedagogisk struktur inn i en AI gir bedre justert resultat. Likevel foretrakk noen eksperter fortsatt den allmennrettede planen for dens sterkere sosialemosjonelle vekt, og 7 av 11 vurderte planene som «anvendbare med korreksjon» snarere enn direkte brukbare. Valget av plattform og promptinnramming, ikke bare AI-en selv, former hvor godt genererte planer samsvarer med læreplansstandarder og prosessmodeller.

Det er strukturen, ikke promptformuleringen, som gjør AI-utkast pålitelige i produksjon: [[curriculum-as-code-instructional-design-2026|Paiva (2026)]]s Curriculum-as-Code-pipeline beskar konteksten aggressivt og genererte materialer seksjon for seksjon på tvers av 28 prosjektkontekster, noe som kuttet lærerens forberedelsestid fra omtrent åtte til to timer per undervisningsopplegg og ikke etterlot begrepsmessige eller matematiske [[hallucination-risk|hallusinasjoner]] for [[human-in-the-loop-ai|menneskelig gjennomgang]] å fange opp.

### Forbindelser til beslektede begrep

Læreplansdesign knytter direkte an til [[learning-design|læringsdesign]] — læreplanen definerer hva, undervisningen definerer hvordan. Det knytter an til [[ai-literacy|AI-kompetanse]] fordi integrering av AI-kompetanser er en primær læreplansutfordring, til [[teacher-role]] og [[educational-development]] fordi læreplanendring krever forberedelse av undervisere, og til [[scaffolding|stillas]] fordi godt designede læreplaner støtter ferdighetsutvikling på tvers av emner og år. Koblingene til [[higher-ed]] og [[k-12]] gjenspeiler læreplansdesignets relevans på tvers av utdanningsnivåer.

**Å velge ett AI-kompetanserammeverk betyr å velge et vokabular ingen har krysskoblet.** I en scoping-gjennomgang av 50 K-12-rammeverk fant [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach et al. (2026)]] at kompetansedefinisjonene konvergerte mot kognitive, affektive, atferdsmessige, etiske og sosiale dimensjoner, mens etikettene og konstruktene ikke samsvarte. Bare ABCE-rammeverket nærmet seg en delt måletradisjon, validert i Hongkong, Shanghai og Taiwan, og progresjon på tvers av klassetrinn ble foreslått gang på gang og testet ingen steder.

## Vanlige misoppfatninger

- **«En [[llm]] kan kartlegge en læreplan når den først er validert med høy reliabilitet.»** GPT-o3-mini fordelte **100 % over sju virksomhetsferdigheter for hver av 48 vurderinger**, og nådde **Krippendorffs alfa på 0.81** mot ekspertvekter — og **samsvaret** brøt sammen for bestemte ferdigheter. Høy samlet reliabilitet med ujevnt samsvar er mønsteret man må sjekke før man stoler på kartleggingen.
- **«Å bygge inn AI-kompetanse betyr å legge til et kurs.»** LearnAI viser den innebygde formen: et **breddeeksponeringslag med korte presentasjoner inne i 18 eksisterende emner på tvers av fem fag (293 studenter)**. Eksponeringen var fordelt over læreplanen i stedet for samlet i en enhet.
- **«Studentene kommer allerede i stand til å vurdere medier kritisk.»** Bare **13.8 % av de spurte utdannings- og journalistikkstudentene** sa at emnene deres tok opp kritisk medieanalyse, mot **97.8 % som vurderte det som viktig**. Gapet mellom å verdsette en ferdighet og å bli undervist i den, er læreplansåpningen.

## Tilknyttede begrep
- [[pedagogical-partnerships]] — Pedagogiske partnerskap
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Paraply: pedagogikker og undervisningsstrategier i AI-utdanning
- [[recommender-systems-and-learning-paths]]

## Tilknyttede artikler
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Vektet, ekspertvalidert ferdighetskartlegging for akkreditering
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Kritisk diskursanalyse av veiledning i GenAI for konstruktiv tilpasning (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Å ta tak i tillit til AI-systemer gjennom utdanning: et didaktisk perspektiv
- [[refrain-amplify-genai-curriculum-2026]] — Læreplansrammeverket hold tilbake, så forsterk for sekvensering av GenAI (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Prosjektbasert AI-læreplan i termisk engineering
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Workforce Readiness Level-rammeverket for smart produksjon i AI-tiden
- [[rewriting-curriculum-genai-pedagogy-2026]] — Rewriting the curriculum: GenAI-driven pedagogical change
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — AI Skills Framework: 26 vurderbare ferdigheter for læreplanskartlegging
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Just-in-Time AI Co-Creation Across Disciplines
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[niri-steam-ai-literacy-review-2026]] — STEAM-utdanning for AI-kompetanse: systematisk gjennomgang
- [[caruana-pre-university-ai-education-slr-2026]] — Å forberede elever og lærere på en AI-drevet framtid: SLR av AI-utdanning før universitetsnivå (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-drevet plattform som genererer matematiske modelleringsoppgaver (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI i partikkelfysikkundervisning: forskningsproblemer og grunnleggende ferdigheter
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Rapport fra en online workshop om vurdering i informatikk i generativ AI-tid
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - kompetanserammeverk konvergerer mot fem dimensjoner uten et delt vokabular eller krysskobling
- [[bursic-ai-residency-education-curriculum-2026]] — Barrierer for å integrere AI i læreplaner for spesialistutdanning: kvalitative intervjuer med tolv legeledere
