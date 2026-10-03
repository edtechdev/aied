---
title: Realidad virtual y aumentada
created: "2026-09-28T21:04:13-04:00"
updated: "2026-10-02T21:24:18-04:00"
type: concept
pedagogy: [embodied-learning, professional-training]
technology: [generative-ai, multimodal, simulation]
ethics: [accessibility]
confidence: high
discipline: [medical education, stem education]
translation_of: concepts/virtual-and-augmented-reality
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La realidad virtual y aumentada (RV/RA)** — la capa de visualización e interacción a través de la cual se experimentan los entornos de aprendizaje: espacios totalmente sintéticos en la RV y contenido digital superpuesto al mundo físico en la RA y la realidad mixta. La IA entra en esta capa en dos direcciones. La *crea*, ya que la [[generative-ai|IA generativa]] convierte hoy una descripción en lenguaje natural en una herramienta de aprendizaje en RA o RV que funciona en el navegador y ya no requiere un desarrollador especializado. Y la *habita*, en tanto que [[agentic-ai|agentes]], [[pedagogical-agent|agentes pedagógicos]] y [[rag|conocimiento recuperado]] guían a quien aprende con las manos libres dentro del entorno inmersivo. Lo que la modalidad añade respecto a una pantalla es la presencia y la [[embodied-learning|corporeización]]; lo que cuesta es fidelidad, hardware y la tolerancia de un cuerpo a estar ahí.

## Preguntas para reflexionar

- ¿Dónde está la línea entre lo que se modela y la superficie en la que se muestra? Compare un simulador de paciente de escritorio con una excursión en RV a un lugar que el estudiantado no puede visitar. ¿Qué diferencias esperaría que cambiaran el aprendizaje y cuáles podrían ser solo novedad?
- Un piloto encontró que el estudiantado declaraba *sentir* la longitud de onda y la amplitud mediante un gesto de la mano con más fuerza que mediante un deslizador, pero medía percepción, no logro, con 29 estudiantes y sin grupo de comparación. ¿Cuánto debería contar el «sentir» declarado a la hora de adoptar una herramienta?
- Si la IA generativa permite que un docente sin formación en programación construya una simulación de RA funcional en una tarde, ¿qué responsabilidades nuevas se derivan para validar la [[physics-education|física]], juzgar la fidelidad y decidir si pertenece a un curso?
- En una revisión de la simulación de enfermería impulsada por IA, la IA igualó a los actores humanos en la comunicación estructurada, pero no en los escenarios táctiles y emocionalmente complejos. ¿Cómo secuenciaría la práctica para que quien aprende ensaye unas partes con IA y otras con personas?
- Un estudio de RV en el aula informó de mareos mínimos, mientras que la estimación metaanalítica para la RV inteligente con estudiantado con discapacidad no fue estadísticamente significativa. ¿Qué querría que se midiera antes de que un programa invierta en visores?

## Introducción

La realidad virtual y aumentada es una **modalidad**, no un modelo: es la capa a través de la cual un entorno de aprendizaje llega a quien aprende. Eso la convierte en un eje distinto del de la [[simulation|simulación]], que es lo que se modela en primer lugar. Los dos se confunden a menudo, porque los entornos inmersivos son vehículos de entrega habituales para las simulaciones, pero varían de forma independiente: un simulador de paciente de escritorio es simulación sin RV, y una superposición de RA sobre un instrumento real es RV sin simulación. Mantener los ejes separados importa para el diseño: decidir que la práctica no tenga riesgos es una decisión distinta de decidir que sea corporeizada, y las dos conllevan costes, modos de fallo y evidencias diferentes. La RV/RA es la **capa de entrega** de una simulación y un pariente cercano del [[game-based-learning|aprendizaje basado en juegos]]; operacionaliza los relatos [[embodied-learning|corporeizado]] y [[situated-learning|situado]] del aprendizaje, y se sitúa dentro de la práctica [[experiential-learning|experiencial]] y del [[active-learning|aprendizaje activo]].

