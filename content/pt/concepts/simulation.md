---
connected_resources: [openmaic]
title: Simulação
created: "2026-08-12T21:20:35-04:00"
updated: "2026-10-04T15:54:00-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
translation_of: concepts/simulation
source_updated: "2026-10-04T15:54:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Simulação** — o uso de ambientes, agentas ou cenários modelados para apoiar a aprendizagem por meio de prática e feedback em contextos que são seguros, repetíveis e frequentemente inacessíveis de outro modo. As simulações permitem a quem aprende agir, cometer erros e ver consequências sem custo no mundo real, e são crescentemente movidas por IA e por modelagem baseada em agentas.

## Perguntas para refletir

- Lembre de uma ocasião em que você aprendeu algo fazendo-o em um ambiente seguro e de baixo impacto — um laboratório, um exercício simulado, um simulador de voo ou de jogo. O que tornou aquela prática eficaz, e o que poderia se perder se a simulação fosse realista demais ou não realista o bastante?
- A página argumenta que as simulações permitem a quem aprende cometer erros e ver consequências "sem custo no mundo real". O que você acha que se ganha, e o que pode se perder, quando o custo de um erro cai a quase zero?
- Se uma IA consegue simular pacientes, estudantes ou parceiros de conversa para prática, onde você traçaria a linha entre ensaio valioso e prática que não se transfere para a interação humana real?
- Por que a consciência, por parte de quem aprende, dos limites de uma simulação — sua [[trust|confiabilidade]] — poderia importar tanto quanto a fidelidade com que ela modela a realidade?
- Como a mesma tecnologia de simulação que ajuda alguém a aprender poderia também enganá-lo, e o que você precisaria saber para distinguir esses dois resultados?

## Introdução

A simulação está no núcleo das [[pedagogy|pedagogias]] [[experiential-learning|experienciais]] e de [[active-learning|aprendizagem ativa]]. Ela fornece a prática deliberada, a [[productive-failure|falha produtiva]] e os [[feedback|ciclos de feedback]] que constroem habilidade e juízo. A IA transformou a simulação de duas formas: ela potencializa ambientes simulados mais realistas e adaptativos, e gera [[simulating-students|quem aprende simulado]], pacientes ou interlocutores simulados, o que torna a prática escalável. A evidência comportamental mostra que *como* quem aprende se engaja com uma simulação varia sistematicamente, e não uniformemente: ao rastrear pessoas aprendendo on-line construindo modelos ecológicos no VERA, [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] classificaram o [[student-engagement|engajamento]] em Observação (execuções frequentes e ajuste de parâmetros com pouca construção de modelo), Construção (construção manual com pouca simulação) e Exploração (ciclos completos de construir–parametrizar–simular), com os Exploradores produzindo os modelos mais complexos e diversos, e quem se concentrava em observação copiando em grande parte os existentes — um argumento por desenhar ambientes de simulação que empurrem quem aprende rumo à atividade de ciclo completo.

### IA e simulação

