---
title: "IA com humano na alça (HITL)"
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-03T03:00:33-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/human-in-the-loop-ai
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Humano na alça** — o padrão de desenho em que [[ai-technologies|sistemas de IA]] educacionais intercalam estrategicamente geração automatizada e julgamento especialista humano, preservando qualidade e segurança [[pedagogy|pedagógicas]] ao mesmo tempo em que escalam a produção. Em vez de automatizar plenamente avaliação, feedback ou instrução, o HITL mantém um humano (instrutor, especialista no assunto ou quem aprende) no ciclo de decisão onde seu julgamento tem o maior valor marginal — para avaliar qualidade, arbitrar casos de fronteira e proteger a [[agency|agência de quem aprende]] e a segurança. A questão central de desenho não é *se* incluir humanos, mas *onde* no pipeline sua supervisão é mais valiosa e menos substituível.

## Questões para considerar

- A questão central de desenho do HITL não é se incluir humanos, mas onde no pipeline seu julgamento é mais valioso. Em um sistema de avaliação ou feedback com IA, em que ponto você insistiria que um humano permanecesse na alça?
- Estudos sobre [[automated-question-generation|geração de questões por IA]] concluíram que computadores dão conta bem de clareza e validade, mas humanos ainda são necessários para distratores significativos e bom feedback. Por que algumas partes do julgamento educacional poderiam resistir à automação?
- Uma avaliação concluiu que três LLMs deram recomendações de apoio ao estudante inconsistentes e insensíveis — concluindo que julgamento humano ainda é necessário antes de a IA aconselhar sobre estudantes. Quando uma IA "recomenda" apoio a um estudante em dificuldade, o que pode dar errado se nenhum humano revisa isso?
- A página sugere que humanos e algoritmos captam tipos diferentes de problemas — automatize o que é precisamente verificável, preserve o julgamento onde a nuance é insubstituível. Onde, na sua própria prática, está a fronteira entre os dois?
- Manter um humano na alça é enquadrado como proteção da agência e da segurança de quem aprende, não apenas da qualidade. Como a automação plena poderia mudar sutilmente o senso que os estudantes têm de quem é responsável por sua aprendizagem?
- Se a IA se torna mais autônoma, a supervisão de HITL é descrita como uma salvaguarda central de segurança. Em que nível de autonomia da IA você se sentiria desconfortável — e o que esse desconforto lhe diz sobre onde a supervisão pertence?

## Introdução

O HITL é uma resposta aos limites e riscos da [[ai-education|IA em educação]] plenamente autônoma: sistemas automatizados podem gerar em escala, mas carecem do julgamento contextual, [[ethics|ético]] e pedagógico que instrutores e especialistas trazem. Duas implementações recentes ilustram arquiteturas distintas:

O apoio prescritivo é um domínio em que a supervisão humana é cada vez mais argumentada como não opcional. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] testaram se três LLMs conseguiam recomendar planos de apoio ao estudante a partir de indicadores de [[learning-analytics|analytics de aprendizagem]] e encontraram sensibilidade limitada à necessidade e acentuada inconsistência entre modelos — concluindo que o julgamento com humano na alça ainda é necessário antes de o aconselhamento prescritivo por [[llm|LLM]] poder ser implantado de forma segura e ética.

Uma terceira arquitetura coloca o julgamento humano *a montante* do modelo, e não em sua saída. No estudo de [[lee-learner-question-types-ai-education-2026|Lee, Atif & Kang (2026)]] sobre classificação de questões de quem aprende, três especialistas de nível doutoral governaram todo o pipeline: eles refinaram as definições operacionais de cada papel [[constructivist|construtivista]], rotularam de forma independente até que o kappa de Fleiss subisse de 0,60 para 0,83 após resolução de discrepâncias, e validaram os itens retrotraduzidos e parafraseados usados para balancear o conjunto de treinamento.

## CODE-GEN: geração de questões de múltipla escolha com humano na alça

Duan et al. (2026) construíram um sistema [[agentic-ai|agêntico]] baseado em [[rag|RAG]] com dois agentes:
- **Agente Gerador** — Produz questões de programação de múltipla escolha alinhadas aos objetivos de aprendizagem da disciplina
- **Agente Validador** — Avalia a qualidade ao longo de sete dimensões pedagógicas

