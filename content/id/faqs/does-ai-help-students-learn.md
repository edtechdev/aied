---
title: "Apakah Penggunaan AI Benar-benar Membantu Siswa Belajar?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [evaluating-ai-interventions-methods, how-ai-impacts-students, top-10-findings-ai-education-instructors]
weight: 90
audience: [instructors]
foundations: [ai-literacy, cognitive-offloading]
pedagogy: [active-learning]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/does-ai-help-students-learn
source_updated: "2026-10-28T11:06:17-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Seorang siswa memberi tahu Anda bahwa tutor AI adalah alasan mereka akhirnya memahami materi, dan Anda tidak punya cara untuk memeriksa klaim itu. Atau sebuah uji coba mendarat di meja Anda dengan survei kepuasan dan tangkapan layar nilai tugas yang naik, dan seseorang menginginkan keputusan tentang lisensi sebelum akhir bulan. Atau Anda berdiri di depan kelas dan bertanya-tanya apakah alat yang baru saja Anda suruh mereka buka membantu mereka berlatih atau membantu mereka menghindari latihan.

Jawaban singkatnya: ya, AI dapat membantu siswa belajar, dan tidak satu pun dari hal yang paling mungkin Anda lihat membuktikan bahwa ia benar-benar melakukannya: tugas yang lebih baik, penyelesaian lebih cepat, siswa yang senang, atau produk yang disebut tutor. Yang memisahkan kasus ketika pembelajaran membaik dari kasus ketika tidak adalah rancangan aktivitasnya dan hasil yang Anda pilih untuk diukur.

## Versi singkat

**1.** Sebutkan kapabilitasnya lebih dahulu, lalu putuskan bukti apa yang akan menunjukkan bahwa kapabilitas itu berubah.

**2.** Ukur kapabilitas yang sama nanti, dengan alatnya diambil, karena itulah satu-satunya ukuran yang menjawab pertanyaan Anda.

**3.** Letakkan percobaan siswa sendiri sebelum bantuan, dan tuntut respons terhadap bantuan itu sesudahnya.

**4.** Nilai verifikasinya: apa yang mereka periksa, apa yang mereka tolak, apa yang mereka ubah.

**5.** Lihat hasilnya menurut pengetahuan awal, karena rata-rata menyembunyikan siswa yang gagal dilayani rancangan itu.

## Putuskan apa yang Anda maksud dengan belajar sebelum melihat bukti apa pun

"Apakah AI membantu siswa belajar" bukan satu pertanyaan. Itu membungkus setidaknya tiga pertanyaan: apakah alat itu menaikkan kinerja selama ia terbuka, apakah ia membangun kapabilitas yang bertahan ketika ia ditutup, dan apakah ia mengubah siapa yang akhirnya memiliki kapabilitas itu. Laporan vendor, survei uji coba, dan uji acak semuanya bisa jujur dan tetap menjawab pertanyaan yang berbeda.

Tuliskan kapabilitasnya sebelum aktivitasnya. "Menghasilkan laporan yang rapi" adalah hasil yang berbeda dari "memilih bukti yang sesuai", "menjelaskan hubungan kausal", atau "mendeteksi kesimpulan yang tidak didukung". Penilaiannya harus mengungkap kapabilitas yang ingin Anda kembangkan, yang merupakan argumen dalam [[educational-measurement|pengukuran pendidikan]] dan titik awal [[ai-ed-evaluation|evaluasi AI dalam pendidikan]].

Korpus ini mendukung dua klaim sekaligus, dan menahan keduanya adalah disiplin yang diminta halaman ini. Sebuah sintesis Bank Dunia, [[burneo-can-edtech-close-learning-gaps-2026|Can EdTech Close Learning Gaps?]], menggabungkan 14 studi acak di sepuluh ekonomi dan memperkirakan efek pembelajaran rata-rata yang positif sebesar 0,125 simpangan baku untuk teknologi pendidikan adaptif dan yang diaktifkan AI. Sintesis itu juga menggabungkan [[adaptive-learning|sistem adaptif]] sebelumnya dengan alat [[generative-ai|AI generatif]], tidak menemukan keunggulan yang mapan secara statistik bagi alat generatif yang lebih baru, dan mengakui ketidakpastian yang cukup besar dalam perbandingan itu. Hasilnya mendukung potensi intervensi ini, bukan klaim bahwa [[conversational-ai|chatbot]] mana pun akan memperbaiki pembelajaran. Rata-rata yang positif, dengan kata lain, sejalan dengan variasi yang sangat besar dan dengan tidak adanya keunggulan yang terbukti bagi hal yang sebenarnya sedang Anda pertimbangkan.

