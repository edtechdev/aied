---
title: "Perolehan Belajar"
created: "2026-08-09T16:52:03-04:00"
type: concept
assessment: [assessment]
audience: [learners]
level: [higher ed, k 12]
page_kind: [evaluation]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods]
confidence: high
methods: [ai-ed-evaluation]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/learning-gains"
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

> **Perolehan belajar** — peningkatan terukur pada pengetahuan, keterampilan, atau kompetensi siswa sebagai hasil intervensi pendidikan, termasuk pengajaran berbantuan AI. Dalam penelitian [[ai-education|AI dalam pendidikan]], perolehan belajar berfungsi sebagai ukuran hasil utama untuk mengevaluasi apakah alat AI benar-benar meningkatkan pembelajaran — bukan sekadar [[student-engagement|keterlibatan]] atau kepuasan.

## Pertanyaan untuk Dipertimbangkan

- Pernahkah Anda merasa belajar banyak dari suatu kegiatan, lalu gagal dalam ujian yang mengukur hal lain? Halaman ini membedakan kinerja yang didukung AI secara langsung dari pembelajaran yang bertahan lama — bagaimana keduanya bisa menyimpang dalam pengalaman Anda sendiri?
- Temuan inti menunjukkan bahwa AI generatif dapat menggelembungkan skor pada pekerjaan rumah berbantuan AI sekaligus menurunkan skor pada ukuran yang diawasi dan tanpa buku. Jika Anda mengevaluasi apakah alat AI benar-benar membantu siswa belajar, hasil mana yang akan Anda percayai, dan mengapa?
- Penelitian menunjukkan ketergantungan tanpa panduan pada AI memprediksi perolehan belajar yang lebih buruk, sedangkan penggunaan terstruktur memprediksi hasil yang lebih baik — alat yang sama, hasil berlawanan. Apa yang membedakan penggunaan 'terstruktur' dari 'tanpa panduan' di ruang kelas nyata?
- Tombol petunjuk berkorelasi dengan berkurangnya pembelajaran: makin banyak petunjuk, makin sedikit belajar. Pernahkah Anda tergoda meraih tombol petunjuk atau jawaban begitu merasa macet? Apa yang disiratkannya tentang seberapa perlu perjuangan bagi pembelajaran?
- Sebuah meta-analisis besar menggabungkan banyak studi dan menemukan bahwa [[edtech-platform|EdTech]] berbasis AI menaikkan pembelajaran dalam jumlah moderat, tanpa keunggulan AI generatif atas alat adaptif yang lebih awal. Bagaimana estimasi gabungan yang berhati-hati ini seharusnya mengubah cara Anda membaca klaim yang menggembirakan tentang keefektifan satu produk AI?

## Pendahuluan

Perolehan belajar adalah ujian pamungkas bagi setiap teknologi pendidikan. Dalam penelitian basis pengetahuan, perolehan belajar muncul sebagai variabel terikat dalam [[rct|uji coba terkontrol acak]], perbandingan pra-pasca dalam studi kuasi-eksperimental, dan analisis korelasional yang menghubungkan penggunaan alat AI dengan hasil akademik.

**Terminologi.** Makna *hasil* dari pencapaian — pencapaian siswa, pencapaian akademik, pencapaian belajar, pencapaian sebelumnya, kesenjangan pencapaian — diperlakukan di sini sebagai sinonim perolehan belajar, dan frasa-frasa itu tertaut ke halaman ini. Makna *yang dirasakan* ("rasa pencapaian") adalah pengalaman motivasional, bukan hasil yang terukur; lihat [[motivation]] dan [[self-efficacy]]. Teori tujuan pencapaian ("tujuan pencapaian", orientasi tujuan) juga merupakan konstruk motivasional dan tertaut ke [[motivation]].

Temuan kunci dari basis pengetahuan:

- **[[adaptive-pretesting-retention|Pra-ujian adaptif]]** meneliti apakah [[generative-ai|didukung GenAI]] [[retrieval-spacing-interleaving|pra-ujian]] menghasilkan perolehan belajar yang bertahan melampaui pengujian langsung.
- **[[genai-meta-analysis-programming-learning|Meta-analisis GenAI dalam pemrograman]]** menemukan perolehan belajar positif dari penggunaan AI terstruktur tetapi efek negatif dari ketergantungan tanpa panduan — pembedaan kunci antara produktivitas dan pembelajaran yang bertahan lama.
- **[[lak2026-hint-button-unproductive-use|Penelitian tombol petunjuk]]** menunjukkan asosiasi negatif antara penyalahgunaan petunjuk dan perolehan belajar — makin banyak petunjuk berkorelasi dengan makin sedikit belajar.
- **[[instructional-guidance-genai-learning|Panduan instruksional]]** menunjukkan bahwa perolehan belajar bergantung pada BAGAIMANA AI digunakan, bukan hanya APAKAH AI tersedia.
- **[[burneo-can-edtech-close-learning-gaps-2026|Meta-analisis Bank Dunia]]** menggabungkan 191 ukuran efek dari 14 RCT untuk memperkirakan bahwa EdTech adaptif dan berbasis AI menaikkan pembelajaran sekitar 0.125 sd rata-rata — di atas median untuk RCT pendidikan — sambil tidak menemukan keunggulan AI generatif atas alat adaptif yang lebih awal.
- **Perolehan adalah interaksi konten–perlakuan, bukan konstanta.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit dkk. (2025)]] menunjukkan bahwa rasio contoh–soal yang optimal bergantung pada konten pengetahuan: [[retrieval-spacing-interleaving|praktik pengambilan]] murni menghasilkan perolehan lebih tinggi untuk fakta verbatim, sedangkan praktik terintegrasi contoh (bergantian antara contoh terbimbing dan soal) menghasilkan perolehan lebih tinggi untuk keterampilan yang dapat digeneralisasi — bukti langsung bahwa "lebih banyak latihan" tidak selalu lebih baik dan bahwa perolehan bergantung pada pencocokan jadwal latihan dengan komponen pengetahuan yang sedang dipelajari.

