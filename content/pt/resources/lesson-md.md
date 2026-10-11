---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
updated: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Um formato aberto em texto puro para aulas de eLearning baseadas em blocos, mais uma habilidade de agente que escreve aulas, avaliações e pacotes de curso inteiros nesse formato."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

**LESSON.md** é um formato aberto para conteúdo de eLearning baseado em blocos: um arquivo Markdown com frontmatter YAML e diretivas `:::` para textos, imagens e verificações de conhecimento, legível por uma pessoa e parseável por qualquer ferramenta. Ele existe porque o conteúdo de curso costuma ficar preso dentro de uma única ferramenta de autoria, e porque [[llm|modelos de linguagem grandes]] só conseguem ajudar com aulas que eles realmente consigam ler.

## O que você pode fazer com ele
Escreva uma aula em qualquer editor de texto e importe-a em qualquer ferramenta que suporte o formato, sem copiar e colar nem reformatar. As peças interativas — verificações de conhecimento de múltipla escolha com limite de tentativas e feedback por resposta — são expressas como propriedades simples, e não por uma interface gráfica. Um `ASSESSMENT.md` companheiro na raiz de um pacote se torna a [[assessment|avaliação]] pontuada do curso. O projeto também traz uma habilidade `lesson-md` que ensina o formato ao Claude, ao Codex ou a outro [[agentic-ai|agente]], de modo que descrever um curso em linguagem simples devolve aulas, avaliações e um pacote completo.

## Para quem é
Designers instrucionais e criadores de curso que querem que seu conteúdo sobreviva a uma troca de ferramenta, fornecedores de eLearning que querem um formato de importação e exportação que seus usuários já entendam, e qualquer pessoa que construa autoria assistida por IA sobre um formato legível. Entre os colaboradores está Dan Bashaw, da LXD Integral, e o formato tem um changelog público até a v1.8.

## Conceitos conectados
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]