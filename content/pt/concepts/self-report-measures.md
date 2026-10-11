---
title: "Medidas de autorrelato"
created: "2026-09-12T11:05:00-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [self-efficacy, student-engagement]
assessment: [assessment-validity, educational-measurement, learning-gains]
ethics: [trust-calibration]
research_method: [survey]
audience: [researchers, instructors]
page_kind: [evaluation]
connected_faqs: [evaluating-ai-interventions-methods, does-ai-help-students-learn, reporting-interpreting-aied-research]
confidence: high
methods: [quantitative-research, research-methods-aied, qualitative-research]
translation_of: concepts/self-report-measures
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Medidas de autorrelato** — instrumentos em que a pessoa estudada é também a fonte dos dados: questionários e pesquisas, entrevistas, diários, competência autoavaliada, uso autoestimado, aprendizagem percebida e satisfação. Eles são o cavalo de batalha da [[ai-education|pesquisa em IA na educação]] — nesta base de conhecimento, 139 páginas de artigo carregam a etiqueta de método survey, mais do que qualquer design exceto experimento e [[benchmark|benchmark]] — e são a única forma prática de alcançar atitudes, crenças, intenções e [[self-efficacy|autoeficácia]]. Seu limite é categórico, e não estatístico: um autorrelato não consegue medir comportamento nem aprendizagem, apenas o que alguém diz sobre comportamento ou aprendizagem, e os dois se separam nesta base de pesquisa com frequência suficiente para ser um achado por si só.

## Perguntas para considerar

- Se um estudo diz que estudantes "relataram alto engajamento", o que exatamente foi medido — e o que você precisaria ver para concluir que eles de fato se engajaram?
- Em um estudo, as medidas autorrelatadas e objetivas de [[ai-literacy|letramento em IA]] de professores se correlacionaram em apenas r = 0,07 a r = 0,24 ao longo de quatro dimensões. Onde sua própria [[self-assessment|autoavaliação]] tenderia mais a divergir de um teste da mesma habilidade, e por quê?
- A satisfação é fácil de medir e fácil de melhorar — um sistema ajustado para agradar usuários vai pontuar bem nela. Por que isso poderia tornar a satisfação uma medida de desfecho ruim para a aprendizagem, e o que você mediria em vez disso?
- "Quase todos os estudantes usam IA para trabalhos do curso" vem de perguntar aos estudantes. O que perguntar, em vez de registrar em log, poderia errar em qualquer das duas direções?
- Uma pesquisa obtém 112 respostas com taxa de resposta de 31%, ou 90 respostas de 572 convites. Antes de aceitar suas porcentagens, o que você quer saber sobre quem não respondeu?
- Quando um estudo correlaciona duas variáveis autorrelatadas medidas em um único momento, quantas explicações separadas você consegue gerar para a correlação — e que design as eliminaria?
- Se você estivesse orientando alguém em uma avaliação pequena, quais afirmações você deixaria que ela sustentasse com uma pesquisa, e quais você insistiria que precisam de evidência de log, desempenho ou observação?

## Introdução

O autorrelato abrange muito mais que o questionário. Ele inclui [[quantitative-research|pesquisas transversais]] usando formatos de classificação Likert e outros, entrevistas e grupos focais conduzidos por pesquisadores [[qualitative-research|qualitativos]], diários e amostragem de experiência, habilidade ou confiança autoavaliadas, estimativas recordadas de quantas vezes uma ferramenta foi usada, e aprendizagem ou satisfação percebidas tratadas como desfechos. O que os une é a posição epistêmica de quem responde: ele está se reportando a si mesmo, em vez de ser observado.

Essa não é uma fraqueza de que se pedir desculpas. Muitos construtos de interesse — motivação, ansiedade, [[trust-calibration|confiança]], utilidade percebida, intenções de [[student-engagement|engajamento]] — são estados internos que nenhum arquivo de log registra, e perguntar é a única forma defensável de alcançá-los. O problema surge quando um autorrelato é usado para sustentar uma afirmação que ele não consegue carregar, o que é em essência uma questão de validade: se o instrumento mede o construto que nomeia, e se a afirmação feita é sobre o tipo de coisa que o autorrelato consegue ver. Essa preocupação pertence à [[educational-measurement|medição educacional]] e à [[assessment-validity|validade da avaliação]]; esta página trata do que acontece quando a pesquisa em IA na educação se apoia especificamente em autorrelato, e de onde a base de evidências mostra que ele se rompe.

