---
title: "Hvordan lærer jeg studenter å verifisere AI-resultat?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T15:11:35-04:00"
translation_of: faqs/verify-ai-output
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

Det er uken før karakterene skal settes, og to besvarelser viser til kilder som ikke finnes. Begge studentene sier de sjekket. Én åpnet lenken. Den andre leste avsnittet og syntes det hørtes riktig ut. Du har allerede fortalt dette kullet at de må verifisere det chatboten gir dem, og det å si det produserte ikke atferden.

Verifisering er en sekvens du kan bygge inn i en oppgave. Bestem hva som teller som korrekt før oppgaven starter, la studenten forplikte seg til en forventning skriftlig, send dem til protokollen i stedet for til inntrykket av prosaen, og vurder protokollen de produserer. En rubrikklinje som sier «sjekket kilder», måler ingenting av dette.

## Kortversjonen

**1.** Skriv fasiten først. En kontroll trenger noe å måles mot, og de fleste verifiseringsoppgaver definerer aldri hva korrekt betyr.

**2.** Krev en prediksjon før resultatet vises, så studentens resonnering finnes på papir før verktøyet kan overskrive den.

**3.** Navngi målet for hver kontroll: forfatterlisten, utgivelsesstedet, året, det bestemte tallet, det bestemte trinnet. «Pass på at det er riktig» er ikke en kontroll.

**4.** Skill kontrollen en maskin kan kjøre fra vurderingen bare en leser kan gjøre, og lær studentene hvilken av dem de holder på med.

**5.** Vurder protokollen mot fasiten, ikke innsatsen, så kontrollteater ikke gir noe utbytte.

**6.** Planlegg kontrollen inn i oppgaven. Tidspress er en dokumentert grunn til at studenter hopper over den.

## Bestem hva korrekt betyr før noen kontrollerer noe

[[verification-quality-reliance-calibration-genai-2026|Wei og Shang (2026)]], som gikk gjennom 493 dedupliserte poster og kartla 14 prioriterte empiriske studier, skiller sju ting som «kritisk AI-bruk» kollapser til én: epistemisk evaluering, initiering av verifisering, prosesskvalitet, verifiseringssuksess, avhengighetsbeslutninger, umiddelbar oppgaveprestasjon og selvstendig læring. Rubrikken din sier «sjekket kilder», som ligger på trinn to og ikke forteller noe om hvorvidt kontrollen var kompetent eller om den endret svaret til studenten. Initiering er ikke suksess. En sterk prosess kan ende uten konklusjon, en svak kan lande på det riktige svaret, og en student som kjørte et søk og forble forvirret, skårer det samme som en som løste spørsmålet.

Den samme gjennomgangen trekker en andre linje, mellom [[trust|tillit]] og avhengighet. [[trust-calibration|Kalibrering av avhengighet]] spør om en avhengighetsbeslutning var hensiktsmessig gitt den faktiske kvaliteten på resultatet, noe som knytter vurderingen til én beslutning og ett resultat. Én gjennomgått studie fant at falsk ChatGPT-informasjon flyttet deltakernes rapporterte tillit og aldri registrerte om de senere aksepterte eller avviste en bestemt anbefaling. En annen logget aksept- og avvisningsbeslutninger på ChatGPT-[[feedback|tilbakemelding]] for 78 oversettelsesstudenter, men uten en uavhengig ekspertvurdering kan en aksept ikke kalles hensiktsmessig og en avvisning ikke kalles berettiget. Uten grunnsannhet om resultatkvalitet kan avhengighet ikke klassifiseres i det hele tatt.

Det er designkonsekvensen, og det er det første du bør rette. Før du setter en verifiseringsoppgave, skriv to korte beskrivelser: hvordan et korrekt resultat ser ut for denne oppgaven, og hvordan et plausibelt, men galt resultat ser ut. Én av hver er nok. Studentene har da en standard å kontrollere mot, og du har noe å vurdere kontrollen mot annet enn om studenten høres grundig ut.