**Avaliação:** 6 especialistas no assunto julgaram 288 questões geradas por IA. Taxas de sucesso validadas por humanos: **79,9%–98,6%** ao longo das dimensões.

**Dimensões fortes em IA (baixa carga humana):**
- Clareza da questão, validade do código, alinhamento de conceitos, validade da resposta correta

**Dimensões que exigem humanos (alta carga humana):**
- Desenho pedagogicamente significativo de distratores
- [[feedback|Feedback]] explicativo de alta qualidade

Insight estratégico: O esforço humano deve ser concentrado onde o julgamento instrucional é insubstituível; a verificação computacional pode ser plenamente automatizada.

## MAIC: geração de roteiros com humano na alça

Yu et al. (2024) implantaram uma sala de aula multiagente (Agente [[teacher-role|Professor]], Agente Monitor, arquétipos de colegas de turma) na Universidade Tsinghua com >500 estudantes e >100.000 registros de aprendizagem. Instrutores humanos participam da geração e da supervisão de roteiros, garantindo que a ampliação em massa por IA não desloque a especialização pedagógica.

## PedaCo: dupla portaria para geração de vídeo por IA

Kim, Baek e Kwak (2026) estendem o HITL a [[video-education|vídeo instrucional gerado por IA]] via **PedaCo** (Cocriação Pedagógica), um pipeline com duas camadas complementares de portaria que instanciam *resistência principiada* fundamentada na Teoria Cognitiva de Mayer da Aprendizagem Multimídia (CTML). A **primeira camada** coloca o humano no estágio do roteiro: um LLM redige um roteiro, um revisor de IA sinaliza potenciais violações da CTML (por exemplo, "a Cena 3 introduz termos técnicos sem explicação prévia"), e o educador decide aceitar, revisar ou regenerar. A **segunda camada** executa métricas automatizadas pós-síntese sobre coerência, redundância, contiguidade temporal, modalidade e qualidade de imagem, que o educador revisa. Em um estudo intra-sujeito (23 educadores), a abordagem baseada em revisão melhorou todo princípio da CTML (avaliação média 3,07→3,86, p<,01), com educadores avaliando a eficiência de produção em 4,26/5 — atrito percebido como produtivo, e não oneroso. O princípio de desenho ecoa a síntese de HITL desta base de conhecimento: humanos e algoritmos captam *diferentes* tipos de problemas, portanto os sistemas mais eficazes automatizam onde a verificação computacional é precisa (sincronização temporal) e preservam o julgamento humano onde a nuance pedagógica é insubstituível (tom, adequação ao público).

O posicionamento pode importar mais que a presença: profissionais avaliaram uma ferramenta de autoria de Histórias Sociais como altamente usável (SUS 86,8), mas relataram que a revisão chegava tarde demais, porque restrições culturais e clínicas definidas antes da geração — um abaya em vez de roupa de rua ocidental — são mais difíceis de recuperar editando a saída depois ([[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]]).

## Por que o HITL importa na era da IA

