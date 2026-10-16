---
connected_resources: [teacherserver]
title: Geração Automatizada de Questões
created: "2026-05-08T10:44:35-04:00"
updated: "2026-09-30T11:35:26-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: 2026-09-30T11:35:26-04:00
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **A geração automatizada de questões (AQG)** — o uso de IA, especialmente NLP e [[llm|modelos de linguagem grandes (LLMs)]], para gerar itens de [[assessment|avaliação educacional]] (múltipla escolha, resposta curta, preenchimento de lacunas, programação e questões de desempenho) automaticamente a partir de material fonte ou de objetivos de aprendizagem. A AQG permite a avaliação em escala — produzindo quizzes [[formative-assessment|formativos]], exercícios adaptativos e itens de prática —, mas a qualidade varia drasticamente entre tipos de item e exige validação para evitar questões alucinadas ou mal calibradas. É um componente central do [[automated-assessment]] e um habilitador-chave do [[adaptive-learning|aprendizado adaptativo]] e do [[personalized-learning|aprendizado personalizado]].

## Questões a considerar

- A geração automatizada de questões produz itens de avaliação a partir de material fonte em escala — mas esta página alerta que a qualidade varia drasticamente entre tipos de item. Antes de ler, qual tipo de item você imagina que a IA gera com mais confiabilidade: múltipla escolha, resposta curta ou código — e por quê?
- O desafio central é o controle de qualidade: os LLMs podem gerar questões factualmente incorretas. Um pipeline reduziu a alucinação em 62% ao adicionar um laço de gerar-depois-validar-refinar. Por que você acha que pedir à IA para validar suas próprias questões melhoraria significativamente elas, em vez de apenas referendar sua própria saída?
- A [[research-methods-aied|pesquisa]] mostra que as questões geradas podem tender ao pensamento de ordem inferior (recordação), a menos que sejam explicitamente projetadas para resultados de ordem superior. Se você usasse IA para criar itens de prática, como saberia se eles estavam treinando compreensão genuína ou apenas memorização?
- A calibragem de dificuldade importa: as estimativas de dificuldade da IA se correlacionam fortemente com o desempenho dos estudantes, mas a página alerta contra o uso indevido de alto impacto. Quando uma questão que a IA julga ter a "dificuldade certa" ainda seria a questão errada para um aprendiz específico?
- A geração com consciência de [[accessibility|acessibilidade]] cria questões ajustadas para aprendizes surdos e com dificuldade de audição, refinadas em parceria com a comunidade-alvo. O que esse exemplo sugere sobre por que a geração de questões não pode ser tratada como um problema puramente técnico ou apenas de conteúdo?

## Introdução

A geração automatizada de questões importa porque os itens de avaliação são caros de criar à mão, e a IA pode produzi-los rapidamente e em escala. No entanto, a pesquisa da base de conhecimento mostra que os itens gerados devem ser validados quanto à correção, relevância e dificuldade, e que diferentes tipos de item (múltipla escolha, resposta curta, código) variam em quão confiavelmente podem ser gerados. A AQG, portanto, situa-se na interseção entre [[generative-ai|IA generativa]], [[educational-nlp|NLP educacional]] e [[educational-measurement|medição educacional]].

## Abordagens para a geração de questões

A pesquisa da base de conhecimento ilustra várias abordagens:

- **Pipelines de gerar-depois-validar:** [[generate-then-validate-question-gen|Generate-Then-Validate]] introduz um laço de geração → validação → refinamento que reduz a alucinação de LLMs em 62% em comparação com a geração direta, alcançando 89% de acurácia em conjuntos de dados de [[stem-education|STEM]] e uma melhora de 23% em relevância. A etapa de validação filtra itens inválidos ou de baixa qualidade, e itens reprovados disparam uma nova geração com prompts corretivos.
- **Geração baseada em rastreamento de conhecimento:** [[kt4eqg-personalized-question-generation|KT4EQG]] gera questões de exercício personalizadas guiadas pelo [[knowledge-tracing|rastreamento de conhecimento]], ajustando os itens ao estado de conhecimento de cada aprendiz em vez de gerar questões genéricas.
- **Distratores ligados a concepções errôneas como rótulos diagnósticos:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] associa cada distrator a uma única concepção errônea minerada e marca exatamente uma opção correta, de modo que o item é gerado com seus alvos diagnósticos embutidos e pode então ser corrigido deterministicamente sem chamada de [[llm]] — cerca de 7,6 segundos e aproximadamente \\$0,005 por rodada na implantação ao vivo dos autores, contra cerca de 32 segundos e \\$0,015 para uma rodada de resposta curta corrigida por LLM. A vinculação é tão boa quanto os rótulos de concepções errôneas por trás dela, já que as [[misconceptions|concepções errôneas]] mineradas corresponderam às concepções errôneas-alvo com F1 ≈ 0,56, e suas escolhas de item serviram a uma habilidade genuinamente fraca 0,72 das vezes.
- **Geração com consciência de profundidade cognitiva:** [[llm-educational-question-cognitive-depth|Evaluating the cognitive depth of LLM-generated questions]] examina se os itens gerados exploram o [[critical-thinking|pensamento de ordem superior]] (criação, avaliação) ou apenas a memorização, conectando-se à taxonomia de Bloom e à [[educational-measurement|medição educacional]].
- **Problemas de caso com erros embutidos para avaliação repetida:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al. (2026)]] geraram novos problemas de raciocínio diagnóstico hierárquico (HDR) — casos curtos com erros deliberadamente embutidos que os estudantes devem encontrar e explicar — e descobriram que itens de autoria do GPT-4o igualaram os de autoria humana em consistência interna (α de Cronbach = 0,78 para ambos) e dificuldade, com testes exatos de Fisher não encontrando diferença significativa na distribuição de escores entre 100 participantes. O formato combina uma demanda de [[critical-thinking|pensamento de ordem superior]] com uma resposta restrita, de modo que as respostas convergem e a correção se torna reproduzível. A motivação generativa é a reutilização de itens: reutilizar um caso convida à memória e à reutilização de respostas, enquanto casos gerados estruturalmente equivalentes, mas contextualmente diferentes, suprimem o viés de item na remedição.
- **Pipelines [[pedagogy|pedagógicos]]:** [[slidesqaqa-pedagogical-question-generation|Slide-deck Q&A generation]] usa um pipeline de múltiplas etapas para a geração pedagogicamente sólida de questões a partir de materiais de curso.
- **Geração com consciência de acessibilidade:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]] projetam um sistema de geração de questões baseado em LLM para [[inclusive-learning|aprendizes surdos e com dificuldade de audição]], introduzindo estratégias de questões Visuais e Emocionais que visam momentos de dificuldade visual ou emocional em vídeos, e refinam iterativamente as questões com a comunidade-alvo para garantir acessibilidade linguística.
- **Sistemas baseados em RAG com humano no laço:** [[code-gen|CODE-GEN]] combina [[rag|geração aumentada por recuperação]] com revisão [[human-in-the-loop-ai|humano no laço]] para gerar [[automated-assessment|avaliações de múltipla escolha]].
- **[[benchmark|Benchmarks]] e avaliação:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] oferece um benchmark de enigmas científicos/matemáticos para avaliar sistemas de geração de questões e de raciocínio.

## Validação e qualidade

O desafio central na AQG é o **controle de qualidade**:
- **Avalie o processo de resolução, não o enunciado:** [[proiqa-math-item-quality-assessment-2026|ProIQA]] argumenta que a revisão da qualidade de itens deve seguir o que um especialista faz — simular a solução — e constrói uma árvore de raciocínio gerada por LLM por item, verificada quanto à correção matemática em 90,38–97,80%, e então codifica sua estrutura de dependência com uma rede neural de grafo de [[machine-learning|aprendizado de máquina]] ao lado de uma visão apenas do enunciado. Reporta ganhos médios sobre o segundo melhor método de 7,5% na avaliação de conceitos, 6,3% na estimativa de dificuldade e 19,5% na avaliação de competências, e sua análise de erros nomeia um modo de falha que vale observar: uma árvore de raciocínio logicamente correta, mas estruturalmente rasa, faz um item difícil parecer fácil.

