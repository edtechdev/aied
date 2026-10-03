---
title: ECA
created: "2026-09-28T18:22:28-04:00"
updated: "2026-10-02T22:23:27-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/rct
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Ensayo controlado aleatorizado (ECA)** — un diseño de investigación en el que los participantes se asignan aleatoriamente a una condición de tratamiento o de control para estimar el efecto causal de una intervención sobre un resultado. En la [[ai-education|IA en la educación]], los ECA son el estándar de oro para establecer si una herramienta de IA o un enfoque [[pedagogy|pedagógico]] *causa* [[learning-gains|ganancias de aprendizaje]], cambios en la implicación u otros resultados, en lugar de limitarse a correlacionarse con ellos.

## Preguntas para reflexionar

- Si una escuela le dice que «el estudiantado que usó la herramienta de IA obtuvo puntuaciones más altas», ¿por qué eso podría seguir sin demostrar que la herramienta causó la ganancia, incluso si la diferencia es grande?
- La aleatorización equilibra los factores de confusión conocidos *y desconocidos* entre los grupos. Antes de leer, ¿qué logra la asignación aleatoria que no puede lograr una simple comparación de dos aulas intactas, por muy bien emparejadas que parezcan?
- La página llama al ECA el estándar de oro pero enumera costes reales: entornos artificiales, una IA que cambia rápido y que deja obsoletos los ensayos, muestras pequeñas con potencia insuficiente y limitaciones [[ethics|éticas]] para retener herramientas útiles. ¿Cuál de estas disyuntivas cree que se ignora más a menudo en los titulares de la investigación educativa?
- Un ECA con 1.174 participantes encontró que la [[generative-ai|IA generativa]] cerró cerca de tres cuartas partes de una brecha de productividad basada en la educación. Pero un ECA bien ejecutado también puede realizarse sobre una tarea estrecha en un entorno artificial. ¿Qué debería comprobar sobre la *medida de resultado* antes de fiarse de la afirmación causal?
- Considere el problema ético directamente: si tuviera motivos genuinos para creer que un [[intelligent-tutoring|tutor de IA]] ayuda al estudiantado a aprender, ¿es defendible negárselo aleatoriamente a la mitad de un aula durante un semestre? ¿Cómo diseñaría un estudio éticamente sólido que aun así aísle la causa?

## Introducción

La aleatorización es lo que distingue un ECA de otros diseños: al asignar aleatoriamente a quienes aprenden a las condiciones, un ECA equilibra los factores de confusión conocidos y desconocidos entre los grupos, de modo que cualquier diferencia observada en los resultados puede atribuirse a la intervención con una alta validez interna.

### Cómo aparecen los ECA en la investigación

- **Micro-ECA como respuesta a una tecnología que cambia rápido:** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] sostienen que los ensayos convencionales a gran escala no pueden seguir el ritmo de las [[edtech-platform|plataformas]] de tutoría que cambian de forma sustancial durante un estudio, y usan microensayos controlados aleatorizados dirigidos por [[teacher-role|profesorado]] en escuelas secundarias inglesas (644 de 929 estudiantes completaron el postest, g = 0,33) para mantener repetible la estimación causal. Las disyuntivas se declaran en su propio diseño: un 30,7% de abandono, resultados alineados con el [[curriculum-design|currículo]] y no estandarizados de forma independiente, y solo cuatro semanas de seguimiento.
- **Afirmaciones de eficacia causal:** los ECA en IAED ponen a prueba si un tutor, una herramienta o un tratamiento pedagógico con IA mejora los resultados. [[generative-ai-education-productivity-gaps|Un experimento aleatorizado sobre IA generativa]] con 1.174 participantes encontró que la IA generativa reduce sustancialmente las brechas de productividad basadas en la educación, cerrando cerca de tres cuartas partes de la diferencia de rendimiento inicial: una estimación causal clara del efecto de la IA.
- **Comparación con el estándar de oro:** la página de [[research-methods-aied|métodos de investigación]] sitúa los ECA como el diseño más sólido para la validez interna y a la vez señala sus disyuntivas: coste, condiciones artificiales, IA que cambia rápido, muestras pequeñas con potencia insuficiente y límites éticos para retener herramientas potencialmente útiles.

