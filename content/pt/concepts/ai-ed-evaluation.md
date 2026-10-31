---
title: Avaliação de IA na educação
created: "2026-05-29T10:44:35-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [agentic-ai, teacher-role]
technology: [generative-ai, human-in-the-loop-ai, llm]
assessment: [assessment, assessment-validity, educational-measurement, formative-assessment]
audience: [researchers, instructors, administrators]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods, reporting-interpreting-aied-research]
confidence: high
methods: [benchmark]
translation_of: concepts/ai-ed-evaluation
source_updated: "2026-10-26T11:40:00-04:00"
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

> **Avaliação de IA na educação** — o conjunto de métodos, benchmarks e critérios usados para avaliar se as ferramentas de [[ai-education|IA na educação]] (tutores baseados em [[llm|LLM]], [[automated-assessment|corretores automatizados]], sistemas de feedback, agentes) realmente funcionam — não apenas em acurácia agregada, mas em confiabilidade, qualidade [[pedagogy|pedagógica]], validade e impacto real na aprendizagem. Um tema recorrente nas pesquisas da base de conhecimento é que a avaliação precisa ser específica do domínio, sensível à confiabilidade e ancorada no julgamento humano e nos resultados educacionais, em vez de números únicos de acurácia agregada.

## Perguntas para refletir

- Como você decidiria se uma ferramenta de tutoria com IA "funciona"? Que evidência — além de um número de acurácia agregada — convenceria você de que ela realmente melhora a aprendizagem?
- Um achado central é que confiabilidade não garante validade: um sistema pode ser altamente consistente e ainda assim julgar mal o que constitui um bom ensino. Por que uma IA estável e repetível ainda poderia estar errada?
- A avaliação precisa ser específica do domínio — um benchmark que funciona para uma disciplina pode induzir ao erro em outra. Quando você vê um resultado de benchmark brilhante para uma ferramenta de IA, o que você gostaria de verificar sobre o contexto?
- O "ground truth" contra o qual os sistemas são julgados muitas vezes é contestado — o que conta como resposta ou nota correta varia entre especialistas e disciplinas. Como essa incerteza complica a confiança em qualquer avaliação?
- A pesquisa mostra que avaliadores baseados em LLM de texto privilegiam comportamentos explicitamente verbalizados e subponderam o contexto implícito — um "viés de pista explícita". Que tipos de bom ensino uma máquina poderia sistematicamente deixar passar por só procurar o óbvio?
- A avaliação moderna também pesa o custo ambiental e de infraestrutura — energia, hardware — e não apenas a qualidade da saída. A [[sustainability|sustentabilidade]] deveria entrar no seu julgamento do valor de uma ferramenta de IA?

## Introdução

A avaliação de IA na educação abrange vários objetos distintos de avaliação. Ela pode avaliar a **saída** (a resposta, a nota ou o feedback da IA está correto e é confiável?), o **processo** (a ferramenta apoia uma avaliação e uma aprendizagem válidas e defensáveis?) e o **agente** (um tutor ou agente de IA ensina de forma eficaz e se comporta de maneira apropriada?). Cada um exige métodos diferentes e levanta questões de validade diferentes.

A trajetória de uma década do campo é, por si só, um enquadramento: [[xiong-ai-educational-measurement-review-2026|Xiong e Li (2026)]] traçam três eras — Formativa (2015–2018), de Expansão (2019–2022) e Generativa (2023–presente) — ao longo de 313 artigos, e argumentam que os construtos e os argumentos de validade precisam ser reescritos para a [[human-ai-collaboration|colaboração humano–IA]], já que os modelos de [[item-response-theory|TRI]] e da Teoria Clássica dos Testes foram construídos sobre o desempenho humano sem assistência.

### Como a avaliação de IA na educação aparece na pesquisa

- **Confiabilidade da saída e ground truth:** [[ground-truth-reliability-aied|Modernizando o ground truth]] argumenta que os problemas de confiabilidade na avaliação de IA na educação muitas vezes remontam aos próprios dados de referência — os rótulos de "ground truth" contra os quais os sistemas são julgados — e propõe quatro mudanças para melhorar a confiabilidade e a validade. [[calibrating-trustworthiness-llm-education-2026|Calibrando a confiabilidade]] co-desenha métricas de avaliação e visualizações com as partes interessadas, para que a confiança em uma ferramenta de IA repouse sobre evidência demonstrada e interpretável.

