---
title: Análise de redes
created: "2026-08-22T01:40:00-04:00"
updated: "2026-10-04T10:50:04-04:00"
type: concept
technology: [knowledge-graph, learning-analytics]
confidence: high
methods: [network-analysis, research-methods-aied]
translation_of: concepts/network-analysis
source_updated: "2026-10-04T10:50:04-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Análise de redes** — a família de [[research-methods-aied|métodos de pesquisa]] que modela entidades (pessoas, conceitos, ações ou códigos) como **nós** conectados por **arestas** que representam relações ou transições, para então analisar a estrutura e a dinâmica da rede resultante e revelar padrões invisíveis a contagens de frequência ou comparações pareadas. Na pesquisa em IA na educação, a análise de redes é usada para mapear padrões de interação entre quem aprende e as ferramentas de IA, modelar como elementos de conhecimento ou de discurso coocorrem, e rastrear sequências temporais de comportamento. Ela inclui variantes distintas — a **Análise de Redes Epistêmicas** (ENA, que modela a coocorrência de códigos/construtos), a **Análise de Redes Sociais** (SNA, que modela relações entre pessoas) e a **Análise de Redes de Transição** (TNA, que modela sequências temporais de estados) —, cada uma das quais operacionaliza "a aprendizagem como conexão" de uma forma diferente. ([[tracing-genai-literacy-interaction-patterns]]) ([[penny-transition-network-analysis-efl-writing-2026]]) ([[misiejuk-cognitive-offloading-prompting-2026]])

## Perguntas para refletir

- Quando você ouve "análise de redes" na educação, que imagens vêm à mente — mapas de amizade dos estudantes, ligações entre ideias, ou outra coisa? Como elas diferem de simplesmente contar quantas vezes as coisas ocorrem?
- Suponha que você quisesse saber se os estudantes de fato se engajam com o feedback de uma ferramenta de escrita com IA, ou se apenas recebem respostas. Por que uma métrica de "quantas vezes eles clicaram" poderia deixar passar a história que uma sequência de ações (por exemplo, um laço de revisão versus um laço de chat) revelaria?
- A página distingue análise de redes epistêmicas, sociais e de transição. Sem conhecer os detalhes, você consegue adivinhar qual variante usaria para estudar (a) como as pessoas colaboram, (b) quais ideias coocorrem no raciocínio dos estudantes, e (c) como quem aprende se move entre estados ao longo do tempo?
- Um pesquisador constata que estudantes de letramento alto e baixo usam a mesma ferramenta de IA, mas produzem estruturas de rede de raciocínio muito diferentes. O que isso lhe diz sobre avaliar ferramentas de IA com uma única nota média?
- Métricas de rede como "densidade" e "centralidade" descrevem se a interação é aleatória ou organizada em torno de hubs. Quando uma rede organizada, centrada em um único estudante, seria sinal de boa colaboração — e quando sinal de problema?

## Introdução

Os métodos de análise de redes compartilham uma premissa central: a estrutura das conexões — e não apenas sua presença ou frequência — carrega significado. Em vez de perguntar "quanto de X ocorreu", eles perguntam "como os elementos estão conectados, e o que essa conectividade revela sobre [[metacognition|cognição]], [[collaborative-learning|colaboração]] ou processos de aprendizagem?". Isso os torna especialmente valiosos na IA na educação, onde os pesquisadores querem crescentemente compreender o *processo* da interação entre quem aprende e a [[student-ai-interaction|IA]] (como quem aprende navega [[feedback|feedback]], diálogo e revisão), e não apenas o produto (notas finais, taxas de erro).

## Variantes usadas no corpus da base de conhecimento

- **Análise de Redes Epistêmicas (ENA)** — a variante mais comum na base de conhecimento (discutida em ~24 artigos). A ENA modela a coocorrência de códigos ou construtos dentro de segmentos de discurso ou atividade, produzindo redes que mostram quais ideias, habilidades ou ações epistêmicas tendem a estar conectadas em um determinado contexto. Ela é usada para comparar como diferentes grupos (por exemplo, estudantes de letramento alto versus baixo, colaboradores humanos versus IA) estruturam sua cognição. ([[tracing-genai-literacy-interaction-patterns]]) ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Análise de Redes Sociais (SNA)** — modela relações entre pessoas (quem aprende, professores, agentas) para revelar estruturas de colaboração, influência, centralidade e comunidade. Útil para estudar a aprendizagem [[collaborative-learning|colaborativa]] e entre pares. ([[misiejuk-cognitive-offloading-prompting-2026]])
- **Análise de Redes de Transição (TNA)** — modela sequências temporais de estados discretos (por exemplo, ações de quem aprende em uma sessão de tutoria) como uma rede dirigida, quantificando a probabilidade de mover-se entre estados. A TNA é usada para revelar laços comportamentais, trajetórias e dinâmicas de incorporação na interação entre quem aprende e a IA. ([[penny-transition-network-analysis-efl-writing-2026]])

