---
title: Educação secundária
created: "2026-11-15T00:10:00-05:00"
updated: "2026-11-15T06:35:09-05:00"
type: concept
pedagogy: [help-seeking, student-engagement, self-regulated-learning, metacognition]
technology: [generative-ai, intelligent-tutoring, llm]
level: [secondary, middle school, k 12]
confidence: medium
translation_of: concepts/secondary-education
source_updated: "2026-11-15T06:35:09-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [k-12, primary-education, undergraduate-education, intelligent-tutoring, academic-integrity, ai-detection, automated-assessment, assessment-validity, ai-literacy, help-seeking]
connected_articles: [one-click-away-khanmigo-two-year-school-experiment-2026, ai-tutoring-micro-rct-gcse-science-2026, leite-its-k12-meta-analysis-2025, ai-supported-instruction-stem-meta-analysis-2026, genai-learning-motivation-meta-analysis-2026, kreijkes-llm-note-taking-reading-comprehension-2026, jansen-argumentative-writing-feedback-receptivity-2026, chang-shared-epistemic-agency-gai-scientific-writing-2026, clerc-ai-literacy-workshop-llm-regulation-2026, cuenca-rodriguez-genai-use-caution-trajectories-2026, schaller-ai-text-detection-authentic-writing-2026, chan-rethinking-aigiarism-secondary-integrity-2026, ai-marking-accuracy-gcse-physics-2026, porcaro-ai-grading-benchmark-2026, wu-genai-scientific-literacy-china-2026, student-motivation-need-satisfaction-genai-sdt-2026, perez-montesdeoca-genai-secondary-systematic-review-2026, wu-genai-secondary-innovation-digital-literacy-2026, zhang-ai-learning-tools-tpb-high-school-2026, schicchi-high-school-genai-attitudes-scale-2026, torres-peralta-perceived-learning-engagement-homework-2026, cho-chatgpt-high-school-gpa-2025]
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Síntese:** A educação secundária é a faixa em que o uso de [[generative-ai|IA generativa]] é comum e os [[learning-gains|ganhos de aprendizagem]] medidos são menores que as alegações feitas a seu favor. Um ensaio de dois anos em escolas comuns de ensino fundamental II produziu cerca de 0,06–0,08 DP por ano, e a [[meta-analysis-systematic-review|meta-análise]] de [[intelligent-tutoring|tutoria inteligente]] K-12 cerca de g = 0,27, porque o [[student-engagement|engajamento]] e a [[help-seeking|busca de ajuda]] limitam o efeito, e não a capacidade do modelo. Os estudantes preferem a ferramenta que faz mais do trabalho cognitivo, e os [[ai-detection|detectores]] separam redações inteiras, mas não frases. A evidência vai da revisão para exames, passando pela [[writing-education|escrita]] e pela autoria, até a correção, a detecção e os anos do ensino fundamental II em que o uso ultrapassa o ceticismo.

## Perguntas para refletir

- Um tutor está a um clique de distância, mas o estudante mediano pediu ajuda a ele em 17% das sessões que continham um erro. O que torna pedir mais barato que pular na sua turma?
- Os estudantes preferiram o [[conversational-ai|chatbot]] a fazer anotações e aprenderam menos com ele. Como você detectaria essa armadilha antes que a prova o faça?
- Detectores alcançam F1 de 0,96 em redações inteiras, 0,88 em frases, e perdem um terço de seu recall após uma reescrita. Que política de integridade sobrevive a isso?
- Quase todo ensaio na educação secundária dura de quatro a doze semanas sobre uma prova de unidade. O que justificaria uma adoção departamental de um ano?
- O uso relatado sobe dos 12 aos 17 anos enquanto a [[trust|confiança]] na saída permanece estável. Onde, do 6º ao 9º ano, você ensinaria verificação?

## Introdução

