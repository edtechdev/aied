---
title: "¿Cuáles son las mejores prácticas para informar e interpretar la investigación sobre IA en educación?"
created: "2026-09-22T18:29:07-04:00"
updated: "2026-10-28T13:32:35-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
source_updated: "2026-10-28T11:43:14-04:00"
translation_of: faqs/reporting-interpreting-aied-research
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

Su borrador tiene una cifra llamativa en el resumen y un revisor le acaba de preguntar qué hizo realmente el grupo de control. O usted es el revisor y tiene entre manos un metaanálisis cuyo efecto agrupado es 0,67 y cuya sección de métodos ocupa página y media. O su departamento está redactando una guía sobre cómo debe el personal informar de los estudios sobre IA y quiere algo más concreto que "siga los estándares".

Seis omisiones deciden la mayoría de estos casos: qué sistema de IA se utilizó, para qué se configuró, qué papel pedagógico desempeñó, si hubo personas que diseñaran o revisaran su resultado, qué captó realmente la medida de resultado y qué hicieron los autores con el sesgo, el coste y las limitaciones. "No evaluable" es el veredicto honesto cuando faltan, y es un veredicto distinto de "refutado".

## La versión breve

**1.** Describa la IA como un tratamiento, no como un proveedor. Modelo, versión, configuración, prompts, papel y quién diseñó o revisó el resultado.

**2.** Nombre la justificación pedagógica y la comparación activa. El nombre de un producto no es un método, y la enseñanza habitual no es un control justo.

**3.** Haga que la medida case con la afirmación, incluido si el resultado se midió de forma diferida y sin ayuda.

**4.** Informe de la incertidumbre que realmente tiene el análisis: efectos dependientes, varianza entre estudios, intervalos de predicción, tamaños de subgrupo y sesgo de publicación.

**5.** Valide cada juicio automatizado, con un estándar de referencia y un adjudicador nombrados.

**6.** Informe de los contrapesos: gobernanza, coste computacional, su propio uso de la IA, resultados nulos y solo las citas que haya comprobado.

## Describa la IA como un tratamiento que alguien podría reconstruir

Esta es la comprobación que suspende la mayoría de los envíos. El marco RAISE (*Reporting AI Studies in Education*, Allison 2026) es una lista de 30 ítems repartida en diez dominios temáticos, y su afirmación diagnóstica es concreta: los envíos omiten sistemáticamente qué modelo se usó, cómo se configuró, qué papel desempeñó y si hubo agentes humanos que diseñaran o revisaran sus resultados. A los revisores les quedan entonces cuatro preguntas sin respuesta. ¿Qué estaba haciendo exactamente la IA? ¿Era necesaria? ¿Es replicable? ¿Son creíbles las afirmaciones sobre aprendizaje?

RAISE va de la justificación educativa a la especificación a nivel de API, la interacción entre estudiante e IA, la accesibilidad y la adecuación cultural, los participantes y el contexto, la participación humana, el diseño, la ética, la transparencia y la reproducibilidad, y termina en las limitaciones. Su matriz complementaria de ética y riesgo cubre los riesgos para la [[agency|agencia]] del estudiante, la [[equity-in-ai-education|equidad]], la [[governance|gobernanza]] de los datos y la transparencia algorítmica. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah y Gašević (2026)]] ofrecen una alternativa más ligera. TEP-AIED integra transparencia, ética y pedagogía en una sola estructura interdependiente, aporta una tabla de directrices mapeada a siete secciones de un artículo y pide a los autores que añadan una subsección de método titulada "Transparency, Ethics, and Pedagogy Considerations". Su razón es práctica: RAISE es exhaustivo y demasiado granular para el uso empírico rutinario. La declaración se inscribe en [[ai-use-disclosure]] y es lo que hace verificables las afirmaciones sobre [[privacy|privacidad]] y [[ethics|ética]].

