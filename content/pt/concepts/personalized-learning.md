---
title: "Aprendizagem personalizada"
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/personalized-learning
source_updated: "2026-10-28T19:13:23-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
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

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Aprendizagem personalizada** — adequar experiências educacionais a [[student-modeling|perfis individuais de quem aprende]], incluindo conhecimento prévio, ritmo de aprendizagem, preferências e estados [[affective-computing|afetivos]]. A IA permite personalização em escala, embora a lacuna entre *personalização do sistema* e *personalização percebida por quem aprende* permaneça um desafio de medição em aberto. Ao lado da [[adaptive-learning|aprendizagem adaptativa]] e da [[intelligent-tutoring|tutoria inteligente]], ela é um dos membros do lado da aplicação da família de [[student-modeling|modelagem de quem aprende e instrução adaptativa]] — consumindo modelos de quem aprende para adaptar a instrução.

## Questões para considerar

- Quando você pensa em "aprendizagem personalizada", imagina conteúdo adequado ao ritmo de alguém, ou aos objetivos que ela escolheu? A página diz que essas coisas são profundamente diferentes (desfechos uniformes por caminhos variados vs. desfechos diversos). Qual você valoriza mais, e por quê?
- A página distingue aprendizagem personalizada (o objetivo) de aprendizagem adaptativa (um mecanismo). Você consegue pensar em uma personalização que não envolve adaptação em tempo real — e ela ainda conta?
- Um sistema pode se adaptar sem que quem aprende jamais se sinta reconhecido. Quando você vivenciou ser "personalizado" sem se sentir genuinamente conhecido? Qual é a diferença?
- A página sinaliza que a personalização excessiva pode prender quem aprende em trilhas de baixa expectativa. Como uma adequação por IA bem-intencionada poderia baixar acidentalmente o teto para alguém?
- A personalização precisa de dados detalhados de quem aprende; a privacidade precisa de minimização de dados. Onde você traça a linha entre "dados suficientes para adaptar" e "tantos dados que quem aprende fica exposto"?
- O que uma IA precisaria lembrar sobre você entre sessões para personalizar genuinamente sua aprendizagem — e quais são os riscos de ela lembrar dessas coisas?

## Introdução

Adequar experiências educacionais a perfis individuais de quem aprende, incluindo [[prior-knowledge|conhecimento prévio]], ritmo de aprendizagem, preferências e estados afetivos. A IA permite personalização em escala, embora a lacuna entre *personalização do sistema* e *personalização percebida por quem aprende* permaneça um desafio de medição em aberto.

- **[[mishra-control-vs-agency-history-2025|Mishra et al.]]** distinguem duas formas de personalização com raízes históricas profundas — desfechos uniformes alcançados por caminhos variados (das máquinas de [[teacher-role|ensino]] de Skinner à tutoria por domínio estilo Khan Academy) vs. desfechos diversos e escolhidos por quem aprende —, mapeando-se na tensão do campo entre controle e agência.
- **A personalização pode ser atendida gerando o material, em vez de encontrá-lo.** O DagFlow-AI gera conjuntos de dados sintéticos de estatística ajustados ao interesse declarado do estudante, aos objetivos de aprendizagem do curso e ao nível de habilidade pretendido — um ajuste tríplice que os autores argumentam que conjuntos de dados reais raramente satisfazem ([[arthur-dagflow-agentic-synthetic-data-statistics-2026|Arthur et al., 2026]]). O limite é embutido: dados sintéticos não conseguem ensinar coleta de dados, mensuração ou desenho de estudo, de modo que a ferramenta complementa dados reais em vez de substituí-los.

## Arquiteturas para personalização impulsionada por IA

### Memória longitudinal (PersonaVLM → Educação)

Nie et al. (2026) desenvolveram uma arquitetura de memória de longo prazo [[multimodal|multimodal]] (PersonaVLM) que mantém consistência de persona ao longo das interações. Mapeada para a educação, isso permite sistemas de tutoria que lembram as [[misconceptions|concepções errôneas]] de alguém, as explicações preferidas e o histórico de progresso ao longo das sessões — abordando um déficit crítico nos tutores [[conversational-ai|chatbot]] sem estado.

