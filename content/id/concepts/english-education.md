---
title: "Pendidikan Bahasa Inggris (EAP / EFL / ESL)"
created: "2026-08-21T12:30:00-04:00"
type: concept
foundations: [academic-integrity]
technology: [generative-ai]
assessment: [ai-feedback-quality, automated-assessment]
ethics: [equity-in-ai-education]
discipline: [english education, language learning, writing education]
level: [higher ed, k 12]
confidence: high
connected_resources: [teacher-dev]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/english-education"
source_updated: "2026-11-06T03:00:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pendidikan bahasa Inggris** — penerapan AI pada [[teacher-role|pengajaran]] dan pembelajaran bahasa Inggris, khususnya **English for Academic Purposes (EAP)** dan pengajaran bahasa Inggris secara lebih luas (EFL/ESL/L2). Ini untaian [[discipline-specific-aied|khas disiplin]] dalam [[ai-education|AIEd]], berbeda dari [[language-learning]] umum (akuisisi bahasa kedua/asing apa pun) maupun [[writing-education]] (menulis sebagai keterampilan umum): fokusnya bahasa Inggris sebagai bahasa target dan register akademik, dengan pedagogi khasnya — kompetensi komunikatif, penulisan akademik berbasis genre, umpan balik korektif, serta membaca/menulis dalam register akademik — yang membentuk bagaimana AI dirancang, dipakai, dan dievaluasi.

## Pertanyaan yang Perlu Dipertimbangkan

- Bahasa Inggris paling baik ditangani model bahasa besar. Itu memberi pembelajar perancah kuat untuk penulisan akademik — tetapi dapatkah itu juga diam-diam memantapkan bias ke arah bahasa Inggris akademik standar yang meminggirkan penulis [[multilingual-learning|multibahasa]] dan World Englishes? Hasil mana yang menurut Anda mendominasi?
- English for Academic Purposes (EAP) berpusat pada penulisan akademik berbasis genre, umpan balik korektif, dan register akademik — berbeda dari pembelajaran bahasa umum atau pengajaran menulis umum. Mengapa register khusus bahasa Inggris akademik dapat mengubah apa yang perlu dilakukan alat AI dibanding dukungan menulis generik?
- Jika AI yang merevisi bahasa Inggris Anda justru paling kuat pada 'bahasa Inggris akademik standar' yang ingin Anda kuasai, kapan itu membantu dan kapan meratakan suara atau dialek Anda sendiri? Bagaimana Anda membedakan keduanya?
- Umpan balik otomatis dan tutor AI semakin umum dalam pengajaran menulis dan berbicara bahasa Inggris. Apa yang mungkin luput dari umpan balik AI tentang kompetensi komunikatif, register, dan audiens yang akan ditangkap pengajar manusia atau teman sebaya?

## Pendahuluan

Bahasa Inggris termasuk untaian disiplin paling terdampak AI karena [[llm|LLM]] didominasi bahasa Inggris: model paling kuat dalam menghasilkan, merevisi, dan mengevaluasi teks bahasa Inggris, yang justru menjadi pusat pengajaran EAP dan EFL/ESL. Keunggulan itu menciptakan pedang bermata dua yang khas — [[scaffolding]] kuat untuk bahasa Inggris akademik di satu sisi, dan bias mengakar ke arah bahasa Inggris akademik standar yang dapat meminggirkan pembelajar multibahasa di sisi lain.

## Cakupan dan fokus

Konsep ini mengorganisasi [[research-methods-aied|penelitian]] AI dalam **pendidikan bahasa Inggris** — subset pembelajaran bahasa yang bahasa targetnya Inggris (termasuk konteks EFL/ESL/L2) dan registernya akademik (EAP). Tema inti:

- **Bahasa Inggris akademik (EAP):** dukungan AI untuk bahasa Inggris berbasis genre dan khas disiplin dalam penulisan, membaca, dan umpan balik di pendidikan tinggi — berbeda dari pengajaran menulis umum.
- **Pengajaran bahasa Inggris (EFL/ESL/L2):** [[intelligent-tutoring|tutor AI]], interlokutor, dan alat [[feedback]] bagi pembelajar yang menguasai bahasa Inggris.
- **[[assessment]] khas bahasa Inggris:** evaluasi dan umpan balik otomatis atas tulisan dan tuturan Inggris, termasuk revisi penulisan EAP dan penilaian penulisan L2.
- **[[reading-education|Keterbacaan]] bacaan dan sastra:** [[bird-multimodal-educational-literature-2026|Bird (2026)]] memadukan klasifikasi teks transformer dengan fitur linguistik komputasional untuk mengklasifikasikan sastra Inggris menurut UK Key Stage, dengan F1 0.996 — pelengkap terukur dan berbasis data bagi dukungan membaca EAP berbasis genre dan keselarasan tingkat baca.
- **Keadilan linguistik:** ketegangan antara dominasi bahasa Inggris dalam AI dan kebutuhan penulis multibahasa serta World Englishes.

## Bagaimana pendidikan bahasa Inggris berbeda dari Pembelajaran Bahasa

[[language-learning]] adalah payung lebih luas untuk menguasai bahasa kedua/asing apa pun — lisan, tulisan, dan literate — melalui interlokutor AI, alat pelafalan, dan latihan percakapan. Pendidikan bahasa Inggris adalah kasus **khas bahasa Inggris**, dan di dalamnya EAP adalah kasus **khas register**:

| Dimensi | [[language-learning]] | **Pendidikan bahasa Inggris (halaman ini)** |
|-----------|----------------------|-----------------------------------|
| Bahasa target | L2 apa pun (Prancis, Spanyol, Jepang, …) | Bahasa Inggris khususnya |
| Fokus | Akuisisi L2 umum: [[speech-and-voice-technologies|dialog lisan]], pelafalan, literasi | Bahasa Inggris sebagai target + register akademik |
| Konteks khas | Percakapan, pelafalan, kefasihan umum | **EAP**: penulisan akademik, membaca, umpan balik, genre |
| AI representatif | Interlokutor L2, [[speech-and-voice-technologies|umpan balik pelafalan]], L2 berbantuan robot | Alat penulisan EAP, umpan balik sejawat EFL, penilaian penulisan akademik Inggris |

Keduanya banyak tumpang tindih (kebanyakan pembelajaran bahasa Inggris juga akuisisi L2), tetapi pendidikan bahasa Inggris mengedepankan bahasa Inggris sebagai target dan register akademik — misalnya [[alharbi-ethical-genai-eap-2026|integrasi GenAI yang etis dalam EAP]], [[feedback-literacy-scripts-eap-writing|revisi penulisan EAP dengan GenAI]], dan [[genai-differentiated-eap-reading-materials-2026|adaptasi materi bacaan EAP]] khas EAP dengan cara yang tak dimiliki penelitian pembelajaran bahasa generik.

## Bagaimana pendidikan bahasa Inggris berbeda dari Pendidikan Menulis

[[writing-education]] menyangkut menulis sebagai keterampilan kognitif dan retoris umum — di semua bahasa dan disiplin, dari komposisi sampai integritas akademik. Pendidikan bahasa Inggris berfokus khusus pada **bahasa Inggris** dan, di dalam EAP, pada **register akademik**:

| Dimensi | [[writing-education]] | **Pendidikan bahasa Inggris (halaman ini)** |
|-----------|----------------------|-----------------------------------|
| Cakupan | Menulis umum (bahasa apa pun, genre apa pun) | Bahasa Inggris sebagai target + register akademik |
| Perhatian khas | Komposisi, revisi, [[agency]], kepengarangan | Genre EAP, register akademik, penulisan L2/EFL, [[feedback-literacy|literasi umpan balik]] dalam bahasa Inggris |
| Sudut penilaian | [[automated-essay-scoring|Penilaian esai otomatis]], umpan balik menulis luas | Penilaian khas Inggris (penulisan EAP, [[peer-assessment|umpan balik sejawat]] EFL, evaluasi penulisan L2) |
| Sudut keadilan | Bias dalam umpan balik menulis | Bias + ketegangan dominasi Inggris/multibahasa (World Englishes) |

