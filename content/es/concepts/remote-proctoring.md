---
title: Supervisión remota de exámenes
created: "2026-09-28T19:10:33-04:00"
updated: "2026-10-02T22:23:31-04:00"
type: concept
foundations: [academic-integrity]
pedagogy: [online-teaching-and-learning]
assessment: [process-oriented-assessment, remote-proctoring, summative-assessment]
ethics: [equity-in-ai-education, privacy]
level: [higher ed]
confidence: high
translation_of: concepts/remote-proctoring
source_updated: "2026-09-30T08:05:25-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La supervisión remota de exámenes** — el seguimiento de los exámenes cuando el estudiantado los realiza fuera de un espacio físico vigilado, desde una persona supervisora que observa por webcam o desde un centro de control hasta sistemas de supervisión totalmente automatizados basados en IA (AIPS) que usan aprendizaje automático y profundo para verificar la identidad y señalar conductas sospechosas. Es el principal medio para preservar la validez de la [[summative-assessment|evaluación sumativa]] y la [[academic-integrity|integridad académica]] en la [[online-teaching-and-learning|enseñanza en línea y a distancia]], donde la vigilancia presencial a menudo no es viable, pero suscita serias preocupaciones sobre la [[privacy|privacidad]], la vigilancia académica, la equidad, la justicia y la erosión de la [[trust|confianza]], unos costes que pueden dañar por sí mismos el entorno de aprendizaje que pretende proteger.

## Preguntas para reflexionar

- Antes de leer, cuando imagina «la integridad académica en los exámenes en línea», ¿cuál es su primer instinto sobre cómo preservarla, y ese instinto trata de detectar a quien hace trampas o de construir confianza? La página sostiene que ambos reflejan filosofías muy distintas.
- La supervisión remota va desde una persona que observa por webcam hasta sistemas de IA que analizan movimientos oculares, postura de la cabeza y expresiones faciales. ¿Qué observa *realmente* un sistema de IA cuando señala una «conducta sospechosa», y cuánta confianza tiene en que apartar la mirada de la pantalla equivale a hacer trampas?
- La página advierte de que la vigilancia puede ser contraproducente: sentirse observado eleva la [[anxiety-and-stress|ansiedad ante los exámenes]], y el estudiantado estresado puede ser *más* proclive a hacer trampas. ¿Recuerda alguna vez en que la presión o la vigilancia afectaran a su propio rendimiento? ¿Socava esa experiencia el argumento a favor de la supervisión?
- La supervisión automatizada captura el espacio vital, la cara y la voz del estudiantado, a menudo sin más opción real que consentir. ¿Dónde está la línea entre una supervisión razonable del examen y una vigilancia que presume al estudiantado culpable hasta que demuestre ser honesto, y quién debería trazarla?
- La investigación muestra que la supervisión puede señalar como sospechosa una conducta benigna, produciendo acusaciones falsas, y que la exactitud del modelo varía según la demografía y el entorno. Si usted es [[administrator|administrador]], ¿cómo sopesa la integridad que recupera frente a la equidad y la confianza que puede erosionar?
- La página enmarca la supervisión como una herramienta y no como una solución: existen alternativas como la evaluación oral y la [[process-oriented-assessment|evaluación basada en el proceso]]. Antes de leer, ¿qué enfoque defendería para la evaluación de alto impacto en un contexto remoto, y qué evidencia le haría cambiar de opinión?

## Introducción

La supervisión remota existe en un espectro. La **supervisión en línea** implica normalmente a una persona supervisora que vigila a un estudiante por webcam o desde un centro de control. La **supervisión automatizada o basada en IA (AIPS)** sustituye o complementa a la persona con sistemas de [[machine-learning|aprendizaje automático]] y aprendizaje profundo (CNN, RNN, LSTM) que analizan señales visuales —movimientos oculares, postura de la cabeza, expresiones faciales y lenguaje corporal— para detectar conductas sospechosas en tiempo real. Entre las plataformas habituales están ProctorU y Kryterion. Los AIPS suelen combinar cuatro funciones: (1) autenticación de identidad (por ejemplo, verificación facial por cámara), (2) restricciones de navegación, (3) autorización o control remoto del examen y (4) generación de informes a partir de las sesiones grabadas.

## Ventajas y oportunidades

