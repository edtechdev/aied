---
title: Desain Pembelajaran
created: "2026-10-27T17:08:06-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: concepts/learning-design
source_updated: "2026-10-28T00:58:16-04:00"
updated: "2026-10-27T17:08:06-04:00"
translation_note: "*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Desain Pembelajaran** (juga dikenal sebagai *desain instruksional*) - proses sistematis untuk menciptakan pengalaman belajar yang efektif melalui analisis kebutuhan belajar serta desain, pengembangan, penerapan, dan evaluasi bahan dan aktivitas instruksional. AI mentransformasi desain pembelajaran dengan mengotomasi pembuatan konten, memungkinkan jalur [[adaptive-learning|pembelajaran adaptif]], mendukung iterasi berbasis data, dan mengaugmentasi - alih-alih menggantikan - peran perancang instruksional.

## Pertanyaan yang Perlu Dipertimbangkan

- Pikirkan sebuah mata kuliah atau pelajaran yang pernah Anda alami atau rancang. Di mana 'apa yang diajarkan' (kurikulum) berakhir dan 'bagaimana mengajarkannya' (desain pembelajaran) dimulai - dan bagaimana keduanya saling berinteraksi?
- Asumsi umum adalah bahwa kefasihan AI yang lebih baik otomatis menghasilkan konten pendidikan yang lebih baik. Halaman ini membantahnya dengan bukti bahwa struktur pedagogis yang eksplisit - bukan hanya kefasihan AI - yang menentukan efektivitas pembelajaran. Di mana Anda pernah melihat keluaran yang mengesankan tetapi gagal mengajar?
- Jika sebuah alat AI dapat menghasilkan mata kuliah lengkap dari satu prompt, keputusan manusia apa yang menjadi lebih penting alih-alih lebih tidak penting? Halaman ini berargumen bahwa AI mengaugmentasi alih-alih menggantikan peran perancang instruksional - seperti apa peran yang diaugmentasi itu?
- Sebagian model desain instruksional seperti ADDIE digunakan sebagai langkah linear yang kaku. Tetapi halaman ini memperlakukannya sebagai heuristik perencanaan yang iteratif dan fleksibel. Kapan mengikuti proses terlalu harfiah dapat merusak desain yang baik?
- Halaman ini menunjukkan bahwa prompting yang berdasar pedagogis - misalnya, kerangka lima langkah yang berbasis teori pembelajaran - secara signifikan memperbaiki hasil tingkat tinggi. Jika Anda membangun tutor AI, apa yang akan Anda kodekan dalam lapisan desain eksplisit agar strategi mengajarnya tetap dapat dilacak dan direproduksi?

## Pendahuluan

Desain pembelajaran menjembatani kemampuan AI dan pedagogi yang efektif. Jika [[curriculum-design]] menangani *apa* yang diajarkan pada tingkat program, desain pembelajaran menangani *bagaimana* mengajarkannya pada tingkat mata kuliah dan pelajaran. Artikel-artikel dalam basis pengetahuan ini mengeksplorasi baik AI sebagai alat bagi perancang pembelajaran maupun prinsip-prinsip desain pembelajaran untuk membangun sistem [[intelligent-tutoring|tutoring AI]] yang efektif.

Apa yang terlibat dalam kerja desain itu dalam praktiknya sendiri merupakan pertanyaan empiris. [[tang-chatbots-learning-design-2026|Tang et al. (2026)]] memberi kode pada 1.378 giliran perancang-chatbot dari lima perancang pembelajaran pemula yang bekerja dengan chatbot yang tertanam dalam alat desain, dan menemukan bahwa dialognya mengelompok pada hasil pembelajaran yang dimaksudkan dan pendekatan pedagogis alih-alih pembuatan konten. Perancang kembali ke hasil pembelajaran berulang kali sebagai pemeriksaan keselarasan sambil mengubah komponen kurikulum menjadi tugas konkret, dan peran asisten bergeser lintas fase, dari menjernihkan istilah ke mendukung desain tugas hingga menjalankan pemeriksaan verifikasi sebelum tenggat. Dukungan desain, menurut bukti ini, lebih tentang menjaga niat desain tetap koheren daripada menghasilkan materi.

