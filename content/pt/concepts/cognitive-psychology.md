---
title: Psicologia cognitiva
created: "2026-08-27T10:52:12-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
translation_of: concepts/cognitive-psychology
source_updated: "2026-10-26T08:45:00-04:00"
translation_note: "Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

> **Psicologia cognitiva / cognitivismo** — a família de teorias que explica a aprendizagem por meio de processos mentais internos — atenção, percepção, memória, raciocínio e metacognição — e não apenas pelo comportamento observável. Na [[ai-education|IA na educação]], os pressupostos cognitivistas sustentam as contribuições mais distintivas do campo: os sistemas de [[intelligent-tutoring]] que modelam o conhecimento de quem aprende, o [[knowledge-tracing]] e o [[cognitive-diagnosis]] que rastreiam o que um estudante sabe, os desenhos de [[feedback]] fundamentados no diagnóstico de erros, e toda a família de [[student-modeling|modelagem do estudante e instrução adaptativa]]. O cognitivismo é o meio-termo entre o [[behaviorism]] (a aprendizagem como mudança comportamental) e o [[constructivist|construtivismo]] (a aprendizagem como construção ativa de significado), e é a lente teórica mais estreitamente ligada à metáfora computacional da mente que animou a AIED inicial.

## Perguntas para refletir

- Quando você pensa em "aprendizagem", imagina uma mudança no que alguém faz, ou uma mudança no que ele sabe e consegue recuperar? Como essa distinção poderia mudar a forma como você julga se uma ferramenta de tutoria por IA realmente funciona?
- A tutoria por IA é construída sobre uma "metáfora computacional" — tratar a mente como um sistema de processamento de informação com limites de memória. Onde essa metáfora parece poderosa, e onde ela pode deixar passar algo importante sobre como os humanos aprendem?
- Uma ferramenta de IA torna uma tarefa sem esforço: ela explica o próximo passo, reduz o atrito, e quem aprende tem um desempenho excelente enquanto a usa. Isso conta como um [[teacher-role|ensino]] bem-sucedido? Como você saberia se quem aprende agora consegue fazer isso sem a ferramenta?
- A Teoria da Carga Cognitiva distingue carga intrínseca, extrínseca e pertinente. Se você fosse desenhar um assistente de IA, que tipo de carga tentaria deliberadamente reduzir, e de qual tomaria cuidado para NÃO remover?
- Se quem aprende sabe que pode descarregar memória e raciocínio em uma IA, quando isso é uma estratégia inteligente e quando é um atalho que silenciosamente impede a aprendizagem? O que determina a diferença?
- O cognitivismo pressupõe que o conhecimento pode ser decomposto em componentes e rastreado ao longo do tempo. O que pode se perder quando reduzimos a compreensão de um estudante a um conjunto de componentes de conhecimento rastreáveis?

## Introdução

A psicologia cognitiva é a tradição da teoria da aprendizagem que trata a aprendizagem como uma mudança nas representações mentais internas — conceitos, esquemas e procedimentos mantidos na memória — e não como uma mudança no comportamento observável. Seu vocabulário de processamento de informação (atenção, codificação, recuperação, memória de trabalho limitada) forneceu tanto a linguagem diagnóstica para a dificuldade de aprendizagem quanto a arquitetura por trás da [[intelligent-tutoring]] e do [[knowledge-tracing]]: sistemas que inferem o estado interno de quem aprende e se adaptam a ele. Ela permanece como o referencial para a [[metacognition]], as [[desirable-difficulties]] e a [[self-regulated-learning]] ao longo desta base de conhecimento.

[[seeing-cognitive-representations-eeg-reconstruction|Su et al. (2026)]] reconstruíram imagens a partir do EEG de quem aprende durante vídeos de ciências e constataram que a fidelidade da representação acompanhava o desempenho no teste (coeficiente de regressão 0,8481, R² = 0,79) — evidência direta de que uma medida da representação interna pode indexar a codificação

## Ideias centrais

- **A aprendizagem é uma mudança nas representações mentais internas.** O cognitivismo sustenta que a aprendizagem envolve a aquisição, o armazenamento e a reorganização do conhecimento na memória — conceitos, esquemas e procedimentos — e não apenas uma mudança na resposta observável. O que alguém *sabe e consegue recuperar* importa, não apenas o que faz.
- **A metáfora do processamento de informação (computacional).** A mente é tratada como um sistema de processamento de informação com capacidades e gargalos — a [[item-response-theory|mensuração]] da habilidade latente, os limites da memória de trabalho, a codificação e a recuperação —, que é exatamente o modelo que tornou a tutoria por IA (um programa de computador que modela a cognição de quem aprende e se adapta a ela) um encaixe natural.
- **Atenção e memória são limitadas.** A memória de trabalho tem capacidade limitada; a aprendizagem durável exige codificação na memória de longo prazo por meio de repetição, elaboração e [[retrieval-spacing-interleaving|prática de recuperação]]. Isso conecta o cognitivismo à [[research-methods-aied|pesquisa]] sobre [[cognitive-offloading]] (delegar memória/processamento a ferramentas externas) e à "lacuna entre desempenho e aprendizagem" quando a IA contorna a recuperação e a prática.
- **A metacognição regula a cognição.** A [[metacognition]] — monitorar e controlar o próprio pensamento — é um construto distintivamente cognitivista, e explica por que a calibração de quem aprende sobre quando confiar na IA importa para a aprendizagem (veja [[cognitive-offloading]] e [[self-regulated-learning]]).
- **O conhecimento é decomponível e rastreável.** A AIED cognitivista pressupõe que o conhecimento de quem aprende pode ser representado como componentes e rastreado ao longo do tempo — a base do [[knowledge-tracing]], do [[cognitive-diagnosis]] e da [[item-response-theory]].

