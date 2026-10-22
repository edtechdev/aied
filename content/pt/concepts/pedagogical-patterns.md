---
title: Padrões pedagógicos
created: "2026-09-30T16:20:00-04:00"
updated: "2026-09-30T16:25:27-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy, scaffolding]
assessment: [formative-assessment, peer-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, k 12]
confidence: high
connected_faqs: [designing-ai-into-learning]
translation_of: concepts/pedagogical-patterns
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

> **Padrões pedagógicos** — as *sequências ordenadas* de atividade que a pesquisa nesta base de conhecimento testou, com atenção a onde a [[generative-ai|IA generativa]] entra na sequência e onde o [[human-in-the-loop-ai|julgamento humano]] precisa permanecer. Onde a [[pedagogy|pedagogia]] cataloga abordagens ([[active-learning|aprendizagem ativa]], [[problem-based-learning|aprendizagem baseada em problemas]], [[collaborative-learning|aprendizagem colaborativa]]) e o [[learning-design|desenho de aprendizagem]] descreve como um curso é desenhado, esta página cataloga o que estudantes e professores de fato *fazem*, em que ordem, e o que aconteceu quando isso foi tentado. O PAIRR — rascunho, revisão por pares, revisão por IA, reflexão, revisão — é o exemplo mais bem documentado, e o padrão por trás dele reaparece por todas as disciplinas: esforço primeiro, IA segundo, julgamento humano no ponto de apostas.

## Perguntas para refletir

- Um padrão é uma *sequência*, não uma ferramenta. Pegue uma tarefa que você ensina e escreva a ordem dos movimentos que um estudante faz. Onde nessa ordem a IA ajudaria, e onde ela faria o trabalho que o estudante deveria fazer?
- Vários padrões aqui dão deliberadamente à IA um papel *fraco* — dicas em vez de respostas, perguntas em vez de correções. Por que um tutor deliberadamente menos prestativo produziria melhor aprendizagem, e o que isso implica sobre as ferramentas de IA que sua instituição está comprando?
- O padrão mais bem evidenciado nesta página ([[learning-by-teaching|aprender ensinando]] a uma IA) pede aos estudantes que expliquem, e melhora a qualidade da explicação e das questões, mas *não* o recall objetivo. Se você o adotasse, o que mudaria na forma como você avalia?
- Quando o [[ai-feedback-quality|feedback da IA]] era de qualidade mais alta que o do professor, os estudantes não revisaram mais. O que isso sugere sobre a diferença entre produzir feedback e fazer os estudantes o usarem?
- Contextos mudam a resposta: alguns padrões foram testados online e de forma assíncrona, outros presencialmente com laboratório. Quais destes você conseguiria executar no seu contexto sem novas ferramentas, e quais precisariam de infraestrutura que você não tem?
- Quase todo padrão aqui mantém um humano no ponto de julgamento — correção, verificação ou interpretação. Isso é uma escolha de desenho, uma necessidade baseada em evidência, ou uma limitação do que foi testado até agora?

## Introdução

A pedagogia responde *como deveríamos ensinar*; esta página responde a uma questão mais estreita e operacional: **em que ordem os movimentos deveriam acontecer, e onde a IA pertence nessa ordem?** A distinção importa porque a mesma ferramenta produz resultados opostos dependendo de sua posição numa sequência. Um assistente de IA generativa colocado antes de um estudante tentar um problema deprime de forma confiável o desempenho posterior sem assistência; colocado depois de uma tentativa, com dicas em vez de respostas, a mesma classe de sistema remove esse dano.

Cada padrão abaixo é reportado com um status de evidência, porque a cobertura da base de conhecimento é desigual e a diferença importa a quem decide o que adotar:

- **Testado** — pelo menos um artigo reporta um teste controlado ou comparativo.
- **Misto** — testado, mas sem controle, com resultados conflitantes, ou com a variável testada enredada com outra coisa.
- **Propostas de desenho** — a ideia aparece apenas como proposta ou framework, sem nenhum teste reportado. Elas são coletadas separadamente ao fim da página, em *Propostas de desenho (ainda não testadas)*, e não são evidência.

Os padrões são agrupados pela função que servem numa aula: colocar o esforço antes da ajuda, emparelhar feedback de IA com feedback humano, verificar a compreensão em vez da saída, fazer do estudante o professor, estruturar a colaboração e confrontar uma [[misconceptions|concepção errônea]] específica. Contextos (online, presencial, misto) e disciplinas são reportados com cada um, e resumidos ao fim.

## Padrões que colocam o esforço antes da ajuda

Esses padrões compartilham uma afirmação estrutural: o estudante precisa se comprometer com uma tentativa antes de a IA contribuir. É a regra de desenho mais consistentemente sustentada na base de conhecimento.

### Recuperar ou tentar antes de a IA responder

**Evidência: testada.** A sequência é: tentar de memória, receber instrução ou um exemplo, praticar em sessões espaçadas, consultar a IA apenas depois de se comprometer com uma tentativa, receber feedback contingente à resposta que investiga a concepção errônea, e avançar apenas quando a resposta mostrar engajamento adequado.

