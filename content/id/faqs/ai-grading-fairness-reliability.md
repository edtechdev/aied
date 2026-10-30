---
title: "Dapatkah Saya Menggunakan AI untuk Menilai Pekerjaan Siswa Secara Adil dan Andal?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Anda punya rubrik yang Anda yakini, kiriman yang lebih banyak daripada jam yang tersedia, dan sebuah alat yang mengembalikan skor plus beberapa paragraf percaya diri dalam waktu yang dibutuhkan untuk membaca satu esai. Anda mencobanya pada pekerjaan yang sudah Anda nilai. Separuh skornya tampak tepat. Satu terasa anehnya murah hati, satu anehnya keras, dan Anda belum bisa memastikan apakah itu alatnya atau esainya.

Jawaban singkat untuk diberikan kepada kolega: penilaian AI memperoleh tempatnya sebagai asisten yang diawasi atau pembaca kedua, pada tugas-tugas di mana Anda telah memeriksanya terhadap pekerjaan yang sudah Anda nilai. Kesepakatan tidak berpindah antar jenis penilaian. Dalam ujian farmasi dengan enam belas mahasiswa, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] menemukan kesepakatan yang nyaris sempurna pada jenis butir objektif dan kesepakatan yang tidak dapat diandalkan pada jawaban terbuka. Di tiga universitas Inggris, [[opraise-automated-marking-ai-assessment-2026|proyek OpRaise]] menemukan penilai AI dan manusia sepakat pada band gelar antara 35% dan 65% sepanjang waktu tergantung institusi, dengan nilai yang terkompresi ke arah tengah. Alasan yang lancar bukan bukti bahwa kriteria Anda diterapkan. Apakah hasilnya [[assessment-validity|valid untuk keputusan Anda]] adalah pertanyaan lokal yang harus Anda jawab sendiri, dan [[human-in-the-loop-ai|seseorang tetap bertanggung jawab]] atas apa pun yang menjadi nilai tercatat.

## Versi singkat

**1.** Sebutkan perannya sebelum Anda menjalankan apa pun: asisten umpan balik, pembaca kedua, atau penilai utama. Ketiganya memerlukan jumlah bukti yang berbeda.

**2.** Mulailah dari peran yang paling tidak berkonsekuensi yang menjawab masalah nyata Anda. Jika kunci deterministik sudah cukup, LLM menambah risiko alih-alih nilai.

**3.** Kalibrasikan pada pekerjaan yang sudah Anda nilai, termasuk kiriman yang kuat, lemah, di ambang batas, dan berstruktur tidak biasa. Contoh yang nyaman tidak membuktikan apa pun.

**4.** Pisahkan set kalibrasi dari set uji, atau Anda hanya mengukur seberapa baik Anda menyetel alat itu pada esai yang sudah dikenal.

**5.** Laporkan kesepakatan eksak, selisih skor, dan arah bias, bukan korelasi. Periksa secara khusus batas lulus/tidak lulus.

**6.** Beri tahu siswa peran apa yang dimainkan alat itu, siapa yang memutuskan nilai, dan bagaimana cara meminta tinjauan.

## Tentukan apa yang boleh dilakukan AI

Tiga pengaturan disebut "penilaian AI" dan ketiganya membawa kewajiban yang berbeda.

**Asisten umpan balik** menyusun draf komentar atau menandai kemungkinan kelalaian untuk Anda terima, tulis ulang, atau buang. Risikonya terbatas pada kualitas komentar, dan Anda membaca semuanya sebelum sampai kepada siswa. **Pembaca kedua** mengusulkan skor per kriteria atau menandai ketidaksepakatan untuk menata penilaian Anda sendiri. Kesalahannya harus berguna, bukan sekadar salah: tanda yang mengirim Anda kembali ke kiriman yang seharusnya Anda nilai dengan ceroboh memang layak dipertahankan. **Penilai utama** menghasilkan skor yang menjadi nilai tercatat. Itulah pengaturan yang tidak didukung bukti dalam basis pengetahuan ini di luar kasus sempit yang divalidasi secara lokal.

