/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const el: FaqStrings = {
  title: 'Συχνές ερωτήσεις',
  h1: 'Συχνές ερωτήσεις',
  introHtml:
    'Αυτή η ενότητα απαντά σε συνήθεις ερωτήσεις σχετικά με την <strong>Τεχνητή Νοημοσύνη στην εκπαίδευση</strong> — τι λέει η έρευνα για τον τρόπο που η AI επηρεάζει τη διδασκαλία και τη μάθηση, και πώς εκπαιδευτικοί, διδάσκοντες και σχεδιαστές διδασκαλίας μπορούν να θέσουν αυτές τις αποδείξεις στην πράξη. Κάθε απάντηση συμπυκνώνει ευρήματα από την έρευνα που συνοψίζεται σε όλη αυτήν τη βάση γνώσεων, συνδέοντας την ερώτηση με τις σχετικές έννοιες και άρθρα για βαθύτερη μελέτη.',
  assistantHtml:
    'Έχετε μια ερώτηση που δεν απαντάται εδώ; Ρωτήστε τον δικό σας βοηθό AI χρησιμοποιώντας τη σελίδα <a href="/aied/ai">Χρήση αυτής της βάσης γνώσεων με τον δικό σας βοηθό AI</a>, η οποία δείχνει πώς να κατευθύνετε έναν πράκτορα στον πλήρη κατάλογο για τεκμηριωμένες απαντήσεις με παραπομπές.',
  empty: 'Δεν υπάρχουν ακόμη συχνές ερωτήσεις.',
  sectionHeadings: {
    "Start here": "Από πού να ξεκινήσετε",
    "Course and institutional policy": "Πολιτική μαθήματος και ιδρύματος",
    "Designing courses and activities": "Σχεδιασμός μαθημάτων και δραστηριοτήτων",
    "Assessment, feedback and integrity": "Αξιολόγηση, ανατροφοδότηση και ακεραιότητα",
    "How students learn and use AI": "Πώς οι φοιτητές μαθαίνουν με ΤΝ",
    "Particular learners, access and wellbeing": "Διαφορετικοί εκπαιδευόμενοι, πρόσβαση και ευημερία",
    "Careers and AI literacy": "Σταδιοδρομία και επάρκεια σε ΤΝ",
    "Building and evaluating educational AI": "Ανάπτυξη και αξιολόγηση εκπαιδευτικής ΤΝ",
    "Research practice": "Ερευνητική πρακτική",
  },
  sectionBlurbs: {
    "Start here": "Δύο ευρείες ερωτήσεις που αξίζει να διαβάσετε πριν από τις ειδικές, όποιον ρόλο κι αν έχετε.",
    "Course and institutional policy": "Για εκπαιδευτικούς που γράφουν τους κανόνες που θα διαβάσουν οι φοιτητές, και για διοικητικά στελέχη και υπεύθυνους ανάπτυξης διδακτικού προσωπικού που τους θέτουν σε επίπεδο προγράμματος.",
    "Designing courses and activities": "Για όσους αποφασίζουν πού μπαίνει η ΤΝ σε μια εργασία, ένα εξάμηνο ή ένα διαδικτυακό μάθημα, και για εκπαιδευτικούς που θέλουν πίσω τον χρόνο που υποτίθεται ότι θα τους έδινε η ΤΝ.",
    "Assessment, feedback and integrity": "Το μεγαλύτερο σύνολο, γιατί εδώ τα τεκμήρια είναι πιο καθαρά και εδώ οι συνέπειες πέφτουν στον ακαδημαϊκό φάκελο του φοιτητή.",
    "How students learn and use AI": "Για ερωτήσεις σχετικά με το τι κερδίζουν πραγματικά οι φοιτητές, τι κινδυνεύουν να χάσουν και πώς η μάθηση μένει μαζί τους.",
    "Particular learners, access and wellbeing": "Για εκπαιδευτικούς και προσωπικό υποστήριξης που προσαρμόζουν τον σχεδιασμό σε όσους βρίσκονται πραγματικά στην αίθουσα, και για διοικητικά στελέχη που σκέφτονται όσους δεν βρίσκονται.",
    "Careers and AI literacy": "Για σχεδιαστές προγραμμάτων και υπεύθυνους προγραμμάτων που απαντούν σε φοιτητές που ρωτούν για ποιον λόγο γίνονται όλα αυτά.",
    "Building and evaluating educational AI": "Για προγραμματιστές, σχεδιαστές διδασκαλίας και ερευνητές που φέρνουν έναν δάσκαλο ΤΝ, μια προσομοίωση ή μια πλατφόρμα σε πραγματικό μάθημα.",
    "Research practice": "Για ερευνητές που συντάσσουν, αξιολογούν ή σχεδιάζουν εργασία σε αυτόν τον τομέα.",
  },
};

export default el;
