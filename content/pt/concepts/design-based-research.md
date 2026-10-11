---
title: Pesquisa Baseada em Design
created: "2026-08-24T02:30:00-04:00"
updated: "2026-09-30T07:37:28-04:00"
type: concept
research_method: [literature review]
confidence: high
methods: [design-based-research, research-methods-aied]
translation_of: concepts/design-based-research
source_updated: "2026-09-30T07:37:28-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **A pesquisa baseada em design (DBR)** — uma abordagem metodológica que projeta, implementa e refina iterativamente uma intervenção educacional em contextos autênticos, ciclando entre teoria, design e prática do mundo real para produzir tanto um artefato utilizável quanto princípios de design validados. Na [[ai-education|IA na educação]], a DBR é o método de escolha para desenvolver ambientes de aprendizagem com IA, modelos [[pedagogy|pedagógicos]] e programas de formação de professores que precisam funcionar na realidade bagunçada das salas de aula — trocando o controle causal dos [[rct|experimentos]] por autenticidade ecológica e refinamento iterativo.

## Questões a considerar

- A pesquisa baseada em design projeta, implementa e refina iterativamente uma intervenção em salas de aula reais, ciclando entre teoria e prática. Como isso é fundamentalmente diferente de um experimento controlado — e por que um pesquisador de sala de aula poderia preferi-lo?
- A DBR troca deliberadamente o controle causal por autenticidade ecológica. Se você não pode dizer com certeza O QUE causou um ganho de aprendizagem, o conhecimento ainda vale o quê?
- A DBR produz duas coisas ao mesmo tempo: um artefato utilizável e princípios de design validados. Qual dessas duas saídas importa mais para você — uma ferramenta que funciona, ou um princípio que você pode aplicar em outro lugar?
- Uma força da DBR é a alta relevância prática; uma limitação é que os achados são ligados ao contexto e difíceis de generalizar. Quando você confiaria em um achado de DBR o suficiente para aplicá-lo em um cenário muito diferente?
- Sem uma medida de resultado controlada e sem assistência, os ganhos de aprendizagem da DBR podem refletir o mesmo problema de "desempenho inflado pela IA" que ela estuda. Como você projetaria um estudo de DBR para que seus ganhos relatados signifiquem de fato aprendizagem, e não desempenho assistido?

## Introdução

A DBR é uma tradição de *design*, não uma tradição de dados: ela não se encaixa com perfeição no contraste [[quantitative-research|quantitativo]]/[[qualitative-research|qualitativo]]/experimental. Ela combina deliberadamente elementos dos três — coletando tanto dados de resultado quanto de processo ao longo de ciclos iterativos — para responder *"como projetamos este ambiente de aprendizagem com IA para funcionar na prática?"* em vez de *"X causa Y?"*. Está intimamente relacionada ao [[learning-design|design de aprendizagem]] (que especifica o processo de design) e à [[usability-research|avaliação de usabilidade]] (que alimenta o refinamento), mas se distingue por seu caráter sustentado, dirigido por teoria e multicíclico, e por seu objetivo duplo de melhorar a prática *e* gerar teoria.

## O ciclo da DBR

A DBR não é um design único, mas um laço iterativo, tipicamente composto por:

1. **Análise de necessidades** — compreender o problema, o contexto e os aprendizes em cenários autênticos.
2. **Design** — articular uma intervenção e sua fundamentação teórica subjacente.
3. **Implementação** — implantar a intervenção em uma sala de aula ou programa real.
4. **Refinamento** — analisar dados, revisar o design e iterar (frequentemente ao longo de múltiplos ciclos).
5. **Saída de teoria e artefato** — produzir tanto uma intervenção utilizável quanto princípios de design generalizáveis ou um modelo validado.

O exemplo canônico de AIEd é o estudo do [[ai-assisted-collaborative-learning-model-dbr|Modelo de Aprendizagem Colaborativa Assistida por IA (AACL)]], que rodou um ciclo de DBR em quatro fases — análise de necessidades, design do modelo, uma implementação em sala de aula de oito semanas com graduandos indonésios, e refinamento do modelo — iterando sobre um ciclo de aprendizagem de quatro estágios (identificação do problema → investigação [[collaborative-learning|colaborativa]] assistida por IA → [[problem-solving|resolução colaborativa de problemas]] → reflexão e apresentação).

## Como a DBR aparece na base de conhecimento

