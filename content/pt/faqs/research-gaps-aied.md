---
title: "Quais são as lacunas notáveis na literatura de pesquisa sobre IA na Educação?"
created: "2026-08-24T14:10:00-04:00"
updated: "2026-10-02T08:21:34-04:00"
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
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

# Quais são as lacunas notáveis na literatura de pesquisa sobre IA na Educação?

As lacunas mais consequentes em IA na Educação (AIED) dizem respeito a **se desenhos educacionais particulares produzem benefícios duráveis, para quem, por meio de quais mecanismos e sob que condições — e não simplesmente se a IA consegue realizar tarefas educacionais**. A base de conhecimento documenta intervenções promissoras ao lado de fraquezas persistentes em mensuração, inferência causal, generalização, implementação e reprodutibilidade. Essas são frequentemente lacunas na *força, especificidade ou aplicabilidade* da evidência, e não uma ausência completa de pesquisa. Veja [[limitations-in-aied-research|Limitações na Pesquisa em AIEd]].

As lacunas também diferem ao longo do campo. Evidências sobre [[intelligent-tutoring|sistemas de tutoria inteligente]] estabelecidos, [[learning-analytics|análises]] preditivas, [[generative-ai|IA generativa]] e agentes autônomos não deveriam ser tratadas como intercambiáveis. Da mesma forma, usar a IA para apoiar a aprendizagem e ensinar as pessoas *sobre* a IA envolvem questões de pesquisa relacionadas, mas distintas, como a visão geral de [[ai-education|IA na Educação]] explica.

## 1. Isolar o que a IA acrescenta além da boa instrução

Existem experimentos rigorosos em sala de aula, então a lacuna já não é adequadamente descrita como "precisamos de ensaios randomizados". Uma pergunta mais precisa é **se o componente de IA acrescenta valor além de prática adicional, materiais melhores, feedback oportuno ou apoio instrucional aumentado**.

Por exemplo, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment]] relata ganhos modestos de desempenho em 18 escolas de ensino médio (middle school), ao lado de um engajamento substantivo limitado com o tutor. Os autores observam que os ganhos se assemelhavam àqueles associados à prática estruturada sem IA. Isso estabelece evidência sobre um pacote instrucional implementado, mas não isola de forma limpa a contribuição incremental de seu componente de IA.

O problema subjacente é conceitual tanto quanto empírico. "ChatGPT" nomeia uma ferramenta, não um método, e [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] auditam 19 comparações de ChatGPT na educação para mostrar o que isso custa: apenas 4 (21%) especificam os três de um tratamento replicável, um controle operacionalizado e uma medida válida de aprendizagem (74% tratamento bem definido, 42% controle bem definido, 53% um desfecho de aprendizagem). O ponto maior deles é o de que, quando uma nova IA é introduzida junto com novas atividades, feedback ou desenho de interface, o meio e o método são confundidos e nenhum efeito pode ser atribuído à IA.

A pesquisa precisa, portanto, de mais comparações com alternativas fortes e realistas sem IA, mantendo currículo, oportunidades de prática e apoio tão constantes quanto possível. Replicações independentes deveriam testar se os benefícios sobrevivem a mudanças de instituição, instrutor, disciplina e modelo. Como [[research-methods-aied|Métodos de Pesquisa de Eficácia]] enfatiza, métodos diferentes respondem a perguntas diferentes: estudos [[qualitative-research|qualitativos]] e [[design-based-research|baseados em desenho]] ajudam a explicar a implementação, enquanto experimentos apropriadamente desenhados fortalecem as afirmações causais.

## 2. Acompanhar a aprendizagem durável e a capacidade independente ao longo do tempo

Um trabalho melhorado enquanto se usa a IA não é necessariamente evidência de uma aprendizagem que persiste depois que a assistência termina. As sínteses de [[learning-gains|Ganhos de Aprendizagem]] e [[cognitive-offloading|Descarga Cognitiva]] distinguem repetidamente o desempenho assistido do conhecimento retido, do raciocínio independente e da transferência para tarefas desconhecidas.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] ilustra o problema de mensuração. Em um experimento randomizado com mais de 6.000 estudantes de middle school, uma regra de domínio de três acertos seguidos aumentou o sucesso definido pela plataforma sem, por si só, produzir ganhos de aprendizagem detectáveis uma semana depois. A evidência mais forte de teste tardio emergiu quando a IA foi incorporada ao fluxo de trabalho de domínio e estava concentrada em material praticado.

