---
title: "Questões e riscos legais"
created: "2026-09-18T05:40:00-04:00"
updated: "2026-10-30T21:00:00-04:00"
type: concept
foundations: [academic-integrity, reducing-ai-misuse]
assessment: [ai-detection, assessment-validity, remote-proctoring]
institutions: [educational-policy-ai, governance, regulation]
ethics: [accessibility, ai-use-disclosure, equity-in-ai-education, hallucination-risk, privacy]
pedagogy: [professional-training]
discipline: [legal education]
level: [higher ed]
audience: [administrators, policymakers, institutions, researchers]
page_kind: [synthesis]
confidence: medium
translation_of: concepts/legal-issues-and-risks
source_updated: "2026-10-28T18:24:42-04:00"
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

> **Questões e riscos legais** — a exposição que instituições, equipe e estudantes assumem quando a [[generative-ai|IA generativa]] é mal governada na educação: um estudante acusado injustamente de trapacear com base na pontuação de um detector, um sistema de supervisão que observa e grava mais do que a avaliação exige, uma regra excessivamente abrangente que penaliza uma ferramenta assistiva, ou uma política vaga demais para ser aplicada de forma consistente. O risco não é uma única questão jurídica, mas várias, que chegam juntas — de evidência (se a acusação pode ser evidenciada de algum modo), contratual e processual (se a instituição seguiu suas próprias regras e deu ao estudante uma audiência justa), de igualdade (se a regra onera estudantes com deficiência ou não nativos) e de proteção de dados (o que a vigilância coletou e onde foi armazenado). É distinto da [[academic-integrity]], que é o framework de conduta sendo aplicado: esta página é sobre o que acontece quando essa aplicação é contestada.

## Perguntas para refletir

- As ferramentas de detecção não conseguem identificar a autoria de forma confiável. Se o instrumento não consegue estabelecer o fato em questão, sobre o que um caso de má conduta está de fato se apoiando?
- Os dados de supervisão e de detecção por IA são gerados em escala e retidos indefinidamente. Quem carrega a exposição jurídica por esses dados, a instituição ou seu fornecedor?
- Quando uma política proíbe \"o uso da IA\" sem distinguir [[wright-transcription-not-generation-2026|transcrição de geração]], a regra está protegendo a integridade ou penalizando uma adaptação por deficiência?

## Introdução

A evidência da base de conhecimento sobre este tema é processual, e não jurídica. Ela documenta o que as instituições tratam como evidência, como funcionam os procedimentos de acusação, quão pouco confiáveis são os instrumentos e o que a vigilância coleta; ela ainda não documenta desfechos de litígio. Essa lacuna deveria ser declarada abertamente, em vez de preenchida com afirmações confiantes: os casos que resolveriam essas questões são, em sua maioria, não relatados, resolvidos por acordo ou ainda em processos institucionais internos.

O que a literatura sustenta é uma descrição dos modos de falha que criam exposição jurídica. O padrão recorrente é que são os próprios instrumentos e procedimentos da instituição, e não um acusador malicioso, o que a coloca em risco: uma pontuação probabilística tratada como conclusão, uma regra mais clara na intenção do que no escopo, um sistema que coletou dados sobre os quais ninguém perguntou, e uma audiência que pressupôs que a evidência técnica não precisava de escrutínio.

## Onde o risco se concentra

### Acusação injusta e evidência defeituosa

