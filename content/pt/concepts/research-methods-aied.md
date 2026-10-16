---
title: Métodos de pesquisa em AIED
created: "2026-08-13T05:48:37-04:00"
updated: "2026-10-05T10:25:44-04:00"
type: concept
foundations: [ai-education]
assessment: [educational-measurement]
research_method: [experiment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, rct, research-methods-aied]
translation_of: concepts/research-methods-aied
source_updated: "2026-10-05T10:25:44-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Métodos de pesquisa em AIED** — o conjunto de desenhos empíricos, estratégias de coleta de dados e técnicas analíticas que os pesquisadores usam para estudar a [[ai-education|IA na educação]]: se e como as ferramentas de IA apoiam (ou prejudicam) a aprendizagem, e sob quais condições. O corpus da base de conhecimento abrange métodos experimentais, de pesquisa, qualitativos, baseados em design, de benchmark computacional e de revisão. Cada um tem forças e limitações distintas, e escolher entre eles envolve compensações entre validade interna (confiança nas afirmações causais), validade externa (generalizabilidade), validade ecológica (autenticidade do mundo real) e a viabilidade de estudar ferramentas de IA em rápida mudança.

## Perguntas para refletir

- A tensão central da página: os desenhos mais fortes para inferência causal (experimentos randomizados) são os mais difíceis de conduzir em salas de aula reais, enquanto os contextos mais autênticos oferecem controle causal mais fraco. Se você tivesse que decidir se um [[intelligent-tutoring|tutor de IA]] ajuda a aprendizagem, com qual dessas duas falhas você preferiria conviver — e por quê?
- Antes de ler, você consegue nomear a diferença entre validade interna, externa e ecológica? A página argumenta que todo desenho faz compensações entre elas. Como um estudo rigorosamente causal poderia ainda lhe dizer quase nada de útil sobre uma sala de aula real?
- Um benchmark mostra que uma IA pontua alto em precisão, mas a página insiste que alta precisão em benchmark não implica eficácia educacional. Por que um sistema que "passa no teste" poderia ainda assim não ajudar os estudantes a aprender — e que tipo de evidência falta?
- A pesquisa baseada em design itera sobre uma intervenção real, mas não consegue atribuir ganhos a um mecanismo específico, enquanto um RCT isola causas, mas roda em condições artificiais. Dado o ritmo acelerado da mudança em IA, por quanto tempo você acha que um RCT rigoroso permanece relevante antes de a ferramenta que ele testou ficar obsoleta?
- O consenso de especialistas por Delphi estabelece acordo entre especialistas, e não efeito empírico. Quando é legítimo construir um framework de competências a partir do que os especialistas acreditam, em vez de a partir de dados sobre o que funciona — e como você diria a diferença na prática?
- A página defende a triangulação — combinar avaliação por benchmark, experimentos, mensuração e trabalho qualitativo para julgar tanto se uma ferramenta funciona quanto como. Antes de ler, em que ponto de uma afirmação como "esta IA melhora a aprendizagem" cada método seria necessário para deixá-lo confiante?

## Introdução

A tensão central na pesquisa em AIED é que os desenhos mais fortes para inferência causal — os experimentos randomizados — são frequentemente os mais difíceis de conduzir com ferramentas de IA autênticas em salas de aula reais, enquanto os contextos mais autênticos (implantações em campo, estudos de caso, análises de dados de registro) oferecem controle causal mais fraco. Nenhum método único resolve isso; o campo avança triangulando entre métodos, e sendo explícito sobre que tipo de afirmação cada desenho consegue sustentar. Todo método também carrega limitações transversais — generalizabilidade, validade de mensuração, o ritmo acelerado da mudança em IA, reprodutibilidade e uso fraco de teoria — que os leitores precisam pesar; veja [[limitations-in-aied-research]].

O assunto da página é o método, e não os achados. As [[learning-sciences|ciências da aprendizagem]] são o campo substantivo que esses métodos servem: onde esta página cobre como um estudo deveria ser desenhado, mensurado e relatado, aquela página cobre o que o campo estabeleceu sobre como as pessoas aprendem e como os ambientes de aprendizagem deveriam ser desenhados, e ela trata os métodos baseados em design e de métodos mistos como as abordagens características das ciências da aprendizagem, e não como duas opções entre muitas.

Adjacente a esta página está a [[ai-assisted-educational-research|Investigação Educacional Assistida por IA]], que cobre a IA como instrumento do próprio trabalho do campo: busca de literatura, triagem, automação de revisão, codificação qualitativa, análise e escrita. Seu escopo inclui pesquisa de praticantes, como a scholarship do ensino e da aprendizagem, e ela permanece distinta dos desenhos que esta página descreve.

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen e Graulich (2026)]] submetem o mesmo escrutínio à própria produção de conhecimento do campo, usando o problema nômico-mensuração de Chang (2004): mensurar uma quantidade exige uma lei que a relacione a algo observável, mas essa lei não pode ser testada empiricamente sem já conhecer a quantidade. Eles argumentam que as funções de mensuração derivadas de IA, que emergem de dados de treinamento e de otimização, e não do pesquisador, podem intensificar esse problema, e não resolvê-lo. Tais funções podem parecer precisas e permanecer epistemicamente opacas, de modo que o papel do pesquisador passa a interpretar e validar as saídas computacionais. Seu framework reflexivo de sete fases (enquadramento do problema; instrumentação e mensuração; experimentação e inferência baseada em evidência; comparações e replicação; construção de normas e consenso; implementação e suas consequências; e refinamento contínuo) é oferecido como auxílio analítico, e não como método validado, e eles argumentam que a comparabilidade precisa se estender por todas as populações de estudantes, e não apenas pelos subconjuntos que um modelo atende bem.

