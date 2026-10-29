---
title: "Hva er god praksis for å rapportere og tolke forskning på AI i utdanning?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T15:11:35-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Utkastet ditt har et hovedtall i sammendraget, og en fagfelle har nettopp spurt hva kontrollgruppen faktisk gjorde. Eller du er fagfellen, med en metaanalyse i hendene der den samlede effekten er 0,67 og metodedelen går over halvannen side. Eller instituttet ditt skriver veiledning om hvordan ansatte skal rapportere AI-studier og vil ha noe mer spesifikt enn «følg standardene».

Seks utelatelser avgjør de fleste av disse sakene: hvilket AI-system som ble brukt, hva det var konfigurert til å gjøre, hvilken pedagogisk rolle det spilte, om mennesker designet eller vurderte outputen, hva resultatmålet faktisk fanget, og hva forfatterne gjorde med skjevhet, kostnad og begrensninger. «Ikke vurderbar» er den ærlige dommen når de mangler, og det er en annen dom enn «motbevist».

## Kortversjonen

**1.** Beskriv AI-en som en behandling, ikke som en leverandør. Modell, versjon, konfigurasjon, prompter, rolle, og hvem som designet eller vurderte outputen.

**2.** Navngi den pedagogiske begrunnelsen og den aktive sammenligningen. Et produktnavn er ikke en metode, og undervisning som vanlig er ikke en rettferdig kontroll.

**3.** Sørg for at målet passer til påstanden, inkludert om resultatet ble målt forsinket og uten hjelp.

**4.** Rapporter den usikkerheten analysen faktisk har: avhengige effekter, varians mellom studier, prediksjonsintervaller, undergruppestørrelser, publikasjonsskjevhet.

**5.** Valider hver automatisert vurdering, med en navngitt gullstandard og en navngitt dommer.

**6.** Rapporter motvektene: styring, beregningskostnad, din egen AI-bruk, nullresultater, og bare referanser du har sjekket.

## Beskriv AI-en som en behandling noen kunne bygget på nytt

Dette er kontrollen flest innsendinger feiler på. RAISE-rammeverket (*Reporting AI Studies in Education*, Allison 2026) er en sjekkliste med 30 punkter fordelt på ti tematiske domener, og den diagnostiske påstanden er spesifikk: innsendinger utelater rutinemessig hvilken modell som ble brukt, hvordan den var konfigurert, hvilken rolle den spilte, og om menneskelige aktører designet eller vurderte outputen. Fagfeller sitter da igjen med fire spørsmål de ikke kan svare på. Hva gjorde AI-en egentlig? Var den nødvendig? Er dette replikerbart? Er læringspåstandene troverdige?

RAISE går fra pedagogisk begrunnelse via spesifikasjon på API-nivå, samspill mellom lærende og AI, tilgjengelighet og kulturell passform, deltakere og setting, menneskelig involvering, design, etikk, åpenhet og reproduserbarhet, til begrensninger. Den tilhørende etikk- og risikomatrisen dekker risiko for lærendes [[agency]], [[equity-in-ai-education|likestilling]], data[[governance]] og algoritmisk åpenhet. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah og Gašević (2026)]] tilbyr et strømlinjeformet alternativ. TEP-AIED folder åpenhet, etikk og pedagogikk inn i én gjensidig avhengig struktur, leverer en retningslinjetabell koblet til sju artikkelseksjoner, og ber forfattere legge til en delseksjon i metoden med tittelen «Transparency, Ethics, and Pedagogy Considerations». Begrunnelsen deres er praktisk: RAISE er omfattende og for granulær for rutinemessig empirisk bruk. Opplysningene hører under [[ai-use-disclosure]] og er det som gjør påstander om [[privacy]] og [[ethics]] etterprøvbare.

