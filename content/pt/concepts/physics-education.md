---
title: Educação em física
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-06T18:35:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [socratic-method]
technology: [generative-ai, intelligent-tutoring]
discipline: [physics education, stem education]
audience: [learners, instructors]
level: [higher ed]
confidence: high
translation_of: concepts/physics-education
source_updated: "2026-10-06T18:35:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Educação em física** — o estudo de como os estudantes aprendem física e de como ensiná-la de forma mais eficaz, abrangendo [[intelligent-tutoring|tutoria por IA]] socrática, avaliação de [[computational-thinking|pensamento computacional]], [[trust|confiança]] dos estudantes e padrões de adoção da IA, validade da correção automatizada e preparação de professores. Os artigos de educação em física desta base de conhecimento são notáveis por sua especificidade de domínio: eles exploram como as ferramentas de IA interagem com as demandas cognitivas únicas do raciocínio físico — pensamento visoespacial, modelagem matemática, pensamento abstrato de sistemas e [[problem-solving|resolução de problemas]] em múltiplos passos.

## Perguntas para refletir

- Problemas de física frequentemente exigem pensamento visoespacial, modelagem matemática e raciocínio em múltiplos passos. Por que essas poderiam ser precisamente as demandas cognitivas com que os tutores de IA atuais lutam?
- Os estudantes reportam uma grande lacuna confiança–utilidade: 91% usam IA para o trabalho do curso, mas apenas 41% confiam nela. Você já usou uma ferramenta em que não confiava plenamente? O que causava a lacuna?
- A correção por IA subestimou sistematicamente as explicações de física de estudantes linguisticamente fracos. O que isso sugere sobre como uma IA corrige uma explicação versus uma resposta numérica correta?
- Um estudo descobriu que um chatbot de IA socrático melhorou dramaticamente a especificidade das questões num curso de física ao vivo, mas os estudantes também frequentemente \"cederam o controle estratégico\" ao tutor. Quando entregar o controle estratégico ajuda a aprendizagem, e quando a prejudica?
- Por que a física poderia ser um \"campo de provas\" para a [[ai-education|IA na educação]] — o que torna seus problemas ideais para estudar como a IA afeta o raciocínio e a avaliação?
- Você confiaria numa IA para corrigir sua lista de exercícios de física ou raciocinar com você sobre um diagrama de forças? O que precisaria ser verdade sobre a IA — e sobre seu curso — para você dizer sim?

## Introdução

A [[research-methods-aied|pesquisa]] em educação em física tornou-se um campo de provas para a IA na educação porque problemas de física são bem estruturados, mas cognitivamente exigentes, tornando-os ideais para estudar como as ferramentas de IA afetam a aprendizagem, o raciocínio e a avaliação. Os 26 artigos desta base de conhecimento pintam coletivamente o retrato de um campo às voltas tanto com a promessa quanto com os limites da IA — de [[conversational-ai|chatbots]] socráticos que melhoram a qualidade das questões dos estudantes a viéses sistemáticos de correção que penalizam estudantes linguisticamente diversos.

### Temas-chave de pesquisa

**A tutoria socrática por IA em física** é o tema mais desenvolvido, com três artigos implantando diálogo socrático movido por [[llm|LLM]] em cursos reais de física. **[[hashmi-socratic-physics-chatbot-2025|Hashmi et al.]]** demonstraram que a interação socrática sustentada com um chatbot de IA melhora dramaticamente a especificidade das questões em mecânica introdutória, com 150 estudantes de STEM num curso ao vivo. **[[socratic-ai-physics-tutor-taxonomy-2026|Hashmi & Rebello]]** construíram uma taxonomia bottom-up de 357 categorias de discurso dos estudantes a partir da mesma implantação, revelando que os turnos meta-procedimentais — em que os estudantes cedem o controle estratégico ao tutor — dominam as interações dos estudantes. Ambos contribuem para a pesquisa mais ampla em [[socratic-method|método socrático]] e conectam-se a [[intelligent-tutoring|Tutoria por IA]] e a frameworks de [[intelligent-tutoring|tutoria inteligenta]].