Uma condição de recuperação espaçada adaptativa produziu as maiores notas no pós-teste (M = 78,19) e superou significativamente o estudo com IA dirigido pelo estudante (M = 67,28, d = 0,92, p = ,003) ao longo de 89 estudantes num curso misto de estatística, enquanto o espaçamento fixo foi estatisticamente indistinguível do adaptativo ([[adaptive-pretesting-retention|Akgun & Toker, 2026]]). O caso de contraste é decisivo: num [[rct|ensaio randomizado]] com 120 estudantes, o grupo que estudou *com* o ChatGPT irrestrito reteve menos num teste surpresa 45 dias depois — 57,5% de acerto contra 68,5% dos estudantes tradicionais, t(83) = −3,19, p = ,002, d = 0,68 — e também havia estudado cerca de 45% menos, com a desvantagem sobrevivendo a uma covariável de tempo de estudo ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui, 2025]]). Um experimento de campo randomizado e pré-registrado num MBA online descobriu que os ganhos acompanhavam as *semanas concluídas*, e não os minutos de exposição (+2,00 pontos por semana adicional de tutoria concluída, p = ,018), lido como a [[retrieval-spacing-interleaving|prática espaçada]] importando mais que o tempo total ([[ai-tutor-modality-randomized-field-experiment-2026|Yang et al., 2026]]).

### Falência produtiva: tentar antes da instrução

**Evidência: mista, e mais rarefeita do que sua reputação.** Os estudantes tentam um problema que visa um conceito que não lhes foi ensinado, o tutor retém a solução e elicia múltiplas tentativas, a ajuda vem apenas quando estritamente necessária, e a consolidação se segue com comparação e instrução direta.

O único estudo de campo que testa a sequência completa com um tutor direcionado usou 17 estudantes do ensino médio em Singapura: a condição direcionada alcançou nota mais alta em falência produtiva, significativa para a consistência entre problemas (p = ,046), e os estudantes produziram em média 2,6 representações por sessão (p = ,05), mas **nenhum resultado de aprendizagem foi medido** ([[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al., 2025]]). O apoio mais forte é indireto e vem de um experimento randomizado within-subjects com 26 estudantes, em que o [[scaffolding|scaffolding]] de resposta imediata teve desempenho significativamente *pior* que os papéis de par, monitor e tutor na abstração de modelos (β = −0,692, p = ,015; β = −1,039, p < ,001; β = −0,769, p = ,005), mesmo que os estudantes *preferissem* o tutor diretivo — a preferência corria contra a competência ([[preferred-scaffolding-ai-mathematical-modeling|Zhu et al., 2026]]).

### Análise de erros e exemplos errôneos

**Evidência: mista.** Os estudantes diagnosticam um erro num artefato — um diagrama gerado por IA que viola integridade referencial, uma consulta que perde um join, um trecho de código de [[llm|LLM]] — recebem pistas que os forçam a inferir a correção em vez de recebê-la pronta, a reparam e refletem sobre quais partes da saída eram não confiáveis.

Um estudo pré-pós com 13 estudantes num curso online de banco de dados subiu de 4,25 para 6,83 de 7 (t(12) ≈ 5,10, p < ,001, d = 1,49) usando ciclos semanais de crítica e refinamento construídos sobre casos deliberados de falha da IA, mas sem grupo controle o ganho não pode ser separado do [[curriculum-design|currículo]] ou do instrutor ([[pedagogy-ai-mistakes|Hosseini, 2026]]). Uma [[meta-analysis-systematic-review|revisão sistemática]] de 72 estudos de educação em computação reporta que a análise de erros é uma *competência distinta*: os estudantes tiveram desempenho significativamente pior em corrigir código gerado por LLM do que em tarefas tradicionais de exame de programação ([[kumar-genai-computing-education-systematic-review-2026|Kumar et al., 2026]]). Nenhum artigo da base de conhecimento reporta um teste controlado da instrução por exemplos errôneos como tal.

### Exemplos resolvidos com autoexplicação

**Evidência: mista — as duas metades divergem.** Um exemplo resolvido é apresentado com justificativas faltantes a completar, ou com erros a encontrar; o estudante o completa ou o repara, explica seu raciocínio, e então tenta o problema seguinte.

Atribuir adaptativamente exemplos guiados e buggy superou a atribuição aleatória de tipos de problema num estudo de sala de aula com 113 estudantes (pós-teste M = 72,3 e 72,5 contra 65,5 do controle, A = ,58, p = ,005 e p = ,002), e a variante de [[knowledge-tracing|rastreamento de conhecimento]] estreitou a lacuna de desempenho em 77,1% para estudantes de baixo [[prior-knowledge|conhecimento prévio]] (β = 9,4, p = ,001) ([[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al., 2026]]). Mas *acrescentar* o passo de autoexplicação ao feedback elaborado de IA perdeu em todas as medidas num experimento pré-registrado com 302 participantes: dobrou o tempo de feedback (4,1 vs. 2,1 min, p < ,001), cortou os problemas concluídos em 40% (2,0 vs. 3,4, p < ,001), não produziu ganho por episódio (OR = 1,03, p = ,486) e reduziu a maestria ao fim da sessão (65% vs. 79%, d = ,41, p < ,001) ([[structured-reflection-ai-explanatory-feedback-2026|Asher et al., 2025]]).

