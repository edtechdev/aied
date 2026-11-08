---
title: "Metáforas e analogias"
created: "2026-11-08T16:31:00-05:00"
updated: "2026-11-08T16:31:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [misconceptions, student-engagement]
technology: [generative-ai]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
translation_of: concepts/metaphors-and-analogies
source_updated: "2026-11-07T12:10:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

> **Síntese**: Metáforas e analogias fazem dois trabalhos na educação com IA. São dispositivos de construção de sentido pelos quais educadores e estudantes decidem o que a IA *é* (uma ferramenta, um assistente, uma caixa-preta, um oráculo), e são dispositivos instrucionais que mapeiam um domínio-fonte familiar sobre um conceito-alvo não familiar. A pesquisa nesta base de conhecimento mostra que esses dois trabalhos estão conectados: as metáforas que as pessoas sustentam moldam o que elas esperam da IA, quais características notam e se confiam nela ou a temem. A mesma lógica de mapeamento estrutural explica por que uma analogia pode tornar uma ideia técnica memorável enquanto a deturpa silenciosamente. Uma analogia falha gerada por IA generativa pode ser mais útil do que uma polida quando os estudantes conhecem o domínio-fonte bem o suficiente para auditar o mapeamento e repará-lo. A lição prática é escolher metáforas pela característica que está sendo ensinada, verificar a adequação estrutural e a acessibilidade cultural, e tratar a comparação como objeto de crítica, e não como explicação acabada. A evidência é majoritariamente qualitativa, conceitual e de pequena escala; o campo tem pouca evidência causal de que o ensino baseado em metáforas melhora a aprendizagem.

## Perguntas para refletir

- Que metáfora você usa para a IA generativa quando não está sendo cuidadoso, e o que essa metáfora torna fácil de ver ou fácil de ignorar?
- Quando uma analogia familiar ajuda um estudante a entender um conceito técnico, e quando instala uma concepção errônea que a instrução posterior precisa desfazer?
- Quais domínios-fonte contam como familiares? Se uma analogia depende de esportes, jogos ou de um eletrodoméstico de cozinha, quem está incluído e quem fica de fora?
- Um tutor de IA deveria gerar analogias para os estudantes, ou deveria dar aos estudantes analogias para criticarem? O que muda quando a analogia é personalizada para os interesses declarados de um estudante?
- Uma analogia memorável não é necessariamente uma analogia precisa. O que você pediria aos estudantes para fazer a fim de mostrar que conseguem distinguir uma da outra?
- Que evidência o convenceria de que uma aula baseada em metáforas melhorou o letramento em IA, em vez de apenas tornar a aula mais envolvente?

## Introdução

Uma metáfora diz que uma coisa é outra: a IA é uma caixa-preta, uma ajudante, um espelho, um mapa. Uma analogia normalmente torna a comparação mais explícita: uma lista encadeada funciona como uma corrente, a recursão funciona como um conjunto de caixas aninhadas, ou usar IA é como cozinhar com uma Thermomix. As duas se sobrepõem na prática. Ambas pedem ao aprendiz que transporte relações de um domínio-fonte familiar para um domínio-alvo menos familiar, e ambas se tornam enganosas quando o mapeamento é estendido além das relações que de fato preserva.

Isso as torna mais do que decoração retórica. A pesquisa sobre metáfora conceitual trata a metáfora como uma estrutura do pensamento, não apenas da linguagem: as comparações disponíveis às pessoas moldam quais aspectos de um sistema parecem salientes e quais explicações parecem naturais. Na educação com IA, o que está em jogo é prático. Um estudante que enquadra um LLM como mecanismo de busca pode esperar que ele recupere fatos armazenados e pode não procurar os fabricados. Um docente que o enquadra como um estudante avançado pode esperar julgamento e especialização disciplinar que o modelo não tem. Uma discussão de política enquadrada em torno de um "desastre natural" ou de um "concorrente" sustenta respostas diferentes de uma enquadrada em torno de uma "calculadora de palavras".

