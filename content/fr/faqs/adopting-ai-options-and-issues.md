---
title: "Quelles sont les options et les problèmes à prendre en compte lors de l'adoption d'outils d'IA ?"
created: "2026-11-12T11:10:00-05:00"
updated: "2026-11-12T11:10:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-12T17:10:00-05:00"
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

Une directrice de département dispose de trois devis pour une plateforme de [[intelligent-tutoring|tutorat par IA]] et d'une échéance vendredi. Un [[teacher-role|enseignant]] veut utiliser un outil gratuit que la moitié du personnel utilise déjà. Un directeur des systèmes d'information doit dire si l'établissement devrait exploiter son propre modèle et ne sait pas ce que cela coûterait.

Ce sont les mêmes questions à trois altitudes. Les options sont moins nombreuses qu'une liste de fournisseurs ne le suggère, et les problèmes durent plus longtemps que n'importe quel produit.

Le choix doit correspondre à la décision qui se présente à vous. Un individu décide ce qu'il met dans un outil. Un établissement décide qui peut utiliser quel modèle, sur quelles données, à quel coût, et qui répond quand quelque chose se passe mal. La plupart des mauvaises décisions d'adoption viennent du fait de répondre à la question institutionnelle avec un outil individuel.

## La version courte

Cinq règles couvrent l'essentiel. Réglez d'abord la frontière des données, car tout le reste peut se renégocier et pas elle. Choisissez la plus petite forme qui convient : outils gratuits ou externalisés pour un pilote, une plateforme hébergée quand vous voulez maîtriser les données sans GPU, une passerelle quand il vous faut des quotas et du routage, et une inférence possédée seulement quand les trois autres échouent. Comparez la tarification par siège et à l'usage avec vos propres chiffres, car l'essentiel de l'usage vient généralement de quelques utilisateurs intensifs. Rendez le chemin autorisé plus rapide que le chemin non approuvé, puisque EDUCAUSE a constaté que 94 % du personnel et des enseignants utilisaient l'IA pour leur travail, 54 % connaissaient la politique et 56 % utilisaient des outils que l'établissement ne fournit pas. Décidez ensuite à l'avance quel élément de preuve vous ferait arrêter, car une adoption sans test de sortie devient permanente par défaut.

## Au niveau individuel

Un enseignant ou un étudiant prend une décision sur les données avant une décision pédagogique. Les noms d'étudiants, les détails du plan d'enseignement individualisé, les notes disciplinaires et la recherche non publiée créent la responsabilité, alors anonymisez d'abord et vérifiez si l'outil fait encore le travail. Puis lisez les conditions : la conservation, l'entraînement sur vos entrées et les sous-traitants se trouvent généralement dans un document que personne n'ouvre, et si la réponse est introuvable en cinq minutes, considérez-la comme inconnue.

Sachez ce que l'outil fait bien. Le texte généré est le plus fort en rédaction, restructuration et résumé, et le plus faible en arithmétique, en citations et en tout ce qui exige des faits à jour. Sachez aussi ce qu'il vous coûte. Un palier gratuit est gratuit parce que l'usage est le produit ou parce que le palier changera, et l'un comme l'autre est une raison de garder une sortie en tête.

Deux questions demeurent. Qui d'autre est concerné, puisqu'un outil qui refaçonne un cours est une décision pour les étudiants qui le suivent. Et si son usage est autorisé : lisez la politique une fois s'il en existe une, et s'il n'y en a pas, les éléments sur [[shadow-ai]] suggèrent que vous faites déjà de la politique par défaut.

L'heuristique brutale : utilisez l'outil autorisé quand il est à portée, et quand il ne l'est pas, notez ce que vous avez fait et pourquoi. C'est cette trace qui vous protège si le jugement est contesté plus tard.

## Au niveau institutionnel

Un établissement achète en une seule fois un service, un flux de données, une obligation de support et un engagement politique. Six formes composent le vrai menu, et la plupart des établissements en occupent deux ou trois sans le savoir.

Le départ le plus simple est un outil externalisé gratuit. AI Tutor Pro de Contact North ne demande aucun compte, et Playlab permet aux enseignants de construire des applications ancrées dans leur propre [[curriculum-design|programme]] pendant que le fournisseur héberge les modèles. Les deux conviennent à un pilote et sont médiocres comme installation durable : aucune piste d'audit, aucun contrôle des quotas et des conditions qui peuvent changer.

L'achat de sièges sur un tenant commercial, qu'il s'agisse de [[generative-ai|ChatGPT]] Edu, de Microsoft 365 Copilot ou de Google Gemini for Education, apporte un approvisionnement rapide, le SSO et une console d'administration, et laisse le choix du modèle et la conservation au fournisseur.

