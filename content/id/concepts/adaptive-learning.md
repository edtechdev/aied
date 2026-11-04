---
title: "Pembelajaran Adaptif"
created: "2026-08-09T10:44:35-04:00"
type: concept
pedagogy: [scaffolding]
technology: [cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
confidence: high
updated: "2026-11-04T02:42:40-05:00"
translation_of: "concepts/adaptive-learning"
source_updated: "2026-11-01T09:08:13-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pembelajaran adaptif** — sistem pendidikan berbasis AI yang menyesuaikan konten, tempo, dan strategi pengajaran berdasarkan karakteristik serta kinerja pembelajar secara individual. Pembelajaran adaptif adalah tujuan operasional dari banyak [[ai-education|AI dalam pendidikan]] [[research-methods-aied|penelitian]]: menggunakan [[student-modeling|model siswa]] untuk mempersonalisasi pengajaran.

## Pertanyaan yang Perlu Dipertimbangkan

- 'Adaptif', 'terpersonalisasi', 'individual', dan 'disesuaikan' sering digunakan secara bergantian — tetapi penelitian menunjukkan bahwa keempatnya tidak sama. Menurut Anda, apa arti masing-masing kata, dan di mana asumsi itu mungkin salah?
- Sistem adaptif menyesuaikan konten dan tingkat kesulitan berdasarkan model tentang apa yang Anda ketahui. Apa yang bisa salah jika model itu bertumpu pada sinyal yang dangkal atau tidak andal tentang pembelajaran Anda?
- Temuan kunci adalah bahwa sistem yang menyimpulkan penguasaan dari jawaban benar dapat menghentikan latihan terlalu dini — sebelum Anda belajar kapan harus menahan suatu tindakan. Dapatkah Anda memikirkan keterampilan di mana 'benar' secara berulang tetap membuat Anda tidak siap menghadapi situasi nyata?
- Adaptasi berlebihan dapat menghilangkan pergulatan produktif yang dibutuhkan siswa untuk belajar secara mendalam. Jika AI terus membuat segala sesuatu lebih mudah begitu Anda mengalami kesulitan, apa tepatnya yang hilang dari pembelajar?
- Meta-analisis menunjukkan bahwa mekanisme adaptasilah — bukan generasi alat tertentu — yang mendorong [[learning-gains|perolehan belajar]]. Jika 'bagaimana' lebih penting daripada 'alat yang mana', apa yang harus Anda cari saat memilih perangkat lunak adaptif?
- Tutor berbasis LLM kini dapat menyesuaikan bahasa dan gaya penjelasan, bukan hanya tingkat kesulitan. Kapan mempersonalisasi cara sesuatu dijelaskan membantu pembelajaran, dan kapan hal itu diam-diam melemahkan agensi pembelajar itu sendiri?

## Pendahuluan

### Mekanisme inti

- **Siklus ukur–model–adaptasi:** [[knowledge-tracing]] memperkirakan apa yang diketahui siswa, [[student-modeling]] merepresentasikan pembelajar, dan sistem menyesuaikan tingkat kesulitan, konten, dan [[feedback]] sesuai dengan itu.
- **Personalisasi dalam skala besar:** sistem [[personalized-learning]] menggunakan algoritma adaptif untuk menyajikan jalur belajar yang unik bagi setiap siswa. [[deeptutor]] dan [[ai-powered-personalized-learning-elementary-fractions-2026|tutor pecahan tingkat dasar]] menunjukkan personalisasi adaptif dalam praktik.
- **Pengurutan konten:** [[adaptive-pretesting-retention|Pretesting adaptif]] dan [[adapt-adaptive-lesson-plan-transformer|transformer rencana pembelajaran]] mengoptimalkan urutan dan jenis konten yang disajikan.
- **Integrasi ITS:** [[intelligent-tutoring|Sistem tutoring cerdas]] adalah platform pembelajaran adaptif kanonis, yang menggabungkan diagnosis dengan adaptasi.
- **Pembuatan profil dan diagnosis yang digerakkan AutoML:** Model pendidikan tradisional kesulitan memproses data perilaku belajar yang bersumber ganda dan heterogen, yang membatasi pembuatan profil pembelajar dan pengembangan model diagnostik. Kerangka pencarian arsitektur kognitif neural terpersonalisasi yang digerakkan oleh [[machine-learning|machine learning]] otomatis mengintegrasikan data pendidikan [[multimodal|multimodal]] dengan metode yang heterogen, menghasilkan model diagnostik yang disesuaikan dengan profil pembelajar heterogen dan mendukung analisis proses belajar yang dinamis alih-alih statis.

### Bukti efektivitas

Basis pengetahuan ini mendokumentasikan bukti yang bercampur: sistem adaptif memperbaiki hasil ketika adaptasi berpijak pada [[student-modeling|model siswa]] yang andal, tetapi adaptasi yang terkalibrasi buruk dapat merugikan pembelajaran. [[personalized-learning|Penelitian personalisasi]] membedakan adaptasi yang efektif dari kustomisasi yang dangkal. [[khalifeh-redefining-personalized-learning-ai-2026|Tinjauan sistematis]] menemukan bahwa pembelajaran "adaptif", "terpersonalisasi", "individual", dan "disesuaikan" digunakan secara tidak konsisten — sehingga ukuran efek sangat bergantung pada bagaimana adaptasi dioperasionalkan, dan bidang ini menyerukan kerangka kerja yang terpadu.

Tinjauan PRISMA 2020 yang menyaring 959 catatan menjadi 22 intervensi pendidikan tinggi menghitung jalur adaptif dan sistem pemberi rekomendasi di antara aplikasi AI terkemuka, tetapi sebagian besar studi memperbaiki praktik yang ada alih-alih mentransformasikannya ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh dkk. (2026)]]).

