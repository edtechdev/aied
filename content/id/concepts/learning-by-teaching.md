---
title: "Belajar dengan Mengajar"
created: "2026-08-14T10:45:34-04:00"
type: concept
pedagogy: [active-learning, learning-by-teaching, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring]
assessment: [feedback]
discipline: [cs education]
confidence: high
updated: "2026-11-04T02:28:53-05:00"
translation_of: "concepts/learning-by-teaching"
source_updated: "2026-10-25T22:50:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Belajar dengan mengajar (LbT)** — kerangka instruksional yang berlandaskan efek protégé, di mana siswa memperdalam pemahaman mereka dengan menjelaskan materi kepada teman sebaya, tutee, atau agen. Puluhan tahun penelitian tentang LbT dan tutor sebaya menunjukkan bahwa menjelaskan konsep, mengantisipasi kesalahpahaman, dan menanggapi pertanyaan memantapkan pemahaman serta mendukung transfer. Di era AI, **agen yang dapat diajar** — dan semakin sering **LLM yang dikonfigurasi sebagai tutee pemula** — mengoperasionalkan LbT dalam skala besar, memosisikan siswa sebagai instruktur yang harus menjelaskan, mengoreksi, dan mengisi celah.

## Pertanyaan untuk direnungkan

- Ingat kembali saat Anda benar-benar memahami sesuatu hanya setelah menjelaskannya kepada orang lain. Apa yang terjadi secara mental — dan mengapa Anda berpikir mengajar menghasilkan pemahaman yang lebih mendalam daripada belajar sendiri?
- Pandangan umum adalah bahwa mengajar adalah urusan para ahli, dan pemula tidak punya apa-apa untuk ditawarkan. Namun 'belajar dengan mengajar' bertumpu pada premis sebaliknya: bersiap untuk mengajar memaksa Anda menata pengetahuan dan menemukan celah Anda sendiri. Bagaimana itu membingkai ulang siapa yang memperoleh manfaat dari mengajar?
- Halaman ini membahas 'agen yang dapat diajar' — perangkat lunak yang diajari siswa sebagai bagian dari pembelajaran. Dengan LLM, Anda dapat mengonfigurasi chatbot sebagai tutee pemula yang bisa salah, yang mengajukan pertanyaan dan membuat kesalahan. Apa yang perlu Anda rancang ke dalam tutee semacam itu agar benar-benar meningkatkan pembelajaran, bukan sekadar mengobrol?
- Salah satu tantangan adalah 'merekayasa sifat mudah salah': model AI dilatih untuk memberi jawaban yang ahli dan fasih, yang merupakan kebalikan dari pemula yang berjuang yang dikehendaki paradigma belajar dengan mengajar. Mengapa tutee yang rentan salah bisa lebih efektif bagi pembelajaran daripada tutee yang benar?
- Agen yang dapat diajar berbasis ChatGPT meningkatkan pembelajaran, tetapi kecenderungannya menghasilkan kode yang benar membatasi latihan koreksi kesalahan. Bagaimana sebuah alat yang selalu memberi jawaban benar justru bisa merugikan siswa yang perlu berlatih mengenali dan memperbaiki kesalahan?
- Jika Anda merancang aktivitas belajar dengan mengajar untuk kelas Anda sendiri, apa yang akan membuat tugas mengajar itu cukup *bermakna* sehingga siswa berusaha sungguh-sungguh alih-alih menyalin-tempel jawaban?

## Pendahuluan

Belajar dengan mengajar adalah temuan, yang biasanya dilacak ke efek protégé, bahwa bersiap untuk mengajar — dan benar-benar menjelaskan kepada orang lain atau kepada agen yang dapat diajar — menghasilkan pemrosesan yang lebih mendalam daripada belajar sendiri. Tuntutan mengajar memaksa siswa menata pengetahuan, mengantisipasi [[misconceptions|kesalahpahaman]], dan menghasilkan penjelasan, yang menyingkap celah dalam pemahaman mereka sendiri dan memperkuat [[metacognition]]. AI masuk ke dalam gagasan ini dari dua arah: [[intelligent-tutoring|sistem tutor]] dan agen yang dapat diajar dapat berperan sebagai siswa, sementara literatur yang berkembang menanyakan apa yang terjadi pada pembelajaran ketika mesin, bukan siswa, yang menyediakan penjelasan ([[generative-ai]], [[cs-education]]).

## Efek protégé