### Substrato de personalização nativo de agente (DeepTutor)

Zhao et al. (2026) desenham cada funcionalidade do [[zhao-deeptutor-agentic-personalized-tutoring-2026|DeepTutor]] para compartilhar um substrato comum de personalização, em vez de aparafusar personalização a ferramentas reativas. Essa arquitetura garante coerência entre modalidades: o mesmo perfil de quem aprende impulsiona [[problem-solving|resolução de problemas]], [[automated-question-generation|geração de questões]] e escrita colaborativa.

### Personalização social multiagente (MAIC)

Yu et al. (2024) personalizam não apenas o conteúdo, mas o *contexto social*. Arquétipos de colegas de turma (Palhaço da Turma, Pensador Profundo, Anotador, Mente Curiosa) criam dinâmicas variadas de aprendizagem por pares adequadas a necessidades individuais de quem aprende.

### AutoML para retratos de quem aprende

A personalização é um objetivo central para melhorar a qualidade educacional, mas processar dados heterogêneos de comportamento de aprendizagem de múltiplas fontes permanece um desafio. Um framework de busca de arquitetura neural cognitiva personalizada, impulsionado por [[machine-learning|aprendizado de máquina]] automatizado, constrói retratos de quem aprende e gera modelos diagnósticos para perfis heterogêneos de quem aprende, integrando dados multimodais para ir além de desfechos estáticos de provas.

Uma base de conhecimento estática não consegue personalizar: ontologias evoluem lentamente e lidam mal com incerteza, portanto a arquitetura adequa a representação ao tipo de conhecimento — declarativo a ontologias, procedimental a regras, incerto a ontologias fuzzy ou probabilísticas, implícito a analytics e aprendizado de máquina — e prefere um sistema de pequenas ontologias mapeadas a um modelo monolítico ([[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova, 2026]]).

## Relação com aprendizagem adaptativa e tutoria inteligente

A aprendizagem personalizada é frequentemente confundida com a [[adaptive-learning|aprendizagem adaptativa]], mas elas não são a mesma coisa. A **aprendizagem adaptativa** refere-se ao *mecanismo* — um sistema ajustando conteúdo, ritmo e dificuldade em tempo real com base em um modelo de quem aprende. A **aprendizagem personalizada** é o *objetivo mais amplo* — adequar a experiência de aprendizagem inteira (conteúdo, caminhos, ritmo, preferências, objetivos) a um indivíduo, do qual a adaptação em tempo real é uma implementação. Sistemas adaptativos são um *meio* rumo à personalização, mas a personalização também pode ser alcançada por perfis estáticos de quem aprende, caminhos baseados em escolha ou adequação por tutor humano que não se adapta em tempo real.

Uma revisão PRISMA 2020 de 22 intervenções no ensino superior situa o apoio à aprendizagem personalizada e os caminhos adaptativos entre os casos de uso dominantes de IA, embora a maioria das implementações tenha melhorado a prática existente em vez de transformá-la ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

A [[intelligent-tutoring|tutoria inteligente]] se situa no meio: as ITS são as plataformas *adaptativas* canônicas que entregam instrução personalizada por meio de modelagem estruturada do estudante, enquanto os tutores baseados em [[llm|LLM]] personalizam conversacionalmente. Todas as três são membros do lado da aplicação da família de [[student-modeling|modelagem de quem aprende e instrução adaptativa]] — elas consomem as representações de quem aprende produzidas pela [[student-modeling|modelagem do estudante]], pelo [[knowledge-tracing|rastreamento de conhecimento]] e pelo [[cognitive-diagnosis|diagnóstico cognitivo]] para decidir o que ensinar em seguida. A distinção importa para a avaliação: estudos que rotulam um sistema como "adaptativo", "personalizado" ou "individualizado" de forma intercambiável (ver abaixo) podem obscurecer se o benefício alegado vem da adaptação em tempo real, da escolha de quem aprende ou da adequação de conteúdo.

