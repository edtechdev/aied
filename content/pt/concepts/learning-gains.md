---
title: "Ganhos de aprendizagem"
created: "2026-08-09T16:52:03-04:00"
updated: "2026-10-03T12:32:09-04:00"
type: concept
assessment: [assessment]
audience: [learners]
level: [higher ed, k 12]
page_kind: [evaluation]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/learning-gains
source_updated: 2026-10-12T09:45:00-04:00
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Ganhos de aprendizagem** — melhorias mensuráveis em conhecimento, habilidades ou competências dos estudantes resultantes de intervenções educacionais, incluindo instrução assistida por IA. Na pesquisa em [[ai-education|IA na educação]], os ganhos de aprendizagem servem como medida de desfecho primária para avaliar se ferramentas de IA realmente melhoram a aprendizagem — e não apenas o [[student-engagement|engajamento]] ou a satisfação.

## Perguntas para considerar

- Você já sentiu que aprendeu muito com uma atividade, para depois reprovar em uma prova que media algo diferente? A página distingue o desempenho imediato com apoio de IA da aprendizagem duradoura — como esses dois poderiam divergir na sua própria experiência?
- Um achado central é que a IA generativa pode inflar as notas em lições de casa assistidas por IA ao mesmo tempo que reduz as notas em medidas supervisionadas e sem consulta. Se você estivesse avaliando se uma ferramenta de IA realmente ajuda estudantes a aprender, em qual desfecho confiaria e por quê?
- A pesquisa mostra que a dependência não guiada da IA prevê piores ganhos de aprendizagem, enquanto o uso estruturado prevê melhores — a mesma ferramenta, desfechos opostos. O que distingue o uso "estruturado" do "não guiado" em uma sala de aula real?
- Botões de dica se correlacionam com menos aprendizagem: mais dicas, menos aprendizagem. Você já foi tentado a recorrer a uma dica ou a uma resposta no momento em que travou? O que isso sugere sobre quanta luta é de fato necessária para a aprendizagem?
- Uma metanálise grande agrupou muitos estudos e concluiu que [[edtech-platform|EdTech]] com IA elevou a aprendizagem em uma quantidade modesta, sem vantagem para a IA generativa sobre ferramentas adaptativas anteriores. Como essa estimativa cautelosa e agrupada deveria mudar a forma como você lê afirmações entusiasmadas sobre a eficácia de um único produto de IA?

## Introdução

Os ganhos de aprendizagem são o teste derradeiro de qualquer tecnologia educacional. Na pesquisa da base de conhecimento, eles aparecem como variáveis dependentes em [[rct|ensaios controlados aleatorizados]], comparações pré-pós em estudos quase experimentais e análises correlacionais que ligam o uso de ferramentas de IA a desfechos acadêmicos.

**Terminologia.** O sentido de *desfecho* de realização — desempenho estudantil, desempenho acadêmico, desempenho de aprendizagem, desempenho prévio, lacunas de desempenho — é tratado aqui como sinônimo de ganhos de aprendizagem, e essas expressões apontam para esta página. O sentido *sentido* ("uma sensação de realização") é uma experiência motivacional, e não um desfecho medido; veja [[motivation|motivação]] e [[self-efficacy|autoeficácia]]. A teoria das metas de realização ("metas de realização", orientações de meta) é igualmente um construto motivacional e aponta para [[motivation|motivação]].

Achados-chave da base de conhecimento:

- A pesquisa sobre **[[adaptive-pretesting-retention|pré-teste adaptativo]]** examina se o [[retrieval-spacing-interleaving|pré-teste]] habilitado por [[generative-ai|IA generativa]] produz ganhos de aprendizagem duradouros que persistem além do teste imediato.
- As **[[genai-meta-analysis-programming-learning|metanálises de IA generativa em programação]]** concluem ganhos de aprendizagem positivos a partir do uso estruturado de IA, mas efeitos negativos a partir da dependência não guiada — uma distinção-chave entre produtividade e aprendizagem duradoura.
- A **[[lak2026-hint-button-unproductive-use|pesquisa sobre botões de dica]]** mostra associações negativas entre abuso de dicas e ganhos de aprendizagem — mais dicas se correlacionam com menos aprendizagem.
- Os estudos de **[[instructional-guidance-genai-learning|orientação instrucional]]** demonstram que os ganhos de aprendizagem dependem de COMO a IA é usada, não apenas de SE ela está disponível.
- A **[[burneo-can-edtech-close-learning-gaps-2026|metanálise do Banco Mundial]]** agrupa 191 tamanhos de efeito de 14 RCTs para estimar que EdTech adaptativa e com IA eleva a aprendizagem em ~0,125 dp em média — acima da mediana dos RCTs em educação —, ao mesmo tempo que não encontra vantagem para a IA generativa sobre ferramentas adaptativas anteriores.
- **Os ganhos são interações conteúdo–tratamento, não constantes.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit et al. (2025)]] mostram que a proporção ótima exemplo–problema depende do conteúdo de conhecimento: a prática pura de [[mastery-learning|recuperação]] rende ganhos maiores para fatos literais, enquanto a prática integrada a exemplos (alternando exemplos resolvidos e problemas) rende ganhos maiores para habilidades generalizáveis — evidência direta de que "mais prática" nem sempre é melhor e de que os ganhos dependem de ajustar a programação de treino ao componente de conhecimento sendo aprendido.