Analitik pembelajaran dan AI generatif mendukung bagian desain yang berbeda: pada 11 kelompok fokus di satu universitas Australia, wacana analitik paling sering berko-okurensi dengan konteks dan pemecahan masalah tingkat mata kuliah (0,32), sementara wacana GenAI berpusat pada desain penilaian (0,26) dan merancang untuk penentuan nasib sendiri mahasiswa (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen et al. (2026)]]).

### Tema penelitian utama

**Pembuatan konten berbantuan AI** adalah aplikasi yang paling langsung transformatif. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]** menyajikan arsitektur enam fase yang mengintegrasikan AI Generatif dengan LaTeX dan Python untuk mengotomasi pembuatan materi [[stem-education|STEM]], yang divalidasi pada 8 modul dan 28 konteks proyek dengan penilaian mutu oleh siswa sebesar 8,5-9,9/10. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** menggunakan kerangka multi-agen yang terstruktur di sekitar model ADDIE, dengan agen berbasis peran (Teaching Faculty, Instructional Designer, Course Coordinator) yang berkolaborasi untuk menghasilkan materi mata kuliah lengkap. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** menyediakan pipeline terstruktur untuk [[video-education|pembuatan video]] [[pedagogy|pedagogis]] adaptif yang berdasar pada korpus mata kuliah, menunjukkan bahwa struktur pedagogis yang eksplisit - bukan hanya kefasihan AI - sangat penting bagi pembuatan konten pendidikan. Platform [[generative-ai|AI generatif]] juga dapat mewujudkan prinsip desain pembelajaran dalam konten yang dihasilkannya: [[ai-modeling-problem-generation-platform-2026|sebuah platform bertenaga AI untuk menghasilkan masalah pemodelan matematika]] menggabungkan prinsip desain yang mapan dengan [[rag|retrieval-augmented generation]], yang dikembangkan melalui pendekatan ADDIE untuk menghasilkan tugas dan rekomendasi yang berdasar pedagogis yang tidak dimiliki generator konten konvensional. Namun hasil dari pembuatan konten dan pelajaran berbantuan AI semacam itu dimediasi oleh keahlian guru itu sendiri: [[choi-teacher-ai-interaction-lesson-design-2026|Choi et al. (2026)]] menemukan bahwa guru berpengalaman secara kritis menyesuaikan ide pelajaran yang dihasilkan AI dengan siswa dan konteksnya (memberi prompt ulang dan mengelaborasi keluaran), sedangkan pemula cenderung menerima saran AI secara langsung - sehingga nilai pedagogis alat konten AI bergantung pada pengalaman dan kemahiran AI guru, bukan pada alatnya saja. Tinjauan sistematis atas [[wang-teacher-ai-co-design-review-2026|ko-desain tugas belajar oleh guru dan AI]] (Wang, Liu & Islam 2026) menegaskan pola itu dalam skala 28 studi (2015-2025): GenAI terutama digunakan untuk perencanaan pelajaran, pembuatan prompt, dan ideasi kreatif, dan mode kolaborasi yang dominan adalah AI sebagai asisten/generator konten alih-alih ko-perancang yang lebih penuh - dengan efisiensi, daya tanggap, [[creativity]], dan [[equity-in-ai-education|ekuitas]] berulang sebagai afordansi. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] mempertajam temuan keahlian guru untuk desain aktivitas kelompok: guru berpengalaman menghasilkan arsitektur peran yang lebih kaya, lebih sinergis, dan lebih selaras ZPD dalam aktivitas kooperatif yang dirancang AI dibandingkan pemula terlepas dari keakraban AI, membingkai "literasi prompt pedagogis" sebagai tuas yang mengubah keluaran AI menjadi [[collaborative-learning|pembelajaran kelompok terdiferensiasi]] yang efektif.