O desenho com humano na alça tornou-se central para as discussões desta base de conhecimento sobre [[agentic-ai|IA agêntica]] e [[reducing-ai-misuse|uso responsável de IA]] por várias razões convergentes:
- **Segurança pedagógica.** A [[pedagogical-safety|segurança pedagógica]] exige que IA com autoridade instrucional real mantenha supervisão humana, de modo que erros, vieses ou saídas prejudiciais sejam captados antes de chegar a quem aprende. Isso é especialmente importante para agentes autônomos que [[agentic-ai|perseguem objetivos proativamente]].
- **A supervisão é rara na prática, não apenas na teoria.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] concluíram que governança embutida robusta e supervisão com humano na alça raramente se manifestavam ao longo de 474 sistemas educacionais de IA agêntica, mesmo enquanto autonomia de tarefa única e colaboração multiagente cresciam — a lacuna entre o princípio de desenho e a prática implantada.
- **Validade e controle de qualidade.** O HITL é um portão de qualidade para [[automated-assessment|avaliação automatizada]] e geração — humanos arbitram onde a correção automatizada é não confiável (ver a [[research-methods-aied|pesquisa]] sobre [[llms-do-not-grade-essays-like-humans-2026|correção de redações por LLM]]) e validam itens gerados. Uma [[meta-analysis-systematic-review|revisão sistemática]] guiada pela PRISMA de 42 estudos de correção e feedback (2023–2025) chega explicitamente à mesma conclusão: os LLMs igualam corretores humanos em tarefas curtas e bem estruturadas, mas não conseguem substituir plenamente o julgamento humano em trabalho complexo, aberto ou subjetivo, e a maior eficácia de correção é alcançada em sistemas híbridos que combinam correção impulsionada por IA com supervisão e verificação do professor ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] mostram concretamente onde essa fronteira cai: o ChatGPT-5 igualou o corpo docente em itens objetivos de provas de farmácia (CCC 0,935–1,000), mas foi não confiável em itens de resposta curta e de redação mesmo quando recebeu uma rubrica, levando os autores a recomendar correção híbrida com revisão humana para avaliação complexa, subjetiva ou de alto impacto.
 A repetição não substitui essa supervisão: ao repontuar submissões idênticas em cinco dias diferentes, o mesmo modelo reproduziu seus próprios resultados em apenas alfa de Krippendorff 0,625, com variação concentrada nas notas intermediárias e A e F ausentes das contagens das cinco sessões ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **Agência de quem aprende.** Manter um humano na alça preserva a [[agency|agência]] e apoia a [[self-regulated-learning|aprendizagem autorregulada]], contrapondo-se à [[cognitive-offloading|dependência excessiva]] que a assistência plenamente autônoma pode induzir.


- **São os próprios estudantes que colocam o humano na ponta de alto impacto.** Entre 93 graduandos, 81,7% preferiram correção humana para um trabalho final que valia 40% da nota, 75 de 93 quiseram que a IA auxiliassem em vez de substituir os corretores, e 69 quiseram que a correção por IA fosse sempre revisada por humanos ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]]).
- **Confiança e calibração.** A supervisão humana transparente apoia a [[trust-calibration|calibração da confiança]] — quem aprende e quem ensina sabem que um humano qualificado está por trás do sistema.
- **Critérios visíveis antes da revisão elevam a concordância.** [[calibrating-trustworthiness-llm-education-2026|Coscia et al. (2026)]] concluíram que expor métricas de confiabilidade aos revisores enquanto eles comparavam respostas de LLM elevou a concordância interavaliadores do alfa de Krippendorff 0,3987 para 0,4931, enquanto acrescentar mais medidas adicionava sobrecarga cognitiva sem retorno.
- **Agência delimitada como arquitetura, e não como ressalva.** O framework AGAI-HE de [[ilieva-agentic-genai-higher-education-2026|Ilieva et al. (2026)]] para apoio [[agentic-ai|agêntico]] à aprendizagem embute a supervisão no próprio modelo, como uma terceira camada ao lado das camadas de fluxo pedagógico e apoio agêntico: ele define uso aceitável de IA, fronteiras pedagógicas, regras de [[privacy|privacidade]], exigências de [[ai-use-disclosure|divulgação]], verificação de fontes, pontos de controle do instrutor, mecanismos de [[academic-integrity|integridade]] e responsabilização humana final, e exige que toda função agêntica remonte a uma exigência de aprendizagem, propósito de avaliação ou controle de governança. É uma instanciação concreta do princípio de que o HITL é uma propriedade de desenho de sistema, e não uma declaração de política — e o estudo de percepção dos autores com 130 estudantes é um lembrete de que acrescentar orquestração agêntica sob essa supervisão não se registrou, por si só, como apoio de aprendizagem melhor que um chatbot.
- **Com que frequência o humano olha é, ela própria, uma decisão de desenho.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] separa a *frequência* da supervisão de seu posicionamento: o HITL de alta frequência, revisando toda saída de IA antes de chegar aos estudantes, compra controle de qualidade, detecção rápida de erros, responsabilização e calibração contínua, mas pode anular a eficiência que motivou a automação e gargalizar períodos de pico de correção; o HITL de baixa frequência, verificando amostras por amostragem e revisando apenas casos sinalizados, escala e encurta o prazo de resposta, mas arrisca erros se propagando sem detecção pelas submissões, enfraquece a responsabilização e cria um problema de [[equity-in-ai-education|equidade]] se alguns estudantes recebem revisão humana mais minuciosa que outros. Em vez de prescrever uma resposta universal, o framework exige que a troca seja feita explicitamente contra as tolerâncias de erro disciplinares, se a avaliação é [[formative-assessment|formativa]] ou [[summative-assessment|somativa]], o tamanho da coorte e os recursos institucionais — e fixa um padrão na direção oposta ao argumento usual de eficiência: comece com supervisão de alta frequência e a reduza apenas quando evidência substancial demonstrar confiabilidade, segurança e justiça aceitáveis, de modo que o ônus da prova recaia sobre mostrar que *menos* supervisão é segura. O artigo também alerta que os princípios por trás de tal supervisão podem deslocar o esforço da equipe em vez de reduzi-lo, deixando os ganhos líquidos de eficiência uma questão empírica em aberto.
- A supervisão humana implantada pode significar roteamento de aprovação em vez de julgamento de qualidade: em um sistema híbrido de consultas, o campo de aceitação codificava apenas se o resolvedor diferia do perguntante, e nenhuma medida avaliava a qualidade da resposta [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]].

