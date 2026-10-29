---
title: "Come evito che gli studenti dipendano troppo dall'IA?"
created: "2026-10-14T21:55:00-04:00"
weight: 80
type: faq
connected_faqs: [study-with-ai, verify-ai-output, asynchronous-online-courses-ai, ai-disabled-neurodivergent-learners]
foundations: [cognitive-offloading, reducing-ai-misuse]
pedagogy: [desirable-difficulties, help-seeking, metacognition, self-regulated-learning]
methods: [mixed-methods-research]
ethics: [trust-calibration]
research_method: [literature review, experiment]
audience: [instructors, instructional designers]
level: [higher ed, secondary, k 12]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: "faqs/reducing-over-reliance"
source_updated: "2026-10-28T11:14:24-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Uno studente prende il massimo nella serie di esercizi da fare a casa e lascia metà esame in bianco. Qualcuno consegna una relazione di laboratorio che non sa spiegarti, o un blocco di codice che non sa commentare riga per riga. Un collega vuole vietare lo strumento nel corso del primo anno e tu stai soppesando quanto questo costi agli studenti che ci si appoggiano di più.

Il punto: la dipendenza eccessiva è soprattutto un problema di collocazione. I disegni che la riducono mettono il tentativo dello studente prima dello strumento, configurano l'IA perché dia indizi invece di rispondere, rendono il controllo un elaborato richiesto e mantengono un momento valutato in cui lo strumento è assente.

## La versione breve

**1.** Metti le idee, l'ipotesi o la bozza dello studente davanti allo strumento prima che si apra.

**2.** Configura l'IA perché dia indizi, faccia domande e mostri esempi ovunque la competenza bersaglio sia ciò che valuti.

**3.** Rendi la verifica un elaborato con una sua riga nella consegna.

**4.** Tieni il momento valutato senza strumento, e confronta il lavoro assistito con quello.

**5.** Temporizza il prompt di riflessione sulla fase del compito che può ancora cambiare.

**6.** Guarda chi lascia indietro il tuo disegno, per conoscenza pregressa e non per media.

## Decidi se hai un problema o solo un uso intenso

Lo scaricamento cognitivo è il trasferimento di una richiesta cognitiva a uno strumento esterno, che libera risorse mentali limitate per altro lavoro. [[cognitive-offloading-metacognitive-review-2026|Guo e Ye (2026)]] esaminano il costrutto attraverso il modello dinamico della [[metacognition|metacognizione]] di Nelson e Naren, in cui il monitoraggio della difficoltà guida la decisione di scaricare su una strategia interna o esterna. Lo scaricamento è una scelta di [[self-regulated-learning|autoregolazione]], e il guasto di cui preoccuparsi è la [[trust-calibration|calibrazione errata]]; il volume da solo dice poco.

