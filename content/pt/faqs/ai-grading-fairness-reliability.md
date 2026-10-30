---
title: "Posso usar IA para corrigir o trabalho dos estudantes com justiça e confiabilidade?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

Você tem uma rubrica em que acredita, mais entregas do que horas e uma ferramenta que devolve uma nota e vários parágrafos cheios de confiança no tempo de ler uma redação. Você a testa em trabalhos que já corrigiu. Metade das notas parece certa. Uma é estranhamente generosa, outra estranhamente dura, e você ainda não consegue dizer se a culpa é da ferramenta ou da redação.

Resposta curta para dar a um colega: a correção por IA conquista seu lugar como assistente supervisionado ou segundo leitor, em tarefas em que você a testou contra trabalhos que já corrigiu. A concordância não se transfere entre tipos de avaliação. Em um exame de farmácia com 16 estudantes, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] encontraram concordância quase perfeita nos tipos de item objetivos e uma concordância não confiável nas respostas abertas. Em três universidades inglesas, [[opraise-automated-marking-ai-assessment-2026|o projeto OpRaise]] encontrou avaliadores de IA e humanos concordando sobre a faixa de nota entre 35% e 65% do tempo, dependendo da instituição, com notas comprimidas para o meio. Uma justificativa fluente não é evidência de que seus critérios foram aplicados. Se o resultado é [[assessment-validity|válido para a sua decisão]] é uma questão local que você mesmo precisa responder, e [[human-in-the-loop-ai|uma pessoa continua responsável]] por qualquer coisa que se torne nota registrada.

## A versão curta

**1.** Nomeie o papel antes de rodar qualquer coisa: assistente de feedback, segundo leitor ou avaliador principal. Cada um exige uma quantidade diferente de evidência.

**2.** Comece pelo papel menos consequente que resolve o seu problema real. Se uma chave determinística daria conta, um LLM acrescenta risco em vez de valor.

**3.** Calibre em trabalhos que você já corrigiu, incluindo entregas fortes, fracas, limítrofes e com estrutura incomum. Exemplos convenientes não provam nada.

**4.** Mantenha o conjunto de calibração e o de teste separados, ou você está medindo o quanto ajustou a ferramenta a redações familiares.

**5.** Relate a concordância exata, as diferenças de nota e a direção do viés, não uma correlação. Verifique especificamente as fronteiras de aprovação e reprovação.

**6.** Diga aos estudantes qual papel a ferramenta cumpre, quem decide a nota e como pedir revisão.

## Decida o que a IA pode fazer

Três arranjos são chamados de "correção por IA" e carregam obrigações diferentes.

Um **assistente de feedback** rascunha comentários ou sinaliza omissões possíveis para você aceitar, reescrever ou descartar. O risco fica confinado à qualidade do comentário, e você lê tudo antes que chegue a um estudante. Um **segundo leitor** propõe notas por critério ou sinaliza discordâncias para estruturar a sua própria correção. Os erros dele precisam ser úteis, não apenas errados: uma sinalização que te devolve a uma entrega que você teria corrigido com descuido vale a pena. Um **avaliador principal** produz notas que se tornam notas registradas. É o arranjo que a evidência desta base de conhecimento não sustenta fora de casos estreitos e validados localmente.

Escolha o degrau mais baixo que atende à sua restrição real. Se sua carga de correção vem de conferir um gabarito fixo, a pontuação determinística comum é mais transparente e auditável que um modelo de linguagem, e o estudo de farmácia sugere que a vantagem do LLM nos itens objetivos era em parte um artefato de receber as respostas corretas durante a correção. Reserve o modelo para trabalho que exige interpretação e depois confira essa interpretação.

[[automated-assessment|Avaliação automatizada]] cobre a maquinaria mais ampla de pontuação, moderação e geração de feedback. Esta página é a questão de julgamento que está por baixo disso.

## O que a evidência realmente mostra

