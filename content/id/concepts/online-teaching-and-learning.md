---
title: "Pengajaran dan Pembelajaran Daring"
created: "2026-08-20T04:20:00-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading, learning-design]
pedagogy: [online-teaching-and-learning, pedagogy]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, id-toolbox, liascript]
connected_faqs: [asynchronous-online-courses-ai]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/online-teaching-and-learning"
source_updated: "2026-11-08T09:30:45-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pengajaran dan pembelajaran daring** — pedagogi dan praktik mengajar serta belajar yang berlangsung melalui lingkungan digital termediasi jaringan alih-alih di ruang kelas fisik bersama. Cakupannya meliputi kursus yang sepenuhnya daring, Massive Open Online Course (MOOC), format campuran dan hibrida, serta pendidikan jarak jauh. Bagi basis pengetahuan ini, pertanyaan sentralnya adalah bagaimana [[generative-ai|AI generatif]] membentuk ulang peluang, tantangan, dan praktik yang disarankan dalam mengajar dari jarak jauh — dari [[personalized-learning|personalisasi]] yang terukur hingga risiko baru bagi [[academic-integrity|integritas akademik]] dan [[cognitive-offloading|pengalihan kognitif]].

## Pertanyaan yang Perlu Dipertimbangkan

- Anda mungkin pernah mengambil kursus daring atau mengajarnya. Apa yang hilang dan apa yang Anda peroleh ketika ruang kelas fisik disingkirkan—dan bagaimana itu membentuk ulang apa yang bisa diandalkan instruktur?
- Halaman ini berargumen bahwa pengajaran daring adalah pedagogi yang khas, bukan sekadar mekanisme penyampaian. Secara konkret, dengan cara apa medium daring mengubah strategi pengajaran mana yang bahkan mungkin atau efektif?
- Sebuah [[rct]] menemukan bahwa bantuan AI tanpa pagar pengaman menaikkan kinerja latihan tetapi menurunkan skor ujian tanpa bantuan, sementara tutor 'petunjuk-bukan-jawaban' menghapus kerugian itu. Sebelum membaca lebih jauh, dapatkah Anda menjelaskan mengapa memberi siswa jawaban mungkin menggelembungkan kinerja langsung namun menggerus pembelajaran yang tahan lama?
- Penilaian daring tidak selalu dapat membedakan kerja berbantuan dari kerja mandiri. Jika alat deteksi adalah 'respons parsial yang diperdebatkan', desain penilaian alternatif apa yang mungkin mengungkap pemahaman sejati?
- Bagaimana ketersediaan yang dipersepsikan atas jalan pintas AI yang tanpa usaha membentuk ulang motivasi siswa dalam kursus berbasis layar yang berjalan mandiri? Apa yang mungkin Anda rancang untuk melawannya?
- Agen otonom kini dapat masuk ke [[edtech-platform|sistem manajemen pembelajaran]], membaca materinya, menjawab kuis, dan memposting di diskusi. Jika menghasilkan artefaknya tidak lagi menunjukkan pembelajaran, apa yang perlu Anda lihat sebagai gantinya?
- AI kini dapat menghasilkan kursus setara MOOC dalam hitungan menit dengan sebagian kecil biayanya. Apa trade-off pedagogis antara 'N agen untuk satu siswa' versus 'satu video untuk N siswa'?

## Pendahuluan

Pengajaran dan pembelajaran daring adalah konteks [[pedagogy|pedagogis]] yang khas, bukan sekadar mekanisme penyampaian. Ia menghapus kehadiran fisik bersama yang menopang perhatian, [[motivation|motivasi]], dan interaksi informal, lalu menggantinya dengan interaksi digital terstruktur — forum diskusi, materi asinkron, video, [[intelligent-tutoring|agen tutoring]] — untuk kontak tatap muka. Ini mengubah apa yang dapat diandalkan instruktur, apa yang dapat diakses siswa, dan bagaimana pembelajaran dirancang serta dinilai. Sebagai konsep payung dalam lanskap [[pedagogy|pedagogi]], ia berdampingan dengan [[active-learning]], [[collaborative-learning]], dan [[self-regulated-learning]] tetapi dibedakan oleh mediumnya: kendala dan afordansi lingkungan daring menentukan strategi mana yang layak.

Kebangkitan AI generatif mendarat langsung di konteks ini. Pembelajar daring sudah bekerja melalui layar dan perangkat lunak, sehingga alat AI menjadi tetangga alami; pada saat yang sama, penilaian daring lebih sulit diawasi, membuat penyalahgunaan lebih mudah dan taruhannya lebih tinggi. Bukti dalam basis pengetahuan ini menunjukkan bahwa AI dapat menjadi sekutu yang ampuh bagi pengajaran dan pembelajaran daring — dan, bila dikonfigurasi dengan buruk, sumber kerugian pembelajaran yang signifikan.

[[meta-analysis-systematic-review|Tinjauan literatur]] kritis [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga & Johnson (2025)]] (63 sitasi dari 32 negara) menyusun lanskap ini menjadi empat tema yang saling terkait yang berulang di sepanjang halaman ini: jenis dan tujuan integrasi AI, pendekatan pedagogis (literasi AI, pembelajaran yang diatur sendiri), manfaat, dan tantangan. Kehati-hatian sentral mereka — bahwa tema-tema ini *tumpang tindih* dan bahwa integrasi AI daring adalah upaya sosioteksnis yang berjangkar pada pedagogi dan hubungan antarmanusia alih-alih sekadar adopsi teknologi — sejalan dengan pembingkaian halaman ini atas pengajaran daring sebagai pedagogi yang khas. Yang perlu dicatat, mereka melaporkan bahwa siswa yang menggunakan ChatGPT *berdampingan* dengan tutoring guru mempersepsikan [[learning-gains|perolehan belajar]] yang lebih besar daripada yang menggunakannya sendiri, memperkuat penekanan pada kolaborasi hibrida manusia–AI yang dijalin di halaman ini.

