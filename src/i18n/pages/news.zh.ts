/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Chinese visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const zh: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    '教育中的人工智能知识库的每周简报：新研究对教师、开发者、研究者和管理者意味着什么。',
  introHtml:
    '来自<a href="/aied/">教育中的人工智能知识库</a>的每周简报，说明本周发表的新研究对教师、开发者、研究者和管理者意味着什么。每期都为每条论断链接其背后的论文，末尾的内部工作记录网站本身的变动。',
  feedsHtml:
    '内容通过两个 RSS 源发布。<a href="/aied/news/rss.xml">简报源</a>只收录各期，每周一条。<a href="/aied/rss.xml">知识库源</a>在每篇新文章摘要加入时即收录，与各期取材相同，但频率高得多。',
  emailHtml:
    '如需通过电子邮件接收每一期，请将简报源粘贴到<a href="https://blogtrottr.com/">Blogtrottr</a>，这是一个免费的第三方服务，会按你选择的时间表把源发送到你的邮箱。它的邮件带有广告。',
  empty: '尚未发布任何期号。',
  allIssues: '全部期号',
  otherIssuesAria: '其他期号',
  issueLabel: '第 {issue} 期',
};

export default zh;
