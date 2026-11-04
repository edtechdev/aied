---
title: "Teori Belajar"
created: "2026-08-16T03:36:31-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories, metacognition, self-regulated-learning]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_faqs: [research-gaps-aied]
updated: "2026-11-04T02:42:40-05:00"
translation_of: "concepts/learning-theories"
source_updated: "2026-11-01T09:12:42-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Teori belajar** — keluarga kerangka yang menjelaskan bagaimana pembelajaran terjadi, sekaligus konsep payung bagi gagasan terkait teori dalam basis pengetahuan. Dalam [[ai-education|AI dalam pendidikan]], teori belajar membentuk cara sistem AI dirancang (pedagogi yang diwujudkannya) dan cara bidang ini menafsirkan apakah AI "berhasil": alat yang sama dapat menjadi perancah di bawah asumsi [[constructivist|konstruktivis]], mesin penguatan di bawah [[behaviorism|behaviorisme]], atau bahaya beban kognitif di bawah Teori Beban Kognitif.

## Pertanyaan yang Perlu Dipertimbangkan

- Pikirkan tutor AI atau sistem adaptif yang pernah Anda gunakan atau lihat. Asumsi apa yang dibuatnya tentang cara orang belajar — apakah ia memberi imbalan atas jawaban benar (behaviorisme), membangun pemahaman (konstruktivisme), atau mengelola upaya mental (beban kognitif)? Apakah pembuatnya pernah menyatakan asumsi itu?
- Halaman ini menjabarkan kesenjangan yang berulang: wacana menganut konstruktivisme sementara implementasi AI secara bawaan memakai mekanika latih-dan-umpan-balik. Di mana Anda pernah melihat alat yang mengklaim mendukung pembelajaran mendalam tetapi sebenarnya hanya memperkuat respons permukaan?
- Alat AI yang sama dapat tampak berhasil di bawah satu teori dan gagal di bawah teori lain — nilai pekerjaan rumah yang menggelembung terbaca sebagai pembelajaran di bawah behaviorisme tetapi sebagai kegagalan membangun pemahaman yang tahan lama di bawah konstruktivisme. Lensa mana yang lebih adil untuk menilai apakah siswa benar-benar belajar?
- Karena setiap tutor AI menanamkan suatu teori entah perancangnya mengatakannya atau tidak, 'apakah ia berhasil?' mungkin pertanyaan yang salah. Apa pertanyaan yang lebih baik untuk diajukan tentang AI pendidikan, mengingat teori-teori yang dapat diwujudkannya?
- AI generatif mendorong pendidik mempertimbangkan teori-teori baru — seperti belajar sebagai ko-konstruksi iteratif antara manusia dan AI, atau AI sebagai mitra kognitif sepanjang rentang hidup. Apakah kebangkitan AI benar-benar menuntut teori belajar baru, atau teori yang ada masih memadai?
- Pengukuran perolehan belajar itu sendiri 'sarat teori': instrumen yang dibangun di atas satu teori mungkin tidak menangkap perolehan yang diprediksi teori lain. Bagaimana dua peneliti dengan komitmen teoretis berbeda memandang data yang sama dan sampai pada kesimpulan yang berlawanan tentang apakah sebuah alat AI berhasil?

## Pendahuluan

Ini adalah konsep payung bagi alur teori belajar dalam basis pengetahuan. Teori belajar berada di jantung AI dalam pendidikan karena setiap tutor AI, sistem adaptif, dan alat umpan balik menanamkan asumsi tentang cara orang belajar — entah perancangnya menyatakannya atau tidak. Basis pengetahuan mendokumentasikan teori-teori ini satu per satu dan memperlakukannya sebagai lensa konseptual untuk mengevaluasi desain dan efek AI. Bidang penelitian yang menguji kerangka-kerangka itu adalah halaman terpisah: [[learning-sciences|ilmu pembelajaran]] mempelajari pembelajaran secara empiris — eksperimen, uji coba kelas, dan penelitian berbasis desain — dan memperlakukan teori sebagai sesuatu yang harus dikonfirmasi atau difalsifikasi, sementara halaman ini mengumpulkan kerangka-kerangkanya sendiri; kedua frasa itu dibedakan dalam basis pengetahuan ini, dengan bentuk tunggal "ilmu pembelajaran" menamai alur teori ini.

### Lanskap teori belajar

