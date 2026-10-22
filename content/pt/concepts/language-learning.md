---
connected_resources: [mglearn]
title: "Aprendizagem de línguas"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-04T09:35:00-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [equity-in-ai-education]
discipline: [language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/language-learning
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Aprendizagem de línguas** — o estudo de como a IA apoia a aquisição de segunda língua (L2), o desenvolvimento da escrita e a diversidade linguística em contextos educacionais. A [[research-methods-aied|pesquisa]] em [[ai-education|IA na educação]] nesta base de conhecimento abrange interlocutores de IA para diálogo falado, [[automated-essay-scoring|avaliação automatizada de escrita]] para quem aprende L2, apoio à leitura e preocupações com viés de língua em sistemas de pontuação por IA.

## Perguntas para considerar

- A língua é inerentemente interativa, o que a torna adequada à [[conversational-ai|IA conversacional]] — mas as capacidades linguísticas da IA também levantam riscos de viés contra padrões não nativos. Onde você já viu essa tensão entre oportunidade e risco se manifestar?
- Um estudo concluiu que a pontuação por IA subestima sistematicamente estudantes linguisticamente mais fracos, enquanto outro propôs comparar estudantes com seu próprio trabalho anterior em vez de com normas de falantes nativos. Como o "ponto de referência" da avaliação muda se o [[ai-feedback-quality|feedback da IA]] ajuda ou penaliza quem aprende?
- Interlocutores de IA podem estender a prática comunicativa em escala, mas a página alerta que eles deveriam ser pareados com interação humana para que a fluência se transfira para a conversa real. O que você poderia ganhar praticando com uma IA que um parceiro humano não consegue dar — e o que você perderia?
- O apoio do professor — e não apenas a ferramenta de IA — mostrou impulsionar o engajamento na aprendizagem de línguas assistida por IA por meio das metas de realização dos estudantes. Como o contexto social e [[pedagogy|pedagógico]] molda se quem aprende continua se engajando com uma ferramenta de prática com IA?
- Uma [[meta-analysis-systematic-review|metanálise]] concluiu ganhos de pequenos a moderados, dependentes do nível, de tecnologias emergentes, com habilidades produtivas (falar, escrever) ganhando mais que as receptivas. Por que falar e escrever poderiam se beneficiar mais que ouvir e ler de ferramentas de IA?
- Se a IA privilegia o inglês padrão e pode penalizar padrões linguísticos não nativos ou diversos, como instrutores de línguas deveriam desenhar avaliação e feedback para que a IA apoie a diversidade linguística em vez de apagá-la?

## Introdução

A aprendizagem de línguas emergiu como domínio significativo da IA na educação porque a língua é inerentemente interativa — o que a torna adequada à IA conversacional — e porque as capacidades linguísticas da IA levantam tanto oportunidades ([[personalized-learning|prática de língua personalizada]] em escala) quanto riscos (viés sistemático contra padrões linguísticos não nativos). Os artigos nesta base de conhecimento exploram os dois lados dessa equação. Onde a língua-alvo é **o inglês especificamente** — especialmente [[english-education|inglês para fins acadêmicos (EAP)]] e o [[teacher-role|ensino]] de inglês EFL/ESL/L2 — veja a página de conceito dedicada [[english-education|educação em inglês]], que distingue a pesquisa específica do inglês da aquisição geral de L2 e da escrita geral.

**A IA como tutor de língua e interlocutor** é o tema mais desenvolvido. **[[ai-interlocutor-l2-spoken-dialogue|O que muda quando o interlocutor é uma IA?]]** examina a fluência interacional e a apreensão linguística quando quem aprende L2 conversa com IA versus humanos. O **[[tact-pedagogically-adaptive-esl-tutoring|TACT]]** fornece tutoria de ESL pedagogicamente adaptativa. O **[[llm-children-reading-story-generation]]** explora histórias geradas por IA para o desenvolvimento da leitura em crianças. Esses trabalhos se conectam à [[intelligent-tutoring|tutoria inteligente]] e à [[generative-ai|IA generativa]]. **[[llm-agents-5e-esl-grammar-2026|Yang, Weng e Yang (2026)]]** projetaram dois agentes baseados em [[llm|LLM]] — um professor de inglês com IA convencional e um usando o **framework 5E** (engajar, explorar, explicar, elaborar, avaliar) para aprendizagem de gramática baseada em investigação. Entre **37 estudantes de ESL** em uma comparação aleatorizada, **estudantes de alto desempenho responderam positivamente ao professor de IA**, enquanto estudantes de baixo desempenho mostraram atitudes mistas, e as condições diferiram em motivação intrínseca, mudança cognitiva e desempenho — indicando que o design de agente com LLM deveria ser ajustado à proficiência de quem aprende.

Para tutores fisicamente corporificados, uma metanálise de 11 estudos de RALL (N = 595) concluiu um efeito agrupado grande na aprendizagem de L2 (g = 0,83) com alta heterogeneidade, e apenas o formato de interação o moderou — formatos em grupo superaram o um a um, enquanto morfologia do robô, modalidade, autonomia e papel social não o fizeram ([[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang e Zou (2026)]]).

**A IA na avaliação de línguas** está emergindo à medida que LLMs apoiam a [[automated-question-generation|geração de itens]] e a avaliação. **[[gpt-item-generation-l2-listening-2026|Aryadoust e Wong (2026)]]** compararam [[prompt-engineering|engenharia de prompts]] contra ajuste fino para geração automática de itens na avaliação de compreensão auditiva em L2: o refinamento iterativo de prompts melhorou a qualidade dos itens, mas estagnou, enquanto o **ajuste fino do GPT-4.1 no prompt otimizado** (mantendo o design do prompt constante) rendeu ganhos adicionais — um modelo para quando desenvolvedores de avaliação deveriam investir em adaptação de modelo em vez de iteração de prompt.

Uma comparação de 52 tarefas de avaliação em EFL pontuadas por 20 professores experientes não encontrou diferença significativa de qualidade no geral entre itens gerados por IA e desenvolvidos por humanos, mas encontrou uma divisão clara de trabalho: a IA foi preferida para gramática e vocabulário (69%) e o desenvolvimento humano para leitura, escrita, compreensão auditiva e fala (75–83%) ([[ai-vs-human-assessment-efl-tpck-2026|Nourashrafi, Alavinia e Darvishi (2026)]]).

**A avaliação automatizada de escrita para quem aprende L2** avalia a capacidade da IA de avaliar escrita não nativa. **[[self-referential-l2-writing-llm-assessment|Bannò et al.]]** propuseram uma abordagem autorreferencial que compara a escrita do estudante com seu próprio trabalho anterior em vez de com normas de falantes nativos. **[[ai-scoring-language-bias-physics|Feser e Tschisgale]]** concluíram que a pontuação por IA subestima sistematicamente estudantes linguisticamente fracos — um achado que se conecta a preocupações de [[assessment-validity|validade da avaliação]] e [[bias-mitigation|mitigação de vieses]]. O **[[genai-linguistic-diversity-academic-writing]]** explora como a IA afeta a diversidade linguística em contextos acadêmicos.
 Um sistema no nível do discurso vai além ao nomear o defeito em vez de pontuar o texto: a classificação de relação entre pares de frases localizou quebras de coerência — saltos lógicos, conectivos ausentes, referência ambígua — e a adoção de seu feedback gerado julgada por professores ficou entre 71,2% e 88,4% ([[bert-discourse-english-teaching-2026|Wang et al., 2026]]).

**A [[accessibility|acessibilidade]] para quem aprende línguas** se conecta à [[inclusive-learning|aprendizagem inclusiva]]: o **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** analisou como quem tem dislexia usa a IA para apoio à literacia, e os **[[ai-tools-arab-english-classrooms]]** exploraram ferramentas de IA em contextos de sala de aula árabe-inglês. Esses estudos conectam a aprendizagem de línguas à [[equity-in-ai-education|equidade na educação com IA]] e à [[special-education|educação especial]].

**Os mecanismos motivacionais na aprendizagem de línguas assistida por IA** examinam por que quem aprende se engaja com a IA para prática de língua. **[[wang-goal-setting-ai-engagement-2026|Wang e Wang (2026)]]** usaram a teoria de definição de metas com 758 estudantes universitários chineses de inglês para mostrar que o **apoio do professor** aumenta o engajamento na aprendizagem assistida por IA por meio das metas de aproximação ao domínio e de aproximação ao desempenho dos estudantes (não metas de evitação) — evidência de que o contexto pedagógico e social, e não apenas a ferramenta de IA, determina se quem aprende permanece engajado com a prática de línguas assistida por IA. Isso conecta a aprendizagem de línguas à [[motivation|motivação]] e ao [[student-engagement|engajamento estudantil]].

[[chatgpt-english-language-learning-malaysia|Annamalai et al. (2026)]] acrescentam um caso qualitativo de autodeterminação: em entrevistas com 25 estudantes de graduação malaios, o ChatGPT apoiou competência e autonomia, e sua responsividade conversacional produziu uma sensação de ser ouvido — uma "ecologia motivacional mediada por IA" em que o relacionamento é em parte atendido pela ferramenta, embora referências imprecisas exigissem verificação e complemento humano.

A qualidade do design, e não a frequência de uso, carregou o efeito motivacional em um tutor construído pelo instrutor: entre 74 estudantes de graduação usando um GPT de japonês escopado ao curso, a frequência de uso fora da aula não mostrou correlação significativa com autonomia, competência ou relacionamento, enquanto quem aprende classificou o tutor como alto para aprendizagem autodirigida (M = 4,39) e citou segurança afetiva (60,8%) ([[instructor-designed-ai-tutors-foreign-language-sdt-2026|Lee e Kwon, 2026]]).

**Escrita apoiada por IA generativa no nível primário.** [[genai-writing-program-primary-l2-motivation-engagement|Lu et al. (2026)]] conduziram um programa de escrita de opinião de nove semanas com 301 aprendizes do 5º e 6º anos no leste da China, com oito turmas intactas aleatoriamente designadas ao programa ou à instrução convencional. O programa elevou o eu ideal de escrita em L2 de quem aprende (diferença média ajustada 0,20) e a flutuabilidade acadêmica (0,17), e aumentou o engajamento comportamental e emocional, mas não moveu mentalidade de crescimento, engajamento cognitivo ou metacognitivo, nem organização pontuada por rubrica — entre as dimensões de escrita, apenas o uso da língua melhorou. Duas características do design importam para professores de línguas: o prompting foi ensinado explicitamente, por meio de um banco categorizado de prompts ligado a metas específicas de escrita, e o feedback da IA generativa foi usado junto com comparação ao feedback do professor e revisão repetida. Os ganhos de autoria que quem aprende relatou repousaram sobre essa estrutura instrucional, e não sobre a ferramenta por si só, e os autores nomeiam o [[metacognition|automonitoramento]] reduzido e as estratégias orientadas a atalhos como os riscos permanentes.

## Implicações para instrutores de línguas

- **[[ai-technologies|Tecnologias]] emergentes rendem ganhos de pequenos a moderados, dependentes do nível.** Uma [[liu-emerging-tech-tefl-review-2026|metanálise de 33 estudos de TEFL]] (N = 3.181) conclui um efeito geral de g de Hedges = 0,38 que sobe com o nível educacional (primário 0,29, secundário 0,35, terciário 0,44), com RV/RA rendendo os maiores efeitos e habilidades produtivas (falar, escrever) ganhando mais que habilidades receptivas — apoiando o uso de tecnologias emergentes, especialmente no nível terciário, ao mesmo tempo que mantém expectativas realistas.
- **Uma revisão sistemática mapeia onde a educação de línguas com IA no nível elementar é escassa.** Ao longo de 31 estudos (2013-2025), o trabalho em salas de aula de línguas do nível elementar se concentrou em fala, literacia e vocabulário, enquanto gramática, compreensão auditiva e língua de sinais foram mal estudados, e a maioria dos designs carecia de especificidade por nível de série ([[ai-elementary-language-education-review-2026|Hamasha et al., 2026)]]).
- **Use a IA para estender a prática comunicativa, não para substituí-la.** Os [[ai-interlocutor-l2-spoken-dialogue|interlocutores de IA]] e os [[tact-pedagogically-adaptive-esl-tutoring|tutores de ESL adaptativos]] ampliam a prática interacional em escala — pareie-os com interação humana para que fluência e apreensão se transfiram para a conversa real.


