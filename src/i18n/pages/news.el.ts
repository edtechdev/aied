/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy.
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
  /** Shown when no issue is published. */
  empty: string;
  /** Back-link on an issue page. */
  allIssues: string;
  /** Accessible name of the previous/next issue navigation. */
  otherIssuesAria: string;
  /** Previous/next issue links. `{issue}` is the issue number. */
  issueLabel: string;
}

const el: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Το εβδομαδιαίο ενημερωτικό δελτίο της βάσης γνώσης για την AI στην εκπαίδευση: τι σημαίνει η νέα έρευνα για εκπαιδευτικούς, προγραμματιστές, ερευνητές και διοικητικά στελέχη.',
  introHtml:
    'Μια εβδομαδιαία σύνοψη από τη <a href="/aied/">βάση γνώσης για την AI στην εκπαίδευση</a>, για το τι σημαίνει η νέα έρευνα που δημοσιεύτηκε την εβδομάδα για εκπαιδευτικούς, προγραμματιστές, ερευνητές και διοικητικά στελέχη. Κάθε τεύχος συνδέει τη δημοσίευση πίσω από κάθε ισχυρισμό, και η εσωτερική εργασία στο τέλος καταγράφει τι άλλαξε στον ίδιο τον ιστότοπο.',
  feedsHtml:
    'Δύο ροές RSS τη μεταφέρουν. Η <a href="/aied/news/rss.xml">ροή του ενημερωτικού δελτίου</a> περιέχει μόνο τα τεύχη, μία καταχώριση την εβδομάδα. Η <a href="/aied/rss.xml">ροή της βάσης γνώσης</a> περιέχει κάθε νέα σύνοψη άρθρου καθώς προστίθεται, δηλαδή το ίδιο υλικό από το οποίο αντλούνται τα τεύχη, με πολύ υψηλότερο ρυθμό.',
  empty: 'Δεν έχουν δημοσιευτεί ακόμη τεύχη.',
  allIssues: 'Όλα τα τεύχη',
  otherIssuesAria: 'Άλλα τεύχη',
  issueLabel: 'Τεύχος {issue}',
};

export default el;