## Padrões que emparelham feedback de IA com feedback humano

O achado mais replicado da base de conhecimento sobre o feedback da IA é que ele funciona melhor *combinado* com feedback humano do que isoladamente — e que sua qualidade não é o que determina se os estudantes o usam.

### PAIRR: revisão por pares e por IA com reflexão

**Evidência: mista (amplamente implementado, não controlado).** Os estudantes leem e refletem sobre como a IA e o feedback funcionam, rascunham, dão e recebem revisão por pares, solicitam à IA feedback orientado por critérios sobre o mesmo rascunho, comparam criticamente ambos, escrevem um plano de revisão, revisam e refletem sobre qual feedback mudou o quê.

O maior estudo até hoje sobre o uso de feedback de IA por estudantes universitários acompanhou 654 estudantes ao longo de dez cursos de escrita e três cursos de [[stem-education|STEM]] intensivos em escrita: 58% preferiram feedback combinado de ChatGPT e de [[peer-assessment|pares]], 36% apenas de pares e apenas 6% apenas de IA; 75% acharam os dois similares e mutuamente reforçadores; o feedback da IA foi chamado de \"excessivamente geral\" por 31%, enquanto o feedback dos pares foi mais específico para 28%; e apenas 5,3% mostraram excesso de confiança no feedback da IA ([[pairr-ai-peer-review-2025|Sperber et al., 2025]]). O modelo também foi executado num curso de escrita de negócios de divisão superior com 34 estudantes, onde cerca de um quarto das reflexões codificadas expressou ceticismo ou notou imprecisões no feedback da IA ([[gift-ai-pairr-business-writing-2025|MacArthur et al., 2025]]). Ambos reportam dados de percepção; nenhum tem condição de controle, e é por isso que o padrão é *misto* em vez de *testado*.

### Feedback combinado de pares e de IA

**Evidência: testada.** A evidência comparativa vem de fora do programa PAIRR. Um quase-experimento com 122 estudantes chineses de inglês como língua estrangeira descobriu que o feedback integrado de IA mais pares elevou o [[student-engagement|engajamento]] comportamental, afetivo e cognitivo contra o feedback apenas de pares (todos p < ,001; η² parcial = 0,28, 0,28, 0,32) e melhorou a escrita em todas as quatro dimensões do IELTS (F(1,119) = 42,68, p < ,001, η² parcial = 0,26), mais fortemente na realização da tarefa (d = 1,41) — sem pós-teste retardado, de modo que a durabilidade não foi medida ([[ai-peer-feedback-l2-writing-engagement-2026|Liu, 2026]]). Num estudo randomizado com 45 estudantes de magistério em 12 grupos, o feedback de pares apoiado por GenAI superou o feedback apenas de pares em argumentação, e a variante com [[scaffolding|scaffolding]] de prompt teve o melhor desempenho em elementos avançados como dados de refutação e abordagem da posição oposta ([[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al., 2026]]).

### Crítica da IA e depois revisão

**Evidência: testada — com um nulo importante.** Rascunhar, solicitar à IA feedback orientado por rubrica, avaliar criticamente esse feedback contra a rubrica e as fontes, escrever um plano de revisão, revisar e refletir.

Um experimento fatorial controlado 2 × 2 com 120 estudantes de inglês descobriu que o ganho de qualidade de escrita foi maior para o grupo treinado tanto em filtrar quanto em avaliar (M = 7,92), contra 6,10, 4,56 e 3,10 nas outras condições, com a revisão profunda subindo de 28% para 48% e a vantagem persistindo num novo tópico e depois que o apoio da IA foi removido ([[rethinking-ai-writing-feedback-literacy|Dai, 2026]]). O nulo é a parte instrutiva: num experimento randomizado de três grupos com 70 estudantes, o feedback de IA com prompting de cadeia de pensamento foi significativamente de *qualidade mais alta* que o feedback de IA zero-shot (p = ,01) e que o do professor (p = ,008), mas essa vantagem de qualidade **não se traduziu em maiores ganhos de revisão** — o feedback do professor produziu melhora comparável ([[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al., 2026]]).

### Revisão humano-no-controle da saída da IA

**Evidência: mista — o passo de revisão raramente é a variável testada.** A IA gera saída de rascunho, agentes verificadores automatizados a checam quanto a realismo, legibilidade ou [[hallucination-risk|alucinação]], as verificações que falham retornam para refinamento, e um professor revisa, edita e aceita ou descarta antes que qualquer coisa chegue aos estudantes.

Um laço de quatro agentes com 8 professores produziu 212 problemas, dos quais 166 foram aceitos como estavam, e as verificações de realismo funcionaram como pretendido (10 problemas de realismo sinalizados, 20 edições de quantidade ou unidade, nenhum erro de matemática encontrado num problema final) — mas o encaixe de interesse foi o ponto fraco, com os estudantes rejeitando o tópico em 160 de 422 respostas ([[walkington-teachers-multi-agent-personalized-problem-generation-2026|Walkington et al., 2026]]). Uma ferramenta de feedback com o educador no laço, avaliada por 30 professores, nunca caiu abaixo de 4,1/5 em nove itens e cortou o tempo mediano por tarefa de 10–30 minutos para menos de 5, mas os autores reconhecem não haver avaliação dos estudantes, de modo que nenhuma alegação de aprendizagem é sustentada ([[zhao-learnlens-feedback-educators-loop|Zhao et al., 2025]]). Um experimento de red team torna concretas as apostas: 2 de 5 injeções de prompt mudaram uma nota sem detecção, a 100% (9/9) e 94% (17/18), deixando o professor como a única verificação real da saída da [[automated-assessment|correção por IA]] ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]).