A concordância depende do tipo de item. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] corrigiram um exame de farmácia de formato misto respondido por 16 estudantes e relataram concordância com a correção do corpo docente entre 0,935 e 1,000 para itens de múltipla escolha, selecione todas as aplicáveis e preenchimento de lacuna. A concordância nas respostas subjetivas abertas não foi confiável. Dois detalhes importam mais que a manchete. As respostas corretas foram fornecidas durante a correção, o que favorece os resultados nos itens objetivos, e acrescentar uma rubrica não melhorou a concordância de forma consistente, o que enfraquece a suposição comum de que uma boa rubrica transforma um LLM em um avaliador consistente. Dezesseis estudantes não sustentam uma afirmação sobre o seu curso. A variação dentro de um único exame é o achado transferível: um sistema que dá conta da sua seção de múltipla escolha não diz nada sobre as suas redações.

A concordância de faixa é moderada e desigual. [[opraise-automated-marking-ai-assessment-2026|O relatório do OpRaise]] examinou redações autênticas de graduandos em psicologia e encontrou concordância entre avaliadores de IA e humanos na faixa de nota britânica de 63% em Cambridge, 53% em Nottingham e 35% na Manchester Metropolitan. As notas foram comprimidas para o meio, com as caudas avaliadas com menos precisão: uma redação que um humano deu 75 recebeu vários pontos a menos de todos os sistemas de IA, e uma que recebeu 50, vários pontos a mais. Essa compressão é a falha a vigiar, porque prejudica exatamente os estudantes do topo e da base da sua distribuição enquanto o meio parece bem. Isto é um relatório de projeto, não um ensaio revisado por pares, e é o aviso mais útil da base de evidência.

As suas próprias notas são uma referência imperfeita. Professores discordam entre si, e a sua nota anterior em uma redação parecida é um julgamento, não uma verdade de base. A concordância com um avaliador estabelece consistência com aquele avaliador, o que não é o mesmo que justiça. Onde os riscos justificam, use um segundo leitor qualificado para arbitrar os casos difíceis, e trate uma discordância entre a IA e um avaliador humano como um convite a reler o trabalho, não como um veredito sobre quem está certo.

Consistência e bom julgamento divergem. Um modelo pode devolver notas quase idênticas em uma nova execução enquanto aplica mal os seus critérios, porque a repetibilidade mede estabilidade, não validade. As caudas do OpRaise mostram o padrão: o sistema era estável e estava errado justamente nas redações que mais importavam.

## Valide o procedimento antes que ele toque em uma nota

Trabalhe isto em entregas já avaliadas e devidamente protegidas que cubram as respostas que você realmente recebe: fortes, fracas, limítrofes, incompletas, com estrutura incomum e respostas corretas expressas de um jeito pouco familiar.

**1. Especifique critérios e exija evidência.** Entregue a tarefa, a rubrica, as regras de pontuação e exemplos de como respostas alternativas legítimas ganham crédito. Peça justificativas concisas no nível do critério, amarradas a passagens identificáveis. Depois confira você mesmo essas justificativas contra a entrega.

**2. Separe calibração de avaliação.** Ajuste em um conjunto, teste em outro. Sem essa divisão você não consegue distinguir um procedimento validado de um bem ajustado.

**3. Meça as decisões que importam.** Registre a concordância exata, o tamanho e a direção das diferenças de nota, e se o modelo atribui sistematicamente notas mais altas ou mais baixas. Examine separadamente a aprovação, a reprovação e outras fronteiras consequentes. Uma correlação alta pode conviver com um deslocamento sistemático.

**4. Teste a repetibilidade e o comportamento por subgrupo.** Rode de novo um subconjunto com as mesmas configurações. Procure erros no nível do critério e casos em que idioma, formatação ou estilo legítimo são tomados por compreensão mais fraca. Contagens pequenas de subgrupo sustentam cautela, não uma afirmação de justiça.

**5. Escreva a regra de escalonamento.** Decida quais casos sempre recebem correção humana e como as discordâncias são resolvidas. Não deixe a confiança declarada pelo modelo decidir; a confiança precisa ser validada contra os erros observados antes de ter peso.

**6. Proteja o fluxo de trabalho.** Use um ambiente aprovado, minimize informações identificadoras e mantenha rubrica e instruções separadas do conteúdo enviado. Essa separação torna a manipulação mais difícil de esconder. Não a torna impossível.

