---
title: Educação de graduação
created: "2026-11-15T00:10:00-05:00"
updated: "2026-11-15T06:35:59-05:00"
type: concept
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
assessment: [formative-assessment, assessment, learning-gains]
technology: [generative-ai, conversational-ai, intelligent-tutoring, llm]
level: [undergraduate, higher ed]
confidence: medium
translation_of: concepts/undergraduate-education
source_updated: "2026-11-15T06:35:59-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [scaffolding, help-seeking, feedback-literacy, self-regulated-learning, desirable-difficulties, process-oriented-assessment, self-report-measures, ai-detection, learning-analytics, student-support-and-success, equity-in-ai-education, writing-education, stem-education]
connected_articles: [guardrails-ai-teaching-assistants-programming-2026, genai-use-changing-institutional-policy-physics-2026, caeai-chatgpt-interdisciplinary-stem-nonstem-2026, li-who-benefits-llms-prompt-engineering-equity-2026, llm-math-homework-offloading-traces-2026, patrick-ai-higher-order-thinking-systematic-review-2025, genai-reliance-human-agency-collaborative-learning-2026, genai-cognitive-offloading-learner-agency-review-2026, ai-enabled-course-development-first-year-adjustment-2026, thulin-chatbot-mental-health-students-2026, torres-peralta-perceived-learning-engagement-homework-2026, kumar-chatgpt-academic-assignments-2025, zaripova-genai-self-regulation-neuroai-competence-2026]
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Síntese:** A educação de graduação é onde a IA encontra as maiores turmas e a [[assessment|avaliação]] mais padronizada: cursos introdutórios de primeiro e segundo ano em que um instrutor ensina várias centenas de estudantes segundo uma rubrica compartilhada. Os ensaios neste nível se dividem pelo design, não pelo modelo. Um tutor construído a partir da própria pedagogia de um curso superou a [[active-learning|aprendizagem ativa]] em sala de aula, enquanto um assistente de curso bem fundamentado, implantado sem integração instrucional, reduziu notas e participação. A evidência mais forte diz respeito a [[feedback]] em escala, a [[help-seeking|busca de ajuda]] com [[scaffolding|andaimes]], a material de estudo verificado e a contato ativo que move prazos administrativos; a mais fraca diz respeito a afirmações de que um assistente geral eleva o que os estudantes conseguem fazer sem auxílio.

## Perguntas para refletir

- Se um tutor eleva as notas das tarefas em dois pontos e meio, mas a prova não se move, o que o curso comprou?
- As notas caíram em um curso em que seis de cada sete estudantes nunca abriram o [[conversational-ai|chatbot]]. O que a mera disponibilidade mudou?
- O que é mais defensável em um curso de 600 estudantes: detectar envios escritos por IA, ou mudar o que o envio deve conter?
- O que um curso de primeiro ano pode supor sobre os hábitos de IA que os estudantes aprenderam no ensino médio?
- Quando a unidade de design é uma coorte de 900, e não um aprendiz, quais afirmações de [[personalized-learning|personalização]] sobrevivem?

## Introdução

A graduação é o conjunto de cursos do bacharelado: aulas expositivas, turmas, laboratórios e cursos de serviço, avaliados continuamente e somados em uma credencial. Os estudantes são adultos que escolhem seu próprio tempo de estudo, ensinados em coortes muito maiores que qualquer turma escolar. Ainda não são pesquisadores, e nenhum orientador é responsável por formar seu julgamento, o que separa essa faixa da pós-graduação.

A escala é a restrição definidora. Um curso introdutório de [[physics-education|física]], economia ou [[cs-education|programação]] pode matricular de várias centenas a alguns milhares de estudantes, com assistentes de ensino que corrigem, cada um, dezenas de redações ou demonstrações. O volume de feedback, a disponibilidade de ajuda e o custo de perceber um estudante em dificuldade são os problemas recorrentes de design. A pergunta que decide se a IA ajudou não é se o sistema produziu uma resposta, mas o que os estudantes ainda faziam quando ele produzia.

## O que a evidência neste nível mede

Os ensaios de graduação são fáceis de contar e difíceis de comparar. O desfecho costuma ser a nota de um curso, um teste escrito pelo instrutor ou uma rubrica aplicada a um artefato.