Uji coba Aila memberi angka waktu perencanaan pada pola itu. Guru di sekolah dasar yang diacak dalam uji itu menghabiskan 2,51 jam seminggu untuk menyiapkan pelajaran dengan alat itu berbanding 3,32 jam tanpanya, namun guru median hanya merencanakan 21% hingga 40% pelajaran dari nol, yang merupakan kasus yang diatasi oleh alat dari-nol ([[roy-aila-lesson-planning-teacher-choices-2026|Roy et al., 2026]]).

Di mana materi yang dihasilkan kurang memadai adalah kesesuaian kurikulum: tujuh guru matematika menilai masalah productive-failure yang dihasilkan AI mendekati buatan manusia pada mutu keseluruhan (M = 17,19 vs 17,43 dari 25) tetapi lebih rendah pada keselarasan kurikulum (M = 2,57 vs 3,29), sehingga masalah yang dihasilkan masih perlu diedit untuk panjang, tingkat keterbacaan, dan visual ([[rhaimi-productivemath-2025|Rhaimi et al. (2025)]]).

**Tutoring AI yang berdasar pedagogis** menerapkan prinsip desain instruksional pada desain sistem AI. **[[didactical-teacher-assistant-dimensional-modeling|Brisson et al.]]** membangun asisten guru [[llm]] yang digerakkan secara didaktis di mana strategi tutoring dikodekan dalam lapisan eksternal yang eksplisit - sehingga pemilihan konten dan penataan didaktis dapat dilacak dan direproduksi, yang secara langsung menangani kekhawatiran opasitas dalam [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou et al.]]** menunjukkan bahwa kerangka [[prompt-engineering|prompting]] lima langkah yang berdasar pada Generative [[learning-theories|Learning Theory]] secara signifikan memperbaiki hasil kognitif tingkat tinggi, menunjukkan bahwa panduan instruksional - bukan hanya akses AI - menentukan efektivitas pembelajaran. Keduanya terhubung ke [[scaffolding]] dan [[intelligent-tutoring]].

**Kerangka dan evaluasi** menyediakan pendekatan terstruktur. **[[bridging-instructional-design-framework-math]]** dan **[[cotal-formative-assessment-scoring-2026|CoTAL]]** menunjukkan prinsip desain [[human-in-the-loop-ai|human-in-the-loop]]. **[[genai-mindtool-generative-learning]]** memposisikan AI sebagai "mindtool" - mitra kognitif yang memperluas alih-alih menggantikan pemikiran pembelajar - yang secara langsung menerapkan teori desain instruksional pada integrasi AI. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** menerapkan prinsip Universal Design for Learning untuk menciptakan mitra pemikir AI yang aksesibel bagi pendidik, yang menghubungkan desain instruksional dengan [[inclusive-learning]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) adalah kerangka penataan tugas untuk penggunaan AI yang diaktifkan secara kognitif yang membatasi kontribusi AI sehingga prediksi, interpretasi, dan evaluasi tetap menjadi milik pembelajar - adaptasi khas AI dari siklus inkuiri yang berdasar pada [[self-regulated-learning]], Cognitive Load Theory, dan [[human-ai-collaboration]]. Melengkapi kerangka desain ini, [[dohn-boundary-object-classifying-genai-learning-activities-2026|taksonomi Dohn et al. (2026)]] menawarkan *klasifikasi* alih-alih metode desain: enam kategori (Learning Objective, Content, Representation Format, Epistemic [[student-engagement|Engagement]], Social Design, Artifacts) yang memungkinkan perancang dan [[research-methods-aied|peneliti]] menggambarkan, membandingkan, dan membayangkan aktivitas pembelajaran GenAI dengan menjelaskan mengapa, apa, bagaimana, dengan apa, dan dengan siapa pembelajar terlibat dengan GenAI - dibangun sebagai objek batas melalui dialog postdigital. Kerangka ruang kelas pintar memperluasnya ke [[teacher-education|pendidikan guru]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao, dan Wang (2026)]] mengusulkan kerangka tiga dimensi untuk pendidikan pintar - efektivitas pembelajaran, teknologi informasi dan komunikasi (TIK), dan organisasi kelas - dan mewujudkannya dalam mata kuliah M.Ed. [[math-education|matematika]] yang mengintegrasikan [[automated-assessment|penilaian otomatis]], rekomendasi terpersonalisasi, dan [[ai-feedback-quality|umpan balik AI]] multi-bentuk lintas tahap pra-, selama, dan pasca-kelas. Kuasi-eksperimen menunjukkan perolehan signifikan dalam kemampuan mahasiswa merumuskan tujuan instruksional yang presisi dan berdasar profesional, menghasilkan **D-T-E Model** yang dapat ditransfer (Disciplinary Demand-Technological Empowerment-Evaluation Loop) - panduan [[discipline-specific-aied|khas disiplin]] bagi [[educational-development|pendidik guru]] yang memindahkan konsep pendidikan pintar ke praktik desain instruksional yang praktis.

