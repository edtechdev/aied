---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Ένα σύνολο ανοιχτού κώδικα με έντεκα δεξιότητες Claude Code που ελέγχουν ένα μάθημα απέναντι στη βάση τεκμηρίων του σχεδιασμού διδασκαλίας, χαρακτηρίζοντας κάθε σύσταση με το επίπεδο τεκμηρίωσής της."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Αυτόματη μηχανική μετάφραση αυτής της αγγλικής σελίδας, που δεν έχει ακόμη ελεγχθεί από φυσικό ομιλητή."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Αυτόματη μηχανική μετάφραση αυτής της αγγλικής σελίδας, που δεν έχει ακόμη ελεγχθεί από φυσικό ομιλητή.*

Το **idstack** είναι μια συλλογή ανοιχτού κώδικα με έντεκα δεξιότητες για [[learning-design|σχεδιασμό διδασκαλίας]] βασισμένο σε τεκμήρια, που διανέμεται ως πρόσθετο του Claude Code με μια συνοδευτική επέκταση πλαϊνού πίνακα για Chrome. Αντί να συντάσσει ένα μάθημα, οι δεξιότητες ελέγχουν ένα: ταξινομούν τους στόχους απέναντι στην αναθεωρημένη ταξινομία του Bloom, ελέγχουν την εποικοδομητική ευθυγράμμιση ανάμεσα σε στόχους, δραστηριότητες και αξιολογήσεις, επισημαίνουν προβλήματα γνωστικού φόρτου και εξετάζουν την προσβασιμότητα απέναντι στο WCAG 2.1 AA και στον Καθολικό Σχεδιασμό για τη Μάθηση. Κάθε σύσταση φέρει ένα επίπεδο τεκμηρίωσης, από T1 για μετα-αναλύσεις και τυχαιοποιημένες δοκιμές έως T5 για γνώμη ειδικών. Το έργο δηλώνει ότι οι παραπομπές του αντλούν από 108 μελέτες με κρίση από ομότιμους σε έντεκα ερευνητικούς τομείς· αυτός ο αριθμός είναι ισχυρισμός του ίδιου του έργου, και η βιβλιογραφία του δημοσιεύεται σε Markdown ώστε ένας κριτικός να μπορεί να την ελέγξει.

Τα μαθήματα εισέρχονται μέσω σύνδεσης με το Canvas API, αρχείου IMS Common Cartridge, πακέτου SCORM, εξαγωγής PDF από εργαλείο συγγραφής ή επικολλημένων εγγράφων. Ένα κοινόχρηστο manifest έργου θυμάται το μάθημα ανάμεσα σε συνεδρίες, και μια δεξιότητα αγωγού αλυσιδώνει τα στάδια σχεδιασμού παρακάμπτοντας την ολοκληρωμένη δουλειά. Οι ανασκοπήσεις αναφέρονται στα οκτώ πρότυπα Quality Matters και στο πλαίσιο Community of Inquiry, διαχωρίζοντας διδακτική, κοινωνική και γνωστική παρουσία, και μετά ταξινομούν τις συστάσεις κατά σοβαρότητα.

## Τι να ξέρετε πριν το υιοθετήσετε

Το πρόσθετο απαιτεί Claude Code και φλοιό bash για εγκατάσταση· το PowerShell και το cmd δεν μπορούν να τρέξουν το σενάριο εγκατάστασης, και συνιστάται Python 3 για τις τάσεις βαθμολογίας. Τα δεδομένα του μαθήματος μένουν στον φάκελο του έργου στον υπολογιστή του ίδιου του αναγνώστη, και τον εγκαταλείπουν μόνο μέσω μιας ενσωμάτωσης που καλεί ο χρήστης, όπως μια κλήση στο Canvas API. Η ζωντανή συμπερασματολογία της επέκτασης Chrome χρειάζεται το δικό του δωρεάν κλειδί API του Google AI Studio, αν και μια λειτουργία προσομοίωσης το επιδεικνύει χωρίς αυτό. Το έργο χαρακτηρίζεται beta στην έκδοση 3.5.1.0 και προειδοποιεί για ασυμβατότητες ανάμεσα σε δευτερεύουσες εκδόσεις, και δημοσιεύεται από τον λογαριασμό savvides στο GitHub και όχι από κατονομασμένο συγγραφέα.

## Συνδεδεμένες έννοιες
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
