---
title: "Graf Pengetahuan"
created: "2026-08-09T16:55:17-04:00"
connected_resources: [context-aideatext]
type: concept
foundations: [ai-education, curriculum-design]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, student-modeling]
confidence: high
connected_concepts: [adaptive-learning, knowledge-tracing, intelligent-tutoring, cognitive-diagnosis, student-modeling, learning-analytics, curriculum-design, learning-design, generative-ai, llm, rag, agentic-ai, ai-technologies, recommender-systems-and-learning-paths]
connected_articles: [incipit-axiom-grounded-scaffolding-literary-creation-2026, ontology-layered-hybrid-knowledge-model-personalized-elearning-2026, learnity-graphs-lifelong-learning-framework-2026, veriforge-narrative-drafting-scaffolding-2026, quantum-education-its, multimodal-knowledge-graph-educational-reasoning, coursegraph-cs-course-comparison-2026, proprl-prerequisite-relation-learning, knowledge-gap-detection-ai-tas, visual-query-tracer-declarative-logic-learning, fair-explainable-edu-recommendations, hybrid-cf-kg-recommendation-multimodal-teaching-2026, xie-hillm-cd-2026, graph-its-adaptive-algorithms-2026, cogevol-learning-environment-generation-2026, ai-multifactorial-virology-lab-teaching-2026]
updated: "2026-11-24T15:51:30-05:00"
translation_of: "concepts/knowledge-graph"
source_updated: "2026-11-19T13:45:26-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Graf pengetahuan**: representasi terstruktur atas konsep dan hubungannya yang digunakan untuk memodelkan pengetahuan domain, pemahaman siswa, dan ketergantungan belajar dalam sistem [[ai-education|AI dalam pendidikan]]. Graf pengetahuan memungkinkan sistem AI bernalar tentang apa yang diketahui siswa, apa yang perlu mereka pelajari berikutnya, dan bagaimana konsep-konsep saling berhubungan.

## Pertanyaan yang Perlu Dipertimbangkan

- Graf pengetahuan menangkap bukan hanya konsep tetapi juga hubungannya, yakni prasyarat, kemiripan, dan hierarki. Mengapa mengetahui bagaimana konsep saling berhubungan mungkin lebih berguna bagi sistem adaptif daripada daftar keterampilan yang datar?
- Bagaimana hubungan prasyarat dalam bidang seperti bidang Anda? Dapatkah Anda memikirkan topik di mana siswa secara rutin kesulitan karena mereka kehilangan konsep fondasi yang akan diungkap oleh graf itu?
- Halaman ini menjelaskan penggunaan graf pengetahuan untuk mendeteksi kesenjangan pengetahuan, tempat siswa kehilangan konsep fondasi. Bagaimana pengungkapan kesenjangan itu dapat mengubah apa yang diputuskan tutor AI untuk diajarkan berikutnya?
- Graf pengetahuan dapat dibangun secara manual atau otomatis oleh LLM dari teks pendidikan. Apa risikonya membiarkan AI menyusun struktur konsep yang kemudian akan menjadi dasar penalaran tutor?
- Jika graf pengetahuan menyediakan struktur domain yang menjadi dasar penalaran agen AI, apa yang terjadi pada kepercayaan dan akurasi ketika graf itu sendiri mengandung kesalahan atau hubungan yang bias?
- Graf pengetahuan digambarkan sebagai tulang punggung struktural yang memungkinkan diagnosis berbutir halus dan jalur yang dipersonalisasi. Dalam [[teacher-role|pengajaran]] atau desain Anda sendiri, apa yang Anda butuhkan dari graf pengetahuan tentang mata pelajaran Anda, dan apa yang akan ditinggalkannya?

## Pendahuluan

Graf pengetahuan menyediakan tulang punggung struktural bagi banyak sistem pendidikan cerdas. Berbeda dari daftar keterampilan atau konsep yang datar, graf pengetahuan menangkap hubungan prasyarat, kemiripan, dan organisasi hierarkis, hal yang esensial bagi [[adaptive-learning|pembelajaran adaptif]], [[knowledge-tracing|pelacakan pengetahuan]], dan [[student-modeling|pemodelan siswa]].

## Cara graf pengetahuan digunakan dalam AIED

