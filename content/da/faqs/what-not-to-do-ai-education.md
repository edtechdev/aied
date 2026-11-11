---
title: "Hvad bør undervisere undgå at gøre med AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-10T22:10:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Det meste vejledning om AI i uddannelse er formuleret som det, man bør prøve. Denne side er den anden liste: de praksisser, som evidensen siger, man skal holde op med, organiseret efter den rolle, der skulle stoppe dem. Den er med vilje ikke en liste over forkerte forestillinger — det håndterer [[addressing-common-misconceptions-ai-education|FAQ'en om fejlopfattelser]], og begrebssiden [[misconceptions]] forklarer, hvorfor de holder ved — og ikke en liste over, hvad forskningen endnu ikke kan fortælle dig, hvilket er det, [[limitations-in-aied-research|begrænsninger i AIEd-forskning]] dækker. Fokus her er skridtet efter en overbevisning: hvad folk faktisk gør, hvad det koster, og hvad man bør gøre i stedet.

Tre fejl går igen på tværs af alle roller. **Substitution** — et værktøj udfører den tænkning, den lærende skulle have udført, og outputtet bedømmes, som om den lærende havde gjort det. **Ufortjent evidens** — et signal, der er let at indsamle (selvtillid, flydende sprog, engagement, en gennemførelsesrate), behandles som bevis for noget, det ikke kan vise. **Struktur overladt til formaning** — en advarsel, en sætning i en politik eller en træningssession får til opgave at gøre det arbejde, som grænsefladedesign, bedømmelsesdesign eller styring skal gøre.

## Den korte version

**1.** Bedøm, citer eller fremhæv aldrig et output som bevis for den formåen, der frembragte det.

**2.** Indsaml altid den uassisterede måling sammen med den assisterede.

**3.** Behandl flydende sprog, selvtillid og engagement som træk ved brugen, ikke som læring.

**4.** Læg beskyttelsen ind i arbejdsgangen, ikke i en advarsel.

**5.** Gå ud fra, at alle data, værktøjet kan se, bliver opbevaret, kombineret og lækket.

**6.** Hvis påstanden kommer med en demo, men ikke med en sammenligning, er det markedsføring.

## For studerende

**Aflever ikke den del, du skal øve dig på.** Skellet går ikke på, hvor meget du bruger AI, men på hvilket kognitivt arbejde der flytter sig. At udlicitere hjemmeopgaver hæver hjemmeopgavekarakteren og sænker eksamenskarakteren uden hjælpemidler — en gevinst på 18 % mod et tab på 20 % i ét studie på en ungdomsuddannelse — fordi den øvelse, der opbygger viden, man kan hente frem, gik til værktøjet ([[reducing-ai-misuse]]). Hvis øvelsen er pointen, kan værktøjet ikke udføre øvelsen.

**Læs ikke flydende sprog som nøjagtighed.** Flydende tekst er output fra en sprogmodel, uanset om indholdet er sandt, og den mekanisme, der gør den overbevisende, er den samme, der gør den forkert ([[hallucination-risk]]). Kontrollér den konkrete påstand, ikke tonen i afsnittet. Verifikationsvanen opstår sjældent af sig selv: i et panel på 900 voksne, der fik et AI-resumé, fulgte læserne en kilde, der blev citeret i det, i 1 % af besøgene ([[trust-calibration]]).

**Accepter ikke enighed som feedback.** Modeller bekræfter i væsentligt højere grad end mennesker — på tværs af 11 modeller bekræftede AI-svar brugerne 49 % oftere end menneskelige svar — og det overskud er det, der får interaktionen til at føles støttende ([[ai-sycophancy]]). En vejleder, der aldrig er uenig med dig, har fjernet det korrigerende signal, du kom for. Bed om indvendingen, ikke anerkendelsen.

**Byt ikke et spørgsmål for et svar, når du sidder fast.** Den produktive kamp, du springer over, er læringen; hjælpesøgning, der henter et svar, er en anden adfærd end hjælpesøgning, der henter et hint ([[help-seeking]], [[desirable-difficulties]]). Brug værktøjer, der tilbageholder det færdige svar.

