---
title: Effetti differenziali tra gruppi di discenti
created: "2026-10-14T21:58:00-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-11T09:05:00-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Gli effetti differenziali tra gruppi di discenti** — ciò che la ricerca sull'[[ai-education|IA nell'educazione]] trova su come l'*uso* dell'IA e i suoi *effetti* differiscano tra tipi di discenti: gli [[special-education|studenti con disabilità]] e gli [[neurodiversity|studenti neurodivergenti]], i discenti di seconda lingua e i discenti [[multilingual-learning|multilingui]], ragazze e ragazzi, studenti minorizzati, studenti provenienti da famiglie a basso reddito, studenti rurali, studenti di prima generazione, studenti internazionali e [[adult-learning|adulti]]. Lo schema da portare via è diseguale in due direzioni insieme: alcuni filoni hanno evidenza reale (disabilità, lingua) mentre altri sono quasi vuoti (prima generazione, internazionali, rifugiati), e anche i filoni forti raramente stabiliscono che sia un *gruppo* a differire — stabiliscono che uno strumento ha aiutato o danneggiato un campione di quel gruppo, che è un'affermazione diversa. Questa pagina mappa ciò che esiste, ciò che mostra, e le ragioni metodologiche per cui una media di gruppo non è una previsione su un discente.

## Domande da considerare

