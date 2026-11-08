---
title: "Ilmu Pembelajaran"
created: "2026-09-17T14:12:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/learning-sciences"
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

> **Ilmu pembelajaran** — bidang penelitian interdisipliner yang mempelajari bagaimana orang belajar dan bagaimana merancang lingkungan tempat pembelajaran terjadi, dengan bersandar pada [[cognitive-psychology|psikologi kognitif]], [[learning-theories|teori pembelajaran]], [[cs-education|ilmu komputer]] dan linguistik, serta menilai rancangannya dengan bukti empiris alih-alih teori semata. Dalam basis pengetahuan ini ia adalah bidang penelitian di sekitar [[ai-education|AI dalam pendidikan]] alih-alih salah satu mata pelajaran sekolah. Ia memasok mekanisme yang dioperasionalkan sistem AI (komponen pengetahuan, [[mastery-learning|ambang penguasaan]], [[transfer-of-learning|transfer]]), objek desain tempat mekanisme itu tertanam ([[learning-design|urutan kursus yang direncanakan]], [[intelligent-tutoring|tutor]], rezim [[feedback]]), dan standar yang dengannya hal itu dinilai ([[learning-gains]], [[assessment-validity]], [[equity-in-ai-education|keadilan]]). Pertanyaan pengorganisasinya bukan apakah sebuah alat berkinerja baik melainkan apakah seorang pembelajar berubah.

## Pertanyaan yang Perlu Dipertimbangkan

- Seorang pembelajar lulus setiap item latihan, sehingga ambang penguasaan mengakhiri set — lalu salah menerapkan aturan itu di tempat tindakan seharusnya ditahan. Kesalahan siapa itu: pembelajar, model, atau aturan penghentiannya?
- Penambangan urutan dapat menggambarkan 554 kursus sebagai pola tanpa mengamati satu pun ruang kelas. Apa yang didapat, dan hilang, oleh bidang ini dengan mempelajari niat yang dirancang alih-alih aktivitas yang dijalankan?
- Sensitivitas demografis dalam umpan balik sebuah LLM tampak seperti adaptasi ketika ia mengikuti tingkat pendidikan yang dinyatakan pembelajar dan tampak seperti bias ketika ia menggeser sentimen. Haruskah bidang yang tidak dapat memisahkan keduanya tetap memakai model terbuka untuk menilai?
- Apakah selera ilmu pembelajaran terhadap desain kausal — penugasan acak, audit kontrafaktual, model pembelajar yang dapat dieksekusi — mempersempit apa yang dianggap bukti dalam AI dalam pendidikan?

## Pendahuluan

Ilmu pembelajaran mempelajari pembelajaran dan desain lingkungan belajar, dan ia didefinisikan oleh metodenya sebanyak oleh topiknya: eksperimen, uji coba kelas, pemodelan [[quantitative-research|kuantitatif]] data siswa, analisis [[qualitative-research|kualitatif]] atas desain dan konteks, dan penelitian berbasis desain yang membangun intervensi lalu merevisinya saat digunakan. Keluasan itu memisahkan halaman ini dari tetangga-tetangganya yang memasok kerangka, praktik, dan instrumen; bagian di bawah menetapkan setiap batas dan apa yang telah ditetapkan bidang ini di sisi lain batas itu.

Halaman ini mencakup pengetahuan substantif yang dihasilkan metode semacam itu — apa yang dilakukan pembelajar dengan model generatif, pengaturan mana yang mengubah hasil, dan di mana instrumen bidang ini sendiri gagal. [[discipline-specific-aied]] mengambil potongan yang berlawanan, berpendapat bahwa materi pelajaran mengubah apa yang seharusnya dilakukan dukungan; ilmu pembelajaran mengambil pandangan lintas bidang, dan mekanisme yang diujinya dihimpun di bawah [[cognitive-psychology]].

### Bagaimana AI muncul dalam ilmu pembelajaran