**Indsæt ikke personlige oplysninger, helbredsoplysninger eller familieoplysninger i et værktøj for at få et bedre svar.** Værktøjet har ingen forpligtelse til at glemme dem, og prisen for privatlivet er ikke synlig i svarets kvalitet ([[privacy]]).

## For forældre og familier

**Lav ikke hjemmeopgaverne med værktøjet, og lad dem heller ikke blive lavet ved siden af dig.** Mønstret i dataene er karakterinflation med en skjult pris: hjemmeopgavekarakteren stiger 18 %, mens eksamenskarakteren uden hjælpemidler falder 20 % ([[reducing-ai-misuse]]). Det, du kan tjekke, er processen — kan dit barn forklare trinnet, gøre det igen på papir og sige, hvad det var usikker på? Hvis ikke, har værktøjet lavet opgaven.

**Lad ikke en chatbot blive din fortrolige.** Indsmigrende systemer bekræfter langt mere end mennesker — 49 % mere på tværs af 11 modeller — og bekræftelsen er den mekanisme, der får dem til at føles trygge at tale med ([[ai-sycophancy]]). I et stort longitudinelt studie vendte brugerne sig til indsmigrende AI for personlig rådgivning næsten lige så ofte som til nære venner og familie, med lavere tilfredshed i deres virkelige relationer ([[sycophantic-ai-social-interaction-2026]]). Et barn, der kommer med lidelse til en model, der altid er enig, bliver ikke hørt; det bliver spejlet.

**Giv ikke en generativ chatbot til et lille barn og kald det superviseret, fordi du er i rummet.** Den aldersopdelte vejledning er konkret: stilladserede, ikke-generative aktiviteter for 9-12-årige, superviseret generativ brug med etisk ræsonnement fra 13 år ([[ai-guidance-children-under-13]]). For de yngste børn er risikoen, at barnet tror på det — præoperationelle børn accepterer genereret indhold som sandt, og systemerne er ikke udviklingsmæssigt kalibreret i den feedback, de giver. Voksnes medbrug betyder at spørge, hvad legetøjet netop gjorde, ikke at holde opsyn fra døren ([[early-childhood-elementary-ai-education]]).

**Antag ikke, at skolens værktøj beskytter dit barns data, fordi skolen har valgt det.** Spørg, hvad der opbevares, hvor længe, om det træner noget, og hvem der ellers ser det ([[privacy]]). Bevidsthed følger ikke automatisk af eksponering: en måned efter en lektion, hvor eleverne så deres egen loggede adfærd projiceret live, valgte 66 % af en 7. klasse stadig den mindst beskyttende chatbotindstilling ([[privacy]]).

**Brug ikke et detektorresultat til at anklage dit barn eller til at støtte en anklage fra en skole.** I den stærkeste kontrollerede test markerede detektorer 9-15 % af uændret menneskelig tekst og fangede mindre end 4 % af humaniserede AI-omskrivninger; ved realistiske baserater overstiger falske positiver de sande ([[ai-detection]]). Behandl et flag som en grund til at bede om udkastshistorikken og en samtale, ikke som en konstatering.

**Konkludér ikke, at et forbud mod værktøjet er den sikre løsning.** For lidt tillid er en kalibreringsfejl med sin egen pris — tabt formåen — og den kompetence, der betyder noget, er afstemt selvtillid, ikke undgåelse ([[trust-calibration]]). Det nyttige træk som forælder er det samme, som forskningen støtter for studerende: kræv et verifikationstrin, og gør det billigt nok til, at et træt barn faktisk gør det ([[verify-ai-output]]).

**Forveksl ikke et indholdsfilter med sikkerhed.** Filtre handler om, hvad et system vil sige; de handler ikke om, hvad en interaktion gør ved en lærende — nedbrudt øvelse, indsmigrende enighed eller ujævne afvisninger ([[pedagogical-safety]]).

## For undervisere

**Certificér ikke output som formåen.** En poleret aflevering er bevis for en poleret aflevering. Hvis bedømmelsen ikke kan skelne, hvad den studerende kan uden hjælp, er bedømmelsen holdt op med at måle det, som eksamensbeviset hævder ([[assessment-validity]], [[authentic-assessment]]). Løsningen er et redesign af opgaven, ikke en strengere æreskodeks.

