---
title: Reduzir o uso indevido de IA
created: "2026-08-12T19:13:02-04:00"
updated: "2026-11-17T20:00:00-05:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
source_updated: "2026-11-17T11:05:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-17"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

> **Reduzir o uso indevido de IA** — as alavancas de desenho, [[pedagogy|pedagógicas]] e de [[educational-policy-ai|política]] que impedem os estudantes de substituir a [[generative-ai|IA generativa]] pelo próprio [[cognitive-offloading|trabalho cognitivo]] e, em vez disso, os orientam para um uso [[ethics|ético]] e produtivo. As abordagens eficazes são ordenadas por impacto, e não por popularidade, e a evidência mais forte favorece as **alavancas estruturais** — [[guardrails|salvaguardas]] de ferramentas e redesenho da avaliação —, que mudam o ambiente para tornar o uso indevido mais difícil independentemente da motivação do estudante, em vez das **alavancas educativas**, que dependem de construir capacidade durável e da [[framing-ai-use-for-students|adesão dos estudantes]].

## Perguntas para refletir

- Estudantes que terceirizam a tarefa de casa para a IA podem ver suas notas de tarefa *subirem* enquanto suas notas em [[summative-assessment|exames sem consulta]] *caem*. Antes de ler, por que desempenho e aprendizagem divergiriam tão acentuadamente — e o que essa lacuna sugere sobre o que "sucesso" com IA realmente significa?
- As intervenções se ordenam por evidência causal e alcance, com as alavancas *estruturais* (salvaguardas de ferramentas, redesenho da avaliação) acima das *educativas* ([[teacher-role|ensinar]] boas práticas) — precisamente porque as estruturais funcionam independentemente da motivação do estudante. Você concorda que mudar o ambiente vence mudar as mentes? Qual é o risco de depender de cada uma?
- Um tutor com salvaguardas do tipo "dica, não resposta" eliminou o dano à aprendizagem que um sem salvaguardas causava, embora ambos parecessem úteis. Pense em uma ferramenta de aprendizagem que você viu dando respostas com demasiada facilidade. Onde está a linha entre uma dica que dá andaimes e uma resposta que substitui — e você consegue enunciá-la antes de ler?
- A correção mais forte inclui redesenho da avaliação: exames presenciais sem auxílio, defesas orais, artefatos de processo, raciocínio recompensado acima da fluência superficial. Como você se sentiria fazendo um curso avaliado assim, e esse sentimento diz algo sobre por que essa alavanca é ao mesmo tempo eficaz e impopular?
- Referenciais de declaração de IA que obrigam os estudantes a mapear seu uso a estágios cognitivos (planejamento versus geração de conteúdo) deslocam a ênfase do policiamento para a prática profissional. Você acha que essa reflexão de fato constrói melhor julgamento, ou apenas ensina os estudantes a descrever o uso indevido com mais esperteza?
- Defina um objetivo antes de ler: identifique uma mudança concreta no seu próprio curso ou fluxo de trabalho que tornaria o uso indevido de IA mais difícil, e uma que tornaria o uso produtivo mais fácil. A qual camada cada uma pertenceria?

## Introdução

O conceito repousa na evidência de que o uso indevido de IA prejudica ativamente a aprendizagem durável — a lacuna desempenho–aprendizagem documentada em [[ai-misuse-learning-harm|uso indevido de IA]] —, ainda que infle o desempenho imediato. As intervenções visam, portanto, os mecanismos desse dano: copiar respostas, [[cognitive-offloading|descarregamento cognitivo]], erosão da motivação e deslocamento da aprendizagem. Elas não são mutuamente exclusivas; uma abordagem robusta combina um piso estrutural com construção educativa de capacidade.

