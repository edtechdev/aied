---
title: "Correção automatizada de redações"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, llm, prompt-engineering]
assessment: [assessment, automated-assessment]
discipline: [writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/automated-essay-scoring
source_updated: "2026-10-26T10:25:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **A correção automatizada de redações (AES, do inglês *Automated Essay Scoring*)** — o uso de IA para avaliar e pontuar redações escritas, abrangendo abordagens estatísticas tradicionais, modelos de linguagem ajustados e estratégias de prompting baseadas em [[llm|LLM]] cada vez mais acessíveis. A [[research-methods-aied|pesquisa]] sobre AES nesta base de conhecimento cobre precisão das notas, justiça e viés, validade psicométrica e [[accessibility|acessibilidade]] prática para educadores.

## Perguntas para considerar

- A correção automatizada de redações passou dos modelos estatísticos tradicionais para o prompting baseado em LLM. Uma tensão central nesta página é entre precisão e acessibilidade — modelos ajustados pontuam bem, mas são impraticáveis para a maioria dos educadores. Qual você priorizaria no seu próprio contexto, e por quê?
- Uma descoberta importante é que simplesmente incluir redações exemplares no prompt aproxima a concordância LLM-humano da confiabilidade entre humanos — e que um modelo mais barato pode igualar um mais caro. O que isso sugere sobre quanto da qualidade da AES está no modelo e quanto está em como ele é instruído pelo prompt?
- A página alerta que a pontuação por IA pode subestimar sistematicamente estudantes de origens linguisticamente diversas. Antes de ler, se você visse uma IA dar uma nota mais baixa para a redação de alguém que não fala a língua nativamente, você teria assumido que era um "problema de viés" ou apenas "a nota"? O que mudaria a sua resposta?
- Uma abordagem autorreferencial avalia quem escreve em L2 comparando sua escrita com seu próprio trabalho anterior, em vez de com normas de falantes nativos. Como a escolha da linha de base de comparação muda o significado de uma nota — e quais estudantes ela poderia tratar com mais justiça?
- A AES se cruza com a avaliação formativa quando usada para feedback em vez de nota. Quando o retorno de uma máquina sobre uma redação seria genuinamente útil para quem está desenvolvendo a escrita, e quando ele poderia achatar os tipos de feedback [[qualitative-research|qualitativo]] que uma pessoa editora daria?

## Introdução

A correção automatizada de redações tem uma longa história na tecnologia educacional, dos primeiros modelos estatísticos às abordagens modernas baseadas em LLM, que conseguem avaliar redações de forma holística sem grandes conjuntos de dados pré-pontuados. A tensão central na pesquisa sobre AES é entre precisão e acessibilidade — embora modelos ajustados alcancem resultados sólidos, eles são intensivos em recursos e impraticáveis para a maioria dos educadores.

- **[[zhang-races-consistent-essay-scoring-llms-2026|Zhang et al.]]** RACES usa alinhamento por recompensa para tornar a pontuação de redações com LLM ao mesmo tempo precisa e consistente, enfrentando uma preocupação central de validade da AES.

[[xu-recentering-humans-ai-assisted-writing-scoring-2026|Xu, Lu e Abdi (2026)]] revisam doze estudos que comparam a pontuação de escrita acadêmica em EFL por IA e por humanos e relatam alinhamento moderado no conjunto, mais forte nos atributos linguísticos de superfície e mais fraco em organização, coerência e desenvolvimento do argumento, com a justiça raramente examinada.

Na escrita de resposta a texto nos anos finais do ensino fundamental, [[correnti-erevise-validity-argument-formative-assessment-2026|Correnti et al. (2026)]] constatam que o feedback automatizado sobre o uso de evidências pelos estudantes melhorou as pontuações de atributos, e que a qualidade da revisão dependeu de os professores levarem o feedback para a discussão, e não do sistema sozinho.

## Temas centrais da pesquisa

**A AES baseada em prompting** surgiu como a abordagem mais acessível. O **[[choi-anchor-aes-prompting-2025|estudo de prompting com âncoras de Choi et al.]]** mostra que incluir redações exemplares nos prompts aproxima a concordância LLM-humano da confiabilidade entre humanos, com o GPT-4o mini alcançando resultados comparáveis ao GPT-4o a custo menor. Isso se conecta à pesquisa mais ampla sobre [[prompt-engineering|engenharia de prompts]] e torna a AES viável para uso por [[teacher-role|professores]].

**A pontuação psicométrica e por traços** vai além das notas holísticas. O **[[psyscore-essay-scoring-zpd-feedback|PsyScore]]** oferece um framework psicometricamente consciente para pontuação adaptativa por traços com feedback fundamentado na [[sociocultural-learning|ZDP]]. O **[[icle-plus-plus-essay-scoring|ICLE++]]** modela traços de granularidade fina para a pontuação holística de redações, avançando a precisão da avaliação automatizada.
- **A pontuação de traços no nível da dimensão é limitada pelos dados por trás de cada dimensão.** [[automated-essay-scoring-critical-thinking-physics-2026|Firdausi et al. (2026)]] treinaram um classificador por dimensão do framework de pensamento crítico FRISCO de Ennis sobre 106 redações de física de alunos do décimo primeiro ano na Indonésia (83 para treino, 23 para teste, com três professores avaliadores concordando entre kappa 0,78–0,84 em todas as dimensões). A concordância se concentrou na expressão e não no raciocínio: o kappa quadrático ponderado chegou a 0,763 para Clareza e 0,728 para Situação, mas apenas 0,374 para Foco, 0,332 para Razão e 0,227 para Inferência. O sinal ordinal foi fabricado em vez de observado — redações sintéticas de nível 1 (geração por template, degradação para 20–40% do comprimento original, remoção de palavras-chave) mais paráfrase por LLM elevaram o Foco em +0,346 kappa a partir de uma linha de base de 0,028 — e uma configuração alcançou 0,652 de acurácia com kappa próxima de zero ou negativa, de modo que a acurácia não é um critério de seleção utilizável na AES ordinal.

**Viés e justiça** são uma preocupação crítica. **[[ai-scoring-language-bias-physics|Feser e Tschisgale]]** descobriram que a pontuação por IA subestima sistematicamente estudantes de origens linguisticamente diversas, destacando a necessidade de considerar [[bias-mitigation|mitigação de vieses]] e [[equity-in-ai-education|equidade]] na implantação da AES.

**A discordância em relação a quem corrige é sistemática, não aleatória.** Modelos GPT e Llama prontos para uso concordavam apenas fracamente com as notas humanas (QWK ≈ 0,17–0,28 contra 0,72 entre dois avaliadores humanos) e enviesavam em uma direção dependente da qualidade — mais altas para redações curtas e pouco desenvolvidas e mais baixas para redações longas e fortes que traziam erros superficiais menores ([[llms-do-not-grade-essays-like-humans-2026|Mathew et al. (2026)]]).

**A avaliação de L2 e autorreferencial** explora contextos de escrita não nativa. A **[[self-referential-l2-writing-llm-assessment|avaliação de L2 baseada em perfil]]** usa uma abordagem autorreferencial que compara a escrita do estudante com seu próprio trabalho anterior, em vez de com normas de falantes nativos.

**[[explainable-ai|Interpretabilidade]] e ponderação de características** abre a caixa-preta de como os LLMs realmente pontuam. **[[llm-essay-scoring-feature-weighting-2026|Wang et al. (2026)]]** compararam três LLMs (Qwen, GPT, Gemini) com avaliadores humanos sobre redações em inglês não nativo ao longo de dezesseis características textuais, encontrando forte alinhamento geral mas ponderações distintas: os LLMs enfatizavam precisão gramatical, sofisticação lexical e complexidade sintática, enquanto os avaliadores humanos priorizavam completude de conteúdo e apresentação visual. Criticamente, os LLMs deslocavam sua ponderação conforme o nível de proficiência — atribuindo mais peso a erros de língua para estudantes de baixa proficiência e recompensando cada vez mais a sofisticação linguística para os de alta proficiência —, enquanto os avaliadores humanos mantinham um framework mais estável. **[[llm-essay-assessment-framework-reliability-2026|Liu, Ye e Yan (2026)]]** estendem isso com um framework de avaliação de cinco modelos (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) sobre 60 redações longas, usando descoberta causal para revelar heurísticas avaliativas distintas: a maioria dos modelos priorizava precisão lexical e fluência, enquanto outros enfatizavam complexidade sintática ou integração entre domínios, e alguns mostravam inconsistência, compressão das notas ou subestimação sistemática. Juntos, esses estudos estabelecem que a validade da AES depende não apenas da concordância geral, mas de *como* os modelos ponderam as características e de se essa ponderação é estável entre subgrupos de estudantes — o que informa diretamente as auditorias de [[assessment-validity|validade da avaliação]] e de [[bias-mitigation|mitigação de vieses]].

**Fronteiras por tipo de item e os limites da correção de redações.** Em uma prova universitária de formato misto, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik e Thambi (2026)]] descobriram que a concordância do ChatGPT-5 com o corpo docente era de substancial a quase perfeita nos itens objetivos (CCC 0,935–1,000), mas caía abruptamente nas respostas abertas — próxima de zero ou negativa para respostas curtas e de apenas 0,341–0,854 nas questões dissertativas —, e uma rubrica estruturada não melhorava de forma consistente a concordância nas redações. Isso delimita a validade da AES: a fluência do modelo ajuda em itens bem especificados, mas não se transfere para a pontuação holística de redações, onde a interpretação contextual de respostas com crédito parcial ainda favorece o [[human-in-the-loop-ai|julgamento humano]].

