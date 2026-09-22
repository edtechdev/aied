---
title: "¿Cuáles son las mejores prácticas para informar e interpretar la investigación sobre IA en educación?"
created: "2026-09-22T18:29:07-04:00"
updated: "2026-09-22T18:29:07-04:00"
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
translation_of: faqs/reporting-interpreting-aied-research
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

# ¿Cuáles son las mejores prácticas para informar e interpretar la investigación sobre IA en educación?

Usted está redactando un estudio sobre IA en educación cuya afirmación ya va por delante de su diseño, o está revisando uno y decidiendo si la cifra del titular significa algo. En cualquiera de los dos casos, las mismas seis omisiones deciden el resultado: qué sistema de IA se usó realmente, para qué estaba configurado, qué papel pedagógico desempeñó, si hubo personas que diseñaran o revisaran su resultado, qué capturó de verdad la medida de resultado y qué hicieron los autores con el sesgo, el coste y las limitaciones. Quien las omite envía un estudio que no se puede evaluar; quien revisa y no las busca no puede distinguir una intervención diseñada de una demostración reciclada de una herramienta. «No evaluable», y no «respaldado» ni «refutado», es el veredicto honesto cuando faltan.

Lo que está en juego no es hipotético. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] auditó 14 metaanálisis revisados por pares que afirmaban que la IA mejora la educación y encontró que *ninguno* ofrecía una base válida para las afirmaciones que presentaba. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš y sus colegas (2026)]] agruparon 1,840 tamaños del efecto de 67 metaanálisis y encontraron que, una vez modelado el sesgo de publicación, el efecto medio cae a aproximadamente **un tercio** de la mediana publicada (SMD = 0.196 frente a 0.67). [[citation-errors-hallucinations-computing-education-2026|Denny y sus colegas (2026)]] verificaron **30 referencias fabricadas en 14 artículos de educación en informática**, todos publicados en 2025 o 2026, un defecto que llega a los lectores precisamente porque quienes revisan no pueden verificar cada entrada de una lista de referencias. La disciplina al informar decide si la base de evidencia del área es utilizable. Para las decisiones de diseño que hay debajo, véase [[research-methods-aied|Métodos de investigación en IA en educación]]; para el catálogo de modos de fallo, [[limitations-in-aied-research|Limitaciones en la investigación sobre AIEd]]. Para el lado del lector, es decir, qué hace un profesional con un artículo una vez que existe, véase [[interpreting-and-applying-aied-research|Interpretar y aplicar la investigación sobre AIEd]].

## La versión breve

Seis movimientos deciden si su afirmación sobrevive a la revisión:

1. **Describa el sistema de IA como un tratamiento, no como un proveedor.** Modelo, versión, configuración, indicaciones, papel y si fueron personas quienes diseñaron o revisaron el resultado.
2. **Declare la justificación pedagógica y la comparación activa.** El nombre de un producto no es un método; la enseñanza habitual no es un control justo.
3. **Haga que la medida coincida con la afirmación.** Qué captura el instrumento, su validación para esta población y si el resultado se midió con retraso y sin ayuda.
4. **Valide cada juicio automatizado.** Nombre el patrón de referencia, el objetivo de calibración y quién resolvió los desacuerdos.
5. **Informe de la incertidumbre del análisis, no solo de su estimación puntual**: efectos dependientes, τ², intervalos de predicción, tamaños de subgrupo, evaluación del sesgo de publicación.
6. **Informe de los contrapesos**: procedimiento de ética y gobernanza, coste computacional y ambiental, su propio uso de IA, resultados nulos y solo las citas que haya verificado.

## Decida qué va a decir sobre el sistema de IA, y escríbalo de modo que alguien pueda reconstruirlo

Esta es la comprobación que suspende la mayoría de los manuscritos. El marco RAISE (*Reporting AI Studies in Education*, Allison 2026) es una lista de 30 elementos repartidos en diez dominios temáticos, y su afirmación diagnóstica es concreta y no retórica: los manuscritos suelen omitir qué modelo se usó (GPT-4, Claude o un algoritmo propio), cómo se configuró (indicaciones, parámetros de ajuste fino), qué papel desempeñó (generador de retroalimentación, coautor, tutor, evaluador) y si hubo personas que diseñaran o revisaran sus resultados. Eso deja a quienes revisan con cuatro preguntas sin respuesta: «¿Qué estaba haciendo exactamente la IA?», «¿Era necesaria?», «¿Es replicable?» y «¿Son creíbles las afirmaciones sobre el aprendizaje?».