[[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] analisaram arquivos reais de alegações de má conduta com IA generativa e classificaram em categorias a evidência que as instituições usaram: rastros comportamentais registrados pelo sistema, disponíveis apenas em avaliação invigilada ou supervisionada, evidência de processo, como rascunhos, reuniões de supervisão e apresentações, onde essas práticas existem, e evidência gerada pela própria investigação. Duas coisas decorrem disso para a exposição jurídica. Primeiro, em entregas não supervisionadas, a categoria registrada pelo sistema está vazia, o que empurra os casos para categorias mais fracas. Segundo, eles registram que os princípios da justiça natural exigem que o estudante seja informado da alegação e tenha oportunidade de responder antes de qualquer determinação, obrigações codificadas nos padrões regulatórios australianos (Department of Education, 2021; TEQSA, 2025), assim como em políticas de integridade acadêmica bem concebidas. A oportunidade de resposta é tipicamente uma reunião investigativa ou uma entrevista de painel, e o que o estudante disser passa a fazer parte do registro de evidência — o que significa que as falhas processuais, e não apenas as de evidência, são onde um caso se torna vulnerável.

O problema de evidência fica por baixo disso. A saída do detector é a evidência mais frequentemente procurada e a menos capaz de sustentar o peso. [[hadra-ai-detector-accuracy-efl-2026|Hadra et al. (2026)]] testaram o Turnitin e o Originality em um corpus balanceado de 192 textos e concluíram que a precisão geral era de 0,69 e 0,61, respectivamente, com ambos tendo desempenho ruim em escrita híbrida humano–IA — a forma mais provável de aparecer em uma alegação real — e a precisão caindo ainda mais com o tamanho do texto, em escrita científica, e com uma tendência limítrofe a classificar erroneamente trabalho escrito por humanos como IA quando o escritor era um estudante de inglês como língua estrangeira. [[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer et al. (2026)]] chegam à mesma conclusão a partir de um corpus e um conjunto de ferramentas diferentes, e [[bassett-ai-detectors-education-2026|Bassett et al.]] fazem a afirmação estrutural de que nenhum limiar resolve o problema: um detector ajustado para capturar uso de IA sinalizará trabalho humano, e um ajustado para poupar trabalho humano deixará passar o uso de IA, então qualquer pontuação única é uma escolha sobre qual erro cometer. A [[karr-ai-detection-humanization-2026|revisão de Karr]] sobre por que a detecção falha chega ao mesmo lugar pelo lado da humanização da escrita, e [[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al. (2026)]] argumentam que o próprio framework processual agora precisa de reavaliação, porque a era da má conduta indetectável quebra a suposição de que a má conduta pode ser evidenciada pelo artefato entregue.

### Privacidade e vigilância

[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana et al. (2026)]] mapeiam a [[remote-proctoring|supervisão remota]] na avaliação em enfermagem e revelam a privacidade e a vigilância entre suas preocupações principais, ao lado do impacto emocional sobre os estudantes e dos efeitos de [[equity-in-ai-education|equidade]]. [[automated-online-exam-proctoring-decade-review-2026]] e [[academic-dishonesty-automated-proctoring-ai-2026]] documentam as mesmas [[ai-technologies|tecnologias]] ao longo de uma janela mais longa, e as questões de proteção de dados que elas levantam são questões ordinárias, com consequências jurídicas: o que é capturado (vídeo, áudio, toques de tecla, olhar, varreduras do ambiente), por quanto tempo é retido, onde é armazenado, quem pode acessá-lo, se o fornecedor o processa adiante, e se os estudantes consentiram com isso como condição da avaliação. Instituições que operam em ambientes de dados regulados carregam obrigações estatutárias muito antes de qualquer processo judicial aparecer, e o trabalho da base de conhecimento, ciente da FERPA e do GDPR, sobre sistemas de IA locais e hospedados por fornecedor mostra como as mesmas questões se aplicam às ferramentas de ensino, e não apenas à supervisão.

### Acessibilidade e deficiência

