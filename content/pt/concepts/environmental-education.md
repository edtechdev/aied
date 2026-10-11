---
title: "Educação ambiental"
created: "2026-09-20T12:40:00-04:00"
updated: "2026-09-20T12:40:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [inquiry-based-learning, situated-learning, critical-pedagogy]
technology: [generative-ai, llm, open-source]
ethics: [sustainability, ethics, global-south]
institutions: [educational-policy-ai, governance]
discipline: [environmental education]
confidence: medium
translation_of: concepts/environmental-education
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

## Perguntas para refletir

- \"IA e educação ambiental\" pode significar duas coisas muito diferentes: usar a IA para ensinar *sobre* clima e sustentabilidade, e reduzir o custo ambiental de *usar IA* nas salas de aula. Qual delas você ouve na sua instituição — e qual delas tem uma linha de orçamento vinculada?
- Se uma universidade ensina ciências do clima com um [[llm|grande modelo de linguagem]] intensivo em energia em cada laptop de estudante, ela avançou a educação ambiental ou a minou? O que teria que ser verdade para a resposta ser \"ambas\"?
- [[ai-assisted-inquiry-ssi-climate|Um experimento]] concluiu que a investigação assistida por IA melhorou a tomada de decisões sobre o clima em relação à investigação sozinha, com ganhos concentrados nas etapas mais fracas. Você confiaria em uma unidade climática apoiada por IA na sua sala de aula, e o que precisaria ver primeiro?
- Praticamente nenhum artigo de [[ai-education|IAED]] relata sua pegada de computação ou de carbono. O impacto de [[sustainability|sustentabilidade]] não relatado é um problema de pesquisa, um problema de aquisição, um problema de ensino, ou nenhum desses?

## Introdução

A **educação ambiental** desenvolve a compreensão dos sistemas ecológicos, do clima e da interdependência entre humanos e ambiente por parte de quem aprende, junto com as disposições e competências para agir sobre eles — frequentemente enquadrada institucionalmente como Educação para o Desenvolvimento Sustentável (EDS) ou \"educação verde\". No contexto da IA na educação, o termo carrega uma tensão com que o corpus se depara sem sempre nomear: **a IA como ferramenta para a educação ambiental** (ensinar conteúdo de clima e sustentabilidade com ferramentas generativas) e **a pegada ambiental da própria IA** (o custo em carbono, água e energia dos modelos que as instituições implantam). São perguntas diferentes, com evidências, atores e remédios diferentes; confundi-las — como vários artigos e a maioria dos documentos de estratégia fazem — torna impossível dizer quem é responsável pelo quê.([[daniel-ai-sustainability-scoping-review-2026]])([[aied-carbon-footprint-reporting]])

## Duas coisas chamadas \"educação ambiental com IA\"

- **IA para a educação ambiental** — usar a IA para ensinar conteúdo ambiental, construir consciência de sustentabilidade ou apoiar habilidades verdes. Essa metade tem frameworks, um estudo de pesquisa com [[teacher-role|professores]] e um experimento de sala de aula.
- **A pegada da IA na educação** — emissões e uso de recursos dos modelos e da infraestrutura usados no ensino, seja qual for a matéria. Essa metade tem uma revisão da prática de relato, um [[benchmark]] de engenharia e um pequeno estudo de interface — e nada sobre a pegada da IA usada especificamente para a educação ambiental.

Uma terceira vertente, mais fraca, trata a \"aprendizagem sustentável\" como uma propriedade [[pedagogy|pedagógica]] em vez de ambiental: aprendizagem que persiste e se transfere, em vez de ser curto-circuitada pelo [[cognitive-offloading|deslocamento cognitivo]]. Ela compartilha o vocabulário da sustentabilidade, mas não é uma afirmação ambiental.([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])

## Ensinar temas ambientais e climáticos com IA

A evidência mais forte é um quase-experimento de três grupos que usa a mudança climática como questão sociocientífica. Estudantes que trabalhavam com um parceiro de IA dentro de uma tarefa estruturada de [[inquiry-based-learning|investigação]] superaram os pares apenas com investigação (d = 0,69) e o ensino tradicional (d = 1,88) em uma rubrica de tomada de decisões, com os maiores ganhos nas etapas em que os estudantes entravam mais fracos — monitoramento e gestão adaptativa, e geração de alternativas. A condição com IA era *adicional* à investigação, e não uma substituição, e a coleta e a análise de dados não separaram os grupos de forma alguma, sugerindo que a IA apoiou o raciocínio sobre trade-offs em vez da reunião de evidências.([[ai-assisted-inquiry-ssi-climate]])

