---
title: "Hvordan forhindrer jeg, at studerende bliver overafhængige af AI?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [study-with-ai, verify-ai-output, asynchronous-online-courses-ai, ai-disabled-neurodivergent-learners]
weight: 80
type: faq
foundations: [cognitive-offloading, reducing-ai-misuse]
pedagogy: [desirable-difficulties, help-seeking, metacognition, self-regulated-learning]
methods: [mixed-methods-research]
ethics: [trust-calibration]
research_method: [literature review, experiment]
audience: [instructors, instructional designers]
level: [higher ed, secondary, k 12]
updated: "2026-10-29T12:23:33-04:00"
translation_of: faqs/reducing-over-reliance
source_updated: "2026-10-28T11:14:24-04:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

En studerende klarer hjemmeopgavesættet perfekt og efterlader halvdelen af eksamen tom. En anden afleverer en laboratorierapport, de ikke kan gå dig igennem, eller en kodeblok, de ikke kan forklare linje for linje. En kollega vil forbyde værktøjet på førsteårskurset, og du vejer, hvad det koster de studerende, der læner sig mest op ad det.

Bundlinjen: overafhængighed er for det meste et placeringsproblem. De design, der reducerer den, sætter den studerendes forsøg foran værktøjet, konfigurerer AI'en til at give hints i stedet for at svare, gør kontrollen til en påkrævet afleveringsgenstand og bevarer ét bedømt øjeblik, hvor værktøjet er fraværende.

## Den korte version

**1.** Sæt den studerendes egne idéer, hypotese eller grove udkast foran værktøjet, før det åbnes.

**2.** Konfigurér AI'en til at give hints, stille spørgsmål og give eksempler, hvor det er målfærdigheden, du bedømmer.

**3.** Gør verifikation til en afleveringsgenstand med sin egen linje på opgaven.

**4.** Hold det bedømte øjeblik fri for værktøj, og sammenlign det assisterede arbejde med det.

**5.** Tidsindstil refleksionsprompten til den fase af opgaven, den stadig kan ændre.

**6.** Se på, hvem dit design efterlader, fordelt på forhåndsviden snarere end på gennemsnit.

## Beslut, om du har et problem, eller bare tung brug

Kognitiv udlicitering er overførsel af en kognitiv belastning til et eksternt værktøj, hvilket frigør begrænsede mentale ressourcer til andet arbejde. [[cognitive-offloading-metacognitive-review-2026|Guo og Ye (2026)]] gennemgår konstruktet gennem Nelson og Narens dynamiske [[metacognition|metakognitive]] model, hvor overvågning af sværhedsgrad driver beslutningen om at udlicitere til en intern eller en ekstern strategi. Udlicitering er et [[self-regulated-learning|selvregulerende]] valg, og den fejl, der er værd at bekymre sig om, er [[trust-calibration|fejlkalibrering]]; volumen alene siger ikke meget.

