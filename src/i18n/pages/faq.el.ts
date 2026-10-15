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
}

const el: FaqStrings = {
  title: 'Συχνές ερωτήσεις',
  h1: 'Συχνές ερωτήσεις',
  introHtml:
    'Αυτή η ενότητα απαντά σε συνήθεις ερωτήσεις σχετικά με την <strong>Τεχνητή Νοημοσύνη στην εκπαίδευση</strong> — τι λέει η έρευνα για τον τρόπο που η AI επηρεάζει τη διδασκαλία και τη μάθηση, και πώς εκπαιδευτικοί, διδάσκοντες και σχεδιαστές διδασκαλίας μπορούν να θέσουν αυτές τις αποδείξεις στην πράξη. Κάθε απάντηση συμπυκνώνει ευρήματα από την έρευνα που συνοψίζεται σε όλη αυτήν τη βάση γνώσεων, συνδέοντας την ερώτηση με τις σχετικές έννοιες και άρθρα για βαθύτερη μελέτη.',
  assistantHtml:
    'Έχετε μια ερώτηση που δεν απαντάται εδώ; Ρωτήστε τον δικό σας βοηθό AI χρησιμοποιώντας τη σελίδα <a href="/aied/ai">Χρήση αυτής της βάσης γνώσεων με τον δικό σας βοηθό AI</a>, η οποία δείχνει πώς να κατευθύνετε έναν πράκτορα στον πλήρη κατάλογο για τεκμηριωμένες απαντήσεις με παραπομπές.',
  empty: 'Δεν υπάρχουν ακόμη συχνές ερωτήσεις.',
};

export default el;
