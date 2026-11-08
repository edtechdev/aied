---
title: "Pembelajaran Berbasis Kasus"
created: "2026-11-08T00:00:00-05:00"
updated: "2026-11-08T00:00:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [problem-based-learning, productive-failure]
technology: [generative-ai, simulation, intelligent-tutoring]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
contributors: [editor]
translation_of: concepts/case-based-learning
source_updated: "2026-11-08T12:23:59-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Sintesis:** Pembelajaran berbasis kasus mengajar melalui kasus-kasus tertentu: presentasi pasien, sengketa hukum, keputusan bisnis, episode kelas, atau sepasang contoh yang kontras. Kasus memasok konteks, fakta, dan ambiguitas; instruktur merancang pertanyaan dan diskusi yang mengubahnya menjadi pembelajaran. Pendekatan ini adalah pedagogi khas dalam pendidikan hukum dan bisnis, di mana metode kasus dan pertanyaan Sokratik telah lama mengorganisasi kelas, dan dalam pendidikan profesi kesehatan, di mana kasus klinis dan pasien tersimulasi menyediakan latihan terkendali. Mekanisme belajarnya tumpang tindih dengan [[problem-based-learning]] dan [[productive-failure]], tetapi keduanya tidak sama: kasus biasanya merupakan narasi terbatas dengan ruang masalah yang dirancang, sementara pembelajaran berbasis masalah dimulai dari masalah tak terstruktur yang diselidiki siswa. Bukti AI yang baru menjanjikan tetapi sempit. Studi kelayakan perioperatif dengan lima kasus menemukan bahwa LLM yang berlandaskan konteks menjawab 99.3% (543/547) pertanyaan peserta pelatihan secara tepat dan tidak menghasilkan konten yang dikarang. Studi kelayakan keperawatan menemukan bahwa ChatGPT memangkas waktu pembuatan kasus dari 106 menjadi 71 menit tanpa perubahan kualitas diskusi yang terukur. Meta-analisis atas enam uji acak menemukan bahwa pembelajaran berbasis masalah dan kasus yang diperkuat AI meningkatkan pengetahuan dan kepuasan, tetapi hanya dua uji yang menguji pembelajaran berbasis kasus dan tinjauan itu tidak pernah menganalisis formatnya secara terpisah. Korpus masih belum memiliki studi yang mengisolasi kualitas kasus, fasilitasi diskusi, dan hasil belajar dalam satu rancangan yang sama.

## Pertanyaan yang Perlu Dipertimbangkan

- Apa yang membuat sebuah kasus menjadi kasus, bukan soal cerita yang panjang atau kisah dengan kuis yang ditempelkan?
- Bagaimana pembelajaran berbasis kasus berbeda dari pembelajaran berbasis masalah, dan mengapa perbedaan itu penting bagi cara AI seharusnya digunakan?
- Bagian mana dari diskusi kasus yang harus direncanakan sebelumnya, dan bagian mana yang harus diserahkan kepada pertimbangan langsung instruktur?
- Ketika AI menghasilkan sebuah kasus, apa yang harus diperiksa sebelum siswa melihatnya? Ketika siswa mendiskusikan sebuah kasus dengan tutor AI, apa yang harus dilindungi?
- Mengapa kasus begitu lazim dalam pendidikan hukum dan bisnis, dan apa yang akan hilang dari disiplin itu jika kasus digantikan oleh ringkasan atau simulasi?
- Bukti apa yang akan menunjukkan bahwa pengajaran berbasis kasus berhasil, bukan sekadar bahwa siswa menikmati kasusnya atau menilai diskusinya tinggi?

## Pendahuluan

Kasus adalah suatu partikular yang berbatas. Kasus memberi pembelajar sebuah situasi dengan pelaku, fakta, kendala, dan biasanya sebuah keputusan atau diagnosis yang harus dicapai. Kasus tidak membawa pelajarannya sendiri. Pelajaran datang dari pertanyaan yang diajukan instruktur, perbandingan yang dibuat siswa, dan penalaran yang mereka eksternalisasikan dalam diskusi. Itulah sebabnya pengajaran berbasis kasus adalah praktik desain, bukan sekadar genre bahan bacaan.