**Landasan pedagogis, bukan kemampuan teknis, yang menggerakkan adaptasi.** Tinjauan 15 tahun atas 127 studi tutoring cerdas menemukan bahwa sebagian besar sistem dibangun di sekitar apa yang bisa dilakukan teknologi alih-alih prinsip pedagogis yang dinyatakan, dan menempatkan perolehan ITS rata-rata sekitar 20% berbanding hingga 98% untuk tutoring manusia ([[zerkouk-comprehensive-review-its-2025|Zerkouk dkk. (2025)]]).

Partisipasi, bukan mekanisme adaptasi, adalah kendala pengikat dalam RCT distrik dua tahun: meringkas pendaftaran menjadi satu langkah menaikkan partisipasi sesi pertama dari sekitar 45% menjadi 83% hanya melalui perubahan desain, dan perolehan intent-to-treat tumbuh seiring naiknya partisipasi ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos dkk. (2026)]]).


Tinjauan selaras PRISMA atas 44 studi menemukan bahwa literatur keterlibatan condong ke keterlibatan perilaku dan paling tipis pada keterlibatan agentik, serta melaporkan efek kebaruan — keterlibatan menurun seiring waktu dalam studi longitudinal ALEKS dan W-Pal setelah kebaruan alat memudar ([[simon-student-engagement-adaptive-learning-2026|Simon, Zeng & Fryer (2026)]]).

### Era AI: adaptasi berbasis LLM dan risikonya

