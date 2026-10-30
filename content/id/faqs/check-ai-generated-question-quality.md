---
title: "Bagaimana Saya Memeriksa Apakah Soal Kuis dan Ujian yang Dihasilkan AI Benar-Benar Baik?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Anda meminta dua puluh soal dari catatan kuliah Anda. Soal-soal itu kembali dengan kunci jawaban, penjelasan, label kesulitan, dan kategori taksonomi Bloom, dalam dokumen berformat yang tampak sudah jadi. Nama Anda akan segera tercantum di sana.

Jawaban singkat untuk diberikan kepada kolega: soal yang dihasilkan adalah kandidat, bukan sebuah penilaian. Selesaikan setiap butir sendiri, periksa apa yang sebenarnya dituntut dari siswa, dan cari tahu bagaimana siswa meresponsnya sebelum soal itu dihitung. Pada dua studi terbesar dalam basis pengetahuan ini, sinyal yang menarik bukanlah bahwa pembuatan soal berhasil, melainkan di mana ia gagal. Pembuatan iteratif di dalam alur kerja khusus mata kuliah menghasilkan ujian pilihan ganda yang dapat digunakan pada 71 kelas perguruan tinggi ([[assessing-quality-ai-generated-exams-field-2025|Isley et al., 2025]]). Dalam audit ilmu data atas 311 soal yang digunakan, label kesulitan model hampir sempurna mengikuti tingkat Bloom yang dihasilkannya bersamaan dengan soal itu (Spearman ρ = 0,90) sementara mengikuti skor yang sebenarnya diperoleh siswa pada ρ = 0,06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An dan Wang, 2026]]). Label itu adalah deskripsi atas prompt, bukan pengukuran atas butirnya.

## Versi singkat

**1.** Tuliskan capaian pembelajaran dan bukti yang akan diberikan respons yang memuaskan sebelum Anda menghasilkan apa pun.

**2.** Susun kisi-kisi agar Anda dapat melihat capaian mana yang tersampel oleh perangkat soal dan seberapa sering.

**3.** Selesaikan setiap butir sendiri sebelum memercayai kuncinya, dan bacalah penjelasannya sebagai klaim yang harus diperiksa.

**4.** Tanyakan apa yang harus dilakukan siswa untuk menjawabnya. Soal yang bertuliskan "analisis" tetapi menuntut ingatan adalah soal ingatan.

**5.** Perlakukan label kesulitan sebagai metadata prompt, bukan sebagai psikometri.

**6.** Uji coba butirnya dan periksa bagaimana ia berfungsi, lalu revisi yang lemah.

## Mulai dari pembelajaran yang ingin Anda buktikan

Pembuatan soal cukup murah sehingga format keluaran diam-diam menjadi spesifikasinya. Jika catatan Anda menghasilkan butir pilihan ganda yang rapi, Anda akhirnya mengukur apakah siswa dapat memilih di antara pernyataan yang masuk akal, apa pun capaian yang diklaim silabus.

Tetapkan capaiannya lebih dahulu, lalu bukti yang akan diberikan respons yang memuaskan, lalu pengetahuan yang diharapkan dibawa siswa. Sertakan materi kuliah, miskonsepsi yang Anda perkirakan, alat yang diizinkan, dan format respons. Jika Anda ingin siswa menafsirkan bukti, butirnya harus menuntut interpretasi, dan menambahkan kata itu pada soal definisi tidak melakukannya. Skenario panjang pun masih bisa dijawab melalui satu frasa yang sudah dikenal yang membocorkan jawabannya.

Kisi-kisi penilaian adalah tabel capaian terhadap butir, dan nilainya terletak pada kemampuannya menyingkap celah sebelum siswa menemukannya. Kisi-kisi juga membuat pertukaran itu terlihat: setiap butir yang Anda hasilkan dari materi termudah adalah butir yang tidak Anda belanjakan untuk capaian yang paling Anda pedulikan.

## Tinjau setiap butir pada enam dimensi

Mulailah dari kuncinya. Apakah kunci itu dapat dipertahankan terhadap konten kuliah yang otoritatif, dan apakah penjelasannya bertahan ketika Anda memeriksanya secara mandiri? Kunci dan penjelasan sering berasal dari langkah yang sama-sama keliru, jadi memeriksa yang satu tidak memeriksa yang lain.

Lalu tanyakan apa yang sebenarnya harus dilakukan siswa antara membaca dan memilih untuk menjawab butir itu. Di sinilah butir hasil pembuatan paling sering gagal, dan di sinilah labelnya paling tidak dapat diandalkan.

Periksa keselarasan berikutnya: apakah menjawabnya memberikan bukti untuk capaian yang dimaksud, atau untuk sesuatu yang berdekatan dan lebih mudah dinilai?

Bacalah redaksinya seperti seorang siswa. Apakah informasi yang dibutuhkan tersedia, dan apakah ambiguitas yang tidak berkaitan dengan konstruk Anda sudah dihilangkan?

