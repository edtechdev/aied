---
title: Educación y formación profesional
created: "2026-09-28T19:11:07-04:00"
updated: "2026-09-28T19:11:07-04:00"
type: concept
technology: [human-in-the-loop-ai, intelligent-tutoring, simulation]
assessment: [authentic-assessment]
pedagogy: [career-development-and-readiness, professional-training]
discipline: [vocational education]
audience: [instructors, curriculum designers, institutions]
level: [adult learning, higher ed]
confidence: high
translation_of: concepts/vocational-education
source_updated: "2026-09-17T14:04:23-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La educación y formación profesional (EFP)** — el segmento de la educación que prepara a las personas para ocupaciones, oficios y roles técnicos concretos, organizado en torno a una competencia próxima a la práctica y no al conocimiento disciplinar. Mientras que el [[professional-training|aprendizaje en el lugar de trabajo]] describe la capacitación de quienes ya están empleados, la EFP incluye también la preparación inicial para un oficio; y mientras que la [[higher-ed|educación superior]] designa los estudios de grado, la EFP suele ser no universitaria y se enmarca en marcos nacionales de cualificaciones. Sus rasgos definitorios son que el estudiantado se evalúa por lo que puede hacer con equipos, que la instrucción ocurre cerca del taller, el simulador o el lugar de trabajo, y que los formadores humanos que imparten la instrucción práctica son con frecuencia la restricción limitante. En la investigación sobre IA, la EFP aparece tanto como una población de aprendices distinta —cuya confianza académica está ligada a la habilidad demostrada y a la identidad ocupacional— como una base de evidencia distinta, más delgada y fragmentada que la literatura escolar o universitaria.

## Preguntas para reflexionar

- Si una cualificación certifica lo que quien aprende puede hacer, ¿cuánto aprendizaje asistido por IA cuenta como práctica auténtica y cuánto sustituye la repetición que construye la competencia?
- ¿Qué se pierde cuando un agente de IA interpreta el papel de la contraparte —paciente, piloto, cliente— que antes interpretaba un formador humano? ¿Qué juicios no puede modelar una contraparte sintética?
- La evaluación oral escala mal con el tamaño de la clase. Si la IA saca a la luz la evidencia pero no juzga, ¿qué partes de la capacidad de evaluación se alivian y cuáles simplemente se desplazan al profesorado?
- Ningún estudio de la base de evidencia sobre IA en la EFP se sitúa en un lugar de trabajo, y sin embargo la EFP se define por el aprendizaje basado en el trabajo. ¿Qué requeriría una investigación creíble allí donde ocurre el aprendizaje?
- La Ley de IA de la UE considera de alto riesgo la IA que evalúa resultados de aprendizaje en la formación profesional, mientras que algunas jurisdicciones no tienen ninguna norma al respecto. ¿Deberían las compras seguir el estándar más estricto disponible?

## Introducción

La educación y formación profesional prepara a las personas para ocupaciones concretas —técnicos de automoción, controladores de tráfico aéreo, diseñadores de interiores, trabajadores de cuidados— y su moneda es la competencia demostrada y no los créditos acumulados. La evaluación tiende a basarse en el desempeño, la instrucción está ligada a los equipos y los formadores cualificados que supervisan la práctica son escasos.

Sus vecinos en esta base de conocimiento se diferencian sobre todo en el alcance. La [[professional-training|formación profesional en el puesto de trabajo]] cubre la capacitación laboral y corporativa, en su mayoría para personas ya empleadas; la EFP cubre además la preparación ocupacional inicial. El [[adult-learning|aprendizaje de personas adultas]] nombra características de quien aprende y no una especificidad ocupacional. La [[higher-ed|educación superior]] designa estudios que otorgan títulos, mientras que gran parte de la EFP se organiza mediante marcos de cualificaciones como los estándares de unidad de la NZQA o el Marco Europeo de Cualificaciones. La [[stem-education|educación STEM]] y la EFP se solapan en ámbitos técnicos, pero la educación STEM apunta a la comprensión conceptual mientras que la EFP apunta a un procedimiento utilizable. El [[career-development-and-readiness|desarrollo profesional y la preparación para el empleo]] nombra las disposiciones de empleabilidad por las que se juzga a los programas de EFP; la EFP nombra el sistema instruccional al que se responsabiliza de producirlas.

Lo distintivo de la IA en la EFP es una brecha entre lo que el sector dice querer y lo que construye: la teoría constructivista se defiende ampliamente mientras dominan los sistemas conductistas de ejercitación y práctica y los diseños que otorgan agencia a quien aprende siguen siendo raros. La pregunta de diseño recurrente no es si la IA puede impartir instrucción, sino si puede absorber las partes del aprendizaje profesional que son caras de dotar de personal —escenarios realistas, retroalimentación oportuna, contrapartes interpretadas por actores, evidencia oral— sin desplazar la práctica que produce la competencia.

