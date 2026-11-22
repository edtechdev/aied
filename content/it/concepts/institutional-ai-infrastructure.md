---
title: Infrastruttura istituzionale per l'IA
created: "2026-11-22T11:00:00-05:00"
updated: "2026-11-22T11:00:00-05:00"
type: concept
connected_resources: [mindrouter, amplify-genai, canvas-mcp]
technology: [llm, generative-ai, open-source, edtech-platform]
ethics: [privacy]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed, k 12]
discipline: [information technology]
confidence: high
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-22"
    agent: hermes-agent
translation_of: concepts/institutional-ai-infrastructure
source_updated: "2026-11-21T15:40:00-05:00"
translation_note: "Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua."
connected_concepts: [open-source, rag, privacy, governance, edtech-platform, llm, digital-divide, assessment, shadow-ai, critiques-of-ai-in-education]
connected_articles: [huijts-suilen-institutional-ai-sovereignty-gateway-2025, rodenbeck-purdue-on-prem-genai-inference-2025, rahaman-soa-on-prem-ai-gateway-2026, sheneman-mindrouter-institutional-ai-sovereignty-2026, guadalupe-academic-chatbot-local-llm-2026, zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026, pardos-borchers-institutional-workflows-oecd-2026, mcnamara-aimcai-continuous-assessment-infrastructure-2026, on-premises-rag-tutoring-business-education-2026, lata-ferpa-compliant-local-llm-autograder, making-ai-work-for-students-ofs-2026, watson-generative-ai-meaning-mediating-infrastructure-2026]
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

> **Infrastruttura istituzionale per l'IA** — il livello di elaborazione, erogazione, instradamento e controllo che un'istituzione gestisce perché i modelli possano essere usati in didattica, ricerca e amministrazione secondo le proprie regole. Comprende i GPU e i cluster che ospitano i pesi, i server di inferenza che rispondono alle richieste, il [[llm|gateway]] che le misura e le instrada, le schede del modello e i registri di audit che rendono l'impianto ispezionabile, le pipeline di dati che collegano i registri degli studenti ai modelli, e il personale che tiene tutto in funzione. Non è lo stesso oggetto di una [[edtech-platform|piattaforma edtech]] (il contenitore rivolto all'apprendente) o della [[governance|governance]] (la politica che vincola entrambi).

## Domande da considerare

- Dove gira davvero il modello nella tua istituzione, e qualcuno sa nominare la persona che potrebbe rispondere senza dover verificare?
- In quali delle sei forme di adozione qui sotto ti trovi già, e in quale pensavi di trovarti?
- Se il novanta percento degli usi provenisse dal dieci percento degli utenti, una licenza per posto o un gateway misurato servirebbe meglio il tuo budget, e sai quale forma ha il tuo utilizzo?
- Un documento di politica dice che le richieste non devono lasciare la giurisdizione. Cosa nel tuo stack lo impone, piuttosto che chiedere alle persone di ricordarselo?
- Chi è responsabile quando una raccomandazione di articolazione dei corsi è sbagliata, e la tua infrastruttura registra abbastanza per rispondere a posteriori?
- Per una scuola primaria, cosa cambia quando il modello è piccolo e gira nell'edificio piuttosto che frontier-scale e remoto?

## Introduzione

