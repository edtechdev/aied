---
title: Robôs na educação
created: "2026-08-13T18:49:42-04:00"
updated: "2026-10-01T09:59:02-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/educational-robotics
source_updated: "2026-10-01T09:59:02-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

> **Robôs na educação (robótica educacional)** — o uso de robôs físicos ou simulados como ferramentas de [[teacher-role|ensino]] e aprendizagem. A robótica educacional abrange um amplo espectro: de kits programáveis que ensinam pensamento computacional e programação a robôs socialmente assistivos e humanoides que tutelam, contam histórias, modelam língua de sinais ou ensaiam habilidades sociais. Ela é valorizada por fomentar [[problem-solving|resolução de problemas]], [[critical-thinking|pensamento crítico]], [[creativity|criatividade]] e engajamento em STEAM, e por tornar concretos conceitos computacionais abstratos por meio da interação incorporada. O corpus de robótica da base de conhecimento abrange programação integrada ao [[curriculum-design|currículo]], tutores conversacionais movidos por LLM, robôs de [[storytelling-in-education|contação de histórias]] socialmente assistivos e dramatização (role-play) para a aprendizagem socioemocional. Ela é sustentada por duas áreas intimamente relacionadas absorvidas aqui: **robôs sociais** (robôs desenhados para interação social e construção de vínculos) e **interação humano–robô (HRI)** (o estudo de como as pessoas percebem, confiam e aprendem com robôs).

## Perguntas para refletir

- Um robô na sala de aula acrescenta uma [[community-of-inquiry|presença social]] incorporada que um chatbot numa tela não tem. O que você acha que o corpo físico e as pistas sociais de um robô mudam sobre como os estudantes aprendem, confiam e se engajam — e do que eles poderiam distrair?
- Robôs sociais usam fala, gestos e personalidade humanizados para ensinar, contar histórias ou ensaiar habilidades sociais. Um robô que parece e age como humano é inerentemente melhor para a aprendizagem, ou essa presença social poderia trazer riscos (desinformação, dependência excessiva, privacidade) que ferramentas apenas de software não trazem?
- LLMs agora permitem que robôs sociais conversem fluentemente. Se um robô consegue falar como um tutor, o que ainda depende de sua incorporação física — e onde acrescentar um \"corpo\" realmente importa para a aprendizagem versus ser apenas uma novidade?
- Pense numa vez em que você aprendeu algo manipulando fisicamente um objeto ou vendo suas ações produzirem um resultado visível. Como programar um robô físico poderia ancorar ideias abstratas (como a lógica de programação) de forma mais eficaz do que escrever código numa tela?

## Introdução

A robótica educacional é uma aplicação distinta, mas intimamente relacionada, da [[ai-education|IA na educação]]. Diferente da [[intelligent-tutoring|tutoria inteligente]] apenas de software ou dos chatbots de [[llm]], os robôs acrescentam uma presença **incorporada** e frequentemente **social** — um agente físico que os estudantes podem ver, manipular e (cada vez mais) conversar. Essa incorporação é central para seu valor [[pedagogy|pedagógico]]: ela ancora a lógica abstrata do programa em comportamento observável, e pode apoiar a construção de vínculos e o engajamento emocional que sistemas desincorporados não conseguem.

A evidência é mais rarefeita do que o volume de trabalho sugere: uma revisão de IA e robótica na educação descobre que a maioria dos estudos empíricos envolve estudantes com menos de 13 anos por quatro semanas ou menos, concentrados em poucos países investidores iniciais, com [[learning-gains|desempenho em aprendizagem]] como resultado mais estudado e ética, equidade e política ficando atrás da implantação ([[white-wu-robotics-ai-education-2026|White e Wu (2026)]]).

### Robôs sociais e interação humano–robô

Duas vertentes moldam o lado social da robótica na educação.

