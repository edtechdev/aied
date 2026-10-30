---
title: IA spiegabile
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent


---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **L'IA spiegabile (XAI, Explainable AI) nell'istruzione** è la progettazione e lo studio del rendere leggibili le decisioni di un sistema di IA per i suoi stakeholder educativi — gli [[learners|studenti]], gli insegnanti, gli [[administrator|amministratori]], i [[parents-and-families|genitori]], i ricercatori e i [[stakeholders|decisori politici]]. La distinzione centrale su cui il campo insiste: spiegare la **materia** (perché un fatto è vero) non equivale a spiegare una **decisione del sistema di IA** (perché a questo studente è stata assegnata questa attività, perché questa risposta è stata valutata errata, quali evidenze supportano una previsione di rischio). L'istruzione comporta esigenze di spiegabilità distintive — dati di apprendimento rumorosi, spiegazioni che possono sostenere direttamente la [[metacognition|metacognizione]] e l'[[self-regulated-learning|autoregolazione dell'apprendimento]], e stakeholder che richiedono tipi di spiegazione fondamentalmente diversi. La domanda progettuale operativa è la **qualità della spiegazione**, non la mera disponibilità di spiegazioni: una spiegazione tecnicamente presente ma illeggibile, fuorviante o disallineata rispetto al proprio pubblico può fare più danni che nessuna spiegazione.

## Domande da considerare

- Quando un [[intelligent-tutoring|tutor di IA]] ti dice perché è stato fornito un suggerimento, sta spiegando la *materia* o sta spiegando la *decisione del sistema*? Sai indicare tre esempi di ciascuna nel tuo uso dell'IA educativa?
- Chi ha bisogno di spiegazioni nell'istruzione — e studenti, insegnanti e decisori politici hanno bisogno dello *stesso* tipo? A cosa servirebbe una spiegazione per ciascuno di loro?
- Un'IA segnala uno studente come a rischio di abbandono. Che cosa deve sapere un [[teacher-role|insegnante]] per agire su quella segnalazione, rispetto a ciò che deve sapere lo studente? La stessa spiegazione è adatta a entrambi?
- La pagina sostiene che la *qualità* della spiegazione conti più della sua *disponibilità*. Che cosa fa fallire una spiegazione tecnicamente presente — riesci a pensare a un caso in cui una spiegazione c'era ma era inutile, o peggio, fuorviante?
- [[trust-calibration|Fiducia]] e spiegazione sono legate ma non identiche. Perché una spiegazione fluida e sicura di sé potrebbe creare una fiducia *falsa* in un sistema difettoso — e come ti accorgeresti che sta accadendo?

## Introduzione

L'[[ai-education|IA spiegabile nell'istruzione]] nomina l'aspettazione crescente che i sistemi di IA nelle classi non dovrebbero essere scatole nere. Poiché l'IA nell'istruzione incide su decisioni consequenziali — voti, segnalazioni di rischio, [[recommender-systems-and-learning-paths|percorsi di apprendimento]], raccomandazioni di risorse — gli stakeholder chiedono sempre più di conoscere non solo *che cosa* il sistema ha concluso ma *perché*. L'istruzione rende ciò due domande distinte: spiegare la materia che si sta apprendendo e spiegare il processo decisionale proprio del sistema di IA. Confonderle è un errore di categoria con conseguenze pratiche: un'IA che spiega perfettamente una risposta di [[physics-education|fisica]] non offre comunque a uno studente e a un insegnante alcuna intuizione sul perché il *sistema* li abbia classificati a rischio, abbia raccomandato una certa attività o abbia valutato errata una risposta.

## Spiegare la materia vs. spiegare la decisione del sistema

Il contributo fondativo del campo — il [[xai-education-framework|framework XAI-ED]] (Khosravi et al., 2022) — insiste sul fatto che l'istruzione ha esigenze di spiegabilità *distintive* che vanno oltre la XAI per scopi generali. La principale tra esse è la distinzione tra due bersagli della spiegazione:

- **Spiegazioni sulla materia** chiariscono il *contenuto*: perché un suggerimento affronta un [[misconceptions|concetto errato]], perché una risposta è sbagliata, come un risultato di fisica derivi da principi. Sono spiegazioni [[pedagogy|pedagogiche]] che sostengono lo [[scaffolding|scaffolding]], il [[feedback|feedback]] e la [[metacognition|metacognizione]].
- **Spiegazioni sulla decisione del sistema** chiariscono *il modello*: perché a questo studente è stata assegnata questa attività, perché il sistema prevede che questo studente sia a rischio, quali evidenze supportano una previsione di tracciamento della conoscenza o di [[learning-analytics|learning analytics]]. Sono spiegazioni di trasparenza che sostengono la [[trust-calibration|calibrazione della fiducia]], la [[bias-mitigation|mitigazione dei bias]] e la responsabilità.

