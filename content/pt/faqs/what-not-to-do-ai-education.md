---
title: "O que os educadores devem evitar fazer com a IA?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-11T06:20:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

A maior parte das orientações sobre IA na educação diz o que tentar. Esta página reúne as práticas que a evidência indica que devem ser abandonadas, organizadas pelo papel que teria de abandoná-las. Crenças falsas são tratadas em outro lugar: o [[addressing-common-misconceptions-ai-education|FAQ sobre concepções errôneas]] cuida delas, e a página de conceito [[misconceptions]] explica por que persistem. O que a pesquisa ainda não consegue dizer pertence a [[limitations-in-aied-research|limitações na pesquisa em AIEd]]. O que segue aqui é o passo depois da crença, ou seja, o que as pessoas fazem, quanto isso custa e o que fazer em vez disso.

Três falhas se repetem em todos os papéis.

1. **Substituição.** Uma ferramenta faz o pensamento que o estudante deveria fazer, e a saída é avaliada como se o estudante a tivesse feito. A redação entregue é um registro do que o modelo consegue fazer, não do que o estudante consegue fazer.
2. **Evidência sem lastro.** Um sinal barato de coletar, como confiança, fluência, engajamento ou uma taxa de conclusão, é tratado como prova de algo que não consegue mostrar. Um painel pode informar quarenta minutos em uma sessão de tutoria; não pode informar se alguém aprendeu a fórmula quadrática.
3. **Estrutura deixada à exortação.** Pede-se a um aviso, a uma frase de política ou a uma sessão de treinamento que faça o trabalho que o desenho da interface, o desenho da avaliação ou a governança precisam fazer. O plano de ensino diz para usar a IA com responsabilidade, e o tutor continua entregando a resposta pronta no primeiro prompt.

## A versão curta

**1.** Nunca atribua nota, cite ou promova uma saída como evidência da capacidade que a produziu.

**2.** Colete a medida sem assistência ao lado da assistida, sempre.

**3.** Trate fluência, confiança e engajamento como características do uso, não como aprendizagem.

**4.** Coloque a salvaguarda no fluxo de trabalho, não em um aviso.

**5.** Presuma que qualquer dado que a ferramenta consegue ver será retido, combinado e vazado.

**6.** Se a afirmação vem com uma demonstração mas não com uma comparação, é marketing.

## Para docentes

**Não certifique a saída como capacidade.** Um trabalho polido é evidência de um trabalho polido. Se um estudante entrega uma revisão de literatura cujas fontes você não consegue conferir com nada do que o curso ensinou, e a avaliação não distingue o que esse estudante consegue fazer sem ajuda, a avaliação deixou de medir aquilo que a credencial afirma ([[assessment-validity]], [[authentic-assessment]]). A correção é um redesenho da tarefa; um código de honra mais rígido não vai resolvê-lo.

**Não use a pontuação de um detector como prova de má conduta.** Em um estudo controlado de 642 resumos publicados, os detectores sinalizaram 38–80% de edições leves de IA conformes às diretrizes e 9–15% de textos humanos não modificados, enquanto pegaram menos de 4% das reescritas passadas por um serviço de humanização ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Um benchmark independente constatou que nenhuma das 14 ferramentas comerciais alcançava 80% de acurácia, e uma paráfrase simples reduz até esse número pela metade ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Em taxas-base realistas, falsos positivos superam verdadeiros positivos ([[should-we-use-ai-detectors]]). Um detector pode iniciar uma conversa; não pode encerrá-la.

**Não acrescente IA a uma avaliação que você não redesenhou.** Acoplar uma ferramenta a uma tarefa desenhada para desempenho sem assistência produz exatamente a inflação de notas que esconde a perda, com a lição de casa em alta e a prova em baixa. Pergunte, de cada tarefa avaliada, o que a versão sem assistência mostraria, e conserte a tarefa primeiro ([[reducing-ai-misuse]]). Se a lista de exercícios de casa e o quiz em sala testam a mesma habilidade, só um dos dois está medindo o estudante.

