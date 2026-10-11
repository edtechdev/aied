---
title: "Quais são as melhores práticas para desenvolver um tutor de IA eficaz?"
created: "2026-08-29T20:36:43-04:00"
updated: "2026-10-02T08:21:34-04:00"
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
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

Um tutor de IA eficaz deve ser desenhado como um **sistema de aprendizagem, e não como um [[conversational-ai|chatbot]] gerador de respostas**. O tema mais forte em toda a base de conhecimento é que a estrutura [[pedagogy|pedagógica]] — diagnóstico, apoio (scaffolding), feedback, agência do aprendiz e avaliação — importa ao menos tanto quanto o modelo subjacente. Os dois exemplos trabalhados abaixo (um tutor de cálculo e um coach de escrita) mostram como a mesma arquitetura central deve ser moldada pelo que a disciplina exige do aprendiz.

## 1. Comece com objetivos de aprendizagem explícitos e defina a tarefa do aprendiz

Antes de escolher um modelo, especifique:

- O que os aprendizes devem saber ou ser capazes de fazer depois.
- Que trabalho cognitivo eles mesmos devem realizar.
- Com o que o tutor pode auxiliar.

Um tutor otimizado para "terminar o problema" pode facilmente sabotar um tutor otimizado para "aprender a resolver o problema". O conceito [[intelligent-tutoring|tutoria inteligente]] enfatiza que a eficácia depende do desenho pedagógico, e não apenas da capacidade do modelo.

## 2. Diagnostique antes de prescrever

Mantenha um modelo do aprendiz baseado em evidências como conhecimento demonstrado, [[misconceptions|concepções errôneas]], tentativas recentes, comportamento de busca de ajuda e confiança, quando apropriado. Adapte a dificuldade e a assistência a partir dessa evidência, em vez de simplesmente reagir à provocação mais recente do aprendiz. Seja cauteloso ao permitir que um [[llm|LLM]] faça o diagnóstico sozinho: [[benchmark|benchmarking]] constatou que tutores baseados em LLM podiam reconhecer raciocínio claramente correto, ao mesmo tempo que às vezes rejeitavam alternativas válidas ou aceitavam raciocínio incorreto. Para domínios consequentes, uma arquitetura útil é **diagnóstico estruturado + diálogo flexível de LLM**. Ver [[yasir-llm-tutoring-agents-2026|Confirmando o Correto, Perdendo o Resto]].

## 3. Use uma escada de dicas em vez de dar a solução imediatamente

Uma sequência de tutoria útil é: peça uma tentativa, investigue o raciocínio do aprendiz, dê uma pequena pista, dê uma dica conceitual mais forte, demonstre um passo parcial, forneça uma solução trabalhada apenas quando justificado, e então peça ao aprendiz que explique ou aplique a ideia de forma independente. O apoio deve **diminuir à medida que a competência aumenta**. Isso é central para o conceito de [[scaffolding|apoio]]. Um experimento de campo importante constatou que uma interface GPT sem proteções aumentou o desempenho assistido em matemática, mas reduziu o desempenho posterior em prova sem assistência, enquanto um tutor que dá dicas eliminou em grande parte essa penalidade de aprendizagem — ver [[generative-ai-guardrails-harm-learning|A IA generativa sem proteções pode prejudicar a aprendizagem]].

Um experimento de campo randomizado maior, com mais de 6.000 estudantes do ensino fundamental em uma plataforma de prática baseada em maestria, encontrou a mesma assinatura em detalhe mais fino: os estudantes designados para apoio de IA progrediam mais lentamente e tentavam menos questões, mas respondiam com mais precisão e — o mecanismo mais claro — melhoravam sua precisão na tentativa seguinte após erros, precisando de menos tentativas para voltar a uma resposta correta. Essa é uma **desaceleração produtiva**, e não uma corrida pela resposta, e é o comportamento que uma escada de dicas deve produzir. O mesmo estudo fornece uma cautela sobre proxies: exigir três respostas corretas seguidas elevou fortemente a maestria definida pela plataforma sem produzir ganhos detectáveis em um teste atrasado uma semana depois, e a evidência mais forte de teste atrasado apareceu apenas onde a IA estava dentro do fluxo de trabalho de maestria (coeficiente 0,085), e não como acesso independente. Ver [[making-ai-tutoring-productive-mastery-math-2026|Tornando a Tutoria com IA Produtiva]].

