---
connected_resources: [drawsplat]
title: "AI Multimodal"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
updated: "2026-11-04T02:37:02-05:00"
translation_of: "concepts/multimodal"
source_updated: "2026-11-02T12:58:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **AI multimodal** — [[ai-technologies|sistem AI]] yang memproses, memahami, atau menghasilkan konten lintas beberapa modalitas — teks, gambar, audio, video, dan data terstruktur — serta pertanyaan pendidikan yang dimunculkan sistem ini. Dalam [[ai-education|AI dalam pendidikan]], AI multimodal muncul dalam tiga peran berbeda: sebagai *konten pembelajaran* yang dibuat dan digeluti pembelajar ([[multimodal-learning-genai|pembelajaran multimodal]]), sebagai *batas kapabilitas* sistem tutoring yang harus menafsirkan diagram dan grafik ([[syal-multimodal-dialogue-stem-2026|tutoring multimodal]]), dan sebagai *sinyal penilaian* yang digunakan untuk mengevaluasi pemahaman ([[multimodal-item-parameter-estimation-2026|pengukuran multimodal]]).

## Pertanyaan yang Perlu Dipertimbangkan

- Pikirkan grafik, diagram gaya, atau skema yang pernah sulit Anda jelaskan dengan kata-kata. Apa yang disarankan pengalaman itu tentang batas [[intelligent-tutoring|tutor AI]] yang hanya berbasis teks ketika mencoba membantu masalah yang kaya gambar?
- Tutor [[physics-education|fisika]] menjawab masalah berbasis teks ~96% dari waktu tetapi turun ke ~74% pada masalah yang menanamkan makna dalam diagram. Sebelum membaca, menurut Anda apa yang menyebabkan 'interferensi multimodal' ini—dan dapatkah Anda memikirkan perbaikan yang tidak melibatkan pelatihan ulang model?
- Anda mungkin pernah menghasilkan teks maupun gambar dengan alat AI. Apakah Anda menemukan bahwa '[[prompt-engineering|prompting]] untuk gambar' berbeda dari prompting untuk teks? Keterampilan apa yang mungkin dibutuhkan siswa untuk menerjemahkan gagasan abstrak menjadi prompt visual yang tepat?
- AI multimodal dapat menilai esai, menghasilkan umpan balik dengan narasi audio, dan bahkan merekonstruksi statistik butir ujian dari butir gambar-dan-teks. Apa yang disinyalakan (atau dirisikokan) pergeseran dari penilaian hanya-teks ke multimodal bagi [[bias-mitigation|keadilan]] dan validitas?
- Bagaimana fakta bahwa dukungan AI kurang andal justru pada masalah yang padat diagram (masalah yang membangun pemahaman [[stem-education|STEM]] yang mendalam) dapat menciptakan kesenjangan [[equity-in-ai-education|keadilan]] di antara pembelajar? Siapa yang paling terdampak?
- Sistem multimodal dapat menerjemahkan teks ke audio atau visual untuk mendukung pembelajaran inklusif, tetapi juga memungkinkan penginderaan kelas yang terperinci. Di mana garis antara akses multimodal yang membantu dan pengawasan?

## Pendahuluan

Multimodalitas dalam AI merujuk pada kapasitas bekerja lintas bentuk representasional yang berbeda alih-alih teks saja. Sistem [[generative-ai]] dan [[llm]] modern semakin menerima dan menghasilkan gambar, audio, dan video selain teks, membuka kemungkinan baru dan risiko baru bagi pendidikan. Berlandaskan teori semiotika sosial, yang menyatakan bahwa makna dibentuk lintas modus — bukan hanya kata-kata — AI multimodal mengubah bagaimana [[teacher-role|pengajaran]], pembelajaran, dan penilaian dirancang dan dievaluasi.([[multimodal-learning-genai]])

## Tiga wajah AI multimodal dalam pendidikan

