---
title: "Kreativitas"
created: "2026-08-12T21:20:35-04:00"
type: concept
foundations: [critical-thinking, design-thinking]
pedagogy: [constructivist, problem-solving]
technology: [generative-ai]
audience: [learners]
confidence: high
discipline: [cs education, math education, writing education]
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/creativity"
source_updated: "2026-11-06T09:20:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Kreativitas** — kapasitas untuk menghasilkan ide, solusi, atau artefak yang baru dan bernilai. Di era AI, kreativitas menjadi taruhan pendidikan yang sentral: [[generative-ai|AI generatif]] dapat memperkuat kerja kreatif (sebagai mitra berpikir divergen) sekaligus melemahkannya (dengan menyeragamkan keluaran dan menggantikan proses generatif).

## Pertanyaan yang Perlu Dipertimbangkan

- Kreativitas sering digambarkan sebagai berpikir divergen — menghasilkan banyak kemungkinan — versus berpikir konvergen yang menyempit ke satu jawaban benar. Di mana pekerjaan atau studi Anda sendiri berada pada spektrum itu, dan mana yang paling mudah dibantu AI?
- AI generatif adalah mesin statistik: ia dapat mengusulkan banyak opsi, tetapi cenderung menuju rata-rata. Jika banyak siswa bergantung pada model yang sama, apa yang terjadi pada keragaman ide di seluruh kelas?
- Sebuah studi 'berpikir dulu, ChatGPT kemudian' menemukan bahwa siswa yang menghasilkan ide sendiri sebelum AI tidak menunjukkan peningkatan langsung — namun mengungguli semua orang pada tugas kreativitas tanpa bantuan di kemudian hari. Mengapa melindungi fase berpikir mandiri dapat menghasilkan pembelajaran yang tidak dihasilkan penggunaan AI secara bebas?
- Jika AI dapat menghasilkan artefak yang rapi secara instan, berapa nilai kerja kreatif siswa sebenarnya — dan bagaimana Anda merancang tugas agar proses generatif tetap berada pada siswa?
- Apakah ide yang dihasilkan dengan bantuan AI itu 'milik Anda'? Jawaban Anda mungkin mengubah apakah Anda memperlakukan AI sebagai mitra berpikir divergen atau sebagai sesuatu yang menggantikan proses kreatif Anda.

## Pendahuluan

Kreativitas membentang di ujung berpikir divergen dari spektrum kognitif — menghasilkan banyak kemungkinan — sebagai lawan dari berpikir konvergen, yang mencapai satu solusi benar. Sistem AI sangat relevan bagi kreativitas karena mereka adalah generator statistik: mereka dapat mengusulkan banyak opsi (mendukung ideasi) tetapi juga cenderung menuju rata-rata, menghasilkan penyeragaman tingkat ide yang terdokumentasi ketika banyak siswa bergantung pada model yang sama.

### Kreativitas dan AI generatif

