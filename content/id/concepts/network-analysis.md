---
title: "Analisis Jaringan"
created: "2026-08-22T01:40:00-04:00"
type: concept
technology: [knowledge-graph, learning-analytics]
confidence: high
methods: [network-analysis, research-methods-aied]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/network-analysis"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Analisis jaringan** — keluarga [[research-methods-aied|metode penelitian]] yang memodelkan entitas (orang, konsep, tindakan, atau kode) sebagai **simpul** yang dihubungkan oleh **sisi** yang merepresentasikan hubungan atau transisi, lalu menganalisis struktur dan dinamika jaringan yang dihasilkan untuk mengungkap pola yang tidak terlihat oleh hitungan frekuensi atau perbandingan berpasangan. Dalam penelitian AI dalam pendidikan, analisis jaringan digunakan untuk memetakan pola interaksi antara siswa dan alat AI, memodelkan bagaimana elemen pengetahuan atau wacana muncul bersamaan, dan melacak urutan perilaku temporal. Ia mencakup varian-varian yang berbeda — **Epistemic Network Analysis** (ENA, memodelkan ko-okurensi kode/konstruk), **Social Network Analysis** (SNA, memodelkan hubungan antarorang), dan **Transition Network Analysis** (TNA, memodelkan urutan temporal keadaan) — yang masing-masing mengoperasionalkan "belajar sebagai koneksi" dengan cara yang berbeda. ([[tracing-genai-literacy-interaction-patterns]]) ([[penny-transition-network-analysis-efl-writing-2026]]) ([[misiejuk-cognitive-offloading-prompting-2026]])

## Pertanyaan yang Perlu Dipertimbangkan

- Ketika Anda mendengar 'analisis jaringan' dalam pendidikan, gambaran apa yang muncul—peta pertemanan siswa, tautan antargagasan, atau sesuatu yang lain? Bagaimana hal-hal itu berbeda dari sekadar menghitung seberapa sering sesuatu terjadi?
- Andaikan Anda ingin tahu apakah siswa benar-benar terlibat dengan umpan balik alat menulis AI alih-alih sekadar memperoleh jawaban. Mengapa metrik 'berapa kali mereka mengklik' mungkin melewatkan cerita yang akan diungkap oleh urutan tindakan (misalnya, loop revisi vs. loop obrolan)?
- Halaman ini membedakan analisis jaringan Epistemik, Sosial, dan Transisi. Tanpa mengetahui detailnya, dapatkah Anda menebak varian mana yang akan Anda gunakan untuk mempelajari (a) bagaimana orang berkolaborasi, (b) gagasan mana yang muncul bersamaan dalam penalaran siswa, dan (c) bagaimana siswa berpindah antar keadaan sepanjang waktu?
- Seorang peneliti menemukan bahwa siswa berliterasi tinggi dan rendah menggunakan alat AI yang sama tetapi menghasilkan struktur jaringan penalaran yang sangat berbeda. Apa yang hal itu katakan tentang mengevaluasi alat AI dengan satu skor rata-rata?
- Metrik jaringan seperti 'kepadatan' dan 'sentralitas' menggambarkan apakah interaksi bersifat acak atau terorganisasi di sekitar hub. Kapan jaringan terorganisasi yang berpusat pada satu siswa menjadi tanda kolaborasi yang baik—dan kapan menjadi tanda masalah?

## Pendahuluan

Metode analisis jaringan berbagi premis inti: bahwa struktur koneksi — bukan sekadar keberadaan atau frekuensinya — membawa makna. Alih-alih bertanya "berapa banyak X terjadi," mereka bertanya "bagaimana elemen-elemen terhubung, dan apa yang diungkap oleh konektivitas itu tentang [[metacognition|kognisi]], [[collaborative-learning|kolaborasi]], atau proses pembelajaran?" Hal ini membuatnya sangat berharga dalam AI dalam pendidikan, tempat peneliti makin ingin memahami *proses* [[student-ai-interaction|interaksi siswa–AI]] (bagaimana siswa menavigasi [[feedback]], dialog, dan revisi) alih-alih hanya produknya (skor akhir, tingkat kesalahan).