## 4. Torne o feedback específico, imediato, acionável e conectado ao raciocínio

Evite feedback que apenas diz "Correto", "Incorreto" ou "Bom trabalho". Em vez disso, o tutor deve identificar o passo de raciocínio envolvido, explicar o que precisa ser reconsiderado, dar ao aprendiz algo concreto para fazer em seguida e, quando apropriado, pedir ao aprendiz que preveja ou explique antes de revelar o feedback. A base de conhecimento trata o [[feedback]] como um **laço completo de provisão–aproveitamento**: o feedback só apoia a aprendizagem quando os estudantes o compreendem e agem sobre ele.

## 5. Fundamente o conteúdo factual em vez de confiar na memória do LLM

Use geração aumentada por recuperação contra materiais confiáveis, como livros didáticos aprovados pelo professor, notas de curso, exemplos trabalhados, políticas e recursos [[curriculum-design|curriculares]], e exponha citações ou proveniência onde for útil. Para domínios com respostas formalmente verificáveis, acrescente ferramentas determinísticas, como calculadoras, sistemas de matemática simbólica, execução de código, grafos de conhecimento, validadores baseados em regras e resolvedores [[discipline-specific-aied|específicos do domínio]]. O RAG pode reduzir o [[hallucination-risk|risco de alucinação]], embora não o elimine — ver [[rag|Geração Aumentada por Recuperação]].

## 6. Desenhe para a metacognição e a agência do aprendiz

Exija regularmente que o aprendiz gere, escolha, justifique, avalie ou reflita. Um princípio de desenho útil é **aprendiz primeiro → IA depois → aprendiz de novo**. O objetivo de longo prazo é que os aprendizes internalizem as estratégias de questionamento e de [[problem-solving|resolução de problemas]] do tutor, em vez de se tornarem dependentes dele. Ver [[agency|agência do aprendiz]] e [[scaffolding|apoio]].

## 7. Trate a segurança pedagógica como diferente da segurança ordinária de chatbot

O teste de segurança de um tutor educacional deve incluir mais do que toxicidade e resistência a jailbreak. Teste vazamento de respostas, reforço de concepções errôneas, concordância excessiva ou [[ai-sycophancy|bajulação]], dificuldade inadequada, [[cognitive-offloading|descarregamento cognitivo]], tratamento enviesado, perda de agência do aprendiz, deriva instrucional e excesso de confiança em explicações incorretas. Um tutor deve ser **gentil, mas correto**, inclusive quando o aprendiz insiste em uma concepção errônea, e os testes devem envolver conversas estendidas porque as falhas pedagógicas podem se acumular ao longo de múltiplas interações. Ver [[pedagogical-safety|segurança pedagógica]] e [[hazra-safetutors-pedagogical-safety-2026|Segurança do Tutor de IA e Danos Pedagógicos]].

## 8. Incorpore privacidade, acessibilidade e equidade à arquitetura

Colete apenas os dados do aprendiz que sejam pedagogicamente necessários. Onde memória persistente ou [[student-modeling|modelagem do aprendiz]] for usada, torne transparente sua finalidade, dê aos aprendizes controle apropriado, proteja informações sensíveis, defina políticas de retenção e forneça supervisão do professor ou de [[human-in-the-loop-ai|humanos no circuito]] para situações consequentes. Audite o comportamento do tutor por origens linguísticas, níveis de habilidade, contextos culturais, necessidades de [[accessibility|acessibilidade]] e diferentes níveis de [[prior-knowledge|conhecimento prévio]] e experiência com IA. Não torne a [[prompt-engineering|provocação]] sofisticada um pré-requisito para uma boa instrução — o próprio tutor deve ajudar os aprendizes a formular questões produtivas.

