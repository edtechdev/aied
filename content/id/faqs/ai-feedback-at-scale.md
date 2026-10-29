---
title: "Bagaimana AI Dapat Membantu Saya Memberikan Umpan Balik yang Lebih Baik dalam Skala Besar?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Ini minggu keenam. Anda punya setumpuk draf, rubrik yang Anda yakini, dan kecurigaan yang tumbuh bahwa sepertiga komentar Anda hanya dibaca sekilas lalu dilupakan. Seorang kolega menyebutkan bahwa sebuah alat sekarang mengomentari setiap draf dalam waktu satu jam. Rapat departemen membutuhkan jawaban: apakah ini peningkatan, atau cara lebih cepat menghasilkan teks yang tidak dibaca siapa pun?

Jawaban singkat untuk diberikan kepada kolega: umpan balik AI memperoleh tempatnya pada cakupan, ketepatan waktu, dan konsistensi, di dalam rentang yang sempit. Pekerjaan bahasa pada skala penyuntingan salinan dan komentar awal yang dipandu rubrik layak diotomasi. Jangkauan adalah bagian yang murah. Dalam eksperimen acak klaster dengan 1.176 mahasiswa tingkat pertama, rancangan reflektif dan hibrida mengalahkan kritik AI langsung pada [[transfer-of-learning|transfer]] tertunda tanpa AI. Dalam eksperimen esai acak dengan 70 siswa, umpan balik AI yang dinilai lebih baik tidak menghasilkan revisi yang lebih baik daripada umpan balik guru berpengalaman. Apa yang dilakukan siswa dengan sebuah komentar menentukan hasilnya, dan [[feedback-literacy|literasi umpan balik]] memisahkan siswa yang memperoleh manfaat dari mereka yang menyalin.

## Versi singkat

**1.** Putuskan apa yang dihitung sebagai kemenangan sebelum Anda menguji coba apa pun: kualitas revisi dan kinerja tertunda tanpa bantuan, bukan kelancaran komentarnya.

**2.** Pilah komentar Anda sendiri menjadi perbaikan tingkat bahasa dan keputusan tingkat pertimbangan. Hanya kategori pertama yang merupakan calon otomasi.

**3.** Atur sumbernya secara bertahap. Evaluasi diri lebih dahulu, umpan balik teman sebaya kedua, kritik AI ketiga. Dua sumber yang diletakkan berdampingan menghasilkan penerimaan pasif.

**4.** Berikan rubrik Anda kepada model dan minta ia bernalar langkah demi langkah. Instruksi telanjang menghasilkan keluaran generik.

**5.** Pertahankan pesan akhir, nada, dan apa pun yang menjadi catatan resmi pada manusia.

**6.** Anggarkan jam yang akan Anda habiskan untuk penghapusan dan kalibrasi, dan bandingkan dengan jam yang Anda bebaskan.

## Putuskan apa yang dihitung sebagai kemenangan sebelum Anda menguji coba apa pun

Metrik yang menggoda adalah kualitas tulisan model. Itu juga metrik yang menyesatkan.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al. (2026)]] mengacak 70 siswa yang menulis esai argumentatif dalam bahasa Persia ke dalam tiga kelompok. Prompt rantai-pemikiran menghasilkan umpan balik yang dinilai secara signifikan lebih tinggi (M = 12,90) daripada prompt tanpa contoh (M = 11,25, p = 0,01) dan daripada guru manusia berpengalaman (M = 11,20, p = 0,008). Kelompok rantai-pemikiran tidak merevisi esainya secara signifikan lebih banyak daripada kelompok umpan balik guru, yang memperoleh perolehan sebanding. Komentar lebih baik, revisi sama. Jika kriteria keberhasilan Anda adalah kualitas komentar, studi itu terbaca sebagai kemenangan. Jika kriterianya adalah apa yang berubah dalam esai, tidak.

Dua sinyal lain membuat uji coba yang berjalan buruk tampak lebih baik, jadi tetapkan keduanya lebih dahulu. Kepuasan siswa adalah salah satunya. Dalam uji coba Deakin di seluruh universitas yang dilaporkan [[tubino-adachi-ai-automated-feedback-literacy|Tubino dan Adachi (2022)]], penilaian rata-rata yang positif berjalan bersama kesalahan yang ditandai siswa, jadi survei wajah tersenyum bukan bukti ketepatan. Penggunaan adalah yang lain. Alat Deakin bersifat opsional, dan penggunaannya rata-rata sekitar 13% mahasiswa sarjana dan 12% mahasiswa pascasarjana meskipun hampir 4.000 siswa memiliki akses. Siswa proaktif dan berprestasi tinggi lebih banyak menggunakannya. Itulah yang Anda dapatkan dari menyediakan sebuah alat.

