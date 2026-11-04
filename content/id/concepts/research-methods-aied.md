---
title: "Metode Penelitian dalam AIED"
created: "2026-08-13T05:48:37-04:00"
type: concept
foundations: [ai-education]
assessment: [educational-measurement]
research_method: [experiment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, rct, research-methods-aied]
updated: "2026-11-04T02:20:32-05:00"
translation_of: "concepts/research-methods-aied"
source_updated: "2026-11-01T11:00:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Metode penelitian dalam AIED** — rangkaian desain empiris, strategi pengumpulan data, dan teknik analitik yang digunakan peneliti untuk mempelajari [[ai-education|AI dalam pendidikan]]: apakah dan bagaimana alat AI mendukung (atau merugikan) pembelajaran, dan dalam kondisi apa. Korpus basis pengetahuan ini mencakup metode eksperimental, survei, kualitatif, berbasis desain, tolok ukur komputasional, dan tinjauan. Masing-masing memiliki kekuatan dan keterbatasan yang berbeda, dan memilih di antaranya melibatkan trade-off antara validitas internal (keyakinan pada klaim kausal), validitas eksternal (keteralihan), validitas ekologis (keaslian dunia nyata), dan kelayakan mempelajari alat AI yang bergerak cepat.

## Pertanyaan yang Perlu Dipertimbangkan

- Ketegangan sentral halaman ini: desain terkuat untuk inferensi kausal (eksperimen teracak) justru yang paling sulit dijalankan di kelas nyata, sementara latar paling autentik menawarkan kendali kausal yang lebih lemah. Jika Anda harus memutuskan apakah [[intelligent-tutoring|tutor AI]] membantu pembelajaran, kegagalan mana dari keduanya yang lebih Anda pilih untuk ditanggung — dan mengapa?
- Sebelum membaca, dapatkah Anda menyebutkan perbedaan antara validitas internal, eksternal, dan ekologis? Halaman ini berargumen bahwa setiap desain menukar ketiganya. Bagaimana mungkin studi yang ketat secara kausal tetap tidak memberi tahu Anda hampir apa pun yang berguna tentang kelas nyata?
- Sebuah tolok ukur menunjukkan AI memperoleh skor akurasi tinggi, tetapi halaman ini menegaskan bahwa akurasi tolok ukur yang tinggi tidak dengan sendirinya berarti efektivitas pendidikan. Mengapa sistem yang 'lulus uji' masih bisa gagal membantu siswa belajar — dan jenis bukti apa yang hilang?
- Penelitian berbasis desain melakukan iterasi pada intervensi nyata tetapi tidak dapat mengaitkan perolehan dengan mekanisme tertentu, sementara RCT mengisolasi penyebab tetapi berjalan dalam kondisi artifisial. Mengingat laju perubahan AI yang cepat, menurut Anda berapa lama RCT yang ketat tetap relevan sebelum alat yang diujinya usang?
- Konsensus ahli Delphi menetapkan kesepakatan di antara para ahli, bukan efek empiris. Kapan sah membangun kerangka kompetensi dari apa yang diyakini para ahli, versus dari data tentang apa yang berhasil — dan bagaimana Anda membedakannya dalam praktik?
- Halaman ini menganjurkan triangulasi — menggabungkan evaluasi tolok ukur, eksperimen, pengukuran, dan kerja kualitatif untuk menilai baik apakah suatu alat berhasil maupun bagaimana ia bekerja. Sebelum membaca, di bagian mana dari klaim seperti 'AI ini meningkatkan pembelajaran' setiap metode diperlukan agar Anda yakin?

## Pendahuluan

Ketegangan sentral dalam penelitian AIED adalah bahwa desain terkuat untuk inferensi kausal — eksperimen teracak — sering kali paling sulit dijalankan dengan alat AI yang autentik di kelas nyata, sementara latar paling autentik (penerapan lapangan, studi kasus, analisis data log) menawarkan kendali kausal yang lebih lemah. Tidak ada satu metode pun yang menyelesaikan ini; bidang ini maju dengan melakukan triangulasi lintas metode, dan dengan bersikap eksplisit tentang jenis klaim apa yang dapat didukung setiap desain. Setiap metode juga membawa keterbatasan lintas-bidang — keteralihan, validitas pengukuran, laju perubahan AI yang cepat, reproduktibilitas, dan penggunaan teori yang lemah — yang harus ditimbang pembaca; lihat [[limitations-in-aied-research]].

Subjek halaman ini adalah metode, bukan temuan. [[learning-sciences]] adalah bidang substantif yang dilayani metode-metode ini: jika halaman ini membahas bagaimana sebuah studi seharusnya dirancang, diukur, dan dilaporkan, halaman itu membahas apa yang telah ditetapkan bidang tersebut tentang bagaimana orang belajar dan bagaimana lingkungan belajar seharusnya dirancang, dan ia memperlakukan metode berbasis desain serta metode campuran sebagai pendekatan khas ilmu pembelajaran alih-alih dua opsi di antara banyak.

Berdekatan dengan halaman ini adalah [[ai-assisted-educational-research|Penelitian Pendidikan Berbantuan AI]], yang membahas AI sebagai instrumen pekerjaan bidang itu sendiri: pencarian literatur, penyaringan, otomasi tinjauan, pengodean kualitatif, analisis, dan penulisan. Cakupannya mencakup penelitian praktisi seperti kajian ilmiah tentang pengajaran dan pembelajaran, dan ia tetap berbeda dari desain yang diuraikan halaman ini.

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen dan Graulich (2026)]] menerapkan pengamatan yang sama terhadap produksi pengetahuan bidang itu sendiri, menggunakan masalah pengukuran nomik Chang (2004): mengukur suatu kuantitas menuntut adanya hukum yang menghubungkannya dengan sesuatu yang dapat diamati, namun hukum itu tidak dapat diuji secara empiris tanpa mengetahui kuantitas tersebut terlebih dahulu. Mereka berargumen bahwa fungsi pengukuran yang diturunkan dari AI, yang muncul dari data pelatihan dan optimasi alih-alih dari peneliti, dapat memperparah masalah itu alih-alih menyelesaikannya. Fungsi semacam itu bisa tampak presisi namun tetap buram secara epistemik, sehingga peran peneliti bergeser ke menafsirkan dan memvalidasi keluaran komputasional. Kerangka reflektif tujuh fase mereka (pembingkaian masalah; instrumentasi dan pengukuran; eksperimentasi dan inferensi berbasis bukti; perbandingan dan replikasi; pembangunan norma dan konsensus; implementasi dan konsekuensinya; serta penyempurnaan berkelanjutan) ditawarkan sebagai bantuan analitis, bukan metode tervalidasi, dan mereka berargumen bahwa keterbandingan harus meluas lintas populasi siswa, bukan hanya subset yang dilayani baik oleh suatu model.

