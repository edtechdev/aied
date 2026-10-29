---
title: "Hvordan lærer jeg studerende at verificere AI-output?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Det er ugen før karaktererne skal gives, og to besvarelser citerer kilder, der ikke findes. Begge studerende siger, at de tjekkede. Den ene åbnede linket. Den anden læste afsnittet og syntes, det lød rigtigt. Du har allerede fortalt klassen, at de skal verificere det, chatrobotten giver dem, og det at fortælle det frembragte ikke adfærden.

Verifikation er en sekvens, du kan bygge ind i en opgave. Beslut, hvad der tæller som korrekt, før opgaven begynder, få den studerende til at forpligte sig skriftligt på en forventning, send dem til registret i stedet for til deres indtryk af prosaen, og bedøm det register, de producerer. En rubriklinje, der siger »tjekkede kilder«, måler intet af det.

## Den korte version

**1.** Skriv facitlisten først. En kontrol har brug for noget at holde sig op imod, og de fleste verifikationsopgaver definerer aldrig, hvad korrekt betyder.

**2.** Kræv en forudsigelse, før outputtet vises, så den studerendes ræsonnement findes på papir, før værktøjet kan overskrive det.

**3.** Navngiv målet for hver kontrol: forfatterlisten, udgiveren, året, det konkrete tal, det konkrete trin. »Sørg for, at det er rigtigt« er ikke en kontrol.

**4.** Adskil den kontrol, en maskine kan køre, fra den dom, kun en læser kan træffe, og lær de studerende, hvilken af dem de udfører.

**5.** Bedøm registret op imod facitlisten, ikke indsatsen, så verifikationsteater ikke giver noget.

**6.** Planlæg kontrollen inde i opgaven. Tidspres er en dokumenteret grund til, at studerende springer den over.

## Beslut, hvad korrekt betyder, før nogen kontrollerer noget

[[verification-quality-reliance-calibration-genai-2026|Wei og Shang (2026)]], der har gennemgået 493 deduplikerede poster og kortlagt 14 prioriterede empiriske studier, skelner mellem syv ting, som »kritisk AI-brug« smelter sammen til én: epistemisk vurdering, initiering af verifikation, proceskvalitet, verifikationssucces, afhængighedsbeslutninger, øjeblikkelig opgavepræstation og selvstændig læring. Din rubrik siger »tjekkede kilder«, hvilket ligger på trin to og ikke fortæller dig noget om, hvorvidt kontrollen var kompetent, eller om den ændrede den studerendes svar. Initiering er ikke succes. En stærk proces kan ende uafklaret, en svag kan lande på det rigtige svar, og en studerende, der kørte en søgning og forblev forvirret, scorer det samme som en, der løste spørgsmålet.

Den samme gennemgang drager en anden grænse, mellem [[trust|tillid]] og afhængighed. [[trust-calibration|Kalibrering af afhængighed]] spørger, om en afhængighedsbeslutning var passende givet outputtets faktiske kvalitet, hvilket binder dommen til én beslutning og ét output. Ét revideret studie fandt, at falsk ChatGPT-information flyttede deltagernes rapporterede tillid og aldrig registrerede, om de senere accepterede eller forkastede en bestemt anbefaling. Et andet loggede accept- og forkastelsesbeslutninger på ChatGPT-[[feedback]] for 78 oversættelsesstuderende, men uden en uafhængig ekspertvurdering kan en accept ikke kaldes passende, og en forkastelse kan ikke kaldes berettiget. Uden grundsandhed om outputkvalitet kan afhængighed slet ikke klassificeres.

Det er designkonsekvensen, og det er det første, der skal rettes. Før du sætter en verifikationsopgave, skal du skrive to korte beskrivelser: hvordan et korrekt output ser ud for denne opgave, og hvordan et plausibelt, men forkert output ser ud. Én af hver er nok. De studerende har så en standard at kontrollere imod, og du har noget at bedømme kontrollen imod andet end, hvor omhyggelig den studerende lyder.