- **Amplifikasi:** AI dapat bertindak sebagai mitra berpikir divergen — melakukan curah pendapat alternatif, menghasilkan kontraargumen, dan menawarkan perspektif yang mungkin tidak dipertimbangkan siswa. Konfigurasi [[agentic-ai|multiagen]] yang terspesialisasi peran dapat memulihkan keragaman ideasional.
- **Modalitas cocok dengan fase kreatif.** Dalam eksperimen 2 × 2 dengan 120 mahasiswa seni dan desain, AI berbasis teks selama divergensi mengungguli AI generatif gambar pada kinerja kreatif divergen (selisih rata-rata 0.823, p terkoreksi Holm < 0.001) ([[wei-genai-configurations-creative-phases-2026|Wei & Li (2026)]]). Keunggulan konvergensi pembangkitan gambar tidak bertahan setelah koreksi Holm (p terkoreksi = 0.052), dan tidak ada urutan — termasuk Teks-ke-Gambar — yang mengungguli alternatif pada kinerja kreatif akhir. Keuntungan tingkat fase itu tidak berjumlah menjadi produk yang lebih unggul.
- **Risiko penyeragaman:** bantuan dari satu model dapat mengurangi keragaman ide antar siswa, sehingga model yang sama menghasilkan keluaran yang konvergen. Ini adalah ancaman langsung bagi kreativitas dalam [[writing-education|pendidikan menulis]] dan [[design-education|pendidikan desain]].
- **Penyeragaman adalah sifat penerapan, bukan sifat bantuan AI itu sendiri.** Dalam eksperimen menulis dengan 247 partisipan, bantuan satu model dan dua model sama-sama menaikkan kualitas esai (Δ = 0.332 dan 0.234 berbanding kontrol), namun hanya kondisi dua model yang memulihkan keragaman ide antar partisipan ke tingkat baseline ([[multi-agent-llm-social-learning|Kumar dan rekan (2026)]]). Keluaran konvergen yang diperingatkan halaman ini dihasilkan oleh *satu* model yang dipakai semua orang, sehingga tuas desainnya adalah jumlah dan kekhasan asisten, bukan kehadiran AI.
- **Melindungi agensi kreatif:** menjaga proses generatif siswa tetap dalam lingkar — rutinitas menulis draf lebih dulu, menuntut sintesis orisinal, dan menggunakan AI untuk menantang alih-alih menggantikan — mempertahankan kerja kreatif yang menghasilkan pembelajaran yang bertahan.
- **Gesekan bukanlah keuntungan kreatif.** Persona AI kontrarian mendorong wacana tantangan-dan-refleksi pada 38.2% kelompok namun tidak menghasilkan peningkatan kinerja kreatif yang terukur, sehingga pola interaksi yang lebih kaya bukan bukti kreativitas ([[jin-emergent-learner-agency-implicit-hai-2026|Jin dan rekan (2026)]]).
- **Peta lapangan K–12: GenAI sebagian besar *meningkatkan* kreativitas dan jarang *mengukurnya*.** Sebuah [[meta-analysis-systematic-review|tinjauan lingkup]] terpandu PRISMA atas 45 studi (2017–2025) menyortir literatur K–12 ke dalam empat penggunaan — [[assessment|penilaian]] kreativitas (4 studi), ko-kreativitas manusia–AI (3), persepsi [[stakeholders|pemangku kepentingan]] (14), dan peningkatan kreativitas (34) — dan menunjukkan betapa sempitnya bidang ini masih: bercerita dan menulis berbasis bahasa menyingkirkan hampir semua hal lain, dengan musik, kerja [[embodied-learning|terwujud]] dan spasial, serta studi yang berfokus pada [[equity-in-ai-education|keadilan]] hampir tidak ada. [[scaffolding|Perancah]] yang dirancang khusus dan mempertahankan kepengarangan (masukan suara, papan cerita, prompt divergen "banyak opsi") mengungguli platform siap pakai, dan model [[llm]] menilai berpikir divergen mendekati penilai manusia; namun kekhawatiran penulisnya sendiri adalah penyeragaman yang dilacak halaman ini — menyusutnya keragaman linguistik, konvergensi gaya, data pelatihan yang terkontaminasi AI, dan kemalasan [[metacognition|metakognitif]] dalam menulis bersama — yang mereka sebut dengan istilah Runco, "kreativitas artifisial": keluaran yang tampak kreatif tanpa pengalaman manusia di belakangnya. Ketergantungan berlebih muncul kembali sebagai risiko di seluruh studi persepsi, ko-kreativitas, dan [[curriculum-design|kurikulum]] ([[genai-creativity-k12-scoping-review-2026]]).
- **Ko-kreativitas adalah efek jaringan, bukan sifat individual:** [[trikonet-trivalence-co-creativity-2026|Ruhland (2026)]] bersandar pada Actor-Network Theory untuk memodelkan kreativitas sebagai sifat emergen dari jaringan sosio-teknis — interaksi triadik antara stabilisasi, destabilisasi, dan restabilisasi di antara aktor manusia dan non-manusia, dengan agen [[generative-ai|AI generatif]] diperlakukan sebagai partisipan jaringan yang setara dan konstitutif. Dalam sebuah studi di mana [[ai-avatars-and-synthetic-instructors|avatar]] [[pedagogy|pedagogis]] dirancang bersama dalam jaringan kreatif, desain avatar bukanlah tindakan kreatif individual melainkan muncul melalui proses translasi di antara siswa, [[research-methods-aied|peneliti]], dan alat desain. TriKoNet membingkai risiko bahwa avatar AI siap pakai menggeser [[agency|agensi]] kreatif ke arah kenyamanan yang diinduksi mesin ("Perangkap Kenyamanan") dan berargumen bahwa ikut mengonstitusi struktur tindakan AI bersama [[learners|siswa]] mempertahankan ko-kreativitas.