[[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] modellerer afhængighed som tre handlinger: at løse alene, at acceptere AI'ens svar uverificeret eller at bruge det og verificere. Kalibrering fejler i begge retninger. Overafhængighed er at acceptere forkert output, og underafhængighed er at kassere nyttig AI, efter den har fejlet. Kollektiv overafhængighed er en population, der har opgivet verifikation, og fordi rå overafhængighed divergerer fra regret, er tung brug forenelig med gode udfald. Den studerende, der tjekker hvert AI-svar mod dine materialer, er ikke dit problem. Den, der afleverer en models første udkast, er.

[[lodge-loble-cognitive-offloading-2026|Lodge og Loble (2026)]] beskriver mekanismen som »flydende på kommando«: sammenhængende, selvsikkert output, der omgår de [[desirable-difficulties|ønskværdige vanskeligheder]] ved genfinding, uddybning og generering, som viden konsolideres gennem. Deres præstationsparadoks er, at assisteret arbejde føles flydende, og studerende præsterer godt i øjeblikket, mens de husker mindre, hvilket de kalder en kompetenceillusion. De navngiver metakognitiv dovenskab (efter Fan et al. 2024), hvor bekvemmelighed lader lærende fraskrive sig selvregulerende processer, de har brug for at udvikle.

At skelne dem i dit eget kursus kræver en sammenligning snarere end et tal. Se efter arbejde, der er bedre end den studerendes tidligere arbejde og dårligere end deres forklaring af det: et stærkt opgavesæt efterfulgt af en svag eksamen, en poleret rapport, den studerende ikke kan diskutere, et korrekt svar, der ikke kan gengives på en lignende opgave. Intet enkelt mønster beviser noget. To eller tre sammen begrunder at ændre designet.

Det meste, du kan måle her, er [[self-report-measures|selvrapportering]]. [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] spurgte 666 deltagere i Storbritannien med 50 interviews og fandt AI-brug negativt korreleret med [[critical-thinking|kritisk tænkning]] (r = -0,68), med udlicitering som delvis mediator (total effekt b = -0,42; indirekte b = -0,25). [[genai-over-reliance-learning-2026|Gao, Sun og Khan (2026)]] brugte tidsforskudte survey-data i tre bølger fra 623 kinesiske studerende plus interviews med undervisere og fandt, at effektiv AI-brug hæver bæredygtig læringpræstation og overafhængighed på samme tid. Begge design er korrelationelle, og begge siger det selv.

Adfærdsinstrumenter er tyndere. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE (Alam, 2026)]] er et selvcheck, der kun kører i browseren, uden evidens for reliabilitet eller validitet, og forfatterne advarer om item-validitet. Items registrerer, hvornår og hvor ofte AI kommer ind i en arbejdsgang, ikke om den studerendes eget ræsonnement forblev engageret, så en studerende, der stilladserer bevidst med AI tidligt, vil ærligt score som udliciterer. PAUSE citerer også Padmakumar et al.s (2026) Offloading Score, som estimerer andelen af indsats, der udliciteres, ud fra adfærdslogfiler (n = 40 udviklere). Det, du vil vide, er, hvad den studerende kan gøre uden hjælp.

## Sæt den studerendes forsøg foran værktøjet

Det klareste testede forløb er »tænk først, ChatGPT bagefter«. [[think-first-chatgpt-later-2026|Wong og Qiu (2026)]] fordelte N = 196 studerende til at arbejde selvstændigt, til at bruge ChatGPT frit eller til at arbejde under en reguleret betingelse: generér dine egne idéer, samarbejd med ChatGPT om at forbedre og evaluere dem, og forfin og aflever derefter selvstændigt én løsning. Den frie brugsgruppe producerede mere kreativt arbejde på den assisterede opgave og faldt tilbage til niveauet for kun mennesker på en senere, sværere opgave uden ChatGPT. Den regulerede gruppe viste ingen umiddelbar fordel og overgik begge de andre grupper på selvstændig kreativitet bagefter.

Promptdata forklarer gabet. I den regulerede gruppe var 88,6 % af prompterne samarbejdsorienterede, og det var den eneste prompttype, der signifikant korrelerede med senere selvstændig originalitet. I den frie brugsgruppe var 70,9 % af prompterne ikke-samarbejdsorienterede, og 59,6 % bad simpelthen ChatGPT om at generere idéer direkte. Det samme værktøj, spurgt på to forskellige måder, producerede to forskellige lærende.

På din opgavebeskrivelse bliver det til en ordensinstruks: idéer, hypoteser eller et groft udkast først, derefter værktøjet. En sætning øverst på siden er nok, forudsat at næste skridt indsamler det, den studerende skrev.

To klasserumsdetaljer afgør, om forløbet holder. Den første er tid. Hvis den selvstændige fase foregår uden for timen, vil nogle studerende åbne værktøjet først og skrive idéerne ned bagefter. Den anden er indsamling. Hvis intet afleveres fra den fase, findes forløbet kun på papiret. En halv side noter, indsamlet ved timens afslutning, er nok til at gøre rækkefølgen reel.

