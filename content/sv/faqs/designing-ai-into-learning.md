---
title: "Hur ska AI utformas in i lärandeupplevelsen?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
updated: "2026-10-29T17:10:58-04:00"
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Modulöversikten har en rad som säger ”AI-aktivitet” och ingen kan säga vad den ersätter. Eller också har en lärare bett att få lägga till en chattbot i en kurs som redan fungerar, och din uppgift är att placera den utan att bryta den del som gjorde kursen fungerande.

Utgå från lärandemålet och från den aktivitet som producerar det. Samma modell kan vara en stötta, en [[socratic-method|sokratisk]] partner, en läsare av utkast, en [[simulation|simulering]] eller en svarsmaskin, och vilken du får beror på designen snarare än på modellen. Namnge det läge du bygger, sätt studentens försök före all hjälp som dyker upp, och behåll minst en väg genom kursen som går utan verktyget.

## Kortversionen

**1.** Skriv meningen om vad studenterna kan göra efteråt utan verktyget, och kontrollera varje AI-funktion mot den.

**2.** Sekvensera interaktionen: studenten försöker, AI stöder, studenten utvärderar eller reviderar, studenten visar.

**3.** Namnge läget på ICAP-stegen. Bypass och stöttning kan vara samma verktyg på olika steg.

**4.** Placera AI där kurssekvensen redan avser en specifik aktivitet, inte i slutet som en bonus.

**5.** Håll tillbaka verktyget medan en förmåga formas, och återställ det sedan vid en kontrollpunkt som studenten inte kan fejka.

## Bestäm vad studenten gör utan verktyget

Kunskapsbasens begrepp [[pedagogy|Pedagogik och undervisningsstrategier]] levererar provet: bevarar konfigurationen den aktivitet som producerar det avsedda lärandet? Svara på det på papper, innan någon väljer en funktion.

[[finkelstein-principled-ai-education-2025|Ramverket för principfast AI-utbildning]] anger den allmänna regeln: teknik bör förstärka snarare än tränga undan de mänskliga förmågor som utbildningen avser att utveckla. Skriven som ett prov för en modul innebär det att namnge förmågan, namnge den aktivitet som bygger den och fråga om AI ligger inne i den aktiviteten eller bredvid den.

## Sätt försöket före hjälpen

Det standardmönster som klarar mötet med en verklig klass: **studenten försöker, AI stöder, studenten utvärderar eller reviderar, studenten visar förståelse.**

I praktiken betyder det att be om en inledande förutsägelse eller lösning innan någon hjälp dyker upp, och att föredra frågor, ledtrådar, exempel, motargument och [[feedback|återkoppling]] framför omedelbart färdigställande. Bevara [[productive-failure|produktivt misslyckande]] där det tjänar lärandet. Kräv verifiering av konsekvensbärande påståenden, bygg in förklaring och [[learning-by-teaching|undervisa tillbaka]], och trappa ner stödet i takt med att kompetensen växer. Behåll en del AI-fritt arbete så att studenterna kan kalibrera vad de klarar själva.

Sammanställningen [[reducing-ai-misuse|Minska AI-missbruk]] rekommenderar samma form som en sekvens av tänka först, AI sedan, reflektera, med avsiktliga utvärderingskontrollpunkter.

## Namnge det läge du designar för

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall och Panaderos analogi med köksmaskinen]] omramar frågan från om studenterna använder [[generative-ai|generativ AI]] till hur användningen formar vad de blir. Överförd på [[icap-framework|ICAP]] och [[samr-model|SAMR]] ger den en stege. Att helt lägga ut en uppgift utan revidering eller [[critical-thinking|kritiskt engagemang]] är passiv substitution, och det riskerar [[cognitive-offloading|färdighetsförlust och överberoende]]. Att [[prompt-engineering|förfina promptar]] och korskontrollera utdata kräver [[prior-knowledge|förkunskaper]] och [[self-regulated-learning|självreglering]], vilket är aktivt eller augmentering. Att använda AI för att brainstorma, göra disposition och utvärdera eget arbete är konstruktivt eller modifiering. AI som en verklig samtalspartner för samkonstruktion och adaptiv återkoppling är interaktivt eller omdefiniering.

Implikationen är direkt. Samma verktyg är en bypass på ett steg och en [[scaffolding|stötta]] på nästa, så designdokumentet bör namnge det avsedda läget.

## Placera det där sekvensen avser en aktivitet

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec och Horvat]] analyserade den planerade sekvensen av 29 064 undervisnings- och lärandeaktiviteter i 554 kurser och fann en synlig designgrammatik. Aktiviteter av förvärvstyp är den vanligaste ingången och den största enskilda typen, över 20 %. Lärandetypen följer den avsedda Bloom-nivån, där förvärv sjunker från omkring 50 % på nivå 1 till omkring 20 % på nivå 6 och produktion stiger över 20 % på nivåerna 5 och 6. Den starkaste övergången i data är bedömning till diskussion, på 0,332.