### 1. Pembelajaran multimodal dan pembuatan konten

AI multimodal memungkinkan pembelajar menghasilkan dan bergaul dengan konten lintas teks, gambar, audio, dan video. Panduan pendidik untuk pembelajaran multimodal dengan AI generatif memposisikan alat ini sebagai mitra "siber-sosial": mereka melengkapi — tetapi tidak dapat menggantikan — pembentukan makna oleh manusia.([[multimodal-learning-genai]])

- **[[ai-literacy|Literasi AI]] dalam konteks multimodal** berlapis: kesadaran dasar tentang platform multimodal, ko-kreasi tingkat menengah dan [[critical-thinking|evaluasi kritis]] atas keluaran, serta desain tingkat lanjut atas aktivitas dan penilaian multimodal.([[multimodal-learning-genai]])
- **Prompting multimodal** itu sendiri merupakan praktik epistemik yang menuntut. Siswa yang melakukan prompt untuk gambar sekaligus teks menemukan bahwa "literasi prompt berbeda antara prompting untuk teks dan untuk gambar" — menerjemahkan makna abstrak menjadi prompt multimodal yang dapat dibaca mesin menuntut kosakata visual yang tepat dan menyingkap keterbatasan serta bias sistem.([[multimodal-prompting-ai-literacy]])
- **Penilaian multimodal** bergeser dari esai ke artefak yang menggabungkan teks, gambar, audio, dan video, dengan pendidik menggunakan AI untuk [[scaffolding|merancah]] pembuatan dan umpan balik alih-alih menggantikan produksi pembelajar sendiri.([[multimodal-learning-genai]])
- **Pilihan modalitas adalah pertimbangan pendidikan, bukan wadah.** [[elkington-human-centred-assessment-value-2026|Elkington (2026)]] berargumen bahwa memilih di antara format tertulis, lisan, digital, dan multimodal menentukan apa yang menjadi mungkin bagi pembelajar dan terlihat oleh penilai, dan menghitung pilihan yang terkendali di antara modalitas sebagai kendala generatif alih-alih detail administratif.
- **Komposisi multimodal pembelajar sebagai perancah berpikir kritis membawa trade-off.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu et al. (2027)]] menunjukkan bahwa membuat siswa kelas atas sekolah dasar mengubah narasi tertulis menjadi gambar dan video pendek yang dihasilkan AI mendukung perolehan berkelanjutan dalam interpretasi, analisis, evaluasi, dan penjelasan — tetapi tidak dalam inferensi. Karena visual membuat makna cerita eksplisit, siswa melaporkan lebih sedikit kebutuhan untuk menyimpulkan makna implisit dari teks semata; kolaborasi sejawat, bukan alat multimodalnya, memulihkan kesempatan untuk inferensi. Nilai AI multimodal sebagai mitra pembentukan makna karenanya spesifik per dimensi dan bergantung pada [[learning-design|desain instruksional]] yang dengan sengaja memasukkan kembali kerja inferensial dan [[self-regulated-learning|pengaturan diri]] yang dapat dipintas oleh eksternalisasi.
- **[[writing-education|Komposisi]] multimodal pembelajar sebagai literasi AI kritis.** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss et al. (2026)]] menganalisis iklan layanan masyarakat berupa video berdurasi 90 detik hingga 3 menit karya 22 siswa kelas sebelas tentang isu [[ethics|etika]] AI pilihan mereka sendiri — pengawasan melalui laptop yang diatur sekolah dan "izin keluar" elektronik, [[privacy|persetujuan berbasis informasi]], dan tuduhan algoritmik yang bersifat menghukum — sebagai [[ai-literacy|literasi AI kritis]] yang diwujudkan melalui komposisi lintas gambar bergerak, suara, teks, dan tubuh siswa sendiri. Di ketujuh film, bahaya digambarkan muncul dari keterjalinan manusia-mesin alih-alih dari alat semata (seorang "penguntit AI" yang dipersonifikasikan diperankan aktor manusia di tiga dari tujuh film), dan 15 dari 18 respons akhir unit menyatakan bahwa berkomposisi mengubah pemahaman mereka tentang etika AI. Penulis berargumen produk multimodal sekaligus *menunjukkan* dan *mengomunikasikan* kompetensi kritis — artefak produktif, refleksi, dan wacana kewargaan dapat menjadi bukti [[assessment]] yang secara struktural terlewat oleh skala literasi hanya-teks.

