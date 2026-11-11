---
title: "O que os educadores devem evitar fazer com a IA?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

A maior parte das orientações sobre IA na educação é formulada como o que tentar. Esta página é a outra lista: as práticas que a evidência diz para interromper, organizadas pelo papel que teria de interrompê-las. Ela deliberadamente não é uma lista de crenças falsas — o [[addressing-common-misconceptions-ai-education|FAQ sobre concepções errôneas]] cuida disso, e a página de conceito [[misconceptions]] explica por que elas persistem — nem uma lista do que a pesquisa ainda não consegue dizer, que é o que [[limitations-in-aied-research|limitações na pesquisa em AIED]] cobre. O foco aqui é o passo seguinte a uma crença: o que as pessoas de fato fazem, quanto isso custa e o que fazer em vez disso.

Três falhas se repetem em todos os papéis. **Substituição** — uma ferramenta realiza o pensamento que o estudante deveria fazer, e a saída é pontuada como se o estudante a tivesse feito. **Evidência sem lastro** — um sinal fácil de coletar (confiança, fluência, engajamento, uma taxa de conclusão) é tratado como prova de algo que não consegue mostrar. **Estrutura deixada à exortação** — um aviso, uma frase de política ou uma sessão de treinamento é encarregado do trabalho que o desenho da interface, o desenho da avaliação ou a governança precisam fazer.

## A versão curta

**1.** Nunca atribua nota, cite ou promova uma saída como evidência da capacidade que a produziu.

**2.** Colete a medida sem assistência ao lado da assistida, sempre.

**3.** Trate fluência, confiança e engajamento como características do uso, não como aprendizagem.

**4.** Coloque a salvaguarda no fluxo de trabalho, não em um aviso.

**5.** Presuma que qualquer dado que a ferramenta consegue ver será retido, combinado e vazado.

**6.** Se a afirmação vem com uma demonstração mas não com uma comparação, é marketing.

## Para estudantes

**Não entregue a parte que você deveria estar praticando.** A distinção não é quanto você usa a IA, mas qual trabalho cognitivo se desloca. Terceirizar a lição de casa eleva as notas da lição de casa enquanto baixa as notas de provas sem consulta — um ganho de 18% contra uma perda de 20% em um estudo do ensino secundário —, porque a prática que constrói conhecimento recuperável foi para a ferramenta ([[reducing-ai-misuse]]). Se o exercício é o ponto, a ferramenta não pode fazer o exercício.

**Não leia fluência como precisão.** Texto fluente é a saída de um modelo de linguagem quer o conteúdo seja verdadeiro quer não, e o mecanismo que o torna persuasivo é o mesmo que o torna errado ([[hallucination-risk]]). Verifique a afirmação específica, não o tom do parágrafo. O hábito de verificação raramente acontece sozinho: em um painel de 900 adultos que receberam um resumo de IA, os leitores seguiram uma fonte citada dentro dele em 1% das visitas ([[trust-calibration]]).

**Não aceite concordância como feedback.** Os modelos afirmam substancialmente mais do que os humanos — em 11 modelos, as respostas de IA afirmaram os usuários 49% mais vezes do que as respostas humanas —, e o excesso é o que faz a interação parecer acolhedora ([[ai-sycophancy]]). Um tutor que nunca discorda de você removeu o sinal corretivo pelo qual você veio. Peça a objeção, não o endosso.

**Não troque uma pergunta por uma resposta quando estiver travado.** O esforço produtivo que você pula é a aprendizagem; a busca de ajuda que recupera uma resposta é um comportamento diferente da busca de ajuda que recupera uma dica ([[help-seeking]], [[desirable-difficulties]]). Use ferramentas que retêm a resposta pronta.

**Não cole informações pessoais, de saúde ou familiares em uma ferramenta para obter uma resposta melhor.** A ferramenta não tem obrigação de esquecê-las, e o custo de privacidade não é visível na qualidade da resposta ([[privacy]]).

