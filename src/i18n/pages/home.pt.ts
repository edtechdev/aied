/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const pt: HomeStrings = {
  title: 'Início',
  h1: 'Base de Conhecimento de IA na Educação',
  introHtml: `Você está na <strong>Base de Conhecimento de IA na Educação</strong>, um recurso gratuito e de domínio público sobre <a href="/aied/concepts/ai-education/">inteligência artificial na educação</a>, feito para quem ensina, estuda, desenha ou administra essa área. Ela destila a pesquisa recente de acesso aberto em páginas curtas e estruturadas que você pode ler e aplicar. Uma observação sobre como tudo isso é feito: as páginas são geradas e atualizadas por um agente de IA, com orientação editorial do desenvolvedor do site. Cada afirmação indica o artigo em que se baseia, então as fontes estão lá para você conferir.`,
  navHeading: 'Como navegar pelo site',
  navHtml: `Explore o índice por linhas temáticas na barra lateral à esquerda para ver como a área está organizada, ou <a href="/aied/search">busque</a> na base de conhecimento inteira se você já tem um tema em mente. As páginas de artigo condensam um trabalho em seu propósito, seus métodos e seus resultados, com a citação completa e links para trabalhos relacionados; as páginas de conceito reúnem o que a pesquisa diz sobre uma ideia e linkam para os estudos por trás dela. Se você prefere começar por uma pergunta, o <a href="/aied/faq">índice de perguntas frequentes</a> reúne as que os visitantes mais fazem, da política de IA de um curso até se vale a pena usar detectores de IA; se prefere começar por uma ferramenta, a <a href="/aied/resources">página de recursos</a> lista ferramentas, coleções e instrumentos gratuitos que você pode ir e usar, dizendo em cada caso quem os fez e quanto custam. O mapa de conceitos acima mostra o que se conecta com o quê; <a href="/aied/concepts/ai-education/">AI in Education</a> é a página do mapa por trás dele, que agrupa os conceitos em cerca de uma dúzia de linhas gerais.`,
  chatHeading: 'Converse com a base de conhecimento',
  chatHtml: `Tudo aqui também é publicado como arquivos legíveis por máquina, então você pode apontar seu chatbot ou agente de IA preferido para a base de conhecimento e receber respostas que a citam em vez de chutar — <a href="/aied/ai">os prompts estão aqui</a>. As páginas novas aparecem no <a href="/aied/journal">diário</a>, que tem um <a href="/aied/rss.xml">feed RSS</a> se você quiser acompanhar. Para ler offline, baixe o <a href="/aied/aied.epub">EPUB</a> ou o <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Pontos de partida recomendados por público',
  startingIntro: 'A seguir estão alguns conceitos recomendados para começar nesta base de conhecimento.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Conceitos essenciais',
      html: `<a href="/aied/concepts/ai-literacy/">Letramento em IA</a>, <a href="/aied/concepts/misconceptions/">ideias equivocadas sobre IA</a>, <a href="/aied/concepts/agentic-ai/">IA agêntica</a>, <a href="/aied/concepts/cognitive-offloading/">descarregamento cognitivo</a> e <a href="/aied/concepts/interpreting-and-applying-aied-research/">como interpretar e aplicar esta pesquisa</a>: o que os resultados podem e não podem sustentar, e por que um único estudo raramente resolve uma questão.`,
    },
    {
      id: 'instructors',
      heading: 'Professores',
      html: `<a href="/aied/concepts/teacher-role/">O papel cambiante de quem ensina</a>, <a href="/aied/concepts/learning-design/">desenho de aprendizagem</a>, <a href="/aied/concepts/assessment/">avaliação</a>, <a href="/aied/concepts/feedback/">feedback</a>, <a href="/aied/concepts/academic-integrity/">integridade acadêmica</a>, <a href="/aied/concepts/framing-ai-use-for-students/">como apresentar o uso de IA aos estudantes</a> e <a href="/aied/concepts/reducing-ai-misuse/">como reduzir o uso indevido</a>. Para as ferramentas, as evidências e os exemplos da sua própria área, veja <a href="/aied/concepts/discipline-specific-aied/">IA na sua disciplina</a>.`,
    },
    {
      id: 'developers',
      heading: 'Desenvolvedores',
      html: `<a href="/aied/concepts/educational-technology-developers/">Construir para a educação</a>, <a href="/aied/concepts/ai-technologies/">as tecnologias por baixo</a>, <a href="/aied/concepts/intelligent-tutoring/">tutoria inteligente</a>, <a href="/aied/concepts/multimodal/">IA multimodal</a>, <a href="/aied/concepts/student-modeling/">modelagem de estudantes</a> e <a href="/aied/concepts/pedagogical-llm-training/">como treinar e adaptar um modelo para ensinar</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administradores',
      html: `<a href="/aied/concepts/administrator/">O papel da administração</a>, <a href="/aied/concepts/governance/">governança de IA</a>, <a href="/aied/concepts/educational-policy-ai/">política institucional</a>, <a href="/aied/concepts/legal-issues-and-risks/">questões legais e riscos</a> e <a href="/aied/concepts/change-management/">gestão da mudança</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Pesquisadores',
      html: `<a href="/aied/concepts/research-methods-aied/">Métodos de pesquisa em AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teorias e frameworks</a>, <a href="/aied/concepts/ai-ed-evaluation/">como avaliar uma intervenção de IA na educação</a>, <a href="/aied/concepts/educational-measurement/">mensuração educacional</a>, <a href="/aied/concepts/learning-gains/">como medir ganhos de aprendizagem</a> e os <a href="/aied/concepts/limitations-in-aied-research/">limites transversais desta base de evidências</a>.`,
    },
  ],
  statsHeading: 'O que há na base de conhecimento',
  statsIntro:
    'Cada página aqui traz sua data, e a base de conhecimento cresce conforme nova pesquisa de acesso aberto é publicada e revisada. As contagens abaixo são lidas do conteúdo atual; a data é a atualização mais recente de uma página.',
  conceptMap: {
    title: 'Mapa de conceitos de IA na educação',
    desc:
      'Um mapa radial com IA na educação no centro, conectado a doze conceitos de nível ' +
      'superior: Modelagem, Aprendizagem, Equidade, Feedback, Letramento em IA, Avaliação, ' +
      'Disciplinas, Pedagogia, Ética, Tecnologias, Avaliação de IA e Pesquisa. Selecione ' +
      'qualquer nó para abrir a página correspondente.',
    navLabel: 'Conceitos de IA na educação',
    center: 'IA na educação',
    nodes: {
      'student-modeling': 'Modelagem',
      'learning-theories': 'Aprendizagem',
      'equity-in-ai-education': 'Equidade',
      feedback: 'Feedback',
      'ai-literacy': 'Letramento em IA',
      assessment: 'Avaliação',
      'discipline-specific-aied': 'Disciplinas',
      pedagogy: 'Pedagogia',
      ethics: 'Ética',
      'ai-technologies': 'Tecnologias',
      'ai-ed-evaluation': 'Avaliação de IA',
      'research-methods-aied': 'Pesquisa',
    },
  },
  toc: [
    { text: 'Como navegar pelo site', slug: 'navigating-the-site', depth: 2 },
    { text: 'Converse com a base de conhecimento', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Pontos de partida recomendados por público', slug: 'starting-points', depth: 2 },
    { text: 'Conceitos essenciais', slug: 'essential-concepts', depth: 3 },
    { text: 'Professores', slug: 'instructors', depth: 3 },
    { text: 'Desenvolvedores', slug: 'developers', depth: 3 },
    { text: 'Administradores', slug: 'administrators', depth: 3 },
    { text: 'Pesquisadores', slug: 'researchers', depth: 3 },
    { text: 'O que há na base de conhecimento', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default pt;
