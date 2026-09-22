---
title: IA na educação
created: "2026-09-22T14:40:54-04:00"
updated: "2026-09-22T14:40:54-04:00"
type: concept
foundations: [ai-education, ai-literacy, teacher-role]
technology: [generative-ai, intelligent-tutoring, llm]
assessment: [assessment]
ethics: [equity-in-ai-education]
audience: [instructors, learners, faculty developers, administrators]
level: [higher ed, k 12]
connected_faqs: [top-10-findings-ai-education-instructors]
confidence: high
institutions: [educational-policy-ai]
translation_of: concepts/ai-education
source_updated: "2026-09-22T03:10:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

# IA na educação

> **IA na educação (AIED)**: o campo amplo e interdisciplinar que aplica a inteligência artificial ao ensino e à aprendizagem, e estuda seu desenho, seu uso, sua avaliação e suas consequências. Como conceito guarda-chuva da base de conhecimento, a IA na educação abrange a **IA para a educação** (usar a IA para melhorar o ensino e a avaliação) e a **educação sobre IA** (desenvolver o letramento em IA e a compreensão crítica). Ela fica na interseção da tecnologia educacional, das [[learning-sciences|ciências da aprendizagem]] (o campo de pesquisa empírica que pergunta se o estudante mudou, e não apenas se uma ferramenta funcionou), da ciência da computação, da [[educational-policy-ai|política educacional]], da [[ethics|ética]] e da [[equity-in-ai-education|equidade]]. Esta página é uma introdução ao campo e um mapa de todos os conceitos que a base de conhecimento cobre.

## Perguntas para refletir

- "IA na educação" abrange duas direções: a IA para a educação (usar a IA para melhorar o ensino) e a educação sobre IA (construir letramento e compreensão crítica). Qual delas é mais familiar para você, e qual você tende a deixar de lado?
- A história do campo é enquadrada como uma tensão recorrente entre o controle e a autonomia do estudante. Ao observar as ferramentas de IA sendo adotadas, onde você percebe essa mesma tensão se desenrolando hoje?
- A IA na educação fica na interseção entre tecnologia, ciência da aprendizagem, política, ética e equidade. Quais dessas lentes você aplica naturalmente ao avaliar uma ferramenta de IA, e quais você provavelmente esquece?
- Esta base de conhecimento organiza o campo em linhas temáticas: pedagogia, teorias de aprendizagem, tecnologias, disciplinas, avaliação, feedback, partes interessadas e governança. Se você fosse mapear seu próprio uso de IA, em qual dessas linhas você se encontraria?
- A AIED inclui ensinar os estudantes a usar a IA de forma crítica como um objetivo em si. No seu contexto, a IA é tratada mais como um assunto a ser ensinado ou como uma ferramenta a ser usada, e esse equilíbrio reflete o que os estudantes realmente precisam?
- Os estudantes podem aprender letramento em IA usando a IA de forma crítica, e não apenas aprendendo sobre ela. Como o uso prático e crítico pode construir uma compreensão que a instrução passiva não constrói?

## Introdução

A IA na educação é o guarda-chuva que todas as outras páginas de conceito definem coletivamente. A base de conhecimento organiza o campo nas principais linhas temáticas abaixo, cada uma ligando às páginas de conceito relevantes.

Uma perspectiva [[history-of-aied|histórica]] de referência, **[[mishra-control-vs-agency-history-2025|Mishra et al.]]**, traça a trajetória da AIED desde a cibernética e a conferência de Dartmouth de 1956, passando pelos [[intelligent-tutoring|tutores cognitivos]] e pelo [[constructivist|construcionismo]] de Papert, e argumenta que os debates atuais sobre [[generative-ai|IA generativa]] reencenam a tensão fundacional do campo entre controle e [[agency|autonomia]].

## Como a base de conhecimento está organizada: as páginas guarda-chuva

A cobertura conceitual da base de conhecimento é ancorada por várias **páginas guarda-chuva** que agrupam conceitos relacionados em linhas navegáveis. Elas são bons pontos de entrada para explorar o campo:

- **IA na educação**: esta página, a visão geral do campo e o mapa de toda a cobertura.
- **[[ai-literacy|Letramento em IA]]**: o guarda-chuva para compreender, usar e avaliar criticamente a IA, abrangendo [[prompt-engineering|engenharia de prompts]], [[critical-thinking|pensamento crítico]], [[ethics|ética da IA]] e [[reducing-ai-misuse|uso responsável]]. Ao lado dele, [[human-ai-collaboration|colaboração humano-IA]] e [[agentic-ai|IA agêntica]] enquadram como pessoas e IA trabalham juntas.
- **[[pedagogy|Pedagogias e estratégias de ensino]]**: o guarda-chuva de como o ensino acontece: os métodos e estratégias de ensino dentro dos quais a IA opera ([[active-learning|aprendizagem ativa]], [[collaborative-learning|colaborativa]], [[project-based-learning|baseada em projetos]], [[problem-based-learning|baseada em problemas]], [[experiential-learning|experiencial]], [[game-based-learning|baseada em jogos]], [[socratic-method|socrática]], [[scaffolding|andaimento]], e outros), incluindo o contexto distinto do [[online-teaching-and-learning|ensino e aprendizagem on-line]].
- **[[learning-theories|Teorias de aprendizagem]]**: o guarda-chuva de como a aprendizagem acontece: os referenciais teóricos ([[behaviorism|behaviorismo]], [[cognitive-psychology|cognitivismo]], [[constructivist|construtivismo]], [[sociocultural-learning|sociocultural]], cognitivo, [[motivation|motivacional]]) que moldam o desenho e a avaliação da IA.
- **[[ai-technologies|Tecnologias]]**: o guarda-chuva da camada técnica: os sistemas de IA ([[llm|LLMs]], [[generative-ai|IA generativa]], [[multimodal|multimodais]], [[educational-robotics|robótica]]) e as técnicas ([[rag|RAG]], [[prompt-engineering|engenharia de prompts]], [[reinforcement-learning|aprendizagem por reforço]], [[pedagogical-llm-training|treinamento de modelos]], [[agentic-ai|orquestração agêntica]]) que sustentam a AIED. A família da modelagem do estudante ([[knowledge-tracing|rastreamento de conhecimento]], [[cognitive-diagnosis|diagnóstico cognitivo]], [[simulating-students|simulação de estudantes]] e os sistemas que consomem esses modelos ([[intelligent-tutoring|tutoria inteligente]], [[adaptive-learning|aprendizagem adaptativa]], [[personalized-learning|aprendizagem personalizada]])) é agrupada sob o guarda-chuva [[student-modeling|Modelagem do estudante e instrução adaptativa]], dentro dessa linha técnica.
- **[[discipline-specific-aied|IA nas disciplinas]]**: o guarda-chuva de como a IA é aplicada nas áreas do conhecimento ([[math-education|matemática]], [[physics-education|física]], [[language-learning|aprendizagem de línguas]], [[cs-education|ciência da computação]], [[writing-education|escrita]], [[stem-education|STEM]], [[engineering-education|engenharia]], [[business-education|negócios]], [[teacher-education|formação de professores]], [[medical-education|profissões da saúde]], e outras) e, para além das disciplinas acadêmicas, a linha profissional e aplicada, que avalia a prática demonstrada em vez da correção ([[nursing-education|enfermagem]], [[information-technology|tecnologia da informação]], [[vocational-education|educação profissional e tecnológica]], [[design-education|ensino de design]]), e os níveis de ensino ([[k-12|K-12]], [[higher-ed|ensino superior]], [[adult-learning|aprendizagem de adultos]]).
- **[[assessment|Avaliação]]** (com as linhas [[formative-assessment|formativa]], [[summative-assessment|somativa]], [[authentic-assessment|autêntica]] e [[automated-assessment|automatizada]]): o guarda-chuva de como a IA avalia os estudantes e reformula a validade e a integridade da avaliação.
- **[[feedback|Feedback]]**: o guarda-chuva de como o feedback é gerado, entregue e usado: o ciclo de feedback, a [[ai-feedback-quality|qualidade do feedback de IA]], o [[feedback-literacy|letramento em feedback]] e seus contextos de avaliação ([[formative-assessment|formativa]], [[peer-assessment|entre pares]], [[automated-assessment|automatizada]]).
- **[[stakeholders|Partes interessadas na educação com IA]]**: o guarda-chuva de quem são os atores: estudantes, [[teacher-role|professores]], [[learning-design|designers de aprendizagem]], [[administrator|administradores]] e [[educational-policy-ai|formuladores de políticas]].
- **[[ai-ed-evaluation|Avaliação de IA na educação]]** e **[[research-methods-aied|métodos de pesquisa]]**: os guarda-chuvas de como sabemos se a IA funciona: estudos de eficácia, [[benchmark|benchmarks]], [[rct|ensaios controlados randomizados]], [[meta-analysis-systematic-review|meta-análise]] e [[learning-gains|ganhos de aprendizagem]] como a medida de resultado central. Os leitores também devem pesar as [[limitations-in-aied-research|limitações transversais dessa evidência]].
- **[[governance|Governança de IA]]**, **[[educational-policy-ai|política educacional de IA]]** e **[[equity-in-ai-education|equidade]]**: os guarda-chuvas da camada institucional, regulatória e de justiça (veja também [[regulation|regulamentação]] e [[privacy|privacidade]]).

