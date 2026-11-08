---
title: "Bibliotecas Públicas com IA"
created: "2026-11-05T02:58:35-05:00"
type: resource
summary: "Um piloto nacional de 2025–2026 que instala uma estação de trabalho compartilhada do Public AI em bibliotecas públicas dos Estados Unidos — conversa, geração de imagens, música e vídeo, uma IDE de código e um guia educacional — com uma conta privada para cada frequentador."
url: https://libraries.publicai.co/
source_code: https://github.com/forpublicai/libraries-kiosk
author: "Public AI"
author_url: https://libraries.publicai.co/
resource_type: [software, collection of tools]
access: [freemium]
license: "GPL-3.0 (kiosk site); MIT (inference utility)"
last_verified: "2026-11-05"
foundations: [ai-literacy]
technology: [llm, generative-ai]
ethics: [digital-divide, equity-in-ai-education]
level: [adult learning]
audience: [librarians, administrators, learners]
confidence: high
updated: "2026-11-08T04:49:42-05:00"
translation_of: "resources/public-ai-libraries"
source_updated: "2026-11-05T07:06:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

**Public AI Libraries** é um piloto nacional de 2025–2026 que instala uma estação de trabalho de IA compartilhada, chamada de quiosque, em [[libraries|bibliotecas públicas]] dos Estados Unidos. É uma parceria da Biblioteca do Congresso, da Metagov e da Public Knowledge, com a adesão das bibliotecas estaduais de Utah e Nova Jersey; oito bibliotecas em cinco estados operavam um quiosque quando a página do programa foi lida pela última vez. A premissa é prover acesso, e não treinar: a [[digital-divide|biblioteca fornece o acesso]] que cada frequentador não pode comprar, em um lugar com equipe em que alguém pode ajudar.

## O que você pode fazer com ele

Cada quiosque é uma estação de trabalho hospedada na nuvem que roda em um computador que a biblioteca já possui. Ele oferece um assistente de chat para pesquisa, aprendizagem e perguntas gerais; geração de imagens, música e vídeo; uma IDE on-line para programação e pequenos projetos de aplicativos; e uma área educacional com um guia de aprendizagem interativo e material selecionado pela biblioteca. Cada frequentador recebe uma conta separada, então o trabalho e o histórico ficam privados mesmo em uma máquina compartilhada — o programa afirma que não armazena as conversas nem o conteúdo gerado dos frequentadores em sua própria plataforma.

## Para quem é

Bibliotecas públicas que querem hospedar um quiosque (o programa aceita inscrições de unidades-piloto) e a equipe que apoia os frequentadores que o usam. Os casos de uso publicados são candidaturas de emprego, planos de negócios, trabalhos de curso e projetos criativos. O código também vale a leitura para quem constrói serviços de IA de interesse público: o site do programa e o front end do quiosque são GPL-3.0 em [libraries-kiosk](https://github.com/forpublicai/libraries-kiosk), e o serviço de conversa é o Public AI Inference Utility, de [[open-source|código aberto]] (MIT), em [chat.publicai.co](https://github.com/forpublicai/chat.publicai.co), uma implantação do Open WebUI que qualquer pessoa pode usar com uma conta gratuita.

## Notas e ressalvas

- Bibliotecas participantes contribuem com **\$1.000 por implantação de quiosque por ano**; o piloto em si está limitado às unidades que se inscreveram.
- A declaração de privacidade é uma afirmação do programa, não uma constatação auditada; uma biblioteca deve confirmar os termos de retenção e de segurança infantil em seu próprio acordo de tratamento de dados.
- A segunda e a terceira fases do roteiro, que permitem às bibliotecas ingerir arquivos locais e governar os sistemas resultantes, estão planejadas, não entregues.

## Conceitos conectados

- [[libraries]]
- [[digital-divide]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[open-source]]
- [[lifelong-learning]]
- [[llm]]
