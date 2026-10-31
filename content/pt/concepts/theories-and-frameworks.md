---
title: "Teorias e frameworks"
created: "2026-09-19T05:40:00-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
translation_of: concepts/theories-and-frameworks
source_updated: "2026-10-25T18:35:00-04:00"
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


> **Teorias e frameworks** — o inventário de trabalho das estruturas explicativas e organizacionais que esta base de conhecimento de fato usa. Teorias explicam por que a aprendizagem acontece ([[learning-theories|teorias da aprendizagem]], [[self-determination-theory|teoria da autodeterminação]], [[sociocultural-learning|aprendizagem sociocultural]], [[activity-theory-aied|teoria da atividade]]); frameworks organizam decisões de design, ensino e adoção ([[tpack|TPACK]], [[samr-model|SAMR]], [[technology-acceptance-model|modelos de adoção de tecnologia]], [[icap-framework|ICAP]], [[universal-design-for-learning|design universal para a aprendizagem]]); modelos tornam as afirmações de aprendizagem testáveis e computáveis ([[item-response-theory|teoria da resposta ao item]], [[assessment-validity|validade da avaliação]], [[knowledge-tracing|rastreamento de conhecimento]]). Use esta página para encontrar a lente sobre a qual um estudo repousa, ou para escolher uma para seu próprio trabalho.

## Perguntas para considerar

- Uma teoria prevê o que acontece quando algo muda; um framework lhe diz a que prestar atenção. Quando um estudo relata um ganho sob a bandeira de um framework, mas não faz nenhuma previsão que pudesse ter falhado, o que de fato foi aprendido?
- O [[tpack|TPACK]], o [[samr-model|SAMR]], o [[universal-design-for-learning|DUA]], os [[technology-acceptance-model|modelos de adoção]] e o [[icap-framework|ICAP]] todos antecedem os [[llm|modelos de linguagem grandes]]. Quais partes deles ainda se sustentam quando a ferramenta consegue escrever, explicar e se adaptar por conta própria, e como você saberia?
- Várias das teorias catalogadas abaixo foram cunhadas para a IA nos últimos anos. O que seria preciso para que uma delas estivesse errada, e alguém já tentou mostrar isso?
- A adoção costuma ser relatada como movimento por etapas. Se um colega relata que seu curso passou "da substituição à redefinição" este ano, que evidência independente você pediria antes de acreditar?
- Boa parte deste campo aplica teoria emprestada em vez de testá-la. Escolha um achado em que você confia: ele poderia ser reenquadrado como teste de [[self-determination-theory|uma teoria]], e que medição isso exigiria?

## Introdução

Todo tutor de IA, sistema de feedback e painel embute pressupostos sobre como as pessoas aprendem, quer os designers os declarem ou não. Esta página reúne as teorias, os frameworks e os modelos dos quais esses pressupostos vêm, ordenados de forma ampla pelo quanto a literatura atual de pesquisa se apoia neles, e diz brevemente para que serve cada um. As distinções entre os três rótulos são reais, mas menores, e são resumidas perto do fim em vez de tratadas como o assunto. O que importa praticamente é sobre qual lente uma afirmação repousa, e se essa lente consegue sustentá-la.

## Teorias da aprendizagem que a literatura aplica

Estas explicam mecanismos: elas nomeiam as partes que fazem o trabalho e prevêem o que segue quando essas partes mudam. Na literatura de IA, são em grande parte emprestadas da psicologia e das [[learning-sciences|ciências da aprendizagem]], e usadas como quadros interpretativos em torno de uma nova ferramenta.