- **Risco de alucinação:** os LLMs podem gerar questões factualmente incorretas. [[generate-then-validate-question-gen|Generate-Then-Validate]] mostra que uma fase dedicada de validação reduz drasticamente isso, e o [[hallucination-risk|risco de alucinação]] é uma preocupação reconhecida em todo o campo.
- **Calibragem de dificuldade:** as questões geradas devem ser calibradas para a dificuldade apropriada. [[llm-difficulty-calibration-programming-exams-2026|A pesquisa de calibragem de dificuldade]] mostra que as estimativas de dificuldade da IA se correlacionam fortemente com o desempenho dos estudantes (p. ex., rho ≈ −0,87), permitindo melhor seleção de itens — ao mesmo tempo que alerta contra o [[ai-misuse-learning-harm|uso indevido]] de alto impacto. [[razavi-powers-item-difficulty-llm-2026|Razavi and Powers (2026)]] estendem isso a itens de matemática e leitura do K-5 (N = 5170) calibrados sob o modelo Rasch IRT: as classificações de dificuldade zero-shot do GPT-4o se correlacionaram de moderada a fortemente com as dificuldades reais (r = 0,83 matemática, r = 0,81 leitura), mas variaram por série, enquanto uma abordagem baseada em features — features cognitivas e linguísticas extraídas por LLM alimentadas em modelos baseados em árvores — alcançou correlações de até r = 0,87. A extração estruturada de features do estudo (p. ex., complexidade sintática, [[cognitive-offloading|carga cognitiva]], truculência dos distratores) e seu fluxo de trabalho prático de sete passos oferecem um modelo para calibrar itens gerados, enquanto sua descoberta de restrição de amplitude nas séries iniciais e suas ressalvas de generalizabilidade advertem contra o uso de alto impacto.
- **Rótulos de dificuldade gerados podem ser uma falha de validade de construto, não um erro de calibragem.** Em 378 itens gerados, os rótulos Fácil/Médio/Difícil do modelo acompanharam o nível de Bloom co-gerado com eles (ρ=0,90) e a forma de superfície — o comprimento médio do enunciado subindo de 15,9 para 22,1 para 30,2 palavras —, mas se correlacionaram com a dificuldade empírica dos itens em apenas ρ=0,06 sobre 7.888 respostas de 54 estudantes, o argumento para calibrar metadados gerados contra dados de resposta em vez de confiar em tags co-geradas ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Validação psicométrica de campo em larga escala:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] valida um pipeline de AQG de refinamento iterativo (gerar→julgar→revisar, estilo Self-Refine) em 91 turmas universitárias reais (~1.686 estudantes). A análise bayesiana hierárquica 2PL [[item-response-theory|IRT]] mostra que as questões geradas por IA têm desempenho equivalente aos itens escritos por especialistas para exames padronizados — um pouco mais fáceis (β̄ = −0,45 vs. 0,35) mas ligeiramente mais discriminantes (ᾱ = 1,3 vs. 1,2), com informação de teste de pico mais alta (confiabilidade 0,79 vs. 0,72) — demonstrando que a AQG pode produzir avaliações psicometricamente sólidas e adaptadas ao curso em escala.
- A paridade psicométrica média pode mascarar deficiências no nível do item: uma revisão de escopo de 153 relatórios de educação médica descobriu que a geração de itens por IA às vezes igualava a dificuldade e a discriminação humanas, mas em uma comparação de fisiologia apenas 9 de 40 itens do ChatGPT atendiam a todos os critérios ideais, contra 19 de 40 itens da faculdade ([[genai-medical-education-transformation-review-2026|Zhao et al. (2026)]]).
- **Reconhecibilidade em um exame ao vivo, e o que a revisão realmente remove:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] colocaram 30 MCQs gerados por IA e 30 MCQs do Exame Nacional de Licenciamento em um exame com nota baseado em tablet feito por 119 estudantes de [[medical-education|medicina]] do quinto ano, com os itens de IA redigidos a partir dos próprios materiais do curso pelo ChatGPT-4o e o Gemini 1.5 Pro por meio de um painel de especialistas que aceitou 82% deles e eliminou 18,2% como inutilizáveis. A atribuição de fonte pelos estudantes não diferiu entre os dois tipos de item, e a dificuldade do item, a distribuição dos distratores e o alinhamento curricular percebido foram estatisticamente indistinguíveis — um resultado de *reconhecimento* em vez de um resultado de qualidade, e a razão pela qual os autores descrevem o benefício do fluxo de trabalho como o deslocamento do esforço dos educadores da redação para a revisão, em vez de removê-lo. Uma diferença exploratória sobreviveu: os itens do Gemini foram mais difíceis que os do exame de licenciamento (p = 0,028), enquanto os do ChatGPT não (p = 0,984).
- **Dependência da tarefa:** a confiabilidade da geração varia por tipo de item. A [[cong-confidence-asag-2026|correção de resposta curta]] e a [[self-referential-l2-writing-llm-assessment|avaliação de escrita analítica]] mostram que itens de resposta aberta e de escrita são mais difíceis de gerar e corrigir com confiabilidade que itens estruturados.
- **Qualidade cognitiva:** a [[llm-educational-question-cognitive-depth|avaliação de profundidade cognitiva]] mostra que os itens gerados podem tender ao pensamento de ordem inferior, a menos que sejam explicitamente projetados para resultados de ordem superior.
- **A rotulagem automática do nível cognitivo não se transfere para itens gerados.** Um classificador da taxonomia de Bloom treinado em um banco de itens curado colapsou em questões geradas por IA — macro F1 de 0,88 em distribuição para 0,48 e 0,20 fora dela — porque os itens gerados têm em média muito mais palavras (18,2 versus 9,3) e compartilham apenas uma mediana de 10,5% de seus verbos-gatilho de Bloom com o corpus curado, contra 35,1% para um conjunto mais próximo; o retreinamento com dados rotulados fora de distribuição foi o maior ganho isolado, a um limiar de aproximadamente N > 1.000 amostras rotuladas ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026)]]).

