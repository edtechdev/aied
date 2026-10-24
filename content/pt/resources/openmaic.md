---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
updated: "2026-10-24T08:38:48-04:00"
type: resource
summary: "O lançamento open-source do MAIC: uma sala de aula multiagente que transforma um tema ou documento em slides, quizzes, simulações interativas e atividades baseadas em projeto, conduzida por professores e colegas de IA."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O **OpenMAIC** é o lançamento open-source da sala de aula multiagente MAIC descrita em [[intelligent-tutoring|o estudo MAIC]]: você descreve um tema ou anexa seus próprios materiais, e ele gera uma aula completa — slides, quizzes, simulações HTML interativas e atividades baseadas em projeto — e então a conduz por meio de professores de IA e colegas de IA que falam, desenham no quadro e participam da discussão. É o código por trás de uma sala de aula que pode ser executada, e não apenas lida.

## O que você pode fazer com ele

A geração em um clique produz uma aula em minutos a partir de um prompt ou de um documento, áudio ou vídeo enviado. A camada multiagente acrescenta discussão em sala de aula da qual o aprendiz pode participar ou ser chamado, debates de mesa-redonda entre personas com ilustrações no quadro, e perguntas livres em que o professor responde com slides ou diagramas. As sessões suportam apresentações de slides, quizzes, simulações interativas e PBL, e exportam como `.pptx` editável ou `.html` interativo. A versão 1.0.0 (agosto de 2026) acrescentou uma bancada de agentes: um espaço de trabalho centrado no chat que planeja e revisa cursos inteiros, sessões duráveis mantidas no servidor que você pode cancelar, retomar ou redirecionar, e 24 habilidades embutidas cobrindo slides, quizzes, interativos, imagens, vídeo e vozes. Um pacote `SKILL.md` permite que um harness de agente construa salas de aula a partir de um aplicativo de mensagens.

## Para quem é

Instrutores e equipes de curso que querem materiais gerados que ainda assim possam editar, designers instrucionais prototipando atividades multiagente, e desenvolvedores que precisam de uma sala de aula auto-hospedável, e não de um produto hospedado. Escolas podem implantá-lo no Vercel ou com Docker, e o projeto traz uma demonstração hospedada em open.maic.chat.

## Observações

Licenciado sob MIT, com guia do usuário em inglês e chinês e uma comunidade ativa no Discord e no Feishu. Ele é neutro quanto a modelo: você fornece ao menos uma chave de provedor de LLM, e componentes locais opcionais (Lemonade para modelos locais, FunASR para reconhecimento de fala) permitem rodar mais da pilha offline — de modo que "gratuito" descreve o software, não a conta de inferência. O artigo por trás dele apareceu no *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), e o repositório tinha mais de 38.000 estrelas em setembro de 2026.

## Conceitos conectados

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]