Essas páginas guarda-chuva são linkadas ao longo das seções abaixo; cada linha temática abaixo nomeia tanto seu guarda-chuva quanto os conceitos que a compõem.

## Duas dimensões da IA na educação

A pesquisa em IA na educação abrange duas direções interconectadas:

- **IA para a educação**: usar sistemas de IA para melhorar o ensino, a aprendizagem, a avaliação e a administração. Isso inclui [[intelligent-tutoring|tutoria com IA]], [[adaptive-learning|aprendizagem adaptativa]], [[personalized-learning|aprendizagem personalizada]], [[automated-essay-scoring|correção automática de redações]], [[automated-question-generation|geração automática de questões]], [[automated-assessment|avaliação automatizada]], [[formative-assessment|avaliação formativa]], [[learning-analytics|analítica de aprendizagem]] e [[feedback|ciclos de feedback]].
- **Educação sobre IA**: ensinar estudantes e educadores a compreender, usar e avaliar criticamente a IA. O núcleo é o [[ai-literacy|letramento em IA]], apoiado pela [[prompt-engineering|engenharia de prompts]], pelo [[critical-thinking|pensamento crítico]], pela [[ethics|ética da IA]], pela [[governance|educação em governança]], pelo letramento digital e pelo [[reducing-ai-misuse|uso responsável]].

Essas duas dimensões não são separadas: [[ai-literacy|usar bem a IA]] exige compreendê-la, e ensinar sobre IA se enriquece ao usá-la. Essa [[human-ai-collaboration|colaboração humano-IA]] é um tema central.

## Fundamentos da IA na educação

Os conceitos fundacionais e transversais do campo ancoram a cobertura da base de conhecimento e aparecem primeiro na barra lateral. Eles começam com um grupo de **Essenciais**, os conceitos por onde todo leitor deveria começar: o próprio guarda-chuva, as [[misconceptions|ideias equivocadas sobre IA]], o [[ai-literacy|letramento em IA]], a [[agentic-ai|IA agêntica]], o [[cognitive-offloading|descarregamento cognitivo]], [[framing-ai-use-for-students|como o uso de IA é apresentado aos estudantes]], a [[reducing-ai-misuse|redução do uso indevido de IA]], a [[academic-integrity|integridade acadêmica]], o [[teacher-role|ensino]], o [[learning-design|desenho de aprendizagem]] e o [[educational-development|desenvolvimento educacional]]. A linha **do campo** cobre então [[history-of-aied|a história do campo]], as [[limitations-in-aied-research|limitações transversais da base de evidências]], a [[philosophy-of-ai-in-education|sua filosofia]], o mapa das [[theories-and-frameworks|teorias e frameworks]] e a [[theory-development-aied|construção de teoria]]. Os temas transversais ([[human-ai-collaboration|colaboração humano-IA]], [[agency|autonomia do estudante]], [[learner-identity|identidade do estudante]], [[design-thinking|design thinking]], [[curriculum-design|desenho curricular]], [[critical-thinking|pensamento crítico]] e [[computational-thinking|pensamento computacional]]) atravessam todas as linhas, porque os modelos mentais imprecisos que as pessoas têm sobre a IA estão a montante do [[ai-misuse-learning-harm|uso indevido]] e de uma [[trust-calibration|confiança]] mal calibrada.

## Aprendizagem e ensino

Como a IA apoia o ensino e a aprendizagem é o coração do campo. Os conceitos-chave incluem:

- **Pedagogias centrais:** [[pedagogy|pedagogias e estratégias de ensino]], o guarda-chuva da cobertura da base de conhecimento sobre métodos de ensino, junto com [[active-learning|aprendizagem ativa]], [[collaborative-learning|aprendizagem colaborativa]], [[group-work|trabalho em grupo]], [[project-based-learning|aprendizagem baseada em projetos]], [[problem-based-learning|aprendizagem baseada em problemas]], [[productive-failure|falha produtiva]], [[inquiry-based-learning|aprendizagem baseada em investigação]], [[experiential-learning|aprendizagem experiencial]], [[game-based-learning|aprendizagem baseada em jogos]], [[learning-by-teaching|aprender ensinando]], [[scaffolding|andaimento]], [[socratic-method|o método socrático]], [[critical-pedagogy|pedagogia crítica]], [[pedagogical-partnerships|parcerias pedagógicas]], [[storytelling-in-education|narrativa]], [[learning-design|desenho de aprendizagem]], [[online-teaching-and-learning|ensino e aprendizagem on-line]] e [[video-education|vídeo na educação]].
- **Teorias e processos de aprendizagem:** o guarda-chuva das [[learning-theories|teorias de aprendizagem]] ([[behaviorism|behaviorismo]], [[cognitive-psychology|cognitivismo]], [[constructivist|construtivismo]], [[sociocultural-learning|sociocultural]], [[distributed-cognition|cognição distribuída]], [[situated-learning|aprendizagem situada]], [[embodied-learning|aprendizagem corporificada]], [[community-of-inquiry|comunidade de investigação]]) fica ao lado de processos voltados ao estudante, como [[self-regulated-learning|aprendizagem autorregulada]], [[self-determination-theory|teoria da autodeterminação]], [[motivation|motivação]], [[self-efficacy|autoeficácia]], [[self-directed-learning|aprendizagem autodirigida]], [[metacognition|metacognição]], [[desirable-difficulties|dificuldades desejáveis]], [[transfer-of-learning|transferência de aprendizagem]], [[prior-knowledge|conhecimento prévio]], [[icap-framework|engajamento cognitivo ICAP]], [[refutation-text|texto de refutação]], [[retrieval-spacing-interleaving|recuperação, espaçamento e intercalação]] e [[activity-theory-aied|teoria da atividade]].
- **Engajamento e experiência do estudante:** [[student-engagement|engajamento do estudante]], [[help-seeking|busca de ajuda]], [[social-emotional-learning|aprendizagem socioemocional]], [[well-being|bem-estar]], [[creativity|criatividade]], [[problem-solving|resolução de problemas]], [[mastery-learning|aprendizagem para o domínio]] e [[student-ai-interaction|interação estudante-IA]] moldam como os estudantes de fato encontram a IA e são afetados por ela.

## Tecnologias e técnicas

A página [[ai-technologies|Tecnologias]] é o guarda-chuva da camada técnica:

- **Modelos e técnicas:** [[generative-ai|IA generativa]], [[llm|grandes modelos de linguagem]], [[rag|geração aumentada por recuperação]], [[multimodal|modelos multimodais]], [[educational-nlp|PLN educacional]], [[reinforcement-learning|aprendizagem por reforço]], [[knowledge-graph|grafos de conhecimento]], [[educational-robotics|robôs na educação]], [[conversational-ai|IA conversacional]], [[simulation|simulação]] e [[pedagogical-llm-training|treinamento de LLMs pedagógicos]]. Os métodos subjacentes também importam: a [[machine-learning|aprendizagem de máquina]] é onde esses sistemas são construídos, as [[speech-and-voice-technologies|tecnologias de fala e voz]] sustentam a tutoria falada e a prática de idiomas, a [[visualization|visualização]] cobre painéis e analítica visual para estudantes e professores, e a [[virtual-and-augmented-reality|realidade virtual e aumentada]] abriga práticas imersivas cuja camada visual o modelo agora consegue gerar. Estilos de interação mais recentes também cabem aqui, com destaque para o [[vibe-coding|vibe coding]], o fluxo de trabalho guiado por linguagem natural em que o usuário especifica um programa fazendo prompts a um LLM e julga o comportamento resultante em vez de ler ou editar o código-fonte, o que reposiciona a [[cs-education|programação]] como um ato de expressão e verificação e reduz a barreira para que [[teacher-role|usuários finais]] construam suas próprias ferramentas. Frameworks de profundidade de integração, como o [[samr-model|SAMR]], e teorias de adoção, como o [[technology-acceptance-model|TAM]], classificam quão profundamente a IA é adotada e quanto ela transforma a tarefa.
- **Modelagem do estudante e sistemas adaptativos:** os sistemas técnicos que representam o estudante e se adaptam a ele são agrupados sob o guarda-chuva [[student-modeling|Modelagem do estudante e instrução adaptativa]]: [[knowledge-tracing|rastreamento de conhecimento]], [[cognitive-diagnosis|diagnóstico cognitivo]], [[simulating-students|simulação de estudantes]], [[intelligent-tutoring|tutoria inteligente]], [[adaptive-learning|aprendizagem adaptativa]], [[personalized-learning|aprendizagem personalizada]], [[recommender-systems-and-learning-paths|sistemas de recomendação e trajetórias de aprendizagem]], [[pedagogical-agent|agentes pedagógicos]], [[affective-tutoring|tutoria afetiva]], [[affective-computing|computação afetiva]], [[human-in-the-loop-ai|IA com humano no circuito]] e [[learning-analytics|analítica de aprendizagem]]. Eles ficam na camada técnica porque são os próprios sistemas de IA, distintos das pedagogias que colocam em prática.