## Varian yang digunakan dalam korpus basis pengetahuan

- **Epistemic Network Analysis (ENA)** — varian paling umum dalam basis pengetahuan (dibahas di ~24 artikel). ENA memodelkan ko-okurensi kode atau konstruk dalam segmen wacana atau aktivitas, menghasilkan jaringan yang menunjukkan gagasan, keterampilan, atau tindakan epistemik mana yang cenderung terhubung dalam konteks tertentu. Ia digunakan untuk membandingkan bagaimana kelompok berbeda (misalnya siswa berliterasi tinggi vs. rendah, kolaborator manusia vs. AI) menata kognisi mereka. ([[tracing-genai-literacy-interaction-patterns]]) ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **ENA juga memetakan pembicaraan kompetensi [[teacher-role|pendidik]].** Menerapkan Epistemic Network Analysis pada wawancara dengan 24 pendidik pendidikan tinggi di Aotearoa Selandia Baru memodelkan tautan di antara tujuh dimensi HACC dan menemukan jaringan kepala sekolah berbeda secara signifikan dari pendidik senior (U = 10.00, p = .04) dan pendidik karier awal (U = 7.00, p = .01) pada sumbu pertama ([[dang-human-ai-collaboration-competency-2026|Dang dkk. (2026)]]).
- **Social Network Analysis (SNA)** — memodelkan hubungan antarorang (siswa, guru, agen) untuk mengungkap struktur kolaborasi, pengaruh, sentralitas, dan komunitas. Berguna untuk mempelajari pembelajaran [[collaborative-learning|kolaboratif]] dan sebaya. ([[misiejuk-cognitive-offloading-prompting-2026]])
- **Transition Network Analysis (TNA)** — memodelkan urutan temporal keadaan diskret (misalnya tindakan siswa dalam sesi tutoring) sebagai jaringan berarah, mengkuantifikasi probabilitas berpindah antar keadaan. TNA digunakan untuk mengungkap loop perilaku, jalur, dan dinamika penyerapan dalam interaksi siswa–AI. ([[penny-transition-network-analysis-efl-writing-2026]])

Semua ini berbeda dari **[[knowledge-graph]]**, yang merupakan struktur data untuk merepresentasikan dan menalar atas fakta (ontologi/penyimpanan tripel), bukan metode analitis untuk mempelajari proses atau struktur hubungan.

## Analisis jaringan dalam penelitian AI dalam pendidikan

Metode jaringan digunakan di seluruh basis bukti basis pengetahuan ini untuk menjawab pertanyaan yang tidak dapat dijawab metrik agregat:

- **Membuka "kotak hitam" interaksi siswa–AI.** TNA mengungkap *prosesnya* — loop perilaku dan jalur yang ditempuh siswa saat menggunakan alat AI (misalnya, "loop revisi" vs. "loop obrolan" dalam [[conversational-ai|chatbot]] yang memberi perancah pada [[writing-education|pendidikan menulis]]) alih-alih hanya keluaran akhirnya. ([[penny-transition-network-analysis-efl-writing-2026]])
- **Membandingkan penataan kognitif antarkelompok.** ENA menunjukkan bagaimana kelompok berbeda menghubungkan konstruk secara berbeda — misalnya, bagaimana [[metacognition]] muncul bersamaan dengan delegasi vs. penalaran manusia dalam kolaborasi manusia–AI, mengungkap mode kolaborasi yang berbeda. ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Melacak literasi AI dan ciri khas interaksi.** ENA pada log interaksi mengidentifikasi pola penggunaan [[llm|LLM]] yang berbeda (penyempurnaan strategis iteratif vs. perintah linear), membedakan [[ai-literacy|kemahiran]] dan perkembangan siswa. ([[tracing-genai-literacy-interaction-patterns]])
- **Menganalisis wacana dan pembingkaian.** ENA diterapkan pada data [[qualitative-research|kualitatif]] dan [[multimodal]] (misalnya frame YouTube tentang [[generative-ai|ChatGPT]] dalam pendidikan) untuk mengungkap struktur wacana publik atau disipliner. ([[youtube-frames-chatgpt-education]])
- **Melengkapi [[self-report-measures|laporan diri]] dan metrik produk.** Karena metode jaringan menggunakan data perilaku yang diamati, ia dapat menyingkap ketidaksesuaian antara apa yang diklaim siswa dan apa yang benar-benar mereka lakukan — temuan yang berulang dalam literatur penyerapan umpan balik basis pengetahuan ini.

