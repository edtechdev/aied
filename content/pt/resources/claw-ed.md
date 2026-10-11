---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Um assistente docente local-first que transforma o seu próprio currículo em rascunhos editáveis de aulas, materiais para estudantes e slides, usando um modelo que você escolhe."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O **Claw-ED** é um assistente docente local-first que redige aulas a partir dos seus próprios materiais curriculares. O professor importa suas fontes, pede uma aula e recebe rascunhos editáveis junto com materiais voltados aos estudantes e slides, gerados com o modelo que o professor escolher, em vez de um fornecedor fixo.

## O que você pode fazer com ele

O fluxo vai da importação ao rascunho, à revisão e à exportação, e os rascunhos são tratados como pontos de partida que o professor edita, e não como apostilas prontas. As tarefas de geração de aulas entram em uma fila e são recuperáveis, então uma geração longa que falha pode ser retomada em vez de reiniciada, e os artefatos gerados podem ser baixados. Ele também expõe suas ferramentas a um [[agentic-ai|agente]] por meio de um servidor MCP e pode se conectar ao Google Drive, de modo que uma escola pode integrá-lo ao armazenamento e ao agendamento já existentes.

O projeto é deliberadamente agnóstico quanto ao modelo. Ele documenta lado a lado modelos locais do Ollama, rotas econômicas do OpenRouter e opções hospedadas, e seu guia de modelos é datado, o que deixa claro que as recomendações são pontos de partida baseados em catálogo, e não julgamentos de qualidade avaliados por professores.

## Observações e ressalvas

O software é gratuito e [[open-source|código aberto]] sob a licença MIT para seu código original, embora componentes de terceiros mantenham seus próprios termos, e executá-lo significa pagar pela sua própria inferência de modelo caso você use um modelo hospedado. O projeto se autointitula um beta revisado por professores e diz com todas as letras no seu README que passar na sua CI não estabelece qualidade de ensino entre os modelos em uso real, o que é a forma correta de interpretar uma suíte de testes verde neste campo: ela verifica o software, não a [[pedagogy|pedagogia]]. Ele é mantido pela MacxLabs e aceita aulas de exemplo revisadas por professores como contribuições.

## Recursos conectados
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