- **Correção e pontuação automatizadas:** a [[cong-confidence-asag-2026|correção de respostas curtas com LLM]], o [[cong-confidence-asag-2026|ASAG com consciência de confiança]], a [[cotal-formative-assessment-scoring-2026|engenharia de prompt CoTAL com humano no circuito]] e o [[llm-cognitive-diagnosis-handwritten-math|diagnóstico cognitivo de matemática manuscrita]] mostram que os LLMs conseguem corrigir e diagnosticar, mas que a confiabilidade depende da [[human-in-the-loop-ai|supervisão humana]], do ancoramento em domínio específico e da calibração de confiança, e não do tamanho bruto do modelo.
- **Um benchmark para o conhecimento pedagógico em vez do conteúdo.** [[cdpk-pedagogy-benchmark-llms|Lelièvre et al. (2025)]] pontuam 97 modelos em itens de provas de professores chilenos (CDPK 28–89%), muitos superando uma linha de base humana estimada em ~50%, embora os itens estáticos de múltipla escolha não consigam testar o planejamento de aula nem o andaimento passo a passo.
- **Reconhecimento não é geração.** No TutorCaseBench, o melhor de 11 modelos escolheu uma estratégia documentada em 63,0% dos itens de quatro opções, mas satisfez uma intervenção documentada em apenas 55,8% dos casos de resposta livre, de modo que as pontuações de seleção de estratégia superestimam a prontidão do tutor ([[tutor-case-bench-challenging-behaviors-2026|Park et al. (2026)]]).

- **Validando itens gerados contra um benchmark psicométrico.** [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] geraram provas sob medida para 71 turmas e usaram outras 20 como benchmark contra itens de AP Statistics escritos por humanos, ajustando um modelo de [[item-response-theory|TRI]] 2PL bayesiano hierárquico com âncoras de pré-teste ao longo de 1.686 estudantes; os itens de IA eram mais fáceis, mas mais discriminantes (ᾱ = 1,3 vs. 1,2).

- **Qualidade pedagógica e alinhamento:** [[machines-misread-pedagogical-quality|Por que as máquinas interpretam mal a qualidade pedagógica]] documenta o desalinhamento entre humanos e máquinas ao julgar o que torna uma instrução boa, e [[tutoring-effectiveness-index|o Índice de Efetividade da Tutoria]] prevê a qualidade do tutor a partir do comportamento de ensino. [[responsible-assessment-ai-era-stanford-2026|Avaliação responsável na era da IA]] e [[authentic-products-authenticated-processes-2026|processos autenticados]] argumentam que a avaliação precisa ir além das respostas corretas, até a questão de saber se a avaliação permanece autêntica, válida e defensável quando a IA consegue produzir os "produtos" da aprendizagem.
- **Monitoramento de produção e calibração de juízes:** [[llm-judge-evaluation-educational-ai-2026|Rohlfs et al. (2026)]] relatam o que acontece quando a avaliação com LLM como juiz roda em escala de produto, apoiando-se em uma suíte K-12 que atende milhões de mensagens de professores e estudantes por mês. À medida que o programa amadureceu, os falsos positivos passaram a dominar os sinalizadores dos avaliadores e desviaram a atenção dos analistas de falhas que mereciam mudança de produto. Três mudanças — painéis de reprovação unânime com execuções repetidas do juiz, escolhas de modelo de juiz por avaliador e rubricas suavizadas — cortaram os falsos positivos confirmados em 99% e elevaram a precisão por sinalizador de 0,6% para 49% ao longo de 21 avaliadores implantados, enquanto um conjunto de falhas graves manteve a captura em 100%. A lição para a prática de avaliação é que o ponto de operação de um avaliador, e não sua acurácia agregada, decide se um sinalizador é acionável.
- **A diversidade de juízes como protocolo de validade.** Um benchmark para agentes de desenho instrucional extraiu seus juízes de diferentes fornecedores de modelos, e não de um só, relatando alta confiabilidade inter-juízes ao longo de 1.017 cenários pontuados ([[jeon-isd-agent-bench-2026|Jeon et al. (2026)]]).

- **Audite uma explicação contra a atribuição que ela alega, não contra a fluência.** [[distilling-self-explaining-lm-learning-analytics-2026|Pan et al. (2026)]] condicionam as narrações de um modelo ao fechamento aritmético, às covariáveis citadas, à fidelidade da decisão e à taxa de tratamento inseguro, porque um texto fluente é igualmente bem-formado quer seu sinal seja exato ou ruidoso — 98,8% das narrações passaram, enquanto a cauda negativa foi truncada.

- **A sensibilidade ao prompt é uma propriedade de primeira ordem de um corretor com LLM.** [[llm-graders-computer-science-exams-2026|Habibullah et al. (2026)]] corrigiram uma prova de [[cs-education|visão computacional]] com 570 estudantes ao longo de 171 configurações e uma prova de aprendizagem de máquina com 1.038 estudantes ao longo de 162: um pequeno preâmbulo de "corretor estrito" tirou 14 de 17 modelos de pesos abertos da faixa de correção, enquanto a replicação reproduziu a vulnerabilidade, mas não sua direção, melhorando sete modelos cujos prompts neutros superavaliavam. A acurácia de um prompt não é evidência de um corretor utilizável, e o viés com sinal deve figurar ao lado do erro absoluto médio; o ajuste fino com LoRA sobre exemplos de dupla correção agrupados levou cinco modelos pequenos à paridade com humanos e quase apagou a sensibilidade à persona.

