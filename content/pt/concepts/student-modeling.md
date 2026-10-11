---
title: "Modelagem de quem aprende e instrução adaptativa"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, simulating-students, student-modeling]
confidence: high
translation_of: concepts/student-modeling
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

> **Modelagem de quem aprene e instrução adaptativa** — o guarda-chuva para como a IA representa quem aprene (o que sabe, sente e precisa) e como usa essas representações para adaptar o [[teacher-role|ensino]]. A família abrange a camada de *modelagem* — **modelagem do estudante**, [[knowledge-tracing|rastreamento de conhecimento]], [[cognitive-diagnosis|diagnóstico cognitivo]] e [[simulating-students|simulação de estudantes]] — e os *sistemas adaptativos* que consomem esses modelos — [[intelligent-tutoring|tutoria inteligente]], [[adaptive-learning|aprendizagem adaptativa]] e [[personalized-learning|aprendizagem personalizada]]. A questão compartilhada: *como um sistema sabe o que quem aprene sabe, e o que deveria ensinar em seguida?*

## Perguntas para refletir

- A questão guarda-chuva que esta página coloca é: como um sistema sabe o que quem aprene sabe, e o que deveria ensinar em seguida? Antes de continuar a leitura, como você começaria a representar \"o que quem aprene sabe\" em uma máquina?
- A modelagem de quem aprene abrange rastreamento de conhecimento (rastrear o conhecimento ao longo do tempo), diagnóstico cognitivo (mapear habilidades dominadas) e simulação de estudantes (aprendentes sintéticos). O que você acha que cada abordagem faz bem — e o que cada uma arrisca errar?
- Toda IA adaptativa depende de algum modelo de quem aprene. Se um modelo é tão bom quanto a evidência que o alimenta, que evidência você acha que os sistemas de IA realmente têm sobre um estudante, e que coisas importantes sobre ele permanecem invisíveis?
- Um modelo pode capturar o que um estudante acerta e erra, mas não por quê, nem como se sente. Como um modelo de quem aprene poderia enganar um sistema adaptativo de formas que prejudicam, em vez de ajudar, o estudante?
- Se você estivesse desenhando um tutor adaptativo, o que você gostaria que o modelo que ele tem de você incluísse — e o que você gostaria que lhe fosse explicitamente proibido presumir?

## Introdução

A modelagem de quem aprene é a representação computacional de quem aprene; a instrução adaptativa é o que os sistemas fazem com essa representação. Toda IA adaptativa na educação depende de algum modelo de quem aprene — mesmo um leve — e todo modelo de quem aprene existe para informar alguma decisão instrucional. Esta página é o guarda-chuva para esse pipeline: os métodos de modelagem, os sistemas que agem sobre modelos, e como eles se relacionam.

## A camada de modelagem

Esses conceitos respondem \"o que quem aprene sabe, sente e precisa?\" — o lado da representação da família.

- **modelagem do estudante** — a prática ampla de representar características de quem aprene (conhecimento, habilidades, estados [[affective-computing|afetivos]], [[student-engagement|engajamento]], preferências) de forma computacional. É o termo guarda-chuva dentro desta camada, abrangendo todas as formas de representar quem aprene.
- **[[knowledge-tracing|rastreamento de conhecimento]]** — a prática específica de modelar o conhecimento cognitivo *ao longo do tempo* rastreando o desempenho em exercícios e prevendo o domínio futuro. Ele formaliza a dinâmica temporal da aprendizagem — quando o conhecimento é ganho, decai, e como os conceitos se relacionam.
- **[[cognitive-diagnosis|diagnóstico cognitivo]]** — [[assessment|avaliação]] refinada de quais habilidades ou componentes de conhecimento específicos quem aprene dominou, produzindo um perfil de domínio que apoia a remediação direcionada.
- **[[simulating-students|simulação de estudantes]]** — gerar aprendentes *sintéticos* sob demanda, em vez de representar um real, para que a [[pedagogy|pedagogia]] e os sistemas de IA possam ser testados ou treinados offline.
- **Um formalismo causal para modelos de quem aprene.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] substituem redes bayesianas de portão ruidoso por modelos causais estruturais elicitados de especialistas, tornando as dicas variáveis endógenas explícitas, de modo que o modelo pode perguntar o que um estudante teria respondido sem a ajuda que usou — ligeiramente menos preditivo, mas capaz de contrafactuais que modelos associativos não conseguem expressar.