Studi yang lebih berguna adalah yang memvariasikan rancangan di dalam satu eksperimen. [[genai-feedback-design-multisite-experiment|Sebuah studi acak multisitus]] dengan 1.176 mahasiswa tingkat pertama membandingkan [[peer-assessment|umpan balik teman sebaya]], umpan balik AI langsung, evaluasi diri yang diikuti umpan balik AI, dan urutan hibrida evaluasi diri, umpan balik teman sebaya, serta kritik AI. Kondisi reflektif dan hibrida menghasilkan [[transfer-of-learning|transfer tertunda tanpa AI]] yang lebih kuat daripada umpan balik AI langsung: siswa berkinerja lebih baik pada tugas argumentasi ilmiah yang baru, bukan hanya pada esai yang sedang mereka revisi. Kondisi itu juga menuntut lebih banyak kerja evaluatif dan mungkin lebih banyak waktu, sehingga studi itu mendukung rancangan umpan balik secara lengkap, bukan satu komponen di dalamnya.

## Periksa apakah perolehan itu bertahan ketika alatnya diambil

Ini adalah pemeriksaan paling informatif yang tersedia bagi Anda, dan paling mudah dihilangkan dari sebuah uji coba.

Peringatan paling jelas dalam korpus adalah eksperimen lapangan acak dengan hampir 1.000 siswa sekolah menengah, [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]]. Sebuah antarmuka bergaya serba guna menaikkan skor latihan berbantuan sebesar 48% dibandingkan kontrol, dan siswa yang sama kemudian memperoleh skor 17% lebih rendah pada ujian tanpa bantuan. Tutor yang dikonfigurasi dengan panduan dan petunjuk yang dirancang guru sebagian besar menghindari penalti itu. Ia tidak menghasilkan perbaikan yang signifikan secara statistik dalam kinerja ujian tanpa bantuan dibandingkan kelompok kontrol. Menghindari kerugian dan menunjukkan pembelajaran tambahan adalah dua pencapaian yang berbeda.

Pada skala nasional, perpecahan yang sama muncul dengan jeda waktu. [[stromberg-generative-ai-learning-penalty-secondary-2026|The Generative AI Learning Penalty]] mengikuti 26.811 siswa sekolah menengah Tiongkok di kelas 7-12 selama 30 bulan menggunakan adopsi bertahap. Skor pekerjaan rumah naik 18% dan waktu penyelesaian turun 30%, dari 64 menjadi 45 menit. Skor ujian bulanan buku tertutup turun 20% dalam enam bulan, dan skor ujian masuk berisiko tinggi turun 18-24% dari garis dasar, tetapi hanya setelah sekitar dua tahun. Kerugiannya terkonsentrasi di antara sekitar 81% pengguna yang perilakunya menunjukkan outsourcing pekerjaan rumah, sementara siswa yang menjaga waktu pekerjaan rumah sebanding dengan bukan pengguna belajar sekitar sama efisiennya. Dua hal menyusul untuk kursus Anda: perbedaan antara kinerja pekerjaan rumah dan ujian adalah [[learning-gains|kesenjangan kinerja-pembelajaran]] dalam sebuah kohort nasional, dan jeda dua tahun berarti evaluasi satu semester akan secara sistematis meremehkan biayanya.

Pendidikan komputasi menunjukkan struktur yang sama. [[kumar-genai-computing-education-systematic-review-2026|Tinjauan sistematis atas 72 studi]] menemukan AI generatif secara andal menaikkan penyelesaian jangka pendek dan mengurangi waktu pengerjaan tugas pada 36 studi, tanpa satu pun studi dalam korpus yang mendokumentasikan efek negatif pada kinerja langsung, dan perolehan itu "tidak bertransfer ke kinerja mandiri" pada 21 studi. Siswa yang dibantu Codex menyelesaikan dua kali lebih banyak tugas selama belajar dan berkinerja tidak lebih baik daripada kontrol pada postes tanpa AI.