- **Un ensayo diseñado para la equivalencia, no para la diferencia.** [[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]] aleatorizaron a 2.383 adultos a tutoría con IA, tutoría humana en vivo o un control con vídeo, redactaron nuevos ítems del GRE con antiguos desarrolladores de pruebas de ETS y Kaplan para mantener fuera la contaminación de pruebas publicadas, contrabalancearon las dos formas y probaron la equivalencia con dos pruebas unilaterales frente a ±0,25 DE en lugar de una diferencia: las decisiones de diseño que hacen que «ninguna diferencia significativa» sea un resultado interpretable.

- **Aleatorización por grupos, adopción baja y qué significa entonces una estimación por intención de tratar.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] aleatorizaron a 2.379 estudiantes de grado en 13 bloques asignando *instructores* y no estudiantes, de modo que todo el estudiantado de una sección heredaba la condición de su instructor: el diseño que hace factible un ensayo de despliegue en varias secciones, y el que crea los problemas de inferencia que el estudio documenta después. Solo alrededor del 15% del estudiantado de las secciones tratadas llegó a usar la herramienta, así que los efectos notificados estiman el hecho de *ofrecer* acceso y no el de usarlo; los autores leen la intervención como el uso más amplio de IA que su introducción indujo, y tratan las sesiones individuales como una cuestión aparte. Como el tratamiento se asignó a nivel de instructor, la inferencia se apoya en 34 conglomerados —un contexto en el que los errores estándar robustos por conglomerados exageran la precisión—, por lo que el artículo informa de inferencia por aleatorización junto a ellos y encuentra sus conclusiones robustas. Los dos efectos destacados, una caída de 0,37 DE en las notas finales en la muestra de emparejamiento exacto y una caída de 0,90 DE en la participación registrada en la plataforma en ambas muestras, son consecuencias a nivel de sección que una aleatorización por estudiante de la misma herramienta no podría haber aislado sin contaminación entre compañeros de clase tratados y de control.
- **La adopción acota lo que un ensayo puede probar, y el apoyo a la implicación no es dosificación.** [[access-not-enough-ai-tutoring-2026|Robinson et al. (2026)]] realizaron dos ECA con una plataforma de lectura en los que solo el 60,7% y el 53,3% del estudiantado de control llegó a usar la plataforma; un tutor de implicación aumentó los cuentos leídos en un 71–80%, pero no produjo ninguna ganancia de rendimiento, lo que concuerda con los 2–5 minutos semanales alcanzados.
- **Una escala que convierte los nulos en evidencia.** [[mata-sustaining-ai-enabled-student-support-2026|Mata et al. (2026)]] siguieron a 8.708 estudiantes a lo largo de ocho semestres con potencia para detectar efectos de 0,05 DE y encontraron un movimiento grande e inmediato en tareas binarias con fecha —34 puntos porcentuales más de inscripción para el 16 de agosto tras un único recordatorio—, mientras que el rendimiento académico, la persistencia y la graduación no mostraron ningún efecto detectable. La escala es la lección de diseño: con esta N los nulos académicos son resultados precisos y no fallos de detección, que es lo que autoriza la conclusión de que una herramienta de comunicación mueve lo que puede abordar y no los resultados acumulativos de aprendizaje.
- **Un promedio nulo puede ocultar heterogeneidad que se compensa.** Un ECA prerregistrado que aleatorizó a 538 docentes en 24 escuelas turcas a nivel de departamento escolar encontró que el rendimiento cayó 0,129 DE entre el profesorado por debajo de la mediana mientras subía 0,054 entre el que estaba por encima, y que la motivación cayó 0,111 DE, con un examen comprimido por el techo (media de control 89,2/100) limitando la potencia.([[genai-can-harm-teaching-rct-2026|Sungu, Lira y Duckworth (2026)]])
- **Un prerregistro que fija la pregunta y el efecto detectable.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] registraron ambos ensayos de curso en el Registry of Efficacy and Effectiveness Studies, comprometiéndose de antemano con la estimación por intención de tratar y un tamaño de efecto mínimo detectable de unos 0,157, y aleatorizaron a los estudiantes que dieron su consentimiento cada término con una segunda oleada en el periodo de altas y bajas, de modo que quienes se inscribieron tarde entraron en el diseño y no en la muestra de análisis por defecto. Al agrupar 2.483 estudiantes de dos cursos, el efecto se sitúa en el umbral A/B (cuatro puntos porcentuales), mientras que el cambio agrupado en la nota numérica no sobrevive a la corrección por comparaciones múltiples: un recordatorio de que un resultado primario registrado disciplina cuál de varios resultados correlacionados se cree.
- **Aleatorizar dentro de secciones intactas, con una línea base previa al tratamiento.** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni y Fryer (2026)]] aleatorizaron a 454 estudiantes de grado dentro de tres secciones intactas de marketing tras el periodo de altas y bajas y midieron los cuatro resultados en T1, antes de que ningún estudiante tuviera acceso al chatbot, así que la comparación a lo largo del término se apoya en una línea base medida y no supuesta. El resultado plano (ninguna interacción grupo × tiempo alcanzó significación; el mayor efecto notificado fue d = 0,050, en el interés) se informa junto con la adopción —0,89 inicios de sesión por semana frente a una asignación de una vez por semana—, lo que evita que un nulo sobre un tratamiento poco usado se lea como un nulo sobre la herramienta.
- **Cruce intrasujeto y un control fijado en las mejores prácticas.** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] hicieron que cada uno de los 194 estudiantes de ciencias de la vida de Harvard trabajara dos lecciones de física —una en una sesión de [[active-learning|aprendizaje activo]] en clase y otra con el tutor de IA del propio curso, en orden contrabalanceado con pretest y postest alrededor de cada una—, de modo que cada estudiante sirve como su propio control y la comparación de *modos de impartición* no queda confundida por quién fue asignado a cuál. La segunda elección de diseño importa igual: el comparador fue el aprendizaje activo basado en la investigación y no una clase magistral, así que la ventaja (mediana del postest 4,5 frente a 3,5) se mide contra las mejores prácticas actuales y no puede leerse como «la IA supera a la enseñanza».

