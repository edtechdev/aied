---
title: "Como a IA deve ser incorporada ao desenho da experiência de aprendizagem?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-28T11:26:02-04:00"
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

O plano do módulo tem uma linha que diz "atividade de IA" e ninguém consegue dizer o que ela substitui. Ou um instrutor pediu para adicionar um chatbot a um curso que já funciona, e seu trabalho é posicioná-lo sem quebrar a parte que fazia o curso funcionar.

Comece pelo objetivo de aprendizagem e pela atividade que o produz. O mesmo modelo pode ser um andaime, um parceiro [[socratic-method|socrático]], um leitor de rascunhos, uma [[simulation|simulação]] ou uma máquina de respostas, e qual deles você obtém depende do desenho, não do modelo. Nomeie o modo que você está construindo, coloque a tentativa do estudante antes de qualquer ajuda aparecer e mantenha ao menos um caminho pelo curso que funcione sem a ferramenta.

## A versão curta

**1.** Escreva a frase sobre o que os estudantes conseguem fazer depois sem a ferramenta, e verifique cada recurso de IA contra ela.

**2.** Sequencie a interação: o estudante tenta, a IA apoia, o estudante avalia ou revisa, o estudante demonstra.

**3.** Nomeie o modo na escada do ICAP. Atalho e scaffolding podem ser a mesma ferramenta em degraus diferentes.

**4.** Coloque a IA onde a sequência do curso já prevê uma atividade específica, não no fim como bônus.

**5.** Retenha a ferramenta enquanto uma capacidade está se formando, e então a restaure num ponto de verificação que o estudante não consegue falsear.

## Decida o que o estudante faz sem a ferramenta

O conceito [[pedagogy|Pedagogias e Estratégias de Ensino]] da base de conhecimento fornece o teste: a configuração preserva a atividade que produz a aprendizagem pretendida? Responda isso no papel, antes de alguém escolher um recurso.

[[finkelstein-principled-ai-education-2025|The Principled AI Education Framework]] enuncia a regra geral: a tecnologia deve ampliar, e não deslocar, as capacidades humanas que a educação pretende desenvolver. Escrita como teste para um módulo, isso significa nomear a capacidade, nomear a atividade que a constrói e perguntar se a IA está dentro dessa atividade ou ao lado dela.

## Coloque a tentativa antes da ajuda

O padrão básico que sobrevive ao contato com uma turma real: **o estudante tenta, a IA apoia, o estudante avalia ou revisa, o estudante demonstra compreensão.**

Na prática, isso significa pedir uma previsão ou solução inicial antes de qualquer assistência aparecer, e preferir perguntas, dicas, exemplos, contra-argumentos e [[feedback]] à conclusão imediata. Preserve a [[productive-failure|falha produtiva]] onde ela serve à aprendizagem. Exija verificação de afirmações consequentes, embuta explicação e [[learning-by-teaching|ensino de volta]], e retire o apoio à medida que a competência cresce. Mantenha algum trabalho sem IA para que os estudantes calibrem o que conseguem fazer sozinhos.

A síntese [[reducing-ai-misuse|Reduzir o Uso Indevido de IA]] recomenda a mesma forma como sequência de pensar primeiro, IA depois, refletir, com pontos de verificação deliberados de avaliação.

## Nomeie o modo para o qual você está desenhando

[[thermomix-genai-education-analogy-2026|a analogia da máquina de cozinha de Rummel, Nachtigall e Panadero]] reenquadra a pergunta: deixa de ser se os estudantes usam [[generative-ai|IA generativa]] e passa a ser como esse uso molda o que eles se tornam. Mapeada sobre [[icap-framework|ICAP]] e [[samr-model|SAMR]], ela fornece uma escada. Terceirizar integralmente uma tarefa sem revisão nem [[critical-thinking|envolvimento crítico]] é substituição Passiva, e arrisca [[cognitive-offloading|perda de habilidade e dependência excessiva]]. [[prompt-engineering|Refinar prompts]] e conferir saídas cruzadas exige [[prior-knowledge|conhecimento prévio]] e [[self-regulated-learning|autorregulação]], o que é Ativo ou Aumento. Usar IA para brainstorming, esboço e avaliação de trabalho original é Construtivo ou Modificação. A IA como parceiro real de diálogo para coconstrução e feedback adaptativo é Interativo ou Redefinição.

A implicação é direta. A mesma ferramenta é um atalho num degrau e um [[scaffolding|andaime]] no seguinte, então o documento de desenho deveria nomear o modo pretendido.

## Coloque-o onde a sequência prevê uma atividade

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec e Horvat]] analisaram a sequência planejada de 29.064 atividades de ensino e aprendizagem em 554 cursos e encontraram uma gramática de desenho visível. Atividades do tipo aquisição são o ponto de entrada mais comum e o maior tipo isolado, acima de 20%. O tipo de aprendizagem acompanha o nível de Bloom pretendido, com Aquisição caindo de cerca de 50% no nível 1 para cerca de 20% no nível 6 e Produção subindo acima de 20% nos níveis 5 e 6. A transição mais forte nos dados é de Avaliação para Discussão, em 0,332.

