---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Η έκδοση ανοιχτού κώδικα του πρακτορικού πλαισίου διδασκαλίας DeepTutor: ένας χώρος εργασίας για διδασκαλία, παραγωγή ερωτήσεων, εξάσκηση δεξιοτεχνίας, έρευνα και οπτικοποίηση, με ελεγχόμενη μνήμη μαθητή."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Αυτόματη μηχανική μετάφραση αυτής της αγγλικής σελίδας, που δεν έχει ακόμη ελεγχθεί από φυσικό ομιλητή."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Αυτόματη μηχανική μετάφραση αυτής της αγγλικής σελίδας, που δεν έχει ακόμη ελεγχθεί από φυσικό ομιλητή.*

Το **DeepTutor** είναι η υλοποίηση ανοιχτού κώδικα του πλαισίου διδασκαλίας που αξιολογείται [[intelligent-tutoring|στη μελέτη DeepTutor]], και έχει ξεπεράσει κατά πολύ το εύρος εκείνης της εργασίας, μετατρεπόμενο σε έναν γενικό χώρο μάθησης με πράκτορες. Η διδασκαλία, η επίλυση προβλημάτων, η παραγωγή κουίζ, η εξάσκηση δεξιοτεχνίας, η έρευνα και η οπτικοποίηση μοιράζονται ένα περιβάλλον εκτέλεσης δυνατοτήτων και ένα πλαίσιο συνεδρίας, ώστε το προφίλ μαθητή που χτίζεται κατά την επίλυση προβλημάτων να ρυθμίζει τις εξηγήσεις και τα στοιχεία εξάσκησης που ακολουθούν.

## Τι μπορείτε να κάνετε με αυτό

Δέκα λειτουργίες — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading και Immersive Watching — τρέχουν στο ίδιο περιβάλλον εκτέλεσης, αντλώντας από επαναχρησιμοποιήσιμες βάσεις γνώσης, βιβλία, προσχέδια, σημειωματάρια, τράπεζες ερωτήσεων και προσωπικότητες. Η ανάκτηση είναι σκόπιμα πολλαπλών μηχανών: βιβλιοθήκες RAG με εκδόσεις πάνω σε LlamaIndex, PageIndex, GraphRAG, LightRAG ή απομακρυσμένο διακομιστή LightRAG, συν μια αυτοφιλοξενούμενη βάση WeKnora, μια βιβλιοθήκη Tencent IMA ή MarginNote, ή ένα συνδεδεμένο θησαυροφυλάκιο Obsidian. Η μνήμη είναι ελεγχόμενη και όχι αδιαφανής: τα ίχνη L1, οι επιφανειακές συνόψεις L2 και η σύνθεση L3 είναι ορατά και επεξεργάσιμα, με ένα Memory Graph να συνδέει κάθε σύνοψη με τα τεκμήρια πίσω από αυτήν. Ένα δυαδικό `deeptutor` δίνει REPL τερματικού και μεταδίδει NDJSON για κάθε πράκτορα που θέλει να το οδηγήσει ως εργαλείο, και μια κοινότητα EduHub διανέμει εγκαταστάσιμες δεξιότητες.

## Σε ποιους απευθύνεται

Σε διδάσκοντες και ερευνητές τριτοβάθμιας εκπαίδευσης που θέλουν μια αναπτύξιμη εκδοχή του πλαισίου για το οποίο αναφέρει η εργασία, σε προγραμματιστές που χτίζουν πάνω σε ένα συνδεόμενο περιβάλλον εκτέλεσης, και σε αυτοκατευθυνόμενους μαθητές πρόθυμους να τρέξουν τη δική τους εγκατάσταση. Η τεκμηρίωση βρίσκεται στο deeptutor.info.

## Σημειώσεις

Με άδεια Apache 2.0, στην έκδοση 1.6.9 από τον Σεπτέμβριο του 2026 με περίπου 40.000 αστέρια στο GitHub. Η δημοσιευμένη αξιολόγηση πίσω από αυτό — μέση βελτίωση 10,8% σε εξατομικευμένες μετρήσεις έναντι ισχυρών βάσεων και 29,4% ισχυρότερη γενική πρακτορική συλλογιστική σε πέντε μοντέλα ραχοκοκαλιάς, στο σημείο αναφοράς TutorBench — συνοψίζεται [[zhao-deeptutor-agentic-personalized-tutoring-2026|στη σελίδα του άρθρου]], της οποίας οι περιορισμοί ισχύουν και εδώ. Όπως σε κάθε στοίβα ΤΝ ανοιχτού κώδικα, εσείς παρέχετε τα κλειδιά του παρόχου μοντέλων, και μια εγκατάσταση σε υπολογιστή ή διακομιστή απαιτεί Python 3.11 και Node.

## Συνδεδεμένες έννοιες
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
