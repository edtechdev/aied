---
title: Avaliação formativa
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-04T05:46:16-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
connected_resources: [snorkl, ai-infused-assignment-playbook]
confidence: high
translation_of: concepts/formative-assessment
source_updated: 2026-10-15T08:25:00-04:00
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Avaliação formativa** — avaliação desenhada para informar a instrução e a aprendizagem em curso, em oposição à avaliação [[summative-assessment|somativa]]. Na educação com IA, a avaliação formativa é simultaneamente transformada pela IA e essencial a ela: os sistemas de IA podem gerar, validar e adaptar itens e feedback formativos em escala, enquanto o feedback formativo é um mecanismo primário pelo qual os [[intelligent-tutoring|tutores com IA]] e os [[adaptive-learning|sistemas adaptativos]] apoiam a aprendizagem. A [[research-methods-aied|pesquisa]] desta base de conhecimento examina os itens formativos gerados por IA, o feedback gerado por IA e o desenho e a avaliação desses sistemas.

## Perguntas para refletir

- A avaliação formativa serve para fechar o laço — expor o que os estudantes não sabem e dar feedback sobre o qual possam agir *enquanto a aprendizagem ainda está em curso*. Como isso é fundamentalmente diferente da avaliação somativa, e quando as duas podem se confundir na prática?
- A IA pode gerar questões de múltipla escolha com acurácia impressionante nas dimensões verificáveis, mas é mais fraca nas dimensões de julgamento instrucional. Se uma máquina é boa em respostas corretas, mas mais fraca no julgamento [[pedagogy|pedagógico]], no que ela deveria ter confiança — e o que os humanos deveriam continuar fazendo?
- O feedback gerado por IA só ajuda quando os estudantes de fato o realizam — a condição de "feedback realizado", em que os estudantes selecionam, avaliam e aplicam as sugestões, superou o simples recebimento de feedback. Se a realização importa mais do que o próprio feedback, o que isso significa para como o feedback formativo deveria ser desenhado?
- O feedback é descrito não como transferência de informação, mas como uma prática [[ethics|ética]] e relacional. O que se perde quando a avaliação formativa é produzida em massa como "lixo de IA" — e o que os bancos de comentários humanos e o cuidado relacional podem preservar?

## Introdução

A avaliação formativa é central na [[ai-education|IA na educação]] porque está na junção da [[assessment|avaliação]] e do [[feedback|feedback de aprendizagem]]. Seu propósito é fechar o laço: expor o que os estudantes sabem e não sabem, e fornecer feedback sobre o qual possam agir para melhorar. A IA torna isso viável em escala — gerando itens, pontuando respostas e entregando feedback individualizado —, mas a pesquisa desta base de conhecimento mostra que a qualidade varia drasticamente entre tipos de item, e que o feedback só ajuda quando os estudantes de fato o realizam.

## Itens formativos gerados por IA

Os sistemas de IA geram itens de avaliação formativa em múltiplas modalidades, com confiabilidade variando por tipo:

- **Questões de múltipla escolha:** o [[code-gen]] mostra que a [[agentic-ai|IA agêntica]] pode gerar QMs de forma confiável para compreensão de código quando validadas ao longo de sete dimensões pedagógicas — as taxas de sucesso alcançam **98,6%** para alinhamento conceitual e **79,9%** para qualidade do feedback —, sugerindo que a IA é mais forte nas dimensões verificáveis e mais fraca nas dimensões de julgamento instrucional. Isso se conecta à [[automated-question-generation|geração automatizada de questões]] em sentido mais amplo.

