---
title: "Hvordan kan AI bistå uddannelsesforskning?"
created: "2026-10-05T11:23:36-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/how-can-ai-assist-with-educational-research
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Din medforfatter vil have et afsnit i metodeafsnittet om de AI-værktøjer, teamet brugte. Eller screenbunken er længere, end deadline tillader. Eller en reviewer har spurgt, høfligt, om et menneske læste transskriptionerne, og du er ikke sikker på, hvad det ærlige svar er.

Det korte svar til det møde: AI kan tage søgningen, en første screening, triagen af kodning og udarbejdelsen, og den kan ikke bære ansvaret for, hvad projektet konkluderer. Beslut, hvilke opgaver der er åbne for den, før projektet starter, verificér output mod en menneskelig standard med en navngiven person, der afgør uenigheder, og log nok til, at en udenforstående kunne rekonstruere, hvad der skete. De fleste teams opdager, at verifikations- og logningstimerne er arbejde, der kommer til, snarere end arbejde, der forsvinder.

## Den korte version

**1.** Skriv ned, hvilke forskningsopgaver der må bruge AI, og hvilke der ikke må, før den første søgning kører. Sortér efter indsats snarere end efter værktøj.

**2.** Læg automatiseringen på screeningen. Hold dataudtræk, afstemning og syntese hos mennesker.

**3.** Fastlæg kodebogen og rubrikken, før en automatiseret gennemgang rører ved dataene.

**4.** Beslut, hvad verifikation betyder, og hvem der skriver under. Enighed mellem en model og en koder er et lighedsmål, ikke et kvalitetsresultat.

**5.** Verificér hver reference i hånden, forfattere først, hver gang AI har rørt ved skrivningen.

**6.** Log prompter, modelversioner og korpusversioner, og budgettér timerne til det.

## Beslut, hvad AI må røre, før projektet starter

Omfangsbeslutningen hører i projektmappen snarere end i nogens hukommelse. I [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai og Chans (2026) fokusgruppestudie]] kalibrerede forskere, der havde tænkt over det, brugen efter indsats og intellektuel centralitet: tungere på procedurearbejde med lav indsats, forsigtigt hvor det videnskabelige bidrag var centralt. 27 af de 28 forskere på postgraduate-niveau i studiet havde brugt GenAI et sted i arbejdsgangen, herunder akademisk skrivning og oversættelse, så for de fleste teams er spørgsmålet, hvor grænsen ligger, snarere end om der findes en.

Skriv grænsen som en liste med en dom for hver opgave: litteratursøgning, screening af abstracts, dataudtræk, kvalitativ kodning, statistisk analyse, udarbejdelse, referenceformatering. Læs studiet som et kort over, hvad forskere rapporterede, at de gjorde. Det er en fokusgruppebeskrivelse, ikke et effektresultat.

## Læg automatiseringen på screeningen, og behold syntesen i teamet

Systematiske reviews er der, hvor automatiseringen er nået længst. Værktøjer som ASReview, SWIFT-Review, Covidence, AIScreenR og MetaMate skar den proceduremæssige byrde ned, især ved screening af abstracts, mens dataudtræk, afstemning og syntese blev hos menneskelige reviewere i det ene team, der rapporterede sin arbejdsgang ([[scaffolding-systematic-reviews-2026|Wang et al., 2026]]).

Størstedelen af gevinsten kommer fra to designbeslutninger. Skriv beslutningsregler for gråzonetilfælde, før screeningen starter, og hold en »måske«-kategori med en fælles afgørelseslog, så den samme vurdering bliver anvendt på den samme slags post. Uden loggen divergerer den anden reviewers regel og den første reviewers regel lydløst, og eksklusionslisten holder op med at være reproducerbar.

## Fastlæg kodebogen, før modellen læser noget

[[qualitative-research|Kvalitativ analyse]] er det trin, hvor fortolkningen er produktet. Konstrukter, kodningsrubrikker og træningsdata er menneskelige beslutninger snarere end modeloutput ([[ai-methodologies-science-education-research-2026|Martin et al., 2026]]), hvilket betyder, at kodebogen skal være fastlagt, før en automatiseret gennemgang kører over korpus. Alternativet er et kodningsskema skrevet efter, hvad modellen tilfældigvis fandt frem, og temaerne beskriver så værktøjets læsning af dine data.

