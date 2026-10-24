/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Spanish visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
export interface NewsStrings {
  /** <title> and the page heading. The newsletter's name, printed verbatim. */
  title: string;
  /** Meta description. */
  description: string;
  /** What the newsletter is and who it is for. May contain inline HTML. */
  introHtml: string;
  /** The two feeds, and how they differ. May contain inline HTML. */
  feedsHtml: string;
  /** How to get the newsletter by email, through a feed-to-email service. */
  emailHtml: string;
  /** How to follow the newsletter on LinkedIn. May contain inline HTML. */
  linkedinHtml: string;
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const en: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'The weekly newsletter of the AI in Education Knowledge Base: what new research means for instructors, developers, researchers, and administrators.',
  introHtml:
    'A weekly brief from the <a href="/aied/">AI in Education Knowledge Base</a>, on what new research published in the week means for instructors, developers, researchers, and administrators. Every issue links the paper behind every claim, and the internal work at the bottom tracks what changed on the site itself.',
  feedsHtml:
    'Two RSS feeds carry it. The <a href="/aied/news/rss.xml">newsletter feed</a> holds the issues only, one entry a week. The <a href="/aied/rss.xml">knowledge base feed</a> holds every new article summary as it is added, which is the same material the issues are drawn from, at a much higher rate.',
  emailHtml:
    'To get each issue by email, paste the newsletter feed into <a href="https://blogtrottr.com/">Blogtrottr</a>, a free third-party service that sends a feed to your inbox on a schedule you choose. Its messages carry advertising.',
  linkedinHtml:
    'You can also follow it on <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>, where each issue goes out as a LinkedIn newsletter in your feed.',
  empty: 'No issues have been published yet.',
  allIssues: 'All issues',
  otherIssuesAria: 'Other issues',
  issueLabel: 'Issue {issue}',
};

export default en;
