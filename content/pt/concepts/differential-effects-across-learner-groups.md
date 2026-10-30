---
title: "Efeitos diferenciais entre grupos de estudantes"
created: "2026-09-19T06:20:00-04:00"
updated: "2026-10-01T10:47:53-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-11T09:05:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Efeitos diferenciais entre grupos de estudantes** — o que a pesquisa sobre [[ai-education|IA na educação]] encontra sobre como o *uso* da IA e seus *efeitos* diferem entre tipos de estudantes: [[special-education|estudantes com deficiência]] e estudantes [[neurodiversity|neurodivergentes]], estudantes de segunda língua e [[multilingual-learning|multilíngues]], meninas e meninos, estudantes minoritizados, estudantes de famílias de baixa renda, estudantes rurais, estudantes de primeira geração, estudantes internacionais e estudantes [[adult-learning|adultos]]. O padrão que vale levar embora é desigual em duas direções ao mesmo tempo: algumas vertentes têm evidência real (deficiência, língua), enquanto outras estão praticamente vazias (primeira geração, internacional, refugiado), e mesmo as vertentes fortes raramente estabelecem que um *grupo* difere — estabelecem que uma ferramenta ajudou ou prejudicou uma amostra daquele grupo, o que é uma afirmação diferente. Esta página mapeia o que existe, o que mostra e as razões metodológicas pelas quais uma média de grupo não é uma previsão sobre um estudante.

## Questões para considerar

- Sua ferramenta funciona sobretudo para os estudantes da sua turma, e um subgrupo de cinco teve dificuldade. Uma diferença de subgrupo desse tamanho seria detectável de alguma forma em um estudo deste tipo — e você iria querer mudar a ferramenta para a turma toda com base nessa evidência?
- A pesquisa sobre estudantes com deficiência relata efeitos que variam por categoria de deficiência. Se duas categorias ficam em tamanhos de efeito muito diferentes na mesma [[meta-analysis-systematic-review|metanálise]], o que isso diz sobre tratar "deficiência" como um único grupo em uma decisão de desenho?
- Vários estudos encontram ferramentas de IA que *não* diferem por gênero em seus efeitos, e outros trabalhos mostram que o [[ai-feedback-quality|feedback de IA]] e a escrita assistida por IA *reproduzem* estereótipos de gênero quando as personas ou os prompts os carregam. Como ambas as coisas podem ser verdadeiras ao mesmo tempo?
- A maior parte do trabalho sobre justiça testa personas de estudantes simuladas em vez de estudantes reais, porque atributos demográficos reais não estão disponíveis para o modelo no momento da inferência na maioria das implantações. O que uma auditoria de personas contrafactuais pode estabelecer, e o que ela não pode?
- Revisando as vertentes desta página, quais grupos de estudantes estão de fato representados nos estudos por trás da validação da sua ferramenta — e o que você faria com um grupo ausente?
- Uma intervenção que eleva os resultados de todos, mas fecha uma lacuna (ajudando mais os estudantes que estavam atrás), tem uma história de equidade diferente de outra que eleva a média. Quando você avalia um piloto, está medindo a lacuna ou a média?

## Introdução

Duas perguntas se escondem dentro de "a IA funciona para *este* tipo de estudante?". A primeira é sobre efeitos: se uma ferramenta produz resultados diferentes para grupos diferentes. A segunda é sobre uso: se grupos diferentes adotam, acessam ou interagem com a mesma ferramenta de formas diferentes, o que pode moldar resultados sem nenhum efeito diferencial propriamente dito. Esta página cobre ambos, grupo a grupo, e declara com franqueza onde a literatura para.

Ela deliberadamente não duplica suas vizinhas. [[equity-in-ai-education|Equidade na educação em IA]] carrega o enquadre normativo e estrutural — acesso, representação e equidade de resultados, e o argumento sobre o que a IA em educação *deveria* fazer. [[inclusive-learning|Aprendizagem inclusiva]] carrega o enquadre de desenho, incluindo o [[universal-design-for-learning|Desenho Universal para a Aprendizagem]]. [[digital-divide|Divisão digital]] cobre as camadas de acesso e competências. [[neurodiversity|Neurodiversidade]], [[special-education|Educação especial]], [[accessibility|Acessibilidade]] e [[multilingual-learning|Aprendizagem multilíngue]] aprofundam grupos individuais. O que resta para esta página é o mapa de evidência entre grupos e a questão de avaliação crítica: como esses efeitos são estimados, quais grupos são estudados de alguma forma, e o que um achado em nível de grupo autoriza você a fazer.

