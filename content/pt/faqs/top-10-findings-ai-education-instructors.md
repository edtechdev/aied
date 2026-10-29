---
title: "Quais são os 10 principais achados da pesquisa em IA na educação que os professores deveriam conhecer?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-10-28T11:06:17-04:00"
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

É a semana antes do início do semestre, ou a semana depois da primeira grande entrega, e alguém lhe perguntou algo que você não consegue responder com base na experiência: o que os estudantes podem fazer com IA nesta tarefa, e o que a nota então comprova. Talvez um ensaio feito em casa tenha voltado polido de um modo que não combina com o trabalho anterior do estudante. Talvez seu departamento esteja escrevendo uma política de IA e queira que o seu curso se adeque até sexta-feira. Talvez um estudante esteja recorrendo de uma nota e você não consiga mostrar o que o trabalho demonstra.

O ponto central da pesquisa que esta base de conhecimento reuniu: o modo como você constrói a [[generative-ai|IA generativa]] dentro da atividade decide se ela fortalece o pensamento ou o substitui. A alavanca que você controla é o desenho da tarefa. O teste de qualquer desenho é o que os estudantes ainda conseguem fazer quando a ferramenta desaparece. As dez descobertas que dão nome a esta página estão abaixo, ordenadas pela decisão que cada uma informa.

## A versão resumida

**1.** Nomeie o raciocínio que a tarefa existe para produzir, e então dê à IA um trabalho que não execute esse raciocínio.

**2.** Defina a regra de IA por tarefa, não por curso, e escreva a razão ao lado dela, onde os estudantes vão ler.

**3.** Coloque pelo menos uma etapa avaliada em cada unidade que o estudante cumpra sem nenhuma IA presente.

**4.** Julgue a atividade pelo que os estudantes conseguem fazer semanas depois, sem ajuda, e não pela qualidade do que entregam.

**5.** Pergunte como os estudantes usaram a ferramenta, e avalie a verificação, não os logins.

**6.** Olhe para quais estudantes o desenho ajuda, porque uma média esconde aqueles que ele deixa de fora.

## Decida para que serve a tarefa

Escreva uma frase que nomeie a capacidade antes de tocar na ferramenta: o que um estudante deveria conseguir fazer ao final desta unidade que não conseguia fazer no início? A resposta pode ser: construir um argumento a partir de evidências, escrever uma demonstração, chegar a um diagnóstico, tomar uma decisão de projeto sob restrições. Se você não consegue nomeá-la, a regra de IA será arbitrária e os estudantes vão perceber.

Duas linhas de trabalho explicam por que isso vem primeiro. A [[productive-failure|falha produtiva]] é a descoberta de que os aprendizes muitas vezes retêm mais quando tentam resolver um problema antes de ver como se faz, de modo que o atrito às vezes é o mecanismo, e não um obstáculo a ser removido. O [[icap-framework|referencial ICAP]] prevê aprendizagens diferentes a partir do uso passivo, ativo, construtivo e interativo do mesmo material. Ambos apontam para uma única questão de desenho: o que o estudante está fazendo enquanto a ferramenta está aberta?

A ilustração mais clara no corpus vem de uma comparação entre um chatbot informado por teoria, que dava scaffolding às explicações dos estudantes, e o ChatGPT comum e o ensino habitual. As diferenças imediatas não foram significativas. Quatro semanas depois, o grupo com scaffolding reteve mais conhecimento conceitual. Isso é um estudo e não um efeito universal, e seu conteúdo útil é a forma do resultado: o desenho pode pesar mais que a capacidade do modelo, porque o que separava as condições era o que a atividade pedia aos estudantes que fizessem.

A [[kumar-genai-computing-education-systematic-review-2026|revisão sistemática de 72 estudos revisados por pares em educação em computação]] chega à mesma camada pela direção oposta. Ela chama o engajamento crítico com a saída da IA de "o mecanismo comum que liga todas as intervenções eficazes no corpus" e recomenda [[scaffolding|acesso gradual]], introduzindo a IA generativa apenas depois que a competência fundamental foi demonstrada. Nenhuma das duas afirmações diz respeito a qual produto você licencia.

## Dê à IA um trabalho que não seja o raciocínio que você avalia