### Ketelitian pelaporan dan model TEP-AIED

Kualitas pelaporan studi AI dalam pendidikan itu sendiri merupakan persoalan penelitian. [[tep-aied-model-reporting-2026|Model TEP-AIED (Hwang, Xie, Wah & Gasevic, 2026)]] menawarkan kerangka terstruktur untuk menyajikan penelitian AI dalam pendidikan secara ketat, dengan mengorganisasi komponen esensial laporan studi — pembingkaian masalah teori/teknologi/pendidikan, desain, data, analisis, dan hasil — sehingga pembaca dan penelaah dapat menilai apakah klaim didukung dan apakah pekerjaan itu dapat direproduksi. Ia merespons kelemahan kronis bidang ini dalam pelaporan (deskripsi alat yang kabur, versi model yang tidak disebutkan, detail evaluasi yang dihilangkan) yang didokumentasikan halaman [[limitations-in-aied-research|keterbatasan]]. Kerangka pelaporan seperti TEP-AIED berdampingan dengan daftar periksa pelaporan yang mapan (misalnya, panduan bergaya [[rct|CONSORT]] untuk uji coba, panduan bergaya PRISMA untuk tinjauan) sebagai bagian dari pergeseran bidang yang lebih luas menuju [[educational-measurement|transparansi metodologis]] dan reproduktibilitas.

[[raise-framework-ai-education-reporting-2026|RAISE (Allison, 2026)]] mendekati masalah yang sama dari arah berlawanan — sebagai daftar periksa alih-alih struktur naratif. Ia menetapkan **30 butir dalam sepuluh ranah tematik** (justifikasi pendidikan dan landasan teoretis, spesifikasi sistem AI, peran dan interaksi AI, [[accessibility|aksesibilitas]] dan kesesuaian budaya, latar dan partisipan, keterlibatan manusia, desain dan evaluasi studi, etika dan keterpercayaan, transparansi dan reproduktibilitas, serta keterbatasan dan implikasi), disertai versi yang dapat diedit dan **Matriks Etika dan Risiko** pendamping yang mencakup agensi pembelajar, [[equity-in-ai-education|keadilan]] akses, [[governance|tata kelola]] data, dan transparansi algoritmik. Kedua kerangka itu saling merujuk secara langsung: TEP-AIED mencirikan RAISE sebagai komprehensif tetapi mencela keluasannya, dengan berargumen bahwa "keluasan dan granularitasnya dapat membuatnya kompleks dan kurang dapat diakses untuk aplikasi empiris rutin," sementara pembingkaian RAISE sendiri adalah bahwa ia tidak mewajibkan metode atau model apa pun dan hanya menuntut agar pilihan dibuat terlihat. Dibaca bersama, keduanya menandai trade-off dalam literatur ini — daftar periksa audit yang lebih lengkap versus narasi tiga dimensi yang lebih ramping — dan keduanya bertemu pada hal-hal yang tidak dapat ditawar: sebutkan dan versikan sistem AI, ungkapkan prompt dan desain interaksi, definisikan kondisi perlakuan dan pembanding, laporkan tinjauan etis dan mitigasi risiko, serta nyatakan apakah hasil mengukur kinerja, retensi, atau transfer. Agar suatu studi dapat diadili dengan dasar itu, instrumen pelaporan harus diadopsi pada tahap desain alih-alih dirakit pada tahap naskah, yang merupakan poin yang ditekankan kedua kerangka. Analisis historis tingkat korpus juga merupakan pilihan metodologis dengan kewajiban transparansi: [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] menempatkan setiap makalah dalam kerangka AI×Ed mereka berdasarkan penilaian penulis atas abstrak dan teks lengkap, secara eksplisit mengakui bahwa ini bukan kategorisasi terstruktur atau yang dapat diskalakan berbasis data, dan menyediakan kumpulan data lengkap mereka secara publik sebagai materi tambahan untuk replikasi.

### Desain eksperimental dan kuasi-eksperimental

**Studi efikasi** menguji apakah suatu intervensi menghasilkan efek belajar yang dimaksudkan, biasanya menggunakan desain eksperimental atau kuasi-eksperimental yang membandingkan hasil dengan dan tanpa intervensi. Eksperimen menempatkan pembelajar secara acak ke dalam kondisi (misalnya, tutor AI vs. tutor manusia, atau dengan perancah AI vs. tanpa bantuan) untuk memperkirakan efek kausal pada hasil seperti perolehan belajar, [[student-engagement|keterlibatan]], atau motivasi. **Uji coba terkendali teracak** adalah standar emas untuk validitas internal. [[access-not-enough-ai-tutoring-2026|Studi lapangan teracak tentang dukungan manusia plus tutoring AI]] dan [[genai-can-harm-teaching-rct-2026|sebuah RCT tentang AI generatif dalam pengajaran]] menggunakan penugasan untuk mengisolasi efek kausal. Desain **kuasi-eksperimental** (pra/pasca, antarsubjek, atau kelompok yang dipasangkan tanpa pengacakan) lebih layak di kelas yang utuh tetapi lebih lemah dalam klaim kausal.
- **Validasi instrumen dan pemeriksaan garis dasar mendahului estimasi efek.** [[genai-cognitive-scaffold-geometric-reasoning-2026|Davor (2026)]] membandingkan dua kelas SMA Ghana yang utuh (86 siswa, 43 per kelompok) pada GenAI sebagai perancah geometri, dengan menentukan ukuran sampel melalui analisis G*Power dan mengujicobakan Tes Penalaran dan Pembuktian Geometri hingga reliabilitas belah dua Spearman-Brown sebesar 0.859 sebelum studi. Kedua kelompok tidak berbeda secara signifikan pada pra-tes, dan ANCOVA yang menyesuaikan kinerja awal mempertahankan efek kelompok (F(1, 83) = 50.30, p < .001, η² parsial = .377). Tanpa penugasan acak, reliabilitas uji coba dan pemeriksaan kesetaraan garis dasar itulah yang membuat perbandingan yang disesuaikan dapat ditafsirkan.

