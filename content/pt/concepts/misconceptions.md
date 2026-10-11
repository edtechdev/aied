---
title: "Concepções errôneas sobre IA"
created: "2026-08-12T19:08:47-04:00"
updated: "2026-09-30T16:25:27-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading, teacher-role]
pedagogy: [metacognition]
technology: [generative-ai]
ethics: [trust-calibration]
audience: [learners, instructors]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education]
translation_of: concepts/misconceptions
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Concepções errôneas sobre IA** — as crenças imprecisas que as pessoas têm sobre o que os sistemas de IA são, o que fazem e o que usá-los significa para a aprendizagem e o trabalho. Concepções errôneas não são uma única falsidade, mas uma família de erros de calibração que se agrupam em torno de dois erros centrais: julgar mal o que o modelo é (autoridade vs. ferramenta, neutro vs. enviesado, compreensão vs. geração) e julgar mal o que a aprendizagem exige (saída vs. processo). Elas são sustentadas não apenas por estudantes, mas também por professores, administradores, formuladores de política e pelo público em geral — e corrigi-las é um objetivo central da educação em [[ai-literacy|letramento em IA]] e em [[trust-calibration|calibração da confiança]].

## Questões para considerar

- Muitas pessoas acreditam que a resposta de um chatbot de IA é um fato verificado porque soa confiante e fluente. A página chama isso de "falácia da autoridade". Quando você lê uma explicação gerada por IA, como decide se vai aceitá-la — e com que frequência você realmente a verifica?
- A concepção errônea "aprendizagem é igual a saída" é a crença de que produzir trabalho com IA é o mesmo que ter aprendido. Você já sentiu que "aprendeu" algo deixando uma ferramenta fazer a redação? O que realmente faltou depois?
- As pessoas frequentemente presumem que a IA é objetiva e sem viés. A página chama isso de "ilusão de neutralidade" — os modelos codificam vieses dos dados de treinamento, o que em contextos de escrita pode homogeneizar ideias por toda uma turma. Onde o viés pode se esconder em uma ferramenta que parece neutra?
- As concepções errôneas sobre integridade acadêmica se agrupam em dois extremos: alguns estudantes tratam a saída da IA como "não copiar uma pessoa" e portanto permissível, enquanto outros pensam que qualquer uso é colar. Onde você acha que a linha deveria cair, e quem deveria decidir isso?
- Uma crença comum é que uma consulta basta e que a saída da IA é determinística — a mesma pergunta sempre gera a mesma resposta. A página descreve isso como erro do determinismo. Como essa concepção errônea poderia levar alguém a confiar demais em uma única saída?
- Concepções errôneas são descritas como estáveis, plausíveis e resistentes à correção — muito como concepções errôneas em qualquer domínio. Se simplesmente dizer a verdade às pessoas raramente muda suas mentes, como o letramento em IA deveria realmente ser ensinado?

## Introdução

As concepções errôneas sobre IA importam porque são o precursor cognitivo dos comportamentos prejudiciais que esta base de conhecimento documenta sob preocupações de [[cognitive-offloading|dependência excessiva]] e [[academic-integrity|integridade acadêmica]]. As pessoas raramente se propõem a [[ai-misuse-learning-harm|usar mal]] a IA; elas o fazem porque modelos mentais imprecisos as levam a depositar confiança no lugar errado, pular a verificação e tratar saída como compreensão. Na educação, esses erros modelam tudo, desde como os estudantes estudam até como professores e instituições desenham currículos, [[assessment|avaliação]] e política.

### O que são concepções errôneas sobre IA

Uma concepção errônea aqui não é mera ignorância de como um modelo funciona — é uma crença ativamente sustentada, frequentemente autorreforçadora, que produz erros sistemáticos em como os estudantes interagem com a IA. Elas são diretamente análogas às concepções errôneas de domínio estudadas nas [[learning-sciences|ciências da aprendizagem]]: estáveis, plausíveis e resistentes à correção até serem confrontadas. Corrigi-las é um objetivo central da educação em [[ai-literacy|letramento em IA]] e em [[trust-calibration|calibração da confiança]].