- **Struktur graf sebagai kuantitas validasi, bukan ringkasan deskriptif.** [[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]] melacak β0 - jumlah komponen terhubung dari graf kedekatan mingguan atas siswa pada ambang Euclidean tetap - untuk menguji apakah kohort sintetis mereproduksi yang nyata, dan lebih memilihnya karena ia ditentukan oleh grafnya sendiri, tidak memerlukan optimasi atau benih acak tidak seperti maksimalisasi modularitas, dan tetap terdefinisi ketika sepertujuh hingga sepertiga siswa berada sendirian dalam satu komponen.

## Pertimbangan metodologis

- **Pengodean adalah fondasinya.** Semua varian jaringan bergantung pada pengodean data mentah (ujaran, peristiwa, hubungan) yang andal menjadi simpul/kode diskret; pengodean otomatis berbasis LLM makin banyak digunakan tetapi memerlukan validasi manusia (misalnya, κ Fleiss sebesar 0.70–0.71 dalam studi TNA). ([[penny-transition-network-analysis-efl-writing-2026]])
- **Memperlakukan kesepakatan pengode sebagai pemeriksaan berjalan, bukan statistik sekali jalan.** [[preservice-teachers-noticing-ai-simulations-2026|Galiç dkk. (2026)]] mengodekan 304 pernyataan noticing pada α Krippendorff = .803 dan memantau kesepakatan sepanjang studi, mengodekan ulang pernyataan yang diperdebatkan setiap kali κ gabungan turun di bawah ambang kalibrasi ulang mereka sebesar .85 (pada Kasus 18 dan 27) dan tidak memerlukan kalibrasi ulang lebih lanjut pada Kasus 36–51. Urutannya adalah intinya: reliabilitas yang hanya diukur di akhir akan membiarkan model transisi awal bersandar pada pergeseran pengode, karena pola transisi mingguan itu adalah temuan studinya.
- **Metrik tingkat jaringan meringkas struktur.** Kepadatan, resiprositas, sentralisasi, dan kekuatan masuk/keluar menggambarkan apakah interaksi bersifat acak atau terorganisasi di sekitar hub "gravitasi", dan seberapa timbal balik pertukarannya.
- **Perbandingan statistik diperlukan untuk perbedaan antarkelompok.** Uji chi-kuadrat atau uji permutasi digunakan untuk menetapkan bahwa perbedaan jaringan yang diamati (misalnya berdasarkan kemahiran) bukan karena kebetulan. [[caeai-response-length-ai-ethics-education-2026|Shao dkk. (2026)]] menunjukkan bahwa nol harus dibangun agar sesuai dengan teksnya. Dalam diskusi kasus dengan dua puluh [[higher-ed|mahasiswa pascasarjana]] lintas disiplin, proporsi istilah bersama berukuran 3 naik dari 5.2% menjadi 8.0% sementara token konten turun menjadi sekitar 0.65× tingkat pasca-bacaan mereka. Uji permutasi seluruh kantong akan menyebut kenaikan itu signifikan; uji permutasi token terkondisi panjang mereka tidak (Q6 p = .62, Q7 p = .15).
- **Validasi instrumen sebelum membaca jaringannya.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai & Alshahri (2026)]] membangun AI-STEM-MLCS berisi 45 butir melalui jalur pengembangan skala lengkap — rasio validitas isi pakar, analisis faktor eksploratori lalu konfirmatori (CFI = 0.983, RMSEA = 0.019), ω McDonald sebesar 0.888–0.905, dan ICC test-retest dua minggu sebesar 0.751–0.900 — sebelum memodelkan keempat dimensinya dengan analisis graf eksploratori. Menurunkan struktur dari jaringan yang simpulnya adalah skor skala yang belum divalidasi adalah hal yang dijaga oleh urutan itu, dan para penulis menyebut validasi spesifik Arab Saudi sebagai batas bagi transfer strukturnya.
- **Menafsirkan dengan hati-hati.** Granularitas simpul (misalnya simpul "obrolan" yang kasar) dapat mengaburkan niat; klasifikasi otomatis membawa sejumlah ambiguitas; dan struktur jaringan potong lintang tidak menetapkan kausalitas.
- **Jaringan yang menyingkap apa yang disembunyikan agregat.** [[genai-social-annotation-epistemic-network-analysis-2026|Pan dkk. (2026)]] menemukan kelas yang menganotasi dengan GenAI memperoleh skor dan keterlibatan lebih tinggi daripada kontrolnya, lalu membagi kelas eksperimen berdasarkan median kinerja dan menunjukkan bahwa keuntungannya tidak dibagi rata: kelompok berprestasi tinggi memprakarsai 60.7 persen permintaan umpan balik di seluruh anotasi mereka dibandingkan 34.0 persen untuk kelompok berprestasi rendah, yang tetap berada dalam loop swa-rujuk (pemisahan kelompok signifikan pada sumbu X ENA, U = 25.00, p = 0.01). Pelajaran desainnya adalah bahwa satu efek tingkat kelompok dapat meringkas dua struktur interaksi yang berbeda — dan kedua kelompok itu adalah kelas utuh, sehingga perbandingan itu mengidentifikasi polanya tanpa mengatribusikannya secara kausal.
- **Klaster ko-kata dan ko-kepengarangan merekam praktik penerbitan sebanyak kedekatan intelektual.** [[bulut-technology-supported-formative-assessment-2026|Bulut (2026)]] memperingatkan bahwa sentralitas dan pengelompokan bibliometrik mencerminkan tempat terbit, bahasa, dan kawasan mana yang terindeks, sehingga peta suatu bidang bukanlah pengukuran netral atas bidang itu.

