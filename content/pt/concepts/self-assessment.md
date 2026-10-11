---
title: Autoavaliação
created: "2026-09-21T11:21:57-04:00"
updated: "2026-09-30T09:59:35-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition, self-regulated-learning, scaffolding]
assessment: [assessment-validity, evaluative-judgment, feedback-literacy, formative-assessment, peer-assessment, self-report-measures]
ethics: [trust-calibration]
audience: [learners, instructors]
level: [higher ed]
connected_faqs: [ai-feedback-at-scale, redesign-assessment-ai-era, addressing-common-misconceptions-ai-education]
confidence: high
translation_of: concepts/self-assessment
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **A autoavaliação** — julgar seu próprio trabalho, competência ou progresso contra critérios, e as práticas e instrumentos construídos sobre esse ato. O termo carrega duas faces fáceis de colapsar em uma. Como **técnica instrucional**, ela é autoatribuição de nota, autorrevisão baseada em rubrica, autoverificação e reflexão guiada: atividades destinadas a desenvolver o [[metacognition|monitoramento]] e o [[evaluative-judgment|juízo]] dos quais a [[self-regulated-learning|aprendizagem autorregulada]] depende. Como **medida educacional**, ela é um [[self-report-measures|instrumento de autorrelato]], no qual a estimativa de um aprendiz sobre sua própria habilidade, confiança ou aprendizagem substitui uma observação que ninguém fez. Ela fica ao lado da [[peer-assessment|avaliação por pares]] como a outra metade dos estudantes-como-avaliadores, e herda a mesma dependência de [[scaffolding|suporte]] e critérios explícitos. Ambas as faces giram sobre a mesma faculdade e ambas falham na mesma direção: a estimativa é sistematicamente generosa, e quanto mais o trabalho submetido de um aprendiz pode ser produzido por uma ferramenta de [[generative-ai|IA generativa]], menos esse trabalho diz se a faculdade está presente.

## Questões a considerar

- Quando você termina um trabalho seu, o que lhe diz se ele é bom: os critérios que lhe foram entregues, os critérios que você internalizou, ou como ele parece? Você conseguiria dizer qual deles você realmente usou?
- Em um estudo com 288 professores de K-12, uma medida autorrelatada de [[ai-literacy|letramento em IA]] se correlacionou com uma medida objetiva da mesma habilidade em apenas r = 0,07 a r = 0,24. Onde em sua própria prática uma autoestimativa provavelmente divergiria de um teste da mesma habilidade, e por que lá em vez de em outro lugar?
- A autoatribuição de nota pode economizar tempo do instrutor e construir juízo, e também pode entregar uma nota que o estudante não ganhou. O que teria que ser verdade sobre a tarefa, a rubrica e o treinamento para que uma autonota carregue crédito?
- Se uma ferramenta pode produzir o ensaio, o que resta para um estudante avaliar sobre sua própria aprendizagem? O que você pediria que ele estimasse em vez disso?
- Estudantes que avaliam o trabalho de um par e estudantes que avaliam o próprio trabalho estão fazendo coisas diferentes. Qual delas se transfere melhor para a próxima tarefa, e que evidência a decidiria?

## Introdução

A autoavaliação é uma das ideias mais antigas na educação e uma das mais confusas na prática, porque duas coisas distintas viajam sob o nome. A primeira é uma técnica: estudantes revisando seu próprio trabalho contra critérios, atribuindo-lhe nota, verificando-o, refletindo sobre ele. A segunda é uma medição: a própria avaliação do aprendiz sobre sua habilidade, confiança ou aprendizagem, usada como dados. A técnica é julgada pelo que ela desenvolve no aprendiz; a medição é julgada por se o número pode ser confiado.

