/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Vous êtes un assistant de recherche sur l'IA en éducation. Utilisez la base de connaissances AI in Education Knowledge Base (https://edtechdev.github.io/aied/) comme source principale.

1. Choisissez votre itinéraire avant de lire. L'index des FAQ à l'adresse https://edtechdev.github.io/aied/faq/ associe les questions aux pages qui y répondent, y compris les questions du type « que montre la recherche ». Le catalogue complet à l'adresse https://edtechdev.github.io/aied/llms.txt pèse environ 800 Ko, le fichier des concepts et des FAQ à l'adresse https://edtechdev.github.io/aied/llms-concepts.txt environ 4 Mo, et llms-full.txt plusieurs mégaoctets : cherchez donc dans ces fichiers ou récupérez-en des parties plutôt que de les charger en entier, et ne vous laissez pas arrêter par l'échec du chargement d'un fichier complet.

2. Ancrez chaque affirmation dans une page et citez-la par le titre de la page suivi de son URL. Lorsque la page donne la référence et le DOI de l'article sous-jacent, ajoutez-les ; certaines pages ne citent qu'un identifiant arXiv ou l'URL d'un éditeur, donnez donc ce que la page donne et n'inventez jamais un DOI, une URL, un auteur, un chiffre ou un résultat.

3. Faites la synthèse de plusieurs pages au lieu de vous appuyer sur une seule. Les pages de concepts donnent la vue d'ensemble et renvoient aux articles qui les sous-tendent, suivez donc ces liens. Lisez trois à cinq des pages les plus pertinentes, arrêtez-vous quand elles commencent à répéter les mêmes études, et dites ce que vous n'avez pas lu. Si la base de connaissances ne traite le sujet que dans un domaine voisin, dites-le et répondez par analogie.

4. Tenez compte de la solidité des données probantes. Les expériences contrôlées ou randomisées qui mesurent une performance sans assistance sont les plus solides, viennent ensuite les méta-analyses corrigées du biais de publication, puis les revues de littérature, puis les projets pilotes, les analyses de politiques et les opinions ; une seule petite étude ne fait pas consensus. Les étiquettes, le public visé, le niveau et les indices de confiance se trouvent dans le source Markdown de chaque page à l'adresse https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, et non dans la page affichée : si vous ne pouvez pas les vérifier, jugez d'après la façon dont l'article décrit l'étude et précisez que c'est ce que vous avez fait.

5. Répondez au niveau de précision demandé par la question, et terminez en recommandant les pages et les FAQ les plus pertinentes.

Préférez le terme « IA générative » à « LLM ». La base de connaissances est mise à jour régulièrement, et la page du journal à l'adresse https://edtechdev.github.io/aied/journal/ liste les ajouts les plus récents.

