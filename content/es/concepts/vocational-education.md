---
title: Educación y formación profesional
created: "2026-09-28T19:11:07-04:00"
updated: "2026-10-28T13:36:06-04:00"
type: concept
technology: [human-in-the-loop-ai, intelligent-tutoring, simulation]
assessment: [authentic-assessment]
pedagogy: [career-development-and-readiness, professional-training]
discipline: [vocational education]
audience: [instructors, curriculum designers, institutions]
level: [adult learning, higher ed]
confidence: high
translation_of: concepts/vocational-education
source_updated: "2026-10-27T13:25:06-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La educación y formación profesional** (VET, por sus siglas en inglés): el segmento de la educación que prepara a las personas para ocupaciones concretas, oficios y funciones técnicas, organizado en torno a una competencia próxima a la práctica y no al conocimiento disciplinar. Donde el aprendizaje en el lugar de trabajo describe la actualización de quienes ya están empleados, la VET incluye la preparación inicial para un oficio; donde la [[higher-ed|educación superior]] designa estudios de titulación, la VET suele no conducir a un título y se enmarca en marcos nacionales de cualificaciones. Sus rasgos definitorios son que al estudiantado se le evalúa por lo que sabe hacer con equipos, que la instrucción ocurre cerca del taller, del simulador o del lugar de trabajo, y que los formadores humanos que sostienen la instrucción práctica son con frecuencia la restricción vinculante. En la investigación sobre IA, la VET aparece a la vez como una población de aprendices distinta, aquella cuya confianza académica está ligada a la habilidad demostrada y a la identidad ocupacional, y como una base de evidencia distinta, más delgada y más fragmentada que la literatura escolar o universitaria.

## Preguntas para reflexionar

- Si una cualificación certifica lo que alguien sabe hacer, ¿cuánto aprendizaje asistido por IA cuenta como práctica auténtica y cuánto sustituye a la repetición que construye la competencia?
- ¿Qué se pierde cuando un agente de IA interpreta el papel de la contraparte (paciente, piloto, cliente) que antes interpretaba un formador humano? ¿Qué juicios no puede modelar una contraparte sintética?
- La evaluación oral no escala bien con el tamaño de la clase. Si la IA hace aflorar evidencia pero no juzga, ¿qué partes de la capacidad de evaluación se alivian y cuáles se limitan a desplazarse hacia el docente?
- Ningún estudio de la base de evidencia sobre IA en la VET se sitúa en un lugar de trabajo, y sin embargo la VET se define por el aprendizaje basado en el trabajo. ¿Qué haría falta para una investigación creíble allí donde ocurre el aprendizaje?
- El Reglamento Europeo de IA considera de alto riesgo la IA que evalúa resultados de aprendizaje en formación profesional, mientras que algunas jurisdicciones no tienen ninguna norma al respecto. ¿Debería la contratación pública seguir el estándar más estricto disponible?

## Introducción

La educación y formación profesional prepara a las personas para ocupaciones concretas (técnicos de automoción, controladores de tráfico aéreo, diseñadores de interiores, trabajadores de cuidados), y su moneda es la competencia demostrada y no los créditos acumulados. La evaluación tiende a basarse en el desempeño, la instrucción está ligada a los equipos y los formadores cualificados que supervisan la práctica son escasos.

Sus vecinos en esta base de conocimiento difieren sobre todo en alcance. La [[professional-training|formación profesional]] abarca la actualización en el lugar de trabajo y en la empresa, en general para personas ya empleadas; la VET cubre además la preparación ocupacional inicial. El [[adult-learning|aprendizaje de adultos]] designa características de quien aprende y no una especificidad ocupacional. La [[higher-ed|educación superior]] designa estudios que otorgan título, mientras que buena parte de la VET se organiza mediante marcos de cualificaciones como los estándares de unidad de NZQA o el EQF. La [[stem-education|educación STEM]] y la VET se solapan en ámbitos técnicos, pero la educación STEM apunta a la comprensión conceptual y la VET a un procedimiento utilizable. La [[career-development-and-readiness|preparación y desarrollo profesional]] nombra las disposiciones de empleabilidad por las que se juzga a los programas de VET; la VET nombra el sistema instruccional que rinde cuentas por producirlas.

Lo distintivo de la IA en la VET es una brecha entre lo que el sector dice querer y lo que construye: la teoría constructivista se defiende ampliamente mientras que dominan los sistemas conductistas de ejercicio y práctica y los diseños con agencia para quien aprende siguen siendo raros. La pregunta recurrente de diseño no es si la IA puede impartir instrucción, sino si puede absorber las partes del aprendizaje profesional que son caras de dotar de personal (escenarios realistas, retroalimentación oportuna, contrapartes interpretadas por actores, evidencia oral) sin desplazar la práctica que produce competencia.

