---
title: "Quais são as lacunas notáveis na literatura de pesquisa sobre IA na Educação?"
created: "2026-08-24T14:10:00-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [reporting-interpreting-aied-research, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research]
weight: 45
type: faq
foundations: [limitations-in-aied-research]
technology: [learning-analytics]
assessment: [learning-gains]
ethics: [equity-in-ai-education, differential-effects-across-learner-groups]
research_method: [literature review]
level: [higher ed]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: faqs/research-gaps-aied
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

Um prazo de financiamento está a oito dias e a seção de contexto precisa de uma frase sobre o que este campo ainda não sabe. Ou um colega disse a um comitê que a tutoria por IA eleva o desempenho, citando um experimento de dois anos em 18 escolas de ensino fundamental II, e você é a pessoa que tem de dizer o que esse estudo sustenta. Ou você está escolhendo uma pergunta de tese e todas as versões dela parecem já ter sido feitas.

As lacunas que importam são sobre força, especificidade e aplicabilidade. A IA consegue realizar tarefas educacionais; as perguntas abertas são se um desenho particular produz benefício durável, para quem, por qual mecanismo e sob quais condições. Essa distinção decide duas coisas na sua mesa: o que estudar em seguida e o que parar de afirmar enquanto isso. [[limitations-in-aied-research|Limitações na pesquisa em IA na educação]] é o catálogo por trás desta página. Evidência sobre [[intelligent-tutoring|sistemas de tutoria inteligente]], [[learning-analytics|análises]] preditivas, [[generative-ai|IA generativa]] e agentes autônomos também não é intercambiável, e a pesquisa sobre usar IA para apoiar a aprendizagem difere da pesquisa sobre ensinar às pessoas o que é IA, como explica a visão geral de [[ai-education|IA na Educação]].

## A versão curta

**1.** Compare a IA com uma alternativa sem IA forte que mantenha currículo, prática e apoio constantes, e diga o que a IA acrescentou.

**2.** Meça desempenho adiado e sem auxílio, e declare que desempenho assistido não é ganho de aprendizagem.

**3.** Relate qual componente do pacote fez o trabalho e qual mecanismo você alega.

**4.** Valide toda pontuação automatizada e todo aprendiz simulado contra aprendizes reais, incluindo aprendizes fora da sua amostra de desenvolvimento.

**5.** Declare a fronteira populacional, porque uma média agrupada não responde a uma questão de equidade.

**6.** Descreva o arranjo bem o suficiente para que outra pessoa possa reconstruí-lo.

## Escolha uma comparação que isole a IA

Existem experimentos rigorosos em sala de aula, então "precisamos de ensaios randomizados" já não nomeia a lacuna. A pergunta mais afiada é se o componente de IA acrescenta valor além de prática adicional, materiais melhores, feedback tempestivo ou mais apoio instrucional.

[[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]] relata ganhos modestos de desempenho em 18 escolas de ensino fundamental II ao lado de engajamento substantivo limitado com o tutor, e os autores observam que os ganhos se pareciam com os de prática estruturada sem IA. Isso é evidência sobre um pacote implementado, e não pode isolar o que a IA dentro dele acrescentou.

O problema por baixo é conceitual tanto quanto empírico. "ChatGPT" nomeia uma ferramenta, não um método. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] auditaram 19 comparações de ChatGPT na educação: apenas 4 (21%) especificavam as três coisas — um tratamento replicável, um controle operacionalizado e uma medida de aprendizagem válida (74% com tratamento bem definido, 42% com controle bem definido, 53% com um desfecho de aprendizagem). Quando a nova IA chega junto com novas atividades, feedback ou desenho de interface, meio e método ficam confundidos e nenhum efeito pertence à IA.

O que resolveria: comparações com alternativas realistas sem IA, mantendo currículo, oportunidades de prática e apoio o mais constante possível, mais replicações independentes entre instituição, professor, disciplina e modelo. Métodos respondem a perguntas diferentes aqui. Trabalho [[qualitative-research|qualitativo]] e de [[design-based-research|design-based]] explica a implementação, enquanto experimentos bem desenhados carregam as afirmações causais, como [[research-methods-aied|Métodos de pesquisa de eficácia]] expõe.