## 9. Meça a aprendizagem, e não apenas a qualidade do chatbot

Métricas como precisão de resposta, extensão da conversa, preferência do estudante, satisfação, conclusão de tarefas e [[student-engagement|engajamento]] são insuficientes por si sós. Em vez disso, avalie desempenho sem assistência, retenção atrasada, transferência para novos problemas, correção de concepções errôneas, independência do aprendiz, aproveitamento do feedback e [[differential-effects-across-learner-groups|efeitos diferenciais entre grupos de aprendizes]]. A questão crítica é se os aprendizes conseguem ter bom desempenho depois que o tutor é removido. Ver [[ai-ed-evaluation|avaliação em AIED]] e [[ai-tutor-behavioral-evaluation|O Eixo de Avaliação que Falta]].

Dois estudos recentes tornam essa regra mais precisa contra [[self-report-measures|autorrelato]] e horizontes curtos. Um piloto com 38 estudantes novatos de programação encontrou uma associação forte entre o uso de [[generative-ai|IA generativa]] e a aprendizagem *percebida* (rs = 0,802, p < 0,001), enquanto os indicadores de progresso autônomo sem apoio do instrutor tiveram a pontuação mais baixa — a lacuna que, segundo os autores, produz uma ilusão de competência e dívida epistêmica, e exatamente a lacuna que as métricas de satisfação recompensam. Ver [[genai-cognitive-tutor-programming-2026|A IA generativa como tutor cognitivo informal]].

Mais fundamentalmente, a maioria das avaliações para no momento em que a assistência termina. A [[cognitive-washout-ai-skill-decay-2026|dinâmica de washout cognitivo]] nomeia o intervalo pós-retirada não medido e formaliza quatro desfechos possíveis — rebote elástico, platô parcial, apoio latente e sobre-recuperação — com um modelo de curva de washout cujos parâmetros incluem constante de tempo de recuperação, completude da recuperação e um índice de histerese que compara o esforço de reaprendizagem ao esforço original. Como a reversibilidade determina a gravidade, o framework argumenta que a prática programada sem assistência deve ser dosada de acordo com a curva de recuperação, em vez de ser objeto de discussão moral. Um plano de avaliação de tutor deve portanto incluir uma fase de retirada, e não apenas um pós-teste imediato. Ver [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|a evidência randomizada de que uma assistência breve deprime o desempenho posterior sem assistência]].

## 10. Mantenha professores ou especialistas do domínio no laço de garantia de qualidade

Antes da implantação, peça a educadores que testem perfis realistas de aprendizes, concepções errôneas comuns, casos de borda, provocações adversariais, respostas ambíguas e conversas de tutoria estendidas. Registre as falhas pedagógicas e use-as para revisar prompts de sistema, políticas de tutoria, fontes de conhecimento, [[guardrails|proteções]], regras do modelo do aprendiz e seleção de modelo. A supervisão humana permanece importante porque uma resposta de tutoria fluente ainda pode ser pedagogicamente inadequada ou incorreta.

