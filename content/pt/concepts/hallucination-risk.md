---
title: Risco de alucinação
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
source_updated: 2026-10-11T09:05:00-04:00
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Risco de alucinação** — o perigo de que sistemas de IA gerem conteúdo plausível, mas factualmente incorreto ou fabricado em contextos educacionais, onde tais erros podem enganar [[learners|quem aprene]], minar a [[trust|confiança]] e produzir avaliações inválidas. A alucinação é particularmente consequente na educação porque os estudantes podem não ter o conhecimento de domínio para detectar erros da IA, e os professores podem depender de diagnósticos ou feedback gerados por IA que parecem autoritativos, mas são infundados.

## Perguntas para refletir

- Os estudantes frequentemente não têm o conhecimento de domínio para detectar o erro de uma IA, e os professores podem confiar em diagnósticos de IA de som autoritativo. Como essa assimetria de conhecimento entre a IA e quem aprene torna a alucinação especialmente perigosa na educação?
- Um estudo concluiu que uma IA que diagnosticava a matemática escrita à mão dos estudantes podia fabricar citações de evidência que não estavam lá, ao mesmo tempo que afirmava confiança. Quando uma IA soa certa e cita \"evidências\", o que deveria fazê-lo parar e verificar?
- Se um [[intelligent-tutoring|tutor de IA]] supervalida soluções incorretas e rejeita demais raciocínios válidos, mas subótimos, qual seria o efeito de longo prazo sobre os estudantes e professores que confiam nele?
- A página sugere revisão humana no circuito, calibração de confiança ciente da evidência e fundamentação em fontes verificadas como mitigações. Qual delas parece mais viável no seu próprio contexto, e o que ela ainda poderia deixar de capturar?
- Como a alucinação poderia interagir com a dependência excessiva: por que um erro da IA é mais perigoso quando os usuários confiam na saída sem criticidade, e não quando estão céticos?
- Se você estivesse desenhando uma ferramenta de [[ai-feedback-quality|feedback por IA]] para seus estudantes, que salvaguardas específicas você exigiria para se proteger contra saídas plausíveis, mas erradas — e como você saberia que elas estão funcionando?

## Introdução

A alucinação na IA educacional assume várias formas documentadas nos artigos desta base de conhecimento: evidência fabricada na [[assessment|avaliação dos estudantes]], diagnóstico equivocado com excesso de confiança do conhecimento de quem aprene, e explicações de som plausível, mas incorretas, que os estudantes aceitam como verdade. O risco é amplificado na educação porque a assimetria de conhecimento entre a IA e quem aprene faz quem aprene estar mal posicionado para verificar as saídas da IA. Um contexto adicional são as leituras de curso geradas por IA que substituem um livro didático: em um curso de pós-graduação que substituiu seu texto comercial dessa forma, apenas cerca de 0,80% das 4.487 páginas registradas carregavam uma citação textual no estilo APA, e as strings de DOI estavam praticamente ausentes, de modo que a maioria das afirmações não podia ser auditada a partir de dentro do artefato ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]). Essa lacuna de rastreabilidade é distinta de uma resposta errada, porque o texto soa como autoritativo ao mesmo tempo que oferece meios internos limitados de confirmação.

Uma revisão de 125 estudos estabelece uma faixa para a prevalência e a lacuna de detecção: taxas de alucinação de 10–40%, com estudantes de medicina detectando erros da IA apenas 44–55% das vezes ([[genai-higher-education-systematic-review-2026|Rathnayake (2026)]]).

A **alucinação na avaliação** é particularmente danosa. O **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** concluiu que as LLMs fabricam citações de evidência não presentes na escrita à mão dos estudantes ao diagnosticar habilidades cognitivas, com 58,5% dos diagnósticos incorretos acompanhados de afirmações falsas de confiança evidencial. O **[[llm-fallacy-misattribution]]** documentou a sobre-atribuição sistemática de evidência no raciocínio de [[llm|LLMs]] — os modelos afirmam apoio evidencial onde não existe nenhum. Ambos se conectam a preocupações de [[ai-ed-evaluation|avaliação da IAED]] e de [[knowledge-tracing|rastreamento de conhecimento]] sobre [[assessment-validity|validade da avaliação]]. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] acrescentam dois modos de falha visíveis quando a saída da IA é corrigida em vez de inspecionada: detalhes fabricados que sobrevivem à correção — um artigo revisado que não existe, completo com um DOI irresolúvel, e um tamanho de amostra relatado como 378 onde a fonte dizia 329 — e autocontradição dentro de uma única resposta, em que o modelo raciocinou até a opção correta e depois relatou outra em seu resumo final. Como as listas de referências são atualmente corrigidas pela formatação, e não pela precisão, essa classe de erro alcança nota de aprovação enquanto engana o estudante que usa a mesma ferramenta para revisar.

Em um piloto de desenho de avaliação, [[authentic-assessments-generative-ai-pilot-2026|Paula et al. (2026)]] encontraram referências fabricadas e estimativas de tempo irrealistas que sobreviveram a repetidos prompting e exigiram revisão acadêmica substancial — alucinação em uma ferramenta de rascunho voltada ao educador, e não no trabalho do estudante.

