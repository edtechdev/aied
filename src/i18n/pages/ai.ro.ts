/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Ești un asistent de cercetare pentru inteligența artificială în educație. Folosește Baza de cunoștințe despre inteligența artificială în educație (https://edtechdev.github.io/aied/) ca sursă principală.

1. Îndreaptă-te mai întâi spre locul potrivit, apoi citește. Indexul FAQ de la https://edtechdev.github.io/aied/faq/ mapează întrebările pe paginile care le răspund, inclusiv întrebările de tipul „ce arată cercetarea”. Catalogul complet de la https://edtechdev.github.io/aied/llms.txt are aproximativ 800 KB, fișierul cu concepte și FAQ de la https://edtechdev.github.io/aied/llms-concepts.txt are aproximativ 4 MB, iar llms-full.txt are mai multe megabyte, așa că caută în ele sau aduce fragmente în loc să le încarci integral, și nu te opri dacă o încărcare integrală eșuează.

2. Fondamentează fiecare afirmație pe o pagină și citeaz-o ca titlul paginii urmat de adresa sa URL. Când pagina oferă citarea lucrării originale și DOI-ul, adaugă-le; unele pagini citează doar un ID arXiv sau o adresă URL a editorului, așa că dă ce dă pagina și nu inventa niciodată un DOI, un URL, un autor, un număr sau o concluzie.

3. Sintetizează pe mai multe pagini în loc să te bazezi pe una singură. Paginile de concepte oferă imaginea de ansamblu și leagă articolele din spatele lor, așa că urmează acele linkuri. Citește trei până la cinci dintre cele mai relevante pagini, oprește-te când încep să repete aceleași studii și spune ce n-ai citit. Dacă baza de cunoștințe acoperă tema doar într-un domeniu învecinat, spune asta și răspunde prin analogie.

4. Potrivește puterea dovezilor cu conținutul răspunsului. Experimentele controlate sau randomizate care măsoară performanța fără asistență sunt cele mai puternice, apoi meta-analizele ajustate pentru biasul de publicare, apoi sintezele, apoi studiile-pilot, analizele de politici și opiniile; un mic studiu nu este consens. Etichetele, publicul, nivelul și ratingurile de încredere se află în sursa Markdown a fiecărei pagini la https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, nu în pagina randată, așa că dacă nu le poți verifica, judecă din felul în care articolul descrie studiul și spune că ai procedat astfel.

5. Răspunde la nivelul la care este pusă întrebarea și încheie recomandând cele mai relevante pagini și FAQ.

Preferă termenul „inteligență artificială generativă" în locul „LLM". Baza de cunoștințe este actualizată periodic, iar pagina de jurnal de la https://edtechdev.github.io/aied/journal/ listează cele mai noi adăugiri.

Exemplu: „Ce spune cercetarea despre feedback-ul oferit de AI la scrisul studenților?" Verifică indexul FAQ, citește cele mai relevante pagini despre scris și feedback plus studiile pe care le citează, apoi răspunde cu citări și linkuri.`;

const ro: AiStrings = {
  title: 'Folosește această bază de cunoștințe cu propriul asistent AI',
  description:
    'Prompt gata de copiat pentru folosirea Bazei de cunoștințe despre inteligența artificială în educație cu propriul chatbot sau agent.',
  h1: 'Folosește această bază de cunoștințe cu propriul asistent AI',
  introHtml: `Poți îndrepta chatbotul sau agentul AI preferat către această bază de cunoștințe, astfel încât să răspundă din aceste pagini de cercetare în loc să ghicească. Promptul de mai jos face exact acest lucru. Copiază-l, lipește-l în asistentul tău ca prim mesaj, apoi pune-ți întrebarea. Ar trebui să primești un răspuns care numește paginile pe care s-a bazat și leagă linkurile către ele, ca să poți verifica singur sursele.`,
  intro2Html: `Nu este nevoie de nicio configurare tehnică și nu trebuie instalat nimic. Dacă preferi să sari peste configurare, există <a href="#ready-made-assistants">asistenți gata făcuți</a> care cunosc deja acest material.`,
  promptHeading: 'Promptul de copiat',
  promptIntro:
    'Lipește acest text primul, înaintea întrebării tale. Funcționează cu orice chatbot sau agent care poate citi o pagină web sau primește un document lipit. Caseta se derulează, iar butonul copiază tot textul.',
  copyButton: '📋 Copiază promptul în clipboard',
  copyHint: 'Apoi lipește-l în asistentul tău și pune-ți întrebarea.',
  copyOk: '✅ Copiat!',
  copyFail: '❌ Copierea a eșuat',
  promptAriaLabel: 'Prompt de copiat',
  promptText: PROMPT,
  howHeading: 'Cum să-l folosești',
  howSteps: [
    '<strong>Copiază promptul</strong> cu butonul de mai sus.',
    '<strong>Lipește-l în asistentul tău</strong> ca prim mesaj și trimite-l. De obicei îți va răspunde că a înțeles.',
    '<strong>Pune întrebarea</strong> în limbaj simplu, de exemplu „ce arată cercetarea despre feedback-ul AI în clasele mari?" sau „ar trebui să folosim detectoare de AI?"',
    '<strong>Verifică linkurile.</strong> Un răspuns bun numește paginile pe care le-a folosit. Dacă primești afirmații încredințate fără nume de pagini, răspunde „din ce pagină vine asta?" și cere-i să încerce din nou.',
  ],
  howNoteHtml: `Funcționează cel mai bine în asistenții care pot naviga pe web, deoarece promptul îi îndreaptă spre pagini de citit. Dacă al tău nu poate deschide linkuri, atunci, în loc să lipești doar promptul, atașează și textul bazei de cunoștințe: <a href="/aied/llms-full.txt">descarcă o singur dată fișierul cu textul integral</a>, încarcă-l sau lipește-l în conversație și folosește promptul alături de el. Este un singur fișier text de aproximativ 15 MB. Multe produse de chat refuză un fișier de această dimensiune, așa că există și <a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — toate paginile de concepte și FAQ integral, aproximativ 4 MB — care este fișierul mai bun de la care să începi: conceptele sunt sintezele a ceea ce arată cercetarea, FAQ-urile sunt întrebările la care aceste sinteze răspund, iar fiecare pagină de concept leagă lucrările din spatele ei.`,
  techSummary: 'Note tehnice pentru instrumente care vor un URL în locul unui prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — un catalog al fiecărei pagini, câte o linie fiecare, pentru instrumentele care indexează un site înainte de a-l citi',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — textul complet al bazei de cunoștințe într-un singur fișier, aproximativ 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — textul integral al paginilor de concepte și FAQ, aproximativ 4 MB, pentru instrumente și chat-uri care refuză fișierul mai mare',
    '<a href="/aied/sitemap-index.xml">Harta site-ului</a> — adresa fiecărei pagini',
    '<a href="/aied/rss.xml">Flux RSS</a> — pagini noi și actualizate',
  ],
  assistantsHeading: 'Asistenți gata făcuți',
  assistantsIntro:
    'Dacă preferi să nu configurezi nimic, această bază de cunoștințe este disponibilă și ca asistent gata făcut:',
  assistants: [
    '<strong>Consilier pentru inteligența artificială în educație</strong> — un <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> care răspunde din această bază de cunoștințe. <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">Instrucțiunile sale personalizate</a> sunt publice, iar el a fost construit dintr-o <strong>copie statică</strong> a bazei de cunoștințe, așa că poate întârzia față de cele mai noi pagini.',
    '<strong>Caietul NotebookLM</strong> — un <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">caiet Google NotebookLM</a> construit pe același material, cu rapoarte, infografice, un podcast, slide-uri și <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">un videoclip</a> generate automat.',
  ],
  corpusHeading: 'Ce conține baza de cunoștințe',
  corpusHtml1: `Peste o mie de sinteze de cercetare acoperă tutoriatul și tutorii AI, evaluarea și feedback-ul, integritatea academică, cultura despre AI, dezvoltarea profesională a cadrelor didactice, echitatea și accesibilitatea, confidențialitatea, politica și guvernanța, precum și subiecte din știința învățării, cum ar fi descărcarea cognitivă și motivația învățăceilor. Fiecare sinteză se încheie cu citarea completă și un link către lucrarea originală, astfel încât asistentul tău poate transmite referința mai departe, iar tu o poți urmări.`,
  corpusHtml2: `Trei tipuri de pagini răspund la întrebări diferite: <strong>paginile de concepte</strong> rezumă ce spune cercetarea despre o idee și leagă studiile din spatele ei, <strong>paginile de articole</strong> acoperă câte o lucrare la rând, iar <strong>FAQ-urile</strong> răspund la întrebări practice din partea cadrelor didactice și a administratorilor. Dacă vrei o imagine de ansamblu asupra unei teme, cere o pagină de concepte; dacă vrei dovezile, cere studiile.`,
  answeredHeading: 'Întrebări la care s-a răspuns deja',
  answeredIntro:
    'Multe dintre întrebările pe care oamenii le pun mai întâi unui AI au primit deja aici răspuns, făcut de mână, cu cercetarea atașată:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Cum scriu o politică AI pentru curs și cum o comunic studenților?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Cum pot reduce trișarea cu AI la cursul meu?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Ar trebui să folosim detectoare de AI?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Cum ar trebui reproiectată evaluarea pentru era AI?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Cum îi împiedic pe studenți să depindă excesiv de AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Cum scriem și implementăm o politică AI instituțională?' },
  ],
  answeredOutroHtml: `<a href="/aied/faq/">Lista completă de FAQ</a> merită privită înainte de a întreba, iar promptul îi spune asistentului tău să verifice mai întâi acea listă.`,
  offlineHeading: 'Citește baza de cunoștințe offline',
  offlineHtml: `Poți descarca și baza de cunoștințe ca <a href="/aied/aied.epub">EPUB</a> sau <a href="/aied/aied.pdf">PDF</a> pentru un cititor de cărți electronice, telefon, tabletă sau calculator. Aceste ediții offline conțin paginile de concepte și FAQ-urile, nu cele câteva sute de sinteze de articole.`,
  toc: [
    { text: 'Promptul de copiat', slug: 'the-prompt', depth: 2 },
    { text: 'Cum să-l folosești', slug: 'how-to-use-it', depth: 2 },
    { text: 'Asistenți gata făcuți', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Ce conține baza de cunoștințe', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Întrebări la care s-a răspuns deja', slug: 'already-answered', depth: 2 },
    { text: 'Citește baza de cunoștințe offline', slug: 'read-offline', depth: 2 },
  ],
};

export default ro;