La IA moldea ahora esta modalidad desde ambos extremos. **Crea** contenido inmersivo, porque la [[generative-ai|IA generativa]] convierte un prompt estructurado en lenguaje natural en un artefacto de RA o RV ejecutable, y con ello derriba la habilidad de programación especializada que antes controlaba la producción. Y **habita** el entorno, ya que [[agentic-ai|agentes]], [[pedagogical-agent|agentes pedagógicos]] y [[rag|conocimiento de dominio recuperado]] ofrecen orientación dentro de él: con las manos libres, en tiempo real y fundamentada en fuentes que quien aprende no puede consultar mientras lleva un visor puesto.

## Qué añade la modalidad

El argumento a favor de la RV/RA se apoya en la presencia y la [[embodied-learning|corporeización]] y no en la entrega de información. Un espacio virtual compartido también puede desacoplar la copresencia de la geografía: un aula de RV construida sobre una capa de sincronización en tiempo real puso a docentes y estudiantes en la misma sala manipulando los mismos materiales científicos en 3D con independencia del lugar, con un objetivo de hasta veinte participantes. En una sesión de una hora con 10 estudiantes en un Meta Quest 3, informó de una buena [[usability-research|usabilidad]] en la Escala de Usabilidad del Sistema y de mareos de [[simulation|simulación]] mínimos, mientras que su propia debilidad fue la consistencia de la interfaz, y sus diseñadores evitaron deliberadamente las arquitecturas entre pares anteriores cuya tasa de fotogramas se degradaba a medida que se incorporaban participantes: un recordatorio de que la presencia está limitada por la ingeniería. Las comparaciones más controladas son sobrias respecto a lo que aporta la superficie por sí sola: un estudio de 24 participantes sobre mecánica en ingeniería encontró que las aplicaciones de realidad mixta y los kits de herramientas físicos elevaban la [[student-engagement|implicación]] por encima de la instrucción en el aula, pero las visualizaciones complejas seguían resultando difíciles para quienes aprendían en todas las condiciones. La implicación es el efecto fiable; la comprensión no.

## La IA generativa como capa de autoría

La barrera que antes definía quién podía construir una herramienta inmersiva ha caído en gran medida. Usando una estructura de prompt de cuatro elementos —**herramientas, visualización, controles manuales, optimización**—, un [[teacher-role|docente]] o un estudiante sin formación en programación puede generar una simulación de física en RA controlada con las manos que se ejecuta como un único archivo HTML sin nada más que una cámara, y luego refinarla describiendo en lenguaje llano qué salió mal. El gesto es familiar por las pantallas táctiles: pellizcar y separar ajusta una magnitud física en lugar de ampliar una imagen, de modo que abrir los dedos en vertical aumenta la amplitud y en horizontal alarga la longitud de onda y desplaza la lámpara hacia el extremo rojo del espectro. La misma estructura se generaliza: el campo de Coulomb alrededor de una yema que se extiende por la sala, dos manos como cargas opuestas y la regla de la mano derecha para la fuerza magnética dibujada sobre la propia mano de quien aprende, representada deliberadamente **sin espejar**, ya que espejarla invertiría la propia regla que se enseña.

El piloto es alentador y preliminar a partes iguales. Con 29 estudiantes de segundo año de imagen médica en un curso introductorio de física de las radiaciones, los 29 coincidieron en que el gesto les ayudaba a «sentir» qué es la longitud de onda (media 4,52), el control de la amplitud obtuvo la puntuación más alta (4,59), el 93% encontró natural controlar la onda en el aire y el 86% declaró sentirse más implicado y concentrado que en el aprendizaje habitual. La evidencia, sin embargo, es solo de percepción, de una única clase y sin grupo de comparación, así que la lectura honesta es que la [[prompt-engineering|ingeniería de prompts]] ha eliminado la barrera de producción, lo que hace que la pregunta de fondo sobre la corporeización sea *comprobable*, no que la haya respondido.

## La IA dentro del entorno inmersivo