### Cómo aparece la IA en la educación y formación profesional

- **Una base de evidencia joven, fragmentada y geográficamente concentrada.** [[ai-vocational-education-training-review|La primera revisión sistemática de la IA en la EFP]] identificó 26 estudios empíricos publicados entre 2015 y 2026 a través de ERIC, Web of Science y Elicit bajo las directrices PRISMA: nueve de dominio técnico, nueve de dominio general, cinco de administración de empresas y tres de salud. Los entornos fueron seis de aula, ocho en línea, cuatro mixtos y ocho basados en simulación, y ninguno en un lugar de trabajo, pese al carácter laboral de la EFP. Diecisiete de los 26 procedían de Asia; solo nueve estudios compartían al menos una referencia y ninguno se citaba entre sí. Cinco eran experimentos aleatorizados y 21 usaron diseños preexperimentales o cuasiexperimentales, en su mayoría midiendo resultados inmediatamente después de la intervención, y solo tres dieron a quien aprende un papel activo en un diseño empoderado por IA. Los autores advierten de una «trampa de Turing» educativa —usar la IA para replicar la instrucción humana en lugar de aumentar el [[human-in-the-loop-ai|juicio humano]]— y piden casos de fracaso y condiciones límite en lugar del relato de éxito predominante.
- **La simulación absorbe el papel escaso.** [[astra-atco-training-simulator|ASTRA]] apunta a una restricción de capacidad en la formación de controladores de tráfico aéreo: los *simpilots*, formadores humanos especializados que interpretan tanto a los pilotos como a los controladores en un espacio aéreo simulado. ASTRA sustituye a los sim-pilots autónomos impulsados por LLM, mantiene la complejidad del escenario y a la vez elimina el cuello de botella de personal y permite una práctica [[adaptive-learning|adaptativa]] a escala. Es una descripción de sistema y no un ensayo de eficacia, pero nombra un mecanismo que se repite en toda la IA en la EFP: cuando el insumo escaso es una persona cualificada que interpreta a una contraparte, un agente puede sostener el papel y dejar que la práctica se amplíe.
- **El trabajo por proyectos inmersivo y apoyado por agentes puede elevar la capacidad de diseño, de forma selectiva.** [[ai-ive-pbl-vocational-design-creativity-2026|AI-IVE-PBL]] especifica un modelo de cuatro dimensiones y cinco fases (descubrimiento, visualización, modelado, comunicación y refinamiento) ejecutado en RV con un asistente humano digital respaldado por un LLM en un curso de primer año de diseño de interiores de un centro de formación profesional chino. En un cuasiexperimento de 12 semanas con dos grupos (63 respuestas válidas; 31 frente a 32), la condición con agente inmersivo obtuvo puntuaciones más altas en capacidad de diseño (η²p = 0,138) y capacidad creativa (η²p = 0,111) bajo ANCOVA, con implicación cognitiva d = 0,90, implicación conductual d = 0,75, motivación d = 0,74, satisfacción d = 0,69 y carga cognitiva menor (d = −0,52). El pensamiento innovador y la implicación afectiva no alcanzaron significación, lo que los autores atribuyen a techos de corto plazo sobre patrones cognitivos arraigados. Todos los resultados son [[self-report-measures|autoinformados]], sin artefactos de diseño ni valoraciones de especialistas. Leído frente a [[genai-xr-architectural-design-education-2026|la investigación sobre diseño arquitectónico con IA generativa y XR]], donde una canalización de IA generativa más XR produjo un descenso de la [[self-efficacy|autoeficacia]] de diseño y ninguna ventaja ante un panel ciego, la diferencia parece menos cuestión de hardware que de quién sostiene la estructura de fases y la rúbrica.
- **La evaluación es donde el problema de la autenticidad es más agudo.** [[ai-supported-oral-assessment-tvet-2026|AkoVoice]] se probó en cuatro clases de automoción de nivel 3 y una de ingeniería de nivel 3, y se diseñó para que la IA saque a la luz la evidencia de la rúbrica mientras la persona evaluadora humana juzga. De 33 estudiantes encuestados, 21 (64%) coincidieron en que la tarea de voz era realista y la misma proporción dijo que ofrecía una forma clara de comunicar lo que sabían; ninguno discrepó de que hablar en tiempo real encajaba mejor con esta [[authentic-assessment|evaluación auténtica]] que un portafolio escrito. Los recuentos de palabras para preguntas idénticas variaron entre 5 y 8 veces de unas personas a otras sin mejorar la exactitud en las preguntas factuales, y 9 estudiantes que respondieron en 2 a 13 palabras fueron todos calificados correctamente, la respuesta más corta con dos palabras, «3500 kgs», coincidente en el valor. Un ciclo completo de captura, almacenamiento, redacción del juicio por IA e informe al profesorado se ejecutó sin conexión en un único portátil Windows con 8 GB de memoria gráfica (Mistral 7B mediante Ollama, faster-whisper, Chatterbox), evaluando hasta 12 estudiantes a la vez en un taller donde la estructura de acero derrota al wifi, con las grabaciones cifradas y eliminadas a los 90 días. El artículo señala que la Ley de IA de la UE considera de alto riesgo la IA que evalúa resultados de aprendizaje en la formación profesional, mientras que Nueva Zelanda no tiene ningún marco específico para la formación profesional y técnica.
- **Acompañamiento acotado en lugar de sustitución.** [[ai-pedagogical-accompaniment-amico|El prototipo Amico]] sostiene que el valor de la IA en entornos técnicos y profesionales depende de una mediación [[pedagogy|pedagógica]] responsable y no de su parecido con lo humano. Su prototipo Amico empareja AmicoMio, orientado a la claridad técnica y a la guía paso a paso de la tarea, con AmicoTuo, orientado al diálogo reflexivo y al cuestionamiento mayéutico. El principio de diseño es un *puente relacional*: una interacción deliberadamente temporal, orientada al contacto humano y acotada por salvaguardas, con las personas adultas conservando la responsabilidad de mando humano. Los pilotos exploratorios (N = 30, Italia y China, 20 sesiones acotadas) encontraron que los participantes trataban el sistema como una herramienta de apoyo acotada, sin expectativas declaradas de sustitución o dependencia.
- **El aprendizaje asistido por IA conlleva un coste psicológico cuando sustituye el esfuerzo.** [[ai-autonomous-learning-accomplishment-2026|Un estudio]] encuestó a 1.264 estudiantes de centros de formación profesional de China mediante modelado de ecuaciones estructurales y encontró que el aprendizaje autónomo asistido por IA se asociaba negativamente con la resiliencia (compromiso, control, desafío) y positivamente con un menor logro académico, una dimensión de agotamiento de autoevaluación negativa. La resiliencia mediaba parcialmente la relación. El diseño es transversal, autoinformado y de una sola institución, por lo que no se establece causalidad, pero el encuadre importa para la EFP: cuando la confianza se construye mediante la práctica repetida, la IA como sustituto puede reducir tanto la disposición a persistir como la experiencia sentida de dominio.
- **Acelerar la producción de planes de estudio sin renunciar a la verificación.** [[crewscaler-ai-upskilling-framework|CrewScaler]] aplica la IA a las cinco etapas de la capacitación profesional —adquisición de conocimiento, desarrollo de contenido, revisión y verificación, [[intelligent-tutoring|acompañamiento tutorial]] y desarrollo de la evaluación— mientras mantiene en manos humanas el diseño del plan, la revisión de la materia y la redacción de ideas erróneas. Su validación externa incluye la acreditación CPE de NASBA, tres de tres estudiantes que aprobaron un examen de certificación de NVIDIA usando solo la base de conocimiento del marco, y un banco de 530 preguntas etiquetadas según un plan de 53 habilidades. Tiene cabida aquí porque trata la verificación como una etapa de primer orden: la detección de [[hallucination-risk|alucinaciones]] está en gran medida ausente de las canalizaciones educativas, y el artículo informa de que la tutoría por defecto con LLM solo alcanza entre el 52% y el 70% de acciones pedagógicas correctas.

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

- [[ai-vocational-education-training-review]] — Primera revisión sistemática de la IA en la EFP: propósitos, teoría y eficacia empírica
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: aprendizaje inmersivo basado en proyectos y creatividad en el diseño
- [[ai-supported-oral-assessment-tvet-2026]] — AkoVoice: evaluación oral asistida por IA y sin conexión en la formación profesional y técnica
- [[ai-pedagogical-accompaniment-amico]] — Prototipo de doble modo Amico: principios de diseño e indicadores observables
- [[ai-autonomous-learning-accomplishment-2026]] — Aprendizaje autónomo asistido por IA y menor logro académico, mediado por la resiliencia
- [[astra-atco-training-simulator]] — Sim-pilots autónomos para una formación escalable de controladores de tráfico aéreo
- [[crewscaler-ai-upskilling-framework]] — Marco integral acelerado por IA para una capacitación profesional rápida
- [[genai-xr-architectural-design-education-2026]] — Caso contrario: IA generativa más XR multiusuario con autoeficacia de diseño en descenso