La distinzione conta perché esse servono stakeholder e scopi diversi. Uno studente che chiede "perché questo è valutato errato?" ha bisogno soprattutto della spiegazione *sulla materia*; un insegnante che decide se agire su una segnalazione di rischio, o un decisore politico che verifica la presenza di bias, ha bisogno della spiegazione *sulla decisione del sistema*. Progettare un'unica spiegazione che serva a entrambi è raramente possibile — ed è per questo che la progettazione multi-stakeholder è un tema centrale di XAI-ED.

## Chi ha bisogno di spiegazioni: la progettazione multi-stakeholder

- **Gli studenti** hanno bisogno di spiegazioni che sostengano il proprio apprendimento e la propria autoregolazione — perché è stato fornito un suggerimento, perché la loro risposta è stata valutata errata, perché questa risorsa è raccomandata (a sostegno dell'[[self-regulated-learning|autoregolazione dell'apprendimento]]). Le [[student-perspectives-ai-writing-grading-2026|evidenze dalla prospettiva degli studenti]] mostrano che gli studenti tracciano una linea netta tra l'accettare il *feedback* dell'IA (utile per la revisione) e il cedere l'*autorità di valutazione* (riservata all'insegnante umano) — una posizione calibrata e adeguata alla funzione, attivata dalla trasparenza sul coinvolgimento dell'IA. Il [[ko-hughes-vsd-student-centered-its-2026|lavoro di progettazione sensibile ai valori con studenti di community college]] affina il punto: gli studenti hanno preferito spiegazioni *collaborative e umanizzate* (ad es. "l'IA potrebbe essere incerta qui, quindi verifichiamolo insieme") rispetto alla pura confidenza del modello o alla trasparenza tecnica, perché la trasparenza da sola ha poco valore se non sostiene direttamente il loro apprendimento. Lo studio ha portato alla luce una tensione tra trasparenza e interpretabilità che spinge la progettazione della spiegazione verso semantiche orientate allo studente piuttosto che verso output di importanza delle feature.
- **Gli insegnanti** hanno bisogno di spiegazioni che informino l'intervento — quali studenti sono a rischio e *perché*, su quali evidenze. Gli [[xai-teachers-trust-edtech-recommendations-2026|studi di spiegabilità con gli insegnanti]] mostrano che spiegazioni [[discipline-specific-aied|specifiche del dominio]] nel [[curriculum-design|linguaggio curricolare]] costruiscono accettazione e fiducia calibrata più efficacemente di quelle generiche basate sull'importanza delle feature, eppure gli insegnanti vogliono comunque un'esperienza reale in classe prima di una fiducia piena — la spiegazione da sola non conferisce [[trust-calibration|calibrazione]].
- **Gli sviluppatori e i ricercatori** hanno bisogno di spiegazioni per fare il debug del comportamento del modello e rilevare [[bias-mitigation|bias]] — portando in superficie quali feature guidano le previsioni.
- **Gli amministratori e i decisori politici** hanno bisogno di spiegazioni per responsabilità, [[privacy|privacy]] e conformità con la [[regulation|normativa]] (ad es. il diritto alla spiegazione), e per verificare che le decisioni guidate dall'IA siano eque ed [[equity-in-ai-education|equitative]].

## Approcci e formati

Il framework XAI-ED cataloga le principali modalità di spiegazione: **visiva** (mappe di calore, alberi decisionali), **testuale** (giustificazioni in linguaggio naturale), **basata su esempi** (controfattuali, vicini più prossimi), graduatorie di **importanza delle feature**, **estrazione di regole** e **semplificazione del modello**. Esso mappa inoltre gli approcci alle classi di modello:

- I modelli **white-box** (alberi decisionali, modelli lineari, basati su regole) sono intrinsecamente interpretabili.
- I modelli **black-box** ([[machine-learning|reti neurali]], ensemble) richiedono metodi di spiegazione post-hoc.
- Gli approcci **glass-box** cercano di bilanciare accuratezza e trasparenza.

