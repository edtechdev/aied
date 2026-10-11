---
title: "Ciências da Aprendizagem"
created: "2026-09-17T14:12:00-04:00"
updated: "2026-09-17T14:48:59-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/learning-sciences
source_updated: "2026-09-17T14:48:59-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **As ciências da aprendizagem** — o campo de pesquisa interdisciplinar que estuda como as pessoas aprendem e como projetar ambientes nos quais a aprendizagem acontece, recorrendo à [[cognitive-psychology|psicologia cognitiva]], à [[learning-theories|teoria da aprendizagem]], à ciência da computação e à linguística, e julgando seus designs com evidência empírica em vez de apenas com teoria. Nesta base de conhecimento, é o campo de pesquisa em torno da [[ai-education|IA na educação]], e não uma das disciplinas escolares: ela fornece os mecanismos que os sistemas de IA operacionalizam (componentes de conhecimento, [[mastery-learning|limiares de domínio]], [[transfer-of-learning|transferência]]), os objetos de design nos quais eles estão embutidos ([[learning-design|sequências de curso planejadas]], [[intelligent-tutoring|tutores]], regimes de [[feedback|feedback]]) e os padrões pelos quais são julgados ([[learning-gains|ganhos de aprendizagem]], [[assessment-validity|validade da avaliação]], [[equity-in-ai-education|equidade]]). Sua questão organizadora não é se uma ferramenta tem bom desempenho, mas se um aprendiz mudou.

## Questões a considerar

- Um aprendiz passa em todo item de prática, de modo que o limiar de domínio encerra o conjunto — mas então aplica mal a regra onde a ação deveria ser retida. De quem é esse erro: do aprendiz, do modelo, ou da regra de parada?
- A mineração de sequências pode descrever 554 cursos como padrões sem observar uma sala de aula. O que o campo ganha, e perde, ao estudar intenções projetadas em vez de atividade realizada?
- A sensibilidade demográfica no feedback de um LLM parece adaptação quando acompanha o nível de educação declarado de um aprendiz, e parece viés quando desloca o sentimento. Um campo que não consegue separar os dois deveria continuar usando modelos abertos para avaliar?
- O apetite das ciências da aprendizagem por design causal — atribuição randomizada, auditorias contrafactuais, modelos executáveis do aprendiz — restringe o que conta como evidência na IA na educação?

## Introdução

As ciências da aprendizagem estudam a aprendizagem e o design de ambientes de aprendizagem, e são definidas tanto por seus métodos quanto por seus tópicos: experimentos, ensaios em sala de aula, modelagem [[quantitative-research|quantitativa]] de dados de estudantes, análise [[qualitative-research|qualitativa]] de designs e contextos, e pesquisa baseada em design que constrói uma intervenção e a revisa em uso. Essa amplitude separa esta página das vizinhas que fornecem os frameworks, a prática e os instrumentos; a seção abaixo estabelece cada fronteira e o que o campo estabeleceu do outro lado dela.

Esta página cobre o conhecimento substantivo que tais métodos produziram — o que os aprendizes fazem com um modelo generativo, quais arranjos mudam os resultados, e onde os próprios instrumentos do campo falham. A [[discipline-specific-aied|AIED específica por disciplina]] toma o corte oposto, sustentando que a matéria muda o que o apoio deveria fazer; as ciências da aprendizagem tomam a visão transversal, e os mecanismos que elas testam estão reunidos sob [[cognitive-psychology|psicologia cognitiva]].

### Como a IA aparece nas ciências da aprendizagem

