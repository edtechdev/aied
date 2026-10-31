---
title: Desenho curricular
created: "2026-06-02T10:44:35-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks]
translation_of: concepts/curriculum-design
source_updated: "2026-10-26T10:25:00-04:00"
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

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

> **Desenho curricular** — o processo de planejar e estruturar o que é ensinado ao longo de cursos, programas e instituições, incluindo objetivos de aprendizagem, sequenciamento de conteúdo, estratégias de avaliação e progressão de habilidades. Na era da IA, o desenho curricular precisa equilibrar o conhecimento fundacional com as competências emergentes de IA, determinando não apenas o que os estudantes aprendem, mas como aprendem a trabalhar com as ferramentas de IA e a avaliá-las criticamente.

## Perguntas para refletir

- O desenho curricular pergunta o que os estudantes deveriam aprender no nível do programa, enquanto o desenho de aprendizagem pergunta como, no nível do curso. Quando a IA remodela uma disciplina, qual dessas duas camadas você acha que deveria mudar primeiro?
- À medida que a [[generative-ai|IA generativa]] automatiza o trabalho de nível de implementação, alguns argumentam que os currículos precisam migrar para o desenho de sistemas, a abstração e a [[critical-thinking|avaliação crítica]]. O que você acha que os estudantes perderiam se as habilidades de baixo nível fossem despriorizadas?
- O redesenho curricular na era da IA é frequentemente enquadrado como um equilíbrio entre fluência em ferramentas e conhecimento fundacional. Onde você já viu esse equilíbrio pender longe demais em uma direção?
- O framework SAIL trata o letramento em IA como andaimentado ao longo das idades e desenhado para abordar "divisões digitais" mais profundas do que o acesso. Como é diferente incorporar o letramento em IA a um currículo inteiro versus acrescentar um único curso de IA?
- Se toda disciplina agora precisa de competências de IA incorporadas a ela, quem é responsável pela mudança curricular — instrutores, programas ou instituições — e do que os educadores precisam para ter sucesso nela?
- Um currículo é uma sequência de habilidades ao longo dos anos, e não apenas uma lista de tópicos. Como essa visão mais longa muda se uma "unidade de letramento em IA" de fato fixa?

## Introdução

O desenho curricular aborda o *o quê* da educação no nível do programa, complementando o [[learning-design|desenho de aprendizagem]], que aborda o *como* no nível do curso. Os artigos desta base de conhecimento exploram como a IA está remodelando currículos em várias disciplinas — da engenharia de software à arquitetura à educação verde — e como os educadores estão desenhando currículos que incorporam o letramento em IA sem sacrificar os fundamentos disciplinares.

### Principais temas de pesquisa

**Redesenhar currículos para a era da IA** é o desafio central. **[[reshaping-cs-education-genai|Lee et al.]]** sintetizaram achados de workshops internacionais sobre a remodelação da [[cs-education|educação em computação]] na graduação, argumentando que, à medida que a GenAI automatiza a programação de nível de implementação, os currículos precisam migrar para o desenho de sistemas, a abstração e a avaliação crítica — ao mesmo tempo que despriorizam os detalhes de implementação de baixo nível. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** formalizou a Engenharia de Software Agêntica como uma disciplina distinta, com um currículo de 21 módulos focado na "evolução da intenção" e na disciplina do praticante exigida para gerenciar [[agentic-ai|agentes de IA]]. Ambos se conectam ao [[ai-literacy|letramento em IA]] e ao [[scaffolding|andaimento]].

Ao rever a mudança como sistêmica, e não aditiva, [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]] triangulam uma revisão de escopo, mapeamento bibliométrico de 209 registros, 36 artigos e dez entrevistas com líderes acadêmicos em cinco deslocamentos — incluindo a transmissão de conhecimento cedendo ao desenvolvimento de capacidades e a experimentação local cedendo à governança institucional.

**Mapeamento e análise curricular** usa a IA para compreender currículos existentes. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]** analisaram 23 ementas de cursos de engenharia de software assistida por IA, identificando temas comuns — [[prompt-engineering|engenharia de prompts]], revisão de código com IA, [[ethics|considerações éticas]] — e derivando orientações de desenho que enfatizam equilibrar a fluência em ferramentas com o conhecimento fundacional. O **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** aplica métodos computacionais para comparar estruturas de cursos de computação entre instituições.

Ponderar muda o que uma análise curricular relata: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath et al. (2026)]] fizeram o GPT-o3-mini distribuir 100% entre sete habilidades empresariais para cada uma de 48 avaliações, alcançando um alfa de Krippendorff de 0,81 contra pesos de especialistas, mas a concordância tornou-se negativa para habilidades que as descrições nunca declaram explicitamente (−0,19).

