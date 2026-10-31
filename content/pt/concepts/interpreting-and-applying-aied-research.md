---
title: "Interpretar e aplicar a pesquisa em AIEd"
created: "2026-09-19T05:41:27-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied, how-can-ai-assist-with-educational-research]
translation_of: concepts/interpreting-and-applying-aied-research
source_updated: "2026-10-25T16:25:00-04:00"
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

> **Interpretar e aplicar a pesquisa em AIEd** — como decidir se um achado de IA em educação vale a pena ser acionado, quer você ensine, dirija um programa, desenhe uma disciplina ou construa software. Você não precisa de estatística para usar esta página. Ela começa com a pergunta que um profissional realmente tem — *devo fazer isso?* — trabalha pelas poucas coisas que a respondem, e mantém o detalhe técnico numa seção posterior, para quem quiser ou precisar dele. A versão curta: um achado vale a pena ser acionado quando você sabe o que foi comparado, o que foi medido, quem foi estudado e se a ferramenta ainda existe na forma que foi estudada. A maioria das afirmações que chegam a instrutores, administradores e desenvolvedores falha em um desses quatro.

## Questões para considerar

- Um fornecedor, uma notícia ou um colega diz que uma ferramenta de IA melhorou a aprendizagem. Qual é a única coisa que você iria querer ver antes de experimentá-la na sua própria disciplina — e você saberia onde procurar isso?
- Toda página de artigo desta base de conhecimento agora tem uma seção **O que isso significa para a prática**, e a maioria tem uma seção **Limitações**. Lendo as duas juntas, o que cada uma lhe diz que a outra não diz?
- Estudantes praticam com uma ferramenta de IA e se saem melhor no trabalho de prática, e depois se saem pior na [[summative-assessment|prova de livro fechado]]. Qual desses números é o resultado de aprendizagem de que sua disciplina cuida — e suas avaliações atuais captariam a diferença?
- Um estudo promete uma grande melhora, mas acompanhou 30 estudantes de uma disciplina em uma instituição, e a versão da ferramenta estudada já não é a versão que qualquer pessoa usa. Qual desses dois fatos o preocupa mais, e por quê?
- Muitas ferramentas de IA aumentam quanto os estudantes as usam sem aumentar quanto eles aprendem. Se você tivesse que escolher entre uma ferramenta que eleva o engajamento e uma que eleva o desempenho sem assistência, que evidência decidiria a questão?
- Pedem que você aprove ou compre uma ferramenta com base nos próprios números de eficácia do fornecedor. O que você iria querer que fosse divulgado sobre como esses números foram produzidos?

## Introdução

Esta página é para pessoas que têm de decidir algo: um instrutor se perguntando se deve mudar uma tarefa, um [[administrator|administrador]] ponderando um piloto, um designer de aprendizagem construindo uma disciplina, um desenvolvedor de software decidindo o que uma funcionalidade deve fazer, ou um pesquisador explicando um achado a qualquer um deles.

Dois hábitos fazem a diferença, e nenhum dos dois exige treinamento em pesquisa.

**Leia primeiro as duas seções escritas para você.** Toda página de artigo aqui carrega agora uma seção **O que isso significa para a prática** — usualmente três a cinco ações concretas derivadas daquele estudo — e a maioria carrega uma seção **Limitações** declarando o que o estudo não pode sustentar. Leia essas seções antes dos achados do estudo, não depois. A seção de prática lhe diz para que o estudo serve; a seção de limitações lhe diz onde ele para. Se a seção de prática está ausente ou é vaga, trate aquela página como inacabada, e não como evidência.

**Julgue a afirmação, não a confiança da afirmação.** Afirmações sobre [[ai-education|IA em educação]] costumam ser precisas sobre *alguma coisa* e enganosas sobre a coisa de que você cuida, porque um estudo e sua sala de aula diferem em quatro aspectos: contra o que foi comparado, o que mediu, quem participou e qual versão da ferramenta foi usada. O resto desta página lhe dá as verificações em linguagem simples, e depois a evidência por trás de cada uma delas, para quem a quiser.