A educação secundária abrange aproximadamente dos 11 aos 18 anos — ensino fundamental II e, depois, ensino médio — e três características do contexto moldam o que a IA pode fazer ali. A frequência é obrigatória, os professores são especialistas em disciplinas que podem ver 150 estudantes por semana, e as [[assessment|avaliações]] consequenciais são externas: GCSEs, [[summative-assessment|exames]] nacionais e PISA aos 15 anos.

Esses mesmos estudantes adotam mais rápido. Na Suíça, 84% dos jovens de 14 a 19 anos relatam uso regular de IA generativa, uma proporção maior que qualquer faixa etária adulta. Uso quase universal, exames externos e um adulto responsável por várias turmas explicam por que a literatura se concentra em revisão, correção, lição de casa e integridade, e não no redesenho do [[curriculum-design|currículo]].

## O que a pesquisa mede

- **Os ganhos de tutoria inteligente são modestos e encolhem com a distância.** Dezoito experimentos dos EUA sobre 11 sistemas agregaram g = 0,271, quase idênticos nos anos iniciais (0,266) e no ensino fundamental II (0,256). Os efeitos caíram para 0,146 onde escolas rurais foram incluídas e para um 0,110 não significativo além de seis meses; resultados de fim de ano (0,155) foram um terço dos pós-testes imediatos (0,460) ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).

- **Revisões de STEM relatam efeitos maiores sob controle de qualidade mais fraco.** Trinta e cinco estudos experimentais e quase experimentais agregaram g = 0,670, com o ensino médio em 1,099 e o fundamental II em 0,392. Os autores não aplicaram nenhum instrumento formal de avaliação de qualidade, e a heterogeneidade de efeitos fixos alcançou I² = 82,98% ([[ai-supported-instruction-stem-meta-analysis-2026|Doğan et al., 2026]]).

- **Os ganhos de [[motivation|motivação]] são menores aqui que na universidade.** Entre 42 estudos controlados (56 tamanhos de efeito, 6.059 estudantes), o efeito agregado de motivação foi g = 0,764, mas os estudos da educação secundária tiveram média de 0,360 contra 0,886 no [[higher-ed|ensino superior]], com I² = 93,7% ([[genai-learning-motivation-meta-analysis-2026|Fang et al., 2026]]).

- **Um ensaio típico é curto e usa um teste construído localmente.** Uma avaliação de ciências do GCSE randomizou 929 estudantes em três disciplinas, reteve 644 no pós-teste e relatou g = 0,33 em um teste de 35 pontos alinhado ao currículo que seus autores chamam de provisório ([[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al., 2026]]).

## Tutoria, revisão e o problema do engajamento

- **Acesso não é uso.** Em 18 escolas de ensino fundamental II do Tennessee, o Khanmigo elevou o desempenho em matemática em 0,06–0,08 DP por ano a cerca de \$15 por estudante, perto do ganho da mesma prática da Khan Academy sem IA. Noventa e seis por cento dos estudantes o experimentaram, mas o estudante mediano trocou mensagens com ele em 17% das sessões que continham um erro ([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos e Low, 2026]]).

- **Uma pessoa na sala muda a experiência da dificuldade.** Entre 149 alunos do sixth form trabalhando acima do nível curricular, o estresse foi relatado por 32,0% dos que buscavam na web aberta, 19,2% dos usuários de tutor GenAI e 5,8% dos que tinham um tutor humano. Nenhum resultado de aprendizagem foi medido ([[ennion-human-tutoring-genai-tutoring-search-2026|Ennion e McLellan, 2026]]).

- **O apoio sensível ao afeto pode elevar a [[anxiety-and-stress|ansiedade]] que visa.** Em duas turmas de [[chemistry-education|química]] do 9º ano seguindo a mesma sequência de laboratório de 16 semanas, a ansiedade subiu com o [[feedback]] emocional de IA (F = 4,60, p = 0,035) e permaneceu estável apenas com o professor. Os estudantes não conseguiam dizer se prevaleciam os conselhos calmantes do sistema ou o procedimento do professor ([[liu-chemistry-lab-emotional-feedback-2026|Liu, Li e Zhang, 2026]]).

