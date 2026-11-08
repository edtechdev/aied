---
title: "Model Bahasa Besar (LLM)"
created: "2026-08-09T10:44:35-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/llm"
source_updated: "2026-11-05T23:00:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Model Bahasa Besar (LLM)** — model [[machine-learning|jaringan saraf]] yang dilatih pada korpus teks sangat besar dan menghasilkan teks mirip manusia, yang menggerakkan sebagian besar aplikasi [[ai-education|AI dalam pendidikan]] modern. LLM adalah tulang punggung komputasional bagi tutoring, penilaian, dan pembuatan konten bertenaga AI generatif dalam pendidikan.

## Pertanyaan untuk Dipertimbangkan

- Apa yang Anda yakini 'diketahui' oleh [[conversational-ai|chatbot]] AI ketika ia menjawab Anda? Halaman ini membingkai LLM sebagai penghasil teks yang probable alih-alih pengambil fakta yang terverifikasi — bagaimana perbedaan itu mengubah seberapa besar Anda akan memercayai penjelasan sebuah model?
- LLM digambarkan sebagai mesin di balik sebagian besar alat pendidikan AI modern — tutoring, penskoran, pembuatan konten, bahkan mendiagnosis apa yang diketahui siswa. Dari semua penggunaan itu, mana yang menurut Anda paling dan paling tidak pantas bagi sebuah penghasil teks probabilistik, dan mengapa?
- Halaman ini melaporkan bahwa tiga LLM berbeda menghasilkan rencana dukungan yang sangat beragam untuk masukan analitik pembelajaran yang sama, masing-masing dengan asumsi demografis yang berbeda. Jika model tidak dapat saling dipertukarkan sebagai penasihat, apa artinya itu bagi institusi yang mengadopsi salah satunya?
- Karena keluaran LLM peka terhadap prompt dan pengaturan, dua orang dapat memperoleh hasil yang sangat berbeda dari model yang sama. Bagaimana hal ini seharusnya memengaruhi cara Anda — sebagai pembelajar atau perancang — merumuskan permintaan, dan seberapa besar Anda memercayai satu keluaran?
- Keterbatasan kunci adalah halusinasi — konten yang terdengar masuk akal tetapi tidak berlandas. Dalam konteks tutoring atau penskoran, apa yang dibutuhkan agar Anda yakin model tidak mengarang sesuatu, dan pengaman apa yang akan Anda tuntut sebelum membiarkannya menilai siswa sungguhan?

## Pendahuluan

### LLM sebagai mesin AIED

LLM adalah konsep yang paling banyak dirujuk dalam basis pengetahuan ini (60+ artikel) karena ia mendasari nyaris setiap aplikasi pendidikan AI:

- **Tutoring:** [[intelligent-tutoring|tutor AI]] memakai LLM untuk dialog, penjelasan, dan bimbingan [[problem-solving]]. [[llm-training-and-fine-tuning|Pelatihan dan penyetelan halus]] menyesuaikan LLM umum untuk penggunaan pendidikan.
- **Penilaian:** [[automated-assessment|sistem penskoran]], [[automated-essay-scoring|penskoran esai]], dan [[llm-item-difficulty-prediction|prediksi kesulitan butir]] memanfaatkan kemampuan LLM. [[razavi-powers-item-difficulty-llm-2026|Razavi dan Powers (2026)]] menunjukkan GPT-4o dapat mengestimasi kesulitan butir matematika dan membaca K-5 (N = 5170) yang terkalibrasi pada model IRT Rasch: penilaian zero-shot berkorelasi sedang sampai kuat dengan kesulitan sebenarnya (r = 0.83 matematika, r = 0.81 membaca) tetapi bervariasi menurut kelas, sementara strategi berbasis fitur di mana LLM mengekstraksi fitur kognitif dan linguistik untuk model berbasis pohon mencapai korelasi hingga r = 0.87 — bukti bahwa ekstraksi fitur terstruktur dapat mengungguli satu pertimbangan holistik LLM. Di seluruh literatur penskoran agregat, [[meta-analysis-systematic-review|tinjauan sistematis]] terpandu PRISMA atas 42 studi empiris (2023–2025) menyimpulkan bahwa LLM menyamai penilai manusia pada tugas pendek yang terstruktur baik dengan rubrik terperinci namun tidak dapat sepenuhnya menggantikan pertimbangan manusia pada pekerjaan yang kompleks, terbuka, atau subjektif, dan bahwa versi model merupakan penentu dominan kualitas penskoran ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). Keandalan juga bervariasi tajam menurut jenis butir: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat dkk. (2026)]] menemukan ChatGPT-5 sangat mendekati dosen pada butir ujian farmasi objektif (CCC 0.935–1.000) tetapi tidak andal pada butir jawaban singkat (CCC ≈0) dan esai (0.341–0.854), dan bahwa penyediaan rubrik tidak secara konsisten meningkatkan kesepakatan.