## Meça a aprendizagem depois que a ferramenta some

Trabalho melhorado durante o uso da IA não é evidência de aprendizagem que sobrevive ao fim da assistência. As sínteses de [[learning-gains|Ganhos de aprendizagem]] e [[cognitive-offloading|Descarregamento cognitivo]] traçam sempre a mesma linha entre desempenho assistido, conhecimento retido, raciocínio independente e transferência.

[[making-ai-tutoring-productive-mastery-math-2026|Tornar a tutoria por IA produtiva]] mostra o problema de mensuração em um experimento randomizado com mais de 6.000 estudantes do ensino fundamental II. Uma regra de domínio de três acertos seguidos elevou o sucesso definido pela plataforma sem, por si só, produzir ganhos de aprendizagem detectáveis uma semana depois. A evidência mais forte de teste adiado apareceu quando a IA ficou dentro do fluxo de domínio e se concentrou em material praticado.

A lacuna restante é sobre trajetórias de capacidade, e um pós-teste acrescentado não a fecha. Ninguém estabeleceu retenção ao longo de meses, transferência entre tarefas, desempenho após a retirada ou a precisão dos aprendizes em julgar o que sabem, e o campo não separou a falha em adquirir uma habilidade da deterioração de uma já estabelecida. A pesquisa sobre descarregamento ainda precisa mostrar quando a delegação apoia essas trajetórias e quando ela desloca a prática que as constrói.

## Descubra qual parte do pacote fez o trabalho

"Aprendizagem apoiada por IA" geralmente agrupa várias mudanças: novo feedback, reflexão acrescentada, discussão entre pares, sequências de tarefas diferentes, incentivos de avaliação alterados. Um pacote que tem sucesso não diz quais componentes eram necessários.

[[genai-feedback-design-multisite-experiment|Desenho de feedback por GenAI centrado no humano]] é um avanço real nessa pergunta. Entre 1.176 calouros, desenhos reflexivos e híbridos superaram o [[ai-feedback-quality|feedback de IA]] direto na transferência adiada sem IA. A condição híbrida combinava autoavaliação, [[peer-assessment|feedback dos pares]] e crítica da IA. Isso separa como o feedback é organizado e usado de se os estudantes têm acesso a feedback.

Continua aberto: a contribuição e o momento das tentativas independentes iniciais, da autoexplicação, da contribuição dos pares, do feedback corretivo, das dicas e do esmaecimento da assistência, e como cada um interage com o [[prior-knowledge|conhecimento prévio]] e a dificuldade da tarefa.

A lacuna teórica corre ao lado. Nomear uma [[learning-theories|teoria de aprendizagem]] não é testá-la. Um estudo precisa de uma previsão teórica ligada a um comportamento específico do sistema e de um processo de aprendizagem mensurável, e a mediação estatística informa essa explicação sem estabelecer um mecanismo causal. [[theory-development-aied|Desenvolvimento de teoria em IA na educação]] e [[scaffolding]] levam o argumento adiante.

## Valide a medida antes de interpretá-la

Construtos como engajamento, [[critical-thinking|pensamento crítico]], letramento em IA e [[personalized-learning|personalização]] são medidos de forma inconsistente nesta literatura. Autorrelatos descrevem percepções; não podem substituir competência demonstrada. Precisão técnica, qualidade da saída avaliada por especialistas e aprendizagem do estudante são três alvos de avaliação diferentes. [[educational-measurement|Mensuração educacional]] e [[ai-ed-evaluation|Avaliação de IA em educação]] tratam essas distinções como fundacionais.