- **Desenvolvendo modelos de aprendizagem.** O estudo do [[ai-assisted-collaborative-learning-model-dbr|Modelo AACL]] usa DBR para desenvolver e avaliar um modelo de aprendizagem colaborativa assistida por IA voltado ao [[critical-thinking|pensamento crítico]] e à resolução de problemas no [[higher-ed|ensino superior]].
- **Construindo formação de professores em letramento em IA.** [[genai-literacy-training-teacher-education-dbr-2026|Le et al.]] desenvolvem e avaliam uma intervenção de DBR de formação em letramento em [[generative-ai|GenAI]] para estudantes de [[teacher-education|formação de professores]]; [[human-centered-ai-teacher-educators-2026|Baran et al.]] usam DBR ao longo de 2023–2025 para projetar aprendizagem profissional para [[ai-literacy|letramento crítico em IA]] fundamentada em princípios de IA Centrada no Humano.
- **Projetando padrões [[governance|institucionais]].** [[crompton-faculty-technology-integration-standards-2026|Crompton et al.]] usam DBR ao longo de dois macrociclos iterativos e 114 participantes para desenvolver seis padrões de integração tecnológica para docentes.
- **Implementação iterativa de sistemas.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties et al.]] descrevem seis estudos iterativos de DBR (18 meses, 498 participantes) implementando o assistente de IA AIDA da Open University usando uma abordagem de sistemas embarcados.
- **Design de [[scaffolding|suporte]] e intervenção.** O [[critical-thinking-genai-scaffolding|suporte ao pensamento crítico com GenAI]] e outros estudos de desenvolvimento de intervenções usam DBR para projetar e refinar suportes baseados em IA.
- **Design de [[curriculum-design|currículo]] guiado por jovens e especialistas.** [[science-integrated-ai-literacy-curriculum-dbr-2026|Moore et al. (2026)]] usam um processo de DBR de dois anos com um conselho consultivo de jovens e especialistas em IA para projetar um currículo de [[ai-literacy|letramento em IA]]/ML integrado à ciência para o ensino médio, refinando o design ao longo de turmas e medindo ganhos de conhecimento em ML — um exemplo de DBR como codesign participativo que integra a voz dos jovens ao ciclo de design.
- **Correfinamento iterativo de rubricas como DBR.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] exemplificam o caráter de refinamento iterativo da DBR aplicado ao próprio instrumento de avaliação: eles trataram a rubrica como um artefato de design revisável e ciclaram por correfinamento com um [[llm|LLM]] — esclarecendo descritores de desempenho e aceitando explicitamente indicadores implícitos de aprendizagem — o que elevou a concordância LLM–humano em 80 pôsteres de design de estudantes de 54,75% para 81,25% (Alfa de Cronbach 0,393 → 0,798). O estudo posiciona a rubrica como uma interface mediadora entre a intenção pedagógica humana e a inferência da máquina, e seu [[prompt-engineering|prompting]] ciente de papel (instrutor, revisor por pares, revisor de subsídios) mostra como escolhas de design moldam a saída avaliativa — uma demonstração ao estilo DBR de que o instrumento de avaliação, não apenas a intervenção, é um objeto de design.
- **Codesignando letramento em IA na primeira infância.** [[play-ai-pre-k-kindergarten-ai-literacy-2026|Lee (2026)]] usa DBR para codesenhar, pilotar e refinar o currículo Play With AI (PL-AI) ao longo de ciclos iterativos com duas professoras de pré-escola e duas de jardim de infância, recorrendo a surveys com professores, 32 horas de vídeo em sala de aula, notas de campo e transcrições de reuniões de design. O estudo documenta como a DBR apoia o refinamento iterativo de atividades de letramento em IA adequadas ao desenvolvimento e produz princípios de design transferíveis (brincadeira [[embodied-learning|incorporada]], programação tangível, diálogo guiado, codesign com professores).
- **A revisão por especialistas como evidência de refinamento — e uma declaração honesta de escopo.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong et al. (2026)]] submetem seu currículo inicial de robótica em quatro trilhas a cinco especialistas que o avaliam em oito dimensões, e então revisam em resposta: a implementação independente de PPO passa a uma extensão e um pré-requisito de Python é adicionado depois que quatro de cinco especialistas apontam carga cognitiva. A dispersão motiva as revisões tanto quanto as médias — o contexto motivacional teve média 4,00 com DP = 1,73 e uma avaliação isolada de 1/5 —, e os autores declaram abertamente que o framework revisado permanece não avaliado, pendente de dados de estudantes.
- **Triangulação, e o limite que ela não pode cruzar.** [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al. (2026)]] rodam um modelo de rotação de papéis por cinco fases de DBR — análise do problema, design pedagógico, implementação, avaliação, refinamento — ao longo de oito semanas com 62 participantes, triangulando diários reflexivos, entrevistas, notas observacionais e produtos gerados por estudantes com verificação pelos participantes. A lição de design está no que os autores reivindicam para ele: sem medida de competência pré-pós e sem grupo de comparação, eles apresentam a evidência como engajamento durante a intervenção, e não como ganhos de competência demonstrados, que é exatamente a fronteira que um design de DBR multifonte pode e não pode cruzar.