Graf pengetahuan merupakan mekanisme struktural yang berulang di seluruh [[research-methods-aied|penelitian]] AIED, dengan beberapa peran yang berbeda:

- **Model [[knowledge-tracing|pelacakan pengetahuan]]** menggunakan graf konsep untuk mempropagasikan estimasi kemahiran siswa antar keterampilan yang terkait, sehingga meningkatkan akurasi prediksi ketika data jarang.
- **Sistem [[student-modeling|pemodelan siswa]]** memanfaatkan graf pengetahuan untuk merepresentasikan apa yang diketahui siswa secara bermakna secara semantik, sehingga memungkinkan diagnosis berbutir halus.
- **Platform [[adaptive-learning|pembelajaran adaptif]]** menggunakan graf prasyarat untuk menyusun urutan konten dan merekomendasikan jalur [[personalized-learning|pembelajaran yang dipersonalisasi]].
- **Pilihan algoritma atas graf mengubah hasil.** Dalam G4L, mempropagasikan penguasaan melalui Evolving Knowledge Space Graph dengan propagasi pengetahuan Bayesian menghasilkan +24% pengetahuan terukur (0,717 → 0,887), dibandingkan +5% untuk Knowledge Space Theory dan +1% untuk Weighted Distance Dependent Induction ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).
- **Kerangka [[cognitive-diagnosis|diagnosis kognitif]]** seperti [[xie-hillm-cd-2026|HiLLM-CD]] menyusun pohon konsep dari teks pendidikan menggunakan LLM, sehingga menghilangkan anotasi manual.
- **Tutoring yang diperkaya graf pengetahuan:** [[quantum-education-its|ITAS]] menggunakan graf pengetahuan konsep kuantum (dengan hubungan prasyarat yang eksplisit) untuk menggerakkan sistem tutoring multi-agen, menelusuri graf untuk memilih topik berikutnya bagi materi yang kontraintuitif.
- **Pemodelan kurikulum dan mata kuliah:** [[coursegraph-cs-course-comparison-2026|CourseGraph]] membandingkan struktur mata kuliah ilmu komputer antar institusi menggunakan representasi graf; [[learnity-graphs-lifelong-learning-framework-2026|graf Learnity]] memodelkan jalur [[lifelong-learning|belajar sepanjang hayat]]. Sebuah graf mata kuliah juga dapat mendasari pengajarannya itu sendiri: dalam modul laboratorium virologi, asisten hanya menjawab dari graf tersebut dan mengarahkan siswa antar tingkat latihan, dan kelas yang diredesain mengungguli kelas yang tidak diubah, meski keempat komponennya hadir bersamaan ([[ai-multifactorial-virology-lab-teaching-2026|Liu dkk., 2026]]).
- **Pembelajaran relasi prasyarat:** [[proprl-prerequisite-relation-learning|ProPrL]] mempelajari [[recommender-systems-and-learning-paths|relasi prasyarat]] antar konsep, memformalkan sisi yang dikodekan oleh graf pengetahuan.
- **Penemuan prasyarat yang dapat dipelajari menggantikan prior ahli.** Sebuah sintesis survei oleh [[xu-graph-knowledge-tracing-survey-2026|Xu et al. (2026)]] menemukan bahwa pelacak berbasis graf dapat mempelajari struktur prasyarat dari data respons selama pelatihan, menggantikan prior yang dikarang pakar. GKT memparameterkan matriks ketetanggaan yang dapat dipelajari secara end-to-end, SKT-L mempelajari prasyarat saat pelatihan, PKT menerapkan regularisasi L1 untuk memulihkan graf prasyarat yang jarang dan dievaluasi terhadap struktur kebenaran dasar dengan skor F1, dan kerangka Bayesian variasional PSI-KT menyimpulkan graf prasyarat berarah yang lebih selaras dengan prasyarat beranotasi manusia daripada model baseline.
- **Deteksi kesenjangan pengetahuan:** [[knowledge-gap-detection-ai-tas|Deteksi kesenjangan pengetahuan]] menggunakan penalaran berbasis graf dalam asisten pengajaran AI untuk mengidentifikasi tempat siswa kehilangan konsep fondasi.
- **[[multimodal|Multimodal]] dan penalaran yang dapat dijelaskan:** [[multimodal-knowledge-graph-educational-reasoning|graf pengetahuan multimodal]] memperluas struktur graf melintasi modalitas konten; [[fair-explainable-edu-recommendations|rekomendasi yang adil dan dapat dijelaskan]] menggabungkan embedding graf pengetahuan dengan pemodelan sekuensial (kerangka hibrida HKG-GRU).
- **Graf terstruktur secara instruksional untuk rekomendasi sumber:** [[hybrid-cf-kg-recommendation-multimodal-teaching-2026|Liu, Sun & Song (2026)]] menguraikan setiap entitas sumber pengajaran menjadi empat dimensi instruksional (konteks pengajaran, tingkat kognitif, fitur teknologi, adaptabilitas budaya), menghitung kemiripan semantik yang bergantung pada pengguna di atas dimensi-dimensi itu, lalu memfusikannya dengan penyaringan kolaboratif melalui koefisien yang sadar kemampuan dan kemajuan, mengodekan struktur [[pedagogy|pedagogis]] langsung ke dalam sinyal rekomendasi alih-alih memperlakukan sumber sebagai barang konsumsi.
- **Basis pengetahuan berbasis ontologi:** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova (2026)]] mengusulkan arsitektur basis pengetahuan hibrida berlapis yang berpijak pada logika deskripsi, yang menggantikan model ontologi tunggal ITS klasik dengan **sistem ontologi yang dipetakan**, menambahkan pengetahuan prosedural (berbasis aturan), probabilistik/fuzzy, dan implisit yang diekstraksi ML, plus kerangka metadata untuk mendeskripsikan, menemukan, dan menggunakan ulang ontologi pendidikan.
- **[[scaffolding|Perancahan]] dan penulisan:** [[veriforge-narrative-drafting-scaffolding-2026|Veriforge]] dan [[visual-query-tracer-declarative-logic-learning|penelusuran kueri visual]] menerapkan struktur berbasis graf pada penulisan naratif dan pembelajaran logika deklaratif.
- **Graf sastra yang dikurasi manusia, dan apa yang diungkap audit:** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] memetakan premis sastra, dengan 1.455 catatan aksioma, 1.464 pemetaan ke 149 karya, dan 472 relasi bertipe, sementara [[llm|model bahasa]] mengusulkan formulasi kandidat yang dipilih dan didasarkan oleh kurator manusia. Audit yang dihitung ulang sama instruktifnya dengan strukturnya: setiap titik akhir berhasil diselesaikan dan tidak ada tautan duplikat atau tautan ke diri sendiri yang tersisa, namun 1.448 dari 1.455 aksioma memetakan tepat ke satu karya (sehingga penggunaan ulang lintas karya sangat jarang), taksonomi konteks tidak dapat memisahkan dua jenis konteksnya, dan tidak ada catatan provenans yang bertahan, sehingga snapshot itu tidak mampu merekonstruksi alurnya sendiri. Validitas struktural bukan kualitas interpretatif, dan graf yang dikurasi tanpa provenans tidak dapat diaudit maupun disegarkan.