Esta página cobre os dois lados desse papel duplo: a metáfora como janela para como educadores e estudantes entendem a IA, e a analogia como técnica de ensino no letramento em IA e nas explicações geradas por IA. Ela conecta trabalho sobre conceitualizações de docentes e estudantes, oficinas de metáfora em sala de aula, analogias geradas por IA generativa, design instrucional baseado em analogias e letramento crítico em IA. Ela não trata "metáfora" e "analogia" como sinônimos exatos, mas as mantém juntas porque os problemas de design são compartilhados: seleção da fonte, adequação estrutural, acesso cultural e crítica.

## Por que metáforas e analogias importam

O ponto de partida teórico é a Teoria da Metáfora Conceitual, associada a Lakoff e Johnson. Sua afirmação central é que as pessoas entendem domínios abstratos por meio de mapeamentos vindos de domínios mais concretos, e que esses mapeamentos podem se tornar tão familiares que deixam de parecer comparações. "A jornada da vida" não é apenas um modo de falar; carrega pressupostos sobre direção, progresso, obstáculos e destinos. O mesmo vale para "o assistente de IA" ou "a caixa-preta da IA".

Para a educação, a consequência útil é que a metáfora pode fazer trabalho conceitual antes de um professor oferecer uma definição. Ela dá aos aprendizes um lugar onde se apoiar. Também pode carregar toda uma teoria da agência: um "assistente" implica um usuário no controle, enquanto um "agente" implica iniciativa, e uma "caixa-preta" implica que a explicação é impossível ou desnecessária. Essas não são descrições neutras. Elas distribuem responsabilidade e definem expectativas de confiança.

As analogias acrescentam uma segunda camada: correspondência estrutural. Uma boa analogia instrucional preserva as relações que importam para o conceito-alvo, não apenas a semelhança superficial. Uma corrente pode ilustrar uma lista encadeada porque ambas envolvem nós conectados em sequência. Um conjunto de caixas aninhadas pode ilustrar a recursão porque cada nível contém uma versão menor da mesma estrutura. A comparação é sempre parcial. A questão pedagógica é se as relações preservadas são as de que o aprendiz precisa, e se o aprendiz consegue ver onde o mapeamento termina.

Essa questão separa esta página da [[explainable-ai|IA explicável]]. A IA explicável pergunta como as decisões de um sistema podem se tornar legíveis para as partes interessadas. Uma analogia pedagógica pergunta como um aprendiz pode construir um modelo mental utilizável de um processo. Uma explicação de por que um modelo sinalizou um estudante não é o mesmo que uma analogia de como um modelo gera texto, e nenhuma substitui a outra.

## Como educadores e estudantes descrevem a IA

A base de conhecimento agora tem várias janelas para as metáforas que as pessoas de fato usam. Elas não convergem para uma única imagem, o que é parte do ponto.

[[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson e Casey (2025)]] conduziram oficinas de análise de metáforas com estudantes, acadêmicos e equipes de apoio educacional. As metáforas dos participantes se agruparam em quatro categorias amplas: *Funções* (comparações do tipo ferramenta, como um canivete suíço), *Papéis* (relações do tipo humano, como ajudante, companheiro de estudo ou amigo-inimigo), *Qualidades* (comparações de confiabilidade duvidosa ou incognoscibilidade, como uma caixa-preta ou uma ladeira escorregadia) e *Agência* (comparações autônomas ou ameaçadoras, como um concorrente ou um robô sinistro). Duas tensões atravessaram o conjunto: agência humana versus agência de máquina, e o conhecido versus o incognoscível. A oficina não resolveu essas tensões. Tornou-as disponíveis para discussão, que é o que uma intervenção baseada em metáforas pode realisticamente fazer.