**A adoção da IA e a confiança dos estudantes** exploram como estudantes de física de fato usam as ferramentas de IA. **[[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]]** encontraram uma lacuna confiança–utilidade de 50 pontos: 91% usam IA para o trabalho do curso, mas apenas 41% confiam nela, com os estudantes identificando espontaneamente modos de falha da IA no raciocínio visoespacial e em circuitos. **[[becker-chatgpt-typology-physics-2026|Becker et al.]]** desenvolveram uma tipologia de dois perfis — 70% \"Usuários Pragmáticos\" e 30% \"Não Usuários Céticos\" — a partir de 1.189 respostas de pesquisa, mostrando que ambos os grupos fazem compensações calculadas de risco-utilidade. Esses estudos avançam a pesquisa em [[ai-literacy|letramento em IA]] e [[trust-calibration|calibração da confiança]], e desafiam [[educational-policy-ai|políticas de IA]] de tamanho único.
**Crenças epistemológicas acompanham a preferência por comportamento de chatbot.** Num grande curso de cálculo, 52% dos estudantes preferiram um chatbot que começa com investigação guiada e responde apenas quando solicitado, e eles pontuaram mais alto no total da EBAPS (p = 0,029) — diferenças que não sobreviveram a uma correção de Bonferroni, tornando a associação sugestiva, não conclusiva ([[physics-chatbot-epistemological-beliefs-2026|Sirnoorkar e Mamidpalliwar (2026)]]).

