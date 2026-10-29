---
title: "Hvordan skriver jeg en AI-policy for emnet og kommuniserer den til elevene?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [should-we-use-ai-detectors, redesign-assessment-ai-era, institutional-ai-policy, asynchronous-online-courses-ai]
weight: 70
type: faq
foundations: [academic-integrity, framing-ai-use-for-students, reducing-ai-misuse]
assessment: [assessment]
ethics: [ai-use-disclosure]
research_method: [literature review, survey]
audience: [instructors, curriculum designers]
level: [higher ed, secondary]
methods: [qualitative-research]
institutions: [educational-policy-ai]
updated: "2026-10-29T15:11:34-04:00"
translation_of: faqs/course-ai-policy
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Tre uker før semesterstart har emneplanmalen en linje for «AI-policy», og der står det: se universitetets regler for akademisk integritet. Eller kollegaens emne kom tilbake med en serie innleveringer som ingen tror ble skrevet i rommet, og programmøtet på torsdag ender med en anmodning om at hvert emne skriftlig oppgir standpunktet sitt. Eller policyen er allerede skrevet, og sensurperioden viser deg hvilke av setningene du faktisk kan anvende.

Bunnlinjen: navngi oppgavene du vurderer, si hva AI kan gjøre ved hver av dem, legg erklæringen på ett sted, og håndhev med belegg du kan se. Fem konkrete tillatelser holder bedre enn en side med forbud. En policy som forklarer seg selv, gjør arbeid med vurderingsdesign og kommunikasjon samtidig, og derfor koster den en ettermiddag og sparer et semester med diskusjoner.

Alt nedenfor er dokumentet på emnenivå for én modul, ett emne eller én del av en studieretning. Forutsetningen er at du har bestemt hva du vurderer; arbeidet her er å si det og få det til å holde.

## Kortversjonen

**1.** Lag oversikt over de vurderte oppgavene, og spør ved hver av dem hva du konkret vurderer. Grensen følger av svaret.

**2.** Skriv regelen på trinnnivå: idémyldring er tillatt, å formulere læringsmål er det ikke. Bildekuratering er tillatt, budskapsdesign på lysbildenivå er det ikke.

**3.** Sett sammendraget i emneplanen, den operative ordlyden i oppgavearket, og si regelen høyt én gang i det øyeblikket den først gjelder.

**4.** Navngi ett standardsted og én standardform for erklæringen, og hold kostnaden ved å erklære lavere enn kostnaden ved å skjule.

**5.** Håndhev med arbeid du kan observere: en promptlogg, en øvelse i timen, en muntlig redegjørelse. Detektorscore holder seg utenfor håndhevingsløypa.

## Start med oppgavene du vurderer

Den klareste bearbeidede metoden er [[mccorkle-aligned-genai-course-policy-2025|McCorkle (2025)]], som erstattet et generelt forbud som studentene ikke trodde gjaldt dem. Les den svikten riktig: det var manglende samsvar og ikke tross, og studentene oppfattet ikke seg selv som uærlige. En regel de allerede har bestemt at ikke handler om dem, kan man ikke argumentere mot, bare overse.

Metoden til McCorkle går i fire trinn. Lag oversikt over hver oppgave i semesterprosjektet, spør ved hver av dem «hva er det konkret jeg vurderer?», par hver oppgave med en plausibel profesjonell bruk av [[generative-ai|generativ AI]], og avgjør så oppgave for oppgave. Hver beslutning veier behovet for å vurdere en kapasitet mot verdien av å bygge en kompetanse studenten vil bruke i arbeidslivet.

Resultatet er med vilje ujevnt. Idémyldring er tillatt; å formulere konkrete og målbare læringsmål er ikke. Bildekuratering er tillatt; budskapsdesign på lysbildenivå er ikke. Manus og fortellerstemme er tillatt, med krav om å vurdere AI-resultatet. Skrevet ut ser listen vilkårlig ut helt til du leser begrunnelsen ved siden av hver linje, og derfor følger begrunnelsene med reglene.