Lalu ada pertanyaan apakah siswa menggunakan bantuannya sama sekali. Eksperimen sekolah acak selama dua tahun di 18 sekolah menengah, [[one-click-away-khanmigo-two-year-school-experiment-2026|One Click Away]], menemukan perolehan capaian [[math-education|matematika]] yang sederhana, dan siswa jarang terlibat dalam percakapan tutor yang substantif. Para penulis mencatat bahwa perolehan itu menyerupai perolehan yang dilaporkan untuk latihan terstruktur tanpa AI, dan rancangannya menggabungkan latihan individual dengan [[intelligent-tutoring|tutor AI]], sehingga tidak mengisolasi kontribusi komponen AI. Tutor yang mampu tersedia adalah fakta yang berbeda dari siswa yang menggunakannya secara produktif.

[[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]] menambahkan pelajaran yang lebih tajam dari lebih dari 6.000 siswa sekolah menengah yang menggunakan NUMI. Dukungan AI memperbaiki pemulihan setelah kesalahan dan memperlambat kemajuan melalui pertanyaan. Aturan penguasaan tiga benar berturut-turut menaikkan keberhasilan yang didefinisikan platform tanpa, dengan sendirinya, memperbaiki pembelajaran satu minggu kemudian. Sinyal pembelajaran tertunda terkuat muncul ketika AI ditanamkan dalam alur kerja penguasaan, dan perolehan itu nyaris signifikan secara statistik serta terkonsentrasi pada materi tertentu yang dilatih. Itu bukti yang sugestif bagi pendekatan terstruktur, bukan resep yang terbukti.

## Bangun aktivitas sehingga siswa melakukan pemikiran yang penting

[[learning-design|Rancangan instruksional]] lebih penting daripada model mana yang Anda jalankan. Rancangan yang bertahan dari hasil-hasil ini memiliki empat putaran: sebuah percobaan, bantuan yang diarahkan pada kesulitannya, sesuatu yang dilakukan siswa dengan bantuan itu, dan aplikasi baru dengan dukungan ditarik.

**1.** Minta percobaan awal, prediksi, draf, penjelasan, atau interpretasi.

**2.** Tawarkan bantuan yang bertarget: petunjuk, penjelasan, contoh pembanding, atau umpan balik terfokus pada titik tempat mereka terhenti.

**3.** Tuntut respons terhadap bantuan itu. Mereka menjelaskannya, merevisi dengannya, memverifikasinya, atau membenarkan menerima dan menolaknya.

**4.** Periksa masalah yang sebanding atau konteks yang berbeda dengan dukungan ditarik.

Itu adalah titik awal instruksional, bukan urutan yang tervalidasi, dan jumlah serta waktu dukungan yang tepat bergantung pada siswa dan tugasnya. Itu mencerminkan apa yang ditekankan sintesis [[scaffolding|perancah]] dan [[active-learning|pembelajaran aktif]]: dukungan yang membantu pembelajar memahami, berlatih, mengevaluasi, dan akhirnya berkinerja dengan lebih sedikit dukungan.

Terapkan prinsipnya pada tujuan, bukan secara mekanis pada setiap fitur. "Berikan perancah, jangan menggantikan" adalah aturan yang baik dengan jebakan di dalamnya. Contoh kerja yang lengkap bisa menjadi sesuatu yang dipelajari siswa, dan rangkaian petunjuk tetap bisa menjadi sesuatu yang mereka klik tanpa berpikir. Yang penting adalah apa yang dilakukan pembelajar dengan bantuan itu, dan itulah sebabnya [[cognitive-offloading|offloading kognitif]] dan [[help-seeking|pencarian bantuan]] berada di ujung yang berlawanan dari apa yang dapat dihasilkan alat yang sama.

