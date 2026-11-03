---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Matt Pococks åpne samling av små, sammensettbare agentferdigheter, blant annet en flerøkts undervisningsferdighet, en nådeløs utspørringsferdighet og veiledning i å skrive dokumenter en agent kan følge."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**Skills for Real Engineers** er Matt Pococks publiserte katalog over agentferdigheter: små, sammensettbare instruksjonsfiler som installeres i Claude Code, Codex eller en annen agent, skrevet for å tilpasses snarere enn overtas helt. Det meste av samlingen tjener programvarearbeid, men flere ferdigheter er undervisningsinstrumenter bygget for undervisning og utspørring snarere enn for kode.

Det klaraste eksempelet er `teach`, som går over flere økter og behandler arbeidsmappen som et tilstandsbevisst undervisningsarbeidsområde, slik at en lærendes framgang og åpne spørsmål består mellom samtaler i stedet for å starte på nytt hver gang. `grill-me` og den underliggende `grilling`-primitiven intervjuer brukeren nådeløst om en plan til hver gren er avklart, som er [[socratic-method|sokratisk utspørring]] som en gjenbrukbar prosedyre snarere enn en samtalestemning. `wait-what` svarer i det en melding ikke lander, ved å legge den fram på nytt i klart språk med den manglende konteksten – et grep enhver underviser kjenner fra å se en forklaring bomme første gang. `writing-for-agents` handler om hvordan man skriver dokumenter en [[prompt-engineering|agent]] kan følge, som nå er den praktiske formen for å skrive instruksjoner til [[pedagogical-agent|AI]]-kursmateriale. `to-questionnaire` gjør en beslutning om til et spørreskjema for den som kan svare på den, `handoff` komprimerer en samtale til et dokument en annen agent kan fortsette fra, og `wizard` genererer en interaktiv gjennomgang for trinn bare et menneske kan utføre.

## Hva du bør vite før du tar den i bruk

Alt er [[open-source|åpen kildekode]] under MIT og gratis å bruke som utgangspunkt for lokal [[ai-literacy|AI-kompetanse]] eller [[self-directed-learning|selvstyrt studie]]. Bruken er stor og raskt bevegelig: omkring 270 000 stjerner og 23 000 forks da det ble sjekket i september 2026, med siste commit 18. september 2026. Forbeholdet er omfanget. Ferdighetene forutsetter en [[human-ai-collaboration|ingeniørs]] arbeidskontekst, de er organisert i bøttene engineering, productivity, deprecated og in-progress, så noen oppføringer er uttrykkelig uferdige eller utfaset, og README-en fungerer samtidig som påmelding til et nyhetsbrev. Behandle undervisnings- og utspørringsferdighetene som den overførbare delen, og regn med å skrive om hvilken som helst av dem før du setter en foran studenter.

## Tilknyttede begreper

[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