[[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] modella l'affidamento come tre azioni: risolvere da soli, accettare la risposta dell'IA senza verificarla, oppure usarla e verificarla. La calibrazione fallisce in entrambe le direzioni. La dipendenza eccessiva è accettare un output sbagliato, e la dipendenza insufficiente è scartare un'IA utile dopo che ha sbagliato. La dipendenza eccessiva collettiva è una popolazione che ha abbandonato la verifica, e poiché la dipendenza eccessiva grezza diverge dal rimpianto, un uso intenso è compatibile con buoni esiti. Lo studente che controlla ogni risposta dell'IA sui tuoi materiali non è il tuo problema. Quello che consegna la prima bozza di un modello sì.

[[lodge-loble-cognitive-offloading-2026|Lodge e Loble (2026)]] descrivono il meccanismo come «fluidità a richiesta»: un output coerente e sicuro di sé che aggira le [[desirable-difficulties|difficoltà desiderabili]] del recupero, dell'elaborazione e della generazione attraverso cui la conoscenza si consolida. Il loro paradosso della prestazione è che il lavoro assistito sembra fluido e gli studenti vanno bene sul momento trattenendo meno, cosa che chiamano illusione di competenza. Indicano la pigrizia metacognitiva (sulla scia di Fan et al. 2024), in cui la comodità permette agli studenti di abdicare ai processi autoregolativi che devono sviluppare.

Distinguerli nel tuo corso richiede un confronto, non un numero. Cerca lavoro migliore di quello precedente dello studente e peggiore della sua spiegazione: una serie di esercizi forte seguita da un esame debole, una relazione rifinita che lo studente non sa discutere, una risposta corretta che non sa riprodurre su un problema simile. Nessun singolo schema dimostra nulla. Due o tre insieme giustificano un cambio di disegno.

Gran parte di ciò che puoi misurare qui sono [[self-report-measures|autodichiarazioni]]. [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] ha intervistato 666 partecipanti britannici con 50 interviste e ha trovato l'uso dell'IA correlato negativamente con il [[critical-thinking|pensiero critico]] (r = -0,68), con lo scaricamento che media parzialmente (effetto totale b = -0,42; indiretto b = -0,25). [[genai-over-reliance-learning-2026|Gao, Sun e Khan (2026)]] hanno usato dati di indagine a tre ondate sfasate nel tempo su 623 studenti cinesi più interviste a docenti e hanno trovato che un uso efficace dell'IA alza la prestazione di apprendimento sostenibile e la dipendenza eccessiva allo stesso tempo. Entrambi i disegni sono correlazionali, e entrambi lo dicono.

Gli strumenti comportamentali sono più sottili. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE (Alam, 2026)]] è un autocheck solo per browser senza prove di affidabilità o validità, e i suoi autori avvertono sulla validità degli item. Gli item registrano quando e quanto spesso l'IA entra in un flusso di lavoro, non se il ragionamento dello studente è rimasto attivo, quindi uno studente che fa da impalcatura a se stesso deliberatamente con l'IA finirà per risultare onestamente come uno che scarica. PAUSE cita anche l'Offloading Score di Padmakumar et al. (2026), che stima la frazione di sforzo scaricata da log comportamentali (n = 40 sviluppatori). Quello che vuoi sapere è cosa lo studente sa fare senza aiuto.

## Metti il tentativo dello studente davanti allo strumento

La sequenza testata più chiara è «prima pensa, poi ChatGPT». [[think-first-chatgpt-later-2026|Wong e Qiu (2026)]] hanno assegnato N = 196 studenti a lavorare in modo indipendente, a usare ChatGPT liberamente, oppure a lavorare in una condizione regolata: genera le tue idee, collabora con ChatGPT per migliorarle e valutarle, poi rifinisci e consegna in modo indipendente una soluzione. Il gruppo a uso libero ha prodotto lavoro più creativo nel compito assistito ed è tornato ai livelli umani in un compito successivo più difficile svolto senza ChatGPT. Il gruppo regolato non ha mostrato vantaggi immediati e ha superato entrambi gli altri gruppi nella creatività indipendente dopo.

I dati sui prompt spiegano il divario. Nel gruppo regolato, l'88,6% dei prompt erano collaborativi, e quello era l'unico tipo di prompt significativamente correlato con l'originalità indipendente successiva. Nel gruppo a uso libero, il 70,9% dei prompt erano non collaborativi e il 59,6% chiedeva semplicemente a ChatGPT di generare idee. Lo stesso strumento, interrogato in due modi diversi, ha prodotto due studenti diversi.

Sulla tua consegna questo diventa un'istruzione di ordine: prima le idee, le ipotesi o una bozza, poi lo strumento. Una frase in cima alla pagina basta, purché il passo successivo raccolga quello che lo studente ha scritto.

Due dettagli d'aula decidono se la sequenza tiene. Il primo è il tempo. Se la fase indipendente avviene fuori dall'aula, alcuni studenti apriranno prima lo strumento e scriveranno le idee dopo. Il secondo è la raccolta. Se da quella fase non si consegna nulla, la sequenza esiste solo sulla carta. Mezza pagina di appunti, raccolta alla fine della lezione, basta per rendere reale l'ordine.

## Configura lo strumento perché dia indizi invece di rispondere

