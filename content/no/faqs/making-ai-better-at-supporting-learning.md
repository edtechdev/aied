---
title: "Hvordan kan vi gjøre AI bedre til å støtte læring i vårt eget fag?"
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
updated: "2026-10-29T15:11:34-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Saken sier «finjuster modellen på kursmaterialet vårt». Budsjettet er godkjent, en GPU er booket til neste måned, og en doktorgradsstudent er bedt om å sette sammen et datasett. Ingen på møtet har spurt hva en vanlig prompt skårer, eller hva et nøkkelordssøk skårer, på de samme spørsmålene.

Still de to spørsmålene først. I denne kunnskapsbasen er gapet mellom en generell modell og en emnekompetent modell stort sett et forankrings- og promptproblem, og belegget for den rekkefølgen er uvanlig direkte: en studie av emneassistenten fant at gjenfinning, ikke modellen, var den førsteprioriterte beslutningen, og en generell modell uten forankring skåret *under* en enkel TF-IDF-baseline.

Trening er reelt og noen ganger nødvendig. Det er det tredje eller fjerde du prøver, og arbeidet under er ordnet slik at du finner ut hvilket trinn du faktisk trenger, før du bruker kvartalets datakraft.

## Kortversjonen

**1.** Logg hva en vanlig prompt skårer, og hva en triviell leksikalsk metode skårer, før du endrer noe. Det andre tallet er det som holder deg ærlig.

**2.** Sett gjenfinning over ditt eget materiale foran modellen. Det er den største enkeltgevinsten som rapporteres her for prisen, og den er reversibel.

**3.** Skriv prompten mot rubrikken din og iterer til forbedringen stopper. Platået er signalet om at trening kan legge noe til.

**4.** Tilpass vektene med [[llm-training-and-fine-tuning|LoRA]] når målet er stabilt og smalt: et format, en rubrikk, et lesenivå, et fagvokabular.

**5.** Ettertren når problemet er atferd snarere enn innhold, og skriv belønningen mot en benchmark du forventer blir spilt.

**6.** Bygg treningssettet på trinnnivå. Data med bare svar lærer ikke bort en misoppfatning.

## Få en baseline du faktisk kan slå

Før du endrer noe, logg hva en vanlig prompt returnerer. Logg så hva en triviell metode returnerer.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Studien av emnekunnskapsbasen]] er verdt å lese bare for dette. En lokal LLM uten gjenfinning nådde **52,3 %** nøyaktighet. En TF-IDF-baseline, en leksikalsk metode som er tiår gammel, nådde **55,4 %**. Modellen var dårligere enn den klassiske metoden.

Hopp over dette trinnet, og du kan ikke si om finjusteringen hjalp. Verre: du kan sende ut et system som et nøkkelordssøk slår, og bare oppdage det når en studentassistent nevner det. To tall i et regneark, hentet på en ettermiddag, verner resten av budsjettet.

## Forankre modellen i ditt eget materiale

Å legge [[rag|hentingsforsterket generering]] over kursmaterialet, uten noen finjustering i det hele tatt, løftet det samme systemet fra 52,3 % til **66,6 %**. Den gevinsten kom fra en indeks, og den kommer med en egenskap en treningskjøring ikke har: når dokumentene dine endres, indekserer du på nytt.

To andre resultater peker samme vei. En PRISMA-gjennomgang av 23 empiriske studier om tilpasning av AI for [[writing-education|skriveundervisning]] fant **prompting dominerende (N = 13), foran finjustering (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026|Tilpasning av AI til skrivepedagogikk]]). Der en kunnskapsbase må holde seg oppdatert, er gjenfinning det eneste håndtaket som holder seg oppdatert uten å kjøre en ny treningsjobb.

Gjenfinning har også en pedagogisk form. Å forankre en modell i dine egne gjennomarbeidede eksempler og rubrikker er hvordan den holder seg innenfor [[scaffolding|støtten]] du designet, og svarer på nivået du satte i stedet for å drifte inn i generiske råd. Den driften er den vanligste klagen på hyllevareveiledere, og det er et gjenfinningsproblem oftere enn et vektproblem.