- **Mecanismo primeiro, depois o modelo.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] rodaram onze experimentos (N = 192) com sistemas de [[intelligent-tutoring|tutoria inteligente]] para Riichi Mahjong e mostraram que aprendizes que compilavam uma produção supergeneralizada — a ação sem sua restrição de aplicação — a aplicavam mal no primeiro item de "não aja" em 61,5%–100%, contra 12% de erro esperado sob [[knowledge-tracing|rastreamento de conhecimento bayesiano]]. Com um limiar de domínio de 95%, o sistema parava a prática antes que os aprendizes encontrassem um caso exigindo que a ação fosse retida, de modo que o defeito passava despercebido. Uma prática curta de "não aja" com [[feedback]] nomeando a restrição ausente cortou a aplicação mal para 0,0%–23,1% (h de Cohen 1,70–2,44), e uma análise secundária de treze conjuntos de dados K-12 de *Decimal Point* encontrou a mesma estrutura no viés de número inteiro (84%–88% dos erros de comparação).
- **O ótimo depende do conteúdo.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger e Carvalho (2025)]] tratam a razão exemplo–problema como uma interação conteúdo–tratamento: em um experimento 2×2 com 95 participantes sobre material de geometria de área, o treinamento apenas com prática produziu maiores [[learning-gains|ganhos de aprendizagem]] para fatos verbais, enquanto o treinamento integrado a exemplos produziu maiores ganhos para habilidades generalizáveis (β = 0,41, p = ,038, d = 0,38). Um aprendiz simulado (Apprentice Learner) reproduziu o crossover apenas quando recebeu um mecanismo de memória-e-esquecimento ao estilo ACT-R de [[cognitive-psychology|psicologia cognitiva]]. Mais prática não é uniformemente melhor: conteúdo orientado à memória justifica recuperação, e habilidades orientadas à indução justificam exemplos integrados.
- **O design como objeto analisável.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec e Horvat (2026)]] voltaram a [[learning-analytics|análise de aprendizagem]] para o próprio [[learning-design|design de aprendizagem]], codificando 29.064 atividades em 554 cursos planejados em uma ferramenta gratuita de design de cursos. Aquisição foi o tipo de aprendizagem mais comum e o ponto de entrada mais comum; a transição de Markov mais forte foi Avaliação → Discussão (0,332) e a regra de maior confiança foi Aquisição → Avaliação → Prática → Prática (0,743, lift 1,45). O tipo de aprendizagem acompanhou o nível de resultado pretendido, com a Aquisição caindo de cerca de 50% das atividades no nível 1 de Bloom para cerca de 20% no nível 6. Os autores enfatizam que estes são designs pré-implementação: a semelhança com sequências invertidas, de [[inquiry-based-learning|investigação]] ou [[project-based-learning|baseadas em projetos]] não é evidência de intenção.
- **Auditando os modelos que avaliam.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto e Hovy (2026)]] auditaram seis [[llm|LLMs]] em [[automated-essay-scoring|correção de ensaios]], [[formative-assessment|feedback formativo]] e resposta a perguntas, mantendo a entrada da tarefa fixa enquanto variavam apenas o contexto demográfico (192.480 chamadas). A correção foi estável sob personas explícitas, mas o Llama-70B inflou seus próprios escores em 1,57 pontos sob histórico conversacional implícito (p < 0,001), e o ensino superior atraiu respostas menos legíveis e mais positivas — uma lacuna de sentimento de cerca de quatro desvios padrão. Os efeitos de legibilidade encolheram enquanto os efeitos de tamanho cresceram, e alguns coeficientes mudaram de sinal entre condições. Os autores o oferecem como um instrumento de auditoria, não como um veredicto de implantação, e leem o entrelaçamento do sinal demográfico e tópico como uma ameaça à [[assessment-validity|validade]] da avaliação e à [[equity-in-ai-education|equidade]] na educação com IA.
- **Medindo a competência, e seus limites.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]] organiza instrumentos para uso competente de [[generative-ai|IA generativa]] em quatro domínios — conhecimento e uso, supervisão epistêmica, calibração de dependência e controle de agentes usuários de ferramentas — recusando-se a colapsá-los em um único continuum de proficiência. Três correlações de mesma amostra entre [[ai-literacy|letramento em IA]] autorreferido e demonstrado se agruparam em r = ,055 (IC de 95% [-,047, ,156], N relatado = 2.765), o que o autor lê como suficiente para rejeitar tratar [[self-report-measures|autorrelatos]] como intercambiáveis com escores de desempenho, embora não suficiente para estabelecer um ponto de corte. Nenhum instrumento validado cobriu o conjunto completo de decisões que os agentes usuários de ferramentas criam; a bateria em camadas proposta é uma hipótese de design.
- **Autorrelato sobre a própria descarga cognitiva do aprendiz.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]] traduz a literatura de [[cognitive-offloading|descarga cognitiva]] no PAUSE, uma autoavaliação apenas de navegador com quatro domínios, cada item da era LLM ancorado a uma fonte, sem composto, sem armazenamento e sem modelo em produção; suas faixas são descritivas em vez de normadas, e uma leitura não deve justificar decisões de avaliação, admissão ou contratação. Seus limites declarados importam: o autorrelato de descarga é vulnerável à faculdade que ele concerne, um respondente que deliberadamente usa IA como [[scaffolding|suporte]] é lido como descarga em vários itens, e se a descarga associada à IA é distinta da dependência geral de tecnologia permanece em aberto.
- **Onde a expertise humana fica.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] relatam a divisão de trabalho mais clara: em um [[rct|ensaio controlado randomizado]] de dois meses com cerca de 900 tutores novatos de K-12 e aproximadamente 1.800 estudantes, sugestões em tempo real extraídas do raciocínio de tutores experientes elevaram o domínio de tópicos em 4 pontos percentuais (de 62% para 66%, p < 0,01), e em 9 pontos para tutores de classificação mais baixa, a cerca de \\$20 por tutor por ano, deslocando a tutoria rumo a perguntas guiadoras. Os ganhos foram proximais — os testes de fim de ano não se moveram. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] encontram professores chegando à mesma posição por design: seis professores do ensino médio prototipando chatbots especificaram um especialista delimitado, mantendo fronteiras de autoridade (a responsabilidade pela aprendizagem e pela segurança não é delegável) e fronteiras de expertise (o modelo carece de seu conhecimento dos estudantes individuais), e delegando apresentação de conteúdo, prática e [[feedback]] corretivo, enquanto reservavam a definição de objetivos e a [[summative-assessment|avaliação somativa]].
- **Capacidade ao nível do campo.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury e Liu (2026)]] pesquisaram 127 docentes com um instrumento [[tpack|TPACK]] adaptado para IA generativa: forte conhecimento de conteúdo e conhecimento pedagógico de conteúdo (M = 4,70–5,15) ao lado de conhecimento integrado à tecnologia marcadamente mais baixo, com o TPACK holístico mais baixo em 2,55, conhecimento de conteúdo não correlacionado com nenhum domínio integrado à tecnologia, e os três domínios integrados correlacionando-se tão altamente (r = ,81–,91) que podem funcionar como um único fator. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] lê a camada de governança por meio de um protótipo descontinuado do serviço civil do Reino Unido cuja base de código era um system prompt mais um pipeline de recuperação sobre modelos comerciais, argumentando que a generalidade dos modelos de fundação tanto habilita o reaproveitamento rápido em ferramentas de [[educational-policy-ai|política]] quanto torna a saída aberrante um risco apenas mitigável de forma permanente — supervisão que espreita por sobre o laço em vez de sentar-se dentro dele.

