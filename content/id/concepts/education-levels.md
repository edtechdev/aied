---
title: "Tingkat Pendidikan"
created: "2026-09-20T13:08:39-04:00"
type: concept
foundations: [ai-education, learner-identity]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment, learning-gains]
methods: [meta-analysis-systematic-review]
audience: [learners, parents and families]
institutions: [educational-policy-ai, governance]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy, pedagogical-safety]
level: [preschool, primary education, middle school, secondary, k 12, higher ed, undergraduate, graduate, adult learning, special education, teacher education]
confidence: medium
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/education-levels"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Tingkat pendidikan** — jenjang yang mengorganisasi metadata `level` basis pengetahuan ini: **prasekolah**, **pendidikan dasar**, **sekolah menengah pertama**, **menengah**, **K-12**, **pendidikan tinggi**, **sarjana**, **pascasarjana**, **pembelajaran orang dewasa**, **pendidikan khusus** dan pendidikan **[[teacher-role|guru]]**. Halaman ini adalah payung bagi bidang tersebut alih-alih duplikat salah satu halaman jenjang: ia menjelaskan apa yang berubah ketika Anda bergerak melintasi jenjang, mengapa sekat sekolah/universitas lebih penting daripada mata pelajaran yang diajarkan, dan di mana bukti AI padat serta di mana ia tipis.

## Pertanyaan untuk Dipertimbangkan

- Sebuah seminar pascasarjana dan pelajaran matematika kelas dua sama-sama "pendidikan", namun alat yang membantu salah satunya dapat merugikan yang lain. Apa pada jenjang — bukan pada mata pelajaran — yang mengubah seperti apa penggunaan AI yang baik?
- Satu uji coba dengan 132 siswa kelas dua menemukan tutor matematika adaptif tidak lebih baik daripada urutan tetap. Apakah Anda mengharapkan hasil nol yang sama pada mahasiswa, dan kapasitas siswa seperti apa yang diam-diam diasumsikan oleh adaptasi?
- 'K-12' dan 'pendidikan tinggi' masing-masing memadatkan beberapa latar yang berbeda ke dalam satu label. Perbandingan apa yang disembunyikan label-label itu?
- Jika basis bukti suatu jenjang tipis, apakah respons jujurnya adalah tidak mengatakan apa pun, meminjam dari jenjang yang berdekatan, atau merancang sebuah studi?

## Pendahuluan

Bidang metadata `level` menamai jenjang pendidikan yang menjadi pokok sebuah sumber — jenjang, bukan usia: **prasekolah**, **pendidikan dasar**, **sekolah menengah pertama**, **menengah**, **K-12**, **pendidikan tinggi**, **sarjana**, **pascasarjana**, **pembelajaran orang dewasa**, **pendidikan khusus**, **pendidikan guru**. Beberapa menamai tahap persekolahan, dua menamai dua paruh studi universitas yang sangat berbeda, dua menamai [[learners|populasi siswa]] alih-alih tahap, dan satu menamai orang-orang yang mengajar. Sebuah sumber dapat memuat beberapa jenjang sekaligus.

Halaman ini adalah payung bagi bidang tersebut; halaman-halaman jenjang melakukan kerja mendalam dan semestinya dibaca bersamanya: [[k-12]], [[early-childhood-elementary-ai-education]], [[higher-ed]], [[adult-learning]], [[special-education]], [[teacher-education]] dan [[vocational-education]].

## Apa yang membedakan satu jenjang dari yang lain

Jenjang berbeda di sepanjang beberapa sumbu sekaligus, dan penelitian AI biasanya hanya memvariasikan satu di antaranya.

