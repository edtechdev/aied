---
title: Interação Estudante-IA
created: "2026-08-20T02:55:00-04:00"
updated: "2026-11-19T20:05:00-05:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, learning-analytics, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
translation_of: concepts/student-ai-interaction
source_updated: "2026-11-17T09:20:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa."
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

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

> **A interação estudante-IA** — os padrões, processos e trabalho cognitivo em como os aprendizes se engajam com sistemas de [[generative-ai|IA generativa]] durante a aprendizagem e a [[problem-solving|resolução de problemas]]. A [[research-methods-aied|pesquisa]] aqui caracteriza o que os estudantes pedem à IA, como prompts e diálogos evoluem, e como a qualidade da interação se relaciona com os [[learning-gains|resultados de aprendizagem]], a [[cognitive-offloading|descarga cognitiva]] e a [[agency|agência]].

## Questões a considerar

- Pense nos últimos poucos prompts que você (ou um estudante) escreveu para uma IA. Você descreveria a maioria deles como pedidos da resposta, ou como pedidos para a IA explicar, sondar ou avaliar? O que você suspeita que esse padrão faz à aprendizagem?
- A pesquisa descobre que um pequeno subconjunto de tipos de pergunta responde pela maioria das consultas dos estudantes, e que as perguntas mudam à medida que uma tarefa progride. Por que você acha que o questionamento dos estudantes se estreita, e o que isso sugere sobre como eles estão usando a ferramenta?
- A página afirma que prompts rasos e de busca por resposta estão associados à redução da aprendizagem e ao excesso de dependência, enquanto a interação reflexiva e orientada à verificação apoia a compreensão. O que você acha que separa um prompt "bom" de um "ruim" — e essa é responsabilidade do estudante ou do design da ferramenta?
- Se a qualidade da interação é moldada pelo contexto da tarefa e pelo suporte, em vez de ser um traço fixo do estudante, como um curso ou uma ferramenta poderia ser redesenhado para convidar uma faixa mais ampla e mais produtiva de investigação?
- Como você saberia se um diálogo fluente de IA de um estudante reflete aprendizagem genuína ou apenas delegação habilidosa — e o que você verificaria para descobrir?

## Introdução

A interação estudante-IA é a superfície observável do [[student-engagement|engajamento]] dos aprendizes com a IA generativa — as perguntas que colocam, os prompts que escrevem, a forma como negociam e verificam a saída da IA, e como esses padrões se deslocam entre estágios da tarefa e ao longo do tempo. Ela fica na interseção da [[student-experience|experiência do estudante]], do [[prompt-engineering|prompt engineering]] e da [[learning-analytics|análise de aprendizagem]], e é central para os debates sobre se o uso de IA na educação representa aprendizagem genuína ou [[cognitive-offloading|excesso de dependência]]. Onde a [[human-ai-collaboration|colaboração humano-IA]] enquadra a divisão de alto nível do trabalho cognitivo entre pessoas e modelos, a interação estudante-IA é a encenação concreta e mensurável dessa relação — as consultas, prompts e jogadas de negociação específicas que os aprendizes fazem momento a momento.