### 2. Tutoring multimodal dan batas kapabilitas

Ketika tutor berbasis LLM harus menyelesaikan masalah yang menanamkan makna dalam grafik, diagram gaya, skema, atau tabel, akurasinya menurun tajam — **Efek Interferensi Multimodal**.([[syal-multimodal-dialogue-stem-2026]])

- Pada masalah fisika OpenStax, akurasi hanya-teks ~96% turun ke **~74%** pada masalah yang kaya gambar, secara konsisten lintas keluarga model.([[syal-multimodal-dialogue-stem-2026]])
- **Kesalahan Pemrosesan Visual** — kegagalan mengekstraksi informasi dari grafik atau diagram — mendominasi taksonomi kesalahan dan merupakan mode kegagalan yang paling dapat dikoreksi.
- Intervensi dialog terstruktur yang sederhana (minta model mendeskripsikan apa yang dilihatnya, koreksi hanya salah baca yang *teramati* tanpa membocorkan fisika, lalu prompt ulang) memulihkan akurasi ke **~95%** tanpa pelatihan ulang.([[syal-multimodal-dialogue-stem-2026]])
- Ini adalah **kekhawatiran keadilan**: siswa yang mengerjakan masalah kaya gambar — justru masalah yang membangun pemahaman konseptual mendalam dalam STEM — saat ini menerima dukungan AI yang kurang andal daripada mereka yang mengerjakan latihan hanya-teks.
- **Membangun bantuan visual lebih sulit daripada membacanya.** Pada GeoVAD-Bench, menyediakan diagram bantu ahli menaikkan akurasi (+3.3 hingga +7.0 poin), tetapi membiarkan model membangun garis bantu sendiri melebarkan kesenjangan sebesar 10.0 hingga 13.5 poin — dua model mendapat skor lebih buruk daripada tanpa penalaran visual sama sekali ([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong et al., 2026]]).
- **Batasnya adalah profil, bukan tingkat — dan citra artistik berada di luar wilayah yang ditangani model dengan baik.** [[muse-vlm-artistic-image-benchmark-2026|MUSE (Zhu et al., 2026)]] mengevaluasi 30 VLM terbuka dan proprietary pada 12 tugas atas 1,174 karya seni yang dipesan, dan sebaran kapabilitas lintas dimensi lebih lebar daripada yang disiratkan skor agregat mana pun: klasifikasi adegan hampir matang (23 dari 30 model di atas 75.0, median 81.0) sementara deteksi emosi tertinggi 39.5 dan tugas terbuka yang menuntut model *mengartikulasikan* buktinya mendapat skor 50.90 (identifikasi petunjuk visual) dan 49.18 (inferensi penyebab emosi) pada kemiripan semantik. Penalaran komposisional dan yang bergantung pada sudut pandang paling gagal — ketika kebenaran dasar tidak menetapkan relasi lateral atau vertikal yang pasti, 90.0% dan 73.3% model tetap menyatakan salah satunya, hanya 43.3% menempatkan gadis itu dengan benar dalam kedalaman, dan tidak ada model yang menyelesaikan ketiga dimensi dari satu butir. Kegagalan juga merambat: karakter yang salah didasarkan kemudian dibenarkan dengan rasional lancar yang dibangun dari semantik visual di sekitarnya (kupu-kupu, burung), yang merupakan hasil paling berbahaya dalam tutoring karena penjelasannya terbaca kompeten. Untuk [[language-learning|pembelajaran bahasa]] berbasis gambar, ini mendukung validasi tingkat dimensi pada citra yang benar-benar digunakan suatu kursus, alih-alih mengimpor skor multimodal umum, dan untuk memperluas titik pemeriksaan pendasaran yang dijelaskan di bawah — deskripsikan apa yang terlihat, dan di mana, sebelum menalar darinya — ke konten artistik [[situated-learning|tersituasi]] ([[muse-vlm-artistic-image-benchmark-2026]]).