## Få dem til at forpligte sig, før værktøjet svarer

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] bygger et måleprogram op omkring *forudsig, før du kører*: den lærende angiver, hvad der burde ske, og derefter bedømmes artefaktets adfærd op imod den forudsigelse på fagligt grundlag snarere end efter, om det kører. Ræsonnementet findes, før outputtet gør, og det er det, der gør det bedømmeligt.

Hans gennemgang af 24 studier fandt det samme værktøj give modsatte resultater under forskellige opgavestrukturer. En konventionel ChatGPT-opsætning endte signifikant lavere i præstation, [[self-efficacy|self-efficacy]] og flow, mens en betingelse, der tilføjede verifikationskrav og moduler til fejlrefleksion, viste stærkere [[critical-thinking|højereordens tænkning]]. Værktøjet var konstant på tværs af disse betingelser. Det, der varierede, var, om opgaven krævede, at den studerende holdt en position, som værktøjet kunne modsige.

I praksis er det én linje på opgavearket: før du åbner værktøjet, skriv ned, hvad du forventer, det vil sige, og hvorfor. Sammenlign derefter. To studerende kan producere det samme afsnit, og kun én af dem kan forklare, hvor afsnittet afviger fra det, de forudsagde.

## Send dem til registret

[[citation-errors-hallucinations-computing-education-2026|Denny m.fl. (2026)]] sporede 113.588 referencer fra 5.225 datalogiundervisningsartikler publiceret siden 2021 og verificerede manuelt 828 mistænkelige poster. De fandt 30, der indeholdt verificerbart fabrikeret bibliografisk information, fordelt på 14 artikler, alle fra 2025 og 2026. Tretten var helt opdigtede. De øvrige 17 kombinerede en rigtig titel med fabrikeret eller forkert forfatterskab, udgiver eller år. På SIGCSE Technical Symposium steg antallet fra 3 i 2025-forhandlingerne til 17 i 2026, eller 2,3 % af årets symposiumartikler.

Forfatterfelter fejler oftere end nogen anden del af en genereret reference. Det ene fund fortæller dig, hvad du skal bede om. »Åbn kilden og læs forfatterlisten« rammer det felt, der mest sandsynligt er forkert, og det producerer et faktum, som den studerende enten har eller ikke har. »Sørg for, at kilderne er rigtige« producerer en forsikring. Bed de studerende om at bekræfte forfattere, udgiver og år imod selve registret. Artiklen anbefaler, at hvert citeret værk verificeres, og at enhver automatisk kontrol forbliver [[human-in-the-loop-ai|menneskeligt tilsyn]], hvilket netop er den vane, et citationskrav indøver.

## Adskil den kontrol, en maskine kan køre, fra den dom, kun en læser kan træffe

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] sætter en forsvarlig grænse for, hvad der må kontrolleres mekanisk: dokumenterede kriterier, sammenligning med etableret viden uden fortolkningsmæssig dom, og et enkelt korrekt svar eller forud specificerede acceptable alternativer. Datoer, formler, citater og beregninger klarer den grænse. Alt fortolkningsmæssigt fejler den, og der er den studerendes egen læsning instrumentet for kontrollen.

Gousopoulos formaliserer den samme opdeling som et signaldetektionsproblem med to uafhængige parametre. Sensitivitet er evnen til at skelne korrekt fra fejlbehæftet output; kriteriet er, hvor den lærende sætter tærsklen for at forkaste. Overafhængighed deler sig langs den linje. Advarsler, tjeklister og hallucinationsprompter flytter kriteriet og ændrer, hvornår en studerende forkaster. Faglig undervisning, gennemarbejdede sammenligninger og øvelse med indplantede fejl hæver sensitiviteten, fordi den lærende så kan se forskel. En studerende, der accepterer fejlbehæftet output, kan have et kriterieproblem eller et sensitivitetsproblem, og de to kræver forskellig undervisning.

Forudsætningen er ubekvem. Verifikationsundervisning er kun dannende, hvor sensitiviteten kan overstige nul, hvilket kræver nok faglig viden til at skelne korrekt fra ukorrekt output. I den samme gennemgang lykkedes det for novicer, der blev bedt om at forklare [[llm]]-genereret kode, på omkring en tredjedel af opgaverne, så at bedømme AI-feedback eller kode op imod sit eget ræsonnement er kun en reel kontrol, hvor det ræsonnement har substans. Hvis dine studerende endnu ikke kan tænke fagligt uden hjælp, køber flere advarsler intet. Undervis i indholdet, og knyt kontrollen til det.