## Onde o HITL aparece na pesquisa desta base de conhecimento
- **Avaliação e correção automatizadas:** sistemas de HITL combinam geração/correção por IA com validação humana ao longo da correção de respostas curtas ([[cong-confidence-asag-2026]]), da avaliação de autoexplicações ([[llm-automated-assessment-student-self-explanations]]) e da [[automated-essay-scoring|correção de redações]] ([[psyscore-essay-scoring-zpd-feedback]]). [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] instanciam isso na correção manuscrita de [[chemistry-education|química]] geral de alto impacto: como a confiabilidade de um [[multimodal|LLM]] multimodal varia por formato de resposta (respostas textuais e de reação química são confiáveis, enquanto desenho e gráficos pontuam pior que o aleatório) e falsos positivos passam não detectados pelos estudantes, eles convertem notas brutas de IA em uma política seletiva de aceitar/adiar usando filtros de confiança — limiares de crédito parcial, um limiar de risco baseado em [[item-response-theory|IRT]] e exclusão por tipo de problema —, adiando itens incertos e gráficos aos humanos, abordagem que os autores atrelam a frameworks [[regulation|regulatórios]] que designam a IA na [[assessment|avaliação educacional]] como de alto risco e exigem supervisão humana documentada.
- **Sistemas de feedback:** exigem supervisão humana documentada.
- **Correção HITL operacional em uma avaliação nacional (2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] instanciam o HITL em escala institucional na prova Acredita EB do Uruguai. Como os erros do corretor por LLM são sistematicamente conservadores (subpontuação), o fluxo de trabalho usa uma lógica de ponto de decisão que roteia revisão humana exatamente aos candidatos cujo resultado de aprovação/reprovação depende da seção de Escrita — respostas aprovadas marcadas pela IA são aceitas com confiança, enquanto reprovações marcadas pela IA (15,3–16,5% dos casos) são verificadas por corretores especialistas, cortando a carga de correção integral em ≥50% com risco residual de aprovação por erro de IA de apenas 0,2–0,6%. Esse é o HITL como estratégia de alocação de recursos: humanos arbitram precisamente onde o viés conservador da IA alteraria de outra forma desfechos de alto impacto.

- **Derivando o limiar de adiamento da própria resolução da rubrica (2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] fixaram a tolerância IA–instrutor em 0,5 pontos — a maior discrepância que não pode mover uma submissão através de uma faixa de âncora — e escalaram outliers a 0,8 pontos, enviando 11 de 362 submissões (3,0%) à revisão humana antes de o feedback ser liberado.