Implikasi desain praktisnya adalah **titik pemeriksaan pendasaran visual** dalam tutoring multimodal: langkah sengaja di mana sistem mendeskripsikan apa yang dilihatnya sebelum mencoba solusi, memberi siswa atau pengawas manusia kesempatan mengoreksi kesalahan persepsi.([[syal-multimodal-dialogue-stem-2026]])

[[ai-assisted-physics-lab-report-assessment-2026|Abreu et al. (2026)]] menambahkan kendala sebelumnya: persamaan, grafik, atau satuan dapat muncul dalam laporan namun tidak pernah terambil dari dokumen yang diproses, sehingga ketidaksesuaian dengan instruktur mungkin merupakan kegagalan ekstraksi alih-alih kegagalan penalaran — yang menjadikan format pengiriman bagian dari desain penilaian.

### 3. Penilaian dan pengukuran multimodal

AI multimodal memperluas baik *konten* penilaian maupun *sinyal* yang digunakan untuk menilainya.

- **Sistem umpan balik multimodal** mengintegrasikan teks terstruktur, rujukan slide, dan narasi audio streaming. Dalam satu studi, [[ai-feedback-quality|umpan balik multimodal AI]] menyamai umpan balik pendidik untuk pembelajaran sambil *secara signifikan mengunggulinya* pada persepsi siswa.([[multimodal-ai-feedback-learning]])
- **Estimasi respons butir multimodal** menggunakan LLM multimodal yang disetel halus untuk merekonstruksi kurva karakteristik butir (IRT / 3PL) langsung dari probabilitas opsi yang diprediksi pada butir gambar-dan-teks, menghubungkan AI multimodal dengan [[educational-measurement]] dan [[item-response-theory]].([[multimodal-item-parameter-estimation-2026]])
- **Evaluasi model bahasa-visi pendidikan** dan [[mllm-scientific-visualization-literacy|literasi LLM multimodal]] memperluas perangkat evaluasi bidang ini ke penalaran multimodal dan [[visualization]].([[drawedumath-vlm-struggling-students-2026]])([[mllm-scientific-visualization-literacy]])
- **Penskoran multimodal atas tulisan tangan [[chemistry-education|kimia]] menyingkap batas kapabilitas yang bergantung format:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] menilai ujian akhir kimia umum tulisan tangan dari 296 siswa halaman demi halaman terhadap gambar rubrik dengan LLM multimodal yang bernalar, menilai jawaban tekstual dan persamaan reaksi kimia secara andal (F1 ternormalisasi tertinggi) tetapi menggambar dan membuat grafik *lebih buruk daripada acak* — kisi latar mengganggu visi AI secara visual dan diagram ilmiah/struktur kimia tetap sulit ditafsirkan — yang menegaskan bahwa visi AI multimodal tidak tangguh terhadap karya yang padat representasi dan paling baik digunakan dengan [[human-in-the-loop-ai|penyerahan kepada manusia]] untuk butir grafis ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Pengenalan konstruk dan pertimbangan komparatif adalah keterampilan yang dapat dipisahkan.** [[cfes-p24-multimodal-slide-auditing-2026|Ma et al. (2026)]] mengungkapkan enam prinsip pembelajaran multimedia sebagai suntingan slide yang dapat dibalik ditambah kontrol samar kesetaraan visual, dan menemukan kedua model memulihkan setiap operasi, prinsip, dan perbaikan (8/8) sementara kalibrasi keparahan gagal sepenuhnya (0/8) — skor komposit akan menyembunyikan lapisan mana yang gagal.

