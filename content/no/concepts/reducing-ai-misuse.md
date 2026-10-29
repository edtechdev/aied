---
title: "Å redusere AI-misbruk"
created: "2026-10-27T17:08:16-04:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
source_updated: "2026-10-25T14:15:00-04:00"
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

> **Å redusere AI-misbruk**: de designmessige, [[pedagogy|pedagogiske]] og [[educational-policy-ai|politiske]] virkemidlene som hindrer studenter i å erstatte [[generative-ai|generativ AI]] med sitt eget [[cognitive-offloading|kognitive arbeid]], og som i stedet styrer dem mot [[ethics|etisk]] og produktiv bruk. Effektive tilnærminger er sortert etter virkning snarere enn popularitet, og den sterkeste evidensen favoriserer **strukturelle virkemidler**, det vil si [[guardrails|guardrails]] for verktøy og redesign av vurdering, som endrer omgivelsene slik at misbruk blir vanskeligere uavhengig av studentens motivasjon, fremfor **dannende virkemidler** som hviler på å bygge varig kapasitet og [[framing-ai-use-for-students|oppslutning blant studentene]].

## Spørsmål å vurdere

- Studenter som setter hjemmeleksene ut til AI, kan se at hjemmelekseskårene *stiger* mens skårene på [[summative-assessment|skriftlig eksamen uten hjelpemidler]] *faller*. Før du leser videre: hvorfor kan prestasjon og læring gli så kraftig fra hverandre, og hva antyder dette gapet om hva «suksess» med AI egentlig betyr?
- Siden rangerer intervensjoner etter kausal evidens og rekkevidde, og plasserer *strukturelle* virkemidler (verktøyguardrails, redesign av vurdering) over *dannende* ([[teacher-role|å undervise i]] god praksis), nettopp fordi strukturelle virkemidler virker uavhengig av studentens motivasjon. Er du enig i at det å endre omgivelsene slår det å endre sinn? Hva er risikoen ved å stole på hver av dem?
- En guardrail-beskyttet veileder av typen «hint, ikke svar» fjernet læringsskaden en ubeskyttet veileder forårsaket, selv om begge virket hjelpsomme. Tenk på et læringsverktøy du har sett som gir svar for lett. Hvor går grensen mellom et hint som støtter og et svar som erstatter, og kan du formulere den før du leser?
- Den sterkeste løsningen omfatter redesign av vurdering: eksamener i klasserommet uten hjelpemidler, muntlige forsvar, prosessartefakter, resonnering belønnet fremfor overfladisk flyt. Hvordan ville det føles å ta et emne som ble vurdert slik, og sier den følelsen noe om hvorfor dette virkemiddelet både er effektivt og upopulært?
- Rammeverk for AI-deklarasjon som tvinger studenter til å koble bruken sin til kognitive stadier (planlegging kontra innholdsgenerering), flytter vektleggingen fra overvåking til profesjonell praksis. Tror du slik refleksjon faktisk bygger bedre dømmekraft, eller lærer den studentene bare å beskrive misbruk mer smart?
- Sett deg et mål før du leser: identifiser én konkret endring i ditt eget emne eller arbeidsflyt som ville gjøre AI-misbruk vanskeligere, og én som ville gjøre produktiv bruk lettere. Hvilket av sidens nivåer ville hver av dem høre til?

## Innledning

Begrepet hviler på evidensen for at AI-misbruk aktivt skader varig læring, det såkalte prestasjons- og læringsgapet som er dokumentert i [[ai-misuse-learning-harm]], samtidig som det blåser opp den umiddelbare prestasjonen. Intervensjoner retter seg derfor mot mekanismene bak denne skaden: kopiering av svar, [[cognitive-offloading|kognitiv avlasting]], erosjon av motivasjon og fortrengning av læring. De utelukker ikke hverandre; en robust tilnærming kombinerer et strukturelt gulv med dannende kapasitetsbygging.

