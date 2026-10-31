---
title: Teorias de aprendizagem
created: "2026-08-16T03:36:31-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories, metacognition, self-regulated-learning]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_faqs: [research-gaps-aied]
translation_of: concepts/learning-theories
source_updated: "2026-10-28T19:24:33-04:00"
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

> **Teorias de aprendizagem** — a família de frameworks que explicam como a aprendizagem acontece, e o conceito guarda-chuva das ideias relacionadas a teoria da base de conhecimento. Na [[ai-education|IA na educação]], as teorias de aprendizagem moldam tanto como os sistemas de IA são desenhados (a pedagogia que eles incorporam) quanto como o campo interpreta se a IA "funciona": a mesma ferramenta pode ser um andaimento sob pressupostos [[constructivist|construtivistas]], um motor de reforço sob o [[behaviorism|behaviorismo]], ou um risco de carga cognitiva sob a Teoria da Carga Cognitiva.

## Perguntas para refletir

- Pense em um tutor de IA ou sistema adaptativo que você usou ou viu. Que pressupostos ele fez sobre como as pessoas aprendem — ele recompensava respostas corretas (behaviorismo), construía compreensão (construtivismo) ou gerenciava o esforço mental (carga cognitiva)? Seus criadores algum dia declararam esses pressupostos?
- A página descreve uma lacuna recorrente: o discurso professa construtivismo, enquanto as implementações de IA recorrem por padrão às mecânicas de exercício e feedback. Onde você viu uma ferramenta alegar apoiar a aprendizagem profunda, mas de fato apenas reforçar respostas de superfície?
- A mesma ferramenta de IA pode parecer um sucesso sob uma teoria e um fracasso sob outra — notas de lição de casa infladas leem-se como aprendizagem sob o behaviorismo, mas como uma falha em construir compreensão durável sob o construtivismo. Qual lente é mais justa para julgar se os estudantes de fato aprenderam?
- Como todo tutor de IA incorpora uma teoria, quer seus designers o declarem ou não, "ele funciona?" pode ser a pergunta errada. Qual é a pergunta melhor a fazer sobre uma IA educacional, dadas as teorias que ela poderia incorporar?
- A IA generativa está levando os educadores a considerar novas teorias — como a aprendizagem como coconstrução iterativa entre humanos e IA, ou a IA como parceira cognitiva ao longo da vida. A ascensão da IA exige genuinamente novas teorias de aprendizagem, ou as existentes ainda bastam?
- A mensuração dos ganhos de aprendizagem é ela mesma "carregada de teoria": um instrumento construído sobre uma teoria pode não capturar os ganhos que outra prevê. Como dois pesquisadores com compromissos teóricos diferentes poderiam olhar os mesmos dados e chegar a conclusões opostas sobre se uma ferramenta de IA funcionou?

## Introdução

Este é o conceito guarda-chuva da vertente de teoria da aprendizagem da base de conhecimento. As teorias de aprendizagem estão no coração da IA na educação porque todo tutor de IA, sistema adaptativo e ferramenta de feedback incorpora pressupostos sobre como as pessoas aprendem — quer os designers os declarem ou não. A base de conhecimento documenta essas teorias individualmente e as trata como a lente conceitual através da qual o desenho e os efeitos da IA são avaliados. O campo de pesquisa que testa esses frameworks é uma página separada: as [[learning-sciences|ciências da aprendizagem]] estudam a aprendizagem empiricamente — experimentos, ensaios em sala de aula e pesquisa baseada em design — e tratam uma teoria como algo a ser confirmado ou falseado, enquanto esta página reúne os próprios frameworks; as duas expressões são mantidas distintas nesta base de conhecimento, sendo o singular "ciência da aprendizagem" o que nomeia esta vertente teórica.

### A paisagem da teoria da aprendizagem

A base de conhecimento documenta várias famílias de teoria da aprendizagem, cada uma com seus conceitos:

- **Teorias clássicas da aprendizagem.** O [[behaviorism|behaviorismo]] (a aprendizagem como mudança comportamental observável por meio de reforço e exercício e prática) e o [[constructivist|construtivismo]] (a aprendizagem como construção ativa de conhecimento) são os dois polos que reaparecem com mais frequência na pesquisa em IA. O campo exibe frequentemente uma lacuna de "construtivismo no nome, behaviorismo na prática", onde o discurso professa a construção, mas as implementações de IA recorrem por padrão às mecânicas de exercício e feedback.([[ai-vocational-education-training-review]]) A [[cognitive-psychology|psicologia cognitiva]] / cognitivismo é o terceiro polo clássico — a aprendizagem como mudança nas representações mentais internas —, e a teoria mais responsável pelas contribuições características da AIED ([[knowledge-tracing|rastreamento de conhecimento]], [[cognitive-diagnosis|diagnóstico cognitivo]], [[student-modeling|modelagem de estudante]], [[intelligent-tutoring|tutoria inteligente]]).
- **Teorias socioculturais e desenvolvimentais.** A [[sociocultural-learning|aprendizagem sociocultural]] sustenta que a aprendizagem e o desenvolvimento surgem por meio da participação social e são mediados por ferramentas culturais e outros mais conhecedores — abrangendo a [[sociocultural-learning|Zona de Desenvolvimento Proximal]], o [[scaffolding|andaimento]], a aprendizagem por observação, as comunidades de prática e a [[distributed-cognition|cognição distribuída]]. Na era da IA, a [[generative-ai|IA generativa]] é crescentemente enquadrada como um *agente mediacional* que tanto medeia a atividade quanto gera contribuições contingentes à interação.([[generative-ai-mediational-agent-sociocultural-2026]])
- **Cognição e arquitetura cognitiva.** A [[cognitive-psychology|psicologia cognitiva]] / cognitivismo é o guarda-chuva dessa família: a Teoria da Carga Cognitiva (como os limites da memória de trabalho moldam a instrução), a Teoria do Duplo Processo (processamento intuitivo rápido versus deliberativo lento) e a [[metacognition|metacognição]] (monitorar e regular a própria aprendizagem) explicam os mecanismos *internos* que as ferramentas de IA engajam ou contornam.
- **Motivação e autodireção.** A [[self-determination-theory|teoria da autodeterminação]] (autonomia, competência, vínculo), a [[self-efficacy|autoeficácia]] (confiança na própria capacidade), a [[self-regulated-learning|aprendizagem autorregulada]] (estabelecimento de metas, monitoramento e ajuste) e a [[motivation|motivação]] explicam por que quem aprende se engaja com a IA da forma como o faz.
- **Contexto e atividade de aprendizagem.** A [[experiential-learning|aprendizagem experiencial]], a [[active-learning|aprendizagem ativa]], a [[project-based-learning|aprendizagem baseada em projetos]], a [[collaborative-learning|aprendizagem colaborativa]], a [[transfer-of-learning|transferência de aprendizagem]], as [[desirable-difficulties|dificuldades desejáveis]] e a [[embodied-learning|aprendizagem corporificada]] descrevem os tipos de atividade e de contexto que produzem aprendizagem durável.

### Teorias de aprendizagem e ganhos de aprendizagem

As teorias de aprendizagem são, em última instância, avaliadas por seus resultados, e o conceito de [[learning-gains|ganhos de aprendizagem]] da base de conhecimento é onde a teoria encontra a evidência. Cada teoria faz uma previsão diferente sobre o que *conta* como aprendizagem e como mensurá-la: o behaviorismo prevê ganhos de desempenho observáveis em tarefas de exercício e feedback; o construtivismo prevê compreensão mais profunda que se transfere a problemas novos; a teoria sociocultural prevê ganhos em participação e em resolução mediada de problemas; e a teoria da carga cognitiva prevê ganhos apenas quando a instrução respeita os limites da memória de trabalho. É por isso que a mensuração dos [[learning-gains|ganhos de aprendizagem]] é carregada de teoria — um instrumento construído sobre uma teoria pode não capturar os ganhos que outra prevê. Na era da IA, a divergência acentuada entre o desempenho assistido por IA e os [[learning-gains|ganhos de aprendizagem]] sem assistência (veja [[generative-ai-reduced-study-time-math]], [[stromberg-generative-ai-learning-penalty-secondary-2026]]) pode ser lida por essa lente: uma leitura behaviorista vê as notas de lição de casa infladas como sucesso, enquanto uma leitura construtivista, focada na compreensão durável, vê a mesma evidência como uma falha em aprender. Conectar teorias à [[ai-ed-evaluation|avaliação]] e aos [[learning-gains|resultados mensurados]] é, portanto, essencial para decidir qual lente teórica um dado sistema de IA de fato satisfaz.

### Por que as teorias de aprendizagem importam para a IA na educação

As teorias de aprendizagem importam por três razões:

- **Elas preveem os efeitos da IA.** Se uma ferramenta de IA melhora ou prejudica a aprendizagem depende de qual mecanismo ela ativa. Um tutor que entrega as respostas prejudica sob uma lente construtivista (ele contorna a construção), é neutro sob o behaviorismo (ele reforça) e levanta preocupações de carga cognitiva (ele descarrega, em vez de construir). Os conceitos de [[cognitive-offloading|descarregamento cognitivo]] e [[cognitive-offloading|excesso de dependência]] da base de conhecimento capturam o lado de risco disso.
- **Elas expõem a lacuna entre teoria e prática.** O trabalho empírico constata repetidamente que as implementações de IA incorporam teorias diferentes das que o discurso alega — mais notoriamente a linguagem construtivista associada a mecânicas behavioristas de exercício e prática.([[ai-vocational-education-training-review]]) Avaliar a IA exige, portanto, perguntar *qual* teoria um sistema de fato incorpora, e não apenas se ele "funciona".
- **Elas estão sendo ativamente repensadas.** A IA generativa está [[prompt-engineering|levando]] os educadores a revisitarem se as teorias clássicas bastam. O [[generativism-learning-theory|Gerativismo]] propõe que a aprendizagem na era da IA ocorre crescentemente por meio de coconstrução iterativa entre quem aprende, sendo humano, e os sistemas de IA, estendendo, e não substituindo, as quatro clássicas (behaviorismo, cognitivismo, construtivismo, conectivismo).([[generativism-learning-theory]])

### Novas direções teóricas do trabalho recente em AIED

O trabalho teórico recente estende a vertente clássica em várias direções, cada uma recentrando a relação humano–IA em vez de tratar a IA como uma ferramenta neutra:

- **Cor[[regulation|regulação]] humano–IA.** Um framework desenvolvimental posiciona a IA não como um instrumento externo, mas como uma **parceira cognitiva** que corregula o pensamento, a aprendizagem e o autocontrole ao longo da vida.([[ai-cognitive-partner-co-regulation-learning]]) Baseando-se em função executiva, [[metacognition|metacognição]], cognição distribuída e desenvolvimento sociocultural, ele lança a IA em quatro papéis — andaimento, apoio metacognitivo, sistema de memória externa / de [[cognitive-offloading|descarregamento cognitivo]] e parceira de decisão —, com o framework mais relevante a partir da infância intermediária.
- **Ensemble Cognition.** Um framework [[philosophy-of-ai-in-education|filosófico]] reconceitua o pensamento como emergente de interações dinâmicas entre agentes humanos e artificiais, em vez de residir apenas em mentes individuais.([[ensemble-cognition-philosophy-ai-education]]) Ele desafia o "paradigma da consciência" (os pressupostos de autonomia, consciência e estabilidade) e articula cinco características — agência distribuída, centralidade dinâmica, orquestração cognitiva, integração multirrepresentacional e comutação sensível ao contexto —, ao mesmo tempo que distingue a **agência funcional** da IA da responsabilidade moral.
- **Crescimento [[self-directed-learning|Autodirigido]] / A2PL.** Uma extensão da [[self-directed-learning|aprendizagem autodirigida]] integra a IA generativa à [[learning-analytics|analítica de aprendizagem]] para cultivar o **Crescimento Autodirigido**, operacionalizado por meio do modelo Aspire to Potentials for Learners (A2PL).([[self-directed-growth-generative-ai-learning-analytics]]) Ele reconfigura as aspirações de quem aprende (humanísticas), o pensamento complexo (construtivista) e a autoavaliação (pragmática) em uma única competência, posicionando a IAG como um andaimento colaborativo não prescritivo, e não como um fornecedor de conteúdo.
- **Supergeneralização enganosa.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren e Stamper (2026)]] estendem a tradição ACT-R / Conhecimento-Aprendizagem-Instrução ao teorizar quando a correção observada mascara compreensão condicional incompleta: quem aprende compila uma produção supergeneralizada que omite uma restrição de aplicação, mas ainda assim tem um desempenho correto — um modo de falha que sistemas adaptativos de domínio, e até mesmo a instrução tradicional, podem deixar passar, a menos que testem *quando se abster* de uma ação.
- **Teoria KLI executável.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger e Carvalho (2025)]] fundamentam o framework Conhecimento-Aprendizagem-Instrução em um modelo computacional executável (o framework Apprentice Learner, com um mecanismo de memória estilo ACT-R) que reproduz uma interação de crossover nos dados humanos: a prática pura auxilia a memória de fatos literais (ao atrasar o esquecimento), enquanto a prática integrada a exemplos auxilia a indução de habilidades generalizáveis. Como a KLI vincula o conhecimento constante (fato) a processos de memória e o conhecimento variável (habilidade) à indução, o resultado é uma interação conteúdo–tratamento prevista, e não uma contradição entre as recomendações de testagem e de exemplo resolvido —, e o sucesso do modelo apenas quando um mecanismo de memória está presente demonstra que prática e exemplos desempenham papéis distintos e complementares.
- **A corporificação como desafio ontológico ao paradigma da IA.** [[videla-embodied-ai-education-choreography|Videla, Penny e Ross (2026)]] argumentam que uma divisão ontológica separa a cognição corporificada e enactiva do idioma representacional que a IA incorpora, de modo que a IA deveria ser descentrada como centro epistêmico, em vez de tratada como uma ferramenta neutra.

