---
title: Cognição distribuída
created: "2026-08-16T09:22:41-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [agency, cognitive-offloading, human-ai-collaboration]
pedagogy: [distributed-cognition, embodied-learning, learning-theories, metacognition, situated-learning]
confidence: high
translation_of: concepts/distributed-cognition
source_updated: "2026-10-26T08:20:00-04:00"
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

> **Cognição distribuída** — a perspectiva teórica de que a cognição não está confinada a uma mente individual, mas distribuída por pessoas, ferramentas, artefatos e ambientes. Na [[research-methods-aied|pesquisa]] sobre IA na educação, esse framework tornou-se central para entender a [[human-ai-collaboration|colaboração humano–IA]]: em vez de ver a IA como uma ferramenta neutra que apoia um estudante de outro modo autossuficiente, a cognição distribuída trata o pensamento como emergente do interjogo entre estudantes, sistemas de IA, colegas e seu contexto compartilhado. Ela reformula questões de [[agency|agência]], responsabilidade e [[learning-gains|resultados de aprendizagem]] em termos de como o trabalho cognitivo é repartido por um sistema humano–IA.

## Perguntas para refletir

- A cognição distribuída diz que o pensamento não está confinado a uma única mente, mas espalhado por pessoas, ferramentas e ambientes. Quando você usa uma calculadora, um app de notas ou um assistente de IA, onde o \"pensamento\" de fato acontece?
- Se a cognição está distribuída por um humano e uma IA, quem é responsável quando o resultado está errado — e quem responde pela aprendizagem?
- Um framework distingue a \"agência funcional\" da IA (ela pode influenciar resultados) da \"responsabilidade moral\" (que permanece humana). Essa distinção se sustenta na prática, ou a responsabilidade se embaralha quando os humanos não conseguem entender o que o sistema fez?
- Sistemas humano-IA que distribuem o raciocínio de forma mais eficiente tendem a produzir o maior desempenho em tarefas, mas a menor [[self-regulated-learning|aprendizagem autorregulada]]. Por que tornar um sistema \"mais inteligente\" no nível do grupo deixaria o estudante individual mais fraco?
- O argumento dos \"Bens Comuns Cognitivos\" sustenta que a maestria distribuída depende de expertise internalizada — você não consegue supervisionar eficazmente um sistema de IA que não compreende profundamente. Como isso desafia a ideia de que a IA nos permite pular o trabalho duro da aprendizagem?

## Introdução

Este é um conceito de teoria da aprendizagem dentro da vertente de [[learning-theories|teorias da aprendizagem]] da base de conhecimento, intimamente relacionado a [[embodied-learning|aprendizagem incorporada]], [[situated-learning|aprendizagem situada]] e [[cognitive-offloading|offloading cognitivo]]. A cognição distribuída (DCog), originária do trabalho de Edwin Hutchins e colegas, descreve como processos cognitivos como memória, raciocínio e [[problem-solving|resolução de problemas]] se espalham por múltiplos agentes e sistemas materiais, em vez de residirem numa única cabeça. Na [[ai-education|educação em IA]], isso importa porque os sistemas de IA funcionam cada vez mais como parceiros cognitivos genuínos que carregam parte da carga de pensamento, levantando a questão de *onde* a aprendizagem de fato acontece e *quem* é responsável.

### Como a IA desloca a distribuição da cognição

Sistemas de IA generativos e interativos redistribuem o trabalho cognitivo de formas que ferramentas anteriores não conseguiam. A base de conhecimento documenta várias dimensões desse deslocamento:

- **A IA como parceira cognitiva e correguladora.** A IA pode atuar como [[scaffolding|scaffold]], apoio metacognitivo, sistema de memória externa e parceira de decisão na co[[regulation|regulação]] do pensamento e da aprendizagem.([[ai-cognitive-partner-co-regulation-learning]]) Isso posiciona a cognição como corregulada entre estudante e sistema, e não gerenciada individualmente.
- **O volume de uso da IA não revela qual forma de trabalho distribuído está acontecendo:** [[cognitive-offloading-llm-synthesis-writing|Poquet et al. (2026)]] constataram que os perfis baseados em volume de 97 aprendizes diferiam em conhecimento prévio e autoria, mas não no prompting de papel ativo ou de nível de compreensão, de modo que atividade compartilhada e divisão do trabalho podem acompanhar a mesma quantidade de uso.
- **Redistribuição de agência e responsabilidade.** Frameworks como a **cognição de conjunto** (ensemble cognition) reconceitualizam o pensamento como emergente da interação dinâmica entre humano e [[student-ai-interaction|IA]], distinguindo a *agência funcional* da IA (sua capacidade de influenciar resultados sem consciência) da *responsabilidade moral* (que permanece humana).([[ensemble-cognition-philosophy-ai-education]]) A cognição distribuída reformula assim quem responde pela aprendizagem.
- **A tensão entre eficiência e regulação.** O trabalho empírico mostra um trade-off: sistemas humano–IA que distribuem o raciocínio de forma mais eficiente (ex., via raciocínio delegado) alcançam desempenho mais alto em tarefas, mas podem reduzir o [[student-engagement|engajamento]] autorregulatório dos estudantes.([[hao-human-ai-collaborative-problem-solving-cognition]]) Essa é a face empírica dos riscos de [[cognitive-offloading|offloading cognitivo]] e de [[cognitive-offloading|Excesso de Dependência]] que a base de conhecimento documenta.
- **Mediação na colaboração.** A IA pode atuar como *mediador [[pedagogy|pedagógico]]* que orquestra a interação, a construção de sentido epistêmico e os processos regulatórios na [[collaborative-learning|aprendizagem colaborativa]], redistribuindo agência, autoridade e responsabilidade entre atores humanos e não humanos.([[niari-ai-pedagogical-mediator-collaborative-learning]])
- **A configuração do acesso distribui a cognição dentro do grupo.** [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] mostram que *como* uma equipe compartilha a GenAI determina a distribuição da cognição: o trabalho sincronizado numa única interface compartilhada sustenta um modelo cognitivo comum (prompts coletivos, memória externa compartilhada), enquanto o uso privado e assíncrono o fragmenta, com as saídas sendo seletivamente re-rotuladas antes do compartilhamento. A GenAI funciona assim tanto como participante cognitiva distribuída quanto como espaço colaborativo interativo cuja permeabilidade precisa ser desenhada (o contexto compartilhado flui para dentro, as ideias privadas não fluem automaticemente de volta).
- **Os professores também vivenciam distribuição dominada pela IA versus complementar.** A mesma lógica de eficiência–regulação se aplica ao lado docente do desenho de aula: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] descobriram que professores novatos delegam uma grande parte da carga cognitiva do desenho instrucional ao sistema de IA (uma distribuição dominada pela IA, em grande parte aceitando as respostas), enquanto professores experientes e proficientes em IA alcançam uma distribuição complementar em que a expertise pedagógica e o apoio computacional da IA se reforçam mutuamente — e, como a [[generative-ai|GenAI]] gera e co-constrói em vez de meramente armazenar informação, eles enquadram isso como *cognição compartilhada participativa*, e não mero uso de ferramenta.
- **Os tipos de interação, não os resultados, como unidade.** [[cognitive-distribution-student-genai-interaction-2026|Willcox, Lane e Arikan (2026)]] construíram o **Framework de Distribuição Cognitiva** a partir de 53 registros de uso autodirigido do ChatGPT: cinco tipos de interação (extensão, terceirização, alinhamento, transformação, desacoplamento) e quatro papéis de usuário, de modo que o mesmo estudante pode fazer offloading numa troca e co-pensar na seguinte.

### Cognição distribuída e perspectivas relacionadas

A base de conhecimento trata a cognição distribuída ao lado de suas tradições teóricas vizinhas, que se sobrepõem mas não são idênticas:

- **[[situated-learning|Aprendizagem situada / cognição situada]]** enfatiza que a cognição e a aprendizagem são inseparáveis do contexto autêntico e das comunidades de prática em que ocorrem — um complemento ao foco da DCog na *distribuição* cognitiva por sistemas.
- **[[embodied-learning|Cognição incorporada]]** acentua o papel do corpo e da interação sensório-motora, argumentando que o pensamento está ancorado no engajamento corporal, e não na manipulação abstrata de símbolos.
- **[[cognitive-offloading|Offloading cognitivo]]** é o mecanismo prático pelo qual o trabalho cognitivo é entregue a sistemas externos (incluindo a IA), e é a contraparte carregada de risco à descrição da DCog.
- **Cognição estendida / a tese da mente estendida** (usada em trabalhos pós-humanistas) sustenta que artefatos externos podem ser partes *constitutivas* de um sistema cognitivo, e não meros instrumentos — uma afirmação mais forte, de que a IA é parte da própria mente do estudante.([[elsayed-pedagogical-symbiosis-posthuman-learner]])

### Por que importa para o desenho e a avaliação da IA