Perkembangan yang menggeser ini dari pertanyaan desain menjadi pertanyaan mendesak adalah bahwa AI generatif tidak lagi hanya menulis teks yang bisa ditulis siswa. [[agentic-ai|Agen]] otonom kini masuk ke sistem manajemen pembelajaran, membaca materi kursus, menjawab kuis, membaca unggahan teman sekelas, dan menyerahkan pekerjaannya. Tiga demonstrasi pada kursus psikologi sarjana yang berjalan langsung menunjukkan artinya dalam praktik: dua penyelesaian kuis, satu dalam waktu sekitar **12 menit** dan satu dalam **kurang dari 5 menit**, keduanya bernilai **10/10**, dan satu unggahan diskusi ketika agen menambang unggahan teman-temannya lalu memfabrikasi riwayat hidup orang pertama yang kredibel untuk menjawabnya — berbanding catatan publik setidaknya **15 jalannya agen terdokumentasi** di Canvas, Moodle, dan Brightspace dengan **tujuh alat agen**. [[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou dan El-Haddad (2026)]] berargumen bahwa ini masalah [[assessment-validity|validitas penilaian]] sebelum menjadi masalah integritas: yang dihapus oleh penyelesaian agen adalah asumsi bahwa karya yang diserahkan dihasilkan oleh orang yang pembelajarannya sedang dinilai. Pertanyaan desain bagi pengajaran daring karena itu bergeser dari bagaimana mendeteksi penyalahgunaan menjadi bukti pembelajaran apa yang masih dapat dihasilkan kursus daring, dan itulah benang yang berjalan melalui bagian-bagian di bawah.

## Format dan latar

Pengajaran dan pembelajaran daring mengambil beberapa bentuk terkait yang berbagi medium yang sama tetapi berbeda dalam jangkauan dan struktur:

- **Pembelajaran campuran dan hibrida.** Model yang menggabungkan komponen tatap muka dan daring, dengan sengaja mengintegrasikan aktivitas, materi, dan interaksi digital dengan pengajaran tatap muka. Format campuran menuntut instruktur memutuskan apa yang paling baik dilakukan secara sinkron vs. asinkron dan daring vs. tatap muka — keputusan yang diorganisasi oleh prinsip [[learning-design]] dan yang didukung sekaligus dipersulit oleh AI. Dalam konteks campuran, alat AI menawarkan peluang untuk [[personalized-learning|personalisasi]] dan dukungan yang selalu aktif sekaligus memunculkan risiko integritas dan pengalihan yang mencakup bagian daring maupun tatap muka. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain dkk. (2026)]] mengilustrasikannya dalam dua latar campuran — ruang kelas universitas terbalik dan [[reflection|penulisan reflektif]] dalam pendidikan vokasi — ketika dasbor analitik pembelajaran (DashED) mengomunikasikan profil [[self-regulated-learning]] yang diturunkan ML kepada guru. Kekhawatiran adopsi berdivergensi menurut konteks: guru kelas terbalik (universitas) paling khawatir tentang anonimisasi data dan siswa yang memilih keluar, sedangkan guru penulisan reflektif (vokasi) takut akan penyalahgunaan alat oleh sesama pendidik dan menekankan perlunya mengontekstualkan data. Dalam penggunaan, guru kelas terbalik mengikuti eksplorasi berurutan dan lebih menyukai adaptasi tingkat mata kuliah serta menampilkan [[visualization|dasbor]] di kelas, sementara guru vokasi meninjau ulang halaman ringkasan dan menggunakan alat itu terutama untuk sesi pendampingan individual — bukti bahwa desain analitik campuran harus sadar konteks.
- **Desain sinkron versus asinkron.** Pembedaannya lebih penting daripada medium penyampaiannya, karena kedua format itu menuntut hal yang berlawanan dari pembelajar. Sesi sinkron membawa perhatian, laju, dan akuntabilitas di dalam sesi itu sendiri; kursus asinkron harus merancangnya masuk, karena pembelajar sendirian yang memutuskan kapan bekerja dan tidak menerima akuntabilitas ambien dari ruangan. Basis penelitian sering mengaburkan ini: tinjauan basis pengetahuan ini atas AI dan [[student-engagement|keterlibatan]] dalam pembelajaran daring (24 studi) memperlakukan keterlibatan secara tunggal dan secara eksplisit mencampuradukkan konteks sinkron dengan asinkron, sehingga kesimpulannya tidak boleh dibaca sebagai khusus asinkron. Yang khusus asinkron adalah bukti tentang bagaimana pembelajar yang berjalan mandiri kehilangan fokus dan laju — perilaku yang diatur sendiri seperti penetapan tujuan, penataan lingkungan, dan manajemen waktu paling bertepatan dengan distraksi digital yang rendah ([[decreasing-digital-distraction-college-online-learning-2026|Shi dkk. 2026]], 530 siswa), sementara pengetahuan metakognitif dan [[well-being|kesejahteraan]] menurun sepanjang semester seiring tenggat penilaian yang mengelompok ([[song-genai-learning-partner-srl-over-time-2026|Song dkk. 2026]], 75 siswa). Padanan praktisnya adalah FAQ tentang [[asynchronous-online-courses-ai|merancang dan memfasilitasi kursus asinkron ketika AI dapat mengerjakan tugasnya]].
- **Pendidikan jarak jauh.** Program yang dirancang bagi pembelajar yang belajar dari jarak jauh, sering dalam skala besar dan lintas wilayah (mis., 200K+ pembelajar Open University). Pembelajaran jarak jauh adalah tempat dukungan AI 24/7 yang tertanam dalam konteks dan ketidakmungkinan pengawasan tatap muka paling menonjol. Bukti komparatif dari penyiapan guru di Afrika Selatan menunjukkan mediumnya sendiri berasosiasi dengan kesiapan: [[ai-training-science-teacher-tpack-distance-2026|Mnguni dkk. (2026)]] menemukan TPACK yang [[self-report-measures|dilaporkan sendiri]] untuk pengajaran [[science-education|sains]] terintegrasi AI lebih tinggi pada calon guru tahun akhir di universitas berbasis kampus (64.0%) daripada di universitas pendidikan jarak jauh (47.4%), dengan domain terlemah yang dilaporkan di kedua latar adalah Pengetahuan Pedagogis. Pola ini memperingatkan bahwa program jarak jauh tidak dapat mengasumsikan pelatihan AI yang sama menghasilkan kesiapan yang sama, dan bahwa desain pelatihannya, bukan keberadaannya, yang berbeda.