### Masalah pengukuran era AI

Tema sentral dalam penelitian perolehan belajar basis pengetahuan adalah bahwa **AI generatif dapat menggelembungkan kinerja yang tampak tanpa menghasilkan perolehan belajar** — dan bahwa pilihan ukuran hasil menentukan apakah hal ini terlihat. [[generative-ai-reduced-study-time-math|Penelitian]] dan [[stromberg-generative-ai-learning-penalty-secondary-2026|data lapangan berskala besar]] menunjukkan divergensi tajam: penggunaan AI meningkatkan skor pada pekerjaan rumah berbantuan AI sekaligus *menurunkan* skor pada ukuran yang diawasi, tanpa buku, dan tanpa bantuan. [[genai-performance-vs-learning|Penelitian kinerja-vs-pembelajaran]] dan [[young-people-learning-generative-ai-rapid-review-2026|tinjauan cepat]] karena itu membedakan kinerja yang didukung AI secara langsung dari pembelajaran yang bertahan lama, dan memperlakukan ukuran sumatif tanpa bantuan (lihat [[summative-assessment]]) sebagai sinyal yang andal bagi perolehan belajar yang sejati.

### Apa yang ditunjukkan penelitian efikasi

Di seluruh [[rct|RCT]], [[meta-analysis-systematic-review|meta-analisis]], dan studi lapangan basis pengetahuan, muncul gambaran konsisten tentang **efikasi pembelajaran** (intervensi AI mana yang benar-benar menghasilkan perolehan belajar, dan seberapa besar):

- **Bukti meta-analitik secara luas positif tetapi bersyarat.** [[genai-educational-outcomes-meta-analysis|Meta-analisis komprehensif atas 53 studi]] (Dong 2026) menemukan bahwa AI generatif umumnya mengungguli pendekatan tradisional pada pencapaian akademik, [[critical-thinking|berpikir tingkat tinggi]], dan menulis — dengan [[ai-feedback-quality|umpan balik AI]] yang sangat efektif — meskipun GenAI berbantuan permainan tidak menunjukkan manfaat tambahan yang signifikan dan perolehan bervariasi menurut negara dan hasil. [[genai-meta-analysis-programming-learning|Meta-analisis GenAI-dan-pemrograman]] menemukan perolehan produktivitas yang besar tetapi tidak ada perolehan belajar yang signifikan (g ≈ 0), memisahkan efisiensi tugas dari pembelajaran yang bertahan lama. [[robot-assisted-language-learning-meta-analysis-2026|Meta-analisis pembelajaran bahasa]] menemukan perolehan belajar yang positif tetapi moderat dari robot [[embodied-learning|terwujud]] yang ditingkatkan AI. Khusus untuk [[ai-literacy|literasi AI]], [[liu-ai-literacy-interventions-meta-analysis-2026|meta-analisis tiga tingkat atas 59 studi]] memperkirakan efek keseluruhan yang besar (g = 0.837) — tetapi interval prediksi yang lebar dan temuan bahwa intervensi yang berfokus pada pengetahuan mengungguli intervensi yang menyasar keterampilan, sikap, atau [[ethics]] memperingatkan bahwa *hasil yang diukur* membentuk perolehan yang tampak, menggema pokok yang lebih luas bahwa perolehan terkait AI bergantung pada apa dan bagaimana Anda menilai.
- **[[intelligent-tutoring|Tutor AI]] yang dirancang baik menghasilkan perolehan nyata.** Sebuah RCT klaster dua tahun ([[one-click-away-khanmigo-two-year-school-experiment-2026|Khanmigo]]) menemukan bahwa tutoring AI menaikkan pencapaian matematika sekitar 1.3 peringkat persentil nasional per semester (sekitar 0.06–0.08 SD per tahun ajaran, sekitar 0.14 SD untuk satu tahun penuh), perolehan yang menyerupai latihan tanpa AI — menunjukkan bahwa *keterlibatan*, bukan kemampuan model, merupakan kendala pengikat. [[making-ai-tutoring-productive-mastery-math-2026|NUMI]] menunjukkan bahwa dukungan AI memperbaiki kebenaran percobaan berikutnya setelah kesalahan dengan lebih banyak waktu per soal — "perlambatan produktif" yang membangun penguasaan yang bertahan lama. [[virtual-tutoring-computer-assisted-learning-takeup-2026|Tutoring virtual]] menemukan kendala pengikatnya adalah pengambilan dan partisipasi yang berkelanjutan, bukan kualitas tutor.
- **Tutor yang dibangun dari pedagogi kelas itu sendiri mengalahkan [[active-learning|pembelajaran aktif]], bukan hanya ceramah.** Dalam sebuah [[rct]] crossover di mata kuliah fisika pengantar Harvard, siswa yang belajar dari tutor AI khusus memperoleh median 4.5 pada pasca-tes berbanding 3.5 untuk pelajaran pembelajaran aktif di kelas (median dasar 2.75). Ukuran efek regresi linier 0.63, dan menghabiskan median 49 menit untuk tugas berbanding 60 menit di kelas ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin dkk., 2025]]). Karena kontrolnya adalah pembelajaran aktif berbasis penelitian dan bukan ceramah, uji coba ini mengukur tutor terhadap pembanding yang menuntut — rancangan yang oleh penulis dikreditkan sebagai merekayasa tutor dari praktik berbasis penelitian yang sama dengan kelasnya, ditambah umpan balik personal sesuai permintaan dan pengaturan tempo sendiri.
- **AI dapat menyamai bantuan manusia.** [[chatgpt-hints-human-tutor-learning-gains-2024|Bantuan yang dihasilkan ChatGPT]] menghasilkan perolehan belajar yang setara dengan bantuan yang ditulis tutor manusia pada keterampilan [[math-education|matematika]] — bukti bahwa AI generatif dapat seefektif [[scaffolding]] manusia bila digunakan dengan tepat.
- **Perolehan bergantung pada siapa yang mengajar dengannya.** Tutor berpengalaman rendah yang diberi dukungan AI menaikkan tingkat kelulusan siswa sebesar 9 poin persentase, dengan perolehan lebih kecil bagi tutor yang lebih berpengalaman — pola augmentasi yang paling mengangkat yang paling tidak berpengalaman ([[oecd-digital-education-outlook-2026|OECD, 2026]]).
- **AI tanpa pagar dapat merugikan pembelajaran.** RCT pagar pengaman ([[generative-ai-guardrails-harm-learning|PNAS 2025]]) menemukan bahwa tutor bergaya ChatGPT tanpa pagar menaikkan latihan berbantuan +48% tetapi *menurunkan* skor ujian tanpa bantuan −17%, sedangkan tutor berpagar (petunjuk-bukan-jawaban) menghilangkan kerugian itu. Ini adalah demonstrasi paling tajam bahwa **efikasi pembelajaran bergantung pada rancangan**: kelas alat yang sama dapat menjadi perolehan belajar yang kuat atau kerugian bersih bergantung pada konfigurasinya.
- **Tetapi akses tanpa pagar juga dapat membantu, secara bertahan lama.** Sebuah RCT dengan akun ChatGPT siap pakai menemukan skor tes tanpa bantuan 0.27 SD lebih tinggi selama siswa memiliki akses, dan perolehan itu bertahan seminggu kemudian — lebih dari dua kali median 0.10 SD di 747 RCT pendidikan ([[contractor-learning-impact-generative-ai-2026|Contractor & Reyes, 2026]]).
- **Efikasi yang dipersepsikan vs. aktual menyimpang.** [[ai-literacy-assessment-misalignment|Kinerja yang dilaporkan sendiri tidak selaras dengan kinerja terukur]], dan [[absent-cognitive-baseline-2026|baseline kognitif yang absen]] menunjukkan siswa asli-AI melebih-lebihkan pembelajaran mereka — sehingga klaim efikasi berbasis laporan diri tidak dapat diandalkan tanpa ukuran hasil yang objektif. [[self-report-measures]] mengumpulkan kasus-kasus ketika hasil yang dilaporkan dan yang terukur terpisah.