## O cognitivismo e a IA na educação

### A linhagem cognitivista da AIED

O cognitivismo é, sem exagero, a teoria mais responsável pela própria existência da IA na educação. Os primeiros tutores cognitivos (por exemplo, os tutores baseados em ACT-R, de Anderson) [[embodied-learning|corporificaram]] o pressuposto de que a aprendizagem poderia ser modelada como regras de produção e de que um sistema poderia rastrear quais regras um estudante havia dominado. Isso produziu a arquitetura canônica que ainda define o campo: um modelo de domínio, um [[student-modeling|modelo do estudante]] que rastreia o estado de conhecimento de quem aprende, e um modelo [[pedagogy|pedagógico]] que adapta a instrução — todos de origem cognitivista. O [[knowledge-tracing]] moderno (bayesiano, de aprendizado profundo e baseado em TRI) e o [[cognitive-diagnosis]] dão continuidade a essa tradição. O mesmo pressuposto sustenta a [[intelligent-tutoring]], a [[adaptive-learning]] e a [[personalized-learning]], que a base de conhecimento agrupa sob o guarda-chuva [[student-modeling|Modelagem do estudante e instrução adaptativa]].

### A carga cognitiva e o desenho da instrução

A Teoria da Carga Cognitiva (CLT) é o framework cognitivista mais amplamente aplicado no [[learning-design|desenho instrucional]]: ela distingue carga intrínseca (complexidade da tarefa), carga extrínseca (atrito de apresentação) e carga pertinente (esforço de construção de esquemas). Uma IA bem desenhada deveria reduzir a carga extrínseca preservando o processamento pertinente; uma IA mal integrada reduz as três, deixando tarefas concluídas com uma aprendizagem vazia. O enquadramento da memória de trabalho na CLT também é central para os debates sobre [[cognitive-offloading]] — se a IA reduz a carga extrínseca prejudicial ou interrompe o processamento pertinente que produz a aprendizagem.

A carga acompanhou como o esforço estava organizado, e não quanto foi gasto: entre 67 professores em formação inicial que desenhavam planos de aula com GenAI, o grupo de maior qualidade não diferiu no esforço relatado (2,85 vs. 3,26), mas relatou menor demanda mental (3,09 vs. 4,03) e menor frustração (2,12 vs. 3,82) ([[fang-human-ai-collaboration-patterns-instructional-design-2026|Fang et al. (2026)]]).

A Teoria Cognitiva da Aprendizagem Multimídia (CTML), de Mayer, aplica os mesmos pressupostos de memória de trabalho aos próprios materiais, e suas prescrições são excepcionalmente concretas: quem aprende se sai melhor com palavras e imagens juntas do que apenas com palavras, quando o material extrínseco é excluído, quando a lição é segmentada e conduzida pelo ritmo do usuário em vez de apresentada como uma única unidade contínua, quando as palavras e imagens correspondentes aparecem próximas e ao mesmo tempo, e quando a narração é conversacional e em uma voz humana amistosa, e não formal ou gerada por máquina.

### Cognitivismo versus behaviorismo e construtivismo

- **versus [[behaviorism]]:** O behaviorismo explica a aprendizagem como mudança comportamental observável por meio de reforço e exercício repetitivo; o cognitivismo insiste nas representações internas e rastreia estados mentais. A prática de IA frequentemente exibe uma lacuna de "construtivismo no nome, behaviorismo na prática", mas os desenhos cognitivistas (modelagem do estudante, rastreamento de conhecimento) são distintos do exercício-e-feedback puramente behaviorista porque *representam e se adaptam ao conhecimento inferido de quem aprende*, em vez de meramente reforçar respostas.
- **versus [[constructivist|construtivismo]]:** O construtivismo sustenta que os [[learners]] constroem ativamente significado por meio da experiência; o cognitivismo enfatiza a codificação precisa de conhecimento (frequentemente pré-estruturado) e de habilidades. A linhagem cognitivista da AIED (domínios estruturados, componentes de conhecimento explícitos) às vezes é criticada como behaviorista ou transmissiva demais pelos construtivistas, enquanto o cognitivismo responde que representar e rastrear o conhecimento é o que possibilita uma instrução genuinamente adaptativa.
- **versus as [[learning-sciences|ciências da aprendizagem]]:** O cognitivismo fornece os mecanismos com os quais aquele campo desenha — memória de trabalho, codificação, recuperação, componentes de conhecimento decomponíveis —, mas não é, ele próprio, orientado ao desenho. Ele explica como a aprendizagem acontece; as ciências da aprendizagem perguntam como construir ambientes nos quais ela acontece e submetem esses desenhos ao teste empírico.