- **Ambientes movidos por IA:** simulações adaptativas ajustam dificuldade e cenários ao estado de quem aprende, ligando-se à [[adaptive-learning|aprendizagem adaptativa]] e ao coaching baseado em [[reinforcement-learning|aprendizagem por reforço]].
- **Simulações geradas por prompt colocam um laboratório sob medida ao alcance.** Instrutores podem gerar, a partir de um template de prompt reutilizável, modelos executáveis no navegador sobre o tema de que um curso precisa (controles deslizantes, animação, gráficos dependentes do tempo), validando cada um duas vezes — tecnicamente, e depois contra a solução analítica conhecida —, em vez de aceitar a simulação publicada mais próxima ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025]]).
- **Automatizando a contraparte humana.** O [[astra-atco-training-simulator|ASTRA (Chew et al., 2026)]] substitui os role-players humanos especialistas que atuam nas simulações de controle de tráfego aéreo por sim-pilotos autônomos de [[llm|LLM]], removendo um gargalo de capacidade de treinamento; seu pipeline de fala ajustado reduziu a taxa de erro de palavras em fala de aviação com sotaque singapurense de 107,80% para 23,45%, embora todas as avaliações tenham sido no nível de componentes, sem execução com uma coorte de estagiários.
- **Simuladores adversariais como parceiros de treinamento.** O [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] associa um agente de política a simuladores de paciente com LLM construídos para se comportar de forma adversarial ao longo de um pipeline de cenários de 57 mil casos; treinar contra eles reduziu em cerca de um terço as taxas de bandeiras vermelhas perdidas, e clínicos às cegas preferiram o agente treinado em 87,6% das comparações lado a lado.
- **Codifique explicitamente os estados de caso ausentes.** Um sistema multiagente de pacientes padronizados mantém separados o reconhecimento de intenção, a geração de resposta fundamentada no caso e a avaliação pós-sessão, distinguindo quatro tipos de informação ausente — clinicamente negativa, desconhecida pelo paciente, ainda não avaliada e ausente do caso —, porque colapsá-los em "normal" injeta fatos clínicos sem apoio ([[medeasy-ai-standardized-patients|Gao et al. (2026)]]).
- **Agentes simulados:** a IA consegue simular pacientes (para treinamento médico), estudantes (para prática de [[teacher-role|professores]]) ou parceiros de conversa, tornando a prática interpessoal de alto impacto acessível e repetível. Na [[teacher-education|formação de professores]], [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang e Zhang (2025)]] construíram o *Student GPT*, um [[conversational-ai|chatbot]] personalizado com ChatGPT que representava um estudante do [[k-12|ensino fundamental II]] sustentando [[misconceptions|ideias equivocadas]] comuns de raciocínio sobre razões, dando a professores de [[math-education|matemática]] em formação prática acessível e específica do conteúdo em diagnosticar o pensamento do estudante —, e usaram um framework de codificação [[affective-computing|Afetivo]], Comunicativo e Técnico (ACT) para avaliar sistematicamente as forças de representação do estudante simulado (clareza, relevância, consistência de erros) e as fraquezas de autenticidade (tom professoral, confusão de papel).
- **Torne o histórico contrafactual um recurso de primeira classe.** Os agentes de [[llm|LLM]] multiagentes contextuais do SupplyNet geram dinâmicas de cadeia de suprimentos emergentes das decisões de quem aprende, em vez de roteirizadas, e sua linha do tempo ramificada permite a quem aprende revisitar escolhas anteriores sem penalidade — 13 de 14 participantes o avaliaram como alto em conectar decisões ao desempenho, contra 3 para a linha de base ([[supplynet-visual-exploratory-learning|Li et al. (2026)]]).
- **Dinâmicas fundamentadas, não uma persona instada por prompt.** [[adaptive-virtual-patient-psychotherapy-training|Chen et al. (2026)]] parametrizaram as dinâmicas de revelação de um paciente virtual a partir de quase 2.000 horas de transcrições reais de psicoterapia, e depois atualizaram o nível a cada turno; ao longo de 1.033 turnos com 20 clínicos, sua revelação subiu com a empatia e a exploração do terapeuta, enquanto uma linha de base apenas com prompt sobre o mesmo LLM permaneceu plana.
- **A dramatização de papéis coloca quem aprende no papel.** Onde os agentes simulados fornecem a contraparte, a dramatização dá a quem aprende esse papel. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari e colegas (2026)]] fizeram 18 crianças de 9 a 10 anos assistirem a uma cena de bullying encenada por robôs sociais, raciocinarem sobre a posição de cada personagem, e depois ensaiarem a defesa manipulando um avatar robótico, e relataram ganhos na [[self-efficacy|autoeficácia]] percebida de defender, além de crenças melhor calibradas sobre se confrontar um agressor de fato o interrompe. Seu enquadramento, drama aplicado mediado por robôs, mantém um facilitador humano no papel do Teatro do Oprimido e confina a automação ao controle narrativo, o que é um lembrete útil de que a parte exigente da dramatização é a reflexão, e não a maquinaria. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga e Johnson (2025)]] colocam a dramatização ao lado da simulação entre as estratégias das quais a aprendizagem on-line apoiada por IA se vale.
- **Quem aprende simulado:** modelos de comportamento de estudante permitem a [[research-methods-aied|pesquisadores]] e designers testar sistemas de tutoria e [[curriculum-design|currículos]] antes da implantação ao vivo, fundamentando a [[student-modeling|modelagem de estudante]] e o [[knowledge-tracing|rastreamento de conhecimento]].
- **Confiança e fidelidade:** o valor de uma simulação depende de quão fielmente ela modela o contexto real — e da consciência, por parte de quem aprende, de seus limites, conectando-se à [[trust-calibration|calibração da confiança]].
- **A semelhança humana é uma propriedade da interação, não do modelo.** Uma vez que ambos os backends foram renderizados por trás do mesmo avatar, uma vantagem de semelhança humana baseada em texto desapareceu: os participantes chamaram o modelo comercial de natural (54% versus 22%), enquanto o desempenho de comunicação era idêntico; voz, latência e tomada de vez remodelaram como a mesma qualidade de diálogo era percebida ([[sophie-clinical-communication-ai-assessment-2026|Hasan et al. (2026)]]).
- **[[generative-ai|IA generativa]] na aprendizagem baseada em simulação.** [[genai-scenario-based-healthcare-education-2026|Neto e colegas (2026)]] [[meta-analysis-systematic-review|revisam sistematicamente]] a IA generativa ao longo da aprendizagem baseada em cenários, casos, problemas e simulação na educação em saúde, constatando resultados positivos para habilidades cognitivas de ordem superior, mas resultados inconsistentes em outros pontos, com a [[human-ai-collaboration|colaboração humano-IA]] híbrida superando as abordagens inteiramente automatizadas. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger e Liening (2026)]] desenvolvem agentes conversacionais de IA para apoio adaptativo em jogos de simulação de negócios, abordando a lacuna comum de [[formative-assessment|feedback formativo]] limitado e de reflexão estruturada na aprendizagem baseada em simulação.
- **A "lacuna de autenticidade" delimita o que a simulação por IA consegue substituir.** Na simulação [[medical-education|clínica]], a revisão sistemática de [[mixed-methods-research|métodos mistos]] de [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]] sobre simulação de enfermagem movida por IA (19 estudos, N=1.253) constata que a IA é eficaz para conhecimento cognitivo e resultados afetivos, mas inconsistente para habilidades psicomotoras complexas. Seu conceito de **lacuna de autenticidade** — uma insuficiência percebida por quem aprende em ressonância emocional, reconhecimento de pistas não verbais e dimensões táteis/de exame físico — explica *por que* a simulação por IA é melhor para objetivos altamente estruturados (comunicação fundamental, coleta de história) e deveria se situar em um **continuum de simulação escalonado** que entrega cenários psicomotores avançados e emocionalmente complexos a pacientes padronizados humanos e à colocação clínica. A instabilidade técnica (por exemplo, atrasos de reconhecimento de fala) também pode acrescentar [[cognitive-offloading|carga cognitiva]] extrínseca e ansiedade, de modo que a fidelidade e a estabilidade são, elas mesmas, alavancas de desenho. Isso é paralelo ao achado de [[genai-scenario-based-healthcare-education-2026|Neto et al.]] de que as abordagens híbridas humano–IA superam as inteiramente automatizadas.
- **Simulações codesenhadas por professor e IA.** Simulações interativas que apoiam tanto a aprendizagem conceitual quanto o desenvolvimento de competências são escassas em domínios práticos, e a saída de IA generativa frequentemente carece de validade pedagógica. Na [[stem-education|educação STEM baseada em drones]], simulações codesenhadas por professor e IA, embutidas em um currículo prático por outro lado idêntico, foram avaliadas com um desenho quase-experimental de pré-teste–pós-teste ao longo de 30 estudantes do ensino médio, examinando se a instrução apoiada por simulação produz [[learning-gains|resultados de aprendizagem]] superiores ([[simulation-assisted-drone-learning-stem-2026]]). Separadamente, [[benchmark|benchmarks]] de tutoria [[agentic-ai|multiagente]], como o ASTRA, usam agentes socialmente inteligentes simulados para estudar a colaboração com participação equilibrada na [[cs-education|programação introdutória]] ([[astra-multi-agent-tutoring-benchmark-2026]]).
- **O controle de quem aprende na simulação é exercido, não concedido.** Um experimento 2 × 2 em uma simulação de bando ([[learner-agency-ai-simulation-2026|Su, Nair e Nagashima 2026]]) deu a alguns estudantes controles deslizantes de parâmetros, a alguns um agente conversacional opcional e a alguns ambos; toda condição melhorou, mas nenhuma das duas affordances produziu uma diferença confiável uma vez controlado o conhecimento prévio (p = .849 e p = .108). O que previu os [[learning-gains|ganhos]] foi onde e por quanto tempo quem aprende manipulou parâmetros: o uso sustentado dos controles na lição conceitualmente mais complexa se associou positivamente aos ganhos, e o mesmo comportamento na lição mais fácil se associou negativamente. Para quem constrói simulações, a implicação é que oferecer controles não é a intervenção — ajudar quem aprende a decidir o que mudar, e a registrar o que mudou, é.
- **Um gêmeo digital é uma simulação com uma conta de hardware, e a conta molda quem pode participar.** Uma revisão [[meta-analysis-systematic-review|sistemática]] de 11 estudos de gêmeos digitais no ensino superior de [[engineering-education|engenharia]] e STEM constatou que toda implementação entregou um protótipo funcional com sincronização em tempo real, mas apenas três relataram [[learning-gains|ganhos de aprendizagem]] estatisticamente significativos. Equipamentos físicos limitaram o acesso a 1–3 estudantes simultâneos em cinco estudos, e a redução da interação social foi o desafio pedagógico mais citado, em seis ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-González et al. (2026)]]).

