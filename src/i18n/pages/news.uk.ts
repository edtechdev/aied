/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Ukrainian visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const uk: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Щотижневий бюлетень бази знань про ШІ в освіті: що нового з досліджень означає для викладачів, розробників, дослідників і адміністраторів.',
  introHtml:
    'Щотижневий огляд від <a href="/aied/">бази знань про ШІ в освіті</a> про те, що означають нові дослідження, опубліковані за тиждень, для викладачів, розробників, дослідників і адміністраторів. Кожен випуск посилається на статтю, що стоїть за кожним твердженням, а внутрішня робота внизу відстежує, що змінилося на самому сайті.',
  feedsHtml:
    'Її ведуть два RSS-потоки. <a href="/aied/news/rss.xml">Потік бюлетеня</a> містить лише випуски, один запис на тиждень. <a href="/aied/rss.xml">Потік бази знань</a> містить кожен новий огляд статті в міру додавання, тобто той самий матеріал, з якого беруться випуски, але з набагато вищою частотою.',
  empty: 'Випусків ще не опубліковано.',
  allIssues: 'Усі випуски',
  otherIssuesAria: 'Інші випуски',
  issueLabel: 'Випуск {issue}',
};

export default uk;