Le istituzioni hanno passato i primi anni della [[generative-ai|IA generativa]] comprando accesso: una licenza per un [[conversational-ai|chatbot]] qui, un assistente alla scrittura lì, ciascuno con i propri termini e il proprio percorso dei dati. Il risultato è un portafoglio che nessuno sa descrivere in una frase, e una serie di domande (dov'è finito quel prompt, chi ha approvato questo modello, quanto abbiamo speso) a cui nessun singolo ufficio può rispondere. L'argomento che questo livello media il significato prima che limitarsi a consegnare strumenti è sviluppato sotto [[critiques-of-ai-in-education|Critiche dell'IA nell'educazione]].

Trattare l'IA come infrastruttura è la risposta. Significa un livello condiviso di erogazione, un gateway che applica le regole dell'istituzione a ogni richiesta e abbastanza telemetria per vedere costo, carico e guasti. La tesi della letteratura non è che sia più economica. È che rende l'istituzionel la parte che decide, che è un tipo di affermazione diverso e più difficile da testare.

I lavori raccolti qui allargano anche ciò che conta come infrastruttura. Due riguardano l'inferenza per chat e insegnamento, uno riguarda l'ufficio del registratore e uno riguarda i registri di valutazione. Una volta che l'articolazione dei corsi, gli [[learning-analytics|analytics]] di carico di lavoro e l'accumulo di evidenze dipendono da embedding e chiamate di modello, la back office è tanto parte dello stack quanto lo rack di GPU. L'argomento è che l'infrastruttura è ovunque un'istituzione abbia silenziosamente delegato una decisione a un modello.

## Quello che stai davvero scegliendo

Il campo descrive sei forme, non due. Differiscono in chi detiene i dati, chi può cambiare il modello e chi assorbe il fallimento.

**Strumenti esternalizzati gratuiti.** Personale o studenti usano un servizio di un fornitore senza costi. L'[[intelligent-tutoring|AI Tutor]] Pro, di Contact North in Canada, è il caso più chiaro: gratuito, anonimo, senza account obbligatorio, con modalità per discussione, [[self-assessment|autovalutazione]] e costruzione di guide allo studio. Playlab si colloca nella stessa fascia, permettendo agli educatori di costruire app ancorate al proprio [[curriculum-design|curriculum]] mentre il fornitore ospita i modelli. Il costo non è zero ma differito: nessuna traccia di audit istituzionale, nessun controllo delle quote e termini che possono cambiare senza preavviso. È un luogo difendibile dove sperimentare e un luogo povero dove stabilirsi.

**Posti in un tenant commerciale dell'educazione.** Un distretto o un'università compra ChatGPT Edu, Microsoft 365 Copilot, Google Gemini for Education o un tenant comparabile. L'approvvigionamento è rapido, SSO e console di amministrazione sono inclusi, e il fornitore è proprietario della scelta del modello e della conservazione. L'istituzione guadagna integrazione identitaria e perde la capacità di instradare attorno a un fornitore.

**Una piattaforma che ospiti tu.** [Amplify GenAI](/aied/resources/amplify-genai/) si distribuisce nell'account AWS dell'istituzione, così che documenti e conversazioni restino in infrastrutture che l'istituzione controlla mentre il fornitore fornisce l'applicazione. Il pilota della Vanderbilt ha riportato circa \$3 per utente al mese su 1.300 utenti, con metà di loro sotto \$1 di spesa in token. Questa forma compra il controllo dei dati senza comprare GPU.

**Un gateway sopra provider misti.** Una porta d'ingresso davanti a backend locali e commerciali, con quote, SSO, logging e instradamento regionale allegati. Fontys lo ha costruito in tre livelli; [MindRouter](/aied/resources/mindrouter/) e SPIN implementano varianti. È la forma che trasforma un documento di politica in un vincolo applicato, e quella che richiede un ingegnere di piattaforma prima che un funzionario degli acquisti.

**La tua inferenza.** GPU, scheduler, server di modello e le persone che li fanno funzionare. MindRouter all'Università dell'Idaho è il caso di riferimento; SPIN alla Georgia Tech è la stessa scommessa fatta dentro un centro HPC. È l'unica forma in cui l'istituzione può rispondere a una citazione giudiziaria, a un regolatore o a un cambio di prezzo di un fornitore senza chiedere il permesso.

**L'IA dentro gli strumenti che già usi.** Un tipo di domanda di Moodle, il partner IA di una piattaforma di discussione, uno strumento di feedback sui saggi. La spinta organizzativa è piccola e il cambiamento arriva corso dopo corso, che è anche il suo limite: nulla al centro impara da esso.

Queste forme si annidano. Un gateway può stare davanti a una piattaforma ospitata; una piattaforma ospitata può chiamare un modello locale; uno strumento gratuito può essere il pilota che non giustifica nessuna delle precedenti. La domanda utile non è quale forma sia migliore, ma quale decisione ogni forma prende silenziosamente per te.

**Il vero default del settore è un posto in un tenant di venditore.** Non tutte le istituzioni fanno la scelta deliberatamente. [[making-ai-work-for-students-ofs-2026|OfS e Advance HE (2026)]], studiando 127 istituzioni, hanno trovato che la maggior parte fornisce strumenti attraverso le licenze Microsoft 365 esistenti, più comunemente Copilot Chat, apprezzato perché il suo ambiente chiuso mantiene i dati istituzionali dentro l'inviluppo di conformità. Il personale di istituzioni senza licenze ricorreva a strumenti gratuiti più potenti, a volte con dati degli studenti, e i partecipanti hanno segnalato che il piano gratuito o economico di oggi diventa l'aumento di prezzo non previsto di domani.

## Il livello del gateway

Tre implementazioni descrivono ormai lo stesso mosso architettonico con insolita coerenza.

[[huijts-suilen-institutional-ai-sovereignty-gateway-2025|Huijts e Suilen]] alla Fontys ICT separano un frontend stile ChatGPT legato all'identità istituzionale, un nucleo di instradamento che applica vincoli di budget e regionali, e un livello di provider di modelli locali e commerciali. Sei mesi e 300 utenti dopo, un tetto mensile di \$500 non era mai stato superato, e ogni sessione si apriva con una scheda del modello che nominava capacità, regione di hosting, costo e alternative.

[[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] spinge la stessa idea nello scheduling. Le richieste sono pesate per ruolo ([[administrator|amministratore]] 10, docenti 5, personale 2, studente 1) tramite Weighted Deficit Round Robin, e la selezione del backend aggiunge punteggi morbidi per latenza, carico e preferenza dell'amministratore. Il gateway conserva il registro di audit e misura l'energia oltre i token.

[[rahaman-soa-on-prem-ai-gateway-2026|SPIN alla Georgia Tech]] rende esplicita la separazione al confine dell'API: LiteLLM e PostgreSQL su una macchina virtuale solo-CPU, vLLM e Triton su nodi GPU dentro Slurm, con host, porta e chiave del backend risolti dal database al momento della richiesta. Sostituire un modello diventa un aggiornamento del database invisibile ai client.

Le differenze sono istruttive. Fontys governa un portafoglio multi-provider, MindRouter governa una capacità condivisa scarsa e SPIN governa l'inferenza su uno scheduler batch pensato per terminare i job. Tutti e tre convergono su una tesi: la superficie API è il contratto, e il modello dietro è sostituibile.

## Erogare è una politica, non un benchmark

I [[rodenbeck-purdue-on-prem-genai-inference-2025|due servizi della Purdue]] hanno raggiunto oltre 1000 utenti su più di 10 modelli [[open-source|open source]] per circa \$100.000 di hardware, con circa il 40% attivo mensilmente. La decisione che conta è che il team ha mantenuto Ollama piuttosto che vLLM nonostante il vantaggio di vLLM di 4–5x nella throughput, perché sostenere molti modelli contava di più della velocità grezza per una comunità che vuole provare cose.

Il test di carico di SPIN dà l'altra metà del quadro. Contro un motore simulato a 1000 richieste concorrenti al secondo, una VM gateway a 8 vCPU raggiungeva il 76% del tasso aggregato ideale, mentre il bare metal a 8 worker raggiungeva il 98%. Il livello proxy è economico finché non lo è, e la soglia è misurabile prima che misteriosa.

Nessuno dei due risultati si generalizza in una regola. Stabiliscono che throughput, ampiezza dei modelli e semplicità operativa si scambiano tra loro, e che quello scambio va fatto deliberatamente piuttosto che ereditato dal default di un fornitore.

## Il edge cambia l'argomento

[[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar e Iqbal]] descrivono un'alternativa a scala scolastica: un desktop ricondizionato o un mini PC con una GPU di fascia entry-level, che ospita un modello fra 1B e 13B parametri, al costo indicativo di alcune centinaia ad alcuni migliaia di dollari australiani per server. Il loro caso economico è una scuola di 400 studenti che non può assorbire i costi cumulativi delle API cloud attraverso le classi. La loro onestà è l'ammissione che non esiste un confronto completo di costo del ciclo di vita, quindi il risparmio è un'ipotesi prima che un riscontro.

A scala di corso, [[on-premises-rag-tutoring-business-education-2026|CourseChat]] mostra la stessa logica sotto un vincolo diverso: un modello di produzione da 8B mantenuto contro candidati più grandi che non superavano una soglia di latenza d'aula. [[guadalupe-academic-chatbot-local-llm-2026|Guadalupe, Topón e Iza]] hanno raggiunto un target mediano di 5 secondi con 3,57 s ma lo hanno mancato al p95 con 6,47 s, e hanno ricondotto circa il 96% del tempo end-to-end alla generazione.

Girare in locale cambia la domanda della privacy da contrattuale a fisica, e non la risolve. Una distribuzione locale con registrazione completa dei prompt resta un sistema di conservazione; ciò che cambia è chi può essere costretto a consegnarlo.

## Anche la back office è infrastruttura

[[pardos-borchers-institutional-workflows-oecd-2026|Pardos e Borchers]] sostengono che il luogo conseguenziale dell'[[ai-education|IA nell'educazione]] non sia la finestra di chat ma il registratore, l'ufficio di consulenza e il comitato del curriculum. I loro esempi sono embedding prima che conversazioni: vettori di corsi appresi dalle storie di iscrizione, traduzione automatica tra gli spazi vettoriali di due istituzioni, e pipeline di tagging che mappano risorse aperte su uno standard.

