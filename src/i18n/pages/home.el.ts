/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const el: HomeStrings = {
  title: 'Αρχική',
  h1: 'Βάση γνώσεων για την τεχνητή νοημοσύνη στην εκπαίδευση',
  introHtml: `Καλώς ορίσατε στη Βάση γνώσεων για την Τεχνητή Νοημοσύνη στην Εκπαίδευση, έναν δωρεάν πόρο δημόσιου τομέα για την <a href="/aied/concepts/ai-education/">τεχνητή νοημοσύνη στην εκπαίδευση</a> για όσους διδάσκουν, σπουδάζουν, σχεδιάζουν ή διαχειρίζονται. Συνοψίζει και συνθέτει πρόσφατη εκπαιδευτική έρευνα ανοικτής πρόσβασης. Ένας πράκτορας AI γράφει και ενημερώνει τις σελίδες με συντακτική καθοδήγηση από τον δημιουργό του ιστότοπου.`,
  navHeading: 'Πλοήγηση στον ιστότοπο',
  navHtml: `Περιηγηθείτε στο ευρετήριο στην αριστερή πλαϊνή γραμμή, το οποίο είναι οργανωμένο ανά θεματική ενότητα, ή <a href="/aied/search">αναζητήστε</a> ένα θέμα. Οι σελίδες άρθρων συμπυκνώνουν μία δημοσίευση στο σκοπό, τις μεθόδους και τα ευρήματά της· οι σελίδες εννοιών συγκεντρώνουν όσα λέει η έρευνα για μία ιδέα και συνδέουν τις μελέτες πίσω από αυτήν. Για να ξεκινήσετε από μια ερώτηση, οι <a href="/aied/faq">συχνές ερωτήσεις</a> καλύπτουν ό,τι ρωτούν πρώτα οι επισκέπτες, όπως η πολιτική AI ενός μαθήματος ή αν πρέπει να χρησιμοποιούνται ανιχνευτές AI. Για να ξεκινήσετε από ένα εργαλείο, η <a href="/aied/resources">σελίδα πόρων</a> απαριθμεί δωρεάν εργαλεία και συλλογές, με το ποιος έφτιαξε το καθένα και πόσο κοστίζει. Ο χάρτης παραπάνω ομαδοποιεί τον κλάδο σε δώδεκα θεματικές ενότητες, με την <a href="/aied/concepts/ai-education/">Τεχνητή Νοημοσύνη στην Εκπαίδευση</a> ως κεντρικό κόμβο.`,
  chatHeading: 'Συζήτηση με τη βάση γνώσεων',
  chatHtml: `Ολόκληρη η βάση γνώσεων δημοσιεύεται επίσης σε μορφές αναγνώσιμες από μηχανές, ώστε να μπορείτε να κατευθύνετε ένα chatbot ή πράκτορα AI σε αυτήν και να λαμβάνετε απαντήσεις που παραθέτουν τις σελίδες. <a href="/aied/ai">Τα prompts είναι εδώ</a>. Οι νέες σελίδες πηγαίνουν στο <a href="/aied/journal">ημερολόγιο</a>, που διαθέτει <a href="/aied/rss.xml">τροφοδοσία RSS</a>. Για ανάγνωση εκτός σύνδεσης, κατεβάστε το <a href="/aied/aied.epub">EPUB</a> ή το <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Προτεινόμενα σημεία εκκίνησης ανά κοινό',
  startingIntro: 'Ξεκινήστε από την ομάδα που ταιριάζει στον ρόλο σας.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Βασικές έννοιες',
      html: `<a href="/aied/concepts/ai-literacy/">Γραμματισμός AI</a>, <a href="/aied/concepts/misconceptions/">λανθασμένες αντιλήψεις για την AI</a>, <a href="/aied/concepts/agentic-ai/">πράκτορας AI</a>, <a href="/aied/concepts/cognitive-offloading/">γνωστική εκφόρτωση</a> και <a href="/aied/concepts/interpreting-and-applying-aied-research/">πώς να ερμηνεύετε και να εφαρμόζετε αυτήν την έρευνα</a>, συμπεριλαμβανομένου του γιατί μία μεμονωμένη μελέτη σπάνια διευθετεί μια ερώτηση.`,
    },
    {
      id: 'instructors',
      heading: 'Εκπαιδευτικοί',
      html: `<a href="/aied/concepts/teacher-role/">Ο μεταβαλλόμενος ρόλος του εκπαιδευτικού</a>, <a href="/aied/concepts/learning-design/">σχεδιασμός μάθησης</a>, <a href="/aied/concepts/assessment/">αξιολόγηση</a>, <a href="/aied/concepts/feedback/">ανατροφοδότηση</a>, <a href="/aied/concepts/academic-integrity/">ακαδημαϊκή ακεραιότητα</a>, <a href="/aied/concepts/framing-ai-use-for-students/">εννοιολόγηση της χρήσης AI</a> και <a href="/aied/concepts/reducing-ai-misuse/">μείωση της κατάχρησης</a>. Για εργαλεία και παραδείγματα ειδικά για το γνωστικό σας πεδίο, δείτε την <a href="/aied/concepts/discipline-specific-aied/">AI στο δικό σας γνωστικό πεδίο</a>.`,
    },
    {
      id: 'developers',
      heading: 'Προγραμματιστές',
      html: `<a href="/aied/concepts/educational-technology-developers/">Σχεδιασμός για την εκπαίδευση</a>, <a href="/aied/concepts/ai-technologies/">οι υποκείμενες τεχνολογίες</a>, <a href="/aied/concepts/intelligent-tutoring/">έξυπνη διδασκαλία</a>, <a href="/aied/concepts/multimodal/">πολυτροπική AI</a>, <a href="/aied/concepts/student-modeling/">μοντελοποίηση του μαθητή</a> και <a href="/aied/concepts/llm-training-and-fine-tuning/">εκπαίδευση και προσαρμογή ενός μοντέλου για διδασκαλία</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Διαχειριστές',
      html: `<a href="/aied/concepts/administrator/">Ο ρόλος του διαχειριστή</a>, <a href="/aied/concepts/governance/">διακυβέρνηση της AI</a>, <a href="/aied/concepts/educational-policy-ai/">θεσμική πολιτική</a>, <a href="/aied/concepts/legal-issues-and-risks/">νομικά ζητήματα και κίνδυνοι</a> και <a href="/aied/concepts/change-management/">διαχείριση της αλλαγής</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Ερευνητές',
      html: `<a href="/aied/concepts/research-methods-aied/">Μέθοδοι έρευνας στην AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">θεωρίες και πλαίσια</a>, <a href="/aied/concepts/ai-ed-evaluation/">αξιολόγηση μιας παρέμβασης AI στην εκπαίδευση</a>, <a href="/aied/concepts/educational-measurement/">εκπαιδευτική μέτρηση</a>, <a href="/aied/concepts/learning-gains/">μέτρηση της μαθησιακής προόδου</a> και <a href="/aied/concepts/limitations-in-aied-research/">διακλαδικοί περιορισμοί αυτής της βάσης αποδείξεων</a>.`,
    },
  ],
  statsHeading: 'Τι περιέχει η βάση γνώσεων',
  statsIntro:
    'Κάθε σελίδα φέρει ημερομηνία, και οι αριθμοί παρακάτω αντικατοπτρίζουν ό,τι έχει δημοσιευτεί αυτή τη στιγμή· η ημερομηνία «τελευταίας ενημέρωσης» στο τέλος της λίστας είναι η πιο πρόσφατη επεξεργασία.',
  conceptMap: {
    title: 'Χάρτης εννοιών της Τεχνητής Νοημοσύνης στην Εκπαίδευση',
    desc:
      'Ένας ακτινικός χάρτης με την Τεχνητή Νοημοσύνη στην Εκπαίδευση στο κέντρο, συνδεδεμένη με δώδεκα έννοιες ανώτατου επιπέδου: ' +
      'Μοντελοποίηση, Μάθηση, Ισότητα, Ανατροφοδότηση, Γραμματισμός AI, Αξιολόγηση, Γνωστικά πεδία, Παιδαγωγική, ' +
      'Ηθική, Τεχνολογίες, Αξιολόγηση και Έρευνα.',
    navLabel: 'Έννοιες της Τεχνητής Νοημοσύνης στην Εκπαίδευση',
    center: 'Τεχνητή Νοημοσύνη στην Εκπαίδευση',
    nodes: {
      'student-modeling': 'Μοντελοποίηση',
      'learning-theories': 'Μάθηση',
      'equity-in-ai-education': 'Ισότητα',
      feedback: 'Ανατροφοδότηση',
      'ai-literacy': 'Γραμματισμός AI',
      assessment: 'Αξιολόγηση',
      'discipline-specific-aied': 'Γνωστικά πεδία',
      pedagogy: 'Παιδαγωγική',
      ethics: 'Ηθική',
      'ai-technologies': 'Τεχνολογίες',
      'ai-ed-evaluation': 'Αξιολόγηση',
      'research-methods-aied': 'Έρευνα',
    },
  },
  toc: [
    { text: 'Πλοήγηση στον ιστότοπο', slug: 'navigating-the-site', depth: 2 },
    { text: 'Συζήτηση με τη βάση γνώσεων', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Προτεινόμενα σημεία εκκίνησης ανά κοινό', slug: 'starting-points', depth: 2 },
    { text: 'Βασικές έννοιες', slug: 'essential-concepts', depth: 3 },
    { text: 'Εκπαιδευτικοί', slug: 'instructors', depth: 3 },
    { text: 'Προγραμματιστές', slug: 'developers', depth: 3 },
    { text: 'Διαχειριστές', slug: 'administrators', depth: 3 },
    { text: 'Ερευνητές', slug: 'researchers', depth: 3 },
    { text: 'Τι περιέχει η βάση γνώσεων', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default el;
