---
title: Análisis de perfiles latentes
created: "2026-09-28T21:04:13-04:00"
updated: "2026-10-02T23:55:01-04:00"
type: concept
methods: [quantitative-research, research-methods-aied]
confidence: high
translation_of: concepts/latent-profile-analysis
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **El análisis de perfiles latentes (LPA)** — un método centrado en las personas que clasifica una muestra en subgrupos no observados (perfiles) cuando cada caso se describe mediante varias variables a la vez. Es el miembro de indicadores continuos de la familia del modelado de mezclas; su pariente, el **análisis de clases latentes (LCA)**, aplica la misma lógica a los indicadores categóricos. Ambos plantean una pregunta distinta de la de los modelos [[quantitative-research|centrados en las variables]] que dominan la investigación sobre IA en la educación: no «cuánto predice X a Y en promedio», sino «cuántos tipos distintos de persona que aprende, de [[teacher-role|docente]] o de directivo se esconden dentro de ese promedio». En esta base de conocimiento, el método muestra que una misma herramienta de IA aterriza de forma muy distinta según los subgrupos: cinco perfiles de conciencia ética entre estudiantes de grado ghaneses, seis tipologías de preparación entre directivos ucranianos de la educación y cuatro perfiles de aceptación de la [[generative-ai|IA generativa]] entre futuros docentes taiwaneses.

## Preguntas para reflexionar

- Un estudio informa de que la comodidad media del estudiantado con la IA es de 3,8 sobre 5. ¿Qué podría ocultar ese promedio si un grupo es entusiasta y otro se muestra discretamente reacio?
- El LPA modela puntuaciones continuas; el LCA modela categorías. Si usted codifica las respuestas de las entrevistas como «menciona [[cognitive-offloading|dependencia excesiva]]: sí/no», ¿cuál de los dos necesita?
- Una solución de cinco perfiles informa de una entropía de 0,816; una rival de cuatro perfiles obtiene 0,929, pero describe los datos con menos riqueza. ¿Cuál publicaría?
- Los perfiles son descriptivos, no causales. Si un perfil de «escépticos reacios» muestra una facilidad de uso alta pero una intención de adopción baja, ¿qué permite sostener eso y qué no?

## Introducción

La mayor parte de la evidencia sobre IA en la educación está centrada en las variables: estima relaciones promedio, y los promedios presuponen homogeneidad. Los métodos centrados en las personas toman en cambio a la persona como unidad de análisis y preguntan cuántas configuraciones distintas de atributos existen en la muestra. El LPA pertenece a esa familia, y su rendimiento aquí es que convierte la diversidad del estudiantado de una afirmación retórica en un hallazgo medible: cuando los perfiles de conciencia ética van del 26,1 por ciento al 4,5 por ciento pese a una media muestral cómoda, la diferenciación deja de ser una preferencia de diseño.

## Qué hace el método y cuándo es la herramienta adecuada

El LPA supone que la muestra procede de una mezcla de subgrupos, cada uno con sus propias medias y varianzas en los indicadores. Quien investiga aporta los indicadores y el número de grupos; el algoritmo estima la probabilidad de pertenencia de cada caso y asigna por probabilidad más alta, y devuelve un perfil medio por grupo, un tamaño por perfil y un resumen de con cuánta claridad se separan los casos. El miembro de la familia que se use depende de los indicadores y no de la pregunta de investigación:

- **LCA: indicadores categóricos.** Becker y sus colegas convirtieron las categorías de respuesta codificadas a partir de las respuestas abiertas de 1189 estudiantes de física en variables indicadoras y retuvieron dos clases: personas usuarias pragmáticas (70 por ciento) y no usuarias escépticas (30 por ciento); como un tema no mencionado cuenta como «sin respaldo», los autores señalan inflación de ceros en el dataframe de análisis.
- **LPA: indicadores continuos**, como puntuaciones de escala y medias de constructo. Chen y sus colegas perfilaron a 128 futuros docentes taiwaneses en cinco constructos del [[technology-acceptance-model|TAM]]/UTAUT2; Acquah y sus colegas perfilaron a 509 estudiantes de grado ghaneses en tres dimensiones de conciencia ética; Schweder y sus colegas perfilaron a 2464 estudiantes en la satisfacción de necesidades [[motivation|motivacionales]].
- **El análisis de transición (de perfiles) latentes** amplía la familia en el tiempo, estimando perfiles por oleada y la probabilidad de pasar de uno a otro. Liang y sus colegas siguieron la motivación para aprender con IA de 2086 estudiantes a lo largo de un año; Wu siguió a 457 estudiantes de japonés durante tres oleadas, y el perfil desadaptativo se redujo del 26,48 al 17,74 por ciento.

El agrupamiento ordinario ([[machine-learning|k-means]] y jerárquico) persigue la misma intención centrada en las personas, pero divide los casos por distancia geométrica en lugar de estimar un modelo probabilístico. Recurra al LPA o al LCA cuando la pregunta se refiera a subgrupos: si «quien aprende» es una ficción en el nivel de agregación de su muestra y si los subgrupos difieren en forma además de en nivel. No recurra a ellos cuando necesite un efecto medio del tratamiento: una solución de cinco perfiles dentro de un [[rct|ensayo aleatorizado]] de un [[intelligent-tutoring|tutor adaptativo]] predijo diferencias en el postest (η² parcial = 0,27), pero no encontró ninguna interacción condición × perfil (ps ≥ 0,198).

## Cómo lo utiliza el corpus

Se repiten tres usos.

- **Establecer la heterogeneidad antes de diseñar para ella.** La encuesta de Kremen y sus colegas a 395 directivos ucranianos de la educación usó un LCA centrado en las personas para mostrar que «el directivo» es una ficción: seis tipologías van desde la limitada por competencias (25,6 por ciento, dispuesta pero sin habilidades) hasta los escépticos sin barreras (la preparación más alta, pero con un 74 por ciento de desconfianza hacia la IA), y los autores las leen como un mandato de formación diferenciada.
- **La alineación entre sistemas como comprobación de estabilidad.** [[teachers-ai-belief-profiles-talis-2024-2026|Fang y Jin (2026)]] retuvieron cuatro perfiles de creencias a partir de 40.680 docentes de 49 sistemas educativos (de Indiferente 6,13% a Respaldó mesurado 56,29%), y cambiar la referencia de alineación dejó la concordancia de clasificación en 99,62% —mientras que la utilidad ordenó los perfiles de forma idéntica en los 49 sistemas y el riesgo no lo hizo.
- **Recuperar subgrupos que un agregado oculta.** Acquah y sus colegas retuvieron cinco perfiles de conciencia ética, desde la muy alta integral (26,1 por ciento) hasta la conciencia ética baja (4,5 por ciento, beneficencia 2,06), un abanico que va de algo más de una cuarta parte de la muestra a menos de una vigésima parte. Chen y sus colegas encontraron que los escépticos reacios declaraban una facilidad de uso percibida alta, pero una intención conductual muy baja: la demostración más clara del corpus de que la paradoja entre facilidad de uso e intención es invisible para un modelo de nivel medio.
- **Perfilar la calibración en lugar del nivel.** El estudio sobre la alfabetización en IA del profesorado aplicó el LPA a la concordancia entre las [[self-report-measures|autodeclaraciones]] y las medidas objetivas, y obtuvo seis perfiles: sobreestimación, subestimación, alineación y un grupo bajo/bajo concentrado entre el profesorado sin experiencia previa en [[ai-literacy|alfabetización en IA]]. Aquí los perfiles describen un patrón entre instrumentos, no una banda de puntuación.

Los perfiles sirven entonces como variable independiente: la disciplina moldeó la pertenencia entre futuros docentes (V de Cramér = 0,532, con el estudiantado de STEM concentrado en los pioneros tecnológicos) y la pertenencia predijo más tarde la [[self-efficacy|autoeficacia]], el agotamiento y la [[anxiety-and-stress|ansiedad ante la IA]] en otros puntos del corpus.