Contoh tandingannya layak diingat, karena itu mencegah Anda mengubah usaha menjadi proksi pembelajaran. Dalam eksperimen terpreregistrasi yang dilaporkan dalam [[coach-not-crutch-ai-writing|Coach not crutch]], orang dewasa yang berlatih merevisi surat lamaran dengan AI menghasilkan tulisan tanpa AI yang lebih baik sesudahnya daripada mereka yang berlatih sendiri, dan mereka mengeluarkan usaha yang lebih sedikit untuk melakukannya. Manfaatnya bertahan pada tindak lanjut satu hari, dan eksperimen kedua menemukan bahwa melihat contoh yang direvisi AI menghasilkan manfaat yang sebanding dengan berlatih dengan alat itu. Itu adalah tugas menulis yang singkat dan terbatas, bukan bukti perbaikan yang bertahan lama di semua penulisan. Itu memang menunjukkan bahwa usaha yang lebih sedikit tidak otomatis berarti pembelajaran yang lebih sedikit, dan bahwa tujuannya adalah mempertahankan aktivitas belajarnya, bukan memaksimalkan kesulitannya.

## Buat pemikiran yang bertahan terlihat dalam apa yang Anda nilai

Bagaimana siswa menggunakan alat itu lebih penting daripada apakah mereka memilikinya. Dalam [[yan-cognitive-outsourcing-genai-assessments-2026|sebuah studi kualitatif atas 38 mahasiswa sarjana]] dalam penilaian esai tanpa pengawasan, keterlibatan berkisar dari [[cognitive-offloading|outsourcing kognitif]] hingga realokasi kognitif, pergeseran usaha dari pengambilan tingkat rendah ke [[critical-thinking|evaluasi kritis]]. Sebagian besar siswa, 31 dari 38, berniat menggunakan AI generatif sebagai asisten belajar. Dalam praktiknya 76,32% mengandalkan pola satu-giliran tanya, dapat jawaban, berhenti, dan 78,94% menggunakan alat itu sebelum atau sesudah menyusun draf alih-alih sepanjang tugas. Hanya 8 siswa yang bekerja sebagai mitra kognitif melalui dialog iteratif yang berkelanjutan. Spektrum itu, dari outsourcing ke realokasi, adalah apa yang digambarkan [[student-ai-interaction|interaksi siswa-AI]]. Salah satu partisipan menggambarkan efeknya sebagai "kecepatan Anda melupakannya juga sangat cepat."

Pelajaran [[pedagogy|pedagogisnya]] adalah bahwa izin menyeluruh dan larangan menyeluruh sama-sama membuat siswa menebak-nebak. Yang mengubah perilaku, menurut catatan studi itu, adalah panduan spesifik tugas tentang kerja kognitif mana yang harus dipertahankan siswa dan bantuan mana yang pantas, arah rancangan yang dikembangkan dalam [[reduce-ai-cheating|Mengurangi Kecurangan AI di Kursus Anda]] dan [[reducing-ai-misuse|mengurangi penyalahgunaan AI]].

Jadi buatlah pemikiran yang bertahan menjadi artefak yang dapat Anda nilai. Dalam matematika, minta solusi yang dicoba sebelum bantuan diminta, lalu minta siswa menggunakan prompt seperti "identifikasi langkah pertama yang harus saya pertimbangkan ulang, beri saya satu petunjuk yang berguna, dan minta saya mencoba lagi", dan tuntut solusi baru plus penjelasan alih-alih reproduksi jawaban AI. Dalam menulis, minta siswa menilai draf mereka terhadap rubrik sebelum meminta kritik, lalu jelaskan saran mana yang mereka terima, ubah, atau tolak. Jika tujuan Anda adalah pembangunan argumen, prosa AI tidak dapat menggantikan bukti bahwa siswa mampu membangun argumen. Jika tujuan Anda adalah mengevaluasi alternatif revisi, membandingkan contoh yang lengkap adalah tepat. Halaman [[writing-education|pendidikan menulis]] dan [[feedback-literacy|literasi umpan balik]] memuat rinciannya.

Persyaratan rancangan tinjauan itu adalah langkah yang sama pada tingkat kursus: verifikasi, yaitu membaca, menguji, mengubah, menjelaskan, dan mengkritik keluaran AI, dijadikan komponen yang dinilai dan dapat diamati alih-alih aspirasi yang diserahkan pada kebijaksanaan siswa. Dan tidak setiap hasil yang sah harus ditunjukkan tanpa AI. Sebuah kursus dapat dengan sengaja mengajarkan kerja yang efektif berbantuan AI, dan dalam hal itu Anda menilai kemampuan siswa untuk memilih, memverifikasi, merevisi, dan mempertahankan penggunaan alat itu bersama landasan mandiri apa pun yang dituntut disiplinnya. [[human-capability-test-learning-outcomes-ai-2026|A Human Capability Test for Learning Outcomes in the AI Era]] mengusulkan pembedaan tiga arah antara kapabilitas mandiri, kinerja yang ditambah AI, dan tanggung jawab verifikasi. Itu adalah kerangka konseptual, bukan instrumen yang tervalidasi.

