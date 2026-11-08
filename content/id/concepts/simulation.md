---
connected_resources: [openmaic]
title: "Simulasi"
created: "2026-08-12T21:20:35-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
updated: "2026-11-08T14:01:53-05:00"
translation_of: "concepts/simulation"
source_updated: "2026-11-04T15:58:10-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Simulasi** — penggunaan lingkungan, agen, atau skenario yang dimodelkan untuk mendukung pembelajaran melalui praktik dan umpan balik dalam konteks yang aman, dapat diulang, dan sering kali tidak dapat diakses dengan cara lain. Simulasi memungkinkan siswa bertindak, membuat kesalahan, dan melihat konsekuensinya tanpa biaya di dunia nyata, dan semakin banyak didukung oleh AI serta pemodelan berbasis agen.

## Pertanyaan yang Perlu Dipertimbangkan

- Ingat kembali saat Anda mempelajari sesuatu dengan melakukannya di lingkungan yang aman dan berisiko rendah — laboratorium, latihan tiruan, simulator penerbangan atau gim. Apa yang membuat praktik itu efektif, dan apa yang mungkin hilang jika simulasinya terlalu realistis atau tidak cukup realistis?
- Halaman ini berargumen bahwa simulasi memungkinkan siswa membuat kesalahan dan melihat konsekuensinya 'tanpa biaya di dunia nyata.' Menurut Anda apa yang diperoleh, dan apa yang mungkin hilang, ketika biaya sebuah kesalahan turun hingga hampir nol?
- Jika AI dapat mensimulasikan pasien, siswa, atau mitra percakapan untuk latihan, di mana Anda akan menarik garis antara latihan ulang yang berharga dan latihan yang gagal bertransfer ke interaksi manusia nyata?
- Mengapa kesadaran siswa akan batas-batas simulasi — [[trust|keterpercayaannya]] — bisa sama pentingnya dengan seberapa setia simulasi itu memodelkan realitas?
- Bagaimana teknologi simulasi yang sama yang membantu seseorang belajar juga dapat menyesatkannya, dan apa yang perlu Anda ketahui untuk membedakan kedua hasil tersebut?

## Pendahuluan

Simulasi berada di inti [[experiential-learning|pembelajaran eksperiensial]] dan [[active-learning]] [[pedagogy|pedagogi]]. Ia menyediakan latihan yang disengaja, [[productive-failure|kegagalan produktif]], dan [[feedback|lingkaran umpan balik]] yang membangun keterampilan dan pertimbangan. AI telah mengubah simulasi dalam dua cara: ia mendukung lingkungan simulasi yang lebih realistis dan adaptif, dan ia menghasilkan [[simulating-students|pembelajar simulasi]], pasien, atau lawan bicara yang membuat latihan dapat diskalakan. Bukti perilaku menunjukkan bahwa *bagaimana* siswa terlibat dengan simulasi bervariasi secara sistematis alih-alih seragam: menelusuri pembelajar daring yang membangun model ekologis di VERA, [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] mengklasifikasikan [[student-engagement|keterlibatan]] menjadi Observasi (menjalankan simulasi sering dan menyesuaikan parameter dengan sedikit pembangunan model), Konstruksi (pembangunan langsung dengan sedikit simulasi), dan Eksplorasi (siklus lengkap mengonstruksi–memparameterkan–mensimulasikan), dengan para Eksplorator menghasilkan model paling kompleks dan beragam sementara pembelajar yang berat observasi sebagian besar menyalin model yang ada — sebuah argumen untuk merancang lingkungan simulasi yang mendorong siswa menuju aktivitas siklus penuh.
- **Mekanisme eksplisit dapat diperiksa dengan cara yang tidak mungkin pada generator yang dipelajari.** DagFlow-AI membangun data sintetis dari graf asiklik berarah plus distribusi dan rumus per variabel, sehingga proses pembangkitan data menjadi dokumen yang dapat dibaca dan dikoreksi oleh instruktur ([[arthur-dagflow-agentic-synthetic-data-statistics-2026|Arthur et al., 2026]]). Ini sengaja dikontraskan dengan sintesis GAN dan VAE, yang membutuhkan kumpulan data benih dan menghasilkan proses yang buram. Trade-off-nya adalah bahwa mencapai simulasi yang stabil membutuhkan beberapa iterasi.

### AI dan simulasi