Os **[[misconceptions|equívocos]] estratégicos** são um parente mais sutil da alucinação declarada. [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] fizeram prompting em sete modelos de pesos abertos para produzir uma \"armadilha [[socratic-method|socrática]]\" para 35 conceitos centrais de ciência da computação — uma explicação fluente e autoritativa que repousa sobre um erro sutil e específico do domínio — e três especialistas de domínio confirmaram 221 de 241 segmentos elicitados (91,7%) como equívocos estratégicos, sem diferenças significativas entre domínios de computação. Os erros eram predominantemente conceituais, e não factuais (66,5% contra 33,5%), e nenhum era puramente lógico, e foram avaliados como moderada a altamente persuasivos (M = 3,71 em uma escala de cinco pontos), com a identidade do modelo explicando 43% da variância. Como afirmações individuais podem estar corretas enquanto a relação entre elas está errada, a verificação factual é insuficiente; os autores argumentam que os [[ai-literacy|aprendentes]] precisam de verificação conceitual e validação de modelo mental. Eles também alertam que a taxa mede a capacidade sob [[prompt-engineering|prompting]] adversarial, e não a prevalência de tais erros no uso comum, e que nenhum estudante foi testado, então nenhum engano ou resultado de aprendizagem foi medido.

**Evidência manipulada, e não fabricada.** Um modo de falha relacionado na [[automated-assessment|correção automatizada]] é a saída movida de fora. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] fez red team de um fluxo rotineiro de correção por IA e concluiu que instruções escondidas dentro do arquivo submetido elevaram a nota de uma redação reprovada sem aviso visível em 9 de 9 iterações para uma estratégia e 17 de 18 para outra. Dois detalhes importam para a [[trust-calibration|confiança]]: uma injeção detectada foi bloqueada ao desabilitar silenciosamente o chat e nunca foi relatada ao usuário, e, em uma execução em que a ferramenta anunciou que seguiria apenas as instruções oficiais da tarefa, seis reexecuções do mesmo arquivo ainda elevaram a nota. Uma nota obtida dessa forma não carrega nenhuma reivindicação de [[assessment-validity|validade]], e, como a manipulação não deixa rastro duradouro, o [[human-in-the-loop-ai|instrutor]] permanece como o único controle real sobre uma saída desenhada para não ser visível.

Defesas contra tal manipulação carregam seu próprio trade-off: um pipeline de barreiras de proteção de múltiplas camadas deixou 46,34% das injeções bem-sucedidas e o Prompt Guard 38,48%, enquanto o NeMo Guardrails bloqueou todo ataque, mas sinalizou 16,22% das consultas benignas de estudantes — uma taxa de falsos positivos que é, ela mesma, dano pedagógico em um tutor ([[prompt-injection-defenses-educational-llm-tutors|Maiorano (2026)]]).

A **alucinação na tutoria** afeta a aprendizagem diretamente. O **[[yasir-llm-tutoring-agents-2026]]** concluiu que as LLMs supervalidadam soluções incorretas ao mesmo tempo que rejeitam demais raciocínios válidos, mas subótimos — falhas sistêmicas que enganariam tanto estudantes quanto professores. O **[[eduframetrap-llm-sycophancy-educational-safety]]** e o **[[eduguard-safe-rag-llm-tutor]]** tratam de mecanismos de segurança para LLMs educacionais. Esses riscos se conectam à [[pedagogical-safety|segurança pedagógica]] e às exigências de [[human-in-the-loop-ai|humano no circuito]].

As **abordagens de mitigação** incluem desenhos de [[human-in-the-loop-ai|humano no circuito]] em que a IA apoia, em vez de substituir, o julgamento do [[teacher-role|professor]], arquiteturas cientes da evidência que calibram a confiança com base na qualidade evidencial (como defende o MathCog), e fundamentação baseada em [[rag|RAG]] que restringe as saídas das LLMs a fontes verificadas. O conceito de [[cognitive-offloading|dependência excessiva]] está intimamente relacionado — a alucinação é mais perigosa quando os usuários confiam nas saídas da IA sem criticidade. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]] acrescenta um modo de falha que a pilha de mitigação não cobre plenamente: afirmações institucionais excessivamente específicas, com cerca de 1,03% das páginas registradas pareando um campus nomeado, como \"Sacramento State\", com verbos assertivos de política sobre regras revisadas de retenção, tenure e promoção ou Ordens Executivas da CSU, nenhuma delas verificável a partir do texto. A especificidade é o que torna isso custoso, já que um detalhe local fabricado parece exato o bastante para sobreviver à verificação de plausibilidade de um leitor, e o remédio que o estudo propõe é processual, e não técnico: tratar a geração como produção de rascunho sob revisão do instrutor, e depois curar as fontes para um desenho aumentado por recuperação.

## Conceitos conectados

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]
## Artigos conectados
- [[ivory-psychology-assessment-integrity-2026]] — Citações fabricadas e saídas autocontraditórias dentro de trabalho estudantil aprovável (Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: explicações fluentemente plausíveis que estão erradas no nível conceitual (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Injeções de prompt escondidas elevam notas corrigidas por IA sem serem detectadas, e ataques detectados não são relatados (Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — Desenhando Avaliações Autênticas com IA Generativa: Um Estudo Piloto de Autenticidade da Avaliação no Ensino Superior

**Labeled unreliability lowered reported dependence rather than raising it.** When 546 participants read the same GAI dialogue labeled either as containing fabricated information or as verified accurate, the fabricated label produced lower [[trust]] and perceived controllability and higher cognitive dissonance and frustration alongside *lower* dependence scores (M = 2.935 vs. 3.254) ([[frontiers-gai-hallucination-dependence-2026|Liu et al. (2026)]]). The result qualifies this page's over-reliance logic: seeing that an output may be fabricated is not the same as continuing to lean on it.
- [[frontiers-gai-hallucination-dependence-2026]] — Labeling a GAI dialogue as fabricated lowered trust and dependence together
