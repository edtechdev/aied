---
title: Teoria de resposta ao item
created: "2026-07-28T10:44:35-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
translation_of: concepts/item-response-theory
source_updated: "2026-10-26T07:30:00-04:00"
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

> **Teoria de resposta ao item (TRI, IRT)** — uma família de modelos psicométricos que estimam a habilidade latente a partir das respostas aos itens, modelando a relação entre a habilidade de quem aprende e a probabilidade de acertar cada item. A TRI modela a dificuldade e a discriminação dos itens, viabilizando precisão de mensuração e testagem adaptativa. Na era da IA, a TRI encontra as [[llm|LLMs]] na [[llm-item-difficulty-prediction|predição de dificuldade de itens por LLM]] e na [[llm-psychometric-calibration-cdp|calibração psicométrica por LLM]]: a IA prevê e calibra a dificuldade dos itens, potencialmente melhorando a precisão da mensuração e alimentando a [[adaptive-learning|aprendizagem adaptativa]].

## Perguntas para refletir

- A teoria de resposta ao item trata a habilidade e a dificuldade do item como estimadas conjuntamente a partir dos padrões de resposta, em vez de tratar a nota bruta do teste como a medida. Como dois estudantes com o mesmo número de acertos poderiam de fato diferir em habilidade?
- A TRI permite comparar quem aprende em uma escala comum e estimar a precisão por pessoa. Por que saber a dificuldade e a discriminação de um item poderia importar mais do que apenas saber se um estudante acertou?
- Um estudo usou estatísticas de ajuste pessoal da TRI para distinguir respostas humanas de respostas geradas por IA em testes de múltipla escolha — sinalizando as respostas da IA como \"aberrantes\". Como a mesma maquinaria de mensuração que avalia a aprendizagem poderia também policiar a integridade acadêmica?
- [[research-methods-aied|Pesquisadores]] usam a TRI para validar que questões de exame geradas por IA se equiparam às escritas por especialistas em dificuldade e discriminação. Se uma IA escreve um item que \"parece\" bom, por que a calibração empírica contra parâmetros de TRI ajustados ainda é necessária?
- À medida que a IA prevê e calibra a dificuldade dos itens, o que poderia dar errado se a estimativa de dificuldade de um modelo não for validada contra dados reais de resposta dos estudantes?
- A TRI se conecta à testagem adaptativa e ao rastreamento de conhecimento — usar suas respostas para escolher o que perguntar em seguida. Como estimar sua habilidade a partir de cada resposta permite que um teste se torne mais curto e mais preciso, em vez de apenas mais longo?

## Introdução

A TRI trata a habilidade (θ) e os parâmetros dos itens (dificuldade, discriminação, às vezes adivinhação) como estimados conjuntamente a partir dos padrões de resposta, em vez de tratar a nota bruta como a medida. Isso torna possível comparar quem aprende em uma escala comum, selecionar itens de forma adaptativa e estimar a precisão por pessoa, e não globalmente.

### Como a TRI aparece na pesquisa

- **Dificuldade prevista por IA:** a [[llm-item-difficulty-prediction|predição de dificuldade de itens por LLM]] usa modelos de linguagem para estimar a dificuldade dos itens, o que precisa ser validado contra parâmetros de TRI ajustados empiricamente.
- **Calibração psicométrica:** a [[llm-psychometric-calibration-cdp|calibração psicométrica por LLM]] alinha a avaliação baseada em modelos com a mensuração baseada em TRI, de modo que as respostas geradas por IA preservem as propriedades de mensuração.
- **Rastreamento de conhecimento e modelagem do estudante:** a TRI está intimamente relacionada ao [[knowledge-tracing|rastreamento de conhecimento]] e à [[student-modeling|modelagem do estudante]] — modelos que rastreiam o conhecimento de quem aprende ao longo do tempo — compartilhando o objetivo de estimar estados inobserváveis de quem aprende a partir de respostas observáveis.