- **Lingkungan bertenaga AI:** simulasi adaptif menyesuaikan kesulitan dan skenario dengan keadaan siswa, bertaut ke [[adaptive-learning]] dan pembinaan berbasis [[reinforcement-learning]].
- **[[virtual-and-augmented-reality|Lingkungan virtual]] dan lapisan AI adalah keuntungan yang dapat dipisahkan.** Dalam unit hukum Ohm Kelas 9 selama tiga minggu, capaian yang disesuaikan adalah 23.45 dari 30 dengan laboratorium virtual berbantuan AI, 20.51 dengan laboratorium yang sama tanpa AI dan 16.57 di laboratorium fisik ([[li-ahmad-ai-virtual-lab-flipped-physics-2026|Li dan Ahmad (2026)]]). Kelas utuh ditugaskan dengan guru yang berbeda untuk masing-masing, jadi ini menggambarkan tiga penataan kelas, bukan agennya semata.

- **Simulasi yang dihasilkan prompt menempatkan laboratorium khusus dalam jangkauan.** Instruktur dapat menghasilkan model topik yang dibutuhkan suatu kursus yang berjalan di peramban dari templat prompt yang dapat digunakan ulang (slider, animasi, grafik bergantung waktu), memvalidasi masing-masing dua kali — secara teknis, lalu terhadap solusi analitis yang diketahui — alih-alih menerima simulasi terbitan yang paling mendekati ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion et al., 2025]]).

- **Mengotomatiskan mitra manusia.** [[astra-atco-training-simulator|Chew et al. (2026)]] menggantikan pemain peran manusia spesialis yang mengisi simulasi pengendalian lalu lintas udara dengan sim-pilot [[llm|LLM]] otonom, menghapus hambatan kapasitas pelatihan; pipeline ucapan yang disetel halus memangkas tingkat kesalahan kata pada ucapan penerbangan beraksen Singapura dari 107.80% menjadi 23.45%, meskipun semua evaluasi berada di tingkat komponen tanpa kohort peserta pelatihan yang dijalankan.

- **Simulator adversarial sebagai mitra pelatihan.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] memasangkan agen kebijakan dengan simulator pasien LLM yang dibangun untuk berperilaku adversarial dalam pipeline skenario 57K kasus; pelatihan melawan mereka memangkas tingkat tanda bahaya yang terlewat sekitar sepertiga, dan klinisi yang tersamar lebih memilih agen terlatih dalam 87.6% perbandingan berdampingan.

- **Enkode keadaan kasus yang hilang secara eksplisit.** Sistem pasien terstandardisasi multi-agen memisahkan pengenalan maksud, pembangkitan respons yang berakar pada kasus dan evaluasi pasca-sesi, membedakan empat jenis informasi yang hilang — secara klinis negatif, tidak diketahui pasien, belum dinilai, dan tidak ada dalam kasus — karena menggabungkan semuanya menjadi "normal" menyuntikkan fakta klinis yang tidak didukung ([[medeasy-ai-standardized-patients|Gao et al. (2026)]]).
- **Agen simulasi:** AI dapat mensimulasikan pasien (untuk pelatihan medis), siswa (untuk praktik [[teacher-role|guru]]), atau mitra percakapan, membuat latihan interpersonal berisiko tinggi dapat diakses dan diulang. Dalam [[teacher-education|pendidikan guru]], [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang dan Zhang (2025)]] membangun *Student GPT*, [[conversational-ai|chatbot]] ChatGPT khusus yang memainkan peran siswa [[k-12|sekolah menengah]] yang memegang [[misconceptions]] penalaran rasio yang umum, memberi guru [[math-education|matematika]] prajabatan praktik yang terjangkau dan spesifik-konten dalam mendiagnosis pemikiran siswa — dan menggunakan kerangka pengodean [[affective-computing|Afektif]], Communicative, Technical (ACT) untuk menilai secara sistematis kekuatan permainan peran siswa simulasi (kejelasan, relevansi, konsistensi kesalahan) dan kelemahan keasliannya (nada seperti guru, kebingungan peran).