**Como esta página se relaciona com suas vizinhas.** Os [[research-methods-aied|métodos de pesquisa em AIED]] catalogam designs e seus pontos fortes e limitações, incluindo estudos de survey e SEM. A [[quantitative-research|pesquisa quantitativa]] cobre a família de métodos numéricos. A [[educational-measurement|medição educacional]] cobre desenvolvimento de instrumentos, [[item-response-theory|teoria da resposta ao item]] e validação psicométrica. Esta página é a fatia mais estreita que essas páginas apontam: o próprio instrumento de medição e fonte de dados — o que o autorrelato pode e não pode estabelecer, a lacuna recorrente entre o que as pessoas relatam e o que fazem, e como ler criticamente um achado de autorrelato.

## O que o autorrelato pode e não pode estabelecer

O autorrelato é bem adequado a atitudes, crenças, intenções, percepções de uma ferramenta, estados afetivos, e confiança ou dificuldade autojulgadas. Ele é mal adequado a comportamento, e não consegue medir aprendizagem de modo algum: a crença de uma pessoa de que aprendeu algo é ela mesma uma percepção, e a base de conhecimento trata a aprendizagem percebida como quantidade distinta dos [[learning-gains|ganhos de aprendizagem]].

A consequência é um conjunto de afirmações que parecem semelhantes em uma seção de resultados, mas diferem em força:

- "Estudantes acharam o tutor útil" — uma percepção, apropriadamente medida perguntando.
- "Estudantes usaram o tutor regularmente" — um comportamento, apenas aproximado perguntando.
- "Estudantes aprenderam mais com o tutor" — um desfecho, não estabelecível perguntando de modo algum.
- "Professores estão confiantes usando IA" — uma autocrença, não evidência de competência.

Duas implicações seguem para quem lê ou projeta essa pesquisa. Primeiro, se um instrumento de autorrelato está mesmo medindo seu construto nomeado é uma questão empírica, respondida por validação, e não pela plausibilidade dos itens. Segundo, a direção da tentação na IA na educação é consistente: ferramentas são avaliadas por como os usuários se sentem em relação a elas, e o sentimento é precisamente a parte que o autorrelato captura de forma mais barata. A [[self-assessment|autoavaliação]] é membro dessa família mais ampla, e não sinônimo dela: onde as medidas de autorrelato alcançam atitudes, confiança e satisfação, a autoavaliação volta a estimativa de quem aprende especificamente para sua própria habilidade, confiança ou aprendizagem.


Um segundo modo de falha é o colapso discriminante entre dois construtos autorrelatados: regredir a capacidade autorrelatada com IA junto do controle comportamental percebido, medido como eficácia, pode comparar um fator geral de confiança consigo mesmo, e é por isso que os critérios são fixados de antemão — uma razão heterotraço–monotraço abaixo de 0,85 e um teste de modelo aninhado restringindo a correlação capacidade–controle à unidade ([[capability-decision-model-teacher-readiness-2026|Mnguni (2026)]]).

Um instrumento validado pode tornar esse limite preciso em vez de vago. O Questionário de Autoavaliação de Letramento em IA (AIL-SAQ) de [[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan e Srikoon (2025)]] é uma escala de 15 itens confirmada com uma estrutura estável de três fatores em duas amostras (n = 335 exploratória, n = 579 confirmatória) e um alfa de Cronbach geral de 0,934. Seus autores são explícitos de que ela registra entendimento, atitudes e consciência percebidos, e não habilidade demonstrada, e de que a acurácia da autoavaliação depende de habilidade metacognitiva que ainda está amadurecendo em crianças, de modo que a autoestimativa de uma criança é um sinal mais fraco que a de um adulto.

A escolha oposta também é defensável: o PAUSE é uma auto-verificação de terceirização cognitiva de quatro domínios que não publica evidência alguma de confiabilidade ou validade, não oferece um composto, e afirma que as leituras não devem justificar nenhuma decisão consequente, e seus itens confundem andaime deliberado com substituição — quem responde e traz a IA cedo para andaimentar lê-se como terceirização ([[pause-ai-cognitive-offloading-self-reflection-2026|Alam, 2026)]]).

## A lacuna percepção–comportamento

O achado de autorrelato mais forte nesta base de conhecimento não é que o autorrelato é enviesado em geral, mas que comportamento relatado e observado divergem de formas específicas e documentadas.