- **Fique atento à saída da IA por erro pragmático, não apenas gramatical.** Professores de cinco métodos on-line de ensino de línguas nomearam a cegueira pragmática, em que a saída da IA é gramaticalmente correta, mas errada em tom, formalidade ou cultura ([[ai-ethics-tensions-online-pedagogy-2026|Baoyi e Khan (2026)]]).
- **Priorize a qualidade do feedback sobre a quantidade na fala apoiada por ASR.** [[asr-english-speaking-feedback-metacognition-2026|Chen et al. (2026)]] concluem que a correção precisa de erros e tarefas estruturadas de reflexão melhoram a internalização do [[feedback|feedback]] e o comportamento reflexivo na fala em inglês universitário, enquanto o uso frequente de ASR e a acurácia de reconhecimento impulsionam motivação ou reflexão apenas parcialmente — a precisão técnica por si só não gera engajamento cognitivo mais profundo, e a proficiência em língua modera os ganhos (quem aprende mais forte internaliza o feedback de forma mais eficaz). Isso defende feedback pedagogicamente sólido (por exemplo, explicações articulatórias em vez de simples marcações de erro), reflexão andaimentada e apoio diferenciado por proficiência.

- **Dê pistas antes das correções.** Uma tarefa de "pista antes da correção" com ChatGPT, em que quem aprende infere as correções a partir de dicas guiadas em vez de receber correções diretas, reduziu a carga cognitiva e apoiou a revisão personalizada — mas o benefício se manteve principalmente para quem já tinha conhecimento prévio suficiente (58 estudantes, CEFR A1–B1) ([[lukesova-clue-before-correction-2026|Lukešová e Jennings (2026)]]).
- **Entregue feedback de pronúncia que localize a diferença a ser fechada.** O Profy aprende proficiência a partir de fala em grande parte não anotada e mostra *onde* quem aprende diverge das distribuições de falantes nativos; seus intervalos de confiança de inteligibilidade pré/pós não se sobrepuseram, diferentemente de uma linha de base de imitação elicitada — evidência de que a prática de imitação pode ser apoiada sem avaliadores especialistas ([[ai-guided-learning-audiovideo-2026|Kawamura (2026)]]).
- **Apoie a adaptação psicológica de quem aprende ao estudo assistido por IA.** [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]] acompanha aprendizes de japonês ao longo de um semestre e conclui que eles se dividem em perfis de adaptação mal-adaptativos, moderados e positivos, movidos pelo equilíbrio entre tecnostresse e resiliência, com a maioria dos aprendizes gradualmente se deslocando rumo à adaptação positiva e relatando maior [[self-efficacy|autoeficácia]] e menor esgotamento — um sinal para desenhar prática de línguas mediada por IA que gerencie o esforço tecnológico, e não apenas o acesso à ferramenta.
- **Fique atento ao viés de pontuação e feedback contra quem aprende.** A [[ai-scoring-language-bias-physics|pontuação por IA]] pode penalizar padrões não nativos; a [[genai-linguistic-diversity-academic-writing|pesquisa em diversidade linguística]] alerta que a IA privilegia o inglês padrão — use avaliação autorreferencial ou moderada por humanos.
- **Apoie todo o espectro de quem aprende.** Os [[dyslexlens-dyslexic-learners-ai|estudos de dislexia e acessibilidade]] e o design [[culturally-relevant-pedagogy|culturalmente responsivo]] ([[ai-tools-arab-english-classrooms|contextos árabe-inglês]]) mostram que a IA precisa ser adaptada a necessidades diversas de quem aprende, e não presumida universal.
- **Infraestrutura, e não apenas pontuação, exclui línguas.** O bengali detém menos de 0,5% do conteúdo web global contra um déficit de 67:1 em tokens de treinamento inglês-bengali e uma lacuna de conectividade rural–urbana (36,5% contra 71,4% de penetração de internet), de modo que o design *offline-first* na língua nativa é pré-requisito para acesso, e não uma conveniência ([[structural-silence-underrepresented-language-ai-2026|Roy e Roy (2026)]]).
- **Educadores valorizam a IA generativa para trabalho preparatório, não para uso ao vivo em sala de aula.** Uma [[li-language-educators-genai-review-2026|revisão sistemática PRISMA de 23 estudos]] (Li et al. 2026) conclui que educadores de línguas valorizam mais a IA generativa para preparação nos bastidores — [[curriculum-design|planejamento de aulas]], criação de materiais e apoio/feedback de escrita —, embora permaneçam hesitantes quanto à implementação direta, voltada à sala de aula, refletindo uma lacuna teoria–prática entre aprovar a IA em princípio e usá-la ao vivo. A adoção é moldada por fatores de identidade profissional, pedagógicos, técnicos, [[governance|institucionais]] e de [[academic-integrity|integridade acadêmica]], com educadores se situando em um espectro que vai da não adoção à integração abrangente; as atitudes tendem a evoluir da insegurança inicial rumo ao uso confiante e seletivo com a exposição.
- **Prepare o [[ai-literacy|letramento em IA]] dos professores de línguas.** [[governing-unseen-ai-literacy-language-teachers-2026|Revisões sistemáticas]] concluem que o letramento em IA entre professores de línguas é uma lacuna-chave — invista em [[educational-development|desenvolvimento profissional]] docente junto com a adoção da ferramenta. À medida que a IA remodela a educação em línguas, o letramento em IA também é crucial para que professores se engajem criticamente com a tecnologia: a Escala de Letramento em IA de Professores (TAILS) foi desenvolvida para a [[teacher-education|formação de professores de línguas]], operacionalizando o framework ED-AI de seis dimensões (conhecimento, avaliação, colaboração, contextualização, [[agency|autonomia]], [[ethics|ética]]) e validada com professores de inglês em formação.