[[generative-ai|AI generatif]] telah memperluas apa yang bisa dilakukan sistem adaptif — tutor [[agentic-ai|agentik]] percakapan, konten berlandaskan [[rag]], dan [[llm]] yang menggerakkan [[intelligent-tutoring|tutoring]]: semuanya menyesuaikan bukan hanya tingkat kesulitan soal tetapi juga bahasa dan gaya penjelasan (mis., [[learnmate2-llm-adaptive-learning|LearnMate-2]], [[deeptutor]], [[chudziak-ai-math-tutoring-platform|tutoring adaptif multi-agen]]). Namun, adaptasi berbasis LLM memunculkan risiko baru: tanpa [[student-modeling|model siswa]] yang andal, adaptasi mungkin didasarkan pada sinyal dangkal; adaptasi berlebihan dapat mengurangi pergulatan produktif yang dibutuhkan siswa (lihat [[desirable-difficulties]], [[cognitive-offloading]]); dan keseimbangan antara mempersonalisasi dan mempertahankan [[agency|agensi]] pembelajar adalah pertanyaan desain yang masih terbuka (lihat [[agentic-ai|AI agentik]]). Varian adaptasi yang diminta pembelajar berjalan sama sekali tanpa [[student-modeling|model siswa]]: dalam kursus pascasarjana Sidorkin (2026) bacaan hanya menyesuaikan ketika siswa mengajukan pertanyaan lanjutan untuk membingkai ulang, memperdalam, menyederhanakan, atau melokalkan bacaan itu, dan permintaan yang berorientasi pemahaman secara konsisten menghasilkan perancah yang lebih padat (penanda definisional 3.4x hingga 8.7x lebih banyak daripada teks dasar), karena itulah mewajibkan setidaknya tiga pertanyaan lanjutan per bacaan mengubah materi menjadi interaksi. Hal ini juga memindahkan beban adaptif kepada pembelajar: adaptasi di sini hanya terjadi jika siswa tahu apa yang harus diminta.

### Hubungan dengan pembelajaran terpersonalisasi dan tutoring cerdas

Pembelajaran adaptif sering kali disamakan dengan [[personalized-learning|pembelajaran terpersonalisasi]], tetapi keduanya berbeda. **Pembelajaran adaptif** adalah *mekanisme* — penyesuaian konten, tempo, dan tingkat kesulitan secara waktu nyata berdasarkan model pembelajar. **Pembelajaran terpersonalisasi** adalah *tujuan yang lebih luas*, yakni menyesuaikan seluruh pengalaman belajar dengan seorang individu, dan adaptasi waktu nyata hanyalah salah satu implementasinya. Sistem adaptif adalah *sarana* kanonis menuju personalisasi. [[intelligent-tutoring|Tutoring cerdas]] adalah *platform* klasik: ITS menggabungkan diagnosis (pemodelan siswa, pelacakan pengetahuan) dengan adaptasi, dan tutor berbasis LLM beradaptasi secara percakapan. Bersama [[personalized-learning|pembelajaran terpersonalisasi]], pembelajaran adaptif adalah anggota sisi aplikasi dari keluarga [[student-modeling|pemodelan pembelajar dan pengajaran adaptif]] — yang mengonsumsi representasi pembelajar yang dihasilkan oleh [[student-modeling|pemodelan siswa]], [[knowledge-tracing]], dan [[cognitive-diagnosis]].

### Bukti penelitian

- **Bukti [[meta-analysis-systematic-review|meta-analitik]] tentang alat adaptif + AI.** [[burneo-can-edtech-close-learning-gaps-2026|Sebuah meta-analisis Bank Dunia]] atas 14 [[rct|RCT]] menggabungkan pembelajaran berbantuan komputer adaptif, tutoring cerdas, dan AI generatif pada skala yang sama, memperkirakan perolehan belajar rata-rata ~0.125 sd tanpa perbedaan signifikan antara dua generasi teknologi — bukti bahwa mekanisme adaptasi, bukan generasi alat tertentu, yang menggerakkan perolehan.
- **Penilaian yang dapat diinterpretasi plus perutean beranggaran waktu.** [[mars-momentum-aware-adaptive-rating-assessment-2026|Sahu dkk. (2026)]] mempertahankan beberapa skalar pembelajar eksplisit — sensitivitas penilaian, kualitas respons, dan momentum — dan merutekan soal di bawah anggaran waktu, memotong volatilitas pembaruan penilaian sekitar setengahnya dibandingkan Elo tetap sambil tertinggal dari pelacakan pengetahuan neural dalam prediksi (AUC 0.7532 berbanding 0.8658 milik GKT).
- **Perbandingan algoritma adaptif di domain dinamis.** [[graph-its-adaptive-algorithms-2026|Penelitian ITS berbasis graf]] membandingkan beberapa algoritma pembelajaran adaptif (termasuk propagasi pengetahuan Bayesian dan logika fuzzy intuitionistik) dalam kerangka representasi pengetahuan berbasis graf untuk kurikulum dinamis.