Ukuran hasil yang bertahan adalah kualitas revisi ditambah kinerja tertunda tanpa AI. Pengumpulan ulang berkali-kali pada hari yang sama adalah jejak yang dapat dipakai untuk melihat apakah siswa terlibat sama sekali. Itu bukan bukti bahwa ada yang dipelajari.

## Pilah komentar Anda sebelum mengotomasinya

Ambil set komentar terakhir Anda dan bagi menjadi dua: perbaikan pada kalimat, dan keputusan tentang pemikiran. Pembagian itu memberi tahu Anda apa yang harus diotomasi, dan cakupannya lebih sempit daripada yang disiratkan vendor.

Uji coba Deakin berjalan pada 2021 menggunakan alat umpan balik otomatis AI dari FeedbackFruits di 29 unit dan hampir 4.000 siswa. Alat itu bekerja pada fitur teks tingkat mikro: panjang kalimat, tanda baca, tata bahasa, struktur teks. Itu mendukung tahap penyuntingan salinan, ketika pengajar menetapkan parameternya, siswa menggunakan alat itu secara mandiri, dan umpan balik datang tepat waktu untuk dapat ditindaklanjuti. Pembagian kerja itulah yang berskala, bukan modelnya.

Komentar tingkat pertimbangan adalah tempat mode kegagalan berada. [[learner-centered-feedback-ai|Aldino et al. (2026)]] mengumpulkan masalah dari sisi pengajar dari 21 guru pendidikan tinggi: nada yang tidak konsisten (n = 7), potensi misinformasi (n = 5), dan masalah kepercayaan (n = 5). Usaha revisi mereka habis untuk menghapus pujian yang berlebihan dan saran generik alih-alih menambahkan isi. Daftar itu adalah pekerjaan tinjauan Anda, dan di situlah jamnya habis.

## Atur sumbernya secara bertahap alih-alih menumpuknya

Bukti rancangan terkuat datang dari eksperimen lapangan multisitus, acak klaster, dan longitudinal: 1.176 mahasiswa tingkat pertama di 48 kelas di 4 universitas dan 3 domain [[stem-education|sains]], diacak pada tingkat kelas ke kondisi hanya teman sebaya, GenAI langsung, GenAI reflektif, dan hibrida ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Kondisi reflektif menuntut evaluasi diri sebelum kritik AI. Kondisi hibrida menjalankan evaluasi diri, lalu umpan balik teman sebaya, lalu kritik GenAI. Hibrida menghasilkan perolehan kualitas argumen tertinggi dan keunggulan paling jelas pada pembelajaran konseptual. Reflektif dan hibrida sama-sama menghasilkan penerimaan umpan balik yang lebih kuat dan lebih banyak [[self-regulated-learning|pembelajaran yang diatur sendiri]] daripada GenAI langsung, dan keduanya mengunggulinya pada transfer tertunda tanpa AI. GenAI langsung memang menaikkan kualitas argumen segera di atas umpan balik teman sebaya, itulah keunggulannya, dan ia melakukannya dengan transfer yang lebih lemah.

Mekanismenya menjelaskan mengapa pengurutan lebih penting daripada alatnya. Kritik langsung mengundang penerimaan pasif: siswa membaca putusan dan menerapkannya. Rancangan reflektif dan hibrida memaksa siswa menafsirkan komentar, membandingkannya dengan kriteria, menilai relevansinya, lalu merevisi. Nilai pendidikan lebih bergantung pada apakah lingkungan umpan balik mempertahankan [[agency|agensi pembelajar]] dan [[evaluative-judgment|pertimbangan evaluatif]] selama revisi daripada pada akses AI.

Umpan balik teman sebaya memperoleh tempatnya sendiri dalam urutan itu. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen dan Yan (2026)]] menjalankan dua kelas bahasa Inggris paralel (N = 118 mahasiswa tingkat pertama di Tiongkok; GenAI n = 56, teman sebaya n = 62) melalui tiga siklus penilaian diri selama satu semester. Perancah GenAI memperbaiki literasi umpan balik sedikit tetapi signifikan dibandingkan tinjauan teman sebaya manusia (ANCOVA p = 0,049, ηp² = 0,03). Siswa GenAI menyempurnakan prompt secara iteratif dan memverifikasi atau menantang keluaran yang tidak akurat. Siswa kelompok teman sebaya memilih sumber menurut kenyamanan sosial dan pertimbangan evaluatif mereka terdistorsi oleh bias pertemanan. Tinjauan teman sebaya mempertahankan nilai tersendiri bagi kesadaran audiens, dan itulah sebabnya para penulis mengusulkan rancangan bertahap dengan umpan balik teman sebaya anonim alih-alih penggantian.