## Konfigurér værktøjet til at give hints i stedet for svar

[[brcic-effortless-trap-productive-struggle-2026|Brcic og Frljic (2026)]] rapporterer den skarpeste version af placeringsargumentet. En ubevogtet AI-hjælper efterlod gymnasieelever cirka 17 % dårligere på en eksamen uden hjælp end jævnaldrende, der slet ikke havde et værktøj. Den samme model, genopbygget til at tilbageholde svar, fjernede skaden, og en velkonstrueret vejleder cirka fordoblede læringen. Deres diagnosticum kan bruges i ethvert kursus: hvis det at lukke AI ind får opgaven til at føles ubesværet, står værktøjet det forkerte sted.

[[zohar-bloom-inzlicht-against-frictionless-ai-2026|Zohar, Bloom og Inzlicht (2026)]] giver argumentet en form. De hævder, at forbindelsen mellem indsats og mening er en omvendt U, så målet er en gradient: fjern overvældende forhindringer og bevar de kampe, der producerer forståelse og ejerskab, med assistance som supplement. Deres argument er en konceptuel kommentar uden nye data, og den omvendte U-forbindelse hviler på ét empirisk anker uden at være kvantificeret, så ingen kan fortælle dig, hvor optimum ligger for en given lærende.

Praktisk betyder det bevogtet AI midt i opgaven, hvor hints, gennemregnede eksempler og øvelsesitems gør arbejdet, og en sikret kontrol til sidst. Det gør også en AI-brugspolitik til en placeringsregel pr. færdighed, hvilket er lettere at skrive og lettere at forsvare end en liste af forbud.

Et hint er et spørgsmål om den studerendes næste skridt, et gennemregnet eksempel på en lignende opgave eller en henvisning til det relevante afsnit. Et svar er en færdig sætning, den studerende kan indsætte. De fleste alment anvendelige chatbots producerer det andet som standard, i flydende prosa der læses som hjælp, og derfor betyder konfigurationen mere end den studerendes intentioner.

## Kræv kontrollen, og gør den synlig

Verifikation er det billigste håndtag med reel kausal støtte. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] fandt, at synliggørelse af verifikation udløste en modkaskade til næsten fuldstændig verifikation: overafhængighed faldt til 0,00 og regret til 0,07. At reducere friktionen ved at tjekke var det svageste håndtag i samme model, fordi barrieren er social snarere end mekanisk. Et link til biblioteket får ikke en studerende til at tjekke en påstand.

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg og kolleger (2026)]] fandt, at de studerende, der allerede gør dette godt, tjekker output mod kursusmaterialer, jævnaldrende eller undervisere, når nøjagtigheden er usikker. Det er en adfærd, du kan kræve. Sæt én linje i opgaven: hvad du tjekkede, og mod hvad. Læs den som en del af bedømmelsen, og normen bliver synlig for hele holdet snarere end for de samvittighedsfulde få.

Den linje giver dig også noget at følge op på. Når en studerende skriver, at de tjekkede en påstand mod kursusteksten, kan du spørge, hvilken side. Når de skriver, at de sammenlignede med en medstuderende, kan du spørge, hvad den medstuderende sagde. Det koster en sætning. Opfølgningsspørgsmålet er det, der får studerende til at behandle det som arbejde.

Verifikation har også brug for et omfang. At tjekke, at en påstand passer med kursusteksten, er en anden handling end at læse en sætning igennem for grammatik, og det er den første, hvor modellen oftere fejler. Sig, hvilken af dem linjen beder om, ellers får du korrekturlæsning.

## Demonstrér én selvsikker fejl

Sæt en opgave, hvis svar modellen tager selvsikkert fejl af, og lad så holdet tjekke det svar mod kursusteksten. Det rammer, fordi fejlen kommer i samme stemme som de korrekte svar. Tilføj evidensen bagefter: en ubevogtet hjælper efterlod studerende cirka 17 % dårligere på en eksamen uden hjælp, og studerende, der fik GPT-4, løste flere opgaver med værktøjet og præsterede dårligere end kontrolgruppen, da det blev fjernet (PAUSE rapporterer Bastani et al., 2025). Samme kilde tilføjer, at Liu et al. (2026) fandt, at assistance reducerede vedholdenhed i randomiserede kontrollerede forsøg (N = 1.222).