- **Jadikan sejarah kontrafaktual sebagai fitur kelas satu.** Agen [[llm|LLM]] multi-agen kontekstual SupplyNet menghasilkan dinamika rantai pasok yang muncul dari keputusan siswa alih-alih yang telah diskripkan, dan garis waktu bercabangnya memungkinkan siswa meninjau kembali pilihan sebelumnya tanpa penalti — 13 dari 14 peserta menilainya sangat baik untuk menghubungkan keputusan dengan kinerja dibandingkan 3 untuk baseline ([[supplynet-visual-exploratory-learning|Li et al. (2026)]]).
- **Dinamika yang berakar, bukan persona yang diprompt.** [[adaptive-virtual-patient-psychotherapy-training|Chen et al. (2026)]] memparameterkan dinamika pengungkapan pasien virtual dari hampir 2,000 jam transkrip psikoterapi nyata, lalu memperbarui levelnya setiap giliran; dalam 1,033 giliran dengan 20 klinisi, pengungkapannya naik seiring empati dan eksplorasi terapis sementara baseline hanya-prompt pada LLM yang sama tetap datar.
- **Bermain peran menempatkan siswa pada perannya.** Ketika agen simulasi menyediakan lawan bicara, bermain peran justru memberi siswa peran itu. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari dan rekan (2026)]] meminta 18 anak berusia 9-10 tahun menonton adegan perundungan yang dimainkan robot sosial, bernalar tentang posisi setiap tokoh, lalu melatih diri membela dengan mengendalikan avatar robot, dan melaporkan kenaikan [[self-efficacy]] yang dipersepsikan untuk membela plus keyakinan yang lebih terkalibrasi tentang apakah menghadapi perundung benar-benar menghentikannya. Kerangka mereka, drama terapan yang dimediasi robot, mempertahankan fasilitator manusia dalam peran Forum Theatre dan membatasi otomatisasi pada kendali naratif, sebuah pengingat berguna bahwa bagian yang menuntut dari bermain peran adalah refleksinya, bukan mesinnya. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga dan Johnson (2025)]] menempatkan bermain peran bersama simulasi di antara strategi yang digunakan [[online-teaching-and-learning|pembelajaran daring]] berbantuan AI.

- **Pembelajar simulasi:** model perilaku siswa memungkinkan [[research-methods-aied|peneliti]] dan perancang menguji [[intelligent-tutoring|sistem tutoring]] dan [[curriculum-design|kurikulum]] sebelum penerapan langsung, membumikan [[student-modeling]] dan [[knowledge-tracing]].
- **Kepercayaan dan kesetiaan:** nilai simulasi bergantung pada seberapa setia ia memodelkan konteks nyata — dan pada kesadaran siswa akan batasnya, bertaut ke [[trust-calibration]].

- **Kemiripan dengan manusia adalah sifat interaksi, bukan model.** Setelah kedua backend ditampilkan di balik avatar yang sama, keunggulan kemiripan manusia berbasis teks menghilang: peserta menyebut model komersial natural (54% versus 22%) sementara kinerja komunikasi identik; suara, latensi dan giliran bicara membentuk ulang bagaimana kualitas dialog yang sama dipersepsikan ([[sophie-clinical-communication-ai-assessment-2026|Hasan et al. (2026)]]).
- **[[generative-ai|GenAI]] dalam pembelajaran berbasis simulasi.** [[genai-scenario-based-healthcare-education-2026|Neto dan rekan (2026)]] [[meta-analysis-systematic-review|meninjau secara sistematis]] GenAI di seluruh pembelajaran berbasis skenario, kasus, masalah, dan simulasi dalam pendidikan kesehatan, menemukan hasil positif untuk keterampilan kognitif tingkat tinggi tetapi hasil yang tidak konsisten di tempat lain, dengan [[human-ai-collaboration|kolaborasi manusia-AI]] hibrida mengungguli pendekatan yang sepenuhnya otomatis. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger, dan Liening (2026)]] mengembangkan agen percakapan AI untuk dukungan adaptif dalam gim simulasi bisnis, menjawab kesenjangan umum berupa terbatasnya umpan balik [[formative-assessment|formatif]] dan refleksi terstruktur dalam pembelajaran berbasis simulasi.
- **"Kesenjangan keaslian" membatasi apa yang dapat digantikan simulasi AI.** Dalam simulasi [[medical-education|klinis]], [[jiang-ai-powered-simulation-nursing-education-2026|Jiang et al. (2026)]] dalam tinjauan sistematis [[mixed-methods-research|metode campuran]] atas simulasi keperawatan bertenaga AI (19 studi, N=1,253) menemukan AI efektif untuk pengetahuan kognitif dan hasil afektif tetapi tidak konsisten untuk keterampilan psikomotorik kompleks. Konsep mereka tentang **kesenjangan keaslian** — kekurangan yang dipersepsikan siswa dalam resonansi emosional, pengenalan isyarat nonverbal, dan dimensi pemeriksaan taktil/fisik — menjelaskan *mengapa* simulasi AI paling baik untuk tujuan yang sangat terstruktur (komunikasi dasar, pengambilan riwayat) dan harus berada dalam **kontinum simulasi bertahap** yang menyerahkan skenario psikomotorik lanjutan dan kompleks secara emosional kepada pasien terstandardisasi manusia dan penempatan klinis. Ketidakstabilan teknis (misalnya keterlambatan pengenalan ucapan) juga dapat menambah [[cognitive-offloading|beban kognitif]] ekstraneus dan [[anxiety-and-stress|kecemasan]], sehingga kesetiaan dan stabilitas itu sendiri adalah tuas desain. Ini sejalan dengan temuan [[genai-scenario-based-healthcare-education-2026|Neto et al.]] bahwa pendekatan hibrida manusia–AI mengungguli pendekatan yang sepenuhnya otomatis.
- **Simulasi hasil kodesain guru-AI.** Simulasi interaktif yang mendukung pembelajaran konseptual sekaligus pengembangan kompetensi jarang ditemukan di domain praktik langsung, dan keluaran GenAI sering kali tidak memiliki validitas pedagogis. Dalam [[stem-education|pendidikan STEM berbasis drone]], simulasi hasil kodesain guru-AI yang disematkan dalam kurikulum praktik langsung yang sebaliknya identik dievaluasi dengan desain kuasi-eksperimen pra-tes–pasca-tes pada 30 siswa menengah, menguji apakah pengajaran berbantuan simulasi menghasilkan [[learning-gains|hasil belajar]] yang unggul ([[simulation-assisted-drone-learning-stem-2026]]). Secara terpisah, [[agentic-ai|multi-agen]] tutoring [[benchmark|tolok ukur]] seperti ASTRA menggunakan agen simulasi yang cerdas secara sosial untuk mempelajari kolaborasi yang seimbang partisipasinya dalam [[cs-education|pemrograman pengantar]] ([[astra-multi-agent-tutoring-benchmark-2026]]).

