---
title: "Agente pedagógico"
created: "2026-08-08T11:47:01-04:00"
updated: "2026-10-03T02:57:43-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/pedagogical-agent
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Síntese**: Agentes [[pedagogy|pedagógicos]] são interfaces conversacionais impulsionadas por IA embutidas em ambientes de aprendizagem que usam estratégias pedagógicas (elicitação, narração, andaimes) para apoiar o [[student-engagement|engajamento]], a reflexão e a metacognição de quem aprende. Os desenhos variam de provedores simples de informação a parceiros de diálogo interativos que se adaptam aos estados de quem aprende.

## Questões para considerar

- Pense em uma ocasião em que um chatbot ou tutor lhe deu uma resposta perfeita que não lhe deixou mais sábio. O que faz uma IA "ensinar" em vez de meramente "resolver" — e por que uma nota de benchmark poderia deixar de capturar essa diferença?
- A página conclui que as notas de "resolução" e as notas de "pedagogia" dos tutores se correlacionam apenas fracamente entre modelos. O que isso deveria lhe dizer sobre avaliar um tutor de IA por sua capacidade de responder perguntas?
- Alguns desenhos dão à IA papéis distintos — Professor, Colega de Turma, Mentor — e até mantêm um dos pais centralmente envolvido (como no ParaTutor). Na sua experiência, dar a um agente um papel claro muda a forma como [[learners|quem aprende]] interage com ele?
- Estudantes reais frequentemente "contornam" o enquadre pedagógico de um chatbot quando os objetivos do agente colidem com os do próprio aprendiz. Por que alguém poderia racionalmente ignorar bons andaimes, e o que isso implica sobre presumir que "se construirmos, eles se engajarão"?
- Você preferiria aprender com uma IA que lhe diz coisas, uma que lhe faz perguntas ou uma que medeia uma discussão de grupo? Como sua preferência modela o que você acha que um "agente pedagógico" deveria ser?
- De um simples provedor de informação a uma frota de agentes especializados orquestrando uma disciplina inteira — onde você acha que reside o valor (e o risco) da tutoria conversacional com IA?

## Introdução

Um agente pedagógico é um componente interativo de IA dentro de um sistema de aprendizagem que envolve quem aprende por meio de diálogo, perguntas ou prompts para apoiar processos cognitivos e [[metacognition|metacognitivos]]. Diferentemente de [[visualization|dashboards]] passivos ou de feedback estático, agentes pedagógicos empregam estratégias de tutoria baseadas em evidência — como elicitar auto[[assessment|avaliações]] de quem aprende antes de fornecer [[feedback|feedback]], ou [[scaffolding|andaimes]] para a [[problem-solving|resolução de problemas]] por meio de diálogo socrático. O guarda-chuva cobre agora tudo, de um único [[intelligent-tutoring|tutor inteligente]] conversacional a frotas de [[agentic-ai|agentes]] especializados em papéis que dão aulas, mentoreiam, facilitam colaboração e até orquestram a geração de disciplinas, todos fundamentados em décadas de [[research-methods-aied|pesquisa]] sobre sistemas de tutoria inteligente.

## Como os agentes pedagógicos são estudados nesta base de conhecimento

**Desenho e arquitetura de agentes conversacionais.** Um fio recorrente é como os agentes são estruturados, e não apenas quais modelos os alimentam. O [[conversational-ai-tutors-framework|framework de tutores conversacionais de IA]] argumenta que [[ai-technologies|tecnologias]] de ITS comprovadas — [[knowledge-tracing|rastreamento de conhecimento]], detecção de afeto, [[student-modeling|modelagem do estudante]] — deveriam ancorar tutores generativos, mantendo a espinha dorsal diagnóstica enquanto a IA generativa fornece diálogo flexível. Os desenhos multiagente levam isso mais longe: o [[mooc-to-maic|MAIC]] substitui o "um vídeo para N estudantes" do [[online-teaching-and-learning|MOOC]] por uma sala de aula movida a [[llm|LLM]] com agentes Professor, Assistente, Colega de Turma e Analisador para entregar [[personalized-learning|aprendizagem personalizada]] em escala, enquanto os [[lecturaagents-multi-agent-teaching|LecturaAgents]] acrescentam um ProfessorAgent [[embodied-learning|incorporado]] cujo algoritmo TASA alinha ações visíveis de [[teacher-role|ensino]] (escrita à mão, destaque) com perfis de quem aprende. Até a tutoria entre pais e filhos se torna um problema de dois agentes no [[paratutor-parent-child-tutoring|ParaTutor]], onde o andaime com papéis separados mantém o pai ou a mãe centralmente envolvido em vez de deixar um chatbot genérico deslocá-los. A mesma lógica baseada em papéis aparece nos [[instructional-agents-multi-agent-course-gen|Agentes Instrucionais]], onde agentes de Corpo Docente, Desenhista, Monitor e Coordenador de Curso colaboram ao longo do ADDIE para gerar materiais de disciplina.