- **A evidência classificável é uma variável de desenho, não uma propriedade da tarefa.** [[durable-skills-measurement-ai-teammates-2026|Globerson et al. (2026)]] deixaram um LLM Executivo segurar a rubrica e conduzir a conversa em direção à competência avaliada, elevando a evidência classificável a 92,4% para gestão de projetos e 85% para resolução de conflitos, enquanto pedir aos participantes que atentassem à competência não mudou nada.

### Por que a avaliação é difícil na educação com IA

A avaliação de IA na educação é difícil por várias razões. Primeiro, **a confiabilidade não basta** — um sistema pode concordar com uma rubrica e ainda assim julgar mal a pedagogia, como mostra a [[machines-misread-pedagogical-quality|pesquisa sobre alinhamento humano–máquina]]. Segundo, **o ground truth é contestado** — o que conta como resposta, nota ou movimento de ensino "correto" é, ele mesmo, um julgamento que varia entre disciplinas e especialistas, segundo a [[ground-truth-reliability-aied|modernização do ground truth]]. Terceiro, **a validade educacional é multidimensional** — [[assessment-validity|validade da avaliação]], [[formative-assessment|avaliação formativa]] e [[authentic-assessment|avaliação autêntica]] impõem, cada uma, critérios diferentes que uma única métrica de acurácia não consegue capturar. Por fim, **o alvo não para de se mover** — a IA agêntica e os modelos [[multimodal|multimodais]] exigem frameworks de avaliação ([[agentic-ai|IA agêntica]], [[tool-invariant-framework-agentic-ai|avaliação invariante a ferramentas]]) em vez da reutilização de benchmarks de modelos de texto. Os achados de avaliação também estão sujeitos às mesmas limitações transversais que afetam toda a pesquisa em AIED — envelhecem à medida que a IA melhora, dependem de reprodutibilidade e de práticas FAIR, e podem repousar sobre sistemas proprietários —, portanto os resultados de avaliação devem ser lidos com as ressalvas de [[limitations-in-aied-research|limitações da pesquisa em AIED]]. Uma dimensão emergente adicional é a **sustentabilidade de recursos**: implantações locais relatam cada vez mais consumo de energia e requisitos de hardware (por exemplo, VRAM, mWh por consulta) ao lado da acurácia — ver [[shen-sustainable-ai-knowledge-base-cs-education-2026|assistentes locais sustentáveis de base de conhecimento]] —, de modo que uma avaliação completa pesa o custo ambiental e de infraestrutura, e não apenas a qualidade da saída.

**A confiabilidade não garante validade.** A [[melo-llm-classroom-observation-teach-2026|validação da observação de sala de aula baseada em LLM]] mostra que um modelo pode ser altamente estável ao longo de avaliações repetidas e ainda assim se desalinhar do julgamento de especialistas, e, inversamente, que os modelos que se alinham bem aos especialistas muitas vezes são mais variáveis — confiabilidade e acurácia se dissociam, de modo que um número único de acuráia em passagem única pode superestimar a confiabilidade. O mesmo estudo documenta um **viés de pista explícita**: avaliadores baseados em LLM de texto privilegiam comportamentos explicitamente verbalizados e subponderam a evidência implícita ou contextual (por exemplo, a [[self-regulated-learning|autorregulação]] sustentada do estudante, onde uma rubrica permite notas altas em critérios tolerantes à ausência), produzindo discordância sistemática, e não aleatória. Isso ressalta que a confiabilidade da mensuração é um pré-requisito para — e não um substituto de — uma interpretação válida, e que a avaliação precisa incluir verificações de estabilidade com medidas repetidas ao lado da acurácia ancorada em especialistas.

Mesmo um modelo validado de discurso de longo horizonte rastreia medidas de resultado independentes apenas fracamente: os escores de Raciocínio do Estudante e de Adoção pelo Professor do NSPA se correlacionaram com modelos de valor agregado de efetividade docente a ρ = 0,10, portanto construtos automatizados precisam de validação externa contra resultados antes de informar a avaliação ([[nspa-neuro-symbolic-pedagogical-alignment-2026|Fang e Liu, 2026]]).

