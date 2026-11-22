---
title: Psicologia dello sviluppo
created: "2026-11-22T11:00:00-05:00"
updated: "2026-11-22T11:00:00-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [research-methods-aied]
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-22"
    agent: hermes-agent
translation_of: concepts/developmental-psychology
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua."
connected_concepts: [cognitive-psychology, early-childhood-elementary-ai-education, parents-and-families, metacognition, executive-function, self-regulated-learning, scaffolding, cognitive-offloading, well-being, creativity, ai-literacy, longitudinal-research, research-methods-aied]
connected_articles: [guo-ai-literacy-developmental-paces-2026, ai-toys-child-development-2026, clara-developmental-appropriateness-children-stories-2026, niu-genai-children-creative-thinking-cognitive-development-review-2026, vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026, genai-reliance-executive-functioning-2026, horowitz-kraus-children-chatgpt-cognitive-control-2026, adolescent-chatbot-self-disclosure-help-seeking-2026, ai-connectedness-adolescent-mental-health-2026, ai-play-framework-early-childhood-2026, age-tiered-ai-literacy-guidebooks-2026, preservice-early-childhood-genai-magnetism-2026, pergantis-chatbots-executive-functions-systematic-review-2025, sharma-chatgpt-dependency-executive-dysfunction-stress-2026]
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Psicologia dello sviluppo** — lo studio di come le capacità cognitive, linguistiche, sociali, emotive e motivazionali cambiano con l'età, e dei vincoli che tali cambiamenti impongono su ciò che un apprendente può fare e su quali sostegni ha bisogno. Nell'[[ai-education|IA nell'educazione]] fornisce la domanda dietro ogni affermazione sull'età: non "funziona questo strumento", ma "funziona per una mente in questa fase, che sta facendo questa particolare cosa". Spiega perché lo stesso strumento di [[generative-ai|IA generativa]] è un ragionevole aiuto allo studio per un ventenne e un rischio evolutivo per un bambino di sette anni, e serve a segnare dove tali affermazioni poggiano su un'ipotesi prima che su un esito misurato.

## Domande da considerare

- Due apprendenti usano lo stesso chatbot per lo stesso compito. Cosa vorrebbe la psicologia dello sviluppo che controllassi prima di dire che l'interazione è appropriata: l'età da sola, o qualcosa di più specifico?
- "Adatto all'età" si usa continuamente nelle linee guida sull'IA. Quali prove ti servirebbero prima di accettare quella etichetta, e su cosa si regge invece di solito?
- La funzione esecutiva, la [[metacognition|metacognizione]] e l'[[self-regulated-learning|autoregolazione]] si sviluppano in modo ineguale. Se uno strumento regola al posto dell'apprendente, quale capacità viene sostenuta e quale spostata?
- La maggior parte degli studi qui riportati misura gli apprendenti una volta sola. Cosa può dire una singola misurazione sullo sviluppo, e cosa non può?
- Il gioco è un medium evolutivo, non una pausa dall'apprendimento. Quando un giocattolo IA prende in carico la narrazione, cosa sta ancora esercitando il bambino?
- L'adolescenza viene descritta sia come finestra di rischio sia come opportunità di progettazione. Quale delle due sustiene l'evidenza?

## Introduzione

La psicologia dello sviluppo si trova sotto diversi concetti vicini senza essere nessuno di essi. La [[cognitive-psychology|psicologia cognitiva]] spiega i meccanismi (memoria di lavoro, carico, bias, recupero) ma non dice nulla su come quei meccanismi cambino con l'età. L'[[early-childhood-elementary-ai-education|educazione della prima infanzia]] è una pagina di livello: copre la scuola dell'infanzia e la primaria come contesti, e la sua nota di ambito dice esplicitamente che le sue preoccupazioni sono specificamente evolutive senza fornire la descrizione evolutiva. I [[parents-and-families|genitori e le famiglie]] coprono la casa come contesto. Ciò che nessuno di essi fa è trattare lo sviluppo stesso come quadro esplicativo: la ragione per cui una progettazione adatta a una fascia d'età fallisce in un'altra, e la ragione per cui le affermazioni sugli effetti a lungo termine su una mente in sviluppo sono così difficili da avanzare.

Quel quadro conta di più nell'educazione con l'IA che nella maggior parte dei campi, perché gli strumenti di IA vengono tipicamente valutati su adulti e poi diffusi verso il basso. Un chatbot testato con undergraduate arriva a un dodicenne attraverso una licenza scolastica; un'app di generazione di storie pensata per i primi lettori arriva in classe; i giocattoli IA entrano nel gioco prima che qualcuno si chieda cosa fanno al gioco. Le revisioni continuano a giungere alla stessa conclusione da direzioni diverse: l'evidenza evolutiva è sottile, i meccanismi sono plausibili e le linee guida si scrivono prima della ricerca.

## Stadi e capacità come vincoli di progettazione

L'uso più concreto della psicologia dello sviluppo in questo campo è come vincolo sulla progettazione, non come etichetta sugli apprendenti. CLARA, un sistema costruito all'Università di Auckland, si rifiuta di predire direttamente l'età di un bambino. Scompone una storia in domande cognitive, linguistiche e socio-emotive usando una tassonomia evolutiva di 122 etichette, poi aggrega le etichette attivate in una stima dello stadio di sviluppo. La scelta progettuale è l'argomento: ciò che rende un testo adatto non è un numero, ma le domande specifiche che pone su capacità specifiche.

Le risorse a fasce d'età fanno lo stesso punto dal lato del curriculum. Il Taiwan AI Learning Application Guidebook fu costruito in due edizioni: una per apprendenti di 9–12 anni con attività impalcate, basate su piattaforme e non generative, e un'edizione avanzata per i 13–18enni con applicazioni autentiche, ragionamento etico e uso supervisionato dell'IA generativa. La suddivisione in fasce è evolutiva nella sostanza, non solo nella difficoltà: l'edizione più giovane evita gli strumenti generativi invece di semplificarli.

Il rischio di tutti questi schemi è che le fasce diventino proxy grossolani. Un bambino di cinque anni e uno di quindici differiscono per molto più della distanza tra due etichette d'età, e un'unica fascia può contenere bambini le cui capacità divergono di anni.

## La funzione esecutiva come costrutto operativo

Lì dove l'evidenza diventa specifica sul meccanismo, di solito approda sulla funzione esecutiva: i processi che pianificano, inibiscono, cambiano e mantengono l'informazione abbastanza a lungo per usarla. La domanda evolutiva è quali di questi processi uno strumento sostenuto, e se il sostegno sopravvive allo strumento. La separazione tra compensazione, impalcatura e sviluppo di Vasileiou e colleghi è la formulazione più netta della distinzione, e la descrizione di Klarin sulla dipendenza adolescenziale nomina la modalità di fallimento: le capacità che vengono spostate sono ancora in formazione. Il costrutto, la sua misurazione e l'evidenza sulla dipendenza hanno ora una pagina propria, la [[executive-function|funzione esecutiva]].

## L'adolescenza come caso distinto

L'adolescenza ha un trattamento proprio perché le capacità in questione sono sociali quanto cognitive. L'indagine di Hu e colleghi su 2.023 adolescenti negli Stati Uniti e a Hong Kong li classifica in base a ciò di cui parlano con i chatbot piuttosto che a quanto ne parlano: un orientamento strumentale verso la risoluzione dei problemi e l'informazione, un orientamento all'autorivelazione centrato su sentimenti e relazioni, e un terzo gruppo che non riporta né l'uno né l'altro. La lettura evolutiva è che la stessa tecnologia incontra un periodo in cui le relazioni tra pari e il lavoro sull'identità sono i compiti centrali, quindi uno strumento che offre un'autorivelazione illimitata e senza giudizio non è un aiuto allo studio neutro.

Il lavoro teorico di Fu e Zhao estende questo in un costrutto, la "connessione con l'intelligenza artificiale", definita come un legame percepito che è psicologicamente reale ma eticamente asimmetrico, perché la macchina può simulare reciprocità senza alcuna capacità di cura. Non riporta dati, e lo dice; il suo valore è l'avvertimento che una relazione sentita non è evidenza di un beneficio evolutivo.

## Il gioco come medium evolutivo

La letteratura sui giocattoli IA è il luogo in cui la psicologia dello sviluppo lavora di più e ha meno evidenze. La revisione di Xu, Girouard e Shi sostiene che i giocattoli abilitati dall'IA ridistribuiscono l'agenzia nel gioco: il controllo su narrazione, dialogo, relazione e informazione passa dal bambino solo all'interazione bambino-giocattolo. La ridistribuzione può vincolare il gioco quando il giocattolo lo organizza, o abilitarlo quando il giocattolo risponde come una risorsa per l'immaginazione e l'indagine guidate dal bambino. Che faccia l'uno o l'altro è una questione di progettazione e interazione, e la revisione dice esplicitamente che l'evidenza evolutiva non c'è ancora.

AI-Play, un framework unplugged basato sul gioco per la scuola materna e l'infanzia (pre-K e kindergarten), prende la strada opposta: insegna i concetti dell'IA attraverso il gioco senza mettere un dispositivo davanti al bambino, con l'argomento che il compito evolutivo a quell'età è la rappresentazione e il gioco di fantasia, non l'interazione con un sistema.

## Implicazioni per la pratica

I docenti possono leggere il profilo di domanda di uno strumento piuttosto che la fascia d'età sulla confezione. La domanda che vale la pena porre è quali capacità un compito carica: quanto testo un apprendente deve tenere in mente, a quale livello di lettura presume l'interfaccia, quanto contenuto sociale o emotivo l'interazione porta con sé. Uno strumento generativo che produce testo fluido presuppone un lettore capace di giudicarlo, e quella capacità arriva più tardi della lettura fluida.

Chi sviluppa i docenti e chi progetta il curriculum può prendere in prestito la logica della suddivisione in fasce dal guidebook taiwanese. La sua edizione più giovane mantiene le attività impalcate e non generative, e la sua edizione avanzata consente un uso generativo supervisionato con un ragionamento etico collegato. La differenza tra le edizioni è quali strumenti gli apprendenti possono usare, non quanto sono difficili i fogli di lavoro. Costruire tale distinzione in una sequenza di corsi è più difendibile che applicare una politica unica sugli strumenti a ogni anno di corso.

I dirigenti scolastici e di programma possono trattare un'affermazione di "adatto all'età" come una domanda in tre parti: quale capacità il compito richiede, in quale stadio si trova l'apprendente e quale evidenza collega le due cose. Gli studi di ricezione e la documentazione dei venditori raramente rispondono alla terza.

Il personale di supporto e le famiglie possono osservare cosa fa un giocattolo IA al gioco. Guardare chi fornisce la storia. Quando il giocattolo decide la trama, il bambino la segue; quando il giocattolo risponde all'idea del bambino, il bambino guida. Quella differenza è visibile in pochi minuti di osservazione, e a questa età conta più della copertura dei contenuti del giocattolo.

## Dove l'evidenza è sottile

Tre limiti ricorrono attraverso gli studi qui passati in rassegna.

Il primo è il disegno. La maggior parte degli studi sono indagini cross-sectional o piccoli esperimenti, misurati una volta. Possono mostrare che i gruppi d'età differiscono; non possono mostrare che l'IA ha cambiato una traiettoria evolutiva. La revisione di scoping di Niu e colleghi su IA generativa e pensiero creativo infantile ha selezionato 6.401 record e trattenuto 24 fonti di evidenza, una base piccola per un'affermazione grande, e la revisione lo riporta così. Una revisione integrativa di 118 studi sull'AI literacy nella scuola primaria e secondaria (K–12) non ha trovato alcuno studio che seguisse gli stessi apprendenti attraverso i livelli scolastici, quindi la sua progressione in quattro fasce è un ordinamento inferito da cohort diverse piuttosto che una traiettoria osservata da qualcuno ([[guo-ai-literacy-developmental-paces-2026|Guo et al., 2026]]).

Il secondo è l'attribuzione. Un guadagno di apprendimento misurato con lo strumento presente può essere prestazione assistita piuttosto che un cambiamento di capacità, ed è la stessa distinzione che separa impalcatura e sviluppo.

Il terzo è il tempo. Lo sviluppo si dispiega su anni, e gli strumenti cambiano più in fretta. Le linee guida basate sull'età della Compass Collaborative lo dicono esplicitamente: definisce le proprie voci ipotesi costruite per ragionamento abduttivo a partire dalla scienza evolutiva consolidata più la ricerca sull'IA iniziale, e afferma che un'evidenza stabile può richiedere un decennio.

## Il problema di misurazione dietro "adatto all'età"

I documenti di politica e di approvvigionamento usano "adatto all'età" come se fosse una proprietà di un prodotto. Nella ricerca è una relazione tra uno strumento, una capacità e un compito. L'approccio tassonomico di CLARA è un tentativo di rendere operativa quella relazione; le fasce del guidebook sono un altro. Nessuno dei due risolve la domanda più difficile di chi decide la sufficienza, e le revisioni che esaminano le risorse a fasce d'età valutano la ricezione (831 partecipanti nello studio di Wang, Chuang e Wu) piuttosto che l'esito evolutivo.

## Idee sbagliate comuni

- **"Adatto all'età significa un'unica etichetta d'età."** CLARA stima uno stadio a partire dalle domande che un testo pone su capacità specifiche, e le due edizioni del guidebook differiscono negli strumenti che consentono, non solo nel livello di lettura.
- **"La psicologia dello sviluppo riguarda solo i bambini piccoli."** Adolescenza e età adulta sono anch'esse periodi evolutivi; le letterature su dipendenza e autorivelazione riguardano adolescenti proprio perché quelle capacità sono ancora in formazione.
- **"Se due gruppi d'età differiscono, lo sviluppo lo spiega."** Le differenze d'età cross-sectional confondono cohort, curriculum, accesso ai dispositivi e contesto. Solo i disegni che seguono gli stessi apprendenti possono separare cambiamento e differenza.
- **"Uno strumento che sostiene la prestazione sviluppa la capacità."** Compensazione, impalcatura e sviluppo sono funzioni distinte; solo l'ultima ci si aspetta che persista quando lo strumento viene rimosso.
- **"I giocattoli IA sono materiali di gioco neutri."** L'argomento della ridistribuzione dell'agenzia dice diversamente: la reattività del giocattolo modella chi sta facendo l'immaginazione.