**Integração do letramento em IA** incorpora competências de IA às disciplinas. O **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** fornece um framework de letramento em IA andaimentado, aplicável a todas as idades e etapas educacionais, abordando [[digital-divide|divisões digitais]] de segundo e terceiro nível. **[[tracing-genai-literacy-interaction-patterns]]** examina como o letramento em IA se desenvolve por meio de padrões de interação. **[[hingle-collaborative-ai-literacy-2025]]** explora abordagens colaborativas para o desenvolvimento curricular de letramento em IA, conectando-se à [[collaborative-learning|aprendizagem colaborativa]].

O LearnAI mostra como é a versão incorporada: uma camada de ampla exposição de apresentações curtas dentro de 18 cursos existentes em cinco disciplinas (293 estudantes), pareada com sessões de cocriação individuais opcionais conduzidas por tutores pares de graduação treinados, para que estudantes de capacidades mistas encontrem tarefas de IA em seu próprio nível ([[learnai-just-in-time-ai-cocreation-university-2026|Qu et al. (2026)]]).

A integração na prática fica atrás dos frameworks. [[critical-media-literacy-education-2026|Santos-Albardía et al. (2025)]] constataram que apenas 13,8% dos estudantes de educação e jornalismo pesquisados disseram que seus trabalhos de curso abordavam análise crítica de mídia, contra 97,8% que a avaliaram como importante, e suas entrevistas com especialistas atribuíram a lacuna à formação de professores, que prioriza habilidades técnicas e de instrução em detrimento da educação em mídia.

Uma revisão PRISMA de 39 estudos de STEAM (2016–2025) encontrou um desequilíbrio paralelo nos elementos de letramento em IA: as implementações desenvolveram letramentos técnicos — conceitos fundamentais de IA, pensamento computacional, letramento em dados —, enquanto subdesenvolviam a consciência ética, a imaginação criativa e o criar, gerenciar e desenhar com IA, então auditar cada unidade contra eles é a resposta prática ([[niri-steam-ai-literacy-review-2026|Niri et al., 2026]]).

A voz do estudante é outra entrada de desenho: 84% de 166 estudantes finalistas de negócios queriam que a GenAI fosse ensinada em suas unidades e 85% a viam como essencial para a empregabilidade, enquanto apenas 7% haviam aprendido sobre ela na universidade ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

Uma revisão de 42 estudos sobre educação em IA pré-universitária constata que os currículos migram de conteúdo técnico para modelos baseados em competências construídos sobre frameworks como o AI4K12 e as Cinco Grandes Ideias em IA, com o [[ai-literacy|letramento em IA]] tratado como competência transcurricular, embora instrumentos padronizados para avaliá-lo sigam ausentes ([[caruana-pre-university-ai-education-slr-2026|Caruana et al. (2026)]]).

Instrutores e empregadores concordaram sobre a importância de apenas uma de 26 habilidades de IA — estabelecer expectativas realistas para o trabalho aumentado por IA —, e apenas três das 26 eram ensinadas por metade ou mais dos instrutores, a evidência do relatório de uma lacuna de habilidades de IA entre o ensino superior e os empregadores ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

O desenho de atividades de ML no K-12 fica na superfície: uma revisão por trás do framework ICE-T constatou que o uso invisível, a interação por botão e a implantação de modelos respondem por quase 60% das atividades codificadas de aprendizagem supervisionada, a criação aberta apareceu apenas duas vezes, e as perspectivas técnica e societal coocorreram em apenas cerca de 3% das atividades ([[icet-ml-education-trust-2026|Haritz et al., 2026)]]).

**A inovação curricular [[discipline-specific-aied|específica do domínio]]** aplica o desenho curricular a campos específicos. O **[[genai-architecture-education]]** explora como a IA generativa remodela a [[pedagogy|pedagogia]] do desenho arquitetônico. O **[[talebzadeh-ai-green-education-2026]]** examina a integração da IA em currículos de educação verde. O **[[connected-ai-lesson-planning-vietnam]]** e o **[[llm-cultural-relevance-k12]]** abordam o [[culturally-relevant-pedagogy|desenho curricular culturalmente responsivo]].

