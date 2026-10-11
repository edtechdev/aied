---
title: Tecnologias
created: "2026-08-19T18:10:00-04:00"
updated: "2026-10-02T07:32:07-04:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
translation_of: concepts/ai-technologies
source_updated: "2026-10-02T07:32:07-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---
*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Tecnologias** — os modelos, arquiteturas e métodos que sustentam os sistemas de IA para a educação, e o conceito guarda-chuva para a cobertura da camada técnica nesta base de conhecimento. Onde a [[pedagogy|pedagogia]] e as [[learning-theories|teorias de aprendizagem]] tratam de *como o ensino e a aprendizagem acontecem*, e a [[ai-ed-evaluation|avaliação de IA na educação]] trata de *se a IA funciona*, esta página ancora a vertente *técnica*: os sistemas de IA ([[llm|grandes modelos de linguagem]], [[generative-ai|IA generativa]], [[multimodal|modelos multimodais]], [[educational-robotics|robôs]]) e as técnicas usadas para construí-los, controlá-los e implantá-los ([[prompt-engineering|engenharia de prompts]], [[rag|geração aumentada por recuperação]], [[reinforcement-learning|aprendizagem por reforço]], [[educational-nlp|PLN educacional]], [[knowledge-graph|grafos de conhecimento]], [[agentic-ai|orquestração agêntica]]).

## Perguntas para refletir

- Você pode ser um excelente educador sem saber construir um LLM — mas esta página argumenta que suas escolhas técnicas ainda moldam o que a IA pode e não pode fazer na sua sala de aula. De que forma a tecnologia subjacente de uma ferramenta de IA poderia mudar silenciosamente como seus estudantes aprendem, mesmo que você nunca veja o código?
- Uma suposição comum é que o modelo é toda a história — mas técnicas como a geração aumentada por recuperação (RAG) e a engenharia de prompts existem justamente para controlar e fundamentar a saída dos LLMs. Antes de ler mais, quando você pede a uma IA para "ser mais precisa" ou "usar esta fonte", o que você acha que realmente está acontecendo por baixo?
- A RAG é descrita como uma técnica central para reduzir a alucinação e melhorar a segurança. Por que você acha que buscar conhecimento relevante para "fundamentar" a resposta de uma IA importaria mais para a educação do que para, digamos, uma conversa casual — e o que poderia dar errado se esse fundamento falhar?
- A página defende que as escolhas técnicas incorporam suposições pedagógicas: um tutor construído sobre prompts socráticos raciocina junto aos estudantes, enquanto um modelo gerador de respostas pode simplesmente entregar as soluções. Você consegue lembrar de uma ferramenta de IA que parecia "pressupor" uma filosofia de ensino específica — e ela estava alinhada com como você realmente queria ensinar ou aprender?
- Além da acurácia bruta, esta página sugere que os sistemas de IA deveriam ser avaliados por confiabilidade, pedagogia e equidade. Qual métrica de destaque você suspeita que a maioria das pessoas (inclusive muitos educadores) usa por padrão ao julgar se uma ferramenta de IA "funciona", e por que essa métrica pode esconder mais do que revela?
- A IA agêntica é descrita como uma mudança da IA "de uma ferramenta que responde a prompts para um colaborador proativo". Como um sistema que inicia e orquestra fluxos de trabalho de múltiplas etapas por conta própria poderia mudar aquilo de que você, como professor ou estudante, é responsável — e quem o responsabiliza?

## Introdução

A [[ai-education|IA na educação]] roda sobre uma pilha técnica específica, e compreendê-la importa para [[teacher-role|educadores]] e pesquisadores mesmo quando eles não constroem sistemas eles mesmos — porque as escolhas técnicas moldam o que a IA pode e não pode fazer na sala de aula, os riscos que ela carrega e como avaliá-la. Esta página organiza a cobertura de conceitos técnicos da base de conhecimento: os sistemas de IA, as técnicas que os adaptam e controlam, e como a camada técnica se conecta à pedagogia, à avaliação e à avaliação de sistemas.

## Sistemas de IA na educação

- **Grandes modelos de linguagem (LLMs).** A espinha dorsal computacional da maior parte da [[ai-education|AIED]] moderna — os [[llm|LLMs]] geram texto semelhante ao humano para tutoria, avaliação e geração de conteúdo, e são a tecnologia mais referenciada nesta base de conhecimento. O [[llm-training-and-fine-tuning|treinamento e o ajuste fino]] adaptam LLMs gerais para uso educacional.
- **IA generativa.** A categoria mais ampla de sistemas que produzem texto, código, imagens e outros conteúdos — a [[generative-ai|IA generativa]] (impulsionada sobretudo por LLMs) é a tecnologia por trás da atual onda de pesquisa em [[ai-education|AIED]]. Veja também os [[multimodal|modelos multimodais]] (texto, imagem, áudio) e a [[simulation|simulação]].
- **Robôs e sistemas corporificados.** Os [[educational-robotics|robôs na educação]] acrescentam uma presença corporificada e frequentemente social — kits programáveis para pensamento computacional e robôs humanoides/sociais para tutoria, narrativa e dramatização. A robótica é uma vertente técnica distinta que se sobrepõe à [[agentic-ai|IA agêntica]] e ao desenho [[human-in-the-loop-ai|com humano no circuito]].
- **Sistemas baseados em conhecimento.** Os [[knowledge-graph|grafos de conhecimento]] e a [[educational-nlp|PLN educacional]] representam e processam conhecimento de domínio, cada vez mais combinados com LLMs para tutoria fundamentada e explicável.

