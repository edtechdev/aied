---
connected_resources: [drawsplat]
title: IA Multimodal
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
translation_of: concepts/multimodal
source_updated: "2026-10-27T07:23:49-04:00"
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

> **A IA multimodal** — [[ai-technologies|sistemas de IA]] que processam, entendem ou geram conteúdo por meio de múltiplas modalidades — texto, imagens, áudio, vídeo e dados estruturados — e as questões educacionais que esses sistemas levantam. Na [[ai-education|IA na educação]], a IA multimodal aparece em três papéis distintos: como o *conteúdo de aprendizagem* que os aprendizes criam e com o qual se engajam ([[multimodal-learning-genai|aprendizagem multimodal]]), como a *fronteira de capacidade* dos sistemas de tutoria que precisam interpretar diagramas e gráficos ([[syal-multimodal-dialogue-stem-2026|tutoria multimodal]]), e como o *sinal de avaliação* usado para avaliar a compreensão ([[multimodal-item-parameter-estimation-2026|medição multimodal]]).

## Questões a considerar

- Pense em um gráfico, diagrama de forças ou esquema que você já teve dificuldade de explicar em palavras. O que essa experiência sugere sobre os limites de um [[intelligent-tutoring|tutor de IA]] apenas de texto tentando ajudar com problemas ricos em imagens?
- Um tutor de [[physics-education|física]] responde problemas baseados em texto ~96% das vezes, mas cai para ~74% em problemas que embutem significado em diagramas. Antes de ler, o que você acha que causa essa "interferência multimodal" — e consegue pensar em uma correção que não envolva retreinar o modelo?
- Você provavelmente já gerou tanto texto quanto imagens com ferramentas de IA. Você descobriu que "[[prompt-engineering|promptar]] para figuras" difere de promptar para texto? Que habilidades os estudantes podem precisar para traduzir uma ideia abstrata em um prompt visual preciso?
- A IA multimodal pode corrigir ensaios, gerar feedback com narração em áudio e até reconstruir estatísticas de itens de exame a partir de itens de imagem e texto. O que a mudança de sinal de avaliação apenas de texto para multimodal sinaliza (ou arrisca) para a [[bias-mitigation|equidade]] e a validade?
- Como o fato de que o apoio da IA é menos confiável precisamente nos problemas ricos em diagramas que constroem a compreensão profunda de [[stem-education|STEM]] poderia criar uma lacuna de [[equity-in-ai-education|equidade]] entre os aprendizes? Quem é mais afetado?
- Os sistemas multimodais podem traduzir texto para áudio ou visuais para apoiar a aprendizagem inclusiva, mas também habilitam sensoriamento fino da sala de aula. Onde fica a linha entre acesso multimodal útil e vigilância?

## Introdução

A multimodalidade na IA refere-se à capacidade de trabalhar por meio de diferentes formas de representação, e não apenas de texto. Os sistemas modernos de [[generative-ai|IA generativa]] e [[llm|LLM]] aceitam e produzem cada vez mais imagens, áudio e vídeo, além de texto, abrindo novas possibilidades e novos riscos para a educação. Fundamentada na teoria da semiótica social, que sustenta que o significado se faz por meio de modos — não apenas de palavras —, a IA multimodal muda como o [[teacher-role|ensino]], a aprendizagem e a avaliação são projetados e avaliados. ([[multimodal-learning-genai]])

## Três faces da IA multimodal na educação

### 1. Aprendizagem multimodal e criação de conteúdo

A IA multimodal permite aos aprendizes produzir e se engajar com conteúdo por meio de texto, imagem, áudio e vídeo. O guia de um educador para a aprendizagem multimodal com IA generativa posiciona essas ferramentas como uma parceira "ciber-social": elas complementam — mas não podem substituir — a construção humana de significado. ([[multimodal-learning-genai]])