Recorre desde la justificación educativa hasta la especificación a nivel de API, la interacción entre quien aprende y la IA, la accesibilidad y el encaje cultural, los participantes y el contexto, la participación humana, el diseño, la ética, la transparencia y la reproducibilidad, y por último las limitaciones. Su **matriz de ética y riesgo** complementaria cubre riesgos para la [[agency|agencia]] del estudiantado, la [[equity-in-ai-education|equidad]], la [[governance|gobernanza]] de datos y la transparencia algorítmica. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah y Gašević (2026)]] ofrecen una alternativa simplificada, TEP-AIED, que pliega transparencia, ética y pedagogía en una única estructura interdependiente, aporta una tabla de directrices mapeada a siete secciones de un artículo y pide a los autores que añadan un subapartado de método titulado «Consideraciones de transparencia, ética y pedagogía», porque, según su argumento, RAISE es exhaustivo pero demasiado granular para el uso empírico cotidiano. La declaración de uso queda bajo [[ai-use-disclosure|la declaración del uso de IA]] y es lo que hace verificables las afirmaciones sobre [[privacy|privacidad]] y [[ethics|ética]].

## Decida si su tratamiento es un método o un producto

La justificación educativa es el primer dominio de RAISE porque la IA no es una herramienta neutra: su valor depende de la alineación entre el problema de aprendizaje, una justificación teórica y el mapeo de los objetivos a las medidas de resultado. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] encontró que todos los metaanálisis auditados salvo dos definían el tratamiento como una herramienta (ChatGPT, IA generativa, «IA») y que el nombre de un producto no es una [[pedagogy|pedagogía]]; tratar la exposición a ChatGPT como una única intervención común es comparable a hacer un metaanálisis de los efectos del «papel». [[weidlich-chatgpt-effect-search-cause-2025|Weidlich y sus colegas (2025)]] defienden lo mismo para los estudios primarios: al auditar un subconjunto de las comparaciones que sustentan un metaanálisis destacado, encontraron que solo el **21% tenía un tratamiento bien definido, un grupo de control y una medida de aprendizaje válida**, y que el tamaño del efecto informado (g = 0.7) superaba el de los [[intelligent-tutoring|sistemas de tutoría inteligente]] diseñados a propósito (0.66), una señal de alarma de que el «tratamiento» era una salsa secreta heterogénea y no un método con nombre.

La prueba: ¿podría un lector competente reconstruir su intervención solo con la sección de método y obtener lo mismo?

## Decida qué mide su instrumento y qué puede decir por tanto su afirmación

En la auditoría de evidencia de O'Neill sobre 46 estudios primarios seleccionados al azar, **28 (61%) presentaban problemas de validez**, y el desajuste de la variable dependiente fue el más común (n = 15), seguido del desajuste de la variable independiente (n = 11), problemas de diseño experimental (n = 7), problemas de extracción de datos (n = 6), ausencia de grupo de control (n = 6) y asignación no aleatoria de los grupos (n = 6). Los resultados multidimensionales se agrupaban habitualmente como si fueran intercambiables: puntuaciones de pruebas, calidad de los deberes, [[motivation|motivación]], [[self-efficacy|autoeficacia]], actitudes y [[student-engagement|implicación]] se fundían en una única cifra de «rendimiento académico».

Dos hábitos de información evitan esto. Declare qué constructo mide el instrumento y que se validó para esa población: véase [[self-report-measures|medidas de autoinforme]] para saber dónde las medidas basadas en la percepción se separan de la conducta, y [[assessment-validity|validez de la evaluación]] sobre la validez de constructo. Después informe de un resultado que no dependa de la creencia del estudiante sobre la ayuda, porque el rendimiento inmediato en la tarea con asistencia no es una [[learning-gains|ganancia de aprendizaje]]: [[verification-quality-reliance-calibration-genai-2026|una revisión breve de 2026 de 493 registros y 14 estudios prioritarios]] no encontró ninguno que midiera el éxito en la verificación y la decisión de dependencia posterior junto a un estándar de calidad del resultado evaluado de forma independiente, y pocos miraban más allá del rendimiento inmediato hacia la retención o la transferencia diferidas. [[does-ai-help-students-learn|La evidencia sobre el aprendizaje duradero]] sigue siendo mixta, y la [[cognitive-offloading|delegación cognitiva]] es el mecanismo que más plausiblemente separa ambos casos.

## Decida cómo se validaron sus juicios automatizados

