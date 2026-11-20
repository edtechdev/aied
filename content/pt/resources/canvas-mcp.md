---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Um servidor MCP de código aberto que permite a Claude, Cursor, Codex e outros agentes ler e agir dentro do Canvas LMS — ferramentas para estudantes, educadores e designers de aprendizagem, com ações de escrita restritas e anonimização opcional dos dados de estudantes."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

**Canvas MCP** é um servidor de código aberto do Model Context Protocol, de Vishal Sachdev, que conecta um cliente de IA a uma instância do Canvas LMS: o agente pode listar o trabalho que um estudante tem por vir, ler as tarefas e entregas de um curso, enviar mensagens a uma turma ou auditar um curso quanto à acessibilidade, tudo por meio de ferramentas que o servidor expõe em vez de raspagem de tela ad hoc.

## O que você pode fazer com ele

O servidor traz três famílias de ferramentas. As ferramentas para estudantes respondem “o que é para esta semana”, “entreguei tudo”, “quantas tentativas de questionário ainda tenho” contra os próprios endpoints `self` do Canvas. As ferramentas para educadores listam e criam tarefas, leem entregas, corrigem em lote, enviam conversas e extraem análises de tarefas. As ferramentas para designers de aprendizagem cobrem verificações de qualidade de curso e varreduras de acessibilidade WCAG. Até 128 ferramentas estão disponíveis no total, embora o perfil padrão registre menos e as ferramentas com restrição de recurso elevem a contagem. Além das ferramentas, oito skills de agente empacotam receitas de várias etapas — um plano semanal, uma verificação matinal da saúde do curso, uma árvore de decisão para correção em lote, um pipeline de revisão por pares, uma auditoria de curso antes do semestre —, instaláveis em mais de 40 agentes por meio do `skills.sh`.

## Para quem é

Professores que querem que um agente cuide da leitura e das mensagens de rotina em torno de um curso, e [[institutional-ai-infrastructure|equipes institucionais]] que avaliam o que um agente conectado ao LMS consegue realmente alcançar. Designers de aprendizagem encontram aqui o mais próximo de uma revisão de curso automatizada. O projeto é um exemplo trabalhado de [[agentic-ai|ferramentas agênticas]] no nível do LMS de uma instituição, e não de um chatbot genérico.

## Observações e ressalvas

A configuração é local: Python 3.11 ou mais recente, um token e uma URL da API do Canvas, e um cliente MCP, com uma extensão de duplo clique para o Claude Desktop. O servidor público hospedado foi desativado, então uma implantação compartilhada significa auto-hospedagem atrás da autenticação da própria instituição. As ferramentas de escrita são restritas — servidores HTTP são somente leitura a menos que as ferramentas de escrita sejam explicitamente permitidas, exclusões exigem tokens de confirmação, e a execução de código roda em uma sandbox que falha fechada. Os controles de privacidade são opcionais: anonimização das respostas, mascaramento de e-mail e filtragem de PII precisam ser ativados, e o README é cuidadoso ao dizer que isso pode apoiar obrigações da FERPA sem estabelecer conformidade, o que depende da implantação e do provedor de IA. Não há telemetria no servidor, mas o Canvas e o cliente escolhido mantêm os próprios registros. O projeto é licenciado sob MIT, está em desenvolvimento ativo, e seus próprios guias são a autoridade sobre os nomes atuais das ferramentas e a configuração.