- **Quantidades de TRI lidas dos logits das LLMs.** [[huang-interpretable-knowledge-tracing-2026|Huang et al. (2026)]] extraem a habilidade do estudante θ = z^GOOD − z^BAD e a dificuldade do turno do tutor d = z^HARD − z^EASY dos logits de próximo token e as combinam em um preditor Rasch 1PL, tornando o rastreamento de conhecimento baseado em diálogo interpretável (64,29% de precisão, 65,25 de AUC no QATD2k).
- **Subtarefas de diálogo na mesma escala das questões.** [[unified-irt-framework-question-tutoring-dialogue-2026|Duan et al. (2026)]] reescrevem as subtarefas que os tutores propõem em meio ao diálogo como questões autônomas e as colocam em uma única escala de TRI 1PL compartilhada, cuja dificuldade vem do texto da questão, usando movimentos de andaimento após a dificuldade e de pressão por rigor como supervisão da ordenação de dificuldade.

- **Validação de campo hierárquica bayesiana:** [[assessing-quality-ai-generated-exams-field-2025|Avaliando Exames Gerados por IA]] usa um modelo de TRI 2PL hierárquico bayesiano (com itens-âncora de pré-teste para posicionar 1.686 estudantes em uma escala comum de θ) para mostrar que questões geradas por IA se equiparam aos itens de exames padronizados escritos por especialistas em dificuldade e discriminação — uma demonstração em grande escala da TRI como espinha dorsal de validação para a [[automated-question-generation|geração automatizada de questões]].
- **Um [[benchmark]] alinhado a padrões pode saturar.** Em conjuntos de ciências do [[k-12|ensino fundamental e médio]] alinhados ao NGSS, a maioria dos modelos de pesos abertos pontuou acima de 90%, deixando as métricas clássicas de itens pobres — dificuldade alta, discriminação baixa, com células triviais acima de 90% —, de modo que os autores não conseguem separar itens fracos de um domínio que se tornou tratável ([[llm-benchmark-secondary-science-topics-2026|Schroeder et al. (2026)]]).

- **A informação do teste localiza a precisão.** Um teste de letramento em GenAI de 20 itens validado com um modelo 2PL (RMSEA = 0,03, CFI = 0,97) teve o pico de sua função de informação em θ = −0,8, tornando-o mais preciso para aprendentes de letramento baixo a moderado, e não uniforme ao longo da escala ([[jin-glat-genai-literacy-assessment|Jin et al. (2025)]]).

- **Separando respostas humanas de respostas de GenAI com estatísticas de ajuste pessoal:** [[irt-human-genai-mcq-responses|Strugatski e Alexandron (2026)]] aplicam estatísticas de ajuste pessoal (PFS) dentro da TRI para distinguir respostas humanas de respostas de [[generative-ai|IA generativa]] em avaliações de múltipla escolha. As PFS sinalizam as respostas de GenAI como respondedores \"aberrantes\" em dois contextos autênticos (um teste de [[chemistry-education|química]] e um exame nacional), mostram que [[conversational-ai|chatbots]] diferentes produzem padrões de resposta distintos (um grupo heterogêneo de \"inteligências\") e revelam que versões mais novas de GenAI se tornam mais parecidas com humanos — posicionando a TRI como um framework robusto para triagem de [[academic-integrity|integridade]] em testagem de alto impacto.

- **Os mesmos itens podem não medir o mesmo construto latente para uma LLM.** [[assessment-latent-structure-human-llm-2026|Strugatski, Zeinfeld e Alexandron (2026)]] compararam estruturas fatoriais humanas e de LLM em dois instrumentos com análise fatorial exploratória e correspondência de congruência; a similaridade LLM–humano permaneceu confiavelmente abaixo da linha de base humano–humano, então os parâmetros de TRI ajustados em humanos não se transferem automaticamente.

- **Estimativa de dificuldade por LLM contra parâmetros de TRI Rasch:** [[razavi-powers-item-difficulty-llm-2026|Razavi e Powers (2026)]] avaliam se o GPT-4o consegue estimar a dificuldade de itens de avaliação de matemática e leitura do K-5 (N = 5.170) calibrados sob o modelo de TRI Rasch. Uma abordagem de estimativa direta zero-shot correlacionou-se de moderada a fortemente com as dificuldades Rasch verdadeiras (r = 0,83 em matemática, r = 0,81 em leitura), mas foi desigual entre as séries e frequentemente não melhor do que um regressor dummy de média de série para as séries K e 1, provavelmente devido à restrição de faixa nas dificuldades dos itens das séries iniciais. Uma estratégia baseada em características — características cognitivas e linguísticas extraídas por LLM e alimentadas em modelos baseados em árvores — superou a estimativa direta (correlações de até r = 0,87), com a série e a contagem de palavras como principais preditores. O estudo ressalta que as estimativas de dificuldade por LLM precisam ser validadas contra parâmetros de TRI ajustados empiricamente, e que a extração estruturada de características pode aguçar a predição onde o julgamento holístico zero-shot fica aquém.