## Como as ciências da aprendizagem se relacionam com suas vizinhas

A [[design-based-research|pesquisa baseada em design]] é o método que este campo desenvolveu em vez de tomar emprestado: uma intervenção é construída e revisada dentro de uma sala de aula em funcionamento, com sua fundamentação teórica revisada ao lado dela, de modo que um estudo rende tanto um artefato quanto um princípio de design. É isso que a separa de um experimento de laboratório, que isola uma causa mantendo o contexto estático, e é por isso que os achados do campo chegam como conhecimento de design em vez de como tamanhos de efeito. A [[research-methods-aied|métodos de pesquisa em AIED]] toma o outro corte: essa página examina todo o repertório — experimentos, surveys, trabalho qualitativo, benchmarks, revisões, métodos de consenso — como uma escolha entre instrumentos, pesados pela validade da afirmação que cada um pode apoiar. Esta página lê o mesmo corpus pelo lado substantivo, perguntando o que o repertório estabeleceu sobre a aprendizagem e julgando um método por se sua afirmação de design sobrevive ao contato com os aprendizes.

As [[learning-theories|teorias da aprendizagem]] reúnem os frameworks candidatos — behaviorismo, cognitivismo, construcionismo, relatos socioculturais, motivação e autorregulação — como lentes para ler a IA. As ciências da aprendizagem compartilham esse vocabulário, mas não essa postura: aqui uma teoria é uma afirmação sobre mecanismo que um design deve instanciar ou refutar, e a posição do campo repousa sobre trabalho empírico e de design, e não sobre a coerência de um framework. A página de teoria é a que se abre para o que um framework afirma; esta página é a da evidência que um framework acumulou.