La base di evidenze concreta dell'AIED abbraccia tutti questi. Il **[[knowledge-tracing|tracciamento della conoscenza]] interpretabile** rende direttamente ispezionabili i modelli di conoscenza dello studente ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). I **surrogati auto-spieganti** distillano un modello black-box in un piccolo [[llm|modello linguistico]] interpretabile per la [[learning-analytics|learning analytics]] ([[distilling-self-explaining-lm-learning-analytics-2026]]). Le **spiegazioni controfattuali** — "che cosa dovrebbe cambiare per ottenere un esito diverso" — sostengono il supporto decisionale educativo e il ricorso ([[sc2r-counterfactual-recourse-educational-2026]]). La **learning analytics federata e spiegabile** mostra che la qualità della spiegazione può deteriorarsi (la calibrazione degrada) anche quando la stabilità della graduatoria regge, sottolineando che le spiegazioni non sono una proprietà fissa ma un output del sistema da misurare ([[villegas-ch-federated-explainable-learning-analytics-2026]]). E gli **ITS [[affective-computing|affettivi]] interpretabili** dimostrano spiegazioni nel tutoring [[affective-tutoring|consapevole delle emozioni]] ([[multimodal-affective-its-presentation]]).

## La qualità della spiegazione, non la disponibilità

Una lezione ricorrente lungo tutte le evidenze: **avere una spiegazione non è sufficiente**; la spiegazione deve essere adatta al proprio pubblico, accurata e calibrata sulle poste in gioco. Il framework XAI-ED nomina esplicitamente le trappole:

- **Sovraccarico di spiegazione** — troppe informazioni sopraffanno l'utente e annullano il beneficio.
- **Spiegazioni fuorvianti** — le spiegazioni post-hoc possono non rispecchiare il ragionamento effettivo del modello, dando una falsa confidenza.
- **Bias di conferma** — gli utenti si rivolgono selettivamente alle spiegazioni che confermano le credenze esistenti.
- **Eccesso di fiducia** — spiegazioni fluide possono creare falsa fiducia in sistemi difettosi, alimentando il [[cognitive-offloading|sovra-affidamento]] (il rovescio della [[trust-calibration|calibrazione della fiducia]]).
- **Aggirare il sistema** — gli studenti possono sfruttare le spiegazioni per eludere l'apprendimento reale.

La qualità della spiegazione ha anche una dimensione di equità: una spiegazione tecnicamente presente ma illeggibile per un dato stakeholder — o che occulta il [[bias-mitigation|bias]] in una previsione — manca il proprio scopo. Per questo la domanda progettuale è *qualità e adeguatezza*, ed è per questo che la progettazione di spiegazioni centrata sull'essere umano e specifica per stakeholder è inseparabile dalla generazione tecnica delle spiegazioni. La XAI efficace è un atto comunicativo progettato per i bisogni cognitivi del destinatario, non un mero artefatto tecnico.

La spiegazione non è sempre un livellatore. In un esperimento a vignette 2 × 2 con 250 studenti di settima elementare, una motivazione scritta per un voto di matematica ha aumentato l'accettazione e l'equità percepita in entrambe le condizioni, ma ha allargato anziché colmare il divario tra decisioni prese dall'[[teacher-role|insegnante]] e dall'IA ([[decision-making-agent-student-decision-acceptance-2026|Zhang et al. (2026)]]).

Due cautele affinano ulteriormente questo punto, ed entrambe sono rese centrali dal contributo più recente del wiki sull'argomento. Primo, il macchinario della spiegazione non è esso stesso neutrale: metodi post-hoc come LIME e SHAP possono non essere fedeli al comportamento effettivo del modello, quindi una spiegazione tecnicamente presente può fuorviare anziché informare ([[lund-socially-accountable-data-science-xai-2026|Lund et al. 2026]], rifacendosi a Chuan et al. 2024). Secondo, **spiegare non equivale a rendere conto**. Un resoconto di quali feature hanno guidato una previsione non rivela se tali feature fossero appropriate da usare, se i dati di addestramento fossero rappresentativi, o se la progettazione del sistema riflettesse un giudizio solido; le spiegazioni possono creare l'apparenza della trasparenza lasciando intatte le condizioni strutturali che hanno prodotto una decisione (Mittelstadt et al. 2019). Per l'istruzione questo significa che la domanda da continuare a porre non è se una spiegazione sia stata prodotta, ma se la persona che la riceve — uno studente, un insegnante, un tutor — potesse comprenderla, agire sulla sua base, o contestare la decisione dietro di essa. Lo stesso fallimento di leggibilità appare sul versante della sicurezza della [[automated-assessment|valutazione automatizzata]]: il [[humble-prompt-injection-ai-grading-red-team-2026|red-team di Humble (2026) su uno strumento di valutazione con IA]] ha rilevato che esso disabilitava silenziosamente la chat dopo aver bloccato un prompt injection, e — avendo annunciato che non avrebbe mai seguito istruzioni incorporate — le seguiva in altre sei esecuzioni sullo stesso file, lasciando l'utente senza alcun segnale affidabile su cui basare il proprio affidamento.