## Avgjør hvor streng du skal være, vel vitende om hva alle andre gjør

To datapunkter forteller deg hvordan en normal policy ser ut i år, og begge er verdt å ta med til møtet der noen foreslår et forbud.

En innholdsanalyse av **116 institusjonelle GenAI-policyer** fra 131 amerikanske R1-universiteter og **98 emneplaner i informatikk** fra 54 av dem fant at institusjonene i bred forstand er for bruk: 63 % oppmuntrer til GenAI-bruk, 41 % gir detaljert veiledning for klasserommet, 27 % fraråder det. Halvparten av emneplanene (50 %) forbyr det helt, 41 % tillater delvis bruk for angitte aktiviteter, og 7 % formidler oppmuntring. [[genai-policies-higher-ed-computing|Ganguly et al. (2026)]] kaller dette gapet mellom ovenfra og ned og nedenfra og opp. 92 % av emneplanene gir uttrykkelige retningslinjer, likevel driver lokale regler bort fra institusjonell veiledning, og bare 47 institusjoner hadde begge nivåene synlige. Kildehenvisning er det ene kravet begge nivåene er enige om, i 83 % av emneplanene.

[[chirikov-regulate-ai-syllabi-2026|Chirikov (2026)]] fulgte over 31 000 emneplaner ved et stort offentlig forskningsuniversitet i Texas fra 2021 til 2025. Reguleringen steg fra nær null før ChatGPT til 55 % av emnene innen høsten 2025, mens fullt restriktive policyer falt omtrent 5 prosentpoeng i året. Innen høsten 2025 begrenset underviserne oftest utforming og revidering (79 %) og resonnering og [[problem-solving|problemløsning]] (65 %). De tillot oftest redigering og korrektur (83 %), støtte til studier og syntese (80 %) og koding (75 %). Idéutvikling var den mest omstridte bruken, med 46 % tillatt og 54 % begrenset.

Ordlyden flyttet seg med tallene. Henvisninger til akademisk integritet falt fra 63 % til 49 %, henvisninger til AI-ens effekt på læring steg fra 1 % til 29 %, og krav om kildeangivelse steg fra 16 % til 43 %. Feltet skifter fra «ikke juks» mot «her er hvorfor denne grensen beskytter læringen din», og det er den andre versjonen en student kan handle etter.

To konsekvenser for dokumentet ditt. Å være strengere enn institusjonen din er normalt, og det er en forpliktelse du påtar deg alene, fordi håndhevingskostnaden lander på deg. Et krav om kildehenvisning er nesten gratis, siden fire femtedeler av feltet allerede ber om det, og ingen student behøver å gjette hva du mener.

## Legg hver regel der studenten møter den

Tre dokumenter, tre oppgaver.

**Emneplanen** bærer det korte sammendraget: oppgavene, tillatt bruk ved hver av dem, hvordan erklæringen fungerer, og konsekvensen av en krysset grense. Én skjerm, ingen filosofi.

**Oppgavearket** bærer uthevingen. Ett sammendrag er for grovt for et komplekst prosjekt, og det er her ordlyden til McCorkle gjorde jobben sin, i en begrunnelse rettet til studentene i du-form som navnga vurderingen bak hver begrensning.

**Rommet** bærer den første muntlige uttalelsen. Si regelen én gang, i det øyeblikket den først gjelder, knyttet til arbeidet foran dem. En regel en student møter alene, er en regel hen tolker alene.

Mekanikken for erklæringen trenger sitt eget avsnitt, og det bør være det mest konkrete på siden. Studenter som var med på å utforme en emnepolicy gjennom veiledet utforskning, prioriterte opplæring for studenter og undervisere, **standardiserte prosedyrer for erklæring**, sterkere institusjonell støtte og større involvering i beslutninger om AI ([[guided-inquiry-genai-course-policy-2026|Hingle og Johri (2026)]]). Si hvordan, hvor og i hvilken form en student erklærer bruk, og si det én gang.