### Rigor de relato e o modelo TEP-AIED

A qualidade de relato dos estudos de IA na educação é, ela mesma, uma preocupação de pesquisa. O [[tep-aied-model-reporting-2026|modelo TEP-AIED (Hwang, Xie, Wah & Gasevic, 2026)]] oferece um framework estruturado para apresentar pesquisa em IA na educação com rigor, organizando os componentes essenciais de um relato de estudo — enquadramento de teoria/tecnologia/problema educacional, desenho, dados, análise e resultados —, de modo que leitores e revisores possam avaliar se as afirmações são sustentadas e se o trabalho é reproduzível. Ele responde às fraquezas crônicas do campo em relato (descrições vagas de ferramentas, versões de modelo não declaradas, detalhes de avaliação omitidos) que a página de [[limitations-in-aied-research|limitações]] documenta. Frameworks de relato como o TEP-AIED ficam ao lado de checklists de relato estabelecidas (por exemplo, orientação no estilo [[rct|CONSORT]] para ensaios, orientação no estilo PRISMA para revisões) como parte do movimento mais amplo do campo rumo à [[educational-measurement|transparência metodológica]] e à reprodutibilidade.

O [[raise-framework-ai-education-reporting-2026|RAISE (Allison, 2026)]] aborda o mesmo problema pela direção oposta — como uma checklist, e não como uma estrutura narrativa. Ele estabelece **30 itens em dez domínios temáticos** (justificativa educacional e fundamentação teórica, especificação do sistema de IA, papel da IA e interação, [[accessibility|acessibilidade]] e adequação cultural, contexto e participantes, envolvimento humano, desenho e avaliação do estudo, ética e confiabilidade, transparência e reprodutibilidade, e limitações e implicações), com uma versão editável e uma **Matriz de Ética e Risco** complementar que cobre autonomia de quem aprende, [[equity-in-ai-education|equidade]] de acesso, [[governance|governança]] de dados e transparência algorítmica. Os dois frameworks se endereçam diretamente: o TEP-AIED caracteriza o RAISE como abrangente, mas critica sua amplitude, argumentando que "sua amplitude e granularidade podem torná-lo complexo e menos acessível para aplicações empíricas rotineiras", enquanto o próprio enquadramento do RAISE é que ele não impõe nenhum método ou modelo e apenas exige que as escolhas sejam tornadas visíveis. Lidos em conjunto, eles marcam a compensação nesta literatura — a checklist de auditoria mais completa versus a narrativa mais enxuta de três dimensões — e convergem nos mesmos inegociáveis: nomear e versionar o sistema de IA, divulgar os prompts e o desenho da interação, definir as condições de tratamento e de comparação, relatar a revisão ética e a mitigação de risco, e declarar se os resultados mensuram desempenho, retenção ou transferência. Para que um estudo seja julgado nesses termos, o instrumento de relato precisa ser adotado no momento do desenho, e não montado na fase de manuscrito, que é o ponto em que ambos os frameworks insistem. A análise histórica no nível do corpus é, ela mesma, uma escolha metodológica com obrigações de transparência: [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] localizam cada artigo em seu framework AI×Ed com base no julgamento dos autores sobre resumos e textos completos, reconhecem explicitamente que isso não é uma categorização sistemática ou escalável orientada por dados, e disponibilizam publicamente seu conjunto de dados completo como material suplementar para replicação.

### Desenhos experimentais e quase-experimentais

Um **estudo de eficácia** testa se uma intervenção produz seu efeito de aprendizagem pretendido, tipicamente usando desenhos experimentais ou quase-experimentais que comparam resultados com e sem a intervenção. Os experimentos atribuem aleatoriamente participantes a condições (por exemplo, tutor de IA versus tutor humano, ou com [[scaffolding|andaimento]] de IA versus sem assistência) para estimar efeitos causais sobre resultados como ganhos de aprendizagem, [[student-engagement|engajamento]] ou motivação. Os **ensaios controlados randomizados** são o padrão-ouro para validade interna. [[access-not-enough-ai-tutoring-2026|Um estudo de campo randomizado de apoio humano mais tutoria com IA]] e [[genai-can-harm-teaching-rct-2026|um RCT sobre IA generativa no ensino]] usam a atribuição para isolar efeitos causais. Os desenhos **quase-experimentais** (pré/pós, entre sujeitos ou grupos pareados sem randomização) são mais viáveis em turmas intactas, mas mais fracos em afirmações causais.
- **A validação do instrumento e as verificações de linha de base vêm antes da estimativa de efeito.** [[genai-cognitive-scaffold-geometric-reasoning-2026|Davor (2026)]] comparou duas turmas intactas de segundo grau em Gana (86 estudantes, 43 por grupo) quanto à IA generativa como andaimento em geometria, dimensionando a amostra com uma análise no G*Power e pilotando o Teste de Raciocínio e Prova em Geometria até uma confiabilidade split-half de Spearman-Brown de 0,859 antes do estudo. Os grupos não diferiram significativamente no pré-teste, e uma ANCOVA ajustando pelo desempenho anterior reteve o efeito de grupo (F(1, 83) = 50,30, p < .001, η² parcial = .377). Sem atribuição aleatória, são a confiabilidade do piloto e a verificação de equivalência de linha de base que tornam a comparação ajustada interpretável.

