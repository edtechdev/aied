---
title: Limitações na Pesquisa em AIEd
created: "2026-08-15T09:18:04-04:00"
updated: "2026-10-28T01:06:31-04:00"
type: concept
foundations: [ai-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, educational-measurement]
research_method: [literature review]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, research-methods-aied]
translation_of: concepts/limitations-in-aied-research
source_updated: "2026-10-28T01:06:31-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **As limitações na pesquisa em AIEd** — as fraquezas e restrições recorrentes que afetam quanta confiança podemos depositar nos achados de IA na educação, e como os leitores deveriam interpretá-los. Elas atravessam estudos individuais: limitações metodológicas (generalizabilidade, tamanho de amostra, validade, autorrelato), o problema da velocidade (a IA e os achados envelhecem rapidamente enquanto a publicação fica atrás), limitações de pesquisa-prática (reprodutibilidade, práticas FAIR, ferramentas proprietárias) e uso fraco de teoria. Os limites metodológicos são mensuráveis, e não impressionistas: em uma revisão crítica de 80 estudos de HCI sobre pensamento crítico com IA, 42 (52%) não rodaram nenhum grupo de controle e a maior parte do resto se apoiou em autorrelato, de modo que os achados positivos do campo repousam sobre designs que não conseguem separar o efeito da IA da reflexão ordinária ([[critical-review-critical-thinking-hci-research-ai-2026]]). A codificação de resultados é desigual da mesma forma: uma revisão sistemática de 103 estudos de ensino superior ordenou seu corpus em uma tipologia de resultados de quatro níveis e colocou 56% dele em um único padrão condicional, onde confiança e motivação subiram sem um ganho correspondente em competência durável ([[generative-ai-higher-education-systematic-review-2026]]). Reconhecer esses limites é essencial para ler a literatura criticamente e para projetar estudos mais fortes.

## Questões a considerar

- Quanto você confiaria em uma manchete como "tutoria com IA aumenta a aprendizagem em 30%" se descobrisse que ela veio de 30 estudantes em um curso de uma instituição? A página sinaliza generalizabilidade e amostras pequenas como limites recorrentes — o que você gostaria de saber antes de agir com base em qualquer achado isolado?
- Uma limitação marcante é o "problema da velocidade": a IA evolui mais rápido do que os achados são publicados, de modo que um estudo de uma geração de modelo pode já descrever um sistema obsoleto. Como isso deveria mudar a confiança que você deposita na pesquisa em educação com IA?
- Muitos estudos dependem de atitudes e uso [[self-report-measures|autorrelatados]], que são enviesados — as pessoas superestimam sua competência e subnotificam o uso indevido. Você já respondeu a uma pesquisa sobre suas próprias habilidades ou comportamento de uma forma que não correspondia à realidade? Por que medidas baseadas em percepção divergem tão frequentemente do desempenho objetivo?
- A página nota que frameworks familiares como a taxonomia de Bloom são frequentemente mal lidos como escadas rígidas, e que até teorias amplamente usadas como a [[cognitive-offloading|teoria da carga cognitiva]] foram desafiadas. Quando você já viu uma teoria invocada como verdade assentada em um contexto onde sua própria evidência era de fato contestada?
- A maior parte da pesquisa em IA depende de modelos proprietários e opacos cujos dados e atualizações você não pode inspecionar. Se você não pode verificar exatamente qual modelo produziu um resultado, quanto pode confiar em afirmações construídas sobre ele — e o que tornaria os achados mais reprodutíveis?
- Se você é um instrutor ou designer sem tempo para ler pesquisa primária, como decide quais afirmações sobre IA são confiáveis o suficiente para mudar sua prática — dado que a literatura é fragmentada, provisória e escrita para pesquisadores?

## Introdução

A IA na educação é um campo veloz e heterogêneo, e sua base de evidências carrega um conjunto distintivo de limitações que pesquisadores, praticantes e formuladores de política deveriam pesar ao usar qualquer achado. Algumas são compartilhadas com a literatura mais ampla de ciências da aprendizagem e psicologia; outras são amplificadas ou tornadas únicas pela própria natureza da IA. Esta página as organiza em quatro áreas transversais.