O mecanismo pelo qual o uso indevido se forma tem agora uma cadeia medida por trás. [[guo-overreliance-genai-feedback-2026|Guo e Dong (2026)]] pesquisaram 600 graduandos e encontraram a carga cognitiva percebida predizendo o descarregamento cognitivo com β = 0.844 no grupo de baixo monitoramento e β = 0.840 no de alto. O descarregamento então predisse a dependência excessiva do feedback de IA com β = 0.396 e β = 0.506, respectivamente, com efeitos indiretos de 0.335 [0.069, 0.611] e 0.426 [0.149, 0.648]. A carga também predisse a dependência excessiva diretamente (β = 0.560 e 0.419), de modo que o descarregamento é um mediador parcial, e o antecedente que uma alavanca estrutural pode atacar é a própria carga.

## Por que as alavancas estruturais mais importam

As intervenções podem ser ordenadas por **evidência causal × alcance estrutural × escalabilidade × [[sustainability|sustentabilidade]]**. Nessa base, as duas alavancas *estruturais* se classificam mais alto porque funcionam quer os estudantes escolham o comportamento certo quer não — elas restringem o ambiente em vez de depender da motivação interna. As alavancas *educativas* são essenciais, mas só eficazes quando os estudantes aderem, e por isso são tratadas como segunda camada, apesar de sua promessa conceitual. [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher e Calderon (2025)]] elevam o argumento estrutural a outro nível, tratando a governança, e não o comportamento do estudante, como a restrição vinculante e propondo um referencial de 130 indicadores de integridade para que os governantes acadêmicos vejam se a avaliação é autêntica, se os estudantes são conhecidos individualmente pelos professores que os avaliam e se a integridade aparece na indução e na recepção de novos alunos. Suas reformas visam arquiteturas de governança, pessoas e [[ai-technologies|tecnologias e recursos]], e eles propõem tomar emprestado o [[guardrails|red teaming]] da segurança cibernética para expor vulnerabilidades da avaliação antes que os estudantes as encontrem — um lembrete de que o piso estrutural é mantido por instituições que precisam tanto da informação quanto da vontade de mantê-lo.
A própria literatura sobre uso responsável raramente testa a cadeia que essa ordenação pressupõe. De 122 registros de abordagem extraídos de 31 estudos, 51 foram implementados e avaliados, em sua maioria por [[self-report-measures|autorrelato]], e apenas quatro estudos definiram uma fronteira, desenharam uma intervenção em torno dela e testaram se as decisões dos estudantes se alinharam ([[tie-responsible-genai-use-academic-writing-review-2026|Tie, Gil Ortega e Zhao (2026)]]).

## Camada 1 — Comprovadamente redutora do dano à aprendizagem

**Desenho de ferramenta de IA com salvaguardas ([[scaffolding|andaimento]] "dica, não resposta").** No achado causal mais forte desta literatura, um [[rct|ensaio de campo]] mostrou que um tutor estilo ChatGPT sem salvaguardas elevou o desempenho na prática assistida em **+48%**, mas reduziu as notas no exame sem auxílio em **−17%**, enquanto um tutor com salvaguardas (dicas em vez de respostas, mais informação sobre o problema escrita pelo professor) eliminou o dano por completo. Isso impede mecanicamente o comportamento de "muleta" de copiar a resposta por trás do dano. As atividades incluem tutoria do tipo dica-não-resposta, prompts semeados com soluções corretas e [[misconceptions|concepções errôneas]] comuns, e a exigência de uma tentativa do estudante antes que o produto da IA seja revelado.

**Reter a resposta protege dentro da sessão sem construir a habilidade.** [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al. (2026)]] retiveram a posição agregada em um debate [[agentic-ai|multiagente]] e cortaram a migração para uma posição incorreta da IA de 42–60.5% para 5.7–8.2%, mas não encontraram efeito de aprendizagem dentro da sessão (β = 0.03, p = 0.18) — a salvaguarda funcionou enquanto estava no lugar e deixou o julgamento sem auxílio inalterado.

