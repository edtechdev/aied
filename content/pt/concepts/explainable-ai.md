---
title: IA explicável
created: "2026-09-07T10:15:00-04:00"
updated: "2026-09-30T14:23:52-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **IA explicável (XAI) na educação** é o desenho e o estudo de tornar legíveis, para as partes interessadas educacionais, as decisões de um sistema de IA — [[learners|quem aprende]], professores, [[administrator|administradores]], [[parents-and-families|pais]], pesquisadores e [[stakeholders|formuladores de políticas]]. A distinção central que o campo sustenta: explicar a **matéria** (por que um fato é verdadeiro) não é o mesmo que explicar uma **decisão do sistema de IA** (por que este estudante recebeu esta atividade, por que esta resposta foi marcada como incorreta, qual evidência sustenta uma previsão de risco). A educação traz necessidades distintivas de explicabilidade — dados de aprendizagem ruidosos, explicações que podem apoiar diretamente a [[metacognition]] e a [[self-regulated-learning]], e partes interessadas que exigem tipos fundamentalmente diferentes de explicação. A pergunta operativa de desenho é a **qualidade da explicação**, e não a mera disponibilidade de explicação: uma explicação tecnicamente presente, mas ilegível, enganosa ou desalinhada a seu público pode causar mais dano do que nenhuma explicação.

## Perguntas para refletir

- Quando um [[intelligent-tutoring|tutor de IA]] diz por que uma dica foi dada, isso está explicando a *matéria* ou explicando a *decisão do sistema*? Você consegue nomear três exemplos de cada um no seu próprio uso de IA educacional?
- Quem precisa de explicações na educação — e quem aprende, professores e formuladores de políticas precisam do *mesmo* tipo? Para que cada um usaria uma explicação?
- Uma IA sinaliza um estudante como em risco de evasão. O que um [[teacher-role|professor]] precisa saber para agir com base nisso, versus o que o estudante precisa saber? A mesma explicação é adequada para ambos?
- A página argumenta que a *qualidade* da explicação importa mais que a *disponibilidade* de explicação. O que faz uma explicação tecnicamente presente falhar — você se lembra de uma ocasião em que uma explicação existia, mas era inútil, ou pior, enganosa?
- [[trust-calibration|Confiança]] e explicação estão ligadas, mas não são idênticas. Por que uma explicação fluente e confiante poderia criar confiança *falsa* em um sistema defeituoso — e como você detectaria que isso está acontecendo?

## Introdução

A IA explicável na [[ai-education|IA na educação]] nomeia a expectativa crescente de que os sistemas de IA nas salas de aula não deveriam ser caixas-pretas. Como a IA na educação afeta decisões consequentes — notas, sinalizações de risco, [[recommender-systems-and-learning-paths|trajetórias de aprendizagem]], recomendações de recursos —, as partes interessadas demandam crescentemente saber não apenas *o que* o sistema concluiu, mas *por quê*. A educação aguça isso em duas questões distintas: explicar a matéria que está sendo aprendida, e explicar o processo decisório do próprio sistema de IA. Confundi-las é um erro de categoria com consequências práticas: uma IA que explica perfeitamente uma resposta de [[physics-education|física]] ainda não dá ao estudante nem ao professor nenhuma percepção sobre por que o *sistema* o classificou como em risco, recomendou determinada atividade ou marcou uma resposta como incorreta.

## Explicar a matéria versus explicar a decisão do sistema

A contribuição fundadora do campo — o [[xai-education-framework|framework XAI-ED]] (Khosravi et al., 2022) — insiste que a educação tem necessidades de explicabilidade *distintivas*, além da XAI de propósito geral. A principal delas é a divisão entre dois alvos de explicação:

- **Explicações de matéria** esclarecem o *conteúdo*: por que uma dica aborda uma [[misconceptions|ideia equivocada]], por que uma resposta está incorreta, como um resultado de física decorre de princípios. São explicações [[pedagogy|pedagógicas]] que apoiam o [[scaffolding|andaimento]], o [[feedback]] e a [[metacognition]].
- **Explicações de decisão do sistema** esclarecem *o modelo*: por que este estudante recebeu esta atividade, por que o sistema prevê que este estudante está em risco, qual evidência sustenta uma previsão de rastreamento de conhecimento ou de [[learning-analytics|analítica de aprendizagem]]. São explicações de transparência que apoiam a [[trust-calibration|calibração da confiança]], a [[bias-mitigation|mitigação de viés]] e a responsabilização.