**Mudança de percepção sem mudança de comportamento** é o que [[physics-students-llm-perceptions-instruction-2026|O'Brien et al. (2026)]] acrescentam a esse quadro. Uma aula reflexiva sobre como os LLMs funcionam, ministrada num curso obrigatório do primeiro ano para estudantes de física, elevou o ceticismo agudamente — a concordância de que os LLMs podem deixar os estudantes com uma falsa sensação de confiança subiu de 58% para 88%, e a crença de que um LLM supera o estudante médio de física caiu de 54% para 32% — enquanto a conveniência (71% de concordância) e a pressão de prazos (65%) permaneceram como as razões dominantes de uso. Os limites da aula são tão informativos quanto seu efeito: a instrução em [[ai-literacy|letramento em IA]] mudou o que os estudantes *diziam* sobre essas ferramentas, e não as pressões que os fazem recorrer a uma, e é por isso que uma intervenção desse tipo pertence ao lado do desenho de problemas e de políticas, e não em seu lugar.

A formulação de problemas transforma o estudante no autor do problema: 76% de 49 estudantes de física perceberam uma mudança positiva em suas interações com GenAI depois de treinamento em [[prompt-engineering|prompt engineering]], com os novatos se beneficiando mais, e cerca de 68% viram a técnica positivamente como autoestudo ([[genai-assisted-problem-posing-physics-2026|Dawson & Rebello (2026)]]).

**Avaliação e pensamento computacional** examina como a IA pode avaliar a aprendizagem de física. **[[llm-computational-thinking-physics-2026|Savage et al.]]** usaram LLMs para avaliar o crescimento do [[computational-thinking|pensamento computacional]] em física introdutória, descobrindo que os LLMs conseguem escalar a avaliação de pensamento computacional, mas lutam com construtos complexos como o Pensamento Sistêmico. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** demonstraram que a correção por IA subestima sistematicamente as explicações de física de estudantes linguisticamente fracos — um achado que conecta [[assessment-validity|validade de avaliação]], [[bias-mitigation|mitigação de viés]] e [[equity-in-ai-education|equidade na IA na educação]].

**Infraestrutura psicométrica para avaliação diagnóstica.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] invertem a questão usual da IA na física: em vez de perguntar se um modelo consegue resolver ou corrigir física, eles perguntam se as [[assessment|avaliações]] baseadas em pesquisa do próprio campo podem ser feitas para diagnosticá-la. Mapeando itens do FCI, FMCE e EMCS sobre 14 objetivos de aprendizagem refinados e ajustando um modelo de diagnóstico cognitivo DINA a 24.394 respostas de pós-teste de 807 cursos em 79 instituições pela plataforma LASSO, eles construíram o [[cognitive-diagnosis|Diagnóstico Cognitivo]] de Mecânica — reportado como o primeiro teste adaptativo computadorizado de diagnóstico cognitivo em física. O FCI e o EMCS se ajustam bem (RMSEA² = 0,033 e 0,022), enquanto o FMCE se ajusta apenas marginalmente (0,065), e os autores rastreiam esse desajuste ao desenho do instrumento, e não à modelagem: 42 dos 43 itens pontuados do FMCE compartilham enunciados de cenário em conjuntos encadeados, criando a dependência local de itens que a suposição de independência condicional do DINA proíbe (o FCI agrupa 13 de 30 itens; o EMCS, nenhum). A acurácia de classificação atingiu o benchmark [[formative-assessment|formativo]] de baixo impacto para 19 das 22 combinações de avaliação objetiva; as três falhas foram objetivos de energia do EMCS cujos itens se sobrepõem em cerca de 70%, de modo que a maestria num não pode ser separada dos outros. O significado para o ensino de física é que os instrumentos que os cursos já aplicam podem ser reaproveitados para entregar feedback acionável ao nível de objetivo *durante* a instrução, em vez de uma nota retrospectiva de pós-teste — desde que as afirmações diagnósticas sejam lançadas na resolução que o banco de itens consegue de fato sustentar.

**Comparando a IA multimodal em problemas autênticos de física.** [[omniphys-multimodal-physics-benchmark-2026|Chen et al. (2026)]] introduzem o **OmniPhys**, um [[benchmark|benchmark]] [[multimodal|multimodal]] em grande escala (15.246 questões, 19.850 imagens) abrangendo física do ensino fundamental ao nível universitário a partir de corpora educacionais chineses. Inusitadamente, ele avalia não apenas a compreensão de *entrada* multimodal, mas a geração de *saída* multimodal — se os modelos conseguem sintetizar diagramas de física estruturados, um componente central da resolução autêntica de problemas. Avaliações extensas revelam lacunas críticas nos LLMs multimodais atuais, especialmente em raciocínio complexo e geração visual.

**Frameworks de desenho instrucional para a instrução aumentada por IA.** **[[airis-cognitively-activated-ai-physics-2026|Kuhn et al.]]** propõem o framework **AIRIS** (Activate–Inquire–Reflect with Intelligent Support) — uma estrutura de três fases para o uso cognitivamente ativado da IA em física: os estudantes predizem e esboçam os resultados esperados antes da IA (Ativar), delegam à IA os passos computacionais e de representação enquanto comparam criticamente a saída com suas próprias predições (Investigar), e interpretam, verificam a consistência entre representações e refletem sobre o que a IA contribuiu depois (Refletir). Fundamentado em [[self-regulated-learning|aprendizagem autorregulada]], Teoria da [[cognitive-offloading|Carga Cognitiva]], representações externas múltiplas e [[human-ai-collaboration|colaboração humano–IA]], ele enquadra o desafio central como [[learning-design|desenho instrucional]], e não como trapaça ou escolha de ferramenta, e pede experimentos de \"condição de retirada\" que testem se a aprendizagem sobrevive à remoção do apoio da IA.
- **Ensine a crítica das soluções da IA com uma rubrica.** Vinte e quatro grupos de laboratório de física introdutória que criticaram uma solução de IA com reflexão guiada pela rubrica MAPS identificaram integração numérica pulada, notação indefinida e gráficos qualitativos em vez de quantitativos, enquanto grupos que apenas resolveram um problema relacionado aceitaram a saída polida ou a rejeitaram a partir de suas próprias concepções errôneas ([[probing-ai-generated-physics-solutions-2026|Borse et al. (2026)]]).

**Vídeo generativo como dados experimentais sintéticos.** [[genai-video-engineering-physics-workflow-2026|Alvarado-Cruz et al. (2026)]] geram cenários em vídeo com PixVerse, Grok Imagine e Pippit para três regimes de força resistiva — atrito constante, arrasto linear e arrasto quadrático —, extraem a cinemática com a ferramenta [[open-source|Tracker]] e ajustam os modelos analíticos por mínimos quadrados não lineares. Os dados sintéticos concordaram com as equações clássicas do movimento e recuperaram parâmetros fisicamente significativos, e o achado prático recorrente é que a especificidade do prompt governa a coerência física: descrições mais detalhadas produziram dinâmicas mais coerentes. O fluxo de trabalho espelha a prática experimental desde a construção do modelo até a validação [[quantitative-research|quantitativa]], e reformula a [[prompt-engineering|formulação do prompt]] como um estágio do desenho experimental, e não como uma conveniência. O que ele ainda não demonstra é aprendizagem: a validação aqui é a concordância entre o movimento gerado e os modelos dos autores, e não o julgamento de mensuração dos estudantes, de modo que a abordagem herda a questão de [[assessment-validity|validade]] que qualquer dado gerado usado como evidência precisa responder.

**Simulações sob medida para os tópicos que o PhET não cobre.** Modelos HTML/JavaScript gerados por LLM permitem aos instrutores produzir a simulação de que um curso precisa, em vez da publicada mais próxima, sujeitos a validação técnica e física; num piloto, 53 estudantes em 26 duplas construíram e refinaram seus modelos de queda livre sem necessidade de formação em programação ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025)]]).