## Como as diferenças de grupo são relatadas, e por que a maior parte disso não pode

**Um estudo de grupo único não é um estudo de efeito diferencial.** A maior parte da literatura nesta área mede um grupo na ausência de um grupo de comparação. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] agruparam 29 estudos (quase-)experimentais de IA para estudantes com deficiência e encontraram um efeito positivo médio (g de Hedges = 0,588, IC 95% [0,349, 0,826]) — sem nenhum comparador neurotípico. Isso lhe diz que uma intervenção ajudou, não que ela ajudou este grupo de forma diferente.

**Análises de subgrupo costumam ser pequenas demais para responder à pergunta.** O [[ai-tutoring-micro-rct-gcse-science-2026|micro-RCT de ciências do GCSE]] é excepcionalmente explícito: sua interação tratamento-por-status foi de 0,57 pontos (IC 95% −2,25 a 3,39), com estimativas estratificadas de g = 0,28 (IC 95% −0,04 a 0,59) para um grupo e g = 0,35 (IC 95% 0,18 a 0,52) para o outro. Um intervalo de subgrupo que se sobrepõe ao zero é uma questão para um piloto local, não uma base para uma regra de turma inteira.

**Atributos demográficos costumam ser simulados.** Raramente dados demográficos reais dos estudantes são anexados às entradas do modelo, então as auditorias fornecem personas em seu lugar. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto e Hovy (2026)]] executaram seis modelos ajustados por instrução em três tarefas educacionais sob condições de padrão do modelo, persona explícita e histórico implícito — 192.480 chamadas de inferência — e concluíram que tanto as personas explícitas quanto os históricos de conversa *implícitos* movem o comportamento do modelo. Sua distinção vale a pena guardar: a consciência das diferenças entre quem aprende pode ser desejável (ajustar o feedback para a primeira língua de alguém), enquanto a mesma sensibilidade é um dano quando desloca o julgamento de trabalhos idênticos.

**Correções de justiça podem não generalizar.** [[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]] reduziram lacunas de erro por gênero e idade na estimação de atenção de estudantes em dados de [[assessment-validity|validação]], mas os ganhos não se transferiram de forma consistente para sujeitos retidos nem para divisões repetidas no nível do sujeito.

**Rótulos de grupo escondem a variação interna.** Na mesma metanálise sobre deficiência, estudantes com dificuldades específicas de aprendizagem, com deficiência intelectual e do desenvolvimento, ou surdos, mostraram efeito maior (g = 0,952) do que estudantes com transtorno do espectro autista (g = 0,368) — diferença que os autores relatam como não estatisticamente significativa ao longo de 239 tamanhos de efeito de 41 amostras independentes. "Deficiência" não é um grupo só, e "estudante de L2" também não.

## Deficiência e neurodivergência

Esta é a vertente mais profunda da base de conhecimento, e aquela em que o relato é mais forte.