**7. Registre o que invalidaria a verificação.** Guarde o modelo e a versão, o prompt, a rubrica e as configurações. Uma atualização do modelo ou uma revisão da rubrica é motivo para repetir as verificações representativas em vez de supor continuidade.

## Torne o arranjo visível para os estudantes

Os estudantes têm direito de saber qual papel a ferramenta cumpre, quem decide e como contestar um resultado. Divulgação vaga produz desconfiança; especificidade produz uma relação viável. Algo como: "Uma ferramenta de IA aprovada pode rascunhar comentários de rubrica na sua versão. Eu reviso cada comentário e determino a sua nota. Fale comigo se um comentário representar mal o seu trabalho." Depois faça isso ser verdade.

Duas direções de falha precisam de atenção separada. Deduções excessivas são as que os estudantes relatam, e dominam os recursos. Crédito não merecido é a que passa em silêncio e corrompe o registro aos poucos. Amostre as duas, e inclua suas horas de verificação quando julgar se o fluxo de trabalho te poupou alguma coisa.

## O que vai voltar contra você

**"Humanos também são enviesados."** São, e é por isso que a comparação precisa de critérios explícitos em vez da nota de um único avaliador como padrão. A dispersão institucional do OpRaise é o argumento aqui: se avaliadores humanos em três universidades produziram concordâncias de faixa tão diferentes com os mesmos sistemas, a referência humana é parte do que precisa ser especificado, não uma régua fixa.

**"A rubrica torna isso objetivo."** Uma rubrica torna as expectativas explícitas. Aplicá-la continua sendo interpretação, e o estudo de farmácia achou que fornecer uma rubrica não melhorou a concordância de forma consistente. O que a rubrica compra é um padrão verificável para as justificativas, não uma garantia das notas.

**"Eu teria que conferir tudo, e isso destrói o propósito."** Para algumas tarefas essa é a conclusão certa, e a resposta é estreitar o trabalho. Rascunhar comentários a partir das suas próprias notas de correção deixa o julgamento com você e remove a digitação. Sinalizações de segundo leitor em entregas limítrofes concentram sua atenção onde ela muda um resultado.

**"Meu colega testou e funcionou bem."** Pergunte o que ele mediu. Avaliações positivas convivem com erros nesta literatura de forma rotineira, e um colega que leu algumas saídas sensatas fez uma demonstração, não uma validação. A questão é o que o procedimento dele faria com as redações que você notaria por último.

## O que fazer nesta semana

**1.** Escolha uma avaliação e escreva o único papel que a IA cumpriria. Escreva que evidência te permitiria subir um degrau.

**2.** Rode em cinco entregas que você já corrigiu, escolhidas para incluir uma forte, uma fraca, uma limítrofe e uma com estrutura incomum mas legítima.

**3.** Registre cada discordância com o trabalho e o critério, e nomeie os erros que você consideraria inaceitáveis, não apenas errados.

**4.** Teste se as diferenças de nota seguem uma direção consistente, e verifique separadamente a sua fronteira de aprovação e reprovação.

**5.** Rascunhe o parágrafo de divulgação para os estudantes e o caminho para revisão, e compare o seu tempo de verificação com o tempo de correção que você evitou.

## Para onde ir a seguir

[[assessment-validity|Validade da avaliação]] é o conceito que decide estas questões: se a evidência sustenta a inferência que você quer fazer. [[automated-assessment]] cobre a tecnologia e seu desempenho medido entre formatos, e [[ai-feedback-at-scale]] trata do problema adjacente dos comentários gerados e de se os estudantes agem sobre eles.

Para o que uma nota deve representar quando os estudantes usam IA, incluindo substituição de construto e evidência autenticada de processo, veja [[redesign-assessment-ai-era|redesenhar a avaliação na era da IA]]. Para saber se a detecção pode substituir um desenho de tarefa defensável, veja [[should-we-use-ai-detectors|se devemos usar detectores de IA]]. Para a questão de avaliação que está por baixo de tudo, veja [[checking-whether-educational-ai-works|verificar se uma IA educacional funciona]].
