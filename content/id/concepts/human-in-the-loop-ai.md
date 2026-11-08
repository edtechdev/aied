---
title: "Human-in-the-Loop"
created: "2026-05-07T10:44:35-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/human-in-the-loop-ai"
source_updated: "2026-11-08T09:30:45-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Human-in-the-loop** — pola desain ketika [[ai-technologies|sistem AI]] pendidikan secara strategis menyelang-selingkan generasi otomatis dengan pertimbangan ahli manusia, mempertahankan kualitas dan keselamatan [[pedagogy|pedagogis]] sekaligus menskalakan produksi. Alih-alih mengotomatiskan sepenuhnya penilaian, umpan balik, atau pengajaran, HITL menjaga manusia (instruktur, pakar bidang, atau pembelajar) tetap berada dalam lingkaran keputusan di tempat pertimbangannya memiliki nilai marginal tertinggi — untuk mengevaluasi kualitas, memutuskan kasus tepi, dan melindungi [[agency|agensi pembelajar]] serta keselamatan. Pertanyaan desain sentralnya bukanlah *apakah* menyertakan manusia, melainkan *di mana* dalam pipeline pengawasan mereka paling bernilai dan paling sulit digantikan.

## Pertanyaan yang Perlu Dipertimbangkan

- Pertanyaan desain HITL yang sentral bukanlah apakah menyertakan manusia, melainkan di mana dalam pipeline pertimbangan mereka paling bernilai. Dalam sebuah sistem penilaian atau umpan balik AI, pada titik mana Anda akan bersikeras agar manusia tetap berada dalam lingkaran?
- Studi tentang [[automated-question-generation|pembuatan soal]] oleh AI menemukan bahwa komputer menangani kejelasan dan validitas dengan baik, tetapi manusia masih dibutuhkan untuk pengecoh yang bermakna dan umpan balik yang baik. Mengapa sebagian pertimbangan pendidikan mungkin menolak otomatisasi?
- Satu evaluasi menemukan tiga LLM memberikan rekomendasi dukungan siswa yang tidak konsisten dan tidak peka — dan menyimpulkan bahwa pertimbangan manusia masih dibutuhkan sebelum AI menasihati tentang siswa. Ketika sebuah AI 'merekomendasikan' dukungan bagi siswa yang kesulitan, apa yang bisa salah jika tidak ada manusia yang meninjaunya?
- Halaman ini mengusulkan bahwa manusia dan algoritma menangkap jenis masalah yang berbeda — otomatiskan apa yang dapat diverifikasi secara presisi, pertahankan pertimbangan di tempat nuansa tak tergantikan. Di mana batas antara keduanya dalam praktik Anda sendiri?
- Menjaga manusia dalam lingkaran dibingkai sebagai perlindungan atas agensi dan keselamatan pembelajar, bukan hanya kualitas. Bagaimana otomatisasi penuh dapat secara halus mengubah kesadaran siswa tentang siapa yang bertanggung jawab atas pembelajaran mereka?
- Jika AI menjadi lebih otonom, pengawasan HITL digambarkan sebagai pagar pengaman inti. Pada tingkat otonomi AI yang mana Anda akan merasa tidak nyaman — dan apa yang dikatakan ketidaknyamanan itu tentang di mana pengawasan seharusnya berada?

## Pendahuluan

HITL adalah respons terhadap batas dan risiko [[ai-education|AI dalam pendidikan]] yang sepenuhnya otonom: sistem otomatis dapat menghasilkan dalam skala besar tetapi tidak memiliki pertimbangan kontekstual, [[ethics|etis]], dan pedagogis yang dibawa instruktur dan pakar. Dua implementasi terkini menggambarkan arsitektur yang berbeda:
- **Human-in-the-loop tidak memadai jika manusia hanya menyetujui.** [[learning-analytics-genai-learning-design|Rienties, Divjak dan Law (2026)]] berargumen bahwa agensi yang bermakna menuntut kapasitas untuk memahami, mempersoalkan, merancang ulang, dan kadang menolak rekomendasi yang didukung AI, bukan sekadar menyetujui keputusan yang dibentuk di tempat lain.

Dukungan preskriptif adalah domain ketika pengawasan manusia semakin sering diargumentasikan sebagai tidak opsional. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] menguji apakah tiga LLM dapat merekomendasikan rencana dukungan siswa dari indikator [[learning-analytics]] dan menemukan sensitivitas yang terbatas terhadap kebutuhan serta ketidakkonsistenan antar-model yang tajam — dan menyimpulkan bahwa pertimbangan human-in-the-loop masih diperlukan sebelum penasihatan preskriptif [[llm]] dapat diterapkan secara aman dan etis.

Menahan jawaban yang disukai sebuah sistem bersifat protektif alih-alih korektif: dalam sebuah debat multiagen yang tidak pernah mengungkap posisi yang direkomendasikan, peralihan yang merugikan ke jawaban AI yang salah turun dari 42.0–60.5% menjadi 5.7–8.2%, sementara adopsi nasihat yang benar juga menurun ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

