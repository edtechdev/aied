---
title: "Teori Respons Butir"
created: "2026-07-28T10:44:35-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/item-response-theory"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Teori respons butir (IRT)** — keluarga model psikometrik yang mengestimasi kemampuan laten dari respons butir dengan memodelkan hubungan antara kemampuan seorang siswa dan probabilitas menjawab setiap butir dengan benar. Model IRT memodelkan tingkat kesukaran dan daya diskriminasi butir, sehingga memungkinkan presisi pengukuran dan pengujian adaptif. Di era AI, IRT bertemu [[llm|LLM]] dalam [[llm-item-difficulty-prediction]] dan [[llm-psychometric-calibration-cdp]]: AI memprediksi dan mengalibrasi tingkat kesukaran butir, berpotensi meningkatkan presisi pengukuran dan menyuplai [[adaptive-learning]].

## Pertanyaan yang Perlu Dipertimbangkan

- Teori respons butir memperlakukan kemampuan dan tingkat kesukaran butir sebagai hal yang diestimasi bersama dari pola respons, alih-alih memperlakukan skor tes mentah sebagai ukurannya. Bagaimana mungkin dua siswa dengan jumlah jawaban benar yang sama sebenarnya berbeda kemampuannya?
- IRT memungkinkan Anda membandingkan siswa pada skala yang sama dan mengestimasi presisi per orang. Mengapa mengetahui tingkat kesukaran dan daya diskriminasi sebuah butir bisa lebih penting daripada sekadar mengetahui apakah seorang siswa menjawabnya dengan benar?
- Satu studi menggunakan statistik person-fit IRT untuk membedakan respons manusia dari respons yang dihasilkan AI pada tes pilihan ganda — menandai respons AI sebagai 'menyimpang.' Bagaimana mesin pengukuran yang sama yang menilai pembelajaran juga dapat mengawasi integritas akademik?
- [[research-methods-aied|Peneliti]] menggunakan IRT untuk memvalidasi bahwa soal ujian yang dihasilkan AI setara dengan soal yang ditulis pakar dalam hal tingkat kesukaran dan daya diskriminasi. Jika AI menulis butir yang 'terlihat' baik, mengapa kalibrasi empiris terhadap parameter IRT yang telah dicocokkan masih diperlukan?
- Ketika AI memprediksi dan mengalibrasi tingkat kesukaran butir, apa yang bisa salah jika estimasi tingkat kesukaran sebuah model tidak divalidasi terhadap data respons siswa yang nyata?
- IRT terhubung dengan pengujian adaptif dan pelacakan pengetahuan — menggunakan respons Anda untuk memilih apa yang ditanyakan berikutnya. Bagaimana mengestimasi kemampuan Anda dari setiap jawaban memungkinkan sebuah tes menjadi lebih singkat dan lebih tepat, bukan sekadar lebih panjang?

## Pendahuluan

IRT memperlakukan kemampuan (θ) dan parameter butir (tingkat kesukaran, daya diskriminasi, kadang tebakan) sebagai hal yang diestimasi bersama dari pola respons, alih-alih memperlakukan skor mentah sebagai ukurannya. Hal ini memungkinkan perbandingan siswa pada skala yang sama, pemilihan butir secara adaptif, dan estimasi presisi per orang alih-alih secara global.

### Bagaimana IRT muncul dalam penelitian

- **Tingkat kesukaran yang diprediksi AI:** [[llm-item-difficulty-prediction|prediksi tingkat kesukaran butir oleh LLM]] menggunakan model bahasa untuk mengestimasi tingkat kesukaran butir, yang harus divalidasi terhadap parameter IRT yang dicocokkan secara empiris.
- **Kalibrasi psikometrik:** [[llm-psychometric-calibration-cdp|kalibrasi psikometrik LLM]] menyelaraskan penilaian berbasis model dengan pengukuran berbasis IRT sehingga respons yang dihasilkan AI mempertahankan sifat-sifat pengukuran.
- **Pelacakan pengetahuan dan pemodelan siswa:** IRT berkaitan erat dengan [[knowledge-tracing]] dan [[student-modeling]] — model yang melacak pengetahuan siswa dari waktu ke waktu — dengan tujuan bersama mengestimasi keadaan siswa yang tidak teramati dari respons yang teramati.