- **Mekanisme lebih dulu, lalu modelnya.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren dan Stamper (2026)]] menjalankan sebelas eksperimen (N = 192) dengan sistem [[intelligent-tutoring]] untuk Riichi Mahjong dan menunjukkan bahwa pembelajar yang mengompilasi produksi yang tergeneralisasi berlebih — tindakan tanpa batasan penerapannya — salah menerapkannya pada item "jangan-bertindak" pertama sebesar 61.5%–100%, berbanding 12% kesalahan yang diharapkan di bawah [[knowledge-tracing|penelusuran pengetahuan Bayesian]]. Dengan ambang penguasaan 95% sistem menghentikan latihan sebelum pembelajar menemui kasus yang menuntut penahanan tindakan, sehingga cacatnya tidak terdeteksi. Latihan jangan-bertindak singkat dengan [[feedback]] yang menyebutkan batasan yang hilang memangkas kesalahan penerapan menjadi 0.0%–23.1% (Cohen's h 1.70–2.44), dan analisis sekunder atas tiga belas kumpulan data *Decimal Point* [[k-12|K-12]] menemukan struktur yang sama pada bias bilangan bulat (84%–88% dari kesalahan perbandingan).
- **Sebuah konsensus memetakan di mana GenAI membantu dan merugikan pembelajaran.** Delphi terpreregistrasi atas 30 ilmuwan pembelajaran menilai 65 proses pembelajaran dan sepakat pada 42: GenAI mengancam akuisisi awal dan [[critical-thinking|pemikiran tingkat tinggi]] tetapi meningkatkan konsolidasi ([[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou et al., 2026]]).
- **Gaya umpan balik, bukan jenis agen, yang menggerakkan keterlibatan pengaturan diri.** Dalam eksperimen 2 × 2 dengan 51 mahasiswa pascasarjana, umpan balik [[socratic-method|Sokrates]] dikaitkan dengan pemantauan pemahaman yang lebih kuat sementara umpan balik direktif membawa beban kognitif lebih tinggi; kedua gaya berjalan dalam urutan tetap yang tidak dikounterbalanskan, sehingga kontrasnya terkait kondisi alih-alih kausal ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

- **Optimumnya bergantung pada konten.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger dan Carvalho (2025)]] memperlakukan rasio contoh–masalah sebagai interaksi konten–perlakuan: dalam eksperimen 2×2 dengan 95 peserta pada materi luas geometri, pelatihan hanya-latihan menghasilkan [[learning-gains|keuntungan pembelajaran]] lebih besar untuk fakta verbatim sementara pelatihan terintegrasi contoh menghasilkan keuntungan lebih besar untuk keterampilan yang dapat digeneralisasi (β = 0.41, p = .038, d = 0.38). Pembelajar tersimulasi (Apprentice Learner) mereproduksi persilangan itu hanya ketika diberi [[cognitive-psychology|mekanisme memori-dan-lupa]] bergaya ACT-R. Lebih banyak latihan tidak selalu lebih baik: konten berorientasi memori menuntut pengambilan kembali, dan keterampilan berorientasi induksi menuntut contoh terintegrasi.

- **Desain sebagai objek yang dapat dianalisis.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec dan Horvat (2026)]] mengarahkan [[learning-analytics]] ke [[learning-design]] itu sendiri, mengodekan 29,064 aktivitas di 554 kursus yang direncanakan dalam alat desain kursus gratis. Akuisisi adalah jenis pembelajaran paling umum dan titik masuk paling umum; transisi Markov terkuat adalah Penilaian → Diskusi (0.332) dan aturan dengan keyakinan tertinggi adalah Akuisisi → Penilaian → Latihan → Latihan (0.743, lift 1.45). Jenis pembelajaran mengikuti tingkat hasil yang dimaksud, dengan Akuisisi turun dari sekitar 50% aktivitas pada level 1 Bloom ke sekitar 20% pada level 6. Penulis menekankan bahwa ini adalah desain pra-implementasi: kemiripannya dengan urutan terbalik, [[inquiry-based-learning|berbasis inkuiri]], atau [[project-based-learning|berbasis proyek]] bukan bukti niat.