**Desain untuk jangkauan.** Kerangka tujuh-tuas Halani menanyakan pada setiap pengaturan mata kuliah tuas mana yang masih beroperasi ketika siswa sendirian dengan AI; langkah struktural seperti mengubah apa yang disertifikasi oleh nilai, atau tugas yang tidak dapat diselesaikan tanpa pemikirannya, menjangkau lebih jauh daripada memberi tahu siswa bahwa proses itu penting ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Batasi alatnya untuk melindungi pemikirannya.** Sebuah desain penulisan argumentatif sembilan minggu yang mengurutkan chatbot yang dibatasi guru, yang mengajukan pertanyaan dan menolak menghasilkan prosa siswa, membuat empat siswa sekolah menengah beralih dari konsumen AI pasif menjadi evaluator yang membantah keluaran - pembatasan strategis, bukan generativitas tanpa batas, yang mengikuti perolehannya ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Prompting berpanduan rubrik sebagai tuas desain.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] menunjukkan bahwa rubrik berfungsi sebagai antarmuka mediasi antara niat pedagogis manusia dan inferensi mesin: memperlakukan kriteria penilaian sebagai artefak desain yang dapat direvisi - alih-alih instrumen tetap - dan secara iteratif menyempurnakannya bersama LLM menaikkan kesepakatan LLM-manusia atas karya desain mahasiswa dari 54,75% ke 81,25%. Rubrik yang direkayasa untuk LLM harus menyeimbangkan presisi dan fleksibilitas - terlalu kabur mengundang interpretasi bebas, terlalu kaku mereduksi model menjadi pencocokan pola - dan prompting yang sadar peran (instruktur, peninjau sejawat, peninjau hibah) menghasilkan umpan balik evaluatif yang berbeda. Ini memposisikan rekayasa rubrik sebagai praktik desain pembelajaran yang konkret untuk membentuk perilaku evaluasi AI, dengan pengawasan human-in-the-loop tetap penting.

**Agen AI untuk desain instruksional** memperluas bidang ini ke [[agentic-ai|AI agensik]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** adalah tolok ukur terstandar pertama yang berdasar teori untuk mengevaluasi agen desain instruksional berbasis LLM - Context Matrix-nya yang berisi 25.795 skenario (51 variabel kontekstual × 33 sub-langkah ISD dari ADDIE) menunjukkan bahwa agen yang berdasar pada kerangka ISD klasik (ADDIE, Dick & Carey, Rapid Prototyping ISD) mengalahkan agen tanpa teori, yang memvalidasi secara empiris bahwa desain instruksional adalah disiplin terstruktur alih-alih tugas prompting generik. Agen bukan hanya *pembangun* desain tetapi juga *kritikus* atasnya: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] menggunakan satu agen web otonom yang menavigasi pelajaran daring multi-langkah seperti seorang siswa untuk mengevaluasi desain pembelajaran *sebelum* pembelajar nyata terlibat - deskripsinya tentang pengalaman siswa memprediksi di mana pemula akan berhenti dan memunculkan umpan balik desain yang dapat ditindaklanjuti, mengalahkan setiap baseline dan bahkan kohort siswa simulasi pada mata kuliah CS1 global. Ini membingkai evaluasi agensik pra-peluncuran sebagai pelengkap berbiaya rendah bagi iterasi desain manusia. **[[wang-multi-agent-systems-learning-designers-2025]]** dan **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]** mengeksplorasi kerangka multi-agen yang mengorkestrasi agen berbasis peran di sekitar model desain instruksional, sementara **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** mengkaji bagaimana guru dan agen bersama-sama menerapkan pengetahuan teknologi-pedagogis-konten. Kerja ini menghubungkan desain instruksional dengan [[benchmark|pembandingan]], [[ai-ed-evaluation]], dan desain [[curriculum-design|kurikulum]] dalam skala besar.