- **[[learning-theories|Teorias da aprendizagem (guarda-chuva)]]** — a família como um todo, incluindo os polos clássicos do [[behaviorism|behaviorismo]] e do [[constructivist|construtivismo]] e a lacuna de "construtivismo no nome, behaviorismo na prática" que recorre em implementações de IA. O conectivismo e a teoria da carga cognitiva também são tratados aqui.
- **[[constructivist|Construtivismo]]** — a aprendizagem como construção ativa de conhecimento. Ele sustenta o trabalho baseado em projetos, a tutoria de IA baseada em diálogo, e a crítica de que sistemas de treino e feedback violam sua própria pedagogia declarada.
- **[[sociocultural-learning|Teoria sociocultural]]** — a aprendizagem como mediada por ferramentas e interação social, e é por isso que a IA é teorizada como artefato mediador, e não como mero auxílio.
- **[[activity-theory-aied|Teoria da atividade]]** — toma todo o sistema de atividade, contradições incluídas, como unidade de análise. Comum em estudos de IA voltados a professores, onde o achado interessante costuma ser a tensão entre ferramentas, regras e comunidade.
- **[[situated-learning|Aprendizagem situada]]** e **[[embodied-learning|aprendizagem corporificada]]** — a aprendizagem como atada ao contexto e ao corpo, o contrapeso a tratar a IA como meio puramente linguístico.
- **[[distributed-cognition|Cognição distribuída]]** — o pensamento espalhado por pessoas e artefatos, o que enquadra a assistência de IA como redistribuição do trabalho cognitivo, e não como substituição dele.
- **[[community-of-inquiry|Comunidade de investigação]]** — as presenças social, cognitiva e docente que fazem uma experiência on-line funcionar; uma teoria da experiência e um quadro de design ao mesmo tempo.
- **[[self-determination-theory|Teoria da autodeterminação]]** — autonomia, competência e relacionamento como precondições motivacionais. Frequentemente a explicação oferecida quando o uso de IA eleva o engajamento sem elevar a aprendizagem.
- **[[cognitive-psychology|Cognitivismo]]** — processamento de informação, memória de trabalho, e a divergência entre a sensação de aprender e a aprendizagem real.
- **Teoria da percepção social (calor e competência)** — importada da cognição social e da pesquisa sobre robôs de serviço, ela enquadra como os usuários julgam a credibilidade de um agente de IA: a competência percebida previu diretamente a credibilidade do feedback do ChatGPT, enquanto o calor operou apenas por meio da empatia semelhante à humana (SEM, 230 estudantes; [[chatgpt-feedback-credibility-perceived-learning|Pérez-López et al. (2026)]]).
- **Uma quarta categoria de affordance foi proposta, não testada.** Codificando 24 estudos contra um esquema de affordances em três partes, os revisores constataram que engajamento, segurança e autoeficácia não se encaixavam nas categorias tecnológica, pedagógica ou social, e propuseram affordances emocionais fundamentadas no determinismo recíproco de Bandura ([[genai-chatbots-language-learning-affordances-review-2026|Lopez e Arabadzhy (2026)]]).

## Modelos de quem aprende e do processo de aprendizagem

- **[[self-regulated-learning|Aprendizagem autorregulada]]** — planejar, monitorar e avaliar a própria aprendizagem. O construto cavalo de batalha para perguntar se o apoio de IA alcança as fases que importam ou apenas a execução.
- **[[metacognition|Metacognição]]** — pensar sobre o próprio pensamento, e o construto mais frequentemente nomeado quando a IA é acusada de pensar pelos estudantes.
- **[[motivation|Motivação]]** — por que quem aprende se engaja, e o construto que separa engajamento de aprendizagem em estudos de IA.
- **[[self-efficacy|Autoeficácia]]** — crença na própria capacidade, distinta de competência, e mediadora frequente entre uso de IA e desfechos.
- **[[agency|Agência]]** — quem dirige o trabalho: o construto por trás da tensão controle-versus-autonomia do campo, e por trás do mecanismo de agência delegada na teoria mais recente.
- **[[desirable-difficulties|Dificuldades desejáveis]]**, **[[retrieval-spacing-interleaving|recuperação, espaçamento e intercalação]]** e **[[refutation-text|texto de refutação]]** — achados que tornam o atrito pedagogicamente valioso, aplicados a decisões sobre quanto uma IA deveria fazer.
- **[[transfer-of-learning|Transferência da aprendizagem]]** — se a capacidade persiste uma vez retirado o apoio, o que a teoria recente trata como o critério que separa aprendizagem de assistência, em vez de um desfecho entre vários.

