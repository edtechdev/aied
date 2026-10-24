/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Portuguese visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
export interface NewsStrings {
  /** <title> and the page heading. The newsletter's name, printed verbatim. */
  title: string;
  /** Meta description. */
  description: string;
  /** What the newsletter is and who it is for. May contain inline HTML. */
  introHtml: string;
  /** The two feeds, and how they differ. May contain inline HTML. */
  feedsHtml: string;
  /** How to get the newsletter by email, through a feed-to-email service. */
  emailHtml: string;
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const pt: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'A newsletter semanal da base de conhecimento sobre IA na educação: o que as novas pesquisas significam para professores, desenvolvedores, pesquisadores e administradores.',
  introHtml:
    'Um resumo semanal da <a href="/aied/">base de conhecimento sobre IA na educação</a> sobre o que as pesquisas publicadas na semana significam para professores, desenvolvedores, pesquisadores e administradores. Cada edição linka o artigo por trás de cada afirmação, e o trabalho interno no final acompanha o que mudou no próprio site.',
  feedsHtml:
    'Dois feeds RSS a distribuem. O <a href="/aied/news/rss.xml">feed da newsletter</a> traz apenas as edições, uma entrada por semana. O <a href="/aied/rss.xml">feed da base de conhecimento</a> traz cada novo resumo de artigo assim que é adicionado, ou seja, o mesmo material de onde saem as edições, a um ritmo muito maior.',
  emailHtml:
    'Para receber cada edição por e-mail, cole o feed da newsletter no <a href="https://blogtrottr.com/">Blogtrottr</a>, um serviço gratuito de terceiros que envia um feed para a sua caixa de entrada no ritmo que você escolher. As mensagens dele trazem publicidade.',
  empty: 'Nenhuma edição foi publicada ainda.',
  allIssues: 'Todas as edições',
  otherIssuesAria: 'Outras edições',
  issueLabel: 'Edição {issue}',
};

export default pt;