**Robôs sociais** são robôs desenhados para engajar pessoas por meio da interação social, usando pistas humanizadas como fala, gesto, expressão facial e personalidade para comunicar, ensinar, assistir ou acompanhar. Na educação, robôs sociais (humanoides como iCub, Pepper, Reachy e robôs de companhia) são usados para tutoria, contação de histórias, dramatização, apoio a línguas e como companheiros de estudo. Sua presença social é o principal diferencial em relação aos [[agentic-ai|agentes de IA]] baseados em software, permitindo a construção de vínculos e o engajamento emocional. Avanços em [[llm|modelos de linguagem grandes]] expandiram drasticamente o que os robôs sociais podem dizer e fazer, permitindo tutoria conversacional fluida e adaptativa — ao mesmo tempo que introduzem riscos como desinformação, [[cognitive-offloading|dependência excessiva]] e violações de [[privacy|privacidade]], motivando abordagens de desenho baseadas em conhecimento.

**Interação humano–robô (HRI)** é o estudo interdisciplinar de como pessoas e robôs interagem, abrangendo percepção, comunicação, colaboração e as dinâmicas sociais, cognitivas e [[ethics|éticas]] dessa interação. Na educação, a HRI fundamenta como os estudantes percebem, confiam e aprendem com robôs — seja programando um robô, conversando com um robô tutor ou ensaiando cenários sociais. A [[research-methods-aied|pesquisa]] em HRI examina como a aparência, o comportamento, o contexto da tarefa e a incorporação do robô moldam a [[usability-research|experiência do usuário]], a confiança, a agência e a aprendizagem. Preocupações centrais na HRI educacional incluem preservar a [[agency|agência]] humana, construir [[trust|confiança]], apoiar a [[self-efficacy|autoeficácia]] e garantir que a interação com robôs sustente, e não minar, a autonomia e a aprendizagem social. Ela conecta a robótica a [[human-ai-collaboration]] e a [[social-emotional-learning]].

### Como os robôs são usados na educação

[[teaching-with-robots-five-types-perspective-2026|Christ et al. (2026)]] acrescentam uma tipologia de papéis em vez de uma lista de tecnologias: seus cinco tipos de robô de sala de aula derivados de workshop diferem por *função pedagógica e nível de abstração*, e não por hardware. O tipo a encena uma demonstração não interativa de padrões sociais genéricos (um teatro de emoções roteirizado seguido de discussão de dinâmicas como escalada ou mal-entendido); o tipo b é um robô interativo reativo ao toque que apoia o teatro físico participativo, a [[embodied-learning|aprendizagem incorporada]], a consciência de limites e a regulação emocional; o tipo c é um parceiro de língua falada que demonstra empatia e lembra as interações com um único aluno, criando um ambiente protegido um-a-um para autorrevelação; o tipo d é guiado externamente por um especialista escondido, como um fantoche com graus de liberdade extras, visando achatar a hierarquia social; e o tipo e é um robô não interativo que repete ações observadas recentemente na escola para que os alunos possam refletir sobre comportamento situado — o contraste com o tipo a sendo exatamente sua abstração específica ao contexto, e não generalizada. A tipologia é explícita sobre ser um espaço de desenho não validado fundamentado num único programa nacional de saúde mental, de modo que é um menu para desenhar e avaliar papéis de robô, não evidência de que qualquer um deles funciona.

- **Pensamento computacional e programação:** robôs programáveis (ex., LEGO, plataformas baseadas em blocos) ajudam os estudantes a conectar o código a resultados reais. [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] liga o pensamento computacional a currículos de STEAM do ensino médio, e o [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] combina programação em blocos com um agente de [[conversational-ai|IA conversacional]] e feedback de robô incorporado. O [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] permite que iniciantes controlem robôs simulados com linguagem natural.
- **Tutoria e entrega de conhecimento:** [[knowledge-based-design-generative-social-robots-2026|pesquisa de desenho baseado em conhecimento]] e [[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]] desenvolvem robôs sociais generativos movidos por LLM que tutelam estudantes do ensino superior, abordando riscos como desinformação e [[cognitive-offloading|dependência excessiva]]. A [[task-context-trust-educational-hri-2026|pesquisa sobre confiança]] mostra que o que um robô faz (contexto da tarefa) molda a confiança do estudante mais do que sua aparência, com a maior confiança durante tarefas instrucionais.