Uma lacuna fica dentro do problema de mensuração: [[ai-technologies|sistemas de IA]] usados para avaliar outros sistemas de IA. Em [[llm-student-simulation-misconception-faithfulness|Simular estudantes ou resolução bajuladora de problemas?]], [[simulating-students|estudantes simulados]] abandonavam com frequência as [[misconceptions|concepções errôneas]] atribuídas depois do feedback corretivo, independentemente de o feedback ter abordado a concepção errônea, então suas respostas podiam fazer uma instrução ineficaz parecer bem-sucedida. Treinamento direcionado melhorou a medida de fidelidade do estudo, e melhora nessa medida não é validação contra a aprendizagem humana.

O que falta é a validação de toda a cadeia de avaliação, do comportamento do modelo ao julgamento [[pedagogy|pedagógico]], à resposta do aprendiz e ao resultado educacional, em aprendizes e contextos não usados durante o desenvolvimento. O julgamento humano precisa do mesmo escrutínio, já que concordância entre avaliadores não é evidência de que o construto certo foi avaliado.

## Decida o que uma avaliação ainda consegue certificar

A IA cria dois problemas de avaliação conectados: ela ajuda a produzir o trabalho que está sendo avaliado, e ela pode influenciar como esse trabalho é pontuado.

O [[ai-agents-complete-lms-assessment-validity-2026|estudo da base de conhecimento sobre agentes de IA completando tarefas avaliadas em um LMS]] documenta agentes navegando por um curso de graduação ao vivo e concluindo atividades avaliadas. Isso demonstra uma capacidade que desafia suposições sobre evidência produzida por estudantes. Não estabelece quão comum esse uso é, e não invalida a avaliação assíncrona como categoria.

A pergunta de pesquisa é quais desenhos ainda sustentam conclusões defensáveis sobre o aprendiz. [[eportfolio|Portfólios]], reflexões, entregas escalonadas e registros de atividade precisam de validação como evidência, em vez de serem presumidos como estabelecedores de autoria ou compreensão. Estudos deveriam testar combinações de evidência contra competência observada de forma independente, ao mesmo tempo que consideram acessibilidade, carga de trabalho, privacidade e ansiedade dos estudantes. [[assessment-validity|Validade da avaliação]] guarda o detalhe.

Para a [[automated-assessment|correção automatizada]], [[llms-do-not-grade-essays-like-humans-2026|LLMs não corrigem redações como humanos]] relata discordância sistemática entre modelos prontos de fábrica e avaliadores humanos. Os achados são específicos da configuração, e mostram por que consistência interna não pode sustentar uma alegação de validade.