- **Explicando a dificuldade em vez de prevê-la.** [[explaining-question-difficulty-natural-language-2026|Cui et al. (2026)]] ajustam um modelo Rasch 1PL aos registros de resposta de LLM para GSM8K (1.319 questões), BBH-structured (1.396) e WinoGrande (1.267), com 5.000 modelos para GSM8K e WinoGrande e 3.811 para BBH-structured. Em seguida, fazem prompting em uma LLM para propor hipóteses em linguagem natural sobre por que um item é mais difícil do que outro, e as selecionam com regressão regularizada por L1 em questões mantidas em reserva. Usadas isoladamente em questões não vistas, as hipóteses selecionadas alcançam R² = 0,373 no GSM8K, 0,580 no BBH-structured e 0,090 no WinoGrande, sendo o melhor dos métodos comparados no GSM8K e no WinoGrande e o segundo melhor no BBH-structured, onde um RoBERTa-base ajustado alcança 0,646. Como características adicionais, elas somam +0,11 ao RoBERTa-base no GSM8K (0,362 para 0,468) e +0,19 e +0,18 a dois modelos de embeddings congelados. Uma sonda causal edita 50 questões de teste por conjunto de dados rumo a uma hipótese ou na direção oposta: edições que aumentam a dificuldade reduzem a precisão média em 15,27 e 23,88 pontos percentuais no GSM8K e no BBH-structured, enquanto edições que diminuem a dificuldade a elevam em 32,18 e 28,52. A dificuldade aqui é estimada a partir das respostas dos modelos, e não de quem fez o teste humano, então este é um resultado de avaliação de LLM e de psicometria.

- **Simular respondentes pode recuperar o que regredir o estímulo não consegue:** uma LLM multimodal ajustada que reproduz as probabilidades de escolha de opção dos estudantes ao longo dos níveis de habilidade aproximou a dificuldade mantida em reserva em r = 0,85, acima das linhas de base de regressão MathBERT (0,68) e MetaMath (0,75), e recuperou o parâmetro de adivinhação c em 0,48, enquanto a discriminação a permaneceu fraca (0,31) ([[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026)]]).
- **Falhas de elaboração de itens como triagem pré-implantação para parâmetros de TRI:** [[item-writing-flaws-irt-difficulty-2026|Schmucker e Moore (2026)]] testam se as rubricas de Falha de Elaboração de Item (IWF) — uma avaliação textual de domínio geral, que não exige dados de estudantes — predizem a dificuldade e a discriminação de TRI estimadas empiricamente. Ao longo de **7.126 questões de múltipla escolha** em [[stem-education|STEM]] (ciências físicas, [[math-education|matemática]], ciências da vida e da terra), eles usaram codificação automatizada assistida por LLM para mostrar que as rubricas de IWF carregam validade preditiva para os parâmetros de TRI empíricos, oferecendo uma triagem pré-implantação escalável que complementa ou substitui parcialmente a testagem piloto intensiva em recursos.
- **Filtragem de risco baseada em TRI para correção seletiva por IA:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] ajustam um modelo de TRI logístico de dois parâmetros a dados de química escrita à mão corrigidos por IA e definem o \"risco\" de aceitar um julgamento da IA como o desvio absoluto entre a nota normalizada da IA e a probabilidade esperada pela TRI de crédito (Risco = |s−p|); aceitar apenas itens dentro de uma tolerância escolhida dessa expectativa bayesiana sinaliza notas da IA \"surpreendentes\" para [[human-in-the-loop-ai|revisão humana]], transformando a TRI de uma ferramenta pura de agregação de notas em um mecanismo operacional de aceitação/adiamento para a [[automated-assessment|correção automatizada]] — um que alcançou alinhamento com a correção humana similar a limiares de crédito parcial mais simples, mas com menor carga de trabalho humana, embora sua lógica seja menos transparente para públicos não técnicos.
- **A TRI como camada de calibração dentro de um modelo de diagnóstico:** o PLCD acrescenta uma cabeça de adivinhação e deslizamento inspirada na TRI sobre respostas no nível do exercício, melhorando a qualidade da probabilidade em vez da precisão — o erro esperado de calibração caiu de 0,071 para 0,037 no XES3G5M — tornando a TRI uma correção interna do ruído de resposta, e não apenas um modelo de pontuação ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