## Escrita, leitura e autoria

- **Os estudantes preferem a atividade que faz o trabalho por eles.** Em sete escolas inglesas, 405 alunos do Year 10 leram duas passagens de história e foram testados três dias depois, sem consulta. Fazer anotações superou o uso do chatbot em cerca de 0,5 DP na retenção e 0,4 na compreensão, mas os estudantes avaliaram o chatbot como mais fácil e mais agradável ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).

- **O feedback muda a escrita apenas para estudantes dispostos a agir sobre ele.** Cada um de 1.507 estudantes da educação secundária recebeu uma mensagem padronizada e dez minutos para revisar; o engajamento comportamental e as atitudes instrumentais moveram o desempenho do percentil 46 para o 54, enquanto a [[technology-acceptance-model|utilidade percebida]] não mediou nada ([[jansen-argumentative-writing-feedback-receptivity-2026|Jansen et al., 2026]]).

- **Um assistente com restrições pode manter os estudantes pensando.** Em uma unidade bilíngue sobre fotossíntese, 122 alunos do 7º ano produziram 6.788 turnos com um assistente instruído a reter respostas; 59% alcançaram agência epistêmica compartilhada, e ele não deu uma resposta direta em nenhum dos 1.049 turnos auditados. Cerca de 20% das interações envolveram copiar texto ou pescar uma resposta ([[chang-shared-epistemic-agency-gai-scientific-writing-2026|Chang et al., 2026]]).

## Avaliação, integridade e pressão de exames

- **A concordância de correção pode ser alta e ainda assim enviesada.** Um corretor comercial de [[llm]] igualou as notas de [[physics-education|Física]] do GCSE da AQA com κ ponderado quadraticamente de 0,885 em 71 itens controversos, mas atribuiu notas 0,30 ponto acima, em média, e 6 pontos acima em uma questão ([[ai-marking-accuracy-gcse-physics-2026|Bozdag e Qiu, 2026]]).

- **Um kappa não mostra se um corretor pode ser burlado.** Entre 22 modelos com prompts, 14 elevaram uma nota em mais de 5% da escala quando a resposta carregava um bilhete, um deles em 83,2%, e descrever o estudante como forte elevou a nota em 28 de 66 pares modelo-tarefa ([[porcaro-ai-grading-benchmark-2026|Porcaro, 2026]]).

- **A detecção localiza redações, não frases.** Com registros de digitação e da área de transferência de 2.429 adolescentes alemães de 15 anos, classificadores separaram texto de IA de texto humano com macro-F1 de 0,96, mas o F1 por frase caiu para 0,88 e o recall de IA caiu de 0,92 para 0,60 após uma reescrita no estilo do estudante ([[schaller-ai-text-detection-authentic-writing-2026|Schaller et al., 2026]]).

- **Os estudantes raciocinam sobre integridade de forma condicional.** Entre 133 estudantes de Hong Kong de 14 a 16 anos, a aceitabilidade dependia da finalidade de uso (62,4%), do impacto na aprendizagem (54,1%) e da intenção (51,9%), não do uso de IA em si ([[chan-rethinking-aigiarism-secondary-integrity-2026|Chan, 2026]]).

## O desencontro adoção–evidência e o redesenho da avaliação

O uso neste nível é quase universal; a evidência é majoritariamente uma descrição dele. [[perez-montesdeoca-genai-secondary-systematic-review-2026|Pérez-Montesdeoca et al. (2026)]] sintetizaram 33 estudos: 26 descreveram como a tecnologia era usada contra 7 que examinaram mudança no estudante, e apenas 21 coletaram dados originais de sala de aula. Quase todos foram iniciados por professores e conduzidos em isolamento, que é o padrão que o número de 84% de adoção esconde — professores individuais experimentando, não departamentos redesenhando.

