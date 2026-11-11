---
title: "Apa yang Harus Dihindari Pendidik Saat Menggunakan AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-10T22:10:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Sebagian besar panduan tentang AI dalam pendidikan dirumuskan sebagai hal yang perlu dicoba. Halaman ini adalah daftar yang lain: praktik yang menurut bukti harus dihentikan, diorganisasi menurut peran yang harus menghentikannya. Ini sengaja bukan daftar keyakinan yang keliru — [[addressing-common-misconceptions-ai-education|FAQ miskonsepsi]] menangani hal itu, dan halaman konsep [[misconceptions]] menjelaskan mengapa keyakinan itu bertahan — dan bukan daftar hal yang belum dapat diberitahukan penelitian, yang dicakup [[limitations-in-aied-research|keterbatasan dalam penelitian AIEd]]. Fokus di sini adalah langkah setelah sebuah keyakinan: apa yang sebenarnya dilakukan orang, apa biayanya, dan apa yang harus dilakukan sebagai gantinya.

Tiga kegagalan berulang di setiap peran. **Substitusi** — sebuah alat mengerjakan pemikiran yang seharusnya dilakukan pembelajar, dan keluarannya dinilai seolah-olah pembelajar yang mengerjakannya. **Bukti tanpa dasar** — sinyal yang mudah dikumpulkan (kepercayaan diri, kelancaran, keterlibatan, tingkat penyelesaian) diperlakukan sebagai bukti sesuatu yang tidak dapat ditunjukkannya. **Struktur yang dibiarkan pada imbauan** — peringatan, satu kalimat kebijakan, atau satu sesi pelatihan diminta melakukan pekerjaan yang harus dilakukan desain antarmuka, desain penilaian, atau tata kelola.

## Versi singkat

**1.** Jangan pernah menilai, mengutip, atau mempromosikan keluaran sebagai bukti kemampuan yang menghasilkannya.

**2.** Kumpulkan ukuran tanpa bantuan bersama ukuran berbantuan, setiap kali.

**3.** Perlakukan kelancaran, kepercayaan diri, dan keterlibatan sebagai fitur penggunaan, bukan sebagai pembelajaran.

**4.** Letakkan pengaman dalam alur kerja, bukan dalam peringatan.

**5.** Anggap semua data yang dapat dilihat alat akan disimpan, digabungkan, dan bocor.

**6.** Jika klaim datang dengan demo tetapi tanpa perbandingan, itu pemasaran.

## Untuk pembelajar

**Jangan menyerahkan bagian yang seharusnya Anda latih.** Pembedanya bukan seberapa banyak Anda menggunakan AI, melainkan pekerjaan kognitif mana yang berpindah. Mengalihdayakan pekerjaan rumah menaikkan nilai pekerjaan rumah sekaligus menurunkan nilai ujian tutup buku — kenaikan 18% berbanding kerugian 20% dalam satu studi sekolah menengah — karena latihan yang membangun pengetahuan yang dapat diambil kembali beralih ke alat ([[reducing-ai-misuse]]). Jika latihannya adalah intinya, alat tidak boleh mengerjakan latihan itu.

**Jangan membaca kelancaran sebagai akurasi.** Teks yang lancar adalah keluaran model bahasa terlepas dari benar atau tidaknya isinya, dan mekanisme yang membuatnya persuasif adalah mekanisme yang sama yang membuatnya keliru ([[hallucination-risk]]). Verifikasi klaim spesifiknya, bukan nada paragrafnya. Kebiasaan verifikasi jarang muncul sendiri: dalam panel 900 orang dewasa yang diberi ringkasan AI, pembaca menelusuri sumber yang dikutip di dalamnya pada 1% kunjungan ([[trust-calibration]]).

