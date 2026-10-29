---
title: "Quais são as melhores práticas para desenvolver um tutor de IA eficaz?"
created: "2026-08-29T20:36:43-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

Seu tutor está a três semanas de um piloto. O chat funciona, o modelo explica uma derivada com clareza e a demonstração interna arrancou aplausos. Então alguém do centro de ensino faz a pergunta para a qual sua especificação não tem campo: depois de um semestre com essa coisa, o estudante vai resolver um problema quando ela não estiver na sala? O que você tem é uma lista de funcionalidades. O que você não tem é uma frase dizendo o que o aprendiz precisa ser capaz de fazer sozinho no final.

Um tutor é uma política envolvendo um [[conversational-ai|chatbot]], e é a política que decide se a aprendizagem acontece. Nomeie o trabalho cognitivo que o aprendiz precisa realizar, faça o sistema exigi-lo (uma tentativa antes da ajuda, uma escada de dicas que se retira, uma verificação que o modelo não consegue falsear) e avalie com o tutor desligado. A qualidade do modelo define quão boa a conversa parece. A política decide o que o estudante consegue fazer em junho.

## A versão curta

**1.** Escreva o objetivo como uma afirmação sobre desempenho sem assistência e depois derive cada funcionalidade dele. Se uma funcionalidade não pode ser rastreada até essa frase, ela é uma funcionalidade de demonstração.

**2.** Construa o modelo do aprendiz a partir de evidências que você consegue registrar, e guarde cada diagnóstico como hipótese com um valor de confiança, não como fato.

**3.** Defina a escada de ajuda no código, com degraus nomeados, e faça a interface cobrar algo do aprendiz por cada passo que ele desce nela.

**4.** Fundamente o conteúdo nos seus próprios materiais e entregue a aritmética, a álgebra e a verificação de código a ferramentas determinísticas que não alucinam.

**5.** Teste falhas de ensino ao longo de conversas inteiras: vazamento de respostas, bajulação, reforço de concepções errôneas, deriva instrucional.

**6.** Meça com uma fase de retirada e um teste atrasado, não com uma nota de satisfação.

## Escreva o objetivo como uma afirmação sobre desempenho sem assistência

Três listas, escritas antes de qualquer pessoa escolher um modelo:

- O que os aprendizes devem saber ou ser capazes de fazer depois.
- Que trabalho cognitivo eles precisam realizar por conta própria.
- O que o tutor pode fazer por eles.

A literatura sobre [[intelligent-tutoring|tutoria inteligente]] sustenta que a eficácia depende do desenho [[pedagogy|pedagógico]] e não apenas da capacidade do modelo, e a falha é fácil de construir por acidente. Um tutor otimizado para "terminar o problema" vai minar um tutor otimizado para "aprender a resolver o problema" enquanto passa em todos os testes funcionais que você escrever, porque ambos produzem respostas finais corretas. A diferença mora no que o estudante fez entre a pergunta e a resposta.

A segunda lista é onde as equipes de desenvolvimento ficam concretas. Pegue um rótulo de domínio como "domínio de derivadas" e recuse-se a deixá-lo significar produzir a derivada correta. Quebre-o em reconhecer quando uma derivada é apropriada, interpretá-la como taxa de variação instantânea, selecionar a regra, executar o procedimento, explicar por que a escolha estava certa, verificar a razoabilidade e aplicá-la a um problema desconhecido. Cada um desses itens é algo separado a registrar, e cada um implica uma resposta diferente quando está faltando. Essa decomposição é também a defesa contra a [[correct-answer-trap-misconceptions|armadilha da resposta correta]], em que o aprendiz chega à resposta certa por raciocínio falho e sua análise registra um sucesso. [[correct-answer-trap-ai-tutor|Pegando a Armadilha da Resposta Correta]] e [[zhang-tutormoments-2026|Quando a Ajuda Não Ajuda]] descrevem versões dessa falha em produção.

## Construa o modelo do aprendiz antes da conversa

O modelo do aprendiz guarda dois tipos de estado: estimativas por conceito (limite: em desenvolvimento, regra da potência: dominada, regra do produto: em desenvolvimento, regra da cadeia: não demonstrada) e hipóteses de concepções errôneas com a evidência e a confiança por trás de cada uma. Mantenha-os separados. A estimativa de conceito é o que orienta a seleção de dificuldade. A hipótese é o que orienta a próxima pergunta.