- **O efeito agregado é positivo e dependente da duração.** Trinta e cinco estudos experimentais e quase experimentais cobrindo 175 tamanhos de efeito produziram g = 0,53 para estudantes de graduação e g = 0,46 para [[learning-gains|desempenho acadêmico]] ([[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]]). O efeito acadêmico caiu de g = 5,07 para intervenções de quatro semanas ou menos para g = 0,01 além de doze semanas, contra heterogeneidade acima de 96%.

- **A [[educational-measurement|medição]] tardia é a exceção.** Um teste surpresa 45 dias após um curso de negócios de 120 estudantes é uma das poucas medidas de retenção aqui: estudantes assistidos por IA pontuaram 57,5% contra 68,5%, d = 0,68, tendo estudado 3,2 horas contra 5,8 ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]]).

- **O artefato avaliado é a unidade usual de evidência.** Isso importa para a [[assessment-validity|validade da avaliação]]: uma redação pontuada por rubrica ou uma suíte de testes aprovada pode melhorar enquanto a capacidade que o curso existe para construir não melhora.

## Tutoria e ajuda em grandes matrículas

O maior resultado positivo vem de um tutor construído a partir da própria pedagogia de um curso, não de um assistente geral.

- **Um tutor desenhado superou a própria aprendizagem ativa do curso.** No Physical Sciences 2 de Harvard, 194 estudantes encontraram as mesmas duas lições duas vezes, uma em sala de aula e outra com um tutor personalizado. A mediana do pós-teste foi 4,5 contra 3,5, o tempo na tarefa 49 minutos contra cerca de 60, e o efeito modelado 0,63 ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025]]). O tutor codificou sete práticas instrucionais e usou soluções escritas pelo instrutor.

- **A mesma tecnologia sem integração instrucional perdeu terreno.** Um assistente GPT-4o fundamentado no curso alcançou 2.379 estudantes em 30 [[teacher-role|instrutores]]. Em turmas do mesmo curso, as notas finais caíram 4,12 pontos (0,37 DP) e as participações registradas caíram cerca de 0,90 DP; 15% dos estudantes o usaram, por cerca de quatro sessões ([[liu-course-integrated-ai-tutoring-rct-2026]]). Estudantes de primeira geração perderam 0,50 DP contra 0,22 de seus pares.

- **Um chatbot de recuperação personalizado pode não produzir nada.** Em um curso de marketing de 454 estudantes randomizado dentro das turmas, nenhum efeito de grupo por tempo apareceu em interesse, [[self-efficacy|autoeficácia]], engajamento ou nota de teste. Os estudantes fizeram login 0,89 vez por semana e avaliaram o prazer em 80/100 ([[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]]).

- **O design de interação move os desfechos mais que a escolha do modelo.** O HelpCoach interveio apenas em perguntas vagas: 57,3% dos primeiros rascunhos faziam uma pergunta específica contra 40,5%, e a retenção uma semana depois foi 1,9 contra 0,3 de 6 ([[helpcoach-ai-help-seeking-scaffolding-2026]]).

## A lacuna entre a nota e a aprendizagem

Quatro designs separam a nota na tarefa apoiada do que os estudantes conseguiam fazer sem ajuda, e concordam na direção.

- **CS1: as notas dos exercícios subiram, o conhecimento conceitual não.** Em um curso de Java de 275 estudantes, usuários do [[generative-ai|ChatGPT]] pontuaram 71,84% no exercício contra 29,85% dos estudantes que usaram recursos web comuns, enquanto os ganhos de conhecimento pré-pós foram 0,71, 0,85 e 0,83 ponto, sem interação tempo por grupo ([[bassner-performance-learning-dissociation-ai-programming-2026]]).

- **Curso de demonstrações: os ganhos nas tarefas não chegaram à prova.** Em Carnegie Mellon, 153 estudantes que receberam um chatbot e uma interface de feedback de demonstrações pontuaram 2,56 pontos a mais nas tarefas. A prova seguinte, feita sem IA, não mostrou diferença significativa, e cada 100 mensagens adicionais ao chatbot foram associadas a 3,02 pontos a menos na prova seguinte ([[ai-proof-learning-cognitive-offloading-2026]]).

