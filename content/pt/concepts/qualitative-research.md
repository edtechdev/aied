---
title: Pesquisa qualitativa
created: "2026-08-24T02:00:00-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
research_method: [interviews, case study]
confidence: high
methods: [qualitative-research, research-methods-aied]
translation_of: concepts/qualitative-research
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Pesquisa qualitativa** — a família de métodos empíricos que estuda como as pessoas *vivenciam, interpretam e dão sentido* aos fenômenos, tipicamente por meio de palavras, observações e artefatos, e não de números. Na [[ai-education|IA na educação]], os métodos qualitativos revelam *como* estudantes e professores de fato vivenciam as [[generative-ai|ferramentas de IA]] — os sentidos, as tensões, os danos e os mecanismos que as medidas padronizadas perdem. Como a IA na educação se move rápido e seus efeitos são frequentemente mediados por contexto, percepção e construtos contestados como [[trust|confiança]] e [[agency|agência]], o trabalho qualitativo é essencial ao lado de desenhos [[quantitative-research|quantitativos]] (veja [[research-methods-aied]]).

## Perguntas para refletir

- Uma pesquisa lhe diz que 40% dos estudantes desconfiam de um [[intelligent-tutoring|tutor de IA]]; um grupo focal lhe diz *por que* eles desconfiam. Qual número parece mais acionável para você, e o que o \"porquê\" acrescenta que a porcentagem não consegue?
- Os achados qualitativos geralmente não são generalizáveis estatisticamente, mas frequentemente são \"generalizáveis conceitualmente\" — mecanismos e dinâmicas que se transferem para outros lugares. Antes de ler, o que significa para um achado ser generalizável em conceito, mas não em estatística?
- A página alerta que a *concordância* de codificação entre humanos e LLMs não é o mesmo que *qualidade* de codificação quando o consenso humano não é verdade de base. Você já tratou \"dois revisores concordaram\" como prova de que algo estava correto? Quando a concordância é sinal de verdade, e quando é apenas erro compartilhado?
- Se a IA agora consegue assistir a codificação qualitativa em escala, isso ameaça a profundidade interpretativa que torna a pesquisa qualitativa valiosa, ou apenas automatiza sua trabalheira? Como você decidiria qual dos dois está acontecendo em um dado estudo?
- O trabalho qualitativo centra vozes sub-representadas — estudantes de minorias étnicas, não usuários céticos — que grandes pesquisas frequentemente perdem. Pense em uma afirmação sobre IA na educação que você ouviu. A experiência de quem provavelmente *não* é capturada pelo número de manchete?
- Escolha um construto contestado de que você goste — confiança, agência ou dano. Antes de ler, esboce como você o estudaria com palavras e observações, e não com números, e anote o que você perderia ao fazê-lo.

## Introdução

A pesquisa qualitativa não é um método único, mas uma família organizada por *o que* eles estudam e *como* a evidência é reunida e analisada. O que os une é a ênfase na construção de sentido, no contexto e na profundidade, em vez da amplitude e do controle causal. Os achados qualitativos tipicamente **não** são generalizáveis no sentido estatístico, mas frequentemente são *generalizáveis conceitualmente* — revelando mecanismos, categorias e dinâmicas que se transferem para outros contextos. No corpus da base de conhecimento, o trabalho qualitativo é proeminente para estudar aceitação da IA, confiança, dano, prática de [[teacher-role|ensino]] e processos de aprendizagem.

## Principais abordagens qualitativas

