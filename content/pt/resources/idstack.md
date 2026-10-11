---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
updated: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Um conjunto de código aberto de onze skills do Claude Code que auditam um curso contra a base de evidências do design instrucional, etiquetando cada recomendação com seu nível de evidência."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O **idstack** é uma coleção de código aberto de onze skills para [[learning-design|design instrucional]] baseado em evidências, distribuída como um plugin do Claude Code com uma extensão complementar de painel lateral para o Chrome. Em vez de redigir um curso, as skills auditam um: elas classificam objetivos contra a taxonomia revisada de Bloom, verificam o alinhamento construtivo entre objetivos, atividades e avaliações, sinalizam problemas de carga cognitiva e revisam a acessibilidade contra a WCAG 2.1 AA e o Universal Design for Learning. Cada recomendação carrega um nível de evidência, de T1 para metanálises e ensaios randomizados até T5 para opinião de especialistas. O projeto declara que suas citações se apoiam em 108 estudos revisados por pares em onze domínios de pesquisa; essa contagem é afirmação do próprio projeto, e sua bibliografia é publicada em Markdown para que um revisor possa conferi-la.

Os cursos entram por uma conexão com a API do Canvas, um arquivo IMS Common Cartridge, um pacote SCORM, uma exportação em PDF de uma ferramenta de autoria ou documentos colados. Um manifesto de projeto compartilhado recorda o curso entre sessões, e uma skill de pipeline encadeia as etapas de design pulando o trabalho já concluído. As revisões reportam contra os oito padrões do Quality Matters e o framework Community of Inquiry, separando presença docente, social e cognitiva, e depois ordenam as recomendações por severidade.

## O que saber antes de adotá-lo

O plugin exige o Claude Code e um shell bash para instalar; PowerShell e cmd não conseguem executar o script de configuração, e o Python 3 é recomendado para tendências de pontuação. Os dados do curso ficam na pasta do projeto na máquina do próprio leitor, e só saem dela por uma integração que o usuário invoca, como uma chamada à API do Canvas. A inferência ao vivo da extensão do Chrome precisa da chave de API gratuita do Google AI Studio do próprio leitor, embora um modo de simulação a demonstre sem uma. O projeto se intitula beta na versão 3.5.1.0 e alerta sobre mudanças incompatíveis entre versões menores, e é publicado na conta savvides do GitHub, e não por um autor nomeado.

## Recursos conectados
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