A [[teacher-intervention-k12-ai-based-instruction-2026|revisão sistemática de 29 estudos do K-12 feita por Lee]] mostra no que essa supervisão de fato consiste, e onde ela se rompe. A intervenção do [[teacher-role|professor]] é um ciclo repetitivo de quatro fases de monitoramento, julgamento, intervenção e orquestração; alertas de IA, [[visualization|dashboards]] e notas automatizadas "não levam automaticamente a uma ação pedagógica"; e a principal estratégia do professor é a *tradução pedagógica* — selecionar, revisar, complementar, resumir ou apagar o feedback do chatbot, em vez de repassá-lo inalterado. Duas advertências de desenho se seguem. Mais informação de IA não é melhor: sistemas que emitem diagnósticos continuamente sobrecarregavam os professores e desviavam a atenção de sua própria observação, então priorize o que vale a pena acionar e torne-o interpretável, e ofereça recomendações em uma forma que os professores possam aceitar, modificar, adiar ou rejeitar. Mais apoio ao professor também não é melhor: adiar a intervenção para que os estudantes possam trabalhar de forma independente é, ele mesmo, uma especialidade, e condições estruturais — tempo para revisar dados, tamanho da turma, capacidade de alcançar fisicamente os grupos que precisam de ajuda — fazem parte da intervenção, e não são logística de fundo.

## Uma arquitetura útil de tutor de IA

Uma arquitetura de produção forte pode ser representada como: objetivo de aprendizagem → evidência do aprendiz/modelo do aprendiz → política pedagógica → conteúdo fundamentado e validado → geração conversacional → resposta do aprendiz → modelo do aprendiz atualizado (voltando ao início). Segurança, privacidade, acessibilidade, supervisão do professor e avaliação devem cercar todo o laço.

## O critério de sucesso mais importante

A métrica de desenvolvimento mais importante não é "a IA resolveu o problema?", e sim **"depois de interagir com a IA, o aprendiz consegue resolver um problema comparável de forma independente?"** A evidência desse princípio é mais forte em domínios de aprendizagem estruturados, como matemática e programação; a generalização para domínios mais abertos permanece menos certa, o que torna a avaliação específica do domínio essencial.

Para saber onde um tutor se situa dentro de uma sequência de curso em vez de estar isolado, ver [[designing-ai-into-learning]]; para as regras de desenho no nível do software que um tutor deve satisfazer, ver [[designing-educational-ai-software]]; e para como avaliar a intervenção resultante, ver [[evaluating-ai-interventions-methods]].

---

## Exemplo 1: Desenhando um tutor de IA de cálculo

Considere um tutor de cálculo do primeiro semestre da faculdade. Seu objetivo deve ser aumentar o que os estudantes conseguem resolver e explicar **de forma independente depois que o tutor é removido**, e não maximizar problemas corretamente concluídos. A tutoria de matemática é especialmente vulnerável ao excesso de apoio, ao uso prematuro de dicas e ao diagnóstico incorreto do raciocínio do estudante. Ver [[math-education|educação em matemática]], [[zhang-tutormoments-2026|Quando a Ajuda é Inútil]], [[correct-answer-trap-ai-tutor|Detectando a Armadilha da Resposta Correta]] e [[scaffolding|apoio]].

**Objetivos de aprendizagem.** O tutor pode manter um mapa de conceitos (funções e gráficos → taxas de variação → limites → derivada como limite → regras de derivação → aplicações → antiderivadas → integrais definidas → teorema fundamental). Para cada conceito, ele deve distinguir vários tipos de maestria. Por exemplo, "maestria em derivada" não deve significar simplesmente produzir a derivada correta; pode incluir reconhecer quando uma derivada é apropriada, interpretá-la como uma taxa de variação instantânea, selecionar a regra certa, executar o procedimento, explicar por que ela é apropriada, verificar a razoabilidade e aplicá-la a um problema desconhecido. Isso ajuda a prevenir a [[correct-answer-trap-misconceptions|armadilha da resposta correta]], em que um aprendiz chega à resposta certa por um raciocínio falho.

**Arquitetura do sistema.** Um desenho prático de seis camadas: materiais de curso + políticas do professor → camada de recuperação/RAG → (motor de problemas → modelo do aprendiz) e (verificador simbólico → motor de diagnóstico) → política pedagógica → LLM conversacional → estudante → modelo do aprendiz atualizado.