- **RL sebagai mekanisme adaptasi, dipetakan secara empiris.** [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] menyintesis 89 studi RL dalam pendidikan dan menemukan bahwa adaptasi terbagi menjadi mekanisme terkait konten (pengurutan instruksional/penjadwalan konten, n = 53) dan terkait panduan (petunjuk, [[feedback]], pemilihan aktivitas, n = 36) — dengan RL menunjukkan keunggulan yang signifikan secara statistik atas garis dasar lebih sering untuk adaptasi terkait panduan daripada untuk penjadwalan konten. Mereka merekomendasikan RL tanpa model untuk pembelajaran adaptif dan mengingatkan bahwa RL klasik mengungguli Deep RL dalam studi yang ditinjau.

- **Adaptivitas berbasis kebenaran dapat menghentikan latihan terlalu dini.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, dan Stamper (2026)]] menemukan bahwa sistem adaptif yang menyimpulkan penguasaan dari kebenaran berisiko menghentikan latihan sebelum pembelajar menemui konteks tempat tindakan yang dipelajari seharusnya ditahan — sehingga generalisasi berlebih yang menipu tidak terdeteksi. Mereka merekomendasikan penyertaan tugas detektor "jangan-bertindak" sebelum aturan penghentian penguasaan terpicu, agar adaptasi menguji pemahaman bersyarat (tahu kapan harus menahan tindakan), bukan hanya kebenaran.

- **Rentetan penguasaan bukan pembelajaran yang tahan lama.** Dalam eksperimen lapangan di sekolah menengah dengan 6,000 siswa, aturan penguasaan tiga-jawaban-benar-berturut-turut yang didukung AI menaikkan capaian yang didefinisikan platform sekitar 28.7 poin persentase tanpa memperbaiki tes tertunda seminggu kemudian, sehingga metrik penguasaan perlu divalidasi terhadap pembelajaran tertunda alih-alih menggantikannya ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos dkk. (2026)]]).
- **Sesuaikan *jenis* keterlibatan kognitif, bukan hanya tingkat kesulitannya.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi dkk. (2026)]] menemukan bahwa kebijakan BKT dan deep-RL yang menetapkan contoh terkerjakan terpandu (aktif) atau cacat (konstruktif) keduanya mengalahkan penugasan acak dalam tutor logika dengan 113 siswa (pascates 72.3 dan 72.5 vs 65.7), dengan BKT paling baik melayani siswa berpengetahuan awal rendah dan DRL yang tinggi.

- **Umpan balik lebih banyak bukan berarti umpan balik lebih baik.** Dalam kursus stokastik adaptif selama delapan minggu (194 siswa), umpan balik direktif, informatif, dan transformatif diambil dengan cara yang berbeda, dan umpan balik transformatif dikaitkan dengan beban kognitif berlebih alih-alih regulasi yang lebih baik — adaptivitas harus sesuai dengan fase dan kebutuhan pembelajar, bukan memaksimalkan kepadatan umpan balik ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh & Fromm (2026)]]).