Banyak artikel pendidikan menulis berorientasi Inggris lebih dulu (misalnya [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]), tetapi dibingkai sebagai penelitian menulis umum; pendidikan bahasa Inggris memusatkan kembali dimensi **bahasa Inggris sebagai target** dan **bahasa Inggris akademik** yang kurang ditekankan halaman penulisan dan pembelajaran bahasa generik.

## Artikel dalam klaster ini

- **Khas EAP:** [[alharbi-ethical-genai-eap-2026|Integrasi GenAI yang etis dalam EAP]], [[feedback-literacy-scripts-eap-writing|revisi penulisan EAP dengan GenAI]], [[genai-differentiated-eap-reading-materials-2026|adaptasi materi bacaan EAP]].
- **EFL/ESL/L2:** [[tact-pedagogically-adaptive-esl-tutoring|tutoring ESL TACT]], [[sutama-chatgpt-eportfolio-speaking-2026|berbicara EFL dengan e-portofolio ChatGPT]], [[irwin-muller-efl-peer-feedback-literacy|literasi umpan balik sejawat EFL]], [[ai-vs-human-assessment-efl-tpck-2026|penilaian EFL oleh AI vs manusia]], [[acceptance-ai-english-tools-2026|penerimaan alat bahasa Inggris berbasis AI]], [[ai-tools-arab-english-classrooms|AI di kelas bahasa Inggris Arab]], [[zhao-ji-appraisal-human-ai-revisions-2026|analisis apraisal revisi sejawat dan AI pada esai argumentatif EFL]].
- **Penulisan/penilaian Inggris L2:** [[self-referential-l2-writing-llm-assessment|penilaian penulisan L2 swarujuk]], [[ai-interlocutor-l2-spoken-dialogue|interlokutor dialog lisan L2]].
- **Keadilan linguistik / World Englishes:** [[genai-linguistic-diversity-academic-writing|GenAI dan keragaman linguistik dalam penulisan akademik]], [[governing-unseen-ai-literacy-language-teachers-2026|literasi AI guru bahasa]], [[structural-silence-underrepresented-language-ai-2026|bahasa kurang terwakili dalam infrastruktur AI]].

## Mengapa ini penting

Dominasi bahasa Inggris dalam AI adalah ciri penentu untaian ini. Karena model paling kuat dalam bahasa Inggris dan khususnya bahasa Inggris akademik standar, pendidikan bahasa Inggris diuntungkan secara tidak proporsional (perancah EAP kuat) sekaligus menanggung risiko khas (bias monolingual, diskriminasi terhadap World Englishes dan penulis multibahasa). Penelitian di sini terhubung dengan [[equity-in-ai-education|keadilan]], [[bias-mitigation|mitigasi bias]], [[automated-assessment|penilaian otomatis]], [[ai-feedback-quality|kualitas umpan balik AI]], dan [[academic-integrity|integritas akademik]].

Sintesis Scopus atas 54 studi EFL menempatkan [[limitations-in-aied-research|keterbatasan]] terbanyak yang dilaporkan bidang ini pada [[agency|kemandirian]] pembelajar: [[cognitive-offloading|ketergantungan berlebih]] pada AI di 27 studi (50%) dan berkurangnya [[critical-thinking|berpikir kritis]] di 25 (46%), dibanding keluaran AI tak andal di 22 (41%) sebagai masalah teknis utama ([[ai-limitations-efl-higher-education-review-2026|Espinoza-Celi & Vargas-Saritama (2026)]]).

## Implikasi bagi instruktur bahasa Inggris / EAP / EFL-ESL

