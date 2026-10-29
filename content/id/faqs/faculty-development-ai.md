---
title: "Bagaimana saya merancang pengembangan fakultas untuk AI yang benar-benar mengubah praktik?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [faculty-ai-competencies, top-10-findings-ai-education-instructors]
weight: 65
type: faq
foundations: [educational-development, teacher-role, tpack, teacher-ai-competency]
methods: [mixed-methods-research]
research_method: [survey, case study]
audience: [faculty developers, administrators]
level: [higher ed, teacher education, k 12]
institutions: [change-management]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/faculty-development-ai
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Sekarang bulan Februari. Provost Anda telah mengumumkan inisiatif AI dengan pos anggaran, dan Anda punya satu semester untuk membuatnya tampak di ruang kelas. Atau Anda menjalankan enam lokakarya musim gugur lalu, ruangannya penuh, dan pengajaran yang Anda amati tidak berubah. Atau seorang dekan mengajukan pertanyaan lugas pada saat penyusunan anggaran: uang itu membeli apa?

Ketiganya berasal dari cacat desain yang sama. Sebuah lokakarya menunjukkan kepada orang apa yang dilakukan sebuah alat. Praktik berubah ketika seorang guru menghabiskan waktu terstruktur yang didampingi untuk sebuah masalah di mata kuliahnya sendiri, cukup lama agar kebiasaan baru menggantikan yang lama, dengan institusi mengatakan ya pada eksperimen itu alih-alih sekadar menoleransinya.

Intinya untuk rapat: standarkan siklus sesi ketika setiap peserta membawa artefak mata kuliah yang nyata dan pulang dengan artefak yang sudah direvisi, letakkan verifikasi, pengungkapan dan kendali risiko di dalam dokumen kerja alih-alih di ceramah etika penutup, bentangkan program melewati satu hari dan pasangkan dengan mentoring, jalankan kohort khusus disiplin, dan laporkan artefak yang dihasilkan orang pada tindak lanjut, bukan seberapa percaya diri mereka pada sore terakhir.

## Versi singkat

**1.** Jangkarkan setiap sesi pada artefak dari mata kuliah peserta sendiri, dan akhiri sesi dengan artefak itu sudah direvisi.

**2.** Letakkan verifikasi, pengungkapan dan kendali risiko di dalam templat kerja, di tempat hal itu dipakai, sehingga peserta yang cemas punya tempat untuk menaruh kekhawatirannya.

**3.** Belanjakan jamnya untuk penilaian dan rubrik, bidang terlemah pada garis dasar dan yang perolehannya terukur paling besar.

**4.** Jalankan kohort [[discipline-specific-aied|khusus disiplin]], lalu bedakan di dalamnya menurut pengalaman.

**5.** Amankan kondisinya: izin bereksperimen yang dinyatakan, waktu yang dilindungi, materi dalam bahasa yang dipakai fakultas Anda bekerja.

**6.** Evaluasi artefak yang direvisi setelah jeda, plus satu indikator relasional, dan perlakukan skor kepuasan sebagai derau.

## Jalankan setiap sesi pada mata kuliah peserta sendiri

Perbandingan paling bersih di sini adalah [[faculty-development-centers-genai-training-optimization-2026|Bi dkk. (2026)]], yang menyurvei 568 fakultas di lima universitas dan menjalankan kuasi-eksperimen dengan 160 di antaranya. Kedua kelompok mendapat empat lokakarya 90 menit selama minggu-minggu berurutan, dengan waktu kontak, platform dan dukungan fasilitator yang identik. Isinya berbeda. Satu kelompok mendapat pengembangan fakultas GenAI konvensional, kelompok lain siklus terstruktur berupa perumusan prompt, telaah keluaran, revisi materi mata kuliah dan refleksi tertulis terhadap templat tujuh komponen yang mencakup tujuan, batasan tugas, kriteria penilaian, verifikasi, pengungkapan dan kendali risiko.