## Padrões que verificam a compreensão em vez da saída

Como a IA consegue produzir um artefato competente, esses padrões movem a avaliação para evidência que o artefato não consegue fornecer por si só.

### Verificação oral e por viva

**Evidência: testada como formato, mas os resultados são sobre notas e afeto, não sobre aprendizagem.** Uma tarefa de programação é submetida com a IA permitida, seguida dentro de 48 horas por uma revisão oral obrigatória de 15 minutos do código, em que o estudante explica o programa e executa testes de integração ao vivo, corrigida 70% pela revisão e 30% pela rubrica.

Um quase-experimento de três semestres com 96 estudantes não encontrou mudança estatisticamente significativa no desempenho em exames apesar das novas políticas (~2% de melhora num exame), enquanto a proporção de caracteres colados sobre o total subiu de 61,0% para 68,1% (p < 0,0001); 90% dos estudantes disseram que as revisões os motivaram a entender melhor seu código e 65% que elas os ajudaram a evitar a dependência excessiva ([[code-review-genai-cs1|Fowles et al., 2026]]). Respostas orais gravadas de forma assíncrona produziram notas significativamente mais altas que a múltipla escolha presencial (parcial Md = 92,5 vs. 70, p < ,001; final Md = 94,2 vs. 86,4, p = ,002) com apenas correlações moderadas entre formatos (τ = ,44 e ,25) — e os autores alertam que essas são *diferenças de nota por formato, não evidência de ganhos de aprendizagem*, com o comportamento de trapaça não medido ([[asynchronous-oral-assessment-2026|Pentland et al., 2026]]). A direção não é uniformemente positiva: os estudantes estavam mais calmos numa viva baseada em chat (M = 6,50 vs. 5,86, p = ,028), mas avaliaram a viva presencial como significativamente melhor para entender seu próprio trabalho (p = ,004) ([[aivaluate-anxiety-assessment-2026|Yusuf et al., 2026]]).

### Checkpoints escalonados e evidência de processo

**Evidência: mista — nenhum teste controlado do mecanismo em si.** O trabalho do curso corre como módulos escalonados, cada um terminando num checkpoint que verifica tanto a saída *quanto* a abordagem — um resultado correto alcançado por hardcoding é rejeitado — com uma verificação pré-avanço que devolve o estudante aos passos pulados.

Um estudo de caso com 5 estudantes de pós-graduação num curso autodirigido de informação quântica registrou 75 interações e confirmou que o checkpoint duplo de saída-e-abordagem funcionou como pretendido, sem grupo controle ([[quantum-education-its|Elhaimeur & Chrisochoides, 2026]]). Um piloto com 27 participantes usando checkpoints de parada-bloqueio reportou ganhos significativos de [[self-efficacy|autoeficácia]] em todas as dez áreas de habilidade avaliadas (p < 0,001) num desenho pré-pós within-subjects em que os ganhos não podem ser separados de efeitos de prática ([[agentic-education-coding|Naboulsi, 2026]]). Um quase-experimento de três anos com 248 estudantes de [[engineering-education|engenharia biomédica]] encontrou taxas de A mais altas depois de acrescentar aprendizagem baseada em problemas de quatro módulos com marcos e rubricas (66,4% vs. 39,1%, Δ = +27,3 pontos, p = 0,042), persistindo após excluir o ano afetado pela pandemia, mas a comparação é histórica e não randomizada ([[pbl-biomedical-engineering-genai-2026|Nnamdi et al., 2026]]).

## Padrões que fazem do estudante o professor

### Aprender ensinando a um tutorado de IA

**Evidência: testada, e é o padrão mais bem evidenciado desta página.** O estudante estuda o conteúdo, então o explica a uma IA instada a assumir uma postura de novato que nunca revela a explicação-alvo; a IA pede explicações, exemplos e raciocínio de verificação, sequenciados de ordem inferior a superior, e persiste até que a explicação seja satisfatória.

Um quase-experimento com 68 futuros professores descobriu que explicar a um aprendiz novato de IAG pontuou mais alto em definir a sala de aula invertida (M = 4,18 vs. 3,29, p < 0,001, r = 0,474) e suas atividades (M = 4,91 vs. 3,06, p < 0,001, r = 0,642), gerou questões mais numerosas e de maior qualidade (ambos p < 0,001) — mas mostrou **nenhuma diferença de grupo em questões objetivas** (M = 23,18 vs. 21,57, p = 0,416) ([[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al., 2026]]). Um experimento de laboratório randomizado com 41 estudantes encontrou notas mais altas em teste de conhecimento (11,86 ajustado vs. 10,53, F = 35,54, η² = 0,74) e código mais claro e legível, mas **nenhuma diferença na correção do código** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al., 2024]]). Uma implantação de 11 semanas com 546 estudantes descobriu que cada ato adicional de aprendizado profundo se associava a uma diminuição de 2,7% nas tentativas esperadas de quiz (IRR 0,973, p < ,001), com a comparação confundida por tempo de tarefa e pela contornação de fim de semestre, que subia para 30–35% de reuso de conteúdo externo ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al., 2026]]). A forma consistente: ganhos em explicação e trabalho generativo, não em recall objetivo.