- **Feedback: revisões melhores, pós-teste estável.** Em um curso de economia de 354 estudantes, o feedback mediado por IA melhorou a qualidade das revisões em d = 0,50 entre 1.366 redações, e o pós-teste cego foi 0,59 contra 0,56 ([[lu-ai-mediated-feedback-feedbackwriter-rct-2026]]).

- **O padrão de uso decidiu se o ganho sobrevivia à remoção.** Um chatbot de prateleira elevou as notas de testes sem auxílio em 6,7 pontos (0,27 DP) entre 211 estudantes de Middlebury, e o ganho persistiu. Os 32% que o usaram para automatizar o trabalho ganharam 0,54 DP nas redações enquanto ele estava disponível e 0,02 DP quando ele foi retirado ([[contractor-learning-impact-generative-ai-2026]]).

O mecanismo usualmente oferecido é o [[cognitive-offloading|descarregamento cognitivo]]: a ferramenta executa o processo que a tarefa foi desenhada para elicitar. O que se segue é uma ordenação, não uma proibição — uma tentativa primeiro, ajuda depois, e um julgamento avaliado sem a ferramenta.

## O que os estudantes relatam sobre si mesmos

Os surveys neste nível perguntam aos estudantes o que eles ganharam, e suas respostas se alinham frouxamente com o que dizem ter feito. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] pesquisaram 1.477 respondentes em Sonora, México, incluindo 765 estudantes universitários. Seu índice de engajamento repousa em três comportamentos relatados — ler, modificar e acrescentar ideias próprias — e mal se moveu com uma única autoavaliação de aprendizagem de 0–10, com correlação agregada de 0,052. Os estudantes universitários usaram o ChatGPT mais que os do ensino médio e avaliaram sua aprendizagem apenas ligeiramente mais alta. Os autores leem o resultado como um alerta sobre a [[assessment-validity|validade da avaliação]], não como um veredicto sobre a aprendizagem, já que nenhum desfecho foi medido.

Quando os preditores também são autorrelatados, um modelo descreve mais um estado de espírito do que um mecanismo. [[kumar-chatgpt-academic-assignments-2025|Kumar et al. (2025)]] modelaram caminhos para o desempenho autorrelatado em tarefas de 304 estudantes de duas universidades em Karnataka. O letramento digital alcançou β = 0,393 e a utilidade percebida β = 0,259, enquanto a consciência ética não predisse desempenho (β = −0,006, p = 0,924). Desempenho, letramento e ética foram todos autoavaliados, de modo que o caminho mais forte diz que estudantes que se avaliam como digitalmente letrados também avaliam melhor seu trabalho. O nulo da ética continua sendo o resultado útil: os autores o leem como a ética moldando a conduta, não as notas, e recomendam avaliar diretamente a divulgação e a citação.

A comparação entre níveis faz o lado da graduação parecer desigual, em vez de uniformemente baixo. [[zaripova-genai-self-regulation-neuroai-competence-2026|Zaripova et al. (2026)]] compararam 381 estudantes de uma universidade técnica no Uzbequistão em uma subamostra balanceada de 302. Os estudantes de graduação tiveram média de 3,527 na escala de ética contra 4,627 dos de pós-graduação, com d = 1,47 para ética e autonomia acadêmica. A carga cognitiva percebida não diferiu por nível (p = 0,296). As distribuições carregam o ponto de design: os desvios padrão da pós-graduação em ética e autorregulação eram cerca de um terço dos valores da graduação, enquanto os graduandos atingiram o mínimo da escala. Uma coorte de primeiro ano, portanto, abriga estudantes que avaliam criticamente a saída ao lado de estudantes que relatam quase nada dessa disposição.

