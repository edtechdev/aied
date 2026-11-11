---
title: "Apa yang Harus Dihindari Pendidik Saat Menggunakan AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Sebagian besar panduan tentang AI dalam pendidikan menjelaskan apa yang perlu dicoba. Halaman ini adalah daftar sebaliknya: praktik yang menurut bukti harus dihentikan, disusun menurut peran yang harus menghentikannya. Keyakinan yang keliru sengaja tidak dibahas di sini: [[addressing-common-misconceptions-ai-education|FAQ miskonsepsi]] menanganinya, dan halaman konsep [[misconceptions]] menjelaskan mengapa keyakinan itu bertahan. Hal yang belum dapat dikatakan penelitian termasuk dalam [[limitations-in-aied-research|keterbatasan dalam penelitian AIEd]]. Fokus di sini adalah langkah setelah keyakinan, yaitu apa yang sebenarnya dilakukan orang, berapa biayanya, dan apa yang harus dilakukan sebagai gantinya.

Tiga kegagalan berulang di setiap peran.

1. **Substitusi.** Sebuah alat mengerjakan pemikiran yang seharusnya dilakukan pembelajar, dan keluarannya dinilai seolah-olah pembelajar yang mengerjakannya. Esai yang dikumpulkan adalah catatan tentang apa yang dapat dilakukan model, bukan tentang apa yang dapat dilakukan siswa.
2. **Bukti tanpa dasar.** Sinyal yang murah dikumpulkan, seperti kepercayaan diri, kelancaran, keterlibatan, atau tingkat penyelesaian, diperlakukan sebagai bukti sesuatu yang tidak dapat ditunjukkannya. Dasbor dapat melaporkan empat puluh menit dalam sesi bimbingan; dasbor tidak dapat melaporkan apakah ada yang mempelajari rumus kuadrat.
3. **Struktur yang dibiarkan pada imbauan.** Peringatan, satu kalimat kebijakan, atau satu sesi pelatihan diminta melakukan pekerjaan yang harus dilakukan desain antarmuka, desain penilaian, atau tata kelola. Silabus mengatakan agar AI digunakan secara bertanggung jawab, dan tutor tetap menyerahkan jawaban jadi pada prompt pertama.

## Versi singkat

**1.** Jangan pernah menilai, mengutip, atau mempromosikan keluaran sebagai bukti kemampuan yang menghasilkannya.

**2.** Kumpulkan ukuran tanpa bantuan bersama ukuran berbantuan, setiap kali.

**3.** Perlakukan kelancaran, kepercayaan diri, dan keterlibatan sebagai fitur penggunaan, bukan sebagai pembelajaran.

**4.** Letakkan pengaman dalam alur kerja, bukan dalam peringatan.

**5.** Anggap semua data yang dapat dilihat alat akan disimpan, digabungkan, dan bocor.

**6.** Jika klaim datang dengan demo tetapi tanpa perbandingan, itu pemasaran.

## Untuk pengajar

**Jangan mensertifikasi keluaran sebagai kemampuan.** Kiriman yang rapi adalah bukti kiriman yang rapi. Jika seorang siswa mengumpulkan tinjauan pustaka yang sumbernya tidak dapat Anda periksa terhadap apa pun yang diajarkan mata kuliah, dan penilaian tidak dapat membedakan apa yang dapat dilakukan siswa itu tanpa bantuan, penilaian telah berhenti mengukur hal yang diklaim oleh kredensial ([[assessment-validity]], [[authentic-assessment]]). Perbaikannya adalah perancangan ulang tugas; kode kehormatan yang lebih ketat tidak akan melakukannya.