Pedagogisk begrunnelse kommer først i RAISE fordi AI ikke er et nøytralt verktøy. Verdien avhenger av samsvar mellom læringsproblemet, en teoretisk begrunnelse og koblingen fra læringsmål til resultatmål. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] fant at alle unntatt to av 14 reviderte metaanalyser definerte behandlingen som et verktøy, ChatGPT eller GenAI eller «AI» generelt. Et produktnavn er ikke en [[pedagogy|pedagogikk]]. Å behandle eksponering for ChatGPT som én felles intervensjon er sammenlignbart med å metaanalysere effektene av «papir».

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] gjør samme argument for primærstudier. Da de reviderte et utvalg av sammenligningene bak en fremtredende metaanalyse, fant de at bare 21 % hadde en veldefinert behandling, en kontrollgruppe og et gyldig læringsmål. Den rapporterte effektstørrelsen (g = 0,7) oversteg også den til formålsbygde [[intelligent-tutoring|intelligente veiledningssystemer]] (0,66), og det gapet er et varselsignal: en behandling som slår formålsbygd veiledning, er sannsynligvis en bunt av ulike ting som bærer én etikett.

Testen er ett spørsmål: kunne en kompetent leser bygget intervensjonen din på nytt bare ut fra metodedelen, og fått det samme?

## Bestem hva målet ditt gir deg rett til å hevde

I O'Neills evidensrevisjon av 46 tilfeldig valgte primærstudier presenterte 28 (61 %) validitetsbekymringer. Mismatch mellom avhengig variabel og målet var det vanligste (n = 15), fulgt av mismatch på uavhengig variabel (n = 11), problemer med eksperimentdesign (n = 7), problemer med datauttrekk (n = 6), fravær av kontrollgruppe (n = 6) og ikke-tilfeldig gruppetildeling (n = 6). Flerdimensjonale resultater ble rutinemessig slått sammen som om de var utbyttbare, med testskårer, lekskvalitet, [[motivation|motivasjon]], [[self-efficacy]], holdninger og [[student-engagement|engasjement]] kollapset til ett tall for «faglig prestasjon».

To rapporteringsvaner forhindrer det. Si hvilket konstrukt instrumentet måler, og at det er validert for den populasjonen; [[self-report-measures]] viser hvor oppfatningsbaserte mål avviker fra atferd, og [[assessment-validity]] dekker konstruktvaliditet. Rapporter så et resultat som ikke avhenger av den lærendes tro på hjelpen. Umiddelbar oppgaveprestasjon under assistanse er ikke en [[learning-gains|læringsgevinst]], og [[cognitive-offloading|kognitiv avlasting]] er mekanismen som mest sannsynlig skiller de to. [[verification-quality-reliance-calibration-genai-2026|Minigjennomgangen fra 2026 av 493 poster og 14 prioriterte studier]] fant at ingen målte verifiseringssuksess og den påfølgende avhengighetsbeslutningen sammen mot en uavhengig fastsatt standard for outputkvalitet, og få så forbi umiddelbar prestasjon til forsinket retensjon eller [[transfer-of-learning|overføring]].

Si taket eksplisitt i diskusjonen. En studie som målte en quiz tatt med verktøyet åpent, kan underbygge en påstand om assistert prestasjon. Den kan ikke underbygge en påstand om hva studentene lærte, og den setningen koster én linje.

## Rapporter usikkerheten analysen faktisk har

For synteser, rapporter håndtering av avhengige effekter, varians mellom studier, prediksjonsintervaller og vurdering av publikasjonsskjevhet. I² alene gjør ikke jobben. O'Neill fant rapportert heterogenitet alvorlig der den var oppgitt, fra 77,2 % til 94,4 % på tvers av 13 metaanalyser, med 12 over 80 %, og aldri oppklart: ingen moderatoranalyse nådde minste undergruppestørrelse på ti studier. Tolv metaanalyser behandlet avhengige effektstørrelser fra samme studie som uavhengige, som blåser opp evidensen. Bare fire rapporterte varians mellom studier (τ²) og bare to et prediksjonsintervall, og begge intervallene inkluderte null. Publikasjonsskjevhet ble ikke validert vurdert noe sted i settet.

Heterogenitetstall trenger modellen sin vedlagt, for I² er presisjonsavhengig. [[limitations-in-aied-research|Begrensninger i AIEd-forskning]] dokumenterer én syntese på I² = 82,98 % under en fast-effekt-modell og 15,75 % under tilfeldige effekter. En leser som bare får det første tallet, kan ikke avgjøre hvor inkonsistent korpuset er. Rapporter τ² og et prediksjonsintervall ved siden av, som også er konvensjonen [[meta-analysis-systematic-review|gjennomgangslitteraturen]] ber om.

