---
title: Pesquisa longitudinal
created: "2026-11-12T14:28:00-05:00"
updated: "2026-11-14T08:32:58-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [longitudinal-research, research-methods-aied, quantitative-research]
translation_of: concepts/longitudinal-research
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [research-methods-aied, quantitative-research, qualitative-research, mixed-methods-research, rct, design-based-research, learning-analytics, self-report-measures, limitations-in-aied-research, interpreting-and-applying-aied-research, developmental-psychology, self-regulated-learning, student-engagement]
connected_articles: [ai-feedback-literacy-agentic-engagement-panel-2026, zhang-tang-ai-music-classroom-engagement-longitudinal-2026, longitudinal-ai-usage-ethics-policy-teacher-education-2026, song-genai-learning-partner-srl-over-time-2026, melanou-genai-learning-dynamics-longitudinal-2026, ai-lms-middle-school-longitudinal]
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Pesquisa longitudinal** — desenhos que medem as mesmas unidades repetidamente ao longo do tempo, de modo que a mudança *dentro* de uma pessoa, turma ou instituição possa ser separada das diferenças *entre* elas. Na [[ai-education|IA na educação]], o trabalho longitudinal é o que transforma afirmações sobre adoção, crescimento de habilidades e engajamento de retratos instantâneos em trajetórias: quatro semestres de levantamentos na formação de professores mostrando o uso de [[generative-ai|IA generativa]] subindo, um semestre de dados de autorregulação mostrando o conhecimento [[metacognition|metacognitivo]] caindo sob pressão avaliativa, cinco ondas de dados de engajamento cujas inclinações se movem juntas. Seu valor não está em medir mais, mas em poder fazer uma pergunta que uma única medição não responde: o que está mudando, para quem e a que ritmo.

## Perguntas para refletir

- Um levantamento transversal encontra que estudantes que usam mais a IA relatam maior autoeficácia. O que mais poderia explicar isso, e que desenho separaria as explicações?
- "Longitudinal" é frequentemente usado para qualquer estudo com dois pontos no tempo. O que um par pré/pós estabelece, e o que deixa em aberto?
- O modelo de painel de Xu separa um traço estável da flutuação específica de ocasião. Por que isso importa para a afirmação de que o letramento em feedback causa engajamento?
- As ferramentas de IA mudam durante um estudo: modelos são atualizados, funcionalidades aparecem, licenças expiram. O que isso faz com um desenho que supõe um tratamento constante?
- A perda de participantes não é aleatória. Como um estudo deve relatar um semestre em que um quinto da amostra desistiu?
- Um semestre é longo para um curso e curto para um desenvolvimento. Quais afirmações sobre a IA precisam de anos, e quais são respondidas por semanas?

## Introdução

A pesquisa longitudinal é uma família de desenhos, e não um único método: levantamentos repetidos da mesma coorte, estudos de painel, modelos de curva de crescimento, comparações de coortes, amostragem de experiência e análises de dados de log que se acumulam ao longo de um semestre. O que os une é a unidade de análise (o mesmo aprendiz, turma ou instituição observado mais de uma vez) e o ganho inferencial que decorre disso.

Esse ganho é frequentemente exagerado. Uma centena de artigos se descreve como longitudinal, e eles vão de análises de tendência de quatro semestres a uma única comparação pré/pós. O rótulo virou um sinal de qualidade, o que torna importante ser preciso sobre o que cada desenho sustenta. Um levantamento repetido pode mostrar que uma distribuição se moveu. Um modelo de painel pode mostrar que uma pessoa se moveu em relação à própria linha de base. Um modelo de crescimento pode mostrar que o ritmo de movimento difere entre pessoas e que dois processos se movem juntos. Apenas alguns desenhos com uma medida de desfecho nas duas pontas podem começar a abordar se a ferramenta causou a mudança.

Os estudos mais fortes estabelecem menos do que seus rótulos sugerem, e as famílias de desenho diferem no que cada uma pode sustentar.

## Mudança intraindividual versus diferença entre indivíduos

A distinção que faz mais trabalho é entre um traço estável e um estado específico de ocasião. Xu (2026) mediu o [[feedback-literacy|letramento em feedback de IA]] e o [[student-engagement|engajamento agêntico]] em 480 graduandos chineses três vezes em intervalos de seis semanas e usou um modelo de painel cross-lagged com intercepto aleatório para separar os dois níveis. A correlação do traço estável foi r = 0.315 (p < 0.001); os caminhos cross-lagged intraindividuais contaram uma história diferente sobre qual construto se moveu primeiro. Sem essa separação, uma correlação transversal entre os dois teria sido relatada como evidência de uma relação, e teria sido ambígua: pessoas que são em geral mais letradas em feedback podem também ser em geral mais engajadas, sem que uma coisa mude a outra.

Essa é a contribuição central do desenho. A maioria das perguntas nesta literatura (o feedback de IA constrói engajamento, a dependência corrói a autorregulação, o uso prediz o bem-estar) são perguntas sobre mudança, e uma única medição não responde a uma pergunta sobre mudança, por maior que seja a amostra.

