---
title: "Pendidikan Membaca"
created: "2026-11-08T00:00:00-05:00"
updated: "2026-11-08T00:00:00-05:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding, motivation, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
assessment: [assessment, assessment-validity]
ethics: [neurodiversity, accessibility]
audience: [instructors, curriculum designers, researchers]
level: [primary education, k 12, higher ed]
connected_faqs: [ai-support-reading-comprehension]
confidence: medium
contributors: [editor]
translation_of: concepts/reading-education
source_updated: "2026-11-06T01:55:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pendidikan membaca** — pengajaran dan penilaian membaca: pemahaman, kelancaran, kosakata, dan motivasi membaca, bersama dengan desain teks pada tingkat kesulitan yang tepat bagi seorang pembaca. Dalam [[ai-education|AI dalam pendidikan]] literaturnya berjalan di sepanjang empat lini: alat yang mendukung pembaca saat mereka membaca, alat yang menilai membaca, alat yang menyesuaikan atau menghasilkan teks untuk tingkat pembaca, dan pertanyaan pengukuran di bawah ketiganya — apa yang membuat sebuah teks sulit, dan apakah **keterbacaan** menangkapnya. Halaman ini memperlakukan membaca sebagai domain tersendiri, berbeda dari [[language-learning|pembelajaran bahasa]] (memperoleh bahasa lain), [[english-education|pendidikan bahasa Inggris]] (EAP/EFL/ESL, yang membawa lini membaca-dan-keterbacaan sendiri) dan [[writing-education|pendidikan menulis]] (menyusun teks): halaman ini tentang perjumpaan pembaca dengan teks. Buktinya menjanjikan tetapi tidak merata — beberapa pilot, segelintir instrumen tervalidasi, dan sedikit perbandingan terkontrol. Di mana basis pengetahuan hanya memiliki studi kecil, halaman ini menyebutkannya.

## Pertanyaan untuk Dipertimbangkan

- Ketika sebuah alat AI membantu siswa memahami sebuah bagian bacaan, apa yang telah dipelajari siswa — isinya, sebuah strategi membaca, atau cara meminta jawaban kepada alat itu? Mana di antaranya yang ingin Anda nilai?
- Rumus keterbacaan menghitung kata dan panjang kalimat. Apa yang terlewat olehnya tentang pengalaman pembaca terhadap sebuah teks, dan apa yang akan Anda ukur sebagai gantinya?
- Jika AI dapat menulis ulang teks apa pun ke tingkat membaca siswa, apakah tingkatnya sendiri berhenti penting — atau apakah siswa tetap perlu menghadapi teks yang sulit pada akhirnya?
- Siapa yang diuntungkan ketika penilaian membaca dihasilkan secara otomatis: beban kerja guru, motivasi siswa, atau validitas skornya? Dapatkah ketiganya meningkat sekaligus?
- Kesulitan membaca juga merupakan isu aksesibilitas. Bagaimana alat untuk pembaca yang mengalami kesulitan, pembelajar multibahasa, dan siswa neurodivergen harus berbeda dari asisten membaca serbaguna?

## Pendahuluan

Pendidikan membaca dalam basis pengetahuan adalah lini yang masih muda. Sebagian besar studinya kecil dan baru, dan mereka mengelompok di sekitar teks alih-alih di sekitar pembaca: menghasilkan sebuah bagian bacaan, menyederhanakannya, memberi skornya, atau menilai kesulitannya. Pertanyaan yang mengikatnya adalah apakah mesin dapat mengetahui seberapa sulit sebuah teks bagi pembaca tertentu, dan apakah ia dapat bertindak atas penilaian itu tanpa menghilangkan kerja yang seharusnya dilakukan oleh membaca.

Empat lini pekerjaan muncul:

- **Mendukung pembaca** saat membaca, termasuk alat motivasi dan pendamping.
- **Menilai membaca**, melalui bagian bacaan yang dihasilkan, kuis, dan umpan balik AI atas pekerjaan membaca.
- **Menyesuaikan dan menghasilkan teks** pada tingkat target, dari penyederhanaan hingga materi yang terdiferensiasi.
- **Mengukur keterbacaan dan kesulitan teks**, lapisan yang diandalkan oleh tiga lini lainnya.

## Mendukung Pembaca Saat Mereka Membaca

