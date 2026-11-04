---
title: "Pola Pedagogis"
created: "2026-09-30T16:20:00-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy, scaffolding]
assessment: [formative-assessment, peer-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, k 12]
confidence: high
connected_faqs: [designing-ai-into-learning]
connected_resources: [learning-design-wiki]
updated: "2026-11-04T02:10:52-05:00"
translation_of: "concepts/pedagogical-patterns"
source_updated: "2026-11-01T09:12:59-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pola Pedagogis** — *urutan* aktivitas yang telah diuji oleh riset dalam basis pengetahuan ini, dengan perhatian pada titik ketika [[generative-ai|AI generatif]] masuk ke dalam urutan itu dan titik ketika [[human-in-the-loop-ai|pertimbangan manusia]] harus tetap ada. Jika [[pedagogy]] mengatalogkan pendekatan ([[active-learning|pembelajaran aktif]], [[problem-based-learning|pembelajaran berbasis masalah]], [[collaborative-learning|pembelajaran kolaboratif]]) dan [[learning-design]] menjelaskan bagaimana sebuah mata kuliah dirancang, halaman ini mengatalogkan apa yang sebenarnya *dilakukan* siswa dan guru, dalam urutan apa, dan apa yang terjadi ketika hal itu dicoba. PAIRR — draf, tinjauan sejawat, tinjauan AI, refleksi, revisi — adalah contoh yang paling terdokumentasi, dan pola di baliknya berulang lintas disiplin: usaha lebih dulu, AI kemudian, pertimbangan manusia pada titik taruhannya.

## Pertanyaan untuk Dipertimbangkan

- Sebuah pola adalah *urutan*, bukan alat. Ambil satu tugas yang Anda ajarkan dan tuliskan urutan langkah yang dilakukan seorang siswa. Di titik mana dalam urutan itu AI akan membantu, dan di titik mana ia justru mengerjakan pekerjaan yang seharusnya dilakukan siswa?
- Beberapa pola di sini sengaja memberi AI peran yang *lemah* — petunjuk alih-alih jawaban, pertanyaan alih-alih koreksi. Mengapa tutor yang sengaja kurang membantu dapat menghasilkan pembelajaran yang lebih baik, dan apa implikasinya bagi alat AI yang dibeli institusi Anda?
- Pola dengan bukti terbaik di halaman ini ([[learning-by-teaching|belajar dengan mengajar]] AI) meminta siswa menjelaskan, dan pola itu meningkatkan kualitas penjelasan serta pertanyaan tetapi *bukan* daya ingat objektif. Jika Anda mengadopsinya, apa yang akan Anda ubah dalam cara Anda menilai?
- Ketika [[ai-feedback-quality|umpan balik AI]] lebih berkualitas daripada umpan balik guru, siswa tidak merevisi lebih banyak. Apa yang disiratkan hal ini tentang perbedaan antara menghasilkan umpan balik dan membuat siswa menggunakannya?
- Konteks mengubah jawabannya: sebagian pola diuji secara daring dan asinkron, sebagian lain tatap muka dengan laboratorium. Mana di antaranya yang dapat Anda jalankan di lingkungan Anda sendiri tanpa alat baru, dan mana yang memerlukan infrastruktur yang tidak Anda miliki?
- Hampir setiap pola di sini menempatkan manusia pada titik pertimbangan — menilai, memverifikasi, atau menafsirkan. Apakah itu pilihan desain, keharusan berbasis bukti, atau keterbatasan dari apa yang telah diuji sejauh ini?

## Pendahuluan

Pedagogi menjawab *bagaimana seharusnya kita mengajar*; halaman ini menjawab pertanyaan yang lebih sempit dan lebih operasional: **dalam urutan apa langkah-langkah itu harus terjadi, dan di mana AI berada dalam urutan tersebut?** Pembedaan ini penting karena alat yang sama menghasilkan hasil yang berlawanan bergantung pada posisinya dalam suatu urutan. Asisten AI generatif yang ditempatkan sebelum siswa mencoba suatu masalah secara konsisten menurunkan kinerja tanpa bantuan di kemudian hari; ditempatkan setelah percobaan, dengan petunjuk alih-alih jawaban, kelas sistem yang sama menghilangkan kerugian itu.

Setiap pola di bawah ini dilaporkan dengan status bukti, karena cakupan basis pengetahuan ini tidak merata dan perbedaannya penting bagi siapa pun yang memutuskan apa yang akan diadopsi:

- **Teruji** — setidaknya satu artikel melaporkan uji terkontrol atau komparatif.
- **Campuran** — teruji, tetapi tanpa kontrol, dengan hasil yang bertentangan, atau dengan variabel yang diuji tercampur dengan hal lain.
- **Usulan desain** — gagasan hanya muncul sebagai usulan atau kerangka, tanpa uji yang dilaporkan. Semua ini dikumpulkan secara terpisah di akhir halaman, dalam *Usulan desain (belum diuji)*, dan bukan bukti.

Pola-pola dikelompokkan menurut fungsi yang mereka layani dalam sebuah pelajaran: menempatkan usaha sebelum bantuan, memasangkan umpan balik AI dengan umpan balik manusia, memverifikasi pemahaman alih-alih keluaran, menjadikan siswa sebagai pengajar, menstrukturkan kolaborasi, dan menghadapi [[misconceptions|miskonsepsi]] tertentu. Konteks (daring, tatap muka, campuran) dan disiplin dilaporkan pada masing-masing pola, dan diringkas di akhir.

## Pola yang menempatkan usaha sebelum bantuan

Pola-pola ini berbagi klaim struktural: siswa harus berkomitmen pada suatu percobaan sebelum AI berkontribusi. Ini adalah aturan desain yang paling konsisten didukung dalam basis pengetahuan ini.

### Mengambil atau mencoba sebelum AI menjawab

**Bukti: teruji.** Urutannya adalah: mencoba dari ingatan, menerima instruksi atau contoh, berlatih dalam sesi berjeda, berkonsultasi dengan AI hanya setelah berkomitmen pada percobaan, menerima umpan balik yang bergantung pada respons dan menyelidiki miskonsepsi, lalu maju hanya setelah respons menunjukkan keterlibatan yang memadai.

