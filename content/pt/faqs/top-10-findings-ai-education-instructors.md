---
title: "Quais são os 10 principais achados da pesquisa em IA na educação que os professores deveriam conhecer?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-11-14T18:10:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

Estes dez estudos incidem diretamente sobre decisões que os professores tomam: o que atribuir, como avaliar, que ferramentas comprar, como construí-las e como saber se houve aprendizagem. Cada entrada apresenta o estudo, o seu resultado e a prática que ele altera.

## Os dez estudos

**1. O acesso a um chatbot comum reduziu as notas de exame em 17% ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Quase 1.000 estudantes do ensino médio na Turquia, em cerca de 50 turmas, percorreram três sessões de matemática sobre o mesmo conteúdo. Um grupo tinha uma janela de chat simples do GPT-4 durante a prática. Outro tinha um tutor construído sobre o mesmo modelo, com [[guardrails|salvaguardas]] escritas pelos professores: dicas em vez de respostas, com a solução correta e os erros comuns incorporados no prompt. O grupo de controle não tinha IA. Cada sessão terminava com um [[summative-assessment|exame sem consulta]] sobre problemas semelhantes, com a ferramenta ausente.

O grupo com chat simples obteve 48% acima do controle durante a prática e 17% abaixo do controle no exame. Estudantes que nunca tocaram em IA superaram-nos. O grupo com salvaguardas ganhou 127% na prática e ficou empatado no exame. O dano desapareceu, e nenhuma vantagem de aprendizagem surgiu em seu lugar. Os registros de chat explicam a divisão: o grupo sem salvaguardas pedia respostas e parava, enquanto o grupo com salvaguardas tentava resolver os problemas, pedia dicas e melhorava dentro da primeira sessão.

Para os professores, "IA permitida" não é uma política. A interface decide se a ferramenta se torna um canal de dicas ou uma máquina de respostas, e um chatbot de uso geral inclina-se para a segunda. Uma janela de chat deixada aberta durante a prática prejudica os estudantes que mais dependem dela.

Os administradores podem contrapor o mesmo resultado à alegação de compra de que um modelo mais forte resolve a pedagogia. O modelo era idêntico nos dois braços.

Ver também: [[training-ai-tutors-to-guide-rather-than-answer|Treinar um tutor para orientar em vez de responder]]

**2. Um tutor construído sobre a pedagogia do próprio curso superou a aula de aprendizagem ativa, em menos tempo ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 é o curso introdutório de física de Harvard para estudantes de ciências da vida. No outono de 2023, 194 estudantes num ensaio cruzado fizeram duas lições duas vezes, uma vez na [[active-learning|aula de aprendizagem ativa]] do curso e outra através de um tutor construído para o curso, com pré-testes e pós-testes em torno de cada versão.

Os estudantes aprenderam mais com o tutor. A mediana do pós-teste foi 4,5 contra 3,5, os [[learning-gains|ganhos de aprendizagem]] medianos foram mais do que o dobro dos da turma, e as estimativas quantílicas do efeito variaram de 0,73 a 1,3 desvios-padrão. Passaram uma mediana de 49 minutos com o tutor contra cerca de 60 minutos na aula, e 83% avaliaram as suas explicações como tão boas ou melhores que as dos seus professores. As avaliações de envolvimento e motivação subiram. O prazer e a mentalidade de crescimento não diferiram.

O resultado assenta no desenho. O tutor executava os mesmos movimentos que a aula: exemplos resolvidos, dicas graduais, prompts de autoexplicação, uma sequenciação que segue a investigação sobre como se aprende física. A comparação foi com aprendizagem ativa, não com aula expositiva, pelo que a objeção comum de que qualquer coisa supera uma aula expositiva não se aplica.

Quem trabalha no desenvolvimento docente tem aqui o argumento mais forte disponível de que o desenho de um tutor é trabalho curricular, não de aquisição. Para as equipes de produto, a fasquia é concreta: igualar uma sala de aula de aprendizagem ativa, em menos tempo, usando os mesmos movimentos instrucionais.

Ver também: [[developing-ai-tutor|Boas práticas para desenvolver um tutor de IA]]

**3. A tutoria por IA igualou tutores humanos especialistas ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

O StudentBench reuniu 2.469 sessões de tutoria com 2.383 adultos a preparar-se para o GRE, usando 13 tutores de IA construídos sobre 12 modelos, tutores humanos ao vivo e um controle em vídeo. O resultado foi o ganho de aprendizagem em itens Quantitativos e Verbais.

A tutoria por IA agrupada era estatisticamente equivalente à tutoria humana especializada, dentro de um quarto de desvio-padrão, e ambas superaram o controle em cerca de seis pontos percentuais: 6,86 em Quantitativo e 5,47 em Verbal, ou aproximadamente uma e meia a duas respostas corretas adicionais por seção. Os tutores de IA foram avaliados como mais fracos no planejamento de lições e na criação de problemas de prática, coisas que os tutores humanos fizeram melhor.