Ambas importam em um [[assessment|design de avaliação]] da era da IA, e importam por razões diferentes. A técnica é onde o [[evaluative-judgment|juízo avaliativo]] é treinado, e o juízo avaliativo é exatamente a capacidade que se torna escassa quando um [[llm|modelo de linguagem]] pode produzir trabalho de aparência competente sob demanda. A medição é onde o campo rotineiramente superestima o que sabe, porque um autorrelato não pode medir aprendizagem: ele pode apenas registrar o que alguém diz sobre ela.

## A autoavaliação como técnica instrucional

As práticas que caem sob esse título são familiares: autoatribuição de nota contra uma rubrica, autorrevisão de um rascunho antes da submissão, autoverificação de soluções de problemas, prompts reflexivos perguntando o que um aprendiz faria diferente, e tarefas de predição em que um estudante estima seu desempenho e depois compara. Seu propósito é desenvolvimental. Um estudante que revisa seu próprio rascunho contra critérios está ensaiando a avaliação que a revisão por pares e o feedback do instrutor também treinam, e está construindo o padrão interno que usará quando ninguém estiver observando.

A evidência de que a técnica funciona, e sobre qual versão funciona, vem principalmente da escrita e da pesquisa em aprendizagem autorregulada. Em um estudo comparativo de literacia de feedback, graduandos do primeiro ano (N = 118 na China, 56 em um grupo GenAI e 62 em um grupo de pares) trabalharam em três ciclos de autoavaliação ao longo de um semestre. A vantagem do grupo GenAI sobre o grupo de pares foi pequena, apenas 0,17 pontos de escala (eta quadrado parcial = 0,03), e a conclusão prática do estudo é a que recorre: a autoavaliação precisa de suporte. Rubricas pré-treinadas, diretrizes de prompt e planilhas de trabalho são o que separa um ciclo de autoavaliação que constrói [[feedback-literacy|literacia de feedback]] de um que produz [[cognitive-offloading|descarga cognitiva]].

A autoavaliação também é onde o ciclo da [[self-regulated-learning|aprendizagem autorregulada]] se torna visível como uma habilidade, e não como uma disposição. Em um estudo de graduação em estatística, estudantes que receberam treinamento explícito em suporte focado no raciocínio (dicas por passos e prompts de verificação) tiveram melhor desempenho em uma tarefa posterior tentada sem assistência de modelo e mostraram melhor calibragem da autoavaliação do que estudantes que se apoiaram no modelo de forma acrítica. A parte interessante é a segunda medida: as estimativas do grupo treinado sobre sua própria compreensão se alinharam melhor com o que eles realmente conseguiam fazer. Uma técnica voltada à reflexão mudou uma propriedade de medição do aprendiz.

### Treinamento de calibragem

A técnica mais direta é o treinamento de calibragem, em que um estudante prevê sua nota ou confiança antes de ver um resultado e depois compara a predição com o resultado. Em um estudo de escrita assistida por IA, um script de literacia de feedback melhorou a qualidade da escrita, a absorção do feedback e a revisão profunda, enquanto uma Atividade de Calibragem Avaliação-Desempenho melhorou principalmente a acurácia da autoavaliação dos estudantes e reduziu a autoconfiança. Combinar as duas produziu os maiores ganhos de escrita e a retenção mais forte após a retirada do apoio da IA, embora a atividade de calibragem por si só tenha permanecido a melhor rota para autoestimativas precisas. Essa divisão de trabalho é o ponto prático: a literacia de feedback melhora o que um estudante faz com os comentários, a calibragem melhora quão bem ele conhece sua própria posição, e elas não são a mesma intervenção.

Um artigo em nível de ensaio sobre o uso [[ethics|ético]] de IA em uma universidade australiana tratou a autoavaliação guiada como o veículo, e não como o assunto: ao longo de estudantes iniciantes de enfermagem, ciências da saúde, engenharia e ciências de 2021 a 2025, autoavaliações pré e pós-semestre combinaram itens de confiança Likert com um prompt de reflexão aberta, e os autores argumentaram que a prática [[ethics|ética]] é uma capacidade desenvolvimental a ser construída por meio da reflexão, e não uma regra de conformidade a ser imposta.