[[ai-literacy-assessment-misalignment|Um estudo que construiu medidas paralelas autorrelatadas e objetivas de letramento em IA de professores]] concluiu **concordância fraca entre os fatores de autorrelato e objetivos (r = 0,07 a r = 0,24)** em uma amostra de 288 professores, com análise fatorial confirmatória apoiando a validade de construto de ambas as medidas, ao mesmo tempo que mostrava uma **correlação baixa entre os fatores de autorrelato e objetivos**. Os dois instrumentos eram críveis; eles simplesmente mediam coisas diferentes. Na amostra completa de 288 professores, as correlações entre os fatores objetivos e autorrelatados iam de r = 0,07 a r = 0,24, e a análise de perfis latentes encontrou 43 professores que se classificaram alto enquanto pontuavam mais baixo na medida objetiva, contra 59 que mostravam o padrão inverso.

O [[jin-glat-genai-literacy-assessment|GLAT]] chega à mesma conclusão pela outra direção: seu teste de desempenho de 20 itens previu o desempenho em tarefas de aprendizagem com apoio de [[generative-ai|IA generativa]] em um estudo *within-subject* com 83 estudantes, **enquanto o letramento autorrelatado em ChatGPT não o fez**. O enquadramento dos autores é direto — os instrumentos dessa área dependem esmagadoramente de pesquisas autorrelatadas, "que capturam competência percebida em vez de real e são propensas a viés e superestimação".

As estimativas comportamentais mostram a mesma divisão. [[predicting-attrition-competitive-programming|Um estudo em larga escala de programação competitiva]] relatou um **desconexão entre confiança autorrelatada e comportamento real de prática**, sendo a primeira um proxy ruim do segundo. Um [[engagement-intensity-learner-modeling|estudo de modelagem de quem aprende]] é franco de que a frequência de uso foi autorrelatada em uma escala de Nunca a Diária em vez de observada, e de que, com preditores e desfechos ambos autorrelatados, estilos de resposta como aquiescência ou viés de extremidade poderiam produzir as associações.

Às vezes, perguntar e observar são postos frente a frente. A [[student-llm-interaction-taxonomy-review-2026|revisão de escopo de 46 categorizações de 33 estudos]] concluiu que a literatura se divide quase igualmente entre dados de autorrelato e de log de interação, e que as categorias "frequentemente refletem a abordagem de medição tanto quanto a própria interação" — com estudos de autorrelato capturando percepções e intenções, enquanto estudos baseados em log capturam comportamento conversacional observável, e os dois raramente integrados. O [[tracing-genai-literacy-interaction-patterns|trabalho de dados de processo sobre letramento em IA generativa]] faz a versão construtiva do ponto: se um estudante formula prompts iterativamente, refina a saída e gerencia [[hallucination-risk|alucinações]] é observável em logs de interação, e não em um questionário.

Uma revisão estruturada e [[meta-analysis-systematic-review|metanálise]] exploratória de 2026 de medidas para o uso competente de [[generative-ai|IA generativa]] põe um número agrupado nessa lacuna pela outra direção: agrupar três correlações subjetivo–objetivo diretamente relatadas na mesma amostra (N relatado combinado = 2.765) deu r = 0,055 (IC 95% Hartung–Knapp [−0,047, 0,156]), e acrescentar as correlações entre fatores de um quarto estudo chegou a apenas r = 0,079. Todos os três efeitos primários vieram de um único programa de pesquisa, a correlação e o valor p relatados pelo maior contribuinte não puderam ser reconciliados, e a revisão conclui que o autorrelato não pode substituir pontuações objetivas de desempenho — ao mesmo tempo que observa que os instrumentos de desempenho são eles mesmos estreitos, cobrindo conhecimento de base em vez dos comportamentos de supervisão e confiança que importam no trabalho ([[competent-generative-ai-use-measures-review-2026|Verí (2026)]]).

A própria literatura de instrumentos pode ser lida como evidência da escala da lacuna. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore e Maat (2026)]] avaliaram 33 instrumentos de letramento em IA de professores e concluíram que 31 (93,9%) eram escalas de autorrelato de confiança percebida, apenas dois (6,1%) testavam conhecimento objetivamente, e nenhum usava tarefas baseadas em desempenho entre 2019 e 2025. Sua conclusão é a que esta página continua a alcançar por outras direções: pontuações de autorrelato indexam confiança em vez de capacidade, de modo que não podem substituir competência quando grupos ou programas são comparados.