Lihatlah pilihan jawaban dan aturan penilaian secara bersamaan. Apakah pengecohnya masuk akal dan berbeda satu sama lain serta berbeda dari kunci, dan apakah kunci mengakui jawaban alternatif yang sah yang akan diberi kredit oleh rubrik Anda?

Terakhir, tanyakan siapa yang dikecualikan oleh butir itu. Beban membaca, konteks budaya, visual, dan format dapat menimbulkan tuntutan yang tidak berkaitan dengan capaian. Bagi siswa multibahasa atau penyandang disabilitas, butir yang memberi ganjaran atas kecepatan membaca sedang mengukur sesuatu yang tidak Anda maksudkan, dan [[differential-effects-across-learner-groups|kinerja subkelompok]] adalah tempat hal itu terlihat.

Model kedua dapat membantu Anda melihat masalah, dan kesepakatan antara dua model bukan verifikasi independen atas kebenaran. Keduanya berbagi data pelatihan dan mode kegagalan. Selesaikan butirnya, lalu mintalah orang yang berkualifikasi melihat butir yang akan dihitung.

## Jangan biarkan label kesulitan memutuskan

Literatur [[automated-question-generation|pembuatan soal]] lebih berguna soal kegagalan label daripada keberhasilan pembuatannya. [[student-llm-use-ai-question-difficulty-data-science-2026|An dan Wang (2026)]] meneliti 378 soal yang ditulis untuk mata kuliah ilmu data, 311 di antaranya digunakan pada 54 siswa dengan total 7.888 respons. Label mudah, sedang, dan sulit dari model berkorelasi dengan tingkat Bloom yang dihasilkannya sendiri pada ρ = 0,90 dan dengan kesulitan butir empiris pada ρ = 0,06. Sekitar 70% butir yang digunakan dijawab benar oleh setiap siswa, yang hampir tidak menyisakan variasi apa pun untuk dilacak label kesulitan bahkan secara prinsip.

Dua pelajaran mengikutinya. Pertama, kesulitan adalah sifat interaksi antara sebuah butir dan sebuah populasi, jadi tidak ada label yang dihasilkan sebelum butir diujikan dapat dipercaya sebagai nilai terukur. Kedua, bank butir yang dijawab benar oleh semua orang bukanlah penilaian yang mudah, melainkan penilaian yang tidak berguna: ia hampir tidak membawa informasi tentang siapa mengetahui apa.

Kasus positifnya lebih sempit daripada klaim vendor dan layak diketahui secara tepat. [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] menghasilkan ujian pilihan ganda sepuluh soal untuk 71 kelas perguruan tinggi, sekitar 1.200 siswa, menggunakan lingkar yang menghasilkan, menilai, dan merevisi setiap butir dengan syarat materi yang disediakan pengajar masing-masing mata kuliah, lalu membandingkan butir-butir itu dengan ujian yang ditulis manusia. Itu adalah alur kerja dengan peninjau di dalamnya, dijalankan per mata kuliah, bukan satu prompt atas konten generik. Dukungannya berlaku untuk alur kerja itu dalam kondisi tersebut, dan tidak meluas ke apa pun yang dihasilkan model yang sama dari tempelan catatan yang belum diedit.

## Jalankan siklus hasilkan, tinjau, uji coba, revisi

Hasilkan berdasarkan kisi-kisi, dan mintalah capaian yang dimaksud, kuncinya, penyelesaian ringkas, dan miskonsepsi yang hendak ditangkap setiap pengecoh. Anotasi itu membuat rancangannya dapat diperiksa. Itu bukan bukti bahwa rancangannya sehat.

Perbaiki sebelum Anda menumpuk. Hapus klaim yang tidak didukung, butir duplikat, petunjuk yang tidak sengaja ada di pokok soal, kunci ganda yang sama-sama dapat dipertahankan, dan kerumitan yang tidak berkaitan dengan konstruk, lalu catat apa yang Anda ubah, karena pola perbaikannya memberi tahu Anda bagian mana dari prompt yang perlu diperbaiki.

Uji coba di tempat uji coba proporsional. Latihan berisiko rendah, atau uji coba terkelola di dalam penilaian, memberi Anda data respons. Beri tahu siswa cara melaporkan soal yang ambigu atau salah dan bacalah laporan itu, karena laporan tersebut adalah sinyal kesalahan Anda yang paling informatif.

Lalu periksa bagaimana butirnya berfungsi: proporsi yang menjawab benar, pengecoh mana yang menarik respons, dan apakah keberhasilan pada butir itu berjalan bersama kinerja pada bagian lain penilaian. Butir di mana siswa kuat gagal dan siswa lemah berhasil adalah cacat, bukan soal yang sulit. Di kelas kecil statistik ini tidak stabil, jadi gabungkan dengan tinjauan konten dan penjelasan siswa alih-alih memperlakukan satu persentase sebagai vonis.

Revisi, dan simpan catatannya: versi yang disetujui, capaian yang dilayaninya, kuncinya, alasannya, catatan tinjauan, dan riwayat pengujiannya. Untuk bank soal yang besar atau berisiko tinggi, di sinilah ahli penilaian dan metode psikometri yang semestinya berperan, dan keahlian [[educational-measurement|pengukuran]] bukan sesuatu yang dapat digantikan oleh pembacaan yang teliti.

