---
connected_resources: [matt-pocock-skills]
title: "Metode Sokratis"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-education, critical-thinking]
pedagogy: [metacognition, scaffolding]
technology: [generative-ai, intelligent-tutoring, llm, rag]
assessment: [formative-assessment]
audience: [learners]
level: [higher ed]
confidence: high
updated: "2026-11-04T02:42:40-05:00"
translation_of: "concepts/socratic-method"
source_updated: "2026-11-01T09:12:59-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Metode Sokratis** — pendekatan [[pedagogy|pedagogis]] yang berakar pada pertanyaan terbimbing dan dialog alih-alih pengajaran langsung, yang kini diadaptasi untuk sistem tutor AI generatif. Dalam [[ai-education|AI dalam pendidikan]], metode Sokratis dioperasionalkan melalui LLM yang mengajukan pertanyaan menggali, menopang penalaran, dan menahan jawaban langsung — bertujuan mendorong pemahaman lebih mendalam dan [[desirable-difficulties|perjuangan produktif]] alih-alih pengambilan jawaban.([[hashmi-socratic-physics-chatbot-2025]])([[favero-critical-ai-tutors-empower-enslave-2025]])

## Pertanyaan yang Perlu Dipertimbangkan

- Pikirkan saat seorang guru (atau teman) menjawab pertanyaan Anda dengan pertanyaan lain dan itu benar-benar membantu Anda berpikir. Apa yang membuatnya berhasil, dan kapan ia justru hanya terasa menjengkelkan atau mengelak?
- Pendekatan Sokratis menahan jawaban langsung untuk memancing 'perjuangan produktif'. Apakah Anda percaya perjuangan itu perlu untuk pembelajaran mendalam, atau kadang-kadang ia hanya friksi yang tak perlu — dan bagaimana Anda membedakannya?
- Tutor Sokratis AI harus memutuskan kapan membimbing, kapan memberi petunjuk, dan kapan memberi jawaban langsung, berdasarkan sinyal siswa secara real-time. Menurut Anda bagaimana sebuah sistem (atau manusia) mengetahui langkah mana yang harus diambil pada momen tertentu?
- Halaman ini mencatat bahwa siswa yang frustrasi mungkin memerlukan jawaban langsung singkat sebelum kembali ke pertanyaan Sokratis. Menurut Anda apa implikasinya bagi batas pendekatan yang hanya bertanya dan berlaku untuk semua orang?
- Jika [[conversational-ai|chatbot]] yang hanya bertanya dapat menghasilkan keuntungan penalaran yang terukur, apa yang mungkin hilang dibandingkan dialog Sokratis asli dengan mentor manusia — dan apa yang mungkin diperoleh?

## Pendahuluan

Metode Sokratis adalah salah satu teknik pedagogis tertua — berasal dari Sokrates di Athena kuno — dan telah menemukan relevansi baru di era [[generative-ai|AI generatif]]. Dalam [[research-methods-aied|penelitian]] pendidikan AI, metode Sokratis merujuk pada sistem AI yang melibatkan siswa melalui dialog terbimbing, mengajukan pertanyaan yang menuntun siswa menemukan jawaban alih-alih menyediakannya secara langsung. Mengajukan pertanyaan terstruktur alih-alih memberikan jawaban adalah salah satu perancah pedagogis terkuat untuk pembelajaran mendalam; ketika diotomatiskan melalui AI, ia menghasilkan keuntungan penalaran yang terukur tetapi juga memerlukan kalibrasi cermat agar tidak membuat siswa frustrasi atau menggantikan mentoring manusia.([[hashmi-socratic-physics-chatbot-2025]])([[favero-critical-ai-tutors-empower-enslave-2025]])

Umpan balik Sokratis dan direktif menggerakkan hal yang berbeda: umpan balik Sokratis meningkatkan pemantauan pemahaman dan orientasi tugas, umpan balik direktif lebih tinggi dalam memprioritaskan fitur esensial, dan hanya kondisi direktif yang memperoleh manfaat dari agen yang disesuaikan ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