- O [[ai-literacy|letramento em IA]] em contextos multimodais é estratificado: consciência básica de plataformas multimodais, cocriação intermediária e [[critical-thinking|avaliação crítica]] das saídas, e design avançado de atividades e avaliações multimodais. ([[multimodal-learning-genai]])
- O **prompting multimodal** é ele mesmo uma prática epistêmica exigente. Estudantes que promptam para imagens, bem como para texto, descobrem que "a literacia de prompt é diferente entre promptar para texto e promptar para figuras" — traduzir significado abstrato em prompts multimodais legíveis por máquina exige um vocabulário visual preciso e expõe limitações e viés do sistema. ([[multimodal-prompting-ai-literacy]])
- A **avaliação multimodal** desloca-se dos ensaios para artefatos que combinam texto, imagem, áudio e vídeo, com educadores usando a IA para [[scaffolding|dar suporte]] à criação e ao feedback, em vez de substituir a própria produção do aprendiz. ([[multimodal-learning-genai]])
- **A escolha da modalidade é um julgamento educacional, e não um recipiente.** [[elkington-human-centred-assessment-value-2026|Elkington (2026)]] argumenta que escolher entre formatos escrito, oral, digital e multimodal decide o que se torna possível para quem aprende e visível para quem avalia, e conta a escolha controlada entre modalidades como uma restrição generativa, e não como um detalhe administrativo.
- **A composição multimodal do aprendiz como suporte ao pensamento crítico carrega um trade-off.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] mostram que fazer estudantes do fundamental 2 transformarem narrativas escritas em imagens e vídeos curtos gerados por IA apoiou ganhos sustentados em interpretação, análise, avaliação e explicação — mas não em inferência. Como os visuais tornaram explícito o significado da história, os estudantes relataram menor necessidade de inferir significado implícito do texto sozinho; a colaboração entre pares, e não a ferramenta multimodal, restaurou as ocasiões de inferência. O valor da IA multimodal como parceira na construção de significado é, portanto, específico por dimensão e depende de [[learning-design|design instrucional]] que reintroduza deliberadamente o trabalho inferencial e [[self-regulated-learning|autorregulador]] que a externalização pode cortar.
- **A [[writing-education|composição]] multimodal do aprendiz como letramento crítico em IA.** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss et al. (2026)]] analisam anúncios de serviço público em vídeo de 90 segundos a 3 minutos de 22 estudantes do décimo primeiro ano sobre questões de [[ethics|ética]] em IA escolhidas por eles mesmos — vigilância por meio de laptops regulados pela escola e "passes de corredor" eletrônicos, [[privacy|consentimento informado]] e acusação algorítmica punitiva — como [[ai-literacy|letramento crítico em IA]] encenado por meio da composição em imagem em movimento, som, texto e os próprios corpos dos estudantes. Ao longo dos sete filmes, o dano foi retratado como emergente do entrelaçamento humano–máquina em vez de da ferramenta sozinha (um "perseguidor de IA" antropomorfizado foi interpretado por um ator humano em três de sete), e 15 de 18 respostas de fim de unidade disseram que compor mudou sua compreensão da ética em IA. Os autores argumentam que os produtos multimodais tanto *demonstram* quanto *comunicam* competência crítica — artefatos produtivos, reflexões e discurso cívico podem servir como evidência de [[assessment|avaliação]] que a literacia apenas de texto perde estruturalmente em escala.

### 2. A tutoria multimodal e a fronteira de capacidade

Quando tutores baseados em LLM precisam resolver problemas que embutem significado em gráficos, diagramas de forças, esquemas ou tabelas, sua acurácia degrada acentuadamente — o **Efeito de Interferência Multimodal**. ([[syal-multimodal-dialogue-stem-2026]])