O que a revisão de fato estabelece é condicional. O feedback foi a aplicação mais forte, com feedback de vocabulário sob medida quase dobrando as notas em um estudo incluído, enquanto a delegação total estreitou a aprendizagem e comparar ou rejeitar a saída a aprofundou. A acurácia acompanhou a dificuldade da tarefa, e não a disciplina: BingChat e Bard alcançaram 92,11% em perguntas básicas de biologia, toda ferramenta caiu abaixo de 20% em itens de ordem superior, e a correção automatizada alcançou 50,8% de concordância com avaliadores humanos. O trabalho com surveys aponta para profundidade, e não dosagem, já que [[wu-genai-secondary-innovation-digital-literacy-2026|Wu e Zhang (2025)]] encontraram a profundidade de uso acompanhando a capacidade de inovação autoavaliada enquanto a frequência não, em um design transversal em que os caminhos reafirmam as correlações.

A adoção segue a intenção; a ansiedade age depois. [[zhang-ai-learning-tools-tpb-high-school-2026|Zhang e An (2026)]] encontraram a [[anxiety-and-stress|ansiedade em relação à IA]] não relacionada à intenção (β = 0,056, p = 0,123), mas negativa para todos os três comportamentos, mais fortemente aplicar a saída (β = −0,247), em um modelo em que a utilidade liderou e as expectativas dos adultos superaram a capacidade. A medição também é de nível piloto: [[schicchi-high-school-genai-attitudes-scale-2026|Schicchi e Taibi (2026)]] retiveram três fatores de uma escala de atitudes de 19 itens em 93 estudantes, sem modelo confirmatório.

É por isso que a questão da avaliação se torna o que um produto concluído ainda certifica. [[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]] encontraram a aprendizagem percebida quase não relacionada a um índice de engajamento de ler, modificar e acrescentar à saída (correlação agregada de 0,052), e [[cho-chatgpt-high-school-gpa-2025|Cho (2025)]] revisou associações de GPA de 0,31 em escrita e 0,18 em matemática que são majoritariamente comparações entre usuários e não usuários. Colete o prompt, a resposta-rascunho e as revisões, e avalie o processo, não a página.

## Ensino fundamental II e início da adolescência

- **O uso se consolida antes do ceticismo.** Entre 1.598 estudantes de 12 a 25 anos, o uso médio subiu de 1,24 para 1,77 em uma escala de 0 a 4 entre os 12 e os 17 anos, e o número de atividades usadas intensamente subiu de 1,76 para 3,48, enquanto a confiabilidade percebida não mudou ([[cuenca-rodriguez-genai-use-caution-trajectories-2026|Cuenca-Rodríguez et al., 2026]]).

- **Um workshop de duas horas muda comportamento que autorrelatos não captam.** Entre 116 estudantes franceses do 8º e 9º anos, os que participaram aceitaram prompts subespecificados com menos frequência (51,5% vs. 66,7%) e fizeram uma pergunta de acompanhamento após uma resposta fraca em 59,2% das vezes contra 27,9%; seus autorrelatos de letramento em IA não predisseram nenhum dos dois ([[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc et al., 2026]]).

- **A finalidade de uso pesa mais que a frequência.** Entre 12.191 adolescentes de 15 anos em quatro regiões da China, deslocar-se para uso orientado à aprendizagem valeu 5,8 pontos no PISA com frequência fixa, enquanto deslocar-se para resumir e redigir custou 6,6 ([[wu-genai-scientific-literacy-china-2026|Wu et al., 2026]]).

- **Ganhos de motivação no início da adolescência carregam um custo relacional.** Em 2.464 estudantes alemães do 7º e 8º anos, o ChatGPT dentro da aprendizagem baseada em competências esteve associado a maior satisfação de autonomia e competência, mas menor pertencimento ([[student-motivation-need-satisfaction-genai-sdt-2026|Schweder et al., 2026]]).