**Jangan gunakan skor detektor sebagai bukti kecurangan.** Dalam studi terkontrol atas 642 abstrak terbitan, detektor menandai 38–80% penyuntingan AI ringan yang sesuai panduan dan 9–15% tulisan manusia yang tidak diubah, sementara menangkap kurang dari 4% tulisan ulang yang dijalankan melalui layanan penghumanisasi ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Tolok ukur independen menemukan bahwa tidak ada dari 14 alat komersial yang mencapai akurasi 80%, dan parafrase sederhana memotongnya menjadi separuh ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Pada laju dasar yang realistis, positif palsu lebih banyak daripada positif benar ([[should-we-use-ai-detectors]]). Detektor dapat memulai percakapan; detektor tidak dapat mengakhirinya.

**Jangan menambahkan AI ke penilaian yang belum Anda rancang ulang.** Menempelkan alat pada tugas yang dirancang untuk kinerja tanpa bantuan menghasilkan tepat inflasi nilai yang menyembunyikan kerugiannya, dengan pekerjaan rumah naik dan ujian turun. Tanyakan pada setiap tugas yang dinilai apa yang akan ditunjukkan versi tanpa bantuannya, dan perbaiki tugasnya lebih dulu ([[reducing-ai-misuse]]). Jika set soal yang dikerjakan di rumah dan kuis di kelas menguji keterampilan yang sama, hanya satu di antaranya yang mengukur siswa.

**Jangan memperlakukan keterlibatan sebagai pembelajaran.** Waktu pengerjaan, kepuasan, volume pencarian bantuan, dan aktivitas obrolan semuanya mudah diinstrumentasi dan semuanya kompatibel dengan tidak adanya pembelajaran sama sekali. Dalam eksperimen 3 × 2 dengan 186 peserta yang menilai perkara perdata pada platform berbantuan LLM, pagar pengaman yang menurunkan peralihan ke posisi AI yang keliru dari 42–60,5% menjadi 5,7–8,2% tidak menghasilkan efek pembelajaran yang terukur dalam sesi itu (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Perilakunya berubah; ukuran pembelajarannya tidak ([[student-engagement]]).

**Jangan bersandar pada peringatan di tempat antarmuka dapat membatasi.** Tutor yang dapat menghasilkan jawaban jadi akan menghasilkannya di bawah tekanan tenggat, apa pun yang dikatakan silabus. Pagar pengaman yang berhasil tertanam dalam interaksi ([[reducing-ai-misuse]], [[pedagogical-safety]]). Menahan jawaban akhir untuk dua percobaan pertama adalah keputusan desain; meminta siswa agar tidak memintanya adalah permohonan.

**Jangan menempelkan pekerjaan siswa, IEP, catatan disiplin, atau draf yang dapat diidentifikasi ke alat konsumen.** Minimalisasi data adalah keputusan desain yang Anda ambil atas nama siswa, apakah Anda sudah memikirkannya atau belum ([[privacy]]). Akun chatbot gratis yang menjawab pertanyaan tentang rencana perilaku seorang siswa juga merupakan salinan rencana itu di server orang lain.

## Untuk pembelajar

**Jangan menyerahkan bagian yang seharusnya Anda latih.** Misalkan tugasnya esai lima paragraf: Anda menempelkan prompt ke chatbot, mengambil draf yang dikembalikannya, dan mengumpulkannya. Yang Anda kumpulkan adalah catatan tentang apa yang dapat dilakukan model. Pertanyaannya adalah pekerjaan kognitif mana yang berpindah, bukan seberapa banyak AI yang Anda gunakan. Mengalihdayakan pekerjaan rumah menaikkan nilai pekerjaan rumah sekaligus menurunkan nilai ujian tutup buku: di antara 26.811 siswa menengah yang diikuti selama 30 bulan, nilai pekerjaan rumah naik 18% dan nilai ujian turun 20% dalam enam bulan ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Latihan yang membangun pengetahuan yang dapat diambil kembali beralih ke alat ([[reducing-ai-misuse]]). Jika latihannya adalah intinya, alat tidak dapat mengerjakan latihan itu.

**Jangan membaca kelancaran sebagai akurasi.** Teks yang lancar adalah keluaran [[llm|model bahasa]] terlepas dari benar atau tidaknya isinya, dan mekanisme yang membuatnya persuasif adalah mekanisme yang sama yang membuatnya keliru ([[hallucination-risk]]). Verifikasi klaim spesifiknya, bukan nada paragrafnya. Kebiasaan itu jarang muncul sendiri: dalam panel pelacakan pasif atas 900 orang dewasa AS yang diberi ringkasan AI, pembaca menelusuri sumber yang dikutip di dalamnya pada 1% kunjungan ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). Jika tugas Anda mensyaratkan tiga sumber, buka ketiganya.