- **Mengaudit model yang menilai.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto dan Hovy (2026)]] mengaudit enam [[llm|LLM]] pada [[automated-essay-scoring|penskoran esai]], [[formative-assessment|umpan balik formatif]], dan penjawaban pertanyaan, dengan menahan masukan tugas tetap sambil hanya memvariasikan konteks demografis (192,480 panggilan). Penskoran stabil di bawah persona eksplisit, tetapi Llama-70B menggelembungkan skornya sendiri sebesar 1.57 poin di bawah riwayat percakapan implisit (p < 0.001), dan [[higher-ed|pendidikan tinggi]] menarik respons yang kurang terbaca dan lebih positif — celah sentimen sekitar empat simpangan baku. Efek keterbacaan menyusut sementara efek panjang bertumbuh, dan beberapa koefisien berubah tanda antarkondisi. Penulis menawarkannya sebagai instrumen audit, bukan putusan penerapan, dan membaca keterjalinan sinyal demografis dan topikal sebagai ancaman bagi [[assessment-validity|validitas]] dan [[equity-in-ai-education|keadilan]].

- **Mengukur kompetensi, dan batasnya.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]] mengorganisasi instrumen penggunaan [[generative-ai]] yang kompeten ke dalam empat domain — pengetahuan dan penggunaan, pengawasan epistemik, kalibrasi ketergantungan, dan kendali atas agen yang menggunakan alat — dan menolak meruntuhkannya menjadi satu kontinum kemahiran. Tiga korelasi sampel-sama antara [[ai-literacy|literasi AI]] yang dinilai sendiri dan yang didemonstrasikan digabung menjadi r = .055 (95% CI [-.047, .156], N yang dilaporkan = 2,765), yang oleh penulis dibaca sebagai cukup untuk menolak memperlakukan [[self-report-measures|penilaian diri]] sebagai dapat dipertukarkan dengan skor kinerja, meski tidak cukup untuk menetapkan ambang. Tidak ada instrumen tervalidasi yang mencakup seluruh rangkaian keputusan yang diciptakan agen yang menggunakan alat; baterai berlapis yang diusulkan adalah hipotesis desain.

- **Laporan diri tentang offloading pembelajar sendiri.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]] menerjemahkan literatur [[cognitive-offloading]] menjadi PAUSE, pemeriksaan diri khusus peramban dengan empat domain, setiap item era LLM berjangkar pada sumber, tanpa komposit, tanpa penyimpanan, dan tanpa model di produksi; pita-pitanya bersifat deskriptif alih-alih ternormakan, dan sebuah bacaan tidak boleh dijadikan dasar keputusan penilaian, penerimaan, atau perekrutan. Batas yang dinyatakannya penting: laporan diri tentang offloading rentan terhadap fakultas yang menjadi pokok persoalannya, responden yang dengan sengaja memakai AI sebagai [[scaffolding|perancah]] terbaca sebagai melakukan offloading pada beberapa item, dan apakah offloading terkait AI berbeda dari ketergantungan teknologi umum masih terbuka.

- **Di mana keahlian manusia berada.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] melaporkan pembagian kerja yang paling jelas: dalam [[rct|uji terkontrol acak]] dua bulan dengan sekitar 900 tutor K-12 pemula dan kira-kira 1,800 siswa, saran waktu-nyata yang diambil dari penalaran tutor berpengalaman menaikkan penguasaan topik sebesar 4 poin persentase (62% ke 66%, p < 0.01), dan sebesar 9 poin untuk tutor berperingkat lebih rendah, dengan biaya sekitar \$20 per tutor per tahun. Saran itu menggeser tutorial ke arah pertanyaan penuntun. Keuntungannya proksimal — ujian akhir tahun tidak bergerak. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] menemukan guru tiba pada posisi yang sama melalui desain: enam guru menengah yang membuat prototipe [[conversational-ai|chatbot]] menetapkan ahli terbatas, memegang batas otoritas (tanggung jawab atas pembelajaran dan keselamatan tidak dapat didelegasikan) dan batas keahlian (model tidak memiliki pengetahuan mereka tentang siswa individual), serta mendelegasikan penyajian konten, latihan, dan [[feedback]] korektif sambil menyisakan penetapan tujuan dan [[summative-assessment|penilaian sumatif]].

