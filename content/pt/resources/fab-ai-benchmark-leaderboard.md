---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Um leaderboard de modelos para benchmarks educacionais voltados a países de baixa e média renda, cobrindo pedagogia, alfabetização fundamental, SEND, matemática visual e desempenho multilíngue, com colunas de preço e pesos abertos."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
contributors: [editor]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

A Fab AI avalia modelos em tarefas educacionais que importam onde orçamentos, largura de banda e cobertura de idiomas são restritos, nos [[global-south|países de baixa e média renda]] para os quais o benchmark foi construído, e publica os resultados como um leaderboard ordenável em vez de um artigo. A tabela principal pontua um benchmark de pedagogia ao lado de SEND, matemática visual e raciocínio visual, com abas separadas para pedagogia multilíngue, alfabetização fundamental e avaliação de leitura em voz alta.

## O que você pode fazer com ele

Compare cerca de 300 modelos em pontuações de pedagogia que atualmente vão de pouco acima de noventa por cento até 21%, e depois ordene pelo que um ministério da educação realmente precisa pesar: preço por milhão de tokens, número de parâmetros, pesos abertos e data de lançamento. A dispersão na parte de baixo é a parte útil. Modelos abertos abaixo de 2B ficam entre 21% e 43% no benchmark de pedagogia, enquanto os modelos de fronteira ficam pouco acima de noventa por cento, o que transforma "podemos rodar isso offline em hardware barato" em uma troca quantificada em vez de um palpite.

A aba de pedagogia [[multilingual-learning|multilíngue]] é o motivo para salvar a página nos favoritos. A maioria dos benchmarks educacionais é apenas em inglês, e a pergunta de se a pedagogia de um modelo sobrevive à tradução é exatamente a pergunta que um ministério em um sistema multilíngue precisa ver respondida. Os dados podem ser baixados como CSV, então as comparações podem ser refeitas localmente.

## Para quem é

Formuladores de políticas e equipes de compras que escolhem modelos para sistemas nacionais, pesquisadores que estudam [[digital-divide|a lacuna de acesso]] na educação apoiada por IA, e desenvolvedores que precisam de um alvo de pedagogia que não seja uma prova em inglês.

## Observações e ressalvas

Um leaderboard mede modelos nas tarefas do próprio benchmark: uma pontuação alta de pedagogia é evidência sobre aqueles itens, não sobre uma sala de aula. A coluna de preço mistura preços de tokens de entrada e de saída na proporção 3:1, o que é uma escolha de modelagem e não o que qualquer implantação específica custará. A cobertura de idiomas e de modelos hospedados localmente muda conforme novos modelos aparecem, e as pontuações baixas dos modelos pequenos refletem em parte o formato da tarefa tanto quanto a capacidade. O enquadramento da Fab AI é explicitamente sobre países de baixa e média renda, então o conjunto de itens do benchmark reflete esse contexto e não deve ser lido como um ranking geral da educação. Verifique as datas de lançamento: várias entradas são anteriores à geração atual de modelos.