La segunda dirección es aquella en la que la IA deja de crear y empieza a enseñar dentro del visor, y es donde el [[rag|anclaje por recuperación]] pasa a ser portante. Una plataforma agéntica de formación inmersiva para braquiterapia de alta tasa de dosis construyó un gemelo digital de la sala de tratamiento —modelos de pacientes anatómicamente precisos, catéteres, cargadores posteriores, aplicadores— para que quienes se formaban pudieran ver la orientación espacial de un aplicador respecto a los órganos en riesgo, sin sala de blindaje, sin fuente radiactiva activa y sin los riesgos de privacidad de una exploración pélvica física. Un asistente consciente del conocimiento, anclado en guías [[medical-education|clínicas]], proporcionaba orientación con las manos libres mediante una interfaz de voz de tres niveles (micrófono del visor → transcripción y análisis de intención en el servidor → voz espacializada), lo que elimina la dependencia del mando durante las maniobras delicadas. Técnicamente funcionó: latencia extremo a extremo de 3–5 segundos en 50 ejecuciones de Monte Carlo, recuerdo de contexto por encima de 0,93 y relevancia de las respuestas de 0,87 en 52 pares de pregunta-respuesta escritos por especialistas, con un modelo de embeddings médicos que mejoraba la exhaustividad de las respuestas.

Sus lagunas definen la frontera actual del patrón. La evaluación fueron métricas objetivas más un único usuario especialista del dominio, no estudiantes; no había [[assessment|evaluación]] automática ni [[adaptive-learning|retroalimentación adaptativa]]; y el asistente no puede ir más allá de los documentos que se le dieron, así que los protocolos específicos de cada institución y los escenarios poco frecuentes quedan fuera de su competencia. En otras palabras, la inteligencia tutorial dentro de los entornos inmersivos sigue siendo en su mayor parte **orientación**, no medición, y es la misma arquitectura de plataforma, con la [[llm|inferencia del modelo]] descargada a un backend local con GPU, la que hace que la orientación con las manos libres sea lo bastante rápida para ser utilizable.

El intento más claro hasta la fecha de esa medición ausente procede de un estudio de diseño vocacional y no de un entorno clínico. En un curso de diseño de interiores de 12 semanas, se comparó un entorno de RV (visores más una herramienta de modelado 3D) con un asistente respaldado por LLM representado como humano digital frente a la instrucción convencional basada en [[project-based-learning|proyectos]], y al asistente se le asignó un papel distinto en cada fase: recomendación de recursos y descomposición de tareas, preguntas por capas con mapas de conocimiento, simulación de efectos de diseño y detección de fallos, y registro del discurso para el profesorado ([[ai-ive-pbl-vocational-design-creativity-2026|Jin et al., 2026]]). En 63 respuestas válidas, la condición inmersiva con agente produjo una capacidad de diseño significativamente mayor (η²p = .138) y una capacidad creativa mayor (η²p = .111), más [[student-engagement|implicación]] cognitiva (d = 0,90) y conductual (d = 0,75), y más motivación (d = 0,74) y satisfacción (d = 0,69), con una [[cognitive-offloading|carga cognitiva]] declarada *menor*, no mayor (d = −0,52), lo que los autores atribuyen a que el asistente recorta el esfuerzo de búsqueda e integración interdisciplinar. Dos límites impiden que esto zanje la cuestión: la novedad ideacional y la implicación [[affective-computing|afectiva]] no se movieron, y todos los resultados son [[self-report-measures|autoinformes]], sin valoraciones de artefactos ni registros del visor.

El contraste con un despliegue comparable en educación de diseño es instructivo. Un estudio de arquitectura que usó una canalización de [[generative-ai|IA generativa]] más XR multiusuario encontró una confianza en la [[self-efficacy|autoeficacia]] de diseño *en descenso* en los equipos que la usaron y ninguna ventaja en las valoraciones a ciegas de un panel. La diferencia entre ambos casos es menos el hardware que la orquestación: el estudio vocacional fijó la estructura de fases, el papel del asistente en cada fase y la rúbrica de evaluación antes de la intervención, y midió la capacidad productiva por separado de la novedad ideacional.