## Desafios de medição

- **Personalização do sistema vs. percebida** — Um sistema pode se adaptar sem que quem aprende se sinta reconhecido
- **Validade longitudinal** — Os benefícios da personalização podem decair se os perfis se tornarem obsoletos ou sobreajustados
- **Riscos de [[equity-in-ai-education|equidade]]** — A personalização excessiva pode prender quem aprende em trilhas de baixa expectativa

- **Riscos de viés** — Condicionar a atributos do estudante pode codificar estereótipo: com redações mantidas constantes, o feedback para estudantes marcados por raça, língua ou deficiência se tornou mais elogioso e menos crítico ([[marked-pedagogies-linguistic-bias-writing-feedback|Tan, Phalen & Demszky (2026)]]).

## Personalização e avaliação

A personalização e a [[assessment|avaliação]] estão fortemente acopladas na aprendizagem impulsionada por IA. A personalização adaptativa depende da medição [[formative-assessment|formativa]] contínua do que alguém sabe (via [[knowledge-tracing|rastreamento de conhecimento]], [[student-modeling|modelagem do estudante]] e [[cognitive-diagnosis|diagnóstico cognitivo]]) para decidir o que adaptar em seguida — portanto a confiabilidade do sinal de [[assessment|avaliação]] restringe diretamente a qualidade da personalização. Inversamente, quando a [[summative-assessment|avaliação somativa]] é personalizada por quem aprende, [[bias-mitigation|justiça]] e comparabilidade se tornam mais difíceis de estabelecer. A [[research-methods-aied|pesquisa]] desta base de conhecimento adverte contra adaptar demais a sinais rasos ou ruidosos: sistemas [[adaptive-learning|adaptativos]] que medem mal alguém podem personalizar de formas que reduzem a aprendizagem em vez de apoiá-la, e estudantes nativos de IA cuja autoavaliação é não confiável (uma "baseline cognitiva ausente") são mais difíceis de modelar com precisão.

## Personalização na era da IA

A evidência mais forte de que essa preocupação não é hipotética vem de um [[personalization-paradox-adaptive-learning-emotions-2026|estudo longitudinal de três ondas com 486 graduandos chineses (Li, Lin & Qiu, 2026)]], que concluiu que quanto mais personalizados os estudantes percebiam seu ambiente adaptativo com IA, *menor* sua [[self-regulated-learning|aprendizagem autorregulada]] — o "paradoxo da personalização". Mudanças nas emoções acadêmicas carregaram a maior parte do efeito: encontrar o ambiente adaptativo previa menos prazer e mais ansiedade e tédio, e essas mudanças emocionais juntas respondiam por cerca de metade da associação entre personalização e autorregulação reduzida. O [[ai-literacy|letramento em IA]] amortecia o dano, enfraquecendo a associação emocional negativa à não significância em letramento alto. A personalização portanto parece comprar adequação adaptativa ao custo da própria atividade [[regulation|reguladora]] de quem aprende, e o estudo aponta a experiência emocional — e não apenas a carga cognitiva — como o canal por que esse custo é pago.


Onde o diagnóstico por trás de um caminho é validado, a personalização compensa ao reduzir a carga em vez de cobrir mais: a remediação por caminho mais curto teve média de 3,82 passos e cortou o tempo de estudo em 22,0% (57,6 contra 73,8 minutos), com a carga cognitiva carregando 53,7% do efeito no pós-teste ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).

A evidência da ferramenta pode ela própria ser negativa em pequena escala: em um teste de frações no ensino fundamental de cinco dias (n final = 22), o grupo de negócio como sempre mostrou ganhos de compreensão significativamente maiores que o grupo do Mathbot adaptativo com IA, e os autores sinalizam confundidores de nível de série, adivinhação e custo de licenciamento como limites — um rótulo "adaptativo" não carrega efeito algum ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman (2024)]]).

