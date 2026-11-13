---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Um sistema de autoria de código aberto dos Generative AI Labs da Wharton que transforma uma entrevista estruturada com um educador em uma simulação de aprendizagem adaptativa e executável, com seu próprio mentor e agentes de prática e feedback."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

O Primer é um [[open-source|sistema de código aberto]] para construir uma [[simulation|simulação]] educacional descrevendo uma aula para uma IA em vez de programá-la. O julgamento do educador define o que a simulação ensina: uma entrevista extrai o que o instrutor sabe sobre a aula e os estudantes, um documento de design torna esse conhecimento revisável, e nada é construído até que o educador o aprove.

## O que você pode fazer com ela

A entrevista faz uma pergunta por vez: a aula, o nível e o conhecimento prévio dos estudantes, equívocos comuns, a abordagem do instrutor e como o sucesso será avaliado. Educadores podem falar ou digitar, e enviar programas de curso, planos de aula ou rubricas. O que volta é um documento de design que cobre objetivos, fluxo do cenário, personagens, apostas e lógica de adaptação, que o educador revisa e aprova como faria com um plano de aula. Cinco agentes então o constroem: Intake, Design, Casting Director, Image Generation e Experience Builder, que monta o resultado para um estudante ou para uma turma inteira.

Em execução, três agentes ficam diante do estudante. Um mentor ativa o conhecimento prévio e traz à tona equívocos. Um agente de prática faz o papel de uma contraparte em roleplay ou de um tutorado em teachback, em que o estudante explica um conceito e revisa a explicação quando questionado. Um agente de feedback trabalha a partir da transcrição, discutindo momentos específicos e como o aprendizado continua além do cenário. Cada agente tem um personagem no mundo e uma camada instrucional que acompanha objetivos e reúne evidências, e o educador recebe relatórios individuais e agregados.

## Para quem é

Instrutores, designers instrucionais e desenvolvedores de corpo docente podem descrever uma aula em detalhe sem querer escrever código para ela. Pesquisadores que estudam autoria com o educador no circuito ou [[agentic-ai|fluxos de trabalho multiagente]] ganham um sistema funcional para inspecionar, e desenvolvedores podem estendê-lo, porque os prompts, modelos, listas de verificação, padrões de orquestração e código TypeScript são todos de código aberto.

## Notas e ressalvas

Os autores chamam o Primer de protótipo experimental, e não de produto de sala de aula validado. Ele não foi avaliado como intervenção de aprendizagem em salas de aula, e ninguém o revisou quanto à FERPA, à COPPA, à lei estadual de privacidade estudantil ou à política distrital, então uma instituição que o use com estudantes assume essa revisão. O software tem licença MIT e é gratuito, mas executar uma simulação exige acesso a modelo, o que custa dinheiro. Como é agnóstico em relação ao modelo e roda em modelos locais ou de pesos abertos, pode ser implantado onde as regras de privacidade são mais rígidas. Um white paper sobre a arquitetura e os prompts está vinculado na página do projeto. O repositório tinha 98 estrelas e 16 forks quando verificado em novembro de 2026.

## Conceitos conectados

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