La justificación educativa ocupa el primer lugar en RAISE porque la IA no es una herramienta neutra. El valor depende del alineamiento entre el problema de aprendizaje, una justificación teórica y el mapeo de los objetivos a las medidas de resultado. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] encontró que todos los metaanálisis auditados menos dos de 14 definían el tratamiento como una herramienta, ChatGPT o la IA generativa, o "IA" en general. El nombre de un producto no es una [[pedagogy|pedagogía]]. Tratar la exposición a ChatGPT como una intervención común es comparable a hacer un metaanálisis de los efectos del "papel".

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] plantean el mismo argumento para los estudios primarios. Al auditar un subconjunto de las comparaciones que sostienen un metaanálisis destacado, encontraron que solo el 21% tenía un tratamiento bien definido, un grupo de control y una medida de aprendizaje válida. El tamaño del efecto informado (g = 0,7) también superaba el de los [[intelligent-tutoring|sistemas de tutoría inteligente]] diseñados específicamente (0,66), y esa diferencia es una señal de alarma: un tratamiento que supera a la tutoría diseñada a propósito es probablemente un conjunto de cosas distintas bajo una sola etiqueta.

La prueba es una sola pregunta: ¿podría un lector competente reconstruir su intervención solo con la sección de métodos y obtener lo mismo?

## Decida qué le permite afirmar su medida

En la auditoría de la evidencia de O'Neill sobre 46 estudios primarios seleccionados al azar, 28 (61%) presentaban problemas de validez. El desajuste de la variable dependiente fue el más común (n = 15), seguido del desajuste de la variable independiente (n = 11), los problemas de diseño experimental (n = 7), los problemas de extracción de datos (n = 6), la ausencia de grupo de control (n = 6) y la asignación no aleatoria a los grupos (n = 6). Los resultados multidimensionales se agrupaban sistemáticamente como si fueran intercambiables, con las puntuaciones de las pruebas, la calidad de los deberes, la [[motivation|motivación]], la [[self-efficacy|autoeficacia]], las actitudes y la [[student-engagement|implicación]] fundidos en una única cifra de "rendimiento académico".

Dos hábitos de notificación lo impiden. Indique qué constructo mide el instrumento y que se validó para esa población; [[self-report-measures]] muestra dónde divergen las medidas basadas en la percepción respecto del comportamiento, y [[assessment-validity]] cubre la validez de constructo. Después informe de un resultado que no dependa de lo que el estudiante crea sobre la ayuda. El desempeño inmediato en la tarea con asistencia no es una [[learning-gains|ganancia de aprendizaje]], y la [[cognitive-offloading|descarga cognitiva]] es el mecanismo que con más probabilidad separa ambas cosas. La [[verification-quality-reliance-calibration-genai-2026|minirrevisión de 2026 de 493 registros y 14 estudios prioritarios]] encontró que ninguno midió el éxito de la verificación y la decisión de dependencia posterior de forma conjunta frente a un estándar de calidad del resultado adjudicado de manera independiente, y pocos miraron más allá del desempeño inmediato hacia la retención diferida o la [[transfer-of-learning|transferencia]].

Exponga el techo de forma explícita en la discusión. Un estudio que midió un cuestionario hecho con la herramienta abierta puede sostener una afirmación sobre el desempeño asistido. No puede sostener una afirmación sobre lo que aprendieron los estudiantes, y esa frase cuesta una línea.

## Informe de la incertidumbre que realmente tiene su análisis

Para las síntesis, informe del tratamiento de los efectos dependientes, la varianza entre estudios, los intervalos de predicción y la evaluación del sesgo de publicación. I² por sí solo no basta. O'Neill encontró una heterogeneidad informada grave allí donde se daba, de 77,2% a 94,4% en 13 metaanálisis, con 12 por encima del 80%, y nunca resuelta: ningún análisis de moderadores alcanzó el tamaño mínimo de subgrupo de diez estudios. Doce metaanálisis trataron los tamaños del efecto dependientes de un mismo estudio como independientes, lo que infla la evidencia aparente. Solo cuatro informaron de la varianza entre estudios (τ²) y solo dos de un intervalo de predicción, y ambos intervalos incluían el cero. El sesgo de publicación no se evaluó de forma válida en ningún caso del conjunto.

Las cifras de heterogeneidad necesitan su modelo adjunto, porque I² depende de la precisión. [[limitations-in-aied-research|Limitaciones de la investigación sobre IA en educación]] documenta una síntesis con I² = 82,98% bajo un modelo de efectos fijos y 15,75% bajo efectos aleatorios. Un lector al que solo se le da la primera cifra no puede saber cuán inconsistente es el corpus. Informe de τ² y de un intervalo de predicción junto a ella, que es además la convención que pide [[meta-analysis-systematic-review|la literatura de revisiones]].

