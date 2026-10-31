---
connected_resources: [drawsplat]
title: Visualização
type: concept
technology: [ai-technologies, learning-analytics, multimodal, visualization]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-10-30T21:00:00-04:00"
translation_of: concepts/visualization
source_updated: "2026-10-26T07:30:00-04:00"
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

> **Visualização** — o uso de visualizações de dados, infográficos, dashboards, gráficos, diagramas e outras representações gráficas para tornar a informação compreensível para a aprendizagem e a análise. Na educação, a visualização é crescentemente tanto gerada pela IA (texto-para-imagem, análise [[multimodal|multimodal]] de slides e gráficos) quanto usada como a interface por meio da qual estudantes, professores e sistemas de analítica raciocinam sobre dados compartilhados.

## Perguntas para refletir

- Um gráfico ou dashboard pode tornar os dados claros — mas simplesmente *ver* uma visualização é o mesmo que compreendê-la? A [[research-methods-aied|pesquisa]] da página sugere que como você interage com uma visualização importa mais que o próprio gráfico. Lembre de um dashboard ou gráfico que você olhou, mas do qual não aprendeu realmente. O que faltava na mera exibição?
- Os dashboards convencionais de aprendizagem seguem um modelo de \"mostre os dados e espere pelo insight\". O achado aqui é que os estudantes que respondem a questões sobre seus dados *antes* de ver as métricas refletem e se calibram melhor que os que passivamente veem gráficos. Por que ser forçado a prever primeiro poderia mudar o que você extrai de ver os dados reais?
- A IA já consegue gerar visualizações acuradas de conteúdo especializado — um estudo elevou a acurácia de domínio de 12% para 78% fazendo fine-tuning de um modelo texto-para-imagem em conceitos nucleares. Mas a página também descobre que nenhum modelo é uniformemente competente. Onde você confiaria numa visual gerada por IA, e onde insistiria em checá-la contra um especialista humano?
- Os participantes de um estudo acharam as histórias em quadrinhos de dados geradas por IA mais engajantes e compreensíveis, mas muitos também sinalizaram risco de desinformação e sobrecarga de informação. Como você pesa o apelo de uma visual de IA convincente contra seu potencial de enganar — e o que você verificaria antes de confiar nela ou usá-la?
- A página alerta que a *confiança* de um modelo não é sua *confiabilidade*: os sistemas podem divergir agudamente em julgamentos de severidade ao mesmo tempo que acertam os construtos básicos. Se você dependesse de uma ferramenta de IA para avaliar slides, redações ou dados, como descobriria onde sua confiança escondia um erro sério?
- Um estudo descobriu que os estudantes passavam a maior parte do olhar no código, apesar dos elaborados scaffolds visuais — os auxílios visuais simplesmente não capturavam a atenção de todos. O que isso sugere sobre presumir que um diagrama ou dashboard bonito ajudará automaticamente todos os estudantes a se engajar? O que além dos visuais molda como as pessoas de fato usam uma ferramenta?

## Introdução

Visualização é o uso da representação gráfica — dashboards, gráficos, diagramas, infográficos e exibições multimodais — para tornar inteligíveis a aprendizagem e os dados de aprendizagem. Seu papel educacional mais estabelecido é o dashboard de [[learning-analytics|analítica de aprendizagem]], onde o modelo dominante de *mostre os dados e espere pelo insight* deu lugar a desenhos interativos: a evidência indica que como os estudantes interagem com uma representação importa mais que se eles a veem, e que prompts de autoeliciação e [[pedagogical-agent|agentes pedagógicos]] melhoram a calibração mais que métricas passivas. A mesma questão — a exibição provoca o pensamento ou o substitui? — liga a visualização às [[desirable-difficulties|dificuldades desejáveis]] e à [[metacognition|metacognição]].

## A visualização como interface de aprendizagem

O papel mais estabelecido da visualização na educação é o dashboard de analítica de aprendizagem. Os Dashboards Convencionais de Analítica de Aprendizagem (LADs) operam num modelo de \"mostre os dados → espere pelo insight\", apresentando métricas comportamentais em gráficos que os estudantes veem passivamente. A pesquisa em [[interactive-learning-dashboards-engagement]] desafia esse paradigma: quando um dashboard acrescenta um [[pedagogical-agent|agente pedagógico]] movido por [[llm|LLM]] e uma autoavaliação interativa de Julgamento de Aprendizagem, a condição de \"eliciação\" — em que os estudantes respondem a questões sobre seus dados antes de ver as métricas — produziu mais reflexão e calibração de maestria mais acurada que tanto um dashboard passivo quanto um agente que \"conta\". A lição é que como os estudantes interagem com as visualizações importa mais que meramente vê-las. Isso conecta a [[learning-analytics|analítica de aprendizagem]] e a [[self-regulated-learning|aprendizagem autorregulada]], onde o feedback visual apoia a calibração do julgamento [[metacognition|metacognitivo]], e não a mera exibição de informação.