[[teaching-intro-ai-course-redesign-bill-of-rights-2026|Pisan (2026)]] fant en sterkere versjon av samme grep: gjør promptloggen til det vurderte artefaktet. Når en modell står for produksjonen, er prompten og samhandlingsloggen det som er verdt å versjonere, så erklæringen slutter å være papirarbeid og blir belegg for det studenten bygger.

## Skriv bare regler du kan anvende i én sensurrunde

En regel som krever overvåking oppgave for oppgave, eller en vurdering av når en prøve «begynner», vil bli anvendt inkonsistent i en klasse og mellom to sensorer. Inkonsistens er et likestillingsproblem før det er et administrativt problem. Et regime bygget på detektorer legger til en overvåkingskostnad som rammer ujevnt, sammen med spørsmål om [[remote-proctoring|overvåket gjennomføring]] og datalagring som du kanskje ikke kan svare på på emnenivå.

[[nash-preservice-teachers-classroom-ai-policies-2026|Nash og Burriss (2026)]] analyserte 27 AI-policyer for klasserommet skrevet av lærerstudenter i engelsk. **26 av 27 tillot noe AI-bruk**, nesten alltid på vilkår, til tider og på steder som læreren hadde angitt; én forbød det helt. Idéutvikling var den mest vidt tillatte bruken (22 av 27) og den mest tvetydige. 22 forbød eller lot det være uklart om AI kunne sette sammen setninger, avsnitt eller oppgaver. 16 tillot grammatikkontroll og korrektur, mens 16 forbød å produsere store AI-genererte tekster. Og **22 av 27 tok ikke opp lesing i det hele tatt**.

Den tilbakevendende svikten var operasjonalisering. Én policy tillot AI «for å få tankene dine i gang» og erklærte at «her bør grensen gå», uten å si hvor grensen gikk. Den tvetydigheten gjør studentene ute av stand til å etterleve regelen og deg ute av stand til å anvende en konsistent standard. Det er en mangel, ikke et kompromiss.

Funnene til Chirikov om betydelig variasjon mellom fag og oppgaver taler for rammeverk som gir undervisere autonomi innenfor eget domene snarere enn ett påbud for alle, og det er også den ærlige beskrivelsen av hva en emnepolicy er: en lokal vurdering inne i en videre regel.

Det finnes en [[equity-in-ai-education|likestillingsdimensjon]] her. Ugjennomsiktige policyer forutsetter felles bakgrunnskunnskap om forfatterskap, kildeangivelse og normene i akademisk arbeid, så de rammer hardest dem som kommer uten den. Saken til McCorkle er at åpenhet river ned en del av denne skjulte læreplanen og senker sjansen for at en svikt mot policyen blir en disiplinærsak.

Den billigste versjonen av alt dette er få og konkrete: oppgavene du vurderer, bruken som er tillatt ved hver av dem, mekanikken for erklæringen, og konsekvensen av en krysset grense, hver med begrunnelsen sin vedlagt.

## Si det høyt, og følg med på hva du selv modellerer

Regler om erklæring fungerer ikke som etterlevelsesmekanismer alene, og å behandle dem som om de gjør det, er den vanligste designfeilen. I en mixed methods-studie av 409 bachelorstudenter fant [[qu-wang-disclose-or-not-genai-2026|Qu og Wang (2026)]] at det å la være å erklære var **strategisk tilpasning til oppfattede normer blant medelever og lav fortolkende [[trust|tillit]] til undervisere**, snarere enn moralsk uaktsomhet. Oppfattet erklæring blant medelever og trygghet på underviseren var de sterkeste prediktorene for studentenes egen erklæring; moralsk distansering hadde svakere effekter.

Det etterlater deg to håndtak du faktisk kontrollerer: hva studentene tror medelevene gjør, og om de stoler på at du leser en erklæring rettferdig. Begge reagerer på hvordan du snakker om regelen i den første uken. Ingen av dem reagerer på hvor streng ordlyden er.

