---
title: "Bagaimana AI sebaiknya dirancang ke dalam pengalaman belajar?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Kerangka modul punya satu baris yang bertuliskan “aktivitas AI” dan tidak ada seorang pun yang bisa mengatakan apa yang digantikannya. Atau seorang pengajar meminta agar sebuah chatbot ditambahkan ke mata kuliah yang sudah berjalan baik, dan tugas Anda adalah menempatkannya tanpa merusak bagian yang membuat mata kuliah itu berhasil.

Mulailah dari tujuan pembelajaran dan dari aktivitas yang menghasilkannya. Model yang sama bisa menjadi perancah, mitra [[socratic-method|Sokratik]], pembaca draf, sebuah [[simulation|simulasi]], atau mesin jawaban, dan mana yang Anda dapatkan bergantung pada desainnya, bukan pada modelnya. Sebutkan mode yang Anda bangun, letakkan upaya pembelajar sebelum bantuan apa pun muncul, dan pertahankan setidaknya satu jalur melalui mata kuliah yang berjalan tanpa alat itu.

## Versi singkat

**1.** Tuliskan kalimat tentang apa yang dapat dilakukan pembelajar setelahnya tanpa alat itu, dan periksa setiap fitur AI terhadap kalimat tersebut.

**2.** Susun urutan interaksinya: pembelajar mencoba, AI mendukung, pembelajar mengevaluasi atau merevisi, pembelajar menunjukkan.

**3.** Sebutkan modenya pada tangga ICAP. Jalan pintas dan perancah bisa merupakan alat yang sama pada anak tangga yang berbeda.

**4.** Tempatkan AI di titik yang sudah dimaksudkan urutan mata kuliah sebagai aktivitas tertentu, bukan di akhir sebagai bonus.

**5.** Tahan alat itu selama suatu kapasitas sedang terbentuk, lalu kembalikan pada titik pemeriksaan yang tidak dapat dipalsukan siswa.

## Tentukan apa yang dilakukan pembelajar tanpa alat itu

Konsep [[pedagogy|Pedagogi dan Strategi Pengajaran]] di basis pengetahuan menyediakan ujinya: apakah konfigurasi itu mempertahankan aktivitas yang menghasilkan pembelajaran yang dimaksud? Jawablah di atas kertas, sebelum siapa pun memilih fitur.

[[finkelstein-principled-ai-education-2025|Kerangka Pendidikan AI Berprinsip]] menyatakan aturan umumnya: teknologi seharusnya memperbesar, bukan menggantikan, kapabilitas manusia yang ingin dikembangkan oleh pendidikan. Jika ditulis sebagai uji untuk sebuah modul, itu berarti menamai kapabilitasnya, menamai aktivitas yang membangunnya, dan menanyakan apakah AI berada di dalam aktivitas itu atau di sampingnya.

## Letakkan upaya sebelum bantuan

Pola bawaan yang bertahan saat berhadapan dengan kelas nyata: **pembelajar mencoba, AI mendukung, pembelajar mengevaluasi atau merevisi, pembelajar menunjukkan pemahaman.**

Dalam praktiknya itu berarti meminta prediksi atau solusi awal sebelum bantuan apa pun muncul, dan mengutamakan pertanyaan, petunjuk, contoh, kontraargumen, dan [[feedback|umpan balik]] daripada penyelesaian instan. Pertahankan [[productive-failure|kegagalan produktif]] di tempat ia melayani pembelajaran. Tuntut verifikasi atas klaim yang berkonsekuensi, bangun penjelasan dan [[learning-by-teaching|belajar dengan mengajar]], serta padamkan dukungan itu seiring tumbuhnya kompetensi. Sisakan sebagian pekerjaan tanpa AI agar pembelajar dapat mengkalibrasi apa yang bisa mereka lakukan sendiri.

Sintesis [[reducing-ai-misuse|Mengurangi Penyalahgunaan AI]] menganjurkan bentuk yang sama sebagai urutan berpikir dulu, AI kedua, lalu refleksi, dengan titik pemeriksaan evaluasi yang disengaja.

