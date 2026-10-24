/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const pt: ConceptsStrings = {
  title: 'Conceitos',
  h1: 'Conceitos',
  introHtml:
    'Todas as páginas de conceito do site, nas mesmas seções da barra lateral esquerda. Cada uma diz o que significa uma ideia em IA e educação, o que a pesquisa encontrou sobre ela e em que estudos se baseia. <a href="/aied/concepts/ai-education/">IA na educação</a> é o guarda-chuva que as liga.',
  browseHtml:
    'As páginas de conceito também estão disponíveis como <a href="/aied/aied.epub">EPUB</a> ou <a href="/aied/aied.pdf">PDF</a> para leitura offline. Para começar por uma pergunta, um artigo, uma ferramenta, uma busca ou o seu próprio assistente, veja o <a href="/aied/faq">FAQ</a>, o <a href="/aied/journal">diário</a>, os <a href="/aied/resources">recursos</a>, a <a href="/aied/search">busca</a> ou a <a href="/aied/ai">página de IA</a>.',
  countTemplate: '{count} páginas de conceito, agrupadas em {strands} seções.',
  empty: 'Ainda não há páginas de conceito.',
};

export default pt;