- **Os efeitos são reais, mas distribuídos de forma desigual por resultado.** Em [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]], o [[learning-gains|desempenho acadêmico]] mostrou o maior efeito (k = 80, g = 0,929), à frente das competências da vida diária e outras (g = 0,766) e das competências socioemocionais (k = 144, g = 0,382). Havia viés de publicação (teste de Egger β = 2,837, p < ,001); o trim-and-fill reduziu a estimativa agrupada para g = 0,2694, que permaneceu estatisticamente significativa. Leia o efeito de destaque e o ajustado por viés juntos.
- **O campo se reorganizou em torno da [[generative-ai|IA generativa]].** A [[assistive-tech-neurodivergent-higher-ed-review-2026|revisão de escopo de tecnologias digitais assistivas para estudantes neurodivergentes]] triou 766 registros para incluir 40 estudos empíricos, dos quais 15 usavam IA generativa e 11 usavam formatos imersivos. A vertente é pequena e recente, e não madura.
- **Alguns apoios de IA igualam em vez de diferenciar.** [[adhd-video-segmentation-computing-education|Pimenova, Begel e colegas]] segmentaram [[video-education|vídeos instrucionais]] em blocos de instrução única com pausas fixas em um estudo intra-participantes (17 TDAH, 10 não-TDAH); todos melhoraram, e os erros e hesitações dos participantes com TDAH caíram à paridade com seus pares não-TDAH. Essa é a forma mais forte de evidência disponível para o [[universal-design-for-learning|Desenho Universal para a Aprendizagem]] por meio de transformação automatizada de conteúdo: uma mudança geral que fecha uma lacuna, em vez de uma correção dirigida a um grupo.
- **O que estudantes neurodivergentes dizem precisar costuma ser mundano.** [[neurodivergent-computing-students|Um levantamento com 24 estudantes de computação neurodivergentes e 20 pares neurotípicos]], com quatro entrevistas, encontrou desconforto significativo com tarefas sem estrutura clara ou com expectativas ambíguas — uma acomodação que não custa nada fornecer.
- **Escolhas de desenho também podem excluir epistemicamente.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] argumenta que dados de treinamento anglófonos e ocidentalocêntricos marginalizam modos de conhecer não hegemônicos e colocam a situação de estudantes com deficiência no centro dessa crítica.

## Língua: segunda língua, multilíngues e estudantes de inglês

Por contagem de artigos, esta é a maior vertente, e ela se divide claramente entre efeitos e danos das ferramentas.

- **Os efeitos das ferramentas são promissores e ruidosos.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang e Zou (2026)]] metanalisaram 11 estudos (17 tamanhos de efeito, N = 595) de [[language-learning|aprendizagem de línguas]] assistida por robôs e encontraram um efeito geral positivo (g = 0,83, IC 95% [0,46, 1,21]) com alta heterogeneidade (I² = 84,4%); dos seis moderadores testados, apenas o tipo de interação robô–estudante foi significativo. Uma base de evidência deste tamanho sustenta um [[benchmark]] provisório, não uma decisão de compra.
- **A própria infraestrutura é desigual antes de qualquer ferramenta ser usada.** [[structural-silence-underrepresented-language-ai-2026|Roy e Roy (2026)]] documentam a lacuna de corpus com o bengali como caso: menos de 0,5% do conteúdo web global contra cerca de 49,5% para o inglês, embora falantes de bengali sejam quase 4% da população mundial.
- **A língua de instrução muda os resultados ao longo de 294 estudantes do ensino superior.** A mesma revisão relata que conteúdo em língua estrangeira gerou resultados inferiores ao da instrução na língua nativa, e que a instrução bilíngue de [[cs-education|programação]] superou a instrução apenas em inglês.
- **Detectores penalizam quem escreve em segunda língua.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge e Mesbah (2026)]] testaram Turnitin e Originality contra 192 textos: um detector classificou corretamente 48 de 48 textos escritos por profissionais, mas classificou errado quatro de 48 textos de estudantes de EFL (91,6%). A assimetria é o ponto — o erro recai sobre o grupo cuja escrita já está sob escrutínio.

## Gênero

A pesquisa sobre gênero aqui se divide entre se as ferramentas tratam quem aprende de forma diferente e se quem aprende é exposto a ferramentas carregadas de estereótipo.