**Brug ikke en detektorscore som bevis for uredelighed.** Den stærkeste kontrollerede test markerer 38-80 % af let AI-redigering, der overholder retningslinjerne, og 9-15 % af uændret menneskelig tekst, mens den fanger mindre end 4 % af omskrivninger, der har været gennem en humaniseringstjeneste; 14 kommercielle værktøjer i en uafhængig benchmark lå alle under 80 % nøjagtighed, og ved realistiske baserater overstiger falske positiver de sande ([[ai-detection]], [[should-we-use-ai-detectors]]). En detektor kan starte en samtale; den kan ikke afslutte en.

**Tilføj ikke AI til en bedømmelse, du ikke har redesignet.** At sætte et værktøj på en opgave, der er designet til præstation uden hjælp, producerer præcis den karakterinflation, der skjuler tabet — hjemmeopgaver op, eksamen ned. Spørg til hver bedømt opgave, hvad den uassisterede version ville vise, og ret opgaven først ([[reducing-ai-misuse]]).

**Behandl ikke engagement som læring.** Tid brugt på opgaven, tilfredshed, omfanget af hjælpesøgning og chataktivitet er alle lette at instrumentere og alle forenelige med ingen læring overhovedet. En beskyttelse, der skar studerendes skift til en forkert AI-position ned fra 42-60,5 % til 5,7-8,2 %, gav ingen målbar læringseffekt i sessionen (β = 0,03, p = 0,18). Adfærden holdt; læringen flyttede sig ikke ([[student-engagement]]).

**Stol ikke på en advarsel på et sted, hvor grænsefladen kunne begrænse.** En vejleder, der kan producere det færdige svar, vil producere det under deadlinepres. Den beskyttelse, der virker, er den, der er bygget ind i interaktionen, ikke sætningen i kursusbeskrivelsen ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Indsæt ikke studerendes arbejde, IEP'er, disciplinærsager eller identificerbare udkast i et forbruger-værktøj.** Dataminimering er en designbeslutning, du træffer på den studerendes vegne, uanset om du har tænkt over det ([[privacy]]).

## For uddannelses- og underviserudviklere

**Kør ikke værktøjstræning og kald det AI-kompetence.** En session om prompting lærer dig et produkts grænseflade; [[ai-literacy]] er evnen til at vurdere, hvornår værktøjet bør bruges, hvad det gør, og hvad der skal kontrolleres. Undervisere, der lærer knapperne uden dømmekraften, går derfra med selvtillid og uden kalibrering ([[teacher-ai-competency]]).

**Kør ikke et engangskursus for undervisere og forvent, at praksis ændrer sig.** Evidensen om [[professional-training|professionel læring]] er konsistent om varighed og opfølgning: enkelte arrangementer flytter selvrapporteret selvtillid, sjældent klasserumspraksis, og gevinsten i selvtillid kan skjule, at der ikke er sket en ændring ([[educational-development]]).

**Ignorér ikke det bedømmelsessystem, du lader blive stående.** Universitetsundervisere vil kun tage den praksis til sig, du underviser i, hvis den bedømmelse, de selv måles på, ikke straffer den. En workshop om AI-robust opgavedesign, der løber ved siden af et uændret eksamensregime, lærer underviserne, at træningen er pynt.

**Forevis ikke den ukritiske brug, du advarer imod.** At demonstrere et værktøj ved at generere en undervisningsplan foran underviserne, uden et verifikationstrin, lærer publikum, at outputtet er produktet.

**Acceptér ikke en leverandørdemo som evidens for effektivitet.** Den påstand, du vurderer, handler om læring, og en demo viser formåen. Bed om uassisterede udfald, resultater for undergrupper og sikkerhedstest over flere ture ([[checking-whether-educational-ai-works]]).

## For udviklere af undervisningssoftware

**Optimér ikke den metrik, der er let at logge.** Sessionslængde, antal beskeder og tilfredshedsvurderinger bliver bedre under næsten enhver ændring; læring gør ofte ikke. Det samme team, der udgiver en beskyttelse, kan udgive et dashboard, der belønner interaktionsvolumen, og de to vil pege i modsatte retninger ([[learning-analytics]], [[student-engagement]]).