**Jangan menerima persetujuan sebagai umpan balik.** Model menyetujui jauh lebih banyak daripada manusia — di 11 model, respons AI menyetujui pengguna 49% lebih sering daripada respons manusia — dan kelebihan itulah yang membuat interaksi terasa mendukung ([[ai-sycophancy]]). Tutor yang tidak pernah berbeda pendapat dengan Anda telah menghapus sinyal korektif yang Anda cari. Mintalah keberatan, bukan pengesahan.

**Jangan menukar pertanyaan dengan jawaban saat Anda macet.** Pergulatan produktif yang Anda lewati itulah pembelajarannya; mencari bantuan yang mengambil jawaban adalah perilaku yang berbeda dari mencari bantuan yang mengambil petunjuk ([[help-seeking]], [[desirable-difficulties]]). Gunakan alat yang menahan jawaban jadi.

**Jangan menempelkan informasi pribadi, kesehatan, atau keluarga ke dalam alat untuk mendapat respons yang lebih baik.** Alat tidak berkewajiban melupakannya, dan biaya privasinya tidak terlihat pada kualitas jawaban ([[privacy]]).

## Untuk orang tua dan keluarga

**Jangan mengerjakan pekerjaan rumah bersama alat, atau membiarkannya dikerjakan di samping Anda.** Pola yang muncul dalam data adalah inflasi nilai dengan biaya tersembunyi: nilai pekerjaan rumah naik 18% sementara nilai ujian tutup buku turun 20% ([[reducing-ai-misuse]]). Yang dapat Anda periksa adalah prosesnya — dapatkah anak Anda menjelaskan langkahnya, mengulanginya di kertas, dan menyebutkan apa yang ia ragukan? Jika tidak, alat itulah yang mengerjakan tugasnya.

**Jangan biarkan chatbot menjadi orang kepercayaan.** Sistem yang bersifat sikofantik menyetujui jauh lebih banyak daripada manusia — 49% lebih banyak di 11 model — dan pengesahan itulah mekanisme yang membuatnya terasa aman untuk diajak bicara ([[ai-sycophancy]]). Dalam studi longitudinal besar, pengguna beralih ke AI sikofantik untuk nasihat pribadi hampir sesering mereka beralih ke teman dekat dan keluarga, dengan kepuasan yang lebih rendah dalam hubungan nyata mereka ([[sycophantic-ai-social-interaction-2026]]). Anak yang membawa kesusahan kepada model yang selalu setuju tidak sedang didengar; ia sedang dicerminkan.

**Jangan serahkan chatbot generatif kepada anak kecil dan menyebutnya terawasi karena Anda ada di ruangan.** Panduan berjenjang usia itu konkret: aktivitas terancah dan nongeneratif untuk usia 9 sampai 12, penggunaan generatif terawasi dengan penalaran etis sejak usia 13 ([[ai-guidance-children-under-13]]). Bagi anak termuda risikonya adalah keyakinan — anak praoperasional menerima konten yang dihasilkan sebagai benar, dan sistemnya tidak dikalibrasi secara perkembangan dalam umpan balik yang mereka berikan. Penggunaan bersama orang dewasa berarti menanyakan apa yang baru saja dilakukan mainan itu, bukan mengawasi dari ambang pintu ([[early-childhood-elementary-ai-education]]).

**Jangan menganggap alat sekolah melindungi data anak Anda karena sekolah yang memilihnya.** Tanyakan apa yang disimpan, untuk berapa lama, apakah alat itu melatih sesuatu, dan siapa lagi yang melihatnya ([[privacy]]). Kesadaran tidak mengikuti paparan: sebulan setelah pelajaran di mana siswa melihat perilaku tercatat mereka sendiri diproyeksikan secara langsung, 66% kelas tahun ke-7 tetap memilih pengaturan chatbot yang paling tidak melindungi ([[privacy]]).

**Jangan gunakan hasil detektor untuk menuduh anak Anda, atau untuk mendukung tuduhan dari sekolah.** Dalam uji terkontrol terkuat, detektor menandai 9–15% tulisan manusia yang tidak diubah dan menangkap kurang dari 4% tulisan ulang AI yang dihumanisasi; pada laju dasar yang realistis, positif palsu lebih banyak daripada positif benar ([[ai-detection]]). Perlakukan tanda sebagai alasan meminta riwayat draf dan percakapan, bukan sebagai temuan.