Vælg en fejl, der er beskeden og kontrollerbar, som en kildehenvisning der ikke findes, en dato der er forkert, eller en beregning der ikke går op. Bed derefter holdet om at skrive rettelsen og den kontrol, de brugte til at finde den. Den skrevne rettelse er artefakten, og den fortæller dig, om de kan udføre kontrollen, uden at du står over dem.

## Hold det bedømte øjeblik fri for værktøj

Det assisterede produkt er en dårlig proxy for formåen, så mindst ét bedømt øjeblik skal finde sted uden værktøjet. [[think-first-chatgpt-later-2026|Wong og Qius (2026)]] senere uassisterede opgave er den måling. Deres gruppe med kun mennesker faldt også på den sværere opfølgning, hvilket udelukker den simple version af rettelsen: at fjerne værktøjet uden at støtte den lærende er ikke en intervention.

At skifte mellem tilstande har støtte. PAUSE rapporterer Kosmyna et al.s (2025) resultat fra session fire, hvor deltagere, der kun brugte hjernen og senere brugte ChatGPT, klarede sig bedre end vedvarende LLM-brugere. Ansvarlighed virker også gennem forklaring: Makransky et al. (2025) fandt, at en vejledende chatbot, der bad studerende om at forbinde idéer og forklare deres ræsonnement, gav bedre bedømmelsespræstation end traditionel undervisning.

For et kursus: skift mellem assisteret arbejde i øvelsen og uassisteret arbejde der, hvor det tæller. Læs den assisterede del som en registrering af præstation under gode betingelser og den uassisterede del som evidensen om læring. At sammenligne dem er også den mest nyttige samtale, du kan have med en studerende, der ikke forstår en karakter.

Planlægning er begrænsningen. Et værktøjsfrit øjeblik kræver et lokale, en tid og en opgave, der passer i det, så den billigste version er et kort stykke i timen knyttet til en opgave, du allerede har sat. En separat eksamen er en større forpligtelse og normalt ikke nødvendig ved første forsøg med dette.

Den uassisterede del får også en anden brug: giv den tilbage i starten af næste forløb, og I kan begge se, hvad der overlevede pausen.

## Skeln instrumentel hjælp fra eksekutiv hjælp

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg, Feldman-Maggor og Wong (2026)]] interviewede 20 universitetsstuderende i STEM-fag og fandt en firetrinsproces: at beslutte, om der er brug for hjælp, at vælge en kilde, at vælge hjælpetypen og at bedømme den hjælp, der blev modtaget. Stærkere studerende foretrak instrumentel hjælp, altså hints og forklaringer, frem for eksekutiv hjælp, altså direkte løsninger. Samme studie advarer om, at brug af LLM'er til fejlsøgning eller programmering på tværs af sprog kan omgå selvstændig [[problem-solving|problemløsning]], selv når studerende aldrig beder om et svar.

Det mapper rent over på [[cognitive-offloading|kognitiv udlicitering]]. Instrumentel brug er den duplikative udlicitering, der holder, når værktøjet forsvinder, fordi den studerende stadig indkoder ræsonnementet. Eksekutiv brug er den substitutive udlicitering, der kollapser, når det eksterne lager fjernes. [[cognitive-offloading-metacognitive-review-2026|Guo og Ye (2026)]] drager grænsen præcis i de termer: fjern lageret, og substitutive udliciterer falder alvorligt, mens duplikative udliciterer bevarer deres nøjagtighed gennem intern indkodning.

Skriv distinktionen ind i opgaven. Bed studerende mærke hver AI-brug som instrumentel eller eksekutiv, kræv mindst én samarbejdsorienteret prompt, og bedøm det ræsonnement, de tilføjede efter svaret. I Wong og Qius fri brugsbetingelse drev standarden mod eksekutiv brug, uden at nogen besluttede at drive.