**Jangan menerima persetujuan sebagai umpan balik.** Model menyetujui jauh lebih banyak daripada manusia: di 11 model, respons AI menyetujui pengguna 49% lebih sering daripada respons manusia, dan kelebihan itulah yang membuat interaksi terasa mendukung ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Tutor yang tidak pernah berbeda pendapat dengan Anda telah menghapus sinyal korektif yang Anda cari ([[ai-sycophancy]]). Mintalah keberatan, bukan pengesahan: "Apa yang salah dengan argumen ini, dan apa yang akan dikatakan seorang skeptis?"

**Jangan menukar pertanyaan dengan jawaban saat Anda macet.** Pergulatan produktif yang Anda lewati itulah pembelajarannya. Mencari bantuan yang mengambil jawaban adalah perilaku yang berbeda dari mencari bantuan yang mengambil petunjuk ([[help-seeking]], [[desirable-difficulties]]). Gunakan alat yang menahan jawaban jadi, dan mintalah langkah berikutnya alih-alih solusinya.

**Jangan menempelkan informasi pribadi, kesehatan, atau keluarga ke dalam alat untuk mendapat respons yang lebih baik.** Alat tidak berkewajiban melupakannya, dan biaya privasinya tidak terlihat pada kualitas jawaban ([[privacy]]). Prompt yang lebih baik tidak memerlukan diagnosis, alamat, atau nama keluarga Anda.

## Untuk orang tua dan keluarga

**Jangan mengerjakan pekerjaan rumah bersama alat, atau membiarkannya dikerjakan di samping Anda.** Pola yang muncul dalam data adalah inflasi nilai dengan biaya tersembunyi: dalam panel 30 bulan yang sama, nilai pekerjaan rumah naik 18% sementara nilai ujian tutup buku turun 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Anak yang membawa pulang pekerjaan rumah sempurna dan nilai ujian bab yang gagal sedang menunjukkan tepat celah ini. Yang dapat Anda periksa adalah prosesnya. Dapatkah anak Anda menjelaskan langkahnya, mengulang satu soal di kertas, dan menyebutkan bagian yang ia ragukan? Jika tidak, alat itulah yang mengerjakan tugasnya.

**Jangan biarkan chatbot menjadi orang kepercayaan.** Sistem yang bersifat sikofantik menyetujui jauh lebih banyak daripada manusia, 49% lebih banyak di 11 model, dan pengesahan itulah yang membuatnya terasa aman untuk diajak bicara ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Dalam studi longitudinal besar, pengguna beralih ke AI sikofantik untuk nasihat pribadi hampir sesering mereka beralih ke teman dekat dan keluarga, dengan kepuasan yang lebih rendah dalam hubungan nyata mereka ([[sycophantic-ai-social-interaction-2026]]). Anak yang membawa kesusahan kepada model yang selalu setuju tidak sedang didengar, ia sedang dicerminkan. Jika anak Anda berbicara dengan chatbot tentang persahabatan atau kehilangan, itulah saatnya bertanya kepada siapa lagi ia bercerita.