### Koneksi ke konsep terkait

Desain pembelajaran adalah disiplin jembatan [[ai-education|AI dalam pendidikan]] - ia menghubungkan [[curriculum-design]] (apa yang diajarkan) dengan [[scaffolding]] (bagaimana mendukung pembelajar), [[educational-development]] (bagaimana menyiapkan pendidik), dan [[generative-ai]] (alatnya sendiri). Ia terkopel erat dengan [[teacher-role]] karena alat AI membentuk ulang apa yang dilakukan perancang pembelajaran dan guru, dan dengan [[ai-literacy]] karena integrasi AI yang efektif menuntut pendidik memahami kemampuan dan keterbatasan AI. Kerja desain pada akhirnya mengkristal menjadi *urutan aktivitas*: [[pedagogical-patterns|pola pedagogis]] mengatalogkan urutan langkah yang telah teruji, sehingga perancang dapat memutuskan di mana AI berada dalam sebuah pelajaran alih-alih hanya apa yang harus disertakan. [[learning-sciences|Ilmu pembelajaran]] adalah bidang penelitian di balik prinsip-prinsip ini: ketika halaman ini mencakup praktik profesional menciptakan pengalaman belajar, ilmu pembelajaran mempelajari praktik itu dan desainnya secara empiris serta menghasilkan prinsip kognitif, motivasional dan sosial yang kemudian dioperasionalkan oleh desain pembelajaran.

### Bagaimana desain pembelajaran menentukan perolehan belajar

Desain pembelajaran adalah tuas yang menentukan apakah AI menghasilkan [[learning-gains|perolehan belajar]] atau hanya kinerja yang digelembungkan AI. Bukti dalam basis pengetahuan ini konsisten tentang hal ini: **alat AI yang sama menghasilkan perolehan besar atau kerugian bersih bergantung pada bagaimana pengalaman belajar dirancang di sekitarnya.** [[instructional-guidance-genai-learning|Hou et al.]] menunjukkan bahwa kerangka prompting lima langkah yang berdasar teori pembelajaran secara signifikan memperbaiki hasil kognitif tingkat tinggi, sementara akses ke AI saja tidak; kerangka [[genai-mindtool-generative-learning|mindtool]] dan [[airis-cognitively-activated-ai-physics-2026|AIRIS]] mempertahankan kerja kognitif pembelajar sehingga perolehan yang bertahan lama (bukan efisiensi tugas) yang dihasilkan. Pilihan desain yang melindungi [[learning-gains]] - penopangan yang menuntut upaya siswa, [[formative-assessment]] dengan ukuran hasil tanpa bantuan, dan struktur pedagogis yang menjaga pembelajar sebagai agennya - mencerminkan temuan bidang ini (lihat [[learning-gains]]) bahwa AI adalah perolehan yang kuat ketika ia melatih dan kerugian ketika ia menjawab. Sebaliknya, pelajaran terintegrasi AI yang dirancang buruk jatuh ke dalam [[cognitive-offloading|jurang kinerja-pembelajaran]], di mana keberhasilan yang tampak menutupi ketiadaan pembelajaran.

### Panduan praktis bagi perancang dan pengembang

