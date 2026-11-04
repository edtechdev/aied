---
connected_resources: [teacherserver]
title: "Pembuatan Soal Otomatis"
created: "2026-05-08T10:44:35-04:00"
type: concept
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
updated: "2026-11-04T02:42:40-05:00"
translation_of: "concepts/automated-question-generation"
source_updated: "2026-10-25T21:20:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pembuatan soal otomatis (AQG)** — penggunaan AI, khususnya NLP dan [[llm|model bahasa besar (LLM)]], untuk menghasilkan butir [[assessment|penilaian pendidikan]] (soal pilihan ganda, jawaban singkat, isian rumpang, pengkodean, dan soal kinerja) secara otomatis dari materi sumber atau tujuan pembelajaran. AQG memungkinkan penilaian dalam skala besar — menghasilkan kuis [[formative-assessment|formatif]], latihan adaptif, dan butir latihan — tetapi kualitasnya sangat bervariasi antartipe butir dan memerlukan validasi untuk menghindari soal yang terhalusinasi atau terkalibrasi dengan buruk. Ini merupakan komponen inti [[automated-assessment]] dan pemungkin utama [[adaptive-learning]] dan [[personalized-learning]].

## Pertanyaan untuk Dipertimbangkan

- Pembuatan soal otomatis menghasilkan butir penilaian dari materi sumber dalam skala besar — tetapi halaman ini memperingatkan bahwa kualitasnya sangat bervariasi antartipe butir. Sebelum membaca, tipe butir mana yang Anda duga paling andal dihasilkan AI: pilihan ganda, jawaban singkat, atau kode — dan mengapa?
- Tantangan utamanya adalah kendali mutu: LLM dapat menghasilkan soal yang salah secara faktual. Salah satu pipeline menurunkan halusinasi sebesar 62% dengan menambahkan loop hasilkan-lalu-validasi-perbaiki. Menurut Anda mengapa meminta AI memvalidasi soalnya sendiri akan benar-benar memperbaikinya, bukan sekadar menyetujui keluarannya sendiri?
- [[research-methods-aied|Penelitian]] menunjukkan soal yang dihasilkan dapat condong ke pemikiran tingkat rendah (mengingat) kecuali dirancang secara eksplisit untuk hasil tingkat tinggi. Jika Anda memakai AI untuk menyusun butir latihan, bagaimana Anda tahu apakah butir itu melatih pemahaman atau hanya hafalan?
- Kalibrasi kesulitan itu penting: perkiraan kesulitan AI berkorelasi kuat dengan kinerja siswa, tetapi halaman ini memperingatkan agar tidak disalahgunakan untuk keperluan berisiko tinggi. Kapan soal yang menurut penilaian AI memiliki "kesulitan tepat" tetap merupakan soal yang salah untuk diajukan kepada siswa tertentu?
- Pembuatan yang memperhatikan [[accessibility]] menyusun soal yang disesuaikan untuk siswa Tuli dan Gangguan Pendengaran, yang disempurnakan bersama komunitas sasaran. Apa yang disarankan contoh ini tentang mengapa pembuatan soal bukan semata masalah teknis atau konten?

## Pendahuluan

Pembuatan soal otomatis penting karena butir penilaian mahal dibuat manual, sementara AI dapat menghasilkannya cepat dan dalam skala besar. Namun, penelitian dalam basis pengetahuan ini menunjukkan bahwa butir yang dihasilkan harus divalidasi untuk kebenaran, relevansi, dan kesulitannya, dan bahwa tipe butir yang berbeda (PG, jawaban singkat, kode) berbeda dalam seberapa andal butir itu dapat dihasilkan. Karena itu AQG berada di persimpangan [[generative-ai|AI generatif]], [[educational-nlp|NLP pendidikan]], dan [[educational-measurement]].

## Pendekatan pembuatan soal

Penelitian basis pengetahuan ini menggambarkan beberapa pendekatan:

- **Pipeline hasilkan-lalu-validasi:** [[generate-then-validate-question-gen|Generate-Then-Validate]] memperkenalkan loop generasi → validasi → penyempurnaan yang menurunkan halusinasi LLM sebesar 62% dibandingkan generasi langsung, mencapai akurasi 89% pada kumpulan data [[stem-education|STEM]] dan peningkatan relevansi 23%. Langkah validasi menyaring butir yang tidak valid atau berkualitas rendah, dan butir yang gagal memicu generasi ulang dengan prompt korektif.
- **Generasi berbasis penelusuran pengetahuan:** [[kt4eqg-personalized-question-generation|KT4EQG]] menghasilkan soal latihan yang dipersonalisasi dengan panduan [[knowledge-tracing|penelusuran pengetahuan]], menyesuaikan butir dengan keadaan pengetahuan setiap siswa alih-alih menghasilkan soal generik.
- **Distraktor terikat miskonsepsi sebagai label diagnostik:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] mengaitkan setiap distraktor dengan satu miskonsepsi hasil penambangan dan menandai tepat satu opsi benar, sehingga sebuah butir dihasilkan dengan target diagnostiknya sudah terpasang dan kemudian dapat dinilai secara deterministik tanpa panggilan [[llm]] — sekitar 7.6 detik dan kira-kira \$0.005 per putaran pada penerapan langsung para penulis, dibandingkan sekitar 32 detik dan \$0.015 untuk putaran jawaban singkat yang dinilai LLM. Keterikatan itu hanya sebaik label miskonsepsi di baliknya, karena [[misconceptions]] hasil penambangan cocok dengan miskonsepsi sasaran pada F1 ≈ 0.56, dan pilihan butirnya melayani keterampilan yang benar-benar lemah 0.72 dari waktu.
- **Generasi yang peka kedalaman kognitif:** [[llm-educational-question-cognitive-depth|Mengevaluasi kedalaman kognitif soal yang dihasilkan LLM]] mengkaji apakah butir yang dihasilkan menyentuh [[critical-thinking|pemikiran tingkat tinggi]] (mencipta, mengevaluasi) atau hanya hafalan, dengan menghubungkannya ke taksonomi Bloom dan [[educational-measurement]].
- **Soal kasus dengan kesalahan tertanam untuk penilaian berulang:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi et al. (2026)]] menghasilkan soal penalaran diagnostik hierarkis (HDR) baru — kasus singkat yang membawa kesalahan yang sengaja ditanamkan dan harus ditemukan serta dijelaskan siswa — dan menemukan bahwa butir yang ditulis GPT-4o setara dengan butir yang ditulis manusia pada konsistensi internal (α Cronbach = 0.78 untuk keduanya) dan kesulitan, dengan uji eksak Fisher tidak menemukan perbedaan distribusi skor yang signifikan pada 100 peserta. Format ini memadukan tuntutan [[critical-thinking|pemikiran tingkat tinggi]] dengan respons yang terbatas, sehingga jawaban menyatu dan penilaian menjadi dapat direproduksi. Motivasi generatifnya adalah penggunaan ulang butir: menggunakan ulang satu kasus mengundang penggunaan ulang ingatan dan jawaban, sedangkan kasus yang dihasilkan secara struktural setara tetapi berbeda konteks menekan bias butir dalam pengukuran ulang.
- **Pipeline [[pedagogy|pedagogis]]:** [[slidesqaqa-pedagogical-question-generation|Pembuatan tanya-jawab dari dek slide]] menggunakan pipeline bertahap untuk pembuatan soal yang sehat secara pedagogis dari materi kuliah.
- **Generasi yang memperhatikan aksesibilitas:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]] merancang sistem pembuatan soal berbasis LLM untuk [[inclusive-learning|siswa Tuli dan Gangguan Pendengaran]], memperkenalkan strategi pertanyaan Visual dan Emosi yang menyasar momen kesulitan visual atau emosional dalam video, dan menyempurnakan soal secara iteratif bersama komunitas sasaran untuk memastikan aksesibilitas linguistik.
- **Sistem berbasis RAG dengan manusia dalam loop:** [[code-gen|CODE-GEN]] menggabungkan [[rag|retrieval-augmented generation]] dengan tinjauan [[human-in-the-loop-ai|manusia dalam loop]] untuk menghasilkan [[automated-assessment|penilaian pilihan ganda]].
- **[[benchmark|Tolok ukur]] dan evaluasi:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]] menyediakan tolok ukur teka-teki ilmiah/matematis untuk mengevaluasi sistem pembuatan soal dan penalaran.

## Validasi dan kualitas

Tantangan utama dalam AQG adalah **kendali mutu**:
- **Nilai proses penyelesaian, bukan batang soal:** [[proiqa-math-item-quality-assessment-2026|ProIQA]] berargumen bahwa tinjauan kualitas butir harus mengikuti langkah ahli — mensimulasikan penyelesaian — dan membangun pohon penalaran LLM per butir, diverifikasi benar secara matematis pada 90.38–97.80%, lalu mengodekan struktur dependensinya dengan [[machine-learning|jaringan saraf]] graf di samping pandangan batang soal saja. Ia melaporkan keuntungan rata-rata dibanding metode terbaik berikutnya sebesar 7.5% dalam penilaian konsep, 6.3% dalam estimasi kesulitan, dan 19.5% dalam penilaian kompetensi, dan analisis kesalahannya menyebut satu mode kegagalan: pohon penalaran yang benar secara logis tetapi dangkal secara struktural membuat soal sulit tampak mudah.