[[engineering-faculty-metaphors-ai-understanding-2026|Gerhardt e colegas (2026)]] entrevistaram 57 instrutores de engenharia de diferentes disciplinas e universidades e analisaram as analogias que eles ofereceram espontaneamente. Os instrutores em sua maioria enquadraram a IA generativa como um ser social ou agente semelhante a um humano (um assistente, um estudante de doutorado) ou como um objeto técnico (um mecanismo de busca, uma ferramenta). Poucos a enquadraram como uma força ambiental ou sistêmica. Os autores organizam as respostas ao longo de cinco dimensões: ontologia, epistemologia, operação, relação e poder ou capacidade. Sua preocupação não é que os instrutores usem metáforas, mas que colegas do mesmo departamento possam sustentar metáforas incompatíveis assumindo que compartilham uma linguagem. Isso faz da eliciação de metáforas um diagnóstico de desenvolvimento docente, não apenas uma técnica de sala de aula.

Os estudantes mostram uma variedade semelhante. [[genai-professionalization-metaphors-2026|Bohmer e colegas (2026)]] encontraram estudantes conceitualizando a IA generativa como um ator social, uma técnica, material de aprendizagem ou uma estrutura, com enquadramentos socioemocionais e técnicos igualmente salientes. [[ai-engineering-education-balancing-act|Kudina (2026)]] descreve os enquadramentos dominantes dos estudantes de engenharia como o LLM "oráculo" e "tutor", ambos atribuindo autoridade e personalização além do que a ferramenta fornece de modo confiável. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman e colegas (2026)]] tratam a "máquina de vender feedback" de um estudante como um artefato de letramento mais útil do que o vocabulário polido de tutor, porque ela torna a transação visível: insira o trabalho, receba a saída, sem relação e sem agência.

O achado transversal é que a metáfora é diagnóstica da expectativa. Um estudante que chama um LLM de oráculo não está simplesmente usando uma palavra colorida. O rótulo prediz o que o estudante fará quando o modelo estiver errado, e o que o estudante acreditará sobre verificação. Um docente que o chama de mecanismo de busca não está simplesmente sendo impreciso. O rótulo prediz o que ele pedirá aos estudantes que façam com ele. É por isso que programas de [[educational-development]] podem usar a eliciação de metáforas antes de uma reforma de política ou de avaliação, e por que a [[engineering-education]] e a [[cs-education]] precisam de conversas específicas por disciplina, em vez de uma definição única para toda a instituição.

Uma vertente filosófica empurra a metáfora em outra direção: [[daoism-ai-education-philosophy-2026|Xie (2026)]] propõe "Zhenren" como contraideal ao aprendiz administrado por algoritmos, tratando a imagem como um modo de argumentar sobre fins educacionais, e não de explicar um processo técnico.

## Analogias como técnica de ensino

A evidência de sala de aula mais forte no corpus vem do uso de analogias na educação em computação. [[student-reception-genai-analogies-computing-2026|Bernstein e Sibia (2026)]] deram a estudantes de graduação analogias geradas por IA generativa para listas encadeadas e recursão, e então pediram que anotassem e discutissem as saídas. Os estudantes não julgaram as analogias como globalmente boas ou ruins. Eles separaram precisão estrutural, clareza, adequação e confiança, e nomearam quebras específicas: uma rota circular descreve uma lista circular, não uma lista simplesmente encadeada; uma sequência de golpes de badminton não tem entrada garantidamente decrescente para a recursão; uma referência baseada em interesses pode pressupor conhecimento que o estudante não tem.

A contribuição do artigo é a ideia de **auditoria bidirecional de analogias**. O conhecimento do conceito-alvo diz ao estudante quais relações uma analogia precisa preservar. O conhecimento do domínio-fonte diz se a fonte de fato tem essas relações. Os auditores mais afiados nem sempre eram os estudantes cujos interesses combinavam com a analogia. Eram os estudantes que conheciam o domínio-fonte bem o suficiente para inspecioná-lo. Isso tem uma implicação de design: uma fonte familiar pode transformar um estudante de destinatário em auditor especialista. Os autores recomendam atribuir analogias falhas como objetos a inspecionar e reparar, em vez de filtrá-las. A analogia falha se torna uma [[desirable-difficulties|dificuldade desejável]].

