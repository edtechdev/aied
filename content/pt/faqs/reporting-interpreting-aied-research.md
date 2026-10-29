---
title: "Quais são as melhores práticas para relatar e interpretar pesquisa em IA na educação?"
created: "2026-09-16T15:05:00-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
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

Seu manuscrito tem um número de destaque no resumo, e um revisor acabou de perguntar o que o grupo de controle realmente fez. Ou você é o revisor, segurando uma meta-análise cujo efeito agrupado é 0,67 e cuja seção de métodos ocupa uma página e meia. Ou seu departamento está escrevendo orientações sobre como a equipe deve relatar estudos com IA e quer algo mais específico do que "siga as normas".

Seis omissões decidem a maioria desses casos: qual sistema de IA foi usado, para que ele foi configurado, que papel pedagógico desempenhou, se humanos projetaram ou revisaram sua saída, o que a medida de resultado de fato capturou, e o que os autores fizeram quanto a viés, custo e limitações. "Não avaliável" é o veredito honesto quando elas faltam, e é um veredito diferente de "refutado".

## A versão resumida

**1.** Descreva a IA como um tratamento, não como um fornecedor. Modelo, versão, configuração, prompts, papel, e quem projetou ou revisou a saída.

**2.** Nomeie a justificativa pedagógica e a comparação ativa. Um nome de produto não é um método, e o ensino habitual não é um controle justo.

**3.** Faça a medida corresponder à afirmação, incluindo se o resultado foi tardio e sem ajuda.

**4.** Relate a incerteza que a análise realmente tem: efeitos dependentes, variância entre estudos, intervalos de predição, tamanhos de subgrupo, viés de publicação.

**5.** Valide todo julgamento automatizado, com um padrão-ouro nomeado e um árbitro nomeado.

**6.** Relate os contrapesos: governança, custo computacional, seu próprio uso de IA, resultados nulos, e apenas citações que você conferiu.

## Descreva a IA como um tratamento que alguém poderia reconstruir

Esta é a verificação que a maioria das submissões não passa. O referencial RAISE (*Reporting AI Studies in Education*, Allison 2026) é uma lista de 30 itens em dez domínios temáticos, e sua alegação diagnóstica é específica: as submissões rotineiramente omitem qual modelo foi usado, como ele foi configurado, que papel desempenhou, e se atores humanos projetaram ou revisaram suas saídas. Os revisores ficam então com quatro perguntas sem resposta. O que exatamente a IA estava fazendo? Ela era necessária? Isso é replicável? As afirmações sobre aprendizagem são críveis?

O RAISE vai da justificativa educacional à especificação no nível da API, à interação aprendiz-IA, à acessibilidade e ao ajuste cultural, aos participantes e ao contexto, ao envolvimento humano, ao desenho, à ética, à transparência e reprodutibilidade, até as limitações. Sua Matriz de Ética e Risco companheira cobre riscos à [[agency]] do aprendiz, à [[equity-in-ai-education|equidade]], à [[governance|governança]] de dados e à transparência algorítmica. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah e Gašević (2026)]] oferecem uma alternativa enxuta. O TEP-AIED funde Transparência, Ética e Pedagogia em uma única estrutura interdependente, fornece uma tabela de diretrizes mapeada para sete seções do artigo, e pede aos autores que acrescentem uma subseção de Método intitulada "Transparency, Ethics, and Pedagogy Considerations". A razão deles é prática: o RAISE é abrangente e granular demais para uso empírico rotineiro. A divulgação fica sob [[ai-use-disclosure]] e é o que torna verificáveis as afirmações sobre [[privacy|privacidade]] e [[ethics|ética]].