- **Profil bukan sifat bawaan.** Skor strategi bervariasi terutama menurut konteks, bukan menurut siswa, dengan korelasi intrakelas rata-rata 0.14 pada 234 pembelajar sekolah dasar, dan 74.6% kegagalan dengan tuntutan koordinasi tinggi langsung kembali menjadi kegagalan lain tanpa intervensi ([[configuration-aware-diagnostic-adaptive-scaffolding-2026|Geoffre, Yuan dan Geoffre (2026)]]). Adaptasi yang dibangun di atas tipe pembelajar yang stabil membuang sebagian besar sinyal; membaca keadaan tempat pembelajar berada tidak demikian.
- **Profil keterlibatan sebagai sasaran adaptasi.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] melacak 315 pembelajar daring yang membangun 822 model di VERA dan mengklasifikasikan keterlibatan mereka ke dalam profil Observation, Construction, dan Exploration, menemukan bahwa pembelajar cenderung bergerak dari perilaku yang berfokus pada konstruksi menuju Exploration yang lebih utuh dan digerakkan hipotesis, sementara Observation bertahan di semua fase. Mereka berpendapat bahwa desain adaptif dan terpersonalisasi harus mengenali profil ini dan menargetkan umpan balik (mis., merekomendasikan model yang serupa atau mendukung pemahaman konseptual yang lebih mendalam) untuk menggerakkan pengamat tingkat permukaan menuju pemodelan yang lebih integratif dan bersiklus penuh.
- **Memori yang dibaca tetapi tidak ditulis bukan adaptasi.** Kondisi kontrol memori beku CoLearn menyajikan item tetap sambil tetap membaca profil pembelajar, dan porsi item yang diarahkan pada keterampilan yang benar-benar lemah turun dari 0.72 menjadi 0.57, dengan galat penguasaan akhir naik di atas kondisi adaptif ([[colearn-agentic-tutor-co-learning-loop-2026|He dkk. (2026)]]).

- **Perolehan datang dari pengurutan, bukan dari tutor yang lebih cerdas.** [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung dkk. (2026)]] melatih tutor terpersonalisasi dengan pembelajaran penguatan terpandu LLM dan menerapkannya dalam kursus Python lima bulan di sepuluh [[k-12|sekolah menengah atas]] Taipei, mengacak 770 siswa antara urutan soal adaptif dan urutan tetap mudah-ke-sulit. Pengurutan adaptif menaikkan skor [[summative-assessment|ujian akhir]] tatap muka tanpa bantuan sebesar 0.156 SD (0.150 SD dengan kontrol) — sementara analisis mediasi mengaitkan efeknya hampir seluruhnya dengan keterlibatan (0.185 SD melalui waktu mengerjakan, 0.149 SD melalui percobaan) alih-alih dengan materi yang lebih mudah atau lebih sulit, dan perolehan terbesar ada pada pemula dan sekolah lapis bawah. Tuas adaptifnya adalah urutan latihan, bukan kualitas percakapan.

- **Jaga keputusan penguasaan tetap berbasis aturan dan batasi machine learning pada pemantauan.** Program STEM adaptif selama delapan minggu untuk 30 siswa kelas enam mengatur jalur dengan penguasaan berbasis aturan sementara machine learning melacak kinerja, sehingga adaptasi tetap dapat diaudit, tetapi tanpa prates dan hanya satu kelas per kondisi, perolehannya adalah templat percontohan untuk divalidasi secara lokal ([[bin-bakheet-adaptive-ai-stem-deep-learning-2026|Bin Bakheet dkk., 2026]]).

- **Sesuaikan atribut penghambat, bukan rata-rata yang lemah.** Pemodelan transisi keadaan pengetahuan menempatkan berpikir analitis sebagai yang paling sulit diperoleh dan paling mudah hilang — probabilitas transisi maju terendah 0.31 dan mundur tertinggi 0.22-0.23 — sehingga latihan ulang atas atribut yang ditandai menjadi sasaran adaptasi yang lebih tajam daripada penguasaan secara keseluruhan ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).
- **Adaptasi dari urutan proses, bukan skor agregat.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela & Cukurova (2026)]] menurunkan aturan perancah dengan menambang *urutan* giliran dialog 65 siswa dalam triad, menggeser pembelajaran adaptif dari ukuran perilaku atau kinerja yang teragregasi menuju urutan proses individual; perancah maksimal menaikkan perilaku sesuai tugas tetapi juga penskriptan, dan desainnya belum diuji.