- **Forças:** inferência causal mais forte; mensuração limpa de resultados; apoia estimação de tamanho de efeito e afirmações de eficácia.
- **Limitações:** custoso e lento; condições artificiais podem reduzir a validade ecológica; ferramentas de IA em rápida mudança fazem experimentos longos datarem rapidamente; amostras pequenas frequentemente têm poder insuficiente para detectar efeitos significativos; restrições [[ethics|éticas]] de reter ferramentas potencialmente úteis.
- **Exemplares:** [[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]], [[agent-voice-accents-k12-group-learning]], [[ai-use-critical-thinking-medical-students-2026]].
- **A pré-registro se aplica a análises secundárias, e não apenas a ensaios.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] executou quatro regras de atualização de [[knowledge-tracing|rastreamento de conhecimento]] sobre registros idênticos do ASSISTments (12.716 estudantes, 985.813 eventos pontuados) que diferiam apenas em como pontuavam as linhas com dica, manteve a metade confirmatória selada até existir um arquivo com a URL do registro, e relatou que todas as quatro previsões pré-registradas se sustentaram. Creditar qualquer conclusão previu o desempenho posterior sem ajuda pouco acima de uma constante de dificuldade de habilidade (AUC agrupada 0,604 contra 0,595), ao mesmo tempo que declarou 93,9% dos pares estudante–habilidade como dominados, contra 72,8% sob uma regra estrita. Quando um único registro sustenta várias conclusões, é fixar a análise de antemão o que torna a comparação confiável.

### Estudos de pesquisa e de modelagem por equações estruturais

Pesquisas transversais mensuram atitudes autorrelatadas, percepções, motivação, [[self-efficacy|autoeficácia]] e [[technology-acceptance-model|aceitação de tecnologia]], frequentemente modeladas com regressão ou modelagem por equações estruturais (SEM/PLS-SEM) para testar relações e mediadores hipotetizados. Elas dominam o corpus da base de conhecimento, particularmente para questões de aceitação, motivação e mecanismos psicológicos.

- **Forças:** amostras grandes; cobertura ampla e de baixo custo; podem testar modelos mediacionais complexos de mecanismos psicológicos; viáveis para estudar atitudes difíceis de observar.
- **Limitações:** dados transversais não conseguem estabelecer causação; viés de método comum/autorrelato; amostragem por conveniência limita a generalizabilidade; mediadores inferidos de covariância, e não de manipulação.

O próprio instrumento merece escrutínio separado. O que um questionário, uma entrevista ou um diário pode e não pode estabelecer — e a lacuna documentada entre o que as pessoas relatam e o que fazem — está reunido em [[self-report-measures]].
- **Exemplares:** [[acceptance-ai-english-tools-2026]], [[genai-motivation-engagement-2026]], [[ai-autonomous-learning-accomplishment-2026]], [[genai-over-reliance-learning-2026]], [[ai-use-critical-thinking-medical-students-2026]].

### Métodos qualitativos

Entrevistas, grupos focais e análise temática produzem relatos ricos e contextuais de como estudantes e professores vivenciam as ferramentas de IA, os significados que lhes atribuem, e as tensões e danos que as medidas padronizadas deixam passar. A [[hazra-safetutors-pedagogical-safety-2026|pesquisa sobre segurança de tutores de IA]] e [[ai-changing-teaching-workflows|como a IA muda os fluxos de trabalho docentes]] dependem fortemente de evidência qualitativa. Veja a página de conceito dedicada à [[qualitative-research|pesquisa qualitativa]] para o tratamento completo das abordagens qualitativas — análise temática, teoria fundamentada, fenomenologia/fenomenografia, análise de discurso, observações e etnografia, estudos de caso, e entrevistas/grupos focais —, cada uma com exemplares da base de conhecimento.

- **Forças:** profunda percepção ecológica e conceitual; traz à superfície fenômenos, riscos e mecanismos inesperados; essencial para construção de teoria e para estudar construtos contestados como confiança, [[agency|autonomia]] e autoria.
- **Limitações:** generalizabilidade limitada; interpretativa e dependente do pesquisador; amostras pequenas; apoio mais fraco a afirmações causais; achados difíceis de sintetizar entre estudos.
- **Exemplares:** [[hazra-safetutors-pedagogical-safety-2026]], [[ai-changing-teaching-workflows]], [[scaffolding-critical-engagement-genai-minority-students]].

### Desenhos de métodos mistos

