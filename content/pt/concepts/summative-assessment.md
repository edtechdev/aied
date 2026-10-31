---
title: "Avaliação somativa"
created: "2026-08-19T17:30:00-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/summative-assessment
source_updated: "2026-10-26T08:45:00-04:00"
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

> A **avaliação somativa** — avaliação usada para avaliar e certificar o que quem aprende aprendeu ao final de uma unidade, curso ou programa, em contraste com a [[formative-assessment|avaliação formativa]], que apoia a aprendizagem durante a instrução. A avaliação somativa tipicamente toma a forma de provas de alto impacto — escritas, orais, supervisionadas ou sem consulta — que atribuem notas, controlam a progressão e certificam competência. Na era da IA, a avaliação somativa se tornou um campo de batalha central sobre [[academic-integrity|integridade acadêmica]] e validade: a [[generative-ai|IA generativa]] pode inflar o desempenho em tarefas não supervisionadas ou para fazer em casa, tornando a escolha do formato somativo — e como ele resiste à substituição por IA — uma decisão de design pivotal.

## Perguntas para considerar

- A avaliação somativa certifica o que um estudante aprendeu ao final de um curso, enquanto a avaliação formativa apoia a aprendizagem durante ele. Onde você já viu a linha entre as duas se borrar, e por que poderia importar que elas cumpram funções diferentes?
- A página enquadra a IA generativa como remodelando a avaliação somativa em duas direções ao mesmo tempo: a IA corrige provas, e estudantes usam IA para escapar da medição baseada em provas. Qual dessas duas pressões você acha que é a maior ameaça à validade, e por quê?
- Se tarefas não supervisionadas ou para fazer em casa perdem validade porque a IA consegue produzir as respostas, o que isso implica para como as avaliações deveriam ser projetadas — e o que poderia ser sacrificado no processo?
- A [[research-methods-aied|pesquisa]] citada na página conclui que LLMs não corrigem redações do mesmo modo que humanos. Se a pontuação automatizada é rápida e consistente, mas dá notas de forma diferente, isso é um problema de [[bias-mitigation|justiça]], uma oportunidade, ou ambos?
- O que significa um resultado de alto impacto (uma nota, uma credencial, admissão) se o trabalho por trás dele poderia ter sido produzido por IA? Como você projetaria uma avaliação em que realmente conseguisse confiar?

## Introdução

A avaliação somativa cumpre uma função fundamentalmente diferente da formativa: ela mede e certifica desempenho em vez de orientar os próximos passos. Ela inclui testes de fim de unidade, provas finais, testes padronizados e de alto impacto (por exemplo, provas de vestibular), defesas orais e avaliações de desempenho cumulativas. Como os resultados somativos carregam consequências reais (notas, progressão, credenciais, admissão universitária), eles enfrentam pressões particulares na era da IA — tanto como *alvos* da pontuação automatizada quanto como medidas *vulneráveis* que estudantes podem tentar burlar usando IA generativa.

## As apostas na era da IA: validade e integridade
A pesquisa da base de conhecimento documenta como a IA generativa remodelou fundamentalmente o cenário da avaliação somativa em duas direções: a IA é usada para **corrigir** provas em escala, e a IA pode ser usada por estudantes para **escapar** da medição baseada em provas de sua própria aprendizagem.

