---
title: Investigação educacional assistida por IA
created: "2026-10-05T10:45:00-04:00"
updated: "2026-10-05T14:14:11-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
translation_of: concepts/ai-assisted-educational-research
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Síntese:** a investigação educacional assistida por IA é o uso da IA como instrumento do próprio trabalho acadêmico do campo — buscar e recuperar literatura, triar registros para revisões, codificar dados qualitativos, analisar dados, redigir e editar manuscritos, e a reflexão que pergunta o que essas ferramentas fazem ao conhecimento produzido. Ela é distinta da pesquisa *sobre* a IA na educação: os desenhos usados para estudar se a IA ajuda os estudantes pertencem aos [[research-methods-aied|métodos de pesquisa]], a avaliação dos sistemas de IA pertence à [[ai-ed-evaluation|avaliação de IA na educação]], e a leitura de um único estudo de AIED pertence a [[interpreting-and-applying-aied-research|como ler um estudo]]. Esta página cobre o fluxo de trabalho do próprio pesquisador e a investigação do praticante-pesquisador — a scholarship of teaching and learning e a pesquisa de sala de aula — e as apostas epistêmicas quando a automação entra em qualquer um deles. Sua evidência é escassa e recente: uma proposta de framework, um relato reflexivo de uma equipe de revisão, um pequeno estudo de grupos focais, dois estudos bibliométricos, um relato de workshop e estudos de caso de um único investigador. Ela descreve uma direção de viagem, e não uma prática estabelecida, e a vertente da pesquisa do praticante é a mais escassa de todas.

## Perguntas para refletir

- Quem conta como pesquisador aqui: o acadêmico financiado, o estudante de pós-graduação, o docente que estuda a própria sala de aula? Qual deles a evidência de fato descreve?
- Um filtro de IA excluiu um estudo da sua revisão. Quem responde por essa decisão — o fornecedor, a ferramenta, o protocolo ou você?
- Quando um modelo resume fontes que você não leu, que parte do trabalho acadêmico você parou de fazer?
- Um estudante simulado pode testar um tutor ao longo de muitos perfis. O que você verificaria antes de acreditar no veredito dele sobre estudantes reais?
- A investigação do praticante costuma ser local e pequena. Sua evidência deveria passar pelo crivo de um ensaio financiado, ou ser pesada de forma diferente porque o cenário é o ponto?
- Se a IA ajudou a redigir um artigo, o que deveria ser dito aos leitores, e onde essa divulgação deveria ficar?

## Introdução

A investigação educacional assistida por IA é o campo voltando as ferramentas de IA contra o próprio trabalho. O objeto de estudo não é um estudante usando um tutor de IA, mas um pesquisador usando um modelo para buscar, triar, extrair, codificar, analisar ou escrever. O que muda é o fluxo de trabalho do pesquisador e, mais silenciosamente, os critérios pelos quais sua produção conta como evidência.

Esta página deliberadamente não trata de pesquisa *sobre* a IA na educação. Perguntas sobre se um tutor de IA melhora a aprendizagem são endereçadas pelos [[research-methods-aied|métodos de pesquisa]], a avaliação dos sistemas de IA pela [[ai-ed-evaluation|avaliação de IA na educação]], e a leitura cautelosa de um único estudo por [[interpreting-and-applying-aied-research|como ler um estudo]] e pelas [[limitations-in-aied-research|limitações transversais da base de evidências]]. As duas literaturas são frequentemente confundidas, e as afirmações sobre ferramentas da segunda são frequentemente tomadas emprestadas para sustentar a primeira.

O escopo vai da busca de literatura passando por triagem, codificação, análise e escrita, e inclui a reflexão epistemológica que pergunta o que a automação faz ao conhecimento que um campo produz. Inclui também a pesquisa do praticante: a scholarship of teaching and learning e a investigação de sala de aula, em que um professor estuda a própria prática. Essa vertente é a parte mais fraca desta página, e as seções abaixo dizem isso em vez de alisá-lo.

## Como a IA entra no fluxo de trabalho da pesquisa

