---
title: "Analisi del profilo latente"
created: "2026-10-14T21:55:00-04:00"
type: concept
methods: [quantitative-research, research-methods-aied]
confidence: high
reviewed_by: [editor]
translation_of: concepts/latent-profile-analysis
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **L'analisi del profilo latente (LPA)** è un metodo centrato sulla persona che ripartisce un campione in sottogruppi non osservati (profili) quando ogni caso è descritto da più variabili contemporaneamente. È il membro a indicatori continui della famiglia dei modelli a mistura; il suo gemello, l'**analisi delle classi latenti (LCA)**, applica la stessa logica a indicatori categorici. Entrambi pongono una domanda diversa da quella dei modelli [[quantitative-research|centrati sulle variabili]] che dominano la ricerca sull'IA nell'educazione: non "quanto X predice Y in media", ma "quanti tipi diversi di studente, [[teacher-role|docente]] o dirigente si nascondono dentro quella media". In questa knowledge base il metodo mostra che uno stesso strumento di IA ha effetti molto diversi tra sottogruppi: cinque profili di consapevolezza etica tra studenti universitari ghanesi, sei tipologie di prontezza tra dirigenti dell'istruzione ucraini, quattro profili di accettazione dell'[[generative-ai|IA generativa]] tra insegnanti taiwanesi in formazione.

## Domande da considerare

- Uno studio riporta che il comfort medio degli studenti con l'IA è 3,8 su 5. Che cosa potrebbe nascondere quella media se un gruppo è entusiasta e un altro è silenziosamente restio?
- I modelli LPA trattano punteggi continui; gli LCA trattano categorie. Se codificate le risposte di un colloquio come "menziona il [[cognitive-offloading|sovraccarico cognitivo]]: sì/no", quale vi serve?
- Una soluzione a cinque profili riporta un'entropia di 0,816; una soluzione rivale a quattro profili ottiene 0,929 ma descrive i dati in modo meno ricco. Quale pubblichereste?
- I profili sono descrittivi, non causali. Se un profilo "Scettici restii" mostra un'alta facilità d'uso percepita ma una bassa intenzione di adozione, che cosa ciò supporta, e che cosa non supporta?

## Introduzione

La maggior parte delle evidenze sull'IA nell'educazione è centrata sulle variabili: stima relazioni medie, e le medie presuppongono omogeneità. I metodi centrati sulla persona assumono invece la persona come unità di analisi e chiedono quante configurazioni distinte di attributi esistano nel campione. La LPA appartiene a questa famiglia, e il suo vantaggio qui è che converte la diversità degli studenti da rivendicazione retorica a risultato misurabile: quando i profili di consapevolezza etica vanno dal 26,1 per cento al 4,5 per cento nonostante una media campionaria confortevole, la differenziazione smette di essere una preferenza progettuale.

## Che cosa fa il metodo, e quando è lo strumento giusto

La LPA assume che il campione sia tratto da una mistura di sottogruppi, ciascuno con proprie medie e varianze sugli indicatori. Lo studioso fornisce gli indicatori e il numero di gruppi; l'algoritmo stima per ogni caso la probabilità di appartenenza e assegna in base alla probabilità più alta, restituendo un profilo medio per gruppo, una numerosità per profilo e una sintesi di quanto nettamente i casi si separino. Quale membro della famiglia usare dipende dagli indicatori, non dalla domanda di ricerca:

- **LCA — indicatori categorici.** Becker e colleghi hanno convertito in variabili indicatrici le categorie di risposta codificate tratte dalle risposte aperte di 1.189 studenti di fisica, trattenendo due classi: Pragmatic Users (Utenti pragmatici, 70 per cento) e Skeptical Non-Users (Non utenti scettici, 30 per cento); poiché un argomento non menzionato conta come "nessun avallo", gli autori segnalano un'inflazione di zeri nel dataframe di analisi.
- **LPA — indicatori continui** come punteggi di scala e medie di costrutti. Chen e colleghi hanno profilato 128 insegnanti taiwanesi in formazione su cinque costrutti [[technology-acceptance-model|TAM]]/UTAUT2; Acquah e colleghi hanno profilato 509 studenti universitari ghanesi su tre dimensioni di consapevolezza etica; Schweder e colleghi hanno profilato 2.464 studenti sul soddisfacimento dei bisogni [[motivation|motivazionali]].
- **L'analisi della transizione (di profilo) latente** estende la famiglia nel tempo, stimando i profili per ogni ondata e la probabilità di passaggio tra essi. Liang e colleghi hanno seguito la motivazione all'apprendimento con l'IA di 2.086 studenti per un anno; Wu ha seguito 457 apprendenti di lingua giapponese su tre ondate, con il profilo disadattivo che si riduce dal 26,48 al 17,74 per cento.

L'aggregazione ordinaria ([[machine-learning|k-means]] e gerarchica) persegue la stessa intenzione centrata sulla persona, ma partiziona i casi per distanza geometrica anziché stimando un modello probabilistico. Ricorrete alla LPA o alla LCA quando la domanda riguarda i sottogruppi — se "lo studente" è una finzione al livello di aggregazione del vostro campione, e se i sottogruppi differiscono nella forma oltre che nel livello. Non ricorrete quando vi serve un effetto medio del trattamento: una soluzione a cinque profili all'interno di un [[rct|trial randomizzato]] di un [[intelligent-tutoring|tutor adattivo]] ha predetto differenze al post-test (η² parziale = 0,27) ma non ha trovato un'interazione condizione × profilo (ps ≥ 0,198).

## Come lo usa il corpus

Tre usi ricorrono.

- **Accertare l'eterogeneità prima di progettare per essa.** L'indagine di Kremen e colleghi su 395 dirigenti dell'istruzione ucraini ha usato una LCA centrata sulla persona per mostrare che "il dirigente" è una finzione: sei tipologie vanno da Competency-constrained (Vincolati dalle competenze, 25,6 per cento, disponibili ma non preparati) a Barrier-free skeptics (Scettici senza barriere: prontezza massima ma 74 per cento di diffidenza verso l'IA), e gli autori le leggono come un mandato a una formazione differenziata.
- **L'allineamento tra sistemi come controllo di stabilità.** [[teachers-ai-belief-profiles-talis-2024-2026|Fang e Jin (2026)]] hanno trattenuto quattro profili di credenze da 40.680 docenti in 49 sistemi di istruzione (Indifferent, Indifferenti, 6,13% e Measured Endorsement, Avallo misurato, 56,29%), e cambiare il riferimento di allineamento ha lasciato la concordanza di classificazione al 99,62% — mentre l'utilità ha ordinato i profili in modo identico in tutti i 49 sistemi e il rischio no.
- **Recuperare sottogruppi che una media nasconde.** Acquah e colleghi hanno trattenuto cinque profili di consapevolezza etica, da Comprehensive Very High (Molto alta complessiva, 26,1 per cento) a Low Ethical Awareness (Bassa consapevolezza etica, 4,5 per cento, beneficenza 2,06), uno spettro che va da poco più di un quarto del campione a meno di un ventesimo. Chen e colleghi hanno trovato che gli Scettici restii riportavano un'alta facilità d'uso percepita ma un'intenzione comportamentale molto bassa — la dimostrazione più chiara nel corpus che il paradosso facilità d'uso/intenzione è invisibile a un modello a livello medio.
- **Profilare la calibrazione anziché il livello.** Lo studio sull'alfabetizzazione in IA dei docenti ha applicato la LPA alla concordanza tra misure di [[self-report-measures|autovalutazione]] e misure oggettive, ottenendo sei profili: sovrastima, sottostima, allineamento, e un gruppo basso/basso concentrato tra docenti senza esperienza pregressa di [[ai-literacy|alfabetizzazione in IA]]. Qui i profili descrivono una configurazione tra strumenti, non una fascia di punteggio.

