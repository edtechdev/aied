---
title: Rastreamento de conhecimento
created: "2026-06-23T10:44:35-04:00"
updated: "2026-10-09T09:50:00-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Rastreamento de conhecimento** — modelar o que os estudantes sabem ao longo do tempo rastreando seu desempenho em exercícios e prevendo o domínio futuro. É o fio de modelagem mais rico da base de conhecimento, abrangendo abordagens bayesianas, de aprendizagem profunda e [[llm|aprimoradas por LLM]] para rastrear o conhecimento do estudante à medida que evolui.

## Perguntas para refletir

- O rastreamento de conhecimento modela o que você sabe ao longo do tempo a partir do seu desempenho em exercícios, rastreando quando o conhecimento é adquirido e quando decai. O que suas respostas podem revelar sobre se você verdadeiramente "sabe" algo versus apenas acertou desta vez?
- A página alerta que "domínio não é acerto" — um estudante pode parecer dominado e ainda assim aplicar sistematicamente uma habilidade de forma errada quando uma condição oculta é violada. Quando você já viu alguém (ou você mesmo) parecer que entendeu algo, mas na verdade não tinha entendido?
- Se o rastreamento de conhecimento alimenta sistemas adaptativos que decidem o que ensinar a seguir, o que dá errado quando o modelo confunde respostas corretas com domínio verdadeiro e promove o estudante cedo demais?
- O rastreamento de conhecimento assume muitas formas — bayesiano, neural, de hipergrafo, baseado em diálogo, aprimorado por LLM. Que compensações você esperaria entre um modelo transparente, que você consegue explicar, e um poderoso, mas opaco?
- A página conecta o rastreamento de conhecimento aos estudantes simulados — gerando os estados de conhecimento que o rastreamento normalmente infere a partir de dados reais. Como simular estudantes poderia ajudar a testar um tutor antes de ele encontrar estudantes reais?
- Como o conhecimento decai ao longo do tempo, o que um sistema adaptativo deveria fazer com o "domínio" passado de um estudante depois que ele o esqueceu? Como você desenharia para o esquecimento, em vez de pressupor que o conhecimento persiste?

## Introdução

O rastreamento de conhecimento transforma respostas brutas de exercícios em estimativas do que um estudante dominou e do que ele ainda precisa aprender. Diferentemente do rastreamento simples de acertos, o rastreamento de conhecimento modela a dinâmica temporal da aprendizagem — quando o conhecimento é adquirido, quando decai e como os conceitos se relacionam entre si.

### Abordagens representadas na base de conhecimento