Para os administradores, a aritmética de pessoal muda para a preparação bem especificada para testes. Quando um tutor licenciado iguala um tutor humano a um quarto de desvio-padrão, a decisão passa a ser sobre custo e cobertura, e a eficácia deixa de ser a questão. Os pesquisadores notarão o limite: equivalência não é superioridade, e um teste padronizado é o resultado mais fácil de uma máquina igualar.

Quem trabalha no desenvolvimento docente pode olhar para onde os tutores humanos mantiveram vantagem: diagnosticar de que o aprendiz precisa a seguir e construir a sequência que daí decorre.

Ver também: [[intelligent-tutoring|Tutoria inteligente]]

**4. Escrever apontamentos superou perguntar a um chatbot, três dias depois ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes e colegas realizaram um experimento pré-registado em sete escolas secundárias inglesas. 405 estudantes do 10º ano percorreram duas de três condições num texto de história: um chatbot que podia responder a perguntas sobre ele, tomada de apontamentos, ou ambos. Três dias depois, fizeram testes sem consulta de retenção literal, compreensão e [[retrieval-spacing-interleaving|recordação livre]].

Os apontamentos superaram o chatbot nas três medidas, por cerca de meio desvio-padrão na retenção e perto de quatro décimos na compreensão. Apontamentos mais chatbot superaram o chatbot sozinho em duas das três e não fizeram nada pela recordação livre, e os apontamentos sozinhos foram mais fortes do que a combinação. Na condição combinada, cerca de um quarto dos estudantes copiou a saída do chatbot para os seus apontamentos. Os estudantes continuaram a avaliar o chatbot como mais fácil, mais útil e mais agradável do que escrever.

Os professores têm aqui evidência direta de que um assistente de leitura pode substituir a leitura. Se o objetivo da tarefa é compreender um texto, [[writing-education|a escrita é a compreensão]], e uma ferramenta que responde a perguntas sobre a passagem remove a prática. Mantenha os apontamentos. Se permitir o chatbot, peça algo que ele não consegue fornecer: uma comparação, um desafio ao texto ou um resumo escrito depois de a ferramenta ser fechada.

Ver também: [[ai-support-reading-comprehension|Apoio de IA à compreensão de leitura]]

**5. O tempo de estudo caiu 27%, e a retenção caiu com ele ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Um painel de dez anos da plataforma ALEKS, cobrindo 3,2 milhões de interações de aprendizagem e 12,2 milhões de tempos de resposta a avaliações de colocação, mostra o que os estudantes fizeram depois da chegada do ChatGPT. O desenho compara tipos de problemas que podem ser colados num chatbot (problemas de palavras baseados em texto) com tipos que exigem manipular um gráfico dentro da plataforma, dentro do mesmo currículo.

O tempo nos problemas suscetíveis à IA caiu 2,8% por trimestre entre estudantes universitários, 26,9% ao longo de onze trimestres. Estudantes do ensino médio caíram 31,3%, os do ensino fundamental 9,0%, e os alunos do quinto ano não mostraram alteração detectável. O declínio desapareceu completamente sob [[remote-proctoring|supervisão remota]], que é o teste decisivo: com a ferramenta indisponível, os estudantes passaram o tempo de antes. Itens de retenção com supervisão mostraram um declínio cumulativo de 25% nas probabilidades de uma resposta correta.

O gradiente por idade é um sinal de desenho para as equipes de produto. O tempo de prática é a variável que se move, e move-se mais onde a tarefa é mais fácil de entregar. Para os professores, o tempo na tarefa é um alerta precoce barato: uma turma que termina os mesmos problemas muito mais depressa provavelmente não está a aprender a mesma coisa.

Ver também: [[reducing-over-reliance|Reduzir a dependência excessiva da IA]]

**6. As notas dos trabalhos de casa subiram 18% enquanto os exames sem consulta caíram 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26.811 estudantes do 7º ao 12º ano na China, acompanhados durante 30 meses, com a IA generativa adotada em momentos diferentes entre coortes. As notas dos trabalhos de casa subiram 18% e o tempo de conclusão caiu 30%, de 64 para 45 minutos. Os exames mensais sem consulta caíram 20% da média de base em seis meses, e os exames de admissão de alto risco caíram 18% a 24% após cerca de dois anos.

O momento mostra o mecanismo. Cerca de 81% dos usuários de IA terminaram os trabalhos de casa mais depressa do que o estudante sem IA mais rápido e depois tiveram mau desempenho nos exames. A minoria que manteve um tempo de trabalho comparável ao dos não usuários aprendeu tão bem como qualquer outro. As perdas foram maiores em ciências sociais, depois em STEM, depois em línguas, e maiores entre estudantes de alto desempenho.

