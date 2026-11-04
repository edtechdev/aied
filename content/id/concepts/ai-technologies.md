---
title: "Teknologi"
created: "2026-08-19T18:10:00-04:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
updated: "2026-11-04T02:51:21-05:00"
translation_of: "concepts/ai-technologies"
source_updated: "2026-11-03T09:42:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Teknologi** — model, arsitektur, dan metode yang menggerakkan sistem pendidikan AI, serta konsep payung bagi cakupan basis pengetahuan tentang lapisan teknis. Jika [[pedagogy]] dan [[learning-theories]] menyangkut *bagaimana pengajaran dan pembelajaran terjadi*, dan [[ai-ed-evaluation]] menyangkut *apakah AI berfungsi*, halaman ini menjadi jangkar alur *teknis*: sistem AI ([[llm|model bahasa besar]], [[generative-ai|AI generatif]], [[multimodal|model multimodal]], [[educational-robotics|robot]]) dan teknik yang digunakan untuk membangun, mengendalikan, dan menerapkannya ([[prompt-engineering]], [[rag|retrieval-augmented generation]], [[reinforcement-learning]], [[educational-nlp]], [[knowledge-graph|grafik pengetahuan]], [[agentic-ai|orkestrasi agentic]]).

## Pertanyaan yang Perlu Dipertimbangkan

- Anda bisa menjadi pendidik yang sangat baik tanpa mampu membangun LLM — tetapi halaman ini berargumen bahwa pilihan teknis Anda tetap membentuk apa yang bisa dan tidak bisa dilakukan AI di ruang kelas Anda. Apa satu cara teknologi di balik sebuah alat AI mungkin diam-diam mengubah cara siswa Anda belajar, bahkan jika Anda tidak pernah melihat kodenya?
- Asumsi umum adalah bahwa model adalah keseluruhan cerita — padahal teknik seperti retrieval-augmented generation (RAG) dan prompt engineering justru ada untuk mengendalikan dan mendasarkan keluaran LLM. Sebelum membaca lebih lanjut, ketika Anda meminta AI untuk 'lebih akurat' atau 'gunakan sumber ini', menurut Anda apa yang sebenarnya terjadi di balik layar?
- RAG dijelaskan sebagai teknik inti untuk mengurangi halusinasi dan meningkatkan keamanan. Mengapa menurut Anda mengambil pengetahuan yang relevan untuk 'mendasarkan' jawaban AI lebih penting bagi pendidikan daripada, misalnya, obrolan santai — dan apa yang bisa salah jika pendasaran itu gagal?
- Halaman ini menyatakan bahwa pilihan teknis mewujudkan asumsi pedagogis: tutor yang dibangun di atas prompting Sokratik bernalar bersama pembelajar, sementara model penghasil jawaban mungkin hanya menyerahkan solusi. Dapatkah Anda mengingat alat AI yang pernah Anda gunakan yang tampak 'mengasumsikan' filosofi pengajaran tertentu — dan apakah itu selaras dengan cara Anda sebenarnya ingin mengajar atau belajar?
- Di luar akurasi mentah, halaman ini menyarankan sistem AI dievaluasi berdasarkan keandalan, pedagogi, dan keadilan. Metrik utama apa yang Anda duga paling sering dijadikan patokan orang (termasuk banyak pendidik) ketika menilai apakah sebuah alat AI 'berfungsi', dan mengapa metrik itu mungkin lebih banyak menyembunyikan daripada mengungkap?
- Agentic AI dijelaskan sebagai pergeseran AI 'dari alat yang merespons prompt menjadi kolaborator proaktif.' Bagaimana sistem yang memprakarsai dan mengorkestrasi alur kerja bertahap secara mandiri dapat mengubah apa yang menjadi tanggung jawab Anda, sebagai instruktur atau pembelajar — dan siapa yang meminta pertanggungjawabannya?

## Pendahuluan

[[ai-education|AI dalam pendidikan]] berjalan di atas tumpukan teknis tertentu, dan memahaminya penting bagi [[teacher-role|pendidik]] dan peneliti bahkan ketika mereka tidak membangun sistem sendiri — karena pilihan teknis membentuk apa yang bisa dan tidak bisa dilakukan AI di ruang kelas, risiko yang dibawanya, serta cara mengevaluasinya. Halaman ini mengorganisasi cakupan konsep teknis basis pengetahuan: sistem AI, teknik yang mengadaptasi dan mengendalikannya, dan bagaimana lapisan teknis terhubung dengan pedagogi, penilaian, dan evaluasi.

## Sistem AI dalam pendidikan

