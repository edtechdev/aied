---
title: "Como escrevo uma política de IA para o curso e a comunico aos estudantes?"
created: "2026-09-16T15:58:20-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [should-we-use-ai-detectors, redesign-assessment-ai-era, institutional-ai-policy, asynchronous-online-courses-ai]
weight: 70
type: faq
foundations: [academic-integrity, framing-ai-use-for-students, reducing-ai-misuse]
assessment: [assessment]
ethics: [ai-use-disclosure]
research_method: [literature review, survey]
audience: [instructors, curriculum designers]
level: [higher ed, secondary]
methods: [qualitative-research]
institutions: [educational-policy-ai]
translation_of: faqs/course-ai-policy
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

Três semanas antes do semestre, o modelo de plano de ensino tem uma linha para "política de IA" e ela diz, no momento: ver as regras de integridade acadêmica da universidade. Ou o curso de um colega voltou com uma série de trabalhos que ninguém acha que foram escritos na sala, e a reunião de colegiado de quinta-feira termina com o pedido de que todo curso declare sua posição por escrito. Ou a política já está escrita e o período de correção está mostrando quais das suas frases você consegue de fato aplicar.

O essencial: nomeie as tarefas que você avalia, diga o que a IA pode fazer em cada uma, ponha a declaração num único lugar e faça valer com evidência que você consegue ver. Cinco permissões específicas se sustentam melhor do que uma página de proibições. Uma política que se explica faz trabalho de design de avaliação e de comunicação ao mesmo tempo, e é por isso que custa uma tarde e poupa um semestre de discussões.

Tudo abaixo é o documento de nível de curso para um módulo, curso ou trilha de programa. O pressuposto é que você já decidiu o que está avaliando; o trabalho aqui é dizer isso e fazer valer.

## A versão curta

**1.** Faça o inventário das tarefas avaliadas e pergunte, de cada uma, o que especificamente você está avaliando. A fronteira segue essa resposta.

**2.** Escreva a regra no nível da etapa: brainstorming permitido, redação de objetivos não. Curadoria de imagens permitida, design da mensagem de cada slide não.

**3.** Ponha o resumo no plano de ensino, o texto operativo na folha da tarefa, e diga a regra em voz alta uma vez, no momento em que ela passa a valer.

**4.** Nomeie um lugar e um formato padrão para a declaração, e mantenha o custo de declarar menor do que o custo de esconder.

**5.** Faça valer com trabalho que você consegue observar: um registro de prompts, um exercício em sala, um relato oral. Notas de detector ficam fora do caminho de aplicação.

## Comece pelas tarefas que você avalia

O método trabalhado mais claro é [[mccorkle-aligned-genai-course-policy-2025|McCorkle (2025)]], que estava substituindo uma proibição geral em que os estudantes não acreditavam que se aplicasse a eles. Leia essa falha corretamente: era desalinhamento e não desafio, e os estudantes não se viam agindo desonestamente. Uma regra que eles já decidiram que não é sobre eles não pode ser discutida, apenas ignorada.

O método de McCorkle funciona em quatro passagens. Inventarie cada tarefa do projeto do semestre, pergunte de cada uma "o que, especificamente, estou avaliando?", case cada tarefa com um uso profissional plausível de [[generative-ai|IA generativa]] e então decida tarefa por tarefa. Cada decisão pesa a necessidade de avaliar uma capacidade contra o valor de construir uma competência que o estudante usará no trabalho.

O resultado é deliberadamente desigual. Brainstorming é permitido; redigir objetivos de aprendizagem específicos e mensuráveis não é. Curadoria de imagens é permitida; o design da mensagem de cada slide não é. Roteiros e narração são permitidos, com avaliação obrigatória da saída da IA. Escrita assim, a lista parece arbitrária até você ler a razão ao lado de cada linha, e é por isso que as razões viajam junto com as regras.

## Decida o grau de rigor sabendo o que todo mundo faz

Dois dados dizem como é uma política normal neste ano, e ambos valem a pena levar para a reunião em que alguém propõe uma proibição.

Uma análise de conteúdo de **116 políticas institucionais de IA generativa** de 131 universidades R1 dos EUA e **98 planos de ensino de ciência da computação** de 54 delas constatou instituições amplamente favoráveis ao uso: 63% incentivam o uso de IA generativa, 41% oferecem orientação detalhada para a sala de aula, 27% desestimulam. Metade dos planos de ensino (50%) a proíbe terminantemente, 41% permite uso parcial para atividades especificadas e 7% comunicam incentivo. [[genai-policies-higher-ed-computing|Ganguly et al. (2026)]] chamam isso de lacuna entre o topo e a base. 92% dos planos dão diretrizes explícitas, e ainda assim as regras locais se afastam da orientação institucional, e apenas 47 instituições tinham os dois níveis detectáveis. A citação é o único requisito em que os dois níveis concordam, em 83% dos planos.