O que se segue também não substitui suas vizinhas. [[research-methods-aied|Métodos de pesquisa em IA em educação]] cobre como os desenhos são construídos, [[limitations-in-aied-research|Limitações na pesquisa em AIEd]] cataloga as fraquezas recorrentes da literatura, [[ai-ed-evaluation|Avaliação em AIED]] cobre como sistemas e saídas são avaliados, e [[differential-effects-across-learner-groups|Efeitos diferenciais entre grupos de estudantes]] cobre quem um achado inclui e não inclui.

## Quatro perguntas que resolvem a maioria das afirmações

Faça estas perguntas antes de gastar tempo, dinheiro ou um semestre em algo.

**1. Contra o que foi comparado, e essa comparação foi justa?** "Os estudantes que usaram a IA se saíram melhor que os que não usaram" só lhe diz algo se os outros estudantes estavam fazendo algo real. Se a comparação foi o negócio como sempre — ou nada —, então o achado agrupa a ferramenta junto com tempo extra, atenção extra e novidade. O que procurar: um **grupo de controle** que recebeu uma alternativa credível, e atribuição aleatória às duas condições.

**2. O que exatamente eles mediram?** É aqui que a maioria das afirmações empolgantes falha silenciosamente. Notas em provas, qualidade de lições de casa, [[motivation|motivação]], atitudes e [[student-engagement|engajamento]] dos estudantes são agrupados em um único número de "desempenho", ou uma medida de desempenho *com a ferramenta presente* é relatada como aprendizagem. Aprendizagem que depende de a ferramenta estar lá não é o mesmo que aprendizagem que dura. O que procurar: o que o instrumento mediu, se foi validado para aquela população, e se um desfecho foi medido **sem** a IA na sala.

**3. Quem foi estudado, quantos, e por quanto tempo?** Trinta estudantes em uma disciplina é um sinal, não um resultado. Uma intervenção de quatro semanas não pode lhe dizer nada sobre um ano. E um estudo de estudantes diferentes dos seus ainda é útil — é uma hipótese sobre seu contexto, não uma previsão. O que procurar: tamanho da amostra, como os participantes foram recrutados, site único, duração, e se algum subgrupo foi grande o bastante para ser analisado.

**4. A ferramenta ainda é a ferramenta que foi estudada?** A capacidade da IA se move mais rápido que a publicação. Um achado de 2025 descreve a geração de modelos de 2025 — às vezes uma versão específica, às vezes uma configuração que ninguém mais usa. Isso não torna o achado falso; torna-o datado, e significa que a afirmação deve ser re-verificada, e não herdada. O que procurar: versão do modelo e a janela de coleta de dados.

## O que a evidência diz sobre as afirmações de IA em geral

Se você se lembrar de uma coisa desta página, lembre-se de que o número de destaque costuma ser inflado e a comparação costuma ser fraca. Essa não é uma visão marginal — é o que auditorias do próprio campo relatam. Vários estudos bem desenhados mostram ganhos reais; o ponto é que o ônus da prova recai sobre a afirmação.