[[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] propõe avaliar separadamente o que os aprendizes precisam fazer de forma independente, o que podem realizar com IA e o que precisam verificar e defender. É um quadro à espera de validação empírica.

A detecção é o beco sem saída mais claro nesta área. [[karr-ai-detection-humanization-2026|Karr et al. (2026)]] rodaram dois detectores comerciais em τ = 0,50 sobre 642 resumos publicados em inglês. Edição leve por IA em conformidade com as diretrizes foi sinalizada em 38 a 80%. Originais de 2023-25 não modificados foram sinalizados em 9 a 15%, com trabalho fora de [[stem-education|STEM]] muito acima de STEM em p < 0,001. Depois da humanização, as ferramentas pegaram menos de 4% das reescritas rotuladas como IA, uma taxa de falso negativo acima de 96%. Uma pontuação que pune assistência honesta e não pega evasão não pode fundamentar uma conclusão sobre um aprendiz.

## Pare de ler pontuações de letramento como evidência de comportamento

A pesquisa sobre intervenções de letramento em IA é substancial o suficiente para ser sintetizada. [[liu-ai-literacy-interventions-meta-analysis-2026|Intervenções de letramento em IA na educação]] cobre 59 estudos e 7.211 participantes, relata um efeito médio positivo e também relata variação substancial com um intervalo de predição amplo que cruza zero. Desfechos focados em conhecimento saíram mais fortes que habilidades, atitudes ou ética.

A lacuna mais afiada é se a instrução em letramento muda o que as pessoas fazem quando usam IA, e outro quadro de competências não a fecharia. Os aprendizes conseguem reconhecer afirmações sem sustentação, verificar fontes, rejeitar sugestões enganosas, notar concordância inapropriada e escolher quando não delegar? Algo disso se mantém sob pressão de tempo, e se transfere para sistemas e disciplinas não familiares?

Resolver isso exige avaliação baseada em desempenho combinada com observação de decisões reais e acompanhamento adiado, mantendo separados conhecimento conceitual, proficiência operacional e julgamento crítico, em vez de agrupá-los. [[ai-literacy|Letramento em IA]] e [[trust-calibration|Calibração da confiança]] fornecem as distinções.

## Relate quem o achado deixa de fora

Achados de um curso, instituição, idioma ou população de aprendizes raramente autorizam decisões em outro lugar, problema que a síntese [[limitations-in-aied-research|Limitações na pesquisa em IA na educação]] trata como recorrente. Como os efeitos variam por estágio de desenvolvimento, disciplina, conhecimento prévio, deficiência, idioma e condições de recursos continua em grande parte não medido.

A pesquisa sobre equidade também tem de separar acesso, habilidades e resultados. A síntese sobre a [[digital-divide|exclusão digital]] é clara que dispositivos e acesso a ferramentas não estabelecem capacidade igual de se beneficiar. [[school-ai-education-readiness-gaps-agency-2026|A educação em IA baseada na escola reduz lacunas de prontidão?]] acompanhou 752 estudantes do ensino fundamental II de Hong Kong: as lacunas de prontidão psicológica se estreitaram enquanto as diferenças em um teste objetivo de letramento em IA persistiram. Todos os grupos melhoraram, e a desigualdade não se fechou. Os perfis de aprendizagem prévia não foram atribuídos aleatoriamente, então seu papel causal permanece desconhecido.

A cobertura é fina em lugares específicos. [[differential-effects-across-learner-groups|Efeitos diferenciais entre grupos de aprendizes]] conta a literatura por população: aprendizes de segunda língua e multilíngues e estudantes com deficiência são as vertentes mais profundas, gênero e neurodiversidade vêm em seguida, estudantes de primeira geração e internacionais têm um estudo cada neste corpus, estudantes superdotados e de alto desempenho são efetivamente não estudados, e aprendizes refugiados, imigrantes e deslocados não aparecem em nenhum. Uma base de evidência com esse formato não consegue responder a uma questão de equidade por agregação.

A capacidade também varia dentro de um único sistema nacional. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] pontuaram a integração de IA em 45 universidades nigerianas e encontraram adoção geral moderada (M = 4,79, faixa 1,83-7,83 em uma escala de 10 pontos), com o tipo de instituição falhando em prever a integração quando idade e geografia eram controladas (idade β = 0,43; localização no Sudoeste β = 0,31). Capacidades internas se intercorrelacionaram em r = 0,79-0,80 e colaborações internacionais com parcerias com a indústria em r = 0,74, então instituições conectadas acumulam vantagens compostas. Quais desenhos de construção de capacidade mudam resultados em instituições mais novas e menos conectadas não foi testado.

A prioridade de pesquisa é identificar desenhos que reduzem diferenças em capacidade demonstrada, participação e [[agency|autonomia]], com desfechos de subgrupo e ônus relatados ao lado dos ganhos médios. A acessibilidade carrega sua própria pergunta não resolvida: se um desenho remove uma barreira à participação ou substitui uma capacidade que o aprendiz deveria desenvolver. Veja [[equity-in-ai-education|Equidade na educação com IA]] e [[accessibility|acessibilidade]].

## Diga quem detém o controle, e quando ele muda

À medida que os sistemas planejam, iniciam ações, retêm memória e coordenam ferramentas, a pergunta educacional passa a ser quem deve controlar quais partes do processo de aprendizagem, e quando esse controle deve mudar.

[[agentic-ai-education-scoping-review|IA agêntica na educação: uma revisão de escopo]] mapeia 474 estudos e encontra validação longitudinal limitada, concentração no [[higher-ed|ensino superior]] e em STEM, e integração fraca com teoria educacional: apenas 29% dos estudos revisados se apoiaram explicitamente em teoria educacional, achado sobre esse corpus e não sobre todo o trabalho em IAED.

