---
title: Framework ICAP
created: "2026-08-14T04:33:38-04:00"
updated: "2026-09-30T08:05:25-04:00"
type: concept
connected_faqs: [designing-ai-into-learning]
foundations: [learning-design]
pedagogy: [active-learning, cognitive-psychology, collaborative-learning, learning-theories]
technology: [educational-nlp, learning-analytics]
confidence: high
translation_of: concepts/icap-framework
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **O framework ICAP** (Interactive–Constructive–Active–Passive) — uma taxonomia do engajamento cognitivo desenvolvida por Michelene Chi que classifica o comportamento do estudante em quatro modos de mudança de conhecimento, ordenados do menos ao mais cognitivamente engajado: *passivo*, *ativo*, *construtivo* e *interativo*. Na IA na educação, o ICAP fornece tanto um alvo de desenho (construir ferramentas que eliciem engajamento construtivo e interativo em vez de consumo passivo) quanto uma lente de avaliação (medir se os estudantes e os sistemas de IA estão de fato engajados nos modos superiores).([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])

## Perguntas para refletir

- Pense na última vez em que você \"aprendeu\" algo assistindo a um vídeo ou lendo. O framework ICAP chamaria isso de passivo. O que você de fato retém da exposição passiva, em comparação com explicar aquilo para outra pessoa?
- O ICAP ordena o engajamento de passivo a ativo a construtivo a interativo. Em que modo as ferramentas de IA que você usou tendem a manter os estudantes — e clicar por uma prática adaptativa conta como engajamento real ou apenas como atividade?
- A página argumenta que o deslocamento mais consequente é de Ativo para Construtivo — gerar explicações ou novos artefatos em vez de apenas aplicar conhecimento. Por que produzir algo novo poderia ser o passo que de fato muda a compreensão?
- Um estudo descobriu que especialistas humanos superam de longe os modelos de IA na rotulação de níveis de engajamento. Se sistemas automatizados subestimam sistematicamente o engajamento, como deveríamos tratar as métricas de \"engajamento\" geradas por IA?
- O ICAP mostra que uma ferramenta que responde por você o mantém passivo, enquanto uma que instiga e questiona o empurra em direção ao engajamento construtivo e interativo. Qual escolha de desenho você faria para os seus estudantes?
- O framework é usado tanto como alvo de desenho quanto como lente de avaliação. Como você poderia usar o ICAP no seu próprio ensino ou desenho para saber se os estudantes estão genuinamente engajados, e não meramente ativos?

## Introdução

O ICAP se fundamenta no pressuposto de que *o que os estudantes fazem* determina quanto e o que eles aprendem. O framework de Chi postula que, à medida que o engajamento vai do passivo ao ativo, ao construtivo e ao interativo, a natureza da mudança de conhecimento se aprofunda — do armazenamento, à atenção, à integração do novo conhecimento com o conhecimento prévio, à cocriação de conhecimento pelo diálogo. Isso torna o ICAP uma poderosa ferramenta analítica para a IA na educação, onde a questão central de desenho é se a assistência da IA apoia ou desloca o engajamento cognitivo dos estudantes.

## Os quatro modos

| Modo | Comportamento do estudante | Natureza da mudança de conhecimento |
|------|----------------------------|-------------------------------------|
| **Interativo** | Diálogo com outro estudante ou agente, coconstruindo sentido; ex., defender uma posição, [[collaborative-learning|resolução colaborativa de problemas]] | Cocriação de novo conhecimento por atividade conjunta e recíproca |
| **Construtivo** | Gerar nova saída além do que é dado; ex., autoexplicação, comparação, reflexão, desenho | Integrar nova informação ao conhecimento prévio para produzir compreensão nova |
| **Ativo** | Manipular ou agir sobre o material; ex., fazer anotações, sublinhar, pausar para pensar | Atencionar e armazenar informação, às vezes sem integração profunda |
| **Passivo** | Receber informação sem ação manifesta; ex., ouvir uma aula, ler | Armazenar informação, com processamento posterior limitado |

## ICAP na IA na educação

### Um alvo de desenho para ferramentas de IA