- **Recupera validez e integridad en la evaluación en línea.** La supervisión remota responde a un problema de validez real. En la [[online-teaching-and-learning|evaluación en línea]], la [[generative-ai|IA generativa]] hace que el trabajo no supervisado sea poco fiable como medida del aprendizaje: las medidas sin asistencia, supervisadas y con libro cerrado son la señal más fuerte de lo que el estudiantado sabe de verdad (véase [[summative-assessment|evaluación sumativa]], [[generative-ai-reduced-study-time-math|evidencia sobre la retención en exámenes supervisados]]). Sin alguna forma de vigilancia, los exámenes en línea pueden inflar las notas al capturar un rendimiento asistido por IA y no uno independiente.
- **Escalabilidad y coste.** La supervisión automatizada reduce la necesidad de espacios físicos dedicados y de personal vigilante, lo que hace viable el seguimiento a escala: una ventaja para los MOOC y los grandes programas en línea donde la supervisión tradicional es logística y económicamente inviable.
- **Accesibilidad y alcance.** La supervisión permite que el estudiantado en ubicaciones remotas haga los exámenes desde cualquier lugar, eliminando barreras geográficas y de horarios para la acreditación.
- **Capacidad de detección.** Los sistemas avanzados de aprendizaje automático y profundo pueden detectar trampas (movimientos oculares, postura de la cabeza, expresiones faciales) de forma más fiable que la observación manual, y pueden vigilar de forma continua en lugar de intermitente.

## Desventajas, riesgos y daños

- **Daños a la confianza y a la relación entre estudiantado y profesorado.** El coste más consecuente de la supervisión remota suele ser relacional. La vigilancia continua comunica que se presume al estudiantado deshonesto, lo que puede erosionar la [[trust|confianza]], corroer la relación entre estudiantado y profesorado y socavar el sentido de propósito compartido que sostiene la integridad académica. La vigilancia entendida como aplicación de la norma puede desplazar el enfoque educativo y basado en la confianza que construye un uso responsable.
- **Vigilancia académica.** La supervisión remota es una forma de vigilancia académica que extiende el seguimiento institucional al entorno privado del hogar del estudiante. Más allá del examen en sí, estos sistemas capturan continuamente el espacio vital, la cara, la voz y la conducta del estudiante: un nivel de escrutinio con pocos precedentes en la [[higher-ed|educación superior]]. Quienes la critican sostienen que normaliza una cultura de la vigilancia en la que se presume al estudiantado culpable hasta que demuestre ser honesto, reconfigurando la relación entre las instituciones y quienes aprenden y suscitando preguntas sobre la proporcionalidad: si las ganancias de integridad justifican someter a todo el estudiantado a una vigilancia omnipresente por las faltas de unos pocos.([[privacy]]), [[trust|confianza]]
- **Privacidad y consentimiento.** Los AIPS acceden continuamente a imágenes faciales, patrones de voz, mirada y dinámica de tecleo, a menudo mediante una vigilancia audiovisual persistente. El tratamiento de datos debe cumplir marcos como el RGPD y el proyecto de ley PDP de India, y exige un consentimiento claro y un manejo seguro de los datos biométricos. El estudiantado a menudo no tiene más opción que aceptar la vigilancia si quiere hacer un examen, lo que suscita dudas sobre si el consentimiento es genuinamente voluntario.([[privacy]])
- **Falsos positivos, acusaciones falsas y ansiedad.** Los sistemas pueden señalar como sospechosa una conducta benigna (apartar la mirada, ajustar la postura), erosionando la confianza del estudiantado y produciendo acusaciones falsas de mala praxis, sobre todo cuando quienes supervisan o quienes hacen la prueba carecen de soltura.
- **Estrés y ansiedad ante los exámenes.** Hacer un examen supervisado es en sí una fuente importante de estrés y ansiedad. La vigilancia continua, el miedo a ser señalado injustamente y la presión de sentirse observado pueden elevar la ansiedad ante los exámenes y mermar el rendimiento y, según la evidencia, el estudiantado estresado puede ser *más* proclive a recurrir a conductas deshonestas, lo que significa que la vigilancia puede ser contraproducente. Sentirse vigilado es estresante y puede inducir por sí mismo la conducta poco ética que pretende prevenir.
- **El fundamento de la integridad no superó su prueba más grande.** A lo largo de cuatro oleadas y 1.760 estudiantes en 105 cursos, la supervisión elevó la ansiedad ante los exámenes (β = 0,60, p < 0,001) pero no tuvo efecto sobre la tentación de hacer trampas, la dificultad percibida ni las calificaciones, de modo que el coste de la vigilancia no quedó compensado por la disuasión ([[conijn-fear-big-brother-proctored-exams-2022|Conijn et al. (2022)]]).
- **Equidad y brecha digital.** La dependencia de dispositivos, la conexión inestable, la iluminación y la variabilidad del hardware perjudican de forma desproporcionada al estudiantado rural y con poco ancho de banda; la exactitud del modelo puede variar según la demografía y el entorno, con el riesgo de señalamientos injustos.([[digital-divide]]), [[equity-in-ai-education|equidad en la educación con IA]] Una revisión de alcance de la supervisión en la evaluación de [[nursing-education|enfermería]] muestra que no es un caso límite: cuatro de sus seis estudios incluidos informaron de problemas de conectividad a internet, uno informó de cortes de suministro eléctrico junto con paquetes de datos limitados, y la incompatibilidad de dispositivos, los fallos de extensiones del navegador y los escaneos ambientales fallidos eran rutinarios, así que la inequidad infraestructural, y no solo el sesgo del modelo, determina quién puede ser evaluado siquiera.([[harerimana-remote-proctoring-nursing-scoping-2026]])
- **Lagunas de detección y carrera armamentística.** La suplantación de identidad (fotos o vídeo que enmascaran), el uso del navegador y el copiar y pegar siguen siendo difíciles de detectar de forma fiable; la exactitud de la detección está limitada por las limitaciones de los conjuntos de datos, la evaluación con un solo modelo y las lagunas de reproducibilidad. La supervisión no resuelve del todo la integridad y puede crear una falsa sensación de seguridad.
- **La cuestión de la gobernanza.** Si la vigilancia es la respuesta correcta frente al [[authentic-assessment|rediseño de la evaluación]] (oral, basada en el proceso, [[eportfolio|portafolio]]) es una decisión institucional abierta; la supervisión remota es una herramienta, no una solución completa.([[governance]]) La exposición que sigue cuando la aplicación de la norma sale mal —acusaciones que se apoyan en puntuaciones y registros de eventos, la conservación y el tratamiento posterior de los datos capturados, y reglas que recaen de forma desigual sobre el estudiantado con discapacidad o no hablante nativo— se traza en [[legal-issues-and-risks|cuestiones y riesgos legales]].