Lidos em conjunto, os surveys mostram o que o [[self-report-measures|autorrelato]] pode e não pode estabelecer. Eles estabelecem distribuição e autoconceito — quão dispersa é uma coorte, como os estudantes se avaliam — e não aprendizagem. A evidência de desempenho acima é o que separa os dois, do teste de retenção de 57,5% contra 68,5% ao ganho de 0,54 DP que desapareceu quando o chatbot foi removido. Ganhos autorrelatados e preditores autorrelatados, portanto, precisam da mesma cautela em direções opostas. Um ganho medido por autoavaliação pode ser competência ou confiança, e um preditor medido da mesma forma pode acompanhar o desfecho porque um único instrumento produziu ambos. O teste é se um design muda algo que o estudante faz: um rascunho revisado, uma fonte verificada, um uso divulgado.

## Escrita, feedback e integridade

A escrita é onde o uso de IA é mais visível e o contrato de avaliação mais fraco, porque um envio fluente não carrega nenhum traço do processo por trás dele.

- **O [[ai-feedback-quality|feedback de IA]] igualou os instrutores na redação e perdeu na relação.** Entre 312 escritores de primeiro ano, a qualidade da redação revisada subiu d = 0,60 com feedback de IA e d = 0,59 com feedback do instrutor, equivalentes dentro de uma margem pré-definida. A [[motivation|motivação intrínseca]] foi 4,90 contra 5,16, uma lacuna de d = 0,31 mediada pelo pertencimento percebido ([[liu-ai-generated-teacher-feedback-writing-motivation-rct-2026]]).

- **Requisitos de processo elevaram a adoção e mantiveram a qualidade intacta.** Em um curso de computação de primeiro ano com cerca de 570 estudantes, a adoção voluntária se manteve perto de dois terços até que um fluxo de rascunho antes da IA, com uma [[reflection|reflexão]] marcada e um formulário de divulgação, a elevou a 93%. O uso de IA não predisse a qualidade da redação quando a escrita prévia foi controlada ([[shakil-scaffolding-genai-ethical-essay-2026]]).

- **A saída da detecção funciona como triagem, não como julgamento.** O Argus pontuou seis ofertas de um curso CS2 de Purdue: H-score médio de 1,1 em 2020 contra 11,9 em 2026, e 45,7% de 584 estudantes foram sinalizados após revisão manual. Os estudantes sinalizados tiveram média de 61,9% em provas supervisionadas contra 73,5%, com mediana de 1,5 minuto de revisão da equipe por estudante ([[argus-academic-integrity-genai-2026]]).

- **O erro dos detectores desqualifica a adjudicação.** Sete detectores aplicados a 91 redações do TOEFL de escritores não nativos de inglês tiveram taxa média de falsos positivos de 61,22%, e 97% foram sinalizados por pelo menos um ([[ragab-ai-integrity-verification-model-2026]]). O que se segue é avaliação supervisionada de competência nos pontos de progressão, movendo o ônus para a política de [[academic-integrity|integridade acadêmica]], não para o software.

## O primeiro ano: transição, orientação e apoio

Os estudantes de primeiro ano chegam com hábitos formados na escola e pouca base para questionar uma resposta plausível. As ferramentas voltadas a eles fazem, em sua maioria, trabalho administrativo.

- **Os hábitos chegam antes do ceticismo.** Entre 1.598 estudantes de 12 a 25 anos, o uso relatado subiu de 1,24 para 1,77 em uma escala de 0 a 4 entre os 12 e os 17 anos, enquanto a confiabilidade julgada não se moveu. Na universidade, o uso se achatou e deslocou-se para a tradução; a cautela forte em tarefas de pesquisa alcançou 23,3% no quarto ano contra 10,1% no primeiro ([[cuenca-rodriguez-genai-use-caution-trajectories-2026]]).

- **O material verificado ajudou os estudantes que precisavam dele.** Em um curso de economia de primeiro ano, 170 estudantes com acesso a podcasts e guias de estudo gerados por IA e verificados por assistentes de ensino pontuaram 2,34 pontos a mais em uma prova de 50 pontos. Três quartos desse ganho ficaram no quintil inferior, a proporção abaixo de 60% caiu 24,7 pontos, e a verificação custou 1,8 minuto de tempo da equipe por estudante ([[verified-study-materials-learning-gains-2026]]).

