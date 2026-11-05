---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Infraestrutura aberta de IA da iniciativa educacional de Mark Zuckerberg e Priscilla Chan: um grafo de conhecimento de padrões, currículos e dados de ciência da aprendizagem, avaliadores para julgar a saída de LLMs e agent skills agnósticas de modelo para fluxos de trabalho docentes."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

**Learning Commons** é a iniciativa educacional de Mark Zuckerberg e Priscilla Chan, lançada em 2025 para levar o trabalho de ciência da aprendizagem da Chan Zuckerberg Initiative para a infraestrutura sobre a qual os produtos de tecnologia educacional são de fato construídos. Seu argumento é infraestrutural, e não pedagógico: a pesquisa existe, os padrões acadêmicos existem e os currículos de alta qualidade existem, mas ficam em sistemas separados, de modo que os desenvolvedores constroem sobre o que for mais fácil de alcançar. A organização publica três ferramentas abertas no GitHub — um Knowledge Graph, um conjunto de Evaluators e [[agentic-ai|Agent Skills]] — e opera uma plataforma que acrescenta o Curriculum Sync para carregar currículos em um [[edtech-platform|sistema de gestão da aprendizagem]].

## O que você pode fazer com ele

O **Knowledge Graph** modela padrões acadêmicos, currículos e pesquisa em ciência da aprendizagem como entidades e relações sob um único esquema compartilhado, para que uma ferramenta possa alinhar conteúdo gerado a um padrão sem construir seu próprio pipeline de dados. Os **Evaluators** medem atributos da [[llm|saída de LLM]] por uma lente de ciência da aprendizagem — complexidade textual, [[feedback]], alinhamento a padrões acadêmicos e habilidades duradouras — e vêm com SDKs em Python e TypeScript, publicados no npm e no PyPI, para pontuar conteúdo gerado ou comparar modelos candidatos. As **Agent Skills** empacotam instruções, referências e salvaguardas para fluxos de trabalho docentes comuns em um formato aberto e agnóstico de modelo: uma verificação de compreensão, diferenciação de aulas em camadas, planos de aula alinhados a padrões e preparação de aulas. Na prática, o grafo é o que torna os outros dois críveis: o alinhamento de conteúdo é a alegação, e o grafo é a referência contra a qual ela é verificada.

## Para quem é

Desenvolvedores que constroem recursos de IA em produtos de [[curriculum-design|currículo]] e de avaliação, e as equipes de currículo ou de padrões que fornecem os dados aos quais esses produtos se alinham. Instrutores podem usar as agent skills por conta própria, mas o enquadramento do próprio repositório é o de infraestrutura para quem entrega ferramentas.

## Notas e ressalvas

Ser aberto em [[open-source|código-fonte]] não torna os dados abertos. O código do Knowledge Graph é MIT, enquanto cada conjunto de dados carrega seu próprio rótulo de acesso — Open, Open + Gated ou Gated — e o conteúdo Gated explicitamente não é coberto pelas licenças abertas que o repositório cita, então verifique o catálogo de conjuntos de dados antes de presumir direitos de reutilização. O código dos Evaluators é MIT e o conteúdo de seus prompts é CC BY 4.0, mas os corpora anotados CLEAR e PERSUADE 2.0 que ele usa são CC BY-NC-SA 4.0. A plataforma e os conjuntos de dados por trás dela exigem uma conta. Atividade do repositório conforme lida em 2026-11-04: 167 estrelas para o Knowledge Graph, 88 para os Evaluators, 41 para as Agent Skills. A iniciativa é financiada pela CZI, e seu enquadramento do problema é o do próprio financiador.

## Conceitos conectados

- [[curriculum-design]] — o grafo existe para alinhar conteúdo gerado a padrões e currículos
- [[open-source]] — código MIT e Apache-2.0 com licenciamento de dados por conjunto de dados
- [[educational-nlp]] — os avaliadores são uma camada de medição de texto sobre a saída de LLM
- [[agentic-ai]] — skills que empacotam um fluxo de trabalho para um modelo executar
- [[edtech-platform]] — o Curriculum Sync carrega currículos em um sistema de gestão da aprendizagem
- [[llm]] — o alvo da avaliação e o consumidor das skills