**Não trate engajamento como aprendizagem.** Tempo na tarefa, satisfação, volume de busca de ajuda e atividade no chat são todos fáceis de instrumentar e todos compatíveis com nenhuma aprendizagem. Em um experimento de 3 × 2 com 186 participantes que julgavam casos civis em uma plataforma apoiada por LLM, uma salvaguarda que reduziu a troca para uma posição incorreta da IA de 42–60,5% para 5,7–8,2% não produziu efeito mensurável de aprendizagem dentro da sessão (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). O comportamento mudou; a medida de aprendizagem não ([[student-engagement]]).

**Não confie em um aviso onde a interface poderia restringir.** Um tutor que consegue produzir a resposta pronta vai produzi-la sob pressão de prazo, diga o que disser o plano de ensino. A salvaguarda que funciona está embutida na interação ([[reducing-ai-misuse]], [[pedagogical-safety]]). Reter a resposta final nas duas primeiras tentativas é uma decisão de desenho; pedir aos estudantes que não a peçam é um pedido.

**Não cole trabalhos de estudantes, planos educacionais individualizados, registros disciplinares ou rascunhos identificáveis em uma ferramenta de consumo.** A minimização de dados é uma decisão de desenho que você toma em nome do estudante, tenha você pensado nisso ou não ([[privacy]]). A conta gratuita de chatbot que responde a uma pergunta sobre o plano de comportamento de um estudante também é uma cópia desse plano no servidor de outra pessoa.

## Para estudantes

**Não entregue a parte que você deveria estar praticando.** Suponha que a tarefa seja uma redação de cinco parágrafos: você cola o enunciado em um chatbot, pega o rascunho que ele devolve e entrega. O que você entrega é um registro do que o modelo consegue fazer. A questão é qual trabalho cognitivo se desloca, não quanta IA você usa. Terceirizar a lição de casa eleva as notas da lição de casa e baixa as notas das provas sem consulta: em 26.811 estudantes do ensino secundário acompanhados por 30 meses, as notas da lição de casa subiram 18% e as notas das provas caíram 20% em seis meses ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei e Wu, 2026]]). A prática que constrói conhecimento recuperável foi para a ferramenta ([[reducing-ai-misuse]]). Se o exercício é o ponto, a ferramenta não pode fazer o exercício.

**Não leia fluência como precisão.** Texto fluente é a saída de um [[llm|modelo de linguagem]] quer o conteúdo seja verdadeiro quer não, e o mecanismo que o torna persuasivo é o mesmo que o torna errado ([[hallucination-risk]]). Verifique a afirmação específica, não o tom do parágrafo. Esse hábito raramente acontece sozinho: em um painel de acompanhamento passivo de 900 adultos norte-americanos que receberam um resumo de IA, os leitores seguiram uma fonte citada dentro dele em 1% das visitas ([[trust-calibration-chatbots-design-problem-2026|Jaidka e Cai, 2026]]). Se a sua tarefa exige três fontes, abra as três.

**Não aceite concordância como feedback.** Os modelos afirmam substancialmente mais do que os humanos: em 11 modelos, as respostas de IA afirmaram os usuários 49% mais vezes do que as respostas humanas, e o excesso é o que faz a interação parecer acolhedora ([[ai-personal-coach-review-benefits-risks-2026|Potel e Kumashiro, 2026]]). Um tutor que nunca discorda de você removeu o sinal corretivo pelo qual você veio ([[ai-sycophancy]]). Peça a objeção, não o endosso: "O que está errado neste argumento, e o que um cético diria?"

**Não troque uma pergunta por uma resposta quando estiver travado.** O esforço produtivo que você pula é a aprendizagem. A busca de ajuda que recupera uma resposta é um comportamento diferente da busca de ajuda que recupera uma dica ([[help-seeking]], [[desirable-difficulties]]). Use ferramentas que retêm a resposta pronta, e peça o próximo passo em vez da solução.