- **Kapasitas untuk regulasi diri.** Dua versi tutor matematika kelas dua yang sama — konten, antarmuka, umpan balik, dan petunjuk lisan identik, hanya berbeda pada apakah pemilihan tugas mengikuti estimasi penguasaan [[knowledge-tracing|Bayesian Knowledge Tracing]] — tidak menghasilkan perbedaan pascates di antara 132 anak berusia tujuh tahun (F(1, 124) = 0.32, p = .574). Penjelasan pertama para penulis bersifat perkembangan: [[adaptive-learning|sistem adaptif]] mengandaikan siswa yang dapat menanggapi umpan balik, mengatur usaha, dan tetap fokus, sementara anak kecil memiliki [[self-regulated-learning|regulasi diri]] yang terbatas ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Siapa yang memediasi interaksi.** Pada jenjang persekolahan, orang dewasa berdiri di antara siswa dan alat. Survei terhadap 270 guru prasekolah menemukan niat adopsi didorong oleh [[technology-acceptance-model|kegunaan yang dipersepsikan]], kemudahan penggunaan, [[self-efficacy]] AI dan [[anxiety-and-stress|kecemasan AI]] — dan studi itu sengaja mengecualikan AI yang diarahkan pada anak ([[preschool-teachers-ai-behavioral-intention-2026]]).
- **Untuk apa penilaian itu.** Penilaian menengah memasok taruhan eksternal; penilaian universitas adalah tugas kuliah dan kredensial; penilaian pascasarjana adalah pembentukan seorang peneliti.
- **[[prior-knowledge|Pengetahuan awal]].** Pengetahuan awal mendominasi kinerja pascates dalam uji coba itu (F(1, 124) = 206.99, p < .001, η²p = .63), sehingga label jenjang berkorelasi dengan, tetapi tidak sama dengan, tingkat pengetahuan.

## Tahun-tahun sekolah dan tahun-tahun universitas

Sekat yang paling berkonsekuensi adalah perpecahan antara sekolah dan universitas, dan dua label paling umum masing-masing menyembunyikannya atau melintasinya.

Di dalam tahun-tahun sekolah, hasil yang diukur berubah tajam menurut jenjang. Di sekolah dasar hasilnya adalah pembelajaran mata pelajaran: 97 siswa kelas tiga di Tiongkok yang menggunakan [[conversational-ai|chatbot GenAI]] dalam [[science-education|inkuiri sains]] mengajukan masalah lebih baik daripada kontrol mesin pencari (t = 2.47, p = 0.015) ([[dai-chatbots-problem-posing-primary-2026]]). Di sekolah menengah, hasilnya sering menjadi sikap alih-alih prestasi: survei terhadap 508 siswa SMP Taiwan menemukan daya tarik pengalaman bekerja melalui kenikmatan untuk membentuk niat menggunakan [[generative-ai|ChatGPT]] untuk pembelajaran lirik (XM → PEOU β = 0.630; PE → ATU β = 0.369), dengan 81.5% berada pada tier gratis — sebuah fakta [[equity-in-ai-education|keadilan]] akses yang menyamar sebagai temuan penerimaan teknologi ([[chatgpt-music-education-junior-high-2026]]). Jenjang menengah juga memuat peringatan pembelajaran terbesar dalam korpus: pada 26,811 siswa Tiongkok di kelas 7–12, skor pekerjaan rumah naik 18% dan waktu penyelesaian turun 30% sementara skor [[summative-assessment|ujian buku tertutup]] turun sekitar 20% dalam enam bulan, terkonsentrasi pada ~81% yang perilakunya mengindikasikan pengalihdayaan pekerjaan rumah ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).

Tahun-tahun universitas terbelah lagi. Studi sarjana adalah tugas kuliah di bawah penilaian eksternal: di antara penulis sarjana di universitas R1 yang melayani kelompok minoritas, [[ai-literacy]] memprediksi *jenis* ketergantungan [[llm]] yang ditempati seorang siswa, bukan seberapa banyak mereka menggunakannya ([[llm-reliance-types-undergrad]]). Studi pascasarjana adalah pelatihan penelitian, tempat hasilnya bergeser dari kinerja ke pembentukan. Di antara 420 peneliti doktoral dan pascadoktoral astronomi, ketergantungan AI berkorelasi negatif dengan [[agency|otonomi]] penelitian (r = −.355) dan [[self-efficacy]] (r = −.321), dan jalur tidak langsung ke perilaku inovatif terutama melewati otonomi (−.115) alih-alih efikasi diri (−.069); dukungan supervisor melemahkan kaitan negatif dengan otonomi (B = .077, p = .020) ([[ai-mediated-research-agency-formation-2026]]). Seorang mahasiswa doktoral dinilai atas pertimbangan yang tampaknya tergerus oleh ketergantungan AI; mahasiswa sarjana tidak. Menyatukan keduanya di bawah 'pendidikan tinggi' menyembunyikan hal itu.

