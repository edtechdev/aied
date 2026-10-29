---
title: "Como a IA pode me ajudar a dar um feedback melhor em escala?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
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

É a sexta semana. Você tem uma pilha de rascunhos, uma rubrica em que acredita e a suspeita crescente de que um terço dos seus comentários é lido por cima e esquecido. Um colega menciona que uma ferramenta agora comenta cada rascunho dentro de uma hora. A reunião de departamento precisa de uma resposta: isso é um avanço ou um jeito mais rápido de produzir texto que ninguém lê?

Resposta curta para dar a um colega: o feedback de IA conquista seu lugar em cobertura, tempestividade e consistência, dentro de uma faixa estreita. Trabalho linguístico de nível de revisão de texto e comentários de primeira passagem guiados por rubrica valem a automação. O alcance é a parte barata. Em um experimento cluster-randomizado com 1.176 calouros, desenhos reflexivos e híbridos superaram a crítica direta da IA na [[transfer-of-learning|transferência]] adiada e sem IA. Em um experimento randomizado de redação com 70 estudantes, o feedback de IA mais bem avaliado não produziu revisões melhores que as de uma professora experiente. O que o estudante faz com um comentário decide o resultado, e o [[feedback-literacy|letramento em feedback]] separa os estudantes que ganham dos que copiam.

## A versão curta

**1.** Decida o que conta como vitória antes de pilotar qualquer coisa: qualidade da revisão e desempenho adiado sem auxílio, não a fluência dos comentários.

**2.** Separe seus próprios comentários entre correções de nível linguístico e decisões de nível de julgamento. Só a primeira categoria é candidata à automação.

**3.** Escalone as fontes. Autoavaliação primeiro, feedback dos pares depois, crítica da IA por último. Duas fontes colocadas lado a lado produzem assimilação passiva.

**4.** Entregue sua rubrica ao modelo e faça com que ele raciocine passo a passo. Uma instrução nua produz saída genérica.

**5.** Mantenha com um humano a mensagem final, o tom e tudo o que se torna registro.

**6.** Faça o orçamento das horas que você vai gastar apagando e calibrando, e compare-as com as horas que você liberou.

## Decida o que conta como vitória antes de pilotar qualquer coisa

A métrica tentadora é a qualidade do que o modelo escreve. É também a métrica que engana.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] randomizaram 70 estudantes que escreviam redações argumentativas em persa em três grupos. O prompting de cadeia de pensamento produziu feedback significativamente mais bem avaliado (M = 12,90) do que o prompting zero-shot (M = 11,25, p = 0,01) e do que uma professora humana experiente (M = 11,20, p = 0,008). O grupo de cadeia de pensamento não revisou suas redações significativamente mais que o grupo que recebeu feedback da professora, que obteve ganhos comparáveis. Comentários melhores, as mesmas revisões. Se seu critério de sucesso é a qualidade do comentário, esse estudo é lido como vitória. Se é o que mudou na redação, não é.

Dois outros sinais embelezam um piloto que está indo mal, então fixe-os de antemão. A satisfação dos estudantes é um deles. No piloto institucional da Deakin relatado por [[tubino-adachi-ai-automated-feedback-literacy|Tubino e Adachi (2022)]], avaliações médias positivas coexistiram com erros apontados pelos próprios estudantes, então uma pesquisa de carinhas sorridentes não é evidência de precisão. O uso é o outro. A ferramenta da Deakin era opcional, e o uso ficou em cerca de 13% dos graduandos e 12% dos pós-graduandos, apesar de quase 4.000 estudantes terem acesso. Estudantes proativos e de alto desempenho a usaram mais. É isso que tornar uma ferramenta disponível compra para você.

A medida de resultado que se sustenta é a qualidade da revisão somada ao desempenho adiado sem IA. Reenvios múltiplos no mesmo dia são um rastro utilizável de se o estudante se engajou ou não. Não são evidência de que algo foi aprendido.

## Separe seus comentários antes de automatizá-los

Pegue seu último conjunto de comentários e divida em dois: correções de frases e decisões sobre o pensamento. A divisão diz o que automatizar, e ela é mais estreita do que os fornecedores sugerem.

O piloto da Deakin rodou em 2021 com a ferramenta de feedback automatizado por IA da FeedbackFruits em 29 unidades e quase 4.000 estudantes. Ela atua sobre traços microtextuais: comprimento de frase, pontuação, gramática, estrutura do texto. Isso sustenta a etapa de revisão de texto, em que o professor define os parâmetros, o estudante usa a ferramenta de forma independente e o feedback chega a tempo de ser acionável. O que escala é a divisão do trabalho, não o modelo.