**A lacuna restante diz respeito a trajetórias de capacidade, e não meramente a um pós-teste adicional.** Os estudos deveriam examinar a retenção ao longo de meses, a transferência entre tarefas, o desempenho depois que a assistência é retirada, e a precisão de quem aprende ao julgar o que sabe. Deveriam também distinguir a falha em adquirir uma habilidade da deterioração de uma habilidade já estabelecida. A pesquisa sobre descarga deveria testar quando a delegação apoia essas trajetórias e quando ela desloca a prática necessária para desenvolvê-las.

## 3. Explicar quais componentes instrucionais funcionam — e por quê

A "aprendizagem apoiada por IA" costuma combinar várias mudanças: novo feedback, reflexão adicional, discussão entre pares, sequências de tarefa diferentes e incentivos de avaliação alterados. Um pacote bem-sucedido não estabelece quais componentes são necessários nem qual mecanismo produziu o benefício.

O experimento multi-sítio [[genai-feedback-design-multisite-experiment|Human-centered GenAI feedback design in higher education]] fornece um avanço útil. Entre 1.176 estudantes do primeiro ano de graduação, os desenhos de feedback reflexivos e híbridos superaram o [[ai-feedback-quality|feedback da IA]] direto na transferência tardia sem IA. A condição híbrida combinava autoavaliação, [[peer-assessment|feedback dos pares]] e crítica da IA. Isso apoia investigar como o feedback é organizado e usado, em vez de tratar o acesso como a intervenção.

Estudos adicionais deveriam isolar a contribuição e o momento das tentativas independentes iniciais, da autoexplicação, da contribuição dos pares, do feedback corretivo, das pistas e do desvanecimento da assistência. Deveriam testar como esses componentes interagem com o [[prior-knowledge|conhecimento prévio]] e a dificuldade da tarefa.

A lacuna teórica acompanhante é igualmente importante: **nomear uma [[learning-theories|teoria da aprendizagem]] não é o mesmo que testá-la**. A pesquisa deveria conectar uma previsão teórica a um comportamento específico do sistema e a um processo de aprendizagem mensurável. A mediação estatística pode informar essa explicação, mas não estabelece por si só um mecanismo causal. Veja [[theory-development-aied|Desenvolvimento de Teoria em IA na Educação]] e [[scaffolding|Apoio (Scaffolding)]].

## 4. Validar medidas, julgamentos automatizados e aprendizes simulados

Constructos como "engajamento", "[[critical-thinking|pensamento crítico]]", "alfabetização em IA" e "[[personalized-learning|personalização]]" são medidos de forma inconsistente. Autorrelatos podem descrever percepções e experiências, mas não substituem a competência demonstrada. Precisão técnica, qualidade do resultado avaliada por especialistas e aprendizagem do estudante também representam alvos de avaliação diferentes. Essas distinções são centrais para [[educational-measurement|Mensuração Educacional]] e [[ai-ed-evaluation|Avaliação em IA Educacional]].

Uma lacuna particularmente importante diz respeito aos [[ai-technologies|sistemas de IA]] usados para avaliar outros sistemas de IA. Em [[llm-student-simulation-misconception-faithfulness|Simulating Students or Sycophantic Problem Solving?]], [[simulating-students|estudantes simulados]] abandonavam frequentemente as [[misconceptions|ideias equivocadas]] atribuídas após um feedback corretivo, independentemente de ele endereçar a ideia equivocada. Suas respostas poderiam, portanto, fazer uma instrução ineficaz parecer bem-sucedida. O treinamento direcionado melhorou a medida de fidelidade do estudo, mas a melhora nessa medida não equivale à validação contra a aprendizagem humana.

A pesquisa precisa estabelecer quais pontuações automatizadas e comportamentos simulados predizem desfechos com aprendizes reais, incluindo aprendizes e contextos não usados durante o desenvolvimento. Os julgamentos humanos também exigem escrutínio: a concordância entre avaliadores não é automaticamente evidência de que o constructo certo está sendo avaliado.

**A lacuna é a validação da cadeia de avaliação — do comportamento do modelo, ao julgamento [[pedagogy|pedagógico]], à resposta de quem aprende, ao desfecho educacional.**

## 5. Estabelecer a validade da avaliação quando a IA pode produzir e avaliar a evidência

A IA cria dois problemas de avaliação conectados: ela pode ajudar a produzir o trabalho que está sendo avaliado, e pode influenciar como esse trabalho é pontuado.

