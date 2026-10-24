/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Korean visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const ko: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    '교육에서의 인공지능 지식베이스가 발행하는 주간 뉴스레터로, 새로운 연구가 교수자, 개발자, 연구자, 관리자에게 무엇을 의미하는지 전합니다.',
  introHtml:
    '<a href="/aied/">교육에서의 인공지능 지식베이스</a>에서 매주 보내는 요약입니다. 그 주에 발표된 새로운 연구가 교수자, 개발자, 연구자, 관리자에게 무엇을 의미하는지 다룹니다. 모든 호는 각 주장의 근거가 되는 논문을 연결하며, 맨 아래의 내부 작업은 사이트 자체에서 무엇이 바뀌었는지 추적합니다.',
  feedsHtml:
    '이 뉴스레터는 두 개의 RSS 피드로 제공됩니다. <a href="/aied/news/rss.xml">뉴스레터 피드</a>에는 각 호만 주 1건씩 올라갑니다. <a href="/aied/rss.xml">지식베이스 피드</a>에는 새 문서 요약이 추가될 때마다 올라가며, 각 호의 재료와 같은 내용을 훨씬 높은 빈도로 전합니다.',
  empty: '아직 발행된 호가 없습니다.',
  allIssues: '전체 호',
  otherIssuesAria: '다른 호',
  issueLabel: '제{issue}호',
};

export default ko;