Esse achado complica o pressuposto usual de que explicações geradas por IA deveriam ser polidas antes que os estudantes as vejam. Uma analogia limpa ainda pode codificar um mapeamento errado, e uma falha pode ser mais instrutiva se a tarefa é a crítica. A condição importante é que os estudantes tenham conhecimento-alvo suficiente para saber o que a analogia precisa preservar, e conhecimento-fonte suficiente para verificar se ela preserva. Sem um dos dois, a analogia pode ser memorável pelo motivo errado.

[[anvil-ai-educational-animations|ANVIL]] mostra o lado da geração. Ele recebe a definição de um conceito, gera uma analogia textual, compila-a em um roteiro, produz código de animação e repara falhas em um ciclo delimitado. O sistema foi avaliado com educadores de ciência da computação, que classificaram a maioria das analogias como adequadas e valorizaram a ferramenta como colaboradora criativa para o planejamento inicial de aulas. Os autores também descobriram que o controle do instrutor, a editabilidade e a adequação pedagógica importavam mais do que a qualidade bruta da geração. ANVIL é um lembrete de que uma analogia gerada por IA é um artefato candidato, não uma explicação acabada: o professor ainda precisa decidir se o mapeamento é estruturalmente sólido e apropriado para a turma.

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall e Panadero]] usam uma analogia como o próprio argumento. A Thermomix, um eletrodoméstico de cozinha guiada, provoca entusiasmo e crítica semelhantes aos da IA generativa na educação. Ao mapear cenários de cozinha sobre cenários de aprendizagem, eles deslocam a discussão de "a IA é boa ou ruim" para "quanto do trabalho é delegado, e o que isso faz com o aprendiz?". A analogia não é evidência; é um dispositivo para tornar visível um contínuo de design. Esse é um uso legítimo da analogia em um artigo conceitual, mas não deve ser confundido com uma intervenção testada.

[[code-anchor-multi-view-visualization|Code as Anchor]] acrescenta uma cautela de design. Os estudantes usaram múltiplas representações, incluindo uma visão de metáfora, mas passaram a maior parte do tempo de olhar no código e apenas uma pequena fração na visão de metáfora. Alguns viram os andaimes metafóricos como infantis ou compensatórios. Uma metáfora que um instrutor considera iluminadora pode ser lida por um estudante como marca de baixa capacidade. A legitimidade é parte da utilidade pedagógica, não uma preocupação separada.

## Metáfora como letramento crítico em IA

O referencial mais direto para ensinar com metáforas vem de [[roe-perkins-furze-metaphors-critical-ai-literacy-2025|Roe, Perkins e Furze (2025)]]. Eles definem o letramento crítico em IA como compreender como os sistemas de IA funcionam e, ao mesmo tempo, examinar suas consequências sociais, ambientais e culturais. Partindo de uma lista de 13 metáforas comuns de IA, eles selecionam quatro para uso em sala de aula e avaliam cada uma segundo quatro critérios: acessibilidade, poder explicativo, potencial de letramento crítico em IA e utilidade pedagógica.

As quatro são:

- **IA como uma casa de espelhos**, para distorção e viés na saída gerada.
- **IA como um mapa**, para representação, seleção e de quem é o conhecimento incluído.
- **IA como uma câmara de eco**, para ciclos de retroalimentação, bolhas de filtro e o reforço de padrões existentes.
- **IA como uma caixa-preta**, para opacidade e os limites da explicação.

Cada uma é acompanhada de uma atividade curta e de uma discussão facilitada pelo professor. A lição da casa de espelhos faz os estudantes testarem prompts em busca de viés; a lição da câmara de eco faz com que observem como prompts repetidos e dados limitados reforçam padrões; a lição do mapa pergunta o que a representação de uma IA inclui e omite; a lição da caixa-preta usa a geração probabilística para tornar visíveis processos ocultos. Os autores mapeiam as atividades para o referencial de competências em IA da UNESCO para estudantes, o que dá ao referencial um gancho curricular em vez de deixá-lo como exortação geral a discutir metáforas.