## Sebutkan mode yang Anda rancang

[[thermomix-genai-education-analogy-2026|Analogi mesin dapur Rummel, Nachtigall, dan Panadero]] membingkai ulang pertanyaannya, dari apakah pembelajar memakai [[generative-ai|AI generatif]] menjadi bagaimana pemakaian itu membentuk apa yang mereka jadi. Dipetakan ke [[icap-framework|ICAP]] dan [[samr-model|SAMR]], analogi itu memberi sebuah tangga. Melakukan outsourcing penuh atas sebuah tugas tanpa revisi atau [[critical-thinking|keterlibatan kritis]] adalah substitusi Pasif, dan itu berisiko [[cognitive-offloading|kehilangan keterampilan dan ketergantungan berlebih]]. [[prompt-engineering|Menyempurnakan prompt]] dan memeriksa silang keluaran menuntut [[prior-knowledge|pengetahuan awal]] dan [[self-regulated-learning|regulasi diri]], yang termasuk Aktif atau Augmentasi. Memakai AI untuk bertukar pikiran, membuat kerangka, dan mengevaluasi karya orisinal adalah Konstruktif atau Modifikasi. AI sebagai mitra dialog sungguhan untuk ko-konstruksi dan umpan balik adaptif adalah Interaktif atau Redefinisi.

Implikasinya langsung. Alat yang sama adalah jalan pintas pada satu anak tangga dan [[scaffolding|perancah]] pada anak tangga berikutnya, sehingga dokumen desain seharusnya menyebutkan mode yang dimaksudkan.

## Tempatkan di titik yang dimaksudkan urutan sebagai aktivitas

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec, dan Horvat]] menganalisis urutan terencana 29.064 aktivitas pengajaran dan pembelajaran di 554 mata kuliah dan menemukan tata bahasa desain yang terlihat. Aktivitas bertipe akuisisi adalah titik masuk yang paling umum dan jenis tunggal terbesar, di atas 20%. Tipe belajar mengikuti tingkat Bloom yang dimaksudkan, dengan Akuisisi turun dari sekitar 50% pada tingkat 1 menjadi sekitar 20% pada tingkat 6 dan Produksi naik di atas 20% pada tingkat 5 dan 6. Transisi terkuat dalam data adalah Penilaian ke Diskusi, pada 0,332.

Dua pelajaran mengikutinya untuk desain AI. Tempatkan alat di titik yang dimaksudkan urutan sebagai jenis aktivitas. Dan karena umpan balik mengelompok bersama [[collaborative-learning|kolaborasi]], [[group-work|kerja kelompok]], dan kehadiran [[teacher-role|guru]], struktur sebaya dan sinkron adalah tempat dukungan AI seharusnya dipasang, bukan tempat ia seharusnya menggantikan.

## Tentukan apa yang ditahan, dan kapan mengembalikannya

[[refrain-amplify-genai-curriculum-2026|Kerangka “tahan dulu, lalu perkuat” dari Torres-Sahli dan rekan]] memindahkan hal ini ke tingkat program. Tahan alat generatif selama suatu kapasitas sedang terbentuk, lalu kembalikan setelah siswa dapat mengarahkannya, menilai apa yang dikembalikannya, dan mempertanggungjawabkannya, dengan titik pemeriksaan yang sulit dipalsukan pada setiap engsel.

Perangkat diatur oleh kriteria terbentuk versus [[cognitive-offloading|offloading]]: diizinkan jika mendukung kerja yang terlibat, dikecualikan jika menguras perhatian. Itu mengubah keputusan offloading menjadi pertanyaan [[curriculum-design|kurikulum]] dan [[governance|tata kelola]] yang datang sebelum desain tingkat mata kuliah, bukan sesudahnya.

## Periksa apakah keselarasan itu nyata

[[mcinnes-salvaging-constructive-alignment-genai-2026|Analisis wacana McInnes dan rekan]] atas 14 panduan pendidikan tinggi memperingatkan bahwa saran yang dibingkai sebagai efisiensi, seperti memakai AI generatif untuk menyusun capaian, rubrik, dan kerangka mata kuliah, menghasilkan [[assessment|keselarasan]] yang tampak selaras sementara separuh konstruktifnya diabaikan. Capaian, aktivitas, dan penilaian dihasilkan sebagai butir-butir yang terpisah, bukan butir yang saling bergantung.