- **Um banco de itens gerados fácil não dá sinal formativo algum.** Em uma implantação de 10 semanas, cerca de 70% dos itens de prática gerados por IA foram respondidos corretamente por todos os estudantes (p = 1,0), de modo que os quizzes de baixo risco que rodavam a cada 15 a 20 minutos foram bem recebidos, mas carregavam quase nenhuma informação discriminante para adaptar a instrução ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Correção automatizada de redações:** frameworks multiagente (por exemplo, o MASS) melhoram a consistência em relação a [[llm|LLMs]] isolados na [[automated-essay-scoring|correção de redações]], embora a [[explainable-ai|interpretabilidade]] das decisões de correção multiagente continue um desafio em aberto.
- **Pipelines de pontuação formativa:** o [[cotal-formative-assessment-scoring-2026|CoTAL]] acopla o prompting Cadeia-de-Pensamento à [[active-learning|aprendizagem ativa]] e ao Desenho Centrado em Evidências para produzir pontuação generalizável de avaliação formativa com [[prompt-engineering|engenharia de prompts]] com humano no circuito.
- **[[automated-assessment|Avaliações de alta frequência com correção automática]]:** as [[automated-formative-assessments-a-level-sciences|avaliações formativas automatizadas em ciências de nível A]] examinam o efeito da avaliação formativa de alta frequência com correção automática sobre os [[learning-gains|resultados de aprendizagem]]. Uma revisão de escopo da correção automática de respostas curtas em [[science-education|ciências]] (2017–início de 2024) confirma que esse caso de uso formativo de resposta curta é um campo com tração real: os modelos da família BERT dominaram a correção automática até 2021, antes de os [[llm|LLMs]] maiores serem usados via prompting a partir de ~2022, e os modelos com aumento de domínio, conscientes de rubrica e de cadeia-de-pensamento tiveram o melhor desempenho —, mas os apelos da revisão por avaliação abrangente e as lacunas não resolvidas de [[bias-mitigation|justiça]] e explicabilidade alertam contra estender tais sistemas ao uso [[summative-assessment|somativo]] ou de alto risco sem mediação ([[auto-marking-short-answer-science-2026]]).

## Feedback gerado por IA

Um grande corpo de pesquisa desta base de conhecimento examina o feedback formativo gerado por IA:

- **O problema da realização:** [[ai-feedback-enactment-workflow-2026|Making AI-Generated Feedback Matter]] (13.037 estudantes; 51.296 recursos) mostra que o valor do feedback depende de os estudantes o *realizarem* — a condição de **Feedback Realizado**, em que os estudantes selecionam, avaliam e aplicam as sugestões de feedback da IA, superou o feedback simplesmente dirigido.
- **O feedback de IA pode igualar o de professores especialistas quando a rubrica carrega os critérios.** Cego à fonte e randomizado ao longo de 47 grupos de projeto universitários, um LLM ao qual foi dada a rubrica de 0–30 coconstruída e o exemplar foi não inferior *e equivalente* ao feedback de especialistas (+0,23, IC 90% [−0,46; 0,91]) — foi a rubrica, e não o modelo, que calibrou ([[ai-generated-feedback-higher-ed|Grion et al. (2026)]]).
- **O feedback não é transferência de informação:** [[care-full-feedback-genai|The care-full craft of feedback]] argumenta que o feedback é uma prática ética e relacional, não transmissão de informação — o feedback só constitui feedback quando os estudantes lhe dão sentido e agem sobre ele, e contrasta o "lixo de IA" produzido em massa com os atalhos de banco de comentários humanos.
- **O feedback sequenciado pode sair pela culatra:** o [[sequenced-ai-feedback-learning|Feedback de IA sequenciado]] (encorajamento → dicas → resposta correta, desenhado para promover autonomia) de fato **prejudicou a aprendizagem** em um experimento randomizado (N=199), apesar de aumentar o [[student-engagement|engajamento]] e as percepções positivas — um achado de alerta sobre o desenho de feedback.
- **Ferramentas centradas no estudante:** o [[learner-centered-feedback-ai|PolyFeed]] combina modelos de sugestão com ML à prática do [[teacher-role|professor]], mostrando como os professores adotam e adaptam sugestões de feedback de IA; o [[ai-internal-feedback-evaluative-judgments|feedback interno apoiado por IA]] ajuda graduandos a desenvolver [[evaluative-judgment|julgamento avaliativo]].
- **Prompting guiado por rubrica e feedback consciente do papel:** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] mostraram que o refinamento iterativo e coconstruído da rubrica — esclarecendo descritores de desempenho e aceitando explicitamente indicadores implícitos de aprendizagem — levou a concordância LLM–humano sobre o trabalho de desenho dos estudantes de 54,75% a 81,25% (com o Alfa de Cronbach subindo de 0,393 a 0,798), com os maiores ganhos na categoria cognitivamente exigente de Iteração e Reflexão. Promptar o mesmo modelo nos papéis de instrutor, revisor por pares e revisor de edital produziu feedback avaliativo distinto, e os LLMs pós-revisão foram mais consistentes do que alguns avaliadores humanos na aplicação de limiares de desempenho — posicionando os LLMs guiados por rubrica como parceiros de calibração e de codesenho em ambientes de feedback formativo, com a supervisão com humano no circuito permanecendo essencial.
- **Os números de concordância escondem uma direção: um modelo pode se abrigar na categoria do meio.** Um avaliador LLM que rotulava turnos de diálogo dentro de uma avaliação baseada em conversa correspondeu à codificação humana em 52,2% de 155 eventos, mas usou o rótulo abrigado PARCIAL_CORRETO com mais frequência do que os avaliadores (53,5% contra 41,3%) e marcou 5,4% dos turnos como IRRELEVANTE onde os avaliadores marcaram nenhum ([[llm-multi-agent-conversation-assessment-2025|Hou et al., 2025]]).
- **O feedback de IA sustenta a participação e gera ganhos em escala:** o experimento de campo de um semestre de [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]] ao longo de tutorias de graduação constatou que o feedback formativo individual com GPT-4 (abrangendo as três dimensões de Hattie & Timperley — Feed-Back, Feed-Up, Feed-Forward) sustentou a maior participação ao longo de oito tarefas abertas, alongou as respostas dos estudantes e produziu os maiores ganhos de aprendizagem de conteúdo — um efeito impulsionado pela provisão confiável e consistente da IA, já que, quando o feedback textual de alta qualidade dos pares de fato era recebido, os resultados dos pares igualavam os da IA.
- **Futuros do feedback:** [[feedback-futures-genai|Feedback Futures]] sintetiza uma edição especial e argumenta que a questão não é *se* a [[generative-ai|GenAI]] pode produzir feedback, mas como desenhar feedback que apoie a aprendizagem, destilando as tensões recorrentes no campo.

