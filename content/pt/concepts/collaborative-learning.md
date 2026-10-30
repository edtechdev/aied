---
title: "Aprendizagem colaborativa"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-07T15:40:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [collaborative-learning, scaffolding]
ethics: [equity-in-ai-education]
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/collaborative-learning
source_updated: "2026-10-07T15:40:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Aprendizagem colaborativa** — abordagens instrucionais em que os estudantes trabalham juntos para resolver problemas, concluir tarefas ou construir conhecimento, apoiados ou mediados por ferramentas de IA. Na [[ai-education|IA em educação]], a [[research-methods-aied|pesquisa]] sobre aprendizagem colaborativa abrange a IA como parceira de colaboração, a IA como mediadora da colaboração humana e o desenho de sistemas colaborativos de tutoria por IA.

## Questões para considerar

- Pense em uma ocasião em que você aprendeu algo a fundo em grupo. O que fez aquilo funcionar? Agora imagine um [[conversational-ai|chatbot]] de IA entrando nesse grupo — como ele poderia fortalecer ou silenciosamente minar o que você vivenciou?
- A pesquisa encontra uma troca: delegar o raciocínio à IA produz o melhor desempenho na tarefa, mas o menor engajamento autorregulatório, enquanto o modo que constrói a [[self-regulated-learning|autorregulação]] tem desempenho inferior na tarefa. Se você tivesse que escolher, o que protegeria — o resultado ou a luta?
- O framework ICAP classifica a colaboração "interativa" como a forma mais profunda de engajamento. Poderia uma IA que responde pelo grupo, na prática, rebaixar a colaboração de interativa para meramente passiva — mesmo que os estudantes se sintam mais satisfeitos?
- Um estudo concluiu que mediadores de IA só são confiáveis enquanto se mantêm neutros; quando a IA passa a aconselhar ou a desafiar, essa confiança se desgasta. Quão neutro o mediador de IA de um grupo deveria realmente ser?
- Quando quem aprende usa IA para produzir um artefato polido, pode pular o esforço epistêmico que constrói compreensão. Como você desenharia um parceiro de IA que traga à tona discordância e conflito em vez de os amenizar?
- Estudantes neurodivergentes relatam precisar de tarefas estruturadas, equipes pequenas e consistentes e papéis explícitos. Se as ferramentas de colaboração com IA são construídas para o aprendiz "médio", quem elas podem deixar de fora — e como você desenharia de forma diferente?

## Introdução

A aprendizagem colaborativa se fundamenta em [[sociocultural-learning|teorias socioculturais]] da aprendizagem que posicionam a construção de conhecimento como fundamentalmente social. A IA introduz novas dinâmicas: a IA pode servir como par, como facilitadora ou como participante dos processos colaborativos. Os artigos desta base de conhecimento exploram como a colaboração mediada por IA afeta os [[learning-gains|resultados de aprendizagem]], o engajamento epistêmico e a [[equity-in-ai-education|equidade]] — e como as estruturas colaborativas devem ser desenhadas para acomodar quem aprende de formas diversas.

**Colaboração como constructo vs. trabalho em grupo como estrutura.** A aprendizagem colaborativa é a teoria mais ampla: o conhecimento é co-construído por meio de atividade e diálogo conjuntos. O [[group-work|trabalho em grupo]] é sua implementação formal mais concreta — uma equipe produzindo um resultado compartilhado, e muitas vezes uma nota compartilhada. Os dois estão intimamente relacionados, mas não são idênticos: um grupo pode operar sem colaboração genuína (a tarefa particionada em partes independentes, o trabalho apenas concatenado), e a colaboração pode ocorrer sem grupos formais (duplas, diálogo de turma inteira ou interação humano–[[student-ai-interaction|IA]]). A IA pressiona exatamente essa lacuna — [[chen-zou-genai-group-assessment-agency-2026|Chen e Zou (2026)]] encontraram grupos cuja prática individual de [[generative-ai|IA generativa]] nunca se tornou capacidade coletiva porque a tarefa nunca exigiu trabalho conjunto, ao lado de grupos em que a nota compartilhada tornou o uso de IA generativa um problema de coordenação. A página [[group-work|trabalho em grupo]] examina essas dinâmicas em profundidade; esta página mantém a lente mais ampla sobre a aprendizagem colaborativa como um todo.