Ikke al udlicitering er suspekt. PAUSE citerer Hong et al. (2025), hvor bevidst udlicitering af lavereordens skriveopgaver for at frigøre opmærksomhed til analyse og revision gav større gevinster i kritisk tænkning. Testen er, om den del, der udliciteres, er den færdighed, du bedømmer.

De mærkater diagnosticerer også din opgave. Hvis det meste af et hold rapporterer eksekutiv brug, inviterer opgaven til det, uanset hvad politikken siger, og den næste ændring hører i opgaven snarere end i reglens formulering.

## Tidsindstil prompten til fasen

Feedback, der sigter mod en stabil overbevisning, virker før en opgave begynder. Feedback om øjeblikkelig korrekthed og sværhedsgrad virker under den. [[cognitive-offloading-metacognitive-review-2026|Guo og Ye (2026)]] kalder det timing-component-matching, og det forklarer, hvorfor en refleksion, der skal afleveres ved et projekts afslutning, ændrer så lidt: på det tidspunkt er valgene truffet.

[[lodge-loble-cognitive-offloading-2026|Lodge og Loble (2026)]] anbefaler integrerede metakognitive prompter, der får lærende til at standse op, reflektere og vurdere deres forståelse, mens de arbejder, sammen med Load Reduction Instruction, som styrer den kognitive byrde, mens den muliggør progressiv uafhængighed. En et-minuts forudsigelse før et svært forløb, skrevet ned og sammenlignet bagefter, passer i det vindue og koster intet at rette.

Formuleringen af prompten betyder mindre end dens placering. Før et forløb: spørg, hvad den studerende forventer bliver svært, og hvorfor. Under det: spørg, hvilket trin de sidder fast på, og hvad de har prøvet. En refleksion ved projektets afslutning registrerer mest, hvad der skete, og derfor ændrer den så lidt. Hold forudsigelsen på samme side som arbejdet, så sammenligningen til sidst ikke kræver arkivering.

## Forvent at risikoen klumper sig sammen

[[lodge-loble-cognitive-offloading-2026|Lodge og Loble (2026)]] placerer risikoen i forhåndsviden og selvregulering og navngiver et **metakognitivt lighedsgab**: at bruge AI godt kræver ressourcer, som novicer mangler, så de studerende, der har mest brug for øvelsen, er de sandsynligste til at uddelegere selve læringen. De rapporterer, at 80 % af australske studerende allerede bruger AI, og at to tredjedele af underviserne i den tidlige sekundære del gør det (OECD 2025).

Alder og vane korrelerer med samme mønster. [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] fandt, at deltagere i alderen 17-25 år viste højere AI-afhængighed og udlicitering og lavere kritisk tænkning end dem på 46 år og derover, og at uddannelsesniveau forudsagde bedre kritisk tænkning uanset AI-brug (r = +0,34), med en signifikant interaktion der indikerer, at uddannelsesniveau afbøder den negative effekt. [[genai-over-reliance-learning-2026|Gao, Sun og Khan (2026)]] fandt, at polykronicitet, en tilbøjelighed til at multitaske, modererer vejen, med studerende med høj polykronicitet i større risiko.

For et hold taler det for at holde øje med de studerende med den svageste forberedelse og for at tjekke, om din egen opgave har skabt betingelserne for, at kontrollen stopper. En krævende opgave parret med en dygtig model er den kombination, Biswas' model markerer med mest regret, og den er let at skabe ved et uheld.