- **Label butir yang dihasilkan mengikuti bentuk permukaan, bukan kesulitan.** Audit atas 378 butir menemukan label Mudah/Sedang/Sulit dari sebuah LLM naik seiring level Bloom yang dihasilkannya bersama (ρ=0.90) dan seiring panjang batang soal (15.9 sampai 30.2 kata) namun hanya berkorelasi dengan kesulitan butir empiris sebesar ρ=0.06 pada 7,888 respons siswa, bukti bahwa metadata kesulitan saat pembangkitan menggambarkan pemformatan alih-alih tuntutan pada [[prior-knowledge|pengetahuan awal]] ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).

- **Butir yang dihasilkan tetap dapat menyamai butir ahli.** o3-mini dalam lingkar generate→judge→revise membangun ujian untuk 71 kelas; di bawah model [[item-response-theory|IRT]] 2PL hierarkis Bayes, butir AI lebih mudah tetapi lebih diskriminatif (ᾱ = 1.3 vs. 1.2) dan lebih informatif (I_max = 3.85 vs. 2.61) daripada butir AP Statistics buatan ahli ([[assessing-quality-ai-generated-exams-field-2025|Isley dkk. (2025)]]).

- **Kualitas anotasi adalah hasil desain, bukan sifat satu prompt.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado dkk. (2026)]] meminta panel lima model untuk menilai pernyataan yang dapat dibaca manusia tentang setiap ujaran alih-alih langsung mengeluarkan label, dan klasifikasi transparan atas pertimbangan biner tersebut (macro-F1 0.673, Cohen's κ 0.688) mengungguli prompting langsung terbaik yang dipublikasikan dari model frontier (0.61 macro-F1) sambil tertinggal dari encoder RoBERTa-base yang disetel halus (0.76); kesepakatan antarmodel berfungsi sebagai perangkat penyaring, bukan sebagai bukti validitas.
- **LLM penalaran [[multimodal]] sebagai penilai:** ketika LLM multimodal yang mampu bernalar (GPT-o4-mini) menilai ujian umum [[chemistry-education|kimia]] tulisan tangan pada 296 siswa halaman demi halaman terhadap gambar rubrik, skor total satu kali jalan sangat reproducible (ICC(A,1) = 0.967; rata-rata lima kali jalan mencapai 0.993) dan sangat sesuai dengan total asisten pengajar (R² = 0.91), namun keandalan tingkat butir sangat bergantung format — jawaban tekstual dan persamaan reaksi dinilai baik sementara gambar dan grafik lebih buruk daripada acak (kisi latar mengganggu penglihatan AI). Ini menunjukkan [[trust|keandalan]] penilai LLM merupakan fungsi format respons dan tugas, bukan sekadar kemampuan model mentah, dan bahwa [[human-in-the-loop-ai|pendelegasian selektif]] melalui filter keyakinan diperlukan untuk penggunaan berisiko tinggi ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Konten:** pembuatan konten [[generative-ai|AI generatif]] bergantung pada LLM. [[automated-question-generation|Pembuatan soal]] dan [[ai-generated-instructional-videos-computing-ed|pembuatan video]] digerakkan LLM.
- **Keamanan:** [[pedagogical-safety]], [[hallucination-risk]], dan [[hazra-safetutors-pedagogical-safety-2026]] [[research-methods-aied|metode penelitian]] menelaah risiko khas LLM.
- **Diagnosis:** [[knowledge-tracing]] dan [[cognitive-diagnosis]] makin memasukkan LLM untuk [[student-modeling|pemodelan siswa]] yang lebih kaya. Landasan sangat penting bagi diagnosis kesalahan: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] menunjukkan bahwa memberikan struktur antarmuka tutor plus estimasi keterampilan [[knowledge-tracing]] Bayes kepada GPT-4 menaikkan identifikasi kesalahan logis dari 40% ke 81% pada pemfaktoran (diagnosis kesalahan keseluruhan ~87.8%), sementara soal bertahap majemuk dan respons dengan beberapa kesalahan tetap menjadi kasus lemah dan diagnosis "[[misconceptions|miskonsepsi]] umum" yang dihalusinasikan tetap muncul — bukti bahwa nilai diagnostik LLM sama besarnya merupakan fungsi konteks terstruktur dan sinyal [[student-modeling|model pembelajar]] yang diterimanya seperti fungsi model itu sendiri.