Os relatos de uso são mais consistentes do que a evidência de efeito. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai e Chan (2026)]] entrevistaram 28 estudantes de pós-graduação em pesquisa em sete grupos focais em uma única instituição e constataram que 27 dos 28 usavam IA generativa em algum ponto da pesquisa: ideação, revisão de literatura, explicação, processamento de dados, programação, escrita acadêmica, edição e tradução.

Seus participantes estavam calibrados, e não crédulos. Eles combinavam ferramentas a tarefas pelas apostas percebidas e pelas demandas intelectuais, usavam mais a IA em trabalho procedural de baixa aposta, e permaneciam cautelosos onde a contribuição acadêmica era central. Eles também mantiveram supervisão humana ao longo de todo o processo, tratando o modelo como um assistente que poderia estar "enganando" ou "completamente errado".

O achado de política é o prático. As orientações institucionais existentes endereçavam ensino, aprendizagem e avaliação, e os participantes as vivenciavam como abstratas e desalinhadas com a prática da pesquisa. Os autores propõem orientações voltadas ao pesquisador, construídas sobre um framework de letramento em IA em quatro dimensões, como um andaimento de desenvolvimento, e não como um livro de regras.

O estudo cobre uma única instituição, um grupo autosselecionado de 28 pessoas e relatos autorreferidos; os estudantes podem ter subnotificado o uso por razões de integridade. Ele descreve como um grupo capaz usa essas ferramentas, e não o que o uso produz.

## Busca e recuperação de literatura

Um relato de workshop mapeia uma agenda em vez de mensurá-la. O CHIIR 2026 Workshop on Generative AI and Academic Search reuniu pesquisadores em interação humana com a informação e recuperação, e seu relato descreve sistemas construídos para recuperação de documentos que agora resumem, recomendam, sintetizam e conversam — abalando o pressuposto de que o sistema localiza fontes enquanto a interpretação fica com o usuário.

Uma palestra-relâmpago testou como os modelos reconstroem acadêmicos. Contra a ground truth de OpenAlex e Google Scholar para 1.596 autores-semente em 10 disciplinas e 8 regiões globais, pesquisadores altamente citados foram reconstruídos a aproximadamente o dobro da taxa dos pares menos citados, testando DeepSeek R1, Llama 4 Scout e Mixtral 8×7B.

Um bibliotecário relatou uma "lacuna de confiança": os estudantes frequentemente confiavam demais na busca generativa, enquanto o corpo docente desconfiava dela, e workshops de sessão única foram julgados insuficientes para um letramento duradouro. O fio de desenho a que os participantes mais retornaram foi "friction" — manter os usuários engajados no trabalho crítico, por vezes desconfortável, de onde vem a aprendizagem.

O relato cobre um único evento autosselecionado e registra em larga medida opiniões, princípios de desenho e questões de pesquisa. Seus números pertencem a palestras individuais, e não ao workshop, e nada nele mostra que a busca acadêmica com IA melhora ou prejudica a aprendizagem.

## Triagem e automação de revisões sistemáticas

As revisões sistemáticas são onde a automação avançou mais, e onde seus limites aparecem. [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] refletem sobre a revisão de uma equipe interdisciplinar e relatam que a automação reduziu o peso procedural principalmente na triagem por resumos — ferramentas como ASReview, SWIFT-Review, Covidence, AIScreenR e MetaMate — enquanto a extração de dados, a reconciliação e a síntese permaneceram com revisores humanos. A mentoria e a discussão entre pares funcionaram como infraestrutura metodológica, e não como cortesia.

Sua conclusão é uma divisão do trabalho, e não uma entrega: atribua a automação à carga procedural, verifique cada saída, e mantenha as decisões interpretativas humanas. O relato é a reflexão de uma equipe, sem condição de comparação, de modo que suas estratégias são descritas, e não testadas.

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta e Lin (2026)]] quantificam o problema de relato ao longo de 888 artigos de automação de revisões com 14.726 itens de anotação. Desde 2023, 38,0% dos artigos de software e produto não relataram avaliação alguma, contra 9,3% dos artigos de LLM. A lacuna sobrevive à estratificação: em triagem e seleção, os artigos de software tiveram em média 3,2 itens substantivos de avaliação, com 39,3% sem relatar nenhum, enquanto os artigos de LLM tiveram em média 7,3 itens, com 3,8% sem avaliação.