Istilah ini mencakup satu keluarga teknik. **Pembelajaran berbasis kasus** biasanya merujuk pada kasus terstruktur yang digunakan untuk menerapkan pengetahuan dan mengembangkan penalaran klinis atau profesional. **Metode kasus** adalah tradisi hukum dan bisnis dalam mengajar melalui putusan banding atau situasi manajerial, sering kali dengan pertanyaan Sokratik. **Studi kasus** dapat berarti kasus pengajaran, tetapi frasa yang sama juga menamai sebuah rancangan penelitian; studi kasus tentang sebuah sekolah bukanlah pelajaran berbasis kasus. **Kasus kontras** mempertajam persepsi dengan meminta pembelajar membandingkan dua contoh atau lebih yang berbeda pada fitur yang ingin diperhatikan instruktur. **Diskusi kasus** adalah lapisan fasilitasi yang mengubah kasus tertulis menjadi penalaran kolektif.

Teknik-teknik ini tumpang tindih dengan [[problem-based-learning]], [[inquiry-based-learning]], [[simulation]], dan [[productive-failure]], dan batasannya tidak selalu bersih dalam praktik. Pembedaan yang dipertahankan halaman ini bersifat fungsional: rancangan berbasis kasus dimulai dari kasus yang telah dipilih atau ditulis untuk tujuan pengajaran, dan instruktur menggunakannya untuk membuat cara penalaran tertentu menjadi terlihat.

## Apa yang dihitung sebagai pembelajaran berbasis kasus

Pembedaan pertama adalah dari pembelajaran berbasis masalah. PBL dimulai dari masalah tak terstruktur dan meminta siswa mengidentifikasi apa yang perlu mereka pelajari, menelitinya, dan kembali dengan sebuah solusi. Masalahnya bisa berupa kasus, tetapi ciri penentunya adalah inkuiri yang diarahkan siswa. Pembelajaran berbasis kasus lebih sering dimulai dengan kasus yang telah disiapkan dan seperangkat tujuan pembelajaran yang terdefinisi; instruktur dapat memimpin analisis, menetapkan peran, atau menggunakan kasus untuk mengilustrasikan sebuah keputusan. PBL dan CBL berbagi fasilitasi dan konteks, tetapi keduanya mengalokasikan kendali secara berbeda. Itu penting bagi AI: AI yang menghasilkan sebuah kasus mendukung rancangan CBL, sedangkan AI yang menutori siswa melalui masalah terbuka lebih dekat ke PBL.

Pembedaan kedua adalah dari studi kasus penelitian. Studi kasus kualitatif adalah metode untuk mempelajari sebuah sistem yang berbatas. Kasus pengajaran adalah artefak yang dirancang. Kata yang sama muncul di keduanya, dan korpus memuat banyak artikel yang menggunakan studi kasus sebagai metode penelitian tanpa mengajar melalui kasus. Halaman konsep harus menjaga makna pengajaran tetap terpisah atau jumlah buktinya akan menggelembung.

Pembedaan ketiga adalah di antara format kasus. Kasus naratif penuh dapat mencapai beberapa halaman dan menuntut persiapan yang besar. Vignette pendek dapat masuk ke satu kelas atau satu penilaian. Seperangkat kasus kontras sengaja memasangkan contoh-contoh yang berbeda pada fitur target. Kasus tersimulasi dapat bersifat interaktif, dengan pasien terstandar, chatbot, atau lingkungan virtual yang merespons pembelajar. Format mengubah kerja kognitif: kasus panjang menuntut sintesis dan prioritisasi, vignette menguji pengenalan, kasus kontras mendukung diskriminasi, dan simulasi menambahkan pengambilan keputusan waktu nyata.

## Mengapa kasus berhasil

Kasus adalah jembatan dari pengetahuan abstrak ke pertimbangan tersituasi. Kasus memberi pembelajar sebuah konteks di mana konsep memiliki konsekuensi, dan membuat pengetahuan awal terlihat: siswa harus memperhatikan apa yang ditawarkan kasus, apa yang dibiarkannya ambigu, dan prinsip mana yang berlaku. Dalam pendidikan profesional, itulah intinya. Pendidikan hukum menggunakan kasus dan dialog Sokratik untuk mengajar siswa membaca otoritas, membedakan holding, dan bernalar dari preseden. Pendidikan bisnis menggunakan kasus untuk melatih analisis di bawah ketidakpastian, sering kali dengan keputusan yang tidak memiliki satu jawaban benar. Pendidikan profesi kesehatan menggunakan kasus klinis untuk melatih diagnosis, penatalaksanaan, dan komunikasi sebelum pasien nyata berisiko.