[[chirikov-regulate-ai-syllabi-2026|Chirikov (2026)]] acompanhou mais de 31.000 planos de ensino numa grande universidade pública de pesquisa do Texas, de 2021 a 2025. A regulação subiu de quase zero antes do ChatGPT para 55% dos cursos no outono de 2025, enquanto as políticas totalmente restritivas caíram cerca de 5 pontos percentuais por ano. No outono de 2025, os professores mais comumente restringiam redigir e revisar (79%) e raciocinar e [[problem-solving|resolver problemas]] (65%). Mais comumente permitiam edição e revisão de texto (83%), apoio ao estudo e síntese (80%) e programação (75%). A ideação era o uso mais contestado, com 46% permitindo e 54% restringindo.

A redação mudou junto com os números. As menções à integridade acadêmica caíram de 63% para 49%, as referências ao efeito da IA na aprendizagem subiram de 1% para 29%, e os requisitos de atribuição subiram de 16% para 43%. O campo está se deslocando do "não cole" para o "aqui está por que essa fronteira protege a sua aprendizagem", e a segunda versão é a que um estudante consegue seguir.

Duas consequências para o seu documento. Ser mais rigoroso do que a sua instituição é normal, e é um compromisso que você assume sozinho, porque o custo da aplicação cai sobre você. Um requisito de citação é quase gratuito, já que quatro quintos do campo já o pedem e nenhum estudante precisa adivinhar o que você quer dizer.

## Ponha cada regra onde o estudante vai encontrá-la

Três documentos, três funções.

**O plano de ensino** carrega o resumo curto: as tarefas, o uso permitido em cada uma, como funciona a declaração e a consequência de cruzar uma fronteira. Uma tela, nenhuma filosofia.

**A folha da tarefa** carrega o destaque. Um único resumo é grosseiro demais para um projeto complexo, e é aqui que a redação de McCorkle fez seu trabalho, numa justificativa dirigida aos estudantes na segunda pessoa que nomeava a avaliação por trás de cada restrição.

**A sala** carrega a primeira declaração oral. Diga a regra uma vez, no momento em que ela passa a valer, ligada ao trabalho que está à frente deles. Uma regra que o estudante encontra sozinho é uma regra que ele interpreta sozinho.

A mecânica da declaração precisa do seu próprio parágrafo, e ele deve ser o mais concreto da página. Estudantes que co-desenharam uma política de curso por meio de investigação guiada priorizaram formação para estudantes e professores, **procedimentos padronizados de declaração**, apoio institucional mais forte e maior participação nas decisões sobre IA ([[guided-inquiry-genai-course-policy-2026|Hingle e Johri (2026)]]). Diga como, onde e em que formato um estudante declara o uso, e diga isso uma vez.

[[teaching-intro-ai-course-redesign-bill-of-rights-2026|Pisan (2026)]] encontrou uma versão mais forte do mesmo movimento: transformar o registro de prompts no artefato avaliado. Quando um modelo faz a produção, o prompt e o registro da interação são a coisa que vale versionar, então a declaração deixa de ser papelada e passa a ser evidência de que o estudante está construindo algo.

## Escreva apenas regras que você consegue aplicar num ciclo de correção

Uma regra que exige monitoramento por tarefa, ou um julgamento sobre quando uma avaliação "começa", será aplicada de forma inconsistente ao longo de uma turma e entre dois corretores. A inconsistência é um problema de equidade antes de ser administrativo. Um regime baseado em detectores acrescenta um custo de vigilância que cai de forma desigual, junto com [[remote-proctoring|questões de proctoring]] e de retenção de dados que você talvez não consiga responder no nível do curso.

[[nash-preservice-teachers-classroom-ai-policies-2026|Nash e Burriss (2026)]] analisaram 27 políticas de IA de sala de aula escritas por professores de língua inglesa em formação. **26 de 27 permitiam algum uso de IA**, quase sempre em termos, momentos e lugares especificados pelo professor; uma a proibia por completo. A ideação era o uso mais amplamente permitido (22 de 27) e o mais ambíguo. 22 não permitiam ou deixavam indefinida a composição por IA de frases, parágrafos ou textos. 16 permitiam verificação gramatical e revisão de texto, enquanto 16 proibiam produzir grandes blocos de texto gerado por IA. E **22 de 27 não tratavam da leitura em absoluto**.