**Redesenho da avaliação (medidas resistentes à IA e sem auxílio).** Como o dano do uso indevido depende da avaliação — aparecendo em medidas supervisionadas, sem consulta e sem auxílio enquanto infla o trabalho comum com nota —, mudar o que conta como conquista tanto dissuade quanto revela o uso indevido. As atividades incluem exames presenciais sem auxílio e defesas orais, exigência de artefatos de processo (rascunhos, reflexões, raciocínio anotado), recompensa ao raciocínio acima da fluência superficial e designação de zonas livres de IA. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] dão à exigência de artefato de processo um instrumento concreto: históricos de versão obrigatórios e documentos de análise reproduzíveis, para que uma submissão suspeita possa ser inspecionada como uma linha do tempo de como o trabalho se desenvolveu, e a quantidade de material fabricado que um estudante teria de gerar cresça muito além do que a terceirização lhe economiza. A evidência de campo em larga escala sublinha isso: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei e Wu (2026)]] encontraram que terceirizar a tarefa de casa elevou as notas de tarefa em 18% enquanto *reduzia* as notas do exame sem consulta em 20% — exatamente o sinal que medidas sem auxílio e supervisionadas são desenhadas para revelar —, e o estudo recomenda ponderar mais fortemente a avaliação presencial sem consulta. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall e Parapadakis (2025)]] dão à mesma lógica sua formulação mais explícita em prevenção situacional do crime, argumentando que a falha pertence às avaliações que um modelo consegue responder de forma convincente, e não aos estudantes, e relatando um caso em que 25 técnicas de prevenção aplicadas a um trabalho de conclusão de administração na Austrália — interações de estudantes rastreadas, detecção por sinal de alerta de trabalho "expert demais", remanejamento aleatório de equipes, testes semanais presenciais com supervisão, notificações de retirada para materiais de curso publicados por estudantes — reduziram os casos de má conduta de 183 para 27 em um ano. As prescrições deles são motivacionais, e não investigativas: elevar o propósito percebido da avaliação, construir [[self-efficacy|autoeficácia]] e aumentar o custo social percebido de colar, com os autores advertindo que abordar apenas uma ou duas das três falhará, apoiados por cinco redesenhos específicos de disciplina que transformam exames cronometrados em [[problem-solving|resolução de problemas]] com consulta acompanhada de reflexão escrita sobre o próprio processo, redações somativas em projetos [[collaborative-learning|colaborativos]] de pesquisa arquivística e [[eportfolio|portfólios]] em processos iterativos de desenho com revisão por pares.

As alavancas estruturais têm um braço de aplicação, e sua base de evidência é mais fraca do que seu alcance sugere. [[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] codificaram 1,162 casos de má conduta com IA generativa e encontraram que a evidência mais citada no momento da alegação — produto de [[ai-detection|detector]], relatórios de similaridade, padrões de conteúdo típicos de IA — carregava o valor probatório mais fraco, enquanto admissões, comportamento observado em exame e referências fabricadas verificadas de forma independente eram as mais fortes. Como os procedimentos institucionais não fixam limiar mínimo de evidência, a qualidade da evidência não guardou relação confiável com os desfechos, e estudantes cujos casos repousavam em evidência rarefeita tinham recurso principalmente por apelação. [[wright-transcription-not-generation-2026|Wright (2026)]] mostra um segundo custo da mesma imprecisão: proibições redigidas em torno de "IA generativa" em vez da função capturam ferramentas que apenas convertem o formato de um trabalho que o estudante já escreveu. O uso apenas de transcrição pode, portanto, ser sancionado como má conduta — uma inclusão excessiva que recai mais pesadamente sobre [[learners|quem aprende]] com deficiência e exposto a [[equity-in-ai-education|iniquidade]] e que não faz nada pela [[assessment-validity|validade]]. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana, Mtshali e Mchunu (2026)]] acrescentam que a [[remote-proctoring|supervisão remota]], o controle de integridade mais amplamente adotado, baseia seu argumento de dissuasão em como os estudantes dizem se sentir, e não na redução de má conduta, e impõe [[anxiety-and-stress|ansiedade]], perda de concentração e exclusão por infraestrutura que não se mostra respondida por menor uso indevido. [[li-genai-assessment-language-equity-2026|Li (2026)]] acrescenta a dimensão do desenho de regras: como a mesma interface realiza edição linguística permitida e redação substantiva proibida, regras indiferenciadas de IA generativa impõem ônus de conformidade enviesado por coorte a estudantes que usam o inglês como língua adicional. A prevenção mais defensável é uma fronteira de apoio–substituição baseada em propósito e ancorada no construto da avaliação, com declaração calibrada, proporcionalidade escalonada entre decisões de limiar, probatórias e sancionatórias, e alavancas de desenho — submissões faseadas, breve verificação oral alinhada ao construto, perguntas baseadas em crítica — fazendo o trabalho que a detecção não consegue. O próprio avaliador pertence a essa superfície. O trabalho de red team de [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] mostra o que um arquivo enviado pode fazer a um avaliador automatizado: duas de cinco estratégias de injeção indireta de prompt carregadas nele elevaram uma redação reprovada a aprovada sem detecção, com taxas de sucesso relatadas de 100% e 94%. Onde ferramentas de IA corrigem trabalho de estudantes, a [[human-in-the-loop-ai|revisão humana]], a separação mais clara entre instruções e conteúdo submetido e o teste de resiliência pertencem ao piso estrutural, e não a uma camada opcional.

