---
title: Enseñanza del inglés (EAP / EFL / ESL)
created: "2026-09-28T19:11:56-04:00"
updated: "2026-09-28T21:21:51-04:00"
type: concept
foundations: [academic-integrity]
technology: [generative-ai]
assessment: [ai-feedback-quality, automated-assessment]
ethics: [equity-in-ai-education]
discipline: [english education, language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/english-education
source_updated: "2026-09-17T02:30:30-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Enseñanza del inglés** — la aplicación de la IA a la [[teacher-role|enseñanza]] y el aprendizaje del inglés, especialmente el **inglés con fines académicos (EAP)** y la enseñanza del inglés en un sentido más amplio (EFL/ESL/L2). Es una línea de [[discipline-specific-aied|AIED específica de disciplina]] ([[ai-education|AIEd]]) y distinta tanto del [[language-learning|aprendizaje de idiomas]] general (adquisición de una segunda lengua o lengua extranjera, de cualquier idioma) como de la [[writing-education|enseñanza de la escritura]] (la escritura como habilidad general): se centra en el inglés como lengua meta y registro académico, con sus propias pedagogías características —la competencia comunicativa, la escritura académica basada en géneros, la retroalimentación correctiva y la lectura y escritura en un registro académico— que moldean cómo se diseña, se usa y se evalúa la IA.

## Preguntas para reflexionar

- El inglés es la lengua que los modelos de lenguaje grandes manejan mejor. Eso da a quienes aprenden inglés un andamiaje potente para la escritura académica, pero ¿podría también afianzar silenciosamente un sesgo hacia el inglés académico estándar que margina a quienes escriben en [[multilingual-learning|contextos multilingües]] y en inglés como lengua mundial (World Englishes)? ¿Qué resultado cree que predomina?
- El inglés con fines académicos (EAP) se centra en la escritura académica basada en géneros, la retroalimentación correctiva y el registro académico, algo distinto del aprendizaje general de idiomas o de la enseñanza general de la escritura. ¿Por qué podría el registro específico del inglés académico cambiar lo que las herramientas de IA deben hacer frente al apoyo genérico a la escritura?
- Si la IA que revisa su inglés es ella misma más fuerte justo en ese «inglés académico estándar» que usted intenta dominar, ¿cuándo ayuda eso y cuándo aplana su propia voz o su dialecto? ¿Cómo distinguiría una cosa de la otra?
- La retroalimentación automatizada y los tutores de IA son cada vez más comunes en la enseñanza de la escritura y la expresión oral en inglés. ¿Qué podría pasar por alto la retroalimentación de la IA sobre la competencia comunicativa, el registro y la audiencia que sí captaría un docente humano o un compañero?

## Introducción

El inglés es una de las líneas disciplinares más afectadas por la IA porque los [[llm|LLM]] están dominados por el inglés: son más fuertes generando, revisando y evaluando texto en inglés, que es exactamente en lo que se centra la enseñanza de EAP y de EFL/ESL. Esa ventaja del inglés crea un doble filo característico: un [[scaffolding|andamiaje]] potente para el inglés académico, por un lado, y un sesgo afianzado hacia el inglés académico estándar que puede marginar a quienes aprenden en contextos multilingües, por otro.

## Alcance y enfoque

Este concepto organiza la [[research-methods-aied|investigación]] sobre IA en la **enseñanza del inglés**: el subconjunto del aprendizaje de idiomas en el que la lengua meta es el inglés (incluidos los contextos EFL/ESL/L2) y el registro del inglés académico (EAP). Temas centrales:

- **Inglés académico (EAP):** apoyo de la IA al inglés basado en géneros y específico de disciplina que se usa en la escritura, la lectura y la retroalimentación de la educación superior, distinto de la enseñanza general de la escritura.
- **Enseñanza del inglés (EFL/ESL/L2):** [[intelligent-tutoring|tutores de IA]], interlocutores y herramientas de [[feedback|retroalimentación]] para quienes aprenden inglés.
- **[[assessment|Evaluación]] específica del inglés:** evaluación y retroalimentación automatizadas de la escritura y la expresión oral en inglés, incluida la revisión de escritura en EAP y la evaluación de la escritura en L2.
- **Legibilidad de lectura y literatura:** [[bird-multimodal-educational-literature-2026|Bird (2026)]] fusiona la clasificación de texto con transformadores y características de lingüística computacional para clasificar literatura inglesa por curso clave del Reino Unido, alcanzando un F1 de 0,996, un complemento escalable y basado en datos para el apoyo a la lectura en EAP basado en géneros y la alineación de niveles de lectura.
- **Equidad lingüística:** la tensión entre el dominio del inglés en la IA y las necesidades de quienes escriben en contextos multilingües y en inglés como lengua mundial.

## En qué se diferencia la enseñanza del inglés del aprendizaje de idiomas

El [[language-learning|aprendizaje de idiomas]] es el paraguas más amplio para adquirir cualquier segunda lengua o lengua extranjera —oral, escrita y alfabetizada— mediante interlocutores de IA, herramientas de pronunciación y práctica conversacional. La enseñanza del inglés es el caso **específico del inglés** y, dentro de ella, el EAP es un caso **específico de registro**:

| Dimensión | [[language-learning|Aprendizaje de idiomas]] | **Enseñanza del inglés (esta página)** |
|-----------|----------------------|-----------------------------------|
| Lengua meta | Cualquier L2 (francés, español, japonés…) | El inglés en concreto |
| Enfoque | Adquisición de L2 en general: diálogo oral, pronunciación, alfabetización | El inglés como lengua meta + el registro del inglés académico |
| Contextos característicos | Conversación, pronunciación, fluidez general | **EAP**: escritura académica, lectura, retroalimentación, género |
| IA representativa | Interlocutores en L2, retroalimentación de pronunciación, L2 asistida por robots | Herramientas de escritura en EAP, retroalimentación entre pares en EFL, evaluación de la escritura académica en inglés |

Ambas se solapan mucho (la mayor parte del aprendizaje del inglés es también adquisición de L2), pero la enseñanza del inglés pone en primer plano el inglés como lengua meta y el registro académico; por ejemplo, [[alharbi-ethical-genai-eap-2026|la integración ética de la IA generativa en el EAP]], [[feedback-literacy-scripts-eap-writing|la revisión de escritura en EAP con IA generativa]] y [[genai-differentiated-eap-reading-materials-2026|la adaptación de materiales de lectura para EAP]] son específicos del EAP de un modo en que la investigación genérica sobre aprendizaje de idiomas no lo es.

## En qué se diferencia la enseñanza del inglés de la enseñanza de la escritura

La [[writing-education|enseñanza de la escritura]] se ocupa de la escritura como habilidad cognitiva y retórica general —en todas las lenguas y disciplinas, desde la composición hasta la integridad académica—. La enseñanza del inglés se centra específicamente en el **inglés** y, dentro del EAP, en el **registro académico**:

| Dimensión | [[writing-education|Enseñanza de la escritura]] | **Enseñanza del inglés (esta página)** |
|-----------|----------------------|-----------------------------------|
| Alcance | La escritura en general (cualquier lengua, cualquier género) | El inglés como lengua meta + el registro del inglés académico |
| Preocupación característica | La composición, la revisión, la [[agency|agencia]], la autoría | El género en EAP, el registro académico, la escritura en L2/EFL, la [[feedback-literacy|alfabetización en retroalimentación]] en inglés |
| Perspectiva de evaluación | [[automated-essay-scoring|Calificación automática de ensayos]], retroalimentación de escritura en general | Evaluación específica del inglés (escritura en EAP, [[peer-assessment|retroalimentación entre pares]] en EFL, evaluación de la escritura en L2) |
| Perspectiva de equidad | Sesgo en la retroalimentación de escritura | Sesgo + la tensión entre el dominio del inglés y el multilingüismo (World Englishes) |

Muchos artículos sobre enseñanza de la escritura tienen el inglés en primer lugar (por ejemplo, [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]), pero se enmarcan como investigación general sobre escritura; la enseñanza del inglés vuelve a poner el centro en las dimensiones del **inglés como lengua meta** y del **inglés académico** que las páginas genéricas de escritura y de aprendizaje de idiomas infravaloran.

## Artículos de este grupo

- **Específicos de EAP:** [[alharbi-ethical-genai-eap-2026|Integración ética de la IA generativa en el EAP]], [[feedback-literacy-scripts-eap-writing|revisión de escritura en EAP con IA generativa]], [[genai-differentiated-eap-reading-materials-2026|adaptación de materiales de lectura para EAP]].
- **EFL/ESL/L2:** [[tact-pedagogically-adaptive-esl-tutoring|tutoría ESL TACT]], [[sutama-chatgpt-eportfolio-speaking-2026|expresión oral con portafolio electrónico y ChatGPT en EFL]], [[irwin-muller-efl-peer-feedback-literacy|alfabetización en retroalimentación entre pares en EFL]], [[ai-vs-human-assessment-efl-tpck-2026|evaluación en EFL con IA frente a humana]], [[acceptance-ai-english-tools-2026|aceptación de las herramientas de inglés con IA]], [[ai-tools-arab-english-classrooms|la IA en aulas de inglés árabes]].
- **Escritura y evaluación del inglés como L2:** [[self-referential-l2-writing-llm-assessment|evaluación autorreferencial de la escritura en L2]], [[ai-interlocutor-l2-spoken-dialogue|interlocutores para el diálogo oral en L2]].
- **Equidad lingüística / World Englishes:** [[genai-linguistic-diversity-academic-writing|IA generativa y diversidad lingüística en la escritura académica]], [[governing-unseen-ai-literacy-language-teachers-2026|alfabetización en IA entre el profesorado de idiomas]], [[structural-silence-underrepresented-language-ai-2026|lenguas infrarrepresentadas en la infraestructura de IA]].

## Por qué importa

El dominio del inglés en la IA es un rasgo definitorio de esta línea. Como los modelos son más fuertes en inglés y en inglés académico estándar en particular, la enseñanza del inglés se beneficia de forma desproporcionada (andamiajes potentes para el EAP) y a la vez conlleva riesgos característicos (sesgo monolingüe, discriminación contra el inglés como lengua mundial y contra quienes escriben en contextos multilingües). La investigación aquí conecta con la [[equity-in-ai-education|equidad]], la [[bias-mitigation|mitigación de sesgos]], la [[automated-assessment|evaluación automatizada]], la [[ai-feedback-quality|calidad de la retroalimentación con IA]] y la [[academic-integrity|integridad académica]].

## Implicaciones para el profesorado de inglés / EAP / EFL-ESL

- **Aproveche deliberadamente la fortaleza de la IA en inglés académico.** Como los modelos son más fuertes en inglés y en inglés académico estándar, el profesorado de EAP puede usar la IA para la escritura basada en géneros, la diferenciación de materiales de lectura ([[genai-differentiated-eap-reading-materials-2026|materiales de EAP]]) y la retroalimentación de revisión, pero debería enmarcar la IA como socia de borrador y retroalimentación y no como una máquina de respuestas.
- **Proteja el registro del inglés académico y la alfabetización en retroalimentación.** [[feedback-literacy-scripts-eap-writing|La revisión de escritura en EAP]] muestra que la retroalimentación es tan productiva como la alfabetización en retroalimentación de quien aprende; enseñe al estudiantado a interpretar, juzgar y actuar sobre la retroalimentación de la IA, y use mecanismos de segundo corrector para comprobar la calidad de la IA.
- **Vigile la tensión de equidad del dominio del inglés.** Los modelos privilegian el inglés académico estándar, lo que margina a quienes escriben en inglés como lengua mundial y en contextos multilingües ([[genai-linguistic-diversity-academic-writing|World Englishes]], [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]): audite la retroalimentación en busca de sesgo monolingüe y de expectativas rebajadas.
- **Integre la IA de forma ética en el EAP.** [[alharbi-ethical-genai-eap-2026|La IA generativa ética en el EAP]] reclama un uso transparente y responsable en la enseñanza del inglés en la [[higher-ed|educación superior]] que preserve la integridad académica.
- **Espere una adopción cauta y centrada primero en la preparación.** Una [[li-language-educators-genai-review-2026|revisión sistemática de 23 estudios]] (Li et al. 2026) encuentra que el profesorado de idiomas valora la [[generative-ai|IA generativa]] sobre todo para la preparación entre bastidores —planificación de clases, creación de materiales y apoyo a la escritura y retroalimentación— mientras duda del uso directo en el aula, con las principales preocupaciones centradas en la [[academic-integrity|integridad académica]] (el plagio y la [[assessment-validity|validez de la evaluación]]). La adopción está moldeada por factores de identidad profesional, [[pedagogy|pedagógicos]], técnicos, [[governance|institucionales]] y de integridad, y las carencias de competencia se mapean a la episteme (comprender las capacidades y límites de la IA), la techne ([[prompt-engineering|ingeniería de prompts]], diseño de tareas y evaluaciones mejoradas con IA, detección de texto generado por IA) y la phronesis (juicio [[ethics|ético]], manejo de sesgos y privacidad), así que el profesorado de EAP/EFL debería construir estas competencias de forma deliberada y planificar una implementación «primero entre bastidores, luego en el aula».
- **Diferencie por nivel y necesidad.** [[ai-vs-human-assessment-efl-tpck-2026|La evaluación en EFL]] y la investigación sobre tutoría adaptativa apoyan ajustar el apoyo y la evaluación con IA al nivel de cada persona en lugar de aplicar una talla única.

## Conceptos conectados

- [[language-learning]]
- [[writing-education]]
- [[multilingual-learning]]
- [[higher-ed]]
- [[k-12]]
- [[generative-ai]]
- [[llm]]
- [[automated-assessment]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[academic-integrity]]
- [[discipline-specific-aied]]

## Artículos conectados

- [[alharbi-ethical-genai-eap-2026]] — Integración ética de la IA generativa en el EAP en la educación superior
- [[feedback-literacy-scripts-eap-writing]] — Guiones de alfabetización en retroalimentación y un mecanismo de segundo corrector en la revisión de escritura en EAP con IA generativa
- [[genai-differentiated-eap-reading-materials-2026]] — De materiales unificados a diferenciados: adaptación de materiales de lectura para EAP con apoyo de IA generativa
- [[tact-pedagogically-adaptive-esl-tutoring]] — TACT: posentrenamiento alineado con taxonomías para una tutoría de inglés pedagógicamente adaptativa
- [[sutama-chatgpt-eportfolio-speaking-2026]] — Alinear ChatGPT con la evaluación por portafolio electrónico como modelo de aprendizaje de EFL
- [[irwin-muller-efl-peer-feedback-literacy]] — Situar la IA generativa en la retroalimentación entre pares en EFL
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tareas de evaluación generadas por IA frente a desarrolladas por humanos en el contexto de EFL
- [[acceptance-ai-english-tools-2026]] — Aceptación de las herramientas de aprendizaje del inglés asistidas por IA en la educación superior
- [[ai-tools-arab-english-classrooms]] — Herramientas de IA en aulas universitarias de inglés árabes
- [[self-referential-l2-writing-llm-assessment]] — Hacia una evaluación analítica autorreferencial: un enfoque basado en perfiles para la evaluación de la escritura en L2 con LLM
- [[ai-interlocutor-l2-spoken-dialogue]] — ¿Qué cambia cuando el interlocutor es una IA? El diálogo oral en L2
- [[genai-linguistic-diversity-academic-writing]] — La IA generativa y la diversidad lingüística en la escritura y la publicación académicas
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Gobernar lo invisible: la alfabetización en IA entre el profesorado de idiomas
- [[structural-silence-underrepresented-language-ai-2026]] — Silencio estructural: las lenguas infrarrepresentadas en la infraestructura de IA
- [[liu-emerging-tech-tefl-review-2026]] — Tecnologías emergentes para la enseñanza del inglés como lengua extranjera
- [[wang-goal-setting-ai-engagement-2026]] — Teoría del establecimiento de metas: apoyo docente, metas de logro e implicación en el aprendizaje del inglés asistido por IA (758 estudiantes chinos)
- [[bird-multimodal-educational-literature-2026]] — Fusión multimodal para clasificar literatura educativa
- [[li-language-educators-genai-review-2026]] — Prácticas y desarrollo del profesorado de idiomas con la IA generativa