## Miskonsepsi Umum

- **"Adaptif berarti terpersonalisasi berarti individual."** [[khalifeh-redefining-personalized-learning-ai-2026|Tinjauan sistematis]] menemukan keempat istilah ini digunakan **secara tidak konsisten di seluruh literatur**, yang berarti ukuran efek yang dilaporkan sangat bergantung pada bagaimana adaptasi dioperasionalkan, bukan pada adaptasi itu sendiri. Meta-analisis yang menggabungkan studi yang memakai kata-kata berbeda sedang menggabungkan perlakuan yang berbeda, dan rata-ratanya tidak menggambarkan satu pun darinya.
- **"Penguasaan yang dicapai di dalam sistem adalah penguasaan yang dipelajari."** Dalam **eksperimen lapangan di sekolah menengah dengan 6,000 siswa**, aturan penguasaan tiga-jawaban-benar-berturut-turut yang didukung AI menaikkan **capaian yang didefinisikan platform sekitar 28.7 poin persentase tanpa memperbaiki** ukuran transfer. Aturan itu mengoptimalkan kriteria platform itu sendiri. Ini adalah demonstrasi paling jelas yang tersedia bahwa sinyal penguasaan adalah model dari pembelajaran, bukan pembelajaran itu sendiri.
- **"Adaptivitas berbasis kebenaran tahu kapan harus berhenti."** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, dan Stamper (2026)]] menemukan bahwa sistem yang menyimpulkan penguasaan dari kebenaran berisiko **menghentikan latihan terlalu dini** — sistem membaca rentetan jawaban benar sebagai pemahaman dan menarik latihan yang masih dibutuhkan pembelajar. Adaptivitas yang berhenti pada keberhasilan dapat mengurangi justru percobaan-percobaan yang menghasilkan retensi.
- **"Hambatannya adalah seberapa baik adaptasinya."** Dalam **RCT distrik dua tahun**, kendala pengikatnya adalah **partisipasi**: meringkas pendaftaran menjadi satu langkah menaikkan partisipasi sesi pertama dari sekitar **45% menjadi 83%** hanya melalui perubahan desain, dan perolehan intent-to-treat tumbuh seiring itu. Adaptasi paling cerdas tidak melayani siapa pun yang tidak pernah mencapainya.
- **"Keterlibatan bertahan setelah terbentuk."** Tinjauan selaras PRISMA atas **44 studi** menemukan bahwa literatur keterlibatan condong ke keterlibatan perilaku dan paling tipis pada keterlibatan agentik, serta melaporkan **efek kebaruan** — keterlibatan menurun seiring waktu dalam studi longitudinal ALEX dan sistem serupa. Keterlibatan awal bukan sifat yang stabil dari desain.

## Implikasi bagi Praktik

**Bagi instruktur dan desainer**

- Definisikan penguasaan berdasarkan apa yang perlu benar, bukan berdasarkan apa yang bisa dilihat platform. Perolehan capaian 28.7 poin tanpa perbaikan transfer adalah mode kegagalan yang harus diantisipasi oleh desain: jika kriterianya tiga berturut-turut, tiga berturut-turutlah yang akan Anda dapatkan.
- Teruskan latihan melewati sinyal kebenaran untuk apa pun yang perlu dipertahankan. Gunakan tinjauan [[desirable-difficulties|berjarak dan berselang-seling]] alih-alih mempercayai sistem adaptif untuk memutuskan kapan seorang pembelajar selesai.
- Hilangkan gesekan pendaftaran sebelum menyetel algoritma. Partisipasi 45% → 83% dari meringkas satu langkah mengungguli sebagian besar perbaikan pedagogis dalam literatur ini.
- Rencanakan kemunduran keterlibatan. Karya longitudinal mendokumentasikan penurunan; desain yang bergantung pada penggunaan sukarela yang berkelanjutan memerlukan alasan untuk terus digunakan.
- Periksa konstruk mana yang diklaim disesuaikan oleh sebuah sistem. Keterlibatan perilaku paling banyak diteliti dan paling sedikit informatif tentang pembelajaran; keterlibatan agentik paling tipis dalam basis bukti.

