---
title: "Como sabemos que uma IA educacional está funcionando corretamente, e não apenas pontuando bem?"
created: "2026-10-02T08:07:09-04:00"
updated: "2026-10-29T08:28:16-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
translation_of: faqs/checking-whether-educational-ai-works
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O relatório de avaliação de um fornecedor chega com um número no topo: concordância com corretores humanos, 0,84. Ou seu piloto termina na sexta-feira e a evidência consiste em uma pesquisa de satisfação mais uma linha de benchmark copiada das notas de lançamento do modelo. Na reunião alguém pergunta se o sistema funciona, e você tem um número que soa como uma resposta.

A resposta curta: as pontuações que você vê com mais frequência medem semelhança, e semelhança é uma afirmação mais fraca do que "isto ensina" ou mesmo "este feedback é legível". Decida o que cada número pode provar, pontue cada saída que o seu sistema produz, e transforme a acurácia em uma regra com um limiar, uma pessoa e uma economia anexada. Um número sobre o qual ninguém consegue agir não é evidência.

## A versão resumida

**1.** Escreva uma frase nomeando o que você se importa, e então escolha uma medida que leia essa coisa. A sobreposição de palavras não lhe dirá se o raciocínio está correto.

**2.** Avalie cada saída separadamente. Uma pontuação forte de correção não diz nada sobre o módulo de feedback ao lado dela.

**3.** Peça a uma pessoa que avalie cerca de cinquenta saídas e compare essas avaliações com o seu verificador automático. Onde os dois discordarem, o verificador é a coisa sob teste.

**4.** Substitua "acurácia 0,84" por uma regra: abaixo desta confiança, uma pessoa lê a resposta. Relate o limiar, a parcela de trabalho que ele economiza e no que a concordância se tornou.

**5.** Teste a segurança ao longo de conversas inteiras, e confira qualquer estudante simulado antes de confiar no que ele diz sobre o seu tutor.

## Decida o que o número pode provar

Duas famílias de números dominam esta literatura. Ambas medem o quão proximamente a sua saída se assemelha a outra coisa, o que é uma afirmação mais fraca do que correção.

**Pontuações de similaridade** (ROUGE e BLEU) comparam a redação da resposta do seu sistema com a redação de uma resposta de referência. Um modelo que escreve algo próximo do texto esperado pontua bem, mesmo quando seu raciocínio está errado, ou quando um estudante poderia chegar à resposta certa por um caminho que não ensina nada.

**Pontuações de concordância** (QWK, kappa quadrático ponderado) medem o quão proximamente as notas do modelo se alinham com as de um humano. Um modelo pode coincidir com o corretor na nota final estando errado sobre o porquê, e o porquê é a parte com que o estudante aprende.

Um estudante pode chegar a uma resposta errada por um caminho errado que parece certo, e nenhuma pontuação de similaridade percebe. Se o raciocínio é o que você se importa, a medida tem de lê-lo: uma rubrica aplicada por uma pessoa, ou uma verificação escrita para aquela etapa específica.

O assistente do curso de Sistemas de Controle Linear relata isso da maneira correta. Sua melhor configuração alcançou uma pontuação de similaridade de **0,4093** contra respostas de referência, com a melhoria medida de forma confiável acima de zero, e os autores afirmam claramente que os números medem redação e formato ([[lora-finetuned-control-systems-course-qa-2026]]). A pontuação é modesta e o artigo continua útil, porque ele diz o que a pontuação cobre.

## Pontue cada saída separadamente

No projeto WrAFT, um modelo ajustado alcançou uma pontuação de concordância de **0,84** com corretores humanos em 360 redações TOEFL reservadas para teste. Esse é um resultado forte para correção. O modelo do mesmo projeto, treinado para escrever feedback, produziu saídas truncadas e não analisáveis, enquanto simplesmente fazer prompting com um modelo diferente produziu feedback que os professores preferiram ([[wraft-automated-writing-evaluation-argumentative-2026]]).

A base de conhecimento registra a mesma falha em uma segunda forma: uma implantação cujo módulo de correção pontuou bem e cujo feedback chegava cortado no meio da frase e ilegível. Nada no número de destaque dizia isso.

Então liste as saídas que o seu sistema produz, e dê a cada uma a sua própria medida e a sua própria condição de aprovação. Correção, texto de feedback, seleção de dicas e recusas de segurança falham de modos diferentes, e uma pontuação no nível do módulo não consegue ver além do próprio módulo.

## Coloque uma pessoa onde o modelo está inseguro