Uddelegering kan være finere end alt eller intet. [[agreement-not-quality-llm-coding-verification|Ét blindt verifikationsstudie]] klassificerede 15 af 72 kodebogselementer som påviseligt krævende menneskelig ekspertise, 12 som bedre tjent med en model og 16 som egnede til tillidsbaseret triage. Sortér dine egne elementer på den måde, og besparelsen lander der, hvor den er sikker.

## Beslut, hvad verifikation betyder, og hvem der skriver under

Høj enighed mellem en model og en menneskelig koder rapporteres, som om den fastslog korrekthed. Det gør den ikke. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] lod en uafhængig ekspert bedømme 855 parvise kodesæt blindt i forhold til kilden. Menneske-LLM-enighed (gennemsnitlig Jaccard 0,30) lå klart under menneske-menneske-enighed (0,52), og alligevel foretrak den blinde verifikator menneskelig og maskinel kodning med rater, den ikke kunne skelne (51,5 % mod 48,5 %, p = 0,537). I nogle tilfælde kodede menneskelig konsensus en fælles bias, som verifikator afviste til fordel for modellen.

Så verifikationstrinnet har brug for en guldstandard, der hverken er modellens output eller koderens enighed med den, plus en navngiven person, der afgjorde uenighederne. Rapportér begge. En lighedsstatistik beskriver, hvor tæt to læsninger ligger på hinanden, og den siger intet om, hvorvidt nogen af læsningerne er rigtig.

## Søg hurtigt, og tjek hver kilde selv

Generativ søgning opsummerer, anbefaler, syntetiserer og samtaler, hvilket forstyrrer den ældre ordning, hvor systemet finder, og læseren fortolker ([[genai-academic-search-workshop|workshoppen om generativ søgning i akademisk arbejde]]). Behandl den som et opdagelsesværktøj. Workshoprapporten har to advarsler: kapaciteten er ujævn, idet stærkt citerede forskere blev rekonstrueret cirka dobbelt så ofte som mindre citerede kolleger, og en bibliotekar beskrev et tillidsgab, hvor studerende overvurderede generativ søgning, mens undervisere mistroede den.

Referenceverifikation er der, hvor dette bliver ufravigeligt, og fejlene klumper sig i forfatterfeltet, det der bærer æren. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] gennemgik 723.930 publikationer og 15.872.533 referencer og verificerede 30 fabrikerede referencer på tværs af 14 artikler om datalogiuddannelse, alle fra 2025 og 2026. 17 af de 30 var hybrider: en rigtig titel knyttet til fabrikerede eller forkerte forfattere. Det verificerede antal ved ét teknisk symposium steg fra 3 i 2025 til 17 i 2026, i 2,3 % af årets proceedingartikler. Deres samlede tal er en bevidst nedre grænse, og automatiserede tjekere arver fejlene i de metadata, de behandler som sandhed. Tjek forfattere først.

## Behandl en automatiseret score som en hypotese, der skal testes

Automatiserede målefunktioner kan se præcise og prædiktive ud og samtidig forblive uigennemsigtige. [[ai-methodologies-science-education-research-2026|Martin et al.]] griber det med Changs nomiske måleproblem: at måle en størrelse kræver en lov, der forbinder den med noget observerbart, og den lov kan ikke testes uden allerede at kende størrelsen. AI-afledte målefunktioner opstår fra træningsdata og optimering snarere end fra forskeren, så forklarlighedsarbejde betyder noget for at vise, om en model følger semantisk forståelse eller kun nøgleord.

Fejlen er konkret. I [[zhang-platform-scores-miss-ai-teaching-agents-2026|en evaluering af otte AI-undervisningsagenter]] rangerede den agent, der var nummer tre efter platformens egen score, sidst på en ekspertvalideret rubrik. Uenighed mellem menneske og maskine er systematisk snarere end tilfældig, og operationaliseringen af rubrikken betyder ofte mere end håndværket i prompten ([[machines-misread-pedagogical-quality|Tseng et al., 2026]]). Før en automatiseret score bliver dit instrument, skal du validere den mod et mål, der er bundet til den kapacitet, du vil undersøge. Om målene i sig selv, se [[evaluating-ai-interventions-methods|evaluering af AI-interventioner]].