- **Perolehan keadilan dapat divalidasi menjadi kenyataan.** Estimator atensi multimodal hanya sedikit mengungguli baseline visual saja, dan regularizer celah MAE yang menargetkan gender memangkas celah validasi dari 0.02 ke 0.005 namun meningkatkan celah dan kesalahan kelompok terburuk pada subjek yang ditahan — sehingga validasi berulang tingkat subjek yang sadar subkelompok diperlukan sebelum penerapan ([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).
- **Penskoran multimodal dapat mereproduksi hasil seleksi bahkan ketika penskoran tingkat butir tertinggal.** Menilai 10,364 halaman tulisan tangan olimpiade dan universitas, sebuah LLM menyamai total pemeriksa pada r = 0.93–0.96 dan menempatkan lima siswa yang sama di tim Olimpiade, namun kesepakatan bagian mencapai 70%: bukti pembaca kedua, bukan penilai resmi ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **Pembangkitan diagram adalah perbatasan kapabilitas, bukan masalah yang sudah selesai.** Pada tolok ukur fisika 15,246 pertanyaan yang menilai keluaran multimodal, menyintesis atau menyunting diagram fisika terstruktur terbukti lebih sulit daripada menjawab, dan model terkemuka tetap di bawah 70% penguasaan ketat — bukti bahwa *produksi* visual tertinggal dari *pemahaman* visual ([[omniphys-multimodal-physics-benchmark-2026|Chen et al., 2026]]).

## AI multimodal untuk pembelajaran bahasa dan aksesibel

Sistem multimodal juga memperluas akses dan [[personalized-learning|personalisasi]]. Alat audio-[[video-education|pembelajaran video]] yang dipandu AI menyesuaikan kecepatan pemutaran, menghasilkan ringkasan video multimodal, dan mendukung latihan pelafalan.([[ai-guided-learning-audiovideo-2026]]) Grafik pengetahuan multimodal menalar lintas gambar dan teks untuk tugas pendidikan,([[multimodal-knowledge-graph-educational-reasoning]]) dan representasi multimodal memperbaiki [[inclusive-learning]] dengan menerjemahkan informasi lintas modus (misalnya, teks ke audio atau visual). Aplikasi domain mencakup penskoran dan diagnosis matematika tulisan tangan,([[llm-cognitive-diagnosis-handwritten-math]]) [[affective-tutoring|tutoring afektif]] dengan sinyal multimodal,([[multimodal-affective-its-presentation]])([[kar-mathbuddy-affective-math-tutoring-2025]]) pembelajaran teks-ke-gambar di bidang khusus,([[nuclear-diffusion-text-to-image-learning-2026]]) dan penginderaan kelas multimodal yang sadar privasi.([[privacy-aware-classroom-incident-recognition-2026]]) Bird (2026) menunjukkan bentuk multimodalitas internal-teks: menggabungkan transformer ELECTRA yang disetel halus dengan analisis fitur linguistik komputasional untuk mengklasifikasikan sastra Inggris menurut UK Key Stage, di mana model gabungan (F1 0.996) jauh melampaui setiap baseline unimodal — bukti bahwa menggabungkan bentuk representasional, bahkan di dalam teks, dapat mengungguli pendekatan model tunggal.

## Tantangan dan implikasi desain

1. **Tutup kesenjangan multimodal.** Sistem tutoring multimodal harus mencakup pendasaran visual dan perancah dialog terstruktur alih-alih mengasumsikan kapabilitas visi itu kuat.([[syal-multimodal-dialogue-stem-2026]])
2. **Perlakukan prompting multimodal sebagai keterampilan yang dapat diajarkan.** Kurikulum literasi AI harus membahas prompting spesifik modalitas, koherensi lintas modus, dan evaluasi kritis atas keluaran multimodal.([[multimodal-prompting-ai-literacy]])
3. **Pertahankan pembentukan makna oleh manusia.** AI multimodal harus menambah, bukan menggantikan, konstruksi dan evaluasi makna pembelajar sendiri lintas modus.([[multimodal-learning-genai]])
4. **Perluas evaluasi ke validitas multimodal.** [[assessment-validity|Validitas penilaian]], bias, dan keandalan harus diperiksa ketika AI menilai atau menghasilkan artefak multimodal.([[multimodal-item-parameter-estimation-2026]])([[ai-ed-evaluation]])
5. **Perhatikan keadilan dan privasi.** Dukungan yang tidak andal pada masalah kaya gambar dan tuntutan data penginderaan multimodal keduanya membawa implikasi keadilan dan privasi.([[syal-multimodal-dialogue-stem-2026]])([[privacy-aware-classroom-incident-recognition-2026]])
6. **Sesuaikan pipeline dengan kontennya.** Asisten lab keamanan siber dengan LLM multimodal menangani slide visual yang padat lebih baik, sementara pipeline OCR-plus-LLM memberikan nilai instruksional yang sebanding pada slide yang berpusat teks dengan biaya komputasi yang jauh lebih rendah.([[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel et al. (2025)]])
7. **Mengumpulkan beberapa aliran bukan berarti mengintegrasikannya.** Tinjauan atas 23 studi AI untuk pembelajaran terwujud mengurutkan karya multimodal ke dalam tiga tingkat — aliran yang dikumpulkan secara paralel, aliran yang disejajarkan pada garis waktu bersama, aliran yang digabungkan di dalam satu model yang mengestimasi keadaan pembelajar — dan menempatkan sebagian besar studi pada tingkat pertama, memasangkan gambar dengan teks atau gerak dengan teks tanpa pernah menyatukannya. Satu studi menyelaraskan afek wajah, tatapan, dan deteksi wajah setelah fakta; pendekatan terdekat ke penggabungan memodelkan keadaan bersama dari sinyal gelang dan kerangka tubuh dengan proses Markov, dan berjalan setelah sesi alih-alih menginformasikan umpan balik yang diterima pembelajar. Tidak ada sistem yang ditinjau menggabungkan masukannya selama penggunaan ([[kim-ai-embodied-learning-review-2026|Kim dan Han (2026)]]).

## Miskonsepsi Umum

**"Model multimodal menangani masalah multimodal."** Akurasi menurun tajam ketika makna dibawa oleh gambar alih-alih teks. Tutor [[physics-education|fisika]] menjawab masalah berbasis teks sekitar **96%** dari waktu tetapi turun ke sekitar **74%** pada masalah yang menanamkan makna dalam diagram — **Efek Interferensi Multimodal**. Dua puluh dua poin kapabilitas menghilang tepat di tempat konten disipliner berada.

**"Menambahkan gambar ke prompt menyelesaikan masalah diagram."** Modalitas masukan bukan hambatannya; interferensinya yang menjadi hambatan. Model yang menerima diagram dan tetap menalar dari prosa di sekitarnya telah diberi informasi tetapi tidak menggunakannya, itulah sebabnya kegagalan itu tak terlihat kecuali seseorang membandingkan kedua format masalah.

**"Kapabilitas multimodal adalah satu tangga, sehingga model terbaik secara keseluruhan adalah yang terbaik untuk tugas kaya gambar."** Kapabilitas bersifat spesifik tugas, dan model yang memimpin pada tolok ukur umum dapat tertinggal pada diagram gaya. Untuk disiplin kaya gambar, uji yang relevan adalah uji yang maknanya tertanam dalam gambar.

**"Batasan tutoring hanya-teks adalah gangguan, bukan masalah kurikulum."** Dalam disiplin di mana diagram *adalah* masalahnya — fisika, kimia, geometri, teknik, kedokteran — batas kompetensi tutor hanya-teks jatuh melintasi konten yang dinilai alih-alih di tepinya.

## Konsep terkait
- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — Payung: teknologi dan teknik AI (model, pelatihan LLM, robotika, RAG, agentic)
- [[virtual-and-augmented-reality]] — gestur, suara, dan masukan spasial sebagai kanal belajar
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]