Dua kampus yang terdaftar bersama dalam satu kursus asinkron tidak menghasilkan interaksi lintas kampus bagi setidaknya satu dari 19 siswa, sehingga pendaftaran bersama adalah fakta penjadwalan alih-alih desain yang menciptakan konteks sebaya yang diasumsikan kursus daring ([[aggarwal-genai-cybersecurity-2026|Aggarwal, 2026]]).


## Peluang dan manfaat AI bagi pengajaran dan pembelajaran daring

- **Personalisasi yang terukur.** MOOC tradisional unggul dalam jangkauan tetapi kesulitan beradaptasi — "satu video untuk N siswa." Sistem agen yang digerakkan [[llm]] ([[mooc-to-maic|MAIC]]) membaliknya menjadi "N agen untuk 1 siswa," menggunakan agen Guru, Asisten, Teman Sekelas, dan Analis yang terspesialisasi untuk menyampaikan [[adaptive-learning|pengajaran adaptif]], umpan balik personal, dan jalur belajar dinamis pada skala MOOC. Sistem seperti [[learnmate2-llm-adaptive-learning|LearnMate²]] menjawab "celah personalisasi" dalam pembelajaran daring terbuka dengan rencana studi personal, bantuan kontekstual waktu nyata, dan aktivitas [[adaptive-learning|adaptif]]. Video personal adalah rute konkret menuju tujuan ini: [[personalized-ai-generated-videos-preference-2026|Tomlinson dkk. (2026)]] menemukan siswa dalam kursus daring besar lebih menyukai video personal yang dihasilkan AI daripada video rekaman manusia yang tidak personal — preferensi yang efek personalisasinya melebihi nilai yang diberikan pada penyaji manusia — sehingga media personal yang dihasilkan [[generative-ai]] secara terukur dapat menutup celah "satu video untuk N siswa" dalam pengajaran daring.
- **Dukungan yang selalu aktif dan tertanam dalam konteks.** Dalam konteks pendidikan jarak jauh dan [[adult-learning|pembelajaran orang dewasa]] ketika pembelajar belajar di tempat kerja atau di rumah, dukungan 24/7 yang tertanam dalam kursus adalah manfaat besar. [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Asisten AIDA milik Open University]] menemukan dukungan GenAI yang dibangun khusus dan berada di dalam lingkungan meningkatkan [[student-engagement|keterlibatan]] (menggandakan waktu penggunaan dalam uji coba eksploratori), dengan 96% siswa menginginkannya dalam studi formal mereka.
- **Tutoring percakapan dan dialogis dalam skala besar.** Tutor [[conversational-ai]] yang dibangun di atas teknologi [[intelligent-tutoring]] yang teruji ([[conversational-ai-tutors-framework|kerangka keep/change/center/study]]) menjanjikan tutoring berbasis dialog berkualitas tinggi — yang melibatkan pemikiran, pertanyaan, dan [[misconceptions|miskonsepsi]] siswa — yang jauh lebih terukur daripada tutoring manusia.
- **Fasilitasi dan analitik.** AI dapat mendukung [[collaborative-learning|diskusi daring]] dan [[learning-analytics]], meramalkan keterlibatan, dan membantu instruktur mengalokasikan perhatian. [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao & Cukurova (2026)]] menambahkan bahwa ringkasan diskusi yang dihasilkan LLM dapat bertindak sebagai [[scaffolding|perancah]] navigasional di forum asinkron besar — memperluas paparan sejawat siswa dan kondisi jaringan bagi modal sosial penghubung tanpa membebani siswa atau instruktur dengan beban kerja meringkas.
- **Analitik peringatan dini bagi pembelajar daring berisiko.** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] menunjukkan bahwa [[machine-learning|machine learning]] yang dapat ditafsirkan atas log interaksi konten memprediksi kemajuan tingkat modul dan menandai luaran putus kuliah ("Tidak ada penyerahan") dalam kursus [[cs-education|pemrograman]] daring berskala besar hingga 7–8 hari sebelum tenggat modul, memberi instruktur daring jendela konkret untuk [[teacher-role|campur tangan]] pada siswa yang tidak terlibat alih-alih menemukan kegagalan hanya setelah terjadi.
- **Keterjangkauan dan kecepatan.** AI dapat menghasilkan materi kursus dengan sebagian kecil biaya tradisional — MAIC menurunkan produksi kursus MOOC dari sekitar \$25K/60 jam menjadi di bawah \$2/30 menit.