- **Perolehan dapat datang dari realokasi waktu guru, bukan dari [[automated-assessment|penilaian AI]].** Dalam eksperimen acak di 178 sekolah Brasil (sekitar 19,000 siswa kelas akhir), [[automated-essay-scoring|penilaian esai]] oleh AI dan manusia menghasilkan perolehan ujian yang identik, tetapi kelas AI menunjukkan sekitar 35% lebih banyak percakapan guru-siswa satu lawan satu tentang menulis, dan kuartil terbawah tidak membaik pada kedua kondisi ([[ai-changing-teaching-workflows|Ler, 2026]]).
- **Dalam AI yang dimediasi guru, persiapan menggerakkan perolehan dan alatnya tidak.** Di 19 kelas numerasi sekolah negeri Brasil, siswa yang diajar guru terlatih mengungguli kelompok kontrol, tetapi menambahkan sistem AIED-U ke pelatihan itu tidak menghasilkan perolehan belajar tambahan, dan beban kerja guru berasosiasi negatif dengan perolehan ([[rodrigues-aied-unplugged-numeracy-2026|Rodrigues dkk. (2026)]]).

**Intinya:** bobot bukti mendukung **perolehan belajar yang moderat, bersyarat, dan bergantung pada rancangan** dari AI — nyata ketika AI distrukturkan untuk melatih alih-alih menjawab, diberi pagar pengaman, dan dipasangkan dengan ukuran hasil tanpa bantuan, serta absen atau negatif ketika ia menggantikan usaha siswa sendiri. Itulah sebabnya perolehan belajar sebagai hasil harus diukur dengan instrumen yang valid dan tahan AI, dan mengapa [[ai-ed-evaluation]] memasangkan klaim efikasi dengan pengawasan [[research-methods-aied|metodologis]].


- **Tutoring AI dapat menyamai tutoring manusia ahli pada perolehan tes terstandardisasi.** Dalam evaluasi dengan 2,383 peserta, tutoring AI gabungan secara statistik setara dengan tutoring manusia ahli pada perolehan belajar GRE (p = .015), dengan keduanya di atas kontrol tanpa tutoring; penulis mengusulkan biaya per poin persentase perolehan sebagai unit untuk membandingkan tutor ([[studentbench-ai-human-tutoring-gre-2026|Northcutt dkk., 2026]]).

### Peta tingkat lapangan tentang efek AI terhadap pembelajaran dan pencapaian

Korpus basis pengetahuan — meta-analisis, RCT, kuasi-eksperimen, dan studi lapangan — mendukung gambaran yang bernuansa dan kadang kontradiktif. Temuan mengelompok menjadi efek positif, negatif, dan bersyarat.

