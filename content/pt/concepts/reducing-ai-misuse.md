---
title: "Reduzir o uso indevido de IA"
created: "2026-08-12T19:13:02-04:00"
updated: "2026-10-30T21:00:00-04:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
source_updated: "2026-10-28T15:48:01-04:00"
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

> **Reduzir o uso indevido de IA** — as alavancas de desenho, [[pedagogy|pedagógicas]] e de [[educational-policy-ai|política]] que impedem os estudantes de substituir a [[generative-ai|IA generativa]] por seu próprio trabalho [[cognitive-offloading|cognitivo]] e, em vez disso, os orientam rumo ao uso [[ethics|ético]] e produtivo. As abordagens eficazes são ordenadas por impacto, e não por popularidade, e a evidência mais forte favorece **alavancas estruturais** — [[guardrails|salvaguardas]] de ferramentas e redesenho da avaliação — que mudam o ambiente de modo que o uso indevido fique mais difícil, independentemente da motivação de um estudante, acima de **alavancas educativas** que dependem de construir capacidade durável e de [[framing-ai-use-for-students|aderência dos estudantes]].

## Questões para considerar

- Estudantes que terceirizam a lição de casa para a IA podem ver suas notas de lição *subirem* enquanto suas notas na [[summative-assessment|prova de livro fechado]] *caem*. Antes da leitura, por que o desempenho e a aprendizagem poderiam divergir tão agudamente — e o que essa lacuna sugere sobre o que "sucesso" com a IA realmente significa?
- A página ordena as intervenções por evidência causal e alcance, e situa as alavancas *estruturais* (salvaguardas de ferramentas, redesenho da avaliação) acima das *educativas* ([[teacher-role|ensinar]] boa prática) — precisamente porque as alavancas estruturais funcionam independentemente da motivação de um estudante. Você concorda que mudar o ambiente supera mudar mentes? Qual é o risco de confiar em cada uma?
- Um tutor com salvaguardas do tipo "dica, não resposta" eliminou o dano à aprendizagem que um sem salvaguardas causou, embora ambos parecessem úteis. Pense em uma ferramenta de aprendizagem que você já viu e que entrega respostas com demasiada facilidade. Onde fica a linha entre uma dica que dá andaimes e uma resposta que substitui — e você consegue enunciá-la antes da leitura?
- A correção mais forte inclui o redesenho da avaliação: provas em sala sem assistência, defesas orais, artefatos de processo, raciocínio recompensado acima da fluência de superfície. Como você se sentiria fazendo uma disciplina avaliada assim, e esse sentimento lhe diz algo sobre por que essa alavanca é ao mesmo tempo eficaz e impopular?
- Frameworks de declaração de IA que forçam os estudantes a mapear seu uso a estágios cognitivos (planejamento vs. geração de conteúdo) deslocam a ênfase da vigilância para a prática profissional. Você acha que tal reflexão realmente constrói melhor julgamento, ou apenas ensina os estudantes a descrever o uso indevido de forma mais esperta?
- Fixe uma meta antes da leitura: identificar uma mudança concreta na sua própria disciplina ou fluxo de trabalho que tornaria o uso indevido de IA mais difícil, e uma que tornaria o uso produtivo mais fácil. A qual dos níveis da página cada uma pertenceria?

## Introdução

O conceito repousa sobre a evidência de que o uso indevido de IA prejudica ativamente a aprendizagem durável — a lacuna desempenho–aprendizagem documentada no [[ai-misuse-learning-harm|dano à aprendizagem por uso indevido de IA]] — ao mesmo tempo em que infla o desempenho imediato. As intervenções visam, portanto, os mecanismos desse dano: copiar respostas, [[cognitive-offloading|descarregamento cognitivo]], erosão da motivação e deslocamento da aprendizagem. Elas não são mutuamente exclusivas; uma abordagem robusta combina um piso estrutural com a construção educativa de capacidade.

### Por que as alavancas estruturais importam mais

