---
title: "Tolok Ukur"
created: "2026-08-09T16:52:03-04:00"
type: concept
technology: [generative-ai, llm]
assessment: [assessment]
connected_faqs: [reporting-interpreting-aied-research, checking-whether-educational-ai-works]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation, benchmark]
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/benchmark"
source_updated: "2026-11-05T21:30:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Tolok ukur** — rangkaian uji terstandardisasi dan kerangka evaluasi yang digunakan untuk mengukur kinerja model AI pada tugas pendidikan. Tolok ukur memungkinkan perbandingan yang dapat direproduksi antar model dan pendekatan, dan sangat penting untuk mengevaluasi keandalan, keadilan, dan kualitas [[pedagogy|pedagogis]] sistem AI dalam pendidikan.

## Pertanyaan untuk Dipertimbangkan

- Tolok ukur adalah rangkaian uji terstandardisasi untuk mengukur kinerja model AI pada tugas pendidikan. Sebelum membaca, menurut Anda apa yang sebenarnya diuji sebagian besar tolok ukur AI — dan mengapa itu mungkin berbeda dari yang dibutuhkan tutor yang baik?
- Halaman ini menyoroti Pedagogy Benchmark yang menguji pengetahuan pedagogis — strategi [[teacher-role|pengajaran]], metode penilaian, pedagogi pendidikan khusus — alih-alih pengetahuan konten. Mengapa AI yang sangat menguasai suatu mata pelajaran tetap bisa gagal mengajarkannya, dan mengapa tolok ukur yang mengabaikan pedagogi akan melewatkan hal itu?
- Salah satu pelajaran di sini bersifat [[research-methods-aied|metodologis]]: cara Anda memvalidasi tolok ukur mengubah hasil secara dramatis, dengan validasi naif melaporkan kinerja jauh lebih tinggi daripada metode ketat yang independen dari uji coba. Bagaimana pengembang model atau vendor mungkin tergoda merancang validasi agar tampak bagus, dan bagaimana Anda mengetahuinya?
- Kinerja tolok ukur sering tidak beralih menjadi kegunaan dunia nyata. Dapatkah Anda membayangkan skenario di mana AI 'menang' dalam tolok ukur tetapi gagal di kelas nyata — dan apa yang dikatakan kesenjangan itu tentang mengandalkan skor tolok ukur saja?
- Halaman ini mencatat bahwa desain tolok ukur itu sendiri dapat menyandikan atau memperkuat bias. Jika sebuah tolok ukur tersusun dari tugas-tugas tertentu, dalam bahasa tertentu, dari populasi tertentu, pembelajaran siapa yang akhirnya diukur — dan siapa yang diabaikan?

## Pendahuluan

Tolok ukur berfungsi sebagai landasan bukti bagi [[ai-education|penelitian AI dalam pendidikan]]. Ia menyediakan kumpulan data, tugas, dan metrik terstandardisasi yang memungkinkan peneliti membandingkan model, melacak kemajuan, dan mengidentifikasi mode kegagalan. Dalam penelitian basis pengetahuan ini, tolok ukur muncul di berbagai domain:

- **[[cstutorbench-slm-tutors|CSTutorBench]]** mengevaluasi model bahasa kecil untuk tugas tutorial ilmu komputer.
- **[[anvil-ai-educational-animations|ANVIL]]** menilai animasi pendidikan hasil AI terhadap alternatif yang dibuat manusia.
- **[[teaching-feedback-classification-benchmark|Tolok ukur umpan balik pengajaran]]** menilai transfer lintas bahasa pada klasifikasi [[ai-feedback-quality|kualitas umpan balik]].
- **[[cdpk-pedagogy-benchmark-llms|Pedagogy Benchmark (CDPK + SEND)]]** menguji pengetahuan pedagogis — strategi pengajaran, [[assessment|metode penilaian]], dan [[special-education|pedagogi pendidikan khusus]] — alih-alih pengetahuan konten, dan melaporkan "frontier nilai" biaya-versus-akurasi pada 97 model (sebagian besar tolok ukur umum menguji pengetahuan konten; pedagogi adalah dimensi tersendiri yang kritis bagi pendidikan).
- **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** menilai agen [[llm]] berbasis [[learning-design|desain pembelajaran]] pada 25,795 skenario desain pembelajaran, menunjukkan bahwa agen hibrida yang berlandaskan kerangka ISD klasik (ADDIE, Dick & Carey, Rapid Prototyping) mengungguli teori murni atau teknik murni — hasil tolok ukur dengan implikasi langsung bagi desain [[agentic-ai|AI agensial]] dalam pendidikan.
- **[[tutor-case-bench-challenging-behaviors-2026|TutorCaseBench]]** mendasarkan evaluasi tutor pada literatur kasus terdokumentasi alih-alih persona simulasi: 923 dialog dari kasus pendidikan khusus dan psikologi pendidikan, di mana model terkuat dari 11 model menemui intervensi terdokumentasi pada 55.8% kasus terbuka.

- **Adaptasi siswa sebagai kriteria tolok ukur yang eksplisit.** Teaching Monster Challenge menilai adaptasi terhadap persona siswa yang ditentukan, tetapi hakim LLM otomatisnya hanya memisahkan ekor yang lemah — sistem teratas mendekati plafonnya dan peringkatnya tidak sejalan dengan preferensi kerumunan (Spearman ρ = −0.17) ([[teaching-monster-pck-benchmark-2026|Lin dkk. (2026)]]).

### Mengapa tolok ukur penting dalam AIED

Tolok ukur terhubung ke [[ai-ed-evaluation]] dan [[assessment-validity]] — tanpa tolok ukur yang ketat, klaim tentang efektivitas [[intelligent-tutoring|tutor AI]] tidak dapat diverifikasi. Ia juga bersinggungan dengan [[bias-mitigation]], karena desain tolok ukur dapat menyandikan atau memperkuat bias. Ketegangan antara kinerja tolok ukur dan kegunaan dunia nyata dibahas di berbagai artikel, terhubung ke kekhawatiran [[transfer-of-learning]] dalam aplikasi [[generative-ai]].

- **Ketika metriknya, bukan sistemnya, yang gagal:** [[algorag-rag-theoretical-cs-education-2026|AlgoRAG]] mendapat BLEU-4 = 0.0000 pada seluruh 179 soal ujian [[cs-education|ilmu komputer]] teoretis sementara rubrik pedagogis enam kriteria memberi 0.7620, karena pembuktian yang setara secara logis lazim berbeda dalam notasi, nama variabel, dan strategi pembuktian. Skor nol lebih banyak berbicara tentang tumpang tindih n-gram daripada tentang kualitas jawaban, yang merupakan kasus umum menentang memperlakukan metrik permukaan sebagai angka utama bagi sistem AIED domain formal.
- **Tolok ukur kontrafaktual tingkat konstruk.** CFES-P24 mengungkapkan prinsip pembelajaran multimedia sebagai transformasi slide deterministik dan reversibel untuk mengaudit apakah MLLM merespons konstruk desain pembelajaran tertentu alih-alih menghasilkan penilaian holistik yang tampak masuk akal. Pilot yang dibekukan menunjukkan pengenalan konstruk (operasi, prinsip, perbaikan, lokalisasi bukti) pada 8/8 sementara penilaian komparatif (arah 6/8) dan kalibrasi keparahan (0/8) gagal — yang mendukung kartu skor berlapis alih-alih skor komposit.([[cfes-p24-multimodal-slide-auditing-2026]])