[[wright-transcription-not-generation-2026|Wright (2026)]] argumenta que as proibições abrangentes de \"uso da IA\" são excessivamente inclusivas porque não distinguem a transcrição de fala para texto e o OCR da redação generativa, e que estudantes com condições que afetam o controle motor fino, a legibilidade da caligrafia ou a precisão de digitação historicamente dependeram justamente dessas ferramentas — incluindo produtos autônomos de voz para texto como o Dragon NaturallySpeaking, vários dos quais foram descontinuados ou degradados, com a transcrição movida por IA preenchendo a lacuna funcional. Wright observa que a interseção entre deficiência, tecnologia assistiva e política de má conduta com IA é pouco explorada e que a escala desse deslocamento não foi mensurada empiricamente. A exposição é de forma simples: uma regra que remove o meio principal de um estudante produzir trabalho legível é uma regra que pode precisar de um processo de adaptação para sobreviver. [[shin-ai-policies-sld-2026|Shin]] documenta o mesmo vazio pelo lado da política para estudantes com dificuldades específicas de aprendizagem, e o trabalho da base de conhecimento sobre [[assistive-technology|tecnologia assistiva]] e [[neurodiversity|neurodiversidade]] fornece os termos em torno.

### Equidade linguística e a fronteira apoio–substituição

[[li-genai-assessment-language-equity-2026|Li (2026)]] fornece a versão baseada em igualdade do argumento para estudantes que usam o inglês como língua adicional. Como uma única interface agora realiza tanto a edição permitida quanto a redação proibida, uma regra que trata a [[generative-ai|IA generativa]] como uma categoria única de assistência não autorizada impõe ônus de conformidade mais altos sobre os estudantes mais propensos a precisar de apoio linguístico legítimo, concentra a suspeita sobre escritores cuja fluência superficial mudou, e viabiliza aplicação seletiva com base em evidência fraca — com alegações carregando consequências reputacionais, acadêmicas e, às vezes, de visto ou financeiras. O remédio é uma fronteira definida pela função e pelo construto da avaliação, e não pelo nome da ferramenta, separando intervenções superficiais que não acrescentam ideias, fontes ou estrutura analítica da substituição que cria ou reformula materialmente o trabalho intelectual, com [[ai-use-disclosure|divulgação]] calibrada para que a tradução e a edição rotineiras não atraiam custos de conformidade superiores aos que recaem sobre pares monolíngues. A estrutura jurídica é o raciocínio da discriminação indireta — identificar o ônus enviesado por coorte que uma regra aparentemente neutra produz, e então perguntar se um objetivo legítimo é buscado por meios proporcionais e praticamente viáveis — reforçado pela expectativa do direito administrativo de que quem decide possa declarar a regra aplicada, a evidência em que se baseou e por que o desfecho foi proporcional, o que é o que torna uma determinação revisível e o processo legítimo. A [[ai-detection|detecção]] é rebaixada a um sinal de triagem, com históricos de rascunho, entregas em etapas e uma breve conversa alinhada ao construto preferidos como evidência, então a exposição corre nos dois sentidos: para um desafio de discriminação ou de revisão, e para a fragilidade de uma conclusão que repousa sobre proxy, como linguagem polida ou formulação de não nativo.

### Regras pouco claras, aplicação inconsistente

[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski e Hurley (2025)]] tratam a clareza como pré-condição para uma aplicação defensável, e não como uma cortesia, e relatam que as políticas das faculdades de direito vão de [[governance|governança]] abrangente a nenhuma política declarada, com a maioria deixando os instrutores individuais interpretar e aplicar as regras. [[qian-governing-genai-higher-ed-policy-2026|Qian (2026)]] encontra a mesma variação entre universidades dos EUA, junto com ecossistemas de apoio que diferem na mesma medida, e [[crompton-governing-genai-higher-ed-delphi-2026]] relata o consenso de especialistas de que a governança é fragmentada. Um estudante disciplinado sob uma regra que ninguém consegue declarar com precisão é uma disputa sobre procedimento e justiça antes de ser uma disputa sobre IA, e [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] argumenta que o remédio é um desenho de [[assessment|avaliação]] que torna o julgamento e a responsabilidade visíveis, em vez de uma vigilância que os infere. A [[watson-rainie-ai-challenge-faculty-survey-2026|pesquisa de Watson e Rainie (2026)]] com 1.057 professores dos EUA mostra a mesma inconsistência pela outra direção: 87% dos respondentes escreveram suas próprias regras no nível da tarefa, enquanto apenas 48% disseram que sua instituição tinha diretrizes escritas e 35% disseram que seu departamento tinha, então estudantes dentro de uma única instituição encontram uma colcha de retalhos de políticas autoral individualmente. A resposta estrutural abaixo desses documentos é fina — um grupo de trabalho ou de supervisão em 55% dos casos, mas o [[ai-literacy|letramento em IA]] adotado como resultado de educação geral em apenas 13% — e isso importa juridicamente porque aplicar uma regra que a instituição nunca adotou é difícil de defender.