- Il tuo strumento funziona per la maggior parte degli studenti della tua classe, e un sottogruppo di cinque ha faticato. Una differenza di sottogruppo di quella dimensione sarebbe rilevabile in uno studio di questo tipo — e vorresti cambiare lo strumento per l'intera classe su quella base?
- La ricerca sugli studenti con disabilità riporta effetti che variano per categoria di disabilità. Se due categorie si collocano a dimensioni dell'effetto molto diverse nella stessa [[meta-analysis-systematic-review|meta-analisi]], cosa dice questo sul trattare la "disabilità" come un unico gruppo in una decisione di design?
- Diversi studi trovano che gli strumenti di IA *non* differiscono per genere nei loro effetti, e altri lavori mostrano che il [[ai-feedback-quality|feedback dell'IA]] e la scrittura assistita dall'IA *riproducono* gli stereotipi di genere quando le persone o i prompt li veicolano. Come possono essere vere entrambe le cose allo stesso tempo?
- La maggior parte del lavoro sull'equità testa persone simulate anziché discenti reali, perché gli attributi demografici reali non sono disponibili al modello al momento dell'inferenza nella maggior parte delle implementazioni. Cosa può stabilire un audit controfattuale su persone simulate, e cosa non può?
- Rivedendo i filoni di questa pagina, quali gruppi di discenti sono effettivamente rappresentati negli studi alla base della validazione del tuo strumento — e cosa faresti riguardo a un gruppo che è assente?
- Un intervento che migliora gli esiti per tutti ma chiude un divario (aiutando di più gli studenti che erano indietro) ha una storia di equità diversa da uno che alza la media. Quando valuti un pilota, stai misurando il divario o la media?

## Introduzione

Due domande si nascondono dentro "l'IA funziona per *questo* tipo di studente?". La prima riguarda gli effetti: se uno strumento produce esiti diversi per gruppi diversi. La seconda riguarda l'uso: se gruppi diversi adottano, accedono o interagiscono con lo stesso strumento in modo diverso, il che può plasmare gli esiti senza alcun effetto differenziale. Questa pagina copre entrambe, gruppo per gruppo, e dichiara apertamente dove la letteratura si ferma.

Non è deliberatamente un duplicato delle sue vicine. [[equity-in-ai-education|Equità nell'educazione con IA]] porta il quadro normativo e strutturale — accesso, rappresentazione ed equità degli esiti, e l'argomentazione su ciò che l'IA nell'educazione *dovrebbe* fare. [[inclusive-learning|Apprendimento inclusivo]] porta il quadro di design, incluso il [[universal-design-for-learning|Universal Design for Learning]]. Il [[digital-divide|Digital Divide]] copre gli strati di accesso e competenze. [[neurodiversity]], [[special-education|Educazione speciale]], [[accessibility|Accessibilità]] e [[multilingual-learning|Apprendimento multilingue]] approfondiscono singoli gruppi. Ciò che resta per questa pagina è la mappa di evidenza cross-gruppo e la domanda di valutazione: come vengono stimati questi effetti, quali gruppi sono studiati del tutto, e cosa una scoperta a livello di gruppo ti autorizza a fare.

## Come vengono riportate le differenze di gruppo, e perché per lo più non possono

**Uno studio su un singolo gruppo non è uno studio di effetto differenziale.** La maggior parte della letteratura in quest'area misura un gruppo in assenza di un gruppo di confronto. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] hanno aggregato 29 studi (quasi-)sperimentali sull'IA per studenti con disabilità e trovato un effetto positivo medio (g di Hedges = 0,588, IC 95% [0,349, 0,826]) — senza alcun comparatore neurotipico. Questo ti dice che un intervento ha aiutato, non che abbia aiutato questo gruppo in modo diverso.

**Le analisi di sottogruppo sono di solito troppo piccole per rispondere alla domanda.** Il [[ai-tutoring-micro-rct-gcse-science-2026|micro-RCT di scienze GCSE]] è insolitamente esplicito: la sua interazione trattamento-per-status era di 0,57 punti (IC 95% da −2,25 a 3,39), con stime stratificate di g = 0,28 (IC 95% da −0,04 a 0,59) per un gruppo e g = 0,35 (IC 95% da 0,18 a 0,52) per l'altro. Un intervallo di sottogruppo che si sovrappone allo zero è una domanda per un pilota locale, non una base per una regola valida per tutta la classe.

**Gli attributi demografici sono di solito simulati.** La demografia reale dei discenti è raramente collegata agli input del modello, così gli audit forniscono persone simulate al suo posto. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto e Hovy (2026)]] hanno eseguito sei modelli instruction-tuned su tre compiti educativi in condizioni predefinite-del-modello, persona-esplicita e storia-implicita — 192.480 chiamate di inferenza — e trovato che sia le persone esplicite sia le storie di conversazione *implicite* muovono il comportamento del modello. La loro distinzione merita di essere conservata: la consapevolezza delle differenze tra discenti può essere desiderabile (aggiustare il feedback per la prima lingua di un discente), mentre la stessa sensibilità è un danno quando sposta il giudizio su lavori identici.

**Le correzioni di equità possono non generalizzare.** [[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]] hanno ridotto i divari di errore mirati a genere ed età nella stima dell'attenzione dello studente su dati di [[assessment-validity|validazione]], ma i guadagni non si sono trasferiti in modo coerente ai soggetti esclusi o alle suddivisioni ripetute a livello di soggetto.

**Le etichette di gruppo nascondono la variazione al loro interno.** Nella stessa meta-analisi sulla disabilità, gli studenti con disturbi specifici dell'apprendimento, con disabilità intellettive e dello sviluppo, o sordi mostravano un effetto maggiore (g = 0,952) degli studenti con disturbo dello spettro autistico (g = 0,368) — una differenza che gli autori riportano come non statisticamente significativa su 239 dimensioni dell'effetto provenienti da 41 campioni indipendenti. La "disabilità" non è un unico gruppo, e nemmeno il "discente di L2".

## Disabilità e neurodivergenza

Questo è il filone più profondo della base di conoscenza, e quello in cui la rendicontazione è più forte.

- **Gli effetti sono reali ma distribuiti in modo diseguale per esito.** In [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]], la [[learning-gains|performance accademica]] mostrava l'effetto maggiore (k = 80, g = 0,929), davanti alle abilità per la vita quotidiana e altre abilità (g = 0,766) e alle abilità socio-emotive (k = 144, g = 0,382). Era presente un bias di pubblicazione (test di Egger β = 2,837, p < .001); il trim-and-fill riduceva la stima aggregata a g = 0,2694, che rimaneva statisticamente significativa. Leggete l'effetto principale e quello corretto per il bias insieme.
- **Il campo si è riorganizzato attorno all'[[generative-ai|IA generativa]].** La [[assistive-tech-neurodivergent-higher-ed-review-2026|revisione di scoping sulle tecnologie assistive digitali per studenti neurodivergenti]] ha vagliato 766 record per includere 40 studi empirici, di cui 15 usavano IA generativa e 11 formati immersivi. Il filone è piccolo e recente anziché maturo.
- **Alcuni supporti dell'IA uguagliano anziché differenziare.** [[adhd-video-segmentation-computing-education|Pimenova, Begel e colleghi]] hanno segmentato i [[video-education|video didattici]] in blocchi da singola istruzione con pause fisse in uno studio within-participants (17 ADHD, 10 non-ADHD); tutti sono migliorati, e gli errori e le esitazioni dei partecipanti ADHD sono scesi alla pari con i loro coetanei non-ADHD. Questa è la forma più forte di evidenza disponibile per il [[universal-design-for-learning|Universal Design for Learning]] attraverso la trasformazione automatizzata dei contenuti: un cambiamento generale che chiude un divario, anziché una correzione mirata al gruppo.
- **Ciò che gli studenti neurodivergenti dicono di aver bisogno è spesso ordinario.** Un [[neurodivergent-computing-students|sondaggio su 24 studenti neurodivergenti di informatica e 20 coetanei neurotipici]], con quattro interviste, ha trovato un disagio significativo verso i compiti privi di struttura chiara o che portano aspettative ambigue — un accomodamento che non costa nulla da fornire.
- **Le scelte di design possono anche escludere epistemicamente.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] sostiene che i dati di addestramento anglofoni e occidentalo-centrici marginalizzano le conoscenze non egemoniche e mette la situazione dei discenti con disabilità al centro di quella critica.

