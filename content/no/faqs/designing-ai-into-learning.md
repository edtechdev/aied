---
title: "Hvordan bør AI designes inn i læringsopplevelsen?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
updated: "2026-10-29T15:11:34-04:00"
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Moduloversikten har en linje som sier «AI-aktivitet», og ingen kan si hva den erstatter. Eller en lærer har bedt om å legge til en chatbot i et emne som allerede fungerer, og jobben din er å plassere den uten å ødelegge den delen som gjorde emnet godt.

Start fra læringsmålet og fra aktiviteten som skaper det. Den samme modellen kan være en støtte, en [[socratic-method|sokratisk]] partner, en leser av utkast, en [[simulation|simulering]] eller en svarmaskin, og hvilken du får, avhenger av designet snarere enn av modellen. Navngi modusen du bygger, legg den lærendes forsøk før noen hjelp dukker opp, og behold minst én rute gjennom emnet som går uten verktøyet.

## Kortversjonen

**1.** Skriv setningen om hva de lærende kan gjøre etterpå uten verktøyet, og sjekk hver AI-funksjon mot den.

**2.** Sekvenser interaksjonen: den lærende forsøker, AI støtter, den lærende vurderer eller reviderer, den lærende demonstrerer.

**3.** Navngi modusen på ICAP-stigen. Omgåelse og støtte kan være samme verktøy på ulike trinn.

**4.** Plasser AI der emnesekvensen allerede forutsetter en bestemt aktivitet, ikke til slutt som en bonus.

**5.** Hold verktøyet tilbake mens en kapasitet dannes, og gjenopprett det ved en kontrollpunkt studenten ikke kan jukse seg forbi.

## Avgjør hva den lærende gjør uten verktøyet

Konseptet [[pedagogy|Pedagogikk og undervisningsstrategier]] i kunnskapsbasen gir testen: bevarer konfigurasjonen aktiviteten som gir den tiltenkte læringen? Svar på det på papir, før noen velger en funksjon.

[[finkelstein-principled-ai-education-2025|Rammeverket for prinsipiell AI-utdanning]] formulerer hovedregelen: teknologi skal forsterke snarere enn fortrenge de menneskelige evnene utdanningen har som mål å utvikle. Skrevet som en test for en modul betyr det å navngi kapasiteten, navngi aktiviteten som bygger den, og spørre om AI ligger inne i den aktiviteten eller ved siden av den.

## Legg forsøket før hjelpen

Standardmønsteret som overlever kontakt med en ekte klasse: **den lærende forsøker, AI støtter, den lærende vurderer eller reviderer, den lærende demonstrerer forståelse.**

I praksis betyr det å be om en første forutsigelse eller løsning før noen hjelp dukker opp, og å foretrekke spørsmål, hint, eksempler, motargumenter og [[feedback]] framfor umiddelbar fullføring. Bevar [[productive-failure|produktiv feiling]] der den tjener læringen. Krev verifisering av påstander med konsekvenser, bygg inn forklaring og [[learning-by-teaching|tilbakelæring]], og trapp ned støtten etter hvert som kompetansen vokser. Behold noe AI-fritt arbeid så de lærende kan kalibrere hva de klarer alene.

Syntesen [[reducing-ai-misuse|Redusere AI-misbruk]] anbefaler samme form som en sekvens med tenk først, AI etterpå, reflekter, med bevisste evalueringspunkter.

## Navngi modusen du designer for

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall og Panaderos kjøkkenmaskinanalogi]] rammer inn spørsmålet på nytt, fra om de lærende bruker [[generative-ai|generativ AI]] til hvordan den bruken former det de blir. Koplet til [[icap-framework|ICAP]] og [[samr-model|SAMR]] gir den en stige. Å sette en hel oppgave ut til AI uten revisjon eller [[critical-thinking|kritisk engasjement]] er passiv substitusjon, og det risikerer [[cognitive-offloading|ferdighetstap og overavhengighet]]. Å [[prompt-engineering|finpusse prompter]] og kryssjekke output krever [[prior-knowledge|forkunnskap]] og [[self-regulated-learning|selvregulering]], som er aktiv eller augmentering. Å bruke AI til å idémyldre, lage disposisjon og evaluere eget arbeid er konstruktiv eller modifisering. AI som en reell dialogpartner for samkonstruksjon og adaptiv tilbakemelding er interaktiv eller redefinering.

Implikasjonen er direkte. Det samme verktøyet er en omgåelse på ett trinn og en [[scaffolding|støtte]] på det neste, så designdokumentet bør navngi den tiltenkte modusen.

## Plasser det der sekvensen forutsetter en aktivitet

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec og Horvat]] analyserte den planlagte sekvensen av 29 064 undervisnings- og læringsaktiviteter på tvers av 554 emner og fant en synlig designgrammatikk. Ervervsaktiviteter er det vanligste inngangspunktet og den største enkelttypen, over 20 %. Læringstypen følger det tiltenkte Bloom-nivået, med erverv som faller fra omtrent 50 % på nivå 1 til omtrent 20 % på nivå 6, og produksjon som stiger over 20 % på nivå 5 og 6. Den sterkeste overgangen i dataene er vurdering til diskusjon, på 0,332.