1. **Camada de fundamentação no curso:** recupera de materiais aprovados pelo professor (seções do livro, notas de aula, exemplos trabalhados, terminologia, métodos aprovados, notação, regras das tarefas) para que o tutor nunca introduza técnicas que sejam matematicamente válidas, mas inadequadas para o curso.
2. **Camada de verificação matemática:** usa um sistema de álgebra computacional para verificar equivalência algébrica, derivadas, integrais, soluções de equações, pontos críticos e aproximações numéricas — o LLM cuida da explicação e do diálogo, enquanto o sistema determinístico cuida da verificação matemática.
3. **Camada do modelo do aprendiz:** mantém estimativas por conceito (por exemplo: limite: em desenvolvimento; regra da potência: dominado; regra do produto: em desenvolvimento; regra da cadeia: não demonstrado) mais hipóteses de concepção errônea com evidência e confiança. A IA deve tratar uma concepção errônea como uma **hipótese**, e não como fato estabelecido, porque os LLMs podem alucinar evidência ou inferir concepções errôneas incorretamente — um processo de **detectar → verificar → responder** é necessário.

**Uma interação de tutoria.** Para diferenciar $f(x)=(x^2+1)\sin x$, um chatbot convencional poderia revelar a resposta imediatamente. Um tutor orientado à aprendizagem, em vez disso, raciocina internamente: o estudante derivou ambos os componentes, mas parece ter multiplicado suas derivadas (uma possível concepção errônea de regra do produto como $f'g'$), então ele faz primeiro uma questão de diagnóstico ("que regra você usa quando duas funções são multiplicadas?"), depois pede ao estudante que escreva a regra do produto simbolicamente, em seguida monta $u$ e $v$, e só verifica a expressão final depois que o estudante a reconstrói.

**Uma política de ajuda graduada.** A assistência pode se adaptar por uma escada de níveis: tentativa independente → questão [[metacognition|metacognitiva]] → pista conceitual → identificar a regra relevante → montar parte do problema → passo intermediário trabalhado → solução trabalhada → o estudante explica → o estudante resolve um problema de transferência de forma independente. Ver uma solução trabalhada não demonstra maestria, então, depois de uma ajuda substancial, o tutor deve fazer o aprendiz tentar um problema comparável sem auxílio.

**Evitando o uso improdutivo de dicas.** A interface não deve tornar dicas ilimitadas um atalho sem atrito, já que pedidos prematuros de dica e leitura superficial de dicas estão associados a menores [[learning-gains|ganhos de aprendizagem]]. Em vez de `[Dica][Dica][Dica][Mostrar Resposta]`, o sistema pode perguntar "o que você já tentou?" e "que parte está bloqueando você?" (escolher uma regra, montar a equação, fazer a álgebra, entender o conceito, outra coisa) e fornecer assistência direcionada.

**Apoiando o cálculo conceitual.** O tutor deve conectar procedimentos simbólicos a múltiplas representações (fórmula, gráfico, tabela, interpretação verbal, contexto físico de taxa de variação) para distinguir fluência procedimental de compreensão conceitual.

**Painel do professor.** O sistema deve expor evidência agregada em vez de julgamentos opacos da IA — por exemplo: "regra do produto — 62% de maestria demonstrada; padrões comuns: 18% omitem um termo, 11% multiplicam derivadas" — com diagnósticos individuais apresentados como hipóteses sustentadas por evidência.

**Plano de avaliação.** Meça o desempenho ao usar o tutor, o desempenho em problemas comparáveis sem ele, a retenção atrasada, a transferência para problemas desconhecidos, a qualidade da [[explainable-ai|explicação conceitual]], a correção de concepções errôneas, a [[help-seeking|busca de ajuda]] apropriada versus prematura, o vazamento de respostas, as taxas de falso positivo e falso negativo do diagnóstico e os [[differential-effects-across-learner-groups|desfechos diferenciais]]. A comparação central é o desempenho **com** o tutor versus o desempenho **sem** ele depois — um estudante que passa de 60% para 95% assistido, mas permanece em 60% de forma independente, não recebeu uma tutoria eficaz.

