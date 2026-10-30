---
title: "Hvordan kan AI støtte flerspråklige elever uten å feilvurdere kunnskapen deres eller slette stemmen deres?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-disabled-neurodivergent-learners, writing-instruction-ai-best-practices, redesign-assessment-ai-era, verify-ai-output]
weight: 72
foundations: [ai-literacy, theories-and-frameworks]
technology: [generative-ai, llm, conversational-ai]
assessment: [assessment-validity, feedback, ai-feedback-quality, evaluative-judgment]
methods: [meta-analysis-systematic-review, quantitative-research]
research_method: [literature review, experiment]
audience: [instructors, instructional designers, assessment designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:30:00-04:00"
translation_of: faqs/ai-multilingual-learners
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

En student forstår begrepet og trenger fire minutter ekstra for å si det på engelsk. AI-en kan oversette oppgaven, definere terminologien, øve inn forklaringen sammen med studenten, eller skrive hele svaret. Tre av disse er undervisning. Én er å gjøre oppgaven.

Kort svar å gi en kollega: avgjør hva språket gjør i denne oppgaven før du avgjør hva verktøyet kan gjøre. Der språket er underordnet, kan AI fjerne en barriere som ikke har noe med konstruktet ditt å gjøre. Der språket er konstruktet, omgår det samme verktøyet læringen. Risikoen går begge veier samtidig: [[multilingual-learning|språkstøtte]] kan forbedre tilgangen, og automatisert poenggiving kan fortsatt lese studenten feil. I én fysikkstudie ble forklaringer med lavere språklig kvalitet systematisk vurdert under ekspertskjønn av alle AI-tilnærmingene som ble testet, ni maskinlærings- og to språkmodellsystemer, blant 116 ungdomsskoleelever ([[ai-scoring-language-bias-physics|Feser og Tschisgale, 2026]]). Flyt og forståelse ble vurdert som én og samme ting.

## Kortversjonen

**1.** Slå fast hvilken rolle språket har i oppgaven: underordnet, sentralt, eller ett kriterium blant flere.

**2.** Skriv tillatt støtte inn i instruksjonene og kriteriene, og si hva studentene fortsatt må gjøre selv.

**3.** Gi målrettet hjelp før fullstendige omskrivinger. Be verktøyet identifisere uklar mening og tilby alternativer.

**4.** Krev at studenten sammenligner den foreslåtte ordlyden med sin egen mening og emnets kilder.

**5.** Vurder begrepsmessig resonnering og språk separat når begge er tiltenkte utbytter.

**6.** Gjør aldri et utestet verktøy til den eneste veien til støtte.

## Avgjør hva språket gjør

I en biologiforklaring er grammatikk stort sett underordnet begrepet som vurderes. I et språkfag er det å produsere og revidere bestemte strukturer selve læringen. I profesjonell kommunikasjon teller både faglig nøyaktighet, målgruppe og register. Det samme oversettelsesverktøyet er hensiktsmessig i det første tilfellet, tvilsomt i det andre og forhandlingsbart i det tredje.

Skriv beslutningen ned der studentene kan lese den. Hvis studentene kan oversette instruksjonene, men må produsere en forklaring på målspråket uten hjelp, si det eksplisitt. Hvis terminologistøtte er tillatt, spesifiser hva studenten fortsatt må forklare og verifisere. Kontroller deretter ordningen mot krav til tilrettelegging og institusjonens retningslinjer i stedet for å behandle alle former for språkhjelp som ombyttbare. En student med dokumentert tilrettelegging og en student som unngår øving, kan be om det samme, og bare den andre er undervisningsproblemet ditt.

## Hva forskningen støtter, og hva den ikke støtter

[[genai-chatbots-language-learning-affordances-review-2026|Lopez og Arabadzhy (2026)]] gjennomgikk 24 empiriske studier av generative chatboter i språklæring. Bidraget deres er taksonomisk: hver underanvendelse som ble katalogisert for pre-generative chatboter, består, og tre er nye, inkludert **translanguaging**, den bevisste bevegelsen mellom språk som en del av læringen. Det er et kart over rapporterte bruksmåter og erfaringer, ikke et samlet estimat, og materialet er geografisk konsentrert, med Kina, Iran, Taiwan og Türkiye som opphav til 19 av de 24 studiene og alle unntatt én innenfor formelle institusjoner. Støtte for å bruke tverrspråklig forklaring som et læretrekk er ikke støtte for å oversette hver oppgave.

Vurdering er der evidensen blir skarpere og innsatsen større. [[ai-scoring-language-bias-physics|Feser og Tschisgale (2026)]] sammenlignet elleve automatiserte poenggivingstilnærminger med menneskelige ekspertscore for 116 ungdomsskoleelevers fysikkforklaringer, og fant systematisk undervurdering av begrepsmessig forståelse for språklig svakere forklaringer, i hver eneste tilnærming. Designet isolerer mekanismen: det samme begrepsinnholdet, uttrykt i svakere prosa, fikk lavere score. Dette er ikke en påstand om noe bestemt lands flerspråklige elever, og det er nøyaktig mønsteret som gjør samlet poengsamstemthet til et dårlig diagnostisk verktøy. En poenggiver kan være enig med menneskelige sensorer i gjennomsnitt mens den tar feil i en konsistent retning for studentene hvis språk fortsatt er under utvikling.

[[multilingual-learning]]-syntesen beskriver forskning på skrivescreening som viser flerspråklige prediktive biasmønstre som ligner menneskelige vurderingsbiaser. Les de tre funnene sammen, og den operative lærdommen er smal: verken «AI fjerner menneskelig bias» eller «AI legger til språklig bias» er en brukbar regel. Det du trenger, er en kontroll av oppgaven, populasjonen og språket, på det punktet der en poengsum blir en karakter.

## Gi verktøyet en spesifikk støtterolle

Start med instruksjonene: la verktøyet oversette eller gjenfortelle dem i klarspråk, kontroller resultatet mot originalen, og la studenten selv finne ut hva oppgaven krever og spørre om reell tvetydighet.

Fagterminologi fungerer annerledes. Sett verktøyet til å sammenligne betydninger på tvers av språk og generere kontekstuelle eksempler, og la deretter studenten forklare begrepet og identifisere de misvisende ekvivalentene.

Muntlig øving krever en avgrenset innøving med gjentakelser, der studenten produserer svaret og demonstrerer ferdigheten som er målet.

Når du reviderer skriving, be om noen få navngitte problemer med mulige løsninger, og hold beslutningen og begrunnelsen hos studenten.

Lesing av emneinnhold er det videste tilfellet. En tospråklig forklaring forankret i godkjent materiale hjelper, forutsatt at studenten kontrollerer hovedpåstandene og demonstrerer forståelse.

Dette er bruksmåter å prøve ut, ikke validerte intervensjoner. Et verktøy som fungerer godt på ett språk eller i én sjanger, er ikke dermed pålitelig i en annen, og gjennomgangens geografiske konsentrasjon betyr at språkparet ditt kanskje så vidt er representert i evidensen.

## Beskytt studentens mening og stemme

Be om målrettet hjelp før du ber om en omskriving, for en fullstendig omskriving er der studentens tenkning forlater siden. En forespørsel verdt å lære bort: «Identifiser to steder der meningen min er uklar. Forklar problemet og tilby alternativer. Behold eksemplene mine og ikke legg til påstander.» Deretter velger studenten.

En sekvens som holder arbeidet hos studenten:

1. Utvikle forklaringen på det språket eller den språkmiksen som lar studenten resonnere, der oppgaven tillater det.
2. Bruk godkjent støtte til å undersøke terminologi eller uttrykk.
3. Sammenlign den foreslåtte ordlyden med den tiltenkte meningen og emnets kilder.
4. Produser den påkrevde forklaringen og noter de konsekvensrike revisjonene.

I en sosiologioppgave kan en student resonnere seg gjennom en konflikt om roller i familien på to språk, kontrollere en kort liste med emnetermer, og deretter skrive den innleverte analysen på det påkrevde språket, med faglæreren som vurderer den sosiologiske resonneringen og eventuelle separat oppgitte språkkriterier. I en språklæringsoppgave ville den samme sekvensen gi bort vurderingen, og måtte bevare uavhengig produksjon på målspråket.

Unngå å gjøre «høres ut som en morsmålstalende» til standarden, siden det måler studentens forhold til en dialekt snarere enn grep om faget ditt. Spesifiser klarhet, nøyaktighet, sjanger eller målgruppe i stedet. En polert omskriving kan forskyve standpunktet, miste et kulturelt meningsfullt uttrykk eller legge til en påstand studenten aldri mente, og det er studenten som signerer.

## Kontroller verktøyet og vurderingen

Se etter mening, ikke flyt. Ta utvalg av oversettelser og forklaringer for fagtermer, utelatelser, oppdiktede detaljer, kulturelle antakelser og de språkvarietetene studentene dine faktisk bruker. Involver kvalifiserte språkfaglige kolleger eller støttepersonale; ikke gjør studentene til eneste revisor for et verktøy du krever at de bruker.

Skill kriteriene. Når både resonnering og språk er tiltenkte utbytter, vurder dem separat og kontroller om en AI-assistert sensor straffer språket to ganger, eller overser riktig resonnering uttrykt ukonvensjonelt. Dette er den praktiske formen for [[assessment-validity|validitet]] i en flerspråklig studentgruppe, og undergruppespørsmålet i [[differential-effects-across-learner-groups|differensielle effekter]].

Hold en vei til avklaring åpen. En kort samtale, et annotert diagram eller en forklaring av én sentral beslutning kan vise hva en student forstår når prosaen ikke bærer det. Velg formatet som passer konstruktet, ikke det som er lettest å sensurere.

Tilby brukbare alternativer. Studenter trenger en klar vei til menneskelig språkstøtte og tilgjengelige emneressurser. Å kreve et utestet verktøy kan legge til en barriere mens man mener å inkludere, som er samme feil som [[ai-disabled-neurodivergent-learners|støtte til funksjonshemmede og nevrodivergente elever]] må unngå.

## Hva som kommer tilbake på deg

**«Oversettelse betyr at studenten unngår arbeidet.»** Det avhenger av hva arbeidet er. Oversettelse kan muliggjøre engasjement med faglig innhold den ikke har noen betydning for, og den kan erstatte øving når uavhengig produksjon på målspråket er utbyttet. Bestem hva du vurderer, og si det.

**«AI-en fikset språket uten å endre noe annet.»** Kontroller det. En omskriving som forbedrer grammatikken, endrer ofte vektleggingen, modererer en påstand eller dikter opp støtte. Be studenten navngi én meningsfull endring og si om den bevarer poenget de hadde tenkt, noe som også forteller deg om de leste forslaget.

**«Menneskelige sensorer er rettferdigere.»** Menneskelig poenggiving bærer sin egen språkrelaterte bias, og forskningen på flerspråklig skrivescreening finner at automatiserte systemer reproduserer mønstre av den. Rettferdighet her kommer fra eksplisitte kriterier, utvalgsbasert undergruppeevidens og en reell mulighet til å revurdere en vurdering, ikke fra hvem eller hva som holder pennen.

**«Våre studenter er gode nok i engelsk, så dette gjelder ikke.»** Funnet som betyr noe, er ikke en påstand om mangler hos noen gruppe. Det er at begrepsmessig forståelse uttrykt i svakere prosa systematisk får for lav score, i hver metode som ble testet. Det gjelder studenter som skriver i hui og hast, andrespråksskrivere, og alle hvis register avviker fra sensorens.

## Hva du kan gjøre denne uken

**1.** Ta én oppgave og skriv en setning som sier hva språket gjør i den.

**2.** Skriv om instruksjonene slik at de sier hvilken støtte som er tillatt, og hva studentene må produsere selvstendig.

**3.** Test en oversettelse og en terminologiforklaring på de språkene studentene dine faktisk bruker, og les resultatet for oppdiktede detaljer og tapt mening.

**4.** Legg til én kontroll som registrerer studentens egen mening eller beslutning, for eksempel et notat på to setninger om en endring de godtok eller avviste.

**5.** Hvis rubrikken din vurderer skrivekvalitet, skill det kriteriet fra det begrepsmessige og les to innleveringer av hver på nytt med delingen i mente.

## Hvor du kan gå videre

[[multilingual-learning]] er begrepssiden for språk, translanguaging og vurdering i AI-formidlet undervisning, og [[assessment-validity|vurderingsvaliditet]] er standarden for om en poengsum støtter slutningen du trekker. [[differential-effects-across-learner-groups]] dekker hvordan du leter etter undergruppemønstre i stedet for å anta dem.

For skriveopplæringstilfellet der språket er konstruktet, se [[writing-instruction-ai-best-practices|beste praksis for skriveopplæring]]. For om automatisert poenggiving kan stoles på i det hele tatt i din sammenheng, se [[ai-grading-fairness-reliability|AI-vurdering]] og [[checking-whether-educational-ai-works|om en pedagogisk AI faktisk virker]].
