---
title: "Desain Kurikulum"
created: "2026-06-02T10:44:35-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks, learning-commons]
updated: "2026-11-08T06:32:22-05:00"
translation_of: "concepts/curriculum-design"
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

> **Desain Kurikulum** — proses merencanakan dan menyusun apa yang diajarkan di seluruh mata kuliah, program, dan institusi, termasuk tujuan pembelajaran, pengurutan konten, strategi penilaian, dan progresi keterampilan. Di era AI, desain kurikulum harus menyeimbangkan pengetahuan fondasional dengan kompetensi AI yang sedang muncul, menentukan bukan hanya apa yang dipelajari siswa tetapi bagaimana mereka belajar bekerja dengan alat AI dan menilainya secara kritis.

## Pertanyaan yang Perlu Dipertimbangkan

- Desain kurikulum menanyakan apa yang harus dipelajari siswa pada tingkat program, sementara desain pembelajaran menanyakan bagaimana pada tingkat mata kuliah. Ketika AI membentuk ulang suatu disiplin, lapisan mana dari keduanya yang menurut Anda harus berubah lebih dulu?
- Karena [[generative-ai|AI generatif]] mengotomatisasi pekerjaan pada tingkat implementasi, sebagian pihak berargumen bahwa kurikulum harus bergeser ke arah desain sistem, abstraksi, dan [[critical-thinking|evaluasi kritis]]. Menurut Anda apa yang akan hilang dari siswa jika keterampilan tingkat rendah dikurangi penekanannya?
- Redesain kurikulum di era AI sering dibingkai sebagai keseimbangan antara kelancaran alat dan pengetahuan fondasional. Di mana Anda pernah melihat keseimbangan itu terlalu condong ke satu arah?
- Kerangka SAIL memperlakukan literasi AI sebagai sesuatu yang dirancah di sepanjang usia dan dirancang untuk menjawab 'kesenjangan digital' yang lebih dalam di luar akses. Bagaimana menanamkan literasi AI di seluruh kurikulum berbeda dari menambahkan satu mata kuliah AI?
- Jika setiap disiplin sekarang perlu menanamkan kompetensi AI di dalamnya, siapa yang bertanggung jawab atas perubahan kurikulum — instruktur, program, atau institusi — dan apa yang dibutuhkan pendidik agar berhasil melakukannya?
- Kurikulum adalah urutan keterampilan lintas tahun, bukan sekadar daftar topik. Bagaimana pandangan yang lebih panjang itu mengubah apakah sebuah 'unit literasi AI' benar-benar melekat?

## Pendahuluan

Desain kurikulum membahas *apa* dari pendidikan pada tingkat program, melengkapi [[learning-design]] yang membahas *bagaimana* pada tingkat mata kuliah. Artikel-artikel dalam basis pengetahuan ini mengeksplorasi bagaimana AI membentuk ulang kurikulum lintas disiplin — dari rekayasa perangkat lunak hingga arsitektur hingga pendidikan hijau — dan bagaimana pendidik merancang kurikulum yang menanamkan literasi AI tanpa mengorbankan dasar-dasar disipliner.

### Tema penelitian utama

**Mendesain ulang kurikulum untuk era AI** adalah tantangan utamanya. **[[reshaping-cs-education-genai|Lee et al.]]** menyintesis temuan dari lokakarya internasional tentang pembentukan ulang [[cs-education|pendidikan ilmu komputer]] sarjana, berargumen bahwa ketika GenAI mengotomatisasi pemrograman pada tingkat implementasi, kurikulum harus bergeser ke arah desain sistem, abstraksi, dan evaluasi kritis — sambil mengurangi penekanan pada detail implementasi tingkat rendah. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** memformalkan Agentic Software Engineering sebagai disiplin tersendiri dengan kurikulum 21 modul yang berfokus pada "evolusi niat" dan disiplin praktisi yang diperlukan untuk mengelola [[agentic-ai|agen AI]]. Keduanya terhubung ke [[ai-literacy]] dan [[scaffolding]].