Um uso complementar de agentes baseados em papéis visa a prática do [[teacher-education|professor]] em vez da aprendizagem dos estudantes: [[educasim-cs1-instructional-practice|Mohne et al. (2026)]] combinam personas de estudantes pedagógicas, memória ancorada em material real de disciplina e um oráculo falante de LLM-como-juiz para que instrutores novatos ensaiem uma seção de pequeno grupo — 254 sessões opcionais com média de cerca de 16 minutos cada, a cerca de \\$0,05–\\$0,10 por sessão.

**Comportamento de ensinar versus resolver.** Um achado empírico central é que produzir respostas não é apoio à aprendizagem. [[measuring-llm-tutors-teach-vs-solve|Medir se tutores de LLM ensinam ou resolvem]] mostra que as notas de resolução e de pedagogia em benchmarks de tutoria se correlacionam apenas fracamente (r = 0,421 ao longo de oito modelos), argumentando que os benchmarks precisam relatar critérios orientados à pedagogia — perguntas de orientação, dicas calibradas, andaimes não reveladores — separadamente. Isso se alinha à evidência de [[stanford-evidence-base-ai-k12-2026|IA específica de tutoria vs. geral]]: tutores pedagogicamente desenhados com [[guardrails|salvaguardas]] mitigam as quedas de nota em provas e a supressão do raciocínio que os chatbots de uso geral produzem, preservando as [[desirable-difficulties|dificuldades desejáveis]] e a luta produtiva em vez de as interromper. No entanto, os benchmarks podem superestimar quão bem mesmo tutores com andaimes funcionam no mundo real. [[rethinking-scaffolding-llm-tutors|Repensando os andaimes em tutores de LLM]] conclui que estudantes reais frequentemente contornam o enquadre pedagógico de um chatbot, uma resposta racional a um descompasso entre os objetivos do agente e os de quem aprende — portanto a apropriação precisa ser avaliada, e não presumida.

**Papel na tutoria e na colaboração.** Os agentes são cada vez mais posicionados não como dadores de respostas, mas como facilitadores e mediadores. O [[niari-ai-pedagogical-mediator-collaborative-learning|framework de mediador pedagógico de Niari]] reconsidera a IA na [[collaborative-learning|aprendizagem colaborativa]] como mediador interacional, epistêmico e regulatório — dando andaimes à participação e à [[regulation|regulação]] compartilhada sem deslocar a agência do professor ou de [[agency|quem aprende]]. Concretamente, a [[golrang-propact-pair-programming-2026|tutoria colaborativa com IA (ProPACT)]] trata a própria colaboração como objeto de instrução, prevendo rupturas diádicas com até 30 segundos de antecedência e entregando andaimes minimamente intrusivos que preservam a [[metacognition|metacognição]]. A [[embodied-inquiry-ai-facilitator-physics-2026|investigação incorporada com a IA como facilitadora]] mostra que uma IA pode complementar a construção manual de modelos ao facilitar a aplicação de um modelo construído, enquanto a [[robot-assisted-language-learning-meta-analysis-2026|metanálise de aprendizagem de línguas assistida por robôs]] conclui que os desfechos acompanham como um agente robótico é posicionado na instrução (interação baseada em grupo) mais que sua sofisticação técnica. Se o *papel* que um agente desempenha é suficiente, ou se ele também precisa *adaptar seu comportamento*, é questionado por [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]]: um estudo de "roda de leitura" no [[k-12|ensino fundamental]] concluiu que um companheiro fixo de "par estudante" sustentou interações mais longas, mas suprimiu a agência dos estudantes e bateu em um "teto [[affective-computing|afetivo]]" (reflexão emocional/orientada ao futuro fraca), argumentando que o *rotulamento* de papel precisa ser pareado com lógica de interação adaptativa ao papel, em vez de um desenho monolítico de papel único.