Kontekst betyder lige så meget som person, og dit kursus styrer en del af konteksten. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] viser, at opgavens sværhedsgrad og AI'ens kvalitet sætter grundlinjen: overafhængighed stiger fra cirka 0,02 til 0,38 med sværhedsgrad, og på svære opgaver ligger den på 0,38 med dårlig AI mod 0,16 med god AI. Den højeste regret kommer fra AI af høj kvalitet på svære opgaver (0,441), fordi agenter uddelegerer for meget og sjældent stoler på sig selv. Social proof forstærker det: når synlig brug stiger fra 0 til 0,6, kollapser verifikation fra 0,29 til 0,002. Kontrollen stopper præcis der, hvor modellen er stærkest, og opgaven er sværest, hvilket sjældent er der, en underviser kigger først.

## Beslut, hvor meget vægt evidensen bærer

Intet i dette korpus tester, om en specifik overafhængighedsintervention holder på tværs af kontekster eller semestre. Tænk-først hviler på ét eksperiment med N = 196. Resultatet om at tilbageholde svar kommer fra [[brcic-effortless-trap-productive-struggle-2026|Brcic og Frljics (2026)]] syntese snarere end fra et eget forsøg. Friktionsargumentet er en konceptuel kommentar uden nye data. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] angiver modellens grænser: eksogen stationær AI-kvalitet, et fast netværk, stiliserede verifikation. At estimere de reelle værdier ville kræve longitudinelle spor af verifikationsrater pr. opgave, styrken af social proof og hvordan tillid opdateres efter verificeret kontra uverificeret brug.

Måling er fortsat det svageste led. Survey-design dominerer, og både [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] og [[genai-over-reliance-learning-2026|Gao, Sun og Khan (2026)]] opfordrer til longitudinel og eksperimentel opfølgning. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE]] har ingen psykometri og blev bygget til voksne. Om lighedsgabet kan lukkes med undervisning, er teoretiseret snarere end demonstreret.

Det efterlader dig med et rimeligt væddemål, sat billigt. Ændr én opgave, behold den uassisterede måling, og tjek, om gabet mellem assisteret og uassisteret arbejde indsnævres. Byg ikke et kursus om på styrken af disse tal.

## Hvad undervisere tager fejl af

**De studerende, der bruger det mest, er dem i problemer.** Frekvens er det, surveys fanger og dashboards viser, og det er ikke konstruktet. En studerende, der tjekker hvert svar og citerer dine materialer, kan bruge AI dagligt og være fin. En studerende, der afleverer det første output én gang om ugen, har problemet.

**Et forbud fjerner risikoen.** De stærkeste resultater her kommer fra placering, og armen med kun mennesker i Wong og Qius eksperiment faldt også på den sværere opfølgning. At fjerne værktøjet uden at støtte den lærende lader sværhedsgraden være, hvor den var.

**Billigere kontrol vil løse verifikationen.** At gøre kontrollen lettere var det svageste håndtag i Biswas' model, fordi forhindringen er social. En bedre plagiatkontrol får ikke en studerende til at læse kilden.

**Et brugsdashboard fortæller mig, hvem der udliciterer.** PAUSEs items registrerer, hvornår og hvor ofte AI kommer ind i en arbejdsgang, og forfatterne flagger selv validitetsproblemet. En omhyggelig stilladserer scorer som udliciterer, så at handle på de tal straffer de studerende, du gerne vil beholde.

**Flydende arbejde og tilfredshed viser, at designet virker.** Det er den illusion, [[lodge-loble-cognitive-offloading-2026|Lodge og Loble (2026)]] beskriver i deres præstationsparadoks: arbejdet føles flydende, og studerende præsterer godt i øjeblikket, mens de husker mindre. Uassisteret præstation og forsinket [[transfer-of-learning|overførsel]] er de mål, der besvarer spørgsmålet.

**Lær studerende AI-kompetence, og problemet forsvinder.** [[lodge-loble-cognitive-offloading-2026|Lodge og Loble (2026)]] advarer om, at overinvestering i studerendevendt AI-kompetence kan være den forkerte allokering, givet hvad novicer mangler.

## Hvad du vil få tilbage

**»Det her er bare god pædagogik med et nyt navn.«** Delvist. Stilladsering, formativ feedback og produktiv kamp er gamle idéer. Det nyere er rækkefølgen: synlig verifikation slog billigere verifikation, og de to øjeblikke, der er værd at beskytte, er det første svære forsøg og den endelige uassisterede kontrol. Gør de velkendte ting i den nye rækkefølge.