No nível do [[curriculum-design|currículo]], o framework AI-SEE integra a IA por todo um [[engineering-education|currículo de engenharia]] em quatro pilares (dirigido por inteligência, empoderado pelo verde, liderado pela responsabilidade, integrado à prática), em vez de como um módulo de sustentabilidade acoplado; um piloto com 144 estudantes relatou ganhos em consciência de sustentabilidade e [[student-engagement|engajamento]] comportamental nos níveis pessoal, acadêmico, profissional e social. Os autores alertam que se trata de evidência de entrevista de uma única instituição, autorrelatada e de um único momento, de um programa chinês de transportes.([[liu-ai-sustainable-engineering-education-2026]])

Dois estudos menores cobrem o lado do desenho. O [[learning-design|desenho instrucional]] assistido por IA sob restrições da Pedagogia do Desenvolvimento Sustentável melhorou os planos de aula de professores pré-serviço com um efeito implausivelmente grande (d = 2,80, 28 equipes, sem grupo de controle). Separadamente, um estudo por equações estruturais com 122 professores em serviço concluiu que o uso *prático* da IA em tarefas de ciências e energia verde, somado ao envolvimento no desenvolvimento de materiais alinhados à EDS, predizia a capacidade de integração da IA, enquanto o conhecimento abstrato e as atitudes em relação à IA não o faziam — embora um [[self-report-measures|questionário]] dicotômico e um construto de conhecimento fraco limitem até onde o resultado se transporta.([[talebzadeh-ai-green-education-2026]])([[riandi-teacher-ai-green-energy-education-2026]])

## A pegada ambiental da IA na educação

Essa metade é onde o corpus é mais fino. Uma revisão de todos os 396 artigos dos anais da AIED 2025 concluiu que há \"adoção de LLMs sem divulgação\": a maioria dos projetos usa [[llm|LLMs]], 85 artigos relataram algum custo computacional e apenas 57 mencionaram impacto ambiental — usando métricas incompatíveis, de modo que o campo não consegue agregar sua própria evidência. Os autores argumentam que deixar de relatar o custo ambiental é, por si só, uma preocupação [[ethics|ética]] e propõem um método [[open-source|de código aberto]] (CodeCarbon mais uma estimativa de FLOPs de dois parâmetros para modelos proprietários).([[aied-carbon-footprint-reporting]])

Do lado de quem aprende, uma interface de eco-feedback que expõe o trade-off entre latência e carbono durante o uso ao vivo de LLMs foi estudada com 89 estudantes de graduação em ciência da computação em um curso de ética da computação: os estudantes escolheram o modo de menor carbono em cerca de 45% das interações de baixa latência, mas em menos de 5% na latência alta, e a consciência de sustentabilidade elevou significativamente essa escolha. A amostra é pequena e incomumente bem informada do ponto de vista técnico, mas é a única evidência direta no corpus de que a informação sobre pegada move quem aprene de algum modo — e sugere que a restrição vinculante é a paciência, não os valores.([[llm-environmental-impact-student-usage-2026]])

A evidência de mitigação vem de um assistente de base de conhecimento de [[cs-education|computação]] no local, em uma única GPU de consumo (12 GB de VRAM), com conteúdo de licença aberta: 1,8 mWh por consulta na melhor hipótese — cerca de 0,54 Wh para uma turma de 30 estudantes enviando dez consultas cada — com ajuste fino ciente de quantização contendo tanto a perda de precisão quanto a alta de [[hallucination-risk|alucinação]] que a compressão isolada causava. É um benchmark de engenharia, não um estudo de aprendizagem, mas mostra que a questão da pegada tem alavancas de desenho (fundamentação, quantização, local de implantação), e não apenas alavancas de disciplina de uso.([[shen-sustainable-ai-knowledge-base-cs-education-2026]])

## Habilidades verdes, consciência de sustentabilidade e capacidade docente

Juntos, esses estudos descrevem uma agenda de habilidades verdes entregue de forma desigual: a consciência de sustentabilidade como resultado curricular, o desenvolvimento de material alinhado à EDS como mecanismo da capacidade docente, e a tomada de decisões sobre o clima como habilidade de raciocínio mensurável. A vertente de crítica de valor fornece a ressalva: uma análise conceitual argumenta que a contribuição da IA para a educação sustentável é **condicional e mediada pela governança**, apoiando a sustentabilidade apenas quando a adoção é subordinada a valores educacionais explícitos e a propósitos centrados no humano — o que coloca a [[governance|governança]] e a [[critical-pedagogy|pedagogia crítica]] dentro da educação ambiental, e não ao lado dela.([[alsuhaymi-sustainable-education-ai-digitalization-2026]])