Keunggulan Gu et al. kecil, dan mereka membacanya sebagai nyata tetapi tidak transformatif dengan sendirinya. Perancah guru, pedoman prompt, dan lembar kerja melakukan kerja pendukungnya.

## Berikan rubrik kepada model, lalu minta ia menunjukkan langkahnya

Pembuatan yang merujuk rubrik adalah bagian yang dapat diotomasi.

Perolehan kualitas Farrokhnia et al. berasal dari prompt rantai-pemikiran yang menuntun model melalui evaluasi langkah demi langkah terhadap rubrik argumentasi, bukan dari instruksi telanjang untuk memberi umpan balik. Gu et al. memberikan kepada kelompok GenAI mereka ChatGPT-4o dengan rubrik terlatih dan pedoman prompt, dan itulah yang membuat keluarannya dapat diperiksa terhadap kriteria yang dinyatakan. Dalam kedua kasus, prompt adalah tempat kriteria Anda masuk ke sistem, dan jejak penalaran adalah yang memungkinkan Anda melihat apakah model menerapkannya.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson dan Yan (2025)]] menjadikan kualitas prompt sebagai poros seluruh proses. Prompt yang kabur menghasilkan keluaran generik yang tidak berguna, dan komentar yang dihasilkan dapat berhalusinasi, bias, atau bertumpang tindih, yang mendorong pertimbangan evaluatif kembali kepada pembacanya. Kalibrasi bahkan lebih tajam. Dalam Farrokhnia et al., kualitas umpan balik GenAI secara signifikan berhubungan dengan kekuatan draf awal siswa, sementara kualitas umpan balik guru tidak. Guru mengalibrasi lebih konsisten. Volume berskala. Kalibrasi tidak.

## Pertahankan kata terakhir dan catatan resmi pada manusia

[[becerra-aicofe-feedback-2026|Becerra, Palma dan Cobos (2026)]] menjelaskan AICoFE, yang menjalankan tiga model yang disetel secara independen (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) atas skor rubrik dan observasi kualitatif untuk menghasilkan komentar draf yang independen. Pengajar kemudian menyusun pesan akhir dengan memilih kalimat atau paragraf, dengan legenda yang menunjukkan model mana menyumbangkan apa. Model menyusun draf. Pengajar menyampaikan, dan hasil yang disampaikan ditandatangani oleh satu orang yang telah membaca draf itu.

Aldino et al. menemukan pola bantu-lalu-verifikasi yang sama dalam praktik biasa. Komponen pembelajaran mesin paling sering menandai "Meeting Learning Objective" sebagai hilang (20 dari 21 guru telah melewatkannya; 16 menerima tanda itu) dan "Student-Teacher Relationship" (14 melewatkannya; 12 menerima). Guru memutuskan setiap saran berdasarkan pertimbangan profesional, dan itulah inti dari menempatkan mereka dalam lingkar proses.

Dua belas dari 21 guru Aldino et al. membuat revisi tingkat kalimat lebih lanjut, dan pola dominannya adalah mengalibrasi nada: menurunkan pujian (f = 11), menghapus saran (f = 9), menghapus dorongan (f = 8). Revisi terpusat pada dimensi relasional, terutama Student-Teacher Relationship (f = 24). Mereka melindungi keaslian dan suara profesional, dan pekerjaan itu tidak dapat diotomasi.

## Ajari siswa membaca komentarnya

Literasi umpan balik adalah prasyarat, dan distribusinya tidak merata.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths dan Lodge (2026)]] meminta 32 siswa psikologi mengerjakan tugas esai 25 menit yang direkam layarnya dengan akses tak terbatas ke ChatGPT, lalu menonton rekamannya kembali dalam wawancara dengan rangsangan video. Literasi umpan balik adalah satu-satunya prediktor positif yang signifikan bagi nilai esai (β = 0,46, p = 0,017). Frekuensi penggunaan GenAI, [[trust|keterpercayaan sumber]], dan [[prior-knowledge|pengetahuan awal]] tidak memprediksi kinerja, sebuah poin yang juga diajukan [[feedback-futures-genai|Zhan, Wood, Carless dan Yan (2026)]] dalam editorial edisi khusus mereka. Kurang dari sepertiga siswa membandingkan keluaran AI dengan sumber internet lain. Separuhnya menyatakan penghindaran AI secara sengaja demi [[academic-integrity|integritas akademik]] atau karena mereka menginginkan esai itu dalam kata-kata mereka sendiri. Sebagian besar meminta umpan balik tingkat tugas, yang bertransfer dengan buruk ke tugas lain.