[[student-rationalization-ai-writing|Kim et al. (2026)]] fant **fem distinkte steder** der den reelle policyen i et emne lever: lærerens intensjon, den formelle policyen, studentens tolkning, studentens egen policy og studentens praksis. Gapene mellom dem er systemiske. De katalogiserte også **23 rasjonaliseringer i seks klasser** som studentene brukte for å rettferdiggjøre AI-bruk i akademisk skriving, fra «ingen menneskelig offer» til «underviseren bryr seg ikke». Rasjonaliseringene var ad hoc og etterpåklokskap: studentene forklarte atferd som allerede hadde skjedd, snarere enn å resonnere på forhånd, og derfor lukker verken klarere ordlyd eller hardere deteksjon gapet alene.

Én deltaker som ønsket å følge en streng nei-til-AI-regel, fortsatte å bruke AI og sa at forbudet «skaper konflikt for meg, fordi jeg bryter reglene». Forbudet skjerpet den moralske konflikten uten å hindre bruken. En regel som produserer skyld uten etterlevelse, tærer på forholdet du trenger for at studenter skal erklære.

Følg med på hva du selv modellerer, også. De fleste oppgavene i emnet til Pisan oppga prompten som var brukt til å generere dem, og én student leste den åpenheten som **tillatelse**: «avhengigheten til AI hos læreren for sensur og for å lage oppgaver gjorde det også vanskelig å ikke bruke AI på oppgaver på samme måte». Å modellere en norm er en del av policyen slik studentene opplever den, uansett hva emneplanen sier.

En erklæring du kan tilpasse:

> **AI-bruk i dette emnet.** Jeg vil at du skal gå ut av dette emnet med å kunne gjøre X selv, så jeg vurderer X direkte. Du kan bruke AI til [tillatt bruk] på [oppgaveliste]; du kan ikke bruke det til [begrenset bruk], fordi det er det jeg vurderer. Hvis du bruker AI noe sted i arbeidet ditt, si meg i [ett navngitt sted, for eksempel en erklæringslinje på hver innlevering] hva du brukte det til, og lim inn promptene. Å erklære det vil aldri senke karakteren din. Det er å la være å erklære en bruk som får en konsekvens. Er du usikker på om en bruk er tillatt, spør meg før du leverer, ikke etter.

Den siste setningen flytter beslutningspunktet til før arbeidet, og det er det eneste punktet der spørsmålet er billig å svare på.

## Planlegg de fire samtalene før de skjer

**Studenten som brukte AI og ikke sa det.** Håndter dette som et prosesspørsmål, ikke et karakterspørsmål. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed og Temimi (2026)]] modellerer vurdering som et problem med ufullstendig informasjon: studenten vet hvordan arbeidet ble produsert, og institusjonen ser artefaktet pluss delvise spor. Deres responsregionmodell sammenligner tre responser, ingen AI-bruk, [[ai-use-disclosure|erklært]] bruk og skjult bruk, og spør hvilken hver mekanisme gjør mest attraktiv. Forbud setter den formelle grensen og lar skjult bruk være attraktivt når studentene oppfatter deteksjonen som svak. Overvåking hever den forventede kostnaden ved skjult bruk uten å heve erklæringen, så studentene blir forsiktige uten å bli gjennomsiktige. Tillatelse med erklæring gjør ærlig rapportering mulig bare så lenge kostnaden ved ærlighet holder seg lav.

I rommet betyr det å spørre hva arbeidet skulle vurdere, be studenten redegjøre for prosessen sin, og lese en sen erklæring som informasjon snarere enn som en tilståelse.

**Studenten som oppgir AI som kilde til alt.** Dette er vanligvis et ferdighetsgap i etterlevelseskostyme. Krav om kildeangivelse steg fra 16 % til 43 % av emneplanene mens henvisninger til akademisk integritet falt fra 63 % til 49 %, så feltet ber om kildehenvisning snarere enn tilståelse. Spesifiser formatet én gang, på oppgavearket og ikke i en fotnote i emneplanen. Si hvordan tilstrekkelig kildeangivelse ser ut i faget ditt, og gi ett bearbeidet eksempel. Der det egentlige problemet er at studenten ennå ikke kan gjøre det underliggende arbeidet uten modellen, er svaret oppgavedesignet.