## Padrões que estruturam a colaboração

### Papéis roteirizados com uma IA compartilhada

**Evidência: testada, mas em contextos controlados ou não controlados, e não em salas de aula comuns.** Dois estudantes compartilham uma IA e recebem papéis explícitos com regras de rotação; a IA é configurada para assumir um papel conforme necessário, e sua saída vai para todo o grupo. Numa variante de programação em dupla, a IA compartilhada modela a atenção e o esforço conjuntos da díade, prevê um colapso até 30 segundos antes e escala scaffolds em níveis, de não fazer nada até uma dica diretiva.

Um experimento within-subjects com 26 díades descobriu que a condição de feedback alcançou maior sucesso em depuração (t[49,96] = −13,51, p < ,0001) e terminou mais rápido (t[44,70] = 4,39, p < ,0001), embora tenha exigido hardware duplo de rastreamento ocular e pupilometria e não tenha testado a transferência para trabalho em dupla não supervisionado ([[golrang-propact-pair-programming-2026|Golrang et al., 2026]]). Um quase-experimento com 58 estudantes de pós-graduação em 16 grupos descobriu que o desenho de papéis elevou as notas de conteúdo de mapas mentais de 3,65 para 4,59 numa escala SOLO de 1–5 (z = 3,771, p < 0,001), enquanto as contagens de nós e ramos ficaram estáveis — mas sem grupo controle, efeitos de prática não podem ser descartados ([[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al., 2026]]).

### Discussão assistida por IA

**Evidência: mista — a única implementação direta é uma descrição de caso.** Os estudantes analisam um cenário e respondem a questões guiadas de forma independente, solicitam ao ChatGPT com um prompt padronizado as mesmas questões, avaliam as respostas da IA quanto à acurácia contra as suas, refinam sua resposta e fecham com uma discussão de turma inteira.

A atividade de economia explora deliberadamente um erro da IA — o ChatGPT chama de demanda \"perfeitamente elástica\" o comportamento retratado na canção, quando a resposta correta é inelástica — transformando a validação da saída da IA na discussão ([[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]). Ela reporta impressões do instrutor, não um resultado medido. Uma sequência testada de discussão colaborativa com 67 estudantes de magistério descobriu que o grupo experimental superou um controle de aula expositiva (M = 51,45 vs. 43,89, p = 0,001, g = 0,839) com a corregulação subindo (p = 0,043, g = 0,512) — mas a IA foi usada para *desenhar* a técnica, não para mediar a discussão ([[ccct-cooperative-learning-technique|Tutal, 2026]]).

## Padrões que confrontam uma concepção errônea específica

### Refutação e mudança conceitual

**Evidência: testada — com resultados diretamente conflitantes.** Eliciar a crença específica do estudante, apresentar um [[refutation-text|texto de refutação]] ou um diálogo de IA personalizado que a confronta, engajar com a contra-evidência e a explicação correta, reformular a concepção correta, e então retestar após uma demora.

Um experimento pré-registrado com 375 adultos descobriu que o diálogo de IA personalizado sobre concepções errôneas produziu reduções imediatas de crença significativamente maiores que tanto a refutação em estilo de livro didático quanto o diálogo neutro de IA, persistindo aos 10 dias, mas convergindo com a refutação do livro didático aos 2 meses ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen, 2026]]). Um quase-experimento de quatro grupos de Solomon com 413 alunos do 10º ano descobriu o *inverso*: textos de mudança conceitual escritos por especialistas e gerados por IA foram ambos significativamente mais eficazes que o diálogo interativo com ChatGPT, que não mostrou vantagem significativa sobre o controle, e os ganhos ficaram quase exclusivamente limitados aos estudantes de alto desempenho ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdogan, 2025]]). O segundo artigo sinaliza o conflito explicitamente e o atribui ao [[prompt-engineering|desenho de prompt]] e ao domínio. O texto de refutação em si superou o controle em ambos.

## Contextos e disciplinas

O padrão determina o que o contexto exige, e vários padrões foram testados em apenas um contexto:

- **Online e assíncrono.** Recuperação e espaçamento, as variantes socráticas, exemplos resolvidos com autoexplicação, uso com scaffolding de prompt, [[oral-assessment|avaliação oral]] assíncrona, e as implantações de aprender ensinando. Contextos assíncronos tornam o *sequenciamento* portador de carga, porque o sistema não consegue ver se o estudante tentou primeiro.
- **Presencial e misto.** [[productive-failure|Falência produtiva]], análise de erros, as variantes invertidas, revisão oral de código, colaboração roteirizada e os estudos de mudança conceitual. O tempo de aula é frequentemente realocado em vez de substituído — no padrão de revisão oral, as aulas migraram para vídeo para que o tempo de aula pudesse abrigar as entrevistas.
- **Disciplinas representadas na evidência testada.** [[writing-education|Escrita]] e [[language-learning|aprendizagem de línguas]] (PAIRR, feedback combinado de pares e de IA, crítica da IA e depois revisão), [[math-education|matemática]] (recuperação e espaçamento, falência produtiva, exemplos resolvidos, análise de erros), [[cs-education|ciência da computação]] (assistentes socráticos, análise de erros, revisão oral de código, aprender ensinando, trabalho em dupla roteirizado), [[medical-education|medicina]] (scaffolding socrático em entrevistas clínicas), [[teacher-education|formação de professores]] (argumentação roteirizada, aprender ensinando), [[business-education|negócios]] (tutoria de MBA invertida), e [[physics-education|física]], [[science-education|ciências]] e contextos [[vocational-education|profissionalizantes]] para os estudos de mudança conceitual e avaliação oral.