## Skriv prompten mot rubrikken din, og se etter platået

Promptarbeid er ikke en forberedelse du gjør mens du venter på GPU-en. To resultater viser hva det oppnår alene:

- **Rubrikkstyrt prompting, iterativt samforbedret, hevet enigheten mellom LLM og menneske på studenters designarbeid fra 54,75 % til 81,25 %** (Cronbachs alfa 0,393 til 0,798), uten noen finjustering i det hele tatt ([[yasar-llms-iterative-pedagogical-design-2026|Yasar et al.]]).
- En litteraturforankret tilpasset prompt fremkalte de ønskede matematiske [[misconceptions|misoppfatningene]] ved **0,98** tilstedeværelse, mot **0,40** for en bred prompt ([[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang og Zhang]]).

Det praktiske signalet er **platået**. I studien av oppgavegenerering sluttet iterativ promptforbedring å gi gevinst, og finjustering av GPT-4.1 *på den optimaliserte prompten* la så til resten ([[gpt-item-generation-l2-listening-2026|studien av oppgavegenerering for lytting i andrespråksopplæring]]). Et platå etter reelt promptarbeid er belegg for at trening har rom til å legge noe til. Å gripe etter trening før du har nådd et, er gjetting, og gjetting koster en måned.

Merk hva resultatet fra oppgavegenereringen innebærer om sekvensering. Finjusteringen ble bygget på den optimaliserte prompten, så promptarbeidet var ikke bortkastet da teamet til slutt trente. Det billige trinnet er også spesifikasjonen for det dyre.

## Tilpass vektene når målet er stabilt og smalt

Tilpasning lønner seg når du trenger at modellen holder en egenskap pålitelig: et lesenivå, et utdataformat, et fagområde den mangler. Det tilbakevendende resultatet er at **målretting slår størrelse**.

- Tre **8B**-modeller finjustert på en ekspertdesignet leselæreplan for barn utkonkurrerte zero-shot GPT-4o og Llama 3.3 70B på vanskelighetsrelaterte måltall, med ubetydelige sikkerhetsproblemer. Forfatterne rammer dette inn som **kontrollerbarhet over skala** ([[llm-children-reading-story-generation|generering av barnelesestoff]]).
- Et instruksjonsdatasett med **24 795 eksempler** forankret i indiske kunnskapssystemer ga en **7B**-finjustering som skåret **6,39** på et eksternt panel med fem dommere, innenfor **0,15** av en sterk generell referansemodell til en brøkdel av distribusjonskostnaden. Den samme grunnmodellen skåret **nær null på fagspesifikke dimensjoner** uten finjusteringen ([[iks-instruct-dataset-indian-knowledge|instruksjonsdatasett fra indisk kunnskap]]). Det gapet mellom å være generelt kompetent og kompetent her er hele argumentet for fagtilpasning.
- Én enkelt [[llm-training-and-fine-tuning|LoRA]]-adapter trent på omtrent **3 900** samlede vurderte eksempler brakte fem små åpne modeller (4B til 30B) til like god eller bedre enn en menneskelig retter på tvers av to informatikk-eksamener ([[llm-graders-computer-science-exams-2026|LLM-rettere på informatikk-eksamener]]). Én adapter, ett datasett, flere grunnmodeller: det er distribusjonsformen et lite team kan drive.

Ordet *stabilt* i overskriften bærer vekten. Format, rubrikk, lesenivå og fagvokabular er stabile mål. Skjønnsbærende prosa har ikke et slikt mål, og det er der tilpasning feiler, som de to neste avsnittene viser.

## Endre atferden når svarene er problemet