Kelompok terstruktur mencetak skor lebih tinggi pada ketujuh dimensi kesiapan. Keunggulan terbesarnya ada pada desain prompt, sekitar dua simpangan baku, dan hanya kelompok inilah yang perolehan desain prompt-nya bertahan pada uji tertunda; perolehan kelompok konvensional yang lebih kecil telah jatuh di bawah garis dasar pada tindak lanjut.

Dua hasil lain menjelaskan mengapa demonstrasi tidak menular. Dalam [[pishtari-teacher-ai-training-learning-design-2026|studi dalam-subjek dengan 13 guru pendidikan tinggi]], akses chatbot menaikkan porsi aktivitas yang mencapai dua atau lebih tugas Bloom tingkat tinggi dari 41,7% menjadi 91,7% (p = 0,01) dan memangkas upaya kognitif yang dirasakan dari median 6,33 menjadi 3,33 (p = 0,004). Pelatihan [[prompt-engineering|perumusan prompt]] pedagogis yang dilapiskan di atasnya tidak lebih jauh memperbaiki kualitas desain, dan sedikit menaikkan upaya. Sementara itu, dalam [[teachers-collaborative-evaluation-ai-content-2026|lokakarya dengan 60 guru sains sekolah menengah]], unsur yang produktif adalah telaah kolaboratif atas pertanyaan penilaian yang dihasilkan ChatGPT, dan itulah yang memunculkan masalah ketepatan konseptual serta risiko memperkuat [[misconceptions|miskonsepsi]].

Apa yang dibagi studi-studi itu: pembelajarannya datang dari mengritik dan merevisi materi. Orang memperbaiki benda yang ada di depan mereka, dan mereka memperbaikinya lebih cepat ketika seorang kolega ikut membacanya.

## Berhenti memperlakukan keterampilan sebagai keping yang hilang

Diagnosis yang menggoda adalah kesenjangan kapabilitas, yang ditutup dengan pengajaran yang lebih baik. [[ai-teaching-innovation-ai-tpack-2026|Bai dan Hsieh (2026)]] menyurvei 898 dosen universitas pada skala [[tpack|AI-TPACK]] dan menemukan bahwa guru yang memahami cara kerja alat generatif, atau dapat mengoperasikannya dengan cakap, tidak lebih mungkin melaporkan penemuan dan penerapan praktik pengajaran baru daripada mereka yang tidak bisa. Konstruk AI-TPACK terpadu tidak memiliki jalur langsung ke perilaku inovatif sama sekali. Pengaruhnya berjalan sepenuhnya melalui [[ai-literacy|literasi AI]], [[self-efficacy|efikasi diri]] mengajar dan identitas profesional.

Itu mengubah untuk apa sebuah sesi diadakan. Penelusuran alat tidak menyentuh satu pun dari ketiganya. Sesi ketika seorang guru menulis ulang tugasnya sendiri, mempertahankan perubahannya dan mendengar seorang kolega menyetujui bahwa itu lebih baik menyentuh ketiganya sekaligus, dan itulah sebabnya siklus artefak mengalahkan demo bahkan ketika isinya lebih tipis.

Implikasi desainnya tidak nyaman bagi siapa pun yang memegang dek slide: Anda tidak dapat menceramahi seorang guru agar melihat dirinya sebagai jenis guru yang bekerja seperti ini. Anda dapat menempatkannya dalam situasi ketika ia bertindak seperti itu satu kali, dengan dukungan, dan membiarkan buktinya menumpuk.

## Letakkan bagian yang sulit di dalam templat yang mereka pakai

[[designing-ai-professional-development-itpack-2026|Kerangka i-TPACK Dogan (2026)]] berasal dari tinjauan PRISMA atas pengembangan profesional AI ditambah pencarian yang memunculkan 17 studi lain. Kerangka itu menyelaraskan lima domain pengetahuan (pengetahuan teknologi cerdas, pengetahuan konten teknologi, pengetahuan pedagogis teknologi, i-TPACK terpadu, dan etika AI) dengan empat jalur berbasis bukti: [[active-learning|pembelajaran aktif]], model dan contoh, pembimbingan serta dukungan ahli, dan [[feedback|umpan balik]] serta refleksi, yang diatur lima prinsip mulai dari Sinergi Kolektif alih-alih Silo hingga Fleksibilitas di dalam Struktur.

