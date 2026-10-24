/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy.
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

const es: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'El boletín semanal de la base de conocimiento sobre IA en la educación: qué significa la nueva investigación para el profesorado, los desarrolladores, el personal investigador y la administración.',
  introHtml:
    'Un resumen semanal de la <a href="/aied/">base de conocimiento sobre IA en la educación</a> sobre qué significa la investigación nueva publicada en la semana para el profesorado, los desarrolladores, el personal investigador y la administración. Cada número enlaza el trabajo que respalda cada afirmación, y el trabajo interno al final registra qué cambió en el propio sitio.',
  feedsHtml:
    'Dos canales RSS lo distribuyen. El <a href="/aied/news/rss.xml">canal del boletín</a> contiene solo los números, una entrada por semana. El <a href="/aied/rss.xml">canal de la base de conocimiento</a> contiene cada resumen nuevo de artículo a medida que se añade, es decir, el mismo material del que se nutren los números, a un ritmo mucho mayor.',
  emailHtml:
    'Para recibir cada número por correo electrónico, pega el canal del boletín en <a href="https://blogtrottr.com/">Blogtrottr</a>, un servicio gratuito de terceros que envía un canal a tu bandeja de entrada con la frecuencia que elijas. Sus mensajes incluyen publicidad.',
  empty: 'Todavía no se ha publicado ningún número.',
  allIssues: 'Todos los números',
  otherIssuesAria: 'Otros números',
  issueLabel: 'Número {issue}',
};

export default es;