- **Kolaborasi berpikir-dulu mempertahankan kreativitas mandiri:** Wong dan Qiu (2026) menemukan bahwa siswa yang menghasilkan ide sendiri *sebelum* menggunakan ChatGPT (protokol "berpikir dulu, ChatGPT kemudian") tidak menunjukkan peningkatan langsung pada tugas berbantuan, namun mengungguli kelompok AI-bebas maupun kelompok manusia-saja pada tugas kreativitas tanpa bantuan di kemudian hari. Menggunakan ChatGPT secara bebas hanya menghasilkan kinerja sesaat yang runtuh ketika bantuan dicabut — suatu bentuk [[cognitive-offloading|Ketergantungan Berlebih]] alih-alih pembelajaran — sementara [[human-ai-collaboration|ko-kreasi]] kolaboratif yang bertujuan memperbaiki ide *sendiri* menghasilkan keuntungan yang bertahan dalam kreativitas mandiri. Ini memberi bukti eksperimental langsung bahwa melindungi agensi kreatif bukan sekadar diinginkan tetapi justru yang mengubah kerja berbantuan AI menjadi pembelajaran.
- **Sumber contoh yang dipersepsikan, bukan isinya, membentuk ideasi kelompok.** Contoh identik yang dihasilkan ChatGPT dan diberi label sebagai buatan manusia versus AI mengubah kreativitas kelompok dalam studi hiperscanning fNIRS atas 113 diad: atribusi manusia menaikkan keunikan ide selama stimulasi dan sinkroni antarotak di area premotor dan motorik suplementer, atribusi AI hanya menaikkan perpindahan antar jalur ideasi, dan tidak ada efek yang bertahan setelah contoh ditarik ([[ai-exemplar-attribution-creativity-education-2026|Xiaoyong dan rekan (2026)]]).
- **Implementasi perkembangan, bukan kapasitas, yang membedakan kreativitas anak berbantuan AI.** Dalam perbandingan neuroimaging pertama antara anak dan orang dewasa yang berko-kreasi dengan ChatGPT, anak berusia 6–7 tahun dan orang dewasa menjalani percakapan lisan lima menit yang sama di dalam pemindai MRI. Kreativitas yang diukur di luar pemindai tidak berbeda antar kelompok. Namun orang dewasa menunjukkan konektivitas dalam-jaringan yang jauh lebih kuat pada jaringan kontrol frontoparietal, salience, dan atensi dorsal, dan kreativitas yang lebih tinggi memprediksi kopling frontoparietal–salience yang lebih kuat pada orang dewasa tetapi tidak pada anak. Para penulis membacanya sebagai perbedaan dalam *cara* kognisi kreatif diimplementasikan selama dialog AI, bukan perbedaan kapasitas dasar. Ini juga memunculkan pertanyaan yang belum harus dijawab saran perancah di halaman ini: kapan mesin kontrol yang direkrut kerja kreatif berbantuan AI benar-benar matang? ([[horowitz-kraus-children-chatgpt-cognitive-control-2026|Horowitz-Kraus dan rekan (2026)]])


