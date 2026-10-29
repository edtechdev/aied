---
title: "Come posso riprogettare la valutazione in modo che un voto mi dica ancora qualcosa di difendibile su ciò che lo studente sa o sa fare?"
created: "2026-10-14T21:55:00-04:00"
weight: 84
type: faq
connected_faqs: [should-we-use-ai-detectors, reduce-ai-cheating, writing-instruction-ai-best-practices, course-ai-policy]
foundations: [academic-integrity]
assessment: [assessment, assessment-validity, authentic-assessment]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: "faqs/redesign-assessment-ai-era"
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

# Come posso riprogettare la valutazione in modo che un voto mi dica ancora qualcosa di difendibile su ciò che lo studente sa o sa fare?

**Comincia dichiarando esplicitamente quale capacità il voto dovrebbe rappresentare.** Stai valutando ciò che uno studente sa fare in autonomia, ciò che riesce a realizzare adeguatamente con l'IA, la sua capacità di valutare e dirigere l'IA, o una combinazione di queste? Il [[assessment-validity|Concetto di Validità della Valutazione]] della knowledge base tratta questo come un problema di validità: un manufatto rifinito non è più prova sufficiente che lo studente possieda la capacità apparentemente dimostrata da quel manufatto. Questa è la metà del lato della valutazione della stessa argomentazione; la metà del lato dell'applicazione è in [[reduce-ai-cheating]], e l'inquadramento generale della validità passa da [[evaluating-ai-interventions-methods]].

## Il rischio della sostituzione del costrutto

L'articolo [[authentic-products-authenticated-processes-2026|From Authentic Products to Authenticated Processes]] chiama **sostituzione del costrutto** il rischio che ne deriva: il valutatore attribuisce allo studente un prodotto mediato dall'IA e misura inavvertitamente le capacità dello strumento piuttosto che quelle dello studente. La risposta raccomandata è rendere visibili il ragionamento, il giudizio, la verifica, l'iterazione e la responsabilità dello studente attraverso approcci come consegne a tappe, giustificazioni annotate delle decisioni, registrazioni del processo, dichiarazioni sull'uso del feedback, difese orali e altre forme di evidenza di processo autenticato.

[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed and Temimi]] riformulano lo stesso problema come uno di **informazione imperfetta** piuttosto che di moralità: lo studente sa come il lavoro è stato prodotto e l'istituzione vede solo il manufatto più tracce parziali, quindi la domanda di progettazione diventa *quale risposta dello studente ogni ambiente di valutazione rende più attraente*. Il loro modello delle regioni di risposta confronta tre scelte — nessun uso dell'IA, uso [[ai-use-disclosure|dichiarato]], e uso nascosto — e mostra che regole, monitoraggio, dichiarazione e riprogettazione operano attraverso canali diversi e riescono solo quando la risposta più attraente si allinea con lo scopo della valutazione. Due risultati riguardano direttamente l'architettura. La deterrenza passa attraverso la **discriminazione** di un rilevatore tra uso nascosto e lavoro legittimo, non il suo tasso grezzo di intercettazione, quindi quando i falsi positivi crescono più velocemente dei veri positivi un monitoraggio più forte può rendere l'occultamento relativamente *più* attraente. E la riprogettazione spinge gli studenti verso un uso responsabile solo quando la rubrica premia effettivamente l'evidenza di processo; altrimenti resta cosmetica. La loro regola pratica è progettare per lo studente più tentato di occultare, non per il più coscienzioso.

## Una forte architettura di valutazione

Nella pratica, una forte architettura di valutazione combina spesso un **compito autentico abilitato dall'IA** con una qualche forma di **verifica indipendente**. A seconda della disciplina, questo può includere una breve spiegazione orale, un'applicazione in classe, una dimostrazione dal vivo, un [[eportfolio|portfolio]] annotato, una breve componente senza assistenza, o domande sulle decisioni chiave.

Il concetto [[authentic-assessment|Valutazione Autentica]] sottolinea anche lavoro intellettuale realistico, sfida cognitiva, agency dello studente, feedback e autenticità sociale o professionale — non semplicemente rendere più difficili per l'IA i compiti convenzionali. Le componenti orali e dal vivo richiedono attenzione accurata ad ansia, accomodamenti per disabilità, differenze linguistiche e bias del valutatore.

Un'architettura popolare senza sorveglianza — la **variazione del compito per studente**, dove ogni esaminando riceve una versione superficialmente distinta ma equivalente sul piano del costrutto dello stesso compito, così che le risposte non possano essere utilmente condivise — è condizionata dalle capacità piuttosto che gratuita. [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]], un [[benchmark]] di 600 varianti generate su 60 celle di condizione, ha trovato i modelli all'avanguardia raggruppati in modo stretto su un punteggio congiunto di integrità (0,81–0,88) mentre i riferimenti non all'avanguardia crollano a 0,50–0,55, e che nessuna singola strategia di [[prompt-engineering|prompting]] ottimizza allo stesso tempo diversità superficiale ed equivalenza di costrutto. La variazione su larga scala non può essere data per scontata a partire dal solo prompting, quindi un'istituzione dovrebbe validare la propria coppia modello–prompt prima di trattare la garanzia come reale.

La riprogettazione raramente funziona anche compito per compito. In uno studio [[qualitative-research|qualitativo]] su 12 accademici e 17 studenti in una grande università australiana, [[nicola-richmond-programwide-assessment-genai-2025|Nicola-Richmond et al.]] hanno trovato che entrambi i gruppi concordavano che la valutazione debba cambiare ma sottolineavano attriti sistemici — tempi di preparazione lunghi, vincoli di accreditamento per coorti numerose, carico di lavoro e costo — e concludevano che la riprogettazione *richiede un villaggio*: un team a livello di programma che combini competenze di progettazione della valutazione, [[generative-ai|IA generativa]], disciplina, industria ed evidenza, con punti di alfabetizzazione GenAI e assicurazione dell'apprendimento collocati strategicamente lungo una qualifica. Il metodo a livello di compito che rende questo trattabile è quello documentato da [[mccorkle-aligned-genai-course-policy-2025|McCorkle]]: inventariare ogni passo che lo studente compie, chiedere di ogni passo "cosa, specificamente, sto valutando?", e derivare il confine dell'IA dalla risposta — che è anche come le aspettative dietro [[reduce-ai-cheating]] diventano esplicite e applicabili.

Lo scopo conta quanto la meccanica. [[ai-agents-joyful-assessment-third-space-2026|El Khoury and Ma]] sostengono che una riforma organizzata solo attorno alla prevenzione delle scorrettezze è troppo difensiva e propongono una **valutazione gioiosa** — sicura, emotivamente responsiva, potenziante e di supporto all'[[agency]] dello studente — in cui l'integrità è una *conseguenza* della buona progettazione piuttosto che il suo punto di partenza. Il loro esempio applicato usa un [[agentic-ai|agente IA]] costruito dall'insegnante per far esercitare gli studenti prima del giudizio e per produrre un report di evidenze allineato alla rubrica, ma la divisione del lavoro è dichiarata chiaramente: l'IA organizza le evidenze, l'insegnante le interpreta.