- **Calibração de dividir e conquistar para bancos continuamente em evolução:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]] tratam a recalibração da TRI como um problema de escala, e não de ajuste. Quando a geração de itens baseada em IA e a predição de parâmetros baseada em características tornam um banco maior, mais esparso e continuamente atualizado, reajustar todo o histórico de respostas a cada atualização se torna progressivamente mais custoso; a *calibração por consenso* deles, em vez disso, calibra cada período de tempo uma vez e combina um novo período com as posteriores já computadas dos períodos anteriores. Duas características a separam do trabalho de dividir e conquistar existente em TRI: os períodos não compartilham uma métrica latente, então cada um é ligado a uma métrica de referência por um critério Haebara robusto resolvido *separadamente para cada sorteio da posterior* (carregando o erro de ligação para as posteriores ligadas), e cada período é seu próprio ajuste hierárquico, contribuindo com uma priori estimada, então o produto ingênuo das posteriores precisa ter essa priori dividida para fora e uma priori de consenso reinstituída — reduzindo-se à regra da máquina de comitê bayesiana quando as prioris são fixas. Contra um benchmark agrupado em quatro períodos trimestrais do Duolingo English Test, as médias das posteriores concordaram em r = .998 (dificuldade) e .991 (log-discriminação), com os SDs das posteriores em r = .970 e .920, deixando subdispersão leve (razão de SD 0,91–0,98), maior no tercil de exposição por período mais baixo. É a calibração da TRI reengenheirada para as condições de aplicação que os bancos de itens gerados por IA criam.

- **Quão raramente a TRI ancora a validação de instrumentos:** uma apreciação dos instrumentos de letramento em IA de professores quantifica a ausência da TRI, e não seu uso. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore e Maat (2026)]] classificaram 33 instrumentos contra uma matriz de decisão adaptada de COSMIN e Terwee et al. (2007); a validade estrutural era forte, com 24 (72,7%) no Grau A por meio de CFA, PLS-SEM ou modelagem por TRI, embora nenhum usasse TRI ou Rasch como sua evidência primária, e apenas cinco instrumentos (15,2%) relatassem evidência de invariância de mensuração ou de funcionamento diferencial dos itens. Os autores argumentam a favor da TRI e de tarefas de desempenho ao lado da autoavaliação, para separar a capacidade validada da confiança relatada.
- **Uma alternativa causal à TRI associativa.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] argumentam que a TRI e os modelos de aprendente por rede bayesiana não conseguem expressar intervenções ou contrafactuais, e, em vez disso, elicitam equações estruturais de especialistas; em uma bateria de teste adaptativo com 109 estudantes, o modelo elicitado foi ligeiramente menos preditivo (−287 contra −277 de log-verossimilhança do teste), mas apoiou consultas contrafactuais sobre ajuda.

### Conexões

A TRI é uma fundação da [[educational-measurement|mensuração educacional]] e da [[assessment-validity|validade da avaliação]], sustenta a [[adaptive-learning|aprendizagem adaptativa]] (seleção adaptativa de itens) e a [[student-modeling|modelagem do estudante]], e se conecta à [[psychometrically-aware-ai|IA psicometricamente consciente]] (avaliação por IA alinhada com a teoria da mensuração) e ao [[knowledge-tracing|rastreamento de conhecimento]]. Ela aparece na [[llm-difficulty-calibration-programming-exams-2026|calibração de dificuldade por LLM]] para avaliação em programação.

## Ideias equivocadas comuns