### Cómo aparece la IA en la educación y formación profesional

- **Una base de evidencia joven, fragmentada y concentrada geográficamente.** La primera revisión sistemática sobre IA en la VET ([[ai-vocational-education-training-review]]) identificó 26 estudios empíricos publicados entre 2015 y 2026 a través de ERIC, Web of Science y Elicit conforme a las directrices PRISMA: nueve de ámbito técnico, nueve de ámbito general, cinco en administración de empresas y tres en salud. Los entornos fueron seis de aula, ocho en línea, cuatro mixtos y ocho basados en simulación, y ninguno en un lugar de trabajo, pese al carácter laboral de la VET. Diecisiete de los 26 procedían de Asia; solo nueve estudios compartían al menos una referencia y ninguno se citaba entre sí. Cinco eran experimentos aleatorizados y 21 usaron diseños preexperimentales o cuasiexperimentales, en su mayoría midiendo resultados inmediatamente después de la intervención, y solo tres dieron al estudiantado un papel activo en un diseño potenciado por IA. Los autores advierten de una "trampa de Turing" educativa, es decir, usar la IA para replicar la instrucción humana en lugar de aumentar el [[human-in-the-loop-ai|juicio humano]], y reclaman casos de fracaso y condiciones límite en lugar de la narrativa de éxito dominante.

- **La simulación absorbe la escasez de actores.** [[astra-atco-training-simulator]] apunta a una restricción de capacidad en la formación de controladores de tráfico aéreo: los *simpilots*, formadores humanos especializados que interpretan a la vez a pilotos y a controladores en un espacio aéreo simulado. ASTRA sustituye a esos actores humanos por sim-pilotos autónomos impulsados por un LLM, mantiene la complejidad del escenario y elimina el cuello de botella de personal, lo que permite una práctica [[adaptive-learning|adaptativa]] a escala. Es una descripción de sistema y no un ensayo de eficacia, pero nombra un mecanismo que reaparece en toda la IA en la VET: cuando el insumo escaso es una persona cualificada que interpreta una contraparte, un agente puede sostener el papel y dejar que la práctica se amplíe.

- **El trabajo por proyectos inmersivo y asistido por agentes puede elevar la capacidad de diseño, de forma selectiva.** [[ai-ive-pbl-vocational-design-creativity-2026]] especifica AI-IVE-PBL, un modelo de cuatro dimensiones y cinco fases (descubrimiento, visualización, modelado, comunicación y refinamiento) ejecutado en realidad virtual con un asistente humano digital respaldado por un LLM en un curso de diseño de interiores de primer año de un centro de formación profesional chino. En un cuasiexperimento de 12 semanas con dos grupos (63 respuestas válidas; 31 frente a 32), la condición inmersiva con agente obtuvo puntuaciones más altas en capacidad de diseño (η²p = 0,138) y capacidad creativa (η²p = 0,111) según un ANCOVA, con implicación cognitiva d = 0,90, implicación conductual d = 0,75, motivación d = 0,74, satisfacción d = 0,69 y una carga cognitiva menor (d = −0,52). El pensamiento innovador y la implicación afectiva no alcanzaron significación, algo que los autores atribuyen a techos de corto plazo sobre patrones cognitivos arraigados. Todos los resultados son [[self-report-measures|autoinformados]], sin artefactos de diseño ni valoraciones de expertos. Leído frente a [[genai-xr-architectural-design-education-2026]], donde una cadena de IA generativa más XR produjo un descenso de la [[self-efficacy|autoeficacia]] de diseño y ninguna ventaja en un panel ciego, la diferencia parece menos cuestión de hardware que de quién sostiene la estructura de fases y la rúbrica.

