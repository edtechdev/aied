---
connected_resources: [idstack, lesson-md, master-instructional-design]
title: Avaliação
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-09T08:42:20-04:00"
connected_faqs: [redesign-assessment-ai-era, reduce-ai-cheating, course-ai-policy, group-work-ai, asynchronous-online-courses-ai]
type: concept
foundations: [academic-integrity]
technology: [generative-ai, learning-analytics]
assessment: [assessment, assessment-validity, automated-assessment, educational-measurement, formative-assessment, process-oriented-assessment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/assessment
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

> **Avaliação** — o processo de coletar e interpretar evidências sobre o que os estudantes sabem e podem fazer, e os métodos usados para avaliar a aprendizagem. A [[ai-education|IA na educação]] remodelou fundamentalmente a avaliação: ela alimenta a [[automated-assessment|correção e a pontuação automatizadas]], gera e adapta itens de avaliação, e levanta questões profundas sobre o que as avaliações realmente medem quando os estudantes podem usar a IA. A avaliação é o conceito guarda-chuva que organiza a cobertura da base de conhecimento sobre [[formative-assessment|avaliação formativa]], [[automated-assessment|correção automatizada]], [[assessment-validity|validade]] e [[educational-measurement|mensuração educacional]].

## Perguntas para refletir

- A avaliação é definida aqui como coletar e interpretar evidências sobre o que os estudantes sabem e podem fazer. Antes de ler, como você completaria a frase "uma avaliação é válida se…" — e o que mudaria nessa resposta se cada estudante pudesse secretamente usar a IA para produzir seu trabalho?
- A página afirma que *como* um estudante usa a IA generativa (integração avaliativa versus adoção acrítica de atalhos) previu o desempenho, enquanto *com que frequência* ele a usou não previu nada. O que isso sugere sobre o instinto comum de regular a IA limitando seu uso?
- Um estudante pode entregar um trabalho de padrão profissional que não consegue reproduzir sem a ferramenta — rompendo a inferência entre desempenho e habilidade subjacente. Você já encontrou uma "competência" sendo concedida por um trabalho que o estudante não conseguia realmente fazer sem ajuda? O que isso revelou?
- A pergunta construtiva que a página oferece não é "como impedimos os estudantes de usar a IA?", mas "como os capacitamos a usá-la com reflexão em contextos que espelham seu trabalho futuro?". Como seria a avaliação no seu campo se esse fosse o objetivo?
- O framework DRIVE sugere avaliar a qualidade do [[student-engagement|engajamento]] do estudante com a IA generativa — e não apenas o artefato — observando se ele conduz os prompts de forma estratégica e integra suas próprias ideias. Em que você olharia para distinguir uma [[student-ai-interaction|interação profunda e reflexiva com a IA]] de um consumo superficial?
- A avaliação mediada por IA está se diversificando em [[oral-assessment|provas orais]], portfólios e formatos conversacionais que reduzem a ansiedade e parecem profissionalmente relevantes. Qual formato de avaliação da sua própria experiência você acha mais "resistente à IA" — e resistência é a mesma coisa que valor educacional?

## Introdução

A avaliação é central na IA na educação por duas razões. Primeiro, a própria IA é usada para avaliar os estudantes — corrigindo redações, código, respostas curtas e provas em escala. Segundo, a IA na sala de aula muda o que as avaliações podem medir validamente, já que os estudantes podem usar [[generative-ai|IA generativa]] para produzir trabalho. O campo abrange portanto tanto as *ferramentas* que automatizam a avaliação quanto as questões de *validade e integridade* que a IA levanta.

## Como a IA é usada na avaliação

- **Avaliação automatizada:** a [[automated-assessment|avaliação baseada em IA]] abrange múltiplas modalidades — múltipla escolha, resposta curta, redação, código e avaliação baseada em desempenho — por meio de [[automated-assessment|correção automatizada]], [[automated-essay-scoring|correção automatizada de redações]] e [[automated-question-generation|geração automatizada de questões]].
- **Avaliação formativa:** os [[formative-assessment|sistemas de IA]] geram, validam e adaptam itens de avaliação formativa em escala, informando a instrução em curso em vez de apenas a avaliação [[summative-assessment|somativa]].
- **Analítica de aprendizagem e mensuração:** a [[learning-analytics|analítica de aprendizagem]] e a [[educational-measurement|mensuração educacional]] conectam os dados de avaliação aos processos de aprendizagem, usando [[item-response-theory|teoria de resposta ao item]], [[knowledge-tracing|rastreamento de conhecimento]] e [[student-modeling|modelagem do estudante]] para interpretar o desempenho. [[razavi-powers-item-difficulty-llm-2026|Razavi e Powers (2026)]] demonstram a estimação de dificuldade de itens baseada em LLM como uma entrada de mensuração: ao longo de 5.170 itens de matemática e leitura do K-5 calibrados sob o modelo Rasch de IRT, as pontuações zero-shot do GPT-4o correlacionaram-se de moderada a fortemente com as dificuldades reais (r = 0,83 em matemática, r = 0,81 em leitura), mas variaram por série, enquanto uma abordagem baseada em atributos (atributos extraídos por LLM em modelos baseados em árvores) alcançou correlações de até r = 0,87. O estudo oferece um fluxo de trabalho prático de sete passos para profissionais de testes, advertindo que a generalização além da matemática e da leitura do K-5 é incerta.
- **Ciclos de feedback:** a avaliação por IA alimenta cada vez mais [[feedback|ciclos de feedback]] que fecham o ciclo da avaliação para a aprendizagem.
- **Avaliação por e-portfólio:** os [[eportfolio|e-portfólios]] reúnem trabalhos e reflexões do estudante ao longo do tempo como uma forma de avaliação baseada em processo e robusta à IA. A IA generativa pode auxiliar no *processo* do portfólio — gerando feedback, [[scaffolding|andaimentando]] a reflexão e (com desenho de rubrica adequado) apoiando a avaliação — enquanto a ênfase do portfólio em rastros de raciocínio e rascunhos resiste à fabricação por IA. A [[ni-lam-multiliteracies-ai-portfolio-2026|avaliação de portfólio assistida por IA]] e o [[sutama-chatgpt-eportfolio-speaking-2026|ChatGPT + e-portfólio para fala em EFL]] mostram que a IA pode realçar tanto a experiência do portfólio quanto o [[feedback-literacy|letramento em feedback]] do estudante.
- **A confiabilidade da correção de itens abertos depende do modelo:** [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko e Drlik (2025)]] submeteram a benchmark onze modelos de IA generativa e de embeddings de frases contra dois corretores especialistas em 1.885 respostas abertas de engenharia de software: apenas o GPTo1 alcançou concordância quase perfeita (Kappa de Fleiss 0,82), enquanto os modelos baseados em referência penalizaram respostas corretas, mas formuladas de modo divergente. Como o GPTo1 foi o único modelo considerado implantável sem supervisão, mas acarreta custos proprietários de API, os autores recomendam estratégias híbridas que pareiem modelos avançados com opções acessíveis ou [[human-in-the-loop-ai|supervisão humana]] em contextos com recursos escassos. Uma [[meta-analysis-systematic-review|revisão sistemática]] guiada pela PRISMA de 42 estudos empíricos (2023–2025) corrobora esse quadro de confiabilidade condicional em todo o campo da correção: os LLMs se equiparam aos avaliadores humanos em tarefas fechadas e de resposta curta, mas não conseguem substituir plenamente o juízo humano em trabalhos complexos, abertos ou subjetivos, e nenhum viés de correção uniforme emergiu — os modelos foram às vezes mais indulgentes, às vezes mais severos, e muitas vezes evitaram pontuações extremas ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). O refinamento iterativo de rubricas pode empurrar a pontuação de itens abertos por LLM para uma confiabilidade quase humana em contextos [[medical-education|médicos]] de alto risco: [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] concluíram que, uma vez que os docentes revisaram repetidamente as rubricas analíticas e holísticas com base na análise de padrões de erro, o GPT-4 alcançou concordância substancial a quase perfeita com os docentes corretores em três de quatro questões pré-clerkship (kappa ponderado de até 0,94), enquanto o item residual de rubrica holística ficou em apenas concordância moderada (κw = 0,54) — mostrando tanto o ganho da engenharia de rubricas com humano no circuito quanto seus limites em tarefas sintéticas e holísticas.
- **Avaliação oral e de desempenho apoiada por IA.** Um estudo de desenho em [[vocational-education|EFPT]] afasta a avaliação dos formatos pesados em texto rumo a uma [[oral-assessment|avaliação oral]] interativa apoiada por um LLM: ao longo de quatro turmas, 21 de 33 estudantes avaliaram a tarefa de voz como realista, e ninguém discordou que falar em tempo real refletia a competência melhor do que um portfólio escrito, enquanto as contagens de palavras para questões idênticas variaram de cinco a oito vezes entre as turmas, e nove estudantes responderam em duas a treze palavras e todos acertaram. O sistema rodava off-line em um único laptop atendendo até 12 estudantes simultâneos com Mistral 7B e faster-whisper, apagava as gravações após 90 dias, e deixava os juízos de pontuação com os avaliadores — uma instância de desenho de avaliação [[human-in-the-loop-ai|com humano no circuito]] para qualificações voltadas ao local de trabalho. ([[ai-supported-oral-assessment-tvet-2026]])