Membaca dengan [[generative-ai|AI generatif]] menghasilkan hasil pemahaman yang tidak konsisten — keuntungan dalam satu studi, tidak ada [[transfer-of-learning|transfer pengetahuan]] dalam studi lain — dan instrumen AIR dibangun di atas hipotesis bahwa variansnya terletak pada mengapa pembaca menjangkau alat itu. Brann, Etgar dan Sidi mengembangkan dan memvalidasi skala 21 butir dengan empat motif: Task-oriented, Feel-good, Translation, dan Low-effort ([[air-scale-motivations-ai-reading-2026|Brann et al., 2026]]). Bukti mereka datang dari 425 mahasiswa pendidikan tinggi Inggris dalam sampel eksploratori dan 414 dalam sampel konfirmatori, dengan indeks kecocokan pada CFI .95 dan RMSEA .056. Perbedaan itu penting bagi praktik: pembaca yang menggunakan alat untuk menyelesaikan sebuah tugas berada dalam postur yang berbeda dari yang menggunakannya untuk menghindari usaha, dan Low-effort adalah motif yang ditandai penulis sebagai yang perlu diwaspadai untuk pemrosesan dangkal.

Itu adalah hasil pengukuran, bukan studi hasil, dan halaman ini menjaga perbedaan itu. Yang belum dimuat basis pengetahuan adalah uji terkontrol atas pendamping membaca yang menunjukkan keuntungan pemahaman yang tahan lama.

## Menilai Membaca

Penilaian membaca adalah tempat AI paling sering muncul sebagai perangkat penghemat kerja. Studi kasus praktisi Almirabi membangun AI-Mediated Motivational Reading Assessment di sekitar enam kuis pilihan ganda dengan 53 mahasiswa sarjana EFL dengan L1 Arab, bergerak dari bagian bacaan buku teks ke bagian bacaan yang dihasilkan AI, dari penyampaian daring tanpa pengawasan ke kertas dengan pengawasan ([[almirabi-ai-reading-assessment-motivation-2026|Almirabi, 2026]]). Skor naik dari 69.4% pada kuis buku teks menjadi rata-rata siklus 76.5%, dengan agregat AI 4.2 poin di atas kuis buku teks setelah kuis tanpa pengawasan dikecualikan. Penulisnya eksplisit bahwa sumber bagian bacaan, penyampaian, pengawasan, dan urutan tidak diisolasi dan bahwa [[motivation|motivasi]] tidak pernah diukur, sehingga datanya konsisten dengan manfaat motivasional alih-alih bukti adanya manfaat itu.

Studi kedua bergerak ke arah lain, memperlakukan umpan balik AI sebagai proses yang berpusat pada siswa alih-alih kemudahan pemberian skor. Dalam kuasi-eksperimen dua bulan dengan 200 siswa kelas tujuh di Shenzhen, [[feedback|umpan balik]] yang didukung ChatGPT atas membaca bahasa Mandarin menghasilkan keuntungan 30.40 poin pada ukuran umpan balik dan 17.95 pada orientasi umpan balik, berbanding penurunan di kelas umpan balik konvensional ([[chatgpt-feedback-orientation-chinese-reading-2026|Chen et al., 2026]]). Mekanisme yang diklaim adalah [[feedback-literacy|literasi umpan balik]], bukan pemahaman, dan pertanyaan [[assessment|penilaian]] — apakah skor berarti hal yang sama di seluruh kondisi — dibiarkan terbuka.

## Keterbacaan: Apa yang Membuat Sebuah Teks Sulit

Keterbacaan adalah pengukuran tertua di area ini dan yang paling diguncang AI. Skor Flesch–Kincaid atau Lexile memperkirakan kesulitan dari fitur permukaan, terutama panjang kata dan kalimat. CLARA dibangun di atas keberatan bahwa dua cerita dengan skor yang sama dapat menuntut kerja kognitif, linguistik, dan sosial-emosional yang berbeda: taksonomi perkembangan 122 labelnya mencapai akurasi tumpang tindih 0.904 terhadap referensi usia penerbit dan kesepakatan 0.81 dengan peringkat pendidik tersamar, berbanding 0.603 untuk formula FKGL ([[clara-developmental-appropriateness-children-stories-2026|Yin et al., 2026]]). Masalah [[assessment-validity|validitas]] adalah intinya — sebuah formula dapat andal dan tetap mengukur hal yang salah.

Dua studi lebih lanjut melebarkan celahnya. Bird memadukan klasifikasi transformer dengan fitur linguistik komputasional untuk menempatkan sastra Inggris pada Key Stage Inggris, mencapai F1 0.996 dan mengemas hasilnya sebagai alat bagi guru ([[bird-multimodal-educational-literature-2026|Bird, 2026]]). Clark et al. turun sepenuhnya di bawah permukaan, mengukur konstruksi dengan biaya pemrosesan yang diketahui — n-gram berfrekuensi rendah, dependensi panjang, kata benda bertumpuk, verba denominal, subjek tak bernyawa, relatif objek tereduksi — dan menemukan bahwa model terbaru terlalu sering menggunakannya relatif terhadap parafrase pemelihara makna mereka sendiri dan terhadap garis dasar manusia ([[clark-ai-generated-language-readability-2026|Clark et al., 2026]]). Keterbacaan, menurut bukti ini, adalah sifat dari tuntutan pemrosesan teks dan siapa yang menghasilkannya, bukan hanya statistik panjangnya.