### Como a base de conhecimento organiza essa vertente

Em vez de tratar as teorias de aprendizagem como filosofia abstrata, a base de conhecimento fundamenta cada uma na pesquisa em IA na educação que a usa. As páginas [[constructivist|construtivista]] e [[behaviorism|behaviorismo]] documentam como os desenhos de IA incorporam (ou traem) cada teoria; a Teoria da Carga Cognitiva, a [[self-regulated-learning|aprendizagem autorregulada]], a [[metacognition|metacognição]] e a [[transfer-of-learning|transferência de aprendizagem]] conectam a teoria a mecanismos e resultados específicos da IA. Isso espelha como a base de conhecimento trata outros domínios guarda-chuva como o [[feedback|feedback]] e a [[assessment|avaliação]] — um sistema coerente de conceitos que interagem, e não páginas isoladas.

### Teorias de aprendizagem e "educação sobre IA"

As teorias de aprendizagem também aparecem como conteúdo nos currículos de [[ai-literacy|letramento em IA]]: quem aprende estuda behaviorismo, cognitivismo, construtivismo e conectivismo para compreender os pressupostos [[pedagogy|pedagógicos]] por trás das ferramentas que usa.([[generativism-learning-theory]]) Ensinar essa vertente dá aos estudantes (e aos educadores) o vocabulário para criticar por que um produto de IA é construído da forma como é — e se suas mecânicas servem ao objetivo de aprendizagem em questão.

- **O agente mediacional.** Warschauer, Tate e Ritchie (2026) argumentam que a IA generativa rompe a distinção sociocultural entre meios mediacionais e interação social, propondo o *agente mediacional* — um sistema que tanto medeia a ação quanto gera contribuições contingentes e não responsabilizáveis, ocupando um espaço híbrido entre uma ferramenta e uma parceira social. Isso produz cinco hábitos de participação humano-primeiro (primazia da cognição humana, [[student-engagement|engajamento]] proposital, agência supervisória, vigilância epistêmica, autorregulação reflexiva).([[generative-ai-mediational-agent-sociocultural-2026]])

### Teorias propostas para a era da IA

Ao lado das famílias clássicas, a base de conhecimento documenta teorias escritas especificamente para a aprendizagem com sistemas de IA, e são elas que carregam as implicações de desenho que as teorias mais antigas deixam abertas. O [[yan-agentivism-learning-theory-ai-2026|Agentivismo (Yan e Gašević 2026)]] é um exemplo de alcance médio: ele define a aprendizagem como crescimento durável na capacidade humana, e não como conclusão bem-sucedida de tarefas, nomeia quatro mecanismos (agência delegada, monitoramento epistêmico e verificação, internalização reconstrutiva, e transferência sob apoio reduzido), e enuncia seis proposições testáveis, entre as quais a de que o apoio de IA que preserva a responsabilidade de quem aprende pelo enquadramento do problema, pelo estabelecimento de critérios e pela justificativa produz aprendizagem mais forte que o apoio que entrega respostas.

A **Simbiose Pedagógica** de [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]] faz uma afirmação ontológica mais forte: quem aprende é uma entidade *Pós-Humana* cuja cognição é híbrida, e não assistida por ferramentas, organizada por quatro princípios: descarregamento cognitivo e ampliação, coconstrução epistêmica, simbiose metacognitiva, e formação dinâmica de identidade; operacionalizada como uma rubrica de Portfólio Simbiótico e um papel docente de "Coreógrafo Cognitivo"; ela é explicitamente não testada.

## Ideias equivocadas comuns

**"Uma das teorias de aprendizagem é a correta, então a escolha de teoria é uma questão de gosto."** As teorias fazem afirmações diferentes sobre o que conta como evidência, então os mesmos dados podem sustentar conclusões opostas. O caso mais claro: notas de dever de casa infladas leem-se como **aprendizagem sob o behaviorismo** e como **uma falha em construir compreensão durável sob o construtivismo**. A escolha de teoria determina, portanto, se uma intervenção teve sucesso, o que a torna uma decisão de medição e não uma preferência estilística.

