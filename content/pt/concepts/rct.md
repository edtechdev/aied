---
title: "ECA (ensaio controlado aleatorizado)"
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-01T20:35:10-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/rct
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **O ensaio controlado randomizado (RCT)** — um design de pesquisa no qual os participantes são atribuídos aleatoriamente a uma condição de tratamento ou de controle para estimar o efeito causal de uma intervenção sobre um resultado. Na [[ai-education|IA na educação]], os RCTs são o padrão-ouro para estabelecer se uma ferramenta de IA ou uma abordagem [[pedagogy|pedagógica]] *causa* [[learning-gains|ganhos de aprendizagem]], mudanças de engajamento ou outros resultados, em vez de meramente se correlacionar com eles.

## Questões a considerar

- Se uma escola lhe diz "os estudantes que usaram a ferramenta de IA pontuaram mais alto", por que isso ainda pode não provar que a ferramenta causou o ganho — mesmo se a diferença for grande?
- A randomização equilibra confundidores conhecidos *e desconhecidos* entre os grupos. Antes de ler, o que a atribuição aleatória realiza que simplesmente comparar duas turmas intactas não consegue, não importa quão bem pareadas elas pareçam?
- A página chama o RCT de padrão-ouro, mas lista custos reais: cenários artificiais, IA que muda rápido e envelhece os ensaios, amostras pequenas e subpotentes, e restrições [[ethics|éticas]] para reter ferramentas úteis. Qual desses trade-offs você acha que é mais frequentemente ignorado nas manchetes de pesquisa em educação?
- Um RCT com 1.174 participantes descobriu que a [[generative-ai|GenAI]] fechou cerca de três quartos de uma lacuna de produtividade baseada na educação. Mas um RCT bem conduzido pode ainda ser executado sobre uma tarefa estreita em um cenário forjado. O que você deveria verificar sobre a *medida de resultado* antes de confiar na afirmação causal?
- Considere o problema ético diretamente: se você tivesse motivo genuíno para acreditar que um tutor de [[intelligent-tutoring|IA]] ajuda os estudantes a aprender, seria defensável negá-lo aleatoriamente a metade de uma turma por um semestre? Como você projetaria um estudo eticamente sólido que ainda isolasse a causa?

## Introdução

A randomização é o que distingue um RCT de outros designs: ao atribuir aleatoriamente os aprendizes às condições, um RCT equilibra confundidores conhecidos e desconhecidos entre os grupos, de modo que qualquer diferença observada nos resultados pode ser atribuída à intervenção com alta validade interna.

### Como os RCTs aparecem na pesquisa