## O que a evidência ainda não sustenta

Dito de forma direta, porque são os achados mais propensos a serem silenciosamente descartados:

- **Feedback de IA melhor não produz mais revisão.** O feedback de cadeia de pensamento de qualidade mais alta superou o do professor em qualidade e não produziu vantagem de revisão (Farrokhnia et al., 2026).
- **O [[socratic-method|questionamento socrático]] não é automaticamente melhor.** Um ensaio randomizado com 132 estudantes descobriu que o assistente socrático com contexto completo foi avaliado como significativamente *pior* para apoiar a conclusão da tarefa que todas as outras configurações (posto médio 48,63, μ = 3,53, contra 4,27, 4,16 e 4,12; χ²(3) = 12,14, p = ,007), com o maior uso externo de LLM (23%) e as respostas de compreensão plena menos frequentes (48% vs. 67%) ([[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al., 2026]]) — enquanto um RCT médico descobriu que um sistema [[agentic-ai|multiagente]] contendo um tutor socrático superou seu controle em notas de exame e de comunicação ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]).
- **Os estudantes preferem o papel menos eficaz.** A tutoria diretiva foi preferida enquanto o scaffolding de resposta imediata deprimia a abstração de modelos (Zhu et al., 2026).
- **Formatos de verificação mudam as notas sem demonstrar aprendizagem.** Formatos orais elevaram as notas e reduziram a [[anxiety-and-stress|ansiedade]], enquanto um estudo descobriu o presencial melhor para a compreensão, e nenhum estudo mediu a trapaça.
- **Nenhum teste controlado isola a revisão humana da saída da IA**, e o mecanismo de checkpoint nunca foi testado como variável manipulada.
- **Falência produtiva e análise de erros repousam sobre estudos pequenos e não controlados** (n = 17 e n = 13) que medem fidelidade de estratégia ou [[self-report-measures|autorrelato]], em vez de resultados de aprendizagem.

## Propostas de desenho (ainda não testadas)

Os padrões abaixo vêm de um guia para docentes fornecido pelo mantenedor da base de conhecimento (*Desenho de cursos pronto para IA*, setembro de 2026). Esse guia declara explicitamente que seus exemplos são **propostas de desenho, não intervenções testadas**, e nenhum artigo desta base de conhecimento os testa. Eles são registrados aqui como ideias de desenho que valem a pena tentar e avaliar, e não devem ser lidos como evidência.

- **Argumento + rastro de revisão** (composição, humanidades). Substitua uma submissão apenas de redação por uma tese inicial, dois trechos de fonte anotados, uma redação revisada e uma nota de decisão de 150 palavras; permita a crítica da IA depois do primeiro rascunho. Avalie a conexão afirmação–evidência e uma sugestão aceita ou rejeitada justificada contra as fontes.
- **Dado + afirmação fundamentada** (ciências, cursos de laboratório). Substitua um relatório de laboratório polido por observações brutas, um gráfico, uma nota de incerteza e uma explicação ligando os resultados a uma afirmação; a IA pode criticar uma interpretação fornecida, e os estudantes verificam essa crítica contra seus dados.
- **Tentativa + análise de erro** (pré-cálculo, cálculo). Substitua lição de casa apenas com respostas por uma tentativa inicial, a análise de uma solução resolvida falha e uma explicação corrigida; as dicas são permitidas apenas depois da tentativa. Essa é a forma de desenho do padrão de análise de erros acima, e ela herda a base de evidência fraca desse padrão.
- **Posição + desafio + reconsideração** (psicologia, sociologia). Substitua \"poste uma vez, responda duas\" por uma afirmação baseada em caso usando um conceito do curso; um par fornece um contraexemplo, e o autor revisa ou defende com evidência.
- **Projeto + verificação ligada** (negócios, profissões de saúde). Emparelhe uma recomendação com IA permitida para uma organização fictícia ou caso de paciente com uma explicação curta de duas decisões-chave e uma resposta a uma restrição alterada; publique a relação de correção entre os dois componentes.
- **Plano + tentativa + adaptação** (sucesso na faculdade). Substitua uma reflexão genérica sobre gestão do tempo por um plano de estudo de uma semana, um registro breve de tê-lo tentado e uma revisão ligada ao que aconteceu; a IA pode sugerir opções de agendamento depois que o estudante identificar as restrições.