## Limitações metodológicas

A página de [[research-methods-aied|métodos de pesquisa]] da base de conhecimento detalha as forças e limitações de cada design. Vários limites recorrem entre designs e merecem atenção particular:

- **Generalizabilidade.** Achados de um único curso, instituição, disciplina ou contexto nacional podem não se transferir. Amostras pequenas, de conveniência ou de instituição única limitam a validade externa; resultados de uma ferramenta de IA raramente se estendem a uma ferramenta ou contexto diferente.
- **Comparações transculturais de crença carregam um risco de medição.** Uma survey de cinco países com 1.405 professores de K-12 usou tradução automática por máquina sem retrotradução ou teste de invariância de medição e mediu preocupação com plágio e criatividade com itens únicos, de modo que seus contrastes entre países não podem ser lidos como construtos equivalentes ([[k12-teachers-genai-beliefs-five-countries-2026|Xiu et al. (2026)]]).
- **O rigor ao nível de síntese é um eixo separado do rigor do estudo primário.** Uma meta-análise pode satisfazer seus próprios critérios de inclusão e ainda assim agrupar estudos que diferem em design, fidelidade de implementação e medida de resultado sem ponderar nada disso: [[ai-supported-instruction-stem-meta-analysis-2026|Doğan e colegas (2026)]] declaram abertamente que não usaram nenhuma ferramenta formal de avaliação de qualidade e trataram os critérios de inclusão como o limiar de rigor, de modo que um estudo quase-experimental e um randomizado contribuíram igualmente para a estimativa agrupada de [[stem-education|STEM]]. A mesma revisão mostra um risco de reporte relacionado: sua heterogeneidade é citada como I² = 82,98% sob um modelo de efeitos fixos e I² = 15,75% sob o modelo de efeitos aleatórios, o que significa que leitores que retiram um único número de heterogeneidade sem seu modelo não podem dizer quão inconsistente o corpus de fato é. Avalie uma síntese por como ela tratou tamanhos de efeito dependentes, qualidade e heterogeneidade, e não apenas por se seguiu um protocolo de busca.
- **O design de recuperação define os números principais de uma síntese.** Em uma revisão de escopo de 195 estudos de formação de professores, competência digital e [[tpack|TPACK]] foram descritores de busca explícitos, enquanto design instrucional e avaliação não tiveram equivalente, de modo que os 46,5% e 1,9% relatados descrevem o corpus recuperado, e não o campo ([[digital-competence-ai-responsive-pedagogy-2026|Patiño Hernández et al. (2026)]]).
- **Tamanhos de amostra pequenos.** Muitos estudos de AIEd são subpotentes — participantes poucos demais para detectar de forma confiável efeitos significativos ou para apoiar as afirmações fortes que às vezes deles se tiram.
- **Escores de endpoint podem esconder a coisa estudada.** Em uma revisão PRISMA de 103 estudos de [[higher-ed|ensino superior]], 56% relataram ganhos que eram condicionais a suporte ou verificação, e diferenças nulas de notas frequentemente acompanharam mudanças reais de processo — mais depuração, mais ciclos de verificação —, de modo que as notas por si só não podem dizer se a [[generative-ai|GenAI]] fortaleceu ou esvaziou a prática ([[hawi-genai-higher-ed-uses-outcomes-risks-2026|Hawi e Samaha (2026)]]).
- **O design de validação pode fabricar o número principal.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara e Halloluwa (2026)]] fizeram benchmark de quinze modelos em familiaridade baseada em EEG e mostram que a validação cruzada estratificada padrão permite vazamento temporal e relata até 0,9853 de F1, enquanto a validação Group K-Fold independente de teste derruba o pico para 0,6038 de F1 — ainda acima do acaso, mas longe do resultado citado.
- **Benchmarks podem fornecer as falhas que relatam.** A renotação por especialistas de 250 itens de física rejeitados atribuiu 238 (95,20%) a erros de benchmark ou de corretor e apenas 12 (4,80%) a erros genuínos do modelo, de modo que a taxa de erro medida de um modelo não pode cair abaixo da taxa de defeito do instrumento. ([[frontier-models-physics-benchmark-audit-2026|Ansari et al. (2026)]]).
- **Validade e medição.** A [[assessment-validity|validade de construto]] é frequentemente fina: proxies para "aprendizagem", "[[student-engagement|engajamento]]" ou "letramento" variam amplamente, e os instrumentos nem sempre são validados para a população ou construto estudado. A acurácia de [[benchmark|benchmark]] não é igual à eficácia educacional.
- **Autorrelato e dados de survey.** Grande parte do corpus depende de atitudes, motivação e uso autorrelatados. O autorrelato está sujeito a viés — os respondentes superestimam competência, subnotificam o [[ai-misuse-learning-harm|uso indevido]] e avaliam mal seu próprio comportamento —, de modo que medidas baseadas em percepção frequentemente divergem do desempenho objetivo (veja [[ai-literacy-assessment-misalignment]] e [[educational-measurement|medição educacional]]).
- **Contexto e reporte de validação podem ser quantificados ao longo de uma literatura.** Uma revisão PRISMA-ScR de 421 estudos de NLP sobre comentários de avaliação de ensino encontrou o país não resolvido em 221 estudos, escopos de instituição única em 232 de 284 casos resolvidos (81,7%), validação externa em 33 (7,8%) e concordância entre anotadores em 54 (12,8%) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher e da Silva (2026)]]).
- **A riqueza de reporte é mensurável, e o tipo de método a prediz.** Em 888 artigos de automação de revisão, 38,0% dos artigos de software/produto desde 2023 não relataram nenhuma avaliação, contra 9,3% dos artigos de LLM, e 52% dos 118 artigos de LLM apenas positivos ainda sinalizaram uma barra de confiabilidade não atendida — o padrão por trás dos cinco níveis de divulgação da PRISMA-LLM ([[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta e Lin (2026)]]).
- **Padronizar dentro de cada conjunto de dados pode esconder uma declaração equivocada de dispersão.** Quando coortes educacionais sintéticas foram padronizadas por sua própria dispersão, o fato de que sua estrutura semanal variava 2,6 a 4,9 vezes menos que a das coortes reais tornou-se invisível às estatísticas relatadas — pré-processamento rotineiro, nas palavras dos autores, e não uma preocupação hipotética ([[synthetic-educational-data-structural-fidelity-2026|Inoue e Yasutake, 2026]]).
- **Rótulos gerados por modelo não são verdade de base.** Onde os rótulos que treinam ou avaliam um sistema são eles próprios produzidos por modelos de linguagem, a concordância entre anotadores não pode estabelecer validade: [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] nunca validaram suas anotações de asserção contra rótulos ouro humanos, e os 49 classificadores de encoder que eles liberam herdam essa procedência e podem não ser válidos onde as aplicações diferem em dimensões significativas. Seu schema também teve desempenho estritamente inferior ao classificador ajustado treinado em dados anotados por especialistas (macro-F1 0,673 contra 0,76), deixando os corpora rotulados por especialistas como algo que vale a pena quando alta confiança é exigida.