[[brcic-effortless-trap-productive-struggle-2026|Brcic e Frljic (2026)]] riportano la versione più netta dell'argomento sulla collocazione. Un assistente IA senza protezioni ha lasciato gli studenti delle superiori circa il 17% peggiori in un esame senza aiuto rispetto ai pari che non avevano alcuno strumento. Lo stesso modello ricostruito per trattenere le risposte ha eliminato il danno, e un tutor ben progettato ha quasi raddoppiato l'apprendimento. La loro diagnosi è utilizzabile in qualsiasi corso: se lasciare entrare l'IA rende il compito privo di sforzo, lo strumento è nel posto sbagliato.

[[zohar-bloom-inzlicht-against-frictionless-ai-2026|Zohar, Bloom e Inzlicht (2026)]] danno una forma a quell'argomento. Sostengono che il legame tra sforzo e significato sia una U rovesciata, quindi l'obiettivo è un gradiente: togli gli ostacoli travolgenti e preserva le fatiche che producono comprensione e appropriazione, con l'assistenza come supplemento. Il loro argomento è un commento concettuale senza nuovi dati, e la relazione a U rovesciata poggia su un unico ancoraggio empirico senza essere quantificata, quindi nessuno può dirti dove stia l'ottimo per un dato studente.

In pratica, questo significa IA protetta a metà del compito, dove indizi, esempi svolti ed esercizi fanno il lavoro, e un controllo protetto alla fine. Trasforma anche una politica sull'uso dell'IA in una regola di collocazione per competenza, più facile da scrivere e da difendere di un elenco di divieti.

Un indizio è una domanda sul passo successivo dello studente, un esempio svolto di un problema simile, o un rimando al passaggio pertinente. Una risposta è una frase finita che lo studente può incollare. Gran parte dei chatbot generalisti produce la seconda per impostazione predefinita, in una prosa fluida che sembra aiuto, ed è per questo che la configurazione conta più delle intenzioni dello studente.

## Richiedi il controllo, e rendilo visibile

La verifica è la leva più economica con un vero supporto causale. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] ha trovato che rendere visibile la verifica innescava una contro-cascata verso una verifica quasi completa: la dipendenza eccessiva è scesa a 0,00 e il rimpianto a 0,07. Ridurre l'attrito del controllo è stata la leva più debole nello stesso modello, perché la barriera è sociale e non meccanica. Un link alla biblioteca non fa controllare un'affermazione a uno studente.

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg e colleghi (2026)]] hanno trovato che gli studenti che già lo fanno bene confrontano l'output con i materiali del corso, con i pari o con i docenti quando l'accuratezza è incerta. È un comportamento che puoi richiedere. Metti una riga nella consegna: cosa hai controllato, e contro cosa. Leggila come parte del voto, e la norma diventa visibile a tutta la classe invece che ai pochi coscienziosi.

Quella riga ti dà anche qualcosa su cui tornare. Quando uno studente scrive che ha controllato un'affermazione sul testo del corso, puoi chiedere a che pagina. Quando scrive che l'ha confrontata con un pari, puoi chiedere cosa ha detto il pari. Costa una frase. È la domanda di follow-up che fa trattare la cosa come lavoro.

La verifica ha bisogno anche di un perimetro. Controllare che un'affermazione corrisponda al testo del corso è un atto diverso dal rileggere una frase per la grammatica, e il primo è dove il modello sbaglia più spesso. Di' quale dei due chiede la riga, o otterrai una correzione di bozze.

## Dimostra un fallimento sicuro di sé

Imposta un compito la cui risposta il modello sbaglia con sicurezza, poi fai controllare alla classe quella risposta sul testo del corso. Funziona perché l'errore arriva con la stessa voce delle risposte corrette. Aggiungi le prove dopo: un assistente senza protezioni ha lasciato gli studenti circa il 17% peggiori in un esame senza aiuto, e agli studenti a cui è stato dato GPT-4 hanno risolto più problemi con lo strumento e sono andati peggio dei controlli una volta tolto (PAUSE riporta Bastani et al., 2025). La stessa fonte aggiunge che Liu et al. (2026) hanno trovato che l'assistenza riduceva la persistenza in studi controllati randomizzati (N = 1.222).

