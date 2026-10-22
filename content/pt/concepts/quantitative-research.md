---
title: Pesquisa quantitativa
created: "2026-08-24T02:05:00-04:00"
updated: "2026-09-30T08:39:04-04:00"
type: concept
assessment: [educational-measurement]
research_method: [survey, experiment]
confidence: high
methods: [quantitative-research, research-methods-aied]
translation_of: concepts/quantitative-research
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Pesquisa quantitativa** — a família de métodos empíricos que coleta e analisa dados *numéricos* para descrever padrões, testar relações e estimar efeitos causais. Na [[ai-education|IA na educação]], os métodos quantitativos quantificam se e como as ferramentas de IA afetam [[learning-gains|resultados de aprendizagem]], [[student-engagement|engajamento]], [[motivation|motivação]] e [[self-efficacy|autoeficácia]], e modelam os mecanismos psicológicos e comportamentais do uso da IA. Eles fornecem a amplitude, a precisão e o poder de inferência causal que os [[qualitative-research|métodos qualitativos]] trocam por profundidade e contexto.

## Perguntas para refletir

- \"Estudantes que usam um tutor de IA pontuam mais alto\" — antes de ler, essa é uma afirmação sobre causação ou sobre correlação, e qual peça única de evidência converteria uma na outra?
- Uma pesquisa transversal pode testar um modelo mediacional complexo, mas nunca estabelecer causação. Por que duas variáveis poderiam se correlacionar numa pesquisa mesmo quando nenhuma causa a outra? Você consegue pensar numa forma de ser genuinamente enganado por tal correlação na educação?
- Instrumentos quantitativos são tão bons quanto aquilo que medem — e a página nota que instrumentos podem medir o construto errado. Quando você preenche uma pesquisa de autorrelato sobre \"confiança\" ou \"engajamento\", o que ela poderia de fato estar capturando em seu lugar, e como você descobriria?
- Um RCT atribui aleatoriamente estudantes a condições para estimar um efeito causal. O que torna a atribuição aleatória poderosa, e que problemas práticos e éticos surgem quando o \"tratamento\" é uma ferramenta de IA possivelmente útil que está sendo negada a alguns estudantes?
- Desenhos longitudinais acompanham os mesmos estudantes ao longo do tempo — essenciais para distinguir desempenho inflado pela IA de aprendizagem durável. Por que um único retrato de notas altas falharia em revelar se a aprendizagem de fato aconteceu?
- O trabalho quantitativo fornece amplitude e poder causal; o trabalho qualitativo fornece profundidade e significado. Antes de ler o emparelhamento, onde você acha que números isoladamente mais provavelmente o enganaram sobre uma alegação de aprendizagem, e que método você acrescentaria para verificá-la?

## Introdução

A pesquisa quantitativa abrange desenhos descritivos (medir prevalência e padrões), desenhos correlacionais/observacionais (testar relações entre variáveis) e desenhos experimentais e quase-experimentais (estimar efeitos causais). O que os unifica é a redução sistemática das observações a números, analisados com estatística, e a prioridade dada a **confiabilidade, validade e generalizabilidade** — as preocupações centrais da [[educational-measurement|mensuração educacional]].

## Principais abordagens quantitativas

### Pesquisa por levantamento e correlacional
Pesquisas transversais medem atitudes, percepções, motivação, [[self-efficacy|autoeficácia]] e aceitação de tecnologia autorreportados, frequentemente modelados com regressão ou modelagem por equações estruturais (SEM/PLS-SEM) para testar relações e mediadores hipotetizados. Elas dominam o corpus da base de conhecimento, particularmente para questões de aceitação, motivação e mecanismos psicológicos. A [[acceptance-ai-english-tools-2026|aceitação de ferramentas de inglês assistidas por IA]] se constrói sobre o [[technology-acceptance-model|TAM]] com SEM; as [[tian-genai-learning-adoption-pathways-2026|trilhas de adoção de GenAI]] usam PLS-SEM, fsQCA e mapeamento importância-desempenho; o [[teacher-education-ai-literacy-sdt-2026|letramento em IA dos professores]] usa pesquisas validadas por fator fundamentadas na [[self-determination-theory|teoria da autodeterminação]].

