---
title: "Quais são as melhores práticas para relatar e interpretar pesquisa em IA na educação?"
created: "2026-09-16T15:05:00-04:00"
updated: "2026-10-02T08:21:34-04:00"
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

# Quais são as melhores práticas para relatar e interpretar pesquisa em IA na educação?

Você está redigindo um estudo de IA na educação cuja afirmação já está correndo à frente de seu desenho, ou revisando um e decidindo se o número de destaque significa alguma coisa. De qualquer forma, as mesmas seis omissões decidem: qual sistema de IA foi de fato usado, para o que ele foi configurado, que papel pedagógico ele desempenhou, se humanos desenharam ou revisaram sua saída, o que a medida de desfecho realmente capturou, e o que os autores fizeram sobre viés, custo e limitações. Um autor que as omite submete um estudo que não pode ser avaliado; um revisor que não as procura não consegue distinguir uma intervenção desenhada de uma demonstração reciclada de ferramenta. "Inavaliável" — e não "sustentado" nem "refutado" — é o veredito honesto quando elas faltam.

O que está em jogo não é hipotético. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] auditou 14 metanálises revisadas por pares que afirmavam que a IA melhora a educação e descobriu que *nenhuma* fornecia uma base válida para as afirmações que avançava. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš e colegas (2026)]] agruparam 1.840 tamanhos de efeito de 67 metanálises e descobriram que, uma vez modelado o viés de publicação, o efeito médio cai para cerca de **um terço** da mediana publicada (SMD = 0,196 contra 0,67). [[citation-errors-hallucinations-computing-education-2026|Denny e colegas (2026)]] verificaram **30 referências fabricadas em 14 artigos de educação em computação**, todos publicados em 2025 ou 2026 — um defeito que alcança os leitores precisamente porque os revisores não podem verificar cada entrada de uma lista de referências. A disciplina de relato decide se a base de evidência do campo é utilizável sequer. Para as escolhas de desenho que a sustentam, ver [[research-methods-aied|Métodos de Pesquisa em IA na Educação]]; para o catálogo de modos de falha, [[limitations-in-aied-research|Limitações na Pesquisa em AIEd]]. Para o lado do leitor — o que um praticante faz com um artigo depois que ele existe — ver [[interpreting-and-applying-aied-research|Interpretando e Aplicando a Pesquisa em AIEd]].

## A versão curta

Seis movimentos decidem se sua afirmação sobrevive à revisão:

1. **Descreva o sistema de IA como um tratamento, não como um fornecedor.** Modelo, versão, configuração, provocações, papel, e se humanos desenharam ou revisaram a saída.
2. **Declare a justificativa pedagógica e a comparação ativa.** Um nome de produto não é um método; "o de sempre" (business-as-usual) não é um controle justo.
3. **Faça a medida corresponder à afirmação.** O que o instrumento captura, sua validação para esta população, e se o desfecho foi atrasado e sem auxílio.
4. **Valide todo julgamento automatizado.** Nomeie o padrão-ouro, o alvo de calibração e quem adjudicou a discordância.
5. **Relate a incerteza da análise, e não apenas sua estimativa pontual** — efeitos dependentes, τ², intervalos de predição, tamanhos de subgrupos, avaliação do viés de publicação.
6. **Relate os contrapesos**: procedimento de ética e governança, custo de computação e ambiental, seu próprio uso de IA, resultados nulos, e apenas citações que você verificou.

## Decida o que você vai dizer sobre o sistema de IA — e escreva de modo que alguém pudesse reconstruí-lo

Essa é a verificação que a maioria das submissões falha. O framework RAISE (*Reporting AI Studies in Education*, Allison, 2026) é um checklist de 30 itens ao longo de dez domínios temáticos, e sua afirmação diagnóstica é específica, e não retórica: as submissões rotineiramente omitem qual modelo foi usado (GPT-4, Claude, ou um algoritmo próprio), como ele foi configurado (provocações, parâmetros de ajuste fino), que papel ele desempenhou (gerador de feedback, coautor, tutor, avaliador), e se atores humanos desenharam ou revisaram suas saídas. Isso deixa os revisores com quatro perguntas sem resposta — "O que exatamente a IA estava fazendo?", "Ela era necessária?", "Isso é replicável?" e "As afirmações de aprendizagem são críveis?".