A conclusão dos trabalhos de casa é um mau indicador de aproveitamento, e a diferença aparece em seis meses, muito antes de os resultados dos exames de admissão se moverem. Os professores podem agir mais cedo: mantenha a evidência avaliada sem consulta e trate o trabalho de casa como prática cujo tempo de conclusão é visível.

Ver também: [[checking-whether-educational-ai-works|Verificar se a IA educacional funciona]]

**7. Todos os tutores testados falharam na pedagogia, e falharam pior ao longo de uma conversa ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

O SafeTutors testou 11 tutores, de modelos de pesos abertos de 3,8B a 72B mais o GPT-5-mini, em matemática, física e química, contra uma taxonomia de 11 dimensões e 48 sub-riscos extraídos da [[learning-theories|ciência da aprendizagem]]. As suas categorias de falha são pedagógicas: divulgação excessiva de respostas, reforço de concepções erradas e abandono do [[scaffolding|andaimento]]. Cada uma delas parece útil no momento, porque o estudante obtém rapidamente uma resposta correta.

Todos os modelos mostraram dano pedagógico amplo. Modelos maiores não foram de forma confiável mais seguros, e a utilidade geral correlacionou-se apenas fracamente com a segurança pedagógica. As taxas de dano subiram de 17,7% em trocas de um único turno para 77,8% em conversas de cinco a oito turnos.

Avaliações de um único turno não são evidência de um tutor seguro, e as equipes de produto devem desenhar os seus testes em torno disso. Um modelo que passa uma verificação única de utilidade e segurança pode falhar na maior parte de uma conversa real. Os administradores que compram um tutor precisam de três respostas: ele retém as soluções, sonda concepções erradas e aguenta-se ao longo de uma sessão. Uma demonstração de fornecedor com uma única troca não fornece nenhuma delas.

Ver também: [[pedagogical-safety|Segurança pedagógica]]

**8. Os casos de má conduta assentam em evidência mais tênue do que as acusações sugerem ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz e colegas codificaram todos os casos de má conduta com IA generativa numa universidade australiana ao longo de três anos: 1.162 casos com 1.855 itens de evidência, cada um avaliado quanto à relevância, credibilidade e força inferencial.

As alegações de IA generativa subiram de 11,9% dos casos de má conduta em 2023 para 36,9% em 2025, enquanto o volume total de casos se manteve estável. 58 casos, 5% do total de IA generativa, assentavam apenas em afirmação, sem qualquer item de evidência. A saída de detectores era rara e fraca: relatórios do Turnitin ou de similaridade não tinham força inferencial em 73 itens, e a saída isolada do GPTZero tinha baixa credibilidade em 69. A evidência mais forte vinha da investigação e não da alegação, com admissões em entrevista oral em 410 itens a 97,2% fortes. [[hallucination-risk|Referências fabricadas]] foram a maior mudança estrutural, 22,3% dos itens, subindo de 10,4% em 2023 para 30,0% em 2025.

Para os administradores, a lição é processual. Um caso construído sobre a pontuação de um detector não sobreviverá a um recurso, e uma investigação que começa pela ferramenta em vez da entrevista produz processos fracos. Os professores podem agir sobre o artefato que continua a aparecer: as referências fabricadas são comuns, e verificar uma referência é barato.

Ver também: [[should-we-use-ai-detectors|Usar detectores de IA]]

**9. A confiança dos professores na sua literacia em IA acompanha mal a competência medida ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 professores do ensino básico e secundário completaram um inquérito de autorrelato sobre literacia em IA e uma medida de desempenho objetiva construída sobre o mesmo referencial: Conceito, Uso, Avaliação e Ética. As correlações entre os dois variaram de 0,07 a 0,24.

A análise de perfis latentes encontrou seis grupos. 43 professores avaliaram-se consistentemente alto enquanto pontuavam mais baixo na medida objetiva. 59 mostraram o inverso. Os restantes agruparam-se perto da média ou dividiram-se pela experiência prévia com IA.

Para quem trabalha no desenvolvimento docente, a [[self-assessment|autoavaliação]] não é uma análise de necessidades. Um inquérito que pergunta aos professores quão confiantes se sentem vai sobrefinanciar os confiantes e servir mal os discretos, e esses grupos não são os competentes e os com dificuldades. Tarefas curtas de desempenho separam-nos. Os pesquisadores devem tratar as correlações baixas como um aviso de medição: qualquer estudo sobre [[ai-literacy|literacia em IA]] construído sobre [[self-report-measures|autorrelato]] está a medir confiança.

