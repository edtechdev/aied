---
title: Engenharia de prompts
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-02T08:08:45-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer]
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems, matt-pocock-skills, pedagogical-promptbook, writing-rhetoric-studies-in-the-loop]
translation_of: concepts/prompt-engineering
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Engenharia de prompts** — a prática de desenhar e refinar entradas para grandes modelos de linguagem a fim de obter as saídas desejadas. Na educação, a engenharia de prompts serve a dois papéis: como habilidade de quem aprende (os estudantes precisam aprender a fazer prompts de forma eficaz) e como alavanca de desenho de sistema (os desenvolvedores criam prompts que moldam o comportamento da [[intelligent-tutoring|tutoria com IA]]).

## Perguntas para refletir

- Você provavelmente digitou um prompt em uma ferramenta de IA recentemente. Agora considere isto: a forma como você o formulou não é neutra — ela pode revelar como você planejou, pensou e alocou seu esforço. O que seus próprios hábitos de prompting poderiam dizer sobre como você aborda os problemas?
- Um estudo constatou que usuários que formulam pedidos com habilidade obtêm sistematicamente saída melhor que aqueles que expressam a mesma intenção de forma menos hábil. Se você aceita que o "privilégio de prompt" é real, o acesso justo à IA é melhor corrigido pelo [[teacher-role|ensino]] de todos a fazer prompts melhores, ou por redesenhar o sistema para não exigir essa habilidade — e quais são as compensações de cada abordagem?
- Fazer prompts é um "truque" a ser memorizado, ou uma habilidade intelectual genuína? Uma linha de [[research-methods-aied|pesquisa]] a trata como juízo profissional dentro de uma disciplina (jornalismo, direito, [[medical-education|medicina]]); outra a trata como núcleo do letramento em IA. Qual visão se alinha à sua própria experiência sobre o que de fato separa bons prompts de ruins?
- Prompts bem desenhados podem dar andaimento ao pensamento do estudante, enquanto prompts mal usados podem encorajar o descarregamento cognitivo. Você se lembra de um momento em que uma resposta de IA pensou por você? O que, no prompt — ou na sua intenção — fez isso acontecer, e poderia ter sido desenhado para fazer o oposto?
- Fazer prompts é tanto uma habilidade de quem aprende quanto uma alavanca de desenho de sistema: alguns tutores agora roteiam e selecionam automaticamente os prompts para o usuário. À medida que o prompting passa do usuário para o sistema, o que os estudantes perdem — e o que ganham?
- Defina um pequeno objetivo antes de ler: depois de aprender sobre engenharia de prompts, decida uma forma concreta pela qual você mudará como escreve prompts no seu próprio trabalho, e qual resultado verificará para saber se funcionou.

## Introdução

A engenharia de prompts é central para o uso eficaz de [[generative-ai|IA generativa]] na educação. Diferentemente das interfaces de programação tradicionais, os LLMs respondem a linguagem natural — mas a qualidade, a precisão e o valor [[pedagogy|pedagógico]] dessas respostas dependem fortemente do desenho do prompt. A pesquisa nesta base de conhecimento revela que fazer prompts não é um ato neutro: ele reflete como os estudantes pensam, planejam e alocam esforço cognitivo. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran e Arar (2026)]] afiam o que o termo cobre ao distinguir engenharia de prompts, a otimização técnica das entradas para desempenho, de letramento em prompts, o trabalho retórico, ético e reflexivo de esclarecer o propósito, ler a saída criticamente e revisar com razões declaradas. Seu Ciclo de Letramento em Prompts (Esclarecer o Propósito, Elaborar o Prompt, Engajar-se com a Saída, Refinar o Prompt, Refletir) e uma rubrica de processo de exemplo tornam a distinção ensinável, e eles argumentam que uma instrução que otimiza apenas as saídas deixa intocados as dimensões éticas e epistemológicas do uso de LLM.

### Como a engenharia de prompts aparece na pesquisa

