---
title: "Hvad bør undervisere undgå at gøre med AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Det meste vejledning om AI i uddannelse siger, hvad man kan prøve. Denne side samler de praksisser, som evidensen siger, man skal holde op med, ordnet efter den rolle, der skulle stoppe dem. Forkerte forestillinger behandles andre steder: [[addressing-common-misconceptions-ai-education|FAQ'en om fejlopfattelser]] tager sig af dem, og begrebssiden [[misconceptions]] forklarer, hvorfor de holder ved. Det, forskningen endnu ikke kan sige, hører under [[limitations-in-aied-research|begrænsninger i AIEd-forskning]]. Det følgende er skridtet efter overbevisningen: hvad folk faktisk gør, hvad det koster, og hvad man bør gøre i stedet.

Tre fejl går igen på tværs af alle roller.

1. **Substitution.** Et værktøj udfører den tænkning, den lærende skulle have udført, og outputtet bedømmes, som om den lærende havde gjort det. Opgaven, der afleveres, er en registrering af, hvad modellen kan, ikke af, hvad den studerende kan.
2. **Ufortjent evidens.** Et signal, der er billigt at indsamle, som selvtillid, flydende sprog, engagement eller en gennemførelsesrate, behandles som bevis for noget, det ikke kan vise. Et dashboard kan rapportere fyrre minutter i en vejledningssession; det kan ikke rapportere, om nogen lærte andengradsligningen.
3. **Struktur overladt til formaning.** En advarsel, en sætning i en politik eller en træningssession får til opgave at gøre det arbejde, som grænsefladedesign, bedømmelsesdesign eller styring skal gøre. Kursusbeskrivelsen siger, at AI skal bruges ansvarligt, og vejlederen afleverer stadig det færdige svar ved første prompt.

## Den korte version

**1.** Bedøm, citer eller fremhæv aldrig et output som bevis for den formåen, der frembragte det.

**2.** Indsaml altid den uassisterede måling sammen med den assisterede.

**3.** Behandl flydende sprog, selvtillid og engagement som træk ved brugen, ikke som læring.

**4.** Læg beskyttelsen ind i arbejdsgangen, ikke i en advarsel.

**5.** Gå ud fra, at alle data, værktøjet kan se, bliver opbevaret, kombineret og lækket.

**6.** Hvis påstanden kommer med en demo, men ikke med en sammenligning, er det markedsføring.

## For undervisere

**Certificér ikke output som formåen.** En poleret aflevering er bevis for en poleret aflevering. Hvis en studerende afleverer en litteraturgennemgang, hvis kilder du ikke kan kontrollere mod noget, kurset har undervist i, og bedømmelsen ikke kan skelne, hvad den studerende kan uden hjælp, er bedømmelsen holdt op med at måle det, som eksamensbeviset hævder ([[assessment-validity]], [[authentic-assessment]]). Løsningen er et redesign af opgaven; en strengere æreskodeks gør det ikke.

**Brug ikke en detektorscore som bevis for uredelighed.** I et kontrolleret studie af 642 publicerede abstracts markerede detektorerne 38–80% af retningslinjeoverholdende let AI-redigering og 9–15% af uændret menneskelig tekst, mens de fangede mindre end 4% af omskrivninger, der havde været gennem en humaniseringstjeneste ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). En uafhængig benchmark fandt, at ingen af 14 kommercielle værktøjer nåede 80% nøjagtighed, og simpel parafrasering halverer selv det ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Ved realistiske baserater overstiger falske positiver de sande ([[should-we-use-ai-detectors]]). En detektor kan starte en samtale; den kan ikke afslutte en.

**Tilføj ikke AI til en bedømmelse, du ikke har redesignet.** At sætte et værktøj på en opgave, der er designet til præstation uden hjælp, producerer præcis den karakterinflation, der skjuler tabet, med hjemmeopgaver op og eksamen ned. Spørg til hver bedømt opgave, hvad den uassisterede version ville vise, og ret opgaven først ([[reducing-ai-misuse]]). Hvis hjemmeopgavesættet og testen i timen prøver den samme færdighed, er det kun én af dem, der måler den studerende.