A justificativa educacional vem primeiro no RAISE porque a IA não é uma ferramenta neutra. O valor depende do alinhamento entre o problema de aprendizagem, uma justificativa teórica e o mapeamento dos objetivos para as medidas de resultado. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] constatou que todas, exceto duas, de 14 meta-análises auditadas definiram o tratamento como uma ferramenta, ChatGPT ou GenAI ou "IA" em geral. Um nome de produto não é uma [[pedagogy|pedagogia]]. Tratar a exposição ao ChatGPT como uma intervenção comum é comparável a fazer uma meta-análise dos efeitos do "papel".

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] fazem o mesmo argumento para estudos primários. Ao auditar um subconjunto das comparações por trás de uma meta-análise proeminente, encontraram que apenas 21% tinham um tratamento bem definido, um grupo de controle e uma medida de aprendizagem válida. O tamanho de efeito relatado (g = 0,7) também excedia o de [[intelligent-tutoring|sistemas de tutoria inteligente]] construídos especificamente para isso (0,66), e essa lacuna é um sinal de alerta: um tratamento que supera a tutoria construída para o fim provavelmente é um conjunto de coisas diferentes usando um único rótulo.

O teste é uma pergunta: um leitor competente conseguiria reconstruir sua intervenção apenas com a seção de métodos e obter a mesma coisa?

## Decida o que sua medida autoriza você a afirmar

Na auditoria evidencial de O'Neill sobre 46 estudos primários selecionados aleatoriamente, 28 (61%) apresentavam preocupações de validade. A incompatibilidade da variável dependente foi a mais comum (n = 15), seguida da incompatibilidade da variável independente (n = 11), problemas de desenho experimental (n = 7), problemas de extração de dados (n = 6), ausência de grupo de controle (n = 6) e atribuição não aleatória aos grupos (n = 6). Resultados multidimensionais foram rotineiramente agrupados como se fossem intercambiáveis, com notas de prova, qualidade do dever de casa, [[motivation|motivação]], [[self-efficacy|autoeficácia]], atitudes e [[student-engagement|engajamento]] colapsados em um único número de "desempenho acadêmico".

Dois hábitos de relato impedem isso. Declare qual construto o instrumento mede e que ele foi validado para aquela população; [[self-report-measures]] mostra onde as medidas baseadas em percepção divergem do comportamento, e [[assessment-validity|validade da avaliação]] cobre a validade de construto. Depois relate um resultado que não dependa da crença do aprendiz sobre o auxílio. O desempenho imediato na tarefa sob assistência não é um [[learning-gains|ganho de aprendizagem]], e o [[cognitive-offloading|descarregamento cognitivo]] é o mecanismo que mais plausivelmente separa os dois. A [[verification-quality-reliance-calibration-genai-2026|minirrevisão de 2026 de 493 registros e 14 estudos prioritários]] constatou que nenhum mediu o sucesso de verificação e a decisão de confiança seguinte em conjunto contra um padrão de qualidade da saída julgado de forma independente, e poucos olharam além do desempenho imediato para a retenção tardia ou a [[transfer-of-learning|transferência]].

Declare o teto explicitamente na discussão. Um estudo que mediu um quiz feito com a ferramenta aberta pode sustentar uma afirmação sobre desempenho assistido. Ele não pode sustentar uma afirmação sobre o que os estudantes aprenderam, e essa frase custa uma linha.

## Relate a incerteza que sua análise de fato tem

Para sínteses, relate o tratamento de efeitos dependentes, a variância entre estudos, os intervalos de predição e a avaliação de viés de publicação. O I² sozinho não faz o trabalho. O'Neill encontrou heterogeneidade relatada severa onde quer que ela fosse informada, de 77,2% a 94,4% em 13 meta-análises, com 12 acima de 80%, e nunca resolvida: nenhuma análise de moderadores atingiu o tamanho mínimo de subgrupo de dez estudos. Doze meta-análises trataram tamanhos de efeito dependentes do mesmo estudo como independentes, o que infla a evidência aparente. Apenas quatro relataram a variância entre estudos (τ²) e apenas duas um intervalo de predição, e ambos os intervalos incluíram zero. O viés de publicação não foi avaliado de forma válida em nenhum ponto do conjunto.

Números de heterogeneidade precisam do modelo anexado, porque o I² depende da precisão. [[limitations-in-aied-research|Limitações na Pesquisa em AIEd]] documenta uma síntese com I² = 82,98% sob um modelo de efeitos fixos e 15,75% sob efeitos aleatórios. Um leitor que recebe apenas o primeiro número não consegue dizer o quão inconsistente é o corpus. Relate τ² e um intervalo de predição ao lado dele, que também é a convenção que [[meta-analysis-systematic-review|a literatura de revisão]] pede.