Uma avaliação favorável não implicava adequação à delegação. Entre 118 artigos de LLM com avaliações apenas positivas, 52% ainda relataram ao menos uma preocupação de que o fluxo de trabalho ficava abaixo do nível exigido para seu papel. O acesso a modelos era esmagadoramente proprietário: 84,1% do uso de LLM dependia de sistemas proprietários ou hospedados, 11,0% era misto e apenas 4,9% era open-weight.

A partir desses padrões, os autores derivam o PRISMA-LLM, um framework de três camadas cujos cinco níveis de implementação são patamares de divulgação, e não patamares de risco. É uma proposta oferecida para teste, e não uma extensão oficial endossada pelo PRISMA Executive. O silêncio no nível do artigo, advertem eles, não é prova de que a validação esteja ausente — ela pode estar num relato de produto, num protocolo ou num repositório.

## Codificação e análise qualitativas

A análise qualitativa é o estágio em que a interpretação é o produto, o que torna a delegação mais difícil de justificar. A página de [[qualitative-research|Pesquisa qualitativa]] reúne a evidência do corpus sobre codificação assistida por IA, incluindo estudos que mostram que a concordância humano-modelo não é o mesmo que qualidade de codificação e que erros podem se cascatear pela análise temporal. Essa literatura trata o modelo como uma ajuda de escala, cujas saídas exigem verificação contra o juízo humano.

[[ai-methodologies-science-education-research-2026|Martin et al. (2026)]] descrevem diretamente a mudança de papel. À medida que modelos de codificação automatizada são aplicados, o pesquisador passa de codificar dados de estudantes a validar as saídas do modelo; quando modelos não supervisionados agrupam raciocínios, o algoritmo realiza a análise exploratória inicial. Os pesquisadores, argumentam eles, precisam cada vez mais de competências de ciência de dados ao lado das competências qualitativa, quantitativa e teórica.

Seu framework também fornece a verificação que importa aqui: a IA explicável pode revelar se a codificação automatizada rastreia compreensão semântica ou apenas palavras-chave. Uma pipeline de codificação que concorda com rótulos humanos pode ainda estar lendo a coisa errada.

## Análise de dados e apostas epistêmicas

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen e Graulich (2026)]] pressionam a própria produção de conhecimento do campo, e seu artigo é a espinha dorsal desta página. Fundamentados no relato de Hasok Chang (2004) da iteração epistêmica — estágios sucessivos de conhecimento que constroem uns sobre os outros rumo a objetivos epistêmicos —, eles traçam um paralelo com o desenvolvimento de aproximadamente 150 anos do termômetro e argumentam que o campo pode estar agora dentro de uma iteração comparável.

Sua preocupação central é epistêmica, e não técnica. O problema de mensuração nômica de Chang sustenta que medir uma quantidade exige uma lei que a relacione a algo observável, mas essa lei não pode ser testada empiricamente sem já conhecer a quantidade. Funções de mensuração derivadas de IA, que emergem de dados de treinamento e de otimização, e não do pesquisador, podem intensificar esse problema em vez de resolvê-lo, porque podem parecer precisas e preditivas enquanto permanecem opacas.

O framework tem sete fases: enquadramento do problema; instrumentação e mensuração; experimentação e inferência baseada em evidência; comparações e replicação; construção de normas e consenso; implementação e suas consequências; e refinamento contínuo. Os autores apresentam essas fases como dimensões analíticas que podem se repetir, se sobrepor ou estar ausentes, e não como uma sequência validada.

A comparabilidade é a fase com a aresta de equidade mais afiada. O princípio de Regnault exige que um instrumento dê a mesma leitura sob as mesmas condições e que instrumentos de um mesmo tipo concordem — mas a comparabilidade precisa se estender às populações de estudantes, e o aprendizado de máquina tende a codificar melhor as ideias canônicas do que as formas diversas pelas quais os estudantes expressam as ideias mais fracas.