Estudos de métodos mistos combinam vertentes quantitativas e qualitativas — frequentemente sequencialmente (por exemplo, QUAL→QUAN→qual) —, de modo que os dados qualitativos explicam ou contextualizam os achados quantitativos. [[genai-over-reliance-learning-2026|Um estudo de métodos mistos de IA generativa e aprendizagem sustentável]] associa pesquisas de três ondas a entrevistas com educadores; [[t2i-competence-paradox-2026|o estudo do paradoxo da competência]] usa grupos focais de instrutores, uma pesquisa com estudantes e entrevistas de acompanhamento.

- **Forças:** a triangulação aumenta a confiança; amplitude quantitativa mais profundidade qualitativa; podem explicar resultados inesperados e fazer a ponte entre mecanismo e magnitude.
- **Limitações:** complexos, intensivos em recursos e metodologicamente exigentes; a integração pode ser superficial se não for cuidadosamente desenhada; ainda herdam as fraquezas de cada vertente (por exemplo, autorrelato).
- **Exemplares:** [[genai-over-reliance-learning-2026]], [[t2i-competence-paradox-2026]], [[same-ai-different-pathways]], [[fouad-bentley-trust-utility-gap-physics-2026]].

### Pesquisa baseada em design (DBR)

A DBR desenha, implementa e refina iterativamente uma intervenção educacional em contextos autênticos, ciclando entre teoria, desenho e prática do mundo real. Ela é proeminente na base de conhecimento para desenvolver ambientes de aprendizagem com IA e modelos [[pedagogy|pedagógicos]]. Veja a página de conceito dedicada à [[design-based-research|pesquisa baseada em design]] para o ciclo completo da DBR, exemplares e suas forças/limitações. Um exemplo canônico de AIEd é o estudo do modelo de [[collaborative-learning|Aprendizagem Colaborativa]] Assistida por IA ([[ai-assisted-collaborative-learning-model-dbr|Putra et al.]]), que executou um ciclo de DBR de quatro fases — análise de necessidades, desenho do modelo, implementação em sala de aula de oito semanas e refinamento do modelo —, iterando sobre um ciclo de aprendizagem de quatro estágios (identificação do problema → investigação colaborativa assistida por IA → [[problem-solving|resolução colaborativa de problemas]] → reflexão e apresentação). Outros exemplares desenvolvem treinamento de [[teacher-education|professores]] em [[ai-literacy|letramento em IA]] ([[genai-literacy-training-teacher-education-dbr-2026]]) e [[generative-ai|andaimento]] de [[critical-thinking|IA generativa]] para o pensamento crítico ([[critical-thinking-genai-scaffolding]]).

- **Forças:** alta validade ecológica e relevância prática; produz tanto artefatos utilizáveis quanto teoria; responsiva à complexidade das salas de aula reais e das ferramentas de IA em evolução; bem adequada a desenvolver um modelo e refiná-lo com base em evidência autêntica de implementação.
- **Limitações:** validade interna fraca (poucos ou nenhum grupo de controle); achados ligados ao contexto e difíceis de generalizar; cronogramas longos; difícil isolar qual elemento de desenho causou um resultado — a DBR demonstra viabilidade e melhoria, mas não consegue atribuir ganhos de aprendizagem a um mecanismo específico.
- **Exemplares:** [[ai-assisted-collaborative-learning-model-dbr]], [[genai-literacy-training-teacher-education-dbr-2026]], [[critical-thinking-genai-scaffolding]], [[human-centered-ai-teacher-educators-2026]].

A DBR troca o controle causal dos [[rct|experimentos]] por autenticidade ecológica e refinamento iterativo: é a ferramenta certa para perguntas do tipo "como desenhamos este ambiente de aprendizagem com IA para que funcione na prática?", e sua evidência é mais forte como prova de conceito e orientação de desenho do que como eficácia causal. Ler os ganhos de aprendizagem da DBR exige a mesma [[limitations-in-aied-research|precaução]] que outros desenhos — sem uma medida de resultado controlada e sem assistência, os ganhos podem refletir a mesma confusão de desempenho inflado pela IA documentada sob [[learning-gains|ganhos de aprendizagem]].

### Revisões sistemáticas e meta-análises

As revisões sintetizam a base de evidência, em vez de conduzir um novo experimento. Revisões sistemáticas e de escopo aplicam um protocolo transparente para buscar, triar, avaliar e sintetizar um corpo de estudos; as meta-análises adicionalmente agrupam tamanhos de efeito entre estudos para produzir uma estimativa resumida ponderada e testar moderadores. [[zerkouk-comprehensive-review-its-2025|Uma revisão abrangente de ITS]] e [[genai-higher-education-systematic-review-2026|uma revisão sistemática de IA generativa no ensino superior]] exemplificam a abordagem.