O campo também constrói teoria em vez de apenas testar frameworks tomados de empréstimo: o [[theory-development-aied|desenvolvimento de teoria em AIED]] cobre o trabalho conceitual que explica como aprendizes, professores e sistemas de IA interagem, e é onde os próprios construtos do campo são argumentados antes de serem medidos. O que seus designs costumam ser solicitados a produzir é [[transfer-of-learning|transferência]] — conhecimento e habilidade que sobrevivem além do tutor, disciplina ou tarefa em que foram aprendidos —, e é por isso que um ganho medido dentro de uma ferramenta conta como uma afirmação mais fraca do que um medido sem ela. E, como um ambiente projetado é uma intervenção composta, atribuir um resultado a um componente é o problema de medição permanente do campo: a [[educational-measurement|medição educacional]] fornece o aparato psicométrico que torna a atribuição argumentável, o que é por que as questões de medição chegam cedo aqui, e não depois do fato.

A [[cognitive-psychology|psicologia cognitiva]] é a disciplina de nível de mecanismo da qual o campo mais se nutre, fornecendo memória de trabalho limitada, codificação e recuperação, componentes de conhecimento decomponíveis e a linguagem diagnóstica da modelagem do aprendiz. As ciências da aprendizagem usam esses mecanismos sem se reduzir a eles: sua unidade de análise é um ambiente projetado que carrega variáveis sociais, motivacionais e contextuais que um relato laboratorial de memória não carrega, e seus testes rodam sobre intervenções inteiras em vez de sobre efeitos cognitivos isolados.

A [[pedagogy|pedagogia]] e o [[learning-design|design de aprendizagem]] cobrem a prática — qual estratégia de ensino usar, e como sequenciar objetivos, atividades e avaliação em um curso. Ambos são o que as ciências da aprendizagem estudam de fora, como objetos de descrição e avaliação; o campo não diz a um professor qual tática usar em seguida, ele relata o que as táticas demonstraram fazer. O design de aprendizagem é o parente mais próximo, já que ambos produzem algo que pode ser implementado e testado, mas a saída do designer é um curso ensinável, e a saída do campo é conhecimento sobre designs em geral.

Os achados só importam uma vez que chegam ao ensino, e essa jornada passa por três páginas. O [[educational-development|desenvolvimento educacional]] é a prática institucional que os carrega — desenvolvimento docente, padrões, política e trabalho de identidade decidem se um design validado algum dia chega a uma sala de aula, o que é por que a evidência do campo rotineiramente lidera o que as instituições implementaram. A [[teacher-education|formação de professores]] é onde o conhecimento precisa pousar antes que um professor entre na sala, e o [[teacher-role|papel do professor]] é onde ele pousa depois, no juízo momento a momento sobre quando intervir, qual instrumento usar e quando deixar um aprendiz sozinho. Nenhum dos três produz achados de ciências da aprendizagem; todos os três decidem se esses achados mudam a prática.

## Conceitos conectados

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## Artigos conectados

- [[competent-generative-ai-use-measures-review-2026]] — Review and exploratory meta-analysis of measures for competent generative-AI use (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Correctness masking an incomplete rule: mastery stopping rules in adaptive learning (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Counterfactual audit of demographic signals in LLM student assessment (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Markov chains and pattern mining over 29,064 activities in 554 courses (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — A privacy-preserving, non-diagnostic self-check for AI-associated offloading (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Zero-shot governance: general-purpose AI in policy, read through the Redbox codebase (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Why the best example–problem ratio depends on content (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Teachers design bounded-expert chatbots, with selective delegation of instruction (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — Faculty GenAI TPACK: strong content knowledge, weak technology-integrated knowledge (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: a randomized trial of human–AI live tutoring at scale (Wang et al. 2024)