**Gruppearbeid.** Fem studenter kan ha fem tolkninger av én setning, og én innlevering blir vurdert. For hver gruppeinnlevering, avgjør og kunngjør om AI-bruk er tillatt, hvem som erklærer det, og hva som skjer når ett medlem går utenfor regelen. Gjør det før prosjektet starter, mens det er et planleggingsspørsmål. Klarer du ikke å angi hvilket individuelt bidrag et medlem står ansvarlig for, vurder oppgaven som ren gruppeoppgave i stedet for å dømme om forfatterskap i etterkant.

**Erklæringer du ikke kan verifisere.** Noen erklæringer vil være ufullstendige og noen utelatelser ugjendrivelige. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] argumenterer for at AI-deteksjon ikke bør brukes i utdanning i det hele tatt, på tre grunner som har betydning for ordlyden. Detektorresultat er et sannsynlighetsestimat som ikke kan verifiseres uavhengig, fordi den virkelige tekstens opprinnelse er ukjent, så valideringen kjører på sirkelresonnement. Detektorscore oppfyller ikke beviskravet om sannsynlighetsovervekt som en [[academic-integrity|integritets]]sak krever. Og dikotomien menneske mot AI er meningsløs for arbeid laget med snarere enn av AI. Konklusjonen deres er at deteksjon «ikke ivaretar akademisk integritet; det undergraver den».

De peker på et formuleringsproblem verdt å kopiere inn i revisjonsrunden din. Regler som begrenser AI-bruk «i vurdering», unnlater å angi når en vurdering begynner, så AI-assistert research, planlegging eller redigering kan være brudd eller ikke, avhengig av hvem som leser. Navngi prosessbelegg du kan observere i stedet: en innlevert prompt og samhandlingslogg, en øvelse produsert i rommet, en muntlig forklaring. Der institusjonen din likevel kjører en detektor, gjelder advarslene deres om datalagring, oppbevaring og kommersiell bruk av studentarbeid, og [[privacy|personvern]]innvendingen som to lærerstudenter reiste, er innvendingen studentene dine vil reise.

## Hva undervisere tar feil om her

En strengere policy er en tryggere policy. Å være strengere enn institusjonen din er vanlig og forsvarlig, men håndhevingskostnaden er din, og en regel du ikke kan anvende konsistent gjennom en sensurrunde, er et likestillingsproblem. Kutt reglene du ikke kan drive.

Et forbud er den korteste meldingen som finnes. I de 27 lærerstudentpolicyene lå tvetydigheten mest i de tillatende, og 22 av 27 tok aldri opp lesing, så studentene ble overlatt til å gjette. Deltakeren hos Kim et al. fulgte et forbud ved å bryte det og føle seg dårlig for det.

Erklæring er en etterlevelsesmekanisme. Det er et signal, og signaler avhenger av tillit. Qu og Wang fant at normer blant medelever og trygghet på underviseren forutsa erklæring bedre enn moralsk resonnering gjorde.

En detektorscore avgjør en omstridt sak. Den når ikke standarden en integritetssak må oppfylle, og den kan ikke skille arbeid laget med AI fra arbeid laget av AI. Bygg saken på arbeid du har observert.

Å skrive policyen er kommunikasjonen. Kim et al. fant fem steder der den reelle policyen lever, og dokumentet ditt er ett av dem. Versjonen studentene handler etter, settes sammen av det du sier i timen og det du gjør med egne materialer.

## Hva som kommer tilbake på deg

**«Studentene kommer bare til å skjule det.»** Noen vil det, og designspørsmålet er hvilke studenter regelen din frister. Avskrekking går gjennom en detektors **evne til å skille** skjult bruk fra legitimt arbeid, ikke gjennom dens rå treffrate. Når ekstra følsomhet gir flere nye falske positive enn nye sanne positive, **kan sterkere overvåking gjøre skjuling relativt mer attraktivt**, fordi ærlige studenter straffes raskere enn skjulte brukere identifiseres. Tillatelse og erklæring er separate håndtak: tillatelse flytter grensen for akseptabel bruk, erklæring endrer synlighet. Diagnostiser hvor oppgaven din trekker studenten som er mest fristet til å skjule, og design for den studenten.