Os [[ethics-training-agents-group-ethics-discussion-2026|Agentes de Treinamento em Ética (Seo et al., 2026)]] mostram o que acontece quando se pede a um agente pedagógico que modere em vez de ensinar: um facilitador LLM que cuida da vez de fala (empilhamento com janelas de 15 segundos de mão levantada), da gestão do tempo (avanço automático de um estágio para o encerramento após 9 minutos) e da sumarização incremental em lotes reduziu o fardo cognitivo dos participantes e lhes deu a sensação de que a discussão estava "no rumo" — um participante a contrastou favoravelmente com o ChatGPT, que "muitas vezes pode parecer desorganizado ou dificultar ver o progresso das ideias". O mesmo estudo expõe o teto dos agentes baseados em persona: os três agentes distintos de orientação [[ethics|ética]] foram avaliados significativamente abaixo de pares humanos em contribuição, diversidade e influência (Kruskal-Wallis p < ,001), e os participantes pediram saídas orientadas ao processo ("como o agente raciocina") em vez de saídas orientadas à conclusão.

**Onde os agentes conversacionais são (e não são) usados — o panorama da revisão guarda-chuva.** A [[conversational-ai-agents-umbrella-review-2026|revisão guarda-chuva de agentes conversacionais de IA]] (Ganguly et al. 2025, 34 revisões) quantifica a utilização de CAI: apoio ao ensino e à aprendizagem (97,1% das revisões), apoio psicológico e [[motivation|motivacional]] (91,2%) e desenvolvimento metacognitivo e pessoal (88,2%) lideram, enquanto apoio administrativo (50%), gestão de pesquisa e informação (52,9%) e apoio à saúde/medicina (41,2%) ficam atrás. Ela também sinaliza que a pesquisa em [[conversational-ai|CAI]] carece de orientação de desenho ponta a ponta, de métodos de [[usability-research|usabilidade]] específicos de CAI e de estratégias concretas de orquestração em sala de aula para o papel do professor — reforçando que o desenho de agentes pedagógicos precisa ser fundamentado em IHC, baseado em evidência e atento ao [[ai-literacy|letramento em IA]].([[conversational-ai-agents-umbrella-review-2026]])

**A orientação de papel é uma variável de desenho, e não uma escolha estilística.** A [[wang-teacher-student-centered-agents-physics-2026|comparação de agentes de física]] (Wang et al. 2026, 59 pessoas) isola o papel especificado por prompt mantendo fixos modelo, plataforma e temperatura: um agente centrado no professor, ancorado em uma fonte de livro-texto delimitada e respondendo da perspectiva do instrutor, versus um agente centrado no estudante, configurado com conhecimento da compreensão dos estudantes e roteirizado para diagnosticar concepções errôneas, nomear o conceito e fazer [[transfer-of-learning|transferência]] para um caso análogo. O papel centrado no estudante venceu em todo desfecho medido — desempenho no pós-teste, menor carga cognitiva externa e maior carga cognitiva germânica, experiência de fluxo e empatia percebida — embora o agente centrado no professor fosse o otimizado para precisão e fidelidade ao livro-texto. Isso torna o *papel e o padrão de interação* um parâmetro de desenho de primeira classe ao lado do [[prompt-engineering|prompt]] e da escolha de modelo, e mostra que a empatia pode ser projetada a partir da estrutura conversacional, e não por um modelo treinado de forma diferente ([[affective-computing|computação afetiva]]).


**A intenção de autoria não garante pedagogia exercida.** Quando 27 professores do ensino fundamental configuraram uma ferramenta de autoria de chatbot voltada ao professor, uma avaliação de 108 classificações de critério no nível do bot concluiu que as respostas geradas se alinhavam muito melhor com responsividade (88,9%) e persona (81,5%) que com regras (70,4%) ou com o propósito declarado (59,3%), o que os autores enquadram pelas formas pedagógicas do Golfo de Execução e do Golfo de Avaliação de Norman — controles configuráveis por si só não tornaram a intenção instrucional do professor visível no comportamento do bot ([[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]]).