O aprendizado por reforço é um mecanismo distinto de personalização, e [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] mapeiam seu histórico empírico: sua revisão [[meta-analysis-systematic-review|PRISMA]] de 89 estudos de RL em educação conclui que a personalização por RL se concentra no [[higher-ed|ensino superior]] e em [[math-education|matemática]], com a adaptação implementada principalmente como agendamento de conteúdo (n = 53) ou personalização relacionada a orientação, como dicas e feedback (n = 36). Eles relatam que as políticas de RL superam baselines não adaptativas com mais frequência em adaptação relacionada a orientação e em variáveis [[affective-computing|afetivas]] (63% dos estudos testados), e que o ganho de aprendizagem — especialmente o ganho de aprendizagem normalizado — foi a fonte de recompensa mais eficaz — orientação prática para desenhar sinais de recompensa que personalizam rumo à aprendizagem genuína, e não ao [[student-engagement|engajamento]].

[[ai-coaching-rl-skill-development|Wang et al. (2026)]] mostram que o objetivo de recompensa é ele próprio uma escolha de personalização: um treinador de RL treinado na competência independente de quem aprende cortou o tempo de volta em 27,9% (p = 0,005) onde o desvanecimento baseado em regras não produziu mudança confiável, e os autores argumentam que agentes de codificação otimizados para desempenho na tarefa não têm incentivo para o que o humano retém.

Bernstein e Sibia (2026) aguçam uma distinção entre personalização de interesse e personalização de especialização: analogias de IA generativa adequadas a interesse foram relatadas como mais engajadoras e memoráveis, mas não uniformemente mais confiáveis, e alguns estudantes preferiram a explicação técnica genérica mesmo quando a analogia correspondia a seu interesse declarado, por autossuficiência e completude ([[student-reception-genai-analogies-computing-2026]]). Sua recomendação de desenho é personalizar por meio da estrutura do domínio-fonte e perguntar aos estudantes o que eles já sabem, e não apenas o que os interessa, já que a familiaridade com um domínio-fonte é o que permite a quem aprende inspecionar a analogia — e dar a quem aprende controle sobre a personalização por meio de um menu de analogias, opt-in, ou oferecer as versões genérica e personalizada juntas. Sidorkin (2026) documenta um pareamento adicional no nível de materiais de disciplina, e não de explicações individuais: leituras semanais geradas sob demanda para uma disciplina de pós-graduação em liderança educacional foram adequadas ao mesmo tempo ao longo de interesse (setor, papel profissional, exemplos locais) e nível de compreensão (ritmo, definições, profundidade), e os registros resultantes compartilhavam uma espinha dorsal comum (similaridade de cosseno TF-IDF de 0,50 a 0,61), o que ele lê como um modelo com botões ajustáveis, e não uma reescrita completa por quem aprende. O mesmo corpus mostra que a adequação era estrutural, mas desigual em intensidade: marcadores de adequação no nível do artefato tinham média de 52,24 por 10.000 palavras e variavam de 38,74 a 74,29 entre registros, enquanto prompts orientados à compreensão produziam 3,4x a 8,7x mais [[scaffolding|andaimes]] definicionais que o texto explicativo de baseline.

Um terceiro eixo de personalização é o *objetivo*, e é o insumo que planejadores de IA lidam pior. [[personapath-personalized-learning-paths-2026|Liu et al. (2026)]] parearam 2.000 personas sintéticas de quem aprende com um grafo de pré-requisitos de 347 livros-texto e 4.092 conceitos, e pediram a dez LLMs que planejassem, passo a passo, qual conhecimento alguém deveria estudar para alcançar uma unidade-alvo declarada. Os modelos produziram currículos estruturalmente sólidos — o DeepSeek-V3.1 alcançou 90,9% em validade de pré-requisito e alucinação —, mas falharam em adaptá-los a quem aprende: a adaptatividade chegou a no máximo 44,7%, a taxa final de aprovação do DeepSeek-V3.1 foi 29,5% em Educação Básica e 14,6% no Ensino Superior, e remover o campo de domínio da persona custou até 26,1 pontos percentuais de adaptatividade, deixando a validade quase inalterada. Gerar o caminho inteiro em uma única passada em vez de interativamente elevou a validade em até 30,8 pontos, ao mesmo tempo em que cortou a adaptatividade em 28,8. A afirmação "personalizado" é uma afirmação sobre responder ao estado de alguém, e a variável de estado é a parte que esses planejadores podem mais facilmente dispensar — uma contrapartida computacional da preocupação de medição acima.