Ver também: [[faculty-development-ai|Desenvolvimento docente que muda a prática]]

**10. A correção por IA penaliza os estudantes que escrevem pior ([[ai-scoring-language-bias-physics|Feser e Tschisgale, 2026]]).**

As explicações de física de 116 estudantes do ensino médio foram corrigidas por 9 abordagens de aprendizagem de máquina e 2 abordagens de grandes modelos de linguagem, e depois comparadas com pontuações de especialistas humanos. A concordância com os especialistas variou de 67,2% a 78,4%, o que soa aceitável até os erros serem decompostos.

Todas as abordagens subestimaram a compreensão conceitual em explicações de menor qualidade linguística. O viés corria num só sentido: a escrita mais forte não foi inflacionada. O padrão espelha o que foi relatado para os próprios professores de física, o que sugere que a dificuldade está em inferir compreensão a partir da prosa, tanto para pessoas como para modelos.

O pessoal de avaliação e as equipes de produto precisam de relatar taxas de subestimação por qualidade linguística, e não apenas a concordância global com especialistas, porque a média esconde o grupo que é prejudicado. Para quem corrige [[multilingual-learning|aprendizes multilíngues]], encaminhe respostas de baixa qualidade linguística para [[human-in-the-loop-ai|revisão humana]] ou desenhe tarefas que não dependam da prosa.

Ver também: [[ai-grading-fairness-reliability|Correção por IA justa e confiável]]

## O que os dez têm em comum

Três dos estudos medem duas coisas ao mesmo tempo: o que os estudantes produzem com a ferramenta e o que conseguem fazer sem ela. Bastani, Rismanchian e Strömberg encontram todos a divergência entre as duas, e apenas a medida sem ajuda se comporta como aprendizagem. Quatro dependem de uma escolha de desenho e não do modelo: as salvaguardas em Bastani, a pedagogia incorporada no tutor de Kestin, a escrita que Kreijkes manteve na tarefa e o contexto multiturno que o SafeTutors testou. Três examinam o sistema em torno da ferramenta, ou seja, a evidência usada nos casos de má conduta, a forma como a competência docente é medida e os pressupostos linguísticos na [[automated-assessment|correção automatizada]]. O StudentBench estabelece paridade num teste padronizado, o único resultado em que uma máquina pode igualar uma pessoa com mais facilidade. Bastani aparece em dois grupos porque fornece tanto a lacuna como a correção de desenho.

Isso deixa três perguntas que vale a pena levar para qualquer decisão sobre curso ou produto. O que deve o estudante ser capaz de fazer quando a ferramenta desaparecer? O que a atividade lhe pede que faça enquanto ela está aberta? Que evidência mostraria a diferença um mês depois?

## Onde esta evidência é escassa

Estes estudos compartilham as [[limitations-in-aied-research|limitações da pesquisa em IA na educação]] como um todo. Dois dos maiores situam-se na Turquia e na China, três nos Estados Unidos, um na Inglaterra, um na Austrália e o estudo de correção na Alemanha. Um é uma comparação de referência entre modelos comerciais e não um estudo de campo. A matemática do ensino médio domina, com a física e a computação a seguir. Muito poucos estudos olham para [[humanities-education|escrita em humanidades]] em escala, para o ensino profissionalizante ou para estudantes com deficiência.

Apenas o painel chinês e o painel ALEKS observam estudantes durante mais de dois anos após a adoção, e os autores chineses argumentam que estudos mais curtos subestimam sistematicamente a penalização de longo prazo. Seis destes resultados são pré-publicações ou artigos de trabalho que ainda não completaram a revisão por pares: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang e Feser. Os estudos de Bastani, Kestin, Kreijkes e Munoz estão publicados em revistas com revisão por pares.

Resultados nulos e negativos são raros nesta literatura, pelo que o registro publicado provavelmente exagera a frequência com que a IA ajuda. Estes estudos são a melhor orientação atual sobre dez decisões, e nenhum deles resolve uma questão.

## Para onde ir a seguir

[[does-ai-help-students-learn|Usar IA realmente ajuda meus estudantes a aprender?]] é a revisão de evidência mais ampla por trás destas afirmações. [[redesign-assessment-ai-era|Como redesenhar a avaliação para a era da IA?]] leva a metade da avaliação mais longe. Para os casos de integridade, [[reduce-ai-cheating|Como posso reduzir a cola com IA?]] cobre evidência de processo e política. Para os achados de desenvolvimento profissional, [[faculty-ai-competencies|Que competências o corpo docente precisa ter em relação à IA?]] é a página companheira, e [[addressing-common-misconceptions-ai-education|Como podemos abordar as concepções errôneas mais comuns sobre a IA na educação?]] trata das objeções que provavelmente ouvirá dos colegas.
