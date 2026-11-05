---
title: Avatares de IA e instructores sintéticos
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [human-ai-collaboration, teacher-role, academic-integrity]
pedagogy: [professional-training, experiential-learning, situated-learning, video-education]
technology: [generative-ai, llm, pedagogical-agent, simulation, simulating-students, virtual-and-augmented-reality, conversational-ai]
assessment: [automated-assessment, assessment-validity, feedback]
ethics: [trust, ai-use-disclosure, bias-mitigation, inclusive-learning]
discipline: [medical education]
level: [higher ed, teacher education]
audience: [instructors, instructional designers]
confidence: medium
contributors: [editor]
translation_of: concepts/ai-avatars-and-synthetic-instructors
source_updated: "2026-11-04T17:45:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Avatares de IA e instructores sintéticos** — sistemas de [[generative-ai|IA]] con apariencia humana que ocupan un rol docente, ya sea como docente grabado, tutor con voz, [[pedagogical-agent|agente pedagógico]], paciente o estudiante simulado, compañero de juego de rol o examinador. La categoría se define por un rostro y una voz que sustituyen a una persona, no por una tecnología única. Esa superficie es lo que hace atractivos estos sistemas, y es también donde se concentran sus problemas distintivos: la [[trust|confianza]] se adhiere a las señales de identidad, el realismo no acompaña a la eficacia, y quien aprende puede no saber que se está simulando a una persona.

## Preguntas para reflexionar

- Si un [[video-education|vídeo de clase]] lo presenta un rostro que después descubre que se sintetizó a partir de la imagen de su docente, ¿qué cambia para usted: el contenido, su idea de quién le enseñó, o nada en absoluto?
- Un [[simulating-students|estudiante simulado]] fluido, cooperativo y que nunca descarrila la clase es fácil de tratar. ¿Para qué le ha preparado ese ensayo y qué ha dejado fuera en silencio?
- ¿Querría que le dijeran antes de un encuentro que el paciente fue generado? ¿Cómo cambiaría lo que extrae de la sesión el descubrirlo después?
- ¿Cuál es el riesgo mayor para la integridad: que alguien que aprende engañe a un examinador de IA, o que un examinador de IA malinterprete a quien aprende?
- El [[collaborative-learning|juego de rol entre pares]] es gratuito, familiar y socialmente exigente. ¿Qué tendría que aportar un avatar para que usted lo eligiera en su lugar?

## Introducción

Un avatar de IA es una representación humana renderizada o animada e impulsada por un modelo; un instructor sintético es esa representación situada en un rol docente. Ninguno de los dos es lo mismo que un agente. [[theelen-classroom-simulations-four-layer-framework-2026|Theelen et al. (2026)]] separan la representación de la [[agency|agencia]]: el avatar es lo que ve un participante, mientras que el actor que hay detrás puede ser un par, un especialista en simulación, un guion, un sistema basado en reglas o un [[llm|LLM]]. Dos estudiantes virtuales idénticos pueden ofrecer, por tanto, encuentros por completo distintos.

Esta página se organiza por rol: qué rol ocupa el ser humano sintético, qué evidencia existe para él y qué hace esa superficie a la relación de quien aprende con el sistema. La literatura abajo abarca vídeo de clase, tutoría, simulación clínica, ensayo docente, juego de rol y evaluación.

## Seis roles que puede ocupar un ser humano sintético

**Docente en pantalla.** Un presentador clonado imparte vídeo grabado. En un curso universitario en línea con muchos estudiantes, [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] generaron tres variantes de cada tema adaptadas al dominio con un avatar de HeyGen clonado del docente, las revisaron antes de publicarlas y las subieron al LMS.

**Tutor o agente pedagógico.** [[elevate-genai-virtual-tutors|ELEVATE]] construye un tutor con avatar 3D que funciona enteramente en hardware local, con una capa orientada al profesorado que controla persona, voz, postura y ritmo. [[aclime-pedagogical-agents-extended-reality-2026|ACLIME]] describe el mismo rol en medios inmersivos: un agente que guía, pregunta y explica.

**Paciente o cliente simulado.** [[sophie-clinical-communication-ai-assessment-2026|SOPHIE 2.0]] ofrece 24 escenarios clínicos en el navegador con un paciente con avatar parlante. [[ai-psychotherapy-training-avatars|Riachi et al. (2026)]] aplican el patrón a la Terapia de Aceptación y Compromiso, puntuando la fidelidad de los aprendices turno a turno.