Perguntas abertas decorrem. A ajuda iniciada pelo aprendiz produz resultados diferentes da ajuda iniciada pelo agente? O apoio pode ser retirado à medida que a competência se desenvolve, sem perda? Os aprendizes mantêm a capacidade de contestar o sistema? As sínteses de [[agentic-ai|IA agêntica]] e [[human-ai-collaboration|Colaboração humano-IA]] acrescentam a intervenção e a responsabilização do [[teacher-role|professor]] em contextos multiagente, onde ninguém estabeleceu quem responde pela decisão de um agente. Mais autonomia é uma escolha de desenho pedagógico com uma base de evidência ainda por construir.

## Teste falhas de segurança contra aprendizes reais

A segurança educacional vai além da precisão factual e dos pedidos proibidos. Um tutor pode dar uma resposta correta enquanto remove a oportunidade de o aprendiz raciocinar, reforça uma concepção errônea ou constrói dependência. [[pedagogical-safety|Segurança pedagógica]] cobre o construto.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] identifica falhas incluindo divulgação excessiva de respostas e abandono do scaffolding, com substancialmente mais falhas em testes de múltiplos turnos. Esses são achados de [[benchmark|benchmark]] sob condições especificadas, não estimativas de com que frequência o dano ocorre em salas de aula.

O que acontece quando essas falhas encontram aprendizes reais em uso sustentado é desconhecido. Quais produzem confusão temporária, quais produzem concepções errôneas persistentes, quais reduzem a motivação e quais enfraquecem a capacidade independente não foi medido. Ninguém estabeleceu tampouco quais salvaguardas cortam esses riscos sem produzir recusa excessiva ou frustração. O trabalho de prazo mais longo também precisa tratar a confiança, a disposição de buscar ajuda humana, a [[agency|autonomia do aprendiz]] e as relações com colegas e professores como desfechos. Para crianças, isso exige estudos apropriados ao desenvolvimento que liguem o comportamento do sistema a desfechos educacionais e relacionais.

## Separe adoção de implementação

Capacidade técnica não estabelece que uma ferramenta é bem usada, e desenvolvimento profissional não chega automaticamente aos estudantes. O elo que falta geralmente vai da formação do professor, passando pela prática de sala de aula alterada, aos resultados dos estudantes.

[[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogia primeiro, tecnologia depois]] é um estudo multinível com 46 professores e 2.832 estudantes. O conhecimento pedagógico de IA esteve associado às percepções e intenções dos estudantes, e nenhum dos componentes de conhecimento docente medidos esteve diretamente associado a ganhos de conhecimento de IA dos estudantes. Associações desse tipo não estabelecem que uma intervenção de formação causaria melhor aprendizagem.

A pergunta aberta é quais combinações de coaching, [[curriculum-design|alinhamento curricular]], rotinas de revisão, programação e apoio institucional produzem melhora sustentada, e os estudos precisam observar o ensino de fato praticado, não a confiança do professor ou a intenção de adotar. [[teacher-ai-competency|Competência docente em IA]] e [[educational-development|Desenvolvimento educacional]] cobrem o terreno.

A custo-efetividade comparativa é uma segunda lacuna. As avaliações deveriam contar o tempo de verificação, correção, treinamento, supervisão, manutenção e implementação ao lado dos custos de assinatura e de uso do modelo, e comparar a provisão apoiada por IA com alternativas realistas. A pergunta que vale responder é qual benefício educacional o arranjo completo entrega pelos recursos que consome.

## Conte documentos de governança como intenções

Princípios [[ethics|éticos]] e quadros de governança são necessários, e sua existência não estabelece que eles mudam a prática ou protegem os aprendizes.

[[agarwal-ethical-values-norms-aied-2026|Agarwal et al.]] revisaram 25 artigos e encontraram usuários finais em grande parte passivos na literatura de ética, com as vozes dos estudantes essencialmente ausentes, ao lado de tensões entre valores e assimetrias de poder entre partes interessadas. Isso descreve a literatura revisada. Não é a afirmação de que estudantes nunca participam do desenho em IAED.

