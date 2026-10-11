---
title: "Níveis de ensino"
created: "2026-09-20T13:08:39-04:00"
updated: "2026-09-28T21:44:10-04:00"
type: concept
foundations: [ai-education, learner-identity]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment, learning-gains]
methods: [meta-analysis-systematic-review]
audience: [learners, parents and families]
institutions: [educational-policy-ai, governance]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy, pedagogical-safety]
level: [preschool, primary education, middle school, secondary, k 12, higher ed, undergraduate, graduate, adult learning, special education, teacher education]
confidence: medium
translation_of: concepts/education-levels
source_updated: "2026-09-28T21:44:10-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Níveis de ensino** — as faixas que organizam o metadado `level` desta base de conhecimento: **educação infantil**, **ensino fundamental I**, **ensino fundamental II**, **ensino médio**, **K-12**, **ensino superior**, **graduação**, **pós-graduação**, **aprendizagem de adultos**, **educação especial** e educação de [[teacher-role|professores]]. Esta página é o guarda-chuva desse campo, e não uma duplicata de nenhuma página de faixa individual: ela explica o que muda à medida que você atravessa as faixas, por que a ruptura entre escola e universidade importa mais do que a disciplina ensinada, e onde a evidência em IA é densa e onde ela é escassa.

## Perguntas para refletir

- Um seminário de pós-graduação e uma aula de matemática do segundo ano são ambos "educação", mas uma ferramenta que ajuda um pode prejudicar o outro. O que, na faixa — e não na disciplina — muda o que um bom uso de IA parece ser?
- Um ensaio com 132 crianças do segundo ano constatou que um tutor de matemática adaptativo não era melhor que uma sequência fixa. Você esperaria o mesmo resultado nulo para um estudante universitário, e qual capacidade de quem aprende a adaptação pressupõe silenciosamente?
- "K-12" e "ensino superior" comprimem, cada um, vários contextos distintos em um único rótulo. Quais comparações esses rótulos escondem?
- Se a base de evidências de uma faixa é escassa, a resposta honesta é não dizer nada, tomar emprestado de uma faixa adjacente, ou desenhar um estudo?

## Introdução

O campo de metadados `level` nomeia a faixa de ensino sobre a qual uma fonte trata — faixas, e não idades: **educação infantil**, **ensino fundamental I**, **ensino fundamental II**, **ensino médio**, **K-12**, **ensino superior**, **graduação**, **pós-graduação**, **aprendizagem de adultos**, **educação especial**, educação de professores. Algumas nomeiam uma etapa da escolarização, duas nomeiam as metades muito diferentes do estudo universitário, duas nomeiam uma [[learners|população de quem aprende]] em vez de uma etapa, e uma nomeia as pessoas que ensinam. Uma fonte pode carregar várias faixas ao mesmo tempo.

Esta página é o guarda-chuva desse campo; as páginas de faixa fazem o trabalho profundo e deveriam ser lidas junto com ela: [[k-12]], [[early-childhood-elementary-ai-education]], [[higher-ed]], [[adult-learning]], [[special-education]], [[teacher-education]] e [[vocational-education]].

## O que distingue uma faixa de outra

As faixas diferem em vários eixos ao mesmo tempo, e a pesquisa em IA costuma variar apenas um deles.

