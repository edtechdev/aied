---
connected_resources: [master-instructional-design]
title: "Aprendizagem no trabalho"
created: "2026-08-09T10:44:35-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [ai-literacy, educational-development]
technology: [generative-ai, llm, simulation]
pedagogy: [lifelong-learning]
audience: [instructors, administrators, learners]
level: [adult learning, higher ed]
confidence: high
translation_of: concepts/professional-training
source_updated: "2026-10-28T16:44:25-04:00"
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

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

> **Aprendizagem no trabalho** — o uso de IA para desenvolvimento da força de trabalho, aprendizagem corporativa e aquisição de habilidades profissionais. A formação profissional estende a [[ai-education|IA na educação]] além da escolarização formal para contextos de trabalho e de [[lifelong-learning|aprendizagem ao longo da vida]].

## Perguntas para considerar

- Pense em uma habilidade que você aprendeu no trabalho em vez de em uma sala de aula. O que tornou essa aprendizagem no trabalho eficaz, e como um treinador de IA poderia replicá-la ou melhorá-la?
- O framework de [[career-development-and-readiness|Nível de Prontidão para o Trabalho]] da página sugere que as etapas mais altas de competência são "controladas por experiência incorporada à indústria, e não por cursos". O que isso implica para como deveríamos treinar pessoas — e para os limites da [[simulation|simulação]] com IA?
- Pacientes virtuais e simuladores de treinamento permitem que profissionais pratiquem com segurança. Que tipos de julgamento e habilidades interpessoais um simulador poderia ter dificuldade de capturar, por mais realista que seja?
- O "Problema do Trem Duplo" é a tensão entre as habilidades de IA que mudam rapidamente e o ritmo mais lento da política e do [[curriculum-design|currículo]]. Se você pudesse escolher competências duráveis para priorizar para quem aprende hoje, quais seriam?
- Adultos equilibram trabalho e estudo, muitas vezes por telas. Como a formação profissional potencializada por IA poderia tanto habilitar quanto complicar esse equilíbrio — especialmente em torno de dados, confiança e tempo?

## Introdução

### IA na formação profissional

- **Simulação e prática:** o [[adaptive-virtual-patient-psychotherapy-training|treinamento com pacientes virtuais]] e os [[astra-atco-training-simulator|simuladores de treinamento de ATCO]] criam ambientes de prática profissional potencializados por IA. Na [[teacher-education|formação de professores]], a simulação de encenação de papéis com IA estende isso ao ensino baseado na prática: o [[zhuang-zhang-chatgpt-math-teacher-education-2026|Student GPT]] simulou um estudante de matemática do ensino fundamental 2 portador de [[misconceptions|mal-entendido]] para que professores em formação pudessem praticar diagnosticar e remediar erros de estudantes, alinhando-se às "aproximações da prática" da aprendizagem de [[teacher-role|professores]] baseada na prática como complemento acessível a plataformas caras como o TeachLivE.