[[ngambi-ai-learning-ecosystems-domino-framework-2026|Ng'ambi dan van der Merwe (2026)]] menangkap pertanyaan Sokratis yang berhasil dan gagal di kelas matematika kelas 9 yang sama: ketika seorang siswa datang dengan hipotesis, tutor memecahnya menjadi sub-pertanyaan, tetapi pada tugas Pythagoras yang terstruktur ia mengulang pernyataan dan melenceng dari topik.

## Bagaimana ia bekerja dalam tutor AI

Berbeda dari tutor AI pengajaran langsung yang memberi jawaban, tutor AI Sokratis menggunakan urutan pertanyaan yang:
- **Memunculkan [[prior-knowledge|pengetahuan awal]]** — menanyakan apa yang sudah diketahui siswa tentang suatu topik
- **Menggali penalaran** — "Mengapa Anda berpikir demikian?" atau "Bagaimana jika situasinya berbeda?"
- **Memunculkan [[misconceptions]]** — melalui contoh kontra yang dipilih dengan cermat
- **Membimbing menuju pemahaman** — tanpa membocorkan jawabannya

Pendekatan Sokratis secara langsung mewujudkan prinsip dari [[llm-training-and-fine-tuning|EduQwen]]: **beri imbalan pada "membimbing" alih-alih "menjawab".** Namun, kalibrasi Sokratis secara real-time lebih sulit daripada pedagogi di atas kertas: EduQwen mengoptimalkan pembimbingan yang benar pada [[benchmark]] pilihan ganda, sedangkan tutor Sokratis yang hidup harus memutuskan *kapan* membimbing, *kapan* memberi petunjuk, dan *kapan* menjawab — berdasarkan sinyal siswa secara real-time. [[affective-tutoring|Keadaan afektif]] adalah moderator kritis: siswa yang frustrasi mungkin memerlukan jawaban langsung singkat sebelum kembali ke mode Sokratis. Varian yang lebih ketat menghapus pengajaran sepenuhnya: sebuah agen fisika pengantar yang hanya menggali meminta siswa mempertahankan prediksi yang benar terhadap satu variabel yang diubah (deteksi gua) dan menjaga pesan setelah jawaban benar tak terbedakan dari pesan setelah jawaban salah ([[socratic-probing-agent-physics-cave-detection-2026|Cho (2026)]]).

Desain petunjuk memiliki bentuk yang terdokumentasi dalam domain yang selain itu tidak dicakup halaman ini. Dalam tugas revisi bahasa kedua dengan 58 mahasiswa pada CEFR A1–B1, desainnya memberikan petunjuk terbimbing dan menuntut siswa menyimpulkan koreksinya alih-alih menerimanya ([[lukesova-clue-before-correction-2026|Lukešová & Jennings, 2026]]). Beban kognitif yang berkurang dan jalur revisi yang dipersonalisasi dilaporkan terutama bagi siswa yang sudah memiliki pengetahuan awal cukup untuk bertindak atas petunjuk, dan kedalaman umpan balik bervariasi menurut seberapa baik siswa menyusun prompt. Menahan koreksi karena itu memiliki ambang kecakapan, yang merupakan masalah kalibrasi dalam bentuk yang dapat diukur oleh suatu studi.

## Bukti efektivitas

Chatbot AI Sokratis khusus yang digunakan dalam kursus mekanika pengantar berpendaftaran besar (150 mahasiswa [[stem-education|STEM]] tahun pertama) menghasilkan keuntungan penalaran yang terukur:

| Metrik | Hasil |
|---|---|
| **Sampel** | 150 mahasiswa STEM tahun pertama |
| **Penilaian keterampilan berbasis pengetahuan** | Median **4.0/5** |
| **Penilaian efektivitas keseluruhan** | Median **3.4/5** (kesenjangan mencolok) |
| **Kekhususan pertanyaan (giliran pertama)** | ~10–15% |
| **Kekhususan pertanyaan (giliran akhir)** | **100%** |
| **Korelasi kekhususan × nilai** | Pearson **r = 0.43** |

**Interpretasi:** Siswa memulai dengan pertanyaan yang kabur dan generik tetapi secara progresif mempertajamnya melalui interaksi Sokratis — indikator jelas berkembangnya penalaran seperti pakar. Korelasi positif antara kekhususan pertanyaan dan perkiraan nilai yang dilaporkan sendiri menunjukkan bahwa belajar mengajukan pertanyaan yang lebih baik itu sendiri merupakan keterampilan domain.

### Kesenjangan efektivitas

Kesenjangan antara "keterampilan berbasis pengetahuan" (4.0/5) dan "efektivitas keseluruhan" (3.4/5) menunjukkan ketegangan: siswa mengakui bahwa bot Sokratis memperbaiki penalaran mereka, namun tidak sepenuhnya menyetujuinya sebagai solusi tutor yang lengkap. Kemungkinan alasannya:
- Dialog Sokratis menuntut usaha; siswa mungkin lebih menyukai jawaban langsung demi efisiensi
- Chatbot tidak dapat memberikan dukungan relasional seperti tutor manusia
- Sebagian siswa mungkin terjebak dalam lingkar Sokratis tanpa penyelesaian

### Temuan kontra: akses tanpa batas dapat mengungguli mode terbatas

Tidak semua bukti mendukung pembatasan AI. [[socratic-nuclear-ai-learning|Socrates went Nuclear (Clin Deffarges, Kosmyna & Maes, 2026)]], studi EEG acak atas 50 partisipan yang membandingkan bot bergaya ChatGPT tanpa batas, mode Sokratis hanya-petunjuk, dan mode adaptif dengan jumlah pertanyaan terbatas pada tugas belajar keselamatan nuklir, menemukan bahwa **chatbot tanpa batas menghasilkan keuntungan belajar lebih tinggi** daripada kedua mode terbatas (*p* < .03, *d* > 0.80) — meskipun **kondisi adaptif menghasilkan [[student-engagement|keterlibatan kognitif]] terukur EEG yang secara signifikan lebih tinggi** (*p* = .018). Hasil ini menyulitkan asumsi bahwa interaksi yang dibatasi secara pedagogis (Sokratis) selalu menghasilkan pembelajaran lebih mendalam: pada akuisisi faktual berhorizon pendek, akses bebas menang, sementara pembatasan akses menaikkan keterlibatan kognitif terukur tanpa mengubahnya menjadi keuntungan pascates langsung yang lebih tinggi. Ini adalah titik kalibrasi yang berguna di samping hasil [[learning-gains|hasil belajar]] yang lebih kuat di atas: pembatasan dapat mendorong keterlibatan, tetapi penerjemahan keterlibatan menjadi retensi tidak otomatis, dan pembatasan yang berlebihan mungkin hanya membuat siswa yang mencari jawaban frustrasi.

Dukungan kausal terkuat untuk pembatasan menunjuk ke arah sebaliknya: dalam tinjauan K-12, siswa sekolah menengah yang menggunakan chatbot serbaguna memperoleh nilai sekitar 17% lebih buruk pada ujian tutup buku daripada teman sebaya tanpa akses AI, sementara bot khusus tutor dengan petunjuk bertahap dan penolakan memberi jawaban langsung meredam penurunan itu ([[stanford-evidence-base-ai-k12-2026|Stanford SCALE Initiative (2026)]]).

- **Tutor Sokratis dengan konteks penuh dapat dinilai terburuk dari empat varian.** Dalam uji acak 2×2 dengan 132 mahasiswa Python pengantar, asisten GPT-4o yang menggunakan pertanyaan Sokratis dengan konteks masalah penuh mendapat skor signifikan lebih rendah pada dukungan penyelesaian tugas (peringkat rata-rata 48.63, μ = 3.53) daripada varian pengajaran langsung dan tanpa konteks (χ²(3) = 12.14, p = .007), tertinggi secara tren pada stres interaksi dan penggunaan LLM eksternal (23% berbanding 15% secara keseluruhan), dan menghasilkan penjelasan pascatugas dengan pemahaman penuh paling sedikit (48%). Kondisi Sokratis mengirim lebih banyak kueri (μ = 11.1 per masalah tanpa konteks), yang dibaca [[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al. (2026)]] sebagai jawaban yang ditahan memaksa bolak-balik tambahan alih-alih perjuangan produktif.

Dalam pelatihan [[medical-education|wawancara klinis]], [[ai-standardized-patient-scaffolding-medical-2026|uji MeduAI-SP (Yang et al., 2026)]] membuat agen tutor menyampaikan prompt Sokratis hanya pada kebutuhan yang ditandai — riwayat kunci yang hilang, penutupan prematur, jalan buntu percakapan, atau gangguan komunikasi — dengan merumuskannya sebagai pertanyaan reflektif seperti apakah informasi yang terkumpul cukup untuk mendukung diagnosis utama. Siswa yang dilatih di bawah perancah Sokratis ini memperoleh skor 31 poin persentase lebih tinggi pada butir daftar periksa "mengekspresikan empati" yang dapat diamati (P terkoreksi Holm = 8.30e-4) dan 0.90 poin lebih tinggi pada domain komunikasi OSCE 1–5 (P = 4.50e-4), mengaitkan pertanyaan yang tidak memberi jawaban dengan keuntungan komunikasi berpusat pada pasien yang terukur alih-alih dengan akurasi diagnostik (84% vs. 86%; P = 1.000).

Fidelitas tidak dijamin oleh konfigurasi: fasilitator ISLE yang dikonfigurasi khusus memulihkan urutan uji-sebelum-prediksi yang telah dibalik siswa, namun ketika didesak untuk "katakan saja" beban mana yang lebih berat, ia menghasilkan nilai massa yang tidak pernah diukur siapa pun, beralih dari bertanya menjadi merekayasa data ([[embodied-inquiry-ai-facilitator-physics-2026|Tufino & Damiani (2026)]]).

## Penelitian dalam basis pengetahuan

**[[hashmi-socratic-physics-chatbot-2025|Chatbot Fisika Sokratis]]** menyediakan bukti empiris bahwa metode Sokratis dapat dioperasionalkan melalui AI generatif dalam skala besar, sekaligus berfungsi sebagai alat [[teacher-role|pengajaran]] dan instrumen pengumpulan data untuk [[learning-analytics]]. Berbeda dari sistem Sokratis berbasis aturan masa lalu, pendekatan berbasis [[llm]] dapat menyesuaikan urutan pertanyaan secara dinamis berdasarkan respons siswa.

**[[ai-agents-constructive-conflict-design-education-2026|Agen AI adversarial]]** mewujudkan konflik konstruktif — varian Sokratis — yang [[prompt-engineering|meminta]] perancang pemula mempertimbangkan kembali asumsi mereka, menghasilkan lebih banyak iterasi desain dan karya akhir yang dinilai lebih tinggi. Ini menghubungkan pertanyaan Sokratis dengan [[design-thinking]] dan [[critical-thinking]].

**[[syal-multimodal-dialogue-stem-2026|Sistem dialog multimodal]]** memperluas tutor Sokratis ke domain visual, menggunakan protokol intervensi tanpa pelatihan ulang yang meminta model mendeskripsikan, bernalar, dan mengoreksi diri — perancah Sokratis [[multimodal]].

**[[retrieval-augmented-tutoring-algorithm-kite|Tutor yang diperkaya pengambilan]]** mengoperasionalkan prinsip Sokratis melalui pengambilan, mengaitkan setiap respons pada konten kursus yang otoritatif alih-alih hanya mengandalkan pengetahuan parametrik model — mengatasi kesenjangan bahwa kualitas pedagogis saja tidak cukup tanpa fidelitas konten.

**Tutor Sokratis dalam persiapan guru biologi.** Sebuah kuasi-eksperimen dengan 124 calon guru biologi menemukan bahwa tutor Sokratis ChatGPT-4 tentang isu sosio-saintifik mengungguli diskusi sejawat luring pada kualitas argumentasi (F(1,121) = 14.23, p < .001), dengan keuntungan terkonsentrasi pada sanggahan dan evaluasi bukti kontra alih-alih pembentukan klaim ([[genai-socratic-tutor-biology-argumentation-2026|Ergasheva et al., 2026]]).

[[lftutor-logical-fallacy-education-2026|LFTutor (Shi et al., 2026)]] menerapkan pertanyaan Sokratis pada subjek yang menahan jawaban adalah seluruh tugasnya: mengajarkan orang awam melihat kesalahan logika dalam teks persuasif yang mereka yakini valid. Agen dialognya menguraikan argumen siswa sendiri dengan model Toulmin (klaim, dasar, jaminan), mendeteksi niat siswa, lalu memilih tepat satu dari empat strategi - Merespons, Bukti, Asumsi, Sanggahan - dalam urutan prioritas tetap yang mencerminkan struktur Toulmin, dengan agen pemverifikasi terpisah yang memeriksa setelah generasi bahwa balasan benar-benar menjalankan strategi terpilih dan merumuskannya ulang bila tidak. Metrik evaluasinya adalah mode kegagalan Sokratis alih-alih keuntungan belajar: divergensi dari topik, perubahan sikap (menyerah pada posisi siswa), pengulangan, kegagalan menyanggah, kegagalan meminta bukti, fiksasi strategi, terminologi kesalahan logika yang tidak dijelaskan, dan bimbingan pasif. Di seluruh 1,000 dialog simulasi per kerangka dengan tulang punggung GPT-4o, LFTutor lulus 84.5% dialog rata-rata berbanding 61.5% untuk prompt yang mencantumkan jebakan yang sama dan 31.2% untuk prompting role-play biasa, dan ablasi menunjukkan keuntungannya bukan berasal dari kosakata Toulmin melainkan dari eksekusi strategi yang terverifikasi dan pemilihan berbasis niat. Dengan 20 partisipan manusia yang berdebat dengan tutor, LFTutor memperoleh skor signifikan lebih baik pada delapan dari sembilan metrik Likert, termasuk keberdayagunaan (4.15 berbanding 1.65), dengan pengulangan sebagai satu-satunya dimensi yang perbedaannya tidak signifikan.

Gerbang dapat membuat penahanan jawaban dapat ditegakkan alih-alih kosmetik: Prober.ai membatasi LLM untuk hanya mengajukan pertanyaan berbasis inkuiri dan merilis saran revisi konkret hanya setelah siswa menulis pembelaan yang melewati gerbang refleksi, mengembalikan dorongan pembinaan sebagai gantinya ketika pembelaan itu tipis ([[prober-ai-inquiry-writing|Bi, Wei dan Zhou (2026)]]).

## Agensi dan penggunaan kritis

Favero et al. (2025) memperingatkan bahwa bahkan AI Sokratis dapat melemahkan [[agency]] jika siswa menjadi bergantung pada struktur pertanyaan alih-alih menginternalisasikannya. Tujuannya bukan perancah Sokratis permanen melainkan **transfer yang diperancah** — siswa akhirnya menyokratisasi diri mereka sendiri.

## Koneksi ke konsep lain

Metode Sokratis erat terkait dengan [[scaffolding]] (memberikan dukungan secukupnya), perjuangan produktif (membiarkan siswa bergulat dengan kesulitan), dan [[intelligent-tutoring]] (pengurutan pertanyaan adaptif). Ia berkontras dengan [[cognitive-offloading|Ketergantungan Berlebih]] — siswa yang menerima jawaban langsung mungkin melewati pembelajaran, sedangkan bimbingan Sokratis mempertahankan keterlibatan kognitif. Ia mendukung [[self-regulated-learning]] dan [[metacognition]] dengan membuat penalaran terlihat, dan terhubung dengan [[formative-assessment]] ketika digunakan untuk menggali pemahaman secara real-time.

## Pertanyaan Terbuka

1. Apakah dialog Sokratis bertransfer lintas domain, atau apakah penalaran [[discipline-specific-aied|khas domain]] tidak dapat ditransfer?
2. Bagaimana kekhususan Sokratis berkorelasi dengan kinerja kursus yang *sebenarnya* (bukan yang dilaporkan sendiri)?
3. Dapatkah AI Sokratis digabungkan dengan [[becerra-aicofe-feedback-2026|umpan balik sejawat]] untuk amplifikasi sosial?

- **Menahan jawaban untuk memancing penalaran.** [[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al. (2025)]] merekayasa tutor LLM untuk mengikuti pedagogi [[productive-failure|kegagalan produktif]] dengan menahan solusi dan memunculkan beberapa upaya — penolakan bergaya Sokratis untuk memberi bantuan kecuali bila benar-benar perlu; [[wang-safety-gap-productive-struggle-2026|Wang & Shan (2026)]] merekomendasikan arsitektur AI Sokratis dan Adversarial yang mempertahankan friksi kognitif konstruktif.

## Miskonsepsi Umum

- **"Pertanyaan Sokratis hanyalah ketiadaan jawaban."** Chatbot AI Sokratis khusus yang digunakan dalam kursus mekanika pengantar berpendaftaran besar (**150 mahasiswa [[stem-education|STEM]] tahun pertama**) menghasilkan keuntungan **yang terukur**, dan desainnya adalah pertanyaan terstruktur — interaksi yang dibatasi, bukan model yang diam.
- **"Efeknya merupakan hilir dari keterlibatan."** [[socratic-nuclear-ai-learning|Socrates went Nuclear (Clin Deffarges, Kosmyna dan Maes, 2026)]] adalah **studi EEG acak atas 50 partisipan** yang membandingkan bot bergaya ChatGPT tanpa batas dengan bot **Sokratis**, yang mengukur mekanismenya alih-alih menyimpulkannya dari hasil.
- **"Pembatasan adalah masalah yang harus dihilangkan."** Dukungan kausal terkuat untuk pembatasan menunjuk ke arah sebaliknya: dalam tinjauan K-12, siswa sekolah menengah yang menggunakan chatbot serbaguna **memperoleh nilai sekitar 17% lebih buruk pada ujian tutup buku** daripada teman sebaya yang menggunakan alat terbatas. Alat tanpa batas adalah kondisi yang merugikan.

## Konsep terkait

- [[pedagogical-patterns]] — Urutan pertanyaan dan bukti uji yang saling bertentangan
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[stem-education]]
- [[student-modeling]]
- [[student-experience]]
- [[agentic-ai]]
- [[metacognition]]
- [[knowledge-tracing]]
- [[adaptive-learning]]
- [[generative-ai]]
- [[cognitive-offloading]]
- [[self-regulated-learning]]
- [[formative-assessment]]
- [[ai-literacy]]
- [[agency]]
- [[critical-thinking]]
- [[pedagogy]] — Payung: pedagogi dan strategi pengajaran dalam pendidikan AI
- [[productive-failure]] — Kegagalan Produktif

## Artikel terkait
- [[agent-type-feedback-style-self-directed-learning-2026]] — Gaya umpan balik Sokratis versus direktif dalam studi desain pascasarjana 2 x 2

- [[ai-standardized-patient-scaffolding-medical-2026]] — Mengevaluasi Sistem Bahasa Besar Multi-Agen Berorientasi Perancah untuk Pelatihan Wawancara Klinis
- [[hashmi-socratic-physics-chatbot-2025]]
- [[ai-agents-constructive-conflict-design-education-2026]]
- [[syal-multimodal-dialogue-stem-2026]]
- [[retrieval-augmented-tutoring-algorithm-kite]]
- [[genai-performance-vs-learning]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[prober-ai-inquiry-writing]]
- [[generative-ai-guardrails-harm-learning]]
- [[stanford-evidence-base-ai-k12-2026]] — Petunjuk Sokratis terstruktur vs. tanya-jawab serbaguna terbuka
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pengarahan Pedagogis LLM untuk Kegagalan Produktif
- [[wang-safety-gap-productive-struggle-2026]] — Kesenjangan Keselamatan: Memulihkan Perjuangan Produktif
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI untuk Mendukung Desain Masalah PF
- [[lukesova-clue-before-correction-2026]] — Petunjuk Sebelum Koreksi: ChatGPT untuk Pembelajaran Bahasa Otonom
- [[socratic-nuclear-ai-learning]] — Socrates went Nuclear: Membandingkan Strategi Interaksi untuk AI dalam Pembelajaran
- [[lftutor-logical-fallacy-education-2026]] — Pertanyaan Sokratis plus argumentasi kritis dalam kerangka tutor kesalahan logika empat langkah

- [[guardrails-ai-teaching-assistants-programming-2026]] — Guardrails atau Penghalang? Efek Gaya Pedagogis dan Kesadaran Konteks pada Asisten Pengajar AI untuk Pemrograman
- [[genai-socratic-tutor-biology-argumentation-2026]] — Meningkatkan keterampilan argumentasi selaras PISA calon guru biologi melalui kecerdasan artifisial generatif
- [[etq-ai-conversational-teacher-training-2026]] — Diagnostik AI percakapan untuk miskonsepsi pengajaran dengan dialog berlandas bukti (Miranda & Calvani 2026)
- [[socratic-probing-agent-physics-cave-detection-2026]] — Merancang Agen AI yang Tidak Menutori: Aturan Desain untuk Penggalian Sokratis dalam Fisika Pengantar
