---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Um leaderboard público de detectores de texto de IA avaliados no RAID, um benchmark construído para testar a robustez contra modelos, domínios, configurações de decodificação e ataques adversariais."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
contributors: [editor]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O RAID é o benchmark por trás da maioria das alegações sérias sobre [[ai-detection|detecção de texto de IA]], e seu leaderboard é o lugar para verificar se a precisão publicada de um detector sobrevive a uma mudança de modelo, domínio, configuração de decodificação ou ataque deliberado. As entradas são pontuadas no conjunto de teste e podem ser enviadas por qualquer pessoa que siga o processo de submissão do repositório.

## O que você pode fazer com ele

Filtre por domínio — resumos, livros, notícias, poesia, receitas, Reddit, resenhas, wiki — por estratégia de decodificação (greedy ou sampling), por penalidade de repetição e por ataque adversarial, incluindo espaços em branco, homóglifos, substituição de sinônimos, paráfrase, espaços de largura zero e exclusão de artigos. Depois compare um detector entre métricas: AUROC, TPR a uma taxa de falsos positivos de 5% e TPR a 1%.

Esse conjunto de filtros é o ponto central. Um detector que pontua perto de 1.000 no agregado pode despencar quando o texto foi parafraseado ou o modelo de origem muda, e o leaderboard permite ver a queda antes que uma instituição aposte um caso de [[academic-integrity|má conduta]] nele. A coluna de falsos positivos de 1% importa mais na educação, porque em escala institucional uma taxa de erro de 1% significa centenas de estudantes acusados injustamente.

## Para quem é

Pesquisadores que avaliam métodos de detecção, administradores que redigem políticas que podem referenciar um detector, e professores que querem uma resposta concreta para "isso pode ser detectado?" antes de dizê-lo em um plano de ensino.

## Observações e ressalvas

O benchmark mede a detecção de texto gerado por máquina, não má conduta: um estudante que usa IA para planejar, esboçar ou revisar produz um texto que os detectores não foram construídos para capturar, e um estudante [[language-learning|escrevendo em uma segunda língua]] é um risco conhecido de falso positivo que um leaderboard não consegue mostrar. O RAID é um artefato de pesquisa mantido por uma equipe acadêmica; a cobertura acompanha os modelos geradores em seu conjunto de teste, então modelos mais novos podem estar sub-representados até que o benchmark seja atualizado. O leaderboard classifica detectores, não as práticas de tratamento de dados de seus fornecedores, e um AUROC alto não diz nada sobre se enviar trabalhos de estudantes a esse serviço é legal ou ético em sua jurisdição.

## Conceitos conectados

- [[ai-detection]] — a família de métodos que o benchmark avalia
- [[academic-integrity]] — o contexto de política onde as pontuações dos detectores são usadas
- [[benchmark]] — a classe mais ampla de instrumentos à qual este pertence