Scegli un fallimento modesto e verificabile, come una citazione che non esiste, una data sbagliata o un calcolo che non torna. Poi chiedi alla classe di scrivere la correzione e il controllo che ha usato per trovarla. Quella correzione scritta è l'elaborato, e ti dice se sanno fare il controllo senza che tu stia loro addosso.

## Tieni il momento valutato senza strumento

Il prodotto assistito è un cattivo sostituto della capacità, quindi almeno un momento valutato deve avvenire senza lo strumento. Il compito successivo senza assistenza di [[think-first-chatgpt-later-2026|Wong e Qiu (2026)]] è quella misura. Anche il loro gruppo solo umano è calato nel follow-up più difficile, il che esclude la versione semplice della soluzione: togliere lo strumento senza sostenere lo studente non è un intervento.

Alternare le modalità ha supporto. PAUSE riporta il risultato della quarta sessione di Kosmyna et al. (2025), in cui i partecipanti del gruppo solo cervello che poi hanno usato ChatGPT hanno superato gli utenti continuativi di LLM. La responsabilizzazione passa anche dalla spiegazione: Makransky et al. (2025) hanno trovato che un chatbot di tutoring che invitava gli studenti a collegare le idee e a spiegare il proprio ragionamento produceva prestazioni valutative migliori dell'insegnamento tradizionale.

Per un corso, alterna: lavoro assistito nella pratica, lavoro non assistito dove conta. Leggi il pezzo assistito come registrazione della prestazione in buone condizioni, e il pezzo non assistito come prova sull'apprendimento. Confrontarli è anche la conversazione più utile che puoi avere con uno studente che non capisce un voto.

Il vincolo è la programmazione. Un momento senza strumento richiede un'aula, un orario e un compito che ci stia dentro, quindi la versione più economica è un breve elaborato in classe agganciato a una consegna che hai già assegnato. Un esame separato è un impegno maggiore e di solito non necessario al primo tentativo.

Il pezzo non assistito guadagna anche un secondo uso: restituiscilo all'inizio dell'unità successiva, e vedete entrambi cosa è sopravvissuto alla pausa.

## Separa l'aiuto strumentale dall'aiuto esecutivo

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg, Feldman-Maggor e Wong (2026)]] hanno intervistato 20 studenti universitari di area STEM e hanno trovato un processo in quattro fasi: decidere se serve aiuto, scegliere una fonte, scegliere il tipo di aiuto e giudicare l'aiuto ricevuto. Gli studenti più solidi preferivano l'aiuto strumentale, cioè indizi e spiegazioni, a quello esecutivo, cioè soluzioni dirette. Lo stesso studio avverte che usare gli LLM per il debug o per programmare tra linguaggi diversi può aggirare la [[problem-solving|risoluzione autonoma dei problemi]] anche quando gli studenti non chiedono mai una risposta.

Questo si mappa bene sullo [[cognitive-offloading|scaricamento cognitivo]]. L'uso strumentale è lo scaricamento duplicativo che tiene quando lo strumento sparisce, perché lo studente codifica comunque il ragionamento. L'uso esecutivo è lo scaricamento sostitutivo che crolla quando il magazzino esterno viene rimosso. [[cognitive-offloading-metacognitive-review-2026|Guo e Ye (2026)]] tracciano il confine esattamente in questi termini: togli il magazzino e chi scarica in modo sostitutivo peggiora gravemente, mentre chi scarica in modo duplicativo mantiene l'accuratezza grazie alla codifica interna.

Scrivi la distinzione nella consegna. Chiedi agli studenti di etichettare ogni uso dell'IA come strumentale o esecutivo, richiedi almeno un prompt collaborativo e valuta il ragionamento che hanno aggiunto dopo la risposta. Nella condizione a uso libero di Wong e Qiu, l'impostazione predefinita è scivolata verso l'uso esecutivo senza che nessuno decidesse di scivolare.