### O problema de medição na era da IA

Um tema central na pesquisa sobre ganhos de aprendizagem da base de conhecimento é que **a IA generativa pode inflar o desempenho aparente sem produzir ganhos de aprendizagem** — e que a escolha da medida de desfecho determina se isso fica visível. A [[generative-ai-reduced-study-time-math|pesquisa]] e os [[stromberg-generative-ai-learning-penalty-secondary-2026|dados de campo em larga escala]] mostram uma divergência aguda: o uso de IA melhora as notas em lições de casa assistidas por IA, ao mesmo tempo que *reduz* as notas em medidas supervisionadas, sem consulta e sem auxílio. A [[genai-performance-vs-learning|pesquisa desempenho-versus-aprendizagem]] e as [[young-people-learning-generative-ai-rapid-review-2026|revisões rápidas]] distinguem portanto o desempenho imediato com apoio de IA da aprendizagem duradoura, e tratam as medidas somativas sem auxílio (veja [[summative-assessment|avaliação somativa]]) como o sinal confiável de ganhos de aprendizagem genuínos.

### O que a pesquisa de eficácia mostra

Ao longo dos [[rct|RCTs]], [[meta-analysis-systematic-review|metanálises]] e estudos de campo da base de conhecimento, emerge um quadro consistente de **eficácia de aprendizagem** (quais intervenções de IA realmente produzem ganhos de aprendizagem, e quão grandes):