- **Quatro perfis de interação em uma tarefa bilíngue de alta pressão.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li e Weng (2026)]] usaram rastreamento ocular, registro por caneta e registro de voz com 22 estagiários de interpretação para mostrar que estudantes dividem a atenção entre a saída da IA e suas próprias anotações de quatro formas distintas — Engajadores Intensivos, Leitores Rápidos, Tradicionalistas e Alternadores Frequentes — e que 58,3% das observações no nível da etapa mudaram de perfil entre as etapas de compreensão e produção da mesma tarefa. Apenas os padrões da etapa de compreensão predisseram a qualidade do produto, e o agrupamento mais pesado em IA teve a menor pontuação em fluência de entrega e qualidade da língua-alvo, o que sustenta ensinar quem aprende a descrever e refletir sobre a própria estratégia em vez de prescrever uma única forma de trabalhar com a ferramenta.
- **Roteie o laço completo de quatro habilidades por custo e conectividade.** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]] lançam o LLMersion-1, um protótipo *local-first* que trabalha escuta, leitura, fala e escrita sobre o próprio documento de quem aprende em hardware de consumo — um tutor de 1B quantiza para 808 MB e toda a pilha residente fica abaixo de 4 GB — e precifica cinco anos de prática diária em cerca de \\$18 de eletricidade, contra \\$1.200 por uma assinatura na nuvem. Nenhum desfecho de aprendizagem é relatado e o feedback de pronúncia é apenas segmental.