## Artikel terkait
- [[elkington-human-centred-assessment-value-2026]] — Penilaian berpusat manusia, assemblage, dan kendala generatif (Elkington 2026)
- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — Komposisi PSA video tentang etika AI sebagai pedagogi literasi AI kritis (Burriss et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Pemodelan Transformer Multimodal yang Sadar Keadilan untuk Estimasi Atensi Siswa Waktu Nyata
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — Kinerja VLM pada pekerjaan matematika tulisan tangan siswa (DrawEduMath, Lucy et al. 2026)
- [[multimodal-learning-genai]] — Panduan pendidik untuk pembelajaran multimodal dengan AI generatif (model MMLD-AI)
- [[syal-multimodal-dialogue-stem-2026]] — Efek Interferensi Multimodal dan pemulihan dialog terstruktur dalam STEM
- [[multimodal-ai-feedback-learning]] — Umpan balik multimodal AI menyamai pendidik pada pembelajaran, melampaui pada persepsi
- [[multimodal-prompting-ai-literacy]] — Prompting multimodal siswa sebagai kerja epistemik dalam literasi AI
- [[multimodal-item-parameter-estimation-2026]] — Mengestimasi parameter butir IRT dengan LLM multimodal
- [[ai-guided-learning-audiovideo-2026]] — Dukungan pembelajaran audio-video yang dipandu AI
- [[multimodal-knowledge-graph-educational-reasoning]] — Grafik pengetahuan multimodal untuk penalaran pendidikan
- [[mllm-scientific-visualization-literacy]] — Literasi LLM multimodal untuk visualisasi ilmiah
- [[multimodal-affective-its-presentation]] — Sinyal multimodal dalam tutoring cerdas afektif
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Tutoring matematika multimodal afektif
- [[llm-cognitive-diagnosis-handwritten-math]] — Diagnosis kognitif LLM atas matematika tulisan tangan
- [[nuclear-diffusion-text-to-image-learning-2026]] — Pembelajaran teks-ke-gambar dalam pendidikan teknik nuklir
- [[privacy-aware-classroom-incident-recognition-2026]] — Penginderaan kelas multimodal yang sadar privasi
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — Instruksi OCR multimodal dalam pendidikan keamanan siber
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Tolok ukur LLM multimodal untuk audit slide
- [[ai-grading-handwritten-physics-2026]] — Penskoran AI atas penilaian fisika tulisan tangan (Olimpiade)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — Komposisi AI multimodal dan berpikir kritis dalam menulis sekolah dasar (Lu et al. 2027)
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Melampaui Pembangkitan dan Akurasi: Mendiagnosis dan Meningkatkan Rantai Pemikiran Visual untuk Pemecahan Masalah Geometri
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 12 tugas atas 1,174 karya seni menunjukkan kapabilitas VLM sebagai profil spesifik dimensi, terlemah dalam interpretasi afektif dan penalaran spasial yang bergantung sudut pandang (Zhu et al. 2026)
- [[ai-assisted-physics-lab-report-assessment-2026]] — Penilaian Berbantuan AI atas Laporan Laboratorium Fisika Eksperimental: Potensi, Keterbatasan, dan Dukungan bagi Praktik Pengajaran
- [[kim-ai-embodied-learning-review-2026]] — AI dalam pembelajaran terwujud sebagian besar hanya mengamati: peran penginderaan 62.5% dari tag peran terkode, dan tidak ada sistem yang ditinjau menggabungkan aliran multimodal saat pembelajar menggunakannya (Kim & Han 2026)