Décadas de [[intelligent-tutoring|pesquisa sobre tutoria inteligente]] descrevem o padrão que funciona: diagnosticar o que o estudante entende, fazer perguntas, dar dicas graduais, pedir que ele explique, dar feedback. Tudo, exceto entregar a solução. O trabalho atual com [[pedagogical-agent|agentes pedagógicos]] traça a mesma linha entre comportamento de ensino e produção de respostas, e a [[thermomix-genai-education-analogy-2026|analogia do Thermomix]] torna isso concreto. Um eletrodoméstico pode cozinhar por você, e nesse caso você perde a habilidade, ou pode atuar como parceiro de teste para ideias que você ainda precisa compreender. Esses modos correspondem ao ICAP: passivo, ativo, construtivo, interativo.

Ferramentas mais estreitas mostram o mesmo princípio. Um [[structrag-diagram-reasoning-ai-tutoring|tutor que lê diagramas de engenharia de forma estrutural]] alcançou F1 de 93,0% no nível das arestas contra 89,3% de acurácia no diagrama inteiro, o que significa que ele consegue nomear as conexões específicas ausentes ou mal interpretadas mesmo quando o diagrama todo está errado. Isso é um feedback sobre o qual o estudante pode agir, em vez de um aprovado ou reprovado.

A pergunta mais difícil é o que o tutor tem permissão para recomendar. Quando um [[tuo-armada-multi-agent-debate-overreliance-2026|debate multiagente]] substituiu "aqui está a resposta da IA" por uma discussão cuja posição preferida foi omitida, a troca prejudicial para uma posição incorreta da IA caiu de 42-60,5% para 5,7-8,2%. A adoção de uma posição correta da IA também caiu, de 61,1-72,3% para 22,1-33,3%. Omitir uma recomendação protege o julgamento inicial do estudante e deixa a correção para a deliberação, de modo que o desenho troca correção de erros por menos viradas erradas com confiança. Decida qual dessas duas coisas você quer da troca antes de escrever o prompt.

Em sala de aula isso é barato de implementar. Uma sequência [[socratic-method|socrática]] é o padrão a buscar, com a ferramenta perguntando em vez de responder. Diga aos estudantes para pedir "uma dica", "faça perguntas para mim" ou "critique meu raciocínio", e faça de "resolva isto" o caso incomum. Você está mudando o verbo padrão da interação, que é a parte que os estudantes de fato controlam.

Um limite vale ser dito com clareza. A maior parte dessas evidências vem de tarefas curtas em um punhado de cursos, e nada disso promete que um tutor que dá dicas vai elevar as notas de prova na sua turma. Para essa pergunta você precisa do ensaio randomizado discutido abaixo, e o resultado dele é sóbrio.

## Defina a regra na tarefa, e diga por quê

Um referencial útil separa três casos. Restrinja a IA quando a competência independente é o que você está medindo. Dê scaffolding quando a ajuda limitada não compromete essa competência. Exija a IA quando a colaboração competente entre humano e IA é ela mesma o que os estudantes precisam aprender. A maioria dos cursos contém os três, em semanas diferentes, e é por isso que uma regra única no nível do curso falha repetidamente nas bordas.

O [[zou-is-this-a-trap-student-teachers-genai-2026|estudo de métodos mistos com 85 futuros professores]] mostra o que uma regra sem razão produz. 62,4% da amostra recusou usar IA generativa mesmo onde ela era permitida, e 41,5% dos que recusaram citaram o medo de serem acusados de [[academic-integrity|plágio]]. 9 dos 11 entrevistados leram a própria política permissiva como uma armadilha. No mesmo estudo, apenas 37,6% usaram a IA generativa permitida, suas escolhas acompanharam a cultura do programa e o [[assessment|desenho da avaliação]] mais do que a permissão de qualquer curso isolado, e suas próprias declarações de divulgação subnotificaram o uso real em todos os cursos.

Leia esses números como um briefing de desenho. Uma permissão sem propósito declarado parece uma armação, e uma proibição sem propósito declarado parece um obstáculo a ser contornado. O que os estudantes levam em conta é o raciocínio anexado a esta tarefa. Coloque a regra na folha da tarefa, em uma linha, e faça a linha específica o bastante para que o estudante distinga se a ajuda que ele está prestes a aceitar enfraquece justamente o que você avalia.