## Elegir el número de perfiles

Ninguna estadística por sí sola selecciona la solución; el corpus trata la retención como un juicio que se hace a partir de varios criterios a la vez.

- **Criterios de información (BIC, AIC).** Un valor más bajo suele ser mejor, pero un descenso monotónico señala un problema y no un ganador. En el estudio ucraniano sobre directivos, el BIC cayó de forma monotónica en el rango de dos a seis clases sin un mínimo claro, y los autores califican su solución de seis clases de exploratoria sobre esa evidencia.
- **Entropía.** Un resumen de la certeza de clasificación; más cerca de 1 significa una asignación más limpia. Chen y sus colegas informan de 0,985 para cuatro perfiles; Acquah y sus colegas informan de 0,816 para cinco perfiles frente a 0,929 para cuatro, y ellos mismos sugieren consolidar para obtener una agrupación más estable.
- **[[explainable-ai|Interpretabilidad]] y tamaño de los perfiles.** El estudio de perfilado de la confianza en la IA mantuvo tres conglomerados aunque el índice de Calinski–Harabasz prefería dos, porque tres eran interpretables, y señala que un coeficiente de silueta de 0,288 apunta a una separación débil o limítrofe. Chen y sus colegas advierten de que su perfil más pequeño (14,06 por ciento de 128 casos) puede ser inestable, y el perfil más pequeño del estudio ghanés contiene solo 23 estudiantes, que sus autores proponen fusionar.
- **Estabilidad bajo remuestreo.** La estabilidad por bootstrap es la comprobación honesta de si los perfiles reaparecerían en una nueva muestra: el índice Rand ajustado medio fue de 0,385 para la solución ucraniana de seis clases, pero de 0,989 a lo largo de 100 inicializaciones aleatorias en el estudio sobre la confianza en la IA: el mismo diseño nominal, un peso probatorio muy distinto.
- **Las pruebas de razón de verosimilitud por bootstrap (BLRT)** y la prueba de Lo–Mendell–Rubin son compañeras habituales del BIC y la entropía en la literatura más amplia sobre modelado de mezclas, pero los estudios de perfiles de esta base de conocimiento no las informan. Cuando una página informa solo de BIC y entropía, trate el número de clases como provisional.

- **La comprobación de razón de verosimilitud que este corpus por lo demás omite.** [[ai-attitude-latent-profiles-career-development-2026|Song et al. (2026)]] retuvieron cuatro perfiles (entropía 0,824) de 379 estudiantes de empresa e informaron de la decisión de Lo–Mendell–Rubin: significativa en cuatro (p = 0,035) y no significativa en cinco (p = 0,376).
- **Retención defendida con la solución rival y una prueba de razón de verosimilitud.** [[suria-martinez-academic-self-efficacy-motor-disabilities-2026|Suriá-Martínez et al. (2026)]] informan de que una solución de cuatro perfiles se ajustaba ligeramente mejor a los 102 estudiantes, pero no mejoraba de forma significativa y dejaba la clase más pequeña en 12,7 por ciento, así que retienen tres perfiles (entropía .89) en lugar del modelo que mejor ajustaba numéricamente. Informar de la solución perdedora y de lo que la descalificó es lo que convierte el número de clases retenido en un juicio que quien lee puede comprobar, y la medida de uso de IA de 12 ítems construida a propósito para el estudio —validada en una muestra separada de 85 que los autores califican de preliminar— marca el otro límite de su evidencia.

Informe de las comparaciones, no solo del ganador: una página que dice «retuvimos cinco perfiles» sin la solución rival, los valores de entropía y el tamaño del perfil más pequeño no da a quien lee ninguna forma de juzgar la elección.

## Leer y comunicar los resultados, y dónde se equivocan

