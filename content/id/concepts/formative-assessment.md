---
title: "Penilaian Formatif"
created: "2026-05-07T10:44:35-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
connected_resources: [snorkl, ai-infused-assignment-playbook]
confidence: high
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/formative-assessment"
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

> **Penilaian formatif** — penilaian yang dirancang untuk menginformasikan pengajaran dan pembelajaran yang sedang berlangsung, sebagai lawan dari evaluasi [[summative-assessment|sumatif]]. Dalam pendidikan AI, penilaian formatif sekaligus ditransformasi oleh AI dan esensial baginya: sistem AI dapat menghasilkan, memvalidasi, dan menyesuaikan butir serta umpan balik formatif dalam skala besar, sementara umpan balik formatif adalah mekanisme utama yang melaluinya [[intelligent-tutoring|tutor AI]] dan [[adaptive-learning|sistem adaptif]] mendukung pembelajaran. [[research-methods-aied|Penelitian]] dalam basis pengetahuan ini mengkaji butir formatif hasil AI, umpan balik hasil AI, dan desain serta evaluasi sistem-sistem tersebut.

## Pertanyaan untuk Dipertimbangkan

- Penilaian formatif dimaksudkan untuk menutup loop — memunculkan apa yang tidak diketahui siswa dan memberi umpan balik yang dapat mereka tindak lanjuti *selagi pembelajaran masih berlangsung*. Seberapa mendasar bedanya dengan evaluasi sumatif, dan kapan keduanya bisa tertukar dalam praktik?
- AI dapat menghasilkan soal pilihan ganda dengan akurasi yang mengesankan pada dimensi yang dapat diverifikasi, tetapi paling lemah pada dimensi pertimbangan instruksional. Jika mesin unggul dalam jawaban benar tetapi lebih lemah dalam pertimbangan [[pedagogy|pedagogis]], apa yang sepatutnya dipercayakan kepadanya — dan apa yang harus tetap dikerjakan manusia?
- Umpan balik hasil AI hanya membantu ketika siswa benar-benar menerapkannya — kondisi 'umpan balik yang diterapkan', ketika siswa memilih, mengevaluasi, dan menerapkan saran, mengungguli kondisi sekadar diberi umpan balik. Jika penerapan lebih penting daripada umpan baliknya sendiri, apa artinya itu bagi cara umpan balik formatif dirancang?
- Umpan balik digambarkan bukan sebagai transfer informasi melainkan praktik [[ethics|etis]] yang relasional. Apa yang hilang ketika penilaian formatif diproduksi massal sebagai 'AI slop' — dan apa yang dapat dipertahankan oleh bank komentar manusia dan kepedulian relasional?

## Pendahuluan

Penilaian formatif menjadi pusat [[ai-education|AI dalam pendidikan]] karena ia berada di persimpangan [[assessment]] dan [[feedback|umpan balik pembelajaran]]. Tujuannya adalah menutup loop: memunculkan apa yang diketahui dan tidak diketahui siswa, lalu memberikan umpan balik yang dapat mereka tindak lanjuti untuk memperbaiki diri. AI membuat hal ini layak dilakukan dalam skala besar — menghasilkan butir, menilai jawaban, dan menyampaikan umpan balik yang terindividualisasi — tetapi penelitian dalam basis pengetahuan menunjukkan bahwa kualitasnya sangat bervariasi antarjenis butir, dan bahwa umpan balik hanya membantu ketika siswa benar-benar menerapkannya.

[[correnti-erevise-validity-argument-formative-assessment-2026|Correnti dkk. (2026)]] memberikan bukti bahwa sistem menulis otomatis dapat melayani tujuan formatif yang autentik: pertumbuhan muncul pada kualitas revisi dan bukan hanya pada skor fitur, tetapi hanya ketika guru memasukkan umpan balik itu ke dalam diskusi kelas.

## Butir formatif hasil AI

Sistem AI menghasilkan butir penilaian formatif lintas modalitas, dengan keandalan yang berbeda menurut jenisnya:

- **Soal pilihan ganda:** [[code-gen]] menunjukkan bahwa [[agentic-ai|AI agentik]] dapat menghasilkan MCQ secara andal untuk pemahaman pemrograman ketika divalidasi lintas tujuh dimensi pedagogis — tingkat keberhasilan mencapai **98.6%** untuk keselarasan konsep dan **79.9%** untuk kualitas umpan balik — yang menunjukkan AI paling kuat pada dimensi yang dapat diverifikasi dan paling lemah pada dimensi pertimbangan instruksional. Ini terhubung dengan [[automated-question-generation|generasi soal otomatis]] secara lebih luas.

