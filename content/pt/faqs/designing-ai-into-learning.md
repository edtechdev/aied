---
title: "Como a IA deve ser incorporada ao desenho da experiência de aprendizagem?"
created: "2026-08-25T09:20:00-04:00"
updated: "2026-10-02T08:21:34-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Tradução automática da página em inglês, ainda sem revisão de uma pessoa falante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta é uma tradução automática da página em inglês; ainda não foi revisada por uma pessoa falante nativa.*

# Como a IA deve ser incorporada ao desenho da experiência de aprendizagem?

**Comece pelo objetivo de aprendizagem e pelo processo de aprendizagem — não pelo recurso de IA.** O conceito [[pedagogy|Pedagogias e Estratégias de Ensino]] da base de conhecimento enfatiza que a mesma IA pode funcionar como apoio (scaffold), interlocutor [[socratic-method|socrático]], parceiro de feedback, [[simulation|simulação]] ou gerador de respostas, dependendo do desenho instrucional. O que importa é se a configuração preserva a atividade que produz a aprendizagem pretendida.

## Um padrão-padrão forte

Um padrão-padrão forte é: **o aprendiz tenta → a IA apoia → o aprendiz avalia ou revisa → o aprendiz demonstra compreensão.** Mais concretamente:

- Preserve a [[productive-failure|falha produtiva]] onde ela serve à aprendizagem.
- Peça uma previsão ou solução inicial antes de exibir o apoio da IA.
- Prefira questões, dicas, exemplos, contra-argumentos e feedback à conclusão imediata.
- Exija verificação de afirmações consequentes.
- Incorpore oportunidades de explicação e de [[learning-by-teaching|ensinar de volta]].
- Vá retirando o apoio gradualmente à medida que a competência cresce.
- Mantenha algumas oportunidades sem IA para que os aprendizes calibrem o que conseguem fazer de forma independente.

A síntese [[reducing-ai-misuse|Reduzindo o Mau Uso da IA]] recomenda especificamente sequências do tipo pensar primeiro/IA depois/refletir e pontos de verificação de avaliação deliberados.

## Ajuste o papel da IA ao nível de engajamento cognitivo

[[thermomix-genai-education-analogy-2026|A analogia do aparelho de cozinha de Rummel, Nachtigall e Panadero]] reformula a questão do desenho de *se* os aprendizes usam [[generative-ai|IA generativa]] para *como* esse uso molda o que eles se tornam. Mapear quatro usos de um eletrodoméstico inteligente de cozinha sobre casos de aprendizagem por meio dos frameworks [[icap-framework|ICAP]] e [[samr-model|SAMR]] produz uma escada de desenho: terceirizar integralmente uma tarefa, sem revisão ou engajamento [[critical-thinking|crítico]], é Substituição passiva e arrisca [[cognitive-offloading|perda de habilidade e dependência excessiva]]; refinar [[prompt-engineering|provocações]] e verificar as saídas de forma cruzada exige [[prior-knowledge|conhecimento prévio]] e [[self-regulated-learning|autorregulação]] (Ativo/Aumentação); usar a IA para brainstorming, estruturação e avaliação de trabalho original é Construtivo/Modificação; e a IA como parceiro genuíno de diálogo para coconstrução e [[feedback]] adaptativo é Interativo/Redefinição. A implicação de desenho é direta: a mesma ferramenta é um desvio em um degrau e um apoio no seguinte, então especifique o modo pretendido em vez de conceder acesso irrestrito.

## Sequencie o desenho, não apenas permita a ferramenta

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec e Horvat]] analisaram a sequência planejada de 29.064 atividades de ensino e aprendizagem em 554 cursos e encontraram uma gramática de desenho visível: atividades do tipo Aquisição são o ponto de entrada mais comum e o maior tipo único (acima de 20%), o tipo de aprendizagem acompanha o nível pretendido de Bloom (Aquisição caindo de ~50% no nível 1 para ~20% no nível 6, Produção subindo acima de 20% nos níveis 5–6), e a transição mais forte é Avaliação → Discussão (0,332). Duas lições para o desenho de IA: a IA pertence ao lugar em que a sequência intenciona um tipo específico de atividade, em vez de ser parafusada no final; e, como o feedback se agrupava com [[collaborative-learning|colaboração]], [[group-work|trabalho em grupo]] e presença de [[teacher-role|professor]], estruturas de pares e síncronas criam os momentos de [[feedback]] nos quais o apoio de IA deve se encaixar, em vez de substituí-los.

[[refrain-amplify-genai-curriculum-2026|O framework "abster, depois amplificar" de Torres-Sahli e colegas]] leva isso ao nível de programa: retenha uma ferramenta generativa enquanto uma capacidade está se formando, depois a restaure quando o estudante puder dirigi-la, julgar o que ela devolve e responder por ela, com um ponto de verificação difícil de falsificar em cada dobradiça. Dispositivos são governados por um critério de formação versus [[cognitive-offloading|descarregamento]] — permitidos onde apoiam trabalho engajado, excluídos onde drenam a atenção. Isso transforma as decisões de descarregamento em uma questão de [[curriculum-design|currículo]] e de [[governance|governança]] que precede, e não segue, o desenho no nível do curso.

## O alinhamento construtivo vem primeiro

A [[mcinnes-salvaging-constructive-alignment-genai-2026|análise de discurso de McInnes e colegas]] de 14 peças de orientação para o ensino superior alerta que conselhos enquadrados em termos de eficiência — usar IA generativa para rascunhar objetivos, rubricas e planos de curso — produz um alinhamento que *parece* alinhado enquanto negligencia a metade "construtiva": objetivos, atividades e [[assessment|avaliação]] gerados como itens discretos em vez de interdependentes. O remédio deles é o ressequenciamento, não a proibição: os educadores devem entender o alinhamento construtivo bem o suficiente para dirigir, interrogar e rejeitar a saída da IA antes de delegar qualquer parte dela, porque um hábito de aceitação superficial baseado na plausibilidade é a mesma falha avaliativa contra a qual os professores alertam os estudantes. Onde a IA é usada, eles defendem sistemas institucionalmente circunscritos e com [[rag|recuperação aumentada]], configurados em torno de política local e padrões de qualidade, em vez de padrões genéricos treinados na internet.

## O princípio mais amplo

O princípio mais amplo do [[finkelstein-principled-ai-education-2025|Framework de Educação em IA Fundamentada em Princípios]] é que a tecnologia deve aumentar, e não deslocar, as capacidades humanas que a educação pretende desenvolver. Ver também [[learning-design|Desenho Instrucional]], [[active-learning|Aprendizagem Ativa]] e [[scaffolding]].

Para os padrões pedagógicos que determinam se uma interação desenhada preserva a aprendizagem, ver [[reduce-ai-cheating]] e [[redesign-assessment-ai-era]]; para como os mesmos princípios constrangem o próprio software, ver [[designing-educational-ai-software]], e para sua tradução na arquitetura de um tutor, ver [[developing-ai-tutor]].