## La dem forplikte seg før verktøyet svarer

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] bygger et måleprogram rundt *prediker før du kjører*: studenten oppgir hva som skal skje, og deretter vurderes artefaktens atferd mot prediksjonen på faglige grunnlag snarere enn etter om den kjører. Resonneringen finnes før resultatet gjør det, og det er det som gjør den vurderbar.

Hans gjennomgang av 24 studier fant det samme verktøyet som produserte motsatte utfall under ulike oppgavestrukturer. Et konvensjonelt ChatGPT-opplegg endte signifikant lavere i måloppnåelse, [[self-efficacy|mestringstro]] og flyt, mens en betingelse som la til verifiseringskrav og moduler for feilrefleksjon, viste sterkere [[critical-thinking|høyereordens tenkning]]. Verktøyet var konstant på tvers av betingelsene. Det som varierte, var om oppgaven ba studenten holde en posisjon verktøyet kunne motsi.

I praksis er det én linje på oppgavearket: før du åpner verktøyet, skriv ned hva du forventer det sier og hvorfor. Sammenlign så. To studenter kan produsere samme avsnitt, og bare én av dem kan forklare hvor avsnittet avviker fra det de predikerte.

## Send dem til protokollen

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] sporet 113 588 referanser fra 5 225 artikler i informatikkutdanning publisert siden 2021 og verifiserte manuelt 828 mistenkelige poster. De fant 30 som inneholdt verifiserbart fabrikkert bibliografisk informasjon, fordelt på 14 artikler, alle fra 2025 og 2026. Tretten var helt oppdiktet. De andre 17 kombinerte en ekte tittel med fabrikkert eller feil forfatterskap, utgivelsessted eller år. På SIGCSE Technical Symposium steg tallet fra 3 i 2025-prosidingen til 17 i 2026, eller 2,3 % av årets prosidingartikler.

Forfatterfelt feiler oftere enn noen annen del av en generert referanse. Det ene funnet forteller deg hva du skal be om. «Åpne kilden og les forfatterlisten» sikter mot feltet som mest sannsynlig er feil, og det produserer et faktum studenten enten har eller ikke har. «Pass på at kildene er ekte» produserer en forsikring. Be studentene bekrefte forfattere, utgivelsessted og år mot selve protokollen. Artikkelen ber om at hvert sitert arbeid verifiseres og at enhver automatisk kontroll forblir [[human-in-the-loop-ai|menneske i sløyfen]], som er nøyaktig vanen et siteringskrav øver inn.

## Skill kontrollen en maskin kan kjøre fra vurderingen bare en leser kan gjøre

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] setter en forsvarbar grense for hva som kan kontrolleres mekanisk: dokumenterte kriterier, sammenligning mot etablert kunnskap uten tolkende skjønn, og ett riktig svar eller forhåndsspesifiserte akseptable alternativer. Datoer, formler, siteringer og beregninger klarerer den grensen. Alt tolkende feiler den, og der er studentens egen lesning instrumentet for kontrollen.

Gousopoulos formaliserer den samme delingen som et signaldeteksjonsproblem med to uavhengige parametere. Sensitivitet er evnen til å skille korrekt fra mangelfullt resultat; kriterium er hvor studenten setter terskelen for avvisning. Overavhengighet deler seg langs den linjen. Advarsler, sjekklister og spørsmål om hallusinering flytter kriteriet og endrer når en student avviser. Fagundervisning, gjennomarbeidede sammenligninger og øving med innplantede feil hever sensitiviteten, fordi studenten da kan se forskjell. En student som aksepterer mangelfullt resultat, kan ha et kriterieproblem eller et sensitivitetsproblem, og de to krever ulik undervisning.

Forutsetningen er ubehagelig. Verifiseringsundervisning er dannende bare der sensitiviteten kan overstige null, noe som krever nok fagkunnskap til å skille korrekt fra ukorrekt resultat. I samme gjennomgang lyktes nybegynnere som ble bedt om å forklare [[llm|LLM]]-generert kode, på omtrent en tredjedel av oppgavene, så å vurdere AI-tilbakemelding eller kode mot sin egen resonnering er en reell kontroll bare der resonneringen har substans. Hvis studentene dine ennå ikke kan gjøre den faglige tenkningen uten hjelp, kjøper flere advarsler ingenting. Undervis innholdet og fest kontrollen til det.

