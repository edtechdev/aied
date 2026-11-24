---
title: "Pendidikan Dasar"
created: "2026-11-15T00:10:00-05:00"
type: concept
pedagogy: [scaffolding, game-based-learning, self-regulated-learning, social-emotional-learning]
technology: [adaptive-learning, intelligent-tutoring, conversational-ai, generative-ai]
level: [primary education, k 12]
confidence: medium
connected_concepts: [developmental-psychology, math-education, reading-education, writing-education, digital-divide, equity-in-ai-education, teacher-role, curriculum-design, privacy, assessment]
connected_articles: [ai-elementary-language-education-review-2026, guo-ai-literacy-developmental-paces-2026, yu-k12-ai-education-ai-literacy-meta-analysis-2026, yim-ai-literacy-primary-schools-review-2025, barokah-ai-elementary-science-review-2026, karampa-students-game-designers-ai-literacy-2026, llm-comparative-judgment-writing-screening-2026, melo-llm-classroom-observation-teach-2026, age-tiered-ai-literacy-guidebooks-2026, horowitz-kraus-children-chatgpt-cognitive-control-2026, tutor-case-bench-challenging-behaviors-2026, llm-simulating-student-scientific-thinking-2026, human-ai-complementarity-social-emotional-learning-2026]
updated: "2026-11-24T14:04:29-05:00"
translation_of: "concepts/primary-education"
source_updated: "2026-11-22T14:15:40-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Sintesis** — AI dalam pendidikan dasar terutama digunakan untuk membedakan latihan dalam literasi dan numerasi awal, untuk menyusun draf bahan bagi guru, dan untuk memberi anak sesuatu yang dapat ditanyai. Studi dengan kontrol terbaik menunjukkan keuntungan kecil yang bergantung pada orkestrasi [[teacher-role|guru]] alih-alih modelnya, dan sebuah uji yang dibangun untuk mengisolasi [[adaptive-learning|adaptivitas]] tidak menemukan keunggulan padanya. Bukti mendukung tutoring, membaca, menulis, dan [[ai-literacy|literasi AI]], dan penerapan tingkat kelas mengubah makna praktik baik pada usia lima hingga sebelas tahun.

## Pertanyaan yang Perlu Dipertimbangkan

- Sebuah sistem tutoring menaikkan skor kata yang diajarkan tetapi tidak kosakata terstandar. Hasil manakah yang seharusnya dibeli sebuah sekolah?
- Dalam satu uji kelas dua, tutor adaptif tidak bekerja lebih baik daripada urutan tetap. Jika adaptivitas bukan bahan aktifnya, apa bahan aktifnya, dan bagaimana Anda mengujinya?
- Anak-anak dalam sebuah studi [[trust|mempercayai]] chatbot sebanyak guru atau teman. Apa yang akan berubah di kelas Anda jika Anda mengasumsikan tingkat kepercayaan itu?
- Sebagian besar penerapan dasar adalah tingkat kelas: satu layar bersama, guru mengetik prompt, anak-anak menonton. Apa yang menjadi mungkin oleh hal itu yang tidak mungkin oleh perangkat untuk semua?

## Pendahuluan

Pendidikan dasar mencakup kira-kira usia lima hingga sebelas tahun, ketika anak belajar menguraikan teks, bernalar dengan bilangan, dan bekerja dalam satu ruangan dengan satu orang dewasa. AI mencapai pita ini melalui perangkat lunak latihan yang menyesuaikan dengan jawaban anak, alat yang menghadap guru dan menyusun rancangan dan [[feedback|umpan balik]], dan [[conversational-ai|agen percakapan]] yang disapa anak secara langsung. Yang ketiga memiliki bukti paling lemah dan paparan paling langsung.

Anak memiliki keterampilan papan ketik terbatas, [[metacognition|metakognisi]] yang sedang berkembang, dan kecenderungan kuat memperlakukan sistem lancar sebagai orang yang berpengetahuan. Ruang kelas menampung perangkat lebih sedikit daripada anak, sehingga unit realistis adalah pos, layar bersama, atau alur kerja bermediasi guru alih-alih satu tutor per siswa. Orang dewasa juga membawa tanggung jawab hukum dan perkembangan yang tidak ditransfer oleh kontrak vendor mana pun.