[[ai-coaching-rl-skill-development|Wang et al. (2026)]] acrescentam uma lição de política de treinamento: reduzir a assistência contra a competência estimada de quem aprende cortou o tempo de volta no simulador em 27,9% (p = 0,005) e as falhas em 3,52 por volta, enquanto a redução baseada em regras em uma programação fixa não produziu mudança confiável no tempo de volta.
- **Integração com a aprendizagem ao longo da vida:** a [[lifelong-learning|aprendizagem ao longo da vida]] e a [[research-methods-aied|pesquisa]] em [[adult-learning|aprendizagem de adultos]] conectam a formação profissional à educação contínua.
- **Um ensaio voluntário, apenas em texto, não moveu nada.** De 201 estudantes de medicina do primeiro ano a quem se ofereceu um paciente GPT-4o antes da primeira aula com paciente padronizado, 49 o usaram, e nervosismo, preparação, autoeficácia e competência autopercebida não diferiram dos 84 controles; 6 de 19 não usuários que deram uma razão citaram problemas técnicos ou de login ([[jongkind-genai-patient-medical-communication-2026|Jongkind et al. (2026)]]).
- **Setor público:** a [[ai-adoption-training-public-sector|adoção de IA no setor público]] examina o treinamento em contextos de governo.
- **Frameworks de prontidão para o trabalho:** [[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al.]] propõem um framework de Nível de Prontidão para o Trabalho (WRL) que adapta a escala de Nível de Prontidão Tecnológica a nove etapas de competência pontuadas ao longo de quatro pilares (letramento digital e em [[ai-literacy|IA]], fluência ciberfísica, [[human-ai-collaboration|colaboração humano-máquina]], tomada de decisão movida por dados), sob uma regra de "nenhum pilar fino". Evidências de trabalhos de conclusão em manufatura inteligente mostra que as etapas mais altas de prontidão são controladas por experiência incorporada à indústria, e não por cursos — apontando a aprendizagem integrada ao trabalho como essencial para a formação profissional em IA.
- **As prioridades de instrutores e empregadores divergem.** Uma pesquisa com 500 instrutores dos EUA e um painel de empregadores concordou sobre a importância de apenas uma de 26 habilidades de IA — definir expectativas realistas para trabalho potencializado por IA —, e apenas três das 26 eram ensinadas por metade ou mais dos instrutores ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).
- **A evidência de DP [[discipline-specific-aied|específica de domínio]] é escassa.** Uma [[li-language-educators-genai-review-2026|revisão sistemática de educadores de línguas]] (Li et al. 2026) concluiu que apenas três de 23 estudos relataram [[educational-development|desenvolvimento profissional]] estruturado, mas os que relataram convergiram em ganhos de conhecimento, confiança e identidade — evidência de que a formação estruturada e específica de domínio (pareando habilidade técnica com sabedoria prática) é ao mesmo tempo escassa e eficaz, e de que a DP deveria ir da sensibilização e da ética ao domínio prático de ferramentas e ao codesign de aulas potencializadas por IA.
- **O desenvolvimento profissional de formadores de professores como construção de modelo:** [[adaptive-ai-model-teacher-educators-2025|Eyal (2025)]] conduziu um curso de um ano com 180 horas em que 22 formadores de professores do ensino superior codesenharam o Modelo de Letramento em Inteligência Artificial Adaptativa, substituindo escadas fixas de competência por três eixos inter-relacionados (adequação ao contexto, necessidades profissionais, desenvolvimento dinâmico) e um questionário reflexivo de autoavaliação de 20 itens. A premissa do design é que o letramento em IA é situacional: um professor em formação em um contexto com recursos limitados, um professor de disciplina e um diretor precisam de competências diferentes, de modo que o desenvolvimento profissional deveria mirar o julgamento específico de papel em vez de uma rubrica padronizada.
- **O que o treinamento deveria mirar:** a base de medição do campo está atrás da tecnologia que ele descreve. Em uma revisão sistemática de 33 instrumentos de letramento em IA de professores, [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore e Maat (2026)]] concluíram que 29 (87,9%) miravam conceitos gerais de IA, enquanto apenas quatro (12,1%), todos publicados em 2025, tratavam da IA generativa. Se os instrumentos rastreiam o que o treinamento deve construir, essa distribuição marca a competência em IA generativa no ensino como o alvo menos medido e mais urgente para o desenvolvimento profissional.
- **Previsão de força de trabalho:** [[ai-engineering-computing-workforce-grey-literature-2026|Fletcher et al.]] revisam a literatura cinzenta dos EUA sobre IA e a força de trabalho de engenharia/computação, enquadrando o "Problema do Trem Duplo" (mudança rápida versus política urgente) e recomendando que o [[higher-ed|ensino superior]] priorize competências duráveis de IA, [[ethics|ética]] e [[governance|governança]], e credenciais baseadas em habilidades alinhadas a papéis emergentes (por exemplo, [[prompt-engineering|engenharia de prompts]], auditoria de IA, [[educational-policy-ai|política de IA]]) para sustentar trabalho centrado no humano em uma economia automatizada.
- **Designs sustentadores de habilidade perdem sob métricas de produtividade.** [[skill-sustaining-reliance-reflective-ai-engagement-2026|de Jong (2026)]] argumenta que a interação reflexiva contradiz a promessa de decisões mais rápidas e maior produtividade que move a adoção de IA no trabalho profissional: um estudo controlado pode absorver o atrito, um ambiente que mede desempenho por velocidade ou quantidade não pode, e onde rivais oferecem apoio equivalente sem atrito, designs sustentadores de habilidade se tornam uma desvantagem competitiva — um problema que o artigo diz talvez pertencer à política organizacional ou ao governo, e não ao design de interação.
- **Avaliação oral para capacidade no trabalho.** Um estudo de design de TVET enfrenta um descompasso antigo entre avaliação pesada em texto e as capacidades verbais e situacionais que as qualificações profissionais certificam, usando um [[llm|LLM]] para apoiar a avaliação oral interativa. Ao longo de quatro coortes, o formato de voz foi considerado realista por 21 de 33 aprendizes, sem nenhuma resposta discordante sobre sua vantagem sobre um [[eportfolio|portfólio]] escrito, e o sistema rodou totalmente off-line em um laptop para até 12 aprendizes simultâneos, apagando as gravações após 90 dias e deixando a pontuação para os avaliadores ([[ai-supported-oral-assessment-tvet-2026]]). É um exemplo concreto de a IA ampliar a gama de competência avaliável na formação profissional, em vez de apenas automatizar os formatos escritos existentes. Suas coortes, no entanto, eram turmas de Nível 3 de automotiva e engenharia, de modo que a evidência está na [[vocational-education|oferta vocacional inicial]], e não na requalificação no trabalho que esta página cobre.