- **Kuantitas IRT yang dibaca dari logit LLM.** [[huang-interpretable-knowledge-tracing-2026|Huang et al. (2026)]] mengekstrak kemampuan siswa θ = z^GOOD − z^BAD dan tingkat kesukaran giliran tutor d = z^HARD − z^EASY dari logit token berikutnya dan menggabungkannya dalam prediktor Rasch 1PL, sehingga pelacakan pengetahuan berbasis dialog menjadi dapat diinterpretasikan (akurasi 64.29%, AUC 65.25 pada QATD2k).
- **Substugas dialog pada skala yang sama dengan soal.** [[unified-irt-framework-question-tutoring-dialogue-2026|Duan et al. (2026)]] menulis ulang substugas yang diajukan tutor di tengah dialog menjadi soal mandiri dan menempatkannya pada satu skala IRT 1PL bersama yang tingkat kesukarannya berasal dari teks soal, menggunakan gerakan scaffold-after-struggle dan push-for-rigor sebagai supervisi pengurutan tingkat kesukaran.
- **Validasi lapangan hierarkis Bayes:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] menggunakan model IRT 2PL hierarkis Bayes (dengan butir jangkar pra-tes untuk menempatkan 1,686 siswa pada skala θ bersama) untuk menunjukkan bahwa soal yang dihasilkan AI setara dengan butir ujian standar yang ditulis pakar dalam hal tingkat kesukaran dan daya diskriminasi — demonstrasi skala besar IRT sebagai tulang punggung validasi bagi [[automated-question-generation]].
- **Sebuah [[benchmark]] yang selaras standar dapat mengalami saturasi.** Pada himpunan sains [[k-12|sekolah menengah]] dan sekolah menengah atas yang selaras NGSS, sebagian besar model berbobot terbuka memperoleh skor di atas 90%, sehingga metrik butir klasik menjadi buruk — tingkat kesukaran tinggi, daya diskriminasi rendah, dengan sel-sel trivial di atas 90% — sehingga para penulis tidak dapat memisahkan butir yang lemah dari domain yang telah menjadi dapat ditangani ([[llm-benchmark-secondary-science-topics-2026|Schroeder et al. (2026)]]).
- **Informasi tes melokalkan presisi.** Tes literasi GenAI berisi 20 butir yang divalidasi dengan model 2PL (RMSEA = 0.03, CFI = 0.97) memiliki fungsi informasi yang memuncak pada θ = −0.8, sehingga paling presisi bagi siswa dengan literasi rendah hingga sedang alih-alih seragam di seluruh skala ([[jin-glat-genai-literacy-assessment|Jin et al. (2025)]]).

- **Memisahkan respons manusia dari respons GenAI dengan statistik person-fit:** [[irt-human-genai-mcq-responses|Strugatski dan Alexandron (2026)]] menerapkan statistik person-fit (PFS) dalam IRT untuk membedakan respons manusia dari respons [[generative-ai]] pada penilaian pilihan ganda. PFS menandai respons GenAI sebagai responden 'menyimpang' di dua konteks autentik (tes [[chemistry-education|kimia]] dan ujian nasional), menunjukkan bahwa [[conversational-ai|chatbot]] yang berbeda menghasilkan pola respons yang berbeda (kelompok 'kecerdasan' yang heterogen), dan mengungkap bahwa versi GenAI yang lebih baru menjadi lebih mirip manusia — memposisikan IRT sebagai kerangka yang tangguh untuk penyaringan [[academic-integrity|integritas]] dalam pengujian berisiko tinggi.

- **Butir yang sama mungkin tidak mengukur konstruk laten yang sama bagi sebuah LLM.** [[assessment-latent-structure-human-llm-2026|Strugatski, Zeinfeld dan Alexandron (2026)]] membandingkan struktur faktor manusia dan LLM pada dua instrumen dengan analisis faktor eksploratori dan pencocokan kongruensi; kemiripan LLM–manusia secara konsisten tetap di bawah garis dasar manusia–manusia, sehingga parameter IRT yang dicocokkan pada manusia tidak berpindah secara otomatis.

- **Estimasi tingkat kesukaran LLM terhadap parameter IRT Rasch:** [[razavi-powers-item-difficulty-llm-2026|Razavi dan Powers (2026)]] mengevaluasi apakah GPT-4o dapat mengestimasi tingkat kesukaran butir penilaian matematika dan membaca kelas K-5 (N = 5170) yang dikalibrasi dengan model IRT Rasch. Pendekatan estimasi langsung zero-shot berkorelasi sedang-hingga-kuat dengan tingkat kesukaran Rasch yang sebenarnya (r = 0.83 matematika, r = 0.81 membaca) tetapi tidak merata antar kelas dan sering kali tidak lebih baik daripada regresor dummy rata-rata kelas untuk kelas K dan 1, kemungkinan karena pembatasan rentang pada tingkat kesukaran butir kelas rendah. Strategi berbasis fitur — fitur kognitif dan linguistik yang diekstrak LLM lalu dimasukkan ke model berbasis pohon — mengungguli estimasi langsung (korelasi hingga r = 0.87), dengan tingkat kelas dan jumlah kata sebagai prediktor teratas. Studi ini menegaskan bahwa estimasi tingkat kesukaran LLM harus divalidasi terhadap parameter IRT yang dicocokkan secara empiris, dan bahwa ekstraksi fitur yang terstruktur dapat mempertajam prediksi di tempat penilaian zero-shot holistik gagal.

