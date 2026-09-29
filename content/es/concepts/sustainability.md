---
title: Sostenibilidad
created: "2026-09-28T19:11:56-04:00"
updated: "2026-09-28T19:11:56-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [ethics, sustainability]
level: [higher ed, k 12, teacher education]
confidence: high
institutions: [educational-policy-ai, governance]
translation_of: concepts/sustainability
source_updated: "2026-09-19T05:10:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Sostenibilidad** — la intersección de dos preocupaciones: cómo puede usarse la IA *para* resultados de sostenibilidad en la educación (IA para la sostenibilidad, incluida la educación para el desarrollo sostenible y la educación verde), y cómo hacer que la IA misma sea *sostenible* (IA sostenible, reduciendo la huella ambiental, ética y social de los sistemas de IA en la educación). Como usuarios y desarrolladores de IA a la vez, las instituciones educativas deben impulsar objetivos ambientales y sociales al tiempo que garantizan un uso responsable y ético de la IA.

## Preguntas para reflexionar

- La página distingue dos vías: «IA para la sostenibilidad» (usar la IA para impulsar resultados de sostenibilidad) e «IA sostenible» (reducir la propia huella ambiental y ética de la IA). ¿Se le ocurre una forma en que una herramienta de IA podría impulsar un objetivo y a la vez socavar el otro?
- Entrenar y ejecutar modelos de lenguaje grandes conlleva una huella real de carbono y agua. Cuando una institución promueve la sostenibilidad como valor mientras despliega IA intensiva en energía, ¿qué tensiones surgen y quién debería ponderarlas?
- Antes de seguir leyendo, ¿cómo definiría la «educación sostenible»? La página la trata como un proyecto basado en valores y centrado en las personas, distinto de usar la educación como instrumento para la sostenibilidad; ¿en qué se diferencian?
- Si se espera que la educación construya la «conciencia de sostenibilidad» de quienes aprenden, ¿qué papel podría desempeñar la IA en ello, y podría la integración de la IA en el currículo enseñar sostenibilidad mientras su propia huella contradice silenciosamente la lección?
- ¿Qué significaría que una institución educativa fuera genuinamente sostenible en su uso de la IA, y cuáles de sus decisiones (compra, despliegue, docencia) cree que importan más?

## Introducción

La sostenibilidad en el AIED abarca tres encuadres que se solapan: la **educación sostenible** (un proyecto educativo basado en valores y centrado en las personas), la **sostenibilidad en la educación** (usar la educación como instrumento para la sostenibilidad) y la **educación para el desarrollo sostenible** (EDS, la agenda política global, en especial el [[k-12|Objetivo de Desarrollo Sostenible 4]]). La IA se cruza con cada uno de ellos de forma distinta, y el campo distingue dos vías centrales: la **IA para la sostenibilidad** (la IA como herramienta para lograr resultados de sostenibilidad) y la **IA sostenible** (reducir la propia huella ambiental y ética de la IA).

## La taxonomía en dos partes

La cobertura de la base de conocimiento, anclada en [[daniel-ai-sustainability-scoping-review-2026|Daniel et al. (2026)]], organiza el campo en dos vías interconectadas pero distintas:

- **IA para la sostenibilidad** — usar la IA para impulsar resultados de sostenibilidad. En educación esto incluye la IA para la gestión energética, la vigilancia climática, los programas de campus verdes y los currículos integrados con IA que construyen la conciencia de sostenibilidad de quienes aprenden (por ejemplo, el marco AI-SEE para la [[engineering-education|educación en ingeniería]] sostenible). Se fundamenta en la agenda global de la educación para el desarrollo sostenible.
- **IA sostenible** — reducir los impactos ambientales y éticos directos de la propia IA. Esto abarca la huella de carbono y de agua de los modelos de lenguaje grandes, el despliegue energéticamente eficiente y en servidores propios, y los marcos éticos y de gobernanza necesarios para garantizar que el uso de la IA en la educación sea en sí mismo responsable y sostenible.

## Usar la IA para la sostenibilidad en la educación

Un corpus creciente de trabajo trata la IA como herramienta *para* la educación y los resultados de sostenibilidad:

- **Currículos integrados con IA que construyen conciencia de sostenibilidad.** [[liu-ai-sustainable-engineering-education-2026|Liu et al. (2026)]] proponen el marco AI-SEE (impulsado por la inteligencia, capacitado para lo verde, liderado por la responsabilidad, integrado con la práctica), que integra la IA en todo el [[curriculum-design|currículo]] como [[scaffolding|andamiaje]] cognitivo y recurso para el análisis de sostenibilidad a nivel de sistema. En un caso de ingeniería con 144 estudiantes, mejoró la conciencia de sostenibilidad y produjo [[student-engagement|implicación]] conductual en los niveles personal, académico, profesional y social, con difusión social más allá del aula.
- **La IA en la educación verde y sostenible.** [[talebzadeh-ai-green-education-2026|Talebzadeh (2026)]] encontró que el [[learning-design|diseño didáctico]] asistido por IA bajo restricciones de pedagogía del desarrollo sostenible mejoró los flujos de trabajo docentes y el diseño [[pedagogy|pedagógico]]. [[riandi-teacher-ai-green-energy-education-2026|Riandi et al. (2026)]] encontraron que el uso práctico de la IA por parte del profesorado en ciencias y energía verde, y su implicación en el desarrollo de materiales alineados con la EDS —más que el conocimiento o las actitudes abstractas sobre la IA—, predecía su capacidad para integrar la IA en la [[k-12|educación en energía verde]].
- **La sostenibilidad como proyecto basado en valores.** [[alsuhaymi-sustainable-education-ai-digitalization-2026|Alsuhami y Atallah (2026)]] sostienen que la contribución de la IA a la educación sostenible es condicional y está mediada por la gobernanza: solo apoya la sostenibilidad cuando la adopción se subordina a valores educativos explícitos y a propósitos centrados en las personas, y no a la tecnologización y la mercantilización. Esto vincula la sostenibilidad con la [[ethics|ética]] y la [[critical-pedagogy|pedagogía crítica]].