## Papel no aprendizado adaptativo e personalizado

A AQG é um habilitador-chave do [[adaptive-learning|aprendizado adaptativo]] e [[personalized-learning|personalizado]]: ela produz os grandes bancos de itens dos quais os tutores adaptativos extraem, e — combinada com [[knowledge-tracing|rastreamento de conhecimento]] ou [[student-modeling|modelagem do estudante]] — pode gerar itens ajustados aos estados de conhecimento individual dos aprendizes ([[kt4eqg-personalized-question-generation|KT4EQG]]). A [[taklif-ai-interest-based-personalized-assignments|personalização baseada em interesses]] mostra que a AQG também pode adaptar as questões aos interesses dos estudantes, não apenas à dificuldade.

## Implicações para a IA na educação

- **Gerar e depois validar:** sempre emparelhe a geração com um estágio de validação/refinamento para controlar a alucinação e garantir a relevância.
- **Ajustar o tipo de item à confiabilidade:** use a AQG para tipos de item estruturados (múltipla escolha, preenchimento de lacunas, código), onde é mais confiável, e aplique validação cuidadosa a itens de resposta aberta e de escrita.
- **Projetar para profundidade cognitiva:** prompts e pipelines devem visar o pensamento de ordem superior, não apenas a recordação, para apoiar a aprendizagem genuína.
- **Calibrar a dificuldade:** use estimativas de dificuldade da IA para selecionar itens apropriadamente desafiadores, com forte validação antes do uso de alto impacto.
- **Personalizar via modelos do aprendiz:** combine a AQG com rastreamento de conhecimento e modelos de interesses para gerar itens adaptativos e individualizados.

## Conceitos conectados

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## Artigos conectados

- [[genai-medical-education-transformation-review-2026]] — Revisão de escopo de 153 relatórios de educação médica sobre geração de itens por IA versus qualidade de itens da faculdade
- [[assessing-quality-ai-generated-exams-field-2025]] — Validação de campo em larga escala da qualidade de exames gerados por IA via IRT
- [[generate-then-validate-question-gen]] — Generate-Then-Validate question generation
- [[kt4eqg-personalized-question-generation]] — Personalized question generation via knowledge tracing
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[llm-educational-question-cognitive-depth]] — Cognitive depth of LLM-generated questions
- [[slidesqaqa-pedagogical-question-generation]] — Slide-deck Q&A pedagogical question generation
- [[code-gen]] — CODE-GEN: RAG-based human-in-the-loop question generation
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles benchmark
- [[taklif-ai-interest-based-personalized-assignments]] — Interest-based personalized assignments
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM-based difficulty calibration
- [[self-referential-l2-writing-llm-assessment]] — Self-referential analytic writing assessment
- [[cross-dataset-bloom-question-classification]] — Cross-dataset Bloom question classification
- [[llm-chatbots-cs-multiple-choice]] — LLM chatbots and CS multiple-choice items
- [[socratic-tests-conversational-assessment]] — Socratic tests: conversational assessment
- [[llm-turing-test-italian-legal-exams-2026]] — LLM Turing test in legal exams
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[automated-constructive-assessment-hdr-llm-2026]] — Automating Constructive Assessment with Large Language Models: Toward Scalable and Repeated Evaluation of Practical Competence
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Students could not tell AI-generated MCQs from licensing-exam items in a graded exam, and 18.2% of generated items were eliminated in review (Vogt et al. 2026)