- **A maior parte do feedback formativo é momentânea, não sustentável.** Em uma revisão de escopo de 37 estudos de avaliação autêntica, 23 usaram feedback formativo para melhoria imediata, mas apenas quatro usaram feedback sustentável que os estudantes transferem para contextos futuros — o padrão reativo que as ferramentas atuais de feedback com IA reproduzem ([[zhan-boud-du-authentic-assessment-scoping-review-2025|Zhan, Boud & Du (2025)]]).
- **Feedback diagnóstico-primeiro para problemas quantitativos abertos:** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin et al. 2026)]] entrega feedback formativo personalizado e em tempo real sobre Questões de Fórmula Calculada de Economia da Engenharia, um domínio em que soluções manuscritas e não estruturadas haviam bloqueado o apoio da IA. Uma espinha dorsal [[machine-learning|XGBoost]] por questão diagnostica erros provavelmente rotulados por rubrica a partir das respostas numéricas enviadas pelos estudantes (precisão média 0,81, recall 0,79), e um esquema baseado em diálogo solicita respostas intermediárias apenas quando a confiança da predição é baixa — equilibrando a acurácia do feedback contra a eficiência da coleta dentro de uma interface web de banco de questões.
- **Escala e limites do feedback formativo com LLMs (evidência sistemática):** uma revisão sistemática guiada pela [[meta-analysis-systematic-review|PRISMA]] de 42 estudos empíricos (2023–2025) constata que os LLMs podem reduzir a carga de trabalho dos professores e entregar feedback rápido e personalizado em escala — especialmente em turmas grandes ou do [[higher-ed|ensino superior]] —, mas que o feedback às vezes é genérico demais ou desalinhado com a nota atribuída, e que a confiabilidade escorrega em tarefas mais longas, [[multilingual-learning|multilíngues]] ou matizadas, reforçando que o feedback formativo com IA é melhor implantado sob supervisão de educadores ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **A adaptatividade é um ingrediente separável, não decoração:** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham, Schaaf, Brod & Breitwieser (2026)]] fornecem o teste causal direto que a maioria dos estudos de feedback com LLMs pressupõe de saída, contrapondo o feedback contingente à resposta do GPT-4 a uma orientação genérica escrita por especialistas e igualada em estrutura, tom, extensão e fraseado [[motivation|motivacional]] (verificada com uma rubrica de qualidade de cinco dimensões, κ = 0,76–1,00). Em um experimento pré-registrado dentro de sujeitos, 155 alunos alemães do 5º e 6º ano (M = 12,08 anos) revisaram seis planos "se-então": a qualidade do plano subiu de uma mediana de **2 → 5** sob feedback adaptativo versus **2 → 3** sob orientação genérica (V dentro de sujeitos = 10.440, p < 0,001, r = 0,86; estimativa da interação condição × tempo = 1,68, SE = 0,14, p < 0,001, sem diferença de pré-apoio). As crianças avaliaram o feedback adaptativo como mais útil (r = 0,67) e mais motivador (r = 0,74), e as percepções no nível da tentativa previram o tamanho dos ganhos de revisão — tornando a [[technology-acceptance-model|utilidade percebida]] parte do caminho, e não um subproduto afetivo. Como o próprio controle era bem desenhado, o estudo mostra valor acrescentado *além* de uma boa orientação não contingente, em vez da diferença entre feedback e nada: a orientação genérica é um substituto genuíno, mas limitado, que estagna em sua própria mediana. O planejamento serviu como caso de teste por ser uma estratégia central de [[self-regulated-learning|aprendizagem autorregulada]] com critérios explícitos de qualidade, o que torna a contingência — a propriedade que distingue o [[scaffolding|andaimento]] do apoio estático — diretamente mensurável em uma resposta de uma frase. Os autores definem adaptatividade de forma estrita como a adaptação contingente à resposta do conteúdo do feedback à resposta concreta do estudante, distinguindo-a da interatividade conversacional, do tom e da [[adaptive-learning|aprendizagem adaptativa]] como traço estável.
- **A utilidade percebida acompanha a acionabilidade:** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] fizeram 144 estudantes de programação avaliarem 893 instâncias de feedback gerado por LLM em cinco dimensões e 237 relatórios consolidados em seis, mantendo domínio, tarefa e instrumento constantes enquanto o nível educacional variava. As avaliações foram favoráveis ao longo de tudo, com médias no nível do estudante de 4,24 a 4,43 para respostas individuais e 4,11 a 4,38 para relatórios, mas a acionabilidade e a utilidade receberam as avaliações mais baixas, mesmo carregando os maiores pesos relativos (32,6% e 29,0%) em um modelo que explica 76% da variância da utilidade percebida, e motivação e personalização lideraram um modelo no nível do relatório de intenção de uso que explica 53%. Como a acionabilidade é a dimensão que a pesquisa em [[feedback|feedback]] trata como a mais difícil de fornecer, o padrão se lê como [[technology-acceptance-model|aceitação de tecnologia]] aplicada ao feedback: a utilidade acompanha se o estudante consegue agir, não o quão polido o feedback soa.