- **Forças:** síntese eficiente de uma literatura grande e fragmentada; a meta-análise produz estimativas de efeito agrupadas e detecta moderadores; essencial para prática baseada em evidência e para identificar lacunas.
- **Limitações:** dependem da qualidade dos estudos incluídos (entra lixo, sai lixo); viés de publicação; métodos e medidas de resultado heterogêneos tornam a síntese difícil; envelhecem rapidamente dado o ritmo da mudança em IA.
- **Ressalva de metapesquisa (2026):** críticas à base de síntese da AIED mostram que muitas meta-análises iniciais são minadas por incoerência de construto, heterogeneidade não resolvida, dependência não tratada entre tamanhos de efeito e avaliação inválida do viés de publicação —, inflando os tamanhos de efeito principais da IA (veja [[bartos-ai-learning-meta-meta-analysis-2026]], [[oneill-presumed-effective-meta-analysis-2026]] e [[weidlich-chatgpt-effect-search-cause-2025]]). Trate os tamanhos de efeito agrupados da AIED como limites superiores.
- **Exemplares:** [[zerkouk-comprehensive-review-its-2025]], [[genai-higher-education-systematic-review-2026]], [[chatgpt-critical-creative-thinking-review]], [[zerkouk-comprehensive-review-its-2025]], [[agentic-ai-education-scoping-review]].

Veja a página de conceito dedicada à [[meta-analysis-systematic-review|meta-análise e revisão sistemática]] para um tratamento mais completo da revisão sistemática e da meta-análise na IA na educação — incluindo sua relação com os desenhos primários, o relato PRISMA e suas forças e limitações.

### Avaliação computacional e por benchmark

A avaliação computacional avalia os [[ai-technologies|sistemas de IA]] diretamente — contra benchmarks, rótulos de gabarito ou julgamentos humanos —, em vez de estudar pessoas que aprendem. Isso inclui [[benchmark|benchmarks]], [[llm|LLM]]-como-juiz e abordagens. É o método mais próximo da [[ai-ed-evaluation|avaliação de IA na educação]] (veja a distinção abaixo).

- **Forças:** rápida, escalável, reproduzível; possibilita comparação direta de modelos e versões de sistema; essencial para desenvolvimento de sistema e garantia de qualidade.
- **Limitações:** mensura a saída do sistema, não a aprendizagem — alta precisão em benchmark não implica eficácia educacional; a qualidade do gabarito e da rubrica é, ela mesma, contestada; pode deixar passar a qualidade pedagógica que os humanos percebem. [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] argumentam que a flexibilidade de linguagem natural dos LLMs torna as métricas puramente técnicas insuficientes, exigindo abordagens de avaliação inspiradas em humanos — [[simulating-students|estudantes simulados]], testes de IA-[[teacher-role|professora]] e análises de ciências comportamentais antes reservadas a sujeitos humanos — para julgar a qualidade relevante para a aprendizagem, e que estudar os LLMs com cautela pode gerar percepção sobre a aprendizagem humana.
- **Participantes disjuntos, e não divisões aleatórias, evitam vazamento na avaliação de detectores.** [[detecting-gpt-assisted-writing-stylometric-2026|Kumar et al. (2026)]] construíram um detector [[ai-detection|estilométrico]] de escrita assistida por GPT a partir de 90 escritores que produziram, cada um, uma amostra sem ajuda e uma parafraseada, mantendo toda janela de um participante em uma única dobra, de modo que o estilo do autor não pudesse vazar pela divisão, e reservando 18 pessoas inteiramente fora. A floresta aleatória alcançou ROC-AUC 0,870 com F1 0,842, mas sinalizou 4 de 18 documentos de autoria independente como assistidos por GPT (22,2%); os autores tratam essa taxa de falsos positivos como o resultado relevante para a implantação e enquadram o modelo como apoio à decisão, e não como uma triagem automatizada de má conduta.
- **Exemplares:** [[teachbench-llm-teaching-evaluation]], [[jeon-isd-agent-bench-2026]], [[ground-truth-reliability-aied]], [[cong-confidence-asag-2026]], [[drawedumath-vlm-struggling-students-2026]].
- **Padrões de relato para pipelines automatizados, e benchmarks auditados.** Dois artigos de 2026 estendem a responsabilização metodológica além do próprio estudo. O PRISMA-LLM mapeia 888 artigos de automação de revisão e 14.726 anotações, constatando que 38,0% dos artigos de software ou produto não relataram nenhuma avaliação, contra 9,3% dos artigos de LLM, e que 52% das avaliações de LLM apenas positivas deixaram uma preocupação de barra alta sem atendimento, e propõe um relato que identifica onde no fluxo de trabalho de revisão a automação atuou ([[prisma-llm-ai-assisted-systematic-reviews-2026]]). Uma auditoria de reavaliação por especialistas de seis benchmarks de [[physics-education|física]] mostra o mesmo problema no nível do instrumento: de 250 rejeições auditadas, apenas 12 (4,80%) eram erros genuínos do modelo, enquanto 143 eram defeitos de item e 95 erros de correção ([[frontier-models-physics-benchmark-audit-2026]]). Ambos argumentam que as avaliações computacionais precisam de um orçamento de erro auditado antes que seus resultados sejam lidos como achados sobre estudantes ou modelos.
- **Construa a verificação de concordância humana no desenvolvimento do detector, e não depois dele.** [[baker-taylorizable-process-textual-detector-development-2026|Baker e colegas (2026)]] estabelecem um processo de sete passos para detectores textuais de construtos cognitivos — seleção do conjunto de dados, definição do construto, redação do livro de códigos, verificação humana de concordância entre corretores, refinamento de categorias, construção do detector e aplicação —, de modo que a confiabilidade sobre rótulos codificados por humanos precede qualquer implantação de LLM como juiz. Ele exige métricas de concordância corrigidas pelo acaso (κ de Cohen ou de Fleiss, α de Krippendorff), validação cruzada no nível do estudante e análise de erro por subgrupo como padrões mínimos, e argumenta que a mensuração incorreta se torna uma fonte de dano quando tais [[educational-nlp|detectores]] ficam dentro de plataformas implantadas.

