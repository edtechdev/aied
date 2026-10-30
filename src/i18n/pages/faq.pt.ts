/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const pt: FaqStrings = {
  title: 'Perguntas frequentes',
  h1: 'Perguntas frequentes',
  introHtml:
    'Esta seção responde a perguntas comuns sobre <strong>IA na educação</strong> — o que a pesquisa diz sobre como a IA afeta o ensino e a aprendizagem, e como educadores, professores e designers instrucionais podem colocar essas evidências em prática. Cada resposta destila achados da pesquisa resumida ao longo de toda esta base de conhecimento, conectando a pergunta aos conceitos e artigos relevantes para uma leitura mais aprofundada.',
  assistantHtml:
    'Tem uma pergunta que não é respondida aqui? Pergunte ao seu próprio assistente de IA usando a página <a href="/aied/ai">Use esta base de conhecimento com o seu próprio assistente de IA</a>, que mostra como apontar um agente para o catálogo completo e obter respostas fundamentadas e com citações.',
  empty: 'Ainda não há perguntas frequentes.',
  sectionHeadings: {
    "Start here": "Comece por aqui",
    "Course and institutional policy": "Política de curso e institucional",
    "Designing courses and activities": "Desenho de cursos e atividades",
    "Assessment, feedback and integrity": "Avaliação, feedback e integridade",
    "How students learn and use AI": "Aprendizagem e uso de IA",
    "Particular learners, access and wellbeing": "Estudantes específicos, acesso e bem-estar",
    "Careers and AI literacy": "Carreiras e letramento em IA",
    "Building and evaluating educational AI": "Construir e avaliar IA educacional",
    "Research practice": "Prática de pesquisa",
  },
  sectionBlurbs: {
    "Start here": "Duas perguntas amplas que vale a pena ler antes das específicas, seja qual for o seu papel.",
    "Course and institutional policy": "Para professores que escrevem as regras que os estudantes vão ler, e para administradores e formadores de professores que as definem no nível do programa.",
    "Designing courses and activities": "Para quem decide onde a IA entra numa tarefa, num semestre ou num curso online, e para professores que querem de volta o tempo que a IA deveria ter lhes dado.",
    "Assessment, feedback and integrity": "O maior grupo, porque é aqui que a evidência é mais nítida e onde as consequências recaem sobre o histórico do estudante.",
    "How students learn and use AI": "Para perguntas sobre o que os estudantes realmente ganham, o que arriscam perder e como manter a aprendizagem com eles.",
    "Particular learners, access and wellbeing": "Para professores e equipes de apoio que adaptam o desenho a quem está de fato na sala, e para administradores que pensam em quem não está.",
    "Careers and AI literacy": "Para designers curriculares e coordenadores de curso que respondem a estudantes que perguntam para que serve tudo isso.",
    "Building and evaluating educational AI": "Para desenvolvedores, designers instrucionais e pesquisadores que levam um tutor, uma simulação ou uma plataforma para um curso real.",
    "Research practice": "Para pesquisadores que relatam, revisam ou planejam trabalho nesta área.",
  },
};

export default pt;