Penyeimbang dari penelitian pascasarjana: di antara 1,157 mahasiswa pascasarjana Tiongkok, ketergantungan pada [[generative-ai|GenAI]] berasosiasi positif dengan kreativitas penelitian yang [[self-report-measures|dilaporkan sendiri]], jauh lebih kuat untuk ketergantungan fungsional yang berorientasi tugas (β = 0.457) daripada ketergantungan eksistensial (β = 0.147), dengan [[critical-thinking|berpikir kritis]] membawa sekitar 85.0% jalur fungsional ([[genai-dependence-research-creativity-2026|Yin dan rekan (2026)]]).


Survei nasional mempersulit pola itu: di antara 5,764 mahasiswa universitas Tiongkok, ketergantungan AI berkorelasi negatif dengan kreativitas yang dilaporkan sendiri (r = −0.17), dengan motif melarikan diri dan sosial membawa jalur tidak langsung negatif dan motif instrumental serta hiburan membawa jalur positif ([[ai-dependence-creativity-motivation-literacy-2026|Hou dan rekan (2026)]]).


- **Perwujudan membuahkan hasil secara tidak merata.** Robot fisik yang dipasangkan dengan model berkreativitas tinggi secara signifikan menaikkan orisinalitas dibandingkan kolaborasi manusia–manusia dan berbasis teks, sementara kondisi manusia dan berbasis teks mempertahankan keunggulan dalam imaji dan suara — paradoks perwujudan di mana robot memperkuat keluaran AI tanpa memperbaiki gaya ([[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|Liu & Song (2026)]]).

- **Menegaskan kembali kreativitas manusia di era AI.** Kebangkitan AI generatif menantang bidang pendidikan untuk menegaskan kembali nilai kreativitas manusia. Kerangka [[project-based-learning|pembelajaran berbasis proyek]] berupa [[storytelling-in-education|bercerita]] digital untuk pendidikan seni dan desain dirancang secara eksplisit untuk menumbuhkan kapasitas emosional, kultural, dan naratif yang tidak dimiliki AI, dengan siswa menghasilkan narasi [[multimodal]] dari warisan budaya lokal — memposisikan kreativitas sebagai kontribusi khas manusia dalam pembelajaran terintegrasi AI.

### Kreativitas lintas domain

Kreativitas bukan fakultas tunggal yang monolitik — ia terwujud secara berbeda dalam menulis, seni visual, [[math-education|matematika]], dan komputasi, dan AI generatif berinteraksi dengan proses kreatif setiap domain secara berbeda. Memahami perbedaan itu penting untuk merancang pembelajaran berbantuan AI yang melindungi, bukan memintas, tindakan kreatif inti setiap domain.

