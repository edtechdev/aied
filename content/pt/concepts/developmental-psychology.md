---
title: Psicologia do desenvolvimento
created: "2026-11-12T14:20:00-05:00"
updated: "2026-11-14T08:32:58-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/developmental-psychology
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [cognitive-psychology, early-childhood-elementary-ai-education, parents-and-families, metacognition, executive-function, self-regulated-learning, scaffolding, cognitive-offloading, well-being, creativity, ai-literacy, longitudinal-research, research-methods-aied]
connected_articles: [guo-ai-literacy-developmental-paces-2026, ai-toys-child-development-2026, clara-developmental-appropriateness-children-stories-2026, niu-genai-children-creative-thinking-cognitive-development-review-2026, vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026, genai-reliance-executive-functioning-2026, horowitz-kraus-children-chatgpt-cognitive-control-2026, adolescent-chatbot-self-disclosure-help-seeking-2026, ai-connectedness-adolescent-mental-health-2026, ai-play-framework-early-childhood-2026, age-tiered-ai-literacy-guidebooks-2026, preservice-early-childhood-genai-magnetism-2026, pergantis-chatbots-executive-functions-systematic-review-2025, sharma-chatgpt-dependency-executive-dysfunction-stress-2026]
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Psicologia do desenvolvimento** — o estudo de como as capacidades cognitivas, linguísticas, sociais, emocionais e motivacionais mudam com a idade, e das restrições que essas mudanças impõem ao que um aprendiz pode fazer e ao apoio de que precisa. Na [[ai-education|IA na educação]], ela fornece a pergunta por trás de toda afirmação sobre idade: não "esta ferramenta funciona?", mas "funciona para uma mente neste estágio, fazendo esta coisa específica?". Explica por que a mesma ferramenta de [[generative-ai|IA generativa]] é um auxílio de estudo razoável para alguém de 20 anos e um risco ao desenvolvimento para uma criança de 7 anos, e serve para marcar onde essas afirmações se apoiam em hipóteses, e não em resultados medidos.

## Perguntas para refletir

- Dois aprendizes usam o mesmo chatbot para a mesma tarefa. O que a psicologia do desenvolvimento levaria você a verificar antes de considerar a interação apropriada: apenas a idade, ou algo mais específico?
- "Adequado à idade" é usado o tempo todo nas orientações sobre IA. Que evidência você precisaria antes de aceitar esse rótulo, e em que ele costuma se apoiar, em vez disso?
- A função executiva, a [[metacognition|metacognição]] e a [[self-regulated-learning|autorregulação]] se desenvolvem de forma desigual. Se uma ferramenta regula pelo aprendiz, qual capacidade é apoiada e qual é deslocada?
- A maioria dos estudos aqui mede os aprendizes uma única vez. O que uma única medição pode dizer sobre o desenvolvimento, e o que não pode?
- O brincar é um meio de desenvolvimento, não uma pausa na aprendizagem. Quando um brinquedo de IA assume a narrativa, o que a criança ainda está praticando?
- A adolescência é enquadrada tanto como janela de risco quanto como oportunidade de design. Qual das duas a evidência sustenta?

## Introdução

A psicologia do desenvolvimento está por baixo de vários conceitos vizinhos sem ser nenhum deles. A [[cognitive-psychology|psicologia cognitiva]] explica os mecanismos (memória de trabalho, carga, viés, recuperação), mas nada diz sobre como esses mecanismos mudam com a idade. [[early-childhood-elementary-ai-education|Educação infantil e anos iniciais]] é uma página de nível: cobre a pré-escola e os anos iniciais do ensino fundamental como contextos, e sua nota de escopo diz explicitamente que suas preocupações são específicas do desenvolvimento, sem oferecer a explicação sobre ele. [[parents-and-families|Pais e famílias]] cobre o lar como contexto. O que nenhuma delas faz é tratar o próprio desenvolvimento como o quadro explicativo: a razão pela qual um design que serve a uma faixa etária falha em outra, e a razão pela qual afirmações sobre efeitos de longo prazo em uma mente em desenvolvimento são tão difíceis de fazer.

Esse quadro importa mais na educação com IA do que na maioria dos campos, porque as ferramentas de IA são tipicamente avaliadas com adultos e depois levadas a faixas etárias mais jovens. Um chatbot testado com universitários chega a uma criança de 12 anos por meio de uma licença escolar; um aplicativo de geração de histórias projetado para leitores iniciantes chega às salas de aula; brinquedos de IA entram no brincar antes que alguém pergunte o que eles fazem com o brincar. As revisões seguem chegando à mesma conclusão por caminhos diferentes: a evidência sobre o desenvolvimento é escassa, os mecanismos são plausíveis, e as orientações estão sendo escritas antes da pesquisa.