Uma correlação lhe diz que o modelo costuma estar certo. Ela não lhe diz o que fazer nas ocasiões em que ele não está. O resultado de roteamento por confiança é o modelo mais limpo na base de conhecimento, e é curto o bastante para copiar.

A confiança revelou-se um sinal de alerta confiável: quando o modelo estava inseguro, era mais provável que estivesse errado (**β = -0,602, p < 0,001**). A equipe enviou a uma pessoa as **20%** de respostas menos confiantes. Essa única regra elevou a concordância com as notas humanas de **0,78 para 0,82** e cortou o trabalho manual de correção em cerca de **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Veja o que o relatório contém: um limiar, uma pessoa e uma economia. "Concordância 0,84" não contém nenhum desses, e é por isso que é difícil agir sobre ela e fácil discuti-la.

## Confira o seu verificador automático contra uma pessoa

Muitas equipes hoje usam um segundo modelo para julgar o primeiro. O arranjo é razoável e o segundo modelo não está automaticamente certo.

Um estudo que fez um modelo de fronteira escrever dicas para um [[intelligent-tutoring|sistema de tutoria inteligente]] constatou que cerca de **35%** delas eram gerais demais, incorretas, ou entregavam a resposta, e que as próprias verificações automatizadas de qualidade do modelo discordaram do julgamento humano sobre quais eram ruins ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Versão prática: pegue uma amostra de cerca de cinquenta saídas, peça a uma pessoa que as avalie, e compare com as avaliações do seu verificador. Onde os dois divergirem, você aprendeu algo sobre o verificador. Guarde a amostra e a tabela de discordâncias, porque é também o artefato que responde a um revisor que pergunta como você sabe.

## Meça a própria quantidade quando a tarefa permitir

A correção mais limpa é treinar o modelo na mesma quantidade que você pretende medir. Um modelo ajustado foi treinado para reproduzir as propriedades estatísticas de questões de prova: o quão difícil cada item é, o quão bem ele separa os estudantes mais fortes dos mais fracos. Ele aprendeu esses padrões em vez de ser informado deles ([[multimodal-item-parameter-estimation-2026]]). Como o alvo era uma propriedade da própria avaliação, a avaliação pôde ser sobre essa propriedade em vez de sobre a redação.

Relate a progressão e não apenas o ponto final. O simulador de escrita do SWIM publicou a pontuação de cada estágio lado a lado: prompting com rubrica **0,577**, ajuste fino **0,474 ± 0,023**, aprendizado por reforço **0,618 ± 0,005** ([[swim-student-writing-simulation-2026]]). Um leitor consegue ver naquela tabela se o treinamento fez alguma coisa. Um único número final não consegue lhes dizer, e esconde um estágio em que o modelo ajustado teve desempenho pior que o prompt.

## Compare com algo fora do seu projeto

Obtenha uma linha de base primeiro, inclusive uma barata. O modelo do assistente de curso sem ancoragem pontuou abaixo de uma busca simples por palavras-chave, que é o tipo de resultado que muda o roteiro do produto e custa um dia para descobrir.

Um benchmark externo então lhe diz se o seu número é bom ou não. No benchmark pedagógico CDPK, o EduQwen alcançou **96,52%** contra **90,55%** do Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). O Pedagogy Benchmark, construído a partir de exames reais de desenvolvimento profissional de professores e cobrindo **97 modelos**, encontrou acurácia variando de **28% a 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

Em uma tarefa sobre ensino, os modelos variaram de ruins a bons, então um resultado de benchmark coloca seu sistema em algum lugar dentro de uma faixa ampla.

## Teste a segurança ao longo de uma conversa inteira

A maior parte dos testes de segurança verifica uma única troca. Os danos que importam na tutoria se acumulam. O SafeTutors constatou que mesmo modelos construídos especificamente para ensinar se degradam ao longo de uma conversa longa e podem revelar respostas que deveriam estar retendo ([[hazra-safetutors-pedagogical-safety-2026]]).

Faça a verificação em conversas completas, e escreva as falas de teste deliberadamente: o estudante que está errado, o que continua insistindo, o que tenta convencer o modelo a sair do seu papel. Um tutor que se mantém por dez turnos e cede no décimo primeiro falha no teste que importa, e uma suíte por resposta o pontuará como limpo.

## Confira o estudante simulado antes de confiar nele

Gerar estudantes simulados em vez de recrutar estudantes reais torna a avaliação muito mais barata. Um estudante simulado também é um instrumento de medida, e pode estar errado dos modos como os instrumentos erram: cooperativo demais, fluente demais, rápido demais em aceitar uma dica.

