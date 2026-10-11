---
title: "Análise de Perfil Latente"
created: "2026-09-20T12:39:59-04:00"
updated: "2026-09-30T12:53:22-04:00"
type: concept
methods: [quantitative-research, research-methods-aied]
confidence: high
translation_of: concepts/latent-profile-analysis
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **A análise de perfil latente (LPA)** — um método centrado na pessoa que ordena uma amostra em subgrupos não observados (perfis) quando cada caso é descrito por várias variáveis ao mesmo tempo. É o membro de indicadores contínuos da família de modelagem de mistura; sua irmã **análise de classe latente (LCA)** aplica a mesma lógica a indicadores categóricos. Ambas fazem uma pergunta diferente da dos modelos [[quantitative-research|centrados na variável]] que dominam a pesquisa em IA na educação: não "quanto X prediz Y em média", mas "quantos tipos diferentes de aprendiz, [[teacher-role|professor]] ou gestor se escondem dentro dessa média". Nesta base de conhecimento, o método mostra que uma única ferramenta de IA cai de formas muito diferentes entre subgrupos — cinco perfis de consciência ética entre graduandos de Gana, seis tipologias de prontidão entre gestores de educação ucranianos, quatro perfis de aceitação de [[generative-ai|IA generativa]] entre professores pré-serviço taiwaneses.

## Questões a considerar

- Um estudo relata que o conforto médio dos estudantes com IA é 3,8 de 5. O que essa média poderia esconder se um grupo está entusiasmado e outro está silenciosamente resistente?
- A LPA modela escores contínuos; a LCA modela categorias. Se você codifica respostas de entrevista como "menciona [[cognitive-offloading|excesso de dependência]]: sim/não", qual você precisa?
- Uma solução de cinco perfis relata entropia de 0,816; uma rival de quatro perfis pontua 0,929, mas descreve os dados menos ricamente. Qual você publicaria?
- Perfis são descritivos, não causais. Se um perfil de "Céticos Resistentes" mostra alta facilidade de uso, mas baixa intenção de adotar, o que isso apoia, e o que não apoia?

## Introdução

A maior parte da evidência em IA na educação é centrada na variável: ela estima relações médias, e médias assumem homogeneidade. Métodos centrados na pessoa, em vez disso, tomam a pessoa como unidade de análise e perguntam quantas configurações distintas de atributos existem na amostra. A LPA pertence a essa família, e seu retorno aqui é que ela converte a diversidade de aprendizes de uma afirmação retórica em um achado mensurável: quando os perfis de consciência ética se espalham de 26,1 por cento a 4,5 por cento apesar de uma média de amostra confortável, a diferenciação deixa de ser uma preferência de design.

## O que o método faz, e quando é a ferramenta certa

A LPA assume que a amostra é extraída de uma mistura de subgrupos, cada um com suas próprias médias e variâncias nos indicadores. O pesquisador fornece os indicadores e o número de grupos; o algoritmo estima a probabilidade de pertencimento de cada caso e atribui pela maior probabilidade, retornando um perfil médio por grupo, um tamanho por perfil, e um resumo de quão limpos se separam os casos. Qual membro da família você usa segue os indicadores, não a pergunta de pesquisa:

- **LCA — indicadores categóricos.** Becker e colegas converteram categorias de resposta codificadas de respostas abertas de 1.189 estudantes de física em variáveis indicadoras e retiveram duas classes: Usuários Pragmáticos (70 por cento) e Não-Usuários Céticos (30 por cento); como um tópico não mencionado conta como "sem endosso", os autores sinalizam inflação de zeros no dataframe da análise.
- **LPA — indicadores contínuos**, como escores de escala e médias de construto. Chen e colegas perfilaram 128 professores pré-serviço taiwaneses em cinco construtos [[technology-acceptance-model|TAM]]/UTAUT2; Acquah e colegas perfilaram 509 graduandos de Gana em três dimensões de consciência ética; Schweder e colegas perfilaram 2.464 estudantes em satisfação de necessidades [[motivation|motivacionais]].
- **A análise de transição (de perfil) latente** estende a família ao longo do tempo, estimando perfis por onda e a probabilidade de transição entre eles. Liang e colegas acompanharam a motivação de aprendizagem em IA de 2.086 estudantes ao longo de um ano; Wu acompanhou 457 aprendizes de japonês por três ondas, com o perfil desadaptativo encolhendo de 26,48 a 17,74 por cento.

O clustering ordinário ([[machine-learning|k-means]] e hierárquico) persegue a mesma intenção centrada na pessoa, mas particiona os casos por distância geométrica em vez de estimar um modelo de probabilidade. Recorra à LPA ou à LCA quando a questão diz respeito a subgrupos — se "o aprendiz" é uma ficção no nível de agregação da sua amostra, e se subgrupos diferem em forma, e não apenas em nível. Não recorra a ela quando você precisa de um efeito médio de tratamento: uma solução de cinco perfis dentro de um [[rct|ensaio randomizado]] de um tutor [[intelligent-tutoring|adaptativo]] previu diferenças de pós-teste (η² parcial = ,27), mas não encontrou interação condição × perfil (ps ≥ ,198).