- **Kekuatan:** inferensi kausal terkuat; pengukuran hasil yang bersih; mendukung estimasi ukuran efek dan klaim efikasi.
- **Keterbatasan:** mahal dan lambat; kondisi artifisial dapat menurunkan validitas ekologis; alat AI yang berubah cepat membuat eksperimen panjang cepat usang; sampel kecil sering kali kurang berdaya untuk mendeteksi efek yang bermakna; kendala [[ethics|etis]] dalam menahan alat yang berpotensi membantu.
- **Contoh unggulan:** [[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]], [[agent-voice-accents-k12-group-learning]], [[ai-use-critical-thinking-medical-students-2026]].
- **Praregistrasi berlaku untuk analisis sekunder, bukan hanya uji coba.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] menjalankan empat aturan pembaruan [[knowledge-tracing]] pada log ASSISTments yang identik (12,716 siswa, 985,813 peristiwa ternilai) yang hanya berbeda dalam cara menilai baris yang diberi petunjuk, menyegel separuh konfirmatori hingga ada berkas yang memuat URL registrasi, dan melaporkan bahwa keempat prediksi terpraregistrasi terpenuhi. Memberi kredit atas penyelesaian apa pun memprediksi kinerja mandiri berikutnya hanya sedikit di atas konstanta kesulitan keterampilan (AUC gabungan 0.604 terhadap 0.595) sambil menyatakan 93.9% pasangan siswa–keterampilan telah dikuasai, dibandingkan 72.8% di bawah aturan ketat. Ketika satu log mendukung beberapa kesimpulan, menetapkan analisis di muka itulah yang membuat perbandingan kredibel.

### Studi survei dan pemodelan persamaan struktural

Survei lintas-seksi mengukur sikap, persepsi, motivasi, [[self-efficacy]], dan [[technology-acceptance-model|penerimaan teknologi]] yang dilaporkan sendiri, sering kali dimodelkan dengan regresi atau pemodelan persamaan struktural (SEM/PLS-SEM) untuk menguji hubungan dan mediator yang dihipotesiskan. Studi semacam ini mendominasi korpus basis pengetahuan, terutama untuk pertanyaan tentang penerimaan, motivasi, dan mekanisme psikologis.

- **Kekuatan:** sampel besar; cakupan luas dengan biaya rendah; dapat menguji model mediasi yang kompleks atas mekanisme psikologis; layak untuk mempelajari sikap yang sulit diamati.
- **Keterbatasan:** data lintas-seksi tidak dapat menetapkan kausalitas; bias metode umum/laporan diri; pengambilan sampel kemudahan membatasi keteralihan; mediator disimpulkan dari kovarians, bukan dari manipulasi.

Instrumennya sendiri layak ditelaah secara terpisah. Apa yang dapat dan tidak dapat ditetapkan oleh kuesioner, wawancara, atau buku harian — dan kesenjangan terdokumentasi antara apa yang dilaporkan orang dan apa yang mereka lakukan — dihimpun di [[self-report-measures]].
- **Contoh unggulan:** [[acceptance-ai-english-tools-2026]], [[genai-motivation-engagement-2026]], [[ai-autonomous-learning-accomplishment-2026]], [[genai-over-reliance-learning-2026]], [[ai-use-critical-thinking-medical-students-2026]].

### Metode kualitatif

Wawancara, kelompok fokus, dan analisis tematik menghasilkan laporan yang kaya dan kontekstual tentang bagaimana siswa dan guru mengalami alat AI, makna yang mereka lekatkan padanya, serta ketegangan dan kerugian yang terlewat oleh ukuran terstandar. [[hazra-safetutors-pedagogical-safety-2026|Penelitian tentang keselamatan tutor AI]] dan [[ai-changing-teaching-workflows|bagaimana AI mengubah alur kerja pengajaran]] sangat bergantung pada bukti kualitatif. Lihat halaman konsep khusus [[qualitative-research]] untuk pembahasan lengkap pendekatan kualitatif — analisis tematik, grounded theory, fenomenologi/fenomenografi, analisis wacana, observasi dan etnografi, studi kasus, serta wawancara/kelompok fokus — masing-masing dengan contoh unggulan dari basis pengetahuan.

- **Kekuatan:** wawasan ekologis dan konseptual yang mendalam; memunculkan fenomena, risiko, dan mekanisme yang tak terduga; esensial untuk pembangunan teori dan untuk mempelajari konstruk yang diperdebatkan seperti kepercayaan, [[agency|otonomi]], dan kepengarangan.
- **Keterbatasan:** keteralihan terbatas; interpretatif dan bergantung pada peneliti; sampel kecil; dukungan lebih lemah untuk klaim kausal; temuan sulit disintesis lintas studi.
- **Contoh unggulan:** [[hazra-safetutors-pedagogical-safety-2026]], [[ai-changing-teaching-workflows]], [[scaffolding-critical-engagement-genai-minority-students]].

### Desain metode campuran

Studi metode campuran menggabungkan untaian kuantitatif dan kualitatif — sering kali secara berurutan (misalnya, KUAL→KUAN→kual) — sehingga data kualitatif menjelaskan atau mengontekstualkan temuan kuantitatif. [[genai-over-reliance-learning-2026|Studi metode campuran tentang GenAI dan pembelajaran berkelanjutan]] memasangkan survei tiga gelombang dengan wawancara pendidik; [[t2i-competence-paradox-2026|studi paradoks kompetensi]] menggunakan kelompok fokus instruktur, survei siswa, dan wawancara lanjutan.

- **Kekuatan:** triangulasi meningkatkan keyakinan; keluasan kuantitatif plus kedalaman kualitatif; dapat menjelaskan hasil tak terduga dan menjembatani mekanisme dengan besaran.
- **Keterbatasan:** kompleks, padat sumber daya, dan menuntut secara metodologis; integrasi bisa dangkal jika tidak dirancang dengan cermat; tetap mewarisi kelemahan setiap untaian (misalnya, laporan diri).
- **Contoh unggulan:** [[genai-over-reliance-learning-2026]], [[t2i-competence-paradox-2026]], [[same-ai-different-pathways]], [[fouad-bentley-trust-utility-gap-physics-2026]].

