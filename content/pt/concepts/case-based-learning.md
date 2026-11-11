---
title: "Aprendizagem baseada em casos"
created: "2026-11-08T16:24:00-05:00"
updated: "2026-11-11T07:40:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [problem-based-learning, productive-failure]
technology: [generative-ai, simulation, intelligent-tutoring]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
translation_of: concepts/case-based-learning
source_updated: "2026-11-11T07:40:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

> **Síntese**: A aprendizagem baseada em casos ensina por meio de casos particulares: a apresentação de um paciente, uma disputa jurídica, uma decisão empresarial, um episódio de sala de aula ou um par de exemplos contrastantes. O caso fornece o contexto, os fatos e a ambiguidade; o instrutor projeta as perguntas e a discussão que o transformam em aprendizagem. A abordagem é uma [[pedagogy|pedagogia]] característica da [[legal-education|educação jurídica]] e empresarial, onde o método de casos e o [[socratic-method|questionamento socrático]] há muito organizam a sala de aula, e da educação das [[medical-education|profissões da saúde]], onde casos clínicos e pacientes simulados oferecem prática controlada. Seu mecanismo de aprendizagem se sobrepõe ao da [[problem-based-learning]] e ao da [[productive-failure]], mas não é a mesma coisa: casos são tipicamente narrativas delimitadas com um espaço de problema projetado, enquanto a aprendizagem baseada em problemas parte de um problema mal estruturado que os estudantes investigam. A nova evidência sobre IA é promissora, mas estreita. Um estudo de viabilidade perioperatório com cinco casos descobriu que um [[llm|LLM]] ancorado respondeu adequadamente a 99,3% (543/547) das perguntas dos trainees e não produziu conteúdo fabricado. Um estudo de viabilidade em enfermagem descobriu que o [[generative-ai|ChatGPT]] reduziu o tempo de criação de casos de 106 para 71 minutos sem mudança mensurável na qualidade da discussão. Uma [[meta-analysis-systematic-review|meta-análise]] de seis ensaios randomizados descobriu que a aprendizagem baseada em problemas e em casos apoiada por IA melhorou o conhecimento e a satisfação, mas apenas dois ensaios testaram a aprendizagem baseada em casos e a revisão nunca analisou os formatos separadamente. O corpus ainda carece de um estudo que isole a qualidade do caso, a facilitação da discussão e os resultados de aprendizagem no mesmo desenho.

## Perguntas para refletir

- O que faz de um caso um caso, e não um longo problema matemático de enunciado ou uma história com um quiz anexado?
- Como a aprendizagem baseada em casos difere da aprendizagem baseada em problemas, e por que a diferença importa para como a IA deve ser usada?
- Quais partes de uma discussão de caso devem ser planejadas com antecedência, e quais devem ficar a cargo do julgamento ao vivo do instrutor?
- Quando a IA gera um caso, o que precisa ser verificado antes que os estudantes o vejam? Quando os estudantes discutem um caso com um [[intelligent-tutoring|tutor de IA]], o que precisa ser protegido?
- Por que os casos são tão comuns na educação jurídica e empresarial, e o que essas disciplinas perderiam se os casos fossem substituídos por resumos ou simulações?
- Que evidência mostraria que o ensino baseado em casos funciona, e não apenas que os estudantes gostaram do caso ou avaliaram bem a discussão?

## Introdução

Um caso é um particular delimitado. Ele dá aos aprendizes uma situação com atores, fatos, restrições e, geralmente, uma decisão ou um diagnóstico a alcançar. O caso não carrega sua própria lição. A lição vem das perguntas que um instrutor faz, das comparações que os estudantes fazem e do raciocínio que eles exteriorizam na discussão. É por isso que o ensino baseado em casos é uma prática de design, e não apenas um gênero de material de leitura.

O termo abrange uma família de técnicas. A **aprendizagem baseada em casos** geralmente se refere a casos estruturados usados para aplicar conhecimento e desenvolver raciocínio clínico ou profissional. O **método de casos** é a tradição jurídica e empresarial de ensinar por meio de opiniões de tribunais de apelação ou situações gerenciais, muitas vezes com questionamento socrático. **Estudos de caso** podem significar casos de ensino, mas a mesma expressão também nomeia um [[research-methods-aied|desenho de pesquisa]]; um estudo de caso de uma escola não é uma aula baseada em casos. **Casos contrastantes** aguçam a percepção ao pedir aos aprendizes que comparem dois ou mais exemplos que diferem em uma característica que o instrutor quer que eles notem. A **discussão de caso** é a camada de facilitação que transforma um caso escrito em raciocínio coletivo.