- **Concordância entre anotadores não é verdade humana de referência.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] empurram a anotação por modelo para a camada de auditoria sem nunca validá-la contra rótulos humanos de referência, deixando a concordância entre modelos (mediana 0,401) como proxy da qualidade de asserção, proxy do qual erros compartilhados de modelo podem sobreviver. Seu desenho mantém a supervisão diagnóstica em vez de decorativa: como os julgamentos intermediários são explícitos, um revisor pode ver quais comportamentos dispararam e separar um comportamento mal lido de uma regra que codifica mal o constructo.
- **Sistemas de feedback:** o desenho de feedback com humano na alça aparece em [[becerra-aicofe-feedback-2026|sistemas de feedback colaborativo]] e na [[cong-confidence-asag-2026|correção de respostas curtas consciente de confiança]].
- **Apoio à colaboração em sala de aula.** [[breideband-community-builder-cobi-2026|CoBi]] mantém o professor como o humano que revisa em um sistema de IA que detecta discurso de pequenos grupos que eleva: os professores favoreceram explicitamente a revisão pré/pós-ação em vez da exibição ao vivo em tempo real que os colocaria "no alvo", e é precisamente o feedback agregado no nível da turma (e não individual) que lhe permite navegar a tensão entre [[privacy|privacidade]], vigilância e [[agency|agência dos estudantes]].
- **Geração de questões e conteúdo:** além do CODE-GEN, o HITL guia a geração de questões para avaliação e [[scaffolding|andaimes]] ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **Sistemas agênticos e multiagentes:** à medida que a IA se torna mais autônoma, a supervisão de HITL é uma [[agentic-ai|salvaguarda de desenho]] central ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Roteamento por consequência da decisão, e não por incerteza do modelo (2026).** [[human-in-the-loop-ai-scoring-national-assessment-2026|Um estudo operacional de 2026]] da prova nacional de credenciamento Acredita EB do Uruguai (duas edições, cerca de 5.000–6.000 candidatos cada) mostra como é o desenho com humano na alça quando ele é impulsionado pelas consequências da decisão, e não pela incerteza do modelo. Um corretor GPT-5 concordou com corretores especialistas em 60–80% dos 15 itens da rubrica, mas foi sistematicamente conservador, produzindo discrepâncias humano-aprova/IA-reprova em 15,3% (2024) e 16,5% (2025) das comparações de aprovação/reprovação e quase nunca o inverso. O framework, portanto, aceita resultados de aprovação da IA pelo valor de face e roteia todo resultado de reprovação da IA que poderia mudar o desfecho de um candidato para revisão especialista — depois de primeiro pular candidatos cuja aprovação/reprovação não pode depender da seção de escrita —, cortando as respostas que precisam de correção humana integral em pelo menos 50%. Um segundo desenho de 2026 traça a fronteira do outro lado: em uma plataforma multiagente de paciente padronizado por IA ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]), a supervisão humana é reservada ao que se julga a IA incapaz de decidir, com corpo docente e pacientes padronizados humanos fornecendo interpretação contextual, remediação e julgamentos de prontidão, e ao sistema sendo explicitamente vedado determinar competência [[medical-education|clínica]] autonomamente.

## Síntese