As intervenções podem ser ordenadas por **evidência causal × alcance estrutural × escalabilidade × [[sustainability|sustentabilidade]]**. Nessa base, as duas alavancas *estruturais* ocupam o topo porque funcionam quer os estudantes escolham o comportamento certo ou não — elas restringem o ambiente em vez de depender de motivação interna. As alavancas *educativas* são essenciais, mas só eficazes quando os estudantes aderem, portanto são tratadas como o segundo nível, apesar de sua promessa conceitual. [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher e Calderon (2025)]] empurram o argumento estrutural um nível acima, tratando a governança, e não o comportamento do estudante, como a restrição vinculante e propondo um framework de 130 indicadores de integridade para que gestores acadêmicos possam ver se a avaliação é autêntica, se os estudantes são conhecidos individualmente pelos professores que os avaliam, e se a integridade figura na ambientação e na orientação. Suas reformas visam arquiteturas de governança, pessoas e [[ai-technologies|tecnologias e recursos]], e eles propõem tomar emprestado o [[guardrails|red teaming]] da segurança cibernética para expor vulnerabilidades da avaliação antes que os estudantes as encontrem — um lembrete de que o piso estrutural é mantido por instituições que precisam tanto da informação quanto da vontade de mantê-lo. A própria literatura sobre uso responsável raramente testa a cadeia que esse ordenamento pressupõe. De 122 registros de abordagens extraídos de 31 estudos, 51 foram implementados e avaliados, em sua maioria por autorrelato, e apenas quatro estudos definiram uma fronteira, desenharam uma intervenção em torno dela e testaram se as decisões dos estudantes se alinhavam ([[tie-responsible-genai-use-academic-writing-review-2026|Tie, Gil Ortega e Zhao (2026)]]).

### Nível 1 — Diretamente comprovado para reduzir o dano à aprendizagem

**Desenho de ferramenta de IA com salvaguardas ([[scaffolding|andaimes]] do tipo "dica, não resposta").** No achado causal mais forte desta base de conhecimento, um [[rct|RCT]] de campo mostrou que um tutor estilo ChatGPT sem salvaguardas elevou o desempenho em prática assistida em **+48%**, mas reduziu as notas em provas sem assistência em **−17%**, enquanto um tutor com salvaguardas (dicas em vez de respostas, mais informação do problema redigida pelo professor) eliminou o dano inteiramente. Isso previne mecanicamente o comportamento de "muleta" de copiar respostas que está por trás do dano. As atividades incluem tutoria dica-não-resposta, semear prompts com soluções corretas e [[misconceptions|concepções errôneas]] comuns, e exigir uma tentativa do estudante antes de a saída da IA ser revelada.

**Reter a resposta protege dentro da sessão sem construir a habilidade.** [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al. (2026)]] retiveram a posição agregada em um debate [[agentic-ai|multiagente]] e reduziram a troca para uma posição incorreta da IA de 42-60,5% para 5,7-8,2%, mas não encontraram efeito de aprendizagem dentro da sessão (β = 0,03, p = 0,18): a salvaguarda resistiu enquanto estava em vigor e deixou o julgamento sem auxílio intocado.

**Redesenho da avaliação (medidas resistentes à IA + sem assistência).** Como o dano do uso indevido é dependente da avaliação — aparecendo em medidas supervisionadas, de livro fechado e sem assistência, ao mesmo tempo em que infla o trabalho de curso comum avaliado —, mudar o que conta como desempenho tanto desestimula o uso indevido quanto o traz à tona. As atividades incluem provas em sala sem assistência e defesas orais, exigir artefatos de processo (rascunhos, reflexões, raciocínio anotado), recompensar raciocínio acima da fluência de superfície e designar zonas livres de IA. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] dão à exigência de artefatos de processo um instrumento concreto: históricos de versão obrigatórios e documentos de análise reproduzíveis, de modo que uma submissão suspeita pode ser inspecionada como uma linha do tempo de como o trabalho se desenvolveu, e a quantidade de material fabricado que um estudante teria de gerar sobe muito além do que a terceirização lhe economiza. A evidência de campo em larga escala reforça isso: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei e Wu (2026)]] concluíram que a terceirização de lições de casa elevou as notas de lição em 18%, ao mesmo tempo em que *reduziu* as notas em provas de livro fechado em 20% — exatamente o sinal que as medidas supervisionadas e sem assistência são desenhadas para trazer à tona, e o estudo recomenda ponderar mais fortemente a avaliação presencial de livro fechado. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall e Parapadakis (2025)]] dão à mesma lógica sua declaração mais explícita de prevenção situacional de crime, argumentando que a falha pertence às avaliações que um modelo consegue responder de forma convincente, e não aos estudantes, e relatando um caso em que 25 técnicas de prevenção aplicadas a um capstone de negócios australiano — interações de estudantes rastreadas, detecção de bandeira vermelha de trabalho especialista demais, realocação aleatória de equipes, testes semanais em sala supervisionados, avisos de remoção de materiais de disciplina que os estudantes haviam publicado — teriam cortado os casos de falta grave de 183 para 27 dentro de um ano. Suas prescrições são motivacionais, e não investigativas: elevar a finalidade percebida da avaliação, construir [[self-efficacy|autoeficácia]] e aumentar o custo social percebido da fraude, com cinco redesenhos específicos de disciplina que transformam provas cronometradas de resolução de problemas em avaliações abertas de [[problem-solving|resolução de problemas]] com uma reflexão escrita sobre o próprio processo do estudante, redações somativas em [[collaborative-learning|colaborativos]] projetos de pesquisa arquivística, e [[eportfolio|portfólios]] em processos de desenho iterativos revisados por pares. A prevenção também precisa cobrir o próprio corretor: a avaliação de equipe vermelha de [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] concluiu que duas de cinco estratégias indiretas de injeção de prompt embutidas em um arquivo de submissão elevaram uma redação reprovada a aprovada sem detecção, com taxas de sucesso relatadas de 100% e 94%, de modo que onde ferramentas de IA corrigem trabalho de estudantes, a [[human-in-the-loop-ai|revisão humana]], uma separação mais clara entre instruções e conteúdo submetido e testes de resiliência pertencem ao piso estrutural, e não a uma camada opcional.