Comentários de nível de julgamento são onde moram os modos de falha. [[learner-centered-feedback-ai|Aldino et al. (2026)]] coletaram problemas do lado do professor com 21 docentes do ensino superior: tom inconsistente (n = 7), possível desinformação (n = 5) e problemas de confiança (n = 5). O esforço de revisão deles foi para apagar elogios exagerados e sugestões genéricas, não para acrescentar conteúdo. Essa lista é o seu trabalho de revisão, e é aí que as horas vão.

## Escalone as fontes em vez de empilhá-las

A evidência de desenho mais forte vem de um experimento de campo longitudinal, multicêntrico e cluster-randomizado: 1.176 calouros em 48 turmas de 4 universidades e 3 domínios de [[stem-education|ciências]], randomizados no nível da turma em condições apenas pares, GenAI direta, GenAI reflexiva e híbrida ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

A condição reflexiva exigia autoavaliação antes da crítica da IA. A híbrida rodava autoavaliação, depois feedback dos pares, depois crítica da GenAI. A híbrida produziu os maiores ganhos de qualidade argumentativa e a vantagem mais clara na aprendizagem conceitual. Reflexiva e híbrida produziram ambas assimilação de feedback mais forte e mais [[self-regulated-learning|aprendizagem autorregulada]] que a GenAI direta, e ambas a superaram na transferência adiada e sem IA. A GenAI direta elevou a qualidade argumentativa imediata acima do feedback dos pares, que é a vantagem que ela tem, e o fez com transferência mais fraca.

O mecanismo explica por que o sequenciamento importa mais que a ferramenta. A crítica direta convida à assimilação passiva: o estudante lê um veredito e o aplica. Desenhos reflexivos e híbridos obrigam o estudante a interpretar o comentário, compará-lo com critérios, julgar sua relevância e então revisar. O valor educacional depende menos do acesso à IA do que de o ambiente de feedback preservar a [[agency|autonomia do estudante]] e o [[evaluative-judgment|julgamento avaliativo]] durante a revisão.

O feedback dos pares conquista seu próprio lugar na sequência. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen e Yan (2026)]] conduziram duas turmas paralelas de inglês (N = 118 calouros na China; GenAI n = 56, pares n = 62) por três ciclos de autoavaliação ao longo de um semestre. O scaffolding por GenAI melhorou o letramento em feedback de forma ligeira mas significativa em relação à revisão por pares humanos (ANCOVA p = 0,049, ηp² = 0,03). Estudantes de GenAI refinaram prompts iterativamente e verificaram ou contestaram saídas imprecisas. Estudantes do grupo de pares escolheram fontes por conveniência social e tiveram seu julgamento avaliativo distorcido por viés de amizade. A revisão por pares manteve um valor distinto para a consciência de audiência, e é por isso que os autores propõem desenhos em múltiplos estágios com feedback anônimo dos pares em vez de uma substituição.

A vantagem de Gu et al. foi pequena, e eles a leem como real, mas não transformadora por si só. O scaffolding do professor, as diretrizes de prompt e as planilhas fizeram o trabalho de sustentação.

## Dê uma rubrica ao modelo, depois faça com que ele mostre os passos

A geração referenciada por rubrica é a parte automatizável.

O ganho de qualidade de Farrokhnia et al. veio de um prompt de cadeia de pensamento que conduzia o modelo por uma avaliação passo a passo contra uma rubrica de argumentação, não de uma instrução nua para dar feedback. Gu et al. deram ao seu grupo de GenAI o ChatGPT-4o com rubricas pré-treinadas e diretrizes de prompt, e foi isso que tornou a saída verificável contra critérios declarados. Nos dois casos, o prompt é onde seus critérios entram no sistema, e o rastro de raciocínio é o que permite ver se o modelo os aplicou.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson e Yan (2025)]] fazem da qualidade do prompt a dobradiça de todo o processo. Prompts vagos rendem saída genérica e inútil, e comentários gerados podem ser alucinados, enviesados ou sobrepostos, o que empurra o julgamento avaliativo de volta para o leitor. A calibração é ainda mais afiada. Em Farrokhnia et al., a qualidade do feedback de GenAI esteve significativamente associada à força do rascunho inicial do estudante, enquanto a qualidade do feedback do professor não esteve. A professora calibrou com mais consistência. O volume escala. A calibração não.

## Mantenha a última palavra e o registro com humanos