**Efek positif (AI dapat menghasilkan perolehan belajar yang sejati):**
- **Bukti meta-analitik secara luas positif tetapi bersyarat.** [[genai-educational-outcomes-meta-analysis|Meta-analisis 53 studi]] (Dong 2026) menemukan AI generatif umumnya mengungguli pendekatan tradisional pada pencapaian akademik, berpikir tingkat tinggi, dan menulis, dengan [[feedback]] AI sangat efektif. Meta-analisis atas 29 eksperimen ([[zhao-genai-higher-order-thinking-meta-2026]]) menemukan efek positif moderat pada berpikir tingkat tinggi, paling kuat untuk [[problem-solving]], tetapi terbatas untuk [[creativity]].
- **AI khusus tutoring secara andal mengungguli AI serbaguna.** [[stanford-evidence-base-ai-k12-2026|Tinjauan SCALE Stanford]] dan tinjauan payung ([[genai-higher-education-systematic-review-2026]]) bertemu pada kesimpulan yang sama: agen yang dirancang pedagogis dengan petunjuk dan scaffolding bertahap menghasilkan perolehan nyata, sedangkan [[conversational-ai|chatbot]] terbuka sering tidak.
- **Tutor AI yang dirancang baik menghasilkan perolehan nyata dan terukur.** RCT Khanmigo dua tahun ([[one-click-away-khanmigo-two-year-school-experiment-2026]]) menaikkan pencapaian matematika sekitar 1.3 peringkat persentil nasional per semester; [[making-ai-tutoring-productive-mastery-math-2026|NUMI]] memperbaiki kebenaran percobaan berikutnya setelah kesalahan; [[virtual-tutoring-computer-assisted-learning-takeup-2026|tutoring virtual]] menunjukkan pengambilan sebagai kendala pengikat.
- **AI dapat menyamai bantuan manusia.** [[chatgpt-hints-human-tutor-learning-gains-2024|Bantuan yang dihasilkan ChatGPT]] menghasilkan perolehan belajar yang setara dengan bantuan yang ditulis tutor manusia pada keterampilan matematika.
- **AI yang berfokus pada umpan balik berhasil.** [[genai-educational-outcomes-meta-analysis|Umpan balik AI]] termasuk di antara aplikasi GenAI yang paling efektif; [[ai-feedback-critical-thinking-writing-2026|umpan balik AI untuk menulis]] meningkatkan berpikir kritis bila dipasangkan dengan pengajaran. Dalam eksperimen lapangan, [[gpt4-feedback-student-activation-2026|Geschwind dkk. (2026)]] menemukan siswa yang menerima umpan balik GPT-4 individual pada tugas terbuka menunjukkan perolehan belajar konten terbesar (sekitar 0.11, p < 0.10; naik menjadi 0.16 di antara mereka yang benar-benar menerima umpan balik sebelumnya) — efek yang digerakkan oleh penyediaan AI yang andal dan konsisten alih-alih superioritas bawaan, karena hasil sejawat menyamai AI ketika [[peer-assessment|umpan balik sejawat]] berkualitas tinggi benar-benar diberikan. Mitra kritik LLM dalam menulis memperluas ini ke umpan balik berulang dan kolaboratif: [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] menemukan perolehan signifikan sepanjang satu semester pada penulisan argumentatif, [[prompt-engineering|rekayasa prompt]], dan kualitas respons terhadap umpan balik AI (semua p < .001, kira-kira satu simpangan baku penuh per dimensi), dengan perolehan muncul bahkan pada esai yang ditulis tanpa dukungan LLM — bukti keterampilan yang bertahan lama alih-alih ketergantungan pada alat semata, meskipun tidak adanya kondisi kontrol membatasi atribusi kausal.
- **Perancah terstruktur menghasilkan perolehan.** [[scaffolding-srl-feedback-genai-human-peers|Umpan balik mandiri terstruktur]] dan [[learner-ai-interaction-patterns-oop|desain interaksi]] menunjukkan perolehan kecil tetapi signifikan ketika AI dirancang untuk melatih.
- **AI dalam konteks kolaboratif dan berbasis masalah membantu bila terstruktur.** [[ai-enhanced-pbl-chatgpt-scaffolding-2026|PBL yang ditingkatkan AI]], [[ai-assisted-collaborative-learning-model-dbr|pembelajaran kolaboratif berbantuan AI]], dan [[ccct-cooperative-learning-technique|teknik kooperatif yang dirancang AI]] melaporkan perolehan yang bermakna.

**Efek negatif (AI dapat mengurangi atau gagal meningkatkan pembelajaran):**
- **AI tanpa pagar dapat merugikan pembelajaran.** RCT pagar pengaman PNAS ([[generative-ai-guardrails-harm-learning]]) menemukan tutor bergaya ChatGPT tanpa pagar menaikkan latihan berbantuan +48% tetapi *menurunkan* skor ujian tanpa bantuan −17%; [[guardrails]] menghilangkan kerugian itu.
- **Penyelesaian lebih cepat ≠ pembelajaran.** [[generative-ai-reduced-study-time-math|GenAI mengurangi waktu belajar]] pada soal matematika dan pengetahuan yang dibangunnya; [[genai-performance-vs-learning|penelitian kinerja-vs-pembelajaran]] menunjukkan AI menggelembungkan kinerja berbantuan AI sekaligus menurunkan skor yang diawasi, tanpa buku, dan tanpa bantuan.
- **Pengalihdayaan pekerjaan rumah merugikan pembelajaran.** [[stromberg-generative-ai-learning-penalty-secondary-2026|Data lapangan]] menunjukkan penalti belajar AI generatif ketika siswa mengalihdayakan pekerjaan rumah.
- **Ketergantungan pada [[llm]] berkorelasi dengan nilai lebih rendah.** [[jost-llm-programming-education-learning-outcomes|Jošt dkk.]] menemukan korelasi negatif yang signifikan antara penggunaan LLM untuk pembuatan kode (rho = −0.305) dan debugging (rho = −0.360) dengan nilai akhir.
- **AI dapat merugikan [[teacher-role|pengajaran]] dan pencapaian bagi sebagian pihak.** [[genai-can-harm-teaching-rct-2026|RCT GenAI yang diarahkan ke guru]] menemukan siswa dari guru di bawah median kehilangan capaian (−0.129 SD).
- **Penyalahgunaan petunjuk berkorelasi dengan lebih sedikit belajar.** [[lak2026-hint-button-unproductive-use|Penelitian tombol petunjuk]] menunjukkan makin banyak petunjuk yang digunakan secara tidak produktif berkorelasi dengan makin sedikit belajar.
- **Perolehan pemrograman meta-analitik bersifat ilusif.** [[genai-meta-analysis-programming-learning|Meta-analisis GenAI-dan-pemrograman]] menemukan perolehan produktivitas yang besar tetapi tidak ada perolehan belajar yang signifikan (g ≈ 0), memisahkan efisiensi tugas dari pembelajaran yang bertahan lama.