Konsekuensi praktisnya adalah bahwa skor tingkat kelas merupakan jaminan yang lemah tentang teks apa pun, dan jaminan yang sangat lemah tentang teks yang ditulis AI.

Persepsi audiens target kini dapat diukur secara langsung. [[thome-perceived-text-complexity-student-profiles-2025|Thome et al., 2025]] mengumpulkan kumpulan data 3,954 anotasi dari 193 siswa sekolah menengah Jerman yang menilai kalimat dari panduan studi bimbingan karier dan Wikipedia, dan menemukan bahwa pembaca tidak setuju dengan formula itu: 72.8% anotasi sangat mudah atau mudah meskipun skor Flesch-Reading-Ease korpusnya rendah. Analisis SHAP atas model berbasis profil menunjukkan sifat pembaca yang mendorong persepsi itu — bahasa yang digunakan di rumah adalah fitur orang yang paling berpengaruh (0.09), di depan gender (0.08) dan perkiraan kemampuan bahasa Jerman sendiri (0.07) — sehingga skor tingkat kelas tidak hanya melewatkan tuntutan pemrosesan teks tetapi juga pengalaman membaca siapa yang diukurnya.

## Menyesuaikan dan Menghasilkan Teks

Kelompok studi terbesar menghasilkan atau menulis ulang teks untuk seorang pembaca. Tiga pendekatan berbeda dalam apa yang mereka kendalikan:

- **Generasi terkontrol tingkat.** Menyempurnakan tiga model 8B pada kurikulum membaca anak yang dirancang ahli dan cerita dari GPT-4o serta Llama 3.3 70B mengungguli kedua model zero-shot yang lebih besar pada metrik terkait kesulitan, dengan masalah keamanan yang dapat diabaikan ([[llm-children-reading-story-generation|Li et al., 2026]]).
- **Materi terdiferensiasi.** Alur kerja GenAI dengan prompt peran untuk materi membaca [[english-education|EAP]] meningkatkan hasil terutama dengan menambahkan lapisan dukungan spesifik kemahiran — glosarium, penguraian kalimat, petunjuk retoris, prompt kritis — alih-alih dengan mengubah kompleksitas tingkat bagian bacaan, dengan efek terbesar di antara pembelajar berkemahiran tinggi (d = 1.40) ([[genai-differentiated-eap-reading-materials-2026|Gao, 2026]]).
- **Bacaan mata kuliah yang disesuaikan.** Sebuah mata kuliah pascasarjana mengganti buku teksnya dengan bacaan sesuai permintaan yang disesuaikan dengan minat dan tingkat pemahaman; 24 siswa menilainya berguna dan 75% setuju bahwa mereka belajar lebih banyak, sementara analisis artefaknya menemukan keterlacakan yang hilang dan sitasi yang tidak konsisten ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]).

Penyederhanaan adalah varian keempat, dan titik hambatnya adalah evaluasi alih-alih generasi. MuTSE memasangkan alur generasi prompt-per-model dengan mesin penyelarasan semantik berjenjang sehingga penyederhanaan dapat dibandingkan dan diberi skor pada kriteria yang bermakna secara pedagogis alih-alih satu angka keterbacaan ([[text-simplification-its|Roscan et al., 2026]]).

## Pembaca, Antarmuka, dan Akses

Membaca juga merupakan pertanyaan tentang akses. AIRRI merender materi tugas sebagai gambar yang diperturbasi untuk mengalahkan alur tangkapan layar-ke-LLM, dan penulisnya melaporkan biaya keterbacaannya dengan jujur: overlay garis dinilai terbaca oleh keempat ahli desain dan tipografi yang diwawancarai, sementara galat ekstraksi mencapai 100% ([[airri-machine-resistant-reading-interface-2026|Airri et al., 2026]]). Pertukaran antara keterbacaan mesin dan keterbacaan manusia adalah keputusan desain dengan harga aksesibilitas.

Bagi pembelajar dengan disleksia, tinjauan terpandu PRISMA atas 72 studi dari 2018 hingga 2024 menemukan AI digunakan untuk deteksi, [[assistive-technology|dukungan bantu]], dan [[personalized-learning|pembelajaran yang dipersonalisasi]], tetapi dengan basis bukti yang terfragmentasi dan sedikit validasi eksperimental; AI generatif sangat sedikit terwakili ([[dabaghi-ai-dyslexia-education-review-2026|Dabaghi et al., 2026]]). Kesulitan membaca adalah tempat [[neurodiversity|neurodiversitas]] dan [[accessibility|aksesibilitas]] bertemu agenda membaca umum, dan halaman ini tidak memperlakukannya sebagai topik terpisah.