## Base de evidencia

- Una [[meta-analysis-systematic-review|revisión sistemática]] de una década sobre 80 estudios revisados por pares (2014–2024) encuentra que la supervisión avanzada con aprendizaje automático y profundo detecta trampas de forma más fiable que los métodos tradicionales, pero está limitada por lagunas en los conjuntos de datos (el 35% no divulgaba por completo los datos), la evaluación con un solo modelo (40%), problemas de reproducibilidad (30%), una notificación ética escasa (solo el 25%) y métricas inconsistentes (20%). Los falsos positivos y negativos —señalar una conducta normal como sospechosa o pasar por alto trampas sutiles— socavan la fiabilidad y la confianza.([[automated-online-exam-proctoring-decade-review-2026]])
- Una revisión complementaria documenta los métodos de trampa que la IA debe contrarrestar (suplantación de identidad mediante fotos o vídeo, uso del navegador o del dispositivo, copiar y pegar) y las barreras prácticas: la ansiedad de quien hace la prueba, las lagunas de soltura que provocan acusaciones falsas, y una infraestructura (webcam, micrófono, internet) que no es universalmente asequible ni disponible. Informa de que en torno al 37,8% del estudiantado universitario y al 41,8% del de secundaria admite haber hecho trampas: la motivación para vigilar.([[academic-dishonesty-automated-proctoring-ai-2026]])
- **El profesorado no ve ningún beneficio en supervisar los exámenes hechos fuera del aula.** [[biology-degree-integrity-genai-cheating-2026|Chan et al. (2026)]] encuestaron a 56 docentes (tasa de respuesta del 47%) de un departamento de [[biology-education|biología]] tras codificar los 38 programas de sus asignaturas troncales obligatorias, y les pidieron que valoraran cada categoría calificada que usan según su vulnerabilidad a la deshonestidad académica (0 = mínimamente a 4 = muy vulnerable). Los exámenes fuera del aula supervisados y no supervisados se valoraron *de forma idéntica*, con una mediana de 3 (moderadamente vulnerables), mientras que los exámenes presenciales supervisados fueron la única categoría valorada como mínimamente vulnerable (mediana 0) y eran significativamente menos vulnerables que todas las demás categorías (p_adj < 0,01). Como había navegadores bloqueados disponibles para los exámenes fuera del aula, el resultado es una percepción de que las herramientas no redujeron la exposición, en consonancia con la evidencia de revisión anterior de que la supervisión en línea solo es eficaz de forma desigual, y con los costes documentados de ansiedad, privacidad y acusaciones falsas que hacen que el equilibrio sea discutido. La importancia relativa se ve en el recuento de puntos del mismo estudio: los exámenes fuera del aula representaban una media del 54,2% de la nota en los cursos presenciales que los usaban y del 59,2% en los cursos en línea, donde todas las ediciones dependían de ellos.
- Una revisión de alcance de la supervisión remota en la [[assessment|evaluación del estudiantado]] de [[nursing-education|enfermería]] traza un espectro de modalidades más que una práctica única —vigilancia humana en directo (ProctorU), supervisión con extensión de navegador de IA con webcam, micrófono y señalización de conducta (Honorlock), vigilancia con webcam más navegador bloqueado (Respondus Monitor), una aplicación móvil de vigilancia desplegada institucionalmente, y ordenadores fijos de centro de pruebas bajo vigilancia central— y sostiene que la diversidad refleja disparidades de infraestructura y capacidad institucional y no un estándar compartido. Solo seis estudios cumplieron sus criterios de inclusión (1.567 estudiantes de enfermería en Estados Unidos, Reino Unido, África austral y Egipto), y ninguno se publicó antes de 2021. Lo que la revisión establece es que la vigilancia produce *percepciones* de disuasión y una pesada carga de revisión para el profesorado: el 98–100% de acuerdo en que la vigilancia por webcam y los navegadores bloqueados disuaden de hacer trampas es [[self-report-measures|autoinformado]] por un programa de posgrado de enfermería de práctica avanzada, las alertas de IA de alto riesgo eran raras, con un máximo del 5%, pero las alertas menores frecuentes producían falsos positivos que exigían una revisión intensiva, y el profesorado sudafricano informó de deshonestidad continuada bajo vigilancia activa. El único estudio comparativo de rendimiento apunta en la dirección contraria —una cohorte con supervisión presencial obtuvo puntuaciones significativamente más altas en el HESI Exit Exam y en la preparación para el NCLEX que la cohorte de ProctorU— y la revisión trata el vínculo entre vigilancia y aprendizaje más honesto como una pregunta abierta y no como un beneficio demostrado.([[harerimana-remote-proctoring-nursing-scoping-2026]])

