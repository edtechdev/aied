---
title: "Realitas Virtual dan Tertambah"
created: "2026-09-13T09:52:00-04:00"
type: concept
pedagogy: [embodied-learning, professional-training]
technology: [generative-ai, multimodal, simulation]
ethics: [accessibility]
confidence: high
discipline: [medical education, stem education]
updated: "2026-11-04T02:28:53-05:00"
translation_of: "concepts/virtual-and-augmented-reality"
source_updated: "2026-10-26T10:00:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Realitas Virtual dan Tertambah (VR/AR)** — lapisan tampilan dan interaksi tempat lingkungan pembelajaran dialami: ruang yang sepenuhnya sintetis dalam VR, dan konten digital yang dilapiskan pada dunia fisik dalam AR serta realitas campuran. AI memasuki lapisan ini dari dua arah. Ia mengarangnya, karena [[generative-ai|AI generatif]] kini mengubah deskripsi berbahasa alami menjadi alat pembelajaran AR atau VR berbasis peramban yang berfungsi dan tidak lagi memerlukan pengembang spesialis. Dan ia menghuninya, ketika [[agentic-ai|agen]], [[pedagogical-agent|agen pedagogis]] dan [[rag|pengetahuan yang diambil]] memandu siswa tanpa tangan di dalam lingkungan imersif. Yang ditambahkan modalitas ini dibandingkan layar adalah kehadiran dan [[embodied-learning|penubuhan]]; yang dibiayainya adalah kesetiaan, perangkat keras, dan toleransi tubuh untuk berada di sana.

## Pertanyaan yang Perlu Dipertimbangkan

- Di mana garis antara apa yang dimodelkan dan permukaan tempat ia ditampilkan? Bandingkan simulator pasien desktop dengan kunjungan lapangan VR ke situs yang tidak dapat dikunjungi siswa. Perbedaan mana yang menurut Anda akan mengubah pembelajaran, dan mana yang mungkin hanya kebaruan?
- Sebuah uji coba menemukan siswa melaporkan *merasakan* panjang gelombang dan amplitudo melalui gerakan tangan lebih kuat daripada melalui slider — tetapi studi itu mengukur persepsi, bukan capaian, dengan 29 siswa dan tanpa kelompok pembanding. Seberapa besar "rasa" yang dilaporkan seharusnya diperhitungkan untuk mengadopsi sebuah alat?
- Jika AI generatif memungkinkan instruktur tanpa latar belakang pemrograman membangun simulasi AR yang berfungsi dalam satu sore, tanggung jawab baru apa yang menyusul untuk memvalidasi [[physics-education|fisikanya]], menilai kesetiaannya, dan memutuskan apakah ia layak masuk ke suatu kursus?
- Dalam tinjauan simulasi keperawatan bertenaga AI, AI menyamai aktor manusia untuk komunikasi terstruktur tetapi tidak untuk skenario taktil dan yang kompleks secara emosional. Bagaimana Anda akan mengurutkan latihan agar siswa melatih sebagian dengan AI dan sebagian lagi dengan manusia?
- Satu studi VR kelas melaporkan mabuk gerak yang minimal sementara estimasi meta-analitik untuk VR cerdas pada siswa dengan disabilitas tidak signifikan secara statistik. Apa yang ingin Anda ukur sebelum suatu program berinvestasi pada headset?

## Pendahuluan

