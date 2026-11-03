---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Rilis open-source kerangka bimbingan agentic DeepTutor: satu ruang kerja untuk bimbingan, pembuatan soal, latihan penguasaan, riset dan visualisasi, dengan memori pembelajar yang dapat diperiksa."
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
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**DeepTutor** adalah implementasi open-source dari kerangka bimbingan yang dievaluasi dalam
[[intelligent-tutoring|studi DeepTutor]], dan telah tumbuh jauh melampaui cakupan makalah itu menjadi
ruang kerja belajar agent-native yang umum. Bimbingan, pemecahan masalah, pembuatan kuis, latihan
penguasaan, riset dan visualisasi berbagi satu runtime kapabilitas dan satu konteks sesi, sehingga
profil pembelajar yang terbangun saat menyelesaikan masalah mengondisikan penjelasan dan butir latihan
berikutnya.

## Apa yang dapat Anda lakukan dengannya

Sepuluh mode — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path,
Immersive Reading dan Immersive Watching — berjalan pada runtime yang sama, memanfaatkan basis
pengetahuan, buku, draf, notebook, bank soal dan persona yang dapat dipakai ulang. Retrieval-nya sengaja
multi-mesin: pustaka RAG berversi di atas LlamaIndex, PageIndex, GraphRAG, LightRAG atau server LightRAG
jarak jauh, plus basis WeKnora yang dihosting sendiri, pustaka Tencent IMA atau MarginNote, atau vault
Obsidian yang ditautkan. Memori dapat diperiksa alih-alih buram: jejak L1, ringkasan permukaan L2 dan
sintesis L3 terlihat dan dapat diedit, dengan Memory Graph yang menautkan setiap ringkasan ke bukti di
baliknya. Biner `deeptutor` menyediakan REPL terminal dan mengalirkan NDJSON untuk agen mana pun yang
ingin menjalankannya sebagai alat, dan komunitas EduHub mendistribusikan skill yang dapat dipasang.

## Untuk siapa

Dosen dan peneliti pendidikan tinggi yang menginginkan versi kerangka yang dilaporkan makalah itu dalam
bentuk yang dapat diterapkan, pengembang yang membangun di atas runtime yang dapat dipasang-pasang, dan
pembelajar mandiri yang bersedia menjalankan instansnya sendiri. Dokumentasi berada di deeptutor.info.

## Catatan

Berlisensi Apache 2.0, pada versi 1.6.9 per September 2026 dengan sekitar 40.000 bintang GitHub.
Evaluasi terbit di baliknya — perbaikan rata-rata 10,8% pada metrik personalisasi dibanding baseline
yang kuat dan penalaran agentic umum yang 29,4% lebih kuat di lima model tulang punggung, pada benchmark
TutorBench — diringkas di [[zhao-deeptutor-agentic-personalized-tutoring-2026|halaman artikelnya]],
yang batasannya juga berlaku di sini. Seperti tumpukan AI open-source mana pun, Anda menyediakan kunci
penyedia model, dan penerapan desktop atau server mengharapkan Python 3.11 dan Node.

## Konsep terkait
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