Kritik paling tajam kerangka itu terhadap bidang ini adalah bahwa etika ditangani secara dangkal atau sama sekali tidak ada dalam banyak program yang sudah berjalan, dan perbaikannya adalah penempatan. Verifikasi, pengungkapan dan kendali risiko semestinya berada di dalam dokumen yang dipakai peserta sepanjang minggu, bukan di 20 menit terakhir sesi terakhir. Templat dengan kolom kendali risiko akan diisi; segmen penutup tentang pemakaian yang bertanggung jawab akan diangguki.

Batas kerangka itu adalah sifatnya yang konseptual, tanpa data hasil tingkat program. Pakailah sebagai daftar periksa desain, bukan sebagai bukti bahwa desainnya berhasil. Bukti hasilnya ada pada studi di atas dan di bawah ini.

## Belanjakan jamnya untuk penilaian

Jika program Anda punya ruang untuk satu topik mendalam, pilih penilaian. Dalam program delapan jam [[genai-pd-ai-pck-learning-gain-2026|Talebzadeh (2026)]], empat sesi dua jam dengan 163 guru dan calon guru, total AI-PCK naik dari 151,65 menjadi 220,14 (*d* = 2,36, *p* < 0,001). Efek komponen terbesar adalah Rubrik Penilaian (*d* = 2,19), yang juga merupakan bidang terlemah pada prates. Perolehannya lebih sempit pada metode pengajaran daripada pada penilaian.

Rubrik juga tempat kecemasan di ruangan dapat didayagunakan. Peserta yang gelisah tentang siswa yang bersandar pada sebuah model dapat menulis baris rubrik yang membuat penalarannya terlihat, yang mengubah kekhawatiran menjadi keputusan desain dengan tanggal di atasnya.

Anggarkan melewati satu hari. Dalam program yang sama, calon guru memperoleh lebih banyak secara signifikan daripada guru berpengalaman (*p* = 0,033), terutama dalam desain tugas berbasis skenario dan desain rubrik. Guru berpengalaman mengatakan delapan jam terlalu singkat untuk menggeser kebiasaan yang mengakar, dan meminta dukungan jangka panjang berbasis mentor.

## Bangun kohort, lalu bedakan di dalamnya

Jalankan satu lokakarya universal dan Anda akan menghabiskan sebagian besarnya untuk melayani peserta median, yang tidak ada. [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury dan Liu (2026)]] menemukan di antara 127 responden bahwa pengetahuan konten pedagogis yang dipersepsikan sendiri tinggi (M = 4,70) dan pengetahuan konten mendekati langit-langit (M = 5,15), sementara pengetahuan pedagogis teknologi (M = 2,62), pengetahuan konten teknologi (M = 2,75) dan TPACK holistik (M = 2,55) jauh lebih rendah. Pengetahuan konten tidak menunjukkan korelasi signifikan dengan domain terintegrasi teknologi mana pun (r = 0,11-0,15), sehingga penguasaan materi pelajaran tidak terbawa.

Ketiga domain rendah itu berkorelasi r = 0,81-0,91 satu sama lain, yang masuk akal berarti satu kapasitas untuk mengajar dengan alat-alat ini alih-alih tiga keterampilan terpisah. Ajarkan sebagai fondasi bersama dan Anda menghemat dua sesi.