## Tantangan pengajaran daring di era AI

Medium daring dan AI generatif bergabung untuk memperkuat sekelompok tantangan tertentu yang harus dihadapi instruktur secara langsung. Ketika pengajaran tatap muka dapat bersandar pada kehadiran, akuntabilitas langsung, dan pengawasan, pengajaran daring harus merancangnya secara eksplisit.

### Integritas akademik dan kecurangan

Kursus daring sudah menghadirkan tantangan pengawasan — pengawasan tatap muka sering tidak mungkin bagi pembelajar yang tersebar dan asinkron. AI generatif memperparahnya dengan membuat karya yang dihasilkan AI tak terbedakan dari karya siswa dan dengan memungkinkan jalan pintas bergaya kecurangan kontrak dalam skala besar. Bukti basis pengetahuan ini tentang [[academic-integrity|integritas akademik]] dan [[ai-misuse-learning-harm]] menunjukkan bahwa penyalahgunaan lebih didorong oleh siswa yang menyalin jawaban alih-alih belajar daripada oleh kesalahan AI. Karena penilaian daring sering tidak dapat membedakan kerja berbantuan dari kerja mandiri, penyalahgunaan dapat menggelembungkan nilai langsung sambil menggerus pengetahuan yang tahan lama — celah terpersepsi-vs-aktual yang sangat berbahaya pada jarak jauh ketika instruktur memiliki visibilitas lebih kecil terhadap proses siswa. Alat deteksi adalah respons parsial yang diperdebatkan ([[ai-detection|deteksi plagiarisme AI]], [[remote-proctoring]]), dan sikap basis pengetahuan ini lebih menyukai penilaian [[authentic-assessment|autentik]] yang [[process-oriented-assessment|mengungkap proses]] daripada perlombaan senjata deteksi.

### Penyalahgunaan AI dan pengalihan kognitif

Risiko paling serius adalah pembelajar daring mengalihdayakan justru kerja kognitif yang membangun pemahaman. [[genai-performance-vs-learning|Celah kinerja–pembelajaran]] menunjukkan AI generatif dengan mudah mendongkrak kinerja langsung sambil melewati pemrosesan mendalam yang dibutuhkan untuk pembelajaran yang tahan lama. Bukti lapangan bersifat langsung:

- Sebuah RCT kausal (~1,000 siswa matematika SMA) menemukan bantuan AI tanpa pagar pengaman menaikkan kinerja latihan **+48%** tetapi menurunkan skor [[summative-assessment|ujian]] tanpa bantuan dan tanpa buku **−17%** — siswa yang tidak pernah memiliki akses AI mengungguli mereka yang memilikinya. Tutor petunjuk-bukan-jawaban yang [[guardrails|berpagar pengaman]] menghapus kerugian itu.
- Data perilaku skala populasi (3.2M interaksi ALEKS) menemukan waktu belajar pada masalah yang rentan AI turun **−26.9%** setelah rilis ChatGPT, dengan **penurunan 25% peluang butir retensi terawasi yang benar** — efek yang lenyap di bawah pengawasan, sehingga menempatkannya pada penggunaan AI di luar platform.

Pembelajaran daring sangat rentan: mediumnya sudah menjauhkan pembelajar dari akuntabilitas langsung, dan kerja berbasis layar yang berjalan mandiri mengundang jalan pintas "minta jawabannya" yang diidentifikasi [[cognitive-offloading|pengalihan kognitif]] [[research-methods-aied|penelitian]] sebagai mekanisme kerugian intinya. Responsnya bukan melarang AI tetapi menerapkan [[guardrails]] — perancah petunjuk-bukan-jawaban, pembumian pengetahuan, dan [[human-in-the-loop-ai|pengawasan manusia]] — sehingga AI menambah alih-alih menggantikan kerja kognitif pembelajar.

### Tantangan lain

- **Fasilitasi AI yang terlalu bersemangat.** Fasilitator LLM terlalu bersemangat untuk campur tangan dalam diskusi daring, yang dapat mengganggu peserta dan menggagalkan percakapan yang baik; kehati-hatian manusia adalah model yang lebih baik ([[llm-facilitation-timing-online-discussions|Tsirmpas dkk.]]).
- **Erosi motivasi.** Ketersediaan yang dipersepsikan atas jalan pintas AI yang tanpa usaha mengurangi [[motivation|motivasi]] otonom dan ketekunan, memperparah kerugian pembelajaran.
- **Keadilan dan kesenjangan digital.** Akses ke perangkat yang andal, konektivitas, dan AI berkualitas tinggi bervariasi; pembelajaran daring dengan AI dapat melebarkan alih-alih mempersempit celah [[equity-in-ai-education]] ([[digital-divide]]).
- **Privasi data dan kepercayaan.** Platform daring mengumpulkan data pembelajar yang kaya; sistem AI memunculkan kekhawatiran transparansi dan privasi ([[privacy]]), terutama bagi orang dewasa yang menyeimbangkan kerja dan studi.
- **Kesiapan organisasi.** Runtuhnya KhanMigo — pembelajar yang sebenarnya tidak terlibat dengan chatbot itu, dengan bukti perolehan yang terbatas — memperingatkan bahwa kapabilitas teknis harus dipasangkan dengan [[governance|tata kelola]] dan kesiapan organisasi.

### Validitas penilaian ketika suatu penyerahan dapat dihasilkan tanpa pembelajar