## Implikasi bagi penelitian AI dalam pendidikan

1. **Utamakan metode proses alih-alih metrik produk semata.** Untuk mengevaluasi apakah alat AI mendukung pembelajaran, modelkan bagaimana siswa benar-benar terlibat (penyerapan, dialog, revisi) dengan metode urutan/jaringan alih-alih mengandalkan skor akhir saja.
2. **Gunakan ENA untuk membandingkan penataan kognitif.** Ketika menanyakan bagaimana siswa atau mode yang berbeda (manusia vs. AI) menata penalaran mereka, ENA menyediakan perbandingan visual langsung atas jaringan ko-okurensi — teknik yang cocok untuk [[student-modeling|pemodelan siswa]] tentang bagaimana siswa menghubungkan gagasan.
3. **Validasi pengodean otomatis.** Dengan kumpulan data log yang besar, klasifikasi berbasis [[llm|LLM]] sangat kuat tetapi harus diperiksa terhadap pengodean manusia (laporkan kesepakatan antarpenilai) sebelum menafsirkan struktur jaringan.
4. **Rancang untuk diferensiasi.** Analisis jaringan sering mengungkap bahwa alat AI yang *sama* menghasilkan pola interaksi yang berbeda di berbagai subkelompok siswa — memberi masukan bagi desain adaptif alih-alih evaluasi satu ukuran untuk semua.