A avaliação de estudantes simulados enfrenta o mesmo padrão: um simulador só é válido se seu comportamento for fiel de forma *epistêmica*, e não meramente fluente, de modo que ele deve ser pontuado contra seu objetivo comportamental declarado e seu ambiente, e não contra uma "humanidade" genérica — e juízes automatizados coincidem com as preferências de humanos especialistas cerca de 65% das vezes ([[valid-student-simulation-llm-2026|Yuan et al. (2026)]]).

**A acurácia agregada esconde quem é mal atendido.** As [[drawedumath-vlm-struggling-students-2026|avaliações de modelos visão-linguagem no DrawEduMath]] mostram que a acurácia geral obscurece uma fraqueza sistemática: os modelos têm desempenho pior exatamente sobre o trabalho dos estudantes que mais precisa de ajuda pedagógica (trabalho errôneo, de estudantes com dificuldades), de modo que desagregar a avaliação por proficiência do estudante e por status de erro é necessário para não superestimar a capacidade e não ampliar as lacunas de desempenho.

**A correção binária esconde as falhas que importam.** Em um benchmark de diagnóstico de passo com três categorias sobre 10.836 pares simulados, sete tutores com LLM classificaram os passos ótimos quase perfeitamente (F1 94–99%), mas as alternativas válidas ficaram em F1 0–76% e os passos incorretos em 4–55% — excesso de rejeição e excesso de validação —, e o diagnóstico preciso ainda não produziu feedback acionável ([[yasir-llm-tutoring-agents-2026|Yasir et al. (2026)]]).

- **Controles de perturbação mostram qual evidência um modelo de fato usa.** No VIRA-Bench, o melhor de 11 modelos respondeu 61,3% das perguntas sobre vídeos de tutoria contra uma referência especialista de 91,0%, e remover o vídeo versus embaralhar sua ordem degradou camadas diferentes de perguntas — um diagnóstico mais barato do que outra pontuação agregada ([[vira-bench-pedagogical-contingency-tutoring-videos-2026|Wang et al. (2026)]]).

- **Reutilizar instrumentos humanos para avaliar LLMs exige uma verificação da estrutura latente.** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]] ajustaram análise fatorial exploratória separadamente para humanos e para seis LLMs multimodais: a congruência LLM–humano ficou abaixo da linha de base humano–humano nos dois instrumentos, e a análise paralela reteve contagens de fatores diferentes (cinco para humanos contra quatro para LLMs).

- **A avaliação conjunta revela compensações que um único escore esconde.** [[elbench-education-llm-benchmark-2026|Jiang et al. (2026)]] pontuam nove modelos voltados à educação em capacidade, segurança, educação básica e cultivo de alto nível sob um único protocolo: os seis primeiros são estatisticamente indistinguíveis no geral, mas diferem em 19,5 pontos em Segurança, e a Segurança é fortemente anticorrelacionada com Educação Básica (r = −0,83).
- **A assimetria de classes pode tornar uma métrica de avaliação enganosa.** [[reflection-level-classification-hungarian-essays-2026|Csibi e colegas (2026)]] classificaram o nível de reflexão em 1.954 redações de formação docente húngaras nas quais 68% estavam em um único nível: uma configuração rasa alcançou ROC-AUC 0,7131 com apenas 0,5162 de acurácia, e o balanceamento de classes reduziu todas as métricas (0,6672 de acurácia sem balanceamento contra 0,6408 com ele). Os modelos rasos deram os melhores escores agregados, enquanto os transformers lidaram melhor com os níveis minoritários, portanto o número relatado deve acompanhar o desempenho do qual uma decisão realmente depende.
- **Erros de benchmark e de corretor são confundidos com falha do modelo.** Uma recorreção por especialistas de seis benchmarks amplamente usados de [[physics-education|física]] auditou 250 itens rejeitados e atribuiu 143 (57,20%) a defeitos do benchmark e 95 (38,00%) a erros de corretor, restando apenas 12 (4,80%) de erros genuínos do modelo, de modo que 95,20% da lacuna medida não era atribuível ao modelo. Reparar os itens moveu a média HLE-Physics mean@4 de 47,28% para 78,66% e a CritPt mean@5 de 32,29% para uma corrigida de 87,50%, convertendo uma aparente fraqueza de modelo de fronteira em quase saturação. A auditoria argumenta que um escore relatado é uma propriedade conjunta do modelo, do banco de itens e do corretor, e que a adjudicação por especialistas deve preceder qualquer afirmação de capacidade extraída de um benchmark. ([[frontier-models-physics-benchmark-audit-2026]])

A velocidade dos sistemas avaliados é uma restrição adicional. [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] descrevem diretamente o problema temporal: quando um ensaio de larga escala foi desenhado, aplicado, analisado e publicado, a tecnologia estudada pode já ter mudado materialmente, o que empurra a prática para dados observacionais ou de uso, mais fracos, exatamente no momento em que uma evidência mais forte é necessária. A resposta deles não é aceitar desenhos mais fracos, e sim encurtar o ciclo — microensaios randomizados conduzidos por praticantes que preservam o contraste causal e o repetem à medida que a plataforma evolui.