**Incorpore a IA dentro da disciplina, e não ao lado dela.** Um currículo de IA em três camadas (introdutório, aplicação, avançado) dobrou o aprendizado de máquina em tópicos existentes de engenharia térmica ao longo de um curso de 39,1 horas, em vez de acrescentar eletivas de ciência da computação, evitando carga extra para estudantes de engenharia mecânica e liberando sua ementa, dados e código abertamente ([[mechanical-engineering-ai-curriculum-2026|Li et al. (2026)]]).

Um caso de jornalismo mostra a variante valores-primeiro: um andaimento triádico de valores–processos–competências moveu os estudantes da reportagem só humana para o trabalho integrado à IA, mas 8 de 9 (89%) relataram confiança em decisões éticas, enquanto itens de survey sobre autoria e viés sugeriam apenas compreensão superficial ([[ying-genai-journalism-assessment-2026|Ngu e Weller (2026)]]).

**Os frameworks [[governance|institucionais]]** abordam a mudança curricular em escala. O **[[finkelstein-principled-ai-education-2025]]** e o **[[finkelstein-principled-ai-education-2025]]** fornecem princípios para integrar a IA a programas educacionais. O **[[ai-adoption-training-public-sector]]** examina barreiras à adoção de currículos de IA na educação do setor público.

**Sequenciando a IA ao longo do programa.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]] propõem um framework de "abster, depois amplificar" que sequencia a IA generativa no nível do programa: retenha a ferramenta generativa enquanto uma capacidade está se formando, depois a restaure para amplificar essa capacidade uma vez que o estudante consiga dirigi-la e julgar seus retornos. Governado por um critério de formação-versus-descarregamento (se um trecho de trabalho constrói uma capacidade ou apenas a passa pela ferramenta), o framework liga o desenho curricular ao [[cognitive-offloading|descarregamento cognitivo]], à [[self-regulated-learning|aprendizagem autorregulada]] e à [[academic-integrity|integridade acadêmica]], com pontos de verificação difíceis de falsificar em cada dobradiça abster-para-amplificar.

A alavanca para os estágios mais altos não é mais disciplinas: ao longo de 89 projetos de conclusão patrocinados, a progressão do Nível de Prontidão para o Trabalho 6 para o 7 foi barrada por experiência inserida na indústria — co-ops e projetos do Manufacturing Extension Partnership —, então os cursos precisam de aprendizagem integrada ao trabalho, e não de outra eletiva técnica ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al. (2026)]]).

Uma consequência curricular da capacidade dos modelos é que o desenho resistente à IA expira. Educadores de computação descreveram calibrar tarefas contra o que os modelos ainda não conseguiam fazer e ver a calibração caducar — os problemas de um instrutor de cibersegurança exigiam [[problem-solving|resolução de problemas]] genuína sete ou oito meses antes e eram então simplesmente resolvidos —, com um facilitador estimando uma vida útil de cerca de um semestre. O achado estrutural do workshop é que quase toda adaptação foi feita por um instrutor individual dentro de um único curso, sem a coordenação institucional que uma resposta curricular durável exigiria ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026)]]).

**Alinhamento de curso inteiro quando a IA generativa é permitida.** Um redesenho de 2026 de um curso introdutório de [[physics-education|física]] nuclear e de partículas ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]]) integrou três tipos de atividade com papéis distintos — aulas para conceitos e notação, tutoria para a prática analítica padrão, e lição de casa como componente exploratório "em forma de pesquisa" de problemas excepcionalmente difíceis e multimétodo. O atrito relatado (um pré-requisito de programação não declarado, tempo insuficiente para compreender em vez de meramente obter respostas, e desalinhamento entre aulas, tutoria, lição de casa e [[summative-assessment|exame]]) ilustra que permitir a IA generativa força o trabalho de alinhamento curricular ao longo de todo o curso, e não uma mudança em um tipo de tarefa; a estrutura recomendada deles mantém o trabalho exploratório com IA permitida como tarefas avançadas com bônus, enquanto o exame escrito sem ajuda determina a nota.

**A profundidade do alinhamento, e não a frequência do uso, separa os padrões de integração.** Ao longo de 17 casos de módulos de negócios, seis incorporaram a GenAI sistematicamente ao ensino, à aprendizagem e à avaliação (construtivos), nove o fizeram de forma inconsistente (mistos) e dois esporadicamente (ad hoc); os casos construtivos relataram os resultados mais fortes de engajamento, capacidade e relevância curricular ([[zhou-constructive-alignment-genai-business-2026|Zhou et al. (2026)]]).

