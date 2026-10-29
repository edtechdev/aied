---
title: "Como treinamos um tutor de IA para orientar os estudantes em vez de lhes responder?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
contributors: [editor]
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
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

Seu tutor entrega a resposta. A demonstração não mostrou isso, porque a pergunta era fácil e o estudante era colaborativo. Os registros do piloto mostram: um estudante pergunta duas vezes, o modelo reformula o método e então resolve. Um professor observa uma sessão e diz que é um chatbot com voz amigável. Agora você está decidindo se gasta um quarto do tempo de engenharia em pós-treinamento ou se lança com um prompt de sistema melhor.

A resposta curta: prompting não remove a inclinação a responder, porque a utilidade é o que o modelo base foi treinado para produzir. Se o comportamento de guiar é o produto, ele precisa ser treinado, e a variável que decide o resultado é a **recompensa**. Escreva a recompensa contra um benchmark, coloque raciocínio em nível de passo nos dados de treino e julgue o treinamento pelo próximo movimento pedagógico que o modelo escolhe.

## A versão curta

**1.** Teste se o prompt sobrevive à pressão antes de concluir que prompting basta. Concordar com um estudante errado é o modo de falha a procurar.

**2.** Escreva a recompensa como especificação do comportamento que você quer, com negativos difíceis excluídos, e depois verifique o que ela realmente otimizou.

**3.** Treine com traços em nível de passo. Um corpus de pares pergunta e resposta correta não ensina um modelo a ver onde o estudante errou.

**4.** Prefira aprendizado por reforço à imitação quando o julgamento importa, e guarde as pontuações dos estágios intermediários.

**5.** Faça a recompensa densa o bastante para disparar na maioria das respostas, e rode a avaliação em conversas inteiras.

## Descubra se o prompt sobrevive à pressão

[[prompt-engineering|Prompting]] e treinamento geral de alinhamento deixam uma inclinação à concordância. A [[contextual-sycophancy-ai-literacy|sifofância contextual]] persiste depois dos dois, com erros dos aprendizes ainda se propagando para o conselho da IA.

O EduFrameTrap acrescenta o detalhe que importa para uma decisão de produto. Modelos que resistem a ataques de troca de contexto ainda capitulam sob pressão de autoridade ou socioafetiva e retêm feedback corretivo, e é por isso que seus autores defendem que o comportamento "gentil, mas correto" seja um **requisito explícito de treinamento** e não uma preferência ([[eduframetrap-llm-sycophancy-educational-safety]]).

Se a falha do seu tutor é concordar com uma resposta errada, pedir no prompt que ele não concorde é uma mitigação. Rode primeiro o teste de pressão, registre onde ele quebra e use essa transcrição como argumento para o orçamento de treinamento.

## Escreva a recompensa antes de coletar os dados

Uma recompensa é uma especificação comprimida do que você quer, e os modelos otimizam aquilo que você de fato escreveu. Isso faz do design da recompensa a decisão que define o teto de tudo o que vem depois.

O modelo de recompensa do EduQwen **priorizou respostas que guiam em vez de respostas diretas**, com mineração de negativos difíceis para excluir perguntas que o modelo base já resolvia, e ampliou os rollouts de 5 para 8 passos, de modo a capturar decisões pedagógicas de vários passos. Seu pipeline de três estágios, RL inicial, depois SFT sintético e uma rodada final de RL, alcançou **96,52%** no benchmark CDPK contra os **90,55%** do Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Duas coisas decorrem disso. Espere que a recompensa seja manipulada, porque ela especifica menos do que você pretendia, então escreva-a contra um benchmark e não contra uma intuição. E guarde os números intermediários: o primeiro estágio de RL sozinho chegou a 94,13%, o SFT sobre 40.000 respostas autogeradas levou a 96,20%, e a rodada final acrescentou a última fração. A maior parte do ganho chegou cedo, o que é útil quando alguém pergunta se o último estágio valeu o custo.

## Faça a recompensa disparar com frequência suficiente para ensinar

Uma recompensa de correspondência exata é esparsa demais quando a coisa que importa tem várias dimensões. O simulador de escrita do SWIM mostra a progressão com clareza: prompting fundamentado em rubrica alcançou a melhor média de QWK por atributo de **0,577** com o Claude Sonnet e **0,422** com o GPT-5.4, perto de zero para um modelo aberto de 7B; o ajuste fino supervisionado alcançou **0,474 ± 0,023** para esse modelo de 7B; o GRPO com uma recompensa densa e normalizada por atributo alcançou **0,618 ± 0,005** em todos os atributos e prompts ([[swim-student-writing-simulation-2026]]).

O design da recompensa produziu essa diferença. Um sinal denso e normalizado por atributo vence a correspondência exata em um cenário com múltiplos atributos, e se sua recompensa dispara apenas em uma resposta perfeita, a maior parte do seu sinal de treino é silêncio.

## Coloque o raciocínio nos exemplos

