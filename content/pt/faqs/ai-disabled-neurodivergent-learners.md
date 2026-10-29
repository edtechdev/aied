---
title: "Como a IA pode apoiar estudantes com deficiência e neurodivergentes no meu curso?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, reducing-over-reliance]
weight: 65
type: faq
methods: [meta-analysis-systematic-review]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
research_method: [case study]
audience: [instructors, instructional designers]
level: [higher ed, k 12, special education]
translation_of: faqs/ai-disabled-neurodivergent-learners
source_updated: "2026-10-28T11:39:28-04:00"
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

A carta de acomodação nomeia um estudante, um curso e uma ferramenta da qual você nunca ouviu falar. Ou um estudante perguntou, razoavelmente, se pode continuar usando o software de transcrição de fala numa prova cronometrada, e a regra de IA do seu curso diz que nenhuma IA, de nenhum tipo, é permitida. Ou o setor de acessibilidade quer uma resposta até sexta-feira sobre licenciar uma ferramenta de leitura, e a evidência do fornecedor é o depoimento de outro campus.

A resposta que resiste aos três casos: comece pela barreira que a tarefa cria, use as ferramentas que foram efetivamente medidas e ensine tudo o que você adotar. Duas regras importam mais do que qualquer escolha de produto. Nomeie a transcrição e o OCR na sua política de IA como acomodações por direito próprio, e dê estrutura à tarefa em vez de pedir aos estudantes que a deduzam. Seja lúcido quanto à evidência: o número mais forte desta página vem de contextos de educação especial da PK-12 que usam majoritariamente IA anterior à generativa, e a literatura do ensino superior é um mapa do que já foi tentado.

## A versão curta

**1.** Escreva a barreira funcional na carta de acomodação antes do nome da ferramenta: leitura e escrita, gestão dos estudos, atenção ou comunicação social.

**2.** Comece pelo software instrucional estruturado, que é o que tem efeito medido, e leia o rótulo de confiança dele antes de comprar o chatbot que lhe ofereceram.

**3.** Decida se isto é uma mudança de design ou uma acomodação pessoal. Onde a barreira é compartilhada, mude o design, porque isso elimina a etapa de revelação.

**4.** Ensine a ferramenta. Uma acomodação fornecida sem instrução é o modo de falha que a jurisprudência pune.

**5.** Nomeie a transcrição e o OCR explicitamente na regra de IA, para que uma proibição redigida contra a redação generativa não retire do estudante o meio de produzir trabalho legível.

**6.** Faça o teste contra a barreira e não contra uma pesquisa de satisfação, e diga de antemão o que você vai considerar como funcionando.

## Comece pela barreira que a tarefa cria

A maior parte do que dá errado para estudantes com deficiência e neurodivergentes acontece no nível da tarefa: uma leitura que pressupõe impresso, um vídeo que pressupõe atenção sustentada, um trabalho em grupo que pressupõe regras sociais não ditas. Essas barreiras se repetem entre diagnósticos, então a pergunta útil é qual barreira funcional uma ferramenta remove, e uma pergunta de compra deveria ser formulada do mesmo jeito.

As categorias diagnósticas escondem isso. A revisão de escopo abaixo constata uma literatura dominada por acomodações individuais e ferramentas para um único neurotipo, organizadas em torno do diagnóstico formal, enquanto as diferenças funcionais que elas abordam atravessam neurotipos. Estudantes disléxicos tendem a se beneficiar de menos dependência de material apenas escrito. Estudantes autistas e estudantes com TDAH podem ambos viver flutuação frequente de foco, o que torna o desempenho sensível a estrutura consistente e a tempo suficiente para alternar entre tarefas. Uma ferramenta casada com um rótulo pode errar a barreira que o estudante da sua turma realmente tem.

A mesma cautela vale para estatísticas de grupo. [[differential-effects-across-learner-groups|Efeitos Diferenciais entre Grupos de Estudantes]] relata um efeito consideravelmente maior para estudantes com transtornos específicos de aprendizagem, deficiências intelectuais e de desenvolvimento, ou surdez, do que para estudantes com transtorno do espectro autista, e essa diferença não foi estatisticamente significativa entre os tamanhos de efeito.