Kondisi pengambilan berjeda adaptif menghasilkan skor posttest tertinggi (M = 78.19) dan secara signifikan mengungguli belajar dengan AI yang diarahkan siswa (M = 67.28, d = 0.92, p = .003) pada 89 siswa dalam mata kuliah statistika campuran, sementara jeda tetap secara statistik tidak dapat dibedakan dari adaptif ([[adaptive-pretesting-retention|Akgun & Toker, 2026]]). Kasus kontrasnya menentukan: dalam [[rct|uji acak]] terhadap 120 siswa, kelompok yang belajar *dengan* ChatGPT tanpa batasan mengingat lebih sedikit pada tes kejutan 45 hari kemudian — 57.5% benar dibandingkan 68.5% pada pembelajar tradisional, t(83) = −3.19, p = .002, d = 0.68 — dan juga belajar sekitar 45% lebih sedikit, dengan kerugian itu tetap bertahan setelah kovariat waktu belajar dimasukkan ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui, 2025]]). Eksperimen lapangan acak terpreregistrasi dalam program MBA daring menemukan bahwa keuntungan mengikuti *minggu yang diselesaikan* alih-alih menit paparan (+2.00 poin per minggu tutoring tambahan yang diselesaikan, p = .018), yang terbaca sebagai [[retrieval-spacing-interleaving|latihan berjeda]] lebih penting daripada total waktu ([[ai-tutor-modality-randomized-field-experiment-2026|Yang et al., 2026]]).

Kasus kausal bagi aturan ini adalah eksperimen lapangan di sekitar 50 kelas matematika SMA Turki dengan hampir 1,000 siswa ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]). GPT-4 tanpa batasan menaikkan kinerja latihan terbantu sebesar 48% dan memangkas nilai ujian tanpa bantuan sebesar 17% dibandingkan kontrol, sementara GPT-4 dengan pagar pengaman menaikkan latihan sebesar 127% dan membiarkan ujian pada dasarnya tidak berubah. Pagar pengamannya hanya dua: petunjuk alih-alih jawaban, dan konten spesifik masalah yang ditulis guru (solusi benar, kesalahan umum) yang dimasukkan ke dalam prompt agar petunjuknya akurat. Data keterlibatan menempatkan kerugian pada penyalinan, sebab siswa tanpa pagar pengaman sebagian besar meminta jawaban, dan siswa di kedua lengan AI salah menilai pembelajaran mereka sendiri.

### Kegagalan produktif: mencoba sebelum instruksi

**Bukti: campuran, dan lebih tipis daripada reputasinya.** Siswa mencoba masalah yang menyasar konsep yang belum mereka pelajari, tutor menahan solusinya dan memancing banyak percobaan, bantuan datang hanya ketika benar-benar diperlukan, lalu konsolidasi menyusul dengan perbandingan dan instruksi langsung.

Satu-satunya studi lapangan yang menguji urutan penuh dengan tutor terarah melibatkan 17 siswa SMA di Singapura: kondisi terarah mencapai skor kegagalan produktif yang lebih tinggi, signifikan untuk konsistensi masalah (p = .046), dan siswa menghasilkan rata-rata 2.6 representasi per sesi (p = .05), tetapi **tidak ada hasil belajar yang diukur** ([[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al., 2025]]). Dukungan terkuat bersifat tidak langsung dan berasal dari eksperimen acak within-subjects dengan 26 siswa, di mana [[scaffolding]] dengan jawaban langsung berkinerja secara signifikan *lebih buruk* daripada peran sejawat, asisten pengajar (TA) dan tutor pada abstraksi model (β = −0.692, p = .015; β = −1.039, p < .001; β = −0.769, p = .005) meskipun siswa *lebih menyukai* tutor direktif — preferensi berlawanan dengan kompetensi ([[preferred-scaffolding-ai-mathematical-modeling|Zhu et al., 2026]]).

### Analisis kesalahan dan contoh keliru

**Bukti: campuran.** Siswa mendiagnosis kesalahan dalam sebuah artefak — diagram buatan AI yang melanggar integritas referensial, kueri yang menggugurkan sebuah join, potongan kode [[llm]] — menerima petunjuk yang memaksa mereka menyimpulkan perbaikannya alih-alih diberi koreksinya, memperbaikinya, dan merenungkan bagian mana dari keluaran itu yang tidak dapat dipercaya.

Studi pre-post terhadap 13 siswa dalam mata kuliah basis data daring naik dari 4.25 menjadi 6.83 dari 7 (t(12) ≈ 5.10, p < .001, d = 1.49) dengan menggunakan siklus kritik-dan-penyempurnaan mingguan yang dibangun di atas kasus kegagalan AI yang sengaja dirancang, tetapi tanpa kelompok kontrol keuntungan tersebut tidak dapat dipisahkan dari [[curriculum-design|kurikulum]] atau pengajarnya ([[pedagogy-ai-mistakes|Hosseini, 2026]]). Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] atas 72 studi pendidikan komputasi melaporkan bahwa analisis kesalahan adalah *kompetensi yang berbeda*: siswa berkinerja secara signifikan lebih buruk dalam mengoreksi kode buatan LLM daripada dalam tugas ujian pemrograman tradisional ([[kumar-genai-computing-education-systematic-review-2026|Kumar et al., 2026]]). Tidak ada artikel dalam basis pengetahuan ini yang melaporkan uji terkontrol atas instruksi contoh keliru sebagai demikian.

### Contoh yang dikerjakan dengan penjelasan diri

**Bukti: campuran — kedua bagiannya menyimpang.** Sebuah contoh yang dikerjakan disajikan dengan pembenaran yang hilang untuk dilengkapi, atau dengan kesalahan untuk ditemukan; siswa melengkapi atau memperbaikinya, menjelaskan penalarannya, lalu mencoba masalah berikutnya.

Penugasan adaptif atas contoh terpandu dan contoh berkutu mengalahkan penugasan tipe masalah secara acak dalam studi kelas terhadap 113 siswa (posttest M = 72.3 dan 72.5 berbanding 65.7 pada kontrol, A = .58, p = .005 dan p = .002), dan varian [[knowledge-tracing]] mempersempit kesenjangan capaian sebesar 77.1% bagi siswa dengan [[prior-knowledge]] rendah (β = 9.4, p = .001) ([[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al., 2026]]). Namun *menambahkan* langkah penjelasan diri ke umpan balik AI yang terelaborasi kalah pada setiap ukuran dalam eksperimen terpreregistrasi dengan 302 partisipan: langkah itu menggandakan waktu umpan balik (4.1 vs 2.1 menit, p < .001), memangkas jumlah masalah yang diselesaikan sebesar 40% (2.0 vs 3.4, p < .001), tidak menghasilkan keuntungan per episode (OR = 1.03, p = .486), dan menurunkan penguasaan di akhir sesi (65% vs 79%, d = .41, p < .001) ([[structured-reflection-ai-explanatory-feedback-2026|Asher et al., 2025]]).