A cognição distribuída fornece tanto uma lente de desenho quanto uma lente de avaliação. Para o desenho, ela pergunta como repartir o trabalho cognitivo entre estudantes e IA para preservar (e não erodir) a agência, a [[metacognition|metacognição]] e a autorregulação do estudante humano. Para a avaliação, ela reformula as métricas de sucesso: em vez de perguntar apenas \"o desempenho melhorou?\", a DCog pergunta se a distribuição da cognição sustenta aprendizagem durável, agência epistêmica e justiça educacional — uma perspectiva que conecta às preocupações de [[ai-ed-evaluation]] e [[learning-theories|teorias da aprendizagem]] da base de conhecimento.

Fowlin et al. (2026) operacionalizam essa repartição como uma sequência de duas fases: construir primeiro as competências centrais sem IA, depois introduzir a IA como parceira cognitiva cujas sugestões os estudantes avaliam criticamente, para prevenir a desqualificação relacionada à automação ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Maestria internalizada versus distribuída.** O framework dos Bens Comuns Cognitivos ([[cognitive-commons-ai-expertise-regeneration|Lovett 2026]]) distingue Maestria Internalizada (conhecimento profundo de domínio em mentes individuais) de Maestria Distribuída (orquestrar sistemas humano–IA) e argumenta que a segunda depende da primeira por meio de uma \"Amarra de Validação\": a supervisão eficaz de sistemas distribuídos/de IA pressupõe a expertise internalizada que esses sistemas podem minar. Isso aguça a questão de desenho da DCog — a distribuição da cognição não pode vir ao custo da expertise que a valida.

## Ideias equivocadas comuns

- **"Um documento compartilhado significa cognição compartilhada."** Perfis baseados em volume de **97 aprendizes** diferiam em **conhecimento prévio e autoria**, mas **não no prompting de papel ativo ou de nível de compreensão**. O volume de participação mediu exposição, não a distribuição do trabalho cognitivo — então a analítica de uso de uma ferramenta colaborativa diz pouco sobre quem estava pensando.
- **"Todo mundo delega à IA da mesma forma."** Professores novatos **delegam uma grande parcela da carga cognitiva do desenho instrucional ao sistema de IA**, chegando a uma **distribuição dominada pela IA** em que aceitam em grande parte as respostas, enquanto professores experientes e com conhecimento de IA distribuem de outro modo. A expertise aparece em onde a carga é colocada, e não apenas em quanto de IA se usa.
- **"Mais envolvimento da IA significa mais apoio."** Uma distribuição dominada pela IA é o padrão a vigiar, porque a parcela humana do trabalho cognitivo encolhe enquanto o volume de produto cresce. O sistema pode parecer mais capaz exatamente quando o usuário está fazendo menos.

## Conceitos conectados

- [[learning-theories]]
- [[cognitive-offloading]]
- [[embodied-learning]]
- [[situated-learning]]
- [[human-ai-collaboration]]
- [[agency]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[constructivist]]
- [[collaborative-learning]]
- [[ai-education]]

## Artigos conectados

- [[hao-human-ai-collaborative-problem-solving-cognition]] — Estudo empírico de resolução de problemas colaborativa humano–IA por uma lente de cognição distribuída + corregulação
- [[niari-ai-pedagogical-mediator-collaborative-learning]] — A IA como mediador pedagógico redistribuindo a cognição por atores humanos e não humanos
- [[ai-cognitive-partner-co-regulation-learning]] — A IA como parceira cognitiva no pensamento corregulado
- [[ensemble-cognition-philosophy-ai-education]] — Framework de Cognição de Conjunto reconceitualizando o pensamento como interação humano–IA
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — Estudante pós-humano com a cognição distribuída por sistemas biológicos e artificiais
- [[fowlin-operationalizing-learning-principles-ai]] — Operacionalizando a cognição distribuída ao lado da aprendizagem experiencial e situada
- [[cognitive-commons-ai-expertise-regeneration]] — A tragédia dos bens comuns cognitivos: IA e regeneração da expertise
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Interação professor-IA no desenho de aula: cognição distribuída dominada pela IA vs. complementar por experiência e proficiência (Choi et al. 2026)
- [[xu-genai-collaborative-space-2026]] — A GenAI como agente e espaço colaborativo: como a configuração do acesso distribui a cognição do grupo (Xu et al. 2026)
- [[cognitive-distribution-student-genai-interaction-2026]] — Framework de Distribuição Cognitiva: cinco tipos de interação e quatro papéis a partir do uso autodirigido do ChatGPT