### Outros desenhos: longitudinais, de caso e de simulação

Além das grandes famílias, a base de conhecimento usa desenhos **longitudinais** que acompanham quem aprende ao longo do tempo ([[ai-lms-middle-school-longitudinal|um estudo longitudinal de LMS]]), estudos **de caso e no ambiente natural** de uso autêntico ([[ai-in-the-wild-college|análise em larga escala de interações reais de estudantes]]), e estudos de **[[simulation|simulação]]** nos quais LLMs substituem estudantes ou pacientes ([[llm-student-simulation-teacher-insights|LLMs como aprendizes simulados]], ). Esses trocam amplitude ou controle por realismo e pelo acesso a fenômenos que, de outro modo, são difíceis de observar.

### Métodos de consenso de especialistas: a técnica Delphi

O método Delphi é uma técnica estruturada para estabelecer **consenso de especialistas** sobre uma questão cuja resposta ainda não é conhecida empiricamente — usado na base de conhecimento mais frequentemente para desenvolver frameworks, listas de competências e definições sobre as quais praticantes e pesquisadores podem concordar. Em um estudo Delphi, um painel de especialistas responde a rodadas sucessivas de questionários; após cada rodada, um resumo anonimizado das respostas do grupo é devolvido, e os especialistas revisam suas respostas até o grupo convergir para um acordo (tipicamente definido por um limiar preestabelecido, por exemplo, 75%). É uma forma de construir validade de construto e consenso profissional por meio de consulta iterativa e anonimizada, em vez de uma única pesquisa ou votação.

- **Forças:** produz consenso a partir de um painel diverso de especialistas sem as pressões de grupo presenciais (o anonimato reduz os efeitos de dominância); bem adequado a definir construtos, competências e frameworks quando não existe uma medida validada; rodadas iterativas permitem aos especialistas refinar e convergir; viável onde experimentos completos ou amostras grandes são impraticáveis.
- **Limitações:** o consenso reflete o juízo de especialistas, e não a evidência empírica — ele estabelece acordo, e não efeito; os resultados dependem da [[writing-education|composição]] do painel e do limiar de consenso (subjetivo); pode ser lento ao longo de múltiplas rodadas; o juízo de um único painel pode não generalizar.
- **Exemplares:** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|o estudo do framework SAIL]] (três rodadas, 17 especialistas, refinando os níveis de competência em letramento em IA), [[hcap-human-centric-ai-pedagogy-framework-2026|o estudo do framework HCAP]] (três rodadas, 30 professores, definindo 25 competências de professor em IA), [[ai-literacy-heptagon-2026|o Heptágono do Letramento em IA]] (que usou insumo/consenso de especialistas ao lado de uma revisão guiada pela PRISMA), e.

O Delphi é frequentemente combinado com outros métodos — por exemplo, o consenso de especialistas pode ser usado para validar um framework (como no SAIL e no HCAP) que depois é testado ou implementado por estudos de pesquisa ou baseados em design. Ele fica ao lado das abordagens qualitativas e de juízo de especialistas e contribui para a [[educational-measurement|validade]] dos instrumentos baseados em framework.

### Pesquisa versus avaliação: conexões e distinções

Pesquisa e avaliação são estreitamente relacionadas, mas distintas. A **pesquisa** faz perguntas generalizáveis sobre como a IA afeta a aprendizagem — "o andaimento melhora os resultados de aprendizagem?" — e visa construir teoria e evidência que se transfiram além do estudo específico. A **avaliação** (veja [[ai-ed-evaluation]]) avalia se uma ferramenta ou sistema de IA *específico* funciona — se é preciso, confiável, pedagogicamente sólido e adequado ao propósito —, contra benchmarks, rubricas ou critérios definidos pelas partes interessadas. A pesquisa enfatiza a validade interna e a generalização; a avaliação enfatiza a qualidade do sistema e a tomada de decisão local.

As fronteiras se desfazem: os estudos de benchmark são avaliação que pode alimentar a pesquisa, e os instrumentos de avaliação (rubricas, conjuntos de gabarito, frameworks de validade) dependem das preocupações de [[educational-measurement|mensuração educacional]] e de [[assessment-validity|validade da avaliação]] que a pesquisa esclarece. Inversamente, os achados de pesquisa sobre o que apoia a aprendizagem deveriam informar como as ferramentas de IA são [[ai-ed-evaluation|avaliadas]]. A base de conhecimento as trata como complementares: a avaliação computacional e por benchmark ([[benchmark]], [[ai-ed-evaluation]]) nos diz se um sistema de IA é tecnicamente sólido, enquanto a pesquisa de eficácia e de pesquisa ([[rct]]) nos diz se ele ajuda as pessoas a aprender.