A distinção importa porque elas servem a diferentes partes interessadas e a diferentes propósitos. Quem aprende respondendo "por que isso foi marcado como errado?" precisa sobretudo da explicação de *matéria*; um professor decidindo se agirá sobre uma sinalização de risco, ou um formulador de políticas auditando viés, precisa da explicação de *decisão do sistema*. Desenhar uma explicação única que sirva a ambos raramente é possível — e é por isso que o desenho multipartes interessadas é um tema central do XAI-ED.

## Quem precisa de explicações: o desenho multipartes interessadas

- **Quem aprende** precisa de explicações que apoiem sua própria aprendizagem e autorregulação — por que uma dica foi dada, por que sua resposta foi marcada como incorreta, por que este recurso é recomendado (apoiando a [[self-regulated-learning]]). A [[student-perspectives-ai-writing-grading-2026|evidência da perspectiva dos estudantes]] mostra que quem aprende traça uma linha nítida entre aceitar *feedback* de IA (útil para revisão) e ceder a *autoridade de correção* (reservada ao instrutor humano) — uma postura calibrada e ajustada à função, ativada pela transparência sobre o envolvimento da IA. O [[ko-hughes-vsd-student-centered-its-2026|trabalho de desenho sensível a valores com estudantes de community college]] afia o ponto: os estudantes preferiam explicações *colaborativas e humanizadas* (por exemplo, "a IA pode estar incerta aqui, então vamos verificar isso juntos") à confiança bruta do modelo ou à transparência técnica, porque a transparência por si só tem pouco valor a menos que apoie diretamente sua aprendizagem. O estudo trouxe à superfície uma tensão entre transparência e interpretabilidade que empurra o desenho de explicação para semânticas voltadas a quem aprende, em vez de saídas de importância de atributos.
- **Professores** precisam de explicações que informem a intervenção — quais estudantes estão em risco e *por quê*, com base em qual evidência. Os [[xai-teachers-trust-edtech-recommendations-2026|estudos de explicabilidade com professores]] mostram que explicações [[discipline-specific-aied|específicas do domínio]], na [[curriculum-design|linguagem curricular]], constroem aceitação e confiança calibrada de forma mais eficaz que as genéricas de importância de atributos, mas os professores ainda querem experiência real em sala de aula antes de confiar plenamente — a explicação por si só não confere [[trust-calibration|calibração]].
- **Desenvolvedores e pesquisadores** precisam de explicações para depurar o comportamento do modelo e detectar [[bias-mitigation|viés]] — revelando quais atributos impulsionam as previsões.
- **Administradores e formuladores de políticas** precisam de explicações para responsabilização, conformidade com [[privacy|privacidade]] e [[regulation|regulamentação]] (por exemplo, o direito à explicação), e para auditar se as decisões impulsionadas por IA são justas e [[equity-in-ai-education|equitativas]].

## Abordagens e formatos

O framework XAI-ED cataloga as principais modalidades de explicação: **visual** (mapas de calor, árvores de decisão), **textual** (justificativas em linguagem natural), **baseada em exemplos** (contrafactuais, vizinhos mais próximos), ranqueamentos de **importância de atributos**, **extração de regras** e **simplificação de modelo**. Ele também mapeia abordagens às classes de modelo:

- **Modelos white-box** (árvores de decisão, modelos lineares, baseados em regras) são inerentemente interpretáveis.
- **Modelos black-box** ([[machine-learning|redes neurais]], ensembles) exigem métodos de explicação pós-hoc.
- Abordagens **glass-box** tentam equilibrar precisão com transparência.

A base de evidências concreta da AIED abrange todas elas. O **[[knowledge-tracing|rastreamento de conhecimento]] interpretável** torna os modelos de conhecimento de quem aprende diretamente inspecionáveis ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). **Substitutos autoexplicativos** destilam um modelo black-box em um pequeno [[llm|modelo de linguagem]] interpretável para a [[learning-analytics|analítica de aprendizagem]] ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Explicações contrafactuais** — "o que precisaria mudar para um resultado diferente" — apoiam o suporte à decisão educacional e o recurso ([[sc2r-counterfactual-recourse-educational-2026]]). **Analítica de aprendizagem federada + explicável** mostra que a qualidade da explicação pode degradar (a calibração piora) mesmo quando a estabilidade do ranqueamento se mantém, sublinhando que as explicações não são uma propriedade fixa, mas uma saída do sistema a ser mensurada ([[villegas-ch-federated-explainable-learning-analytics-2026]]). E [[affective-computing|ITS afetivo]] interpretável demonstra explicações na tutoria [[affective-tutoring|consciente das emoções]] ([[multimodal-affective-its-presentation]]).

