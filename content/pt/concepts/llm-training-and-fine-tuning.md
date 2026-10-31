---
title: "Treinamento e ajuste fino de LLM"
created: "2026-05-07T10:44:35-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
translation_of: concepts/llm-training-and-fine-tuning
source_updated: "2026-10-26T07:30:00-04:00"
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

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Treinamento e ajuste fino de LLM** — como os modelos de IA educacional são feitos: o pipeline do pré-treinamento ao pós-treinamento e à adaptação, o que cada estágio custa e o que a evidência diz que ele compra. O problema organizador é um **descasamento de incentivos**: modelos de uso geral são otimizados para responder, enquanto o ensino exige reter a resposta. O pós-treinamento e o ajuste fino são as duas alavancas que mudam esse comportamento, e o resultado mais claro desta base de conhecimento é que elas são uma escolha *terceira*, e não a primeira — a recuperação e o prompting vêm antes na decisão, e um estudo aqui encontrou o ajuste fino supervisionado falhando em uma tarefa em que o prompting simples venceu ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]). Escrito para desenvolvedores de software educacional e profissionais de ensino que decidem o que construir.

## Questões para considerar

- Se você tem uma tarefa de tutoria em que um modelo geral responde com demasiada facilidade, seu primeiro movimento é um prompt melhor, recuperação sobre seus próprios materiais ou treinamento? O que você precisaria medir para dizer qual deles ajudou?
- Ajuste fino precisa de dados. De onde viriam os exemplos de treinamento do seu projeto, quem é dono deles, e que revisão de privacidade eles precisariam antes de poderem ser usados?
- Um estudo aqui concluiu que ajustar um modelo em dados de avaliação melhorou *formatação e similaridade*, enquanto um ajuste fino separado falhou redondamente em gerar feedback. O que isso sugere sobre adequar o método de treinamento à tarefa?
- O pós-treinamento com aprendizado por reforço pode ensinar um modelo a guiar em vez de responder. Que recompensa você escreveria para capturar "guia bem", e como um modelo a burlaria?
- Esta base de conhecimento relata que a escolha de modelo e de prompt responde por apenas cerca de 15% da lacuna entre um LLM e os ganhos de aprendizagem dos estudantes. Se isso estiver certo, como deveria mudar sua decisão entre construir e comprar?
- Um modelo ajustado que é preciso ainda pode ser inseguro ao longo de uma conversa longa. O que você testaria antes de deixar um falar com estudantes sem supervisão?

## Introdução

O desenvolvimento de IA educacional bate na mesma parede a partir de duas direções. Modelos de linguagem de uso geral são pós-treinados sobre preferência humana por prestatividade, o que na prática significa responder pronta e completamente; a tutoria exige o oposto, porque o objetivo pedagógico é ajudar um estudante a chegar à resposta, e não entregá-la. Ao mesmo tempo, um modelo geral não sabe nada sobre seu currículo, sua rubrica ou a voz da sua instituição, e nenhuma quantidade de prompt engineering instala essas coisas de forma confiável.

Esta página cobre as técnicas que mudam um modelo, e não o texto que você lhe envia. Elas se situam em uma **escada de compromisso crescente**: prompting, depois recuperação, depois adaptação eficiente em parâmetros, depois ajuste fino completo, depois pós-treinamento com sinais de preferência ou recompensa. Cada degrau custa mais dados, mais computação e mais disciplina de avaliação que o anterior, e cada um é uma primeira escolha pior que o degrau abaixo dele, a menos que uma medição específica justifique a subida. Muito da literatura de pesquisa relata apenas o topo dessa escada, o que torna fácil para um desenvolvedor recorrer ao treinamento quando a recuperação teria sido suficiente.

A página está organizada em torno das decisões que quem constrói realmente enfrenta: qual alavanca puxar (esta seção e a próxima), o que a adaptação compra e custa na prática, o que o pós-treinamento pode moldar que a adaptação não pode, e como esses sistemas falham. A terminologia é usada em seu sentido-padrão: **pré-treinamento** é o estágio do zero sobre um corpus geral, **pós-treinamento** é tudo o que vem depois dele e que molda comportamento (ajuste fino supervisionado, otimização de preferência, aprendizado por reforço), e **ajuste fino** cobre tanto o estágio supervisionado do pós-treinamento quanto o trabalho posterior de adaptação a tarefa ou domínio, incluindo métodos eficientes em parâmetros.

## O pipeline de treinamento, estágio por estágio

Três estágios, com acessibilidades muito diferentes. Saber qual deles um artigo descreve previne a maior parte das leituras erradas desta literatura.

O **pré-treinamento** constrói um modelo base a partir de um corpus geral de texto. É o estágio que produz a ampla capacidade do modelo, e está fora do alcance de essencialmente todo projeto educacional: o custo é medido em milhões de dólares e os dados são um rastreamento em escala web. Nada nesta base de conhecimento o faz. Sua relevância para profissionais é diagnóstica, e não acionável — os dados de pré-treinamento são a alavanca dominante sobre como um modelo se comporta, e é a única alavanca que você não pode puxar. Essa assimetria é a razão pela qual todas as técnicas restantes do campo operam sobre um modelo já treinado.