Arsitektur ketiga menempatkan pertimbangan manusia *di hulu* model alih-alih pada luarannya. Dalam studi [[lee-learner-question-types-ai-education-2026|Lee, Atif & Kang (2026)]] tentang klasifikasi pertanyaan pembelajar, tiga pakar tingkat doktoral mengendalikan seluruh pipeline: mereka menyempurnakan definisi operasional untuk setiap peran [[constructivist]], melakukan pelabelan secara independen hingga kappa Fleiss naik dari 0.60 menjadi 0.83 setelah penyelesaian ketidaksesuaian, dan memvalidasi butir-butir yang diterjemahkan balik dan diparafrasekan yang digunakan untuk menyeimbangkan kumpulan data pelatihan.

## CODE-GEN: Pembuatan Soal Pilihan Ganda dengan Human-in-the-Loop

Duan et al. (2026) membangun sistem berbasis [[rag]] yang [[agentic-ai|agentik]] dengan dua agen:
- **Generator Agent** — Menghasilkan soal pemrograman pilihan ganda yang selaras dengan tujuan pembelajaran mata kuliah
- **Validator Agent** — Menilai kualitas di tujuh dimensi pedagogis

**Evaluasi:** 6 SME menilai 288 soal yang dihasilkan AI. Tingkat keberhasilan yang divalidasi manusia: **79.9%–98.6%** di seluruh dimensi.

**Dimensi yang kuat pada AI (beban manusia rendah):**
- Kejelasan soal, validitas kode, keselarasan konsep, validitas jawaban benar

**Dimensi yang menuntut manusia (beban manusia tinggi):**
- Desain pengecoh yang bermakna secara pedagogis
- [[feedback]] penjelas yang berkualitas tinggi

Wawasan strategis: usaha manusia harus dipusatkan di tempat pertimbangan instruksional tak tergantikan; verifikasi komputasional dapat diotomatiskan sepenuhnya.

## MAIC: Pembuatan Skrip dengan Human-in-the-Loop

Yu et al. (2024) menerapkan ruang kelas multiagen ([[teacher-role|Teacher]] Agent, TA Agent, dan arketipe teman sekelas) di Universitas Tsinghua dengan lebih dari 500 siswa dan lebih dari 100,000 catatan pembelajaran. Instruktur manusia berpartisipasi dalam pembuatan skrip dan pengawasan, memastikan bahwa penguatan AI berskala massa tidak menggusur keahlian pedagogis.

## PedaCo: Gerbang Ganda untuk Pembuatan Video AI

Kim, Baek, dan Kwak (2026) memperluas HITL ke [[video-education|video instruksional yang dihasilkan AI]] melalui **PedaCo** (Pedagogical Co-creation), sebuah pipeline dengan dua lapis gerbang yang saling melengkapi yang mewujudkan *resistensi berprinsip* yang berakar pada Teori Kognitif Pembelajaran Multimedia (CTML) Mayer. **Lapisan pertama** menempatkan manusia pada tahap skrip: sebuah LLM menyusun draf skrip, seorang peninjau AI menandai potensi pelanggaran CTML (misalnya, "Adegan 3 memperkenalkan istilah teknis tanpa penjelasan sebelumnya"), dan pendidik memutuskan untuk menerima, merevisi, atau menghasilkan ulang. **Lapisan kedua** menjalankan metrik otomatis pascasintesis atas koherensi, redundansi, kontiguitas temporal, modalitas, dan kualitas gambar, yang ditinjau pendidik. Dalam studi within-subject (23 pendidik), pendekatan berbasis tinjauan meningkatkan setiap prinsip CTML (rata-rata penilaian 3.07→3.86, p<.01), dengan pendidik menilai efisiensi produksi 4.26/5 — gesekan yang dipersepsikan produktif, bukan membebani. Prinsip desainnya menggemakan sintesis HITL basis pengetahuan ini: manusia dan algoritma menangkap jenis masalah yang *berbeda*, sehingga sistem yang paling efektif mengotomatiskan di tempat verifikasi komputasional bersifat presisi (sinkronisasi temporal) dan mempertahankan pertimbangan manusia di tempat nuansa pedagogis tak tergantikan (nada, kesesuaian dengan audiens).

Penempatan dapat lebih penting daripada kehadiran: praktisi menilai alat penulisan Social Story sebagai sangat mudah digunakan (SUS 86.8) tetapi melaporkan bahwa tinjauan datang terlalu terlambat, karena kendala kultural dan klinis yang ditetapkan sebelum generasi — abaya alih-alih pakaian jalanan Barat — lebih sulit dipulihkan dengan menyunting keluaran sesudahnya ([[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]]).

## Mengapa HITL penting di era AI