- **Menjelaskan tingkat kesukaran alih-alih memprediksinya.** [[explaining-question-difficulty-natural-language-2026|Cui et al. (2026)]] mencocokkan model Rasch 1PL pada catatan respons LLM untuk GSM8K (1,319 soal), BBH-structured (1,396) dan WinoGrande (1,267), dengan 5,000 model untuk GSM8K dan WinoGrande serta 3,811 untuk BBH-structured. Mereka kemudian meminta sebuah LLM mengusulkan hipotesis berbahasa alami tentang mengapa satu butir lebih sulit daripada butir lain, dan memilihnya dengan regresi beraturan-L1 pada soal held-out. Bila digunakan sendiri pada soal yang belum pernah dilihat, hipotesis terpilih mencapai R² = 0.373 pada GSM8K, 0.580 pada BBH-structured dan 0.090 pada WinoGrande, yang terbaik di antara metode yang dibandingkan pada GSM8K dan WinoGrande dan terbaik kedua pada BBH-structured, tempat RoBERTa-base yang disetel halus mencapai 0.646. Sebagai fitur tambahan, hipotesis itu menambahkan +0.11 pada RoBERTa-base di GSM8K (0.362 menjadi 0.468) dan +0.19 serta +0.18 pada dua model penyematan yang dibekukan. Sebuah probe kausal menyunting 50 soal uji per kumpulan data ke arah atau menjauhi sebuah hipotesis: suntingan peningkatan kesukaran menurunkan akurasi rata-rata sebesar 15.27 dan 23.88 poin persentase pada GSM8K dan BBH-structured, sementara suntingan penurunan kesukaran menaikkannya sebesar 32.18 dan 28.52. Tingkat kesukaran di sini diestimasi dari respons model, bukan dari peserta tes manusia, sehingga ini merupakan hasil evaluasi LLM dan psikometri.

- **Mensimulasikan responden dapat memulihkan apa yang tidak dapat dipulihkan oleh regresi stimulus:** LLM [[multimodal]] yang disetel halus dan mereproduksi probabilitas pilihan opsi siswa di berbagai tingkat kemampuan mendekati tingkat kesukaran held-out pada r = 0.85, di atas garis dasar regresi MathBERT (0.68) dan MetaMath (0.75), dan memulihkan parameter tebakan c pada 0.48 sementara daya diskriminasi a tetap lemah (0.31) ([[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026]]).
- **Cacat penulisan butir sebagai penyaring pra-penerapan untuk parameter IRT:** [[item-writing-flaws-irt-difficulty-2026|Schmucker dan Moore (2026)]] menguji apakah rubrik Item-Writing Flaw (IWF) — evaluasi tekstual yang bersifat umum-domain dan tidak memerlukan data siswa — memprediksi tingkat kesukaran dan daya diskriminasi IRT yang diestimasi secara empiris. Pada **7,126 soal pilihan ganda** di [[stem-education|STEM]] (sains fisik, [[math-education|matematika]], sains kehidupan/bumi), mereka menggunakan pengodean otomatis berbantuan LLM untuk menunjukkan bahwa rubrik IWF memiliki validitas prediktif bagi parameter IRT empiris, menawarkan penyaring pra-penerapan yang dapat diskalakan yang melengkapi atau sebagian menggantikan uji coba intensif sumber daya.
- **Penyaringan risiko berbasis IRT untuk penilaian AI secara selektif:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] mencocokkan model IRT logistik dua parameter pada data kimia tulisan tangan yang dinilai AI dan mendefinisikan "risiko" menerima penilaian AI sebagai deviasi absolut antara skor ternormalisasi AI dan probabilitas memperoleh kredit yang diharapkan IRT (Risiko = |s−p|); hanya menerima butir dalam toleransi tertentu terhadap ekspektasi Bayes ini menandai skor AI yang "mengejutkan" untuk [[human-in-the-loop-ai|tinjauan manusia]], mengubah IRT dari alat agregasi skor murni menjadi mekanisme penerimaan/penundaan operasional untuk [[automated-assessment]] — yang mencapai keselarasan dengan penilaian manusia serupa dengan ambang kredit parsial yang lebih sederhana tetapi dengan beban kerja manusia yang lebih rendah, meskipun logikanya kurang transparan bagi audiens nonteknis.
- **IRT sebagai lapisan kalibrasi di dalam model diagnostik:** PLCD menambahkan kepala tebakan-dan-kelalaian yang terinspirasi IRT di atas respons tingkat latihan, meningkatkan kualitas probabilitas alih-alih akurasi — kesalahan kalibrasi yang diharapkan turun dari 0.071 menjadi 0.037 pada XES3G5M — menjadikan IRT koreksi internal untuk derau respons, bukan hanya model penskoran ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