## Skriv metodeafsnittet, så en udenforstående kan revidere det

Ibrugtagningen er løbet forud for rapporteringen. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta og Lin (2026)]] analyserede 888 artikler om reviewautomatisering: siden 2023 rapporterede 38,0 % af artiklerne om software og produkter ingen evaluering overhovedet, mod 9,3 % af LLM-artiklerne, og modeladgang var overvældende proprietær (84,1 %). En gunstig samlet vurdering indebar heller ikke egnethed til uddelegering, eftersom 52 % af 118 LLM-artikler, der kun rapporterede positive fund, stadig rapporterede en bekymring for, at arbejdsgangen lå under den standard, dens rolle krævede. Deres PRISMA-LLM-ramme adskiller oplysning om implementering fra konsekvensfølsom evaluering og behandler sine fem niveauer som oplysningsniveauer snarere end som risikoniveauer.

Den praktiske version: navngiv systemet og dets version, prompterne, korpusversionen, hvad et menneske tjekkede, og hvor det fejlede. Gem logfiler over prompter og svar, fordi en flydende genereret temaliste ser uundgåelig ud længe før dens evidensarbejde er begyndt ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Budgettér også timerne. [[persistent-ai-agents-academic-research|Et 115 dage langt casestudie med én forsker]] af en persistent forskningsagent fandt, at det stærkeste mønster var kapacitetsudvidelse snarere end dokumenteret arbejdssubstitution: efterhånden som hukommelse og procedurer akkumulerede, voksede omfanget af det uddelegerede arbejde, mens menneskets input ikke skrumpede.

## Kør praktikerundersøgelse efter de samme regler i mindre skala

Hvis du er lektor og undersøger dit eget kursus, arbejder du i korpus' tyndeste tråd. [[ai-assisted-educational-research|AI-assisteret uddannelsesforskning]] formulerer det som et hul snarere end som et fund: AI-assisteret praktikerundersøgelse er sandsynligvis udbredt og næsten udokumenteret, og evidensen om reviewautomatisering og bibliometri afgør ikke, hvordan en lektor bør undersøge sin egen undervisning.

Det, der bærer over, er et sæt holdninger:

Brug AI, hvor din lokale ramme ikke er variablen. At søge i din fags litteratur, transskribere og opsummere dine egne optagelser og udarbejde instrumenter eller samtykketekster kvalificerer alle.

Behold de fortolkende træk. Hvad der tæller som et tema, hvad en studerendes kommentar betyder, og hvad din klasses evidens berettiger, er dit at afgøre, og skrivningen bør sige, hvilke træk modellen tog, og hvilke du tog ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Definér dine kriterier på forhånd, og hold dem synlige. Et lille lokalt studie kan ikke rette op på et konstrukt, der blev defineret, efter dataene ankom.

Rapportér AI'ens rolle, den verifikation du gjorde, og grænserne i et design med ét kursus og én forsker. En arbejdsgangsbeskrivelse er ikke et effektresultat.

Behandl simuleringen af en årgang som en avanceret mulighed snarere end som standard. Simulerede studerende dækker typisk den letteste kvadrant af rigtig studerendeadfærd og valideres sjældent efter brug ([[simulating-students|simulerede studerende]]). Læs [[making-simulated-students-behave-like-learners|at få simulerede studerende til at opføre sig som lærende]], før du stoler på en simulators dom.

## Hvad forskere tager fejl af her

Enighed med en menneskelig koder betyder, at kodningen er rigtig. Menneske-LLM-enigheden i blindstudiet var 0,30 Jaccard mod 0,52 for menneske-menneske, og den blinde verifikator kunne ikke skelne de to kodningskilder ved 51,5 % mod 48,5 %. Enighed registrerer, at to læsere konvergerede, også når de konvergerede på den samme bias.