## Apa yang dapat didukung basis bukti

- **Literatur luas tetapi dangkal.** Tinjauan 31 studi AI dalam [[language-learning|pendidikan bahasa]] dasar dari 2013 hingga 2025 menemukan pekerjaan terkonsentrasi pada bicara, literasi, dan kosakata, dengan tata bahasa, pemahaman mendengar, dan bahasa isyarat nyaris tidak diteliti. Sebagian besar [[qualitative-research|kualitatif]] atau [[mixed-methods-research|metode campuran]], dengan sampel sedang dan tanpa pita kelas.

- **Uji bahasa dasar terkuat bersifat sederhana.** Sebuah [[meta-analysis-systematic-review|tinjauan lingkup]] atas 119 laporan tentang alat bermediasi AI dalam bahasa Inggris dasar mencakup satu [[rct|uji acak]] klaster dengan 217 [[multilingual-learning|pembelajar bahasa Inggris]] kelas dua. Ia menemukan ukuran efek 0,38 pada kata yang diajarkan dan efek tidak signifikan pada kosakata terstandar dan [[reading-education|pemahaman bacaan]] ([[li-zhou-ai-tools-primary-english-scoping-review-2026|Li and Zhou, 2026]]).

- **Platform pecahan terpersonalisasi tidak mengungguli pengajaran biasa.** Selama lima hari, kelompok pengajaran biasa membuat keuntungan pemahaman pecahan yang jauh lebih besar daripada kelompok Mathbot. Sampel akhir adalah 22 siswa setelah atrisi dan pengecualian outlier, dan kelompok perbandingan berada satu kelas di bawah kelompok perlakuan ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman, 2024]]).

- **Efek tutoring gabungan kecil dan rapuh.** Meta-analisis atas 18 eksperimen dan 11 [[intelligent-tutoring|sistem tutor cerdas]] di sekolah K-12 AS menemukan g = 0,271. Efek bertahan pada g = 0,266 di dasar, jatuh ke g = 0,146 dalam studi yang mencakup sekolah pedesaan, dan turun ke g = 0,110 tidak signifikan di luar enam bulan ([[leite-its-k12-meta-analysis-2025|Leite et al., 2025]]).

Efek rata-rata positif, kecil, dan sensitif terhadap latar, durasi, dan hasil yang dipilih.

## Tutoring dan latihan adaptif

- **Adaptivitas saja tidak membeli apa pun.** Sebuah eksperimen lapangan memberi 132 siswa kelas dua 30 menit pada salah satu dari dua versi tutor matematika yang sama, identik dalam konten, antarmuka, umpan balik, dan petunjuk. Hanya pemilihan tugas yang berbeda. Skor pascates tidak berbeda, F(1, 124) = 0,32, p = 0,574, begitu pula usaha atau kesenangan yang dilaporkan ([[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley, Berner and Schmalfeldt, 2026]]).

- **Pelatihan, bukan sistemnya, yang menghasilkan keuntungan.** Di 19 kelas sekolah umum Brasil, siswa yang diajar guru terlatih mengungguli kontrol baik pada kondisi pelatihan (15,15 poin) maupun kondisi pelatihan-plus-sistem (12,31). Menambah sistem tidak menghasilkan keuntungan lebih lanjut, −4,33, 95% CI [−17,29, 7,23], dan guru mengatakan memotret pekerjaan serta memperbaiki galat pengenalan menambah waktu ([[rodrigues-aied-unplugged-numeracy-2026|Rodrigues et al., 2026]]).

- **Dosis menjejaki pertumbuhan membaca, dan dosis adalah keputusan guru.** Di satu sekolah charter, siswa kelas satu dan dua diurutkan menurut menit tercatat ke kelompok dosis tinggi, rendah, dan nol. Dosis tinggi mengungguli dosis rendah pada g = 0,56; dosis tinggi versus nol mencapai g = 0,65 tetapi p = 0,026, di luar ambang 0,025 yang terkoreksi. Siswa di bawah persentil ke-25 menunjukkan g = 0,89 ([[burns-ai-tutor-reading-growth-2026|Burns and Morton, 2026]]).