- **Cerca de dois terços do efeito médio desaparece** quando você corrige o fato de que resultados impressionantes são publicados e os não impressionantes não são. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] agruparam 1.840 tamanhos de efeito de 67 revisões e concluíram que a média corrigida era cerca de um terço da mediana publicada — SMD 0,196 contra 0,67.
- **Um nome de produto não é um método de ensino.** Ao auditar as comparações por trás de uma metanálise proeminente, [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] concluíram que apenas **21%** tinham tratamento bem definido, grupo de controle e medida válida de aprendizagem — e a vantagem relatada para "usar ChatGPT" saiu maior que para [[intelligent-tutoring|sistemas de tutoria inteligente]] de propósito específico (g = 0,7 contra 0,66), o que é um sinal de alerta, e não um triunfo.
- **Desempenho com a ferramenta é rotineiramente confundido com aprendizagem.** Em um estudo de matemática no [[k-12|K-12]], estudantes que praticavam com um [[conversational-ai|chatbot]] de uso geral tiravam notas melhores em prática e depois pontuavam **cerca de 17% pior** que pares sem acesso a IA na prova final de livro fechado ([[stanford-evidence-base-ai-k12-2026|A base de evidência da Stanford para IA no K-12]]).
- **As próprias revisões do campo não sobrevivem à auditoria.** A auditoria de [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] de **14 metanálises revisadas por pares** que afirmam que a IA melhora a educação concluiu que **nenhuma** forneceu base válida para as afirmações que avançava, e que, entre 46 estudos primários selecionados aleatoriamente, **61%** apresentavam preocupações de validade. O problema não é um artigo ruim; é uma cultura de relato.
- **Uma revisão pode quantificar o desvio de relato no próprio corpus.** Uma revisão sistemática de 155 estudos do ensino superior constatou que 117 (75,5%) relatavam implementação bem-sucedida, 124 (80,0%) cobriam apenas impacto de curto prazo, e somente 23 (14,8%) relatavam falhas de [[ethics|ética]], equidade ou governança — o desequilíbrio que as verificações acima descrevem, medido sobre a própria base de evidência da revisão ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga (2026)]]).
- **Autorrelatos lisonjeiam todos.** As pessoas avaliam suas próprias [[ai-literacy|competências em IA]] cerca de **40%** mais alto que as medidas de desempenho mostram, e é por isso que levantamentos de satisfação e confiança são a evidência mais fraca sobre a qual se pode agir ([[self-report-measures|Medidas de autorrelato]], [[educational-measurement|Medição educacional]]).
- **A maioria dos produtos já em salas de aula não tem nenhuma evidência independente.** O [[instruction-partners-ai-in-action-learning-tour-2026|tour de aprendizagem 2025–26 da Instruction Partners]] perfilou 20 produtos de IA voltados a estudantes e concluiu que, dos 16 com perfis completos, apenas sete tinham uma revisão independente examinando desempenho de estudantes entre grupos de estudantes nos EUA; dois eram estudados apenas no exterior, quatro tinham estudos em andamento e três dependiam apenas de dados internos. Os autores argumentam que estudos causais independentes cobrindo grupos prioritários deveriam ser a expectativa para todos os produtos voltados a estudantes — ainda não a norma para ferramentas que as escolas já usam.

## Transformando um achado em uma decisão

A sequência que economiza mais esforço desperdiçado, em ordem.

1. **Escreva seu desfecho primeiro.** Não "usar mais IA", mas "os estudantes conseguem fazer X sem a ferramenta". Se seu desfecho é desempenho sem assistência, então um estudo que mediu desempenho assistido é evidência adjacente, não evidência direta.
2. **Encontre a comparação e a medida** — no estudo, ou na seção de prática de sua página de artigo. Se qualquer um dos dois está ausente, trate a afirmação como uma demonstração, e não como um achado.
3. **Leia a seção de limitações como instruções, não como ressalvas.** "Uma disciplina, desfechos autorrelatados, quatro semanas" lhe diz exatamente quais das suas suposições o estudo não cobre.
4. **Verifique a versão e a data.** Se o estudo usou uma geração de modelos com dois anos, planeje re-testar em vez de presumir.
5. **Nomeie as condições habilitadoras.** Custo, licenças, tempo de equipe, regras de dados, e se os estudantes precisam pagar pelo plano que realmente funciona. Estudos raramente carregam esses itens, e eles decidem se uma intervenção sobrevive a um semestre. Em [[chick-faculty-development-ethical-ai-2026|um estudo de desenvolvimento docente com dez participantes]], todos disseram que continuariam usando IA, enquanto essas mesmas pessoas descreviam assinaturas pessoais para acesso às ferramentas e nenhum apoio de tempo para os redesenhos que haviam planejado.
6. **Pilote pequeno, e meça a condição sem apoio.** Um pré/pós curto com uma avaliação feita sem a ferramenta supera um levantamento de satisfação. Pequeno e honesto supera grande e retórico. Ver [[learning-design|Desenho de Aprendizagem]] para onde isso se encaixa no desenho de disciplinas.
7. **Agende uma data de revisão no calendário, e esteja disposto a abandonar a afirmação.** Quando a premissa de um estudo é uma capacidade que já não existe, o movimento honesto é aposentar a afirmação em vez de citá-la indefinidamente — a mesma disciplina que esta base de conhecimento aplica às suas próprias páginas.

## Palavras que você encontrará na pesquisa

Traduções simples, para que você possa passar o olho por um estudo ou uma página de fornecedor sem formação em métodos.