## Lingua: seconda lingua, multilingue e apprendenti di inglese

Per numero di articoli questo è il filone più grande, e si divide nettamente tra effetti degli strumenti e danni degli strumenti.

- **Gli effetti degli strumenti sono promettenti e rumorosi.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang e Zou (2026)]] hanno meta-analizzato 11 studi (17 dimensioni dell'effetto, N = 595) sull'[[language-learning|apprendimento linguistico]] assistito da robot e trovato un effetto complessivo positivo (g = 0,83, IC 95% [0,46, 1,21]) con elevata eterogeneità (I² = 84,4%); dei sei moderatori testati, solo il tipo di interazione robot-discente era significativo. Una base di evidenza di queste dimensioni supporta un [[benchmark]] provvisorio, non una decisione di acquisto.
- **L'infrastruttura stessa è diseguale prima che qualsiasi strumento venga usato.** [[structural-silence-underrepresented-language-ai-2026|Roy e Roy (2026)]] documentano il divario di corpus con il bengalese come caso: sotto lo 0,5% dei contenuti web globali contro circa il 49,5% per l'inglese, nonostante i parlanti bengalese siano quasi il 4% della popolazione mondiale.
- **La lingua dell'istruzione cambia gli esiti su 294 studenti dell'istruzione superiore.** La stessa revisione riporta che i contenuti in lingua straniera producevano esiti inferiori all'istruzione in lingua madre, e che l'istruzione bilingue alla [[cs-education|programmazione]] superava l'istruzione solo in inglese.
- **I rilevatori penalizzano chi scrive in seconda lingua.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge e Mesbah (2026)]] hanno testato Turnitin e Originality su 192 testi: un rilevatore classificava correttamente 48 testi su 48 scritti da professionisti ma classificava male quattro testi su 48 di studenti EFL (91,6%). L'asimmetria è il punto — l'errore cade sul gruppo la cui scrittura è già sottoposta a scrutinio.

## Genere

La ricerca sul genere qui si divide tra se gli strumenti trattino i discenti in modo diverso, e se i discenti siano esposti a strumenti carichi di stereotipi.