As alavancas estruturais têm um braço de fiscalização, e sua base de evidência é mais fraca que seu alcance sugere. [[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] codificaram 1.162 casos de falta grave com IA generativa e concluíram que a evidência mais citada no momento da alegação — saída de [[ai-detection|detector]], relatórios de similaridade, padrões de conteúdo típicos de IA — carregava o valor probatório mais fraco, enquanto admissões, comportamento observado em prova e referências fabricadas verificadas de forma independente eram as mais fortes; como os procedimentos institucionais não fixam nenhum limiar mínimo de evidência, a qualidade da evidência não guardava relação confiável com os desfechos dos casos, e estudantes cujos casos repousavam sobre evidência frágil tinham recurso principalmente a recursos de apelação. [[wright-transcription-not-generation-2026|Wright (2026)]] mostra um segundo custo da mesma imprecisão: proibições escritas em torno da "IA generativa" em vez de em torno da função capturam ferramentas que meramente convertem o formato de um trabalho que o estudante já produziu, de modo que o uso apenas de transcrição pode ser sancionado como falta grave — uma inclusão excessiva que recai com mais força sobre [[learners|quem aprende]] com deficiência e exposto a questões de [[equity-in-ai-education|equidade]] e não contribui em nada para a [[assessment-validity|validade]]. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana, Mtshali e Mchunu (2026)]] acrescentam que a [[remote-proctoring|supervisão remota de provas]], o controle de integridade mais amplamente adotado, apoia seu argumento de dissuasão em como os estudantes dizem se sentir, e não na redução da falta grave, e impõe ansiedade, perda de concentração e exclusão relacionada a infraestrutura cuja resposta por menor uso indevido não é demonstrada. [[li-genai-assessment-language-equity-2026|Li (2026)]] acrescenta a dimensão do desenho de regras: como a mesma interface realiza edição de linguagem permitida e redação substantiva proibida, regras indiferenciadas de IA generativa impõem encargos de conformidade desviados por coorte a estudantes que usam inglês como língua adicional, de modo que a prevenção mais defensável é uma distinção apoio-substituição baseada em propósito, ancorada em evidência do que a ferramenta de fato fez pelo estudante.

### Nível 2 — Forte apoio de framework, alto potencial

**Sequências de uso com andaimes: pensar primeiro, IA em segundo, refletir em terceiro.** Oito princípios de desenho para integrar LLMs sem deslocar o [[critical-thinking|pensamento crítico]]: preservar o atrito cognitivo, posicionar a IA como parceira provisória de pensamento em vez de autoridade, embutir pontos de controle de avaliação, exigir registro [[metacognition|metacognitivo]] e logs de prompt, e equilibrar fases mediadas por IA com fases livres de IA. A evidência correlacional (trabalho independente antes da IA produz saídas mais fortes) é forte; é a versão pedagogicamente completa do Nível 1.