O que falta é evidência sobre quais arranjos de governança fazem diferença mensurável. A participação de estudantes e professores muda a compra, o desenho da ferramenta, as regras de avaliação ou as reparações depois de um erro? Procedimentos de revisão humana pegam erros consequentes? Alternativas ao uso de IA estão genuinamente disponíveis para as pessoas a quem se diz para usá-la? A pesquisa sobre privacidade tem uma lacuna paralela: o valor educacional da coleta adicional de dados é geralmente presumido, e desenhos que minimizam dados raramente foram comparados com desenhos mais intrusivos tanto em aprendizagem quanto em autonomia do aprendiz. Veja [[governance|Governança de IA]] e [[privacy|privacidade]].

## Faça o estudo reconstruível

A IAED tem um problema de reprodutibilidade excepcionalmente difícil. Estudos omitem prompts, versões de modelo, configurações, código e detalhes instrucionais, e sistemas proprietários podem mudar durante ou depois de uma intervenção. [[limitations-in-aied-research|Limitações na pesquisa em IA na educação]] documenta o padrão.

Reconstruir um estudo significa descrever o arranjo instrucional tanto quanto o modelo: tarefas de aprendizagem, fontes de conteúdo, ações permitidas, interface, apoio do professor, condições de avaliação e tudo o que mudou durante a implantação. Reproduzir uma configuração e testar se o princípio pedagógico dela se transfere para outra são conquistas separadas, e a orientação de relato em [[research-methods-aied|Métodos de pesquisa de eficácia]] aborda as duas.

A síntese precisa do mesmo cuidado. [[meta-analysis-systematic-review|Metanálise e revisão sistemática]] lista estudos primários fracos, viés de publicação, intervenções heterogêneas e desfechos incompatíveis como limites para conclusões agrupadas, e um único "efeito da IA" médio esconde as distinções de que os educadores precisam. Revisões deveriam separar desempenho assistido de aprendizagem independente, distinguir tipos de intervenção e condições de comparação, e tornar as decisões de codificação auditáveis.

A literatura de síntese é ela mesma uma lacuna. [[oneill-presumed-effective-meta-analysis-2026|A auditoria forense de O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|metanálises]] de alto impacto encontrou que nenhuma fornecia base válida para suas afirmações. Nenhum construto coerente: uma ferramenta tratada como uma intervenção, desfechos multidimensionais agrupados. O viés de publicação foi avaliado de forma inválida nas 14. O I² relatado variou de 77,2% a 94,4% em toda análise que o relatou, com 12 das 13 acima de 80%. 61% dos estudos primários verificados aleatoriamente carregavam preocupações de validade. Essas 14 análises coletaram mais de 2.000 citações em cerca de 16 meses, e uma metanálise retratada continuou sendo citada como autoritativa em 60% dos artigos que a citaram após a retratação, sem reconhecimento. De 14 artigos que citavam outra metanálise auditada cujo resumo anunciava um efeito grande de "educação em IA" que de fato media ensinar estudantes sobre IA, apenas 2 a citaram apropriadamente, 8 a leram como evidência de que integrar IA melhora a aprendizagem, e 4 estavam errados de outras maneiras. A auditoria pede que periódicos exijam transparência total de dados para metanálises (protocolos de busca, características codificadas dos estudos, estatísticas extraídas, código analítico), pede que editores não tratem um histórico de publicações como prova de competência em revisão, e pede que retratações sejam visíveis onde quer que um artigo seja descoberto, exportado ou citado. A reprodutibilidade cobre a cadeia de síntese, não apenas o estudo individual.

Professores que querem a versão de sala de aula podem seguir [[evaluating-ai-interventions-methods]].

## O que pesquisadores e professores erram sobre isso

**O campo carece de estudos.** Carece de estudos especificados. Existem experimentos multicêntricos, ensaios randomizados com milhares de estudantes e 14 metanálises de alto impacto. Apenas 21% das comparações auditadas definiram tratamento, controle e desfecho bem o suficiente para atribuir um efeito.