Dengan membaca perubahan itu sebagai sistemik alih-alih aditif, [[rewriting-curriculum-genai-pedagogy-2026|Sabani et al. (2026)]] mentriangulasi [[meta-analysis-systematic-review|tinjauan scoping]], pemetaan bibliometrik atas 209 rekaman, 36 artikel, dan sepuluh wawancara pemimpin akademik menjadi lima pergeseran — termasuk transmisi pengetahuan yang berganti menjadi pengembangan kapabilitas dan eksperimen lokal menjadi tata kelola institusional.

**Pemetaan dan analisis kurikulum** menggunakan AI untuk memahami kurikulum yang ada. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng et al.]]** menganalisis 23 silabus dari mata kuliah rekayasa perangkat lunak berbantuan AI, mengidentifikasi tema-tema umum — [[prompt-engineering|rekayasa prompt]], tinjauan kode dengan AI, [[ethics|pertimbangan etis]] — dan menurunkan panduan desain yang menekankan penyeimbangan kelancaran alat dengan pengetahuan fondasional. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** menerapkan metode komputasional untuk membandingkan struktur mata kuliah ilmu komputer antar institusi.

Pembobotan mengubah apa yang dilaporkan sebuah analisis kurikulum: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath et al. (2026)]] meminta GPT-o3-mini mendistribusikan 100% ke tujuh keterampilan perusahaan untuk masing-masing dari 48 asesmen, mencapai alpha Krippendorff 0.81 terhadap bobot ahli, tetapi kesepakatan berbalik negatif untuk keterampilan yang tidak pernah dinyatakan secara eksplisit dalam deskripsinya (-0.19).

**Struktur modular bertahan lebih lama daripada konten saat ini.** Sebuah pola berulang ketika bidang bergerak lebih cepat daripada siklus peninjauan: inti yang stabil berupa [[ai-literacy|literasi AI]], penilaian kritis, deteksi bias dan [[ethics]], dengan konten spesialisasi dan alat yang tersedia secara lokal dilekatkan sebagai modul dan ditinjau ulang setiap enam hingga dua belas bulan ([[bursic-ai-residency-education-curriculum-2026|Bursic et al. (2026)]]). [[medical-education|Pendidikan kedokteran]] pascasarjana adalah kasus yang dinyatakan, tetapi prinsipnya dapat digeneralisasi: program berkomitmen pada kompetensi yang bertahan melewati pergantian alat dan menjadwalkan lapisan yang spesifik-alat untuk diganti.

**Integrasi literasi AI** menanamkan kompetensi AI di seluruh disiplin. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** menyediakan kerangka literasi AI berperancah yang dapat diterapkan pada semua usia dan tahap pendidikan, menjawab [[digital-divide|kesenjangan digital]] tingkat kedua dan ketiga. **[[tracing-genai-literacy-interaction-patterns]]** mengkaji bagaimana literasi AI berkembang melalui pola interaksi. **[[hingle-collaborative-ai-literacy-2025]]** mengeksplorasi pendekatan kolaboratif dalam pengembangan kurikulum literasi AI, yang terhubung ke [[collaborative-learning]].

LearnAI menunjukkan bagaimana bentuk tersemat itu terlihat: lapisan paparan luas berupa presentasi singkat di dalam 18 mata kuliah yang sudah ada di lima disiplin (293 siswa), dipasangkan dengan sesi ko-kreasi satu-satu yang bersifat sukarela dan dijalankan oleh tutor sebaya sarjana terlatih, sehingga pembelajar dengan kemampuan beragam menghadapi tugas AI pada tingkat mereka sendiri ([[learnai-just-in-time-ai-cocreation-university-2026|Qu et al. (2026)]]).

Integrasi dalam praktik tertinggal dari kerangka kerjanya. [[critical-media-literacy-education-2026|Santos-Albardía et al. (2025)]] menemukan hanya 13.8% siswa pendidikan dan jurnalistik yang disurvei menyatakan bahwa tugas kuliah mereka membahas analisis media kritis, dibandingkan 97.8% yang menilainya penting, dan wawancara ahli mereka melacak kesenjangan itu ke [[teacher-education|pelatihan guru]] yang memprioritaskan keterampilan teknis dan instruksional di atas pendidikan media.

