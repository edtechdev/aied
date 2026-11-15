---
title: "Apa Saja 10 Temuan Utama dari Penelitian AI dalam Pendidikan yang Perlu Diketahui Pengajar?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
updated: "2026-11-14T18:10:00-05:00"
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Sepuluh studi ini berkaitan langsung dengan keputusan yang diambil pendidik: apa yang ditugaskan, bagaimana menilainya, alat apa yang dibeli, bagaimana membangunnya, dan bagaimana mengetahui apakah pembelajaran terjadi. Setiap entri menyajikan studi, hasilnya, dan praktik yang diubahnya.

## Sepuluh studi

**1. Akses chatbot biasa menurunkan nilai ujian sebesar 17% ([[generative-ai-guardrails-harm-learning|Bastani dkk., 2025]]).**

Hampir 1.000 siswa sekolah menengah di Turki, di sekitar 50 kelas, mengikuti tiga sesi matematika dengan materi yang sama. Satu kelompok mendapat jendela chat GPT-4 biasa selama latihan. Satu kelompok mendapat tutor yang dibangun di atas model yang sama dengan [[guardrails|pagar pengaman]] tulisan guru: petunjuk menggantikan jawaban, dengan solusi yang benar dan kesalahan umum tertanam dalam prompt. Kelompok kontrol tidak mendapat AI. Setiap sesi berakhir dengan [[summative-assessment|ujian tanpa buku]] pada soal serupa, tanpa alat tersebut.

Kelompok chat biasa memperoleh nilai 48% di atas kontrol selama latihan dan 17% di bawah kontrol pada ujian. Siswa yang tidak pernah menyentuh AI mengungguli mereka. Kelompok yang dijaga memperoleh kenaikan 127% dalam latihan dan setara dengan kontrol pada ujian. Kerugiannya hilang, dan tidak ada keunggulan belajar yang muncul menggantikannya. Log chat menjelaskan perbedaan itu: kelompok tanpa penjagaan meminta jawaban lalu berhenti, sementara kelompok yang dijaga mencoba menyelesaikan soal, meminta petunjuk, dan membaik dalam sesi pertama.

Bagi pendidik, “AI diizinkan” bukanlah kebijakan. Antarmuka menentukan apakah alat itu menjadi saluran petunjuk atau mesin jawaban, dan chatbot umum secara bawaan menjadi yang kedua. Jendela chat yang dibiarkan terbuka selama latihan merugikan siswa yang paling bergantung padanya.

Administrator dapat memakai hasil yang sama untuk melawan klaim pengadaan bahwa model yang lebih kuat memperbaiki pedagogi. Modelnya identik di kedua kelompok.

Terkait: [[training-ai-tutors-to-guide-rather-than-answer|Melatih tutor untuk membimbing, bukan menjawab]]

**2. Tutor yang dibangun di atas pedagogi mata kuliah itu sendiri mengungguli kelas dengan pembelajaran aktif, dalam waktu lebih singkat ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin dkk., 2025]]).**

Physical Sciences 2 adalah mata kuliah fisika pengantar Harvard untuk mahasiswa jurusan ilmu hayati. Sepanjang musim gugur 2023, 194 mahasiswa dalam uji silang mengikuti dua pelajaran dua kali, sekali di kelas [[active-learning|pembelajaran aktif]] mata kuliah itu dan sekali melalui tutor yang dibangun untuk mata kuliah tersebut, dengan tes awal dan tes akhir di sekitar setiap versi.

Mahasiswa belajar lebih banyak dengan tutor. Median tes akhir adalah 4,5 berbanding 3,5, median [[learning-gains|perolehan belajar]] lebih dari dua kali lipat kelas, dan estimasi kuantil efek berkisar dari 0,73 hingga 1,3 simpangan baku. Mereka menghabiskan median 49 menit dengan tutor berbanding sekitar 60 menit di kelas, dan 83% menilai penjelasan tutor sama baik atau lebih baik daripada penjelasan pengajar mereka. Penilaian keterlibatan dan motivasi meningkat. Kesenangan dan pola pikir berkembang tidak berbeda.

Hasilnya bertumpu pada desain. Tutor menjalankan langkah yang sama dengan kelas: contoh yang dikerjakan, petunjuk bertahap, prompt penjelasan diri, urutan yang mengikuti penelitian tentang cara fisika dipelajari. Perbandingannya dengan pembelajaran aktif, bukan ceramah, sehingga keberatan umum bahwa apa pun mengalahkan ceramah tidak berlaku di sini.