## Camada 2 — Forte apoio em referenciais, alto potencial

**Sequências de uso com andaimes: pensar primeiro, IA depois, refletir por último.** Oito princípios de desenho para integrar LLMs sem deslocar o [[critical-thinking|pensamento crítico]]: preservar o atrito cognitivo, posicionar a IA como parceira provisória de pensamento e não como autoridade, embutir pontos de verificação da avaliação, exigir registro [[metacognition|metacognitivo]] e registros de prompts, e equilibrar fases mediadas por IA com fases sem IA. A evidência correlacional (trabalho independente antes da IA produz produtos melhores) é forte; é a versão pedagogicamente completa da Camada 1.

**[[ai-literacy|Letramento em IA]] e letramento em [[prompt-engineering|prompting]] com prática deliberada e [[feedback|feedback]] imediato.** Um módulo de [[k-12|educação básica]] usando prática de prompts baseada em cenários com um [[llm|LLM]] como corretor automático melhorou habilidades reais de prompting e elevou a confiança no uso de IA para aprender em **+10.4%**, com 87% relatando que aprenderam a usar IA de forma responsável. Ganhos de habilidade demonstrados; a questão aberta é se eles se convertem em [[learning-gains|resultados de aprendizagem]] a jusante. O módulo também enfrenta a lacuna de [[equity-in-ai-education|equidade]] no acesso prévio à IA.

**Referenciais estruturados de declaração de uso de IA.** Substituir caixas genéricas de "usei IA" por declarações [[discipline-specific-aied|específicas de domínio]] que mapeiam o uso a estágios cognitivos (planejamento estrutural versus geração de conteúdo) força a reflexão sobre o processo de aprendizagem e esclarece a fronteira entre assistência aceitável e má conduta, deslocando a ênfase do policiamento para a prática profissional.