- **Model bahasa besar (LLM).** Tulang punggung komputasional sebagian besar [[ai-education|AIED]] modern — [[llm|LLM]] menghasilkan teks menyerupai manusia untuk tutoring, penilaian, dan pembuatan konten, dan merupakan teknologi yang paling banyak dirujuk dalam basis pengetahuan. [[llm-training-and-fine-tuning|Pelatihan dan penyetelan halus]] mengadaptasi LLM umum untuk penggunaan pendidikan.
- **AI generatif.** Kategori sistem yang lebih luas yang menghasilkan teks, kode, gambar, dan konten lain — [[generative-ai|AI generatif]] (terutama digerakkan oleh LLM) adalah teknologi di balik gelombang penelitian [[ai-education|AIED]] saat ini. Lihat juga [[multimodal|model multimodal]] (teks, gambar, audio) dan [[simulation]].
- **Robot dan sistem terwujud.** [[educational-robotics|Robot dalam pendidikan]] menambahkan kehadiran terwujud dan sering kali sosial — kit yang dapat diprogram untuk berpikir komputasional serta robot humanoid/sosial untuk tutoring, bercerita, dan bermain peran. Robotika adalah alur teknis tersendiri yang bersinggungan dengan [[agentic-ai|AI agentic]] dan desain [[human-in-the-loop-ai|human-in-the-loop]].
- **Sistem berbasis pengetahuan.** [[knowledge-graph|Grafik pengetahuan]] dan [[educational-nlp|NLP pendidikan]] merepresentasikan serta memproses pengetahuan domain, yang semakin sering dikombinasikan dengan LLM untuk tutoring yang berdasar dan dapat dijelaskan.

## Teknik dan metode

- **Prompt engineering.** [[prompt-engineering|Prompt engineering]] adalah cara pendidik dan pengembang membentuk keluaran LLM — mekanisme utama melalui mana pengalihan beban dan pengendalian diwujudkan dalam interaksi dengan LLM.
- **Retrieval-augmented generation (RAG).** [[rag|RAG]] mendasarkan keluaran LLM pada pengetahuan yang diambil, mengurangi halusinasi dan meningkatkan akurasi — teknik inti untuk penerapan pendidikan yang [[pedagogical-safety|aman]].
- **Pembelajaran penguatan.** [[reinforcement-learning|Pembelajaran penguatan]] melatih agen untuk mengoptimalkan perilaku dari waktu ke waktu, digunakan dalam [[adaptive-learning|sistem adaptif]] dan [[game-based-learning|pembelajaran berbasis permainan]].
- **Orkestrasi agentic.** Sistem [[agentic-ai|AI agentic]] merencanakan dan menjalankan alur kerja bertahap — sering kali mengorkestrasi beberapa agen khusus (lihat [[agentic-ai|sistem multi-agen]]) — dan sedang membentuk ulang AI dari alat yang merespons prompt menjadi kolaborator proaktif.
- **Tumpukan agen pendidikan tertinggal dari garis depan.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] memetakan 474 studi dan menemukan model seri GPT serta LangChain dominan sementara orkestrasi alat yang terkendali, memori persisten, dan perencanaan jangka panjang sebagian besar tidak ada — dan hanya 138 dari 474 (29%) yang bersandar pada teori pendidikan.
- **Pelatihan dan adaptasi model.** [[llm-training-and-fine-tuning|Pelatihan dan penyetelan halus LLM]], [[educational-llm-alignment|keselarasan pendidikan]], dan [[cstutorbench-slm-tutors|adaptasi model bahasa kecil]] membuat model umum menjadi spesifik untuk pendidikan — meskipun bukti dalam basis pengetahuan menempatkan [[rag|pengambilan]] dan [[prompt-engineering|prompting]] di depan pelatihan dalam urutan keputusan, karena prompt yang berdasar dengan baik lebih murah daripada model yang diadaptasi.

## Bagaimana lapisan teknis terhubung dengan bidang ini

Alur teknis tidak terpisahkan dari tema-tema lain dalam basis pengetahuan:

- **Pedagogi:** pilihan teknis mewujudkan asumsi pedagogis — [[intelligent-tutoring|tutor]] yang dibangun di atas [[socratic-method|prompting Sokratik]] bernalar bersama pembelajar, sementara model penghasil jawaban mungkin secara default langsung memberi jawaban (lihat [[pedagogy|pedagogi dan strategi pengajaran]]).
- **Penilaian dan evaluasi:** [[ai-ed-evaluation]] dan [[benchmark|tolok ukur]] menentukan apakah sistem AI benar-benar berfungsi; [[assessment]] dan [[automated-assessment]] menggunakan tumpukan teknis untuk menilai dan menghasilkan.
- **Penggunaan yang bertanggung jawab:** teknik teknis menjadi pusat [[reducing-ai-misuse|pengurangan penyalahgunaan AI]] — pendasaran [[rag]], pagar pengaman, [[prompt-engineering]] [[scaffolding]], dan [[human-in-the-loop-ai|pengawasan manusia]] menentukan apakah AI mendukung atau melemahkan pembelajaran ([[cognitive-offloading]], [[hallucination-risk]]).