- Em problemas de física da OpenStax, a acurácia apenas de texto de ~96% cai para **~74%** em problemas ricos em imagens, de forma consistente entre famílias de modelos. ([[syal-multimodal-dialogue-stem-2026]])
- **Erros de Processamento Visual** — falhas em extrair informação de gráficos ou diagramas — dominam a taxonomia de erros e são o modo de falha mais corrigível.
- Uma intervenção simples de diálogo estruturado (fazer o modelo descrever o que vê, corrigir apenas *desleituras observáveis* sem entregar a física, e então repromptar) restaura a acurácia para **~95%** com zero retreinamento. ([[syal-multimodal-dialogue-stem-2026]])
- Essa é uma **preocupação de equidade**: estudantes trabalhando em problemas ricos em imagens — precisamente os problemas que constroem a compreensão conceitual profunda em STEM — atualmente recebem apoio de IA menos confiável do que os que trabalham em exercícios apenas de texto.
- **Construir um auxílio visual é mais difícil do que ler um.** No GeoVAD-Bench, fornecer um diagrama auxiliar de especialista elevou a acurácia (+3,3 a +7,0 pontos), mas deixar os modelos construírem sua própria linha auxiliar ampliou a lacuna em 10,0 a 13,5 pontos — dois modelos pontuaram pior do que sem nenhum raciocínio visual ([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]).
- **A fronteira é um perfil, não um nível — e a imagem artística fica fora da região que os modelos tratam bem.** O [[muse-vlm-artistic-image-benchmark-2026|MUSE (Zhu et al., 2026)]] avalia 30 VLMs abertos e proprietários em 12 tarefas sobre 1.174 obras de arte encomendadas, e a dispersão de capacidade entre dimensões é mais ampla do que qualquer escore agregado sugere: a classificação de cena é quase madura (23 de 30 modelos acima de 75,0, mediana 81,0), enquanto a detecção de emoção não passa de 39,5 e as tarefas abertas que exigem que os modelos *articulem* sua evidência pontuam 50,90 (identificação de pista visual) e 49,18 (inferência de causa de emoção) em similaridade semântica. O raciocínio composicional e dependente de ponto de vista falha mais duramente — onde a verdade de base não especifica nenhuma relação lateral ou vertical definida, 90,0% e 73,3% dos modelos afirmam uma de qualquer forma, apenas 43,3% posicionam a menina corretamente em profundidade, e nenhum modelo resolve as três dimensões de um único item. As falhas também se encadeiam: um personagem mal fundamentado é então justificado com uma justificativa fluida construída a partir de semântica visual próxima (borboletas, pássaros), que é o resultado mais perigoso na tutoria porque a explicação parece competente. Para a [[language-learning|aprendizagem de línguas]] baseada em imagem, isso argumenta pela validação em nível de dimensão sobre a imagem que um curso realmente usa, em vez de importar um escore multimodal geral, e por estender o ponto de verificação de fundamentação descrito abaixo — descrever o que é visto, e onde, antes de raciocinar a partir disso — a conteúdo artístico [[situated-learning|situado]] ([[muse-vlm-artistic-image-benchmark-2026]]).

A implicação prática de design é um **ponto de verificação de fundamentação visual** na tutoria multimodal: um passo deliberado em que o sistema descreve o que vê antes de tentar uma solução, dando ao estudante ou a um supervisor humano a chance de corrigir erros perceptuais. ([[syal-multimodal-dialogue-stem-2026]])

[[ai-assisted-physics-lab-report-assessment-2026|Abreu et al. (2026)]] acrescentam uma restrição prévia: uma equação, gráfico ou unidade pode aparecer em um relatório e nunca ser recuperada do documento processado, de modo que uma discordância com o instrutor pode ser uma falha de extração em vez de uma falha de raciocínio — o que torna o formato de submissão parte do design da avaliação.

### 3. Avaliação e medição multimodal

A IA multimodal amplia tanto o *conteúdo* da avaliação quanto o *sinal* usado para pontuá-la.