Eles também nomeiam um problema de responsabilização. Os pesquisadores usam modelos pré-treinados cujos dados de treinamento, ajuste fino e objetivos podem não conhecer, acrescentando uma camada de dependência epistêmica; como esses sistemas emergem de redes sociotécnicas, a responsabilidade fica difícil de alocar — um "problema das muitas mãos".

A honestidade necessária é que o artigo não relata dados nem estabelece efeitos de aprendizagem. Ele não mostra que as metodologias de IA melhorem a pesquisa nem produzam conclusões mais válidas; essa comparação é colocada como trabalho futuro, e os autores admitem que sua hipótese "pode muito bem se mostrar incorreta".

## Escrita acadêmica, citação e integridade

A escrita é onde a assistência de IA é mais visível e onde suas falhas são mais consequentes, porque uma referência é uma reivindicação de responsabilização. [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] auditaram a ACM Digital Library inteira — 723.930 publicações e 15.872.533 referências — e rastrearam 113.588 referências de 5.225 artigos de educação em computação publicados a partir de 2021.

Eles verificaram manualmente 828 registros suspeitos e encontraram 30 referências contendo informação bibliográfica verificavelmente fabricada em 14 artigos, todos de 2025 e 2026. No SIGCSE Technical Symposium, a contagem subiu de 3 nos anais de 2025 para 17 nos de 2026, aparecendo em 2,3% dos artigos dos anais de 2026. Dezessete dos 30 eram híbridos, combinando um título real com autores fabricados ou incorretos.

Sua contagem é deliberadamente um limite inferior, e eles apresentam o problema como compartilhado, e não resolvido pelo software. Os autores deveriam verificar cada obra citada, especialmente quando IA generativa foi usada na escrita; os revisores não conseguem auditar cada referência, de modo que os veículos adotam verificações direcionadas; as editoras deveriam melhorar os metadados. A detecção automatizada herda os defeitos dos metadados que trata como ground truth.

Os efeitos de escala da escrita por IA aparecem num segundo estudo bibliométrico. [[ai-assisted-writing-research-teams|Wang et al. (2026)]] analisaram 147.074 publicações de periódicos do portfólio PLoS e Nature desde 2020 e associaram a escrita assistida por IA a equipes menores e com perfil mais júnior. Na mudança extrema de nenhuma para assistência total de IA, o tamanho da equipe foi 22,1% menor na PLoS e 45,5% menor na Nature (Poisson β = −0,250 e −0,607, ambos p < 0,01).

O impacto não sofreu de forma evidente. Cerca de 7,34% dos artigos da PLoS assistidos por IA e 7,40% dos da Nature alcançaram o top 5% de FWCI, acima dos dois grupos de comparação escritos por humanos, e comparações pareadas mostraram probabilidade 3,0% e 2,7% maior de top-5% de FWCI (ambos p < 0,01). Os dados são observacionais, de modo que os autores recusam afirmações causais fortes.

## Agentes persistentes no ambiente de pesquisa

Além de prompts únicos, agentes persistentes estão sendo embutidos no próprio espaço de trabalho da pesquisa. [[persistent-ai-agents-academic-research|Alzahrani (2026)]] relata um estudo de caso de um único investigador ao longo de 115 dias de um agente com memória durável, arquivos locais, ferramentas externas, rotinas agendadas e papéis delegados, rodando no espaço de trabalho de um médico-cientista.

Os resultados descritivos são grandes. A telemetria recuperável do agente principal continha 75.671 registros deduplicados ao longo de 96 dias ativos, uma fração de dias ativos de 0,835; o espaço de trabalho continha 502 arquivos relacionados a memória, 17 diretórios de agentes configurados e 57 arquivos de skills. Um subconjunto estrito de 25 dias em maio continha 627 eventos concluídos por modelos e 73.950.305 tokens registrados, dos quais 82,9% eram leituras de cache, com aproximadamente US$ 1.961 em gastos observados do sistema.