## Desafios de validade e mensuração

A IA levanta questões fundamentais de [[assessment-validity|validade]]: avaliações corrigidas por IA medem a aprendizagem do estudante ou a [[prompt-engineering|habilidade de fazer prompts à IA]]? O uso de IA pelo estudante invalida as avaliações tradicionais? Os desafios centrais incluem:

- **Validade de construto:** [[competency-based-education-genai-production-2026|a pesquisa sobre educação baseada em competências]] mostra que a IA generativa rompeu a inferência entre desempenho e habilidade subjacente — um estudante pode entregar um trabalho de padrão profissional que não consegue reproduzir sem a ferramenta. Isso motiva a reconceituação do que se avalia como competência.
- **Coautoria e integridade:** a [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|integridade de coautoria]] propõe uma nova fonte de evidência de validade, violada quando os estudantes entregam conteúdo gerado por IA que não compreendem, e explora as "AI Vivas" conversacionais como resposta.
- **Qualidade psicométrica:** a [[psychometrically-aware-ai|IA psicometricamente consciente]] e a [[automated-assessment|avaliação com consciência de confiança]] trabalham para manter a pontuação por IA confiável, sem viés e interpretável.
- **Avaliação de avaliadores de IA:** a [[ai-ed-evaluation|avaliação de IA na educação]] oferece os métodos e os [[benchmark|benchmarks]] para determinar se os avaliadores automatizados realmente funcionam — em confiabilidade, [[pedagogy|pedagogia]] e [[equity-in-ai-education|equidade]] —, e não apenas na precisão de manchete.
- **Confiabilidade condicionada à qualidade na correção por IA e por pares (2026):** ao comparar as correções por ChatGPT, por pares e pelo [[teacher-role|professor]] dos mesmos [[group-work|projetos em grupo]] de [[higher-ed|graduação]], [[usher-faraon-who-grades-best-2026|Usher e Faraon (2026)]] mostraram que o alinhamento da correção com o professor é *condicionado pela qualidade do trabalho do estudante*: o ChatGPT inflou mais os trabalhos de baixa qualidade e se alinhou melhor ao professor nos trabalhos de alta qualidade, enquanto os pares se alinharam melhor nos trabalhos mais fracos e subavaliaram os projetos fortes. O achado desafia o enquadramento binário "confiável versus não confiável", apontando para modelos de confiabilidade condicional nos quais avaliadores alternativos são pareados com a tarefa e o nível de desempenho.
- **A correção humana é ela mesma carregada de valores (2026):** [[luo-dawson-value-judgments-grading-2026|Luo e Dawson (2026)]] mostram que mesmo a correção humana de trabalhos assistidos por IA generativa não é um ato neutro e baseado em critérios. Entrevistas baseadas em cenários com 33 professores universitários revelaram decisões de correção movidas por valores orientados à pessoa (honestidade, diligência), orientados à capacidade (independência, habilidade com IA generativa, domínio disciplinar), orientados à relação (confiança) e orientados à justiça (equidade, beneficência) — estendendo-se além da tarefa para a conjectura dos professores sobre o estudante. O estudo reenquadra a questão da avaliação de "o uso de IA generativa é cola?" para "como os juízos de valor dos professores moldam as notas, e esses valores são relevantes aos resultados avaliados?" — colocando em primeiro plano a [[assessment-validity|validade]] e uma "[[explainable-ai|transparência]] de mão dupla" sobre como o uso de IA generativa afetará as notas.