Tilpasning lærer en modell *hva den skal produsere*. Ettertrening lærer den *hvordan den skal oppføre seg*. For veiledning er den forskjellen hele problemet: generelle modeller er ettertrent på menneskelig preferanse for hjelpsomhet, som betyr å svare raskt, og undervisning krever å holde svaret tilbake.

De sterkeste pedagogiske resultatene i dette korpuset ligger her. EduQWens belønningsmodell prioriterte eksplisitt **veiledende svar over direkte svar**, og pipelinen i tre trinn nådde **96,52 %** på CDPK-benchmarken mot Gemini-3 Pro sine **90,55 %** ([[singh-eduqwen-pedagogical-rl-2026|EduQwen og pedagogisk forsterkningslæring]]). SWIMs skrivesimulator gikk fra rubrikkforankret prompting (beste QWK **0,577**) til veiledet finjustering (**0,474 ± 0,023**) til forsterkningslæring (**0,618 ± 0,005**) på hver egenskap og hver prompt ([[swim-student-writing-simulation-2026|SWIMs skrivesimulator]]).

Les SWIM-tallene nøye, fordi det midterste trinnet gikk bakover. Veiledet finjustering på demonstrasjoner gjorde simulatoren dårligere enn prompten den startet fra, og bare belønningssignalet gjenopprettet tapet og slo så baselinen. Hvis planen din stopper ved veiledet finjustering, kan planen være en omvei.

## Veiled på trinnnivå

Ett funn her er lett å overse og dyrt å ignorere: **veiledningskvalitet slår veiledningsmengde**. Instruksjonstrente modeller lærte algebra-misoppfatninger bare når de ble trent på **løsningsspor på trinnnivå**. Da den ble trent på bare sluttsvar, holdt nøyaktigheten seg **under 30 % ved hver datamengde** ([[misconception-acquisition-dynamics-llms-2026|hvordan LLM-er tilegner seg misoppfatninger]]).

Hvis treningseksemplene dine er par av spørsmål og riktig svar, trener du feil ting, og flere eksempler reparerer det ikke. Det du trenger, er mellomarbeidet: den gale svingen, trinnet der studenten gikk feil, rettelsen. Å samle det er et dataingeniørproblem med en pedagogisk begrensning, og det betyr vanligvis å logge økter snarere enn å skrape fasiter.

## Der tilpasning feiler i stillhet

Dette er delen entusiasmen hopper over.

**Skjønnsbærende tekst.** I WrAFT produserte det samme prosjektet som finjusterte med suksess for *skåring* av essays (QWK 0,84), avkortet og uparsbart utdata da det finjusterte for *tilbakemelding*, mens direkte prompting av Claude 3.7 produserte tilbakemeldingen lærerne rangerte høyest ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT og vurdering av argumenterende skriving]]). Finjusteringen lærte modellen å treffe en skår, og skåring var det eneste den lærte.

**Overføring mellom modeller.** Skala er ikke en pålitelig prediktor for nedstrøms ytelse under LoRA-tilpasning, og **identiske hyperparametere produserte kvalitativt ulik atferd på tvers av arkitekturer** ([[aiawe-automated-writing-evaluation|automatisert vurdering av skriving i ingeniørfag]]). En oppskrift som virket på én modell, er ikke en oppskrift.

**Arkitektur over parameterantall.** Finjustering av tre åpne tekst-til-bilde-modeller på 1 000 bilder med bildetekst fra atomteknikk forbedret Stable Diffusion XL betydelig, ga begrensede gevinster for SD-v3.5-Medium, og ga **ingen målbar forbedring for Flux.1 i det hele tatt** ([[nuclear-diffusion-text-to-image-learning-2026|diffusjonsmodeller for atomfag]]).

**Problemet var validering.** En GPT-4 på frontier-nivå uten trening produserte omtrent **35 %** for generelle, ukorrekte eller svaravslørende hint da den forfattet veiledningstilbakemelding, og dens egne automatiske kvalitetssjekker var uenige med menneskelig skjønn ([[reddig-maclellan-personalized-feedback-llm-2026|personalisert tilbakemelding med LLM]]). Det er et filtreringsproblem, og en LoRA løser det ikke.