## IA nas disciplinas

A IA é aplicada em diversas disciplinas e níveis de ensino. A [[discipline-specific-aied|visão geral da AIED nas disciplinas]] da base de conhecimento mapeia a cobertura por área do conhecimento, ao lado das [[learning-sciences|ciências da aprendizagem]], que não é uma disciplina ensinada, mas o campo de pesquisa transversal que estuda a própria aprendizagem e toma o conteúdo disciplinar como uma variável entre outras:

- **Áreas do conhecimento:** [[math-education|matemática]], [[physics-education|física]], [[chemistry-education|química]], [[biology-education|biologia]], [[cs-education|ciência da computação]], [[engineering-education|engenharia]], [[stem-education|STEM]], [[writing-education|escrita]], [[language-learning|aprendizagem de línguas]], [[english-education|ensino de inglês (EAP/EFL/ESL)]], [[science-education|ensino de ciências]], [[business-education|negócios, economia e gestão]], [[humanities-education|humanidades e ciências sociais]], [[arts-design-and-media-education|ensino de artes, design e mídia]], [[medical-education|medicina e profissões da saúde]], [[legal-education|ensino jurídico]] e as linhas profissionais e aplicadas: [[nursing-education|enfermagem]], [[information-technology|tecnologia da informação]], [[vocational-education|educação profissional e tecnológica]] e [[design-education|ensino de design]].

## Níveis e contextos

A mesma ferramenta de IA encontra contextos muito diferentes, e a base de conhecimento separa o nível de ensino da pedagogia para que os achados não se transfiram silenciosamente de um para o outro: [[k-12|escolas de educação básica]], [[early-childhood-elementary-ai-education|educação infantil e ensino fundamental]], [[higher-ed|ensino superior]], [[adult-learning|aprendizagem de adultos]], [[vocational-education|educação profissional e tecnológica]], [[special-education|educação especial]] e [[teacher-education|formação de professores]]. Conceitos adjacentes ao domínio que atravessam níveis incluem [[universal-design-for-learning|desenho universal para a aprendizagem]], [[neurodiversity|neurodiversidade]], [[multilingual-learning|aprendizagem multilíngue]] e [[social-emotional-learning|aprendizagem socioemocional]].

## Avaliação e mensuração

A IA transforma tanto a forma como avaliamos os estudantes quanto a forma como avaliamos os próprios sistemas de IA:

- **Avaliação e feedback:** [[assessment|avaliação]], [[formative-assessment|avaliação formativa]], [[summative-assessment|somativa]], [[authentic-assessment|autêntica]], [[eportfolio|e-portfólio]], [[feedback|feedback]] e [[feedback-literacy|letramento em feedback]], [[ai-feedback-quality|qualidade do feedback de IA]], [[peer-assessment|avaliação entre pares]], [[automated-assessment|avaliação automatizada]], [[automated-essay-scoring|correção automática de redações]] e [[automated-question-generation|geração automática de questões]]. Como um modelo agora consegue produzir um trabalho finalizado plausível sob demanda, a base de conhecimento coloca em primeiro plano a capacidade que continua sendo do próprio estudante: o [[evaluative-judgment|julgamento avaliativo]], a capacidade de aferir a qualidade do próprio trabalho, do trabalho dos colegas e da produção da IA contra critérios fundamentados. É o construto em torno do qual vários estudos de feedback e de avaliação autêntica convergem (a condição de feedback híbrido superando o feedback direto de IA em um experimento multi-site, a lacuna de sustentabilidade do feedback formativo com IA, e o movimento prático de avaliar as decisões que os estudantes tomam, e não apenas o artefato), e é uma razão central para o redesenho na era da IA passar da [[ai-detection|detecção]] para tarefas cuja integridade sobrevive à inspeção. O [[group-work|trabalho em grupo]] também é avaliado tanto pelo processo quanto pelo produto, quando as equipes precisam negociar de quem e que tipo de engajamento com IA conta como aceitável.
- **Mensuração e validade:** [[assessment-validity|validade da avaliação]], [[psychometrically-aware-ai|IA psicometricamente consciente]], [[educational-measurement|mensuração educacional]], [[item-response-theory|teoria de resposta ao item]], [[self-report-measures|medidas de autorrelato]] (o instrumento por trás de boa parte dessa evidência, e uma limitação recorrente), [[ai-detection|detecção de IA]], [[remote-proctoring|proctoring remoto]] e [[academic-integrity|integridade acadêmica]].