- **Manfaatkan kekuatan AI untuk bahasa Inggris akademik secara sengaja.** Karena model paling kuat dalam bahasa Inggris dan bahasa Inggris akademik standar, instruktur EAP dapat memakai AI untuk penulisan berbasis genre, diferensiasi materi bacaan ([[genai-differentiated-eap-reading-materials-2026|materi EAP]]), dan umpan balik revisi — tetapi bingkai AI sebagai mitra penyusunan draf/umpan balik, bukan mesin jawaban.
- **Lindungi register bahasa Inggris akademik dan [[feedback-literacy|literasi umpan balik]].** [[feedback-literacy-scripts-eap-writing|Revisi penulisan EAP]] menunjukkan umpan balik hanya seproduktif literasi umpan balik pembelajar — ajari siswa menafsirkan, menilai, dan bertindak atas umpan balik AI, serta pakai mekanisme penilai kedua untuk memeriksa kualitas AI.
- **Amati ketegangan keadilan akibat dominasi bahasa Inggris.** Model memprioritaskan bahasa Inggris akademik standar, meminggirkan World Englishes dan penulis multibahasa ([[genai-linguistic-diversity-academic-writing|World Englishes]], [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]]) — audit umpan balik untuk bias monolingual dan ekspektasi yang diturunkan.
- **Integrasikan AI secara etis ke dalam EAP.** [[alharbi-ethical-genai-eap-2026|GenAI etis dalam EAP]] menyerukan penggunaan transparan dan bertanggung jawab dalam pengajaran bahasa Inggris di [[higher-ed]] yang menjaga integritas akademik.
- **Harapkan adopsi yang hati-hati dan mengutamakan persiapan.** [[li-language-educators-genai-review-2026|Tinjauan sistematis atas 23 studi]] (Li et al. 2026) menemukan pendidik bahasa paling menghargai [[generative-ai|GenAI]] untuk persiapan di balik layar — perencanaan pelajaran, pembuatan materi, dukungan/umpan balik penulisan — sementara ragu memakainya langsung di kelas, dengan kekhawatiran utama pada [[academic-integrity|integritas akademik]] (plagiarisme dan [[assessment-validity|validitas penilaian]]). Adopsi dibentuk faktor identitas profesional, [[pedagogy|pedagogis]], teknis, [[governance|institusional]], dan integritas; celah kompetensi memetakan ke episteme (kapabilitas/batas AI), techne ([[prompt-engineering|rekayasa prompt]], desain tugas/penilaian ber-AI, deteksi teks buatan AI), dan phronesis (pertimbangan [[ethics|etis]], bias/privasi) — jadi instruktur EAP/EFL perlu membangunnya secara sengaja dan merencanakan penerapan "layanan pendukung dahulu, kelas kemudian".
- **Diferensiasikan menurut kemahiran dan kebutuhan.** [[ai-vs-human-assessment-efl-tpck-2026|Penilaian EFL]] dan penelitian tutoring adaptif mendukung penyesuaian dukungan dan evaluasi AI dengan tingkat pembelajar alih-alih satu ukuran untuk semua.

- **Bobotkan teknologi ke arah produksi.** Di 33 studi TEFL, estimasi gabungannya kecil hingga sedang (g = 0.38, turun menjadi 0.28 setelah trim-and-fill) dan meningkat seiring jenjang pendidikan, lebih menyukai keterampilan produktif — berbicara dan menulis — daripada yang reseptif ([[liu-emerging-tech-tefl-review-2026|Liu, Hashim & Sulaiman (2026)]]).

## Miskonsepsi Umum