O teste mais direto na base de conhecimento comparou estudantes simulados e estudantes com prompting contra **382 diálogos reservados** da maior coleção pública de diálogos reais de matemática entre estudante e tutor, usando sete medidas que cobrem linguagem, comportamento e pensamento ([[simulated-students-tutoring-dialogues-2026]]). Outros trabalhos pressionam o realismo por ângulos diferentes: o [[inside-llm-student-simulator-reasoning-2026|INSIDE]] treina modelos para agir e pensar como estudantes, e perfis sensíveis ao histórico condicionam a simulação ao passado de um estudante em vez de a uma persona fixa ([[history-aware-student-simulation]]).

Se o seu arranjo de teste é um estudante simulado, valide o simulador contra transcrições reais antes de deixá-lo avaliar o seu tutor.

## O que as equipes de avaliação erram

Uma pontuação alta de concordância significa que o sistema está correto. Significa que o sistema corrige como o corretor com quem você comparou, nas redações em que você comparou. O 0,84 do WrAFT vinha com um feedback que não era analisável.

Um número pode representar o produto. As equipes lançam um painel com "acurácia 0,84" no canto e nenhum campo para o módulo de feedback, a política de dicas ou o comportamento de recusa. A pontuação no nível do módulo é o número mais fácil de calcular e a coisa menos informativa a relatar.

Um benchmark externo resolve se a ferramenta funciona. A faixa de 28% a 89% do Pedagogy Benchmark diz que a família de tarefas é difícil e mal atendida de forma desigual. Sua posição nessa faixa é um fato sobre o seu modelo. O que os seus estudantes conseguem fazer depois é um fato diferente.

Um modelo julgando um modelo é um substituto barato para avaliações humanas. É barato. O número de 35% e a discordância sobre quais dicas eram ruins descrevem o que um juiz que nunca foi conferido deixa passar.

Estudantes simulados tornam a avaliação gratuita. Tornam-na barata, e transferem o custo para a validação. A comparação de 382 diálogos existe porque o instrumento precisava ser calibrado.

## O que vai voltar contra você

**"Não temos anotadores para isso."** Cinquenta saídas avaliadas bastam para começar. Avalie-as você mesmo se ninguém estiver livre, e guarde a planilha.

**"Nossa pontuação de benchmark supera o Gemini."** Supera, no CDPK, com os prompts que aquele benchmark usa. Traga a medida sem assistência para o lado dela.

**"Nosso juiz automatizado concorda com nossos avaliadores humanos."** Então você tem uma correlação em uma amostra. Pergunte em quais saídas ele discordou e leia essas, porque é ali que mora a falha.

**"Não conseguimos fazer uma avaliação completa antes do lançamento."** Faça as três baratas: uma saída pontuada separadamente, cinquenta saídas avaliadas por uma pessoa, uma passagem de segurança do tamanho de uma conversa. Os itens caros podem vir depois do piloto.

**"O sistema é só uma demonstração, então a avaliação é prematura."** Uma demonstração é o lugar mais barato para descobrir que o seu número mede redação. Uma vez que haja um roteiro de produto anexado a ele, a mesma descoberta custa mais para ser corrigida.

## O que fazer esta semana

**1.** Escreva a afirmação de uma frase que sua avaliação deve sustentar. Coloque-a no topo do documento de avaliação.

**2.** Liste cada saída que o sistema produz e dê a cada uma uma linha, uma medida e uma condição de aprovação.

**3.** Pegue cinquenta saídas, avalie-as você mesmo, e coloque suas avaliações ao lado das do verificador.

**4.** Calcule a distribuição de confiança e escreva a regra de roteamento com um número nela, mais o nome da pessoa que lê o que ficar abaixo.

**5.** Rode uma conversa de segurança em que o estudante está errado, contesta duas vezes e pede a resposta.

## Para onde ir agora

[[making-ai-better-at-supporting-learning|Como podemos fazer a IA apoiar melhor a aprendizagem na nossa própria disciplina?]] cobre o lado do desenho do mesmo problema. [[training-ai-tutors-to-guide-rather-than-answer]] trata do caminho de treinamento para um comportamento de tutoria, e [[evaluating-ai-interventions-methods]] é a versão desta pergunta voltada ao professor, com [[reporting-interpreting-aied-research]] como a versão voltada à pesquisa. Os métodos ficam sob [[ai-ed-evaluation]] e [[llm-training-and-fine-tuning]].