**Estudiante simulado.** [[hauk-student-avatars-dialogue-teacher-education-2026|Hauk et al. (2026)]] dieron a 21 [[teacher-education|futuros docentes]] una conversación de voz de diez minutos con «Marco», un estudiante de secundaria básica que hace un comentario despectivo sobre las personas inmigrantes.

**Compañero de juego de rol.** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] hace que los niños manejen un avatar robótico para ensayar la intervención como testigos. ACLIME llama a esto el segundo modo de interacción: un agente que sostiene un rol definido para el diálogo [[situated-learning|situado]].

**Interlocutor de evaluación.** El juez de SOPHIE puntúa transcripciones con una rúbrica de comunicación. [[voice-based-ai-feedback-interviews-higher-ed-2026|Tamme et al. (2026)]] proponen un agente de voz que entrevista al estudiantado sobre un curso en lugar de administrar una [[self-report-measures|encuesta escrita]].

## Qué respalda la evidencia, rol por rol

La evidencia es más sólida donde el ser humano sintético es un *compañero de práctica* y más débil donde es un *sustituto del aprendizaje*.

Para la instrucción grabada, el resultado medido es la preferencia y no el logro. En dos ediciones y 493 respondientes, los vídeos personalizados generados por IA superaron a los grabados por personas sin personalizar (rango medio 2,26 frente a 2,69, p < .001). La condición mejor valorada, el vídeo personalizado grabado por una persona, nunca existió, así que esa clasificación mezcla experiencia con imaginación. Los autores informan de que los resultados objetivos de aprendizaje están por venir.([[personalized-ai-generated-videos-preference-2026]])

Para la tutoría, la evidencia es de viabilidad de ingeniería. ELEVATE alcanzó unos cinco o seis segundos hasta el primer audio en hardware de consumo mediante transmisión de voz, lo que enmascaró la mayor parte de la latencia percibida. No se realizó ningún estudio controlado de usuarios, así que los efectos sobre el aprendizaje y la [[help-seeking|búsqueda de ayuda]] siguen abiertos.([[elevate-genai-virtual-tutors]])

Para la comunicación clínica, la evidencia es la más desarrollada y aun así se queda corta respecto a la [[transfer-of-learning|transferencia]]. El juez de SOPHIE, leyendo solo transcripciones, alcanzó un Pearson de 0,759 y un ICC(A,1) de 0,746 frente al consenso de evaluadores humanos, dentro de la dispersión de las personas individuales y no fuera de ella. En un estudio remoto con 59 clínicos y estudiantes, el 92% lo encontró atractivo y el 83% lo juzgó clínicamente relevante. Las puntuaciones subieron entre dos encuentros, pero sin brazo de control ese ascenso no puede atribuirse a la formación.([[sophie-clinical-communication-ai-assessment-2026]])

Para los [[simulating-students|estudiantes simulados]], la evidencia se refiere a la calidad de la interacción y no a los resultados. Los participantes de Hauk valoraron el diálogo claramente funcional (M = 5.37) y solo moderadamente auténtico (M = 3.71), una escisión que las transcripciones reprodujeron en una cobertura del 87,1% frente al 37,4%. El avatar cargó con el trabajo de desafío, con el 51,1% de su texto, mientras los docentes elaboraban y justificaban. Veintiún voluntarios de un programa, una sesión, sin comparación con juego de rol en vivo.([[hauk-student-avatars-dialogue-teacher-education-2026]])

Para el juego de rol, REMind informa de una ganancia significativa de antes a después en la [[self-efficacy|autoeficacia]] percibida de los niños para defender, con creencias mejor calibradas sobre si enfrentarse a un acosador lo detiene. Son 18 niños de nueve a diez años en un contexto de prueba de juego, lo que respalda una promesa y no un cambio de conducta sostenido.([[remind-robot-mediated-roleplay-antibullying-2026]])

Para la evaluación, el juez de SOPHIE es el resultado más claro y el entrevistador de voz el menos claro. La propuesta de Tamme informa de un piloto técnico y de datos aún no analizados formalmente; toda afirmación sobre lo que la voz elicita sigue siendo una hipótesis.([[voice-based-ai-feedback-interviews-higher-ed-2026]])

## La confianza viaja a través del rostro