- **[[agency|Kendali siswa]] dalam simulasi dijalankan, bukan diberikan.** Eksperimen 2 × 2 dalam simulasi flocking ([[learner-agency-ai-simulation-2026|Su, Nair dan Nagashima 2026]]) memberi sebagian siswa slider parameter, sebagian agen percakapan opsional dan sebagian keduanya; setiap kondisi membaik, tetapi tidak ada affordance yang menghasilkan perbedaan yang andal setelah [[prior-knowledge|pengetahuan awal]] dikendalikan (p = .849 dan p = .108). Yang memprediksi [[learning-gains|perolehan]] adalah di mana dan berapa lama siswa memanipulasi parameter: penggunaan slider yang berkelanjutan dalam pelajaran yang paling kompleks secara konseptual berkaitan positif dengan perolehan, dan perilaku yang sama dalam pelajaran yang lebih mudah berkaitan negatif. Bagi pembangun simulasi implikasinya adalah bahwa menawarkan kendali bukanlah intervensinya — membantu siswa memutuskan apa yang harus diubah, dan menyadari apa yang berubah, itulah intervensinya.
- **Agency adalah lapisan yang dirancang, bukan sifat teknologi.** [[theelen-classroom-simulations-four-layer-framework-2026|Theelen et al. (2026)]] mengurutkan simulasi berdasarkan praktik yang direpresentasikan, situasi yang disimulasikan, bagaimana agency dan adaptasi didistribusikan, dan bagaimana pembelajarannya diorkestrasi, alih-alih berdasarkan tingkat imersi.
- **Kembaran digital adalah simulasi dengan tagihan perangkat keras, dan tagihan itu membentuk siapa yang bisa ikut serta.** Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] atas 11 studi tentang kembaran digital dalam [[higher-ed|pendidikan tinggi]] [[engineering-education|teknik]] dan STEM menemukan bahwa setiap implementasi menghasilkan prototipe yang berfungsi dengan sinkronisasi waktu-nyata, namun hanya tiga yang melaporkan [[learning-gains|perolehan belajar]] yang signifikan secara statistik. Rig fisik membatasi akses pada 1–3 siswa bersamaan dalam lima studi, dan berkurangnya interaksi sosial adalah tantangan pedagogis yang paling banyak dikutip, dalam enam studi ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-González et al. (2026)]]).
- **Simulasi berbasis agen dapat memodelkan teori [[metacognition|metakognisi]] sebagai sistem yang dapat diuji.** Kerangka berbasis agen yang terinspirasi kembaran digital, yang menggabungkan model AMERT lima tingkat dengan simulasi NetLogo, memungkinkan peneliti memvariasikan arketipe pembelajar dan kondisi tugas serta mengamati lintasan metakognitif, meskipun penulis menekankan bahwa keluarannya adalah pembangkitan hipotesis, bukan bukti tentang pembelajar nyata ([[agent-based-digital-twin-metacognition-2026|Guo, 2026]]). Simulasi menjadi laboratorium virtual bagi teori yang jika tidak demikian sulit diamati.
- **Kurikulum adalah unit yang menentukan nilai sebuah simulasi.** Model Jembatan Kurikuler berargumen bahwa imbal hasil simulasi bergantung pada bagaimana pengalaman diurutkan sepanjang program — penggunaan ulang konteks, variasi tuntutan penalaran, bukti yang mengalir ke progresi — alih-alih pada kesetiaan platform ([[herrera-alcaino-simulation-curricular-coherence-2026|Herrera Alcaíno, 2026]]).