Rabatter så ditt eget hovedtall. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] slo sammen 1 840 effektstørrelser fra 67 metaanalyser og fant at når publikasjonsskjevhet modelleres, faller gjennomsnittseffekten til omtrent en tredjedel av publisert median (SMD = 0,196 mot 0,67), med et prediksjonsintervall fra -1,521 til +1,908. Det intervallet spenner fra betydelig skade til betydelig nytte for en hypotetisk ny studie. Det er det mest nyttige tallet i artikkelen og det som lettest faller ut av sammendraget.

## Si hvor langt påstanden rekker

Rettferdighet og rekkevidde svikter på samme måte: en stor effekt som betyr mindre enn den ser ut som. Elleve av de 14 reviderte metaanalysene satte ingen populasjonsgrense, så «studenter» spente fra barn til medisinske kandidater. Ett emne, én institusjon, én disiplin eller ett land gir ikke grunnlag for en generell påstand, og resultater for ett verktøy overføres sjelden til et annet.

Tre forklaringer dekker det meste av store effekter, og hver av dem er rapporterbar. Nyhet er én. Ekstra tid på oppgaven er en annen. Den tredje er en sammenligningsbetingelse som fikk undervisning som vanlig i stedet for en aktiv kontroll. Rapporter hva kontrollen faktisk gjorde, hvor mye tid hver arm brukte, og hvor nytt verktøyet var. Oppgi også populasjonsgrensen, for effekter varierer mellom lærendegrupper, og en uoppgitt grense er det som lar ett samlet tall stå for dem alle; [[differential-effects-across-learner-groups|Ulike effekter på tvers av lærendegrupper]] legger fram variasjonen.

Behandle verktøyet som et bevegelig mål. Proprietære systemer endres uten varsel, så et funn er bundet til en modellversjon, og den [[benchmark]] som begeistret i én utgivelse, holder kanskje ikke i den neste. Versjon og tilgangsdato hører hjemme i metodedelen av den grunn, ikke bare for replikerbarhet.

## Valider de automatiserte vurderingene

[[ai-ed-evaluation|AIED-evaluering]] delegerer i økende grad skåring til modeller, som gjør valideringsprosedyren til en del av resultatet snarere enn et vedlegg. Khan Academys redegjørelse for måltallene til [[intelligent-tutoring|AI-veilederen]] rapporterer at kognitivt engasjement skåres av en [[llm]]-dommer kalibrert mot menneskelige pedagogiske eksperter på F1 0,83, og at måltallsbevegelsene kom fra mer enn 40 levende eksperimenter på fem måneder snarere enn fra offline evaluering ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] viser at uenighet mellom menneske og maskin om kvaliteten på [[formative-assessment|pretest-spørsmål]] er systematisk snarere enn tilfeldig, og at operasjonalisering av vurderingsmatrisen betyr mer enn resonnement-først-prompting.

Samsvar med menneskelige kodere er noe annet enn kvalitet, og å rapportere det som om det var kvalitet, er et mål for fagfeller. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] lot en uavhengig ekspert vurdere 855 parvise kodesett blindt for kilde. Samsvar mellom menneske og LLM kom inn på et gjennomsnittlig Jaccard på 0,30 mot 0,52 for samsvar mellom mennesker, mens den blinde verifisereren foretrakk menneskelig og maskinell koding i ikke-skillebare rater (51,5 % mot 48,5 %, p = 0,537). Rapporter kalibreringsmålet, gullstandarden og hvem som avgjorde uenigheten. De tre punktene er det som lar en leser avgjøre hvor mye vekt den automatiserte skåren kan bære.

## Opplys om kostnadene og din egen bruk

En gjennomgang av alle AIED 2025-konferanseartikler fant et mønster med LLM-adopsjon uten opplysning: de fleste prosjekter brukte LLM-er, og færre enn en håndfull rapporterte ressursforbruk eller karbonavtrykk. Den artikkelen gir en åpen kildekode-metode med måleverktøy for lokal og skybasert maskinvare, pluss en formel for å anslå beregningskostnaden for frontiermodeller med uoppgitt parameterantall. Argumentet er at det å ikke rapportere disse kostnadene selv er et etisk anliggende. Datastyring, samtykke, tilgjengelighet og kulturell passform hører i samme avsnitt (RAISE-punkter; [[universal-design-for-learning]], [[accessibility]]). [[equity-ethics-pedagogical-safety-research]] har den fyldigere behandlingen.