**Bagi pengembang**

- Laporkan definisi operasional "adaptif" bersama setiap ukuran efek yang Anda kutip, karena definisi dalam literatur saling menyimpang dan angka gabungan mewarisi ambiguitas itu.
- Bedakan kriteria penguasaan Anda dari hasil belajar dalam validasi Anda sendiri. Jika ukuran validasi Anda adalah sinyal yang sama yang menggerakkan adaptasi, itu bukan bukti independen.

## Konsep terkait

- [[online-teaching-and-learning]] — Pengajaran dan Pembelajaran Daring
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[learning-analytics]]
- [[higher-ed]]
- [[k-12]]
- [[formative-assessment]]
- [[behaviorism]]
- [[ai-technologies]] — Payung: teknologi dan teknik AI (model, pelatihan LLM, robotika, RAG, agentik)
- [[recommender-systems-and-learning-paths]]

## Artikel terkait
- [[mars-momentum-aware-adaptive-rating-assessment-2026]] — MARS: Sistem Penilaian Adaptif Sadar Momentum untuk Penilaian Terpersonalisasi
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Generalisasi berlebih yang menipu: penguasaan adaptif dapat menghentikan latihan sebelum pembelajar tahu kapan harus menahan tindakan (An, McLaren & Stamper 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — Tutoring AI bukan monolit: apa yang sebenarnya kita ketahui (ringkasan Stanford SCALE/NSSA)
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[simon-student-engagement-adaptive-learning-2026]] — Tinjauan sistematis keterlibatan siswa dalam platform pembelajaran adaptif
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutoring virtual dengan CAL: eksperimen tentang partisipasi dan pembelajaran
- [[making-ai-tutoring-productive-mastery-math-2026]] — Membuat tutoring AI produktif: latihan matematika berbasis penguasaan
- [[chudziak-ai-math-tutoring-platform]] — Tutoring matematika multi-agen adaptif/terpersonalisasi (Chudziak & Kostka 2025)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Mendefinisikan ulang pembelajaran terpersonalisasi: tinjauan sistematis
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]] — AI khusus tutoring yang dikalibrasi terhadap kesiapan pembelajar vs. chatbot umum
- [[context-based-ai-secondary-chemistry-2026]] — Instruksi 7E berbasis konteks + AI dalam kimia sekolah menengah
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Program STEM berbasis AI adaptif untuk pembelajaran mendalam
- [[graph-its-adaptive-algorithms-2026]] — Tutoring Cerdas Berbasis Graf untuk Domain Dinamis (2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnosis kognitif Bayesian untuk jalur pembelajaran terpersonalisasi
- [[adaptive-scaffolding-cognitive-engagement-its]] — Perancah ICAP adaptif dalam ITS (BKT vs DRL)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Meta-analisis yang menggabungkan alat adaptif + berdaya AI di 14 RCT
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Tinjauan sistematis: jalur adaptif di antara kasus penggunaan integrasi AI pendidikan tinggi terkemuka
- [[an-goel-self-directed-modeling-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Pengurutan soal adaptif mengalahkan pengurutan tetap: +0.156 SD pada ujian tanpa bantuan, dimediasi keterlibatan alih-alih kesulitan (Chung dkk. 2026)
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: tutor agentik yang mempelajari pembelajarnya dalam lingkar ko-pembelajaran manusia–AI
- [[configuration-aware-diagnostic-adaptive-scaffolding-2026]] — Penggunaan strategi didominasi keadaan (ICC rata-rata 0.14), sehingga profil pembelajar statis membuang sebagian besar sinyal