- **Micro-RCTs como resposta à tecnologia em rápido movimento:** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] argumentam que ensaios convencionais de larga escala não conseguem acompanhar [[edtech-platform|plataformas]] de tutoria que mudam materialmente durante um estudo, e usam micro-ensaios controlados randomizados conduzidos por [[teacher-role|professores]] em escolas secundárias inglesas (644 de 929 estudantes completando o pós-teste, g = 0,33) para manter a estimação causal repetível. Os trade-offs estão declarados em seu próprio design: 30,7% de atrito, resultados alinhados ao [[curriculum-design|currículo]] em vez de padronizados independentemente, e apenas quatro semanas de acompanhamento.
- **Afirmações de eficácia causal:** os RCTs em AIED testam se um tutor, ferramenta ou tratamento pedagógico de IA melhora os resultados. [[generative-ai-education-productivity-gaps|Um experimento randomizado sobre IA generativa]] com 1.174 participantes descobriu que a GenAI reduz substancialmente as lacunas de produtividade baseadas na educação, fechando cerca de três quartos da diferença inicial de desempenho — uma estimativa causal clara do efeito da IA.
- **Comparação com o padrão-ouro:** a página de [[research-methods-aied|métodos de pesquisa]] situa os RCTs como o design mais forte para validade interna, ao mesmo tempo que nota seus trade-offs — custo, condições artificiais, IA que muda rapidamente, amostras pequenas e subpotentes, e limites éticos para reter ferramentas potencialmente úteis.
- **Um ensaio projetado para equivalência, e não para diferença.** [[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]] randomizaram 2.383 adultos para tutoria com IA, tutoria humana ao vivo ou um controle de vídeo, escreveram novos itens de GRE com ex-desenvolvedores de testes da ETS e da Kaplan para manter a contaminação do teste publicado fora, contrabalançaram as duas formas e testaram a equivalência com dois testes unilaterais contra ±0,25 DP em vez de uma diferença — as escolhas de design que tornam "nenhuma diferença significativa" um resultado interpretável.
- **Randomização por grupo, baixa adoção e o que uma estimativa de intenção-de-tratar significa então.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] randomizaram 2.379 graduandos em 13 blocos atribuindo *instrutores* em vez de estudantes, de modo que cada estudante de uma turma herdava a condição daquele instrutor — o design que torna um ensaio de implantação em múltiplas turmas viável, e o que cria os problemas de inferência que o estudo então documenta. Apenas cerca de 15% dos estudantes nas turmas tratadas usaram alguma vez a ferramenta, de modo que os efeitos relatados estimam *oferecer* acesso em vez de usá-lo; os autores leem a intervenção como o uso mais amplo de IA que sua introdução induziu, e tratam as sessões individuais como uma questão separada. Como o tratamento foi atribuído no nível do instrutor, a inferência repousa sobre 34 clusters — um cenário em que erros padrão robustos a clusters superestimam a precisão —, de modo que o artigo relata a inferência por randomização ao lado deles e descobre suas conclusões robustas. Os dois efeitos principais, uma queda de 0,37 DP nas notas finais na amostra de correspondência exata e uma queda de 0,90 DP na participação registrada na plataforma em ambas as amostras, são consequências em nível de turma que uma randomização por estudante da mesma ferramenta não poderia ter isolado sem contaminação entre colegas tratados e de controle.
- **A adoção limita o que um ensaio pode testar, e o apoio ao engajamento não é dosagem.** [[access-not-enough-ai-tutoring-2026|Robinson et al. (2026)]] rodaram dois RCTs de plataforma de leitura nos quais apenas 60,7% e 53,3% dos estudantes de controle usaram alguma vez a plataforma; um tutor de engajamento elevou as histórias lidas em 71–80%, mas não produziu ganho de desempenho, consistente com os 2–5 minutos por semana alcançados.
- **Escala que converte nulos em evidência.** [[mata-sustaining-ai-enabled-student-support-2026|Mata et al. (2026)]] acompanharam 8.708 estudantes ao longo de oito semestres com poder para detectar efeitos de 0,05 DP e descobriram movimentos grandes e imediatos em tarefas binárias datadas — 34 pontos percentuais a mais de registro até 16 de agosto após um único lembrete —, enquanto desempenho acadêmico, persistência e graduação não mostraram efeito detectável. A escala é a lição de design: com esse N, os nulos acadêmicos são resultados precisos, e não falhas de detecção, o que é o que licencia a conclusão de que uma ferramenta de comunicação move o que ela pode abordar, e não resultados cumulativos de aprendizagem.
- **Uma média nula pode mascarar heterogeneidade com sinais opostos.** Um RCT pré-registrado que randomizou 538 professores em 24 escolas turcas no nível de departamento escolar descobriu que o desempenho caiu 0,129 DP entre professores abaixo da mediana, enquanto subiu 0,054 entre os acima da mediana, e a motivação caiu 0,111 DP, com um exame comprimido por efeito teto (média de controle 89,2/100) limitando o poder. ([[genai-can-harm-teaching-rct-2026|Sungu, Lira & Duckworth (2026)]]))
- **A pré-registro que fixa a questão e o efeito detectável.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] registraram ambos os ensaios de curso no Registry of Efficacy and Effectiveness Studies, comprometendo-se de antemão com a estimação por intenção-de-tratar e um tamanho de efeito mínimo detectável de cerca de 0,157, e randomizaram estudantes consentidos a cada período com uma segunda onda no add/drop, de modo que os que se matricularam tarde entravam no design em vez de na amostra de análise padrão. Agrupando 2.483 estudantes em dois cursos, o efeito fica no limiar de A/B (quatro pontos percentuais), enquanto a mudança agregada na nota numérica não sobrevive à correção de comparações múltiplas — um lembrete de que um resultado primário registrado disciplina qual de vários resultados correlacionados é acreditado.
- **Randomizar dentro de turmas intactas, com uma linha de base pré-tratamento.** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni & Fryer (2026)]] randomizaram 454 graduandos dentro de três turmas intactas de marketing após o drop/add e mediram todos os quatro resultados em T1, antes que qualquer estudante tivesse acesso ao chatbot, de modo que a comparação do semestre repousa sobre uma linha de base medida, e não sobre uma assumida. O resultado plano (nenhuma interação grupo × tempo alcançou significância; o maior efeito relatado foi d = 0,050, sobre interesse) é relatado junto com a adoção — 0,89 logins por semana contra um atribuído uma vez por semana —, o que evita que um nulo sobre um tratamento fracamente usado seja lido como um nulo sobre a ferramenta.
- **Crossover dentro do sujeito, e um controle posto na melhor prática.** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] fizeram cada um dos 194 estudantes de ciências da vida de Harvard trabalhar em duas aulas de física — uma em uma sessão de [[active-learning|aprendizado ativo]] em sala de aula e outra com o próprio tutor de IA do curso, em ordem contrabalançada com pré e pós-testes em torno de cada uma —, de modo que cada estudante serve como seu próprio controle, e a comparação dos *modos de entrega* não é confundida por quem foi atribuído a qual. A segunda escolha do design importa tanto: o comparador foi o aprendizado ativo baseado em pesquisa, e não uma aula, de modo que a vantagem (mediana de pós-teste 4,5 vs. 3,5) é medida contra a melhor prática atual e não pode ser lida como "a IA supera o ensino".