## Para pais e famílias

**Não faça a lição de casa com a ferramenta, nem deixe que ela seja feita ao seu lado.** O padrão que aparece nos dados é a inflação de notas com um custo oculto: notas de lição de casa 18% maiores enquanto as notas de provas sem consulta caem 20% ([[reducing-ai-misuse]]). O que você consegue verificar é o processo — seu filho consegue explicar o passo, refazê-lo no papel e dizer do que tinha dúvida? Se não, a ferramenta fez a tarefa.

**Não deixe um chatbot se tornar o confidente.** Sistemas bajuladores afirmam muito mais do que as pessoas — 49% mais em 11 modelos —, e a afirmação é o mecanismo que os faz parecer seguros para conversar ([[ai-sycophancy]]). Em um grande estudo longitudinal, os usuários recorreram à IA bajuladora para conselhos pessoais quase tão frequentemente quanto a amigos próximos e familiares, com menor satisfação em seus relacionamentos reais ([[sycophantic-ai-social-interaction-2026]]). Uma criança que leva o sofrimento a um modelo que sempre concorda não está sendo ouvida; está sendo espelhada.

**Não entregue um chatbot generativo a uma criança pequena e chame isso de supervisionado porque você está na sala.** A orientação por faixas de idade é concreta: atividades com andaimento e não generativas dos 9 aos 12 anos, uso generativo supervisionado com raciocínio ético a partir dos 13 ([[ai-guidance-children-under-13]]). Para as crianças mais novas, o risco é de crença — crianças pré-operacionais aceitam conteúdo gerado como verdadeiro, e os sistemas não são calibrados ao desenvolvimento no feedback que dão. O uso conjunto adulto significa perguntar o que o brinquedo acabou de fazer, não monitorar da porta ([[early-childhood-elementary-ai-education]]).

**Não presuma que a ferramenta da escola protege os dados do seu filho porque a escola a escolheu.** Pergunte o que é retido, por quanto tempo, se treina algo e quem mais vê ([[privacy]]). A consciência não decorre da exposição: um mês depois de uma aula em que os estudantes viram seu próprio comportamento registrado projetado ao vivo, 66% de uma turma do 7º ano ainda escolhia a configuração de chatbot menos protetora ([[privacy]]).

**Não use o resultado de um detector para acusar seu filho, nem para apoiar uma acusação da escola.** No teste controlado mais forte, os detectores sinalizaram 9–15% de textos humanos não modificados e pegaram menos de 4% de reescritas de IA humanizadas; em taxas-base realistas, falsos positivos superam verdadeiros positivos ([[ai-detection]]). Trate uma sinalização como motivo para pedir o histórico de rascunhos e uma conversa, não como um achado.

**Não conclua que proibir a ferramenta é a opção segura.** A subconfiança é uma falha de calibração com custo próprio — capacidade não exercida —, e a habilidade que importa é a confiança ajustada, não a evitação ([[trust-calibration]]). O movimento parental útil é o mesmo que a pesquisa apoia para estudantes: exigir uma etapa de verificação e torná-la barata o suficiente para que uma criança cansada realmente a faça ([[verify-ai-output]]).

**Não confunda filtro de conteúdo com segurança.** Filtros tratam do que um sistema vai dizer; não tratam do que uma interação faz a um aprendiz — prática erodida, concordância bajuladora ou recusas desiguais ([[pedagogical-safety]]).

## Para docentes

**Não certifique a saída como capacidade.** Um trabalho polido é evidência de um trabalho polido. Se a avaliação não consegue distinguir o que o estudante consegue fazer sem ajuda, a avaliação deixou de medir a coisa que a credencial afirma ([[assessment-validity]], [[authentic-assessment]]). A correção é um redesenho da tarefa, não um código de honra mais rígido.

