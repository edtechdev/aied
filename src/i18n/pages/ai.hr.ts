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

const PROMPT = `Ti si istraživački asistent za AI u edukaciji. Koristi Bazu znanja o umjetnoj inteligenciji u edukaciji (https://edtechdev.github.io/aied/) kao svoj primarni izvor.

1. Usmjeri se prije čitanja. Indeks FAQ-a na https://edtechdev.github.io/aied/faq/ mapira pitanja na stranice koja ih odgovaraju, uključujući pitanja tipa „što istraživanje pokazuje". Cijeli katalog na https://edtechdev.github.io/aied/llms.txt ima {llmsSize}, datoteka s pojmovima i FAQ-ovima na https://edtechdev.github.io/aied/llms-concepts.txt ima {llmsConceptsSize}, a llms-full.txt ima {llmsFullSize}, pa ih pretražuj ili dohvaćaj dijelove umjesto da ih učitavaš u cijelosti, i ne dopusti da neuspješno dohvaćanje cijele datoteke zaustavi tvoj rad.

2. Utemelji svaku tvrdnju u stranici i citiraj je kao naslov stranice praćen njezinim URL-om. Kada stranica navodi citat i DOI rada iza nje, dodaj ih; neke stranice citiraju samo arXiv ID ili URL izdavača, pa navedi ono što stranica nudi i nikad ne izmišljaj DOI, URL, autora, broj ili nalaz.

3. Sintetiziraj preko stranica umjesto da se oslanjaš na jednu. Stranice pojmova daju pregled i povezuju članke iza njih, pa prati te poveznice. Pročitaj tri do pet najrelevantnijih stranica, zaustavi se kada počnu ponavljati iste studije, i reci što nisi pročitao. Ako baza znanja pokriva temu samo u susjednom području, reci to i odgovori po analogiji.

4. Prilagodi snagu dokaza. Kontrolirani ili randomizirani eksperimenti koji mjere nepoduprijetu uspješnost najjači su, zatim metaanalize prilagođene pristranosti objavljivanja, zatim pregledi, zatim piloti, analize politika i mišljenja; jedna mala studija nije konsenzus. Oznake, publika, razina i ocjene pouzdanosti nalaze se u Markdown izvoru svake stranice na https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, a ne u prikazanoj stranici, pa ako ih ne možeš provjeriti, prosudi iz toga kako članak opisuje studiju i reci da si to učinio.

5. Odgovori na razini koju pitanje traži, i na kraju preporuči najrelevantnije stranice i FAQ-ove.

Preferiraj izraz „generativni AI" pred „LLM". Baza znanja redovito se ažurira, a stranica časopisa na https://edtechdev.github.io/aied/journal/ navodi najnovije dodatke.

Primjer: „Što istraživanje kaže o AI povratnim informacijama za studentsko pisanje?" Provjeri indeks FAQ-a, pročitaj najrelevantnije stranice o pisanju i povratnim informacijama plus studije koje citiraju, zatim odgovori s citatima i poveznicama.`;