**A IA como parceira colaborativa** explora o papel da IA na aprendizagem em grupo. **[[polished-artifacts-fragile-engagement-2026|Kimmerle]]** conceitua o risco de redução do esforço epistêmico quando quem aprende usa IA para produzir artefatos de conhecimento polidos, defendendo uma IA estruturada como parceira argumentativa que preserva o conflito cognitivo. Testando isso em escala de sala de aula, [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] fizeram estudantes introdutórios de ciências sociais (n = 154) escreverem ensaios argumentativos, receberem críticas de [[llm|LLMs]] como ChatGPT, Gemini ou Claude, e então incorporá-las ou refutá-las; codificadores cegos encontraram reflexão em 92,7% e refutação ativa das afirmações do LLM em 87,8% das respostas (κs interavaliadores = 0,81–0,89), evidência de que quem aprende se comportou como consumidores [[critical-thinking|críticos]] que preservaram, em vez de render, o conflito cognitivo da crítica. **[[epistemic-emotions-collaborative-problem-solving]]** examina como as emoções moldam a resolução colaborativa de [[problem-solving|problemas]] com IA. **[[hingle-collaborative-ai-literacy-2025]]** explora abordagens colaborativas para o desenvolvimento do [[ai-literacy|letramento em IA]].

O endosso do facilitador é a alavanca observada mais forte sobre se os estudantes aceitam um agente contrário: em doze equipes interprofissionais, aquelas cujo facilitador docente influenciou sua integração da IA a avaliaram como mais parte da equipe (M = 3,08 vs 2,64) e seu feedback como mais útil (M = 3,44 vs 2,93) ([[genai-counter-learner-groupthink-2025|Wiss et al. (2025)]]).

**A colaboração entre pares mediada por IA** examina como a IA [[scaffolding|andaimes]] a colaboração entre humanos. **[[golrang-propact-pair-programming-2026]]** e **[[agent-voice-accents-k12-group-learning]]** exploram como as características de agentes de IA afetam a dinâmica de grupo. **[[ai-agents-peer-learning-discourse]]** documenta como [[agentic-ai|agentes de IA]] que ensinam uns aos outros produzem padrões de discurso que se assemelham à aprendizagem por pares humana. Sistemas de alcance de turma estendem isso à dimensão *relacional* da colaboração: **[[breideband-community-builder-cobi-2026|CoBi]]** usa reconhecimento de fala e compreensão de linguagem para detectar discurso de pequenos grupos que "eleva" (ser respeitoso, equânime, comprometido com a comunidade, fazer o pensamento avançar) e devolve [[visualization|visualizações]] não avaliativas no nível da turma para apoiar a construção de comunidade e as competências de colaboração, retendo deliberadamente o feedback no nível do estudante ou do grupo para proteger a [[privacy|privacidade]] e a [[trust|confiança]].

**Perspectivas neurodivergentes sobre a colaboração** revelam requisitos críticos de desenho. **[[neurodivergent-computing-students|Zastudil et al.]]** concluíram que estudantes neurodivergentes precisam de tarefas estruturadas, equipes pequenas e consistentes com papéis explicitamente definidos e padrões de interação previsíveis — requisitos que as ferramentas de colaboração com IA precisam acomodar. Isso conecta a aprendizagem colaborativa à [[inclusive-learning|aprendizagem inclusiva]] e à [[neurodiversity|neurodiversidade]].