### Hvorfor strukturelle virkemidler betyr mest

Intervensjoner kan sorteres etter **kausal evidens × strukturell rekkevidde × skalerbarhet × [[sustainability|bærekraft]]**. På dette grunnlaget rangerer de to *strukturelle* virkemidlene høyest, fordi de virker enten studentene velger riktig atferd eller ikke: de begrenser omgivelsene i stedet for å avhenge av indre motivasjon. De *dannende* virkemidlene er avgjørende, men bare effektive når studentene slutter opp om dem, og behandles derfor som andre nivå til tross for sitt begrepsmessige potensial. [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher og Calderon (2025)]] løfter det strukturelle argumentet ett nivå opp, behandler styring snarere enn studentatferd som den bindende begrensningen, og foreslår et rammeverk for integritetsindikatorer med 130 elementer slik at akademiske styringsorganer kan se om vurderingen er autentisk, om studentene er kjent individuelt av lærerne som vurderer dem, og om integritet inngår i introduksjon og orientering. Reformene deres retter seg mot styringsarkitekturer, personer og [[ai-technologies|teknologier og ressurser]], og de foreslår å låne [[guardrails|red teaming]] fra cybersikkerhet for å avdekke sårbarheter i vurderingen før studentene finner dem, en påminnelse om at det strukturelle gulvet vedlikeholdes av institusjoner som trenger både informasjonen og viljen til å vedlikeholde det.

### Nivå 1: direkte påvist å redusere læringsskade

**Guardrail-beskyttet AI-verktøydesign («hint, ikke svar» som [[scaffolding|støtte]]).** I det sterkeste kausale funnet i kunnskapsbasen viste en felt[[rct|RCT]] at en ubeskyttet ChatGPT-lignende veileder hevet prestasjonen i assistert øving med **+48%**, men senket skårene på eksamen uten hjelpemidler med **-17%**, mens en guardrail-beskyttet veileder (hint i stedet for svar, pluss lærerskrevd problem-informasjon) fjernet skaden helt. Dette hindrer mekanisk den svar-kopierende «krykke»-atferden som ligger bak skaden. Aktiviteter omfatter veiledning med hint i stedet for svar, å seede prompter med riktige løsninger og vanlige [[misconceptions|misoppfatninger]], og å kreve et studentforsøk før AI-output avsløres.

**Å holde svaret tilbake beskytter i økten uten å bygge ferdigheten.** [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al. (2026)]] holdt den samlede posisjonen tilbake i en [[agentic-ai|multiagent]]-debatt og kuttet bytte til en feilaktig AI-posisjon fra 42-60,5% til 5,7-8,2%, men fant ingen læringseffekt innenfor økten (β = 0,03, p = 0,18): guardrailen holdt så lenge den var på plass og lot uassistert dømmekraft stå urørt.