Én advarsel mere hører til i designet: interventioner, der reducerer upassende accept, skal også kontrolleres for utilsigtet forkastelse af korrekt assistance. Giv plads til, at en studerende kan acceptere godt output af en angivet grund.

## Bedøm kontrollen uden at gøre den til overvågning

Gousopoulos drager konsekvensen direkte. Hvis AI'en kan producere artefaktet, kan artefaktet ikke være vurderingen, så evalueringen flytter til specifikationen, valideringsræsonnementet og fortolkningen. Hans konstrukt om modelforfatterskab har fire facetter, specifikation, konceptuel model, verifikation og fortolkning, på fire ordnede niveauer fra delegeret til egenforfattet. Det egenforfattede niveau kræver en verificerbar specifikation før den første prompt, forkastelse af output på fagligt grundlag med en angivet grund og en fortolkning, der rækker ud over artefaktets egen redegørelse for sig selv.

Rubrikken trækker på materialer, som en konstruktionsopgave allerede genererer, så det samme instrument er både en [[formative-assessment|formativ evaluering]] og en forskningsmåling. Det besvarer bekymringen om spildarbejde: du bedømmer et biprodukt af en opgave, du allerede har givet. To begrænsninger hører med ved siden af. Intet studie blandt Wei og Shangs 14 prioriterede cases målte verifikationssucces og den efterfølgende afhængighedsbeslutning sammen, og få fulgte øjeblikkelig præstation op med forsinket fastholdelse eller [[transfer-of-learning|transfer]], så rubrikken hviler på et analytisk kort snarere end på en valideret kausal sekvens.

Tre beslutninger forhindrer, at dette bliver overvågning. Bedøm kontrollen op imod bedømt kvalitet snarere end indsats, ellers bygger du et incitament til at opføre kontrol. Angiv oprindelse, som Venetsanos kræver: de studerende skal vide, hvilke dele af den feedback, de modtager, der blev maskinverificeret, hvilke der blev vurderet fortolkningsmæssigt, og at menneskelig dømmekraft har forrang, fordi de ikke kan veje feedback, de ikke kan placere. Og hold håndhævelse væk fra detektionsværktøjer. [[bassett-ai-detectors-education-2026|Bassett m.fl. (2026)]] argumenterer for, at [[ai-detection|AI-detektion]] slet ikke bør bruges i uddannelse: deres estimater er probabilistiske og kan ikke verificeres uafhængigt, fordi teksters virkelige oprindelse er ukendt, deres scorer opfylder ikke den standard om sandsynlighedsovervægt, som integritetssager kræver, og dikotomien menneske mod AI er meningsløs for arbejde skabt med AI snarere end af AI. Deres konklusion er, at detektion »ikke beskytter akademisk integritet; den underminerer den«. Overvågningsregimer fremmer mistanke og udhuler de studerendes [[trust|tillid]]. Hold de to betydninger af detektion adskilt. At detektere AI-genereret tekst har ingen forsvarlig bevisrolle her; at lære studerende at finde fejl i AI-output er hele øvelsen.

Adskillelsen er arkitektonisk og værd at fortælle de studerende om. [[vetting-dual-llm-safety-education|Li, Zhang og Botelho (2026)]] kontrollerer output med en anden model i stedet for at indlejre kontrollen i generatoren. En studerende, der ser hvorfor, kan se, hvorfor »værktøjet sagde, det var rigtigt« ikke er et verifikationsargument.

## Hvis du designer kurset snarere end underviser i det

Tre fund ovenfor hører til i kursusopbygningen, hvor en underviser, der arbejder alene, ikke når dem.

Det første er en diagnosticering. Kør en opgave med indplantede fejl: tyve elementer, otte med en faglig fejl. Den fortæller dig, om de studerende overhovedet kan skelne, før du bruger et semester på at undervise i et kriterium, de ikke kan bruge. En klasse, der overser de indplantede fejl, har brug for indholdsrepetition, uanset hvad studieordningen siger om kritisk brug.