### Fortalezas y limitaciones

- **Fortalezas:** la inferencia causal más sólida; una medición limpia de los resultados; permite estimar tamaños del efecto; equilibra los factores de confusión mediante la aleatorización.
- **Limitaciones:** costosos y lentos; los entornos artificiales pueden reducir la validez ecológica; las herramientas de IA cambian más rápido de lo que tardan los ensayos; las muestras pequeñas a menudo tienen poca potencia para detectar efectos significativos; limitaciones éticas para retener una IA potencialmente beneficiosa de un grupo de control. Dos de esos límites cambian de forma cuando la asignación es por conglomerados: la muestra efectiva pasa a ser el número de *conglomerados* y no el de estudiantes, de modo que un ensayo puede ser grande por número de personas y fino por esa medida —los 2.379 estudiantes de Liu et al. se apoyan en 34 conglomerados a nivel de instructor—, y cuando la adopción es voluntaria y baja, una estimación por intención de tratar responde a si ofrecer la herramienta cambió los resultados, no a si usarla lo hizo.

Para un tratamiento más completo del diseño experimental en la IA en la educación —incluido cuándo es apropiado un ECA frente a diseños cuasiexperimentales, de encuesta o computacionales— véase [[research-methods-aied]].

## Conceptos conectados

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]
- [[student-support-and-success]] — el diseño que sustenta la evidencia más sólida sobre apoyo al estudiantado

## Artículos conectados

- [[generative-ai-education-productivity-gaps]] — ¿Reduce la IA generativa las brechas de productividad basadas en la educación? Evidencia de un experimento aleatorizado
- [[genai-can-harm-teaching-rct-2026]] — La IA generativa puede perjudicar la enseñanza: un ECA
- [[access-not-enough-ai-tutoring-2026]] — El acceso no basta: el apoyo humano mejora la implicación con la tutoría de IA
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluar la tutoría con IA al ritmo de la innovación: microensayos aleatorizados dirigidos por docentes de una plataforma de tutoría con IA en ciencias del GCSE
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: la tutoría con IA y la humana producen ganancias de aprendizaje equivalentes en el GRE
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Aleatorización por grupos a nivel de instructor: una caída de 0,37 DE en las notas finales y de 0,90 DE en la participación en la plataforma, con un 15% de adopción e inferencia sobre 34 conglomerados (Liu et al. 2026)