## Use o que foi medido, e leia o rótulo

O resultado quantitativo mais forte desta página é também o mais geral, e vem com limites que você deveria levar para a decisão de compra.

[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang, Carter, Liu e Peng (2024)]] sintetizaram 29 estudos (quase)experimentais de intervenções baseadas em IA para estudantes com deficiência: 239 tamanhos de efeito de 41 amostras independentes, um efeito geral médio estatisticamente significativo sobre resultados de aprendizagem de g de Hedges = 0,588 (IC 95% [0,349; 0,826], p < 0,01) e alta heterogeneidade entre estudos. O desempenho acadêmico foi o maior subgrupo de desfecho (k = 80, g = 0,929) e as habilidades socioemocionais o menor (k = 144, g = 0,382). Software de computador, ou seja, reconhecimento de fala, sistemas especialistas e [[intelligent-tutoring|sistemas de tutoria inteligente]], teve desempenho forte (k = 74, g = 0,959) e [[educational-robotics|robôs]] desempenho moderado (k = 144, g = 0,509), enquanto a RV inteligente (g = 0,528) não foi significativa. Havia viés de publicação (β de Egger = 2,837, p < 0,001); o trim-and-fill reduziu a estimativa para g = 0,269, ainda significativa.

Todos os estudos eram da PK-12. 96,6% usavam instrução baseada em passos em contextos de educação especial ou clínicos, e a maioria usava IA antiga, baseada em regras, e não [[generative-ai|IA generativa]]. Isso sustenta a adoção cautelosa de software instrucional estruturado. Não se transfere para um chatbot de uso geral, e tratá-lo como se transferisse é o erro mais caro disponível nesta página.

Três resultados menores mostram o que uma única ferramenta pode fazer quando a barreira é estreita. Cada um foi testado com um punhado de estudantes, então trate-os como experimentos baratos e reversíveis, não como infraestrutura.

Para a atenção, [[adhd-video-segmentation-computing-education|Pimenova, Begel e colegas (2026)]] segmentaram vídeos instrucionais depois de gravados em blocos de instrução única com pausas fixas. Com 17 estudantes com TDAH e 10 sem, a medida melhorou todo mundo e levou os erros e hesitações dos participantes com TDAH à paridade. O efeito equalizador veio de uma transformação leve do material.

Para acesso à linguagem, [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al. (2026)]] acrescentaram perguntas Visuais (marcas de tempo em que a informação visual provavelmente é mal interpretada) e perguntas de Emoção (marcas de tempo em que estudantes Surdos e com Deficiência Auditiva relataram frustração) a um conjunto de base de [[llm|LLM]], produzindo 30 perguntas, dez por estratégia. Com 16 estudantes, a autoeficácia ficou em média em 5,70 (DP = 1,12) numa escala de sete pontos, e as perguntas visuais foram escolhidas com mais frequência por participantes Surdos do que por participantes com deficiência auditiva.

Para leitura e escrita, [[dyslexlens-dyslexic-learners-ai|Rezazadegan et al. (2026)]] mineraram as próprias discussões de fórum de estudantes disléxicos. Esses estudantes valorizavam a IA para apoio ao letramento e relatavam qualidade de saída irregular e falta de acomodações equitativas. A inconstância é ela mesma uma barreira: uma ferramenta com que não se pode contar acrescenta trabalho em vez de removê-lo.

O quadro do [[higher-ed|ensino superior]] é a parte mais fraca da evidência e a mais próxima do seu trabalho. [[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel, Heimann e Prilop (2026)]] triaram 766 registros de cinco bases até 40 estudos incluídos, publicados entre 2015 e 2025. A IA generativa apareceu em 15 dos 40 e a [[virtual-and-augmented-reality|realidade virtual]] em 11. A cobertura de barreiras era desigual: leitura e escrita (n = 13) e gestão dos estudos (n = 12) dominavam, atenção (n = 4) e comunicação social (n = 5) estavam negligenciadas, e apenas 6 estudos abordavam mais de uma barreira. A revisão excluiu por desenho contextos de [[k-12|educação básica]] e de instituições especializadas, então não diz nada sobre estudantes mais jovens. Use-a para ver quais barreiras já foram abordadas no seu nível e quais quase não foram tocadas.