Um quarto eixo é o *público*, e não o indivíduo: o [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] regenera uma aula existente para um grupo profissional nomeado (saúde, finanças ou energia), e seus avaliadores especialistas pontuaram as versões enquadradas por indústria 0,32 pontos mais alto em profundidade de personalização (3,97 contra 3,65), enquanto a calibração de público ficou atrás (3,52). Adequar a uma coorte em vez de a um indivíduo é uma forma de personalização mais barata e mais tratável, mas a rubrica que a mediu avaliou adequação julgada, e não desfechos de quem aprende.

A personalização pode superar um apresentador humano: em um curso online grande (493 respondentes), os estudantes classificaram vídeos personalizados gerados por IA acima dos gravados por humanos e não personalizados (classificação média 2,26 contra 2,69) e 88,4% classificaram algum vídeo personalizado em primeiro lugar, contra 73,8% para os gravados por humanos ([[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]]).

## Micropersonalização condicionada por prompt

[[prompt-engineering-personalization-ai-teaching-assistant-2026|Basu, Kakar & Goel (2026)]] mostram que a lacuna entre personalização do sistema e percebida pode ser abordada no nível da resposta. Seu framework para o tutor Jill Watson com [[llm|LLM]]/[[rag|RAG]] combina preferências selecionadas por quem aprende (abstração, verbosidade, percepção, processamento, compreensão) com demanda cognitiva inferida pelo sistema ([[cognitive-diagnosis|Taxonomia de Bloom]]) para produzir 96 microperfis adaptados a cada interação via [[prompt-engineering|condicionamento estruturado por prompt]] — sem retreinamento, sem autoria [[discipline-specific-aied|específica de domínio]]. Esse é um híbrido de [[adaptive-learning|adaptabilidade]] (seleção de preferência conduzida por quem aprende) e adaptatividade (avaliação cognitiva conduzida pelo sistema), mostrando que a personalização de *como* o conteúdo é apresentado pode ser tanto escalável quanto perceptível a quem aprende.

## Ambiguidade terminológica

Um problema recorrente é que "aprendizagem personalizada" é um termo guarda-chuva amplo e vagamente definido. Revisões sistemáticas ([[khalifeh-redefining-personalized-learning-ai-2026|Khalifeh et al., 2026]]) concluem que [[adaptive-learning|aprendizagem adaptativa]], instrução individualizada, aprendizagem customizada e aprendizagem personalizada são usadas de forma intercambiável, sem definição universalmente aceita — uma fonte de ambiguidade conceitual que complica a síntese de pesquisa e a prática baseada em evidência. O campo clama cada vez mais por um framework e uma definição unificados, para que "personalizado" denote uma afirmação precisa e respaldada por evidência, e não um rótulo vago (um ponto reforçado pela [[limitations-in-aied-research|crítica desta base de conhecimento ao uso fraco de constructos]]).

## Ideias equivocadas comuns

**"Aprendizagem personalizada e aprendizagem adaptativa são a mesma coisa."** Sistemas adaptativos são um *meio* para a personalização, não a sua definição. A personalização pode igualmente ser alcançada por perfis estáticos de quem aprende, por trilhas baseadas em escolha, ou pela adequação feita por um tutor humano que nunca se adapta em tempo real. Tratar os dois como sinônimos faz uma escola que oferece rica escolha a quem aprende, mas nenhum motor adaptativo, parecer não personalizada, e faz um exercício densamente adaptativo parecer mais centrado em quem aprende do que ele é.