const hr: AiStrings = {
  title: 'Upotreba ove baze znanja s vlastitim AI asistentom',
  description: 'Prompt za kopiranje i lijepljenje za upotrebu Baze znanja o umjetnoj inteligenciji u edukaciji s vlastitim chatbotom ili agentom.',
  h1: 'Upotreba ove baze znanja s vlastitim AI asistentom',
  introHtml: `Usmjerite bilo koji AI chatbot ili agent na ovu bazu znanja i odgovarat će iz ovih stranica umjesto iz vlastitog pamćenja. Kopirajte prompt u nastavku, zalijepite ga u svog asistenta kao prvu poruku, a zatim postavite svoje pitanje. Dobar odgovor navodi stranice na kojima se temeljio i povezuje na njih, pa izvore možete sami provjeriti.`,
  intro2Html: `Ništa ne treba instalirati. Ako biste radije preskočili prompt, <a href="#ready-made-assistants">gotovi asistenti</a> već poznaju ovaj materijal.`,
  promptHeading: 'Prompt za kopiranje',
  promptIntro: 'Prvo zalijepite ovo, prije svog pitanja. Radi s bilo kojim chatbotom ili agentom koji može pročitati web stranicu ili primiti zalijepljeni dokument. Prompt je duži nego što okvir prikazuje; gumb kopira cijeli sadržaj.',
  copyButton: '📋 Kopiraj prompt u međuspremnik',
  copyHint: 'Zatim ga zalijepite u svog asistenta i postavite pitanje.',
  copyOk: '✅ Kopirano!',
  copyFail: '❌ Kopiranje nije uspjelo',
  promptAriaLabel: 'Prompt za kopiranje',
  promptText: PROMPT,
  howHeading: 'Kako ga upotrijebiti',
  howSteps: [
    '<strong>Kopirajte prompt</strong> gumbom iznad.',
    '<strong>Zalijepite ga u svog asistenta</strong> kao prvu poruku. Obično će odgovoriti da razumije.',
    '<strong>Postavite svoje pitanje</strong> običnim jezikom, na primjer „što istraživanje kaže o AI povratnim informacijama u velikim grupama?" ili „trebamo li koristiti detektore AI-ja?"',
    '<strong>Provjerite poveznice.</strong> Dobar odgovor navodi stranice koje je koristio. Ako dobijete samouvjerene tvrdnje bez naziva stranica, odgovorite „iz koje je to stranice?" i zamolite ga da pokuša ponovno.',
  ],
  howNoteHtml: `Ovo najbolje radi u asistentima koji mogu pregledavati web, jer ih prompt usmjerava na stranice za čitanje. Ako vaš ne može otvarati poveznice, priložite i tekst baze znanja: jednom <a href="/aied/llms-full.txt">preuzmite datoteku s punim tekstom</a>, učitajte je ili zalijepite u razgovor, i koristite prompt uz nju. To je jedna tekstualna datoteka od {llmsFullSize}. Mnogi chat proizvodi odbijaju datoteku te veličine, pa postoji i <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>, svaka stranica pojmova i FAQ-a u cijelosti, {llmsConceptsSize}. Prvo posegnite za njom: pojmovi su sinteze onoga što istraživanje pokazuje, FAQ-ovi su pitanja na koja te sinteze odgovaraju, a svaka stranica pojmova povezuje radove iza nje.`,
  techSummary: 'Tehničke napomene za alate koji žele URL umjesto prompta',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: katalog svake stranice, jedna linija za svaku, za alate koji indeksiraju stranicu prije čitanja',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: cijeli tekst baze znanja u jednoj datoteci, {llmsFullSize}',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: puni tekst stranica pojmova i FAQ-a, {llmsConceptsSize}, za alate i chatove koji odbijaju veću datoteku',
    '<a href="/aied/sitemap-index.xml">Mapa stranice</a>: adresa svake stranice',
    '<a href="/aied/rss.xml">RSS kanal</a>: nove i ažurirane stranice',
  ],
  assistantsHeading: 'Gotovi asistenti',
  assistantsIntro: 'Ako ne želite ništa postavljati, upotrijebite jednog od ovih gotovih asistenata:',
  assistants: [
    '<strong>Savjetnik za AI u edukaciji</strong>, <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> koji odgovara iz ove baze znanja. Njegove su <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">prilagođene upute</a> javne, a izrađen je iz statične kopije baze znanja, pa može zaostajati za najnovijim stranicama.',
    '<strong>NotebookLM bilježnica</strong>: <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google NotebookLM bilježnica</a> izrađena na istom materijalu, s automatski generiranim izvješćima, infografikama, podcastom, prezentacijama i <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">videom</a>.',
  ],
  corpusHeading: 'Što baza znanja sadrži',
  corpusHtml1: `Više od tisuću sažetaka istraživanja pokriva podučavanje i AI tutore, procjenu i povratne informacije, akademski integritet, AI pismenost, razvoj nastavnika i fakulteta, pravednost i pristupačnost, privatnost, politiku i upravljanje, te teme znanosti o učenju poput kognitivnog rasterećenja i motivacije učenika. Svaki sažetak završava punom citacijom i poveznicom na izvorni rad, pa vaš asistent može proslijediti referencu.`,
  corpusHtml2: `Tri vrste stranica odgovaraju na različita pitanja: stranice pojmova sažimaju ono što istraživanje kaže o jednoj ideji i povezuju studije iza nje, stranice članaka pokrivaju jedan rad po jedan, a FAQ-ovi odgovaraju na praktična pitanja nastavnika i administratora. Zatražite stranicu pojma kada želite pregled, a članke iza nje kada želite dokaze.`,
  answeredHeading: 'Pitanja na koja je već odgovoreno',
  answeredIntro: 'Mnoga pitanja koja ljudi prvo postave AI-ju ovdje su već ručno odgovorena, s priloženim istraživanjem:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Kako napisati politiku AI-ja na kolegiju i priopćiti je studentima?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Kako smanjiti varanje uz AI na svom kolegiju?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Trebamo li koristiti detektore AI-ja?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Kako bi procjena trebala biti reprojektirana za eru AI-ja?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Kako spriječiti studente da previše ovise o AI-ju?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Kako napisati i provesti institucionalnu politiku AI-ja?' },
  ],
  answeredOutroHtml: `<a href="/aied/faq/">Cijeli popis FAQ-a</a> vrijedno je pogledati prije nego što pitate, a prompt upućuje vašeg asistenta da taj popis prvo provjeri.`,
  offlineHeading: 'Čitajte bazu znanja bez interneta',
  offlineHtml: `Bazu znanja možete preuzeti i kao <a href="/aied/aied.epub">EPUB</a> ili <a href="/aied/aied.pdf">PDF</a> za čitač e-knjiga, telefon, tablet ili računalo. Ta izdanja za rad bez interneta sadrže stranice pojmova i FAQ-ove, ali ne i sažetke članaka.`,
  toc: [
    { text: 'Prompt za kopiranje', slug: 'the-prompt', depth: 2 },
    { text: 'Kako ga upotrijebiti', slug: 'how-to-use-it', depth: 2 },
    { text: 'Gotovi asistenti', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Što baza znanja sadrži', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Pitanja na koja je već odgovoreno', slug: 'already-answered', depth: 2 },
    { text: 'Čitajte bazu znanja bez interneta', slug: 'read-offline', depth: 2 },
  ],
};

export default hr;