Lalu bagi menurut pengalaman. [[ai-teaching-innovation-ai-tpack-2026|Bai dan Hsieh]] menemukan identitas profesional memprediksi perilaku inovatif hampir dua kali lebih kuat di antara pemakai AI yang jarang dibandingkan pemakai harian, hasil yang berada di batas signifikansi tetapi merupakan penunjuk yang berguna: kerja identitas paling berbuah dengan orang yang nyaris tidak menyentuh alat itu, sementara pemakai sering lebih banyak memperoleh dari proyek interdisipliner daripada dari panduan dasar. [[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]] mengusulkan kohort khusus disiplin sebagai tempat untuk percakapan semacam itu, dengan alasan bahwa seorang fisikawan dan seorang sejarawan tidak sedang memecahkan masalah yang sama.

## Bukalah dengan pertanyaan yang diajukan para skeptis

Catatan autoetnografis [[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw (2026)]] berargumen bahwa resistensi bukan defisit keterampilan. Fakultas yang bertanya apa gunanya mengajar di dunia GenAI tidak bertanya bagaimana memakai alat dengan aman; pertanyaannya bersifat ontologis. Ia membaca GenAI sebagai konsep ambang (transformatif, merepotkan, ireversibel, integratif, terbatas) dan menyimpulkan bahwa kecemasan, resistensi dan kebingungan adalah bagian yang perlu dari melintasinya, bukan cacat yang harus diperbaiki. Rekomendasinya membalik lokakarya standar: buka dengan pertanyaan identitas alih-alih demonstrasi, jalankan kohort khusus disiplin, izinkan garis waktu yang berbeda, dan perlakukan non-adopsi berprinsip yang berdasar pada nilai disiplin sebagai sah. Ia juga memperingatkan bahwa mengomunikasikan aturan dapat meluncur menjadi “ilusi penegakan” yang menggantikan dukungan dengan pesan kepatuhan.

Rasa bersalahnya terukur, dan sebarannya tidak merata. [[vassallo-ai-guilt-complex-faculty-2026|Vassallo (2026)]] menyurvei 109 akademisi dan mengidentifikasi “kompleks rasa bersalah AI”: 35% khawatir pemakaian AI meruntuhkan kredibilitas mereka dan 26% melaporkan merasa sedang “menyontek”, dengan rasa bersalah antisipatif tentang kredibilitas melebihi penyesalan setelah pemakaian, sehingga penderitaannya bersifat sosio-profesional alih-alih privat. Empat profil muncul, Pengadopsi Nyaman (27%), Non-Pemakai yang Merasa Bersalah (29%), Pemakai Berhati-hati (28%) dan Penghindar yang Tertekan Secara Moral (16%). Satu program sedang menangani empat masalah berbeda, dan 29% yang merasa bersalah sambil tidak memakai alat itu membutuhkan sesuatu selain demonstrasi.

Besarnya tugasnya terlihat dalam [[watson-rainie-ai-challenge-faculty-survey-2026|survei AAC&U/Elon atas 1.057 fakultas (Watson dan Rainie, 2026)]]: 68% mengatakan sekolah mereka belum menyiapkan fakultas untuk memakai AI generatif dalam pengajaran dan mentoring, dengan porsi serupa untuk beasiswa. 26% responden sama sekali tidak memakai alat itu, termasuk 40% fakultas seni dan humaniora, dan 82% menyebut resistensi kolega sebagai penghambat adopsi di tingkat departemen.

## Perbaiki kondisi yang tidak bisa diperbaiki kurikulum

Inilah temuan yang perlu dibawa ke rapat pimpinan. Dalam survei 568 fakultas di balik perbandingan di atas, fakultas Kazakhstan melaporkan kesiapan garis dasar yang lebih tinggi daripada rekan mereka di Tiongkok pada ketujuh dimensi, dengan kesenjangan terlebar pada transfer disipliner, desain prompt dan pemahaman dasar. Dalam regresi hierarkis, koefisien Kazakhstan, yang jelas signifikan bila berdiri sendiri, turun menjadi tidak signifikan setelah pemakaian GenAI sebelumnya, pelatihan AI terkini, dukungan institusi, izin yang dipersepsikan, akses sumber daya multibahasa, kejelasan kebijakan dan sensitivitas risiko dimasukkan. Itu pengurangan sekitar empat perlima. Dukungan institusi dan izin yang dipersepsikan membawa bobot positif terbesar, dan sensitivitas risiko adalah satu-satunya prediktor yang bekerja berlawanan dengan kesiapan. Lebih dari dua kali lipat jumlah fakultas Kazakhstan dibandingkan fakultas Tiongkok melaporkan pelatihan terkait AI dalam enam bulan sebelumnya.