I numeri sono specifici. La predizione del trasferimento basata su embedding ha validato 65 articolazioni esistenti ed è ora in pilota con 59 istituzioni e quattro sistemi di [[higher-ed|istruzione superiore]]. Gli ore-credito hanno spiegato solo il 6% della varianza nel carico di lavoro percepito, mentre le feature di attività del LMS ne hanno spiegato il 36%. Il tagging collaborativo con IA ha ridotto il tempo di circa il 50% ma l'accuratezza del 35%.

Il riscontro sull'adozione è quello che i pianificatori di infrastruttura dovrebbero conservare. In un esperimento 2×2, nascondere le raccomandazioni outlier a bassa confidenza ha alzato accettazione e produttività degli amministratori, mentre chiedere agli utenti di segnalare le raccomandazioni ha abbassato l'accettazione a meno che gli outlier fossero mostrati. Un raccomandatore più accurato può ancora fallire per come viene presentato il suo output, il che rende la progettazione dell'interfaccia parte dell'infrastruttura prima che un tocco finale.

## La valutazione come problema di plumbing

[[mcnamara-aimcai-continuous-assessment-infrastructure-2026|AIM-CAI]] sostiene che l'evidenza necessaria per interpretare l'apprendimento esista già ma sia frammentata fra sistemi che non riescono a leggersi a vicenda. Il suo framework ha sei livelli funzionali, tre confini inferenziali che limitano ciò che un'istantanea può sostenere e sette requisiti di governance tra cui auditabilità, stima dell'incertezza e override umano. È un framework prima che una distribuzione, e gli autori lo dicono.