- **O prompting como rastro cognitivo:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]] mostram que os padrões de prompt revelam [[cognitive-offloading|descarregamento cognitivo]] — o trabalho de alta qualidade usa prompts ricos em contexto, educados e instrucionais; o trabalho de baixa qualidade mostra discordância reativa sem ancoragem no domínio
- **A profundidade melhora o produto, não a retenção.** Em 22 pós-graduandos, a parcela de prompts de busca por explicação ("por que/como/explique") previu a qualidade da tarefa marcada independentemente (β = 6,27) além do conhecimento de linha de base e do volume de prompts, mas mostrou associação nula com a recordação imediata ([[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]).
- **A cognição de prompt acompanha a disciplina, não o estudante.** [[student-ai-conversations-cognitive-engagement-2026|Chang e Li (2026)]] classificaram 60.087 prompts de 116 cursos e constataram que os perfis de nível de Bloom diferiam por disciplina — STEM com predomínio de Aplicar (20,8%), ciências sociais com predomínio de Criar (33,8%) —, com a variância no nível do curso excedendo a variância no nível do estudante.
- **O prompting como letramento:** a [[tracing-genai-literacy-interaction-patterns|pesquisa sobre letramento em IA generativa]] e a [[aaai2026-prompting-literacy-k12|pesquisa sobre letramento em prompting no K-12]] enquadram o prompting como um componente central do [[ai-literacy|letramento em IA]]
- **Novatos recorrem por padrão à tentativa e erro, e culpam o modelo.** Em um seminário de linguística textual, dez novatos em IA generativa refinaram prompts por tentativa e erro, raramente recorreram a exemplos no contexto, e atribuíram esmagadoramente as saídas ruins ao LLM, e não à sua própria formulação do prompt ([[llms-text-linguistics-teaching-2026|Brocca & Garassino (2026)]]).
- **Quando o instrutor modela o prompt, os estudantes o reusam literalmente.** Entre 310 prompts gravados de doze grupos de STEAM do ensino fundamental II, a cópia exata da instrução do instrutor foi a postura de estudante mais frequente, com 47,1%, à frente da indagação espontânea, com 28,7% ([[middle-school-genai-steam-interactions-2026|Zhao & Li (2026)]]).
- **Um ciclo regulatório supera uma fórmula de prompt.** Em um piloto quase-experimental com 42 estudantes de graduação, os estudantes ensinados no ciclo IDEA (Intenção, Desconstrução, Expressão, Adaptação) produziram prompts e saídas de maior qualidade que os pares ensinados com prompting de Papel–Tarefa–Contexto–Formato em todas as cinco categorias de tarefa (ganhos ajustados de prompt de +11,77 a +29,19 pontos) ([[idea-framework-metacognitive-genai-2026|Wang et al., 2026]]).
- **O prompting como desenho de sistema:** o [[cotal-formative-assessment-scoring-2026|CoTAL]] usa engenharia de prompts [[human-in-the-loop-ai|com humano no circuito]] para pontuação de [[formative-assessment|avaliação formativa]]; o [[choi-anchor-aes-prompting-2025|prompting baseado em âncoras]] melhora a [[automated-essay-scoring|correção automatizada de redações]]
- **O prompting é a habilidade de entrada, não a disciplina.** Gorsky (2026) enquadra o [[ai-literacy|letramento em IA]] para profissionais de software como a capacidade de gerenciar [[agentic-ai|agentes]], e não de fazer prompts a eles, nomeando enquadramento, especificação, engenharia de contexto, verificação, orquestração multiagente e auditabilidade como as habilidades que um currículo precisa avaliar ([[ase-26-agentic-software-engineering-curriculum|Gorsky (2026)]]).
- **Roteamento adaptativo de prompts:** o [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]] trata a seleção de prompts como parte do próprio sistema de tutoria — roteamento de prompts consciente da disciplina sobre 14 atributos pedagógicos, em que um roteador estocástico seleciona o melhor prompt por conversa. Isso desloca o prompting de uma habilidade de quem aprende para uma alavanca adaptativa de desenho de sistema, melhorando [[student-engagement|engajamento]] e eficiência (28,1% versus 19,6% de conversão de exercícios em um teste A/B no mundo real).
- **Modalidades de prompt:** a [[voice-text-prompt-problems-computing-education|pesquisa sobre entrada por voz versus texto]] examina se a modalidade de prompting afeta os [[learning-gains|resultados de aprendizagem]]
- **O prompting além do texto — ilustração científica.** O prompting consegue gerar figuras de química molecular e física rapidamente, mas uma renderização localmente persuasiva ainda pode estar errada ou carregar viés de representação, de modo que os estudantes precisam interrogar as visualizações geradas por IA contra princípios químicos, em vez de confiar nelas ([[unesco-ai-guidelines-chemical-education-2026|Li et al. (2026)]]).
- **Prompting com andaimento:** o [[guided-llm-scaffolding-independent-learning|andaimento guiado com LLM]] e o [[scaffolding-critical-engagement-genai-minority-students|andaimento ao engajamento crítico]] ensinam o prompting estruturado como uma intervenção de aprendizagem
- **Prompting de coach com apoio que desvanece:** no ARPG+, um coach em tempo real diagnosticava a qualidade do prompt ao longo de seis dimensões e desvanecia o apoio à medida que a competência crescia, elevando a qualidade final do prompt para 7,82, contra 5,95 dos templates estáticos e 4,52 sem assistência ([[ye-arpg-real-time-coaching-llm-prompting-2026|Ye et al. (2026)]]).
- **A decomposição de tarefas tem um ótimo:** gerar lições de treinamento de tutores em três segmentos produziu as lições mais bem avaliadas (média 14,67), enquanto uma passada única pontuou mais baixo (10,67) e cinco segmentos caíram abaixo de três — a decomposição moderada supera ambos os extremos ([[lin-llm-interactive-lesson-generation|Lin et al. (2025)]]).
- **Privilégio de prompt e equidade:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]] mostram que a expertise em prompting está distribuída de forma desigual — usuários que formulam pedidos com habilidade obtêm sistematicamente saída melhor que aqueles que expressam a mesma intenção de forma menos hábil. Seu Transformador de Equidade de Prompt desloca a otimização de prompts do usuário para o sistema de IA, argumentando que a saída [[equity-in-ai-education|equitativa]] deveria ser engenhada no modelo, e não exigida de novatos.
- **O refinamento de prompt estabiliza; a partir daí, o ajuste fino assume.** O desenho iterativo de prompts produziu ganhos decrescentes de qualidade de itens na [[assessment|avaliação]] de compreensão oral em L2, mas o ajuste fino do GPT-4.1 sobre o prompt otimizado — o prompt mantido constante — produziu itens mais fundamentados no contexto e equilibrados, isolando a adaptação do modelo, e não o ofício de prompt, como a próxima alavanca ([[gpt-item-generation-l2-listening-2026|Aryadoust & Wong, 2026)]]).
- **O prompting como juízo profissional [[situated-learning|situado]].** Além do letramento e do desenho de sistema, o prompting pode ser enquadrado como uma *prática disciplinar*. A [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|taxonomia de Dierickx et al.]] para o jornalismo trata a definição de tarefas e o prompting como uma forma de juízo profissional exercido dentro das normas epistêmicas e éticas de um domínio — traduzir o trabalho jornalístico em tarefas explícitas (coleta de notícias → construção de sentido → edição → publicação/distribuição) torna visíveis os pressupostos, as prioridades e as considerações [[ethics|éticas]], e transforma o prompting em uma ferramenta pedagógica para o letramento crítico em IA. Sua lógica se transfere a outras profissões intensivas em conhecimento (direito, medicina, política pública).
- **O desenho de prompt como especificação instrucional.** Neto e colegas (2026) constatam, em sua [[meta-analysis-systematic-review|revisão sistemática]] de IA generativa na educação em saúde, que o desenho de prompts funciona como uma forma de especificação instrucional, codificando os alvos cognitivos e os critérios de qualidade implícitos na autoria especialista —, mas apenas 34,8% dos estudos alinharam o conteúdo gerado a frameworks instrucionais e apenas 34,8% relataram o prompting com detalhe suficiente para reprodução. Looi, Liu e Sun (2026) mostram ainda como a arquitetura de prompts pode embutir regras pedagógicas (portões de correção, fronteiras anti-spoiler, portões de despedida) para restringir o comportamento de tutoria de [[llm|LLM]] em domínios procedurais.
- **Prompting guiado por rubrica e consciente de papéis.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] mostraram que o prompting guiado por rubrica — tratando a rubrica como uma interface semântica entre a intenção pedagógica humana e a inferência da máquina — levou a concordância entre LLM e humanos sobre o trabalho de desenho dos estudantes de 54,75% para 81,25% (Alfa de Cronbach 0,393 → 0,798). As rubricas engenhadas para LLMs precisam equilibrar precisão e flexibilidade: vago demais convida à interpretação livre, rígido demais reduz o modelo a correspondência de padrões. O prompting consciente de papéis — avaliar o mesmo artefato sob prompts de instrutor, de avaliador de pares e de avaliador de projetos — produziu feedback qualitativamente distinto e epistemicamente diferente, mostrando que o desenho de prompt molda não apenas a precisão, mas a postura avaliativa da saída.
- **O andaimento de prompt pode afastar um modelo do professor.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al. (2026)]] fizeram sete modelos produzirem feedback de escrita no nível do parágrafo sob três estratégias de prompting e constataram que acrescentar nomes de categorias ou exemplos resolvidos aumentou a divergência em relação à distribuição do professor na maioria deles, melhorando apenas o Mistral-7B (de 0,2695 para 0,2398). A linha de base zero-shot permaneceu mais próxima, de modo que instruções de tipo de foco são algo a testar, e não a pressupor.
- **Prompting consciente de contexto para avaliação.** O prompting consciente de contexto de modelos de linguagem pré-treinados automatiza a codificação de habilidades de [[collaborative-learning|resolução colaborativa de problemas]] a partir de dados de processo, modelando dependências entre códigos de comportamento e fundindo capacidades cognitivas e sociais. Isso possibilita análise estruturada de RCP em escala e em tempo real, superando a intensidade de trabalho dos esquemas manuais de codificação.
- **Templates baseados em papéis e rubricas de qualidade para o planejamento docente.** [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo e Tahir (2025)]] desenvolvem empiricamente um framework de prompts para o [[curriculum-design|planejamento de aulas]] de artes STEAM infantis que associa um template de Papel (R) – Instruções (I) – Objetivo Final (E) (adaptado do RISEN) a uma rubrica de otimização de "quatro pontos e uma linha" — padronizado, prático, envolvente e completo, mais uma dimensão de extensão. Aplicar a rubrica para criticar e refinar prompts manteve os planos gerados aceitáveis para professores de arte em exercício (avaliações médias acima de 4/5), ao mesmo tempo que expôs lacunas recorrentes ([[personalized-learning|personalização]], restrições de [[pedagogical-safety|segurança da criança]], viés cultural) que o prompting de uma única passada deixou sem tratamento — mostrando que templates de prompt mais critérios explícitos de avaliação funcionam como um andaimento de controle de qualidade para a geração em sala de aula.
- **O desenho de papel e de restrições como variável independente.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] comparam dois agentes construídos sobre o mesmo modelo e plataforma a temperatura 0,3, cuja única diferença é como o prompt especifica papel, habilidades e restrições: um agente professor especialista que responde a partir de uma fonte de conhecimento de livro didático delimitada, versus um agente empático centrado no estudante, roteirizado para diagnosticar [[misconceptions|ideias equivocadas]] e verificar a compreensão. A diferença de papel, isoladamente, deslocou o desempenho de aprendizagem, a carga cognitiva, a experiência de fluxo e a empatia percebida, mostrando que a especificação de papel é uma decisão de desenho instrucional com efeitos mensuráveis, e não um floreio estilístico ([[pedagogical-agent]]).