### Análise temática
A análise temática identifica, codifica e interpreta padrões (\"temas\") ao longo dos dados qualitativos — tipicamente transcrições de entrevistas ou de grupos focais, respostas abertas de pesquisa ou documentos. É a abordagem mais amplamente usada nos estudos qualitativos da base de conhecimento. As entrevistas e as respostas abertas são, elas mesmas, [[self-report-measures|dados de autorrelato]], então compartilham os limites sobre o que pode ser afirmado a respeito do comportamento — veja aquela página para onde a evidência de autorrelato é forte e onde ela se rompe. [[fouad-bentley-trust-utility-gap-physics-2026|Um estudo da lacuna entre confiança e utilidade na física]] usa análise temática de dados de entrevistas com estudantes para revelar ceticismo e preferências de adoção [[discipline-specific-aied|específicos do domínio]]; [[genai-teacher-feedback-comparison|uma comparação do feedback de GenAI com o do professor]] analisa percepções dos estudantes sobre utilidade e confiabilidade; e [[ai-adult-learning-guidelines-dis2026|diretrizes para aprendizagem adulta com IA]] derivam princípios de desenho da codificação temática de insumos de especialistas e de aprendentes. [[ai-changing-teaching-workflows|Como a IA muda os fluxos de trabalho do ensino]] se apoia em análise temática de relatos de educadores.

A confiabilidade da codificação pode se tornar um procedimento contínuo, em vez de uma verificação pontual. [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] codificam 304 afirmações de noticing em α de Krippendorff = .803, monitoram a concordância em cinco casos sobrepostos (κ agrupado = 0,937) e recodificam as afirmações disputadas sempre que a concordância caía abaixo de um limiar de recalibração de 0,85 antes de retomar; as afirmações codificadas entram então em uma análise de rede epistêmica que modela quais dimensões coocorrem, em vez de uma lista plana de temas.

### Teoria fundamentada
A teoria fundamentada constrói uma teoria *a partir dos dados*, em vez de testar um framework a priori, usando codificação iterativa (aberta → axial → seletiva) até a saturação teórica. É ideal para construir nova teoria sobre fenômenos emergentes da IA na educação. [[liu-tool-tutor-crutch-programming-2026|Liu et al.]] desenvolvem uma teoria fundamentada de *ferramenta, tutor ou muleta* — uma tipologia de três modos de como os estudantes [[scaffolding|andam]] ou descarregam cognitivamente na IA na [[cs-education|educação em programação]] — teorizando diretamente o [[cognitive-offloading|deslocamento cognitivo]]. [[favero-critical-ai-tutors-empower-enslave-2025|Um estudo de teoria fundamentada sobre tutores críticos de IA]] examina se tais tutores empoderam ou escravizam quem aprende. O [[genai-feedback-design-multisite-experiment|desenho centrado no humano de feedback com GenAI]] usa análise fundamentada ao longo de um estudo multissítio. Veja também [[theory-development-aied]] para como tais teorias fundamentadas alimentam a construção de teoria do campo.

### Fenomenologia e fenomenografia
Abordagens fenomenológicas estudam a *experiência vivida* de um fenômeno — como é aprender com IA — enquanto a fenomenografia estuda as *formas qualitativamente diferentes* pelas quais as pessoas vivenciam e compreendem um fenômeno (produzindo \"categorias de descrição\"). [[absent-cognitive-baseline-2026|A Linha de Base Cognitiva Ausente]] recorre às experiências vividas dos estudantes de autoavaliação sob a IA para teorizar uma lacuna estrutural; [[metacognitively-discordant-completion-genai-2026|um estudo fenomenológico]] captura a experiência de completar trabalho com a IA sabendo que não se entende; e [[genai-runaway-object-math-higher-ed|um estudo sociocultural e interpretativo]] analisa como a GenAI se torna um \"objeto desgovernado\" na prática acadêmica de [[math-education|matemática]].

### Análise de discurso
A análise de discurso examina como a linguagem em uso constrói sentido, identidades e poder — analisando fala em sala de aula, texto escrito ou sequências interacionais. O [[nspa-neuro-symbolic-pedagogical-alignment-2026|NSPA]] conduz *análise de discurso* de sala de aula de horizonte longo (aqui assistida computacionalmente) para mitigar viés de dialeto na compreensão da interação em sala de aula; [[scaffolding-critical-engagement-genai-minority-students|um estudo de estudantes preparatórios de minorias étnicas]] analisa *discurso* colaborativo em tarefas de [[prompt-engineering|prompt engineering]]. A análise de discurso faz a ponte entre interpretação qualitativa e métodos computacionais quando combinada com o [[educational-nlp|PLN educacional]].

[[genai-higher-ed-agency-responsibility-discourse-2026|Poudyal (2026)]] mostra como a codificação de discurso se torna auditável quando é traduzida em regras contáveis: ao longo de 366 resumos e 91.405 tokens, uma associação conta apenas quando um ator precede um predicado dentro de seis palavras intervenientes, e a proximidade nominal é excluída, de modo que \"governança da IA\" nunca conta como evidência de que a IA governa — uma aproximação baseada em regras, e não uma análise sintática por dependência, cujos limites o desenho declara.

### Observações e etnografia
Estudos de observação observam o comportamento em contexto; a etnografia estende isso ao estudo sustentado e imersivo de um cenário, frequentemente com o pesquisador como observador participante. [[trio-ethnography-llm-programming-education|Uma etnografia em trio]] da educação em programação apoiada por LLM rastreia como as interpretações dos estudantes evoluem; [[zha-ai-literacy-biology-case-study|um estudo de caso em sala de aula]] observa a integração do [[ai-literacy|letramento em IA]] na [[biology-education|biologia]]. Métodos observacionais capturam o comportamento *real* (o que quem aprende faz com a IA), em vez do comportamento relatado — complementando as pesquisas de autorrelato que dominam a [[educational-measurement|mensuração quantitativa]] das atitudes.

### Estudos de caso
Um estudo de caso é uma investigação aprofundada de um caso delimitado (um curso, uma instituição, um único aprendente) usando múltiplas fontes de dados. [[drummond-genai-business-schools-framework-2026|Um estudo de caso de escola de negócios]] gera um framework de ensino e aprendizagem para a GenAI informado pelos estudantes; [[zha-ai-literacy-biology-case-study|um estudo de caso de biologia]] documenta a integração do letramento em IA. Estudos de caso trocam amplitude por profundidade e são fortes para geração de teoria e insight transferível, e não para generalização. [[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]] oferecem um estudo de caso qualitativo de 21 estudantes de graduação com deficiência visual em três universidades palestinas, usando análise temática de entrevistas semiestruturadas para mostrar como a GenAI funciona como uma [[assistive-technology|tecnologia assistiva]] para a [[inclusive-learning|aprendizagem inclusiva]] — um exemplo de pesquisa de estudo de caso revelando mecanismos (adaptação personalizada, aumento do professor, paridade educacional) que as medidas quantitativas perdem.

[[ai-emotional-alerts-teachers-mathematics-classroom-2026|Swidan (2026)]] triangula vídeo, os próprios registros do sistema de alertas e entrevistas de recordação por estímulo para um professor e oito estudantes, mostrando que um sinal afetivo só adquiria sentido por meio da resposta do professor; a codificação de episódios em duas etapas por um único autor, sem codificação independente nem detecção validada de afeto, marca o limite do que uma análise de caso de um único codificador consegue garantir.

### Entrevistas e grupos focais
**Entrevistas** semiestruturadas e **grupos focais** são os instrumentos primários de coleta de dados em todas as abordagens acima. Eles eliciam relatos ricos e contextuais. O corpus qualitativo da base de conhecimento é construído substancialmente sobre entrevistas (por exemplo, [[genai-expertise-pathways-sysadmin|trilhas de especialização]]) e grupos focais (por exemplo, [[t2i-competence-paradox-2026|o paradoxo da competência em texto-para-imagem]], [[ai-adult-learning-guidelines-dis2026]]). A qualidade depende de desenho cuidadoso de perguntas, amostragem por variação e análise rigorosa.

## Como a pesquisa qualitativa aparece na base de conhecimento

- **Mecanismo e processo.** O trabalho qualitativo revela *por que* a IA ajuda ou prejudica. [[same-ai-different-pathways]] usa vertentes qualitativas para desvendar mecanismos da aprendizagem [[sociocultural-learning|mediada pela IA]] entre contextos
- **Confiança, agência e identidade.** Construtos subjetivos e contestados são frequentemente melhor estudados qualitativamente. [[t2i-competence-paradox-2026]] revela como estudantes de arte e desenho negociam facilidade, risco e identidade criativa; [[genai-runaway-object-math-higher-ed]] captura o papel da IA em ressignificar identidade e prática acadêmica.
- **Equidade e vozes sub-representadas.** O trabalho qualitativo centra perspectivas frequentemente excluídas de grandes pesquisas — [[scaffolding-critical-engagement-genai-minority-students|estudantes de minorias étnicas]], [[becker-chatgpt-typology-physics-2026|não usuários céticos]]. Isso se conecta à [[equity-in-ai-education|equidade na educação com IA]].
- **Construção de tipologia e taxonomia.** [[becker-chatgpt-typology-physics-2026|Uma tipologia qualitativa da adoção do ChatGPT]] distingue usuários pragmáticos de não usuários céticos — categorias que informam o desenho de instrumentos de pesquisa posteriores.
- **Codificação comparável entre documentos.** [[genai-governance-australian-higher-ed-2026|Poudyal (2026)]] aplica 15 vinhetas fixas às políticas públicas de 20 universidades para produzir 300 classificações comparáveis, e relata que um segundo codificador independente correspondeu a apenas 57,3% delas (κ = 0,395) — tornando visível a fragilidade do esquema de codificação, em vez de deixar a concordância não declarada.

## A IA e a análise qualitativa

Um desenvolvimento recente distintivo é o uso de [[llm|LLMs]] para assistir a codificação qualitativa. A evidência da base de conhecimento é cautelosa: [[human-vs-llm-ordered-coding]] mostra que a codificação por LLM e por humanos diverge, com erros se propagando pela análise temporal; [[agreement-not-quality-llm-coding-verification|Concordância Não É Qualidade]] mostra que a *concordância* de codificação entre humanos e LLMs não é o mesmo que *qualidade* de codificação quando o consenso humano não é verdade de base. A codificação assistida por LLM pode escalar e acelerar a análise qualitativa, mas suas saídas exigem verificação contra o [[human-in-the-loop-ai|julgamento humano]] — uma interseção importante da pesquisa qualitativa com o [[educational-nlp|PLN educacional]] e a [[ai-ed-evaluation|avaliação da IAED]].

**O problema da saída fluente e a garantibilidade.** [[chain-behind-claim-warrantability-2026|Holster (2026)]] aguça por que precisão e divulgação são padrões insuficientes para o trabalho qualitativo assistido por IA. Como as LLMs reorganizam corpora em minutos em tópicos, citações e afirmações de prevalência fluentes, elas podem ocultar a via analítica que os produziu — e as pessoas tendem a avaliar a saída facilmente processada e fluente como mais verdadeira. Holster propõe a **garantibilidade** como complemento à precisão e à divulgação: uma interpretação assistida por IA é garantível quando a via dos dados de origem até a afirmação permanece *inspecionável, contestável e revisível*. Sua maquinaria construtiva são as **lentes semânticas** (reorganizações documentadas de um corpus ao longo de níveis de abstração) e um repertório de **artefatos de garantia** relativo à afirmação — tabelas de tópicos vinculadas à fonte, pilhas de lentes e rios de evidência — desenhados nas ferramentas, de modo que a análise fluente também produza um registro de via retraçável. Isso estende a tradição de trilha de auditoria do campo para a era generativa e dá aos revisores algo concreto para contestar além de uma interpretação final.
- **Confiabilidade não é precisão na codificação por LLM [[agentic-ai|multiagente]].** Um pipeline informado pela literatura em que dois codificadores de IA codificaram de forma independente, debateram e reconciliaram discordâncias produziu concordância entre codificadores acima do κ de Cohen de 0,85 em todo conjunto de dados e rótulo, enquanto o F1 de critério variou de 0,31 a 0,89 (média 0,68, DP 0,16) — alta concordância entre agentes que estavam ambos errados. Manuais de codificação mais longos (t = -11,702) e excertos mais semelhantes (t = -9,249) reduziram a precisão inicial, e os turnos de discussão se correlacionaram positivamente com a precisão (t = 7,997), enquanto conflitos corretamente resolvidos e modos de colaboração se correlacionaram negativamente (t = -9,720 e -8,420), então a convergência é um proxy fraco para a correção. A implicação prática é que a codificação assistida por IA precisa de adjudicação no nível de checklist contra uma referência humana, em vez da concordância entre agentes como sinal de qualidade. ([[llm-qualitative-coding-consensus-2026]])

## Pontos fortes e limitações

- **Pontos fortes:** insight ecológico e conceitual profundo; revela fenômenos, riscos e mecanismos inesperados; essencial para a construção de teoria (veja [[theory-development-aied]]); captura sentido, contexto e construtos contestados; centra perspectivas sub-representadas; forte para estudar fenômenos de movimento rápido, em que as medidas padronizadas ficam atrás.
- **Limitações:** generalizabilidade estatística limitada; interpretativo e dependente do pesquisador (preocupações de confiabilidade); amostras pequenas; apoio mais fraco para afirmações causais; os achados podem ser difíceis de sintetizar entre estudos; intensivo em tempo e em trabalho.

Métodos qualitativos e quantitativos são complementos, e não rivais — veja [[research-methods-aied]] para como eles contrastam e triangulam, e [[mixed-methods-research|métodos mixtos]] para desenhos que os combinam.

## Conceitos conectados

- [[research-methods-aied]]
- [[mixed-methods-research]]
- [[quantitative-research]]
- [[theory-development-aied]]
- [[ai-assisted-educational-research]] — Pesquisa Educacional Assistida por IA
- [[educational-measurement]]
- [[educational-nlp]]
- [[ai-ed-evaluation]]
- [[equity-in-ai-education]]
- [[trust]]
- [[agency]]
- [[cognitive-offloading]]
- [[self-report-measures]]

## Artigos conectados
- [[chain-behind-claim-warrantability-2026]] — padrão de garantibilidade para a análise qualitativa assistida por IA
- [[liu-tool-tutor-crutch-programming-2026]] — Ferramenta, Tutor ou Muleta: uma teoria fundamentada da programação assistida por IA
- [[trio-ethnography-llm-programming-education]] — Uma etnografia em trio da evolução da interpretação na programação apoiada por LLM
- [[absent-cognitive-baseline-2026]] — Teorizando uma lacuna estrutural na autoavaliação dos estudantes nativos da IA
- [[t2i-competence-paradox-2026]] — O paradoxo da competência no uso de GenAI texto-para-imagem
- [[fouad-bentley-trust-utility-gap-physics-2026]] — A lacuna entre confiança e utilidade na educação em física
- [[genai-teacher-feedback-comparison]] — Comparando o feedback de GenAI e o do professor: percepções dos estudantes
- [[hazra-safetutors-pedagogical-safety-2026]] — Segurança do tutor de IA e danos pedagógicos
- [[zha-ai-literacy-biology-case-study]] — Estudo de caso da integração do letramento em IA em uma aula de biologia
- [[becker-chatgpt-typology-physics-2026]] — Uma tipologia qualitativa da adoção do ChatGPT na física
- [[scaffolding-critical-engagement-genai-minority-students]] — Discurso colaborativo em prompt engineering entre estudantes de minorias étnicas
- [[human-vs-llm-ordered-coding]] — Comparando a codificação ordenada de dados qualitativos por humanos e por LLM
- [[agreement-not-quality-llm-coding-verification]] — A concordância não é qualidade na codificação qualitativa por LLM
- [[same-ai-different-pathways]] — Desvendando mecanismos da aprendizagem mediada por IA entre contextos
- [[drummond-genai-business-schools-framework-2026]] — Framework de GenAI informado pelos estudantes por meio de estudo de caso
- [[favero-critical-ai-tutors-empower-enslave-2025]] — Tutores críticos de IA: empoderar ou escravizar
- [[genai-runaway-object-math-higher-ed]] — A GenAI como objeto desgovernado na matemática do ensino superior
- [[khlaif-assistive-genai-visually-impaired-2026]] — GenAI assistiva para aprendentes com deficiência visual