### O que a IA acrescenta à técnica

A IA muda três coisas sobre a técnica. Ela pode gerar os itens e as rubricas, o que torna os ciclos repetidos de autoavaliação baratos. Ela pode ser a coisa avaliada, que é como o [[evaluative-judgment|juízo avaliativo]] é treinado: um estudante que julga um rascunho de IA está praticando avaliação com um suprimento ilimitado de material. E ela pode tornar o juízo do aprendiz visível como evidência de processo. Em painéis de aprendizagem interativos, um painel de análise convencional foi estendido com uma funcionalidade de autoavaliação de Julgamento de Aprendizagem e um agente conversacional, com o argumento de que elicitar o próprio juízo de um aprendiz faz mais pelo engajamento do que lhe dizer o que os dados mostram. Frameworks institucionais começaram a tratar os mesmos traços de processo, incluindo autoavaliações estruturadas e prompts metacognitivos, como evidência de capacidades adaptativas que uma transcrição não pode mostrar.

## A autoavaliação como medida

Usada como medida, a autoavaliação geralmente chega disfarçada de outra coisa: uma classificação de confiança em uma escala Likert, uma nota prevista, um item de Julgamento de Aprendizagem, ou um inventário baseado em taxonomia de habilidade percebida. Ela é uma família dentro do conjunto mais amplo de [[self-report-measures|medidas de autorrelato]], e herda o limite categórico dessa família. Um autorrelato não pode medir aprendizagem ou comportamento; ele pode medir apenas o que uma pessoa está disposta a dizer sobre sua aprendizagem ou comportamento, e essas duas coisas se separam com frequência suficiente nesta base de pesquisa para ser um achado em si.

### Quão precisas são as estimativas

A acurácia é o problema principal, e a direção é consistente. A evidência mais limpa vem de um estudo que construiu medidas paralelas de autorrelato e objetivas de [[ai-literacy|letramento em IA]] de professores dentro de um único framework. Ao longo de 288 professores de K-12, as correlações entre os fatores objetivos e autorrelatados variaram de r = 0,07 a r = 0,24, e a análise de perfil latente encontrou seis perfis: 43 professores se classificaram consistentemente alto enquanto pontuavam mais baixo na medida objetiva, 59 mostraram o padrão inverso, e os perfis restantes se agruparam perto da média ou se dividiram por experiência prévia em letramento em IA. Duas medidas de uma habilidade, construídas pela mesma equipe sobre o mesmo construto, quase não compartilham nada.

O quadro de nível de campo corresponde a esse estudo isolado. A [[assessing-teachers-ai-literacy-measurement-tools-2026|revisão de 2026 de Zainal, Mohd Matore e Maat das ferramentas de medição do letramento em IA de professores]] avaliou 33 instrumentos publicados entre 2019 e 2025 e descobriu que 31 (93,9%) eram escalas de autorrelato de confiança percebida, apenas dois (6,1%) testavam conhecimento objetivamente, e nenhum usava tarefas baseadas em desempenho. A leitura dos autores é aquela sobre a qual a face de medição desta página gira: um escore de autorrelato registra confiança relatada em vez de capacidade, de modo que ele não pode substituir competência, e eles argumentam por tarefas de desempenho e análise de teoria de resposta ao item junto com a autoavaliação para separar capacidade validada de confiança relatada.

A acurácia também depende do que está sendo estimado. Uma análise psicométrica de uma autoavaliação de letramento em GenAI baseada em taxonomia com 158 funcionários e estudantes universitários encontrou um perfil invertido, com respondentes reivindicando domínio da criação antes dos fundamentos conceituais subjacentes a ela, e apenas uma correlação fraca (r = 0,188) entre perfis de estudantes e acadêmicos. Uma survey de estudantes de formação de professores encontrou a mesma forma pelo outro lado: quase todos (97,8%) avaliaram a análise crítica de mídia como importante, enquanto apenas 13,8% disseram que seus cursos a abordavam, e menos da metade (44,9%) acreditava ter as habilidades para analisar informações de mídia criticamente. A competência de mídia autoavaliada ficou atrás da importância autoavaliada.