Un rostro no es un contenedor neutro para el contenido [[pedagogy|pedagógico]]. En dos experimentos con 396 participantes en total, [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Anthis y Kyriakidou-Zacharoudiou (2026)]] encontraron que las señales de identidad del avatar moldeaban tanto la evaluación como la adopción efectiva. Los avatares blancos, y los avatares masculinos asiáticos en contextos STEM, se valoraron como más creíbles y competentes. Los avatares de mujeres negras de más edad afrontaron penalizaciones acumuladas en todas las medidas. Los participantes adoptaron más fácilmente la orientación de avatares que coincidían con su endogrupo racial o con su estereotipo de pericia.

Dos detalles convierten esto en un problema de diseño. El dominio moderó el efecto: las tareas STEM y procedimentales amplificaron el sesgo, mientras que las reflexivas e interpersonales lo atenuaron. Y el sesgo operó sobre la conducta, no solo sobre las actitudes declaradas, lo que significa que la [[trust-calibration|confianza]] autoinformada lo habría pasado por alto. Los autores recomiendan avatares estilizados o menos antropomórficos, rotar avatares diversos entre tareas y evaluar la adopción en lugar de la satisfacción.([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]])

La autoridad llega también a través del cuerpo. Los diseñadores de ELEVATE advierten de que el cuerpo y la voz amplifican la autoridad de un tutor. Recomiendan que el avatar señale incertidumbre e invite a verificar contra apuntes o libros de texto.([[elevate-genai-virtual-tutors]]) SOPHIE añade una complicación: detrás del mismo avatar, un modelo que antes se juzgaba más humano perdió esa ventaja, y el rendimiento comunicativo fue idéntico entre backends (0,437 frente a 0,438). La semejanza humana pertenecía a la interacción —voz, latencia, turnos de palabra— y no al modelo.([[sophie-clinical-communication-ai-assessment-2026]])

La contraevidencia es que se puede enseñar al estudiantado a retener el marco humano incluso cuando un prompt lo ofrece. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman et al. (2026)]] preguntaron a 654 estudiantes de escritura si el chatbot les parecía un tutor, un colaborador u otra cosa, y solo cerca de la mitad (51,7%) eligió alguna de las opciones antropomórficas. El estudiantado lo llamó herramienta o programa, lo comparó con un robot o un ordenador, o inventó metáforas como una máquina expendedora de retroalimentación que despacha texto por datos. Los autores tratan ese rechazo del marco humano como el resultado de alfabetización, lo que sitúa el efecto en la instrucción y no en la interfaz.

## Presencia, realismo y lo siniestro

El realismo no es una escalera. [[aclime-pedagogical-agents-extended-reality-2026|ACLIME]] trata el realismo conductual como el predictor decisivo de la [[community-of-inquiry|presencia social]] y advierte de que una mayor fidelidad visual arriesga el valle inquietante, donde un agente casi humano provoca un rechazo repentino. También pone precio al intercambio: la inmersión y el realismo del agente elevan la carga cognitiva extrínseca, mientras que la interacción puede reducir la intrínseca mediante la memoria de trabajo colectiva. Su advertencia principal es contundente: cerca del 42% de quienes usan visores de realidad virtual informan de cibermareo, y los efectos posteriores van de unos diez minutos a varias horas.([[aclime-pedagogical-agents-extended-reality-2026]])

Los estudios de práctica respaldan sobre todo la versión modesta de esta afirmación. Los autores de Hauk leen la autenticidad moderada como un ajuste de fidelidad a la función. Un ensayo diádico y solo de voz estabiliza rutinas para novatos, y la dinámica entre pares y las señales no verbales pueden añadirse después.([[hauk-student-avatars-dialogue-teacher-education-2026]]) En SOPHIE, el 47% de los participantes seguía encontrando difícil sentir empatía real hacia un paciente de IA, aunque el 66% encontraba hablar con uno menos estresante que hablar con una persona.([[sophie-clinical-communication-ai-assessment-2026]])

El estudiantado no quiere de forma uniforme más realismo. En el estudio exploratorio de [[trikonet-trivalence-co-creativity-2026|TriKoNet]], los estudiantes rechazaron por unanimidad la representación fotorrealista. Usaron un espacio de diseño modular para crear sus propios conceptos de rol en lugar de adoptar una persona suministrada.([[trikonet-trivalence-co-creativity-2026]]) ELEVATE señala que la corporalización es una barrera para algunos aprendices, como quienes tienen sensibilidad sensorial o incomodidad con agentes antropomórficos, lo que hace de la configuración del avatar un requisito y no una preferencia.([[elevate-genai-virtual-tutors]])