- **Un design deliberatamente neutro rispetto al genere non ha mostrato differenze di genere.** Uno [[ada-female-coded-chatbot-gender-stereotypes-2026|studio quasi-sperimentale su 195 studenti di nona classe]] ha testato ADA, un [[conversational-ai|chatbot]] a codifica femminile fondato su Ada Lovelace: l'interesse situazionale cresceva per entrambi i generi senza differenza di genere nella risposta emotiva, nel carico cognitivo o nella performance accademica. Una persona-modello può essere costruita senza innescare la minaccia dello stereotipo.
- **Ma il contenuto dei prompt trasferisce il bias nel lavoro degli studenti.** Uno [[gender-bias-transfer-llm-writing|studio controllato con 123 partecipanti]] ha fatto scrivere agli studenti saggi sul piano di carriera per profili accoppiati che differivano solo per genere, in condizioni di nessuna IA, IA neutrale e IA con bias di genere; la condizione con bias trasferiva un linguaggio differenziato per genere nella scrittura degli studenti e sopprimeva l'[[agency]] femminile in modo asimmetrico. I ricercatori avevano prima confermato l'effetto su 1.600 saggi generati.
- **Lo spazio e l'inquadratura contano quanto lo strumento.** Uno [[all-girls-genai-makerspace-gender-equity-2026|studio di caso su un makerspace di IA generativa per sole ragazze]] ha trovato che le ragazze valorizzavano l'ambiente mono-genere come più sicuro e rilassato, e avverte contro la "girlification" — l'adattamento superficiale che lascia intatte le relazioni di potere.
- **La sensibilità del modello è una proprietà del modello, non una costante.** In [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]], cinque tutor da 7B a 70B sono stati sottoposti ad audit su nove livelli demografici: Qwen2.5-7B superava la soglia di bias |r| ≥ 0,10 in 7 delle 12 celle dominio-per-dimensione, mentre LLaMA-3.1-8B la superava una volta. L'addestramento specifico per pedagogia riduceva alcuni bias e ne aumentava altri.
- **Una correzione a asse singolo può lasciare un gruppo in condizioni peggiori:** gli studenti di genere diverso ricondotti a una categoria "Genere sconosciuto" avevano i tassi di veri positivi più bassi sotto ogni metodo di equità, e nessun metodo a asse singolo migliorava il loro trattamento — la variazione delle etichette di gruppo notata sopra, dentro un modello predittivo di allerta precoce anziché un tutor ([[fairness-theatre-early-warning-systems-2026|McConvey et al. (2026)]]).

## Razza, etnia e studenti minorizzati

Questo filone è piccolo per numero di articoli e forte per meccanismo, perché l'evidenza riguarda ciò che l'IA fa *con* un attributo demografico una volta che lo possiede.

- **La [[personalized-learning|personalizzazione]] è un vettore di bias.** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] mostra che gli strumenti di feedback sulla scrittura basati su [[llm]] slittano verso lodi allineate allo stereotipo e critiche trattenute quando il feedback è personalizzato con la razza, la lingua, la disabilità, il rendimento o la [[motivation|motivazione]] di uno studente — su saggi identici.
- **Lo stimolo demografico può essere implicito.** L'audit controfattuale sopra ha trovato che le storie di conversazione, non solo le persone esplicite, muovevano il comportamento di punteggio e feedback — lo stesso risultato delle [[demographic-signals-llm-student-assessment-2026|192.480 chiamate di inferenza]], e una ragione per cui una regola di disclosure sulle demografie *dichiarate* è insufficiente.
- **I divari di migrazione e lingua possono dominare.** In EduFair-Bench, il modello 70B accoppiava i maggiori divari di lingua e immigrazione con i minori divari di pedagogia, così un tutor che sembra pedagogicamente forte può essere quello più sensibile a chi lo studente sembra essere.
- **Esclusione epistemica, non solo errore:** si veda [[genai-minoritized-knowledges-disability|la marginalizzazione delle conoscenze minorizzate]] sopra.

## Status socioeconomico, geografia ed età

- **L'alfabetizzazione digitale, non l'uso dell'IA, è il mediatore.** [[ai-divide-ses-personality-primary-education-2026|Wang e colleghi (2026)]] hanno modellato dati di sondaggio e di registro nazionale su 4.497 studenti di sesta classe nei Paesi Bassi e trovato che il legame tra tratti di personalità e performance accademica passava attraverso l'alfabetizzazione digitale anziché attraverso l'intensità d'uso dell'IA, con differenze nell'alfabetizzazione digitale guidate più dalla personalità che dallo status socioeconomico — e i vantaggi di SES che operavano indipendentemente dall'impegno con l'IA. L'inquadratura classica basata solo sul SES è incompleta.
- **La geografia può essere il vincolo stringente.** Il [[arc-hubs-k12-ai-robotics-rural-2026|resoconto di ARC]] sull'educazione alla robotica e all'IA nella [[k-12]] riporta che la partecipazione rurale alla FIRST LEGO League è calata nella stagione remota del 2020 e non si è mai ripresa, mentre la partecipazione urbana gradualmente sì, e identifica la mentorship tecnica locale sostenuta — non i kit o il [[curriculum-design|curriculum]] — come il vincolo che è distribuito geograficamente.
- **Gli studenti adulti sono un caso di design a parte,** coperto da [[adult-learning|Apprendimento degli adulti]] e dal lavoro della base di conoscenza sull'andragogia anziché dagli studi K-12.
- **L'accesso condiziona ancora tutto il resto:** si vedano il [[digital-divide|Digital Divide]] e la scoperta che [[access-not-enough-ai-tutoring-2026|l'accesso al tutoring IA non è sufficiente]] senza integrazione [[pedagogy|pedagogica]].