Jika pengawasan tidak mungkin dan agen dapat menyelesaikan pekerjaannya, respons yang disukai basis pengetahuan ini adalah mengubah apa yang dianggap bukti alih-alih mengawasi lebih keras. Empat respons desain berulang dalam literatur terkini.

**Pasangkan tugas rentan dengan kembarannya.** [[roe-assessment-twins-2026|Roe, Perkins dan Giray (2026)]] mempertahankan penilaian yang bernilai pedagogis tetapi rentan AI — esai yang dikerjakan di rumah atau analisis kasus — dan menambahkan tugas kedua yang kurang rentan yang menilai *[[learning-gains|luaran pembelajaran]] yang sama*, dijadwalkan cukup berdekatan untuk verifikasi silang dan dinilai secara saling bergantung. Pemetaan mereka berjalan pada enam untaian bukti validitas Messick, dan proses desainnya terdiri dari tiga langkah: identifikasi kerentanannya, selaraskan luaran dan pilih kembarannya, lalu kembangkan penilaian yang menghubungkan keduanya. Variasi kasus singkat, penjelasan atas satu keputusan kunci, atau [[oral-assessment|pembelaan lisan]] singkat dapat berfungsi sebagai kembarannya.

**Sasar kepemilikan alih-alih kepengarangan.** [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani dan Buckingham Shum]] berargumen bahwa kepengarangan campuran manusia–AI melemahkan beberapa bentuk bukti validitas, dan mengusulkan **integritas ko-kepengarangan** sebagai bukti validitas tersendiri: dilanggar ketika siswa menyerahkan konten yang dihasilkan AI yang tidak mereka pahami. Untuk memeriksa pemahaman dalam skala besar mereka melaporkan **AI Viva**, agen percakapan yang menjalankan viva voce hibrida dengan pertanyaan pemahaman yang jenis dan kompleksitasnya dapat dikendalikan, tervalidasi oleh pendidik ahli dan spesialis penilaian. Bagi kursus daring ini adalah bentuk verifikasi yang benar-benar terukur, dan ia menghasilkan bukti tentang pemahaman alih-alih tentang siapa yang berada di ruangan.

**Pindahkan ujian lisan ke daring.** [[asynchronous-oral-assessment-2026|Pentland, Lowenthal dan Krier (2026)]] menyampaikan prompt tepat waktu dan meminta siswa merekam respons webcam singkat yang dibatasi waktu dan tidak dapat mereka tinjau ulang, dinilai terhadap rubrik tertanam dengan transkrip yang dihasilkan otomatis. Pada dua studi — uji coba akuntansi tingkat menengah dan kursus analitik data — siswa mendapat skor lebih tinggi pada penilaian ini daripada pada ujian pilihan ganda tatap muka (signifikan pada studi kedua, tren positif pada studi pertama), dengan korelasi lintas format yang moderat mendukung validitas konvergen; siswa melaporkan mempersiapkan diri secara berbeda dan menggunakan strategi belajar yang lebih aktif. Format ini menjawab masalah asinkron secara langsung: pemikirannya dilakukan secara langsung pada waktu yang dipilih siswa, dengan biaya administratif yang tidak berskala dengan ukuran kohort.

**Urutkan pekerjaan sehingga penalarannya dikomitmenkan lebih dulu.** [[brcic-effortless-trap-productive-struggle-2026|Brcic dan Frljic (2026)]] membingkai pertanyaan desain sebagai **penempatan** alih-alih izin, dan bukti kausal yang mereka himpun menunjukkan hasilnya berbalik hanya karena penempatan — pembantu tanpa pagar pengaman yang sama yang membuat siswa SMA sekitar **17% lebih buruk** pada ujian tanpa bantuan tidak menimbulkan kerugian setelah dibangun ulang untuk menahan jawaban, sementara [[intelligent-tutoring|tutor]] yang direkayasa dengan baik kurang lebih **menggandakan** pembelajaran. Diagnostik mereka adalah yang perlu dipertahankan: *jika membiarkan AI masuk membuat tugas terasa tanpa usaha, AI itu berada di tempat yang salah.* Secara operasional itu menghasilkan urutan yang dapat dituliskan kursus daring ke dalam tugasnya — pikirkan, komitmenkan, gunakan AI, kritik, revisi, jelaskan — ketika langkah komitmen itulah yang membuat sisanya dapat dinilai, karena artefak yang dihasilkan dari nol tidak memiliki riwayat revisi untuk diinterogasi. Di bawahnya terdapat keadaan yang oleh basis pengetahuan ini disebut [[metacognitively-discordant-completion-genai-2026|penyelesaian yang diskordan secara metakognitif]]: pekerjaan benar dan lengkap yang diserahkan oleh siswa yang tahu bahwa pemahamannya tidak pernah datang, yang dalam kursus asinkron tak terbedakan dari keberhasilan kecuali desainnya menuntut sesuatu yang lebih.

Kombinasi apa pun yang dipilih instruktur, satu kendala harus membentuknya. Studi daring sering merupakan satu-satunya opsi yang dapat diakses — siswa memilihnya karena pekerjaan, tanggung jawab pengasuhan, disabilitas, atau geografi — sehingga verifikasi harus **kecil dan proporsional**: penjelasan terekam yang singkat, penerapan yang dipersonalisasi, respons atas pertanyaan yang dipilih instruktur, jejak keputusan yang dianotasi, pemeriksaan individual berisiko rendah. Deteksi membawa biaya keadilannya sendiri di sini, karena alat yang menandai penulis non-asli secara tidak proporsional menghasilkan positif palsu ([[ai-detection]], [[digital-divide]]).