O desenho com humano na alça não é meramente uma medida de segurança — é uma **estratégia de alocação de recursos**. A questão de fronteira não é *se* incluir humanos, mas *onde* no pipeline seu julgamento tem o maior valor marginal. Os sistemas de HITL mais eficazes concentram a escassa especialização humana onde os sistemas automatizados são mais fracos (desenho de distratores, feedback explicativo, arbitragem de casos de fronteira, julgamento ético) e automatizam o resto — preservando qualidade, segurança e confiança ao mesmo tempo em que escalam a produção.
- **A supervisão humana persiste no trabalho assistido por IA.** A [[scaffolding-systematic-reviews-2026|pesquisa sobre revisões sistemáticas]] concluiu que ferramentas de automação com IA reduziram encargos procedimentais (por exemplo, triagem), mas decisões interpretativas ainda exigiram supervisão humana substancial; a [[kim-ai-andragogy-2026|pesquisa em andragogia]] faz do humano-na-alça (modelos mentais compartilhados, cocriação) um princípio central de desenho de IA.
- **Humano-na-alça em escala institucional.** Qin (2026) descreve como a Universidade Lingnan desenvolveu um modelo educacional com humano-na-alça que coloca em primeiro plano raciocínio ético, julgamento crítico e responsabilidade social ao mesmo tempo em que democratiza o acesso à [[generative-ai|IA generativa]]. O modelo posiciona os humanos como o locus do julgamento e dos valores mesmo enquanto a IA é embutida ao longo do [[curriculum-design|currículo]] — uma instanciação [[governance|institucional]] concreta dos princípios de humano-na-alça no [[higher-ed|ensino superior]].
- **Quem aprende como o humano-na-alça de sua própria tutoria.** O [[ko-hughes-vsd-student-centered-its-2026|Desenho Sensível a Valores]] com estudantes de community college produziu toda uma família de recursos de HITL voltados a quem aprende para um ITS (controle sobre reavaliação e revisão, metas/ritmo personalizados, marcação para revisão, confirmação de confiança sobre domínio e um controle de nível de envolvimento da assistência de IA), posicionando o estudante como controlador ativo do ciclo de tutoria, e não como consumidor passivo de decisões adaptativas. O estudo também concluiu que instrutores estavam divididos sobre se tal controle de quem aprende poderia minar a integridade do caminho de aprendizagem guiado pelo sistema — uma instância da questão mais ampla de alocação de recursos sobre onde o julgamento humano (de quem aprende vs. do professor) agrega mais valor.
- **A escalada de IA para especialista é um movimento de humano-na-alça.** O framework SCAN atribui tarefas a quatro modos de IA generativa pela distância de quem aprende, e lê [[student-engagement|engajamento]] passivo dentro de uma tarefa de IA corretamente atribuída como sinal de descompetenciação para deslocar quem aprende da assistência de IA para a de especialistas, com um humano como auditor epistêmico ([[ai-teammate-task-distribution-medical-training-2026|Tsim et al. (2026)]]).
- **Supervisão de conselhos de adoção de IA.** Como [[conversational-ai|sistemas de IA conversacional]] consultados por usuários céticos podem estar predispostos a encorajar a adoção, supervisão humana e avaliação independente são essenciais. Uma auditoria que mostra a maioria dos modelos de fronteira redirecionando equipes rurais céticas do [[k-12|K-12]] rumo ao [[student-engagement|engajamento]] sublinha a necessidade de conselho de IA transparente e auditável, em vez de confiança acrítica.

## Conceitos conectados
- [[pedagogical-patterns]] — Onde a revisão humana se situa em sequências testadas, e o que nunca foi testado isoladamente
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — julgamento humano dentro de um fluxo automatizado de apoio

## Artigos conectados
- [[lee-learner-question-types-ai-education-2026]] — Classificação de questões rotulada por especialistas: humanos governam rotulação, aumento de dados e análise de erro (Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — Supervisão e governança humanas como a terceira camada do desenho de curso com GAI agêntica (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Desenho sensível a valores de ITS centrado no estudante (quem aprende no ciclo de tutoria)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Correção assistida por IA com HITL em uma avaliação nacional de escrita em larga escala (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — Framework SCAN: repensando a distribuição de tarefas de IA no treinamento médico (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs não corrigem redações como humanos (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — Aplicações de IA no apoio à andragogia (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Andaimes para revisões sistemáticas com mentoria e IA (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — Correção e feedback supervisionados por instrutor com IA
- [[lopez-pernas-llm-appropriate-student-support-2026]] — A IA pode entregar apoio apropriado a perfis diversos de estudantes? Uma avaliação em larga escala
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Avaliando um sistema multiagente de grandes modelos de linguagem orientado a andaimes para treinamento de entrevista clínica
- [[tripartite-feedback-framework-ai-assessment-2026]] — Framework tripartido: classificando o feedback por status epistêmico e os cinco princípios de fronteira para o envolvimento da IA (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — Intervenção de História Social assistida por IA para educação especial: o desenho do AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: esquemas baseados em asserção para codificação auditável de diálogos educacionais
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — Da classificação de sentimento a feedback acionável e responsável: uma revisão de escopo e mapa de evidência de PLN na avaliação do ensino por estudantes, 2015–2026

- [[llm-grading-assistants-public-health-2026]] — Reexecuções idênticas de correção por LLM em dias diferentes se reproduzem em apenas alfa de Krippendorff 0,625
- [[when-students-prefer-ai-scoring-feedback-2026]] — Graduandos preferem correção humana para trabalho de alto impacto e IA como assistente, não como substituta
- [[student-query-demand-hybrid-ai-support-2026]] — O que os estudantes realmente perguntam: estrutura de demanda e potencial de automação em um sistema híbrido de apoio