- **A IA como corretora.** A avaliação somativa depende crescentemente da [[automated-assessment|pontuação automatizada]] de provas, redações e respostas curtas. A [[llms-do-not-grade-essays-like-humans-2026|pesquisa sobre correção de redações por LLM]] conclui que [[llm|LLMs]] não corrigem redações do mesmo modo que humanos, levantando questões de validade e justiça para a pontuação automatizada de alto impacto. A [[llm-automated-assessment-student-self-explanations|avaliação por LLMs das autoexplicações dos estudantes]] e a [[cong-confidence-asag-2026|correção automática de respostas curtas]] exploram a confiabilidade da pontuação por LLM em contextos somativos, enquanto [[psyscore-essay-scoring-zpd-feedback|frameworks psicometricamente conscientes]] buscam manter a pontuação automatizada confiável e adaptativa. Uma prova manuscrita de química geral com 296 estudantes ilustra por que a supervisão seletiva é exigida: a concordância de nota total de um LLM multimodal com a correção por monitores foi alta (R² = 0,91), mas a confiabilidade no nível do item variou acentuadamente por formato, e falsos positivos (a IA creditando respostas genuinamente erradas) tendem a passar não detectados porque estudantes raramente os contestam — de modo que um corretor uniforme por IA do tipo "corrija tudo" não é defensável para uso de alto impacto sem adiamento baseado em confiança para humanos ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **A concordância de desfechos pode sobreviver à pontuação imprecisa de itens.** Contra as notas oficiais moderadas, um LLM multimodal corrigindo 10.364 páginas manuscritas da Olimpíada de Física e da universidade correlacionou-se em r = 0,93–0,96 e recuperou a mesma equipe internacional de cinco estudantes, embora a concordância exata nas partes das questões tenha chegado a 70% — um corretor é julgado pelas decisões que ele informa ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **A IA como escapatória.** Como a IA generativa consegue produzir respostas a questões escritas, tarefas somativas não supervisionadas e para fazer em casa perdem validade: [[generative-ai-reduced-study-time-math|medidas supervisionadas e sem auxílio são essenciais]] porque o desempenho não supervisionado é inflado pela IA, e [[generative-ai-guardrails-harm-learning|ferramentas com guarda-corpos (dica em vez de resposta)]] podem eliminar a penalidade em provas que a IA sem proteções causa. O [[chirikov-ai-grade-inflation-2026|quase experimento de Chirikov (2026)]] sobre mais de 500.000 notas torna o mecanismo concreto: após o lançamento do ChatGPT, cursos com mais tarefas expostas à IA viram a fatia de notas A subir em 13 pontos percentuais, e o efeito se concentrou em **cursos pesados em lições de casa** (mais 16 pp na estimativa de diferenças-triplas) — evidência direta de que é nas lições de casa não supervisionadas, e não em [[learning-gains|ganhos de aprendizagem]] genuínos, que a IA infla os resultados somativos.
- **Estudantes não conseguem identificar de forma confiável itens redigidos por IA.** Em uma prova de Medicina de Família valendo crédito, [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] não encontraram diferença significativa na atribuição de fonte entre 30 itens de múltipla escolha gerados por IA e 30 itens de exame de licenciamento, com reconhecimento correto médio de 68,6 a 77,5 por cento e 18,2 por cento dos itens gerados eliminados na [[human-in-the-loop-ai|revisão humana]].
- **Provas geradas por IA.** O [[assessing-quality-ai-generated-exams-field-2025|estudo de campo em larga escala]] e a [[ai-vs-human-assessment-efl-tpck-2026|pesquisa em avaliação em EFL]] examinam se a IA consegue *gerar* provas e tarefas de avaliação de alta qualidade — um uso emergente de design somativo da IA.

## Formatos somativos resistentes à IA

Um tema-chave na base de conhecimento é que o **formato somativo determina a resistência à IA** — quanto mais uma tarefa exige desempenho ao vivo, presencial e sondado individualmente, mais difícil é para estudantes substituírem a IA por sua própria aprendizagem.

- **Provas orais e avaliações.** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] argumenta que a prova oral é um formato somativo de baixa tecnologia e inerentemente resistente à IA: seu diálogo interativo em tempo real testa compreensão, [[critical-thinking|pensamento crítico]] e raciocínio em vez de memorização, impede estudantes de usar IA para gerar e memorizar respostas, e espelha a prática profissional. Os [[socratic-tests-conversational-assessment|testes socráticos]] e as [[code-review-genai-cs1|entrevistas de revisão de código]] estendem isso à avaliação somativa dinâmica, conversacional e baseada em entrevista.
- **Medidas sem consulta, supervisionadas e sem auxílio.** A [[generative-ai-reduced-study-time-math|evidência]] e os [[stromberg-generative-ai-learning-penalty-secondary-2026|dados de campo em larga escala]] mostram que provas supervisionadas e sem consulta — não lições de casa infladas ou trabalhos para fazer em casa — são o sinal confiável da aprendizagem real quando estudantes usam IA. Frameworks de [[responsible-assessment-ai-era-stanford-2026|avaliação responsável]] incorporam essas medidas sem auxílio dentro de um redesenho movido pela validade. Onde as provas permanecem on-line, a [[remote-proctoring|supervisão remota]] assume esse papel, e as duas revisões do corpus sobre supervisão automatizada de provas encontram preocupações de privacidade e de [[bias-mitigation|justiça]] ao lado de ganhos de detecção ([[automated-online-exam-proctoring-decade-review-2026]], [[academic-dishonesty-automated-proctoring-ai-2026]]).