Din egen bruk av AI i forskningsprosessen trenger samme opplysning. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta og Lins PRISMA-LLM-analyse]] av 888 artikler om automatisering av gjennomganger viser hvor ujevn denne rapporteringen er. Siden 2023 rapporterte 38,0 % av artiklene om programvare og produkter ingen evaluering i det hele tatt, mot 9,3 % av LLM-artiklene. Gjennomsnittlig rapporteringsfylde var 6,3 for LLM-artikler og 3,3 for artikler om programvare og produkter. 84,1 % av LLM-bruken var basert på proprietære eller vertede systemer, med bare 4,9 % åpne vekter. Rammeverket deres skiller opplysning om implementering fra konsekvenssensitiv evaluering over fem opplysningsnivåer, som er en brukbar mal for å beskrive hva et verktøy gjorde inne i en gjennomgang.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai og Chan (2026)]] legger til forfattersidens bilde. Av 28 forskere på doktorgradsnivå brukte 27 GenAI gjennom ideutvikling, litteraturgjennomgang, forklaring, databehandling, programmering, [[writing-education|akademisk skriving]], redigering og oversettelse. De kalibrerte bruken etter innsats og disiplinære normer. Institusjonenes policyer handlet om undervisning og vurdering snarere enn forskningspraksis, som overlater rapporteringsbeslutningen til forfatteren.

## Publiser nullresultatet, og sjekk hver referanse

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verifiserte 30 fabrikkerte referanser på tvers av 14 artikler, med antallet ved ett teknisk symposium som steg fra 3 i 2025 til 17 i 2026, eller 2,3 % av årets konferanseartikler. LLM-assistert utkastskriving gjør en troverdig oppdiktet referanse billig å produsere, og det er derfor sjekkingen må skje før innsending og ikke etter aksept.

Motvektene i den revisjonen betyr noe når du siterer den. De fleste flaggede referansene var godartede: 229 var feil i ACM-metadata der PDF-en var korrekt, og 188 var gyldige bibliografiske varianter. Antallet fabrikkerte er en bevisst nedre grense, og det godartede flertallet er ikke en avrundingsfeil. Verifiser hver oppføring du ikke selv kan sjekke.

Å rapportere null- og negative funn er den andre halvdelen av en ærlig evidensbase. Bartoš et al. fant sterke bevis på undertrykte nullresultater (hver Egger-test p < 0,0001) og ekstrem heterogenitet (τ = 0,869), uten at noe resultat, felt, nivå eller noen AI-rolle-undergruppe viste konsistente gevinster. De fant heller ingen forskjell mellom studier publisert før og etter januar 2023, som undergraver påstanden om at moderne generative verktøy spesielt gir gevinster.

## Hva forskere tar feil om her

**«En effektstørrelse er en egenskap ved modaliteten.»** Det finnes ingen effekt av AI i utdanning å rapportere. Alle unntatt to av de reviderte metaanalysene definerte behandlingen som et verktøynavn, bare 21 % av reviderte sammenligninger hadde en definert behandling, en kontroll og et gyldig mål, og den samlede g = 0,7 lå over formålsbygd intelligent veiledning på 0,66. En effektstørrelse tilhører et design, en populasjon og en målesituasjon.

**«Gjennomsnittet er det som vil skje med studentene mine.»** Gjennomsnittet beskriver settet av studier, og ingenting i det fastsetter noe enkelt klasserom. Det skjevhetsjusterte gjennomsnittet er SMD = 0,196, og prediksjonsintervallet går fra -1,521 til +1,908. Rapportert heterogenitet ligger over 80 % i 12 av 13 metaanalyser, og ingen undergruppe i den større samlingen viste konsistente gevinster. En endring på studentnivå kan ikke identifiseres fra noen av tallene.