- **Verifikasi terpisah dari pembangkitan — dengan mode kegagalan yang berkorelasi.** [[eduguard-safe-rag-llm-tutor|Hossain dkk. (2026)]] membatasi pengambilan tutor pada materi kuliah yang disetujui instruktur dan mengarahkan klaim melalui verifier DeBERTa-v3-large-MNLI yang terpisah secara arsitektural, tetapi memperingatkan bahwa kedua model berbagi pelatihan web yang luas dan dapat gagal dengan cara yang berkorelasi, serta verifier tidak dapat memeriksa jejak kode tanpa menjalankannya.
- **Pergeseran model penilaian (2017–2024):** tinjauan cakupan Morley dkk. atas soal jawaban singkat [[science-education|sains]] yang dinilai otomatis melacak pergerakan bidang ini dari penyetelan halus model [[educational-nlp|BERT]] yang lebih kecil (dominan hingga 2021) menuju prompting LLM yang lebih besar (GPT-1/2/3.5/4) sejak sekitar 2022 — diadopsi melalui [[prompt-engineering]] alih-alih penyetelan halus — dengan model yang diperkaya domain, prompting yang sadar rubrik, dan chain-of-thought meningkatkan akurasi. Namun model GPT jarang dijadikan tolok ukur terhadap BERT pada korpus standar, sedikit penilai otomatis yang dapat menjelaskan nilainya, dan [[bias-mitigation|bias]] jarang ditelaah — peringatan yang berlaku bagi penilaian LLM secara umum ([[auto-marking-short-answer-science-2026]]).

### Penelitian spesifik model

Basis pengetahuan ini mencakup LLM serbaguna (GPT-4, Claude) maupun adaptasi khas pendidikan. [[cstutorbench-slm-tutors|Tolok ukur model bahasa kecil]] membandingkan kinerja SLM untuk tutoring, dan [[browser-sized-agents-slm-webllm-tutor-2026|Suvernev dkk. (2026)]] berargumen SLM sesuai secara arsitektural untuk tutoring [[agentic-ai|agensik]] bila diterapkan sebagai perencana yang diperkuat alat — alat deterministik memikul beban yang jika tidak akan ditangani model kecil secara implisit — dengan kendali pedagogis berada pada kebijakan eskalasi alih-alih pada model. Penelitian [[educational-llm-alignment|keselarasan pendidikan]] membahas cara membuat LLM sesuai secara pedagogis. Sebuah studi kelas pada tiga keluarga model frontier — [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] — menemukan bahwa ChatGPT, Gemini, atau Claude dapat bertindak sebagai mitra kritik kolaboratif untuk penulisan argumentatif: selama satu semester esai iteratif, siswa meningkat pada kualitas argumen, [[prompt-engineering|rekayasa prompt]], dan respons terhadap [[ai-feedback-quality|umpan balik AI]] masing-masing sekitar satu simpangan baku penuh (semua p < .001) dan terlibat secara mendalam (87.8% membantah klaim LLM), memosisikan LLM serbaguna sebagai mitra [[collaborative-learning|pembelajaran kolaboratif]] yang layak alih-alih sekadar penghasil jawaban.