- **Risiko halusinasi:** LLM dapat menghasilkan soal yang salah secara faktual. [[generate-then-validate-question-gen|Generate-Then-Validate]] menunjukkan fase validasi khusus sangat menekan hal ini, dan [[hallucination-risk|risiko halusinasi]] diakui sebagai kekhawatiran di seluruh pembahasan.
- **Kalibrasi kesulitan:** soal yang dihasilkan harus dikalibrasi ke tingkat kesulitan yang sesuai. [[llm-difficulty-calibration-programming-exams-2026|Penelitian kalibrasi kesulitan]] menunjukkan perkiraan kesulitan AI berkorelasi kuat dengan kinerja siswa (mis., rho ≈ −0.87), memungkinkan pemilihan butir yang lebih baik — sekaligus memperingatkan terhadap [[ai-misuse-learning-harm|penyalahgunaan]] untuk keperluan berisiko tinggi. [[razavi-powers-item-difficulty-llm-2026|Razavi dan Powers (2026)]] memperluas ini ke butir matematika dan membaca kelas K-5 (N = 5170) yang dikalibrasi dengan model IRT Rasch: peringkat kesulitan zero-shot GPT-4o berkorelasi sedang hingga kuat dengan kesulitan sebenarnya (r = 0.83 matematika, r = 0.81 membaca) tetapi bervariasi menurut kelas, sedangkan pendekatan berbasis fitur — fitur kognitif dan linguistik yang diekstrak LLM yang dimasukkan ke model berbasis pohon — mencapai korelasi hingga r = 0.87. Ekstraksi fitur terstruktur studi ini (mis., kompleksitas sintaksis, [[cognitive-offloading|beban kognitif]], kelicikan distraktor) dan alur kerja tujuh langkahnya menawarkan templat untuk mengalibrasi butir yang dihasilkan, sementara temuan pembatasan rentang pada kelas awal dan peringatan generalisasinya menyarankan kehati-hatian untuk penggunaan berisiko tinggi.

- **Label kesulitan yang dihasilkan dapat merupakan kegagalan validitas konstruk, bukan kesalahan kalibrasi.** Pada 378 butir yang dihasilkan, label Mudah/Sedang/Sulit model mengikuti level Bloom yang dihasilkan bersamanya (ρ=0.90) dan bentuk permukaan - panjang batang soal rata-rata naik dari 15.9 ke 22.1 ke 30.2 kata - tetapi berkorelasi dengan kesulitan butir empiris hanya pada ρ=0.06 atas 7,888 respons dari 54 siswa, sehingga lebih masuk akal mengalibrasi metadata yang dihasilkan terhadap data respons daripada mempercayai tag yang dihasilkan bersamaan ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Validasi lapangan psikometrik berskala besar:** [[assessing-quality-ai-generated-exams-field-2025|Assessing AI-Generated Exams]] memvalidasi pipeline AQG penyempurnaan iteratif (hasilkan→adili→revisi, gaya Self-Refine) di 91 kelas kuliah nyata (~1,686 siswa). Analisis [[item-response-theory|IRT]] 2PL hierarkis Bayesian menunjukkan soal yang dihasilkan AI berkinerja setara dengan butir ujian standar yang ditulis ahli — agak lebih mudah (β̄ = −0.45 vs. 0.35) tetapi sedikit lebih diskriminatif (ᾱ = 1.3 vs. 1.2), dengan informasi tes puncak lebih tinggi (reliabilitas 0.79 vs. 0.72) — menunjukkan bahwa AQG dapat menghasilkan penilaian yang disesuaikan dengan mata kuliah dan sehat secara psikometrik dalam skala besar.