- **Contação de histórias e engajamento:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] e [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]] usam robôs sociais interativos movidos por LLM para contação de histórias a fim de impulsionar motivação e engajamento, enquanto [[icub-humanoid-storytelling-llm-hri-2025|o estudo de HRI narrativa com o iCub]] explora a contação de histórias cocriativa entre humanos e humanoides.

- **Aprendizagem socioemocional e [[inclusive-learning|inclusão]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] usa dramatização mediada por robô para ensaiar a intervenção de espectadores contra o bullying, e [[pepper-robot-sign-language-lis-2025|trabalhos com o robô Pepper]] exploram a comunicação em língua de sinais por robôs para apoiar estudantes surdos. [[pepper-social-robot-formal-education-scoping-review-2026|Uma revisão de escopo]] mapeia o uso do Pepper na educação formal.

- **Autonomia e agência:** [[human-autonomy-agency-hri-review-2025|uma revisão sistemática]] sintetiza como a HRI afeta a autonomia humana e o senso de agência, fazendo a ponte entre frameworks de desenho e demandas [[regulation|regulatórias]] (EU AI Act, IEEE Ethically Aligned Design). [[social-robot-study-companions|Robôs sociais como companheiros de estudo]] e [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|integração robô–LLM na escrita criativa]] exploram mais papéis de robô.

- **Abordagens baseadas em projetos e jogos:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] apresenta um curso de robótica baseado em projetos, e [[game-based-gamified-robotics-education-review-2026|uma revisão sistemática]] compara aprendizagem baseada em jogos e gamificação na educação em robótica.

- **Aprendizado por reforço e sim-to-real num fluxo completo de robótica.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao e Wang (2026)]] convertem um fluxo de pesquisa robótica ponta a ponta — montagem, verificações elétricas, treinamento de política baseado em simulação e implantação física — num curso de [[k-12|ensino médio]] construído sobre um único humanoide aberto (um ToddlerBot, com custo de peças reportado abaixo de USD 6.000) ao longo de oito sessões de três horas. Duplas compartilham um robô e treinam uma [[reinforcement-learning|política de caminhada]] em [[simulation|simulação]] antes de implantá-la no hardware, com portões de segurança (um teste de ficar em pé aprovado antes de caminhar) tornando visível a ordem das dependências. Como um artefato compartilhado recompensa a equipe em vez do indivíduo, o framework separa o desempenho do robô da compreensão individual: os estudantes alternam papéis, cada um submete uma predição e uma explicação separadas em cada checkpoint, e o apoio gradual explicitamente não é tratado como evidência de maestria conceitual — o alerta dos autores de que passar por um marco do robô não é compreendê-lo.

- **A robótica de competição como problema de ecossistema, não de kit.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]] localizam a restrição vinculante na robótica do K–12 menos no currículo ou no hardware do que na mentoria técnica local sustentada, e mostram que ela é distribuída geograficamente: em Indiana, a participação na FIRST LEGO League colapsou na temporada remota de 2020, a participação urbana se recuperou gradualmente, e a participação rural não, permanecendo próxima de seu nível pós-2020 até 2025–2026. Seu framework ARC torna a mentoria o objeto projetado — faculdades oferecem um curso creditado que prepara graduandos como mentores de workshop para equipes próximas, e programas escolares maduros tornam-se hubs secundários cujos estudantes experientes tornam-se mentores de pares para outras escolas, de modo que o alcance se propaga além da área de captação de qualquer universidade por um ciclo autorreforçador. Um teste com uma universidade criou três equipes rurais de FLL e moveu a conexão comunitária dos graduandos de 1,86 para 4,00 numa escala de cinco pontos (a maior de todas as mudanças medidas, à frente da confiança em ensinar conceitos técnicos com +1,29), enquanto uma simulação de Markov espacialmente explícita das 1.925 escolas públicas de Indiana projetou 992 programas escolares após 40 anos sob suposições moderadas, contra 161 sem ARC. A evidência é de nível de viabilidade — sete mentores e quatro pais, autorrelatos retrospectivos, nenhum grupo controle — mas o enquadramento é portátil para qualquer programa de robótica: o que escala ou deixa de escalar é a capacidade de mentoria e a geografia dos hubs, não o robô ([[arc-hubs-k12-ai-robotics-rural-2026]]).