- **Tanamkan [[hallucination-risk|halusinasi]] dan energi dalam evaluasi, bukan hanya akurasi.** [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen dkk. (2026)]] menilai halusinasi sebagai entailment terhadap potongan berlisensi terbuka yang diambil (κ = 0.76 dengan penilaian ahli) dan mencatat 1.8 mWh per kueri, dan ablasi mereka menempatkan pengambilan di urutan pertama: LLM lokal tanpa pengambilan mendapat 52.3%, di bawah garis dasar TF-IDF 55.4%.

- **Verifikasi dapat mengalahkan penilaian pada konten yang dihasilkan.** [[diagramir-educational-math-diagram-evaluation|Kumar dkk. (2025)]] menerjemahkan balik diagram matematika yang dihasilkan ke representasi perantara yang dibatasi skema dan menjalankan pemeriksaan aturan deterministik, mencapai kesepakatan lebih tinggi dengan penilai manusia (Cohen's κ 0.48–0.56) daripada LLM-sebagai-Hakim (0.39–0.47) dan memungkinkan model kecil menyamai hakim terbaik dengan biaya 10× lebih rendah.
- **Evaluasi independen dari uji coba dalam tolok ukur fisiologis.** [[eeg-familiarity-automated-assessment-2026|Nanayakkara & Halloluwa (2026)]] menilai 15 model ML/DL untuk prediksi keakraban berbasis EEG dan menunjukkan bahwa pilihan skema validasi mengubah hasil utama secara dramatis: validasi silang berstrata standar memungkinkan kebocoran temporal dan melaporkan hingga 0.9853 F1, sementara validasi Group K-Fold yang independen dari uji coba menurunkan puncaknya menjadi 0.6038 F1. Pelajarannya — evaluasi yang sadar waktu/kebocoran sangat penting bagi tolok ukur pendidikan yang kredibel — meluas melampaui EEG ke tolok ukur mana pun yang menggunakan data berurutan atau terstruktur waktu.

- **Pergeseran distribusi adalah sumbu tolok ukur kedua di luar kebocoran.** Tolok ukur yang melaporkan skor dalam-distribusi sebuah pengklasifikasi dan skor transfernya melaporkan dua kuantitas berbeda: pengklasifikasi tingkat Bloom yang bertahan pada macro F1 0.88 pada bank soalnya yang terkurasi turun ke 0.48 dan 0.20 pada dua kumpulan soal hasil AI, dan pelatihan ulang pada data luar-distribusi berlabel memulihkan hingga 0.82, sehingga satu angka papan peringkat dalam-distribusi melebih-lebihkan apa yang akan dilakukan instrumen yang diterapkan ([[bloom-classifier-ai-assisted-questions-2026|Castanares dkk., 2026]]).

- **Korpus yang dibangun untuk menguji transfer lintas korpus.** ICLE++ menganotasi esai persuasif dengan skor holistik dan sepuluh skor tingkat ciri untuk menyingkap ketergantungan penelitian [[automated-essay-scoring|AES]] pada ASAP, yang esainya berbatas waktu dan hanya penutur asli sehingga membingungkan panjang dengan kualitas; model yang dilatih pada anotasi ciri bertransfer lebih baik lintas korpus daripada yang dilatih pada skor holistik saja ([[icle-plus-plus-essay-scoring|Li & Ng, 2026]]).

- **Tolok ukur bernorma manusia mungkin tidak mengukur konstruk yang sama bagi LLM.** [[assessment-latent-structure-human-llm-2026|Strugatski dkk. (2026)]] membandingkan struktur respons manusia dan LLM [[multimodal]] pada diagnostik [[chemistry-education|kimia]] dan ujian penalaran [[quantitative-research|kuantitatif]]; kongruensi faktor antara LLM dan manusia tetap di bawah garis dasar manusia–manusia dan analisis paralel mempertahankan jumlah faktor yang berbeda.

- **Keandalan adalah sumbu tolok ukur: jalankan berulang dan kesepakatan lintas model memisahkan butir yang dapat dipecahkan dari butir yang idiosinkratik-model.** [[croteau-mllm-visual-math-reasoning-refusal-2025|Croteau & Heffernan (2025)]] menjalankan enam model masing-masing tiga kali pada 376 butir matematika yang memerlukan gambar dan merilis testbed konsensusnya.
Stabilitas lintas-jalankan tingkat butir bertahan pada konsistensi 79.0%-85.4%, kappa Cohen berpasangan rata-rata lintas keluarga model adalah 0.54, dan 76 butir yang dipecahkan keenam model pada mayoritas-benar ("gold") ditambah 61 yang dipecahkan 3/3 ("ultra-gold") menjadi subset tolok ukur yang dapat direproduksi - akurasi satu kali jalan adalah dasar yang lemah untuk keputusan penerapan.

- **Horizon adalah sumbu tolok ukur, bukan detail.** [[educlaw-bench-pedagogical-llm-agents-2026|Lee dkk. (2026)]] menempatkan [[pedagogical-agent|agen tutor]] dalam hubungan 30 hari yang berkelanjutan dengan siswa simulasi dan menemukan setiap adaptor mendatar pada hari 5–10, tidak ada adaptor yang memimpin perolehan belajar pada lebih dari satu tingkat model dasar, dan kelima sumbu penilaian sebagian besar independen.

- **Tolok ukur tutorial yang dinilai terhadap tutor manusia alih-alih papan peringkat.** StudentBench mengacak 2,383 orang dewasa ke tutor AI, tutor manusia ahli langsung, dan kontrol video pada soal GRE yang baru ditulis, menemukan tutor AI gabungan secara statistik setara dengan tutor manusia (p=.015) dan 5.5-6.9 poin persentase di atas kontrol; papan peringkat kualitas pengajarannya, dibangun dari 2,028 perbandingan berpasangan ahli, memeringkat rencana pelajaran dan perilaku percakapan alih-alih seberapa banyak siswa belajar ([[studentbench-ai-human-tutoring-gre-2026|Northcutt dkk. (2026)]]).
- **Mengaudit tolok ukur kini menjadi kontribusi penelitian tersendiri.** Tiga artefak 2026 mendorong kerja tolok ukur melampaui agregasi papan peringkat. EduFair-Bench menahan siswa simulasi tetap dan memvariasikan atribut demografis, mengubah tolok ukur tutorial menjadi audit keadilan dengan metrik pedagogis tingkat giliran ([[edufair-bench-pedagogical-fairness-llm-tutors-2026]]). GeoVAD-Bench mendiagnosis konstruksi visual perantara — persepsi, kualitas bantu, pemanfaatan — alih-alih kebenaran akhir pada 600 soal [[math-education|geometri]] ([[geovad-bench-visual-chain-of-thought-geometry-2026]]). Penilaian ulang oleh ahli atas enam tolok ukur [[physics-education|fisika]] mengukur kesalahan yang dibawa skor semacam itu: 57.20% penolakan yang diaudit adalah cacat butir, 38.00% kesalahan penilai dan hanya 4.80% kegagalan model sejati ([[frontier-models-physics-benchmark-audit-2026]]). Bersama-sama mereka berargumen bahwa skor tolok ukur harus selalu dibaca bersama anggaran kesalahannya sendiri yang telah diaudit, disiplin yang sama yang diminta [[assessment-validity]] dari instrumen kelas.
- **Anotasi dan pembangkitan soal yang terpisah sebagai paradigma konstruksi.** Sebagian besar tolok ukur membangun pasangan soal–jawaban khusus tugas per butir atau per gambar, yang membuat perluasan ke tugas baru mahal, membuat data sulit digunakan ulang lintas tugas, dan menyisakan kendali terbatas atas bentuk dan kompleksitas soal. MUSE membalik urutannya: anotasi setiap karya seni sekali menjadi representasi terstruktur yang dapat digunakan ulang atas konten visual dan semantiknya, lalu instansiasi 12 tugas dari aturan pembangkitan yang telah ditetapkan, sehingga satu gambar menghasilkan instans evaluasi multi-pandangan dengan kesulitan dan format diperlakukan sebagai variabel desain eksplisit alih-alih produk sampingan ([[muse-vlm-artistic-image-benchmark-2026]]). Bukti korelasinya adalah argumen kedua bagi desain itu — ke-12 tugas mengukur kemampuan yang terkait tetapi non-redundan (Jigsaw Puzzle berkorelasi lemah dengan sebagian besar lainnya, ρ = 0.25 hingga −0.10), dan pada enam tolok ukur eksternal skor multimodal umum bertransfer secara tidak merata ke citra pendidikan artistik (BLINK Jigsaw vs. MUSE Jigsaw ρ = −0.20), yang merupakan kasus cakupan konstruk menentang pembacaan skor agregat tunggal mana pun sebagai proksi kemampuan yang relevan secara pendidikan ([[muse-vlm-artistic-image-benchmark-2026]]).
- **Pembangkitan keluaran multimodal adalah sumbu yang paling sering dihilangkan tolok ukur.** [[omniphys-multimodal-physics-benchmark-2026|Chen dkk. (2026)]] menilai 15,246 soal fisika dan 19,850 gambar dari [[k-12|sekolah menengah]] hingga universitas, termasuk subset penyuntingan diagram: menyintesis atau menyunting diagram fisika terstruktur ternyata lebih sulit daripada menjawab, dan model terkemuka tetap di bawah 70% penguasaan ketat.
- **Cakupan sains K-12 dan masalah saturasi.** Tolok ukur selaras NGSS untuk sains sekolah menengah pertama dan atas (1,078 + 1,150 butir sintetis, divalidasi tiga hakim) menemukan sembilan model berbobot terbuka di atas 90% akurasi sekali coba, sementara statistik butir klasik menunjukkan nilai kesulitan tinggi dan daya beda rendah: ukuran model tidak memprediksi kinerja, dan penulisnya bertanya apakah ujiannya terlalu mudah ([[llm-benchmark-secondary-science-topics-2026]]). Ini adalah kasus domain-spesifik untuk membaca statistik butir sebuah tolok ukur bersama papan peringkatnya.
- **Garis dasar trivial dan kebenaran dasar IRT sebagai pemeriksa akurasi utama.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden dkk. (2026)]] membangun FoundationalASSIST dari 1,722,169 interaksi ASSISTments dengan teks soal dan respons siswa aktual yang dipertahankan, menilai tugas [[knowledge-tracing|pelacakan pengetahuan]] terhadap garis dasar selalu-benar 51.3 persen, dan membaca kompetensi model terhadap estimasi IRT dua parameter yang dipasang pada data yang sama. Empat model terdepan melampaui garis dasar trivial sekitar lima poin (terbaik 56.2 persen), jatuh di bawah peluang dalam menilai daya beda butir, dan — kegagalan yang dapat dilihat tolok ukur yang dibangun untuk tujuan ini — memprediksi kebenaran 85.4 persen pada jawaban benar tetapi hanya 12.6 persen pada jawaban salah, sehingga keterampilan tampak mereka adalah bias optimisme.
- **Konfigurasi penilai itu sendiri adalah variabel.** [[llm-graders-computer-science-exams-2026|Habibullah dkk. (2026)]] menguji 171 konfigurasi penilaian pada ujian 570 siswa yang dinilai ganda dan menemukan bahwa prakata singkat "penilai ketat" mendorong 14 dari 17 model berbobot terbuka keluar dari pita nilai, lalu mereplikasinya dengan 162 konfigurasi pada ujian independen 1,038 siswa yang hasilnya mereproduksi kerentanan tetapi tidak arahnya. Konfigurasi terbaik (MAE 1.64/35, di bawah 2.61/35 yang dicapai penilai manusia satu terhadap yang lain) karena itu bukan bukti bahwa penilaian LLM berhasil — meskipun satu adaptor LoRA yang dilatih pada label manusia terkumpul membawa lima model kecil ke setara manusia sekaligus hampir menghapus sensitivitas persona.
- **Membatasi korpus agar klaim kemampuan dapat diatribusikan.** [[li-littlelearner-pedagogically-controlled-knowledge-exposure-2026|Li dkk. (2026)]] menyaring FineWeb-Edu menjadi 88B token materi K–5 Amerika Serikat dan melatih model 5B dari awal padanya, lalu memeriksa sambungannya melalui probe perilaku alih-alih skor — retensi mendekati nol pada bagian Beyond-K–5, keruntuhan pada butir Jeopardy Beyond-K–5, dan kurang dari separuh soal MathCAMPS Kelas 8 yang terpecahkan bahkan pada pass@1024. Karena paparan sebelumnya diketahui, kemampuan yang muncul setelah penskalaan, [[llm-training-and-fine-tuning|pasca-pelatihan]], atau contoh dalam konteks dapat dikreditkan kepada intervensi; penulisnya juga melaporkan bahwa batasnya tidak berbentuk manusia, karena model kadang mengalahkan keterampilan hilir sambil gagal pada prasyaratnya.
- **Aturan penilaian adalah bagian dari instrumen.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] menjalankan empat aturan pembaruan pelacakan pengetahuan pada urutan peristiwa ASSISTments 2012–13 yang sama, berbeda hanya dalam cara menilai baris berbantuan petunjuk, dan meregistrasikan perbandingan di balik pagar yang menahan separuh konfirmatori siswa sampai berkas registrasi tersedia. Mengkreditkan penyelesaian apa pun hampir tidak mengalahkan konstanta kesulitan keterampilan (AUC gabungan 0.604 vs. 0.595 pada 985,813 peristiwa ternilai) dan menyatakan 93.9 persen pasangan siswa–keterampilan tuntas terhadap 72.8 persen di bawah aturan yang membaca baris berbantuan sebagai percobaan pertama yang gagal (0.658) — pelajaran umumnya adalah bahwa label penguasaan ditentukan oleh aturan bukti, bukan oleh log.
- **Laporkan kemampuan model sebagai tingkat terkalibrasi, bukan hanya sebagai akurasi.** [[standardized-assessment-llm-english-proficiency-2026|Min dkk. (2026)]] memetakan 624 butir beranotasi ahli ke tingkat kemahiran bernama menggunakan 2,050 respons siswa, dan menemukan model terdepan melampaui plafon terkalibrasi — batas yang disembunyikan oleh persentase.