**Behandl ikke engagement som læring.** Tid brugt på opgaven, tilfredshed, omfanget af hjælpesøgning og chataktivitet er alle lette at instrumentere og alle forenelige med ingen læring overhovedet. I et 3 × 2-forsøg med 186 deltagere, der bedømte civilretlige sager på en LLM-understøttet platform, gav en beskyttelse, der skar de studerendes skift til en forkert AI-position ned fra 42–60.5% til 5.7–8.2%, ingen målbar læringseffekt i sessionen (β = 0.03, p = 0.18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Adfærden ændrede sig; læringsmålet gjorde ikke ([[student-engagement]]).

**Stol ikke på en advarsel på et sted, hvor grænsefladen kunne begrænse.** En vejleder, der kan producere det færdige svar, vil producere det under deadlinepres, uanset hvad kursusbeskrivelsen siger. Den beskyttelse, der virker, er bygget ind i interaktionen ([[reducing-ai-misuse]], [[pedagogical-safety]]). At tilbageholde det endelige svar i de første to forsøg er en designbeslutning; at bede de studerende om ikke at spørge om det er en anmodning.

**Indsæt ikke studerendes arbejde, IEP'er, disciplinærsager eller identificerbare udkast i et forbruger-værktøj.** Dataminimering er en designbeslutning, du træffer på den studerendes vegne, uanset om du har tænkt over det ([[privacy]]). Den gratis chatbotkonto, der besvarer et spørgsmål om en studerendes adfærdsplan, er også en kopi af den plan på en andens server.

## For studerende

**Aflever ikke den del, du skal øve dig på.** Antag, at opgaven er et essay på fem afsnit: du indsætter prompten i en chatbot, tager det udkast, den returnerer, og afleverer det. Det, du afleverer, er en registrering af, hvad modellen kan. Spørgsmålet er, hvilket kognitivt arbejde der flytter sig, ikke hvor meget AI du bruger. At udlicitere hjemmeopgaver hæver hjemmeopgavekarakteren, mens den sænker karakteren til eksamen uden hjælpemidler: på tværs af 26,811 gymnasieelever fulgt i 30 måneder steg hjemmeopgavekarakteren 18%, og eksamenskarakteren faldt 20% inden for seks måneder ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei og Wu, 2026]]). Den øvelse, der opbygger viden, man kan hente frem, gik til værktøjet ([[reducing-ai-misuse]]). Hvis øvelsen er pointen, kan værktøjet ikke udføre øvelsen.

**Læs ikke flydende sprog som nøjagtighed.** Flydende tekst er output fra en [[llm|sprogmodel]], uanset om indholdet er sandt, og den mekanisme, der gør den overbevisende, er den samme, der gør den forkert ([[hallucination-risk]]). Kontrollér den konkrete påstand, ikke tonen i afsnittet. Den vane opstår sjældent af sig selv: i et passivt sporet panel med 900 amerikanske voksne, der fik et AI-resumé, fulgte læserne en kilde, der blev citeret i det, i 1% af besøgene ([[trust-calibration-chatbots-design-problem-2026|Jaidka og Cai, 2026]]). Hvis din opgave kræver tre kilder, så åbn alle tre.

**Accepter ikke enighed som feedback.** Modeller bekræfter i væsentligt højere grad end mennesker: på tværs af 11 modeller bekræftede AI-svar brugerne 49% oftere end menneskelige svar, og det overskud er det, der får interaktionen til at føles støttende ([[ai-personal-coach-review-benefits-risks-2026|Potel og Kumashiro, 2026]]). En vejleder, der aldrig er uenig med dig, har fjernet det korrigerende signal, du kom for ([[ai-sycophancy]]). Bed om indvendingen, ikke anerkendelsen: »Hvad er der galt med dette argument, og hvad ville en skeptiker sige?«

**Byt ikke et spørgsmål for et svar, når du sidder fast.** Den produktive kamp, du springer over, er læringen. Hjælpesøgning, der henter et svar, er en anden adfærd end hjælpesøgning, der henter et hint ([[help-seeking]], [[desirable-difficulties]]). Brug værktøjer, der tilbageholder det færdige svar, og bed om næste skridt i stedet for løsningen.