A interação nem sempre é instrumental. O modelo de adaptação relacional integrada à máquina de Boyd e Markowitz separa a IA como *parceira relacional*, em que quem aprende se engaja diretamente com o sistema, da IA como *mediadora relacional*, em que o sistema remodela a comunicação entre pessoas ([Boyd & Markowitz, 2026](https://doi.org/10.1177/17456916251404394)). O segundo é o caso menos visível, como quando uma IA redige um feedback que o estudante então lê como a voz de seu instrutor. O modelo é um referencial, e não um achado, e não foi testado em sala de aula. Ainda assim, nomeia uma distinção que a pesquisa sobre interação tende a fundir, porque um tutor com forma de companheiro e um mediador que filtra a comunicação de pares ou do instrutor levantam perguntas diferentes sobre confiança e dependência.

### O que os estudantes pedem à IA

- **A recusa é uma configuração da interação, não uma ausência de uso.** [[silverdal-distributed-authorship-swedish-writing-2026|Silverdal, Hermansson e Lindgren (2026)]] gravaram três estudantes do ensino médio superior escrevendo a mesma história inspirada em Kafka com IA generativa e mapearam três agenciamentos distintos a partir das gravações: autoria delegada ao modelo, coescrita crítica recíproca e uma configuração explícita de “IA e eu — não, obrigado”, em que o estudante reorganizou sua prática de escrita longe da ferramenta. O achado para esta página é que a *mesma* tarefa, sala e ferramenta produziram as três, e muito do que as separou estava nos momentos entre prompts — pausas, reformulações, hesitação antes de aceitar uma sugestão —, que um registro de chat sozinho não captura.
Uma vertente central da pesquisa mede os **tipos e a qualidade das consultas dos estudantes**. Estudos aplicam taxonomias de tipos de pergunta — por exemplo, a taxonomia de 18 tipos de Graesser et al. — para classificar as interações estudante-IA, frequentemente usando classificadores few-shot para escalar a análise ao longo de centenas ou milhares de interações. Os achados indicam que um pequeno subconjunto de tipos de pergunta responde pela maioria das consultas dos estudantes, e que as perguntas que os estudantes fazem **mudam substancialmente à medida que uma tarefa progride** (p. ex., [[student-ai-inquiry-types-cs2-2026]]). Essa dependência da tarefa importa: a qualidade da interação não é um traço fixo do estudante, mas é moldada pelo contexto do problema, pelo [[scaffolding|suporte]] e pelas affordances da ferramenta de IA. Nas idades mais jovens, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]] descobriram que crianças (de 6 a 14 anos) testavam ativamente a credibilidade de um [[conversational-ai|chatbot]] colocando perguntas de resposta conhecida (p. ex., "quão grande é um t-rex") — uma expressão de autoagência epistêmica —, enquanto a criança modal fazia apenas 1 a 3 perguntas e um calouro de destaque fez 21, ressaltando como a variação desenvolvimental e individual molda as perguntas que os aprendizes colocam.

As próprias taxonomias ainda não concordam: ao longo de 46 categorizações de 33 estudos, rótulos similares nomeiam fenômenos diferentes, de modo que a revisão propõe o *episódio de interação* — uma troca dirigida a objetivos e temporalmente delimitada — como uma unidade que abrange aquisição de conhecimento, feedback avaliativo, orientação estratégica, investigação dialógica, refinamento de artefato e corregulação ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).

Complementando esses estudos de taxonomia, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] caracterizam a *forma de diálogo* das consultas dos estudantes. Entre 38 [[higher-ed|graduandos]] completando ensaios argumentativos sem supervisão, 76,32% usaram um padrão de um turno de perguntar–obter-resposta–parar — tipicamente colando o título da avaliação sem especificar suas necessidades e ressubmetendo prompts idênticos quando insatisfeitos —, e 78,94% tocaram a [[generative-ai|GenAI]] apenas no início (ideias, contexto) ou no fim (polimento, comprimento) de uma tarefa, mantendo-a separada da leitura e da [[writing-education|escrita]] independente; apenas 23,68% sustentaram diálogo iterativo de idas e vindas com perguntas de acompanhamento e seu próprio raciocínio. Os autores colocam esses padrões em um espectro que vai da **terceirização cognitiva** à **realocação cognitiva** — o análogo da era da GenAI das abordagens de superfície versus [[metacognition|profundas]] à aprendizagem —, notando que a maioria dos estudantes concebeu a ferramenta como um motor de busca aprimorado, o que os restringiu à ponta da terceirização.

Reenquadrando esses padrões como trabalho epistêmico, uma análise de 200 sessões de chat de coprogramação descobriu que 78,8% das interações estudante–GenAI rodavam sobre objetivos e estratégias de não domínio, como terceirização ou busca de verificação, e apenas 11,1% acoplavam objetivos orientados ao domínio com justificação epistêmica ([[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]]).

Codificar 50 trocas amostradas dá uma tipologia tríplice do mesmo comportamento: [[three-pathways-student-ai-interaction-2026|Zahra (2026)]] classificou 46% como Revisão Passiva, onde o modelo age como um oráculo e a saída é aceita com pouco escrutínio, 18% como Pergunta Direta e 36% como Diálogo Estratégico, emparelhando a distribuição com um argumento de design de restrição-primeiro (kappa = ,48 entre codificadores). Uma survey de sete tarefas com 211 estudantes de computação chega à mesma conclusão pela outra direção: [[student-llm-use-cs-subfields-2026|Nizamani et al. (2026)]] mediram a adoção de LLM de 89,6% em algoritmos a 15,2% em engenharia de software e atribuíram a dispersão à complexidade das tarefas, à verificabilidade e ao suporte, e não à subárea.

### Qualidade da interação e aprendizagem