**Não cole informações pessoais, de saúde ou familiares em uma ferramenta para obter uma resposta melhor.** A ferramenta não tem obrigação de esquecê-las, e o custo de privacidade não aparece na qualidade da resposta ([[privacy]]). Um prompt melhor não precisa do seu diagnóstico, do seu endereço ou dos nomes da sua família.

## Para pais e famílias

**Não faça a lição de casa com a ferramenta, nem deixe que ela seja feita ao seu lado.** O padrão nos dados é inflação de notas com um custo oculto: no mesmo painel de 30 meses, as notas da lição de casa subiram 18% enquanto as notas das provas sem consulta caíram 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei e Wu, 2026]]). Uma criança que traz lição de casa perfeita e reprova na prova do capítulo está mostrando exatamente essa lacuna. O que você consegue verificar é o processo. Seu filho consegue explicar o passo, refazer um problema no papel e dizer em que parte tinha dúvida? Se não, a ferramenta fez a tarefa.

**Não deixe um chatbot se tornar o confidente.** Sistemas bajuladores afirmam muito mais do que as pessoas, 49% mais em 11 modelos, e essa afirmação é o que os faz parecer seguros para conversar ([[ai-personal-coach-review-benefits-risks-2026|Potel e Kumashiro, 2026]]). Em um grande estudo longitudinal, os usuários recorreram à IA bajuladora para conselhos pessoais quase tão frequentemente quanto a amigos próximos e familiares, com menor satisfação em seus relacionamentos reais ([[sycophantic-ai-social-interaction-2026]]). Uma criança que leva o sofrimento a um modelo que sempre concorda não está sendo ouvida. Está sendo espelhada. Se seu filho está conversando com um chatbot sobre uma amizade ou uma perda, esse é o momento de perguntar a quem mais ele contou.

**Não entregue um chatbot generativo a uma criança pequena e chame isso de supervisionado porque você está na sala.** A orientação por faixas de idade é concreta: atividades com andaimento e não generativas dos 9 aos 12 anos, uso generativo supervisionado com raciocínio ético a partir dos 13 ([[ai-guidance-children-under-13]]). Para as crianças mais novas, o risco é de crença. Crianças pré-operacionais aceitam conteúdo gerado como verdadeiro, e os sistemas não são calibrados ao desenvolvimento no feedback que dão. O uso conjunto com um adulto significa sentar ao lado da criança e perguntar o que o brinquedo acabou de fazer, não observar da porta ([[early-childhood-elementary-ai-education]]).

**Não presuma que a ferramenta da escola protege os dados do seu filho porque a escola a escolheu.** Pergunte o que é retido, por quanto tempo, se treina algo e quem mais vê ([[privacy]]). A consciência não decorre da exposição: um mês depois de uma aula em que uma turma do 7º ano viu seu próprio comportamento registrado projetado ao vivo, 66% dos 47 estudantes ainda escolhiam a configuração de chatbot menos protetora ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Faça as perguntas à escola por escrito e peça as respostas por escrito.

**Não use o resultado de um detector para acusar seu filho, nem para apoiar uma acusação da escola.** Em um estudo controlado de 642 resumos publicados, os detectores sinalizaram 9–15% de textos humanos não modificados e pegaram menos de 4% das reescritas de IA humanizadas ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Em taxas-base realistas, falsos positivos superam verdadeiros positivos ([[ai-detection]]). Trate uma sinalização como motivo para pedir o histórico de rascunhos e uma conversa, não como um achado.