## Avalie algo que o estudante produziu sem a ferramenta

Esta é a etapa que faz o trabalho, e a evidência aqui é a menos ambígua da página.

A revisão de 72 estudos constatou que a IA generativa elevou de forma confiável a conclusão de tarefas no curto prazo e reduziu o tempo na tarefa em 36 estudos, o que os autores tratam como o resultado mais replicado do corpus, e esses ganhos de eficiência "não se transferem para o desempenho independente" em 21 estudos. Um [[yan-cognitive-outsourcing-genai-assessments-2026|estudo de pensar em voz alta com 38 estudantes de graduação]] mostra como isso acontece no caso comum. O [[cognitive-offloading|descarregamento cognitivo]] é mais prejudicial à aprendizagem quando a IA executa o raciocínio que o estudante deveria praticar. Ali, 76,32% permaneceram no padrão de uma única rodada de perguntar, responder e parar, e apenas 21,06% alternaram o uso da IA com leitura e redação independentes. O maior grupo, 31 de 38, descreveu metas de domínio, trabalhou em rodadas únicas fragmentadas, e depois relatou dependência excessiva, acomodação mental e esquecimento rápido; um deles resumiu assim: "a velocidade com que você esquece também é muito rápida". Um [[critical-thinking-paradox-genai-learning-2026|artigo de referencial de 2026]] dá nome ao padrão. Notas e produtos sobem, enquanto o trabalho mental que produz aprendizagem durável cai.

O ensaio randomizado resolve a discussão em pelo menos um contexto. Um [[bassner-performance-learning-dissociation-ai-programming-2026|ECA de três braços com 275 estudantes de CS1]] comparou um tutor que dava dicas e omitia as soluções completas, o ChatGPT sem restrições e recursos web tradicionais. As notas dos exercícios se separaram nitidamente: 71,84% para o ChatGPT contra 29,85% para o controle sem IA, com o tutor que dá dicas em 57,50%. Os ganhos de conhecimento conceitual não diferiram em nada entre os três braços, com 0,83, 0,71 e 0,85 pontos (tempo × grupo p = 0,773). As duas condições com IA reduziram a frustração e a carga extrínseca, e apenas o tutor que dá dicas elevou a motivação intrínseca. A ferramenta que os estudantes avaliaram como mais útil e mais fácil foi também a que mais reduziu o processamento que produz aprendizagem.

Note o que esse desenho não pode sustentar. É um curso, um semestre, um idioma, e as notas dos exercícios são desempenho assistido por construção, que é justamente a medida contra a qual o estudo alerta. Ele não mostra que tutores são inúteis. Mostra que o resultado que você escolhe medir decide a resposta que você obtém, e que a preferência dos estudantes não é uma medida de aprendizagem.

Então avalie a versão sem ajuda. Uma tarefa por unidade em que os estudantes recuperam, explicam, resolvem ou defendem ideias sem nenhuma IA presente, e atribua pontos reais a ela. O argumento de validade por trás disso está em [[assessment-validity|validade da avaliação]]: um artefato polido feito em casa não mostra mais que a pessoa que o entregou tem a competência que o artefato exibe. [[redesign-assessment-ai-era]] percorre a arquitetura completa, incluindo a etapa autenticada barata para cursos grandes.

## Mude a tarefa que você já tem, não o curso inteiro

A maioria dos professores que faz essa pergunta não está construindo um curso novo. Eles têm um trabalho de fim de semestre, um relatório de laboratório ou uma lista de problemas que funciona há anos, e querem saber onde colocar a costura. Desmonte a tarefa etapa por etapa, pergunte de cada etapa o que você está avaliando ali, e deixe a resposta definir a fronteira. Esse é o método no nível da tarefa documentado no [[mccorkle-aligned-genai-course-policy-2025|trabalho de McCorkle sobre política de curso alinhada]], e uma passada pela sua tarefa mais contestada costuma bastar para ver a forma dela.