Belajar dengan mengajar bertumpu pada temuan bahwa bersiap untuk mengajar dan benar-benar menjelaskan kepada orang lain menghasilkan pemrosesan yang lebih mendalam daripada belajar sendiri. Tuntutan mengajar — mengartikulasikan gagasan, mengantisipasi kesalahpahaman, dan menjawab pertanyaan — memaksa siswa menata pengetahuan, mengenali celah dalam pemahaman mereka sendiri, dan menghasilkan penjelasan yang mendukung retensi dan transfer. Manfaatnya paling terlihat dalam konteks [[collaborative-learning]] dan dalam domain yang terstruktur baik yang mendukung agen yang dapat diajar (misalnya Betty's Brain). Efek protégé menamai mekanismenya: siswa mengerahkan lebih banyak usaha dan merenung lebih mendalam ketika mereka merasa bertanggung jawab untuk mengajarkan sesuatu, sehingga mereka menjernihkan [[misconceptions]] dan mengisi celah melalui penjelasan dan [[metacognition]].

## Agen yang dapat diajar: dari berbasis aturan ke percakapan

**Agen yang dapat diajar** adalah sistem perangkat lunak yang melaluinya belajar dengan mengajar dioperasionalkan — seorang siswa mengajari sebuah sistem sebagai bagian dari belajarnya. Agen yang dapat diajar tradisional berbasis aturan atau berbasis pengambilan dan hanya dapat menanggapi perintah terbatas; keterbatasan utamanya adalah ketidakmampuan terlibat dalam dialog bahasa alami. [[llm|Model bahasa besar]] mengubah hal ini: mereka dapat secara fleksibel mengambil peran melalui [[prompt-engineering|perekayasaan prompt]] — termasuk peran "tutee" yang mengajukan pertanyaan atau membuat kesalahan — dan terlibat dalam dialog terbuka, sehingga memungkinkan LbT di domain yang kurang terstruktur (menulis, kosakata) daripada yang sebelumnya mungkin.

Basis bukti dalam basis pengetahuan menelusuri pergeseran ini ke **agen yang dapat diajar berbasis percakapan dan LLM**:

- **ChatGPT sebagai agen yang dapat diajar** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al.]]) mendukung LbT dalam pemrograman, meningkatkan perolehan pengetahuan, kemampuan pemrograman, dan [[self-regulated-learning|pembelajaran mandiri]] — meskipun kecenderungannya menghasilkan kode yang benar membatasi latihan koreksi kesalahan.
- **Explique dalam skala besar** ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al.]]) menerapkan agen yang dapat diajar berbasis AI (Algorithm Apprentice) kepada 546 siswa selama semester 11 minggu, dan menemukan bahwa dialog yang berorientasi penjelasan memprediksi lebih sedikit pengiriman kuis yang keliru, sementara penggunaan ulang konten eksternal memprediksi lebih banyak.
- **Pengajaran kosakata** ([[teaching-ai-vocabulary-lbt-llms-2026|Uchida et al.]]) menggunakan LLM sebagai siswa untuk menghasilkan pertanyaan dinamis, meningkatkan retensi pada 3 dan 7 hari.

## Merekayasa sifat mudah salah: LLM sebagai tutee pemula

Tantangan desain utama bagi agen yang dapat diajar berbasis LLM adalah bahwa LLM secara default dilatih untuk menghasilkan respons yang fasih dan setingkat ahli — kebalikan dari pemula yang rentan salah yang dikehendaki paradigma LbT. Menjadikan LLM tutee yang baik menuntut **merekayasa sifat mudah salah**:

- **Kesalahan yang dihasilkan dapat lolos sebagai autentik.** Dalam studi anotasi tersamar, para ahli salah mengklasifikasikan 164 dari 196 (83.7%) kiriman Java yang dihasilkan LLM sebagai tulisan manusia, sehingga tutee dapat menyediakan bug yang realistis untuk di-debug, bukan hanya kode yang benar ([[simulating-students-java-programming-errors-llms|Keramati et al. (2026)]]).