**Indsæt ikke personlige oplysninger, helbredsoplysninger eller familieoplysninger i et værktøj for at få et bedre svar.** Værktøjet har ingen forpligtelse til at glemme dem, og prisen for privatlivet er ikke synlig i svarets kvalitet ([[privacy]]). En bedre prompt kræver ikke din diagnose, din adresse eller dine familiemedlemmers navne.

## For forældre og familier

**Lav ikke hjemmeopgaverne med værktøjet, og lad dem heller ikke blive lavet ved siden af dig.** Mønstret i dataene er karakterinflation med en skjult pris: i det samme panel over 30 måneder steg hjemmeopgavekarakteren 18%, mens karakteren til eksamen uden hjælpemidler faldt 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei og Wu, 2026]]). Et barn, der kommer hjem med perfekte hjemmeopgaver og dumper en kapitelprøve, viser dig præcis dette gab. Det, du kan tjekke, er processen. Kan dit barn forklare trinnet, gøre en opgave om på papir og sige, hvilken del det var usikker på? Hvis ikke, har værktøjet lavet opgaven.

**Lad ikke en chatbot blive fortrolig.** Indsmigrende systemer bekræfter langt mere end mennesker, 49% mere på tværs af 11 modeller, og den bekræftelse er det, der får dem til at føles trygge at tale med ([[ai-personal-coach-review-benefits-risks-2026|Potel og Kumashiro, 2026]]). I et stort longitudinelt studie vendte brugerne sig til indsmigrende AI for personlig rådgivning næsten lige så ofte som til nære venner og familie, med lavere tilfredshed i deres virkelige relationer ([[sycophantic-ai-social-interaction-2026]]). Et barn, der kommer med sorg til en model, der altid er enig, bliver ikke hørt. Det bliver spejlet. Hvis dit barn taler med en chatbot om et venskab eller et tab, er det øjeblikket til at spørge, hvem det ellers fortalte det til.

**Giv ikke en generativ chatbot til et lille barn og kald det superviseret, fordi du er i rummet.** Den aldersopdelte vejledning er konkret: stilladserede, ikke-generative aktiviteter for 9-12-årige, superviseret generativ brug med etisk ræsonnement fra 13 år ([[ai-guidance-children-under-13]]). For de yngste børn handler risikoen om overbevisning. Præoperationelle børn accepterer genereret indhold som sandt, og systemerne er ikke udviklingsmæssigt kalibreret i den feedback, de giver. Voksnes medbrug betyder at sidde ved siden af barnet og spørge, hvad legetøjet netop gjorde, ikke at holde opsyn fra døren ([[early-childhood-elementary-ai-education]]).

**Antag ikke, at skolens værktøj beskytter dit barns data, fordi skolen har valgt det.** Spørg, hvad der opbevares, hvor længe, om det træner noget, og hvem der ellers ser det ([[privacy]]). Bevidsthed følger ikke automatisk af eksponering: en måned efter en lektion, hvor en 7. klasse så deres egen loggede adfærd projiceret live, valgte 66% af de 47 elever stadig den mindst beskyttende chatbotindstilling ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Stil spørgsmålene til skolen skriftligt, og bed om svarene skriftligt.

**Brug ikke et detektorresultat til at anklage dit barn eller til at støtte en anklage fra en skole.** I et kontrolleret studie af 642 publicerede abstracts markerede detektorerne 9–15% af uændret menneskelig tekst og fangede mindre end 4% af humaniserede AI-omskrivninger ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Ved realistiske baserater overstiger falske positiver de sande ([[ai-detection]]). Behandl et flag som en grund til at bede om udkastshistorikken og en samtale, ikke som en konstatering.