## Decida se você está mudando o design ou a acomodação

O design universal elimina a necessidade de o estudante se identificar como alguém que precisa de provisão especial. A acomodação exige exatamente isso, e o estigma faz parte do custo. Então, quando uma barreira se revela compartilhada, a mudança de design é a melhor compra: ela alcança os estudantes que nunca se revelam.

O resultado da segmentação é o caso mais claro. Um vídeo cortado em blocos de instrução única com pausas fixas melhorou todos os estudantes do estudo, não só os com TDAH, e levou os erros e hesitações dos participantes com TDAH à paridade. Esse é o desfecho de design universal, obtido com uma edição e não com um produto.

O limite honesto: são 17 estudantes com TDAH e 10 sem, num único estudo, e nada nesta literatura lhe diz até onde generalizar a partir de um resultado de sala de aula, ou quando a necessidade de um estudante é distinta o bastante para exigir um arranjo individual. Esse julgamento fica com você e com o setor de acessibilidade.

## Ensine a ferramenta, e ponha o nome de alguém ao lado do ensino

A falha documentada é uma acomodação fornecida sem instrução. Em *W.A. v. Clarksville/Montgomery County School System* (2024), um estudante a quem se deu IA como acomodação se formou sem saber ler, e a corte entendeu que não havia sido oferecida educação pública gratuita e apropriada.

Duas coisas tornam essa falha provável, e ambas são institucionais. [[shin-ai-policies-sld-2026|Shin et al. (2026)]] usaram modelagem de tópicos baseada em LLM e duas rodadas de pesquisas Delphi com 17 especialistas, em 12 documentos de política de IA na educação dos EUA de 2015 a 2025. A preparação de educadores é um dos seus cinco temas validados, com 4 dos 36 itens, e os especialistas classificaram o empoderamento do estudante e o letramento em IA como os mais essenciais: esses estudantes devem aprender a usar IA com responsabilidade e independência, com a proteção contra a dependência excessiva ensinada como parte da mesma habilidade. Os autores do [[ludia-udl-ai-thought-partner-2026|LUDIA]] nomeiam o obstáculo como o "abismo entre saber e fazer": a orientação existe em abundância, está escrita em termos gerais, e uma barreira é sempre particular a esta sala, nesta semana.

O que a página não pode lhe dar é um protocolo de formação. Não existem diretrizes formais baseadas em evidências para ajudar educadores ou famílias a implementar IA para esses estudantes, então a quantidade de instrução, a sua sequência e quem a oferece são decisões de julgamento. A jurisprudência estabelece o piso, não o padrão: o estudante precisa terminar capaz de fazer a coisa, e alguém precisa responder por levá-lo até lá.

## Escreva transcrição e OCR na regra de IA pelo nome

[[wright-transcription-not-generation-2026|Wright (2026)]] argumenta que regras que tratam todo "uso de IA" da mesma forma são excessivamente inclusivas, porque não separam a transcrição de fala em texto e o OCR da redação generativa. Estudantes com condições que afetam o controle motor fino, a legibilidade da escrita à mão ou a precisão na digitação dependiam de produtos autônomos de voz para texto, como o Dragon NaturallySpeaking, e de OCR autônomo, vários deles descontinuados ou degradados, com a transcrição movida por IA preenchendo a lacuna funcional.

Uma regra escrita como "sem IA" pode, portanto, retirar do estudante o principal meio de produzir trabalho legível. Ninguém mediu ainda a escala dessa substituição, o que é uma razão para ser explícito em vez de esperar pelo número. Nomeie a transcrição e o OCR como acomodações na política, ao lado das proibições de redação generativa, para que as duas questões sejam decididas em separado. A exposição que isso cria para a instituição pertence a [[legal-issues-and-risks|Questões e Riscos Legais]].