Um prompt reutilizável de quatro elementos — ferramentas, exibição, controles manuais, otimização — permite que um professor sem código gere uma simulação de AR baseada em navegador cujos gestos de pinça e abertura dirigem a física; num piloto com 29 estudantes, o gesto ajudou todos os 29 a \"sentir\" o comprimento de onda (média 4,52) e 86% reportaram maior engajamento ([[genai-ar-physics-simulation-prompt-2026|Levy et al. (2026)]]).
**Instrumentação gerada por IA a partir de um prompt.** Um laboratório de rotação gerado por prompting em linguagem natural de um assistente de IA, sem codificação manual, mediu movimento circular uniforme e acelerado dentro de 1% da análise independente por vídeo com Tracker, permitindo aos instrutores construir a interface em torno de suas variáveis pedagógicas em vez de se adaptar a um app de sensores pré-compilado ([[ai-generated-smartphone-circular-motion-lab-2026|Suñer et al. (2026)]]).

**Desempenho assistido versus conhecimento sem ajuda num curso redesenhado.** Um redesign de 2026 do curso introdutório de física nuclear e de partículas da Ruhr University Bochum (Mikhasenko et al.) permitiu [[generative-ai|IA generativa]] em dez listas de lição de casa deliberadamente resistentes à IA e com formato de pesquisa, desenhadas para que o [[prompt-engineering|prompting]] ingênuo não bastasse. O [[student-engagement|engajamento]] e a ambição foram altos — 24 de 42 estudantes obtiveram crédito nas dez listas, e uma derivação preencheu mais de dois metros de quadro-negro —, mas um exame escrito sem ajuda de 90 minutos foi um \"aviso sério\": uma média de 20,6/80, com apenas dois dos 27 examinandos alcançando 40. Os autores concluem que desempenho assistido e conhecimento independentemente recuperável são conquistas distintas que não se pode presumir que treinem ou demonstrem uma à outra, e que cursos de física precisam reservar alguma prática para o trabalho sem ajuda — reforçando a evidência mais ampla da base de conhecimento sobre [[transfer-of-learning|transferência]].

Uma revisão PRISMA de 2026 com 11 estudos empíricos em seis países chega à mesma conclusão ao nível do campo: ganhos de curto prazo vindos de feedback e simulação por IA não persistiram em exames posteriores nem se transferiram para desempenho independente ([[ai-university-physics-education-review-2026|revisão da IA na educação em física universitária]]).

**O desenho de papéis do agente como variável instrucional.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] mantêm constantes o modelo (DeepSeek R1), a plataforma e a temperatura, e variam apenas o papel especificado no prompt: um agente centrado no professor que responde autoritativamente a partir de uma fonte de conhecimento de livro didático delimitada, versus um agente centrado no estudante configurado como professor empático com conhecimento da compreensão dos estudantes, roteirizado para diagnosticar a causa das [[misconceptions|concepções errôneas]], nomear o conceito relevente e transferir para um fenômeno análogo. Ao longo de 59 recém-formados do ensino médio trabalhando duas questões conceituais, o agente centrado no estudante produziu notas mais altas no pós-teste (9,67 vs. 7,93; r = 0,38), menor carga cognitiva extrínseca e maior carga cognitiva germânica, experiência de fluxo mais forte (d = 0,92) e maior percepção de empatia (r = 0,53) — evidência de que o enquadramento de papéis, e não apenas a acurácia das respostas, é o que torna um agente de física instrucionalmente eficaz ([[pedagogical-agent|agente pedagógico]], prompt-engineering).
- **As notas de benchmark subestimam o que os modelos já conseguem fazer em física.** Recorrigir seis benchmarks de física amplamente usados com especialistas de domínio descobriu que a maior parte da defasagem reportada era artefato de itens defeituosos e de corretores automatizados restritivos: de 250 rejeições auditadas, 143 (57,20%) eram defeitos do benchmark e 95 (38,00%) erros do corretor, com apenas 12 (4,80%) sendo erros genuínos do modelo. Corrigido, o mean@4 do HLE-Physics subiu de 47,28% para 78,66% e o CritPt de 32,29% para 87,50%. Para a instrução em física isso corta dos dois lados: significa que os estudantes já conseguem obter soluções textuais de nível especialista para muitos problemas canônicos, de modo que a avaliação do raciocínio em física precisa avançar rumo a itens que resistem à contaminação por benchmark e rumo a evidência de processo, em vez de respostas finais. ([[frontier-models-physics-benchmark-audit-2026]])
- **A correção por IA pode reproduzir um resultado de física de alto impacto sem acertar cada parte.** Corrigindo 10.364 páginas manuscritas de olimpíada e de universidade, um LLM multimodal recuperou o mesmo time de cinco estudantes da olimpíada que os examinadores e se correlacionou com os totais em r = 0,93–0,96, mas a concordância exata por parte de questão alcançou 70% — segunda leitura controlada pelo examinador, e não substituição ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).