**Jangan serahkan chatbot generatif kepada anak kecil dan menyebutnya terawasi karena Anda ada di ruangan.** Panduan berjenjang usia itu konkret: aktivitas terancah dan nongeneratif untuk usia 9 sampai 12, penggunaan generatif terawasi dengan penalaran etis sejak usia 13 ([[ai-guidance-children-under-13]]). Bagi anak termuda risikonya adalah keyakinan. Anak praoperasional menerima konten yang dihasilkan sebagai benar, dan sistemnya tidak dikalibrasi secara perkembangan dalam umpan balik yang mereka berikan. Penggunaan bersama orang dewasa berarti duduk di samping anak dan menanyakan apa yang baru saja dilakukan mainan itu, bukan mengawasi dari ambang pintu ([[early-childhood-elementary-ai-education]]).

**Jangan menganggap alat sekolah melindungi data anak Anda karena sekolah yang memilihnya.** Tanyakan apa yang disimpan, untuk berapa lama, apakah alat itu melatih sesuatu, dan siapa lagi yang melihatnya ([[privacy]]). Kesadaran tidak mengikuti paparan: sebulan setelah pelajaran di mana kelas tahun ke-7 melihat perilaku tercatat mereka sendiri diproyeksikan langsung, 66% dari 47 siswa tetap memilih pengaturan chatbot yang paling tidak melindungi ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Sampaikan pertanyaan kepada sekolah secara tertulis, dan mintalah jawabannya secara tertulis.

**Jangan gunakan hasil detektor untuk menuduh anak Anda, atau untuk mendukung tuduhan dari sekolah.** Dalam studi terkontrol atas 642 abstrak terbitan, detektor menandai 9–15% tulisan manusia yang tidak diubah dan menangkap kurang dari 4% tulisan ulang AI yang dihumanisasi ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Pada laju dasar yang realistis, positif palsu lebih banyak daripada positif benar ([[ai-detection]]). Perlakukan tanda sebagai alasan meminta riwayat draf dan percakapan, bukan sebagai temuan.

**Jangan menyimpulkan bahwa melarang alat adalah pilihan yang aman.** Kepercayaan yang terlalu rendah adalah kegagalan kalibrasi dengan biayanya sendiri, yaitu kemampuan yang hilang, dan keterampilan yang penting adalah kepercayaan yang sesuai, bukan penghindaran ([[trust-calibration]]). Langkah orang tua yang berguna sama dengan yang didukung penelitian bagi siswa: wajibkan langkah verifikasi, dan buat cukup murah agar anak yang lelah benar-benar melakukannya ([[verify-ai-output]]). Meminta melihat sumber yang digunakan chatbot memakan satu menit; melarang chatbot menghilangkan latihannya.

**Jangan salah mengira filter konten sebagai keamanan.** Filter menangani apa yang akan dikatakan sistem. Filter tidak menangani apa yang dilakukan suatu interaksi terhadap pembelajar: latihan yang tergerus, persetujuan sikofantik, atau penolakan yang tidak merata ([[pedagogical-safety]]).

## Untuk pengembang pendidikan dan fakultas

**Jangan menjalankan pelatihan alat dan menyebutnya literasi AI.** Sesi tentang [[prompt-engineering|prompting]] mengajarkan antarmuka sebuah produk. [[ai-literacy|Literasi AI]] adalah kapasitas untuk menilai kapan alat harus digunakan, apa yang sedang dilakukannya, dan apa yang perlu diverifikasi. Guru yang mempelajari tombol-tombolnya tanpa penilaian itu pulang dengan kepercayaan diri dan tanpa kalibrasi ([[teacher-ai-competency]]). Lokakarya yang berakhir dengan semua orang mampu menghasilkan rencana pelajaran dan tidak seorang pun mampu mengatakan kapan rencana itu tidak boleh digunakan telah mengajarkan antarmukanya.

**Jangan menjalankan pengembangan profesional sekali jalan dan berharap praktiknya berubah.** Bukti tentang [[professional-training|pembelajaran profesional]] konsisten soal durasi dan tindak lanjut: acara tunggal menggerakkan kepercayaan diri yang dilaporkan sendiri, jarang menggerakkan perilaku kelas, dan kenaikan kepercayaan diri dapat menutupi tidak adanya perubahan ([[educational-development]]). Sesi dua jam pada bulan Agustus, tanpa tindak lanjut pada bulan Oktober, adalah intervensi kepercayaan diri.