A falha recorrente era a operacionalização. Uma política permitia que a IA "desse o pontapé inicial no seu pensamento" e declarava "é aqui que a linha deve ser traçada" sem dizer onde a linha estava. Essa ambiguidade deixa os estudantes sem condições de cumprir e você sem condições de aplicar um padrão consistente. É um defeito, não um compromisso.

A constatação de Chirikov de variação substancial entre disciplinas e tarefas defende estruturas que concedam autonomia aos professores dentro do próprio domínio, em vez de um mandato único para todos, o que também é a descrição honesta do que é uma política de curso: um julgamento local dentro de uma regra mais ampla.

Há uma dimensão de [[equity-in-ai-education|equidade]] aqui. Políticas opacas pressupõem conhecimento de base compartilhado sobre autoria, atribuição e as normas do trabalho acadêmico, então recaem mais pesadamente sobre estudantes que chegam sem ele. O caso de McCorkle é que a transparência desmonta parte desse currículo oculto e reduz a chance de uma falha de política se tornar um processo disciplinar.

A versão mais barata de tudo isso é pouca e específica: as tarefas que você avalia, os usos permitidos em cada uma, a mecânica da declaração e a consequência de cruzar uma fronteira, cada uma com sua razão anexada.

## Diga em voz alta, e observe o que você modela

Regras de declaração não funcionam como mecanismos de conformidade por si sós, e tratá-las como se funcionassem é o erro de design mais comum. Num estudo de métodos mistos com 409 estudantes de graduação, [[qu-wang-disclose-or-not-genai-2026|Qu e Wang (2026)]] constataram que a não declaração era **adaptação estratégica a normas de pares percebidas e a baixa [[trust|confiança]] interpretativa nos professores**, e não negligência moral. A declaração percebida dos pares e o conforto com o professor foram os preditores mais fortes da própria declaração dos estudantes; o desengajamento moral teve efeitos mais fracos.

Isso lhe deixa duas alavancas que você de fato controla: o que os estudantes acreditam que seus pares fazem e se confiam que você lerá uma declaração com justiça. Ambas respondem a como você fala da regra na primeira semana. Nenhuma responde à severidade da redação.

[[student-rationalization-ai-writing|Kim et al. (2026)]] identificaram **cinco locais distintos** onde a política real de um curso vive: a intenção do professor, a política formal, a interpretação do estudante, a autopolítica do estudante e a prática do estudante. As lacunas entre eles são sistêmicas. Eles também catalogaram **23 racionalizações em seis classes** que os estudantes usaram para justificar o uso de IA na escrita acadêmica, de "não há vítima humana" a "indiferença do professor". Essas racionalizações eram ad hoc e posteriores ao fato: os estudantes explicavam um comportamento que já havia acontecido em vez de raciocinar antes, e é por isso que uma redação mais clara e uma detecção mais dura não fecham a lacuna por si sós.

Uma participante que queria obedecer a uma regra estrita de "sem IA" continuou usando IA e disse que a proibição "está criando conflito para mim, porque estou quebrando as regras". A proibição intensificou o conflito moral sem impedir o uso. Uma regra que produz culpa sem conformidade está erodindo a relação de que você precisa para a declaração.

Observe também o que você modela. A maioria das tarefas no curso de Pisan declarava o prompt usado para gerá-las, e um estudante leu essa transparência como **permissão**: "a dependência de IA do professor para corrigir e criar tarefas também tornou difícil não usar IA para as tarefas da mesma maneira". Modelar uma norma faz parte da política tal como os estudantes a vivem, diga o que disser o plano de ensino.

Uma declaração que você pode adaptar:

> **Uso de IA neste curso.** Quero que você saia deste curso capaz de fazer X sozinho, então avalio X diretamente. Você pode usar IA para [usos permitidos] em [lista de tarefas]; não pode usá-la para [usos restritos], porque é isso que estou avaliando. Se você usar IA em qualquer ponto do seu trabalho, diga-me em [único lugar nomeado, como uma linha de declaração em cada entrega] para que a usou e cole os prompts. Declarar nunca vai baixar a sua nota. Deixar de declarar um uso é o que traz consequência. Se você não tem certeza se um uso é permitido, pergunte antes de entregar, não depois.

Essa última frase desloca o ponto de decisão para antes do trabalho, que é o único ponto em que a pergunta é barata de responder.

## Planeje as quatro conversas antes que elas aconteçam