## Qualidade da explicação, não disponibilidade

Uma lição recorrente ao longo da evidência: **ter uma explicação não basta**; a explicação precisa ser adequada a seu público, precisa e calibrada às apostas. O framework XAI-ED nomeia explicitamente as armadilhas:

- **Sobrecarga de explicação** — informação em excesso sobrecarrega o usuário e anula o benefício.
- **Explicações enganosas** — as explicações pós-hoc podem não refletir o raciocínio real do modelo, dando confiança falsa.
- **Viés de confirmação** — os usuários atentam seletivamente para explicações que confirmam crenças existentes.
- **Excesso de confiança** — explicações fluidas podem criar confiança falsa em sistemas defeituosos, alimentando o [[cognitive-offloading|excesso de dependência]] (o inverso da [[trust-calibration]]).
- **Vencer o sistema pelo jogo** — os estudantes podem explorar as explicações para contornar a aprendizagem real.

A qualidade da explicação também tem uma dimensão de equidade: uma explicação tecnicamente presente, mas ilegível para determinada parte interessada — ou que obscurece o [[bias-mitigation|viés]] em uma previsão — falha a seu propósito. É por isso que a pergunta de desenho é *qualidade e adequação*, e por que o desenho de explicação humanocentrado e específico por parte interessada é inseparável da geração técnica de explicações. A XAI eficaz é um ato de comunicação desenhado para as necessidades cognitivas de quem recebe, não meramente um artefato técnico.

A explicação nem sempre equaliza. Em um experimento de vinheta 2 × 2 com 250 estudantes do sétimo ano, uma justificativa escrita para uma nota de matemática elevou a aceitação e a equidade percebida em ambas as condições, mas ampliou, em vez de fechar, a lacuna entre decisões feitas pelo [[teacher-role|professor]] e pela IA ([[decision-making-agent-student-decision-acceptance-2026|Zhang et al. (2026)]]).

Duas ressalvas afiam isso ainda mais, ambas tornadas centrais pela contribuição mais recente da wiki sobre o tema. Primeiro, a própria maquinaria de explicação não é neutra: métodos pós-hoc como LIME e SHAP podem ser infiéis ao comportamento real do modelo, de modo que uma explicação tecnicamente presente pode enganar em vez de informar ([[lund-socially-accountable-data-science-xai-2026|Lund et al. 2026]], com base em Chuan et al. 2024). Segundo, **explicação não é responsabilização**. Um relato de quais atributos impulsionaram uma previsão não revela se esses atributos eram apropriados para usar, se os dados de treinamento eram representativos, ou se o desenho do sistema refletia juízo sólido; as explicações podem criar a aparência de transparência deixando intactas as condições estruturais que produziram uma decisão (Mittelstadt et al. 2019). Para a educação, isso significa que a pergunta a manter em mente não é se uma explicação foi produzida, mas se a pessoa que a recebeu — um estudante, um professor, um orientador — poderia entendê-la, agir com base nela ou contestar a decisão por trás dela. A mesma falha de legibilidade aparece no lado de segurança da [[automated-assessment|avaliação automatizada]]: o [[humble-prompt-injection-ai-grading-red-team-2026|red-team de Humble (2026) de uma ferramenta de correção por IA]] constatou que ela desativava silenciosamente o chat após bloquear uma injeção de prompt e — tendo anunciado que nunca seguiria instruções embutidas — as seguia em mais seis execuções no mesmo arquivo, deixando o usuário sem nenhum sinal confiável sobre o qual fundamentar a dependência.

**Explicável por desenho** é uma resposta ao problema de fidelidade do pós-hoc. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang e Fang (2025)]] parametrizam um decodificador de explicação pela mesma representação fundida e pela mesma nota prevista que decidem a [[assessment|avaliação]], de modo que uma nota baixa em questionamento [[formative-assessment|formativo]] produza uma justificativa que nomeia perguntas de sondagem insuficientes, e o combinam com atenção de dupla lente sobre padrões curriculares e movimentos de rubrica específicos da disciplina. O alinhamento atenção-rubrica alcança 78,0%, contra 41,7% do GPT-4 zero-shot e 32,1% do BERT, e a fidelidade é testada pela exclusão contrafactual de trechos críticos para a rubrica, juntamente com avaliações humanas em uma checklist ancorada na rubrica, dando uma pontuação de credibilidade da explicação de 0,78 — um aumento de 0,31 sobre o BERT-base. A auditoria também mostra onde a afirmação arquitetural enfraquece: em pistas emocionais, o modelo aloca 28,4% do peso de atenção contra 15,2% de um especialista (alinhamento 0,53), com um caso de falha atribuindo 28% ao token "frustrated", que os autores leem como overfitting ao afeto em vez de à pedagogia e nomeiam como uma área de refinamento. Embutir explicações no caminho da decisão as torna mais fiéis que justificativas pós-hoc; isso não as torna corretas.