- **Abordagens bayesianas:** o [[stanbkt-bayesian-knowledge-tracing]] padroniza implementações de BKT, enquanto o [[mbp-kt-meta-behavioral-knowledge-tracing]] incorpora sinais metacomportamentais
- **BKT de evidência suave com função de observação por LLM:** o [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] mantém a estrutura do BKT, mas substitui a observação binária correto/incorreto — a entrada do BKT padrão — por uma contínua: um avaliador [[llm|LLM]] emite evidência de domínio graduada mais um peso de confiança, mesclada em uma posterior comprimida pela confiança e barrada por um portão de modo que uma resposta claramente errada não consiga elevar a estimativa, o que torna a atualização uma variante que generaliza o BKT padrão, e não uma redução estrita dele. Se essa função de observação é confiável depende do estudante: a evidência média separou as faixas de habilidade com clareza (0,25 fraco / 0,67 misto / 0,77 forte), enquanto a correlação dentro da faixa com o domínio verdadeiro foi de apenas r ≈ 0,15 / 0,48 / 0,41, deixando o estado rastreado como a crença de um agente sobre o estudante, e não como uma mensuração calibrada.
- **Modelos neurais e híbridos:** o [[neural-symbolic-knowledge-tracing]] combina raciocínio simbólico com [[machine-learning|redes neurais]]; o [[explainable-probabilistic-kt]] avança modelos probabilísticos interpretáveis
- **Redes de memória de hipergrafo:** o [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] aumenta o rastreamento baseado em memória (DKVMN) com raciocínio temporal de hipergrafo, modelando interações dinâmicas de ordem superior entre conceitos que coocorrem em questões de múltiplas habilidades
- **KT baseado em diálogo:** o [[huang-interpretable-knowledge-tracing-2026]] adapta o rastreamento de conhecimento para a tutoria conversacional
- **Aprimorado por LLM:** o [[xie-hillm-cd-2026|HiLLM-CD]] usa LLMs para construção automatizada de árvores de conceitos e inferência hierárquica de proficiência
- **KT semântico e orientado a recomendação:** o [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec (Ozyurt, Almaci, Feuerriegel e Sachan, 2025)]] fundamenta a *entrada*, e não a arquitetura: um LLM anota cada questão com passos de solução e conceitos de conhecimento alinhados aos Common Core State Standards for Mathematics, a aprendizagem contrastiva alinha os embeddings de questão, passo de solução e conceito (com falsos negativos removidos por pré-agrupamento de variantes de conceito, como "interpretar um gráfico de barras" e "ler informação de um gráfico de barras"), e uma perda de calibração de KC permite que o rastreador preveja um estado de conhecimento em nível de conceito diretamente, em vez de inferir um executando o modelo sobre todas as questões daquele conceito. O rastreador calibrado então serve como ambiente de aprendizagem por reforço para a recomendação de exercícios, onde uma estimativa de valor baseada em modelo inicializa o crítico a partir do próprio rastreador. Ao longo de quatro tarefas no XES3G5M, com média sobre 2.048 estudantes de teste, as linhas de base não-RL deram ganhos de conhecimento marginais ou negativos, métodos contínuos baseados em valor superaram os baseados em política, e a estimativa de valor baseada em modelo os melhorou de forma consistente — mais agudamente na tarefa de conceito mais fraco, onde o alvo muda a cada passo. Os ganhos reportados são percentual de melhoria máxima de conhecimento, não resultados de aprendizagem, e o pipeline depende de passos de solução gerados cuja qualidade o rastreador herda.
- **Rastreamento de conhecimento baseado em resultados (OKT):** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] rastreiam o conhecimento do estudante dentro de sistemas de Educação Baseada em Resultados ao tratar os **próprios resultados de curso como os conceitos de conhecimento**, e substituem os "mapeamentos de afinidade" de OBE validados por especialistas entre resultados de curso e de programa pelas relações de conceito derivadas de atenção ou de grafo. Uma Rede Neural Aumentada por Memória (MANN) modela como a conquista de cada resultado impacta os outros, e o ajuste fino de BKT adaptado ao domínio enriquece os embeddings de resultado (com a espinha dorsal GRU superando a LSTM). Em dados vivos de LMS de programa de [[engineering-education|engenharia]] (2.416 estudantes, 966 resultados), o OKT alcançou 89,81% de AUC — superando DKT, DKVMN, EKT e SimpleKT —, dando apenas resultados competitivos no ASSISTments, confirmando que a vantagem está atrelada à estrutura [[curriculum-design|curricular]] específica de OBE.

- **Rastreamento apenas com instantâneo.** [[skill-acquisition-without-temporal-info|Nagai et al. (2026)]] induzem uma ordem pseudotemporal a partir de relações de inclusão entre os conjuntos de habilidades dos estudantes, tratando conjuntos de habilidades em expansão como progressão de aprendizagem, de modo que instantâneos de único ponto no tempo seguem rastreáveis — mas a formulação pressupõe que habilidades nunca são perdidas, então implantações para estudantes que regridem precisam primeiro de um mecanismo explícito de esquecimento.

### Relação com outros conceitos