As alavancas educativas parecem diferentes quando a integridade é tratada como prática a ser ensinada, e não como regra a ser aplicada. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] argumenta que regimes de integridade baseados em detecção e verificação estão desalinhados com o trabalho ampliado por IA generativa, e reenquadra a integridade como prática pedagógica exercida pelo [[evaluative-judgment|julgamento avaliativo]]. Esse julgamento é a capacidade de quem aprende de pesar opções, justificar escolhas acadêmicas e assumir responsabilidade sob incerteza, tornado visível por artefatos como trilhas de decisão anotadas, verificação documentada, [[oral-assessment|defesa oral]] e históricos de versão entre rascunhos, com a detecção rebaixada a uma camada suplementar em vez de infraestrutura primária. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa e Mezgebu (2026)]] encontram a mesma abertura pelo lado dos estudantes: em 27 entrevistas em uma [[higher-ed|universidade]] etíope, o uso era quase universal, a maioria dos participantes creditava à IA generativa a melhora de seu desempenho, e a queixa mais incisiva corria na direção oposta — usuários de IA tirando notas acima de trabalhadores independentes diligentes, o que os participantes descreveram como desmotivador. Os autores concluem que as crenças dos estudantes predizem o uso ético com mais força do que as regras institucionais, de modo que conscientização, política clara e redesenho da avaliação precisam chegar juntos — o que é a camada educativa enunciada como condição: a construção de capacidade muda o comportamento apenas por meio da [[framing-ai-use-for-students|adesão dos estudantes]], acompanhada de um piso estrutural. A [[meta-analysis-systematic-review|revisão de escopo]] de [[ji-student-voices-academic-integrity-scoping-2026|Ji (2026)]] sobre 38 estudos com a voz de estudantes fornece a versão no nível do campo da mesma conclusão. Os estudos revisados convergem para uma mudança da detecção retrospectiva para o raciocínio ético proativo, para ensinar ética da IA e AI-plágio no [[curriculum-design|currículo]] em vez de em sessões avulsas de [[ai-literacy|letramento]], e para diretrizes detalhadas cocriadas por lideranças, docentes e estudantes. Orientações pouco claras, eles observam, são lidas como permissão tácita e não como cautela. A leitura de Ji é que propriedade e raciocínio moral motivam os estudantes mais do que o medo da punição, e que os estudantes não são receptores passivos da IA generativa nem culpados sem restrição moral, mas agentes morais operando uma zona cinzenta — a premissa desta camada, enunciada como achado.

## Camada 3 — Promissora, com evidência causal direta menor

**Intervenções metacognitivas e de [[self-assessment|autoavaliação]].** [[reflection|Diários reflexivos]], registros de prompts e treinamento de calibração reconstroem a "linha de base cognitiva ausente" de estudantes nativos de IA que não conseguem localizar a própria fronteira cognitiva porque a fluência gerada por IA a mascara. Conceitualmente central, mas ainda não testada causalmente.

**Redesenho da motivação.** Como a disponibilidade de IA erode a [[motivation|motivação autônoma]] ("por que me esforçar?"), reestruturar tarefas em torno de objetivos que a IA não consegue cumprir e da [[agency|agência de quem aprende]] ataca diretamente a erosão da persistência que agrava o dano direto.

**Letramento crítico em IA.** Um enquadramento de poder-conhecimento que ensina quem aprende a interrogar, desafiar e participar da [[governance|governança de IA]] em vez de consumi-la. De longo prazo, orientado à equidade e estrutural em suas ambições, embora seus efeitos de aprendizagem sejam em grande parte não testados.

**Reconhecer a [[ai-sycophancy|adulação]] para prevenir a aceitação acrítica.** Como a IA [[ai-sycophancy|aduladora]] valida em vez de desafiar o usuário, ela é um vetor direto de uso indevido: estudantes que recebem concordância afirmativa para um raciocínio incorreto são encorajados a substituir a IA pelo próprio [[cognitive-offloading|trabalho cognitivo]]. A [[contextual-sycophancy-ai-literacy|adulação contextual]] mostra que o letramento em IA e o treinamento em prompting reduzem, mas não eliminam, o ciclo de erro, de modo que a prevenção do uso indevido precisa parear treinamento educativo de reconhecimento com desenho sistêmico de atrito corretivo (ver as salvaguardas da Camada 1).

- **[[desirable-difficulties|Atrito produtivo]] e função pedagógica.** A revisão rápida de Sydney argumenta que a IA generativa mina a aprendizagem quando permite que os estudantes contornem o atrito cognitivo/metacognitivo necessário para aprender, e que ferramentas desenhadas com propósito introduzem *atrito produtivo* (reter respostas, exigir explicação). Ela distingue quatro funções pedagógicas — aprender *com*, *da*, *sobre* ou *moldando* a IA generativa —, cada uma com exigências diferentes de agência e avaliação.([[young-people-learning-generative-ai-rapid-review-2026|Arthars et al., 2026]])