Realitas virtual dan tertambah adalah **modalitas**, bukan model: ia adalah lapisan yang melaluinya lingkungan pembelajaran mencapai siswa. Itu menjadikannya sumbu yang berbeda dari [[simulation]], yang merupakan apa yang dimodelkan sejak awal. Keduanya sering dikacaukan, karena lingkungan imersif adalah wahana penyampaian yang umum bagi simulasi, tetapi keduanya bervariasi secara independen — simulator pasien desktop adalah simulasi tanpa VR, dan lapisan AR pada instrumen nyata adalah VR tanpa simulasi. Memisahkan kedua sumbu itu penting bagi desain: memutuskan untuk membuat latihan bebas risiko adalah keputusan yang berbeda dari memutuskan untuk membuatnya berwujud, dan keduanya membawa biaya, mode kegagalan, dan bukti yang berbeda. VR/AR adalah **lapisan penyampaian** bagi sebuah simulasi dan kerabat dekat [[game-based-learning|pembelajaran berbasis gim]]; ia mengoperasionalkan penjelasan [[embodied-learning|berwujud]] dan [[situated-learning|tersituasi]] tentang belajar, dan ia berada di dalam praktik [[experiential-learning|eksperiensial]] dan [[active-learning]].

AI kini membentuk modalitas ini dari kedua ujung. Ia **mengarang** konten imersif, karena [[generative-ai|AI generatif]] mengubah prompt berbahasa alami yang terstruktur menjadi artefak AR atau VR yang dapat dijalankan, meruntuhkan keterampilan pemrograman spesialis yang dahulu membatasi produksi. Dan ia **menghuni** lingkungan itu, ketika [[agentic-ai|agen]], [[pedagogical-agent|agen pedagogis]] dan [[rag|pengetahuan domain yang diambil]] menyediakan bimbingan di dalamnya — tanpa tangan, secara waktu-nyata, berakar pada sumber yang tidak dapat dikonsultasikan siswa saat mengenakan headset.

[[shao-ai-vr-flipped-classroom-efl-2026|Shao, Tang dan Ju (2026)]] menguji kelas terbalik yang diperkaya AI-VR bersama pembelajar EFL muda dan melaporkan kenaikan capaian bahasa Inggris, pengaturan diri metakognitif dan motivasi, dengan literasi teknologi memoderasi seberapa banyak pembelajar memperoleh manfaat dari komponen imersif.

## Apa yang ditambahkan modalitas ini

Argumen bagi VR/AR bertumpu pada kehadiran dan [[embodied-learning|penubuhan]], bukan pada penyampaian informasi. Ruang virtual bersama juga dapat memisahkan ko-kehadiran dari geografi: kelas VR yang dibangun di atas lapisan sinkronisasi waktu-nyata menempatkan guru dan siswa di ruang yang sama dan memanipulasi materi sains 3D yang sama tanpa memandang lokasi, menargetkan hingga dua puluh peserta. Dalam sesi satu jam dengan 10 siswa pada Meta Quest 3, ia melaporkan [[usability-research|keterpakaian]] yang baik pada System Usability Scale dan mabuk [[simulation]] yang minimal, sementara kelemahannya sendiri adalah konsistensi UI — dan perancangnya sengaja menghindari arsitektur peer-to-peer sebelumnya yang laju bingkainya menurun saat peserta bergabung, sebuah pengingat bahwa kehadiran dibatasi oleh rekayasa. Perbandingan yang lebih terkendali memberi gambaran suram tentang apa yang dibeli permukaan itu semata: studi 24 peserta tentang mekanika teknik menemukan bahwa aplikasi realitas campuran dan perangkat fisik menaikkan [[student-engagement|keterlibatan]] di atas pengajaran kelas, namun visualisasi yang kompleks tetap sulit bagi pembelajar di setiap kondisi. Keterlibatan adalah efek yang andal; pemahaman tidak.

## AI generatif sebagai lapisan penulisan

Hambatan yang dahulu menentukan siapa yang dapat membangun alat imersif sebagian besar telah runtuh. Dengan struktur prompt empat elemen — **alat, tampilan, kendali tangan, optimasi** — seorang [[teacher-role|guru]] atau siswa tanpa latar belakang pemrograman dapat menghasilkan simulasi fisika AR berbasis peramban dan dikendalikan tangan yang berjalan sebagai satu file HTML dengan tidak lebih dari sebuah kamera, lalu menyempurnakannya dengan mendeskripsikan apa yang salah dalam bahasa biasa. Gerakannya akrab dari layar sentuh: cubit dan rentangkan menyetel besaran fisik alih-alih memperbesar gambar, sehingga membuka jari secara vertikal menaikkan amplitudo, dan secara horizontal memanjangkan panjang gelombang serta menggeser lampu ke ujung merah spektrum. Struktur yang sama dapat digeneralisasi: medan Coulomb di sekitar ujung jari yang tersebar ke seluruh ruangan, dua tangan sebagai muatan berlawanan, dan kaidah tangan kanan untuk gaya magnet digambar pada tangan siswa sendiri — dirender sengaja **tanpa cermin**, karena pencerminan akan membalik kaidah yang justru sedang diajarkan.