[[lata-ferpa-compliant-local-llm-autograder|LaTA]] fornisce il caso più stretto: un modello locale di ragionamento che rimuove la domanda [[privacy|FERPA]] sull'invio del lavoro degli studenti a un fornitore piuttosto che gestirlo. Insieme suggeriscono che l'infrastruttura di valutazione non è una funzione di una piattaforma di apprendimento ma un problema separato con il proprio modello dei dati e le proprie modalità di fallimento.

## Costo, latenza e il problema della visibilità

Il tema ricorrente fra le implementazioni è che costo e latenza diventano visibili solo quando qualcuno li strumenta. La cifra di \$100.000 di hardware della Purdue è un numero di capitale con un costo del personale non dichiarato. Il benchmark del gateway di SPIN delimita l'overhead del proxy e non dice nulla della latenza end-to-end. La contabilità energetica di [[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] riporta circa 9,4 kW di assorbimento normale contro un picco osservato di 14,1 kW e un massimo teorico di 22,1 kW, e 872.997.430 token su una finestra di 17 giorni implicano \$82.843–\$251.806 di risparmio annuo contro equivalenti commerciali alle tariffe del lavoro.

Le piattaforme ospitate a scala di distretto riportano la stessa aritmetica: PSD401 AI Studio rivendica un costo per token inferiore del 67–90% rispetto ad alternative commerciali. Nessuno di questi numeri è confrontabile fra istituzioni senza lo stesso denominatore. Confrontabile è la pratica di misurare in primo luogo.

## La sovranità ha una dimensione di equità

Un gateway può instradare verso un modello locale che gestisce male la lingua dell'istituzione, e il silenzio risultante non è neutro. L'argomento dell'infrastruttura e quello della [[digital-divide|frattura digitale]] si incontrano qui: le istituzioni con cluster e personale acquisiscono capacità, e quelle senza assorbono ciò che il fornitore offre al prezzo che il fornitore fissa. I piani gratuiti sono genuinamente utili e genuinamente fragili, il che rende trattarli come strategia permanente una decisione su quali istituzioni vengono servite.