- **A evidência metanalítica é amplamente positiva, mas condicional.** A [[genai-educational-outcomes-meta-analysis|metanálise abrangente de 53 estudos]] (Dong 2026) conclui que a IA generativa geralmente supera abordagens tradicionais em desempenho acadêmico, [[critical-thinking|pensamento de ordem superior]] e escrita — com o [[ai-feedback-quality|feedback de IA]] particularmente eficaz —, embora a IA generativa assistida por jogos não mostre benefício adicional significativo e os ganhos variem por país e desfecho. A [[genai-meta-analysis-programming-learning|metanálise de IA generativa e programação]] conclui grandes ganhos de produtividade, mas nenhum ganho de aprendizagem significativo (g ≈ 0), separando eficiência de tarefa de aprendizagem duradoura. Uma [[robot-assisted-language-learning-meta-analysis-2026|metanálise de aprendizagem de línguas]] conclui ganhos de aprendizagem positivos, mas modestos, de robôs [[embodied-learning|corporificados]] potencializados por IA. Para [[ai-literacy|letramento em IA]] especificamente, a [[liu-ai-literacy-interventions-meta-analysis-2026|metanálise de três níveis de 59 estudos]] estima um efeito geral grande (g = 0,837) — mas o amplo intervalo de predição e o achado de que intervenções focadas em conhecimento superaram aquelas voltadas a habilidades, atitudes ou [[ethics|ética]] alertam que o *desfecho medido* molda o ganho aparente, ecoando o ponto mais amplo de que os ganhos relacionados à IA dependem do que e de como você avalia.
- **[[intelligent-tutoring|Tutores de IA]] bem projetados produzem ganhos reais.** Um RCT de dois anos com agrupamento por escola ([[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo]]) concluiu que a tutoria por IA elevou o desempenho em matemática em ~1,3 faixas percentuais nacionais por período (~0,06–0,08 DP/ano letivo, ~0,14 DP para um ano completo), ganhos que se assemelham a prática sem IA — demonstrando que o *engajamento*, e não a capacidade do modelo, é a restrição vinculante. O [[making-ai-tutoring-productive-mastery-math-2026|NUMI]] mostrou que o apoio de IA melhorou a correção na tentativa seguinte após erros, com mais tempo por questão — uma "desaceleração produtiva" que constrói domínio duradouro. A [[virtual-tutoring-computer-assisted-learning-takeup-2026|tutoria virtual]] concluiu que a restrição vinculante é a adoção e a participação sustentada, não a qualidade do tutor.
- **Um tutor construído a partir da pedagogia da própria turma superou a aprendizagem ativa, e não apenas a aula expositiva.** Em um [[rct|RCT]] cruzado no curso introdutório de física de Harvard, estudantes que aprenderam com um tutor de IA personalizado pontuaram mediana de 4,5 no pós-teste contra 3,5 nas aulas de aprendizagem ativa do próprio curso (mediana da linha de base 2,75), com tamanho de efeito por regressão linear de 0,63, e passaram mediana de 49 minutos na tarefa contra 60 em sala de aula ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]). Como o controle era a aprendizagem ativa baseada em pesquisa, e não uma aula expositiva, o ensaio mede o tutor contra um comparador exigente — o design que os autores creditam foi a engenharia do tutor a partir das mesmas práticas baseadas em pesquisa da turma, somada a feedback personalizado sob demanda e auto-ritmo.
- **A IA pode igualar a ajuda humana.** A [[chatgpt-hints-human-tutor-learning-gains-2024|ajuda gerada pelo ChatGPT]] produz ganhos de aprendizagem equivalentes aos da ajuda escrita por tutores humanos em habilidades de [[math-education|matemática]] — evidência de que a IA generativa pode ser tão eficaz quanto o [[scaffolding|andaime]] humano quando usada de forma apropriada.
- **Os ganhos dependem de quem ensina com ela.** Tutores de baixa experiência que receberam apoio de IA elevaram as taxas de aprovação dos estudantes em 9 pontos percentuais, com ganhos menores para tutores mais experientes — um padrão de ampliação que mais impulsiona os menos experientes ([[oecd-digital-education-outlook-2026|OCDE, 2026]]).
- **A IA desprotegida pode prejudicar a aprendizagem.** O RCT de guarda-corpos ([[generative-ai-guardrails-harm-learning|PNAS 2025]]) concluiu que um tutor estilo ChatGPT sem proteções elevou a prática assistida em +48%, mas *reduziu* as notas em provas sem auxílio em −17%, enquanto um tutor com guarda-corpos (dica em vez de resposta) eliminou o dano. Essa é a demonstração mais aguda de que a **eficácia de aprendizagem é contingente ao design**: a mesma classe de ferramenta pode ser um forte ganho de aprendizagem ou um dano líquido, dependendo de como é configurada.
- **Mas o acesso sem proteções também pode ajudar, de forma duradoura.** Um RCT com uma conta ChatGPT pronta para uso concluiu que a pontuação em testes sem auxílio ficou 0,27 DP mais alta enquanto os estudantes tinham acesso, e o ganho se manteve uma semana depois — mais do que o dobro da mediana de 0,10 DP ao longo de 747 RCTs educacionais ([[contractor-learning-impact-generative-ai-2026|Contractor e Reyes, 2026]]).
- **A eficácia percebida e a real divergem.** O [[ai-literacy-assessment-misalignment|desempenho autorrelatado se desalinha do desempenho medido]], e a [[absent-cognitive-baseline-2026|linha de base cognitiva ausente]] mostra que estudantes nativos de IA superestimam sua aprendizagem — de modo que afirmações de eficácia baseadas em autorrelato são não confiáveis sem medidas de desfecho objetivas. A [[self-report-measures|medidas de autorrelato]] reúne os casos em que desfechos relatados e medidos se separam.

- **Os ganhos podem vir da realocação do tempo do professor, e não da correção por IA.** Em um experimento aleatorizado em 178 escolas brasileiras (~19.000 concluintes), a correção de redações por IA e por humanos produziu ganhos idênticos em provas, mas as salas de aula com IA tiveram ~35% mais conversas individuais de professores sobre escrita, e o quartil inferior melhorou em nenhuma das condições ([[ai-changing-teaching-workflows|Ler, 2026]]).

**Conclusão:** o peso da evidência apoia **ganhos de aprendizagem modestos, condicionais e dependentes do design** a partir da IA — reais quando a IA é estruturada para treinar em vez de responder, protegida por guarda-corpos e pareada com medidas de desfecho sem auxílio, e ausentes ou negativos quando ela substitui o esforço de quem aprende. É por isso que os ganhos de aprendizagem como desfecho precisam ser medidos com instrumentos válidos e resistentes à IA, e por que a [[ai-ed-evaluation|avaliação de IA na educação]] pareia afirmações de eficácia com escrutínio [[research-methods-aied|metodológico]].


- **A tutoria por IA pode igualar a tutoria humana especializada em ganhos de testes padronizados.** Em uma avaliação com 2.383 participantes, a tutoria por IA agrupada foi estatisticamente equivalente à tutoria humana especializada em ganhos de aprendizagem no GRE (p = 0,015), com ambas acima de um controle sem tutoria; os autores propõem o custo por ponto percentual de ganho como unidade para comparar tutores ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).