### Concepções errôneas comuns em contextos acadêmicos

- **A falácia da autoridade** — tratar a saída de [[llm|LLM]] como fato verificado, e não como completamento probabilístico. Impulsiona a aceitação acrítica e o padrão de buscar-a-resposta-em-vez-da-compreensão documentado na pesquisa sobre [[intelligent-tutoring|tutoria com IA]], em que quem aprende aceita a resposta de um modelo sem verificá-la contra o [[hallucination-risk|risco de alucinação]].
- **A ilusão da verificação independente** — tratar o feedback da IA como uma correção externa quando o modelo espelha seu próprio raciocínio. A precisão basal dos usuários foi o preditor dominante do desempenho final, e o prompting específico de adulação cortou o mimetismo posicional (OR = 0,26), mas deixou a propagação de erro intocada, portanto o treinamento de quem aprende não é a salvaguarda ([[contextual-sycophancy-ai-literacy|Koyuturk et al. (2026)]]).
- **Aprendizagem é igual a saída** — acreditar que produzir trabalho *com* IA é o mesmo que ter aprendido. Esse é o erro exato por trás da [[cognitive-offloading|dependência excessiva]]: os processos de redação, recordação e revisão que constroem conhecimento durável são terceirizados.
- **A ilusão de neutralidade** — presumir que a IA é objetiva e sem viés. Os estudantes frequentemente deixam de notar que os modelos codificam vieses de dados de treinamento e que, em contextos de [[writing-education|educação em escrita]], isso produz homogeneização de ideias por toda uma coorte.
- **A zona cinzenta da integridade** — julgar mal se o [[academic-integrity|uso de IA é aceitável]]. Alguns estudantes veem a saída da IA como "não copiar uma pessoa" e portanto permissível; outros corrigem em excesso e pensam que *qualquer* uso é colar. A inconsistência [[governance|institucional]] alimenta ambos os erros.
- **Antropomorfização** — acreditar que o modelo tem intenção, memória e compreensão do contexto *deles*. Essa confiança excessiva é especialmente arriscada academicamente, porque os estudantes podem depender de explicações de som plausível que o modelo não consegue de fato ancorar.
- **O erro do determinismo** — esperar que uma consulta baste e não perceber que a saída é não determinística e sensível ao prompt. Subestimar isso produz a "lacuna de [[prompt-engineering|prompting]]", em que os estudantes confundem resultados rasos com o teto da ferramenta.
- **A descalibração da [[ai-detection|detecção]]** — subestimar tanto a detecção institucional quanto, mais importante, o autodano de submeter um trabalho que não conseguem depois explicar ou defender.
- **A ilusão da eficiência** — tratar o tempo economizado como ganho puro, perdendo que competências fundamentais não exercitadas decaem e que novatos ainda não conseguem distinguir uma boa saída de uma ruim.
- **A ilusão amizade-segurança (crianças)** — acreditar que uma IA de aparência amigável é inerentemente segura e menos propensa a espionar. [[children-ai-safety-misconceptions-2026|Leisten et al. (2026)]] levantaram 71 crianças de 10 a 16 anos (idade *M* = 12,90) e conduziram seis grupos focais (n = 36) em torno do robô social de [[open-source|código aberto]] Blossom, concluindo que o conhecimento fundamental de IA subia confiavelmente com a idade (*M* = 4,41 de 6; β = 0,17), enquanto as atitudes de segurança permaneciam ambivalentes (importância *M* = 2,51, segurança atual *M* = 2,77 em uma escala de 1 a 4), capturadas na crença de um jovem de 12–13 anos de que "talvez, se eles forem bons amigos, ele não espione tanto" — ao lado da crença de que o conhecimento da IA pode ser apagado com um toque de botão, de que hackear leva a sequestro e de que "o wifi irradia para o cérebro".

### Mitos institucionais e públicos sobre IA

