---
title: "Construção de livros de texto inteligentes"
created: "2026-10-10T11:10:00-04:00"
updated: "2026-10-10T11:10:00-04:00"
type: resource
summary: "O guia de código aberto de Dan McCreary para construir livros de texto inteligentes — livros online com busca, navegação, glossários, questionários, grafos de conceitos e simulações embutidas — usando MkDocs Material e IA generativa, com uma biblioteca complementar de MicroSims interativas geradas por IA."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O site **Intelligent Textbooks** é o guia passo a passo de Dan McCreary para construir *livros de texto inteligentes* — livros online que vão além dos PDFs estáticos ao acrescentar busca, navegação no site, um glossário de termos, um sumário, gestão de questionários, fórmulas renderizadas, prévias para redes sociais, verificação de links e um **grafo de conceitos** fácil de visualizar, que mostra todos os conceitos de um curso e suas dependências. O guia argumenta que muitos cursos hoje podem se beneficiar de livros online de alta qualidade com essas características, e mostra como construí-los usando o sistema de build [MkDocs](http://mkdocs.com/) combinado ao tema Material e à IA generativa para criar e manter o conteúdo.

O movimento que o define é que o livro é *escrito em Markdown e gerado por IA*, uma instância concreta do padrão de [[vibe-coding|autoria assistida por IA]] aplicado ao [[curriculum-design|conteúdo do curso]]: em vez de manter um site grande à mão, você descreve o curso e deixa a IA generativa produzir e manter as páginas, com a cadeia de ferramentas cuidando da navegação, da busca e do grafo de conceitos. Uma biblioteca complementar [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) afirma automatizar mais de 90% das tarefas necessárias para construir um livro de nível 2 a partir de uma descrição de curso.

## Um recurso correlato: MicroSims

O complemento natural deste guia é a biblioteca **MicroSims** de McCreary em <https://dmccreary.github.io/microsims/> (fonte: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), que fornece as simulações interativas que um livro inteligente embute. Uma *MicroSim* (microssimulação) é uma simulação interativa simples gerada com IA para ajudar professores a explicar um conceito, e pode ser embutida em um livro de texto inteligente ou em qualquer site que aceite um `iframe`. As MicroSims se distinguem por três razões: **geração assistida por IA** (padrões de design padronizados transformam uma descrição em linguagem natural de uma simulação em um recurso compartilhável), **embutimento universal** (um único elemento HTML `iframe` insere uma em qualquer página) e **código transparente e modificável** (sem caixa-preta — um clique abre a simulação em um editor web, e uma licença Creative Commons permite que a maioria dos professores as use sem taxas de licença). O termo foi cunhado por Valerie Lockhart em 2023, depois que ela descobriu que professores e estudantes conseguiam construir simulações com a biblioteca JavaScript p5.js com pouco ou nenhum treinamento.

O projeto também publica um JSON Schema para metadados de MicroSim, para que ferramentas de IA possam gerar descritores pesquisáveis, com um registro facetado de MicroSims no roadmap. Um artigo de pesquisa que descreve o framework — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — está no arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Simulações de exemplo incluem Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula e um gráfico de retornos do mercado de ações, cada uma rodando ao vivo no site.

## Para quem é

Professores e designers instrucionais que querem construir ou manter o livro de um curso, especialmente no ensino superior e na formação profissional, além de desenvolvedores de corpo docente e qualquer pessoa que use IA generativa para autoria de conteúdo educacional. Serve a educadores confortáveis com um fluxo de trabalho em Markdown e Git (ou dispostos a aprendê-lo) e que querem que a IA cuide da infraestrutura do site — busca, navegação, grafo de conceitos — para que possam focar na pedagogia.

## Observações e ressalvas

Este é o guia e a cadeia de ferramentas de um praticante, não um estudo revisado por pares — ele apresenta um fluxo de trabalho e sua própria justificativa educacional ("livros inteligentes guiam os estudantes pelos conceitos em sua busca pelo conhecimento") em vez de evidências de resultados de aprendizagem. O artigo de pesquisa sobre MicroSims é o que mais se aproxima de lastro empírico, e ele é autopublicado no arXiv. Ambos os projetos são de código aberto (o repositório intelligent-textbooks reporta licença MIT e 38 estrelas; o MicroSims reporta licença Creative Commons e 13 estrelas) e são mantidos ativamente. Grafos de conceitos e estrutura que começa pelo glossário são genuinamente úteis para descoberta, mas o guia pressupõe um fluxo de autoria bastante técnico — MkDocs, Git e ferramental de IA generativa — o que pode ser uma barreira para parte do corpo docente. No momento da ingestão, o registro de MicroSims ainda estava apenas no roadmap, então encontrar uma simulação específica já existente depende da busca e da navegação do próprio site.

## Recursos conectados

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