Pilih anak tangga terendah yang menjawab kendala Anda yang sebenarnya. Jika beban penilaian Anda berasal dari memeriksa kunci jawaban tetap, penilaian deterministik biasa lebih transparan dan dapat diaudit daripada model bahasa, dan studi farmasi itu menunjukkan bahwa keunggulan LLM pada butir objektif sebagian merupakan artefak dari diberinya jawaban benar selama penilaian. Sisakan model untuk pekerjaan yang membutuhkan interpretasi, lalu periksa interpretasi itu.

[[automated-assessment|Penilaian otomatis]] mencakup mesin penilaian, moderasi, dan pembuatan umpan balik yang lebih luas. Halaman ini adalah pertanyaan pertimbangan yang mendasarinya.

## Apa yang sebenarnya ditunjukkan bukti

Kesepakatan bergantung pada jenis butir. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] menilai ujian farmasi berformat campuran yang dikerjakan 16 mahasiswa dan melaporkan kesesuaian dengan penilaian fakultas antara 0,935 dan 1,000 untuk butir pilihan ganda, pilih-semua-yang-berlaku, dan isian singkat. Kesepakatan pada jawaban subjektif terbuka tidak dapat diandalkan. Dua detail lebih penting daripada judul beritanya. Jawaban benar disediakan selama penilaian, yang membuat hasil butir objektif tampak lebih baik, dan penambahan rubrik tidak secara konsisten memperbaiki kesepakatan, yang melemahkan asumsi umum bahwa rubrik yang baik mengubah LLM menjadi penilai yang konsisten. Enam belas mahasiswa tidak dapat menopang klaim tentang mata kuliah Anda. Variasi di dalam satu ujian itulah temuan yang dapat dipindahkan: sistem yang menangani bagian pilihan ganda Anda tidak mengatakan apa pun tentang esai Anda.

Kesepakatan band bersifat moderat dan tidak merata. [[opraise-automated-marking-ai-assessment-2026|Laporan OpRaise]] meneliti esai psikologi sarjana yang autentik dan menemukan kesepakatan antara penilai AI dan manusia pada band gelar Inggris sebesar 63% di Cambridge, 53% di Nottingham, dan 35% di Manchester Metropolitan. Nilai terkompresi ke arah tengah, dengan ekor paling tidak akurat: esai yang dinilai manusia 75 diberi skor beberapa poin lebih rendah oleh setiap sistem AI, dan esai yang dinilai 50 beberapa poin lebih tinggi. Kompresi itulah kegagalan yang harus diwaspadai, karena ia merugikan justru siswa di puncak dan dasar distribusi Anda sementara bagian tengahnya tampak baik-baik saja. Ini adalah laporan proyek, bukan uji coba yang ditelaah sejawat, dan itulah peringatan paling berguna dalam basis bukti ini.

Nilai Anda sendiri adalah rujukan yang tidak sempurna. Para pengajar saling tidak sepakat, dan skor Anda sebelumnya pada esai serupa adalah pertimbangan, bukan kebenaran dasar. Kesepakatan dengan satu penilai menetapkan konsistensi dengan penilai itu, yang tidak sama dengan keadilan. Jika taruhannya menuntut, gunakan pembaca kedua yang berkualifikasi untuk memutuskan kasus sulit, dan perlakukan ketidaksepakatan antara AI dan penilai manusia sebagai dorongan untuk membaca ulang pekerjaan itu, bukan sebagai vonis tentang pihak mana yang benar.

Konsistensi dan pertimbangan yang sehat menyimpang. Model dapat mengembalikan skor yang nyaris identik pada pengulangan sambil menerapkan kriteria Anda dengan buruk, karena keterulangan mengukur stabilitas, bukan validitas. Ekor OpRaise menunjukkan polanya: sistem itu stabil dan salah tentang esai yang paling penting.