Este é um ajuste de uma linha na maioria dos documentos e é a linha de maior consequência da página.

## Dê estrutura onde a tarefa a pressupõe

Estrutura é a intervenção mais barata aqui e a que mais costuma ficar de fora do plano. [[neurodivergent-computing-students|Zastudil et al. (2026)]] entrevistaram 24 estudantes neurodivergentes de computação (autistas e/ou com TDAH) e 20 colegas neurotípicos, com quatro entrevistas de acompanhamento. O grupo neurodivergente se sentia desconfortável com tarefas não estruturadas ou ambíguas e preferia fortemente equipes menores que trabalham juntas de forma consistente, com papéis explicitamente definidos, lidando com isso ao se autosselecionar para papéis e ao se revelar estrategicamente.

São dados de preferência, não um estudo de efeito, e são também o briefing de design que os estudantes escreveram para si mesmos. O trabalho mediado por [[agentic-ai|IA]] carrega uma versão específica do risco, porque o modelo de interação de uma ferramenta pode reproduzir a mesma ambiguidade estrutural que a tarefa já tinha. Verifique o que a ferramenta pede que o estudante decida sozinho antes de acrescentá-la a uma tarefa.

## Faça o teste contra a barreira, e anote o que você contou

Efeitos agregados dão uma direção. Não dizem se a ferramenta funciona para o estudante da sua turma na semana que vem, então qualquer teste precisa de uma medida escolhida antes de começar.

Três cautelas devem moldar essa medida. A primeira é que a ordenação de subgrupos é sugestiva e não estabelecida: nenhum moderador de qualquer tipo alcançou significância na meta-análise de 2024, então rankings como agentes ensináveis (g = 1,100) à frente de coaches socioemocionais (g = 0,336), ou interação diádica à frente da triádica (g = 0,973 contra g = 0,385), não devem ser tratados como resolvidos. A direção do efeito está sustentada; o tamanho, o desenho ótimo e a durabilidade de qualquer ganho não estão.

A segunda é que este corpus descreve implantações e percepções mais do que aprendizagem medida. Atenção (n = 4) e comunicação social (n = 5) são as barreiras menos estudadas, e a escassez de desenhos (quase)experimentais e longitudinais é a razão de o trabalho no ensino superior ser uma revisão de escopo e não uma meta-análise. A cobertura se inclina para a graduação e para o Norte Global, a busca foi de trabalhos revisados por pares em inglês, e estudantes de pós-graduação estão sub-representados. Engajamento e satisfação são indicadores fracos.

A terceira é que uma ferramenta que resolve uma barreira pode deixar outra. Confira a ferramenta contra a dificuldade específica que o estudante relata, seja leitura e escrita, gestão dos estudos, atenção ou comunicação social, e avalie contra essa dificuldade e não contra o que o estudante sentiu a respeito do produto. Pergunte ao estudante o que contar. Os participantes de Zastudil et al. e os frequentadores de fórum de Rezazadegan et al. descrevem suas necessidades com mais precisão do que os produtos feitos para eles.

O que você não vai encontrar aqui é um instrumento validado para medir uma barreira num único curso, ou evidência sobre quanto tempo um teste deve durar. Ambas são lacunas da literatura, não falhas da sua busca, e vale anotá-las nas notas de revisão.

## Compre pela barreira, e recuse o padrão caro

Dois requisitos de compra saem direto da revisão: declarar o design universal e o desenvolvimento participativo como condições, e construir ferramentas com estudantes neurodivergentes, não para eles. A própria amostra da revisão mostra como isso é raro, com apenas 3 dos 40 estudos tratando o ambiente ou os colegas neurotípicos como objeto de intervenção.

Depois, faça o orçamento com honestidade. Tecnologia assistiva exige dispositivos e conectividade, e ferramentas que são gratuitas num piloto rotineiramente migram para trás de um paywall. A [[virtual-and-augmented-reality|realidade virtual]] é a opção mais intensiva em recursos do conjunto, e o campo está concentrado no Norte Global, então suas ferramentas mais imersivas são as menos escaláveis. [[shin-ai-policies-sld-2026|Shin et al.]] apontam diretamente a [[digital-divide|exclusão digital]]: o preço das ferramentas avançadas de IA pode ampliar as disparidades entre escolas mais ricas e mais pobres, junto com o viés algorítmico e as lacunas na formação de professores.