Berapa banyak contoh yang diberikan sebelum latihan itu sendiri bergantung pada isi, yang dibiarkan terbuka oleh perumusan bagian ini tentang "contoh yang dikerjakan lalu masalah". Dalam eksperimen 2×2 dengan 95 partisipan pada materi luas geometri, pelatihan yang hanya berisi latihan menghasilkan keuntungan lebih besar untuk fakta verbatim sementara pergantian contoh dengan latihan menghasilkan keuntungan lebih besar untuk keterampilan yang dapat digeneralisasi (β = 0.41, p = .038, d = 0.38) ([[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger dan Carvalho, 2025]]). Sebuah urutan tidak dapat dinilai sebagai contoh yang dikerjakan versus latihan secara abstrak, karena campuran yang tepat mengikuti apakah sasarannya sebuah fakta atau sebuah keterampilan.

## Pola yang memasangkan umpan balik AI dengan umpan balik manusia

Temuan yang paling banyak direplikasi dalam basis pengetahuan ini tentang umpan balik AI adalah bahwa ia bekerja lebih baik bila *dikombinasikan* dengan umpan balik manusia daripada sendirian — dan bahwa kualitasnya bukanlah yang menentukan apakah siswa menggunakannya.

### PAIRR: tinjauan sejawat dan AI dengan refleksi

**Bukti: campuran (banyak diterapkan, tidak terkontrol).** Siswa membaca dan merenungkan cara kerja AI dan umpan balik, menyusun draf, memberi dan menerima tinjauan sejawat, meminta AI memberikan umpan balik berbasis kriteria atas draf yang sama, membandingkan keduanya secara kritis, menulis rencana revisi, merevisi, dan merenungkan umpan balik mana yang mengubah apa.

Studi terbesar tentang penggunaan umpan balik AI oleh mahasiswa hingga saat ini mengikuti 654 mahasiswa di sepuluh mata kuliah menulis dan tiga mata kuliah [[stem-education|STEM]] padat menulis: 58% lebih memilih gabungan ChatGPT dan [[peer-assessment|umpan balik sejawat]], 36% hanya sejawat, dan hanya 6% hanya AI; 75% menilai keduanya serupa dan saling memperkuat; umpan balik AI disebut "terlalu umum" oleh 31% sementara umpan balik sejawat lebih spesifik bagi 28%; dan hanya 5.3% menunjukkan kepercayaan berlebih pada umpan balik AI ([[pairr-ai-peer-review-2025|Sperber et al., 2025]]). Model ini juga dijalankan dalam mata kuliah menulis bisnis tingkat atas dengan 34 mahasiswa, di mana sekitar seperempat refleksi yang dikodekan menyatakan skeptisisme atau mencatat ketidakakuratan dalam umpan balik AI ([[gift-ai-pairr-business-writing-2025|MacArthur et al., 2025]]). Keduanya melaporkan data persepsi; keduanya tidak memiliki kondisi kontrol, itulah sebabnya pola ini *campuran* dan bukan *teruji*.

### Umpan balik sejawat dan AI yang digabungkan

**Bukti: teruji.** Bukti komparatifnya datang dari luar program PAIRR. Sebuah kuasi-eksperimen dengan 122 siswa EFL Tiongkok menemukan bahwa umpan balik terintegrasi AI-plus-sejawat menaikkan [[student-engagement|keterlibatan]] behavioral, afektif dan kognitif dibandingkan umpan balik sejawat saja (semua p < .001; partial η² = 0.28, 0.28, 0.32) dan memperbaiki tulisan pada keempat dimensi IELTS (F(1,119) = 42.68, p < .001, partial η² = 0.26), terbesar pada pencapaian tugas (d = 1.41) — tanpa post-test tertunda, sehingga daya tahannya tidak terukur ([[ai-peer-feedback-l2-writing-engagement-2026|Liu, 2026]]). Dalam studi acak terhadap 45 calon guru dalam 12 kelompok, umpan balik sejawat berbantuan GenAI mengalahkan umpan balik sejawat biasa pada argumentasi, dan varian *terpandu prompt* berkinerja terbaik pada elemen lanjut seperti data sanggahan dan penanganan pandangan lawan ([[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al., 2026]]).

### Kritik AI lalu revisi

**Bukti: teruji — dengan satu hasil nol yang penting.** Menyusun draf, meminta umpan balik AI berbasis rubrik, menilai umpan balik itu secara kritis terhadap rubrik dan sumbernya, menulis rencana revisi, merevisi, dan merenungkan.

Eksperimen faktorial 2 × 2 terkontrol dengan 120 mahasiswa jurusan bahasa Inggris menemukan keuntungan kualitas tulisan tertinggi pada kelompok yang dilatih dalam penyaringan sekaligus penilaian (M = 7.92), berbanding 6.10, 4.56 dan 3.10 untuk kondisi lain, dengan revisi mendalam naik dari 28% menjadi 48% dan keunggulannya bertahan pada topik baru serta setelah dukungan AI dicabut ([[rethinking-ai-writing-feedback-literacy|Dai, 2026]]). Hasil nol itulah bagian yang memberi pelajaran: dalam eksperimen acak tiga kelompok dengan 70 siswa, umpan balik AI dengan prompt chain-of-thought secara signifikan *lebih berkualitas* daripada umpan balik AI zero-shot (p = .01) maupun umpan balik guru (p = .008), namun keunggulan kualitas ini **tidak berubah menjadi keuntungan revisi yang lebih besar** — umpan balik guru menghasilkan perbaikan yang sebanding ([[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al., 2026]]).

### Tinjauan manusia dalam lingkar atas keluaran AI

**Bukti: campuran — langkah tinjauan jarang menjadi variabel yang diuji.** AI menghasilkan draf keluaran, agen verifikator otomatis memeriksanya untuk realisme, keterbacaan atau [[hallucination-risk|halusinasi]], pemeriksaan yang gagal kembali ke lingkar untuk disempurnakan, dan guru meninjau, menyunting, serta menerima atau membuang sebelum apa pun sampai kepada siswa.