- **Pareie uma tarefa vulnerável com um gêmeo confirmador.** [[roe-assessment-twins-2026|Roe, Perkins e Giray (2026)]] mantêm uma tarefa vulnerável à IA generativa por seu valor de aprendizagem, mas a pareiam com uma segunda tarefa que avalia os mesmos desfechos, tornando a nota interdependente por meio de um limiar confirmatório ou de uma ponderação, de modo que o gêmeo certifica o resultado.

## Avaliação somativa e padronizada de alto impacto

A avaliação somativa de alto impacto — provas de vestibular, testes padronizados e certificação — carrega consequências desproporcionais e é um foco de preocupação na era da IA. O [[stromberg-generative-ai-learning-penalty-secondary-2026|estudo da penalidade de aprendizagem da IA generativa]] mediu desfechos em provas de vestibular de ensino médio (Zhongkao) e de faculdade (Gaokao), concluindo que as notas nessas provas caíram 18–24% após uso prolongado de IA. A [[brcic-effortless-trap-productive-struggle-2026|Armadilha Sem Esforço]] e a [[genai-performance-vs-learning|pesquisa desempenho-versus-aprendizagem]] alertam que ganhos em tarefas assistidas por IA não se transferem para medidas de alto impacto sem auxílio.

## Somativa versus formativa na era da IA

A literatura de avaliação da base de conhecimento enfatiza consistentemente que a [[assessment|avaliação]] é mais eficaz quando combina funções [[formative-assessment|formativas]] e somativas — mas a era da IA aguça a distinção. Como a IA infla o desempenho em tarefas de baixa aposta, não supervisionadas e com processo oculto, as **medidas somativas (especialmente supervisionadas, sem consulta e presenciais) se tornam a verificação crucial** de se a aprendizagem de fato ocorreu. Isso motiva o redesenho da avaliação que mantém tarefas somativas autênticas e resistentes à IA (provas orais, entrevistas de revisão de código, provas supervisionadas, [[eportfolio|portfólios]] baseados em processo) como âncora da [[academic-integrity|integridade]], ao mesmo tempo que usa a avaliação formativa para apoiar a aprendizagem ao longo do caminho. Veja [[authentic-assessment|avaliação autêntica]] para a resposta construtiva de design.

## Implicações para a IA na educação

- **O formato somativo é uma alavanca de validade e integridade:** formatos somativos resistentes à IA (oral, supervisionado, sem consulta, presencial) preservam a conexão entre desempenho avaliado e aprendizagem real.
- **As medidas supervisionadas e sem auxílio são o sinal confiável:** quando estudantes usam IA, provas somativas sem auxílio — não lições de casa — revelam a aprendizagem genuína.
- **A pontuação automatizada precisa de escrutínio psicométrico:** usar LLMs para corrigir provas de alto impacto exige avaliação de confiabilidade, justiça e validade, e não apenas de acurácia.
- O erro de correção também depende da nota: ao longo de 32 submissões de prova de saúde pública, os LLMs evitaram as extremidades da escala — nenhum E ou F apareceu no modo rápido —, enquanto o melhor modelo acertou exatamente a nota humana em 50,0% e dentro de ±1 nota em 90,6% ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **A IA também pode gerar provas:** a geração assistida por IA de provas e tarefas é uma aplicação emergente de design somativo que ela mesma precisa de avaliação de qualidade.
- **Reconsidere o propósito da nota, não apenas o formato.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais e Galy (2026)]] criticam a nota tradicional, somativa e referenciada a norma por encorajar aprendizagem superficial e fragmentada, dar pouco controle ou transparência aos estudantes, prejudicar a [[motivation|motivação]] intrínseca, alimentar estresse e [[well-being|ansiedade]], e perpetuar iniquidades, ao mesmo tempo que avalia em grande parte memorização em vez de aplicação no mundo real. Eles posicionam a reavaliação, a [[mastery-learning|nota baseada em padrões]] e o *ungrading* como inovações focadas na nota que podem amenizar a prática pesada em avaliação somativa, ao mesmo tempo que reconhecem que elas permanecem marginais na educação em gestão por causa de barreiras normativas — nota na curva, sinalização externa (rankings, estágios, acreditação) e mentalidade instrumental dos estudantes — e recomendam experimentação incremental com apoio institucional.