**O estudante que usou IA e não disse.** Trate isso como uma questão de processo, não de caráter. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed e Temimi (2026)]] modelam a avaliação como um problema de informação imperfeita: o estudante sabe como o trabalho foi produzido, e a instituição vê o artefato mais rastros parciais. O modelo de região de resposta deles compara três respostas — nenhum uso de IA, uso [[ai-use-disclosure|declarado]] e uso oculto — e pergunta qual delas cada mecanismo torna mais atraente. A proibição fixa a fronteira formal e deixa o uso oculto atraente quando os estudantes percebem a detecção como fraca. O monitoramento eleva o custo esperado do uso oculto sem elevar a declaração, então os estudantes ficam cautelosos sem ficarem transparentes. A permissão com declaração torna o relato honesto viável apenas enquanto o custo da honestidade se mantém baixo.

Na sala, isso significa perguntar o que o trabalho pretendia avaliar, pedir ao estudante que explique seu processo e ler uma declaração tardia como informação e não como confissão.

**O estudante que cita IA para tudo.** Isso costuma ser uma lacuna de habilidade em fantasia de conformidade. Os requisitos de atribuição subiram de 16% para 43% dos planos de ensino enquanto as menções à integridade acadêmica caíram de 63% para 49%, então o campo está pedindo citação em vez de confissão. Especifique o formato uma vez, na folha da tarefa e não numa nota de rodapé do plano de ensino. Declare como é uma atribuição adequada na sua disciplina e dê um exemplo resolvido. Onde o problema real é que o estudante ainda não consegue fazer o trabalho subjacente sem o modelo, a resposta é o design da tarefa.

**Trabalho em grupo.** Cinco estudantes podem sustentar cinco interpretações de uma frase, e uma entrega é avaliada. Para cada produto de grupo, decida e publique se o uso de IA é permitido, quem o declara e o que acontece quando um membro sai da regra. Faça isso antes de o projeto começar, enquanto é uma questão de planejamento. Se você não consegue declarar por qual contribuição individual um membro responde, avalie a tarefa como trabalho exclusivamente de grupo em vez de arbitrar autoria depois do fato.

**Declaração que você não consegue verificar.** Algumas declarações serão incompletas e algumas omissões serão infalsificáveis. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] argumentam que a detecção de IA não deveria ser usada na educação de modo algum, por três razões que tocam a redação. A saída do detector é uma estimativa probabilística que não pode ser verificada independentemente, porque a origem real do texto no mundo é desconhecida, então a validação roda em raciocínio circular. As notas de detector não atingem o padrão de balanço de probabilidades que uma investigação de [[academic-integrity|integridade]] exige. E a dicotomia humano versus IA é sem sentido para trabalho criado com IA e não por IA. A conclusão deles é que a detecção "não protege a integridade acadêmica; ela a corrói".

Eles apontam um problema de redação que vale copiar para a sua passada de revisão. Regras que restringem o uso de IA "na avaliação" não especificam quando uma avaliação começa, então pesquisa, planejamento ou edição assistidos por IA podem ou não ser violação dependendo de quem lê. Nomeie em vez disso evidência de processo que você consegue observar: um prompt e registro de interação entregues, um exercício produzido na sala, uma explicação oral. Onde a sua instituição roda um detector de todo modo, valem os avisos deles sobre armazenamento de dados, retenção e uso comercial do trabalho dos estudantes, e a objeção de [[privacy|privacidade]] que dois professores em formação levantaram é a objeção que os seus estudantes vão levantar.

## O que os professores entendem mal sobre isso

Uma política mais rigorosa é uma política mais segura. Ser mais rigoroso do que a sua instituição é comum e defensável, mas o custo da aplicação é seu, e uma regra que você não consegue aplicar de forma consistente num ciclo de correção é um problema de equidade. Corte as regras que você não consegue executar.

Uma proibição é a mensagem mais curta disponível. Nas 27 políticas de professores em formação, a ambiguidade estava sobretudo nas permissivas, e 22 de 27 nunca tratavam da leitura, então os estudantes ficavam com a inferência. A participante de Kim et al. obedeceu a uma proibição quebrando-a e sentindo-se mal por isso.

A declaração é um mecanismo de conformidade. É um sinal, e sinais dependem de confiança. Qu e Wang constataram que normas de pares e conforto com o professor prediziam a declaração melhor do que o raciocínio moral.

Uma nota de detector resolve um caso disputado. Ela não atinge o padrão que uma investigação de integridade tem de cumprir, e não distingue trabalho feito com IA de trabalho feito por IA. Construa o caso sobre trabalho que você observou.

Escrever a política é a comunicação. Kim et al. encontraram cinco locais onde a política real vive, e o seu documento é um deles. A versão sobre a qual os estudantes agem é montada a partir do que você diz em aula e do que você faz com os seus próprios materiais.