O estudo de [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] ilustra que a representação fiel não exige a família de modelos mais complexa: um modelo de estudante leve e intrinsecamente interpretável baseado em árvore de decisão — construído a partir de características de interação com o conteúdo do curso, e não de telemetria rica — prediz o progresso no nível do módulo em cursos online de [[cs-education|programação]] em grande escala (85–91% de precisão) e separa perfis de [[student-engagement|engajamento]] desengajado em risco, desengajado mas bem-sucedido, e engajado de alto desempenho, apoiando o alerta precoce de [[learning-analytics|learning analytics]] em escala.

Um modelo preditivo de quem aprene pode repousar sobre a estrutura da matrícula, e não sobre dados de rastro: o TRACE codifica cada semestre como uma cesta desordenada de cursos e prevê o conjunto de cursos e as notas juntos, reduzindo o erro de previsão de notas para 0,1339 de MAE — 46,4% abaixo de um modelo apenas com notas — ao longo de 5.326 estudantes e dez anos ([[trace-course-grade-prediction-2026|Savala (2026)]]).

Os modelos de estudante também podem ser construídos puramente a partir de rastros comportamentais e ainda assim apoiar a adaptação. [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] derivaram três perfis de engajamento — Observação, Construção e Exploração — dos clickstreams de 315 aprendentes online construindo 822 modelos ecológicos no VERA, sem nenhum dado demográfico ou contextual, e mostraram que esses perfis predizem a qualidade do modelo (a Exploração produz os modelos mais complexos e diversos, enquanto a Observação é dominada por modelos copiados, e não originais). Tais caracterizações no nível do engajamento são os modelos de estudante granulares que a camada de [[adaptive-learning|instrução adaptativa]] pode consumir para direcionar o feedback.

A modelagem afetiva do estudante é uma dimensão adicional: um tutor de matemática inferiu emoção a partir de texto conversacional e expressão facial e mapeou o estado agregado a estratégias de tutoria, mas a fusão multimodal alcançou apenas 60% de precisão contra as próprias anotações dos participantes, tornando a leitura do afeto o elo mais fraco do pipeline ([[kar-mathbuddy-affective-math-tutoring-2025|Kar et al. (2025)]]).

[[cross-subject-validity-delayed-start|Gutterman et al. (2026)]] concluíram que um sinal de início atrasado registrado durante a prática de matemática previu resultados em inglês, com procrastinadores crônicos (mais de 13 minutos) mostrando ganhos menores (ELA β = -.11 DP), mesmo após controlar por [[prior-knowledge|conhecimento prévio]] e tempo na tarefa — então os modelos comportamentais de estudante podem se transferir entre matérias sem retreinamento por curso, embora seus pontos de corte precisem ser re-derivados.

## A camada de instrução adaptativa

Esses conceitos respondem \"o que deveria ser ensinado em seguida?\" — o lado da aplicação que consome modelos de quem aprene.

- **[[intelligent-tutoring|tutoria inteligente]]** — sistemas que usam modelos de estudante e estimativas de domínio para selecionar problemas e oferecer orientação no nível do passo, a aplicação clássica da modelagem de quem aprene.
- **[[adaptive-learning|aprendizagem adaptativa]]** — sistemas que ajustam conteúdo, ritmo ou dificuldade em resposta ao modelo de quem aprene.
- **[[personalized-learning|aprendizagem personalizada]]** — a adequação mais ampla da instrução, do conteúdo e das trajetórias às características e preferências individuais de quem aprene.

