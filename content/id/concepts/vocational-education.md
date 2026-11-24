---
title: "Pendidikan dan Pelatihan Vokasional"
created: "2026-09-17T14:04:23-04:00"
type: concept
technology: [human-in-the-loop-ai, intelligent-tutoring, simulation]
assessment: [authentic-assessment]
pedagogy: [career-development-and-readiness, professional-training]
discipline: [vocational education]
audience: [instructors, curriculum designers, institutions]
level: [adult learning, higher ed]
confidence: high
connected_resources: [unesco-2026-integrating-ai-in-tvet-guide]
connected_concepts: [professional-training, adult-learning, higher-ed, career-development-and-readiness, simulation, authentic-assessment, intelligent-tutoring, human-in-the-loop-ai, cognitive-offloading, self-efficacy]
connected_articles: [wang-legacy-curriculum-ai-cte-renewal-2026, ai-vocational-education-training-review, ai-ive-pbl-vocational-design-creativity-2026, ai-supported-oral-assessment-tvet-2026, ai-pedagogical-accompaniment-amico, ai-autonomous-learning-accomplishment-2026, astra-atco-training-simulator, crewscaler-ai-upskilling-framework, genai-xr-architectural-design-education-2026, huang-ai-literacy-vocational-problem-solving-2026]
updated: "2026-11-24T15:51:30-05:00"
translation_of: "concepts/vocational-education"
source_updated: "2026-11-22T12:10:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pendidikan dan pelatihan vokasional**: segmen pendidikan yang menyiapkan orang untuk okupasi, perdagangan, dan peran teknis bernama, yang diorganisasi di sekitar kompetensi dekat praktik alih-alih pengetahuan disipliner. Ketika pembelajaran di tempat kerja menggambarkan [[lifelong-learning|peningkatan keterampilan]] bagi mereka yang sudah bekerja, VET mencakup persiapan awal untuk suatu perdagangan; ketika [[higher-ed|pendidikan tinggi]] menamai studi bergelar, VET sering non-gelar dan dibingkai kerangka kualifikasi nasional. Ciri penentunya adalah pembelajar dinilai berdasarkan apa yang dapat mereka lakukan dengan peralatan, pengajaran berlangsung dekat bengkel, [[simulation|simulator]], atau lokasi kerja, dan pelatih manusia yang membawa pengajaran praktis sering menjadi kendala pengikat. Dalam penelitian AI, VET muncul baik sebagai [[learners|populasi pembelajar]] yang berbeda, yang keyakinan akademiknya terikat pada keterampilan yang ditunjukkan dan identitas okupasional, maupun sebagai basis bukti yang berbeda, lebih tipis dan lebih terfragmentasi daripada literatur sekolah atau universitas.

## Pertanyaan yang Perlu Dipertimbangkan

- Jika suatu kualifikasi mensertifikasi apa yang dapat dilakukan seorang pembelajar, berapa banyak pembelajaran berbantuan AI yang dihitung sebagai praktik autentik dan berapa banyak yang menggantikan pengulangan pembentuk kompetensi?
- Apa yang hilang ketika [[agentic-ai|agen AI]] memainkan peran lawan bicara, yaitu pasien, pilot, klien, yang dahulu diperankan pelatih manusia? Penilaian mana yang tidak dapat dimodelkan lawan bicara sintetis?
- [[oral-assessment|Penilaian lisan]] sulit diskalakan seiring pertambahan ukuran kelas. Jika AI memunculkan bukti tetapi tidak menilai, bagian kapasitas penilaian mana yang terbantu dan mana yang hanya dialihkan kepada [[teacher-role|guru]]?
- Tidak ada studi dalam basis bukti AI dalam VET yang berlatar tempat kerja, padahal VET didefinisikan oleh pembelajaran berbasis kerja. Apa yang dituntut oleh penelitian kredibel yang dilakukan di tempat pembelajaran itu terjadi?
- EU AI Act memperlakukan AI yang mengevaluasi hasil belajar dalam pelatihan vokasional sebagai berisiko tinggi, sementara beberapa yurisdiksi tidak punya sama sekali. Haruskah pengadaan mengikuti standar terketat yang tersedia?

## Pendahuluan