O [[ai-agents-complete-lms-assessment-validity-2026|estudo da base de conhecimento sobre agentes de IA completando tarefas avaliadas no LMS]] documenta agentes navegando um curso de graduação ao vivo e completando atividades avaliadas. Essas demonstrações estabelecem uma capacidade que desafia as suposições sobre evidência produzida por estudantes; elas não estabelecem a prevalência desse uso nem invalidam toda avaliação assíncrona.

A questão de pesquisa é **quais desenhos de avaliação ainda apoiam conclusões defensáveis sobre quem aprende**. [[eportfolio|Portfólios]], reflexões, entregas escalonadas e registros de atividade deveriam eles mesmos ser validados, em vez de presumidos como estabelecedores de autoria ou compreensão. Os estudos deveriam examinar combinações de evidência contra competência observada de forma independente, ao mesmo tempo que consideram acessibilidade, carga de trabalho, privacidade e ansiedade do estudante. Veja [[assessment-validity|Validade da Avaliação]].

Para a [[automated-assessment|correção automatizada]], [[llms-do-not-grade-essays-like-humans-2026|LLMs Do Not Grade Essays Like Humans]] relata discordâncias sistemáticas entre modelos prontos para uso e avaliadores humanos. Seus achados são específicos de configuração, mas demonstram por que a consistência interna é insuficiente.

Uma distinção conceitual útil vem de [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]]: avalie o que os aprendizes precisam fazer de forma independente, o que eles podem realizar com a IA, e o que eles precisam verificar e defender. Esse é um framework proposto que exige validação empírica, e não uma solução de avaliação estabelecida.

[[karr-ai-detection-humanization-2026|Karr et al. (2026)]] quantificam por que a detecção é um beco sem saída. Em 642 resumos publicados em inglês, dois detectores comerciais de IA com τ = 0,50 sinalizaram edição leve de IA conforme as diretrizes em 38–80%, sinalizaram originais não modificados de 2023–25 em 9–15% (não [[stem-education|STEM]] muito acima de STEM, p < 0,001) e, após humanização, capturaram menos de 4% das reescritas rotuladas como IA (taxa de falso negativo > 96%). Uma pontuação que penaliza a assistência honesta enquanto perde a evasão não pode ser a base para uma conclusão defensável sobre quem aprende; a lacuna que ela expõe são desenhos e evidências de processo que não dependem de tal pontuação.

## 6. Mostrar que a alfabetização em IA se transfere para o comportamento responsável

A pesquisa de intervenção em alfabetização em IA é substancial o suficiente para apoiar uma síntese. [[liu-ai-literacy-interventions-meta-analysis-2026|AI Literacy Interventions in Education: A Meta-Analysis of Effects and Moderators]] inclui 59 estudos e 7.211 participantes. Ela relata um efeito médio positivo, mas uma variação substancial entre estudos e um amplo intervalo de predição que abrange o zero. Os desfechos focados em conhecimento mostraram efeitos mais fortes do que habilidades, atitudes ou ética.

A lacuna mais afiada, portanto, não é simplesmente desenvolver mais frameworks de competência. É determinar **se a instrução em alfabetização muda como as pessoas agem ao usar a IA**.

Os aprendizes conseguem reconhecer afirmações sem suporte, verificar fontes, rejeitar sugestões enganosas, identificar concordância inapropriada e escolher quando não delegar? Esses comportamentos persistem sob pressão de tempo e se transferem para sistemas e disciplinas desconhecidos?

A pesquisa deveria combinar avaliações baseadas em desempenho com observações de decisões reais e acompanhamento tardio. Deveria distinguir conhecimento conceitual, proficiência operacional e julgamento crítico, em vez de tratá-los como intercambiáveis. As sínteses de [[ai-literacy|Alfabetização em IA]] e [[trust-calibration|Calibração de Confiança]] fornecem pontos de partida úteis para essas distinções.

## 7. Compreender a generalização e os desfechos equitativos — e não apenas o acesso equitativo

Achados de um curso, instituição, língua ou população de aprendizes frequentemente fornecem bases limitadas para decisões em outro lugar. A síntese de [[limitations-in-aied-research|Limitações na Pesquisa em AIEd]] identifica isso como um problema recorrente. É preciso mais evidência sobre como os efeitos instrucionais variam entre estágios de desenvolvimento, disciplinas, conhecimento prévio, deficiência, língua e condições de recursos.