[[becerra-aicofe-feedback-2026|Becerra, Palma e Cobos (2026)]] descrevem o AICoFE, que roda três modelos ajustados de forma independente (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) sobre pontuações de rubrica e observações qualitativas para produzir comentários de rascunho independentes. O professor então compõe a mensagem final selecionando frases ou parágrafos, com uma legenda mostrando qual modelo contribuiu com o quê. O modelo rascunha. O professor entrega, e o entregável é assinado por uma pessoa que leu o rascunho.

Aldino et al. encontram o mesmo padrão de auxiliar-depois-verificar na prática comum. O componente de aprendizado de máquina sinalizava com mais frequência "Atende ao Objetivo de Aprendizagem" como ausente (20 dos 21 professores o haviam omitido; 16 aceitaram a sinalização) e "Relação Estudante-Professor" (14 omitiram; 12 aceitaram). Os professores decidiam cada sugestão por julgamento profissional, o que é justamente o ponto de colocá-los no circuito.

Doze dos 21 professores de Aldino et al. fizeram mais revisões no nível da frase, e o padrão dominante era calibrar o tom: editar elogios para baixo (f = 11), remover sugestões (f = 9), remover encorajamento (f = 8). As revisões se concentraram na dimensão relacional, especialmente na Relação Estudante-Professor (f = 24). Eles estavam protegendo autenticidade e voz profissional, e esse trabalho não se automatiza.

## Ensine os estudantes a ler o comentário

O letramento em feedback é pré-requisito, e é distribuído de forma desigual.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths e Lodge (2026)]] pediram a 32 estudantes de psicologia uma tarefa de redação de 25 minutos com gravação de tela e acesso irrestrito ao ChatGPT, e depois assistiram à gravação com eles em uma entrevista estimulada por vídeo. O letramento em feedback foi o único preditor positivo significativo da nota da redação (β = 0,46, p = 0,017). Frequência de uso de GenAI, [[trust|confiabilidade da fonte]] e [[prior-knowledge|conhecimento prévio]] não predisseram o desempenho, ponto que [[feedback-futures-genai|Zhan, Wood, Carless e Yan (2026)]] também fazem no editorial da edição especial. Menos de um terço dos estudantes comparou a saída da IA com outra fonte da internet. Metade expressou evitar a IA deliberadamente por [[academic-integrity|integridade acadêmica]] ou porque queria a redação com as próprias palavras. A maioria pediu feedback de nível de tarefa, que transfere mal para outras tarefas.

Os extremos são visíveis no par de redatores do IELTS que Zhan et al. descrevem. Um estudante de baixo letramento escreveu um prompt vago, recebeu feedback genérico, confiou nele ou copiou demais, e se engajou superficialmente. Um estudante de alto letramento escreveu um prompt referenciado por critérios, fez perguntas de acompanhamento, cruzou fontes e monitorou as revisões. A diferença era instrução e hábito, não acesso à ferramenta.

Diga aos estudantes diretamente que comentários de modelo podem ser alucinados, enviesados ou sobrepostos, e que a revisão é do estudante. Enquadre a saída como opinião preliminar a ser julgada, não como resposta a ser copiada. Depois peça a comparação, porque menos de um terço dos estudantes a faz sem ser solicitado.

## O que os professores erram sobre isso

Mais comentários significam mais feedback. Comentários são baratos de produzir e caros de absorver, e a restrição está do lado do estudante no circuito. Os comentários de IA mais bem avaliados de Farrokhnia et al. não produziram mais revisão do que os comentários da professora.

Um modelo melhor vai consertar a saída genérica. As falhas da ferramenta da Deakin eram falhas de escopo: traços de nível de frase, uma faixa estreita de revisão de texto. Zhan et al. localizam a correção no prompt, na rubrica ou no humano, não em um modelo maior. O par de redatores do IELTS é a demonstração: mesma ferramenta, hábitos diferentes, resultados diferentes.

Disponibilizar a ferramenta é a intervenção. O uso ficou em cerca de 13% dos graduandos e 12% dos pós-graduandos quando a ferramenta era opcional. O resto da questão de desenho é o que acontece com os outros 87%.

A economia de tempo é automática. Perguntados sobre o que a ferramenta de feedback por IA lhes deu, os 21 professores raramente citaram economia de tempo (n = 2). Citaram reflexão (n = 14), melhora da linguagem e da estrutura (n = 11) e identificação de componentes ausentes (n = 10) com muito mais frequência. Editar (f = 32) e remover (f = 27) dominaram seu trabalho de revisão, com acréscimos raros (f = 8). O que aparece é um rascunho e um estímulo diagnóstico. O que também aparece é trabalho de revisão, calibração e verificação. [[ai-save-instructor-time|A questão da carga de trabalho]] é a mais frequentemente prometida como resolvida, e a GenAI redistribui o trabalho docente em vez de eliminá-lo.