**O conselho de alinhamento construtivo sob escrutínio crítico.** Onde as fontes acima relatam o alinhamento na prática, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al. (2026)]] leem a própria orientação como um discurso. Sua [[qualitative-research|análise crítica do discurso]] de 14 peças de literatura cinzenta publicadas de novembro de 2022 a abril de 2025 — em sua maioria páginas institucionais e capítulos de [[educational-development|unidades de ensino e aprendizagem]] de posição central — constatou o alinhamento construtivo apresentado como um problema de eficiência: a IA generativa era "uma forma efetiva e eficiente de redigir rubricas" que podia "agilizar o processo", antropomorfizada como "uma especialista e assistente educacional", uma "parceira de treino" ou "uma assistente inteligente em desenho instrucional", enquanto o corpo acadêmico fornecia apenas "expertise de conteúdo" e a ferramenta assumia "o trabalho pesado de desenvolver objetivos de aprendizagem, organizar o conteúdo do curso ... e alinhar os componentes do curso". Receitas de prompt copiar-e-colar e templates numerados enquadravam o alinhamento construtivo como um produto padronizável, produzindo três modos de falha: performatividade (alinhamento que só parece alinhado), apagamento do contexto situado e crítico, e alinhamento construtivo raso que confunde alinhamento com a dimensão construtiva. A saída deles ressequencia o fluxo de trabalho do desenho curricular — os educadores devem compreender o alinhamento construtivo bem o bastante para dirigir, avaliar e rejeitar o produto da IA antes de delegar qualquer parte dele — e limita qualquer ferramenta a um agente [[rag|de recuperação aumentada]] institucional fundamentado em política, rubricas e atributos de egresso locais, com um papel de "tutor liminar" que estende, em vez de substituir, a relação com o [[educational-development|desenvolvedor]].

**Gerando tarefas de modelagem alinhadas ao currículo.** Plataformas movidas por IA podem abordar a falta de tempo e de recursos dos professores para desenhar tarefas de [[math-education|modelagem matemática]] de alta qualidade ao gerar problemas alinhados ao currículo e recomendações pedagógicas fundamentadas em princípios de desenho e [[rag|geração aumentada por recuperação]] — uma abordagem ilustrada com variação direta na matemática do ensino médio ([[ai-modeling-problem-generation-platform-2026]]). As próprias leituras do curso agora também são um alvo de geração: Sidorkin (2026) substituiu um livro didático comercial por leituras semanais geradas por IA em um curso de pós-graduação em liderança educacional, e embora os estudantes as tenham avaliado como úteis e 75 por cento tenham concordado que aprenderam mais do que em um curso comparável, as 4.487 páginas de logs traziam citações intratexto no estilo APA em apenas cerca de 0,80% das páginas e associavam um campus ou sistema nomeado a afirmações assertivas de política em cerca de 1,03% das páginas sem fonte verificável. A lição sobre materiais curriculares é tratar as leituras geradas como produção de rascunho sob revisão do instrutor, orçar o trabalho do instrutor de desenho de prompt e verificação, e curar fontes verificadas no assistente, em vez de deixar a qualidade das fontes para o estudante inferir pelo contexto.