- **Sistemas de feedback multimodal** integram texto estruturado, referências a slides e narração em áudio contínua. Em um estudo, o [[ai-feedback-quality|feedback multimodal da IA]] igualou o feedback do educador na aprendizagem e o *superou significativamente* nas percepções dos estudantes. ([[multimodal-ai-feedback-learning]])
- **Estimação de resposta a item multimodal** usa LLMs multimodais ajustados para reconstruir curvas características de item (IRT / 3PL) diretamente a partir de probabilidades previstas de opções em itens de imagem e texto, conectando a IA multimodal à [[educational-measurement|medição educacional]] e à [[item-response-theory|teoria de resposta ao item]]. ([[multimodal-item-parameter-estimation-2026]])
- **A avaliação de modelos de linguagem-vision educacionais** e a [[mllm-scientific-visualization-literacy|literacia de LLM multimodal]] estendem o kit de avaliação do campo ao raciocínio multimodal e à [[visualization|visualização]]. ([[drawedumath-vlm-struggling-students-2026]]) ([[mllm-scientific-visualization-literacy]])
- **A correção multimodal de [[chemistry-education|química]] manuscrita expõe uma fronteira de capacidade dependente de formato:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] corrigiram página por página uma final manuscrita de química geral de 296 estudantes contra imagens de rubrica com um LLM multimodal de raciocínio, pontuando respostas textuais e equações de reação química de forma confiável (maior F1 normado), mas desenhos e gráficos *pior do que o acaso* — grades de fundo distraem visualmente a visão da IA, e diagramas científicos/estruturas químicas seguem difíceis de interpretar — reforçando que a visão da IA multimodal não é robusta a trabalho pesado em representação e é melhor implantada com [[human-in-the-loop-ai|deferimento humano]] dos itens gráficos ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **O reconhecimento de construto e o juízo comparativo são habilidades separáveis.** [[cfes-p24-multimodal-slide-auditing-2026|Ma et al. (2026)]] expressam seis princípios de aprendizagem multimídia como edições reversíveis de slides mais controles falsos de equivalência visual, e descobrem que ambos os modelos recuperaram toda operação, princípio e reparo (8/8), enquanto a calibragem de severidade falhou inteiramente (0/8) — um escore composto esconderia qual camada falha.
- **Ganhos de equidade podem ser validados à existência.** Um estimador de atenção multimodal superou uma baseline apenas visual de forma modesta, e seu regularizador de lacuna de MAE voltado a gênero cortou a lacuna de validação de 0,02 a 0,005, mas aumentou a lacuna e o erro do pior grupo em sujeitos retidos — de modo que a validação repetida, ciente de subgrupo e em nível de sujeito é exigida antes da implantação ([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).
- **A correção multimodal pode reproduzir um resultado de seleção mesmo onde a pontuação em nível de item fica atrás.** Ao corrigir 10.364 páginas manuscritas de Olimpíada e universidade, um LLM igualou os totais dos examinadores a r = 0,93–0,96 e colocou os mesmos cinco estudantes na equipe da Olimpíada, mas a concordância por partes alcançou apenas 70%: evidência de segundo leitor, não um corretor de registro ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **A geração de diagramas é uma fronteira de capacidade, não uma resolvida.** Em um benchmark de física de 15.246 questões que pontua a saída multimodal, sintetizar ou editar diagramas de física estruturados provou ser mais difícil do que responder, e os modelos líderes ficaram abaixo de 70% de domínio estrito — evidência de que a *produção* visual fica atrás da *compreensão* visual ([[omniphys-multimodal-physics-benchmark-2026|Chen et al., 2026]]).

## IA multimodal para aprendizagem de línguas e acessível

Os sistemas multimodais também ampliam o acesso e a [[personalized-learning|personalização]]. Ferramentas de aprendizagem de [[video-education|vídeo]]-vídeo guiadas por IA adaptam a velocidade de reprodução, produzem resumos de vídeo multimodais e apoiam a prática de pronúncia. ([[ai-guided-learning-audiovideo-2026]]) Grafos de conhecimento multimodais raciocinam sobre imagens e texto para tarefas educacionais, ([[multimodal-knowledge-graph-educational-reasoning]]) e representações multimodais melhoram o [[inclusive-learning|aprendizado inclusivo]] traduzindo informação entre modos (p. ex., texto para áudio ou visual). As aplicações de domínio incluem correção e diagnóstico de matemática manuscrita, ([[llm-cognitive-diagnosis-handwritten-math]]) tutoria [[affective-tutoring|afetiva]] com sinais multimodais, ([[multimodal-affective-its-presentation]]) ([[kar-mathbuddy-affective-math-tutoring-2025]]) aprendizagem de texto para imagem em campos especializados, ([[nuclear-diffusion-text-to-image-learning-2026]]) e sensoriamento de sala de aula multimodal ciente de privacidade. ([[privacy-aware-classroom-incident-recognition-2026]]) Bird (2026) demonstra uma forma interna ao texto de multimodalidade: fundindo um transformer ELECTRA ajustado com análise de features de linguística computacional para classificar literatura inglesa por Key Stage do Reino Unido, onde o modelo fundido (F1 0,996) superou de longe toda baseline unimodal — evidência de que combinar formas de representação, mesmo dentro do texto, pode superar abordagens de modelo único.

## Desafios e implicações de design

1. **Feche a lacuna multimodal.** Os sistemas de tutoria multimodal deveriam incluir fundamentação visual e suportes de diálogo estruturado, em vez de assumir que as capacidades de visão são robustas. ([[syal-multimodal-dialogue-stem-2026]])
2. **Trate o prompting multimodal como uma habilidade ensinável.** Os currículos de letramento em IA devem abordar prompting específico por modalidade, coerência entre modos e avaliação crítica das saídas multimodais. ([[multimodal-prompting-ai-literacy]])
3. **Preserve a construção humana de significado.** A IA multimodal deveria ampliar, e não substituir, a própria construção e avaliação de significado dos aprendizes por meio dos modos. ([[multimodal-learning-genai]])
4. **Estenda a avaliação à validade multimodal.** A [[assessment-validity|validade da avaliação]], o viés e a confiabilidade devem ser examinados quando a IA pontua ou gera artefatos multimodais. ([[multimodal-item-parameter-estimation-2026]]) ([[ai-ed-evaluation]])
5. **Fique atento à equidade e à privacidade.** Tanto o apoio não confiável em problemas ricos em imagens quanto as demandas de dados do sensoriamento multimodal carregam implicações de equidade e privacidade. ([[syal-multimodal-dialogue-stem-2026]]) ([[privacy-aware-classroom-incident-recognition-2026]])
6. **Ajuste o pipeline ao conteúdo.** O LLM multimodal de um assistente de laboratório de cibersegurança lidou melhor com slides visuais densos, enquanto um pipeline OCR-mais-LLM entregou valor instrucional comparável em slides centrados em texto a custo computacional significativamente menor. ([[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel et al. (2025)]])

## Ideias equivocadas comuns

**"Um modelo multimodal resolve problemas multimodais."** A acurácia degrada acentuadamente quando o significado é carregado pela figura, e não pelo texto. Um tutor de [[physics-education|física]] responde problemas baseados em texto cerca de **96%** das vezes, mas cai para cerca de **74%** em problemas que embutem significado em diagramas — o **Efeito de Interferência Multimodal**. Vinte e dois pontos de capacidade desaparecem exatamente onde vive o conteúdo disciplinar.

**"Acrescentar uma imagem ao prompt resolve o problema dos diagramas."** A modalidade de entrada não é o gargalo; a interferência é. Um modelo que recebe o diagrama e ainda assim raciocina a partir da prosa em volta recebeu a informação e não a usou, e é por isso que a falha é invisível a menos que alguém compare os dois formatos de problema.

**"A capacidade multimodal é uma única escada, então o melhor modelo no geral é o melhor para a tarefa rica em imagens."** A capacidade é específica por tarefa, e um modelo que lidera em benchmarks gerais pode ficar atrás em diagramas de forças. Para disciplinas ricas em imagens, o teste relevante é aquele com o significado embutido na figura.

**"Os limites da tutoria apenas de texto são um incômodo, e não um problema curricular."** Em disciplinas onde o diagrama *é* o problema — física, química, geometria, engenharia, medicina —, a fronteira de competência de um tutor apenas de texto cai sobre o conteúdo avaliado, e não nas suas margens.

## Conceitos conectados

- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — Guarda-chuva: tecnologias e técnicas de IA (modelos, treinamento de LLM, robótica, RAG, agentiva)
- [[virtual-and-augmented-reality]] — gesto, voz e entrada espacial como canais de aprendizagem
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]

