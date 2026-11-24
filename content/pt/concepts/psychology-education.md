---
title: Educação em psicologia
created: "2026-11-17T06:03:44-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [student-ai-interaction]
technology: [generative-ai]
assessment: [assessment-validity]
level: [higher ed, graduate]
confidence: medium
audience: [instructors, curriculum designers, faculty developers]
translation_of: concepts/psychology-education
source_updated: "2026-11-24T18:20:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [social-sciences-education, humanities-education, ai-literacy, assessment-validity, feedback, self-efficacy, student-ai-interaction]
connected_articles: [richmond-nicholls-genai-psych-feedback-ai-literacies, baudin-ai-generated-mcq-psychology-exams-2025, ai-tutor-statistical-programming-adoption-2026, akkurt-counselor-trainees-chatgpt-simulated-client-2025, armagan-bogatekin-ai-attitudes-psychology-trainees-2026, mental-health-literacy-students-llms-2026, reed-ai-literacy-ethical-judgment-scenarios-2026, critical-genai-use-predictors, hu-psychological-predictors-continued-chatgpt-use-2026, hawkins-feedback-literacy-ai-essay-writing, burke-ai-proliferation-college-students-replication-2026, integrating-generative-ai-in-psychology-courses]
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Educação em psicologia** — o ensino da psicologia como disciplina: a sequência introdutória e de métodos, o curso de graduação e a formação clínica e em aconselhamento que leva à prática. Ela tem a maior literatura sobre IA de qualquer disciplina nesta base, e a maior parte dessa literatura não estuda o currículo de psicologia. Os estudantes de psicologia são a amostra mais conveniente do [[higher-ed|ensino superior]]. Eles fornecem os respondentes para estudos genéricos de [[motivation|motivação]] e feedback. Um conjunto menor de estudos examina os cursos em si: o desenho da avaliação em uma unidade do segundo ano, um [[intelligent-tutoring|tutor de IA]] em um curso de estatística e a formação clínica onde a IA é ao mesmo tempo ferramenta e risco profissional. A distinção importa porque um achado de que estudantes de psicologia usam a [[generative-ai|IA generativa]] de tal maneira não é um achado sobre o ensino da psicologia.

## Perguntas para refletir

- Os estudantes de psicologia são a amostra mais fácil de recrutar no ensino superior, de modo que a maioria dos estudos sobre "estudantes e IA" são, na verdade, estudos sobre estudantes de psicologia. O que um achado de um pool de participantes poderia dizer sobre o seu próprio curso, e o que não poderia?
- Um banco de itens gerado pode ser confiável segundo padrões aceitáveis enquanto testa quase nada acima da memorização. O que importa mais para a nota que seus estudantes obtêm: que as notas sejam consistentes, ou que os itens meçam o que o diploma afirma?
- O estudo do R-Tutor instrui um modelo a guiar em vez de responder dentro de um curso de estatística. Se o tutor retém a resposta, o que ele está ensinando que um [[conversational-ai|chatbot]] que responde não está?
- Conselheiros em formação praticaram com um cliente simulado que era complacente, emocionalmente raso e culturalmente neutro. Qual desses três mais preocuparia você na primeira sessão real de um formando, e por quê?
- A formação clínica é onde uma ferramenta se torna uma afirmação profissional, não um auxílio de estudo: um sistema que recomenda um tratamento está fazendo um julgamento sobre uma pessoa. Onde você traçaria a linha entre os dois, e quem no seu programa deveria traçá-la?

## Introdução

A psicologia ocupa uma posição incomum nesta literatura. Ela fornece os métodos da disciplina, seus construtos e a maior parte de seus respondentes, e também ensina um assunto cujas habilidades centrais — desenhar um estudo, ler uma estatística, julgar evidências — são justamente aquelas que a IA generativa é mais frequentemente acusada de substituir por atalhos. Essa combinação faz da educação em psicologia tanto a disciplina mais bem documentada na literatura de IA quanto uma das menos estudadas como currículo.