## Ensinar explicabilidade como prática de responsabilização

Se a qualidade da explicação decide se a XAI é útil, então produzir explicações tem de ser ensinado como um hábito profissional, e não apenas demonstrado como uma capacidade. [[lund-socially-accountable-data-science-xai-2026|Lund e colegas (2026)]] propõem fazer isso ao longo de quatro pilares — **responsividade** (a obrigação de dar razões aos afetados), **responsabilidade** (o dano antecipado ao longo do ciclo de vida, e não defendido depois do fato), **aplicação** (consequências dentro do curso) e **reflexividade** (exame documentado dos próprios pressupostos) — cada um com suas atribuições e seu custo em sala de aula.

Para a explicabilidade especificamente, as atribuições que importam são as que forçam a explicação a sair do notebook: model cards avaliados com peso ao lado das métricas de precisão, e auditorias estruturadas de explicação nas quais os estudantes aplicam ferramentas de interpretabilidade a seus próprios modelos e depois apresentam os resultados a um público sem formação técnica compartilhada. A aplicação é o pilar que mais frequentemente falta nos cursos adjacentes à ética e o que torna o resto mais do que simbólico — rubricas que recompensem documentação responsável, projetos que possam ser devolvidos para revisão por fundamentos [[ethics|éticos]], e [[peer-assessment|avaliação entre pares]] conduzida contra critérios de responsabilização, e não apenas técnicos. O artigo é franco quanto ao fato de que as ferramentas diferem acentuadamente em custo: model cards e declarações de posicionalidade não exigem nenhum software novo e arriscam apenas uma conformidade superficial, enquanto painéis de pares e engajamento de partes interessadas exigem coordenação e adesão institucional, e é por isso que ele recomenda uma adoção escalonada em vez de um compromisso tudo ou nada. Veja [[curriculum-design]] para saber onde isso se encaixa em um programa.

## Conceitos conectados
- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]
## Artigos conectados
- [[lund-socially-accountable-data-science-xai-2026]] — Um framework de quatro pilares (responsividade, responsabilidade, aplicação, reflexividade) para ensinar XAI como prática de responsabilização (Lund et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Desenho sensível a valores de um ITS centrado no estudante (explicações colaborativas versus brutas)
- [[xai-education-framework]] — XAI-ED: o framework fundador da IA explicável na educação (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Explicações específicas do domínio constroem confiança e aceitação dos professores (Feldman-Maggor et al. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — Perspectivas dos estudantes sobre avaliação transparente assistida por IA (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Rastreamento de conhecimento interpretável
- [[explainable-probabilistic-kt]] — Rastreamento de conhecimento explicável por embeddings probabilísticos
- [[neural-symbolic-knowledge-tracing]] — Rastreamento de conhecimento neuro-simbólico
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Destilando modelos black-box em LMs autoexplicativos para analítica de aprendizagem
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Analítica de aprendizagem federada e explicável para modelagem de risco preservadora de privacidade
- [[sc2r-counterfactual-recourse-educational-2026]] — Recurso contrafactual restrito por semântica para suporte à decisão educacional
- [[fair-explainable-edu-recommendations]] — Recomendações educacionais justas e explicáveis
- [[multimodal-affective-its-presentation]] — ITS de laço fechado interpretável para feedback afetivo multimodal
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Explicando a adoção de ChatGPT no ensino superior
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Framework de LLM explicável por desenho: atenção de dupla lente e explicações parametrizadas pela nota para avaliação automatizada de professores (Li et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Injeção de prompt na correção mediada por IA, onde a detecção nunca foi relatada ao usuário (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — Avaliação de modelos pré-treinados para avaliação pedagógica de novas questões educacionais assistidas por IA

- [[decision-making-agent-student-decision-acceptance-2026]] — Decisões de correção feitas pelo professor versus pela IA: uma justificativa escrita ampliou a lacuna de equidade
## Citação

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.