## Como o corpus a usa

Três usos recorrem.

- **Estabelecer heterogeneidade antes de projetar para ela.** A survey de Kremen e colegas com 395 gestores de educação ucranianos usou LCA centrada na pessoa para mostrar que "o gestor" é uma ficção: seis tipologias vão de Restrito por Competência (25,6 por cento, disposto, mas sem habilidade) a Céticos sem Barreiras (mais alta prontidão, mas 74 por cento de desconfiança em IA), e os autores as leem como um mandato para treinamento diferenciado.
- **Alinhamento entre sistemas como verificação de estabilidade.** [[teachers-ai-belief-profiles-talis-2024-2026|Fang e Jin (2026)]] retiveram quatro perfis de crença de 40.680 professores em 49 sistemas educacionais (de Indiferente 6,13% a Endosso Medido 56,29%), e mudar a referência de alinhamento deixou a concordância de classificação em 99,62% — enquanto a utilidade ordenou os perfis de forma idêntica em todos os 49 sistemas, e o risco não.
- **Recuperar subgrupos que uma média esconde.** Acquah e colegas retiveram cinco perfis de consciência ética de Muito Alta Abrangente (26,1 por cento) a Baixa Consciência Ética (4,5 por cento, beneficência 2,06), uma dispersão que vai de pouco mais de um quarto da amostra a menos de um vigésimo. Chen e colegas descobriram que Céticos Resistentes relataram alta facilidade de uso percebida, mas intenção comportamental muito baixa — a demonstração mais clara do corpus de que o paradoxo facilidade-de-uso/intenção é invisível a um modelo de nível médio.
- **Perfilar a calibração em vez do nível.** O estudo de letramento em IA de professores aplicou a LPA à concordância entre [[self-report-measures|autorrelato]] e medidas objetivas, produzindo seis perfis: superestimação, subestimação, alinhamento e um grupo baixo/baixo concentrado entre professores sem experiência prévia em [[ai-literacy|letramento em IA]]. Aqui, perfis descrevem um padrão entre instrumentos, não uma faixa de escore.

Os perfis então servem como variável independente: a disciplina moldou o pertencimento entre professores pré-serviço (V de Cramér = 0,532, estudantes de STEM concentrados em Pioneiros da Tecnologia), e o pertencimento previu [[self-efficacy|autoeficácia]] posterior, burnout e [[anxiety-and-stress|ansiedade em IA]] em outras partes do corpus.

## Escolher o número de perfis

Nenhuma estatística única seleciona a solução; o corpus trata a retenção como um juízo feito a partir de vários critérios juntos.

- **Critérios de informação (BIC, AIC).** Menor costuma ser melhor, mas um declínio monotônico sinaliza um problema em vez de um vencedor. No estudo ucraniano de gestores, o BIC caiu monotonicamente ao longo da faixa de duas a seis classes sem um mínimo claro, e os autores chamam sua solução de seis classes de exploratória com base nessa evidência.
- **Entropia.** Um resumo da certeza da classificação, mais próximo de 1 significando atribuição mais limpa. Chen e colegas relatam 0,985 para quatro perfis; Acquah e colegas relatam 0,816 para cinco perfis contra 0,929 para quatro, e eles próprios sugerem consolidar para um agrupamento mais estável.
- **[[explainable-ai|Interpretabilidade]] e tamanho do perfil.** O estudo de perfis de confiança em IA manteve três clusters embora o índice de Calinski–Harabasz preferisse dois, porque três eram interpretáveis, e ele nota que um coeficiente de silhueta de 0,288 sinaliza separação fraca ou limítrofe. Chen e colegas advertem que seu menor perfil (14,06 por cento de 128 casos) pode ser instável, e o menor perfil do estudo de Gana contém apenas 23 estudantes, o que seus autores propõem fundir.
- **Estabilidade sob reamostragem.** A estabilidade bootstrap é a verificação honesta de se os perfis recorreriam em uma nova amostra: o índice ajustado de Rand médio foi 0,385 para a solução ucraniana de seis classes, mas 0,989 em 100 inicializações aleatórias no estudo de confiança em IA — o mesmo design nominal, peso evidencial muito diferente.
- **Testes bootstrap de razão de verossimilhança (BLRT)** e o teste de Lo–Mendell–Rubin são companheiros padrão do BIC e da entropia na literatura mais ampla de modelagem de mistura, mas os estudos de perfil nesta base de conhecimento não os relatam. Onde uma página relata apenas BIC e entropia, trate a contagem de classes como provisória.
- **A verificação de razão de verossimilhança que este corpus de outra forma omite.** [[ai-attitude-latent-profiles-career-development-2026|Song et al. (2026)]] retiveram quatro perfis (entropia 0,824) de 379 estudantes de negócios e relataram a decisão de Lo–Mendell–Rubin: significativa em quatro (p = 0,035) e não significativa em cinco (p = 0,376).
- **Retenção defendida com a solução rival e um teste de razão de verossimilhança.** [[suria-martinez-academic-self-efficacy-motor-disabilities-2026|Suriá-Martínez et al. (2026)]] relatam que uma solução de quatro perfis ajustou os 102 estudantes ligeiramente melhor, mas não melhorou significativamente e deixou uma menor classe em 12,7 por cento, de modo que retêm três perfis (entropia ,89) em vez do modelo numericamente melhor ajustado. Relatar a solução perdedora e o que a desqualificou é o que torna a contagem de classes retida um juízo que os leitores podem verificar, e a medida de uso de IA de 12 itens construída para o propósito do estudo — validada em uma amostra separada de 85 que os autores chamam de preliminar — marca a outra fronteira de sua evidência.