O achado mais acionável nesta área diz respeito ao que os dados de treino precisam conter. Modelos ajustados por instrução aprenderam concepções errôneas de álgebra apenas quando treinados com **traços de solução em nível de passo**. Treinados apenas com respostas finais, a acurácia ficou **abaixo de 30% em todos os tamanhos de dados** ([[misconception-acquisition-dynamics-llms-2026]]).

Dois detalhes desse estudo importam para quem constrói qualquer um dos lados de um tutor. O papel de estudante supergeneralizou o erro aprendido até que exemplos corretos fossem misturados em proporções tão baixas quanto **um em cada quatro**. O papel de tutor não mostrou esse custo, mantendo a acurácia de respostas corretas entre **93% e 98%** ao longo de dez concepções errôneas treinadas conjuntamente.

Um conjunto de dados de pares pergunta e resposta correta não ensina um modelo a notar onde um estudante errou. Se você está treinando um tutor para diagnosticar, os exemplos precisam do raciocínio.

## Escolha o sinal de treino que corresponde ao julgamento

O ajuste fino supervisionado ensina o modelo a imitar suas demonstrações. Isso basta para formato e não basta para julgamento. O LearnLM declara o achado explicitamente: **RL é substancialmente mais eficaz do que SFT sozinho para seguir instruções pedagógicas nuançadas em conversas longas** ([[learnlm-improving-gemini-learning]]).

Seu enquadramento condicionado por instrução permite que desenvolvedores e professores especifiquem o comportamento do tutor sem se comprometer com uma definição única de pedagogia, e o co-treinamento o mistura nos estágios de pós-treinamento do Gemini. Especialistas o preferiram ao GPT-4o (**+31%**), ao Claude 3.5 Sonnet (**+11%**) e ao Gemini 1.5 Pro base (**+13%**).

A leitura prática: se a sua falha é um tom errado ou um formato ausente, o SFT é o caminho barato. Se a sua falha é escolher o movimento pedagógico errado no décimo segundo turno, o sinal precisa recompensar a escolha.

## Rotule cada exemplo com o comportamento que ele ensina

Se a supervisão precisa conter raciocínio, o esquema de rotulagem é uma decisão curricular. Um estudo sobre rótulos de supervisão descobriu que atribuir a cada exemplo de treino um comportamento-alvo, entre competência de conteúdo, fundamentação curricular, raciocínio diagnóstico e scaffolding, elevou as pontuações em todos os tamanhos de modelo testados, com os maiores ganhos em scaffolding e no uso do histórico do aprendiz. O diagnóstico do estado de conhecimento continuou sendo o comportamento mais fraco, com **54,04%** ([[omniedu-open-educational-foundation-models-2026]]). O diagnóstico é o item mais difícil dessa lista, então orce para ele.

A seleção de dados é um problema de treino por si só. O Edu-QuRating adapta a destilação de preferências à curadoria de dados educacionais, substituindo uma única pontuação de "isto é educacional?" por **20 dimensões de rubrica** que cobrem acurácia factual, estrutura pedagógica e adequação de nível ([[garrod-edu-qurating-educational-data-curation-2026]]). Se você está montando um corpus a partir de texto da web, esse filtro decide como o seu modelo vai soar.

## Escolha a aposta de dados que você pode pagar

Duas apostas opostas definem o espaço, e qual delas você escolhe depende do que já tem.

Quando seus dados são escassos, o pós-treinamento condicionado por instrução carrega o comportamento. O LearnLM usa instruções em nível de sistema que permitem a professores e desenvolvedores especificar o comportamento do tutor e se apoia em co-treinamento, em vez de um grande corpus de transcrições de tutoria.

Quando você tem dados autênticos de interação, o ajuste fino sobre eles vence. O TeachLM aposta que a [[prompt-engineering|engenharia de prompt]] é um paliativo e que o ingrediente escasso é a interação real entre aprendiz e tutor. Treinado com **100.000 horas** de sessões individuais sob anonimização rigorosa, ele dobra o tempo de fala dos estudantes, melhora o estilo de questionamento e aumenta os turnos de diálogo em **50%** ([[teachlm-post-training-llms-education]]).

Um caminho mais barato é a destilação. O Pedagogy-R1, com 1,5B e 7B, foi ajustado por instrução sobre saídas filtradas pedagogicamente e destiladas de um professor QwQ-32B, combinadas com prompting de Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Treine a decisão que o estudante encontra em seguida

O pós-treinamento não precisa moldar apenas o que o modelo diz. O TACT pós-treinou um tutor com uma taxonomia de 13 estratégias mais uma taxonomia de movimentos do estudante em dois eixos e ganhou **20,30 pontos** sobre seu backbone Qwen3.5-4B, com um benchmark diagnóstico que **retém os rótulos de estado do aprendiz** disponíveis durante o treino, de modo que o modelo precisa inferir o estado a partir do diálogo ([[tact-pedagogically-adaptive-esl-tutoring]]).