## Periksa siapa yang dibantu alat itu dan siapa yang diam-diam ditinggalkannya

Perbaikan rata-rata dapat menyembunyikan siswa yang tidak memperoleh apa pun atau menabrak hambatan baru. Sintesis [[digital-divide|kesenjangan digital]] memisahkan akses ke alat dari keterampilan yang dibutuhkan untuk menggunakannya dan dari siapa yang akhirnya memperoleh hasil yang berguna, dan ketiganya penting bagi sebuah kursus.

[[prior-knowledge|Pengetahuan awal]] memoderasi segalanya dalam tinjauan komputasi: siswa yang siap dengan baik mengubah bantuan menjadi keterampilan yang bertahan, sementara siswa yang kurang siap berisiko menggunakannya sebagai kruk yang menghapus latihan yang mereka butuhkan. Studi kohort nasional menunjukkan konsentrasi yang sama dengan caranya sendiri, dengan kerugian pembelajaran berada pada 81% yang perilaku pekerjaan rumahnya menunjukkan outsourcing.

Untuk evaluasi kelas, pisahkan hasilnya menurut pengetahuan awal, kebutuhan bahasa, dan persyaratan aksesibilitas alih-alih melaporkan rata-rata kursus. Mengajari siswa cara memperoleh dan mengevaluasi umpan balik yang berguna adalah bagian dari [[ai-literacy|literasi AI]], dan itu tidak datang bersama lisensinya. Ketika Anda menilai pembelajaran mandiri, hapus bantuan yang menyediakan pemikiran sasaran dan pertahankan akomodasi yang memberikan akses ke tugas, yang merupakan pembedaan yang menjadi dasar [[accessibility|aksesibilitas]] dan [[equity-in-ai-education|ekuitas dalam pendidikan AI]].

Periksa juga umpan balik yang benar-benar diterima siswa. Respons yang lancar dapat salah mendiagnosis kesulitan, memperkuat kesalahan, atau menyerahkan jawaban padahal jenis dukungan yang dibutuhkan berbeda. Gunakan materi yang selaras dengan kursus, pertahankan jalur ke bantuan manusia, dan jangan mengumpulkan informasi siswa lebih banyak daripada yang dibutuhkan aktivitasnya. [[ai-feedback-quality|Kualitas umpan balik AI]], [[pedagogical-safety|keselamatan pedagogis]], dan [[privacy|privasi]] membahas rinciannya.

## Jangan percaya dasbor, termasuk dasbor Anda sendiri

Metrik platform adalah bukti paling mudah dibawa ke keputusan pengadaan, dan paling mudah ditafsirkan berlebihan. Dalam [[zhang-platform-scores-miss-ai-teaching-agents-2026|evaluasi atas delapan agen pengajaran AI]] dalam [[medical-education|pendidikan kedokteran]], peringkat menurut skor platform itu sendiri berbeda dari rubrik kualitas pengajaran yang divalidasi ahli. Agen yang diperingkat ketiga oleh platform diperingkat terakhir pada kualitas rubrik, karena skor platform melacak kinerja siswa selama interaksi alih-alih perilaku mengajar agen. Metrik bawaan adalah hipotesis yang perlu divalidasi.

Skeptisisme yang sama berlaku bagi bukti yang Anda hasilkan sendiri. Survei kepuasan mengukur kepuasan, dan pembelajaran yang dipersepsikan adalah [[self-report-measures|ukuran laporan diri]] yang menurut korpus ini menyimpang jauh dari pembelajaran yang terukur. Nilai tugas mengukur tugasnya. Keduanya tidak memberi tahu Anda apa yang dapat dilakukan siswa dalam tiga minggu dengan alatnya tertutup, dan [[evaluating-ai-interventions-methods|Ukuran dan Metode Penelitian untuk Mengevaluasi Intervensi AI]] menguraikan rancangan perbandingan yang membawa Anda lebih dekat.

## Apa yang salah dipahami pengajar tentang hal ini

