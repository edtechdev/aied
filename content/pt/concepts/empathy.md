---
title: Empatia
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T07:40:00-05:00"
type: concept
foundations: [ai-literacy]
pedagogy: [professional-training, experiential-learning, social-emotional-learning]
technology: [affective-computing, affective-tutoring, generative-ai, simulation, sensor-and-gaze-analytics]
ethics: [pedagogical-safety, privacy]
audience: [instructors, medical educators, curriculum designers, researchers]
level: [higher ed, k 12]
confidence: medium
source_updated: "2026-11-11T07:40:00-05:00"
translation_of: concepts/empathy
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Síntese:** A empatia entra na educação por três direções ao mesmo tempo: como um resultado que os educadores tentam ensinar, como um construto que tentam medir e como algo que os sistemas de IA são cada vez mais descritos como capazes de exibir. A evidência é desigual nas três. Ensinar empatia funciona — o role-play, a RV e o diálogo com LLMs produzem ganhos pré-pós mensuráveis —, mas o efeito encolhe à medida que a experiência se torna menos corporificada, e os estudos comparativos confundem a modalidade com o tempo de tarefa. Medir empatia é mais difícil do que ensiná-la: as avaliações de observadores se sustentam entre si, enquanto os proxies de visão computacional concordam quanto ao contato físico, discordam quanto ao contato visual e se invertem quanto ao sorriso. A IA pode ensaiar conversas empáticas em escala, mas o estudo mais bem controlado mostra competência autoavaliada subindo sem uma checagem de desempenho observado. E a preocupação mais recente vai na direção oposta: acreditar que a IA pode fornecer empatia torna as pessoas menos dispostas a fornecê-la elas mesmas ([[shastry-gray-empathy-offloading-2026|Shastry & Gray, 2026]]).

## Perguntas para refletir

- Se o role-play, a RV e um chatbot todos aumentam os escores de empatia, a diferença é aprendizagem ou tempo de tarefa?
- Uma estudante de enfermagem sorri para um paciente com dor: os observadores leem incongruência, um detector de sorriso lê calor. Em qual deles uma avaliação deveria confiar?
- A maioria dos estudos sobre treinamento de empatia apoiado por IA mede confiança, não comportamento observado. Se a confiança sobe mas o comportamento não, o treinamento falhou ou apenas não foi testado?
- Quando um chatbot responde com calor, os estudantes relatam se sentir compreendidos. Isso é empatia, uma encenação de empatia, ou algo que importa independentemente de qual seja?
- Se as pessoas terceirizam a responsabilidade empática quando passam a acreditar que a IA pode fazê-lo, o que isso implica para um [[curriculum-design|currículo]] que ensina empatia em parte por meio da prática com IA?
- Quem deveria decidir se a empatia é um resultado avaliável por nota — e o que acontece com os estudantes que são precisos mas não calorosos?

## Introdução

A empatia costuma ser decomposta em pelo menos dois componentes: um componente cognitivo, a tomada de perspectiva, e um componente afetivo, compartilhar o sentimento do outro, com algumas abordagens acrescentando um componente motivacional, o impulso de ajudar. O sofrimento pessoal — a reação aversiva ao sofrimento do outro — é frequentemente medido ao lado e se comporta de forma diferente do resto. Isso importa para a educação porque os componentes são ensináveis de maneiras diferentes e mensuráveis com graus diferentes de sucesso.

A IA entra em três pontos distintos, e confundi-los é a principal fonte de confusão na literatura.

1. **A IA como método de ensino da empatia humana.** [[simulation|Simulações]], corporificação em RV, role-play com personas geradas por [[llm|LLM]] e imagens generativas usadas para tornar vívida a experiência do outro.
2. **A IA como instrumento de mensuração.** Visão computacional que pontua linguagem corporal em simulações gravadas, ou escalas que tratam a empatia como uma disposição expressa na interação com a IA.
3. **A IA como ator empático.** [[conversational-ai|Chatbots]] que fazem o papel de pacientes, treinadores ou companheiros e são desenhados para parecer compreensivos, o que levanta a questão de se a empatia é real, encenada ou um substituto do contato humano.