A mesma lógica atravessa o alinhamento para [[special-education|educação especial]] ([[special-r1-rl-special-education]]) e o trabalho de RL heurístico que alinha modelos como guias socráticos em vez de respondedores ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Uma plataforma vai além e treina a política em vez da prosa: um agente de aprendizado por reforço escolhe o próximo problema de prática, então o que o aprendiz faz em seguida é decidido pelo modelo treinado ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Esse último caso é o teste de se você projetou um tutor ou um gerador de texto. Se a única saída do modelo é prosa, a pedagogia vive no seu código de orquestração. Se o modelo escolhe a próxima tarefa, a pedagogia está nos pesos.

## Teste no comprimento de uma conversa

O treinamento não torna um modelo seguro ao longo de uma conversa longa. O SafeTutors mostra que mesmo modelos pedagógicos especializados degradam ao longo de diálogos sustentados e podem cometer danos de superexposição de respostas ([[hazra-safetutors-pedagogical-safety-2026]]). A [[pedagogical-safety|segurança pedagógica]] precisa ser medida no comprimento da conversa, incluindo os turnos em que o estudante está errado, é persistente ou pressiona.

## O que as equipes de treinamento erram

Mais prompting vai acabar segurando. A sifofância persiste depois de prompting e alinhamento, e a pressão de autoridade reabre o comportamento que um teste de troca de contexto fechou. A transcrição do seu próprio teste de pressão é a evidência disso no seu produto.

O número do ranking é o resultado. 96,52% no CDPK descreve desempenho nas tarefas pedagógicas de um benchmark. Seus estudantes encontram o seu currículo, a sua notação e um estudante que está travado há vinte minutos.

Mais dados são a resposta quando os traços são rasos. Respostas finais em qualquer tamanho de dados mantiveram a acurácia de concepções errôneas abaixo de 30%. O que mudou o resultado foi o raciocínio em nível de passo nos exemplos; o tamanho do corpus nunca o moveu.

O papel de estudante é a parte difícil, então treine-o por último. O estudante supergeneralizou os erros aprendidos até que exemplos corretos aparecessem em um em cada quatro. O papel de tutor se manteve entre 93% e 98% nas mesmas condições, o que sugere que o tutor é a metade mais fácil de treinar e o simulador é o que precisa ser checado.

O checkpoint final é o resultado. O primeiro estágio de RL chegou a 94,13% e o SFT levou a 96,20%, então a maior parte do movimento aconteceu antes da última rodada. Guarde as pontuações por estágio; elas dizem qual estágio rendeu o ganho e qual você poderia cortar na próxima vez.

## O que vai voltar contra você

**"Não temos como pagar RL."** Então comece pelas partes que não custam nada: traços em nível de passo nos seus dados, um rótulo de comportamento-alvo por exemplo e uma recompensa que você escreveu em palavras antes de escrever em código. A comparação do SWIM mostra o SFT sozinho levando um modelo de 7B a 0,474, o que é um ganho real e ainda abaixo de 0,618.

**"O modelo do nosso fornecedor já se recusa a dar respostas."** O pós-treinamento do fornecedor otimiza utilidade, e recusar-se a responder não é o que as pontuações de utilidade recompensam. Teste o comportamento nas suas próprias conversas; a resposta está na transcrição, não no cartão do modelo.

**"A destilação nos leva boa parte do caminho."** O Pedagogy-R1 é uma destilação de 1,5B e 7B e é um ponto de partida razoável. O que ele herda é a pedagogia do professor, incluindo tudo o que esse professor errou, e você vai precisar de um benchmark para ver quais partes foram transferidas.

**"Testar conversas longas é caro demais para rodar com frequência."** Rode uma vez por mudança de modelo, com um roteiro fixo e um conjunto fixo de turnos adversariais, e compare as transcrições. O custo está em escrever o roteiro na primeira vez.

**"O professor disse que parece um chatbot."** Esse é um relato sobre a forma da conversa, e a forma da conversa é uma política. Conte quantos turnos passam antes de o modelo entregar um passo.

## O que fazer nesta semana

**1.** Rode o teste de pressão: resposta errada, estudante insiste, estudante cita autoridade, estudante pede a resposta. Guarde a transcrição.

**2.** Escreva sua recompensa como três frases em português, e depois verifique se o seu código mede essas três coisas.

**3.** Audite uma amostra dos seus exemplos de treino em busca de raciocínio em nível de passo. Relate a proporção que contém um passo errado e um diagnóstico dele.

**4.** Acrescente um rótulo de comportamento-alvo por exemplo, começando por scaffolding, e registre a distribuição.

**5.** Coloque as pontuações dos estágios intermediários no cartão do modelo, ao lado da final.

## Para onde ir agora

[[making-ai-better-at-supporting-learning|Como podemos tornar a IA melhor em apoiar a aprendizagem na nossa própria disciplina?]] pergunta se o treinamento é sequer a alavanca certa, e [[developing-ai-tutor]] cobre a contraparte de design de interação, que obtém o mesmo comportamento de guiar a partir de scaffolding e escadas de dicas, e não de gradientes. [[checking-whether-educational-ai-works]] cobre medir se o comportamento realmente mudou, e [[llm-training-and-fine-tuning]] é a página conceitual por trás de tudo isso.
