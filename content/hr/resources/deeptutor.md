---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Izdanje otvorenog koda agentnog okvira za poučavanje DeepTutor: jedno radno okruženje za poučavanje, generiranje pitanja, uvježbavanje do ovladanosti, istraživanje i vizualizaciju, s pamćenjem učenika koje se može pregledati."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**DeepTutor** je implementacija okvira za poučavanje otvorenog koda koji je evaluiran u [[intelligent-tutoring|studiji DeepTutor]] i odrastao je znatno izvan dosega tog rada u opće agentno radno okruženje za učenje. Poučavanje, rješavanje zadataka, generiranje kvizova, uvježbavanje do ovladanosti, istraživanje i vizualizacija dijele jedno izvršno okruženje sposobnosti i jedan kontekst sesije, pa profil učenika izgrađen tijekom rješavanja zadataka uvjetuje objašnjenja i zadatke za uvježbavanje koji slijede.

## Što možete raditi s tim

Deset načina rada — Razgovor, Postavljanje pitanja, Kviz, Istraživanje, Vizualizacija, Rješavanje, Učenje kolegija, Put do ovladanosti, Imersivno čitanje i Imersivno gledanje — rade na istom izvršnom okruženju i crpe iz baza znanja, knjiga, nacrta, bilježnica, banki pitanja i persona koje se mogu ponovno rabiti. Dohvaćanje je namjerno višestruko: verzionirane RAG knjižnice iznad LlamaIndexa, PageIndexa, GraphRAG-a, LightRAG-a ili udaljenog LightRAG poslužitelja, plus samostalno hostana baza WeKnora, knjižnica Tencent IMA ili MarginNote ili povezani Obsidian trezor. Pamćenje se može pregledati, a nije neprozirno: tragovi L1, površinski sažeci L2 i sinteza L3 vidljivi su i mogu se uređivati, uz graf pamćenja koji svaki sažetak povezuje s dokazima iza njega. Binarni program `deeptutor` daje terminalski REPL i struji NDJSON za svakog agenta koji ga želi pokretati kao alat, a zajednica EduHub dijeli vještine koje se mogu instalirati.

## Za koga je

Nastavnici i istraživači u visokom obrazovanju koji žele implementaciju okvira o kojem rad izvještava, razvijatelji koji grade na izmjenjivom izvršnom okruženju i samostalni učenici spremni pokrenuti vlastitu instancu. Dokumentacija je na deeptutor.info.

## Napomene

Licencirano Apache 2.0, u verziji 1.6.9 od rujna 2026. s otprilike 40.000 zvjezdica na GitHubu. Objavljena evaluacija iza njega — prosječno poboljšanje od 10,8 % na personaliziranim mjerama u odnosu na snažne osnovne modele i 29,4 % snažnije opće agentno zaključivanje na pet temeljnih modela, na mjerilu TutorBench — sažeta je na [[zhao-deeptutor-agentic-personalized-tutoring-2026|stranici članka]], čija ograničenja vrijede i ovdje. Kao i kod svakog otvorenog skupa alata za umjetnu inteligenciju, ključeve davatelja modela osiguravate sami, a stolna ili poslužiteljska implementacija očekuje Python 3.11 i Node.

## Povezani pojmovi
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