Sebuah tinjauan PRISMA atas 39 studi STEAM (2016–2025) menemukan ketidakseimbangan serupa dalam elemen literasi AI: implementasi mengembangkan literasi teknis — konsep dasar AI, [[computational-thinking|berpikir komputasional]], [[statistics-and-data-science-education|literasi data]] — sementara kurang mengembangkan kesadaran etis, imajinasi kreatif, serta mencipta, mengelola, dan mendesain dengan AI, sehingga mengaudit setiap unit terhadap elemen-elemen itu adalah respons praktisnya ([[niri-steam-ai-literacy-review-2026|Niri et al., 2026]]).

[[student-experience|Suara siswa]] adalah masukan desain yang lain: 84% dari 166 mahasiswa bisnis tahun akhir menginginkan GenAI diajarkan di unit mereka dan 85% melihatnya sebagai hal esensial untuk employability, sementara hanya 7% yang pernah mempelajarinya dari universitas mereka ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

Sebuah tinjauan atas 42 studi [[ai-education|pendidikan AI]] pra-universitas menemukan kurikulum yang bergerak dari konten teknis menuju model berbasis kompetensi yang dibangun di atas kerangka seperti AI4K12 dan Five Big Ideas in AI, dengan [[ai-literacy]] diperlakukan sebagai kompetensi lintas kurikulum sementara instrumen terstandardisasi untuk menilainya masih belum ada ([[caruana-pre-university-ai-education-slr-2026|Caruana et al. (2026)]]).

Instruktur dan pemberi kerja hanya sepakat tentang pentingnya satu dari 26 keterampilan AI — menetapkan ekspektasi realistis untuk pekerjaan yang diperkuat AI — dan hanya tiga dari 26 yang diajarkan oleh separuh instruktur atau lebih, bukti laporan itu tentang kesenjangan keterampilan AI antara pendidikan tinggi dan pemberi kerja ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

Desain aktivitas ML K-12 tetap di permukaan: tinjauan di balik kerangka ICE-T menemukan bahwa penggunaan tak terlihat, interaksi tombol, dan penyebaran model mencakup hampir 60% aktivitas pembelajaran terawasi yang dikodekan, penciptaan terbuka hanya muncul dua kali, dan perspektif teknis serta sosial hadir bersamaan hanya pada sekitar 3% aktivitas ([[icet-ml-education-trust-2026|Haritz et al., 2026]]).

**Inovasi kurikulum [[discipline-specific-aied|spesifik domain]]** menerapkan desain kurikulum pada bidang tertentu. **[[genai-architecture-education]]** mengeksplorasi bagaimana AI generatif membentuk ulang [[pedagogy]] desain arsitektur. **[[talebzadeh-ai-green-education-2026]]** mengkaji integrasi AI dalam kurikulum pendidikan hijau. **[[connected-ai-lesson-planning-vietnam]]** dan **[[llm-cultural-relevance-k12]]** membahas [[culturally-relevant-pedagogy|desain kurikulum yang responsif secara kultural]].

**Tanamkan AI di dalam disiplin, bukan di sampingnya.** Kurikulum AI tiga tingkat (pengantar, aplikasi, lanjut) melipat [[machine-learning|machine learning]] ke dalam topik teknik termal yang sudah ada di sepanjang mata kuliah 39.1 jam alih-alih menambahkan mata kuliah pilihan ilmu komputer, sehingga menghindari beban tambahan bagi mahasiswa teknik mesin dan merilis silabus, data, serta kodenya secara terbuka ([[mechanical-engineering-ai-curriculum-2026|Li et al. (2026)]]).

Kasus jurnalistik menunjukkan varian yang mengutamakan nilai: perancah triadis nilai–proses–kompetensi menggerakkan siswa dari peliputan yang sepenuhnya manusiawi ke pekerjaan terintegrasi AI, namun 8 dari 9 (89%) melaporkan keyakinan dalam keputusan etis sementara butir survei tentang kepengarangan dan bias menunjukkan pemahaman yang hanya dangkal ([[ying-genai-journalism-assessment-2026|Ngu and Weller (2026)]]).

