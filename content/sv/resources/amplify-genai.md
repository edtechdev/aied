---
title: "Amplify GenAI"
created: "2026-11-12T11:26:00-05:00"
updated: "2026-11-12T12:09:00-05:00"
type: resource
summary: "Vanderbilts MIT-licensierade företagsplattform för generativ AI, distribuerad i institutionens eget AWS-konto: anpassade assistenter över lokala dokument, sökförstärkta svar, delning inom organisationen och kostnadsredovisning ner till det enskilda meddelandet."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinöversättning av denna engelska sida, ännu inte granskad av en modersmålstalare.*

Amplify GenAI är den motsatta satsningen mot en campusövergripande licens till en kommersiell assistent: institutionen driver plattformen själv, i sitt eget Amazon Web Services-konto, och betalar för det den använder. Vanderbilt byggde den för sin egen community, släppte den under MIT i tre repon och erbjuder den nu andra organisationer som ett alternativ till företagsavtal per plats – argumentet är att den dyra delen bör vara modellerna, inte antalet platser.

## Vad du kan göra med den

Användare bygger anpassade assistenter genom att ladda upp dokument eller ansluta datakällor, och assistenterna svarar med [[rag|retrieval-förstärkt generering]] över materialet i stället för enbart från allmän träning. Assistenterna kan delas inom organisationen, kedjas ihop i en konversation och ges promptmallar; plattformen producerar också PowerPoint- och Word-filer, diagram och visualiseringar. Administratörer får det en delad tjänst behöver: kostnadsredovisning ner till meddelandenivå, gränser per användare, mappar och arbetsytor samt SSO, allt i en driftsättning som institutionen kontrollerar.

Det designbeslut som betyder mest för ett [[higher-ed|college]] är redovisningsmodellen. Vanderbilt rapporterar att med 1 300 pilotanvändare var kostnaden per användare cirka \$3 per månad inklusive AWS, och att hälften av dessa användare förbrukade mindre än \$1 per månad i tokens – siffror som universitetet presenterar som en fallstudie, inte som ett reviderat riktmärke. Förbrukningsbaserad fakturering gynnar en campus där en minoritet av användarna gör det mesta av arbetet, vilket är den normala formen för AI-införande, och den gör ekonomiavdelningens fråga (”vad kostar det här per student?”) besvarbar från loggar i stället för från ett avtal.

## Vem den är för

Central IT och CIO-kanslier som redan kör arbetslaster i AWS och vill ha ett alternativ till en kommersiell företagsassistent som communityn stöder; lärare som behöver assistenter grundade i kursmaterial utan att skicka det till en leverantörs konsumentprodukt; och institutioner som vill ha en enda plats att se vad människor gör med modeller. Eftersom den distribueras till institutionens eget konto besvaras datahemvistfrågan av driftsättningen i stället för av en leverantörs löfte.

## Noteringar och förbehåll

Gratis att licensiera, inte gratis att driva: institutionen betalar AWS och modellleverantörerna. Modellval går via Amazon Bedrock (Anthropic, Mistral) eller OpenAI och Microsoft Azure, och att köra egna lokala modeller är inte implementerat. Projektet säger rakt ut att det inte kan stödja enskilda driftsättningar och hänvisar organisationer till kommersiella partner – så den realistiska kostnaden omfattar personal eller en entreprenör. Det är en driftsättning i tre repon (frontend, backend, infrastruktur) med tiotals stjärnor snarare än tusentals, och kostnadsjämförelsen ovan är Vanderbilts egen erfarenhet snarare än en kontrollerad studie. Institutioner som hellre vill behålla inferensen på hårdvara de äger bör titta på [MindRouter](/aied/resources/mindrouter/) och läsa de två tillsammans: Amplify är ett applikationslager över leverantörsmodeller, MindRouter är en gateway över dina egna GPU:er.

## Anslutna begrepp

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