## O que vai voltar contra você

**"Os estudantes vão simplesmente esconder."** Alguns vão, e a questão de design é a quais estudantes a sua regra tenta. A dissuasão passa pela **discriminação** de um detector entre uso oculto e trabalho legítimo, e não pela sua taxa bruta de acerto. Quando sensibilidade extra produz mais falsos positivos novos do que verdadeiros positivos novos, **um monitoramento mais forte pode tornar a ocultação relativamente mais atraente**, porque estudantes honestos são penalizados mais rápido do que usuários ocultos são identificados. Permissão e declaração são alavancas separadas: a permissão move a fronteira do uso aceitável, a declaração muda a visibilidade. Diagnostique onde a sua tarefa puxa o estudante mais tentado a ocultar, e desenhe para esse estudante.

**"Não quero proibir ferramentas que não consigo detectar."** Você não precisa. A proibição é uma de quatro respostas de design, ao lado do monitoramento, do uso permitido com declaração e do redesenho. O redesenho muda o que a tarefa recompensa, e permanece cosmético se a rubrica ainda avalia principalmente o produto final. [[teaching-intro-ai-course-redesign-bill-of-rights-2026|Pisan (2026)]] mostra os níveis explicitados: a IA é barrada no curso introdutório de programação, porque terceirizar os primeiros laços remove aquilo que se está ensinando; incentivada em projetos de estruturas de dados (Copilot permitido) e barrada em provas de papel e caneta; um auxílio de estudo e revisão no curso avançado de sistemas; e **exigida** no próprio curso de IA, onde uma fronteira carregou a maior parte do peso. O modelo pode escrever código, e as reflexões devem estar na voz do próprio estudante. As provas foram removidas por completo, e a avaliação passou para trabalho que um modelo não consegue escrever silenciosamente no lugar de outro.

**"A política da minha instituição já cobre isso."** Menos do que você pensa. A lacuna corre nos dois sentidos: 92% dos planos de ensino dão diretrizes explícitas, as regras locais se afastam da orientação institucional, e apenas 47 instituições tinham os dois níveis detectáveis. Compras, dados e ciclos de revisão pertencem a [[institutional-ai-policy|Como Escrevemos e Implementamos uma Política Institucional de IA?]], mas a tradução para a sala de aula é sua. Nash e Burriss concluem que as instituições precisam equipar os professores para resistir além de adotar, com a orientação e o [[educational-development|desenvolvimento profissional]] que permitem a um professor recusar um uso específico de IA sem ser enquadrado como atrasado. O tecnodeterminismo dos participantes deles contradizia os próprios compromissos [[pedagogy|pedagógicos]]. Uma política institucional não é cobertura para o seu julgamento.

**"Não tenho tempo de reescrever o plano de ensino este mês."** Faça o inventário uma vez, sobre a tarefa que o preocupa, e leve o resultado direto para a folha da tarefa. A frase do plano de ensino pode esperar o próximo ciclo de revisão. Os estudantes agem pela folha da tarefa de qualquer forma.

## O que fazer nesta semana

**1.** Inventarie as tarefas avaliadas e escreva "o que, especificamente, estou avaliando?" ao lado de cada uma, antes de decidir qualquer coisa sobre IA.

**2.** Decida tarefa por tarefa, e verifique qual resposta cada decisão torna mais atraente para o estudante mais tentado a ocultar.

**3.** Escreva a frase de declaração: um lugar, um formato, um exemplo resolvido de atribuição adequada.

**4.** Nomeie a evidência que você aceitará numa disputa (registro de prompts, trabalho em sala, um relato oral), e descarte qualquer regra que você não consiga testar contra ela.

**5.** Diga a regra em voz alta na próxima aula, no momento em que ela passa a valer, com uma justificativa ao lado de cada restrição.

## Para onde ir agora

Governança, política de dados, compras e ciclos de revisão pertencem a [[institutional-ai-policy|Como Escrevemos e Implementamos uma Política Institucional de IA?]]; regras institucionais e distritais obrigatórias ficam com [[educational-policy-ai|política educacional]] e [[governance|governança]]. Reconstruir a tarefa para que uma nota ainda sustente uma inferência defensável fica com [[redesign-assessment-ai-era|redesenhar a avaliação na era da IA]], o argumento sobre aplicação está em [[reduce-ai-cheating|reduzir a trapaça com IA]], a decisão sobre detectores em [[should-we-use-ai-detectors|devemos usar detectores de IA]] e o esquema de rótulos em [[ai-assessment-scale-reform|reforma da escala de avaliação com IA]].