### Koneksi

Simulasi bertaut ke [[active-learning]], [[adaptive-learning]], dan [[pedagogical-agent]]. Ia adalah mekanisme bagi pembelajaran eksperiensial dan [[constructivist]] dan diperkuat oleh kemampuan AI untuk menghasilkan lingkungan latihan yang adaptif dan realistis.

Simulasi pembelajaran kini mencakup pasien, siswa, dan mitra role-play sintetis, dan [[ai-avatars-and-synthetic-instructors]] berargumen bahwa pertanyaan tentang persetujuan, pengungkapan, dan kesetiaan persona mereka tidak sama dengan kesetiaan peralatan atau skenario.

## Apa yang tidak dapat didelegasikan

Sebagian besar kerja tentang percakapan tersimulasi menanyakan seberapa setia agen memainkan perannya. [[alvarez-rubio-pedagogy-first-conversational-ai-simulation-2026|Álvarez-Rubio (2026)]] menanyakan pertanyaan sebelumnya: apa yang tidak dapat diserahkan seorang [[teacher-role|guru]] sama sekali sepanjang siklus simulasi briefing, skenario, dan debrief. Makalah itu memisahkan empat operasi delegasi: eksekusi, penyampaian, fasilitasi, dan pengambilan komitmen. Eksekusi dan penyampaian memungkinkan guru mengoreksi kegagalan sesudahnya; fasilitasi menyerahkan pertimbangan tentang struktur suatu aktivitas. Yang keempat gagal secara berbeda, karena syarat esensial sebuah komitmen adalah akuntabilitas sebagai relasi kepada pihak yang dapat menuntut alasan. Agen dapat menjalankan fungsi debriefing; ia tidak dapat menjadi pihak yang menjawab untuknya. Dalam kerangka ini, chatbot yang melakukan debriefing sebaik manusia tidak pernah menjadi akuntabel, sehingga bukti debriefing yang lebih kuat tidak dapat menggeser batas itu.

Kerangka itu berfungsi sebagai uji, bukan katalog. Tiga pertanyaan menentukan fungsi mana pun: apa yang akan beralih ke agen, apakah guru dapat mengoreksi kegagalan, dan siapa yang dapat diminta menanggung perkataan agen. Fungsi yang tidak punya jawaban untuk pertanyaan ketiga bukan kandidat. Diterapkan pada persiapan, uji itu menghasilkan enam putusan — diagnosis dan logistik dapat didelegasikan, tujuan yang dinyatakan sebagian dapat didelegasikan, dan kontrak fiksi, keselamatan psikologis, serta syarat penilaian ditolak. Dalam debrief, makalah itu memaparkan tiga pendirian yang mungkin diambil agen — pakar, karakter, dan Maietik — dan melaporkan mode kegagalan Maietik: agen yang dibangun untuk mengajar dengan tidak pernah menjawab membuat siswa frustrasi. Ini kerangka desain, bukan studi hasil. Para penulis menyatakan tidak ada data yang dikumpulkan untuk penelitian, dan penerapan yang dilaporkan adalah uji coba yang dibaca melalui pengamatan guru sendiri.

## Miskonsepsi Umum