**Konkludér ikke, at et forbud mod værktøjet er den sikre løsning.** For lidt tillid er en kalibreringsfejl med sin egen pris, nemlig tabt formåen, og den kompetence, der betyder noget, er afstemt selvtillid, ikke undgåelse ([[trust-calibration]]). Det nyttige træk som forælder er det samme, som forskningen støtter for studerende: kræv et verifikationstrin, og gør det billigt nok til, at et træt barn faktisk gør det ([[verify-ai-output]]). At bede om at se den kilde, en chatbot brugte, koster et minut; at forbyde chatbotten koster øvelsen.

**Forveksl ikke et indholdsfilter med sikkerhed.** Filtre handler om, hvad et system vil sige. De handler ikke om, hvad en interaktion gør ved en lærende: nedbrudt øvelse, indsmigrende enighed eller ujævne afvisninger ([[pedagogical-safety]]).

## For uddannelses- og underviserudviklere

**Kør ikke værktøjstræning og kald det AI-kompetence.** En session om [[prompt-engineering|prompting]] lærer et produkts grænseflade. [[ai-literacy|AI-kompetence]] er evnen til at vurdere, hvornår værktøjet bør bruges, hvad det gør, og hvad der skal kontrolleres. Undervisere, der lærer knapperne uden dømmekraften, går derfra med selvtillid og uden kalibrering ([[teacher-ai-competency]]). En workshop, der slutter med, at alle kan generere en undervisningsplan, og ingen kan sige, hvornår den plan ikke bør bruges, har undervist i grænsefladen.

**Kør ikke et engangskursus for undervisere og forvent, at praksis ændrer sig.** Evidensen om [[professional-training|professionel læring]] er konsistent om varighed og opfølgning: enkelte arrangementer flytter selvrapporteret selvtillid, sjældent klasserumspraksis, og gevinsten i selvtillid kan skjule, at der ikke er sket en ændring ([[educational-development]]). En session på to timer i august, uden opfølgning i oktober, er en indsats for selvtilliden.

**Ignorér ikke det bedømmelsessystem, du lader blive stående.** Undervisere tager kun den praksis til sig, du underviser i, hvis den bedømmelse, de selv måles på, ikke straffer den. En workshop om AI-robust opgavedesign, der løber ved siden af et uændret eksamensregime, lærer underviserne, at træningen er pynt.

**Forevis ikke den ukritiske brug, du advarer imod.** At demonstrere et værktøj ved at generere en undervisningsplan foran underviserne, uden et verifikationstrin, lærer publikum, at outputtet er produktet. Generér den foran dem, og markér derefter de to påstande, der skal kontrolleres.

**Acceptér ikke en leverandørdemo som evidens for effektivitet.** Den påstand, du vurderer, handler om læring, og en demo viser formåen. Bed om uassisterede udfald, resultater for undergrupper og sikkerhedstest over flere ture ([[checking-whether-educational-ai-works]]).

## For udviklere af undervisningssoftware

**Optimér ikke den metrik, der er let at logge.** Sessionslængde, antal beskeder og tilfredshedsvurderinger bliver bedre under næsten enhver ændring; læring gør ofte ikke. Det samme team, der udgiver en beskyttelse, kan udgive et dashboard, der belønner interaktionsvolumen, og de to vil pege i modsatte retninger ([[learning-analytics]], [[student-engagement]]). Hvis dit succeskriterium er beskeder pr. session, har du bygget et produkt, der belønner studerende for at blive i chatten.

**Udgiv ikke en detektor uden et valideringsstudie mod konstruktet.** En benchmark med femten EEG-modeller nåede 0.9853 i F1 under stratificeret krydsvalidering; Trialuafhængig Group K-Fold, der respekterer trialgrænserne, sænkede toppen til 0.6038 mod et tilfældighedsniveau på 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara og Halloluwa, 2026]]). En smiledetektor kan køre *negativt* mod observatørvurderet empati, fordi den mangler den kontekst, en menneskelig bedømmer har ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Offentliggør valideringsprotokollen sammen med overskriftstallet.