Sistem tidak pernah menjadi seluruh perlakuan. Guru memutuskan siapa yang menggunakannya, berapa lama, dan apa yang terjadi ketika ia gagal.

## Membaca, menulis, dan umpan balik

- **Umpan balik meningkatkan menulis ketika guru membahasnya.** eRevise memberi siswa kelas lima dan enam [[ai-feedback-quality|umpan balik otomatis]] tentang penggunaan bukti dalam menulis argumentasi. Di 34 guru dan 609 siswa di delapan paroki Louisiana, skor fitur meningkat dari umpan balik saja, dan kelas di mana guru merespons substantif meningkat lebih banyak. Penjelasan konseptual penggunaan bukti naik dari 18,1% menjadi 41,9% ([[correnti-erevise-validity-argument-formative-assessment-2026|Correnti et al., 2026]]).

- **Umpan balik adaptif mengungguli panduan generik yang dirancang baik.** Dalam eksperimen within-subject terpraregistrasi, 155 siswa kelas lima dan enam Jerman merevisi enam rancangan singkat, tiga dengan umpan balik LLM atas teks mereka sendiri dan tiga dengan panduan tulisan ahli yang dicocokkan strukturnya, nadanya, dan panjangnya. Kualitas rancangan median naik dari 2 menjadi 3 di bawah panduan generik dan dari 2 menjadi 5 di bawah umpan balik adaptif ([[ai-feedback-adaptivity-children-plans-2026|Sukjaitham et al., 2026]]).

- **Program menulis [[generative-ai|GenAI]] sembilan minggu menggerakkan afek, bukan kedalaman.** Dengan 301 siswa kelas 5 dan 6 di Tiongkok timur yang ditugaskan per kelas, program itu menaikkan diri ideal menulis bahasa kedua dan daya apung akademik serta memperbaiki penggunaan bahasa. Ia tidak menggerakkan pola pikir berkembang, keterlibatan kognitif atau metakognitif, atau organisasi, dan efeknya kecil: η² parsial 0,030 untuk [[motivation|motivasi]] dan 0,014 untuk penggunaan bahasa ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]).

- **Menapis menulis dengan perbandingan model mengungguli skor rubrik dalam skala besar.** Tujuh LLM menilai menulis informatif kelas 3-6 secara berpasangan alih-alih terhadap skor rubrik absolut; skor bertemu dengan penilai peneliti (r = 0,59-0,73), rata-rata skor tiga gelombang mengklasifikasikan kemahiran ELA pada AUC = 0,82-0,86, dan model yang lebih mahal menambahkan sedikit validitas ([[llm-comparative-judgment-writing-screening-2026|Mercer & Reed, 2026]]).

Umpan balik kontingen atas upaya anak sendiri melakukan apa yang tidak dapat dilakukan panduan generik, dan keuntungan itu tumbuh ketika orang dewasa mengambil apa yang dinaikkan umpan balik.

## Literasi AI dan penggunaan chatbot oleh anak

- **Anak mempercayai chatbot berperilaku baik dengan cepat.** Enam puluh tiga anak berusia 6 hingga 14 tahun menggunakan chatbot terbatas topik di sekolah umum AS. Lima puluh dua persen umumnya mempercayai responsnya, 35% mempercayainya seperti guru atau teman, dan sekitar sepertiga akan mencurahkan rahasia kepadanya. Anak menguji kredibilitas dengan pertanyaan yang jawabannya sudah mereka ketahui ([[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed and Martin, 2025]]).

- **Pengetahuan AI tumbuh seiring usia; penilaian keselamatan tidak.** Di antara 71 anak berusia 10 hingga 16 tahun, pengetahuan AI dasar naik seiring usia, β = 0,17. Penilaian tentang betapa pentingnya keselamatan AI (M = 2,51) dan betapa amannya AI sekarang (M = 2,77) berkelompok di dekat titik tengah skala empat poin, tanpa efek usia. Seorang anak berusia 12 tahun bernalar bahwa "jika mereka teman baik, dia tidak terlalu mengintip" ([[children-ai-safety-misconceptions-2026|Leisten et al., 2026]]).