Um trabalho de dez páginas normalmente se separa assim. A escolha do tema e a busca de fontes são onde mora o julgamento, então uma ferramenta que propõe uma tese ou monta a lista de leitura executou a parte que você avalia. A síntese e o argumento são o próprio construto. A formatação de citações, a conferência de referências e a edição de linguagem são etapas em que o uso da ferramenta é invisível para o seu construto, e proibi-lo ali não lhe compra nada além de ressentimento. Diga isso na folha da tarefa, etapa por etapa, em uma tabela curta se preferir.

Depois torne a etapa intermediária visível. Peça um memorial analítico de uma página, entregue junto com o trabalho, que nomeie duas fontes que o estudante rejeitou e por quê, uma afirmação que ele revisou depois de verificar, e onde ele escolheu não seguir uma sugestão. Avalie-o com a mesma especificidade que você usa para a prosa. Um memorial só tem peso se o estudante que o omite perde mais do que ganha ao omiti-lo, então atribua pontos suficientes para que a aritmética seja óbvia.

Uma lista de problemas é mais fácil e a costura fica em outro lugar. As respostas não são o construto; a seleção de método e o diagnóstico de erros são. Exija a primeira etapa de cada problema, com as palavras do próprio estudante, antes de qualquer ferramenta ser aberta, e resolva um dos problemas da lista em sala sem nada disponível. É uma mudança menor do que parece, e converte a lista de um produto que você não consegue verificar em um registro de como o estudante pensou.

Para um relatório de laboratório, a costura costuma ser a interpretação dos dados e a análise de erros. Deixe a ferramenta formatar a tabela e conferir as unidades. Mantenha a interpretação, a escolha do que conta como anômalo e a explicação da divergência em relação ao resultado esperado nas mãos do estudante, e avalie essas partes com pontos anexados.

O padrão se generaliza: localize a etapa onde mora a capacidade, proteja essa etapa, libere o resto, e coloque a evidência de processo onde estão os pontos. O que você evita é a reformulação que muda como o trabalho é produzido sem mudar o que a nota pode sustentar.

## Julgue ferramentas de feedback e de correção pelo desempenho posterior

O [[ai-feedback-quality|feedback por IA]] pode ser oportuno, específico, escalável e aceitável para os estudantes, inclusive no [[higher-ed|ensino superior]]. Se ele ensina depende da acurácia, do ajuste [[pedagogy|pedagógico]] e do [[feedback-literacy|letramento em feedback]] dos estudantes, ou seja, da capacidade deles de julgar o feedback e agir sobre ele. Se você está ponderando usá-lo para feedback ou correção, os números abaixo são os que devem ir para a conversa de aquisição.

Uma [[mcinnes-salvaging-constructive-alignment-genai-2026|análise crítica de 14 documentos de orientação institucional]] constatou que prompts genéricos produzem resultados, atividades e avaliações isolados. A ferramenta não consegue saber o quão interconectado é um tópico, então seu feedback permanece geral em vez de diagnosticamente preciso.

A configuração move a qualidade, de forma mensurável. Em um [[teacher-ai-literacy-prompt-feedback-quality-2026|estudo sobre feedback de IA a respeito de objetivos de aprendizagem]], o modelo sozinho explicou 26,9% da variação na qualidade do feedback e a adição do prompt elevou isso para 42,8%, um acréscimo de 15,9%. A única característica do prompt que importou foi a terminologia específica da disciplina; substituí-la por paráfrases cotidianas tornou o feedback significativamente pior. A escolha do modelo também importou: Claude 3 e Gemini Advanced produziram feedback com avaliações significativamente mais baixas que o ChatGPT-4.

A correção é ainda mais instável. Uma [[llm-automated-grading-programming-comparison-2026|comparação de 18 modelos de linguagem corrigindo 6.081 submissões de programação]] encontrou notas médias de 0,290 a 0,608 conforme o modelo, com taxas de concordância exata tão baixas quanto 0,20 para alguns e 0,74 no melhor caso. Dois estudantes com trabalhos idênticos podem receber notas diferentes dependendo de qual modelo o departamento licenciou.