- **A fidelidade dos dados é um problema de avaliação distinto da qualidade da saída.** Coortes educacionais sintéticas que reproduzem as estatísticas resumidas de cada variável ainda podem deturpar a estrutura dos dados: um grafo semanal de proximidade entre estudantes variou de 2,6 a 4,9 vezes menos ao longo de um período letivo nas versões sintéticas do que nas coortes reais, de modo que um escore de fidelidade não prevê quais análises sobrevivem aos dados reais ([[synthetic-educational-data-structural-fidelity-2026|Inoue e Yasutake, 2026)]]).

- **A acurácia dentro da distribuição não é implantabilidade.** Um classificador de nível de Bloom com macro F1 de 0,88 sobre seu banco de itens curado caiu para 0,48 e 0,20 em dois conjuntos de questões geradas por IA, uma perda que acompanhou a quase ausência de verbos de gatilho de Bloom explícitos, e não o tamanho do modelo; [[llm|LLMs]] não treinados foram a opção mais robusta fora da distribuição (0,79 e 0,41–0,51), e o retreinamento com dados rotulados fora da distribuição recuperou os maiores ganhos (até 0,82), portanto a transferência deve figurar no relatório ao lado do ajuste dentro da distribuição ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026)]]).

- **Uma escala de dificuldade de IA é um auxiliar de avaliação, não uma nota.** As estimativas de dificuldade da IA acompanharam fortemente a taxa de aprovação no nível do problema (rho = −0,871 ao longo de 79 problemas), mas enfraqueceram para −0,552 em uma amostra de 106 problemas de CS101 e se aproximaram de zero no nível da prova, portanto tais escalas pertencem à revisão de itens, e não à avaliação de estudantes ([[llm-difficulty-calibration-programming-exams-2026|Yan et al., 2026)]]).

### Conexões com conceitos relacionados

A avaliação de IA na educação está no centro dos métodos e dos riscos da base de conhecimento. Ela operacionaliza [[assessment-validity|validade da avaliação]], [[educational-measurement|mensuração educacional]] e [[benchmark|benchmark]] dentro da [[assessment|avaliação]] e da [[automated-assessment|avaliação automatizada]]. Sua defesa da supervisão humana se conecta à [[human-in-the-loop-ai|IA com humano no circuito]] e ao [[teacher-role|papel docente]], enquanto seu foco na confiabilidade se conecta ao [[hallucination-risk|risco de alucinação]], à [[automated-assessment|avaliação de IA com consciência de confiança]] e à [[trust-calibration|calibração da confiança]]. A distinção entre avaliar desempenho e avaliar aprendizagem se liga à [[genai-performance-vs-learning|desempenho vs. aprendizagem]] e à [[student-modeling|modelagem do estudante]]; e a avaliação de agentes pedagógicos se conecta à [[intelligent-tutoring|tutoria inteligente]], ao [[llm-training-and-fine-tuning|treinamento e ajuste fino de LLMs]] e à [[pedagogical-safety|segurança pedagógica]].

### Avaliação de ganhos de aprendizagem

Um objeto central da avaliação de IA na educação é o **ganho de aprendizagem** — a melhoria mensurável em conhecimento ou habilidade que uma ferramenta de IA produz (ver [[learning-gains|ganhos de aprendizagem]]). Avaliar ganhos de forma rigorosa exige escolher a medida de resultado correta, porque [[genai-performance-vs-learning|desempenho e aprendizagem divergem]]: a IA pode inflar o desempenho imediato em tarefas assistidas por IA deixando a aprendizagem durável e sem assistência inalterada ou reduzida (ver [[generative-ai-reduced-study-time-math|redução do tempo de estudo em matemática]], [[stromberg-generative-ai-learning-penalty-secondary-2026|penalidade de aprendizagem com IA generativa no ensino médio]]). A avaliação eficaz de ganhos, portanto:

- **Usa medidas de resultado sem assistência e resistentes à IA.** A [[generative-ai-guardrails-harm-learning|evidência de salvaguardas]] e a [[summative-assessment|pesquisa sobre avaliação somativa]] mostram que medidas proctoradas, de livro fechado e sem assistência — e não lição de casa ou trabalho para casa assistidos por IA — revelam os [[learning-gains|ganhos de aprendizagem]] genuínos.
- **Distingue desempenho assistido de aprendizagem durável.** A [[genai-meta-analysis-programming-learning|meta-análise]] mostra que a IA pode produzir grandes ganhos de produtividade sem ganho significativo de aprendizagem (g ≈ 0), portanto as avaliações devem relatar ambos.
- **A geração da tecnologia pode não importar, e faltam dados de custo.** [[burneo-can-edtech-close-learning-gaps-2026|Burneo et al. (2026)]] agrupam 14 ensaios randomizados em um ganho médio de aprendizagem de 0,125 dp, com a IA generativa não mostrando vantagem sobre softwares adaptativos anteriores (0,022 dp, SE 0,075) e custos por estudante comparáveis relatados em apenas dois ou três estudos.
- **Combina medidas pré/pós com verificações de validade.** [[assessment-validity|Validade da avaliação]] e [[educational-measurement|mensuração educacional]] fundamentam a mensuração do ganho; a [[genai-educational-outcomes-meta-analysis|revisão meta-analítica]] agrupa tamanhos de efeito entre estudos para estabelecer a evidência de ganhos do campo.
- **Desagrega por estudante e contexto.** Como os [[learning-gains|ganhos de aprendizagem]] variam por população, domínio e configuração de IA, a avaliação deve relatar ganhos para diferentes subgrupos de estudantes (por exemplo, por proficiência prévia, como revelam as [[drawedumath-vlm-struggling-students-2026|avaliações de VLM]] para o status de erro) em vez de um único agregado, e deve conectar os achados de ganho à [[meta-analysis-systematic-review|meta-análise e revisão sistemática]] para situá-los na base de evidências mais ampla.

Benchmarks condicionados ao contexto são necessários: [[zhang-tutormoments-2026|Zhang et al. (2026)]] argumentam que benchmarks anteriores de tutoria (MathTutorBench, MRBench, LearnLM) recompensam um lado do dilema da assistência ou dão orientações subespecificadas. O TutorMoments, em vez disso, reproduz pontos de decisão pedagógica identificados pelos professores, avaliando se a ajuda do tutor é apropriada ao momento específico de aprendizagem — [[scaffolding|andaimento]] vs. rigor.
- **A métrica que você escolhe pode reverter suas conclusões.** [[zhang-platform-scores-miss-ai-teaching-agents-2026|Zhang et al. (2026)]], ao avaliar agentes de ensino com IA na [[medical-education|educação médica]], constataram que os escores agregados não divulgados de uma [[edtech-platform|plataforma educacional]] ordenavam os agentes quase de forma oposta a uma rubrica transparente e validada por especialistas de qualidade de ensino em 8 dimensões (acurácia de conhecimento médico, orientação pedagógica, cobertura de conhecimento, qualidade do role-play, dificuldade adaptativa, segurança médica, engajamento, feedback). Os escores da plataforma indexam o desempenho do estudante; a rubrica indexa o comportamento de ensino do agente — escolher a métrica errada determina quais agentes são adotados ou refinados. Eles também constataram que a leniência do LLM como avaliador difere por modelo (alguns lenientes demais para discriminar), portanto a pontuação automatizada precisa de calibração humana e é mais confiável nas dimensões de processo cognitivo.
- **Uma taxa de erro pode esconder a falha que ela deveria capturar.** [[ai-mediated-input-medical-english-asr-2026|Stanchev (2026)]] enviou uma gravação texto-para-fala de uma passagem de inglês médico para quatro serviços de [[speech-and-voice-technologies|ASR]]: os dois serviços gratuitos retornaram 87,96% e 88,34% da referência, enquanto os dois pagos retornaram prévias de 32,76% e 55,35% e, por isso, pontuaram taxas de erro por palavra de 73,21% e 48,77%. As taxas altas de erro vieram de tokens nunca retornados, e não de tokens mal ouvidos, de modo que ordenar apenas pela taxa de erro tratou uma restrição de exportação como uma falha de transcrição. A cobertura deve figurar ao lado da taxa de erro sempre que uma métrica automatizada substitui o artefato que o estudante vê.
- **Um mapa bibliométrico pode expor o que uma cultura de avaliação recompensa.** Ao longo de 1.403 publicações de educação médica, os trabalhos mais citados mediam a capacidade do modelo — sobretudo o desempenho do ChatGPT em exames de licenciamento —, enquanto a pesquisa em [[governance|governança]] ficava atrás, de modo que os autores pedem avaliação empírica de frameworks de governança em vez de mais testes de capacidade ([[sriram-ethical-ai-medical-education-bibliometric-2026|Sriram et al. (2026)]]).
- **Ancore as suítes de avaliação à aprendizagem medida, não a proxies.** Benchmarks de capacidade de ensino, rubricas de pedagogia conversacional e latência do tutor devem ser validados contra ganhos de aprendizagem reais em vez de tratados como substitutos deles, e a latência é ela mesma um eixo de avaliação porque molda se os estudantes se engajam de algum modo ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).
- **Avaliações baseadas em julgamento de especialistas precisam de sua própria contabilidade de confiabilidade.** [[bespoke-industry-personalized-lecture-videos-2026|Puech et al. (2026)]] pediram a 25 especialistas do domínio que avaliassem 92 [[video-education|vídeos de aula]] gerados contra uma rubrica ancorada na "qualidade de uma aula padrão de MOOC", julgando 87% no nível ou acima da barra (média 3,42 de 5). Cada vídeo foi avaliado uma vez por um único avaliador (k = 1), portanto o desenho distribui o painel pelo corpus ao custo de uma estatística de concordância interavaliadores; um modelo de interceptores aleatórios atribuiu cerca de 35% da variância residual ao avaliador (ICC = 0,35), e o artigo relata intervalos agrupados por avaliador em vez de um único valor de precisão. Uma avaliação construída sobre julgamento de especialistas é tão forte quanto a análise de confiabilidade que publica.