Cuidado ao deixar um [[llm|LLM]] fazer o diagnóstico sozinho. A [[benchmark|avaliação comparativa]] constatou que tutores baseados em LLM reconheciam raciocínio claramente correto, mas às vezes rejeitavam alternativas válidas ou aceitavam raciocínio incorreto. Um modelo que identifica o caso bom e lê mal o ambíguo falha justamente com os estudantes que precisam de ajuda. Em domínios consequentes, a arquitetura que sobrevive é **diagnóstico estruturado mais diálogo flexível de LLM**, o arranjo que [[yasir-llm-tutoring-agents-2026|Confirmando o Correto, Perdendo o Resto]] descreve: seu próprio detector estabelece o que o estudante provavelmente fez, e o modelo escreve a conversa em torno dessa constatação.

Dê ao diagnóstico uma sequência explícita que o modelo não consiga pular: detectar, verificar, responder. O modelo pode propor uma [[misconceptions|concepção errônea]] como hipótese, mas precisa verificá-la contra o trabalho real do estudante ou uma pergunta direcionada antes que o tutor responda a ela. Sem esse passo, o sistema inventa evidência e depois tutoria o estudante por um erro que ele não cometeu, o que é inútil e um pouco ofensivo.

Evidências que valem registro, em ordem aproximada de utilidade: tentativas recentes com seus passos intermediários, conhecimento demonstrado por conceito, comportamento de busca de ajuda (que é ele próprio um sinal sobre confiança) e confiança autorrelatada quando você a coleta. Adapte dificuldade e assistência a partir desse registro, e trate o último prompt do aprendiz como uma entrada entre outras. Um único prompt é um mau estimador do que um estudante sabe, e um tutor que reage a ele vai oscilar sem parar.

## Defina a escada de ajuda e depois faça a interface cobrar por ela

Escreva os degraus antes de escrever um prompt, porque a escada é uma decisão de produto com estados nomeados, e uma configuração de tom não consegue expressá-la. Uma sequência viável:

1. Tentativa independente.
2. Pergunta metacognitiva sobre o que o estudante já tentou.
3. Dica conceitual.
4. Identificação da regra relevante.
5. Montagem de parte do problema.
6. Passo intermediário resolvido.
7. Solução resolvida.
8. O estudante explica a solução.
9. O estudante resolve um problema comparável sem ajuda.

O apoio se retira à medida que a competência aumenta, que é o mecanismo no centro do [[scaffolding]]. Ver uma solução resolvida não demonstra domínio, então qualquer sessão que alcance o sétimo degrau deve ao aprendiz o nono antes de contar como concluída.

A evidência causal para construir a escada vem de um experimento de campo em que uma interface GPT sem proteções aumentou o desempenho assistido em matemática e reduziu o desempenho posterior em prova sem assistência. Um tutor que dava dicas eliminou em grande parte essa penalidade de aprendizagem ([[generative-ai-guardrails-harm-learning|IA generativa sem proteções pode prejudicar a aprendizagem]]). A restrição é arquitetural. O mesmo modelo, com comportamento de ajuda diferente, produziu resultados opostos na medida que importa.

Um experimento de campo randomizado maior, com mais de 6.000 estudantes do ensino fundamental em uma plataforma de prática baseada em domínio, mostra como a escada aparece nos registros. Estudantes designados para o apoio de IA progrediram mais devagar e tentaram menos questões, e responderam com mais precisão. O mecanismo mais claro foi a correção na tentativa seguinte após um erro: foram necessárias menos tentativas para voltar a uma resposta correta. Esse padrão é uma desaceleração produtiva, e é a assinatura que uma escada de dicas deve deixar ([[making-ai-tutoring-productive-mastery-math-2026|Tornando a Tutoria com IA Produtiva]]).

O mesmo estudo traz um alerta sobre seus próprios painéis. Exigir três respostas corretas seguidas elevou acentuadamente o domínio definido pela plataforma sem produzir ganhos detectáveis em um teste atrasado uma semana depois. A evidência mais forte de teste atrasado apareceu apenas onde a IA ficava dentro do fluxo de trabalho de domínio (coeficiente 0,085), não onde estava disponível como acesso autônomo. Se sua métrica de sucesso é um contador de sequências, você vai entregar um sistema que otimiza a sequência.