**"A personalização compensa cobrindo mais terreno."** Onde o diagnóstico por trás de uma trilha é de fato validado, ela compensa *reduzindo a carga, e não pela cobertura*: a remediação por caminho mais curto teve média de 3,82 passos e cortou o tempo de estudo em 22,0% (57,6 contra 73,8 minutos), com a carga cognitiva carregando o efeito. O benefício são menos passos desnecessários, não mais conteúdo por hora.

**"Um modelo que consegue gerar um currículo coerente consegue personalizá-lo."** Geração e adaptação são capacidades diferentes, e a lacuna entre elas é grande. Modelos geradores de currículo produziram saída estruturalmente sólida — o DeepSeek-V3.1 alcançou 90,9% em validade de pré-requisitos e de alucinação —, enquanto a adaptatividade parou em 44,7%, com uma taxa de aprovação final de 29,5% na condição Básica. Validade de pré-requisitos não é personalização.

**"Gerar o material remove a restrição que o conteúdo real impõe."** A geração relaxa uma restrição e não consegue relaxar outras. O [[arthur-dagflow-agentic-synthetic-data-statistics-2026|DagFlow-AI]] gera conjuntos de dados sintéticos de estatística ajustados ao interesse declarado do estudante, aos objetivos do curso e ao nível de habilidade pretendido — um ajuste tríplice que conjuntos de dados reais raramente satisfazem —, mas seus autores declaram o limite abertamente: dados sintéticos não conseguem ensinar coleta de dados, mensuração ou desenho de estudo, de modo que a ferramenta complementa dados reais em vez de substituí-los.

**"Os ganhos de aprendizagem relatados são o que valida esses sistemas."** Nos estudos de RL e de personalização aqui levantados, as políticas superaram baselines não adaptativos com mais frequência em adaptação relacionada à orientação e em variáveis afetivas (63% dos estudos testados), enquanto o ganho de aprendizagem — especialmente o ganho de aprendizagem normalizado — foi o desfecho *menos* comumente relatado. Uma literatura que relata engajamento e afeto muito mais do que aprendizagem não é evidência de que a aprendizagem domine.

## Implicações para a prática

**Para instrutores**

- Pergunte o que está sendo adaptado antes de acreditar na palavra "personalizado": o conteúdo, a sequência, o ritmo, o afeto ou a apresentação. Adaptações diferentes carregam evidências diferentes, e apenas algumas têm resultados de aprendizagem associados.
- Prefira sistemas que encurtam o caminho a sistemas que acrescentam conteúdo. O benefício medido no estudo de remediação foi 22% menos tempo de estudo, e não mais cobertura.
- Mantenha as partes da disciplina que um conjunto de dados gerado não consegue fornecer — coleta de dados, mensuração, desenho de estudo — como trabalho real, e deixe a personalização operar sobre a prática ao redor delas.

**Para desenvolvedores**

- Relate resultados de aprendizagem, e não apenas engajamento e afeto. O achado do levantamento de que o ganho de aprendizagem é a medida menos relatada é uma descrição do que o campo está entregando hoje, não um modelo a copiar.
- Distinga qualidade de geração de qualidade de adaptação na sua própria avaliação, relatando idealmente as duas separadamente, porque uma validade de pré-requisitos forte pode coexistir com adaptatividade abaixo de 50%.
- Trate o objetivo de recompensa como uma escolha de personalização em si: um coach de RL treinado na competência independente de quem aprende cortou o tempo de volta em 27,9% (p = 0,005), onde o desvanecimento baseado em regras não produziu mudança confiável.

**Para pesquisadores**

- Pare de confundir personalização com adaptação nos construtos que mede, e diga explicitamente qual mecanismo produziu o efeito.
- Relate o ganho de aprendizagem normalizado como desfecho primário; sua escassez na literatura é uma lacuna a fechar, e não uma convenção a herdar.