## Ideias equivocadas comuns

- **"Um LLM não consegue corrigir segundo padrões oficiais."** Contra **notas oficiais moderadas**, um LLM multimodal que corrigiu **10.364 páginas manuscritas** de Olimpíada de Física e de universidade correlacionou-se fortemente. A concordância de desfechos pode sobreviver à pontuação imprecisa no nível do item — o que significa que a pergunta útil é onde a precisão no nível do item é de fato exigida.
- **"A inflação de notas por IA é especulação."** O quase experimento de [[chirikov-ai-grade-inflation-2026|Chirikov (2026)]] sobre **mais de 500.000 notas** torna o mecanismo concreto: após o lançamento do ChatGPT, **cursos com mais tarefas expostas à IA viram a fatia de notas mais altas subir**. O efeito se concentrou onde as tarefas estavam expostas, que é o padrão que um mecanismo preveria.
- **"Estudantes que usam IA não podem ser distinguidos dos que não usam, então a proveniência é uma causa perdida."** O achado de que **não houve diferença significativa na atribuição de fonte** entre itens gerados por IA e itens de exame de licenciamento, com reconhecimento correto de **68,6-77,5 por cento** e uma taxa de atribuição incorreta de **18,2 por cento**, é sobre o reconhecimento falhando — não sobre a proveniência ser desnecessária. Se algo, ele eleva a exigência de proveniência verificada.

## Conceitos conectados

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## Artigos conectados
- [[llm-grading-assistants-public-health-2026]] — Corretores com LLM comprimem a escala de notas e evitam as extremidades na avaliação de redações de alto impacto

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsiderando as provas orais como avaliação somativa autêntica e resistente à IA
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — A penalidade de aprendizagem da IA generativa: evidência de provas supervisionadas e sem consulta
- [[chirikov-ai-grade-inflation-2026]] — O deslocamento de tarefas para a IA como mecanismo de inflação de notas; cursos pesados em lições de casa (Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — Conclusão mais rápida, menos aprendizagem: medidas supervisionadas essenciais
- [[generative-ai-guardrails-harm-learning]] — A IA generativa sem guarda-corpos prejudica a aprendizagem
- [[assessing-quality-ai-generated-exams-field-2025]] — Avaliando a qualidade de provas geradas por IA
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs não corrigem redações como humanos
- [[llm-automated-assessment-student-self-explanations]] — LLMs para avaliação automatizada das autoexplicações dos estudantes
- [[cong-confidence-asag-2026]] — Correção automática de respostas curtas
- [[psyscore-essay-scoring-zpd-feedback]] — Pontuação de redações psicometricamente consciente e adaptativa por traços
- [[socratic-tests-conversational-assessment]] — Testes socráticos: avaliação dinâmica, conversacional e multimodal
- [[code-review-genai-cs1]] — Entrevistas de revisão de código em CS1
- [[responsible-assessment-ai-era-stanford-2026]] — Avaliação responsável na era da IA
- [[test-driven-ai-assisted-learning]] — Aprendizagem assistida por IA dirigida a testes
- [[genai-oop-programming-assessments-2026]] — Desempenho da IA generativa em avaliações de programação orientada a objetos
- [[brcic-effortless-trap-productive-struggle-2026]] — A Armadilha Sem Esforço: luta produtiva e a ilusão de aprendizagem
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tarefas de avaliação geradas por IA versus desenvolvidas por humanos em EFL
- [[roe-assessment-twins-2026]] — Gêmeos de avaliação para fortalecer a validade da avaliação na era da IA generativa (Roe, Perkins e Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — Correção por IA de avaliações manuscritas de física (Olimpíada)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Estudantes não conseguem identificar de forma confiável itens redigidos por IA