- **Mengajarkan tentang AI menghasilkan keuntungan [[self-report-measures|laporan diri]] yang besar.** Sebuah meta-analisis atas 16 studi yang mengajarkan AI itu sendiri memadukan 57 ukuran efek dari 3.837 siswa K-12 pada g = 0,892, dengan heterogenitas pada I² = 94,68%.

- **Skala laporan diri tervalidasi ada untuk tahun dasar atas.** Kuesioner [[self-assessment|Penilaian Diri]] Literasi AI 15 butir mencakup belajar tentang AI, cara AI bekerja, dan kehidupan dengan AI untuk kelas 4 hingga 6, dengan CFI = 0,994 dan alpha = 0,934. Penulisnya menyatakan bahwa ia mengukur kompetensi yang dipersepsikan, bukan yang didemonstrasikan ([[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan and Srikoon, 2025]]).

Literasi AI di sini bukan satu [[curriculum-design|kurikulum]] yang disederhanakan. Kerangka untuk anak berusia sembilan tahun dan untuk anak berusia tujuh belas tahun berbeda jenis: pembelajar lebih muda membutuhkan cerita, [[metaphors-and-analogies|analogi]], dan membuat, sementara yang lebih tua dapat mengkritik sistem dan mempertanggungjawabkan sebuah keputusan.

Tahun dasar membawa bukti paling sedikit dari pita mana pun: lima dari 118 studi yang ditinjau mencakup anak usia dini hingga dasar bawah, berbanding dua puluh tujuh di dasar atas, dan tidak satu pun dari sembilan instrumen tervalidasi mencatat proses bekerja dengan AI ([[guo-ai-literacy-developmental-paces-2026|Guo et al., 2026]]).

## Isi literasi AI, dan apa yang diukur studi-studi

Tinjauan 2025 atas 25 studi empiris dasar mengisi kandungan klaim itu: konstruk yang dipetakan memiliki empat untaian, dan diajarkan dalam proporsi sangat tidak merata. [[yim-ai-literacy-primary-schools-review-2025|Yim and Su (2025)]] menemukan literasi digital untuk berinteraksi dengan AI pada 19 dari 25 studi, pemikiran komputasional pada 10, etika AI pada 10, dan literasi data kritis hanya pada 5.

Unit pengodean karenanya menjangkau satu untaian dari empat. Untaian yang akan memungkinkan anak berusia sembilan tahun melihat bagaimana data pelatihan membentuk apa yang dikatakan pengelompok adalah yang paling sering dilewati oleh literatur. Yim dan Su membaca pola itu sebagai pembingkaian teknis yang mendorong implikasi sosial ke peran pendukung.

Pengajaran mengikuti logika konstruksionis, tetapi dengan agen alih-alih kertas. Agen muncul pada 15 dari 25 studi, perangkat berfokus perangkat lunak pada 8, dan aktivitas tanpa perangkat pada 3; Teachable Machine, Jibo, Cozmo, dan Alexa memungkinkan anak melatih model tanpa menulis kode. Dari 16 studi yang menyebut kerangka, 8 menggunakan konstruksionisme atau konstruktivisme dan 6 menggunakan model ARCS. Para peninjau mempertanyakan urutan umum yang mengajarkan pengodean berbasis aturan sebelum pembelajaran berbasis data, karena pembelajaran mesin meminta anak memilih contoh alih-alih menulis aturan.

Apa yang dihitung sebagai bukti lebih tipis daripada apa yang diajarkan. Survei muncul pada 19 dari 25 studi, sering sebagai butir sekali tulis tentang kesiapan atau niat, dan hanya 15 dari 25 yang melaporkan hasil belajar apa pun. Wawancara (11) dan [[rubrics|rubrik]] artefak (8) adalah tempat pemahaman konseptual muncul. Inilah basis di bawah skala [[self-assessment|penilaian diri]] tervalidasi di atas: instrumen baik untuk kompetensi yang dipersepsikan, dalam literatur yang jarang menguji kompetensi yang didemonstrasikan.

