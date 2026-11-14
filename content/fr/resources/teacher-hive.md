---
title: "Teacher Hive"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-13T20:20:00-05:00"
type: resource
summary: "Plateforme d'hébergement gratuite de Tony Vincent où les enseignants publient des applications web de classe générées par IA, les partagent par lien ou code QR et parcourent des centaines d'applications créées par d'autres enseignants."
url: https://teacherhive.app/
author: "Tony Vincent"
author_url: https://teacherhive.app/about
resource_type: [software, collection of tools]
access: [freemium]
last_verified: "2026-11-10"
foundations: [teacher-ai-competency]
technology: [generative-ai]
audience: [instructors, instructional designers]
level: [k 12, teacher education]
source_updated: "2026-11-13T00:25:09-05:00"
translation_of: resources/teacher-hive
translation_note: "Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Traduction automatique de la page anglaise, non encore relue par une personne de langue maternelle.*

**Teacher Hive** est une plateforme d'hébergement et de partage pour les applications de classe faites par des enseignants, construite par Tony Vincent. Son postulat est que la partie difficile de l'IA en classe n'est plus d'obtenir d'un modèle qu'il écrive une petite application, mais de trouver un endroit où elle tournera sur un réseau scolaire et où les élèves pourront l'ouvrir facilement. Les enseignants collent ou téléversent un seul fichier HTML produit par ChatGPT, Claude ou Gemini, et Teacher Hive le sert à une courte adresse publique avec une icône et un code QR. La navigation, les favoris, le suivi et la publication sont gratuits ; une offre Pro payante relève les limites de stockage et d'applications.

## Ce que vous pouvez faire avec

**Parcourir** les applications publiées par collection (pauses cognitives, ELA, mathématiques, sciences, études sociales, outils pour enseignants), puis **Publier** une application en collant du HTML, en ajoutant un nom, une description, une icône et une attribution d'IA. Chaque application reçoit une page d'information avec un bouton Lancer et un affichage QR, et s'ouvre sans marque ni connexion élève. Une couche **Superpowers** optionnelle ajoute des réponses enregistrées, des appels d'IA, le courriel et le stockage de fichiers, facturés selon l'offre. Pour une application unique qui n'a pas besoin de galerie, deux alternatives gratuites fonctionnent par glisser-déposer : [Cloudflare Drop](https://www.cloudflare.com/drop/) publie un dossier, un zip ou un fichier HTML unique à une adresse workers.dev sans compte, à condition que le déploiement soit revendiqué dans les 60 minutes, et [Netlify Drop](https://app.netlify.com/drop) publie les mêmes entrées à un lien public sur son offre gratuite.

## À qui cela s'adresse

Les enseignants K–12 qui ont utilisé l'[[generative-ai|IA générative]] pour construire un petit outil et ont besoin d'un endroit fiable pour l'héberger constituent le public principal ; la plateforme est conçue pour le [[vibe-coding|codage intuitif]] plutôt que pour les développeurs. Les concepteurs pédagogiques et les formateurs d'enseignants peuvent utiliser les collections comme exemples et comme moyen à faible enjeu de construire la [[teacher-ai-competency|compétence des enseignants en IA]].

## Remarques et mises en garde

Membre et Builder sont gratuits (Builder : 50 applications, 50 Mo) ; Pro coûte \$10 par mois ou \$60 par an pour 500 applications. L'accès est freemium.

La confidentialité est l'argument le plus fort, mais elle déplace la responsabilité vers les enseignants. Teacher Hive ne crée aucun compte élève, ne demande aux élèves aucune information personnelle et n'exécute aucun script d'analytique ou de publicité dans les applications publiées. Parce que les applications sont publiques par lien, les conditions rendent les enseignants responsables de veiller à ce que leurs applications ne collectent ni noms, ni courriels, ni identifiants élèves, ni localisation. La couverture d'accessibilité (WCAG 2.2 AA) s'applique aux propres pages de Teacher Hive, pas aux applications faites par les enseignants, qui ne sont pas testées. Aucune licence open source n'est indiquée, et la disponibilité et la conservation des données ne sont pas garanties.

## Concepts liés

- [[teacher-ai-competency]]
- [[generative-ai]]
- [[vibe-coding]]
- [[ai-literacy]]
- [[professional-training]]
