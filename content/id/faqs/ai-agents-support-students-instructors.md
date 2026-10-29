---
title: "Bagaimana Agen AI Dapat Mendukung Mahasiswa dan Pengajar?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/ai-agents-support-students-instructors
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

Demo vendor berjalan empat puluh menit. Agen itu membaca silabus, menyusun draf kuis pekan depan, menandai tiga mahasiswa yang belum membuka bacaannya, dan menawarkan mengirimi mereka surel. Wakil rektor Anda menginginkan keputusan lisensi pada akhir bulan.

Sebuah [[agentic-ai|agen]] merencanakan, memanggil alat, menyimpan konteks, memecah pekerjaan menjadi subtugas dan beradaptasi lintas giliran, yang lebih banyak daripada yang dilakukan sebuah [[conversational-ai|chatbot]]. Peran di sisi mahasiswa dan sisi pengajar yang terbuka dari situ nyata. Buktinya tidak menunjukkan bahwa otonomi yang lebih besar menghasilkan pembelajaran yang lebih banyak: dalam satu studi berhadapan langsung di sini, agen dan chatbot berimbang. Taruh otonomi di tempat orang memeriksa keluarannya, simpan perencanaannya pada pembelajar, dan nilai kualitas pengajaran terhadap rubrik Anda sendiri.

## Versi singkat

**1.** Sebutkan tugasnya sebelum produknya.

**2.** Mulai dari sisi pengajar, di tempat seorang guru sudah memeriksa pekerjaannya.

**3.** Perlakukan otonomi tambahan sebagai biaya sampai bukti menyatakan sebaliknya.

**4.** Simpan perencanaan dan penilaian pada pembelajar, karena itulah yang menjadi alasan tugasnya ada.

**5.** Nilai agennya terhadap rubrik Anda, dan jadwalkan pemeriksaan tanpa bantuan sebelum uji coba berakhir.

## Pilih tugasnya sebelum Anda memilih agennya

[[agentic-workflows-education|Alur Kerja Agentik dalam Pendidikan]] menyebutkan empat kapabilitas yang berulang: refleksi, perencanaan, penggunaan alat dan kolaborasi multi-agen. Masing-masing menambahkan biaya di samping kemungkinannya, dalam hal [[explainable-ai|keterjelasan]], koordinasi, [[trust-calibration|kepercayaan]], latensi dan pengawasan.

Peran di sisi mahasiswa merentang dari tutoring [[adaptive-learning|adaptif]] dan perencanaan belajar melalui umpan balik [[formative-assessment|formatif]], [[problem-solving|pemecahan masalah]] terpandu dan pembuatan latihan sampai rekomendasi prasyarat dan, pada ujung yang reflektif, [[metacognition|dorongan metakognitif]] melalui [[prompt-engineering|penyusunan prompt]]. Peran di sisi pengajar mencakup pengembangan materi, [[automated-question-generation|pembuatan soal]] dan validasinya, pemilahan umpan balik, [[learning-analytics|analitik]] mata kuliah, desain pembelajaran, pengambilan sumber daya dan orkestrasi sub-agen khusus.

Dua di antaranya lebih aman pada tahap awal, karena keduanya menghasilkan artefak yang dibaca orang sebelum dibaca mahasiswa: pembuat soal yang dipasangkan dengan validator, dan penyusunan draf yang disunting guru.

## Mulai di tempat manusia sudah memeriksa pekerjaannya

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], [[rct|uji acak terkontrol]] pertama atas sistem manusia-AI dalam tutoring langsung, memberi tutor pemula panduan waktu nyata yang diambil dari penalaran tutor berpengalaman, pada 900 tutor dan sekitar 1.800 mahasiswa. Pada kelompok tutor yang mendapat akses, mahasiswa 4 poin persentase lebih mungkin menguasai topik, naik menjadi 9 poin di antara tutor berperingkat terendah, yang mahasiswanya menyusul mahasiswa tutor berperingkat lebih baik di kelompok kontrol. Biayanya sekitar $20 per tutor per tahun, dan analisis atas 550.000+ pesan tutoring menunjukkan tutor bergeser dari memberi jawaban ke mengajukan pertanyaan pemandu. Itu AI yang memperkuat [[teacher-role|guru]].

Agen itu tidak mengajar mahasiswa. Ia memberi masukan kepada manusia di tengah percakapan, dan manusianya memutuskan apa yang akan dikatakan. Orang yang berada di dalam lingkar kendali dan hasil yang dekat dengan pekerjaannya adalah yang membuat hasil itu dapat dibawa ke mata kuliah lain.

## Jangan asumsikan otonomi lebih besar membeli pembelajaran lebih banyak

[[ilieva-agentic-genai-higher-education-2026|Studi atas 130 mahasiswa dalam mata kuliah e-commerce]] menemukan baik chatbot [[generative-ai|AI generatif]] maupun agen dinilai di atas [[online-teaching-and-learning|e-learning]] tradisional pada pembelajaran dan [[personalized-learning|personalisasi]], tanpa perbedaan signifikan antara chatbot dan agen. Otonomi tambahan, tanpa nilai tambah pada ukuran-ukuran itu.

Kerangka studi itu memperlakukan agen sebagai mitra belajar yang terbatas dan diawasi manusia, dengan tujuan, titik pemeriksaan dan keputusan akhir diserahkan kepada orang. [[beyond-agent-label-agentic-ai-governance-2026|Melampaui Label Agen]] menjadikannya aturan [[governance|tata kelola]]: otonomi tidak boleh melebihi kematangan bukti atau kekuatan kendali manusia yang dapat dimintai pertanggungjawaban, dan buktinya paling kuat pada hasil tingkat artefak, paling lemah pada [[learning-gains|pembelajaran]] yang bertahan lama dan [[equity-in-ai-education|kesetaraan]].