Peta sistematis penelitian sains dasar sampai pada masalah yang sama dari korpus berbeda. Di antara 103 publikasi terindeks Scopus dari 2023 hingga awal 2026, [[barokah-ai-elementary-science-review-2026|Barokah, Hermita and Putra (2026)]] menemukan hasil melebar ke wilayah afektif dan regulatif sementara hasil epistemik tetap tipis. Sedikit studi bertanya apakah anak dapat memisahkan observasi dari inferensi atau menilai batas klaim yang dihasilkan AI. Peringatan penilaian mereka khas pita ini: tugas kinerja dasar atas menghasilkan penjelasan sebagian, gambar, dan gestur, dan penilai yang menandai jawaban yang produktif secara perkembangan sebagai salah menghapus nilai formatifnya. Kontributor pada kedua literatur berkonsentrasi di Tiongkok, Amerika Serikat, dan Hong Kong, dan tinjauan dasar menambahkan kesenjangan gender, dengan anak laki-laki melaporkan keyakinan dan kesiapan lebih banyak (Dai et al., 2020, sebagaimana dilaporkan dalam Yim and Su).

## Keputusan desain yang penting pada jenjang ini

- **Terapkan pada tingkat kelas, bukan tingkat perangkat.** Layar bersama dengan guru mengetik prompt menahan keluaran di dalam tinjauan orang dewasa, dan alur kerja bermediasi guru dapat menjangkau siswa yang tidak pernah menyentuh alatnya. Desain tanpa perangkat Brasil adalah kasus paling jelas: kertas dan pena untuk anak, kamera dan server untuk guru.
- **Hitung tenaga verifikasi.** Guru dalam uji numerasi menghargai daftar latihan siap pakai tetapi menyebut memotret, menunggu, dan mengoreksi galat pengenalan sebagai biayanya. Beban kerja berasosiasi negatif dengan keuntungan, paling jelas untuk tuntutan mental, −2,569.
- **Biarkan momen perilaku tetap dimiliki orang dewasa.** Dalam 923 dialog berlandaskan kasus dari literatur pendidikan khusus, tutor terkuat dari 11 memenuhi intervensi terdokumentasi hanya pada 43,3% rencana jangka panjang, beralih ke penenangan di tempat kasus mensyaratkan memverifikasi pekerjaan terlebih dahulu ([[tutor-case-bench-challenging-behaviors-2026|Park et al., 2026]]).
- **Latih sebelum memperluas.** Hanya 19,2% dari 302 guru dasar Turki yang disurvei memiliki pelatihan AI apa pun, dan pelatihan serta frekuensi penggunaan adalah variabel yang paling konsisten berasosiasi dengan persepsi favorable. Kemauan (M = 3,98) jauh di depan pengalaman (M = 3,00) ([[cigerci-primary-teachers-perceptions-ai-mathematics-2026|Ciğerci and Uygun, 2026]]).
- **Pengamat AI adalah masukan bagi penilaian profesional, bukan evaluasi.** Di 12 video kelas dasar yang dinilai dengan kerangka TEACH Primary, delapan titik akhir LLM tidak sepakat dengan ahli tersertifikasi di luar kesepakatan eksak 55%, pengulangan bervariasi lebar, dan model yang andal sering kali paling tidak akurat, karena mereka memberi bobot lebih pada isyarat verbal eksplisit daripada [[self-regulated-learning|regulasi diri]] siswa yang berkelanjutan ([[melo-llm-classroom-observation-teach-2026|Melo et al., 2026]]).
- **Lindungi batas antara pengetahuan pribadi dan bersama.** Rancangan pelajaran generatif dapat tampak seperti praktik yang divalidasi kolektif sementara tidak membawa jaminan komunitas apa pun. Risikonya paling berat menimpa pemula, yang pengetahuan konten [[pedagogy|pedagogis]]nya masih terbentuk ([[webb-pck-genai-2026|Webb et al., 2026]]).
- **Putuskan di mana data berada sebelum memilih model.** [[llm|Model bahasa]] kecil di-host sekolah berukuran 1B hingga 13B parameter, hanya dapat dijangkau di jaringan sekolah dengan lalu lintas keluar dilarang, menukar kedalaman penalaran dengan privasi arsitektural. Ujiannya adalah apakah pemimpin dapat menjelaskan dan mengendalikan apa yang terjadi pada data anak ([[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar and Iqbal, 2026]]).
- **Perlakukan keterampilan, bukan akses, sebagai tuas [[equity-in-ai-education|keadilan]].** Di antara 4.497 siswa kelas 6 di Belanda, literasi digital alih-alih intensitas penggunaan AI memediasi hubungan antara latar belakang dan [[learning-gains|capaian]] ([[ai-divide-ses-personality-primary-education-2026|Wang et al., 2026]]).