- **Pontos fortes:** amostras grandes; cobertura ampla e de baixo custo; testa modelos mediacionais complexos; viável para atitudes difíceis de observar.
- **Limitações:** dados transversais não podem estabelecer causação; viés de autorrelato; amostragem por conveniência limita a generalizabilidade; mediadores inferidos a partir de covariância, não de manipulação. Ver [[self-report-measures]] para o tratamento do lado do instrumento desses limites.

### Pesquisa experimental e quase-experimental
Experimentos atribuem aleatoriamente estudantes a condições (ex., tutor de IA vs. tutor humano, ou com |scaffolding de IA vs. sem assistência) para estimar efeitos causais sobre os resultados. **Ensaios controlados randomizados ([[rct|RCTs]])** são o padrão-ouro para validade interna. [[access-not-enough-ai-tutoring-2026|Um estudo de campo randomizado de apoio humano mais tutoria por IA]] e [[genai-can-harm-teaching-rct-2026|um RCT sobre IA generativa no ensino]] usam a atribuição para isolar efeitos causais. Desenhos **quase-experimentais** (pré/pós, grupos pareados sem randomização) são mais viáveis em salas de aula intactas, mas mais fracos em alegações causais.
[[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] adotam em vez disso um crossover within-subject: cada estudante encontra o mesmo conteúdo de física duas vezes, uma numa aula ativa em sala e outra pelo próprio tutor de IA do curso, com pré- e pós-testes em torno de cada, de modo que cada estudante serve como seu próprio controle, e as diferenças entre pessoas se cancelam.

- **Pontos fortes:** inferência causal mais forte; mensuração limpa dos resultados; sustenta estimativa de tamanho de efeito e alegações de eficácia.
- **Limitações:** custoso e lento; condições artificiais reduzem a validade ecológica; ferramentas de IA que mudam rápido datam os experimentes rapidamente; amostras pequenas têm pouco poder para detectar efeitos; restrições éticas de reter ferramentas úteis.

### Pesquisa longitudinal
Desenhos longitudinais acompanham os mesmos estudantes ao longo do tempo, capturando mudança, crescimento e aprendizagem durável que a mensuração em um único ponto deixa passar. O [[ai-lms-middle-school-longitudinal|estudo longitudinal com LMS]] acompanha estudantes ao longo de um ano letivo. Desenhos longitudinais são essenciais para distinguir desempenho inflado pela IA de [[genai-performance-vs-learning|aprendizagem durável]].

Comparações entre conjuntos de dados precisam de um ponto de trabalho fixo: uma verificação estrutural de dados educacionais sintéticos descobriu que analisar cada conjunto de dados em seu próprio limiar invertia um contraste que se mantinha num ponto compartilhado, e que sua comparação por substituto precisava apenas dos dados sintéticos e de permutações deles mesmos — um nulo baseado em permutação, e não um limiar absoluto ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).

### Quantificação computacional e psicométrica
Os métodos quantitativos também incluem a mensuração direta de construtos por instrumentos — o domínio da [[educational-measurement|mensuração educacional]] e da [[item-response-theory|teoria de resposta ao item]]. O [[jin-glat-genai-literacy-assessment|GLAT]] da base de conhecimento é um instrumento quantitativo de 20 itens validado com TRI; [[educational-measurement|instrumentos de mensuração]] de [[ai-literacy|letramento em IA]], aceitação e autoeficácia fornecem as escalas validadas das quais a pesquisa por levantamento e experimental dependem.

## Como a pesquisa quantitativa aparece na base de conhecimento

- **Alegações de eficácia e causais.** RCTs e quase-experimentos testam se as ferramentas de IA melhoram a aprendizagem ([[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]]).