Depois desconte o seu próprio número de destaque. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] agruparam 1.840 tamanhos de efeito de 67 meta-análises e constataram que, uma vez modelado o viés de publicação, o efeito médio cai para cerca de um terço da mediana publicada (SMD = 0,196 contra 0,67), com um intervalo de predição de -1,521 a +1,908. Esse intervalo abrange de dano substancial a benefício substancial para um estudo novo hipotético. É o número mais útil do artigo e o mais provável de ser retirado do resumo.

## Diga até onde a afirmação viaja

Justiça e escopo falham do mesmo modo: um efeito grande que significa menos do que aparenta. Onze das 14 meta-análises auditadas não estabeleceram nenhuma fronteira populacional, de modo que "estudantes" ia de crianças a residentes médicos. Um único curso, instituição, disciplina ou país não autoriza uma afirmação geral, e resultados de uma ferramenta raramente se transferem para outra.

Três explicações respondem pela maioria dos efeitos grandes, e cada uma é relatável. A novidade é uma. O tempo extra na tarefa é outra. A terceira é uma condição de comparação que recebeu ensino habitual em vez de um controle ativo. Relate o que o controle de fato fez, quanto tempo cada braço passou, e o quão nova era a ferramenta. Declare também a fronteira populacional, porque os efeitos diferem entre grupos de aprendizes e uma fronteira não declarada é o que permite que um único número agrupado represente todos eles; [[differential-effects-across-learner-groups|Efeitos Diferenciais entre Grupos de Aprendizes]] expõe a variação.

Trate a ferramenta como um alvo móvel. Sistemas proprietários mudam sem aviso, então uma descoberta está vinculada a uma versão do modelo, e o [[benchmark]] que encantou em um lançamento pode não se sustentar no seguinte. Versão e data de acesso pertencem à seção de métodos por essa razão, e não apenas por replicabilidade.

## Valide os julgamentos automatizados

A [[ai-ed-evaluation|avaliação em AIED]] delega cada vez mais a pontuação a modelos, o que torna o procedimento de validação parte do resultado e não um apêndice. O relato da Khan Academy sobre as métricas de seu [[intelligent-tutoring|tutor de IA]] informa que o engajamento cognitivo é pontuado por um juiz [[llm|LLM]] calibrado contra especialistas pedagógicos humanos com F1 de 0,83, e que os movimentos das métricas vieram de mais de 40 experimentos ao vivo em cinco meses, e não de avaliação offline ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] mostram que a discordância entre humanos e máquinas sobre a qualidade de [[formative-assessment|questões de pré-teste]] é sistemática e não aleatória, e que a operacionalização da rubrica importa mais que o prompting que começa pela justificativa.

A concordância com codificadores humanos é coisa distinta da qualidade, e relatá-la como se fosse qualidade é um alvo dos revisores. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] fizeram um especialista independente julgar 855 pares de conjuntos de códigos sem saber a origem. A concordância humano-LLM ficou em uma Jaccard média de 0,30 contra 0,52 para a concordância humano-humano, enquanto o verificador cego preferiu a codificação humana e a da máquina em taxas indistinguíveis (51,5% contra 48,5%, p = 0,537). Relate o alvo de calibração, o padrão-ouro e quem arbitrou a discordância. Esses três itens são o que permite ao leitor decidir quanto peso a pontuação automatizada pode carregar.

## Divulgue os custos e o seu próprio uso

Uma revisão de todos os artigos da conferência AIED 2025 encontrou um padrão de adoção de LLMs sem divulgação: a maioria dos projetos usava LLMs, e menos de um punhado relatou consumo de recursos ou pegada de carbono. Esse artigo fornece um método de código aberto com ferramentas de medição para hardware local e em nuvem, além de uma fórmula para estimar a despesa computacional de modelos de fronteira cujas contagens de parâmetros não são divulgadas. Seu argumento é que não relatar esses custos é, em si, uma preocupação ética. Governança de dados, consentimento, acessibilidade e ajuste cultural pertencem ao mesmo parágrafo (itens do RAISE; [[universal-design-for-learning|desenho universal para a aprendizagem]], [[accessibility|acessibilidade]]). [[equity-ethics-pedagogical-safety-research]] traz o tratamento mais completo.