### Um mapa de campo dos efeitos da IA sobre a aprendizagem e o desempenho

O corpus da base de conhecimento — metanálises, RCTs, quase experimentos e estudos de campo — sustenta um quadro matizado e por vezes contraditório. Os achados se agrupam em efeitos positivos, negativos e condicionais.

**Efeitos positivos (a IA pode produzir ganhos de aprendizagem genuínos):**
- **A evidência metanalítica é amplamente positiva, mas condicional.** A [[genai-educational-outcomes-meta-analysis|metanálise de 53 estudos]] (Dong 2026) conclui que a IA generativa geralmente supera abordagens tradicionais em desempenho acadêmico, pensamento de ordem superior e escrita, com o [[feedback|feedback]] de IA especialmente eficaz. Uma metanálise de 29 experimentos ([[zhao-genai-higher-order-thinking-meta-2026]]) conclui um efeito positivo moderado sobre o pensamento de ordem superior, mais forte para [[problem-solving|resolução de problemas]], mas limitado para [[creativity|criatividade]].
- **A IA específica de tutoria supera de forma confiável a IA de propósito geral.** A [[stanford-evidence-base-ai-k12-2026|revisão SCALE de Stanford]] e a revisão guarda-chuva ([[genai-higher-education-systematic-review-2026]]) convergem: agentes pedagogicamente projetados, com dicas e andaime passo a passo, produzem ganhos reais onde [[conversational-ai|chatbots]] abertos frequentemente não produzem.
- **Tutores de IA bem projetados produzem ganhos reais e mensuráveis.** O RCT de dois anos do Khanmigo ([[one-click-away-khanmigo-two-year-school-experiment-2026]]) elevou o desempenho em matemática em ~1,3 faixas percentuais nacionais por período; o [[making-ai-tutoring-productive-mastery-math-2026|NUMI]] melhorou a correção na tentativa seguinte após erros; a [[virtual-tutoring-computer-assisted-learning-takeup-2026|tutoria virtual]] mostrou que a adoção é a restrição vinculante.
- **A IA pode igualar a ajuda humana.** A [[chatgpt-hints-human-tutor-learning-gains-2024|ajuda gerada pelo ChatGPT]] produz ganhos de aprendizagem equivalentes aos da ajuda escrita por tutores humanos em habilidades de matemática.
- **A IA focada em feedback funciona.** O [[genai-educational-outcomes-meta-analysis|feedback de IA]] está entre as aplicações mais eficazes da IA generativa; o [[ai-feedback-critical-thinking-writing-2026|feedback de IA para escrita]] melhora o pensamento crítico quando pareado com instrução. Em um experimento de campo, [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]] concluíram que estudantes que receberam feedback individual do GPT-4 em tarefas abertas mostraram os maiores ganhos de aprendizagem de conteúdo (~0,11, p < 0,10; subindo para 0,16 entre os que realmente receberam feedback prévio) — um efeito movido pela provisão confiável e consistente da IA, e não por superioridade inerente, já que os resultados de pares igualaram os da IA quando o [[peer-assessment|feedback de pares]] de alta qualidade era de fato entregue. Parceiros de crítica com LLM na escrita estendem isso ao feedback iterativo e colaborativo: [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash e Connell Pensky (2025)]] concluíram ganhos significativos ao longo de um semestre em escrita argumentativa, [[prompt-engineering|engenharia de prompts]] e qualidade da resposta ao feedback da IA (todos com p < 0,001, aproximadamente um desvio-padrão completo por dimensão), com ganhos aparecendo até mesmo em redações escritas sem apoio de LLM — evidência de habilidade duradoura em vez de mera dependência da ferramenta, embora a ausência de condição de controle limite a atribuição causal.
- **Andaimes estruturados rendem ganhos.** O [[scaffolding-srl-feedback-genai-human-peers|feedback autorregulado andaimentado]] e o [[learner-ai-interaction-patterns-oop|design de interação]] mostram ganhos pequenos, mas significativos, quando a IA é desenhada para treinar.
- **A IA em contextos colaborativos e baseados em problemas ajuda quando estruturada.** A [[ai-enhanced-pbl-chatgpt-scaffolding-2026|ABP potencializada por IA]], a [[ai-assisted-collaborative-learning-model-dbr|aprendizagem colaborativa assistida por IA]] e as [[ccct-cooperative-learning-technique|técnicas cooperativas projetadas por IA]] relatam ganhos significativos.