- **Kalibrasi bagi-dan-taklukkan untuk bank butir yang terus berkembang:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]] memperlakukan kalibrasi ulang IRT sebagai masalah penskalaan alih-alih masalah pencocokan. Ketika pembangkitan butir berbasis AI dan prediksi parameter berbasis fitur membuat sebuah bank menjadi lebih besar, lebih jarang, dan terus diperbarui, mencocokkan ulang seluruh riwayat respons pada setiap pembaruan menjadi semakin mahal; *kalibrasi konsensus* mereka alih-alih mengalibrasi setiap periode waktu satu kali dan menggabungkan periode baru dengan posterior sebelumnya yang telah dihitung. Dua fitur membedakannya dari kerja bagi-dan-taklukkan IRT yang ada: periode-periode itu tidak berbagi metrik laten, sehingga masing-masing ditautkan ke metrik referensi dengan kriteria Haebara yang tangguh yang diselesaikan *secara terpisah untuk setiap undian posterior* (membawa galat penautan ke dalam posterior yang ditautkan), dan setiap periode merupakan pencocokan hierarkis tersendiri yang menyumbangkan prior terestimasi, sehingga produk naif dari posterior harus dibagi dengan prior itu dan prior konsensus dipulihkan kembali — mereduksi ke aturan mesin komite Bayes ketika prior-nya tetap. Terhadap tolok ukur gabungan pada empat periode kuartalan Duolingo English Test, rata-rata posterior sepakat pada r = .998 (tingkat kesukaran) dan .991 (log-diskriminasi) dengan SD posterior pada r = .970 dan .920, menyisakan penderasan-bawah ringan (rasio SD 0.91–0.98) yang paling besar pada tertil eksposur per periode terendah. Ini adalah kalibrasi IRT yang direkayasa ulang untuk kondisi penyampaian yang diciptakan oleh bank butir yang dihasilkan AI.

- **Betapa jarangnya IRT menjadi jangkar validasi instrumen:** sebuah penilaian atas instrumen [[ai-literacy|literasi AI]] [[teacher-role|guru]] mengkuantifikasi ketiadaan IRT alih-alih penggunaannya. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore dan Maat (2026)]] menilai 33 instrumen terhadap matriks keputusan yang diadaptasi dari COSMIN dan Terwee et al. (2007); validitas struktural kuat, dengan 24 (72.7%) berada pada Tingkat A melalui CFA, PLS-SEM atau pemodelan IRT, namun tidak satu pun menggunakan IRT atau Rasch sebagai bukti utamanya, dan hanya lima instrumen (15.2%) melaporkan bukti invariansi pengukuran atau fungsi butir diferensial. Para penulis berargumen untuk IRT dan tugas kinerja di samping [[self-assessment|penilaian diri]] guna memisahkan kemampuan yang tervalidasi dari keyakinan yang dilaporkan.
- **Alternatif kausal terhadap IRT asosiatif.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] berargumen bahwa IRT dan model siswa jaringan Bayes tidak dapat mengungkapkan intervensi atau kontrafaktual, dan sebagai gantinya menggali persamaan struktural dari para pakar; pada baterai tes adaptif 109 siswa, model yang digali sedikit lebih rendah daya prediksinya (−287 versus −277 log-likelihood uji) namun mendukung kueri kontrafaktual tentang bantuan.

### Keterkaitan

IRT adalah fondasi [[educational-measurement]] dan [[assessment-validity]], mendasari [[adaptive-learning]] (pemilihan butir adaptif) dan [[student-modeling]], serta terhubung dengan [[psychometrically-aware-ai]] (penilaian AI yang selaras dengan teori pengukuran) dan [[knowledge-tracing]]. IRT muncul dalam [[llm-difficulty-calibration-programming-exams-2026|kalibrasi tingkat kesukaran LLM]] untuk penilaian pemrograman.