A pesquisa em equidade também precisa distinguir acesso, habilidades e desfechos. A síntese de [[digital-divide|Divisão Digital]] deixa claro que fornecer dispositivos ou acesso a ferramentas não estabelece capacidade igual de se beneficiar.

Por exemplo, [[school-ai-education-readiness-gaps-agency-2026|Does School-Based AI Education Narrow Readiness Gaps?]] acompanhou 752 estudantes do ciclo médio inicial (junior secondary) de Hong Kong. As lacunas de prontidão psicológica se estreitaram, enquanto as diferenças em um teste objetivo de alfabetização em IA persistiram. Todos os grupos melhoraram, mas a melhora geral não eliminou a desigualdade. Como os perfis de aprendizagem prévia não foram atribuídos aleatoriamente, o estudo não estabelece seus efeitos causais.

A cobertura da própria base de conhecimento mostra onde a evidência em nível de grupo é escassa, além de desigual. [[differential-effects-across-learner-groups|Efeitos Diferenciais Entre Grupos de Aprendizes]] conta a literatura por quem ela estuda: aprendizes de segunda língua e multilíngues e estudantes com deficiência são as vertentes mais profundas; gênero e neurodiversidade vêm em seguida; enquanto estudantes de primeira geração e estudantes internacionais têm um único estudo cada neste corpus; estudantes superdotados e de alto desempenho são efetivamente não estudados como grupo; e aprendizes refugiados, imigrantes e deslocados não aparecem em nenhum. Uma base de evidência com essa forma não consegue responder a questões de equidade por agregação; ela precisa ser amostrada deliberadamente.

**A prioridade de pesquisa é identificar quais desenhos reduzem as diferenças em capacidade demonstrada, participação e agência.** Os estudos deveriam examinar desfechos e fardos por subgrupo, e não meramente ganhos médios. A pesquisa em acessibilidade deveria distinguir remover barreiras à participação de substituir uma capacidade que se pretende que quem aprende desenvolva. Veja [[equity-in-ai-education|Equidade na Educação em IA]] e [[accessibility|Acessibilidade]].

A capacidade também varia dentro de um único sistema nacional de formas que as categorias de governança não capturam. [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] pontuaram a integração de IA em 45 universidades nigerianas e descobriram apenas uma adoção geral moderada (M = 4,79, amplitude 1,83–7,83 em uma escala de 10 pontos), com o tipo de instituição falhando em prever a integração uma vez que idade e geografia foram controladas (idade β = 0,43; localização no Sudoeste β = 0,31). As capacidades internas se intercorrelacionavam em r = 0,79–0,80 e as colaborações internacionais com parcerias industriais em r = 0,74, então instituições bem conectadas acumulam vantagens compostas. A lacuna é testar quais desenhos de construção de capacidade mudam os desfechos em instituições mais novas e menos conectadas.

## 8. Determinar como o controle deveria ser compartilhado entre aprendizes, professores e agentes

À medida que os sistemas de IA planejam, iniciam ações, mantêm memória e coordenam ferramentas, a questão educacional se torna mais específica do que se a colaboração humano–IA é benéfica: **quem deveria controlar quais partes do processo de aprendizagem, e quando esse controle deveria mudar?**

O [[agentic-ai-education-scoping-review|Agentic AI in Education: A Scoping Review]] mapeia 474 estudos e identifica validação longitudinal limitada, concentrações no [[higher-ed|ensino superior]] e em STEM, e fraca integração de teoria educacional. Apenas 29% dos estudos revisados recorreram explicitamente à teoria educacional — um achado sobre aquele corpus, não sobre toda a pesquisa em AIED.

A pesquisa deveria comparar configurações nas quais aprendizes ou agentes iniciam a ajuda, definem metas, selecionam estratégias, monitoram o progresso e tomam as decisões finais. Deveria testar se o apoio pode ser gradualmente retirado à medida que a competência se desenvolve e se os aprendizes retêm a capacidade de desafiar o sistema.

As sínteses de [[agentic-ai|IA Agêntica]] e [[human-ai-collaboration|Colaboração Humano–IA]] também levantam questões sobre intervenção e responsabilização do [[teacher-role|professor]] em ambientes multiagente. Uma maior autonomia deveria ser avaliada como uma escolha de desenho pedagógico, e não presumida como representante de progresso educacional.

## 9. Conectar a segurança pedagógica e relacional a consequências educacionais reais