### Escolhendo entre métodos

A escolha do método segue a pergunta de pesquisa. Perguntas de efeito causal favorecem experimentos ([[rct]]); perguntas de mecanismo e de percepção favorecem pesquisas e trabalho qualitativo; perguntas de qualidade de sistema favorecem a avaliação computacional ([[benchmark]], [[ai-ed-evaluation]]); perguntas de síntese favorecem revisões e meta-análises; perguntas de desenho favorecem a DBR; e perguntas sobre o que os especialistas concordam que um construto, competência ou framework deveria conter favorecem métodos de consenso de especialistas como a técnica Delphi. Dada a heterogeneidade do campo e o ritmo da mudança em IA, o corpus da base de conhecimento reflete um movimento deliberado rumo à triangulação — combinando avaliação computacional com evidência de eficácia, qualitativa e de consenso de especialistas para julgar tanto se uma ferramenta funciona quanto se ela ajuda a aprendizagem.

Igualmente importante é ler qualquer estudo único com consciência das **limitações transversais** que afetam a pesquisa em AIED como um todo — restrições metodológicas, o ritmo acelerado da mudança em IA versus a publicação lenta, lacunas de reprodutibilidade e de prática FAIR, dependência de ferramentas proprietárias, e uso de teoria fraco ou acrítico. Veja [[limitations-in-aied-research]].

## Contrastando as grandes tradições de pesquisa

As três grandes tradições de pesquisa — [[quantitative-research|quantitativa]], [[qualitative-research|qualitativa]] e experimental — diferem fundamentalmente no que podem afirmar, no que sacrificam e quando cada uma é apropriada. Compreender esses contrastes é essencial tanto para desenhar quanto para ler pesquisa em IA na educação.

### O que cada tradição estabelece

| Dimensão | Quantitativa / pesquisa | Qualitativa | Experimental |
|---|---|---|---|
| Pergunta central | Quanto? Como se relaciona? | O que significa? Como é vivenciado? | X causa Y? |
| Dados primários | Números, escalas, autorrelato | Palavras, observações, artefatos | Medidas de resultado entre condições atribuídas |
| Alvo de inferência | Padrões, correlações, mediação | Significado, mecanismos, categorias | Efeitos causais |
| Validade interna | Fraca (correlacional) | Fraca (sem controle) | Forte (atribuição aleatória) |
| Validade externa | Forte (amostras grandes) | Limitada (pequena, ligada ao contexto) | Moderada (condições controladas) |
| Validade ecológica | Moderada | Alta | Mais baixa (condições artificiais) |

- **A [[quantitative-research|pesquisa quantitativa]]** mensura e modela relações entre variáveis — pesquisas, SEM/PLS-SEM, mensuração, acompanhamento longitudinal. Ela fornece amplitude, precisão e generalizabilidade, mas não consegue estabelecer causação a partir de dados transversais e herda limitações de [[educational-measurement|mensuração]] (incluindo viés de autorrelato).
- **A [[qualitative-research|pesquisa qualitativa]]** interpreta significado e experiência — entrevistas, grupos focais, análise temática, teoria fundamentada, fenomenografia, análise de discurso, observação/etnografia, estudos de caso. Ela fornece profundidade, mecanismo e construção de teoria (veja [[theory-development-aied]]), mas generalizabilidade limitada e apoio causal fraco.
- **Os desenhos experimentais e quase-experimentais** (veja [[rct]]) estimam efeitos causais via atribuição aleatória ou comparação pareada — o padrão-ouro para validade interna, ao custo de custo, velocidade e validade ecológica.

### Os vínculos com mensuração e métodos mistos

O trabalho quantitativo depende da [[educational-measurement|mensuração educacional]] — instrumentos confiáveis e válidos para os construtos estudados. O trabalho qualitativo revela os mecanismos e os significados que esses instrumentos podem deixar passar. O trabalho **experimental** estima se uma intervenção *causa* os resultados que os instrumentos mensuram. As três são camadas complementares: os instrumentos quantificam construtos, os experimentos estabelecem causalidade, e o trabalho qualitativo explica o *como e o porquê* por trás dos números.

Os [[mixed-methods-research|desenhos de métodos mistos]] combinam intencionalmente vertentes quantitativas e qualitativas, de modo que suas forças compensam as fraquezas uma da outra — amplitude quantitativa mais profundidade qualitativa, com a triangulação aumentando a confiança.

### Pesquisa de usabilidade e de IHC

Uma vertente metodológica distinta — a [[usability-research|pesquisa de usabilidade e de IHC]] — avalia como os usuários interagem com um sistema de IA: sua usabilidade, utilidade, aprendizado e experiência de usuário, usando protocolos de pensar em voz alta, estudos estruturados de usuário, entrevistas e observação. É a mais próxima da [[ai-ed-evaluation|avaliação de IA na educação]] e responde a uma pergunta *prévia*: mesmo uma ferramenta pedagogicamente sólida falha se for inutilizável. A pesquisa de usabilidade compartilha métodos de coleta de dados com a pesquisa qualitativa, mas visa avaliar um artefato, e não interpretar significado.

### Benefícios e limitações entre as tradições