I profili servono poi come variabile indipendente: la disciplina ha plasmato l'appartenenza tra insegnanti in formazione (V di Cramér = 0,532, studenti STEM concentrati nei Technology Pioneers), e l'appartenenza ha predetto successivamente [[self-efficacy]], burnout e [[anxiety-and-stress|ansia verso l'IA]] altrove nel corpus.

## Scegliere il numero di profili

Nessuna statistica singola seleziona la soluzione; il corpus tratta la ritenzione come un giudizio formulato a partire da più criteri insieme.

- **Criteri di informazione (BIC, AIC).** Più basso è di solito meglio, ma un calo monotono segnala un problema anziché un vincitore. Nello studio sui dirigenti ucraini il BIC è calato monotonamente sull'intervallo da due a sei classi senza un minimo netto, e gli autori dichiarano la loro soluzione a sei classi esplorativa su questa evidenza.
- **Entropia.** Una sintesi della certezza di classificazione, più vicina a 1 significa assegnazione più netta. Chen e colleghi riportano 0,985 per quattro profili; Acquah e colleghi riportano 0,816 per cinque profili contro 0,929 per quattro, e suggeriscono essi stessi di consolidare per un raggruppamento più stabile.
- **[[explainable-ai|Interpretabilità]] e numerosità dei profili.** Lo studio di profilatura della fiducia nell'IA ha mantenuto tre cluster benché l'indice di Calinski–Harabasz ne preferisse due, perché tre erano interpretabili, e osserva che un coefficiente di silhouette di 0,288 segnala una separazione debole o ai limiti. Chen e colleghi avvertono che il loro profilo più piccolo (14,06 per cento di 128 casi) può essere instabile, e nello studio ghanese il profilo più piccolo conta solo 23 studenti, che gli autori propongono di fondere.
- **Stabilità sotto ricampionamento.** La stabilità bootstrap è il controllo onesto sul fatto che i profili ricorrerebbero in un nuovo campione: l'indice di Rand aggiustato medio è stato 0,385 per la soluzione ucraina a sei classi ma 0,989 su 100 inizializzazioni casuali nello studio sulla fiducia nell'IA — lo stesso disegno nominale, un peso probatorio molto diverso.
- **I test bootstrap del rapporto di verosimiglianza (BLRT)** e il test di Lo–Mendell–Rubin sono compagni standard del BIC e dell'entropia nella più ampia letteratura sui modelli a mistura, ma gli studi di profilatura in questa knowledge base non li riportano. Quando una pagina riporta solo BIC ed entropia, trattate il numero di classi come provvisorio.

- **Il controllo del rapporto di verosimiglianza che questo corpus omette altrimenti.** [[ai-attitude-latent-profiles-career-development-2026|Song et al. (2026)]] hanno trattenuto quattro profili (entropia 0,824) da 379 studenti di economia e riportato la decisione di Lo–Mendell–Rubin: significativa a quattro (p = 0,035) e non significativa a cinque (p = 0,376).
- **Ritenzione difesa con la soluzione rivale e un test del rapporto di verosimiglianza.** [[suria-martinez-academic-self-efficacy-motor-disabilities-2026|Suriá-Martínez et al. (2026)]] riportano che una soluzione a quattro profili si adattava ai 102 studenti leggermente meglio ma non migliorava in modo significativo e lasciava una classe minima al 12,7 per cento, perciò trattengono tre profili (entropia 0,89) anziché il modello numericamente meglio adattante. Riportare la soluzione perdente e che cosa l'ha squalificata è ciò che rende il numero di classi trattenuto un giudizio che i lettori possono verificare, e la misura dell'uso dell'IA in 12 item costruita appositamente per lo studio — validata su un campione separato di 85 che gli autori definiscono preliminare — segna l'altro confine della sua evidenza.

Riportate i confronti, non solo il vincitore: una pagina che dice "abbiamo trattenuto cinque profili" senza la soluzione rivale, i valori di entropia e la numerosità del profilo più piccolo non dà ai lettori modo di giudicare la scelta.

## Leggere e riportare i risultati, e dove sbagliano

Leggete un profilo dalla sua forma oltre che dal suo livello. Nello studio ghanese i profili differiscono nella configurazione di autonomia, beneficenza ed equità — il più grande abbina un forte avallo dell'autonomia a una beneficenza più bassa — quindi due profili possono collocarsi a livelli complessivi simili e richiedere comunque un insegnamento diverso.

Quattro cautele, ciascuna enunciata nelle pagine fonte:

1. **I profili sono descrittivi.** Dicono chi è nel campione, non perché, e i disegni trasversali non possono mostrare stabilità o movimento (gli studi su insegnanti in formazione, Ghana e fisica). Solo le analisi longitudinali — uno studio di transizione della durata di un anno e le tre ondate di Wu — supportano affermazioni sul movimento, e anche lì il movimento è associazione, non effetto di un intervento.
2. **L'appartenenza è stimata, non osservata.** I casi sono assegnati per massima probabilità a posteriori, quindi individui vicini a un confine sono classificati con un'incertezza reale; entropia bassa e valori di silhouette deboli significano che i confini vanno letti come morbidi.
3. **La scelta degli indicatori definisce la risposta.** I profili dipendono interamente da quali variabili entrano nel modello, quindi l'eterogeneità che lo studio non misura mai è eterogeneità che non può trovare — lo studio ghanese ha raccolto solo il genere tra le caratteristiche di background e quindi non può dire che cosa predica l'appartenenza.
4. **L'eterogeneità rilevata non è causalità rilevata.** Il nullo profilo × condizione del trial sul tutor è il monito: profilare un esito all'interno di un trial non è un test di moderazione del trattamento.

## Implicazioni per l'IA nell'educazione

1. **Misurate l'eterogeneità prima di raccomandare un intervento.** I profili in questo corpus collocano ripetutamente un quarto o più del campione al di sotto della media generale; progettate per i profili che esistono anziché per la media.
2. **Preferite metodi centrati sulla persona quando il prodotto è la differenziazione.** Gli studi su insegnanti in formazione e sui dirigenti presentano entrambi quel passaggio come il loro contributo metodologico, perché predittori medi non possono rivelare le configurazioni che giustificano un supporto differenziato.
3. **Riportate per intero l'evidenza sulla ritenzione.** Pubblicate i confronti BIC/AIC, l'entropia, le numerosità dei profili e un controllo di stabilità, e dite apertamente quando un numero di classi è esplorativo.
4. **Trattate i profili come diagnostici, non come etichette.** Un profilo è un costrutto di ricerca con un confine stimato, quindi uno strumento che assegna individui a categorie nominate porta con sé la cautela di qualsiasi strumento di [[educational-measurement|misurazione]] — e gli [[differential-effects-across-learner-groups|effetti differenziali tra gruppi di studenti]] meritano lo scrutinio riservato a qualsiasi analisi di sottogruppo.

## Concetti collegati

- [[quantitative-research]]
- [[mixed-methods-research]]
- [[research-methods-aied]]
- [[machine-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[differential-effects-across-learner-groups]]
- [[technology-acceptance-model]]

## Articoli collegati
- [[ai-attitude-latent-profiles-career-development-2026]] — Evidenza di ritenzione secondo Lo–Mendell–Rubin per quattro profili di atteggiamento verso l'IA in 379 studenti di economia

- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Analisi di transizione del profilo latente su tre ondate dell'adattamento psicologico
- [[liang-ai-learning-motivation-sdt-2026]] — Analisi di transizione latente di tre profili motivazionali nell'arco di un anno
- [[trust-in-ai-psychological-profiles-ml-2026]] — Profili con k-means; disaccordo tra silhouette e Calinski–Harabasz; ARI 0,989
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Aggregazione gerarchica e k-means in quattro personas di adozione della GenAI

- [[teachers-ai-belief-profiles-talis-2024-2026]] — Quattro profili di credenze dei docenti sull'IA da 40.680 docenti in 49 sistemi, con stabilità dell'allineamento
