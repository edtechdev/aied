---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Um guia de campo para educadores sobre como construir um site educacional estático com um assistente de programação de IA: três arquivos de instrução em Markdown para design, segurança e privacidade dos estudantes, com guias legíveis e um pacote para download."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

**O Vibe-Coding Center** é o guia de campo gratuito de Miguel Guhlin para um professor que quer [[vibe-coding|criar por vibe coding]] um pequeno site educacional estático com um assistente de programação de IA — um ticket de saída, um questionário, um portfólio de turma — sem publicar junto uma chave de API exposta ou dados de estudantes.

## O que você pode fazer com ele

Três arquivos de instrução carregam a orientação: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` e `securevcc.md`. Baixe-os para a raiz do projeto, preencha o modelo de briefing do projeto e então peça ao assistente que leia e aplique os três; o guia é explícito que presença não é ativação, então os arquivos precisam ser nomeados no pedido. Guias legíveis explicam cada um deles, incluindo um percurso “Três verificações essenciais antes de compartilhar”: coletar menos dados de estudantes, inspecionar uma chave de API exposta e ajustar o desenho de uma ferramenta à sua tarefa de aprendizagem. O pacote completo acrescenta o próprio site, o pacote de prompts, a revisão de lançamento e os scripts de reconstrução, com um manifesto SHA-256 para o download.

A página companheira de [exemplos do EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) mostra os resultados como ferramentas estáticas em funcionamento, e não como capturas de tela: um gerador de ticket de saída que escreve uma pergunta em um nível escolhido da Taxonomia SOLO, um portfólio de estudante que é um único arquivo HTML no GitHub Pages, e uma biblioteca pesquisável de recursos de desenvolvimento profissional, tudo rodando no lado do cliente sem login no LMS.

## Para quem é

Professores e [[learning-design|designers instrucionais]] na educação básica e no ensino superior que conseguem descrever a ferramenta que querem e estão dispostos a verificar o que o assistente produziu. Também serve a um departamento que quer uma lista de verificação compartilhada antes de alguém publicar uma ferramenta voltada a estudantes, e a instrutores que ensinam [[ai-literacy|letramento em IA]] construindo em vez de criticando.

## Observações e ressalvas

O centro é orientação, não um produto de conformidade: o site não faz nenhuma alegação de conformidade para sua própria meta WCAG 2.2 AA, responde “usar estes arquivos torna meu site conforme?” com não, e diz que uma revisão de engenharia não substitui a autorização da escola nem a revisão jurídica. A prateleira de segurança aponta para axe-core, Gitleaks, ZAP e Playwright; essas são referências, e não software empacotado, e as invasivas se destinam a um alvo descartável ou explicitamente autorizado. A leitura não exige conta. Reconstruir as páginas HTML exige Python e `markdown-it-py`, que é uma dependência de build e não de quem visita. O repositório é licenciado sob MIT, enquanto as artes de terceiros e os projetos vinculados mantêm seus próprios termos, documentados no `CREDITS.md`.

## Conceitos conectados

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
