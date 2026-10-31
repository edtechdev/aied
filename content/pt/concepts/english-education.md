---
title: "Ensino de inglês (EAP / EFL / ESL)"
created: "2026-08-21T12:30:00-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [academic-integrity]
technology: [generative-ai]
assessment: [ai-feedback-quality, automated-assessment]
ethics: [equity-in-ai-education]
discipline: [english education, language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/english-education
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

> **Ensino de inglês** — a aplicação da IA ao [[teacher-role|ensino]] e à aprendizagem do inglês, especialmente **Inglês para Fins Acadêmicos (EAP, English for Academic Purposes)** e o ensino de língua inglesa de forma mais ampla (EFL/ESL/L2). Esta é uma vertente [[discipline-specific-aied|específica de disciplina]] de [[ai-education|AIEd]], distinta tanto da [[language-learning|aprendizagem de línguas]] em geral (aquisição de segunda/estrangeira língua em qualquer idioma) quanto da [[writing-education|educação em escrita]] (a escrita como competência geral): ela se centra no inglês como língua-alvo e registro acadêmico, com pedagogias próprias — competência comunicativa, escrita acadêmica baseada em gêneros, feedback corretivo e leitura/escrita em registro acadêmico — que moldam como a IA é desenhada, usada e avaliada.

## Questões para considerar

- O inglês é a língua que os grandes modelos de linguagem dominam melhor. Isso dá a quem aprende inglês andaimes poderosos para a escrita acadêmica — mas poderia também entrincheirar silenciosamente um viés em favor do inglês acadêmico padrão que marginaliza quem escreve em contexto [[multilingual-learning|multilíngue]] e em variedades do inglês (World Englishes)? Qual desses resultados você acha que domina?
- O Inglês para Fins Acadêmicos (EAP) se centra na escrita acadêmica baseada em gêneros, no feedback corretivo e no registro acadêmico — distinto da aprendizagem geral de línguas ou do ensino geral de escrita. Por que o registro específico do inglês acadêmico poderia mudar o que as ferramentas de IA precisam fazer, em comparação com um apoio genérico à escrita?
- Se a IA que revisa seu inglês é ela própria mais forte justamente no "inglês acadêmico padrão" que você tenta dominar, quando isso ajuda e quando achata sua própria voz ou dialeto? Como você distinguiria uma coisa da outra?
- Feedback automatizado e tutores de IA são cada vez mais comuns no ensino de escrita e fala em inglês. O que o feedback de IA pode perder sobre competência comunicativa, registro e público que um instrutor humano ou um par captaria?

## Introdução

O inglês é uma das vertentes disciplinares mais afetadas pela IA porque os [[llm|LLMs]] são dominantes em inglês: eles são mais fortes em gerar, revisar e avaliar texto em inglês, que é exatamente o foco da instrução em EAP e EFL/ESL. Essa vantagem do inglês cria uma dupla face distintiva — andaimes [[scaffolding|andaimes]] poderosos para o inglês acadêmico, de um lado, e um viés entrincheirado em favor do inglês acadêmico padrão que pode marginalizar quem aprende em contexto multilíngue, do outro.

## Escopo e foco

Este conceito organiza a [[research-methods-aied|pesquisa]] sobre IA no **ensino de inglês** — o subconjunto da aprendizagem de línguas em que a língua-alvo é o inglês (incluindo contextos de EFL/ESL/L2) e o registro do inglês acadêmico (EAP). Temas centrais:

- **Inglês acadêmico (EAP):** apoio de IA ao inglês baseado em gêneros e específico de disciplina usado na escrita, leitura e feedback do ensino superior — distinto do ensino geral de escrita.
- **Ensino de língua inglesa (EFL/ESL/L2):** [[intelligent-tutoring|tutores de IA]], interlocutores e ferramentas de [[feedback|feedback]] para quem está adquirindo inglês.
- **[[assessment|Avaliação]] específica do inglês:** avaliação e feedback automatizados sobre escrita e fala em inglês, incluindo revisão de escrita em EAP e avaliação de escrita em L2.
- **Legibilidade de leitura e literatura:** [[bird-multimodal-educational-literature-2026|Bird (2026)]] funde classificação de texto por transformers com atributos da linguística computacional para classificar literatura inglesa por Key Stage do Reino Unido, alcançando F1 de 0,996 — um complemento escalável e orientado por dados ao apoio à leitura baseado em gêneros do EAP e ao alinhamento por nível de leitura.
- **Equidade linguística:** a tensão entre a dominância do inglês na IA e as necessidades de quem escreve em contexto multilíngue e em variedades do inglês.

## Como o ensino de inglês difere da aprendizagem de línguas

A [[language-learning|aprendizagem de línguas]] é o guarda-chuva mais amplo para adquirir qualquer segunda/estrangeira língua — falada, escrita e letrada — via interlocutores de IA, ferramentas de pronúncia e prática conversacional. O ensino de inglês é o caso **específico do inglês**, e dentro dele o EAP é um caso **específico de registro**:

| Dimensão | [[language-learning|Aprendizagem de línguas]] | **Ensino de inglês (esta página)** |
|-----------|----------------------|-----------------------------------|
| Língua-alvo | Qualquer L2 (francês, espanhol, japonês, …) | Inglês especificamente |
| Foco | Aquisição de L2 em geral: diálogo falado, pronúncia, letramento | Inglês como língua-alvo + o registro do inglês acadêmico |
| Contextos característicos | Conversação, pronúncia, fluência geral | **EAP**: escrita acadêmica, leitura, feedback, gênero |
| IA representativa | Interlocutores de L2, [[speech-and-voice-technologies|feedback de pronúncia]], L2 assistido por robô | Ferramentas de escrita EAP, feedback entre pares em EFL, avaliação de escrita acadêmica em inglês |

Os dois se sobrepõem fortemente (a maior parte da aprendizagem de inglês também é aquisição de L2), mas o ensino de inglês coloca o inglês como língua-alvo e o registro acadêmico em primeiro plano — por exemplo, [[alharbi-ethical-genai-eap-2026|a integração ética de IA generativa no EAP]], [[feedback-literacy-scripts-eap-writing|a revisão de escrita EAP com IA generativa]] e [[genai-differentiated-eap-reading-materials-2026|a adaptação de materiais de leitura para EAP]] são específicos do EAP de formas que a pesquisa genérica em aprendizagem de línguas não é.

## Como o ensino de inglês difere da educação em escrita

A [[writing-education|educação em escrita]] trata da escrita como competência cognitiva e retórica geral — em todas as línguas e disciplinas, da composição à integridade acadêmica. O ensino de inglês foca especificamente no **inglês** e, dentro do EAP, no **registro acadêmico**:

| Dimensão | [[writing-education|Educação em escrita]] | **Ensino de inglês (esta página)** |
|-----------|----------------------|-----------------------------------|
| Escopo | A escrita em geral (qualquer língua, qualquer gênero) | Inglês como língua-alvo + registro do inglês acadêmico |
| Preocupação característica | Composição, revisão, [[agency|agência]], autoria | Gênero EAP, registro acadêmico, escrita em L2/EFL, [[feedback-literacy|letramento em feedback]] em inglês |
| Ângulo de avaliação | [[automated-essay-scoring|Correção automatizada de redações]], feedback de escrita em geral | Avaliação específica do inglês (escrita EAP, [[peer-assessment|feedback entre pares]] em EFL, avaliação de escrita em L2) |
| Ângulo de equidade | Viés no feedback de escrita | Viés + a tensão entre dominância do inglês e multilinguismo (World Englishes) |

Muitos artigos de educação em escrita são inglês-primeiro (por exemplo, [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]), mas são enquadrados como pesquisa geral em escrita; o ensino de inglês recoloca no centro as dimensões de **inglês-como-alvo** e **inglês acadêmico** que as páginas genéricas de escrita e de aprendizagem de línguas subenfatizam.

## Artigos deste cluster

- **Específicos de EAP:** [[alharbi-ethical-genai-eap-2026|Integração ética de IA generativa no EAP]], [[feedback-literacy-scripts-eap-writing|Revisão de escrita EAP com IA generativa]], [[genai-differentiated-eap-reading-materials-2026|Adaptação de materiais de leitura para EAP]].
- **EFL/ESL/L2:** [[tact-pedagogically-adaptive-esl-tutoring|Tutoria ESL TACT]], [[sutama-chatgpt-eportfolio-speaking-2026|Portfólio eletrônico de fala com ChatGPT em EFL]], [[irwin-muller-efl-peer-feedback-literacy|Letramento em feedback entre pares em EFL]], [[ai-vs-human-assessment-efl-tpck-2026|Avaliação em EFL: IA vs. humana]], [[acceptance-ai-english-tools-2026|aceitação de ferramentas de IA para inglês]], [[ai-tools-arab-english-classrooms|Ferramentas de IA em salas de inglês de universidades árabes]], [[zhao-ji-appraisal-human-ai-revisions-2026|análise de apreciação de revisões por pares e por IA de redações argumentativas em EFL]].
- **Escrita/avaliação em inglês L2:** [[self-referential-l2-writing-llm-assessment|Avaliação de escrita em L2 autorreferencial]], [[ai-interlocutor-l2-spoken-dialogue|Interlocutores de diálogo falado em L2]].
- **Equidade linguística / World Englishes:** [[genai-linguistic-diversity-academic-writing|IA generativa e diversidade linguística na escrita acadêmica]], [[governing-unseen-ai-literacy-language-teachers-2026|Letramento em IA entre professores de línguas]], [[structural-silence-underrepresented-language-ai-2026|Línguas sub-representadas na infraestrutura de IA]].

## Por que importa

A dominância do inglês na IA é uma característica definidora desta vertente. Como os modelos são mais fortes em inglês e especificamente no inglês acadêmico padrão, o ensino de inglês se beneficia desproporcionalmente (andaimes poderosos para EAP) e carrega riscos distintivos (viés monolíngue, discriminação contra variedades do inglês e contra quem escreve em contexto multilíngue). A pesquisa aqui se conecta a [[equity-in-ai-education|equidade]], [[bias-mitigation|mitigação de viés]], [[automated-assessment|avaliação automatizada]], [[ai-feedback-quality|qualidade do feedback de IA]] e [[academic-integrity|integridade acadêmica]].

Uma síntese baseada na Scopus de 54 estudos de EFL situa as [[limitations-in-aied-research|limitações]] mais relatadas do campo na autonomia de quem aprende: [[cognitive-offloading|dependência excessiva]] da IA em 27 estudos (50%) e redução do [[critical-thinking|pensamento crítico]] em 25 (46%), contra resultados gerados por IA não confiáveis em 22 (41%) como o principal problema técnico ([[ai-limitations-efl-higher-education-review-2026|Espinoza-Celi & Vargas-Saritama (2026)]]).

## Implicações para instrutores de inglês / EAP / EFL-ESL

- **Explore deliberadamente a força da IA para o inglês acadêmico.** Como os modelos são mais fortes em inglês e no inglês acadêmico padrão, instrutores de EAP podem empregar IA para escrita baseada em gêneros, diferenciação de materiais de leitura ([[genai-differentiated-eap-reading-materials-2026|materiais EAP]]) e feedback de revisão — mas devem enquadrar a IA como parceira de rascunho/feedback, não como um motor de respostas.
- **Proteja o registro do inglês acadêmico e o letramento em feedback.** A [[feedback-literacy-scripts-eap-writing|revisão de escrita EAP]] mostra que o feedback é tão produtivo quanto o letramento em feedback de quem aprende — ensine os estudantes a interpretar, julgar e agir sobre o feedback da IA, e use mecanismos de segundo corretor para verificar a qualidade da IA.
- **Observe a tensão de equidade da dominância do inglês.** Os modelos privilegiam o inglês acadêmico padrão, marginalizando variedades do inglês e quem escreve em contexto multilíngue ([[genai-linguistic-diversity-academic-writing|World Englishes]], [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]) — audite o feedback por viés monolíngue e expectativas rebaixadas.
- **Integre a IA ao EAP de forma ética.** [[alharbi-ethical-genai-eap-2026|IA generativa ética no EAP]] pede uso transparente e responsável no ensino de inglês no [[higher-ed|ensino superior]] que preserve a integridade acadêmica.
- **Espere uma adoção cautelosa, com preparação primeiro.** Uma [[li-language-educators-genai-review-2026|revisão sistemática de 23 estudos]] (Li et al. 2026) conclui que educadores de línguas valorizam mais a [[generative-ai|IA generativa]] para a preparação nos bastidores — planejamento de aulas, criação de materiais e apoio/feedback de escrita — enquanto hesitam quanto ao uso direto em sala de aula, com preocupações centradas na [[academic-integrity|integridade acadêmica]] (plágio e [[assessment-validity|validade da avaliação]]). A adoção é moldada por fatores de identidade profissional, [[pedagogy|pedagógicos]], técnicos, [[governance|institucionais]] e de integridade, e as lacunas de competência mapeiam-se em episteme (compreender capacidades/limites da IA), techne ([[prompt-engineering|prompt engineering]], desenho de tarefas/avaliações aprimorado por IA, detecção de texto gerado por IA) e phronesis (julgamento [[ethics|ético]], tratamento de viés/privacidade) — portanto instrutores de EAP/EFL devem construir essas competências deliberadamente e planejar uma implementação "bastidores primeiro, depois sala de aula".
- **Diferencie por proficiência e necessidade.** A [[ai-vs-human-assessment-efl-tpck-2026|avaliação em EFL]] e a pesquisa sobre tutoria adaptativa sustentam ajustar o apoio e a avaliação da IA ao nível de quem aprende, em vez de adotar uma abordagem única.

- **Pondere a tecnologia rumo à produção.** Uma metanálise de 33 estudos de TEFL encontrou um efeito geral de pequeno a moderado (g = 0,38, reduzido para 0,28 pelo trim-and-fill) que crescia com o nível educacional e favorecia as competências produtivas — fala e escrita — sobre as receptivas ([[liu-emerging-tech-tefl-review-2026|Liu, Hashim & Sulaiman (2026)]]).

## Ideias equivocadas comuns

- **"Em EFL, a IA ameaça principalmente a cola."** A [[limitations-in-aied-research|limitação]] mais relatada pelo próprio campo é a **autonomia de quem aprende**, aparecendo como [[cognitive-offloading|dependência excessiva]] em **27** de uma síntese de **54 estudos** baseada na Scopus. O custo documentado é a dependência, e não a desonestidade, o que pede uma intervenção diferente.
- **"Os professores de línguas adotam com entusiasmo ou não adotam."** Uma [[li-language-educators-genai-review-2026|revisão sistemática de 23 estudos]] (Li et al.) encontra **adoção cautelosa, com preparação primeiro** como o padrão. Os professores eram cautelosos de forma refletida, não divididos entre entusiastas e recusadores.
- **"O efeito geral justifica o esforço."** Uma metanálise de **33 estudos de TEFL** encontrou um **efeito geral de pequeno a moderado (g = 0,38, reduzido para 0,28 pelo trim-and-fill)** que **crescia com o nível educacional**. O efeito é modesto após a correção e concentrado nos níveis mais altos, de modo que a cifra agrupada não sustenta uma afirmação para iniciantes.
- **"Qualquer uso de IA é igualmente produtivo para a aprendizagem de línguas."** O mesmo trabalho defende **ponderar a tecnologia rumo à produção** — escrita e fala, em vez de consumo. A modalidade determinou o efeito mais do que a presença da IA.

## Conceitos conectados

- [[language-learning]]
- [[writing-education]]
- [[multilingual-learning]]
- [[higher-ed]]
- [[k-12]]
- [[generative-ai]]
- [[llm]]
- [[automated-assessment]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[academic-integrity]]
- [[discipline-specific-aied]]

## Artigos conectados

- [[alharbi-ethical-genai-eap-2026]] — Integração ética de IA generativa no EAP no ensino superior
- [[feedback-literacy-scripts-eap-writing]] — Roteiros de letramento em feedback e um mecanismo de segundo corretor na revisão de escrita EAP com IA generativa
- [[genai-differentiated-eap-reading-materials-2026]] — De materiais unificados a diferenciados: adaptação de materiais de leitura para EAP apoiada por IA generativa
- [[tact-pedagogically-adaptive-esl-tutoring]] — TACT: pós-treinamento alinhado a taxonomia para tutoria de inglês pedagogicamente adaptativa
- [[sutama-chatgpt-eportfolio-speaking-2026]] — Alinhando o ChatGPT à avaliação por portfólio eletrônico como modelo de aprendizagem em EFL
- [[irwin-muller-efl-peer-feedback-literacy]] — Posicionando a IA generativa no feedback entre pares em EFL
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tarefas de avaliação geradas por IA versus desenvolvidas por humanos em contexto de EFL
- [[acceptance-ai-english-tools-2026]] — Aceitação de ferramentas de aprendizado de inglês assistidas por IA no ensino superior
- [[ai-tools-arab-english-classrooms]] — Ferramentas de IA em salas de inglês de universidades árabes
- [[self-referential-l2-writing-llm-assessment]] — Rumo a uma avaliação analítica autorreferencial: uma abordagem baseada em perfis para avaliação de escrita em L2 com LLMs
- [[ai-interlocutor-l2-spoken-dialogue]] — O que muda quando o interlocutor é uma IA? Diálogo falado em L2
- [[genai-linguistic-diversity-academic-writing]] — IA generativa e diversidade linguística na escrita e publicação acadêmicas
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Governando o invisível: letramento em IA entre professores de línguas
- [[structural-silence-underrepresented-language-ai-2026]] — Silêncio estrutural: línguas sub-representadas na infraestrutura de IA
- [[liu-emerging-tech-tefl-review-2026]] — Tecnologias emergentes para TEFL
- [[bird-multimodal-educational-literature-2026]] — Fusão multimodal para classificação de literatura educacional
- [[li-language-educators-genai-review-2026]] — Práticas e desenvolvimento de educadores de línguas com IA generativa
- [[zhao-ji-appraisal-human-ai-revisions-2026]] — Revisões por pares e por IA de redações argumentativas em EFL diferem no posicionamento dialógico (Zhao & Ji 2026)
- [[ai-limitations-efl-higher-education-review-2026]] — Dependência excessiva de IA (50% de 54 estudos) e redução do pensamento crítico lideram as limitações relatadas
