---
title: "Que medidas e métodos de pesquisa um instrutor pode usar para avaliar intervenções relacionadas à IA?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/evaluating-ai-interventions-methods
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

Você rodou o piloto em duas turmas, coletou uma pesquisa de fim de unidade e tem uma reunião de colegiado em três semanas em que alguém vai perguntar se funcionou. Ou um revisor perguntou qual era a sua condição de comparação, e a outra turma fez algo diferente. De um jeito ou de outro: o que contaria como evidência aqui?

Case o método com a alegação. Uma pesquisa diz se os estudantes gostaram da atividade. Se eles aprenderam exige uma medida de desempenho, e se a IA causou o ganho exige uma condição de comparação.

## A versão curta

**1.** Escreva a alegação numa frase, com o desfecho nomeado. "Os estudantes que usaram o tutor tiveram notas mais altas na prova sem assistência" é testável.

**2.** Faça uma linha de base, a intervenção, uma medida posterior imediata e uma medida mais tardia feita sem IA.

**3.** Descreva a condição de comparação com o mesmo cuidado que o tratamento, mesmo quando ela é a sua prática já existente.

**4.** Meça o desempenho assistido e a aprendizagem independente em separado, e trate qualquer média publicada como uma hipótese sobre a sua turma.

## Escolha o método que a sua pergunta consegue sobreviver

A página [[research-methods-aied|Métodos de Pesquisa em IAED]] expõe o que cada opção compra. Experimentos randomizados dão a inferência causal mais forte. Desenhos quase experimentais de pré/pós ou de grupos pareados se ajustam a turmas intactas e sustentam alegações mais fracas. Entrevistas, grupos focais, observações e análise de artefatos [[qualitative-research|qualitativos]] revelam mecanismos e experiências inesperadas. [[mixed-methods-research|Métodos mistos]] combinam evidência de desfecho com uma explicação. [[design-based-research|Pesquisa baseada em design]] serve ao professor que refina uma intervenção ao longo de iterações.

A análise qualitativa assistida por IA entra nessa lista com uma condição. Ela reorganiza um corpus de entrevistas em minutos, então a [[chain-behind-claim-warrantability-2026|garantia de sustentação]] importa tanto quanto a acurácia: registre as reorganizações documentadas que permitem a um leitor inspecionar, contestar e revisar o caminho dos dados até a alegação.

Uma pesquisa é uma [[self-report-measures|medida de autorrelato]]: certa para atitudes, errada para aprendizagem.

## Dê um nome à condição de comparação

Três condições tornam uma alegação causal interpretável: um tratamento descrito com precisão, uma condição de comparação bem definida e uma medida válida de aprendizagem duradoura. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] auditaram 19 comparações de ChatGPT na educação contra esses critérios. Quatro (21%) satisfaziam os três. O tratamento estava bem definido em 74%, o grupo de controle em 42%, e o desfecho se qualificava como aprendizagem em 53%.

O modo de falha é fácil de reproduzir. Uma [[generative-ai|ferramenta de uso geral]] introduzida junto com novas atividades, novo feedback ou uma interface redesenhada confunde o meio com o método, e o resultado significativo pertence ao redesenho.

## Meça os desfechos com que você realmente se importa

A síntese [[ai-ed-evaluation|Avaliação em IA Educacional]] recomenda ganho de aprendizagem sem assistência, retenção tardia, transferência para uma nova tarefa, qualidade do raciocínio, [[misconceptions|concepções errôneas]], aproveitamento do feedback e desempenho por subgrupo. Engajamento, satisfação, registros de uso de IA, [[self-efficacy|autoeficácia]] e [[technology-acceptance-model|utilidade percebida]] são medidas secundárias razoáveis e substitutos ruins para a aprendizagem. Carga de trabalho e economia de tempo contam como desfechos de implementação, uma pergunta diferente.

O mínimo em escala de sala de aula é uma linha de base, a intervenção, uma medida posterior imediata e uma medida tardia sem assistência. Acrescente uma condição de comparação onde puder: prática existente, sem IA, IA sem restrições contra IA com scaffolding, ou dois desenhos alternativos. Pontue o desempenho assistido e o sem assistência em instrumentos separados, já que uma única rubrica vai misturar os dois.