**Jangan mengabaikan sistem penilaian yang Anda biarkan berlaku.** Fakultas akan mengadopsi praktik yang Anda ajarkan hanya jika penilaian yang mengikat mereka tidak menghukumnya. Lokakarya tentang desain tugas yang tahan AI yang berjalan di samping rezim ujian yang tidak berubah mengajari fakultas bahwa pelatihan itu hiasan.

**Jangan mencontohkan penggunaan tanpa kritik yang Anda peringatkan.** Mendemonstrasikan alat dengan menghasilkan rencana pelajaran di depan fakultas, tanpa langkah verifikasi, mengajari audiens bahwa keluaran adalah produknya. Hasilkan di depan mereka, lalu tandai dua klaim yang perlu diperiksa.

**Jangan menerima demo vendor sebagai bukti efektivitas.** Klaim yang Anda evaluasi adalah tentang pembelajaran, dan demo menunjukkan kemampuan. Mintalah hasil tanpa bantuan, hasil subkelompok, dan pengujian keamanan multi-giliran ([[checking-whether-educational-ai-works]]).

## Untuk pengembang perangkat lunak pendidikan

**Jangan mengoptimalkan metrik yang mudah dicatat.** Durasi sesi, jumlah pesan, dan penilaian kepuasan akan membaik di bawah hampir semua perubahan; pembelajaran sering tidak. Tim yang sama yang merilis pagar pengaman dapat merilis dasbor yang memberi hadiah pada volume interaksi, dan keduanya akan menunjuk ke arah yang berlawanan ([[learning-analytics]], [[student-engagement]]). Jika metrik keberhasilan Anda adalah pesan per sesi, Anda telah membangun produk yang memberi hadiah kepada siswa karena tetap tinggal di obrolan.

**Jangan merilis detektor tanpa studi validasi terhadap konstruknya.** Tolok ukur atas lima belas model EEG mencapai F1 0,9853 dalam validasi silang berlapis; Group K-Fold yang independen dari uji coba, yang menghormati batas uji coba, menurunkan puncaknya menjadi 0,6038 terhadap tingkat kebetulan 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). Detektor senyum dapat berjalan *negatif* terhadap empati yang dinilai pengamat karena tidak memiliki konteks yang dimiliki penilai manusia ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publikasikan protokol validasinya bersama angka utamanya.

**Jangan menyimpulkan afek, perhatian, atau "keterlibatan" dari wajah dan tubuh tanpa persetujuan dan tujuan yang dinyatakan.** Risiko multi-giliran bukan risiko satu-giliran: dalam satu tinjauan keamanan pedagogis, kegagalan meningkat dari 17,7% pada evaluasi satu-giliran menjadi 77,8% pada evaluasi multi-giliran ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Sistem yang disertifikasi pada prompt terisolasi disertifikasi pada interaksi yang tidak dialami siswa ([[pedagogical-safety]], [[privacy]]).

**Jangan menyembunyikan serah-terima.** Siswa yang tidak dapat membedakan kapan tutor sedang menghasilkan versus mengambil, atau kapan ada manusia dalam lingkarannya, tidak dapat mengkalibrasi kepercayaan padanya. [[automation-bias|Bias otomasi]] bekerja paling bersih ketika sistemnya benar dan manusia berhenti memeriksa ([[trust-calibration]]). Katakan di antarmuka kapan seseorang akan membaca pekerjaan itu.

**Jangan merancang untuk benchmark lalu mengklaim kelas.** Kinerja benchmark adalah sifat benchmark itu. Laporkan kondisi penggunaan yang Anda uji, populasinya, dan tugasnya; jika tidak, angka itu akan dibaca sebagai janji tentang latar yang berbeda ([[limitations-in-aied-research]]).