## Strategi pedagogis yang disarankan untuk pengajaran dan pembelajaran daring

- **Pembelajaran aktif dan interaktif.** Utamakan strategi yang membuat siswa terus melakukan dan berpikir alih-alih menerima secara pasif — [[active-learning]], latihan interaktif, dan dialog [[socratic-method|Sokrates]]. AI yang memancing penalaran (alih-alih memasok jawaban) mempertahankan perjuangan produktif dan [[desirable-difficulties|kesulitan yang diinginkan]] yang membangun pembelajaran tahan lama.
- **Dukungan terpancah dan terpandu.** Gunakan [[scaffolding|perancah]] yang memudar seiring kemajuan pembelajar, dan rancang dukungan [[self-regulated-learning]] agar pembelajar mengarahkan pembelajarannya sendiri alih-alih bergantung pada alat.
- **Pembelajaran kolaboratif dan berbasis diskusi.** Susun diskusi daring dan [[group-work|kerja kelompok]] secara sengaja; gunakan aktivitas [[collaborative-learning]] dan, ketika AI berpartisipasi, kalibrasi fasilitasinya dan perannya sebagai sejawat.
- **Desain peran adalah intervensinya, bukan alatnya.** Dalam kursus pascasarjana daring, menugaskan peran moderator, analis, dan penyanggah yang berotasi kepada [[learners|pembelajar]] dan pasangan AI generatif mengangkat skor isi peta pikiran kelompok dari M = 3.65 menjadi M = 4.59 pada skala SOLO 1-5 (z = 3.771, p < 0.001), sementara jumlah simpul dan cabang tetap datar secara statistik ([[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng dkk. (2026)]]).
- **Penilaian autentik yang mengungkap proses.** Bergeserlah ke [[authentic-assessment|penilaian autentik]] dan penilaian yang menangkap proses — draf, pembelaan lisan, penjelasan diri, [[eportfolio|portofolio]] reflektif — yang lebih tahan AI dan mengungkap pemahaman sejati.
- **Jalur personal dan adaptif.** Gunakan [[personalized-learning|personalisasi]] dan aktivitas [[adaptive-learning|adaptif]] yang dimungkinkan AI untuk menyesuaikan laju dan kesulitan, sambil menjaga personalisasinya mendalam (pengurutan tugas, kalibrasi kesulitan) alih-alih sekadar tingkat permukaan (contoh yang disesuaikan).
- **Kehadiran sosial dan pembangunan komunitas.** Kembangkan kehadiran sosial dan [[collaborative-learning|komunitas]] secara sengaja — inti kerangka [[community-of-inquiry]] — melalui AI pendamping, pertemuan sinkron, dan interaksi sejawat, karena isolasi daring adalah hambatan kunci bagi [[student-engagement|keterlibatan]] dan rasa memiliki. Di era AI ini berarti mengurasi ketiga kehadiran (kognitif, sosial, pengajaran) bahkan ketika wacana yang dihasilkan mesin mempersulit siapa yang "hadir" (lihat [[community-of-inquiry]]).
- **[[design-thinking|Berpikir desain]] campuran.** Untuk format hibrida, terapkan prinsip [[learning-design]] untuk memutuskan apa yang paling baik dilakukan secara sinkron vs. asinkron dan daring vs. tatap muka, dan bagaimana AI mendukung masing-masingnya.
- **Namai peran AI, dan periksa apakah siswa masih memiliki peran.** "Siswa boleh menggunakan AI" terlalu luas untuk dijadikan dasar desain. Peran membawa konsekuensi pedagogis yang berbeda — studi tentang AI generatif dalam pendidikan pemasaran membedakan **tutor, rekan tim, dan alat** dan menunjukkan masing-masing membentuk kehadiran pengajaran, sosial, dan kognitif secara berbeda ([[genai-marketing-education-roles-2026|GenAI dalam Pendidikan Pemasaran]]) — sehingga aktivitas daring harus dapat menyatakan pembagian kerjanya: tugas AI di sini adalah X, tugas siswa adalah Y. Jika Y mengandung sedikit pemikiran, aktivitasnya perlu dirancang ulang alih-alih diberi kebijakan yang lebih ketat.
- **Urutkan diskusi sebagai posisi, tantangan, pertimbangan ulang.** Formula asinkron konvensional berupa mengunggah sekali dan membalas dua kali bersifat dangkal sekaligus dapat diselesaikan agen. Struktur yang lebih kuat meminta siswa berkomitmen pada suatu interpretasi, menghadapi contoh kontra atau kritik, lalu menjelaskan bagaimana penalaran mereka bergerak; yang dinilai adalah pergerakan antar gagasan alih-alih jumlah unggahan. Ini juga memindahkan lokasi kehadiran pengajaran: membalas secara mekanis pada puluhan unggahan adalah bentuknya yang paling tidak bernilai, sementara menyintesis pola lintas diskusi — asumsi yang terus berulang, ketidaksepakatan yang layak dinamai, contoh kontra yang mengganggu konsensus — adalah bagian yang tidak dijalankan oleh agen mana pun dalam literatur ini.
- **Tata kelola dengan manusia dalam lingkar.** Jaga pendidik dan [[teacher-role|instruktur]] tetap dalam lingkar atas alat AI, berlandaskan [[tpack|pengetahuan konten pedagogis]], sehingga niat pedagogis — bukan default alatnya — yang menggerakkan desain.

## Implikasi bagi instruktur daring dan perancang pembelajaran