- **Seni visual dan desain — paradoks kompetensi.** Alat teks-ke-gambar (T2I) memampatkan jarak dari ide ke artefak, tetapi kemudahan tidak serta-merta membebaskan kreativitas. Dalam studi atas mahasiswa seni dan desain (417 disurvei), kompetensi kreatif memprediksi secara kuat *niat* menggunakan alat T2I — namun juga memprediksi penggunaan aktual yang lebih *tertahan dan selektif*, ketika siswa menegosiasikan kepengarangan, orisinalitas, dan pemertahanan keterampilan melawan efisiensi ([[t2i-competence-paradox-2026]]). Kemudahan dan ketersediaan siap pakai memungkinkan pembangkitan keluaran cepat alih-alih [[student-engagement|keterlibatan]] yang berkelanjutan, sehingga alat dapat diam-diam menjadi jalan pintas yang mengikis alur kerja studio iteratif yang seharusnya dipercepatnya.
- **Matematika — kreativitas tanpa transfer.** Intervensi [[inquiry-based-learning|pembelajaran berbasis inkuiri]] berbantuan AI dalam matematika [[k-12|sekolah menengah]] (siswa berusia rata-rata 12.79 tahun) secara signifikan menaikkan *kinerja matematis kreatif* dan sikap terhadap matematika — tetapi **tidak** secara signifikan memperbaiki [[problem-solving|pemecahan masalah]] kritis ([[mujib-ai-ibl-creative-math-2026]]). Kreativitas dan pemecahan masalah konvergen adalah luaran yang dapat dipisahkan; inkuiri berbantuan AI dapat menumbuhkan produksi kreatif sementara keterampilan analitis yang dapat ditransfer tertinggal, memperkuat [[cognitive-offloading|kesenjangan kinerja-pembelajaran]] yang lebih luas.
- **Matematika — kreativitas guru bergerak bersama pengetahuan konten dan pedagogis.** Dalam studi kasus terbenam atas delapan guru dalam jabatan dari distrik pedesaan dan bersumber daya rendah, program sepuluh modul interaktif yang dipandu AI generatif dan dibangun di atas kerangka 4P Rhodes melibatkan guru dengan kreativitas matematis (MC), pengetahuan konten (CK), dan pengetahuan konten pedagogis (PCK) sebagai bentuk penalaran yang saling terhubung alih-alih domain terpisah ([[bicer-genai-pd-math-creativity-2026]]). Kontribusi yang dibutuhkan pembahasan pengukuran halaman ini adalah klaim para penulis bahwa MC tidak berkembang secara mandiri dari pengetahuan matematika guru dan pengetahuan mereka tentang cara membuat ide dapat diakses — dan bahwa nada AI yang tidak menghakimi dan non-evaluatif itulah yang membuat pergulatan produktif terasa cukup aman untuk dicoba.
- **Komputasi kreatif — gesekan yang melindungi iterasi.** Pemrogram kreatif pemula belajar dengan memahami dan memperluas "contoh yang ditemukan", yang dapat diberi perancah oleh AI secara membantu atau dipintas secara menggoda. Flowcode, lingkungan komputasi kreatif bertenaga AI, memasangkan [[visualization|diagram alur]] struktur kode dengan percakapan berorientasi pembelajaran dan gesekan yang dirancang sengaja — ditunjukkan dalam dua studi mengarahkan penggunaan AI ke pemahaman dan perluasan kode alih-alih [[vibe-coding|vibe coding]] di sekitarnya ([[flowcode-ai-creative-coding]]). Kesulitan produktif di sini adalah fitur yang mempertahankan lingkar generatif siswa.
- **Penciptaan sastra — unit di antara tema dan teks.** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] berargumen bahwa sebuah karya diorganisasi oleh *premis yang dinyatakan* alih-alih tema, dan membangun tingkat perantara — 1,455 catatan aksioma yang mencakup 149 karya, dihubungkan oleh 472 relasi bertipe — di mana penulis yang merevisi suatu konfigurasi dapat mengubah komitmen pengorganisasi, pembaca dapat membenarkan rekonstruksi, dan kritikus dapat membandingkan dua karya. Auditnya sendiri mempertajam poin pengukuran di atas: artefak itu mencatat satu kurasi tunggal, 1,448 dari 1,455 aksioma memetakan tepat ke satu karya, dan validasi yang diusulkan (lima penilai pada sampel 35 catatan) belum dijalankan, sehingga kerangka itu adalah program penelitian alih-alih bukti tentang pembelajaran kreatif.

- **Alur kerja desain GenAI dapat menurunkan keyakinan kreatif sementara kinerja bertahan.** Dalam perbandingan desain arsitektur dengan 36 siswa, pembangkitan gambar GenAI menyamai pencarian preseden pada kinerja desain, beban kognitif, dan efikasi diri kreatif spesifik tugas, namun efikasi diri kreatif *umum* menurun (DiD = −0.543, 95% CI [−1.068, −0.017]) — dukungan tugas dan keyakinan pada kreativitas sendiri dapat bergerak terpisah ([[caeai-genai-architectural-design-creative-self-efficacy-2026|Xiao dan rekan (2026)]]).

### Menerapkan kreativitas dalam praktik