- **Desenvolvimento infantil e aprendizes jovens:** [[ai-toys-child-development-2026|brinquedos com IA e desenvolvimento infantil]] desloca a lente para os brinquedos comerciais de IA na primeira infância, examinando como os brinquedos com IA afetam o desenvolvimento e o brincar das crianças. Isso estende a robótica educacional além dos robôs de sala de aula para os brinquedos de consumo que as crianças encontram em casa, levantando questões sobre [[pedagogical-agent|agentes]] no brincar, [[trust-calibration|calibração da confiança]], [[agency|agência]] e [[well-being|bem-estar]] para os aprendizes mais jovens — uma área onde a orientação de desenho é mais rarefeita do que para currículos de robótica em idade escolar.
- **Codificação tangível e robôs sociais no [[ai-literacy|letramento em IA]] na pré-escola.** Lee (2026) integra brincadeiras desconectadas (unplugged), codificação tangível (Bee-Bot, Ozobot) e diálogo guiado com um robô social de IA no currículo Play With AI (PL-AI) para pré-escola e jardim de infância. A [[design-based-research|pesquisa baseada em desenho]] documenta como essas atividades de robótica incorporada e tangível apoiam o raciocínio emergente das crianças sobre conceitos de IA, com quatro princípios de desenho — brincadeira incorporada, codificação tangível, diálogo guiado e codesenho com o professor — oferecendo um modelo apropriado ao desenvolvimento para robótica e educação em IA na [[early-childhood-elementary-ai-education|primeira infância]].

- **Dois paradigmas para aprendizes jovens: robôs de codificação e robôs sociais generativos.** [[creative-project-approach-ai-early-childhood-2025|Yang, Li e Lee (2025)]] enquadram a robótica na primeira infância como o emparelhamento de dois paradigmas [[pedagogy|pedagógicos]], cada um com uma base teórica distinta. **Robôs de codificação** (Bee-Bot, KIBO, Matatalab) descendem do LOGO de Papert e incorporam o [[constructivist|construcionismo]] — as crianças aprendem fazendo e constroem [[computational-thinking|pensamento computacional]] por meio da programação tangível. **Robôs sociais generativos**, movidos por [[generative-ai|IA generativa]], estão fundamentados no [[sociocultural-learning|socioconstrutivismo]], atuando como pares ou tutores conversacionais que [[scaffolding|scaffold]] a aprendizagem dentro da Zona de Desenvolvimento Proximal da criança e apoiam o desenvolvimento socioemocional. Sua abordagem em cinco passos chamada **Creative Project Approach** para integrar ambos os tipos de robô na Abordagem por Projetos mantém os professores como facilitadores que guiam a interação criança–robô, equilibram automação com [[creativity|criatividade]] e preservam a [[agency|agência]] da criança.

- **O que a robótica de pensamento computacional no jardim de infância realmente faz.** Uma revisão sistemática de 53 estudos descobriu que aprendizagem baseada em problemas, contação de histórias e scaffolding foram as estratégias mais frequentemente usadas, com a maioria dos estudos não nomeando nenhum framework de pensamento computacional e usando ferramentas de avaliação ad hoc em vez de um instrumento validado como o TechCheck-K ([[tsingidou-ct-robotics-kindergarten-2026|Tsingidou e Sapounidis (2026)]]).

### Incorporação e pedagogia