- **Tamanho de efeito** — quão grande foi a diferença, em uma escala em que 0 é nada. Trate valores pequenos como "um empurrãozinho", não como "uma transformação".
- **Estatisticamente significativo** — improvável de ser puro acaso *nesta amostra*. Não diz nada sobre se o efeito é grande, ou se acontecerá na sua turma.
- **Intervalo de confiança** — a faixa de resultados que os dados não conseguem descartar. Se a faixa inclui zero, o achado pode não ser nada, por mais interessante que seja o destaque.
- **[[meta-analysis-systematic-review|Metanálise]]** — um estudo que agrupa muitos estudos. Poderosa, e tão boa quanto aquilo que agrupou, e é por isso que revisões são auditadas.
- **Viés de publicação** — resultados interessantes são publicados e os chatos não, portanto a média da literatura parece mais rosada que a realidade.
- **Autorrelato** — pessoas se descrevendo. Útil para atitudes, fraco para competência ou comportamento.
- **Grupo de controle** — a condição de comparação. A coisa mais importante a procurar.
- **Pré/pós** — medido antes e depois, sem grupo de comparação. Sugestivo, nunca conclusivo.
- **Análise de subgrupo** — resultados para uma fatia da amostra. Usualmente subpotente, portanto trate-a como hipótese.
- **Replicação** — outra pessoa obteve o mesmo resultado. Rara, e a evidência mais forte disponível.
- **[[benchmark|Benchmark]]** — um conjunto fixo de tarefas para pontuar sistemas. As notas se movem quando o alvo se move, portanto verifique a data.

## Quando desacelerar de qualquer forma

- **A afirmação vem do fornecedor, com as métricas do fornecedor.** Isso ainda pode ser informativo — um provedor de [[intelligent-tutoring|tutoria com IA]] relata uma métrica de engajamento calibrada contra especialistas humanos em F1 0,83, com melhorias vindas de mais de 40 experimentos em cinco meses ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al., 2026]]) —, mas o constructo, os corretores e a métrica são escolhas do fornecedor. Peça o grupo de comparação e o desfecho sem assistência.
- **A correção automatizada é tratada como resolvida.** Alta concordância com corretores humanos é confiabilidade, não qualidade. Em um estudo de correção, corretores humanos concordavam com o consenso multirreator em cerca de r = 0,88, portanto notas automatizadas perto de r = 0,85 já estavam no teto de medição da própria tarefa ([[know-when-to-trust-ai-scoring-reliability-2026|Know When to Trust AI Scoring]]).
- **A lista de referências está fazendo trabalho pesado.** Trinta entradas de referência contendo informação bibliográfica verificavelmente fabricada foram confirmadas ao longo de 14 artigos de [[cs-education|educação em computação]], todos de 2025 e 2026 ([[citation-errors-hallucinations-computing-education-2026|Denny et al., 2026]]). Se uma afirmação repousa sobre uma citação, verifique a citação.
- **Ninguém mediu o comportamento de que sua política depende.** Ao longo de 493 registros deduplicados e 14 estudos prioritários, nenhum estudo mediu se a verificação teve sucesso *e* o que quem aprende fez então com ela, julgado contra um padrão independente de qualidade de saída ([[verification-quality-reliance-calibration-genai-2026|verificação e calibração de confiança]]). As políticas de disciplinas dependem exatamente desse comportamento.

## Se você está construindo ou comprando uma ferramenta

As mesmas verificações se invertem em requisitos de desenho, e as páginas de avaliação desta base de conhecimento carregam o detalhe ([[ai-ed-evaluation|Avaliação em AIED]], [[automated-assessment|Avaliação automatizada]]).

- **Torne a comparação parte da especificação da funcionalidade.** Decida o que quem aprende estaria fazendo de outra forma, e seja capaz de dizer por que sua ferramenta supera isso — não por que supera o nada.
- **Meça a condição sem apoio.** Se seu desfecho é aprendizagem, inclua uma tarefa concluída sem a ferramenta; desempenho assistido isoladamente o enganará tanto quanto engana seus compradores.
- **Relate como seus julgamentos automatizados foram validados** — o padrão-ouro, o alvo de calibração, quem arbitrou discordâncias — e relate-o como confiabilidade, e não como qualidade.
- **Nomeie a versão e a data** em qualquer afirmação de eficácia, porque seu próximo lançamento a invalida.
- **Mostre os contrapesos:** custo por estudante, [[accessibility|acessibilidade]], tratamento de dados, e o que acontece com quem aprende no plano gratuito. Ver [[ai-use-disclosure|Divulgação de uso de IA]], [[privacy|Privacidade]] e [[governance|Governança]].

