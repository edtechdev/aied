---
title: "Tipo de questão de texto com IA para Moodle"
created: "2026-11-12T20:20:00-05:00"
updated: "2026-11-12T20:20:00-05:00"
type: resource
summary: "Um tipo de questão do Moodle de código aberto (GPL v3) que atribui nota a respostas de texto livre com um modelo de linguagem grande contra um prompt por questão e um esquema de correção opcional, usando OpenAI, Azure ou um modelo Ollama auto-hospedado e mostrando o feedback da IA a um corretor humano."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/moodle-qtype-aitext
translation_note: "Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

A maioria das integrações de questionário com IA envia cada resposta para uma chamada de correção fixa. Este tipo de questão do Moodle faz o contrário: o professor escreve a rubrica. Cada questão traz um **prompt** que diz ao modelo como avaliar a resposta e um **esquema de correção** opcional que descreve como as notas são atribuídas, de modo que um item como “escreva uma frase no passado” pode especificar dez pontos sem erros, zero por gramática quebrada e um ponto a menos por cada erro ortográfico. O modelo devolve uma nota e [[feedback|feedback]], e o professor pode ver esse feedback ao lado da resposta quando corrige à mão.

## O que você pode fazer com ele

Adicione uma questão AIText a qualquer questionário do Moodle, escreva o prompt e o esquema de correção, e teste os prompts com um **testador de prompt** AJAX no formulário de edição, em vez de percorrer tentativas de pré-visualização. A correção roda por meio de dois comportamentos de questão complementares (imediato e diferido) que precisam ser instalados junto com o tipo de questão, o que mantém a correção por IA isolada dos comportamentos centrais do Moodle; tentativas existentes que usavam o comportamento legado `interactivecountback` migram na atualização. Se o modelo estiver inacessível, a correção se degrada em vez de dar erro, então uma tentativa não é perdida. Como a questão é um tipo nativo do questionário, os resultados chegam ao livro de notas como qualquer outro item — que é o que uma equipe de curso precisa antes de poder tratar a [[automated-assessment|correção automatizada]] como piloto, e não como demonstração.

O desenho também coloca a rubrica onde a [[ai-feedback-quality|qualidade do feedback]] é decidida: no prompt, escrito pelo professor, e não em um padrão do fornecedor. Esse é o uso honesto da ferramenta — critérios que se podem inspecionar e revisar —, embora também signifique que o teto de qualidade é a rubrica, e um prompt vago produz correção vaga. As instituições recorrem a ela nas verificações frequentes e de baixo risco das quais a [[formative-assessment|avaliação formativa]] depende, onde uma pessoa teria de ler, de outro modo, quarenta respostas curtas por noite.

## Para quem é

Administradores e desenvolvedores de Moodle que já operam o site, professores que querem correção com IA sem uma plataforma separada ou licença comercial, e pesquisadores que precisam de um fluxo de correção controlável para estudar. Exige Moodle 4.5 ou posterior e acesso à API de um modelo — OpenAI ou Azure pelo subsistema de IA do Moodle, ou uma instância Ollama auto-hospedada via Local AI Manager, que mantém o texto dos estudantes em infraestrutura local. O plugin é mantido por Marcus Green, está no mercado de plugins do Moodle e tinha 33 estrelas e 36 forks quando esta página foi verificada.

## Observações e ressalvas

Código aberto sob GPL v3 ou posterior, mas gratuito não significa gratuito para operar: alguém paga a API do modelo, e a qualidade da correção depende da escolha do modelo e do desenho do prompt. Respostas de texto livre saem do servidor do Moodle quando se usa um provedor remoto, então o acordo de dados da instituição rege o que pode ser enviado; a rota Ollama auto-hospedada existe para sites que não podem enviar o trabalho dos estudantes para fora. O repositório não declara nenhum estudo publicado de precisão ou concordância, então o plugin não deveria ser adotado supondo que a correção por LLM equivale à correção humana: a [[assessment-validity|validade]] precisa ser estabelecida localmente contra notas humanas antes que qualquer nota tenha peso. Os comportamentos complementares são uma dependência rígida: instalar apenas o tipo de questão deixa as questões sem nota.

## Conceitos conectados

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