### A tensão da era da IA: a fronteira do cognitivismo está sob pressão

A [[generative-ai|IA generativa]] ao mesmo tempo estende e desafia o cognitivismo. Ela o estende ao tornar as representações de conhecimento mais poderosas (LLMs como motores de conhecimento que podem ser rastreados via [[knowledge-tracing]] e adaptados via [[student-modeling]]). Ela o desafia ao complicar onde a cognição "está": quando a IA realiza raciocínio, memória e até funções metacognitivas, o pressuposto cognitivista de que a aprendizagem é processamento interno na mente individual fica abalado — como argumentam a [[distributed-cognition]], a [[ai-cognitive-partner-co-regulation-learning|corregulação]] e os enquadramentos pós-humanos, para quem a cognição pode ser distribuída entre sistemas humanos e artificiais. Ainda assim, a pergunta cognitivista permanece a questão central do campo: *quem aprende internaliza o conhecimento, ou a ferramenta o retém?* É a pergunta do descarregamento cognitivo e da lacuna entre desempenho e aprendizagem em sua forma mais pura.

## Implicações para o desenho e a pesquisa

1. **Desenhe para a internalização, não apenas para o desempenho.** A AIED cognitivista deveria ser avaliada por quem aprende conseguir recuperar e aplicar o conhecimento *sem* a ferramenta — não pelo desempenho assistido. Essa é a [[ai-misuse-learning-harm|lacuna entre desempenho e aprendizagem]] e a justificativa para mensurar a [[transfer-of-learning|transferência]] não assistida.
2. **Represente quem aprende, não apenas responda.** Vincule [[student-modeling]] e [[knowledge-tracing]] estruturados ao diálogo com IA para que o sistema se adapte ao conhecimento inferido, em vez de responder com fluência, mas às cegas.([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **Respeite os limites da memória de trabalho.** Aplique a Teoria da Carga Cognitiva à UX de IA: reduza a carga extrínseca (atrito, interfaces sobrecarregadas) preservando o processamento pertinente ([[desirable-difficulties|dificuldade produtiva]], prática de recuperação), em vez de minimizar toda a demanda cognitiva.
4. **Calibre a metacognição.** Como a [[metacognition]] governa quando quem aprende escolhe descarregar, ensinar a calibração (saber o que se consegue fazer de fato sem ajuda) é uma resposta cognitivista ao excesso de confiança (veja [[cognitive-offloading]]).

## Ideias equivocadas comuns

- **"As representações mentais são inobserváveis, então as afirmações cognitivas sobre a aprendizagem são suposições."** Reconstruir imagens a partir do **EEG** de quem aprende durante vídeos de ciências mostrou que **a fidelidade da representação acompanhava o desempenho no teste** (coeficiente de regressão **0,8481, R² = 0,79**). A premissa cognitivista da representação interna é mensurável, e a medida previu o desfecho.
- **"Um R² alto significa que a representação explica a aprendizagem."** R² = 0,79 é uma associação forte entre fidelidade e desempenho no mesmo material. Não estabelece que elevar a fidelidade eleva o desempenho, que é a afirmação de intervenção.
- **"Os componentes de conhecimento são uma ficção de modelagem conveniente."** A decomponibilidade é o que torna possíveis o [[knowledge-tracing|rastreamento de conhecimento]] e o [[cognitive-diagnosis|diagnóstico cognitivo]], e os métodos funcionam na medida em que o pressuposto se sustenta. Tratá-lo como ficção descarta a razão pela qual os métodos produzem estimativas utilizáveis — enquanto tratá-lo como fato exagera o que um modelo ajustado diz sobre uma mente.

## Conceitos conectados

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — os achados de retenção nos quais essa família de práticas se apoia

## Artigos conectados

- [[cognitive-shift-ai-education]] — A mudança cognitiva na educação com IA
- [[cogtax-cognitive-taxonomy]] — Uma taxonomia cognitiva para o uso de IA
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Agentes de LLM pedagógicos fundamentados no rastreamento de conhecimento
- [[nie-personavlm-long-term-personalization-2026]] — Modelagem de estudante e memória com LLM
- [[ai-cognitive-partner-co-regulation-learning]] — A IA como parceira cognitiva na aprendizagem corregulada
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: pensar como interação humano–IA
- [[fang-human-ai-collaboration-patterns-instructional-design-2026]] — Organização do esforço, e não quantidade de esforço, acompanhou a carga e a frustração