O LUDIA é uma versão trabalhada da alternativa de baixo custo, e seus autores são incomumente francos sobre o que não demonstraram. Ele conecta educadores ao [[universal-design-for-learning|Desenho Universal para a Aprendizagem]] enquanto uma decisão de design ainda está aberta, e remove barreiras de acesso pela arquitetura: sem custo, sem contas ou chats armazenados, conformidade com WCAG 2.2 Nível AA e 13 idiomas traduzidos automaticamente, ainda que as versões não inglesas possam carregar os pressupostos do inglês de onde vieram. É um parceiro de pensamento e não um motor de soluções, e os autores afirmam não ter evidência de que ele melhore a aprendizagem. Também nomeiam um limite que pertence a todo plano de implantação: o viés de automação significa que o educador mais propenso a aceitar uma sugestão ruim é justamente o que confia que a ferramenta conhece o Desenho Universal para a Aprendizagem. Ninguém testou suas saídas quanto a viés cultural ou linguístico tampouco.

Mantenha uma segunda falha em vista. A dependência excessiva de chatbots e a sobrecarga cognitiva dos ambientes imersivos estão documentadas como efeitos de inversão, em que acrescentar a tecnologia reduz a aprendizagem. De uma ferramenta que apenas reproduz o ensino existente em forma digital deve-se esperar [[learning-gains|ganhos de aprendizagem]] limitados.

## O que os professores entendem mal sobre isso

Um diagnóstico me diz qual ferramenta comprar. As barreiras atravessam diagnósticos, e uma ferramenta casada com um rótulo pode errar a barreira na sala. Pergunte o que a tarefa pressupõe: impresso, atenção sustentada, regras sociais não ditas, uma maneira particular de produzir texto.

Uma acomodação é um arranjo pessoal, então a solução pertence ao estudante. Algumas são, e as que valem generalizar são as que você teria desenhado de qualquer forma. A segmentação ajudou todos os estudantes do seu estudo. Mudanças de design eliminam a etapa de revelação e, com ela, o estigma.

Engajamento e satisfação mostram que a ferramenta funcionou. Mostram que o estudante gostou dela. Este corpus é majoritariamente de implantações e percepções, e apenas 6 dos 40 estudos do ensino superior atendiam a mais de uma barreira, então um estudante satisfeito ainda não é evidência de que uma barreira caiu.

A ferramenta carrega o apoio, e o ensino é um extra. A jurisprudência trata uma ferramenta não ensinada como a falha, e os especialistas em política classificaram o empoderamento do estudante e o letramento em IA como seu tema mais essencial. Orce o tempo de ensino junto com a licença.

## O que vai voltar contra você

**"Não podemos exigir uma ferramenta de todos."** Onde a ferramenta é um recurso de design, exigi-la é o ponto. A segmentação de vídeo com pausas fixas melhorou todos os estudantes e levou os erros e hesitações dos participantes com TDAH à paridade, que é o desfecho de design universal que elimina a necessidade de revelação. Padrões acessíveis carregam a mesma lógica: ferramentas de leitura em voz alta, OCR e nivelamento de texto aparecem repetidamente nos itens de política validados por Shin et al. O corpus deles mostra também o quanto a política precisa caminhar, já que apenas 2 dos 12 documentos tratam especificamente de transtornos específicos de aprendizagem, enquanto 18 tópicos presentes em políticas gerais de IA ou sobre outras deficiências, entre eles proteção de dados, gestão de risco legal e diretrizes éticas, estão ausentes das políticas específicas para transtornos de aprendizagem.

