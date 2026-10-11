---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
updated: "2026-09-27T03:31:33-04:00"
type: resource
summary: "A coleção de código aberto de skills de agente pequenas e componíveis de Matt Pocock, incluindo uma skill de ensino multissessão, uma skill de questionamento implacável e orientação sobre como escrever documentos que um agente consiga seguir."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

**Skills for Real Engineers** é o diretório publicado de skills de agente de Matt Pocock: arquivos de instrução pequenos e componíveis que se instalam no Claude Code, no Codex ou em outro agente, escritos para serem adaptados em vez de adotados inteiros. A maior parte da coleção serve ao trabalho de software, mas várias skills são instrumentos de educação, construídos para ensinar e questionar em vez de para escrever código.

O exemplo mais claro é `teach`, que roda ao longo de múltiplas sessões e trata o diretório de trabalho como um espaço de ensino com estado, de modo que o progresso de quem aprende e as questões em aberto persistem entre conversas em vez de recomeçar a cada vez. `grill-me` e seu primitivo subjacente `grilling` entrevistam o usuário implacavelmente sobre um plano até que cada ramificação esteja resolvida, o que é [[socratic-method|questionamento socrático]] como um procedimento reutilizável em vez de um clima conversacional. `wait-what` responde no momento em que uma mensagem não pega, reapresentando-a em linguagem simples com o contexto que faltava, um movimento que qualquer instrutor reconhece de ver uma explicação não emplacar na primeira vez. `writing-for-agents` cobre como escrever documentos que um [[prompt-engineering|agente]] consiga seguir, o que hoje é a forma prática de escrever instruções para material de curso com [[pedagogical-agent|IA]]. `to-questionnaire` converte uma decisão em um questionário para quem puder respondê-la, `handoff` compacta uma conversa em um documento de que outro agente possa continuar, e `wizard` gera um walkthrough interativo para passos que só uma pessoa pode executar.

## O que saber antes de adotá-lo

Tudo é [[open-source|código aberto]] sob a licença MIT e livre para servir como ponto de partida para [[ai-literacy|letramento em IA]] local ou [[self-directed-learning|estudo autodirigido]]. A adoção é grande e veloz: cerca de 270.000 estrelas e 23.000 forks quando verificado em setembro de 2026, com o commit mais recente em 18 de setembro de 2026. A ressalva é o escopo. As skills pressupõem um contexto de trabalho de [[human-ai-collaboration|engenheiro]], estão organizadas em grupos de engenharia, produtividade, descontinuadas e em andamento, então algumas entradas são explicitamente inacabadas ou aposentadas, e o README serve também como formulário de inscrição em newsletter. Trate as skills de ensino e questionamento como a parte transferível, e espere reescrever qualquer uma delas antes de colocá-la na frente de estudantes.

## Recursos conectados
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