- **Quantitativa/pesquisa:** benefícios — amostras grandes, cobertura ampla, testa mediadores complexos, eficiente. Limitações — sem causação, viés de autorrelato, amostragem por conveniência, instrumentos podem mensurar o construto errado.
- **Qualitativa:** benefícios — percepção profunda, traz à superfície fenômenos e danos inesperados, essencial para construção de teoria, centraliza vozes sub-representadas. Limitações — generalizabilidade limitada, dependência do pesquisador, amostras pequenas, apoio causal fraco, difícil de sintetizar.
- **Experimental:** benefícios — inferência causal mais forte, mensuração limpa de resultados, estimação de tamanho de efeito. Limitações — custosa/lenta, condições artificiais, a mudança rápida em IA data os resultados, amostras pequenas com poder insuficiente, restrições éticas.
- **Métodos mistos:** benefícios — triangulação, amplitude + profundidade, explica resultados inesperados. Limitações — complexa, intensiva em recursos, a integração pode ser superficial, herda as fraquezas de cada vertente.
- **Usabilidade/IHC:** benefícios — identifica barreiras de adoção, orientação de desenho acionável, rápida e barata. Limitações — não estabelece efeitos de aprendizagem, amostras pequenas, a satisfação autorrelatada pode enganar.

Na prática, a pesquisa em IA na educação raramente se encaixa liminarmente em uma única tradição. A evidência mais forte triangula: uma avaliação computacional ou de usabilidade estabelece que um sistema funciona, um experimento estabelece que ele causa aprendizagem, os instrumentos quantitativos mensuram os construtos, e o trabalho qualitativo revela os mecanismos e os significados —, respondendo juntos tanto *se* uma ferramenta ajuda a aprendizagem quanto *como e por quê*.

## Conceitos conectados

- [[interpreting-and-applying-aied-research]]
- [[ai-ed-evaluation]]
- [[rct]]
- [[benchmark]]
- [[meta-analysis-systematic-review]]
- [[ai-assisted-educational-research]] — Investigação Educacional Assistida por IA
- [[educational-measurement]]
- [[assessment-validity]]
- [[simulation]]
- [[ai-education]]
- [[higher-ed]]
- [[limitations-in-aied-research]]
- [[learning-gains]]
- [[theory-development-aied]] — Construção de teoria na IA na educação
- [[qualitative-research]] — Pesquisa qualitativa
- [[quantitative-research]] — Pesquisa quantitativa
- [[mixed-methods-research]] — Pesquisa de métodos mistos
- [[design-based-research]] — Pesquisa baseada em design
- [[usability-research]] — Pesquisa de usabilidade
- [[self-report-measures]]
- [[learning-sciences]]

## Artigos conectados

- [[ai-methodologies-science-education-research-2026]] — Um framework de sete fases de iteração epistêmica para refletir sobre como as metodologias de IA podem transformar a pesquisa em educação científica (Martin et al., 2026)
- [[access-not-enough-ai-tutoring-2026]] — Acesso não é suficiente: o apoio humano melhora o engajamento com a tutoria com IA
- [[genai-can-harm-teaching-rct-2026]] — A IA generativa pode prejudicar o ensino
- [[genai-over-reliance-learning-2026]] — Da ampliação ao excesso de dependência: um estudo de métodos mistos
- [[acceptance-ai-english-tools-2026]] — Aceitação de ferramentas de aprendizagem de inglês assistidas por IA
- [[hazra-safetutors-pedagogical-safety-2026]] — Segurança de tutores de IA e danos pedagógicos
- [[zerkouk-comprehensive-review-its-2025]] — Revisão abrangente de Sistemas de Tutoria Inteligente
- [[ai-assisted-collaborative-learning-model-dbr]] — Pesquisa baseada em design para um modelo de aprendizagem colaborativa assistida por IA
- [[teachbench-llm-teaching-evaluation]] — TeachBench: avaliando a capacidade de ensino de LLMs
- [[ground-truth-reliability-aied]] — Modernizando o gabarito: quatro viradas rumo à confiabilidade e à validade
- [[llm-student-simulation-teacher-insights]] — Os LLMs conseguem simular efetivamente pessoas que aprendem?
- [[raise-framework-ai-education-reporting-2026]] — RAISE: 30 itens em dez domínios para o relato transparente de estudos de IA na educação (Allison 2026)
- [[ai-lms-middle-school-longitudinal]] — Sistema de Gestão de Aprendizagem com IA integrada: um estudo longitudinal
- [[ai-in-the-wild-college]] — IA no ambiente natural: análise em larga escala de interações autênticas
- [[same-ai-different-pathways]] — A mesma IA, trajetórias diferentes: desempacotando mecanismos
- [[tep-aied-model-reporting-2026]] — O modelo TEP-AIED para relatar pesquisa em IA na educação com rigor (Hwang, Xie, Wah & Gasevic 2026)
- [[t2i-competence-paradox-2026]] — O paradoxo da competência: IA generativa de texto para imagem em arte e design
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT na educação: um efeito em busca de uma causa
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Metameta-análise do efeito da IA na aprendizagem
- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: auditoria de meta-análise defeituosa da AIED
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[llm]]