**«Et nullresultat betyr at verktøyet ikke virker.»** Et null er en påstand om et design ved en gitt presisjon, og fravær av en påvisbar effekt i én studie er et faktum om den studien. Den skjevhetsjusterte SMD = 0,196 kom fra en litteratur der hver Egger-test var signifikant, så den forsvarlige lesningen av korpuset er et lite og usikkert gjennomsnitt. Intet resultat, felt, nivå eller noen AI-rolle-undergruppe i den større samlingen viste konsistente gevinster heller. Det dokumenterte problemet i denne litteraturen er undertrykking.

**«Én studie avgjør saken.»** Baseratene taler imot. 61 % av de vurderte primærstudiene hadde validitetsbekymringer, ett emne eller én institusjon gir ikke grunnlag for en generell påstand, og et proprietært system er et bevegelig mål bundet til en modellversjon. Én studie er et datapunkt med et design vedlagt.

**«Høyt samsvar med menneskelige kodere betyr at modellen skårer det riktige.»** Samsvaret mellom menneske og LLM var 0,30 mot 0,52 for menneske mot menneske, og den blinde verifisereren kunne ikke skille de to kodesettene, 51,5 % mot 48,5 %. Samsvar måler konsistens med en koder, og kvalitet er et eget spørsmål som trenger en gullstandard og en dommer.

## Innvendingene du vil høre

**«Fagfeller vil ha nyhet, ikke metodedetaljer.»** Tidsskriftene beveger seg motsatt vei. RAISE og TEP-AIED gir redaktører et konstrukt å kreve, og TEP-AIEDs metode-delseksjon er et lavfriksjons inngangspunkt. Metodedetaljer er det som gjør en ikke-vurderbar artikkel til en siterbar.

**«Vi har ikke plass.»** De fem opplysningsnivåene er rapporteringsnivåer og ikke risikonivåer, så evalueringsdybden kan være en setning eller to. Versjon, prompter og rolle får plass i et kort avsnitt. Kostnad og styring får plass i en setning om begrensninger.

**«Alle rapporterer det slik.»** Tallene sier at normen er problemet: 61 % av vurderte primærstudier med validitetsbekymringer, 12 av 13 metaanalyser over 80 % heterogenitet, 38,0 % av artiklene om programvare og produkter uten evaluering.

**«Verktøyet vårt er proprietært, så vi kan ikke rapportere modellen.»** Rapporter versjon, tilgangsdato, konfigurasjon, promptene du ga, rolle og sikkerhetsmekanismer. Hvis leverandøren ikke vil si det, hører den begrensningen i begrensningene som en grense for påstanden.

**«Å rapportere nullresultater vil skade oss.»** Undertrykte nullresultater er den dokumenterte mekanismen bak det skjevhetsjusterte gjennomsnittet SMD = 0,196. Å publisere dem er det som holder ditt positive resultat lesbart.

## Hva du kan gjøre denne uken

**1.** Les sammendraget ditt mot metodedelen og slett hver påstand metoden ikke kan underbygge. Én setning om taket på målet er vanligvis nok.

**2.** Legg til spesifikasjonsavsnittet: modell, versjon, tilgangsdato, konfigurasjon, prompter, rolle, og hvem som designet eller vurderte outputen.

**3.** Trekk τ², prediksjonsintervallet og vurderingen av publikasjonsskjevhet ut av vedlegget og inn i resultatene, eller si rett ut at du ikke beregnet dem.

**4.** Skriv populasjonsgrensen og kontrollbetingelsen inn i designbeskrivelsen, inkludert hvor mye tid hver arm brukte.

**5.** Verifiser hver referanse du ikke selv har lest, og sjekk forfatterfeltet først.

## Hvor du kan gå videre

[[research-methods-aied|Forskningsmetoder i AI i utdanning]] dekker designvalgene under disse rapporteringsbeslutningene, og [[limitations-in-aied-research|Begrensninger i AIEd-forskning]] er katalogen over feilmoduser med tallene vedlagt. [[interpreting-and-applying-aied-research|Å tolke og anvende AIEd-forskning]] er leserens side av samme problem, [[does-ai-help-students-learn|evidensen om varig læring]] er det de fleste av disse målene prøver å nå, [[evaluating-ai-interventions-methods]] dekker målene og sammenligningsdesignene, og [[checking-whether-educational-ai-works]] er den kortere versjonen av spørsmålet. For gapene denne litteraturen ikke har fylt, se [[research-gaps-aied]].