Essas técnicas se sobrepõem à [[problem-based-learning]], à [[inquiry-based-learning]], à [[simulation]] e à [[productive-failure]], e as fronteiras nem sempre são limpas na prática. A distinção que esta página mantém é funcional: um desenho baseado em casos parte de um caso que foi selecionado ou escrito para um propósito de ensino, e o instrutor o usa para tornar visível uma forma particular de raciocinar.

## O que conta como aprendizagem baseada em casos

A primeira distinção é em relação à aprendizagem baseada em problemas. A ABP parte de um problema mal estruturado e pede aos estudantes que identifiquem o que precisam aprender, pesquisem e voltem com uma solução. O problema pode ser um caso, mas a característica definidora é a investigação dirigida pelo estudante. A aprendizagem baseada em casos mais frequentemente começa com um caso preparado e um conjunto definido de objetivos de aprendizagem; o instrutor pode conduzir a análise, atribuir papéis ou usar o caso para ilustrar uma decisão. ABP e ABC compartilham a facilitação e o contexto, mas alocam o controle de modo diferente. Isso importa para a IA: uma IA que gera um caso está apoiando um desenho de ABC, enquanto uma IA que orienta estudantes por um problema aberto se aproxima mais da ABP.

A segunda distinção é em relação ao estudo de caso como pesquisa. Um estudo de caso [[qualitative-research|qualitativo]] é um método para estudar um sistema delimitado. Um caso de ensino é um artefato projetado. A mesma palavra aparece nos dois, e o corpus contém muitos artigos que usam o estudo de caso como método de pesquisa sem ensinar por meio de casos. Uma página de conceito precisa manter o sentido de ensino separado, ou a contagem de evidências se infla.

A terceira distinção é entre formatos de caso. Um caso narrativo completo pode ocupar várias páginas e exigir preparação substancial. Uma vinheta curta pode caber em uma única aula ou em uma avaliação. Um conjunto de casos contrastantes emparelha deliberadamente exemplos que diferem em uma característica-alvo. Um caso simulado pode ser interativo, com um paciente padronizado, um [[conversational-ai|chatbot]] ou um [[virtual-and-augmented-reality|ambiente virtual]] respondendo ao aprendiz. O formato muda o trabalho cognitivo: casos longos exigem síntese e priorização, vinhetas testam reconhecimento, casos contrastantes apoiam a discriminação, e simulações acrescentam tomada de decisão em tempo real.

## Por que os casos funcionam

Casos são uma ponte do conhecimento abstrato para o julgamento situado. Eles dão aos aprendizes um contexto em que os conceitos têm consequências e tornam o [[prior-knowledge|conhecimento prévio]] visível: os estudantes precisam notar o que o caso oferece, o que ele deixa ambíguo e quais princípios se aplicam. Na educação profissional, esse é o ponto. A educação jurídica usa casos e diálogo socrático para ensinar os estudantes a ler autoridade, distinguir teses decisórias e raciocinar a partir de precedentes. A [[business-education|educação empresarial]] usa casos para praticar análise sob incerteza, muitas vezes com uma decisão que não tem uma única resposta correta. A educação das profissões da saúde usa casos clínicos para ensaiar diagnóstico, manejo e comunicação antes que pacientes reais estejam em risco.

O mecanismo não é simplesmente "exemplos do mundo real". Um caso pode ser realista e ainda ensinar muito pouco se a discussão nunca pedir aos estudantes que discriminem, justifiquem ou comparem. Os desenhos mais fortes usam casos para criar um espaço de problema antes da explicação, que é o elo com a [[productive-failure]]: os estudantes tentam um caso, encontram os limites do seu modelo atual e então recebem instrução que aborda a lacuna. Casos contrastantes aguçam isso ainda mais. Quando dois casos diferem em uma característica que importa, os aprendizes conseguem ver a característica em vez da história superficial. O estudo existente de um curso de IA generativa de três semanas para 78 estudantes preparatórios de minorias étnicas usou [[teacher-role|modelagem docente]] com casos contrastantes para mover os estudantes da cópia eficiente em direção à cocriação crítica ([[scaffolding-critical-engagement-genai-minority-students]]). Esse é um desenho de comparação de casos, não um teste da aprendizagem baseada em casos em direito ou administração, mas mostra o mecanismo em uma sala de aula real.

Os casos também carregam uma dimensão social. Uma discussão de caso torna o raciocínio público: os estudantes propõem interpretações, ouvem alternativas e revisam. As perguntas do instrutor fazem o trabalho que um livro didático não consegue fazer. É por isso que substituir um caso por um resumo ou uma aula expositiva pode preservar o conteúdo perdendo a aprendizagem. É também por isso que uma IA que responde às perguntas do caso pelo estudante pode curto-circuitar a discussão mesmo quando suas respostas são corretas.