Después descuente su propio titular. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš et al. (2026)]] agruparon 1.840 tamaños del efecto de 67 metaanálisis y encontraron que, una vez modelado el sesgo de publicación, el efecto medio cae a aproximadamente un tercio de la mediana publicada (SMD = 0,196 frente a 0,67), con un intervalo de predicción de -1,521 a +1,908. Ese intervalo abarca desde un daño sustancial hasta un beneficio sustancial para un estudio nuevo hipotético. Es la cifra más útil del artículo y la que más probabilidades tiene de desaparecer del resumen.

## Diga hasta dónde llega la afirmación

La equidad y el alcance fallan del mismo modo: un efecto grande que significa menos de lo que parece. Once de los 14 metaanálisis auditados no fijaron ningún límite poblacional, de modo que "estudiantes" abarcaba desde niños hasta residentes de medicina. Un solo curso, una sola institución, una sola disciplina o un solo país no autorizan una afirmación general, y los resultados de una herramienta rara vez se transfieren a otra.

Tres explicaciones dan cuenta de la mayoría de los efectos grandes, y todas son notificables. La novedad es una. El tiempo extra en la tarea es otra. La tercera es una condición de comparación que recibió enseñanza habitual en lugar de un control activo. Informe de qué hizo realmente el control, cuánto tiempo pasó cada brazo y cuán novedosa era la herramienta. Exponga también el límite poblacional, porque los efectos difieren entre grupos de estudiantes y un límite no declarado es lo que permite que una sola cifra agrupada represente a todos; [[differential-effects-across-learner-groups|Efectos diferenciales entre grupos de estudiantes]] expone la variación.

Trate la herramienta como un blanco móvil. Los sistemas propietarios cambian sin aviso, así que un hallazgo queda atado a una versión del modelo, y el [[benchmark]] que entusiasmó en una versión puede no mantenerse en la siguiente. La versión y la fecha de acceso pertenecen a la sección de métodos por esa razón, no solo por la replicabilidad.

## Valide los juicios automatizados

[[ai-ed-evaluation|La evaluación en AIED]] delega cada vez más la puntuación en modelos, lo que convierte el procedimiento de validación en parte del resultado y no en un apéndice. El relato de Khan Academy sobre las métricas de su [[intelligent-tutoring|tutor de IA]] informa de que la implicación cognitiva se puntúa con un juez [[llm|LLM]] calibrado frente a expertos pedagógicos humanos con un F1 de 0,83, y que los movimientos de las métricas procedieron de más de 40 experimentos en vivo en cinco meses y no de una evaluación fuera de línea ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi et al. 2026]]). [[machines-misread-pedagogical-quality|Tseng et al. (2026)]] muestran que el desacuerdo entre humanos y máquinas sobre la calidad de las [[formative-assessment|preguntas de pretest]] es sistemático y no aleatorio, y que la operacionalización de la rúbrica importa más que el prompting que empieza por el razonamiento.

La concordancia con codificadores humanos es cosa distinta de la calidad, e informar de ella como si fuera calidad es un blanco para los revisores. [[agreement-not-quality-llm-coding-verification|Liu et al. (2026)]] hicieron que un experto independiente juzgara 855 conjuntos de códigos por pares a ciegas respecto de la fuente. La concordancia entre humano y LLM fue de un Jaccard medio de 0,30 frente a 0,52 en la concordancia entre humanos, mientras que el verificador ciego prefirió la codificación humana y la de máquina en proporciones indistinguibles (51,5% frente a 48,5%, p = 0,537). Informe del objetivo de calibración, del estándar de referencia y de quién adjudicó el desacuerdo. Esos tres elementos son los que permiten al lector decidir cuánto peso puede soportar la puntuación automatizada.

## Declare los costes y su propio uso