**Efek bersyarat dan campuran (konteks menentukan arah):**
- **Rancangan menentukan.** Kelas alat yang sama dapat menjadi perolehan yang kuat atau kerugian bersih bergantung pada konfigurasi ([[generative-ai-guardrails-harm-learning]], [[stanford-evidence-base-ai-k12-2026]]).
- **Bagaimana AI digunakan lebih penting daripada apakah AI digunakan.** [[jost-llm-programming-education-learning-outcomes|Penggunaan untuk penjelasan bersifat jinak; penggunaan untuk pembuatan kode merugikan]]; [[genai-over-reliance-learning-2026|ketergantungan berlebih]] menggerus perolehan.
- **Durasi dan [[regulation]] diri memoderasi efek.** [[zhao-genai-higher-order-thinking-meta-2026|Efek paling kuat pada 8–16 minggu]] dan bagi siswa dengan [[self-regulated-learning]] yang lebih tinggi.
- **[[computational-thinking|Tingkat berpikir komputasional]] memoderasi perolehan berbantuan AI.** Dalam kursus asisten koding AI kelas delapan selama empat minggu, siswa dengan CT tinggi mengungguli rekan CT rendah pada pasca-tes (72.54 vs 61.73, p = .031) meskipun pengetahuan koding sebelumnya setara, menggunakan asisten untuk memahami kode sementara siswa CT rendah mengambil jawaban ([[computational-thinking-aica-2026|Zhao dkk. (2026)]]).
- **AI-IBL mendukung kreativitas tetapi tidak selalu pemecahan masalah.** [[mujib-ai-ibl-creative-math-2026|Mujib dkk.]] meningkatkan kinerja kreatif dan sikap tetapi tidak pemecahan masalah kritis.
- **[[student-experience|Pengalaman siswa]] menyimpang dari perolehan terukur.** [[absent-cognitive-baseline-2026|Siswa asli-AI melebih-lebihkan pembelajaran mereka]], dan [[ai-literacy-assessment-misalignment|laporan diri tidak selaras dengan kinerja]] — persepsi perolehan bukan bukti yang andal tentang adanya perolehan.

### Estimasi perolehan belajar meta-analitik digelembungkan — bacalah dengan hati-hati

Angka perolehan belajar yang mendominasi ringkasan efikasi halaman ini — terutama ukuran efek gabungan dari meta-analisis — harus dibaca dengan peringatan kuat: gelombang meta-penelitian menunjukkan bahwa estimasi sintesis positif di lapangan ini digelembungkan oleh bias publikasi, ketidakkoherenan konstruk, dan jalan pintas metodologis.