La [[ai-ed-evaluation|evaluación de AIEd]] delega cada vez más la puntuación en modelos, lo que convierte el procedimiento de validación en parte del resultado y no en un apéndice. El relato de Khan Academy sobre sus métricas de [[intelligent-tutoring|tutoría con IA]] informa de que la implicación cognitiva se puntúa con un juez [[llm|LLM]] calibrado frente a expertos pedagógicos humanos con un F1 de 0.83, y que los movimientos de las métricas provinieron de más de 40 experimentos en vivo en cinco meses y no de una evaluación fuera de línea ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi y sus colegas 2026]]). [[machines-misread-pedagogical-quality|Tseng y sus colegas (2026)]] muestran que el desacuerdo entre personas y máquinas sobre la calidad de las [[formative-assessment|preguntas de evaluación formativa]] es sistemático y no aleatorio, y que la operacionalización de la rúbrica importa más que las indicaciones que empiezan por la justificación.

La coincidencia con codificadores humanos no es calidad, e informar de ella como si lo fuera es un blanco para quien revisa. [[agreement-not-quality-llm-coding-verification|Liu y sus colegas (2026)]] hicieron que un experto independiente juzgara 855 conjuntos de códigos por pares sin conocer su origen, y encontraron que la coincidencia entre persona y LLM (Jaccard medio 0.30) era muy inferior a la coincidencia entre personas (0.52), mientras que el verificador ciego prefería la codificación humana y la automática en proporciones indistinguibles (51.5% frente a 48.5%, p = 0.537). Informe del objetivo de calibración, del patrón de referencia y de quién resolvió el desacuerdo.

## Decida si la comparación es justa y hasta dónde llega su afirmación

La justicia y el alcance fallan del mismo modo: un efecto grande que significa menos de lo que parece. 11 de los 14 metaanálisis auditados no fijaban ningún límite de población, de modo que «estudiantes» abarcaba desde niños hasta residentes de medicina; un solo curso, institución, disciplina o país no autoriza una afirmación general, y los resultados de una herramienta rara vez se trasladan a otra. Los efectos de novedad, el tiempo adicional de tarea y una condición de comparación que recibió enseñanza habitual en lugar de un control activo son las explicaciones habituales de un efecto grande, así que informe de qué hizo realmente el control, cuánto tiempo dedicó cada grupo y cuán novedosa era la herramienta. Declare también el límite de población, porque los efectos difieren entre grupos de estudiantes y un límite no declarado es lo que permite que una única cifra agrupada represente a todos (véase [[differential-effects-across-learner-groups|Efectos diferenciales entre grupos de estudiantes]]). Trate la herramienta también como un blanco móvil: los sistemas propietarios cambian sin avisar, así que un hallazgo queda ligado a una versión del modelo, y el [[benchmark|referente de evaluación]] que entusiasmó en una versión puede no mantenerse en la siguiente.

## Decida qué puede sostener su análisis, e informe de su incertidumbre y no solo de su titular

Para las síntesis, informe del tratamiento de los efectos dependientes, la varianza entre estudios, los intervalos de predicción y la evaluación del sesgo de publicación, y no solo de I². O'Neill encontró que la heterogeneidad informada era grave allí donde se daba (I² de 77.2% a 94.4% en 13 metaanálisis, 12 de ellos por encima del 80%) y que nunca se resolvía (ningún análisis de moderadores alcanzaba el tamaño mínimo de subgrupo de diez estudios), que 12 metaanálisis trataban los tamaños del efecto dependientes de un mismo estudio como independientes, inflando la evidencia aparente, y que solo cuatro informaban de la varianza entre estudios (τ²) y solo dos de un intervalo de predicción, ambos de los cuales incluían el cero. El sesgo de publicación no se evaluó válidamente en ningún caso.

Como I² depende de la precisión, una cifra de heterogeneidad tiene que viajar con su modelo: [[limitations-in-aied-research|Limitaciones en la investigación sobre AIEd]] documenta una síntesis cuya heterogeneidad es I² = 82.98% con un modelo de efectos fijos y 15.75% con efectos aleatorios, de modo que quien solo recibe el primer número no puede saber cuán inconsistente es el corpus. Informe de τ² y de un intervalo de predicción junto a ella; véase [[meta-analysis-systematic-review|metaanálisis y revisión sistemática]] para las convenciones del lado de la revisión, y descuente el titular en consecuencia: el promedio ajustado por sesgo de Bartoš y sus colegas fue SMD = 0.196 con un intervalo de predicción de −1.521 a +1.908, que abarca desde un daño sustancial hasta un beneficio sustancial para un estudio nuevo hipotético.