Una revisión de todos los artículos de la conferencia AIED 2025 encontró un patrón de adopción de LLM sin declaración: la mayoría de los proyectos usaban LLM, y menos de un puñado informaron del consumo de recursos o de la huella de carbono. Ese artículo aporta un método de código abierto con herramientas de medición para hardware local y en la nube, además de una fórmula para estimar el gasto computacional de modelos de frontera cuyo número de parámetros no se declara. Su argumento es que no informar de estos costes es en sí mismo un problema ético. La gobernanza de datos, el consentimiento, la accesibilidad y la adecuación cultural pertenecen al mismo párrafo (ítems de RAISE; [[universal-design-for-learning]], [[accessibility|accesibilidad]]). [[equity-ethics-pedagogical-safety-research]] contiene el tratamiento más completo.

Su propio uso de la IA en el proceso de investigación necesita la misma declaración. [[prisma-llm-ai-assisted-systematic-reviews-2026|El análisis PRISMA-LLM de Zabaleta y Lin]] de 888 artículos sobre automatización de revisiones muestra cuán desigual es esta notificación. Desde 2023, el 38,0% de los artículos sobre software y productos no informaron de ninguna evaluación, frente al 9,3% de los artículos sobre LLM. La riqueza media de la notificación fue de 6,3 para los artículos sobre LLM y de 3,3 para los de software y productos. El 84,1% del uso de LLM se apoyaba en sistemas propietarios o alojados, y solo el 4,9% en pesos abiertos. Su marco separa la declaración de la implementación de la evaluación sensible a las consecuencias en cinco niveles de declaración, lo que constituye una plantilla viable para describir qué hizo una herramienta dentro de una revisión.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai y Chan (2026)]] añaden la perspectiva del autor. De 28 investigadores de posgrado, 27 usaron IA generativa para la ideación, la revisión de la literatura, la explicación, el procesamiento de datos, la programación, la [[writing-education|escritura académica]], la edición y la traducción. Calibraron el uso según los riesgos y las normas disciplinarias. Las políticas de sus instituciones abordaban la enseñanza y la evaluación más que la práctica investigadora, lo que deja la decisión sobre la notificación en manos del autor.

## Publique el nulo y compruebe cada cita

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] verificaron 30 referencias fabricadas en 14 artículos, con un recuento que en un simposio técnico pasó de 3 en 2025 a 17 en 2026, o el 2,3% de los artículos de las actas de ese año. La redacción asistida por LLM abarata la producción de una cita inventada verosímil, y por eso la comprobación tiene que ocurrir antes del envío y no después de la aceptación.

Los contrapesos de esa auditoría importan cuando se la cita. La mayoría de las referencias señaladas eran benignas: 229 eran desajustes de metadatos de ACM en los que el PDF era correcto, y 188 eran variantes bibliográficas válidas. El recuento de fabricadas es un límite inferior deliberado, y la mayoría benigna no es un error de redondeo. Verifique cada entrada que no pueda comprobar personalmente.

Informar de los hallazgos nulos y negativos es la otra mitad de una base de evidencia honesta. Bartoš et al. encontraron pruebas sólidas de resultados nulos suprimidos (todas las pruebas de Egger con p < 0,0001) y una heterogeneidad extrema (τ = 0,869), sin que ningún subgrupo por resultado, campo, nivel o papel de la IA mostrara ganancias consistentes. Tampoco encontraron diferencias entre los estudios publicados antes y después de enero de 2023, lo que debilita la afirmación de que las herramientas generativas modernas producen ganancias específicamente.

## En qué se equivocan los investigadores sobre esto

**"Un tamaño del efecto es una propiedad de la modalidad."** No hay un efecto de la IA en la educación del que informar. Todos los metaanálisis auditados menos dos definieron el tratamiento como el nombre de una herramienta, solo el 21% de las comparaciones auditadas tenían un tratamiento definido, un control y una medida válida, y la g agrupada de 0,7 quedaba por encima de la tutoría inteligente diseñada a propósito, con 0,66. Un tamaño del efecto pertenece a un diseño, una población y una ocasión de medición.

**"La media agrupada es lo que les pasará a mis estudiantes."** La media describe el conjunto de estudios, y nada en ella fija un aula concreta. El promedio ajustado por sesgo es SMD = 0,196 y su intervalo de predicción va de -1,521 a +1,908. La heterogeneidad informada se sitúa por encima del 80% en 12 de 13 metaanálisis, y ningún subgrupo del conjunto mayor mostró ganancias consistentes. Un cambio a nivel de estudiante no es identificable a partir de ninguna de las dos cifras.