Lea un perfil por su forma además de por su nivel. En el estudio ghanés los perfiles difieren en la configuración de autonomía, beneficencia y justicia; el mayor combina un respaldo fuerte de la autonomía con una beneficencia más baja, de modo que dos perfiles pueden situarse en niveles globales similares y aun así exigir una enseñanza distinta.

Cuatro cautelas, cada una formulada en las páginas de origen:

1. **Los perfiles son descriptivos.** Dicen quién está en la muestra, no por qué, y los diseños transversales no pueden mostrar estabilidad ni movimiento (los estudios sobre futuros docentes, Ghana y física). Solo los análisis longitudinales —un estudio de transición de un año y las tres oleadas de Wu— sostienen afirmaciones sobre el movimiento, e incluso ahí el movimiento es asociación, no efecto de una intervención.
2. **La pertenencia se estima, no se observa.** Los casos se asignan por la probabilidad posterior más alta, así que las personas cercanas a una frontera se clasifican con incertidumbre real; una entropía baja y valores de silueta débiles significan que las fronteras deben leerse como difusas.
3. **La elección de indicadores define la respuesta.** Los perfiles dependen por completo de qué variables entran en el modelo, así que la heterogeneidad que el estudio nunca mide es heterogeneidad que no puede encontrar: el estudio ghanés solo recogió el género entre los antecedentes y por tanto no puede decir qué predice la pertenencia.
4. **La heterogeneidad detectada no es causalidad detectada.** El nulo perfil × condición del ensayo del tutor es el recordatorio: perfilar un resultado dentro de un ensayo no es una prueba de moderación del tratamiento.

## Implicaciones para la IA en la educación

1. **Mida la heterogeneidad antes de recomendar una intervención.** Los perfiles de este corpus sitúan una y otra vez a una cuarta parte o más de una muestra por debajo de la media titular; diseñe para los perfiles que existen y no para la media.
2. **Prefiera métodos centrados en las personas cuando el producto sea la diferenciación.** Los estudios sobre futuros docentes y sobre directivos presentan ambos ese giro como su aportación metodológica, porque los predictores promedio no pueden revelar las configuraciones que justifican un apoyo diferenciado.
3. **Informe por completo de la evidencia de retención.** Publique las comparaciones de BIC/AIC, la entropía, los tamaños de los perfiles y una comprobación de estabilidad, y diga con claridad cuándo un número de clases es exploratorio.
4. **Trate los perfiles como diagnósticos, no como etiquetas.** Un perfil es un constructo de investigación con una frontera estimada, así que una herramienta que asigna a las personas a categorías nombradas arrastra la cautela de cualquier instrumento de [[educational-measurement|medición]], y los [[differential-effects-across-learner-groups|efectos diferenciales entre grupos de estudiantes]] merecen el escrutinio de cualquier análisis de subgrupos.

## Conceptos conectados

- [[quantitative-research]]
- [[mixed-methods-research]]
- [[research-methods-aied]]
- [[machine-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[differential-effects-across-learner-groups]]
- [[technology-acceptance-model]]

## Artículos conectados
- [[ai-attitude-latent-profiles-career-development-2026]] — Evidencia de retención de Lo–Mendell–Rubin para cuatro perfiles de actitud hacia la IA en 379 estudiantes de empresa

- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Análisis de transición de perfiles latentes en tres oleadas sobre la adaptación psicológica
- [[liang-ai-learning-motivation-sdt-2026]] — Análisis de transición latente de tres perfiles de motivación a lo largo de un año
- [[trust-in-ai-psychological-profiles-ml-2026]] — Perfiles de k-means; desacuerdo entre silueta y Calinski–Harabasz; ARI 0,989
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Agrupamiento jerárquico y k-means en cuatro personas de adopción de IA generativa

- [[teachers-ai-belief-profiles-talis-2024-2026]] — Cuatro perfiles de creencias docentes sobre la IA a partir de 40.680 docentes de 49 sistemas, con estabilidad de alineación