Depois há a pergunta de que os estudantes se importam, que é se o feedback muda o que eles conseguem fazer mais tarde. Uma [[llm-feedback-handwritten-mathematics-exam-performance-2026|implantação ao longo de um semestre em um curso de graduação em matemática]] com 343 estudantes de inglês e 236 de holandês gerou comentários individualizados e exercícios de prática a partir de folhas de resposta fotografadas. Os avaliadores consideraram os exercícios de prática o ponto mais forte e a especificidade diagnóstica e a clareza os mais fracos. O cruzamento randomizado em questões de prova vinculadas não encontrou diferença estatisticamente significativa após o ajuste (pHolm = 0,104), e a presença às aulas acompanhou as notas de prova muito mais claramente do que a exposição ao feedback (ρ = 0,49 e 0,54, ambos p < 0,001). Feedback que os estudantes valorizam e sobre o qual agem não é o mesmo que feedback que produz aprendizagem mensurável.

Há uma armadilha adicional se você deixar um modelo corrigir. Em um [[llm-grading-self-preference-bias-2026|estudo de 1.426 dissertações de psicologia abrangendo dez anos acadêmicos]], todos os quatro corretores de IA deram as notas mais baixas a trabalhos escritos por estudantes e as mais altas a trabalhos escritos por IA. 10 de 16 comparações foram grandes o bastante para que diferenças desse tamanho sejam raras na pesquisa em educação, até a maior lacuna observada, e o viés foi mais forte para texto totalmente gerado por IA. Um corretor pode recompensar um texto por ser maquínico mesmo quando suas instruções dizem para julgar o conteúdo.

## Separe os estudantes que o desenho ajuda dos que ele deixa para trás

Uma melhoria média pode esconder um curso em que os fortes ficam mais fortes e os fracos recebem um acordo pior. A [[digital-divide|exclusão digital]] hoje corre ao longo de pelo menos três linhas: acesso às ferramentas, habilidade em usá-las, e quem de fato obtém um resultado útil. A habilidade de prompting sozinha produz um "privilégio de prompt" em que usuários mais experientes obtêm melhor saída do mesmo sistema.

A revisão de 72 estudos separa dois mecanismos. Uma lacuna de habilidade aparece quando estudantes com [[prior-knowledge|conhecimento prévio]] mais forte convertem a ajuda em ganhos duráveis, enquanto os menos preparados a substituem pela prática. Uma lacuna de recursos aparece quando internet confiável e acesso pago sustentam melhor uso da ferramenta entre instituições. Apenas seis estudos no corpus examinaram a equidade diretamente, o que os autores tratam como o problema e não como nota de rodapé; [[equity-in-ai-education|equidade na educação com IA]] é onde esse argumento é desenvolvido.

A ajuda pode fechar uma lacuna quando os estudantes que precisam dela são os que se engajam. Um [[co-learning-ai-agent-hidden-rules-2026|estudo de quatro experimentos com aprendizes descobrindo regras ocultas com a ajuda de um agente de IA]] constatou que o auxílio reduziu os movimentos necessários em 33-52%, e o benefício se concentrou nos de pior desempenho, enquanto os aprendizes mais fortes ficaram em grande parte inalterados. Essa é a versão esperançosa, e depende de que os estudantes que mais precisam da ajuda sejam os que a usam bem, o que a lacuna de habilidade sugere que eles não conseguirão sem ensino.

## Mantenha as decisões consequentes com uma pessoa

O letramento em IA do corpo docente não está onde a conversa sobre políticas pressupõe. Entre [[science-educators-ai-literacy-postqualification-2026|professores de ciências que já haviam concluído formação em IA]], o letramento médio em IA foi de 16,7 de 30, abaixo dos 18,79 da amostra de referência, e não teve relação com idade, gênero, anos de serviço ou quanto haviam usado IA. Um [[ai-tpack-mathematics-teacher-education-2026|levantamento com 412 futuros professores de matemática]] encontrou prontidão em estágio inicial, com as crenças de ensino mais altas, com média de 5,24 em uma escala de 7 pontos, e o conhecimento técnico de IA mais baixo, em 4,23.