**"Un resultado nulo significa que la herramienta no funciona."** Un nulo es una afirmación sobre un diseño con una precisión dada, y la ausencia de un efecto detectable en un estudio es un hecho sobre ese estudio. El SMD ajustado por sesgo de 0,196 procede de una literatura en la que todas las pruebas de Egger fueron significativas, así que la lectura defendible del corpus es un promedio pequeño e incierto. Ningún subgrupo por resultado, campo, nivel o papel de la IA del conjunto mayor mostró tampoco ganancias consistentes. El problema documentado en esta literatura es la supresión.

**"Un estudio lo resuelve."** Las tasas base dicen lo contrario. El 61% de los estudios primarios revisados tenían problemas de validez, un curso o una institución no autorizan una afirmación general, y un sistema propietario es un blanco móvil atado a una versión del modelo. Un solo estudio es un dato con un diseño adjunto.

**"Una alta concordancia con codificadores humanos significa que el modelo puntúa lo correcto."** La concordancia entre humano y LLM fue de 0,30 frente a 0,52 entre humanos, y el verificador ciego no pudo distinguir los dos conjuntos de codificación, con 51,5% frente a 48,5%. La concordancia mide la consistencia con un codificador, y la calidad es una pregunta aparte que necesita un estándar de referencia y un adjudicador.

## Lo que le van a responder

**"Los revisores quieren novedad, no detalle de método."** Las revistas van en la dirección contraria. RAISE y TEP-AIED dan a los editores un constructo que exigir, y la subsección de método de TEP-AIED es un punto de entrada de baja fricción. El detalle de método es lo que convierte un artículo no evaluable en uno citable.

**"No tenemos espacio."** Los cinco niveles de declaración son niveles de notificación, no de riesgo, así que la profundidad de la evaluación puede ser una o dos frases. La versión, los prompts y el papel caben en un párrafo corto. El coste y la gobernanza caben en una frase de limitaciones.

**"Todo el mundo lo informa así."** Las cifras dicen que la norma es el problema: el 61% de los estudios primarios revisados con problemas de validez, 12 de 13 metaanálisis por encima del 80% de heterogeneidad, el 38,0% de los artículos sobre software y productos sin evaluación.

**"Nuestra herramienta es propietaria, así que no podemos informar del modelo."** Informe de la versión, la fecha de acceso, la configuración, los prompts que aportó, el papel y las barreras de protección. Si el proveedor no lo dice, esa restricción pertenece a las limitaciones como un límite de la afirmación.

**"Informar de los nulos nos perjudicará."** Los nulos suprimidos son el mecanismo documentado detrás del promedio ajustado por sesgo de SMD = 0,196. Publicarlos es lo que mantiene legible su resultado positivo.

## Qué hacer esta semana

**1.** Lea su resumen frente a su sección de métodos y elimine toda afirmación que el método no pueda sostener. Una frase sobre el techo de la medida suele bastar.

**2.** Añada el párrafo de especificación: modelo, versión, fecha de acceso, configuración, prompts, papel y quién diseñó o revisó el resultado.

**3.** Saque la τ², el intervalo de predicción y la evaluación del sesgo de publicación del apéndice y llévelos a los resultados, o diga claramente que no los calculó.

**4.** Escriba el límite poblacional y la condición de control en la declaración del diseño, incluido cuánto tiempo pasó cada brazo.

**5.** Verifique cada referencia que no haya leído personalmente y compruebe primero el campo de autoría.

## Adónde ir después

[[research-methods-aied|Métodos de investigación en la IA en educación]] cubre las decisiones de diseño que subyacen a estas decisiones de notificación, y [[limitations-in-aied-research|Limitaciones de la investigación sobre IA en educación]] es el catálogo de modos de fallo con las cifras adjuntas. [[interpreting-and-applying-aied-research|Interpretar y aplicar la investigación sobre AIEd]] es el lado del lector del mismo problema, [[does-ai-help-students-learn|la evidencia sobre el aprendizaje duradero]] es lo que la mayoría de estas medidas intentan alcanzar, [[evaluating-ai-interventions-methods]] cubre las medidas y los diseños de comparación, y [[checking-whether-educational-ai-works]] es la versión más breve de la pregunta. Para los vacíos que esta literatura no ha cubierto, véase [[research-gaps-aied]].