- **Bank butir hasil generasi yang mudah tidak memberi sinyal formatif.** Dalam penerapan 10 pekan, sekitar 70% butir latihan hasil AI dijawab benar oleh setiap siswa (p = 1.0), sehingga kuis berisiko rendah yang berjalan setiap 15 sampai 20 menit diterima dengan baik tetapi nyaris tidak membawa informasi pembeda untuk menyesuaikan pengajaran ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Penilaian esai otomatis:** kerangka multiagen (mis., MASS) meningkatkan konsistensi dibanding [[llm|LLM]] tunggal untuk [[automated-essay-scoring|penilaian esai]], meskipun [[explainable-ai|interpretabilitas]] keputusan penilaian multiagen masih menjadi tantangan terbuka.
- **Alur penilaian formatif:** [[cotal-formative-assessment-scoring-2026|CoTAL]] menggandengkan prompting Chain-of-Thought dengan [[active-learning|pembelajaran aktif]] dan Evidence-Centered Design untuk menghasilkan penilaian formatif yang dapat digeneralisasi dengan [[prompt-engineering|rekayasa prompt]] human-in-the-loop.
- **Penilaian berfrekuensi tinggi yang [[automated-assessment|ditandai secara otomatis]]:** [[automated-formative-assessments-a-level-sciences|penilaian formatif otomatis dalam sains A-level]] mengkaji efek penilaian formatif berfrekuensi tinggi yang ditandai otomatis terhadap [[learning-gains|luaran pembelajaran]]. Sebuah scoping review atas penandaan otomatis jawaban singkat dalam [[science-education|pendidikan sains]] (2017–awal 2024) menegaskan bahwa kasus penggunaan jawaban singkat formatif ini adalah bidang dengan daya tarik nyata: model keluarga BERT mendominasi penandaan otomatis sampai 2021 sebelum prompting [[llm|LLM]] yang lebih besar sejak ~2022, dan model yang diperkaya domain, sadar rubrik, serta chain-of-thought tampil paling baik — namun seruan review itu untuk evaluasi komprehensif dan celah [[bias-mitigation|keadilan]] serta explainability yang belum terselesaikan memperingatkan agar sistem semacam itu tidak diperluas ke penggunaan [[summative-assessment|sumatif]] atau berisiko tinggi yang tidak termediasi ([[auto-marking-short-answer-science-2026]]).

## Umpan balik hasil AI

Sejumlah besar penelitian basis pengetahuan mengkaji umpan balik formatif hasil AI:

- **Masalah penerapan:** [[ai-feedback-enactment-workflow-2026|Making AI-Generated Feedback Matter]] (13,037 siswa; 51,296 sumber daya) menunjukkan bahwa nilai umpan balik bergantung pada apakah siswa *menerapkannya* — kondisi **Enacted Feedback**, ketika siswa memilih, mengevaluasi, dan menerapkan saran umpan balik AI, mengungguli umpan balik terarah biasa.
- **Umpan balik AI dapat menyamai guru ahli ketika rubrik membawa kriterianya.** Dengan buta terhadap sumber dan diacak lintas 47 kelompok proyek universitas, sebuah LLM yang diberi rubrik 0–30 hasil konstruksi bersama dan exemplar bersifat non-inferior *dan* setara dengan umpan balik ahli (+0.23, CI 90% [−0.46, 0.91]) — rubriknya, bukan modelnya, yang mengalibrasi ([[ai-generated-feedback-higher-ed|Grion dkk. (2026)]]).
- **Umpan balik bukan transfer informasi:** [[care-full-feedback-genai|The care-full craft of feedback]] berargumen bahwa umpan balik adalah praktik etis dan relasional, bukan transmisi informasi — umpan balik baru menjadi umpan balik ketika siswa memaknai dan bertindak atasnya, dan tulisan itu mempertentangkan "AI slop" yang diproduksi massal dengan jalan pintas bank komentar manusia.
- **Umpan balik berurutan dapat menjadi bumerang:** [[sequenced-ai-feedback-learning|Umpan balik AI berurutan]] (dorongan → petunjuk → jawaban benar, dirancang untuk mendorong otonomi) justru **merugikan pembelajaran** dalam eksperimen acak (N=199) meskipun meningkatkan [[student-engagement|keterlibatan]] dan persepsi positif — temuan yang menjadi peringatan tentang desain umpan balik.
- **Alat yang berpusat pada siswa:** [[learner-centered-feedback-ai|PolyFeed]] memadukan model saran ML dengan praktik [[teacher-role|guru]], menunjukkan bagaimana guru mengadopsi dan menyesuaikan saran umpan balik AI; [[ai-internal-feedback-evaluative-judgments|umpan balik internal berbantuan AI]] membantu mahasiswa mengembangkan [[evaluative-judgment|pertimbangan evaluatif]].
- **Prompting berpanduan rubrik dan umpan balik sadar peran:** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar dkk. (2026)]] menunjukkan bahwa penyempurnaan rubrik secara iteratif — memperjelas deskriptor kinerja dan secara eksplisit menerima indikator pembelajaran yang implisit — mendorong kesepakatan LLM–manusia atas karya desain siswa dari 54.75% menjadi 81.25% (Cronbach's Alpha naik dari 0.393 menjadi 0.798), dengan keuntungan terbesar pada kategori Iterasi & Refleksi yang menuntut kognitif. Prompting model yang sama dalam peran instruktur, peninjau sejawat, dan peninjau hibah menghasilkan umpan balik evaluatif yang berbeda, dan LLM pascarevisi lebih konsisten daripada sebagian penilai manusia dalam menerapkan ambang kinerja — memosisikan LLM berpanduan rubrik sebagai mitra kalibrasi dan kodesain dalam lingkungan umpan balik formatif, dengan pengawasan human-in-the-loop yang tetap esensial.
- **Angka kesepakatan menyembunyikan arah: model dapat berlindung pada kategori tengah.** Seorang penilai LLM yang menandai giliran dialog dalam penilaian berbasis percakapan cocok dengan pengodean manusia pada 52.2% dari 155 peristiwa, tetapi lebih sering memakai label PARTIAL_CORRECT yang berhati-hati daripada penilai (53.5% berbanding 41.3%) dan menandai 5.4% giliran sebagai IRRELEVANT sementara penilai tidak menandai satu pun ([[llm-multi-agent-conversation-assessment-2025|Hou dkk., 2025]]).
- **Umpan balik AI menopang partisipasi dan mendorong keuntungan dalam skala besar:** eksperimen lapangan sepanjang semester [[gpt4-feedback-student-activation-2026|Geschwind dkk. (2026)]] pada tutorial sarjana menemukan bahwa umpan balik formatif individual dari GPT-4 (mencakup ketiga dimensi Hattie & Timperley — Feed-Back, Feed-Up, Feed-Forward) menopang partisipasi tertinggi pada delapan tugas terbuka, memperpanjang jawaban siswa, dan menghasilkan keuntungan pembelajaran konten terkuat — efek yang didorong oleh penyediaan AI yang andal dan konsisten, karena ketika umpan balik teks sejawat berkualitas tinggi benar-benar diterima, luaran sejawat menyamai luaran AI.
- **Masa depan umpan balik:** [[feedback-futures-genai|Feedback Futures]] menyintesis sebuah isu khusus dan berargumen bahwa pertanyaannya bukan *apakah* [[generative-ai|GenAI]] dapat menghasilkan umpan balik, melainkan bagaimana merancang umpan balik yang mendukung pembelajaran, dengan menyuling ketegangan berulang di seluruh bidang.

- **Sebagian besar umpan balik formatif bersifat sesaat, bukan berkelanjutan.** Dalam scoping review atas 37 studi penilaian autentik, 23 studi memakai umpan balik formatif untuk perbaikan segera tetapi hanya empat yang memakai umpan balik berkelanjutan yang dialihkan siswa ke konteks mendatang — pola reaktif yang direproduksi alat umpan balik AI saat ini ([[zhan-boud-du-authentic-assessment-scoping-review-2025|Zhan, Boud & Du (2025)]]).
- **Umpan balik diagnosis-dulu untuk soal [[quantitative-research|kuantitatif]] terbuka:** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin dkk. 2026)]] menyampaikan umpan balik formatif personal secara waktu nyata pada Calculated Formula Questions dalam Ekonomi Teknik, domain yang sebelumnya menghalangi dukungan AI karena solusinya ditulis tangan dan tidak terstruktur. Tulang punggung [[machine-learning|XGBoost]] per soal mendiagnosis kemungkinan kesalahan berlabel rubrik dari jawaban numerik yang dikirim siswa (average precision 0.81, recall 0.79), dan skema berbasis dialog hanya meminta jawaban antara ketika keyakinan prediksi rendah — menyeimbangkan akurasi umpan balik dengan efisiensi pengumpulan di dalam antarmuka web bank soal.
- **Skala dan batas umpan balik formatif LLM (bukti sistematis):** [[meta-analysis-systematic-review|tinjauan sistematis]] terpandu PRISMA atas 42 studi empiris (2023–2025) menemukan bahwa LLM dapat mengurangi beban kerja guru dan menyampaikan umpan balik personal yang cepat dalam skala besar — terutama pada kohort besar atau [[higher-ed|pendidikan tinggi]] — tetapi umpan balik itu kadang terlalu generik atau tidak selaras dengan nilai yang diberikan dan keandalannya menurun pada tugas yang lebih panjang, [[multilingual-learning|multibahasa]], atau bernuansa, sehingga memperkuat bahwa umpan balik formatif AI paling baik diterapkan di bawah pengawasan pendidik ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **Adaptivitas adalah bahan yang dapat dipisahkan, bukan hiasan:** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham, Schaaf, Brod & Breitwieser (2026)]] menyediakan uji kausal langsung yang diasumsikan begitu saja oleh sebagian besar studi umpan balik LLM, dengan mempertentangkan umpan balik responsif-konteks GPT-4 melawan panduan generik tulisan ahli yang disetarakan pada struktur, nada, panjang, dan frasa [[motivation|motivasional]] (diverifikasi dengan rubrik kualitas lima dimensi, κ = .76–1.00). Dalam eksperimen within-subjects terpreregistrasi, 155 siswa kelas lima dan enam Jerman (M = 12.08 tahun) merevisi enam rencana if-then: kualitas rencana naik dari median **2 → 5** di bawah umpan balik adaptif versus **2 → 3** di bawah panduan generik (within-person V = 10,440, p < .001, r = .86; estimasi interaksi kondisi × waktu = 1.68, SE = 0.14, p < .001, tanpa perbedaan pradukungan). Anak-anak menilai umpan balik adaptif lebih membantu (r = .67) dan lebih memotivasi (r = .74), dan persepsi tingkat percobaan memprediksi besarnya keuntungan revisi — menjadikan [[technology-acceptance-model|kegunaan yang dipersepsikan]] bagian dari jalur alih-alih produk sampingan afektif. Karena kontrolnya sendiri dirancang baik, studi ini menunjukkan nilai tambah *melampaui* panduan non-kontingen yang baik, bukan perbedaan antara umpan balik dan ketiadaan: panduan generik adalah substitusi yang nyata tetapi terbatas yang datar pada mediannya sendiri. Perencanaan dipakai sebagai kasus uji karena merupakan strategi inti [[self-regulated-learning|pembelajaran mandiri]] dengan kriteria kualitas eksplisit, yang membuat kontingensi — sifat yang membedakan [[scaffolding]] dari dukungan statis — dapat diukur langsung pada respons satu kalimat. Para penulis mendefinisikan adaptivitas secara sempit sebagai adaptasi isi umpan balik yang kontingen terhadap respons konkret siswa, membedakannya dari interaktivitas percakapan, nada, dan [[adaptive-learning|pembelajaran adaptif]] berbasis sifat stabil.
- **Kegunaan yang dipersepsikan mengikuti keterlaksanaan:** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça dkk. (2026)]] meminta 144 mahasiswa pemrograman menilai 893 instans umpan balik hasil LLM pada lima dimensi dan 237 laporan terkonsolidasi pada enam dimensi, dengan domain, tugas, dan instrumen dijaga konstan sementara jenjang pendidikan bervariasi. Penilaiannya menguntungkan secara keseluruhan, dengan rata-rata tingkat siswa 4.24 sampai 4.43 untuk jawaban individual dan 4.11 sampai 4.38 untuk laporan, namun keterlaksanaan dan kegunaan memperoleh penilaian terendah justru ketika keterlaksanaan dan akurasi yang dipersepsikan membawa bobot relatif terbesar (32.6% dan 29.0%) dalam model yang menjelaskan 76% varian kegunaan yang dipersepsikan, dan motivasi serta [[personalized-learning|personalisasi]] memimpin model tingkat laporan tentang niat menggunakan yang menjelaskan 53%. Karena keterlaksanaan adalah dimensi yang dianggap paling sulit disediakan oleh penelitian [[feedback]], polanya terbaca sebagai [[technology-acceptance-model|penerimaan teknologi]] yang diterapkan pada umpan balik: kegunaan mengikuti apakah siswa dapat bertindak, bukan seberapa rapi bunyi umpan baliknya.