- **A reunião é onde a compreensão se torna avaliável.** Quando uma ferramenta generativa redige a análise, um relatório de pesquisa polido já não mostra se o treinando compreende o trabalho, de modo que [[prunuske-cognitive-windows-research-meetings-2026|Prunuske e Adams-Phillips (2026)]] propõem três janelas diagnósticas para reuniões de pesquisa (calibração metacognitiva, explicação conceitual e construção de sentido colaborativa) com prompts que trazem à tona o que um resumo deixou de fora.
- **Condições institucionais, e não contexto nacional, explicam as lacunas de prontidão.** Uma pesquisa comparativa com 568 professores universitários em
  centros de desenvolvimento docente chineses (n = 340) e cazaques (n = 228) ([[faculty-development-centers-genai-training-optimization-2026|Bi, Araily, Lyu e Xiu, 2026]])
  concluiu que o corpo docente cazaque estava à frente em todas as sete dimensões de prontidão para [[generative-ai|IA generativa]] na linha de base, com as maiores lacunas em
  transferência disciplinar, design de prompts e avaliação com apoio de IA. A regressão hierárquica desmontou a explicação nacional: a
  diferença entre países caiu acentuadamente uma vez que o uso prévio de IA generativa e o treinamento recente entraram no modelo, e se tornou não significativa — uma redução
  de 80% — uma vez acrescentados apoio institucional, permissão percebida para experimentar, acesso a recursos [[multilingual-learning|multilíngues]],
  clareza de política e sensibilidade a riscos. A exposição estava desigualmente distribuída (uma clara maioria do corpo docente cazaque tinha treinamento em IA
  nos últimos seis meses, contra cerca de um quarto do corpo docente chinês), e o corpo docente chinês relatou tanto maior clareza
  de política quanto maior sensibilidade a riscos. O treinamento estruturado de tarefas de prompt superou a familiarização convencional com IA generativa no pós-teste
  de design de prompts por uma margem ampla. A prontidão do corpo docente, nessa evidência, é produzida por provisão e permissão — o que um centro
  oferece e o que ele permite —, e não pelo sistema nacional em que se situa.