### Penelitian berbasis desain (DBR)

DBR merancang, menerapkan, dan menyempurnakan intervensi pendidikan secara iteratif dalam konteks autentik, bersiklus antara teori, desain, dan praktik dunia nyata. Pendekatan ini menonjol dalam basis pengetahuan untuk mengembangkan lingkungan belajar AI dan model [[pedagogy|pedagogis]]. Lihat halaman konsep khusus [[design-based-research]] untuk siklus DBR lengkap, contoh unggulan, serta kekuatan dan keterbatasannya. Contoh AIEd kanonis adalah studi model [[collaborative-learning|Pembelajaran Kolaboratif]] Berbantuan AI ([[ai-assisted-collaborative-learning-model-dbr|Putra et al.]]), yang menjalankan siklus DBR empat fase — analisis kebutuhan, desain model, implementasi kelas delapan minggu, dan penyempurnaan model — dengan iterasi pada siklus belajar empat tahap (identifikasi masalah → inkuiri kolaboratif berbantuan AI → [[problem-solving|pemecahan masalah]] kolaboratif → refleksi dan presentasi). Contoh unggulan lain mengembangkan [[ai-literacy|literasi AI]] dalam [[teacher-education|pelatihan guru]] ([[genai-literacy-training-teacher-education-dbr-2026]]) dan [[generative-ai|GenAI]] [[scaffolding]] untuk [[critical-thinking|berpikir kritis]] ([[critical-thinking-genai-scaffolding]]).

- **Kekuatan:** validitas ekologis dan relevansi praktis yang tinggi; menghasilkan artefak yang dapat digunakan sekaligus teori; responsif terhadap kompleksitas kelas nyata dan alat AI yang terus berkembang; cocok untuk mengembangkan model dan menyempurnakannya berdasarkan bukti implementasi autentik.
- **Keterbatasan:** validitas internal lemah (sedikit/tanpa kelompok kendali); temuan terikat konteks dan sulit digeneralisasi; lini masa panjang; sulit mengisolasi elemen desain mana yang menyebabkan suatu hasil — DBR menunjukkan kelayakan dan perbaikan tetapi tidak dapat mengaitkan perolehan belajar pada mekanisme tertentu.
- **Contoh unggulan:** [[ai-assisted-collaborative-learning-model-dbr]], [[genai-literacy-training-teacher-education-dbr-2026]], [[critical-thinking-genai-scaffolding]], [[human-centered-ai-teacher-educators-2026]].

DBR menukar kendali kausal [[rct|eksperimen]] dengan keaslian ekologis dan penyempurnaan iteratif: ia adalah alat yang tepat untuk pertanyaan "bagaimana kita merancang lingkungan belajar AI ini agar berhasil dalam praktik?", dan buktinya paling kuat sebagai bukti konsep dan panduan desain alih-alih efikasi kausal. Membaca perolehan belajar DBR memerlukan [[limitations-in-aied-research|kehati-hatian]] yang sama seperti desain lain — tanpa ukuran hasil yang terkendali dan tanpa bantuan, perolehan dapat mencerminkan perancu kinerja-yang-digelembungkan-AI yang sama yang didokumentasikan di [[learning-gains|perolehan belajar]].

### Tinjauan sistematis dan meta-analisis

Tinjauan menyintesis basis bukti alih-alih menjalankan eksperimen baru. Tinjauan sistematis dan tinjauan cakupan menerapkan protokol transparan untuk mencari, menyaring, menilai, dan menyintesis sekumpulan studi; meta-analisis juga menggabungkan ukuran efek lintas studi untuk menghasilkan estimasi ringkasan berbobot dan menguji moderator. [[zerkouk-comprehensive-review-its-2025|Tinjauan ITS yang komprehensif]] dan [[genai-higher-education-systematic-review-2026|tinjauan sistematis GenAI dalam pendidikan tinggi]] menjadi contoh pendekatan ini.

- **Kekuatan:** sintesis efisien atas literatur besar yang terfragmentasi; meta-analisis menghasilkan estimasi efek gabungan dan mendeteksi moderator; esensial untuk praktik berbasis bukti dan identifikasi kesenjangan.
- **Keterbatasan:** bergantung pada kualitas studi yang disertakan (garbage-in/garbage-out); bias publikasi; metode dan ukuran hasil yang heterogen membuat sintesis sulit; cepat usang mengingat kecepatan perubahan AI.
- **Peringatan meta-penelitian (2026):** kritik terhadap basis sintesis AIED menunjukkan bahwa banyak meta-analisis awal dirusak oleh inkoherensi konstruk, heterogenitas yang tak terselesaikan, ketergantungan antar ukuran efek yang tidak ditangani, dan penilaian bias publikasi yang tidak sah — sehingga menggelembungkan ukuran efek AI yang menjadi judul (lihat [[bartos-ai-learning-meta-meta-analysis-2026]], [[oneill-presumed-effective-meta-analysis-2026]], dan [[weidlich-chatgpt-effect-search-cause-2025]]). Perlakukan ukuran efek AIED gabungan sebagai batas atas.
- **Contoh unggulan:** [[zerkouk-comprehensive-review-its-2025]], [[genai-higher-education-systematic-review-2026]], [[chatgpt-critical-creative-thinking-review]], [[zerkouk-comprehensive-review-its-2025]], [[agentic-ai-education-scoping-review]].

Lihat halaman konsep khusus [[meta-analysis-systematic-review]] untuk pembahasan lebih lengkap tentang tinjauan sistematis dan meta-analisis dalam AI di bidang pendidikan — termasuk hubungannya dengan desain primer, pelaporan PRISMA, serta kekuatan dan keterbatasannya.

### Evaluasi komputasional dan tolok ukur

Evaluasi komputasional menilai [[ai-technologies|sistem AI]] secara langsung — terhadap tolok ukur, label kebenaran dasar, atau penilaian manusia — alih-alih mempelajari pembelajar manusia. Ini mencakup [[benchmark|tolok ukur]] dan pendekatan [[llm]]-sebagai-juri. Ini adalah metode yang paling dekat dengan [[ai-ed-evaluation]] (lihat perbedaannya di bawah).