Det andet er placeringen af advarslen. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings og Park (2026)]] viste en generisk forvarselsbesked umiddelbart før to opgaver til 100 studerende i USA, 40 med engelsk som førstesprog og 60 internationale med engelsk som fremmedsprog. Inokulerede studerende var signifikant mere tilbøjelige til at verificere opgaven med opsummering af akademiske kilder (M = 0,34 mod 0,18), mens de selvrapporterede verifikationshensigter ikke flyttede sig. Effekten var også opgaveafhængig: den viste sig for opsummeringsopgaven, men ikke ensartet for en matematikquiz om potensopløftning og multiplikation med store tal. Sæt advarslen ved brugspunktet, per opgavetype, snarere end én gang i studieordningen eller i introforløbet.

Det tredje er planlægning. En studieordning, der lader verifikation være uplanlagt, siger, at den er valgfri, og tidspres er en dokumenteret grund til, at studerende springer kontroller over. Verifikation, der lever inde i opgaven, med et markeret artefakt vedhæftet, bliver udført. Verifikation, der lever i et politikafsnit, gør ikke.

## Hvis du er den studerende, der læser dette

Fire træk dækker det meste af det, forskningen kræver af dig.

Skriv din forventning, før du prompter. Én sætning om, hvad svaret burde være, og sammenlign derefter outputtet med den.

Åbn kilden. Læs forfatterlisten, udgiveren og året op imod registret, fordi forfatterfeltet er der, hvor genererede referencer oftest fejler.

For alt fortolkningsmæssigt, skriv grunden med dine egne ord. En fabrikeret grund er lige så synlig som et fabrikeret citat.

Mislyd følelsen af, at prosaen læser godt. Novicer, der blev bedt om at forklare LLM-genereret kode, lykkedes på omkring en tredjedel af opgaverne, og et feltstudie af studerendes quizsamtaler med ChatGPT fandt, at det at følge korrekt vejledning stadig gav et forkert svar. Det, du kan kontrollere, er snævrere end det, du kan læse.

## Hvad undervisere tager fejl af her

**»Jeg har allerede fortalt dem, at de skal tjekke deres kilder.«** En advarsel beder om en indstilling. Omhyggelige studerende har den, hastende har den ikke, og der er intet i sætningen, en studerende kan handle på klokken 11 om aftenen med et output på skærmen, der læser ganske fint.

**»En rubriklinje om at tjekke kilder dækker det.«** Den linje ligger ved initieringen og siger intet om proceskvalitet eller succes. En studerende, der kørte én søgning og gav op, scorer det samme som en, der løste spørgsmålet, så rubrikken belønner gestussen.

**»Hvis de læser omhyggeligt, fanger de fejlene.«** Flydende sprog bærer dommen. Den reviderede litteratur viser novicer på omkring en tredjedel i succes med at forklare genereret kode, og feltstudiet registrerede et forkert svar, der ankom gennem korrekt vejledning.

**»Studerende, der siger, de vil verificere, gør det.«** I Vu, Cummings og Parks studie flyttede de selvrapporterede hensigter sig ikke, mens den udførte adfærd gjorde (M = 0,34 mod 0,18). Bedøm adfærden, som flyttede sig.

**»De studerende, der springer kontrollen over, er dem, der er ligeglade.«** [[trust-calibration-chatbots-design-problem-2026|Jaidka og Cai (2026)]] krydser evne til at verificere med motivation for at verificere, og profilerne kræver forskellige afhjælpninger. Den studerende med høj evne og lav motivation er tilbøjelig til selvtilfreds overtillid. Den studerende med lav evne og lav motivation er den mest udsatte. To studerende, der fejler den samme kontrol, kan have brug for modsat undervisning, og [[prior-knowledge|forhåndsviden]] afgør, hvilken af dem du ser på.

**»Flere advarsler vil rette de studerende, der ikke kan se forskel.«** Advarsler flytter kriteriet. De hæver ikke sensitiviteten, og sensitiviteten er det, der adskiller en studerende, der kan se fejlen, fra en, der ikke kan.