**Efeitos negativos (a IA pode reduzir ou deixar de melhorar a aprendizagem):**
- **A IA desprotegida pode prejudicar a aprendizagem.** O RCT de guarda-corpos da PNAS ([[generative-ai-guardrails-harm-learning]]) concluiu que um tutor estilo ChatGPT sem proteções elevou a prática assistida em +48%, mas *reduziu* as notas em provas sem auxílio em −17%; os [[guardrails|guarda-corpos]] eliminaram o dano.
- **Conclusão mais rápida ≠ aprendizagem.** A [[generative-ai-reduced-study-time-math|IA generativa reduziu o tempo de estudo]] em problemas de matemática e o conhecimento que eles constroem; a [[genai-performance-vs-learning|pesquisa desempenho-versus-aprendizagem]] mostra que a IA infla o desempenho assistido por IA, ao mesmo tempo que reduz as notas em provas supervisionadas, sem consulta e sem auxílio.
- **Terceirizar lições de casa prejudica a aprendizagem.** Os [[stromberg-generative-ai-learning-penalty-secondary-2026|dados de campo]] mostram uma penalidade de aprendizagem da IA generativa quando estudantes terceirizam as lições de casa.
- **A dependência de [[llm|LLM]] se correlaciona com notas mais baixas.** [[jost-llm-programming-education-learning-outcomes|Jošt et al.]] concluíram correlações negativas significativas entre o uso de LLM para geração de código (rho = −0,305) e depuração (rho = −0,360) e as notas finais.
- **A IA pode prejudicar o [[teacher-role|ensino]] e o desempenho de alguns.** [[genai-can-harm-teaching-rct-2026|Um RCT de IA generativa voltada a professores]] concluiu que estudantes de professores abaixo da mediana perderam terreno (−0,129 DP).
- **O abuso de dicas se correlaciona com menos aprendizagem.** A [[lak2026-hint-button-unproductive-use|pesquisa sobre botões de dica]] mostra que mais dicas, usadas de forma improdutiva, se correlacionam com menos aprendizagem.
- **Os ganhos metanalíticos em programação são ilusórios.** A [[genai-meta-analysis-programming-learning|metanálise de IA generativa e programação]] conclui grandes ganhos de produtividade, mas nenhum ganho de aprendizagem significativo (g ≈ 0), separando eficiência de tarefa de aprendizagem duradoura.

**Efeitos condicionais e mistos (o contexto determina a direção):**
- **O design é decisivo.** A mesma classe de ferramenta pode ser um forte ganho ou um dano líquido, dependendo da configuração ([[generative-ai-guardrails-harm-learning]], [[stanford-evidence-base-ai-k12-2026]]).
- **Como a IA é usada importa mais do que se ela é usada.** O [[jost-llm-programming-education-learning-outcomes|uso para explicações era benigno; o uso para geração de código era danoso]]; a [[genai-over-reliance-learning-2026|dependência excessiva]] corrói os ganhos.
- **Duração e [[regulation|regulação]] moderam os efeitos.** Os [[zhao-genai-higher-order-thinking-meta-2026|efeitos foram mais fortes nas 8–16 semanas]] e para quem aprende com maior [[self-regulated-learning|aprendizagem autorregulada]].
- **O nível de pensamento computacional modera os ganhos assistidos por IA.** Em um curso de quatro semanas de assistente de codificação por IA para o 8º ano, estudantes de alto PT superaram os de baixo PT no pós-teste (72,54 contra 61,73, p = 0,031) apesar de conhecimento prévio de programação comparável, usando o assistente para entender código enquanto os de baixo PT recuperavam respostas ([[computational-thinking-aica-2026|Zhao et al. (2026)]]).
- **A ABI com IA apoia a criatividade, mas não necessariamente a resolução de problemas.** [[mujib-ai-ibl-creative-math-2026|Mujib et al.]] melhoraram o desempenho criativo e as atitudes, mas não a resolução crítica de problemas.
- **A [[student-experience|experiência estudantil]] diverge dos ganhos medidos.** [[absent-cognitive-baseline-2026|Estudantes nativos de IA superestimam sua aprendizagem]], e o [[ai-literacy-assessment-misalignment|autorrelato se desalinha do desempenho]] — percepções de ganho não são evidência confiável deles.

### As estimativas metanalíticas de ganho de aprendizagem são infladas — leia-as com cautela

Os números de ganho de aprendizagem que dominam o resumo de eficácia desta página — especialmente os tamanhos de efeito agrupados de metanálises — precisam ser lidos com uma ressalva forte: uma onda de metapesquisa mostra que as estimativas positivas de síntese do campo são infladas por viés de publicação, incoerência de construtos e atalhos metodológicos.