**Kerangka [[governance|institusional]]** membahas perubahan kurikulum dalam skala besar. **[[finkelstein-principled-ai-education-2025]]** dan **[[finkelstein-principled-ai-education-2025]]** menyediakan prinsip untuk mengintegrasikan AI di seluruh program pendidikan. **[[ai-adoption-training-public-sector]]** mengkaji hambatan adopsi kurikulum AI dalam pendidikan sektor publik.

**Mengurutkan AI di sepanjang program.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli et al.]] mengusulkan kerangka "tahan, lalu amplifikasi" yang mengurutkan AI generatif pada tingkat program: menahan alat generatif selama suatu kapasitas sedang terbentuk, lalu mengembalikannya untuk memperkuat kapasitas itu setelah siswa mampu mengarahkannya dan menilai hasil yang diberikannya. Diatur oleh kriteria membentuk-versus-mengalihkan (apakah suatu rentang pekerjaan membangun kapasitas atau sekadar melewatkannya melalui alat), kerangka itu menghubungkan desain kurikulum dengan [[cognitive-offloading]], [[self-regulated-learning]], dan [[academic-integrity]], dengan titik pemeriksaan yang sulit dipalsukan pada setiap engsel tahan-ke-amplifikasi.

Tuas untuk tahap tertinggi bukanlah lebih banyak mata kuliah: di sepanjang 89 proyek capstone bersponsor, kemajuan dari [[career-development-and-readiness|Workforce Readiness]] Level 6 ke 7 dibatasi oleh pengalaman yang tertanam di industri — co-op dan proyek Manufacturing Extension Partnership — sehingga gelar membutuhkan pembelajaran terintegrasi kerja alih-alih satu lagi mata kuliah pilihan teknis ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al. (2026)]]).

Konsekuensi kapabilitas model pada tingkat kurikulum adalah bahwa desain yang tahan AI kedaluwarsa. Pendidik komputasi menggambarkan pengkalibrasian tugas terhadap apa yang belum bisa dilakukan model dan menyaksikan kalibrasi itu luput — soal-soal seorang instruktur keamanan siber menuntut [[problem-solving|pemecahan masalah]] sungguhan tujuh atau delapan bulan sebelumnya dan kemudian begitu saja terpecahkan — dengan seorang fasilitator memperkirakan masa simpan sekitar satu semester. Temuan struktural lokakarya itu adalah hampir setiap adaptasi dilakukan oleh instruktur individual di dalam satu mata kuliah, tanpa koordinasi institusional yang dibutuhkan sebuah respons kurikulum yang tahan lama ([[computing-assessment-genai-workshop-report-2026|Akbar et al., 2026]]).

**Penyelarasan seluruh mata kuliah ketika AI generatif diizinkan.** Redesain tahun 2026 atas mata kuliah pengantar [[physics-education|fisika]] nuklir dan partikel ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al.]]) mengintegrasikan tiga jenis aktivitas dengan peran yang berbeda — kuliah untuk konsep dan notasi, tutorial untuk praktik analitik standar, dan pekerjaan rumah sebagai komponen eksploratif "berbentuk penelitian" berisi soal multi-metode yang luar biasa sulit. Gesekan yang dilaporkan (prasyarat pemrograman yang tidak dinyatakan, waktu yang tidak memadai untuk memahami alih-alih sekadar memperoleh jawaban, dan ketidakselarasan antara kuliah, tutorial, pekerjaan rumah dan [[summative-assessment|ujian]]) menggambarkan bahwa mengizinkan AI generatif memaksa kerja penyelarasan kurikulum di seluruh mata kuliah alih-alih perubahan pada satu jenis tugas; struktur yang mereka rekomendasikan mempertahankan pekerjaan eksploratif yang mengizinkan AI sebagai tugas lanjut berbobot bonus sementara ujian tertulis tanpa bantuan menentukan nilai.