O atrito na interface pertence à mesma rodada de projeto. Dicas ilimitadas atrás de um botão visível transformam a escada inteira em atalho, e pedidos prematuros de dica com leitura superficial estão associados a menores [[learning-gains|ganhos de aprendizagem]]. Substituir `[Dica][Dica][Dica][Mostrar Resposta]` pelas perguntas "o que você já tentou?" e "qual parte está bloqueando você?" (escolher uma regra, montar a equação, fazer a álgebra, entender o conceito) custa uma tela e encaminha o estudante ao degrau de que ele realmente precisa. Também te dá os dados de registro que mostram qual degrau ele costuma pular.

## Entregue as partes verificáveis a um verificador

Fundamente a geração em material aprovado pelo instrutor: seções do livro didático, notas de curso, exemplos resolvidos, terminologia, métodos aprovados, notação, regras de tarefas, políticas e recursos [[curriculum-design|curriculares]]. A geração aumentada por recuperação sobre esse corpus reduz o [[hallucination-risk|risco de alucinação]] e não o elimina, como o [[rag|RAG]] expõe. Mostre citações ou proveniência na interface onde o estudante possa conferir uma afirmação, porque a citação é o que torna a fundamentação auditável depois do fato.

A fundamentação também faz um trabalho que as métricas de precisão não captam. Um curso tem métodos aprovados, e um tutor que introduz uma técnica matematicamente válida que o curso não usa ensinou ao estudante algo pelo qual ele será penalizado. A recuperação a partir da camada do curso é como o tutor permanece dentro do conjunto de métodos.

Para domínios com respostas formalmente verificáveis, acrescente ferramentas determinísticas: calculadoras, sistemas de matemática simbólica, execução de código, grafos de conhecimento, validadores baseados em regras e solucionadores [[discipline-specific-aied|específicos do domínio]]. A divisão do trabalho é a parte importante. O LLM cuida da explicação e do diálogo. O motor simbólico verifica equivalência algébrica, derivadas, integrais, soluções de equações, pontos críticos e aproximações numéricas. Um passo intermediário errado que o verificador captura vira um momento de tutoria. Um passo intermediário errado que nada captura vira uma concepção errônea que o estudante leva para a prova.

## Exija que o aprendiz aja sobre o feedback

Feedback que diz "Correto", "Incorreto" ou "Bom trabalho" é um evento de pontuação vestido de interface de ensino. A base de conhecimento trata o [[feedback]] como um laço de provisão e aproveitamento: o feedback apoia a aprendizagem quando os estudantes o compreendem e agem sobre ele, e a segunda metade é a metade que os sistemas costumam pular. Construa o tutor para nomear o passo de raciocínio envolvido, dizer o que precisa ser reconsiderado, dar uma próxima ação concreta e pedir ao aprendiz que preveja ou explique antes de o feedback ser revelado.

A sequência que sustenta isso é: aprendiz primeiro, IA depois, aprendiz de novo. O estudante gera, escolhe, justifica, avalia ou reflete; o tutor responde; o estudante faz algo com a resposta. Projete a estrutura das interações para que isso não seja opcional. Um sistema em que o modelo consegue produzir três parágrafos em resposta a uma pergunta ensina o estudante a perguntar e a ler.

O objetivo de longo prazo é a internalização. Os aprendizes devem acabar executando por conta própria as estratégias de questionamento e de [[problem-solving|resolução de problemas]] do tutor, o que é o argumento da [[agency|autonomia]] e a razão pela qual a escada tem um degrau superior em que o tutor fica em silêncio.

## Projete para o que acontece na quadragésima interação

A segurança pedagógica é um conjunto de testes separado da segurança comum de chatbot, e a maioria das equipes entrega apenas com o segundo. Toxicidade e resistência a jailbreak não dizem nada sobre se o tutor vai entregar a resposta a um estudante que pede duas vezes, concordar com um método errado porque o estudante soou confiante, sair do conjunto de métodos do curso ao longo de uma sessão longa ou empurrar o aprendiz para o [[cognitive-offloading|descarregamento cognitivo]]. A [[ai-sycophancy|bajulação]] é a que passa primeiro, porque a concordância é lida como gentileza e seus dados de preferência a recompensam.