Ele vai da justificativa educacional até a especificação em nível de API, a interação aprendiz–IA, acessibilidade e adequação cultural, participantes e contexto, envolvimento humano, desenho, ética, transparência e reprodutibilidade, até as limitações. Sua **Matriz de Ética e Risco** companheira cobre riscos à [[agency|agência]] do aprendiz, à [[equity-in-ai-education|equidade]], à [[governance|governança]] de dados e à transparência algorítmica. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah e Gašević (2026)]] oferecem uma alternativa simplificada, o TEP-AIED, que dobra Transparência, Ética e Pedagogia em uma única estrutura interdependente, fornece uma tabela de diretrizes mapeada para sete seções de artigo, e pede aos autores que acrescentem uma subseção de Método intitulada "Transparency, Ethics, and Pedagogy Considerations" (Considerações sobre Transparência, Ética e Pedagogia) — porque, segundo eles, o RAISE é abrangente, mas granular demais para uso empírico rotineiro. A revelação fica sob [[ai-use-disclosure|revelação de uso de IA]] e é o que torna verificáveis as afirmações de [[privacy|privacidade]] e de [[ethics|ética]].

## Decida se seu tratamento é um método ou um produto

A justificativa educacional é o primeiro domínio do RAISE porque a IA não é uma ferramenta neutra: o valor depende do alinhamento entre o problema de aprendizagem, uma justificativa teórica, e o mapeamento dos objetivos para as medidas de desfecho. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] descobriu que todas, menos duas, das metanálises auditadas definiram o tratamento como uma ferramenta — ChatGPT, GenAI, "IA" — e que um nome de produto não é uma [[pedagogy|pedagogia]]; tratar a exposição ao ChatGPT como uma intervenção comum é comparável a metanalisar os efeitos do "papel". [[weidlich-chatgpt-effect-search-cause-2025|Weidlich e colegas (2025)]] fazem o mesmo argumento para estudos primários: ao auditarem um subconjunto das comparações por trás de uma metanálise proeminente, descobriram que apenas **21% tinham um tratamento bem definido, um grupo de controle e uma medida válida de aprendizagem**, e o tamanho de efeito relatado (g = 0,7) excedeu o de [[intelligent-tutoring|sistemas de tutoria inteligente]] construídos para fins específicos (0,66) — um sinal de alerta de que o "tratamento" era um molho secreto heterogêneo, e não um método nomeado.

O teste: um leitor competente conseguiria reconstruir sua intervenção a partir apenas da seção de método e obter a mesma coisa?

## Decida o que seu instrumento mede e o que a afirmação pode, portanto, dizer

Na auditoria de evidências de O'Neill sobre 46 estudos primários selecionados aleatoriamente, **28 (61%) apresentavam preocupações de validade**, e o descasamento de variável dependente era o mais comum (n = 15), seguido de descasamento de variável independente (n = 11), problemas de desenho experimental (n = 7), problemas de extração de dados (n = 6), ausência de grupo de controle (n = 6) e atribuição não aleatória de grupos (n = 6). Desfechos multidimensionais eram rotineiramente agrupados como se fossem intercambiáveis — notas de prova, qualidade das tarefas de casa, [[motivation|motivação]], [[self-efficacy|autoeficácia]], atitudes e [[student-engagement|engajamento]] colapsados em um único número de "realização acadêmica".

Dois hábitos de relato previnem isso. Declare que construto o instrumento mede e que ele foi validado para essa população: ver [[self-report-measures|medidas de autorrelato]] para onde as medidas baseadas em percepção divergem do comportamento, e [[assessment-validity|validade de avaliação]] sobre validade de construto. Depois, relate um desfecho que não dependa da crença do aprendiz sobre o apoio, porque o desempenho imediato na tarefa sob assistência não é [[learning-gains|ganho de aprendizagem]]: [[verification-quality-reliance-calibration-genai-2026|uma minirrevisão de 2026 com 493 registros e 14 estudos prioritários]] não encontrou nenhum que medisse o sucesso da verificação e a decisão de dependência subsequente juntos, contra um padrão de qualidade de saída adjudicado de forma independente, e poucos olharam além do desempenho imediato para retenção atrasada ou transferência. [[does-ai-help-students-learn|A evidência de aprendizagem durável]] segue mista, e o [[cognitive-offloading|descarregamento cognitivo]] é o mecanismo que mais plausivelmente separa as duas coisas.

## Decida como seus julgamentos automatizados foram validados

