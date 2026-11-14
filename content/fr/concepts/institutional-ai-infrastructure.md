---
title: Infrastructure institutionnelle d'IA
created: "2026-11-12T12:35:00-05:00"
updated: "2026-11-13T19:05:00-05:00"
type: concept
connected_resources: [mindrouter, amplify-genai]
technology: [llm, generative-ai, open-source, edtech-platform]
ethics: [privacy]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed, k 12]
discipline: [information technology]
confidence: high
contributors: [editor]
translation_of: concepts/institutional-ai-infrastructure
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Cette page est une traduction automatique de la page anglaise, non relue par un locuteur natif.*

> **L'infrastructure institutionnelle d'IA** — la couche de calcul, de service, de routage et de contrôle qu'un établissement exploite pour que des modèles soient utilisables dans l'enseignement, la recherche et l'administration selon ses propres règles. Elle couvre les GPU et les clusters qui hébergent les poids, les serveurs d'inférence qui répondent aux requêtes, la [[llm|passerelle]] qui les mesure et les route, les fiches de modèle et les journaux d'audit qui rendent le dispositif inspectable, les pipelines de données qui relient les dossiers étudiants aux modèles, et le personnel qui fait tourner l'ensemble. Ce n'est pas le même objet qu'une [[edtech-platform|plateforme technologique éducative]] (le contenant tourné vers l'apprenant) ni que la [[governance|gouvernance]] (la politique qui contraint les deux).

## Questions à examiner

- Où le modèle tourne-t-il réellement dans votre établissement, et quelqu'un peut-il nommer la personne capable de répondre sans vérifier ?
- Laquelle des six formes d'adoption ci-dessous avez-vous déjà adoptée, et laquelle pensiez-vous avoir adoptée ?
- Si quatre-vingt-dix pour cent de l'usage provenait de dix pour cent des utilisateurs, une licence nominative ou une passerelle à l'usage servirait-elle mieux votre budget — et savez-vous quelle forme prend votre usage ?
- Un document de politique indique que les requêtes ne doivent pas quitter la juridiction. Qu'est-ce qui, dans votre pile, applique cette règle plutôt que de demander aux gens de s'en souvenir ?
- Qui est responsable lorsqu'une recommandation d'articulation de cours est erronée, et votre infrastructure enregistre-t-elle assez pour répondre à cette question plus tard ?
- Pour une école primaire, qu'est-ce qui change lorsque le modèle est petit et tourne dans le bâtiment plutôt qu'à l'échelle des modèles de frontière et à distance ?

## Introduction

Les établissements ont passé les premières années de l'[[generative-ai|IA générative]] à acheter de l'accès : une licence d'[[conversational-ai|agent conversationnel]] ici, un assistant de rédaction là, chacun avec ses propres conditions et son propre chemin de données. Le résultat est un portefeuille que personne ne peut décrire en une phrase, et un ensemble de questions — où est partie cette invite, qui a approuvé ce modèle, combien avons-nous dépensé — auxquelles aucun bureau unique ne peut répondre.

Traiter l'IA comme une infrastructure est la réponse. Cela signifie une couche de service partagée, une passerelle qui applique les règles de l'établissement à chaque requête, et assez de télémétrie pour voir le coût, la charge et les défaillances. L'affirmation de la littérature n'est pas que cela coûte moins cher. Elle est que cela fait de l'établissement la partie qui décide, ce qui est un type d'affirmation différent et plus difficile à tester.

Les articles rassemblés ici élargissent aussi ce qui compte comme infrastructure. Deux concernent l'inférence pour le dialogue et l'enseignement, un concerne le bureau du registraire, et un concerne les dossiers d'évaluation. Une fois que l'articulation des cours, l'[[learning-analytics|analyse]] de la charge de travail et l'accumulation de preuves dépendent d'embeddings et d'appels de modèles, l'arrière-bureau fait autant partie de la pile que la baie de GPU. L'argument est que l'infrastructure est partout où un établissement a discrètement délégué une décision à un modèle.

## Ce que vous choisissez réellement

Le domaine décrit six formes, non deux. Elles diffèrent par qui détient les données, qui peut changer le modèle et qui absorbe la défaillance.

**Outils externalisés gratuits.** Le personnel ou les étudiants utilisent le service d'un fournisseur sans frais. [[intelligent-tutoring|AI Tutor]] Pro, de Contact North au Canada, en est le cas le plus clair : gratuit, anonyme, sans compte requis, avec des modes pour la discussion, l'[[self-assessment|auto-vérification]] et la construction de guides d'étude. Playlab se situe dans la même bande, en laissant les éducateurs construire des applications ancrées dans leur propre [[curriculum-design|curriculum]] tandis que le fournisseur héberge les modèles. Le coût n'est pas nul mais différé : aucune piste d'audit institutionnelle, aucun contrôle des quotas, et des conditions qui peuvent changer sans préavis. C'est un endroit défendable pour un pilote et un mauvais endroit pour s'installer.

**Licences sur un tenant éducatif commercial.** Un district ou une université achète ChatGPT Edu, Microsoft 365 Copilot, Google Gemini for Education ou un tenant comparable. L'achat est rapide, l'authentification unique et une console d'administration sont incluses, et le fournisseur maîtrise le choix du modèle et la conservation. L'établissement gagne l'intégration des identités et perd la capacité de contourner un fournisseur.

**Une plateforme que vous hébergez.** [Amplify GenAI](/aied/resources/amplify-genai/) se déploie dans le propre compte AWS de l'établissement, si bien que les documents et les conversations restent dans une infrastructure que l'établissement contrôle pendant que le fournisseur apporte l'application. Le pilote de Vanderbilt rapportait environ \\$3 par utilisateur et par mois pour 1 300 utilisateurs, dont la moitié sous \\$1 de dépense en jetons. Cette forme achète la maîtrise des données sans acheter de GPU.

**Une passerelle par-dessus des fournisseurs mixtes.** Une porte d'entrée unique devant des backends locaux et commerciaux, avec quotas, authentification unique, journalisation et routage régional attachés. Fontys l'a construite en trois couches ; [MindRouter](/aied/resources/mindrouter/) et SPIN en implémentent des variantes. C'est la forme qui transforme un document de politique en contrainte appliquée, et celle qui exige un ingénieur de plateforme plutôt qu'un acheteur.

**Votre propre inférence.** Des GPU, des ordonnanceurs, des serveurs de modèles et les personnes qui les exploitent. MindRouter à l'université de l'Idaho est le cas de référence ; SPIN à Georgia Tech est le même pari pris à l'intérieur d'un centre de calcul haute performance. C'est la seule forme dans laquelle l'établissement peut répondre à une assignation judiciaire, à un régulateur ou à un changement de prix d'un fournisseur sans demander la permission.

**L'IA dans les outils que vous exploitez déjà.** Un type de question Moodle, le partenaire d'IA d'une plateforme de discussion, un outil de rétroaction sur les dissertations. La charge organisationnelle est faible et le changement arrive cours par cours, ce qui est aussi sa limite : rien au centre n'en apprend.

Ces formes s'emboîtent. Une passerelle peut précéder une plateforme hébergée ; une plateforme hébergée peut appeler un modèle local ; un outil gratuit peut être le pilote qui ne justifie aucune des formes précédentes. La question utile n'est pas quelle forme est la meilleure mais quelle décision chaque forme prend silencieusement pour vous.

## La couche de passerelle

Trois implémentations décrivent désormais le même geste architectural avec une cohérence inhabituelle.

[[huijts-suilen-institutional-ai-sovereignty-gateway-2025|Huijts et Suilen]] à Fontys ICT séparent une interface de type ChatGPT liée à l'identité institutionnelle, un cœur de routage qui applique les budgets et les contraintes régionales, et une couche de fournisseurs de modèles locaux et commerciaux. Six mois et 300 utilisateurs plus tard, un plafond mensuel de \\$500 n'avait jamais été franchi, et chaque session s'ouvrait sur une fiche de modèle nommant les capacités, la région d'hébergement, le coût et les alternatives.

[[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] pousse la même idée dans l'ordonnancement. Les requêtes sont pondérées par rôle — [[administrator|administrateur]] 10, enseignants 5, personnels 2, étudiants 1 — via Weighted Deficit Round Robin, et la sélection du backend ajoute des scores souples pour la latence, la charge et la préférence de l'administrateur. La passerelle tient le journal d'audit, et elle mesure l'énergie autant que les jetons.

[[rahaman-soa-on-prem-ai-gateway-2026|SPIN à Georgia Tech]] rend la séparation explicite à la frontière de l'API : LiteLLM et PostgreSQL sur une machine virtuelle sans GPU, vLLM et Triton sur des nœuds GPU dans Slurm, l'hôte, le port et la clé du backend étant résolus depuis la base de données au moment de la requête. Remplacer un modèle devient une mise à jour de base de données invisible pour les clients.

Les différences sont instructives. Fontys gouverne un portefeuille multi-fournisseurs, MindRouter gouverne une capacité partagée rare, et SPIN gouverne l'inférence sur un ordonnanceur de lots conçu pour terminer des tâches. Tous trois convergent vers une seule affirmation : la surface de l'API est le contrat, et le modèle derrière elle est remplaçable.

## Le service est une politique, non un banc d'essai

[[rodenbeck-purdue-on-prem-genai-inference-2025|Les deux services de Purdue]] ont atteint plus de 1000 utilisateurs sur plus de 10 modèles [[open-source]] pour environ \\$100,000 de matériel, avec environ 40 % d'utilisateurs actifs mensuels. La décision qui compte est que l'équipe a conservé Ollama plutôt que vLLM malgré l'avantage de débit de 4 à 5 fois de vLLM, parce que soutenir de nombreux modèles importait davantage que la vitesse brute pour une communauté qui veut essayer des choses.

Le test de charge de SPIN donne l'autre moitié du tableau. Face à un moteur simulé à 1000 requêtes simultanées par seconde, une machine virtuelle de passerelle à 8 vCPU atteignait 76 % du débit agrégé idéal, tandis qu'un serveur physique à 8 travailleurs atteignait 98 %. Le palier de proxy est bon marché jusqu'à ce qu'il ne le soit plus, et le seuil est mesurable plutôt que mystérieux.

Aucun des deux résultats ne se généralise en règle. Ils établissent que le débit, l'étendue des modèles et la simplicité opérationnelle se compensent mutuellement, et que l'arbitrage devrait être fait délibérément plutôt qu'hérité des valeurs par défaut d'un fournisseur.

## La périphérie change l'argument

[[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar et Iqbal]] décrivent une alternative à l'échelle d'une école : un ordinateur de bureau ou un mini-PC reconditionné avec un GPU d'entrée de gamme, hébergeant un modèle de 1 à 13 milliards de paramètres, pour un coût indicatif de plusieurs centaines à plusieurs milliers de dollars australiens par serveur. Leur argument économique est une école de 400 élèves qui ne peut pas absorber des coûts cumulés d'API cloud à travers les classes. Leur honnêteté est d'admettre qu'aucune comparaison complète du coût de possession n'existe, si bien que l'économie est une hypothèse plutôt qu'un résultat.

À l'échelle d'un cours, [[on-premises-rag-tutoring-business-education-2026|CourseChat]] montre la même logique sous une contrainte différente : un modèle de production de 8 milliards de paramètres conservé face à des candidats plus grands qui échouaient à un seuil de latence en classe. [[guadalupe-academic-chatbot-local-llm-2026|Guadalupe, Topón et Iza]] atteignaient une cible médiane de 5 secondes à 3,57 s mais la manquaient au p95 avec 6,47 s, et attribuaient environ 96 % du temps de bout en bout à la génération.

Exécuter localement change la question de la vie privée d'une question contractuelle en une question physique, et ne la résout pas. Un déploiement local avec journalisation complète des invites reste un système de conservation ; ce qui change est qui peut être contraint de le remettre.

## L'arrière-bureau est aussi une infrastructure

[[pardos-borchers-institutional-workflows-oecd-2026|Pardos et Borchers]] soutiennent que le lieu déterminant de l'[[ai-education|IA en éducation]] n'est pas la fenêtre de dialogue mais le registraire, le bureau d'orientation et le comité de curriculum. Leurs exemples sont des embeddings plutôt que des conversations : des vecteurs de cours appris à partir des historiques d'inscription, une traduction automatique entre les espaces vectoriels de deux établissements, et des pipelines d'étiquetage qui projettent des ressources ouvertes sur un standard.

Les chiffres sont précis. La prédiction de transfert fondée sur les embeddings a validé 65 articulations existantes et est désormais pilotée avec 59 établissements et quatre systèmes d'[[higher-ed|enseignement supérieur]]. Les heures de crédit n'expliquaient que 6 % de la variance de la charge de travail perçue, tandis que les caractéristiques d'activité sur le LMS en expliquaient 36 %. L'étiquetage collaboratif par IA réduisait le temps d'environ 50 % mais diminuait l'exactitude de 35 %.

Le résultat d'adoption est celui que les planificateurs d'infrastructure devraient retenir. Dans une expérience 2×2, masquer les recommandations aberrantes à faible confiance augmentait l'acceptation et la productivité des administrateurs, tandis que demander aux utilisateurs de signaler les recommandations abaissait l'acceptation sauf si les aberrations étaient montrées. Un recommandeur plus exact peut encore échouer à cause de la présentation de sa sortie, ce qui fait de la conception d'interface une partie de l'infrastructure plutôt qu'une finition.

## L'évaluation comme problème de plomberie

[[mcnamara-aimcai-continuous-assessment-infrastructure-2026|AIM-CAI]] soutient que les preuves nécessaires pour interpréter l'apprentissage existent déjà mais sont fragmentées entre des systèmes incapables de se lire mutuellement. Son cadre comporte six couches fonctionnelles, trois frontières inférentielles qui limitent ce qu'un instantané peut soutenir, et sept exigences de gouvernance dont l'auditabilité, l'estimation de l'incertitude et la reprise humaine. C'est un cadre plutôt qu'un déploiement, et les auteurs le disent.

[[lata-ferpa-compliant-local-llm-autograder|LaTA]] fournit le cas plus étroit : un modèle de raisonnement local qui supprime la question [[privacy|FERPA]] liée à l'envoi de travaux étudiants à un fournisseur plutôt que de la gérer. Ensemble, ils suggèrent que l'infrastructure d'évaluation n'est pas une fonctionnalité d'une plateforme d'apprentissage mais un problème distinct avec son propre modèle de données et ses propres modes de défaillance.

## Coût, latence et le problème de visibilité

Le thème récurrent dans les implémentations est que le coût et la latence ne deviennent visibles que lorsque quelqu'un les instrumente. Le chiffre de \\$100,000 de matériel de Purdue est un montant d'investissement avec un coût de personnel non déclaré. Le banc d'essai de la passerelle de SPIN borne la surcharge du proxy et ne dit rien de la latence de bout en bout. La comptabilité énergétique de [[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] rapporte environ 9,4 kW de consommation normale contre un pic observé de 14,1 kW et un maximum théorique de 22,1 kW, et 872 997 430 jetons sur une fenêtre de 17 jours impliquent de \\$82,843 à \\$251,806 d'économies annuelles face aux équivalents commerciaux aux tarifs de l'article.

Les plateformes hébergées à l'échelle d'un district rapportent le même type d'arithmétique : PSD401 AI Studio revendique un coût par jeton inférieur de 67 à 90 % aux alternatives commerciales. Aucun de ces chiffres n'est comparable entre établissements sans le même dénominateur. Ce qui est comparable est la pratique de mesurer.

## La souveraineté a une dimension d'équité

Une passerelle peut router vers un modèle local qui traite mal la langue de l'établissement, et le silence qui en résulte n'est pas neutre. L'argument de l'infrastructure et celui de la [[digital-divide|fracture numérique]] se rejoignent ici : les établissements dotés de clusters et de personnel gagnent en capacité, et ceux qui n'en ont pas absorbent ce que le fournisseur offre au prix que le fournisseur fixe. Les offres gratuites sont réellement utiles et réellement fragiles, ce qui fait de leur traitement comme stratégie permanente une décision sur les établissements qui sont servis.

## Implications pour la pratique

Les cadres supérieurs peuvent commencer par nommer la forme dans laquelle chaque unité se trouve réellement. Les six formes diffèrent par qui détient les données et qui absorbe les défaillances, et la plupart des établissements en cumulent plusieurs à la fois : un tenant pour le personnel, un outil gratuit dans un département, une plateforme hébergée dans un autre. Un inventaire d'une page de ce qui est utilisé, de où vont les données et de qui peut changer le modèle est plus utile qu'un document de stratégie qui n'en décrit qu'une seule.

Les responsables des TI et des bibliothèques peuvent faire de la passerelle le lieu où la politique s'applique. Fontys, MindRouter et SPIN convergent vers le même contrat : une seule surface d'API, des quotas par utilisateur, l'intégration des identités, un routage régional et une fiche de modèle affichée avant l'envoi de la requête. Une règle qui vit dans un PDF et une règle qui vit dans un routeur sont des objets différents, et seule la seconde tient quand un nouveau modèle apparaît.

Le personnel des finances et des achats peut instrumenter le coût avant de choisir un fournisseur. Les licences par siège, les plateformes hébergées et les passerelles à la consommation récompensent des formes d'usage différentes, et la seule façon de savoir laquelle est la moins chère est de mesurer les jetons, les utilisateurs actifs et la charge de pointe. Le service de Purdue a atteint environ 1000 utilisateurs pour environ 100 000 dollars de matériel ; un pilote hébergé rapporte environ 3 dollars par utilisateur et par mois. Ces chiffres ne sont pas comparables sans le même dénominateur.

Les centres d'enseignement et d'apprentissage peuvent traiter les pilotes sur des paliers gratuits comme des pilotes. Les outils gratuits sont la raison pour laquelle beaucoup d'éducateurs peuvent essayer quoi que ce soit, et ils s'accompagnent de l'absence de piste d'audit, de l'absence de quota et de conditions qui peuvent changer. Un pilote qui réussit devrait passer à une forme que l'établissement peut gouverner.

Les chefs d'établissement sans centre de données peuvent tout de même faire tourner un modèle local. Un ordinateur de bureau reconditionné avec un GPU d'entrée de gamme héberge un petit modèle pour un bâtiment, et le gain de confidentialité est physique plutôt que contractuel. Il reste un système de rétention, si bien que la journalisation et l'accès demeurent des décisions de conception.

Les chefs de département peuvent regarder au-delà de la fenêtre de clavardage. L'articulation des cours, l'analytique de la charge de travail, l'étiquetage et les dossiers d'évaluation sont là où les établissements ont déjà délégué des décisions à un modèle, et ces systèmes exigent la même gouvernance qu'un agent conversationnel, généralement avec moins d'examen.

## Idées fausses courantes

**« Le sur site coûte moins cher. »** Les frais de licence disparaissent et le matériel, l'électricité, le refroidissement et le personnel apparaissent. Le service de Purdue a coûté environ \\$100,000 de matériel avant que quiconque soit payé pour l'exploiter, et le personnel est la partie qui ne diminue pas.

**« Une passerelle n'est qu'un proxy. »** Un proxy transfère. Une passerelle décide quel modèle, quelle région, quel budget, quel utilisateur, ce qui est journalisé et ce qu'on dit à l'utilisateur avant qu'il appuie sur envoyer.

**« Local signifie privé. »** La localité change qui peut assigner les données, non si elles sont conservées. La journalisation d'audit, le stockage des invites et l'accès administrateur sont des choix de conception, et un déploiement local avec journalisation complète reste une surface de surveillance.

**« Acheter des GPU est la stratégie. »** De la capacité sans ordonnancement, sans quotas et sans soutien devient une file d'attente. Les cas réussis décrivent la gouvernance et l'exploitation au moins autant que le matériel.

**« Le problème de l'IA, c'est l'agent conversationnel. »** L'essentiel de la valeur institutionnelle décrite dans cette littérature réside dans l'articulation des cours, l'analyse de la charge de travail, l'étiquetage et les dossiers d'évaluation, là où aucun étudiant n'ouvre jamais une fenêtre de dialogue.

## Concepts liés

- [[open-source]]
- [[rag]]
- [[privacy]]
- [[governance]]
- [[edtech-platform]]
- [[llm]]
- [[digital-divide]]
- [[assessment]]
- [[shadow-ai]]

## Articles liés

- [[huijts-suilen-institutional-ai-sovereignty-gateway-2025]] — Fontys ICT : une passerelle gouvernée pour 300 utilisateurs, avec fiches de modèle et un plafond mensuel de \\$500
- [[rodenbeck-purdue-on-prem-genai-inference-2025]] — Purdue : deux services d'inférence de campus, plus de 1000 utilisateurs, plus de 10 modèles, Ollama plutôt que vLLM
- [[rahaman-soa-on-prem-ai-gateway-2026]] — SPIN : contrôle et service séparés à la frontière de l'API, avec un palier de proxy testé en charge
- [[sheneman-mindrouter-institutional-ai-sovereignty-2026]] — MindRouter : ordonnancement équitable, quotas et comptabilité énergétique dans une passerelle open source
- [[guadalupe-academic-chatbot-local-llm-2026]] — ESPOL : récupération hybride avec un modèle local, réussissant la cible de latence médiane et manquant le p95
- [[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026]] — un argument pour les petits modèles de langue à l'échelle d'une école primaire
- [[pardos-borchers-institutional-workflows-oecd-2026]] — le chapitre de l'OCDE sur l'articulation des cours, l'analyse de la charge de travail et la production d'évaluations
- [[mcnamara-aimcai-continuous-assessment-infrastructure-2026]] — AIM-CAI : six couches pour relier les preuves d'apprentissage
- [[on-premises-rag-tutoring-business-education-2026]] — CourseChat : un modèle de 8 milliards de paramètres conservé face à des candidats plus grands échouant à un seuil de latence
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA : un modèle de raisonnement local qui supprime la question FERPA plutôt que de la gérer