O rastreamento de conhecimento é estreitamente relacionado à [[student-modeling|modelagem do estudante]] — enquanto o rastreamento de conhecimento modela especificamente o conhecimento cognitivo ao longo do tempo, a modelagem do estudante é a prática mais ampla de representar todos os aspectos de um estudante (estado [[affective-computing|afetivo]], [[student-engagement|engajamento]], preferências). O rastreamento de conhecimento alimenta sistemas de [[adaptive-learning|aprendizagem adaptativa]] e [[personalized-learning|aprendizagem personalizada]] que precisam saber o que ensinar a seguir, e plataformas de [[intelligent-tutoring|tutoria inteligente]] que usam estimativas de domínio para selecionar problemas apropriados. Ele se conecta à [[learning-analytics|analítica de aprendizagem]] para o desenho de painéis e de intervenções, e ao [[cognitive-diagnosis|diagnóstico cognitivo]] para [[assessment|avaliação]] de habilidades de granularidade fina. Os construtos de rastreamento de conhecimento também informam os [[simulating-students|estudantes simulados]] — o estado cognitivo de um estudante simulado é frequentemente formalizado com as mesmas dinâmicas de domínio e decaimento que o rastreamento de conhecimento modela, de modo que a [[simulation|simulação]] é uma forma de *gerar* os estados de conhecimento que os métodos de rastreamento normalmente *inferem* a partir de dados de resposta reais.

**Uma ressalva de escopo: o rastreamento estima domínio de domínio, não cognição de ordem superior.** Uma revisão de 15 anos de 127 estudos de tutoria inteligente constata que o rastreamento bayesiano e por aprendizagem profunda melhorou ao longo do período, mas segue incapaz de modelar processos cognitivos de ordem superior, metacognição ou motivação — os estados que um sistema adaptativo mais precisaria mirar ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

**Uma ressalva: domínio não é acerto.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] mostram que o pressuposto de dois estados do BKT (aprendido/não aprendido) pode ser violado pela *generalização enganosa* — estudantes podem parecer dominados e ainda assim aplicar sistematicamente uma habilidade de forma errada quando uma restrição oculta de aplicação é violada. Isso argumenta por rastrear a compreensão condicional (saber *quando reter* uma ação), e não apenas a correção da ação, quando as estimativas de domínio impulsionam regras de parada [[adaptive-learning|adaptativas]].

**Uma ressalva relacionada diz respeito a *como* os modelos de rastreamento são validados versus implantados.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan e Carvalho (2025)]] ajustaram BKT, BKT-com-Esquecimento e o Modelo de Fatores Aditivos a um conjunto de dados multissessão de reaprendizagem sucessiva e constataram que eles reproduzem as tendências de aprendizagem quando ajustados retroativamente a todas as sessões (AUC aceitável ≈ 0,74–0,79); mas sob **validação cruzada baseada no tempo** — treinar em uma sessão para prever a próxima, o cenário aplicado realista — os três superestimam o desempenho futuro em cerca de 47–58%, não capturam o [[desirable-difficulties|efeito de espaçamento]] e podem até prever a ordenação ordinal errada entre condições de prática. Curiosamente, modelos *sem* um mecanismo explícito de esquecimento tiveram desempenho quase tão bom quanto as versões aumentadas com esquecimento à medida que as sessões se acumulavam, sugerindo que o esquecimento foi parcialmente absorvido por outros parâmetros (por exemplo, interceptores por estudante no AFM) em vez de genuinamente modelado. Os autores vinculam isso à distinção aprendizagem-versus-desempenho: modelos populares confundem alto desempenho no momento com alta probabilidade de retenção de longo prazo. A implicação prática é que um rastreador que parece bom no ajuste retrospectivo pode enganar os sistemas adaptativos que consomem suas estimativas de domínio, o que argumenta por avaliação walk-forward e modelos que considerem o intervalo de retenção, o espaçamento e o esquecimento entre sessões.

