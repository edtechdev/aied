---
title: "Quelles sont les bonnes pratiques et les conseils pour concevoir un logiciel éducatif d'IA efficace ?"
created: "2026-09-22T19:14:36-04:00"
updated: "2026-09-22T19:14:36-04:00"
weight: 64
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
translation_of: faqs/designing-educational-ai-software
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

# Quelles sont les bonnes pratiques et les conseils pour concevoir un logiciel éducatif d'IA efficace ?

**Un système d'IA éducatif doit être conçu comme un système pédagogique, et non comme un simple modèle généraliste doté d'une interface éducative.** La recherche récente en conception rassemblée dans la base de connaissances précise cette affirmation : les systèmes les plus solides sont construits comme des **experts à périmètre borné et sous supervision humaine**, co-conçus avec les enseignants et les apprenants qui les utiliseront, et ancrés dans un contenu vérifiable plutôt que dans la mémoire d'un modèle. Voici un ensemble de règles de conception pratiques :

- Aligner le système sur des objectifs d'apprentissage explicites.
- Étayer le travail cognitif visé plutôt que l'accomplir à la place de l'apprenant.
- Ancrer les réponses dans un contenu approuvé par l'enseignant ou faisant autorité lorsque la fiabilité factuelle importe.
- Communiquer l'incertitude.
- Prévoir un [[human-in-the-loop-ai|chemin d'escalade vers un humain]].
- Concevoir des réponses « bienveillantes mais exactes » plutôt que des réponses qui acquiescent à l'utilisateur.
- Donner aux enseignants de véritables possibilités de configuration et de [[teacher-role|supervision]].
- Réduire au minimum les données inutiles sur les apprenants et ne collecter que ce qui est pédagogiquement nécessaire (voir [[privacy]]).
- Intégrer l'[[accessibility|accessibilité]] dès le départ.
- Tester les écarts de performance entre les populations d'apprenants (voir [[equity-in-ai-education|l'équité]]).
- Évaluer une interaction soutenue et multi-tours plutôt que des invites de démonstration isolées.

## Sécurité pédagogique

La page [[pedagogical-safety|Sécurité pédagogique]] souligne que les tests de sécurité classiques ne suffisent pas en éducation. Un système peut éviter tout contenu toxique et causer néanmoins un préjudice éducatif en divulguant trop vite les réponses, en renforçant les [[misconceptions|idées fausses]], en étouffant la réflexion, en favorisant la dépendance ou en s'écartant des objectifs pédagogiques. Elle recommande une évaluation de sécurité sensible à la discipline et multi-tours, une assurance qualité avec l'humain dans la boucle, un ancrage documentaire et une orientation vers l'accompagnement plutôt que vers la fourniture de réponses.