## Konstruksi graf pengetahuan yang digerakkan LLM

Penelitian terkini mengeksplorasi penggunaan [[llm|LLM]] untuk secara otomatis menyusun graf pengetahuan dari konten pendidikan. Kerangka [[xie-hillm-cd-2026|HiLLM-CD]] menggunakan alur LLM multi-agen untuk menghasilkan tautan latihan-konsep dan pohon konsep hierarkis, sehingga mengurangi ketergantungan pada anotasi ahli. Hal ini terhubung dengan penerapan [[generative-ai|AI generatif]] yang lebih luas dalam desain kurikulum dan pengorganisasian konten otomatis, serta dengan [[rag|RAG]] (retrieval-augmented generation), di mana pengetahuan terstruktur sebagai graf dapat meningkatkan kualitas pengambilan dibandingkan pencarian kemiripan yang datar.

## Hubungan dengan konsep lain

Graf pengetahuan terhubung dengan [[learning-design|desain pembelajaran]] (menentukan apa yang diajarkan), [[curriculum-design|desain kurikulum]] (bagaimana mengurutkannya), dan [[learning-analytics|analitik pembelajaran]] (mengekstraksi wawasan dari data interaksi siswa). Graf ini menjadi fondasi bagi sistem [[intelligent-tutoring|tutoring cerdas]] yang membutuhkan representasi terstruktur atas domain pendidikan. Seiring agen AI menjadi lebih umum dalam pendidikan, graf pengetahuan menyediakan struktur domain yang menjadi dasar penalaran [[agentic-ai|sistem agentik]], pola yang terlihat pada [[quantum-education-its|ITAS]] dan asisten pengajaran dengan deteksi kesenjangan pengetahuan.