Pengembang fakultas memiliki argumen terkuat yang tersedia di sini bahwa desain tutor adalah pekerjaan kurikulum, bukan pengadaan. Bagi tim produk, standarnya konkret: menyamai kelas dengan pembelajaran aktif, dalam waktu lebih singkat, dengan langkah pengajaran yang sama.

Terkait: [[developing-ai-tutor|Praktik terbaik untuk mengembangkan tutor AI]]

**3. Tutor AI menyamai tutor manusia ahli ([[studentbench-ai-human-tutoring-gre-2026|Northcutt dkk., 2026]]).**

StudentBench menggabungkan 2.469 sesi tutor dengan 2.383 orang dewasa yang bersiap untuk GRE, menggunakan 13 tutor AI yang dibangun di atas 12 model, tutor manusia langsung, dan kontrol video. Hasilnya adalah perolehan belajar pada soal Kuantitatif dan Verbal.

Secara gabungan, tutor AI setara secara statistik dengan tutor manusia ahli, dalam selisih seperempat simpangan baku, dan keduanya mengungguli kontrol sekitar enam poin persentase: 6,86 pada Kuantitatif dan 5,47 pada Verbal, atau sekitar satu setengah hingga dua jawaban benar tambahan per bagian. Tutor AI dinilai lebih lemah dalam perencanaan pelajaran dan pembuatan soal latihan, yang lebih baik dilakukan tutor manusia.

Bagi administrator, aritmetika kepegawaian berubah untuk persiapan ujian yang terdefinisi baik. Ketika tutor berlisensi menyamai tutor manusia pada seperempat simpangan baku, keputusannya menyangkut biaya dan cakupan, dan efektivitas berhenti menjadi pertanyaan. Peneliti akan mencatat batasnya: kesetaraan bukan keunggulan, dan tes terstandardisasi adalah hasil termudah yang dapat disamai mesin.

Pengembang fakultas dapat melihat di mana tutor manusia mempertahankan keunggulan: mendiagnosis apa yang dibutuhkan pembelajar berikutnya, dan membangun urutan yang mengikutinya.

Terkait: [[intelligent-tutoring|Tutor cerdas]]

**4. Menulis catatan mengalahkan bertanya kepada chatbot, tiga hari kemudian ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes dkk., 2026]]).**

Kreijkes dan rekan menjalankan eksperimen terpreregistrasi di tujuh sekolah menengah Inggris. 405 siswa Kelas 10 mengikuti dua dari tiga kondisi pada teks sejarah: chatbot yang dapat menjawab pertanyaan tentang teks itu, menulis catatan, atau keduanya. Tiga hari kemudian mereka mengerjakan tes tanpa buku tentang retensi harfiah, pemahaman, dan [[retrieval-spacing-interleaving|pemanggilan kembali bebas]].

Catatan mengalahkan chatbot pada ketiga ukuran, sekitar setengah simpangan baku pada retensi dan mendekati empat persepuluh pada pemahaman. Catatan plus chatbot mengalahkan chatbot saja pada dua dari tiga ukuran dan tidak berpengaruh pada pemanggilan kembali bebas, dan catatan saja lebih kuat daripada kombinasi. Pada kondisi gabungan, sekitar seperempat siswa menyalin keluaran chatbot ke catatan mereka. Siswa tetap menilai chatbot lebih mudah, lebih membantu, dan lebih menyenangkan daripada menulis.

Pendidik memiliki bukti langsung di sini bahwa asisten membaca dapat menggantikan membaca. Jika tujuan tugas adalah memahami teks, [[writing-education|menulis adalah memahami]], dan alat yang menjawab pertanyaan tentang teks itu menghilangkan latihannya. Pertahankan catatan. Jika Anda mengizinkan chatbot, mintalah sesuatu yang tidak dapat diberikannya: perbandingan, tantangan terhadap teks, atau ringkasan yang ditulis setelah alat ditutup.

Terkait: [[ai-support-reading-comprehension|Dukungan AI untuk pemahaman bacaan]]

**5. Waktu belajar turun 27%, dan retensi ikut turun ([[generative-ai-reduced-study-time-math|Rismanchian dkk., 2026]]).**

Panel sepuluh tahun dari platform ALEKS, mencakup 3,2 juta interaksi belajar dan 12,2 juta waktu respons penilaian penempatan, menunjukkan apa yang dilakukan siswa setelah ChatGPT hadir. Desainnya membandingkan jenis soal yang dapat ditempel ke chatbot (soal cerita berbasis teks) dengan jenis yang memerlukan manipulasi grafik di dalam platform, dalam kurikulum yang sama.