As duas primeiras dizem respeito aos aprendizes; a terceira, aos sistemas. Uma página que as mistura produz afirmações como "a IA melhora a empatia" que significam três coisas diferentes.

## A empatia pode ser ensinada?

A comparação direta é excepcionalmente limpa no desenho e excepcionalmente confundida na execução. [[zwolinski-teaching-empathy-real-virtual-ai-2026|Zwoliński et al. (2026)]] distribuíram aleatoriamente 64 estudantes de mestrado de um curso de acessibilidade entre role-play do mundo real com cadeiras de rodas, trajes de envelhecimento e simuladores de gravidez; o mesmo equipamento em um laboratório de RV; ou construção de personas em diálogo com o ChatGPT-4.0. Os três grupos melhoraram significativamente no Índice de Reatividade Interpessoal de Davis. O role-play ganhou 13,2%, a RV 11,6% e a condição de IA 8,8%. Apenas o Sofrimento Pessoal diferiu significativamente entre os grupos.

A ordenação é intuitiva e a interpretação não é. As três condições duraram aproximadamente 125, 87 e 42 minutos, de modo que o estudo compara modalidade e dosagem ao mesmo tempo. É justo dizer que um diálogo de 42 minutos com um LLM produziu um ganho menor do que um exercício corporificado de duas horas; não é justo dizer que a corporificação vale três vezes mais por minuto. Os autores são explícitos sobre o confundimento, e a recomendação dos próprios estudantes — combinar a repetibilidade da RV, a riqueza sensorial do mundo real e a adaptatividade do LLM — é uma leitura razoável da evidência.

A literatura das [[medical-education|profissões da saúde]] acrescenta escala, mas não muita clareza causal. [[ismail-affective-domain-ai-healthcare-review-2026|Ismail e Zafira (2026)]] revisaram 17 estudos sobre IA para o desenvolvimento do domínio afetivo e encontraram as intervenções concentradas em treinamento de comunicação, pacientes virtuais, feedback reflexivo, simulação de comunicação de más notícias e avaliação no estilo OSCE. A maioria relatou ganhos em confiança, [[self-efficacy|autoeficácia]], engajamento reflexivo ou habilidade de comunicação percebida. A evidência para a empatia em si, a responsividade emocional, a autenticidade relacional e a comunicação não verbal permaneceu limitada. Esse é o achado central: um campo que pretende ensinar empatia está medindo, sobretudo, conforto.

Uma quarta vertente torna a ambiguidade explícita: sensores vestíveis de excitação e imagens geradas por IA podem tornar vívidas as circunstâncias do outro, mas um aumento na condutância da pele é evidência de excitação, não de empatia, e os estudos dessa linha muitas vezes param por aí ([[lim-ai-wearables-environmental-empathy-2024|Lim et al., 2024]]).

## A empatia pode ser medida?

As avaliações de observadores são o que mais se aproxima de um padrão de referência, e se comportam razoavelmente. Em [[nissan-nursing-empathy-computer-vision-2026|Nissan et al. (2026)]], dois docentes avaliaram 37 estudantes de enfermagem em uma simulação gravada com um inventário de 12 itens (α = 0,91) e uma escala de seis gestos (α = 0,93), e as avaliações de gestos se correlacionaram com o inventário entre 0,41 e 0,63.

Os algoritmos contaram uma história mais interessante. A detecção de contato físico concordou com quatro medidas de observadores entre 0,46 e 0,54. A detecção de contato visual e de mapas de calor não mostrou associação significativa com os julgamentos dos observadores. E o detector de sorriso se correlacionou *negativamente* com três medidas de observadores, e com a empatia total em r = −0,322, porque os observadores estavam vendo uma estudante sorrir para um paciente com dor e lendo isso como nervosismo ou incongruência. O sinal era real; a interpretação estava invertida. É a mesma lacuna inferencial documentada em [[sensor-and-gaze-analytics|analítica de sensores e olhar]], em um contexto em que o que está em jogo é uma nota clínica.