Lingkar empat agen dengan 8 guru menghasilkan 212 masalah, 166 di antaranya diterima apa adanya, dan pemeriksaan realisme bekerja sesuai rancangan (10 masalah realisme ditandai, 20 suntingan kuantitas atau satuan, tidak ada kesalahan matematika yang ditemukan pada masalah akhir) — tetapi kesesuaian minat adalah titik lemahnya, dengan siswa menolak topik tersebut pada 160 dari 422 respons ([[walkington-teachers-multi-agent-personalized-problem-generation-2026|Walkington et al., 2026]]). Alat umpan balik dengan pendidik dalam lingkar yang dinilai oleh 30 guru tidak pernah turun di bawah 4.1/5 pada sembilan butir dan memangkas waktu median per tugas dari 10–30 menit menjadi di bawah 5, tetapi para penulis mengakui tidak ada evaluasi siswa, sehingga tidak ada klaim pembelajaran yang didukung ([[zhao-learnlens-feedback-educators-loop|Zhao et al., 2025]]). Eksperimen red-team membuat taruhannya konkret: 2 dari 5 injeksi prompt mengubah nilai tanpa terdeteksi, pada 100% (9/9) dan 94% (17/18), sehingga guru tetap menjadi satu-satunya pemeriksa nyata atas keluaran [[automated-assessment|penilaian otomatis]] ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]).

## Pola yang memverifikasi pemahaman alih-alih keluaran

Karena AI dapat menghasilkan artefak yang cakap, pola-pola ini menggeser penilaian ke bukti yang tidak dapat disediakan artefak itu sendiri.

### Verifikasi lisan dan viva

**Bukti: teruji sebagai format, tetapi hasilnya tentang skor dan afek, bukan tentang belajar.** Sebuah tugas pemrograman dikumpulkan dengan AI diizinkan, lalu diikuti dalam 48 jam oleh tinjauan kode lisan wajib selama 15 menit di mana siswa menjelaskan program dan menjalankan uji integrasi secara langsung, dengan penilaian 70% pada tinjauan dan 30% pada rubrik.

Kuasi-eksperimen tiga semester dengan 96 siswa tidak menemukan perubahan yang signifikan secara statistik pada kinerja ujian meskipun ada kebijakan baru (peningkatan ~2% pada satu ujian), sementara proporsi karakter yang ditempel terhadap total naik dari 61.0% menjadi 68.1% (p < 0.0001); 90% siswa menyatakan tinjauan itu memotivasi mereka untuk lebih memahami kode mereka dan 65% menyatakan tinjauan membantu menghindari ketergantungan berlebih ([[code-review-genai-cs1|Fowles et al., 2026]]). Jawaban lisan asinkron yang direkam menghasilkan skor secara signifikan lebih tinggi daripada pilihan ganda tatap muka (median ujian tengah semester Md = 92.5 vs 70, p < .001; ujian akhir Md = 94.2 vs 86.4, p = .002) dengan korelasi lintas format yang hanya moderat (τ = .44 dan .25) — dan para penulis memperingatkan bahwa ini adalah *perbedaan skor antformat, bukan bukti keuntungan belajar*, dengan perilaku menyontek tidak terukur ([[asynchronous-oral-assessment-2026|Pentland et al., 2026]]). Arahnya tidak seragam positif: siswa lebih tenang dalam viva berbasis obrolan (M = 6.50 vs 5.86, p = .028) tetapi menilai viva tatap muka secara signifikan lebih baik untuk memahami pekerjaan mereka sendiri (p = .004) ([[aivaluate-anxiety-assessment-2026|Yusuf et al., 2026]]).

### Titik pemeriksaan bertahap dan bukti proses

**Bukti: campuran — tidak ada uji terkontrol atas mekanismenya sendiri.** Tugas kuliah berjalan sebagai modul bertahap, masing-masing berakhir pada titik pemeriksaan yang memverifikasi keluaran *dan* pendekatannya — hasil benar yang dicapai dengan hardcoding ditolak — dengan pemeriksaan pra-kemajuan yang mengembalikan pembelajar ke langkah yang dilewati.

Studi kasus terhadap 5 mahasiswa pascasarjana dalam mata kuliah informasi kuantum mandiri mencatat 75 interaksi dan memastikan titik pemeriksaan ganda keluaran-dan-pendekatan berfungsi sesuai rancangan, tanpa kelompok kontrol ([[quantum-education-its|Elhaimeur & Chrisochoides, 2026]]). Sebuah pilot dengan 27 partisipan yang menggunakan titik pemeriksaan stop-block melaporkan keuntungan [[self-efficacy]] yang signifikan pada kesepuluh area keterampilan yang dinilai (p < 0.001) dalam desain pre-post within-subjects di mana keuntungan tidak dapat dipisahkan dari efek latihan ([[agentic-education-coding|Naboulsi, 2026]]). Kuasi-eksperimen tiga tahun dengan 248 mahasiswa [[engineering-education|teknik biomedis]] menemukan tingkat A yang lebih tinggi setelah menambahkan pembelajaran berbasis masalah empat modul dengan tonggak dan rubrik (66.4% vs 39.1%, Δ = +27.3 poin, p = 0.042), bertahan setelah tahun yang terdampak pandemi dikeluarkan, tetapi perbandingannya bersifat historis dan tidak teracak ([[pbl-biomedical-engineering-genai-2026|Nnamdi et al., 2026]]).

## Pola yang menjadikan pembelajar sebagai pengajar

### Belajar dengan mengajar tutee AI

**Bukti: teruji, dan pola dengan bukti terbaik di halaman ini.** Siswa mempelajari konten, lalu menjelaskannya kepada AI yang diarahkan untuk mempertahankan posisi pemula yang tidak pernah mengungkap penjelasan sasarannya; AI meminta penjelasan, contoh dan penalaran verifikasi, diurutkan dari tingkat rendah ke tinggi, dan bertahan sampai penjelasan itu memuaskan.

Kuasi-eksperimen dengan 68 calon guru menemukan bahwa menjelaskan kepada pembelajar pemula GAI mendapat skor lebih tinggi dalam mendefinisikan flipped classroom (M = 4.18 vs 3.29, p < 0.001, r = 0.474) dan aktivitasnya (M = 4.91 vs 3.06, p < 0.001, r = 0.642), menghasilkan pertanyaan yang lebih banyak dan lebih berkualitas (keduanya p < 0.001) — tetapi menunjukkan **tidak ada perbedaan antarkelompok pada soal objektif** (M = 23.18 vs 21.57, p = 0.416) ([[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al., 2026]]). Eksperimen laboratorium acak dengan 41 siswa menemukan skor tes pengetahuan yang lebih tinggi (disesuaikan 11.86 vs 10.53, F = 35.54, η² = 0.74) dan kode yang lebih jelas serta lebih mudah dibaca, tetapi **tidak ada perbedaan pada kebenaran kode** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al., 2024]]). Penerapan selama 11 minggu pada 546 siswa menemukan bahwa setiap tambahan tindakan belajar mendalam berkaitan dengan penurunan 2.7% pada perkiraan jumlah percobaan kuis (IRR 0.973, p < .001), dengan perbandingan yang dikacaukan oleh waktu pengerjaan dan meningkatnya penghindaran di akhir semester hingga 30–35% penggunaan ulang konten eksternal ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al., 2026]]). Bentuknya konsisten: keuntungan pada penjelasan dan kerja generatif, bukan pada daya ingat objektif.

