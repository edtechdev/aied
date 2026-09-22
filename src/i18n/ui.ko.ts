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

const ko: UiStrings = {
  more: '더 보기',
  toolsLink: '도구와 리소스',
  journalLink: '저널',
  faqLink: 'FAQ',
  language: '언어',
  chooseLanguage: '언어 선택',
  notTranslated: '영어만 제공',
  notTranslatedHint:
    '이 페이지는 아직 번역되지 않았으므로, 해당 링크는 그 언어의 홈 페이지를 엽니다.',
  translationNoticeHtml: '이 페이지는 한국어로 번역되었지만, 지식베이스 자체(문서 페이지, 개념 페이지, FAQ 페이지 포함)는 영어로 작성되었습니다.',
  originalPageLabel: '이 페이지를 영어로 읽기',
};

export default ko;