## Direcciones recomendadas

- **Supervisión híbrida humano-IA.** Emparejar la señalización automatizada con la [[human-in-the-loop-ai|revisión humana]] para reducir los falsos positivos y mantener el juicio en contexto.
- **Arquitectura que preserva la privacidad.** El procesamiento en el borde, la anonimización y el tratamiento en el dispositivo reducen la invasividad de la captura continua de datos.
- **Despliegue consciente de la equidad.** Conjuntos de datos diversos y geográficamente inclusivos y modelos ligeros para entornos con pocos recursos; alternativas accesibles para el estudiantado sin dispositivos o conectividad fiables.
- **Educar antes de vigilar.** Preferir fomentar la [[ai-literacy|alfabetización en IA]] y el [[reducing-ai-misuse|uso responsable]] mediante la cultura y la construcción de confianza, reservando la supervisión para los casos de alto impacto que realmente la requieren.

## Conceptos conectados
- [[anxiety-and-stress]]
- [[academic-integrity]]
- [[summative-assessment]]
- [[assessment]]
- [[automated-assessment]]
- [[online-teaching-and-learning]]
- [[ai-misuse-learning-harm]]
- [[privacy]]
- [[equity-in-ai-education]]
- [[digital-divide]]
- [[student-experience]]
- [[trust]]
- [[governance]]
- [[legal-issues-and-risks]]
- [[higher-ed]]

## Artículos conectados

- [[automated-online-exam-proctoring-decade-review-2026]] — Revisión sistemática de una década sobre la supervisión automatizada de exámenes en línea
- [[academic-dishonesty-automated-proctoring-ai-2026]] — Revisión exhaustiva de la deshonestidad académica en la supervisión automatizada
- [[ssaho-ai-academic-integrity-review-2025]] — IA e integridad académica: revisión sistemática
- [[conijn-fear-big-brother-proctored-exams-2022]] — El miedo al Gran Hermano: efectos secundarios negativos de la supervisión sobre la ansiedad ante los exámenes
- [[biology-degree-integrity-genai-cheating-2026]] — ¿Puede el estudiantado hacer trampas hasta obtener un título de biología? Estudio de caso de la vulnerabilidad de las notas de los cursos de biología a la deshonestidad académica en la era de la IA generativa
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Bajo vigilancia: trazar las prácticas de supervisión remota en la evaluación del estudiantado de enfermería