---
title: "Amplify GenAI"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "Vanderbilts MIT-licenserede enterprise-platform til generativ AI, installeret i institutionens egen AWS-konto: tilpassede assistenter over lokale dokumenter, retrieval-augmenterede svar, deling i organisationen og omkostningsregnskab ned til den enkelte besked."
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
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

Amplify GenAI er det modsatte væddemål af en campusdækkende licens til en kommerciel assistent: institutionen kører selv platformen i sin egen Amazon Web Services-konto og betaler for det, den bruger. Vanderbilt byggede den til sit eget miljø, udgav den under MIT i tre repositories og tilbyder den nu til andre organisationer som alternativ til enterprise-kontrakter pr. plads — argumentet er, at den dyre del skal være modellerne, ikke antallet af pladser.

## Hvad du kan gøre med den

Brugere bygger tilpassede assistenter ved at uploade dokumenter eller forbinde datakilder, og assistenterne svarer med [[rag|retrieval-augmented generation]] over materialet i stedet for kun fra generel træning. Assistenterne kan deles i organisationen, kædes sammen i én samtale og gives promptskabeloner; platformen producerer også PowerPoint- og Word-filer, diagrammer og visualiseringer. Administratorer får, hvad en delt tjeneste har brug for: omkostningsregnskab ned til beskedniveau, grænser pr. bruger, mapper og arbejdsrum samt SSO, alt sammen i en installation, institutionen kontrollerer.

Det designvalg, der betyder mest for et [[higher-ed|college]], er regnskabsmodellen. Vanderbilt rapporterer, at omkostningen pr. bruger med 1.300 pilotbrugere var omkring \$3 pr. måned inklusive AWS, og at halvdelen af brugerne brugte under \$1 pr. måned i tokens — tal, som universitetet fremlægger som en case, ikke som en revideret benchmark. Forbrugsbaseret fakturering belønner en campus, hvor et mindretal af brugerne udfører det meste af arbejdet, hvilket er den normale form for AI-indførelse, og den gør økonomiafdelingens spørgsmål (»hvad koster det pr. studerende?«) muligt at besvare ud fra logs i stedet for en kontrakt.

## Hvem den er til

Central IT og CIO-kontorer, der allerede kører workloads i AWS og ønsker et fællesskabsstøttet alternativ til en kommerciel enterprise-assistent; undervisere, der har brug for assistenter forankret i kursusmateriale uden at sende det til en leverandørs forbrugerprodukt; og institutioner, der vil have ét sted at se, hvad folk gør med modeller. Fordi den installeres i institutionens egen konto, besvares spørgsmålet om dataophold af installationen snarere end af en leverandørs løfte.

## Noter og forbehold

Gratis at licensere, ikke gratis at køre: institutionen betaler AWS og modeludbyderne. Modelvalg går gennem Amazon Bedrock (Anthropic, Mistral) eller OpenAI og Microsoft Azure, og kørsel af egne lokale modeller er ikke implementeret. Projektet siger klart, at det ikke kan understøtte individuelle installationer, og henviser organisationer til kommercielle partnere — så den realistiske pris inkluderer personale eller en underleverandør. Det er en installation med tre repositories (frontend, backend, infrastruktur) med snesevis af stjerner snarere end tusinder, og omkostningssammenligningen ovenfor er Vanderbilts egen erfaring, ikke et kontrolleret studie. Institutioner, der hellere vil holde inference på hardware, de ejer, bør se på [MindRouter](/aied/resources/mindrouter/) og læse de to sammen: Amplify er et applikationslag over leverandørmodeller, MindRouter er en gateway over dine egne GPU'er.

## Relaterede begreper

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