O **pós-treinamento** molda comportamento sobre o modelo base. O ajuste fino supervisionado (SFT) ensina o modelo a imitar demonstrações; a otimização de preferência e o aprendizado por reforço então o empurram rumo a saídas que um modelo de recompensa ou um conjunto de julgamentos humanos classificam mais alto. É o estágio em que um modelo pode ser ensinado a guiar em vez de responder, e é onde vivem os resultados educacionais mais notáveis. É também o estágio mais sensível ao desenho de recompensa, porque uma recompensa é uma especificação comprimida do que você quer, e modelos otimizam o que você realmente escreveu.

A **adaptação** ajusta um modelo existente à sua tarefa ou domínio, usualmente com muito menos dados e computação. O ajuste fino eficiente em parâmetros (PEFT), do qual LoRA é a forma comum, treina um pequeno número de parâmetros adicionados e deixa os pesos base congelados. O ajuste fino completo atualiza tudo. A destilação e a desaprendizagem se situam ao lado deles. As seções abaixo tomam cada uma por vez. Para a maioria dos desenvolvedores educacionais, este é o estágio prático — aquele em que algumas centenas a alguns milhares de exemplos e uma única GPU podem produzir um modelo implantável.

## Prompt, recuperar ou treinar? A decisão que vem primeiro

O resultado único mais forte desta base de conhecimento sobre essa questão é um estudo de recuperação, não um estudo de treinamento. Ao construir um assistente de base de conhecimento de disciplina, Shen et al. (2026) avaliaram modelos locais em três configurações e concluíram que **a recuperação, e não o modelo, é a decisão de desenho de primeira ordem**: seu LLM local sem recuperação alcançou apenas **52,3%** de precisão, *abaixo* de uma baseline TF-IDF de **55,4%**, enquanto acrescentar [[rag|geração aumentada por recuperação]] sem nenhum ajuste fino a elevou a **66,6%** ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). As configurações de ajuste fino que eles também testaram são relatadas ao lado de ablações de recuperação, quantização e energia por consulta, o que torna a comparação incomumente honesta: um modelo base sem ancoragem pode ser pior que um método lexical de décadas atrás, e a correção mais barata não é o treinamento.

O que o campo realmente constrói reflete uma ordenação similar. Uma revisão guiada pela PRISMA de 23 estudos empíricos (2020–2025) sobre customizar IA para o [[writing-education|ensino de escrita]] concluiu haver **predominância do prompt engineering (N = 13), à frente do ajuste fino (N = 7) e de arquiteturas híbridas (N = 3)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). O achado mais agudo da revisão é um desalinhamento estrutural, e não um ranking de técnicas: os objetivos pedagógicos declarados se moveram rumo a processos de escrita, [[feedback-literacy|letramento em feedback]] e competências acadêmicas de ordem superior, enquanto as implementações dominantes ainda perseguem objetivos focados no produto por meio de desenho de prompt ou ajuste fino.

Onde prompting e treinamento foram comparados diretamente, o resultado depende da tarefa, o que é exatamente por que a decisão deve ser medida, e não presumida:

- **O treinamento vence quando o alvo é um formato de saída estável ou uma propriedade controlada.** Na geração automática de itens para avaliação de compreensão oral em L2, o refinamento iterativo de prompt estagnou, e o ajuste fino do GPT-4.1 *sobre o prompt otimizado* então melhorou a geração além do prompting isolado — isolando a adaptação do modelo, e não o desenho de prompt, como o impulsionador do ganho restante ([[gpt-item-generation-l2-listening-2026]]).
- **O prompting vence quando o alvo é texto carregado de julgamento.** O mesmo sistema que foi ajustado com sucesso para *pontuação* falhou no *feedback*: no WrAFT, um módulo GPT-4o ajustado alcançou QWK 0,84 e RMSE 0,44 em 360 redações TOEFL retidas, mas o ajuste fino supervisionado para geração de feedback produziu saída truncada e não parseável, enquanto instruir diretamente o Claude 3.7 produziu o feedback que os professores classificaram como melhor ([[wraft-automated-writing-evaluation-argumentative-2026]]). O ajuste fino ensinou o modelo a acertar uma nota; não o ensinou a escrever.
- **A modelagem em nível de prompt pode substituir o treinamento quando o alvo é uma persona ou uma rubrica.** O prompting guiado por rubrica, co-refinado iterativamente, elevou a concordância LLM–humano sobre trabalhos de desenho de estudantes de **54,75% para 81,25%** (Alfa de Cronbach 0,393 → 0,798) sem nenhum ajuste fino ([[yasar-llms-iterative-pedagogical-design-2026]]), e um prompt de GPT personalizado fundamentado na literatura eliciou concepções errôneas matemáticas-alvo com presença **0,98** contra **0,40** para um prompt amplo ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).
- **Há um teto para tudo isso.** Hardy e Kim (2026) estimam que a escolha de modelo e de prompt responde juntas por apenas cerca de **15%** do desalinhamento entre LLMs e ganhos de aprendizagem dos estudantes, com o restante compartilhado entre modelos, e eles concluíram que ensembles de ponderação por benchmark e de votação unânime tornaram o alinhamento *pior* ([[educational-llm-alignment]]). Se os dados de pré-treinamento são a alavanca dominante e é a única que você não pode puxar, então as expectativas sobre o que qualquer uma dessas técnicas pode alcançar devem ser calibradas de acordo.

## O que o ajuste fino compra: controlabilidade em vez de escala