**Agentes em contextos imersivos e de realidade estendida.** [[aclime-pedagogical-agents-extended-reality-2026|Ross e Kaspar (2026)]] estendem o conceito para a [[virtual-and-augmented-reality|realidade estendida]] (RA, virtualidade aumentada e RV) com o ACLIME, um framework conceitual que — diferentemente de CAMIL, CATLM-VR e TICOL — mantém o agente dentro do modelo. Ele nomeia dois modos de interação extraídos da literatura: o tutor, que oferece orientação, encorajamento, questionamento reflexivo e explicações, e o parceiro de dramatização de papéis, que ocupa um papel definido dentro de um cenário, como um morador local em uma excursão de campo sobre mudança climática ou uma contraparte em negociação em treinamento corporativo. O corpo do agente (de apenas a cabeça ao corpo inteiro) e seu comportamento são tratados como superfícies de desenho: realismo visual versus comportamental, controle flexível de IA versus roteirização fixa baseada em regras, fala sintetizada versus pré-gravada, e canais não verbais incluindo olhar, gesto e proxêmica. Argumenta-se que a imersão e a interatividade baseada no corpo multiplicam as pistas sociais por trás da [[community-of-inquiry|presença social]] — o realismo comportamental, e não o visual, é proposto como o preditor decisivo —, enquanto o próprio corpo virtual de quem aprende acrescenta uma dimensão de [[embodied-learning|incorporação]] (propriedade do corpo, agência sobre o próprio corpo virtual, autorrelocalização) e o efeito proteus. A troca explícita do framework é cognitiva: a imersão e a mera presença do agente podem elevar a carga cognitiva mesmo enquanto a interação social com o agente a reduz pelo efeito coletivo de memória de trabalho, e uma camada temporal (familiarização, amadurecimento das relações humano–agente, declínio da novidade, desenvolvimento de ciberenjoo) é acrescentada às variáveis usuais de desenho. Seu status é deliberadamente provisório: quase nenhum trabalho empírico testa ainda agentes pedagógicos em mídia imersiva, e [[learning-gains|resultados de aprendizagem]] de longo prazo, bem como características de quem aprende, estão fora do modelo.

**Avaliação e benchmarks.** Medir um agente pedagógico exige testar pedagogia, não conteúdo. O [[teaching-monster-pck-benchmark-2026|Teaching Monster Challenge]] faz o benchmark de Conhecimento Pedagógico de Conteúdo pedindo aos agentes que adaptem uma aula a uma persona de quem aprende especificada, concluindo que os sistemas são fortes em conteúdo, mas fracos em adaptá-lo — e revelando que LLMs-juízes classificam mal sistemas fortes. O [[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]] avalia agentes ao longo de julgamento pedagógico profissional, tutoria multiturno [[situated-learning|situada]] e conclusão de fluxo de trabalho estilo canvas, mostrando que os modelos ficam aquém dos padrões profissionais de ensino. A [[ai-generated-interactive-fiction-education-2026|ficção interativa gerada por IA]] acrescenta um ângulo de avaliação de desenho: coerência e integração com quizzes, e não capacidade de geração, limitam a utilidade para a [[student-experience|experiência dos estudantes]].
**Teste de estresse da robustez da persona ao longo de múltiplos turnos.** [[adversarial-stress-testing-role-playing-agents|Shouqi et al. (2026)]] executaram seis ataques escalonados contra agentes de dramatização de papéis com um Juiz automatizado: o teste com múltiplas estratégias cortou a robustez em 0,17–0,20 versus uma baseline de estratégia única, e as falhas críticas se agruparam após os turnos 5–6, portanto avaliações curtas ou de turno único superestimam a estabilidade da persona e a adesão ética.

## Orientação prática

Desenhe para a agência de quem aprende, não para a conveniência do modelo. Favoreça salvaguardas específicas de tutoria — [[scaffolding|andaimes]], dicas, questionamento [[socratic-method|socrático]], mira em [[misconceptions|concepções errôneas]] — em vez da geração bruta de respostas, já que resolver e ensinar divergem. Distribua o apoio por papel de usuário (pai vs. filho, par vs. par) em vez de por uma única interface genérica, e trate a colaboração como alvo válido de andaimes. Não presuma que os estudantes vão se apropriar dos andaimes; avalie a apropriação em contextos reais. Embuta [[human-in-the-loop-ai|supervisão humana]] na autoria — como o [[ai-tutor-authoring-promptdecipher|PromptDecipher]] faz ao tornar o QA pelo professor das respostas do bot uma atividade de primeira classe — e escolha backends mais baratos onde a qualidade se mantém. Relate as notas de ensino e de resolução separadamente, e valide o conteúdo gerado com usuários em vez de presumir que geração equivale a utilidade.

A preferência de quem aprende é um proxy ruim da qualidade dos andaimes: estudantes em modelagem matemática apoiada por IA tiveram o melhor desempenho com os papéis de Par e de Assistente de Ensino, mas avaliaram os papéis mais diretivos de Tutor e de Estudante Excelente como os mais altos em utilidade e autoeficácia ([[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang e Yang (2026)]]).
 Uma revisão de 46 estudos de agentes de IA na aprendizagem colaborativa apoiada por computador distingue andaimes cognitivos, facilitação social e orquestração instrucional, e conclui que os ganhos cognitivos são consistentes enquanto desfechos comportamentais, sociais e emocionais são dependentes de contexto — portanto a função do agente deve ser escolhida pelo desfecho que ele visa produzir ([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]).

