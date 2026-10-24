/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Hindi visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const hi: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'शिक्षा में AI ज्ञानकोश का साप्ताहिक न्यूज़लेटर: नए शोध का शिक्षकों, डेवलपर्स, शोधकर्ताओं और प्रशासकों के लिए क्या अर्थ है।',
  introHtml:
    '<a href="/aied/">शिक्षा में AI ज्ञानकोश</a> की ओर से साप्ताहिक संक्षेप, इस पर कि सप्ताह में प्रकाशित नया शोध शिक्षकों, डेवलपर्स, शोधकर्ताओं और प्रशासकों के लिए क्या अर्थ रखता है। हर अंक में हर दावे के पीछे के शोधपत्र का लिंक होता है, और नीचे का आंतरिक कार्य बताता है कि साइट पर ही क्या बदला।',
  feedsHtml:
    'इसे दो RSS फ़ीड वितरित करते हैं। <a href="/aied/news/rss.xml">न्यूज़लेटर फ़ीड</a> में केवल अंक होते हैं, सप्ताह में एक प्रविष्टि। <a href="/aied/rss.xml">ज्ञानकोश फ़ीड</a> में हर नया लेख सार जुड़ते ही आ जाता है, यानी वही सामग्री जिससे अंक बनते हैं, कहीं अधिक गति से।',
  empty: 'अभी कोई अंक प्रकाशित नहीं हुआ है।',
  allIssues: 'सभी अंक',
  otherIssuesAria: 'अन्य अंक',
  issueLabel: 'अंक {issue}',
};

export default hi;