Én advarsel til hører hjemme i designet: intervensjoner som reduserer upassende aksept, må også kontrolleres for utilsiktet avvisning av korrekt assistanse. Gi rom for at en student kan akseptere godt resultat av en oppgitt grunn.

## Vurder kontrollen uten å gjøre den til overvåking

Gousopoulos trekker konsekvensen direkte. Hvis AI kan produsere artefakten, kan ikke artefakten være vurderingen, så evalueringen flytter seg til spesifikasjonen, valideringsresonneringen og tolkningen. Hans konstrukt for modellforfatterskap har fire fasetter, spesifikasjon, konseptuell modell, verifisering og tolkning, på fire ordnede nivåer fra delegert til forfattet. Det forfattede nivået krever en verifiserbar spesifikasjon før den første prompten, avvisning av resultat på faglige grunnlag med en oppgitt grunn, og en tolkning som går utover artefaktens egen rapport om seg selv.

Rubrikken bygger på materiale en konstruksjonsoppgave allerede genererer, så det samme instrumentet er både en [[formative-assessment|formativ vurdering]] og et forskningsmål. Det svarer på bekymringen om unødvendig arbeid: du skårer et biprodukt av en oppgave du allerede har satt. To begrensninger hører med ved siden av. Ingen studie blant Wei og Shangs 14 prioriterte tilfeller målte verifiseringssuksess og den påfølgende avhengighetsbeslutningen sammen, og få fulgte umiddelbar prestasjon med forsinket retensjon eller [[transfer-of-learning|overføring]], så rubrikken hviler på et analytisk kart snarere enn på en validert kausal sekvens.

Tre beslutninger holder dette fra å bli overvåking. Vurder kontrollen mot avgjort kvalitet snarere enn innsats, ellers bygger du et insentiv til å spille kontroll. Oppgi proveniens, slik Venetsanos krever: studentene må vite hvilke deler av tilbakemeldingen de får som ble maskinverifisert, hvilke som ble vurdert evaluerende, og at menneskelig skjønn har forrang, fordi de ikke kan veie tilbakemelding de ikke kan plassere. Og hold håndheving unna deteksjonsverktøy. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] argumenterer for at [[ai-detection|AI-deteksjon]] ikke bør brukes i utdanning i det hele tatt: anslagene er probabilistiske og kan ikke verifiseres uavhengig fordi den virkelige tekstens opprinnelse er ukjent, skårene oppfyller ikke beviskravet en integritetssak krever, og dikotomien menneske mot AI er meningsløs for arbeid laget med, snarere enn av, AI. Konklusjonen deres er at deteksjon «ikke verner akademisk integritet; det undergraver den.» Overvåkingsregimer fremmer mistanke og tærer på studentenes [[trust|tillit]]. Hold de to betydningene av deteksjon fra hverandre. Å oppdage AI-generert tekst har ingen forsvarbar bevisrolle her; å lære studenter å oppdage feil i AI-resultat er hele øvelsen.

Delingen er arkitektonisk, og verdt å fortelle studentene om. [[vetting-dual-llm-safety-education|Li, Zhang og Botelho (2026)]] kontrollerer resultat med en andre modell i stedet for å bygge kontrollen inn i generatoren. En student som ser hvorfor, kan se hvorfor «verktøyet sa det var riktig» ikke er et verifiseringsargument.

## Hvis du designer emnet snarere enn å undervise i det

Tre funn over hører hjemme i emnebyggingen, der en underviser som arbeider alene ikke vil nå dem.

Det første er en diagnose. Kjør en oppgave med innplantede feil: tjue elementer, åtte med en faglig feil. Det forteller deg om studentene kan skille i det hele tatt, før du bruker et semester på å undervise et kriterium de ikke kan bruke. En klasse som overser de innplantede feilene, trenger faglig gjennomgang, uansett hva læreplanen sier om kritisk bruk.