Dois mecanismos explicam a generosidade. O primeiro é motivacional e bem documentado fora desta literatura: as pessoas se classificam de forma generosa, e os menos competentes superestimam mais. O segundo é específico às coortes nativas de IA. Um artigo teórico de 2026 sobre a **linha de base cognitiva ausente** argumenta que o uso substitutivo sustentado de IA durante os anos formativos do ensino médio e fundamental reduz os encontros cognitivos independentes dos quais qualquer autoavaliação acadêmica depende. A afirmação é estrutural, e não individual: a autoavaliação funciona comparando um desempenho atual com um registro de desempenhos anteriores, e onde o registro nunca foi construído, a estimativa não tem nada contra o que ser calibrada. Isso é apresentado como distinto da [[cognitive-offloading|descarga cognitiva]] e da [[cognitive-surrender|rendição cognitiva]], que descrevem processos durante o uso da IA, porque a lacuna persiste quando a ferramenta está ausente.

O estágio de desenvolvimento estabelece uma fronteira sobre a acurácia, e os aprendizes mais jovens são onde um instrumento validado de autoavaliação é mais escasso. O [[ai-literacy-self-assessment-questionnaire-primary-2025|estudo de validação de 2025 de Thianwan e Srikoon de um questionário de autoavaliação de letramento em IA para estudantes do fundamental 2]] construiu uma medida de 15 itens para as séries 4 a 6 ao longo de Aprender Sobre IA, Aprender Sobre Como a IA Funciona e Aprender para a Vida com IA, confirmando uma estrutura de três fatores em amostras de 335 e 579 estudantes com um alfa de Cronbach geral de ,934. Os autores são explícitos sobre o limite do gênero: a acurácia da autoavaliação depende da capacidade metacognitiva que ainda está amadurecendo nas crianças, de modo que os escores indexam a compreensão percebida em vez da competência demonstrada, e o instrumento é destinado ao diagnóstico formativo.

### A autoavaliação como variável de resultado

A face de medição também aparece no design de avaliação, onde instrumentos de autoavaliação são usados como medidas de resultado. Um estudo da avaliação assistida por IA de relatórios complexos no ensino superior avalia explicitamente a aprendizagem com instrumentos validados de literacia de feedback e autoavaliação junto com o desempenho subsequente e a comparação com um grupo de controle. Isso é defensável quando o instrumento mede uma crença da qual o estudo de fato trata, como a [[self-efficacy|autoeficácia]] ou a competência percebida, e enganoso quando é tratado como um substituto do desempenho. A crítica recorrente aos [[ai-ed-evaluation|estudos de intervenção em IA]] se aplica com força total aqui.

Medir agência por meio de questionários pós-tarefa e [[self-efficacy|autoeficácia]] específica da tarefa arrisca raciocínio circular: a estimativa do aprendiz é lida de volta como evidência da capacidade que ela deveria indicar, e a alternativa é a análise dinâmica que rastreia como a autoavaliação é usada ao longo de ciclos sucessivos ([[self-directed-growth-generative-ai-learning-analytics|Mao (2025)]]).

## O que a IA generativa muda

As duas faces convergem sob a IA generativa, porque a ferramenta ataca o vínculo do qual ambas dependem: que o trabalho submetido de um aprendiz é evidência sobre o aprendiz.

Onde o trabalho pode ser produzido sob demanda, um ensaio bem-soado já não demonstra o juízo por trás dele, e pedir que um estudante avalie um rascunho que ele não escreveu é uma tarefa diferente de avaliar um que ele escreveu. É por isso que os argumentos de [[assessment-validity|validade da avaliação]] se moveram da detecção para o redesenho, e é por isso que a autoavaliação passa de um auxílio de estudo para um componente do próprio design da avaliação: o juízo que um estudante faz sobre uma peça de saída de IA, no registro e com razões, é evidência de uma forma que a saída não é.