- **Kapabilitas pada tingkat bidang.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury dan Liu (2026)]] menyurvei 127 fakultas dengan instrumen [[tpack|TPACK]] yang diadaptasi untuk AI generatif: pengetahuan konten dan konten pedagogis yang kuat (M = 4.70–5.15) berdampingan dengan pengetahuan terintegrasi teknologi yang jauh lebih rendah, dengan TPACK holistik terendah pada 2.55, pengetahuan konten tidak berkorelasi dengan domain terintegrasi teknologi mana pun, dan ketiga domain terintegrasi berkorelasi begitu tinggi (r = .81–.91) sehingga mungkin berfungsi sebagai satu faktor. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] membaca lapisan tata kelola melalui prototipe layanan sipil Inggris yang dihentikan, yang basis kodenya adalah prompt sistem plus pipeline pengambilan atas model komersial, dan berargumen bahwa keumuman model fondasi memungkinkan penggunaan ulang yang cepat menjadi alat [[educational-policy-ai|kebijakan]] sekaligus menjadikan keluaran menyimpang sebagai risiko yang selamanya hanya dapat dimitigasi — pengawasan yang mengintip dari luar lingkar alih-alih berada di dalamnya.

- **Celah integrasi, dipetakan:** [[malik-bashir-reconceptualizing-learning-sciences-hybrid-intelligence-2026|Malik dan Bashir (2026)]] menyintesis 32 studi ([[meta-analysis-systematic-review|PRISMA]] 2020, analisis tematik) menjadi empat tema: fragmentasi epistemologis di dalam bidang, kontradiksi teori–teknologi (sistem komputasional berjalan pada prediksi dan perilaku terukur sementara teori pendidikan menekankan konteks dan interaksi sosial), datafikasi pembelajaran melalui analitik, dan [[human-ai-collaboration|kecerdasan hibrida]] sebagai paradigma yang muncul. Kerangka Kecerdasan Hibrida mereka adalah sintesis konseptual, bukan model tervalidasi — penulis menyatakan bahwa kerangka itu menunggu pengujian empiris — tetapi peta empat tema itu adalah lensa audit yang berguna untuk masalah penerjemahan teori-ke-komputasi yang terus dihadapi bidang ini.
- **Bagaimana siswa menggunakan model generatif lebih penting daripada apakah mereka memakainya.** Pengodean 50 pertukaran sarjana menemukan 64% berupa tinjauan pasif atau pertanyaan transaksional dan hanya 36% dialog strategis, dan tugas terstruktur refleksi menggeser keseimbangan ke arah dialog ([[three-pathways-student-ai-interaction-2026|Zahra, 2026]]).
- **Ketergantungan dalam-diri mendahului penurunan [[agency]] yang dirasakan.** Di tiga gelombang data dari 342 mahasiswa sarjana dalam 85 kelompok tetap pada kursus [[collaborative-learning|kolaboratif]] [[writing-education|menulis]] berbantuan AI, ketergantungan pada GenAI yang lebih tinggi dari biasanya memprediksi persepsi agensi manusia berikutnya yang lebih rendah, sementara jalur sebaliknya lebih lemah dan tidak didukung secara statistik ([[genai-reliance-human-agency-collaborative-learning-2026|Wu dan Lu (2026)]]).

- **Distribusi penggunaan GenAI adalah pilihan institusional.** [[sun-student-genai-entanglement-literacy-demands-2026|Sun, Dohn dan Rehm (2026)]] mengklasifikasikan 102 studi pendidikan tinggi menurut bagaimana kerja epistemik didistribusikan antara siswa dan sistem dan menemukan keterjalinan Asisten dan Pemungkin mendominasi masing-masing sebesar 42.16%, membaca kemencengan itu sebagai legitimasi institusional alih-alih kapabilitas teknologi.

- **Bukti proses bergantung pada saluran.** Dengan mengodekan satu tugas desain instruksional berbantuan GenAI bersama 79 mahasiswa sarjana dalam log interaksi sekaligus think-aloud bersamaan, [[metacognitive-processes-genai-interaction-logs-2026|Li dan Liu (2026)]] menemukan bukti pemantauan berkedalaman lebih tinggi lebih umum dalam rekaman think-aloud tetapi bukti [[regulation|regulasi]] berkedalaman lebih tinggi lebih umum dalam log, sehingga tidak ada satu jejak pun yang menjadi kriteria untuk klaim [[metacognition|metakognitif]].