Non tutto lo scaricamento è sospetto. PAUSE cita Hong et al. (2025), dove scaricare deliberatamente compiti di scrittura di ordine inferiore per liberare attenzione per l'analisi e la revisione ha prodotto guadagni maggiori nel pensiero critico. Il test è se la parte scaricata è la competenza che stai valutando.

Quelle etichette diagnosticano anche il tuo compito. Se gran parte di una classe riporta uso esecutivo, è la consegna a invitarlo, qualunque cosa dica la politica, e il cambio successivo appartiene al compito e non alla formulazione della regola.

## Temporizza il prompt alla fase

Il feedback che punta a una convinzione stabile funziona prima che un compito inizi. Il feedback sull'esattezza immediata e sulla difficoltà funziona durante. [[cognitive-offloading-metacognitive-review-2026|Guo e Ye (2026)]] la chiamano corrispondenza tra temporizzazione e componente, e spiega perché una riflessione richiesta alla fine di un progetto cambi così poco: a quel punto le scelte sono fatte.

[[lodge-loble-cognitive-offloading-2026|Lodge e Loble (2026)]] raccomandano prompt metacognitivi integrati che fanno fermare, riflettere e valutare la propria comprensione mentre si lavora, accanto a una Load Reduction Instruction, che gestisce il carico cognitivo abilitando una progressiva indipendenza. Una previsione di un minuto prima di un'unità difficile, scritta e confrontata dopo, sta in quella finestra e non costa nulla da correggere.

La formulazione del prompt conta meno della sua posizione. Prima di un'unità, chiedi cosa lo studente si aspetta che sia difficile e perché. Durante, chiedi su quale passo è bloccato e cosa ha provato. Una riflessione a fine progetto registra soprattutto quello che è successo, ed è per questo che cambia così poco. Tieni la previsione sulla stessa pagina del lavoro, così il confronto alla fine non costa archiviazione.

## Aspettati che il rischio si concentri

[[lodge-loble-cognitive-offloading-2026|Lodge e Loble (2026)]] collocano il rischio nella conoscenza pregressa e nell'autoregolazione e nominano un **divario di equità metacognitiva**: usare bene l'IA richiede risorse che i principianti non hanno, quindi gli studenti che hanno più bisogno della pratica sono i più propensi a delegare l'apprendimento stesso. Riportano che l'80% degli studenti australiani usa già l'IA e che lo fa due terzi dei docenti del primo ciclo della secondaria (OECD 2025).

Età e abitudini correlano con lo stesso schema. [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] ha trovato che i partecipanti tra i 17 e i 25 anni mostravano maggiore dipendenza dall'IA e maggiore scaricamento e un pensiero critico più debole rispetto a quelli dai 46 anni in su, e che il titolo di studio prediceva un pensiero critico migliore a prescindere dall'uso dell'IA (r = +0,34), con un'interazione significativa che indica che il titolo attenua l'effetto negativo. [[genai-over-reliance-learning-2026|Gao, Sun e Khan (2026)]] hanno trovato che la policronicità, la tendenza al multitasking, modera il percorso, con gli studenti ad alta policronicità a rischio maggiore.

Per una sezione, questo è un argomento per guardare più da vicino gli studenti con la preparazione più debole, e per controllare se il tuo compito ha creato le condizioni in cui il controllo si ferma. Un compito impegnativo abbinato a un modello capace è la combinazione che il modello di Biswas segnala come quella con più rimpianto, ed è facile crearla per caso.

Il contesto conta quanto la persona, e il tuo corso ne controlla una parte. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] mostra che difficoltà del compito e qualità dell'IA fissano la base: la dipendenza eccessiva sale da circa 0,02 a 0,38 con la difficoltà, e sui compiti difficili corre a 0,38 con un'IA scarsa contro 0,16 con un'IA buona. Il rimpianto più alto viene da un'IA di alta qualità sui compiti difficili (0,441), perché gli agenti si affidano troppo e raramente si affidano a se stessi. La prova sociale lo amplifica: quando l'uso visibile sale da 0 a 0,6, la verifica crolla da 0,29 a 0,002. Il controllo si ferma esattamente dove il modello è più forte e il compito è più difficile, che è raramente dove un docente guarda per primo.