- **Beri pagar pengaman pada AI, jangan hanya menyediakannya.** Gunakan [[scaffolding|perancah]] petunjuk-bukan-jawaban yang menjaga kerja kognitif pembelajar tetap dalam lingkar; RCT [[guardrails|tutor berpagar pengaman]] menunjukkan ini menghapus penalti ujian yang disebabkan akses tanpa pagar. Lihat konsep [[guardrails]] untuk lapisan desain lengkapnya ([[prompt-engineering|prompting]], pembumian [[rag]], pelatihan, QA).
- **Rancang penilaian yang tahan AI dan diawasi/tanpa bantuan.** Karena penilaian daring sering tidak dapat membedakan kerja berbantuan dari kerja mandiri, sertakan penilaian tanpa buku, terawasi, atau yang mengungkap proses untuk memunculkan dan mencegah penyalahgunaan ([[ai-misuse-learning-harm]]).
- **Ajarkan literasi AI secara eksplisit.** Bantu siswa mengenali pola ketergantungan dan mengalibrasi kepercayaan ([[ai-literacy]]); bangun [[self-regulated-learning|regulasi diri]] dan [[metacognition|metakognisi]] untuk melawan pengalihan.
- **Tanamkan AI di dalam lingkungan belajar, bukan sebagai tambahan eksternal.** Asisten yang dibangun khusus dan disetel kontekstual yang tertanam dalam kursus (seperti [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]]) mengungguli chatbot eksternal generik dan meningkatkan penerimaan.
- **Kalibrasi fasilitasi AI ke arah kehati-hatian manusia.** Ketika menggunakan AI untuk memoderasi diskusi, utamakan pengaturan yang campur tangannya jarang ([[llm-facilitation-timing-online-discussions|Tsirmpas dkk.]]).
- **Rancang untuk kendala kehidupan orang dewasa.** Bagi pembelajar dewasa dan jarak jauh, utamakan akses seluler, kemampuan luring, dan ketersediaan asinkron ([[ai-adult-learning-guidelines-dis2026|pedoman AI-ALOE]]).
- **Format yang dipadatkan perlu dirancang ulang, bukan dipadatkan.** Kursus pascasarjana asinkron enam minggu bagi guru yang bekerja adalah kendala institusional yang menuntut rancangan ulang yang bertujuan alih-alih kursus lima belas minggu yang dipadatkan, dan dialog AI membawa kehadiran instruksional ke jam-jam larut yang tidak dapat diisi instruktur [[packard-thinking-partner-framework-adult-learners-2026|Packard dkk. (2026)]].
- **Rancang bersama siswa dan staf, dan bangun tata kelola.** Pengembangan partisipatif, sponsorship senior, kolaborasi lintas unit, dan [[governance|tata kelola]] yang kokoh adalah faktor pemungkin bagi adopsi GenAI yang bertanggung jawab.
- **Asumsikan agen akan mencoba setiap aktivitas tanpa pengawasan, dan rancanglah dari asumsi itu.** Uji tiga pertanyaan itu cepat dan membuka aktivitas yang lemah: dapatkah sistem AI menyelesaikan ini tanpa siswa memahami materinya; aktivitas kognitif apa yang seharusnya menghasilkan pembelajarannya; bukti apa yang akan menunjukkan siswa melakukannya. Ketika jawaban pertama adalah ya dan dua lainnya sulit dijawab, masalahnya ada pada desain pembelajaran alih-alih [[educational-policy-ai|kebijakan AI]].
- **Jaga verifikasi proporsional terhadap risikonya.** Ketika kompetensi harus disertifikasi, utamakan tugas kembar, pembelaan lisan asinkron, atau pemeriksaan pemahaman singkat alih-alih pemantauan menyeluruh; jaga sisa kursus tetap fleksibel bagi pembelajar yang bergantung pada fleksibilitas itu.
- **Gunakan analitik untuk mendukung, bukan menggantikan, pengajaran.** Manfaatkan [[learning-analytics]] untuk meramalkan keterlibatan dan menyasar dukungan, tetapi jaga [[human-in-the-loop-ai|pengawasan manusia]] tetap sentral.

## Miskonsepsi Umum

**"Pengajaran daring adalah pengajaran kelas yang disampaikan melalui layar."** Ia adalah latar pedagogis yang khas, dan AI mendarat secara berbeda di dalamnya. TPACK yang dilaporkan sendiri untuk pengajaran sains terintegrasi AI lebih tinggi pada calon guru tahun akhir di universitas berbasis kampus (**64.0%**) daripada di universitas pendidikan jarak jauh (**47.4%**), dengan domain terlemah di kedua latar bersifat pedagogis. Latar jarak jauh memperparah celah persiapan yang sudah ada alih-alih menerima dukungan yang sama.

**"Menambahkan asisten AI ke kursus meningkatkan keterlibatan."** Keterlibatan bergantung pada asisten yang dibangun khusus dan berada di dalam lingkungan. Asisten AIDA milik Open University menaikkan keterlibatan — menggandakan waktu penggunaan dalam uji coba eksploratori — dan kondisi desain itulah temuannya: kapabilitas yang sama yang dipasang sebagai alat eksternal tidak merekrut perilaku yang sama. Tautan chatbot generik di kerangka kursus bukanlah intervensi yang diteliti.

**"AI menaikkan kinerja, jadi ia menaikkan pembelajaran."** Dalam latar daring divergensinya sama seperti di ruang kelas: sebuah [[rct]] menemukan bantuan AI tanpa pagar pengaman menaikkan kinerja latihan tetapi *menurunkan* skor ujian tanpa bantuan, sementara tutor "petunjuk-bukan-jawaban" menghapus kerugian itu. Kursus daring lebih bergantung pada penilaian asinkron, sehingga celah antara kinerja berbantuan dan tanpa bantuan adalah tempat validitas dimenangkan atau dikalahkan.