Desain human-in-the-loop menjadi sentral dalam diskusi basis pengetahuan tentang [[agentic-ai|AI agentik]] dan [[ai-literacy|penggunaan AI yang bertanggung jawab]] karena beberapa alasan yang bertemu:
- **Keselamatan pedagogis.** [[pedagogical-safety]] menuntut agar AI yang memiliki otoritas instruksional nyata mempertahankan pengawasan manusia, sehingga kesalahan, bias, atau keluaran berbahaya tertangkap sebelum mencapai pembelajar. Ini sangat penting bagi agen otonom yang [[agentic-ai|secara proaktif mengejar tujuan]].
- **Pengawasan jarang terjadi dalam praktik, bukan hanya dalam teori.** [[agentic-ai-education-scoping-review|Wang et al. (2026)]] menemukan bahwa tata kelola tertanam yang kokoh dan pengawasan human-in-the-loop jarang ditunjukkan pada 474 sistem AI agentik pendidikan, bahkan ketika otonomi tugas tunggal dan kolaborasi multiagen tumbuh — kesenjangan antara prinsip desain dan praktik yang diterapkan.
- **Pertanyaan kritisnya adalah bagaimana lingkaran itu dibuat dapat ditindaklanjuti, bukan berapa banyak manusia yang berpartisipasi.** Pandangan [[learning-sciences|ilmu pembelajaran]] berargumen bahwa menata pembelajaran di sekitar penangkapan data, interpretasi komputasional, dan respons probabilistik membuat tindakan pedagogis bergantung pada apa yang dapat dideteksi dan ditindaklanjuti sistem, dan bahwa peringatan serta klasifikasi keterlibatan menginterpretasikan pembelajar sebelum guru atau siswa mana pun bertindak ([[in-the-loop-educational-ai-learning-sciences-2026|Pande (2026)]]).
- **Validitas dan kendali mutu.** HITL adalah gerbang kualitas bagi [[automated-assessment|penilaian otomatis]] dan pembuatan konten — manusia memutuskan di tempat penilaian otomatis tidak dapat diandalkan (lihat [[llms-do-not-grade-essays-like-humans-2026|penilaian esai oleh LLM]] [[research-methods-aied|penelitian]]) dan memvalidasi butir yang dihasilkan. Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] terpandu PRISMA atas 42 studi penilaian dan umpan balik (2023–2025) mencapai kesimpulan yang sama secara eksplisit: LLM menyamai penilai manusia pada tugas pendek yang terstruktur baik tetapi tidak dapat sepenuhnya menggantikan pertimbangan manusia pada pekerjaan kompleks, terbuka, atau subjektif, dan efektivitas penilaian tertinggi dicapai dalam sistem hibrida yang menggabungkan penilaian berbantuan AI dengan pengawasan dan verifikasi guru ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] menunjukkan secara konkret di mana batas itu jatuh: ChatGPT-5 menyamai fakultas pada butir ujian farmasi objektif (CCC 0.935–1.000) tetapi tidak dapat diandalkan pada butir jawaban singkat dan esai bahkan ketika diberi rubrik, sehingga para penulis merekomendasikan penilaian hibrida dengan tinjauan manusia untuk penilaian yang kompleks, subjektif, atau berisiko tinggi.
- Pengulangan bukan pengganti pengawasan itu: dengan menilai ulang kiriman yang identik pada lima hari berbeda, model yang sama mereproduksi hasilnya sendiri hanya pada alpha Krippendorff 0.625, dengan variasi terkonsentrasi pada nilai menengah dan nilai A serta F absen dari hitungan lima sesi ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **Dibingkai ulang sebagai mitra analitik yang suportif.** [[marrone-genai-qualitative-coding-metacognitive-reflections-2026|Marrone et al. (2026)]] membingkai ulang AI human-in-the-loop dari gerbang persetujuan menjadi mitra analitik yang suportif yang kesalahan klasifikasi dan kasus batasnya menjadi masukan bagi negosiasi makna manusia, bukan cacat yang harus disaring. Dalam pengodean tingkat kalimat mereka atas 18,883 sampel berlabel, model mendeteksi keberadaan konstruk pada akurasi keseluruhan 81.94% tetapi tidak pernah menilai kualitas atau relevansi, sehingga kasus yang diperselisihkan dikembalikan ke penyempurnaan buku kode manusia.
- **Agensi pembelajar.** Menjaga manusia dalam lingkaran mempertahankan [[agency]] dan mendukung [[self-regulated-learning]], melawan [[cognitive-offloading|ketergantungan berlebih]] yang dapat diinduksi bantuan yang sepenuhnya otonom.


