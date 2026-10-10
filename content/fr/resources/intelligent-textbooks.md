---
title: "Building Intelligent Textbooks"
created: "2026-10-10T11:10:00-04:00"
updated: "2026-10-10T12:03:03-04:00"
type: resource
summary: "Le guide open source de Dan McCreary pour construire des manuels intelligents — des manuels en ligne dotés de recherche, de navigation, de glossaires, de quiz, de graphes de concepts et de simulations embarquées — avec MkDocs Material et l'IA générative, accompagné d'une bibliothèque compagne de MicroSims interactives générées par l'IA."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

Le site **Intelligent Textbooks** est le guide pas à pas de Dan McCreary pour construire des
*manuels intelligents* — des manuels en ligne qui dépassent les PDF statiques en ajoutant la
recherche, la navigation sur le site, un glossaire des termes, une table des matières, la gestion
des quiz, les formules rendues, les aperçus pour les réseaux sociaux, la vérification des liens et
un **graphe de concepts** facile à visualiser montrant tous les concepts d'un cours et leurs
dépendances. Le guide soutient que de nombreux cours actuels peuvent bénéficier de manuels en
ligne de haute qualité dotés de ces fonctionnalités, et il montre comment les construire avec le
système de build [MkDocs](http://mkdocs.com/) associé au thème Material et à l'IA générative pour
créer et maintenir le contenu.

Le geste fondateur est que le manuel est *rédigé en Markdown et généré par l'IA*, une instance
concrète du schéma de [[vibe-coding|rédaction assistée par l'IA]] appliqué au
[[curriculum-design|contenu de cours]] : plutôt que d'entretenir à la main un grand site, on décrit
le cours et on laisse l'IA générative produire et maintenir les pages, la chaîne d'outils prenant
en charge la navigation, la recherche et le graphe de concepts. Une bibliothèque compagne
[Claude Code Skills](https://dmccreary.github.io/ibook-skills/) prétend automatiser plus de 90 % des
tâches nécessaires à la construction d'un manuel de niveau 2 à partir d'une description de cours.

## Une ressource complémentaire : les MicroSims

Le compagnon naturel de ce guide est la bibliothèque **MicroSims** de McCreary, à l'adresse
<https://dmccreary.github.io/microsims/> (code source :
[github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), qui fournit les
simulations interactives qu'un manuel intelligent embarque. Une *MicroSim* (micro-simulation) est
une simulation interactive simple générée avec l'IA pour aider les enseignants à expliquer un
concept, et elle peut être embarquée dans un manuel intelligent ou dans tout site acceptant un
`iframe`. Les MicroSims se distinguent par trois traits : la **génération assistée par l'IA** (des
schémas de conception standardisés transforment une description en langage naturel d'une simulation
en un actif partageable), l'**embarquement universel** (un simple élément HTML `iframe` permet de la
déposer sur n'importe quelle page) et le **code transparent et modifiable** (pas de boîte noire —
un clic ouvre la simulation dans un éditeur web, et une licence Creative Commons permet à la
plupart des enseignants de les utiliser sans frais de licence). Le terme a été inventé par Valerie
Lockhart en 2023, après avoir constaté que des enseignants et des étudiants pouvaient construire
des simulations avec la bibliothèque JavaScript p5.js avec peu ou pas de formation.

Le projet publie aussi un JSON Schema pour les métadonnées des MicroSims afin que les outils d'IA
puissent générer des descripteurs interrogeables, avec un registre à facettes des MicroSims sur la
feuille de route. Un article de recherche décrivant le cadre — *MicroSims: A Framework for
AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning
Support* — se trouve sur arXiv
([2511.19864](https://arxiv.org/abs/2511.19864)). Les simulations d'exemple incluent Bouncing
Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula et un graphique
de rendements boursiers, chacune fonctionnant en direct sur le site.

## À qui il s'adresse

Aux enseignants et aux concepteurs pédagogiques qui souhaitent construire ou maintenir un manuel de
cours, en particulier dans l'enseignement supérieur et la formation professionnelle, ainsi qu'aux
développeurs de formation des enseignants et à tous ceux qui utilisent l'IA générative pour
rédiger du contenu éducatif. Il convient aux éducateurs à l'aise avec un flux de travail
Markdown-et-Git (ou désireux de l'apprendre) et qui veulent que l'IA prenne en charge la
plomberie du site — recherche, navigation, graphe de concepts — pour se concentrer sur la
pédagogie.

## Notes et réserves

C'est le guide d'un praticien et une chaîne d'outils, non une étude évaluée par les pairs — il
présente un flux de travail et son propre argumentaire éducatif (« les manuels intelligents
guident les étudiants à travers les concepts dans leur quête de savoir ») plutôt que des preuves
de résultats d'apprentissage. L'article de recherche sur les MicroSims est ce qui s'en rapproche le
plus, et il est auto-publié sur arXiv. Les deux projets sont open source (le dépôt
intelligent-textbooks déclare une licence MIT et 38 étoiles ; MicroSims déclare une licence
Creative Commons et 13 étoiles) et sont activement maintenus. Les graphes de concepts et la
structure glossaire-d'abord sont véritablement utiles pour la découvrabilité, mais le guide suppose
un flux de travail de rédaction assez technique — MkDocs, Git et outillage d'IA générative — ce qui
peut constituer un obstacle pour certains enseignants. Au moment de l'ingestion, le registre des
MicroSims n'est encore que sur la feuille de route, si bien que trouver une simulation existante
précise repose sur la recherche et la navigation propres au site.

## Concepts liés

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