- **Benchmarks de física podem ser fundamentados no currículo e não ser em inglês.** [[physicsmate-bengali-secondary-physics-benchmark-2026|Jahin et al. (2026)]] construíram 1.834 questões em bengali a partir do livro didático nacional de física do 9º e 10º anos e de um grafo de conhecimento de 1.760 nós; uma única receita fixa de fine-tuning ganhou 5,5, 15,0 e 23,3 pontos com 0,6B, 1,7B e 4B parâmetros.

### Conexões com conceitos relacionados

A educação em física se situa dentro do domínio mais amplo de [[stem-education|STEM]], mas tem conexões distintivas: ao [[socratic-method|método socrático]] por meio da forte tradição de diálogo socrático na resolução de problemas de física; ao [[computational-thinking|pensamento computacional]] pelo papel crescente da computação na física; à [[assessment-validity|validade de avaliação]] pelos desafios de corrigir explicações de física; e ao [[professional-training|treinamento profissional]] pela preparação baseada em [[simulation|simulação]]. Os conceitos de [[student-experience|experiência do estudante]] e [[ai-literacy|letramento em IA]] são essenciais para entender como estudantes de física navegam as ferramentas de IA, enquanto [[educational-measurement|mensuração educacional]] e [[automated-assessment|Correção Automatizada]] conectam-se à dimensão da avaliação.

## Implicações para instrutores de física

- **Desenhe para a confiança do estudante, não apenas para a adoção.** [[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]] documentam uma lacuna confiança–utilidade de 50 pontos (91% de uso, 41% de confiança), com os estudantes identificando falhas da IA no raciocínio visoespacial e em circuitos — crie oportunidades para expor e discutir esses limites, em vez de presumir aceitação.
- **Use a IA socrática para aprofundar a qualidade das questões, mas fique de olho na cessão estratégica.** [[hashmi-socratic-physics-chatbot-2025|Chatbots socráticos]] melhoram a especificidade das questões, mas a [[socratic-ai-physics-tutor-taxonomy-2026|pesquisa em taxonomia]] descobre que os turnos meta-procedimentais dominam — os estudantes entregam o controle estratégico ao tutor. Intervenha para manter os estudantes como tomadores de decisão.
- **Estruture o uso da IA cognitivamente, e não apenas permissivamente.** O [[airis-cognitively-activated-ai-physics-2026|AIRIS]] (Ativar–Investigar–Refletir) mostra o valor de fazer os estudantes preverem/delinearem antes da IA, delegarem passos computacionais enquanto comparam a saída criticamente e refletirem depois — trate a integração da IA como um problema de desenho instrucional, e teste se a aprendizagem sobrevive à remoção da IA. Num ensaio randomizado com 95 graduandos, 45 minutos de treinamento alinhado à autorregulação em problemas de mecânica elevaram a acurácia quando os estudantes depois revisaram itens de eletromagnetismo com um modelo: 69,3% de suas respostas incorretas tornaram-se corretas contra 41,3% dos controles não treinados (d = 0,81) ([[structured-genai-training-physics-problem-solving-rct-2026|Huang et al. (2026)]]).
- **Proteja-se contra o viés de correção.** A [[ai-scoring-language-bias-physics|correção por IA]] subestima sistematicamente as explicações de estudantes linguisticamente mais fracos; use correção sensível à língua ou moderada por humanos para a avaliação conceitual.
- **Use salas de aula simuladas para a preparação de professores.** [[multiagent-classroom-dual-process-physics-teachers-2026|Salas de aula multiagentes simuladas]] dão a futuros professores prática rara em responder ao raciocínio autêntico dos estudantes — um complemento de baixo custo à microensina ao vivo.
- **Reserve prática e avaliação sem ajuda.** O redesign de Bochum ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al. 2026]]) mostra que lições de casa com IA permitida e com formato de pesquisa, concluídas com alto engajamento, podem deixar os estudantes muito atrás num exame sem ajuda (média 20,6/80) — trate desempenho assistido e conhecimento independentemente recuperável como distintos, e construa no curso prática deliberada sem ajuda e um exame escrito.