## Estágios e capacidades como restrições de design

O uso mais concreto da psicologia do desenvolvimento aqui é como restrição ao design, não como rótulo sobre os aprendizes. O CLARA, um sistema construído na Universidade de Auckland, recusa-se a prever diretamente a idade de uma criança. Ele decompõe uma história em demandas cognitivas, linguísticas e socioemocionais usando uma taxonomia do desenvolvimento com 122 rótulos, e então agrega os rótulos ativados em uma estimativa de estágio de desenvolvimento. A escolha de design é o argumento: o que torna um texto adequado não é um número, mas as demandas específicas que ele impõe a capacidades específicas.

Recursos escalonados por idade fazem o mesmo argumento pelo lado do currículo. O AI Learning Application Guidebook de Taiwan foi construído em duas edições: uma para aprendizes de 9 a 12 anos, com atividades apoiadas por andaimes (scaffolding), baseadas em plataforma e não generativas, e uma edição avançada para 13 a 18 anos, com aplicações autênticas, raciocínio ético e uso supervisionado de IA generativa. A divisão por faixas diz respeito ao desenvolvimento em si, não apenas à dificuldade: a edição para os mais jovens evita as ferramentas generativas em vez de simplificá-las.

O risco em todos esses esquemas é que as faixas se tornem aproximações grosseiras. Uma criança de cinco anos e um adolescente de quinze diferem em muito mais do que a distância entre dois rótulos de idade, e uma única faixa pode conter crianças cujas capacidades divergem por anos.

## A função executiva como construto operante

Onde a evidência se torna específica sobre mecanismo, ela costuma recair sobre a função executiva: os processos que planejam, inibem, alternam e retêm informações por tempo suficiente para usá-las. A pergunta sobre o desenvolvimento é quais desses processos uma dada ferramenta apoia, e se o apoio sobrevive à ferramenta. A separação entre compensação, andaime e desenvolvimento feita por Vasileiou e colegas é a formulação mais precisa dessa distinção, e o relato de Klarin sobre a dependência adolescente nomeia o modo de falha: as capacidades sendo deslocadas ainda estão em formação. O construto, sua medição e a evidência sobre dependência agora têm página própria, [[executive-function|função executiva]].

## A adolescência como caso distinto

A adolescência recebe tratamento próprio porque as capacidades em questão são tanto sociais quanto cognitivas. O levantamento de Hu e colegas com 2.023 adolescentes nos Estados Unidos e em Hong Kong os classifica pelo que eles conversam com chatbots, e não pelo quanto: uma orientação instrumental voltada à resolução de problemas e à informação, uma orientação de autorrevelação centrada em sentimentos e relacionamentos, e um terceiro grupo que não relata nenhuma das duas. A leitura à luz do desenvolvimento é que a mesma tecnologia encontra um período em que as relações com pares e o trabalho de identidade são as tarefas centrais, de modo que uma ferramenta que oferece revelação ilimitada e sem julgamento não é um auxílio de estudo neutro.

O artigo teórico de Fu e Zhao estende isso a um construto, "conexão com a inteligência artificial" (artificial intelligence connectedness), definido como um vínculo percebido que é psicologicamente real, mas eticamente assimétrico, porque a máquina pode simular reciprocidade sem qualquer capacidade de cuidado. Ele não relata dados, e diz isso explicitamente; seu valor é o alerta de que um relacionamento sentido não é evidência de benefício ao desenvolvimento.

## O brincar como meio de desenvolvimento

A literatura sobre brinquedos de IA é onde a psicologia do desenvolvimento mais trabalha e menos evidência tem. A revisão de Xu, Girouard e Shi argumenta que brinquedos com IA redistribuem a agência no brincar: o controle sobre narrativa, diálogo, relacionamento e informação passa da criança sozinha para a interação criança-brinquedo. Essa redistribuição pode restringir o brincar quando o brinquedo o organiza, ou possibilitá-lo quando o brinquedo responde como recurso para a imaginação e a investigação lideradas pela criança. Se faz uma coisa ou outra é uma questão de design e de interação, e a revisão é explícita em que a evidência sobre o desenvolvimento ainda não existe.

O AI-Play, uma abordagem lúdica desplugada para a pré-escola e o jardim de infância, segue o caminho oposto: ensina conceitos de IA por meio do brincar sem colocar um dispositivo na frente da criança, com o argumento de que a tarefa de desenvolvimento nessa idade é a representação e o faz de conta, não a interação com um sistema.

## Implicações para a prática