**»En detektor bakker politikken op.«** På evidensen ovenfor fejler en detektorscore den standard, en integritetssag kræver, opdelingen menneske mod AI holder ikke for arbejde lavet med AI, og regimet koster dig den [[trust|tillid]], du har brug for, for at studerende vil oplyse noget som helst.

## Hvad du vil få tilbage

**»De kan bare gøre det for karakteren.«** Delvist sandt, så bedøm materialer, som AI'en ikke kan producere på den studerendes vegne. En specifikation skrevet før den første prompt, en forudsigelse registreret før artefaktet kører, en kildeliste kontrolleret imod registret, en angivet faglig grund til forkastelse: hver af dem kræver, at den studerende holder en position, som generatoren ikke kan levere. En fabrikeret grund er lige så synlig som et fabrikeret citat. Hvor en studerende ikke har faglig viden at kontrollere imod, er verifikation teater, og ingen rubrik redder det, hvilket er et argument for at undervise i indholdet først.

**»Der er ikke tid i studieordningen.«** Forvarsel er én besked før opgaven. Opgaven med indplantede fejl genbruger en quiz, du allerede giver. Rubrikken rider på materialer, som opgaven allerede genererer, så den koster rettetid på evidens, du ellers ville mangle. Alternativet koster mere: uverificerede besvarelser, fabrikerede referencer og de integritetssamtaler, der følger.

**»Værktøjet har som regel ret.«** Så er kontrollen billig, og undtagelserne er pointen. Forfatterfelter fejler oftere end nogen anden del af en genereret reference, 17 af de 30 fabrikerede poster parrede en rigtig titel med forkert forfatterskab, udgiver eller år, og 17 dukkede op i ét enkelt års symposiumforhandlinger. Nøjagtighed på de dele, du tilfældigt bemærker, siger intet om de dele, du ikke bemærker.

**»Mine studerende ved ikke nok til at bedømme outputtet.«** Det er sensitivitetstærsklen, og den er reel. Gousopoulos forudsiger, at verifikationsundervisning fejler under et fagligt vidensgulv, og bemærker, at nogle fag leverer et eksternt kriterium, fysik, kemi, økologi og epidemiologi blandt dem, mens historie, litteratur og [[ethics|etik]] i vid udstrækning ikke gør. Undervis i faget, og knyt kontrollen til det, eller forvent, at kontrollen bliver en ritual.

**»Det her er overvågning.«** Det er det, hvis du bedømmer indsats eller overvåger, hvordan studerende arbejder. Bedøm artefaktet op imod facitlisten, angiv, hvilken feedback der blev maskinkontrolleret, og hvilken der blev bedømt af et menneske, og hold detektorer ude af det.

## Hvad du kan gøre i denne uge

**1.** Skriv de to beskrivelser til din næste opgave: et korrekt output og et plausibelt forkert et. Det er den facitliste, kontrollen holder sig op imod.

**2.** Tilføj forudsigelseslinjen. Én sætning, skrevet før værktøjet åbnes, sammenlignet bagefter på fagligt grundlag.

**3.** Erstat »tjek dine kilder« med »åbn registret og bekræft forfatterne, udgiveren og året«.

**4.** Sæt otte indplantede fejl ind i en quiz, du allerede giver, og se, hvilke studerende der finder dem.

**5.** Bedøm ét verifikationsartefakt op imod facitlisten, og fortæl den studerende, hvilken del af kontrollen der fejlede: standarden, processen eller beslutningen.

## Hvor du kan gå videre

[[incorporating-ai-literacy]] dækker, hvordan man bygger den forståelse, som denne side sætter i arbejde, og [[ai-literacy-evidence]] dækker, hvad det kompetencearbejde er værd. [[reducing-over-reliance]] håndterer designsiden for studerende, der læner sig op ad værktøjet, [[study-with-ai]] er den studerendevendte følgesvend, og [[asynchronous-online-courses-ai]] dækker versionen af dette problem uden et klasserumsmøde at planlægge en kontrol ind i. Om den feedback, de studerende kontrollerer, se [[ai-feedback-quality]] og [[hallucination-risk]].