## Como os membros se relacionam

Os conceitos formam um pipeline, e não competidores: a **modelagem do estudante** é a representação guarda-chuva; o [[knowledge-tracing|rastreamento de conhecimento]] e o [[cognitive-diagnosis|diagnóstico cognitivo]] são métodos específicos de modelagem que a populam; a [[simulating-students|simulação]] *gera* aprendentes, em vez de representar os reais; e a [[intelligent-tutoring|tutoria inteligente]], a [[adaptive-learning|aprendizagem adaptativa]] e a [[personalized-learning|aprendizagem personalizada]] são os sistemas que consomem esses modelos para adaptar a instrução.

**Modelagem do estudante versus simulação de estudantes** é a distinção-chave a manter em mente. A modelagem do estudante diz respeito a **representar quem aprene real** — construir um modelo *a partir* dos dados reais de um estudante, para que um sistema adaptativo possa agir sobre esse indivíduo. A simulação de estudantes, em contrapartida, **gera um aprendente sintético** sob demanda para substituir aprendentes reais, de modo que a pedagogia e a IA possam ser avaliadas ou treinadas offline. As duas estão intimamente relacionadas, e não são intercambiáveis: estudantes simulados tipicamente *embutem* um modelo de estudante (um estado epistêmico, um conjunto de [[misconceptions|equívocos]] ou um perfil de engajamento) e recorrem aos mesmos construtos que o [[knowledge-tracing|rastreamento de conhecimento]] e o [[cognitive-diagnosis|diagnóstico cognitivo]] formalizam. Seus propósitos divergem — a modelagem do estudante serve à adaptação ao vivo ao informar decisões sobre uma pessoa real, enquanto a [[simulation|simulação]] fabrica aprendentes para testar sistemas (e, cada vez mais, para auditar a IA, por exemplo, [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]) em vez de para agir sobre qualquer indivíduo real.

**Rastreamento de conhecimento versus modelagem do estudante** é a outra confusão comum. O rastreamento de conhecimento modela especificamente o conhecimento cognitivo ao longo do tempo; a modelagem do estudante é a prática mais ampla, que abrange todos os aspectos de quem aprene (estado afetivo, engajamento, preferências). O rastreamento de conhecimento é um *tipo de* modelagem do estudante focado na dimensão cognitivo-temporal. Os construtos de rastreamento de conhecimento também informam os [[simulating-students|estudantes simulados]] — o estado cognitivo de um aprendente simulado é frequentemente formalizado com as mesmas dinâmicas de domínio/decadência que os modelos de rastreamento de conhecimento modelam, então a simulação é uma forma de *gerar* os estados de conhecimento que os métodos de rastreamento normalmente *inferem* de dados reais de resposta.

**Ancorar o rastreamento ao [[curriculum-design|currículo]] fortalece o modelo.** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] mostram que um modelo de quem aprene ganha fidelidade quando o rastreamento é atrelado a uma estrutura curricular explícita, em vez de ser aprendido puramente a partir dos dados: o Outcome-Based Knowledge Tracing (OKT) deles trata os resultados de cursos em Educação Baseada em Resultados como os conceitos de conhecimento a rastrear, fornece relações entre conceitos por meio de \"mapeamentos de afinidade\" OBE validados por especialistas entre resultados de curso e de programa (uma alternativa explícita à atenção implícita ou à passagem de mensagens por grafos), e usa um módulo aumentado por memória para modelar como a obtenção de um resultado impacta os outros. Em dados vivos de programa de engenharia, ele superou as linhas de base DKT, DKVMN, EKT e SimpleKT (89,81% de AUC), ilustrando que a camada de modelagem pode explorar a própria estrutura do currículo para representar quem aprene de forma mais fiel.