Le [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]], un [[benchmark]], traduit cet avertissement en chiffres. Sur tous les modèles testés, depuis les modèles ouverts 3.8B jusqu'à GPT-5-mini, les préjudices [[pedagogy|pédagogiques]] étaient universels, l'échelle du modèle n'améliorait pas la sécurité de façon fiable, et les taux d'échec passaient de 17.7% en interaction à un seul tour à 77.8% en conversation multi-tours, tandis que les schémas de violation variaient selon la matière. La taxonomie du benchmark, avec ses 11 dimensions et 48 sous-risques (cognitif, épistémique, [[metacognition|métacognitif]], [[motivation|motivationnel]]-affectif, développemental et équité, alignement pédagogique, et d'autres), constitue une liste de contrôle de conception utilisable. La leçon pratique pour quiconque spécifie un logiciel éducatif : un système peut être exact et « sûr » selon les mesures conventionnelles tout en érodant discrètement l'apprentissage ; une évaluation multi-tours et sensible à la discipline est donc une exigence de base, et non un simple contrôle final.

## Accessibilité et équité

L'accessibilité doit inclure des exigences opérationnelles concrètes, comme l'utilisation au clavier, la compatibilité avec les lecteurs d'écran, les sous-titres et les transcriptions, un contraste approprié, des alternatives textuelles utilisables et la compatibilité avec les [[ai-technologies|technologies]] d'assistance ; les fonctions d'accessibilité produites par l'IA doivent elles aussi être contrôlées. Voir [[accessibility]].

Les tests d'équité doivent porter sur l'ensemble de la chaîne et ventiler le comportement selon la langue, le handicap, la culture et d'autres caractéristiques pertinentes des apprenants, plutôt que de s'en remettre à la seule exactitude globale. Voir les conseils de la base de connaissances sur la [[bias-mitigation|réduction des biais]], résumés aux côtés de l'[[equity-in-ai-education|équité]].

## Concevoir une autorité bornée, et non une autonomie

[[reichert-human-centered-llm-chatbot-design-teachers-2026|l'étude de conception participative de Reichert et de ses collègues]] menée avec six enseignants du secondaire corrige utilement l'hypothèse selon laquelle l'IA éducative devrait être un agent autonome. Invités à prototyper sur papier des [[conversational-ai|chatbots]] de classe, tous les enseignants ont décrit un **expert à périmètre borné** : une capacité spécialisée, confinée à un domaine strictement défini et opérant sous supervision humaine, selon deux dimensions. Les *frontières d'autorité* maintenaient l'enseignant en contrôle ultime, car la responsabilité professionnelle de l'apprentissage et de la sécurité des élèves ne se délègue pas ; les *frontières d'expertise* reflétaient le manque de connaissances contextuelles de l'IA sur les élèves pris individuellement, sur la dynamique de classe et sur les normes institutionnelles.

L'architecture qu'ils ont esquissée comportait quatre composantes interconnectées (délimitation du contenu, présentation du contenu, adaptation à l'élève et supervision [[teacher-role|enseignante]]) reposant sur trois couches protectrices : des frontières de domaine qui restreignent le périmètre, un filtrage des contenus qui rend possible une [[personalized-learning|personnalisation]] sûre, et une reprise en main par l'enseignant pour les cas ambigus. La délégation était sélective : rapportée aux neuf événements d'enseignement de Gagné, les enseignants accueillaient l'IA pour présenter un contenu, fournir des exercices et proposer une [[formative-assessment|évaluation formative]] sous forme de [[feedback|rétroaction]], mais la refusaient pour fixer les objectifs ou conduire une [[summative-assessment|évaluation sommative]], c'est-à-dire porter un [[assessment|jugement certificatif]]. Fait notable, ils privilégiaient la transparence comportementale (limites visibles et signaux d'incertitude) plutôt que les explications du modèle, et tous les six demandaient une journalisation complète des conversations, des alertes en temps réel et une capacité de reprise en main, comme expression de leur [[teacher-role|responsabilité professionnelle]] plutôt que de la méfiance.

## Concevoir avec les parties prenantes, pas seulement pour elles

Deux autres études prolongent ce constat. [[ko-hughes-vsd-student-centered-its-2026|Ko et Hughes]] ont appliqué la conception sensible aux valeurs à un [[intelligent-tutoring|système de tutorat intelligent]] avec des étudiants et des enseignants de community college, un groupe de parties prenantes historiquement écarté de la conception des plateformes d'apprentissage, et ont trouvé des tensions de valeurs persistantes à gérer plutôt qu'à résoudre : transparence contre interprétabilité, vie privée contre éclairage pédagogique, et [[agency|autonomie de l'étudiant]] contre [[scaffolding|étayage]] guidé par le système. Les étudiants préféraient des explications collaboratives et humanisées à la transparence brute du modèle, et le prototype issu de ce travail encodait 16 fonctionnalités alignées sur ces valeurs, réparties entre [[explainable-ai|IA explicable]], humain dans la boucle et contrôles de [[privacy|vie privée]].

[[wang-teacher-ai-co-design-review-2026|la revue de Wang, Liu et Islam]] portant sur 28 études empiriques de co-conception enseignant-IA ajoute un vocabulaire de conception : l'[[generative-ai|IA générative]] sert principalement à la planification de leçons, à la génération d'invites et à l'idéation créative, l'IA intervenant bien plus souvent comme assistante ou génératrice de contenu que comme co-conceptrice, avec quatre affordances récurrentes (efficacité, réactivité, [[creativity|créativité]] et [[equity-in-ai-education|équité]]) que les enseignants peuvent utiliser pour juger quel outil convient à quel problème de conception. Les deux études traitent la conception comme une démarche [[human-in-the-loop-ai|avec l'humain dans la boucle]] et une [[human-ai-collaboration|collaboration]], c'est-à-dire de la [[usability-research|recherche en utilisabilité]] plutôt que de la diffusion, et toutes deux constatent que les parties prenantes consultées ont fait émerger des exigences qu'aucun benchmark d'exactitude ne capturerait.

## Ancrer et vérifier, ne pas se fier au modèle

L'ancrage documentaire est une décision d'architecture, pas une invite. [[eduguard-safe-rag-llm-tutor|EduGuard]], un tuteur sûr [[rag|augmenté par la recherche documentaire]] pour l'[[cs-education|initiation à la programmation]], associe une recherche de cours approuvée par l'enseignant à un vérificateur d'affirmations architecturalement distinct, à un contrôle explicite de la [[cognitive-offloading|sur-dépendance]] et à un benchmark de 600 requêtes rédigé par l'enseignant, couvrant les idées fausses, le débogage, les requêtes en code mixte et les invites adverses de réponse directe, ce qui améliore les résultats par rapport à GPT-4o-mini et aux tuteurs [[socratic-method|socratiques]] de Llama. Pour les concepteurs, c'est la forme concrète du principe « ancrer les réponses dans un contenu approuvé par l'enseignant » : séparer les composants qui vérifient des composants qui dialoguent, et tester contre des cas qui essaient activement d'extraire des réponses. Voir [[hallucination-risk|risque d'hallucination]].

Pour la manière dont ces principes de conception se traduisent dans un tuteur construit, avec le diagnostic, les échelles d'indices, la rétroaction et l'évaluation, voir [[developing-ai-tutor]] ; pour les réglages pédagogiques par défaut qui déterminent si un outil bien conçu est bien utilisé, voir [[designing-ai-into-learning]].

**Traitez la copie rendue par l'étudiant comme une entrée non fiable pour tout correcteur automatisé.** Le modèle de menace que la plupart des conseils de conception omettent est le contenu adversarial contenu dans le travail évalué. [[humble-prompt-injection-ai-grading-red-team-2026|l'évaluation adversariale par équipe rouge de Humble (2026)]] a testé si des étudiants pouvaient manipuler un système de notation fondé sur un LLM au moyen d'une injection d'invite intégrée à leur copie, et a constaté que la manipulation fonctionne : les injections qui donnent des instructions au correcteur, le recadrent ou jouent un rôle modifient la note sans changer le travail. Les conséquences pour la conception découlent du même principe de séparation que l'architecture de vérification décrite plus haut : garder la grille et les consignes de notation hors de la fenêtre de contexte contrôlée par l'étudiant, retirer ou signaler les contenus ressemblant à des instructions dans les copies, ne jamais laisser une copie établir ses propres critères, et maintenir une décision humaine sur toute note ayant des conséquences. Un correcteur automatique qui lit ses consignes dans le texte même qu'il juge a remis la grille au candidat.