- **Kekuatan:** cepat, dapat diskalakan, dan dapat direproduksi; memungkinkan perbandingan langsung antarmodel dan antarversi sistem; esensial untuk pengembangan sistem dan jaminan kualitas.
- **Keterbatasan:** mengukur keluaran sistem, bukan pembelajaran — akurasi tolok ukur yang tinggi tidak berarti efektivitas pendidikan; kualitas kebenaran dasar dan rubrik itu sendiri diperdebatkan; dapat melewatkan kualitas pedagogis yang dipersepsikan manusia. [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian & Doroudi]] berargumen bahwa kelenturan bahasa alami LLM membuat metrik yang murni teknis tidak memadai, sehingga menuntut pendekatan evaluasi yang terinspirasi manusia — [[simulating-students|siswa tersimulasi]], uji [[teacher-role|guru]] AI, dan analisis ilmu perilaku yang sebelumnya dikhususkan untuk subjek manusia — untuk menilai kualitas yang relevan bagi pembelajaran, dan bahwa mempelajari LLM dengan hati-hati dapat menghasilkan wawasan tentang pembelajaran manusia.
- **Peserta yang terpisah, bukan pemisahan acak, mencegah kebocoran dalam evaluasi detektor.** [[detecting-gpt-assisted-writing-stylometric-2026|Kumar et al. (2026)]] membangun [[ai-detection|detektor]] stilometrik dari 90 penulis yang masing-masing menghasilkan satu sampel tanpa bantuan dan satu sampel parafrase, dengan menjaga setiap jendela dari seorang partisipan berada dalam satu lipatan agar gaya penulis tidak bocor melintasi pemisahan dan menahan 18 orang sepenuhnya di luar. Random forest mencapai ROC-AUC 0.870 dengan F1 0.842, tetapi menandai 4 dari 18 dokumen yang ditulis secara mandiri sebagai berbantuan GPT (22.2%); penulis memperlakukan tingkat positif palsu itu sebagai hasil yang relevan untuk penerapan dan membingkai model sebagai dukungan keputusan alih-alih penyaring pelanggaran otomatis.
- **Contoh unggulan:** [[teachbench-llm-teaching-evaluation]], [[jeon-isd-agent-bench-2026]], [[ground-truth-reliability-aied]], [[cong-confidence-asag-2026]], [[drawedumath-vlm-struggling-students-2026]].
- **Standar pelaporan untuk pipeline otomatis, dan tolok ukur yang diaudit.** Dua makalah tahun 2026 memperluas akuntabilitas metodologis melampaui studi itu sendiri. PRISMA-LLM memetakan 888 makalah otomasi tinjauan dan 14,726 anotasi, menemukan bahwa 38.0% makalah perangkat lunak atau produk tidak melaporkan evaluasi apa pun dibandingkan 9.3% makalah LLM dan bahwa 52% evaluasi LLM yang hanya positif membiarkan satu kekhawatiran berambang tinggi tidak terpenuhi, lalu mengusulkan pelaporan yang mengidentifikasi di mana dalam alur kerja tinjauan otomasi bertindak ([[prisma-llm-ai-assisted-systematic-reviews-2026]]). Audit penilaian ulang oleh ahli atas enam tolok ukur [[physics-education|fisika]] menunjukkan masalah yang sama pada tingkat instrumen: dari 250 penolakan yang diaudit, hanya 12 (4.80%) yang merupakan kesalahan model yang sebenarnya, sementara 143 merupakan cacat butir dan 95 kesalahan penilai ([[frontier-models-physics-benchmark-audit-2026]]). Keduanya berargumen bahwa evaluasi komputasional memerlukan anggaran kesalahan yang diaudit sebelum hasilnya dibaca sebagai temuan tentang pembelajar atau model.
- **Bangun pemeriksaan kesepakatan manusia ke dalam pengembangan detektor, bukan sesudahnya.** [[baker-taylorizable-process-textual-detector-development-2026|Baker dan rekan (2026)]] menetapkan proses tujuh langkah untuk detektor tekstual atas konstruk kognitif — pemilihan kumpulan data, definisi konstruk, penyusunan buku kode, pemeriksaan antarpemberi kode manusia, penyempurnaan kategori, pembangunan detektor, dan penerapan — sehingga reliabilitas pada label yang dikodekan manusia mendahului penerapan [[llm|LLM]]-sebagai-juri. Proses itu menuntut metrik kesepakatan yang dikoreksi peluang (κ Cohen atau Fleiss, α Krippendorff), validasi silang pada tingkat siswa, dan analisis kesalahan subkelompok sebagai standar minimum, serta berargumen bahwa kesalahan pengukuran menjadi sumber kerugian begitu [[educational-nlp|detektor]] semacam itu berada di dalam platform yang diterapkan.

### Desain lain: studi longitudinal, kasus, dan simulasi

Di luar keluarga utama, basis pengetahuan menggunakan desain **longitudinal** yang melacak pembelajar dari waktu ke waktu ([[ai-lms-middle-school-longitudinal|studi LMS longitudinal]]), studi **kasus dan di alam bebas** tentang penggunaan autentik ([[ai-in-the-wild-college|analisis skala besar interaksi siswa nyata]]), dan studi **simulasi** di mana LLM menggantikan siswa atau pasien ([[llm-student-simulation-teacher-insights|LLM sebagai pembelajar tersimulasi]], [[simulation]]). Desain-desain ini menukar keluasan atau kendali dengan realisme dan dengan akses ke fenomena yang jika tidak demikian sulit diamati.

### Metode konsensus ahli: teknik Delphi

Metode Delphi adalah teknik terstruktur untuk menetapkan **konsensus ahli** atas suatu pertanyaan yang jawabannya belum diketahui secara empiris — paling sering digunakan dalam basis pengetahuan untuk mengembangkan kerangka, daftar kompetensi, dan definisi yang dapat disepakati praktisi dan peneliti. Dalam studi Delphi, panel ahli merespons rangkaian kuesioner yang berurutan; setelah setiap putaran, ringkasan anonim atas respons kelompok diumpanbalikkan, dan para ahli merevisi jawaban mereka hingga kelompok mencapai kesepakatan (biasanya didefinisikan oleh ambang yang ditetapkan sebelumnya, misalnya 75%). Ini adalah cara membangun validitas konstruk dan konsensus profesional melalui konsultasi anonim dan iteratif alih-alih satu survei atau pemungutan suara.