Pendidikan dan pelatihan vokasional menyiapkan orang untuk okupasi tertentu, yaitu teknisi otomotif, pengatur lalu lintas udara, desainer interior, pekerja perawatan, dan alat tukarnya adalah kompetensi yang ditunjukkan, bukan kredit terakumulasi. Penilaian cenderung berbasis kinerja, pengajaran terikat pada peralatan, dan pelatih terampil yang mengawasi praktik jumlahnya langka.

Konsep tetangganya berbeda terutama dalam cakupan. [[professional-training|Pelatihan profesional]] mencakup peningkatan keterampilan di tempat kerja dan korporat, sebagian besar bagi orang yang sudah bekerja; VET juga mencakup persiapan okupasional awal. [[adult-learning|Pembelajaran orang dewasa]] menamai karakteristik pembelajar, bukan kekhususan okupasional. [[higher-ed|Pendidikan tinggi]] menamai studi pemberi gelar, sedangkan banyak VET diorganisasi oleh kerangka kualifikasi seperti standar unit NZQA atau EQF. [[stem-education|Pendidikan STEM]] dan VET tumpang tindih di ranah teknis, tetapi pendidikan STEM bertujuan pada pemahaman konseptual sementara VET bertujuan pada prosedur yang dapat dipakai. [[career-development-and-readiness|Pengembangan karier dan kesiapan]] menamai disposisi keterkerjayaan yang menjadi dasar penilaian program VET; VET menamai sistem instruksional yang dimintai pertanggungjawaban untuk menghasilkannya.

Yang khas dari AI dalam VET adalah celah antara apa yang dikatakan sektor ini inginkan dan apa yang dibangunnya: [[constructivist|teori konstruktivis]] banyak dianut sementara sistem latihan-dan-praktik behavioris mendominasi dan desain berorientasi agensi pembelajar tetap jarang. Pertanyaan desain yang berulang bukan apakah AI dapat menyampaikan pengajaran, melainkan apakah AI dapat menyerap bagian pembelajaran vokasional yang mahal untuk distafkan, yaitu skenario realistis, umpan balik tepat waktu, lawan bicara yang diperankan, bukti lisan, tanpa menggeser praktik yang menghasilkan kompetensi.

## Bagaimana AI Muncul dalam Pendidikan dan Pelatihan Vokasional

- **Basis bukti yang muda, terfragmentasi, dan terkonsentrasi secara geografis.** [[meta-analysis-systematic-review|Tinjauan sistematis]] pertama atas AI dalam VET ([[ai-vocational-education-training-review|Deutscher et al., 2026]]) mengidentifikasi 26 studi empiris yang terbit 2015-2026 melalui ERIC, Web of Science, dan Elicit di bawah pedoman PRISMA: sembilan ranah teknis, sembilan lintas domain, lima administrasi bisnis, dan tiga kesehatan. Latarnya enam kelas, delapan daring, empat campuran, dan delapan berbasis simulasi, dan tidak satu pun di tempat kerja, meski VET berciri berbasis kerja. Tujuh belas dari 26 berasal dari Asia; hanya sembilan studi berbagi setidaknya satu rujukan dan tidak satu pun saling mengutip. Lima merupakan eksperimen teracak dan 21 memakai desain pra-eksperimental atau kuasi-eksperimental, sebagian besar mengukur hasil segera setelah intervensi, dan hanya tiga memberi pembelajar peran aktif dalam desain yang diberdayakan AI. Para penulis memperingatkan "Turing Trap" pendidikan, yaitu memakai AI untuk mereplikasi pengajaran manusia alih-alih memperkuat [[human-in-the-loop-ai|pertimbangan manusia]], dan menyerukan kasus kegagalan serta kondisi batas sebagai ganti narasi keberhasilan yang berlaku.

- **Simulasi menyerap pemain peran langka.** [[astra-atco-training-simulator|Chew et al. (2026)]] menyasar kendala kapasitas dalam pelatihan pengatur lalu lintas udara: *simpilots*, pelatih manusia khusus yang memerankan pilot dan pengatur dalam ruang udara tersimulasi. ASTRA menggantikan mereka dengan sim-pilot otonom berbasis [[llm|LLM]], mempertahankan kompleksitas skenario sambil menghapus hambatan kepegawaian dan memungkinkan praktik [[adaptive-learning|adaptif]] dalam skala besar. Ini adalah deskripsi sistem, bukan uji khasiat, tetapi ia menamai mekanisme yang berulang dalam AI di VET: ketika masukan langka berupa manusia terampil yang memerankan lawan, sebuah agen dapat memegang peran itu dan membiarkan praktik meluas.