Duas lições se seguem para o desenho de IA. Coloque a ferramenta onde a sequência prevê um tipo de atividade. E, como o feedback se agrupou com [[collaborative-learning|colaboração]], [[group-work|trabalho em grupo]] e presença [[teacher-role|docente]], as estruturas entre pares e síncronas são onde o apoio de IA deve se conectar, não onde ele deve substituir.

## Decida o que reter e quando restaurar

[[refrain-amplify-genai-curriculum-2026|o arcabouço "reter, depois ampliar" de Torres-Sahli e colegas]] leva isso ao nível do programa. Retenha uma ferramenta generativa enquanto uma capacidade está se formando, e então a restaure quando o estudante conseguir dirigi-la, julgar o que ela devolve e responder por ela, com um ponto de verificação difícil de falsear em cada dobradiça.

Os dispositivos são governados por um critério de formação versus [[cognitive-offloading|descarregamento]]: permitidos onde apoiam trabalho envolvido, excluídos onde drenam a atenção. Isso transforma as decisões de descarregamento numa questão de [[curriculum-design|currículo]] e [[governance]] que vem antes do desenho no nível do curso, não depois.

## Verifique se o alinhamento é real

[[mcinnes-salvaging-constructive-alignment-genai-2026|a análise de discurso de McInnes e colegas]] de 14 documentos de orientação para o ensino superior adverte que conselhos enquadrados em eficiência, como usar IA generativa para redigir resultados de aprendizagem, rubricas e planos de curso, produzem [[assessment|alinhamento]] que parece alinhado enquanto negligenciam a metade construtiva. Resultados, atividades e avaliações são gerados como itens discretos, e não interdependentes.

O remédio deles é reordenar. Educadores deveriam entender o alinhamento construtivo bem o bastante para dirigir, interrogar e rejeitar a saída da IA antes de delegar qualquer parte dela, porque aceitar uma superfície plausível é a mesma falha avaliativa contra a qual os instrutores advertem os estudantes. Onde a IA é usada, eles defendem sistemas institucionalmente delimitados e [[rag|aumentados por recuperação]], configurados em torno de políticas e padrões de qualidade locais, e não de padrões genéricos treinados na internet.

## O que desenhistas instrucionais erram

Acrescentar a IA conta como a intervenção. O que muda a aprendizagem é a atividade que o estudante realiza, e a IA é uma parte do cenário dela. Uma dica bem posicionada e uma resposta bem posicionada podem rodar no mesmo modelo e produzir aprendizagens opostas.

Escrever a permissão é o trabalho de desenho. Uma permissão define o que é permitido. Ela não define a sequência, o modo ou o ponto de verificação, e esses três decidem se a atividade sobrevive.

A eficiência é o objetivo do redesenho. Redigir resultados e rubricas com um modelo é rápido, e a análise dos 14 documentos descobriu que o resultado pode parecer alinhado enquanto as partes deixam de se sustentar mutuamente.

## O que vai voltar contra você

**"Os estudantes vão usar de qualquer jeito, então desenhar em torno disso é ingenuidade."** Eles vão, o que é justamente o argumento para especificar o modo e ensiná-lo. Um módulo que nomeia o modo dá ao estudante algo a que aderir.

**"Não temos tempo para reordenar um curso inteiro."** Então reordene um módulo e uma avaliação. A dobradiça de reter e depois ampliar é um ponto de verificação, e a sequência de pensar primeiro são três instruções numa folha.

**"Nosso recurso de IA já inclui salvaguardas."** Salvaguardas restringem o que o modelo diz. Elas não decidem se o estudante tentou primeiro, se o apoio se retira ou se existe um caminho sem IA. Essas são decisões de desenho no seu curso, não configurações do produto.

## O que fazer nesta semana

**1.** Escreva a frase do desempenho sem auxílio para o módulo e coloque-a acima da lista de atividades.

**2.** Marque o modo ICAP pretendido ao lado de cada atividade de IA no plano.

**3.** Mova uma atividade de IA para que o estudante tente o problema primeiro.

**4.** Escolha um caminho sem IA pelo módulo e rotule-o para os estudantes.

**5.** Nomeie uma dobradiça em que a ferramenta é retida, e o ponto de verificação que a restaura.

## Para onde ir em seguida

[[learning-design|Desenho Instrucional]], [[active-learning|Aprendizagem Ativa]] e [[scaffolding]] trazem o vocabulário de desenho. Para os padrões no nível da interação que decidem se uma atividade desenhada preserva a aprendizagem, veja [[reduce-ai-cheating]] e [[redesign-assessment-ai-era]]. [[designing-educational-ai-software]] cobre como os mesmos princípios restringem o próprio software, e [[developing-ai-tutor]] os traduz na arquitetura de um tutor.