Bagi perancang instruksional, pengembang mata kuliah, dan teknisi yang membangun pengalaman belajar berbantuan AI, temuan dalam basis pengetahuan ini diterjemahkan menjadi praktik yang dapat ditindaklanjuti. Satu batas layak ditandai sebelum praktik-praktik itu sendiri: desain pembelajaran sebagaimana digambarkan halaman ini adalah desain sebuah mata kuliah untuk kohort yang diketahui, sedangkan prinsip yang sama yang dipanggang ke dalam produk yang akan digunakan banyak mata kuliah - yang diajar oleh orang-orang yang tidak akan pernah ditemui perancangnya - adalah kerja [[educational-technology-developers]], di mana default, kemampuan konfigurasi dan dokumentasi membawa bobot pedagogis:

**Dasarkan pembuatan AI pada model instruksional yang terstruktur.** Konten AI hanya sebaik struktur pedagogis di belakangnya - struktur eksplisit, bukan kefasihan AI, yang menentukan mutunya. Rancang di sekitar model yang diakui (ADDIE, Dick & Carey, rapid prototyping) dan kodekan keputusan pedagogis secara eksplisit alih-alih mengandalkan model untuk menyimpulkannya.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Adopsi kerangka tingkat-prinsip selain model instruksional.** Model tingkat mata kuliah menata satu desain; kerangka terpublikasi menetapkan kriteria yang harus dipenuhi banyak desain. Contoh yang layak dibaca utuh adalah *Powerful Learning with Emerging Technology* dari Digital Promise, yang menata panduannya di bawah tiga prinsip - Evidence-Based, Learner-Centered, Skill-Building - yang masing-masing diperluas menjadi praktik dan strategi, dan mengaitkan [[privacy]], [[explainable-ai|keterjelasan]] dan keadilan pada praktik tertentu sebagai kewajiban keamanan alih-alih tambahan opsional.([[powerful-learning-with-emerging-technology-2025]])
**Sesuaikan konfigurasi AI dengan tugasnya, bukan dengan kecanggihannya.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] membedakan empat lapisan - prompt, konteks, harness, dan lingkar terverifikasi - dan menerapkan prinsip lapisan minimal yang memadai: gunakan konfigurasi paling sederhana yang mampu menghasilkan hasil terverifikasi, karena orkestrasi tambahan membawa biaya koordinasi, verifikasi, privasi dan pemahaman.

**Gunakan alur kerja multi-agen berbasis peran untuk produksi konten.** Alih-alih satu prompt generik, orkestrasi agen/peran berbeda (dosen pengajar, perancang instruksional, koordinator mata kuliah) yang berkolaborasi melalui pipeline yang ditetapkan - ini meniru cara tim mata kuliah nyata bekerja dan menghasilkan materi yang lebih lengkap daripada satu prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Sediakan panduan instruksional, bukan hanya akses AI.** Baik pembelajar berinteraksi langsung dengan AI maupun dengan materi yang dihasilkan AI, panduan yang dibangun di atas teori pembelajaran (mis. [[scaffolding|penopang]] prompting bertahap yang berdasar prinsip pembelajaran generatif) mendorong hasil tingkat tinggi; akses saja tidak. Rancang aktivitas belajar di sekitar cara pikiran belajar, dan perlakukan AI sebagai "mindtool" kognitif yang memperluas pemikiran alih-alih menggantikannya.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modelkan lupa, dan jadwalkan tinjauan di tempat kemundurannya terburuk.** G4L merepresentasikan kemunduran pengetahuan dengan kurva lupa Ebbinghaus yang digerakkan oleh waktu yang berlalu dan pengulangan, dan memprioritaskan unit yang paling rentan terhadap kemunduran alih-alih menyajikan ulang apa pun yang paling baru diberi skor ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin et al. (2026) menambahkan langkah operasional untuk memutuskan di mana AI masuk: uraikan aktivitas menjadi komponen yang paling baik dikerjakan secara mandiri dan yang paling baik digabungkan dengan AI, dengan penilaian pendidik tetap sentral dalam pemisahan itu ([[fowlin-operationalizing-learning-principles-ai|Fowlin et al. (2026)]]).