**Tutoria inteligente versus aprendizagem adaptativa/personalizada** fica no lado da aplicação: a tutoria inteligente é o sistema que seleciona problemas e dá orientação no nível do passo; a aprendizagem adaptativa ajusta conteúdo e ritmo; a aprendizagem personalizada é a adequação mais ampla de toda a experiência de aprendizagem. As três são as \"consumidoras\" da camada de modelagem.

## O desafio de validade compartilhado

Ao longo de toda a família, o desafio de validade que define é o mesmo: a representação de quem aprene precisa **refletir fielmente o verdadeiro estado de quem aprene**, e não as suposições padrão do sistema. Para a **modelagem do estudante** e o [[knowledge-tracing|rastreamento de conhecimento]], isso significa que o modelo precisa capturar genuinamente o que quem aprene sabe ([[ai-ed-evaluation|avaliação]] e [[assessment-validity|validade da mensuração]]). Para a [[simulating-students|simulação]], significa que o aprendente sintético precisa exibir imperfeição realista, e não a competência plena do modelo nem a concordância [[ai-sycophancy|sicofântica]]. Sistemas adaptativos que consomem modelos defeituosos herdam e propagam esse erro.


Modelos que inferem o estado de quem aprene a partir de jogabilidade alcançaram AUCs de 0,848–0,913, mas apenas dois dos 55 estudos revisados auditaram-nos quanto a viés demográfico, e apenas um examinou resultados diferenciais por habilidade de quem aprene ([[ai-game-based-learning-systematic-review-2026|Kaşarcı e Yurt (2026)]]).

Alguns sinais pretendidos podem não ser recuperáveis do diálogo de forma alguma: o piloto do framework Learning Context recuperou equívocos em 91,4% e ansiedade em 100%, mas conscienciosidade em apenas 68,6% e proficiência linguística em 60%, então um modelo consciente do contexto deveria capturar traços de superfície lenta, em vez de esperar que o diálogo os exponha ([[learning-context-framework-context-aware-ai-education-2026|Liu et al. (2026)]]).

[[edumirror-educational-social-dynamics|Lin et al. (2026)]] expõem uma circularidade em como tais aprendentes sintéticos são validados: seus agentes EduMirror administram questionários psicométricos post hoc e leem a concordância com a representação de valor interna do agente como validade psicológica, mas, como o Surveyor mede dimensões já codificadas nesse sistema de valor, a verificação é uma verificação de consistência, e não uma validação independente.

**A correção nem sempre é um sinal fiel.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] mostram que um modelo de quem aprene que infere domínio a partir de ações corretas pode deturpar o verdadeiro estado de quem aprene: quem aprene que exibe *generalização excessiva enganosa* parece ter dominado, mas omite uma restrição crítica de aplicação, então os sistemas adaptativos podem encerrar a prática prematuramente. Os modelos de quem aprene deveriam avaliar a compreensão condicional — incluindo se quem aprene sabe quando reter uma ação —, e não apenas a correção da ação.

Os equívocos ocultos mostram a mesma falha pelo outro lado: [[correct-answer-trap-misconceptions|Imran e Bulathwela (2026)]] concluíram que um classificador ajustado capturou 57,4% das respostas corretas alcançadas por raciocínio falho, e, a uma prevalência de 1,6%, mesmo um modelo de raciocínio com 83,6% de precisão deixava 8 alarmes falsos por detecção — então os sinais de domínio baseados em correção são ao mesmo tempo incompletos e caros de reparar.