## Métodos de pesquisa e avaliação

Como sabemos se a IA funciona é uma linha temática em si, e a base de conhecimento a trata como tal:

- **Métodos de pesquisa:** [[research-methods-aied|métodos de pesquisa em AIED]] como o guarda-chuva, com abordagens [[qualitative-research|qualitativas]], [[quantitative-research|quantitativas]], [[mixed-methods-research|de métodos mistos]], [[design-based-research|baseadas em design]] e [[usability-research|de usabilidade]], além de [[rct|ensaios controlados randomizados]], [[meta-analysis-systematic-review|meta-análise e revisão sistemática]] e [[network-analysis|análise de redes]].
- **Avaliação de sistemas de IA:** a [[ai-ed-evaluation|avaliação de IA na educação]] e os [[benchmark|benchmarks]] para julgar a capacidade de um sistema, com os [[learning-gains|ganhos de aprendizagem]] como o resultado que importa, e as [[limitations-in-aied-research|limitações transversais]] dessa evidência e [[interpreting-and-applying-aied-research|como ler um único estudo]] como contrapeso cautelar.

## Pessoas

A IA na educação muda os papéis de todas as partes interessadas. A página [[stakeholders|Partes interessadas na educação com IA]] da base de conhecimento é o guarda-chuva que cobre todas elas:

- **Estudantes:** [[student-experience|experiência do estudante]], [[career-development-and-readiness|desenvolvimento e preparação para a carreira]] e [[anxiety-and-stress|ansiedade e estresse com IA]] moldam como os estudantes encontram a IA.
- **Famílias e comunidades:** [[parents-and-families|pais e famílias]] são o público sobre o qual as escolas mais falam a respeito de IA e aquele com menos pesquisa por trás das orientações, então as preocupações deles pertencem ao quadro das partes interessadas, e não fora dele.
- **Professores e referenciais de ensino:** [[teacher-ai-competency|competência em IA do professor]], [[tpack|conhecimento tecnológico, pedagógico e de conteúdo (TPACK)]], [[samr-model|SAMR]] e [[educational-development|desenvolvimento educacional]] tratam da preparação e do apoio aos educadores.
- **Desenvolvedores:** [[educational-technology-developers|quem constrói tecnologia para a educação]], os designers de produto, desenvolvedores de software, engenheiros de aprendizagem e designers de analítica que transformam a capacidade de um modelo em algo que uma instituição consegue contratar. Eles são um público distinto dos profissionais e administradores acima e ficam fora das instituições que adotam suas ferramentas, e é por isso que padrões de projeto, codesign e manutenção pós-financiamento aparecem nesta base de conhecimento como questões pedagógicas, e não comerciais.

## Instituições e política

A camada institucional é onde as decisões sobre IA são de fato tomadas e defendidas: [[administrator|administradores]] e lideranças institucionais, [[educational-policy-ai|política educacional de IA]], [[governance|governança de IA]], [[change-management|gestão da mudança]] como o trabalho de fazer uma adoção pegar, [[regulation|regulamentação de IA]] e as questões de compras e de plataformas que decorrem da [[technology-acceptance-model|adoção de tecnologia]], do [[open-source|código aberto]] e das [[edtech-platform|plataformas de tecnologia educacional]], ao lado da [[lifelong-learning|aprendizagem profissional e ao longo da vida]] e da [[professional-training|formação profissional]].

## Equidade, ética e uso responsável

Justiça, acesso e responsabilidade são centrais na IA na educação:

- **Equidade e acesso:** [[equity-in-ai-education|equidade]], [[differential-effects-across-learner-groups|efeitos diferenciais entre grupos de estudantes]] (a questão de para quem um achado vale), [[digital-divide|divisão digital]], [[bias-mitigation|mitigação de viés]], [[culturally-relevant-pedagogy|pedagogia culturalmente relevante]], [[multilingual-learning|aprendizagem multilíngue]], [[inclusive-learning|aprendizagem inclusiva]], [[accessibility|acessibilidade]], [[assistive-technology|tecnologia assistiva]], [[neurodiversity|neurodiversidade]], [[universal-design-for-learning|desenho universal para a aprendizagem]] e estudos sobre o [[global-south|Sul Global]].
- **Ética e responsabilidade:** [[ethics|ética da IA]], [[ai-misuse-learning-harm|uso indevido de IA e dano à aprendizagem]], [[legal-issues-and-risks|questões e riscos legais]], [[ai-use-disclosure|divulgação do uso de IA]], [[guardrails|salvaguardas]], [[privacy|privacidade]], [[hallucination-risk|risco de alucinação]], [[ai-sycophancy|sycophancy de IA]], [[trust|confiança]], [[trust-calibration|calibração da confiança]], [[reducing-ai-misuse|redução do uso indevido de IA]], [[framing-ai-use-for-students|como o uso de IA é apresentado aos estudantes]], [[pedagogical-safety|segurança pedagógica]], [[sustainability|sustentabilidade]] e [[cognitive-offloading|descarregamento cognitivo]].

Uma [[meta-analysis-systematic-review|revisão sistemática]] da literatura de ética do campo ([[agarwal-ethical-values-norms-aied-2026|Agarwal et al. 2026]], 25 artigos) consolida a ética da AIED em seis valores éticos principais (não discriminação, gestão de dados, supervisão humana, boa vontade, explicabilidade e adequação educacional) e mapeia as normas éticas em uma matriz de partes interessadas por valor. Ela constata que os usuários finais são largamente passivos na literatura ética (as vozes dos estudantes estão praticamente ausentes) e defende integrar a ética ao desenho da AIED e um foco maior na dimensão educacional (pedagógica) da ética em AIED.

## Temas emergentes e transversais

Vários temas atravessam o campo:

- **Confiança e uso crítico:** [[trust|confiança]], [[trust-calibration|calibração da confiança]], [[ai-sycophancy|sycophancy de IA]], [[critical-thinking|pensamento crítico]], [[cognitive-offloading|descarregamento cognitivo]], [[critical-pedagogy|pedagogia crítica]] e [[reducing-ai-misuse|redução do uso indevido de IA]] (veja também [[framing-ai-use-for-students|como o uso de IA é apresentado aos estudantes]]). Como estudantes e professores decidem adotar e se apoiar na IA é modelado pela pesquisa sobre [[technology-acceptance-model|aceitação de tecnologia]], enquanto os estudos sobre o [[global-south|Sul Global]] colocam em primeiro plano a equidade e o contexto cultural na adoção. Empiricamente, a forma como a IA se explica molda essa confiança: [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] mostraram que a [[explainable-ai|IA explicável]] constrói a confiança de professores nas recomendações de IA por meio da compreensibilidade, com explicações orientadas pelo domínio (na linguagem curricular) sendo mais confiáveis e aceitas do que resultados de importância de atributos orientados por dados.
- **A evolução do campo:** a base de conhecimento traça a IA na educação desde os primeiros [[intelligent-tutoring|sistemas de tutoria inteligente]] e o [[knowledge-tracing|rastreamento de conhecimento]] até a [[intelligent-tutoring|tutoria]] movida por LLMs, os [[pedagogical-agent|agentes]] e a [[agentic-ai|IA agêntica]], uma mudança rápida de estudos centrados em ferramentas para frameworks sociotécnicos ([[design-thinking|design thinking]], [[curriculum-design|desenho curricular]], [[institutional-change-framework-ai|mudança institucional]]) e de sistemas escritos à mão para fluxos de trabalho guiados pelo usuário, em que um estudante ou [[teacher-role|não programador]] especifica o comportamento em linguagem natural ([[vibe-coding|vibe coding]]). [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] formalizam essa trajetória com seu framework AI×Ed, rastreando artigos ao longo de quatro décadas de anais para mostrar que o campo passou de uma mistura diversa (incluindo pesquisa substancial que tratava a IA como uma analogia à inteligência e à aprendizagem humanas) para um foco quase exclusivo em usos aplicados, orientados por dados e voltados ao pesquisador, uma virada que a ascensão dos [[llm|LLMs]] agora parece reverter em parte (três dos quatro artigos de "IA como analogia" na AIED 2024 eram baseados em LLM).
- **Emoção, ansiedade e futuros de carreira:** a IA induz e molda respostas emocionais ([[anxiety-and-stress|ansiedade e estresse com IA]], abrangendo vigilância por proctoring, medos ligados à integridade e deslocamento de carreiras), enquanto o [[career-development-and-readiness|desenvolvimento e preparação para a carreira]] trata de como a educação prepara os estudantes para um mercado de trabalho disruptado pela IA (veja também [[well-being|bem-estar]]).