**Jangan menyimpulkan bahwa melarang alat adalah pilihan yang aman.** Kepercayaan yang terlalu rendah adalah kegagalan kalibrasi dengan biayanya sendiri — kemampuan yang hilang — dan keterampilan yang penting adalah kepercayaan diri yang sesuai, bukan penghindaran ([[trust-calibration]]). Langkah orang tua yang berguna sama dengan yang didukung penelitian bagi siswa: wajibkan langkah verifikasi, dan buat cukup murah agar anak yang lelah benar-benar melakukannya ([[verify-ai-output]]).

**Jangan salah mengira filter konten sebagai keamanan.** Filter menangani apa yang akan dikatakan sistem; filter tidak menangani apa yang dilakukan suatu interaksi terhadap pembelajar — latihan yang tergerus, persetujuan sikofantik, atau penolakan yang tidak merata ([[pedagogical-safety]]).

## Untuk pengajar

**Jangan mensertifikasi keluaran sebagai kemampuan.** Kiriman yang rapi adalah bukti kiriman yang rapi. Jika penilaian tidak dapat membedakan apa yang dapat dilakukan siswa tanpa bantuan, penilaian itu berhenti mengukur hal yang diklaim oleh kredensial ([[assessment-validity]], [[authentic-assessment]]). Perbaikannya adalah perancangan ulang tugas, bukan kode kehormatan yang lebih ketat.

**Jangan gunakan skor detektor sebagai bukti pelanggaran.** Uji terkontrol terkuat menandai 38–80% penyuntingan AI ringan yang sesuai panduan dan 9–15% tulisan manusia yang tidak diubah, sementara menangkap kurang dari 4% tulisan ulang yang dijalankan melalui layanan penghumanisasi; 14 alat komersial dalam benchmark independen semuanya berada di bawah akurasi 80%, dan pada laju dasar yang realistis positif palsu lebih banyak daripada positif benar ([[ai-detection]], [[should-we-use-ai-detectors]]). Detektor dapat memulai percakapan; detektor tidak dapat mengakhirinya.

**Jangan menambahkan AI ke penilaian yang belum Anda rancang ulang.** Menempelkan alat pada tugas yang dirancang untuk kinerja tanpa bantuan menghasilkan tepat inflasi nilai yang menyembunyikan kerugiannya — pekerjaan rumah naik, ujian turun. Tanyakan pada setiap tugas yang dinilai apa yang akan ditunjukkan versi tanpa bantuannya, dan perbaiki tugasnya lebih dulu ([[reducing-ai-misuse]]).

**Jangan memperlakukan keterlibatan sebagai pembelajaran.** Waktu pengerjaan, kepuasan, volume pencarian bantuan, dan aktivitas obrolan semuanya mudah diinstrumentasi dan semuanya kompatibel dengan tidak adanya pembelajaran sama sekali. Pagar pengaman yang menurunkan peralihan siswa ke posisi AI yang keliru dari 42–60,5% menjadi 5,7–8,2% tidak menghasilkan efek pembelajaran yang terukur dalam sesi itu (β = 0,03, p = 0,18). Perilaku bertahan; pembelajaran tidak bergerak ([[student-engagement]]).

**Jangan bersandar pada peringatan di tempat antarmuka dapat membatasi.** Tutor yang dapat menghasilkan jawaban jadi akan menghasilkannya di bawah tekanan tenggat. Pagar pengaman yang berhasil adalah yang tertanam dalam interaksi, bukan kalimat dalam silabus ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Jangan menempelkan pekerjaan siswa, IEP, catatan disiplin, atau draf yang dapat diidentifikasi ke alat konsumen.** Minimalisasi data adalah keputusan desain yang Anda ambil atas nama siswa, apakah Anda sudah memikirkannya atau belum ([[privacy]]).