## Miskonsepsi Umum

- **"IRT memerlukan penyelenggaraan tes konvensional."** Kemampuan dan tingkat kesukaran dapat dipulihkan dari **logit token berikutnya**: mengekstrak **kemampuan siswa θ = z^GOOD − z^BAD** dan **tingkat kesukaran giliran tutor d = z^HARD − z^EASY** lalu menggabungkannya dalam prediktor Rasch 1PL membuat pelacakan pengetahuan berbasis dialog dapat diinterpretasikan dalam istilah IRT. Kerangka psikometrik berlaku untuk data interaksi, bukan hanya untuk respons butir.
- **"Tolok ukur yang dilalui sebagian besar model adalah tolok ukur yang baik."** Tolok ukur yang selaras standar dapat **mengalami saturasi**: pada himpunan sains sekolah menengah dan sekolah menengah atas yang selaras NGSS, **sebagian besar model berbobot terbuka memperoleh skor di atas 90%**, sehingga metrik butir klasik menjadi buruk. Saturasi bukan berarti modelnya luar biasa; itu berarti butirnya tidak lagi membedakan.
- **"Tingkat kesukaran butir adalah sifat intrinsik butir itu."** Sebuah probe kausal yang **menyunting 50 soal uji per kumpulan data** ke arah atau menjauhi sebuah hipotesis menemukan bahwa **suntingan peningkatan kesukaran menurunkan akurasi rata-rata sebesar 15.27 dan 23.88 poin persentase** pada GSM8K dan BBH-structured. Tingkat kesukaran adalah hubungan antara butir dan model, dan ia bergerak ketika butirnya bergerak.
- **"IRT hanya untuk menskor siswa."** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] menggunakan **model 2PL hierarkis Bayes dengan butir jangkar pra-tes untuk menempatkan 1,686 siswa**, yang merupakan jaminan mutu bagi penilaian itu sendiri alih-alih penskoran bagi siswa.

## Konsep terkait

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## Artikel terkait
- [[unified-irt-framework-question-tutoring-dialogue-2026]] — Kerangka Respons Terpadu untuk Soal dan Dialog Tutor
- [[explaining-question-difficulty-natural-language-2026]] — Menjelaskan tingkat kesukaran soal LLM dalam bahasa alami melalui IRT dan suntingan kausal (Cui et al. 2026)
- [[item-writing-flaws-irt-difficulty-2026]] — Dampak cacat penulisan butir terhadap tingkat kesukaran dan daya diskriminasi IRT (Schmucker & Moore 2026)
- [[causal-modeling-competency-assessment-2026]] — Pemodelan Kausal Intervensi Dukungan untuk Penilaian Kompetensi Siswa
- [[assessment-latent-structure-human-llm-2026]] — Apakah instrumen penilaian mengukur hal yang sama bagi manusia dan LLM? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Validasi lapangan IRT skala besar atas ujian yang dihasilkan AI
- [[jin-glat-genai-literacy-assessment]] — GLAT menggunakan validasi IRT/2PL (Jin et al. 2025)
- [[llm-item-difficulty-prediction]] — Prediksi tingkat kesukaran butir oleh LLM
- [[llm-psychometric-calibration-cdp]] — Menyelaraskan penilaian LLM dengan kalibrasi psikometrik
- [[llm-difficulty-calibration-programming-exams-2026]] — Kalibrasi tingkat kesukaran LLM pada ujian pemrograman
- [[multimodal-item-parameter-estimation-2026]] — Estimasi parameter butir multimodal
- [[huang-interpretable-knowledge-tracing-2026]] — Pelacakan pengetahuan yang dapat diinterpretasikan
- [[irt-human-genai-mcq-responses]] — Menggunakan IRT untuk memisahkan respons MCQ manusia dan GenAI
- [[razavi-powers-item-difficulty-llm-2026]] — Mengestimasi tingkat kesukaran butir menggunakan LLM dan ML berbasis pohon
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Melampaui Embedding ID: Pemodelan Bahasa Berbasis Proses untuk Diagnosis Kognitif
- [[bayesian-consensus-irt-item-banks-2026]] — Kalibrasi konsensus Bayes atas bank butir IRT yang terus berkembang (Jewsbury et al. 2026)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Audit lapangan yang menunjukkan IRT/Rasch jarang digunakan sebagai bukti validasi utama dalam instrumen literasi AI guru
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutor AI dan manusia menghasilkan perolehan belajar GRE yang setara
- [[llm-benchmark-secondary-science-topics-2026]] — Tolok ukur yang selaras standar dapat mengalami saturasi
