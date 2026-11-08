---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Infraestrutura aberta de IA para produtos educacionais: um grafo de conhecimento de padrões e currículos, avaliadores para pontuar a saída de LLMs, agent skills agnósticas de modelo para fluxos de trabalho docentes e o Curriculum Sync para carregar currículos em um sistema de gestão da aprendizagem."
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
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

**Learning Commons** publica três ferramentas abertas para colocar funcionalidades de IA sobre conteúdo curricular real — um **[[knowledge-graph|Knowledge Graph]]** de padrões acadêmicos, currículos e pesquisa em ciência da aprendizagem, uma biblioteca de **Evaluators** para julgar texto gerado, e **[[agentic-ai|Agent Skills]]** agnósticas de modelo para fluxos de trabalho docentes comuns — e opera uma plataforma que acrescenta o Curriculum Sync para carregar currículos em um [[edtech-platform|sistema de gestão da aprendizagem]].

## O que você pode fazer com ele

**Alinhe conteúdo gerado a um padrão.** O Knowledge Graph modela padrões, [[curriculum-design|currículos]] e pesquisa como entidades e relações sob um único esquema compartilhado. Um produto pode consultar o padrão ao qual um item deve se alinhar, percorrer relações de pré-requisito ou ancorar o conteúdo de um tutor no currículo que ele deveria ensinar, sem construir e manter seu próprio pipeline de dados.

**Pontue a saída gerada antes que os estudantes a vejam.** Os **Evaluators** medem atributos da [[llm|saída de LLM]] — complexidade textual, [[feedback]], alinhamento a padrões e habilidades duradouras — e são distribuídos como SDKs em Python e TypeScript no npm e no PyPI. Na prática, funcionam como uma verificação de regressão quando um prompt ou modelo muda, como comparação entre modelos candidatos ou como filtro sobre itens e explicações gerados.

**Empacote um fluxo de trabalho docente.** As **Agent Skills** reúnem instruções, referências e salvaguardas em um formato aberto e agnóstico de modelo: uma verificação de compreensão, diferenciação de aulas em camadas, um plano de aula alinhado a padrões e preparação de aulas. Elas podem ser inseridas em um framework de agentes ou lidas como modelos prontos de quanta estrutura um fluxo de trabalho escolar confiável exige.

**Leve um currículo para um sistema de gestão da aprendizagem.** O Curriculum Sync é a etapa da plataforma que transforma um mapa de padrões em algo que um curso pode de fato usar no LMS.

## Para quem é

Desenvolvedores que constroem funcionalidades de IA em produtos de currículo e de [[assessment|avaliação]], e as equipes de currículo ou de padrões que fornecem os dados aos quais esses produtos se alinham. [[teacher-role|Instrutores]] podem usar as Agent Skills por conta própria, mas o enquadramento do próprio repositório é o de infraestrutura para quem entrega ferramentas.

## Notas e ressalvas

Ser [[open-source|código aberto]] não torna os dados abertos. O código do Knowledge Graph e dos Evaluators é MIT e o das Agent Skills é Apache-2.0, enquanto cada conjunto de dados carrega seu próprio rótulo de acesso — Open, Open + Gated ou Gated — e o conteúdo Gated não é coberto pelas licenças abertas que o repositório cita, então verifique o catálogo de conjuntos de dados antes de presumir direitos de reutilização. O conteúdo dos prompts dos Evaluators é CC BY 4.0, mas os corpora anotados CLEAR e PERSUADE 2.0 que ele usa são CC BY-NC-SA 4.0. A plataforma e os conjuntos de dados por trás dela exigem uma conta.

## Conceitos conectados

- [[curriculum-design]] — o grafo existe para alinhar conteúdo gerado a padrões e currículos
- [[open-source]] — código MIT e Apache-2.0 com licenciamento de dados por conjunto de dados
- [[educational-nlp]] — os avaliadores são uma camada de medição de texto sobre a saída de LLM
- [[agentic-ai]] — skills que empacotam um fluxo de trabalho para um modelo executar
- [[edtech-platform]] — o Curriculum Sync carrega currículos em um sistema de gestão da aprendizagem
- [[llm]] — o alvo da avaliação e o consumidor das skills