## Leia qualquer número como uma hipótese

Um efeito médio da literatura é um guia fraco para uma sala de aula. [[oneill-presumed-effective-meta-analysis-2026|A auditoria de O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|meta-análises]] de alto impacto constatou que nenhuma oferecia base válida para as suas alegações. O [[learning-gains|"desempenho acadêmico"]] agrupado misturava notas de provas, motivação, [[self-efficacy|autoeficácia]] e atitudes numa única estimativa. A heterogeneidade era extrema: o I² variou de 77,2% a 94,4% nas 13 análises que o relataram, e 12 delas ficaram acima de 80%. Todas as 14 avaliaram o [[limitations-in-aied-research|viés de publicação]] de forma inválida, e 61% dos estudos primários verificados aleatoriamente carregavam problemas de validade. Quatro análises relataram variância entre estudos, duas relataram um intervalo de predição, e ambos os intervalos incluíam zero.

Uma pontuação conveniente pode medir o construto errado. Numa [[zhang-platform-scores-miss-ai-teaching-agents-2026|avaliação de oito agentes de ensino com IA]], o agente que ficou em terceiro na pontuação da própria plataforma ficou em último numa rubrica validada por especialistas, porque as pontuações da plataforma indexavam o desempenho do estudante durante a interação. Trate uma métrica de painel como uma hipótese.

## O que os professores entendem mal

Uma pesquisa de satisfação mede a aprendizagem. Ela mede satisfação, que a síntese de Avaliação em IA Educacional lista como medida secundária ao lado dos desfechos de aprendizagem.

Um ganho pré/pós mostra que a intervenção funcionou. Mostra que as notas subiram. Se a medida contava como aprendizagem é uma pergunta separada, e a auditoria encontrou um desfecho de aprendizagem qualificado em 53% das comparações que revisou.

Tamanhos de efeito publicados se transferem para a minha turma. As 14 meta-análises de O'Neill não sustentavam as alegações construídas sobre elas, e ambos os intervalos de predição relatados incluíam zero.

Os painéis analíticos da plataforma medem a qualidade do ensino. O agente em terceiro lugar de Zhang ficou em último numa rubrica de especialistas.

## O que vai voltar contra você

**"Já temos avaliações de fim de curso."** Elas medem o curso, e acontecem depois do semestre em que você precisava da resposta.

**"Um grupo de comparação é impossível num curso intacto."** Compare com a versão do ano passado da mesma tarefa, ou com uma segunda turma, e descreva a diferença com honestidade. Desenhos quase experimentais são mais fracos, e ainda informativos quando a alternativa é uma alegação sem comparação.

**"O tamanho de efeito da meta-análise é grande."** Em qual desfecho, na turma de quem? Ambos os intervalos de predição que O'Neill encontrou incluíam zero.

**"Nosso painel mostra engajamento forte."** Engajamento é uma medida secundária na lista de Avaliação em IA Educacional. Ponha a medida de aprendizagem sem assistência ao lado dele.

## O que fazer nesta semana

**1.** Escreva a sua alegação como uma frase e sublinhe o desfecho.

**2.** Acrescente a medida tardia sem assistência ao calendário, depois da intervenção e não na mesma semana.

**3.** Escreva um parágrafo descrevendo a condição de comparação, com o mesmo detalhe do tratamento.

**4.** Puxe os números da plataforma que você já tem e marque cada um como desfecho de artefato ou desfecho de aprendizagem.

**5.** Peça a um colega que leia o desenho e diga o que mais mudou durante o semestre.

## Para onde ir agora

[[does-ai-help-students-learn|A IA ajuda os estudantes a aprender?]] resume o que a evidência de desfecho mostra, e [[research-gaps-aied|Lacunas de Pesquisa em IAED]] cobre onde ela rareia. [[checking-whether-educational-ai-works|Como sabemos se uma IA educacional está funcionando corretamente?]] é a versão desta pergunta para quem constrói ou compra um sistema.