## Validasi prosedurnya sebelum menyentuh sebuah nilai

Kerjakan ini pada kiriman yang sudah dinilai sebelumnya dan dilindungi secara semestinya, yang mencakup respons yang benar-benar Anda terima: kuat, lemah, di ambang batas, tidak lengkap, berstruktur tidak biasa, dan jawaban benar yang diungkapkan dengan cara tidak lazim.

**1. Nyatakan kriteria dan tuntut buktinya.** Berikan tugas, rubrik, aturan penilaian, dan contoh bagaimana jawaban alternatif yang sah memperoleh kredit. Mintalah justifikasi ringkas per kriteria yang terikat pada bagian yang dapat diidentifikasi. Lalu periksa justifikasi itu terhadap kiriman tersebut sendiri.

**2. Pisahkan kalibrasi dari evaluasi.** Setel pada satu set, uji pada set lain. Tanpa pemisahan itu Anda tidak dapat membedakan prosedur yang tervalidasi dari prosedur yang hanya cocok.

**3. Ukur keputusan yang penting.** Catat kesepakatan eksak, ukuran dan arah selisih skor, serta apakah model secara sistematis memberi nilai lebih tinggi atau lebih rendah. Periksa batas lulus/tidak lulus dan batas berkonsekuensi lain secara tersendiri. Korelasi yang tinggi dapat berdiri di atas pergeseran sistematis.

**4. Uji keterulangan dan perilaku subkelompok.** Jalankan ulang sebagian pada pengaturan identik. Cari kesalahan per kriteria dan kecenderungan bahasa, format, atau gaya yang sah disalahartikan sebagai pemahaman yang lebih lemah. Jumlah subkelompok yang kecil menopang kehati-hatian, bukan klaim keadilan.

**5. Tulis aturan eskalasinya.** Putuskan kasus mana yang selalu dinilai manusia dan bagaimana ketidaksepakatan diselesaikan. Jangan biarkan keyakinan yang dinyatakan model memutuskan; keyakinan perlu divalidasi terhadap kesalahan yang teramati sebelum dapat berbobot.

**6. Lindungi alur kerjanya.** Gunakan lingkungan yang disetujui, minimalkan informasi pengenal, dan pisahkan rubrik serta instruksi dari konten yang dikirimkan. Pemisahan itu membuat manipulasi lebih sulit disembunyikan. Itu tidak membuatnya mustahil.

**7. Catat apa yang akan membatalkan pemeriksaan itu.** Simpan model dan versinya, prompt, rubrik, dan pengaturannya. Pembaruan model atau revisi rubrik adalah alasan untuk mengulangi pemeriksaan yang representatif alih-alih mengasumsikan kesinambungan.

## Buat pengaturan itu terlihat oleh siswa

Siswa berhak mengetahui peran apa yang dimainkan alat itu, siapa yang memutuskan, dan bagaimana mengajukan keberatan atas hasil. Pengungkapan yang kabur menghasilkan kecurigaan; yang spesifik menghasilkan hubungan yang dapat dijalankan. Kurang lebih begini: "Alat AI yang disetujui dapat membuat draf komentar rubrik pada draf Anda. Saya meninjau setiap komentar dan menentukan nilai Anda. Hubungi saya jika ada komentar yang salah menggambarkan pekerjaan Anda." Lalu buatlah itu benar.

Dua arah kegagalan perlu perhatian terpisah. Potongan nilai yang berlebihan adalah yang dilaporkan siswa, dan itu mendominasi banding. Kredit yang tidak semestinya adalah yang tidak disebutkan dan diam-diam merusak catatan. Ambil sampel untuk keduanya, dan sertakan jam verifikasi Anda ketika menilai apakah alur kerja itu menghemat sesuatu.

## Apa yang akan kembali kepada Anda