### Forças e limitações

- **Forças:** inferência causal mais forte; medição limpa dos resultados; apoia a estimação de tamanho de efeito; equilibra confundidores por meio da randomização.
- **Limitações:** custoso e lento; cenários artificiais podem reduzir a validade ecológica; as ferramentas de IA mudam mais rápido do que os ensaios conseguem rodar; amostras pequenas frequentemente subpotentes para detectar efeitos significativos; restrições éticas para reter IA potencialmente benéfica de um grupo de controle. Duas dessas limitações mudam de forma quando a atribuição é por clusters: a amostra efetiva passa a ser o número de *clusters* em vez do número de estudantes, de modo que um ensaio pode ser grande por contagem de cabeças e fino por essa medida — os 2.379 estudantes de Liu et al. repousam sobre 34 clusters em nível de instrutor —, e quando a adoção é voluntária e baixa, uma estimativa por intenção-de-tratar responde se oferecer a ferramenta mudou os resultados, não se usá-la mudou.

Para o tratamento mais completo do design experimental na IA na educação — incluindo quando um RCT é apropriado versus quase-experimental, de survey ou computacional — veja [[research-methods-aied]].

## Conceitos conectados

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]
- [[student-support-and-success]] — the design behind the strongest student-support evidence

## Artigos conectados

- [[generative-ai-education-productivity-gaps]] — Does generative AI narrow education-based productivity gaps? Evidence from a randomized experiment
- [[genai-can-harm-teaching-rct-2026]] — Generative AI can harm teaching: an RCT
- [[access-not-enough-ai-tutoring-2026]] — Access is not enough: human support improves engagement with AI tutoring
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Group randomization by instructor: a 0.37 SD fall in final grades and a 0.90 SD fall in platform participation, with 15% uptake and inference on 34 clusters (Liu et al. 2026)
