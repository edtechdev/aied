---
title: "conText (AIdeaText)"
created: "2026-11-12T20:20:00-05:00"
updated: "2026-11-12T20:20:00-05:00"
type: resource
summary: "Um tutor gratuito de navegador que lê a foto de um caderno, um PDF ou um texto e então conduz o estudante por ele de forma socrática em inglês ou espanhol, enquanto desenha um grafo ao vivo das ideias que ele conecta ao falar."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/context-aideatext
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

O conText é a demonstração pequena mais limpa de uma direção sobre a qual a [[intelligent-tutoring|tutoria com IA]] muito fala e raramente implementa: o modelo não responde à pergunta do estudante, ele faz a próxima, e as ideias do estudante são desenhadas como um grafo enquanto ele fala. Envie a foto de uma página de caderno, um PDF ou um texto, e a ferramenta primeiro diz o que entendeu, depois inicia um diálogo [[socratic-method|socrático]] falado. Cada ideia que o estudante nomeia aparece como um nó em um [[knowledge-graph|grafo de conhecimento]] ao vivo; as arestas aparecem à medida que a conversa as conecta, e o painel informa quantas ideias permanecem desconectadas.

## O que você pode fazer com ele

O ciclo é deliberadamente curto. Entra material (até 10 MB, oito páginas de PDF ou 15,000 caracteres de texto), o tutor o devolve lido e a conversa é por voz: o site diz que o tutor não dá notas e não escreve pelo estudante. O grafo é o artefato que faz a sessão valer algo depois: ele mostra quais ideias o estudante realmente colocou em relação e quais ficaram soltas, algo muito mais específico de revisar do que uma transcrição de chat. A sessão pode ser exportada como arquivo XML do grafo e reenviada em outro dia para continuar, e o botão de excluir a apaga imediatamente; caso contrário, o servidor a descarta após uma hora.

Essa combinação — um tutor que retém a resposta e um registro visual do raciocínio — está exatamente no que o [[scaffolding|andaimento]] e a reflexão [[metacognition|metacognitiva]] tentam alcançar, e dá ao professor algo concreto sobre o que perguntar em vez de uma redação pronta ou um número correto. O enquadramento do próprio site é que um resultado correto já não prova compreensão quando a IA generativa consegue produzi-lo, então o processo precisa ser visível.

## Para quem é

Estudantes que trabalham uma leitura ou uma lista de exercícios e preferem ser questionados a receber a resposta, professores que querem uma verificação de baixo risco sobre se um estudante consegue conectar ideias, e desenvolvedores de corpo docente que buscam um exemplo concreto de evidência do processo. Os professores têm um guia alinhado ao currículo em inglês, espanhol, português e francês; a ferramenta funciona em inglês e espanhol, e o vídeo de apresentação está em espanhol.

## Observações e ressalvas

Nenhum preço ou conta é publicado para a ferramenta voltada ao estudante, enquanto a implantação institucional — nuvem, local ou híbrida — é oferecida por meio de uma proposta sob medida e uma reunião; trate “grátis” como o estado da demonstração pública em novembro de 2026, não como garantia. Texto e imagens vão para um serviço hospedado movido a Claude, e o próprio site orienta os usuários a remover nomes, valores, endereços e nomes de empresas antes de enviar qualquer coisa, o que transfere o ônus da desidentificação para quem envia, e não para a plataforma. As sessões se autodestroem após uma hora, a menos que sejam exportadas. A empresa por trás também comercializa uma plataforma mais ampla de avaliação por grafos de raciocínio para instituições, e suas alegações sobre distinguir grafos dedutivos, indutivos, abdutivos e analógicos vêm de quatro textos de referência — o site chama isso de demonstração, com a validação em escala ainda por vir.

## Conceitos conectados

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