[[coates-governing-academic-integrity-indicators-2025|Coates, Croucher e Calderon (2025)]] localizam a fraqueza mais a montente, na governança, e não na conduta dos estudantes ou na qualidade dos instrumentos. O framework de indicadores de integridade acadêmica deles — 130 itens sob oito dimensões, indo de desenho e desenvolvimento a análise, relato, avaliação e melhoria — é escrito como questões de governança para diretoria e comitês: se o conselho mais alto da instituição recebe atualizações sobre processos e resultados da avaliação, se indicadores-chave de desempenho cobrem a qualidade da avaliação, se a integração e a orientação incluem integridade acadêmica, e se existe uma rota simples para encaminhar casos de compra de trabalhos. O programa de reforma deles visa arquiteturas de governança, as pessoas que ocupam papéis de governança, e as tecnologias e recursos que apoiam a avaliação, e eles argumentam que tal desenvolvimento é improvável de render sem affordance externa da [[regulation|regulação]], do [[benchmark|benchmarking]] e da competição interinstitucional. Para a exposição jurídica, a implicação é que uma posição defensável repousa sobre conhecer e documentar a própria prática — a mesma informação de que uma instituição precisa quando uma determinação é contestada.

### Atacando o corretor automatizado

Uma exposição diferente fica dentro dos próprios instrumentos. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] escondeu cinco injeções indiretas de prompt dentro dos arquivos de uma redação sintética que uma ferramenta institucional de [[automated-assessment|correção por IA]] (Microsoft Copilot, GPT-5.2) havia corrigido como reprovada em seis de seis execuções de linha de base. Duas estratégias elevaram a nota sem aviso visível ao usuário, com taxas de sucesso de ataque relatadas de 100% (9 de 9 iterações) e 94% (17 de 18), combinando manipulação de instrução, dramatização e ofuscação; a ferramenta desativou silenciosamente um chat depois de bloquear o ataque mais simples, e, em uma iteração, anunciou que nunca seguiria instruções embutidas e depois elevou a nota em cada uma das seis execuções seguintes. Uma nota obtida por meio de uma instrução oculta não carrega nenhuma reivindicação de [[assessment-validity|validade]], e a mesma técnica poderia ser usada para degradar uma entrega sem deixar rastro duradouro na saída — o que significa que o registro de recurso para uma decisão automatizada contestada pode estar vazio, e uma conclusão de má conduta (ou de mérito) não pode ser evidenciada a partir do artefato de modo algum. Os pedidos de Humble no nível do setor são política de IA clara em [[educational-policy-ai|IA na educação]], [[educational-development|desenvolvimento profissional]] e testagem padronizada de resiliência agnóstica a domínio, para que a superfície de ataque seja mensurada, e não pressuposta, com uso restrito de IA e [[human-in-the-loop-ai|revisão humana]] reservados para trabalho de alto impacto.

### Propriedade e a questão do domínio público