**Como um modelo é validado é, ele mesmo, uma questão de validade.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan e Carvalho (2025)]] mostram que modelos populares de quem aprene (BKT, BKT-com-Esquecimento, AFM) parecem capturar a aprendizagem humana apenas quando ajustados retroativamente a um conjunto de dados completo de múltiplas sessões; sob validação cruzada temporal (walk-forward) — prevendo uma sessão futura a partir das anteriores, como tais modelos são de fato implantados — eles superestimam o desempenho, não capturam o [[retrieval-spacing-interleaving|efeito de espaçamento]] e desordenam as condições de prática. Como os modelos aumentados por esquecimento e os livres de esquecimento tiveram desempenho aproximadamente igual ao longo das sessões, os autores concluem que o esquecimento é frequentemente absorvido em parâmetros de quem aprene, e não genuinamente representado. A lição para a família é que uma representação fiel de quem aprene precisa ser validada da forma como é usada — e que confundir desempenho no momento com retenção de longo prazo produz modelos que parecem precisos, mas deturpam quem aprene.

## Modelagem na era das LLMs

Avanços recentes usam [[llm|LLMs]] para modelagem mais rica. O [[xie-hillm-cd-2026|framework HiLLM-CD]] representa estudantes como árvores de proficiência; [[multimodal-knowledge-graph-educational-reasoning|abordagens multimodais]] constroem representações de conhecimento fundamentadas em evidência a partir de fontes de dados diversas; [[inside-llm-student-simulator-reasoning-2026|as LLMs agora simulam estudantes com raciocínio]]. As LLMs viabilizam a construção automatizada de modelos a partir de texto educacional e a [[simulating-students|simulação de estudantes]] de maior fidelidade, reduzindo a dependência de anotação por especialistas — ao mesmo tempo que aguçam as preocupações de fidelidade acima. Os sinais de modelo de quem aprene também *fundamentam* o raciocínio das LLMs: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] concluíram que alimentar o GPT-4 com a estimativa de habilidade de [[knowledge-tracing|rastreamento de conhecimento]] bayesiano de um estudante, junto com a estrutura da interface do tutor, melhorou acentuadamente seu diagnóstico de erros (a identificação de erro lógico subiu de 40% para 81% na fatoração; ~87,8% no geral), enquanto problemas de múltiplos passos e respostas contendo vários erros permaneceram os casos mais fracos — evidência de que acoplar um modelo formal de quem aprene a uma LLM fortalece, mas não garante, inferência sólida sobre um estudante real. O [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] mostra como é uma versão persistente desse acoplamento: domínio e equívocos minerados são armazenados por (aprendente, matéria), e não como registros por sessão, de modo que a evidência se acumula ao longo das sessões, e a memória é escrita por uma função de observação avaliada por LLM, ao mesmo tempo que permanece inspecionável por quem aprene por meio de barras de domínio e de um rótulo que nomeia o que cada questão gerada foi escolhida para sondar. Seus controles tornam explícita a etapa de escrita — com a memória lida, mas não mais atualizada, a parcela de itens voltados a uma habilidade genuinamente fraca caiu de 0,72 para 0,57 — e ele mantém intacta a ressalva desta página: o domínio armazenado é a crença do agente sobre quem aprene, e não uma mensuração de seu conhecimento.

A linguagem pode substituir os embeddings de ID como representação: o PLCD constrói esquemas de conceitos derivados de LLM e grafos de processo de exercício como prioris, alcançando 83,51% de precisão no XES3G5M, com os maiores ganhos em início frio — 4,60 pontos de ACC sobre o KCD para novos conceitos e 4,00 para novos exercícios — onde os modelos baseados em ID não têm histórico ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).


A qualidade do simulador se separa em dois eixos: um pipeline de primeiro especializar no conjunto que treina padrões comportamentais compartilhados antes de um adaptador por estudante alcançou fidelidade comportamental de 0,51 e responsividade à orientação de 0,91 no xadrez, contra 0,23 e 0,72 para uma linha de base de representação de papel de fronteira, mostrando que um simulador precisa tanto corresponder a um estudante quanto ser dirigível ([[studentsim-llm-student-simulators|Yang et al. (2026)]]).

