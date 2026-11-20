---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Uma aplicação web para construir tarefas de IA passo a passo, em que o professor define o papel do modelo e as barreiras ao uso pelos estudantes, e a identidade do estudante é mantida fora do contexto do modelo."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

Um builder para tarefas integradas com IA, construído por Joseph Slade na Oregon State University e operado pela AI Education Labs, Inc. A premissa é que a alternativa a um chatbot sem regras não é a proibição, mas a estrutura: o professor define as etapas pelas quais o estudante passa, decide que papel o modelo desempenha em cada etapa e define até onde o estudante pode se apoiar nele. A tarefa é então publicada como um link de entrada, em vez de distribuída como um documento de prompt.

## O que você pode fazer com ele

- **Defina o papel do modelo por tarefa.** O builder oferece predefinições de tutor, questionador socrático, provedor de feedback e assistente de pesquisa, além de um prompt personalizado, para que o assistente se comporte como a tarefa exige.
- **Coloque barreiras entre as etapas.** Uma etapa pode exigir que o estudante explique seu raciocínio antes de avançar, e a ajuda de IA pode ser limitada por etapa — a interface mostra uma contagem restante em vez de acesso ilimitado.
- **Escolha a superfície de trabalho.** Os estudantes escrevem em uma página de documento com comentários na margem, com layouts de chat e de caderno disponíveis onde se encaixam melhor na tarefa do que uma página.
- **Publique e acompanhe o raciocínio, não apenas o resultado.** Um link de entrada inscreve os estudantes, o progresso é salvo conforme avançam, e o professor pode ler a transcrição de cada estudante e exportá-la como CSV ou Markdown.
- **Rascunhe com IA e depois refine.** A configuração pode começar a partir de algumas perguntas, de uma tarefa existente enviada por upload ou de uma tarefa anterior, com um assistente do lado do professor preenchendo um primeiro rascunho.

Os exemplos publicados sugerem o alcance pretendido: uma tarefa de física sobre evidências e testemunhos, um exercício de biologia que diagnostica o erro de raciocínio na explicação de um estagiário de IA, e uma tarefa de psicologia que verifica se uma notícia descreve o desenho de um estudo.

## Para quem é

Professores do ensino superior que querem que o [[learning-design|desenho da aprendizagem]] carregue a política de IA — isto é, que preferem restringir como um modelo pode ser usado dentro de uma tarefa a fiscalizar se ele foi usado. As barreiras e as configurações de papel são uma expressão de [[guardrails|salvaguardas]] em tempo de design, e a aplicação é voltada para atividades de curso, e não para a implantação institucional de chat.

## Observações e ressalvas

- **Fase piloto.** Os termos afirmam que o serviço é atualmente fornecido sem custo para pilotos e que planos pagos podem ser introduzidos com aviso, e que recursos podem mudar ou ser retirados. Não há página pública de preços; você só chega aos preços depois de fazer login.
- **A alegação de privacidade é arquitetural e vale a pena ler com atenção.** Cada estudante recebe um identificador de sessão aleatório por tarefa, o mapeamento da conta do estudante para a sessão permanece no servidor do Repertoire, e o modelo recebe a sessão anônima, o contexto da tarefa e a escrita do estudante. A ressalva está na própria política: texto que o estudante digita e que o identifica é enviado como qualquer outro texto, e o professor da disciplina pode ler as transcrições.
- **Inferência de terceiros.** As respostas são geradas pela API Claude da Anthropic, com a API da OpenAI como backup, sob termos comerciais que a política diz excluírem o treinamento com entradas e saídas da API a partir de September 2026. Uma instituição deve confirmar isso por meio de seu próprio contrato, e não por uma página web.
- **Não é um avaliador.** A política e os termos descrevem os julgamentos do assistente, como "objetivo atingido", como auxílios ao professor; notas e decisões acadêmicas ficam com o professor e a instituição, e as decisões sobre [[ai-use-disclosure|divulgação do uso de IA]] aos estudantes ficam a cargo do professor.
- **Hospedado nos EUA.** Os dados ficam no Google Cloud Firestore com hospedagem da Vercel, e a política aborda as obrigações da FERPA quando o serviço lida com registros educacionais; usuários fora dos Estados Unidos são informados de que seus dados são processados lá.