**Perhatian penelitian terkonsentrasi pada sebagian kecil ekosistem alat.** Dengan memetakan 85 alat AI terhadap literatur STEM dan teknik, [[beyond-chatgpt-stem-ai-tool-mapping-2026|Terkowsky et al. (2026)]] menemukan hanya 36 yang terlihat dalam penelitian sama sekali dan AI percakapan/LLM menyumbang 73.7% dari 927 koneksi makalah–alat, dengan 23 publikasi dalam konteks laboratorium yang mapan.

## Implikasi bagi AI dalam pendidikan

- **Literasi teknis mendukung penggunaan kritis:** memahami model dan teknik yang mendasarinya membantu pendidik dan pembelajar menggunakan AI dengan baik dan mengevaluasinya secara kritis (lihat [[ai-literacy]]).
- **Pilih teknologi berdasarkan niat pedagogis:** sistem dan teknik AI harus mengikuti [[pedagogy|strategi pengajaran]], bukan sebaliknya.
- **Evaluasi lapisan teknis:** penelitian [[ai-ed-evaluation]] dan [[benchmark]] menilai sistem AI berdasarkan keandalan, pedagogi, dan [[equity-in-ai-education|keadilan]], bukan hanya akurasi utama.
- **Robot dan agen adalah bagian dari tumpukan:** sistem [[educational-robotics|terwujud]] dan [[agentic-ai|agentic]] memperluas repertoar teknis melampaui teks — dan membawa pertimbangan desain serta keamanannya sendiri.

## Miskonsepsi Umum

**"Model adalah keseluruhan cerita."** Teknik seperti retrieval-augmented generation dan prompt engineering justru ada untuk mengendalikan dan mendasarkan keluaran LLM, dan arsitektur di sekitar model sering menentukan apakah model itu dapat digunakan di ruang kelas. Dua sistem dengan model yang sama bisa berbeda sepenuhnya dalam keandalan karena apa yang mengelilinginya.

**"Kematangan teknis bidang ini sudah mapan."** Pemetaannya tipis justru di tempat yang penting: di seluruh **474 studi**, model seri GPT dan LangChain dominan sementara **orkestrasi alat yang terkendali, memori persisten, dan perencanaan jangka panjang sebagian besar tidak ada**, dan hanya **138 dari 474 (29%)** yang bersandar pada teori pendidikan. Tumpukan yang digunakan jauh lebih sempit daripada tumpukan yang dibutuhkan bidang ini.

**"Pilihan teknis adalah urusan teknolog, bukan pendidik."** Pembingkaian halaman ini adalah bahwa Anda bisa menjadi pendidik yang sangat baik tanpa mampu membangun LLM dan pilihan teknis Anda tetap membentuk apa yang bisa dan tidak bisa dilakukan AI di ruang kelas Anda. Apakah sebuah sistem mendasarkan jawabannya pada materi kursus adalah keputusan dengan konsekuensi pedagogis yang harus diambil seseorang.

**"Model yang lebih cakap akan menyelesaikan kesenjangan bidang ini."** Orkestrasi, memori, dan perencanaan jangka panjang adalah masalah arsitektural, bukan masalah kapabilitas — ketiadaan yang terdokumentasi adalah ketiadaan sistem yang mengendalikan penggunaan alatnya sendiri dari waktu ke waktu, yang tidak disediakan model yang lebih baik dengan sendirinya.

## Konsep terkait

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## Artikel terkait
- [[beyond-chatgpt-stem-ai-tool-mapping-2026]] — Visibilitas penelitian 85 alat AI dalam pendidikan STEM dan teknik (Terkowsky et al. 2026)

- [[agentic-ai-education-scoping-review]] — Tinjauan cakupan AI agentic dalam pendidikan
- [[genai-meta-analysis-programming-learning]] — Meta-analisis efek GenAI terhadap produktivitas dan pembelajaran dalam pemrograman
- [[cstutorbench-slm-tutors]] — Tolok ukur tutoring model bahasa kecil
- [[educational-llm-alignment]] — Menyelaraskan LLM untuk pendidikan
- [[eduguard-safe-rag-llm-tutor]] — Pagar pengaman tutor LLM berbasis RAG
- [[hazra-safetutors-pedagogical-safety-2026]] — Keamanan dan kerugian tutor AI
- [[elbench-education-llm-benchmark-2026]] — Tolok ukur LLM pendidikan
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Robot sosial generatif Teachy Mini
- [[benzion-ai-physics-simulations-virtual-lab]] — Simulasi fisika buatan LLM untuk ruang kelas