**"Legendas e tradução não são apoio acadêmico."** Legendas são um começo, não o todo do acesso à linguagem. As perguntas Visuais e de Emoção de Chen et al. existem porque uma transcrição sozinha deixa o estudante Surdo reconstruindo um contexto que o vídeo nunca declarou. A classificação dos especialistas em política também discorda da objeção. Seus 36 itens validados se distribuem em cinco temas, com aprendizagem inclusiva e personalizada o maior, com 11 (30,56%), e ética, equidade e inclusão com 9 (25,00%), e preparação de educadores com 4 (11,11%), mas os especialistas classificaram empoderamento do estudante e letramento em IA como os mais essenciais dos cinco, com 6 itens (16,67%), no mesmo nível de avaliação e pesquisa.

**"Os estudantes precisam ser independentes."** Independência é para isso que serve a instrução, e é por isso que a ferramenta sem o ensino é a falha. O tema de preparação de educadores de Shin et al. existe pela mesma razão. A escala da necessidade é fácil de subestimar: cerca de 240 milhões de crianças no mundo vivem com deficiência, aproximadamente metade delas fora da escola em países de baixa e média renda, e cerca de um terço dos professores nos sistemas da OCDE relata não ter as competências para apoiar estudantes com necessidades específicas. Nos Estados Unidos, o Assistive Technology Act (2004) e o IDEA (2004) colocam a avaliação de tecnologia assistiva dentro de cada Programa de Educação Individualizada e exigem educação pública gratuita e apropriada, e ainda assim nenhuma diretriz formal baseada em evidências ajuda educadores ou famílias a implementar IA para esses estudantes. Independência construída sobre uma ferramenta não ensinada é o que a jurisprudência pune.

**"Não temos como pagar."** Então recuse o padrão caro. A realidade virtual é a opção mais intensiva em recursos do conjunto, e as ferramentas mais imersivas do campo são as menos escaláveis. Uma ferramenta gratuita e preservadora da privacidade que melhora a conversa de design, com as ressalvas dos autores lidas primeiro, é uma compra inicial melhor do que um headset.

**"A evidência é fina demais para agir."** Fina, e não vazia. A meta-análise de 2024 dá uma direção com um intervalo amplo e uma correção de viés de publicação que corta a estimativa em mais da metade, os três estudos de ferramenta única são pequenos, e a revisão do ensino superior mede cobertura e não efeito. O que isso sustenta é o movimento barato e reversível: uma mudança de design, uma acomodação nomeada, um teste com uma medida acordada de antemão. Adiar a decisão também é uma decisão, e deixa o estudante à sua frente com o que quer que o arranjo padrão ofereça.

## O que fazer nesta semana

**1.** Para cada pedido de acomodação na sua mesa, escreva a barreira funcional ao lado do nome da ferramenta, e verifique se a ferramenta aborda essa barreira e não o diagnóstico.

**2.** Pergunte se a barreira é compartilhada pela turma inteira. Se for, mude o design: divida o vídeo em blocos, corte a ambiguidade, ative a leitura em voz alta e dê à tarefa a estrutura que faltava.

**3.** Acrescente transcrição e OCR à regra de IA pelo nome, para que a proibição da redação generativa e a acomodação para produzir texto sejam decididas em separado.

**4.** Ponha um nome e uma data ao lado do ensino: quem mostra a ferramenta ao estudante, quando, e quem verifica se ela está funcionando.

**5.** Combine a medida com o estudante antes de o teste começar, e registre o resultado nas notas de revisão, inclusive no caso em que a resposta é que não ajudou.

## Para onde ir agora

[[universal-design-for-learning]] cobre a abordagem de design que previne barreiras antes que apareçam, [[assistive-technology]] a camada de ferramentas que o estudante usa, [[accessibility]] se um formato pode ser percebido e operado de todo, e [[neurodiversity]] a lente que trata a diferença como diversidade e não como déficit, todas sob o guarda-chuva de [[inclusive-learning]]. [[reducing-over-reliance]] cobre os efeitos de dependência excessiva e de inversão que decidem se uma ferramenta continua ajudando, e [[equity-ethics-pedagogical-safety-research|incorporar equidade, acessibilidade, privacidade, ética e segurança pedagógica à pesquisa em IAED]] cobre as obrigações do lado da pesquisa.