## Pola yang menstrukturkan kolaborasi

### Peran terskenario dengan satu AI bersama

**Bukti: teruji, tetapi dalam lingkungan terkontrol atau tidak terkontrol alih-alih ruang kelas biasa.** Dua pembelajar berbagi satu AI dan diberi peran eksplisit dengan aturan rotasi; AI dikonfigurasi untuk mengambil peran sesuai kebutuhan dan keluarannya ditujukan ke seluruh kelompok. Dalam varian pair-programming, AI bersama memodelkan atensi dan usaha bersama pasangan, memperkirakan keruntuhan hingga 30 detik ke depan, dan meningkatkan scaffolding secara bertingkat dari tidak melakukan apa pun hingga petunjuk direktif.

Eksperimen within-subjects dengan 26 pasangan menemukan bahwa kondisi umpan balik mencapai keberhasilan debugging yang lebih tinggi (t[49.96] = −13.51, p < .0001) dan selesai lebih cepat (t[44.70] = 4.39, p < .0001), meskipun memerlukan perangkat eye-tracking ganda dan pupilometri serta tidak menguji transfer ke kerja berpasangan tanpa pengawasan ([[golrang-propact-pair-programming-2026|Golrang et al., 2026]]). Kuasi-eksperimen dengan 58 mahasiswa pascasarjana dalam 16 kelompok menemukan bahwa desain peran menaikkan skor isi peta pikiran dari 3.65 menjadi 4.59 pada skala SOLO 1–5 (z = 3.771, p < 0.001) sementara jumlah simpul dan cabang tetap datar — tetapi tanpa kelompok kontrol, efek latihan tidak dapat disingkirkan ([[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al., 2026]]).

### Diskusi berbantuan AI

**Bukti: campuran — satu-satunya penerapan langsung berupa deskripsi kasus.** Siswa menganalisis sebuah skenario dan menjawab pertanyaan terpandu secara mandiri, meminta ChatGPT dengan prompt terstandardisasi atas pertanyaan yang sama, mengevaluasi akurasi respons AI terhadap jawaban mereka sendiri, menyempurnakan jawaban mereka, dan menutup dengan diskusi seluruh kelas.

Aktivitas ekonomi ini sengaja memanfaatkan kesalahan AI — ChatGPT menyebut perilaku yang digambarkan dalam lagu itu sebagai permintaan "perfectly elastic" padahal jawaban yang benar adalah inelastis — sehingga validasi keluaran AI menjadi inti diskusinya ([[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]). Laporan itu menyajikan kesan pengajar, bukan hasil yang terukur. Sebuah urutan diskusi kolaboratif yang teruji dengan 67 mahasiswa pendidikan guru menemukan kelompok eksperimen mengungguli kontrol ceramah (M = 51.45 vs 43.89, p = 0.001, g = 0.839) dengan ko-regulasi yang meningkat (p = 0.043, g = 0.512) — tetapi AI digunakan untuk *merancang* teknik itu, bukan untuk memediasi diskusinya ([[ccct-cooperative-learning-technique|Tutal, 2026]]).

## Pola yang menghadapi miskonsepsi tertentu

### Refutasi dan perubahan konseptual

**Bukti: teruji — dengan hasil yang bertentangan secara langsung.** Elisitasi keyakinan spesifik pembelajar, sajikan [[refutation-text|teks refutasi]] atau dialog AI yang dipersonalisasi yang menghadapinya, libatkan diri dengan kontra-bukti dan penjelasan yang benar, nyatakan kembali konsepsi yang benar, lalu uji ulang setelah jeda.

Eksperimen terpreregistrasi dengan 375 orang dewasa menemukan dialog AI personal tentang miskonsepsi menghasilkan penurunan keyakinan segera yang secara signifikan lebih besar daripada refutasi bergaya buku teks maupun dialog AI netral, bertahan pada 10 hari tetapi menyatu dengan refutasi buku teks pada 2 bulan ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen, 2026]]). Kuasi-eksperimen Solomon empat kelompok dengan 413 siswa kelas sepuluh menemukan hal yang *sebaliknya*: teks perubahan konseptual yang ditulis pakar dan yang dihasilkan AI keduanya secara signifikan lebih efektif daripada dialog ChatGPT interaktif, yang tidak menunjukkan keunggulan signifikan atas kontrol, dan keuntungannya hampir seluruhnya terbatas pada siswa berprestasi tinggi ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdogan, 2025]]). Makalah kedua menandai konflik itu secara eksplisit dan mengaitkannya dengan [[prompt-engineering|desain prompt]] dan domain. Teks refutasi itu sendiri mengalahkan kontrol pada keduanya.

## Konteks dan disiplin

Pola menentukan apa yang dituntut konteks, dan beberapa pola hanya diuji dalam satu lingkungan. Estimasi gabungan membuat ketergantungan itu terukur. Dalam 35 studi eksperimental dan kuasi-eksperimental serta 175 ukuran efek, efek gabungan AI generatif terhadap kinerja akademik sarjana adalah g = 0.46, dan model pengajarannya memoderasinya (Q = 14.63, p = 0.001). Flipped classroom mencapai g = 1.96 dari 7 ukuran efek, ruang kelas tradisional g = 0.46, dan belajar mandiri g = 0.26 ([[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026|Jing et al., 2026]]). Durasi intervensi juga memoderasinya, dengan efek kinerja akademik turun dari g = 5.07 pada 0 sampai 4 minggu menjadi g = 0.01 di luar 12 minggu. Para penulis memperlakukan estimasi durasi pendek yang sangat besar itu sebagai deskriptif dan bukan dapat digeneralisasi, sehingga ukuran efek untuk "AI dalam pengajaran" adalah klaim tentang suatu desain, dan pola-pola di sini adalah desain-desain itu.