- A [[bartos-ai-learning-meta-meta-analysis-2026|metametanálise no nível do estudo de 1.840 tamanhos de efeito de 67 metanálises]] conclui que o efeito médio de IA ajustado por viés de publicação é cerca de **um terço** da magnitude relatada (DMP ≈ 0,196 contra uma mediana de 0,67), com um intervalo de predição abrangendo desde dano grande até benefício grande, e nenhum moderador produzindo ganhos consistentes. Mesmo um único estudo extremo contribui com quase nenhuma informação dada a heterogeneidade — o que significa que *mais estudos do tipo atual não vão resolver a questão*; apenas ensaios de alta qualidade, pré-registrados e orientados à replicação vão.
- **Uma metanálise de segunda ordem da própria camada de síntese.** A [[ai-education-effects-second-order-meta-analysis-2026|Emslander et al. (2026)]] invertem a unidade de análise usual: tratando 45 metanálises como seus dados e corrigindo a sobreposição de estudos (818 estudos primários únicos, ponderados por unicidade em vez de descartados), eles agrupam 129 tamanhos de efeito metanalíticos em g = 0,57 [0,50, 0,65], com agrupamentos de desfecho indo de 0,35 para desempenho STEM a 0,68 para desfechos acadêmicos gerais. Dois resultados têm peso sobre os números acima. O tipo de IA não moderou o efeito (p = 0,63) — [[intelligent-tutoring|sistemas de tutoria inteligente]], [[conversational-ai|chatbots]] e ChatGPT são estatisticamente indistinguíveis nessa camada, de modo que os ganhos agrupados do campo não estão sendo movidos pela IA generativa como tal —, e o único moderador claro foi o nível educacional (terciário 0,61 contra 0,30 para amostras mais jovens), o que é em parte um artefato de design de estudo, dado que 74% do corpus testou estudantes do terciário e a evidência de [[k-12|K-12]] é comparativamente escassa. Sua apreciação de qualidade é a mais aguda do corpus: as 45 metanálises obtiveram média de 9,3 de 17 em uma escala adaptada da AMSTAR, nenhuma pré-registrada, e apenas 23 de 45 tinham 80% de poder para detectar o efeito que elas mesmas relataram. Seus dois testes de viés de publicação também discordam — um gráfico de funil simétrico (τ de Kendall = −0,01, p = 0,868) contra PET-PEESE (B = 0,9, p = 0,009) indicando inflação —, de modo que o próprio efeito médio da SOMA chega com uma nuvem de viés não resolvida sobre ele.
- A [[oneill-presumed-effective-meta-analysis-2026|auditoria forense de 14 metanálises de AIED de alto impacto]] conclui que nenhuma forneceu uma base válida para sua afirmação de ganho de aprendizagem agrupado: nenhuma tinha um construto de desfecho coerente, todas tinham heterogeneidade extrema não resolvida (I² variou de 77,2% a 94,4% nas 13 metanálises que a relataram, e 12 dessas 13 excederam 80%), doze trataram tamanhos de efeito dependentes como independentes, e nenhuma avaliou validamente o viés de publicação. A maioria dos estudos primários vistoriados aleatoriamente era incompatível com a afirmação metanalítica. Os erros chegaram à política: duas das metanálises auditadas trataram o tamanho da amostra do estudo como tamanho de turma e, com base em um estudo primário mal calculado, concluíram que 21 a 40 estudantes é o tamanho ideal de intervenção e recomendaram que intervenções de IA generativa fossem projetadas para esse número.
- **Uma síntese de [[stem-education|STEM]] de 2026 que corrige dois dos defeitos auditados — e ainda ilustra um terceiro.** A [[ai-supported-instruction-stem-meta-analysis-2026|Doğan e colegas (2026)]] agruparam 35 estudos experimentais e quase experimentais de STEM com um tamanho de efeito por estudo para evitar o problema de tamanhos de efeito dependentes, e rodaram uma bateria completa de testes de viés de publicação (gráfico de funil, testes de Begg e Egger, *trim-and-fill*, N de falha segura de Rosenthal = 2404) em vez de afirmar simetria — os dois atalhos que a auditoria acima encontrou em toda metanálise que examinou. Duas cautelas sobrevivem. Primeiro, os autores não aplicaram apreciação formal de qualidade e trataram os critérios de inclusão como limiar de rigor, de modo que estudos de designs muito diferentes entraram no agrupamento sem ponderação por qualidade. Segundo, a heterogeneidade principal depende inteiramente de qual modelo você lê: os mesmos 35 estudos são relatados como I² = 82,98% sob o modelo de efeito fixo e I² = 15,75% sob o modelo de efeitos aleatórios, de modo que quem encontra os números sem o rótulo do modelo pode concluir que o corpus é homogêneo quando não é. Sua estimativa agrupada (g = 0,670, IC 95% [0,491, 0,848]) é portanto o tipo de figura que a seção acima descreve: melhor construída que a maioria, e ainda assim um limite superior.
- A [[weidlich-chatgpt-effect-search-cause-2025|crítica de mídia/métodos]] mostra que muitos "ganhos de aprendizagem" não foram medidos validamente — os desfechos eram frequentemente habilidades autorrelatadas ou desempenho medido *durante* a assistência da IA, em vez de aprendizagem duradoura e sem auxílio.