Mønsteret på tvers av alle fire: tilpasning flytter en modell pålitelig mot et mål du kan spesifisere og skåre. Den legger til null skjønn, og en pipeline som mangler en kontroll, sender fortsatt ut dårlig resultat.

## Budsjetter tilpasningen ærlig

For tilpasningstrinnet er terskelen lavere enn de fleste team antar: **noen hundre til noen tusen eksempler og én GPU**. LoRA trener et lite antall tilførte parametere og lar grunnvektene være frosne, så flere modeller kan betjenes fra én adapter.

Rang er et kompromiss snarere enn et ratt å maksimere. Gevinst per million adapterparametere falt monotont når rangen steg, og emnenivåalignering var en beslutning om skala og rang snarere enn en gratis oppgradering ([[lora-finetuned-control-systems-course-qa-2026|LoRA-finjustert spørsmål og svar for et reguleringsteknikkemne]]).

Hvilke lag du tilpasser, er også et reelt valg. Å oppdatere **bare de fire siste Transformer-lagene** i en BERT-basert diskursanalysator slo både å tilpasse bare topplaget og finjustering i full dybde ([[bert-discourse-english-teaching-2026|BERT-basert diskursanalyse i engelskundervisning]]). Tre konfigurasjoner, tre ulike resultater, og den billigste vant.

Kostnaden som er lett å undervurdere, er evalueringen, som er større enn datakraftregningen. Se [[checking-whether-educational-ai-works|Hvordan vet vi at en pedagogisk AI fungerer riktig, og ikke bare skårer godt?]]

## Kalibrer det du forventer

Modell- og promptvalg utgjør til sammen bare omtrent **15 %** av feilaligneringen mellom LLM-er og studenters læringsgevinster, og i den studien gjorde benchmark-vekting og enighetsavstemning aligneringen *verre* ([[educational-llm-alignment|alignering av pedagogiske LLM-er]]). Forhåndstreningsdata er det dominerende håndtaket for hvordan en modell oppfører seg, og det er det ene håndtaket du ikke kan dra i.

Ingenting av det argumenterer mot arbeidet over. Det argumenterer mot å forvente at en finjustering fikser et designproblem. Hvis problemet er at veilederen svarer for beredvillig, kan trening håndtere det. Hvis problemet er at studentene ikke engasjerer seg i den, vil trening ikke gjøre det, og 15 %-tallet sier at pengene er bedre brukt andre steder.

## Hva team tar feil om

Finjustering er hvordan du lærer en modell emnet ditt. Gjenfinning over ditt eget materiale tok det samme systemet fra 52,3 % til 66,6 % uten noen trening i det hele tatt, og en prompt raffinert mot en rubrikk flyttet enigheten fra 54,75 % til 81,25 %. Trening lærer atferd og format langt mer pålitelig enn det lærer innhold.

En større grunnmodell fjerner behovet for alt dette. En 8B-modell finjustert på en leselæreplan for barn slo zero-shot GPT-4o og Llama 3.3 70B på vanskelighetsmåltall, og en 7B-finjustering landet innenfor 0,15 av en sterk generell referanse til en brøkdel av distribusjonskostnaden. Størrelse og tilpasning er ulike akser, og bare én av dem er til salgs per token.

Mer data vil fikse et treningssett som er bygget feil. Veiledning med bare svar lot nøyaktigheten ligge under 30 % ved hver datamengde i misoppfatningsstudien. Skala reparerer ikke et mål som mangler informasjonen modellen trenger.

En oppskrift som virket på én modell, vil virke på den neste. Identiske hyperparametere produserte kvalitativt ulik atferd på tvers av arkitekturer, og den samme finjusteringsmetoden forbedret én bildemodell betydelig og gjorde ingenting målbart for en annen. Kjør oppskriften på nytt på grunnmodellen din, ellers gjetter du.