- **A concordância off-line superestima o desempenho ao vivo:** o pipeline de feedback com GPT-4o de [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] reproduziu a nota do instrutor dentro de 0,5 pontos em 83% de 362 submissões, mas a concordância corrigida pelo acaso foi apenas moderada (ICC(2,1) = 0,49) e caiu de r = 0,92 em roteiros históricos para 0,57 no uso ao vivo supervisionado pelo instrutor.
- **A compreensão ultrapassa a acionabilidade no caminho para a revisão:** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao e Fan (2026)]] separaram o diagnóstico no nível do problema das sugestões e deram aos estudantes uma folha de interpretação escrita (reformulação, explicação do efeito, identificação de incerteza, plano de revisão) antes da revisão independente, da revisão estruturada pelo professor, da reavaliação e da reflexão. Ao longo de três ciclos de escrita em duas turmas intactas (96 estudantes; 288 observações no nível do ciclo), a compreensão do feedback teve a associação mais forte com a qualidade da revisão (r = 0,501, à frente da acionabilidade em 0,480 e da acurácia diagnóstica em 0,445), e o grupo de diagnóstico ganhou 5,92 pontos de escrita contra 3,58 (g de Hedges = 1,12), localizando a alavanca no entendimento que os estudantes têm do diagnóstico, e não apenas em sua acionabilidade.

## Desenho ancorado no currículo e com o educador no circuito

O [[ai-learning-tools-engineering-education-needs|LearnLens]] aborda três problemas persistentes na avaliação formativa com IA: **avaliação consciente do erro** (capturando erros de raciocínio matizados em vez de erros de superfície), **cadeias de memória ligadas a tópicos** (substituindo a recuperação ruidosa baseada em similaridade do [[rag|RAG]] por recuperação estruturada ancorada no [[curriculum-design|currículo]]) e desenho **com o educador no circuito** (personalização e supervisão pelo professor, não automação plena). Isso se conecta à tensão mais ampla no [[human-in-the-loop-ai|humano no circuito]]: automação escalável com validação de especialistas.

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl & Leuders (2026)]] aguçam o que "educador no circuito" significa quando uma ferramenta produz suas próprias afirmações, e não observações brutas. Sua análise conceitual argumenta que as inferências diagnósticas geradas por IA são evidência qualitativamente diferente, porque já são produto de interpretação algorítmica, de modo que os professores precisam de uma camada adicional que os autores chamam de **metadiagnóstico**: aceitar, rejeitar ou modificar deliberadamente uma inferência e integrá-la ao próprio conhecimento contextual. Especificar o framework DiaCoM para isso trata as inferências geradas por IA como uma característica da situação e a decisão de aceitar, rejeitar ou modificar como comportamento diagnóstico, ao mesmo tempo que amplia as características de pessoa que os professores precisam de ter, para incluir conhecimento de como os sistemas de IA de fato funcionam. Como os sistemas atuais repousam sobretudo em dados de desempenho, como correção da tarefa e tempo de conclusão, os estados motivacionais e as dinâmicas de sala de aula ficam amplamente ausentes, de modo que o artigo mantém os professores, e não o painel, como os agentes reflexivos responsáveis, e enquadra julgar afirmações algorítmicas como um alvo para o desenvolvimento profissional.

Igualar o papel da IA ao nível de desempenho é um movimento de desenho relacionado: professores de ciências em formação pré-serviço descreveram o ChatGPT como um Tutor Paciente para os de baixo desempenho, um Treinador Pessoal para os de desempenho médio e um Par Intelectual para os de alto desempenho, enquanto o instrutor mantinha a explicação final do conteúdo difícil ([[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom et al., 2026]]).

## Trade-offs de desenho

| Dimensão | Adequação da IA | Exigência humana |
|-----------|----------------|-------------------|
| Correção factual | Alta | Baixa |
| Alinhamento conceitual | Alta | Média |
| Qualidade dos distratores | Baixa | Alta |
| Profundidade do feedback | Baixa | Alta |
| Consistência da rubrica | Média | Média |

## Avaliação, feedback e aprendizagem

A avaliação formativa na educação com IA se conecta ao próprio processo de aprendizagem:

- **Laços de feedback:** os [[feedback|laços de feedback]] são o mecanismo pelo qual a avaliação formativa informa a aprendizagem; os tutores com IA e os sistemas adaptativos fecham esses laços em escala.
- **Aprendizagem autorregulada:** o feedback formativo apoia a [[self-regulated-learning|aprendizagem autorregulada]] quando os estudantes monitoram o progresso e se ajustam; o feedback de IA deveria cultivar o [[ai-internal-feedback-evaluative-judgments|julgamento avaliativo]], não deslocá-lo.
- **A correção automatizada alcança algumas fases do ciclo, não todas:** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen & Liu (2026)]] conduziram um quase-experimento de 14 semanas em que 46 estudantes de interpretação submeteram execuções semanais a um sistema de correção automatizada que devolvia uma nota imediata, uma transcrição, os erros marcados e uma execução de referência, enquanto um grupo controle recebia apenas feedback do professor para a turma inteira. O grupo automatizado melhorou mais no geral (d = 1,03), mas o ganho ficou onde o déficit era decomponível, o sinal confiável e a escala sensível: a acurácia linguística e a coerência lógica subiram, enquanto a fidelidade da informação (concordância com avaliadores humanos r = 0,12) e a fluência da entrega não se moveram. A [[self-regulated-learning|aprendizagem autorregulada]] foi desigual de forma correspondente, com execução e monitoramento se correlacionando com os ganhos de nota (r = 0,42), enquanto planejamento e motivação emocional ficaram perto do ponto médio da escala, e vários estudantes postergaram o engajamento após notas baixas em vez de analisar as causas. O sistema alcançou a fase de desempenho do ciclo, não o planejamento que a precede.
- **Do diagnóstico automatizado à prática gerada:** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu, Luo & Li (2026)]] conectam alinhamento áudio–nota, quantificação de erro e uma camada de Otimização de Política Proximal em um único laço fechado para a educação musical, transformando sinais de erro de ritmo (recall de 91,2%, especificidade de 98,4%) em recompensas que direcionam faixas de prática geradas, e relatam uma interação Grupo × Tempo significativa favorecendo o grupo do sistema (beta = 0,52) ao longo de um quase-experimento de 12 semanas com 120 graduandos de música. Os autores enquadram isso como viabilidade técnica, e a leitura prática é triagem, e não avaliação: a precisão de 89,7% significa que cerca de um erro de ritmo sinalizado em dez é um falso alarme, e os revisores especialistas do estudo avaliaram o apoio à expressão musical como a área mais fraca, de modo que os laços automatizados servem a exercícios técnicos, enquanto o julgamento expressivo fica com os professores.
- **Andaimento:** o [[scaffolding|andaimento]] e a avaliação formativa trabalham juntos — a IA pode fornecer dicas e prompts no momento oportuno, embora a pesquisa sobre feedback sequenciado alerte contra o excesso de estruturação.

- **A qualidade da rubrica move a concordância da correção automatizada mais do que a escolha do modelo.** Em 1.200 respostas de exame de Linux/bash, [[automated-grading-linux-bash-examinations-large-language-models|Alonso-Carracedo et al. (2026)]] constataram que acrescentar uma rubrica completa mais uma resposta de referência elevou todos os modelos (melhor: Gemini 3.0 Pro, ICC(3,1) = 0,888 contra um teto humano de 0,949), enquanto a concordância caía monotonicamente à medida que o nível cognitivo da questão subia.
- **Rubricas geradas por IA igualaram a pontuação humana apenas dentro de uma margem.** Quatro rubricas de IA atingiram equivalência agrupada com a linha de base humana dentro de ±5 pontos ao longo de 308 respostas de programação (correlações 0,948–0,973), mas cinco células rubrica–atribuição a excederam, e o GPT-4.1/4o corrigiu sistematicamente mais severo em rubricas estruturadas (−4,46 contra −0,66 nas de forma livre) ([[harmogen-ai-assessment-rubric-generation|Mendonça et al., 2026]]).
- **Validade e qualidade:** a [[ai-feedback-quality|qualidade]] e a [[assessment-validity|validade]] dos itens e do feedback formativos gerados por IA precisam ser avaliadas; a [[ai-ed-evaluation|avaliação de IA na educação]] fornece os métodos.