Instrutores podem ler o perfil de demandas de uma ferramenta em vez da faixa etária na embalagem. A pergunta que vale a pena fazer é quais capacidades uma tarefa exige: quanto texto o aprendiz precisa manter em mente, que nível de leitura a interface pressupõe, quanto conteúdo social ou emocional a interação carrega. Uma ferramenta generativa que produz texto fluente pressupõe um leitor capaz de julgá-lo, e essa capacidade chega mais tarde do que a leitura fluente.

Formadores de professores e designers de currículo podem tomar emprestada a lógica de escalonamento do guia de Taiwan. Sua edição para os mais jovens mantém as atividades com andaime e não generativas, e sua edição avançada permite uso generativo supervisionado com raciocínio ético acoplado. A diferença entre as edições é quais ferramentas os aprendizes podem usar, não quão difíceis são as folhas de exercícios. Embutir essa distinção em uma sequência de cursos é mais defensável do que aplicar uma única política de ferramentas a todos os anos escolares.

Líderes de escolas e de programas podem tratar uma afirmação de "adequado à idade" como uma pergunta com três partes: qual capacidade a tarefa exige, em que estágio o aprendiz está, e que evidência conecta as duas. Estudos de recepção e documentação de fornecedores raramente respondem à terceira.

Equipes de apoio e famílias podem observar o que um brinquedo de IA faz com o brincar. Observe quem fornece a história. Quando o brinquedo decide o enredo, a criança o segue; quando o brinquedo responde à ideia da criança, a criança lidera. Essa diferença é visível em poucos minutos de observação, e importa mais nessa idade do que a cobertura de conteúdo do brinquedo.

## Onde a evidência é escassa

Três limites se repetem nos estudos revisados aqui.

O primeiro é o design. A maioria dos estudos são levantamentos transversais ou pequenos experimentos, medidos uma única vez. Eles podem mostrar que grupos de idade diferem; não podem mostrar que a IA mudou uma trajetória de desenvolvimento. A revisão de escopo de Niu e colegas sobre IA generativa e pensamento criativo infantil triou 6.401 registros e reteve 24 fontes de evidência, uma base pequena para uma afirmação grande, e a revisão a relata como tal. Uma revisão integrativa de 118 estudos de letramento em IA K–12 não localizou nenhum estudo que acompanhasse os mesmos aprendizes ao longo dos níveis escolares, de modo que sua progressão em quatro faixas é uma ordenação inferida de coortes diferentes, e não uma trajetória que alguém tenha observado ([[guo-ai-literacy-developmental-paces-2026|Guo et al., 2026]]).

O segundo é a atribuição. Um ganho de aprendizagem medido com a ferramenta presente pode ser desempenho assistido, e não uma mudança na capacidade, que é a mesma distinção que separa andaime de desenvolvimento.

O terceiro é o tempo. O desenvolvimento se desdobra ao longo de anos, e as ferramentas mudam mais rápido do que isso. A orientação por idade do Compass Collaborative torna isso explícito: chama suas entradas de hipóteses construídas por raciocínio abdutivo a partir da ciência do desenvolvimento estabelecida mais a pesquisa inicial sobre IA, e diz que uma evidência consolidada pode levar uma década.

## O problema de medição por trás de "adequado à idade"

Documentos de política e de compras usam "adequado à idade" como se fosse uma propriedade de um produto. Na pesquisa, é uma relação entre uma ferramenta, uma capacidade e uma tarefa. A abordagem por taxonomia do CLARA é uma tentativa de tornar essa relação operacional; as faixas do guia são outra. Nenhuma resolve a pergunta mais difícil de quem decide a suficiência, e as revisões que examinam recursos escalonados por idade avaliam a recepção (831 participantes no estudo de Wang, Chuang e Wu), e não o resultado em termos de desenvolvimento.

## Ideias equivocadas comuns

- **"Adequado à idade significa um único rótulo de idade."** O CLARA estima um estágio a partir das demandas que um texto impõe a capacidades específicas, e as duas edições do guia diferem em quais ferramentas permitem, não apenas no nível de leitura.
- **"Psicologia do desenvolvimento é só sobre crianças pequenas."** Adolescência e vida adulta também são períodos de desenvolvimento; as literaturas sobre dependência e autorrevelação tratam de adolescentes precisamente porque essas capacidades ainda estão em formação.
- **"Se dois grupos de idade diferem, o desenvolvimento explica."** Diferenças de idade transversais confundem coorte, currículo, acesso a dispositivos e contexto. Só designs que acompanham os mesmos aprendizes conseguem separar mudança de diferença.
- **"Uma ferramenta que apoia o desempenho está desenvolvendo a capacidade."** Compensação, andaime e desenvolvimento são funções distintas; só a última deve persistir depois que a ferramenta é removida.
- **"Brinquedos de IA são materiais de brincar neutros."** O argumento da redistribuição de agência diz o contrário: a responsividade do brinquedo molda quem está imaginando.