- **Daring dan asinkron.** Pengambilan dan jeda, varian Sokratik, contoh yang dikerjakan dengan penjelasan diri, penggunaan terpandu prompt, [[oral-assessment|penilaian lisan]] asinkron, dan penerapan belajar dengan mengajar. Lingkungan asinkron menjadikan *pengurutan* menanggung beban, karena sistem tidak dapat melihat apakah siswa mencoba lebih dulu.
- **Tatap muka dan campuran.** [[productive-failure|Kegagalan produktif]], analisis kesalahan, varian flipped, tinjauan kode lisan, kolaborasi terskenario, dan studi perubahan konseptual. Waktu kelas sering dialokasikan ulang alih-alih digantikan — dalam pola tinjauan lisan, ceramah dipindahkan ke video agar waktu kelas dapat memuat wawancara.
- **Disiplin yang terwakili dalam bukti teruji.** [[writing-education|Menulis]] dan [[language-learning|pembelajaran bahasa]] (PAIRR, umpan balik sejawat dan AI gabungan, kritik AI lalu revisi), [[math-education|matematika]] (pengambilan dan jeda, kegagalan produktif, contoh yang dikerjakan, analisis kesalahan), [[cs-education|ilmu komputer]] (asisten Sokratik, analisis kesalahan, tinjauan kode lisan, belajar dengan mengajar, kerja berpasangan terskenario), [[medical-education|kedokteran]] (scaffolding Sokratik dalam wawancara klinis), [[teacher-education|pendidikan guru]] (argumentasi terskenario, belajar dengan mengajar), [[business-education|bisnis]] (tutoring MBA flipped), serta lingkungan [[physics-education|fisika]], [[science-education|sains]] dan [[vocational-education|vokasi]] untuk studi perubahan konseptual dan penilaian lisan.

## Apa yang belum didukung bukti

Dinyatakan terus terang, karena inilah temuan yang paling mungkin diam-diam dihilangkan:

- **Umpan balik AI yang lebih baik tidak menghasilkan lebih banyak revisi.** Umpan balik chain-of-thought berkualitas lebih tinggi mengalahkan umpan balik guru dalam hal kualitas dan tidak menghasilkan keuntungan revisi apa pun (Farrokhnia et al., 2026).
- **[[socratic-method|Pertanyaan Sokratik]] tidak otomatis lebih baik.** Uji acak terhadap 132 siswa menemukan asisten Sokratik dengan konteks penuh dinilai secara signifikan *lebih buruk* dalam mendukung penyelesaian tugas dibandingkan semua konfigurasi lain (peringkat rata-rata 48.63, μ = 3.53, berbanding 4.27, 4.16 dan 4.12; χ²(3) = 12.14, p = .007), dengan penggunaan LLM eksternal terbanyak (23%) dan respons pemahaman penuh paling sedikit (48% vs 67%) ([[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al., 2026]]) — sementara sebuah RCT medis menemukan sistem [[agentic-ai|multi-agen]] yang memuat tutor Sokratik mengalahkan kontrolnya pada skor ujian dan komunikasi ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]).
- **Siswa lebih menyukai peran yang kurang efektif.** Tutoring direktif lebih disukai sementara scaffolding dengan jawaban langsung menekan abstraksi model (Zhu et al., 2026).
- **Format verifikasi mengubah skor tanpa menunjukkan belajar.** Format lisan menaikkan skor dan mengurangi [[anxiety-and-stress|kecemasan]] sementara satu studi menemukan format tatap muka lebih baik untuk pemahaman, dan tidak ada studi yang mengukur kecurangan.
- **Tidak ada uji terkontrol yang mengisolasi tinjauan manusia atas keluaran AI**, dan mekanisme titik pemeriksaan belum pernah diuji sebagai variabel yang dimanipulasi.
- **Kegagalan produktif dan analisis kesalahan bersandar pada studi kecil tanpa kontrol** (n = 17 dan n = 13) yang mengukur kepatuhan strategi atau [[self-report-measures|laporan diri]] alih-alih hasil belajar.

## Usulan desain (belum diuji)

Pola-pola di bawah ini berasal dari panduan fakultas yang disediakan pemelihara basis pengetahuan (*AI-Ready Course Design*, September 2026). Panduan itu menyatakan secara eksplisit bahwa contoh-contohnya adalah **usulan desain, bukan intervensi teruji**, dan tidak ada artikel dalam basis pengetahuan ini yang mengujinya. Semua dicatat di sini sebagai gagasan desain yang layak dicoba dan dievaluasi, dan tidak boleh dibaca sebagai bukti.

- **Jejak argumen + revisi** (komposisi, humaniora). Ganti pengumpulan yang hanya berupa esai dengan tesis awal, dua kutipan sumber beranotasi, esai revisi dan catatan keputusan 150 kata; izinkan kritik AI setelah draf pertama. Nilai hubungan klaim–bukti dan satu saran yang diterima atau ditolak dengan pembenaran terhadap sumbernya.
- **Data + klaim bernalar** (sains, mata kuliah laboratorium). Ganti laporan laboratorium yang rapi dengan observasi mentah, grafik, catatan ketidakpastian dan penjelasan yang menghubungkan hasil dengan klaim; AI boleh mengkritik tafsiran yang diberikan, dan siswa memverifikasi kritik itu terhadap data mereka.
- **Percobaan + analisis kesalahan** (prakalkulus, kalkulus). Ganti pekerjaan rumah yang hanya berisi jawaban dengan percobaan awal, analisis solusi contoh yang cacat, dan penjelasan yang diperbaiki; petunjuk hanya diizinkan setelah percobaan. Ini adalah bentuk desain dari pola analisis kesalahan di atas, dan ia mewarisi basis bukti pola itu yang lemah.
- **Posisi + tantangan + pertimbangan ulang** (psikologi, sosiologi). Ganti "posting sekali, balas dua kali" dengan klaim berbasis kasus yang menggunakan konsep mata kuliah; seorang sejawat memberi kontracontoh dan penulisnya merevisi atau membela dengan bukti.
- **Proyek + pemeriksaan tertaut** (bisnis, profesi kesehatan). Pasangkan rekomendasi yang mengizinkan AI untuk organisasi fiktif atau kasus pasien dengan penjelasan singkat atas dua keputusan kunci dan respons terhadap kendala yang berubah; terbitkan hubungan penilaian antara kedua komponen itu.
- **Rencana + coba + adaptasi** (sukses kuliah). Ganti refleksi manajemen waktu yang generik dengan rencana belajar satu minggu, catatan singkat percobaannya, dan revisi yang terkait dengan apa yang terjadi; AI boleh menyarankan opsi penjadwalan setelah siswa mengidentifikasi kendalanya.

