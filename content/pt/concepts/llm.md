---
title: Grandes modelos de linguagem (LLMs)
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-02T08:08:45-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
translation_of: concepts/llm
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Grandes modelos de linguagem (LLMs)** — modelos de [[machine-learning|redes neurais]] treinados em vastos corpora de texto que geram texto semelhante ao humano, impulsionando a maioria das aplicações modernas de [[ai-education|IA na educação]]. Os LLMs são a espinha dorsal computacional da tutoria, da avaliação e da geração de conteúdo por IA generativa na educação.

## Perguntas para refletir

- O que você acredita que um [[conversational-ai|chatbot]] de IA "sabe" quando responde a você? A página enquadra os LLMs como geradores de texto provável, e não como recuperadores de fatos verificados — como essa distinção muda o quanto você confiaria nas explicações de um modelo?
- Os LLMs são descritos como o motor por trás da maioria das ferramentas modernas de educação com IA — tutoria, correção, geração de conteúdo e até diagnóstico do que os estudantes sabem. Desses usos, quais você acha mais e menos adequados para um gerador probabilístico de texto, e por quê?
- A página relata que três LLMs diferentes produziram planos de apoio acentuadamente divergentes para a mesma entrada de analítica de aprendizagem, cada um com pressupostos demográficos diferentes. Se os modelos não são intercambiáveis como consultores, o que isso significa para uma instituição que adota um deles?
- Como a saída dos LLMs é sensível a prompts e configurações, duas pessoas podem obter resultados muito diferentes do mesmo modelo. Como isso deveria influenciar a forma como você — como quem aprende ou como designer — formula pedidos, e o quanto confia em uma única saída?
- Uma limitação-chave é a alucinação — conteúdo plausível, mas sem fundamento. Em um contexto de tutoria ou correção, o que seria necessário para você se sentir confiante de que o modelo não está inventando algo, e que salvaguardas você exigiria antes de deixá-lo avaliar um estudante real?

## Introdução

### Os LLMs como motor da AIED

Os LLMs são o conceito mais referenciado da base de conhecimento (mais de 60 artigos) porque sustentam quase todas as aplicações de educação com IA:

- **Tutoria:** os [[intelligent-tutoring|tutores de IA]] usam LLMs para diálogo, explicação e orientação de [[problem-solving|resolução de problemas]]. O [[llm-training-and-fine-tuning|treinamento e o ajuste fino]] adaptam LLMs gerais para uso educacional.
- **Avaliação:** os [[automated-assessment|sistemas de correção]], a [[automated-essay-scoring|correção de redações]] e a [[llm-item-difficulty-prediction|previsão de dificuldade de itens]] se apoiam nas capacidades dos LLMs. [[razavi-powers-item-difficulty-llm-2026|Razavi e Powers (2026)]] mostram que o GPT-4o consegue estimar a dificuldade de itens de matemática e leitura do K-5 (N = 5170) calibrados pelo modelo de TRI de Rasch: as avaliações zero-shot se correlacionaram de moderada a fortemente com as dificuldades reais (r = 0,83 em matemática, r = 0,81 em leitura), mas variaram por série, enquanto uma estratégia baseada em atributos, na qual o LLM extrai atributos cognitivos e linguísticos para modelos baseados em árvores, alcançou correlações de até r = 0,87 — evidência de que a extração estruturada de atributos pode superar um julgamento holístico único do LLM. Ao longo da literatura agregada de correção, uma [[meta-analysis-systematic-review|revisão sistemática]] guiada pela PRISMA de 42 estudos empíricos (2023–2025) conclui que os LLMs igualam os corretores humanos em tarefas curtas e bem estruturadas com rubricas detalhadas, mas não conseguem substituir plenamente o juízo humano em trabalho complexo, aberto ou subjetivo, e que a versão do modelo é um determinante dominante da qualidade da correção ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). A confiabilidade também varia acentuadamente por tipo de item: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] constataram que o ChatGPT-5 se aproximou bastante do corpo docente em itens objetivos de provas de farmácia (CCC 0,935–1,000), mas foi não confiável em itens de resposta curta (CCC ≈0) e de redação (0,341–0,854), e que fornecer uma rubrica não melhorou consistentemente a concordância.
- **Os rótulos de item gerados rastreiam a forma de superfície, não a dificuldade.** Uma auditoria de 378 itens constatou que os rótulos Fácil/Médio/Difícil de um LLM subiam em sincronia com seu próprio nível de Bloom cogerado (ρ=0,90) e com o comprimento do enunciado (de 15,9 a 30,2 palavras), mas se correlacionavam com a dificuldade empírica dos itens em apenas ρ=0,06 ao longo de 7.888 respostas de estudantes — evidência de que os metadados de dificuldade no momento da geração descrevem a formatação, e não a demanda sobre o [[prior-knowledge|conhecimento prévio]] ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Os itens gerados ainda podem igualar os itens de especialistas.** O o3-mini, em um laço de gerar→julgar→revisar, construiu provas para 71 turmas; sob um modelo de [[item-response-theory|TRI]] 2PL bayesiano hierárquico, os itens de IA eram mais fáceis, mas mais discriminantes (ᾱ = 1,3 versus 1,2) e mais informativos (I_max = 3,85 versus 2,61) que os itens de especialistas de AP Statistics ([[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]]).
- **A qualidade da anotação é um resultado de desenho, não uma propriedade de um único prompt.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] pediram a um painel de cinco modelos que julgasse asserções legíveis por humanos sobre cada fala, em vez de emitir diretamente um rótulo, e um classificador transparente sobre esses julgamentos binários (macro-F1 0,673, κ de Cohen 0,688) superou o melhor prompting direto publicado de um modelo de fronteira (0,61 de macro-F1), embora ficasse atrás de um codificador RoBERTa-base ajustado (0,76); a concordância entre modelos funcionou como dispositivo de triagem, e não como evidência de validade.
- **LLMs de raciocínio [[multimodal]] como corretores:** quando um LLM multimodal e capaz de raciocinar (GPT-o4-mini) corrigiu uma prova manuscrita de [[chemistry-education|química]] geral de 296 estudantes, página por página, contra imagens de rubrica, as notas totais de execução única foram altamente reproduzíveis (ICC(A,1) = 0,967; a média de cinco execuções alcançou 0,993) e concordaram fortemente com os totais dos monitores (R² = 0,91), mas a confiabilidade no nível do item foi acentuadamente dependente do formato — respostas textuais e de equação de reação foram bem corrigidas, enquanto desenho e gráficos foram piores que o aleatório (grades de fundo distraem a visão da IA). Isso mostra que a [[trust|confiabilidade]] de um corretor de LLM é uma função do formato de resposta e da tarefa, e não apenas da capacidade bruta do modelo, e que o [[human-in-the-loop-ai|adiamento seletivo]] por filtros de confiança é necessário para uso de alto impacto ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Conteúdo:** a criação de conteúdo por [[generative-ai|IA generativa]] se apoia nos LLMs. A [[automated-question-generation|geração de questões]] e a [[ai-generated-instructional-videos-computing-ed|geração de vídeos]] são movidas por LLM.
- **Segurança:** a [[pedagogical-safety|segurança pedagógica]], o [[hallucination-risk|risco de alucinação]] e a [[research-methods-aied|pesquisa]] sobre [[hazra-safetutors-pedagogical-safety-2026]] examinam riscos específicos dos LLMs.
- **Diagnóstico:** o [[knowledge-tracing|rastreamento de conhecimento]] e o [[cognitive-diagnosis|diagnóstico cognitivo]] incorporam crescentemente LLMs para uma [[student-modeling|modelagem de estudante]] mais rica. O fundamento importa enormemente para o diagnóstico de erro: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] mostraram que fornecer ao GPT-4 a estrutura de interface do tutor mais as estimativas de habilidade do [[knowledge-tracing|rastreamento de conhecimento]] bayesiano elevou a identificação de erros lógicos de 40% para 81% em fatoração (diagnóstico de erro em geral ~87,8%), enquanto problemas de múltiplos passos e respostas com vários erros permaneceram casos fracos e diagnósticos alucinados de "[[misconceptions|ideia equivocada]] comum" persistiram — evidência de que o valor diagnóstico de um LLM é tão função do contexto estruturado e dos sinais de [[student-modeling|modelo de quem aprende]] que ele recebe quanto do próprio modelo.
- **Verificação separada da geração — com modos de falha correlacionados.** [[eduguard-safe-rag-llm-tutor|Hossain et al. (2026)]] restringem a recuperação do tutor a material de curso aprovado pelo instrutor e roteiam as afirmações por um verificador DeBERTa-v3-large-MNLI arquiteturalmente separado, mas advertem que ambos os modelos compartilham um treinamento amplo na web e podem falhar de formas correlacionadas, e que o verificador não consegue verificar um rastro de código sem executá-lo.
- **Mudança no modelo de avaliação (2017–2024):** a revisão de escopo de Morley et al. sobre correção automática de questões curtas de [[science-education|ciências]] rastreia a mudança do campo do ajuste fino de modelos [[educational-nlp|BERT]] menores (dominantes até 2021) para o prompting de LLMs maiores (GPT-1/2/3.5/4) a partir de aproximadamente 2022 — adotado via [[prompt-engineering]] em vez de ajuste fino —, com modelos aumentados por domínio, prompting consciente de rubrica e cadeia de pensamento elevando a precisão. Ainda assim, os modelos GPT raramente foram submetidos a benchmark contra o BERT em corpora padrão, poucos corretores automáticos conseguiam explicar suas notas, e o [[bias-mitigation|viés]] foi raramente examinado — ressalvas que se aplicam à avaliação por LLM em geral ([[auto-marking-short-answer-science-2026]]).