**A colaboração professor–IA** examina como professores e IA trabalham juntos. **[[teacher-student-agency-orchestration]]** e **[[teacher-ai-teaming-five-levels]]** exploram frameworks para o ensino colaborativo entre humanos e IA, conectando-se ao [[teacher-role|papel do professor]] e à [[human-in-the-loop-ai|IA com humano na alça]].

**A IA como mediadora [[pedagogy|pedagógica]]** reconceitua o papel da IA na colaboração além de ferramenta ou par. Com base na teoria sociocultural e na [[distributed-cognition|cognição distribuída]], **[[niari-ai-pedagogical-mediator-collaborative-learning|Niari]]** posiciona a IA como participante ativa na orquestração da interação, da construção de sentido epistêmico e dos processos regulatórios, redistribuindo agência, autoridade e responsabilidade entre atores humanos e não humanos sem deslocar a agência de quem aprende ou do professor. Isso fundamenta a aprendizagem colaborativa em uma visão de IA socialmente mediada e corregulada, e não individualista.

**Modos de colaboração e a troca entre eficiência e regulação.** A pesquisa empírica com estudantes universitários colaborando com IA na resolução de problemas complexos identifica três modos distintos — *Raciocínio Delegado*, *Interpretação Concertada* e *Elaboração Delegada*. O modo mais eficiente (raciocínio delegado) produz o maior desempenho na tarefa, mas o menor engajamento autorregulatório de quem aprende, enquanto o modo de maior autorregulação (interpretação concertada) tem desempenho inferior nos resultados da tarefa.([[hao-human-ai-collaborative-problem-solving-cognition]]) Isso revela uma tensão central de desenho: os ambientes de aprendizagem colaborativa precisam equilibrar a eficiência do sistema humano–IA distribuído e a profundidade do engajamento [[self-regulated-learning|regulador]] de quem aprende.

O único contraste metanalítico disponível para o trabalho colaborativo apoiado por IA está dentro das intervenções de PBL/PjBL apoiadas por IA generativa, nas quais a colaboração entre pares agrupada ficou em g = 0,885 contra g = 0,416 para o trabalho individual, mas a diferença atingiu apenas uma tendência marginal (QM = 3,675, p = ,055) e o lado do trabalho individual repousa sobre dois estudos — portanto a evidência agrupada de que a colaboração supera trabalhar sozinho sob IA generativa é sugestiva, e não estabelecida ([[chen-pbl-pjbl-genai-meta-analysis-2026|Chen et al. 2026]]).

Uma revisão de escopo de 18 estudos mapeia a mesma troca ao longo do trabalho em grupo: a IA generativa apoiou o desenvolvimento de conhecimento, a geração de ideias e a eficiência da comunicação, ao mesmo tempo em que reduziu a demanda por interação entre pares, negociação e construção coletiva de sentido, e evidência randomizada encontrou mais sugestões inovadoras da IA sem ganho significativo na inovatividade geral dos participantes ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei e Perkins (2026)]]).

**O desenho de papéis é uma alavanca sobre a qualidade, não o volume, da construção colaborativa de conhecimento.** [[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al. (2026)]] atribuíram papéis rotativos de moderador, analista e argumentador a 58 [[higher-ed|estudantes de pós-graduação]] e seu parceiro de IA em 16 grupos, e concluíram que a estrutura elevou o *conteúdo* dos mapas mentais de grupo quase uma faixa SOLO inteira (M = 3,65 para 4,59, z = 3,771, p < 0,001) enquanto as contagens de nós e ramos permaneceram estáveis — organização em vez de cobertura — ao custo de uma elevação moderada da [[cognitive-offloading|carga cognitiva]] colaborativa (p = 0,023). A [[network-analysis|análise sequencial lag]] acrescentou uma autotransição de avaliação e um caminho de conflito para defesa que a ferramenta sozinha não havia produzido, posicionando a [[human-ai-collaboration|colaboração humano–IA]] como um problema de desenho, e não de ferramenta.