Uji coba itu menggembirakan dan preliminer dalam kadar yang sama. Dengan 29 mahasiswa pencitraan medis tahun kedua dalam kursus fisika radiasi pengantar, seluruh 29 setuju bahwa gerakan itu membantu mereka "merasakan" apa itu panjang gelombang (rata-rata 4.52), kendali amplitudo mendapat skor tertinggi (4.59), 93% merasa mengendalikan gelombang di udara itu natural, dan 86% melaporkan merasa lebih terlibat dan fokus daripada dalam pembelajaran biasa. Namun buktinya hanya persepsi, satu kelas, dan tanpa kelompok pembanding — jadi bacaan jujurnya adalah bahwa [[prompt-engineering]] telah menghapus hambatan produksi, yang membuat pertanyaan mendasar tentang penubuhan menjadi *dapat diuji*, bukan bahwa pertanyaan itu telah terjawab.

## AI di dalam lingkungan imersif

Arah kedua adalah ketika AI berhenti mengarang dan mulai mengajar di dalam headset, dan di situlah [[rag|pembumian pengambilan]] menjadi menanggung beban. Sebuah platform pelatihan imersif berbasis agen untuk brakiterapi laju dosis tinggi membangun kembaran digital suite perawatan — model pasien yang tepat secara anatomis, kateter, afterloader, aplikator — sehingga peserta pelatihan dapat melihat orientasi spasial aplikator relatif terhadap organ berisiko, tanpa ruang perisai, sumber radioaktif hidup, atau bahaya privasi pemeriksaan panggul fisik. Asisten sadar-pengetahuan yang berakar pada pedoman [[medical-education|klinis]] menyediakan bimbingan tanpa tangan melalui antarmuka suara tiga tingkat (mikrofon headset ke transkripsi dan analisis maksud di backend ke ucapan terspasial), yang menghapus ketergantungan pada pengendali selama manuver rumit. Secara teknis ia berhasil: latensi ujung-ke-ujung 3–5 detik pada 50 kali jalan Monte Carlo, recall konteks di atas 0.93 dan relevansi jawaban 0.87 pada 52 pasangan tanya-jawab yang ditulis pakar, dengan model penyematan medis meningkatkan kelengkapan jawaban.

Celahnya mendefinisikan garis depan pola ini saat ini. Evaluasinya adalah metrik objektif plus satu pengguna pakar domain, bukan pembelajar; tidak ada [[assessment]] otomatis atau [[adaptive-learning|umpan balik adaptif]]; dan asisten tidak dapat melampaui dokumen yang diberikan kepadanya, sehingga protokol khusus institusi dan skenario langka berada di luar kompetensinya. Dengan kata lain, kecerdasan tutoring di dalam lingkungan imersif masih sebagian besar berupa **bimbingan**, bukan pengukuran — dan arsitektur platform yang sama, dengan [[llm|inferensi model]] dialihkan ke backend GPU lokal, adalah yang membuat bimbingan tanpa tangan cukup cepat untuk dapat digunakan sama sekali.