## Artigos conectados

- [[elkington-human-centred-assessment-value-2026]] — Avaliação centrada no humano, assemblages e restrições generativas (Elkington 2026)
- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — Video PSA composition on AI ethics as critical AI literacy pedagogy (Burriss et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Fairness-Aware Multimodal Transformer Modeling for Real-Time Student Attention Estimation
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — VLM performance on handwritten student math work (DrawEduMath, Lucy et al. 2026)
- [[multimodal-learning-genai]] — Educator's guide to multimodal learning with generative AI (MMLD-AI model)
- [[syal-multimodal-dialogue-stem-2026]] — The Multimodal Interference Effect and structured-dialogue recovery in STEM
- [[multimodal-ai-feedback-learning]] — Multimodal AI feedback matches educators on learning, exceeds on perceptions
- [[multimodal-prompting-ai-literacy]] — Students' multimodal prompting as epistemic work in AI literacy
- [[multimodal-item-parameter-estimation-2026]] — Estimating IRT item parameters with multimodal LLMs
- [[ai-guided-learning-audiovideo-2026]] — AI-guided audio-video learning support
- [[multimodal-knowledge-graph-educational-reasoning]] — Multimodal knowledge graphs for educational reasoning
- [[mllm-scientific-visualization-literacy]] — Multimodal LLM literacy for scientific visualization
- [[multimodal-affective-its-presentation]] — Multimodal signals in affective intelligent tutoring
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Affective multimodal math tutoring
- [[llm-cognitive-diagnosis-handwritten-math]] — LLM cognitive diagnosis of handwritten math
- [[nuclear-diffusion-text-to-image-learning-2026]] — Text-to-image learning in nuclear engineering education
- [[privacy-aware-classroom-incident-recognition-2026]] — Privacy-aware multimodal classroom sensing
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — Multimodal OCR instruction in cybersecurity education
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Benchmarking Multimodal LLMs for Slide Auditing
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Multimodal AI composing and critical thinking in primary writing (Lu et al. 2027)
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Beyond Generation and Accuracy: Diagnosing and Enhancing Visual Chain-of-Thought for Geometry Problem Solving
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 12 tasks over 1,174 artworks show VLM capability as a dimension-specific profile, weakest in affective interpretation and viewpoint-dependent spatial reasoning (Zhu et al. 2026)
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