## Decidi quanto peso dare alle prove

Niente in questo corpus verifica se uno specifico intervento sulla dipendenza eccessiva tenga in contesti o semestri diversi. Il «prima pensa» poggia su un esperimento con N = 196. Il risultato sul trattenere le risposte viene dalla sintesi di [[brcic-effortless-trap-productive-struggle-2026|Brcic e Frljic (2026)]] e non da una prova autonoma. L'argomento sull'attrito è un commento concettuale senza nuovi dati. [[ai-overreliance-complex-adaptive-system-2026|Biswas (2026)]] dichiara i limiti del modello: qualità dell'IA esogena e stazionaria, rete fissa, verifica stilizzata. Stimare i valori reali richiederebbe tracce longitudinali dei tassi di verifica per compito, della forza della prova sociale e di come la fiducia si aggiorna dopo un uso verificato rispetto a uno non verificato.

La misurazione resta l'anello più debole. Dominano i disegni basati su indagini, e sia [[gerlich-ai-tools-cognitive-offloading-critical-thinking|Gerlich (2025)]] sia [[genai-over-reliance-learning-2026|Gao, Sun e Khan (2026)]] chiedono un seguito longitudinale e sperimentale. [[pause-ai-cognitive-offloading-self-reflection-2026|PAUSE]] non ha psicometria ed è stato costruito per adulti. Se il divario di equità si possa chiudere con l'insegnamento è teorizzato e non dimostrato.

Ti resta una scommessa ragionevole, fatta a basso costo. Cambia una consegna, tieni la misura senza aiuto, e controlla se il divario tra lavoro assistito e non assistito si restringe. Non ricostruire un corso sulla forza di questi numeri.

## Cosa sbagliano i docenti su questo

**Gli studenti che la usano di più sono quelli in difficoltà.** La frequenza è ciò che le indagini catturano e che le dashboard mostrano, e non è il costrutto. Uno studente che controlla ogni risposta e cita i tuoi materiali può usare l'IA ogni giorno e stare bene. Uno studente che consegna il primo output una volta a settimana ha il problema.

**Un divieto elimina il rischio.** I risultati più solidi qui vengono dalla collocazione, e anche il braccio solo umano dell'esperimento di Wong e Qiu è calato nel follow-up più difficile. Togliere lo strumento senza sostenere lo studente lascia la difficoltà dov'era.

**Un controllo più economico risolverà la verifica.** Rendere il controllo più facile è stata la leva più debole nel modello di Biswas, perché l'ostacolo è sociale. Un rilevatore di plagio migliore non fa leggere la fonte a uno studente.

**Una dashboard d'uso mi dice chi sta scaricando.** Gli item di PAUSE registrano quando e quanto spesso l'IA entra in un flusso di lavoro, e gli autori segnalano da soli il problema di validità. Chi fa da impalcatura con cura risulta come uno che scarica, quindi agire su quei numeri punisce gli studenti che vuoi tenere.

**Fluidità e soddisfazione mostrano che il disegno funziona.** È l'illusione che [[lodge-loble-cognitive-offloading-2026|Lodge e Loble (2026)]] descrivono nel loro paradosso della prestazione: il lavoro sembra fluido e gli studenti vanno bene sul momento trattenendo meno. La prestazione senza aiuto e il [[transfer-of-learning|trasferimento]] ritardato sono le misure che rispondono alla domanda.

**Basta insegnare l'alfabetizzazione all'IA agli studenti e il problema sparisce.** [[lodge-loble-cognitive-offloading-2026|Lodge e Loble (2026)]] avvertono che investire troppo in un'alfabetizzazione all'IA rivolta agli studenti può essere l'allocazione sbagliata, dato ciò che ai principianti manca.

