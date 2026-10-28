---
title: "¿Qué medidas y métodos de investigación puede usar un docente para evaluar intervenciones relacionadas con la IA?"
created: "2026-09-22T18:29:05-04:00"
updated: "2026-10-28T13:43:49-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
audience: [instructors, researchers, faculty developers]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
source_updated: "2026-10-28T11:47:13-04:00"
translation_of: faqs/evaluating-ai-interventions-methods
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Hizo el piloto en dos secciones, recogió una encuesta al final de la unidad y tiene una reunión de facultad en tres semanas donde alguien preguntará si funcionó. O un revisor le ha preguntado cuál era su condición de comparación, y la otra sección hizo algo distinto. En cualquier caso: ¿qué contaría como evidencia aquí?

Ajuste el método a la afirmación. Una encuesta le dice si la actividad gustó a los estudiantes. Si aprendieron requiere una medida de desempeño, y si la IA causó la ganancia requiere una condición de comparación.

## La versión breve

**1.** Escriba la afirmación en una frase, con el resultado nombrado. "Los estudiantes que usaron el tutor obtuvieron puntuaciones más altas en el examen sin ayuda" es comprobable.

**2.** Realice una línea base, la intervención, una medida posterior inmediata y una medida posterior tomada sin IA.

**3.** Describa la condición de comparación con tanto cuidado como el tratamiento, incluso cuando sea su práctica habitual.

**4.** Mida por separado el desempeño asistido y el aprendizaje independiente, y trate cualquier promedio publicado como una hipótesis sobre su clase.

## Elija el método que su pregunta pueda sobrevivir

La página [[research-methods-aied|Métodos de investigación en AIED]] expone qué aporta cada opción. Los experimentos aleatorizados dan la inferencia causal más sólida. Los diseños cuasiexperimentales de pre/post o de grupos emparejados encajan en clases intactas y sostienen afirmaciones más débiles. Las entrevistas, los grupos focales, las observaciones y el análisis de artefactos [[qualitative-research|cualitativos]] revelan mecanismos y experiencias inesperadas. Los [[mixed-methods-research|métodos mixtos]] emparejan la evidencia de resultados con una explicación. La [[design-based-research|investigación basada en el diseño]] conviene a un docente que refina una intervención a lo largo de iteraciones.

El análisis cualitativo asistido por IA pertenece a esa lista con una condición. Reorganiza un corpus de entrevistas en minutos, así que la [[chain-behind-claim-warrantability-2026|justificabilidad]] importa tanto como la exactitud: registre las reorganizaciones documentadas que permiten a un lector inspeccionar, impugnar y revisar el camino de los datos a la afirmación.

Una encuesta es una [[self-report-measures|medida de autoinforme]]: correcta para las actitudes, equivocada para el aprendizaje.

## Dé un nombre a la condición de comparación

Tres condiciones hacen interpretable una afirmación causal: un tratamiento descrito con precisión, una condición de comparación bien definida y una medida válida de aprendizaje duradero. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich y colaboradores (2025)]] auditaron 19 comparaciones de ChatGPT en educación con esos criterios. Cuatro (el 21%) cumplían las tres. El tratamiento estaba bien definido en el 74%, el grupo de control en el 42% y el resultado cualificaba como aprendizaje en el 53%.

El modo de fallo es fácil de reproducir. Una [[generative-ai|herramienta de propósito general]] introducida junto con actividades nuevas, retroalimentación nueva o una interfaz rediseñada confunde el medio con el método, y el resultado significativo pertenece al rediseño.

## Mida los resultados que de verdad le importan

La síntesis [[ai-ed-evaluation|Evaluación en IA educativa]] recomienda la ganancia de aprendizaje sin ayuda, la retención diferida, la transferencia a una tarea nueva, la calidad del razonamiento, las [[misconceptions|ideas erróneas]], la adopción de la retroalimentación y el desempeño por subgrupos. El compromiso, la satisfacción, los registros de uso de IA, la [[self-efficacy|autoeficacia]] y la [[technology-acceptance-model|utilidad percibida]] son medidas secundarias razonables y sustitutos pobres del aprendizaje. La carga de trabajo y el ahorro de tiempo cuentan como resultados de implementación, que es una pregunta distinta.