Waktu pada soal yang rentan AI turun 2,8% per kuartal di kalangan mahasiswa, 26,9% selama sebelas kuartal. Siswa sekolah menengah turun 31,3%, sekolah menengah pertama 9,0%, dan siswa kelas lima tidak menunjukkan perubahan yang terdeteksi. Penurunan itu hilang sepenuhnya di bawah [[remote-proctoring|pengawasan jarak jauh]], yang merupakan uji penentu: ketika alat tidak tersedia, siswa menghabiskan waktu sebanyak sebelumnya. Butir retensi yang diawasi menunjukkan penurunan kumulatif 25% dalam peluang jawaban benar.

Gradien usia adalah sinyal desain bagi tim produk. Waktu latihan adalah variabel yang bergerak, dan paling bergerak ketika tugas paling mudah diserahkan. Bagi pendidik, waktu pada tugas adalah peringatan dini yang murah: kohort yang menyelesaikan soal yang sama jauh lebih cepat mungkin tidak mempelajari hal yang sama.

Terkait: [[reducing-over-reliance|Mengurangi ketergantungan berlebihan pada AI]]

**6. Nilai pekerjaan rumah naik 18% sementara ujian tanpa buku turun 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg dkk., 2026]]).**

26.811 siswa kelas 7 hingga 12 di Tiongkok, diikuti selama 30 bulan, dengan AI generatif diadopsi pada waktu yang berbeda di berbagai kohort. Nilai pekerjaan rumah naik 18% dan waktu penyelesaian turun 30%, dari 64 menjadi 45 menit. Ujian bulanan tanpa buku turun 20% dari rata-rata dasar dalam enam bulan, dan ujian masuk berisiko tinggi turun 18% hingga 24% setelah sekitar dua tahun.

Waktunya menunjukkan mekanismenya. Sekitar 81% pengguna AI menyelesaikan pekerjaan rumah lebih cepat daripada siswa non-AI tercepat lalu berkinerja buruk pada ujian. Minoritas yang menjaga waktu pekerjaan rumah setara dengan nonpengguna belajar sebaik siapa pun. Kerugian terbesar ada di ilmu sosial, lalu STEM, lalu bahasa, dan lebih besar pada siswa berprestasi tinggi.

Penyelesaian pekerjaan rumah adalah proksi yang buruk untuk prestasi, dan kesenjangannya muncul dalam enam bulan, jauh sebelum hasil ujian masuk bergerak. Pendidik dapat bertindak lebih awal: pertahankan bukti bernilai dalam kondisi tanpa buku, dan perlakukan pekerjaan di rumah sebagai latihan yang waktu penyelesaiannya terlihat.

Terkait: [[checking-whether-educational-ai-works|Memeriksa apakah AI pendidikan berfungsi]]

**7. Setiap tutor yang diuji gagal pada pedagogi, dan gagal lebih buruk sepanjang percakapan ([[hazra-safetutors-pedagogical-safety-2026|Hazra dkk., 2026]]).**

SafeTutors menguji 11 tutor, dari model berbobot terbuka 3,8B hingga 72B ditambah GPT-5-mini, pada matematika, fisika, dan kimia, terhadap taksonomi 11 dimensi dan 48 subrisiko yang diambil dari [[learning-theories|ilmu pembelajaran]]. Kategori kegagalannya bersifat pedagogis: pengungkapan jawaban berlebihan, penguatan miskonsepsi, dan meninggalkan [[scaffolding|perancah]]. Masing-masing tampak membantu pada saat itu, karena siswa cepat mendapat jawaban benar.

Setiap model menunjukkan kerugian pedagogis yang luas. Model yang lebih besar tidak terbukti lebih aman, dan kegunaan umum hanya berkorelasi lemah dengan keselamatan pedagogis. Tingkat kerugian naik dari 17,7% pada pertukaran satu putaran menjadi 77,8% pada percakapan lima hingga delapan putaran.

Evaluasi satu putaran bukan bukti tutor yang aman, dan tim produk harus merancang pengujian mereka di sekitar itu. Model yang lolos pemeriksaan kegunaan dan keselamatan sekali jalan dapat gagal di sebagian besar percakapan nyata. Administrator yang membeli tutor memerlukan tiga jawaban: apakah tutor menahan solusi, apakah tutor menyelidiki miskonsepsi, dan apakah tutor bertahan sepanjang sesi. Demo vendor satu pertukaran tidak memberikan satu pun dari ketiganya.