**«Jeg vil ikke forby verktøy jeg ikke kan oppdage.»** Det behøver du ikke. Forbud er én av fire designresponser, sammen med overvåking, tillatt bruk med erklæring og redesign. Redesign endrer hva oppgaven belønner, og forblir kosmetisk hvis rubrikken fortsatt i hovedsak vurderer sluttproduktet. [[teaching-intro-ai-course-redesign-bill-of-rights-2026|Pisan (2026)]] viser nivåene gjort uttrykkelige: AI er forbudt i innføringsemnet i programmering, fordi å sette bort de første løkkene fjerner det som undervises; oppmuntret i prosjekter i datastrukturer (Copilot tillatt) og forbudt på penn-og-papir-eksamen; en studie- og repetisjonshjelp i systememnet på høyere nivå; og **påkrevd** i selve AI-emnet, der én grense bar det meste av vekten. Modellen kan skrive kode, og refleksjonene må være i studentens egen stemme. Eksamen ble fjernet helt, og vurderingen flyttet til arbeid en modell ikke i stillhet kan spøkelsesskrive.

**«Institusjonens policy dekker allerede dette.»** Mindre enn du tror. Gapet går begge veier: 92 % av emneplanene gir uttrykkelige retningslinjer, lokale regler driver bort fra institusjonell veiledning, og bare 47 institusjoner hadde begge nivåene synlige. Innkjøp, data og revisjonssykluser hører til [[institutional-ai-policy|Hvordan skriver og implementerer vi en institusjonell AI-policy?]], men oversettelsen til klasserommet er din. Nash og Burriss konkluderer med at institusjonene må utstyre lærere til å motsette seg like mye som til å ta i bruk, med den veiledningen og [[educational-development|profesjonelle utviklingen]] som lar en underviser avslå en bestemt AI-bruk uten å bli framstilt som gammeldags. Teknodeterminismen hos deltakerne deres motsa deres egne [[pedagogy|pedagogiske]] forpliktelser. En institusjonell policy er ikke dekning for din egen vurdering.

**«Jeg har ikke tid til å skrive om emneplanen denne måneden.»** Kjør oversikten én gang, på oppgaven som bekymrer deg, og ta resultatet rett inn i oppgavearket. Emneplansetningen kan vente til neste revisjonssyklus. Studentene handler etter oppgavearket uansett.

## Hva du kan gjøre denne uken

**1.** Lag oversikt over de vurderte oppgavene og skriv «hva er det konkret jeg vurderer?» ved siden av hver av dem, før du bestemmer noe om AI.

**2.** Avgjør oppgave for oppgave, og sjekk hvilken respons hver beslutning gjør mest attraktiv for studenten som er mest fristet til å skjule noe.

**3.** Skriv erklæringssetningen: ett sted, ett format, ett bearbeidet eksempel på tilstrekkelig kildeangivelse.

**4.** Navngi belegget du vil godta i en tvist (promptlogg, arbeid gjort i timen, en muntlig redegjørelse), og dropp enhver regel du ikke kan teste mot det.

**5.** Si regelen høyt i neste time, i det øyeblikket den først gjelder, med en begrunnelse ved siden av hver begrensning.

## Hvor du kan gå videre

Styring, datapolicy, innkjøp og revisjonssykluser hører til [[institutional-ai-policy|Hvordan skriver og implementerer vi en institusjonell AI-policy?]]; pålagte institusjonelle regler og regler fra skoleeier ligger hos [[educational-policy-ai]] og [[governance]]. Å bygge oppgaven om slik at en karakter fortsatt støtter en forsvarlig slutning, ligger hos [[redesign-assessment-ai-era]], håndhevingsargumentet er i [[reduce-ai-cheating]], detektorvalget i [[should-we-use-ai-detectors]], og merkeordningen i [[ai-assessment-scale-reform]].
