---
title: "Quali opzioni e questioni considerare quando si adottano strumenti di IA?"
created: "2026-11-12T19:10:00-05:00"
updated: "2026-11-14T04:15:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-14T04:15:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

Un presidente di dipartimento ha tre preventivi per una piattaforma di [[intelligent-tutoring|tutoraggio con IA]] e una scadenza venerdì. Un [[teacher-role|docente]] vuole usare uno strumento gratuito che metà del personale usa già. A un responsabile dei sistemi informativi viene chiesto se l'istituzione debba gestire un proprio modello e non sa dire quanto costerebbe.

Sono la stessa domanda a tre altitudini. Le opzioni sono meno di quanto suggerisca un elenco di fornitori, e le questioni durano più di qualsiasi prodotto.

La scelta dovrebbe corrispondere alla decisione che si ha davanti. Un individuo decide cosa inserire in uno strumento. Un'istituzione decide chi può usare quale modello, su quali dati, a quale costo, e chi risponde quando qualcosa va storto. La maggior parte delle cattive decisioni di adozione nasce dal rispondere alla domanda istituzionale con uno strumento individuale.

## La versione breve

Cinque regole coprono gran parte della questione.

1. Fissa prima il confine dei dati, perché tutto il resto è rinegoziabile e quello no.
2. Scegli la forma più piccola che basta: strumenti gratuiti o esternalizzati per un progetto pilota, una piattaforma ospitata quando serve controllo sui dati senza GPU, un gateway quando servono quote e instradamento, e inferenza di proprietà solo quando le altre tre falliscono.
3. Confronta i prezzi a postazione e a consumo con i tuoi numeri, perché di solito l'uso proviene da pochi utenti intensivi.
4. Rendi il percorso autorizzato più veloce di quello non approvato, dato che EDUCAUSE ha rilevato che il 94% del personale e dei docenti usa l'IA per lavoro, il 54% conosce la policy e il 56% usa strumenti che l'istituzione non fornisce.
5. Poi decidi in anticipo quali prove ti farebbero fermare, perché un'adozione senza test di uscita diventa permanente per impostazione predefinita.

## A livello individuale

Un docente o uno studente prende una decisione sui dati prima che una decisione didattica. Nomi degli studenti, dettagli dei piani educativi individualizzati, note disciplinari e ricerca non pubblicata creano la responsabilità, quindi oscura prima i dati e verifica se lo strumento fa ancora il suo lavoro. Poi leggi i termini: conservazione, addestramento sui tuoi input e subappaltatori stanno di solito in un documento che nessuno apre, e se la risposta non si trova in cinque minuti, trattala come sconosciuta.

Sappi cosa fa bene lo strumento. Il testo generato è più forte nella stesura, nella ristrutturazione e nella sintesi, e più debole nell'aritmetica, nelle citazioni e in tutto ciò che richiede fatti aggiornati. Sappi anche quanto ti costa. Un livello gratuito è gratuito perché l'uso è il prodotto o perché il livello cambierà, e entrambe le cose sono una ragione per tenere a mente una via d'uscita.

Restano due domande. Chi altro è coinvolto, dato che uno strumento che rimodella un corso è una decisione per gli studenti che vi partecipano. E se è consentito: leggi la policy una volta se esiste, e se non esiste, le prove su [[shadow-ai]] suggeriscono che stai già facendo politica per impostazione predefinita.

L'euristica brutale: usa lo strumento autorizzato quando è a portata di mano, e quando non lo è, scrivi cosa hai fatto e perché. Quel registro è ciò che ti protegge se il giudizio viene contestato in seguito.

## A livello istituzionale

Con un solo acquisto un'istituzione ottiene un servizio, un flusso di dati, un obbligo di supporto e un impegno politico. Sei forme compongono il menu reale, e la maggior parte delle istituzioni si trova in due o tre di esse senza saperlo.

L'inizio più facile è uno strumento esternalizzato gratuito. AI Tutor Pro di Contact North non richiede account, e Playlab consente agli educatori di costruire app basate sul proprio [[curriculum-design|curricolo]] mentre il fornitore ospita i modelli. Entrambi vanno bene per un progetto pilota e sono scarsi come soluzione stabile: nessuna traccia di audit, nessun controllo delle quote e termini che possono cambiare.