## Conexões

A educação secundária se situa entre a [[primary-education|educação primária]] e a [[undergraduate-education|graduação]], e compartilha as preocupações do [[k-12]] com [[teacher-role|capacidade docente]] e [[equity-in-ai-education|equidade]]. O que a distingue é a combinação de exames externos e ensino por especialistas em disciplinas, que empurra a IA para revisão, correção e apoio ao trabalho de curso. Isso torna a [[assessment-validity|validade]] e a [[automated-assessment|correção automatizada]] mais centrais aqui que nos anos da educação primária, onde a [[developmental-psychology|adequação desenvolvimental]] domina. O outro fio distintivo é a [[self-regulated-learning|aprendizagem autorregulada]]: os adolescentes recebem a ferramenta antes de receberem o julgamento para usá-la, de modo que [[metacognition|metacognição]] e [[cognitive-offloading|offloading]] decidem se um ganho aparece.

## Implicações para a prática

**Para professores**

- Coloque o tutor onde o erro acontece. O número de 17% é um problema de design, não um déficit do estudante: exija uma pergunta ou explicação antes do próximo problema, e verifique a troca, não o login.
- Sequencie as ferramentas de escrita em vez de apresentá-las juntas: consulte, feche o chatbot, depois escreva. Um quarto dos estudantes copiou quando ambos estavam abertos ao mesmo tempo.
- Decida antes da aula qual conselho prevalece quando um sistema sensível ao afeto entra em conflito com seu procedimento, e diga aos estudantes.

**Para líderes escolares**

- Orce a partir do uso realizado. Uma licença de \$15 não é um programa; o efeito depende de agendamento, [[prompt-engineering|prompts]] do professor e monitoramento do progresso.
- Fixe expectativas em 0,06–0,08 DP por ano para tutoria em salas de aula comuns e cerca de 0,27 para tutoria inteligente. Não prometa fechamento de lacunas com nenhuma das duas.
- Mantenha a saída de detectores fora de conclusões de má conduta. Exija rascunhos, histórico de versões ou [[oral-assessment|defesa oral]], porque notas de texto inteiro mudam com uma reescrita.

**Para pesquisadores**

- Relate a detecção em nível de frase e também de texto, e relate os resultados das sondas ao lado das estatísticas de concordância.
- Meça para que os estudantes usaram a ferramenta, não apenas com que frequência. A finalidade separou uma lacuna de 12 pontos no PISA com frequência igual.
- Teste a durabilidade além de quatro semanas, com resultados de fim de ano ou externos. Pós-testes imediatos superestimam os efeitos de tutoria por um fator de aproximadamente três.

## Ideias equivocadas comuns

- **"Um tutor de IA ensina sempre que os estudantes têm acesso."** Noventa e seis por cento dos estudantes experimentaram o Khanmigo; o estudante mediano pediu ajuda a ele em 17% das sessões em que ocorreu um erro. Disponibilidade e dosagem são variáveis diferentes.

- **"Alta concordância com examinadores significa que um corretor é confiável."** Quatorze de 22 modelos puderam ser movidos em mais de 5% da escala com um bilhete na resposta, e um rótulo sobre o estudante deslocou as notas para cima em 28 de 66 pares modelo-tarefa.

- **"A detecção pode dizer quais frases a IA escreveu."** O F1 por frase caiu para 0,88, o recall caiu para 0,60 após uma reescrita no estilo do estudante, e texto escrito após uso de chatbot sem material copiado foi lido como humano em 94,6% dos casos.

- **"O [[ai-literacy|letramento em IA]] crítico pode esperar até a universidade."** O uso sobe a cada ano dos 12 aos 17 enquanto a confiabilidade percebida permanece estável, e um workshop de duas horas no 8º e 9º anos mudou o comportamento de prompting e de acompanhamento dois dias depois.