- **A correção por IA acrescenta uma ameaça à validade.** Como um corretor de IA pode recompensar características irrelevantes ao construto, como a fluência linguística, em vez do raciocínio científico, um white paper de Stanford/ETS destilado de um encontro de ~100 líderes argumenta que a avaliação deveria acumular evidência contínua e rica em contexto, em vez de certificar produtos de uma única vez ([[responsible-assessment-ai-era-stanford-2026|McGee et al. (2026)]]).
- **Mantenha a tarefa vulnerável e acrescente uma gêmea.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] argumentam que as redações para casa e os relatórios de pesquisa carregam valor formativo substancial e deveriam ser mantidos para a aprendizagem, combinados a uma segunda tarefa que avalia os mesmos resultados e fornece evidência somativa confiável.

## Risco: a avaliação como vigilância

Os sistemas de avaliação formativa podem passar de ferramentas de apoio à aprendizagem a infraestrutura de monitoramento de comportamento. Os mesmos fluxos de dados que habilitam a tutoria adaptativa podem habilitar o rastreamento punitivo se a [[governance|governança]] for fraca. Isso se conecta à [[privacy|privacidade]] e ao [[well-being|bem-estar dos estudantes]], e argumenta por sistemas de avaliação formativa que apoiam a aprendizagem, em vez de vigiá-la.

## Implicações para a IA na educação

- **Iguale o tipo de item à confiabilidade da IA:** use a IA para dimensões verificáveis (alinhamento conceitual, correção) e retenha o julgamento humano para as dimensões instrucionais (qualidade dos distratores, profundidade do feedback).
- **Desenhe para a realização, não apenas para a provisão:** o feedback de IA só ajuda quando os estudantes o selecionam, avaliam e aplicam — estruture fluxos de trabalho que apoiem a realização.
- **O desenho do feedback importa mais do que o volume:** o feedback sequenciado ou estruturado em excesso pode sair pela culatra; priorize o feedback que apoia a construção de sentido e a autonomia do estudante.
- **Mantenha os educadores no circuito:** os sistemas ancorados no currículo e com o educador no circuito melhoram a relevância e reduzem o ruído.
- **Avalie qualidade e validade:** avalie os itens e o feedback gerados por IA por qualidade, validade e [[equity-in-ai-education|equidade]], e não apenas por velocidade de geração.
- **Trate a avaliação formativa como uma filosofia, não como um conjunto de ferramentas.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] sintetizam a literatura mais ampla do ensino superior em um paradigma de "avaliação para a aprendizagem" que enquadra o [[feedback|feedback]] formativo, contínuo e individualizado como uma filosofia abrangente, e não como um mero conjunto de ferramentas — equilibrando propósitos formativos e [[summative-assessment|somativos]] e colocando em primeiro plano a [[agency|autonomia do estudante]], a autorregulação e a habilidade [[metacognition|metacognitiva]]. Eles identificam cinco práticas mutuamente reforçadoras ([[authentic-assessment|avaliação autêntica]], auto- e [[peer-assessment|avaliação entre pares]], reavaliação, [[mastery-learning|notação baseada em padrões]], desnotação) por meio das quais essa filosofia pode ser realizada, ao mesmo tempo que observam que sua adoção permanece altamente desigual entre os campos do ensino superior.

## Conceitos conectados

- [[pedagogical-patterns]] — As formas sequenciadas que a avaliação formativa assume quando a IA fornece parte do feedback
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — Avaliação somativa: formatos resistentes à IA (orais, supervisionados, provas de consulta fechada)

