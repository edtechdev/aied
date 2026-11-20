---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Um leaderboard público de modelos de fronteira que avaliam respostas reais manuscritas de estudantes universitários de STEM segundo os itens da rubrica que o professor selecionou."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
contributors: [editor]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O GradeBench faz uma pergunta restrita e útil sobre [[automated-assessment|avaliação automatizada]]: dada a resposta manuscrita de um estudante, a rubrica do professor, uma solução de referência e os itens da rubrica que o professor de fato selecionou, um modelo de fronteira seleciona os mesmos itens? Os rótulos de ouro são seleções reais de itens de rubrica feitas por professores e assistentes de ensino em provas e quizzes, e não saídas de modelos reavaliadas.

## O que você pode fazer com ele

Leia o leaderboard antes de confiar na alegação de precisão de qualquer fornecedor de ferramentas de avaliação, e leia a construção das tarefas antes de confiar no leaderboard. O [[benchmark]] reúne 464 tarefas extraídas de 125 questões em 45 cursos [[higher-ed|universitários]] de mais de dez instituições, restritas a itens de resposta aberta de provas e quizzes que um professor ou assistente de ensino revisou linha por linha, e inclinadas para crédito parcial — tarefas de nota máxima e nota zero são limitadas a 5% cada, porque os modelos as consideram fáceis.

O leaderboard atual fica bem abaixo da concordância entre humanos: o melhor modelo alcança 57.3% de correspondência exata com a rubrica, e o site traça a precisão contra o custo por 1,000 respostas, em que um modelo 0.8 ponto atrás custa cerca de um sétimo disso. Esse eixo de custo é a parte praticamente útil, já que avaliar é uma operação de volume.

Para um segundo instrumento, construído de forma independente, veja o [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) da Learning Design Alliance, que é empacotado como um repositório aberto em vez de um leaderboard hospedado e é resumido no [[porcaro-ai-grading-benchmark-2026|estudo de Porcaro]].

## Para quem é

Professores que decidem se deixam uma ferramenta de avaliação liberar notas sem revisão, profissionais de avaliação que redigem requisitos de compras, e pesquisadores que precisam de um alvo no nível da rubrica, e não de uma correlação de avaliação de redações.

## Observações e ressalvas

O GradeBench é publicado pela Pensive, uma plataforma comercial de avaliação com IA, então o benchmark e o produto compartilham o mesmo dono; a construção das tarefas é documentada e defensável, mas trate o enquadramento como o do fornecedor. Ele cobre provas de STEM com rubricas de pelo menos quatro itens, o que exclui redações, respostas curtas e postagens de discussão — os formatos em que acontece a maior parte da avaliação em [[humanities-education|humanidades]]. A correspondência exata com a rubrica é uma métrica rigorosa: dois avaliadores podem discordar sobre um item e ambos estarem certos a respeito do estudante. As pontuações descrevem versões de modelos disponíveis em novembro de 2026 e vão mudar.

## Conceitos conectados

- [[automated-assessment]] — a prática que o benchmark mede
- [[assessment-validity]] — o critério do qual a pontuação do leaderboard é um proxy
- [[benchmark]] — a classe mais ampla de instrumentos à qual este pertence