**Fronteiras por tipo de problema na concordância diagnóstica.** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao e Fan (2026)]] usaram o DeepSeek-R1 para rotular problemas específicos de escrita antes da revisão e compararam seus rótulos com o diagnóstico dos professores ao longo de três ciclos (F1 médio = 0,768, DP = 0,037). A concordância foi maior em problemas com pistas locais, como escolha de vocabulário (F1 = 0,824), e menor onde o problema depende de uma relação entre afirmação e evidência (uso de fontes e evidência, 0,579), de modo que a concordância em um papel diagnóstico depende do tipo de problema, e não apenas do modelo ou do prompt.
**Uma distribuição de rubrica enviesada pode fazer as métricas agregadas de pontuação enganarem.** A avaliação automatizada de uma dimensão de rubrica pode ser uma tarefa de classificação com distribuição de rótulos muito desequilibrada em vez de uma nota contínua: ao marcar nível de reflexão de 0 a 3 em 1.954 redações de estudantes húngaros, 68% das redações estavam no nível 3 e 1,8% no nível 0, e a melhor configuração rasa (SMOTEBoost com embeddings do Qwen3) alcançou pontuação geral de 0,7176, média entre acurácia, F1 e ROC-AUC, contra 0,6872 do melhor transformer ajustado — mas uma configuração de RidgeClassifier obteve 0,7131 de ROC-AUC com apenas 0,5162 de acurácia, e o balanceamento de classes reduziu todas as métricas (a acurácia caindo de 0,6672 sem ele para 0,6408 com ele), então os autores leem a escolha do modelo como uma questão de qual métrica importa, cabendo aos transformers seu lugar pela sensibilidade às classes minoritárias e não pela concordância agregada ([[reflection-level-classification-hungarian-essays-2026|Csibi et al., 2026]]).