Acquistare postazioni su un tenant commerciale, che sia [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot o Google Gemini for Education, porta un approvvigionamento rapido, SSO e una console di amministrazione, e lascia scelta del modello e conservazione al fornitore.

Una piattaforma che ospiti tu tiene i dati più vicini. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) si distribuisce nel tuo account AWS, e il progetto pilota di Vanderbilt ha riportato circa \$3 per utente al mese su 1.300 utenti, metà dei quali sotto \$1 di token. Questo compra il controllo dei dati senza GPU.

Un gateway su fornitori misti mette una sola porta d'ingresso davanti a diversi. Porta quote, SSO, logging e instradamento regionale; Fontys ne ha gestito uno per 300 utenti con un tetto mensile di \$500 mai superato, e [MindRouter](/aied/resources/mindrouter/) aggiunge pianificazione ponderata per ruolo e misurazione dell'energia.

L'inferenza propria è la forma più costosa e la più indipendente. I due servizi di Purdue hanno raggiunto oltre 1000 utenti su 10+ modelli [[open-source]] per circa \$100.000 di hardware, prima del personale. Risponde a un regolatore senza chiedere permesso a un fornitore.

L'ultima forma è l'IA dentro strumenti che già gestisci: un tipo di domanda Moodle, il partner IA di una piattaforma di discussione, uno strumento di feedback sui saggi. Sforzo basso e cambiamento corso per corso, con poco appreso al centro.

## Le questioni che non passano

[[privacy|Protezione dei dati]] viene per prima. Ciò che conta è quale registro ora esista che prima non c'era, dove risiede e chi può recuperarlo. Uno strumento che riceve un elenco di classe ha creato un registro istituzionale, qualunque cosa dica il contratto.

Identità e accesso vengono subito dopo. Qualunque cosa usata su larga scala richiede SSO, accesso basato sui ruoli e disattivazione, e uno strumento che non riesce a disattivare un dipendente che se ne va lascia un account attivo con i tuoi dati dentro.

I costi dipendono da come si conta il prezzo. Il prezzo a postazione premia il numero di persone e il prezzo a consumo premia l'uso. Poiché una piccola quota di utenti genera di solito la maggior parte dei token, il prezzo a postazione sembra conveniente finché gli utenti intensivi non vanno altrove.

La misurazione è di solito il pezzo mancante. EDUCAUSE ha rilevato il 92% con una strategia IA legata al lavoro e il 13% che misura il ritorno sull'investimento. Se non sai dire cosa ha sostituito lo strumento, non puoi difendere il rinnovo.

[[equity-in-ai-education|Equità]] e accessibilità appartengono all'approvvigionamento, non a una correzione successiva. Uno strumento che richiede una connessione veloce, un livello a pagamento o padronanza dell'inglese distribuisce i suoi benefici in modo diseguale.

[[academic-integrity|Integrità accademica]] cambia ciò che la valutazione misura. Quando uno strumento può completare il compito, è il compito che va rivisto.

Personale e dipendenza dal fornitore contano quanto il prezzo. Ogni forma sopra tranne quella gratuita ha bisogno di un responsabile, e il fallimento tipico è comprare la quarta o la quinta forma e assegnarla a chi era già occupato. Chiedi cosa succede al rinnovo, a un cambio di prezzo e alla dismissione di un modello; le forme a gateway esistono perché la risposta sia un cambio di instradamento anziché una migrazione.

## Come appare un buon primo anno

Scegli due o tre misure prima che qualsiasi cosa parta: chi l'ha usato, per cosa, quanto è costato per utente attivo e cosa è cambiato nel lavoro. Un progetto pilota che non sa produrre quei numeri è una demo con un budget.

Controlla nello stesso momento le condizioni al contorno. Se lo strumento ha toccato i registri degli studenti, il flusso di dati corrispondeva a ciò che hai detto all'ufficio privacy? Se l'uso non è stato misurato, era perché lo strumento non poteva riportarlo o perché nessuno l'ha chiesto?

Mantieni corto il percorso autorizzato. I dati di EDUCAUSE suggeriscono che le persone aggirano la governance perché la via approvata richiede più tempo del compito. Un gateway con una scheda del modello e accesso in giornata è uno strumento di governance oltre che una comodità informatica.

## Errori comuni

Comprare una piattaforma prima di nominare il problema produce statistiche d'uso e poco altro. Trattare il gratuito come strategia funziona per un progetto pilota e fallisce come infrastruttura. Un modello locale cambia chi può essere citato in giudizio; non decide se i prompt vengono conservati. Misurare la soddisfazione invece dell'effetto trasforma «ai docenti è piaciuto» in un risultato che non è. E una policy pubblicata senza un percorso praticabile descrive preferenze, non regole.