## Di mana bukti terkonsentrasi, dan di mana ia tipis

Korpus terisi secara tidak merata, dan bidang level membuat ketidakseimbangan itu terlihat.

**Padat.** Pendidikan tinggi adalah jenjang yang paling banyak dibahas: halaman yang dirujuk di sini mencakup uji coba platform delapan minggu dengan 60 mahasiswa teknik ([[ai-assisted-seminar-learning-information-literacy-2026]]), survei terhadap 395 manajer pendidikan ([[ai-adoption-readiness-ukraine-education-managers-2026]]), meta-sintesis 18 studi pendidikan tinggi Afrika ([[data-privacy-ai-african-higher-education-2026]]) dan studi 420 peneliti tentang pelatihan doktoral ([[ai-mediated-research-agency-formation-2026]]). Jenjang dasar dan menengah juga memuat bukti hasil.

**Tipis, dan di beberapa tempat tidak ada.** Halaman yang dirujuk di sini tidak melaporkan studi hasil anak pada jenjang prasekolah sama sekali; bukti terdekat adalah survei niat guru yang mengecualikan alat yang diarahkan pada anak ([[preschool-teachers-ai-behavioral-intention-2026]]). Sekolah menengah pertama muncul terutama sebagai desain dan studi longitudinal yang *diusulkan* alih-alih hasil yang dilaporkan ([[ai-lms-middle-school-longitudinal]]). Bukti terkuat pada jenjang vokasi adalah 63 respons [[self-report-measures|laporan diri]] dari satu mata kuliah, yang menurut penulisnya memerlukan replikasi ([[ai-ive-pbl-vocational-design-creativity-2026]]). Bukti pascasarjana bersifat lintas-seksional, dengan model jalur terbalik sedikit lebih cocok daripada model perkembangan, sehingga arah dari ketergantungan ke otonomi yang berkurang diinferensikan alih-alih dikonfirmasi ([[ai-mediated-research-agency-formation-2026]]). Tidak ada yang dirujuk di sini melaporkan bukti hasil AI untuk **pembelajaran orang dewasa** atau **pendidikan khusus** sebagai jenjang; keduanya memiliki cakupan sendiri di [[adult-learning]] dan [[special-education]], dan halaman ini tidak menggeneralisasi dari temuan usia sekolah untuk menutup celah itu.

Satu pola berlaku pada setiap tingkat yang disurvei: lapisan manusia menyerap kasus-kasus tersulit. Seorang ahli manusia tetap berada pada titik keputusan kredibilitas bagi mahasiswa teknik bahkan ketika rekomendasi algoritmik mencapai F1 = 0.64 ([[ai-assisted-seminar-learning-information-literacy-2026]]); dukungan supervisor adalah satu-satunya kondisi yang melemahkan kaitan negatif ketergantungan AI dalam pelatihan doktoral ([[ai-mediated-research-agency-formation-2026]]); dan yang menjadi pengadopsi adalah guru prasekolah, bukan anak-anak ([[preschool-teachers-ai-behavioral-intention-2026]]).

## Apa yang sebenarnya diubah oleh desain yang sesuai tingkat