**"Nilai yang lebih tinggi pada tugas berarti mereka belajar lebih banyak."** Keduanya dapat bergerak ke arah yang berlawanan. Eksperimen guardrails menaikkan latihan berbantuan sebesar 48% sementara ujian tanpa bantuan turun 17%, dan kohort nasional melihat skor pekerjaan rumah naik 18% sementara skor ujian buku tertutup turun 20% dalam enam bulan. Tidak satu pun pola itu akan muncul dalam buku nilai yang hanya mencatat pengumpulan akhir.

**"Ini tutor, jadi aman."** Tutor adalah label, dan hasil di balik label itu campur aduk. Tutor yang dikonfigurasi guru menghindari penalti ujian dan tidak mengalahkan kontrol pada ujian tanpa bantuan. Khanmigo menghasilkan perolehan sederhana yang menyerupai latihan terstruktur, dengan sedikit tutoring substantif yang terjadi. AI milik NUMI memperlambat kemajuan melalui pertanyaan. Seorang tutor dapat menahan solusi dan tetap menyerap latihannya.

**"Kalau terasa lebih mudah, berarti tidak mengajarkan apa pun."** Salah di kedua arah, dan itulah sebabnya usaha adalah proksi yang buruk. Coach not crutch menemukan usaha yang lebih sedikit dengan tulisan tanpa AI yang lebih baik sehari kemudian, jadi kemudahan bukan petunjuknya. Yang memisahkan kasus-kasus itu adalah apakah siswa melakukan pemikiran yang disebut tujuan itu, dan itu pertanyaan rancangan, bukan pengaturan tingkat kesulitan.

**"Aturan menyeluruh, atau prompt yang lebih baik, memperbaiki cara mereka menggunakannya."** Studi 38 siswa menemukan sebagian besar siswa dalam mode tanya-dan-berhenti satu giliran justru dalam kondisi ketika mereka telah diberi tahu bahwa AI adalah asisten belajar. Yang menggerakkan perilaku adalah panduan yang spesifik untuk tugas dan persyaratan verifikasi yang dinilai. Ketentuan kebijakan dan prompt yang cerdik keduanya adalah masukan bagi hal itu, dan tidak satu pun menggantikannya.

**"Skor platform, atau survei kepuasan, memberi tahu saya bahwa ini berhasil."** Evaluasi delapan agen menemukan peringkat platform yang terbalik di bawah rubrik ahli. Kepuasan dan pembelajaran yang dipersepsikan adalah laporan diri. Keduanya layak dikumpulkan sebagai informasi proses, dan tidak satu pun merupakan ukuran pembelajaran.

**"Akses adalah masalah ekuitasnya, dan kita sudah menyelesaikan akses."** Akses adalah satu dari tiga garis, bersama keterampilan dan siapa yang memperoleh hasil yang berguna. Pengetahuan awal menentukan apakah bantuan menjadi keterampilan atau kruk, dan kerugian dalam kohort nasional terkonsentrasi pada kelompok yang perilakunya menunjukkan substitusi, bukan pada kelompok yang tanpa perangkat.

## Apa yang akan kembali kepada Anda

**"Siswa saya bilang ini membantu."** Kemungkinan besar itu memang membantu dengan pekerjaan yang ada di depan mereka, dan itu adalah temuannya, bukan bantahannya. Tanyakan apa yang dapat mereka lakukan pada tugas serupa dengan alatnya tertutup, dan Anda mendapat jawaban yang penting.

**"Studi-studi itu saling bertentangan, jadi mengapa bertindak berdasarkan salah satunya?"** Mereka jarang bertentangan begitu Anda menyejajarkan hasil yang diukur masing-masing. Hasil positif cenderung mengukur kinerja berbantuan, kepuasan, atau aktivitas yang terstruktur baik dengan pemeriksaan tertunda; hasil negatif mengukur kinerja tanpa bantuan di kemudian hari. Sintesis Burneo menyatakan ketidakpastian itu secara eksplisit: 0,125 simpangan baku rata-rata di 14 uji, tanpa keunggulan yang mapan bagi alat generatif yang lebih baru. Perbaikan sebelum-sesudah tidak dapat menunjukkan bahwa AI menyebabkan perolehan itu, karena siswa membaik melalui sisa [[teacher-role|pengajaran]], dan [[research-methods-aied|metode penelitian efikasi]] menguraikan rancangan perbandingan yang membawa Anda lebih dekat. Bertindaklah berdasarkan klaim rancangan, yang terulang, dan tetap terbuka tentang besarnya efek, yang tidak.