Uma vertente complementar liga a *forma* da interação à aprendizagem. Prompts rasos ou habitualmente estreitos (pedir à IA para produzir a resposta em vez de explicar, sondar ou avaliar) estão associados à redução da aprendizagem e ao aumento do excesso de dependência, enquanto a interação reflexiva e orientada à verificação apoia a [[metacognition|metacognição]] e a compreensão durável. Isso conecta a interação estudante-IA diretamente ao design de [[intelligent-tutoring|tutoria inteligente]]: sistemas podem ser construídos para convidar uma faixa mais ampla e mais produtiva de investigação e para dar suporte ao fazer perguntas, em vez de meramente responder. A interação não precisa passar por prompts de busca de resposta de forma alguma — quando a IA critica o próprio trabalho dos estudantes, a troca se torna um diálogo reflexivo e orientado à verificação. Em [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]], as respostas dos aprendizes ao [[feedback]] de ensaio do [[llm|LLM]] mostraram reflexão em 92,7%, aceitação em 93,6% e refutação ativa de afirmações do LLM em 87,8% dos casos (κs interavaliador = 0,81–0,89), e sua resposta à [[ai-feedback-quality|qualidade do feedback]] melhorou ao longo das iterações como uma habilidade aprendível. O lado reflexivo da interação não precisa passar pelo prompting direto — no [[breideband-community-builder-cobi-2026|CoBi]], os estudantes se engajaram com [[visualization|visualizações]] de IA em nível de sala de aula de sua própria fala [[collaborative-learning|colaborativa]] e deliberaram sobre quando as classificações da IA pareciam erradas. Isso transformou aparentes classificações errôneas em oportunidades para calibrar sua compreensão das capacidades e limites da IA ([[trust-calibration|calibragem de confiança]]) em vez de aceitar puramente sua saída. O vínculo entre forma da interação e aprendizagem tem um limite, porém: [[page-cognitive-partnership-cycle-human-ai-2026|Page (2026)]] separa a *iteração conversacional* da *iteração cognitiva* com o fundamento de que um aprendiz pode refinar uma saída ao longo de muitos turnos enquanto o modelo mental por trás dela permanece inalterado. A evidência da aprendizagem é, portanto, uma mudança na posição cognitiva do aprendiz, e não o comprimento ou a fluência da troca — a contagem de turnos não é um proxy para a profundidade do engajamento.

A interação, e não a ferramenta, fixa a via: em um experimento de campo com quase 1.000 estudantes de matemática do ensino médio, o GPT-4 irrestrito elevou as pontuações de prática em 48%, mas cortou as pontuações de exame sem assistência em 17%, enquanto o mesmo modelo restrito a dicas projetadas por professores elevou a prática em 127% e praticamente apagou o déficit ([[naim-bypass-offload-scaffold-llm-learning-2026|Lee, 2026]]).

Uma tarefa de programação controlada coloca números de resultado nesses tipos de interação. [[shen-ai-skill-formation-2026|Shen e Tamkin (2026)]] randomizaram 52 desenvolvedores em atividade para aprender uma biblioteca Python desconhecida com ou sem um assistente GPT-4o e codificaram cada consulta contra as gravações de tela. Seis padrões emergiram, e os três que mantinham quem aprende fazendo trabalho cognitivo pontuaram muito acima dos três que o transferiam: indagação conceitual apenas (65%), código-explicação híbrido (68%) e geração-depois-compreensão (86%), contra delegação à IA (39%), dependência progressiva (35%) e depuração iterativa com IA (24%). A delegação foi o padrão mais rápido, com 19,5 minutos; depurar por meio do assistente foi mais lento (31 minutos) e o pior. A ordenação diz que o movimento decisivo é se a troca desenvolve o modelo de quem aprende ou o substitui.

Se os estudantes promptaram de forma eficaz, e não quanto, acompanhou o sucesso: a Eficiência de Consulta à IA e a Resolução de Problemas Impulsionada por IA foram os preditores mais fortes do desempenho acadêmico ao longo de 128 estudantes de engenharia, e permaneceram significativos após o controle por GPA ([[isaza-chatgpt-engineering-prompting-2026|Isaza Dominguez et al. (2026)]]).

O contexto comportamental é um sinal separado da própria pergunta: nas quatro implantações do TutorTrace (480 aprendizes, ~180.000 eventos de IDE), condicionar a ajuda ao estado comportamental recente de um aprendiz cortou os intervalos entre consultas sem trabalho independente de 50,0% para 20,7%, e as consultas iminentes eram previsíveis apenas a partir do comportamento (AUROC = ,726) ([[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]]).

