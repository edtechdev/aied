---
title: "Quali misure e metodi di ricerca può usare un docente per valutare gli interventi legati all'AI?"
created: "2026-10-14T21:55:00-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
translation_of: "faqs/evaluating-ai-interventions-methods"
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
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
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Hai fatto il pilot in due sezioni, hai raccolto un questionario di fine unità e tra tre settimane hai un consiglio di dipartimento in cui qualcuno ti chiederà se ha funzionato. Oppure un revisore ti ha chiesto qual era la tua condizione di confronto, e l'altra sezione ha fatto qualcosa di diverso. In un caso o nell'altro: che cosa conterebbe come evidenza, qui?

Abbina il metodo all'affermazione. Un questionario ti dice se agli studenti è piaciuta l'attività. Se hanno imparato richiede una misura di prestazione, e se il guadagno è dovuto all'IA richiede una condizione di confronto.

## La versione breve

**1.** Scrivi l'affermazione in una frase sola, con l'esito nominato. "Gli studenti che hanno usato il tutor hanno ottenuto punteggi più alti nell'esame senza assistenza" è verificabile.

**2.** Fai una baseline, l'intervento, una misura immediata e una misura successiva presa senza IA.

**3.** Descrivi la condizione di confronto con la stessa cura del trattamento, anche quando è la tua pratica attuale.

**4.** Misura separatamente la prestazione assistita e l'apprendimento indipendente, e tratta qualunque media pubblicata come un'ipotesi sulla tua classe.

## Scegli il metodo che la tua domanda può sopravvivere