Två lärdomar följer för AI-design. Sätt verktyget där sekvensen avser en aktivitetstyp. Och eftersom återkoppling klustrade med [[collaborative-learning|samarbete]], [[group-work|grupparbete]] och [[teacher-role|lärarens]] närvaro, är kamrat- och synkronstrukturer där AI-stödet bör kopplas in, inte där det bör ersätta.

## Bestäm vad som ska hållas tillbaka, och när det ska återställas

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli och kollegors ramverk ”håll tillbaka, förstärk sedan”]] flyttar detta till programnivå. Håll tillbaka ett generativt verktyg medan en förmåga formas, och återställ det sedan när studenten kan styra det, bedöma vad det ger tillbaka och svara för det, med en kontrollpunkt som är svår att fejka vid varje gångjärn.

Enheter styrs av ett kriterium för formande kontra [[cognitive-offloading|avlastning]]: tillåtna där de stöder engagerat arbete, uteslutna där de dränerar uppmärksamhet. Det förvandlar avlastningsbeslut till en [[curriculum-design|läroplan]]- och [[governance|styrningsfråga]] som kommer före designen på kursnivå snarare än efter.

## Kontrollera att samstämmigheten är verklig

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes och kollegors diskursanalys]] av 14 vägledningsdokument för högre utbildning varnar för att effektivitetsinriktade råd, som att använda generativ AI för att skriva utfall, bedömningsmatriser och kursöversikter, producerar [[assessment|samstämmighet]] som ser samstämmig ut medan den försummar den konstruktiva halvan. Utfall, aktiviteter och bedömningar genereras som separata poster snarare än som ömsesidigt beroende.

Deras botemedel är ny sekvensering. Lärare bör förstå konstruktiv samstämmighet tillräckligt väl för att styra, förhöra och avvisa AI-utdata innan de delegerar någon del av den, eftersom att acceptera en trovärdig yta är samma utvärderingsfel som lärare varnar studenter för. Där AI används argumenterar de för institutionellt avgränsade, [[rag|retrieval-förstärkta]] system konfigurerade kring lokal policy och lokala kvalitetsstandarder snarare än generiska internettränade defaultvärden.

## Vad lärandedesigners missförstår

Att lägga till AI räknas som insatsen. Det som förändrar lärandet är aktiviteten studenten utför, och AI är en del av inramningen för den. En välplacerad ledtråd och ett välplacerat svar kan köras på samma modell och ge motsatt lärande.

Att skriva tillståndet är designarbetet. Ett tillstånd anger vad som är tillåtet. Det anger inte sekvensen, läget eller kontrollpunkten, och de tre avgör om aktiviteten överlever.

Effektivitet är målet för ombearbetningen. Att skriva utfall och bedömningsmatriser med en modell går snabbt, och analysen av de 14 dokumenten fann att resultatet kan se samstämmigt ut medan delarna slutar stödja varandra.

## Vad som kommer att slå tillbaka mot dig

**”Studenterna kommer att använda det ändå, så det är naivt att designa runt det.”** De kommer att göra det, vilket är argumentet för att ange läget och undervisa i det. En modul som namnger läget ger studenten något att rätta sig efter.

**”Vi har inte tid att sekvensera om en hel kurs.”** Sekvensera då om en modul och en bedömning. Gångjärnet för håll tillbaka och förstärk är en kontrollpunkt, och sekvensen tänka först är tre instruktioner på ett utdelningsblad.

**”Vår AI-funktion har redan skyddsräcken.”** Skyddsräcken begränsar vad modellen säger. De avgör inte om studenten försökte först, om stödet trappas ner eller om en AI-fri väg finns. Det är designbeslut i din kurs, inte inställningar i produkten.

## Vad du ska göra den här veckan

**1.** Skriv meningen om prestation utan stöd för modulen och sätt den ovanför aktivitetslistan.

**2.** Markera det avsedda ICAP-läget bredvid varje AI-aktivitet i översikten.

**3.** Flytta en AI-aktivitet så att studenten försöker lösa problemet först.

**4.** Välj en AI-fri väg genom modulen och märk den för studenterna.

**5.** Namnge ett gångjärn där verktyget hålls tillbaka, och den kontrollpunkt som återställer det.

## Vart du går härnäst

[[learning-design|Instruktionsdesign]], [[active-learning|Aktivt lärande]] och [[scaffolding|stöttning]] innehåller designvokabulären. För de interaktionsnivådefaults som avgör om en designad aktivitet bevarar lärandet, se [[reduce-ai-cheating]] och [[redesign-assessment-ai-era]]. [[designing-educational-ai-software]] täcker hur samma principer begränsar mjukvaran själv, och [[developing-ai-tutor]] översätter dem till en handledares arkitektur.