## Contesto disciplinare

Il contesto disciplinare è un asse differenziale che la mappa gruppo-per-gruppo di questa pagina non portava ancora: lo stesso strumento può distribuire il suo beneficio in modo diseguale tra campi anziché tra demografie studentesche.

- **Uno strumento può coinvolgere una disciplina e disimpegnare un'altra.** In un quasi-esperimento di due settimane con 130 studenti universitari in team interdisciplinari misti, [[generative-ai|ChatGPT]] aumentava il coinvolgimento fisico degli [[student-engagement|studenti]] STEM e lo abbassava per gli studenti non-STEM (Q = 9,87, p < .05), e gli appunti scritti senza ChatGPT ottenevano punteggi più alti in diversità e integrazione delle idee disciplinari ([[caeai-chatgpt-interdisciplinary-stem-nonstem-2026|Zhu et al. (2026)]]).

## Dove manca l'evidenza

La scoperta onesta di questa rassegna è quanto siano sottili alcuni gruppi. Ciascuno di questi è un divario reale nella base di evidenza, non un divario in questa pagina.

- **Studenti di prima generazione:** uno studio riporta una differenza d'uso anziché un effetto. In [[student-ai-inquiry-types-cs2-2026|uno studio d'indagine su CS2]], gli studenti di generazione continuativa trattavano l'IA come un partner attivo di [[problem-solving]], mentre gli studenti di prima generazione assumevano un ruolo confermativo, orientato alla validazione, e facevano meno domande nel complesso.
- **Studenti di prima generazione: la prima stima di effetto, e va nella direzione sbagliata.** Il [[rct|trial randomizzato]] di [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] su un [[intelligent-tutoring|tutor IA]] integrato nel corso fornisce ciò che manca alla voce sopra — un differenziale misurato anziché uno schema d'uso. Nel campione completo l'effetto dell'accesso al tutor sui voti finali era di 2,87 punti (0,28 DS) più negativo per gli studenti di prima generazione, implicando −5,10 punti (−0,50 DS) per loro contro −2,23 punti (−0,22 DS) per i loro pari; il differenziale era maggiore nel campione exact-match (−3,89 punti, −0,35 DS), e gli studenti di prima generazione perdevano anche più punti di compito e visualizzazioni di pagine della piattaforma. Lo studio non riporta alcun meccanismo e la sua precisione varia per esito, ma la direzione è l'opposto della storia del divario che si restringe: gli studenti con il minimo accesso pregresso al supporto accademico hanno portato il costo misurato maggiore.
- **Studenti internazionali:** uno studio di [[mixed-methods-research|metodi misti]] (sondaggio n = 60, interviste n = 14) sul [[international-students-conversational-ai-adaptation|supporto all'adattamento interculturale]].
- **Studenti internazionali: uno schema di coinvolgimento misurato, non una stima di effetto.** Su 270 studenti internazionali di minoranza etnica in sette [[business-education|scuole di business]] del Regno Unito, l'uso dichiarato dell'[[generative-ai|IA generativa]] era associato positivamente a tutti e quattro i filoni di [[student-engagement|coinvolgimento]] — più fortemente il coinvolgimento agentico (β = 0,429) — con le condizioni facilitanti (β = 0,369) come predittore più forte dell'intenzione d'uso ([[bjet-genai-engagement-minority-ethnic-students-2026|Adekoya et al. (2026)]]).
- **Studenti dotati e ad alto rendimento:** effettivamente non studiati come gruppo in questo corpus.
- **Discenti rifugiati, immigrati e sfollati:** nessuno studio.
- **Il genere è ancora analizzato come binario** nella maggior parte del lavoro sopra, e le categorie di disabilità variano tra gli studi, così il confronto cross-studio del "medesimo" gruppo ha limiti.

## Usare questa evidenza senza sovradattare a un'etichetta di gruppo

- **Tratta le medie di gruppo come ipotesi su una popolazione, mai come previsioni su una persona.** Ogni affermazione differenziale sopra è un enunciato distribuzionale.
- **Chiediti se i tuoi discenti erano nel campione di validazione del tutto** prima di fidarti dell'inclusività dichiarata di uno strumento; i filoni sulla neurodivergenza e sulla lingua mostrano entrambi che la rappresentazione nello sviluppo è l'eccezione.
- **Preferisci i design che uguagliano dove l'evidenza lo consente.** Il risultato della segmentazione video per l'ADHD — tutti migliorano, il divario si chiude — è un obiettivo più adatto a un'aula generale di un componente aggiuntivo mirato al gruppo.
- **Sii prudente con la personalizzazione che consuma attributi demografici.** La scoperta sulle [[marked-pedagogies-linguistic-bias-writing-feedback|pedagogie marcate]] riguarda direttamente quel meccanismo, e si applica ai check-in sul [[well-being|benessere]], ai tutor [[affective-computing|affettivi]] e ai [[recommender-systems-and-learning-paths|sistemi di raccomandazione]] che profilano i discenti.
- **Testa localmente, sul gruppo che ti interessa, con un esito misurato senza lo strumento.** Si veda [[interpreting-and-applying-aied-research|Interpretare e applicare la ricerca AIEd]] per le abitudini di valutazione e [[research-methods-aied|Metodi di ricerca nell'educazione con IA]] per i design che rendono difendibile un test locale.

## Concetti collegati

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## Articoli collegati

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 studies of AI for students with disabilities: g = 0.588, and g = 0.269 after bias adjustment
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — ChatGPT benefited STEM and non-STEM students unequally in interdisciplinary learning
- [[bjet-genai-engagement-minority-ethnic-students-2026]] — GenAI use and four-strand engagement among minority ethnic international students
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 766 records to 40 studies, 15 of them generative AI
- [[adhd-video-segmentation-computing-education]] — A general design change that brought ADHD participants to parity
- [[neurodivergent-computing-students]] — 24 neurodivergent students on structure, ambiguity, and collaboration
- [[genai-minoritized-knowledges-disability]] — Epistemic marginalization in AI, with disability as the case
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0.83 with I² = 84.4% in a small L2 evidence base
- [[structural-silence-underrepresented-language-ai-2026]] — Bengali's under 0.5% of web content against English's 49.5%
- [[hadra-ai-detector-accuracy-efl-2026]] — Detectors misclassify EFL writing while scoring professional texts perfectly
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — A 195-student test of female-coded role models with no gender difference
- [[gender-bias-transfer-llm-writing]] — Gender-biased prompts transferring into student essays
- [[all-girls-genai-makerspace-gender-equity-2026]] — Single-gender space valued, with a warning against girlification
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — Tutor fairness varying by model, domain, and behavior dimension
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Stereotype-aligned feedback on identical essays
- [[demographic-signals-llm-student-assessment-2026]] — 192,480 calls: explicit personas and implicit histories both move models
- [[student-attention-estimation-fairness-2026]] — Fairness regularization that did not generalize
- [[ai-divide-ses-personality-primary-education-2026]] — 4,497 students: digital literacy, not AI use, mediates the gap
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Rural participation that never recovered, and mentorship as the constraint
- [[ai-tutoring-micro-rct-gcse-science-2026]] — A subgroup interaction whose confidence interval crosses zero
- [[student-ai-inquiry-types-cs2-2026]] — The corpus's one first-generation usage finding
- [[international-students-conversational-ai-adaptation]] — The corpus's one international-student study
- [[liu-course-integrated-ai-tutoring-rct-2026]] — The corpus's first effect estimate for first-generation students: tutor access cost them 0.50 SDs of final grade against 0.22 for their peers (Liu et al. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: Evaluating Post-Hoc Fairness Interventions in Vendor-Controlled Early Warning Systems