As [[self-report-measures|escalas de autorrelato]] ocupam o outro extremo. A Escala de Empatia em IA para Interação com IA Generativa trata a empatia como uma disposição humana expressa durante o uso da IA e pergunta aos respondentes sobre suas próprias respostas cognitivas, afetivas e motivacionais; sua estrutura fatorial preliminar não reproduziu as seis dimensões pretendidas ([[ai-empathy-scale-psychometric-evaluation-2026|Kang et al., 2026]]). Um questionário de disposição e uma observação comportamental não são intercambiáveis, e nenhum dos dois substitui as avaliações dos pacientes sobre se o encontro pareceu acolhedor.

## A IA pode ensaiar a empatia?

Sim, ao menos para a parte do ensaio. [[muller-role-prompted-gpt-empathetic-communication-2026|Müller et al. (2026)]] deram a 162 estudantes de medicina uma conversa com um GPT-4o com papel definido por prompt em um de quatro cenários — decisão compartilhada, entrevista motivacional, uma consulta sobre IST, comunicação de más notícias — e a competência de comunicação autoavaliada subiu de 5,89 para 6,83 em uma escala de 0 a 10 (d = 0,58) após uma média de 13 trocas. Os estudantes avaliaram o [[ai-feedback-quality|feedback da IA]] como útil em 7,92 de 10, mas a adequação do feedback não previu o ganho (r = 0,08). Não havia grupo de controle.

O padrão se repete: um ensaio curto e de baixo risco produz um grande ganho de autoeficácia, e o mecanismo é mais provavelmente o ensaio do que a crítica do modelo. Isso não é motivo para descartar a ferramenta. Pacientes padronizados são caros, escassos e agendados; um chatbot não é nada disso, e um estudante que já conversou uma vez sobre uma comunicação de más notícias usará uma sessão com paciente padronizado de outra forma. É motivo para parar de chamar o ganho de evidência de competência.

Onde a empatia é uma qualidade conversacional e não uma habilidade, a evidência é sobre percepção. [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] mantiveram modelo, plataforma e temperatura constantes e mudaram apenas o papel e os movimentos conversacionais no prompt, produzindo uma grande diferença na empatia percebida (21,27 versus 18,24, r = 0,53). A empatia, no sentido em que os estudantes a experimentam, pode ser roteirizada. Se roteirizá-la é educacionalmente bom é uma questão separada.

## O problema da substituição

A linha de trabalho mais recente pergunta o que a empatia da IA faz com a empatia humana. Em quatro estudos com 249, 494, 743 e 737 participantes, [[shastry-gray-empathy-offloading-2026|Shastry e Gray (2026)]] descobriram que quanto mais capazes as pessoas acreditam que a IA é de oferecer apoio emocional, menos dispostas elas estão a oferecê-lo elas mesmas — o descarregamento da empatia —, controlando por empatia de traço e uso prévio de IA. Quando a fonte de apoio do receptor era nomeada, os participantes disseram que descarregariam menos para a IA do que para amigos ou terapeutas, porque avaliavam a capacidade empática da IA como menor. Em uma medida comportamental, os mesmos participantes que disseram que não descarregariam escolheram menos palavras de empatia e mais palavras de indiferença.

Para a educação, isso corta nos dois sentidos. Um currículo que usa a IA para praticar empatia pode estar construindo a habilidade; uma cultura de campus que encaminha o apoio emocional para chatbots pode estar erodindo a motivação para usá-la. Os dois efeitos são compatíveis, e nada na literatura atual os mede em conjunto.

## O que isso significa na prática