**Evidência de implantação de alto impacto.** A evidência de campo de uma implantação real de alto impacto ([[human-in-the-loop-ai-scoring-national-assessment-2026|o *Acredita EB* do Uruguai, 2024–2025; Curi et al.]]) mostra o GPT-5 com prompts construídos alcançando 60–80% de concordância com avaliadores humanos treinados ao longo de uma rubrica analítica espanhola de 15 itens, cerca de cinco pontos percentuais abaixo da concordância interavaliadores humana na maioria dos itens e nunca mais de 15 pontos abaixo, com consistência entre execuções acima de 90% em quase todos os itens. Vocabulário, sintaxe e ortografia foram as dimensões mais fracas, e o item de ortografia precisou ser entregue a um corretor gramatical determinístico (LanguageTool, 68% de acurácia, 100% de consistência) porque a ortografia no nível do token é onde o modelo é menos estável. Prompts construídos para uma edição da prova se transferiram para a edição seguinte com apenas ajustes específicos de tema, e a IA foi sistematicamente mais rigorosa que os humanos — dando notas menores em vez de maiores. Para o design da AES, a lição é que a pontuação baseada em prompts pode se aproximar da concordância humana mesmo em uma prova nacional, enquanto sua fraqueza remanescente está no nível das convenções linguísticas de baixo nível, e não da qualidade holística da [[writing-education|escrita]].

A confiança no nível do token, a pontuação ponderada por probabilidade e o ensembling melhoraram cada um a concordância na pontuação de pensamento divergente — as técnicas empilhadas alcançaram r = 0,846 (RMSE = 0,4848), e rotear apenas os 20% das respostas menos confiantes para revisão humana reduziu o esforço manual em cerca de 80% ([[know-when-to-trust-ai-scoring-reliability-2026|Organisciak e Acar (2026)]]).