Upaya terjelas hingga kini untuk pengukuran yang hilang itu datang dari studio desain vokasi, bukan dari lingkungan klinis. Dalam kursus desain interior 12 minggu, lingkungan VR (headset plus alat pemodelan 3D) dengan asisten berbasis LLM yang dirender sebagai manusia digital dibandingkan dengan pengajaran [[project-based-learning|berbasis proyek]] konvensional, dengan asisten diberi peran berbeda per fase — rekomendasi sumber daya dan dekomposisi tugas, pertanyaan berlapis dengan peta pengetahuan, simulasi efek desain dan deteksi cacat, lalu pencatatan wacana bagi guru ([[ai-ive-pbl-vocational-design-creativity-2026|Jin et al., 2026]]). Pada 63 respons valid, kondisi imersif-plus-agen menghasilkan kemampuan desain (η²p = .138) dan kemampuan kreatif (η²p = .111) yang secara signifikan lebih tinggi, [[student-engagement|keterlibatan]] kognitif (d = 0.90) dan perilaku (d = 0.75), serta motivasi (d = 0.74) dan kepuasan (d = 0.69) — dengan [[cognitive-offloading|beban kognitif]] yang dilaporkan *lebih rendah*, bukan lebih tinggi (d = −0.52), yang menurut penulis disebabkan asisten memangkas usaha pencarian dan integrasi lintas disiplin. Dua batas mencegah ini menyelesaikan pertanyaan: kebaruan ideasional dan keterlibatan [[affective-computing|afektif]] tidak berubah, dan setiap hasil adalah [[self-report-measures|laporan diri]], tanpa penilaian artefak atau log headset.

Kontras dengan penerapan pendidikan desain yang sebanding bersifat instruktif. Studio arsitektur yang menggunakan pipeline [[generative-ai|GenAI]] plus XR multi-pengguna menemukan [[self-efficacy]] desain yang *menurun* pada tim yang menggunakannya dan tidak ada keunggulan dalam penilaian panel tersamar. Perbedaan antara keduanya kurang terletak pada perangkat keras daripada pada orkestrasinya: studi vokasi itu menetapkan struktur fase, peran asisten di setiap fase, dan rubrik evaluasi sebelum intervensi, serta mengukur kemampuan produktif secara terpisah dari kebaruan ideasional.

Versi yang menghadap instruktur dari pola yang sama lebih muda dan lebih rapuh. [[luminote-llm-vr-stage-lighting-education-2026|Liang et al. (2026)]] membiarkan instruktur tata cahaya panggung mengucapkan maksudnya ke dalam adegan VR dengan penunjuk laser sebagai jangkar spasial, dan meminta [[llm]] mengubahnya menjadi anotasi spasial yang dapat ditinjau instruktur, demonstrasi pencahayaan yang dapat dijalankan dan penjelasan jargon sesuai permintaan. Pada 55 prompt dan 531 aksi yang dihasilkan, bantuan paling kuat pada tujuan ekspresif yang kurang terspesifikasi (212 dari 245 aksi efek visual diterapkan, 86.5%) dan paling lemah pada permintaan tingkat fixtur, di mana 26 dari 28 aksi yang ditolak berasal dari rujukan arah seperti "lampu kiri" yang diselesaikan model ke fixtur yang salah — pembumian dalam kerangka acuan spasial adegan, bukan kemampuan menjalankan, adalah kendala yang mengikat. Instruktur menggunakan saran sebagai [[human-in-the-loop-ai|proses penyempurnaan yang dapat dikendalikan]] alih-alih sebagai jawaban: 127 dari 147 aksi yang ditolak atau dimodifikasi (86.4%) diikuti prompt baru, dan hanya satu diikuti penyesuaian manual. Hasil studi yang paling berhati-hati adalah representasional — anotasi yang mengeksternalkan penalaran pakar tidak secara andal selaras dengan apa yang dipahami pemula, sehingga pengajaran AI imersif membawa masalah pembumian dari kasus tutoring di atas sekaligus masalah kedua, yaitu bahwa kompetensi instruktur dan pemahaman siswa bukanlah target yang sama.

## Apa yang ditunjukkan bukti