- **Separe as três perguntas.** Quando alguém afirma que a IA melhora a empatia, pergunte se quer dizer ensinar humanos, medir humanos ou simular empatia. A evidência é diferente para cada uma.
- **Não aceite a autoeficácia como resultado de empatia.** A confiança é barata e sobe depois de quase qualquer ensaio; observação, pacientes padronizados ou avaliações de pacientes são as medidas que importam.
- **Trate os escores de visão computacional como leitores secundários.** A detecção de contato físico é utilizável para [[formative-assessment|feedback formativo]]; a detecção de sorriso e de contato visual não é, sem o contexto de cenário que um modelo não tem.
- **Planeje o tempo, não apenas a modalidade.** Os estudos comparativos confundem as duas, e um método mais barato que leva um quarto do tempo ainda pode ser a melhor escolha — só não uma escolha equivalente.
- **Fique atento ao descarregamento.** Se a IA se tornar o canal padrão de apoio emocional, a empatia que você tenta ensinar pode estar sendo silenciosamente terceirizada.

## Concepções errôneas comuns

- **"A IA pode ensinar empatia."** A IA pode apoiar o ensaio e a [[reflection|reflexão]]; a revisão mais robusta encontra evidência limitada para a empatia como resultado, e o estudo de treinamento mais bem controlado mede autoavaliação.
- **"Empatia é linguagem calorosa."** A empatia percebida pode ser produzida apenas pelo [[prompt-engineering|desenho do prompt]], o que é evidência sobre percepção, não sobre compreensão.
- **"Um sorriso significa calor."** Em um encontro clínico angustiante, os observadores leem o sorriso como incongruência, e um detector de ação facial o lê como afeto positivo. O contexto é a variável que falta.
- **"Escalas de autorrelato medem empatia."** Elas medem uma disposição ou um autoconceito; não medem comportamento em um encontro.
- **"Mais imersivo é sempre melhor."** Métodos imersivos mostram ganhos maiores, mas a várias vezes o custo e a duração, e as comparações não equalizam a exposição.

## Conceitos conectados

- [[affective-tutoring]]
- [[affective-computing]]
- [[social-emotional-learning]]
- [[professional-training]]
- [[simulation]]
- [[medical-education]]
- [[nursing-education]]
- [[sensor-and-gaze-analytics]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[human-ai-collaboration]]
- [[ai-sycophancy]]
- [[pedagogical-safety]]
- [[well-being]]
- [[arts-design-and-media-education]]

## Artigos conectados

- [[zwolinski-teaching-empathy-real-virtual-ai-2026]] — Role-play 13,2%, RV 11,6%, diálogo com IA 8,8% no IRI, com o tempo de exposição confundido (Zwoliński et al., 2026)
- [[nissan-nursing-empathy-computer-vision-2026]] — A detecção de contato físico concordou com os observadores; a de sorriso se mostrou negativa (Nissan et al., 2026)
- [[muller-role-prompted-gpt-empathetic-communication-2026]] — Competência autoavaliada subiu d = 0,58 após 13 trocas, sem grupo de controle (Müller et al., 2026)
- [[ismail-affective-domain-ai-healthcare-review-2026]] — 17 estudos; ganhos de confiança comuns, evidência de empatia limitada (Ismail & Zafira, 2026)
- [[lim-ai-wearables-environmental-empathy-2024]] — EDA e imagens generativas como um pipeline de excitação, com a empatia afirmada e não medida (Lim et al., 2024)
- [[shastry-gray-empathy-offloading-2026]] — A crença na capacidade empática da IA previu menor disposição a oferecer apoio (Shastry & Gray, 2026)
- [[ai-empathy-scale-psychometric-evaluation-2026]] — Uma escala de disposição de 42 itens cuja estrutura fatorial não correspondeu ao seu desenho (Kang et al., 2026)
- [[empathy-coaching-chatbot]] — A linguagem empática aumentou a compreensão sentida, que previu engajamento e não mudança de comportamento (Siyan et al., 2026)
- [[wang-teacher-student-centered-agents-physics-2026]] — Papel e movimentos especificados no prompt produziram uma grande diferença de empatia percebida (Wang et al., 2026)
- [[akbaba-nursing-ai-experiences-tam-2026]] — Estudantes de enfermagem descreveram a IA como apoio emocional durante o estresse clínico (Akbaba et al., 2026)