**Conclusão para os números de ganho acima:** trate grandes tamanhos de efeito agrupados de IA como limites superiores, não como estimativas pontuais. Prefira a evidência de ganhos de aprendizagem de [[rct|RCTs]] bem projetados e estudos de campo com medidas de desfecho sem auxílio e padronizadas (o RCT de guarda-corpos, os experimentos Khanmigo e NUMI e a metanálise de EdTech do Banco Mundial citados acima), e leia os ganhos metanalíticos como provisórios e provavelmente superestimados até que a qualidade da síntese melhore. O problema também sobrevive à correção: dos artigos publicados depois que uma metanálise auditada foi retratada, 60% ainda a citavam como apoio autoritativo para grandes ganhos de aprendizagem com ChatGPT e nenhum reconheceu a retratação, de modo que uma estimativa retirada continua se propagando. É por isso que a página [[limitations-in-aied-research|Limitações na pesquisa em AIED]] agora documenta em detalhe a crise da evidência metanalítica.

### Medindo o que importa

Os ganhos de aprendizagem se conectam à [[assessment-validity|validade da avaliação]] — se as [[assessment|avaliações]] deixam de capturar entendimento mais profundo, as medidas de ganho de aprendizagem são enganosas. Eles também se cruzam com a [[cognitive-offloading|dependência excessiva]] e o [[cognitive-offloading|descarregamento cognitivo]], onde melhorias aparentes de desempenho podem mascarar perdas de aprendizagem, e com [[rct|RCT]] (ensaios aleatorizados como o design padrão-ouro para detectar ganhos de aprendizagem causais), e com [[meta-analysis-systematic-review|metanálise e revisão sistemática]] (agrupar tamanhos de efeito entre estudos para estabelecer a evidência de eficácia do campo).

- **Ganhos significativos pré/pós a partir de [[pedagogy|pedagogia]] de IA baseada em erros:** [[pedagogy-ai-mistakes|Hosseini (2026)]] em seu curso de design de banco de dados (n = 13) mostrou ganhos de aprendizagem grandes e significativos em itens idênticos pré/pós (média 4,25→6,83/7, *d* de Cohen = 1,49, *p* < 0,001), com ganhos não correlacionados à confiança prévia em IA ou em banco de dados — o design de crítica-refinamento integrado à IA beneficiou estudantes independentemente das percepções iniciais.

## Conceitos conectados

- [[rct]]
- [[meta-analysis-systematic-review]]
- [[formative-assessment]]
- [[summative-assessment]]
- [[cognitive-offloading]]
- [[math-education]]
- [[human-in-the-loop-ai]]
- [[affective-tutoring]]
- [[theory-development-aied]] — Desenvolvimento de teoria na IA na educação
- [[self-report-measures]]
- [[research-methods-aied]] — Métodos de pesquisa em AIED (seção DBR)
- [[social-emotional-learning]] — Aprendizagem socioemocional
- [[student-support-and-success]] — desfechos administrativos (conclusão de tarefas, créditos, persistência, formatura) como distintos dos ganhos de aprendizagem