## Implikasi bagi Praktik

**Bagi instruktur**

- Tanyakan untuk *apa* graf itu digunakan sebelum menanyakan apakah graf itu akurat: rekomendasi, pengurutan prasyarat, atau diagnosis. Buktinya sangat berbeda menurut penggunaannya, dan pengurutan prasyarat membawa hasil terkuat.
- Ketika sebuah alat mengklaim pengurutan adaptif, mintalah perbandingan terukur terhadap baseline non-adaptif alih-alih deskripsi struktur pengetahuan.
- Perkirakan kelangkaan dalam penggunaan ulang lintas karya, dan perlakukan graf yang entitasnya memetakan satu-ke-satu ke sumber tunggal sebagai katalog dengan sisi, bukan sebagai peta terpadu.

**Bagi pengembang**

- Perlakukan algoritma propagasi sebagai keputusan desain kelas satu dan laporkan algoritma itu sebagai bagian dari intervensi; selisih +24% versus +5% dapat diatribusikan kepadanya.
- Auditlah melampaui keterlarutan. Uji apakah kategori dapat dipisahkan dan apakah entitas digunakan ulang lintas karya, karena kebersihan struktural secara konsisten hidup bersama ketipisan instruksional.
- Validasikan graf terhadap hasil belajar, bukan terhadap statistik graf.

**Bagi peneliti**

- Laporkan kontras graf-baseline pada tingkat algoritma. "Berbasis graf pengetahuan" bukanlah suatu perlakuan; strategi penelusurannya yang merupakan perlakuan.
- Laporkan pemetaan aksioma-ke-sumber dan keterpisahan taksonomi bersama presisi dan recall, karena kegagalan audit di sini tidak terlihat oleh metrik graf konvensional.

## Miskonsepsi Umum

**"Graf pengetahuan adalah peta konsep dengan perkakas yang lebih baik."** Klaim pembedanya bersifat relasional dan komputasional: graf berguna karena prasyarat, kemiripan, dan hierarki cukup eksplisit bagi algoritma untuk ditelusuri, bukan karena ia menggambar simpul yang terhubung. Pertanyaan operasional yang paling penting adalah algoritma penelusuran atau propagasi mana yang berjalan di atas graf, karena pilihan itulah tempat efek instruksional sebenarnya berada.

**"Memiliki graf adalah yang meningkatkan hasil."** Algoritma di atas graf mengubah hasilnya. Dalam G4L, mempropagasikan penguasaan melalui Evolving Knowledge Space Graph dengan propagasi pengetahuan Bayesian menghasilkan **+24% pengetahuan terukur** (0,717 → 0,887), dibandingkan **+5%** untuk pembanding berbasis Knowledge Space. Gagasan umumnya sama tentang ruang pengetahuan terstruktur, tetapi hasilnya berbeda secara material tergantung metode propagasinya. Membeli atau membangun graf adalah awal dari masalah desain, bukan solusinya.

**"Graf buatan LLM yang lolos audit struktural adalah graf yang tervalidasi."** Validitas struktural dan validitas instruksional berpisah persis dengan cara ini. Audit yang dihitung ulang atas salah satu graf semacam itu menemukan bahwa setiap titik akhir berhasil diselesaikan dan tidak ada tautan duplikat atau tautan ke diri sendiri yang tersisa, struktur yang bersih, namun 1.448 dari 1.455 aksiomanya memetakan tepat ke satu karya, sehingga penggunaan ulang lintas karya sangat jarang, taksonomi konteksnya tidak dapat memisahkan dua jenis konteksnya, dan klaim sentralnya tetap belum terbukti. Tautan mati dan duplikat adalah kegagalan yang ditangkap audit otomatis; penggunaan ulang yang tipis dan kategori yang tidak terdiferensiasi adalah yang diloloskannya.