Basis pengetahuan mendokumentasikan beberapa keluarga teori belajar, masing-masing dengan konsepnya sendiri:

- **Teori belajar klasik.** [[behaviorism]] (belajar sebagai perubahan perilaku yang teramati melalui penguatan dan latih-ulang) dan [[constructivist|konstruktivisme]] (belajar sebagai konstruksi pengetahuan yang aktif) adalah dua kutub yang paling sering muncul dalam penelitian AI. Bidang ini kerap memperlihatkan kesenjangan "konstruktivisme dalam nama, behaviorisme dalam praktik", ketika wacana menganjurkan konstruksi tetapi implementasi AI secara bawaan memakai mekanika latih-dan-umpan-balik.([[ai-vocational-education-training-review]]) [[cognitive-psychology|kognitivisme]] adalah kutub klasik ketiga — belajar sebagai perubahan representasi mental internal — dan teori yang paling bertanggung jawab atas kontribusi khas AIED ([[knowledge-tracing]], [[cognitive-diagnosis]], [[student-modeling]], [[intelligent-tutoring]]).
- **Teori sosiokultural dan perkembangan.** [[sociocultural-learning]] berpendapat bahwa belajar dan perkembangan muncul melalui partisipasi sosial dan dimediasi oleh alat kultural serta orang yang lebih berpengetahuan — mencakup [[sociocultural-learning|Zona Perkembangan Proksimal]], [[scaffolding]], magang, komunitas praktik, dan [[distributed-cognition|kognisi terdistribusi]]. Di era AI, [[generative-ai|AI generatif]] makin sering dibingkai sebagai *agen mediasi* yang sekaligus memediasi aktivitas dan menghasilkan kontribusi kontingen terhadap interaksi.([[generative-ai-mediational-agent-sociocultural-2026]])
- **Kognisi dan arsitektur kognitif.** [[cognitive-psychology|Psikologi kognitif / kognitivisme]] adalah payung keluarga ini: Teori Beban Kognitif (bagaimana batas memori kerja membentuk pengajaran), Teori Proses Ganda (pemrosesan intuitif cepat vs. deliberatif lambat), dan [[metacognition]] (memantau dan meregulasi pembelajaran sendiri) menjelaskan mekanisme *internal* yang diaktifkan atau dilewati alat AI.
- **Motivasi dan pengarahan diri.** [[self-determination-theory]] (otonomi, kompetensi, keterhubungan), [[self-efficacy]] (keyakinan pada kemampuan diri), [[self-regulated-learning]] (penetapan tujuan, pemantauan, dan penyesuaian), dan [[motivation]] menjelaskan mengapa siswa terlibat dengan AI seperti yang mereka lakukan.
- **Konteks dan aktivitas belajar.** [[experiential-learning]], [[active-learning]], [[project-based-learning]], [[collaborative-learning]], [[transfer-of-learning]], [[desirable-difficulties]], dan [[embodied-learning]] menjabarkan jenis aktivitas dan konteks yang menghasilkan pembelajaran tahan lama.

### Teori belajar dan perolehan belajar

Teori belajar pada akhirnya dievaluasi melalui hasilnya, dan konsep [[learning-gains]] dalam basis pengetahuan adalah tempat teori bertemu bukti. Setiap teori membuat prediksi berbeda tentang apa yang *terhitung* sebagai belajar dan bagaimana mengukurnya: behaviorisme memprediksi peningkatan kinerja yang teramati pada tugas latih-dan-umpan-balik; konstruktivisme memprediksi pemahaman lebih dalam yang bertransfer ke masalah baru; teori sosiokultural memprediksi perolehan dalam partisipasi dan penyelesaian masalah yang dimediasi; dan teori beban kognitif memprediksi perolehan hanya ketika pengajaran menghormati batas memori kerja. Pilihan pengukuran, dengan demikian, menentukan prediksi teori mana yang dapat dikonfirmasi sebuah evaluasi. Di era AI, perbedaan tajam antara kinerja berbantuan AI dan [[learning-gains|perolehan belajar]] tanpa bantuan (lihat [[generative-ai-reduced-study-time-math]], [[stromberg-generative-ai-learning-penalty-secondary-2026]]) dapat dibaca melalui lensa ini: bacaan behavioris melihat nilai pekerjaan rumah yang menggelembung sebagai keberhasilan, sementara bacaan konstruktivis, yang berfokus pada pemahaman tahan lama, melihat bukti yang sama sebagai kegagalan belajar.