Isso é um argumento a favor de ferramentas limitadas, não autônomas. A análise dos documentos de orientação propõe um agente [[rag|com recuperação aumentada]] configurado institucionalmente, que guia o pensamento sem fornecer respostas, sinaliza desalinhamentos e escala para uma pessoa nas bordas, com autoridade descrita como "derivada e limitada". Há evidência direta de manter as pessoas no circuito em vez de à frente dele: um [[instructional-agents-multi-agent-course-gen|sistema de geração de materiais de curso]] teve melhor pontuação quando pessoas permaneceram envolvidas, com o modo que carregava mais contribuição humana melhorando as notas dos avaliadores em 0,5-0,9 pontos em relação ao modo totalmente autônomo. Seus avaliadores autônomos se agruparam firmemente em torno de 2,9-3,1, enquanto os avaliadores humanos se dispersaram e discriminaram mais, então os autores mantiveram o julgamento humano como o principal sinal de qualidade.

A versão prática para um curso: deixe a IA rascunhar, classificar e sinalizar. Mantenha acurácia, justiça, privacidade e qualquer decisão sobre a progressão de um estudante sob [[human-in-the-loop-ai|supervisão humana significativa]]. Os riscos que tornam isso necessário são o conjunto familiar: viés, privacidade, transparência, [[agency|autonomia]] do aprendiz, responsabilização e [[pedagogical-safety|segurança pedagógica]]. Essa lista é o motivo pelo qual a [[teacher-ai-competency|competência pedagógica em IA]] importa mais que a familiaridade técnica.

## O que os professores erram sobre isso

**"O trabalho polido à minha frente é prova de que o estudante consegue fazê-lo."** É prova de que o trabalho está polido. A diferença de 71,84% contra 29,85% nas notas dos exercícios, com ganhos conceituais estáveis no mesmo ensaio, e os 36 estudos da revisão que encontraram eficiência sem transferência, todos descrevem a distância entre desempenho assistido e capacidade. Se o artefato é a única coisa que você avalia, o artefato é tudo o que você mediu.

**"Se a IA é um tutor, ela está do lado certo da linha."** O rótulo não carrega a garantia. No ensaio de CS1, o tutor que dá dicas evitou o dano que o ChatGPT sem restrições causou nos exercícios, e ainda assim não produziu nenhuma vantagem conceitual sobre nenhuma IA. Omitir a resposta final não é o mesmo que omitir o raciocínio, e um tutor pode fazer o segundo enquanto parece fazer apenas o primeiro.

**"Um detector, ou uma regra mais rígida, resolve o problema de integridade."** A detecção trata de uma resposta entre várias. O estudo com futuros professores constatou que o medo da acusação suprimiu o uso permitido, que a cultura do programa previu o comportamento melhor que qualquer política de curso, e que as autodeclarações subnotificaram o uso em todos os cursos. Uma regra mais rígida muda o que os estudantes escondem, não o que aprendem.

**"Uma regra de IA única para o curso é mais justa e mais simples."** Mais simples, sim. A evidência favorece regras definidas por tarefa, porque os três casos — restringir, dar scaffolding e exigir — coexistem na maioria dos cursos, e a mesma permissão significa coisas diferentes em um relatório de laboratório e em uma reflexão. Posições genéricas são também as que os estudantes contornam com mais facilidade.

**"Estudantes que dizem que a ferramenta ajuda estão aprendendo com ela."** A satisfação é uma [[self-report-measures|medida de autorrelato]], e no ensaio de CS1 a condição mais bem avaliada foi a que mais reduziu o processamento por trás da aprendizagem. A implantação em matemática encontrou a mesma divisão: feedback que os estudantes valorizaram, nenhuma diferença significativa na prova.

**"Letramento em IA é habilidade de prompt, e os estudantes a adquirem usando a ferramenta."** Os referenciais tratam o [[ai-literacy|letramento em IA]] como compreensão conceitual, habilidade operacional, [[critical-thinking|avaliação crítica]], julgamento [[ethics|ético]] e consciência dos limites. A revisão é explícita ao afirmar que [[prompt-engineering|engenharia de prompt]], verificação de saída e análise de erros da IA são habilidades ensináveis que não se desenvolvem pela exposição. Os professores de ciências formados que pontuaram 16,7 de 30 são a versão empírica dessa afirmação.

**"O problema de equidade é o acesso."** O acesso é uma das três linhas. A habilidade e quem obtém um resultado útil são as outras duas, e apenas seis estudos no corpus examinaram qualquer uma delas diretamente. Entregar uma licença a cada estudante resolve o terço mais fácil.