Teste vazamento de respostas, reforço de concepções errôneas, concordância excessiva, dificuldade inadequada, descarregamento, tratamento enviesado, perda de autonomia do aprendiz, deriva instrucional e excesso de confiança em explicações incorretas. Rode os testes em conversas extensas, não em turnos isolados, porque as falhas pedagógicas se acumulam: os primeiros dez turnos podem ser exemplares e o décimo primeiro pode desfazer a sessão. Um tutor deve ser gentil e correto ao mesmo tempo, inclusive quando o aprendiz insiste em uma concepção errônea. [[pedagogical-safety|Segurança pedagógica]] e [[hazra-safetutors-pedagogical-safety-2026|Segurança do Tutor de IA e Danos Pedagógicos]] apresentam a taxonomia das falhas.

## Coloque a arquitetura de dados no mesmo documento de projeto

Colete apenas dados de aprendiz pedagogicamente necessários, e seja capaz de dizer por que cada campo existe. Onde você mantiver memória persistente ou um [[student-modeling|modelo do aprendiz]], torne sua finalidade visível para o aprendiz, dê a ele controle apropriado sobre ela, proteja informações sensíveis, defina retenção e encaminhe decisões consequentes a um instrutor ou a outro [[human-in-the-loop-ai|ponto de checagem humano]]. Um modelo do aprendiz que acumula em silêncio uma estimativa de confiança que o estudante nunca vê é um problema de proteção de dados e um problema pedagógico.

Audite o comportamento entre origens linguísticas, níveis de habilidade, contextos culturais, necessidades de [[accessibility|acessibilidade]] e níveis de [[prior-knowledge|conhecimento prévio]] e experiência com IA. Desempenho diferencial sobre o mesmo objetivo é um bug com um estudante acoplado a ele, e ele não vai aparecer no seu número agregado de precisão.

Uma decisão de acessibilidade merece linha própria: não faça da [[prompt-engineering|engenharia de prompt]] sofisticada um pré-requisito para uma boa instrução. Se o tutor só ensina bem quando o estudante escreve um prompt cuidadoso, você construiu um sistema que favorece estudantes que já sabem conversar com modelos. O tutor deve ajudar os aprendizes a formular perguntas produtivas, o que também é uma habilidade de [[metacognition|metacognição]] que vale a pena ter.

## Instrumente o intervalo de retirada

As métricas de sessão não dirão se a coisa funciona. Precisão de resposta, duração da conversa, preferência do estudante, satisfação, conclusão de tarefa e [[student-engagement|engajamento]] sobem todos em sistemas que não ensinam nada, porque estudantes gostam de ajuda e ajuda é fácil de medir. Avalie desempenho sem assistência, retenção atrasada, transferência para problemas novos, correção de concepções errôneas, independência do aprendiz, aproveitamento do feedback e [[differential-effects-across-learner-groups|efeitos diferenciais entre grupos de aprendizes]]. O [[ai-ed-evaluation|material sobre avaliação em AIED]] traz os métodos, e [[ai-tutor-behavioral-evaluation|O Eixo de Avaliação que Falta]] argumenta que o comportamento é o construto.

Dois estudos afiam a regra contra o [[self-report-measures|autorrelato]] e horizontes curtos. Um piloto com 38 estudantes novatos de programação encontrou uma associação forte entre uso de [[generative-ai|IA generativa]] e aprendizagem *percebida* (rs=0,802, p<0,001), enquanto os indicadores de progresso autônomo sem apoio do instrutor ficaram com a pontuação mais baixa. Os autores chamam essa lacuna de ilusão de competência e dívida epistêmica, e é exatamente a lacuna que uma métrica de satisfação recompensa ([[genai-cognitive-tutor-programming-2026|A IA generativa como tutor cognitivo informal]]).

De modo mais fundamental, a maior parte da avaliação para no momento em que a assistência termina. [[cognitive-washout-ai-skill-decay-2026|A dinâmica de washout cognitivo]] nomeia o intervalo pós-retirada não medido e formaliza quatro desfechos: rebote elástico, platô parcial, andaime latente e sobrerrecuperação. Sua curva de washout carrega uma constante de tempo de recuperação, um termo de completude da recuperação e um índice de histerese que compara o esforço de reaprendizagem ao esforço original. Como a reversibilidade determina a gravidade, o framework argumenta que a prática programada sem assistência deve ser dosada conforme a curva de recuperação, em vez de debatida como questão de princípio. Seu plano de avaliação precisa de uma fase de retirada além de um pós-teste imediato, e [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|a evidência randomizada de que uma assistência breve deprime o desempenho posterior sem assistência]] é a razão para agendá-la cedo.

## Dê aos professores algo para editar