## Frameworks de ensino, integração e adoção

- **[[tpack|TPACK]]** — o conhecimento docente que mescla tecnologia, pedagogia e conteúdo; o framework padrão para estudos de IA voltados a professores.
- **[[technology-acceptance-model|Modelos de adoção]]** — a intenção como função da utilidade percebida e da facilidade de uso. Usados amplamente o bastante para que a dependência do campo da intenção em vez do comportamento seja uma crítica permanente.
- **[[icap-framework|ICAP]]** — classifica o engajamento como passivo, ativo, construtivo, interativo; útil para perguntar que modo uma interação com IA de fato permite.
- **[[samr-model|SAMR]]** — da substituição à redefinição. Popular como história de maturidade, fraco como instrumento de medição.
- **[[universal-design-for-learning|Design universal para a aprendizagem]]**, **[[inclusive-learning|aprendizagem inclusiva]]** e **[[accessibility|acessibilidade]]** — quadros de design para quem é atendido, e os mais frequentemente invocados em trabalho sobre deficiência e equidade.
- **[[learning-design|Design de aprendizagem]]**, **[[curriculum-design|design de currículo]]** e **[[design-thinking|design thinking]]** — como tarefas, sequências e programas são estruturados antes de qualquer ferramenta ser escolhida.
- **[[change-management|Gestão de mudança]]** — se um sistema é adotado de algum modo, o que costuma ser uma questão institucional, e não pedagógica.

## Modelos de medição e computacionais

- **[[item-response-theory|Teoria da resposta ao item]]** — estimação de itens e de habilidade, e o modelo que torna os números de uma prova interpretáveis.
- **[[educational-measurement|Medição educacional]]** — a paisagem de instrumentos, incluindo as medidas construídas especificamente para letramento em IA.
- **[[assessment-validity|Validade]]** — se um instrumento mede o construto que afirma medir, o que decide se um desfecho relatado sustenta a afirmação teórica a ele associada.
- **[[self-report-measures|Medidas de autorrelato]]** — a fonte dominante e mais frágil de evidência nesta literatura; vários dos construtos acima são conhecidos por divergirem acentuadamente entre autorrelato e desempenho.
- **[[knowledge-tracing|Rastreamento de conhecimento]]** e **[[student-modeling|modelagem de estudantes]]** — estimar o estado de quem aprende ao longo do tempo a partir de dados de interação.
- **[[cognitive-diagnosis|Diagnóstico cognitivo]]** — atribuir desempenho a componentes específicos de habilidade, a contraparte de modelagem do ensino diagnóstico.
- **[[benchmark|Benchmarks]]**, **[[ai-ed-evaluation|avaliação da educação com IA]]** e **[[psychometrically-aware-ai|consciência psicométrica no design de IA]]** — como sistemas e intervenções são pontuados, comparados e auditados.
- **[[design-based-research|Pesquisa baseada em design]]** — o método que gera teoria a partir de intervenções projetadas, em vez de testá-la de antemão.

## Teorias cunhadas para a era da IA

Quatro propostas na base de conhecimento constroem teoria em vez de tomá-la emprestada. Elas são páginas de artigo, e não nós de conceito, porque cada uma é um argumento único:

- **[[generativism-learning-theory|Generativismo]]** — uma nova teoria da aprendizagem que argumenta que as quatro clássicas mostram limitações conceituais significativas à medida que a IA generativa se prolifera.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Coagência epistêmica]]** — um modelo de como quem aprende e sistemas de IA produzem conjuntamente conhecimento e entendimento.
- **[[absent-cognitive-baseline-2026|A linha de base cognitiva ausente]]** — teoriza por que estudantes nativos de IA superestimam sua própria aprendizagem quando a IA infla o desempenho.
- **[[yan-agentivism-learning-theory-ai-2026|Agentivismo]]** — uma teoria de alcance médio que nomeia quatro mecanismos (agência delegada, monitoramento e verificação epistêmicos, internalização reconstrutiva e transferência sob apoio reduzido) e enuncia seis proposições testáveis.