- **Siswa sendiri menempatkan manusia di ujung berisiko tinggi.** Di antara 93 mahasiswa, 81.7% lebih memilih penilaian manusia untuk makalah akhir yang bernilai 40% dari nilai, 75 dari 93 menginginkan AI membantu alih-alih menggantikan penilai, dan 69 menginginkan penilaian AI selalu ditinjau manusia ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]]).
- **Kepercayaan dan kalibrasi.** Pengawasan manusia yang transparan mendukung [[trust-calibration]] — pembelajar dan instruktur tahu bahwa manusia yang berkualifikasi berdiri di belakang sistem itu.
- **Kriteria yang terlihat sebelum tinjauan menaikkan kesepakatan.** [[calibrating-trustworthiness-llm-education-2026|Coscia et al. (2026)]] menemukan bahwa memunculkan metrik keterpercayaan kepada peninjau saat mereka membandingkan respons LLM menaikkan kesepakatan antar-penilai dari alpha Krippendorff 0.3987 menjadi 0.4931, sementara menambahkan lebih banyak ukuran menambah beban kognitif tanpa imbal hasil.
- **Agensi terbatas sebagai arsitektur, bukan penyangkalan.** Kerangka AGAI-HE [[ilieva-agentic-genai-higher-education-2026|Ilieva et al. (2026)]] untuk dukungan belajar [[agentic-ai|agentik]] membangun supervisi ke dalam model itu sendiri, sebagai lapisan ketiga bersama lapisan alur kerja pedagogis dan dukungan agentik: kerangka itu mendefinisikan penggunaan AI yang dapat diterima, batas pedagogis, aturan [[privacy]], [[ai-use-disclosure|persyaratan pengungkapan]], verifikasi sumber, titik pemeriksaan instruktur, mekanisme [[academic-integrity|integritas]], dan akuntabilitas manusia final, dan menuntut setiap fungsi agentik dapat dilacak ke persyaratan pembelajaran, tujuan penilaian, atau kendali tata kelola. Ini adalah perwujudan konkret dari prinsip bahwa HITL adalah properti desain sistem alih-alih pernyataan kebijakan — dan studi persepsi 130 siswa oleh para penulis menjadi pengingat bahwa menambahkan orkestrasi agentik di bawah pengawasan itu tidak, dengan sendirinya, tercatat sebagai dukungan belajar yang lebih baik daripada chatbot.
- **Seberapa sering manusia melihat itu sendiri merupakan keputusan desain.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] memisahkan *frekuensi* pengawasan dari penempatannya: HITL frekuensi tinggi, yang meninjau setiap keluaran AI sebelum mencapai siswa, membeli kendali mutu, deteksi kesalahan cepat, akuntabilitas, dan kalibrasi berkelanjutan tetapi dapat membatalkan efisiensi yang memotivasi otomatisasi dan menyumbat periode penilaian puncak; HITL frekuensi rendah, yang memeriksa sampel secara acak dan hanya meninjau kasus yang ditandai, berskala dan mempersingkat waktu penyelesaian tetapi berisiko membuat kesalahan menyebar tanpa terdeteksi di seluruh kiriman, melemahkan akuntabilitas, dan menciptakan masalah [[equity-in-ai-education|keadilan]] jika sebagian siswa menerima tinjauan manusia yang lebih menyeluruh daripada yang lain. Alih-alih menetapkan jawaban universal, kerangka itu menuntut pertukaran tersebut dibuat secara eksplisit terhadap toleransi kesalahan disipliner, apakah penilaian bersifat [[formative-assessment|formatif]] atau [[summative-assessment|sumatif]], ukuran kohort, dan sumber daya institusi — dan menetapkan default pada arah yang berlawanan dari argumen efisiensi yang lazim: mulai dengan pengawasan frekuensi tinggi dan kurangi hanya ketika bukti substansial menunjukkan keandalan, keamanan, dan keadilan yang dapat diterima, sehingga beban pembuktian berada pada pihak yang harus menunjukkan bahwa pengawasan yang *lebih sedikit* itu aman. Makalah itu juga memperingatkan bahwa prinsip-prinsip di balik pengawasan semacam itu dapat memindahkan usaha staf alih-alih menguranginya, sehingga keuntungan efisiensi bersih tetap menjadi pertanyaan empiris yang terbuka.
- Pengawasan manusia yang diterapkan dapat berarti perutean persetujuan alih-alih pertimbangan kualitas: dalam sebuah sistem kueri hibrida, kolom penerimaan hanya mengodekan apakah penyelesai berbeda dari penanya, dan tidak ada ukuran yang menilai kualitas jawaban [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]].