Det andre er plasseringen av advarslen. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings og Park (2026)]] viste en generisk forvarselmelding rett før to oppgaver til 100 studenter i USA, 40 innenlandske og 60 internasjonale EFL-studenter. Inokulerte studenter var signifikant mer tilbøyelige til å verifisere oppgaven med sammendrag av akademisk kilde (M = 0,34 mot 0,18), mens selvrapporterte verifiseringsintensjoner ikke beveget seg. Effekten var også oppgaveavhengig: den viste seg for kildesammendragsoppgaven, men ikke jevnt for en matematikkquiz om potenser og multiplikasjon av store tall. Sett advarslen på brukspunktet, per oppgavetype, snarere enn én gang i læreplanen eller introduksjonsmodulen.

Det tredje er planlegging. En læreplan som lar verifiseringen være uplassert, sier at den er valgfri, og tidspress er en dokumentert grunn til at studenter hopper over kontroller. Verifisering som lever inne i oppgaven, med en merket artefakt knyttet til, skjer. Verifisering som lever i et policyavsnitt, gjør det ikke.

## Hvis du er studenten som leser dette

Fire grep dekker det meste av det forskningen krever av deg.

Skriv forventningen din før du prompter. Én setning om hva svaret bør være, og sammenlign resultatet mot den.

Åpne kilden. Les forfatterlisten, utgivelsesstedet og året mot protokollen, fordi forfatterfeltet er der genererte referanser oftest feiler.

For alt tolkende, skriv grunnen med egne ord. En fabrikkert grunn er like synlig som en fabrikkert sitering.

Mistro følelsen av at prosaen leser godt. Nybegynnere som ble bedt om å forklare LLM-generert kode, lyktes på omtrent en tredjedel av oppgavene, og en feltstudie av student-ChatGPT-quizsamtaler fant at det å følge korrekt veiledning likevel ga et galt svar. Det du kan kontrollere, er smalere enn det du kan lese.

## Hva undervisere tar feil om her

**«Jeg har allerede fortalt dem at de må sjekke kildene sine.»** En advarsel ber om en innstilling. Grundige studenter har den, stressede har den ikke, og det finnes ingenting i setningen en student kan handle på klokken 11 om kvelden med et resultat på skjermen som leser helt greit.

**«En rubrikklinje om å sjekke kilder dekker det.»** Den linjen ligger på initiering og sier ingenting om prosesskvalitet eller suksess. En student som kjørte ett søk og ga opp, skårer det samme som en student som løste spørsmålet, så rubrikken belønner gesten.

**«Hvis de leser nøye, vil de fange feilene.»** Flyt bærer vurderingen. Den gjennomgåtte litteraturen viser nybegynnere på omtrent en tredjedel suksess med å forklare generert kode, og feltstudien registrerte et galt svar som ankom gjennom korrekt veiledning.

**«Studenter som sier de vil verifisere, gjør det.»** I studien til Vu, Cummings og Park beveget ikke de selvrapporterte intensjonene seg, mens den utøvde atferden gjorde det (M = 0,34 mot 0,18). Vurder atferden, som beveget seg.

**«Studentene som hopper over kontrollen, er de som ikke bryr seg.»** [[trust-calibration-chatbots-design-problem-2026|Jaidka og Cai (2026)]] krysser evne til å verifisere med motivasjon for å verifisere, og profilene trenger ulike botemidler. Studenten med høy evne og lav motivasjon er utsatt for selvtilfreds overtillit. Studenten med lav evne og lav motivasjon er den mest eksponerte. To studenter som feiler på samme kontroll, kan trenge motsatt undervisning, og [[prior-knowledge|forkunnskap]] avgjør hvilken du ser på.

**«Flere advarsler vil fikse studentene som ikke kan se forskjell.»** Advarsler flytter kriteriet. De hever ikke sensitiviteten, og sensitivitet er det som skiller en student som kan oppdage feilen, fra en som ikke kan.

**«En detektor støtter opp under policyen.»** Etter belegget over feiler en detektorskår det kravet en integritetssak stiller, delingen menneske mot AI holder ikke for arbeid laget med AI, og regimet koster deg den [[trust|tilliten]] du trenger for at studenter skal oppgi noe som helst.

