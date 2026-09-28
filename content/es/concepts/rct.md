---
title: ECA
created: "2026-09-28T18:22:28-04:00"
updated: "2026-09-28T18:22:28-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/rct
source_updated: "2026-09-24T10:07:27-04:00"
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

- **Micro-ECA como respuesta a una tecnología que cambia rápido:** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] sostienen que los ensayos convencionales a gran escala no pueden seguir el ritmo de plataformas de tutoría que cambian de forma sustancial durante un estudio, y usan microensayos controlados aleatorizados dirigidos por [[teacher-role|profesorado]] en escuelas secundarias inglesas (644 de 929 estudiantes completaron el postest, g = 0,33) para mantener repetible la estimación causal. Las disyuntivas se declaran en su propio diseño: un 30,7% de abandono, resultados alineados con el [[curriculum-design|currículo]] y no estandarizados de forma independiente, y solo cuatro semanas de seguimiento.
- **Afirmaciones de eficacia causal:** los ECA en IAED ponen a prueba si un tutor, una herramienta o un tratamiento pedagógico con IA mejora los resultados. [[generative-ai-education-productivity-gaps|Un experimento aleatorizado sobre IA generativa]] con 1.174 participantes encontró que la IA generativa reduce sustancialmente las brechas de productividad basadas en la educación, cerrando cerca de tres cuartas partes de la diferencia de rendimiento inicial: una estimación causal clara del efecto de la IA.
- **Comparación con el estándar de oro:** la página de [[research-methods-aied|métodos de investigación]] sitúa los ECA como el diseño más sólido para la validez interna y a la vez señala sus disyuntivas: coste, condiciones artificiales, IA que cambia rápido, muestras pequeñas con potencia insuficiente y límites éticos para retener herramientas potencialmente útiles.

### Fortalezas y limitaciones

- **Fortalezas:** la inferencia causal más sólida; una medición limpia de los resultados; permite estimar tamaños del efecto; equilibra los factores de confusión mediante la aleatorización.
- **Limitaciones:** costosos y lentos; los entornos artificiales pueden reducir la validez ecológica; las herramientas de IA cambian más rápido de lo que tardan los ensayos; las muestras pequeñas a menudo tienen poca potencia para detectar efectos significativos; limitaciones éticas para retener una IA potencialmente beneficiosa de un grupo de control.

Para un tratamiento más completo del diseño experimental en la IA en la educación —incluido cuándo es apropiado un ECA frente a diseños cuasiexperimentales, de encuesta o computacionales— véase [[research-methods-aied]].

## Conceptos conectados

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]

## Artículos conectados

- [[generative-ai-education-productivity-gaps]] — ¿Reduce la IA generativa las brechas de productividad basadas en la educación? Evidencia de un experimento aleatorizado
- [[ai-changing-teaching-workflows]] — Cómo está cambiando la IA los flujos de trabajo docentes
- [[genai-can-harm-teaching-rct-2026]] — La IA generativa puede perjudicar la enseñanza: un ECA
- [[access-not-enough-ai-tutoring-2026]] — El acceso no basta: el apoyo humano mejora la implicación con la tutoría de IA
- [[burneo-can-edtech-close-learning-gaps-2026]] — Metaanálisis del Banco Mundial de 14 ECA sobre tecnología educativa
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluar la tutoría con IA al ritmo de la innovación: microensayos aleatorizados dirigidos por docentes de una plataforma de tutoría con IA en ciencias del GCSE
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: la tutoría con IA y la humana producen ganancias de aprendizaje equivalentes en el GRE