**Kedalaman penyelarasan, bukan frekuensi penggunaan, yang membedakan pola integrasi.** Di sepanjang 17 kasus modul bisnis, enam mengintegrasikan GenAI secara sistematis di seluruh pengajaran, pembelajaran dan penilaian (konstruktif), sembilan melakukannya secara tidak konsisten (campuran) dan dua secara sporadis (ad hoc); kasus konstruktif melaporkan hasil keterlibatan, kapabilitas, dan relevansi kurikulum yang paling kuat ([[zhou-constructive-alignment-genai-business-2026|Zhou et al. (2026)]]).

**Nasihat penyelarasan konstruktif di bawah pengujian kritis.** Ketika sumber-sumber di atas melaporkan penyelarasan dalam praktik, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes et al. (2026)]] membaca panduannya sendiri sebagai sebuah wacana. [[qualitative-research|analisis wacana kritis]] mereka atas 14 karya literatur kelabu yang terbit dari November 2022 hingga April 2025 — sebagian besar halaman institusional dan bab dari [[educational-development|unit pembelajaran dan pengajaran]] yang berposisi sentral — menemukan penyelarasan konstruktif disajikan sebagai masalah efisiensi: AI generatif adalah "cara yang efektif dan efisien untuk menyusun rubrik" yang dapat "merampingkan prosesnya", dianthropomorfiskan sebagai "seorang ahli dan asisten pendidikan", "mitra sparring" atau "asisten cerdas dalam desain instruksional", sementara staf akademik hanya memasok "keahlian materi pelajaran" dan alat itu mengambil alih "kerja berat mengembangkan tujuan pembelajaran, mengorganisasi konten mata kuliah ... dan menyelaraskan komponen mata kuliah". Resep prompt salin-tempel dan templat bernomor membingkai CA sebagai produk yang dapat distandardisasi, menghasilkan tiga mode kegagalan: performativitas (penyelarasan yang hanya tampak selaras), penghapusan konteks situasional dan kritis, dan CA yang dangkal yang menyamakan penyelarasan dengan dimensi konstruktif. Remedi mereka mengurutkan ulang alur kerja desain kurikulum — pendidik harus memahami CA cukup baik untuk mengarahkan, mengevaluasi, dan menolak keluaran AI sebelum mendelegasikan bagian mana pun darinya — dan membatasi alat apa pun pada agen [[rag|retrieval-augmented]] institusional yang berakar pada kebijakan, rubrik, dan atribut lulusan lokal, dengan peran "tutor liminal" yang memperluas alih-alih menggantikan hubungan [[educational-development|pengembang]].

**Menghasilkan tugas pemodelan yang selaras kurikulum.** Platform bertenaga AI dapat menjawab kurangnya waktu dan sumber daya guru untuk merancang tugas [[math-education|pemodelan matematika]] bermutu tinggi dengan menghasilkan soal yang selaras kurikulum dan rekomendasi pedagogis yang berakar pada prinsip desain dan generasi [[rag|retrieval-augmented]] — pendekatan yang diilustrasikan dengan variasi langsung dalam matematika sekolah menengah ([[ai-modeling-problem-generation-platform-2026]]). Bacaan mata kuliah sendiri kini juga menjadi sasaran generasi: Sidorkin (2026) menggantikan buku teks komersial dengan bacaan mingguan yang dihasilkan AI dalam mata kuliah kepemimpinan pendidikan pascasarjana, dan meskipun siswa menilainya berguna dan 75 persen setuju bahwa mereka belajar lebih banyak daripada di mata kuliah yang sebanding, 4,487 halaman log hanya memuat sitasi dalam teks bergaya APA pada sekitar 0.80 persen halaman dan memasangkan kampus atau sistem bernama dengan klaim kebijakan yang tegas pada sekitar 1.03 persen halaman tanpa sumber yang dapat diverifikasi. Pelajaran untuk materi kurikulum adalah memperlakukan bacaan yang dihasilkan sebagai produksi draf di bawah tinjauan instruktur, menganggarkan tenaga instruktur untuk desain prompt dan verifikasi, serta mengurasi sumber yang sudah terverifikasi ke dalam asisten alih-alih membiarkan siswa menyimpulkan kualitas sumber dari konteks.