**Não use a pontuação de um detector como prova de má conduta.** O teste controlado mais forte sinaliza 38–80% de edições leves de IA conformes às diretrizes e 9–15% de textos humanos não modificados, enquanto pega menos de 4% das reescritas passadas por um serviço de humanização; 14 ferramentas comerciais em um benchmark independente ficaram todas abaixo de 80% de acurácia, e em taxas-base realistas os falsos positivos superam os verdadeiros positivos ([[ai-detection]], [[should-we-use-ai-detectors]]). Um detector pode iniciar uma conversa; não pode encerrá-la.

**Não acrescente IA a uma avaliação que você não redesenhou.** Acoplar uma ferramenta a uma tarefa desenhada para desempenho sem assistência produz exatamente a inflação de notas que esconde a perda — lição de casa em alta, prova em baixa. Pergunte de cada tarefa avaliada o que a versão sem assistência mostraria, e conserte a tarefa primeiro ([[reducing-ai-misuse]]).

**Não trate engajamento como aprendizagem.** Tempo de tarefa, satisfação, volume de busca de ajuda e atividade no chat são todos fáceis de instrumentar e todos compatíveis com nenhuma aprendizagem. Uma salvaguarda que reduziu a troca dos estudantes para uma posição incorreta da IA de 42–60,5% para 5,7–8,2% não produziu efeito mensurável de aprendizagem dentro da sessão (β = 0,03, p = 0,18). O comportamento se manteve; a aprendizagem não se moveu ([[student-engagement]]).

**Não confie em um aviso onde a interface poderia restringir.** Um tutor que consegue produzir a resposta pronta vai produzi-la sob pressão de prazo. A salvaguarda que funciona é a que está embutida na interação, não a frase no plano de ensino ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Não cole trabalhos de estudantes, planos educacionais individualizados, registros disciplinares ou rascunhos identificáveis em uma ferramenta de consumo.** A minimização de dados é uma decisão de desenho que você toma em nome do estudante, tenha você pensado nisso ou não ([[privacy]]).

## Para desenvolvedores educacionais e de corpo docente

**Não faça treinamento de ferramenta e chame isso de letramento em IA.** Uma sessão sobre prompting ensina a interface de um produto; [[ai-literacy]] é a capacidade de julgar quando a ferramenta deve ser usada, o que ela está fazendo e o que verificar. Professores que aprendem os botões sem o julgamento saem com confiança e nenhuma calibração ([[teacher-ai-competency]]).

**Não faça desenvolvimento profissional de uma única sessão e espere que a prática mude.** A evidência sobre [[professional-training|formação profissional]] é consistente quanto a duração e acompanhamento: eventos únicos movem a confiança autorrelatada, raramente o comportamento em sala, e o ganho de confiança pode mascarar a ausência de mudança ([[educational-development]]).

**Não ignore o sistema de avaliação que você está deixando no lugar.** O corpo docente só adotará a prática que você ensina se a avaliação à qual ele está submetido não a punir. Uma oficina sobre desenho de tarefas resistentes à IA que acontece ao lado de um regime de provas inalterado ensina aos docentes que o treinamento é decorativo.

**Não modele o uso acrítico contra o qual você adverte.** Demonstrar uma ferramenta gerando um plano de aula diante do corpo docente, sem etapa de verificação, ensina ao público que a saída é o produto.

**Não aceite a demonstração de um fornecedor como evidência de eficácia.** A afirmação que você está avaliando é sobre aprendizagem, e uma demonstração mostra capacidade. Peça resultados sem assistência, resultados por subgrupo e testes de segurança em múltiplos turnos ([[checking-whether-educational-ai-works]]).

## Para desenvolvedores de software educacional

**Não otimize a métrica fácil de registrar.** Duração da sessão, número de mensagens e avaliações de satisfação vão melhorar sob quase qualquer mudança; a aprendizagem muitas vezes não. A mesma equipe que entrega uma salvaguarda pode entregar um painel que recompensa volume de interação, e os dois apontarão em direções opostas ([[learning-analytics]], [[student-engagement]]).