A densidade não é o mecanismo: alternar os estudantes entre voz e texto quase dobrou os turnos de diálogo por minuto (1,34 versus 0,75) sem mudar o domínio semanal, e os autores leem a deliberação mediana de 26 segundos do canal digitado antes da primeira tecla como o próprio ato de codificação ([[ai-tutor-modality-randomized-field-experiment-2026|Yang, Van Alstyne e Dellarocas (2026)]]).

Um laço de verificação ainda pode permanecer raso: a análise sequencial de defasagem de uma implantação de agente-LLM de quatro semanas em um curso de graduação em bases de dados descobriu um ciclo significativo Consulta–Avaliação–Consulta, mas fortes laços de autotransição dentro de estados de ordem inferior e apenas 3,92% das interações alcançando a cognição de ordem superior ([[li-dbagent-llm-educational-agent-cs-2026|Li et al. (2026)]]).

O desengajamento conversacional tem taxonomia própria — zombaria, ghosting, espelhamento, retenção, resposta falsa — e, ao longo de 246 diálogos de matemática do ensino fundamental II, apenas a retenção persistiu em vez de se resolver, de modo que o padrão danoso é a falha em se recuperar ([[rho-disengaged-conversational-behaviors-2026|Rho et al. (2026)]]).

Bernstein e Sibia (2026) documentam um padrão iterativo-filtro em como estudantes de CS2 lidam com explicações da GenAI ([[student-reception-genai-analogies-computing-2026]]): eles fazem referência cruzada contra as notas de aula, exigem procedência ("eu ficaria muito mais em dúvida... sem uma") e sondam com perguntas de acompanhamento em busca de inconsistência, em vez de emitir um único juízo de aceitar-ou-rejeitar. Os estudantes também leram as explicações em função de cujo conhecimento e formação eles assumiram — [[prior-knowledge|conhecimento prévio]] assumido além do programa, referências padrão a esportes e games ("o lado mais dominado por homens da computação") e repetição excessiva funcionaram todas como sinais sobre o leitor imaginado, com o excesso de suporte lido como condescendente em vez de meramente ineficiente.

Consultar a IA no *ponto* certo de uma tarefa importa tanto quanto a formulação do prompt individual: no mesmo estudo, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] descobriram que a minoria orientada à realocação alternava trabalho independente com consulta à GenAI e relatava esforço total inalterado, mas com um foco deslocado — movendo recursos da busca para a verificação da qualidade e do equilíbrio argumentativos, e escrevendo notas de reflexão após as sessões para contrariar a retenção rasa —, enquanto aprendizes com objetivos de domínio, mas com [[ai-literacy|letramento em IA]] fraco, caíam em um "paradoxo da eficiência", terceirizando "não por intenção, mas por padrão".
**A imagem que os estudantes fazem do modelo acompanha como eles o usam.** [[cs-students-llm-conceptualizations-prompting-2026|Donekal Chandrashekar et al. (2026)]] constataram que 68% de 283 estudantes pós-CS1 descreviam um LLM como uma pessoa ("amigo inteligente", "tutor"), e o enquadramento como máquina acompanhou conhecimento de mecanismo ligeiramente maior e prompting mais rico em contexto.

### Da interação à pedagogia

Caracterizar a interação estudante-IA informa o [[learning-design|design de aprendizagem]]: os instrutores podem notar quando os padrões de questionamento dos estudantes são estreitos ou rasos e projetar intervenções que ampliem a investigação; o [[teacher-role|papel do professor]] se desloca em direção a treinar os estudantes a interagir produtivamente com a IA. Isso também fundamenta currículos de [[ai-literacy|letramento em IA]] que tratam o prompting e a verificação eficazes como habilidades aprendíveis, e não como capacidades inatas.

Alavancas de design podem deslocar esse padrão: em um curso de física assíncrono com cerca de 70 estudantes, o artefato avaliado era a transcrição do diálogo, e não uma resposta, mas muitos estudantes ainda faziam longas listas de perguntas sem responder aos acompanhamentos [[socratic-method|socráticos]] do modelo — o modo de falha que os critérios foram escritos para captar ([[context-prompts-physics-assignments-2026|Rodriguez & Wulff (2026)]]).

Os prompts de autoria do professor são uma dessas alavancas, mas o rigor encenado fica atrás do alvo: ao longo de 1.479 conversas, 38% ficaram abaixo do nível de Profundidade-de-Conhecimento pretendido pelo professor, aproximando-se de 50% no DOK 3, enquanto linhas de chegada explícitas estreitaram essa lacuna em 0,22 níveis, e um guardrail de "sem respostas diretas" cortou as taxas de resposta final da IA em 8,5 pontos percentuais ([[teacher-authored-prompts-student-ai-dialogue|Liu et al. (2026)]]).