O direito autoral é a outra questão jurídica neste território, e corre na direção oposta à da má conduta. [[tlili-double-edged-sword-oer-generative-ai-2026|Tlili, Farrow, Bozkurt, Amiel, Wiley e Downes (2026)]] leem a posição do Escritório de Direitos Autorais dos Estados Unidos como tratando os prompts, sozinhos, como insuficientes para a autoria. Se essa leitura se sustenta, uma obra puramente gerada por máquina não pertence a quem a promoveu, o que importa duas vezes: um caso de má conduta não tem texto de autoria a atribuir a um estudante, e uma instituição que publique essa obra não pode reivindicar direitos sobre ela. As licenças, então, fazem o trabalho que a propriedade faria de outro modo, e é por isso que o licenciamento aberto e a integridade acadêmica são um único problema visto de dois lados.

### Além do portão do campus

Para programas profissionais, a exposição não termina na formatura. Gutowski e Hurley registram que as regras de conduta profissional que vinculam advogados em exercício — o dever de competência tecnológica, a confidencialidade, a supervisão de outros que usam as ferramentas, a franqueza para com o tribunal — já se vinculam ao uso de IA, e que a [[hallucination-risk|autoridade alucinada]] produziu sanções para profissionais que protocolaram casos fabricados. A mesma lógica de transferência se aplica onde quer que uma licença, um registro ou um dever estatutário siga o egresso, razão pela qual as páginas de disciplina de [[legal-education|educação jurídica]] e das [[medical-education|profissões de saúde]] pertencem ao lado desta.

## Questões abertas

- Qual desses riscos de fato produziu litígio ou conclusões regulatórias? A base de conhecimento tem procedimentos, políticas e avaliações técnicas, mas nenhum desfecho de caso, e ela não deveria ser lida como se tivesse.
- A saída do detector sobrevive como evidência de alguma coisa depois que uma instituição admite suas taxas de erro em uma audiência, ou a admissão converte o caso em uma disputa de justiça processual?
- O fornecedor ou a instituição é o controlador de dados quando a supervisão e a detecção passam por uma plataforma de terceiros, e isso muda o aconselhamento às instituições?
- As instituições deveriam publicar os padrões de evidência que aplicam à má conduta com IA, do modo como limiares de evidência são publicados em outros lugares, como forma de reduzir tanto a acusação injusta quanto a exposição jurídica?

## Ideias equivocadas comuns

**"A má conduta com IA é uma única questão jurídica."** São várias chegando juntas — de **evidência** (se a acusação pode ser evidenciada de algum modo), **contratual e processual** (se a instituição seguiu suas próprias regras e deu uma audiência justa) e de **igualdade**. Uma resposta que trata da evidência enquanto negligencia o procedimento fica juridicamente exposta numa dimensão que nunca considerou, e as instituições tendem a se preparar para aquela pela qual já foram processadas.

**"As instituições escreveram políticas consistentes, então o risco é dos estudantes."** A inconsistência também corre na outra direção. A pesquisa de [[watson-rainie-ai-challenge-faculty-survey-2026|Watson e Rainie (2026)]] com **1.057 professores dos EUA** constatou que **87% dos respondentes escreveram sua própria orientação no nível da tarefa** — de modo que as regras operativas variam dentro de uma única instituição, e um estudante pode cumprir a regra de um instrutor e violar a de outro na mesma semana. Um estudante acusado sob um padrão não declarado tem um problema processual que a instituição criou.

**"A detecção fornece a evidência de que um procedimento precisa."** A detecção fornece uma pontuação. A questão probatória é se a acusação pode ser evidenciada de algum modo, e a [[ai-detection|literatura sobre detecção]] mostra que as ferramentas não produzem nem a confiabilidade nem a categoria interpretável que um processo disciplinar exige. Construir o procedimento sobre um detector é construí-lo sobre o elo mais fraco.

**"Os riscos são hipotéticos, e a política vai alcançá-los."** Os riscos estão sendo distribuídos de forma desigual agora, e os estudantes que os absorvem são os que têm menos capacidade de contestar um procedimento. A assimetria entre a capacidade de uma instituição de investigar e a capacidade de um estudante de responder é um dano presente, e não futuro.