- [[bartos-ai-learning-meta-meta-analysis-2026|Sebuah meta-meta-analisis tingkat studi atas 1,840 ukuran efek dari 67 meta-analisis]] menemukan bahwa efek AI rata-rata yang disesuaikan bias publikasi kira-kira **sepertiga** dari besaran yang dilaporkan (SMD ≈ 0.196 vs. median 0.67), dengan interval prediksi yang membentang dari kerugian besar hingga manfaat besar dan tanpa moderator yang menghasilkan perolehan konsisten. Bahkan satu studi ekstrem hampir tidak menyumbang informasi mengingat heterogenitasnya — artinya *lebih banyak studi dengan tipe saat ini tidak akan menyelesaikan pertanyaan*; hanya uji coba berkualitas tinggi, terpreregistrasi, dan berorientasi replikasi yang akan.
- **Meta-analisis orde kedua atas lapisan sintesis itu sendiri.** [[ai-education-effects-second-order-meta-analysis-2026|Emslander dkk. (2026)]] membalik unit analisis yang lazim: memperlakukan 45 meta-analisis sebagai data mereka dan mengoreksi tumpang tindih studi (818 studi primer unik, dibobot menurut keunikan alih-alih dibuang), mereka menggabungkan 129 ukuran efek meta-analitik menjadi g = .57 [.50, .65], dengan kluster hasil berkisar dari .35 untuk kinerja STEM hingga .68 untuk hasil akademik umum. Dua hasil berkaitan dengan angka-angka di atas. Jenis AI tidak memoderasi efek (p = .63) — [[intelligent-tutoring|sistem tutoring cerdas]], [[conversational-ai|chatbot]], dan ChatGPT secara statistik tidak dapat dibedakan pada lapisan ini, sehingga perolehan gabungan lapangan tidak digerakkan oleh AI generatif sebagai demikian — dan satu-satunya moderator yang jelas adalah tingkat pendidikan (tersier .61 vs. .30 untuk sampel yang lebih muda), yang sebagian merupakan artefak rancangan studi mengingat 74% korpus menguji mahasiswa tersier dan bukti [[k-12|K-12]] relatif tipis. Penilaian kualitasnya adalah yang paling tajam dalam korpus: 45 meta-analisis itu rata-rata 9.3 dari 17 pada skala yang diadaptasi dari AMSTAR, tidak ada yang terpreregistrasi, dan hanya 23 dari 45 yang memiliki daya 80% untuk mendeteksi efek yang mereka laporkan sendiri. Dua uji bias publikasinya juga tidak sepakat — plot corong yang simetris (τ Kendall = −.01, p = .868) berbanding PET-PEESE (B = 0.9, p = .009) yang mengindikasikan penggelembungan — sehingga efek sedang SOMA itu sendiri datang dengan awan bias yang belum terselesaikan di atasnya.
- [[oneill-presumed-effective-meta-analysis-2026|Sebuah audit forensik atas 14 meta-analisis AIED berdampak tinggi]] menemukan tidak satu pun memberikan dasar yang valid bagi klaim perolehan belajar gabungannya: tidak ada yang memiliki konstruk hasil yang koheren, semuanya memiliki heterogenitas ekstrem yang belum terselesaikan (I² berkisar dari 77.2% hingga 94.4% di antara 13 meta-analisis yang melaporkannya, dan 12 dari 13 itu melebihi 80%), dua belas memperlakukan ukuran efek dependen sebagai independen, dan tidak ada yang menilai bias publikasi secara valid. Mayoritas studi primer yang diperiksa secara acak tidak cocok dengan klaim meta-analitiknya. Kesalahan itu mencapai kebijakan: dua dari meta-analisis yang diaudit memperlakukan ukuran sampel studi sebagai ukuran kelas dan, atas dasar satu studi primer yang salah hitung, menyimpulkan bahwa 21 sampai 40 siswa adalah ukuran intervensi ideal dan merekomendasikan agar intervensi GenAI dirancang untuk jumlah itu.
- **Sebuah sintesis [[stem-education|STEM]] 2026 yang memperbaiki dua dari cacat yang diaudit — dan tetap memperlihatkan cacat ketiga.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan dan rekan (2026)]] menggabungkan 35 studi STEM eksperimental dan kuasi-eksperimental dengan satu ukuran efek per studi untuk menghindari masalah ukuran efek dependen, dan menjalankan baterai bias publikasi lengkap (plot corong, uji Begg dan Egger, trim-and-fill, fail-safe N Rosenthal = 2404) alih-alih menyatakan simetri — dua jalan pintas yang ditemukan audit di atas pada setiap meta-analisis yang diperiksanya. Dua peringatan tetap ada. Pertama, penulis tidak menerapkan penilaian kualitas formal dan memperlakukan kriteria inklusi sebagai ambang ketelitian, sehingga studi dengan rancangan yang sangat berbeda masuk ke kumpulan tanpa dibobot kualitas. Kedua, heterogenitas utamanya sepenuhnya bergantung pada model mana yang Anda baca: 35 studi yang sama dilaporkan sebagai I² = 82.98% di bawah model efek tetap dan I² = 15.75% di bawah model efek acak, sehingga pembaca yang menemukan angka-angka itu tanpa label model dapat menyimpulkan korpusnya homogen padahal tidak. Estimasi gabungannya (g = 0.670, 95% CI [0.491, 0.848]) karena itu adalah jenis angka yang diuraikan bagian di atas: dibangun lebih baik daripada kebanyakan, dan tetap merupakan batas atas.
- [[weidlich-chatgpt-effect-search-cause-2025|Sebuah kritik media/metode]] menunjukkan banyak "perolehan belajar" tidak diukur secara valid — hasilnya sering berupa keterampilan yang dilaporkan sendiri atau kinerja yang diukur *selama* bantuan AI alih-alih pembelajaran yang bertahan lama dan tanpa bantuan.
- **Gelombang sintesis ChatGPT pertama mengukur kinerja, bukan pembelajaran.** [[epistemological-audit-genai-meta-analyses-2026|Fütterer dkk. (2026)]] membangun kembali basis bukti kelima meta-analisis yang menggabungkan efek pendidikan ChatGPT: di antara 69 studi primer yang dapat diklasifikasikan, 79.7% mengukur kinerja secara eksklusif dan hanya 11.6% mengukur pembelajaran. Estimasi gabungan yang mereka reproduksi (g = 0.83, 95% CI [0.68, 0.97], I² = 94.06%) karena itu menggambarkan kinerja tes, dan interval prediksinya [−0.75, 2.41] melewati nol.

**Garis bawah untuk angka perolehan di atas:** perlakukan ukuran efek AI gabungan yang besar sebagai batas atas, bukan estimasi titik. Utamakan bukti perolehan belajar dari [[rct|RCT]] yang dirancang baik dan studi lapangan dengan ukuran hasil terstandardisasi dan tanpa bantuan (RCT pagar pengaman, eksperimen Khanmigo dan NUMI, serta meta-analisis EdTech Bank Dunia yang dikutip di atas), dan bacalah perolehan meta-analitik sebagai sementara dan kemungkinan dilebih-lebihkan sampai kualitas sintesis membaik. Masalahnya juga bertahan melampaui koreksi: dari makalah yang terbit setelah satu meta-analisis yang diaudit ditarik, 60% tetap mengutipnya sebagai dukungan otoritatif bagi perolehan belajar ChatGPT yang besar dan tidak satu pun mengakui penarikan itu, sehingga estimasi yang dicabut terus menyebar. Itulah sebabnya halaman [[limitations-in-aied-research|Keterbatasan dalam Penelitian AIEd]] kini mendokumentasikan krisis bukti meta-analitik secara rinci.

### Mengukur yang penting

Perolehan belajar terhubung ke [[assessment-validity]] — jika [[assessment|penilaian]] gagal menangkap pemahaman yang lebih dalam, ukuran perolehan belajar menyesatkan. Perolehan juga bersinggungan dengan [[cognitive-offloading|Ketergantungan Berlebih]] dan [[cognitive-offloading]], ketika peningkatan kinerja yang tampak dapat menyamarkan kerugian belajar, serta dengan [[rct]] (uji acak sebagai rancangan baku emas untuk mendeteksi perolehan belajar kausal), dan dengan [[meta-analysis-systematic-review]] (menggabungkan ukuran efek lintas studi untuk menetapkan bukti efikasi lapangan).

- **Perolehan pra/pasca yang signifikan dari [[pedagogy]] AI berbasis kesalahan:** kursus desain basis data [[pedagogy-ai-mistakes|Hosseini (2026)]] (n=13) menunjukkan perolehan belajar yang besar dan signifikan pada item pra/pasca yang identik (rata-rata 4.25→6.83/7, *d* Cohen = 1.49, *p*<.001), dengan perolehan tidak berkorelasi dengan keyakinan awal terhadap AI atau basis data — rancangan penyempurnaan kritik terintegrasi AI menguntungkan siswa terlepas dari persepsi awal mereka.

## Miskonsepsi Umum