## Artigos conectados
- [[llm-multi-agent-conversation-assessment-2025]] — Uma arquitetura de quatro agentes para avaliação baseada em conversa cujo avaliador se abriga na categoria do meio (Hou et al. 2025)
- [[causal-modeling-competency-assessment-2026]] — Modelagem causal de intervenções de apoio para avaliação de competência do estudante
- [[nicola-richmond-programwide-assessment-genai-2025]] — Abordagens de todo o programa para redesenhar a avaliação na era da GenAI
- [[ai-feedback-enactment-workflow-2026]] — Fazendo o feedback gerado por IA importar: da provisão à realização
- [[care-full-feedback-genai]] — O ofício cuidadoso do feedback na era da GenAI
- [[feedback-futures-genai]] — Futuros do feedback: além dos limites das capacidades humanas e da GenAI
- [[sequenced-ai-feedback-learning]] — Impacto e caminhos do feedback de IA sequenciado
- [[learner-centered-feedback-ai]] — Aprimorando o feedback centrado no estudante com IA
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — Da correção automatizada ao diagnóstico de aprendizagem: um estudo de mecanismo da avaliação formativa apoiada por IA na escrita em inglês
- [[ai-internal-feedback-evaluative-judgments]] — Desenvolvendo julgamentos avaliativos por meio de feedback interno apoiado por IA
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: pontuação de avaliação formativa com prompting com humano no circuito
- [[automated-formative-assessments-a-level-sciences]] — Avaliação formativa automatizada de alta frequência
- [[ai-generated-feedback-higher-ed]] — Feedback gerado por IA no ensino superior
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: feedback de IA ancorado no currículo
- [[genai-teacher-feedback-comparison]] — Comparação entre feedback de GenAI e de professor
- [[chatgpt-feedback-engagement-genai]] — Feedback do ChatGPT e engajamento
- [[code-gen]] — CODE-GEN: geração validada de QMs
- [[responsible-assessment-ai-era-stanford-2026]] — Avaliação responsável na era da IA
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Desenhando para a avaliação autêntica
- [[automated-grading-linux-bash-examinations-large-language-models]] — Correção automatizada de exames de Linux/bash
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Papéis do instrutor e da IA na avaliação formativa aprimorada pelo ChatGPT
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsiderando as provas orais como avaliação autêntica e resistente à IA
- [[roe-assessment-twins-2026]] — Gêmeas de avaliação para fortalecer a validade da avaliação na era da GenAI (Roe, Perkins & Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: geração de rubricas de avaliação com IA
- [[ai-assisted-instructor-supervised-grading-feedback]] — Correção e feedback assistidos por IA e supervisionados pelo instrutor
- [[adaptive-scaffolding-cognitive-engagement-its]] — Andaimento ICAP adaptativo em um ITS (BKT versus DRL)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs como agentes de desenho pedagógico iterativo
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — A adaptatividade torna o feedback eficaz: evidência do feedback gerado por IA sobre planos de crianças
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Correção automatizada, desempenho de interpretação e aprendizagem autorregulada (Chen & Liu 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Habilidades diagnósticas dos professores na avaliação formativa apoiada por IA: do diagnóstico à metadiagnóstico
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — Utilidade percebida e intenção de uso do feedback gerado por LLM em programação ao longo de três níveis educacionais
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — Assistência de ensino adaptativa combinando IA generativa e analítica de big data na educação musical
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Uso de LLMs por estudantes e os limites da dificuldade de questões geradas por IA em cursos de ciência de dados

- **Continuous assessment reframes the formative record itself.** The AIM-CAI reference architecture (a position paper, not an implementation) proposes replacing episodic assessment as the primary evidence base with a six-layer infrastructure: evidence generation across platforms, serialization preserving source context, AI-mediated semantic translation, psychometric interpretation, longitudinal competency profiles, and federated governance. Its shift table spells out the change: per-assignment feedback becomes longitudinal feedback supporting advising and reflection; grades become evolving competency profiles; credentials become transparent development records. The governance layer is the paper's insistence — seven named tensions (interoperability vs. local autonomy, privacy vs. utility, learner agency vs. predictive automation, surveillance vs. support, etc.) each mapped to risks and responses, with the warning that ungoverned continuous inference privileges dominant cultural norms. The novelty claim is integrative: the components exist; the contribution is the architecture and the governance map. ([[mcnamara-aim-cai-continuous-assessment-2026]])
- [[mcnamara-aim-cai-continuous-assessment-2026]] — AI-Mediated Continuous Assessment Infrastructure (AIM-CAI): Connecting Learning Evidence Across Contexts and Time (McNamara & Hasnine 2026)
- [[etq-ai-conversational-teacher-training-2026]] — Conversational AI diagnostic for teaching misconceptions with evidence-grounded dialogue (Miranda & Calvani 2026)
