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
  introHtml: `Καλώς ορίσατε στη <strong>Βάση γνώσεων για την Τεχνητή Νοημοσύνη στην Εκπαίδευση</strong> — έναν δωρεάν πόρο δημόσιου τομέα για την <a href="/aied/concepts/ai-education/">τεχνητή νοημοσύνη στην εκπαίδευση</a>, για όσους διδάσκουν, σπουδάζουν, σχεδιάζουν ή διαχειρίζονται. Συνοψίζει πρόσφατη έρευνα ανοικτής πρόσβασης σε σύντομες, δομημένες σελίδες που μπορείτε να διαβάσετε και να αξιοποιήσετε. Μια σημείωση για τον τρόπο παραγωγής της: οι σελίδες δημιουργούνται και ενημερώνονται από έναν πράκτορα AI, με συντακτική καθοδήγηση από τον δημιουργό του ιστότοπου. Κάθε ισχυρισμός ονομάζει τη δημοσίευση πίσω από τον, ώστε οι πηγές να είναι διαθέσιμες για έλεγχο.`,
  navHeading: 'Πλοήγηση στον ιστότοπο',
  navHtml: `Περιηγηθείτε στο ευρετήριο ανά θεματική ενότητα στην αριστερή πλαϊνή γραμμή για να δείτε πώς οργανώνεται ο κλάδος, ή <a href="/aied/search">αναζητήστε</a> σε όλη τη βάση γνώσεων εάν έχετε ήδη ένα θέμα στο μυαλό σας. Οι σελίδες άρθρων συμπυκνώνουν μία δημοσίευση στο σκοπό, τις μεθόδους και τα ευρήματά της, με πλήρη βιβλιογραφική αναφορά και συνδέσμους σε συναφή έργα· οι σελίδες εννοιών συγκεντρώνουν όσα λέει η έρευνα για μία ιδέα και συνδέουν τις μελέτες πίσω από αυτήν. Εάν προτιμάτε να ξεκινήσετε από μια ερώτηση, το <a href="/aied/faq">ευρετήριο συχνών ερωτήσεων</a> συγκεντρώνει εκείνες που ρωτούν πρώτα οι επισκέπτες, από την πολιτική AI ενός μαθήματος έως το αν πρέπει να χρησιμοποιούνται ανιχνευτές AI· εάν προτιμάτε να ξεκινήσετε από ένα εργαλείο, η <a href="/aied/resources">σελίδα πόρων</a> απαριθμεί δωρεάν εργαλεία, συλλογές και εργαλεία μέτρησης που μπορείτε να χρησιμοποιήσετε, αναφέροντας για καθένα ποιος το δημιούργησε και πόσο κοστίζει. Ο χάρτης εννοιών παραπάνω δείχνει τι συνδέεται με τι· η <a href="/aied/concepts/ai-education/">Τεχνητή Νοημοσύνη στην Εκπαίδευση</a> είναι η σελίδα χάρτη πίσω από αυτόν, ομαδοποιώντας τις έννοιες σε περίπου μια ντουζίνα θεματικούς κλάδους.`,
  chatHeading: 'Συζήτηση με τη βάση γνώσεων',
  chatHtml: `Ό,τι υπάρχει εδώ δημοσιεύεται επίσης σε μορφές αναγνώσιμες από μηχανές, ώστε να μπορείτε να κατευθύνετε το chatbot ή τον πράκτορα AI που προτιμάτε στη βάση γνώσεων και να λαμβάνετε απαντήσεις που την παραθέτουν ως πηγή αντί να εικάζουν — <a href="/aied/ai">τα prompts είναι εδώ</a>. Οι νέες σελίδες εμφανίζονται στο <a href="/aied/journal">ημερολόγιο</a>, που διαθέτει <a href="/aied/rss.xml">τροφοδοσία RSS</a> εάν θέλετε να παρακολουθείτε. Για ανάγνωση εκτός σύνδεσης, πάρτε το <a href="/aied/aied.epub">EPUB</a> ή το <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Προτεινόμενα σημεία εκκίνησης ανά κοινό',
  startingIntro: 'Παρακάτω παρατίθενται ορισμένες προτεινόμενες έννοιες για να ξεκινήσετε σε αυτήν τη βάση γνώσεων.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Βασικές έννοιες',
      html: `<a href="/aied/concepts/ai-literacy/">Γραμματισμός AI</a>, <a href="/aied/concepts/misconceptions/">λανθασμένες αντιλήψεις για την AI</a>, <a href="/aied/concepts/agentic-ai/">πράκτορας AI</a>, <a href="/aied/concepts/cognitive-offloading/">γνωστική εκφόρτωση</a> και <a href="/aied/concepts/interpreting-and-applying-aied-research/">πώς να ερμηνεύετε και να εφαρμόζετε αυτήν την έρευνα</a>: τι μπορούν και τι δεν μπορούν να στηρίξουν τα ευρήματα, και γιατί μία μεμονωμένη μελέτη σπάνια διευθετεί μια ερώτηση.`,
    },
    {
      id: 'instructors',
      heading: 'Εκπαιδευτικοί',
      html: `<a href="/aied/concepts/teacher-role/">Ο μεταβαλλόμενος ρόλος του εκπαιδευτικού</a>, <a href="/aied/concepts/learning-design/">σχεδιασμός μάθησης</a>, <a href="/aied/concepts/assessment/">αξιολόγηση</a>, <a href="/aied/concepts/feedback/">ανατροφοδότηση</a>, <a href="/aied/concepts/academic-integrity/">ακαδημαϊκή ακεραιότητα</a>, <a href="/aied/concepts/framing-ai-use-for-students/">εννοιολόγηση της χρήσης AI</a> και <a href="/aied/concepts/reducing-ai-misuse/">μείωση της κατάχρησης</a>. Για τα εργαλεία, τις αποδείξεις και τα παραδείγματα στο δικό σας γνωστικό πεδίο, δείτε την <a href="/aied/concepts/discipline-specific-aied/">AI στο δικό σας γνωστικό πεδίο</a>.`,
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
    'Κάθε σελίδα εδώ φέρει ημερομηνία, και η βάση γνώσεων μεγαλώνει καθώς δημοσιεύεται και αξιολογείται νέα έρευνα ανοικτής πρόσβασης. Οι αριθμοί παρακάτω διαβάζονται από το τρέχον περιεχόμενο· η ημερομηνία είναι η πιο πρόσφατη ενημέρωση σελίδας.',
  conceptMap: {
    title: 'Χάρτης εννοιών της Τεχνητής Νοημοσύνης στην Εκπαίδευση',
    desc:
      'Ένας ακτινικός χάρτης με την Τεχνητή Νοημοσύνη στην Εκπαίδευση στο κέντρο, συνδεδεμένη με δώδεκα έννοιες ανώτατου επιπέδου: ' +
      'Μοντελοποίηση, Μάθηση, Ισότητα, Ανατροφοδότηση, Γραμματισμός AI, Αξιολόγηση, Γνωστικά πεδία, Παιδαγωγική, ' +
      'Ηθική, Τεχνολογίες, Αξιολόγηση και Έρευνα. Επιλέξτε οποιονδήποτε κόμβο για να ανοίξει η σελίδα του.',
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