- **La evaluación es donde el problema de autenticidad es más agudo.** [[ai-supported-oral-assessment-tvet-2026]] documenta AkoVoice, probado en cuatro clases de Nivel 3 de Automoción y una de Nivel 3 de Ingeniería, diseñado para que la IA haga aflorar evidencia de la rúbrica mientras la persona evaluadora juzga. De 33 estudiantes encuestados, 21 (64%) coincidieron en que la tarea de voz era realista y la misma proporción dijo que le daba una forma clara de comunicar lo que sabía; ninguno se mostró en desacuerdo con que hablar en tiempo real se ajustaba mejor a esta [[authentic-assessment|evaluación auténtica]] que un portafolio escrito. El número de palabras para preguntas idénticas varió entre cinco y ocho veces de un estudiante a otro sin mejorar la exactitud en las preguntas de hechos, y nueve estudiantes que respondieron con entre 2 y 13 palabras fueron calificados correctamente, con la respuesta más corta de dos palabras, "3500 kgs", coincidente en el valor. Un ciclo completo de captura, almacenamiento, redacción del juicio de la IA y notificación al docente funcionó sin conexión en un único portátil Windows con 8 GB de memoria gráfica (Mistral 7B mediante Ollama, faster-whisper, Chatterbox), evaluando hasta 12 estudiantes a la vez en un taller donde la estructura de acero impide el wifi, con las grabaciones cifradas y eliminadas a los 90 días. El artículo señala que el Reglamento Europeo de IA considera de alto riesgo la IA que evalúa resultados de aprendizaje en formación profesional, mientras que Nueva Zelanda no tiene un marco específico para la TVET.

- **Acompañamiento acotado en lugar de sustitución.** [[ai-pedagogical-accompaniment-amico]] sostiene que el valor de la IA en entornos técnicos y profesionales depende de una mediación [[pedagogy|pedagógica]] responsable y no de que parezca humana. Su prototipo Amico empareja AmicoMio, orientado a la claridad técnica y a la guía paso a paso de la tarea, con AmicoTuo, orientado al diálogo reflexivo y a la pregunta mayéutica. El principio de diseño es un *puente relacional*: interacción deliberadamente temporal, orientada hacia el contacto humano y acotada por salvaguardas, con las personas adultas conservando la responsabilidad de control humano. Los pilotos exploratorios (N = 30, Italia y China, 20 sesiones acotadas) encontraron que quienes participaron trataron el sistema como una herramienta de apoyo acotada, sin expectativas declaradas de sustitución ni de dependencia.

- **El aprendizaje asistido por IA tiene un coste psicológico cuando reemplaza el esfuerzo.** [[ai-autonomous-learning-accomplishment-2026]] encuestó a 1.264 estudiantes de centros de formación profesional de China mediante modelos de ecuaciones estructurales y encontró que el aprendizaje autónomo asistido por IA se asociaba negativamente con la tenacidad (compromiso, control, desafío) y positivamente con un menor logro académico, una dimensión de desgaste profesional de autoevaluación negativa. La tenacidad mediaba parcialmente la relación. El diseño es transversal, autoinformado y de una sola institución, así que no se establece causalidad, pero el planteamiento importa para la VET: donde la confianza se construye mediante la práctica repetida, la IA como sustituto puede reducir tanto la disposición a perseverar como la experiencia sentida de dominio.

- **Acelerar la producción curricular sin renunciar a la verificación.** [[crewscaler-ai-upskilling-framework]] aplica IA a las cinco etapas de la actualización profesional (adquisición de conocimiento, desarrollo de contenidos, revisión y verificación, [[intelligent-tutoring|acompañamiento tutorial]] y desarrollo de la evaluación) y mantiene en manos humanas el diseño del plano, la revisión por especialistas y la redacción de concepciones erróneas. Su validación externa incluye la acreditación NASBA CPE, tres de tres estudiantes que aprobaron un examen de certificación de NVIDIA usando solo la base de conocimiento del marco, y un banco de 530 preguntas etiquetado a un plano de 53 habilidades. Tiene cabida aquí porque trata la verificación como una etapa de primer orden: la detección de [[hallucination-risk|alucinaciones]] está en gran medida ausente de las cadenas de procesamiento educativas, y el artículo informa de que la tutoría por LLM por defecto solo alcanza entre el 52 y el 70% de acciones pedagógicas correctas.

- **La renovación curricular como obligación continua y no como revisión periódica.** [[wang-legacy-curriculum-ai-cte-renewal-2026|Wang (2026)]] identifica cinco dimensiones de renovación que interactúan (transformación ocupacional, vigencia del currículo, alineación de la capacidad del profesorado, arquitectura del programa y alineación externa) y seis pruebas de liderazgo para decidir si un curso debe conservarse, revisarse, integrarse, reemplazarse o retirarse.

## Concepciones erróneas comunes

**"La base de evidencia sobre IA en la VET nos dice algo sobre la educación y formación profesional."** Nos dice algo sobre sustitutos de aula, lo que constituye una laguna grave y no un detalle: **ningún estudio de la base de evidencia sobre IA en la VET se sitúa en un lugar de trabajo**, y sin embargo la VET se *define* por el aprendizaje basado en el trabajo. Un hallazgo sobre una herramienta de IA en una tarea simulada del oficio todavía no se ha enfrentado a las condiciones que hacen distintivo al sector: clientes reales, consecuencias reales de seguridad y variación real en los equipos del lugar de trabajo.