O ICAP reformula a questão central de desenho para a IA na educação: uma ferramenta de IA que *responde pelo* estudante o mantém nos modos passivo/ativo, enquanto uma ferramenta que *instiga, questiona e faz [[scaffolding|scaffolding]]* pode empurrar os estudantes em direção ao engajamento construtivo e interativo. Isso alinha o ICAP à pedagogia [[constructivist|construcionista]] e à pesquisa em [[active-learning|aprendizagem ativa]].([[multimodal-learning-genai]])([[hingle-collaborative-ai-literacy-2025]])

### Uma lente de avaliação para agentes de IA

O ICAP também serve como framework de mensuração. Num estudo, os pesquisadores estenderam o ICAP para uma escala de 7 pontos para caracterizar o engajamento cognitivo no diálogo colaborativo, e então compararam anotadores humanos treinados com rotulação baseada em LLM (aprendizado em contexto, prompting zero-shot e agentes reflexivos). A confiabilidade interanotadores humana (kappa = 0,906–0,998) superou de longe a anotação por LLM (kappa = 0,541–0,609), destacando o papel do ICAP — e seus limites atuais — na mensuração automatizada do engajamento para pipelines de [[learning-analytics|analítica de aprendizagem]].([[icap-cognitive-engagement-llm-agents]])

### Guiando a facilitação do diálogo colaborativo

Como o engajamento interativo é o modo mais alto do ICAP, o framework ajuda a localizar o valor da facilitação por IA na [[collaborative-learning|discussão colaborativa online]]. A [[llm-facilitation-timing-online-discussions|pesquisa sobre o momento da facilitação por LLM]] mostra que *quando* uma IA intervém numa discussão molda se ela apoia ou interrompe a coconstrução interativa de conhecimento — uma cautela informada pelo ICAP de que agentes autônomos de moderação precisam de calibração rumo a uma contenção semelhante à humana, em vez de facilitação excessivamente ansiosa.

### ICAP e o desenho da analítica de aprendizagem

O ICAP fundamenta críticas às métricas rasas de \"engajamento\": interagir com um dashboard clicando em filtros é engajamento *ativo*, não *interativo*. Desenhos eficazes de analítica de aprendizagem eliciam autoavaliação e diálogo bidirecional, em vez de meramente exibir dados — uma implicação extraída diretamente do framework de Chi.([[interactive-learning-dashboards-engagement]])

### A transição Ativo→Construtivo como o passo pivotal

Embora o ICAP descreva uma hierarquia, o deslocamento mais consequente para a aprendizagem é o salto dos modos *Ativo* para *Construtivo* (Chi & Boucher, 2023). O engajamento ativo (aplicar conhecimento a cenários semelhantes mas não idênticos) prepara os estudantes, mas é o engajamento construtivo — gerar explicações, resumos ou novos artefatos — que os equipa para criar novo conhecimento. Esse é o cerne para a IA na educação: uma ferramenta que mantém os estudantes no modo Ativo (ex., clicar por prática adaptativa) pode parecer produtiva, mas nunca os empurra para a geração construtiva que produz compreensão durável. Intervenções colaborativas e focadas em letramento que deliberadamente fazem [[scaffolding|scaffolding]] do salto Ativo→Construtivo tendem a mostrar os ganhos mais fortes.([[hingle-collaborative-ai-literacy-2025]])

### O ICAP como sinal de scaffolding adaptativo num ITS

Os modos do ICAP podem ser operacionalizados como *estados-alvo* que um tutor adaptativo seleciona para fazer scaffolding do engajamento cognitivo com base num modelo de estudante evolvente. Num ITS de lógica, [[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al.]] escolheram dinamicamente entre um modo *Ativo* \"Guiado\" de exemplos resolvidos e um modo *Construtivo* de exemplos \"Buggy\". Comparando o Bayesian Knowledge Tracing (BKT) contra o Deep Reinforcement Learning (DRL) e uma baseline não adaptativa ao longo de 113 estudantes, ambas as políticas adaptativas melhoraram o desempenho no pós-teste — mas de forma diferenciada: o BKT deu os maiores ganhos aos estudantes com baixo conhecimento prévio (ajudando-os a alcançar), enquanto o DRL produziu as maiores notas de pós-teste entre os estudantes com alto conhecimento prévio. Essa é uma demonstração concreta de que *personalizar* eficazmente o modo ICAP de um tutor inteligente depende de modelar o conhecimento atual do estudante — e de que nenhum modo ou método adaptativo único serve a todo estudante. Ela conecta a hierarquia do ICAP diretamente ao desenho de [[adaptive-learning|aprendizagem adaptativa]] e de [[knowledge-tracing|rastreamento de conhecimento]].