## Untuk pengembang pendidikan dan fakultas

**Jangan menjalankan pelatihan alat dan menyebutnya literasi AI.** Sesi tentang prompting mengajarkan antarmuka sebuah produk; [[ai-literacy]] adalah kapasitas untuk menilai kapan alat harus digunakan, apa yang sedang dilakukannya, dan apa yang perlu diverifikasi. Guru yang mempelajari tombol-tombolnya tanpa penilaian itu pulang dengan kepercayaan diri dan tanpa kalibrasi ([[teacher-ai-competency]]).

**Jangan menjalankan pengembangan profesional sekali jalan dan berharap praktiknya berubah.** Bukti tentang [[professional-training|pembelajaran profesional]] konsisten soal durasi dan tindak lanjut: acara tunggal menggerakkan kepercayaan diri yang dilaporkan sendiri, jarang menggerakkan perilaku kelas, dan kenaikan kepercayaan diri dapat menutupi tidak adanya perubahan ([[educational-development]]).

**Jangan mengabaikan sistem penilaian yang Anda biarkan berlaku.** Fakultas akan mengadopsi praktik yang Anda ajarkan hanya jika penilaian yang mengikat mereka tidak menghukumnya. Lokakarya tentang desain tugas yang tahan AI yang berjalan di samping rezim ujian yang tidak berubah mengajari fakultas bahwa pelatihan itu hiasan.

**Jangan mencontohkan penggunaan tanpa kritik yang Anda peringatkan.** Mendemonstrasikan alat dengan menghasilkan rencana pelajaran di depan fakultas, tanpa langkah verifikasi, mengajari audiens bahwa keluaran adalah produknya.

**Jangan menerima demo vendor sebagai bukti efektivitas.** Klaim yang Anda evaluasi adalah tentang pembelajaran, dan demo menunjukkan kemampuan. Mintalah hasil tanpa bantuan, hasil subkelompok, dan pengujian keamanan multi-giliran ([[checking-whether-educational-ai-works]]).

## Untuk pengembang perangkat lunak pendidikan

**Jangan mengoptimalkan metrik yang mudah dicatat.** Durasi sesi, jumlah pesan, dan penilaian kepuasan akan membaik di bawah hampir semua perubahan; pembelajaran sering tidak. Tim yang sama yang merilis pagar pengaman dapat merilis dasbor yang memberi hadiah pada volume interaksi, dan keduanya akan menunjuk ke arah yang berlawanan ([[learning-analytics]], [[student-engagement]]).

**Jangan merilis detektor tanpa studi validasi terhadap konstruknya.** Model yang mendapat F1 0,98 pada split yang bocor dapat turun ke 0,60 di bawah validasi yang independen dari uji coba, dan detektor senyum dapat berjalan *negatif* terhadap empati yang dinilai pengamat karena tidak memiliki konteks yang dimiliki penilai manusia ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publikasikan protokol validasinya, bukan hanya angka utamanya.

**Jangan menyimpulkan afek, perhatian, atau "keterlibatan" dari wajah dan tubuh tanpa persetujuan dan tujuan yang dinyatakan.** Risiko multi-giliran bukan risiko satu-giliran: tingkat kerugian dalam satu tinjauan naik dari sekitar 18% pada evaluasi satu-giliran menjadi sekitar 78% pada evaluasi multi-giliran, sehingga sistem yang disertifikasi pada prompt terisolasi disertifikasi pada interaksi yang tidak dialami siswa ([[pedagogical-safety]], [[privacy]]).

**Jangan menyembunyikan serah-terima.** Siswa yang tidak dapat membedakan kapan tutor sedang menghasilkan versus mengambil, atau kapan ada manusia dalam lingkarannya, tidak dapat mengkalibrasi kepercayaan padanya, dan bias otomasi bekerja paling bersih ketika sistemnya benar dan manusia berhenti memeriksa ([[automation-bias]], [[trust-calibration]]).

