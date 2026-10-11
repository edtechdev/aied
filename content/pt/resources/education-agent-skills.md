---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
updated: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Uma biblioteca de 165 habilidades de agente fundamentadas em evidências, abrangendo pedagogia, ciência da aprendizagem, currículo e avaliação, empacotadas para Claude, Codex e Hermes."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
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

**Education Agent Skills** é uma biblioteca de 165 habilidades de agente para professores, líderes escolares e pessoas que constroem ferramentas educacionais. As habilidades estão agrupadas em vinte domínios que abrangem pedagogia, ciência da aprendizagem, [[curriculum-design|currículo]], avaliação e regeneração, e cada uma delas é escrita para ser carregada por um [[agentic-ai|agente]], não para ser lida como um documento.

## O que você pode fazer com ela

As habilidades se instalam no Claude Code, no Codex e no Hermes, seja como plugin ou copiando as pastas, de modo que a mesma biblioteca funciona em várias superfícies de agente. Um servidor MCP hospedado expõe a coleção como ferramentas para agentes que não conseguem instalar habilidades localmente, e o repositório traz tanto um registro quanto um pacote pré-compilado, para que o servidor possa servir a coleção sem ler os arquivos individuais no momento do deploy.

A afirmação distintiva do projeto é seu fundamento: as habilidades citam as evidências em que se apoiam, e o próprio histórico do repositório mostra que essa disciplina é aplicada, e não apenas declarada — incluindo uma correção já incorporada que removeu uma atribuição sem respaldo e corrigiu a descrição de uma salvaguarda testada em um estudo citado.

## Notas e ressalvas

As habilidades educacionais, a documentação e os materiais curriculares estão licenciados sob CC BY-SA 4.0, de modo que a reutilização e a adaptação são abertas, enquanto as obras derivadas devem carregar a mesma licença. Dois detalhes operacionais importam se você for implantar. O endpoint MCP hospedado exige tokens, em vez de ficar aberto a qualquer pessoa, e como o servidor serve um snapshot já confirmado no repositório, e não os arquivos SKILL.md, uma habilidade que você adicionar sem recompilar e confirmar o pacote não aparecerá no servidor em produção, mesmo após um novo deploy. A biblioteca foi construída por Gareth Manning, educador e designer curricular, e os termos de licença se aplicam especificamente ao conteúdo educacional.

## Conceitos conectados
[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]]