Quando um modelo geral não consegue manter uma propriedade de que você precisa, o ajuste fino em um conjunto de dados modesto frequentemente consegue — e o resultado recorrente é que *mirar supera dimensionar*. Três modelos de 8B ajustados em um currículo de leitura infantil desenhado por especialistas superaram o GPT-4o zero-shot e o Llama 3.3 70B em métricas relacionadas a dificuldade, com problemas de segurança negligenciáveis. Os autores enquadram isso como **controlabilidade em vez de escala**, já que um modelo compacto pode ser ajustado a um nível de leitura específico e a um padrão de erro de uma forma que não se pode pedir a um modelo geral ([[llm-children-reading-story-generation]]).

O padrão se repete ao longo de tarefas muito diferentes:

- **Ancoragem curricular.** Um conjunto de dados de instrução multilíngue com 24.795 exemplos, ancorado em Indian Knowledge Systems, produziu um ajuste fino de 7B pontuando **6,39** em um painel externo de cinco juízes (mediana sobre 1.201 itens estratificados). Isso está a **0,15** de um forte modelo geral de referência, a uma fração do custo de implantação — enquanto o mesmo modelo base pontuou **perto de zero nas dimensões específicas de IKS** sem o ajuste fino ([[iks-instruct-dataset-indian-knowledge]]). Essa lacuna entre "competente em geral" e "competente aqui" é todo o argumento para adaptação de domínio. Note também o detalhe contraintuitivo que os autores relatam: a qualidade **não** subiu monotonicamente com a curadoria de dados.
- **Dados estruturados pelo [[curriculum-design|currículo]] são eficientes em amostras.** Sob um orçamento pareado de cerca de 2.300 amostras, o ajuste fino em pares pergunta–resposta derivados de um [[knowledge-graph|grafo de conhecimento]] de K–12 dos livros didáticos da People's Education Press superou fatias de igual tamanho de oito corpora de instrução convencionais, e os ganhos se transferiram para além das disciplinas treinadas — evidência de que a estrutura curricular é o que distingue dados de treinamento educacionais ([[liang-k12-kgraph-curriculum-knowledge-graph-2026|Liang et al. (2026)]]).
- **Confiabilidade de avaliação, barata.** Um único adaptador LoRA treinado em aproximadamente **3.900** exemplos corrigidos agrupados trouxe cinco pequenos modelos abertos (4B–30B) à paridade ou além de um corretor humano ao longo de duas provas de ciência da computação, e praticamente apagou a sensibilidade a persona (deriva ≤ 0,32 MAE) ([[llm-graders-computer-science-exams-2026]]). Um adaptador, um conjunto de dados, vários modelos base — essa é a forma de uma implantação prática.
- **Automação seletiva.** A confiança foi um preditor confiável de erro de pontuação (β = −0,602, p < ,001). Rotear os **20%** menos confiantes das respostas para revisão humana moveu um modelo GPT-3.5 ajustado de r = 0,781 para **r = 0,822** (RMSE 0,5990 → 0,5544), cortando o trabalho manual de correção em aproximadamente **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]). O ajuste fino aqui não está substituindo o humano; está tornando a atenção do humano acessível.
- **Medindo constructos que de outra forma você corrigiria à mão.** Transformers húngaros ajustados (hubert-base-cc, PULI-BERT-Large) foram usados como referência contra atributos TF-IDF e embeddings Qwen3 para pontuar escrita reflexiva na [[teacher-education|formação de professores]] ([[reflection-level-classification-hungarian-essays-2026]]), e um modelo multimodal ajustado (baseado em Qwen3.5) mostrou reconstruir curvas características de item para itens de múltipla escolha, aprendendo os padrões de resposta codificados nas curvas 3PL e MCM em vez de recebê-los ([[multimodal-item-parameter-estimation-2026]]).

## Adaptação eficiente em parâmetros na prática

LoRA e seus parentes são onde a maioria das equipes educacionais realmente vai trabalhar, e a literatura contém orientação incomumente específica sobre como eles se comportam.

**O posto é uma troca, e não um botão a maximizar.** Lu et al. (2026) construíram 360 diálogos sistema–usuário–assistente a partir de uma disciplina de Sistemas de Controle Linear, reestruturaram respostas em um formato Solução–Método–Pontos-de-Ensino, e aplicaram LoRA ao Qwen2.5-3B e 7B em postos 4, 8 e 16. A cobertura de saída estruturada moveu de quase zero na base para aproximadamente **1,00**, e a melhor configuração (7B, r = 16) alcançou ROUGE-L **0,4093**, com intervalos de confiança bootstrap para o ganho inteiramente acima de zero. Mas o **ganho por milhão de parâmetros de adaptador caiu monotonicamente à medida que o posto subia**, portanto o alinhamento em nível de disciplina é uma troca de escala-e-posto, e não uma atualização gratuita ([[lora-finetuned-control-systems-course-qa-2026]]). Suas métricas medem similaridade e formatação, não precisão derivacional, o que é a ressalva padrão para toda essa família de avaliações.