## Ideias equivocadas comuns

- **"Pontuações altas em exames de professor significam que o modelo é pedagogicamente competente."** **97 modelos** foram pontuados em itens de exames de professores chilenos (**CDPK 28-89%**), com muitos superando uma linha de base humana estimada em **~50%** — e ainda assim os **itens estáticos de múltipla escolha não conseguem** testar o julgamento em ato. Ir bem no exame está limitado pelo que o exame mede.
- **"O critério de pontuação é uma tecnicalidade."** A correspondência estrita pontuou os mesmos 2.250 diálogos de tutoria em **42,1%**, onde um juiz-LLM calibrado por humanos pontuou **81,3%** ([[misconcept-dialogue-llm-math-tutoring-2026|Lee et al., 2026]]) — o critério move o número mais do que o modelo do tutor, a estratégia ou o pipeline.
- **"Reconhecimento e geração são capacidades comparáveis."** **Reconhecimento não é geração.** No TutorCaseBench, o melhor de **11 modelos** escolheu uma estratégia documentada em **63,0% dos itens de quatro opções**, mas satisfez um critério de implementação documentado com muito menos frequência. Selecionar a resposta certa entre quatro e produzi-la são tarefas diferentes.
- **"Pontuações de modelo são significativas sem um instrumento validado."** Exames sob medida para o curso foram gerados para **71 turmas** e comparados com itens de AP Statistics escritos por humanos por meio de um modelo **2PL hierárquico bayesiano** — o instrumento foi ajustado antes de as pontuações serem interpretadas.

## Conceitos conectados

- [[interpreting-and-applying-aied-research]]
- [[ai-assisted-educational-research]] — Investigação educacional assistida por IA
- [[assessment-validity]] — Validade da interpretação na avaliação de IA na educação
- [[educational-measurement]] — Teoria da mensuração para avaliar a aprendizagem
- [[psychometrically-aware-ai]] — Aplicação da psicometria à avaliação baseada em IA
- [[benchmark]] — Benchmarks padronizados para avaliar sistemas de IA
- [[automated-assessment]] — Sistemas de correção e pontuação baseados em IA
- [[learning-analytics]] — Análise de dados do comportamento de aprendizagem
- [[research-methods-aied]] — Métodos de pesquisa em IA na educação
- [[learning-gains]] — Mensuração dos ganhos de aprendizagem com ferramentas de IA
- [[formative-assessment]] — Avaliação contínua para orientar a instrução
- [[summative-assessment]] — Avaliação somativa: formatos resistentes à IA (orais, proctorados, de livro fechado)
- [[authentic-assessment]] — Avaliação de desempenho real e transferível
- [[human-in-the-loop-ai]] — Supervisão humana da avaliação com IA
- [[trust-calibration]] — Calibração da confiança em sistemas de IA
- [[hallucination-risk]] — Risco de conteúdo fabricado nas saídas da IA
- [[intelligent-tutoring]] — Avaliação de sistemas de tutoria com IA
- [[agentic-ai]] — Avaliação do comportamento de agentes de IA autônomos