- **Kekuatan:** menghasilkan konsensus dari panel ahli yang beragam tanpa tekanan kelompok secara langsung (anonimitas mengurangi efek dominasi); cocok untuk mendefinisikan konstruk, kompetensi, dan kerangka ketika tidak ada ukuran tervalidasi; putaran iteratif memungkinkan ahli menyempurnakan dan mencapai konvergensi; layak ketika eksperimen penuh atau sampel besar tidak praktis.
- **Keterbatasan:** konsensus mencerminkan pertimbangan ahli, bukan bukti empiris — ia menetapkan kesepakatan, bukan efek; hasil bergantung pada [[writing-education|komposisi]] panel dan ambang konsensus (subjektif); dapat lambat melintasi banyak putaran; pertimbangan satu panel mungkin tidak dapat digeneralisasi.
- **Contoh unggulan:** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|studi kerangka SAIL]] (tiga putaran, 17 ahli, menyempurnakan tingkat kompetensi literasi AI), [[hcap-human-centric-ai-pedagogy-framework-2026|studi kerangka HCAP]] (tiga putaran, 30 guru, mendefinisikan 25 kompetensi guru AI), [[ai-literacy-heptagon-2026|Heptagon Literasi AI]] (yang menggunakan masukan/konsensus ahli bersama tinjauan terpandu PRISMA), dan.

Delphi sering dikombinasikan dengan metode lain — misalnya, konsensus ahli dapat digunakan untuk memvalidasi suatu kerangka (seperti pada SAIL dan HCAP) yang kemudian diuji atau diterapkan melalui penelitian berbasis desain atau studi survei. Ia berdampingan dengan pendekatan kualitatif dan pertimbangan ahli serta berkontribusi pada [[educational-measurement|validitas]] instrumen berbasis kerangka.

### Penelitian vs. evaluasi: keterkaitan dan perbedaan

Penelitian dan evaluasi saling terkait erat tetapi berbeda. **Penelitian** mengajukan pertanyaan yang dapat digeneralisasi tentang bagaimana AI memengaruhi pembelajaran — "apakah perancah meningkatkan hasil belajar?" — dan bertujuan membangun teori serta bukti yang bertransfer melampaui studi tertentu. **Evaluasi** (lihat [[ai-ed-evaluation]]) menilai apakah suatu alat atau sistem AI yang *spesifik* berhasil — akurat, andal, sehat secara pedagogis, dan sesuai tujuan — terhadap tolok ukur, rubrik, atau kriteria yang ditetapkan pemangku kepentingan. Penelitian menekankan validitas internal dan generalisasi; evaluasi menekankan kualitas sistem dan pengambilan keputusan lokal.

Batasannya kabur: studi tolok ukur adalah evaluasi yang dapat memberi masukan bagi penelitian, dan instrumen evaluasi (rubrik, kumpulan kebenaran dasar, kerangka validitas) bergantung pada persoalan [[educational-measurement]] dan [[assessment-validity]] yang dijelaskan penelitian. Sebaliknya, temuan penelitian tentang apa yang mendukung pembelajaran seharusnya menginformasikan bagaimana alat AI [[ai-ed-evaluation|dievaluasi]]. Basis pengetahuan memperlakukan keduanya sebagai komplementer: evaluasi komputasional dan tolok ukur ([[benchmark]], [[ai-ed-evaluation]]) memberi tahu kita apakah suatu sistem AI sehat secara teknis, sementara penelitian efikasi dan survei ([[rct]]) memberi tahu kita apakah ia membantu orang belajar.

### Memilih di antara metode

Pilihan metode mengikuti pertanyaan penelitian. Pertanyaan tentang efek kausal lebih cocok dengan eksperimen ([[rct]]); pertanyaan tentang mekanisme dan persepsi lebih cocok dengan survei dan kerja kualitatif; pertanyaan tentang kualitas sistem lebih cocok dengan evaluasi komputasional ([[benchmark]], [[ai-ed-evaluation]]); pertanyaan sintesis lebih cocok dengan tinjauan dan meta-analisis; pertanyaan desain lebih cocok dengan DBR; dan pertanyaan tentang apa yang disepakati para ahli seharusnya menjadi isi suatu konstruk, kompetensi, atau kerangka lebih cocok dengan metode konsensus ahli seperti teknik Delphi. Mengingat heterogenitas bidang ini dan kecepatan perubahan AI, korpus basis pengetahuan mencerminkan pergeseran yang disengaja menuju triangulasi — menggabungkan evaluasi komputasional dengan bukti efikasi, kualitatif, dan konsensus ahli untuk menilai baik apakah suatu alat berhasil maupun apakah ia membantu pembelajaran.

Sama pentingnya adalah membaca setiap studi tunggal dengan kesadaran akan **keterbatasan lintas-bidang** yang memengaruhi penelitian AIED secara keseluruhan — kendala metodologis, laju perubahan AI yang cepat versus publikasi yang lambat, kesenjangan reproduktibilitas dan praktik FAIR, ketergantungan pada alat berpemilik, serta penggunaan teori yang lemah atau tidak kritis. Lihat [[limitations-in-aied-research]].

## Membandingkan tradisi penelitian utama

Tiga tradisi penelitian utama — [[quantitative-research|kuantitatif]], [[qualitative-research|kualitatif]], dan eksperimental — berbeda secara mendasar dalam apa yang dapat mereka klaim, apa yang mereka korbankan, dan kapan masing-masing tepat. Memahami kontras ini esensial baik untuk merancang maupun membaca penelitian AI dalam pendidikan.

### Apa yang ditetapkan setiap tradisi

| Dimensi | Kuantitatif / survei | Kualitatif | Eksperimental |
|---|---|---|---|
| Pertanyaan inti | Berapa banyak? Seberapa terkait? | Apa maknanya? Bagaimana ia dialami? | Apakah X menyebabkan Y? |
| Data utama | Angka, skala, laporan diri | Kata-kata, observasi, artefak | Ukuran hasil lintas kondisi yang ditugaskan |
| Target inferensi | Pola, korelasi, mediasi | Makna, mekanisme, kategori | Efek kausal |
| Validitas internal | Lemah (korelasional) | Lemah (tanpa kendali) | Kuat (penugasan acak) |
| Validitas eksternal | Kuat (sampel besar) | Terbatas (kecil, terikat konteks) | Sedang (kondisi terkendali) |
| Validitas ekologis | Sedang | Tinggi | Lebih rendah (kondisi artifisial) |