- **[[prompting-teachability-novice-personas-lbt-2026|Prompt untuk keterajaran]]** (Miller & Bosch) menemukan bahwa prompt berbasis batasan yang secara eksplisit memaksakan produksi kesalahan (misalnya, "jawab dengan salah" atau "buat 2–3 kesalahan") memunculkan perilaku seperti pemula jauh lebih andal daripada prompt berbasis persona, miskonsepsi, atau ketidakpastian.
- **[[socrates-students-instructors-llms-lbt-2025|Celah pengetahuan yang direkayasa]]** (Yang et al.) merancang masalah yang tidak dapat dipecahkan LLM tanpa pengetahuan yang hanya dimiliki siswa, sehingga mengajar menjadi keharusan dan menangkal ketergantungan pasif berlebihan pada penggunaan LLM sebagai tutor.
- **Batasan apprentice Explique** (Wang et al.) menginstruksikan tutee untuk (a) tetap menjadi pemula, (b) terus meminta klarifikasi sampai penjelasan siswa akurat, dan (c) tidak pernah mengungkap penjelasan target — serta untuk *menolak* siswa yang mencoba membalik peran dan meminta tutee menjelaskan balik.
- **Unlearning sebagai jalur tingkat bobot menuju sifat mudah salah.** Machine unlearning menekan 16 komponen pengetahuan yang ditargetkan pada Mistral-7B, menurunkan akurasi dari sekitar 0.75 pada rasio lupa 10% menjadi di bawah 0.5 pada 40%, sementara model dasar bertahan di sekitar 0.85. Pengetahuan yang ditekan kembali melalui pembelajaran ulang terawasi dan dialog yang dipandu pelatih, sehingga tingkat pengetahuan tutee adalah sebuah tombol, bukan asersi ([[simulating-novice-students-machine-unlearning-2026|Song, Guo & Lin, 2026]]).

## Bertanya, regulasi diri, dan pembelajaran aktif

Dua kegunaan lebih lanjut berulang di seluruh basis pengetahuan:

- **Pertanyaan mengidentifikasi celah pengetahuan.** Sistem LbT menggunakan pertanyaan yang dihasilkan siswa untuk menyingkap celah dan memperkuat pemahaman, dan [[teaching-ai-vocabulary-lbt-llms-2026|pertanyaan yang dihasilkan LLM]] menggantikan generator berbasis templat yang kaku.
- **Teach-back menyingkap apa yang terlewat oleh klarifikasi.** Dalam sistem tinjauan pascakuliah dengan 22 peserta, teach-back reflektif dari agen Peer secara konsisten menyingkap celah antara apa yang diyakini siswa telah mereka pahami dan apa yang dapat mereka artikulasikan, yang tidak terungkap oleh klarifikasi berbasis kuliah saja ([[knowloop-confusion-to-consolidation-2026|Fang & Reidsma (2026)]]).
- **LbT [[scaffolding|merancah]] [[regulation|regulasi]] diri.** Mengajar [[conversational-ai|agen percakapan]] menumbuhkan [[self-efficacy]] dan penerapan strategi pembelajaran mandiri, serta menghubungkan LbT dengan [[desirable-difficulties]] — tindakan menjelaskan dan mengoreksi yang penuh usaha itu sendiri adalah perjuangan produktif yang akan terhapus oleh penghilangan gesekan ala AI.
- **Yang memprediksi pembelajaran tutor adalah pembangunan pengetahuan, bukan pengetahuan awal.** Di antara 23 tutor sekolah menengah pertama, proporsi respons yang membangun pengetahuan alih-alih mengulanginya memprediksi skor pascates konseptual (β = .138, p < 0.05), sementara skor tes awal tidak memprediksi siapa yang menghasilkannya, dan tutor dengan pengetahuan awal rendah yang membangun pengetahuan berakhir setara dengan rekan-rekan mereka yang berpengetahuan awal tinggi ([[knowledge-building-tutor-learning-2026|Ameen et al., 2026]]).

## Mengapa ini penting dalam pendidikan AI

Belajar dengan mengajar adalah padanan konstruktif dan [[active-learning]] dari pola dominan LLM-sebagai-tutor. Jika tutor memberi jawaban (dan berisiko [[cognitive-offloading|Ketergantungan Berlebih]]), tatanan LbT menjadikan siswa sebagai guru, memaksakan penjelasan, deteksi celah, dan konstruksi pengetahuan. Ini memosisikan LbT sebagai strategi kunci untuk mengubah [[generative-ai|AI generatif]] dari tongkat penopang menjadi alat bagi pembelajaran yang lebih mendalam, dan menghubungkannya dengan [[desirable-difficulties]], [[active-learning]], serta [[constructivist]] [[pedagogy]].

## Menerapkan belajar dengan mengajar dalam praktik

### Pola desain untuk tutee AI

[[research-methods-aied|Riset]] di atas mengerucut pada beberapa pola yang dapat digunakan kembali untuk mengubah LLM yang secara default bersikap ahli menjadi tutee yang produktif:

- **Prompt pemula berbasis batasan (paling andal).** Alih-alih meminta model untuk "berpura-pura menjadi siswa yang bingung", paksakan secara eksplisit sifat mudah salah dan sebuah siklus mengajar, misalnya: *"Anda adalah siswa pemula yang sedang mempelajari [konsep]. Mintalah saya mengajarkannya kepada Anda. Ajukan pertanyaan klarifikasi dan sengaja buat 2–3 kesalahan selama percakapan kita. Jangan pernah menyatakan jawaban yang benar sendiri — tunggu saya menjelaskan, lalu katakan apakah penjelasan saya masuk akal."*
- **Pagar pengaman pengajaran terbalik.** Tambahkan aturan bahwa tutee harus *menolak* menjelaskan jawaban balik ketika siswa mencoba membalik peran: *"Jika saya meminta Anda menyelesaikan masalah atau menjelaskan konsepnya, ingatkan saya bahwa saya adalah gurunya dan minta saya menjelaskannya sebagai gantinya."* Explique menunjukkan bahwa penolakan inilah yang mempertahankan interaksi LbT.
- **Celah pengetahuan yang direkayasa.** Susun tugas sehingga model *tidak dapat* menjawab tanpa informasi yang hanya dipegang siswa — pengetahuan siswa menjadi benar-benar diperlukan, bukan opsional. Ini mengubah interaksi dari obrolan opsional menjadi pengajaran yang wajib.
- **Kriteria keberhasilan eksternal.** Beri pengajaran konsekuensi nyata — kuis penjaga gerbang yang hanya terbuka setelah siswa berhasil mengajar (Explique), atau platform penilai kode yang output agennya harus diloloskan siswa (Chen). Akuntabilitaslah yang mempertahankan usaha sungguh-sungguh dan mencegah seluruh latihan menjadi sekadar formalitas.

### Kiat untuk instruktur

- **Jadikan tugas mengajar bermakna, bukan kesibukan sia-sia.** Bukti terkuat untuk [[student-engagement|keterlibatan]] berasal dari aktivitas yang penting — Explique mengunci kuis bernilai di balik latihan mengajar; Chen mengaitkan output tutee dengan kelulusan platform penilai. Jika mengajar sepenuhnya opsional, siswa secara rasional akan melewati bagian yang sulit.
- **Beri siswa protokol mengajar, bukan sekadar jendela obrolan.** Rancah interaksi dengan struktur — "jelaskan konsepnya → beri contoh konkret → jawab pertanyaan tutee → periksa pemahaman" — sehingga dialog terbuka menjadi urutan mengajar yang disengaja alih-alih percakapan tanpa arah.
- **Tangani penumpahan konten secara langsung.** Explique menemukan bahwa penyalinan-tempel langsung konten eksternal naik dari di bawah 15% menjadi 30–35% interaksi pada akhir semester. Jelaskan kepada siswa mengapa menempel merusak tujuannya, dan pertimbangkan langkah akuntabilitas (misalnya, "jelaskan kesalahpahaman agen dengan kata-kata Anda sendiri").
- **Padukan LbT dengan latihan debugging.** Karena AI menulis kode yang benar, siswa dapat kehilangan latihan koreksi kesalahan. Secara sengaja mintalah tutee *salah mengimplementasikan* sesuatu, atau ikuti sesi mengajar dengan tugas pencarian bug, agar debugging tetap ada dalam siklus.
- **Perhatikan gradien usaha.** Perkirakan bahwa kebaruan akan memudar; rencanakan untuk memvariasikan konsep target, menambah tantangan, atau merotasi siswa mana yang mengambil [[teacher-role|peran mengajar]] untuk mempertahankan usaha kognitif sepanjang semester.

### Kiat untuk pengembang

- **Utamakan batasan keras daripada persona semata.** Prompt untuk "ketidakpastian" atau "persona siswa" tidak andal; paksakan secara eksplisit terjadinya kesalahan dan siklus klarifikasi. (Lihat [[prompting-teachability-novice-personas-lbt-2026]].)
- **Bangun kriteria penyelesaian.** Tentukan *kapan siswa telah menjelaskan dengan cukup* (Explique menggunakan fungsi alat LLM yang dikaitkan dengan tujuan pembelajaran konsep tersebut) sehingga interaksi berakhir pada pemahaman, bukan pada batas waktu atau jumlah giliran tetap.
- **Catat dan kodekan dialognya.** Explique menggunakan deteksi kata per menit ditambah pengodean semantik LLM untuk mengklasifikasikan interaksi sebagai Rinci / Minimal / Penggunaan Konten Eksternal — sinyal itulah cara Anda mendeteksi penghindaran dan penurunan keterlibatan sebelum menjadi masalah.
- **Beri instruktur dasbor.** Tingkat penyelesaian dan pola [[qualitative-research|kualitatif]] dalam interaksi mengajar memungkinkan manusia campur tangan ketika usaha menurun (instruktur Explique memantau tepat hal ini).