As concepções errôneas não se confinam aos estudantes — elas saturam o discurso institucional e público sobre IA que os estudantes herdam. [[rudolph-ai-myths-critical-higher-ed|Rudolph et al. (2025)]] desmontam oito "mitos" entrincheirados que modelam a política e o ensino do ensino superior: que a IA é genuinamente "artificial" (em vez de construída a partir de trabalho humano explorado), que é verdadeiramente "inteligente" e [[agentic-ai|agêntica]], que irá "tornar o mundo um lugar melhor" sem problemas, que é "objetiva e sem viés", que os EUA detêm um monopólio de superpotência absoluta, que não vai perturbar o mercado de trabalho, que "revoluciona o [[higher-ed|ensino superior]]", e que professores conseguem detectar de forma confiável trabalho gerado por IA. Esses mitos institucionais são a fonte a montante de muitas concepções errôneas de estudantes documentadas acima — mais diretamente a [[trust|ilusão de neutralidade]] ("a IA é objetiva") e a falácia da [[trust-calibration|autoridade]] ("a IA é inteligente"), e a descalibração da detecção que leva os estudantes a presumir que uso indetectável e inverificável é seguro. Onde os estudantes absorvem e agem sobre mitos repetidos institucionalmente, corrigi-los exige confrontar não apenas a crença de quem aprende, mas o discurso que a alimenta.

### Por que as concepções errôneas importam para a aprendizagem

As concepções errôneas se traduzem diretamente nos comportamentos que causam dano à aprendizagem. A crença de que "a IA está sempre certa" suprime a verificação; a crença de que "usar IA é aprender" suprime o processamento esforçado; a crença de que "não é colar" contorna a revisão metacognitiva que consolida a compreensão. Nesse sentido, as concepções errôneas estão a montante do [[ai-misuse-learning-harm|dano à aprendizagem por uso indevido de IA]] documentado ao longo da base de evidência desta base de conhecimento.

### Concepções errôneas além dos estudantes: professores, instituições e o público

As concepções errôneas sobre IA não se confinam a quem aprende — elas são onipresentes entre os adultos que modelam a educação:

- **Professores e corpo docente** podem superestimar a capacidade da IA de corrigir ou detectar uso indevido de forma confiável, ou subestimar seu viés, levando à adoção acrítica ou à proibição reflexiva. Essa presunção de confiabilidade é em parte testável e em parte falsa: [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] fez red team de um fluxo cotidiano de [[automated-assessment|correção por IA]] e concluiu que instruções escondidas dentro de um arquivo submetido elevaram a nota de uma redação reprovada sem nenhum aviso visível, em 9 de 9 iterações para uma estratégia e 17 de 18 para outra. Quando professores sustentam a falácia da [[trust|autoridade]] sobre saídas da IA, eles modelam a mesma postura acrítica que deveriam estar corrigindo nos estudantes. Preparar [[teacher-role|educadores]] com modelos mentais precisos da IA é um pré-requisito para a [[teacher-ai-competency|integração responsável de IA]] e a [[pedagogical-safety|pedagogia segura]].
- **Administradores e formuladores de política** herdam e propagam mitos institucionais — que a IA é "objetiva", que vai "revolucionar" a educação, ou que ferramentas de detecção são confiáveis —, o que então modela [[educational-policy-ai|política]], compras e regras de avaliação. A [[trust-calibration|confiança]] que os estudantes desenvolvem é em parte um produto do enquadre institucional que herdam.
- **O público em geral** absorve narrativas de mídia e de fornecedores sobre capacidades e riscos da IA. Como os estudantes aprendem dentro desse discurso, os mitos públicos se tornam o substrato do qual as concepções errôneas dos estudantes crescem. Corrigir concepções errôneas sobre IA é, portanto, uma tarefa de [[ai-literacy|letramento em IA]] voltada a todo o ecossistema educacional, e não apenas a quem aprende.

Essa amplitude é a razão pela qual a base de conhecimento trata concepções errôneas como tema fundacional transversal, e não como puramente voltado a estudantes: os mesmos erros de calibração reaparecem entre quem aprende, professores, instituições e o público, e corrigi-los exige confrontar tanto crenças individuais quanto o discurso que as alimenta.

### Corrigindo concepções errôneas