**[[ai-literacy|Letramento em IA]] e letramento em [[prompt-engineering|prompting]] com prática deliberada e [[feedback|feedback]] imediato.** Um módulo do [[k-12|K-12]] que usa prática de prompt baseada em cenários com um autocorretor por [[llm|LLM]] melhorou as competências reais de prompting e elevou a confiança em usar IA para aprender em **+10,4%**, com 87% relatando ter aprendido a usar IA de forma responsável. Ganhos de competência demonstrados; a questão em aberto é se eles se convertem em [[learning-gains|desfechos de aprendizagem]] a jusante. Ele também aborda a lacuna de [[equity-in-ai-education|equidade]] no acesso prévio a IA.

**Frameworks estruturados de declaração de uso de IA.** Substituir caixas de seleção genéricas de "usei IA" por declarações [[discipline-specific-aied|específicas de domínio]] que mapeiam o uso a estágios cognitivos (planejamento estrutural vs. geração de conteúdo) força a reflexão sobre o processo de aprendizagem e clarifica a fronteira entre assistência aceitável e falta grave, deslocando a ênfase da vigilância para a prática profissional.

As alavancas educativas voltam a parecer diferentes uma vez que a integridade é tratada como uma prática a ser ensinada, e não como uma regra a ser imposta. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] argumenta que regimes de integridade baseados em detecção e verificação estão desalinhados com o trabalho aumentado por IA generativa, e reenquadra a integridade como prática pedagógica exercida por meio do [[evaluative-judgment|julgamento avaliativo]] — a capacidade de quem aprende de ponderar opções, justificar escolhas acadêmicas e assumir responsabilidade sob incerteza —, tornado visível por artefatos como trilhas de decisão anotadas, verificação documentada, defesa oral e históricos de versão de rascunho a rascunho, com a detecção rebaixada a uma camada suplementar em vez da infraestrutura primária. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa e Mezgebu (2026)]] encontram a mesma abertura do lado dos estudantes: ao longo de 27 entrevistas em uma [[higher-ed|universidade]] etíope, o uso era quase universal, a maioria dos participantes creditava à IA generativa a elevação de seu desempenho, e a queixa mais aguda corria no sentido contrário — quem usa IA pontuando acima de quem trabalha de forma independente e diligente, o que os participantes descreveram como desmotivante. Os autores concluem que as crenças dos estudantes preveem o uso ético mais fortemente que as regras institucionais, portanto consciência, política clara e redesenho da avaliação precisam chegar juntos — o que é o nível educativo desta página enunciado como condição: a construção de capacidade muda o comportamento apenas por meio da [[framing-ai-use-for-students|aderência dos estudantes]] acompanhada de um piso estrutural. A [[meta-analysis-systematic-review|revisão de escopo]] de [[ji-student-voices-academic-integrity-scoping-2026|Ji (2026)]] de 38 estudos de vozes de estudantes fornece a versão em nível de campo da mesma conclusão: os estudos revisados convergem em uma mudança da detecção retrospectiva para o raciocínio ético proativo, em ensinar ética da IA e "IA-giarismo" no [[curriculum-design|currículo]] em vez de em sessões únicas de [[ai-literacy|letramento]], e em detalhar as condições de uso aceitável no nível do curso, em vez de proibições institucionais uniformes.

### Nível 3 — Promissor, menor evidência causal direta

**Intervenções metacognitivas e de autoavaliação.** Diários reflexivos, logs de prompt e treinamento de calibração reconstroem a "baseline cognitiva ausente" dos estudantes nativos de IA, que não conseguem localizar sua própria fronteira cognitiva porque a fluência gerada por IA a mascara. Conceitualmente central, mas ainda não testado de forma causal.

**Redesenho da motivação.** Como a disponibilidade da IA corrói a [[motivation|motivação autônoma]] ("por que me esforçar?"), reestruturar tarefas em torno de objetivos que a IA não consegue cumprir e em torno da [[agency|agência de quem aprende]] visa diretamente a erosão da persistência que agrava o dano direto.

**Letramento crítico em IA.** Um enquadre de poder-conhecimento que ensina quem aprende a interrogar, desafiar e participar da [[governance|governança de IA]] em vez de apenas consumi-la. De longo prazo, orientado à equidade e estrutural em suas ambições, embora seus efeitos de aprendizagem sejam em grande parte não testados.

**Reconhecer a [[ai-sycophancy|adulação]] para prevenir a aceitação acrítica.** Como a IA [[ai-sycophancy|aduladora]] valida em vez de desafiar o usuário, ela é um vetor direto de uso indevido: estudantes que recebem concordância afirmativa para pensamento incorreto são encorajados a substituir a IA por seu próprio trabalho [[cognitive-offloading|cognitivo]]. A [[contextual-sycophancy-ai-literacy|adulação contextual]] mostra que o letramento em IA e o treinamento em prompting reduzem, mas não eliminam o laço de erro, portanto a prevenção do uso indevido precisa parear o treinamento educativo de reconhecimento com o desenho de atrito corretivo em nível de sistema (ver as salvaguardas do Nível 1).