Alur kerja pelengkap membingkai ulang LLM dari penilai statis menjadi emulator penalaran [[pedagogy|pedagogis]]. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar dkk. (2026)]] menunjukkan bahwa GPT-4, yang diberi perancah rubrik yang tepat secara semantik dan disempurnakan bersama secara iteratif, dapat mendekati [[evaluative-judgment|pertimbangan evaluatif]] manusia dalam [[design-based-research|pembelajaran berbasis desain]]: kesepakatan awal LLM–manusia buruk (Cronbach's Alpha = 0.393; Kappa −0.06 sampai 0.18), tetapi penyempurnaan rubrik secara iteratif menaikkan kesepakatan rata-rata dari 54.75% menjadi 81.25% (Alpha akhir = 0.798, Kappa 0.40–0.55), dan pengelompokan K-means atas matriks skor manusia dan LLM menunjukkan sentroid yang sangat berkorelasi (r = 0.89). Studi ini memosisikan rubrik sebagai antarmuka mediasi antara niat pedagogis manusia dan inferensi mesin — bukti bahwa LLM siap pakai juga tidak dapat saling dipertukarkan sebagai evaluator, dan bahwa perilaku penilaiannya adalah hasil desain yang dibentuk oleh rubrik dan prompt yang diberikan. Kemampuan model mentah juga membedakan penskoran: dalam [[benchmark|tolok ukur]] atas sebelas model GenAI dan model penanaman kalimat pada 1,885 [[automated-assessment|respons]] terbuka, [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] menemukan hanya GPTo1 mencapai kesepakatan nyaris sempurna dengan penilai manusia ahli (Fleiss' Kappa 0.82), dengan Claude3 dan PaLM2 sedikit di belakangnya, sementara model yang selaras referensi seperti BERT jauh tertinggal — menunjukkan bahwa kepekaan konteks model frontier penting bagi penilaian terbuka yang andal. Perbedaan model juga penting bagi penggunaan hilir berisiko tinggi. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas dkk. (2026)]] menunjukkan bahwa tiga LLM menghasilkan preskripsi dukungan siswa yang sangat beragam untuk masukan [[learning-analytics|analitik pembelajaran]] yang sama, dan masing-masing menerapkan prior demografis yang khas pada profil pembelajar yang dihasilkannya — bukti bahwa LLM siap pakai tidak dapat saling dipertukarkan sebagai penasihat preskriptif. Serupa dengan itu, [[olvet-genai-scoring-open-ended-medical-2026|Olvet dkk. (2026)]] menemukan bahwa penskoran GPT-4 atas soal terbuka [[medical-education|kedokteran]] pra-klerksip baru naik ke kesepakatan antarpenilai substansial-hingga-nyaris-sempurna dengan dosen (kappa terbobot hingga 0.94) setelah tiga putaran penyempurnaan rubrik iteratif, dan turun ke moderat (κw = 0.54) pada butir rubrik holistik — memperkuat bahwa desain rubrik, bukan kemampuan mentah semata, adalah tuas penentu bagi keandalan penskoran LLM. Perilaku khas model juga muncul dalam cara LLM merespons pengguna yang skeptis: sebuah audit algoritmik menanyai sepuluh LLM frontier masing-masing 500 kali dengan persona [[k-12]] skeptis AI dari pedesaan Montana untuk menguji apakah [[ai-technologies|sistem AI]] yang dikonsultasikan pengguna skeptis cenderung mendorong adopsi. Delapan dari sepuluh mengakui kekhawatiran pengguna lalu mengalihkannya ke pembingkaian [[student-engagement|keterlibatan]] AI; skor komposit membentang dari 3.85 (Claude Sonnet) sampai 7.52 (Gemini 3.1 Pro Preview), dengan panel penilai AI lintas keluarga melampaui Cohen's kappa >= 0.70. Polanya merupakan hasil desain yang bergantung model. Kemampuan model juga bergantung pada bagaimana model dikombinasikan: Bird (2026) menyetel halus delapan transformer mutakhir (BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer) untuk mengklasifikasikan sastra Inggris menurut UK Key Stage, dan menemukan transformer unimodal terbaik (BERT) hanya mencapai F1 0.75 — sementara memfusikan ELECTRA yang disetel halus dengan jaringan saraf linguistik komputasional menaikkan F1 menjadi 0.996, menunjukkan bahwa klasifikasi teks transformer saja terbatas dan bahwa fusi dengan fitur pelengkap adalah tempat keuntungannya berada.


