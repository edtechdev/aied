/**
 * Search page copy, per locale. The filter-bar labels are translated; the facet
 * values that come from the content (disciplines, levels, concept slugs) are
 * content, not chrome, so they stay as authored on the (English) page they
 * describe — the convention for untranslated content.
 */
export interface SearchStrings {
  title: string;
  h1: string;
  intro: string;
  corpusIntro: string;
  placeholder: string;
  filterLabels: {
    page_type: string;
    discipline: string;
    level: string;
    audience: string;
    research_method: string;
    page_kind: string;
  };
}

const el: SearchStrings = {
  title: 'Αναζήτηση',
  h1: 'Αναζήτηση',
  intro: 'Αναζητήστε σε άρθρα και έννοιες. Χρησιμοποιήστε τα φίλτρα για να περιορίσετε τα αποτελέσματα.',
  corpusIntro:
    'Όλα όσα περιέχει η βάση γνώσεων είναι αναζητήσιμα — συμπεριλαμβανομένων των συχνών ερωτήσεων και των σελίδων με τα δωρεάν εργαλεία και πόρους. Αυτήν τη στιγμή περιέχει:',
  placeholder: 'Αναζήτηση άρθρων, εννοιών και συχνών ερωτήσεων…',
  filterLabels: {
    page_type: 'Τύπος',
    discipline: 'Γνωστικό πεδίο',
    level: 'Επίπεδο',
    audience: 'Προβλεπόμενο κοινό',
    research_method: 'Σχεδιασμός μελέτης',
    page_kind: 'Είδος σελίδας',
  },
};

export default el;