To lærdommer følger for AI-design. Plasser verktøyet der sekvensen forutsetter en aktivitetstype. Og fordi tilbakemelding klumpet seg sammen med [[collaborative-learning|samarbeid]], [[group-work|gruppearbeid]] og [[teacher-role|lærerens]] tilstedeværelse, er strukturer med medstudenter og synkrone strukturer der AI-støtte bør kobles inn, ikke der den bør erstatte.

## Bestem hva som skal holdes tilbake, og når det skal gjenopprettes

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli og kollegenes rammeverk «hold tilbake, forsterk deretter»]] flytter dette til programnivå. Hold et generativt verktøy tilbake mens en kapasitet dannes, og gjenopprett det når studenten kan styre det, vurdere det den får tilbake, og svare for det, med et kontrollpunkt som er vanskelig å jukse seg forbi ved hvert vendepunkt.

Enheter styres av et kriterium om danning versus [[cognitive-offloading|avlasting]]: tillatt der de støtter engasjert arbeid, utelukket der de tapper oppmerksomhet. Det gjør avlastningsbeslutninger til et spørsmål om [[curriculum-design|læreplan]] og [[governance|styring]] som kommer før design på emnenivå og ikke etter.

## Sjekk at sammenhengen er reell

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes og kollegenes diskursanalyse]] av 14 veiledningsdokumenter for høyere utdanning advarer om at effektivitetsrammet rådgivning, som å bruke generativ AI til å lage utkast til læringsutbytter, vurderingsmatriser og emneoversikter, gir [[assessment|sammenheng]] som ser sammenhengende ut mens den forsømmer den konstruktive halvdelen. Læringsutbytter, aktiviteter og vurderinger genereres som atskilte elementer snarere enn innbyrdes avhengige.

Botemidlet deres er ny sekvensering. Lærere bør forstå konstruktiv sammenheng godt nok til å styre, forhøre seg om og avvise AI-output før de delegerer noen del av den, fordi det å godta en plausibel overflate er den samme evalueringsfeilen lærere advarer studentene mot. Der AI brukes, argumenterer de for institusjonelt avgrensede, [[rag|hentingsforsterkede]] systemer konfigurert rundt lokal policy og kvalitetsstandarder snarere enn generiske internettrente standarder.

## Hva instruksjonsdesignere tar feil om

Å legge til AI teller som intervensjonen. Det som endrer læring, er aktiviteten studenten utfører, og AI er én del av rammen rundt den. Et velplassert hint og et velplassert svar kan kjøre på samme modell og gi motsatt læring.

Å skrive tillatelsen er designarbeidet. En tillatelse fastsetter hva som er lov. Den fastsetter ikke sekvensen, modusen eller kontrollpunktet, og de tre avgjør om aktiviteten overlever.

Effektivitet er målet med nyutformingen. Å lage læringsutbytter og vurderingsmatriser med en modell er raskt, og analysen av de 14 dokumentene fant at resultatet kan se sammenhengende ut mens delene slutter å støtte hverandre.

## Hva som kommer tilbake på deg

**«Studentene kommer til å bruke det uansett, så det er naivt å designe rundt det.»** De kommer til å gjøre det, og det er argumentet for å spesifisere modusen og undervise i den. En modul som navngir modusen, gir studenten noe å forholde seg til.

**«Vi har ikke tid til å sekvensere et helt emne på nytt.»** Da sekvenserer du én modul og én vurdering på nytt. Vendepunktet med hold tilbake og forsterk er ett kontrollpunkt, og sekvensen med tenk først er tre instrukser på et ark.

**«AI-funksjonen vår har allerede guardrails.»** Guardrails begrenser hva modellen sier. De avgjør ikke om den lærende forsøkte først, om støtten trappes ned, eller om en AI-fri rute finnes. Det er designbeslutninger i emnet ditt, ikke innstillinger i produktet.

## Hva du kan gjøre denne uken

**1.** Skriv setningen om prestasjon uten hjelp for modulen, og sett den over aktivitetslisten.

**2.** Merk den tiltenkte ICAP-modusen ved hver AI-aktivitet i oversikten.

**3.** Flytt én AI-aktivitet slik at den lærende forsøker problemet først.

**4.** Velg én AI-fri rute gjennom modulen og merk den for studentene.

**5.** Navngi ett vendepunkt der verktøyet holdes tilbake, og kontrollpunktet som gjenoppretter det.

## Hvor du kan gå videre

[[learning-design|Instruksjonsdesign]], [[active-learning|Aktiv læring]] og [[scaffolding]] har designvokabularet. For standardene på interaksjonsnivå som avgjør om en designet aktivitet bevarer læringen, se [[reduce-ai-cheating]] og [[redesign-assessment-ai-era]]. [[designing-educational-ai-software]] dekker hvordan de samme prinsippene begrenser programvaren selv, og [[developing-ai-tutor]] oversetter dem til en veileders arkitektur.