**"Uma ferramenta que apoia a aprendizagem profunda parecerá aprendizagem profunda sob qualquer framework."** Ela parecerá sucesso sob um e fracasso sob outro, como acima. É por isso que as medidas de desfecho do campo precisam ser justificadas contra uma teoria declarada, em vez de emprestadas como se fossem neutras.

**"Mais teorias significam um campo mais bem compreendido."** Acumulação sem adjudicação é o oposto de progresso. As teorias propostas para a era da IA se multiplicam mais rápido do que são testadas, e o sinal de maturidade é a resolução de previsões concorrentes — o que exige desenhos que consigam distingui-las, e não catálogos que as acomodem.

**"Educação sobre IA é o mesmo que IA na educação, teoricamente falando."** Elas se apoiam em vertentes diferentes: uma pergunta como quem aprende chega a compreender a IA como assunto, a outra como a IA muda a forma como a aprendizagem acontece. Confundi-las produz revisões de literatura que misturam duas bases de evidência distintas e não relatam um quadro coerente de nenhuma das duas.

## Implicações para a prática

**Para instrutores**

- Escolha a teoria pelo que você precisa que ela faça: explicar como a aprendizagem acontece, descrever o estado de quem aprende, ou explicar por que uma prática se difunde. Aplicar a camada errada mede a variável certa contra a previsão errada.
- Declare explicitamente o compromisso teórico da medida de desfecho, já que notas de dever de casa infladas leem-se como sucesso sob o behaviorismo e como fracasso sob o construtivismo a partir de dados idênticos.
- Quando um framework não consegue prever uma diferença entre configurações, ele não pode ser testado no seu contexto e não vai ajudar você a decidir.

**Para desenvolvedores**

- Publique a teoria que seu sistema incorpora e a previsão que o falsearia; "fundamentado no construtivismo" sem uma diferença falseável é uma afirmação sem conteúdo.

**Para pesquisadores**

- Desenhe para a adjudicação entre teorias, e não para a acumulação de frameworks. A maturidade aparece como previsões concorrentes resolvidas, e não como crescimento de vocabulário.

## Conceitos conectados

- [[behaviorism]]
- [[cognitive-psychology]]
- [[constructivist]]
- [[metacognition]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[self-determination-theory]]
- [[self-efficacy]]
- [[motivation]]
- [[sociocultural-learning]]
- [[scaffolding]]
- [[transfer-of-learning]]
- [[learning-gains]]
- [[desirable-difficulties]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[embodied-learning]]
- [[cognitive-offloading]]
- [[learning-design]]
- [[learning-sciences]]
- [[philosophy-of-ai-in-education]]
- [[ai-education]]
- [[pedagogy]] — Guarda-chuva: pedagogias e estratégias de ensino na educação com IA

## Artigos conectados
- [[yan-agentivism-learning-theory-ai-2026]] — Uma teoria de aprendizagem de alcance médio para a interação humano-IA, com quatro mecanismos e seis proposições testáveis (Yan e Gašević 2026)

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Supergeneralização enganosa: o domínio adaptativo pode encerrar a prática antes de quem aprende saber quando se abster de uma ação (An, McLaren & Stamper 2026)
- [[airis-hybrid-human-ai-cognition-2026]] — Investigação e regulação aumentadas por IA em sistemas híbridos (AIRIS)
- [[voicu-ai-interpretive-cognition-ssh-2026]]
- [[ai-cognitive-partner-co-regulation-learning]] — Posiciona a IA como parceira cognitiva na corregulação humano-IA; framework desenvolvimental ao longo da vida
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: um framework filosófico que reconceitua o pensamento como interação humano–IA
- [[self-directed-growth-generative-ai-learning-analytics]] — Crescimento Autodirigido e o modelo A2PL estendendo a aprendizagem autodirigida com IA generativa
- [[generativism-learning-theory]] — Propõe uma nova teoria de aprendizagem para a era da IA generativa, revisitando as quatro clássicas
- [[ai-vocational-education-training-review]] — Documentou a lacuna entre teoria e prática construtivismo/behaviorismo na IA para EFP
- [[genai-educational-outcomes-meta-analysis]]
- [[elsayed-pedagogical-symbiosis-posthuman-learner]]
- [[videla-embodied-ai-education-choreography]]
- [[generative-ai-mediational-agent-sociocultural-2026]] — A IA generativa como agente mediacional
- [[kim-ai-productive-failure-adult-2026]] — Desenhando sistemas de IA para apoiar a aprendizagem baseada em falha produtiva
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Direção pedagógica de LLMs para a falha produtiva
- [[lukesova-clue-before-correction-2026]] — Pista antes da correção: ChatGPT para aprendizagem autônoma de línguas
- [[rachatasumrit-example-problem-ratio-2026]]