**"Saya punya 200 siswa. Saya tidak bisa menjalankan penilaian tertunda."** Anda membutuhkan satu tugas dasar yang singkat dan satu butir tertunda, bukan sebuah studi. Gunakan jenis tugas yang sama tiga minggu kemudian tanpa alat itu, simpan versi ujian tahun sebelumnya sebagai perbandingan kasar, dan ambil sampel pekerjaan yang tampak tidak konsisten dengan pengumpulan sebelumnya. Itu cukup untuk melihat perolehan berbantuan 48% bersama kerugian tanpa bantuan 17% jika hal itu terjadi di kursus Anda.

**"Khanmigo memperoleh hasil positif, jadi tutoring berhasil."** Ia memperoleh perolehan matematika yang sederhana di 18 sekolah menengah, dalam rancangan yang membungkus latihan individual dengan tutor AI, sementara siswa jarang mengadakan percakapan tutoring yang substantif. Bacalah itu sebagai bukti bahwa lingkungan latihan yang terstruktur baik dapat menghasilkan perolehan kecil, bukan sebagai bukti bahwa komponen AI yang menyebabkannya.

**"Saya tidak bisa melarangnya dan saya tidak bisa mengawasinya."** Benar untuk keduanya, dan tidak satu pun diperlukan. Pertanyaan rancangannya adalah apa yang dibuat mudah oleh aktivitas Anda. Jika verifikasi dinilai, pengungkapan tidak merugikan, dan pemeriksaan tanpa bantuan ada, sebagian besar siswa mengambil jalur yang Anda bangun.

**"Saya tidak mengajar AI. Ini bukan mata pelajaran saya."** Interferensinya terjadi di dalam mata pelajaran Anda, pada langkah ketika AI melakukan latihan yang justru ada untuk disediakan kursus Anda. Itulah sebabnya perbaikannya adalah perubahan tugas, bukan unit baru.

## Yang perlu dilakukan pekan ini

**1.** Ambil satu aktivitas yang sudah Anda jalankan dan tuliskan kalimat kapabilitasnya: apa yang seharusnya dapat dilakukan siswa sesudahnya, dengan alatnya tertutup.

**2.** Tambahkan garis dasar dua menit di awal dan butir sejenis tiga minggu kemudian. Beri skor keduanya tanpa AI di ruangan.

**3.** Ubah satu prompt yang Anda berikan kepada siswa dari "jelaskan ini" menjadi "beri saya satu petunjuk, lalu ajukan pertanyaan kepada saya", dan tuntut percobaan yang direvisi sebelum mereka melanjutkan.

**4.** Tambahkan satu artefak verifikasi yang dinilai: catatan singkat tentang apa yang mereka periksa, apa yang mereka tolak, dan apa yang mereka ubah.

**5.** Pisahkan hasilnya menurut pengetahuan awal untuk siswa yang sudah Anda ketahui kesulitan, dan baca umpan balik AI yang diterima sampel dari mereka.

## Ke mana selanjutnya

[[evaluating-ai-interventions-methods|Ukuran dan Metode Penelitian untuk Mengevaluasi Intervensi AI]] membahas ukuran dan rancangan perbandingan di balik pemeriksaan di atas, dan [[ai-ed-evaluation|evaluasi AI dalam pendidikan]] adalah panduan evaluasi praktisnya. [[how-ai-impacts-students|Bagaimana AI Memengaruhi Siswa]] mengambil sisi pengalaman siswa, [[top-10-findings-ai-education-instructors|Sepuluh Temuan Utama dari Penelitian AI dalam Pendidikan]] memadatkan bukti yang sama menjadi keputusan pengajar, dan [[limitations-in-aied-research|Keterbatasan dalam Penelitian AIEd]] adalah catatan jujur tentang apa yang belum dapat diberitahukan literatur ini kepada Anda. Jika pertanyaan Anda telah menjadi pertanyaan penilaian, [[reduce-ai-cheating|Mengurangi Kecurangan AI di Kursus Anda]] adalah halaman berikutnya.