- **Kesepakatan luring melebih-lebihkan kinerja langsung:** alur umpan balik GPT-4o [[ai-assisted-instructor-supervised-grading-feedback|Cruz dkk. (2026)]] mereproduksi nilai instruktur dalam selisih 0.5 poin pada 83% dari 362 kiriman, namun kesepakatan terkoreksi-kebetulan hanya moderat (ICC(2,1) = 0.49) dan turun dari r = 0.92 pada naskah historis menjadi 0.57 dalam penggunaan langsung yang diawasi instruktur.
- **Pemahaman melampaui keterlaksanaan dalam jalur menuju revisi:** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao dan Fan (2026)]] memisahkan diagnosis tingkat masalah dari saran dan memberi siswa lembar interpretasi tertulis (perumusan ulang, penjelasan efek, identifikasi ketidakpastian, rencana revisi) sebelum revisi mandiri, tinjauan guru terstruktur, penilaian ulang, dan refleksi. Lintas tiga siklus menulis di dua kelas utuh (96 siswa; 288 observasi tingkat siklus), pemahaman umpan balik membawa asosiasi terkuat dengan kualitas revisi (r = 0.501, di atas keterlaksanaan 0.480 dan akurasi diagnosis 0.445), dan kelompok diagnosis memperoleh 5.92 poin menulis berbanding 3.58 (Hedges' g = 1.12), yang menempatkan daya ungkit pada pemahaman siswa atas diagnosis alih-alih pada keterlaksanaannya semata.

## Desain berbasis kurikulum dengan pendidik dalam loop

[[ai-learning-tools-engineering-education-needs|LearnLens]] menangani tiga masalah menetap dalam penilaian formatif AI: **penilaian sadar kesalahan** (menangkap kesalahan penalaran yang bernuansa alih-alih kekeliruan permukaan), **rantai memori terhubung topik** (menggantikan [[rag]] berbasis kemiripan yang bising dengan pengambilan terstruktur yang berbasis [[curriculum-design|kurikulum]]), dan desain **pendidik dalam loop** (kustomisasi dan pengawasan guru, bukan otomatisasi penuh). Ini terhubung dengan ketegangan yang lebih luas dalam [[human-in-the-loop-ai]]: otomatisasi yang dapat diskalakan dengan validasi ahli.

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl & Leuders (2026)]] mempertajam makna pendidik-dalam-loop begitu sebuah alat menghasilkan klaimnya sendiri alih-alih observasi mentah. Analisis konseptual mereka berargumen bahwa inferensi diagnostik hasil AI adalah bukti yang secara kualitatif berbeda, karena ia sudah merupakan produk interpretasi algoritmik, sehingga guru membutuhkan lapisan tambahan yang disebut para penulis sebagai **meta-diagnosis**: secara sengaja menerima, menolak, atau memodifikasi sebuah inferensi dan mengintegrasikannya dengan pengetahuan kontekstual mereka sendiri. Merinci kerangka DiaCoM untuk hal ini memperlakukan inferensi hasil AI sebagai karakteristik situasi dan keputusan menerima, menolak, atau memodifikasi sebagai perilaku diagnostik, sekaligus memperluas karakteristik persona yang dibutuhkan guru hingga mencakup pengetahuan tentang cara kerja sistem AI yang sebenarnya. Karena sistem saat ini sebagian besar bersandar pada data kinerja seperti kebenaran tugas dan waktu penyelesaian, keadaan motivasional dan dinamika kelas tetap sebagian besar absen, sehingga makalah itu mempertahankan guru, bukan dasbor, sebagai agen reflektif yang bertanggung jawab dan membingkai penilaian atas klaim algoritmik sebagai sasaran [[educational-development|pengembangan profesional]].