Separar as duas coisas é todo o problema de IA da disciplina. O que se sabe sobre o ensino da psicologia em si é mais estreito do que o volume de pesquisa sugere: o desenho da avaliação na graduação, um tutor de IA na sequência de estatística, a formação clínica e em aconselhamento onde a IA chega como questão profissional, e a evidência de levantamentos sobre o que os estudantes de psicologia sabem e acreditam. Estudos que usam estudantes de psicologia como amostra de conveniência para uma pergunta sobre estudantes em geral não são evidência sobre a disciplina, e a diferença vale ser nomeada a cada vez.

## Por que a psicologia domina a literatura

Três condições explicam o volume. Os departamentos de psicologia mantêm pools de participantes, de modo que recrutar algumas centenas de graduandos para responder a um levantamento custa quase nada. A pesquisa sobre ensino e aprendizagem é bem estabelecida na disciplina, o que dá aos instrutores uma rota para publicar trabalho no nível do curso que a medicina e o direito encaminham principalmente pela acreditação. E os construtos que o campo estuda — motivação, autoeficácia, feedback, [[critical-thinking|pensamento crítico]] — são os mesmos construtos que a literatura de IA quer medir, o que faz da psicologia o lugar natural para desenvolver e validar instrumentos.

O resultado é uma literatura em que a disciplina é o cenário, e não o objeto. Um levantamento com 991 graduandos em cinco universidades, 300 deles estudantes de psicologia, diz como os estudantes em geral usam a IA; não diz se um diploma de psicologia deveria exigir um curso de estatística em que a ferramenta é proibida. Ambas as perguntas valem ser feitas, e a segunda é para que serve a distinção.

## A evidência no nível do curso

O estudo de curso mais claro é um [[assessment|desenho de avaliação]]. [[richmond-nicholls-genai-psych-feedback-ai-literacies|Richmond e Nicholls]] substituíram a [[peer-assessment|avaliação entre pares]] por ChatGPT em uma "Media Assignment" de psicologia do segundo ano, em que os estudantes traduzem um artigo publicado em um release de mídia e um vídeo para um público leigo, e o redesenho trata do que a tarefa pede, e não de se a ferramenta é permitida.

A geração de avaliação é a segunda vertente. [[baudin-ai-generated-mcq-psychology-exams-2025|Baudin]] fez o ChatGPT-4 escrever 80 itens de múltipla escolha para um curso de Psicologia Experimental e aplicou sobre eles todo o aparato psicométrico com 120 estudantes: consistência interna aceitável, teste-reteste moderado, 11.25% dos itens discriminando mal, e uma distribuição de Bloom de 73.75% de memorização contra 8.75% de análise ou avaliação. Os itens eram evidência confiável de que os estudantes conseguiam nomear coisas, e silentes sobre se conseguiam desenhar um estudo.

A estatística é a terceira, e a intervenção com melhor evidência. [[ai-tutor-statistical-programming-adoption-2026|Préau e colegas]] implantaram um "R-Tutor" construído sob medida dentro de um curso semestral de programação em R para graduandos de psicologia em Tübingen, em um [[longitudinal-research|desenho longitudinal]] pré-registrado, com o tutor instruído a guiar em vez de responder.

Um volume editado aborda a mesma questão curso a curso, e não estudo a estudo. [[integrating-generative-ai-in-psychology-courses|Integrar a IA generativa nos cursos de psicologia]] reúne vinte e um relatos da Society for the Teaching of Psychology, organizados pelo curso que um docente está prestes a lecionar: fundamentais e transversais, clínicos e de aconselhamento, e métodos de pesquisa com estatística. Seus capítulos são relatos de profissionais, não estudos, e a evidência é desigual. Mesmo assim, fornecem o que a literatura experimental daqui não consegue, a saber, desenhos que rodaram em turmas específicas. Três compromissos recorrem neles: escalonar o acesso para que os estudantes tenham com o que julgar a ferramenta, exigir verificação e torná-la visível, e tratar o julgamento do docente sobre quando não usar a ferramenta como o resultado pretendido.

