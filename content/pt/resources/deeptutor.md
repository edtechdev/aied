---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-09-20T17:30:00-04:00"
type: resource
summary: "O lançamento open-source do framework de tutoria agentiva DeepTutor: um só espaço de trabalho para tutoria, geração de questões, prática de domínio, pesquisa e visualização, com memória do aprendiz inspecionável."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O **DeepTutor** é a implementação open-source do framework de tutoria avaliado em [[intelligent-tutoring|o estudo DeepTutor]], e cresceu muito além do escopo daquele artigo, tornando-se um espaço de trabalho de aprendizagem nativo de agentes de uso geral. Tutoria, resolução de problemas, geração de quizzes, prática de domínio, pesquisa e visualização compartilham um único runtime de capacidades e um único contexto de sessão, de modo que o perfil do aprendiz construído enquanto ele resolve problemas condiciona as explicações e os itens de prática que vêm em seguida.

## O que você pode fazer com ele

Dez modos — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading e Immersive Watching — rodam sobre o mesmo runtime, recorrendo a bases de conhecimento reutilizáveis, livros, rascunhos, cadernos, bancos de questões e personas. A recuperação é deliberadamente multi-engine: bibliotecas RAG versionadas sobre LlamaIndex, PageIndex, GraphRAG, LightRAG ou um servidor LightRAG remoto, além de uma base WeKnora auto-hospedada, uma biblioteca Tencent IMA ou MarginNote, ou um cofre Obsidian vinculado. A memória é inspecionável em vez de opaca: traces L1, resumos superficiais L2 e síntese L3 ficam visíveis e editáveis, com um Memory Graph que liga cada resumo às evidências que o sustentam. Um binário `deeptutor` oferece um REPL de terminal e transmite NDJSON para qualquer agente que queira dirigi-lo como ferramenta, e uma comunidade EduHub distribui skills instaláveis.

## Para quem é

Instrutores e pesquisadores do ensino superior que querem uma versão implantável do framework que o artigo descreve, desenvolvedores que constroem sobre um runtime plugável e autodidatas dispostos a rodar sua própria instância. A documentação fica em deeptutor.info.

## Observações

Licenciado sob Apache 2.0, na versão 1.6.9 em setembro de 2026, com cerca de 40.000 estrelas no GitHub. A avaliação publicada por trás dele — 10,8% de melhoria média em métricas personalizadas sobre baselines fortes e 29,4% de raciocínio agentivo geral mais forte em cinco modelos de backbone, no benchmark TutorBench — está resumida em [[zhao-deeptutor-agentic-personalized-tutoring-2026|a página do artigo]], cujas limitações valem aqui também. Como em qualquer pilha de IA open-source, você fornece as chaves dos provedores de modelo, e uma implantação em desktop ou servidor espera Python 3.11 e Node.

## Conceitos conectados
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]