- **Metodenya sama pentingnya dengan temuannya: analisis urutan interaksi kelompok-[[student-ai-interaction|AI]].** [[wang-genai-metacognitive-prompting-preconceptions-2026|Wang et al. (2026)]] mengodekan 595 dan 785 ujaran di sekitar 39 prompt chatbot, menguji transisi lag-1 dengan residu teradjustasi dan Yule's Q, lalu menjalankan penambangan proses dengan setiap episode sebagai kasus. Pemasangan itu menempatkan AI di pusat jaringan interaksi satu komposisi kelompok dan pada satu jalur tunggal di komposisi lain, perbedaan yang tidak dapat ditunjukkan oleh hitungan prompt. Ini adalah templat untuk bertanya di mana AI berada dalam jaringan interaksi sebuah kelompok alih-alih seberapa sering ia muncul.

## Bagaimana ilmu pembelajaran berhubungan dengan bidang tetangganya

[[design-based-research|Penelitian berbasis desain]] adalah metode yang dikembangkan bidang ini alih-alih dipinjam: sebuah intervensi dibangun dan direvisi di dalam ruang kelas yang berjalan, dengan rasional teoretisnya direvisi bersamanya, sehingga satu studi menghasilkan artefak sekaligus prinsip desain. Itulah yang memisahkannya dari eksperimen laboratorium, yang mengisolasi sebab dengan menahan konteks tetap, dan itulah sebabnya temuan bidang ini datang sebagai pengetahuan desain alih-alih sebagai ukuran efek. [[research-methods-aied]] mengambil potongan yang lain: halaman itu menyurvei seluruh repertoar — eksperimen, survei, kerja kualitatif, [[benchmark|tolok ukur]], tinjauan, metode konsensus — sebagai pilihan di antara instrumen, ditimbang menurut validitas klaim yang dapat didukung masing-masing. Halaman ini membaca korpus yang sama dari sisi substantif, menanyakan apa yang telah ditetapkan repertoar itu tentang pembelajaran dan menilai sebuah metode menurut apakah klaim desainnya bertahan saat bersentuhan dengan pembelajar.

[[learning-theories]] menghimpun kerangka-kerangka kandidat — [[behaviorism|behaviorisme]], kognitivisme, [[constructivist|konstruktivisme]], uraian [[sociocultural-learning|sosiokultural]], motivasi dan [[self-regulated-learning|pengaturan diri]] — sebagai lensa untuk membaca AI. Ilmu pembelajaran berbagi kosakata itu tetapi tidak berbagi pendiriannya: di sini teori adalah klaim tentang mekanisme yang harus diwujudkan atau disangkal oleh sebuah desain, dan kedudukan bidang ini bersandar pada kerja empiris dan desain alih-alih pada koherensi sebuah kerangka. Halaman teori adalah yang perlu dibuka untuk mengetahui apa yang dinyatakan sebuah kerangka; halaman ini adalah yang perlu dibuka untuk bukti yang telah dihimpun sebuah kerangka.

Bidang ini juga membangun teori alih-alih hanya menguji kerangka pinjaman: [[theory-development-aied]] mencakup kerja konseptual yang menjelaskan bagaimana pembelajar, guru, dan sistem AI berinteraksi, dan di sanalah konstruk bidang ini sendiri diperdebatkan sebelum diukur. Yang biasanya diminta dihasilkan oleh desainnya adalah [[transfer-of-learning|transfer]] — pengetahuan dan keterampilan yang bertahan melampaui tutor, mata pelajaran, atau tugas tempat keduanya dipelajari — itulah sebabnya keuntungan yang diukur di dalam sebuah alat dihitung sebagai klaim yang lebih lemah daripada yang diukur tanpanya. Dan karena lingkungan yang dirancang adalah intervensi majemuk, mengatribusikan hasil kepada satu komponen adalah masalah pengukuran yang tetap dihadapi bidang ini: [[educational-measurement]] memasok perangkat psikometrik yang membuat atribusi itu sedikit banyak dapat diperdebatkan, itulah sebabnya pertanyaan pengukuran datang lebih awal di sini alih-alih setelah fakta.