## Distinguindo os três rótulos

As palavras são usadas de forma frouxa na literatura, e a diferença vale um parágrafo, não uma página inteira:

- **Uma teoria explica um mecanismo** e prevê o que acontece quando suas partes mudam. Ela pode falhar, e é por isso que estudos que a testam conseguem relatar tamanhos de efeito.
- **Um framework organiza ou prescreve.** Ele nomeia os componentes a que prestar atenção, em geral sem prever magnitudes, e não pode ser falsificado.
- **Um modelo é uma representação formal**, mais frequentemente de medição ou do estado de quem aprende. Ele pode ser ajustado, comparado e mostrado errado de um modo que um framework não pode.
- **Os rótulos se sobrepõem.** A [[community-of-inquiry|comunidade de investigação]] é uma teoria e um quadro de design ao mesmo tempo; a [[activity-theory-aied|teoria da atividade]] é explicativa e analítica. Trate o rótulo como pista sobre o que uma fonte afirma, não como categoria de arquivamento.

## Camadas relacionadas

Duas páginas vizinhas tratam deliberadamente de outra coisa. A [[philosophy-of-ai-in-education|filosofia da IA na educação]] faz perguntas normativas e conceituais — para que a educação serve, se uma máquina pode ensinar — e não prevê tamanhos de efeito; um estudo pode ser filosoficamente ingênuo e teoricamente sólido, ou o contrário. O [[theory-development-aied|desenvolvimento de teoria]] é a metaatividade de construir, tomar emprestada e revisar teoria, incluindo a crítica permanente de que boa parte do trabalho em AIED aplica teoria existente em vez de testá-la. Esta página é o inventário; o desenvolvimento de teoria trata de produzir e revisar o inventário.

## Escolhendo uma lente quando a pergunta é prática

- **Professores** partindo de um problema podem trabalhar de trás para frente: se quem aprende não está se engajando, o [[icap-framework|ICAP]] e a [[self-determination-theory|TAD]] nomeiam causas diferentes e sugerem correções diferentes; se a pergunta é se adotar uma ferramenta de algum modo, os [[technology-acceptance-model|modelos de adoção]] e o [[samr-model|SAMR]] fazem perguntas diferentes sobre ela.
- **Designers de aprendizagem** tiram mais proveito dos quadros de design — [[universal-design-for-learning|DUA]], [[learning-design|design de aprendizagem]] e [[scaffolding|andaime]] — pareados com uma teoria que prevê o que acontece quando o andaime é retirado.
- **Pesquisadores** deveriam declarar a qual nó um estudo se reporta e se o design consegue de fato testá-lo; os modelos de medição ([[item-response-theory|TRI]], [[assessment-validity|validade da avaliação]], [[self-report-measures|autorrelato]]) decidem se um desfecho relatado sustenta essa afirmação.
- **Gestores** encontram esses frameworks como questões de adoção e mudança, onde um modelo de etapas costuma ser usado como história de maturidade, e não como instrumento.

## O que os frameworks não conseguem fazer

Frameworks não são evidência. Costumam ser emprestados de contextos pré-LLM e localizados por quem os aplica, podem funcionar como marca, e modelos de etapas convidam à adoção de *checklist* que relata movimento por níveis em vez de aprendizagem. Afirmações que repousam sobre um framework deveriam ser lidas junto com [[limitations-in-aied-research|as limitações transversais do campo]], a [[assessment-validity|validade]] do que quer que tenha medido o desfecho, e os limites conhecidos do [[self-report-measures|autorrelato]].