Terkait: [[pedagogical-safety|Keselamatan pedagogis]]

**8. Kasus pelanggaran bersandar pada bukti yang lebih tipis daripada yang disiratkan tuduhan ([[munoz-misconduct-allegation-evidence-2026|Munoz dkk., 2026]]).**

Munoz dan rekan mengodekan setiap kasus pelanggaran AI generatif di satu universitas Australia selama tiga tahun: 1.162 kasus yang membawa 1.855 butir bukti, masing-masing dinilai untuk relevansi, kredibilitas, dan kekuatan inferensial.

Tuduhan AI generatif naik dari 11,9% kasus pelanggaran pada 2023 menjadi 36,9% pada 2025, sementara total volume kasus tetap datar. 58 kasus, 5% dari total GenAI, bersandar pada pernyataan semata tanpa satu pun butir bukti. Keluaran detektor jarang dan lemah: laporan Turnitin atau kemiripan tidak membawa kekuatan inferensial pada 73 butir, dan keluaran GPTZero mandiri memiliki kredibilitas rendah pada 69 butir. Bukti terkuat datang dari investigasi, bukan dari tuduhan, dengan pengakuan dalam wawancara lisan pada 410 butir dengan 97,2% kuat. [[hallucination-risk|Referensi palsu]] adalah pergeseran struktural terbesar, 22,3% butir, naik dari 10,4% pada 2023 menjadi 30,0% pada 2025.

Bagi administrator, pelajarannya bersifat prosedural. Kasus yang dibangun di atas skor detektor tidak akan bertahan dalam banding, dan investigasi yang dimulai dengan alat alih-alih wawancara menghasilkan berkas yang lemah. Pendidik dapat bertindak atas artefak yang terus muncul: referensi palsu umum terjadi, dan pemeriksaan referensi itu murah.

Terkait: [[should-we-use-ai-detectors|Menggunakan detektor AI]]

**9. Keyakinan guru terhadap literasi AI mereka sendiri hampir tidak mengikuti keterampilan yang diukur ([[ai-literacy-assessment-misalignment|Zhang dkk., 2026]]).**

288 guru K-12 menyelesaikan survei literasi AI berbasis laporan diri dan ukuran kinerja objektif yang dibangun di atas kerangka yang sama: Konsep, Penggunaan, Evaluasi, dan Etika. Korelasi antara keduanya berkisar dari 0,07 hingga 0,24.

Analisis profil laten menemukan enam kelompok. 43 guru menilai diri mereka secara konsisten tinggi sementara memperoleh skor lebih rendah pada ukuran objektif. 59 menunjukkan sebaliknya. Sisanya berkerumun di dekat rata-rata atau terbagi menurut pengalaman sebelumnya dengan AI.

Bagi pengembang fakultas, [[self-assessment|penilaian diri]] bukanlah analisis kebutuhan. Survei yang menanyakan kepada guru seberapa yakin mereka akan mendanai berlebih yang percaya diri dan kurang melayani yang pendiam, dan kelompok itu bukanlah yang kompeten dan yang berjuang. Tugas kinerja singkat memisahkan mereka. Peneliti harus memperlakukan korelasi rendah sebagai peringatan pengukuran: setiap studi [[ai-literacy|literasi AI]] yang dibangun di atas [[self-report-measures|laporan diri]] mengukur keyakinan.

Terkait: [[faculty-development-ai|Pengembangan fakultas yang mengubah praktik]]

**10. Penilaian AI menghukum siswa yang menulis kurang baik ([[ai-scoring-language-bias-physics|Feser dan Tschisgale, 2026]]).**

Penjelasan fisika dari 116 siswa sekolah menengah dinilai oleh 9 pendekatan pembelajaran mesin dan 2 pendekatan model bahasa besar, lalu dibandingkan dengan skor manusia ahli. Kesepakatan dengan para ahli berkisar dari 67,2% hingga 78,4%, yang terdengar dapat diterima sampai kesalahannya diurai.

Setiap pendekatan meremehkan pemahaman konseptual untuk penjelasan dengan kualitas bahasa lebih rendah. Biasnya satu arah: tulisan yang lebih kuat tidak dilebih-lebihkan. Polanya mencerminkan apa yang dilaporkan pada guru fisika sendiri, yang menunjukkan bahwa kesulitannya terletak pada menyimpulkan pemahaman dari prosa, bagi manusia sama seperti bagi model.

