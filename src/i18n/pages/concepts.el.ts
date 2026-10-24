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
  empty: 'Δεν υπάρχουν ακόμη σελίδες εννοιών.',
};

export default el;