**Buat konten dapat dilacak dan ditinjau.** Biarkan perancang manusia meninjau dan mengoreksi keluaran AI sebelum mencapai pembelajar, dan tata pembuatan AI sehingga alasan pedagogisnya (mengapa konten ini, dalam urutan ini) dapat diperiksa - menangani mutu sekaligus kekhawatiran opasitas yang merusak kepercayaan terhadap instruksi yang dihasilkan [[trust]].([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Tinjau media yang dihasilkan AI pada tahap skrip, bukan setelah sintesis.** PedaCo menempatkan tinjauan pendidik pada skrip - di mana kesalahan pedagogis murah diperbaiki - sebelum apa pun dirender; validitas instruksional yang dinilai naik dari 3,07 ke 3,86, sementara lapisan otomatis pasca-sintesis hanya memperbaiki dua dari lima dimensi ([[ai-video-dual-gatekeeping-2026|Kim, Baek dan Kwak (2026)]]).

**Rancang untuk [[accessibility]] sejak awal.** Terapkan prinsip [[universal-design-for-learning|UDL]] saat membangun alat AI dan materi yang dihasilkan AI agar melayani pembelajar yang beragam, alih-alih menambahkan aksesibilitas secara retroaktif.([[ludia-udl-ai-thought-partner-2026]])

**Rencanakan medium penyampaiannya.** Desain instruksional untuk [[online-teaching-and-learning|pengajaran dan pembelajaran daring]] bukan penerjemahan netral dari desain tatap muka - mediumnya mengubah penopangan, penilaian, dan interaksi mana yang layak, dan AI mengalikan baik peluangnya ([[personalized-learning|personalisasi]] yang dapat diskalakan, dukungan yang selalu tersedia) maupun risikonya ([[academic-integrity|integritas]], [[cognitive-offloading|offloading kognitif]]) yang harus direncanakan perancang. Rancang pembungkus pedagogis AI secara sengaja di daring sebagaimana di konteks tatap muka.

**Evaluasi terhadap tolok ukur, bukan perasaan.** Jika Anda membangun agen desain instruksional, evaluasi ia terhadap tolok ukur terstandar yang berdasar teori (mis. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]) agar Anda dapat mengukur apakah berdasar pada kerangka ISD nyata benar-benar memperbaiki keluaran dibandingkan LLM generik.([[jeon-isd-agent-bench-2026]])

- **AI sedang membentuk ulang praktik desain instruksional.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|meninjau secara sistematis]] 28 studi (2020-2025) dan menemukan bahwa AI membantu perancang dengan pembuatan konten, templat, dan personalisasi, serta dikonseptualisasikan sebagai rekan kerja/kolaborator/mitra alih-alih hanya alat - meskipun keselarasan pedagogis dan kesiapan praktisi tetap menjadi tantangan.

- **Aktivitas yang terdokumentasi terkonsentrasi pada satu fase siklus.** Dalam tinjauan atas 78 studi tentang desain instruksional berbantuan AI, aktivitas fase Design muncul pada **74 dari 78 studi (95%)** dan Development pada 44 (56%), sementara Analysis hanya mencapai 11 (14%), Evaluation 10 (13%) dan Implementation 7 (9%) - dan **tidak ada studi yang mengkaji dukungan AI di seluruh siklus ADDIE yang lengkap**. Siklus itu adalah aspirasi yang tidak dicakup basis bukti, yang penting bagi siapa pun yang dijual "pengembangan mata kuliah bertenaga AI" sebagai kemampuan ujung-ke-ujung ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Tiga peran AI, terdistribusi hierarkis.** Penggunaan *generatif* - AI menghasilkan konten desain atas arahan pendidik - mendominasi pada **96% studi**; penggunaan *penopangan*, di mana AI menata penalaran perancang sendiri, muncul pada 35%; penggunaan *evaluatif*, di mana AI menilai mutu artefak, pada 21%. Bidang ini secara luar biasa menggunakan AI untuk membuat sesuatu alih-alih untuk menginterogasi keputusan desainnya sendiri, yang merupakan kebalikan dari konfigurasi teman-kritis yang oleh tinjauan itu disebut menjanjikan secara pendidikan.