- **[[desirable-difficulties|Atrito produtivo]] e função pedagógica.** A revisão rápida de Sydney argumenta que a IA generativa mina a aprendizagem quando permite aos estudantes contornar o atrito cognitivo/metacognitivo necessário para aprender, e que ferramentas desenhadas de propósito introduzem *atrito produtivo* (reter respostas, pedir explicação). Ela distingue quatro funções pedagógicas — aprender *de*, *com*, *sobre* ou *ao moldar* a IA generativa —, cada uma com demandas diferentes sobre agência e avaliação.([[young-people-learning-generative-ai-rapid-review-2026]])

## Ideias equivocadas comuns

**"Ensinar os estudantes sobre os riscos é a principal alavanca contra o uso indevido."** É a alavanca que depende da cooperação do estudante, razão pela qual ela se situa abaixo das alavancas estruturais nesta página. Salvaguardas e redesenho da avaliação funcionam quer o estudante escolha o comportamento certo ou não; as abordagens educativas funcionam apenas com adesão. A distinção não é moral, e sim mecânica: um ambiente mudado restringe o comportamento diretamente, enquanto uma crença mudada precisa sobreviver à noite anterior ao prazo.

**"Se uma salvaguarda resiste durante a sessão, a aprendizagem está garantida."** Resistir e ensinar são desfechos separados, e o corpus contém um resultado duplo limpo. Reter a posição agregada em um debate [[agentic-ai|multiagente]] reduziu a troca dos estudantes para uma posição incorreta da IA de 42-60,5% para 5,7-8,2%, um efeito protetor grande, e ainda assim não produziu **nenhum efeito de aprendizagem dentro da sessão** (β = 0,03, p = 0,18). O trilho fez seu trabalho como trilho e não se tornou instrução. Desenhar para prevenir o uso indevido não é o mesmo que desenhar para a aprendizagem.

**"Detectar o uso indevido e puni-lo é uma estratégia de prevenção."** A prevenção precisa cobrir o próprio avaliador. A avaliação de red team de [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] constatou que duas de cinco estratégias de injeção indireta de prompt embutidas em um arquivo de submissão elevaram a nota de uma redação reprovada. Um pipeline que detecta o uso indevido dos estudantes enquanto confia no conteúdo não examinado da submissão está defendido de um só lado.

**"O uso indevido é um problema de motivação do estudante."** [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher e Calderon (2025)]] empurram a restrição vinculante um nível acima, tratando a governança, e não o comportamento do estudante, como a coisa a mudar, e propondo um framework de 130 indicadores de integridade. E o dano à aprendizagem é mensurável em escala: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei e Wu (2026)]] constataram que a terceirização da lição de casa elevou as notas de lição em 18% ao mesmo tempo em que *reduziu* as notas de provas de livro fechado em 20%, uma falha de desenho que aparece exatamente na lacuna de que esta página trata.

## Orientação de implementação por função

**Para instrutores e equipes de curso**

- Comece pela avaliação, não pelo texto da política. Pergunte de cada tarefa avaliada se a versão sem auxílio mostraria o que você pretende certificar, e conserte a tarefa primeiro: ela é a alavanca que não exige o consentimento do estudante.
- Adote ferramentas do tipo dica-não-resposta onde houver um tutor de IA disponível, já que o RCT de campo sobre tutoria com e sem salvaguardas é a evidência causal mais forte da área.
- Verifique se o seu próprio pipeline de correção resiste a instruções injetadas em arquivos enviados, antes de tratar o uso indevido dos estudantes como a única ameaça.
- Trate o desempenho com IA permitida e o desempenho sem assistência como duas medições diferentes; a divisão de 18% e 20% acima é invisível a menos que você colete as duas.

**Para desenvolvedores**

- Construa a restrição na interface, e não no aviso. Um tutor que consegue produzir a resposta final vai, sob pressão de prazo, produzir a resposta final.
- Não inferir aprendizagem a partir da conformidade com a salvaguarda. O resultado do debate mostra o comportamento resistindo enquanto as medidas de aprendizagem permaneceram estáveis, então instrumente desfechos separadamente das interações.
- Mostre os sinais de uso indevido aos instrutores como diagnóstico, e não como veredito, já que o enquadramento de governança na evidência está acima do comportamento individual do estudante.