## O que a IA muda

A nova evidência se concentra em três usos: gerar casos, entregar casos e sintetizar a evidência.

**Gerar casos.** [[higashitsuji-chatgpt-case-creation-nursing-2025|Higashitsuji, Otsuka e Watanabe (2025)]] compararam a criação manual de casos com a criação assistida por ChatGPT por oito docentes de enfermagem. O tempo mediano de criação caiu de 106,0 para 71,0 minutos, uma diferença estatisticamente significativa, enquanto a carga percebida e a qualidade da discussão não mostraram mudança significativa. O estudo é um ensaio de viabilidade com nove estudantes e um cruzamento não randomizado cego, então sustenta uma economia de tempo plausível, não uma equivalência. A questão de design importante não é se um modelo consegue produzir um caso. É se o caso gerado preserva o raciocínio clínico que o instrutor pretendia, e se alguém o verifica antes que os estudantes o usem.

**Entregar casos.** [[trewren-ai-perioperative-case-based-learning-2026|Trewren e colegas (2026)]] construíram cinco casos perioperatórios, carregaram-nos em uma plataforma de LLM personalizada e fizeram com que quatro trainees de anestesia interrogassem os casos como avaliações de paciente. Ao longo de 547 pares de pergunta e resposta, 99,3% (543/547) foram julgados adequados e nenhum foi fabricado; as quatro falhas foram recusas de relatar informações que o caso continha. Isso é evidência de que um modelo ancorado consegue manter um caso coerente sob questionamento. Não é evidência de que os trainees aprenderam mais do que aprenderiam em uma discussão de caso convencional, e o estudo não comparou as duas coisas.

**Sintetizar a evidência.** [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025|Wei e colegas (2025)]] revisaram seis ensaios controlados randomizados de ABP e ABC apoiadas por IA na educação médica e odontológica. Quatro ensaios entraram na meta-análise de conhecimento, que relatou uma melhoria de 46% com baixa heterogeneidade; três produziram uma pontuação de satisfação agrupada de 0,7. O raciocínio clínico não pôde ser agrupado porque os ensaios usaram instrumentos diferentes. Apenas dois dos seis ensaios testaram ABC, e a revisão não analisou ABP e ABC separadamente. O resultado é encorajador para desenhos de casos e problemas apoiados por IA, mas não nos diz quais características do caso produziram o ganho.

As revisões em torno dela acrescentam contexto sem acrescentar uma estimativa limpa de ABC. [[hardie-genai-nursing-scoping-review-2026|Hardie e colegas (2026)]] encontraram a aprendizagem baseada em casos dentro do tema de simulação de uma revisão de enfermagem com 103 estudos, não como uma de suas quatro categorias nomeadas. [[lorteau-sarro-ai-legal-education-2025|Lorteau e Sarro (2025)]] descrevem a IA como complemento ao ensino socrático e às simulações jurídicas interativas, mas sua revisão de 82 trabalhos não analisa o método de casos como intervenção. [[csaszar-ai-management-education-2026|Csaszar e colegas (2026)]] explicitamente não discutem o ensino baseado em casos; suas únicas referências a casos são incidentais, e eles observam que alguns estudos de caso foram substituídos por simulações de negócios. A educação empresarial e a jurídica, portanto, fornecem a justificativa institucional para os casos, não a evidência de resultados. Desenhos adjacentes semelhantes a casos incluem [[ai-standardized-patient-scaffolding-medical-2026|pacientes padronizados com andaimes de LLM]] e a [[genai-medical-education-transformation-review-2026|revisão da educação médica]] que conta a aprendizagem baseada em casos entre suas categorias de aplicação.

## Projetar e facilitar casos com IA