A segurança educacional se estende além da precisão factual, do conteúdo ofensivo ou das solicitações proibidas. Um tutor pode fornecer uma resposta correta enquanto solapa a oportunidade de quem aprende raciocinar, reforça uma ideia equivocada subjacente ou encoraja uma dependência inapropriada. Veja [[pedagogical-safety|Segurança Pedagógica]].

O [[hazra-safetutors-pedagogical-safety-2026|SafeTutors: Pedagogical Safety in AI Tutoring]] identifica falhas como revelação excessiva de respostas e abandono do apoio, com substancialmente mais falhas sob teste multíurno. Esses são achados de [[benchmark]] sob condições de teste especificadas — não estimativas da prevalência ou severidade do dano em salas de aula.

A questão não resolvida é como essas falhas afetam aprendizes reais ao longo do uso sustentado. Quais produzem confusão temporária, ideias equivocadas persistentes, motivação reduzida ou capacidade independente enfraquecida? Quais salvaguardas reduzem esses riscos sem recusa ou frustração excessivas?

A pesquisa de prazo mais longo deveria também examinar a confiança, a disposição de buscar ajuda humana, a [[agency|agência de quem aprende]] e os relacionamentos com pares e professores. Essas questões são especialmente importantes para crianças e exigem estudos apropriados ao desenvolvimento que conectem o comportamento do sistema a desfechos educacionais e relacionais.

## 10. Explicar como a implementação, o desenvolvimento docente e os custos moldam os desfechos

A capacidade técnica não estabelece que uma ferramenta será usada produtivamente nem que o desenvolvimento profissional melhorará a aprendizagem dos estudantes. O elo faltante costuma ir da **preparação do professor, passando pela prática em sala de aula alterada, até os desfechos dos estudantes**.

Em [[pedagogy-first-technology-second-teacher-knowledge-2026|Pedagogy First, Technology Second]], um estudo multinível com 46 professores e 2.832 estudantes descobriu que o conhecimento pedagógico de IA se associou às percepções e intenções dos estudantes, mas nenhum dos componentes de conhecimento do professor medidos se associou diretamente aos ganhos de conhecimento de IA dos estudantes. Essas associações não estabelecem que uma intervenção de treinamento particular causaria uma melhor aprendizagem.

A pesquisa deveria investigar quais combinações de mentoria, alinhamento de [[curriculum-design|currículo]], rotinas de revisão, agendamento e apoio institucional produzem melhorias sustentadas. Deveria observar o ensino praticado, e não apenas a confiança do professor ou a intenção de adotar. Veja [[teacher-ai-competency|Competência em IA do Professor]] e [[educational-development|Desenvolvimento Educacional]].

A custo-eficácia comparativa é outra prioridade. As avaliações deveriam incluir verificação, correção, treinamento, supervisão, manutenção e tempo de implementação — e não apenas custos de assinatura ou de uso de modelo — e comparar a provisão apoiada por IA com alternativas realistas. A questão relevante é que benefício educacional o arranjo completo entrega pelos recursos que exige.

## 11. Avaliar governança, privacidade e participação significativa

Princípios [[ethics|éticos]] e frameworks de governança são necessários, mas sua existência não estabelece que eles mudam a prática ou protegem os aprendizes.

O [[agarwal-ethical-values-norms-aied-2026|Identifying the Ethical Values and Norms for Artificial Intelligence in Education]] revisa 25 artigos e descobre que os usuários finais são amplamente passivos na literatura de ética revisada, com as vozes dos estudantes essencialmente ausentes. Ele também identifica tensões entre valores e assimetrias de poder entre partes interessadas. Isso descreve a literatura revisada; não deveria ser generalizado em uma afirmação de que os estudantes nunca participam do desenho em AIED.

A lacuna de pesquisa diz respeito a **quais arranjos de governança fazem uma diferença mensurável**. A participação de estudantes e professores muda a aquisição, o desenho de ferramentas, as regras de avaliação ou as reparações após erros? Os procedimentos de revisão humana pegam erros consequentes? Alternativas ao uso de IA estão genuinamente disponíveis?

A pesquisa em privacidade deveria da mesma forma examinar o valor educacional da coleta adicional de dados, em vez de presumir que um monitoramento mais detalhado do aprendiz se justifica. Os estudos podem comparar desenhos que minimizam dados com alternativas mais intrusivas, avaliando tanto a aprendizagem quanto a autonomia de quem aprende. Veja [[governance|Governança de IA]] e [[privacy|Privacidade]].