**A escala não prevê sucesso, e configurações idênticas se comportam de formas diferentes entre arquiteturas.** O AiAWE, um sistema de avaliação automatizada de escrita de código aberto construído sobre um Gemma-3-27B-it adaptado com LoRA, alcançou RMSE 0,474, QWK 0,828 e concordância dentro de ±0,5 da nota humana em **90,56%** de 360 redações de avaliação, superando o LLaMA-3.3-70B e uma baseline GPT-3.5 ajustada — enquanto rodava em um servidor de grau de consumidor. Três achados mais amplos importam mais que a nota: a escala do modelo **não** foi uma preditora confiável de desempenho a jusante sob adaptação com LoRA, **hiperparâmetros LoRA idênticos produziram comportamentos de adaptação qualitativamente diferentes entre arquiteturas**, e um modelo aberto de tamanho médio bem ajustado pode ser competitivo com sistemas proprietários ([[aiawe-automated-writing-evaluation]]).

**Quais camadas adaptar é uma decisão real.** Em um sistema de análise de discurso para ensino de inglês, ajustar um BERT truncado atualizando **apenas as últimas quatro camadas Transformer** superou ambas as alternativas: adaptar apenas a camada superior bateu em um teto mais baixo, e o ajuste fino completo das 12 camadas sobreajustou e oscilou ([[bert-discourse-english-teaching-2026]]).

**A arquitetura base pode importar mais que a contagem de parâmetros.** Ajustar três modelos abertos de texto-para-imagem em 1.000 imagens rotuladas de engenharia nuclear melhorou substancialmente o Stable Diffusion XL, deu ganhos limitados para o SD-v3.5-Medium e não produziu **nenhuma melhora mensurável para o modelo de flow-matching Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]). Uma receita de ajuste fino não é portátil entre arquiteturas, o que é a mesma lição que o AiAWE relata da outra direção.

Duas técnicas adjacentes completam o estágio de adaptação. A **destilação** comprime um sistema grande ou de caixa-preta em um pequeno e implantável. Um pipeline de dois estágios destilou um estimador ML de caixa-preta ajustado e sua interpretação post-hoc em um pequeno LLM de pesos abertos, com um "aprendiz" de 2 bilhões de parâmetros alcançando recuperação quase sem perda da superfície de efeito do oráculo (r > ,90). Esse resultado é relatado sob uma avaliação fidelidade-primeiro que audita toda narração contra a atribuição que ela alega descrever ([[distilling-self-explaining-lm-learning-analytics-2026]]). A **desaprendizagem** remove conteúdo alvo após o treinamento: desaprendizagem baseada em gradiente foi aplicada a três modelos para remover PII e conteúdo prejudicial, testada em duas ordens de remoção (PII-primeiro e conteúdo-prejudicial-primeiro) ([[llm-unlearning-math-privacy]]) — a ferramenta relevante quando um modelo memorizou algo que não deveria carregar.

## Pós-treinamento: moldando comportamento, não apenas formato

A adaptação ensina um modelo *o que produzir*; o pós-treinamento o ensina *como se comportar*. É aqui que os resultados pedagógicos são mais notáveis, e onde o desenho do sinal de recompensa ou preferência decide tudo.

**O resultado do pipeline.** Singh et al. (2026) transformaram o Qwen3-32B no EduQwen por três estágios — RL inicial, SFT sintético, RL final — alcançando **96,52%** no benchmark CDPK e superando os **90,55%** do Gemini-3 Pro. Os resultados intermediários são a parte instrutiva: o primeiro estágio de RL sozinho alcançou 94,13%, o SFT sobre 40.000 respostas autogeradas o levou a 96,20%, e a rodada final de RL acrescentou a última fração. O modelo de recompensa priorizou **respostas de orientação em vez de respostas diretas**, a mineração de negativos duros excluiu questões que o modelo base já resolvia, e os rollouts foram estendidos de 5 para 8 passos para capturar decisões pedagógicas de múltiplos passos ([[singh-eduqwen-pedagogical-rl-2026]]). Contra isso, o Pedagogy Benchmark — extraído de provas reais de desenvolvimento profissional docente ao longo de **97 modelos** — concluiu haver precisão variando de **28% a 89%**, evidência de que o conhecimento pedagógico não é adquirido incidentalmente durante o pré-treinamento geral ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

**Treinando a decisão, e não o enunciado.** O TACT pós-treinou um tutor em uma taxonomia de 13 estratégias mais uma taxonomia de movimentos do estudante de dois eixos e ganhou **20,30 pontos** sobre sua espinha dorsal Qwen3.5-4B, com um benchmark diagnóstico que retém os rótulos de estado de quem aprende disponíveis durante o treinamento, de modo que o modelo precisa inferir o estado a partir do diálogo ([[tact-pedagogically-adaptive-esl-tutoring]]). A mesma lógica aparece no Special-R1 para alinhamento em [[special-education|educação especial]] ([[special-r1-rl-special-education]]) e no trabalho de RL heurística que alinha modelos como guias socráticos em vez de respondedores ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). O pós-treinamento não precisa moldar apenas o que o modelo diz: uma plataforma pareia um chatbot de tutoria protegido com um agente de aprendizado por reforço que escolhe o próximo problema de prática, de modo que a política treinada decide o que quem aprende faz em seguida ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

**Modelos de raciocínio destilados.** Uma rota mais barata para o comportamento pedagógico é ensinar um modelo pequeno a imitar um maior: o Pedagogy-R1 (1,5B e 7B) foi ajustado por instrução sobre saídas pedagogicamente filtradas destiladas de um professor QwQ-32B, pareado com prompting Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