- **[[quantitative-research|Penelitian kuantitatif]]** mengukur dan memodelkan hubungan antarvariabel — survei, SEM/PLS-SEM, pengukuran, pelacakan longitudinal. Ia memberikan keluasan, presisi, dan keteralihan tetapi tidak dapat menetapkan kausalitas dari data lintas-seksi dan mewarisi keterbatasan [[educational-measurement|pengukuran]] (termasuk bias laporan diri).
- **[[qualitative-research|Penelitian kualitatif]]** menafsirkan makna dan pengalaman — wawancara, kelompok fokus, analisis tematik, grounded theory, fenomenografi, analisis wacana, observasi/etnografi, studi kasus. Ia memberikan kedalaman, mekanisme, dan pembangunan teori (lihat [[theory-development-aied]]) tetapi keteralihan terbatas dan dukungan kausal lemah.
- **Desain eksperimental dan kuasi-eksperimental** (lihat [[rct]]) memperkirakan efek kausal melalui penugasan acak atau perbandingan yang dipasangkan — standar emas untuk validitas internal, dengan mengorbankan biaya, kecepatan, dan validitas ekologis.

### Kaitan pengukuran dan metode campuran

Kerja kuantitatif bergantung pada [[educational-measurement]] — instrumen yang andal dan valid untuk konstruk yang diteliti. Kerja kualitatif mengungkap mekanisme dan makna yang mungkin terlewat oleh instrumen tersebut. Kerja **eksperimental** memperkirakan apakah suatu intervensi *menyebabkan* hasil yang diukur instrumen. Ketiganya adalah lapisan yang saling melengkapi: instrumen mengukur konstruk, eksperimen menetapkan kausalitas, dan kerja kualitatif menjelaskan *bagaimana dan mengapa* di balik angka-angka itu.

[[mixed-methods-research|Desain metode campuran]] secara sengaja menggabungkan untaian kuantitatif dan kualitatif agar kekuatan masing-masing menutupi kelemahan yang lain — keluasan kuantitatif plus kedalaman kualitatif, dengan triangulasi yang meningkatkan keyakinan.

### Penelitian kegunaan dan HCI

Untaian metodologis yang berbeda — [[usability-research|penelitian kegunaan dan HCI]] — mengevaluasi bagaimana pengguna berinteraksi dengan sistem AI: kegunaannya, kebermanfaatannya, kemudahan dipelajarinya, dan pengalaman pengguna, menggunakan protokol berpikir-keras, studi pengguna terstruktur, wawancara, dan observasi. Ini adalah yang paling dekat dengan [[ai-ed-evaluation]] dan menjawab pertanyaan *prasyarat*: bahkan alat yang sehat secara pedagogis gagal jika tidak dapat digunakan. Penelitian kegunaan berbagi metode pengumpulan data dengan penelitian kualitatif tetapi bertujuan mengevaluasi suatu artefak alih-alih menafsirkan makna.

### Manfaat dan keterbatasan lintas tradisi

- **Kuantitatif/survei:** manfaat — sampel besar, cakupan luas, menguji mediator kompleks, efisien. Keterbatasan — tanpa kausalitas, bias laporan diri, pengambilan sampel kemudahan, instrumen mungkin mengukur konstruk yang salah.
- **Kualitatif:** manfaat — wawasan mendalam, memunculkan fenomena dan kerugian tak terduga, esensial untuk pembangunan teori, memusatkan suara yang kurang terwakili. Keterbatasan — keteralihan terbatas, bergantung pada peneliti, sampel kecil, dukungan kausal lemah, sulit disintesis.
- **Eksperimental:** manfaat — inferensi kausal terkuat, pengukuran hasil bersih, estimasi ukuran efek. Keterbatasan — mahal/lambat, kondisi artifisial, AI yang cepat berubah membuat hasil cepat usang, sampel kecil kurang berdaya, kendala etis.
- **Metode campuran:** manfaat — triangulasi, keluasan + kedalaman, menjelaskan hasil tak terduga. Keterbatasan — kompleks, padat sumber daya, integrasi bisa dangkal, mewarisi kelemahan setiap untaian.
- **Kegunaan/HCI:** manfaat — mengidentifikasi hambatan adopsi, panduan desain yang dapat ditindaklanjuti, cepat dan murah. Keterbatasan — tidak menetapkan efek pembelajaran, sampel kecil, kepuasan yang dilaporkan sendiri dapat menyesatkan.

Dalam praktiknya, penelitian AI dalam pendidikan jarang jatuh dengan rapi ke dalam satu tradisi. Bukti terkuat melakukan triangulasi: evaluasi komputasional atau kegunaan menetapkan bahwa suatu sistem berhasil, eksperimen menetapkan bahwa ia menyebabkan pembelajaran, instrumen kuantitatif mengukur konstruknya, dan kerja kualitatif mengungkap mekanisme serta maknanya — bersama-sama menjawab baik *apakah* suatu alat membantu pembelajaran maupun *bagaimana dan mengapa*.

[[bulut-technology-supported-formative-assessment-2026|Bulut (2026)]] menambahkan untaian bibliometrik yang berdiri terpisah dari keempatnya: memetakan 407 catatan melalui jaringan ko-kata dan ko-kepengarangan untuk melacak perkembangan konseptual suatu bidang. Penulis menegaskan bahwa pembacaan SWOT yang dibangun di atasnya adalah perangkat interpretatif, bukan teknik analitis independen, yang menandai batas antara sintesis dan analisis dalam tradisi ini.

- **"Sebuah statistik dapat dipercaya begitu ia dihitung."** Tolok ukur memeriksa pemeriksanya lebih dulu. Setiap probe dan setiap putusan kecuali enam kumpulan statistik yang disebutkan dijalankan pada penilai tersimulasi dengan efek yang ditanamkan dan tanpanya, dan ukuran yang pemeriksaannya tidak menemukan efek tertanam dilaporkan sebagai tidak terukur alih-alih sebagai hasil. Laporannya dihasilkan dari markdown dan kode mereka sendiri, sehingga setiap angka yang dicetak tertaut ke berkas dan bidang asalnya serta dihitung ulang saat pembangunan. [[porcaro-ai-grading-benchmark-2026|Sebuah Putusan adalah keputusan desain yang dapat diuji]] sebelum hasil nyata apa pun dibaca.

## Miskonsepsi Umum