A correção não é uma divulgação única, mas um processo contínuo de [[ai-literacy|letramento em IA]] que desenvolve [[metacognition|metacognição]] e [[self-regulated-learning|aprendizagem autorregulada]]: ajudar estudantes (e os adultos em torno deles) a monitorar sua dependência, calibrar quando confiar e quando questionar um modelo, e ver o custo de contornar seu próprio trabalho [[cognitive-offloading|cognitivo]]. Como as concepções errôneas são resistentes, elas são melhor abordadas por confronto direto com evidência — incluindo o achado de que os estudantes frequentemente *não percebem* o dano à aprendizagem do uso indevido de IA.

**Texto de refutação é uma técnica central de correção.** Como as concepções errôneas são ativamente sustentadas e resistentes, a estratégia mais direta baseada em evidência é o [[refutation-text|texto de refutação]] — um texto instrucional que declara a concepção errônea, a refuta explicitamente e apresenta a concepção correta. Essa é a mesma família de técnica usada para corrigir as concepções errôneas de domínio estudadas na ciência da aprendizagem, aplicada aqui às crenças dos estudantes sobre a própria IA. A página de conceito [[refutation-text|texto de refutação]] desta base de conhecimento sintetiza como isso se desenrola na [[ai-education|IA em educação]] de três formas complementares:

- **A IA como corretora.** Tutores de [[conversational-ai|IA conversacional]] podem entregar refutação *personalizada*, adaptando a refutação à concepção errônea específica de quem aprende na hora. [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen (2026)]] concluíram que o diálogo personalizado com IA produziu reduções de crença maiores e mais rápidas que a refutação estática estilo livro-texto, com maior [[student-engagement|engajamento]] e confiança — embora a vantagem se esvaísse após dois meses sem reforço.
- **A IA como geradora de conteúdo de refutação.** [[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan (2025)]] concluiu que texto de mudança conceitual/refutação gerado por IA igualou a qualidade escrita por especialistas (e ambos superaram um diálogo interativo por prompt naquele contexto de ciências), mostrando que a IA pode produzir materiais de correção eficazes em escala.
- **Concepções errôneas geradas por IA como recurso de aprendizagem.** Em vez de tratar concepções errôneas geradas por IA como meramente prejudiciais, [[llms-misconception-collaborative-learning-healthcare-2026|Cheah et al. (2026)]] propõem gerar concepções errôneas e abordá-las por discussão estruturada entre pares — uma forma [[collaborative-learning|colaborativa]] de refutação que promove mudança conceitual e [[critical-thinking|pensamento crítico]].

Para concepções errôneas sobre IA, isso significa que a correção deve combinar **confronto direto** (materiais estilo refutação que nomeiam e refutam mitos específicos) com **prática com andaimes** — usando instrução em [[ai-literacy|letramento em IA]] e [[metacognition|metacognição]] para ajudar as pessoas a ver tanto a crença falsa quanto o modelo correto. A evidência adverte que o *formato* importa: a correção personalizada e interativa é mais engajadora e inicialmente mais eficaz, mas precisa de reforço para persistir; e o desfecho medido (conhecimento vs. atitudes vs. competências) modela quão grande um efeito de correção aparece. Como as concepções errôneas abrangem quem aprende e os adultos que modelam a aprendizagem, a correção eficaz precisa alcançar [[teacher-role|professores]], [[administrator|administradores]] e [[educational-policy-ai|formuladores de política]] tanto quanto os estudantes.

Bernstein e Sibia (2026) mostram que analogias geradas por [[generative-ai|IA generativa]] introduzem concepções errôneas estruturais que apenas o conhecimento do domínio-fonte consegue captar ([[student-reception-genai-analogies-computing-2026]]): uma analogia de rota circular para uma lista encadeada implica um laço de volta ao início, e uma analogia de rally de badminton para recursão não carrega nenhuma garantia de entrada que encolhe. Estudantes que conheciam o domínio-fonte identificaram essas falhas e propuseram reparos, enquanto participantes notaram que uma analogia falha ainda pode ser memorável — indicando que uma fonte de analogia familiar pode ajudar quem aprende a detectar, em vez de absorver, uma concepção errônea produzida por IA, e que enquadrar falhas como artefatos deliberados para crítica transforma o risco em oportunidade de avaliação.

