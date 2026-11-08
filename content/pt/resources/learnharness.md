---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "Um aplicativo de desktop gratuito e de código aberto (AGPL-3.0) no qual agentes de IA medem o que um estudante já entende, planejam um mapa de dependências até o objetivo, ensinam um passo de raciocínio por vez e adaptam a prática — com um grafo de conhecimento persistente de proposições e cadeias de raciocínio que sessões posteriores leem em vez de começar do zero."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O **LearnHarness** é um aplicativo de desktop para aprendizagem [[agentic-ai|assistida por agente]] que organiza uma lição em torno de [[prior-knowledge|o que o estudante já entende]], e não de uma lista de tópicos. O projeto descreve quatro movimentos: **medir**, sondando as ideias das quais o objetivo depende para encontrar onde a compreensão termina; **planejar**, derivando um mapa de dependências até o objetivo e mostrando-o como mapa da lição; **ensinar**, trabalhando um passo de raciocínio por vez em um ritmo de prever–explicar–verificar, para que as confusões sejam reparadas antes de se construir qualquer coisa sobre elas; e **praticar**, um fluxo de problemas voltado às dificuldades específicas do estudante.

## O que você pode fazer com ele

A entrada distintiva é o campo de pensamento: os estudantes escrevem ou ditam seu raciocínio e sua incerteza em vez de apenas responder, o que o projeto trata como a forma pela qual o agente figura o raciocínio, e não como um registro de acerto/erro. Ele também pode pesquisar questões em segundo plano, gerar explicações visuais e construir demonstrações interativas.

O que se acumula é um [[knowledge-graph|grafo de conhecimento]] de proposições e cadeias de raciocínio, ligado de volta às sessões de origem e lido pelos agentes de ensino e de prática posteriores como contexto; anotações podem ser importadas. O projeto afirma que o grafo armazena ideias e conexões, não avaliações de capacidade.

## Para quem é

Estudantes autônomos que trabalham com material difícil, e instrutores ou desenvolvedores que querem ver como é um [[intelligent-tutoring|tutor de IA]] nativo de agentes quando seus prompts e seu estado são inspecionáveis. É TypeScript, roda a partir do código-fonte e seus testes são documentados como determinísticos, sem chamadas a modelos.

## Notas e ressalvas

Grátis abrange o software, não a inferência: os estudantes trazem chaves de provedor, uma assinatura, uma CLI local do Claude Code ou qualquer endpoint compatível com OpenAI, e pagam ao provedor sem margem; um medidor ao vivo estima apenas custos de API conhecidos. Registros, conversas e chaves ficam na máquina como arquivos simples, mas o projeto avisa que armazenamento local não significa processamento offline, já que requisições a modelos, ditado opcional e pesquisa na web alcançam serviços externos. O instalador para Windows x64 não é assinado, então o Windows emitirá um aviso. Nenhum estudo de eficácia é relatado, de modo que o caso se apoia na justificativa declarada, e não em resultados medidos; o repositório tinha cerca de 4.800 estrelas na verificação de 2 de novembro de 2026.

## Conceitos conectados

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