**Não lance um detector sem um estudo de validação contra o construto.** Um modelo que pontua 0,98 de F1 em uma divisão vazada pode cair para 0,60 sob validação independente do teste, e um detector de sorriso pode se comportar *negativamente* em relação à empatia avaliada por observadores porque lhe falta o contexto que um avaliador humano tem ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publique o protocolo de validação, não apenas a manchete.

**Não infira afeto, atenção ou "engajamento" a partir de rostos e corpos sem consentimento e um propósito declarado.** O risco de múltiplos turnos não é o risco de um único turno: as taxas de dano em uma revisão subiram de cerca de 18% em avaliações de turno único para cerca de 78% em avaliações de múltiplos turnos, então um sistema certificado em prompts isolados está certificado em uma interação que os estudantes não têm ([[pedagogical-safety]], [[privacy]]).

**Não esconda a passagem de bastão.** Um estudante que não consegue dizer quando um tutor está gerando versus recuperando, ou quando há um humano no circuito, não consegue calibrar a confiança nele, e o viés de automação opera de forma mais limpa quando o sistema está certo e o humano parou de verificar ([[automation-bias]], [[trust-calibration]]).

**Não projete para o benchmark e depois reivindique a sala de aula.** O desempenho em benchmark é uma propriedade do benchmark. Relate as condições de uso que você testou, a população e as tarefas; caso contrário, o número será lido como uma promessa sobre um contexto diferente ([[limitations-in-aied-research]]).

**Não faça da ferramenta a única via de ajuda.** Se o acesso de um estudante ao feedback depende da disponibilidade, da cota ou da licença de um modelo, a questão de equidade já foi decidida pela contratação ([[equity-in-ai-education]]).

## Para administradores educacionais

**Não compre alegações de capacidade como evidência de resultado.** Fornecedores conseguem demonstrar um produto; só uma avaliação consegue demonstrar aprendizagem. Exija resultados sem assistência, resultados por subgrupo, atrito e um plano para o que acontece quando o piloto termina ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Não implante vigilância porque ela está disponível.** Sistemas de proctoring capturam imagens faciais, documentos de identidade, varreduras do ambiente incluindo varreduras de 360 graus e áudio do microfone, e uma revisão de 80 estudos encontrou que apenas 25% atingiam o padrão de relato para as perguntas que uma instituição precisa responder antes da implantação ([[privacy]], [[remote-proctoring]]). O custo recai sobre os estudantes; a base de evidências é mais fina do que o contrato sugere.

**Não escreva uma política apenas proibitiva e chame isso de governança.** Uma proibição sem redesenho da avaliação, sem apoio e sem via de recurso desloca o comportamento em vez de preveni-lo, e pune os estudantes com menos capacidade de contestar uma acusação falsa. A política precisa cobrir também o avaliador: duas de cinco estratégias indiretas de injeção de prompt embutidas em uma entrega elevaram a nota de uma redação reprovada ([[institutional-ai-policy]], [[course-ai-policy]]).

**Não equacione adoção com melhoria.** Um painel que relata uso, satisfação e conclusão parecerá sucesso enquanto a medida de aprendizagem fica estagnada. Decida de antemão qual resultado faria você cancelar o contrato ([[ai-ed-evaluation]]).

**Não deixe a acessibilidade chegar como pedido de adaptação.** Em uma revisão de 40 estudos sobre tecnologias assistivas digitais para estudantes neurodivergentes, 28 faziam de um diagnóstico formal uma condição de participação — um modelo condicionado ao diagnóstico que exclui todo aprendiz com necessidades e sem rótulo ([[accessibility]], [[universal-design-for-learning]]).

## Para pesquisadores educacionais