- **O contato ativo da orientação move prazos, não notas.** Um chatbot de texto em dois grandes [[online-teaching-and-learning|cursos on-line]] elevou em 4 pontos a proporção que obteve A ou B e em 2 a frequência à tutoria, entre 2.483 estudantes ([[chatbot-outreach-course-performance-2026]]). Com 8.708 estudantes ao longo de oito semestres, um serviço similar moveu a matrícula em 34 pontos e deixou GPA e persistência inalterados ([[mata-sustaining-ai-enabled-student-support-2026]]).

- **Os modelos de alerta precoce pertencem à orientação, não à disciplina.** Rastros do LMS das primeiras oito semanas de 52 estudantes de programação predisseram eventos de risco posteriores dentro da prova com AUC de 0,763; o autor enquadra a pontuação como um estímulo ao apoio ([[akcapinar-ai-cheating-risk-lms-prediction-2026]]).

## Conexões

A graduação se situa entre duas faixas estudadas com métodos diferentes. A [[secondary-education|educação secundária]] pressupõe frequência obrigatória, um adulto que media a ferramenta e a sala de aula como unidade de implantação. O ensino de graduação pressupõe aprendizes que definem seus próprios horários e trata o curso como unidade. O [[higher-ed|ensino superior]] é o quadro mais amplo — [[governance|governança]], [[educational-development|desenvolvimento docente]], compras e programas profissionais — e a maior parte da evidência sobre precisão de correção e [[educational-policy-ai|política institucional]] está ali. A [[graduate-education|pós-graduação]] desloca a unidade de trabalho dos cursos para a pesquisa supervisionada, onde a questão se torna o julgamento. Os [[education-levels|níveis educacionais]] apresentam o conjunto completo de faixas.

## Implicações para a prática

**Para instrutores**

- **Ensine a interação, não a ferramenta.** Uma única sessão de 45 minutos sobre o que o modelo erra elevou a proporção de respostas erradas revisadas para corretas de 41,3% para 69,3% ([[structured-genai-training-physics-problem-solving-rct-2026]]).
- **Coloque peso avaliado no desempenho sem auxílio.** Todo design que separou os dois encontrou o artefato apoiado melhorando primeiro; avalie um trabalho sem IA.
- **Exija uma tentativa antes da ajuda.** A interface de tentativa primeiro no curso de demonstrações de Carnegie Mellon não carregou penalidade na prova; o chatbot aberto carregou.

**Para líderes de curso e de programa**

- **Trate o chatbot de um curso como uma intervenção [[pedagogy|pedagógica]].** A mesma tecnologia não produziu efeito mensurável em um curso randomizado e reduziu notas em outro.
- **Orçe o trabalho de verificação.** O material de estudo verificado custou 1,8 minuto de tempo da equipe por estudante e produziu seu maior ganho entre os estudantes mais fracos.
- **Monitore os [[differential-effects-across-learner-groups|efeitos por subgrupo]] antes de escalar.** O diferencial de primeira geração no ensaio de 2.379 estudantes foi o maior dano e invisível na média do curso.

**Para pesquisadores**

- **Relate um desfecho sem auxílio e um tardio,** ou um efeito no artefato será lido como um efeito de aprendizagem.
- **Pré-especifique uma margem de equivalência** ao afirmar que o feedback de IA é tão bom quanto o feedback do instrutor.

## Ideias equivocadas comuns

- **"O chatbot de um curso é infraestrutura neutra."** No ensaio de 2.379 estudantes, 15% dos estudantes usaram a ferramenta e as notas caíram 0,37 DP, com a participação caindo 0,90 DP.
- **"Uma nota maior no exercício significa mais aprendizagem."** Usuários do ChatGPT pontuaram 71,84% contra 29,85% em um exercício de CS1, enquanto os ganhos conceituais foram estatisticamente idênticos entre os braços.
- **"Detectores podem resolver um caso de integridade."** Sete detectores tiveram média de 61,22% de falsos positivos em redações de escritores não nativos de inglês, e 97% foram sinalizados por pelo menos um.
- **"Uso diário significa que o letramento em [[ai-literacy|IA]] pode ser presumido."** O uso relatado subiu a cada ano do ensino médio enquanto a confiabilidade julgada permaneceu estável; a cautela em tarefas de pesquisa apareceu apenas no quarto ano.