### Conexões com conceitos mais amplos

A engenharia de prompts se conecta ao [[scaffolding|andaimento]] — prompts bem desenhados podem dar andaimento ao pensamento do estudante em vez de contorná-lo. Ela se intersecta com a [[metacognition]] e o [[ai-literacy|letramento em IA]], já que fazer prompts com eficácia exige compreender tanto as capacidades da IA quanto os próprios objetivos de aprendizagem. A [[research-methods-aied|pesquisa]] sobre [[cognitive-offloading]] liga diretamente a qualidade do prompt a se o uso de IA apoia ou mina a aprendizagem.

- **A habilidade de escrita impulsiona o prompting, e ambas preveem o sucesso do [[vibe-coding]].** Em um estudo pré-registrado da CHI 2026 (N=100), [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson, Weidmann & Su]] constataram que a proficiência em comunicação escrita previu o desempenho de vibe-coding orientado a GUI (r = .29), com a qualidade do prompt avaliada por humanos *mediando* o vínculo — evidência de processo de resposta de que uma prosa clara e estruturada se traduz em melhores prompts de programação em linguagem natural. Tanto a habilidade de escrita quanto o [[cs-education|desempenho em ciência da computação]] foram preditores independentes, e o desempenho em ciência da computação (r = .39) carregou aproximadamente o dobro da variância única, de modo que melhorar apenas o prompting dificilmente substituirá plenamente os fundamentos de programação no desenvolvimento nativo de LLM.
- **A estratégia de prompting prevê o desempenho.** Um [[isaza-chatgpt-engineering-prompting-2026|estudo empírico de 128 estudantes de engenharia]] constatou que a Eficiência de Consulta à IA (prompts claros e bem estruturados) e a [[problem-solving|Resolução de Problemas]] Impulsionada por IA (integração estratégica da saída da IA ao raciocínio) foram os preditores mais fortes do sucesso acadêmico — mesmo após controlar pelo GPA —, indicando que fazer prompts é uma habilidade ensinável que molda quão eficazmente os estudantes aprendem com a IA.
- **O estilo de prompting, e não apenas a qualidade do prompt, acompanha os resultados.** Traços derivados de 1.540 sessões de tutoria ligaram o questionamento conceitual ao desempenho em provas, enquanto comportamentos de delegação de tarefas se correlacionaram negativamente —, mas os mesmos traços não se replicaram no semestre seguinte, de modo que são padrões comportamentais, e não habilidades estáveis ([[principal-trait-analysis-human-ai-skills-2026|McNichols, Du e Lan (2026)]]).
- **Uma taxonomia utilizável, e quais categorias de prompt de fato compensam.** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] traduzem estratégias técnicas para o modelo 3K (*Kontext, Kernauftrag, Klarheit* — contexto, tarefa central, clareza): onze categorias orientadas à prática, cada uma com uma rubrica bom/médio/subótimo, e cada uma testada como variação experimental sobre o feedback gerado para os objetivos de aprendizagem de professores em formação. A linguagem técnica específica do domínio foi a categoria decisiva — substituir a terminologia da disciplina por paráfrases cotidianas reduziu significativamente a qualidade do feedback nos três modelos (β = −0,412) —, enquanto acrescentar exemplos concretos e remover a instrução de cadeia de pensamento não produziu diferença significativa em relação à linha de base no primeiro estudo; os exemplos ajudaram quando a análise foi refeita com as melhores combinações de modelo e prompt (β = 0,52). A qualidade do prompt e a escolha do modelo explicaram juntas 42,8% da variância na qualidade do feedback avaliada, o que é o argumento do artigo de que a engenharia de prompts é uma competência mensurável e ensinável, e não uma preferência estilística —, e de que suas categorias não são intercambiáveis em tamanho de efeito.