- **Treinamentos breves deslocam julgamentos, não intenções.** Um piloto pré-pós de três horas com 100 professores alemães ([[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller e Böhme, 2026]]) concluiu que a utilidade percebida (d = 0,32) e a facilidade de uso percebida (d = 0,25) subiram significativamente após uma breve sessão prática sobre IA para diferenciação, enquanto a intenção comportamental não se moveu de uma linha de base já alta (M = 3,07). Os autores leem a lacuna como sinal de que a aceitação depende de condições que uma sessão não consegue fornecer, como tempo, infraestrutura e regras institucionais claras. Formatos curtos valem a pena, mas pareá-los com essas condições é o que transforma julgamento favorável em uso.
- **Monitoramento sustentado, e não oficinas pontuais, para a formação inicial.** Uma revisão sistemática de 11 estudos de IA na formação inicial de professores de matemática do primário ([[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto et al., 2026]]) concluiu que nove intervenções eram uma sessão única ou algumas sessões embutidas em cursos existentes, que as atitudes eram em geral amostradas uma única vez a posteriori, e que a ética apareceu em apenas três estudos. Os autores argumentam que a competência em IA precisa se desenvolver ao longo de toda a sequência de formação, de uma fase preparatória para a prática docente e os primeiros anos de exercício, com monitoramento que acompanhe essa progressão.
- **Exposição e repetição, e não dados demográficos, acompanham percepções favoráveis.** Em um estudo de métodos mistos com 302 professores de matemática do primário turcos ([[cigerci-primary-teachers-perceptions-ai-mathematics-2026|Ciğerci e Uygun, 2026)]], o treinamento prévio em IA (t = 3,661) e a frequência de uso de IA (F = 41,280) foram as variáveis mais consistentemente associadas a visões positivas, enquanto disposição (M = 3,98) e atitudes (M = 3,82) ficaram bem acima da experiência pessoal (M = 3,00). Os autores tratam o treinamento prévio como a alavanca mais clara sobre a qual escolas podem agir, o que aponta para o uso repetido e sustentado em vez de uma única introdução.
- **A rotação de papéis como estrutura de sustentação.** Um estudo baseado em design com 62 psicólogos educacionais em formação no Cazaquistão ([[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al., 2026]]) rotacionou estudantes por quatro posições profissionais ao longo de oito semanas, com a IA generativa fornecendo ideias preliminares. Os autores argumentam que o valor estava na rotação, e não na ferramenta, já que cada papel enquadrava o mesmo caso de forma diferente, e ciclos posteriores mostraram mais pedidos de justificativa teórica. Eles relatam engajamento, e não ganhos medidos, não tendo coletado medidas de competência pré-pós.

### Distinta da educação acadêmica

A formação profissional difere da educação acadêmica em seu foco em habilidades aplicadas, relevância imediata para o trabalho e características de quem aprende na vida adulta. A teoria da [[adult-learning|aprendizagem de adultos]] e os princípios da [[adult-learning|andragogia]] informam o design da formação profissional em IA. Sua outra fronteira é a [[vocational-education|educação e formação profissional]]: a EFP admite pessoas que ainda não detêm a ocupação e se encerra com uma qualificação de ofício ou técnica, de modo que carrega a preparação ocupacional inicial e os frameworks de qualificação que a certificam, enquanto a formação profissional parte de um papel existente — requalificação, educação profissional continuada ou certificação de fornecedor — e presume a competência que a EFP outorga.

**A regeneração da expertise como preocupação de treinamento.** O framework dos Bens Comuns Cognitivos ([[cognitive-commons-ai-expertise-regeneration|Lovett 2026]]) argumenta que o DRH precisa ir além da requalificação organizacional para a administração em nível de profissão: eliminar posições desenvolvimentais de entrada em setores expostos à IA pode esgotar o pool compartilhado de expertise do qual todas as organizações dependem, com um efeito atrasado no tempo que só aparece após 5 a 20 anos. Isso resignifica a formação profissional de desenvolvimento de competência individual para manutenção de bens comuns coletivos.
**Pareie a produção com IA a verificação, e busque medidas externas.** [[crewscaler-ai-upskilling-framework|Nguyen et al. (2026)]] colocam verificações automatizadas de alucinação e uma auditoria por especialistas no domínio entre a redação e a entrega ao longo de um pipeline de requalificação de cinco etapas, e apoiam as afirmações mais fortes do framework na acreditação CPE da NASBA e em uma prova de certificação de fornecedor, e não em medidas de sucesso autodefinidas.

## Ideias equivocadas comuns