### Pesquisa específica por modelo

A base de conhecimento cobre tanto LLMs de propósito geral (GPT-4, Claude) quanto adaptações específicas da educação. Os [[cstutorbench-slm-tutors|benchmarks de modelos de linguagem pequenos]] comparam o desempenho de SLMs em tutoria. A pesquisa sobre [[educational-llm-alignment|alinhamento educacional]] aborda como tornar os LLMs pedagogicamente apropriados. Um estudo em sala de aula ao longo de três famílias de fronteira — [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] — constatou que o ChatGPT, o Gemini ou o Claude podiam atuar como parceiros colaborativos de crítica para a escrita argumentativa: ao longo de um semestre de redações iterativas, os estudantes melhoraram em qualidade da argumentação, [[prompt-engineering|engenharia de prompts]] e resposta ao [[ai-feedback-quality|feedback de IA]] em cerca de um desvio-padrão cada (todos p < .001) e se engajaram profundamente (87,8% refutando afirmações do LLM), posicionando os LLMs de propósito geral como parceiros viáveis de [[collaborative-learning|aprendizagem colaborativa]], e não meros geradores de respostas.

Uma linha complementar de trabalho reenquadra os LLMs, de corretores estáticos, como emuladores de raciocínio [[pedagogy|pedagógico]]. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] mostraram que o GPT-4, com andaimento de uma rubrica semanticamente precisa e co-refinada iterativamente, conseguia aproximar o [[evaluative-judgment|juízo avaliativo]] humano na [[design-based-research|aprendizagem baseada em design]]: a concordância inicial entre LLM e humanos era ruim (Alfa de Cronbach = 0,393; Kappa −0,06 a 0,18), mas o refinamento iterativo da rubrica elevou a concordância média de 54,75% para 81,25% (Alfa final = 0,798, Kappa 0,40–0,55), e o agrupamento K-means das matrizes de notas humanas e de LLM mostrou centroides altamente correlacionados (r = 0,89). O estudo posiciona a rubrica como uma interface mediadora entre a intenção pedagógica humana e a inferência da máquina — evidência de que os LLMs prontos para uso também não são intercambiáveis como avaliadores, e de que seu comportamento de avaliação é um resultado de desenho moldado pela rubrica e pelos prompts que recebem. A capacidade bruta do modelo também diferencia a correção: ao submeter a [[benchmark|benchmark]] onze modelos de IA generativa e de embeddings de frases em 1.885 [[automated-assessment|respostas]] abertas, [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] constataram que apenas o GPTo1 alcançou concordância quase perfeita com corretores humanos especialistas (Kappa de Fleiss 0,82), com o Claude3 e o PaLM2 ligeiramente atrás, enquanto modelos alinhados a referências, como o BERT, ficaram muito aquém — mostrando que a sensibilidade a contexto dos modelos de fronteira importa para uma avaliação aberta confiável. As diferenças entre modelos também importam para usos downstream de alto impacto. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] mostraram que três LLMs produziram prescrições de apoio ao estudante acentuadamente divergentes para a mesma entrada de [[learning-analytics|analítica de aprendizagem]], e cada um impôs priors demográficos distintos aos perfis de quem aprende que gerou — evidência de que os LLMs prontos para uso não são intercambiáveis como consultores prescritivos. De forma semelhante, [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] constataram que a correção pelo GPT-4 de questões abertas [[medical-education|médicas]] pré-clerkship subiu para concordância entre corretores substancial a quase perfeita com o corpo docente (kappa ponderado de até 0,94) apenas após três rodadas de refinamento iterativo da rubrica, e caiu para moderada (κw = 0,54) em um item de rubrica holística — reforçando que o desenho da rubrica, e não a capacidade bruta por si só, é a alavanca decisiva para a confiabilidade da correção por LLM. O comportamento específico por modelo também aparece em como os LLMs respondem a usuários céticos: uma auditoria algorítmica consultou dez LLMs de fronteira 500 vezes cada com uma persona cética em relação à IA do [[k-12]] rural de Montana para testar se [[ai-technologies|sistemas de IA]] consultados por usuários céticos estão predispostos a encorajar a adoção. Oito de dez reconheceram as preocupações do usuário e então redirecionaram para enquadramentos de [[student-engagement|engajamento com IA]]; as pontuações compostas variaram de 3,85 (Claude Sonnet) a 7,52 (Gemini 3.1 Pro Preview), com um painel de corretores de IA entre famílias superando kappa de Cohen >= 0,70. O padrão foi um resultado de desenho dependente do modelo. A capacidade do modelo também depende de como os modelos são combinados: Bird (2026) ajustou oito transformers de estado da arte (BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer) para classificar literatura inglesa por Key Stage do Reino Unido, constatando que o melhor transformer unimodal (BERT) alcançou apenas um F1 de 0,75 — enquanto fundir um ELECTRA ajustado com uma rede neural de linguística computacional elevou o F1 a 0,996, mostrando que a classificação de texto por transformers, isoladamente, é limitada e que a fusão com atributos complementares é onde estão os ganhos.