**Não conclua que proibir a ferramenta é a opção segura.** A confiança baixa demais é uma falha de calibração com custo próprio, que é a capacidade não exercida, e a habilidade que importa é a confiança ajustada, não a evitação ([[trust-calibration]]). O movimento parental útil é o mesmo que a pesquisa apoia para estudantes: exigir uma etapa de verificação e torná-la barata o suficiente para que uma criança cansada realmente a faça ([[verify-ai-output]]). Pedir para ver a fonte que um chatbot usou custa um minuto; proibir o chatbot custa a prática.

**Não confunda filtro de conteúdo com segurança.** Filtros tratam do que um sistema vai dizer. Não tratam do que uma interação faz a um aprendiz: prática erodida, concordância bajuladora ou recusas desiguais ([[pedagogical-safety]]).

## Para desenvolvedores educacionais e de corpo docente

**Não faça treinamento de ferramenta e chame isso de letramento em IA.** Uma sessão sobre [[prompt-engineering|prompting]] ensina a interface de um produto. O [[ai-literacy|letramento em IA]] é a capacidade de julgar quando a ferramenta deve ser usada, o que ela está fazendo e o que verificar. Professores que aprendem os botões sem o julgamento saem com confiança e nenhuma calibração ([[teacher-ai-competency]]). Uma oficina que termina com todos capazes de gerar um plano de aula, e ninguém capaz de dizer quando esse plano não deveria ser usado, ensinou a interface.

**Não faça desenvolvimento profissional de uma única sessão e espere que a prática mude.** A evidência sobre [[professional-training|formação profissional]] é consistente quanto a duração e acompanhamento: eventos únicos movem a confiança autorrelatada, raramente o comportamento em sala, e o ganho de confiança pode mascarar a ausência de mudança ([[educational-development]]). Uma sessão de duas horas em agosto, sem acompanhamento em outubro, é uma intervenção de confiança.

**Não ignore o sistema de avaliação que você está deixando no lugar.** O corpo docente só adotará a prática que você ensina se a avaliação à qual ele está submetido não a punir. Uma oficina sobre desenho de tarefas resistentes à IA que acontece ao lado de um regime de provas inalterado ensina aos docentes que o treinamento é decorativo.

**Não modele o uso acrítico contra o qual você adverte.** Demonstrar uma ferramenta gerando um plano de aula diante do corpo docente, sem etapa de verificação, ensina ao público que a saída é o produto. Gere-o diante deles e depois marque as duas afirmações que precisam de verificação.

**Não aceite a demonstração de um fornecedor como evidência de eficácia.** A afirmação que você está avaliando é sobre aprendizagem, e uma demonstração mostra capacidade. Peça resultados sem assistência, resultados por subgrupo e testes de segurança em múltiplos turnos ([[checking-whether-educational-ai-works]]).

## Para desenvolvedores de software educacional

**Não otimize a métrica fácil de registrar.** Duração da sessão, número de mensagens e avaliações de satisfação vão melhorar sob quase qualquer mudança; a aprendizagem muitas vezes não. A mesma equipe que entrega uma salvaguarda pode entregar um painel que recompensa volume de interação, e os dois apontarão em direções opostas ([[learning-analytics]], [[student-engagement]]). Se sua métrica de sucesso é mensagens por sessão, você construiu um produto que recompensa os estudantes por ficarem no chat.

**Não lance um detector sem um estudo de validação contra o construto.** Um benchmark de quinze modelos de EEG alcançou 0,9853 de F1 sob validação cruzada estratificada; o Group K-Fold independente do ensaio, que respeita os limites entre ensaios, derrubou o pico para 0,6038 contra um nível de acaso de 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara e Halloluwa, 2026]]). Um detector de sorriso pode operar *negativamente* em relação à empatia avaliada por observadores porque lhe falta o contexto que um avaliador humano tem ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publique o protocolo de validação junto com o número de manchete.