La pagina [[research-methods-aied|Metodi di ricerca nell'IA in educazione]] espone cosa ti dà ciascuna opzione. Gli esperimenti randomizzati offrono l'inferenza causale più forte. I disegni quasi-sperimentali pre/post o a gruppi appaiati si adattano a classi intatte e sostengono affermazioni più deboli. Interviste [[qualitative-research|qualitative]], focus group, osservazioni e analisi di artefatti rivelano meccanismi ed esperienze inattese. I [[mixed-methods-research|metodi misti]] affiancano all'evidenza sugli esiti una spiegazione. La [[design-based-research|ricerca basata sulla progettazione]] si adatta a chi affina un intervento iterazione dopo iterazione.

L'analisi qualitativa assistita dall'IA sta in quella lista con una condizione. Riorganizza un corpus di interviste in pochi minuti, quindi la [[chain-behind-claim-warrantability-2026|giustificabilità]] conta quanto l'accuratezza: registra le riorganizzazioni documentate che permettono a chi legge di ispezionare, contestare e rivedere il percorso dai dati all'affermazione.

Un questionario è una [[self-report-measures|misura di autodichiarazione]]: giusto per gli atteggiamenti, sbagliato per l'apprendimento.

## Dai un nome alla condizione di confronto

Tre condizioni rendono interpretabile un'affermazione causale: un trattamento descritto con precisione, una condizione di confronto ben definita e una misura valida dell'apprendimento durevole. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] hanno verificato 19 confronti sull'uso di ChatGPT in educazione rispetto a quei criteri. Quattro (21%) soddisfacevano tutti e tre. Il trattamento era ben definito nel 74%, il gruppo di controllo nel 42%, l'esito qualificabile come apprendimento nel 53%.

Il modo in cui va storto è facile da riprodurre. Uno [[generative-ai|strumento generalista]] introdotto insieme ad attività nuove, feedback nuovo o un'interfaccia riprogettata confonde il mezzo con il metodo, e il risultato significativo appartiene alla riprogettazione.

## Misura gli esiti che ti interessano davvero

La sintesi [[ai-ed-evaluation|Valutazione nell'AIED]] raccomanda il guadagno di apprendimento senza assistenza, la ritenzione differita, il transfer a un compito nuovo, la qualità del ragionamento, i [[misconceptions|fraintendimenti]], la ripresa del feedback e la prestazione dei sottogruppi. Coinvolgimento, soddisfazione, log d'uso dell'IA, [[self-efficacy|fiducia in sé]] e [[technology-acceptance-model|utilità percepita]] sono misure secondarie ragionevoli e sostituti scadenti dell'apprendimento. Carico di lavoro e risparmio di tempo sono esiti di implementazione, cioè una domanda diversa.

Il minimo alla scala di una classe è una baseline, l'intervento, una misura immediata e una misura successiva senza assistenza. Aggiungi una condizione di confronto dove puoi: la pratica attuale, nessuna IA, IA senza restrizioni contro IA con impalcatura, o due progettazioni alternative. Punteggia la prestazione assistita e quella non assistita su strumenti separati, perché una rubrica sola le mescolerà.

## Leggi ogni numero come un'ipotesi

Un effetto medio preso dalla letteratura è una guida debole per una singola classe. L'[[oneill-presumed-effective-meta-analysis-2026|audit di O'Neill (2026)]] su 14 [[meta-analysis-systematic-review|meta-analisi]] ad alto impatto ha trovato che nessuna forniva una base valida per le affermazioni che ne derivavano. Il [[learning-gains|"rendimento accademico"]] aggregato mescolava punteggi dei test, motivazione, [[self-efficacy|fiducia in sé]] e atteggiamenti in un'unica stima. L'eterogeneità era estrema: l'I² andava dal 77,2% al 94,4% nelle 13 analisi che lo riportavano, e 12 di quelle stavano sopra l'80%. Tutte e 14 valutavano in modo invalido il [[limitations-in-aied-research|bias di pubblicazione]], e il 61% degli studi primari controllati a caso presentava problemi di validità. Quattro analisi riportavano la varianza tra studi, due riportavano un intervallo di previsione, ed entrambi gli intervalli includevano lo zero.

Un punteggio comodo può misurare il costrutto sbagliato. In [[zhang-platform-scores-miss-ai-teaching-agents-2026|una valutazione di otto agenti didattici basati sull'IA]], l'agente terzo nel punteggio della piattaforma era ultimo nella rubrica validata dagli esperti, perché i punteggi della piattaforma indicizzavano la prestazione dello studente durante l'interazione. Tratta una metrica da dashboard come un'ipotesi.

## Cosa sbagliano i docenti su questo

Un questionario di soddisfazione misura l'apprendimento. Misura la soddisfazione, che la sintesi Valutazione nell'AIED elenca come misura secondaria accanto agli esiti di apprendimento.

Un guadagno pre/post mostra che l'intervento ha funzionato. Mostra che i punteggi sono saliti. Se la misura contasse come apprendimento è una domanda separata, e l'audit ha trovato un esito di apprendimento qualificabile nel 53% dei confronti esaminati.

Le dimensioni dell'effetto pubblicate si trasferiscono alla mia classe. Le 14 meta-analisi di O'Neill non potevano sostenere le affermazioni costruite su di esse, ed entrambi gli intervalli di previsione riportati includevano lo zero.

Le analytics della piattaforma misurano la qualità dell'insegnamento. L'agente terzo nella classifica di Zhang era ultimo nella rubrica degli esperti.

## Cosa ti tornerà indietro

**"Abbiamo già le valutazioni di fine corso."** Misurano il corso, e arrivano dopo il semestre in cui ti serviva la risposta.

**"Un gruppo di confronto è impossibile in un corso intatto."** Confronta con la versione dello stesso compito dell'anno scorso, o con una seconda sezione, e descrivi la differenza con onestà. I disegni quasi-sperimentali sono più deboli, e restano informativi quando l'alternativa è un'affermazione senza confronto.

**"La dimensione dell'effetto nella meta-analisi è grande."** Su quale esito, nella classe di chi? Entrambi gli intervalli di previsione trovati da O'Neill includevano lo zero.

**"La nostra dashboard mostra un forte coinvolgimento."** Il coinvolgimento è una misura secondaria nella lista della sintesi Valutazione nell'AIED. Metti accanto la misura dell'apprendimento senza assistenza.

## Cosa fare questa settimana

**1.** Scrivi la tua affermazione come una frase sola e sottolinea l'esito.

**2.** Aggiungi al calendario la misura successiva senza assistenza, dopo l'intervento e non nella stessa settimana.

**3.** Scrivi un paragrafo che descrive la condizione di confronto, con lo stesso dettaglio del trattamento.

**4.** Tira fuori i numeri della piattaforma che hai già e segna ciascuno come esito di artefatto o esito di apprendimento.

**5.** Chiedi a un collega di leggere il disegno e di dire cos'altro è cambiato durante il semestre.

## Dove andare dopo

[[does-ai-help-students-learn|L'uso dell'IA aiuta davvero gli studenti a imparare?]] riassume cosa mostrano le evidenze sugli esiti, e [[research-gaps-aied|Lacune nella ricerca sull'AIED]] copre i punti in cui si assottigliano. [[checking-whether-educational-ai-works|Come sappiamo che un'IA educativa funziona correttamente?]] è la versione di questa domanda per chi costruisce o acquista un sistema.