**Jangan merancang untuk benchmark lalu mengklaim kelas.** Kinerja benchmark adalah sifat benchmark itu. Laporkan kondisi penggunaan yang Anda uji, populasinya, dan tugasnya; jika tidak, angka itu akan dibaca sebagai janji tentang latar yang berbeda ([[limitations-in-aied-research]]).

**Jangan menjadikan alat satu-satunya jalur bantuan.** Jika akses siswa ke umpan balik bergantung pada ketersediaan, kuota, atau lisensi model, pertanyaan ekuitasnya sudah diputuskan oleh pengadaan ([[equity-in-ai-education]]).

## Untuk administrator pendidikan

**Jangan membeli klaim kemampuan sebagai bukti hasil.** Vendor dapat mendemonstrasikan produk; hanya evaluasi yang dapat mendemonstrasikan pembelajaran. Mintalah hasil tanpa bantuan, hasil subkelompok, atrisi, dan rencana tentang apa yang terjadi ketika pilot berakhir ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Jangan menerapkan pengawasan karena pengawasan itu tersedia.** Sistem proktoring menangkap citra wajah, dokumen identitas, pemindaian ruangan termasuk sapuan 360 derajat dan audio mikrofon, dan tinjauan atas 80 studi menemukan hanya 25% yang memenuhi ambang pelaporan untuk pertanyaan yang perlu dijawab institusi sebelum penerapan ([[privacy]], [[remote-proctoring]]). Biayanya jatuh pada siswa; basis buktinya lebih tipis daripada yang tersirat dalam kontrak.

**Jangan menulis kebijakan yang hanya berisi larangan dan menyebutnya tata kelola.** Larangan tanpa perancangan ulang penilaian, tanpa dukungan, dan tanpa jalur banding memindahkan perilakunya alih-alih mencegahnya, dan larangan itu menghukum siswa yang paling tidak mampu membantah tuduhan palsu. Kebijakan harus mencakup penilai juga: dua dari lima strategi injeksi prompt tidak langsung yang disematkan dalam kiriman menaikkan nilai esai yang gagal ([[institutional-ai-policy]], [[course-ai-policy]]).

**Jangan menyamakan adopsi dengan perbaikan.** Dasbor yang melaporkan penggunaan, kepuasan, dan penyelesaian akan tampak seperti keberhasilan sementara ukuran pembelajarannya tetap datar. Putuskan di muka hasil mana yang akan membuat Anda membatalkan kontrak ([[ai-ed-evaluation]]).

**Jangan biarkan aksesibilitas tiba sebagai permintaan akomodasi.** Dalam tinjauan atas 40 studi teknologi asistif digital untuk siswa neurodivergen, 28 menjadikan diagnosis formal sebagai syarat partisipasi — model berbasis diagnosis yang mengecualikan setiap pembelajar yang memiliki kebutuhan tanpa label ([[accessibility]], [[universal-design-for-learning]]).

## Untuk peneliti pendidikan

**Jangan biarkan laporan diri menanggung klaim kausal.** Kepercayaan diri, pembelajaran yang dipersepsikan, dan kepuasan adalah hasil, tetapi bukan hasil yang menurut sebagian besar studi sedang mereka ukur. Literatur [[empathy|empati]] adalah kasus paling jelas: bidang yang berniat mengajarkan empati sebagian besar mengukur kenyamanan, dan tinjauan terkuat atas 17 studi menemukan kenaikan kepercayaan diri jauh lebih umum daripada bukti empati itu sendiri ([[self-report-measures]], [[empathy]]).

**Jangan mengutip efek tanpa desainnya.** Dalam tinjauan kritis atas 80 studi HCI tentang berpikir kritis dengan AI, 42 tidak menjalankan kelompok kontrol. Efek utama dari 30 siswa dalam satu mata kuliah di satu lokasi adalah bentuk umum dari klaim yang rapuh ([[limitations-in-aied-research]]).