## Formação clínica e em aconselhamento

A psicologia clínica é onde a IA entra como questão profissional, e não como auxílio de estudo. Os dois estudos aqui se dividem ao longo dessa linha: um sobre o que um cliente simulado faz com o formando, outro sobre o quanto os formandos diferem entre si.

[[akkurt-counselor-trainees-chatgpt-simulated-client-2025|Akkurt, Maurya e Brown]] usaram o GPT-4o como cliente simulado para conselheiros em formação. Nove transcrições e um grupo focal de quatro pessoas são evidência rarefeita, mas o padrão é específico: o [[simulation|simulador]] reduziu a ansiedade de desempenho e construiu confiança, enquanto o cliente concordava prontamente demais, não carregava nuance emocional e permanecia culturalmente neutro — removendo exatamente a resistência e as dinâmicas de identidade que a formação em aconselhamento existe para praticar.

[[armagan-bogatekin-ai-attitudes-psychology-trainees-2026|Armagan-Bogatekin]] modelou 286 estudantes de psicologia e formandos em psicoterapia em seis domínios e encontrou de três a quatro classes latentes em cada um. Não existe formando médio: ceticismo, ansiedade de aprendizagem, ansiedade profissional e preocupação com risco formam perfis separados, e os perfis diferem conforme a ferramenta seja um auxílio de feedback ou um recomendador de tratamento.

## O que os estudantes de psicologia sabem, acreditam e fazem

A evidência do lado do estudante é a maior parte da literatura e a menos específica da disciplina.

Conhecimento e julgamento: [[mental-health-literacy-students-llms-2026|Richter e colegas]] fizeram 150 estudantes de psicologia classificar 30 afirmações sobre saúde mental e os compararam com quatro LLMs em 80 execuções cada; [[reed-ai-literacy-ethical-judgment-scenarios-2026|Reed e colegas]] testaram se o [[ai-literacy|letramento em IA]] prediz o julgamento ético aplicado em 531 graduandos com seis vinhetas.

Disposições: [[critical-genai-use-predictors|Hefter, Paaßen e Berthold]] encontraram o uso crítico de IA generativa predito por conhecimento medido tanto por [[self-report-measures|autorrelato]] quanto por teste objetivo. A orientação epistêmica e os valores intelectuais carregaram o restante; [[hu-psychological-predictors-continued-chatgpt-use-2026|Hu]] encontrou o uso continuado mediado pela [[trust|confiança]] e pela [[self-efficacy|autoeficácia]] acadêmica, com a [[anxiety-and-stress|ansiedade em relação à IA]] enfraquecendo o primeiro elo; [[hawkins-feedback-literacy-ai-essay-writing|Hawkins e colegas]] encontraram o letramento em feedback como único preditor significativo da nota de redação (β = 0.46) em uma tarefa simulada de escrita assistida por IA.

Uso: [[burke-ai-proliferation-college-students-replication-2026|Burke e colegas]] pesquisaram 991 graduandos em cinco universidades e encontraram o uso universitário em 81%, com o estudo deslocando a escrita como tarefa mais comum, enquanto 30.2% dos estudantes que chamam o uso de IA de cola o usam mesmo assim.

Cada um desses estudos é sobre estudantes que por acaso são estudantes de psicologia. Essa é a vantagem da disciplina como local de pesquisa e sua fraqueza como literatura.

## A psicologia que a pesquisa toma emprestada

A pesquisa em IA na educação roda sobre um pequeno conjunto de teorias psicológicas que foram construídas muito antes dela. Nomeá-las importa, porque cada uma prediz algo diferente sobre se uma ferramenta ajuda.