**"Validitas penilaian adalah pertanyaan kebijakan penilaian nilai."** Ia adalah pertanyaan desain yang diciptakan oleh mediumnya: ketika suatu penyerahan dapat dihasilkan tanpa kehadiran pembelajar, validitas bergantung pada apakah tugasnya menghasilkan bukti bahwa pembelajarlah yang mengerjakan pekerjaan itu. Merancang ulang tugasnya menjawab hal ini; memperketat hukuman atas pelanggaran tidak.

## Konsep terkait
- [[pedagogical-patterns]] — Konteks yang membuat pengurutan menanggung beban, karena sistem tidak dapat melihat suatu percobaan
- [[assessment-validity]] — validitas inferensi dari karya yang diserahkan ke pembelajaran
- [[agentic-ai]] — sistem otonom yang mengoperasikan alat dan platform, termasuk LMS
- [[community-of-inquiry]] — Community of Inquiry
- [[pedagogy]]
- [[learning-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[ai-misuse-learning-harm]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[student-engagement]]
- [[digital-divide]]
- [[governance]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[authentic-assessment]]
- [[guardrails]]
- [[ai-detection]]

## Artikel terkait
- [[ai-agents-complete-lms-assessment-validity-2026]] — Agen otonom menyelesaikan penilaian LMS tanpa pengawasan dari awal sampai akhir: masalah validitas penilaian (Hadjisolomou & El-Haddad 2026)
- [[roe-assessment-twins-2026]] — Kembar penilaian: memasangkan tugas rentan GenAI dengan tugas yang kurang rentan dan dijadwalkan berdekatan pada luaran yang sama
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Integritas ko-kepengarangan sebagai bukti validitas, dan AI Viva sebagai verifikasi terukur
- [[asynchronous-oral-assessment-2026]] — Penilaian lisan asinkron: rekaman terbatas waktu yang tidak direvisi, dinilai terhadap rubrik tertanam
- [[brcic-effortless-trap-productive-struggle-2026]] — Jebakan tanpa usaha: penempatan AI alih-alih izin atau larangan
- [[metacognitively-discordant-completion-genai-2026]] — Penyelesaian yang diskordan secara metakognitif: pekerjaan benar yang diserahkan tanpa pemahaman
- [[decreasing-digital-distraction-college-online-learning-2026]] — Strategi regulasi diri mana yang bertepatan dengan distraksi digital rendah (530 siswa)
- [[song-genai-learning-partner-srl-over-time-2026]] — SRL sebagai bakat yang stabil dan keadaan yang berfluktuasi; metakognisi dan kesejahteraan menurun sepanjang semester
- [[genai-marketing-education-roles-2026]] — AI sebagai tutor, rekan tim, dan alat: peran dan efeknya pada kehadiran
- [[kirsanov-beyond-detection-ai-online-assessments-2026]] — Melampaui deteksi: desain penilaian untuk latar daring
- [[reconceptualizing-community-inquiry-generative-ai]] — Mengonseptualisasi ulang Community of Inquiry di era AI generatif
- [[lock-integrating-ai-online-learning-higher-ed-2025]] — Mengintegrasikan AI dalam pembelajaran daring di pendidikan tinggi: tinjauan literatur kritis empat tema
- [[mooc-to-maic]] — Dari MOOC ke MAIC: Membentuk Ulang Pengajaran dan Pembelajaran Daring melalui Agen yang Digerakkan LLM
- [[learnmate2-llm-adaptive-learning]] — LearnMate²: Sistem Dukungan Personal dan Adaptif untuk Pembelajaran Daring
- [[llm-facilitation-timing-online-discussions]] — Kecenderungan Fasilitator Manusia dan LLM dalam Diskusi Daring
- [[elevate-genai-virtual-tutors]] — ELEVATE: Tutor Virtual GenAI yang Berpusat pada Manusia
- [[conversational-ai-tutors-framework]] — Jalan menuju Tutor AI Percakapan
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — Menerapkan AIDA di Open University
- [[ai-adult-learning-guidelines-dis2026]] — Pedoman Merancang Teknologi AI untuk Mendukung Pembelajaran Orang Dewasa
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — DeepTutor: Menuju Tutoring Personal Agentik
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Membuat temuan ML dapat diakses guru di kelas campuran
- [[zhang-ml-student-progress-programming-2026]]
- [[personalized-ai-generated-videos-preference-2026]] — Siswa lebih menyukai video personal yang dihasilkan AI daripada video rekaman manusia yang tidak personal (Tomlinson dkk. 2026)
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — Desain Pembelajaran Berbasis Ringkasan yang Dihasilkan AI di Forum Diskusi Daring
- [[ai-training-science-teacher-tpack-distance-2026]] — Calon guru berbasis kampus melaporkan TPACK lebih tinggi untuk pengajaran sains terintegrasi AI daripada rekan pendidikan jarak jauh (64.0% versus 47.4%)
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] — Desain peran adalah intervensinya, bukan alatnya
- [[packard-thinking-partner-framework-adult-learners-2026]] — Kursus pascasarjana asinkron enam minggu bagi guru yang bekerja: rancang ulang formatnya alih-alih memadatkannya

- [[aggarwal-genai-cybersecurity-2026]] — 19 siswa di dua kampus: pendaftaran bersama tidak menghasilkan interaksi lintas kampus bagi sebagian siswa (Aggarwal 2026)