## Cosa ti tornerà indietro

**«È solo buona didattica con un nome nuovo.»** In parte. Impalcatura, feedback formativo e fatica produttiva sono idee vecchie. Ciò che è più nuovo è l'ordine: la verifica visibile ha battuto la verifica più economica, e i due momenti da proteggere sono il primo tentativo difficile e il controllo finale senza aiuto. Fai le cose familiari nel nuovo ordine.

**«Non posso controllarli tutti.»** Non puoi, e le prove dicono di non provarci. È la collocazione che ha prodotto il risultato più solido. Progetta il compito in modo che usare lo strumento nel momento sbagliato si veda nel lavoro stesso, come una risposta che lo studente non sa spiegare o un passaggio di verifica che manca.

**«Il mio corso è troppo grande per un'unità sequenziata.»** Le leve economiche scalano: una riga di verifica, una previsione di un minuto e lo spostamento del controllo valutato in un'aula senza IA. La voce costosa, un'unità «prima pensa» completamente sequenziata, può partire da una sola consegna. Rigenera una serie di esercizi in metà assistita e metà non assistita e guarda cosa ti dice il divario.

**«I miei studenti sono principianti. Hanno bisogno dell'aiuto.»** Hanno più bisogno di indizi che di risposte, e il risultato sull'equità è il motivo. Gli studenti con meno conoscenza pregressa sono i più propensi a delegare il ragionamento, e uno strumento che trattiene le risposte tiene la pratica dove deve stare.

**«Gli studenti più deboli non falliranno e basta il controllo senza aiuto?»** A volte sì, e quel risultato è informazione e non verdetto. Un controllo senza strumento che gran parte della classe fallisce dice che era la pratica a portare la prestazione, ed è la cosa che ti serviva sapere. Pesalo come prova, rinsegna ciò che mette in luce, e offri un secondo tentativo su un compito parallelo. Nessuno studio qui verifica se rinsegnare dopo un controllo senza aiuto fallito recuperi l'apprendimento, quindi quella parte è il tuo giudizio professionale.

**«Alcuni miei studenti usano l'IA come impalcatura onesta. Dovrei fermarli?»** No. Uno studente che legge un indizio, prova il passo e controlla il risultato sta facendo lo scaricamento duplicativo che sopravvive alla rimozione dello strumento. Quello che vuoi è un compito che tenga disponibile quell'uso e renda meno remunerativa la versione esecutiva, e questo dipende da cosa il compito raccoglie e da cosa premia la rubrica.

**«Le prove sono sottili, quindi perché cambiare qualcosa?»** Sono sottili in punti specifici, che i limiti sopra nominano. Ciò che è coerente tra gli studi è la direzione: collocazione, controllo visibile e una misura senza aiuto. Una consegna cambiata, con il risultato non assistito conservato, è una scommessa abbastanza piccola da fare su quella base.

## Cosa fare questa settimana

**1.** Aggiungi una riga di verifica alla prossima consegna: una frase che nomina cosa lo studente ha controllato e contro cosa.

**2.** Sposta il controllo valutato in un momento senza strumento, e valuta quello.

**3.** Metti il primo tentativo difficile prima dello strumento, e raccogli le idee, l'ipotesi o la bozza che ne escono.

**4.** Cambia l'impostazione dello strumento che consigli perché dia indizi invece di rispondere, e di' agli studenti che l'hai fatto.

**5.** Fai un fallimento sicuro di sé dell'IA dal vivo, fai trovare agli studenti l'errore sul testo del corso, e conserva la correzione che hanno scritto.

## Dove andare adesso

La domanda vicina, se l'IA produca apprendimento, è trattata in [[does-ai-help-students-learn]]. [[reduce-ai-cheating]] tratta l'integrità e i limiti del rilevamento, e [[redesign-assessment-ai-era]] copre l'architettura della valutazione che questa pagina dà per scontata. Per le idee di fondo, vedi [[cognitive-offloading]], [[metacognition]] e [[desirable-difficulties]].