As próprias ressalvas do guia se aplicam: vídeo gravado, reflexões e registros podem eles mesmos ser assistidos por IA, de modo que em cursos totalmente assíncronos uma gravação não deveria ser tratada como verificação de maestria independente. Dois de seus enquadramentos — gêmeas de avaliação e avaliação oral assíncrona como dissuasor de trapaça — permanecem frameworks aguardando validação; os estudos de avaliação oral assíncrona citados acima mediram notas por formato e não mediram a trapaça em absoluto.

## Conceitos conectados

- [[pedagogy]] — o guarda-chuva das abordagens de ensino que esta pagina operacionaliza em sequências
- [[learning-design]] — onde os padrões são escolhidos, sequenciados e embutidos num curso
- scaffolding — o princípio de apoio-e-desvanecimento que governa onde a ajuda da IA pertence
- [[feedback]] — o sistema que os padrões de feedback desta página instanciam
- [[formative-assessment]] — o propósito de avaliação que a maioria desses padrões serve
- [[peer-assessment]] — a metade humana dos padrões PAIRR e de feedback combinado
- [[ai-feedback-quality]] — por que a qualidade do feedback isoladamente não determina a revisão
- [[evaluative-judgment]] — a avaliação que os estudantes precisam exercer sobre a saída da IA
- [[feedback-literacy]] — a capacidade que os passos de avaliação crítica constroem
- [[human-in-the-loop-ai]] — a estrutura de supervisão dos padrões de revisão
- [[oral-assessment]] — o formato que fundamenta os padrões de verificação
- [[process-oriented-assessment]] — a lógica por trás dos checkpoints escalonados
- [[productive-failure]] — o conceito por trás de tentar-antes-da-instrução
- [[retrieval-spacing-interleaving]] — a base de evidência dos padrões de recuperação espaçada
- [[desirable-difficulties]] — por que sequências esforçadas superam as fluentes
- [[misconceptions]] — o que os padrões de mudança conceitual visam
- [[refutation-text]] — a forma textual do confronto de concepções errôneas
- [[learning-by-teaching]] — a pedagogia por trás do padrão do tutorado de IA
- [[socratic-method]] — o padrão de questionamento e sua evidência conflitante
- [[collaborative-learning]] — o contexto do trabalho com IA compartilhada roteirizada
- [[cognitive-offloading]] — o risco que todo padrão de esforço-primeiro é desenhado para evitar
- [[metacognition]] — o que os passos de reflexão nessas sequências visam disparar
- [[prompt-engineering]] — a camada de scaffolding nos padrões de uso estruturado
- [[transfer-of-learning]] — o resultado pelo qual a maioria dos padrões é julgada em última instância
- [[assessment-validity]] — a razão pela qual a evidência de processo é proposta
- [[academic-integrity]] — o motor por trás da verificação oral e de processo
- [[ai-literacy]] — a capacidade desenvolvida ao criticar a saída da IA
- [[online-teaching-and-learning]] — o contexto que torna o sequenciamento portador de carga
- [[higher-ed]] — o nível onde a maior parte dessa evidência foi gerada
- [[k-12]] — o nível dos estudos de falência produtiva, mudança conceitual e avaliação oral

## Artigos conectados