**Perencanaan pembelajaran berbantuan AI pada lapisan kurikulum-ke-kelas.** Pada titik ketika kurikulum menjadi pelajaran yang diajarkan, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo dan Tahir (2025)]] membandingkan secara eksperimental rencana buatan guru dengan rencana berbantuan ChatGPT dalam [[stem-education|STEAM]] [[arts-design-and-media-education|pendidikan seni]] anak-anak, dan menemukan rencana berbantuan AI dinilai jauh lebih tinggi oleh enam profesor ahli (median 20.5 vs. 17.6, p = .002, efek besar). Mereka menunjukkan bahwa hasilnya bergantung pada bagaimana guru mendelegasikan: metode yang direkomendasikan mengisi celah konten dalam pelajaran yang garis besarnya disusun sendiri oleh guru (mempertahankan [[agency|otonomi]] desain guru) alih-alih mendelegasikan seluruh rencana, dan mereka menyumbangkan templat prompt Peran–Instruksi–Tujuan Akhir untuk generasi yang reprodusibel dan terkendali mutunya — bukti bahwa perencanaan pembelajaran AI paling kuat ketika tertanam di dalam keputusan kurikulum guru, bukan menggantikannya. Dalam pendidikan sains, validasi ahli mencapai putusan serupa tentang desain platform: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli dan Yildirim (2026)]] meminta sebelas spesialis [[science-education]] menilai ChatGPT-4 dan sebuah alat yang berfokus pada pendidikan (Teacher's Buddy) atas rencana kelas enam yang diselaraskan dengan kurikulum Turki yang direvisi dan model Engineering [[design-based-research|Design-Based]] Learning. Platform yang berfokus pada pendidikan memperoleh skor lebih tinggi pada kedelapan kriteria mutu — termasuk tahap yang padat umpan balik dan penyelarasan kurikulum — bukti bahwa menanamkan struktur pedagogis ke dalam AI menghasilkan keluaran yang lebih selaras; namun sebagian ahli tetap lebih menyukai rencana dari alat serbaguna karena penekanan sosial-emosionalnya yang lebih kuat, dan 7 dari 11 menilai rencana itu "dapat diterapkan dengan koreksi" alih-alih langsung dapat digunakan. Pilihan platform dan pembingkaian prompt, bukan hanya AI-nya sendiri, membentuk seberapa baik rencana yang dihasilkan selaras dengan standar kurikulum dan model proses.

Struktur, bukan frasa prompt, yang membuat penyusunan draf oleh AI dapat diandalkan dalam produksi: pipeline Curriculum-as-Code dari [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] memangkas konteks secara agresif dan menghasilkan materi bagian demi bagian di sepanjang 28 konteks proyek, yang memotong waktu persiapan instruktur dari sekitar delapan menjadi dua jam per instruksi dan tidak menyisakan [[hallucination-risk|halusinasi]] konseptual atau matematis yang harus ditangkap [[human-in-the-loop-ai|tinjauan manusia]].

### Koneksi ke konsep terkait

Desain kurikulum terhubung langsung ke [[learning-design]] — kurikulum mendefinisikan apa, instruksi mendefinisikan bagaimana. Ia terhubung ke [[ai-literacy]] karena menanamkan kompetensi AI adalah tantangan kurikulum utama, ke [[teacher-role]] dan [[educational-development]] karena perubahan kurikulum menuntut persiapan pendidik, dan ke [[scaffolding]] karena kurikulum yang dirancang baik merancah pengembangan keterampilan lintas mata kuliah dan tahun. Koneksi [[higher-ed]] dan [[k-12]] mencerminkan relevansi desain kurikulum lintas jenjang pendidikan.

**Memilih satu kerangka literasi AI berarti memilih kosakata yang belum pernah disilangkan oleh siapa pun.** Dalam tinjauan scoping atas 50 kerangka K-12, [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach et al. (2026)]] menemukan definisi kompetensi yang konvergen pada dimensi kognitif, afektif, perilaku, etis dan sosial sementara label dan konstruknya tidak selaras. Hanya kerangka ABCE yang mendekati tradisi pengukuran bersama, tervalidasi di Hong Kong, Shanghai dan Taiwan, dan progresi lintas jenjang kelas diusulkan berulang kali dan tidak diuji di mana pun.