Une plateforme que vous hébergez garde les données plus près. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) se déploie dans votre propre compte AWS, et le pilote de Vanderbilt a rapporté environ \$3 par utilisateur et par mois pour 1 300 utilisateurs, dont la moitié sous \$1 de jetons. Cela achète la maîtrise des données sans GPU.

Une passerelle au-dessus de fournisseurs mixtes place une seule porte d'entrée devant plusieurs d'entre eux. Elle porte les quotas, le SSO, la journalisation et le routage régional ; Fontys en a exploité une pour 300 utilisateurs sous un plafond mensuel de \$500 qui n'a jamais été franchi, et [MindRouter](/aied/resources/mindrouter/) ajoute un ordonnancement pondéré par les rôles et une mesure de l'énergie.

Votre propre inférence est la forme la plus coûteuse et la plus indépendante. Les deux services de Purdue ont atteint plus de 1000 utilisateurs sur 10+ modèles [[open-source]] pour environ \$100,000 de matériel, avant le personnel. Elle répond à un régulateur sans demander la permission à un fournisseur.

La dernière forme est l'IA à l'intérieur d'outils que vous exploitez déjà : un type de question Moodle, le partenaire IA d'une plateforme de discussion, un outil de retour sur dissertation. Un faible effort et un changement cours par cours, avec peu d'apprentissage au centre.

## Les problèmes qui ne disparaissent pas

[[privacy|La protection des données]] vient d'abord. Ce qui compte, c'est quel enregistrement existe désormais qui n'existait pas avant, où il réside et qui peut le récupérer. Un outil qui reçoit une liste de classe a créé un enregistrement institutionnel, quoi que dise le contrat.

L'identité et l'accès viennent ensuite. Tout ce qui est utilisé à l'échelle exige le SSO, un accès fondé sur les rôles et la gestion des départs, et un outil qui ne peut pas déprovisionner un employé partant laisse un compte permanent contenant vos données.

Les coûts dépendent de la façon dont le prix est compté. La tarification par siège récompense l'effectif et la tarification à l'usage récompense l'usage. Parce qu'une petite part des utilisateurs génère généralement la plupart des jetons, le prix par siège paraît bon marché jusqu'à ce que les utilisateurs intensifs aillent ailleurs.

La mesure est généralement la pièce manquante. EDUCAUSE a constaté que 92 % disposaient d'une stratégie IA liée au travail et 13 % mesuraient le retour sur investissement. Si vous ne pouvez pas dire ce que l'outil a remplacé, vous ne pouvez pas défendre le renouvellement.

[[equity-in-ai-education|L'équité]] et l'accessibilité relèvent de l'achat plutôt que d'une correction ultérieure. Un outil qui exige une connexion rapide, un palier payant ou une maîtrise de l'anglais répartit son bénéfice de façon inégale.

[[academic-integrity|L'intégrité académique]] change ce que l'évaluation mesure. Quand un outil peut réaliser le devoir, c'est le devoir qui doit être révisé.

Le personnel et la dépendance au fournisseur comptent autant que le prix. Chaque forme ci-dessus, sauf la gratuite, a besoin d'un propriétaire, et l'échec habituel consiste à acheter la quatrième ou la cinquième forme et à la doter en personnel de la personne déjà débordée. Demandez ce qui se passe au renouvellement, lors d'un changement de prix et lors d'une dépréciation de modèle ; les formes de passerelle existent pour que la réponse soit un changement de routage plutôt qu'une migration.

## À quoi ressemble une bonne première année

Choisissez deux ou trois mesures avant tout lancement : qui l'a utilisé, pour quoi, ce qu'il a coûté par utilisateur actif et ce qui a changé dans le travail. Un pilote qui ne peut pas produire ces chiffres est une démonstration avec un budget.

Vérifiez les conditions limites en même temps. Si l'outil a touché des dossiers étudiants, le flux de données correspondait-il à ce que vous avez dit au service de protection des données ? Si l'usage n'a pas été mesuré, était-ce parce que l'outil ne pouvait pas le rapporter ou parce que personne ne l'a demandé ?

Gardez le chemin autorisé court. Les chiffres d'EDUCAUSE suggèrent que les gens contournent la gouvernance parce que la voie approuvée prend plus de temps que la tâche. Une passerelle avec une fiche de modèle et un accès le jour même est un instrument de gouvernance autant qu'une commodité informatique.

## Erreurs courantes

Acheter une plateforme avant de nommer le problème produit des statistiques d'usage et peu d'autre chose. Traiter le gratuit comme une stratégie fonctionne pour un pilote et échoue comme infrastructure. Un modèle local change qui peut être assigné à comparaître ; il ne décide pas si les invites sont conservées. Mesurer la satisfaction plutôt que l'effet transforme « les enseignants ont aimé » en un résultat qu'il n'est pas. Et une politique publiée sans chemin praticable décrit des préférences plutôt que des règles.