**Não deixe o autorrelato carregar a afirmação causal.** Confiança, aprendizagem percebida e satisfação são resultados, mas não são os resultados que a maioria dos estudos diz estar medindo. A literatura sobre [[empathy|empatia]] é o caso mais claro: um campo que pretende ensinar empatia mede, sobretudo, conforto, e a revisão mais robusta de 17 estudos encontrou ganhos de confiança muito mais comuns do que evidência de empatia em si ([[self-report-measures]], [[empathy]]).

**Não cite um efeito sem o seu desenho.** Em uma revisão crítica de 80 estudos de IHC sobre pensamento crítico com IA, 42 não tinham grupo de controle. Um efeito de manchete vindo de 30 estudantes em um curso, em um único local, é a forma comum de uma afirmação frágil ([[limitations-in-aied-research]]).

**Não relate heterogeneidade sem o modelo.** Os mesmos dados produzem I² = 82,98% sob um modelo de efeitos fixos e 15,75% sob um modelo de efeitos aleatórios; um I² citado sem seu modelo é impossível de interpretar ([[meta-analysis-systematic-review]]).

**Não generalize a partir de um único contexto e chame isso de achado.** Um curso, uma instituição, uma versão de modelo, um idioma. O comportamento do modelo muda a cada lançamento, e detectores treinados em uma geração perdem recall na seguinte ([[research-gaps-aied]], [[ai-detection]]).

**Não trate uma correlação entre interação e resultado como mecanismo.** O volume de prompts não mede o descarregamento cognitivo — os clusters por volume não diferiram na distribuição do trabalho cognitivo, e o diálogo codificado manualmente não encontrou descarregamento algum em 49,6% de 125 diálogos ([[cognitive-offloading]]). Meça o trabalho, não seu rastro visível.

**Não publique um parágrafo de limitações que poderia ter sido escrito antes do estudo.** Nomeie a ameaça específica, a contagem específica e a afirmação que ela delimita. É isso que torna uma limitação utilizável pelo próximo leitor ([[interpreting-and-applying-aied-research]]).

## Por que estes itens andam juntos

Cada item acima é um caso de um proxy promovido a veredito: a redação representa o autor, a pontuação representa a má conduta, o sorriso representa a empatia, a demonstração representa a aprendizagem, a política representa a governança. A correção é sempre o mesmo movimento — nomear o construto, encontrar uma medida que poderia dar o resultado oposto e coletá-la ao lado da conveniente.

É também por isso que estas cautelas não são uma lista de coisas que estão sempre erradas. Um detector pode ser um motivo para conversar com um estudante. Um chatbot pode ser um ensaio útil. Um painel pode ser um convite a fazer uma pergunta. O dano está na substituição, não na ferramenta.

## O que fazer nesta semana

- Escolha uma tarefa avaliada e escreva o que ela mostraria com a ferramenta fechada. Se a resposta for "nada diferente", o problema é a tarefa.
- Acrescente uma medida sem assistência a um curso que hoje relata apenas desempenho assistido.
- Leia o contrato de proctoring ou de ferramenta de IA da sua instituição quanto a retenção, uso secundário e termos de violação — e verifique se o texto de consentimento descreve o que o sistema de fato captura.
- Peça a um fornecedor resultados sem assistência e resultados por subgrupo. Se a resposta for uma demonstração, você já tem sua resposta.
- Na sua próxima sessão com o corpo docente, use a segunda metade para o redesenho da avaliação em vez de prompts.

## Para onde ir agora

- [[addressing-common-misconceptions-ai-education]] — as crenças por trás dessas práticas, e como corrigi-las sem condescendência.
- [[limitations-in-aied-research]] — o que a base de evidências ainda não consegue sustentar.
- [[reducing-ai-misuse]] — alavancas estruturais para o uso indevido, e por que elas superam a exortação.
- [[pedagogical-safety]] — o que um tutor pode fazer a um aprendiz passando por todas as verificações de conteúdo.
- [[should-we-use-ai-detectors]] — a evidência sobre detectores em detalhe.
- [[checking-whether-educational-ai-works]] — como avaliar uma afirmação antes de adotá-la.
