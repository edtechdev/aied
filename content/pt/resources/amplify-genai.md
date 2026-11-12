---
title: "Amplify GenAI"
created: "2026-11-12T20:20:00-05:00"
updated: "2026-11-12T20:20:00-05:00"
type: resource
summary: "A plataforma de IA generativa empresarial da Vanderbilt, licenciada sob MIT e implantada na própria conta da AWS da instituição: assistentes personalizados sobre documentos locais, respostas com recuperação aumentada, compartilhamento em toda a organização e contabilização de custos até a mensagem individual."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/amplify-genai
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O Amplify GenAI é a aposta contrária a uma licença para todo o campus de um assistente comercial: a instituição opera a plataforma por conta própria, dentro da sua própria conta da Amazon Web Services, e paga pelo que usa. A Vanderbilt a construiu para a sua própria comunidade, publicou-a sob MIT em três repositórios e agora a oferece a outras organizações como alternativa a contratos empresariais por assento — o argumento é que o que deve ser caro são os modelos, não o número de assentos.

## O que você pode fazer com ele

Os usuários criam assistentes personalizados carregando documentos ou conectando fontes de dados, e os assistentes respondem com [[rag|geração aumentada por recuperação]] sobre esse material em vez de se basear apenas no treinamento geral. Os assistentes podem ser compartilhados em toda a organização, encadeados em uma mesma conversa e dotados de modelos de prompt; a plataforma também produz arquivos do PowerPoint e do Word, diagramas e visualizações. A administração recebe o que um serviço compartilhado precisa: contabilização de custos até o nível da mensagem, limites por usuário, pastas e espaços de trabalho, e SSO, tudo em uma implantação que a instituição controla.

A decisão de projeto que mais importa para uma [[higher-ed|universidade]] é o modelo de contabilização. A Vanderbilt relata que, com 1,300 usuários piloto, seu custo por usuário foi de cerca de \$3 por mês incluindo a AWS, e que metade desses usuários consumiu menos de \$1 por mês em tokens — números que a universidade apresenta como estudo de caso, não como referência auditada. A cobrança por uso recompensa um campus em que uma minoria de usuários faz a maior parte do trabalho, que é a forma normal da adoção de IA, e torna a pergunta do escritório financeiro (“quanto isso custa por estudante?”) respondível a partir de registros, e não de um contrato.

## Para quem é

Áreas centrais de TI e escritórios de CIO que já executam cargas de trabalho na AWS e querem uma alternativa mantida pela comunidade a um assistente empresarial comercial; docentes que precisam de assistentes fundamentados no material do curso sem enviá-lo ao produto de consumo de um fornecedor; e instituições que querem um único lugar para ver o que as pessoas fazem com os modelos. Como é implantado na própria conta da instituição, a questão da residência dos dados é respondida pela implantação, e não pela promessa de um fornecedor.

## Observações e ressalvas

Grátis para licenciar, não para operar: a instituição paga a AWS e os provedores de modelos. A escolha de modelo passa pelo Amazon Bedrock (Anthropic, Mistral) ou pela OpenAI e o Microsoft Azure, e a execução de modelos locais próprios não está implementada. O projeto declara com clareza que não pode dar suporte a implantações individuais e encaminha as organizações a parceiros comerciais — então o custo realista inclui equipe ou um contratado. É uma implantação de três repositórios (frontend, backend, infraestrutura) com dezenas de estrelas e não milhares, e a comparação de custos acima é a experiência da própria Vanderbilt, não um estudo controlado. Instituições que preferem manter a inferência em hardware próprio devem olhar o [MindRouter](/aied/resources/mindrouter/) e ler os dois juntos: o Amplify é uma camada de aplicação sobre modelos de fornecedores, o MindRouter é um gateway sobre as suas próprias GPUs.

## Conceitos conectados

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