Um tema definidor é que os robôs são eficazes quando apoiam objetivos genuínos de aprendizagem — não como exercícios técnicos isolados. Um projetor robótico de mesa empatado com o ChatGPT de laptop enquanto havia ajuda disponível (6,7 vs. 7,3/10, p = ,41), mas manteve sua nota após a retirada da ajuda (7,0 vs. 4,4/10, p = ,003), uma nota de transferência de curto prazo 60% maior — um ganho dependente da tarefa que os autores atribuem à colocação espacial conjunta em vez de à substituição geral ([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). O valor de um robô depende do contexto pedagógico: ensinar pensamento computacional ([[computational-thinking]]), apoiar [[stem-education|STEAM]], construir habilidades de [[cs-education|programação]], motivar estudantes ([[motivation]], [[student-engagement|engajamento]]), ou apoiar [[social-emotional-learning]] e [[equity-in-ai-education|inclusão]]. A robótica também se conecta a [[project-based-learning]], [[game-based-learning]] e [[experiential-learning]]. Considerações-chave de desenho incluem preservar a [[agency|agência]] do estudante, construir [[trust|confiança]], apoiar a [[self-efficacy|autoeficácia]] e ancorar a aprendizagem na [[embodied-learning|interação incorporada]]. Na [[language-learning|aprendizagem de línguas]], a [[robot-assisted-language-learning-meta-analysis-2026|evidência metanalítica]] aponta para a eficácia da aprendizagem de línguas assistida por robôs incorporados.

- **Caminhos para aprender robótica com IA.** [[educational-robotics-pathways-2026|Um estudo qualitativo]] de estudantes do ensino médio num currículo de robótica+IA descobriu aprendizagem por prática no mundo real, desenho e expressão criativa lúdica (lente construcionista, epistemológico-pluralista).

## Conceitos conectados
- [[early-childhood-elementary-ai-education]] — Educação em IA na primeira infância e no ensino fundamental
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Guarda-chuva: tecnologias e técnicas de IA (modelos, treinamento de LLM, robótica, RAG, agentes)

## Artigos conectados

- [[pepper-social-robot-formal-education-scoping-review-2026]] — Revisão de escopo do robô Pepper na educação formal
- [[robot-assisted-language-learning-meta-analysis-2026]] — Metanálise da aprendizagem de línguas assistida por robôs incorporados potencializada por IA
- [[white-wu-robotics-ai-education-2026]] — Robótica e IA na educação
- [[computational-thinking-educational-robotics-secondary-2026]] — Pensamento computacional e robótica educacional
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — Desenho baseado em conhecimento para robôs sociais generativos
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — Contexto da tarefa e confiança na HRI educacional
- [[human-autonomy-agency-hri-review-2025]] — Autonomia e agência humanas na HRI
- [[icub-humanoid-storytelling-llm-hri-2025]] — HRI narrativa com o iCub
- [[pepper-robot-sign-language-lis-2025]] — Pepper e língua de sinais
- [[social-robot-study-companions]] — Robôs sociais como companheiros de estudo
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Integração robô-LLM na escrita criativa
- [[game-based-gamified-robotics-education-review-2026]] — Educação em robótica baseada em jogos e gamificada
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — Caminhos para aprender robótica educacional com IA (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — Pensamento computacional mediado por robôs no jardim de infância
- [[ai-toys-child-development-2026]] — Brinquedos com IA e desenvolvimento infantil
- [[creative-project-approach-ai-early-childhood-2025]] — A Abordagem do Projeto Criativo: integrando robôs de codificação e robôs sociais generativos em projetos de primeira infância (Yang, Li & Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — Cinco tipos funcionalmente distintos de robô de sala de aula, da demonstração roteirizada ao diálogo empático um-a-um (Christ et al. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: um framework baseado em hubs que trata a capacidade de mentoria técnica e a geografia dos hubs, e não o hardware, como a restrição dos programas rurais de robótica do K–12 (Jacobson et al. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — Ensinando aprendizado por reforço e robótica humanoide a estudantes do ensino médio: um desenho curricular validado por especialistas numa plataforma aberta de baixo custo
- [[aifred-desk-robotic-ai-guidance-2026]] — Um projetor robótico de mesa: a orientação colocada no mesmo local preservou a transferência onde o ChatGPT de laptop a perdeu