**Concepções errôneas geradas por modelo são uma capacidade mensurável, não um acidente.** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] construíram o SocraticTrap-CS, que instruiu sete modelos de pesos abertos a escrever uma "armadilha [[socratic-method|socrática]]" para 35 conceitos centrais de CS — uma explicação fluente e autoritativa que repousa sobre um erro sutil e específico de domínio. Dos 241 segmentos instruídos, 221 (91,7%) foram confirmados como concepções errôneas estratégicas por votação majoritária de especialistas (κ de Fleiss = 0,9487), sem diferenças significativas entre domínios de CS; 66,5% dos erros confirmados eram conceituais em vez de factuais, e nenhum era puramente lógico. A fluência é o mecanismo, e não uma defesa: a persuasividade teve média 3,71 em uma escala de cinco pontos e foi fortemente dependente do modelo, e frequência e severidade se dissociaram, com os dois modelos que produziram armadilhas com mais frequência também avaliados como os mais convincentes. Como uma pergunta mal formulada de um estudante pode ela própria agir como prompt adversarial, os autores tratam a taxa como uma capacidade sob prompting adversarial, e não como uma taxa-base para sessões de estudo comuns — e argumentam que a tarefa de [[ai-literacy|letramento em IA]] se desloca da verificação factual de afirmações individuais para a verificação conceitual e a validação de modelos mentais. Essa é a face mais sombria do uso generativo acima: a mesma capacidade que pode semear discussão produtiva entre pares também pode entrincheirar um erro que quem aprende já estava formando.

### Correções estilo refutação para concepções errôneas comuns sobre IA

Como as concepções errôneas são ativamente sustentadas e resistentes, a forma mais direta de abordá-las — inclusive nesta página — é a estrutura do [[refutation-text|texto de refutação]]: **nomeie a concepção errônea, refute-a explicitamente e declare a concepção correta.** As entradas abaixo aplicam essa estrutura às concepções errôneas mais consequentes sobre IA e sobre aprendizagem, ensino e educação:

**"A IA está sempre certa."** *Isso é uma concepção errônea.* A saída da IA é um completamento probabilístico, não um fato verificado. *A correção:* os LLMs geram texto de som plausível com base em padrões estatísticos; eles podem [[hallucination-risk|alucinar]], ser enviesados e estar confiantemente errados. Trate a saída como um rascunho a ser verificado contra fontes, não como uma autoridade a ser aceita. Esse é o núcleo da [[trust-calibration|calibração da confiança]] e por que "sempre verifique" supera "sempre confie".

**"Usar IA é aprender."** *Isso é uma concepção errônea.* Produzir trabalho *com* IA não é o mesmo que adquirir o conhecimento ou a competência que o trabalho deveria demonstrar. *A correção:* a aprendizagem durável acontece pelos processos esforçados de redação, recordação, revisão e revisão metacognitiva — exatamente os processos que o [[cognitive-offloading|descarregamento cognitivo]] para a IA interrompe. Use a IA como ferramenta ao lado desse esforço, não como substituta dele.

**"A IA é neutra e objetiva."** *Isso é uma concepção errônea.* Os modelos herdam os vieses, lacunas e perspectivas de seus dados de treinamento. *A correção:* a IA pode reproduzir e amplificar [[bias-mitigation|viés]]; trate suas saídas com o mesmo escrutínio crítico de fontes que você aplicaria a qualquer outro texto. A consciência disso faz parte do [[ai-literacy|letramento em IA]] e ajuda a contrabalançar os danos de [[equity-in-ai-education|equidade]] da adoção acrítica.

**"A IA vai substituir os professores."** *Isso é uma concepção errônea.* A IA aumenta, mas não desloca o trabalho [[pedagogy|pedagógico]] dos [[teacher-role|professores]] — julgamento, contextualização e as dimensões relacionais e [[ethics|éticas]] do ensino. *A correção:* a IA aumenta a necessidade de mediação pedagógica e julgamento crítico; professores que entendem IA se tornam mais eficazes, não obsoletos. Esse reenquadramento importa porque modela se as instituições investem em [[teacher-ai-competency|competência de IA docente]] ou resistem reflexivamente ou adotam em excesso.