## Consentimiento, divulgación y riesgo de deepfake

En estos relatos, la divulgación aparece como una decisión de diseño y no como una variable medida. El escenario de Hauk estaba al borde del discurso de odio, y sus salvaguardas eran procedimentales. El diseño incluía orientación, directrices de moderación, supervisión continua del docente, una opción de detenerse de inmediato, una sesión de retorno estructurada y un análisis agregado seudonimizado.([[hauk-student-avatars-dialogue-teacher-education-2026]]) El marco de Theelen pide que quienes aprenden y quienes forman docentes sepan qué partes de una [[simulation|simulación]] están controladas por personas, guiones o IA, y trata esa transparencia como condición de una adaptación defendible.([[theelen-classroom-simulations-four-layer-framework-2026]])

La pregunta más difícil es si simular a una persona es en sí mismo un pequeño engaño. Quien aprende y cree que un paciente en dificultades es real puede invertir un cuidado que una simulación divulgada no suscitaría, y luego sentirse engañado al saberlo. Las valoraciones de autenticidad moderada de Hauk sugieren que los participantes no se engañaron sobre la naturaleza del avatar; el hallazgo del 47% de empatía en SOPHIE sugiere que algunos se implicaron a pesar de saberlo. Ninguno de los dos estudios prueba la divulgación directamente.

La [[ai-use-disclosure|divulgación]] tiene también un lado de producción. La canalización de Tomlinson clonó la imagen y la voz del docente. Un subconjunto de estudiantes planteó objeciones de principio a la IA generativa —costo ambiental, trabajo, automatización, integridad— que un mejor renderizado no respondería.([[personalized-ai-generated-videos-preference-2026]]) El consentimiento del docente a ser clonado es una cuestión distinta del consentimiento del estudiante a ser enseñado por el clon, y ningún estudio de aquí mide ninguno de los dos.

La alfabetización en deepfakes es la cara inversa de la misma capacidad. En una muestra australiana de secundaria de 199 estudiantes, los varones tenían una probabilidad significativamente mayor de haber creado o compartido contenido deepfake (23,2% frente a 10,0%). Los autores abogan por una educación en seguridad dirigida explícitamente a ellos.([[gender-differences-ai-literacy-deepfake]]) Una vez que una institución puede generar un docente convincente, un paciente convincente o un estudiante convincente, la verificación de quién habla se convierte en una cuestión de [[academic-integrity|integridad académica]] tanto como de alfabetización. Las defensas orales y la evidencia de proceso, que los autores de ELEVATE recomiendan una vez que hay tutoría a demanda, abordan el mismo problema de fondo.([[elevate-genai-virtual-tutors]])

## El estado honesto de la evidencia

Casi todos los estudios de aquí son pequeños y breves. Hauk tiene 21 voluntarios y una sesión. SOPHIE tiene 59 personas que completaron y ningún brazo de control. La evaluación de psicoterapia tiene dos psicólogos, unos 90 minutos cada uno. El piloto de ABP tiene 26 estudiantes y un caso. ACLIME y Theelen son marcos conceptuales, y la base de TriKoNet son ocho grupos en sesiones únicas.([[genai-simulate-patient-history-pbl-2026]])([[ai-psychotherapy-training-avatars]])([[aclime-pedagogical-agents-extended-reality-2026]])([[theelen-classroom-simulations-four-layer-framework-2026]])([[trikonet-trivalence-co-creativity-2026]])

Las muestras grandes se refieren a actitudes y preferencias —396 participantes sobre identidad del avatar, 493 respondientes sobre preferencia de vídeo— y ambas son poblaciones de conveniencia o de un solo curso. Ningún estudio de este conjunto demuestra que un instructor sintético produzca mejor aprendizaje que uno humano. La afirmación defendible es más estrecha: estos sistemas pueden aproximar un encuentro de práctica, pueden puntuarse contra evaluadores humanos con una concordancia aceptable en un dominio, y pueden cambiar cómo evalúa el estudiantado la fuente de la instrucción.

Esa estrechez importa. Los autores de Theelen lo dicen directamente: la fluidez y una sensación de presencia no son evidencia de [[assessment-validity|validez]].([[theelen-classroom-simulations-four-layer-framework-2026]]) Sonar como un docente supera el listón más fácil de la sala.