**Pós-treinamento condicionado por instrução versus dados autênticos.** O LearnLM enquadra o treinamento de modelos de educação como *seguimento de instrução pedagógica*, carregando instruções em nível de sistema que permitem a desenvolvedores e professores especificar o comportamento do tutor sem se comprometer com uma definição de pedagogia. Ele é misturado aos estágios de pós-treinamento do Gemini por co-treinamento, e especialistas o preferiram ao GPT-4o (**+31%**), ao Claude 3.5 Sonnet (**+11%**) e ao Gemini 1.5 Pro base (**+13%**). O achado-chave é que o **RL é substancialmente mais eficaz que o SFT isolado** para seguir instruções pedagógicas matizadas em conversas longas ([[learnlm-improving-gemini-learning]]). O TeachLM faz a aposta oposta: que o [[prompt-engineering|prompt engineering]] é um paliativo e que o ingrediente escasso são dados *autênticos* de interação quem aprende–tutor. Treinado sobre **100.000 horas** de sessões individuais sob anonimização rigorosa, ele dobra o tempo de fala do estudante, melhora o estilo de questionamento e aumenta os turnos de diálogo em **50%** ([[teachlm-post-training-llms-education]]). Juntos eles definem o espaço de desenho: pós-treinamento condicionado por instrução quando seus dados são escassos, ajuste fino sobre interações reais de tutoria quando você os tem.

**A qualidade da supervisão supera a quantidade de supervisão.** A progressão do SWIM para um simulador de escrita é a demonstração mais limpa. O prompting ancorado em rubrica deu controle de proficiência limitado (melhor traço médio QWK 0,577 para Claude Sonnet, 0,422 para GPT-5.4, perto de zero para um modelo aberto de 7B); o ajuste fino supervisionado elevou esse modelo de 7B a **0,474 ± 0,023**. O GRPO contra uma recompensa derivada de correção automatizada de redações o elevou ainda mais a **0,618 ± 0,005** ao longo de todo traço e prompt, com a recompensa desenhada como precisão densa normalizada por traço porque recompensas de correspondência exata são esparsas demais no cenário multitrato ([[swim-student-writing-simulation-2026]]). O estudo de modelagem de concepções errôneas chega a uma conclusão mais aguda sobre *o que* a supervisão precisa conter: modelos ajustados por instrução aprenderam concepções errôneas de álgebra apenas quando treinados em **rastros de solução no nível do passo**, com a precisão ficando **abaixo de 30% em todo tamanho de dados** quando treinados apenas em respostas finais. Seu papel de estudante generalizou em excesso o erro aprendido até que exemplos corretos fossem explicitamente misturados em razões tão baixas quanto **um em quatro**, enquanto o papel de tutor não mostrou tal custo, mantendo a precisão correta de **93% a 98%** ao longo de dez concepções errôneas treinadas conjuntamente ([[misconception-acquisition-dynamics-llms-2026]]).

Os dados de treinamento são eles próprios algo que modelos podem curar: o Edu-QuRating adapta a destilação de preferência à curadoria de dados educacionais, substituindo uma única nota "isto é educacional?" por 20 dimensões de rubrica que cobrem precisão factual, estrutura pedagógica e adequação de nível ([[garrod-edu-qurating-educational-data-curation-2026]]).

**A teoria pode ser um andaime de treinamento.** Para agentes que automatizam o [[learning-design|desenho de sistemas instrucionais]], um híbrido dos frameworks clássicos ADDIE e Dick & Carey com raciocínio estilo ReAct superou tanto a teoria pura (estruturada, mas inflexível) quanto agentes apenas de técnica (flexíveis, mas sem ancoragem), ao longo de **25.795** cenários de uma matriz de contexto de 51 variáveis, com um protocolo multijuiz para reduzir o viés de LLM-como-juiz ([[jeon-isd-agent-bench-2026]]). E um estudo de *rótulos* de supervisão concluiu que atribuir a cada exemplo de treinamento um único comportamento-alvo — competência no assunto, ancoragem curricular, raciocínio diagnóstico ou andaimes — elevou toda escala de modelo testada, com os maiores ganhos em andaimes e em usar o histórico de quem aprende, enquanto o diagnóstico de estado de conhecimento permaneceu o mais fraco, em **54,04%** ([[omniedu-open-educational-foundation-models-2026]]).

## Treinando o lado de quem aprende, não apenas o tutor

A mesma maquinaria é cada vez mais apontada para simular estudantes, o que muda a economia de avaliar um tutor: em vez de recrutar quem aprende, você o gera.

A cautela é que estudantes simulados precisam ser validados como qualquer outro instrumento. Usar como referência modelos ajustados e instruídos sobre **382 diálogos retidos** do maior corpus público de diálogos reais de matemática estudante–tutor — ao longo de sete métricas abrangendo aspectos linguísticos, comportamentais e cognitivos — produziu o teste mais direto do campo sobre se estudantes simulados se comportam como estudantes ([[simulated-students-tutoring-dialogues-2026]]). Duas abordagens adicionais pressionam a fidelidade: o INSIDE ajusta LLMs para tanto *agir* quanto *pensar* como estudantes, gerando diálogo interno ancorado na Taxonomia de Bloom ao longo de dimensões cognitivas, afetivas e de ação, e treinando sobre pares de rastros-de-pensamento e ações ([[inside-llm-student-simulator-reasoning-2026]]), e perfis cientes de histórico condicionam a simulação à trajetória prévia de um estudante, em vez de a uma persona estática ([[history-aware-student-simulation]]). Para um desenvolvedor, a lição prática é que um simulador é um instrumento de medição e herda toda questão de validade que isso implica.