Jadi tuas yang tersedia bagi pemimpin program bersifat lokal dan dekat: praktik langsung, izin bereksperimen yang eksplisit, materi dalam bahasa yang benar-benar dipakai fakultas untuk bekerja, dukungan yang terlihat dari unit. Pembingkaian kebijakan nasional tidak membawa kesiapan sendiri. Di tempat sensitivitas risiko menggigit, jawabannya adalah memberinya tempat untuk dijalankan alih-alih meredam kehati-hatian, dan desain rubrik serta rutinitas verifikasi adalah tempat itu.

Dua gesekan praktis termasuk dalam percakapan yang sama. Niat melanjutkan pemakaian adalah dimensi kepuasan berskor tertinggi dalam [[faculty-development-centers-genai-training-optimization-2026|Bi dkk. (2026)]] sementara kegunaan alat adalah yang terendah, sehingga sebagian dari yang terbaca sebagai keengganan adalah gesekan platform. Dan [[ai-emotional-intelligence-teacher-development-2026|Aponte dkk. (2026)]] menunjuk batas kerasnya: AI tidak dapat menutupi kelebihan beban yang kronis, budaya akuntabilitas yang menghukum, kepemimpinan yang lemah, atau tidak adanya waktu yang dilindungi. Mereka berargumen AI hanya menyumbang pada perkembangan sosio-emosional guru sebagai infrastruktur relasional (waktu yang dilindungi untuk mentoring, dialog antarteman, komunitas praktik) dan mengusulkan *densifikasi relasional* sebagai standarnya, dengan menghitung kepercayaan, kesinambungan dukungan dan ko-regulasi alih-alih jam kontak. Dua klaimnya diterjemahkan ke desain program: waktu yang dibebaskan akan diserap kembali sebagai tuntutan tambahan kecuali institusi secara formal mewajibkan waktu itu diinvestasikan ulang, dan agen percakapan dapat diam-diam menggantikan negosiasi manusia yang sulit yang menghasilkan pertumbuhan. Kerangka mereka adalah heuristik, bukan klaim kausal yang teruji.

Jika kondisi itu adalah kondisi Anda, lokakarya yang lebih baik tidak akan memperbaikinya, dan mengatakan demikian lebih berguna daripada menjanjikan sebaliknya.

## Laporkan artefak setelah jeda

Perancah institusional yang layak diselaraskan adalah [[crompton-faculty-technology-integration-standards-2026|Crompton, Burke dan Nickel (2026)]], yang penelitian berbasis desainnya melalui dua siklus makro dan 114 peserta (fakultas dari 28 institusi Amerika Serikat dan 11 negara, ditambah direktur pusat pengajaran dan koordinator akreditasi) menghasilkan enam standar yang mencakup seluruh peran akademik: Pengajar, Koordinator, Pemimpin, Peneliti, Pembelajar dan Kontributor. Kerangka dan standar pendidik yang sudah ada menyasar guru [[k-12|K-12]] atau hanya membahas pengajaran, sehingga pusat yang memetakan tawarannya ke standar ini dapat dipetakan ke penilaian kinerja dan akreditasi, dan itulah juga argumen yang bertahan dalam tinjauan anggaran.