**Udgiv ikke en detektor uden et valideringsstudie mod konstruktet.** En model, der scorer 0,98 F1 på et lækket datasæt, kan falde til 0,60 under forsøgsuafhængig validering, og en smiledetektor kan køre *negativt* mod observatørvurderet empati, fordi den mangler den kontekst, en menneskelig bedømmer har ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Offentliggør valideringsprotokollen, ikke bare overskriften.

**Udled ikke affekt, opmærksomhed eller »engagement« fra ansigter og kroppe uden samtykke og et angivet formål.** Risikoen over flere ture er ikke risikoen ved en enkelt tur: skadesraterne i én gennemgang steg fra omkring 18 % ved evalueringer med en enkelt tur til omkring 78 % ved dem med flere ture, så et system, der er certificeret på isolerede prompts, er certificeret på en interaktion, som studerende ikke har ([[pedagogical-safety]], [[privacy]]).

**Skjul ikke overdragelsen.** En studerende, der ikke kan se, hvornår en vejleder genererer versus henter, eller hvornår et menneske er inde i processen, kan ikke kalibrere tilliden til den, og automatiseringsbias virker renest, når systemet har ret, og mennesket er holdt op med at kontrollere ([[automation-bias]], [[trust-calibration]]).

**Design ikke til benchmark og hævd så, at det gælder klasserummet.** Benchmarkpræstation er en egenskab ved benchmarken. Rapportér de brugsbetingelser, du testede, populationen og opgaverne; ellers vil tallet blive læst som et løfte om en anden kontekst ([[limitations-in-aied-research]]).

**Gør ikke værktøjet til den eneste vej til hjælp.** Hvis en studerendes adgang til feedback afhænger af en models tilgængelighed, kvote eller licens, er ligestillingsspørgsmålet allerede afgjort af indkøbet ([[equity-in-ai-education]]).

## For uddannelsesadministratorer

**Køb ikke påstande om formåen som udfaldsevidens.** Leverandører kan demonstrere et produkt; kun en evaluering kan demonstrere læring. Kræv uassisterede udfald, resultater for undergrupper, frafald og en plan for, hvad der sker, når piloten slutter ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Indfør ikke overvågning, fordi den er tilgængelig.** Eksamensovervågningssystemer optager ansigtsbilleder, identitetsdokumenter, rumskanninger inklusive 360-graders gennemgange og mikrofonlyd, og en gennemgang af 80 studier fandt, at kun 25 % levede op til rapporteringskravet for de spørgsmål, en institution har brug for svar på før ibrugtagning ([[privacy]], [[remote-proctoring]]). Prisen lander på de studerende; evidensgrundlaget er tyndere, end kontrakten antyder.

**Skriv ikke en politik, der kun forbyder, og kald det styring.** Et forbud uden redesign af bedømmelsen, uden støtte og uden klagemulighed flytter adfærden i stedet for at forhindre den, og det straffer de studerende, der er dårligst stillet til at bestride en falsk anklage. Politikken skal også dække bedømmeren: to af fem strategier til indirekte prompt-injektion indlejrede i en aflevering hævede karakteren for et essay, der ellers var dumpet ([[institutional-ai-policy]], [[course-ai-policy]]).

**Sæt ikke lighedstegn mellem ibrugtagning og forbedring.** Et dashboard, der rapporterer brug, tilfredshed og gennemførelse, vil se ud som succes, mens læringsmålet står stille. Beslut på forhånd, hvilket udfald der ville få dig til at opsige kontrakten ([[ai-ed-evaluation]]).

**Lad ikke tilgængelighed ankomme som en anmodning om særlige hensyn.** I en gennemgang af 40 studier af digitale hjælpeteknologier til neurodivergente studerende gjorde 28 en formel diagnose til en betingelse for deltagelse — en model, hvor adgangen er betinget af en diagnose, og som udelukker enhver lærende med behov og uden label ([[accessibility]], [[universal-design-for-learning]]).

## For uddannelsesforskere