**"O curso produz competência ocupacional."** O framework desta página coloca os estágios de competência mais altos atrás da experiência embutida na indústria, e não do curso, o que é um limite real do que um programa de treinamento pode reivindicar. Um curso pode construir os pré-requisitos; o estágio bloqueado precisa do trabalho.

**"Desvanecer o apoio em um cronograma equivale a desvanecê-lo com base em evidências."** Não equivale. Desvanecer a assistência conforme a *competência estimada* do aprendiz cortou o tempo de volta no simulador em **27,9% (p = 0,005)** e as falhas em **3,52 por volta**, enquanto o desvanecimento baseado em regras num cronograma fixo não produziu mudança confiável. A mesma quantidade de apoio, liberada segundo um sinal diferente, é uma intervenção diferente.

**"O treinamento em letramento em IA se generaliza entre papéis."** A maioria dos instrumentos não mede competência específica do papel: em uma revisão sistemática de **33 instrumentos de letramento em IA de professores**, **29 (87,9%)** visavam conceitos gerais de IA enquanto apenas **4 (12,1%)** tratavam do uso pedagógico ou ocupacional que o trabalho de fato exige. Um programa construído sobre instrumentos gerais está medindo um proxy.

**"Um simulador substitui o treinamento no local de trabalho."** Ele desenvolve procedimento e remove a consequência, o que é valioso e é exatamente a parte que não pode ser transferida — a consequência é o currículo no trabalho crítico de segurança.

## Conceitos conectados
- [[lifelong-learning]]
- [[adult-learning]]
- [[vocational-education]]
- [[educational-development]]
- [[ai-literacy]]
- [[simulation]]
- [[higher-ed]]
- [[generative-ai]]
- [[llm]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[virtual-and-augmented-reality]] — onde a prática imersiva está mais estabelecida

## Artigos conectados
- [[prunuske-cognitive-windows-research-meetings-2026]] — Das atualizações de dados às janelas cognitivas: reuniões de pesquisa na era da inteligência artificial
- [[ai-engineering-computing-workforce-grey-literature-2026]] — IA e o futuro da força de trabalho de engenharia e computação
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Framework de Nível de Prontidão para o Trabalho para manufatura inteligente na era da IA
- [[crewscaler-ai-upskilling-framework]]
- [[ai-coaching-rl-skill-development]]
- [[adaptive-virtual-patient-psychotherapy-training]]
- [[astra-atco-training-simulator]]
- [[ai-adoption-training-public-sector]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Framework de habilidades de IA da HiBob validado com instrutores e empregadores
- [[cognitive-commons-ai-expertise-regeneration]] — A tragédia dos bens comuns cognitivos: IA e regeneração da expertise
- [[li-language-educators-genai-review-2026]] — Práticas e desenvolvimento de educadores de línguas com IA generativa
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[faculty-development-centers-genai-training-optimization-2026]] — Pesquisa comparativa mostrando que condições institucionais, e não contexto nacional, explicam as lacunas de prontidão do corpo docente para IA generativa (Bi et al. 2026)
- [[adaptive-ai-model-teacher-educators-2025]] — Formadores de professores codesenham um modelo de letramento em IA adaptativo e um questionário reflexivo (Eyal 2025)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Revisão mostrando que os instrumentos de letramento em IA de professores estão atrás da IA generativa, marcando o alvo de treinamento (Zainal et al. 2026)
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]] — DP de três horas elevou a utilidade e a facilidade de uso percebidas de professores alemães, mas não a intenção de usar IA para diferenciação
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — Revisão de IA na formação inicial de professores de matemática do primário: treinamento breve focado em ferramentas não basta
- [[cigerci-primary-teachers-perceptions-ai-mathematics-2026]] — Pesquisa ligando treinamento prévio em IA e frequência de uso às percepções positivas de professores do primário turcos
- [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026]] — A rotação de papéis como mecanismo estruturante da preparação profissional com apoio de IA
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Questões abertas rumo à confiança sustentadora de habilidade no engajamento reflexivo com IA
- [[jongkind-genai-patient-medical-communication-2026]] — Uso de um paciente de GenAI para treinamento de comunicação médica de estudantes de graduação em medicina: um estudo quase-experimental