**"Akurasi tolok ukur yang tinggi menunjukkan efektivitas pendidikan."** Tidak demikian, dan kesenjangannya adalah masalah pengukuran sentral bidang ini: suatu sistem dapat memperoleh skor akurasi tinggi sementara tidak menghasilkan pembelajaran, karena akurasi tolok ukur mengukur kinerja tugas dalam kondisi yang ditetapkan tolok ukur. Efektivitas pendidikan menuntut hasil pembelajar dalam kondisi yang tidak dikendalikan teknologi.

**"Satu tradisi penelitian lebih unggul secara metodologis."** Tradisi-tradisi itu menukar satu keterbatasan dengan keterbatasan lain secara bawaan. Penelitian berbasis desain melakukan iterasi pada intervensi nyata tetapi tidak dapat mengaitkan perolehan dengan mekanisme tertentu, sementara [[rct|RCT]] mengisolasi penyebab tetapi berjalan dalam kondisi artifisial. Memilih di antara keduanya berarti memilih klaim mana yang dapat Anda buat, bukan metode mana yang lebih baik.

**"Aturan pengukuran yang longgar adalah pilihan metodologis kecil."** Ia mengubah temuan. Memberi kredit atas penyelesaian apa pun memprediksi kinerja mandiri berikutnya **hanya sedikit di atas konstanta kesulitan keterampilan (AUC gabungan 0.604 terhadap 0.595)** sambil menyatakan **93.9% pasangan siswa-keterampilan telah dikuasai dibandingkan 72.8%** di bawah aturan ketat. Aturan itu menghasilkan selisih 21 poin dalam siapa yang dinyatakan siap dan hampir tidak ada peningkatan prediktif untuk ditunjukkan.

**"Signifikansi statistik menentukan apakah suatu intervensi berhasil."** Ia menentukan apakah suatu efek dapat terdeteksi. Apakah itu efek *pembelajaran* bergantung pada ukuran hasil, perbandingan, dan kondisi saat pengukuran dilakukan — itulah sebabnya pilihan desain dan pelaporan di bagian-bagian halaman ini sama beratnya dengan analisisnya.

## Konsep terkait

- [[interpreting-and-applying-aied-research]]
- [[ai-ed-evaluation]]
- [[rct]]
- [[benchmark]]
- [[meta-analysis-systematic-review]]
- [[ai-assisted-educational-research]] — Penelitian Pendidikan Berbantuan AI
- [[educational-measurement]]
- [[assessment-validity]]
- [[simulation]]
- [[ai-education]]
- [[higher-ed]]
- [[limitations-in-aied-research]]
- [[learning-gains]]
- [[theory-development-aied]] — Pengembangan Teori dalam AI di Bidang Pendidikan
- [[qualitative-research]] — Penelitian Kualitatif
- [[quantitative-research]] — Penelitian Kuantitatif
- [[mixed-methods-research]] — Penelitian Metode Campuran
- [[design-based-research]] — Penelitian Berbasis Desain
- [[usability-research]] — Penelitian Kegunaan
- [[self-report-measures]]
- [[learning-sciences]]

## Artikel terkait

- [[ai-methodologies-science-education-research-2026]] — Kerangka iterasi epistemik tujuh fase untuk merefleksikan bagaimana metodologi AI dapat mentransformasi penelitian pendidikan sains (Martin et al., 2026)
- [[access-not-enough-ai-tutoring-2026]] — Akses Tidak Cukup: Dukungan Manusia Meningkatkan Keterlibatan dengan Tutoring AI
- [[genai-can-harm-teaching-rct-2026]] — AI Generatif Dapat Merugikan Pengajaran
- [[genai-over-reliance-learning-2026]] — Dari Peningkatan ke Ketergantungan Berlebih: Studi Metode Campuran
- [[acceptance-ai-english-tools-2026]] — Penerimaan Alat Pembelajaran Bahasa Inggris Berbantuan AI
- [[hazra-safetutors-pedagogical-safety-2026]] — Keselamatan Tutor AI dan Kerugian Pedagogis
- [[zerkouk-comprehensive-review-its-2025]] — Tinjauan Komprehensif Sistem Tutoring Cerdas
- [[ai-assisted-collaborative-learning-model-dbr]] — Penelitian Berbasis Desain untuk Model Pembelajaran Kolaboratif Berbantuan AI
- [[teachbench-llm-teaching-evaluation]] — TeachBench: Mengevaluasi Kemampuan Mengajar LLM
- [[ground-truth-reliability-aied]] — Memodernisasi Kebenaran Dasar: Empat Pergeseran Menuju Reliabilitas dan Validitas
- [[llm-student-simulation-teacher-insights]] — Dapatkah LLM Secara Efektif Menyimulasikan Pembelajar Manusia?
- [[raise-framework-ai-education-reporting-2026]] — RAISE: 30 butir dalam sepuluh ranah untuk pelaporan transparan studi AI dalam pendidikan (Allison 2026)
- [[ai-lms-middle-school-longitudinal]] — Sistem Manajemen Pembelajaran Terintegrasi AI: Studi Longitudinal
- [[ai-in-the-wild-college]] — AI di Alam Bebas: Analisis Skala Besar atas Interaksi Autentik
- [[same-ai-different-pathways]] — AI yang Sama, Jalur Berbeda: Mengurai Mekanisme
- [[tep-aied-model-reporting-2026]] — Model TEP-AIED untuk melaporkan penelitian AI dalam pendidikan secara ketat (Hwang, Xie, Wah & Gasevic 2026)
- [[t2i-competence-paradox-2026]] — Paradoks Kompetensi: GenAI Teks-ke-Gambar dalam Seni dan Desain
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT dalam Pendidikan: Efek yang Mencari Penyebab
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Meta-meta-analisis efek AI terhadap pembelajaran
- [[oneill-presumed-effective-meta-analysis-2026]] — Dianggap Efektif: audit meta-analisis AIED yang cacat
- [[synthetic-educational-data-structural-fidelity-2026]] — Apa yang Terlewat oleh Metrik Kesetiaan: Pemeriksaan Struktural atas Data Pendidikan Sintetis
- [[porcaro-ai-grading-benchmark-2026]] — Melampaui kesepakatan: probe yang jawaban benarnya diketahui, pemeriksaan efek tertanam pada penilai tersimulasi, dan 22 model yang diprompt (Porcaro 2026)