## Conceitos conectados

- [[academic-integrity]] — o framework de conduta cuja aplicação carrega o risco
- [[ai-detection]] — o instrumento no centro dos casos de acusação injusta
- [[remote-proctoring]] — a vigilância na avaliação e suas questões de proteção de dados
- [[assessment-validity]] — se a evidência consegue estabelecer a reivindicação feita a partir dela
- [[privacy]] — coleta, retenção e processamento adiante dos dados dos estudantes
- [[regulation]] — obrigações estatutárias e regulatórias que as instituições precisam cumprir
- [[governance]] — desenho de política interna e consistência da aplicação
- [[educational-policy-ai]] — a política institucional de IA como fonte de exposição não intencional
- [[ai-use-disclosure]] — expectativas de divulgação e suas bordas inaplicáveis
- [[accessibility]] — adaptação razoável onde uma regra remove uma ferramenta assistiva
- [[assistive-technology]] — as ferramentas no centro do problema da inclusão excessiva
- [[neurodiversity]] — os estudantes mais expostos a proibições excessivamente abrangentes
- [[equity-in-ai-education]] — ônus diferencial da detecção e da vigilância
- [[student-experience]] — o custo humano que precede o jurídico
- [[hallucination-risk]] — autoridade fabricada como responsabilidade profissional e institucional
- [[reducing-ai-misuse]] — a alternativa de prevenção à acusação

## Artigos conectados

- [[munoz-misconduct-allegation-evidence-2026]] — O que os arquivos de alegações de má conduta de fato contêm, e a exigência de justiça natural
- [[hadra-ai-detector-accuracy-efl-2026]] — Precisão do detector, falha em texto híbrido e risco de classificação errônea de estudantes de inglês como língua estrangeira
- [[van-vlasselaer-ai-detector-reliability-2026]] — Confiabilidade das ferramentas de detecção em um segundo corpus
- [[bassett-ai-detectors-education-2026]] — Por que nenhum limiar de detecção pode estar certo: o argumento do trade-off de erros
- [[teichmann-detecting-undetectable-misconduct-2026]] — Procedimentos de má conduta reavaliados quando a evidência se tornou indetectável
- [[wright-transcription-not-generation-2026]] — Regras de IA excessivamente inclusivas, adaptação por deficiência e ajuste razoável
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — A supervisão remota mapeada, com preocupações de privacidade e vigilância
- [[automated-online-exam-proctoring-decade-review-2026]] — Uma década de pesquisa em supervisão automatizada
- [[academic-dishonesty-automated-proctoring-ai-2026]] — Desonestidade acadêmica e supervisão na era da IA
- [[gutowski-hurley-genai-policy-legal-education-2025]] — A clareza da política como pré-condição para uma aplicação defensável
- [[qian-governing-genai-higher-ed-policy-2026]] — Ecossistemas de política e apoio em universidades inovadoras dos EUA
- [[crompton-governing-genai-higher-ed-delphi-2026]] — Consenso de especialistas sobre a governança fragmentada
- [[sharma-judgment-visible-genai-assessment-2026]] — Integridade por meio do julgamento visível, em vez da vigilância
- [[shin-ai-policies-sld-2026]] — O vazio de política para estudantes com dificuldades específicas de aprendizagem
- [[li-genai-assessment-language-equity-2026]] — A equidade linguística como problema de desenho de regras: a fronteira apoio–substituição, a discriminação indireta e a revisibilidade (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Estudantes atacando corretores de IA por injeção indireta de prompt, com notas alteradas sem detecção (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Indicadores de governança e programa de reforma para autenticar a avaliação (Coates, Croucher & Calderon 2025)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 1.057 professores dos EUA: as políticas individuais superam em muito as institucionais, e a resposta estrutural é fina (Watson & Rainie 2026)