## Di mana HITL muncul dalam penelitian basis pengetahuan
- **Penilaian dan penilaian otomatis:** sistem HITL menggabungkan generasi/penilaian AI dengan validasi manusia pada penilaian jawaban singkat ([[cong-confidence-asag-2026]]), penilaian penjelasan diri ([[llm-automated-assessment-student-self-explanations]]), dan [[automated-essay-scoring|penilaian esai]] ([[psyscore-essay-scoring-zpd-feedback]]). [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] mewujudkannya dalam penilaian kimia umum [[chemistry-education|tulisan tangan]] yang berisiko tinggi: karena keandalan LLM [[multimodal]] bervariasi menurut format respons (jawaban tekstual dan reaksi kimia dapat diandalkan sementara gambar dan grafik bernilai lebih buruk daripada acak) dan positif palsu tidak terdeteksi oleh siswa, mereka mengubah skor AI mentah menjadi kebijakan terima/tunda yang selektif menggunakan filter keyakinan — ambang kredit parsial, ambang risiko berbasis [[item-response-theory|IRT]], dan pengecualian jenis soal — menunda butir yang tidak pasti dan bergambar kepada manusia, sebuah pendekatan yang dikaitkan penulisnya dengan kerangka [[regulation|regulasi]] yang menetapkan AI dalam [[assessment|penilaian pendidikan]] sebagai berisiko tinggi dan mewajibkan pengawasan manusia yang terdokumentasi.
- **Sistem umpan balik:** mewajibkan pengawasan manusia yang terdokumentasi.
- **Penilaian HITL operasional dalam sebuah asesmen nasional (2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi et al. (2026)]] mewujudkan HITL pada skala institusional dalam ujian Acredita EB di Uruguay. Karena kesalahan penilai LLM secara sistematis konservatif (menilai terlalu rendah), alur kerja itu menggunakan logika titik keputusan yang mengarahkan tinjauan manusia tepat kepada kandidat yang hasil lulus/tidaknya bergantung pada bagian Writing — respons lulus yang ditandai AI diterima dengan keyakinan, sementara kegagalan yang ditandai AI (15.3–16.5% kasus) diverifikasi oleh penilai ahli, memangkas beban penilaian penuh setidaknya 50% dengan risiko residu lolosnya kesalahan AI hanya 0.2–0.6%. Ini adalah HITL sebagai strategi alokasi sumber daya: manusia memutuskan secara presisi di tempat bias konservatif AI jika tidak akan mengubah hasil berisiko tinggi.

- **Menurunkan ambang penundaan dari resolusi rubrik itu sendiri (2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz et al. (2026)]] menetapkan toleransi AI–instruktur sebesar 0.5 poin — selisih terbesar yang tidak dapat memindahkan sebuah kiriman melewati satu pita jangkar — dan mengeskalasi pencilan pada 0.8 poin, mengirim 11 dari 362 kiriman (3.0%) ke tinjauan manusia sebelum umpan balik dirilis.