La versión de este mismo patrón orientada al profesorado es más joven y más frágil. [[luminote-llm-vr-stage-lighting-education-2026|Liang et al. (2026)]] dejaron que un docente de iluminación escénica dictara su intención en una escena de RV con un puntero láser como ancla espacial, y que un [[llm|LLM]] la convirtiera en anotaciones espaciales revisables por el docente, demostraciones de iluminación ejecutables y explicaciones de jerga a demanda. A lo largo de 55 prompts y 531 acciones generadas, la asistencia fue más fuerte en los objetivos expresivos y poco especificados (212 de 245 acciones de efecto visual aplicadas, 86,5%) y más débil en las peticiones a nivel de aparato, donde 26 de las 28 acciones rechazadas se remontaban a referencias direccionales como «luz izquierda» que el modelo resolvía al aparato equivocado: el anclaje en el marco de referencia espacial de la escena, y no la ejecutabilidad, era la restricción vinculante. El profesorado usó las sugerencias como un [[human-in-the-loop-ai|proceso de refinamiento controlable]] y no como una respuesta: 127 de las 147 acciones rechazadas o modificadas (86,4%) fueron seguidas de un nuevo prompt, y solo una de un ajuste manual. El resultado más aleccionador del estudio es de representación: las anotaciones que externalizaban el razonamiento experto no se alineaban de forma fiable con lo que entendían las personas novatas, así que la instrucción inmersiva con IA arrastra tanto el problema de anclaje de los casos de tutoría anteriores como un segundo: la competencia del profesorado y la comprensión de quien aprende no son el mismo objetivo.

## Qué muestra la evidencia

La evidencia más sólida sobre la RV/RA es comparativa y [[discipline-specific-aied|específica de cada disciplina]]. Un [[meta-analysis-systematic-review|metaanálisis]] de 33 estudios experimentales y cuasiexperimentales (N = 3.181) sobre [[ai-technologies|tecnologías]] emergentes en la enseñanza del [[english-education|inglés como lengua extranjera]] encontró un efecto global de pequeño a moderado (g = 0,38) y, dentro de él, los **mayores efectos para la RV/RA**, con ganancias que aumentaban según el nivel educativo y favorecían las destrezas productivas (hablar, escribir) frente a las receptivas.

La contraevidencia es igual de informativa. En el primer metaanálisis de intervenciones basadas en IA para el [[special-education|estudiantado con discapacidad]] —29 estudios, 239 tamaños del efecto, efecto global medio g = 0,588—, los sistemas de RV inteligente produjeron g = 0,528, **no estadísticamente significativo**, mientras que el software informático alcanzó 0,959 y los robots 0,509. El sesgo de publicación estaba presente y el método trim-and-fill redujo la estimación global a g = 0,269. El patrón no es que la inmersión fracase, sino que sus efectos son pequeños, heterogéneos y sensibles a cómo se diseñó y comparó la intervención concreta.

El resultado negativo más claro de la base de conocimiento procede de un despliegue en un estudio de diseño y no de una comparación de modalidades: en un estudio de diseño arquitectónico de 27 estudiantes, los equipos que usaron una canalización de IA generativa más XR multiusuario redujeron más su confianza en la [[self-efficacy|autoeficacia]] de diseño (β = −1,675) y su expectativa de resultado (β = −2,088) que los equipos que trabajaron con el flujo de curso habitual, sin diferencias significativas en las valoraciones de un panel experto sobre sus presentaciones ([[genai-xr-architectural-design-education-2026|Xiao et al., 2026]]). Los autores lo explican como una complementariedad dependiente de la fase con fricción real —IA generativa para externalizar ideas tentativas, XR para la evaluación espacial y de escala— junto a problemas de control, fidelidad dimensional, atención compartida y comodidad de movimiento: un recordatorio de que las herramientas inmersivas añaden costes de interacción además de capacidad.

## Fidelidad, presencia y la brecha de autenticidad