## Hva som kommer tilbake på deg

**«De kan bare gjøre det for karakteren.»** Delvis sant, så vurder materiale AI ikke kan produsere på studentens vegne. En spesifikasjon skrevet før den første prompten, en prediksjon registrert før artefakten kjører, en kildeliste kontrollert mot protokollen, en oppgitt faglig grunn for avvisning: hver av dem krever at studenten holder en posisjon generatoren ikke kan levere. En fabrikkert grunn er like synlig som en fabrikkert sitering. Der en student ikke har fagkunnskap å kontrollere mot, er verifisering teater, og ingen rubrikk redder det, som er et argument for å undervise innholdet først.

**«Det er ikke tid i læreplanen.»** Forvarsel er én melding før oppgaven. Oppgaven med innplantede feil bruker en quiz du allerede gir. Rubrikken rir på materiale oppgaven allerede genererer, så den koster rettetid på belegg du ellers ville mangle. Alternativet koster mer: uverifiserte innleveringer, fabrikkerte referanser og integritetssamtalene som følger.

**«Verktøyet har vanligvis rett.»** Da er kontrollen billig, og unntakene er poenget. Forfatterfelt feiler oftere enn noen annen del av en generert referanse, 17 av de 30 fabrikkerte postene kombinerte en ekte tittel med feil forfatterskap, utgivelsessted eller år, og 17 dukket opp i ett enkelt års symposiumprosiding. Nøyaktighet på delene du tilfeldigvis legger merke til, sier ingenting om delene du ikke gjør det.

**«Studentene mine kan ikke nok til å vurdere resultatet.»** Det er sensitivitetsterskelen, og den er reell. Gousopoulos forutsier at verifiseringsundervisning feiler under et gulv av fagkunnskap, og bemerker at noen fag gir et eksternt kriterium, fysikk, kjemi, økologi og epidemiologi blant dem, mens historie, litteratur og [[ethics|etikk]] i stor grad ikke gjør det. Undervis faget og fest kontrollen til det, eller forvent at kontrollen blir et ritual.

**«Dette er overvåking.»** Det er det, hvis du vurderer innsats eller ser på hvordan studentene arbeider. Vurder artefakten mot fasiten, oppgi hvilken tilbakemelding som ble maskinkontrollert og hvilken som ble vurdert av en person, og hold detektorene utenfor.

## Hva du kan gjøre denne uken

**1.** Skriv de to beskrivelsene for neste oppgave: et korrekt resultat og et plausibelt galt et. Det er fasiten kontrollen måles mot.

**2.** Legg til prediksjonslinjen. Én setning, skrevet før verktøyet åpnes, sammenlignet etterpå på faglige grunnlag.

**3.** Erstatt «sjekk kildene dine» med «åpne protokollen og bekreft forfatterne, utgivelsesstedet og året».

**4.** Legg åtte innplantede feil inn i en quiz du allerede gir, og se hvilke studenter som finner dem.

**5.** Merk én verifiseringsartefakt mot fasiten, og fortell studenten hvilken del av kontrollen som sviktet: standarden, prosessen eller beslutningen.

## Hvor du kan gå videre

[[incorporating-ai-literacy|Å bygge inn AI-kompetanse]] dekker hvordan du bygger forståelsen denne siden setter i arbeid, og [[ai-literacy-evidence|belegg for AI-kompetanse]] dekker hva det kompetansearbeidet er verdt. [[reducing-over-reliance|Å redusere overavhengighet]] håndterer designsiden for studenter som lener seg på verktøyet, [[study-with-ai|Å studere med AI]] er den studentvendte følgesiden, og [[asynchronous-online-courses-ai|asynkrone nettkurs med AI]] dekker varianten av dette problemet uten en klasse å planlegge en kontroll inn i. Om tilbakemeldingen studentene kontrollerer, se [[ai-feedback-quality|Kvalitet på AI-tilbakemelding]] og [[hallucination-risk|hallusineringsrisiko]].