**A IA generativa como agente e como espaço em pequenos grupos — o modo importa.** [[xu-genai-collaborative-space-2026|Xu et al. (2026)]] observam que *como* uma equipe acessa a IA generativa molda a colaboração: com uma única interface compartilhada em trabalho síncrono, as equipes co-constroem "prompts coletivos", executam um ciclo de superfície–avaliação–incorporação e tratam o chat como memória compartilhada; em trabalho assíncrono, o prompting privado e a "rotulação removida" das saídas fragmentam a [[explainable-ai|transparência]] e elevam o custo de sustentar um modelo cognitivo compartilhado. Sua lente de Trabalho Cooperativo Apoiado por IA Generativa (GSCW) enquadra a IA generativa como um agente configurável (de assistente individual a membro da equipe) e como um espaço colaborativo interativo — conectando a configuração de acesso diretamente à qualidade do engajamento interativo relevante para o [[icap-framework|ICAP]].

**A IA generativa como infraestrutura de coordenação de grupo — e o risco de cooperação achatada.** [[chen-zou-genai-group-assessment-agency-2026|Chen e Zou (2026)]] mostram como quinze grupos de professores em formação lidaram com a IA generativa em uma apresentação de grupo avaliada, e a divisão contraria a suposição habitual de que a pressão do grupo aumenta a dependência da IA. Cinco grupos intensificaram o uso para resolver um problema de colaboração familiar — não saber o que as partes dos colegas continham —, alimentando esse trabalho em um chatbot para torná-lo inteligível e alinhar sua própria parte, com um grupo reconstruindo seu ciclo como *discussão → externalização para a IA generativa → revisão coletiva → rediscussão*. Os autores leem isso como mais do que [[cognitive-offloading|descarregamento cognitivo]], já que os estudantes mantiveram o julgamento enquanto a ferramenta absorvia a coordenação, mas alertam que o fluxo mais suave pode contornar a discordância pela qual a coesão é convencionalmente construída, tornando o trabalho relacional a questão em aberto. Sete grupos reduziram o uso de IA generativa, protegendo o conhecimento [[situated-learning|situado]] construído nas salas de aula compartilhadas ("a IA só sabe daquele momento em que você digita"), a [[bias-mitigation|justiça]] para com os colegas de grupo, a originalidade entre grupos e a diversidade de perspectivas que o grupo já tinha. Três grupos não viram mudança alguma: com a tarefa particionada em seções independentes, a prática individualmente sofisticada de IA generativa nunca se tornou uma capacidade coletiva, embora a coerência fosse um critério explícito. O padrão sugere que são as normas do grupo, não a ferramenta, que decidem o que um grupo faz com a IA — e que a adoção coletiva pode diminuir o [[ai-misuse-learning-harm|risco de uso indevido]] percebido em vez de elevar o compromisso.

**A colaboração como objeto de instrução.** [[golrang-propact-pair-programming-2026|ProPACT]] é um [[intelligent-tutoring|tutor adaptativo]] orientado por IA para programação em dupla que trata a *díade** — não o indivíduo — como unidade de análise, modelando atenção visual conjunta, esforço mental conjunto e sinais pupilares em tempo real para prever rupturas colaborativas com até 30 segundos de antecedência e intervir antes que ocorram. Díades que receberam feedback proativo alcançaram sucesso de depuração substancialmente maior e concluíram tarefas com mais eficiência, e mostraram ganhos sustentados na regulação colaborativa depois — evidência de que a IA pode ensinar a própria colaboração, não apenas apoiar uma tarefa. Medir a competência colaborativa apresenta o desafio complementar de avaliar a competência de resolução colaborativa de problemas (CPS) em escala, o que tradicionalmente exige codificar manualmente dados de processo de tarefas simuladas em comportamentos de CPS — demorado e impraticável em escala; o [[prompt-engineering|prompting consciente de contexto]] de modelos de linguagem pré-treinados automatiza essa codificação ao modelar dependências contextuais e fundir competências cognitivas e sociais, alcançando desempenho superior ao de baselines fortes.
**Andaime na ordem da fala do grupo, não em sua frequência.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela & Cukurova (2026)]] extraíram de sequências de diálogo em tríades de 65 estudantes uma única ordenação — parafrasear, depois propor, depois questionar — que acompanhava a melhora, enquanto a inversa não; o andaime máximo elevou o comportamento na tarefa, mas também o roteirização e menos indicadores de resolução de problemas.