**O [[benchmark|benchmark]] humano, e o que ele pode e não pode autorizar.** [[opraise-automated-marking-ai-assessment-2026|O estudo OpRaise]] é o teste mais forte desta base de conhecimento sobre se a correção por LLM está pronta para uso rotineiro, e sua resposta depende do benchmark, não do modelo. Ele comparou três sistemas de fronteira (Claude Opus 4.6, GPT-5.4, Gemini 3 Flash), cada um sob 27 configurações de prompt cruzando especificidade de rubrica, calibração e estratégia de pontuação, contra as notas moderadas de 761 redações autênticas de Psicologia de 125 estudantes em três [[higher-ed|universidades]] do Reino Unido. As notas humanas foram adotadas como ground truth porque o julgamento acadêmico é o padrão socialmente aceito, e os autores observam que avaliadores humanos concordam apenas moderadamente entre si — o que limita quão forte a concordância IA-humano poderia razoavelmente ser exigida. Contra esse benchmark, a concordância na faixa de grau do Reino Unido variou de **35 a 65 por cento por instituição** (63 por cento em Cambridge, 53 por cento em Nottingham, 35 por cento em Manchester Metropolitan) e não se transferiu entre elas, de modo que a recomendação central do relatório é a validação local com os próprios materiais de [[assessment|avaliação]] de cada instituição. Duas descobertas se generalizam além deste corpus. Primeiro, confiabilidade e concordância se separam: todos os modelos repontuaram de forma quase idêntica (ICC 1,00, 1,00, 0,97) e os modelos concordaram entre si mais de perto do que com os humanos (ICC de três modelos 0,91), mas os três concordaram na faixa de grau em apenas **56 por cento** das submissões — autoconsistência não é validade. Segundo, as notas da IA se comprimiram para o meio da escala (uma pontuação de compressão de 0,47–0,82, com o cruzamento onde IA e humano concordam em média ficando na casa dos 50 altos a 60 baixos), tornando a IA menos precisa exatamente nas fronteiras de nota que separam Firsts de Upper Seconds e aprovações de reprovações. Amplitude de vocabulário, conectivos, complexidade de frase e extensão do texto previram as notas da IA com efeitos pequenos mas significativos, enquanto sua relação com as notas humanas era amplamente irrelevante — uma demonstração direta da preocupação de [[ai-scoring-language-bias-physics|viés linguístico]], e uma que nenhuma estratégia de prompting testada removeu.


**A AES como sinal de treinamento em vez de juíza.** Modelos de pontuação costumam ser estudados como avaliadores, mas o SWIM usa um como função de recompensa: [[swim-student-writing-simulation-2026|Do, Kontak e Sachan (2026)]] congelam um verificador AES multitraço e o pontuam contra redações de estudantes geradas, transformando o perfil de traços previsto em uma recompensa densa por redação (a distância média normalizada por traços em relação ao perfil-alvo) para o GRPO, deliberadamente não a própria métrica Quadratic Weighted Kappa, porque o QWK é definido sobre um lote de pares alvo-predição e não é um sinal por amostra, enquanto recompensas de correspondência exata são esparsas demais no cenário multitraço. Os ganhos foram rechecados contra um pontuador DeBERTa e um verificador apenas de avaliação contra o qual a política nunca treinou (0,598 contra 0,479 para SFT, e 0,647 contra 0,501), que é a verificação que separa o controle genuíno de proficiência da adaptação ao modelo de recompensa. Para a pesquisa em AES, isso é uma segunda exigência de validade: um pontuador usado como alvo de treinamento está sendo otimizado contra, de modo que sua própria ponderação de traços e seus vieses de língua se propagam para tudo que o gerador aprende — as mesmas assimetrias de ponderação de características (precisão gramatical, sofisticação lexical e complexidade sintática ponderadas com mais força pelos modelos do que pelos avaliadores humanos) documentadas em outra parte desta página, agora moldando o treinamento em vez de apenas as notas.
**Pontuação e feedback querem métodos diferentes, então um sistema deveria separá-los.** [[wraft-automated-writing-evaluation-argumentative-2026|Labib et al. (2026)]] construíram um sistema de redações argumentativas do TOEFL como três módulos — pontuação, feedback de superfície sobre gramática e mecânica, e feedback profundo sobre organização, coerência e argumentação — em vez de um único modelo fazendo os três trabalhos, e descobriram que o que ganha em um módulo perde em outro: o ajuste supervisionado do GPT-4o em 120 redações de um conjunto proprietário de 480 pontuadas por benchmark, testado nas 360 restantes, alcançou kappa quadrático ponderado de 0,84 e RMSE de 0,44 na escala de 0-5, à frente da linha de base de Wang e Gayed (2024) (QWK 0,78, RMSE 0,57), mas o mesmo ajuste produziu saída inutilizável nos módulos de feedback, onde foi o prompting direto do Claude 3.7 que gerou comentários aprovados pelos professores.