- **"Simulasi lebih murah dan karenanya pilihan kedua."** Sim-pilot [[llm|LLM]] otonom **menggantikan pemain peran manusia spesialis yang mengisi simulasi pengendalian lalu lintas udara, menghapus hambatan kapasitas pelatihan** — kendalanya adalah kepegawaian, bukan kesetiaan. Di tempat pemain peran manusia langka, simulasi LLM bukan pengganti melainkan satu-satunya opsi yang tersedia.
- **"Simulator seharusnya berperilaku seperti kasus rata-rata."** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] memasangkan agen kebijakan dengan **simulator pasien LLM yang dibangun untuk berperilaku adversarial**. Simulator yang dirancang kooperatif membuat latihan siswa lebih mudah daripada klinik, yang merupakan kebalikan dari apa yang dibutuhkan pelatihan.
- **"Skenario yang diskripkan mengajarkan pengambilan keputusan di bawah ketidakpastian."** Agen kontekstual multi-agen SupplyNet menghasilkan **dinamika yang muncul dari keputusan siswa alih-alih urutan yang diskripkan**. Skenario yang diskripkan melatih jalur yang diketahui; yang emergen melatih keputusannya.

## Konsep terkait
- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — Pendidikan kimia dan AI: laboratorium, penilaian formatif, batas LLM, filsafat eksperimentasi
- [[biology-education]] — Pendidikan biologi dan AI: asisten pengajar laboratorium, literasi AI dalam biologi, berpikir kritis, alat khusus
- [[ai-technologies]] — Payung: Teknologi dan teknik AI (model, pelatihan LLM, robotika, RAG, agentic)
- [[ai-avatars-and-synthetic-instructors]]
- [[virtual-and-augmented-reality]] — modelnya, bukan modalitasnya — lingkungan imersif biasanya merender sebuah simulasi

## Artikel terkait
- [[learner-agency-ai-simulation-2026]] — Kendali parameter dan agen AI opsional dalam simulasi sistem kompleks: perolehan mengikuti pelaksanaan, bukan akses
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — Pasien Virtual Adaptif untuk Pelatihan Psikoterapi
- [[ai-enabled-serious-games]] — Gim Serius Bertenaga AI
- [[anvil-ai-educational-animations]] — ANVIL: Analogi dan Video untuk Dosen
- [[astra-atco-training-simulator]] — ASTRA: Simulator Pelatihan ATCO
- [[supplynet-visual-exploratory-learning]] — SupplyNet: Pembelajaran Eksploratif Visual
- [[medeasy-ai-standardized-patients]] — MedEASY: Pasien Terstandardisasi AI
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Gim bermain peran yang dimediasi robot untuk intervensi pengamat perundungan (drama terapan)
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — Tinjauan sistematis GenAI dalam pendidikan kesehatan berbasis skenario (Neto et al. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — Kerangka CAIS-GBL untuk agen percakapan AI dalam gim simulasi bisnis (Wenzel et al. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Agen LLM spesifik-peserta yang disetel halus untuk mereproduksi dialog pemecahan masalah kolaboratif (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Tolok ukur sintetis ASTRA untuk tutoring multi-agen dan kolaborasi yang seimbang partisipasinya
- [[simulation-assisted-drone-learning-stem-2026]] — Pembelajaran drone berbantuan simulasi dengan perancah hasil kodesain guru-AI
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — Simulasi bertenaga AI dalam keperawatan: tinjauan sistematis metode campuran (kesenjangan keaslian, kontinum bertahap)
- [[sophie-clinical-communication-ai-assessment-2026]] — Pelatihan komunikasi klinis berbasis AI yang dapat diskalakan dan penilaian otomatis
- [[caee-digital-twins-stem-education-systematic-review-2026]] — Kembaran digital dalam pendidikan STEM: semua prototipe berfungsi, perolehan belajar sebagian besar tidak

- [[li-ahmad-ai-virtual-lab-flipped-physics-2026]] — Laboratorium virtual berbantuan AI untuk pembelajaran fisika terbalik: efek pada capaian, motivasi, dan beban kognitif siswa sekolah menengah
- [[theelen-classroom-simulations-four-layer-framework-2026]] — Kerangka empat lapis yang memisahkan praktik yang direpresentasikan, situasi yang disimulasikan, agency dan adaptasi, serta orkestrasi
- [[herrera-alcaino-simulation-curricular-coherence-2026]] — Dari adopsi teknologi ke koherensi kurikuler: simulasi yang ditingkatkan teknologi sebagai jembatan dalam pendidikan profesi kesehatan
- [[alvarez-rubio-pedagogy-first-conversational-ai-simulation-2026]] — Apa yang tidak dapat didelegasikan guru kepada agen percakapan sepanjang siklus simulasi