**"Skor naik, jadi intervensinya menghasilkan pembelajaran."** Ini adalah kesalahan definisional yang ingin dicegah halaman ini, dan data lapangan menunjukkan kedua arah sekaligus: penggunaan AI meningkatkan skor pada pekerjaan rumah berbantuan AI sekaligus *menurunkan* skor pada ukuran yang diawasi, tanpa buku, dan tanpa bantuan ([[generative-ai-reduced-study-time-math]]; [[stromberg-generative-ai-learning-penalty-secondary-2026]]). Pilihan ukuran menentukan apakah penggelembungan itu terlihat, sehingga perolehan pada tugas yang mengizinkan AI adalah klaim tentang kinerja tugas, bukan tentang [[genai-performance-vs-learning|pembelajaran]].

**"Meta-analisis sudah menyelesaikannya: efeknya besar."** Arah agregasi dan besaran agregasi adalah fakta yang berbeda, dan besarannya jarang bertahan dari pengujian. [[genai-meta-analysis-programming-learning|Meta-analisis GenAI-dalam-pemrograman]] menemukan perolehan *produktivitas* yang besar bersamaan dengan **tidak ada perolehan belajar yang signifikan** (g ≈ 0). [[burneo-can-edtech-close-learning-gaps-2026|Meta-analisis Bank Dunia]], yang menggabungkan 191 ukuran efek dari 14 RCT, memperkirakan sekitar 0.125 sd untuk EdTech adaptif dan berbasis AI — terhormat dibandingkan median RCT pendidikan, tetapi dengan **tidak ada keunggulan AI generatif atas alat adaptif yang lebih awal**. Mengutip studi era GPT sebagai lompatan kategori melebih-lebihkan apa yang ditunjukkan bukti gabungan.

**"Lebih banyak latihan dan lebih banyak [[personalized-learning|personalisasi]] selalu membantu."** Besarnya perolehan bergantung pada apa yang dilatih, bukan pada berapa banyak dukungan yang diberikan. [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit dkk. (2025)]] melaporkan bahwa campuran optimal contoh yang dikerjakan dan soal bergeser menurut keterampilan target: praktik pengambilan murni menghasilkan perolehan lebih tinggi untuk fakta verbatim, sementara contoh dan soal yang bergantian menghasilkan perolehan lebih tinggi untuk keterampilan yang dapat digeneralisasi. Dan [[lak2026-hint-button-unproductive-use|penelitian tombol petunjuk]] menemukan volume petunjuk berasosiasi negatif dengan pembelajaran. "Dukungan" yang sama yang membantu satu komponen pengetahuan dapat menyia-nyiakan komponen lainnya.

**"Hasil pasca-tes yang tertunda otomatis merupakan hasil pembelajaran yang bertahan lama."** Penundaan perlu dan tidak cukup. Yang membedakan pembelajaran bertahan lama dalam korpus ini adalah pengukuran *tanpa bantuan* dalam kondisi tertunda, bersama dengan bukti bahwa efeknya tidak dibawa oleh perancah yang akan absen saat transfer.

## Implikasi untuk Praktik

**Untuk instruktur**

- Pisahkan nilai yang Anda berikan dari klaim yang Anda buat. Tugas kuliah berbantuan AI dapat menilai kualitas produk secara wajar sekaligus tidak memberi tahu Anda apa pun tentang kemampuan tanpa bantuan; jika Anda memerlukan yang kedua, Anda harus mengukurnya secara terpisah.
- Cocokkan format latihan dengan jenis pengetahuan. Gunakan pengambilan untuk fakta dan pergantian contoh terbimbing untuk prosedur yang dapat ditransfer, alih-alih satu default untuk keduanya.
- Pantau volume petunjuk sebagai diagnostik, bukan hanya dukungan. Meningkatnya penggunaan petunjuk dengan kinerja tanpa bantuan yang datar adalah tanda khas ketergantungan yang tampak produktif.

**Untuk pengembang**

- Laporkan hasil produktivitas dan pembelajaran sebagai metrik yang berbeda, karena korpus berulang kali menemukan yang pertama sambil gagal menemukan yang kedua (g ≈ 0 dalam meta-analisis pemrograman). Dasbor yang mencampur keduanya akan dibaca sebagai bukti pembelajaran.
- Jangan berasumsi sistem Anda digeneralisasi lintas komponen pengetahuan. Hasil rasio contoh–soal menyiratkan jadwal optimal adalah properti konten, bukan properti platform.
- Buat penggunaan petunjuk dan perancah terlihat oleh instruktur, karena volume adalah salah satu dari sedikit sinyal perilaku yang secara empiris terkait dengan hasil yang lebih lemah.

**Untuk peneliti**

- Preregistrasikan ukuran hasil dan nyatakan apakah ia mengizinkan AI atau tanpa bantuan. Arah temuan dapat berbalik hanya karena pilihan ini.
- Laporkan ukuran efek terhadap pembanding yang dinamai, bukan terhadap "pendekatan tradisional" secara abstrak. Hasil Bank Dunia hanya dapat ditafsirkan karena ia menamai kelas pembandingnya.
- Bedakan secara eksplisit penggelembungan kinerja dari pergeseran pembelajaran, karena keduanya menyiratkan obat yang berbeda — perancangan ulang tugas versus pengajaran ulang.

## Konsep terkait

- [[rct]]
- [[meta-analysis-systematic-review]]
- [[formative-assessment]]
- [[summative-assessment]]
- [[cognitive-offloading]]
- [[math-education]]
- [[human-in-the-loop-ai]]
- [[affective-tutoring]]
- [[theory-development-aied]] — Pengembangan Teori dalam AI dalam Pendidikan
- [[self-report-measures]]
- [[research-methods-aied]] — Metode Penelitian dalam AIED (bagian DBR)
- [[social-emotional-learning]] — Pembelajaran Sosial-Emosional
- [[student-support-and-success]] — hasil administratif (penyelesaian tugas, kredit, persistensi, kelulusan) yang berbeda dari perolehan belajar

