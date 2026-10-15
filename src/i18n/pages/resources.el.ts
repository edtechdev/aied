/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const el: ResourcesStrings = {
  title: 'Πόροι',
  h1: 'Δωρεάν εργαλεία και πόροι',
  introHtml: [
    'Μια επιμελημένη συλλογή από <strong>δωρεάν εργαλεία, συλλογές, εργαλεία μέτρησης και μορφότυπα</strong> για την τεχνητή νοημοσύνη στην εκπαίδευση — πράγματα που μπορείτε να πάτε και να χρησιμοποιήσετε σήμερα, παρά έρευνα που πρέπει πρώτα να διαβάσετε. Έχουν κατασκευαστεί κυρίως από εκπαιδευτικούς, σχεδιαστές διδασκαλίας, βιβλιοθηκονόμους και ερευνητές, και πολλά αναπτύχθηκαν με τη βοήθεια της AI από ανθρώπους που δεν είναι επαγγελματίες προγραμματιστές.',
    'Δεν είναι όλα διαδραστικά. Μαζί με εργαλεία περιήγησης και εκπαιδευτικούς βοηθούς AI θα βρείτε βιβλιοθήκες έτοιμων prompt και «gems», συλλογές δραστηριοτήτων τάξης, έγγραφα ενημέρωσης και πολιτικής, εργαλεία μέτρησης αξιολόγησης και ανοιχτές μορφές αρχείων. Κάθε καταχώριση είναι μια σύντομη σύνοψη που συνδέεται με μια σελίδα η οποία αναφέρει ποιος τη δημιούργησε, τι είδους πράγμα είναι, εάν ο πηγαίος κώδικας είναι διαθέσιμος, πόσο κοστίζει η χρήση της και πότε ελέγχθηκε τελευταία ο σύνδεσμός της.',
    'Κάθε καταχώριση οδηγεί σε εξωτερικό ιστότοπο που αυτή η βάση γνώσεων δεν ελέγχει, και οι σύνδεσμοι επανελέγχονται περιοδικά — κάθε σελίδα εμφανίζει την ημερομηνία τελευταίας επιβεβαίωσης του συνδέσμου της. Εάν ένα εργαλείο έχει μετακινηθεί, έχει κλείσει ή αξίζει να βρίσκεται εδώ και λείπει, η ταχύτερη οδός είναι να ανοίξετε ένα issue στο αποθετήριο.',
  ],
  empty: 'Δεν υπάρχουν ακόμη πόροι.',
  groupLabels: {
    software: 'Λογισμικό',
    'ai tutor': 'Εκπαιδευτικοί βοηθοί AI',
    'agent skill': 'Δεξιότητες πράκτορα',
    'prompt or gem library': 'Βιβλιοθήκες prompt και gems',
    'collection of tools': 'Συλλογές εργαλείων',
    'collection of activities': 'Συλλογές δραστηριοτήτων',
    'assessment instrument': 'Εργαλεία μέτρησης αξιολόγησης',
    'open format or specification': 'Ανοιχτές μορφές και προδιαγραφές',
    'ebook or guide': 'Ηλεκτρονικά βιβλία και οδηγοί',
    'case study collection': 'Συλλογές μελετών περίπτωσης',
    'dataset or benchmark': 'Σύνολα δεδομένων και σημεία αναφοράς',
  },
};

export default el;