A [[meta-analysis-systematic-review|revisão de escopo]] que organiza essa literatura fornece o veredicto do próprio campo sobre escala: as aplicações se agrupam em torno de gestão de energia, monitoramento climático e programas de campus verde, mas são limitadas em escala, frequentemente carecem de diretrizes éticas ou ambientais, e boa parte da pesquisa permanece conceitual ou de piloto pequeno. A cobertura é enviesada para a América do Norte e a Europa, com quase nada do [[global-south|Sul Global]] além de alguns estudos sul-africanos.([[daniel-ai-sustainability-scoping-review-2026]])

## O que a evidência ainda não estabelece

- **Nenhuma evidência de pegada para a educação ambiental especificamente.** Os números de carbono e energia vêm de estudos gerais de LLM e de um benchmark em contexto de computação; nada mede o custo ambiental de um currículo climático ou de EDS apoiado por IA.
- **Nenhuma evidência de ganho de aprendizagem para intervenções de pegada.** O eco-feedback mudou escolhas em um estudo de laboratório; nada mostra que ele muda hábitos, resultados de avaliação ou aquisição.
- **Nenhuma evidência causal para os frameworks curriculares.** O AI-SEE é um caso autorrelatado de um único local e o E3-HOT um projeto com nenhum estudo implementado; o resultado de desenho de aula da PDS não tem grupo de controle.
- **Nenhuma evidência de grande escala ou entre contextos.** Todo resultado empírico aqui é de um único local, e os estudos com professores repousam sobre amostras pequenas e intencionais com instrumentos fracos.
- **As duas metades raramente são estudadas juntas**, embora ambas incidam sobre a mesma sala de aula.

## Implicações para a IA na educação

1. **Nomeie qual pergunta você está respondendo.** Estratégias que usam \"sustentabilidade\" tanto para o ensino do clima com IA quanto para a pegada da própria IA escondem a lacuna de responsabilização que [[daniel-ai-sustainability-scoping-review-2026|Daniel et al. (2026)]] identificam; mantenha as agendas separadas, com responsáveis separados.
2. **Trate a divulgação da pegada como infraestrutura do campo.** Relatar computação e carbono ao lado da precisão — com uma declaração de sustentabilidade mesmo quando a mensuração é imperfeita — é a única saída do problema das métricas incompatíveis.
3. **Desenhe para quem aprene é impaciente.** Se a opção de menor carbono custa latência percebida, a maioria dos estudantes não a escolherá: mantenha a latência baixa, exponha controles e descreva o impacto em termos de resultado concretos, não em unidades abstratas de carbono.
4. **Prefira implantações mais leves onde a pedagogia permitir.** Fundamentar um modelo em um corpus local licenciado e quantizar com ajuste fino deu precisão utilizável a uma fração da energia — reutilize esse padrão antes de escalar a inferência em nuvem.
5. **Construa capacidade docente por meio do desenvolvimento de material, não de campanhas de conscientização**, e preencha a lacuna do [[global-south|Sul Global]] em vez de importar evidências dos contextos norte-americano e europeu.

## Conceitos conectados

- [[sustainability]]
- [[global-south]]
- [[critical-pedagogy]]
- [[inquiry-based-learning]]
- [[science-education]]
- [[engineering-education]]
- [[teacher-education]]
- [[curriculum-design]]
- [[ethics]]
- [[governance]]

## Artigos conectados

- [[daniel-ai-sustainability-scoping-review-2026]] — Separa a IA para a sustentabilidade da IA sustentável; lacuna do Sul Global
- [[ai-assisted-inquiry-ssi-climate]] — Investigação climática assistida por IA, d = 0,69 sobre a investigação sozinha
- [[aied-carbon-footprint-reporting]] — Revisão da divulgação na AIED 2025 mais um método de código aberto para a pegada
- [[llm-environmental-impact-student-usage-2026]] — Eco-feedback sobre trade-offs de latência–carbono com 89 estudantes de computação
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Assistente quantizado no local a 1,8 mWh por consulta
- [[liu-ai-sustainable-engineering-education-2026]] — AI-SEE: consciência de sustentabilidade na educação em engenharia
- [[riandi-teacher-ai-green-energy-education-2026]] — O uso prático da IA e o desenvolvimento de material de EDS predizem a integração
- [[talebzadeh-ai-green-education-2026]] — Desenho assistido por IA sob restrições da Pedagogia do Desenvolvimento Sustentável
- [[alsuhaymi-sustainable-education-ai-digitalization-2026]] — A contribuição da IA para a educação sustentável como mediada pela governança
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — A \"aprendizagem sustentável\" como agência cognitiva duradoura, não uma afirmação ambiental