## O problema da velocidade: a IA evolui mais rápido do que os achados

A IA está mudando continuamente, e as conclusões tiradas de qualquer modelo ou sistema específico podem ficar **desatualizadas rapidamente**. Um estudo de uma geração de [[llm|LLM]] pode não descrever a próxima; escores de benchmark, qualidade de tutoria e até a utilidade prática de um achado mudam à medida que os modelos melhoram. Agravando isso, o **processo de publicação é lento** — do design do estudo à publicação revisada por pares pode levar um ano ou mais —, de modo que um resultado publicado pode já descrever um sistema obsoleto. Revisores e leitores deveriam, portanto, tratar os achados de AIEd como afirmações provisórias e sensíveis à data, em vez de verdades estáveis, e preferir trabalho recente, orientado à replicação e explícito quanto à versão.

[[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni e Fryer (2026)]] tornam concreta a consequência para uma literatura: como os sistemas baseados em [[rag|RAG]] só se tornaram publicamente disponíveis em novembro de 2023, eles argumentam que achados pré-2023 de [[intelligent-tutoring|tutoria inteligente]] — que repousam sobre sistemas de NLP baseados em regras, correspondência de palavras-chave ou heurísticos que têm pouca semelhança funcional com os modelos de linguagem grandes atuais — deveriam ser tratados como contexto histórico em vez de evidência diretamente comparável, e relatam que sua revisão não encontrou nenhum RCT publicado examinando um chatbot de IA baseado em RAG na educação de graduação ao longo de um semestre acadêmico completo. A implicação é que questões fundamentais sobre como a GenAI afeta a aprendizagem podem precisar ser refeitas contra cada nova geração de modelo, em vez de assentadas pelo agrupamento de resultados mais antigos.