**Não infira afeto, atenção ou "engajamento" a partir de rostos e corpos sem consentimento e um propósito declarado.** O risco de múltiplos turnos não é o risco de um único turno: em uma revisão de segurança pedagógica, as falhas subiram de 17,7% nas avaliações de turno único para 77,8% nas de múltiplos turnos ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Um sistema certificado em prompts isolados está certificado em uma interação que os estudantes não têm ([[pedagogical-safety]], [[privacy]]).

**Não esconda a passagem de bastão.** Um estudante que não consegue dizer quando um tutor está gerando versus recuperando, ou quando há um humano no circuito, não consegue calibrar a confiança nele. O [[automation-bias|viés de automação]] opera de forma mais limpa quando o sistema está certo e o humano parou de verificar ([[trust-calibration]]). Diga na interface quando uma pessoa vai ler o trabalho.

**Não projete para o benchmark e depois reivindique a sala de aula.** O desempenho em benchmark é uma propriedade do benchmark. Relate as condições de uso que você testou, a população e as tarefas; caso contrário, o número será lido como uma promessa sobre um contexto diferente ([[limitations-in-aied-research]]).

**Não faça da ferramenta a única via de ajuda.** Se o acesso de um estudante ao [[feedback|feedback]] depende da disponibilidade, da cota ou da licença de um modelo, a questão de equidade já foi decidida pela contratação ([[equity-in-ai-education]]).

## Para administradores educacionais

**Não compre alegações de capacidade como evidência de resultado.** Fornecedores conseguem demonstrar um produto; só uma avaliação consegue demonstrar aprendizagem. Exija resultados sem assistência, resultados por subgrupo, atrito e um plano para o que acontece quando o piloto termina ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Uma demonstração mostra o tutor resolvendo um problema; não mostra um estudante resolvendo o próximo.

**Não implante vigilância porque ela está disponível.** Sistemas de proctoring capturam imagens faciais, documentos de identidade, varreduras do ambiente incluindo varreduras de 360 graus e áudio do microfone. Uma revisão de 80 estudos constatou que apenas 25% abordavam questões éticas, 35% não divulgavam seu conjunto de dados e 30% não podiam ser reproduzidos ([[automated-online-exam-proctoring-decade-review-2026|Malhotra e Chhabra, 2026]]). O custo recai sobre os estudantes, e a base de evidências é mais fina do que o contrato sugere ([[privacy]], [[remote-proctoring]]).

**Não escreva uma política apenas proibitiva e chame isso de governança.** Uma proibição sem redesenho da avaliação, sem apoio e sem via de recurso desloca o comportamento em vez de preveni-lo, e pune os estudantes com menos capacidade de contestar uma acusação falsa. A [[governance|política]] precisa cobrir também quem avalia: em um teste de red team de um fluxo de avaliação cotidiano, duas de cinco estratégias de injeção de prompt escondidas em uma entrega fizeram uma redação reprovada passar com 100% e 94% de sucesso conforme o tipo de arquivo ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Uma política que restringe os estudantes e não o pipeline de avaliação é meia política.

**Não equacione adoção com melhoria.** Um painel que relata uso, satisfação e conclusão parecerá sucesso enquanto a medida de aprendizagem fica estagnada. Decida de antemão qual resultado faria você cancelar o contrato ([[ai-ed-evaluation]]). Anote esse número antes de o piloto começar.

**Não deixe a acessibilidade chegar como pedido de adaptação.** Em uma revisão de escopo de 40 estudos sobre tecnologias assistivas digitais para estudantes [[neurodiversity|neurodivergentes]], 28 faziam de um diagnóstico formal uma condição de participação. Esse modelo condicionado ao diagnóstico exclui todo aprendiz com necessidades e sem rótulo ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Para pesquisadores educacionais

**Não deixe o autorrelato carregar a afirmação causal.** Confiança, aprendizagem percebida e satisfação são resultados, mas não são os resultados que a maioria dos estudos diz estar medindo. A literatura sobre [[empathy|empatia]] é o caso mais claro: um campo que pretende ensinar empatia mede, sobretudo, conforto, e uma revisão de 17 estudos encontrou ganhos de confiança muito mais comuns do que evidência de empatia em si ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail e Zafira, 2026]]; [[self-report-measures]]).