**»Jeg kan ikke holde opsyn med det.«** Det kan du ikke, og evidensen siger, at du ikke skal prøve. Placering gav det stærkeste resultat. Design opgaven sådan, at brug af værktøjet på det forkerte tidspunkt viser sig i selve arbejdet, som et svar den studerende ikke kan forklare, eller et verifikationstrin der mangler.

**»Mit kursus er for stort til et sekventeret forløb.«** De billige håndtag skalerer: en verifikationslinje, en et-minuts forudsigelse og at flytte den bedømte kontrol til et AI-frit lokale. Den dyre post, et fuldt sekventeret tænk-først-forløb, kan starte som én opgave. Regenerér ét opgavesæt i en assisteret og en uassisteret halvdel og se, hvad gabet fortæller dig.

**»Mine studerende er novicer. De har brug for hjælpen.«** De har mere brug for hints end for svar, og lighedsfundet er grunden. De studerende med mindst forhåndsviden er de sandsynligste til at uddelegere ræsonnementet, og et værktøj, der tilbageholder svar, holder øvelsen, hvor den hører til.

**»Vil de svagere studerende så ikke bare dumpe den uassisterede kontrol?«** Nogle gange vil de, og det resultat er information snarere end en dom. En værktøjsfri kontrol, som en stor del af et hold dumper, siger, at øvelsen bar præstationen, og det var det, du havde brug for at vide. Vægt det som evidens, genundervis det, den afdækker, og tilbyd et andet forsøg på en parallel opgave. Intet studie her tester, om genundervisning efter en dumpet uassisteret kontrol genvinder læringen, så den del er din faglige vurdering.

**»Nogle af mine studerende bruger AI som en ærlig stillads. Skal jeg stoppe dem?«** Nej. En studerende, der læser et hint, prøver trinnet og tjekker resultatet, laver den duplikative udlicitering, der overlever, at værktøjet fjernes. Det, du vil have, er en opgave, der holder den brug tilgængelig og gør den eksekutive version mindre belønnet, og det handler om, hvad opgaven indsamler, og hvad rubrikken betaler for.

**»Evidensen er tynd, så hvorfor ændre noget?«** Den er tynd på bestemte steder, som grænserne ovenfor navngiver. Det, der er konsistent på tværs af studierne, er retningen: placering, synlig kontrol og en uassisteret måling. Én ændret opgave, med det uassisterede resultat gemt, er et lille nok væddemål til at køre på det grundlag.

## Hvad du skal gøre i denne uge

**1.** Tilføj en verifikationslinje til næste opgave: én sætning der navngiver, hvad den studerende tjekkede, og mod hvad.

**2.** Flyt den bedømte kontrol til et øjeblik uden værktøjet, og bedøm den.

**3.** Sæt det første svære forsøg før værktøjet, og indsaml de idéer, den hypotese eller det udkast, der kommer ud af det.

**4.** Ændr den værktøjsindstilling, du anbefaler, så den giver hints snarere end svar, og fortæl studerende, at det er det, du gjorde.

**5.** Kør én selvsikker AI-fejl live, lad studerende fange den mod kursusteksten, og gem den rettelse, de skrev.

## Hvor du kan gå videre

Det nærliggende spørgsmål, om AI overhovedet producerer læring, er dækket i [[does-ai-help-students-learn|hjælper AI studerende med at lære?]]. [[reduce-ai-cheating|At reducere AI-snyd]] håndterer integritet og detektionens grænser, og [[redesign-assessment-ai-era|at redesigne bedømmelse i AI-æraen]] dækker den bedømmelsesarkitektur, denne side forudsætter. For de underliggende idéer, se [[cognitive-offloading|kognitiv udlicitering]], [[metacognition|metakognition]] og [[desirable-difficulties|ønskværdige vanskeligheder]].