O alinhamento entre mecanismo e teoria pode, no entanto, ser decisivo: uma síntese temática de 55 estudos de aprendizagem baseada em jogos com apoio de IA concluiu que a eficácia dependia de o mecanismo de IA encenar a pedagogia que deveria servir, e não da sofisticação algorítmica ([[ai-game-based-learning-systematic-review-2026|Kaşarcı e Yurt (2026)]]).

## Ideias equivocadas comuns

**"Aplicar uma teoria emprestada a uma ferramenta de IA é usar teoria."** Boa parte deste campo aplica teoria emprestada em vez de testá-la, e a diferença é se o framework fez uma previsão que poderia ter falhado. Quando um estudo relata um ganho sob a bandeira de um framework sem se comprometer com nenhuma previsão falsificável, nada foi aprendido sobre o framework — um resultado compatível com todas as teorias do catálogo é evidência para nenhuma delas.

**"O valor de um framework é o quão bem ele descreve um sistema que você já construiu."** Isso é rotulagem post hoc. Uma taxonomia que acomoda qualquer desenho não tem poder discriminante, e é por isso que frameworks descritivos deveriam ser julgados pelo que excluem. A pergunta de avaliação não é "meu sistema se encaixa nisto?", mas "que tipo de sistema este framework diria estar errado?".

**"Teorias da aprendizagem, modelos de quem aprende e frameworks de adoção são lentes intercambiáveis."** Eles respondem a perguntas diferentes — como a aprendizagem acontece, qual é o estado do aprendiz e por que uma prática se difunde — e seus tipos de evidência diferem de acordo. Escolher a camada errada produz um estudo que mede a variável certa contra a previsão errada, o que se lê como um resultado nulo quando é um erro de categoria.

**"Mais frameworks significam um campo mais maduro."** Frameworks cunhados para a era da IA se acumulam mais rápido do que são testados, e acúmulo sem falsificação é sintoma, e não progresso. A maturidade aparece como previsões concorrentes sendo resolvidas, não como crescimento de vocabulário.

## Conceitos conectados

- [[theory-development-aied]] — construir e revisar teoria no campo
- [[philosophy-of-ai-in-education]] — a camada normativa e conceitual
- [[learning-theories]] — o guarda-chuva da teoria da aprendizagem
- [[learning-sciences]] — o campo vizinho de onde a maior parte da teoria é emprestada
- [[limitations-in-aied-research]] — o que a base de evidências consegue e não consegue sustentar
- [[tpack]] — framework de conhecimento docente
- [[technology-acceptance-model]] — frameworks de adoção
- [[item-response-theory]] — um modelo de medição
- [[universal-design-for-learning]] — um framework de design
- [[research-methods-aied]] — como a teoria é testada

## Artigos conectados
- [[genai-chatbots-language-learning-affordances-review-2026]] — Affordances emocionais propostas como uma quarta categoria em uma taxonomia de affordances
- [[ai-game-based-learning-systematic-review-2026]] — O alinhamento mecanismo-teoria, e não a sofisticação algorítmica, moveu a eficácia em 55 estudos de aprendizagem baseada em jogos com IA

- [[rismanchian-ai-education-four-decades-aixed-2026]] — quatro décadas de AIED pelo framework IA×Ed
- [[educating-minds-generative-ai-2026]] — síntese densa em teoria sobre IA generativa e aprendizagem
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — teoria da atividade aplicada ao desenvolvimento profissional docente
- [[activity-theory-teachers-adoption-ai-sem-2026]] — teoria da atividade e adoção por professores
- [[generativism-learning-theory]] — uma teoria da aprendizagem proposta para a era da IA generativa
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — rumo a uma teoria da coagência epistêmica
- [[absent-cognitive-baseline-2026]] — teorizando uma lacuna estrutural na autoavaliação de estudantes nativos de IA
- [[yan-agentivism-learning-theory-ai-2026]] — uma teoria da aprendizagem de alcance médio para a interação humano-IA
- [[ai-literacy-instrument-development-systematic-review-2026]] — desenvolvimento de instrumentos em um construto jovem
- [[mishra-control-vs-agency-history-2025]] — a tensão fundacional do campo entre controle e agência