**Não cite um efeito sem o seu desenho.** Em uma revisão crítica de 80 estudos de IHC sobre [[critical-thinking|pensamento crítico]] com IA, 42 (52%) não tinham grupo de controle ([[critical-review-critical-thinking-hci-research-ai-2026]]). Um efeito de manchete vindo de 30 estudantes em um curso de um único local é a forma comum de uma afirmação frágil ([[limitations-in-aied-research]]).

**Não relate heterogeneidade sem o modelo.** Os mesmos dados produzem I² = 82,98% sob um modelo de efeitos fixos e I² = 15,75% sob um modelo de efeitos aleatórios ([[ai-supported-instruction-stem-meta-analysis-2026]]). Um I² citado sem seu modelo é impossível de interpretar ([[meta-analysis-systematic-review]]).

**Não generalize a partir de um único contexto e chame isso de achado.** Um curso, uma instituição, uma versão de modelo, um idioma. O comportamento do modelo muda a cada lançamento, e detectores treinados em uma geração perdem recall na seguinte ([[research-gaps-aied]], [[ai-detection]]).

**Não trate uma correlação entre interação e resultado como mecanismo.** O volume de prompts não mede o descarregamento cognitivo. Os clusters por volume não diferiram na distribuição do trabalho cognitivo, e o diálogo codificado manualmente não encontrou descarregamento algum em 49,6% de 125 diálogos ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Meça o trabalho em si.

**Não publique um parágrafo de limitações que poderia ter sido escrito antes do estudo.** Nomeie a ameaça específica, a contagem específica e a afirmação que ela delimita. É isso que torna uma limitação utilizável pelo próximo leitor ([[interpreting-and-applying-aied-research]]).

## Por que estes itens andam juntos

Cada item acima eleva um proxy a veredito. A redação representa o autor, a pontuação representa a má conduta, o sorriso representa a empatia e a demonstração representa a aprendizagem. A correção é sempre a mesma: nomear o construto, encontrar uma medida que poderia dar o resultado oposto e coletá-la ao lado da conveniente.

Nenhuma dessas cautelas significa que a ferramenta está sempre errada. Um detector pode ser um motivo para conversar com um estudante. Um chatbot pode ser um ensaio útil. Um painel pode ser um convite a fazer uma pergunta. O que causa dano é a substituição.

## O que fazer nesta semana

- Escolha uma tarefa avaliada e escreva o que ela mostraria com a ferramenta fechada. Se a resposta for "nada diferente", o problema é a tarefa.
- Acrescente uma medida sem assistência a um curso que hoje relata apenas desempenho assistido.
- Leia o contrato de proctoring ou de ferramenta de IA da sua instituição quanto a retenção, uso secundário e termos de violação, e verifique se o texto de consentimento descreve o que o sistema de fato captura.
- Peça a um fornecedor resultados sem assistência e resultados por subgrupo. Se a resposta for uma demonstração, você já tem sua resposta.
- Na sua próxima sessão com o corpo docente, use a segunda metade para o redesenho da avaliação em vez de prompts.

## Para onde ir agora

- [[addressing-common-misconceptions-ai-education]]: as crenças por trás dessas práticas, e como corrigi-las sem condescendência.
- [[limitations-in-aied-research]]: o que a base de evidências ainda não consegue sustentar.
- [[reducing-ai-misuse]]: alavancas estruturais para o uso indevido, e por que elas superam a exortação.
- [[pedagogical-safety]]: o que um tutor pode fazer a um aprendiz passando por todas as verificações de conteúdo.
- [[should-we-use-ai-detectors]]: a evidência sobre detectores em detalhe.
- [[checking-whether-educational-ai-works]]: como avaliar uma afirmação antes de adotá-la.