**Udled ikke affekt, opmærksomhed eller »engagement« fra ansigter og kroppe uden samtykke og et angivet formål.** Risikoen over flere ture er ikke risikoen ved en enkelt tur: i én gennemgang om pædagogisk sikkerhed eskalerede fejlene fra 17.7% ved evalueringer med en enkelt tur til 77.8% ved dem med flere ture ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Et system, der er certificeret på isolerede prompts, er certificeret på en interaktion, som studerende ikke har ([[pedagogical-safety]], [[privacy]]).

**Skjul ikke overdragelsen.** En studerende, der ikke kan se, hvornår en vejleder genererer versus henter, eller hvornår et menneske er inde i processen, kan ikke kalibrere tilliden til den. [[automation-bias|Automatiseringsbias]] virker renest, når systemet har ret, og mennesket er holdt op med at kontrollere ([[trust-calibration]]). Sig i grænsefladen, hvornår et menneske vil læse arbejdet.

**Design ikke til benchmark og hævd så, at det gælder klasserummet.** Benchmarkpræstation er en egenskab ved benchmarken. Rapportér de brugsbetingelser, du testede, populationen og opgaverne; ellers vil tallet blive læst som et løfte om en anden kontekst ([[limitations-in-aied-research]]).

**Gør ikke værktøjet til den eneste vej til hjælp.** Hvis en studerendes adgang til [[feedback|feedback]] afhænger af en models tilgængelighed, kvote eller licens, er ligestillingsspørgsmålet allerede afgjort af indkøbet ([[equity-in-ai-education]]).

## For uddannelsesadministratorer

**Køb ikke påstande om formåen som udfaldsevidens.** Leverandører kan demonstrere et produkt; kun en evaluering kan demonstrere læring. Kræv uassisterede udfald, resultater for undergrupper, frafald og en plan for, hvad der sker, når piloten slutter ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). En demo viser vejlederen løse et problem; den viser ikke en studerende løse det næste.

**Indfør ikke overvågning, fordi den er tilgængelig.** Eksamensovervågningssystemer optager ansigtsbilleder, identitetsdokumenter, rumskanninger inklusive 360-graders gennemgange og mikrofonlyd. En gennemgang af 80 studier fandt, at kun 25% overhovedet behandlede etiske spørgsmål, 35% offentliggjorde ikke deres datasæt, og 30% kunne ikke reproduceres ([[automated-online-exam-proctoring-decade-review-2026|Malhotra og Chhabra, 2026]]). Prisen lander på de studerende, og evidensgrundlaget er tyndere, end kontrakten antyder ([[privacy]], [[remote-proctoring]]).

**Skriv ikke en politik, der kun forbyder, og kald det styring.** Et forbud uden redesign af bedømmelsen, uden støtte og uden klagemulighed flytter adfærden i stedet for at forhindre den, og det straffer de studerende, der er dårligst stillet til at bestride en falsk anklage. [[governance|Politik]] skal også dække bedømmeren: i en red-team-test af en dagligdags bedømmelsesarbejdsgang flyttede to af fem prompt-injektionsstrategier skjult i en aflevering et dumpet essay til bestået med 100% og 94% succes på tværs af filtyper ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). En politik, der binder studerende og ikke bedømmelsespipelinen, er en halv politik.

**Sæt ikke lighedstegn mellem ibrugtagning og forbedring.** Et dashboard, der rapporterer brug, tilfredshed og gennemførelse, vil se ud som succes, mens læringsmålet står stille. Beslut på forhånd, hvilket udfald der ville få dig til at opsige kontrakten ([[ai-ed-evaluation]]). Skriv det tal ned, før piloten begynder.

**Lad ikke tilgængelighed ankomme som en anmodning om særlige hensyn.** I en scoping-gennemgang af 40 studier af digitale hjælpeteknologier til [[neurodiversity|neurodivergente]] studerende gjorde 28 en formel diagnose til en betingelse for deltagelse. Den diagnosebetingede model udelukker enhver lærende med behov og uden label ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## For uddannelsesforskere

**Lad ikke selvrapportering bære den kausale påstand.** Selvtillid, oplevet læring og tilfredshed er udfald, men de er ikke de udfald, som de fleste studier siger, de måler. [[empathy|empati]]-litteraturen er det klareste tilfælde: et felt, der har til hensigt at undervise i empati, måler for det meste komfort, og en gennemgang af 17 studier fandt selvtillidsgevinster langt hyppigere end evidens for empati i sig selv ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail og Zafira, 2026]]; [[self-report-measures]]).