- **Kesepakatan antar-anotator bukanlah kebenaran dasar manusia.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] mendorong anotasi model ke lapisan audit tanpa pernah memvalidasinya terhadap label emas manusia, sehingga kesepakatan antar-model (median 0.401) menjadi proksi bagi kualitas asersi yang dapat dilalui oleh kesalahan model yang sama. Desain mereka menjaga pengawasan tetap diagnostik alih-alih dekoratif: karena pertimbangan antara dibuat eksplisit, seorang peninjau dapat melihat perilaku mana yang terpicu dan memisahkan perilaku yang salah baca dari aturan yang mengodekan konstruk dengan buruk.
- **Sistem umpan balik:** desain umpan balik human-in-the-loop muncul dalam [[becerra-aicofe-feedback-2026|sistem umpan balik kolaboratif]] dan [[cong-confidence-asag-2026|penilaian jawaban singkat yang sadar keyakinan]].
- **Dukungan kolaborasi kelas.** [[breideband-community-builder-cobi-2026|CoBi]] menjaga guru sebagai manusia peninjau dalam sebuah sistem AI yang mendeteksi wacana kelompok kecil yang mengangkat: guru secara eksplisit lebih memilih tinjauan pra/pasca-tindakan daripada tampilan langsung real time yang akan menempatkan mereka "di bawah sorotan," dan umpan balik teragregasi pada tingkat kelas (bukan individual) dari sistem itu justru yang memungkinkannya menavigasi ketegangan antara [[privacy]], pengawasan, dan [[agency]] siswa.
- **Pembuatan soal dan konten:** selain CODE-GEN, HITL memandu pembuatan soal untuk penilaian dan [[scaffolding]] ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]). 
- **Sistem agentik dan multiagen:** ketika AI menjadi lebih otonom, pengawasan HITL adalah [[agentic-ai|pagar pengaman desain]] inti ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Perutean berdasarkan konsekuensi keputusan, bukan ketidakpastian model (2026).** [[human-in-the-loop-ai-scoring-national-assessment-2026|Sebuah studi operasional 2026]] atas ujian akreditasi nasional Acredita EB Uruguay (dua edisi, masing-masing sekitar 5,000-6,000 kandidat) menunjukkan bagaimana desain human-in-the-loop tampak ketika didorong oleh konsekuensi keputusan alih-alih oleh ketidakpastian model. Sebuah penilai GPT-5 sepakat dengan penilai ahli pada 60-80% dari 15 butir rubrik tetapi secara sistematis konservatif, menghasilkan ketidaksesuaian manusia-lulus/AI-gagal pada 15.3% (2024) dan 16.5% (2025) perbandingan lulus/gagal dan hampir tidak pernah sebaliknya. Kerangka itu karena itu menerima hasil yang lulus menurut AI apa adanya dan mengarahkan setiap hasil yang gagal menurut AI yang dapat mengubah hasil kandidat ke tinjauan ahli — setelah lebih dulu melewati kandidat yang kelulusannya tidak dapat bergantung pada bagian menulis — sehingga memangkas respons yang membutuhkan penilaian manusia penuh setidaknya 50%. Desain 2026 kedua menarik batasnya dari sisi lain: dalam platform pasien terstandar AI multiagen ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al.]]), pengawasan manusia disediakan bagi apa yang dinilai tidak layak diputuskan AI, dengan fakultas dan pasien terstandar manusia menyediakan interpretasi kontekstual, remediasi, dan penilaian kesiapan, dan sistem itu secara eksplisit tidak diizinkan menentukan kompetensi [[medical-education|klinis]] secara otonom.
- **Instrumentasi penelitian: manusia memvalidasi label alih-alih skor.** Pengode ilmu pembelajaran dan ilmu komputer menilai segmen perilaku yang dihasilkan LLM pada lini masa tersinkronisasi pada κ = 0.703, dan ketidaksepakatan mereka menjadi analisis kesalahan studi itu sendiri ([[fonteles-embodied-learning-human-in-the-loop-multimodal-2026|Fonteles et al., 2026]]).
- **Model merangkum dan peneliti memberi label.** Sebuah studi pemodelan kolaboratif menggunakan GPT-3.5-Turbo untuk menulis ringkasan yang sadar konteks tugas atas masing-masing 394 segmen wacana, meminta peneliti memverifikasi setiap ringkasan dan mengodekannya hingga κ ≥ 0.7, dan melatih detektor pada label tersebut, sehingga model tidak pernah membuat pertimbangan itu sendiri. Pengawasan kemudian bergerak ke luar: empat guru berpengalaman meninjau satu segmen berlabel, tiga mengenali perilaku tersebut, dan satu berargumen bahwa dua label pada satu segmen mengaburkan apa yang dilakukan siswa, sebuah keberatan [[usability-research|kegunaan]] yang dicatat para penulis alih-alih diselesaikan ([[zhang-llm-detection-ssrl-collaborative-modeling-2026|Zhang et al., 2026]]).
- **Tahap analisis mana yang dipimpin komputer adalah pilihan desain.** [[hur-computational-analysis-teacher-group-interactions-2026|Hur et al. (2026)]] membedakan eksplorasi yang dipimpin komputer dari interpretasi yang dipimpin manusia, dengan berargumen bahwa siapa yang menetapkan pertanyaan dan memutuskan hasil mana yang dihitung adalah pilihan human-in-the-loop alih-alih default yang kebetulan. Dalam kasus video kelas mereka, dua tahap pertama berjalan dipimpin komputer tanpa tahap konfirmasi formal, dan indikator transkrip LLM sepakat dengan penilai manusia pada κ = .778 untuk pertanyaan eksplisit dan .722 untuk mendiskusikan matematika versus hanya .562 untuk butuh bantuan dan .531 untuk mungkin bingung.
- **Substitusi biaya-kualitas: utas otomatis menyamai utas manusia, dengan residu tinjauan bertarget.** [[ravi-llm-conversation-threads-collaborative-learning-2026|Ravi et al. (2026)]] menemukan bahwa utas percakapan yang dihasilkan LLM mencapai kappa Cohen 0.6395 berbanding 0.6239 untuk utas manusia (kondisi jendela geser) dengan biaya di bawah \$1 versus sekitar \$25 per transkrip, sehingga otomatisasi menyamai target keandalan manusia alih-alih plafon yang tak terjangkau. Nilai marginal manusia terkonsentrasi pada jenis utas yang hampir gagal ditangani model — transisi topik (kappa 0.2567) dan kelanjutan diri (0.4309) — di mana para penulis merekomendasikan koreksi manusia bertarget bersama pembuatan utas otomatis.
- **HITL sebagai arsitektur bagi seluruh disiplin, bukan satu alur kerja.** [[zhai-science-literacy-generative-ai-coherence-2026|Zhai et al. (2026)]] menetapkan empat lapisan yang saling mengunci, yaitu infrastruktur data, pengembangan model, antarmuka pedagogis, dan tata kelola manusia, yang disatukan oleh tiga prinsip: pengawasan dan agensi manusia, kecerdasan yang berko-adaptasi, dan daya tanggap kontekstual.