Ekstremnya terlihat pada pasangan penulis IELTS yang digambarkan Zhan et al. Seorang siswa berlitarasi rendah menulis prompt yang kabur, mendapat umpan balik generik, memercayai atau menyalinnya secara berlebihan, dan terlibat secara dangkal. Seorang siswa berlitarasi tinggi menulis prompt yang merujuk kriteria, menindaklanjuti, memeriksa silang sumber, dan memantau revisi. Perbedaannya adalah pengajaran dan kebiasaan, bukan akses alat.

Katakan kepada siswa secara langsung bahwa komentar model dapat berhalusinasi, bias, atau bertumpang tindih, dan bahwa siswa pemilik revisinya. Bingkai keluarannya sebagai pendapat atas draf yang harus dinilai, bukan jawaban yang harus disalin. Lalu minta perbandingannya, karena kurang dari sepertiga siswa membuatnya tanpa diminta.

## Apa yang salah dipahami pengajar tentang hal ini

Lebih banyak komentar berarti lebih banyak umpan balik. Komentar murah dihasilkan dan mahal diserap, dan kendalanya berada di sisi siswa dalam lingkar itu. Komentar AI Farrokhnia et al. yang dinilai lebih tinggi tidak menghasilkan revisi lebih banyak daripada komentar guru.

Model yang lebih baik akan memperbaiki keluaran generik. Kegagalan alat Deakin adalah kegagalan cakupan: fitur tingkat kalimat, rentang penyuntingan salinan yang sempit. Zhan et al. menempatkan perbaikannya pada prompt, rubrik, atau manusia, bukan pada model yang lebih besar. Pasangan penulis IELTS adalah demonstrasinya; alat sama, kebiasaan berbeda, hasil berbeda.

Menyediakan alatnya adalah intervensinya. Penggunaan berjalan pada sekitar 13% mahasiswa sarjana dan 12% mahasiswa pascasarjana ketika alat itu opsional. Sisa pertanyaan rancangannya adalah apa yang terjadi pada 87% lainnya.

Penghematan waktu bersifat otomatis. Ketika ditanya apa yang diberikan alat umpan balik AI kepada mereka, 21 guru jarang menyebut penghematan waktu (n = 2). Mereka jauh lebih sering menyebut refleksi (n = 14), perbaikan bahasa dan struktur (n = 11), serta identifikasi komponen yang hilang (n = 10). Penyuntingan (f = 32) dan penghapusan (f = 27) mendominasi kerja revisi mereka, dengan penambahan jarang (f = 8). Yang muncul adalah draf dan prompt diagnostik. Yang juga muncul adalah kerja tinjauan, kalibrasi, dan verifikasi. [[ai-save-instructor-time|Pertanyaan beban kerja]] adalah yang paling sering dijanjikan akan hilang, dan GenAI mendistribusikan ulang kerja guru alih-alih menghapusnya.

Penilaian kepuasan memberi tahu Anda bahwa komentarnya akurat. Dalam uji coba Deakin, penilaian rata-rata yang positif berjalan bersama kesalahan yang ditandai siswa. Ambil sampel keluarannya dan bandingkan dengan bacaan Anda sendiri atas draf yang sama, lalu catat di mana model bersifat generik, keliru, atau menyanjung.

## Apa yang akan kembali kepada Anda

**"Umpan balik AI tidak personal."** Sering kali benar, dan itulah alasan mempertahankan kata terakhir pada manusia. AICoFE ada karena prosa model yang generik bukanlah yang seharusnya diterima siswa: pengajar memilih, menyunting, dan menandatangani pesan akhirnya. Ke-21 guru dalam Aldino et al. menulis ulang nadanya karena alasan yang sama. Personalisasi adalah tugas Anda dalam rancangan ini, dan model yang mengerjakan pekerjaan persiapannya.