**"Manusia juga bias."** Benar, dan itulah sebabnya perbandingan membutuhkan kriteria eksplisit alih-alih skor satu penilai sebagai standar. Sebaran institusional OpRaise adalah argumennya di sini: jika penilai manusia di tiga universitas menghasilkan kesepakatan band yang begitu berbeda dengan sistem yang sama, rujukan manusianya adalah bagian yang harus ditentukan, bukan tolok ukur yang tetap.

**"Rubrik membuatnya objektif."** Rubrik membuat ekspektasi eksplisit. Menerapkannya tetap merupakan interpretasi, dan studi farmasi menemukan bahwa penyediaan rubrik tidak secara konsisten memperbaiki kesepakatan. Yang Anda beli dengan rubrik adalah standar yang dapat diperiksa untuk justifikasinya, bukan jaminan untuk skornya.

**"Saya harus memeriksa semuanya, dan itu menghapus tujuannya."** Untuk sebagian tugas, itulah kesimpulan yang tepat, dan jawabannya adalah mempersempit pekerjaannya. Menyusun draf komentar dari catatan penilaian Anda sendiri menyerahkan pertimbangan tetap kepada Anda dan menghapus pekerjaan mengetik. Tanda pembaca kedua pada kiriman di ambang batas memusatkan perhatian Anda di tempat yang mengubah hasil.

**"Kolega saya mencobanya dan hasilnya bagus."** Tanyakan apa yang mereka ukur. Penilaian positif hidup berdampingan dengan kesalahan dalam literatur ini secara rutin, dan kolega yang membaca beberapa keluaran masuk akal baru menjalankan demonstrasi, bukan validasi. Pertanyaannya adalah apa yang akan dilakukan prosedur mereka terhadap esai-esai yang paling terakhir Anda sadari.

## Yang perlu dilakukan pekan ini

**1.** Pilih satu penilaian dan tuliskan satu peran yang akan dimainkan AI. Tuliskan bukti apa yang akan memungkinkan Anda menaikkannya satu anak tangga.

**2.** Jalankan pada lima kiriman yang sudah Anda nilai, dipilih agar mencakup satu yang kuat, satu yang lemah, satu di ambang batas, dan satu dengan struktur tidak lazim tetapi sah.

**3.** Catat setiap ketidaksepakatan beserta pekerjaan dan kriterianya, dan sebutkan kesalahan yang Anda anggap tidak dapat diterima, bukan sekadar salah.

**4.** Uji apakah selisih skor berjalan ke arah yang konsisten, dan periksa batas lulus/tidak lulus Anda secara terpisah.

**5.** Susun paragraf pengungkapan untuk siswa dan jalur menuju tinjauan, lalu bandingkan waktu verifikasi Anda dengan waktu penilaian yang Anda hindari.

## Ke mana selanjutnya

[[assessment-validity|Validitas penilaian]] adalah konsep yang memutuskan pertanyaan-pertanyaan ini: apakah buktinya menopang inferensi yang ingin Anda buat. [[automated-assessment]] mencakup teknologinya dan kinerjanya yang terukur di berbagai format, dan [[ai-feedback-at-scale]] menangani masalah yang berdekatan, yaitu komentar yang dihasilkan dan apakah siswa menindaklanjutinya.

Untuk apa yang seharusnya diwakili sebuah nilai ketika siswa menggunakan AI, termasuk substitusi konstruk dan bukti proses yang terautentikasi, lihat [[redesign-assessment-ai-era|merancang ulang penilaian di era AI]]. Untuk apakah deteksi dapat menggantikan rancangan tugas yang dapat dipertahankan, lihat [[should-we-use-ai-detectors|apakah perlu menggunakan detektor AI]]. Untuk pertanyaan evaluasi yang mendasari semuanya, lihat [[checking-whether-educational-ai-works|memeriksa apakah AI pendidikan berfungsi]].