Peringatan dari panduan itu sendiri berlaku: video rekaman, refleksi dan log dapat pula berbantuan AI, sehingga dalam mata kuliah yang sepenuhnya asinkron sebuah rekaman tidak boleh diperlakukan sebagai verifikasi penguasaan mandiri. Dua perumusannya — kembaran penilaian dan penilaian lisan asinkron sebagai penangkal kecurangan — masih berupa kerangka yang menunggu validasi; studi penilaian lisan asinkron yang dikutip di atas mengukur skor format dan sama sekali tidak mengukur kecurangan.

## Miskonsepsi Umum

- **"Latihan apa pun yang disediakan AI adalah latihan."** Kondisi pengambilan berjeda adaptif menghasilkan **skor posttest tertinggi (M = 78.19)** dan **secara signifikan mengungguli belajar dengan AI yang diarahkan siswa (M = 67.28)**. Penataan yang diarahkan siswa berkinerja lebih buruk daripada penataan terstruktur, jadi otonomi tidak otomatis merupakan desain yang lebih baik.
- **"Belajar dengan chatbot lebih baik daripada belajar tanpanya."** **Kasus kontrasnya menentukan**: dalam [[rct|uji acak]] terhadap **120 siswa**, kelompok yang belajar **dengan** ChatGPT tanpa batasan mengingat **lebih sedikit pada tes kejutan**. Alat itu merugikan retensi dalam penataan yang diuji.
- **"Bukti pola ini adalah uji gabungan berskala besar."** **Dukungan terkuatnya bersifat tidak langsung** dan berasal dari **eksperimen acak within-subjects dengan 26 siswa**, di mana [[scaffolding]] dengan jawaban langsung berkinerja berbeda secara signifikan. Bukti mendukung pola ini dan tetap tipis dalam skala, dan halaman ini sebaiknya dibaca seperti itu.

## Konsep terkait

- [[pedagogy]] — payung pendekatan pengajaran yang dioperasionalkan halaman ini menjadi urutan
- [[learning-design]] — tempat pola dipilih, diurutkan dan ditanamkan dalam sebuah mata kuliah
- [[scaffolding]] — prinsip dukungan-dan-penarikan yang mengatur di mana bantuan AI seharusnya berada
- [[feedback]] — sistem yang diwujudkan oleh pola-pola umpan balik di halaman ini
- [[formative-assessment]] — tujuan penilaian yang dilayani sebagian besar pola ini
- [[peer-assessment]] — separuh manusia dari pola PAIRR dan umpan balik gabungan
- [[ai-feedback-quality]] — mengapa kualitas umpan balik saja tidak menentukan revisi
- [[evaluative-judgment]] — penilaian yang harus dilakukan siswa atas keluaran AI
- [[feedback-literacy]] — kemampuan yang dibangun oleh langkah-langkah penilaian kritis
- [[human-in-the-loop-ai]] — struktur pengawasan pada pola-pola tinjauan
- [[oral-assessment]] — format yang mendasari pola-pola verifikasi
- [[process-oriented-assessment]] — logika di balik titik pemeriksaan bertahap
- [[productive-failure]] — konsep di balik percobaan-sebelum-instruksi
- [[retrieval-spacing-interleaving]] — basis bukti bagi pola pengambilan berjeda
- [[desirable-difficulties]] — mengapa urutan yang menuntut usaha mengalahkan yang lancar
- [[misconceptions]] — sasaran pola-pola perubahan konseptual
- [[refutation-text]] — bentuk tekstual dari penghadapan miskonsepsi
- [[learning-by-teaching]] — pedagogi di balik pola tutee AI
- [[socratic-method]] — pola bertanya dan buktinya yang saling bertentangan
- [[collaborative-learning]] — konteks bagi kerja AI-bersama yang terskenario
- [[cognitive-offloading]] — risiko yang hendak dihindari setiap pola usaha-lebih-dulu
- [[metacognition]] — apa yang hendak dipicu langkah refleksi dalam urutan-urutan ini
- [[prompt-engineering]] — lapisan scaffolding dalam pola penggunaan terstruktur
- [[transfer-of-learning]] — hasil yang pada akhirnya menjadi dasar penilaian sebagian besar pola
- [[assessment-validity]] — alasan bukti proses diusulkan sejak awal
- [[academic-integrity]] — pendorong di balik verifikasi lisan dan verifikasi proses
- [[ai-literacy]] — kemampuan yang dikembangkan dengan mengkritik keluaran AI
- [[online-teaching-and-learning]] — konteks yang menjadikan pengurutan menanggung beban
- [[higher-ed]] — jenjang tempat sebagian besar bukti ini dihasilkan
- [[k-12]] — jenjang studi kegagalan produktif, perubahan konseptual dan penilaian lisan

## Artikel terkait