## Validasi ENA atas Dialog Kolaboratif Tersimulasi

- **ENA sebagai validasi bagi dialog tersimulasi.** Fang (2026) menerapkan Epistemic Network Analysis untuk mengevaluasi apakah agen LLM yang disetel halus mereproduksi struktur dialog [[problem-solving|pemecahan masalah]] kolaboratif yang nyata. Membandingkan vektor kedekatan tersimulasi dengan jaringan empiris, ia melaporkan jarak ENA sebesar 0.17 — di dalam ambang persentil ke-95 dari distribusi nol, dengan nilai p permutasi 0.65 — menunjukkan kekuatan ENA sebagai pemeriksaan [[quantitative-research|kuantitatif]] atas kesetiaan [[simulation|simulasi]] generatif atas wacana, bersama penerapan ENA/SNA/TNA lainnya dalam penelitian pendidikan.

## Miskonsepsi Umum

- **"Analisis jaringan bersifat objektif karena bersifat komputasional."** **Pengodean adalah fondasinya**: semua varian jaringan bergantung pada pengodean data mentah (ujaran, peristiwa, hubungan) yang andal menjadi simpul diskret, dan pengodean otomatis mewarisi definisinya dari siapa pun yang menetapkannya. [[visualization|Visualisasi]]nya tampak seperti struktur yang muncul dengan sendirinya, dan simpul-simpulnya adalah pilihan interpretatif.
- **"Pergeseran struktur jaringan secara otomatis merupakan keuntungan belajar."** Dalam diskusi kasus dengan **dua puluh mahasiswa pascasarjana lintas disiplin**, **proporsi istilah bersama berukuran 3 naik dari 5.2% menjadi 8.0%** sementara **token konten turun menjadi sekitar 0.65× tingkat pasca-**bacaan mereka. Dua ukuran struktural bergerak ke arah berlawanan, sehingga "jaringannya berubah" bukan temuan sampai Anda menyebutkan ukuran mana yang bergerak dan mengapa itu penting.
- **"Berbagi lebih banyak istilah berarti kolaborasi yang lebih baik."** Naiknya proporsi istilah bersama bersamaan dengan turunnya keragaman token konten konsisten dengan konvergensi pada kosakata yang lebih sempit. Konsensus dan penyempitan secara struktural serupa, dan itulah sebabnya ukuran itu memerlukan konten yang menjadi dasar perhitungannya.

## Konsep terkait

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## Artikel terkait
- [[caeai-response-length-ai-ethics-education-2026]] — Panjang respons, bukan keselarasan leksikal, yang menggerakkan statistik istilah bersama dalam jaringan peserta–morfem (Shao dkk. 2026)

- [[penny-transition-network-analysis-efl-writing-2026]] — TNA atas interaksi siswa-chatbot dalam penulisan EFL berperancah
- [[tracing-genai-literacy-interaction-patterns]] — ENA atas pola interaksi literasi GenAI
- [[hao-human-ai-collaborative-problem-solving-cognition]] — ENA atas pemecahan masalah kolaboratif manusia-AI
- [[misiejuk-cognitive-offloading-prompting-2026]] — Ketergantungan kognitif dan pemberian prompt (metode SNA/jaringan)
- [[youtube-frames-chatgpt-education]] — ENA atas frame YouTube tentang ChatGPT dalam pendidikan
- [[agency-gap-ai-writing]] — Kesenjangan agensi dalam penulisan berbantuan AI (ENA)
- [[synthetic-educational-data-structural-fidelity-2026]] — Apa yang Dilewatkan Metrik Kesetiaan: Pemeriksaan Struktural atas Data Pendidikan Sintetis
- [[dang-human-ai-collaboration-competency-2026]] — ENA juga memetakan pembicaraan kompetensi pendidik