## Integridade e o debate sobre a detecção

A IA na avaliação intensificou a conversa sobre [[academic-integrity|integridade]]. Uma vertente se concentra na [[ai-detection|detecção de texto gerado por IA]], enquanto um corpo crescente de [[research-methods-aied|pesquisa]] argumenta que a detecção é uma ferramenta limitada e situacional — não uma estratégia de primeira instância. [[beyond-detection-authentic-assessment-ai-2025|Beyond Detection]] e [[responsible-assessment-ai-era-stanford-2026|Responsible Assessment]] argumentam que a autenticidade não pode ser policiada até existir; ela precisa ser redesenhada, posicionando a IA como colaboradora declarada e priorizando a avaliação [[authentic-assessment|autêntica]] e [[process-oriented-assessment|baseada em processo]] em vez da vigilância. **[[walton-bearman-assessment-judgment-2025|Walton et al. (2025)]]** fundamentam isso na evidência de **como os estudantes realmente julgam** seu caminho pela avaliação com IA generativa: entrevistas de retrocesso na tela com 26 estudantes revelaram um espectro de seis eventos de julgamento — desde avaliar criticamente o conhecimento da IA e aprender com suas limitações, até adotar ideias de forma acrítica e atribuir erroneamente a si mesmos contribuições da IA. **[[stamatoulis-genai-use-patterns-2026|Stamatoulis et al. (2026)]]** acrescentam uma contrapartida [[quantitative-research|quantitativa]]: ao longo de 157 estudantes, *como* a IA generativa é usada (integração avaliativa para apoiar a compreensão versus adoção de atalhos com baixa verificação) previu o desempenho, enquanto a simples *frequência* de uso **não previu** desempenho nem [[self-efficacy|autoeficácia]] acadêmica. Juntos, esses estudos reenquadram a questão da avaliação de *se* os estudantes usam a IA para *como eles julgam e estruturam esse uso*.
[[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] vão mais longe, argumentando que a detecção não deveria ser usada de modo algum: seu resultado probabilístico não pode ser verificado independentemente porque a origem do texto no mundo real é desconhecida, e as pontuações dos detectores — sozinhas ou acompanhadas de marcadores linguísticos, comparações de estilo, a afirmação de um LLM ou o silêncio do estudante — não atingem o padrão de equilíbrio de probabilidades que as investigações de integridade exigem.

Uma revisão PRISMA de 25 estudos acrescenta um fator de risco que o debate da detecção deixa de fora: falantes não nativos de inglês mostraram alta tendência a violar a integridade ao ter dificuldade de escrever em inglês, de modo que as expectativas de integridade deveriam ser pareadas com apoio concreto à escrita acadêmica, e não apenas com fiscalização ([[ssaho-ai-academic-integrity-review-2025|Balalle e Pannilage (2025)]]).

## O redesenho da avaliação na era da IA

A pergunta construtiva na literatura de avaliação da base de conhecimento não é "como impedimos os estudantes de usar a IA?", mas "como os capacitamos a usá-la com reflexão em contextos que espelham seu trabalho futuro?". Isso reenquadra a avaliação em torno de:

- **Tarefas autênticas e baseadas em processo** que tornam o uso da IA visível e avaliado. A [[authentic-assessment|avaliação autêntica]] — examinar o desempenho do estudante em tarefas dignas e realistas — é a resposta líder ao desafio da IA: qualquer tarefa que um [[llm|LLM]] consiga simular com credibilidade perde sua validade, de modo que a autenticidade precisa ser redesenhada em torno da [[collaborative-learning|colaboração]] em tempo real, da contribuição digital e social e da construção individual de significado. Isso se conecta aos [[zhan-boud-du-authentic-assessment-scoping-review-2025|frameworks de desenho para avaliação autêntica]], aos [[authentic-products-authenticated-processes-2026|produtos autênticos e processos autenticados]] e à [[tool-invariant-framework-agentic-ai|avaliação de processo invariante a ferramentas]].
- **Desenho de avaliação responsável** fundamentado em evidência de validade ([[responsible-assessment-ai-era-stanford-2026]])
- **Permissões de IA no nível da tarefa, derivadas dos alvos de avaliação:** [[mccorkle-aligned-genai-course-policy-2025|McCorkle (2025)]] mostra o trabalho de desenho de avaliação que precede uma [[educational-policy-ai|política de IA]] — inventariar cada tarefa de um projeto, especificar o que está sendo avaliado e contra qual objetivo, e permitir ou proibir a IA por tarefa com base nisso (brainstorming e curadoria de imagens permitidos; redigir objetivos de aprendizagem e desenho de slides, não). O mesmo exercício de alinhamento serve duplamente como verificação da inferência que a avaliação sustenta, porque força o professor a nomear o desempenho que uma nota se destina a garantir ([[assessment-validity|validade da avaliação]]).
- **Avaliação que vai além do modo linguístico:** Jiang et al. (2026) definem o letramento em avaliação multimodal para professores de segunda língua como conhecimento, valor e competência para tarefas que elicitam respostas através dos modos linguístico, visual, auditivo, gestual e espacial. Um programa de um ano com 30 professores de inglês de Hong Kong elevou o conhecimento das estratégias de avaliação de 3,13 para 4,15 em 5 (η² parcial = 0,571) e a competência em apoiar os estudantes de 3,05 para 3,98 (0,482), enquanto os três subdomínios de valor permaneceram estáveis. A experiência dos próprios professores acrescentou duas dimensões ao framework: sustentar a prática contra prioridades curriculares concorrentes e mobilizar a IA generativa de forma crítica ([[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang et al. (2026)]]).
- **Coautoria e declaração** como parte do contrato de avaliação
- **A produção como competência** — avaliar a capacidade dos estudantes de dirigir ferramentas e produzir trabalho de padrão profissional ([[competency-based-education-genai-production-2026]])
- **Avaliar o processo de interação, e não apenas o artefato** — o [[assessing-student-drive-framework-2025|framework DRIVE]] (Directive Reasoning Interaction + Visible Expertise) trata a qualidade do *engajamento do estudante com a IA generativa* como o construto avaliado. Ele distingue o consumo superficial da interação profunda e reflexiva observando se os estudantes conduzem os prompts de forma estratégica (DRI) e integram e desenvolvem suas próprias ideias disciplinares por meio da troca (VE), fundamentando critérios focados no processo em teorias da [[self-directed-learning|aprendizagem autodirigida]] e do engajamento cognitivo na linha da hierarquia do [[icap-framework|ICAP]]. Isso faz do DRIVE um exemplo de *avaliação autêntica mediada por IA* — uma rubrica para avaliar como os estudantes fazem parceria com a IA generativa, e não uma ferramenta de detecção.

Uma proposta desta literatura empurra para além do redesenho dentro do enquadramento atual. [[ai-agents-joyful-assessment-third-space-2026|El Khoury e Ma (2026)]] argumentam que a reforma organizada em torno de prevenir a má conduta ou detectar o uso de IA estreita a imaginação educacional para o controle e a conformidade, e propõem em vez disso a **avaliação prazerosa**: uma avaliação que é segura, emocionalmente responsiva, capacitadora e apoiadora da [[agency|autonomia do estudante]], com a segurança como condição de sustentação porque, sem ela, a sintonia emocional se torna performance, o empoderamento se torna pressão e a autonomia se torna risco. Seu enquadramento inverte a agenda da detecção — a integridade passa a ser consequência de desenhar avaliações que os estudantes *querem* encarar, em vez de seu ponto de partida — e eles posicionam [[agentic-ai|agentes de IA]] construídos por professores (GPTs personalizados, Gems, agentes do Copilot Studio) como um espaço de ensaio de baixo risco onde os estudantes praticam antes do julgamento, com a afirmação de que a IA organiza a evidência enquanto o professor a interpreta.

## Implicações para a IA na educação

- **Avaliação e aprendizagem são inseparáveis:** uma boa avaliação por IA deveria apoiar a aprendizagem ([[feedback|feedback formativo]]) tanto quanto avaliá-la.
- **A validade precisa ser reconceituada:** quando a IA pode produzir o trabalho do estudante, as avaliações precisam medir processos, julgamento e produção autêntica, e não apenas resultados.
- **A automação precisa ser avaliada com rigor:** os avaliadores automatizados precisam de avaliação psicométrica e de [[bias-mitigation|equidade]], e não apenas de afirmações de precisão.
- **A integridade se desloca da detecção para o desenho:** a resposta mais robusta à IA na avaliação é desenhar tarefas em que o uso da IA é esperado, declarado e escrutinado.
- **Práticas inovadoras podem enfrentar vários problemas de uma vez.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais e Galy (2026)]] argumentam que um conjunto de cinco práticas mutuamente reforçadoras — [[authentic-assessment|avaliação autêntica]], auto- e [[peer-assessment|avaliação entre pares]], reavaliação, [[mastery-learning|notas baseadas em padrões]] e desnotar —, alinhado ao paradigma da "avaliação para a aprendizagem", pode neutralizar os danos da correção tradicional, pesada em somatória e referenciada a normas (aprendizagem superficial, [[motivation|motivação]] intrínseca corroída, estresse e ansiedade, iniquidade e [[academic-integrity|integridade]] comprometida) na era da IA generativa. Eles concluem que a adoção é desigual entre os campos — a autoavaliação e a avaliação entre pares dominam, enquanto as inovações focadas em correção permanecem marginais — e instam os educadores a se engajar mais ativa e reciprocamente com a inovação em avaliação e correção, respaldados por experimentação incremental e apoio [[governance|institucional]].
- **A avaliação mediada por IA está se diversificando.** O [[aivaluate-anxiety-assessment-2026|AIvaluate]] mostra que um [[conversational-ai|agente conversacional]] aumentado por LLM reduziu a ansiedade dos estudantes durante avaliações baseadas em desempenho; [[asynchronous-oral-assessment-2026|Pentland (2026)]] conclui que as avaliações orais assíncronas ofereceram maior engajamento e foram percebidas como profissionalmente relevantes; os [[graph-its-adaptive-algorithms-2026|ITS baseados em grafos]] usam rastreamento adaptativo do estado de conhecimento para informar a avaliação.