## Decida qué declara sobre ética, coste y gobernanza, y sobre su propio uso de IA

Una revisión de todos los artículos de la conferencia AIED 2025 encontró un patrón de «adopción de LLM sin declaración»: la mayoría de los proyectos usaban LLM, pero menos de un puñado informaba del consumo de recursos o de la huella de carbono. Ese artículo aporta un método de código abierto con herramientas de medición para hardware local y en la nube, además de una fórmula para estimar el gasto computacional de modelos de frontera cuyo número de parámetros no se divulga, y sostiene que no informar de estos costes es en sí mismo una preocupación ética. Añada gobernanza de datos, consentimiento y accesibilidad y encaje cultural (elementos de RAISE; [[universal-design-for-learning|diseño universal para el aprendizaje]], [[accessibility|accesibilidad]]); véase [[equity-ethics-pedagogical-safety-research]] para un tratamiento más completo de estas obligaciones.

Su propio uso de la IA en el proceso de investigación necesita la misma declaración. [[prisma-llm-ai-assisted-systematic-reviews-2026|El análisis PRISMA-LLM de Zabaleta y Lin]] de 888 artículos sobre automatización de revisiones muestra cuán desigual es esta información: desde 2023, el **38.0% de los artículos sobre software y productos no informaban de ninguna evaluación** (frente al 9.3% de los artículos sobre LLM), la riqueza media de la información era de 6.3 para los artículos sobre LLM frente a 3.3 para los de software y productos, y el 84.1% del uso de LLM se apoyaba en sistemas propietarios o alojados, con solo un 4.9% de pesos abiertos. Su marco separa la declaración de la implementación de la evaluación sensible a las consecuencias en cinco niveles de declaración, una plantilla viable para describir qué hizo una herramienta en una revisión. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai y Chan (2026)]] añaden el panorama del lado de quien escribe: 27 de 28 investigadores de posgrado usaban IA generativa para idear, revisar literatura, explicar, procesar datos, programar, [[writing-education|escritura académica]], editar y traducir, calibrando su uso según lo que estaba en juego y las normas disciplinares, y señalando además que las políticas institucionales abordan la docencia y la evaluación y no la práctica investigadora.

## Decida qué hacer con los resultados nulos y con las citas

Denny y sus colegas verificaron 30 referencias fabricadas en 14 artículos, con el recuento verificado en un simposio técnico subiendo de 3 en 2025 a 17 en 2026 (el 2.3% de los artículos de las actas de ese año), y la redacción asistida por LLM abarata producir una cita inventada verosímil. Sus contrapesos importan cuando se cita esa auditoría: la mayoría de las referencias señaladas eran benignas (229 eran desajustes de metadatos ACM en los que el PDF era correcto y 188 eran variantes bibliográficas válidas), así que el recuento de fabricaciones es un límite inferior deliberado y la mayoría benigna no es un error de redondeo. Verifique cada entrada que no pueda comprobar personalmente.

Informar de resultados nulos y negativos es la otra cara de la misma moneda. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš y sus colegas (2026)]] encontraron pruebas sólidas de resultados nulos suprimidos (todas las pruebas de Egger con p < .0001) y una heterogeneidad extrema (τ = 0.869), sin que ningún subgrupo por resultado, campo, nivel o papel de la IA mostrara ganancias consistentes. Tampoco encontraron diferencia entre estudios publicados antes y después de enero de 2023, lo que debilita la afirmación de que las herramientas generativas modernas producen ganancias de forma específica.

## Las debilidades documentadas del área, en sus propias cifras

Las tasas base con las que debería sopesarse cualquier afirmación:

- **Validez:** 28 de 46 estudios primarios verificados (61%) presentaban problemas de validez; solo el 21% de las comparaciones auditadas tenía un tratamiento bien definido, un grupo de control y una medida válida.
- **Heterogeneidad sin resolver:** I² de 77.2% a 94.4% en 13 metaanálisis, 12 por encima del 80%, ningún análisis de moderadores que alcanzara el mínimo de diez estudios, efectos dependientes tratados como independientes en 12, y solo cuatro síntesis que daban τ² frente a solo dos que daban un intervalo de predicción.
- **Sesgo de publicación:** sin evaluar en los 14 metaanálisis auditados; todas las pruebas de Egger del conjunto más amplio fueron significativas (p < .0001), con τ = 0.869.
- **Referencias:** 30 fabricaciones en 14 artículos, 17 en un simposio de 2026, el 2.3% de las actas de ese año.

## Las objeciones que escuchará