Cuando la práctica inmersiva se usa para habilidades interpersonales y procedimentales, el factor limitante no es la fidelidad visual sino la autenticidad sentida. Una revisión de [[mixed-methods-research|métodos mixtos]] sobre la simulación de enfermería impulsada por IA (19 estudios, N = 1.253) encontró que la IA era eficaz para el conocimiento cognitivo y los resultados afectivos, pero inconsistente para las habilidades psicomotoras complejas, y nombró la razón: una **brecha de autenticidad** que abarca la resonancia emocional, el reconocimiento de señales no verbales y las dimensiones táctiles y de [[summative-assessment|exploración]] física. Su recomendación práctica es un **continuo escalonado de simulación**: la IA se adapta bien a objetivos muy estructurados, como la comunicación básica y la anamnesis, mientras que los escenarios psicomotores avanzados y emocionalmente complejos corresponden a pacientes estandarizados humanos y a la práctica clínica. La inestabilidad técnica agrava el problema: los retrasos del reconocimiento de voz inyectan [[cognitive-offloading|carga cognitiva]] y ansiedad extrínsecas, lo que convierte la estabilidad y la latencia en palancas de diseño y no en detalles de implementación.

La misma lógica explica por qué la presencia no es automáticamente buena. Los mareos por movimiento, la inconsistencia de la interfaz, el coste del hardware y el acceso desigual a los dispositivos deciden quién puede usar un entorno inmersivo siquiera, y por eso las preguntas de [[equity-in-ai-education|equidad]] de esta modalidad conectan con la [[accessibility|accesibilidad]] y el [[inclusive-learning|aprendizaje inclusivo]] en lugar de quedar al margen.

## Conceptos conectados

- [[simulation]] — lo que suelen mostrar los entornos inmersivos; el modelo, no la modalidad
- [[embodied-learning]] — el mecanismo que la modalidad se supone que explota
- [[multimodal]] — el gesto, la voz y la entrada espacial como canales de aprendizaje
- [[situated-learning]]
- [[experiential-learning]]
- [[game-based-learning]]
- [[professional-training]] — el ámbito donde la práctica inmersiva está más consolidada
- [[generative-ai]] — la nueva capa de autoría
- [[prompt-engineering]] — cómo las personas sin programación construyen y refinan herramientas inmersivas
- [[agentic-ai]]
- [[pedagogical-agent]]
- [[rag]] — anclar la orientación dentro del visor
- [[intelligent-tutoring]]
- [[visualization]]
- [[medical-education]]
- [[accessibility]]
- [[inclusive-learning]]
- [[trust-calibration]] — la fidelidad y la conciencia de quien aprende sobre sus límites
- [[cognitive-offloading]] — la latencia y la inestabilidad como carga extrínseca
- [[edtech-platform]] — sincronización, latencia y presencia en varios sitios
- [[arts-design-and-media-education]]
## Artículos conectados

- [[genai-ar-physics-simulation-prompt-2026]] — Un prompt de cuatro elementos que genera simulaciones de física en RA controladas con las manos; piloto con 29 estudiantes y evidencia solo de percepción
- [[mixed-reality-engineering-learning]] — Aplicaciones de realidad mixta frente a kits físicos frente al aula en mecánica de ingeniería; más implicación, visualización compleja todavía difícil
- [[medgame-llm-medical-education-gamification]] — Formación médica gamificada con IA
- [[tech-enhanced-tabletop-cybersecurity-education]] — Escenarios de mesa aumentada en la enseñanza de la ciberseguridad
- [[genai-xr-architectural-design-education-2026]] — IA generativa y realidad extendida en la enseñanza colaborativa del diseño arquitectónico: un estudio exploratorio de estudio de diseño
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: estudio de diseño en RV inmersiva con un asistente docente respaldado por LLM, evaluado frente al PBL tradicional (Jin et al. 2026)
- [[luminote-llm-vr-stage-lighting-education-2026]] — LumiNote: instrucción multimodal asistida por LLM en la enseñanza de la iluminación escénica en RV, y dónde se rompió el anclaje (Liang et al. 2026)