Isso também introduz um risco de nomenclatura que vale declarar com clareza. A **autoavaliação da IA** não é este conceito. Quando um artigo relata que um modelo avalia seu próprio raciocínio ou corrige sua própria saída, isso é avaliação de modelo e pertence ao [[automated-assessment|avaliação automatizada]] e ao estudo do [[llm-training-and-fine-tuning|treinamento do modelo]] e dos aprendizes simulados; um estudo de tutoria faz a versão prática do ponto, argumentando que o feedback deveria ser condicionado a um classificador diagnóstico separado em vez de à validade de raciocínio autoavaliada do modelo. A autoavaliação do aprendiz e a autoavaliação do modelo compartilham um vocabulário e nada mais.

## Implicações para a prática

- **Dê suporte à técnica.** Rubricas, diretrizes de prompt e planilhas de trabalho são o que torna um ciclo de autoavaliação desenvolvimental. A autoavaliação nua, como o feedback nu da IA, tende a produzir reasseguramento em vez de juízo.
- **Treine a calibragem separadamente do uso do feedback.** Atividades de predizer-e-comparar mudam a acurácia das autoestimativas; o trabalho de literacia de feedback muda o que os estudantes fazem com os comentários. Se a acurácia é o objetivo, rode a atividade de calibragem.
- **Mantenha as autonotas de baixo impacto a menos que o treinamento seja real.** Uma autonota é uma afirmação sobre a aprendizagem feita pela pessoa que ela beneficia, e os perfis de superestimação no estudo de letramento em IA não são um pequeno viés a absorver em uma nota somativa.
- **Use o autorrelato onde ele é honesto.** Confiança, competência percebida e disposição para divulgar o uso de IA são coisas legítimas de medir perguntando. Desempenho não é.
- **Peça juízo, não opinião.** A autoavaliação da era da IA mais defensável pede que um estudante avalie uma peça específica de trabalho contra critérios e justifique a chamada, que é treinável, inspecionável e conectada ao [[evaluative-judgment|juízo avaliativo]].
- **Observe o efeito de coorte.** Para estudantes cujos anos formativos incluíram uso substitutivo de IA, uma autoestimativa precisa pode estar indisponível em vez de meramente otimista, o que desloca a tarefa instrucional de corrigir a autoconfiança para reconstruir o registro experiencial de que ela precisa.

## Conceitos conectados

- [[evaluative-judgment]]
- [[self-report-measures]]
- [[peer-assessment]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[feedback-literacy]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[self-efficacy]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[trust-calibration]]
- [[assessment]]
- [[learning-gains]]
- [[educational-measurement]]
- [[ai-literacy]]

## Artigos conectados

- [[self-directed-growth-generative-ai-learning-analytics]] — Self-assessment placed at the center of a self-directed growth framework (2026)
- [[age-tiered-ai-literacy-guidebooks-2026]] — Developmentally tiered AI literacy materials, with measurement of acceptance and validity (2026)
- [[chatgpt-critical-creative-thinking-review]] — Triangulating AI feedback with peer, instructor, and self-assessment (2026)
- [[yasir-llm-tutoring-agents-2026]] — Why feedback should not rest on a model's self-assessed reasoning validity (Yasir et al. 2026)
- [[ai-literacy-self-assessment-questionnaire-primary-2025]] — A validated 15-item AI literacy self-assessment questionnaire for Grades 4 to 6, with the metacognitive limits of child self-report (Thianwan & Srikoon 2025)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — 31 of 33 teacher AI literacy instruments are self-report, two test knowledge objectively, none use performance tasks (Zainal, Mohd Matore & Maat 2026)