**A IA como mediadora neutra — e a tensão quando ela deixa de ser neutra.** [[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]] é uma sonda baseada em [[llm|LLM]] no Discord que medeia fronteiras disciplinares em equipes de estudantes interdisciplinares ao trazer à tona pressupostos implícitos e devolver sínteses anonimizadas à discussão compartilhada. Os estudantes a valorizaram tanto como apoio cognitivo quanto como amortecedor relacional, mas uma tensão central emergiu: a neutralidade percebida da IA era estruturante e se desgastou assim que a IA passou de mediadora neutra a conselheira ou desafiante — uma restrição-chave de desenho para [[pedagogical-agent|agentes]] que medeiam a colaboração preservando a [[human-ai-collaboration|colaboração humano–IA]] e a [[trust-calibration|calibração da confiança]].

**Um protocolo estruturado de facilitação — e seu risco de adulação.** [[ethics-training-agents-group-ethics-discussion-2026|Seo et al. (2026)]] estendem o [[learning-design|desenho de aprendizagem]] colaborativa com um protocolo estruturado de divergência–deliberação–convergência: um facilitador LLM empilha os turnos de fala, cronometra as fases e resume incrementalmente, formato que 45 estudantes acharam simples e semelhante a uma discussão e que reduziu a necessidade de facilitação externa. O desenho gira sobre uma tensão que o estudo mediu diretamente: os agentes apoiaram a amplitude da tomada de perspectiva (os grupos produziram conjuntos maiores e mais divergentes de partes interessadas e soluções, e os agentes vocalizaram consistentemente pontos de vista minoritários), mas a concordância [[ai-sycophancy|aduladora]], desprovida de raciocínio, achatou o conflito cognitivo que faz a colaboração aprofundar o pensamento. Os participantes pediram saídas de agentes que exponham os passos intermediários da deliberação, e não apenas as conclusões, e contra-argumentos que preservem a discordância genuína.

**Estruturas colaborativas para a educação em IA.** [[academic-league-of-ai-2026|A Liga Acadêmica de IA]] organiza a educação em IA por meio de [[governance|governança]] democrática dos estudantes e equipes de projeto, incorporando [[active-learning|aprendizagem ativa]] e [[project-based-learning|aprendizagem baseada em projetos]] em uma estrutura colaborativa e conectada à comunidade.

### O framework ICAP: a colaboração como modo de engajamento mais alto

A aprendizagem colaborativa ocupa o topo do [[icap-framework|framework ICAP]] (Interativo–Construtivo–Ativo–Passivo): o modo *interativo* — co-construir significado por meio do diálogo, defender uma posição ou resolver em conjunto — produz a mudança de conhecimento mais profunda na taxonomia de Chi. Isso torna o ICAP tanto uma justificativa para pedagogias colaborativas quanto uma restrição de desenho sobre a IA. Uma IA que medeia a discussão (como [[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]] ou [[golrang-propact-pair-programming-2026|ProPACT]] fazem) é valiosa precisamente quando sustenta o engajamento *interativo*; uma IA que responde pelo grupo ou ameniza o conflito cognitivo pode rebaixar a colaboração a um mero modo *ativo* ou *passivo*. A anotação baseada no ICAP (ver [[icap-cognitive-engagement-llm-agents|medição ICAP estendida do diálogo colaborativo]]) e a pesquisa sobre o momento da facilitação tratam ambas a qualidade do discurso interativo como o resultado de interesse, fundamentando a aprendizagem colaborativa no [[student-engagement|engajamento dos estudantes]] e na hierarquia ICAP.([[icap-cognitive-engagement-llm-agents]])([[llm-facilitation-timing-online-discussions]])

