---
title: "Hvordan kan AI hjælpe studerende med læsning og læseforståelse?"
created: "2026-11-06T01:45:00-05:00"
type: faq
connected_faqs: [ai-multilingual-learners, reducing-over-reliance]
weight: 62
foundations: [ai-education]
pedagogy: [scaffolding, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
ethics: [accessibility]
audience: [instructors, curriculum designers, instructional designers]
level: [higher ed, secondary, primary education]
updated: "2026-11-08T04:27:04-05:00"
translation_of: "faqs/ai-support-reading-comprehension"
source_updated: "2026-11-06T02:10:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Hvis du underviser i et hvilket som helst fag, vælger du læsestof, tilpasser tekster og vurderer, om en kilde er for svær for dine studerende. AI kan hjælpe med hver af disse opgaver, men de sværhedsgrader, den giver dig, er ikke målinger af sværhedsgrad — de er skøn over en gennemsnitlig tekst og en gennemsnitlig læser, og de læsere, du faktisk underviser, kan være langt fra gennemsnittet. Denne FAQ fortæller, hvor værktøjerne reelt hjælper, hvor de svigter, og hvad du kan gøre ved det.

## Hvad AI reelt kan

**Find og tilpas tekster i stor skala.** AI er stærk til at finde kilder, forenkle ordforråd, generere ordlister og omdanne en passage til en [[study-with-ai|studievejledning eller et resumé]]. Brug den til de mekaniske dele af læseforberedelsen — scanning, niveaubestemmelse, udtræk af nøgletermer — og behold den menneskelige kontrol med det, der betyder noget.

**Modellér læseren frem for teksten.** Fordi læservariable bærer en stor del af signalet i, hvor svær en tekst føles, forudsiger værktøjer, der profilerer læseren, den oplevede sværhedsgrad bedre end nogen formel. I vidensbasens største studie vurderede 193 tyske gymnasieelever 3.954 sætninger, og profilbaserede modeller (bedste ensemble RMSE 0,822 mod en gennemsnitlig baseline på 1,070) slog teksternes Flesch-scorer, som vurderede det samme materiale langt sværere, end de studerende oplevede det — 72,8 % af annotationerne var lette eller meget lette ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck og Conrad, 2025]]). Den praktiske version: nogle få studerendes vurderinger af en passage slår enhver formels etiket.

## Hvor AI kommer til kort

**Sværhedsgrader er ikke målinger.** En etiket som »mellemniveau« eller en Flesch-score beskriver tekstens overflade, ikke dine studerendes oplevelse. Læserkarakteristika — sproget der tales hjemme, selvvurderet færdighed, endda køn — bar mere signal end tekststatistik i studiet ovenfor, og enigheden mellem annotatorer var lav (Krippendorffs alfa = 0,23) netop fordi den oplevede sværhedsgrad varierer mellem læsere. Behandl formler og etiketter som hypoteser, og kalibrér dem mod de studerende, der skal læse teksten.

**At bede en AI om at gå i dine studerendes sted virker heller ikke.** I samme studie kunne rolle-spil-promptede ChatGPT og Claude ikke gengive de studerendes oplevelse af sværhedsgrad, selv med mærkede eksempler — en LLM kan ikke [[simulating-students|simulere en læser]] godt nok til at bedømme en tekst for dig ([[thome-perceived-text-complexity-student-profiles-2025|Thome, Hertweck og Conrad, 2025]]).

**AI-skrevet tekst læses anderledes end menneskelig prosa.** På tværs af 14 modeller overbruger AI-sprog sjældne lavfrekvente ord og stablede navneord, dropper valgfrie ord og kører længere afhængigheder sammenlignet med genremæssigt matchende menneskelig skrivning; effekterne er stærkere i flerstrenget chat end i enstrengede essays, hvilket forfatterne forbinder med presset fra iterativ samtale ([[clark-ai-generated-language-readability-2026|Clark, Martin og Mahowald, 2026]]). Genererede forklaringer og genereret læsestof bærer begge denne profil, så en AI-skitseret tekst kan være sværere at bearbejde, end dens målte læseniveau antyder.

**AI-resuméer kan erstatte læsningen.** Et værktøj, der omdanner en artikel til et resumé, er nyttigt til at sortere, men hvis resuméet erstatter teksten, mister de studerende den forståelsestræning, som opgaven fandtes for at opbygge — samme fælde som [[reducing-over-reliance|overafhængighed]] andre steder.

## Hvad du kan gøre ved det

**Før du giver en tekst,** få en anden vurdering ud over værktøjet: skim den selv, hold øje med AI-prosaens profil ovenfor, hvis den blev genereret, og — stærkeste evidens — bed en eller to studerende om at prøve den. Et 5-minutters pilotforsøg med rigtige læsere slår enhver sværhedsalgoritme.

**Når du tilpasser en tekst med AI,** hold tilpasningen synlig og reviderbar. Originale og forenklede versioner side om side lader de studerende (og dig) se, hvad der ændrede sig, og giver flersprogede lærende et stillads, der ikke skjuler originalen ([[ai-multilingual-learners|hvordan AI behandler flersprogede lærende]] dækker risiciene for sproglig hensigtsmæssighed).

**Når du evaluerer et læseværktøj eller en grænseflade,** spørg, om det modellerer den enkelte læser eller sætter én global etiket. For andetsprogslæsere er forskellen ofte hele historien. For forskere er det åbne problem måling: [[reading-education|læseundervisning]]-siden kortlægger fire forskningslinjer — støtte under læsning, vurdering af læsning, adaptiv tekst og målingsspørgsmålet under alle tre ([[educational-measurement|måling]] er det svage led i kæden) — og rapporterer evidensen som lovende, men ujævn, så stærke påstande om et læseværktøjs gevinster fortjener samme skepsis som enhver [[checking-whether-educational-ai-works|AI-læringspåstand]].