- **Kerja proyek imersif berbantuan agen dapat menaikkan kemampuan desain, secara selektif.** [[ai-ive-pbl-vocational-design-creativity-2026|Jin et al., 2027]] merinci AI-IVE-PBL, model empat dimensi lima fase (penemuan, pembayangan, pemodelan, komunikasi, penghalusan) yang dijalankan dalam VR dengan asisten manusia digital berbasis LLM pada mata kuliah desain interior tahun pertama di sebuah perguruan tinggi vokasional Tiongkok. Dalam kuasi-eksperimen dua kelompok 12 minggu (63 respons valid; 31 lawan 32), kondisi agen imersif mencetak skor lebih tinggi pada kemampuan desain (η²p = 0,138) dan kemampuan kreatif (η²p = 0,111) di bawah ANCOVA. Keterlibatan kognitif d = 0,90, [[student-engagement|keterlibatan perilaku]] d = 0,75, motivasi d = 0,74, kepuasan d = 0,69, dan beban kognitif lebih rendah (d = −0,52). Berpikir inovatif dan keterlibatan afektif tidak mencapai signifikansi, yang oleh penulis dikaitkan pada plafon jangka pendek atas pola kognitif mengakar. Semua hasil adalah [[self-report-measures|laporan diri]], tanpa artefak desain maupun penilaian ahli. Dibaca bersama [[genai-xr-architectural-design-education-2026|Xiao et al. (2026)]], ketika pipa [[generative-ai|GenAI]] plus XR menghasilkan penurunan [[self-efficacy|efikasi diri]] desain dan tanpa keunggulan panel tersamar, perbedaannya tampak lebih merupakan soal siapa yang memegang struktur fase dan [[rubrics|rubrik]] daripada perangkat keras.

- **Penilaian adalah tempat masalah autentisitas paling tajam.** [[ai-supported-oral-assessment-tvet-2026|Adams, 2026]] mendokumentasikan AkoVoice, yang diujicoba di empat kelas Otomotif Level 3 dan satu kelas Teknik Level 3, dirancang agar AI memunculkan bukti rubrik sementara penilai manusia yang menilai. Dari 33 pembelajar yang disurvei, 21 (64%) setuju tugas lisan itu realistis dan proporsi yang sama mengatakan tugas itu memberi cara jelas untuk mengomunikasikan apa yang mereka ketahui; tidak satu pun tidak setuju bahwa berbicara secara langsung lebih cocok bagi [[authentic-assessment|penilaian autentik]] ini daripada portofolio tertulis. Jumlah kata untuk pertanyaan identik bervariasi lima sampai delapan kali lipat antar pembelajar tanpa meningkatkan akurasi pada pertanyaan berbasis fakta, dan sembilan pembelajar yang menjawab dalam 2 sampai 13 kata semuanya dinilai benar, yang terpendek dua kata, "3500 kgs", dicocokkan berdasarkan nilai. Satu siklus penuh penangkapan, penyimpanan, penyusunan draf penilaian AI, dan pelaporan guru berjalan luring pada satu laptop Windows dengan memori grafis 8 GB (Mistral 7B lewat Ollama, faster-whisper, Chatterbox), menilai hingga 12 pembelajar sekaligus di bengkel tempat rangka baja mengalahkan wifi, dengan rekaman terenkripsi dan dihapus setelah 90 hari. Makalah itu mencatat EU AI Act memperlakukan AI yang mengevaluasi hasil belajar dalam pelatihan vokasional sebagai berisiko tinggi, sementara Selandia Baru tidak memiliki kerangka TVET khusus sektor.