**L'infrastruttura media anche il significato.** [[watson-generative-ai-meaning-mediating-infrastructure-2026|Watson, Morgner e Brezovec (2026)]] trattano l'IA generativa come infrastruttura mediatrice del significato che reraforma prompt, rubric, feedback e generi in forme comunicativamente plausibili, quindi approvvigionamento e audit devono chiedere quali stili comunicativi un sistema riconosce, quali aiuti normalizza e se le aspettative su ritmo e lucentezza derivano più in fretta del sostegno.

## Implicazioni per la pratica

I dirigenti senior possono cominciare nominando la forma in cui ogni unità si trova davvero. Le sei forme differiscono in chi detiene i dati e chi assorbe il fallimento, e la maggior parte delle istituzioni si trova in diverse contemporaneamente: un tenant per il personale, uno strumento gratuito in un dipartimento, una piattaforma ospitata in un altro. Un inventario di una pagina su ciò che è in uso, dove vanno i dati e chi può cambiare il modello è più utile di un documento di strategia che ne descrive una sola.

La dirigenza IT e biblioteconomica può fare del gateway il luogo in cui la politica viene applicata. Fontys, MindRouter e SPIN convergono sullo stesso contratto: una superficie API, quote per utente, integrazione identitaria, instradamento regionale e una scheda del modello mostrata prima che la richiesta parta. Una regola che vive in un PDF e una regola che vive in un router sono oggetti diversi, e solo la seconda regge quando appare un nuovo modello.

Il personale finanziario e degli acquisti può strumentare il costo prima di scegliere un fornitore. Licenza per posto, piattaforme ospitate e gateway misurati premiano forme d'uso diverse, e l'unico modo per sapere quale sia più economica è misurare token, utenti attivi e carico di punta. Il servizio della Purdue ha raggiunto circa 1000 utenti con circa \$100.000 di hardware; un pilota ospitato riporta circa \$3 per utente al mese. Quelle cifre non sono confrontabili senza lo stesso denominatore.

I centri per l'insegnamento e l'apprendimento possono trattare i piloti su piani gratuiti come piloti. Gli strumenti gratuiti sono la ragione per cui molti educatori possono provare qualunque cosa, e arrivano senza traccia di audit, senza quote e con termini che possono cambiare. Un pilota che riesce dovrebbe spostarsi su una forma che l'istituzione può governare.

I dirigenti scolastici senza un data center possono girare comunque un modello locale. Un desktop ricondizionato con una GPU di fascia entry-level ospita un piccolo modello per un edificio, e il guadagno di privacy è fisico prima che contrattuale. È ancora un sistema di conservazione, quindi registrazione e accesso restano decisioni di progettazione.

I capi di dipartimento possono guardare oltre la finestra di chat. Articolazione, analytics di carico di lavoro, tagging e registri di valutazione sono i luoghi in cui le istituzioni hanno già delegato decisioni a un modello, e quei sistemi hanno bisogno della stessa governance di un chatbot, di solito con meno scrutinio.

## Idee sbagliate comuni

**"On-premises è più economico."** La quota di licenza sparisce e compaiono hardware, energia, raffreddamento e personale. Il servizio della Purdue è costato circa \$100.000 di hardware prima che qualcuno fosse pagato per farlo funzionare, e il personale è la parte che non si riduce.

**"Un gateway è solo un proxy."** Un proxy inoltra. Un gateway decide quale modello, quale regione, quale budget, quale utente, cosa viene registrato e cosa all'utente viene detto prima che prenda invio.

**"Locale significa privato."** La località cambia chi può citare in giudizio i dati, non se essi vengono conservati. Registrazione degli audit, conservazione dei prompt e accesso degli amministratori sono scelte di progettazione, e una distribuzione locale con registrazione completa è ancora una superficie di sorveglianza.

**"Comprare GPU è la strategia."** Capacità senza scheduling, quote e supporto diventa una coda. I casi di successo descrivono governance e operazioni almeno quanto l'hardware.

**"Il problema dell'IA è il chatbot."** La maggior parte del valore istituzionale descritto in questa letteratura si trova in articolazione, analytics di carico di lavoro, tagging e registri di valutazione, dove nessuno studente apre mai una finestra di chat.