## Orientação prática

- **Modele a colaboração, não apenas o indivíduo.** Ferramentas que rastreiam o estado diádico ou de grupo (como [[golrang-propact-pair-programming-2026|ProPACT]] faz) podem sustentar a própria colaboração, prevendo e prevenindo rupturas em vez de reagir a elas.
- **Preserve o conflito cognitivo.** Estruture a IA como parceira argumentativa que traga à tona a discordância e os pressupostos implícitos, evitando o problema dos artefatos polidos, em que a IA ameniza o frágil engajamento epistêmico.
- **Personas contrárias têm custos afetivos.** Em 97 tríades, a IA contrária empurrou o discurso para o desafio e a reflexão, mas reduziu a satisfação com o trabalho em equipe (ε² = ,062) e a segurança psicológica (ε² = ,114) sem elevar a produção criativa ([[jin-emergent-learner-agency-implicit-hai-2026|Jin et al. (2026)]]).

- **Ajuste a função do agente ao resultado que você pretende.** Uma revisão de 46 estudos de agentes de IA na aprendizagem colaborativa apoiada por computador encontrou ganhos cognitivos consistentemente relatados, enquanto resultados comportamentais, sociais e emocionais permaneceram dependentes de contexto, com o alinhamento mais forte entre função do agente e resultado dentro do mesmo domínio ([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]).

- **Um papel separado de Facilitador reduz a dominância, não a responsividade.** No benchmark simulado de [[astra-multi-agent-tutoring-benchmark-2026|Oyelere (2026)]], acrescentar um agente Facilitador ao lado do Tutor reduziu o desequilíbrio de turnos e de palavras da díade (M = 0,103 e 0,105 contra 0,183 e 0,182) sem alterar o engajamento recíproco — embora quem aprendia fossem personas sintéticas, não díades reais.
- **Equilibre eficiência e autorregulação.** A IA colaborativa que maximiza a eficiência da tarefa (raciocínio delegado) pode minar o engajamento regulador de quem aprende; o desenho deve proteger deliberadamente espaço para a interpretação concertada.
- **Respeite a restrição de neutralidade.** Mediadores de IA são confiáveis enquanto neutros; passar a papéis de aconselhamento ou desafio desestabiliza essa confiança, portanto trocas de papel devem ser explícitas e configuráveis.
- **Acomode estudantes neurodivergentes.** Tarefas estruturadas, equipes pequenas e consistentes e definições explícitas de papel são requisitos que as ferramentas de colaboração com IA precisam apoiar.
- **Prefira feedback não avaliativo no nível da turma.** Ao apoiar a dimensão relacional da colaboração, o feedback agregado no nível da turma protege a [[privacy|privacidade]] e a [[agency|agência dos estudantes]] onde uma pontuação individual pareceria vigilante; estudantes do [[breideband-community-builder-cobi-2026|CoBi]] preferiram [[qualitative-research|visualizações qualitativas]] (uma árvore orgânica) a [[quantitative-research|quantitativas]] (um gráfico radar), e professores valorizaram usar as observações do sistema para despertar reflexão mais do que a exibição ao vivo.
- **Desenhe para o ver/atenção que precede a contribuição.** A aprendizagem colaborativa em fóruns de discussão [[online-teaching-and-learning|online]] depende não apenas de publicar, mas da leitura que a precede. [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao & Cukurova (2026)]] mostram que resumos de discussão gerados por LLM e publicações de exemplo podem agir como [[scaffolding|andaimes]] de navegação que ampliam a exposição dos estudantes às contribuições dos colegas e as condições de rede para capital social de ligação (laços fracos) — apoio que deve complementar, e não substituir, estratégias sociopedagógicas de sustentação do engajamento sob carga de trabalho acadêmica.