---

## Exemplo 2: Desenhando um coach de escrita com IA

Um coach de escrita com IA exige um desenho diferente porque a escrita não tem uma única resposta objetivamente correta. O objetivo é ajudar o aprendiz a ficar melhor em planejar, redigir, avaliar e revisar a própria escrita. A base de conhecimento enquadra a escrita como um **processo cognitivo, social e retórico**, o que significa que um sistema de escrita com IA pode apoiar a aprendizagem, mas também pode eliminar exatamente o pensamento que a tarefa pretendia desenvolver. Ver [[writing-education|educação em escrita]], [[ai-writing-support-stage-ownership-2026|Do Planejamento à Revisão]], [[coach-not-crutch-ai-writing|Coach, não Muleta]] e [[feedback]].

**Objetivos de aprendizagem.** O modelo do aprendiz do coach pode acompanhar argumento (especificidade da tese, alinhamento entre afirmação e evidência, contra-argumento), organização (foco do parágrafo, progressão lógica, transições), evidência (relevância das fontes, integração da evidência, interpretação), revisão (revisão global e no nível da frase, avaliação do feedback) e estilo (clareza das frases, gramática, voz autoral) — acompanhando **capacidades** de escrita, e não apenas a nota de uma redação.

**Fundamente o coach na tarefa.** Recupere as instruções da tarefa, a rubrica do professor, as leituras do curso, os requisitos de citação, as convenções de gênero, os exemplos do professor e a política de uso de IA para que o feedback possa se referir à tarefa real ("a rubrica do seu professor pede que você conecte cada afirmação principal a evidência de pelo menos duas leituras do curso") em vez de inventar expectativas genéricas.

**Trate as etapas da escrita de formas diferentes.** O envolvimento da IA em etapas diferentes afeta a percepção de propriedade de formas diferentes — apoio no planejamento reduz menos a propriedade do que apoio na redação, e a redação gerada por IA produz a maior redução de propriedade. Assim, um coach pode dar permissões diferentes por etapa: no planejamento, ele pode fazer questões, comparar posições, desafiar pressupostos e criticar esquemas, mas evitar gerar o argumento inteiro; na redação, o aprendiz produz a prosa primeiro (o coach ajuda a desenvolver, não a tomar conta); na revisão, o coach pode identificar afirmações pouco claras, apontar evidência ausente, verificar se a evidência sustenta uma afirmação, detectar problemas de organização e comparar um rascunho com a rubrica — **diagnosticando antes de reescrever**; na edição (depois da revisão), ele pode apoiar gramática, pontuação, concisão e formatação de citações.

**Interação de exemplo.** Para uma redação sobre exigir [[online-teaching-and-learning|cursos online]], um sistema genérico poderia reescrever o parágrafo do estudante em prosa polida, fazendo o trabalho intelectual. Um coach de escrita, em vez disso, diz o que está funcionando, nomeia o problema principal (o parágrafo dá razões, mas não explica por que elas justificam uma determinação para toda a universidade), propõe uma questão de revisão e pede ao estudante que complete uma frase com suas próprias palavras — deixando a construção do argumento com o aprendiz.

**O feedback deve ser priorizado.** Cada rodada de feedback pode conter um ponto forte a preservar, um problema de alto impacto, uma questão que exige julgamento de quem escreve e um objetivo concreto de revisão — em vez de sobrecarregar o aprendiz com dezenas de comentários.

**Faça o estudante avaliar o [[ai-feedback-quality|feedback da IA]].** O [[feedback-literacy|letramento em feedback]] é, ele mesmo, um objetivo de aprendizagem; o coach deve perguntar periodicamente se o aprendiz concorda com uma sugestão e por quê, e permitir que o aprendiz rejeite o feedback da IA — desenvolvendo o **[[evaluative-judgment|julgamento avaliativo]]**, e não a obediência.