## Conceitos conectados

- [[pedagogical-patterns]] — A camada de andaimento dentro das sequências de uso estruturado
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — Guarda-chuva: tecnologias e técnicas de IA (modelos, treinamento de LLM, robótica, RAG, agêntica)

## Artigos conectados
- [[wang-teacher-student-centered-agents-physics-2026]] — Prompts de papel e restrição do agente como variável de desenho na aprendizagem de física (Wang et al. 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting versus ajuste fino para a geração de itens de compreensão oral em L2 com GPT (Aryadoust & Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — O que os estudantes perguntam importa: profundidade da interação com LLM, qualidade da tarefa e recordação imediata (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: coaching em tempo real para o prompting educacional com LLM
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — Taxonomia baseada em tarefas de tarefas com LLM para o letramento crítico em IA no jornalismo
- [[prompt-privilege-equitable-ai-access-2026]] — Privilégio de Prompt: mensurando e mitigando disparidades de acessibilidade no acesso a LLM
- [[principal-trait-analysis-human-ai-skills-2026]] — Análise de Traços Principais: traços de colaboração humano-IA orientados por dados
- [[llms-text-linguistics-teaching-2026]] — LLMs no ensino de linguística textual
- [[idea-framework-metacognitive-genai-2026]] — O framework IDEA para o uso regulado metacognitivamente de IA generativa
- [[lin-llm-interactive-lesson-generation]] — Geração por LLM de lições interativas de treinamento de tutores (Lin et al. 2025)
- [[aaai2026-prompting-literacy-k12]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[unesco-ai-guidelines-chemical-education-2026]] — Diretrizes de IA da UNESCO traduzidas para a educação em química; deriva epistêmica
- [[isaza-chatgpt-engineering-prompting-2026]] — Comportamentos de prompting preveem o desempenho de estudantes de engenharia
- [[student-ai-conversations-cognitive-engagement-2026]] — Engajamento cognitivo de nível de Bloom associado à disciplina em conversas estudante–IA (Chang & Li 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs como agentes de desenho pedagógico iterativo
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Engenharia de prompts versus letramento em prompts: um framework de engajamento humanocentrado com IA generativa de cinco fases e um Ciclo de Letramento em Prompts de cinco passos (Miles, Haber-Curran & Arar 2026)
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Engenharia de prompts e seleção de modelo como preditores da qualidade do feedback de IA (Jacobsen et al. 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Avaliando o foco do feedback e a adaptatividade pedagógica no feedback gerado por LLM sobre a escrita dos estudantes

- [[middle-school-genai-steam-interactions-2026]] — Grupos de STEAM do ensino fundamental II copiaram a instrução do instrutor literalmente em 47,1% dos prompts