Pontuações de risco podem ser precisas e ainda assim não sustentadas: [[at-risk-students-ml-prediction|Gheisari e Salarian (2026)]] alcançaram 99% de precisão prevendo abandono a partir de registros de matrícula e de desempenho, mas sobre os 1.027 registros limpos de uma única instituição, sem validação externa, sem intervenção testada e com auditorias de equidade nomeadas como trabalho futuro — a pontuação apoia a triagem, não um veredicto sobre um estudante.


Um modelo de quem aprene que apenas prediz risco não basta para apoio à decisão: acoplar um modelo calibrado de risco a recurso por programação inteira sobre ações discretas — validado contra restrições de tempo, orçamento, imutabilidade e disponibilidade — produziu planos de intervenção compactos, onde a otimização isoladamente aceitava os inaplicáveis ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge (2026)]]).

Um estimador de caixa preta também pode ser destilado em um modelo pequeno autoexplicativo: um pipeline de dois estágios transforma um estimador ajustado e sua interpretação post hoc em um \"mentorizado" de 2B de parâmetros que devolve uma estimativa junto com uma narração, auditada por fidelidade, e não por fluência ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## Conexões com outros conceitos

A modelagem de quem aprene e a instrução adaptativa alimentam os [[learning-analytics|learning analytics]] ([[visualization|painéis]] e intervenções), a [[formative-assessment|avaliação formativa]] (avaliação orientada por analytics) e o [[feedback|feedback]] (o que o sistema diz a quem aprene). Ela se conecta à [[ai-education|IA na educação]] como uma vertente central da IA para a educação.

## Conceitos conectados

- [[learners]] — Quem aprene: o guarda-chuva dos conceitos do lado de quem aprene
- [[explainable-ai]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[llm]]
- [[higher-ed]]
- [[ai-education]]
- [[simulating-students]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — os modelos sob a previsão de risco e a direção do apoio

## Artigos conectados
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Generalização excessiva enganosa: o domínio adaptativo pode encerrar a prática antes que quem aprene saiba quando reter uma ação (An, McLaren & Stamper 2026)
- [[causal-modeling-competency-assessment-2026]] — Modelagem Causal de Intervenções de Apoio para a Avaliação de Competência dos Estudantes
- [[turano-ai-tutoring-not-a-monolith-2026]] — A Tutoria por IA Não É um Monólito: O Que Realmente Sabemos (briefing do Stanford SCALE/NSSA)
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[yasir-llm-tutoring-agents-2026]] — Tutores de LLM rejeitam demais o válido-alternativo e validam demais o incorreto (Yasir et al. 2026)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[at-risk-students-ml-prediction]]
- [[correct-answer-trap-misconceptions]]
- [[cross-subject-validity-delayed-start]]
- [[edumirror-educational-social-dynamics]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[xie-hillm-cd-2026]]
- [[inside-llm-student-simulator-reasoning-2026]]
- [[trace-course-grade-prediction-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — Da Previsão de Risco do Estudante ao SC2R: Recurso Contrafactual
- [[graph-its-adaptive-algorithms-2026]] — Tutoria Inteligente Baseada em Grafos para Domínios Dinâmicos (2026)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilando uma LM autoexplicativa para learning analytics
- [[studentsim-llm-student-simulators]] — StudentSim: Treinando Simuladores de Estudante Baseados em LLM
- [[predicting-attrition-competitive-programming]] — Prevendo o Abandono de Estudantes na Programação Competitiva
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Rastreamento de conhecimento baseado em resultados com mapeamento de afinidade
- [[an-goel-self-directed-modeling-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Além dos Embeddings de ID: Modelagem de Linguagem Fundamentada no Processo para Diagnóstico Cognitivo
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — estado compacto de quem aprene mais um rastreador calibrado como ambiente de recomendação
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: Um Tutor Agêntico que Aprende sobre Quem Aprende em um Ciclo de Coaprendizagem Humano–IA

- [[ai-game-based-learning-systematic-review-2026]] — A avaliação furtiva alcançou AUCs de 0,848–0,913, mas as auditorias de viés eram quase ausentes ao longo de 55 estudos