O movimento mais importante do referencial é tratar as metáforas como objetos de crítica. Uma metáfora é útil porque é parcial, e se torna perigosa quando é apresentada como completa. A casa de espelhos mostra a distorção, mas não o algoritmo que a produz. O mapa mostra a representação, mas pode implicar uma intenção coerente que o sistema não tem. A caixa-preta mostra a opacidade, mas pode encorajar a conclusão de que nada pode ser conhecido. A lição deveria terminar com a pergunta sobre onde a comparação se rompe.

É também isso que conecta o trabalho com metáforas ao [[ai-literacy]] de modo mais amplo. Uma oficina de metáforas é um modo de baixa tecnologia de trazer à superfície pressupostos antes de uma aula técnica. A crítica de uma analogia gerada por IA é um modo de avaliar se um estudante entende o conceito-alvo. A metáfora do próprio estudante, como a máquina de vender feedback, pode ser mais reveladora do que um item padronizado de questionário. Todas essas são formas de [[critical-thinking]] sobre IA, não apenas exercícios de escrita criativa.

## Projetar instrução baseada em metáforas

- **Comece pela característica, não pela imagem.** Decida o que os estudantes precisam entender, e então pergunte qual domínio-fonte preserva as relações que importam. Uma comparação memorável que aponta para a característica errada é pior do que uma explicação simples.
- **Verifique a adequação estrutural antes da personalização.** A correspondência de interesses pode aumentar o engajamento, mas não garante que o domínio-fonte tenha a estrutura certa. Verifique o mapeamento primeiro, depois personalize.
- **Audite o domínio-fonte quanto ao acesso cultural.** Casas de espelhos, mapas, esportes e eletrodomésticos de cozinha não são igualmente familiares a todos os aprendizes. Pergunte o que a comparação pressupõe e ofereça alternativas.
- **Torne os limites explícitos.** Peça aos estudantes que nomeiem o que a metáfora preserva, o que distorce e o que não consegue explicar. A crítica é a aprendizagem avaliada, não uma discussão opcional.
- **Use múltiplas metáforas parciais.** Uma casa de espelhos, um mapa e uma câmara de eco podem coexistir porque cada uma ilumina uma dimensão diferente. Uma única metáfora totalizante é mais propensa a se tornar uma concepção errônea.
- **Mantenha a explicação técnica por perto.** Uma analogia pode abrir um tópico, mas não deve substituir a instrução sobre dados de treinamento, geração probabilística ou a diferença entre saída fluente e conhecimento verificado.
- **Avalie a atividade, não apenas o engajamento.** O corpus ainda não mostra que aulas baseadas em metáforas melhoram o letramento em IA ou os resultados de aprendizagem. Trate as atividades como desenhos a testar, e meça o que os estudantes conseguem fazer depois.

## Ideias equivocadas comuns

- **"Uma metáfora memorável é uma boa metáfora."** Memorabilidade não é poder explicativo. Os estudantes podem lembrar de uma analogia vívida e ainda assim entender mal o conceito que ela deveria esclarecer.
- **"Metáforas são ilustrações neutras."** Toda metáfora seleciona algumas características e esconde outras. A escolha carrega pressupostos sobre agência, confiança e responsabilidade.
- **"Analogias geradas por IA estão prontas para uso."** Analogias geradas podem ser estruturalmente erradas, culturalmente estreitas ou pedagogicamente inadequadas. Elas precisam de revisão do professor ou de uma tarefa de crítica pelos estudantes.
- **"Se os estudantes gostaram da analogia, eles aprenderam o conceito."** Engajamento e aprendizagem são resultados separados. A base de evidências aqui é majoritariamente qualitativa e não estabelece ganho de aprendizagem.

## Limites e lacunas de evidência

A literatura nesta base de conhecimento é desigual. Os estudos de metáforas com docentes e estudantes são qualitativos e muitas vezes pequenos. O estudo com docentes de engenharia analisa respostas a uma única pergunta de entrevista. O estudo de profissionalização trata contagens de metáforas como exploratórias. O estudo de analogias em sala de aula tem dez estudantes de graduação e um confundimento entre personalização e formato da explicação. O referencial de Roe et al. é conceitual e suas atividades não foram testadas com estudantes. ANVIL é uma avaliação de sistema com educadores, não um estudo de aprendizagem.