**Bukti terkumpul itu positif, dan ia mengukur konstruk yang lebih sempit daripada yang diukur teori-teori itu.** Sebuah meta-analisis PRISMA atas 53 studi menempatkan bantuan GenAI pada g = 0.40 untuk capaian akademik, 0.72 untuk berpikir tingkat tinggi, 0.76 untuk menulis, dan 0.81 untuk motivasi, dengan umpan balik GenAI sebagai mekanisme terbesar pada g = 1.27 ([[genai-educational-outcomes-meta-analysis|Dong (2026)]]). Itu adalah perolehan pada instrumen yang dipilih studi-studi yang disertakan, sehingga temuan itu menyelesaikan bacaan behavioris atau kognitivis atas "ia berhasil" dan membiarkan prediksi konstruktivis tentang pemahaman tahan lama yang dapat ditransfer tetap tak teruji. Subkelompok negara juga menyimpang, dari g = 0.71 di Tiongkok hingga g = 0.01 yang tidak signifikan di Turki, sehingga estimasi terkumpul adalah rata-rata untuk diuji secara lokal alih-alih sifat dari alatnya.

### Mengapa teori belajar penting bagi AI dalam pendidikan

Teori belajar penting karena tiga alasan:

- **Mereka memprediksi efek AI.** Apakah alat AI memperbaiki atau merugikan pembelajaran bergantung pada mekanisme yang diaktifkannya. Tutor yang langsung memberikan jawaban merugikan di bawah lensa konstruktivis (ia melewati konstruksi), netral di bawah behaviorisme (ia memperkuat), dan menimbulkan kekhawatiran beban kognitif (ia mengalihkan alih-alih membangun). Konsep [[cognitive-offloading]] dan [[cognitive-offloading|Ketergantungan Berlebih]] dalam basis pengetahuan menangkap sisi risiko ini.
- **Mereka menyingkap kesenjangan teori-praktik.** Karya empiris berulang kali menemukan bahwa implementasi AI mewujudkan teori yang berbeda dari yang diklaim wacana — terutama bahasa konstruktivis yang dipasangkan dengan mekanika latih-ulang behavioris.([[ai-vocational-education-training-review]]) Mengevaluasi AI karena itu menuntut pertanyaan tentang *teori mana* yang benar-benar diwujudkan suatu sistem, bukan hanya apakah ia "berhasil".
- **Mereka sedang aktif dipikirkan ulang.** AI generatif sedang [[prompt-engineering|mendorong]] pendidik meninjau kembali apakah teori klasik masih memadai. [[generativism-learning-theory|Generativisme]] mengusulkan bahwa belajar di era AI makin terjadi melalui ko-konstruksi iteratif antara siswa manusia dan sistem AI, memperluas alih-alih menggantikan empat teori klasik (behaviorisme, kognitivisme, konstruktivisme, konektivisme).([[generativism-learning-theory]])

### Arah teoretis baru dari karya AIED terkini

Karya teoretis terkini memperluas alur klasik ke beberapa arah, masing-masing memusatkan kembali relasi manusia–AI alih-alih memperlakukan AI sebagai alat netral:

- **Ko-[[regulation|regulasi]] manusia–AI.** Sebuah kerangka perkembangan memosisikan AI bukan sebagai instrumen eksternal melainkan sebagai **mitra kognitif** yang meregulasi bersama pemikiran, pembelajaran, dan pengendalian diri sepanjang rentang hidup.([[ai-cognitive-partner-co-regulation-learning]]) Berlandaskan fungsi eksekutif, [[metacognition]], kognisi terdistribusi, dan perkembangan sosiokultural, kerangka ini menempatkan AI dalam empat peran — perancah, dukungan metakognitif, memori eksternal / sistem [[cognitive-offloading]], dan mitra keputusan — dengan kerangka paling relevan sejak masa kanak-kanak pertengahan dan seterusnya.
- **Ensemble Cognition.** Sebuah kerangka [[philosophy-of-ai-in-education|filosofis]] mengonseptualisasi ulang berpikir sebagai sesuatu yang muncul dari interaksi dinamis antara agen manusia dan artifisial alih-alih bersemayam semata dalam pikiran individu.([[ensemble-cognition-philosophy-ai-education]]) Ia menantang "paradigma kesadaran" (asumsi otonomi, kesadaran, dan stabilitas) dan merumuskan lima ciri — agensi terdistribusi, sentralitas dinamis, orkestrasi kognitif, integrasi multi-representasi, dan peralihan peka konteks — sekaligus membedakan **agensi fungsional** AI dari tanggung jawab moral.
- **Pertumbuhan [[self-directed-learning|Berarah Diri]] / A2PL.** Sebuah perluasan [[self-directed-learning|pembelajaran berarah diri]] memadukan AI Generatif dengan [[learning-analytics|analitik pembelajaran]] untuk menumbuhkan **Pertumbuhan Berarah Diri**, yang dioperasionalkan melalui model Aspire to Potentials for Learners (A2PL).([[self-directed-growth-generative-ai-learning-analytics]]) Ia mengonfigurasi ulang aspirasi siswa (humanistik), berpikir kompleks (konstruktivis), dan penilaian diri (pragmatis) menjadi satu kompetensi, memosisikan GAI sebagai perancah kolaboratif non-preskriptif alih-alih penyedia konten.