A [[ai-ed-evaluation|avaliação em AIED]] delega cada vez mais a correção a modelos, o que torna o procedimento de validação parte do resultado, e não um apêndice. O relato da Khan Academy sobre as métricas de seu [[intelligent-tutoring|tutor de IA]] informa que o engajamento cognitivo é pontuado por um juiz [[llm|LLM]] calibrado contra especialistas pedagógicos humanos com F1 de 0,83, e que os movimentos das métricas vieram de mais de 40 experimentos ao vivo em cinco meses, e não de avaliação offline ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi e colegas, 2026]]). [[machines-misread-pedagogical-quality|Tseng e colegas (2026)]] mostram que o desacordo humano–máquina sobre a qualidade de [[formative-assessment|questões de pré-teste]] é sistemático, e não aleatório, e que a operacionalização da rubrica importa mais do que a provocação com justificativa em primeiro lugar.

Concordância com codificadores humanos não é qualidade, e relatá-la como se fosse é um alvo de revisão. [[agreement-not-quality-llm-coding-verification|Liu e colegas (2026)]] fizeram um especialista independente julgar 855 pares de conjuntos de códigos às cegas quanto à fonte, descobrindo que a concordância humano–LLM (Jaccard médio de 0,30) ficou bem abaixo da concordância humano–humano (0,52), enquanto o verificador às cegas preferiu codificação humana e de máquina a taxas indistinguíveis (51,5% vs 48,5%, p = 0,537). Relate o alvo de calibração, o padrão-ouro e quem o adjudicou.

## Decida se a comparação é justa e até onde a afirmação viaja

Justiça e escopo falham da mesma forma: um efeito grande que significa menos do que parece. 11 das 14 metanálises auditadas não estabeleceram nenhuma fronteira de população, então "estudantes" abrangiam de crianças a médicos residentes; um único curso, instituição, disciplina ou país não autoriza uma afirmação geral, e resultados para uma ferramenta raramente se transferem a outra. Efeitos de novidade, tempo extra na tarefa e uma condição de comparação que recebeu instrução "do jeito de sempre" em vez de um controle ativo são as explicações usuais para um efeito grande — então relate o que o controle realmente fez, quanto tempo cada braço gastou, e quão nova era a ferramenta. Declare também a fronteira de população, porque os efeitos diferem entre grupos de aprendizes, e uma fronteira não declarada é o que permite que um número agrupado sirva para todos eles (ver [[differential-effects-across-learner-groups|Efeitos Diferenciais Entre Grupos de Aprendizes]]). Trate a ferramenta como um alvo móvel também: sistemas proprietários mudam sem aviso, então um achado está atrelado a uma versão de modelo, e o [[benchmark|benchmark]] que encantou em um lançamento pode não se sustentar no seguinte.

## Decida o que sua análise pode sustentar — e relate sua incerteza, e não apenas seu destaque

Para sínteses, relate o tratamento de efeitos dependentes, a variância entre estudos, os intervalos de predição e a avaliação do viés de publicação, e não apenas o I². O'Neill descobriu que a heterogeneidade relatada era severa onde quer que fosse informada (I² de 77,2% a 94,4% ao longo de 13 metanálises, 12 delas acima de 80%) e nunca resolvida (nenhuma análise de moderador atingiu o tamanho mínimo de subgrupo de dez estudos), que 12 metanálises trataram tamanhos de efeito dependentes do mesmo estudo como independentes — inflando a evidência aparente — e que apenas quatro relataram variância entre estudos (τ²) e apenas duas um intervalo de predição, ambos incluindo zero. O viés de publicação não foi avaliado de forma válida em lugar algum.

Como o I² depende da precisão, uma figura de heterogeneidade tem de viajar com seu modelo: [[limitations-in-aied-research|Limitações na Pesquisa em AIEd]] documenta uma síntese cuja heterogeneidade é I² = 82,98% sob um modelo de efeito fixo e 15,75% sob efeitos aleatórios, então um leitor que receba apenas o primeiro número não consegue dizer quão inconsistente o corpus é. Relate τ² e um intervalo de predição ao lado dele; ver [[meta-analysis-systematic-review|metanálise e revisão sistemática]] para as convenções do lado da revisão, e desconte o destaque de acordo — a média ajustada por viés de Bartoš e colegas foi SMD = 0,196, com um intervalo de predição indo de −1,521 a +1,908, abarcando desde dano substancial até benefício substancial para um hipotético novo estudo.

## Decida o que você revela sobre ética, custo, governança — e seu próprio uso de IA

