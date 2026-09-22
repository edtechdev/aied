/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const pt: ResourcesStrings = {
  title: 'Recursos',
  h1: 'Ferramentas e recursos gratuitos',
  introHtml: [
    'Uma seleção curada de <strong>ferramentas, coleções, instrumentos e formatos gratuitos</strong> para IA na educação — coisas que você pode ir e usar hoje, em vez de pesquisa que você precisa ler antes. São feitas em grande parte por educadores, designers instrucionais, bibliotecários e pesquisadores, e muitas foram construídas com assistência de IA por pessoas que não são desenvolvedoras profissionais.',
    'Nem tudo aqui é interativo. Ao lado de ferramentas de navegador e tutores de IA, você vai encontrar bibliotecas de prompts e "gems" prontos, coleções de atividades de sala de aula, documentos de orientação e de política, instrumentos de avaliação e formatos de arquivo abertos. Cada entrada é um resumo curto que linka para uma página dizendo quem fez, que tipo de coisa é, se o código-fonte está disponível, quanto custa usar e quando seu link foi verificado pela última vez.',
    'Cada entrada linka para um site externo que esta base de conhecimento não controla, e os links são reverificados periodicamente — cada página mostra a data em que seu link foi confirmado pela última vez. Se uma ferramenta mudou de lugar, virou fechada ou merece estar aqui e está faltando, o caminho mais rápido é abrir uma issue no repositório.',
  ],
  empty: 'Ainda não há recursos.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'Tutores de IA',
    'agent skill': 'Habilidades de agente',
    'prompt or gem library': 'Bibliotecas de prompts e gems',
    'collection of tools': 'Coleções de ferramentas',
    'collection of activities': 'Coleções de atividades',
    'assessment instrument': 'Instrumentos de avaliação',
    'open format or specification': 'Formatos e especificações abertos',
    'ebook or guide': 'Ebooks e guias',
    'case study collection': 'Coleções de estudos de caso',
    'dataset or benchmark': 'Conjuntos de dados e benchmarks',
  },
};

export default pt;