A principal contribuição do estudo é um arcabouço de mensuração — o PARE-M — construído porque os resultados que se espera que um agente persistente sustente, como governança e custo por artefato, são invisíveis para benchmarks episódicos. Seu achado negativo central é que o volume agregado de interação não demonstrou redução do insumo humano: à medida que memória e procedimentos se acumulavam, o escopo do trabalho delegado se expandia, de modo que o padrão mais forte é expansão de capacidade, e não substituição comprovada de trabalho.

As limitações são aquelas que um caso único autoobservado convida. Um único pesquisador foi usuário, desenhista, fonte de dados, analista e beneficiário, sem grupo de controle, sem período de linha de base e sem codificador independente para os eventos de governança.

## Estudantes simulados como instrumentos de pesquisa e avaliação

[[simulating-students|Simulação de estudantes]] é a página da base de conhecimento sobre a técnica e o fenômeno: como construir um estudante sintético cujo estado de conhecimento e cujos erros sejam fiéis o bastante para substituir uma pessoa. Esta página trata o mesmo aparato como um instrumento de pesquisa e avaliação — para que serve um estudante sintético quando uma intervenção, um instrumento, um benchmark ou um tutor precisa ser testado em escala ou em condições que estudantes reais não conseguem fornecer.

O uso mais claro é avaliar um tutor ao longo do tempo. [[educlaw-bench-pedagogical-llm-agents-2026|Lee et al. (2026)]] colocam um tutor-agente numa relação de 30 dias com um estudante simulado cujo domínio, oriundo de um modelo de rastreamento de conhecimento treinado com dados de estudantes reais, dirige suas respostas. Avaliando 10 adaptadores de agente, todo adaptador estabilizou em plateau dentro de 5–10 dias, muito abaixo de uma referência de aprendizagem ideal, resultado que uma avaliação de sessão única não alcança. Uma verificação de calibração contra a acurácia observada em sondagens abraça a diagonal (ECE 0,049, Brier 0,033 ao longo de 1,19 milhão de tentativas).

A fidelidade é a pré-condição, e ela é mensurável. [[beagle-grounded-learner-emulation-2026|Wang et al. (2026)]] relatam divergência comportamental dos rastros de estudantes reais de DKL = 0,31, contra 0,53 para a melhor linha de base, e num teste de Turing com 71 avaliadores seus rastros foram estatisticamente indistinguíveis de dados de estudantes reais (52,8% de acurácia, d′ = 0,15). A falha a evitar é o viés de competência: modelos com prompt resolvem a tarefa bem demais para substituir novatos.

O estado de crença é a parte fácil de falsificar. [[llm-student-simulation-misconception-faithfulness|Do, Sonkar e Sachan (2026)]] mostraram que, ao longo de sete modelos de 4B a 120B parâmetros, simuladores abandonavam uma concepção equivocada atribuída e resolviam novamente a partir do conhecimento interno a taxas quase uniformes sob feedback direcionado, desalinhado e genérico. Eles quantificam isso com o Selective Flip Score e elevam a fidelidade em até +0,56 por meio de treinamento, o que é o ponto: atribuir um prompt a uma persona não constrói um estudante.

Estudantes simulados também servem como bancada de teste controlada para os próprios instrumentos de avaliação. [[llm-judged-helpfulness-pedagogy-signal|Fan et al. (2026)]] parearam cada uma de três bases de tutor com um estudante simulado fraco fixo sob um protocolo pré-registrado e constataram que rubricas de utilidade de uso geral carregam pouco sinal pedagógico, com sete políticas abrangendo 2,3 pontos de pedagogia julgada dentro de uma faixa de 0,25 ponto de utilidade julgada. Turnos que revelavam a resposta foram seguidos de menos trabalho independente do estudante em todas as bases.

A ressalva pertence à página. O veredito de um simulador é tão bom quanto o simulador, e sua cobertura tende para os estudantes mais fáceis.

## Pesquisa do praticante: SoTL e investigação de sala de aula

Esta é a vertente que o corpus documenta menos. A scholarship of teaching and learning e a pesquisa de sala de aula são investigações do praticante — um professor estudando o próprio curso, muitas vezes em pequena escala, muitas vezes como autoestudo —, e as páginas reunidas aqui não fornecem um relato pesquisado do uso de IA nesse modo.