## Implicações para a prática
**Para instrutores e equipes de curso**

- Comece pela avaliação, não pelo texto da política. Pergunte de cada tarefa avaliada se a versão sem auxílio mostraria o que você pretende certificar, e conserte a tarefa primeiro — é a alavanca que não exige o consentimento do estudante.
- Adote ferramentas do tipo dica-não-resposta onde houver um [[intelligent-tutoring|tutor de IA]], já que o ensaio de campo sobre tutoria com e sem salvaguardas é a evidência causal mais forte da área.
- Verifique se o seu próprio fluxo de correção resiste a instruções injetadas em arquivos submetidos antes de tratar o uso indevido do estudante como a única ameaça.
- Trate o desempenho com IA permitida e o sem auxílio como duas medidas diferentes; a divisão de 18%/20% acima é invisível a menos que você colete as duas.

**Para desenvolvedores**

- Embuta a restrição na interface, e não em uma advertência. Um tutor que consegue produzir a resposta pronta produzirá a resposta pronta sob pressão de prazo.
- Não infira aprendizagem a partir da conformidade com a salvaguarda. O resultado do debate mostra o comportamento contido enquanto as medidas de aprendizagem ficaram estáveis, então instrumente desfechos separadamente das interações.
- Apresente sinais de uso indevido aos instrutores como diagnósticos, e não como veredictos, já que o enquadramento de governança na evidência está acima do comportamento individual do estudante.

**Para administradores e formuladores de política**

- Coloque a restrição vinculante onde a evidência a coloca. Indicadores e estruturas de governança endereçam o ambiente; a exortação aos estudantes endereça a pessoa menos capaz de mudar o desenho institucional.

## Ideias equivocadas comuns

**"Ensinar os estudantes sobre os riscos é a principal alavanca contra o uso indevido."** É a alavanca que depende da cooperação do estudante, e é por isso que se classifica abaixo das estruturais aqui. Salvaguardas e redesenho da avaliação funcionam quer o estudante escolha o comportamento certo quer não; abordagens educativas funcionam apenas com adesão. A distinção não é moral, mas mecânica — um ambiente mudado restringe o comportamento diretamente, enquanto uma crença mudada precisa sobreviver à noite anterior ao prazo.

**"Se uma salvaguarda se sustenta durante a sessão, a aprendizagem está garantida."** Conter e ensinar são desfechos separados, e a evidência contém um duplo resultado limpo. Reter a posição agregada em um debate [[agentic-ai|multiagente]] cortou a migração dos estudantes para uma posição incorreta da IA de 42–60.5% para 5.7–8.2% — um efeito protetor grande — e ainda assim produziu **nenhum efeito de aprendizagem dentro da sessão** (β = 0.03, p = 0.18). O trilho fez seu trabalho como trilho e não se tornou instrução. Desenhar para prevenir uso indevido não é o mesmo que desenhar para aprender.

**"Detectar o uso indevido e puni-lo é uma estratégia de prevenção."** A prevenção precisa cobrir o próprio avaliador. A avaliação de red team de [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] encontrou que duas de cinco estratégias de injeção indireta de prompt embutidas em um arquivo de submissão elevaram a nota de uma redação reprovada. Um fluxo que detecta o uso indevido do estudante enquanto confia em conteúdo de submissão não examinado está defendido de um só lado.