As avaliações de satisfação dizem que os comentários são precisos. No piloto da Deakin, avaliações médias positivas coexistiram com erros apontados pelos estudantes. Amostre a saída contra sua própria leitura dos mesmos rascunhos e registre onde o modelo foi genérico, errado ou bajulador.

## O que vai voltar contra você

**"O feedback de IA não é pessoal."** Muitas vezes é verdade, e é a razão de manter a última palavra com um humano. O AICoFE existe porque prosa genérica de modelo não é o que um estudante deve receber: o professor seleciona, edita e assina a mensagem final. Os 21 professores de Aldino et al. reescreveram o tom pelo mesmo motivo. A personalização é seu trabalho neste desenho, e o modelo está fazendo o trabalho de preparação.

**"Meus estudantes não vão ler o feedback de qualquer jeito."** Eles leem menos do que gostaríamos, e a evidência diz que a correção é desenho, não volume. A assimilação no piloto da Deakin ficou em cerca de 13% e 12%. Os comentários mais bem avaliados de Farrokhnia et al. não produziram revisão extra. O que mudou o ponteiro foi um sequenciamento que força engajamento, autoavaliação e depois feedback dos pares e depois crítica da IA, mais três ciclos de revisão ao longo de um semestre que produziram diferenças mensuráveis de letramento em feedback.

**"Não é por isso que os estudantes pagam."** Então impeça a IA de se tornar a única voz que eles ouvem de você. A versão defensável dá aos estudantes mais momentos de feedback enquanto você gasta suas horas nas partes intensivas em julgamento: a palavra final, a calibração, os comentários que carregam sua autoridade. O que os estudantes perdem em uma implantação descuidada é a coerência entre critérios, comentários e resultado. Especifique a complementaridade por meio de sequenciamento, comparação, edição e governança, e a objeção perde força. Deixe duas fontes lado a lado e ela não perde.

**"Não tenho tempo de revisar tudo o que o modelo escreve."** Então não revise tudo. Automatize a faixa em que os erros são baratos de pegar, o trabalho linguístico de nível de frase, e amostre a saída de nível de julgamento contra rascunhos que você já corrigiu. Os números de Aldino dizem o que procurar: tom, desinformação, elogio exagerado, sobreposição.

## O que fazer nesta semana

**1.** Separe seu próprio último conjunto de comentários em correções de nível linguístico e decisões de nível de julgamento, e conte cada pilha.

**2.** Escreva o prompt passo a passo referenciado por rubrica que você entregaria a um modelo, e teste-o contra três rascunhos que você já corrigiu.

**3.** Amostre a saída contra seus próprios comentários e registre onde o modelo foi genérico, errado ou bajulador.

**4.** Escalone uma tarefa como autoavaliação, depois feedback dos pares, depois crítica da IA, e diga aos estudantes que a IA é uma opinião preliminar que se espera que eles contestem.

**5.** Peça uma comparação com uma segunda fonte ou com os critérios, já que menos de um terço dos estudantes faz isso sem ser solicitado.

**6.** Registre quanto do feedback final veio do modelo e quanto você mudou. O rastreamento de curadoria do AICoFE é o modelo para esse registro.

**7.** Observe a divisão entre experientes e novatos. Professores com mais de cinco anos de experiência relataram mais problemas com a saída da ferramenta do que colegas menos experientes, que valorizaram o scaffolding. Se seus colegas experientes veem mais falhas do que você, isso é informação sobre sua própria calibração.

## Para onde ir a seguir

[[feedback]] é o conceito guarda-chuva para todo o sistema: provisão, circuito, assimilação e contexto de avaliação. [[ai-feedback-quality|Qualidade do feedback de IA]] cobre o que torna comentários gerados precisos, úteis, tempestivos e pedagogicamente sólidos, e esta página é o meio prático, sobre quais combinações dessas partes produzem melhor feedback em escala.

Perguntas sobre o que uma nota deve significar quando a IA está envolvida, incluindo substituição de construto, evidência autenticada de processo e regras de integridade, pertencem a [[redesign-assessment-ai-era|redesenhar a avaliação na era da IA]] e a [[assessment-validity|validade da avaliação]], não a esta página. Para o caso especial do ensino de escrita, veja [[writing-instruction-ai-best-practices|boas práticas para o ensino de escrita no contexto da IA]].