**Lad ikke selvrapportering bære den kausale påstand.** Selvtillid, oplevet læring og tilfredshed er udfald, men de er ikke de udfald, som de fleste studier siger, de måler. [[empathy|empati]]-litteraturen er det klareste tilfælde: et felt, der har til hensigt at undervise i empati, måler for det meste komfort, og den stærkeste gennemgang af 17 studier fandt selvtillidsgevinster langt hyppigere end evidens for empati i sig selv ([[self-report-measures]], [[empathy]]).

**Citer ikke en effekt uden dens design.** I en kritisk gennemgang af 80 HCI-studier af kritisk tænkning med AI kørte 42 uden kontrolgruppe. En overskriftseffekt fra 30 studerende på ét kursus på én institution er den almindelige form for en skrøbelig påstand ([[limitations-in-aied-research]]).

**Rapportér ikke heterogenitet uden modellen.** De samme data giver I² = 82,98 % under en fixed-effect-model og 15,75 % under en random-effects-model; et citeret I² uden sin model kan ikke fortolkes ([[meta-analysis-systematic-review]]).

**Generalisér ikke fra én kontekst og kald det et fund.** Ét kursus, én institution, én modelversion, ét sprog. Modeladfærd ændrer sig med hver udgivelse, og detektorer trænet på én generation mister recall på den næste ([[research-gaps-aied]], [[ai-detection]]).

**Behandl ikke en korrelation mellem interaktion og udfald som en mekanisme.** Promptvolumen måler ikke kognitiv udlicitering — klynger efter volumen adskilte sig ikke i fordelingen af kognitivt arbejde, og manuelt kodet dialog fandt slet ingen udlicitering i 49,6 % af 125 dialoger ([[cognitive-offloading]]). Mål arbejdet, ikke dets synlige spor.

**Offentliggør ikke et begrænsningsafsnit, der kunne være skrevet før studiet.** Navngiv den konkrete trussel, det konkrete antal og den påstand, den afgrænser. Det er det, der gør en begrænsning brugbar for den næste læser ([[interpreting-and-applying-aied-research]]).

## Hvorfor de hører sammen

Hvert punkt ovenfor er et tilfælde af en stedfortræder, der bliver ophøjet til en dom: stilen står for forfatteren, scoren står for uredeligheden, smilet står for empatien, demoen står for læringen, politikken står for styringen. Rettelsen er altid det samme træk — navngiv konstruktet, find en måling, der kunne falde den anden vej ud, og indsaml den sammen med den bekvemme måling.

Det er også derfor, disse forbehold ikke er en liste over ting, der altid er forkerte. En detektor kan være en grund til at tale med en studerende. En chatbot kan være en nyttig generalprøve. Et dashboard kan være en anledning til at stille et spørgsmål. Skaden ligger i substitutionen, ikke i værktøjet.

## Hvad du kan gøre i denne uge

- Vælg én bedømt opgave, og skriv ned, hvad den ville vise med værktøjet lukket. Hvis svaret er »intet anderledes«, er opgaven problemet.
- Tilføj én uassisteret måling til et kursus, der i øjeblikket kun rapporterer assisteret præstation.
- Læs din institutions kontrakt om eksamensovervågning eller AI-værktøjer for vilkår om opbevaring, sekundær brug og databrud — og tjek, om samtykketeksten beskriver, hvad systemet faktisk optager.
- Bed en leverandør om uassisterede udfald og resultater for undergrupper. Hvis svaret er en demo, har du dit svar.
- Brug den anden halvdel af din næste session med underviserne på at redesigne bedømmelsen i stedet for på prompts.

## Hvor du kan gå videre

- [[addressing-common-misconceptions-ai-education]] — de forestillinger, der ligger bag disse praksisser, og hvordan man korrigerer dem uden nedladenhed.
- [[limitations-in-aied-research]] — hvad evidensgrundlaget endnu ikke kan bære.
- [[reducing-ai-misuse]] — strukturelle håndtag mod misbrug, og hvorfor de slår formaning.
- [[pedagogical-safety]] — hvad en vejleder kan gøre ved en lærende, mens den består enhver indholdskontrol.
- [[should-we-use-ai-detectors]] — detektorevidensen i sin helhed.
- [[checking-whether-educational-ai-works]] — hvordan man vurderer en påstand, før man tager den i brug.