- **Generalisasi berlebih yang menipu.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, and Stamper (2026)]] memperluas tradisi ACT-R / Knowledge-Learning-Instruction dengan merumuskan kapan kebenaran yang teramati menutupi pemahaman kondisional yang tidak lengkap: siswa menyusun produksi yang tergeneralisasi berlebih yang menghilangkan suatu batasan penerapan namun tetap berkinerja benar — mode kegagalan yang dapat terlewat oleh sistem penguasaan adaptif, bahkan pengajaran tradisional, kecuali mereka menguji *kapan harus menahan* suatu tindakan.
- **Teori KLI yang dapat dieksekusi.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] mendasarkan kerangka Knowledge-Learning-Instruction pada model komputasional yang dapat dieksekusi (kerangka Apprentice Learner dengan mekanisme memori bergaya ACT-R) yang mereproduksi interaksi persilangan dalam data manusia: latihan murni membantu memori fakta verbatim (dengan menunda kelupaan) sementara latihan terintegrasi contoh membantu induksi keterampilan yang dapat digeneralisasi. Karena KLI mengaitkan pengetahuan konstan (fakta) dengan proses memori dan pengetahuan variabel (keterampilan) dengan induksi, hasilnya adalah interaksi konten–perlakuan yang diprediksi alih-alih pertentangan antara rekomendasi pengujian dan contoh kerja — dan keberhasilan model hanya ketika mekanisme memori hadir menunjukkan bahwa latihan dan contoh memainkan peran berbeda yang saling melengkapi.

- **Keterwujudan sebagai tantangan ontologis terhadap paradigma AI.** [[videla-embodied-ai-education-choreography|Videla, Penny and Ross (2026)]] berargumen bahwa sekat ontologis memisahkan kognisi yang terwujud dan enaktif dari idiom representasional yang diwujudkan AI, sehingga AI sebaiknya dide-sentrasikan sebagai pusat epistemik alih-alih diperlakukan sebagai alat netral.

### Bagaimana basis pengetahuan menata alur ini

Alih-alih memperlakukan teori belajar sebagai filsafat abstrak, basis pengetahuan mendasarkan masing-masing pada penelitian AI dalam pendidikan yang menggunakannya. Halaman [[constructivist]] dan [[behaviorism]] mendokumentasikan bagaimana desain AI mewujudkan (atau mengkhianati) masing-masing teori; Teori Beban Kognitif, [[self-regulated-learning]], [[metacognition]], dan [[transfer-of-learning]] mengaitkan teori dengan mekanisme dan hasil AI yang spesifik. Ini mencerminkan cara basis pengetahuan menangani domain payung lain seperti [[feedback]] dan [[assessment]] — sistem konsep yang koheren dan saling berinteraksi alih-alih halaman yang terisolasi.

### Teori belajar dan "pendidikan tentang AI"

Teori belajar juga muncul sebagai konten dalam kurikulum [[ai-literacy|literasi AI]]: siswa mempelajari behaviorisme, kognitivisme, konstruktivisme, dan konektivisme untuk memahami asumsi [[pedagogy|pedagogis]] di balik alat yang mereka gunakan.([[generativism-learning-theory]]) Mengajarkan alur ini memberi siswa (dan pendidik) kosakata untuk mengkritik mengapa sebuah produk AI dibangun seperti itu — dan apakah mekanikanya melayani tujuan belajar yang dihadapi.