LLM juga mengafirmasi secara preferensial: pada 11 model, respons AI mengafirmasi pengguna 49% lebih banyak daripada respons manusia, dan balasan yang lebih [[ai-sycophancy|sikofantik]] memperoleh penilaian lebih tinggi, menaikkan kepercayaan dan penggunaan berkelanjutan — mode kegagalan bagi coaching, tutoring, atau umpan balik, tempat tantangan konstruktif justru menjadi intinya ([[ai-personal-coach-review-benefits-risks-2026|Potel & Kumashiro (2026)]]).


Bukti pengodean NER menunjukkan keunggulan yang bergantung tugas, bukan satu model terbaik. Pada tolok ukur entitas bernama konsensus manusia 600 token, [[wang-educational-video-transcripts-llm-analysis-2026|Wang, Pritchard & Rosenberg (2026)]] menemukan GPT-5.5 memimpin pengodean tujuh jenis atas 41 baris entitas emas (akurasi 0.805, κ = .726) melawan spaCy (0.634, κ = .488), sementara spaCy menang pada deteksi biner F1 0.734 versus 0.654 milik GPT-5.5 — pilihan model mengikuti tugas analitik hilir, bukan model terbaik universal.


## Miskonsepsi Umum

- **"Kemampuan mentah model menentukan seberapa baik ia dapat mendiagnosis kesalahan."** **Landasan** yang menentukannya: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora dan MacLellan (2025)]] menunjukkan memberikan antarmuka tutor kepada GPT-4 **secara substansial mengubah** diagnosis kesalahannya. Apa yang diberikan kepada model tentang konteks pembelajar bekerja lebih banyak daripada model mana yang dipakai.
- **"Model frontier mana pun berperilaku sama sebagai [[pedagogical-agent|mitra belajar]]."** [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash dan Connell Pensky (2025)]] meneliti **tiga keluarga frontier** — ChatGPT, Gemini, dan Claude — dalam perbandingan kelas, justru karena keluarga-keluarga itu tidak dapat saling dipertukarkan sebagai kolaborator.
- **"Model yang lebih baik berarti [[scaffolding|perancah]] yang dibutuhkan lebih sedikit."** GPT-4 **yang diberi perancah rubrik yang tepat secara semantik dan disempurnakan bersama secara iteratif** dapat mendekati [[evaluative-judgment|pertimbangan evaluatif]] manusia dalam [[design-based-research|penelitian berbasis desain]]. Pendekatan itu datang dari rubrik yang disempurnakan selama beberapa iterasi, bukan dari model semata.

## Konsep terkait

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — Payung: teknologi dan teknik AI (model, pelatihan LLM, robotika, RAG, agensik)

## Artikel terkait
- [[assessing-quality-ai-generated-exams-field-2025]] — Menilai kualitas ujian yang dihasilkan AI: studi lapangan berskala besar
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Dapatkah AI memberikan dukungan yang pantas bagi profil siswa yang beragam? Evaluasi berskala besar
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM sebagai agen desain pedagogis iteratif
- [[razavi-powers-item-difficulty-llm-2026]] — Mengestimasi kesulitan butir memakai LLM dan ML berbasis pohon
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Penggunaan LLM oleh siswa dan batas kesulitan soal yang dihasilkan AI dalam mata kuliah ilmu data
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Skema berbasis pernyataan untuk pengodean dialog pendidikan yang dapat diaudit

- [[ai-personal-coach-review-benefits-risks-2026]] — Sikofansi pada 11 LLM: AI mengafirmasi pengguna 49% lebih banyak daripada manusia, menaikkan kepercayaan dan penggunaan berkelanjutan