Seu próprio uso de IA no processo de pesquisa precisa da mesma divulgação. A [[prisma-llm-ai-assisted-systematic-reviews-2026|análise PRISMA-LLM de Zabaleta e Lin]] sobre 888 artigos de automação de revisões mostra o quão desigual é esse relato. Desde 2023, 38,0% dos artigos sobre software e produtos não relataram nenhuma avaliação, contra 9,3% dos artigos sobre LLMs. A riqueza média do relato foi de 6,3 para artigos sobre LLMs e de 3,3 para artigos sobre software e produtos. 84,1% do uso de LLMs dependeu de sistemas proprietários ou hospedados, com apenas 4,9% de pesos abertos. O referencial deles separa a divulgação da implementação da avaliação sensível a consequências em cinco níveis de divulgação, o que é um modelo viável para descrever o que uma ferramenta fez dentro de uma revisão.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai e Chan (2026)]] acrescentam o retrato do lado do autor. De 28 pesquisadores de pós-graduação, 27 usaram GenAI em ideação, revisão de literatura, explicação, processamento de dados, programação, [[writing-education|escrita acadêmica]], edição e tradução. Eles calibraram o uso conforme os riscos e as normas disciplinares. As políticas de suas instituições tratavam do ensino e da avaliação, e não da prática de pesquisa, o que deixa a decisão sobre o relato para o autor.

## Publique o resultado nulo e confira cada citação

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verificaram 30 referências fabricadas em 14 artigos, com a contagem em um simpósio técnico subindo de 3 em 2025 para 17 em 2026, ou 2,3% dos artigos dos anais daquele ano. A redação assistida por LLM torna barato produzir uma citação inventada plausível, e é por isso que a conferência precisa acontecer antes da submissão e não depois da aceitação.

Os contrapesos dessa auditoria importam quando você a cita. A maioria das referências sinalizadas era benigna: 229 eram incompatibilidades de metadados da ACM em que o PDF estava correto, e 188 eram variantes bibliográficas válidas. A contagem de fabricadas é um limite inferior deliberado, e a maioria benigna não é um erro de arredondamento. Verifique cada entrada que você não pode conferir pessoalmente.

Relatar achados nulos e negativos é a outra metade de uma base de evidências honesta. Bartoš et al. encontraram evidência forte de resultados nulos suprimidos (todo teste de Egger p < 0,0001) e heterogeneidade extrema (τ = 0,869), sem nenhum subgrupo de resultado, área, nível ou papel da IA mostrando ganhos consistentes. Também não encontraram diferença entre estudos publicados antes e depois de janeiro de 2023, o que enfraquece a afirmação de que as ferramentas generativas modernas produzem ganhos especificamente.

## O que os pesquisadores erram sobre isso

**"Um tamanho de efeito é uma propriedade da modalidade."** Não há um efeito da IA na educação a relatar. Todas, exceto duas, das meta-análises auditadas definiram o tratamento por um nome de ferramenta, apenas 21% das comparações auditadas tinham um tratamento definido, um controle e uma medida válida, e o g agrupado de 0,7 ficou acima da tutoria inteligente construída para o fim, de 0,66. Um tamanho de efeito pertence a um desenho, a uma população e a uma ocasião de medida.

**"A média agrupada é o que vai acontecer com os meus estudantes."** A média descreve o conjunto de estudos, e nada nela fixa qualquer sala de aula. A média ajustada por viés é SMD = 0,196 e seu intervalo de predição vai de -1,521 a +1,908. A heterogeneidade relatada fica acima de 80% em 12 de 13 meta-análises, e nenhum subgrupo no conjunto maior mostrou ganhos consistentes. Uma mudança no nível do estudante não é identificável a partir de nenhum dos dois números.