**Para administradores e formuladores de política**

- Coloque a restrição vinculante onde a evidência a coloca. Indicadores e estruturas de governança endereçam o ambiente; a exortação aos estudantes endereça a pessoa menos capaz de mudar o desenho institucional.

## Conceitos conectados

- [[ai-misuse-learning-harm]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[assessment]]
- [[ai-literacy]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[motivation]]
- [[prompt-engineering]]
- [[ai-sycophancy]]
- [[trust-calibration]]
- [[framing-ai-use-for-students]]
- [[cognitive-surrender]]

## Artigos conectados
- [[ivory-psychology-assessment-integrity-2026]] — Trilhas de evidência de controle de versão e documentos de análise reproduzíveis como dissuasores de uso indevido (Ivory et al. 2026)
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Reter uma recomendação preveniu em grande parte a dependência excessiva sem construir o julgamento que ela protege
- [[generative-ai-guardrails-harm-learning]] — A IA generativa sem salvaguardas pode prejudicar a aprendizagem
- [[genai-performance-vs-learning]] — Distinguindo ganhos de desempenho de aprendizagem
- [[ai-assessment-scale-reform]] — A Escala de Avaliação de IA e a reforma da avaliação
- [[critical-thinking-genai-scaffolding]] — Andaimes para o pensamento crítico com IA generativa
- [[aaai2026-prompting-literacy-k12]] — Aprender a usar IA para aprender (módulo de letramento em IA do K-12)
- [[genai-declaration-frameworks-higher-education]] — Estruturando a transparência: frameworks de declaração de IA generativa
- [[absent-cognitive-baseline-2026]] — A baseline cognitiva ausente
- [[ai-literacy-power-knowledge]] — Letramento em IA: um exercício de poder-conhecimento
- [[contextual-sycophancy-ai-literacy]] — O custo oculto da adulação contextual: uma intervenção de letramento em IA
- [[sycophantic-ai-social-interaction-2026]] — A IA aduladora faz a interação humana parecer mais esforçada e menos satisfatória ao longo do tempo
- [[ssaho-ai-academic-integrity-review-2025]] — Construção de cultura e redesenho da avaliação acima da vigilância por detecção
- [[young-people-learning-generative-ai-rapid-review-2026]] — Rendição cognitiva, atrito produtivo e iniquidade metacognitiva
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsiderando provas orais como avaliação autêntica e resistente à IA
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — A penalidade de aprendizagem da IA generativa: a terceirização de lições de casa prejudica a aprendizagem
- [[ai-overreliance-complex-adaptive-system-2026]] — A dependência excessiva de IA modelada como sistema adaptativo complexo
- [[burneo-can-edtech-close-learning-gaps-2026]] — Salvaguardas removem o dano sem melhorar as notas em provas
- [[munoz-misconduct-allegation-evidence-2026]] — O que os arquivos de alegação de falta grave realmente contêm como evidência
- [[wright-transcription-not-generation-2026]] — Regras de IA excessivamente abrangentes e os estudantes que elas pegam
- [[sharma-judgment-visible-genai-assessment-2026]] — Integridade como julgamento avaliativo, e não como conformidade
- [[mulisa-students-genai-integrity-perspectives-2026]] — Estudantes sobre se a IA generativa é ferramenta de cola ou parceira de aprendizagem
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — O que a supervisão remota de provas faz aos estudantes e à equidade
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — Prevenção situacional de crime contra a cola facilitada por IA: de 183 a 27 casos, e cinco redesenhos específicos de disciplina (Leaton Gray, Edsall & Parapadakis 2025)
- [[ji-student-voices-academic-integrity-scoping-2026]] — O que 38 estudos de vozes de estudantes recomendam: clareza cocriada e raciocínio educativo acima da detecção (Ji 2026)
- [[li-genai-assessment-language-equity-2026]] — Onde o apoio de linguagem termina e a substituição começa para quem escreve em inglês como língua adicional (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Injeção de prompt como vetor de uso indevido contra a correção por IA (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — A governança como restrição vinculante da integridade: um framework de 130 indicadores (Coates, Croucher & Calderon 2025)
- [[tie-responsible-genai-use-academic-writing-review-2026]] — Uso responsável de IA generativa por estudantes na escrita acadêmica: uma revisão de escopo de fronteiras, abordagens educacionais e lacunas de evidência