As medidas de desfecho herdam a mesma lacuna. [[pramod-agentic-ai-motivational-pathways-2026|Pramod e Patil (2026)]] modelam o caminho da [[agentic-ai|IA agêntica]] pela motivação e pela presença social até o que eles rotulam como desempenho de aprendizagem com um coeficiente de 0,671 — a relação mais forte do estudo —, e a própria seção de limitações deles afirma que essa variável dependente reflete as percepções de quem aprende, e não resultados de prova, desempenho em tarefas ou análise de aprendizagem. Esse é o padrão a ler com cuidado em modelos de caminho em geral: um coeficiente grande sobre um desfecho percebido quantifica o quão consistentemente os estudantes acreditam que algo ajudou, e ainda não diz nada sobre se ajudou.

## Satisfação e aprendizagem percebida como desfechos

A satisfação é o desfecho autorrelatado mais frequente neste corpus, aparecendo em 63 páginas de artigo. Ela também é o mais fraco como proxy de aprendizagem, e a base de conhecimento contém argumentos explícitos nesse sentido.

- O [[sequenced-ai-feedback-learning|trabalho sobre feedback sequenciado de IA]] enuncia o princípio de design diretamente: satisfação do usuário e engajamento comportamental não são proxies confiáveis para ganhos de aprendizagem, de modo que a aprendizagem precisa ser medida diretamente.
- O [[puech-pedagogical-steering-llm-productive-failure-2025|estudo sobre direcionamento pedagógico]] observa que os modelos de linguagem atuais são ajustados por instrução para serem assistentes prestativos que maximizam a satisfação do usuário, enquanto o objetivo de um tutor é maximizar a aprendizagem — os dois objetivos podem conflitar, o que torna a satisfação um alvo potencialmente enganoso, e não meramente fraco.
- O [[preferred-scaffolding-ai-mathematical-modeling|estudo de andaime]] argumenta que utilidade percebida, facilidade de uso e satisfação imediata não deveriam ser tratados como indicadores suficientes da eficácia do [[scaffolding|andaime]].
- O [[nie-personavlm-long-term-personalization-2026|trabalho sobre modelagem de estudantes alinhada à personalidade]] observa que otimizar para a satisfação do usuário não é o mesmo que otimizar para resultados de aprendizagem, e que os dois podem se separar.

O padrão que vale carregar: a satisfação é responsiva às coisas erradas quando a aprendizagem é a meta. Um sistema que responde rápido, concorda prontamente e reduz o esforço será avaliado positivamente, e essas mesmas propriedades são as que a base de conhecimento associa à [[cognitive-offloading|luta produtiva]] reduzida e ao desempenho inflado em trabalho assistido por IA. Satisfação relatada e aprendizagem medida não são inimigas; elas simplesmente não são substitutas, e tratar a primeira como evidência da segunda é o deslize mais comum que esta página documenta.

## O que torna um instrumento de autorrelato crível

Quatro propriedades separam uma pesquisa que consegue sustentar uma afirmação de uma que não consegue.

- **Validade de construto.** Os itens precisam ser mostrados como medindo o construto nomeado, idealmente com análise fatorial. O estudo de medidas paralelas acima validou ambos os seus instrumentos e ainda assim concluiu que eles divergiam — a validade de um instrumento não diz nada sobre se ele captura comportamento.
- **Confiabilidade e estrutura.** Instrumentes validados por fatores recorrem neste corpus, desde [[teacher-education-ai-literacy-sdt-2026|medidas de letramento em IA de professores fundamentadas na teoria da autodeterminação]] até escalas de aceitação modeladas com [[technology-acceptance-model|TAM]] e SEM em [[acceptance-ai-english-tools-2026|estudos de ferramentas de língua assistidas por IA]].
- **Invariância, quando grupos são comparados.** Uma escala que se comporta de forma diferente entre populações não consegue sustentar uma comparação. O trabalho de [[same-ai-different-pathways|SEM multigrupo]] relata testes de invariância de medição (configuracional, métrica, escalar) junto com seus efeitos indiretos, e a [[genai-thoughtless-use-self-directed-learning-2026|comparação Suíça–China]] concluiu que apenas o valor intrínseco alcançou invariância métrica, e não escalar — uma limitação declarada em vez de escondida, e que restringe o que suas diferenças entre países podem significar.
- **Uma alternativa de desempenho onde competência é o construto.** Os 20 itens de múltipla escolha do GLAT existem precisamente porque o autorrelato não consegue carregar uma afirmação de competência.

## Amostragem, resposta e não resposta

Como as pesquisas são baratas de administrar, os problemas de amostragem costumam ser onde a afirmação de generalizabilidade falha. Este corpus os relata de forma explícita e instrutiva:

- A [[genai-student-experiences-uk-he-survey-2026|pesquisa do Reino Unido sobre uso de IA generativa por estudantes]] relata uma amostra de conveniência em 7 instituições, taxas de resposta [[governance|institucionais]] que variam acentuadamente, e viés de não resposta que pode pender para estudantes com visões fortes — e observa que ~32% dos respondentes descreveram conduta que quebrou a política de forma argumentável, em um formato em que a desejabilidade social e a pressão contextual tornam a **subnotificação** a direção de erro provável.
- O [[ai-assisted-instructor-supervised-grading-feedback|estudo de feedback de correção assistido por IA]] repousa sobre 112 respostas, uma taxa de resposta de 31%.
- O [[ai-pedagogical-orientation|estudo de corpo docente]] parte de 90 docentes de [[stem-education|STEM]] de 572 premiados convidados — 16%.
- A [[student-genai-use-views-writing|pesquisa de sociologia]] obteve 504 respondentes de 844 convidados, e os autores observam que as taxas de resposta variaram por pergunta.
- O [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|estudo Delphi]] concluiu sua primeira rodada com 17 respondentes, uma limitação que declara abertamente.

A autosseleção agrava isso. O [[chatgpt-inoculation-training-verification-2026|estudo de inoculação]] recrutou 782 participantes e reteve 100 casos válidos de uma amostra de conveniência de usuários autorrelatados de ChatGPT; o [[genai-assisted-problem-posing-physics-2026|estudo de física]] teve estudantes se autosselecionando para uma tarefa de crédito extra, pendendo plausivelmente as visões para os complacentes e excluindo céticos.

Dois erros adicionais específicos de autorrelato recorrem. **Limites de introspecção e viés de desejabilidade social** são nomeados como intrínsecos ao autorrelato no [[engagement-assessment-video|trabalho sobre avaliação de engajamento]] e em [[ccct-cooperative-learning-technique|estudos cujos dados qualitativos dependem de autorrelato]]. A **variância de método comum** surge quando preditores e desfechos vêm dos mesmos respondentes ao mesmo tempo: o [[ai-use-critical-thinking-medical-students-2026|estudo de mediação moderada de uso de IA e pensamento crítico]] operacionalizou uso, carga cognitiva e [[self-regulated-learning|aprendizagem autorregulada]] todos por meio de instrumentos padronizados de autorrelato em um único ponto no tempo, e levanta o viés de método comum como consequência; o [[genai-motivation-engagement-2026|estudo PLS-SEM de motivação e engajamento]] repousa igualmente inteiramente em autorrelato e não consegue estabelecer ordenação temporal entre seus mediadores.

## Remédio: acrescentar evidência que não seja autorrelato

As respostas construtivas da base de conhecimento são consistentes, e nenhuma delas exige abandonar as pesquisas.

- **Pareie o autorrelato com dados de rastro ou log.** O [[mejeh-fromm-srl-adaptive-learning-feedback-2026|estudo de oito semanas com 194 estudantes sobre tecnologia de aprendizagem adaptativa]] combinou autorrelato com dados de rastro sob modelagem linear hierárquica, e foi isso que lhe permitiu seguir as fases da aprendizagem autorregulada conforme se desenrolavam, e não conforme recordadas.
- **Observe a prática diretamente quando a afirmação é sobre prática.** A [[hawkins-feedback-literacy-ai-essay-writing|tarefa de avaliação gravada em tela somada a entrevistas estimuladas por vídeo]] superou a lacuna entre uso de IA autorrelatado e prática observada, capturando consciência [[metacognition|metacognitiva]] que a pesquisa não conseguia.
- **Pontue o comportamento contra uma rubrica em vez de perguntar sobre ele.** O [[adaptive-pretesting-retention|trabalho de retenção]] trata o esforço de prática como indicador comportamental derivado de logs de interação, explicitamente não uma medida de estado [[motivation|motivacional]] interno.
- **Triangule.** Os [[genai-over-reliance-learning-2026|designs de métodos mistos]] e a [[mixed-methods-research|pesquisa de métodos mistos]] em geral trocam tamanho de amostra pela capacidade de conferir uma fonte de dados contra outra; a [[ai-vocational-education-training-review|revisão sistemática de educação vocacional]] é instrutiva pelo desequilíbrio, observando que, entre os estudos quantitativos que examinou, 2 dependiam exclusivamente de autorrelato, enquanto 5 usavam apenas medidas objetivas.
- **Meça o desfecho de que você cuida.** Se a afirmação é sobre aprendizagem, os [[learning-gains|ganhos de aprendizagem]] precisam ser medidos, não inferidos da satisfação.