Antes da implantação, peça a educadores que testem perfis realistas de aprendizes, concepções errôneas comuns, casos de borda, prompts adversariais, respostas ambíguas e conversas longas de tutoria. Registre as falhas pedagógicas e realimente prompts de sistema, políticas de tutoria, fontes de conhecimento, [[guardrails|proteções]], regras do modelo do aprendiz e seleção de modelo. Uma resposta fluente ainda pode estar pedagogicamente errada, e um professor é o único revisor que consegue ver isso.

[[teacher-intervention-k12-ai-based-instruction-2026|A revisão sistemática de Lee sobre 29 estudos de educação básica]] descreve em que consiste essa supervisão e onde ela quebra. A intervenção [[teacher-role|docente]] é um ciclo repetido de quatro fases: monitoramento, julgamento, intervenção e orquestração. Alertas de IA, [[visualization|painéis]] e pontuações automatizadas "não levam automaticamente a ação pedagógica". A estratégia docente mais forte que a revisão encontra é a tradução pedagógica: selecionar, revisar, complementar, resumir ou apagar o feedback do chatbot em vez de repassá-lo.

Duas advertências de projeto decorrem disso, e ambas contradizem o roteiro habitual. Mais informação de IA não é melhor: sistemas que emitem diagnósticos continuamente sobrecarregaram professores e desviaram a atenção da observação que eles próprios fazem. Priorize o que vale agir, torne isso interpretável e ofereça recomendações em uma forma que o professor possa aceitar, modificar, adiar ou rejeitar. Mais apoio ao professor também não é melhor: adiar a intervenção para que os estudantes trabalhem de forma independente é, em si, expertise. Condições estruturais, ou seja, tempo para revisar dados, tamanho da turma e capacidade de chegar fisicamente aos grupos que precisam de ajuda, fazem parte da intervenção e não são logística de fundo. Um painel feito para um professor sem horário livre não é aberto.

## Caso um: um tutor de cálculo, em que a verificação é barata

Um tutor de cálculo do primeiro semestre da faculdade deve elevar o que os estudantes conseguem resolver e explicar de forma independente depois que ele é removido, não maximizar problemas concluídos corretamente. A tutoria de matemática é especialmente vulnerável ao excesso de scaffolding, ao uso prematuro de dicas e ao diagnóstico incorreto do raciocínio do estudante, e os três são visíveis nos seus registros se você olhar ([[math-education|educação matemática]]).

**Fundamentação e verificação.** Uma construção em seis camadas: materiais do curso e políticas do instrutor, depois uma camada de recuperação, depois um motor de problemas e um modelo do aprendiz ao lado de um verificador simbólico e um motor de diagnóstico, depois uma camada de política pedagógica, depois a geração conversacional, depois o estudante, e de volta ao modelo do aprendiz. O verificador é a razão pela qual esse desenho é viável. Ele decide se uma expressão é equivalente, se uma derivada está correta, se uma integral foi calculada, se um ponto crítico foi encontrado, e o faz sem pedir a opinião do modelo.

**Uma interação.** Para derivar $f(x)=(x^2+1)\sin x$, um chatbot convencional revela a resposta. Um tutor orientado à aprendizagem raciocina internamente que o estudante derivou ambos os componentes mas multiplicou os resultados, uma possível [[misconceptions|concepção errônea]] de regra do produto como $f'g'$, e faz primeiro uma pergunta diagnóstica: qual regra se aplica quando duas funções são multiplicadas? Depois o estudante escreve a regra do produto simbolicamente, define $u$ e $v$, e só então o tutor verifica a expressão final. Note quanto da tutoria aconteceu antes de qualquer prosa do modelo chegar ao estudante.

**Múltiplas representações.** Conecte procedimentos simbólicos à fórmula, ao gráfico, à tabela, a uma interpretação verbal e a um contexto físico de taxa de variação. Fluência procedimental e compreensão conceitual parecem idênticas em uma folha de respostas corretas e divergem no problema de transferência.

**O painel.** Exponha evidência agregada em lugar de julgamentos opacos: "regra do produto, 62% de domínio demonstrado; padrões comuns, 18% omitem um termo, 11% multiplicam as derivadas". Diagnósticos individuais saem como hipóteses com a evidência que as sustenta, o que é também o que os torna revisáveis por um professor (a [[explainable-ai|explicabilidade]] importa mais para o professor do que para o estudante aqui).