- **Capacidade de autorregulação.** Duas versões do mesmo tutor de matemática do segundo ano — conteúdo, interface, feedback e dicas faladas idênticos, diferindo apenas em a seleção de tarefas seguir ou não uma estimativa de domínio de [[knowledge-tracing|Rastreamento de Conhecimento Bayesiano]] — não produziram diferença no pós-teste entre 132 crianças de sete anos (F(1, 124) = 0,32, p = .574). A primeira explicação dos autores é desenvolvimental: os [[adaptive-learning|sistemas adaptativos]] pressupõem pessoas que conseguem acionar o feedback, regular o esforço e manter o foco, e crianças pequenas têm [[self-regulated-learning|autorregulação]] limitada ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Quem medeia a interação.** Nas faixas escolares, um adulto fica entre quem aprende e a ferramenta. Uma pesquisa com 270 professores de educação infantil constatou que a intenção de adoção era impulsionada pela [[technology-acceptance-model|utilidade percebida]], facilidade de uso, [[self-efficacy]] com IA e [[anxiety-and-stress|ansiedade com IA]] — e o estudo excluiu deliberadamente IA voltada às crianças ([[preschool-teachers-ai-behavioral-intention-2026]]).
- **Para que serve a avaliação.** A avaliação no ensino médio alimenta apostas externas; a avaliação na universidade é trabalho de curso e credenciais; a avaliação na pós-graduação é a formação de um pesquisador.
- **[[prior-knowledge|Conhecimento prévio]].** O conhecimento prévio dominou o desempenho no pós-teste daquele ensaio (F(1, 124) = 206,99, p < .001, η²p = .63), de modo que um rótulo de faixa se correlaciona com, mas não equivale a, um nível de conhecimento.

## Os anos escolares e os anos universitários

A divisão mais consequente é a ruptura entre escola e universidade, e os dois rótulos mais comuns cada um a escondem ou a cruzam.

Dentro dos anos escolares, o resultado medido muda bruscamente por faixa. No ensino fundamental I, é a aprendizagem da disciplina: 97 crianças chinesas do terceiro ano usando [[conversational-ai|chatbots de IA generativa]] na [[science-education|investigação em ciências]] formularam problemas melhores que um grupo de controle com motor de busca (t = 2,47, p = 0,015) ([[dai-chatbots-problem-posing-primary-2026]]). No ensino médio, isso frequentemente se torna atitude em vez de desempenho: uma pesquisa com 508 estudantes taiwaneses do ensino fundamental II constatou que o apelo experiencial agia por meio do prazer para moldar a intenção de usar [[generative-ai|ChatGPT]] no aprendizado de letras de música (XM → PEOU β = 0,630; PE → ATU β = 0,369), com 81,5% na versão gratuita — um fato de acesso e [[equity-in-ai-education|equidade]] disfarçado de achado de aceitação de tecnologia ([[chatgpt-music-education-junior-high-2026]]). O ensino médio também abriga o maior alerta sobre aprendizagem do corpus: ao longo de 26.811 estudantes chineses do 7º ao 12º ano, as notas de lição de casa subiram 18% e o tempo de conclusão caiu 30%, enquanto as notas em [[summative-assessment|prova sem consulta]] caíram cerca de 20% em seis meses, concentradas entre os ~81% cujo comportamento indicava terceirização da lição de casa ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).

Os anos universitários se dividem novamente. A graduação é trabalho de curso sob julgamento externo: entre escritores de graduação em uma universidade R1 que atende minorias, o [[ai-literacy|letramento em IA]] previu *que tipo* de dependência de [[llm]] um estudante ocupava, e não quanto ele a usava ([[llm-reliance-types-undergrad]]). A pós-graduação é formação em pesquisa, onde o resultado passa do desempenho para a formação. Entre 420 pesquisadores de doutorado e pós-doutorado em astronomia, a dependência de IA se associou negativamente à [[agency|autonomia]] em pesquisa (r = −.355) e à [[self-efficacy]] (r = −.321), e o caminho indireto até o comportamento inovador passou sobretudo pela autonomia (−.115) em vez da autoeficácia (−.069); o apoio da orientação enfraqueceu o vínculo negativo com a autonomia (B = .077, p = .020) ([[ai-mediated-research-agency-formation-2026]]). Um doutorando é julgado pelo juízo que a dependência de IA parece corroer; um estudante de graduação, não. Agrupar ambos sob "ensino superior" esconde isso.

## Onde a evidência se concentra, e onde ela é escassa

O corpus é desigualmente povoado, e o campo level torna o desequilíbrio visível.