## Conexões com conceitos relacionados

Os agentes pedagógicos se situam na interseção da [[intelligent-tutoring|tutoria inteligente]] (sua espinha dorsal diagnóstica de [[knowledge-tracing|rastreamento de conhecimento]] e modelagem do estudante) e da [[generative-ai|IA generativa]]/[[llm|LLM]] (seu motor de entrega). Eles operacionalizam [[scaffolding|andaimes]] e [[feedback|feedback]], visam a [[metacognition|metacognição]] e a [[self-regulated-learning|aprendizagem autorregulada]], e visam cada vez mais a [[collaborative-learning|aprendizagem colaborativa]]. Preocupações de segurança reaparecem ao longo de [[pedagogical-safety|segurança pedagógica]], qualidade de autoria e o risco de que agentes [[cognitive-offloading|descarreguem]] a aprendizagem em vez de apoiá-la. Tudo isso é avaliado por meio de [[ai-ed-evaluation|avaliação em AIED]] e [[benchmark|benchmarks]] que precisam medir o ensino, não apenas a resolução.

Crucialmente, os agentes pedagógicos são julgados por seus [[learning-gains|ganhos de aprendizagem]], e não por quão fluentemente respondem. A evidência desta base de conhecimento é de que os agentes produzem ganhos duráveis quando desenhados como treinadores específicos de tutoria com salvaguardas — [[stanford-evidence-base-ai-k12-2026|a IA específica de tutoria supera consistentemente os chatbots de uso geral]] — e podem prejudicar a aprendizagem quando substituem o esforço de quem aprende ([[generative-ai-guardrails-harm-learning|o RCT de salvaguardas]], [[jost-llm-programming-education-learning-outcomes|dependência de LLM e notas]]). Medir os [[learning-gains|ganhos de aprendizagem]] de um agente exige, portanto, medidas de desfecho sem assistência e transferíveis, e não desempenho dentro da ferramenta.


Melhor feedback não é o mesmo que melhor aprendizagem: customizar um agente com bases de conhecimento e um fluxo de trabalho elevou a precisão e a especificidade do feedback, mas deixou comportamentos autorregulatórios, experiências de aprendizagem e desfechos inalterados, e sua vantagem de ganho apareceu apenas sob feedback diretivo ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

## Conceitos conectados

- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## Artigos conectados
- [[wang-teacher-student-centered-agents-physics-2026]] — O papel de agente centrado no estudante supera o papel centrado no professor em desempenho, carga, fluxo e empatia (Wang et al. 2026)
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME: framework conceitual para agentes pedagógicos em RA/RV — tutor vs. parceiro de dramatização de papéis, realismo, presença, carga cognitiva (Ross & Kaspar 2026)
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim: agentes de estudantes generativos para prática instrucional
- [[conversational-ai-agents-umbrella-review-2026]] — Revisão guarda-chuva de agentes conversacionais de IA na educação
- [[conversational-agents-novice-programmers-scoping-2025]] — Revisão de escopo de agentes conversacionais para programadores novatos
- [[ba-ai-agents-cscl-review-2026]] — Revisão de agentes de IA na aprendizagem colaborativa apoiada por computador
- [[kim-ai-productive-failure-adult-2026]] — Desenhando sistemas de IA para apoiar a aprendizagem baseada em fracasso produtivo
- [[preferred-scaffolding-ai-mathematical-modeling]] — Andaimes preferidos na modelagem matemática apoiada por IA
- [[llm-adaptive-programming-error-explanations-2026]] — Explicações adaptativas de erros de programação por LLM
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Companheiro de IA adaptativo ao papel para roda de leitura no ensino fundamental; teto afetivo de agentes de papel fixo (Liao 2026)
- [[ethics-training-agents-group-ethics-discussion-2026]] — Agentes de Treinamento em Ética: facilitando a educação em ética baseada em grupos com dramatização e discussão para reflexão e exploração éticas

- [[teachers-configure-educational-chatbots-2026]] — Vai ensinar como pretendido? Como professores configuram chatbots educacionais de IA

- [[agent-type-feedback-style-self-directed-learning-2026]] — O agente customizado elevou a qualidade do feedback, mas não a autorregulação nem os desfechos; vantagem de ganho apenas sob feedback diretivo

- [[generative-ai]]
