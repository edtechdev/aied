---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "En öppen källkods-Agent Skill och en privat webbläsareditor som gör arton regler för tydligare skrivande till lägen för utkast, omskrivning och granskning av prosa."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

**Clarity** parar en Agent Skill med en webbläsareditor, båda uppbyggda kring arton regler för skrivande som ”förtjänar sin läsare”. Skillen installeras i kodagenter som Claude Code och Codex med `npx skills add addyosmani/clarity` och arbetar sedan i tre lägen: granskningsläget kritiserar ett utkast och lämnar filen orörd, omskrivningsläget redigerar ett utkast på plats och intervjuläget ställer först frågor till skribenten och skriver sedan tillsammans utifrån svaren. Den [[feedback]] en skribent får riktas mot innehållet före stilen. Reglerna frågar vem texten är för och vad läsaren redan vet, driver på påståenden framför ämnen och det konkreta framför det abstrakta, och behandlar utfyllnad som ett problem med att inte veta vad texten är till för snarare än med ordförrådet.

Webbläsareditorn körs lokalt i sidan och laddar inte upp något utkast. Den rapporterar kännetecken för maskinskriven prosa, läsbarhet och luckor i innehållet, vilket gör den användbar för att granska text som en [[generative-ai|generativ AI]] producerat innan den når en läsare. Projektet är tydligt med att målet är skrivande som förblir igenkännbart författarens eget snarare än prosa konstruerad för att klara [[ai-detection|AI-detektering]], en distinktion lärare känner igen när de sätter en policy för AI-stött [[writing-education|skrivande]].

## Vad du bör veta innan du inför det

Förrådet publicerar ett utvärderingsprotokoll, före- och efterexempel i `samples/` och referensfiler bakom skillen, så att en granskare kan inspektera hur reglerna beter sig i stället för att lita på ett påstående; sidan här återger inget mätt resultat. Författaren är Addy Osmani, licensen är MIT och arbetet är oberoende snarare än en produkt av något lärosäte. Det är ungt och aktivt: skapat i augusti 2026, 54 commits, tre utgåvor med den senaste som version 0.2.1 i september, och omkring 250 stjärnor vid kontroll i september 2026. Tre bidragsgivare har fått in ändringar. Skillinstruktionerna laddas in i en agent som läsaren redan kör, så de vanliga förbehållen för [[prompt-engineering|promptteknik]] gäller: kvaliteten på kritiken beror på det utkast den får.

## Anslutna begrepp
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