Os dashboards voltados ao [[teacher-role|professor]] acrescentam um conjunto distinto de lições de desenho. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] descobriram que os professores preferiam sistematicamente visualizações mais simples e tradicionais (gráficos de barras, gráficos de pizza, legendas), mesmo quando desenhos mais complexos (ex., mapas de calor) produziam insights mais detalhados — a preferência visual nem sempre se alinhava à informatividade, ecoando debates sobre a legibilidade comparativa dos gráficos de pizza. O letramento de visualização (VL) não dirigia as preferências de desenho, mas professores com VL mais alta produziam interpretações mais profundas e detalhadas (ex., mais deles identificavam tendências em dados de séries temporais), confirmando o VL como [[research-methods-aied|confundidor]] para medir como os professores leem os desenhos de analítica. Para comparação de grupos, os professores favoreciam fortemente a superposição em relação à justaposição, e preferiam gráficos que exibissem informação completa (ex., incluindo um grupo de \"estudantes que não assistiram\") em vez da codificação explícita de diferenças, embora professores mais jovens classificassem mais alto os gráficos de diferença. Esses achados argumentam que o desenho de dashboards precisa equilibrar as preferências declaradas dos professores com a profundidade interpretativa que codificações mais complexas permitem.

Os dashboards também funcionam como representações compartilhadas que fazem a ponte entre o raciocínio humano e o da IA. O sistema CLARA usa artefatos gerados por LLM — mapas de conceito e avaliações de colaboração de sete dimensões — como terreno comum entre os usuários do dashboard e os [[agentic-ai|agentes de IA]], indexando-os em coleções vetoriais separadas para que ambas as partes raciocinem sobre o mesmo material visível e consultável. Similarmente, o Expert Cognition Dashboard reenquadra a analítica como \"inteligência de cognição\", transformando comportamentos brutos dos estudantes em estruturas cognitivas interpretáveis ao longo dos níveis individual, de turma e de especialista Gêmeo de IA. Esses sistemas posicionam a visualização não como saída, mas como infraestrutura de raciocínio embutida na educação nativa de [[ai-technologies|tecnologias de IA]].

## Conteúdo visual gerado por IA e multimodal

Uma segunda vertente importante diz respeito à IA produzindo visualizações diretamente. O estudo [[nuclear-diffusion-text-to-image-learning-2026]] mostra que modelos texto-para-imagem adaptados a domínio conseguem gerar ilustrações acuradas de conceitos especializados de STEM: fazer fine-tuning do Stable Diffusion em imagens do domínio nuclear elevou a acurácia de domínio de 12% para 78%, permitindo aos instrutores produzir sob demanda visualizações corretas de componentes de reator e de sistemas de segurança. Essa capacidade generativa é poderosa, mas desigual. O [[mllm-scientific-visualization-literacy|benchmark]] [[benchmark|compara]] seis modelos de linguagem grandes multimodais com 485 participantes humanos em letramento de visualização científica, descobrindo que não há competência uniforme: o Gemini de código fechado excedeu a média humana em vários subconjuntos, enquanto todos os modelos [[open-source|de código aberto]] ficaram abaixo dela, com fraquezas particulares na estimação [[quantitative-research|quantitativa]] refinada e em visualizações baseadas em textura ou em integração. A IA deveria portanto apoiar — e não substituir — o letramento de visualização humana, um achado com implicações diretas para [[ai-literacy|letramento em IA]] e [[formative-assessment|avaliação formativa]].

A geração de gráficos a partir de prompts levanta uma questão diferente de se a IA consegue produzir uma visualização competente: se quem aprende ainda realiza o trabalho analítico e de codificação que torna o artefato educativo. Um framework de 2026 chama isso de divisão processo–resultado e propõe transparência, convite e desvanecimento como a linha de agência entre [[scaffolding|andaimento]] e substituição ([[genai-visualization-education-framework-2026|Purohit et al., 2026]]).

A ética e a confiabilidade temperam o entusiasmo pelo conteúdo visual gerado por IA. O estudo [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] descobriu que histórias em quadrinhos de dados assistidas por [[generative-ai|GenAI]] melhoraram o [[student-engagement|engajamento]] e a compreensão em relação às visualizações convencionais, independentemente do letramento de visualização prévio, mas os participantes levantaram preocupações sobre risco de desinformação e atribuição de [[academic-integrity|autoria]], e dois terços sinalizaram desvantagens como sobrecarga de informação por layouts excessivamente carregados. O benchmark contrafactual CFES-P24 estende esse escrutínio à [[cfes-p24-multimodal-slide-auditing-2026|auditoria de slides]], mostrando que LLMs multimodais conseguem reconhecer de forma confiável construtos de [[learning-design|desenho de aprendizagem]] (operações, princípios, localização de evidência), ao mesmo tempo que divergem agudamente em julgamento comparativo e calibração de severidade — evidência de que notas compostas escondem qual capacidade falha e de que confiança não é confiabilidade. Juntas, essas obras argumentam pela [[ai-ed-evaluation|avaliação em camadas]] das visuais geradas por IA, em vez de avaliações holísticas.

## Ferramentas de slides, quadrinhos e múltiplas visualizações na prática

Sistemas práticos aplicam esses princípios em escala. O AISSA combina correção por rubrica baseada em LLM com dashboards de analítica de aprendizagem para entregar feedback automatizado e iterativo sobre slides de apresentação dos estudantes, processando 90 apresentações em 1–3 minutos cada a custo de centavos por avaliação, com alta [[usability-research|usabilidade]] percebida — embora os estudantes aplicassem o feedback seletivamente, às vezes desconsiderando recomendações que conflitavam com seu desenho visual. Na [[cs-education|educação em programação]], o Flowcode emparelha um fluxograma de estrutura de código com um chat orientado à aprendizagem para ajudar codificadores criativos novatos a compreender e estender exemplos encontrados, onde a visualização e o [[desirable-difficulties|atrito produtivo]] dirigem o uso da IA rumo à aprendizagem, em vez de contorná-la. Mas [[scaffolding|scaffolds]] visuais não são universalmente eficazes: o estudo [[code-anchor-multi-view-visualization]] descobriu que os estudantes passavam ~47% do tempo de olhar no código, apesar dos scaffolds visuais, movidos por agência, encaixe de representação e a legitimidade percebida das visões metafóricas. Esses achados de [[student-experience|experiência do estudante]] alertam que o desenho de visualização precisa atender a fatores [[affective-computing|afetivos]] e sociais, e não apenas às affordances cognitivas.

## Implicações

Ao longo das obras discutidas aqui, a visualização emerge como meio de duplo uso: a IA gera e interpreta cada vez mais visualizações, enquanto dashboards e visuais interativos servem como a superfície compartilhada para a construção de sentido humano-IA. O texto-para-imagem generativo e a análise multimodal estendem o alcance da visualização para conteúdo especializado de [[stem-education|STEM]] e [[ai-feedback-quality|feedback automatizado]], mas a competência desigual dos modelos, as falhas de calibração de severidade e as preocupações [[ethics|éticas]] com desinformação e autoria exigem verificação cuidadosa e em camadas. Para desenhistas e educadores, a conclusão mais forte é que interatividade e engajamento — eliciar o raciocínio dos estudantes sobre dados visuais, deixar os usuários controlarem o esforço cognitivo e tratar os visuais produzidos por IA como infraestrutura compartilhada, e não como pontos finais — importam mais que a fidelidade do próprio gráfico.

## Ideias equivocadas comuns

- **"A IA não consegue renderizar conteúdo especializado com precisão."** Consegue, com o método certo: o ajuste fino de um modelo texto-para-imagem sobre conceitos nucleares **elevou a acurácia de domínio de 12% para 78%**. A lacuna é de fundamentação no domínio, não de capacidade generativa, e é tratável.
- **"Visualizações melhores produzem resultados melhores."** Os professores **preferiram sistematicamente visualizações mais simples e tradicionais** (gráficos de barras, gráficos de pizza, legendas) **mesmo quando desenhos complexos, como mapas de calor, produziam insights mais detalhados**. O artefato mais informativo não foi o que acabou sendo usado, de modo que a adoção é um problema separado da qualidade do desenho.
- **"Os estudantes olham para onde está o andaimento."** Um estudo constatou que os estudantes **passaram a maior parte do olhar no código, apesar de andaimes visuais elaborados** — os auxílios simplesmente não capturaram a atenção. Apoio visual presente, mas não observado, não muda nada.
- **"Engajamento e compreensão caminham juntos."** Os participantes acharam as histórias em quadrinhos de dados geradas por IA **mais engajantes e compreensíveis, mas muitos também sinalizaram risco de desinformação e sobrecarga de informação**. Ambas as reações vieram do mesmo artefato, de modo que uma recepção positiva não é uma leitura verificada.

## Conceitos conectados
- [[learning-analytics]]
- [[multimodal]]
- [[generative-ai]]
- [[ai-technologies]]
- [[ai-literacy]]
- [[storytelling-in-education]]
- [[learning-design]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — representação espacial e tridimensional

## Artigos conectados

- [[interactive-learning-dashboards-engagement]] — Repensando as visualizações de aprendizagem como ferramentas de engajamento por meio de agentes pedagógicos
- [[mllm-scientific-visualization-literacy]] — Comparando LLMs multimodais quanto ao letramento de visualização científica
- [[nuclear-diffusion-text-to-image-learning-2026]] — Modelos texto-para-imagem adaptados a domínio para a visualização de conceitos nucleares
- [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] — Eficácia, benefícios e ética das histórias em quadrinhos de dados assistidas por IA
- [[cfes-p24-multimodal-slide-auditing-2026]] — Benchmark contrafactual para auditoria multimodal de slides
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Tornando acessíveis a professores os achados de ML em salas de aula mistas
- [[genai-visualization-education-framework-2026]] — Construindo significado, não apenas gráficos: um framework cognitivo-instrucional para o uso de IA generativa na educação em visualização