## O que dá errado

**A adulação é um objetivo de treinamento, e não uma configuração de usabilidade.** A tutoria exige atrito corretivo, e os modelos resistem a ele. O EduFrameTrap mostra que modelos que resistem a ataques de troca de contexto ainda capitulam sob pressão de autoridade ou pressão social-afetiva e retêm feedback corretivo, e é por isso que seus autores argumentam que o comportamento "gentil, mas correto" deveria ser uma exigência explícita de treinamento, e não uma preferência ([[eduframetrap-llm-sycophancy-educational-safety]]). O treinamento que recompensa orientar em vez de responder — como o modelo de recompensa DAPO do EduQwen faz — é uma alavanca estrutural contra isso, mas a [[contextual-sycophancy-ai-literacy|adulação contextual]] persiste após prompting e alinhamento, com os erros de quem aprende ainda se propagando para o conselho da IA ([[contextual-sycophancy-ai-literacy]]).

**O treinamento não torna um modelo seguro ao longo de uma conversa longa.** O SafeTutors mostra que mesmo modelos pedagógicos especializados degradam ao longo de diálogo sustentado e podem cometer danos de divulgação excessiva de respostas ([[hazra-safetutors-pedagogical-safety-2026]]), portanto a [[pedagogical-safety|segurança pedagógica]] precisa ser testada no comprimento da conversa, e não no turno único.

**A validação pode substituir o treinamento — ou ser exigida em lugar dele.** Um GPT-4 de fronteira não treinado produziu aproximadamente **35%** de dicas genéricas demais, incorretas ou reveladoras de resposta ao redigir feedback para um sistema de tutoria inteligente, e suas próprias verificações automatizadas de qualidade se desalinharam do julgamento humano; os autores concluem que os LLMs carecem de um modelo interno de instrução e que validação robusta ou treinamento específico de domínio é necessário antes do uso não supervisionado voltado a quem aprende ([[reddig-maclellan-personalized-feedback-llm-2026]]). A implicação prática corta nos dois sentidos: às vezes a resposta certa é uma camada de validação em vez de uma rodada de treinamento, e às vezes a validação é o que lhe diz que uma rodada de treinamento falhou.

**Sua avaliação pode estar medindo a coisa errada.** Essa é a armadilha mais comum na literatura de ajuste fino aqui. ROUGE-L e QWK medem similaridade e ranking, não correção derivacional ([[lora-finetuned-control-systems-course-qa-2026]]); um ajuste fino pode alcançar QWK excelente enquanto o feedback do mesmo sistema é não parseável ([[wraft-automated-writing-evaluation-argumentative-2026]]); e um modelo pode ordenar estudantes corretamente enquanto erra sobre quão provável cada um deles precisar de ajuda. Onde o alvo é um constructo, o ajuste fino deve ser pareado com um instrumento que meça o constructo — o resultado de roteamento por confiança é um bom modelo, já que converte um número de precisão em uma política operacional com um humano na alça ([[know-when-to-trust-ai-scoring-reliability-2026]]).

## Uma sequência prática para desenvolvedores educacionais

Destilada da evidência acima, na ordem que evita computação desperdiçada:

1. **Estabeleça uma baseline que você consiga superar, incluindo uma trivial.** O modelo sem recuperação do estudo do assistente de disciplina pontuou abaixo do TF-IDF. Registre sua precisão apenas com prompt antes de considerar o treinamento.
2. **Acrescente recuperação antes de parâmetros.** Ancorar o modelo em seus próprios materiais é o maior ganho barato relatado aqui (52,3% → 66,6%), e é reversível.
3. **Projete o prompt, e reprojete-o iterativamente.** O refinamento guiado por rubrica moveu a concordância de 54,75% para 81,25% sem nenhum treinamento, e a geração de itens melhorou apenas depois que o refinamento de prompt estagnou — esse platô é seu sinal de que o treinamento pode acrescentar algo.
4. **Ajuste fino quando o alvo é um formato estável, uma propriedade controlada ou um domínio de que o modelo base carece.** LoRA sobre alguns milhares de exemplos pode colocar pequenos modelos abertos em paridade com corretor humano, e um conjunto de dados de instrução pode levar um modelo de 7B de perto de zero a 0,15 de uma referência muito maior em dimensões específicas de domínio.
5. **Escolha posto e camadas deliberadamente, e espere comportamento específico de arquitetura.** O ganho por parâmetro de adaptador caiu à medida que o posto subia, a adaptação de quatro camadas superou tanto o ajuste fino mais raso quanto o de profundidade completa, e uma família de modelos melhorou substancialmente enquanto outra não se moveu de todo.
6. **Use pós-treinamento quando você precisa mudar *como* o modelo ensina.** Recompense orientar em vez de responder, e espere que a recompensa seja burlada — escreva-a contra um benchmark, não contra uma intuição.
7. **Supervisione no nível do passo.** O treinamento apenas com respostas finais produziu precisão de concepções errôneas abaixo de 30% em todo tamanho de dados.
8. **Mantenha um humano na alça onde a confiança é baixa.** Rotear o quinto menos confiante das respostas removeu cerca de 80% do trabalho manual ao mesmo tempo em que melhorou a concordância.
9. **Teste segurança ao longo de conversas inteiras.** Os diálogos longos são onde os modelos especializados degradam.
10. **Calibre as expectativas.** A escolha de modelo e de prompt responde por apenas cerca de 15% do desalinhamento com ganhos de aprendizagem; parte do que você quer do treinamento não está disponível a partir do treinamento.