Elas diferem de um **[[knowledge-graph|grafo de conhecimento]]**, que é uma estrutura de dados para representar e raciocinar sobre fatos (uma ontologia/armazém de triplas), e não um método analítico para estudar processo ou estrutura de relação.

## A análise de redes na pesquisa em IA na educação

Os métodos de rede são usados ao longo da base de evidências da base de conhecimento para responder a perguntas que métricas agregadas não conseguem:

- **Abrir a "caixa-preta" da interação entre quem aprende e a IA.** A TNA revela o *processo* — os laços e trajetórias comportamentais que quem aprende percorre ao usar ferramentas de IA (por exemplo, um "laço de revisão" versus um "laço de chat" na [[writing-education|escrita]] com andaimento de [[conversational-ai|chatbot]]), e não apenas a saída final. ([[penny-transition-network-analysis-efl-writing-2026]])
- **Comparar a estruturação cognitiva entre grupos.** A ENA mostra como diferentes grupos conectam construtos de formas diferentes — por exemplo, como a [[metacognition]] coocorre com a delegação versus o raciocínio humano na colaboração humano–IA, revelando diferentes modos de colaboração. ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Rastrear assinaturas de letramento em IA e de interação.** A ENA sobre registros de interação identifica padrões distintos de uso de [[llm|LLM]] (refinamento estratégico iterativo versus comandos lineares), distinguindo a [[ai-literacy|proficiência]] e o desenvolvimento de quem aprende. ([[tracing-genai-literacy-interaction-patterns]])
- **Analisar discurso e enquadramento.** A ENA é aplicada a dados [[qualitative-research|qualitativos]] e [[multimodal|multimodais]] (por exemplo, enquadramentos do ChatGPT em educação no YouTube) para revelar a estrutura do discurso público ou disciplinar. ([[youtube-frames-chatgpt-education]])
- **Complementar o autorrelato e as métricas de produto.** Como os métodos de rede usam dados comportamentais observados, eles podem expor discrepâncias entre o que quem aprende alega e o que de fato faz — um achado recorrente na literatura da base de conhecimento sobre incorporação de feedback.
- **A estrutura do grafo como quantidade de validação, não como resumo descritivo.** [[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]] rastreiam β0 — o número de componentes conectados de um grafo semanal de proximidade sobre quem aprende a um limiar euclidiano fixo — para testar se turmas sintéticas reproduzem as reais, preferindo-o porque é fixado pelo grafo sozinho, não precisa de otimização nem de semente aleatória, ao contrário da maximização de modularidade, e permanece definido quando de um sétimo a um terço de quem aprende fica isolado em um componente.

## Considerações metodológicas

- **A codificação é o fundamento.** Todas as variantes de rede dependem de codificar de forma confiável dados brutos (falas, eventos, relações) em nós/códigos discretos; a codificação automatizada baseada em LLM é crescentemente usada, mas exige validação humana (por exemplo, κ de Fleiss de 0,70–0,71 em estudos de TNA). ([[penny-transition-network-analysis-efl-writing-2026]])
- **Tratar a concordância entre codificadores como uma verificação contínua, e não como uma estatística única.** [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] codificaram 304 afirmações de noticing com α de Krippendorff = .803 e monitoraram a concordância ao longo do estudo, recodificando afirmações disputadas sempre que o κ agrupado caía abaixo de seu limiar de recalibração de .85 (nos Casos 18 e 27), sem precisar de nova recalibração a partir dos Casos 36–51. A sequência é o ponto: uma confiabilidade medida apenas no final teria deixado os modelos de transição iniciais apoiados sobre deriva de codificadores, já que esses padrões semanais de transição eram o achado do estudo.
- **As métricas no nível da rede resumem a estrutura.** Densidade, reciprocidade, centralização e força de entrada/saída descrevem se a interação é aleatória ou organizada em torno de hubs "gravitacionais", e quão recíproca é a troca.
- **A comparação estatística é necessária para diferenças entre grupos.** Testes de qui-quadrado ou testes de permutação são usados para estabelecer que as diferenças de rede observadas (por exemplo, por proficiência) não se devem ao acaso. [[caeai-response-length-ai-ethics-education-2026|Shao et al. (2026)]] mostram que o nulo precisa ser construído para corresponder ao texto. Em uma discussão de caso com vinte estudantes de [[higher-ed|pós-graduação]] de disciplinas mistas, a parcela de termos compartilhados de tamanho 3 subiu de 5,2% para 8,0%, enquanto os tokens de conteúdo caíram para aproximadamente 0,65× seu nível pós-leitura. Um teste de permutação de saco inteiro teria chamado essa subida de significativa; seu teste de permutação de tokens condicionado ao comprimento não (Q6 p = .62, Q7 p = .15).
- **Valide o instrumento antes de ler sua rede.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai & Alshahri (2026)]] construíram a AI-STEM-MLCS de 45 itens pela rota completa de desenvolvimento de escala — razões de validade de conteúdo de especialistas, análise fatorial exploratória e depois confirmatória (CFI = 0,983, RMSEA = 0,019), ω de McDonald de 0,888–0,905, e ICCs teste-reteste de duas semanas de 0,751–0,900 — antes de modelar as quatro dimensões com análise de grafos exploratória. Derivar a estrutura de uma rede cujos nós são notas de escala não validadas é o que essa ordenação evita, e os autores nomeiam a validação específica da Arábia Saudita como o limite à transferência da estrutura.
- **Interprete com cuidado.** A granularidade dos nós (por exemplo, um nó "chat" grosseiro) pode obscurecer a intenção; a classificação automatizada carrega alguma ambiguidade; e a estrutura de rede transversal não estabelece causalidade.
- **Redes que expõem o que um agregado esconde.** [[genai-social-annotation-epistemic-network-analysis-2026|Pan et al. (2026)]] constataram que a turma com anotação por IA generativa superou e se engajou mais que seu controle, e então dividiram a turma experimental pela mediana de desempenho e mostraram que o ganho não foi compartilhado: os grupos de alto desempenho iniciaram 60,7% dos pedidos de feedback em suas anotações, contra 34,0% dos grupos de baixo desempenho, que permaneceram em um laço autorreferencial (separação de grupos significativa no eixo X da ENA, U = 25,00, p = 0,01). A lição de desenho é que um efeito no nível do grupo pode resumir duas estruturas de interação diferentes — e os dois grupos eram turmas intactas, de modo que a comparação identifica o padrão sem atribuí-lo causalmente.