O não uso é ele mesmo um padrão de interação que a [[pedagogy|pedagogia]] precisa prever. [[zou-is-this-a-trap-student-teachers-genai-2026|Zou et al. (2026)]], estudando 85 [[teacher-education|professores em formação]] em três cursos onde o uso de GenAI na [[assessment|avaliação]] era explicitamente permitido, descobriram que 62,4% (53 de 85) recusaram usá-la de todo, muito abaixo dos 79–83% de adoção vistos em surveys comparáveis do Reino Unido e da Austrália, e que o uso dos adotantes era raso e corretivo em vez de generativo (revisão textual 43,8%, verificações de clareza 34,4%, geração de texto apenas 18,8%). Suas escolhas acompanharam o design da avaliação e a cultura institucional, e não a dificuldade técnica: 41,5% dos não adotantes temiam ser acusados injustamente de [[academic-integrity|plágio]], e nove de onze entrevistados leram a própria política permissiva como uma possível "armadilha". A lacuna entre 32 usuários relatados na survey e 28 autodeclarações mostra que a interação com IA *relatada* pelos estudantes é moldada pelas consequências avaliadas — uma ressalva de medição para as contas de análise de aprendizagem da interação estudante-IA.

[[wang-student-ai-collaboration-peer-feedback-2026|Wang e Guo (2026)]] documentam o que o diálogo aberto com IA generativa acrescenta na revisão por pares: estudantes que interrogaram o modelo em vez de aceitar sua primeira sugestão produziram feedback que os pares avaliaram como melhor, e relataram mais prazer na tarefa e menos [[anxiety-and-stress|ansiedade]].

A ansiedade que o diálogo alivia pode ser social, e não técnica: ao longo de 596 estudantes egípcios de inglês como língua estrangeira e oito entrevistas, os aprendizes descreveram perguntar à ferramenta repetidamente porque "não há pressão, e ninguém está julgando" ([[alshammari-interactive-ai-efl-tam-2026|Alshammari e Abdelaty (2026)]]).

## Disciplina e engajamento cognitivo no chat estudante-IA

- **Engajamento cognitivo associado à disciplina no chat estudante-IA.** Chang e Li (2026) analisam prompts de estudantes à IA ao longo de 116 cursos com um design within-person e entre disciplinas, mostrando que as conversas estudante-IA refletem engajamento cognitivo **associado à disciplina**, e não estilos de interação individuais fixos. Cerca de 62% dos prompts codificavam demanda cognitiva de ordem superior no geral, mas os perfis de nível de Bloom diferiam acentuadamente por disciplina: cursos de [[stem-education|STEM]] elicitaram prompts prevalentes em Aplicar (20,8%), cursos de línguas prevalentes em Entender (31,7%) e cursos de ciências sociais prevalentes em Criar (33,8%). Comparações pareadas within-person confirmaram que os mesmos estudantes produziam significativamente mais prompts de ordem superior em ciências sociais do que em cursos de STEM (n agrupado = 16, p < ,001), e a variação em nível de curso excedeu a variação em nível de estudante — um forte argumento de que os assistentes de ensino com IA deveriam ser projetados e avaliados com o contexto disciplinar em mente.
- **O uso se concentra onde o trabalho tem forma de problema.** Em uma replicação com 991 estudantes em cinco universidades dos EUA, os estudantes relataram usar IA em 88% de seus cursos de ciências naturais, contra 52% dos de humanidades e 36% dos de ciências sociais, e estudar havia deslocado escrever como a tarefa mais comum ([[burke-ai-proliferation-college-students-replication-2026|Burke et al., 2026]]).