**«Quienes revisan quieren novedad, no detalle de método.»** Las revistas van en la dirección contraria: RAISE y TEP-AIED dan a los editores un constructo que exigir, y el subapartado de método de TEP-AIED es un punto de entrada de baja fricción. El detalle de método es lo que convierte un artículo no evaluable en uno citable.

**«No tenemos espacio.»** Los cinco niveles de declaración son niveles de información y no niveles de riesgo, así que la profundidad de evaluación de una cadena puede caber en una o dos frases. Versión, indicaciones y papel caben en un párrafo breve; coste y gobernanza caben en una frase de limitaciones.

**«Todo el mundo lo informa así.»** Eso es el hallazgo, no una defensa: 61% de estudios primarios verificados con problemas de validez, 12 de 13 metaanálisis por encima del 80% de heterogeneidad, 38.0% de artículos de software y productos sin ninguna evaluación. La norma es el defecto.

**«Nuestra herramienta es propietaria, así que no podemos informar del modelo.»** Informe de la versión, la fecha de acceso, la configuración, las indicaciones que aportó, el papel y las salvaguardas. Si el proveedor no lo dice, esa restricción pertenece a las limitaciones como cota de la afirmación.

**«Informar de resultados nulos nos perjudicará.»** Los nulos suprimidos son el mecanismo documentado detrás del promedio ajustado por sesgo SMD = 0.196; publicarlos es lo que mantiene legible su resultado positivo.

## Lista de comprobación antes de enviar

- **Informe de:** el modelo, la versión, la configuración y las indicaciones, y el papel de la IA en el diseño. **Compruebe:** ¿podría reconstruir la intervención solo con la sección de método?
- **Informe de:** la justificación pedagógica y la condición de comparación activa. **Compruebe:** ¿es el tratamiento un método con nombre y no el nombre de un producto?
- **Informe de:** qué captura cada medida, su validación para esta población y el resultado diferido o sin ayuda. **Compruebe:** ¿coincide la afirmación del titular con la variable dependiente?
- **Informe de:** quién resolvió los juicios automatizados, frente a qué patrón de referencia y con qué coincidencia. **Compruebe:** ¿se está usando la precisión o la coincidencia como si fuera calidad?
- **Informe de:** el tratamiento de los efectos dependientes, τ², los intervalos de predicción, los tamaños de subgrupo de los moderadores y la evaluación del sesgo de publicación. **Compruebe:** ¿se cita la heterogeneidad con su modelo y su precisión?
- **Informe de:** la participación humana, la gobernanza de datos, el consentimiento, la accesibilidad y el encaje cultural, además del coste computacional y ambiental. **Compruebe:** ¿se respaldan las afirmaciones éticas con un procedimiento descrito y no con principios afirmados?
- **Informe de:** el uso de IA dentro del proceso de investigación, en las cinco capas de declaración. **Compruebe:** ¿se evaluó en absoluto la cadena de revisión o de análisis?
- **Informe de:** resultados nulos, negativos y desconfirmatorios junto a los positivos. **Compruebe:** ¿se descuenta el tamaño del efecto por el sesgo de publicación probable?

## Qué elevaría realmente el estándar

Los remedios de esta literatura son institucionales y no individuales. O'Neill recomienda transparencia de datos obligatoria para los metaanálisis (tablas completas de tamaños del efecto, estructuras de dependencia, τ² e intervalos de predicción), además de una labor más firme de revisión y edición y una práctica de retractación que funcione, con el argumento de que estos fallos son producto de una revisión fallida y no errores aislados. PRISMA-LLM propone cinco niveles de declaración como niveles de información y no de riesgo, de modo que la profundidad de evaluación de una cadena de revisión se declare con claridad; RAISE y TEP-AIED dan a las revistas un constructo que exigir en los manuscritos. Para terreno relacionado, véase [[research-gaps-aied|lagunas notables en la literatura de investigación]], [[limitations-in-aied-research|Limitaciones en la investigación sobre AIEd]] y [[evaluating-ai-interventions-methods|medidas y métodos para evaluar intervenciones relacionadas con la IA]]. Un remedio de bajo coste está en manos de quien escribe: cada página de artículo de esta base de conocimiento empareja ahora un estudio con un apartado **Qué significa esto para la práctica** y normalmente un apartado **Limitaciones**, así que redactar el artículo de modo que ambos puedan completarse con honestidad, la acción que un profesional podría tomar y la restricción que la limita, es un hábito de información tanto como de escritura (véase [[interpreting-and-applying-aied-research|Interpretar y aplicar la investigación sobre AIEd]]).