Bukti terkuat bagi VR/AR bersifat komparatif dan [[discipline-specific-aied|spesifik disiplin]]. Sebuah [[meta-analysis-systematic-review|meta-analisis]] atas 33 studi eksperimental dan kuasi-eksperimental (N = 3,181) tentang [[ai-technologies|teknologi]] baru dalam pengajaran [[english-education|bahasa Inggris sebagai bahasa asing]] menemukan efek keseluruhan kecil hingga sedang (g = 0.38) dan, di dalamnya, **efek terbesar untuk VR/AR**, dengan perolehan yang naik menurut jenjang pendidikan dan lebih menyukai keterampilan produktif (berbicara, menulis) daripada yang reseptif.

Bukti kontra sama informatifnya. Dalam meta-analisis pertama atas intervensi berbasis AI untuk [[special-education|siswa dengan disabilitas]] — 29 studi, 239 ukuran efek, efek keseluruhan sedang g = 0.588 — sistem VR cerdas menghasilkan g = 0.528, **tidak signifikan secara statistik**, sementara perangkat lunak komputer mencapai 0.959 dan robot 0.509. Bias publikasi hadir dan trim-and-fill menurunkan estimasi keseluruhan menjadi g = 0.269. Polanya bukan bahwa imersi gagal, melainkan bahwa efeknya kecil, heterogen, dan peka terhadap bagaimana intervensi tertentu dirancang dan dibandingkan.

Hasil negatif terjelas dalam basis pengetahuan datang dari penerapan studio alih-alih perbandingan modalitas: dalam studio desain arsitektur berisi 27 siswa, tim yang menggunakan pipeline GenAI plus XR multi-pengguna mengalami penurunan kepercayaan [[self-efficacy]] desain (β = −1.675) dan ekspektasi hasil (β = −2.088) yang lebih besar daripada tim yang bekerja dengan alur kerja kursus normal, tanpa perbedaan signifikan dalam penilaian panel pakar atas presentasi mereka ([[genai-xr-architectural-design-education-2026|Xiao et al., 2026]]). Penulis menjelaskannya sebagai komplementaritas yang bergantung fase dengan gesekan nyata — GenAI untuk mengeksternalkan gagasan tentatif, XR untuk evaluasi spasial dan skala — di samping masalah kendali, kesetiaan dimensi, atensi bersama dan kenyamanan gerak, sebuah pengingat bahwa perkakas imersif menambah biaya interaksi sekaligus kapabilitas.

## Kesetiaan, kehadiran dan kesenjangan keaslian

Ketika praktik imersif digunakan untuk keterampilan interpersonal dan prosedural, faktor pembatasnya bukan kesetiaan visual melainkan keaslian yang terasa. Tinjauan [[mixed-methods-research|metode campuran]] atas simulasi keperawatan bertenaga AI (19 studi, N = 1,253) menemukan AI efektif untuk pengetahuan kognitif dan hasil afektif tetapi tidak konsisten untuk keterampilan psikomotorik kompleks, dan menyebut alasannya: **kesenjangan keaslian** yang mencakup resonansi emosional, pengenalan isyarat nonverbal, dan dimensi taktil dan fisik [[summative-assessment|pemeriksaan]]. Rekomendasi praktisnya adalah **kontinum simulasi bertahap** — AI cocok untuk tujuan yang sangat terstruktur seperti komunikasi dasar dan pengambilan riwayat, sementara skenario psikomotorik lanjutan dan kompleks secara emosional menjadi ranah pasien terstandardisasi manusia dan penempatan klinis. Ketidakstabilan teknis memperberat masalah: keterlambatan pengenalan ucapan menyuntikkan [[cognitive-offloading|beban kognitif]] ekstraneus dan kecemasan, yang menjadikan stabilitas dan latensi sebagai tuas desain alih-alih detail implementasi.

Logika yang sama menjelaskan mengapa kehadiran tidak otomatis baik. Mabuk gerak, ketidakkonsistenan UI, biaya perangkat keras, dan akses perangkat yang tidak merata menentukan siapa yang dapat menggunakan lingkungan imersif sama sekali, itulah sebabnya pertanyaan [[equity-in-ai-education|keadilan]] modalitas ini bertaut ke [[accessibility]] dan [[inclusive-learning]] alih-alih berdiri terpisah darinya.