**Denso.** O ensino superior é a faixa mais coberta: as páginas consultadas aqui incluem um ensaio de plataforma de oito semanas com 60 estudantes de engenharia ([[ai-assisted-seminar-learning-information-literacy-2026]]), uma pesquisa com 395 gestores de educação ([[ai-adoption-readiness-ukraine-education-managers-2026]]), uma metassíntese de 18 estudos africanos de ensino superior ([[data-privacy-ai-african-higher-education-2026]]) e um estudo com 420 pesquisadores sobre formação doutoral ([[ai-mediated-research-agency-formation-2026]]). O ensino fundamental I e o ensino médio também carregam evidência de resultado.

**Escassa, e em alguns pontos ausente.** As páginas consultadas aqui não relatam nenhum estudo de resultado em crianças na faixa de educação infantil; a evidência mais próxima é uma pesquisa de intenções de professores que excluiu ferramentas voltadas às crianças ([[preschool-teachers-ai-behavioral-intention-2026]]). O ensino fundamental II aparece principalmente como um desenho e um estudo longitudinais *propostos*, e não como resultados relatados ([[ai-lms-middle-school-longitudinal]]). A evidência mais forte da faixa profissionalizante são 63 respostas de [[self-report-measures|autorrelato]] de um único curso, que seus autores dizem exigir replicação ([[ai-ive-pbl-vocational-design-creativity-2026]]). A evidência da pós-graduação é transversal, com um modelo de caminho reverso se ajustando ligeiramente melhor que o desenvolvimental, de modo que a direção da dependência para a redução da autonomia é inferida, e não confirmada ([[ai-mediated-research-agency-formation-2026]]). Nada do que foi consultado aqui relata evidência de resultado de IA para **aprendizagem de adultos** ou **educação especial** como faixas; essas têm sua própria cobertura em [[adult-learning]] e [[special-education]], e esta página não generaliza a partir de achados de idade escolar para preencher essa lacuna.

Um padrão se mantém em todos os níveis pesquisados: a camada humana absorve os casos mais difíceis. Um especialista humano permaneceu no ponto de decisão de credibilidade para estudantes de engenharia mesmo quando a recomendação algorítmica alcançou F1 = 0,64 ([[ai-assisted-seminar-learning-information-literacy-2026]]); o apoio da orientação foi a única condição que enfraqueceu os vínculos negativos da dependência de IA na formação doutoral ([[ai-mediated-research-agency-formation-2026]]); e são os professores de educação infantil, e não as crianças, quem adota ([[preschool-teachers-ai-behavioral-intention-2026]]).

## O que o desenho adequado ao nível de fato muda