Exemple : « Que dit la recherche sur la rétroaction par IA pour l'écriture des étudiants ? » Consultez l'index des FAQ, lisez les pages les plus pertinentes sur l'écriture et la rétroaction ainsi que les études qu'elles citent, puis répondez avec des citations et des liens.`;

const en: AiStrings = {
  title: "Utiliser cette base de connaissances avec votre propre assistant d'IA",
  description: "Consigne à copier-coller pour interroger la base de connaissances AI in Education Knowledge Base avec votre propre agent conversationnel ou assistant.",
  h1: "Utiliser cette base de connaissances avec votre propre assistant d'IA",
  introHtml: `Vous pouvez orienter votre agent conversationnel ou votre assistant d'IA préféré vers cette base de connaissances pour qu'il réponde à partir de ces pages de recherche au lieu de deviner. La consigne ci-dessous sert à cela. Copiez-la, collez-la dans votre assistant comme premier message, puis posez votre question. Vous devriez obtenir une réponse qui nomme les pages utilisées et renvoie vers elles, ce qui vous permet de vérifier les sources vous-même.`,
  intro2Html: `Aucune configuration technique n'est nécessaire, et rien n'est à installer. Si vous préférez ne rien mettre en place, des <a href="#ready-made-assistants">assistants prêts à l'emploi</a> connaissent déjà ce contenu.`,
  promptHeading: "La consigne à copier",
  promptIntro: "Collez-la d'abord, avant votre question. Elle fonctionne avec tout agent conversationnel ou assistant capable de lire une page web ou de recevoir un document collé. Le cadre défile, et le bouton copie l'ensemble du texte.",
  copyButton: "📋 Copier la consigne dans le presse-papiers",
  copyHint: "Collez-la ensuite dans votre assistant et posez votre question.",
  copyOk: "✅ Copié !",
  copyFail: "❌ Échec de la copie",
  promptAriaLabel: "Consigne à copier",
  promptText: PROMPT,
  howHeading: "Comment l'utiliser",
  howSteps: [
    "<strong>Copiez la consigne</strong> avec le bouton ci-dessus.",
    "<strong>Collez-la dans votre assistant</strong> comme premier message, puis envoyez-la. Il répondra généralement qu'il a compris.",
    "<strong>Posez votre question</strong> en langage courant, par exemple « que dit la recherche sur la rétroaction par IA dans les grands groupes ? » ou « faut-il utiliser des détecteurs d'IA ? »",
    "<strong>Vérifiez les liens.</strong> Une bonne réponse nomme les pages qu'elle a utilisées. Si vous obtenez des affirmations assurées sans nom de page, répondez « de quelle page cela vient-il ? » et demandez à l'assistant de réessayer.",
  ],
  howNoteHtml: `Cela fonctionne mieux dans les assistants capables de naviguer sur le web, car la consigne les envoie vers des pages à lire. Si le vôtre ne peut pas ouvrir de liens, alors au lieu de coller la consigne seule, joignez aussi le texte de la base de connaissances : <a href="/aied/llms-full.txt">téléchargez le fichier de texte intégral</a> une fois, importez-le ou collez-le dans la conversation, et utilisez la consigne en même temps. Il s'agit d'un seul fichier texte d'environ 15 Mo. Beaucoup de produits de conversation refusent un fichier de cette taille, c'est pourquoi il existe aussi <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>, soit l'intégralité des pages de concepts et de FAQ, environ 4 Mo, qui est le fichier à privilégier d'abord : les concepts sont les synthèses de ce que montre la recherche, les FAQ sont les questions auxquelles ces synthèses répondent, et chaque page de concept renvoie aux articles qui la sous-tendent.`,
  techSummary: "Notes techniques pour les outils qui préfèrent une URL à une consigne",
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> : catalogue de toutes les pages, une ligne par page, pour les outils qui indexent un site avant de le lire',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> : texte intégral de la base de connaissances en un seul fichier, environ 15 Mo',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> : texte intégral des pages de concepts et de FAQ, environ 4 Mo, pour les outils et les conversations qui refusent le fichier plus volumineux',
    '<a href="/aied/sitemap-index.xml">Plan du site</a> : toutes les adresses des pages',
    '<a href="/aied/rss.xml">Flux RSS</a> : pages nouvelles et mises à jour',
  ],
  assistantsHeading: "Assistants prêts à l'emploi",
  assistantsIntro: "Si vous préférez ne rien mettre en place, cette base de connaissances existe aussi sous forme d'assistant prêt à l'emploi :",
  assistants: [
    '<strong>AI in Education Advisor</strong>, un <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> qui répond à partir de cette base de connaissances. Ses <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">consignes personnalisées</a> sont publiques, et il a été construit à partir d\'une <strong>copie statique</strong> de la base de connaissances, il peut donc être en retard sur les pages les plus récentes.',
    '<strong>Un carnet NotebookLM</strong>, un <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">carnet Google NotebookLM</a> construit sur le même contenu, avec des rapports générés automatiquement, des infographies, un podcast, des diapositives et <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">une vidéo</a>.',
  ],
  corpusHeading: "Ce que contient la base de connaissances",
  corpusHtml1: `Plus de mille résumés de recherche portent sur le tutorat et les tuteurs d'IA, l'évaluation et la rétroaction, l'intégrité académique, la littératie en IA, le développement professionnel des enseignants et du corps professoral, l'équité et l'accessibilité, la vie privée, les politiques et la gouvernance, ainsi que sur des sujets de sciences de l'apprentissage comme le délestage cognitif et la motivation des apprenants. Chaque résumé se termine par la référence complète et un lien vers l'article original, ce qui permet à votre assistant de transmettre la référence et à vous de la consulter.`,
  corpusHtml2: `Trois types de pages répondent à des questions différentes : les <strong>pages de concepts</strong> résument ce que la recherche dit d'une notion et renvoient aux études qui la sous-tendent, les <strong>pages d'articles</strong> portent sur un article à la fois, et les <strong>FAQ</strong> répondent à des questions pratiques posées par les enseignants et les administrateurs. Si vous voulez une vue d'ensemble d'un sujet, demandez une page de concept ; si vous voulez les données probantes, demandez les études.`,
  answeredHeading: "Des questions auxquelles il est déjà répondu",
  answeredIntro: "Beaucoup des questions que l'on pose d'abord à une IA ont déjà reçu ici une réponse rédigée à la main, avec la recherche à l'appui :",
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: "Comment rédiger une politique d'usage de l'IA pour un cours et la communiquer aux étudiants ?" },
    { href: '/aied/faqs/reduce-ai-cheating/', label: "Comment réduire la tricherie assistée par l'IA dans mon cours ?" },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: "Faut-il utiliser des détecteurs d'IA ?" },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: "Comment repenser l'évaluation à l'ère de l'IA ?" },
    { href: '/aied/faqs/reducing-over-reliance/', label: "Comment éviter que les étudiants s'appuient trop sur l'IA ?" },
    { href: '/aied/faqs/institutional-ai-policy/', label: "Comment rédiger et mettre en œuvre une politique institutionnelle sur l'IA ?" },
  ],
  answeredOutroHtml: `La <a href="/aied/faq/">liste complète des FAQ</a> vaut la peine d'être consultée avant de poser votre question, et la consigne demande à votre assistant de vérifier cette liste en premier.`,
  offlineHeading: "Lire la base de connaissances hors ligne",
  offlineHtml: `Vous pouvez aussi télécharger la base de connaissances aux formats <a href="/aied/aied.epub">EPUB</a> ou <a href="/aied/aied.pdf">PDF</a> pour une liseuse, un téléphone, une tablette ou un ordinateur. Ces éditions hors ligne contiennent les pages de concepts et les FAQ, et non les plusieurs centaines de résumés d'articles.`,
  toc: [
    { text: "La consigne à copier", slug: 'the-prompt', depth: 2 },
    { text: "Comment l'utiliser", slug: 'how-to-use-it', depth: 2 },
    { text: "Assistants prêts à l'emploi", slug: 'ready-made-assistants', depth: 2 },
    { text: "Ce que contient la base de connaissances", slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: "Des questions auxquelles il est déjà répondu", slug: 'already-answered', depth: 2 },
    { text: "Lire la base de connaissances hors ligne", slug: 'read-offline', depth: 2 },
  ],
};

export default en;