**O plano de avaliação.** Desempenho com o tutor, desempenho em problemas comparáveis sem ele, retenção atrasada, transferência para problemas desconhecidos, qualidade da explicação conceitual, correção de concepções errôneas, [[help-seeking|busca de ajuda]] apropriada contra prematura, vazamento de respostas, taxas de falso positivo e falso negativo do diagnóstico e resultados diferenciais. A comparação que decide o projeto é assistido contra sem assistência depois. Um estudante que passa de 60% para 95% com o tutor e fica em 60% sozinho não foi tutorado.

## Caso dois: um coach de escrita, em que a etapa decide a permissão

A escrita não tem uma única resposta correta, então a verificação é julgamento e o trabalho de projeto se desloca para o escalonamento por etapas. A base de conhecimento enquadra a escrita como processo cognitivo, social e retórico, o que significa que um sistema de escrita com IA pode apoiar a aprendizagem e também pode eliminar exatamente o pensamento que a tarefa existia para desenvolver ([[writing-education|educação para a escrita]], [[coach-not-crutch-ai-writing|coach, não muleta]]).

**Um modelo de capacidades.** Acompanhe argumentação (especificidade da tese, alinhamento entre afirmação e evidência, contra-argumento), organização (foco do parágrafo, progressão lógica, transições), evidência (relevância da fonte, integração, interpretação), revisão (revisão global e no nível da frase, avaliação de feedback) e estilo (clareza, gramática, voz). Cada um vira um sinal separado no modelo do aprendiz, o que é o que torna o feedback direcionado possível.

**Funde o coach na tarefa.** Recupere as instruções, a rubrica do instrutor, as leituras do curso, os requisitos de citação, as convenções de gênero, os exemplos do instrutor e a política de uso de IA, para que o feedback possa dizer "a rubrica do seu instrutor pede que você conecte cada afirmação principal a evidências de pelo menos duas leituras do curso" em vez de inventar expectativas genéricas. Conselho genérico é a falha padrão de uma ferramenta de escrita sem fundamentação, e os estudantes percebem em duas sessões.

**Defina permissões por etapa.** O envolvimento de IA em etapas diferentes afeta a percepção de autoria de modo diferente. O apoio ao planejamento reduz menos a autoria do que o apoio à redação, e a redação gerada por IA produz a maior queda ([[ai-writing-support-stage-ownership-2026|Do Planejamento à Revisão]]). Esse achado se converte diretamente em uma tabela de permissões. No planejamento, o coach faz perguntas, compara posições, questiona pressupostos e critica esboços, e não gera o argumento. Na redação, o aprendiz produz prosa primeiro e o coach desenvolve em vez de assumir o controle. Na revisão, o coach diagnostica e para ali: afirmações pouco claras, evidência faltante, evidência que não sustenta a afirmação, problemas de organização, o rascunho contra a rubrica. Na edição, depois da revisão, ele cuida de gramática, pontuação, concisão e formatação de citações.

**Uma interação resolvida.** Para uma redação sobre exigir [[online-teaching-and-learning|cursos on-line]], um sistema genérico reescreve o parágrafo do estudante em prosa polida e faz o trabalho intelectual. Um coach diz o que está funcionando, nomeia o problema principal (o parágrafo dá razões mas nunca explica por que elas justificam um mandato para toda a universidade), propõe uma pergunta de revisão e pede ao estudante que complete uma frase com as próprias palavras. O argumento fica onde pertence.

**Feedback priorizado.** Uma força a preservar, um problema de alto impacto, uma pergunta que exige julgamento do autor, um objetivo concreto de revisão. Não quarenta comentários. Um estudante que recebe quarenta comentários os tria pelo tamanho, e a triagem não tem nada a ver com o que importa.

**Faça o estudante julgar o feedback.** O [[feedback-literacy|letramento em feedback]] é um objetivo de aprendizagem por direito próprio. Pergunte periodicamente se o aprendiz concorda com uma sugestão e por quê, e deixe que ele a rejeite. O resultado é [[evaluative-judgment|julgamento avaliativo]] e não conformidade, e é também a única defesa contra um coach que está confiantemente errado.

**Preserve a voz.** Distinga erros, problemas de clareza, escolhas retóricas e preferências de estilo, e não mexa nas duas últimas. Um coach que "corrige" escolhas retóricas homogeneíza a escrita na direção do estilo que o modelo prefere, e causa o maior dano a escritores [[multilingual-learning|multilíngues]] e a tradições retóricas não padrão ([[ai-feedback-quality|qualidade do feedback de IA]] é a versão geral desse problema).