- **Autonomia e apoio.** Com quem aprende sendo jovem, adapte o *nível de apoio* — mais [[scaffolding|andaimento]], orientação ou dicas —, e não a dificuldade da tarefa; a adaptação de dificuldade não comprou nada no início do fundamental I, enquanto o gateamento por domínio pode ter atrasado os estudantes adaptativos ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Nível de leitura.** Um chatbot ajustado à idade usou variáveis de prompt para idades de 7–9, 9–11 e 12–14, e 63 crianças do 1º ao 8º ano o trataram como uma fonte de informação confiável ([[vahedian-children-attitudes-ai-chatbot-2026]]).
- **Mediação.** [[parents-and-families|Pais]] e professores medeiam nos anos escolares, [[librarians]] e orientadores nos anos universitários — e a contraparte universitária é expertise, e não tutela: a plataforma de engenharia manteve um humano onde o algoritmo estava menos confiante ([[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Apostas da avaliação.** O desenho de LMS para o ensino fundamental II condiciona a IA por atividade, mantendo dicas delimitadas no modo de prática e desligando a IA em itens avaliados ([[ai-lms-middle-school-longitudinal]]) — uma precaução que a evidência da penalidade de aprendizagem no ensino médio torna concreta ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).
- **Deveres de proteção de dados para menores.** As obrigações escalam com a idade: para menores, as propostas do corpus são estruturais — minimização de dados, restrições de resposta adequadas à idade, controle de acesso baseado em papéis, registros auditáveis ([[ai-lms-middle-school-longitudinal]]) — e a conscientização das crianças sobre segurança digital não pode ser pressuposta, já que algumas estavam dispostas a confiar segredos a um chatbot ([[vahedian-children-attitudes-ai-chatbot-2026]]). Para adultos, os deveres se deslocam para consentimento, controle e fluxo transfronteiriço de dados ([[data-privacy-ai-african-higher-education-2026]]).
- **Governança que se encaixa na faixa.** A prontidão é específica por camada: 395 gestores ucranianos pontuaram a prontidão pessoal 0,68 pontos acima da prontidão do sistema (d = 0,73), citaram a ausência de regulação com mais frequência (58,5%) e avaliaram a [[personalized-learning|personalização]] — o benefício que os fornecedores mais prometem — como a mais baixa de todas as aplicações (29,4%) ([[ai-adoption-readiness-ukraine-education-managers-2026]]).

## Implicações para a IA na educação

- **Leia o campo level antes do campo de tema.** Um achado de uma faixa é uma hipótese para outra, não um resultado transferível.
- **Para as faixas mais jovens, adapte o apoio, não a dificuldade da tarefa** ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Não transporte uma ferramenta através da ruptura escola/universidade sem reespecificar quem detém a autoridade epistêmica.** A dependência que reduz a autonomia na formação doutoral é um risco de formação em pesquisa ([[ai-mediated-research-agency-formation-2026]]).
- **Condicione a IA por atividade, não por entusiasmo**, e dimensione os deveres de privacidade conforme a idade ([[ai-lms-middle-school-longitudinal]], [[data-privacy-ai-african-higher-education-2026]]).
- **Desenhe para o adulto mediador daquela faixa** — pai, professor, bibliotecário ou orientador — e mensure a prontidão dele separadamente da da instituição ([[ai-adoption-readiness-ukraine-education-managers-2026]], [[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Diga com clareza quando uma faixa não tem evidência**, e **não confunda intenção com desempenho**: vários estudos específicos de nível relatam resultados de atitude ou de [[self-report-measures|autorrelato]], e não de aprendizagem.

## Conceitos conectados
- [[k-12]]
- [[early-childhood-elementary-ai-education]]
- [[higher-ed]]
- [[adult-learning]]
- [[special-education]]
- [[teacher-education]]
- [[vocational-education]]
- [[learners]]
- [[parents-and-families]]
- [[differential-effects-across-learner-groups]]

## Artigos conectados
- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — Tutoria adaptativa versus não adaptativa em matemática do segundo ano (Sibley et al. 2026)
- [[dai-chatbots-problem-posing-primary-2026]] — Chatbots de IA generativa e formulação de problemas com crianças do terceiro ano em ciências no ensino fundamental I
- [[chatgpt-music-education-junior-high-2026]] — Atitudes de estudantes do ensino fundamental II em relação ao ChatGPT no aprendizado de letras de música (Weng & Chiang 2026)
- [[ai-lms-middle-school-longitudinal]] — LMS com IA integrada desenhado para o ensino fundamental II, com um estudo longitudinal proposto
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — A penalidade de aprendizagem da IA generativa no ensino médio chinês (Strömberg et al. 2026)
- [[llm-reliance-types-undergrad]] — Quatro tipos de dependência de LLM entre escritores de graduação (Hossain 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Plataforma de seminário assistida por IA com apoio bibliotecário embutido para estudantes de engenharia
- [[ai-mediated-research-agency-formation-2026]] — Dependência de IA, autonomia e inovação na formação doutoral e pós-doutoral (Han & Liu 2026)
- [[data-privacy-ai-african-higher-education-2026]] — Visões das partes interessadas sobre privacidade de dados no ensino superior africano (Duncan 2026)
- [[ai-adoption-readiness-ukraine-education-managers-2026]] — Prontidão para adoção de IA entre gestores de educação em toda a Ucrânia (Kremen et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — ABP imersiva habilitada por IA para estudantes de design profissionalizante (Jin et al. 2027)
- [[preschool-teachers-ai-behavioral-intention-2026]] — Intenção de professores de educação infantil de usar IA em contextos da primeira infância
- [[vahedian-children-attitudes-ai-chatbot-2026]] — Atitudes de crianças em relação a um chatbot de IA ajustado à idade