- **"Dalam EFL, AI terutama mengancam kecurangan."** [[limitations-in-aied-research|Keterbatasan]] terbanyak yang dilaporkan bidang ini adalah **kemandirian pembelajar**, muncul sebagai [[cognitive-offloading|ketergantungan berlebih]] di **27** dari sintesis Scopus atas **54 studi**. Biaya yang terdokumentasi adalah ketergantungan, bukan ketidakjujuran, sehingga menuntut intervensi berbeda.
- **"Guru bahasa mengadopsi dengan antusias atau tidak sama sekali."** [[li-language-educators-genai-review-2026|Tinjauan sistematis atas 23 studi]] (Li et al.) menemukan **adopsi hati-hati dan mengutamakan persiapan** sebagai polanya. Guru berhati-hati secara terukur, bukan terbelah menjadi antusias dan penolak.
- **"Efek keseluruhan membenarkan usahanya."** Meta-analisis **33 studi TEFL** menemukan **efek keseluruhan kecil hingga sedang (g = 0.38, turun menjadi 0.28 setelah trim-and-fill)** yang **meningkat seiring jenjang pendidikan**. Efeknya moderat setelah koreksi dan terkonsentrasi pada jenjang lebih tinggi, sehingga klaim untuk pembelajar pemula tidak didukung angka gabungan itu.
- **"Segala penggunaan AI sama produktifnya bagi pembelajaran bahasa."** Karya yang sama menyerukan **membobotkan teknologi ke arah produksi** — menulis dan berbicara, bukan konsumsi. Modalitas menentukan efek lebih daripada kehadiran AI.

## Konsep terkait

- [[language-learning]]
- [[writing-education]]
- [[reading-education]]
- [[multilingual-learning]]
- [[higher-ed]]
- [[k-12]]
- [[generative-ai]]
- [[llm]]
- [[automated-assessment]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[academic-integrity]]
- [[discipline-specific-aied]]

## Artikel terkait

- [[alharbi-ethical-genai-eap-2026]] — Integrasi AI generatif yang etis dalam EAP di pendidikan tinggi
- [[feedback-literacy-scripts-eap-writing]] — Skrip literasi umpan balik dan penilai kedua dalam revisi penulisan EAP dengan GenAI
- [[genai-differentiated-eap-reading-materials-2026]] — Dari materi seragam ke terdiferensiasi: adaptasi materi bacaan EAP berbantuan GenAI
- [[tact-pedagogically-adaptive-esl-tutoring]] — TACT: pelatihan pasca-latih selaras taksonomi untuk tutoring bahasa Inggris adaptif
- [[sutama-chatgpt-eportfolio-speaking-2026]] — Menyelaraskan ChatGPT dengan penilaian e-portofolio sebagai model pembelajaran EFL
- [[irwin-muller-efl-peer-feedback-literacy]] — Memosisikan AI generatif dalam umpan balik sejawat EFL
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tugas penilaian buatan AI versus buatan manusia dalam konteks EFL
- [[acceptance-ai-english-tools-2026]] — Penerimaan alat pembelajaran bahasa Inggris berbantuan AI di pendidikan tinggi
- [[ai-tools-arab-english-classrooms]] — Alat AI di kelas bahasa Inggris universitas Arab
- [[self-referential-l2-writing-llm-assessment]] — Menuju penilaian analitik swarujuk: pendekatan berbasis profil untuk evaluasi penulisan L2 dengan LLM
- [[ai-interlocutor-l2-spoken-dialogue]] — Apa yang berubah ketika interlokutornya AI? Dialog lisan L2
- [[genai-linguistic-diversity-academic-writing]] — AI generatif dan keragaman linguistik dalam penulisan dan penerbitan akademik
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Mengelola yang tak terlihat: literasi AI di kalangan guru bahasa
- [[structural-silence-underrepresented-language-ai-2026]] — Diam struktural: bahasa kurang terwakili dalam infrastruktur AI
- [[liu-emerging-tech-tefl-review-2026]] — Teknologi yang muncul untuk TEFL
- [[bird-multimodal-educational-literature-2026]] — Fusi multimodal untuk mengklasifikasikan literatur pendidikan
- [[li-language-educators-genai-review-2026]] — Praktik dan pengembangan pendidik bahasa dengan GenAI
- [[zhao-ji-appraisal-human-ai-revisions-2026]] — Revisi sejawat dan AI atas esai argumentatif EFL berbeda dalam posisi dialogis (Zhao & Ji 2026)
- [[ai-limitations-efl-higher-education-review-2026]] — Ketergantungan berlebih pada AI (50% dari 54 studi) dan berkurangnya berpikir kritis memimpin keterbatasan yang dilaporkan