- [[pairr-ai-peer-review-2025]] — Revisão por pares e por IA + Reflexão (PAIRR): a sequência carro-chefe, N = 654 (Sperber et al. 2025)
- [[gift-ai-pairr-business-writing-2025]] — PAIRR aplicado num curso de escrita de negócios (MacArthur et al. 2025)
- [[ai-peer-feedback-l2-writing-engagement-2026]] — O feedback integrado de IA mais pares elevou o engajamento e todas as quatro dimensões do IELTS (Liu 2026)
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — Feedback de pares com GenAI e scaffolding de prompt na argumentação colaborativa (Chang et al. 2026)
- [[rethinking-ai-writing-feedback-literacy|Dai (2026)]] — Treinar estudantes a filtrar e avaliar o feedback da IA: as condições FRAC e APCA
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Feedback de IA de qualidade mais alta não produziu maiores ganhos de revisão (Farrokhnia et al. 2026)
- [[guardrails-ai-teaching-assistants-programming-2026]] — O socrático mais contexto completo foi avaliado como pior que todas as outras configurações de assistente (Eastwood et al. 2026)
- [[ai-standardized-patient-scaffolding-medical-2026]] — Scaffolding socrático disparado por necessidade no treinamento de entrevista clínica, N = 100 (Yang et al. 2026)
- [[hashmi-socratic-physics-chatbot-2025]] — Chatbot socrático em mecânica introdutória: a especificidade das questões subiu de 10–15% para 100% (Hashmi et al. 2025)
- [[agent-type-feedback-style-self-directed-learning-2026]] — Feedback de agente socrático vs. diretivo, com a ordem não contrabalanceada (Han et al. 2026)
- [[adaptive-pretesting-retention]] — A recuperação espaçada adaptativa superou o estudo com IA dirigido pelo estudante (Akgun & Toker 2026)
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — O ChatGPT irrestrito durante o estudo reduziu a retenção em 45 dias (Barcaui 2025)
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Os ganhos da tutoria estruturada acompanharam semanas concluídas, não minutos (Yang et al. 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Exemplos versus prática se cruzam pelo tipo de conhecimento (Rachatasumrit et al. 2025)
- [[adaptive-scaffolding-cognitive-engagement-its]] — Exemplos guiados e buggy adaptativos num tutor inteligente de lógica (Dey Tithi et al. 2026)
- [[structured-reflection-ai-explanatory-feedback-2026]] — Acrescentar autoexplicação ao feedback de IA perdeu em todas as medidas (Asher et al. 2025)
- [[generative-ai-guardrails-harm-learning]] — A tutoria com proteções removeu o dano no exame causado pelo GPT sem proteções, ~1.000 estudantes (Bastani et al. 2025)
- [[guided-llm-scaffolding-independent-learning]] — Uso guiado versus irrestrito de LLM em estatística (Amanlou et al. 2026)
- [[preferred-scaffolding-ai-mathematical-modeling]] — O scaffolding de resposta imediata deprimiu a abstração de modelos enquanto era preferido (Zhu et al. 2026)
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Direcionar um tutor de LLM a reter soluções para a falência produtiva (Puech et al. 2025)
- [[pedagogy-ai-mistakes]] — Ciclos semanais de crítica e refinamento construídos sobre casos deliberados de falha da IA (Hosseini 2026)
- [[kumar-genai-computing-education-systematic-review-2026]] — A análise de erros como competência distinta, ao longo de 72 estudos de educação em computação (Kumar et al. 2026)
- [[lukesova-clue-before-correction-2026]] — Pistas guiadas em vez de correção direta de erros na revisão em L2 (Lukešová & Jennings 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Explicar a um aprendiz novato de IA, N = 68 (Wang et al. 2026)
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Teste randomizado de ensinar um agente ChatGPT a programar (Chen et al. 2024)
- [[explique-teachable-agent-algorithms-546-students-2026]] — Aprender ensinando implantado com 546 estudantes ao longo de 11 semanas (Wang et al. 2026)
- [[socrates-students-instructors-llms-lbt-2025]] — Estudantes desenhando questões que um LLM não consegue responder (Yang et al. 2025)
- [[code-review-genai-cs1]] — Entrevistas obrigatórias de revisão oral de código como resposta à GenAI em CS1 (Fowles et al. 2026)
- [[asynchronous-oral-assessment-2026]] — Avaliação oral gravada assíncrona versus múltipla escolha presencial (Pentland et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — A viva baseada em chat reduziu a ansiedade enquanto o presencial foi avaliado melhor para a compreensão (Yusuf et al. 2026)
- [[ai-supported-oral-assessment-tvet-2026]] — A IA trazendo à tona evidência de rubrica para o julgamento do professor em oficinas profissionalizantes (Adams 2026)
- [[quantum-education-its]] — Checkpoints de saída-e-abordagem num curso de pós-graduação autodirigido (Elhaimeur & Chrisochoides 2026)
- [[agentic-education-coding]] — Checkpoints de parada-bloqueio e uma verificação pré-avanço, N = 27 (Naboulsi 2026)
- [[pbl-biomedical-engineering-genai-2026]] — Aprendizagem baseada em problemas de quatro módulos com marcos e rubricas (Nnamdi et al. 2026)
- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]] — Um laço de revisão de quatro agentes com professores, e onde o encaixe de interesse falhou (Walkington et al. 2026)
- [[zhao-learnlens-feedback-educators-loop]] — Feedback com o educador no laço com notas de verificadores (Zhao et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Injeções de prompt que mudaram notas sem detecção, deixando o professor como a única verificação (Humble 2026)
- [[golrang-propact-pair-programming-2026]] — Uma IA compartilhada prevendo colapso de colaboração na programação em dupla (Golrang et al. 2026)
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] — Papéis roteirizados de estudante e de IA na construção de conhecimento em grupo (Cheng et al. 2026)
- [[paratutor-parent-child-tutoring]] — Apoio de IA com papéis separados na tutoria pai–filho (Luo et al. 2026)
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — O diálogo personalizado de IA superou a refutação do livro didático imediatamente, convergindo em dois meses (Corbett & Tangen 2026)
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Textos de mudança conceitual superaram o diálogo interativo com IA, o resultado inverso (Akdogan 2025)
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — Investigação guiada apoiada por IA e compreensão conceitual (Aydin 2026)
- [[ai-enhanced-flipped-classroom-three-year-2026]] — Comparação de três coortes de tradicional, invertida e invertida potencializada por IA (Liu et al. 2026)
- [[flipped-learning-genai-design-education-2026]] — Curso de estúdio invertido com scaffolding de prompt guiado por parâmetros (Qu et al. 2026)
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — O modelo de ensino moderou os resultados: invertida g = 1,96 contra tradicional g = 0,46 (Jing et al. 2026)
- [[ai-tutor-statistical-programming-adoption-2026]] — O uso semanal do tutor de lição de casa previu notas em tarefas de transferência num curso invertido (Préau et al. 2026)
- [[beck-genai-literacy-economics-hands-on]] — Uma discussão de crítica à IA em cinco passos construída sobre um erro da IA (Beck & Brodersen 2025)
- [[ccct-cooperative-learning-technique]] — Uma sequência testada de aprendizagem cooperativa com papéis atribuídos e galeria (Tutal 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Módulo de seminário e discussão entre pares com um recomendador de recuperação por IA (Huang 2026)