- **Um desenho deliberadamente neutro em gênero não mostrou diferença por gênero.** [[ada-female-coded-chatbot-gender-stereotypes-2026|Um estudo quase-experimental com 195 estudantes do nono ano]] testou a ADA, uma [[conversational-ai|chatbot]] codificada como feminina fundamentada em Ada Lovelace: o interesse situacional subiu para ambos os gêneros, sem diferença por gênero na resposta emocional, na carga cognitiva ou no desempenho acadêmico. Uma persona de modelo de referência pode ser construída sem disparar ameaça de estereótipo.
- **Mas o conteúdo dos prompts transfere viés para o trabalho dos estudantes.** [[gender-bias-transfer-llm-writing|Um estudo controlado com 123 participantes]] fez estudantes escreverem ensaios de planejamento de carreira para perfis pareados que diferiam apenas no gênero, sob condições sem IA, IA neutra e IA com viés de gênero; a condição enviesada transferiu linguagem diferenciada por gênero para a escrita dos estudantes e suprimiu a [[agency|agência]] feminina de forma assimétrica. Os pesquisadores confirmaram primeiro o efeito em 1.600 ensaios gerados.
- **Espaço e enquadramento importam tanto quanto a ferramenta.** [[all-girls-genai-makerspace-gender-equity-2026|Um estudo de caso de makerspace de IA generativa só para meninas]] concluiu que as meninas valorizaram o ambiente de gênero único como mais seguro e relaxado, e alerta contra a "meninização" — adaptação superficial que deixa as relações de poder intocadas.
- **A sensibilidade do modelo é uma propriedade do modelo, não uma constante.** No [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]], cinco tutores de 7B a 70B foram auditados ao longo de nove níveis demográficos: o Qwen2.5-7B excedeu o limiar de viés |r| ≥ 0,10 em 7 de 12 células domínio-por-dimensão, enquanto o LLaMA-3.1-8B o excedeu uma vez. O treinamento específico de pedagogia reduziu alguns vieses e aumentou outros.
- **Uma correção de eixo único pode deixar um grupo em situação pior:** estudantes de gênero diverso comprimidos em uma categoria "Gênero Desconhecido" tiveram as menores taxas de verdadeiro positivo sob todo método de justiça, e nenhum método de eixo único melhorou seu tratamento — a variação de rótulo de grupo notada acima, dentro de um modelo preditivo de alerta precoce em vez de um tutor ([[fairness-theatre-early-warning-systems-2026|McConvey et al. (2026)]]).

## Raça, etnia e estudantes minoritizados

Esta vertente é pequena em contagem de artigos e forte em mecanismo, porque a evidência é sobre o que a IA faz *com* um atributo demográfico depois de o ter.

- **A [[personalized-learning|personalização]] é um vetor de viés.** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] mostra ferramentas de [[llm|LLM]] de feedback de escrita pendendo para elogios alinhados a estereótipos e crítica retida quando o feedback é personalizado com a raça, a língua, a deficiência, o desempenho ou a [[motivation|motivação]] do estudante — sobre ensaios idênticos.
- **A pista demográfica pode ser implícita.** A auditoria contrafactual acima concluiu que históricos de conversa, e não apenas personas explícitas, moveram o comportamento de pontuação e de feedback — o mesmo resultado das [[demographic-signals-llm-student-assessment-2026|192.480 chamadas de inferência]], e uma razão pela qual uma regra de divulgação sobre dados demográficos *declarados* é insuficiente.
- **Lacunas de migração e língua podem dominar.** No EduFair-Bench, o modelo de 70B combinou as maiores lacunas de língua e imigração com as menores lacunas de pedagogia, de modo que um tutor que parece pedagogicamente forte pode ser o mais sensível a quem o estudante aparenta ser.
- **Exclusão epistêmica, e não apenas erro:** ver [[genai-minoritized-knowledges-disability|a marginalização de saberes minoritários]] acima.

## Status socioeconômico, geografia e idade

- **Letramento digital, e não uso de IA, é o mediador.** [[ai-divide-ses-personality-primary-education-2026|Wang e colegas (2026)]] modelaram dados de levantamento e de registro nacional de 4.497 estudantes do sexto ano na Holanda e concluíram que a ligação entre traços de personalidade e desempenho acadêmico passava pelo letramento digital, e não pela intensidade de uso de IA, com diferenças de letramento digital impulsionadas mais pela personalidade do que pelo status socioeconômico — e vantagens de NSE operando independentemente do engajamento com IA. O enquadre clássico apenas por NSE é incompleto.
- **A geografia pode ser a restrição determinante.** [[arc-hubs-k12-ai-robotics-rural-2026|O relato da ARC]] sobre educação em robótica e IA no [[k-12|K-12]] informa que a participação rural na FIRST LEGO League caiu na temporada remota de 2020 e nunca se recuperou, enquanto a participação urbana gradualmente se recuperou, e identifica a mentoria técnica local sustentada — não os kits nem o [[curriculum-design|currículo]] — como a restrição distribuída geograficamente.
- **Estudantes adultos são um caso de desenho à parte,** cobertos por [[adult-learning|Aprendizagem de Adultos]] e pelo trabalho de andragogia da base de conhecimento, e não por estudos de K-12.
- **O acesso ainda condiciona todo o resto:** ver [[digital-divide|Divisão digital]] e o achado de que [[access-not-enough-ai-tutoring-2026|o acesso à tutoria por IA não basta]] sem integração [[pedagogy|pedagógica]].