Mekanismenya bukan sekadar "contoh dunia nyata." Sebuah kasus dapat realistis tetapi tetap mengajarkan sangat sedikit jika diskusinya tidak pernah meminta siswa membedakan, membenarkan, atau membandingkan. Rancangan yang lebih kuat menggunakan kasus untuk menciptakan ruang masalah sebelum penjelasan, yang merupakan kaitan ke [[productive-failure]]: siswa mencoba sebuah kasus, menemui batas model mereka saat ini, lalu menerima instruksi yang menjawab kesenjangan itu. Kasus kontras mempertajamnya lebih jauh. Ketika dua kasus berbeda pada fitur yang penting, pembelajar dapat melihat fitur itu alih-alih kisah permukaannya. Studi yang ada tentang kursus GenAI tiga minggu untuk 78 siswa persiapan etnis minoritas menggunakan pemodelan guru dengan kasus kontras untuk menggerakkan siswa dari penyalinan yang efisien menuju ko-kreasi kritis ([[scaffolding-critical-engagement-genai-minority-students]]). Itu adalah rancangan perbandingan kasus, bukan uji pembelajaran berbasis kasus dalam hukum atau bisnis, tetapi itu menunjukkan mekanismenya di kelas nyata.

Kasus juga membawa dimensi sosial. Diskusi kasus membuat penalaran menjadi publik: siswa mengusulkan tafsiran, mendengar alternatif, dan merevisi. Pertanyaan instruktur melakukan kerja yang tidak dapat dilakukan buku teks. Itulah sebabnya mengganti kasus dengan ringkasan atau kuliah dapat mempertahankan konten sambil kehilangan pembelajarannya. Itu juga sebabnya AI yang menjawab pertanyaan kasus untuk siswa dapat memutus diskusi bahkan ketika jawabannya akurat.

## Apa yang diubah AI

Bukti baru mengelompok di sekitar tiga penggunaan: menghasilkan kasus, menyampaikan kasus, dan menyintesis bukti.

**Menghasilkan kasus.** [[higashitsuji-chatgpt-case-creation-nursing-2025|Higashitsuji, Otsuka dan Watanabe (2025)]] membandingkan pembuatan kasus manual dan berbantuan ChatGPT oleh delapan dosen keperawatan. Waktu pembuatan median turun dari 106.0 menjadi 71.0 menit, sebuah perbedaan yang signifikan secara statistik, sementara beban yang dirasakan dan kualitas diskusi tidak menunjukkan perubahan signifikan. Studi ini adalah uji kelayakan dengan sembilan siswa dan crossover nonacak tersamar, sehingga mendukung penghematan waktu yang plausibel, bukan kesetaraan. Pertanyaan desain yang penting bukan apakah sebuah model dapat menghasilkan sebuah kasus. Pertanyaannya adalah apakah kasus yang dihasilkan mempertahankan penalaran klinis yang dimaksudkan instruktur, dan apakah ada yang memeriksanya sebelum siswa menggunakannya.

**Menyampaikan kasus.** [[trewren-ai-perioperative-case-based-learning-2026|Trewren dan rekan (2026)]] membangun lima kasus perioperatif, memuatnya ke platform LLM khusus, dan meminta empat peserta pelatihan anestesi menginterogasi kasus-kasus itu sebagai asesmen pasien. Di antara 547 pasangan pertanyaan dan jawaban, 99.3% (543/547) dinilai tepat dan tidak ada yang dikarang; empat kegagalan adalah penolakan melaporkan informasi yang dikandung kasus. Ini adalah bukti bahwa model yang berlandaskan konteks dapat menjaga sebuah kasus tetap koheren di bawah pertanyaan. Ini bukan bukti bahwa peserta pelatihan belajar lebih banyak daripada yang akan mereka peroleh dari diskusi kasus konvensional, dan studi itu tidak membandingkan keduanya.