Lalu berhati-hatilah dalam mengevaluasi, karena sebagian besar literatur ini mengukur kesan dari [[self-report-measures|laporan diri]]. Bi dkk. mengukur kesiapan yang dilaporkan sendiri alih-alih pengajaran yang benar-benar dijalankan, dan kelompoknya terbentuk dari pendaftaran sukarela alih-alih randomisasi, sehingga hasilnya adalah asosiasi. [[ai-teaching-innovation-ai-tpack-2026|Bai dan Hsieh]] bersifat lintas-seksi, terpilih sendiri, diambil dari delapan universitas di satu negara, dan mengukur setiap konstruk dari responden yang sama pada satu waktu. [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo dan rekan]] tidak dapat menetapkan arah kausalitas, yang penting karena klaim terkuat mereka, bahwa pengetahuan teknologi berperan sebagai gerbang, adalah klaim yang tidak dapat dipastikan desain lintas-seksi. [[genai-pd-ai-pck-learning-gain-2026|Talebzadeh]] melaporkan efek yang sangat besar tanpa randomisasi, tindak lanjut atau rincian tingkat disiplin, sehingga *d* = 2,36 terbaca sebagai jangka pendek. [[laidlaw-genai-identity-crisis-faculty-2026|Laidlaw]] bersifat autoetnografis, dan [[ai-emotional-intelligence-teacher-development-2026|Aponte dkk.]] menyatakan kerangka mereka konseptual.

Evaluasi yang dapat dipertahankan karena itu mengukur materi mata kuliah yang direvisi peserta, rubrik yang ditulis, tugas yang dirancang. Ia menguji setelah jeda, karena kesenjangan pada Bi dkk. muncul hanya pada tindak lanjut, ketika kelompok konvensional sudah merosot dan kelompok terstruktur belum. Ia memperlakukan kepuasan dan kepercayaan diri sebagai sinyal lemah, karena [[pishtari-teacher-ai-training-learning-design-2026|Pishtari dan rekan (2026)]] mencatat bahwa perolehan kualitas saja tidak membuktikan internalisasi: kualitas desain yang naik dapat sama-sama mencerminkan pendelegasian pekerjaan rutin atau penerimaan struktur yang dihasilkan AI. Dan ia menambahkan setidaknya satu indikator relasional, mengikuti Aponte dkk., karena memperbaiki artefak sambil mengisolasi peserta bukanlah yang dijanjikan program itu.

## Apa yang salah dipahami pemimpin program

Demo yang lebih baik adalah lokakarya yang lebih baik. Waktu kontak dijaga konstan pada empat sesi 90 menit dalam perbandingan Bi dkk., dan kelompok yang merevisi artefak mengalahkan kelompok yang mempelajari alat pada setiap dimensi kesiapan, dengan hanya satu dari dua perolehan itu yang masih tampak pada tindak lanjut.

Kepercayaan diri adalah hasil yang penting. Ia hal paling mudah digeser dan paling sedikit memprediksi. Dalam studi 13 guru itu, upaya yang dirasakan turun sementara lapisan perumusan prompt tidak menambah kualitas desain yang terukur, dan penilaian pada akhir hari akan mencatat keduanya sebagai keberhasilan.

Etika adalah segmen penutup. Tinjauan Dogan menemukan etika ditangani secara dangkal atau tidak ada dalam banyak tawaran, dan perbedaan antara satu kolom templat dan satu slide terakhir adalah apakah ada yang memakainya pada minggu ketiga.

Satu program dapat melayani seluruh fakultas. Survei 127 fakultas itu menggambarkan pengetahuan konten yang mendekati langit-langit di samping TPACK holistik pada 2,55, dan empat profil Vassallo mencakup 29% yang merasa bersalah sambil tidak memakai alat itu. Satu sesi memperlakukan empat audiens sebagai satu.

Para skeptis adalah hambatan yang harus dikelola. Catatan Laidlaw menempatkan resistensi pada tingkat identitas, dan Bai dan Hsieh menemukan identitas memprediksi inovasi hampir dua kali lebih kuat di antara pemakai jarang. Orang yang paling Anda inginkan di ruangan itu adalah orang yang justru diteguhkan kecurigaannya oleh sebuah demonstrasi.