**"Um resultado nulo significa que a ferramenta não funciona."** Um nulo é uma afirmação sobre um desenho com uma dada precisão, e a ausência de um efeito detectável em um estudo é um fato sobre aquele estudo. O SMD = 0,196 ajustado por viés veio de uma literatura em que todo teste de Egger foi significativo, então a leitura defensável do corpus é uma média pequena e incerta. Nenhum subgrupo de resultado, área, nível ou papel da IA no conjunto maior mostrou ganhos consistentes tampouco. O problema documentado nesta literatura é a supressão.

**"Um estudo resolve a questão."** As taxas-base dizem o contrário. 61% dos estudos primários examinados tinham preocupações de validade, um curso ou uma instituição não autoriza uma afirmação geral, e um sistema proprietário é um alvo móvel vinculado a uma versão do modelo. Um único estudo é um ponto de dados com um desenho anexado.

**"Alta concordância com codificadores humanos significa que o modelo está pontuando a coisa certa."** A concordância humano-LLM foi de 0,30 contra 0,52 para humano-humano, e o verificador cego não conseguiu distinguir os dois conjuntos de codificação, com 51,5% contra 48,5%. A concordância mede consistência com um codificador, e a qualidade é uma questão separada que precisa de um padrão-ouro e de um árbitro.

## As objeções que você vai ouvir

**"Os revisores querem novidade, não detalhe de método."** Os periódicos estão caminhando na direção oposta. O RAISE e o TEP-AIED dão aos editores um construto a exigir, e a subseção de Método do TEP-AIED é um ponto de entrada de baixo atrito. O detalhe de método é o que converte um artigo não avaliável em um artigo citável.

**"Não temos espaço."** Os cinco níveis de divulgação são níveis de relato e não níveis de risco, então a profundidade da avaliação pode ser uma ou duas frases. Versão, prompts e papel cabem em um parágrafo curto. Custo e governança cabem em uma frase de limitações.

**"Todo mundo relata assim."** Os números dizem que a norma é o problema: 61% dos estudos primários examinados com preocupações de validade, 12 de 13 meta-análises acima de 80% de heterogeneidade, 38,0% dos artigos sobre software e produtos sem nenhuma avaliação.

**"Nossa ferramenta é proprietária, então não podemos relatar o modelo."** Relate a versão, a data de acesso, a configuração, os prompts que você forneceu, o papel e as barreiras de proteção. Se o fornecedor não quiser dizer, essa restrição pertence às limitações como um limite para a afirmação.

**"Relatar nulos vai nos prejudicar."** Os nulos suprimidos são o mecanismo documentado por trás da média ajustada por viés de SMD = 0,196. Publicá-los é o que mantém o seu resultado positivo legível.

## O que fazer esta semana

**1.** Leia seu resumo em confronto com sua seção de métodos e apague toda afirmação que o método não pode sustentar. Uma frase sobre o teto da medida costuma bastar.

**2.** Acrescente o parágrafo de especificação: modelo, versão, data de acesso, configuração, prompts, papel, e quem projetou ou revisou a saída.

**3.** Tire o τ², o intervalo de predição e a avaliação de viés de publicação do apêndice e traga-os para os resultados, ou diga claramente que você não os calculou.

**4.** Escreva a fronteira populacional e a condição de controle na declaração de desenho, incluindo quanto tempo cada braço passou.

**5.** Verifique cada referência que você não leu pessoalmente, e confira o campo de autoria primeiro.

## Para onde ir agora

[[research-methods-aied|Métodos de Pesquisa em IA na Educação]] cobre as escolhas de desenho por baixo dessas decisões de relato, e [[limitations-in-aied-research|Limitações na Pesquisa em AIEd]] é o catálogo de modos de falha com os números anexados. [[interpreting-and-applying-aied-research|Interpretar e Aplicar a Pesquisa em AIEd]] é o lado do leitor do mesmo problema, [[does-ai-help-students-learn|a evidência sobre aprendizagem durável]] é o que a maioria dessas medidas tenta alcançar, [[evaluating-ai-interventions-methods]] cobre as medidas e os desenhos de comparação, e [[checking-whether-educational-ai-works]] é a versão mais curta da pergunta. Para as lacunas que esta literatura não preencheu, veja [[research-gaps-aied]].