- **Escreva o caso em torno de uma decisão ou de uma discriminação.** Um caso sem uma escolha consequente se torna uma leitura. Especifique o que os estudantes devem notar, decidir ou justificar, e então construa os fatos e as ambiguidades em torno desse alvo.
- **Verifique os casos gerados contra o raciocínio pretendido.** A IA pode produzir detalhes clínicos ou jurídicos fluentes que são estruturalmente errados. Faça um especialista da área revisar os fatos, as omissões e o caminho de raciocínio antes que o caso chegue aos estudantes.
- **Preserve a ambiguidade do caso.** Um caso gerado que resolve todas as tensões ensina reconhecimento, não julgamento. Mantenha as informações incompletas e as interpretações concorrentes que tornam a discussão necessária.
- **Use casos contrastantes quando o alvo é a discriminação.** Emparelhe casos que diferem na característica que os estudantes devem notar, e peça que expliquem a diferença em vez de simplesmente classificar cada um.
- **Proteja a discussão da entrega de respostas.** Se um tutor de IA estiver disponível durante o trabalho com o caso, restrinja-o a perguntas, dicas ou dramatização. Uma IA que fornece o diagnóstico ou a conclusão jurídica remove o trabalho cognitivo que o caso existe para criar.
- **Avalie o raciocínio, não a memorização do caso.** Peça uma justificativa, um diagnóstico diferencial, uma comparação ou um memorando de decisão. Um quiz sobre fatos do caso pode ser aprovado enquanto o raciocínio subjacente permanece ausente.
- **Trate a facilitação do instrutor como parte do design.** A sequência de perguntas, o momento da explicação e o tratamento de um desvio errado não são decoração. Eles determinam se o caso se torna uma falha produtiva ou uma confusão.

## Limites e lacunas de evidência

A evidência é fina de um modo específico. O estudo perioperatório testa se um modelo ancorado consegue responder a perguntas sobre cinco casos, não se o ensino baseado em casos melhora a aprendizagem. O estudo de enfermagem testa o tempo de criação de casos e a qualidade da discussão com nove estudantes. A meta-análise agrupa seis ensaios, dos quais apenas dois testaram ABC, e seu resultado de conhecimento mistura ABP e ABC. As revisões jurídica e empresarial descrevem usos e contextos institucionais; elas não isolam os efeitos do método de casos. O estudo de casos contrastantes é uma avaliação de curso, não uma comparação controlada de formatos de caso.

Há também um risco conceitual. Um caso pode ser memorável porque é vívido, não porque produziu compreensão. Uma discussão pode parecer produtiva porque os estudantes falaram, não porque raciocinaram. O campo precisa de desenhos que separem o caso da facilitação, o formato do conteúdo disciplinar e o engajamento imediato da transferência retardada. Até lá, a afirmação honesta é que casos são uma pedagogia profissional bem estabelecida com apoio plausível de IA, não que casos potencializados por IA tenham uma vantagem de aprendizagem demonstrada.

## Ideias equivocadas comuns

- **"A aprendizagem baseada em casos é só a aprendizagem baseada em problemas com uma história."** A ABP é investigação dirigida pelo estudante a partir de um problema mal estruturado. A ABC geralmente começa com um caso preparado e um alvo instrucional mais definido.
- **"Um caso realista ensina por si só."** O realismo fornece contexto. As perguntas, as comparações e as tarefas de justificação fornecem a aprendizagem.
- **"Casos gerados por IA estão prontos para uso."** Casos gerados podem ser fluentes, plausíveis e errados. Eles precisam de revisão especializada e de uma verificação do raciocínio que convidam.
- **"Se os estudantes gostaram da discussão, o caso funcionou."** Engajamento não é transferência. O resultado precisa ser medido em uma tarefa que os estudantes não conseguiam completar antes.

## Conceitos conectados

- [[problem-based-learning]]
- [[productive-failure]]
- [[inquiry-based-learning]]
- [[pedagogical-patterns]]
- [[simulation]]
- [[professional-training]]
- [[legal-education]]
- [[business-education]]
- [[medical-education]]
- [[nursing-education]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[assessment]]
- [[higher-ed]]

## Artigos conectados

- [[trewren-ai-perioperative-case-based-learning-2026]] — Um LLM ancorado sustentou cinco casos perioperatórios sem fabricar conteúdo
- [[higashitsuji-chatgpt-case-creation-nursing-2025]] — O ChatGPT reduziu o tempo de criação de casos de enfermagem sem diferença de qualidade medida
- [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025]] — Seis ECRs de ABP/ABC com IA; apenas dois testaram ABC
- [[scaffolding-critical-engagement-genai-minority-students]] — Modelagem docente com casos contrastantes em um curso de IA generativa
- [[ai-standardized-patient-scaffolding-medical-2026]] — Aprendizagem baseada em casos ao lado de pacientes virtuais e simulados
- [[genai-medical-education-transformation-review-2026]] — Aprendizagem baseada em casos e raciocínio clínico entre as categorias de aplicação da revisão
- [[hardie-genai-nursing-scoping-review-2026]] — Aprendizagem baseada em casos dentro do tema de simulação de uma revisão de enfermagem
- [[lorteau-sarro-ai-legal-education-2025]] — A IA complementa o ensino socrático e as simulações jurídicas
- [[csaszar-ai-management-education-2026]] — Estudos de caso e simulações na educação gerencial, sem uma análise do método de casos