## 12. Construir estudos reprodutíveis e evidência cumulativa confiável

A AIED enfrenta um problema de reprodutibilidade excepcionalmente difícil. Os estudos podem omitir prompts, versões de modelos, configurações, código ou detalhes instrucionais; sistemas proprietários também podem mudar durante ou depois de uma intervenção. Essas questões estão documentadas em [[limitations-in-aied-research|Limitações na Pesquisa em AIEd]].

A reprodutibilidade exige descrever o arranjo instrucional tanto quanto o modelo: tarefas de aprendizagem, fontes de conteúdo, ações permitidas, interface, apoio do professor, condições de avaliação e mudanças durante a implantação. Os pesquisadores deveriam distinguir reproduzir uma configuração de testar se seu princípio pedagógico se transfere para outra. A discussão de relato em [[research-methods-aied|Métodos de Pesquisa de Eficácia]] endereça essa necessidade de descrições transparentes.

A síntese de evidências exige um cuidado comparável. A página de [[meta-analysis-systematic-review|Metanálise e Revisão Sistemática]] destaca estudos primários fracos, viés de publicação, intervenções heterogêneas e desfechos incompatíveis como limitações às conclusões agrupadas.

Um "efeito da IA" médio único pode ocultar as distinções de que os educadores mais precisam. As revisões deveriam separar o desempenho assistido da aprendizagem independente, distinguir tipos de intervenção e condições de comparação, e tornar as decisões de codificação e análise auditáveis. Achados nulos, implementações fracassadas e condições de fronteira são contribuições essenciais a essa base de evidência cumulativa.

A literatura de síntese é ela própria uma lacuna. A [[oneill-presumed-effective-meta-analysis-2026|auditoria forense de O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|metanálises]] de alto impacto descobriu que nenhuma fornecia uma base válida para suas afirmações: nenhum constructo coerente (uma ferramenta tratada como uma intervenção única e desfechos multidimensionais agrupados), avaliação inválida do viés de publicação em todas as 14, I² relatado entre 77,2% e 94,4% em toda análise que o relatava (12 das 13 acima de 80%), e 61% dos estudos primários averiguados aleatoriamente carregando preocupações de validade. Essas 14 análises haviam acumulado mais de 2.000 citações em aproximadamente 16 meses, e uma metanálise retratada ainda era citada como autoritativa em 60% dos artigos citantes pós-retratação, sem reconhecer a retratação. A adoção acrítica não se confina ao trabalho retratado: em uma amostra de 14 artigos que citavam outra metanálise auditada, cujo resumo anunciava um grande efeito da "educação em IA" que de fato media o ensino aos estudantes sobre IA, apenas 2 a citavam de forma apropriada, enquanto 8 a liam como evidência de que integrar a IA melhora a aprendizagem e 4 estavam incorretos de outras formas. As recomendações da auditoria miram diretamente nessa cadeia, pedindo que os periódicos exijam transparência total de dados para metanálises (protocolos de busca, características de estudos codificadas, estatísticas extraídas e código analítico), pedindo que os editores não tratem um histórico de publicações como prova de competência de revisão, e pedindo que as retratações sejam tornadas visíveis onde quer que um artigo seja descoberto, exportado ou citado. A reprodutibilidade cobre, portanto, a integridade da cadeia de síntese, e não apenas a dos estudos individuais.

Os instrutores que querem a versão em nível de sala de aula dessas preocupações — quais medidas e desenhos de comparação usar — podem seguir a orientação de método em [[evaluating-ai-interventions-methods]].

## Conclusão geral

A necessidade central de pesquisa não é simplesmente mais estudos mostrando que os estudantes gostam da IA, que os professores economizam tempo, ou que o trabalho apoiado por IA recebe notas mais altas. É uma evidência mais forte que responda:

> Qual desenho educacional, para quais aprendizes, em qual contexto, por meio de qual mecanismo, produz quais capacidades humanas duráveis — e com que distribuição de benefícios, custos e danos?

Responder a essa pergunta exige métodos complementares: experimentos bem especificados, acompanhamento longitudinal, avaliações validadas, investigação qualitativa e baseada em desenho, amostragem focada em equidade e síntese transparente. O objetivo é uma base de evidência que explique não apenas se uma intervenção funcionou, mas por que funcionou, onde ela pode falhar e o que os educadores podem responsavelmente levar para outro contexto.