### O ICAP como modelo de estado cognitivo para gerar agentes humanoides

Além de selecionar modos de tarefa, o ICAP foi embutido diretamente no *modelo cognitivo* de um agente educacional generativo. O [[cogevolution-student-cognitive-evolution-agent-2026|CogEvolution]] constrói um \"perceptron de profundidade cognitiva\" baseado no ICAP que mapeia entradas para uma distribuição de probabilidade pelos quatro níveis do ICAP, fundindo isso com atualizações de estado inspiradas na evolução e recuperação de memória por teoria de resposta ao item para simular a evolução cognitiva de um estudante (incluindo transições como confusão → insight). As ablações mostram que remover o módulo de percepção do ICAP colapsa a capacidade do agente de distinguir aprendizagem rasa de profunda — evidência de que a taxonomia do ICAP pode servir como medida interna e refinada do engajamento cognitivo para a [[simulating-students|simulação de estudantes]], e não meramente como lente de avaliação externa.

### O ICAP ancora a avaliação da interação reflexiva com GenAI

A ênfase do ICAP no engajamento generativo e de nível de processo foi adotada por frameworks de avaliação que avaliam *como* os estudantes aprendem com IA generativa. [[assessing-student-drive-framework-2025|O framework DRIVE]] alinha explicitamente seu construto central — interação reflexiva profunda com a saída de GenAI — com o tipo de engajamento generativo que o ICAP identifica como levando à aprendizagem mais profunda, e o usa para distinguir consumo de superfície de reelaboração esforçada e reflexiva do conteúdo gerado por IA. Isso posiciona o ICAP como âncora teórica para desenhar e mensurar interações de aprendizagem significativas com [[generative-ai|GenAI]], em vez de meramente rastrear uso.

## Implicações para desenho e pesquisa

1. **Desenhe para os modos superiores.** As ferramentas de IA deveriam instigar os estudantes a gerar, explicar e dialogar — atividade construtiva e interativa — em vez de entregar conteúdo passivo ou agir como máquinas de respostas.([[multimodal-learning-genai]])
2. **Engaje os estudantes por todos os modos.** A instrução eficaz em [[ai-literacy|letramento em IA]] engaja os estudantes em múltiplos níveis do ICAP — exposição passiva, manipulação ativa, geração construtiva e diálogo interativo — selecionando o modo que se encaixa no objetivo de aprendizagem.([[hingle-collaborative-ai-literacy-2025]])
3. **Meça o engajamento com honestidade.** O ICAP dá a pesquisadores e desenhistas um vocabulário comum para distinguir engajamento cognitivo genuíno de mera atividade — um corretivo ao [[student-engagement|engajamento]] raso.([[icap-cognitive-engagement-llm-agents]])
4. **Fique de olho na lacuna de anotação humano–LLM.** Se sistemas automatizados forem usados para codificar engajamento, sua defasagem sistemática em relação a humanos treinados precisa ser levada em conta.([[icap-cognitive-engagement-llm-agents]])

## Conceitos conectados

- [[active-learning]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[learning-analytics]]
- [[constructivist]]
- [[learning-design]]
- [[metacognition]]
- [[ai-literacy]]
- [[human-in-the-loop-ai]]
- [[limitations-in-aied-research]]

## Artigos conectados

- [[icap-cognitive-engagement-llm-agents]] — Framework ICAP estendido para mensurar engajamento com anotação humana vs. por LLM
- [[hingle-collaborative-ai-literacy-2025]] — Letramento colaborativo em IA nos quatro modos do ICAP
- [[interactive-learning-dashboards-engagement]] — O ICAP como crítica ao engajamento raso da analítica de aprendizagem
- [[multimodal-learning-genai]] — ICAP e engajamento cognitivo no desenho de aprendizagem multimodal
- [[llm-facilitation-timing-online-discussions]] — Momento da facilitação por LLM em discussões colaborativas online
- [[adaptive-scaffolding-cognitive-engagement-its]] — Scaffolding adaptativo do ICAP num ITS (BKT vs. DRL)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — Modelo de profundidade cognitiva do ICAP num agente generativo de simulação de estudantes
- [[assessing-student-drive-framework-2025]] — Avaliação ancorada no ICAP da interação reflexiva com GenAI