## Trajetórias e o que covaria com elas

A modelagem de crescimento faz uma pergunta diferente: não se uma pessoa difere de seu nível usual, mas que forma a mudança assume e se dois processos de mudança estão ligados. Zhang e Tang pesquisaram 850 graduandos de música em quatro universidades chinesas cinco vezes ao longo de um semestre, medindo engajamento em sala de aula, flow e inteligência emocional musical autopercebida em aulas assistidas por IA. Todos os três subiram ao longo das cinco ondas, e as inclinações se moveram juntas: a inclinação do engajamento correlacionou 0.39 com a do flow e 0.22 com a da inteligência emocional.

O achado é correlacional sobre as inclinações, não causal sobre as ferramentas, e os autores o apresentam assim. Seu valor é que localiza a mudança em um ritmo, e não em um nível, que é o tipo de afirmação sobre a qual um designer de currículo pode agir: se o engajamento sobe mais rápido onde o flow sobe mais rápido, a questão de desenho passa a ser o que produz flow, para começar.

## Tendências de adoção e de atitude

Uma terceira família acompanha uma população, e não um processo de crescimento. Parker, Loper, Carter, Hayes e Karakas analisaram quatro semestres de dados de levantamento de mais de 300 estudantes em um programa de [[teacher-education|formação de professores]] do meio-oeste dos EUA, rastreando o uso de IA generativa e as percepções éticas após o lançamento do ChatGPT. O uso cresceu substancialmente: preparação para avaliação de 57% para 83%, estudo de 44% para 76%, enquanto as posturas éticas se tornaram mais incertas em vez de se assentarem, e as percepções diferiram por subgrupo.

Este é um desenho transversal repetido: o mesmo programa, não necessariamente os mesmos estudantes. Ele estabelece uma tendência em uma população, que é exatamente o que uma pergunta de política precisa, e não pode estabelecer mudança individual. A distinção importa quando a tendência é lida como desenvolvimento: um aumento no uso relatado ao longo dos semestres pode refletir novas coortes entrando com normas diferentes tanto quanto os mesmos estudantes mudando.

## Estado, traço e a forma de um semestre

O estudo semestral de Song e colegas com 75 estudantes universitários do primeiro ano mostra por que a pergunta intraindividual vale a pena para construtos usualmente tratados como aptidões. As linhas de base individuais dos estudantes para a [[self-regulated-learning|aprendizagem autorregulada]] eram estáveis, mas seu conhecimento metacognitivo e seu [[well-being|bem-estar]] declinaram sistematicamente ao longo do semestre, acompanhando demandas curriculares como prazos importantes de avaliação. Uma prova de conceito mostrou que um [[llm|LLM]] poderia receber contexto por estudante para apoiar a regulação no momento em que ela era necessária.

A leitura prática é que um traço medido uma única vez teria escondido o declínio. A leitura metodológica é que "estável" e "imutável" são afirmações diferentes, e apenas a medição repetida as distingue.

## As famílias de desenho e o que cada uma custa

- **Levantamento repetido de uma coorte.** Os mesmos estudantes, várias ondas. Estabelece mudança individual; vulnerável à perda de participantes e a efeitos de testagem.
- **Corte transversal repetido (tendência).** A mesma população, nova amostra a cada onda. Estabelece mudança populacional; não consegue acompanhar indivíduos.
- **Modelo de painel com efeitos defasados.** Ondas espaçadas para modelar a ordenação, com traço e estado separados. Estabelece precedência temporal; precisa de espaçamento e tamanho de amostra adequados.
- **Modelo de curva de crescimento.** Três ou mais ondas modelando intercepto e inclinação. Estabelece a forma e o ritmo da mudança, e a covariação entre processos.
- **Quase-experimento longitudinal.** Condições comparadas ao longo de medidas repetidas, como no estudo de nove semanas de Melanou e colegas com 87 estudantes em três condições de IA, em que o conhecimento subiu em todos os grupos (F(1, 50) = 29.8) e o desempenho prévio moderou o benefício. Estabelece se uma condição muda uma trajetória; ainda não é atribuição aleatória.
- **Amostragem de experiência e painéis de log.** Medidas frequentes in situ ou dados de rastro. Estabelece dinâmicas de granularidade fina; fraco em construtos que exigem reflexão.

## Ameaças que pesam em estudos com IA

Quatro problemas recorrem, e os dois últimos são específicos deste campo.

**Perda de participantes.** Estudantes que se desengajam deixam o estudo, de modo que as ondas posteriores sobrerrepresentam os engajados. Uma trajetória estimada a partir dos sobreviventes pode inclinar para cima enquanto a coorte como um todo não o faz.

**Efeitos de testagem e de instrumentação.** A exposição repetida ao mesmo instrumento muda as respostas, particularmente em medidas autorrelatadas de atitudes e uso.

**Deriva da ferramenta.** Uma ferramenta de IA não é um tratamento fixo. Modelos são atualizados, interfaces mudam, licenças institucionais são retiradas no meio do semestre. Um estudo que atravessa um semestre está medindo um objeto em movimento, e poucos artigos relatam mudanças de versão.