- Paritas psikometrik rata-rata dapat menutupi kekurangan di tingkat butir: tinjauan cakupan atas 153 laporan pendidikan kedokteran menemukan pembuatan butir AI kadang menyamai kesulitan dan daya diskriminasi manusia, namun dalam satu perbandingan fisiologi hanya 9 dari 40 butir ChatGPT yang memenuhi semua kriteria ideal berbanding 19 dari 40 butir dosen ([[genai-medical-education-transformation-review-2026|Zhao et al. (2026)]]).
- **Dapat dikenali dalam ujian langsung, dan apa yang sebenarnya dihapus oleh tinjauan:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt et al. (2026)]] memasukkan 30 PG hasil AI dan 30 PG Ujian Lisensi Nasional ke dalam ujian berbasis tablet yang dinilai, diikuti 119 [[medical-education|mahasiswa kedokteran]] tahun kelima, dengan butir AI disusun dari materi kuliah itu sendiri oleh ChatGPT-4o dan Gemini 1.5 Pro melalui panel ahli yang menerima 82% di antaranya dan mengeliminasi 18.2% sebagai tidak dapat digunakan. Atribusi sumber oleh siswa tidak berbeda antara kedua jenis butir, dan kesulitan butir, distribusi distraktor, serta keselarasan kurikuler yang dipersepsikan secara statistik tidak dapat dibedakan — hasil *pengenalan* dan bukan hasil kualitas, dan inilah alasan para penulis menggambarkan manfaat alur kerja ini sebagai menggeser upaya pendidik dari penyusunan ke peninjauan, bukan menghapusnya. Satu perbedaan eksploratif tetap ada: butir Gemini lebih sulit daripada butir ujian lisensi (p = 0.028), sedangkan butir ChatGPT tidak (p = 0.984).
- **Ketergantungan pada tugas:** keandalan generasi bervariasi menurut tipe butir. [[cong-confidence-asag-2026|Penilaian jawaban singkat]] dan [[self-referential-l2-writing-llm-assessment|penilaian tulisan analitis]] menunjukkan bahwa butir respons terbuka dan tulisan lebih sulit dihasilkan dan dinilai secara andal daripada butir terstruktur.
- **Kualitas kognitif:** [[llm-educational-question-cognitive-depth|evaluasi kedalaman kognitif]] menunjukkan butir yang dihasilkan dapat condong ke pemikiran tingkat rendah kecuali dirancang secara eksplisit untuk hasil tingkat tinggi.

- **Pelabelan otomatis tingkat kognitif tidak beralih ke butir yang dihasilkan.** Pengklasifikasi taksonomi Bloom yang dilatih pada bank butir terkurasi runtuh pada soal yang dihasilkan AI — F1 makro dari 0.88 dalam distribusi menjadi 0.48 dan 0.20 di luarnya — karena butir yang dihasilkan rata-rata jauh lebih banyak kata (18.2 versus 9.3) dan hanya berbagi median 10.5% kata kerja pemicu Bloom dengan korpus terkurasi, berbanding 35.1% untuk kumpulan yang lebih dekat; pelatihan ulang pada data berlabel di luar distribusi merupakan keuntungan tunggal terbesar, pada ambang sekitar N > 1,000 sampel berlabel ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

## Peran dalam pembelajaran adaptif dan personal

AQG merupakan pemungkin utama pembelajaran [[adaptive-learning|adaptif]] dan [[personalized-learning|yang dipersonalisasi]]: ia menghasilkan bank butir besar tempat tutor adaptif mengambil soal, dan — bila digabungkan dengan [[knowledge-tracing|penelusuran pengetahuan]] atau [[student-modeling|pemodelan siswa]] — dapat menghasilkan butir yang disesuaikan dengan keadaan pengetahuan siswa individual ([[kt4eqg-personalized-question-generation|KT4EQG]]). [[taklif-ai-interest-based-personalized-assignments|Personalisasi berbasis minat]] menunjukkan AQG juga dapat menyesuaikan soal dengan minat siswa, bukan hanya kesulitannya.

## Implikasi bagi AI dalam pendidikan

- **Hasilkan lalu validasi:** selalu pasangkan generasi dengan tahap validasi/penyempurnaan untuk mengendalikan halusinasi dan memastikan relevansi.
- **Cocokkan tipe butir dengan keandalan:** gunakan AQG untuk tipe butir terstruktur (PG, isian rumpang, kode) yang paling andal, dan terapkan validasi cermat pada butir respons terbuka dan tulisan.
- **Rancang untuk kedalaman kognitif:** prompt dan pipeline harus menyasar pemikiran tingkat tinggi, bukan sekadar mengingat, untuk mendukung pembelajaran yang sebenarnya.
- **Kalibrasi kesulitan:** gunakan perkiraan kesulitan AI untuk memilih butir yang menantang secara tepat, dengan validasi kuat sebelum penggunaan berisiko tinggi.
- **Personalisasi melalui model siswa:** gabungkan AQG dengan penelusuran pengetahuan dan model minat untuk menghasilkan butir adaptif dan individual.

## Miskonsepsi Umum

**"Soal yang dihasilkan dapat digunakan pada skala sebagaimana ia dapat diproduksi."** Volume bukan kendalanya; kalibrasi kendalanya. Kualitas sangat bervariasi antartipe butir dan perlu divalidasi agar tidak terhalusinasi atau terkalibrasi buruk, itulah sebabnya pipeline yang berhasil menghabiskan upayanya pada verifikasi, bukan generasi — salah satunya menurunkan halusinasi sebesar **62%** dengan menambahkan loop hasilkan-lalu-validasi-perbaiki.