## Implicações para a pesquisa em IA na educação

1. **Prefira métodos de processo a métricas apenas de produto.** Para avaliar se as ferramentas de IA apoiam a aprendizagem, modele como quem aprende de fato se engaja (incorporação, diálogo, revisão) com métodos de sequência/rede, em vez de confiar apenas nas notas finais.
2. **Use a ENA para comparar a estruturação cognitiva.** Ao perguntar como diferentes estudantes ou modos (humano versus IA) estruturam seu raciocínio, a ENA oferece uma comparação direta e visual das redes de coocorrência — uma técnica bem adequada à [[student-modeling|modelagem de estudante]] de como quem aprende conecta ideias.
3. **Valide a codificação automatizada.** Com grandes conjuntos de dados de registros, a classificação baseada em [[llm|LLM]] é poderosa, mas precisa ser verificada contra a codificação humana (relate a concordância entre corretores) antes de interpretar a estrutura da rede.
4. **Desenhe para a diferenciação.** A análise de redes frequentemente revela que a *mesma* ferramenta de IA produz padrões de interação diferentes entre subgrupos de estudantes — informando um desenho adaptativo, e não uma avaliação única para todos.

## Validação por ENA de diálogo colaborativo simulado

- **A ENA como validação de diálogo simulado.** Fang (2026) aplica a Análise de Redes Epistêmicas para avaliar se agentes de LLM ajustados reproduzem a estrutura do diálogo real de [[problem-solving|resolução colaborativa de problemas]]. Comparando vetores de adjacência simulados à rede empírica, ele relata uma distância de ENA de 0,17 — dentro do limiar do 95º percentil da distribuição nula, com um valor p de permutação de 0,65 —, demonstrando o poder da ENA como uma verificação [[quantitative-research|quantitativa]] da fidelidade das [[simulation|simulações]] generativas de discurso, ao lado de outras aplicações de ENA/SNA/TNA na pesquisa em educação.

## Conceitos conectados

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## Artigos conectados
- [[caeai-response-length-ai-ethics-education-2026]] — O comprimento da resposta, e não o alinhamento lexical, impulsiona as estatísticas de termos compartilhados em redes de participante–morfema (Shao et al. 2026)

- [[penny-transition-network-analysis-efl-writing-2026]] — TNA das interações entre quem aprende e chatbot na escrita de inglês como língua estrangeira com andaimento
- [[tracing-genai-literacy-interaction-patterns]] — ENA dos padrões de interação do letramento em IA generativa
- [[hao-human-ai-collaborative-problem-solving-cognition]] — ENA da resolução colaborativa de problemas humano–IA
- [[misiejuk-cognitive-offloading-prompting-2026]] — Descarregamento cognitivo e prompting (métodos de SNA/redes)
- [[youtube-frames-chatgpt-education]] — ENA dos enquadramentos do ChatGPT em educação no YouTube
- [[agency-gap-ai-writing]] — A lacuna de agência na escrita apoiada por IA (ENA)
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