## Como ler uma afirmação de autorrelato

- Pergunte que tipo de afirmação é. Percepções são território legítimo; comportamento é aproximado; aprendizagem e competência não são alcançáveis por essa via.
- Verifique quem respondeu e quem não respondeu. Taxa de resposta, marco de amostragem e autosseleção decidem o que as porcentagens descrevem — um estudo dos estudantes de uma instituição descreve aquele cenário, não estudantes em geral.
- Verifique o instrumento. Ele foi validado para este construto e esta população, e, se grupos são comparados, a invariância foi testada?
- Fique atento a designs de fonte única. Se preditores e desfechos vêm ambos do mesmo questionário em um único ponto no tempo, as associações são consistentes com variância de método comum, assim como com a teoria proposta.
- Trate a satisfação como sinal de design, não como desfecho de aprendizagem. Satisfação alta somada a aprendizagem não testada é a configuração padrão na avaliação de ferramentas de IA, e este corpus mostra as duas divergindo.
- Prefira estudos que mostram seu trabalho: taxas de resposta declaradas, limitações declaradas, e pelo menos uma fonte de evidência que não venha de perguntar.

## Conceitos conectados

- [[interpreting-and-applying-aied-research]]
- [[educational-measurement]]
- [[self-assessment]]
- [[research-methods-aied]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[assessment-validity]]
- [[item-response-theory]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[learning-gains]]
- [[student-engagement]]
- [[self-efficacy]]
- [[learning-analytics]]

## Artigos conectados
- [[capability-decision-model-teacher-readiness-2026]] — Critérios de validade discriminante para separar a capacidade autorrelatada com IA das crenças de eficácia

- [[pramod-agentic-ai-motivational-pathways-2026]] — O engajamento prediz desempenho percebido, e não medido, em um modelo de caminho de IA agêntica (Pramod e Patil 2026)

- [[ai-literacy-assessment-misalignment]] — Medidas paralelas autorrelatadas e objetivas de letramento em IA de professores
- [[jin-glat-genai-literacy-assessment]] — GLAT: uma alternativa baseada em desempenho ao autorrelato
- [[genai-student-experiences-uk-he-survey-2026]] — Uso de IA generativa por estudantes pesquisado entre instituições do Reino Unido
- [[student-llm-interaction-taxonomy-review-2026]] — Taxonomias moldadas por se os dados vieram de autorrelato ou de logs
- [[tracing-genai-literacy-interaction-patterns]] — Dados de processo caracterizando o letramento em IA generativa
- [[engagement-intensity-learner-modeling]] — Uso autorrelatado como sinal de modelagem de quem aprende
- [[predicting-attrition-competitive-programming]] — Confiança autorrelatada versus comportamento de prática
- [[ai-use-critical-thinking-medical-students-2026]] — Viés de método comum em um modelo de mediação de fonte única
- [[genai-motivation-engagement-2026]] — PLS-SEM apenas com autorrelato de motivação e engajamento
- [[fouad-bentley-trust-utility-gap-physics-2026]] — Pesquisa com 81 estudantes de graduação em física sobre uso e confiança em IA
- [[hawkins-feedback-literacy-ai-essay-writing]] — Gravação de tela e recordação estimulada como remédio ao autorrelato
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]] — Autorrelato mais dados de rastro sobre aprendizagem autorregulada
- [[adaptive-pretesting-retention]] — Indicadores comportamentais de esforço derivados de logs
- [[ai-vocational-education-training-review]] — Revisão relatando o desequilíbrio entre medidas de autorrelato e objetivas
- [[student-genai-use-views-writing|Uso e visões de estudantes sobre IA generativa para escrita]] — Pesquisa mais entrevistas em um departamento de sociologia
- [[competent-generative-ai-use-measures-review-2026]] — Além do letramento em IA: uma revisão estruturada e metanálise exploratória de medidas para o uso competente de IA generativa
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — PAUSE: uma ferramenta de autorreflexão que preserva a privacidade para o descarregamento cognitivo associado à IA
- [[ai-literacy-self-assessment-questionnaire-primary-2025]] — Um instrumento de autoavaliação de 15 itens para estudantes dos anos finais do ensino fundamental, explícito sobre o que a competência percebida pode estabelecer
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Revisão concluindo que 31 de 33 instrumentos de letramento em IA de professores são de autorrelato e nenhum é baseado em desempenho