## Koneksi

Pendidikan dasar berada di dalam [[k-12]] dan mewarisi masalah [[educational-policy-ai|kebijakan]] dan kapasitas gurunya, tetapi batasan perkembangannya adalah miliknya sendiri. Literatur [[early-childhood-elementary-ai-education|anak usia dini]] yang berdekatan mencakup prasekolah dan tahun-tahun sekolah pertama, di mana bermain dan [[scaffolding|perancah]] orang dewasa mendominasi. [[secondary-education|Pendidikan menengah]] dimulai sekitar usia sebelas tahun, di mana departemen mata pelajaran dan [[summative-assessment|ujian]] menggantikan kelas satu guru.

## Implikasi untuk Praktik

**Untuk guru**

- Tetapkan tujuan bahasa atau matematika terlebih dahulu, lalu pilih fungsi alat. Dukungan AI bekerja ketika ia masuk ke dalam tugas alih-alih menggantikannya.
- Jalankan latihan adaptif sebagai pos singkat yang tercatat dan periksa menit per anak, bukan adopsi per kelas.
- Tanya anak apa chatbot itu dan siapa yang dapat melihat apa yang mereka ketik sebelum membiarkan mereka menggunakannya.

**Untuk pemimpin sekolah**

- Biayakan tahun kedua dan ketiga keputusan hosting lokal apa pun: patching, pencadangan, dan teknisi yang memilikinya.
- Letakkan peninjau bernama pada setiap rancangan atau kumpulan komentar buatan AI yang beredar, dan jadwalkan waktu tinjauannya.
- Nilai alat membaca atau matematika pada ukuran terstandar dan proksimal sekaligus.

**Untuk peneliti**

- Laporkan dosis, pita kelas, dan dukungan implementasi bersama ukuran efek; sebagian besar studi dasar menghilangkan satu dari tiga.
- Pisahkan alat dari alur kerja orang dewasa dalam desain; efek pelatihan dan sistem tidak dapat dibedakan dalam uji yang menguji keduanya.
- Ukur proses, bukan hanya skor pascates. Log pertanyaan, catatan revisi, dan rubrik dialog menangkap apa yang tidak dapat ditangkap skala laporan diri.

## Miskonsepsi Umum

- **"Adaptif berarti lebih baik."** Adaptivitas menamai mekanisme, bukan hasil: tutor kelas dua yang menyesuaikan kesulitan tugas meninggalkan skor pascates yang secara statistik tidak dapat dibedakan dari urutan tetap, F(1, 124) = 0,32, p = 0,574.
- **"Keuntungan pada butir yang diajarkan program membuktikan pembelajaran."** Dalam uji bahasa Inggris dasar, keunggulan muncul pada kata yang dicakup intervensi dan menghilang pada kosakata terstandar dan pemahaman bacaan.
- **"Anak menjumpai chatbot dengan skeptisisme sehat."** Kepercayaan terbentuk cepat dalam studi di atas: mayoritas menerima jawaban sistem, dan lebih dari sepertiga memperlakukannya seperti guru atau teman.
- **"Anak kecil menerima versi lebih mudah dari silabus literasi AI yang sama."** Yang bergeser lintas pita adalah jenis tugasnya, bukan kesulitannya: cerita dan pembuatan di awal, kritik dan akuntabilitas di kemudian hari.