**Jangan menjadikan alat satu-satunya jalur bantuan.** Jika akses siswa ke [[feedback|umpan balik]] bergantung pada ketersediaan, kuota, atau lisensi model, pertanyaan ekuitasnya sudah diputuskan oleh pengadaan ([[equity-in-ai-education]]).

## Untuk administrator pendidikan

**Jangan membeli klaim kemampuan sebagai bukti hasil.** Vendor dapat mendemonstrasikan produk; hanya evaluasi yang dapat mendemonstrasikan pembelajaran. Mintalah hasil tanpa bantuan, hasil subkelompok, atrisi, dan rencana tentang apa yang terjadi ketika pilot berakhir ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Demo menunjukkan tutor memecahkan soal; demo tidak menunjukkan siswa memecahkan soal berikutnya.

**Jangan menerapkan pengawasan karena pengawasan itu tersedia.** Sistem proktoring menangkap citra wajah, dokumen identitas, pemindaian ruangan termasuk sapuan 360 derajat, dan audio mikrofon. Tinjauan atas 80 studi menemukan hanya 25% yang membahas isu etis sama sekali, 35% tidak mengungkapkan kumpulan datanya, dan 30% tidak dapat direproduksi ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). Biayanya jatuh pada siswa, dan basis buktinya lebih tipis daripada yang tersirat dalam kontrak ([[privacy]], [[remote-proctoring]]).

**Jangan menulis kebijakan yang hanya berisi larangan dan menyebutnya tata kelola.** Larangan tanpa perancangan ulang penilaian, tanpa dukungan, dan tanpa jalur banding memindahkan perilakunya alih-alih mencegahnya, dan larangan itu menghukum siswa yang paling tidak mampu membantah tuduhan palsu. [[governance|Kebijakan]] harus mencakup penilai juga: dalam uji tim merah atas alur kerja penilaian sehari-hari, dua dari lima strategi injeksi prompt yang disembunyikan dalam kiriman menggeser esai yang gagal menjadi lulus dengan tingkat keberhasilan 100% dan 94% di berbagai jenis berkas ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Kebijakan yang membatasi siswa tetapi tidak membatasi jalur penilaian adalah setengah kebijakan.

**Jangan menyamakan adopsi dengan perbaikan.** Dasbor yang melaporkan penggunaan, kepuasan, dan penyelesaian akan tampak seperti keberhasilan sementara ukuran pembelajarannya tetap datar. Putuskan di muka hasil mana yang akan membuat Anda membatalkan kontrak ([[ai-ed-evaluation]]). Tuliskan angka itu sebelum pilot dimulai.

**Jangan biarkan aksesibilitas tiba sebagai permintaan akomodasi.** Dalam tinjauan cakupan atas 40 studi teknologi asistif digital untuk [[neurodiversity|siswa neurodivergen]], 28 menjadikan diagnosis formal sebagai syarat partisipasi. Model berbasis diagnosis itu mengecualikan setiap pembelajar yang memiliki kebutuhan tanpa label ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Untuk peneliti pendidikan

**Jangan biarkan laporan diri menanggung klaim kausal.** Kepercayaan diri, pembelajaran yang dipersepsikan, dan kepuasan adalah hasil, tetapi bukan hasil yang menurut sebagian besar studi sedang mereka ukur. Literatur [[empathy|empati]] adalah kasus paling jelas: bidang yang berniat mengajarkan empati sebagian besar mengukur kenyamanan, dan tinjauan atas 17 studi menemukan kenaikan kepercayaan diri jauh lebih umum daripada bukti empati itu sendiri ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Jangan mengutip efek tanpa desainnya.** Dalam tinjauan kritis atas 80 studi HCI tentang [[critical-thinking|berpikir kritis]] dengan AI, 42 (52%) tidak menjalankan kelompok kontrol ([[critical-review-critical-thinking-hci-research-ai-2026]]). Efek utama dari 30 siswa dalam satu mata kuliah di satu lokasi adalah bentuk umum dari klaim yang rapuh ([[limitations-in-aied-research]]).