**Menyintesis bukti.** [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025|Wei dan rekan (2025)]] meninjau enam uji terkendali acak tentang PBL dan CBL yang diperkuat AI dalam pendidikan kedokteran dan kedokteran gigi. Empat uji masuk ke meta-analisis pengetahuan, yang melaporkan peningkatan 46% dengan heterogenitas rendah; tiga menghasilkan skor kepuasan gabungan 0.7. Penalaran klinis tidak dapat digabungkan karena uji-uji menggunakan instrumen yang berbeda. Hanya dua dari enam uji yang menguji CBL, dan tinjauan itu tidak menganalisis PBL dan CBL secara terpisah. Hasilnya menggembirakan bagi rancangan kasus dan masalah yang didukung AI, tetapi tidak memberi tahu kita fitur kasus mana yang menghasilkan keuntungan itu.

Tinjauan-tinjauan di sekitarnya menambah konteks tanpa menambah estimasi CBL yang bersih. [[hardie-genai-nursing-scoping-review-2026|Hardie dan rekan (2026)]] menemukan pembelajaran berbasis kasus di dalam tema simulasi sebuah tinjauan keperawatan 103 studi, bukan sebagai salah satu dari empat kategori yang dinamainya. [[lorteau-sarro-ai-legal-education-2025|Lorteau dan Sarro (2025)]] menggambarkan AI sebagai pelengkap pengajaran Sokratik dan simulasi hukum interaktif, tetapi tinjauan mereka atas 82 karya tidak menganalisis metode kasus sebagai intervensi. [[csaszar-ai-management-education-2026|Csaszar dan rekan (2026)]] secara eksplisit tidak membahas pengajaran berbasis kasus; satu-satunya rujukan kasus mereka bersifat insidental, dan mereka mencatat bahwa beberapa studi kasus telah digantikan oleh simulasi bisnis. Pendidikan bisnis dan hukum karena itu memasok rasional institusional bagi kasus, bukan bukti hasil. Rancangan serupa kasus di sekitarnya mencakup [[ai-standardized-patient-scaffolding-medical-2026|pasien terstandar berperancah LLM]] dan [[genai-medical-education-transformation-review-2026|tinjauan pendidikan kedokteran]] yang menghitung pembelajaran berbasis kasus di antara kategori aplikasinya.

## Merancang dan memfasilitasi kasus dengan AI

- **Tulis kasus di sekitar sebuah keputusan atau diskriminasi.** Kasus tanpa pilihan yang berkonsekuensi menjadi bacaan. Tentukan apa yang harus siswa perhatikan, putuskan, atau benarkan, lalu bangun fakta dan ambiguitasnya di sekitar target itu.
- **Periksa kasus yang dihasilkan terhadap penalaran yang dimaksud.** AI dapat menghasilkan detail klinis atau hukum yang lancar tetapi secara struktural salah. Mintalah ahli subjek meninjau fakta, kelalaian, dan jalur penalaran sebelum kasus mencapai siswa.
- **Pertahankan ambiguitas kasus.** Kasus hasil generasi yang menyelesaikan setiap ketegangan mengajarkan pengenalan, bukan pertimbangan. Pertahankan informasi yang tidak lengkap dan tafsiran yang bersaing yang membuat diskusi diperlukan.
- **Gunakan kasus kontras ketika targetnya adalah diskriminasi.** Pasangkan kasus yang berbeda pada fitur yang harus siswa perhatikan, dan minta mereka menjelaskan perbedaannya alih-alih sekadar mengklasifikasikan masing-masing.
- **Lindungi diskusi dari penyampaian jawaban.** Jika tutor AI tersedia selama kerja kasus, batasi ia pada pertanyaan, petunjuk, atau permainan peran. AI yang memasok diagnosis atau kesimpulan hukum menghilangkan kerja kognitif yang menjadi alasan kasus itu ada.
- **Nilai penalarannya, bukan ingatan tentang kasusnya.** Mintalah pembenaran, diagnosis banding, perbandingan, atau memo keputusan. Kuis tentang fakta kasus dapat dilulusi sementara penalaran yang mendasarinya tetap tidak ada.
- **Perlakukan fasilitasi instruktur sebagai bagian dari desain.** Urutan pertanyaan, momen penjelasan, dan penanganan salah langkah bukan hiasan. Itu menentukan apakah kasus menjadi kegagalan yang produktif atau kegagalan yang membingungkan.