Staf penilaian dan tim produk perlu melaporkan tingkat peremehan menurut kualitas bahasa, bukan hanya kesepakatan keseluruhan dengan ahli, karena rata-rata menyembunyikan kelompok yang dirugikan. Siapa pun yang menilai [[multilingual-learning|pembelajar multibahasa]] harus mengarahkan respons berkualitas bahasa rendah ke [[human-in-the-loop-ai|tinjauan manusia]] atau merancang tugas yang tidak bergantung pada prosa.

Terkait: [[ai-grading-fairness-reliability|Penilaian AI yang adil dan andal]]

## Apa kesamaan sepuluh studi ini

Tiga studi mengukur dua hal sekaligus: apa yang dihasilkan siswa dengan alat itu, dan apa yang dapat mereka lakukan tanpa alat itu. Bastani, Rismanchian, dan Strömberg semuanya menemukan keduanya menyimpang, dan hanya ukuran tanpa bantuan yang berperilaku seperti pembelajaran. Empat bergantung pada pilihan desain alih-alih model: pagar pengaman pada Bastani, pedagogi yang tertanam dalam tutor Kestin, penulisan catatan yang dipertahankan Kreijkes dalam tugas, dan pengaturan multi-putaran yang diuji SafeTutors. Tiga mengkaji sistem di sekitar alat, yaitu bukti yang digunakan dalam kasus pelanggaran, cara kompetensi guru diukur, dan asumsi linguistik dalam [[automated-assessment|penilaian otomatis]]. StudentBench menetapkan kesetaraan pada tes terstandardisasi, satu-satunya hasil di mana mesin paling mudah menyamai manusia. Bastani muncul dalam dua kelompok karena menyumbang kesenjangan sekaligus perbaikan desain.

Itu menyisakan tiga pertanyaan yang layak dibawa ke setiap keputusan mata kuliah atau produk. Apa yang seharusnya dapat dilakukan siswa ketika alat itu tidak ada? Apa yang diminta aktivitas itu mereka lakukan saat alat itu terbuka? Bukti apa yang akan menunjukkan perbedaannya sebulan kemudian?

## Di mana bukti ini tipis

Studi-studi ini berbagi [[limitations-in-aied-research|keterbatasan penelitian AIEd]] secara keseluruhan. Dua yang terbesar berlokasi di Turki dan Tiongkok, tiga di Amerika Serikat, satu di Inggris, satu di Australia, dan studi penilaian di Jerman. Satu merupakan tolok ukur model komersial, bukan studi lapangan. Matematika sekolah menengah mendominasi, disusul fisika dan komputasi. Sangat sedikit studi yang melihat [[humanities-education|penulisan humaniora]] dalam skala besar, pendidikan kejuruan, atau siswa dengan disabilitas.

Hanya panel Tiongkok dan panel ALEKS yang mengamati siswa lebih dari dua tahun setelah adopsi, dan penulis Tiongkok berargumen bahwa studi yang lebih pendek secara sistematis meremehkan penalti jangka panjang. Enam dari hasil ini adalah pracetak atau makalah kerja yang belum menyelesaikan tinjauan sejawat: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang, dan Feser. Studi Bastani, Kestin, Kreijkes, dan Munoz diterbitkan di jurnal yang ditelaah sejawat.

Hasil nol dan negatif jarang dalam literatur ini, sehingga catatan yang diterbitkan mungkin melebih-lebihkan seberapa sering AI membantu. Studi-studi ini adalah panduan terbaik saat ini untuk sepuluh keputusan, dan tidak satu pun darinya menyelesaikan suatu pertanyaan.

## Ke mana selanjutnya

[[does-ai-help-students-learn|Apakah AI membantu siswa belajar?]] adalah tinjauan bukti yang lebih luas di balik klaim-klaim ini. [[redesign-assessment-ai-era|Bagaimana penilaian harus dirancang ulang untuk era AI?]] membawa bagian penilaian lebih jauh. Untuk kasus integritas, [[reduce-ai-cheating|Bagaimana cara mengurangi kecurangan AI?]] mencakup bukti proses dan kebijakan. Untuk temuan pengembangan profesional, [[faculty-ai-competencies|Kompetensi AI apa yang dibutuhkan fakultas?]] adalah halaman pendampingnya, dan [[addressing-common-misconceptions-ai-education|Bagaimana kita dapat menangani miskonsepsi umum tentang AI dalam pendidikan?]] menangani keberatan yang mungkin Anda dengar dari kolega.
