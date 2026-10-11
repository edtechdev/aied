---
title: "Como redesenho a avaliação para que uma nota ainda me diga algo defensável sobre o que o estudante sabe ou consegue fazer?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-02T08:21:34-04:00"
connected_faqs: [should-we-use-ai-detectors, reduce-ai-cheating, writing-instruction-ai-best-practices, course-ai-policy]
weight: 84
foundations: [academic-integrity]
assessment: [assessment, assessment-validity, authentic-assessment]
translation_of: faqs/redesign-assessment-ai-era
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

# Como redesenho a avaliação para que uma nota ainda me diga algo defensável sobre o que o estudante sabe ou consegue fazer?

**Comece declarando explicitamente que capacidade a nota deve representar.** Você está avaliando o que um estudante consegue fazer de forma independente, o que ele consegue realizar de forma apropriada com a IA, a capacidade dele de avaliar e dirigir a IA, ou alguma combinação dessas coisas? A [[assessment-validity|Validade da Avaliação]] da base de conhecimento trata isso como um problema de validade: um artefato polido já não é evidência suficiente de que o estudante possui a capacidade aparentemente demonstrada por aquele artefato. Esta é a metade do lado da avaliação do mesmo argumento; a metade do lado da aplicação está em [[reduce-ai-cheating]], e o enquadramento geral de validade passa por [[evaluating-ai-interventions-methods]].

## O risco de substituição de constructo

O artigo [[authentic-products-authenticated-processes-2026|From Authentic Products to Authenticated Processes]] chama de **substituição de constructo** o risco resultante: o avaliador atribui ao estudante um produto mediado pela IA e mede inadvertidamente as capacidades da ferramenta, e não as do estudante. Sua resposta recomendada é tornar visíveis o raciocínio, o julgamento, a verificação, a iteração e a responsabilidade do estudante por meio de abordagens como entregas escalonadas, racionalizações de decisão anotadas, registros de processo, declarações de uso do feedback, defesas orais e outras formas de evidência de processo autenticada.

[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed e Temimi]] reenquadram o mesmo problema como um de **informação imperfeita**, e não de moralidade: o estudante sabe como o trabalho foi produzido e a instituição vê apenas o artefato somado a rastros parciais, então a questão de desenho passa a ser *qual resposta do estudante cada ambiente de avaliação torna mais atraente*. O modelo de região de resposta deles compara três escolhas — nenhum uso de IA, uso [[ai-use-disclosure|declarado]] e uso oculto — e mostra que regras, monitoramento, declaração e redesenho operam por canais diferentes e só têm sucesso quando a resposta mais atraente se alinha com o propósito da avaliação. Dois resultados repercutem diretamente na arquitetura. A dissuasão passa pela **discriminação** de um detector entre uso oculto e trabalho legítimo, e não pela sua taxa bruta de captura, então, quando os falsos positivos sobem mais rápido do que os verdadeiros positivos, um monitoramento mais forte pode tornar a ocultação relativamente *mais* atraente. E o redesenho move os estudantes em direção ao uso responsável apenas quando a rubrica realmente recompensa a evidência de processo; caso contrário, ele permanece cosmético. A regra prática deles é desenhar para o estudante mais tentado a ocultar, e não para o mais consciencioso.

## Uma arquitetura de avaliação forte

Na prática, uma arquitetura de avaliação forte costuma combinar uma **tarefa autêntica habilitada por IA** com alguma forma de **verificação independente**. Dependendo da disciplina, isso pode incluir uma explicação oral breve, uma aplicação em sala de aula, uma demonstração ao vivo, um [[eportfolio|portfólio]] anotado, um componente curto sem assistência, ou perguntas sobre as decisões-chave.

O conceito de [[authentic-assessment|Avaliação Autêntica]] também enfatiza trabalho intelectual realista, desafio cognitivo, agência do estudante, feedback e autenticidade social ou profissional — e não meramente tornar as tarefas convencionais mais difíceis para a IA completar. Os componentes orais e ao vivo precisam de atenção cuidadosa à ansiedade, às acomodações por deficiência, às diferenças linguísticas e ao viés do avaliador.

Uma arquitetura popular sem vigilância — a **variação de tarefa por estudante**, em que cada examinando recebe uma versão superficialmente distinta, mas equivalente em constructo, da mesma tarefa, de modo que as respostas não possam ser utilmente compartilhadas — é condicional à capacidade, e não gratuita. O [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]], um [[benchmark]] de 600 variantes geradas ao longo de 60 células de condição, descobriu que os modelos de fronteira se agrupam apertadamente em uma pontuação conjunta de integridade (0,81–0,88), enquanto as referências não fronteira colapsam para 0,50–0,55, e que nenhuma estratégia única de [[prompt-engineering|prompting]] otimiza de uma só vez a diversidade de superfície e a equivalência de constructo. A variação em escala não pode ser presumida a partir do prompting isolado, então uma instituição deveria validar seu próprio par modelo–prompt antes de tratar a garantia como real.

O redesenho também raramente funciona tarefa por tarefa. Em um estudo [[qualitative-research|qualitativo]] com 12 acadêmicos e 17 estudantes de uma grande universidade australiana, [[nicola-richmond-programwide-assessment-genai-2025|Nicola-Richmond et al.]] descobriram que ambos os grupos concordavam que a avaliação precisa mudar, mas enfatizaram o atrito sistêmico — longos tempos de preparação, restrições de credenciamento para turmas grandes, carga de trabalho e custo — e concluíram que o redesenho *exige uma aldeia*: uma equipe de todo o programa combinando experiência em desenho de avaliação, [[generative-ai|IA generativa]], conhecimento da disciplina, indústria e evidência, com pontos de alfabetização em IA generativa e de garantia da aprendizagem colocados estrategicamente ao longo de uma qualificação. O método em nível de tarefa que torna isso tratável é o que [[mccorkle-aligned-genai-course-policy-2025|McCorkle]] documenta: inventarie cada passo que um estudante realiza, pergunte de cada passo "o que, especificamente, estou avaliando?", e derive a fronteira da IA a partir da resposta — que é também como as expectativas por trás de [[reduce-ai-cheating]] se tornam explícitas e aplicáveis.

O propósito importa tanto quanto a mecânica. [[ai-agents-joyful-assessment-third-space-2026|El Khoury e Ma]] argumentam que uma reforma organizada apenas em torno de prevenir a má conduta é defensiva demais e propõem a **avaliação alegre** — segura, emocionalmente responsiva, fortalecedora e apoiadora da [[agency|agência]] do estudante —, na qual a integridade é uma *consequência* do bom desenho, e não seu ponto de partida. O exemplo trabalhado deles usa um [[agentic-ai|agente de IA]] construído pelo instrutor para ensaiar os estudantes antes do julgamento e para produzir um relatório de evidência alinhado à rubrica, mas a divisão do trabalho é declarada com clareza: a IA organiza a evidência, o instrutor a interpreta.