[[cognitive-psychology]] adalah disiplin tingkat-mekanisme yang paling banyak ditarik bidang ini, memasok memori kerja terbatas, pengodean dan pengambilan kembali, komponen pengetahuan yang dapat didekomposisi, dan bahasa diagnostik [[student-modeling|pemodelan pembelajar]]. Ilmu pembelajaran memakai mekanisme itu tanpa mereduksi dirinya padanya: unit analisisnya adalah lingkungan yang dirancang yang membawa variabel sosial, [[motivation|motivasional]], dan kontekstual yang tidak dibawa uraian laboratorium tentang memori, dan ujiannya dijalankan pada intervensi utuh alih-alih pada efek kognitif terisolasi.

[[pedagogy]] dan [[learning-design]] mencakup praktik — strategi pengajaran mana yang dipakai, dan bagaimana mengurutkan tujuan, aktivitas, dan penilaian ke dalam sebuah kursus. Keduanya adalah apa yang dipelajari ilmu pembelajaran dari luar, sebagai objek deskripsi dan evaluasi; bidang ini tidak memberi tahu guru taktik mana yang harus dipakai berikutnya, ia melaporkan apa yang telah ditunjukkan oleh taktik-taktik itu. Desain pembelajaran adalah kerabat yang lebih dekat, karena keduanya menghasilkan sesuatu yang dapat diimplementasikan dan diuji, tetapi keluaran perancang adalah kursus yang dapat diajarkan dan keluaran bidang ini adalah pengetahuan tentang desain secara umum.

Temuannya baru bermakna setelah mencapai pengajaran, dan perjalanan itu melewati tiga halaman. [[educational-development]] adalah praktik institusional yang membawanya — pengembangan fakultas, standar, kebijakan, dan [[learner-identity|kerja identitas]] menentukan apakah sebuah desain tervalidasi pernah mencapai ruang kelas, itulah sebabnya bukti bidang ini secara rutin mendahului apa yang telah diimplementasikan institusi. [[teacher-education]] adalah tempat pengetahuan itu harus mendarat sebelum seorang guru masuk ke ruangan, dan [[teacher-role]] adalah tempat ia mendarat sesudahnya, dalam pertimbangan dari saat ke saat tentang kapan harus campur tangan, instrumen mana yang dipakai, dan kapan harus membiarkan pembelajar sendiri. Tak satu pun dari ketiganya menghasilkan temuan ilmu pembelajaran; ketiganya menentukan apakah temuan itu mengubah praktik.

## Miskonsepsi Umum

