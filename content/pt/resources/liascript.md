---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
updated: "2026-09-24T04:57:47-04:00"
type: resource
summary: "Um dialeto aberto de Markdown que transforma um arquivo de texto simples em um curso interativo no navegador, com questionários e código executável, além de um assistente multiagente para construir cursos com ele."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-09-24T04:57:47-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O **LiaScript** é um dialeto estendido de Markdown mais um interpretador para ele. Um único arquivo de texto simples se torna um curso interativo: o mesmo documento pode ser lido como narrativa, exibido como slides ou percorrido como um curso, tudo no navegador. Nada precisa ser instalado para escrever ou ler um.

## O que você pode fazer com ele

Os questionários vêm nos formatos que um professor espera, incluindo múltipla escolha, questões de matriz, entrada de texto, menus suspensos e textos com lacunas, escritos diretamente em Markdown. Blocos de código podem ser tornados editáveis e executáveis para tutoriais de [[cs-education|programação]], e um sistema de macros envolve bibliotecas JavaScript em blocos reutilizáveis, de modo que diagramas interativos não exigem código de cada autor. Um curso é hospedado onde o autor já guarda texto, sem serviço ao qual ficar preso, e tudo roda no lado do cliente, então um curso carregado funciona offline. O LiaScript Exporter empacota um como SCORM para Moodle, ILIAS e outros [[edtech-platform|sistemas de gestão da aprendizagem]].

## O agente de ensino para construir cursos

O projeto também publica um **[teaching agent](https://github.com/LiaScript/teaching-agent)** para autoria de cursos em LiaScript, licenciado sob a Boost Software License 1.0. Quatro agentes — de ensino, design visual, revisão pelo estudante e publicação — trabalham em torno de um único arquivo de projeto que guarda o estado do curso, com um fluxo define-first: objetivos, público e didática são definidos antes de qualquer material ser escrito, e portões de validação vêm em seguida. Um rascunho pode ser revisado a partir de uma persona de estudante nomeada para verificar [[cognitive-offloading|carga cognitiva]] e conhecimentos prévios presumidos. O agente é agnóstico de editor, gerando configurações para Claude Code, Copilot, Codex, Cursor ou um bate-papo web a partir de uma única especificação, e o repositório serve também como exemplo prático, abrigando um curso de seis unidades sobre a Diretiva NIS2 da União Europeia e um documento que descreve como ele foi produzido.

## Observações e ressalvas

O LiaScript é gratuito, sem nível pago e sem exigência de conta, e é desenvolvido abertamente sob a licença BSD-3-Clause, então instituições podem auto-hospedá-lo e modificá-lo. O recurso Live Classroom merece uma olhada antes de você confiar nele em escala, já que a sincronização em tempo real usa um serviço compartilhado em vez de renderização puramente local. O teaching agent é jovem e pouco adotado, então trate-o como um protótipo funcional em vez de um produto com suporte.

## Recursos conectados
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]]