A [[cognitive-offloading|dependência excessiva]] diz que uma ferramenta que remove o esforço remove a aprendizagem junto. O [[productive-failure|fracasso produtivo]] diz que a luta antes da resposta é onde a instrução acontece. Os [[scaffolding|andaimes]] dizem que a ajuda precisa ser programada e retirada, não simplesmente fornecida. Um estudo pode citar as três e ainda assim desenhar uma ferramenta que não satisfaz nenhuma delas, e é por isso que a teoria pertence à seção de métodos, e não à introdução.

Os enquadramentos que mais recorrem aqui são os de cognição individual: [[self-regulated-learning|aprendizagem autorregulada]] e [[metacognition|metacognição]], autoeficácia, [[self-determination-theory|teoria da autodeterminação]] para a motivação, e [[feedback|feedback]] por sua variante de [[feedback-literacy|letramento]]. Os estudos na seção acima são típicos do padrão: cada um toma um construto desta família, mede-o como o mecanismo e relata para que lado o caminho corre. Akkurt é a exceção, e a mais interessante: um desenho [[situated-learning|situado]] em que um formando ensaia uma prática em vez de adquirir uma proposição.

Dois limites valem ser enunciados. A teoria é geralmente importada como enquadramento e raramente testada contra uma rival, a fraqueza que o [[theory-development-aied|desenvolvimento de teoria em IA na educação]] documenta. E a unidade individual de análise é contestada: relatos [[sociocultural-learning|socioculturais]] e de [[activity-theory-aied|teoria da atividade]], com a [[distributed-cognition|cognição distribuída]], localizam a aprendizagem na sala, e não na cabeça, o que muda o que um chatbot está fazendo. As [[learning-theories|teorias da aprendizagem]] guardam o mapa e a [[cognitive-psychology|psicologia cognitiva]] o maquinário que a maioria desses estudos supõe.

Quando um artigo diz "andaimes" ou "pensamento crítico", pergunte qual versão de qual teoria ele quer dizer: a palavra faz um trabalho diferente em cada uma.

## Implicações para instrutores de psicologia

- **Decida para que serve o diploma antes de decidir o que a IA pode fazer.** Um graduado em psicologia precisa avaliar evidências, desenhar um estudo e interpretar uma estatística. Se esses são os desfechos, a pergunta de avaliação é quais tarefas ainda podem fornecer evidência deles.
- **Use o curso de estatística como caso de teste.** Ele tem a evidência de intervenção mais forte da disciplina (R-Tutor) e a tentação mais clara de usar a IA como calculadora em vez de tutora.
- **Audite bancos de itens gerados no nível de Bloom, não no nível de confiabilidade.** O banco de Baudin era confiável e majoritariamente memorização.
- **Na formação clínica, ensine a ferramenta e o limite juntos.** Os perfis dos formandos diferem, e a ferramenta de recomendação de tratamento levanta uma questão de identidade profissional que nenhum treinamento de capacidade responde.
- **Não generalize de amostras de pool de participantes para o seu próprio curso.** Os achados genéricos descrevem estudantes; o seu curso é uma decisão de desenho.

## Ideias equivocadas comuns

- **"Estudantes de psicologia são representativos dos estudantes em geral."** Eles são convenientes, não representativos, e os estudos que os usam geralmente dizem isso.
- **"A IA na educação em psicologia trata principalmente de ferramentas clínicas."** A maior parte dos estudos diz respeito à [[writing-education|escrita]], ao feedback e aos hábitos de estudo; as ferramentas clínicas são uma vertente pequena, recente e distinta.
- **"Itens gerados confiáveis são itens utilizáveis."** Confiabilidade sem cobertura de desfechos de ordem superior produz um teste bem medido da coisa errada.
- **"Formandos são a favor ou contra a IA."** A evidência de classes latentes diz quatro ou mais perfis por domínio, diferindo por ferramenta.