- **"Ambang penguasaan yang tinggi menjamin pembelajar dapat membedakan."** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren dan Stamper (2026)]] menjalankan **sebelas eksperimen (N = 192)** dengan sistem [[intelligent-tutoring]] dan menemukan bahwa pada **ambang penguasaan 95% sistem mengakhiri latihan sebelum ada kasus yang menuntut pembelajar menahan tindakan**, sehingga cacatnya tidak terdeteksi. Penguasaan atas tindakan tidak mencakup pengetahuan tentang kapan tidak menerapkannya, dan ambang itu mensertifikasi konstruk yang salah.
- **"Lebih banyak contoh lebih aman."** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger dan Carvalho (2025)]] memperlakukan rasio contoh-masalah sebagai **interaksi konten-perlakuan**, dan dalam eksperimen 2×2 optimumnya **bergantung pada konten**. Tidak ada rasio yang benar secara global, sehingga templat instruksional tetap adalah taruhan melawan sebuah interaksi.
- **"Memperbaiki [[misconceptions|miskonsepsi]] adalah soal memberi tahu siswa jawaban yang benar."** Latihan jangan-bertindak singkat dengan [[feedback]] yang menyebutkan batasan yang hilang memangkas kesalahan penerapan menjadi **0.0%-23.1% (Cohen's h 1.70-2.44)**, dan analisis sekunder atas **tiga belas kumpulan data *Decimal Point* K-12** menemukan pola struktural yang sama. Intervensi yang efektif adalah latihan membedakan dengan umpan balik tertarget, bukan koreksi melalui pernyataan — yang secara umum ditetapkan oleh kerja [[refutation-text|teks sanggahan]].
- **"Level Bloom yang lebih tinggi berarti [[active-learning|pembelajaran yang lebih aktif]]."** Akuisisi mendominasi tingkat bawah — **sekitar 50% aktivitas pada level 1 Bloom** — dan menyusut menjadi **sekitar 20% pada level 6**. Tuntutan kognitif dan jenis aktivitas bergerak bersama tetapi bukan sumbu yang sama, sehingga menandai tugas menurut level Bloom tidak memberi tahu Anda apa yang akan dilakukan pembelajar dengannya.

## Apa Artinya bagi Praktik

**Bagi instruktur**

- Ajarkan kasus negatifnya secara eksplisit. Kegagalan ambang 95% adalah alasannya: bangun kondisi di mana langkah yang benar adalah menahan tindakan, atau pembelajar akan menerapkannya di mana-mana.
- Jangan menetapkan rasio contoh-masalah secara tetap di seluruh kursus. Interaksi konten-perlakuan berarti rasio yang tepat untuk prosedur bukanlah rasio yang tepat untuk konsep.
- Gunakan latihan membedakan dengan umpan balik yang menyebutkan batasan yang hilang alih-alih mengulang aturannya. Itulah intervensi yang memiliki ukuran efek terukur di sini.
- Periksa apa yang sebenarnya disertifikasi kriteria penguasaan Anda sebelum Anda memercayainya.

**Bagi pengembang**

- Jangan menghentikan latihan hanya berdasarkan kebenaran. Modelkan kondisi penahanan sebagai keterampilan tersendiri, atau sistem akan mensertifikasi generalisasi berlebih.
- Biarkan rasio menjadi parameter alih-alih konstanta, karena buktinya menyatakan optimumnya bergantung pada konten.
- Laporkan konstruk mana yang diukur kriteria Anda, terpisah dari konstruk mana yang diukur validasi Anda.

## Konsep terkait

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## Artikel terkait

- [[competent-generative-ai-use-measures-review-2026]] — Tinjauan dan meta-analisis eksploratif atas ukuran penggunaan AI generatif yang kompeten (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Kebenaran yang menutupi aturan tidak lengkap: aturan penghentian penguasaan dalam pembelajaran adaptif (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Audit kontrafaktual sinyal demografis dalam penilaian siswa oleh LLM (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Rantai Markov dan penambangan pola atas 29,064 aktivitas di 554 kursus (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — Pemeriksaan diri yang menjaga privasi dan non-diagnostik untuk offloading terkait AI (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Tata kelola zero-shot: AI serba guna dalam kebijakan, dibaca melalui basis kode Redbox (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Mengapa rasio contoh–masalah terbaik bergantung pada konten (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Guru merancang chatbot ahli-terbatas, dengan delegasi pengajaran yang selektif (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — TPACK GenAI fakultas: pengetahuan konten kuat, pengetahuan terintegrasi teknologi lemah (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: uji acak tutorial langsung manusia–AI dalam skala besar (Wang et al. 2024)
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] — Delphi terpreregistrasi 30 pakar tentang proses pembelajaran mana yang ditingkatkan GenAI dan mana yang diancamnya
- [[three-pathways-student-ai-interaction-2026]] — Tipologi interaksi siswa-AI: 64% pasif atau transaksional, 36% dialog strategis
- [[agent-type-feedback-style-self-directed-learning-2026]] — Gaya umpan balik, bukan jenis agen, yang menggerakkan keterlibatan pengaturan diri
- [[metacognitive-processes-genai-interaction-logs-2026]] — Bukti proses bergantung pada saluran

- [[sun-student-genai-entanglement-literacy-demands-2026]] — Distribusi penggunaan GenAI adalah pilihan institusional

- [[genai-reliance-human-agency-collaborative-learning-2026]] — Ketergantungan dalam-diri mendahului penurunan agensi yang dirasakan
- [[wang-genai-metacognitive-prompting-preconceptions-2026]] — Analisis sekuensial lag ditambah penambangan proses menempatkan AI di pusat interaksi kelompok atau pada jalur linear tergantung komposisi prakonsepsi (Wang et al. 2026)