Veiledet finjustering er det trygge midterste trinnet før forsterkningslæring. I SWIM skåret det veiledede stadiet 0,474 mot 0,577 fra prompten det erstattet, og bare belønningssignalet gjenopprettet det. Det midterste trinnet kan koste deg en måned og en regresjon.

## Hva som kommer tilbake på deg

**«Budsjettet er godkjent for finjustering, så la oss finjustere.»** Bruk en uke på baselinen og indeksen først. Hvis gjenfinning flytter tallet, er finjusteringen en senere beslutning tatt med bedre informasjon, og du vil ha en sterkere sak for den eller en god grunn til å levere GPU-en tilbake.

**«Problemet vårt er at studentene ikke bruker den.»** Trening endrer hva modellen produserer. 15 %-tallet beskriver hvor mye modell- og promptvalg forklarer av feilaligneringen med læringsgevinster, og engasjement ligger utenfor det. Instrumenter hvor studentene faller fra før du kjøper datakraft.

**«Vi kan ikke sende studentarbeid til en leverandørs API.»** Det sterkeste LoRA-resultatet her kom fra åpne modeller i området 4B til 30B, og én enkelt adapter betjente flere av dem. Den distribusjonsformen er tilgjengelig for et team med én GPU og ingen databehandleravtale.

**«Prompting er et triks; ekte arbeid betyr trening.»** Gjennomgangen av 23 studier av skriveundervisning fant prompting som den dominerende tilnærmingen og finjustering bak den, og den største rapporterte gevinsten på denne siden kom fra en indeks. Både gjennomgangen og emneassistentstudien ordnet de trinnene etter målt gevinst.

**«Vi prøvde prompting og det flatet ut, så vi trenger trening.»** Det er den riktige lesningen, og det er det ene tilfellet der klatringen er berettiget. Ta den optimaliserte prompten med inn i finjusteringen slik teamet bak oppgavegenereringen gjorde, og forvent at gevinsten blir mindre enn promptarbeidet var.

**«Kursmaterialet vårt er inkonsistent, så gjenfinning vil returnere søppel.»** Det vil den, og gjenfinning arver kvaliteten på korpuset. Å rydde korpuset er billigere enn å trene en modell til å jobbe rundt det, og gevinsten fra 52,3 % til 66,6 % ble målt over vanlig kursmateriale snarere enn et kuratert sett.

## Hva du kan gjøre denne uken

**1.** Kjør en baseline med bare prompt og en baseline med nøkkelord på 50 reelle spørsmål fra emnet ditt, og skriv ned begge tallene.

**2.** Pek gjenfinning mot materialet du allerede har, og kjør de samme 50 på nytt, så gevinsten måles mot din egen baseline.

**3.** Sett rubrikken inn i systemprompten og iterer i en uke. Stopp når to runder ikke legger til noe.

**4.** Revider treningssettet ditt for spor på trinnnivå. Hvis det er par av spørsmål og svar, er datasettet ikke klart.

**5.** Skriv den ene egenskapen du trenger holdt pålitelig, og avgjør om det er atferd eller innhold. Den beslutningen velger trinnet.

## Hvor du kan gå videre

[[training-ai-tutors-to-guide-rather-than-answer|Hvordan trener vi en AI-veileder til å veilede studenter i stedet for å svare dem?]] dekker ettertreningshalvdelen i detalj. [[checking-whether-educational-ai-works|Hvordan vet vi at en pedagogisk AI fungerer riktig?]] dekker hvordan du ser om noe av det virket. [[developing-ai-tutor|Hva er beste praksis for å utvikle en effektiv AI-veileder?]] er interaksjonsdesignsiden av samme mål, og [[designing-educational-ai-software|Hva er beste praksis for å designe pedagogisk AI-programvare?]] dekker systemet rundt. Den fullstendige konseptsiden er [[llm-training-and-fine-tuning|trening og finjustering av LLM-er]].