- **Quanto os estudantes usam IA não previu como eles se sentiam a respeito.** Entre 819 estudantes, gênero, expertise em IA autorrelatada e frequência de uso não alcançaram significância em uma MANOVA (Wilks' Lambda 0,997, p = 0,551; 0,990, p = 0,295). Usuários intensos e leves daquela amostra tinham as mesmas opiniões ([[ai-chatbots-emotional-support-human-connection-2025|Al-Zahrani (2025)]]).

- **“Um estudante não consegue mover a nota de um avaliador.”** Consegue, e é a falha mais persistente da bateria: **17 de 22** modelos elevaram sua nota mais depois de uma objeção nua do que depois de um pedido de segunda olhada, incluindo **seis dos oito** que haviam passado em todas as verificações de jogos e respostas em branco. O maior foi o Llama 3.2 3B com **+33,2% da escala**, e o pedido de segunda olhada por si só baixou as notas de **dez** dos 17, de modo que o contraste não é o efeito bruto da objeção. [[porcaro-ai-grading-benchmark-2026|Notas com as quais um estudante pode argumentar precisam de um registro da troca]].

## Ideias equivocadas comuns

- **"As taxonomias de interação estão resolvidas."** **Ao longo de 46 categorizações de 33 estudos, rótulos similares nomeiam fenômenos diferentes**, e é por isso que a revisão propõe o *episódio de interação* como unidade. Um esquema de codificação emprestado de uma taxonomia pode estar medindo outro construto.
- **"Os estudantes usam a IA como um tutor."** Entre **38 estudantes de graduação** que escreveram redações argumentativas sem supervisão, **76,32% usaram um padrão de turno único de perguntar-receber resposta-e-parar**, tipicamente colando o título da avaliação. O padrão dominante é recuperação de turno único, o que não é tutoria.
- **"Mais uso de IA indica mais engajamento com o material."** Uma análise de **200 sessões de chat de coprogramação** constatou que **78,8% das interações estudante-GenAI rodavam sobre objetivos e estratégias que não visam o domínio**. O volume de interação mediu outra coisa que não a orientação para a aprendizagem, de modo que contagens de sessão são um proxy enganoso de engajamento.

## Conceitos conectados

- [[learners]] — Quem aprende: o guarda-chuva dos conceitos do lado de quem aprende
- [[human-ai-collaboration]]
- [[student-experience]]
- [[prompt-engineering]]
- [[learning-analytics]]
- [[cognitive-offloading]]
- [[intelligent-tutoring]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[llm]]
- [[ai-literacy]]

## Artigos conectados

- [[ai-chatbots-emotional-support-human-connection-2025]] — Frequência de uso e expertise autorrelatada não previram nada em 819 estudantes
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Terceirização cognitiva vs. realocação em avaliações estudante–GenAI sem supervisão (Yan et al. 2026)
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — "Is this a trap?": student teachers' non-adoption of GenAI in assessments (Zou et al. 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[student-ai-inquiry-types-cs2-2026]] — Análise dos tipos de consultas na interação estudante-IA
- [[student-llm-interaction-taxonomy-review-2026]] — Revisão das taxonomias de interação estudante-LLM
- [[teacher-authored-prompts-student-ai-dialogue]] — Prompts de autoria do professor no diálogo estudante-IA
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Construindo o letramento epistêmico em IA
- [[dura-llm-cs2]] — Desmistificar, Usar, Refletir, Avaliar (DURA): integração de LLM em CS2
- [[li-dbagent-llm-educational-agent-cs-2026]] — Agente educacional baseado em LLM (DBagent) no ensino de ciência da computação
- [[isaza-chatgpt-engineering-prompting-2026]] — Comportamentos de prompting e de integração registrados em logs
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Falhas, mas memoráveis: a recepção crítica dos estudantes de analogias da GenAI personalizadas por interesses na educação em computação
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — Contornar, descarregar ou andaimentar: um modelo conceitual de como os grandes modelos de linguagem moldam a aprendizagem
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Quando os tutores de IA falam: evidências de um experimento de campo randomizado
- [[context-prompts-physics-assignments-2026]] — Tarefas de física movidas por inteligência artificial usando prompts de contexto
- [[three-pathways-student-ai-interaction-2026]] — Tipologia tríplice da interação estudante-IA: 46% Revisão Passiva, 18% Pergunta Direta, 36% Diálogo Estratégico
- [[porcaro-ai-grading-benchmark-2026]] — Além da concordância: 22 avaliadores com prompt enfrentam sondagens cuja resposta certa é conhecida, e a maioria deles pode ser convencida a subir a nota (Porcaro 2026)
- [[shen-ai-skill-formation-2026]] — Seis padrões de interação com IA, de 86% a 24% em um quiz sem auxílio (Shen & Tamkin 2026)
- [[cs-students-llm-conceptualizations-prompting-2026]] — Quem (ou o que) eles estão promptando? Como estudantes de ciência da computação conceituam e usam LLMs
- [[burke-ai-proliferation-college-students-replication-2026]] — 991 graduandos: uso por área do curso (88% ciências naturais, 52% humanidades, 36% ciências sociais) e estudar como a tarefa principal