## O que vai voltar contra você

**"Meus estudantes dizem que a IA os ajuda."** Em geral ela ajuda com o trabalho que está à frente deles, e a descoberta é sobre o que permanece depois. Pergunte o que eles ainda conseguem fazer sem ajuda e você obtém outra resposta, que é a razão pela qual a etapa avaliada sem ajuda existe.

**"Eu ensino 200 estudantes. Não consigo ler rascunhos nem fazer verificações orais."** Você não precisa ler tudo. Uma aplicação em sala ou uma explicação curta gravada na tarefa de maior peso, mais uma verificação por amostragem em trabalhos que pareçam inconsistentes com entregas anteriores, cobre a maior parte do risco. Entregas por etapas, memoriais analíticos e [[eportfolio|portfólios]] de processo escalam; avaliar a verificação de uma saída de IA deliberadamente falha também escala.

**"A detecção é tudo o que temos."** Os detectores têm problemas documentados de confiabilidade e justiça, e a validade é o problema mais difícil: um produto polido feito em casa não mostra mais que a pessoa que o entregou tem a competência. Evidência de processo é mais barata que uma corrida armamentista e produz algo que você pode defender em um recurso.

**"Proibir é mais simples."** Mais simples, e costuma falhar. A adoção no estudo com futuros professores acompanhou a cultura do programa e não a política de qualquer curso isolado, e a divulgação subnotificou o uso real em todos os cursos. Uma proibição também retira sua capacidade de ver como os estudantes usariam a ferramenta quando saírem.

**"Eu não ensino IA. Este não é o meu assunto."** As descobertas são sobre o seu assunto. Quando a IA executa a prática que o seu curso existe para oferecer, é exatamente aí que ela interfere, e a interferência aparece nas suas avaliações, quer você mencione a ferramenta ou não.

**"A evidência é nova demais para agir."** Em parte é verdade, e isso corta nos dois sentidos. Boa parte do corpus são intervenções curtas, [[self-report-measures|estudos de autorrelato]], disciplinas únicas, ou trabalhos de 2025 e 2026, e as afirmações vindas da [[intelligent-tutoring|pesquisa madura sobre tutoria inteligente]] são mais fortes que as afirmações sobre [[conversational-ai|chatbots]] de uso geral sem restrições. Onde uma afirmação hoje tem um ensaio randomizado por trás, a dissociação entre desempenho e aprendizagem no ensaio de CS1 e o resultado de feedback na implantação em matemática, esse ensaio é citado aqui. Onde não tem, trate a descoberta como a melhor orientação disponível em vez de lei consolidada, e seja mais cético com resultados que mostram apenas satisfação, velocidade na tarefa, qualidade da saída ou desempenho assistido imediato.

## O que fazer esta semana

**1.** Escolha a tarefa que você está menos confortável em defender. Escreva a frase da capacidade no topo da folha da tarefa.

**2.** Acrescente uma etapa que funcione sem nenhuma IA presente: uma aplicação de cinco minutos em sala, uma explicação curta gravada, ou um parágrafo escrito na sala. Dê a ela pontos reais.

**3.** Declare a condição de IA para essa tarefa e acrescente uma linha de razão. Se a tarefa mistura etapas, diga quais são quais.

**4.** Reescreva um prompt que você dá aos estudantes, de "resolva isto" para "dê-me uma dica e faça-me uma pergunta", e explique a eles por quê.

**5.** Antes do início do semestre, leve a mudança ao coordenador do seu programa e a quem aprova adaptações, para que o primeiro recurso não seja também a primeira conversa.

## Para onde ir agora

Para a versão desses mal-entendidos parte interessada por parte interessada, veja [[addressing-common-misconceptions-ai-education]]. Para os requisitos de desenho implicados pelas descobertas sobre equidade e julgamento humano, veja [[equity-ethics-pedagogical-safety-research]]. [[redesign-assessment-ai-era]] leva a metade da avaliação mais adiante, e [[does-ai-help-students-learn]] é a revisão de evidências por trás das afirmações desta página. Se você está escolhendo entre reformular e fiscalizar, [[reduce-ai-cheating]] e [[course-ai-policy]] são as páginas companheiras.