- **O lado social mostra ruptura sem um ganho compensatório.** Ao longo de cinco processos de colaboração, um consenso de 30 especialistas chegou apenas à vulnerabilidade, com avaliações de aprimoramento abaixo do limiar: Conexão Social (3,80 contra aprimoramento 1,90), Desenvolvimento Socioemocional (3,60 contra 2,00), Aprendizagem Social, Aprendizagem Colaborativa e Senso de Pertencimento (todas 3,30) ([[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou, Greene & Nixon et al., 2026]]). O relatório trata a assimetria como alvo de desenho, já que a resolução colaborativa de problemas está ancorada a um produto compartilhado, enquanto a aprendizagem colaborativa não tem referente visível e pode se desgastar sem ser detectada.

## Conceitos conectados
- [[pedagogical-patterns]] — Colaboração compartilhada com IA roteirizada e seus desenhos de papel testados
- [[pedagogical-partnerships]] — Parcerias pedagógicas
- [[group-work]] — Trabalho em grupo
- [[problem-based-learning]]
- [[online-teaching-and-learning]] — Ensino e aprendizagem online
- [[active-learning]]
- [[icap-framework]]
- [[scaffolding]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[inclusive-learning]]
- [[neurodiversity]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[project-based-learning]]
- [[human-ai-collaboration]]
- [[trust-calibration]]
- [[pedagogical-agent]]
- [[student-modeling]]
- [[student-engagement]]
- [[pedagogy]] — Guarda-chuva: pedagogias e estratégias de ensino na educação em IA

## Artigos conectados
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] — Um consenso de 30 especialistas encontra risco social unilateral: processos de colaboração vulneráveis, sem caminho de aprimoramento
- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — Aprendizagem baseada em problemas e em projetos como frameworks promissores para a educação apoiada por IA generativa: evidência emergente de uma revisão sistemática e metanálise de três níveis
- [[jin-emergent-learner-agency-implicit-hai-2026]] — Agência emergente de quem aprende na colaboração implícita humano–IA: personas de apoio vs. contrárias
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[genai-counter-learner-groupthink-2025]]
- [[polished-artifacts-fragile-engagement-2026]]
- [[epistemic-emotions-collaborative-problem-solving]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[neurodivergent-computing-students]]
- [[teacher-student-agency-orchestration]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
- [[golrang-propact-pair-programming-2026]] — ProPACT: tutor colaborativo adaptativo proativo com IA para programação em dupla
- [[spritz-ai-disciplinary-mediation-student-teams-2026]] — Spritz: mediação disciplinar por IA em equipes de projeto de estudantes
- [[academic-league-of-ai-2026]] — Liga Acadêmica de IA: educação em IA colaborativa e baseada em projetos
- [[icap-cognitive-engagement-llm-agents]] — Framework ICAP estendido para medir engajamento no diálogo colaborativo
- [[llm-facilitation-timing-online-discussions]] — Momento da facilitação por LLM em discussões colaborativas online
- [[ba-ai-agents-cscl-review-2026]] — Revisão de agentes de IA na aprendizagem colaborativa apoiada por computador
- [[wei-perkins-genai-student-collaboration-scoping-2026]] — IA generativa e trabalho em grupo de estudantes: uma revisão de escopo (Wei & Perkins 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Benchmark sintético ASTRA para tutoria multiagente e colaboração com participação equilibrada
- [[xu-genai-collaborative-space-2026]] — A IA generativa como agente e espaço colaborativo na dinâmica de pequenos grupos (Xu et al. 2026)
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — Desenho de aprendizagem orientado por resumos gerados por IA em fóruns de discussão online
- [[chen-zou-genai-group-assessment-agency-2026]] — A IA generativa como infraestrutura de coordenação em grupos de estudantes: uso intensificado, contido e não realizado
- [[ethics-training-agents-group-ethics-discussion-2026]] — Agentes de treinamento em ética: facilitando a educação em ética baseada em grupos com dramatização e discussão para reflexão e exploração éticas