El mínimo a escala de aula es una línea base, la intervención, una medida posterior inmediata y una medida posterior sin ayuda. Añada una condición de comparación cuando pueda: la práctica habitual, nada de IA, IA sin restricciones frente a IA con andamiaje, o dos diseños alternativos. Puntúe el desempeño asistido y el no asistido con instrumentos separados, ya que una sola rúbrica los mezclará.

## Lea cualquier número como una hipótesis

Un efecto promedio de la literatura es una guía débil para un aula concreta. [[oneill-presumed-effective-meta-analysis-2026|La auditoría de O'Neill (2026)]] de 14 [[meta-analysis-systematic-review|metaanálisis]] de alto impacto encontró que ninguno ofrecía una base válida para sus afirmaciones. El [[learning-gains|"rendimiento académico"]] agrupado mezclaba puntuaciones de pruebas, motivación, [[self-efficacy|autoeficacia]] y actitudes en una sola estimación. La heterogeneidad era extrema: I² iba de 77,2% a 94,4% en los 13 análisis que la informaron, y 12 de ellos estaban por encima del 80%. Los 14 evaluaron el [[limitations-in-aied-research|sesgo de publicación]] de forma inválida, y el 61% de los estudios primarios examinados al azar presentaban problemas de validez. Cuatro análisis informaron de la varianza entre estudios, dos informaron de un intervalo de predicción, y ambos intervalos incluían el cero.

Una puntuación conveniente puede medir el constructo equivocado. En [[zhang-platform-scores-miss-ai-teaching-agents-2026|una evaluación de ocho agentes docentes de IA]], el agente clasificado en tercer lugar por la propia puntuación de la plataforma quedó último en una rúbrica validada por expertos, porque las puntuaciones de la plataforma indexaban el rendimiento del estudiante durante la interacción. Trate una métrica del panel como una hipótesis.

## En qué se equivocan los docentes

Una encuesta de satisfacción mide el aprendizaje. Mide la satisfacción, que la síntesis de Evaluación en IA educativa enumera como medida secundaria junto a los resultados de aprendizaje.

Una ganancia pre/post muestra que la intervención funcionó. Muestra que las puntuaciones subieron. Si la medida contaba como aprendizaje es una pregunta aparte, y la auditoría encontró un resultado de aprendizaje cualificado en el 53% de las comparaciones que revisó.

Los tamaños del efecto publicados se trasladan a mi clase. Los 14 metaanálisis de O'Neill no podían sostener las afirmaciones construidas sobre ellos, y ambos intervalos de predicción informados incluían el cero.

La analítica de la plataforma mide la calidad docente. El agente clasificado en tercer lugar por Zhang quedó último en una rúbrica de expertos.

## Lo que le van a responder

**"Ya tenemos evaluaciones de fin de curso."** Miden el curso, y llegan después del trimestre en el que usted necesitaba la respuesta.

**"Un grupo de comparación es imposible en un curso intacto."** Compare con la versión del mismo trabajo del año pasado, o con una segunda sección, y describa la diferencia con honestidad. Los diseños cuasiexperimentales son más débiles, y siguen siendo informativos cuando la alternativa es una afirmación sin comparación.

**"El tamaño del efecto del metaanálisis es grande."** ¿En qué resultado y en la clase de quién? Ambos intervalos de predicción que encontró O'Neill incluían el cero.

**"Nuestro panel muestra un compromiso fuerte."** El compromiso es una medida secundaria en la lista de Evaluación en IA educativa. Ponga junto a ella la medida de aprendizaje sin ayuda.

## Qué hacer esta semana

**1.** Escriba su afirmación como una sola frase y subraye el resultado.

**2.** Añada al calendario la medida posterior sin ayuda, después de la intervención y no en la misma semana.

**3.** Escriba un párrafo que describa la condición de comparación, con el mismo detalle que el tratamiento.

**4.** Reúna los números de plataforma que ya tiene y marque cada uno como resultado de artefacto o resultado de aprendizaje.

**5.** Pida a un colega que lea el diseño y diga qué más cambió durante el trimestre.

## A dónde ir después

[[does-ai-help-students-learn|¿Ayuda la IA a que los estudiantes aprendan?]] resume lo que muestra la evidencia de resultados, y [[research-gaps-aied|Brechas de investigación en AIED]] cubre dónde se adelgaza. [[checking-whether-educational-ai-works|¿Cómo sabemos si una IA educativa funciona correctamente?]] es la versión de esta pregunta para quienes construyen o compran un sistema.