Isso não torna o trabalho inútil. Torna as afirmações apropriadamente modestas. A eliciação de metáforas pode revelar pressupostos que questionários perdem. A crítica de analogias pode tornar visível a compreensão estrutural. Uma metáfora bem escolhida pode dar a uma turma um objeto compartilhado para debater. Mas o campo ainda precisa de estudos que comparem a instrução baseada em metáforas com a instrução comum, meçam transferência em vez de recordação da metáfora, e testem se a abordagem viaja entre culturas e disciplinas.

O risco de exagero é real nas duas direções. Um professor que trata uma metáfora como explicação completa pode instalar uma concepção errônea. Um pesquisador que trata a metáfora como mera decoração pode perder um mecanismo pelo qual os estudantes constroem ou deixam de construir um modelo mental. A posição produtiva é tratar a metáfora como uma representação projetada, parcial e criticável, e estudar o que os aprendizes fazem com ela.

## Conceitos conectados

- [[ai-literacy]] — o guarda-chuva do letramento crítico em IA e do ensino baseado em metáforas.
- [[critical-thinking]] — a crítica de analogias como forma de raciocínio estrutural.
- [[misconceptions]] — analogias falhas como fonte de concepções errôneas duradouras.
- [[student-ai-interaction]] — como os estudantes interpretam e auditam explicações de IA.
- [[pedagogical-agent]] — tutores de IA que geram explicações ou analogias.
- [[learning-design]] — selecionar e sequenciar materiais baseados em analogias.
- [[educational-development]] — eliciação de metáforas no desenvolvimento docente.
- [[engineering-education]] — metáforas de docentes e estudantes na engenharia.
- [[cs-education]] — uso e crítica de analogias na educação em computação.
- [[cognitive-offloading]] — metáforas de ferramenta e de assistente e seus riscos.
- [[trust-calibration]] — papéis antropomórficos e confiança mal colocada.
- [[equity-in-ai-education]] — de quem os domínios-fonte contam como familiares.
- [[teacher-role]] — o julgamento do instrutor sobre explicações geradas por IA.
- [[explainable-ai]] — explicação de sistema versus analogia pedagógica.
- [[student-engagement]] — efeitos de engajamento de analogias personalizadas.
- [[higher-ed]] — o cenário da maioria dos estudos deste agrupamento.

## Artigos conectados

- [[roe-perkins-furze-metaphors-critical-ai-literacy-2025]] — Quatro metáforas e critérios para ensinar letramento crítico em IA
- [[student-reception-genai-analogies-computing-2026]] — Estudantes auditam analogias geradas por IA generativa e reparam mapeamentos quebrados
- [[fear-awe-genai-metaphor-workshops-2025]] — Oficinas de análise de metáforas com estudantes, acadêmicos e equipes
- [[engineering-faculty-metaphors-ai-understanding-2026]] — Metáforas de docentes de engenharia constroem e restringem o entendimento da IA
- [[genai-professionalization-metaphors-2026]] — Conceitualizações metafóricas de estudantes sobre IA generativa e aprendizagem profissional
- [[thermomix-genai-education-analogy-2026]] — Uma analogia de eletrodoméstico de cozinha para delegação e aprendizagem com IA
- [[anvil-ai-educational-animations]] — Analogias geradas por IA e animações instrucionais para computação
- [[ai-engineering-education-balancing-act]] — As metáforas de "oráculo" e "tutor" dos estudantes excedem as capacidades do LLM
- [[code-anchor-multi-view-visualization]] — Andaimes de visualização metafórica e seu problema de legitimidade
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — A metáfora da "máquina de vender feedback" de uma estudante como evidência de letramento
- [[daoism-ai-education-philosophy-2026]] — "Zhenren" como contrametáfora para a IA na educação