## Batas dan kesenjangan bukti

Buktinya tipis dengan cara yang spesifik. Studi perioperatif menguji apakah model yang berlandaskan konteks dapat menjawab pertanyaan tentang lima kasus, bukan apakah pengajaran berbasis kasus meningkatkan pembelajaran. Studi keperawatan menguji waktu pembuatan kasus dan kualitas diskusi dengan sembilan siswa. Meta-analisis menggabungkan enam uji, hanya dua di antaranya menguji CBL, dan hasil pengetahuannya mencampur PBL dan CBL. Tinjauan hukum dan bisnis menggambarkan penggunaan dan konteks institusional; mereka tidak mengisolasi efek metode kasus. Studi kasus kontras adalah evaluasi kursus, bukan perbandingan terkendali atas format kasus.

Ada juga risiko konseptual. Sebuah kasus dapat dikenang karena hidup dan mencolok, bukan karena menghasilkan pemahaman. Sebuah diskusi dapat terasa produktif karena siswa berbicara, bukan karena mereka bernalar. Bidang ini membutuhkan rancangan yang memisahkan kasus dari fasilitasi, format dari materi pelajaran, dan keterlibatan langsung dari transfer tertunda. Sampai saat itu, klaim yang jujur adalah bahwa kasus adalah pedagogi profesional yang mapan dengan dukungan AI yang plausibel, bukan bahwa kasus yang diperkuat AI memiliki keunggulan belajar yang terbukti.

## Miskonsepsi Umum

- **"Pembelajaran berbasis kasus hanyalah pembelajaran berbasis masalah dengan cerita."** PBL adalah inkuiri yang diarahkan siswa dari sebuah masalah tak terstruktur. CBL biasanya dimulai dengan kasus yang telah disiapkan dan target instruksional yang lebih terdefinisi.
- **"Kasus yang realistis mengajar dengan sendirinya."** Realisme memasok konteks. Pertanyaan, perbandingan, dan tugas pembenaran memasok pembelajarannya.
- **"Kasus yang dihasilkan AI siap pakai."** Kasus yang dihasilkan dapat lancar, plausibel, dan salah. Kasus itu perlu tinjauan ahli dan pemeriksaan atas penalaran yang diundangnya.
- **"Jika siswa menikmati diskusinya, kasusnya berhasil."** Keterlibatan bukan transfer. Hasilnya harus diukur pada tugas yang tidak dapat diselesaikan siswa sebelumnya.

## Konsep terkait

- [[problem-based-learning]]
- [[productive-failure]]
- [[inquiry-based-learning]]
- [[pedagogical-patterns]]
- [[simulation]]
- [[professional-training]]
- [[legal-education]]
- [[business-education]]
- [[medical-education]]
- [[nursing-education]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[assessment]]
- [[higher-ed]]

## Artikel terkait

- [[trewren-ai-perioperative-case-based-learning-2026]] — LLM yang berlandaskan konteks mempertahankan lima kasus perioperatif tanpa mengarang konten
- [[higashitsuji-chatgpt-case-creation-nursing-2025]] — ChatGPT memangkas waktu pembuatan kasus keperawatan tanpa perbedaan kualitas yang terukur
- [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025]] — Enam RCT PBL/CBL yang diperkuat AI; hanya dua yang menguji CBL
- [[scaffolding-critical-engagement-genai-minority-students]] — Pemodelan guru dengan kasus kontras dalam kursus GenAI
- [[ai-standardized-patient-scaffolding-medical-2026]] — Pembelajaran berbasis kasus di samping pasien virtual dan tersimulasi
- [[genai-medical-education-transformation-review-2026]] — Pembelajaran berbasis kasus dan penalaran klinis di antara kategori aplikasi tinjauan
- [[hardie-genai-nursing-scoping-review-2026]] — Pembelajaran berbasis kasus di dalam tema simulasi sebuah tinjauan keperawatan
- [[lorteau-sarro-ai-legal-education-2025]] — AI melengkapi pengajaran Sokratik dan simulasi hukum
- [[csaszar-ai-management-education-2026]] — Studi kasus dan simulasi pendidikan manajemen, tanpa analisis metode kasus