## Seperti apa ini dalam sebuah mata kuliah

Dalam mata kuliah sosiologi pengantar, capaiannya mungkin membedakan penjelasan struktural dari penjelasan individual. Butir yang lemah meminta siswa mendefinisikan "struktural", yang mengukur pengenalan kosakata. Kandidat yang lebih kuat memberikan skenario singkat tentang sebuah keluarga dan keputusan kerja, lalu menanyakan penjelasan mana yang paling baik mengidentifikasi kendala struktural, dengan pengecoh yang mewakili interpretasi masuk akal tetapi berbeda.

Pengajar memeriksa bahwa skenario itu benar-benar menopang kuncinya, bahwa tidak ada dua opsi yang menyatakan gagasan yang sama, dan bahwa menjawabnya tidak bergantung pada terminologi yang tidak pernah diperkenalkan di mata kuliah. Pertanyaan lanjutan satu baris, "detail mana yang menopang pilihan Anda?", menyingkap penalaran yang disembunyikan opsi terpilih. Adaptasi ini belum teruji sebagai format butir, dan nilainya lebih sempit: pertanyaan tinjauan di atas dapat dijawab sebelum butir diujikan, dan kunci yang buruk dapat diperbaiki sebelum siswa melihatnya.

Bagi siswa yang membuat soal latihan mereka sendiri, aturan yang sama berlaku pada tingkat mereka: kerjakan butirnya, periksa penjelasannya terhadap sumber mata kuliah, dan bawa kasus yang tidak dapat diselesaikan kepada orang yang menguasai bidangnya. [[study-with-ai|Latihan belajar]] yang melatih siswa menerima kunci hasil pembuatan secara tidak kritis mengajarkan kebiasaan yang salah.

## Apa yang akan kembali kepada Anda

**"Ia memberi jawaban dan penjelasan."** Keduanya dapat mengulangi satu kesalahan yang sama, dan penjelasan menghasilkan keyakinan justru karena lancar. Verifikasi penalarannya terhadap materi Anda, bukan terhadap pengulangannya sendiri.

**"Ini hanya soal latihan."** Latihan mengajarkan miskonsepsi ketika kunci yang salah tidak dikoreksi, dan siswa melatih kekeliruan itu semudah jawaban yang benar. Taruhan yang lebih rendah mengubah seberapa banyak tinjauan yang proporsional. Itu tidak mengubah apakah ketepatan itu penting.

**"Siswa menyukai kuisnya."** Kesenangan adalah bukti tentang pengalamannya. Kuis mudah yang diselesaikan semua orang dengan nyaman terasa baik dan hanya mengukur sedikit, dan audit ilmu data menemukan bahwa popularitas butir-butir itu tidak disertai sinyal kesulitan yang dapat digunakan.

**"Rubrik atau tag Bloom menunjukkan soal ini mencapai capaian."** Label Bloom yang disediakan oleh langkah pembuatan yang sama adalah bukti paling tidak independen yang tersedia. ρ = 0,90 terhadap label dan ρ = 0,06 terhadap kinerja siswa adalah persis seperti apa hal itu tampak ketika diukur.

## Yang perlu dilakukan pekan ini

**1.** Pilih satu capaian dan tuliskan bukti yang akan diberikan respons yang memuaskan. Lalu hasilkan lima butir untuk capaian itu, dengan meminta kunci, penyelesaian, dan miskonsepsi yang dimaksud di balik setiap pengecoh.

**2.** Selesaikan kelima butir itu tanpa melihat kuncinya, dan catat yang membuat Anda dan model tidak sepakat.

**3.** Minta seorang kolega memeriksa dua kandidat terkuat untuk keselarasan dan ambiguitas, lalu hapus apa pun yang tidak dapat Anda berdua pertahankan.

**4.** Uji coba yang tersisa dengan pertanyaan lanjutan singkat yang menanyakan detail mana yang menopang pilihan siswa.

**5.** Catat apa yang Anda ubah dan mengapa, agar kelompok berikutnya dimulai dari prompt yang lebih baik, bukan dari prompt yang sama.

## Ke mana selanjutnya

[[automated-question-generation]] adalah halaman konsep untuk metode pembuatan soal dan kualitasnya yang terukur, dan [[educational-measurement]] mencakup analisis butir, reliabilitas, serta psikometri yang hanya disinggung sekilas oleh uji coba. Keduanya berada di bawah [[assessment-validity|validitas penilaian]], yaitu standar yang dilayani seluruh siklus ini.

Sisi pertimbangan dari masalah yang sama menjadi milik [[ai-grading-fairness-reliability|penilaian AI]], karena butir yang baik yang dinilai dengan buruk tidak lebih baik daripada butir yang buruk yang dinilai dengan baik. Untuk pertanyaan yang lebih luas tentang apa yang seharusnya diwakili sebuah nilai ketika siswa dapat menggunakan AI, lihat [[redesign-assessment-ai-era|merancang ulang penilaian di era AI]].