**Planejamento de aula assistido por IA na camada currículo-para-sala-de-aula.** No ponto em que um currículo se torna uma aula ensinada, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo e Tahir (2025)]] compararam experimentalmente planos gerados por professores versus assistidos por ChatGPT na educação artística [[stem-education|STEAM]] para crianças, constatando que os planos assistidos por IA foram avaliados significativamente mais altos por seis professores especialistas (mediana 20,5 contra 17,6, p = .002, efeito grande). Eles mostram que o ganho depende de como o professor delega: o método recomendado preenche lacunas de conteúdo em uma aula autoesboçada (preservando a [[agency|autonomia]] de desenho do professor) em vez de delegar o plano inteiro, e contribuem com um template de prompt Papel–Instruções–Objetivo Final para geração reproduzível e com qualidade controlada — evidência de que o planejamento de aula com IA é mais forte quando incorporado às decisões curriculares do professor, e não substituindo-as. Na educação em ciências, a validação por especialistas chega a um veredito paralelo sobre o desenho de plataforma: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli e Yildirim (2026)]] pediram a onze especialistas em [[science-education|educação em ciências]] que avaliassem o ChatGPT-4 e uma ferramenta focada em educação (Teacher's Buddy) em planos de sexta série alinhados ao currículo revisado da Turquia e ao modelo de aprendizagem [[design-based-research|Baseada no Desenho]] de Engenharia. A plataforma focada em educação pontuou mais alto em todos os oito critérios de qualidade — incluindo estágios intensivos em feedback e alinhamento curricular —, evidência de que incorporar estrutura pedagógica a uma IA produz produto melhor alinhado; ainda assim, alguns especialistas preferiram o plano de propósito geral por sua ênfase socioemocional mais forte, e 7 de 11 julgaram os planos "aplicáveis com correção" em vez de diretamente utilizáveis. A escolha da plataforma e do enquadramento do prompt, e não apenas a IA em si, molda quão bem os planos gerados se alinham aos padrões curriculares e aos modelos de processo.

Estrutura, e não formulação de prompt, é o que torna o rascunho por IA confiável em produção: o pipeline Curriculum-as-Code de [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] podou o contexto agressivamente e gerou materiais seção por seção ao longo de 28 contextos de projeto, o que cortou o tempo de preparação do instrutor de cerca de oito para duas horas por instrução e não deixou alucinações conceituais ou matemáticas para a revisão humana capturar.

### Conexões com conceitos relacionados

O desenho curricular se conecta diretamente ao [[learning-design|desenho de aprendizagem]] — o currículo define o quê, a instrução define o como. Ele se conecta ao [[ai-literacy|letramento em IA]] porque incorporar competências de IA é um desafio curricular primordial, ao [[teacher-role|papel do professor]] e ao [[educational-development|desenvolvimento educacional]] porque a mudança curricular exige preparação do educador, e ao [[scaffolding|andaimento]] porque currículos bem desenhados andaimentam o desenvolvimento de habilidades ao longo dos cursos e dos anos. As conexões com [[higher-ed|ensino superior]] e [[k-12|K-12]] refletem a relevância do desenho curricular nos diversos níveis educacionais.

## Ideias equivocadas comuns

- **"Um LLM consegue mapear um currículo uma vez validado com alta confiabilidade."** O GPT-o3-mini distribuiu **100% entre sete habilidades empresariais para cada uma de 48 avaliações**, alcançando um **alfa de Krippendorff de 0,81** contra pesos de especialistas — e a **concordância** se desfez em habilidades particulares. Alta confiabilidade global com concordância desigual é o padrão a verificar antes de confiar no mapeamento.
- **"Incorporar letramento em IA significa acrescentar um curso."** O LearnAI mostra a forma incorporada: uma **camada de ampla exposição de apresentações curtas dentro de 18 cursos existentes em cinco disciplinas (293 estudantes)**. A exposição foi distribuída pelo currículo, e não reunida em uma unidade.
- **"Os estudantes chegam já capazes de avaliar a mídia criticamente."** Apenas **13,8% dos estudantes de educação e jornalismo pesquisados** disseram que seus trabalhos de curso abordavam análise crítica de mídia, contra **97,8% que a avaliaram como importante**. A lacuna entre valorizar uma habilidade e ser ensinado nela é a abertura curricular.

## Conceitos conectados
- [[pedagogical-partnerships]] — Parcerias pedagógicas
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Guarda-chuva: pedagogias e estratégias de ensino na educação com IA
- [[recommender-systems-and-learning-paths]]

## Artigos conectados
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Mapeamento de habilidades ponderado e validado por especialistas para acreditação
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Análise crítica do discurso da orientação sobre alinhamento construtivo com GenAI (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Abordando a confiança em sistemas de IA por meio da educação: uma perspectiva didática
- [[refrain-amplify-genai-curriculum-2026]] — Framework curricular abster-depois-amplificar para sequenciar a GenAI (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Currículo de educação em IA baseado em projetos em engenharia térmica
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Framework de Nível de Prontidão para o Trabalho para manufatura inteligente na era da IA
- [[rewriting-curriculum-genai-pedagogy-2026]] — Reescrevendo o currículo: mudança pedagógica impulsionada pela GenAI
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Framework de Habilidades de IA: 26 habilidades avaliáveis para mapeamento curricular
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Cocriação de IA just-in-time entre disciplinas
- [[ai-video-dual-gatekeeping-2026]] — Quando dizer não faz vídeos melhores: dupla filtragem para criação de conteúdo de IA com fundamento pedagógico
- [[niri-steam-ai-literacy-review-2026]] — Educação STEAM para o letramento em IA: revisão sistemática
- [[caruana-pre-university-ai-education-slr-2026]] — Preparando estudantes e professores para um futuro movido por IA: SLR da educação em IA pré-universitária (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Plataforma movida por IA gerando problemas de modelagem matemática (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — IA na educação em física de partículas: problemas de pesquisa e habilidades fundacionais
- [[computing-assessment-genai-workshop-report-2026]] — A IA consegue fazer sua lição de casa. E agora? Relatório de um workshop on-line sobre avaliação em computação na era da IA generativa