## Miskonsepsi Umum

- **"Perencanaan pelajaran dengan AI mengembalikan waktu kepada guru."** Waktu perencanaan memang turun, dari 3,32 jam seminggu menjadi 2,51 dengan alat itu, tetapi **guru median hanya merencanakan 21% hingga 40% pelajaran dari nol**. Waktu dihemat dan perencanaannya tidak menjadi jauh lebih menyeluruh: penghematannya terakumulasi alih-alih diinvestasikan kembali.
- **"Ko-desain dengan AI berbukti baik."** Tinjauan sistematis atas [[wang-teacher-ai-co-design-review-2026|ko-desain tugas belajar oleh guru-AI]] **menegaskan pola itu dalam skala 28 studi**, yang menggambarkan praktik yang konsisten alih-alih menunjukkan hasil yang lebih unggul.
- **"Rubrik adalah input yang tetap."** Rubrik berfungsi sebagai **antarmuka mediasi antara niat pedagogis manusia dan inferensi mesin**: memperlakukan kriteria penilaian sebagai **dapat direvisi** itulah yang memungkinkan instrumen itu membawa niat pendidik. Rubrik yang tetap memindahkan pembingkaian default mesin ke dalam penilaian.

## Konsep Terkait

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Kemitraan Pedagogis
- [[online-teaching-and-learning]] - Pengajaran dan Pembelajaran Daring
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] - Payung: pedagogi dan strategi pengajaran dalam pendidikan AI
- [[stakeholders]] - Payung: orang dan audiens dalam pendidikan AI (pembelajar, guru, perancang, administrator, pembuat kebijakan)

## Artikel Terkait

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Penghematan waktu perencanaan yang terukur bersamaan dengan temuan bahwa guru hanya merencanakan 21% hingga 40% pelajaran dari nol
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA dan GenAI dalam pengambilan keputusan desain pembelajaran
- [[tang-chatbots-learning-design-2026]] — Penggunaan chatbot dalam desain pembelajaran: perancang berhenti pada hasil dan pedagogi alih-alih pembuatan konten (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Pola interaksi guru-AI dalam desain pelajaran lintas pengalaman dan kemahiran AI (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI di pendidikan tinggi: keterlibatan + peran mediasi metode pengajaran
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taksonomi (objek batas) untuk mengklasifikasikan aktivitas pembelajaran GenAI
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — AI Web Agents: agen web otonom mengevaluasi desain pelajaran dan memprediksi putus sekolah siswa sebelum siswa terlibat (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: Kerangka untuk Augmentasi AI yang Diaktifkan Secara Kognitif dalam Fisika
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Designing for Reach: Tujuh Tuas dan Siswa yang Sendirian dengan AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — Ketika Mengatakan Tidak Menghasilkan Video Lebih Baik: Gatekeeping Ganda untuk Pembuatan Konten AI yang Berdasar Pedagogis
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI untuk Mendukung Desain Masalah Productive Failure
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI dan Praktik Desain Instruksional: Tinjauan Sistematis (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Tutoring Cerdas Berbasis Graf untuk Domain Dinamis (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Membuat AI sengaja menjengkelkan: batasan dalam penulisan berbantuan AI (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Model ruang kelas pintar dan lingkar D-T-E yang meningkatkan kemahiran desain instruksional M.Ed. dalam matematika (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Platform bertenaga AI yang menghasilkan masalah pemodelan matematika (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Ko-desain tugas belajar oleh guru-AI: tren dan perspektif (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Arsitektur peran dalam aktivitas kelompok terdiferensiasi yang dirancang AI (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM sebagai agen desain pedagogis iteratif