## Concepciones erróneas

**«Un avatar más realista enseña mejor.»** El realismo y la eficacia se separaron allí donde se midieron ambos. Los dos backends de SOPHIE produjeron puntuaciones de comunicación idénticas detrás del mismo avatar, y los estudiantes de TriKoNet rechazaron de plano las personas fotorrealistas.

**«Si el avatar es convincente, quien aprende lo tratará como a una persona.»** Estudiantes de medicina entrevistaron a un paciente de IA generativa como una base de preguntas consultable, sobre todo con consultas cerradas, incluso mientras valoraban muy bien la experiencia.([[genai-simulate-patient-history-pbl-2026]]) La convicción y el estilo de interacción son resultados distintos.

**«Los instructores sintéticos son una sola tecnología, así que los hallazgos se transfieren.»** Un docente clonado que optimiza la preferencia, un tutor que optimiza la latencia y un paciente que optimiza la fidelidad clínica son artefactos distintos con modos de fallo distintos. La evidencia de un rol no autoriza afirmaciones sobre otro.

**«La apariencia del avatar es cosmética.»** Las señales de identidad cambiaron las valoraciones de credibilidad y la adopción real de la orientación, con penalizaciones acumuladas para los avatares de mujeres negras de más edad.([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]) La configuración es una decisión pedagógica y de equidad.

**«Un paciente simulado es un paciente estandarizado, menos el costo.»** Los psicólogos en formación encontraron a su paciente virtual cooperativo y ya avanzado en terapia, un caso «ideal» que representa mal la inflexibilidad conductual.([[ai-psychotherapy-training-avatars]]) El costo baja; la validez de caso no llega automáticamente.

## Conceptos conectados

- [[simulating-students]]
- [[pedagogical-agent]]
- [[simulation]]
- [[virtual-and-augmented-reality]]
- [[trust]]
- [[trust-calibration]]
- [[human-ai-collaboration]]
- [[ai-use-disclosure]]
- [[academic-integrity]]
- [[teacher-education]]
- [[teacher-role]]
- [[professional-training]]
- [[medical-education]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[embodied-learning]]
- [[video-education]]
- [[generative-ai]]
- [[llm]]
- [[conversational-ai]]
- [[intelligent-tutoring]]
- [[self-efficacy]]

## Artículos conectados

- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — Las señales de identidad del avatar desplazan la credibilidad y la adopción de la orientación (Anthis & Kyriakidou-Zacharoudiou 2026)
- [[hauk-student-avatars-dialogue-teacher-education-2026]] — Avatares de estudiante en el diálogo de la formación docente basada en la práctica (Hauk et al. 2026)
- [[gender-differences-ai-literacy-deepfake]] — Creación y notificación de deepfakes por género en un taller de alfabetización en IA
- [[elevate-genai-virtual-tutors]] — Tutores con avatar 3D que funcionan primero en local, con una capa de gobernanza para el docente (ELEVATE)
- [[sophie-clinical-communication-ai-assessment-2026]] — Pacientes con avatar y un juez LLM para la comunicación clínica
- [[genai-simulate-patient-history-pbl-2026]] — Un avatar de paciente de IA generativa en un tutorial de ABP sobre anamnesis
- [[ai-psychotherapy-training-avatars]] — Avatares de paciente para practicar la fidelidad a la TAC en la formación en psicoterapia
- [[aclime-pedagogical-agents-extended-reality-2026]] — Agentes pedagógicos en realidad extendida: presencia, realismo y carga (ACLIME)
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Juego de rol mediado por robot con un avatar manejado por los niños para la intervención como testigos
- [[personalized-ai-generated-videos-preference-2026]] — Personalización de vídeo con docente clonado y preferencia del estudiantado
- [[theelen-classroom-simulations-four-layer-framework-2026]] — Marco de cuatro capas que separa representación y agencia en la simulación de aula
- [[voice-based-ai-feedback-interviews-higher-ed-2026]] — Un agente de voz conversacional propuesto para entrevistas de retroalimentación de curso
- [[trikonet-trivalence-co-creativity-2026]] — Avatares pedagógicos cocreativos en redes sociotécnicas (TriKoNet)
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — Solo el 51,7% de 654 estudiantes adoptó los roles antropomórficos ofrecidos; uno lo llamó máquina expendedora de retroalimentación