Pemeriksaan yang ditempatkan setelah generasi bukanlah proses yang dikarang manusia: ketika pembelajar merancang prompt dan memverifikasi keluaran, lingkaran itu mengatur substitusi; ketika sistem yang melakukannya, label yang sama menggambarkan tinjauan atas rencana mesin ([[capodieci-humanities-hil-2026|Capodieci et al., 2026]]).

## Sintesis

Desain human-in-the-loop bukan sekadar tindakan keselamatan—ia adalah **strategi alokasi sumber daya**. Pertanyaan di garis depan bukanlah *apakah* menyertakan manusia, melainkan *di mana* dalam pipeline pertimbangan mereka memiliki nilai marginal tertinggi. Sistem HITL yang paling efektif memusatkan keahlian manusia yang langka di tempat sistem otomatis paling lemah (desain pengecoh, umpan balik penjelas, keputusan kasus tepi, pertimbangan etis) dan mengotomatiskan sisanya — mempertahankan kualitas, keselamatan, dan kepercayaan sekaligus menskalakan produksi.
- **Pengawasan manusia tetap ada dalam kerja berbantuan AI.** [[scaffolding-systematic-reviews-2026|Penelitian tinjauan sistematis]] menemukan alat otomatisasi AI mengurangi beban prosedural (misalnya penyaringan) tetapi keputusan interpretatif masih membutuhkan pengawasan manusia yang substansial; [[kim-ai-andragogy-2026|penelitian andragogi]] menjadikan human-in-the-loop (model mental bersama, ko-kreasi) sebagai prinsip desain AI yang inti.
- **Human-in-the-loop pada skala institusional.** Qin (2026) menggambarkan bagaimana Universitas Lingnan mengembangkan model pendidikan human-in-the-loop yang mengedepankan penalaran etis, pertimbangan kritis, dan tanggung jawab sosial sekaligus mendemokratisasi akses [[generative-ai|GenAI]]. Model itu memosisikan manusia sebagai lokus pertimbangan dan nilai bahkan ketika AI tertanam di seluruh [[curriculum-design|kurikulum]] — perwujudan [[governance|institusional]] konkret dari prinsip-prinsip human-in-the-loop dalam [[higher-ed|pendidikan tinggi]].
- **Pembelajar sebagai human-in-the-loop bagi tutoring mereka sendiri.** [[ko-hughes-vsd-student-centered-its-2026|Value Sensitive Design]] bersama mahasiswa community college menghasilkan keluarga fitur HITL yang menghadap pembelajar secara lengkap untuk sebuah ITS (kendali atas penilaian ulang dan tinjauan, tujuan/kecepatan yang dipersonalisasi, penandaan untuk ditinjau, konfirmasi keyakinan alih-alih penguasaan, dan kendali tingkat keterlibatan bantuan AI). Hal ini memosisikan siswa sebagai pengendali aktif lingkaran tutoring alih-alih konsumen pasif keputusan adaptif. Studi itu juga menemukan instruktur terbelah mengenai apakah kendali pembelajar semacam itu dapat melemahkan integritas [[recommender-systems-and-learning-paths|jalur pembelajaran]] yang dipandu sistem — sebuah contoh dari pertanyaan alokasi sumber daya yang lebih luas tentang di mana pertimbangan manusia (pembelajar vs. guru) menambah nilai paling besar.
- **Eskalasi dari AI ke ahli adalah langkah human-in-the-loop.** Kerangka SCAN menetapkan tugas ke empat mode AI generatif berdasarkan jarak pembelajar, dan membaca [[student-engagement|keterlibatan]] pasif di dalam tugas AI yang ditetapkan dengan benar sebagai sinyal salah-pengembangan keterampilan untuk memindahkan pembelajar dari bantuan AI ke bantuan ahli, dengan manusia sebagai auditor epistemik ([[ai-teammate-task-distribution-medical-training-2026|Tsim et al. (2026)]]).
- **Pengawasan atas nasihat adopsi AI.** Karena sistem [[conversational-ai|AI percakapan]] yang dikonsultasikan oleh pengguna yang skeptis mungkin cenderung mendorong adopsi, pengawasan manusia dan evaluasi independen sangat penting. Sebuah audit yang menunjukkan sebagian besar model terdepan mengarahkan staf [[k-12]] pedesaan yang skeptis menuju [[student-engagement|keterlibatan]] menggarisbawahi kebutuhan akan nasihat AI yang transparan dan dapat diaudit alih-alih ketergantungan tanpa kritik.

Seberapa kuat pengaman itu bergantung pada [[automation-bias]]. Kesempatan formal untuk menerima atau menolak tidak menempatkan manusia di dalam produksi pertimbangan jika mereka menuruti keluarannya, dan korpus belum menjalankan perbandingan tersamar yang akan menunjukkan seberapa sering mereka melakukannya.

## Miskonsepsi Umum