## Para leitores que querem a evidência

As verificações acima não são sabedoria popular; elas vêm de falhas documentadas nesta literatura. Esta seção mantém o detalhe para quem quer revisar um artigo, defender uma decisão ou argumentar que uma ferramenta deveria ser avaliada adequadamente.

**As falhas de validade têm uma distribuição, não apenas uma presença.** Nos 46 estudos auditados de [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]], o descasamento de variável dependente foi o problema mais comum (n = 15) — a medida não capturava o que a afirmação afirmava —, seguido por descasamento de variável independente (n = 11), problemas de desenho experimental (n = 7), problemas de extração de dados (n = 6), ausência de grupo de controle (n = 6) e atribuição não aleatória de grupos (n = 6). Das 14 metanálises, doze trataram múltiplos tamanhos de efeito extraídos do mesmo estudo primário como independentes, o que infla a base de evidência aparente.

**Afirmações de subgrupo costumam ser indecidíveis nos estudos que as fazem.** O [[ai-tutoring-micro-rct-gcse-science-2026|micro-RCT de ciências do GCSE]] relata uma interação tratamento-por-status de **0,57 pontos (IC 95% −2,25 a 3,39)**, com estimativas estratificadas de **g = 0,28 (IC 95% −0,04 a 0,59)** para um grupo e **g = 0,35 (IC 95% 0,18 a 0,52)** para o outro. Um intervalo que cruza o zero não é um achado de [[equity-in-ai-education|equidade]]; é uma questão para um piloto local.

**Uma síntese pode satisfazer seu próprio protocolo e ainda assim agrupar qualidade sem ponderação.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan et al. (2026)]] declaram com franqueza que não usaram nenhuma ferramenta formal de avaliação de qualidade, tratando seus critérios de inclusão como o limiar de rigor, de modo que um estudo quase-experimental e um randomizado contribuíram igualmente — e sua heterogeneidade lê **I² = 82,98% sob um modelo de efeitos fixos, mas 15,75% sob o modelo de efeitos aleatórios**, e é por isso que um número de heterogeneidade citado sem seu modelo não pode lhe dizer quão inconsistente é o corpus.

**[[assessment-validity|Validação]] de julgamento automatizado faz parte do resultado.** Concordância com codificadores humanos é uma afirmação de confiabilidade, e o teto acima mostra por que ela não é o mesmo que qualidade ([[machines-misread-pedagogical-quality|máquines leem mal a qualidade pedagógica]]).

**A safra da ferramenta é uma limitação de primeira classe.** Uma revisão da avaliação assistida por IA nota que seus próprios achados refletem versões específicas de modelos em momentos específicos, e que o movimento do campo torna qualquer relato de capacidades de modelo potencialmente desatualizado dentro de meses ([[ai-assisted-assessment-instruction-higher-ed-2026|Avaliação e instrução assistidas por IA no ensino superior]]). Circunscreva as afirmações à sua geração: "a [[generative-ai|IA generativa]] melhorou X" não é portátil, enquanto "ferramental da era do GPT-4, nesta tarefa, com este [[scaffolding|andaime]]" é.

**Alvos de benchmark se movem**, portanto um resultado que um sistema satura ou falha hoje pode se inverter no próximo lançamento; verificações de saturação e contaminação pertencem ao lado de qualquer afirmação baseada em benchmark.

**Ler esta literatura ao lado de seus próprios críticos é prática normal aqui.** As listas de verificação do lado do relato para autores e revisores estão em [[reporting-interpreting-aied-research|a FAQ sobre relatar e interpretar pesquisa em IA]], e os hábitos de avaliação crítica desta página se emparelham com [[theory-development-aied|Desenvolvimento de teoria em IA em educação]] quando uma afirmação é teórica, e não empírica.

## Uma lista curta de verificação