Prinsip desain yang berulang di seluruh temuan ini adalah **menjaga tindakan generatif siswa sendiri tetap dalam lingkar** — apakah tindakan itu menghasilkan ide, mengiterasi artefak, atau memperluas contoh yang ditemukan — dan menggunakan AI sebagai mitra berpikir divergen yang menantang dan memperluas alih-alih menggantikannya.

- **Bagi [[teacher-role|instruktur]]:** urutkan tugas agar siswa menghasilkan ide awal mereka sendiri *sebelum* berkonsultasi dengan AI (protokol "berpikir dulu, ChatGPT kemudian"), lalu gunakan AI untuk menginterogasi, memperluas, atau berperan sebagai penentang terhadap ide-ide itu. Nilai proses dan sintesis orisinal bersama kerapian, sehingga jalan pintas yang menghindari usaha (keluaran T2I sekali klik, solusi hasil vibe coding) tidak menghasilkan apa pun. Dalam seni dan desain, jadikan kepengarangan dan pengembangan keterampilan sebagai objek yang dinilai, bukan hanya artefaknya.
- **Bagi pengembang dan perancang:** bangun alat yang memaparkan dan memberi imbalan pada lingkar iterasi — tunjukkan struktur (seperti yang dilakukan diagram alur Flowcode), tambahkan [[desirable-difficulties|gesekan produktif]] pada momen "kirim keluaran pertama", dan tawarkan alternatif serta kritik alih-alih satu jawaban rapi. Ketika alat membuat versi terbaik berikutnya menjadi mudah, keputusan kreatif siswa harus tetap yang menentukan.
- **Bagi peneliti:** perlakukan kreativitas sebagai sesuatu yang [[discipline-specific-aied|spesifik domain]] dan spesifik luaran — ukur apakah keuntungan [[transfer-of-learning|bertransfer]] ke tugas konvergen atau tanpa bantuan, bukan hanya apakah keluaran berbantuan tampak lebih kreatif. Kesenjangan pengukuran adalah masalah paling tajam di bidang ini: dalam korpus K–12 dengan 45 studi, hanya empat studi penilaian yang menggunakan ukuran kreativitas formal, sebagian besar studi bahkan tidak pernah mendefinisikan konstruknya, dan *proses* kreatif — persiapan, inkubasi, iluminasi, verifikasi — praktis tidak terukur. Karena itu resep tinjauan tersebut adalah pengukuran lebih dahulu: skor kreativitas secara tidak mencolok di dalam tugas terbuka melalui desain berpusat bukti dan [[assessment|penilaian]] senyap, dan perlakukan [[self-efficacy|efikasi diri]] kreatif sebagai bagian dari luaran alih-alih efek samping yang tersirat ([[genai-creativity-k12-scoping-review-2026]]).

### Koneksi

Kreativitas terhubung dengan [[critical-thinking|berpikir kritis]] dan pembelajaran [[constructivist|konstruktivis]]. Ia dilindungi oleh [[reducing-ai-misuse|pengurangan penyalahgunaan AI]] berupa [[scaffolding|perancah]] yang sama yang mempertahankan pembelajaran, dan oleh desain [[authentic-assessment|penilaian autentik]] yang memberi imbalan pada penalaran orisinal alih-alih produk yang rapi.

## Miskonsepsi Umum

- **"Mengganggu siswa menghasilkan keuntungan kreatif."** **Gesekan bukanlah keuntungan kreatif.** Persona AI kontrarian mendorong wacana tantangan-dan-refleksi pada **38.2% kelompok** namun tidak menghasilkan **peningkatan kinerja kreatif yang terukur**. Wacananya berubah dan luaran yang diukur tidak.
- **"Literatur K-12 menetapkan bahwa GenAI meningkatkan kreativitas."** Tinjauan lingkup terpandu PRISMA atas **45 studi (2017-2025)** menunjukkan GenAI sebagian besar **meningkatkan** kreativitas dan **jarang mengukurnya**. Temuan dominan bidang ini adalah inferensi dari peningkatan yang dipersepsikan, yang bukan pengukuran luaran.
- **"Semakin bergantung pada GenAI berarti semakin banyak keluaran kreatif."** Di antara **1,157 mahasiswa pascasarjana Tiongkok**, ketergantungan GenAI **berasosiasi positif dengan kreativitas penelitian yang dilaporkan sendiri** — dan asosiasinya adalah dengan **laporan sendiri**, ukuran konstruk yang paling lemah yang tersedia.

