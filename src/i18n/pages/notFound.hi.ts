/**
 * Copy for the 404 page (`/aied/404.html`). The page is otherwise the search
 * page, so the only strings it adds are the heading and the two ways out.
 */
export interface NotFoundStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** First paragraph. May contain inline HTML and links. */
  messageHtml: string;
  /** Second paragraph, pointing at the search form below. */
  searchHtml: string;
}

const hi: NotFoundStrings = {
  title: 'पृष्ठ नहीं मिला',
  h1: 'पृष्ठ नहीं मिला',
  messageHtml:
    'हमें वह पृष्ठ नहीं मिला जिसका आपने अनुरोध किया। जिस लिंक से आप यहाँ पहुँचे हैं वह पुराना हो सकता है, या पृष्ठ का नाम बदल दिया गया हो। आप <a href="/aied/">मुखपृष्ठ</a> से फिर से शुरू कर सकते हैं।',
  searchHtml:
    'या नीचे पूरे ज्ञानकोश में खोजें। हर लेख, अवधारणा, FAQ और संसाधन अनुक्रमित हैं, और फ़िल्टर से खोज को विषय, स्तर, लक्षित वर्ग या शोध विधि के अनुसार सीमित किया जा सकता है।',
};

export default hi;