## Questões em aberto

1. O pós-treinamento pedagógico generaliza entre disciplinas, ou ajuste específico de disciplina é sempre necessário?
2. O pipeline RL–SFT–RL pode ser combinado com memória longitudinal para personalização ao longo dos períodos?
3. Qual é o menor conjunto de supervisão que ainda ensina raciocínio pedagógico no nível do passo, e ele pode ser compartilhado entre instituições sem compartilhar dados de estudantes?
4. Como a avaliação de modelos educacionais ajustados deveria ser padronizada, dado que métricas de similaridade podem ser excelentes enquanto o modelo é inutilizável?

## Conexões com conceitos relacionados

Esta página é a companheira *como um modelo é feito* de [[llm|LLM]], que cobre o que os grandes modelos de linguagem são e como se comportam. Ela se situa sob [[ai-technologies|Tecnologias de IA]] como o nó de treinamento-e-adaptação, ao lado de [[rag|RAG]] (a alternativa de recuperação que usualmente vem primeiro), [[prompt-engineering|Prompt engineering]] (a alavanca mais barata) e [[reinforcement-learning|Aprendizado por reforço]] (a metade RL do pós-treinamento). Suas saídas alimentam [[intelligent-tutoring|Tutoria inteligente]] e [[adaptive-learning|Aprendizagem adaptativa]]; suas aplicações educacionais mais comuns são [[automated-assessment|Avaliação automatizada]], [[automated-essay-scoring|Correção automatizada de redações]] e [[ai-feedback-quality|Qualidade do feedback de IA]]; e seus parentes conceituais mais próximos são [[educational-nlp|PLN educacional]], [[simulating-students|Simulando estudantes]], [[open-source|Código aberto]] e [[student-modeling|Modelagem do estudante]]. Os riscos que cria são sustentados por [[pedagogical-safety|Segurança pedagógica]], [[ai-sycophancy|Adulação de IA]], [[hallucination-risk|Risco de alucinação]] e [[privacy|Privacidade]].

## Ideias equivocadas comuns

- **"O ajuste fino é o caminho para deixar um modelo bom na sua tarefa."** Recuperação e prompting vêm **antes na ordem de decisão**, e o resultado mais claro desta base de conhecimento é que o pós-treinamento é uma **terceira escolha, não a primeira**. Ajustar um modelo em dados de avaliação melhorou **formatação e similaridade** enquanto um ajuste separado **fracassou de todo na geração de feedback** — o método mudou a superfície e não a competência.
- **"O modelo é o principal determinante dos ganhos de aprendizagem."** A escolha de modelo e de prompt responde por apenas **cerca de 15%** da lacuna entre um LLM e os ganhos de aprendizagem dos estudantes. Otimizar os 85% restantes é onde está o trabalho, e ele não está nos pesos.
- **"Um modelo local terá desempenho inferior a um hospedado, então a recuperação é uma alavanca menor."** Em uma avaliação de três configurações, **a recuperação, e não o modelo, foi a decisão de desenho de primeira ordem**: o LLM local **sem recuperação alcançou apenas 52,3% de acurácia, abaixo de uma baseline TF-IDF**. Acrescentar recuperação levou o mesmo modelo para além de um limiar que nenhuma troca de modelo alcançaria sozinha.
- **"Mais dados de treinamento significam melhor comportamento de ensino."** O ajuste em dados de avaliação que melhorou a formatação enquanto piorava a geração de feedback é o contraexemplo em miniatura: otimizar contra um alvo de aparência semelhante pode melhorar o proxy e degradar o que você queria.

## Conceitos conectados

- [[llm]] — o que esses modelos são; esta página é como eles são feitos
- [[ai-technologies]] — guarda-chuva: tecnologias e técnicas de IA
- [[rag]] — recuperação, o passo antes do treinamento
- [[prompt-engineering]] — a alavanca mais barata, e a baseline a superar
- [[reinforcement-learning]] — o estágio RL do pós-treinamento
- [[intelligent-tutoring]] — o principal domínio de aplicação
- [[adaptive-learning]] — adaptar-se a quem aprende, distinto de adaptar modelos
- [[automated-assessment]] — onde os modelos de correção ajustados aterrissam
- [[automated-essay-scoring]] — a tarefa de que vem a maior parte da evidência de correção
- [[ai-feedback-quality]] — o que o ajuste fino conserta e o que não conserta
- [[educational-nlp]] — a família de métodos adjacente
- [[simulating-students]] — a aplicação do lado de quem aprende da mesma maquinaria
- [[student-modeling]] — a camada de modelagem abaixo da simulação
- [[open-source]] — pesos abertos são o que torna possível o ajuste fino local
- [[benchmark]] — como esses sistemas são avaliados, e os limites disso
- [[assessment-validity]] — por que uma boa métrica ainda pode significar um instrumento ruim
- [[pedagogical-safety]] — o que o treinamento não garante
- [[ai-sycophancy]] — um comportamento que o pós-treinamento pode visar
- [[hallucination-risk]] — o modo de falha que o ajuste fino não consegue curar
- [[privacy]] — a restrição sobre dados de treinamento e sobre desaprendizagem
- [[human-in-the-loop-ai]] — o recuo que torna a automação acessível
- [[metacognition]] — um alvo pedagógico para o pós-treinamento
- [[scaffolding]] — o comportamento que as funções de recompensa tentam codificar
- [[ai-education]] — o campo a que este trabalho serve