**Citer ikke en effekt uden dens design.** I en kritisk gennemgang af 80 HCI-studier af [[critical-thinking|kritisk tænkning]] med AI kørte 42 (52%) uden kontrolgruppe ([[critical-review-critical-thinking-hci-research-ai-2026]]). En overskriftseffekt fra 30 studerende på ét kursus på én institution er den almindelige form for en skrøbelig påstand ([[limitations-in-aied-research]]).

**Rapportér ikke heterogenitet uden modellen.** De samme data giver I² = 82.98% under en fixed-effect-model og I² = 15.75% under en random-effects-model ([[ai-supported-instruction-stem-meta-analysis-2026]]). Et citeret I² uden sin model kan ikke fortolkes ([[meta-analysis-systematic-review]]).

**Generalisér ikke fra én kontekst og kald det et fund.** Ét kursus, én institution, én modelversion, ét sprog. Modeladfærd ændrer sig med hver udgivelse, og detektorer trænet på én generation mister recall på den næste ([[research-gaps-aied]], [[ai-detection]]).

**Behandl ikke en korrelation mellem interaktion og udfald som en mekanisme.** Promptvolumen måler ikke kognitiv udlicitering. Klynger efter volumen adskilte sig ikke i fordelingen af kognitivt arbejde, og manuelt kodet dialog fandt slet ingen udlicitering i 49.6% af 125 dialoger ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Mål arbejdet selv.

**Offentliggør ikke et begrænsningsafsnit, der kunne være skrevet før studiet.** Navngiv den konkrete trussel, det konkrete antal og den påstand, den afgrænser. Det er det, der gør en begrænsning brugbar for den næste læser ([[interpreting-and-applying-aied-research]]).

## Hvorfor de hører sammen

Hvert punkt ovenfor ophøjer en stedfortræder til en dom. Essayet står for forfatteren, scoren står for uredeligheden, smilet står for empatien, og demoen står for læringen. Rettelsen er altid den samme: navngiv konstruktet, find en måling, der kunne falde den anden vej ud, og indsaml den sammen med den bekvemme måling.

Ingen af disse forbehold betyder, at værktøjet altid er forkert. En detektor kan være en grund til at tale med en studerende. En chatbot kan være en nyttig generalprøve. Et dashboard kan være en anledning til at stille et spørgsmål. Det, der gør skade, er substitutionen.

## Hvad du kan gøre i denne uge

- Vælg én bedømt opgave, og skriv ned, hvad den ville vise med værktøjet lukket. Hvis svaret er »intet anderledes«, er opgaven problemet.
- Tilføj én uassisteret måling til et kursus, der i øjeblikket kun rapporterer assisteret præstation.
- Læs din institutions kontrakt om eksamensovervågning eller AI-værktøjer for vilkår om opbevaring, sekundær brug og databrud, og tjek, om samtykketeksten beskriver, hvad systemet faktisk optager.
- Bed en leverandør om uassisterede udfald og resultater for undergrupper. Hvis svaret er en demo, har du dit svar.
- Brug den anden halvdel af din næste session med underviserne på at redesigne bedømmelsen i stedet for på prompts.

## Hvor du kan gå videre

- [[addressing-common-misconceptions-ai-education]]: de forestillinger, der ligger bag disse praksisser, og hvordan man korrigerer dem uden nedladenhed.
- [[limitations-in-aied-research]]: hvad evidensgrundlaget endnu ikke kan bære.
- [[reducing-ai-misuse]]: strukturelle håndtag mod misbrug, og hvorfor de slår formaning.
- [[pedagogical-safety]]: hvad en vejleder kan gøre ved en lærende, mens den består enhver indholdskontrol.
- [[should-we-use-ai-detectors]]: detektorevidensen i sin helhed.
- [[checking-whether-educational-ai-works]]: hvordan man vurderer en påstand, før man tager den i brug.