## Conceitos conectados

- [[learners]] — Estudantes: o guarda-chuva dos conceitos do lado do estudante
- [[pedagogical-partnerships]] — Parcerias pedagógicas
- [[formative-assessment]] — Avaliação formativa: itens gerados, validados e adaptados por IA em escala
- [[automated-assessment]] — Correção e pontuação automatizadas através das modalidades de avaliação
- [[authentic-assessment]] — Tarefas autênticas baseadas em processo e robustas à IA
- [[assessment-validity]] — Validade das avaliações sob a IA generativa
- [[educational-measurement]] — Teoria da mensuração que sustenta a avaliação por IA
- [[automated-essay-scoring]] — Correção automatizada de redações
- [[automated-question-generation]] — Geração automatizada de questões
- [[oral-assessment]] — Avaliação oral: formatos ao vivo e gravados que resistem à substituição por IA
- [[summative-assessment]] — Avaliação somativa: formatos resistentes à IA (oral, com supervisão, livros fechados)
- [[item-response-theory]] — IRT para interpretar as respostas de avaliação na era da IA
- [[psychometrically-aware-ai]] — Pontuação por IA psicometricamente consciente
- [[learning-analytics]] — Analítica conectando os dados de avaliação à aprendizagem
- [[feedback]] — Ciclos de feedback fechando o ciclo da avaliação para a aprendizagem
- [[feedback-literacy]] — Letramento em feedback do estudante
- [[academic-integrity]] — Integridade e o debate sobre a detecção de IA
- [[ai-detection]] — Detecção de texto gerado por IA
- [[ai-ed-evaluation]] — Métodos e benchmarks para avaliar avaliadores automatizados
- [[eportfolio]] — Avaliação por e-portfólio baseada em processo
- [[speech-and-voice-technologies]]
- [[peer-assessment]]

