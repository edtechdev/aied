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

const el: NotFoundStrings = {
  title: 'Η σελίδα δεν βρέθηκε',
  h1: 'Η σελίδα δεν βρέθηκε',
  messageHtml:
    'Δεν μπορέσαμε να βρούμε τη σελίδα που ζητήσατε. Ο σύνδεσμος που σας έφερε εδώ ενδέχεται να είναι παρωχημένος, ή η σελίδα ενδέχεται να έχει μετονομαστεί. Μπορείτε να ξεκινήσετε ξανά από την <a href="/aied/">αρχική σελίδα</a>.',
  searchHtml:
    'Ή αναζητήστε σε όλη τη βάση γνώσεων παρακάτω. Κάθε άρθρο, έννοια, συχνή ερώτηση και πόρος είναι ευρετηριασμένα, και τα φίλτρα περιορίζουν την αναζήτηση ανά γνωστικό πεδίο, επίπεδο, κοινό ή μέθοδο έρευνας.',
};

export default el;