Uma revisão de todos os artigos da conferência AIED 2025 encontrou um padrão de "adoção de LLM sem revelação": a maioria dos projetos usava LLMs, mas menos de um punhado relatava consumo de recursos ou pegada de carbono. Esse artigo fornece um método de código aberto, com ferramentas de medição para hardware local e em nuvem, mais uma fórmula para estimar o gasto computacional de modelos de fronteira cujas contagens de parâmetros não são divulgadas, e argumenta que não relatar esses custos é, ele mesmo, uma preocupação ética. Acrescente governança de dados, consentimento e acessibilidade/adequação cultural (itens do RAISE; [[universal-design-for-learning]], [[accessibility]]) — ver [[equity-ethics-pedagogical-safety-research]] para o tratamento mais completo dessas obrigações.

Seu próprio uso de IA no processo de pesquisa precisa da mesma revelação. A [[prisma-llm-ai-assisted-systematic-reviews-2026|análise PRISMA-LLM de Zabaleta e Lin]] de 888 artigos de automação de revisões mostra quão desigual é esse relato: desde 2023, **38,0% dos artigos de software/produto não relataram nenhuma avaliação** (contra 9,3% dos artigos de LLM), a riqueza média de relato foi 6,3 para artigos de LLM contra 3,3 para artigos de software/produto, e 84,1% do uso de LLM se apoiava em sistemas proprietários ou hospedados, com apenas 4,9% de pesos abertos. O framework deles separa a revelação de implementação da avaliação sensível a consequências ao longo de cinco camadas de revelação — um modelo utilizável para descrever o que uma ferramenta fez em uma revisão. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai e Chan (2026)]] acrescentam o quadro do lado do autor: 27 de 28 pesquisadores de pós-graduação usaram GenAI ao longo de ideação, revisão de literatura, explicação, processamento de dados, programação, [[writing-education|escrita acadêmica]], edição e tradução, calibrando o uso às apostas e às normas disciplinares, ao mesmo tempo que notavam que as políticas institucionais abordam ensino e avaliação, e não a prática de pesquisa.

## Decida o que fazer com resultados nulos e citações

Denny e colegas verificaram 30 referências fabricadas em 14 artigos, com a contagem verificada em um simpósio técnico subindo de 3 em 2025 para 17 em 2026 (2,3% dos artigos dos anais daquele ano) — e o rascunho assistido por LLM torna barata a produção de uma citação inventada plausível. Os contrapesos deles importam quando você cita essa auditoria: a maioria das referências sinalizadas era benigna — 229 eram descasamentos de metadados da ACM em que o PDF estava correto e 188 eram variantes bibliográficas válidas — então a contagem de fabricações é um limite inferior deliberado, e a maioria benigna não é um erro de arredondamento. Verifique cada entrada que você não puder conferir pessoalmente.

Relatar achados nulos e negativos é o outro lado da mesma moeda. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš e colegas (2026)]] encontraram forte evidência de resultados nulos suprimidos (todo teste de Egger com p < ,0001) e heterogeneidade extrema (τ = 0,869), sem nenhum subgrupo de desfecho, campo, nível ou papel de IA mostrando ganhos consistentes. Eles também não encontraram diferença entre estudos publicados antes e depois de janeiro de 2023, o que solapa a afirmação de que ferramentas generativas modernas produzem ganhos especificamente.

## As fraquezas documentadas do campo, em seus próprios números

As taxas de base contra as quais uma afirmação deve ser pesada:

- **Validade:** 28 de 46 estudos primários avaliados (61%) tinham preocupações de validade; apenas 21% das comparações auditadas tinham um tratamento bem definido, um grupo de controle e uma medida válida.
- **Heterogeneidade não resolvida:** I² de 77,2% a 94,4% ao longo de 13 metanálises, 12 acima de 80%, nenhuma análise de moderador atingindo o mínimo de dez estudos, efeitos dependentes tratados como independentes em 12, e apenas quatro sínteses fornecendo τ² contra apenas duas fornecendo um intervalo de predição.
- **Viés de publicação:** não avaliado ao longo das 14 metanálises auditadas; todo teste de Egger no conjunto maior foi significativo (p < ,0001), com τ = 0,869.
- **Referências:** 30 fabricações em 14 artigos, 17 em um simpósio de 2026 — 2,3% dos anais daquele ano.

## As objeções que você vai ouvir