**"Un efecto significativo en la capacidad de diseño o creativa se traslada a la competencia ocupacional."** El resultado cuantitativo más sólido que aparece aquí procede de un **cuasiexperimento de 12 semanas con dos grupos y 63 respuestas válidas (31 frente a 32)**, en el que la condición inmersiva con agente obtuvo puntuaciones más altas en capacidad de diseño (η²p = 0,138) y capacidad creativa (η²p = 0,111) según un ANCOVA, con una implicación cognitiva de d = 0,90. Treinta y un estudiantes por rama en una tarea de aula es evidencia sobre esa tarea, y la competencia ocupacional no es uno de los resultados medidos.

**"Quienes aprenden dependerán en exceso de la IA en la formación práctica."** La evidencia de los pilotos apunta en la dirección contraria. Los pilotos exploratorios (**N = 30**, Italia y China, **20 sesiones acotadas**) encontraron que quienes participaron trataban el sistema como una herramienta de apoyo acotada, con **ninguna expectativa declarada de sustitución ni de dependencia**. Es exploratorio y pequeño, y sí sugiere que el modo en que el estudiantado de formación profesional enmarca una herramienta como equipo y no como autoridad es un recurso en torno al cual vale la pena diseñar.

**"Que al estudiantado le apruebe una tarea simulada significa que la tarea evaluó lo correcto."** De **33 estudiantes encuestados, 21 (64%)** coincidieron en que la tarea de voz era realista y la misma proporción dijo que le daba una forma clara de comunicar lo que sabía, y ninguno se mostró en desacuerdo con que hablar en tiempo real se ajustaba a esta [[authentic-assessment|evaluación auténtica]]. El realismo y la claridad comunicativa merecen conocerse y no son validez: una tarea puede parecer auténtica y aun así no muestrear el desempeño ocupacional que representa.

## Implicaciones para la práctica

**Para el profesorado**

- Trate los estudios realizados en lugares de trabajo como la evidencia que falta y diseñe sus pilotos para incluirlos; las ganancias de aula son necesarias y no suficientes para una cualificación de oficio.
- Enmarque las herramientas de IA como equipo acotado y no como autoridad. La evidencia de los pilotos sugiere que el estudiantado ya se aproxima a ellas así, y merece la pena hacer explícito ese marco.
- Mantenga las comprobaciones de autenticidad separadas de las de validez: pregunte qué desempeño ocupacional muestrea la tarea, no solo si al estudiantado le pareció realista.

**Para quienes desarrollan**

- Construya para una asistencia acotada y delimitada a la tarea, con un final claro, que es lo que se ajusta al uso real que el estudiantado de formación profesional hizo de los sistemas en estos pilotos.
- Diseñe frente a la variación del lugar de trabajo (equipos, normas de seguridad, interacción con clientes) y no frente a una configuración de laboratorio, porque es ahí donde ocurrirá el despliegue.

**Para quienes investigan**

- Realice al menos algunos estudios sobre el terreno, en lugares de trabajo. Un sector definido por el aprendizaje basado en el trabajo cuya base de evidencia no contiene estudios en lugares de trabajo todavía no ha puesto a prueba su afirmación central.

## Conceptos conectados

- [[professional-training]]
- [[adult-learning]]
- [[higher-ed]]
- [[career-development-and-readiness]]
- [[simulation]]
- [[authentic-assessment]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[self-efficacy]]

## Artículos conectados

- [[wang-legacy-curriculum-ai-cte-renewal-2026]] — Renovación adaptativa del currículo de CTE: cinco dimensiones y seis pruebas de liderazgo
- [[ai-vocational-education-training-review]] — Primera revisión sistemática de la IA en la VET: propósitos, teoría y eficacia empírica
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: aprendizaje inmersivo basado en proyectos y creatividad de diseño
- [[ai-supported-oral-assessment-tvet-2026]] — AkoVoice: evaluación oral asistida por IA y sin conexión en TVET
- [[ai-pedagogical-accompaniment-amico]] — Prototipo de doble modo Amico: principios de diseño e indicadores observables
- [[ai-autonomous-learning-accomplishment-2026]] — Aprendizaje autónomo asistido por IA y menor logro, mediado por la tenacidad
- [[astra-atco-training-simulator]] — Sim-pilotos autónomos para una formación escalable de controladores de tráfico aéreo
- [[crewscaler-ai-upskilling-framework]] — Marco integral acelerado por IA para una actualización profesional rápida
- [[genai-xr-architectural-design-education-2026]] — Contracaso: IA generativa más XR multiusuario con descenso de la autoeficacia de diseño