## Formação disciplinar

A formação disciplinar é um eixo diferencial que o mapa grupo a grupo desta página ainda não carregava: a mesma ferramenta pode distribuir seu benefício de forma desigual entre os campos do saber, e um corpus que agrega STEM e humanidades pode esconder exatamente essa desigualdade.

- **Uma ferramenta pode engajar uma disciplina e desengajar outra.** Em um quase-experimento de duas semanas com 130 graduandos em equipes de disciplinas mistas, o [[generative-ai|ChatGPT]] elevou o [[student-engagement|engajamento]] dos estudantes de STEM e o reduziu para os estudantes de outras áreas (Q = 9,87, p < .05), e as anotações escritas sem ChatGPT pontuaram mais alto em diversidade e integração de ideias disciplinares ([[caeai-chatgpt-interdisciplinary-stem-nonstem-2026|Zhu et al. (2026)]]).

## Onde falta evidência

O achado honesto deste levantamento é quão finos são alguns grupos. Cada um destes é uma lacuna real na base de evidência, não uma lacuna desta página.

- **Estudantes de primeira geração:** um estudo relata uma diferença de uso, e não de efeito. Em [[student-ai-inquiry-types-cs2-2026|um estudo de investigação em CS2]], estudantes de gerações continuadas trataram a IA como parceira ativa de [[problem-solving|resolução de problemas]], enquanto estudantes de primeira geração assumiram um papel confirmatório, orientado à validação, e fizeram menos perguntas no geral.
- **Estudantes de primeira geração: a primeira estimativa de efeito, e ela aponta para o lado errado.** O [[rct|ensaio randomizado]] de [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] de um [[intelligent-tutoring|tutor de IA]] integrado à disciplina fornece o que falta à entrada acima — um diferencial medido em vez de um padrão de uso. Na amostra completa, o efeito do acesso ao tutor sobre as notas finais foi 2,87 pontos (0,28 DPs) mais negativo para estudantes de primeira geração, implicando −5,10 pontos (−0,50 DPs) para eles contra −2,23 pontos (−0,22 DPs) para seus pares; o diferencial foi maior na amostra de emparelhamento exato (−3,89 pontos, −0,35 DPs), e estudantes de primeira geração também perderam mais pontos de lição de casa e visualizações de página na plataforma. O estudo não relata mecanismo e sua precisão varia por resultado, mas a direção é oposta à história de redução da lacuna: os estudantes com menos acesso prévio a apoio acadêmico carregaram o maior custo medido.
- **Estudantes internacionais:** um estudo [[mixed-methods-research|de métodos mistos]] (levantamento n = 60, entrevistas n = 14) sobre [[international-students-conversational-ai-adaptation|apoio à adaptação intercultural]].
- **Estudantes internacionais: um padrão de engajamento medido, não uma estimativa de efeito.** Ao longo de 270 estudantes internacionais de minorias étnicas em sete [[business-education|escolas de negócios]] do Reino Unido, o uso relatado de [[generative-ai]] associou-se positivamente às quatro vertes de [[student-engagement|engajamento]] — mais fortemente ao engajamento agêntico (β = 0,429) —, com as condições facilitadoras (β = 0,369) como o preditor mais forte da intenção de uso ([[bjet-genai-engagement-minority-ethnic-students-2026|Adekoya et al. (2026)]]).
- **Estudantes superdotados e de alto desempenho:** efetivamente não estudados como grupo neste corpus.
- **Estudantes refugiados, imigrantes e deslocados:** nenhum estudo.
- **Gênero ainda é analisado como binário** na maior parte do trabalho acima, e as categorias de deficiência variam entre estudos, de modo que a comparação entre estudos do "mesmo" grupo tem limites.

## Usando esta evidência sem sobrequadrar um rótulo de grupo