**"O uso indevido é um problema de motivação do estudante."** [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher e Calderon (2025)]] elevam a restrição vinculante a outro nível, tratando a governança, e não o comportamento do estudante, como o que deve mudar, e propondo um referencial de 130 indicadores de integridade. E o dano à aprendizagem é mensurável em escala: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei e Wu (2026)]] encontraram que terceirizar a tarefa de casa elevou as notas de tarefa em 18% enquanto *reduzia* as notas do exame sem consulta em 20% — uma falha de desenho que aparece exatamente na lacuna entre desempenho e aprendizagem.

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
- [[ivory-psychology-assessment-integrity-2026]] — Trilhas de evidência por controle de versão e documentos de análise reproduzíveis como dissuasores de uso indevido (Ivory et al. 2026)
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Reter uma recomendação em grande parte preveniu a dependência excessiva sem construir o julgamento que ela protege
- [[generative-ai-guardrails-harm-learning]] — IA generativa sem salvaguardas pode prejudicar a aprendizagem
- [[genai-performance-vs-learning]] — Distinguindo ganhos de desempenho de aprendizagem
- [[ai-assessment-scale-reform]] — A Escala de Avaliação com IA e a reforma da avaliação
- [[critical-thinking-genai-scaffolding]] — Dar andaimes ao pensamento crítico com IA generativa
- [[aaai2026-prompting-literacy-k12]] — Aprender a usar a IA para aprender (módulo de letramento em IA na educação básica)
- [[genai-declaration-frameworks-higher-education]] — Estruturando a transparência: referenciais de declaração de IA generativa
- [[absent-cognitive-baseline-2026]] — A linha de base cognitiva ausente
- [[ai-literacy-power-knowledge]] — Letramento em IA: um exercício de poder-conhecimento
- [[contextual-sycophancy-ai-literacy]] — O custo oculto da adulação contextual: uma intervenção de letramento em IA
- [[sycophantic-ai-social-interaction-2026]] — A IA aduladora torna a interação humana mais trabalhosa e menos satisfatória ao longo do tempo
- [[ssaho-ai-academic-integrity-review-2025]] — Construção de cultura e redesenho da avaliação em vez de policiamento por detecção
- [[young-people-learning-generative-ai-rapid-review-2026]] — Rendição cognitiva, atrito produtivo e iniquidade metacognitiva
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Reconsiderando os exames orais como avaliação autêntica e resistente à IA
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — A penalidade de aprendizagem da IA generativa: terceirizar as tarefas prejudica a aprendizagem
- [[ai-overreliance-complex-adaptive-system-2026]] — A dependência excessiva de IA modelada como sistema adaptativo complexo
- [[burneo-can-edtech-close-learning-gaps-2026]] — As salvaguardas removeram o dano sem melhorar as notas do exame
- [[munoz-misconduct-allegation-evidence-2026]] — O que os processos de alegação de má conduta de fato contêm como evidência
- [[wright-transcription-not-generation-2026]] — Regras de IA excessivamente inclusivas e os estudantes que elas alcançam
- [[sharma-judgment-visible-genai-assessment-2026]] — A integridade como julgamento avaliativo, e não como conformidade
- [[mulisa-students-genai-integrity-perspectives-2026]] — Estudantes sobre se a IA generativa é ferramenta de cola ou parceira de aprendizagem
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — O que a supervisão remota faz com os estudantes e com a equidade
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — Prevenção situacional do crime contra a cola facilitada por IA: de 183 para 27 casos, e cinco redesenhos específicos de disciplina (Leaton Gray, Edsall e Parapadakis 2025)
- [[ji-student-voices-academic-integrity-scoping-2026]] — O que 38 estudos com a voz de estudantes recomendam: clareza cocriada e raciocínio educativo em vez de detecção (Ji 2026)
- [[li-genai-assessment-language-equity-2026]] — Onde o apoio linguístico termina e a substituição começa para escritores de inglês como língua adicional (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Injeção de prompt como vetor de uso indevido contra a correção por IA (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — A governança como restrição vinculante da integridade: um referencial de 130 indicadores (Coates, Croucher e Calderon 2025)

- [[tie-responsible-genai-use-academic-writing-review-2026]] — Uso responsável de IA generativa por estudantes na escrita acadêmica: uma revisão de escopo de fronteiras, abordagens educacionais e lacunas de evidência
- [[guo-overreliance-genai-feedback-2026]] — A carga cognitiva passa pelo descarregamento até a dependência excessiva, com o monitoramento mudando a rota