**"Siswa saya tidak akan membaca umpan baliknya, apa pun yang terjadi."** Mereka membaca lebih sedikit daripada yang kami harapkan, dan buktinya mengatakan perbaikannya adalah rancangan, bukan volume. Penerimaan dalam uji coba Deakin berjalan pada sekitar 13% dan 12%. Komentar Farrokhnia et al. yang dinilai lebih tinggi tidak menghasilkan revisi tambahan. Yang menggerakkan jarum adalah pengurutan yang memaksa keterlibatan, evaluasi diri lalu umpan balik teman sebaya lalu kritik AI, ditambah tiga siklus revisi sepanjang satu semester yang menghasilkan perbedaan literasi umpan balik yang terukur.

**"Ini bukan yang dibayar siswa."** Kalau begitu jangan biarkan AI menjadi satu-satunya suara yang mereka dengar dari Anda. Versi yang dapat dipertahankan memberi siswa lebih banyak momen umpan balik sementara Anda menghabiskan jam Anda pada bagian yang padat pertimbangan: kata terakhir, kalibrasi, komentar yang membawa otoritas Anda. Yang hilang dari siswa di bawah penerapan yang sembarangan adalah koherensi antara kriteria, komentar, dan hasil. Nyatakan komplementaritasnya melalui pengurutan, perbandingan, penyuntingan, dan tata kelola, dan keberatan itu kehilangan kekuatannya. Biarkan dua sumber berdampingan, dan ia tidak kehilangan kekuatannya.

**"Saya tidak punya waktu untuk meninjau semua yang ditulis model."** Kalau begitu jangan tinjau semuanya. Otomasikan rentang ketika kesalahan murah ditangkap, yaitu pekerjaan bahasa tingkat kalimat, dan ambil sampel keluaran tingkat pertimbangan dan bandingkan dengan draf yang sudah Anda nilai. Angka Aldino memberi tahu Anda apa yang harus dicari: nada, misinformasi, pujian berlebihan, tumpang tindih.

## Yang perlu dilakukan pekan ini

**1.** Pilah set komentar terakhir Anda menjadi perbaikan tingkat bahasa dan keputusan tingkat pertimbangan, lalu hitung tiap tumpukan.

**2.** Tulis prompt langkah demi langkah yang merujuk rubrik yang akan Anda berikan kepada model, dan uji pada tiga draf yang sudah Anda nilai.

**3.** Ambil sampel keluarannya dan bandingkan dengan komentar Anda sendiri, lalu catat di mana model bersifat generik, keliru, atau menyanjung.

**4.** Atur satu tugas sebagai evaluasi diri, lalu umpan balik teman sebaya, lalu kritik AI, dan beri tahu siswa bahwa AI adalah pendapat draf yang diharapkan mereka tantang.

**5.** Minta satu perbandingan terhadap sumber kedua atau terhadap kriterianya, karena kurang dari sepertiga siswa melakukan ini tanpa diminta.

**6.** Catat berapa banyak umpan balik akhir yang berasal dari model dan berapa banyak yang Anda ubah. Pelacakan kurasi AICoFE adalah model bagi catatan itu.

**7.** Perhatikan perpecahan ahli-novice. Pengajar dengan pengalaman lebih dari lima tahun melaporkan lebih banyak masalah dengan keluaran alat itu daripada rekan yang kurang berpengalaman, yang menghargai perancahnya. Jika rekan senior Anda melihat lebih banyak kegagalan daripada Anda, itu informasi tentang kalibrasi Anda sendiri.

## Ke mana selanjutnya

[[feedback|umpan balik]] adalah konsep payung bagi seluruh sistem: penyediaan, lingkar, penerimaan, dan konteks penilaian. [[ai-feedback-quality|Kualitas umpan balik AI]] membahas apa yang membuat komentar yang dihasilkan akurat, berguna, tepat waktu, dan sehat secara pedagogis, dan halaman ini adalah bagian tengah yang praktis, tentang kombinasi bagian-bagian itu mana yang menghasilkan umpan balik yang lebih baik dalam skala besar.

Pertanyaan tentang apa arti sebuah nilai setelah AI terlibat, termasuk substitusi konstruk, bukti proses yang terautentikasi, dan aturan integritas, menjadi milik [[redesign-assessment-ai-era|merancang ulang penilaian di era AI]] dan [[assessment-validity|validitas penilaian]] alih-alih halaman ini. Untuk kasus khusus pengajaran menulis, lihat [[writing-instruction-ai-best-practices|praktik terbaik pengajaran menulis dalam konteks AI]].