## Apa yang Ditunjukkan dan Tidak Ditunjukkan Bukti

Lininya kaya pengukuran dan miskin hasil. Ada instrumen tervalidasi (AIR), model kesulitan tervalidasi (CLARA, Bird), dan seperangkat alat generasi serta penyederhanaan yang tumbuh. Ada sangat sedikit studi terkontrol yang menghubungkan intervensi membaca dengan keuntungan pemahaman, dan beberapa studi penilaian mencampuradukkan sumber bagian bacaan dengan penyampaian atau pengawasan. Ukuran sampelnya kecil: 53 siswa dalam kasus penilaian membaca, 24 dalam studi bacaan yang disesuaikan, 200 siswa kelas tujuh dalam kuasi-eksperimen terbesar. Basis pengetahuan ini harus dibaca sebagai mendokumentasikan ruang desain, bukan efek yang telah mapan.

## Miskonsepsi Umum

- **"Skor keterbacaan memberi tahu Anda apakah sebuah teks cocok."** Skor mengukur fitur permukaan; perbandingan CLARA dengan FKGL dan fitur pemrosesan Clark et al. keduanya menunjukkan berapa banyak kesulitan yang ditinggalkannya.
- **"Teks yang dihasilkan AI lebih mudah karena dihasilkan untuk suatu tingkat."** Bukti berjalan sebaliknya untuk keluaran model: model terdepan terlalu sering menggunakan konstruksi yang terkait dengan biaya pemahaman.
- **"Membaca dengan AI adalah satu perilaku."** Skala AIR menemukan empat motif yang berbeda, dan motif-motif itu memprediksi jenis penggunaan yang berbeda.
- **"Jika AI dapat menulis ulang teksnya, tingkat membaca tidak lagi penting."** Diferensiasi lebih banyak mengubah dukungan di sekitar sebuah bagian bacaan daripada kompleksitas struktural bagian bacaan itu, yang merupakan intervensi berbeda dari menurunkan tingkatnya.

## Konsep terkait

- [[ai-education]] — payung tempat domain ini berada
- [[language-learning]] — membaca L2 tumpang tindih, tetapi akuisisi adalah objeknya di sana
- [[writing-education]] — sisi menyusun dari literasi
- [[english-education]] — membaca dan keterbacaan EAP/EFL/ESL
- [[educational-nlp]] — lapisan pengukuran teks yang menjadi dasar keterbacaan
- [[assessment]] — penilaian membaca dan validitas skor
- [[motivation]] — mengapa pembaca menggunakan AI, dan apa dampaknya pada pemrosesan
- [[scaffolding]] — lapisan dukungan dalam materi membaca terdiferensiasi
- [[neurodiversity]] — disleksia dan kesulitan membaca
- [[accessibility]] — teks yang terbaca manusia versus terbaca mesin
- [[generative-ai]] — teknologi di balik teks yang dihasilkan dan disesuaikan

## Artikel terkait

- [[air-scale-motivations-ai-reading-2026]] — skala motif tervalidasi untuk membaca dengan GenAI
- [[almirabi-ai-reading-assessment-motivation-2026]] — penilaian membaca yang dimediasi AI di kelas EFL
- [[genai-differentiated-eap-reading-materials-2026]] — materi membaca EAP terdiferensiasi
- [[llm-children-reading-story-generation]] — cerita membaca anak yang terkontrol tingkat
- [[text-simplification-its]] — mengevaluasi penyederhanaan teks untuk tutoring
- [[clara-developmental-appropriateness-children-stories-2026]] — kesulitan perkembangan di luar rumus keterbacaan
- [[bird-multimodal-educational-literature-2026]] — mengklasifikasikan sastra menurut Key Stage
- [[clark-ai-generated-language-readability-2026]] — mengapa bahasa yang dihasilkan AI lebih sulit dibaca
- [[sidorkin-ai-generated-course-readings-2026]] — bacaan mata kuliah yang dihasilkan AI dan disesuaikan
- [[airri-machine-resistant-reading-interface-2026]] — antarmuka membaca yang tahan mesin dan biaya keterbacaannya
- [[chatgpt-feedback-orientation-chinese-reading-2026]] — umpan balik ChatGPT dalam membaca di sekolah menengah
- [[dabaghi-ai-dyslexia-education-review-2026]] — AI untuk pembelajar dengan disleksia