## Konsep terkait

- [[critical-thinking]]
- [[constructivist]]
- [[writing-education]]
- [[student-experience]]
- [[generative-ai]]
- [[reducing-ai-misuse]]
- [[authentic-assessment]]
- [[collaborative-learning]]
- [[design-thinking]]
- [[problem-solving]]
- [[inquiry-based-learning]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[arts-design-and-media-education]]

## Artikel terkait
- [[wei-genai-configurations-creative-phases-2026]] — Konfigurasi AI generatif lintas fase kreatif: eksperimen 2 × 2 tentang kinerja kreatif dan pengetahuan langsung dalam pendidikan seni dan desain
- [[caeai-genai-architectural-design-creative-self-efficacy-2026]] — Pembangkitan gambar GenAI membiarkan kinerja desain tetap sama tetapi menurunkan efikasi diri kreatif umum
- [[bicer-genai-pd-math-creativity-2026]] — Bagaimana pengembangan profesional terpandu AI generatif mendukung keterlibatan guru dengan kreativitas matematis, pengetahuan konten, dan pengetahuan konten pedagogis
- [[incipit-axiom-grounded-scaffolding-literary-creation-2026]] — Perancah berbasis aksioma untuk penciptaan sastra: premis sebagai unit di antara tema dan teks, hanya tervalidasi dalam rencana (Liu & Zhao 2026)
- [[jin-emergent-learner-agency-implicit-hai-2026]] — Agensi siswa yang muncul dalam kolaborasi manusia–AI implisit: persona suportif vs. kontrarian
- [[chatgpt-critical-creative-thinking-review]] — ChatGPT dan Berpikir Kritis serta Kreatif: Tinjauan Sistematis
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Integrasi Robot-LLM dan Penulisan Kreatif
- [[t2i-competence-paradox-2026]] — Paradoks kompetensi AI teks-ke-gambar di antara mahasiswa seni dan desain
- [[mujib-ai-ibl-creative-math-2026]] — Pembelajaran berbasis inkuiri berbantuan AI dan kinerja matematis kreatif
- [[flowcode-ai-creative-coding]] — Flowcode: lingkungan bertenaga AI yang memberi perancah iterasi dalam komputasi kreatif
- [[trikonet-trivalence-co-creativity-2026]] — TriKoNet: model trivalensi ko-kreativitas potensial dalam jaringan sosio-teknis
- [[genai-creativity-k12-scoping-review-2026]] — Tinjauan lingkup PRISMA atas 45 studi K–12: empat penggunaan GenAI untuk kreativitas, penyeragaman, dan kesenjangan pengukuran
- [[multi-agent-llm-social-learning]] — Bantuan dua model memulihkan keragaman ideasional yang diratakan satu model (Kumar dan rekan 2026)

- [[genai-dependence-research-creativity-2026]] — Ketergantungan GenAI fungsional versus eksistensial dan kreativitas penelitian pada 1,157 mahasiswa pascasarjana
- [[horowitz-kraus-children-chatgpt-cognitive-control-2026]] — Kreativitas yang setara, keterlibatan neural yang berbeda: anak vs. orang dewasa berbicara dengan ChatGPT di pemindai fMRI
- [[ai-dependence-creativity-motivation-literacy-2026]] — Ketergantungan AI dan empat motif penggunaan berhubungan secara berbeda dengan kreativitas yang dilaporkan sendiri (Hou dan rekan 2026)
- [[ai-exemplar-attribution-creativity-education-2026]] — Mendukung pendidikan kreativitas di era AI: peran sumber contoh yang dipersepsikan
