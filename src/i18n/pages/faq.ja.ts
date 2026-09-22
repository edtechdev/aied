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

const ja: FaqStrings = {
  title: 'FAQ',
  h1: 'よくある質問',
  introHtml:
    'このセクションでは、<strong>教育におけるAI</strong>についてのよくある質問に答えます。AIが教育と学習にどのような影響を与えるかについて研究が述べていること、そして教育者・教員・インストラクショナルデザイナーがその根拠を実践にどう活かせるかを扱います。各回答は、このナレッジベース全体で要約された研究の知見を凝縮し、質問を関連する概念や記事につないで、さらに深く読めるようにしています。',
  assistantHtml:
    'ここに答えのない質問がありますか。その場合は<a href="/aied/ai">このナレッジベースを自分のAIアシスタントで使う</a>ページを使って、ご自分のAIアシスタントに尋ねてください。このページでは、エージェントを全カタログに向けて、根拠に基づいた出典付きの回答を得る方法を紹介しています。',
  empty: 'FAQはまだありません。',
};

export default ja;