## Artikel terkait
- [[epistemological-audit-genai-meta-analyses-2026]] — Audit Epistemologis Kritis atas Sintesis Bukti Awal dalam Penelitian Pendidikan AI Generatif (Fütterer dkk. 2026)
- [[contractor-learning-impact-generative-ai-2026]] — Akses chatbot siap pakai menaikkan skor tes tanpa bantuan yang bertahan seminggu (Contractor & Reyes 2026)
- [[kestin-ai-tutoring-outperforms-active-learning-rct-2025]] — Tutoring AI mengungguli pembelajaran aktif di kelas: RCT yang memperkenalkan rancangan berbasis penelitian baru dalam lingkungan pendidikan autentik (Kestin dkk. 2025)
- [[genai-performance-vs-learning]] — mengapa kinerja berbantuan bukan hasil pembelajaran (Yan dkk. 2025)
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutoring virtual dengan CAL: eksperimen tentang pengambilan dan pembelajaran
- [[making-ai-tutoring-productive-mastery-math-2026]] — Membuat tutoring AI produktif: latihan matematika berbasis penguasaan
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — Satu Klik Jauhnya: Khanmigo dalam eksperimen sekolah dua tahun
- [[ai-literacy-assessment-misalignment]] — Penilaian Literasi AI: Ketidakselarasan Laporan Diri vs Kinerja
- [[generative-ai-reduced-study-time-math]] — Penyelesaian Lebih Cepat, Lebih Sedikit Belajar: AI Generatif Mengurangi Waktu Belajar pada Soal Matematika dan Pengetahuan yang Dibangunnya
- [[genai-meta-analysis-programming-learning]] — Meta-analisis efek AI generatif terhadap produktivitas dan pembelajaran dalam pemrograman
- [[liu-ai-literacy-interventions-meta-analysis-2026]] — Meta-analisis efek intervensi literasi AI
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — Bantuan ChatGPT menghasilkan perolehan belajar setara bantuan tutor manusia
- [[generative-ai-guardrails-harm-learning]] — AI generatif tanpa pagar pengaman dapat merugikan pembelajaran (RCT PNAS 2025)
- [[absent-cognitive-baseline-2026]] — Baseline Kognitif yang Absen: Menteorikan Celah Struktural dalam Penilaian Diri Akademik Mahasiswa Asli-AI
- [[oecd-digital-education-outlook-2026]] — Outlook Pendidikan Digital OECD 2026
- [[ai-changing-teaching-workflows]] — Bagaimana AI Mengubah Alur Kerja Pengajaran
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analisis pembelajaran bahasa berbantuan robot terwujud yang ditingkatkan AI
- [[genai-educational-outcomes-meta-analysis]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Pembedaan kinerja langsung vs pembelajaran bertahan lama
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Penalti belajar AI generatif: pengalihdayaan pekerjaan rumah merugikan pembelajaran
- [[ai-assisted-collaborative-learning-model-dbr]] — Model DBR pembelajaran kolaboratif berbantuan AI (berpikir kritis +24.1%, perolehan pemecahan masalah)
- [[stanford-evidence-base-ai-k12-2026]] — AI khusus tutoring vs AI umum
- [[jost-llm-programming-education-learning-outcomes]] — Ketergantungan LLM dan nilai dalam koding (korelasi negatif)
- [[genai-can-harm-teaching-rct-2026]] — AI generatif dapat merugikan pengajaran (RCT)
- [[zhao-genai-higher-order-thinking-meta-2026]] — Meta-analisis GenAI dan berpikir tingkat tinggi
- [[mujib-ai-ibl-creative-math-2026]] — IBL berbantuan AI dan kinerja matematika kreatif
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]] — Perolehan scaffolding PBL yang ditingkatkan AI
- [[ccct-cooperative-learning-technique]] — Teknik pembelajaran kooperatif yang dirancang AI
- [[scaffolding-srl-feedback-genai-human-peers]] — Perolehan umpan balik mandiri terstruktur
- [[learner-ai-interaction-patterns-oop]] — Pola interaksi dan perolehan belajar dalam OOP
- [[ai-feedback-critical-thinking-writing-2026]] — Umpan balik AI dan berpikir kritis dalam menulis
- [[pedagogy-ai-mistakes]] — Pedagogi Kesalahan AI: Menumbuhkan Berpikir Tingkat Tinggi (Hosseini 2026)
- [[computational-thinking-aica-2026]] — Tingkat Berpikir Komputasional dan Asisten Koding AI (2026)
- [[burneo-can-edtech-close-learning-gaps-2026]] — Meta-analisis: EdTech adaptif/AI menaikkan pembelajaran ~0.125 sd
- [[gpt4-feedback-student-activation-2026]]
- [[rachatasumrit-example-problem-ratio-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT dalam Pendidikan: Efek yang Mencari Sebab (kritik perbandingan media atas ukuran perolehan)
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analisis: efek perolehan belajar AI yang disesuaikan bias ~1/3 dari besaran yang dilaporkan
- [[oneill-presumed-effective-meta-analysis-2026]] — Dianggap Efektif: audit atas meta-analisis AIED yang cacat
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Sintesis STEM yang mengendalikan ukuran efek dependen dan menguji bias publikasi, tetapi tidak menerapkan penilaian kualitas (Doğan dkk. 2026)
- [[ai-education-effects-second-order-meta-analysis-2026]] — Meta-analisis orde kedua atas 45 meta-analisis AI dalam pendidikan, dengan efek terkoreksi tumpang tindih dan penilaian kualitas atas lapisan sintesis (Emslander dkk. 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutoring AI dan manusia menghasilkan perolehan belajar GRE yang setara
- [[rodrigues-aied-unplugged-numeracy-2026]] — Dalam AI yang dimediasi guru, persiapan menggerakkan perolehan dan alatnya tidak