## Limitações de pesquisa-prática

Várias limitações dizem respeito à condução e à infraestrutura da própria pesquisa:

- **Falta de reprodutibilidade.** Estudos frequentemente não relatam detalhe suficiente (prompts, versões de modelo, hiperparâmetros, dados, código de análise) para que outros reproduzam ou verifiquem os resultados — um problema particular dado quão sensível é a saída dos LLMs a prompts e configurações.
- **Práticas de pesquisa FAIR.** A prática aberta e reprodutível — dados e código **E**ncontráveis, **A**cessíveis, **I**nteroperáveis e **R**eusáveis, pré-registro e benchmarks compartilhados — é adotada de forma desigual na AIEd. A adesão fraca aos princípios FAIR torna mais difícil reutilizar, comparar e construir sobre os estudos.
- **Ferramentas e modelos proprietários.** Grande parte da pesquisa depende de [[ai-technologies|sistemas de IA]] fechados e proprietários cujo comportamento interno, dados de treinamento e atualizações de modelo são opacos e podem mudar sem aviso. Isso limita a reprodutibilidade, torna a replicação exata impossível e pode vincular os achados ao roteiro de um fornecedor. Também levanta questões sobre independência de avaliação (veja [[ai-ed-evaluation]]).

## Uso fraco ou limitado de teoria

Uma crítica recorrente é que muitos artigos empíricos têm **enquadramento teórico limitado ou desatualizado**. Pesquisadores podem:

- **Adotar teorias de forma acrítica.** Frameworks são tomados de empréstimo porque são familiares, sem engajar plenamente suas suposições, escopo ou base de evidência.
- **Interpretar frameworks como sequências fixas.** Vários frameworks amplamente usados são tratados como escadas ordenadas que os aprendizes devem subir de um estágio "baixo" a um "alto" — mas a evidência não apoia sempre começar embaixo. Por exemplo:
    - A **taxonomia de Bloom** é frequentemente lida como uma hierarquia rígida (recordação → aplicação → avaliação), mas objetivos de ordem superior não exigem primeiro perfurar os de ordem inferior; tarefas podem ser projetadas para engajar a avaliação ou a criação desde o início (veja [[cross-dataset-bloom-question-classification]]).
    - O **ADDIE** e outros modelos de design instrucional são às vezes tratados como fases lineares rígidas em vez das heurísticas de planejamento iterativas e flexíveis que devem ser (veja [[learning-design|design de aprendizagem]]).
- **Ignorar teorias contestadas.** Algumas teorias usadas amplamente na AIEd foram elas mesmas desafiadas. A **teoria da carga cognitiva**, por exemplo, foi criticada e suas afirmações empíricas refutadas ou disputadas em estudos anteriores, mas ela continua a ser invocada como fundamento assentado em novos trabalhos de AIEd.

A implicação não é que teorias e frameworks sejam inúteis, mas que eles deveriam ser usados com atenção à sua base de evidência real, seu escopo pretendido e suas críticas conhecidas — e não como [[scaffolding|suportes]] auto-evidentes ou sequências procedurais rígidas.

## A crise meta-analítica de evidência

Um corpo crescente de metapesquisa — revisões que examinam as revisões — argumenta que as afirmações principais do campo sobre ganhos de aprendizagem impulsionados por IA repousam sobre uma base de evidências muito mais fraca do que parece. Três críticas complementares fazem o caso com força incomum:

- **O viés de síntese positiva é severo e quantificável.** [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]], em uma meta-meta-análise de nível de estudo de 1.840 tamanhos de efeito de 67 meta-análises, encontraram forte evidência de viés de publicação (todos os testes de Egger *p* < ,0001) e heterogeneidade extrema entre estudos (τ = 0,869). Os efeitos ajustados pelo viés de publicação foram cerca de **um terço** da magnitude comumente relatada (SMD = 0,196 contra uma mediana de 0,67 na literatura publicada), com um intervalo de predição abrangendo −1,521 a +1,908 — de grande dano a grande benefício. Nenhum subgrupo de resultado, campo, nível ou papel de IA mostrou ganhos consistentes, e não houve diferença entre estudos pré e pós-2023. Seu veredicto: afirmações amplas de ganhos de aprendizagem generalizados são prematuras.
- **Os métodos meta-analíticos estão sendo sistematicamente mal aplicados.** A auditoria forense de [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] sobre 14 meta-análises de AIEd de alto impacto descobriu que *nenhuma* forneceu uma base válida para suas afirmações: nenhuma tinha um construto coerente (tratando a ferramenta "ChatGPT" como se fosse uma única intervenção, e agrupando escores de teste, motivação, [[self-efficacy|autoeficácia]] e atitudes em um único número de "[[learning-gains|desempenho acadêmico]]"); a heterogeneidade relatada era severa, com I² variando de 77,2% a 94,4% entre as 13 meta-análises que a relataram e 12 dessas 13 acima de 80%, e ela nunca foi resolvida (nenhuma atendeu ao tamanho mínimo de subgrupo de dez estudos, cinco se apoiaram em subgrupos de estudo único, e outras três em subgrupos de dois); doze trataram tamanhos de efeito dependentes do mesmo estudo como independentes, inflando a evidência aparente; e nenhuma avaliou validamente o viés de publicação (métricas desacreditadas de fail-safe N e testes de Egger mal aplicados eram comuns). Como o I² depende da precisão, ele não pode por si só estabelecer quão distantes estão os efeitos verdadeiros, e o reporte que mostraria isso estava em grande parte ausente: apenas quatro meta-análises relataram variância entre estudos (τ²) e apenas duas relataram um intervalo de predição, ambos incluindo zero. Uma maioria (61%) dos estudos primários vistoriados aleatoriamente era problemática, e um estudo com referências fabricadas foi incluído por seis das 14 meta-análises.
- **O "tratamento" é uma caixa-preta.** [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] revivem o debate mídia/métodos para argumentar que "ChatGPT" é uma ferramenta, não um método — perguntar se ele "melhora a aprendizagem" é um non sequitur. Auditando um subconjunto dos estudos por trás da meta-análise de Deng et al. (2025), eles encontraram que apenas 21% das comparações tinham um tratamento bem definido, grupo de controle *e* medida de aprendizagem válida; os tamanhos de efeito relatados (g = 0,7) chegaram a exceder os de [[intelligent-tutoring|Sistemas de Tutoria Inteligente]] construídos para o fim (0,66), um sinal de alerta de que o "tratamento" era um "molho secreto" heterogêneo.

A convergência dessas três críticas independentes é ela mesma evidência: através de métodos, corpora e enquadramentos diferentes, elas chegam à mesma conclusão — que os tamanhos de efeito positivos de AIEd, especialmente de meta-análises iniciais, provavelmente refletem **viés de publicação, incoerência de construto e atalhos metodológicos** tanto quanto (ou mais do que) ganhos de aprendizagem genuínos. Isso não significa que ferramentas de IA não tenham valor educacional; antes, significa que a evidência de *nível de campo* para seu valor está atualmente inflada e deve ser lida de acordo. Isso também desloca a responsabilidade para a [[meta-analysis-systematic-review|qualidade da síntese]]: uma meta-análise é tão confiável quanto a coerência de seus construtos, a independência de seus tamanhos de efeito, a adequação de sua análise de moderadores e heterogeneidade, e a validade de sua avaliação do viés de publicação — cada uma das quais as críticas mostram ser rotineiramente violada.

## Lendo a literatura de AIEd criticamente