- **Pendampingan terbatas, bukan substitusi.** [[ai-pedagogical-accompaniment-amico|Paolo (2026)]] berargumen bahwa nilai AI dalam latar teknis dan vokasional bergantung pada mediasi [[pedagogy|pedagogis]] yang akuntabel, bukan kemiripan dengan manusia. Prototipe Amico-nya memasangkan AmicoMio, yang berorientasi pada kejelasan teknis dan panduan tugas langkah demi langkah, dengan AmicoTuo, yang berorientasi pada dialog reflektif dan pertanyaan maieutik. Prinsip desainnya adalah *jembatan relasional*: interaksi sengaja sementara, terarah pada kontak manusia, dan dibatasi pagar pengaman, dengan orang dewasa mempertahankan tanggung jawab human-in-command. Pilot eksploratif (N = 30, Italia dan Tiongkok, 20 sesi terbatas) menemukan peserta memperlakukan sistem sebagai alat dukung terbatas, tanpa laporan ekspektasi substitusi maupun ketergantungan.

- **Pembelajaran berbantuan AI membawa biaya psikologis ketika menggantikan usaha.** [[ai-autonomous-learning-accomplishment-2026|Wang et al. (2026)]] mensurvei 1.264 mahasiswa perguruan tinggi vokasional di Tiongkok dengan pemodelan persamaan struktural dan menemukan pembelajaran mandiri berbantuan AI berasosiasi negatif dengan hardiness (komitmen, kendali, tantangan) dan berasosiasi positif dengan berkurangnya prestasi akademik, dimensi kelelahan berupa [[self-assessment|evaluasi diri]] negatif. Hardiness memediasi sebagian hubungan itu. Desainnya lintas-seksi, laporan diri, dan satu institusi, sehingga kausalitas tidak ditegakkan, tetapi pembingkaiannya penting bagi VET: ketika keyakinan dibangun melalui praktik berulang, AI sebagai pengganti dapat mengurangi disposisi untuk bertahan sekaligus pengalaman penguasaan yang dirasakan.

- **Mempercepat produksi [[curriculum-design|kurikulum]] tanpa menyerahkan verifikasi.** [[crewscaler-ai-upskilling-framework|Nguyen et al., 2026]] menerapkan AI pada kelima tahap peningkatan keterampilan profesional, yaitu akuisisi pengetahuan, pengembangan konten, tinjauan dan verifikasi, [[intelligent-tutoring|pembinaan tutor]], dan pengembangan penilaian, sambil mempertahankan desain biru, tinjauan pokok bahasan, dan penulisan [[misconceptions|miskonsepsi]] pada manusia. Validasi eksternalnya mencakup akreditasi NASBA CPE, tiga dari tiga pembelajar lulus ujian sertifikasi NVIDIA hanya dengan materi kerangka itu sendiri, dan bank 530 soal yang ditag pada biru 53 keterampilan. Ia masuk di sini karena memperlakukan verifikasi sebagai tahap kelas satu: deteksi [[hallucination-risk|halusinasi]] sebagian besar absen dari pipeline pendidikan, dan makalah itu melaporkan tutoring LLM bawaan hanya mencapai 52-70% tindakan pedagogis yang benar.

- **Dukungan yang dipersepsikan adalah tuas institusional, bukan defisit siswa.** Di antara 784 siswa di enam perguruan tinggi vokasional Tiongkok, [[huang-ai-literacy-vocational-problem-solving-2026|Huang et al. (2026)]] menemukan kaitan [[ai-literacy|literasi AI]] dengan [[problem-solving|pemecahan masalah kompleks]] yang dilaporkan sendiri (total 0,480) menguat dengan dukungan ICT sekolah yang dipersepsikan: efek tidak langsung bersyarat naik dari 0,117 menjadi 0,176 dan dari 0,038 menjadi 0,127.

- **Pembaruan kurikulum sebagai kewajiban berkelanjutan, bukan tinjauan berkala.** [[wang-legacy-curriculum-ai-cte-renewal-2026|Wang (2026)]] mengidentifikasi lima dimensi pembaruan yang saling berinteraksi, yaitu transformasi okupasional, kemutakhiran kurikulum, keselarasan kapabilitas fakultas, arsitektur program, dan keselarasan eksternal, serta enam uji kepemimpinan untuk memutuskan apakah suatu mata kuliah dipertahankan, direvisi, diintegrasikan, diganti, atau dihentikan.