Mandat institusional akan mengangkat programnya. Koefisien Kazakhstan runtuh sekitar empat perlima setelah dukungan institusi dan izin yang dipersepsikan masuk ke dalam model, dan keduanya membawa bobot positif terbesar. Mandat bukan sinyal yang sama dengan izin.

## Apa yang akan kembali kepada Anda

**“Kami tidak punya jamnya.”** Maka belanjakan dengan cara berbeda alih-alih menambahnya. Enam jam yang disusun sebagai siklus artefak mengalahkan enam jam demonstrasi pada waktu kontak yang identik, dan format yang lebih singkat yang dibelanjakan untuk rubrik penilaian menyasar bidang terlemah dalam data prates Talebzadeh.

**“Fakultas kami tidak akan datang, atau para skeptis akan mengacaukannya.”** Merekrut para skeptis ke dalam sebuah demonstrasi meneguhkan kecurigaan yang membawa mereka ke sana. Bukalah dengan pertanyaan identitas, jalankan kohort khusus disiplin, izinkan garis waktu yang berbeda, dan katakan dengan lantang bahwa non-adopsi berprinsip adalah posisi yang sah. Itu rekomendasi Laidlaw, dan itu menyingkirkan argumen kepatuhan dari meja. Perkirakan kerja identitas paling berpengaruh pada pemakai jarang, menurut Bai dan Hsieh.

**“Kami tidak bisa memaksa orang bertindak atasnya.”** Sebagian besar memang tidak bisa, dan Anda dapat mengubah apa yang disinyalkan institusi. Izin yang dipersepsikan dan dukungan institusi membawa bobot positif terbesar setelah efek latar nasional runtuh, sehingga langkah yang berguna adalah yang murah: nyatakan bahwa eksperimen disahkan, lindungi jamnya secara formal agar tidak diserap kembali, sediakan materi dalam bahasa kerja fakultas, dan hilangkan gesekan platform, yang merupakan dimensi berskor terendah dalam studi yang sama.

**“Survei keluar kami kuat.”** Kepuasan adalah ukuran yang paling mungkin naik sementara yang lain tidak. Mintalah artefak dari kohort terakhir dan hubungi kembali peserta itu satu semester kemudian; kesenjangan Bi dkk. hanya ada pada tindak lanjut.

## Yang perlu dilakukan pekan ini

**1.** Tulis ulang undangannya sehingga kehadiran mewajibkan membawa satu artefak mata kuliah: sebuah tujuan, sebuah rubrik atau sebuah tugas penilaian.

**2.** Tulis ulang agendanya sehingga sesi pertama dimulai dari artefak itu, dan tambahkan verifikasi, pengungkapan dan kendali risiko sebagai kolom dalam templat yang dibawa peserta sepanjang minggu.

**3.** Pindahkan satu sesi ke desain rubrik dan penilaian, dan buat peserta pulang dengan rubrik yang sudah ditulis.

**4.** Dapatkan satu kalimat tertulis dari dekan atau provost bahwa eksperimen disahkan, lalu lindungi jamnya secara formal agar tidak diserap kembali.

**5.** Setel evaluasinya untuk mengumpulkan artefak yang direvisi dan menghubungi peserta lagi satu semester kemudian, dengan satu pertanyaan tentang dengan siapa mereka kini bekerja.

## Ke mana selanjutnya

[[faculty-ai-competencies|Kompetensi AI fakultas]] membahas target kompetensinya sendiri, dan [[teacher-ai-competency|Kompetensi AI guru]] serta [[educational-development|Pengembangan fakultas]] memuat materi kerangka di baliknya. Untuk menyusun AI ke dalam mata kuliah alih-alih ke dalam lokakarya, lihat [[designing-ai-into-learning|merancang AI ke dalam pembelajaran]]; untuk gambaran institusional yang lebih luas, lihat [[top-10-findings-ai-education-instructors|sepuluh temuan utama]] dan [[institutional-ai-policy|kebijakan AI institusional]].