**Desempenho assistido confundido com aprendizagem.** Um ganho medido com a ferramenta disponível pode mostrar o que o aprendiz consegue fazer com apoio, não o que internalizou. A distinção é a mesma que separa os [[scaffolding|andaimes]] do desenvolvimento, e desenhos longitudinais não a resolvem a menos que as ondas posteriores incluam uma medida sem assistência.

## Implicações para a prática

Instrutores podem parar de ler um único levantamento de fim de semestre como evidência de que uma mudança funcionou. Uma distribuição que se moveu entre dois semestres pode refletir uma nova coorte, um novo regime de avaliação ou um instrumento que perdeu a novidade. Uma comparação dos mesmos estudantes contra suas próprias pontuações anteriores responde a uma pergunta mais estreita e mais útil.

Diretores de programa podem planejar a avaliação em ondas. Três ou mais medições ao longo de um programa permitem que um departamento estime uma inclinação em vez de comparar dois pontos, e relatar a perda de participantes a cada onda evita que uma média crescente esconda os estudantes que saíram.

Formadores de docentes podem avaliar o desenvolvimento profissional da mesma forma, com medidas repetidas e pelo menos uma tarefa concluída sem a ferramenta. Uma série de oficinas que eleva a confiança e o uso enquanto deixa o desempenho sem assistência estagnado mostrou algo sobre atitudes, e a distinção vale ser relatada às pessoas que financiam a próxima série.

Administradores podem registrar o que mudou durante um estudo ou piloto: versões de modelo, mudanças de licença, atualizações de interface. Um semestre é longo o suficiente para a ferramenta se tornar um tratamento diferente, e a documentação é barata comparada com explicar um salto inexplicado.

Pesquisadores podem manter duas afirmações separadas na própria escrita. A ordenação temporal sustenta precedência, não causação, e um par pré/pós é um desenho de medidas repetidas, e não uma trajetória.

## O que os desenhos longitudinais não podem fazer

Eles não estabelecem causação por si sós. A ordenação temporal é necessária, mas não suficiente: uma variável não medida que muda no mesmo calendário (um novo regime de avaliação, uma reforma curricular, um efeito de coorte) pode produzir o mesmo padrão. São caros em tempo de participante, o que limita os tamanhos de amostra e frequentemente força o autorrelato. E um semestre é curto: perguntas de desenvolvimento, no sentido em que a [[developmental-psychology|psicologia do desenvolvimento]] usa o termo, precisam de anos, e quase nada nesta literatura os atravessa.

## Como isso aparece na pesquisa

Os exemplos mais fortes se concentram no ensino superior, onde um semestre fornece um enquadramento natural: o painel de três ondas de Xu, o modelo de crescimento de cinco ondas de Zhang e Tang, o semestre de dados de autorregulação de Song, o quase-experimento de nove semanas de Melanou. A formação de professores contribui com o estudo de tendência. O trabalho longitudinal no nível escolar é mais rarefeito, e o artigo sobre LMS no ensino fundamental II que carrega "longitudinal" em seu slug é uma proposta de desenho, e não um estudo longitudinal — um lembrete de que o rótulo em um título não é o desenho.

## Relação com outros métodos

Os desenhos longitudinais se situam dentro da [[quantitative-research|pesquisa quantitativa]] e compartilham seus problemas de medição. São frequentemente combinados com [[mixed-methods-research|métodos mistos]] quando a pergunta é por que uma trajetória se dobrou. Diferem dos [[rct|experimentos randomizados]] por observarem variação que ocorre naturalmente ao longo do tempo, em vez de atribuí-la, e da [[design-based-research|pesquisa baseada em desenho]] por não iterarem sobre uma intervenção. A DBR explica como fazer algo funcionar em contexto, enquanto o trabalho longitudinal explica o que mudou e quando. A [[learning-analytics|analítica de aprendizagem]] fornece os dados de rastro que tornam possível a análise longitudinal de granularidade fina sem levantamentos repetidos.

## Ideias equivocadas comuns

- **"Dois pontos no tempo tornam um estudo longitudinal."** Um par pré/pós é um desenho de medidas repetidas; não consegue estimar uma trajetória e, em geral, não consegue separar mudança de efeitos de testagem.
- **"Longitudinal significa causal."** A ordenação no tempo é necessária, mas não suficiente; efeitos de coorte, reformas simultâneas e atualizações de ferramentas produzem mudança sem que o tratamento a cause.
- **"Uma amostra grande conserta uma janela curta."** O tamanho da amostra trata da precisão, não do tempo necessário para um processo de desenvolvimento ou institucional se desenrolar.
- **"O mesmo programa significa as mesmas pessoas."** Cortes transversais repetidos acompanham uma população, não indivíduos; os dois sustentam afirmações diferentes.
- **"Tendências autorrelatadas são tendências de atitude."** O uso relatado e a postura relatada mudam com as normas e com o instrumento, tanto quanto com o comportamento.