- **Aturan penilaian dapat dimainkan oleh model yang dilatihnya.** Metrik [[adaptive-learning|adaptivitas]] yang dimaksimalkan dengan mengulang satu keputusan terbaik menunjukkan bahwa desain tolok ukur harus menerbitkan argmax, menilai adaptasi sebagai selisih, dan melaporkan garis dasar di atas acak ([[llm-tutor-pedagogical-metric-degradation-2026|Domínguez Figaredo & Fernández De la Cruz, 2026]]).

## Miskonsepsi Umum

- **"Posisi di papan peringkat memberi tahu seberapa baik seorang tutor."** StudentBench **mengacak 2,383 orang dewasa ke kondisi tutor AI, tutor manusia ahli langsung, dan video** dan menilai terhadap tutor manusia alih-alih terhadap sistem lain. Tolok ukur yang diskalakan terhadap model lain menjawab pertanyaan yang tidak perlu dijawab siapa pun.
- **"Persona simulasi adalah dasar yang memadai untuk evaluasi tutor."** [[tutor-case-bench-challenging-behaviors-2026|TutorCaseBench]] mendasarkan evaluasi pada **literatur kasus terdokumentasi alih-alih persona simulasi**, menggunakan **923 dialog**. Persona siswa yang difabrikasi memungkinkan sistem lulus kasus yang tidak pernah terjadi.
- **"Tolok ukur dapat dipercaya tanpa memeriksa hakimnya."** Halusinasi dinilai sebagai **entailment terhadap potongan berlisensi terbuka yang diambil (κ = 0.76 dengan penilaian ahli)** — hakimnya divalidasi terhadap ahli sebelum skornya digunakan. Hakim otomatis yang tidak tervalidasi menghasilkan angka yang maknanya tidak diketahui.