## Miskonsepsi Umum

- **"Sebuah [[llm|LLM]] dapat memetakan kurikulum sekali setelah divalidasi dengan reliabilitas tinggi."** GPT-o3-mini mendistribusikan **100% ke tujuh keterampilan perusahaan untuk masing-masing dari 48 asesmen**, mencapai **alpha Krippendorff 0.81** terhadap bobot ahli — dan **kesepakatan** runtuh pada keterampilan tertentu. Reliabilitas keseluruhan yang tinggi dengan kesepakatan yang tidak merata adalah pola yang perlu diperiksa sebelum memercayai pemetaan itu.
- **"Menanamkan literasi AI berarti menambahkan satu mata kuliah."** LearnAI menunjukkan bentuk tersematnya: **lapisan paparan luas berupa presentasi singkat di dalam 18 mata kuliah yang sudah ada di lima disiplin (293 siswa)**. Paparan itu didistribusikan di seluruh kurikulum alih-alih dikumpulkan dalam satu unit.
- **"Siswa sudah datang dengan kemampuan mengevaluasi media secara kritis."** Hanya **13.8% siswa pendidikan dan jurnalistik yang disurvei** menyatakan tugas kuliah mereka membahas analisis media kritis, dibandingkan **97.8% yang menilainya penting**. Kesenjangan antara menghargai suatu keterampilan dan diajari keterampilan itu adalah celah kurikulumnya.

## Konsep terkait
- [[pedagogical-partnerships]] — Kemitraan Pedagogis
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Payung: pedagogi dan strategi pengajaran dalam pendidikan AI
- [[recommender-systems-and-learning-paths]]

## Artikel terkait
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Pemetaan keterampilan berbobot dan tervalidasi ahli untuk akreditasi
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Analisis wacana kritis atas panduan GenAI untuk penyelarasan konstruktif (McInnes et al. 2026)
- [[icet-ml-education-trust-2026]] — Addressing Trust in AI Systems through Education: A Didactic Perspective
- [[refrain-amplify-genai-curriculum-2026]] — Kerangka kurikulum tahan-lalu-amplifikasi untuk mengurutkan GenAI (Torres-Sahli et al. 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Project-Based AI Education Curriculum in Thermal Engineering
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Kerangka Workforce Readiness Level untuk manufaktur cerdas di era AI
- [[rewriting-curriculum-genai-pedagogy-2026]] — Menulis ulang kurikulum: perubahan pedagogis yang digerakkan GenAI
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Kerangka Keterampilan AI: 26 keterampilan yang dapat dinilai untuk pemetaan kurikulum
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: Ko-Kreasi AI Tepat-Waktu Lintas Disiplin
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[niri-steam-ai-literacy-review-2026]] — Pendidikan STEAM untuk literasi AI: tinjauan sistematis
- [[caruana-pre-university-ai-education-slr-2026]] — Menyiapkan pembelajar dan guru untuk masa depan yang digerakkan AI: SLR pendidikan AI pra-universitas (Caruana et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Platform bertenaga AI yang menghasilkan soal pemodelan matematika (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI dalam Pendidikan Fisika Partikel: Masalah Penelitian dan Keterampilan Fondasional
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Laporan dari lokakarya daring tentang penilaian komputasi di era AI generatif
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - kerangka kompetensi bertemu pada lima dimensi tanpa kosakata bersama atau penyilangan
- [[bursic-ai-residency-education-curriculum-2026]] — Hambatan mengintegrasikan AI ke dalam kurikulum residensi: wawancara kualitatif dengan dua belas pemimpin dokter