**Aprenda com as revisões.** Guarde o histórico de revisões, não apenas as redações finais. Um padrão repetido de "evidência introduzida mas não interpretada" que melhora ao longo de três redações é o sinal mais útil que um sistema de escrita pode ter, e ele é gratuito.

**Avaliação.** Qualidade da escrita assistida por IA e da escrita posterior sem assistência, capacidade de encontrar fragilidades em textos desconhecidos, qualidade da revisão, aproveitamento do feedback, capacidade de explicar as revisões, autoria, dependência da prosa de IA, preservação da voz, viés entre dialetos e escritores multilíngues, alinhamento com o julgamento do instrutor e transferência atrasada. O desenho que responde a isso tem três braços: escrever de forma independente, IA gerando o texto e um coach. Todos os três grupos escrevem depois uma nova redação sem IA. Se o grupo da IA gerada vence na prática e perde sem ela, o sistema melhorou o desempenho e não a aprendizagem. Padrões de nível de turma a partir do painel (41% precisam de apoio na conexão entre afirmação e evidência) são um sinal de [[formative-assessment|avaliação formativa]] para o instrutor.

## Comparando as duas construções

| Questão de projeto | Tutor de cálculo | Coach de escrita |
|---|---|---|
| Objeto principal de aprendizagem | Conceitos matemáticos e resolução de problemas | Argumentação e processo de escrita |
| Verificação | Frequentemente verificável de modo objetivo | Normalmente exige julgamento contextual |
| Ferramentas determinísticas | Motor de matemática simbólica, calculadora | Verificações de gramática, citação, rubrica |
| Papel principal da IA | Diagnosticar e dar scaffolding ao raciocínio | Diagnosticar e dar scaffolding à revisão |
| Risco principal | Entregar a solução | Escrever o texto pelo aprendiz |
| Ação do aprendiz que importa | Resolver e explicar | Rascunhar, avaliar e revisar |
| Modelo do aprendiz | Conceitos, procedimentos, concepções errôneas | Argumento, evidência, organização, revisão |
| Proteção central | Tentativa antes da solução | Prosa do estudante antes da reescrita por IA |
| Teste de transferência | Problemas novos de cálculo sem IA | Tarefa nova de escrita sem IA |
| Critério de sucesso | Raciocínio matemático independente | Escrita independente e julgamento avaliativo |

Ambos os sistemas usam o mesmo conjunto de [[ai-technologies|tecnologias de IA]] e encarnam políticas pedagógicas diferentes, porque as disciplinas exigem tipos diferentes de pensamento. A regra que se generaliza é identificar a atividade cognitiva que produz a aprendizagem e projetar a IA para apoiar essa atividade sem executá-la. Essa regra está acima de qualquer modelo, prompt, framework de agente ou interface específico.

## O que as equipes de desenvolvimento erram

A pedagogia mora no prompt de sistema, então um prompt cuidadoso é um projeto pedagógico. Um prompt é uma camada de uma política que também inclui quais evidências você coleta, qual degrau a interface oferece, o que o verificador checa e o que o painel mostra. Um prompt bem escrito sobre um modelo do aprendiz que não guarda nada produzirá um tutor fluente sem memória do estudante, e a escada recomeça a cada sessão.

Um modelo melhor vai corrigir o diagnóstico. O resultado da avaliação comparativa acima encontrou tutores de LLM reconhecendo raciocínio correto enquanto rejeitavam alternativas válidas e aceitavam as incorretas, o que é um padrão de erro que escala não conserta de forma óbvia. O diagnóstico estruturado existe porque o julgamento do modelo é a parte que você não consegue auditar.

Satisfação e conclusão provam que o projeto funciona. Provam que os estudantes receberam ajuda. O piloto com 38 estudantes de programação encontrou aprendizagem percebida fortemente associada ao uso, enquanto o progresso autônomo teve a pontuação mais baixa, e o estudo de domínio encontrou um requisito de sequência elevando o domínio da plataforma sem ganho em teste atrasado. Construa a medida de retirada no piloto ou você aprenderá a lição errada com eficiência.

A recuperação torna as respostas confiáveis. Ela reduz o [[hallucination-risk|risco de alucinação]] e deixa o resto da superfície de falha intacta: uma passagem recuperada pode ser mal interpretada, uma técnica válida pode estar errada para o curso, e o modelo ainda pode estar confiantemente errado sobre um passo que ele mesmo derivou. A recuperação é um piso.