### Conexões com conceitos relacionados

A AES está na interseção entre [[automated-assessment|avaliação automatizada]], [[writing-education|educação em escrita]] e [[generative-ai|IA generativa]]. Ela se conecta à [[formative-assessment|avaliação formativa]] quando usada para feedback em vez de nota, ao [[feedback|ciclo de feedback]] quando integrada a processos iterativos de escrita, e à [[ai-literacy|letramento em IA]] quando educadores entendem e calibram ferramentas de AES. Os conceitos de [[assessment-validity|validade da avaliação]] e de [[educational-measurement|medição educacional]] são essenciais para garantir que as notas da AES sejam significativas e justas.
- **Concordância, erro e o que um pontuador híbrido acrescenta.** Em um pequeno corpus aberto de escrita de marketing, o LLM superou tanto as regras determinísticas quanto um híbrido de peso igual em concordância absoluta com avaliadores humanos (ICC(2,1) 0,435 contra 0,266 e 0,091), com o híbrido significativamente pior que o LLM sozinho, enquanto a dispersão das notas e uma única resposta quase vazia mostraram o quanto essas estimativas dependem da composição do corpus ([[automated-scoring-marketing-posts-agreement-2026]]).

Sistemas abertos também fazem parte desse quadro: o AiAWE pontua redações argumentativas com um Gemma-3-27B-it adaptado com LoRA, alcançando QWK 0,828 e concordância dentro de ±0,5 da nota humana em 90,56% de 360 redações de avaliação — e relata que a escala do modelo não previu de forma confiável o desempenho corrente abaixo sob adaptação LoRA ([[aiawe-automated-writing-evaluation]]).

## Ideias equivocadas comuns

- **"Os resultados da correção automatizada refletem a escrita do estudante."** O sinal ordinal pode ser **fabricado, e não observado** — redações sintéticas de nível 1 construídas por geração a partir de modelo, degradação para **20-40% do comprimento original** e remoção de palavras-chave. Um sistema validado em extremos construídos pode nunca ter sido testado na distribuição que vai encontrar.
- **"A acurácia agregada é a métrica a relatar."** **Uma distribuição de rubrica enviesada pode fazer as métricas agregadas de pontuação enganarem**: a avaliação automatizada de uma dimensão de rubrica é frequentemente uma tarefa de classificação com distribuição de rótulos desequilibrada, em que alta acurácia e discriminação útil se separam.
- **"Implantações de campo não foram avaliadas."** Existe evidência de campo de uma implantação real de alto impacto (**o Acredita EB do Uruguai, 2024**), que é a forma mais forte de evidência nesta literatura e a que a maioria dos estudos de acurácia de pontuação nunca fornece.

## Conceitos conectados

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[assessment-validity]]

## Artigos conectados
- [[reflection-level-classification-hungarian-essays-2026]] — Classificação automática do nível de reflexão em redações de estudantes húngaros
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT: um sistema modularizado de avaliação automatizada de escrita para redações argumentativas
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Inovação educacional por meio da correção automatizada de redações: um framework multidimensional para avaliar pensamento crítico em redações de física do ensino médio
- [[opraise-automated-marking-ai-assessment-2026]] — Relatório OpRaise: correção por IA de 761 redações universitárias em três universidades do Reino Unido
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Um framework com humano no circuito para pontuação assistida por IA em avaliação de escrita em larga escala
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: pontuação de redações consistente e alinhada por recompensa com LLMs
- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs não corrigem redações como humanos (Mathew et al. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — Da pontuação automatizada ao diagnóstico de aprendizagem: um estudo de mecanismo da avaliação formativa assistida por IA na escrita em inglês
- [[llm-essay-scoring-feature-weighting-2026]] — Padrões de ponderação de características na pontuação de redações baseada em LLM (Wang et al. 2026)
- [[llm-essay-assessment-framework-reliability-2026]] — Framework para avaliar LLMs na avaliação de redações (Liu, Ye e Yan 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Saiba quando confiar: autoconfiança, pontuação probabilística ponderada e ensembling melhoram a concordância da pontuação por LLM
- [[swim-student-writing-simulation-2026]] — um verificador AES congelado usado como recompensa densa de treinamento para um gerador de escrita
