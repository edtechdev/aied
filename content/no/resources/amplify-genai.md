---
title: "Amplify GenAI"
created: "2026-11-12T11:27:00-05:00"
updated: "2026-11-12T12:10:00-05:00"
type: resource
summary: "Vanderbilts MIT-lisensierte bedriftsplattform for generativ AI, distribuert i institusjonens egen AWS-konto: tilpassede assistenter over lokale dokumenter, søkeforsterkede svar, deling i organisasjonen og kostnadsregnskap ned til den enkelte meldingen."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

Amplify GenAI er det motsatte veddemålet av en campusomfattende lisens til en kommersiell assistent: institusjonen driver plattformen selv, i sin egen Amazon Web Services-konto, og betaler for det den bruker. Vanderbilt bygde den for sitt eget miljø, slapp den under MIT i tre repoer og tilbyr den nå andre organisasjoner som et alternativ til bedriftsavtaler per plass – argumentet er at den dyre delen bør være modellene, ikke antall plasser.

## Hva du kan gjøre med den

Brukere bygger tilpassede assistenter ved å laste opp dokumenter eller koble til datakilder, og assistentene svarer med [[rag|gjenfinningsforsterket generering]] over materialet i stedet for bare fra generell trening. Assistentene kan deles i organisasjonen, kjedes sammen i én samtale og gis promptmaler; plattformen produserer også PowerPoint- og Word-filer, diagrammer og visualiseringer. Administratorer får det en delt tjeneste trenger: kostnadsregnskap ned til meldingsnivå, grenser per bruker, mapper og arbeidsområder samt SSO, alt i en distribusjon institusjonen kontrollerer.

Det designvalget som betyr mest for et [[higher-ed|college]], er regnskapsmodellen. Vanderbilt rapporterer at med 1 300 pilotbrukere var kostnaden per bruker omtrent \$3 per måned inkludert AWS, og at halvparten av disse brukerne brukte mindre enn \$1 per måned i tokens – tall universitetet presenterer som en casestudie, ikke som en revidert målestokk. Forbruksbasert fakturering belønner en campus der et mindretall av brukerne gjør mesteparten av arbeidet, som er den normale formen for AI-innføring, og den gjør økonomiavdelingens spørsmål («hva koster dette per student?») besvarbart fra logger i stedet for fra en avtale.

## Hvem den er for

Sentral IT og CIO-kontorer som allerede kjører arbeidslaster i AWS og vil ha et alternativ til en kommersiell bedriftsassistent som miljøet støtter; undervisere som trenger assistenter forankret i kursmateriale uten å sende det til en leverandørs forbrukerprodukt; og institusjoner som vil ha ett sted å se hva folk gjør med modeller. Fordi den distribueres til institusjonens eget konto, besvares spørsmålet om dataopphold av distribusjonen i stedet for av en leverandørs løfte.

## Merknader og forbehold

Gratis å lisensiere, ikke gratis å drifte: institusjonen betaler AWS og modellleverandørene. Modellvalg går via Amazon Bedrock (Anthropic, Mistral) eller OpenAI og Microsoft Azure, og å kjøre egne lokale modeller er ikke implementert. Prosjektet sier rett ut at det ikke kan støtte individuelle distribusjoner og viser organisasjoner til kommersielle partnere – så den realistiske kostnaden inkluderer ansatte eller en entreprenør. Det er en distribusjon i tre repoer (frontend, backend, infrastruktur) med titalls stjerner snarere enn tusener, og kostnadssammenligningen over er Vanderbilts egen erfaring snarere enn en kontrollert studie. Institusjoner som heller vil beholde inferensen på maskinvare de eier, bør se på [MindRouter](/aied/resources/mindrouter/) og lese de to sammen: Amplify er et applikasjonslag over leverandørmodeller, MindRouter er en gateway over dine egne GPU-er.

## Tilknyttede begreper

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