- **Pertimbangan, bukan keluaran, sebagai kompetensi vokasional.** Menilai karya buatan AI terhadap kriteria okupasional, yaitu akurasi, standar, kepatuhan, keselamatan, adalah tempat kompetensi vokasional menjadi dapat diobservasi, bukan pada artefaknya itu sendiri ([[zheng-ai-evaluative-judgement-vocational-2026|Zheng dan Tang (2026)]]).

## Implikasi bagi Praktik

**Bagi instruktur**

- Perlakukan studi berbasis tempat kerja sebagai bukti yang hilang dan rancang uji coba Anda untuk memasukkannya; perolehan di kelas perlu, tetapi tidak cukup untuk kualifikasi perdagangan.
- Bingkai alat AI sebagai peralatan terbatas, bukan otoritas. Bukti uji coba mengisyaratkan pembelajar sudah mendekatinya begitu, dan pembingkaian itu layak dibuat eksplisit.
- Pisahkan pemeriksaan autentisitas dari pemeriksaan validitas: tanyakan kinerja okupasional apa yang disampel tugas itu, bukan hanya apakah siswa menemukannya realistis.

**Bagi pengembang**

- Bangun bantuan terbatas yang berlingkup tugas dengan akhir yang jelas, yang cocok dengan cara pembelajar vokasional sebenarnya memakai sistem dalam uji coba ini.
- Rancang untuk variasi tempat kerja, yaitu peralatan, aturan keselamatan, interaksi klien, bukan untuk konfigurasi laboratorium, karena di situlah penerapan akan terjadi.

**Bagi peneliti**

- Lakukan sebagian studi di tempat kerja. Sektor yang didefinisikan oleh pembelajaran berbasis kerja dan basis buktinya tidak memuat studi tempat kerja belum menguji klaim sentralnya.

## Miskonsepsi Umum

**"Basis bukti AI dalam VET memberi tahu kita tentang pendidikan vokasional."** Ia memberi tahu kita tentang proksi kelasnya, dan itu celah serius, bukan detail: **tidak ada studi dalam basis bukti AI dalam VET yang berlatar tempat kerja**, padahal VET *didefinisikan* oleh pembelajaran berbasis kerja. Temuan tentang alat AI dalam tugas perdagangan tersimulasi belum menjumpai kondisi yang membuat sektor ini khas, yaitu klien nyata, konsekuensi keselamatan nyata, variasi nyata peralatan tempat kerja.

**"Efek signifikan pada kemampuan desain atau kreatif bertransfer ke kompetensi okupasional."** Hasil [[quantitative-research|kuantitatif]] terkuat di sini berasal dari **kuasi-eksperimen dua kelompok 12 minggu dengan 63 respons valid (31 lawan 32)**. Di sana kondisi agen imersif mencetak skor lebih tinggi pada kemampuan desain (η²p = 0,138) dan kemampuan kreatif (η²p = 0,111) di bawah ANCOVA, dengan keterlibatan kognitif d = 0,90. Tiga puluh satu siswa per lengan dalam tugas kelas adalah bukti tentang tugas itu, dan kompetensi okupasional bukan salah satu hasil yang diukur.

**"Pembelajar akan terlalu bergantung pada AI dalam pelatihan praktik."** Bukti uji coba menunjuk arah sebaliknya. Pilot eksploratif (**N = 30**, Italia dan Tiongkok, **20 sesi terbatas**) menemukan peserta memperlakukan sistem sebagai alat dukung terbatas, dengan **tidak ada laporan ekspektasi substitusi maupun ketergantungan**. Itu eksploratif dan kecil, tetapi memang mengisyaratkan bahwa pembingkaian pembelajar vokasional atas alat sebagai peralatan, bukan otoritas, adalah sumber daya yang layak dijadikan dasar desain.

**"Persetujuan pembelajar atas tugas tersimulasi berarti tugas itu menilai hal yang benar."** Dari **33 pembelajar yang disurvei, 21 (64%)** setuju tugas lisan itu realistis dan proporsi yang sama mengatakan tugas itu memberi cara jelas untuk mengomunikasikan apa yang mereka ketahui, dan tidak satu pun tidak setuju bahwa berbicara secara langsung lebih cocok bagi [[authentic-assessment|penilaian autentik]] ini. Realisme dan kejelasan komunikasi layak diketahui, tetapi bukan validitas: tugas bisa terasa autentik dan tetap gagal menyampel kinerja okupasional yang diwakilinya.