A evidência mais próxima é adjacente, e não no ponto. Os estudantes de pós-graduação em [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai e Chan (2026)]] estavam aprendendo a ser pesquisadores, e não estudando o próprio ensino. A equipe de [[scaffolding-systematic-reviews-2026|Wang et al. (2026)]] conduziu uma revisão interdisciplinar formal, e não um projeto local. Os estudos bibliométricos descrevem disciplinas e editoras, não salas de aula.

A declaração honesta é, portanto, uma lacuna, e não um achado. A investigação do praticante assistida por IA é plausivelmente difundida e quase não documentada neste corpus; uma página que apresentasse a evidência de automação de revisões e bibliométrica como se ela decidisse como um docente deveria usar IA para estudar o próprio ensino estaria exagerando.

O que pode ser transportado é uma disposição, e não um resultado: nomeie o papel da IA nos métodos, mantenha as decisões interpretativas humanas, e relate o que foi e o que não foi verificado.

## O que a evidência ainda não estabelece

- **Nenhuma comparação direta.** Martin et al. colocam a comparação entre métodos assistidos por IA e métodos tradicionais como trabalho futuro. Nenhum artigo-âncora mostra que uma metodologia de IA produza conclusões mais válidas.
- **Desenhos escassos em toda parte.** As âncoras são uma proposta de framework, o relato reflexivo de uma equipe, um relato de workshop, um estudo de grupos focais e bibliometria observacional. Nenhum é um ensaio controlado de um método assistido por IA.
- **Uma lacuna de relato, não uma auditoria da prática.** O PRISMA-LLM lê o silêncio no nível do artigo; um fluxo de trabalho sem avaliação em seu artigo ainda pode estar validado em outro lugar.
- **A pesquisa do praticante está sub-representada.** Apenas um punhado de páginas aqui menciona SoTL ou pesquisa de sala de aula, de modo que o corpus não consegue fundamentar afirmações sobre professores que estudam a própria prática.
- **Um alvo móvel.** As ferramentas melhoram mais rápido do que a publicação, de modo que um achado sobre um fluxo de trabalho de 2025 descreve uma geração de sistemas que talvez já não exista nessa forma.

## Citação

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.

## Conceitos conectados

- [[research-methods-aied]] — o guarda-chuva dos desenhos usados para estudar a IA na educação
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## Artigos conectados

- [[ai-methodologies-science-education-research-2026]] — um framework reflexivo de sete fases para como as metodologias de IA podem transformar a pesquisa em educação científica (Martin et al., 2026)
- [[scaffolding-systematic-reviews-2026]] — o relato de uma equipe de revisão interdisciplinar sobre mentoria e integração seletiva de IA (Wang et al., 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — como 28 estudantes de pós-graduação usaram GenAI ao longo do fluxo de trabalho da pesquisa, e as orientações que sugerem (Dai & Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — uma auditoria em escala de campo das referências fabricadas na literatura de educação em computação (Denny et al., 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — um framework de relato para revisões sistemáticas assistidas por IA, e a lacuna de responsabilização que documenta (Zabaleta & Lin, 2026)
- [[genai-academic-search-workshop]] — um relato do CHIIR 2026 workshop sobre IA generativa e busca acadêmica (Liu, Arguello, Hoeber et al., 2026)
- [[persistent-ai-agents-academic-research]] — um estudo de caso de um único investigador sobre um agente persistente num espaço de trabalho de pesquisa (Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — evidência bibliométrica de que a escrita assistida por IA acompanha equipes de pesquisa menores e mais jovens (Wang et al., 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — um benchmark de 30 dias que avalia agentes tutores contra um estudante simulado (Lee et al., 2026)
- [[beagle-grounded-learner-emulation-2026]] — um simulador neurissimbólico que reproduz a dificuldade genuína do novato (Wang et al., 2026)
- [[llm-student-simulation-misconception-faithfulness]] — por que simuladores abandonam uma concepção equivocada sob qualquer feedback, e como o treinamento resolve isso (Do, Sonkar & Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — uma auditoria pré-registrada que usa um estudante simulado fixo para testar se a utilidade mede pedagogia (Fan et al., 2026)