Passar no conjunto de testes de segurança significa que é seguro para estudantes. O teste de segurança comum cobre toxicidade e jailbreaks. As falhas pedagógicas que importam aqui, vazamento de respostas, bajulação e deriva, são invisíveis para ele, e se acumulam ao longo de uma conversa em vez de aparecer em um único turno.

Engajamento é o objetivo. Duração da conversa e número de sessões são as métricas mais baratas de instrumentar, e é por isso que são promovidas a objetivos. O argumento do [[scaffolding]] diz que a sessão ideal fica mais curta à medida que o estudante melhora, então uma alta no engajamento é tão provavelmente um sintoma.

## O que vai voltar contra você

**"Entregamos em seis semanas e isso é um trimestre de trabalho."** A maior parte da arquitetura é barata. Um portão de tentativa, uma escada configurada, recuperação sobre notas que você já tem e um esquema de registro com um campo de retirada são alguns dias de trabalho. Os itens caros (modelo do aprendiz, verificador, painel) podem começar atrás de uma flag de funcionalidade para um curso, e o piloto é mais informativo com as partes baratas feitas.

**"Os estudantes adoram e a conclusão subiu."** Os dois fatos são compatíveis com um sistema que responde bem a perguntas e não ensina nada. O estudo com 6.000 estudantes encontrou progresso mais lento e menos questões tentadas junto com melhor precisão, então uma queda na conclusão também não é automaticamente má notícia. Relate o desempenho sem assistência ao lado dos números de engajamento e deixe os dois discordarem em público.

**"Não conseguimos rodar um ensaio randomizado."** Você pode rodar uma comparação dentro do estudante sem um: o mesmo objetivo, assistido durante a unidade, testado sem assistência duas semanas depois, com a nota assistida relatada ao lado. Esse desenho responde à pergunta de produto e não precisa de braço de controle. O que ele não pode dizer é o contrafactual para estudantes que nunca usaram o tutor.

**"O modelo é uma API de fornecedor, então o comportamento de ajuda está fora das nossas mãos."** Os degraus vivem na sua camada de orquestração, e o resultado do experimento de proteção veio de mudar o que o tutor podia dizer, não de trocar modelos. Espere que o pós-treinamento do fornecedor puxe para responder prontamente, porque utilidade é aquilo para o que ele foi ajustado, e coloque a contenção no seu próprio código.

**"Os professores não vão usar outro painel."** Não vão usar um que emite diagnósticos contínuos, o que a revisão de educação básica constatou desviar a atenção da observação que eles próprios fazem. Dê a eles um número pequeno de sinais interpretáveis, uma forma de aceitar ou rejeitar cada recomendação, e tempo na semana para olhá-los.

**"Não temos especialistas de disciplina na equipe."** Então o tutor vai ensinar método genérico e a notação do curso vai derivar dentro de um semestre. Um especialista da disciplina por dois dias na fase de projeto, escrevendo a lista de concepções errôneas e a lista de métodos aprovados, é o item mais barato do projeto e o primeiro que as equipes cortam.

## O que fazer nesta semana

**1.** Escreva a frase de desempenho sem assistência para o piloto e coloque-a na especificação, acima da lista de funcionalidades.

**2.** Adicione um portão de tentativa e registre-o. Registre se o estudante tentou antes da primeira dica e a qual degrau ele chegou.

**3.** Substitua o botão de dica pela pergunta sobre o ponto de bloqueio e registre a resposta como categoria.

**4.** Agende uma verificação sem assistência duas semanas depois da unidade e coloque-a no calendário com um responsável.

**5.** Reserve dois dias com um professor da disciplina para escrever a lista de concepções errôneas e a lista de métodos aprovados.

## Para onde ir a seguir

[[designing-educational-ai-software]] cobre as regras de nível de software que um tutor precisa satisfazer, e [[designing-ai-into-learning]] cobre onde o tutor se situa em uma sequência de curso. [[evaluating-ai-interventions-methods]] e [[checking-whether-educational-ai-works]] tratam de se a coisa funciona. Se o seu problema é que o modelo responde com muita facilidade, [[making-ai-better-at-supporting-learning]] e [[training-ai-tutors-to-guide-rather-than-answer]] trabalham o lado de treinamento da mesma questão.