**Nomear uma teoria a testa.** Uma citação a uma teoria de aprendizagem é uma decisão de enquadramento. Um teste precisa de uma previsão, de um comportamento do sistema que a implemente e de uma medida de processo que pudesse sair ao contrário.

**Uma pontuação automatizada validada é um desfecho validado.** Concordância com codificadores humanos estabelece consistência com esses codificadores. Estudantes simulados melhoraram em uma medida de fidelidade sem serem validados contra a aprendizagem humana, e a cadeia do comportamento do modelo ao desfecho permanece não construída.

**Acesso é equidade.** No estudo de Hong Kong, as lacunas de prontidão psicológica se estreitaram enquanto as diferenças em testes objetivos se mantiveram, e todos os grupos melhoraram sem que a desigualdade se fechasse. Dispositivos e licenças mudam quem consegue chegar à ferramenta.

**Mais autonomia é progresso.** Maior independência dos agentes é uma escolha de desenho. Com 29% de 474 estudos sobre IA agêntica se apoiando em teoria educacional e validação longitudinal limitada, ninguém mostrou que transferir o controle para o sistema melhora a aprendizagem.

## As objeções que você vai ouvir

**"A lacuna é só que precisamos de mais ensaios randomizados."** Existem muitos agora, e o problema está a montante dos rótulos de desenho: um ensaio de um pacote que agrupa novo feedback, novas tarefas e uma nova interface não pode atribuir nada à IA. A condição de comparação é onde está o trabalho.

**"Não consigo rodar um acompanhamento de vários anos."** Então meça uma ocasião adiada e sem auxílio e diga qual intervalo ela cobre. Uma semana é um achado real, e o estudo da regra de domínio obteve seu resultado em uma semana embutindo a IA no fluxo de trabalho e concentrando-se em material praticado.

**"Randomização é impossível no meu curso."** Trabalho design-based e qualitativo responde a perguntas de implementação que os ensaios não conseguem, e o campo precisa dos dois. Onde a atribuição aleatória é possível, ela ainda carrega a afirmação causal.

**"O tamanho de efeito agrupado já me diz o que funciona."** As 14 metanálises auditadas definiram o tratamento como uma ferramenta, agruparam desfechos incompatíveis e relataram I² acima de 80% em 12 das 13 análises que o informaram. O número agrupado descreve um conjunto de estudos com um problema de construto.

**"Estudantes simulados são mais baratos, então validá-los pode esperar."** No estudo sobre bajulação, estudantes simulados abandonaram concepções errôneas independentemente de o feedback abordá-las, que é o modo de falha que faz um tutor ineficaz parecer eficaz.

## O que fazer nesta semana

**1.** Escreva a condição de comparação do estudo que você está planejando em uma frase. Se ela é "como de costume", revise-a antes de revisar qualquer outra coisa.

**2.** Acrescente uma medida adiada e sem auxílio ao desenho e nomeie o intervalo na seção de método.

**3.** Escreva a fronteira populacional na declaração de desenho e depois no resumo, para que a afirmação não possa viajar mais longe que a amostra.

**4.** Pegue a afirmação mais forte no seu rascunho atual e apague a versão que a sua medida não consegue sustentar. Mantenha a frase sobre o teto.

**5.** Para qualquer pontuação automatizada ou aprendiz simulado no estudo, nomeie o padrão humano e o adjudicador antes de a coleta de dados começar.

## Para onde ir a seguir

[[reporting-interpreting-aied-research]] é a contraparte de relato desta página, e [[research-methods-aied|Métodos de pesquisa em IA na educação]] cobre as escolhas de desenho por trás de cada lacuna. [[evaluating-ai-interventions-methods]] trata de medidas e desenhos de comparação, [[checking-whether-educational-ai-works]] é a versão mais curta da questão de eficácia, e [[does-ai-help-students-learn]] reúne o que se sabe sobre aprendizagem durável. [[theory-development-aied]] e [[equity-ethics-pedagogical-safety-research]] levam adiante as vertentes de teoria e de equidade.