## Artigos conectados
- [[tutor-case-bench-challenging-behaviors-2026]] — TutorCaseBench: avaliando tutores de LLM com estudantes de comportamentos desafiadores (Park et al. 2026)
- [[vira-bench-pedagogical-contingency-tutoring-videos-2026]] — VIRA-Bench: diagnosticando a compreensão da contingência pedagógica em vídeos de tutoria on-line
- [[zhang-platform-scores-miss-ai-teaching-agents-2026]] — O que os escores de plataforma deixam passar: avaliação multidimensional de agentes de ensino com IA
- [[assessment-latent-structure-human-llm-2026]] — Os instrumentos de avaliação medem a mesma coisa para humanos e para LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Avaliação da qualidade de provas geradas por IA: um estudo de campo em larga escala
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Alinhamento pedagógico neuro-simbólico (NSPA)
- [[yasir-llm-tutoring-agents-2026]] — Benchmark de classificação em três categorias de agentes de tutoria com LLM (Yasir et al. 2026)
- [[drawedumath-vlm-struggling-students-2026]] — Avaliação de VLMs no DrawEduMath: o conteúdo de erro é o mais difícil (Lucy et al. 2026)
- [[cdpk-pedagogy-benchmark-llms]] — Benchmark do conhecimento pedagógico de LLMs (CDPK + SEND)
- [[melo-llm-classroom-observation-teach-2026]] — Validação da observação de sala de aula com LLM: confiabilidade vs. acurácia (Melo et al. 2026)
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Assistentes locais de base de conhecimento OER com IA: avaliação multidimensional
- [[ground-truth-reliability-aied]] — Modernizando o ground truth: quatro mudanças para melhorar a confiabilidade e a validade
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrando a confiabilidade: codesenhando métricas e visualizações
- [[teachbench-llm-teaching-evaluation]] — TeachBench: avaliando a capacidade de ensino de LLMs
- [[machines-misread-pedagogical-quality]] — Por que as máquinas interpretam mal a qualidade pedagógica: alinhamento humano-máquina
- [[cong-confidence-asag-2026]] — Correção automática de respostas curtas com LLMs
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: engenharia de prompt com humano no circuito para avaliação formativa
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmark de LLMs para diagnosticar as habilidades cognitivas dos estudantes
- [[tutoring-effectiveness-index]] — O Índice de Efetividade da Tutoria: prevendo a qualidade de tutores de matemática com LLM
- [[jeon-isd-agent-bench-2026]] — Benchmark de agentes de desenho instrucional
- [[tool-invariant-framework-agentic-ai]] — Um framework invariante a ferramentas para ensinar e avaliar métodos computacionais
- [[valid-student-simulation-llm-2026]] — Rumo a uma simulação válida de estudantes com grandes modelos de linguagem
- [[llm-difficulty-calibration-programming-exams-2026]] — De modelos avaliados a auxiliares de avaliação
- [[socratic-tests-conversational-assessment]] — O fundamento teórico dos testes socráticos
- [[responsible-assessment-ai-era-stanford-2026]] — Avaliação responsável na era da IA
- [[authentic-products-authenticated-processes-2026]] — De produtos autênticos a processos autenticados
- [[genai-educational-outcomes-meta-analysis]] — Meta-análise dos resultados educacionais da IA generativa
- [[zhang-tutormoments-2026]] — Quando a ajuda não ajuda: avaliando tutores de IA para a luta produtiva
- [[elbench-education-llm-benchmark-2026]] — ELBench: benchmark de LLMs para educação
- [[ai-grading-handwritten-physics-2026]] — Correção por IA de avaliações manuscritas de física (Olimpíada)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilando um LM autoexplicativo para analítica da aprendizagem
- [[burneo-can-edtech-close-learning-gaps-2026]] — Avaliação meta-analítica de EdTech adaptativa + IA
- [[xiong-ai-educational-measurement-review-2026]] — O papel da IA na correção, na psicometria e na avaliação
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Avaliando a tutoria com IA na velocidade da inovação: microensaios randomizados conduzidos por praticantes de uma plataforma de tutoria com IA em ciências do GCSE
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: avaliação da qualidade de itens de matemática baseada em processo
- [[durable-skills-measurement-ai-teammates-2026]] — Rumo a uma mensuração escalável de competências duráveis
- [[pivot-generative-video-tutors-stem-2026]] — Da geração de conteúdo ao apoio à aprendizagem: tutores de vídeo generativos orientados pela pedagogia para a aprendizagem em STEM
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutoria com IA e humana produzem ganhos de aprendizagem equivalentes no GRE
- [[synthetic-educational-data-structural-fidelity-2026]] — O que as métricas de fidelidade deixam passar: uma verificação estrutural dos dados educacionais sintéticos
- [[bloom-classifier-ai-assisted-questions-2026]] — Avaliação de modelos pré-treinados para a avaliação pedagógica de novas questões educacionais assistidas por IA
- [[llm-judge-evaluation-educational-ai-2026]] — Quando os avaliadores gritam lobo: lições da avaliação com LLM como juiz em produção na IA educacional
- [[sriram-ethical-ai-medical-education-bibliometric-2026]] — Um mapa bibliométrico pode expor o que uma cultura de avaliação recompensa
- [[misconcept-dialogue-llm-math-tutoring-2026]] — MisconceptDialogue: os critérios de avaliação moldam o sucesso medido na tutoria de matemática com LLM (Lee et al. 2026)