## Artigos conectados
- [[contractor-learning-impact-generative-ai-2026]] — O acesso a um chatbot pronto para uso elevou as notas em testes sem auxílio, que persistiram por uma semana (Contractor e Reyes 2026)
- [[kestin-ai-tutoring-outperforms-active-learning-rct-2025]] — A tutoria por IA supera a aprendizagem ativa em sala de aula: um RCT que introduz um novo design baseado em pesquisa em um cenário educacional autêntico (Kestin et al. 2025)
- [[genai-performance-vs-learning]] — por que o desempenho assistido não é um desfecho de aprendizagem (Yan et al. 2025)
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutoria virtual com CAL: um experimento em adoção e aprendizagem
- [[making-ai-tutoring-productive-mastery-math-2026]] — Tornando a tutoria por IA produtiva: prática de matemática baseada em domínio
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo em um experimento escolar de dois anos
- [[ai-literacy-assessment-misalignment]] — Avaliação de letramento em IA: desalinhamento entre autorrelato e desempenho
- [[generative-ai-reduced-study-time-math]] — Conclusão mais rápida, menos aprendizagem: a IA generativa reduziu o tempo de estudo em problemas de matemática e o conhecimento que eles constroem
- [[genai-meta-analysis-programming-learning]] — Uma metanálise do efeito da IA generativa sobre produtividade e aprendizagem em programação
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Metanálise dos efeitos de intervenções de letramento em IA
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — A ajuda do ChatGPT produz ganhos de aprendizagem equivalentes à ajuda de tutor humano
- [[generative-ai-guardrails-harm-learning]] — A IA generativa sem guarda-corpos pode prejudicar a aprendizagem (RCT da PNAS 2025)
- [[absent-cognitive-baseline-2026]] — A linha de base cognitiva ausente: teorizando uma lacuna estrutural na autoavaliação acadêmica de estudantes universitários nativos de IA
- [[oecd-digital-education-outlook-2026]] — Panorama da Educação Digital da OCDE 2026
- [[ai-changing-teaching-workflows]] — Como a IA está mudando os fluxos de trabalho docentes
- [[robot-assisted-language-learning-meta-analysis-2026]] — Metanálise de aprendizagem de línguas assistida por robôs corporificados potencializada por IA
- [[genai-educational-outcomes-meta-analysis]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Distinção entre desempenho imediato e aprendizagem duradoura
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — A penalidade de aprendizagem da IA generativa: terceirizar lições de casa prejudica a aprendizagem
- [[ai-assisted-collaborative-learning-model-dbr]] — Modelo de aprendizagem colaborativa assistida por IA em DBR (pensamento crítico +24,1%, ganhos em resolução de problemas)
- [[stanford-evidence-base-ai-k12-2026]] — IA específica de tutoria versus IA geral
- [[jost-llm-programming-education-learning-outcomes]] — Dependência de LLM e notas em codificação (correlações negativas)
- [[genai-can-harm-teaching-rct-2026]] — A IA generativa pode prejudicar o ensino (RCT)
- [[zhao-genai-higher-order-thinking-meta-2026]] — Metanálise de IA generativa e pensamento de ordem superior
- [[mujib-ai-ibl-creative-math-2026]] — ABI com apoio de IA e desempenho criativo em matemática
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]] — Ganhos de andaime em ABP potencializada por IA
- [[ccct-cooperative-learning-technique]] — Técnica de aprendizagem cooperativa projetada por IA
- [[scaffolding-srl-feedback-genai-human-peers]] — Ganhos de feedback autorregulado andaimentado
- [[learner-ai-interaction-patterns-oop]] — Padrões de interação e ganhos de aprendizagem em POO
- [[ai-feedback-critical-thinking-writing-2026]] — Feedback de IA e pensamento crítico na escrita
- [[pedagogy-ai-mistakes]] — A pedagogia dos erros de IA: fomentando o pensamento de ordem superior (Hosseini 2026)
- [[computational-thinking-aica-2026]] — Níveis de pensamento computacional e assistentes de codificação por IA (2026)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Metanálise: EdTech adaptativa/com IA eleva a aprendizagem em ~0,125 dp
- [[gpt4-feedback-student-activation-2026]]
- [[rachatasumrit-example-problem-ratio-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — O ChatGPT na educação: um efeito em busca de uma causa (crítica de comparação de mídia às medidas de ganho)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Metametanálise: efeitos de ganho de aprendizagem com IA ajustados por viés ~1/3 do tamanho relatado
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: auditoria de metanálises de AIED falhas
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Uma síntese de STEM que controlou tamanhos de efeito dependentes e testou viés de publicação, mas não aplicou apreciação de qualidade (Doğan et al. 2026)
- [[ai-education-effects-second-order-meta-analysis-2026]] — Metanálise de segunda ordem de 45 metanálises de IA na educação, com efeitos corrigidos por sobreposição e uma apreciação de qualidade da camada de síntese (Emslander et al. 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutoria por IA e humana geram ganhos de aprendizagem equivalentes no GRE

- **The first ChatGPT synthesis wave measured performance, not learning.** [[epistemological-audit-genai-meta-analyses-2026|Fütterer et al. (2026)]] rebuilt the evidence base of the five meta-analyses that pooled ChatGPT's educational effects: among 69 classifiable primary studies, 79.7% measured performance exclusively and only 11.6% measured learning. Their reproduced pooled estimate (g = 0.83, 95% CI [0.68, 0.97], I² = 94.06%) therefore describes test performance, and its prediction interval [−0.75, 2.41] crosses zero.
- [[epistemological-audit-genai-meta-analyses-2026]] — A Critical Epistemological Audit of Early Evidence Syntheses in Generative AI Educational Research (Fütterer et al. 2026)