## Forças e limitações

- **Forças:** alta validade ecológica e relevância prática; produz tanto artefatos utilizáveis quanto teoria; responsivo à complexidade das salas de aula reais e das ferramentas de IA em evolução; bem adequado a desenvolver um modelo e refiná-lo com base em evidência autêntica de implementação; captura como uma intervenção realmente funciona (ou falha) na prática.
- **Limitações:** validade interna fraca (poucos ou nenhum grupo de controle); achados ligados ao contexto e difíceis de generalizar; cronogramas longos; difícil isolar qual elemento de design causou um resultado — a DBR demonstra viabilidade e melhora, mas não pode atribuir ganhos de aprendizagem a um mecanismo específico.

A DBR troca o controle causal dos [[rct|experimentos]] por autenticidade ecológica e refinamento iterativo: sua evidência é mais forte como prova de conceito e orientação de design do que como eficácia causal. Ler ganhos de aprendizagem de DBR exige as mesmas [[limitations-in-aied-research|precauções]] de outros designs — sem uma medida de resultado controlada e sem assistência, os ganhos podem refletir o mesmo confundidor de desempenho inflado pela IA documentado em [[learning-gains|ganhos de aprendizagem]].

## Relação com outros métodos

A DBR é o método característico das [[learning-sciences|ciências da aprendizagem]] — o campo interdisciplinar que estuda a aprendizagem e o design de ambientes de aprendizagem, e que trata a construção de uma intervenção e seu estudo como uma atividade única em vez de duas. Ela é complementar, e não rival, a outros métodos de pesquisa (veja [[research-methods-aied]] para o panorama completo). Onde os [[rct|experimentos]] estabelecem causalidade e as pesquisas [[quantitative-research|quantitativas]] estabelecem amplitude, a DBR estabelece *viabilidade e conhecimento de design* — se uma intervenção pode ser construída para funcionar na prática autêntica e quais princípios de design a sustentam. Ela frequentemente se emparelha com a [[usability-research|avaliação de usabilidade]] (para refinar a interface) e com [[qualitative-research|métodos qualitativos]] (para entender como os aprendizes vivenciam a intervenção). Um programa maduro de DBR tipicamente culmina em um [[rct|ensaio de eficácia]] ou estudo de [[educational-measurement|medição]] que testa os efeitos causais da intervenção desenvolvida em escala.

## Conceitos conectados

- [[research-methods-aied]]
- [[rct]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[usability-research]]
- [[learning-design]]
- [[educational-measurement]]
- [[learning-gains]]
- [[limitations-in-aied-research]]
- [[theory-development-aied]]
- [[learning-sciences]]

## Artigos conectados

- [[ai-assisted-collaborative-learning-model-dbr]] — DBR for an AI-Assisted Collaborative Learning Model
- [[genai-literacy-training-teacher-education-dbr-2026]] — DBR for AI-literacy training in teacher education
- [[crompton-faculty-technology-integration-standards-2026]] — DBR for faculty technology-integration standards
- [[human-centered-ai-teacher-educators-2026]] — Human-centered AI for teacher educators (DBR)
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — Six DBR studies implementing AIDA at the Open University
- [[critical-thinking-genai-scaffolding]] — DBR for GenAI critical-thinking scaffolding
- [[science-integrated-ai-literacy-curriculum-dbr-2026]] — DBR for a science-integrated AI literacy curriculum (Moore et al. 2026)
- [[play-ai-pre-k-kindergarten-ai-literacy-2026]] — Play With AI (PL-AI): play-centered AI literacy curriculum for pre-K and kindergarten (Lee 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