Et referencetjek erstatter at tjekke referencer. De 30 fabrikerede referencer i Dennys gennemgang omfatter 17 hybrider, hvor titlen var rigtig, og forfatterne ikke var, hvilket netop er det tilfælde, en tjekker trænet på metadata håndterer dårligst, fordi metadataene er det, der er forkert.

En gunstig evaluering gør en arbejdsgang egnet til din rolle. Af 118 LLM-artikler, der kun rapporterede positive fund, rapporterede 52 % stadig en bekymring for, at arbejdsgangen lå under den standard, dens rolle krævede. Læs dybden af evalueringen mod det arbejde, du giver den.

Prompt-håndværk er den vigtigste løftestang for kvalitet. Operationaliseringen af rubrikken betyder ofte mere end håndværket i prompten for enighed mellem menneske og maskine, og evalueringen af de otte agenter rangerede det samme system som nummer tre og som sidst alt efter, hvis rubrik der blev anvendt.

AI fjerner arbejde fra projektet. Det 115 dage lange casestudie fandt, at det uddelegerede omfang voksede, efterhånden som agentens hukommelse akkumulerede. Verifikation, afgørelse og logning er de timer, der vokser med det.

## Hvad du vil få igen

**»Min medforfatter gør allerede dette, og ingen har klaget.«** At ingen klager, er ikke et fund om validitet. Spørgsmålet om oplysning er adskilt fra spørgsmålet om kvalitet, og tallet 38,0 % for ikke-evaluerede softwareartikler siger, at fagets tavshed er udbredt.

**»To modeller var enige med hinanden, så kodningen er afgjort.«** To modeller, der deler træningsdata, deler deres fejl. Liu-studiet blinde verifikator foretrak maskinel kodning ved 48,5 %, og det, der gjorde tallet fortolkbart, var en uafhængig dommer, ikke enigheden selv.

**»Vi kan ikke revidere en proprietær model, så der er intet at rapportere.«** PRISMA-LLM beder om oplysning om implementering som et niveau adskilt fra evalueringsdybden. System, version, prompter, hvad mennesker tjekkede, og hvor det fejlede, kan alle rapporteres for en lukket model.

**»Etikudvalget godkender det aldrig.«** Modeladgang var proprietær i 84,1 % af de undersøgte artikler, hvilket betyder, at studerendes tekst typisk forlader din institution. Indsaml kun det, det pædagogiske formål kræver, undersøg, om studerendes data træner leverandørens modeller, og foretræk lokale eller syntetiske data, hvor følsomheden er høj. [[equity-ethics-pedagogical-safety-research|Ligestilling, etik og pædagogisk sikkerhed i forskning]] dækker forpligtelserne fuldt ud.

**»Det bliver langsommere end at gøre det i hånden.«** For et lille projekt er det ofte tilfældet. Argumentet for det hviler på omfang i skala, og argumentet mod at overdrive det hviler på den samme 115 dage lange redegørelse.

## Hvad du kan gøre i denne uge

**1.** Skriv opgavelisten med en dom ved hvert punkt, og læg den, hvor hele teamet kan se den.

**2.** Føj beslutningsreglerne for gråzonen og afgørelsesloggen til din screenprotokol, før den næste bunke starter.

**3.** Vælg ét automatiseret output, du allerede stoler på, og validér det mod en menneskelig vurdering på en stikprøve, du ikke har set endnu.

**4.** Læs det sidste manuskript, du sendte ind, og tjek hvert forfatternavn i referencelisten i hånden.

**5.** Føj en linje om »hvor AI fejlede« til din metodeskabelon, så vanen med at oplyse står skrevet ned én gang.

## Hvor du kan gå videre

De ledsagende spørgsmål er [[evaluating-ai-interventions-methods|evaluering af AI-interventioner]] om, hvordan man måler en intervention, [[reporting-interpreting-aied-research|rapportering og fortolkning af AIED-forskning]] om rapportering af systemet og din egen AI-brug, og [[research-gaps-aied|forskningshuller i AIED]] om, hvor litteraturen er tynd. [[equity-ethics-pedagogical-safety-research|Ligestilling, etik og pædagogisk sikkerhed i forskning]] dækker studerendes data, og [[ai-assisted-educational-research|AI-assisteret uddannelsesforskning]] er den fulde begrebsside bag denne.