## Konsep terkait

- [[ai-ed-evaluation]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[formative-assessment]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[automated-essay-scoring]]

## Artikel terkait
- [[tutor-case-bench-challenging-behaviors-2026]] — TutorCaseBench: mengevaluasi tutor LLM pada siswa dengan perilaku menantang (Park dkk. 2026)
- [[standardized-assessment-llm-english-proficiency-2026]] — Tolok ukur kemahiran bahasa Inggris 624 butir yang melaporkan kemampuan model sebagai tingkat terkalibrasi (Min dkk. 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[assessment-latent-structure-human-llm-2026]] — Apakah instrumen penilaian mengukur hal yang sama bagi manusia dan LLM? (Strugatski dkk. 2026)
- [[cdpk-pedagogy-benchmark-llms]] — Pedagogy Benchmark: pengetahuan pedagogis LLM (CDPK + SEND)
- [[jeon-isd-agent-bench-2026]] — ISD-Agent-Bench: menilai agen desain pembelajaran berbasis LLM
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Asisten basis pengetahuan OER AI on-premise: tolok ukur multi-dimensi
- [[authentic-products-authenticated-processes-2026]] — Dari produk autentik ke proses terautentikasi: penilaian autentik di pendidikan tinggi yang kaya AI
- [[llm-cognitive-diagnosis-handwritten-math]] — Menilai Model Bahasa Besar untuk Mendiagnosis Keterampilan Kognitif Siswa dari Pekerjaan Matematika Tulisan Tangan
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: Tolok Ukur Horizon Panjang untuk Agen LLM Pedagogis dengan Siswa Simulasi
- [[responsible-assessment-ai-era-stanford-2026]] — Penilaian yang Bertanggung Jawab di Era AI: Wawasan Utama dari Konferensi Berorientasi Masa Depan
- [[anvil-ai-educational-animations]] — ANVIL: Analogi dan Video untuk Dosen
- [[icle-plus-plus-essay-scoring]] — ICLE++: Memodelkan Ciri Berbutir Halus untuk Penilaian Esai Holistik
- [[teaching-monster-pck-benchmark-2026]]
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Menilai LLM Multimodal untuk Audit Slide
- [[diagramir-educational-math-diagram-evaluation]] — DiagramIR: tolok ukur untuk mengevaluasi diagram matematika yang dihasilkan
- [[eeg-familiarity-automated-assessment-2026]] — Mengotomatiskan Penilaian Siswa: Prediksi Keakraban Berbasis EEG
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Retrieval-Augmented Generation untuk Pendidikan Ilmu Komputer Teoretis -- Kerangka Evaluasi Komprehensif untuk Analisis Algoritma dan Teori Kompleksitas
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: konstruksi tolok ukur anotasi-dulu dan pembangkitan tugas, serta non-redundansi tingkat dimensi pada 12 tugas citra artistik (Zhu dkk. 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutor AI dan manusia menghasilkan perolehan belajar GRE yang setara
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluasi model terlatih untuk penilaian pedagogis soal pendidikan baru berbantuan AI
- [[llm-benchmark-secondary-science-topics-2026]] — Sebuah Tolok Ukur untuk Pemahaman LLM tentang Topik Sains Sekolah Menengah Pertama dan Atas
- [[llm-tutor-pedagogical-metric-degradation-2026]] — Delapan prinsip desain untuk tolok ukur tutor AI, diturunkan dari metrik yang dioptimalkan menjadi pengulangan (Domínguez Figaredo & Fernández De la Cruz 2026)