## Artigos conectados

- [[singh-eduqwen-pedagogical-rl-2026]] — Pipeline RL–SFT–RL: 96,52% no CDPK, superando o Gemini-3 Pro
- [[learnlm-improving-gemini-learning]] — Seguimento de instrução pedagógica dentro do pós-treinamento do Gemini
- [[teachlm-post-training-llms-education]] — Pós-treinamento sobre 100.000 horas de dados autênticos de tutoria
- [[tact-pedagogically-adaptive-esl-tutoring]] — Pós-treinamento alinhado a taxonomia visando a decisão pedagógica
- [[swim-student-writing-simulation-2026]] — SFT e GRPO contra prompting por rubrica, com detalhe de desenho de recompensa
- [[misconception-acquisition-dynamics-llms-2026]] — Rastros no nível do passo como exigência vinculante para o treinamento de concepções errôneas
- [[jeon-isd-agent-bench-2026]] — Agentes de desenho instrucional ancorados em teoria ao longo de 25.795 cenários
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — RL heurística para alinhar modelos como guias socráticos
- [[special-r1-rl-special-education]] — Aprendizado por reforço para alinhamento em educação especial
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Aprendizado por reforço guiado por LLM para personalização
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — um grande modelo de raciocínio pedagógico
- [[omniedu-open-educational-foundation-models-2026]] — um comportamento-alvo por exemplo, ao longo de escalas de modelo
- [[garrod-edu-qurating-educational-data-curation-2026]] — curando dados educacionais para treinamento
- [[lora-finetuned-control-systems-course-qa-2026]] — efeitos de posto em LoRA e ganho por parâmetro de adaptador
- [[aiawe-automated-writing-evaluation]] — AWE adaptado com LoRA onde a escala não previu o sucesso
- [[llm-graders-computer-science-exams-2026]] — um adaptador em ~3.900 exemplos alcançando paridade com corretor humano
- [[iks-instruct-dataset-indian-knowledge]] — um conjunto de dados de instrução com 24.795 exemplos e a baseline base de quase zero
- [[llm-children-reading-story-generation]] — controlabilidade em vez de escala para controle de nível de leitura
- [[bert-discourse-english-teaching-2026]] — quais camadas ajustar, e por que quatro superam doze
- [[nuclear-diffusion-text-to-image-learning-2026]] — arquitetura, e não contagem de parâmetros, decide se o ajuste fino funciona
- [[distilling-self-explaining-lm-learning-analytics-2026]] — destilação em um modelo de 2B com auditoria de fidelidade
- [[llm-unlearning-math-privacy]] — desaprendizagem baseada em gradiente de PII e conteúdo prejudicial
- [[reflection-level-classification-hungarian-essays-2026]] — transformers ajustados versus baselines clássicas e de embedding
- [[multimodal-item-parameter-estimation-2026]] — aprendendo curvas de TRI a partir de itens multimodais
- [[know-when-to-trust-ai-scoring-reliability-2026]] — roteamento por confiança como a política de humano-na-alça
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — recuperação como decisão de primeira ordem, com energia e VRAM relatadas
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — 23 estudos: prompting 13, ajuste fino 7, híbrido 3
- [[gpt-item-generation-l2-listening-2026]] — o prompting estagna, depois o ajuste fino acrescenta o resto
- [[wraft-automated-writing-evaluation-argumentative-2026]] — o ajuste fino venceu na pontuação e falhou no feedback
- [[educational-llm-alignment]] — o teto de ~15% sobre a escolha de modelo e de prompt
- [[yasar-llms-iterative-pedagogical-design-2026]] — prompting guiado por rubrica como a alternativa sem treinamento
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — controle de persona em nível de prompt para simulação de concepções errôneas
- [[eduframetrap-llm-sycophancy-educational-safety]] — a adulação como exigência explícita de treinamento
- [[contextual-sycophancy-ai-literacy]] — a adulação sobrevivendo a prompting e alinhamento
- [[hazra-safetutors-pedagogical-safety-2026]] — a segurança degradando ao longo de diálogo sustentado
- [[reddig-maclellan-personalized-feedback-llm-2026]] — ~35% de dicas inutilizáveis de um modelo de fronteira não treinado
- [[simulated-students-tutoring-dialogues-2026]] — se estudantes simulados se comportam como estudantes
- [[inside-llm-student-simulator-reasoning-2026]] — ajustando um modelo para agir e pensar como um estudante
- [[history-aware-student-simulation]] — simulação condicionada à trajetória de quem aprende
- [[liang-k12-kgraph-curriculum-knowledge-graph-2026]] — Dados estruturados pelo currículo são eficientes em amostras
