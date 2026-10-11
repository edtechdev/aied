---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
updated: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Uma Agent Skill de código aberto e um editor de navegador privado que transformam dezoito regras para uma escrita mais clara em modos de rascunho, reescrita e revisão para prosa."
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
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O **Clarity** reúne uma Agent Skill a um editor de navegador, ambos construídos em torno de dezoito regras para uma escrita que "se ganha seu leitor". A skill se instala em agentes de código como Claude Code e Codex com `npx skills add addyosmani/clarity` e depois funciona em três modos: o modo de revisão critica um rascunho e deixa o arquivo intacto, o modo de reescrita edita um rascunho no lugar, e o modo de entrevista faz perguntas a quem escreve antes e coescreve a partir das respostas. O [[feedback|feedback]] que quem escreve recebe é voltado à substância antes do estilo. As regras perguntam para quem é o texto e o que essa pessoa já sabe, exigem afirmações em vez de assuntos e o concreto em vez do abstrato, e tratam o enchimento como um problema de não saber para que serve o texto, e não como um problema de vocabulário.

O editor de navegador roda localmente na página e não envia nenhum rascunho para fora. Ele reporta os sinais de prosa escrita por máquina, a legibilidade e as lacunas de substância, o que o torna útil para revisar um texto produzido por [[generative-ai|IA generativa]] antes de chegar a um leitor. O projeto é explícito em que o objetivo é uma escrita que continue reconhecidamente do próprio autor, e não uma prosa construída para passar pela [[ai-literacy|detecção de IA]], distinção que os professores reconhecerão ao definir uma política sobre [[writing-education|escrita]] assistida por IA.

## O que saber antes de adotá-lo

O repositório publica um protocolo de avaliação, exemplos de antes e depois em `samples/` e arquivos de referência por trás da skill, de modo que quem revisa consegue inspecionar como as reglas se comportam, em vez de aceitar uma afirmação por confiança; a página aqui não repete nenhum resultado medido. O autor é Addy Osmani, a licença é MIT, e o trabalho é independente, não produto de nenhuma instituição. Ele é jovem e ativo: criado em agosto de 2026, 54 commits, três releases com a última na versão 0.2.1 naquele setembro, e cerca de 250 estrelas quando verificado em setembro de 2026. Três colaboradores já contribuíram com mudanças. As instruções da skill são carregadas em um agente que o leitor já usa, então valem as ressalvas habituais de [[prompt-engineering|engenharia de prompts]]: a qualidade da crítica depende do rascunho que lhe é entregue.

## Recursos conectados

[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