## Maturidade do campo

A base de conhecimento reflete um campo em rápida evolução: dos primeiros sistemas de tutoria inteligente à tutoria movida por LLMs e à IA agêntica; de ferramentas de integridade acadêmica focadas em detecção ao redesenho da avaliação; de estudos centrados em ferramentas a frameworks sociotécnicos e focados em equidade. A base de evidências enfatiza cada vez mais [[research-methods-aied|métodos de pesquisa]] rigorosos, [[ai-ed-evaluation|avaliação]], [[rct|desenhos experimentais]] e resultados de longo prazo.

## Conexões

A IA na educação se conecta a todos os conceitos da base de conhecimento: é o campo que todas as outras páginas de conceito definem coletivamente. Use esta página como ponto de partida para navegar pela base de conhecimento inteira.

## Conceitos conectados
- [[ai-literacy]]: guarda-chuva, compreender, usar e avaliar a IA
- [[human-ai-collaboration]]: guarda-chuva, como pessoas e IA trabalham juntas
- [[pedagogy]]: guarda-chuva, métodos e estratégias de ensino
- [[learning-theories]]: guarda-chuva, como a aprendizagem acontece
- [[ai-technologies]]: guarda-chuva, modelos, técnicas e sistemas
- [[discipline-specific-aied]]: guarda-chuva, a IA nas áreas do conhecimento e nos níveis de ensino
- [[assessment]]: guarda-chuva, como a IA avalia os estudantes e reformula a validade
- [[feedback]]: guarda-chuva, como o feedback é gerado, entregue e usado
- [[stakeholders]]: guarda-chuva, quem são os atores
- [[learners]]: guarda-chuva, os conceitos do lado do estudante (experiência, identidade, autonomia, interação, modelos de estudante)
- [[ai-ed-evaluation]]: guarda-chuva, como sabemos se a IA funciona
- [[research-methods-aied]]: guarda-chuva, métodos de pesquisa de eficácia
- [[governance]]: guarda-chuva, a camada institucional e regulatória
- [[educational-policy-ai]]: guarda-chuva, política, orientações e implementação
- [[equity-in-ai-education]]: guarda-chuva, justiça, acesso e inclusão
- [[learning-sciences]]: o campo empírico por trás da AIED
- [[ethics]]: as dimensões éticas da IA na educação
- [[misconceptions]]: os modelos mentais que as pessoas trazem sobre a IA
- [[interpreting-and-applying-aied-research]]: ler um estudo e levar um achado para a prática
- [[limitations-in-aied-research]]: limites transversais da base de evidências
- [[meta-analysis-systematic-review]]: o que as revisões e meta-análises estabelecem
- [[history-of-aied]]: como o campo evoluiu
- [[philosophy-of-ai-in-education]]: os fundamentos filosóficos
- [[theories-and-frameworks]]: o mapa dos nós de teoria e framework
- [[theory-development-aied]]: construir e revisar teoria

## Artigos conectados

Revisões de campo sobre a IA na educação, os estudos que examinam todo o campo ou todo um nível de ensino em vez de um único tópico:

- [[typology-generative-ai-tools-education-2026]]: Typology of Generative AI Tools for Education
- [[raza-farooq-aied-review-2020-2025]]: Review of Artificial Intelligence in Education from 2020 to 2025
- [[rismanchian-ai-education-four-decades-aixed-2026]]: The evolution of AI-and-education research across four decades (AIxEd framework)
- [[mishra-control-vs-agency-history-2025]]: Control vs. agency: a history of AI in education
- [[liang-genai-systematic-review-human-ai-2026]]: Generative AI in education: systematic review of 56 empirical studies
- [[genai-higher-education-systematic-review-2026]]: Generative AI in higher education: systematic review of 125 studies
- [[stanford-evidence-base-ai-k12-2026]]: The evidence base on AI in K-12: a review of 818 papers
- [[caruana-pre-university-ai-education-slr-2026]]: Pre-university AI education: systematic literature review of 42 studies
- [[genai-educational-outcomes-meta-analysis]]: Generative AI and educational outcomes: comprehensive meta-analysis
- [[caeai-ai-companions-learning-over-performance-2026]]: a research agenda for AI companions built around learning rather than performance