**"Loop penyempurnaan membuat butir yang dihasilkan dapat dipercaya."** Loop itu membuatnya kurang salah. Penurunan halusinasi sebesar 62% menyisakan sisa yang besar, dan tidak ada loop yang menyelesaikan masalah yang lebih sulit: apakah kesulitan yang dinyatakan sebuah butir sesuai dengan yang sebenarnya dilakukan siswa — pertanyaan [[assessment-validity|validitas]] yang gagal dijawab metadata hasil generasi menurut bukti label kesulitan. Validasi mengurangi konten rekaan; kalibrasi menuntut data respons siswa.

**"Pembuatan soal secara alami mempersonalisasi latihan."** Ia menghasilkan pasokan, sedangkan personalisasi adalah masalah pencocokan. Menghasilkan lebih banyak butir tidak memberi tahu butir mana yang harus dilihat siswa tertentu berikutnya, dan pemilihan adaptif adalah mekanisme terpisah dengan buktinya sendiri.

**"Generasi menskalakan penilaian tanpa mengubah apa yang diukur oleh penilaian."** Ia mengubah komposisi apa yang diukur, karena butir yang mudah dihasilkan bukan sampel representatif dari butir yang menilai dengan baik. Format yang mudah dihasilkan akan secara progresif mendesak keluar format yang lebih sulit dihasilkan, yang diam-diam membentuk ulang konstruknya.

## Konsep terkait

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## Artikel terkait
- [[genai-medical-education-transformation-review-2026]] — Tinjauan cakupan atas 153 laporan pendidikan kedokteran tentang pembuatan butir AI versus kualitas butir dosen

- [[assessing-quality-ai-generated-exams-field-2025]] — Validasi lapangan berskala besar atas kualitas ujian yang dihasilkan AI melalui IRT
- [[generate-then-validate-question-gen]] — Pembuatan soal Generate-Then-Validate
- [[kt4eqg-personalized-question-generation]] — Pembuatan soal yang dipersonalisasi melalui penelusuran pengetahuan
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Pembuatan soal berbasis LLM untuk siswa Tuli dan Gangguan Pendengaran
- [[llm-educational-question-cognitive-depth]] — Kedalaman kognitif soal yang dihasilkan LLM
- [[slidesqaqa-pedagogical-question-generation]] — Pembuatan soal pedagogis tanya-jawab dari dek slide
- [[code-gen]] — CODE-GEN: pembuatan soal berbasis RAG dengan manusia dalam loop
- [[nsmq-riddles-science-math-benchmark]] — Tolok ukur NSMQ Riddles
- [[taklif-ai-interest-based-personalized-assignments]] — Tugas personal berbasis minat
- [[llm-difficulty-calibration-programming-exams-2026]] — Kalibrasi kesulitan berbasis LLM
- [[self-referential-l2-writing-llm-assessment]] — Penilaian tulisan analitis yang mengacu pada diri sendiri
- [[cross-dataset-bloom-question-classification]] — Klasifikasi soal Bloom lintas kumpulan data
- [[llm-chatbots-cs-multiple-choice]] — Chatbot LLM dan butir pilihan ganda CS
- [[socratic-tests-conversational-assessment]] — Tes Sokratik: penilaian konversasional
- [[llm-turing-test-italian-legal-exams-2026]] — Uji Turing LLM dalam ujian hukum
- [[razavi-powers-item-difficulty-llm-2026]] — Estimasi kesulitan butir menggunakan LLM dan ML berbasis pohon
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Penilaian Kualitas Butir Matematika Berbasis Proses
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: Tutor Agen yang Mempelajari Siswanya dalam Loop Ko-Pembelajaran Manusia-AI
- [[automated-constructive-assessment-hdr-llm-2026]] — Mengotomatiskan Penilaian Konstruktif dengan Model Bahasa Besar: Menuju Evaluasi Kompetensi Praktis yang Terukur dan Berulang
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Penggunaan LLM oleh Siswa dan Batas Kesulitan Soal yang Dihasilkan AI dalam Mata Kuliah Ilmu Data
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluasi model terlatih untuk penilaian pedagogis soal pendidikan baru yang dibantu AI
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Siswa tidak dapat membedakan PG yang dihasilkan AI dari butir ujian lisensi dalam ujian yang dinilai, dan 18.2% butir yang dihasilkan dieliminasi dalam tinjauan (Vogt et al. 2026)