- **Agen mediasi.** Warschauer, Tate, dan Ritchie (2026) berargumen bahwa AI generatif mematahkan pembedaan sosiokultural antara sarana mediasi dan interaksi sosial, dengan mengusulkan *agen mediasi* — sistem yang sekaligus memediasi tindakan dan menghasilkan kontribusi kontingen yang tidak dapat dipertanggungjawabkan, menempati ruang hibrida antara alat dan mitra sosial. Ini menghasilkan lima kebiasaan partisipasi yang mengutamakan manusia (primasi kognisi manusia, [[student-engagement|keterlibatan]] yang bertujuan, agensi pengawasan, kewaspadaan epistemik, regulasi diri reflektif).([[generative-ai-mediational-agent-sociocultural-2026]])

### Teori yang diusulkan untuk era AI

Di samping keluarga klasik, basis pengetahuan mendokumentasikan teori yang ditulis khusus untuk belajar dengan sistem AI, dan teori-teori ini membawa implikasi desain yang dibiarkan terbuka oleh teori yang lebih tua. [[yan-agentivism-learning-theory-ai-2026|Agentivisme (Yan dan Gašević 2026)]] adalah contoh kelas menengah: ia mendefinisikan belajar sebagai pertumbuhan kapabilitas manusia yang tahan lama alih-alih penyelesaian tugas yang berhasil, menamai empat mekanisme (agensi yang didelegasikan, pemantauan dan verifikasi epistemik, internalisasi rekonstruktif, dan transfer di bawah dukungan yang berkurang), serta menyatakan enam proposisi yang dapat diuji, di antaranya bahwa dukungan AI yang mempertahankan tanggung jawab siswa atas pembingkaian masalah, penetapan kriteria, dan justifikasi menghasilkan pembelajaran lebih kuat daripada dukungan yang memberikan jawaban.

**Pedagogical Symbiosis** yang diajukan [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]] mengajukan klaim ontologis yang lebih kuat: siswa adalah entitas *Pasca-Manusia* yang kognisinya bersifat hibrida alih-alih berbantuan alat, ditata oleh empat prinsip: pengalihan dan augmentasi kognitif, ko-konstruksi epistemik, simbiosis metakognitif, dan pembentukan identitas dinamis; dioperasionalkan sebagai rubrik Portofolio Simbiotik dan peran guru "Koreografer Kognitif"; secara eksplisit belum teruji.

## Miskonsepsi Umum

**"Salah satu teori belajar adalah yang benar, sehingga pilihan teori hanyalah soal selera."** Teori-teori itu membuat klaim berbeda tentang apa yang terhitung sebagai bukti, sehingga data yang sama dapat mendukung kesimpulan yang berlawanan. Contoh paling jelas: nilai pekerjaan rumah yang menggelembung terbaca sebagai **pembelajaran di bawah behaviorisme** dan sebagai **kegagalan membangun pemahaman tahan lama di bawah konstruktivisme**. Pilihan teori karena itu menentukan apakah suatu intervensi berhasil, yang menjadikannya keputusan pengukuran alih-alih preferensi gaya.

**"Alat yang mendukung pembelajaran mendalam akan tampak seperti pembelajaran mendalam di bawah kerangka apa pun."** Ia akan tampak berhasil di bawah satu teori dan gagal di bawah teori lain, seperti di atas. Itulah sebabnya ukuran hasil dalam bidang ini perlu dijustifikasi terhadap teori yang dinyatakan alih-alih dipinjam seolah netral.

**"Makin banyak teori berarti bidang yang makin dipahami."** Akumulasi tanpa adjudikasi adalah kebalikan dari kemajuan. Teori yang diusulkan untuk era AI bertambah lebih cepat daripada diuji, dan tanda kedewasaan adalah prediksi-prediksi saingan yang terselesaikan — yang menuntut desain yang dapat membedakannya, bukan katalog yang mengakomodasinya.

**"Pendidikan tentang AI sama dengan AI dalam pendidikan, secara teoretis."** Keduanya bersandar pada alur berbeda: yang satu bertanya bagaimana siswa sampai memahami AI sebagai subjek, yang lain bagaimana AI mengubah cara belajar terjadi. Mencampuradukkan keduanya menghasilkan tinjauan pustaka yang mencampur dua basis bukti berbeda dan melaporkan gambaran yang koheren dari keduanya.