**"A IA entende como uma pessoa."** *Isso é uma concepção errônea.* Os modelos não têm intenção, memória de você ou compreensão genuína do seu contexto. *A correção:* antropomorfizar a IA leva à confiança excessiva e à dependência de explicações que o modelo não consegue de fato ancorar. Mantenha a fronteira clara: a IA é uma ferramenta poderosa, não uma mente.

**"A IA vai transformar a educação automaticamente."** *Isso é uma concepção errônea.* A tecnologia sozinha não muda a aprendizagem; é a pedagogia em torno dela que muda. *A correção:* os benefícios da IA dependem de [[learning-design|desenho instrucional]] intencional, preparo docente e apoio institucional — não de simplesmente implantar a ferramenta. É por isso que [[ai-ed-evaluation|evidência]] e [[research-methods-aied|avaliação rigorosa]] importam, e por que esta base de conhecimento enquadra o uso responsável de IA como questão de [[governance|governança]] e de [[educational-policy-ai|política educacional]], e não como puramente técnica.

**"Um prompt deveria me dar a resposta."** *Isso é uma concepção errônea.* A saída é não determinística e sensível ao prompt. *A correção:* espere iterar, refinar e cruzar; a "lacuna de prompting" — confundir primeiros resultados rasos com o teto da ferramenta — é um problema de competência, não um limite da ferramenta. Desenvolver isso faz parte do [[prompt-engineering|prompt engineering]].

**"Não é colar se uma pessoa não escreveu."** *Isso é uma concepção errônea.* Integridade acadêmica trata da produção honesta e atribuível de trabalho, não apenas de não copiar uma pessoa. *A correção:* a submissão não divulgada de conteúdo gerado por IA pode violar a [[academic-integrity|integridade acadêmica]] mesmo quando nenhum humano foi copiado; a questão é se o trabalho é genuinamente de quem aprende. Em caso de dúvida, divulgue e verifique a política da sua instituição.

Essas refutações são deliberadamente escritas na forma do [[refutation-text|texto de refutação]] para que elas mesmas possam ser usadas (ou adaptadas para [[conversational-ai|diálogo interativo com IA]]) para confrontar e corrigir concepções errôneas sobre IA — e sobre aprendizagem, ensino e educação de forma mais ampla.

## Conceitos conectados

- [[pedagogical-patterns]] — As sequências de mudança conceitual que confrontam uma crença específica sustentada
- [[learners]] — Quem aprende: o guarda-chuva dos conceitos do lado de quem aprende
- [[ai-literacy]]
- [[trust-calibration]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[generative-ai]]
- [[student-experience]]
- [[framing-ai-use-for-students]]
- [[refutation-text]]
- [[teacher-role]]
- [[educational-policy-ai]]
- [[trust]]

## Artigos conectados
- [[rudolph-ai-myths-critical-higher-ed]] — Não acredite no hype: oito mitos sobre IA e a necessidade de uma abordagem crítica no ensino superior
- [[student-rationalization-ai-writing]] — A racionalização estudantil da escrita com IA
- [[genai-skill-bypass-literacy]] — Bypass de competência e letramento em IA generativa
- [[trust-reliance-ai-education-2026]] — Confiança e dependência na educação com IA
- [[contextual-sycophancy-ai-literacy]] — Adulação contextual e letramento em IA
- [[sycophantic-ai-social-interaction-2026]] — IA aduladora na interação social
- [[llm-fallacy-misattribution]] — Atribuição errônea da falácia do LLM (Kim et al.)
- [[student-reception-genai-analogies-computing-2026]] — Falhas, mas memoráveis: a recepção crítica dos estudantes de analogias de IA generativa personalizadas por interesse na educação em computação
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: explicações fluentes e autoritativas que são conceitualmente erradas em vez de factualmente erradas (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Instruções escondidas em um arquivo submetido podem elevar uma nota corrigida por IA sem aviso visível (Humble 2026)
- [[children-ai-safety-misconceptions-2026]] — Concepções errôneas de crianças sobre segurança de IA: amizade com um robô lida como garantia de privacidade (Leisten et al. 2026)