**Jangan melaporkan heterogenitas tanpa modelnya.** Data yang sama menghasilkan I² = 82,98% di bawah model efek tetap dan 15,75% di bawah model efek acak; I² yang dikutip tanpa modelnya tidak dapat ditafsirkan ([[meta-analysis-systematic-review]]).

**Jangan menggeneralisasi dari satu konteks dan menyebutnya temuan.** Satu mata kuliah, satu institusi, satu versi model, satu bahasa. Perilaku model berubah pada setiap rilis, dan detektor yang dilatih pada satu generasi kehilangan daya ingat pada generasi berikutnya ([[research-gaps-aied]], [[ai-detection]]).

**Jangan memperlakukan korelasi antara interaksi dan hasil sebagai mekanisme.** Volume prompt tidak mengukur offloading kognitif — klaster berdasarkan volume tidak berbeda dalam distribusi pekerjaan kognitif, dan dialog yang dikodekan tangan tidak menemukan offloading sama sekali pada 49,6% dari 125 dialog ([[cognitive-offloading]]). Ukur pekerjaannya, bukan jejak yang terlihat.

**Jangan menerbitkan paragraf keterbatasan yang bisa saja ditulis sebelum studi dilakukan.** Sebutkan ancaman spesifiknya, jumlah spesifiknya, dan klaim yang dibatasinya. Itulah yang membuat keterbatasan berguna bagi pembaca berikutnya ([[interpreting-and-applying-aied-research]]).

## Mengapa hal-hal ini saling terkait

Setiap butir di atas adalah kasus proksi yang dinaikkan menjadi putusan: esai mewakili penulisnya, skor mewakili pelanggarannya, senyum mewakili empatinya, demo mewakili pembelajarannya, kebijakan mewakili tata kelolanya. Koreksinya selalu berupa langkah yang sama — sebutkan konstruknya, temukan ukuran yang bisa saja keluar sebaliknya, dan kumpulkan bersama ukuran yang nyaman.

Itu juga sebabnya peringatan-peringatan ini bukan daftar hal yang selalu salah. Detektor dapat menjadi alasan untuk berbicara dengan siswa. Chatbot dapat menjadi latihan yang berguna. Dasbor dapat menjadi dorongan untuk mengajukan pertanyaan. Kerugiannya ada pada substitusi, bukan pada alatnya.

## Yang perlu dilakukan pekan ini

- Pilih satu tugas yang dinilai dan tuliskan apa yang akan ditunjukkannya dengan alat tertutup. Jika jawabannya "tidak ada bedanya", tugasnyalah masalahnya.
- Tambahkan satu ukuran tanpa bantuan ke mata kuliah yang saat ini hanya melaporkan kinerja berbantuan.
- Baca kontrak proktoring atau alat AI institusi Anda untuk ketentuan penyimpanan, penggunaan sekunder, dan kebocoran — dan periksa apakah teks persetujuannya menggambarkan apa yang sebenarnya ditangkap sistem.
- Mintalah hasil tanpa bantuan dan hasil subkelompok dari vendor. Jika jawabannya berupa demo, Anda sudah mendapat jawabannya.
- Dalam sesi fakultas berikutnya, gunakan paruh kedua untuk perancangan ulang penilaian alih-alih prompting.

## Ke mana selanjutnya

- [[addressing-common-misconceptions-ai-education]] — keyakinan di balik praktik-praktik ini, dan cara mengoreksinya tanpa merendahkan.
- [[limitations-in-aied-research]] — apa yang belum dapat didukung basis bukti.
- [[reducing-ai-misuse]] — tuas struktural untuk penyalahgunaan, dan mengapa tuas itu mengalahkan imbauan.
- [[pedagogical-safety]] — apa yang dapat dilakukan tutor terhadap pembelajar sambil lolos setiap pemeriksaan konten.
- [[should-we-use-ai-detectors]] — bukti detektor secara lengkap.
- [[checking-whether-educational-ai-works]] — cara mengevaluasi klaim sebelum mengadopsinya.