## Hacer que la IA misma sea sostenible

La segunda vía se ocupa de la propia huella de la IA en entornos educativos:

- **Impacto ambiental de los modelos grandes.** [[llm-environmental-impact-student-usage-2026|los estudios sobre el uso de LLM]] documentan la huella de carbono y de agua de los modelos de lenguaje grandes, que es significativa dada la alta adopción entre el estudiantado universitario. Esta es la dimensión ambiental directa de la IA sostenible.
- **Despliegue energéticamente eficiente y en servidores propios.** [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] demuestran que los asistentes de base de conocimiento con IA pueden ejecutarse en hardware de consumo con [[open-source|recursos educativos abiertos]], lo que reduce la huella ambiental y de coste de la IA en la educación: un patrón de diseño concreto de IA sostenible.
- **Marcos éticos y de gobernanza.** La IA sostenible no es solo ambiental: requiere marcos de [[governance|gobernanza]] y [[ethics|ética]] que garanticen la transparencia, la rendición de cuentas, la [[human-in-the-loop-ai|supervisión humana]] y un acceso [[equity-in-ai-education|equitativo]], algo que, como señalan [[daniel-ai-sustainability-scoping-review-2026|Daniel et al. (2026)]], suele faltar en las aplicaciones universitarias actuales.

## El aprendizaje sostenible como objetivo pedagógico

Una línea relacionada enmarca la sostenibilidad no solo como una preocupación ambiental o institucional, sino como una propiedad del propio aprendizaje. [[zhu-e3-hot-embodied-intelligence-sustainable-learning|Zhu et al. (2026)]] sostienen que el aprendizaje asistido por IA corre el riesgo de externalización cognitiva y de desvinculación de contextos auténticos, y proponen marcos (E3-HOT) para el **aprendizaje sostenible**: un aprendizaje que persiste, se transfiere y sigue conectado a problemas reales en lugar de quedar cortocircuitado por la [[cognitive-offloading|dependencia cognitiva]]. Esto conecta la sostenibilidad con la [[agency|agencia]] y el [[critical-thinking|pensamiento crítico]].

## Conexiones con otros conceptos

La sostenibilidad y la IA en la educación se sitúan en la intersección de la [[ethics|ética]], la [[governance|gobernanza]], la [[ai-education|IA en la educación]] y las ciencias ambientales y energéticas. Se apoya en la [[teacher-education|formación del profesorado]] y el [[teacher-role|rol docente]] para el desarrollo de capacidades, en el [[learning-design|diseño del aprendizaje]] para la pedagogía, y conecta con el tratamiento que hace la base de conocimiento de la [[cognitive-offloading|dependencia cognitiva]] y el [[critical-thinking|pensamiento crítico]] a través de la lente del «aprendizaje sostenible». Como ambas vías son transversales, la sostenibilidad es un tema fundacional que aparece en la [[higher-ed|educación superior]], en K-12 y en contextos profesionales.

## Conceptos conectados

- [[ethics]]
- [[governance]]
- [[ai-education]]
- [[higher-ed]]
- [[k-12]]
- [[teacher-education]]
- [[teacher-role]]
- [[learning-design]]
- [[engineering-education]]
- [[critical-thinking]]
- [[cognitive-offloading]]
- [[agency]]
- [[open-source]]

## Artículos conectados

- [[daniel-ai-sustainability-scoping-review-2026]] — Revisión de alcance de la IA para la sostenibilidad y la IA sostenible en la educación superior
- [[alsuhaymi-sustainable-education-ai-digitalization-2026]] — Enfoque crítico con los valores sobre la educación sostenible y la IA
- [[liu-ai-sustainable-engineering-education-2026]] — Marco AI-SEE para una educación en ingeniería sostenible
- [[riandi-teacher-ai-green-energy-education-2026]] — Implicación docente en la integración de la IA para la educación en energía verde
- [[talebzadeh-ai-green-education-2026]] — El papel de la IA en la educación verde
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Asistentes de base de conocimiento con IA sostenible
- [[llm-environmental-impact-student-usage-2026]] — Impactos ambientales del uso de LLM
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Fomentar el aprendizaje sostenible mediante la inteligencia corporeizada
- [[caruana-pre-university-ai-education-slr-2026]] — Revisión sistemática de la literatura sobre educación en IA preuniversitaria (encuadre del ODS 4)