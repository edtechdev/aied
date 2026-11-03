---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "En åpen kildekode-agentferdighet og en privat nettleserredigering som gjør atten regler for klarere skriving om til modusene utkast, omskriving og gjennomgang for prosa."
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
translation_note: "Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatisk maskinoversettelse av denne engelske siden, ennå ikke korrekturlest av en morsmålstalare.*

**Clarity** kombinerer en agentferdighet med en nettleserredigering, begge bygget rundt atten regler for skriving som «fortjener leseren». Ferdigheten installeres i kodeagenter som Claude Code og Codex med `npx skills add addyosmani/clarity`, og arbeider deretter i tre modi: gjennomgangsmodus kritiserer et utkast og lar filen være urørt, omskrivingsmodus redigerer et utkast på stedet, og intervjumodus stiller skribenten spørsmål først og skriver sammen med henne ut fra svarene. [[feedback|Tilbakemeldingen]] en skribent får, er rettet mot innhold før stil. Reglene spør hvem teksten er for og hva leseren allerede vet, presser på for påstander framfor emner og det konkrete framfor det abstrakte, og behandler fyll som et problem med å ikke vite hva teksten skal gjøre, snarere enn et ordforrådsproblem.

Nettleserredigeringen kjører lokalt i siden og laster ikke opp noe utkast. Den rapporterer kjennetegn på maskinskrevet prosa, lesbarhet og hull i innholdet, noe som gjør den nyttig for å gjennomgå tekst en [[generative-ai|generativ AI]] har produsert før den når en leser. Prosjektet sier uttrykkelig at målet er skriving som fortsatt er gjenkjennelig som forfatterens egen, snarere enn prosa konstruert for å passere [[ai-detection|AI-deteksjon]] – et skille undervisere vil kjenne igjen når de fastsetter en policy for AI-assistert [[writing-education|skriveopplæring]].

## Hva du bør vite før du tar den i bruk

Repoet publiserer en evalueringsprotokoll, før-og-etter-eksempler i `samples/` og referansefiler bak ferdigheten, så en gransker kan inspisere hvordan reglene oppfører seg i stedet for å tro på en påstand; siden her gjengir ikke noe målt resultat. Forfatteren er Addy Osmani, lisensen er MIT, og arbeidet er uavhengig snarere enn et produkt av en institusjon. Det er ungt og aktivt: opprettet i august 2026, 54 commits, tre utgivelser med den nyeste som versjon 0.2.1 i september, og omkring 250 stjerner da det ble sjekket i september 2026. Tre bidragsytere har fått endringer inn. Ferdighetsinstruksjonene lastes inn i en agent leseren allerede kjører, så de vanlige forbeholdene om [[prompt-engineering|ledetekstskriving]] gjelder: kvaliteten på kritikken avhenger av utkastet den får.

## Tilknyttede begreper

[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