Resep mereka adalah penyusunan ulang urutan. Pendidik seharusnya memahami keselarasan konstruktif cukup baik untuk mengarahkan, menginterogasi, dan menolak keluaran AI sebelum mendelegasikan bagian mana pun darinya, karena menerima permukaan yang masuk akal adalah kegagalan evaluatif yang sama dengan yang diperingatkan pengajar kepada siswa. Di tempat AI dipakai, mereka menganjurkan sistem [[rag|retrieval-augmented]] yang dibatasi secara institusional dan dikonfigurasi mengikuti kebijakan serta standar mutu lokal, bukan bawaan generik yang dilatih di internet.

## Apa yang salah dipahami perancang pembelajaran

Menambahkan AI dianggap sebagai intervensinya. Yang mengubah pembelajaran adalah aktivitas yang dilakukan siswa, dan AI hanyalah satu bagian dari latar bagi aktivitas itu. Petunjuk yang ditempatkan baik dan jawaban yang ditempatkan baik dapat berjalan pada model yang sama dan menghasilkan pembelajaran yang berlawanan.

Menulis izin dianggap sebagai kerja desainnya. Izin menetapkan apa yang boleh. Ia tidak menetapkan urutannya, modenya, atau titik pemeriksaannya, dan ketiga hal itu yang menentukan apakah aktivitasnya bertahan.

Efisiensi dianggap sebagai tujuan desain ulangnya. Menyusun capaian dan rubrik dengan model itu cepat, dan analisis 14 dokumen menemukan hasilnya bisa tampak selaras sementara bagian-bagiannya berhenti saling menopang.

## Apa yang akan kembali kepada Anda

**“Siswa akan tetap memakainya, jadi merancang di sekitarnya itu naif.”** Mereka akan memakainya, dan itulah alasan untuk menetapkan modenya dan mengajarkannya. Modul yang menyebutkan modenya memberi siswa sesuatu untuk dipatuhi.

**“Kami tidak punya waktu untuk menyusun ulang urutan seluruh mata kuliah.”** Maka susun ulang satu modul dan satu penilaian. Engsel tahan lalu perkuat adalah satu titik pemeriksaan, dan urutan berpikir dulu adalah tiga instruksi pada selembar selebaran.

**“Fitur AI kami sudah punya pagar pengaman.”** Pagar pengaman membatasi apa yang dikatakan model. Ia tidak memutuskan apakah pembelajar mencoba lebih dulu, apakah dukungan memudar, atau apakah ada jalur tanpa AI. Itu keputusan desain di mata kuliah Anda, bukan pengaturan di produknya.

## Yang perlu dilakukan pekan ini

**1.** Tuliskan kalimat kinerja tanpa bantuan untuk modul itu dan letakkan di atas daftar aktivitas.

**2.** Tandai mode ICAP yang dimaksudkan di samping setiap aktivitas AI dalam kerangka.

**3.** Pindahkan satu aktivitas AI agar pembelajar mencoba masalahnya lebih dulu.

**4.** Pilih satu jalur tanpa AI melalui modul itu dan beri label untuk siswa.

**5.** Sebutkan satu engsel tempat alat ditahan, dan titik pemeriksaan yang mengembalikannya.

## Ke mana selanjutnya

[[learning-design|Desain Pembelajaran]], [[active-learning|Pembelajaran Aktif]], dan [[scaffolding|perancah]] membawa kosakata desainnya. Untuk bawaan tingkat interaksi yang menentukan apakah aktivitas yang dirancang mempertahankan pembelajaran, lihat [[reduce-ai-cheating]] dan [[redesign-assessment-ai-era]]. [[designing-educational-ai-software]] membahas bagaimana prinsip yang sama membatasi perangkat lunaknya sendiri, dan [[developing-ai-tutor]] menerjemahkannya ke dalam arsitektur sebuah tutor.