## Implikasi bagi Praktik

**Bagi instruktur**

- Pilih teori berdasarkan apa yang perlu Anda peroleh darinya: menjelaskan bagaimana belajar terjadi, menjabarkan keadaan siswa, atau menjelaskan mengapa suatu praktik menyebar. Menerapkan lapisan yang salah mengukur variabel yang benar terhadap prediksi yang salah.
- Nyatakan komitmen teori dari ukuran hasil secara eksplisit, karena nilai pekerjaan rumah yang menggelembung terbaca sebagai keberhasilan di bawah behaviorisme dan sebagai kegagalan di bawah konstruktivisme dari data yang identik.
- Ketika sebuah kerangka tidak dapat memprediksi perbedaan antara konfigurasi, kerangka itu tidak dapat diuji dalam latar Anda dan tidak akan membantu Anda memutuskan.

**Bagi pengembang**

- Terbitkan teori yang diwujudkan sistem Anda dan prediksi yang akan memfalsifikasinya; "berlandaskan konstruktivisme" tanpa perbedaan yang dapat difalsifikasi adalah klaim tanpa isi.

**Bagi peneliti**

- Rancang untuk adjudikasi antar teori alih-alih akumulasi kerangka. Kedewasaan tampak sebagai prediksi saingan yang terselesaikan, bukan sebagai pertumbuhan kosakata.

## Konsep terkait

- [[behaviorism]]
- [[cognitive-psychology]]
- [[constructivist]]
- [[metacognition]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[self-determination-theory]]
- [[self-efficacy]]
- [[motivation]]
- [[sociocultural-learning]]
- [[scaffolding]]
- [[transfer-of-learning]]
- [[learning-gains]]
- [[desirable-difficulties]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[embodied-learning]]
- [[cognitive-offloading]]
- [[learning-design]]
- [[learning-sciences]]
- [[philosophy-of-ai-in-education]]
- [[ai-education]]
- [[pedagogy]] — Payung: pedagogi dan strategi pengajaran dalam pendidikan AI

## Artikel terkait
- [[yan-agentivism-learning-theory-ai-2026]] — Teori belajar kelas menengah untuk interaksi manusia-AI, dengan empat mekanisme dan enam proposisi yang dapat diuji (Yan and Gašević 2026)

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Generalisasi berlebih yang menipu: penguasaan adaptif dapat menghentikan latihan sebelum siswa tahu kapan harus menahan tindakan (An, McLaren & Stamper 2026)
- [[airis-hybrid-human-ai-cognition-2026]] — AI-Augmented Inquiry and Regulation in Hybrid Systems (AIRIS)
- [[voicu-ai-interpretive-cognition-ssh-2026]]
- [[ai-cognitive-partner-co-regulation-learning]] — Memosisikan AI sebagai mitra kognitif dalam ko-regulasi manusia-AI; kerangka perkembangan sepanjang rentang hidup
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: kerangka filosofis yang mengonseptualisasi ulang berpikir sebagai interaksi manusia–AI
- [[self-directed-growth-generative-ai-learning-analytics]] — Pertumbuhan Berarah Diri dan model A2PL yang memperluas pembelajaran berarah diri dengan GenAI
- [[generativism-learning-theory]] — Mengusulkan teori belajar baru untuk era AI generatif, meninjau ulang empat teori klasik
- [[ai-vocational-education-training-review]] — Mendokumentasikan kesenjangan teori-praktik konstruktivisme/behaviorisme dalam AI untuk VET
- [[genai-educational-outcomes-meta-analysis]] — Meta-analisis PRISMA atas 53 studi: perolehan terkumpul pada capaian, berpikir, menulis, dan motivasi, dengan umpan balik sebagai mekanisme terbesar (Dong 2026)
- [[elsayed-pedagogical-symbiosis-posthuman-learner]]
- [[videla-embodied-ai-education-choreography]]
- [[generative-ai-mediational-agent-sociocultural-2026]] — AI generatif sebagai agen mediasi
- [[kim-ai-productive-failure-adult-2026]] — Merancang sistem AI untuk mendukung pembelajaran berbasis kegagalan produktif
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pengarahan pedagogis LLM untuk kegagalan produktif
- [[lukesova-clue-before-correction-2026]] — Petunjuk sebelum koreksi: ChatGPT untuk pembelajaran bahasa mandiri
- [[rachatasumrit-example-problem-ratio-2026]]
