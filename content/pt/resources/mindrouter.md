---
title: "MindRouter"
created: "2026-11-12T20:20:00-05:00"
updated: "2026-11-12T20:20:00-05:00"
type: resource
summary: "Um gateway de inferência sob Apache-2.0 da Universidade de Idaho que coloca uma única API compatível com OpenAI na frente de um cluster universitário de nós GPU com vLLM e Ollama, e acrescenta agendamento de repartição justa, cotas de tokens por usuário, SSO, registro de auditoria e monitoramento ao vivo de GPU e energia."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/mindrouter
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

A maioria das conversas sobre IA no campus começa por qual modelo comprar e para antes da pergunta mais difícil: onde ele roda, quem o mede e quem pode ver os registros. O MindRouter é uma resposta a essa segunda pergunta. É um gateway auto-hospedado que fica na frente de um cluster heterogêneo de servidores [[llm|LLM]] — nós vLLM e Ollama em GPUs que a instituição possui — e expõe uma API que fala os dialetos da OpenAI, da Anthropic e do Ollama, traduzindo entre eles para que o código cliente existente continue funcionando.

## O que você pode fazer com ele

Aponte uma ferramenta para o gateway em vez de para o endpoint de um fornecedor. Atrás dele, o MindRouter cuida das partes que uma implantação compartilhada precisa: agendamento de repartição justa com deficit round robin ponderado, cotas de tokens e requisições por usuário, acesso baseado em papéis com SSO opcional via Azure AD/Entra, Google, qualquer provedor OIDC ou SAML 2.0, e registro de auditoria completo de prompts, respostas e artefatos. Um agente sidecar de GPU informa utilização, memória, temperatura e potência por nó, de modo que a administração consegue ver o custo energético por requisição e drenar um backend com cuidado quando há manutenção prevista. Ele cobre mais que chat — embeddings, visão, geração de imagens e vídeo, texto para fala e fala para texto, OCR de documentos — e distribui servidores MCP e habilidades de agente para assistentes de programação.

A razão pela qual uma universidade se importaria é a que o projeto nomeia: [[institutional-ai-infrastructure|soberania institucional da IA]]. Prompts e documentos ficam em infraestrutura que a instituição opera, em vez de passar por uma nuvem de terceiros, o que é mais fácil de defender diante de um conselho de docentes ou de um escritório de [[privacy|privacidade]] do que um acordo de tratamento de dados com um fornecedor. Se esse argumento se sustenta depende de a instituição ter as GPUs, a energia e a equipe — o gateway torna a hospedagem local administrável, não barata.

## Para quem é

Grupos de computação científica e de TI central com capacidade de GPU já instalada, centros de ensino e aprendizagem que querem um único lugar para medir o uso de docentes e estudantes, e administrações que ponderam plataformas empresariais hospedadas contra rodar a inferência por conta própria. É uma implantação de Docker Compose com configuração de SSO documentada e identidade visual personalizável, e é mantido na Universidade de Idaho, onde o autor o apresentou na PEARC '26; o projeto tinha 22 estrelas e 3 forks em novembro de 2026.

## Observações e ressalvas

Gratuito e de código aberto sob Apache-2.0, mas o custo se desloca em vez de desaparecer: hardware, eletricidade e o tempo da equipe para operar um cluster. O software é jovem para os padrões da infraestrutura — três contribuidores, uma única instituição de origem e versões numeradas em centenas de tags — então uma universidade deveria pilotá-lo ao lado de um serviço existente, e não como o único caminho até um modelo. Não há no repositório uma avaliação publicada do comportamento do agendamento e das cotas sob carga real de campus; o artigo da PEARC é o lugar para buscar o relato dos próprios autores.

## Conceitos conectados

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