Menyesuaikan peran AI dengan tingkat capaian adalah langkah desain yang terkait: guru sains prapelatihan menggambarkan ChatGPT sebagai Tutor yang Sabar bagi siswa berprestasi rendah, Pelatih Personal bagi siswa berprestasi sedang, dan Mitra Debat Intelektual bagi siswa berprestasi tinggi, sementara instruktur mempertahankan penjelasan akhir atas konten sulit ([[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom dkk., 2026]]).

## Trade-off desain

| Dimensi | Kesesuaian AI | Kebutuhan Manusia |
|-----------|----------------|-------------------|
| Kebenaran faktual | Tinggi | Rendah |
| Keselarasan konsep | Tinggi | Sedang |
| Kualitas distraktor | Rendah | Tinggi |
| Kedalaman umpan balik | Rendah | Tinggi |
| Konsistensi rubrik | Sedang | Sedang |

## Penilaian, umpan balik, dan pembelajaran

Penilaian formatif dalam pendidikan AI terhubung dengan proses pembelajaran itu sendiri:

- **Loop umpan balik:** [[feedback|loop umpan balik]] adalah mekanisme yang dengannya penilaian formatif menginformasikan pembelajaran; tutor AI dan sistem adaptif menutup loop ini dalam skala besar.
- **Pembelajaran mandiri:** umpan balik formatif mendukung [[self-regulated-learning|pembelajaran mandiri]] ketika siswa memantau kemajuan dan menyesuaikan diri; umpan balik AI seharusnya menumbuhkan [[ai-internal-feedback-evaluative-judgments|pertimbangan evaluatif]], bukan menggantikannya.
- **Penilaian otomatis menjangkau sebagian fase siklus, tidak semua:** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen & Liu (2026)]] menjalankan kuasi-eksperimen 14 pekan ketika 46 mahasiswa juru bahasa mengirim rendisi mingguan ke sistem penilaian otomatis yang mengembalikan skor segera, transkrip, kesalahan yang ditandai, dan rendisi rujukan, sementara kelompok kontrol hanya menerima umpan balik guru untuk seluruh kelas. Kelompok otomatis meningkat lebih banyak secara keseluruhan (d = 1.03), tetapi keuntungannya tetap berada di tempat defisitnya dapat didekomposisi, sinyalnya andal, dan skalanya sensitif: akurasi linguistik dan koherensi logis naik sementara kesetiaan informasi (kesepakatan dengan penilai manusia r = 0.12) dan kelancaran penyampaian tidak bergerak. [[self-regulated-learning|Pembelajaran mandiri]] tidak merata dengan pola yang sepadan, dengan eksekusi dan pemantauan berkorelasi dengan keuntungan skor (r = 0.42) sementara perencanaan dan motivasi emosional berada dekat titik tengah skala, dan beberapa siswa menunda keterlibatan setelah skor rendah alih-alih menganalisis penyebabnya. Sistem itu menjangkau fase kinerja dalam siklus, bukan perencanaan yang mendahuluinya.
- **Dari diagnosis otomatis ke latihan hasil generasi:** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu, Luo & Li (2026)]] menyambungkan penyelarasan audio-skor, kuantifikasi kesalahan, dan lapisan Proximal Policy Optimization menjadi satu loop tertutup untuk [[arts-design-and-media-education|pendidikan musik]], mengubah sinyal kesalahan ritme (91.2% recall, 98.4% specificity) menjadi reward yang mengarahkan trek latihan hasil generasi, dan melaporkan interaksi Group x Time yang signifikan yang menguntungkan kelompok sistem (beta = 0.52) dalam kuasi-eksperimen 12 pekan dengan 120 mahasiswa jurusan musik. Para penulis membingkainya sebagai kelayakan teknis, dan bacaan praktisnya adalah triase alih-alih penilaian: presisi 89.7% berarti kira-kira satu dari sepuluh kesalahan ritme yang ditandai adalah alarm palsu, dan peninjau ahli studi itu menilai dukungan bagi ekspresi musikal sebagai area terlemah, sehingga loop otomatis cocok untuk latihan teknis sementara pertimbangan ekspresif tetap pada guru.
- **Scaffolding:** [[scaffolding]] dan penilaian formatif bekerja bersama — AI dapat menyediakan petunjuk dan prompt tepat waktu, meskipun penelitian umpan balik berurutan memperingatkan agar tidak menstrukturkan secara berlebihan.