**Preserve a voz autoral.** O coach deve distinguir erros, problemas de clareza, escolhas retóricas e preferências de estilo, e não deve "corrigir" automaticamente as duas últimas — do contrário, ele arrisca homogeneizar a escrita em direção ao estilo que o modelo prefere, especialmente para escritores [[multilingual-learning|multilíngues]] e estilos retóricos não padronizados.

**Um modelo do aprendiz baseado no histórico de revisões.** Em vez de armazenar apenas redações finais, o sistema pode aprender com as revisões do estudante (por exemplo, um padrão repetido de "evidência introduzida, mas não interpretada" que melhora ao longo das redações), adaptando-se com base em evidência de aprendizagem.

**Envolvimento do professor.** O instrutor controla a rubrica, os objetivos da tarefa, as formas permitidas de assistência da IA, a coleta de fontes, as expectativas de citação, se a redação generativa é permitida e quando a revisão humana é exigida. Um painel do professor pode mostrar padrões no nível da turma (por exemplo, 41% precisam de apoio na conexão entre afirmação e evidência) como um sinal de [[formative-assessment|avaliação formativa]].

**Avaliando o coach de escrita.** Meça a qualidade da escrita assistida por IA e depois sem assistência, a capacidade de identificar fraquezas em escrita desconhecida, a qualidade da revisão, o aproveitamento do feedback, a capacidade de explicar as revisões, a propriedade por parte do estudante, a dependência da prosa da IA, a preservação da voz, o viés entre dialetos/escritores multilíngues/grupos, o alinhamento com o julgamento do professor e a transferência atrasada. Um experimento revelador compara um grupo escrevendo de forma independente, um grupo em que a IA gera/revisa o texto e um grupo com coach — todos então concluindo uma nova redação sem IA: se o grupo com IA gerada tem o melhor desempenho na prática, mas desempenho ruim sem IA, o sistema melhorou o desempenho, e não a aprendizagem.

---

## Comparando os dois desenhos

| Questão de desenho | Tutor de cálculo | Coach de escrita |
|---|---|---|
| Objeto primário de aprendizagem | Conceitos matemáticos e resolução de problemas | Argumentação e processo de escrita |
| Verificação | Frequentemente verificável de forma objetiva | Em geral exige julgamento contextual |
| Ferramentas determinísticas | Motor de matemática simbólica / calculadora | Verificações de gramática, citação, rubrica |
| Papel principal da IA | Diagnosticar e apoiar o raciocínio | Diagnosticar e apoiar a revisão |
| Risco principal | Entregar a solução | Escrever o texto pelo aprendiz |
| Ação importante do aprendiz | Resolver e explicar | Redigir, avaliar e revisar |
| Modelo do aprendiz | Conceitos, procedimentos, concepções errôneas | Argumento, evidência, organização, revisão |
| Proteção central | Tentativa antes da solução | Prosa do estudante antes da reescrita pela IA |
| Teste de transferência | Novos problemas de cálculo sem IA | Nova tarefa de escrita sem IA |
| Critério de sucesso | Raciocínio matemático independente | Escrita independente e julgamento avaliativo |

Os dois sistemas usam muitas das mesmas [[ai-technologies|tecnologias]] de IA, mas incorporam **políticas pedagógicas diferentes porque as disciplinas exigem tipos diferentes de pensamento**. O princípio comum: **identifique a atividade cognitiva que produz a aprendizagem e desenhe a IA para apoiar essa atividade sem a tomar do aprendiz** — preservando o raciocínio matemático no cálculo, e a autoria, a tomada de decisões retóricas, a avaliação e a revisão na escrita. Esse princípio é mais fundamental do que qualquer modelo, provocação, framework de agentes ou interface de usuário em particular.