## Miskonsepsi Umum

- **"Merasakan fenomena berarti memahaminya."** Sebuah uji coba menemukan siswa melaporkan **merasakan** panjang gelombang dan amplitudo melalui gerakan tangan lebih kuat daripada melalui slider — tetapi **studi itu mengukur persepsi, bukan capaian**. Rasa yang dirasakan itulah affordance-nya, dan apakah ia menghasilkan pemahaman adalah uji yang terpisah.
- **"Skor keterpakaian yang tinggi memvalidasi alat VR pendidikan."** Dalam **sesi satu jam dengan 10 siswa** pada Meta Quest 3, studi itu melaporkan **keterpakaian yang baik pada System Usability Scale dan mabuk simulasi yang minimal**. Keterpakaian dan kenyamanan adalah prasyarat dan keduanya bukan ukuran pembelajaran.
- **"Kesepakatan siswa adalah bukti affordance."** Dengan **29 mahasiswa pencitraan medis tahun kedua**, seluruh 29 **setuju bahwa gerakan itu membantu mereka "merasakan" apa itu panjang gelombang (rata-rata 4.52)**. Kesepakatan bulat tentang sebuah rasa adalah laporan diri tentang pengalaman, dan klaim affordance membutuhkan hasil yang tidak bergantung pada penilaian siswa atas pemahamannya sendiri.

## Konsep terkait

- [[simulation]] — apa yang biasanya ditampilkan lingkungan imersif; modelnya, bukan modalitasnya
- [[embodied-learning]] — mekanisme yang seharusnya dimanfaatkan modalitas ini
- [[multimodal]] — gerakan, suara dan masukan spasial sebagai saluran belajar
- [[situated-learning]]
- [[experiential-learning]]
- [[game-based-learning]]
- [[professional-training]] — latar tempat praktik imersif paling mapan
- [[generative-ai]] — lapisan penulisan yang baru
- [[prompt-engineering]] — bagaimana non-pemrogram membangun dan menyempurnakan alat imersif
- [[agentic-ai]]
- [[pedagogical-agent]]
- [[rag]] — membumikan bimbingan di dalam headset
- [[intelligent-tutoring]]
- [[visualization]]
- [[medical-education]]
- [[accessibility]]
- [[inclusive-learning]]
- [[trust-calibration]] — kesetiaan, dan kesadaran siswa akan batasnya
- [[cognitive-offloading]] — latensi dan ketidakstabilan sebagai beban ekstraneus
- [[edtech-platform]] — sinkronisasi, latensi dan kehadiran multi-lokasi
- [[arts-design-and-media-education]]

## Artikel terkait

- [[genai-ar-physics-simulation-prompt-2026]] — prompt empat elemen yang menghasilkan simulasi fisika AR terkendali tangan; uji coba 29 siswa, bukti persepsi saja
- [[mixed-reality-engineering-learning]] — aplikasi realitas campuran vs perangkat fisik vs kelas dalam mekanika teknik; keterlibatan naik, visualisasi kompleks tetap sulit
- [[medgame-llm-medical-education-gamification]] — pelatihan medis tergamifikasi dengan AI
- [[tech-enhanced-tabletop-cybersecurity-education]] — skenario meja tertambah dalam pendidikan keamanan siber
- [[genai-xr-architectural-design-education-2026]] — AI Generatif dan Extended Reality dalam Pendidikan Desain Arsitektur Kolaboratif: Studi Studio Eksploratif
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: studio desain VR imersif dengan asisten pengajar berbasis LLM, dievaluasi terhadap PBL tradisional (Jin et al. 2026)
- [[luminote-llm-vr-stage-lighting-education-2026]] — LumiNote: pengajaran multimodal berbantuan LLM dalam pendidikan tata cahaya panggung VR, dan di mana pembumiannya gagal (Liang et al. 2026)