### Conexões

A simulação se conecta à [[active-learning|aprendizagem ativa]], à [[adaptive-learning|aprendizagem adaptativa]] e aos [[pedagogical-agent|agentes pedagógicos]]. Ela é um mecanismo para a aprendizagem experiencial e [[constructivist|construtivista]] e é amplificada pela capacidade da IA de gerar ambientes de prática adaptativos e realistas.

## Conceitos conectados
- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — Educação em química e IA: laboratórios, avaliação formativa, limites dos LLMs, filosofia da experimentação
- [[biology-education]] — Educação em biologia e IA: assistentes de laboratório, letramento em IA em biologia, pensamento crítico, ferramentas especializadas
- [[ai-technologies]] — Guarda-chuva: tecnologias e técnicas de IA (modelos, treinamento de LLM, robótica, RAG, agêntica)
- [[virtual-and-augmented-reality]] — o modelo, não a modalidade — ambientes imersivos usualmente renderizam uma simulação

## Artigos conectados
- [[learner-agency-ai-simulation-2026]] — Controle de parâmetros e um agente de IA opcional em uma simulação de sistemas complexos: os ganhos rastrearam o exercício, não o acesso
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — Pacientes virtuais adaptativos para treinamento em psicoterapia
- [[ai-enabled-serious-games]] — Jogos sérios habilitados por IA
- [[anvil-ai-educational-animations]] — ANVIL: analogias e vídeos para professores
- [[astra-atco-training-simulator]] — ASTRA: simulador de treinamento de controladores de tráfego aéreo
- [[supplynet-visual-exploratory-learning]] — SupplyNet: aprendizagem visual exploratória
- [[medeasy-ai-standardized-patients]] — MedEASY: pacientes padronizados com IA
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Jogo de dramatização mediada por robôs para intervenção de espectadores (drama aplicado)
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — Revisão sistemática de IA generativa na educação em saúde baseada em cenários (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — Framework CAIS-GBL para agentes conversacionais de IA em jogos de simulação de negócios (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Agentes de LLM específicos por participante reproduzindo diálogos de resolução colaborativa de problemas (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Benchmark sintético ASTRA para tutoria multiagente e colaboração com participação equilibrada
- [[simulation-assisted-drone-learning-stem-2026]] — Aprendizagem com drones assistida por simulação com andaimentos codesenhados por professor e IA
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — Simulação movida por IA em enfermagem: revisão sistemática de métodos mistos (lacuna de autenticidade, continuum escalonado)
- [[sophie-clinical-communication-ai-assessment-2026]] — Treinamento de comunicação clínica escalável baseado em IA e avaliação automatizada
- [[caee-digital-twins-stem-education-systematic-review-2026]] — Gêmeos digitais na educação STEM: todos os protótipos funcionaram, os ganhos de aprendizagem em grande parte não