Relate as comparações, não apenas o vencedor: uma página que diz "retivemos cinco perfis" sem a solução rival, os valores de entropia e o tamanho do menor perfil não dá aos leitores nenhuma forma de julgar a escolha.

## Lendo e relatando os resultados, e onde eles dão errado

Leia um perfil por sua forma, bem como por seu nível. No estudo de Gana, os perfis diferem na configuração de autonomia, beneficência e equidade — o maior par emparelha forte endosso de autonomia com beneficência mais baixa —, de modo que dois perfis podem estar em níveis gerais similares e ainda assim exigir ensinos diferentes.

Quatro precauções, cada uma afirmada nas páginas-fonte:

1. **Perfis são descritivos.** Eles dizem quem está na amostra, não por quê, e desenhos transversais não podem mostrar estabilidade ou movimento (os estudos de professores pré-serviço, Gana e física). Apenas as análises longitudinais — um estudo de transição de um ano e as três ondas de Wu — apoiam afirmações sobre movimento, e mesmo aí o movimento é associação, não efeito de intervenção.
2. **O pertencimento é estimado, não observado.** Os casos são atribuídos pela maior probabilidade posterior, de modo que indivíduos próximos a uma fronteira são classificados com incerteza real; entropia baixa e valores de silhueta fracos significam que as fronteiras devem ser lidas como suaves.
3. **A escolha de indicadores define a resposta.** Os perfis dependem inteiramente de quais variáveis entram no modelo, de modo que heterogeneidade que o estudo nunca mede é heterogeneidade que ele não pode encontrar — o estudo de Gana coletou apenas gênero entre os antecedentes e, portanto, não pode dizer o que prediz o pertencimento.
4. **Heterogeneidade detectada não é causação detectada.** O nulo perfil × condição do ensaio do tutor é o lembrete: perfilar um resultado dentro de um ensaio não é um teste de moderação do tratamento.

## Implicações para a IA na educação

1. **Meça a heterogeneidade antes de recomendar uma intervenção.** Perfis neste corpus colocam repetidamente um quarto ou mais de uma amostra abaixo da média principal; projete para os perfis que existem, e não para a média.
2. **Prefira métodos centrados na pessoa quando o entregável é diferenciação.** Os estudos de professores pré-serviço e de gestores apresentam ambos essa mudança como sua contribuição metodológica, porque preditores médios não podem revelar as configurações que justificam apoio diferenciado.
3. **Relate a evidência de retenção por completo.** Publique comparações de BIC/AIC, entropia, tamanhos de perfil e uma verificação de estabilidade, e diga com clareza quando uma contagem de classes é exploratória.
4. **Trate perfis como diagnósticos, não rótulos.** Um perfil é um construto de pesquisa com uma fronteira estimada, de modo que uma ferramenta que atribui indivíduos a categorias nomeadas carrega a precaução de qualquer instrumento de [[educational-measurement|medição]] — e os [[differential-effects-across-learner-groups|efeitos diferenciais entre grupos de aprendizes]] merecem o escrutínio de qualquer análise de subgrupo.

## Conceitos conectados

- [[quantitative-research]]
- [[mixed-methods-research]]
- [[research-methods-aied]]
- [[machine-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[differential-effects-across-learner-groups]]
- [[technology-acceptance-model]]

## Artigos conectados

- [[ai-attitude-latent-profiles-career-development-2026]] — Evidência de retenção Lo–Mendell–Rubin para quatro perfis de atitude em IA em 379 estudantes de negócios
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Análise de transição de perfil latente de três ondas da adaptação psicológica
- [[liang-ai-learning-motivation-sdt-2026]] — Análise de transição latente de três perfis de motivação ao longo de um ano
- [[trust-in-ai-psychological-profiles-ml-2026]] — Perfis de k-means; discordância silhueta vs. Calinski–Harabasz; ARI 0,989
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Clustering hierárquico e k-means em quatro personas de adoção de GenAI
- [[teachers-ai-belief-profiles-talis-2024-2026]] — Quatro perfis de crença docente em IA de 40.680 professores em 49 sistemas, com estabilidade de alinhamento