- **Kualitas rubrik menggerakkan kesepakatan penilaian otomatis lebih dari pilihan model.** Pada 1,200 respons ujian Linux/bash, [[automated-grading-linux-bash-examinations-large-language-models|Alonso-Carracedo dkk. (2026)]] menemukan bahwa penambahan rubrik lengkap plus jawaban rujukan meningkatkan setiap model (terbaik: Gemini 3.0 Pro, ICC(3,1) = 0.888 terhadap batas atas manusia 0.949), sementara kesepakatan menurun monoton seiring naiknya tingkat kognitif soal.

- **Rubrik hasil AI menyamai penilaian manusia hanya dalam batas margin.** Empat rubrik AI mencapai ekuivalensi terkumpul dengan garis dasar manusia dalam ±5 poin pada 308 respons pemrograman (korelasi 0.948–0.973), tetapi lima sel rubrik–tugas melewatinya, dan GPT-4.1/4o menilai secara sistematis lebih keras pada rubrik terstruktur (−4.46 berbanding −0.66 untuk yang bebas bentuk) ([[harmogen-ai-assessment-rubric-generation|Mendonça dkk., 2026]]).
- **Validitas dan kualitas:** [[ai-feedback-quality|kualitas]] dan [[assessment-validity|validitas]] butir serta umpan balik formatif hasil AI harus dievaluasi; [[ai-ed-evaluation]] menyediakan metodenya.

- **Penilaian AI menambah ancaman validitas.** Karena penilai AI dapat memberi ganjaran atas fitur yang tidak relevan dengan konstruk seperti kelancaran bahasa alih-alih penalaran ilmiah, kertas putih Stanford/ETS yang disuling dari pertemuan ~100 pemimpin berargumen bahwa penilaian seharusnya mengumpulkan bukti yang berkelanjutan dan kaya konteks alih-alih mensertifikasi luaran sekali tembak ([[responsible-assessment-ai-era-stanford-2026|McGee dkk. (2026)]]).

- **Pertahankan tugas yang rentan dan tambahkan kembarannya.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] berargumen bahwa esai tugas rumah dan laporan penelitian membawa nilai formatif substansial dan sebaiknya dipertahankan untuk pembelajaran, dipasangkan dengan tugas kedua yang menilai luaran yang sama dan menyediakan bukti sumatif yang andal.
- **Penilaian formatif berbantuan teknologi adalah sifat sistem, bukan alat.** [[bulut-technology-supported-formative-assessment-2026|Bulut (2026)]] mendefinisikannya sebagai produk bersama kapasitas teknologi, regulasi pedagogis, agensi siswa, dan pertimbangan manusia, dan berargumen bahwa nilainya terletak pada menopang siklus bukti–umpan balik–refleksi–tindakan alih-alih pada otomatisasi.

## Risiko: Penilaian sebagai pengawasan

Sistem penilaian formatif dapat bergeser dari alat pendukung pembelajaran menjadi infrastruktur pemantauan perilaku. Aliran data yang sama yang memungkinkan tutor adaptif dapat memungkinkan pelacakan punitif jika [[governance]] lemah. Ini terhubung dengan [[privacy]] dan [[well-being|kesejahteraan siswa]], dan menyerukan sistem formatif yang mendukung pembelajaran alih-alih mengawasinya.

