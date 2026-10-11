---
title: "Que medidas e métodos de pesquisa um instrutor pode usar para avaliar intervenções relacionadas à IA?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-02T08:21:34-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/evaluating-ai-interventions-methods
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

# Que medidas e métodos de pesquisa um instrutor pode usar para avaliar intervenções relacionadas à IA?

**Combine o método com a afirmação.** Se você quer saber se os estudantes *gostaram* de uma atividade com IA, uma pesquisa pode ajudar. Se você quer saber se eles *aprenderam*, use medidas de desempenho. Uma pesquisa é uma [[self-report-measures|medida de autorrelato]] — o instrumento certo para atitudes e o errado para aprendizagem, pelas razões coletadas naquela página. Se você quer saber se a IA *causou* uma melhora, você precisa de uma condição de comparação crível e, de preferência, de atribuição aleatória.

## Opções de método

A página de [[research-methods-aied|Métodos de Pesquisa em AIED]] distingue várias opções úteis:

- **Experimentos randomizados** fornecem a inferência causal mais forte.
- **Desenhos quase experimentais** de pré/pós ou de grupos pareados são frequentemente mais práticos em turmas intactas, mas apoiam afirmações causais mais fracas.
- **[[qualitative-research|Qualitativos]]**: entrevistas, grupos focais, observações e análise de artefatos revelam mecanismos e experiências inesperadas.
- **Análise qualitativa assistida por IA** pode reorganizar corpora de entrevistas ou observações em minutos, então a [[chain-behind-claim-warrantability-2026|garantia de fundamento]] importa tanto quanto a precisão ou a declaração: registre as reorganizações documentadas que permitem a um leitor inspecionar, contestar e revisar o caminho dos dados à afirmação.
- **[[mixed-methods-research|Métodos mistos]]** combinam evidência de desfecho com explicações de por que os efeitos ocorreram.
- **[[design-based-research|Pesquisa baseada em desenho]]** é útil quando os instrutores estão desenvolvendo e refinando iterativamente uma intervenção em um curso autêntico.

Seja qual for o canal que você use, apenas três condições tornam uma afirmação causal interpretável: um **tratamento descrito com precisão**, uma **condição de comparação bem definida**, e uma **medida válida de aprendizagem durável**. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] auditam 19 comparações de ChatGPT na educação exatamente contra esses critérios e descobrem que apenas 4 (21%) satisfazem os três — 74% tinham um tratamento bem definido, 42% um grupo de controle bem definido, e 53% um desfecho que se qualificava como aprendizagem. Uma [[generative-ai|ferramenta de propósito geral]] introduzida junto com novas atividades, feedback ou desenho de interface confunde o meio com o método, então um resultado significativo não pode ser atribuído à IA.

## Uma avaliação gerenciável em sala de aula

Para uma avaliação gerenciável em sala de aula, um mínimo útil é uma **medida de linha de base, a intervenção, uma medida imediata posterior, e uma medida tardia sem assistência**. Sempre que possível, inclua uma condição de comparação, como a prática existente, sem IA, IA sem restrições versus IA com apoio, ou dois desenhos alternativos. Meça o desempenho assistido e a aprendizagem independente separadamente.

A síntese de [[ai-ed-evaluation|Avaliação em IA Educacional]] recomenda desfechos como ganho de aprendizagem sem assistência, retenção tardia, transferência para uma nova tarefa, qualidade do raciocínio, [[misconceptions|ideias equivocadas]], adoção do feedback e desempenho por subgrupo. Engajamento, satisfação, registros de uso de IA, autoeficácia e [[technology-acceptance-model|utilidade percebida]] podem ser medidas secundárias valiosas, mas não deveriam ser tratadas como substitutas da aprendizagem. Carga de trabalho do instrutor e economia de tempo também são desfechos de implementação legítimos.

Dois cuidados se aplicam a como os resultados são lidos. Primeiro, um efeito médio da literatura é um guia fraco para uma única sala de aula: a [[oneill-presumed-effective-meta-analysis-2026|auditoria de O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|metanálises]] de alto impacto descobriu que nenhuma fornecia uma base válida para suas afirmações — [[learning-gains|"desempenho acadêmico"]] agrupado misturava notas de teste, motivação, [[self-efficacy|autoeficácia]] e atitudes em uma única estimativa, a heterogeneidade relatada era extrema (I² variou de 77,2% a 94,4% nas 13 análises que a relatavam, com 12 dessas 13 acima de 80%), todas as 14 avaliavam [[limitations-in-aied-research|viés de publicação]] de forma inválida, e 61% dos estudos primários averiguados aleatoriamente carregavam problemas de validade, enquanto as estatísticas que mostrariam até onde os resultados individuais realmente se espalhavam estavam amplamente ausentes (apenas quatro análises relataram variância entre estudos e apenas duas relataram um intervalo de predição, ambos incluindo zero). Segundo, uma pontuação conveniente pode medir o constructo errado: em [[zhang-platform-scores-miss-ai-teaching-agents-2026|uma avaliação de oito agentes de ensino com IA]], o agente classificado em terceiro pela pontuação da própria plataforma ficou em último em uma rubrica validada por especialistas, porque as pontuações da plataforma indexavam o desempenho do estudante durante a interação, e não a qualidade de ensino do agente. Trate qualquer métrica única de painel como uma hipótese a validar contra uma medida atrelada à capacidade que você pretende desenvolver.

Para saber o que a evidência atual mostra e não mostra, e onde ela permanece escassa, veja [[does-ai-help-students-learn]] e [[research-gaps-aied]].