## Conceitos conectados

- [[eportfolio]]
- [[writing-education]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[special-education]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[speech-and-voice-technologies]]
## Artigos conectados
- [[student-ai-interaction-consecutive-interpreting-2026]] — Interação estudante-IA na interpretação consecutiva assistida por computador
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Perfis e transições da adaptação psicológica na aprendizagem de japonês assistida por IA
- [[llm-agents-5e-esl-grammar-2026]] — Agentes com LLM e framework 5E para aquisição de gramática em ESL (Yang, Weng e Yang 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting versus ajuste fino do GPT para geração de itens de compreensão auditiva em L2 (Aryadoust e Wong 2026)
- [[bert-discourse-english-teaching-2026]] — Classificação de discurso com BERT para ensino de inglês
- [[alharbi-ethical-genai-eap-2026]]
- [[sutama-chatgpt-eportfolio-speaking-2026]]
- [[ni-lam-multiliteracies-ai-portfolio-2026]]
- [[llms-text-linguistics-teaching-2026]] — LLMs no ensino de linguística de texto
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tarefas de avaliação geradas por IA versus desenvolvidas por humanos em EFL
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Governando o invisível: letramento em IA entre professores de línguas
- [[ai-guided-learning-audiovideo-2026]]
- [[ai-interlocutor-l2-spoken-dialogue]]
- [[robot-assisted-language-learning-meta-analysis-2026]] — Metanálise de aprendizagem de línguas assistida por robôs corporificados potencializada por IA
- [[self-referential-l2-writing-llm-assessment]]
- [[ai-scoring-language-bias-physics]]
- [[genai-linguistic-diversity-academic-writing]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[ai-tools-arab-english-classrooms]]
- [[structural-silence-underrepresented-language-ai-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Tutores de IA projetados por instrutores na educação universitária de línguas estrangeiras: um estudo de métodos mistos da motivação de quem aprende e da experiência reflexiva de aprendizagem baseado na teoria da autodeterminação
- [[lukesova-clue-before-correction-2026]] — Pista antes da correção: ChatGPT para aprendizagem autônoma de línguas
- [[chatgpt-english-language-learning-malaysia]] — Experiências dos estudantes com ChatGPT na aprendizagem da língua inglesa
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Interações entre características de quem aprende e formato de diálogo com TTS
- [[liu-emerging-tech-tefl-review-2026]] — Metanálise de tecnologias emergentes para EFL
- [[wang-goal-setting-ai-engagement-2026]] — Teoria de definição de metas: apoio do professor, metas de realização e engajamento na aprendizagem de inglês assistida por IA (758 estudantes chineses)
- [[li-language-educators-genai-review-2026]] — Práticas e desenvolvimento de educadores de línguas com IA generativa
- [[asr-english-speaking-feedback-metacognition-2026]] — Tecnologia ASR na fala em inglês universitário: internalização de feedback e estratégias metacognitivas
- [[genai-writing-program-primary-l2-motivation-engagement]] — Um programa de escrita apoiado por IA generativa para aprendizes primários de L2 (Lu et al. 2026)

- [[llmersion-local-first-language-learning-2026]] — LLMersion: um framework de agente de IA local-first para aprendizagem de línguas em casa de baixo custo rumo à equidade educacional

- [[ai-ethics-tensions-online-pedagogy-2026]] — Cegueira pragmática: a saída linguística da IA pode ser gramaticalmente correta, mas culturalmente errada