- **Pré-registro e replicação.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] declaram suas hipóteses e plano de análise antes do ensaio e reúnem a comparação randomizada ao longo de dois semestres e dois grandes cursos assíncronos, de modo que a estimativa repousa sobre um plano fixo e uma replicação, e não sobre uma única amostra.
- **Modelagem de mecanismos.** SEM/PLS-SEM testam mediadores e moderadores da adoção e da aprendizagem com IA ([[tian-genai-learning-adoption-pathways-2026]], [[acceptance-ai-english-tools-2026]], [[teacher-education-ai-literacy-sdt-2026]]).

- **Modelos de painel que separam efeitos within- de between-person.** [[genai-reliance-human-agency-collaborative-learning-2026|Wu e Lu (2026)]] estimam um modelo de painel cruzado de interceptos aleatórios ao longo de três ondas de dados de escrita colaborativa, o que separa as diferenças estáveis entre estudantes da ordem temporal within-person — a distinção que autoriza ler o aumento da dependência como precedendo a queda na agência percebida, e não meramente acompanhando-a.
- **Mensuração e desenvolvimento de escalas.** A base de conhecimento documenta o desenvolvimento e a validação de instrumentos quantitativos ([[jin-glat-genai-literacy-assessment|GLAT]], [[educational-measurement]]).

- **Desempenho versus aprendizagem durável.** [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui (2025)]] randomiza 120 estudantes para estudo com assistência de IA ou tradicional e mede a retenção com um teste surpresa de 20 questões 45 dias depois da intervenção, de modo que o resultado é o que sobreviveu à demora, e não o que apareceu no fim da sessão.

## Pontos fortes e limitações

- **Pontos fortes:** precisão e poder estatístico; generalizabilidade para populações definidas; inferência causal (com desenhos experimentais); cobertura eficiente de grandes amostras; cumulativo e comparável entre estudos.
- **Limitações:** captura o que é mensurável, frequentemente deixando passar processo, significado e contexto (ver [[qualitative-research]]); viés de autorrelato; instrumentos podem medir o construto errado (ver [[educational-measurement|questões de mensuração]]); correlação sem causação; pode ser artificial e lento em relação à mudança da IA.

Métodos quantitativos e [[qualitative-research|qualitativos]] são complementos — o trabalho quantitativo fornece amplitude e poder causal, o trabalho qualitativo fornece profundidade e significado. [[mixed-methods-research|Desenhos de métodos mistos]] os combinam. Ver [[research-methods-aied]] para a comparação completa de métodos e os contrastes entre desenhos experimentais, por levantamento, qualitativos e outros.

## Conceitos conectados

- [[research-methods-aied]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[rct]]
- [[learning-gains]]
- [[student-engagement]]
- [[self-efficacy]]
- [[technology-acceptance-model]]
- [[self-report-measures]]

## Artigos conectados

- [[access-not-enough-ai-tutoring-2026]] — Um estudo de campo randomizado de apoio humano mais tutoria por IA
- [[genai-can-harm-teaching-rct-2026]] — A IA generativa pode prejudicar o ensino: um RCT
- [[acceptance-ai-english-tools-2026]] — Aceitação de ferramentas de aprendizagem de inglês assistidas por IA
- [[tian-genai-learning-adoption-pathways-2026]] — Trilhas de adoção de GenAI (PLS-SEM, fsQCA)
- [[teacher-education-ai-literacy-sdt-2026]] — Letramento em IA dos professores pela teoria da autodeterminação
- [[jin-glat-genai-literacy-assessment]] — GLAT: um teste de letramento em GenAI validado por TRI
- [[ai-lms-middle-school-longitudinal]] — Um estudo longitudinal de LMS com IA integrada
- [[adaptive-pretesting-retention]] — Pré-teste adaptativo e retenção
- [[synthetic-educational-data-structural-fidelity-2026]] — O que as métricas de fidelidade deixam passar: uma verificação estrutural de dados educacionais sintéticos