- **Trate médias de grupo como hipóteses sobre uma população, nunca como previsões sobre uma pessoa.** Toda afirmação diferencial acima é uma afirmação distribucional.
- **Pergunte se seus estudantes estavam na amostra de validação de alguma forma** antes de confiar na inclusividade alegada de uma ferramenta; as vertentes de neurodivergência e de língua mostram ambas que a representação no desenvolvimento é a exceção.
- **Prefira desenhos que igualam onde a evidência permite.** O resultado de segmentação de vídeo para TDAH — todos melhoram, a lacuna fecha — é uma meta mais adequada para uma turma geral do que um complemento dirigido a um grupo.
- **Tenha cuidado com a personalização que consome atributos demográficos.** O achado das [[marked-pedagogies-linguistic-bias-writing-feedback|pedagogias marcadas]] é diretamente sobre esse mecanismo, e se aplica a check-ins de [[well-being|bem-estar]], [[affective-computing|tutores afetivos]] e [[recommender-systems-and-learning-paths|sistemas de recomendação]] que fazem perfil de quem aprende.
- **Teste localmente, sobre o grupo de que você cuida, com um resultado medido sem a ferramenta.** Ver [[interpreting-and-applying-aied-research|Interpretar e aplicar a pesquisa em AIEd]] para os hábitos de avaliação crítica e [[research-methods-aied|Métodos de pesquisa em IA em educação]] para os desenhos que tornam um teste local defensável.

## Conceitos conectados

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## Artigos conectados

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 estudos de IA para estudantes com deficiência: g = 0,588, e g = 0,269 após ajuste de viés
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 766 registros reduzidos a 40 estudos, 15 deles de IA generativa
- [[adhd-video-segmentation-computing-education]] — Uma mudança geral de desenho que trouxe participantes com TDAH à paridade
- [[neurodivergent-computing-students]] — 24 estudantes neurodivergentes sobre estrutura, ambiguidade e colaboração
- [[genai-minoritized-knowledges-disability]] — Marginalização epistêmica na IA, com a deficiência como caso
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0,83 com I² = 84,4% em uma pequena base de evidência de L2
- [[structural-silence-underrepresented-language-ai-2026]] — Os menos de 0,5% de conteúdo web do bengali contra os 49,5% do inglês
- [[hadra-ai-detector-accuracy-efl-2026]] — Detectores classificam errado escrita de EFL ao pontuar textos profissionais com perfeição
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — Um teste com 195 estudantes de modelos de referência codificados como femininos, sem diferença por gênero
- [[gender-bias-transfer-llm-writing]] — Prompts com viés de gênero transferidos para ensaios de estudantes
- [[all-girls-genai-makerspace-gender-equity-2026]] — Espaço de gênero único valorizado, com alerta contra a meninização
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — Justiça dos tutores variando por modelo, domínio e dimensão de comportamento
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Feedback alinhado a estereótipos sobre ensaios idênticos
- [[demographic-signals-llm-student-assessment-2026]] — 192.480 chamadas: personas explícitas e históricos implícitos movem ambos os modelos
- [[student-attention-estimation-fairness-2026]] — Regularização de justiça que não generalizou
- [[ai-divide-ses-personality-primary-education-2026]] — 4.497 estudantes: letramento digital, e não uso de IA, medeia a lacuna
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Participação rural que nunca se recuperou, e a mentoria como restrição
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Uma interação de subgrupo cujo intervalo de confiança cruza o zero
- [[student-ai-inquiry-types-cs2-2026]] — O único achado de uso sobre primeira geração do corpus
- [[international-students-conversational-ai-adaptation]] — O único estudo do corpus sobre estudantes internacionais
- [[liu-course-integrated-ai-tutoring-rct-2026]] — A primeira estimativa de efeito do corpus para estudantes de primeira geração: o acesso ao tutor lhes custou 0,50 DPs de nota final contra 0,22 para seus pares (Liu et al. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: avaliando intervenções de justiça pós-hoc em sistemas de alerta precoce controlados por fornecedor
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — O ChatGPT beneficiou estudantes de STEM e de outras áreas de forma desigual na aprendizagem interdisciplinar
- [[bjet-genai-engagement-minority-ethnic-students-2026]] — Uso de GenAI e engajamento de quatro vertentes entre estudantes internacionais de minorias étnicas