Observabilitas dapat dirancang tanpa pengawasan: ia adalah bukti yang benar-benar dihasilkan penilaian untuk pertimbangan yang dapat dipertahankan tentang pembelajaran, diperlakukan sebagai prioritas desain yang biayanya dibayar dalam kelayakan alih-alih etika ([[assessment-feedback-trilemma-model-2026|Pedlow dkk. (2026)]]).

## Implikasi bagi AI dalam pendidikan

- **Sesuaikan jenis butir dengan keandalan AI:** gunakan AI untuk dimensi yang dapat diverifikasi (keselarasan konsep, kebenaran) dan pertahankan pertimbangan manusia untuk dimensi instruksional (kualitas distraktor, kedalaman umpan balik).
- **Rancang untuk penerapan, bukan sekadar penyediaan:** umpan balik AI hanya membantu ketika siswa memilih, mengevaluasi, dan menerapkannya — strukturkan alur kerja yang mendukung penerapan.
- **Desain umpan balik lebih penting daripada volumenya:** umpan balik berurutan atau terlalu terstruktur dapat menjadi bumerang; prioritaskan umpan balik yang mendukung pemaknaan dan otonomi siswa.
- **Pertahankan pendidik dalam loop:** sistem berbasis kurikulum dengan pendidik dalam loop meningkatkan relevansi dan mengurangi kebisingan.
- **Evaluasi kualitas dan validitas:** nilai butir dan umpan balik hasil AI untuk kualitas, validitas, dan [[equity-in-ai-education|keadilan]], bukan hanya kecepatan generasi.
- **Perlakukan penilaian formatif sebagai filsafat, bukan kotak alat.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] menyintesis literatur pendidikan tinggi yang lebih luas menjadi paradigma "penilaian untuk pembelajaran" yang membingkai [[feedback]] formatif, berkelanjutan, dan terindividualisasi sebagai filsafat payung alih-alih kotak alat semata — menyeimbangkan tujuan formatif dengan [[summative-assessment|sumatif]] dan mengedepankan [[agency|agensi siswa]], regulasi diri, dan keterampilan [[metacognition|metakognitif]]. Mereka mengidentifikasi lima praktik yang saling memperkuat ([[authentic-assessment|penilaian autentik]], penilaian diri dan [[peer-assessment|sejawat]], penilaian ulang, [[mastery-learning|penilaian berbasis standar]], ungrading) yang melaluinya filsafat ini dapat diwujudkan, sambil mencatat bahwa adopsinya tetap sangat tidak merata lintas bidang pendidikan tinggi.

- **Penilaian berkelanjutan membingkai ulang catatan formatif itu sendiri.** Arsitektur rujukan AIM-CAI (makalah posisi, bukan implementasi) mengusulkan penggantian penilaian episodik sebagai basis bukti utama dengan infrastruktur enam lapis: generasi bukti lintas platform, serialisasi yang mempertahankan konteks sumber, terjemahan semantik termediasi AI, interpretasi psikometrik, profil kompetensi longitudinal, dan tata kelola terfederasi. Tabel pergeserannya menjabarkan perubahan itu: umpan balik per tugas menjadi umpan balik longitudinal yang mendukung pembimbingan dan refleksi; nilai menjadi profil kompetensi yang berkembang; kredensial menjadi catatan perkembangan yang transparan. Lapisan tata kelola adalah desakan makalah itu — tujuh ketegangan bernama (interoperabilitas vs. otonomi lokal, privasi vs. kegunaan, agensi siswa vs. otomatisasi prediktif, pengawasan vs. dukungan, dan seterusnya) yang masing-masing dipetakan ke risiko dan respons, dengan peringatan bahwa inferensi berkelanjutan tanpa tata kelola mengistimewakan norma budaya dominan. Klaim kebaruannya bersifat integratif: komponen-komponennya sudah ada; kontribusinya adalah arsitektur dan peta tata kelolanya. ([[mcnamara-aim-cai-continuous-assessment-2026]])

## Miskonsepsi Umum

- **"Butir latihan hasil generasi memberi sinyal formatif yang berguna."** **Bank butir hasil generasi yang mudah tidak memberi sinyal formatif**: dalam **penerapan 10 pekan sekitar 70% butir latihan hasil AI dijawab benar oleh setiap siswa**. Bank yang dilulusi semua orang tidak membawa informasi tentang siapa membutuhkan apa.
- **"Keandalan generasi butir seragam lintas format."** Sistem AI menghasilkan butir formatif lintas modalitas **dengan keandalan yang berbeda menurut jenisnya** — pilihan ganda termasuk di dalamnya. Memperlakukan butir hasil generasi sebagai setara lintas format menyembunyikan di mana generasi dapat diandalkan.
- **"Memberi siswa umpan balik AI menghasilkan penerapan."** **Masalah penerapan** didokumentasikan terpisah dari kualitas umpan balik: menerima umpan balik dan bertindak atasnya adalah dua langkah berbeda, dan langkah kedua adalah tempat penilaian formatif berhasil atau gagal.