- **"Menampilkan rekomendasi sistem membantu manusia mengawasinya."** **Menahan jawaban yang disukai sebuah sistem bersifat protektif alih-alih korektif**: dalam sebuah debat multiagen yang **tidak pernah mengungkap posisi yang direkomendasikan**, peralihan yang merugikan ke jawaban AI **menurun**. Pengungkapan mengundang kepatuhan; penahanan mendukung pertimbangan.
- **"Human-in-the-loop harus berarti satu manusia, satu keputusan."** Sebuah ruang kelas multiagen dengan [[teacher-role|Teacher]] Agent, TA Agent, dan arketipe teman sekelas diterapkan di Universitas Tsinghua dengan **lebih dari 500 siswa dan lebih dari 100,000 catatan pembelajaran**. Supervisi berskala melalui pengaturan itu, bukan dengan memperbanyak supervisor.
- **"Meninjau keluaran AI itu intuitif."** Dalam sebuah **studi within-subject dengan 23 pendidik**, pendekatan berbasis tinjauan **meningkatkan setiap prinsip CTML (rata-rata penilaian 3.07 menjadi 3.86, p < .01)**, dengan pendidik menilai efisiensi produksi secara positif. Tinjauan adalah keterampilan yang meningkat di bawah metode yang terstruktur.

## Konsep terkait
- [[pedagogical-patterns]] — Di mana tinjauan manusia berada dalam urutan yang telah diuji, dan apa yang belum pernah diuji secara terpisah
- [[automation-bias]] — Apa yang menentukan apakah manusia dalam lingkaran benar-benar campur tangan
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — pertimbangan manusia di dalam alur dukungan otomatis

## Artikel terkait
- [[zhai-science-literacy-generative-ai-coherence-2026]] — Arsitektur HITL empat lapis untuk AI generatif dalam pendidikan sains (Zhai et al. 2026)
- [[fonteles-embodied-learning-human-in-the-loop-multimodal-2026]] — Pengode yang memvalidasi segmen perilaku LLM sebagai instrumentasi penelitian (Fonteles et al. 2026)
- [[lee-learner-question-types-ai-education-2026]] — Klasifikasi pertanyaan berlabel pakar: manusia mengendalikan pelabelan, augmentasi, dan analisis kesalahan (Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — Supervisi dan tata kelola manusia sebagai lapisan ketiga desain mata kuliah GAI agentik (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Desain peka nilai untuk ITS yang berpusat pada siswa (pembelajar dalam lingkaran tutoring)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Penilaian berbantuan AI HITL dalam asesmen menulis nasional berskala besar (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — Kerangka SCAN: memikirkan ulang distribusi tugas AI dalam pelatihan medis (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM tidak menilai esai seperti manusia (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — Aplikasi AI dalam Mendukung Andragogi (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Merancang Perancah bagi Tinjauan Sistematis dengan Mentoring dan AI (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — Penilaian dan umpan balik berbantuan AI yang disupervisi instruktur
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Dapatkah AI memberikan dukungan yang tepat bagi profil siswa yang beragam? Sebuah evaluasi berskala besar
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Mengevaluasi Sistem Model Bahasa Besar Multiagen Berorientasi Perancah untuk Pelatihan Wawancara Klinis
- [[tripartite-feedback-framework-ai-assessment-2026]] — Kerangka tripartit: memilah umpan balik menurut status epistemik dan lima prinsip batas bagi keterlibatan AI (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — Intervensi Social Story Berbantuan AI untuk Pendidikan Khusus: Desain AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Skema Berbasis Asersi untuk Pengodean Wacana Pendidikan yang Dapat Diaudit
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — Dari Klasifikasi Sentimen ke Umpan Balik yang Dapat Ditindaklanjuti dan Bertanggung Jawab: Tinjauan Pelingkupan dan Peta Bukti NLP dalam Evaluasi Pengajaran oleh Siswa, 2015–2026

- [[llm-grading-assistants-public-health-2026]] — Pengulangan penilaian LLM yang identik pada hari berbeda mereproduksi hanya pada alpha Krippendorff 0.625
- [[when-students-prefer-ai-scoring-feedback-2026]] — Mahasiswa lebih memilih penilaian manusia untuk pekerjaan berisiko tinggi dan AI sebagai asisten, bukan pengganti
- [[student-query-demand-hybrid-ai-support-2026]] — Apa yang Sebenarnya Ditanyakan Siswa: Struktur Permintaan dan Potensi Otomatisasi dalam Sistem Dukungan Hibrida
- [[in-the-loop-educational-ai-learning-sciences-2026]] — Memikirkan Ulang Pendekatan "In-The-Loop" dalam AI Pendidikan: Perspektif Ilmu Pembelajaran
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Menahan jawaban yang disukai sistem memangkas penyerahan diri pada nasihat AI yang salah, secara protektif alih-alih korektif
- [[capodieci-humanities-hil-2026]] — Memisahkan di mana pemeriksaan manusia berada dari siapa yang mengarang prosesnya, dalam pembelajaran humaniora (Capodieci et al. 2026)