### Implikasi dan pertanyaan terbuka

- **LbT adalah penawar yang dapat diskalakan terhadap ketergantungan berlebih pada AI** — ia membalik peran tutor/siswa dan menjaga siswa tetap aktif secara kognitif, yang semakin penting ketika AI menjadi lebih fasih dan lebih "membantu".
- **Sifat mudah salah adalah fitur, bukan cacat.** Tutee yang *terlalu* benar menghilangkan koreksi kesalahan dan deteksi celah yang membuat LbT berhasil; rancanglah untuk perjuangan yang produktif, bukan melawannya.
- **Pertanyaan terbuka tetap ada:** Bagaimana interaksi LbT bertahan melewati satu semester ketika kebaruan sepenuhnya memudar? Apakah LbT bertransfer ke domain non-Ilmu Komputer yang kurang terstruktur pada skala yang sama? Dapatkah pengodean dialog otomatis menjadi pemantau keterlibatan waktu nyata yang praktis bagi instruktur? Dan bagaimana kita menjaga peran mengajar tetap bermakna bagi *setiap* siswa, bukan hanya bagi segelintir yang termotivasi?

## Miskonsepsi umum

**"Tutee apa pun berhasil, karena manfaatnya terletak pada menjelaskan."** Manfaatnya bergantung pada respons tutee yang informatif. Tutee yang sudah memahami segalanya tidak memberi celah apa pun untuk dideteksi tutor, itulah sebabnya menjadikan LLM tutee yang baik menuntut **merekayasa sifat mudah salah** — kesalahan dan kebingungan yang dirancang yang harus didiagnosis dan dikoreksi oleh guru-siswa. Efek protégé berasal dari ketidaktahuan tutee, sehingga tutee yang cakap justru menghilangkan mekanismenya.

**"Kesalahan yang dihasilkan sudah cukup baik karena memang salah."** Hanya jika kesalahan itu masuk akal. Dalam studi anotasi tersamar, para ahli **salah mengklasifikasikan 164 dari 196 (83.7%) kiriman Java yang dihasilkan LLM sebagai karya siswa yang autentik** — yang sekaligus menjadi bukti bahwa kesalahan itu realistis dan peringatan bahwa tutee dapat salah dengan cara yang mengajarkan diagnosis yang keliru.

**"Meminta LLM berperan bingung adalah prompt sepele."** Ini masalah desain, karena sifat mudah salah harus dikalibrasi terhadap konsep yang diajarkan dan terhadap model mental tutor-siswa saat itu. Kesalahan acak menghasilkan latihan debugging; kesalahan yang mencerminkan miskonsepsi spesifik yang masuk akal menghasilkan restrukturisasi konseptual, dan hanya yang kedua itulah target pedagogisnya.

**"Belajar dengan mengajar adalah aktivitas yang lebih lunak daripada diajar."** Justru lebih menuntut. Bersiap untuk mengajar memaksa penataan pengetahuan dan penemuan celah diri sendiri, itulah sebabnya pendekatan ini menyingkap kesalahpahaman yang disembunyikan oleh penerimaan pasif — kesulitannya adalah mekanismenya, bukan biaya yang harus diminimalkan.

## Konsep terkait

- [[pedagogical-patterns]] — Menjelaskan kepada tutee AI: urutan dengan bukti terkuat dalam basis pengetahuan
- [[generative-ai]]
- [[active-learning]]
- [[constructivist]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[cs-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[pedagogy]] — Payung: pedagogi dan strategi pengajaran dalam pendidikan AI

## Artikel terkait

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT sebagai agen yang dapat diajar dalam pemrograman
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: agen yang dapat diajar untuk 546 siswa
- [[prompting-teachability-novice-personas-lbt-2026]] — Merancang persona pemula untuk keterajaran
- [[socrates-students-instructors-llms-lbt-2025]] — Siswa sebagai instruktur LLM (Socrates)
- [[teaching-ai-vocabulary-lbt-llms-2026]] — Pembelajaran kosakata dengan mengajari AI
- [[knowloop-confusion-to-consolidation-2026]] — Konsolidasi teach-back dalam sistem tinjauan percakapan
- [[simulating-novice-students-machine-unlearning-2026]] — machine unlearning untuk menahan tutee pada tingkat pengetahuan pemula, dan pembelajaran ulang melalui dialog mengajar
- [[simulating-students-java-programming-errors-llms]] — Menyimulasikan kesalahan siswa dengan LLM
- [[knowledge-building-tutor-learning-2026]] — respons yang membangun pengetahuan, bukan pengetahuan awal, memprediksi pembelajaran tutor