## Konsep terkait

- [[pedagogical-patterns]] — Bentuk berurutan yang diambil penilaian formatif ketika AI menyediakan sebagian umpan balik
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — Penilaian sumatif: format yang tahan AI (ujian lisan, terawasi, tutup buku)
- [[reflection]]

## Artikel terkait
- [[llm-multi-agent-conversation-assessment-2025]] — Arsitektur empat agen untuk penilaian berbasis percakapan yang penilainya berlindung pada kategori tengah (Hou dkk. 2025)
- [[causal-modeling-competency-assessment-2026]] — Pemodelan kausal intervensi dukungan untuk penilaian kompetensi siswa
- [[nicola-richmond-programwide-assessment-genai-2025]] — Pendekatan seluruh program untuk mendesain ulang penilaian di era GenAI
- [[ai-feedback-enactment-workflow-2026]] — Membuat umpan balik hasil AI bermakna: dari penyediaan ke penerapan
- [[care-full-feedback-genai]] — Kerajinan penuh kepedulian dalam umpan balik di era GenAI
- [[feedback-futures-genai]] — Masa depan umpan balik: melampaui batas kapasitas manusia dan GenAI
- [[sequenced-ai-feedback-learning]] — Dampak dan jalur umpan balik AI berurutan
- [[learner-centered-feedback-ai]] — Memperkuat umpan balik berpusat siswa dengan AI
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — Dari penilaian otomatis ke diagnosis pembelajaran: studi mekanisme penilaian formatif berbantuan AI dalam menulis bahasa Inggris
- [[ai-internal-feedback-evaluative-judgments]] — Mengembangkan pertimbangan evaluatif melalui umpan balik internal berbantuan AI
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: penilaian formatif dengan prompting human-in-the-loop
- [[automated-formative-assessments-a-level-sciences]] — Penilaian formatif otomatis berfrekuensi tinggi
- [[ai-generated-feedback-higher-ed]] — Umpan balik hasil AI di pendidikan tinggi
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: umpan balik AI berbasis kurikulum
- [[genai-teacher-feedback-comparison]] — Perbandingan umpan balik GenAI vs. guru
- [[chatgpt-feedback-engagement-genai]] — Umpan balik ChatGPT dan keterlibatan
- [[code-gen]] — CODE-GEN: generasi MCQ tervalidasi
- [[responsible-assessment-ai-era-stanford-2026]] — Penilaian yang bertanggung jawab di era AI
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Merancang untuk penilaian autentik
- [[automated-grading-linux-bash-examinations-large-language-models]] — Penilaian otomatis ujian Linux/bash
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Peran instruktur dan AI dalam penilaian formatif yang diperkuat ChatGPT
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Menimbang ulang ujian lisan sebagai penilaian autentik yang tahan AI
- [[roe-assessment-twins-2026]] — Kembaran penilaian untuk memperkuat validitas penilaian di era GenAI (Roe, Perkins & Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: generasi rubrik penilaian AI
- [[ai-assisted-instructor-supervised-grading-feedback]] — Penilaian dan umpan balik berbantuan AI yang diawasi instruktur
- [[adaptive-scaffolding-cognitive-engagement-its]] — Scaffolding ICAP adaptif dalam ITS (BKT vs DRL)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM sebagai agen desain pedagogis iteratif
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — Adaptivitas membuat umpan balik efektif: bukti dari umpan balik hasil AI atas rencana anak-anak
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Penilaian otomatis, interpretasi kinerja, dan pembelajaran mandiri (Chen & Liu 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Keterampilan diagnostik guru dalam penilaian formatif berbantuan AI: dari diagnosis ke meta-diagnosis
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — Kegunaan yang dipersepsikan dan niat menggunakan umpan balik hasil LLM dalam pemrograman lintas tiga jenjang pendidikan
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — Bantuan pengajaran adaptif yang memadukan AI generatif dan analitik big data dalam pendidikan musik
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Penggunaan LLM oleh siswa dan batas kesulitan soal hasil AI dalam mata kuliah ilmu data
- [[mcnamara-aim-cai-continuous-assessment-2026]] — Infrastruktur Penilaian Berkelanjutan Termediasi AI (AIM-CAI): menghubungkan bukti pembelajaran lintas konteks dan waktu (McNamara & Hasnine 2026)
- [[etq-ai-conversational-teacher-training-2026]] — Diagnosis percakapan AI untuk mengajarkan miskonsepsi dengan dialog berbasis bukti (Miranda & Calvani 2026)
- [[assessment-feedback-trilemma-model-2026]] — Padanan positif bagi risiko pengawasan: observabilitas sebagai desain bukti, bukan pemantauan