- **Verifique a fidelidade do facilitador; mantenha a fase de construção do modelo livre de IA.** Pressionado para \"só nos dizer\" qual das latas pesava mais, um Gem configurado para o propósito inventou valores de massa que ninguém havia medido, de modo que a fidelidade de um facilitador baseado em linguagem precisa ser verificada, e não presumida, e a fase de construção livre de IA preserva o trabalho prático que a IA não consegue alcançar ([[embodied-inquiry-ai-facilitator-physics-2026|Tufino & Damiani (2026)]]).

## Conceitos conectados

- [[stem-education]]
- [[socratic-method]]
- [[intelligent-tutoring]]
- [[computational-thinking]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[student-experience]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[educational-measurement]]
- [[learning-analytics]]
- [[professional-training]]
- [[simulation]]
- [[generative-ai]]
- [[higher-ed]]
- [[discipline-specific-aied]]
- [[chemistry-education]] — Educação em química e IA: laboratórios, avaliação formativa, limites de LLM, filosofia da experimentação
- [[biology-education]] — Educação em biologia e IA: assistentes de laboratório, letramento em IA em biologia, pensamento crítico, ferramentas especializadas

## Artigos conectados

- [[genai-video-engineering-physics-workflow-2026]] — Dos prompts às leis físicas: um fluxo de trabalho de IA generativa para a educação em engenharia física
- [[wang-teacher-student-centered-agents-physics-2026]] — Agentes de física com engenharia de prompt centrados no professor vs. centrados no estudante (Wang et al. 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[benzion-ai-physics-simulations-virtual-lab]] — Usando IA para gerar rapidamente simulações de física / laboratórios virtuais (Ben-Zion et al. 2025)
- [[hashmi-socratic-physics-chatbot-2025]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]
- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[becker-chatgpt-typology-physics-2026]]
- [[llm-computational-thinking-physics-2026]]
- [[ai-scoring-language-bias-physics]]
- [[multiagent-classroom-dual-process-physics-teachers-2026]]
- [[physics-chatbot-epistemological-beliefs-2026]]
- [[ai-generated-smartphone-circular-motion-lab-2026]]
- [[genai-ar-physics-simulation-prompt-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[probing-ai-generated-physics-solutions-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: um framework para aumento cognitivamente ativado da IA em física
- [[ai-grading-handwritten-physics-2026]] — Correção por IA de avaliações manuscritas de física (Olimpíada)
- [[ai-particle-physics-education-redesign-2026]] — IA na educação em física de partículas: problemas de pesquisa e habilidades fundamentais
- [[mechanics-cognitive-diagnostic-physics-2026]] — Diagnóstico Cognitivo de Mecânica: transformando o FCI, o FMCE e o EMCS num diagnóstico cognitivo de 14 objetivos (Le et al. 2026)
- [[physics-students-llm-perceptions-instruction-2026]] — Ceticismo vs. conveniência: percepções e uso de LLMs por estudantes de física antes e depois da instrução
- [[context-prompts-physics-assignments-2026]] — Tarefas de física movidas por inteligência artificial usando prompts de contexto
- [[ai-assisted-physics-lab-report-assessment-2026]] — Avaliação assistida por IA de relatórios de laboratório de física experimental: potencial, limitações e apoio à prática de ensino
- [[physicsmate-bengali-secondary-physics-benchmark-2026]] — PhysicsMate: 1.834 pares de pergunta e resposta de física do ensino médio em bengali mapeados para um grafo curricular de 1.760 nós, com ganhos de adaptação de modelos pequenos
- [[ai-university-physics-education-review-2026]] — Inteligência artificial na educação em física universitária: uma revisão sistemática de estudos empíricos
- [[structured-genai-training-physics-problem-solving-rct-2026]] — Treinamento estruturado em GenAI para a revisão de problemas de física: um ensaio controlado randomizado (Huang et al. 2026)