Tomadas em conjunto, essas limitações argumentam por uma leitura crítica e multissinal da pesquisa em AIEd: verifique se um achado generaliza e é adequadamente potente; verifique como os construtos foram medidos (e se as afirmações repousam sobre autorrelato); prefira trabalho recente, explícito quanto à versão e reprodutível; e interrogue o enquadramento teórico em vez de tratar frameworks familiares como dados. Esse é o complemento da [[research-methods-aied|escolha rigorosa de método]] e da [[ai-ed-evaluation|avaliação]] rigorosa: bons métodos e boa avaliação são necessários, mas ler com atenção às limitações é o que transforma evidência em decisões defensáveis.

## Da pesquisa à prática

Uma limitação adicional, prática, é o **desafio de aplicar a pesquisa ao [[teacher-role|ensino]] e ao design instrucional**. Praticantes — instrutores, [[stakeholders|designers instrucionais]] e desenvolvedores de docência — frequentemente não têm tempo ou expertise especializada para ler, avaliar e traduzir pesquisa primária em decisões concretas de sala de aula. A literatura é grande, fragmentada e escrita para pesquisadores; os achados são relatados com detalhe estatístico e metodológico que não é imediatamente acionável; e, como as afirmações são provisórias (veja o problema da velocidade acima), um praticante não pode simplesmente tomar um único estudo ao pé da letra. Isso cria uma lacuna entre o que a evidência apoia e o que de fato chega à [[pedagogy|prática de ensino]].

O propósito desta base de conhecimento é ajudar a fechar essa lacuna — tornar mais fácil acompanhar, interpretar e aplicar a pesquisa em IA na educação à prática — ao curar achados de acesso aberto em resumos estruturados e acessíveis, conectar trabalhos relacionados por meio de [[ai-education|páginas de conceito]], e sinalizar as limitações que os leitores deveriam pesar. Ela visa apoiar a prática informada por evidência no ensino e no design instrucional e, ao fazê-lo, também trazer à tona lacunas e questões que podem informar nova pesquisa e desenvolvimento. Compreender os limites da pesquisa não é, portanto, um fim em si mesmo: é o que permite aos praticantes aplicar os achados de forma apropriada e permite aos pesquisadores projetar estudos mais fortes que melhor sirvam à prática.

## Conceitos conectados

- [[interpreting-and-applying-aied-research]]
- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[benchmark]]
- [[rct]]
- [[meta-analysis-systematic-review]]
- [[ai-education]]
- [[icap-framework]]
- [[learning-design]]
- [[llm]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[theory-development-aied]] — Theory Development in AI in Education

## Artigos conectados

- [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026]] — AI chatbots in higher education: comparing expectations to evidence (Thoeni & Fryer 2026)
- [[ground-truth-reliability-aied]] — Reliability and validity of ground truth in evaluation
- [[ai-literacy-assessment-misalignment]] — Self-reported vs. performance-based AI literacy
- [[machines-misread-pedagogical-quality]] — Why machines misread pedagogical quality
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Critical limits of AI tutors and theory use
- [[cross-dataset-bloom-question-classification]] — Bloom's taxonomy and question classification
- [[eeg-familiarity-automated-assessment-2026]] — Automating Learner Assessment: EEG-Based Familiarity Prediction
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause (media-comparison critique)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analysis: publication-bias-adjusted AI effects ~1/3 of reported size
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews
- [[frontier-models-physics-benchmark-audit-2026]] — How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inclusion criteria used as the rigor threshold, and a heterogeneity figure that changes with the model (Doğan et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — A cluster-randomized classroom trial whose performance outcome did not reach significance (Rücker & Becker-Genschow 2025)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[digital-competence-ai-responsive-pedagogy-2026]] — Scoping review of 195 teacher-education studies where search-string design shapes the reported frequencies
- [[k12-teachers-genai-beliefs-five-countries-2026]] — Cross-national K-12 teacher survey: machine-translated items, single-item concern measures, no invariance testing
- [[hawi-genai-higher-ed-uses-outcomes-risks-2026]] — Systematic review of 103 GenAI higher-education studies: 56% conditional gains, grades masking process change (Hawi & Samaha 2026)
