/**
 * Interface strings (chrome) per locale: the header's more menu, the language
 * switcher and the notice shown on a translated page. Docs-site generators ship
 * translated UI packs for their own chrome; this is the equivalent for the pages
 * translated here.
 */
export interface UiStrings {
  /** Accessible name of the overflow ("more") button in the header. */
  more: string;
  /** Label of the tools and resources entry in the overflow menu. */
  toolsLink: string;
  /** Label of the journal entry in the overflow menu. */
  journalLink: string;
  /** Label of the FAQ entry in the overflow menu. */
  faqLink: string;
  /** Label of the GitHub entry in the overflow menu. */
  githubLink: string;
  /** Label and accessible name of the language switcher button. */
  language: string;
  /** Heading inside the switcher popover. */
  chooseLanguage: string;
  /** Suffix shown for a locale that has no translation of the current page. */
  notTranslated: string;
  /** Tooltip on the entry that is not translated. */
  notTranslatedHint: string;
  /** HTML notice shown at the top of a translated page. */
  translationNoticeHtml: string;
  /** Link text that points back at the English page a translation came from. */
  originalPageLabel: string;
}

const zh: UiStrings = {
  more: '更多',
  toolsLink: '工具与资源',
  journalLink: '日志',
  faqLink: '常见问题',
  githubLink: 'GitHub',
  language: '语言',
  chooseLanguage: '选择语言',
  notTranslated: '仅英文',
  notTranslatedHint: '此页面尚未翻译，因此该链接会打开对应语言的主页。',
  translationNoticeHtml: '本页面已译为中文，但知识库本身（包括其中的文章页面、概念页面和常见问题页面）均以英文撰写。',
  originalPageLabel: '阅读本页的英文版本',
};

export default zh;