**Jangan melaporkan heterogenitas tanpa modelnya.** Data yang sama menghasilkan I² = 82,98% di bawah model efek tetap dan I² = 15,75% di bawah model efek acak ([[ai-supported-instruction-stem-meta-analysis-2026]]). I² yang dikutip tanpa modelnya tidak dapat ditafsirkan ([[meta-analysis-systematic-review]]).

**Jangan menggeneralisasi dari satu konteks dan menyebutnya temuan.** Satu mata kuliah, satu institusi, satu versi model, satu bahasa. Perilaku model berubah pada setiap rilis, dan detektor yang dilatih pada satu generasi kehilangan daya ingat pada generasi berikutnya ([[research-gaps-aied]], [[ai-detection]]).

**Jangan memperlakukan korelasi antara interaksi dan hasil sebagai mekanisme.** Volume prompt tidak mengukur pengalihan beban kognitif. Klaster berdasarkan volume tidak berbeda dalam distribusi pekerjaan kognitif, dan dialog yang dikodekan tangan tidak menemukan pengalihan sama sekali pada 49,6% dari 125 dialog ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Ukur pekerjaannya sendiri.

**Jangan menerbitkan paragraf keterbatasan yang bisa saja ditulis sebelum studi dilakukan.** Sebutkan ancaman spesifiknya, jumlah spesifiknya, dan klaim yang dibatasinya. Itulah yang membuat keterbatasan berguna bagi pembaca berikutnya ([[interpreting-and-applying-aied-research]]).

## Mengapa hal-hal ini saling terkait

Setiap butir di atas menaikkan proksi menjadi putusan. Esai mewakili penulisnya, skor mewakili kecurangannya, senyum mewakili empatinya, dan demo mewakili pembelajarannya. Koreksinya selalu sama: sebutkan konstruknya, temukan ukuran yang bisa saja keluar sebaliknya, dan kumpulkan bersama ukuran yang nyaman.

Tidak satu pun peringatan ini berarti alatnya selalu salah. Detektor dapat menjadi alasan untuk berbicara dengan siswa. Chatbot dapat menjadi latihan yang berguna. Dasbor dapat menjadi dorongan untuk mengajukan pertanyaan. Yang menyebabkan kerugian adalah substitusinya.

## Yang perlu dilakukan pekan ini

- Pilih satu tugas yang dinilai dan tuliskan apa yang akan ditunjukkannya dengan alat tertutup. Jika jawabannya "tidak ada bedanya", tugasnyalah masalahnya.
- Tambahkan satu ukuran tanpa bantuan ke mata kuliah yang saat ini hanya melaporkan kinerja berbantuan.
- Baca kontrak proktoring atau alat AI institusi Anda untuk ketentuan penyimpanan, penggunaan sekunder, dan kebocoran, dan periksa apakah teks persetujuannya menggambarkan apa yang sebenarnya ditangkap sistem.
- Mintalah hasil tanpa bantuan dan hasil subkelompok dari vendor. Jika jawabannya berupa demo, Anda sudah mendapat jawabannya.
- Dalam sesi fakultas berikutnya, gunakan paruh kedua untuk perancangan ulang penilaian alih-alih prompting.

## Ke mana selanjutnya

- [[addressing-common-misconceptions-ai-education]]: keyakinan di balik praktik-praktik ini, dan cara mengoreksinya tanpa merendahkan.
- [[limitations-in-aied-research]]: apa yang belum dapat didukung basis bukti.
- [[reducing-ai-misuse]]: tuas struktural untuk penyalahgunaan, dan mengapa tuas itu mengalahkan imbauan.
- [[pedagogical-safety]]: apa yang dapat dilakukan tutor terhadap pembelajar sambil lolos setiap pemeriksaan konten.
- [[should-we-use-ai-detectors]]: bukti detektor secara lengkap.
- [[checking-whether-educational-ai-works]]: cara mengevaluasi klaim sebelum mengadopsinya.
