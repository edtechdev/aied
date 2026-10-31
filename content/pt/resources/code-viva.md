---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
updated: "2026-10-24T08:37:08-04:00"
type: resource
summary: "Uma ferramenta gratuita de navegador que aplica uma versão escrita e cronometrada de uma defesa oral de código a cada estudante de um curso de programação, propondo notas com evidências citadas para o instrutor aprovar."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês e ainda não foi revisada por uma pessoa falante nativa.*

O Code Viva aplica uma versão escrita e cronometrada de uma [[oral-assessment|viva]] a cada estudante de um curso de programação, cerca de quinze a vinte minutos por pessoa, sem um instrutor na sala. Ele lê o código enviado e o histórico de commits do estudante, escreve de quatro a seis perguntas sobre as funções, os nomes e os commits daquele estudante, e dá a cada um um link pessoal para responder.

## O que você pode fazer com ela

Os envios vêm de uma exportação do Gradescope, de um zip baixado do Canvas, de um zip com uma pasta por estudante ou do GitHub Classroom com um token de leitura. O instrutor define a duração da sessão, o número de perguntas e o prazo, marca tempo estendido de 1,25x a 3x, e lê, edita ou substitui as perguntas geradas antes de enviar os links. As perguntas cobrem casos-base de recursão, guardas de borda, escolhas de estrutura de dados, nomes de variáveis opacos, escala e rastreamento, frases da especificação da tarefa e padrões de commit como um único commit volumoso ou de madrugada. As respostas voltam como um código de resposta, e a tela de revisão mostra cada transcrição ao lado de uma nota proposta de 0 a 3 com as frases em que ela se apoia, além de uma fila de sinalizações ordenada por quanto uma conversa é justificada. Os resultados são exportados em CSV, e onze cursos de demonstração deixam o leitor experimentar todo o ciclo com dados inventados.

## Para quem é

Instrutores de cursos de programação que querem evidência de que um estudante consegue explicar o próprio código, e que preferem conversar com uma lista curta de estudantes em vez de com todos; as perguntas sobre commits fazem dele uma forma de [[process-oriented-assessment]].

## Notas e ressalvas

Tudo roda no navegador: o curso fica no armazenamento local com uma exportação em JSON, as perguntas viajam na parte de um link que os navegadores não enviam a servidores, e as respostas só voltam como códigos que os estudantes escolhem enviar, de modo que nenhum dado de estudante chega a terceiros. O gerador de perguntas é baseado em regras, e não em modelos. Pelo próprio relato da ferramenta, seu leitor de código é heurístico, então formatação incomum ou macros podem esconder uma função, e uma nota pode premiar quem conhece o vocabulário em vez de quem entende o código, razão pela qual as notas são propostas que um instrutor aprova e pela qual ela recomenda manter as apostas baixas. Nenhuma licença e nenhum repositório de código são publicados, e, como os links carregam as perguntas, eles chegam a alguns kilobytes, o bastante para quebrar a linha na caixa de mensagem de um ambiente de aprendizagem.

## Conceitos conectados

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