Os LLMs também afirmam preferencialmente: ao longo de 11 modelos, as respostas de IA afirmaram os usuários 49% mais que as respostas humanas, e respostas mais aduladoras receberam avaliações mais altas, elevando a confiança e o uso continuado — um modo de falha para coaching, tutoria ou feedback, onde o desafio construtivo é o objetivo ([[ai-personal-coach-review-benefits-risks-2026|Potel & Kumashiro (2026)]]).

## Conceitos conectados

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — Guarda-chuva: tecnologias e técnicas de IA (modelos, treinamento de LLM, robótica, RAG, agêntica)

## Artigos conectados
- [[assessing-quality-ai-generated-exams-field-2025]] — Avaliando a qualidade de provas geradas por IA: um estudo de campo em larga escala
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — A IA pode oferecer apoio adequado a perfis diversos de estudantes? Uma avaliação em larga escala
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs como agentes de desenho pedagógico iterativo
- [[razavi-powers-item-difficulty-llm-2026]] — Estimando a dificuldade de itens com LLMs e ML baseado em árvores
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Uso de LLMs por estudantes e os limites da dificuldade de questões gerada por IA em cursos de ciência de dados
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: esquemas baseados em asserções para codificação auditável de diálogos educacionais

- [[ai-personal-coach-review-benefits-risks-2026]] — Sycophancy em 11 LLMs: a IA afirmou os usuários 49% mais que os humanos, elevando a confiança e o uso continuado