Risiko di sisi pembelajar berjalan ke arah yang sama. Agen yang merencanakan dan memantau untuk mahasiswa menghapus latihan yang membangun [[self-regulated-learning|regulasi diri]] dan mengundang [[cognitive-offloading|offloading]]. [[agentic-ai-pedagogical-best-practice-2026|Panduan praktik terbaik]] meminta gesekan yang disengaja, [[scaffolding|perancah]] yang memudar dan [[human-in-the-loop-ai|pengawasan manusia]]. [[desirable-difficulties|Gesekan produktif]] punya contoh yang bekerja. Agen konflik konstruktif yang membantah desain lemah meningkatkan hasil desain dalam penelitian yang ditinjau. [[simulating-students|Rekan simulasi]] mendukung [[collaborative-learning|pembelajaran kolaboratif]] dan penggalian [[socratic-method|Sokratik]], dan [[medical-education|klinis]] [[simulation|simulasi]] memungkinkan pembelajar berlatih di tempat kesalahan itu murah.

Uji untuk semuanya: setelah sesi, apa yang dapat dilakukan mahasiswa yang sebelumnya dilakukan agen? Menyerahkan pertimbangan membuat mahasiswa kehilangan [[agency|latihan]] untuk memakainya.

## Periksa agennya terhadap pertimbangan Anda sendiri

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Delapan agen pengajaran AI yang diterapkan di seluruh kurikulum kedokteran]] diperingkat secara berbeda oleh skor yang dihasilkan platform dan oleh rubrik ahli yang independen. Agen peringkat ketiga platform ternyata terakhir pada kualitas pengajaran. Skor platform mengindeks kinerja mahasiswa, yang bergerak karena alasan yang tidak ada hubungannya dengan pengajaran.

Tanyakan apa yang dihitung sebuah angka dasbor, siapa yang menulis rubrik di baliknya, dan seperti apa skor rendah bila tampak dalam pekerjaan mahasiswa. [[pedagogical-safety|Keamanan pedagogis]] termasuk dalam tinjauan yang sama, karena rantai [[pedagogical-agent|agen]] membuat sulit menyebut komponen mana yang bertanggung jawab ketika sebuah jawaban salah.

## Rencanakan untuk saat dimatikan

Uji acak menunjukkan bahwa bantuan AI yang singkat dapat menekan kinerja tanpa bantuan di kemudian hari, dan interval setelah penarikan, [[cognitive-washout-ai-skill-decay-2026|pengikisan kognitif]], hampir sepenuhnya tidak terukur. Sintesis di balik halaman ini bersandar pada [[meta-analysis-systematic-review|tinjauan pelingkupan]] atas 474 studi dan menemukan pekerjaan terkonsentrasi di [[higher-ed|pendidikan tinggi]], [[stem-education|STEM]], desain jangka pendek dan tutoring berbasis teks, dengan hanya sebagian kecil yang berlandaskan secara eksplisit pada teori pendidikan. Uji coba yang berakhir ketika lisensinya berakhir telah mengukur jendela yang salah.

## Apa yang salah dipahami administrator tentang hal ini

Agen adalah chatbot yang ditingkatkan, jadi peningkatannya semestinya tampak pada hasil. Dalam perbandingan 130 mahasiswa kedua kondisi AI mengalahkan e-learning dan tidak ada yang mengalahkan yang lain.

Dasbor memeringkat kualitas pengajaran. Ia memeringkat kinerja mahasiswa, dan delapan agen menghasilkan peringkat yang membalik posisi ketiga dan terakhir terhadap rubrik ahli.

Otonomi adalah fitur yang perlu dibeli. Aturan proporsionalitas berjalan ke arah sebaliknya, dan buktinya paling tipis di tempat otonominya paling besar.

Akses menutup kesenjangan kesetaraan. Akses yang tidak setara ke sistem agentik yang mampu dapat melebarkannya, dan agen memperbanyak bias data pelatihan dalam skala besar.

## Apa yang akan kembali kepada Anda

**"Mahasiswa akan membiarkannya mengerjakan pekerjaannya."** Sebagian akan begitu, dan arsitekturnya menentukan seberapa mudah. Agen yang merencanakan dan menyusun draf untuk mahasiswa mengundangnya. Agen yang menuntut percobaan, lalu mengajukan pertanyaan, tidak.

**"Evaluasi vendor menyatakan ini bekerja."** Tanyakan apa yang dihitung angkanya. Jika itu kinerja mahasiswa yang diukur platform, ia mengukur mahasiswa sama besar seperti mengukur agennya.

**"Tidak ada yang dapat menyebut agen mana yang bertanggung jawab dalam sebuah rantai."** Benar untuk sebagian besar penerapan saat ini. Sebutkan satu pemilik untuk rantainya, catat komponen mana yang menghasilkan keluaran mana, dan pertahankan titik pemeriksaan manusia sebelum apa pun mencapai catatan mahasiswa.

## Yang perlu dilakukan pekan ini

**1.** Tulis tugasnya dan hasil yang akan Anda nilai, satu kalimat masing-masing, sebelum panggilan vendor berikutnya.

**2.** Nilai keluaran satu agen terhadap rubrik Anda pada sepuluh karya mahasiswa nyata, dan simpan skornya.

**3.** Tambahkan tugas tanpa bantuan yang bertanggal dan berpemilik ke rencana uji coba.

## Ke mana selanjutnya

[[developing-ai-tutor]] membahas bangunan yang berorientasi mahasiswa dari tujuan sampai tangga bantuan, dan [[evaluating-ai-interventions-methods]] membahas apakah alat itu bekerja. [[intelligent-tutoring]] dan [[ai-literacy]] memasok kosakata desain yang diasumsikan halaman ini.