## Artigos conectados

- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — Um programa de um ano que define o letramento em avaliação multimodal e mede o que se moveu, e o que não
- [[ai-agents-joyful-assessment-third-space-2026]] — Agentes de IA, avaliação prazerosa e terceiro espaço
- [[mccorkle-aligned-genai-course-policy-2025]] — Permissões de IA no nível da tarefa derivadas do que é avaliado (McCorkle 2025)
- [[usher-faraon-who-grades-best-2026]] — Comparando as correções por ChatGPT, por pares e pelo professor através dos níveis de qualidade do projeto (Usher & Faraon 2026)
- [[responsible-assessment-ai-era-stanford-2026]] — Avaliação responsável na era da IA
- [[beyond-detection-authentic-assessment-ai-2025]] — Além da detecção: avaliação autêntica
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Integridade de coautoria e validade da avaliação
- [[competency-based-education-genai-production-2026]] — Educação baseada em competências depois da IA generativa
- [[genai-assessment-governance]] — Governança centrada em evidência da IA generativa na avaliação
- [[ssaho-ai-academic-integrity-review-2025]] — Revisão de integridade em IA: a detecção precisa parear com o redesenho da avaliação
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: avaliação da ansiedade do estudante aumentada por LLM (2026)
- [[graph-its-adaptive-algorithms-2026]] — Tutoria inteligente baseada em grafos para domínios dinâmicos (2026)
- [[asynchronous-oral-assessment-2026]] — Avaliações orais assíncronas na era da IA (Pentland 2026)
- [[assessing-student-drive-framework-2025]] — DRIVE: avaliando a aprendizagem através da interação com IA generativa (DRI + Visible Expertise)
- [[walton-bearman-assessment-judgment-2025]] — O julgamento no trabalho dos estudantes com IA generativa em tarefas de avaliação (26 estudantes, retrocesso na tela)
- [[stamatoulis-genai-use-patterns-2026]] — Padrões de uso de IA generativa (integração avaliativa versus adoção com baixa verificação) e resultados
- [[luo-dawson-value-judgments-grading-2026]] — Juízos de valor na correção de trabalhos assistidos por IA generativa: honestidade, confiança, validade e transparência de mão dupla (Luo & Dawson 2026)
- [[razavi-powers-item-difficulty-llm-2026]] — Estimando a dificuldade de itens com LLMs e ML baseado em árvores
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Relato de um workshop on-line sobre avaliação em computação na era da IA generativa