## Conceitos conectados

- [[adaptive-learning]] — Sistemas adaptativos que adequam conteúdo, ritmo e dificuldade a quem aprende em tempo real
- [[intelligent-tutoring]] — Sistemas de tutoria que modelam quem aprende e entregam instrução individualizada
- [[student-modeling]] — Representar o conhecimento, as competências e os estados de quem aprende que impulsionam a adaptação
- [[knowledge-tracing]] — Inferir domínio de componentes de conhecimento a partir do desempenho ao longo do tempo
- [[cognitive-diagnosis]] — Diagnosticar conhecimento e atributos latentes de quem aprende a partir de respostas
- [[scaffolding]] — Apoio e desvanecimento calibrados a necessidades individuais de quem aprende
- [[student-experience]] — A experiência vivida da personalização por quem aprende
- [[learning-analytics]] — Medição orientada por dados da aprendizagem que informa a adaptação
- [[formative-assessment]] — Avaliação contínua que sinaliza o que adaptar em seguida
- [[summative-assessment]] — Avaliação de ponto final cuja comparabilidade a personalização complica
- [[generative-ai]] — Personalização conversacional baseada em LLM
- [[edtech-platform]] — Plataformas que entregam aprendizagem personalizada em escala
- [[higher-ed]] — Contexto de ensino superior para personalização
- [[online-teaching-and-learning]] — Ensino e aprendizagem online
- [[recommender-systems-and-learning-paths]]

## Artigos conectados
- [[bespoke-industry-personalized-lecture-videos-2026]] — Regeneração de vídeo de aula personalizado por indústria a partir de uma transcrição-semente: adequação no nível do público, avaliada por especialistas de domínio (Puech et al. 2026)
- [[prompt-engineering-personalization-ai-teaching-assistant-2026]] — Micropersonalização por prompt engineering de um assistente de ensino com IA (Basu, Kakar & Goel 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — A tutoria por IA não é um monolito: o que realmente sabemos (briefing Stanford SCALE/NSSA)
- [[mishra-control-vs-agency-history-2025]] — Distingue duas formas de personalização (desfechos uniformes vs. diversos)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefinindo a aprendizagem personalizada: revisão sistemática
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — Substrato de personalização nativo de agente para tutoria
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Modelo de conhecimento híbrido em camadas baseado em ontologia para e-learning personalizado
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — Aprendizagem adaptativa personalizada para frações no ensino fundamental
- [[ai-coaching-rl-skill-development]] — Treinamento por aprendizado por reforço para desenvolvimento de competências
- [[personalized-ai-generated-videos-preference-2026]] — Estudantes preferem vídeos personalizados gerados por IA aos gravados por humanos e não personalizados (Tomlinson et al. 2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnóstico cognitivo bayesiano para caminhos de aprendizagem personalizados
- [[graph-its-adaptive-algorithms-2026]] — Tutoria inteligente baseada em grafos para domínios dinâmicos (2026)
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Papéis do instrutor e da IA na avaliação formativa aprimorada pelo ChatGPT
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: viés no feedback automatizado personalizado
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Revisão sistemática: caminhos adaptativos e recomendadores são um caso de uso de topo na integração de IA no ensino superior
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Falhas, mas memoráveis: a recepção crítica dos estudantes de analogias de IA generativa personalizadas por interesse na educação em computação
- [[personalization-paradox-adaptive-learning-emotions-2026]] — Paradoxo da personalização: personalização adaptativa percebida ligada a menor aprendizagem autorregulada via emoções acadêmicas, amortecida pelo letramento em IA (Li, Lin & Qiu 2026)
- [[personapath-personalized-learning-paths-2026]] — PersonaPath: planejadores de LLM alcançam 90,9% de validade, mas nenhum modelo supera 44,7% de adaptatividade ao personalizar caminhos para um objetivo declarado de quem aprende (Liu et al. 2026)