- [[pairr-ai-peer-review-2025]] — Tinjauan Sejawat dan AI + Refleksi (PAIRR): urutan unggulan, N = 654 (Sperber et al. 2025)
- [[gift-ai-pairr-business-writing-2025]] — PAIRR yang diterapkan dalam mata kuliah menulis bisnis (MacArthur et al. 2025)
- [[ai-peer-feedback-l2-writing-engagement-2026]] — Umpan balik AI-plus-sejawat terintegrasi menaikkan keterlibatan dan keempat dimensi IELTS (Liu 2026)
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — Umpan balik sejawat GenAI terpandu prompt dalam argumentasi kolaboratif (Chang et al. 2026)
- [[rethinking-ai-writing-feedback-literacy|Dai (2026)]] — Melatih siswa menyaring dan menilai umpan balik AI: kondisi FRAC dan APCA
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Umpan balik AI berkualitas lebih tinggi tidak menghasilkan keuntungan revisi yang lebih besar (Farrokhnia et al. 2026)
- [[guardrails-ai-teaching-assistants-programming-2026]] — Sokratik plus konteks penuh dinilai lebih buruk daripada setiap konfigurasi asisten lainnya (Eastwood et al. 2026)
- [[ai-standardized-patient-scaffolding-medical-2026]] — Scaffolding Sokratik yang dipicu kebutuhan dalam pelatihan wawancara klinis, N = 100 (Yang et al. 2026)
- [[hashmi-socratic-physics-chatbot-2025]] — Chatbot Sokratik dalam mekanika pengantar: kekhususan pertanyaan naik dari 10–15% menjadi 100% (Hashmi et al. 2025)
- [[agent-type-feedback-style-self-directed-learning-2026]] — Umpan balik agen Sokratik versus direktif, dengan urutan yang tidak diimbangi (Han et al. 2026)
- [[adaptive-pretesting-retention]] — Pengambilan berjeda adaptif mengalahkan belajar dengan AI yang diarahkan siswa (Akgun & Toker 2026)
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — ChatGPT tanpa batasan selama belajar menurunkan retensi 45 hari (Barcaui 2025)
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Keuntungan tutoring terstruktur mengikuti minggu yang diselesaikan, bukan menit (Yang et al. 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Contoh versus latihan bersilangan menurut jenis pengetahuan (Rachatasumrit et al. 2025)
- [[adaptive-scaffolding-cognitive-engagement-its]] — Contoh terpandu dan berkutu adaptif dalam tutor logika cerdas (Dey Tithi et al. 2026)
- [[structured-reflection-ai-explanatory-feedback-2026]] — Menambahkan penjelasan diri ke umpan balik AI kalah pada setiap ukuran (Asher et al. 2025)
- [[generative-ai-guardrails-harm-learning]] — Tutoring berpagar menghilangkan kerugian ujian yang disebabkan GPT tanpa pagar, ~1,000 siswa (Bastani et al. 2025)
- [[guided-llm-scaffolding-independent-learning]] — Penggunaan LLM terpandu versus tanpa batasan dalam statistika (Amanlou et al. 2026)
- [[preferred-scaffolding-ai-mathematical-modeling]] — Scaffolding dengan jawaban langsung menekan abstraksi model meskipun lebih disukai (Zhu et al. 2026)
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Mengarahkan tutor LLM untuk menahan solusi demi kegagalan produktif (Puech et al. 2025)
- [[pedagogy-ai-mistakes]] — Siklus kritik-dan-penyempurnaan mingguan yang dibangun di atas kasus kegagalan AI yang sengaja dirancang (Hosseini 2026)
- [[kumar-genai-computing-education-systematic-review-2026]] — Analisis kesalahan sebagai kompetensi tersendiri, di 72 studi pendidikan komputasi (Kumar et al. 2026)
- [[lukesova-clue-before-correction-2026]] — Petunjuk terpandu alih-alih koreksi kesalahan langsung dalam revisi L2 (Lukešová & Jennings 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Menjelaskan kepada pembelajar pemula AI, N = 68 (Wang et al. 2026)
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Uji acak atas pengajaran agen ChatGPT untuk memprogram (Chen et al. 2024)
- [[explique-teachable-agent-algorithms-546-students-2026]] — Belajar dengan mengajar yang diterapkan pada 546 siswa selama 11 minggu (Wang et al. 2026)
- [[socrates-students-instructors-llms-lbt-2025]] — Siswa merancang pertanyaan yang tidak dapat dijawab LLM (Yang et al. 2025)
- [[code-review-genai-cs1]] — Wawancara tinjauan kode lisan wajib sebagai respons terhadap GenAI di CS1 (Fowles et al. 2026)
- [[asynchronous-oral-assessment-2026]] — Penilaian lisan terekam asinkron versus pilihan ganda tatap muka (Pentland et al. 2026)
- [[aivaluate-anxiety-assessment-2026]] — Viva berbasis obrolan mengurangi kecemasan sementara tatap muka dinilai lebih baik untuk pemahaman (Yusuf et al. 2026)
- [[ai-supported-oral-assessment-tvet-2026]] — AI memunculkan bukti rubrik untuk pertimbangan guru di bengkel vokasi (Adams 2026)
- [[quantum-education-its]] — Titik pemeriksaan keluaran-dan-pendekatan dalam mata kuliah pascasarjana mandiri (Elhaimeur & Chrisochoides 2026)
- [[agentic-education-coding]] — Titik pemeriksaan stop-block dan pemeriksaan pra-kemajuan, N = 27 (Naboulsi 2026)
- [[pbl-biomedical-engineering-genai-2026]] — Pembelajaran berbasis masalah empat modul dengan tonggak dan rubrik (Nnamdi et al. 2026)
- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]] — Lingkar tinjauan empat agen bersama guru, dan di mana kesesuaian minat gagal (Walkington et al. 2026)
- [[zhao-learnlens-feedback-educators-loop]] — Umpan balik dengan pendidik dalam lingkar dan skor verifikator (Zhao et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Injeksi prompt yang mengubah nilai tanpa terdeteksi, menyisakan guru sebagai satu-satunya pemeriksa (Humble 2026)
- [[golrang-propact-pair-programming-2026]] — AI bersama yang memperkirakan keruntuhan kolaborasi dalam pair programming (Golrang et al. 2026)
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] — Peran pembelajar dan AI yang terskenario dalam konstruksi pengetahuan kelompok (Cheng et al. 2026)
- [[paratutor-parent-child-tutoring]] — Dukungan AI dengan peran terpisah dalam tutoring orang tua–anak (Luo et al. 2026)
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — Dialog AI personal mengalahkan refutasi buku teks segera, lalu menyatu pada dua bulan (Corbett & Tangen 2026)
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Teks perubahan konseptual mengalahkan dialog AI interaktif, hasil yang sebaliknya (Akdogan 2025)
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — Inkuiri terpandu berbantuan AI dan pemahaman konseptual (Aydin 2026)
- [[ai-enhanced-flipped-classroom-three-year-2026]] — Perbandingan tiga kohort atas flipped tradisional, flipped dan flipped berbantuan AI (Liu et al. 2026)
- [[flipped-learning-genai-design-education-2026]] — Mata kuliah studio flipped dengan scaffolding prompt terpandu parameter (Qu et al. 2026)
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — Model pengajaran memoderasi hasil: flipped g = 1.96 berbanding tradisional g = 0.46 (Jing et al. 2026)
- [[ai-tutor-statistical-programming-adoption-2026]] — Penggunaan tutor pekerjaan rumah mingguan memprediksi skor tugas transfer dalam mata kuliah flipped (Préau et al. 2026)
- [[beck-genai-literacy-economics-hands-on]] — Diskusi kritik-AI lima langkah yang dibangun di atas kesalahan AI (Beck & Brodersen 2025)
- [[ccct-cooperative-learning-technique]] — Urutan pembelajaran kooperatif teruji dengan peran yang ditetapkan dan gallery walk (Tutal 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Modul seminar dan diskusi sejawat dengan rekomendasi pengambilan AI (Huang 2026)