La **spiegabilità per progettazione** è una risposta al problema della fedeltà post-hoc. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang e Fang (2025)]] parametrizzano un decodificatore di spiegazioni con la stessa rappresentazione fusa e lo stesso punteggio predetto che decidono la [[assessment|valutazione]], così che un punteggio basso su un interrogatorio [[formative-assessment|formativo]] produce una motivazione che nomina le domande di approfondimento insufficienti, e lo abbina a un'attenzione a doppia lente sugli standard curricolari e sulle mosse della rubrica specifica della materia. L'allineamento attenzione-rubrica raggiunge il 78,0% contro il 41,7% di GPT-4 zero-shot e il 32,1% di BERT, e la fedeltà è sondata mediante cancellazione controfattuale di passaggi critici per la rubrica insieme a valutazioni umane su una checklist ancorata alla rubrica, dando un punteggio di credibilità della spiegazione di 0,78 — un incremento di 0,31 rispetto a BERT-base. L'audit mostra anche dove l'affermazione architetturale si assottiglia: sugli indizi emotivi il modello alloca il 28,4% del peso attentivo contro il 15,2% di un esperto (allineamento 0,53), con un caso di errore che assegna il 28% al token "frustrated", che gli autori leggono come un adattamento eccessivo all'affetto piuttosto che alla pedagogia e indicano come area di perfezionamento. Incorporare le spiegazioni nel percorso decisionale le rende più fedeli delle razionalizzazioni post-hoc; non le rende corrette.

## Insegnare la spiegabilità come pratica di responsabilità

Se la qualità della spiegazione decide se la XAI è utile, allora produrre spiegazioni va insegnato come abitudine professionale, anziché dimostrato come capacità. [[lund-socially-accountable-data-science-xai-2026|Lund e colleghi (2026)]] propongono di farlo attraverso quattro pilastri — **answerability** (l'obbligo di dare ragioni a chi è interessato), **responsabilità** (il danno anticipato lungo l'intero ciclo di vita, non difeso a posteriori), **enforcement** (conseguenze dentro il corso) e **riflessività** (esame documentato delle proprie assunzioni) — ciascuno con i propri compiti e il proprio costo in aula.

Per la spiegabilità nello specifico, i compiti che contano sono quelli che costringono la spiegazione a uscire dal notebook: model card valutate accanto alle metriche di accuratezza, e audit strutturati delle spiegazioni in cui gli studenti applicano strumenti di interpretabilità ai propri modelli e poi presentano i risultati a un pubblico senza formazione tecnica condivisa. L'enforcement è il pilastro più spesso assente nei corsi adiacenti all'etica ed è quello che rende il resto più che simbolico — rubriche che premiano la documentazione responsabile, progetti che possono essere rimandati in revisione per motivi [[ethics|etici]], e [[peer-assessment|revisione tra pari]] condotta su criteri di responsabilità anziché solo su criteri tecnici. L'articolo è candido sul fatto che gli strumenti differiscano nettamente nel costo: le model card e le dichiarazioni di posizionalità non richiedono nuovo software e rischiano solo una conformità superficiale, mentre i panel tra pari e il coinvolgimento degli stakeholder richiedono coordinamento e acquisizione istituzionale, ed è per questo che raccomanda un'adozione a tappe anziché un impegno del tipo tutto-o-niente. Si veda [[curriculum-design]] per dove questi si inseriscano in un programma.

## Citazione

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.

## Concetti collegati
- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]

## Articoli collegati
- [[lund-socially-accountable-data-science-xai-2026]] — A four-pillar framework (answerability, responsibility, enforcement, reflexivity) for teaching XAI as accountability practice (Lund et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Value-sensitive design of student-centered ITS (collaborative vs. raw explanations)
- [[xai-education-framework]] — XAI-ED: the foundational framework for explainable AI in education (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Domain-specific explanations build teachers' trust and acceptance (Feldman-Maggor et al. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — Student perspectives on transparent AI-assisted assessment (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[explainable-probabilistic-kt]] — Explainable knowledge tracing via probabilistic embeddings
- [[neural-symbolic-knowledge-tracing]] — Neural-symbolic knowledge tracing
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling black-box models into self-explaining LMs for learning analytics
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving risk modeling
- [[sc2r-counterfactual-recourse-educational-2026]] — Semantics-constrained counterfactual recourse for educational decision support
- [[fair-explainable-edu-recommendations]] — Fair and explainable educational recommendations
- [[multimodal-affective-its-presentation]] — Interpretable closed-loop ITS for multimodal affective feedback
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Explaining ChatGPT adoption in higher education
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Explainable-by-design LLM framework: dual-lens attention and score-parameterized explanations for automated teacher assessment (Li et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injection in AI-mediated grading, where detection was never reported to the user (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions

- [[decision-making-agent-student-decision-acceptance-2026]] — Teacher- versus AI-made grading decisions: a written rationale widened the fairness gap