- **Otonomi dan dukungan.** Pada siswa usia muda, sesuaikan *tingkat dukungan* — lebih banyak [[scaffolding]], panduan, atau petunjuk — alih-alih kesulitan tugas; adaptasi kesulitan tidak menghasilkan apa pun di sekolah dasar awal, sementara gerbang penguasaan mungkin justru menahan siswa adaptif ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Tingkat bacaan.** Chatbot yang disesuaikan usia menggunakan variabel prompt untuk usia 7–9, 9–11 dan 12–14, dan 63 anak dari kelas satu hingga kelas delapan memperlakukannya sebagai sumber informasi yang kredibel ([[vahedian-children-attitudes-ai-chatbot-2026]]).
- **Mediasi.** [[parents-and-families|Orang tua]] dan guru memediasi pada tahun-tahun sekolah, [[librarians|pustakawan]] dan supervisor pada tahun-tahun universitas — dan padanan di universitas adalah keahlian alih-alih perwalian: platform teknik mempertahankan manusia di tempat algoritma paling tidak yakin ([[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Taruhan penilaian.** Desain LMS sekolah menengah pertama membatasi AI berdasarkan aktivitas, mempertahankan petunjuk terbatas pada mode latihan dan mematikan AI pada butir yang dinilai ([[ai-lms-middle-school-longitudinal]]) — tindakan kehati-hatian yang dikonkretkan oleh bukti penalti pembelajaran di jenjang menengah ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).
- **Kewajiban perlindungan data bagi anak di bawah umur.** Kewajiban berskala dengan usia: bagi anak di bawah umur, usulan korpus bersifat struktural — minimalisasi data, batasan respons yang sesuai usia, kontrol akses berbasis peran, log yang dapat diaudit ([[ai-lms-middle-school-longitudinal]]) — dan kesadaran keselamatan digital anak tidak dapat diasumsikan, karena sebagian dari mereka bersedia mempercayakan rahasia kepada chatbot ([[vahedian-children-attitudes-ai-chatbot-2026]]). Bagi orang dewasa, kewajiban bergeser ke arah persetujuan, kendali, dan aliran data lintas batas ([[data-privacy-ai-african-higher-education-2026]]).
- **Tata kelola yang cocok dengan jenjang.** Kesiapan bersifat spesifik per lapisan: 395 manajer Ukraina menilai kesiapan personal 0.68 poin di atas kesiapan sistem (d = 0.73), paling sering menyebut ketiadaan regulasi (58.5%), dan menilai [[personalized-learning|personalisasi]] — manfaat yang paling dijanjikan vendor — paling rendah di antara semua aplikasi (29.4%) ([[ai-adoption-readiness-ukraine-education-managers-2026]]).

## Implikasi bagi AI dalam pendidikan

- **Baca bidang level sebelum bidang topik.** Temuan dari satu jenjang adalah hipotesis bagi jenjang lain, bukan hasil yang dapat dipindahkan.
- **Untuk jenjang termuda, sesuaikan dukungan, bukan kesulitan tugas** ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Jangan memindahkan alat melintasi sekat sekolah/universitas tanpa menetapkan ulang siapa yang memegang otoritas epistemik.** Ketergantungan yang menurunkan otonomi dalam pelatihan doktoral adalah risiko pembentukan peneliti ([[ai-mediated-research-agency-formation-2026]]).
- **Batasi AI berdasarkan aktivitas, bukan berdasarkan antusiasme**, dan skalakan kewajiban privasi dengan usia ([[ai-lms-middle-school-longitudinal]], [[data-privacy-ai-african-higher-education-2026]]).
- **Rancang untuk orang dewasa yang memediasi pada jenjang itu** — orang tua, guru, pustakawan, atau supervisor — dan ukur kesiapan mereka secara terpisah dari kesiapan institusi ([[ai-adoption-readiness-ukraine-education-managers-2026]], [[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Nyatakan dengan jelas ketika suatu jenjang tidak memiliki bukti**, dan **jangan salah mengira niat sebagai prestasi**: beberapa studi spesifik jenjang melaporkan hasil sikap atau [[self-report-measures|laporan diri]] alih-alih pembelajaran.

## Miskonsepsi Umum

**"Label jenjang memberi tahu Anda apa yang dapat dilakukan seorang siswa."** Jenjang dan tingkat pengetahuan berkorelasi tanpa sama. Dalam uji coba tutoring kelas dua, [[prior-knowledge|pengetahuan awal]] mendominasi kinerja pascates (**F(1, 124) = 206.99, p < .001, η²p = .63**) — efek besar yang menjadikan label tingkat kelas prediktor lemah di samping pengetahuan awal aktual siswa. Merancang untuk jenjang dan mengabaikan sebaran di dalam jenjang berarti merancang untuk rata-rata dari distribusi yang lebar.

**"Mata pelajaran yang diajarkan lebih penting daripada tingkat pendidikan."** Sekat sekolah/universitas lebih penting. Yang berubah melintasi batas itu bukan kontennya melainkan kapasitas regulasi diri, sifat kontrak penilaian, dan siapa yang bertanggung jawab atas pembelajaran — itulah sebabnya alat yang membantu seminar pascasarjana dapat merugikan pelajaran kelas dua bahkan pada konten yang sebanding.

**"[[intelligent-tutoring|Tutor adaptif]] membantu setiap tingkat secara setara."** Perbandingan yang mengisolasi variabel itu instruktif: dua versi tutor matematika kelas dua yang sama — konten, antarmuka, umpan balik, dan petunjuk lisan identik — berbeda **hanya pada apakah pemilihan tugas mengikuti model [[knowledge-tracing|Bayesian]]**. Pemilihan tugas adaptif adalah intervensi yang peka tingkat, dan manfaatnya bergantung pada apakah siswa pada tingkat itu dapat bertindak atas adaptasi tersebut.

**"Bukti yang terkonsentrasi di pendidikan tinggi dapat digeneralisasi ke bawah."** Tidak bisa, dan distribusi literatur adalah peringatan alih-alih kemudahan. Di mana bukti padat dan di mana ia tipis adalah sifat ekonomi penelitian, bukan sifat tempat AI paling banyak digunakan, sehingga klaim tentang K-12 yang ditarik dari sampel universitas adalah ekstrapolasi melintasi batas yang paling penting.

## Konsep terkait
- [[k-12]]
- [[early-childhood-elementary-ai-education]]
- [[higher-ed]]
- [[adult-learning]]
- [[special-education]]
- [[teacher-education]]
- [[vocational-education]]
- [[learners]]
- [[parents-and-families]]
- [[differential-effects-across-learner-groups]]

## Artikel terkait
- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — Tutoring adaptif versus non-adaptif dalam matematika kelas dua (Sibley dkk. 2026)
- [[dai-chatbots-problem-posing-primary-2026]] — Chatbot GenAI dan pengajuan masalah bersama siswa kelas tiga dalam sains sekolah dasar
- [[chatgpt-music-education-junior-high-2026]] — Sikap siswa SMP terhadap ChatGPT untuk pembelajaran lirik (Weng & Chiang 2026)
- [[ai-lms-middle-school-longitudinal]] — LMS terintegrasi AI yang dirancang untuk sekolah menengah pertama, dengan studi longitudinal yang diusulkan
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Penalti pembelajaran AI generatif dalam pendidikan menengah Tiongkok (Strömberg dkk. 2026)
- [[llm-reliance-types-undergrad]] — Empat jenis ketergantungan LLM di antara penulis sarjana (Hossain 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Platform seminar berbantuan AI dengan dukungan pustakawan tertanam bagi mahasiswa teknik
- [[ai-mediated-research-agency-formation-2026]] — Ketergantungan AI, otonomi, dan inovasi dalam pelatihan doktoral dan pascadoktoral (Han & Liu 2026)
- [[data-privacy-ai-african-higher-education-2026]] — Pandangan pemangku kepentingan tentang privasi data di pendidikan tinggi Afrika (Duncan 2026)
- [[ai-adoption-readiness-ukraine-education-managers-2026]] — Kesiapan adopsi AI manajer pendidikan di seluruh Ukraina (Kremen dkk. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — PBL imersif berbantuan AI bagi siswa desain vokasi (Jin dkk. 2027)
- [[preschool-teachers-ai-behavioral-intention-2026]] — Niat guru prasekolah menggunakan AI di lingkungan anak usia dini
- [[vahedian-children-attitudes-ai-chatbot-2026]] — Sikap anak terhadap chatbot AI yang disesuaikan usia