1. Declare seu desfecho em uma frase, incluindo se a ferramenta está presente nele.
2. Encontre a comparação. Sem comparação credível, sem decisão.
3. Ajuste a medida à sua afirmação, e prefira um desfecho sem assistência.
4. Deflacione o número: leia o efeito corrigido por viés, não o destaque.
5. Verifique a versão do modelo e as datas do estudo.
6. Leia a seção de limitações como instruções sobre o que você ainda não sabe.
7. Calcule o custo: licenças, planos, tempo de equipe, regras de dados.
8. Pilote pequeno com uma medida sem assistência, e depois decida.
9. Agende uma data de revisão daqui a um ano, e esteja pronto para aposentar a afirmação.

## Ideias equivocadas comuns

**"Uma metanálise publicada é evidência consolidada sobre IA na educação."** As sínteses do campo não sobreviveram à auditoria. A auditoria de [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] de **14 metanálises revisadas por pares** que afirmam que a IA melhora a educação concluiu que **nenhuma** forneceu base válida para essa conclusão. Um tamanho de efeito agrupado vale o que valem os estudos agrupados, e nesta literatura o agrupamento incluiu rotineiramente desenhos que não podiam atribuir o desfecho à IA. Antes de citar um número metanalítico, pergunte o que ele agregou.

**"O tamanho de efeito maior pertence à melhor intervenção."** Muitas vezes o contrário. No contexto de revisão que esta página documenta, apenas **21%** dos estudos tinham tratamento bem definido, grupo de controle e medida válida de aprendizagem — e a vantagem relatada para "usar ChatGPT" saiu *maior* que para [[intelligent-tutoring|sistemas de tutoria inteligente]] de propósito específico. Tratamentos fracamente especificados tendem a produzir efeitos inflados, porque a comparação é mais vaga e a medida do desfecho mais frouxa. Um número maior é razão para olhar o desenho, não para preferir a intervenção.

**"Notas mais altas ao usar a ferramenta indicam que a ferramenta ensinou mais."** Em um estudo de matemática no [[k-12|K-12]], estudantes que praticavam com um [[conversational-ai|chatbot]] de uso geral tiravam notas de prática melhores e depois pontuavam **cerca de 17% pior** na avaliação sem assistência. O desempenho de prática medido com a ferramenta presente é a medida inflada; o sem assistência é o desfecho, e apenas um deles estava subindo.

**"Se o efeito é real, os detalhes de implementação não importam muito."** Eles são o efeito. Um estudo que acompanhou 30 estudantes em um curso de uma instituição, numa versão da ferramenta que ninguém usa hoje, produziu um achado sobre uma configuração que já não existe. Especificação do tratamento, versão e contexto fazem parte da afirmação, e não são o pano de fundo em torno dela.

## Conceitos conectados

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[ai-assisted-educational-research]] — Pesquisa educacional assistida por IA
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]

## Artigos conectados

- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: auditoria forense de 14 metanálises de AIED
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Efeitos de IA ajustados por viés de publicação em cerca de um terço do tamanho relatado
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT na educação: um efeito em busca de uma causa
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Critérios de inclusão usados como limiar de rigor, e heterogeneidade que muda com o modelo
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Quando a confiabilidade da correção automatizada encontra o teto de medição da tarefa
- [[verification-quality-reliance-calibration-genai-2026]] — O que a literatura de verificação e confiança não mede
- [[citation-errors-hallucinations-computing-education-2026]] — Referências fabricadas que chegaram à impressão em 2025–2026
- [[stanford-evidence-base-ai-k12-2026]] — Ganhos em prática, perdas em prova: o problema da remoção da assistência na matemática do K-12
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Efeitos de subgrupo cujos intervalos de confiança cruzam o zero
- [[chick-faculty-development-ethical-ai-2026]] — Condições habilitadoras: sinais de política, assinaturas pessoais, nenhum tempo
- [[ai-tutoring-quality-k12-methodologies-2026]] — Métricas de fornecedor com sua calibração e contagem de experimentos divulgadas
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Achados atrelados a versões de modelo, e a agitação do campo
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Contagens de evidência independente para 16 produtos de IA voltados a estudantes já em uso
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — Uma revisão pode quantificar o desvio de relato no próprio corpus
