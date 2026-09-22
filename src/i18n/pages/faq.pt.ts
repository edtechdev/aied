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
}

const pt: FaqStrings = {
  title: 'Perguntas frequentes',
  h1: 'Perguntas frequentes',
  introHtml:
    'Esta seção responde a perguntas comuns sobre <strong>IA na educação</strong> — o que a pesquisa diz sobre como a IA afeta o ensino e a aprendizagem, e como educadores, professores e designers instrucionais podem colocar essas evidências em prática. Cada resposta destila achados da pesquisa resumida ao longo de toda esta base de conhecimento, conectando a pergunta aos conceitos e artigos relevantes para uma leitura mais aprofundada.',
  assistantHtml:
    'Tem uma pergunta que não é respondida aqui? Pergunte ao seu próprio assistente de IA usando a página <a href="/aied/ai">Use esta base de conhecimento com o seu próprio assistente de IA</a>, que mostra como apontar um agente para o catálogo completo e obter respostas fundamentadas e com citações.',
  empty: 'Ainda não há perguntas frequentes.',
};

export default pt;