**Redesign av vurdering (AI-resistente og uassisterte målinger).** Fordi skaden ved misbruk er vurderingsavhengig, den kommer til syne på overvåkede målinger, målinger uten hjelpemidler og lukket bok mens den blåser opp vanlig karaktersatt emnearbeid, endrer det hva som regnes som måloppnåelse både avskrekker misbruk og avdekker det. Aktiviteter omfatter eksamener i klasserommet uten hjelpemidler og muntlige forsvar, krav om prosessartefakter (utkast, refleksjoner, annotert resonnering), belønning av resonnering fremfor overfladisk flyt, og utpeking av AI-frie soner. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] gir kravet om prosessartefakter et konkret instrument: pålagte versjonshistorikker og reproduserbare analysedokumenter, slik at en mistenkelig leveranse kan inspiseres som en tidslinje for hvordan arbeidet utviklet seg, og mengden fabrikkert materiale en student måtte generere, vokser langt utover det utsettingen sparer dem for. Feltbevis i stor skala understreker dette: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei, & Wu (2026)]] fant at utsetting av hjemmelekser hevet hjemmelekseskårene med 18% mens den *senket* skårene på eksamen uten hjelpemidler med 20%, nøyaktig det signalet uassisterte, overvåkede målinger er designet for å avdekke, og studien anbefaler å vekte skriftlig vurdering på stedet tyngre. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall og Parapadakis (2025)]] gir den samme logikken sin mest eksplisitte formulering innen situasjonsbasert kriminalitetsforebygging, og argumenterer for at svikten tilhører vurderinger en modell kan besvare overbevisende snarere enn studentene, og rapporterer en sak der 25 forebyggingsteknikker anvendt på en australsk capstone i næringslivsfag (sporede studentinteraksjoner, rødflagg-deteksjon av for dyktig arbeid, tilfeldig omrokkering av team, ukentlige overvåkede tester i klassen, nedtakingsvarsler for emnemateriell studentene hadde publisert) etter sigende kuttet uredelighetssakene fra 183 til 27 innen ett år. Deres forskrifter er motivasjonelle snarere enn etterforskningsmessige: øk den opplevde hensikten med vurderingen, bygg [[self-efficacy]], og øk den opplevde sosiale kostnaden ved juks, med forfatternes advarsel om at det å adressere bare én eller to av de tre vil mislykkes, støttet av fem fagspesifikke redesign som gjør tidsbegrensede problemløsningseksamener om til åpen-bok-[[problem-solving|problemløsning]] med en skriftlig refleksjon over studentens egen prosess, summerende essay om til [[collaborative-learning|samarbeidsbaserte]] arkivforskningsprosjekter, og [[eportfolio|porteføljer]] om til iterative, fagfellevurderte designprosesser.
"""

De strukturelle virkemidlene har en håndhevingsarm, og evidensgrunnlaget dens er svakere enn rekkevidden antyder. [[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] kodet 1 162 saker om misbruk av generativ AI og fant at evidensen som oftest ble påberopt på anklagetidspunktet ([[ai-detection|detektor]]output, likhetsrapporter, AI-typiske innholdsmønstre) hadde den svakeste beviskraften, mens opptak, observert eksamensatferd og uavhengig verifiserte fabrikkerte referanser var de sterkeste; fordi institusjonelle prosedyrer ikke setter noen minsteterskel for bevis, hadde evidenskvalitet ingen pålitelig sammenheng med sakens utfall, og studenter hvis saker hvilte på tynt bevis, hadde i hovedsak bare klageadgang. [[wright-transcription-not-generation-2026|Wright (2026)]] viser en andre kostnad ved samme upresishet: forbud formulert rundt «generativ AI» snarere enn rundt funksjon fanger verktøy som bare konverterer formatet på arbeid studenten allerede har skrevet, slik at bruk som kun er transkripsjon, kan sanksjoneres som uredelighet, en overinkludering som rammer hardest mot funksjonshemmede og [[equity-in-ai-education|likestillingsutsatte]] [[learners|lærende]] og ikke gjør noe for [[assessment-validity|validiteten]]. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana, Mtshali og Mchunu (2026)]] tilføyer at [[remote-proctoring|fjernovervåking]], den mest utbredte integritetskontrollen, bygger sin avskrekkingssak på hvordan studentene sier de føler seg snarere enn på redusert uredelighet, og påfører angst, konsentrasjonssvikt og infrastrukturrelatert utestengelse som ikke er vist å bli besvart av mindre misbruk. [[li-genai-assessment-language-equity-2026|Li (2026)]] tilfører regeldesign-dimensjonen: fordi samme grensesnitt utfører tillatt språkbearbeiding og forbudt substansiell utkastskriving, pålegger udifferensierte GenAI-regler kullskjeve samsvarsbyrder på studenter som bruker engelsk som andrespråk, slik at den mer forsvarlige forebyggingen er en formålsbasert grense mellom støtte og substitusjon forankret i vurderingens konstrukt, med kalibrert deklarasjon, proporsjonalitet trinnvis fordelt over terskel-, bevis- og sanksjonsbeslutninger, og designvirkemidler (trinnvise leveranser, kort konstruktjustert muntlig verifisering, kritikkbaserte spørsmål) som gjør arbeidet deteksjonen ikke kan. Forebygging må også omfatte sensuren selv: [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026)]] red-team-evaluering fant at to av fem strategier for indirekte prompt-injeksjon innebygd i en leveransefil hevet et strykessay til bestått uten å bli oppdaget, med rapporterte suksessrater på 100% og 94%, slik at der AI-verktøy sensurerer studentarbeid, hører [[human-in-the-loop-ai|menneskelig gjennomgang]], klarere atskillelse av instruksjoner fra levert innhold og robusthetstesting hjemme i det strukturelle gulvet snarere enn i et valgfritt nivå.

### Nivå 2: sterk rammeverksstøtte, høyt potensial

**Støttede brukssekvenser: tenk først, AI andre, reflekter tredje.** Åtte designprinsipper for å integrere LLM-er uten å fortrenge [[critical-thinking|kritisk tenkning]]: bevar kognitiv friksjon, plasser AI som en foreløpig tenkepartner snarere enn en autoritet, bygg inn evalueringssjekkpunkter, krev [[metacognition|metakognitiv]] journalføring og promptlogger, og balanser AI-formidlede faser med AI-frie faser. Korrelasjonsbevis (selvstendig arbeid før AI gir sterkere output) er sterkt; dette er den pedagogisk komplette versjonen av nivå 1.

**[[ai-literacy|AI-kompetanse]] og [[prompt-engineering|promptkompetanse]] med bevisst øving og umiddelbar [[feedback|tilbakemelding]].** En [[k-12]]-modul som brukte scenariobasert promptøving med en [[llm]]-autovurderer, forbedret de faktiske promptferdighetene og økte selvtilliten i å bruke AI til læring med **+10,4%**, og 87% rapporterte at de hadde lært å bruke AI ansvarlig. Påviste ferdighetsgevinster; det åpne spørsmålet er om disse omsettes til [[learning-gains|læringsutbytte]] lenger fremme. Den adresserer også [[equity-in-ai-education|likestillingsgapet]] i tidligere AI-tilgang.

**Strukturerte rammeverk for deklarasjon av AI-bruk.** Å erstatte generiske avkrysningsbokser for «jeg brukte AI» med [[discipline-specific-aied|domenespesifikke]] deklarasjoner som kobler bruk til kognitive stadier (strukturell planlegging kontra innholdsgenerering), tvinger frem refleksjon over læringsprosessen og klargjør grensen mellom akseptabel assistanse og uredelighet, og flytter vektleggingen fra overvåking til profesjonell praksis.

Dannende virkemidler ser igjen annerledes ut når integritet behandles som en praksis som skal læres bort, snarere enn en regel som skal håndheves. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] argumenterer for at deteksjons- og verifiseringsbaserte integritetsregimer er feilinnrettet mot GenAI-augmentert arbeid, og omformulerer integritet som pedagogisk praksis utøvd gjennom [[evaluative-judgment|evaluerende dømmekraft]], lærendes evne til å veie alternativer, begrunne akademiske valg og ta ansvar under usikkerhet, gjort synlig gjennom artefakter som annoterte beslutningsspor, dokumentert verifisering, muntlig forsvar og versjonshistorikker fra utkast til utkast, med deteksjon degradert til ett supplerende lag snarere enn den primære infrastrukturen. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa og Mezgebu (2026)]] finner den samme åpningen fra studentenes side: på tvers av 27 intervjuer ved et etiopisk [[higher-ed|universitet]] var bruken nesten universell, de fleste deltakerne mente GenAI hevet resultatene deres, og den skarpeste klagen gikk den andre veien: AI-brukere fikk bedre karakterer enn flittige selvstendige arbeidere, noe deltakerne beskrev som demotiverende. Forfatterne konkluderer med at studentenes oppfatninger forutsier etisk bruk sterkere enn institusjonelle regler gjør, slik at bevissthet, klar policy og redesign av vurdering må komme samtidig, noe som er sidens dannende nivå formulert som en betingelse: kapasitetsbygging endrer atferd bare gjennom [[framing-ai-use-for-students|oppslutning blant studentene]] ledsaget av et strukturelt gulv. [[ji-student-voices-academic-integrity-scoping-2026|Jis (2026)]] [[meta-analysis-systematic-review|scoping-gjennomgang]] av 38 studier av studentstemmer leverer feltnivåversjonen av samme konklusjon: de gjennomgåtte studiene samler seg om et skifte fra retrospektiv deteksjon til proaktiv etisk resonnering, om å undervise i AI-etikk og AI-plagiering i [[curriculum-design|læreplanen]] snarere enn i enkelstående [[ai-literacy|kompetanseøkter]], og om detaljerte retningslinjer samskapt av ledelse, faglærere og studenter, fordi uklar veiledning leses som stille tillatelse snarere enn som forsiktighet. Jis egen lesning er at eierskap og moralsk resonnering motiverer studentene mer enn frykt for straff, og at studentene verken er passive mottakere av GenAI eller skyldige uten moralsk forankring, men moralske aktører som arbeider i en gråsone: dette nivåets premiss, formulert som et funn.

### Nivå 3: lovende, lavere direkte kausal evidens

**Metakognitive og selvvurderingsintervensjoner.** Refleksive logger, promptlogger og kalibreringstrening gjenoppbygger den «fraværende kognitive basislinjen» hos AI-innfødte studenter som ikke kan lokalisere sin egen kognitive grense fordi AI-generert flyt skjuler den. Begrepsmessig sentralt, men ennå ikke kausalt testet.

**Redesign av motivasjon.** Fordi AI-tilgjengelighet tærer på [[motivation|autonom motivasjon]] («hvorfor anstrenge seg?»), retter omstrukturering av oppgaver rundt mål AI ikke kan oppfylle og rundt [[agency|lærendes agens]] seg direkte mot den svekkede utholdenheten som forsterker den direkte skaden.

**Kritisk AI-kompetanse.** En makt-kunnskap-innramming som lærer lærende å avhøre, utfordre og delta i [[governance|AI-styring]] snarere enn å konsumere den. Langsiktig, likestillingsorientert og strukturell i sine ambisjoner, selv om læringseffektene i stor grad er utestet.

**Å gjenkjenne [[ai-sycophancy|sykofanti]] for å hindre ukritisk aksept.** Fordi [[ai-sycophancy|sykofantisk]] AI bekrefter snarere enn utfordrer brukeren, er den en direkte misbruksvektor: studenter som får bekreftende tilslutning for feilaktig tenkning, oppmuntres til å erstatte AI med sitt eget [[cognitive-offloading|kognitive arbeid]]. [[contextual-sycophancy-ai-literacy|Kontekstuell sykofanti]] viser at AI-kompetanse og prompttrening reduserer, men ikke eliminerer, feilsløyfen, slik at forebygging av misbruk må kombinere dannende gjenkjenningstrening med systemnivådesign for korrigerende friksjon (se guardrails på nivå 1).

- **[[desirable-difficulties|Produktiv friksjon]] og pedagogisk funksjon.** Sydney-hurtigoversikten argumenterer for at GenAI undergraver læring når den lar studenter omgå den kognitive og metakognitive friksjonen som trengs for å lære, og at målrettet designede verktøy innfører *produktiv friksjon* (holder svar tilbake, oppfordrer til forklaring). Den skiller fire pedagogiske funksjoner: å lære *av*, *med*, *om* eller *ved å forme* GenAI, hver med ulike krav til agens og vurdering.([[young-people-learning-generative-ai-rapid-review-2026]])
## Vanlige misoppfatninger

**«Å undervise studentene om risikoene er det viktigste virkemiddelet mot misbruk.»** Det er virkemiddelet som avhenger av at studenten samarbeider, og derfor rangerer det under de strukturelle her. Guardrails og redesign av vurdering virker enten studenten velger riktig atferd eller ikke; dannende tilnærminger virker bare med oppslutning. Skillet er ikke moralsk, men mekanisk: et endret miljø begrenser atferden direkte, mens en endret oppfatning må overleve natten før fristen.

**«Hvis en guardrail holder gjennom økten, er læringen sikret.»** Å holde og å lære bort er atskilte utfall, og korpuset inneholder et rent dobbeltresultat. Å holde den samlede posisjonen tilbake i en [[agentic-ai|multiagent]]-debatt kuttet studentenes bytte til en feilaktig AI-posisjon fra 42-60,5% ned til 5,7-8,2%, en stor beskyttende effekt, men ga **ingen læringseffekt innenfor økten** (β = 0,03, p = 0,18). Skinner gjorde jobben sin som skinne og ble ikke til undervisning. Å designe for forebygging av misbruk er ikke det samme som å designe for læring.

**«Å oppdage misbruk og straffe det er en forebyggingsstrategi.»** Forebygging må også omfatte sensuren selv. [[humble-prompt-injection-ai-grading-red-team-2026|Humbles (2026)]] red-team-evaluering fant at to av fem strategier for indirekte prompt-injeksjon innebygd i en leveransefil hevet karakteren på et strykessay. En pipeline som oppdager studentmisbruk mens den stoler på uundersøkt levert innhold, er forsvart bare på én side.

**«Misbruk er et spørsmål om studentmotivasjon.»** [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher og Calderon (2025)]] løfter den bindende begrensningen ett nivå opp, behandler styring snarere enn studentatferd som det som skal endres, og foreslår et rammeverk for integritetsindikatorer med 130 elementer. Og læringsskaden er målbar i skala: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei og Wu (2026)]] fant at utsetting av hjemmelekser hevet hjemmelekseskårene med 18% mens den *senket* skårene på eksamen uten hjelpemidler med 20%, en designsvikt som viser seg nettopp i gapet denne siden handler om.

## Veiledning for gjennomføring etter rolle

**For undervisere og emnegrupper**

- Start med vurderingen, ikke med policyteksten. Spør for hver karaktsatte oppgave om den uassisterte versjonen ville vise det du har til hensikt å attestere, og fiks oppgaven først: det er virkemiddelet som ikke krever studentens samtykke.
- Ta i bruk verktøy med hint i stedet for svar der en AI-veileder er tilgjengelig, siden felt-RCT-en om beskyttet kontra ubeskyttet veiledning er det sterkeste kausale beviset på området.
- Kontroller at din egen sensurpipeline tåler injiserte instruksjoner i innleverte filer før du behandler studentmisbruk som den eneste trusselen.
- Behandle AI-tillatt og uassistert prestasjon som to forskjellige målinger; fordelingen 18%/20% ovenfor er usynlig med mindre du samler inn begge.

**For utviklere**

- Bygg begrensningen inn i grensesnittet snarere enn i en advarsel. En veileder som kan produsere det ferdige svaret, vil under tids press produsere det ferdige svaret.
- Ikke slutte læring fra etterlevelse av guardrailen. Debatresultatet viser at atferd holdt mens læringsmålene sto flatt, så instrumenter utfallene atskilt fra interaksjonene.
- Vis misbrukssignaler til undervisere som diagnostikk snarere enn som dommer, siden styringsinnrammingen i evidensen ligger over individuell studentatferd.

**For administratorer og beslutningstakere**

- Plasser den bindende begrensningen der evidensen plasserer den. Indikatorer og styringsstrukturer adresserer omgivelsene; formaninger til studenter adresserer den personen som er minst i stand til å endre institusjonelt design.

## Beslektede begreper

- [[ai-misuse-learning-harm]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[assessment]]
- [[ai-literacy]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[motivation]]
- [[prompt-engineering]]
- [[ai-sycophancy]]
- [[trust-calibration]]
- [[framing-ai-use-for-students]]
- [[cognitive-surrender]]

## Beslektede artikler
- [[ivory-psychology-assessment-integrity-2026]] — Versjonskontrollerte beviskjeder og reproduserbare analysedokumenter som avskrekking mot misbruk (Ivory et al. 2026)
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Å holde en anbefaling tilbake hindret i stor grad overavhengighet uten å bygge dømmekraften den beskytter
- [[generative-ai-guardrails-harm-learning]] — GenAI uten guardrails kan skade læringen
- [[genai-performance-vs-learning]] — Å skille prestasjonsgevinster fra læring
- [[ai-assessment-scale-reform]] — AI Assessment Scale og reform av vurdering
- [[critical-thinking-genai-scaffolding]] — Å støtte kritisk tenkning med generativ AI
- [[aaai2026-prompting-literacy-k12]] — Å lære å bruke AI for å lære (AI-kompetansemodul for K-12)
- [[genai-declaration-frameworks-higher-education]] — Å strukturere transparens: rammeverk for GenAI-deklarasjon
- [[absent-cognitive-baseline-2026]] — Den fraværende kognitive basislinjen
- [[ai-literacy-power-knowledge]] — AI-kompetanse: en øvelse i makt-kunnskap
- [[contextual-sycophancy-ai-literacy]] — Den skjulte kostnaden ved kontekstuell sykofanti: en AI-kompetanseintervensjon
- [[sycophantic-ai-social-interaction-2026]] — Sykofantisk AI gjør menneskelig samhandling mer anstrengende og mindre tilfredsstillende over tid
- [[ssaho-ai-academic-integrity-review-2025]] — Kulturoppbygging og redesign av vurdering fremfor deteksjonsovervåking
- [[young-people-learning-generative-ai-rapid-review-2026]] — Kognitiv overgivelse, produktiv friksjon og metakognitiv ulikhet
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Å revurdere muntlige eksamener som autentisk, AI-resistent vurdering
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Læringsstraffen ved generativ AI: utsetting av hjemmelekser skader læringen
- [[ai-overreliance-complex-adaptive-system-2026]] — AI-overavhengighet modellert som et komplekst adaptivt system
- [[burneo-can-edtech-close-learning-gaps-2026]] — Guardrails fjernet skaden uten å forbedre eksamensskårene
- [[munoz-misconduct-allegation-evidence-2026]] — Hva sakene om uredelighetsanklager faktisk inneholder av bevis
- [[wright-transcription-not-generation-2026]] — For omfattende AI-regler og studentene de rammer
- [[sharma-judgment-visible-genai-assessment-2026]] — Integritet som evaluerende dømmekraft snarere enn etterlevelse
- [[mulisa-students-genai-integrity-perspectives-2026]] — Studenter om hvorvidt GenAI er et jukseverktøy eller en læringspartner
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Hva fjernovervåking gjør med studentene, og med likestillingen
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — Situasjonsbasert kriminalitetsforebygging mot AI-fasilitert juks: 183 til 27 saker, og fem fagspesifikke redesign (Leaton Gray, Edsall & Parapadakis 2025)
- [[ji-student-voices-academic-integrity-scoping-2026]] — Hva 38 studier av studentstemmer anbefaler: samskapt klarhet og dannende resonnering fremfor deteksjon (Ji 2026)
- [[li-genai-assessment-language-equity-2026]] — Hvor språkstøtte slutter og substitusjon begynner for EAL-skrivere (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt-injeksjon som misbruksvektor mot AI-sensur (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Styring som den bindende begrensningen for integritet: et indikatorrammeverk med 130 elementer (Coates, Croucher & Calderon 2025)