**"Os revisores querem novidade, não detalhe de método."** Os periódicos estão indo na direção oposta: o RAISE e o TEP-AIED dão aos editores um construto a exigir, e a subseção de Método do TEP-AIED é um ponto de entrada de baixo atrito. O detalhe de método é o que converte um artigo inavaliável em um citável.

**"Nós não temos espaço."** As cinco camadas de revelação são níveis de relato, e não níveis de risco, então a profundidade da avaliação do pipeline pode ser uma frase ou duas. Versão, provocações e papel cabem em um parágrafo curto; custo e governança cabem em uma frase de limitações.

**"Todo mundo relata assim."** Essa é a constatação, não uma defesa — 61% dos estudos primários avaliados com preocupações de validade, 12 de 13 metanálises acima de 80% de heterogeneidade, 38,0% dos artigos de software/produto sem avaliação. A norma é o defeito.

**"Nossa ferramenta é proprietária, então não podemos relatar o modelo."** Relate versão, data de acesso, configuração, as provocações que você forneceu, papel e proteções. Se o fornecedor não disser, essa restrição pertence às limitações como um limite sobre a afirmação.

**"Relatar nulos vai nos prejudicar."** Os nulos suprimidos são o mecanismo documentado por trás da média ajustada por viés de SMD = 0,196; publicá-los é o que mantém seu resultado positivo legível.

## Checklist de pré-submissão

- **Relate:** o modelo, a versão, a configuração e as provocações, e o papel da IA no desenho. **Verifique:** você conseguiria reconstruir a intervenção a partir apenas da seção de método?
- **Relate:** a justificativa pedagógica e a condição de comparação ativa. **Verifique:** o tratamento é um método nomeado, e não um nome de produto?
- **Relate:** o que cada medida captura, sua validação para esta população, e o desfecho atrasado ou sem auxílio. **Verifique:** a afirmação de destaque corresponde à variável dependente?
- **Relate:** quem adjudicou os julgamentos automatizados, contra que padrão-ouro, com que concordância. **Verifique:** precisão ou concordância está sendo usada como se fosse qualidade?
- **Relate:** o tratamento de efeitos dependentes, τ², intervalos de predição, tamanhos de subgrupos de moderadores e avaliação do viés de publicação. **Verifique:** a heterogeneidade é citada com seu modelo e sua precisão?
- **Relate:** envolvimento humano, governança de dados, consentimento, acessibilidade e adequação cultural, mais custo de computação e ambiental. **Verifique:** as afirmações de ética se apoiam em procedimento descrito, e não em princípios afirmados?
- **Relate:** o uso de IA dentro do processo de pesquisa, ao longo de todas as cinco camadas de revelação. **Verifique:** o pipeline de revisão ou análise foi avaliado de alguma forma?
- **Relate:** resultados nulos, negativos e desconfirmadores junto dos positivos. **Verifique:** o tamanho de efeito está descontado pelo provável viés de publicação?

## O que de fato elevaria o padrão

Os remédios nesta literatura são institucionais, e não individuais. O'Neill recomenda transparência de dados obrigatória para metanálises — tabelas completas de tamanhos de efeito, estruturas de dependência, τ² e intervalos de predição — mais um gatekeeping mais forte por parte de revisores e editores e uma prática de retratação funcional, partindo do argumento de que essas falhas são produtos de um gatekeeping falho, e não erros isolados. O PRISMA-LLM propõe cinco camadas de revelação como níveis de relato, e não como níveis de risco, para que a profundidade da avaliação de um pipeline de revisão seja declarada com clareza; o RAISE e o TEP-AIED dão aos periódicos um construto a exigir nas submissões. Para terreno relacionado, ver [[research-gaps-aied|lacunas notáveis na literatura de pesquisa]], [[limitations-in-aied-research|Limitações na Pesquisa em AIEd]] e [[evaluating-ai-interventions-methods|medidas e métodos para avaliar intervenções relacionadas à IA]]. Um remédio de baixo custo fica com os autores: toda página de artigo desta base de conhecimento agora associa um estudo a uma seção **O que isso significa para a prática** e em geral uma seção de **Limitações**, então escrever o artigo de tal forma que ambas possam ser preenchidas honestamente — a ação que um praticante poderia tomar, e a restrição sobre ela — é um hábito de relato tanto quanto um hábito de escrita (ver [[interpreting-and-applying-aied-research|Interpretando e Aplicando a Pesquisa em AIEd]]).