- **"A TRI exige aplicação convencional de testes."** Habilidade e dificuldade podem ser recuperadas dos **logits de próximo token**: extrair **a habilidade do estudante θ = z^GOOD − z^BAD** e **a dificuldade do turno do tutor d = z^HARD − z^EASY** e combiná-las em um preditor Rasch 1PL torna o rastreamento de conhecimento baseado em diálogo interpretável em termos de TRI. O framework psicométrico se aplica a dados de interação, e não apenas a respostas de itens.
- **"Um benchmark que a maioria dos modelos passa é um bom benchmark."** Um benchmark alinhado a padrões pode **saturar**: em conjuntos de ciências do ensino fundamental e médio alinhados ao NGSS, **a maioria dos modelos de pesos abertos pontuou acima de 90%**, deixando as métricas clássicas de itens pobres. Saturação não significa que os modelos são excelentes; significa que os itens já não discriminam.
- **"A dificuldade de um item é uma propriedade intrínseca do item."** Uma sonda causal que **editou 50 questões de teste por conjunto de dados** rumo a uma hipótese ou na direção oposta constatou que **edições que aumentam a dificuldade reduziram a precisão média em 15,27 e 23,88 pontos percentuais** no GSM8K e no BBH-structured. A dificuldade é uma relação entre item e modelo, e ela se move quando o item se move.
- **"A TRI serve apenas para pontuar quem aprende."** [[assessing-quality-ai-generated-exams-field-2025|Avaliando Exames Gerados por IA]] usa um **modelo 2PL hierárquico bayesiano com itens-âncora de pré-teste para posicionar 1.686 estudantes**, o que é garantia de qualidade para a própria avaliação, e não pontuação para o estudante.

## Conceitos conectados

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## Artigos conectados
- [[unified-irt-framework-question-tutoring-dialogue-2026]] — Um Framework de Resposta Unificado para Questões e Diálogos de Tutoria
- [[explaining-question-difficulty-natural-language-2026]] — Explicando a dificuldade das questões de LLM em linguagem natural por meio da TRI e de edições causais (Cui et al. 2026)
- [[item-writing-flaws-irt-difficulty-2026]] — O impacto das falhas de elaboração de itens sobre a dificuldade e a discriminação em TRI (Schmucker & Moore 2026)
- [[causal-modeling-competency-assessment-2026]] — Modelagem Causal de Intervenções de Apoio para a Avaliação de Competência dos Estudantes
- [[assessment-latent-structure-human-llm-2026]] — Os instrumentos de avaliação medem a mesma coisa para humanos e para LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Validação de campo em grande escala com TRI de exames gerados por IA
- [[jin-glat-genai-literacy-assessment]] — O GLAT usa validação TRI/2PL (Jin et al. 2025)
- [[llm-item-difficulty-prediction]] — Predição de dificuldade de itens por LLM
- [[llm-psychometric-calibration-cdp]] — Alinhando a avaliação por LLM com a calibração psicométrica
- [[llm-difficulty-calibration-programming-exams-2026]] — Calibração de dificuldade por LLM em exames de programação
- [[multimodal-item-parameter-estimation-2026]] — Estimativa multimodal de parâmetros de itens
- [[huang-interpretable-knowledge-tracing-2026]] — Rastreamento de conhecimento interpretável
- [[irt-human-genai-mcq-responses]] — Usando a TRI para separar respostas humanas de respostas de GenAI em múltipla escolha
- [[razavi-powers-item-difficulty-llm-2026]] — Estimando a dificuldade dos itens usando LLMs e ML baseado em árvores
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Além dos Embeddings de ID: Modelagem de Linguagem Fundamentada no Processo para Diagnóstico Cognitivo
- [[bayesian-consensus-irt-item-banks-2026]] — Calibração por consenso bayesiana de um banco de itens de TRI continuamente em evolução (Jewsbury et al. 2026)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Auditoria de campo mostrando que a TRI/Rasch é raramente usada como evidência primária de validação em instrumentos de letramento em IA de professores
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: a tutoria por IA e a tutoria humana produzem ganhos de aprendizagem equivalentes no GRE
- [[llm-benchmark-secondary-science-topics-2026]] — Um benchmark alinhado a padrões pode saturar