## Técnicas e métodos

- **Engenharia de prompts.** A [[prompt-engineering|engenharia de prompts]] é como educadores e desenvolvedores moldam as saídas dos LLMs — o mecanismo principal pelo qual o descarregamento e o controle se operam nas interações com LLMs.
- **Geração aumentada por recuperação (RAG).** A [[rag|RAG]] fundamenta as saídas dos LLMs em conhecimento recuperado, reduzindo a alucinação e melhorando a acurácia — uma técnica central para uma implantação educacional [[pedagogical-safety|segura]].
- **Aprendizagem por reforço.** A [[reinforcement-learning|aprendizagem por reforço]] treina agentes para otimizar o comportamento ao longo do tempo, usada em [[adaptive-learning|sistemas adaptativos]] e na [[game-based-learning|aprendizagem baseada em jogos]].
- **Orquestração agêntica.** Os sistemas de [[agentic-ai|IA agêntica]] planejam e executam fluxos de trabalho de múltiplas etapas — frequentemente orquestrando vários agentes especializados (veja [[agentic-ai|sistemas multiagente]]) — e estão remodelando a IA de uma ferramenta que responde a prompts para um colaborador proativo.
- **A pilha de agentes educacionais fica atrás da fronteira.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] mapearam 474 estudos e constataram que os modelos da série GPT e o LangChain dominam, enquanto a orquestração de ferramentas governada, a memória persistente e o planejamento de horizonte longo estavam amplamente ausentes — e apenas 138 dos 474 (29%) recorriam a teoria educacional.
- **Treinamento e adaptação de modelos.** O [[llm-training-and-fine-tuning|treinamento e o ajuste fino de LLMs]], o [[educational-llm-alignment|alinhamento educacional]] e a [[cstutorbench-slm-tutors|adaptação com modelos de linguagem pequenos]] tornam os modelos gerais específicos para a educação — embora a evidência nesta base de conhecimento coloque a [[rag|recuperação]] e os [[prompt-engineering|prompts]] à frente do treinamento na ordem de decisão, já que um prompt bem fundamentado é mais barato do que um modelo adaptado.

## Como a camada técnica se conecta ao campo

A vertente técnica é inseparável dos outros temas da base de conhecimento:

- **Pedagogia:** as escolhas técnicas incorporam suposições pedagógicas — um [[intelligent-tutoring|tutor]] construído sobre [[socratic-method|prompts socráticos]] raciocina junto aos estudantes, enquanto um modelo gerador de respostas pode recorrer à provisão direta por padrão (veja [[pedagogy|pedagogias e estratégias de ensino]]).
- **Avaliação:** a [[ai-ed-evaluation|avaliação de IA na educação]] e os [[benchmark|benchmarks]] determinam se os sistemas de IA de fato funcionam; a [[assessment|avaliação]] e a [[automated-assessment|avaliação automatizada]] usam a pilha técnica para corrigir e gerar.
- **Uso responsável:** as técnicas técnicas são centrais para [[reducing-ai-misuse|reduzir o uso indevido de IA]] — o fundamento por [[rag|RAG]], as salvaguardas, o [[prompt-engineering|andaimento]] por [[scaffolding|prompts]] e a supervisão [[human-in-the-loop-ai|humana]] moldam se a IA apoia ou mina a aprendizagem ([[cognitive-offloading|descarregamento cognitivo]], [[hallucination-risk|risco de alucinação]]).

## Implicações para a IA na educação

- **O letramento técnico apoia o uso crítico:** compreender os modelos e técnicas subjacentes ajuda educadores e estudantes a usar bem a IA e a avaliá-la criticamente (veja [[ai-literacy|letramento em IA]]).
- **Escolha a tecnologia pela intenção pedagógica:** o sistema de IA e a técnica deveriam seguir a [[pedagogy|estratégia de ensino]], e não o contrário.
- **Avalie a camada técnica:** a pesquisa em [[ai-ed-evaluation|avaliação de IA na educação]] e em [[benchmark|benchmarks]] avalia os sistemas de IA por confiabilidade, pedagogia e [[equity-in-ai-education|equidade]], e não apenas por acurácia de destaque.
- **Robôs e agentes fazem parte da pilha:** os sistemas [[educational-robotics|corporificados]] e [[agentic-ai|agênticos]] estendem o repertório técnico para além do texto — e trazem suas próprias considerações de desenho e segurança.

## Conceitos conectados

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## Artigos conectados

- [[agentic-ai-education-scoping-review]] — Revisão de escopo da IA agêntica na educação
- [[genai-meta-analysis-programming-learning]] — Meta-análise do efeito da GenAI sobre produtividade e aprendizagem em programação
- [[cstutorbench-slm-tutors]] — Benchmarks de tutoria com modelos de linguagem pequenos
- [[educational-llm-alignment]] — Alinhando LLMs para a educação
- [[eduguard-safe-rag-llm-tutor]] — Salvaguardando tutores com LLMs baseados em RAG
- [[hazra-safetutors-pedagogical-safety-2026]] — Segurança de tutores com IA e danos
- [[elbench-education-llm-benchmark-2026]] — Benchmark de LLMs para educação
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Robô social generativo Teachy Mini
- [[benzion-ai-physics-simulations-virtual-lab]] — Simulações de física geradas por LLMs para a sala de aula