**Uma ressalva adicional diz respeito à regra de evidência que alimenta a atualização.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] rodou quatro regras de atualização sobre sequências idênticas de eventos do ASSISTments 2012–13, diferindo apenas em como pontuam linhas concluídas com ajuda, em uma metade confirmatória de 12.716 estudantes e 985.813 eventos pontuados. Ler uma linha com dica ou repetição como uma primeira tentativa fracassada previu melhor o desempenho posterior sem ajuda (AUC agrupado 0,658); creditar qualquer conclusão o previu pior (0,604), pouco acima de uma constante que conhece apenas a dificuldade da habilidade (0,595). A mesma escolha governa a contagem de domínio: creditar conclusões declarou 93,9% dos 113.428 pares estudante–habilidade como dominados, contra 72,8% sob a regra estrita, e os pares que a regra leniente declarou à frente da estrita foram a 70,9% de precisão sem ajuda, contra 85,7% onde as duas concordaram, abaixo da taxa base de 0,744. Um estado rastreado é, portanto, parcialmente uma função da convenção de pontuação, e não apenas do estudante, então uma estimativa de domínio consumida por um portão [[adaptive-learning|adaptativo]] deveria carregar a regra que a produziu.

**Uma ressalva de capacidade: modelos gerais de linguagem rastreiam conhecimento pouco acima de uma linha de base trivial.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et al. (2026)]] lançaram o FoundationalASSIST, que restaura o texto completo das questões, as respostas que os estudantes realmente deram e suas escolhas de distratores que conjuntos de dados anteriores de rastreamento descartaram, e testaram quatro [[llm|LLMs]] de fronteira como rastreadores zero-shot. O melhor, GPT-OSS-120B, alcançou 56,2% contra os 51,3% que uma regra sempre-prever-correto já pontua (AUC-ROC 0,559), sem melhoria a partir de históricos mais longos, e a Llama-3.3-70B acertou 85,4% das vezes em que um estudante respondeu corretamente, mas apenas 12,6% quando ele errou — evidência de que um modelo de prateleira rastreia otimismo, e não compreensão, então a habilidade aparente de um rastreador precisa ser lida contra a linha de base trivial que sua tarefa permite.
- **Um LLM de passagem única pode rastrear conhecimento antes de qualquer estudante ser registrado.** Consultado como uma única questão digitada, sem dados da plataforma-alvo, o Jev alcançou AUC média de .706, acima do melhor dos 28 modelos profundos de rastreamento treinados em 8 estudantes (.689) e à frente até que o rastreamento supervisionado o alcance em 64–128 estudantes ([[system-one-llm-knowledge-tracing-2026|Lee & Park, 2026)]]).

## Conceitos conectados

- [[learners]] — Estudantes: o guarda-chuva dos conceitos do lado do estudante
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — estimativa de domínio de granularidade fina alimentando decisões de apoio

## Artigos conectados
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Generalização enganosa: o domínio adaptativo pode encerrar a prática antes que os estudantes saibam quando reter uma ação (An, McLaren & Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Tutoria inteligente baseada em grafos para domínios dinâmicos (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Rastreamento de conhecimento baseado em resultados com mapeamento de afinidade
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — rastreamento semanticamente fundamentado com estados calibrados por KC, usado como ambiente de RL para recomendação
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: um tutor agêntico que aprende seu estudante em um ciclo de coaprendizagem humano-IA
- [[crediting-assisted-work-inflates-mastery-2026]] — Qual regra de evidência decide uma alegação de domínio (Srivastava 2026)
- [[system-one-llm-knowledge-tracing-2026]] — Um LLM de passagem única rastreia conhecimento acima de modelos profundos treinados em 8 estudantes, a uma fração do custo (Lee & Park 2026)

- **A single recency scalar captures most of what a sequence model buys.** On 1,927,265 mathematics responses from 8,996 Finnish students, item identity alone reached AUC .8362; adding one recency measure relative to item difficulty raised it to .8669, recovering 93.5% of a query-conditioned transformer's .8690 gain, while a 128-dimensional summary of history reached only .8687 ([[knowledge-tracing-compression-math-2026|Lahtinen & McMullen (2026)]]).
- [[knowledge-tracing-compression-math-2026]] — Compressing student history in mathematics knowledge tracing
