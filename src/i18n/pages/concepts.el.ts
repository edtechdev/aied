/**
 * Copy for the concept index page (`/aied/concepts/`). The concepts themselves
 * come from src/data/conceptIndex.ts, and the strand headings and blurbs are
 * generated from concepts.registry.yaml, so none of that list is repeated here.
 */
export interface ConceptsStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** What this page is and what a concept page holds. May contain inline HTML. */
  introHtml: string;
  /** Other ways into the knowledge base, and the offline editions. */
  browseHtml: string;
  /** Count line above the sections. `{count}` and `{strands}` are substituted. */
  countTemplate: string;
  /**
   * The one-sentence description under each section heading, keyed by the
   * section's English heading as it appears in src/data/conceptIndex.ts.
   * Sections with no blurb are omitted.
   */
  strandBlurbs: Record<string, string>;
  /** Shown when the registry yields no concepts. */
  empty: string;
}

const el: ConceptsStrings = {
  title: 'Έννοιες',
  h1: 'Έννοιες',
  introHtml:
    "Όλες οι σελίδες εννοιών του ιστότοπου, στις ίδιες ενότητες με την αριστερή πλαϊνή γραμμή. Κάθε σελίδα εξηγεί τι σημαίνει μια ιδέα για το AI και την εκπαίδευση, τι βρήκε η έρευνα γι' αυτήν και σε ποιες μελέτες βασίζεται. <a href=\"/aied/concepts/ai-education/\">AI στην εκπαίδευση</a> είναι η ομπρέλα που τις συνδέει.",
  browseHtml:
    "Οι σελίδες εννοιών διατίθενται και ως <a href=\"/aied/aied.epub\">EPUB</a> ή <a href=\"/aied/aied.pdf\">PDF</a> για ανάγνωση εκτός σύνδεσης. Για να ξεκινήσετε αντίθετα από μια ερώτηση, μια δημοσίευση, ένα εργαλείο, μια αναζήτηση ή τον δικό σας βοηθό, δείτε τις <a href=\"/aied/faq\">συχνές ερωτήσεις</a>, το <a href=\"/aied/journal\">ημερολόγιο</a>, τους <a href=\"/aied/resources\">πόρους</a>, την <a href=\"/aied/search\">αναζήτηση</a> ή τη <a href=\"/aied/ai\">σελίδα AI</a>.",
  countTemplate: '{count} σελίδες εννοιών, οργανωμένες σε {strands} θεματικές ενότητες.',
  strandBlurbs: {
    'Foundations of AI in education':
      "Η συνολική ματιά στο ίδιο το πεδίο: τι είναι η ΤΝ στην εκπαίδευση, πώς εξελίχθηκε και ποια διακλαδικά θέματα (γραμματισμός στην ΤΝ, συνεργασία ανθρώπου και ΤΝ, δράση) διαμορφώνουν κάθε άλλη ενότητα.",
    'Learning and instruction':
      "Πώς η ΤΝ υποστηρίζει τη μάθηση και τη διδασκαλία, μέσα από παιδαγωγικές προσεγγίσεις, θεωρίες μάθησης και διαδικασίες που απευθύνονται στον μαθητή.",
    'Technologies and techniques':
      "Το τεχνικό επίπεδο: τα μοντέλα και οι μέθοδοι ΤΝ που τροφοδοτούν την εκπαιδευτική τεχνολογία, και τα συστήματα μοντελοποίησης μαθητή και καθοδήγησης που βασίζονται σε αυτά.",
    'AI in the disciplines':
      "Πώς η ΤΝ εφαρμόζεται στα γνωστικά πεδία και στα εκπαιδευτικά επίπεδα: η κάλυψη των θεματικών περιοχών του πεδίου.",
    'Assessment and measurement':
      "Πώς η ΤΝ αξιολογεί τους μαθητές και αναδιαμορφώνει τον τρόπο που αξιολογούμε τα συστήματα ΤΝ και τον αντίκτυπό τους.",
    'Equity, ethics, and responsible use':
      "Η δικαιοσύνη, η πρόσβαση και η υπευθυνότητα είναι κεντρικές για την ΤΝ στην εκπαίδευση.",
  },
  empty: 'Δεν υπάρχουν ακόμη σελίδες εννοιών.',
};

export default el;
