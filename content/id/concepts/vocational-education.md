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
updated: "2026-11-08T14:14:01-05:00"
translation_of: "concepts/vocational-education"
source_updated: "2026-11-04T17:10:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pendidikan dan pelatihan vokasional** — segmen pendidikan yang menyiapkan orang untuk okupasi, perdagangan, dan peran teknis tertentu, yang diorganisasi di sekitar kompetensi dekat praktik alih-alih pengetahuan disipliner. Ketika pembelajaran di tempat kerja menggambarkan [[lifelong-learning|peningkatan keterampilan]] bagi mereka yang sudah bekerja, VET mencakup persiapan awal untuk suatu perdagangan; ketika [[higher-ed|pendidikan tinggi]] menamai studi bergelar, VET sering non-gelar dan dibingkai kerangka kualifikasi nasional. Ciri penentunya adalah bahwa pembelajar dinilai berdasarkan apa yang dapat mereka lakukan dengan peralatan, bahwa pengajaran berlangsung dekat bengkel, [[simulation|simulator]], atau lokasi kerja, dan bahwa pelatih manusia yang membawa pengajaran praktis sering menjadi kendala pengikat. Dalam penelitian AI, VET muncul sebagai [[learners|populasi pembelajar]] yang berbeda — yang keyakinan akademiknya terikat pada keterampilan yang ditunjukkan dan identitas okupasional — sekaligus sebagai basis bukti yang berbeda, lebih tipis dan lebih terfragmentasi daripada literatur sekolah atau universitas.

## Pertanyaan yang Perlu Dipertimbangkan

- Jika suatu kualifikasi mensertifikasi apa yang dapat dilakukan pembelajar, berapa banyak pembelajaran berbantuan AI yang dihitung sebagai praktik autentik dan berapa banyak yang menggantikan pengulangan yang membangun kompetensi?
- Apa yang hilang ketika [[agentic-ai|agen AI]] memainkan peran lawan bicara — pasien, pilot, klien — yang dahulu diperankan pelatih manusia? Pertimbangan mana yang tidak dapat dimodelkan lawan bicara sintetis?
- [[oral-assessment|Penilaian lisan]] sulit diskalakan seiring ukuran kelas. Jika AI memunculkan bukti tetapi tidak menilai, bagian kapasitas penilaian mana yang terlepas dan mana yang sekadar dialihkan kepada [[teacher-role|guru]]?
- Tak ada studi dalam basis bukti AI dalam VET yang berlatar tempat kerja, padahal VET didefinisikan oleh pembelajaran berbasis kerja. Apa yang dibutuhkan penelitian yang kredibel di tempat pembelajaran itu terjadi?
- EU AI Act memperlakukan AI yang mengevaluasi hasil belajar dalam pelatihan vokasional sebagai berisiko tinggi, sementara sebagian yurisdiksi tidak memiliki aturan apa pun. Haruskah pengadaan mengikuti standar terketat yang tersedia?

## Pendahuluan

Pendidikan dan pelatihan vokasional menyiapkan orang untuk okupasi tertentu — teknisi otomotif, pengatur lalu lintas udara, desainer interior, pekerja perawatan — dan alat tukarnya adalah kompetensi yang ditunjukkan, bukan kredit yang terakumulasi. Penilaiannya cenderung berbasis kinerja, pengajarannya terikat peralatan, dan pelatih terampil yang mengawasi praktik jumlahnya langka.

Tetangganya dalam basis pengetahuan ini berbeda terutama dalam cakupan. [[professional-training]] mencakup peningkatan keterampilan di tempat kerja dan korporat, sebagian besar bagi orang yang sudah bekerja; VET juga mencakup persiapan okupasional awal. [[adult-learning]] menamai karakteristik pembelajar, bukan kekhususan okupasional. [[higher-ed]] menamai studi pemberi gelar, sedangkan banyak VET diorganisasi oleh kerangka kualifikasi seperti standar unit NZQA atau EQF. [[stem-education]] dan VET tumpang tindih di ranah teknis, tetapi pendidikan STEM bertujuan pemahaman konseptual sementara VET bertujuan prosedur yang dapat dipakai. [[career-development-and-readiness]] menamai disposisi keterkerjayaan yang menjadi dasar penilaian program VET; VET menamai sistem instruksional yang dimintai pertanggungjawaban untuk menghasilkannya.

Yang khas dari AI dalam VET adalah celah antara apa yang dikatakan sektor ini ingin dicapai dan apa yang dibangunnya: [[constructivist|teori konstruktivis]] banyak dianut sementara sistem latihan-dan-praktik behavioris mendominasi dan desain berorientasi agensi pembelajar tetap jarang. Pertanyaan desain yang berulang bukanlah apakah AI dapat menyampaikan pengajaran, melainkan apakah AI dapat menyerap bagian pembelajaran vokasional yang mahal untuk distafkan — skenario realistis, umpan balik tepat waktu, lawan bicara yang diperankan, bukti lisan — tanpa menggantikan praktik yang menghasilkan kompetensi.

### Bagaimana AI muncul dalam pendidikan dan pelatihan vokasional

- **Basis bukti yang muda, terfragmentasi, dan terkonsentrasi secara geografis.** [[meta-analysis-systematic-review|Tinjauan sistematis]] pertama atas AI dalam VET ([[ai-vocational-education-training-review]]) mengidentifikasi 26 studi empiris yang terbit 2015–2026 melalui ERIC, Web of Science, dan Elicit dengan pedoman PRISMA: sembilan ranah teknis, sembilan lintas domain, lima administrasi bisnis, dan tiga kesehatan. Latarnya enam kelas, delapan daring, empat campuran, dan delapan berbasis simulasi — dan tak satu pun di tempat kerja, meski VET berciri berbasis kerja. Tujuh belas dari 26 berasal dari Asia; hanya sembilan studi berbagi setidaknya satu rujukan dan tak satu pun saling mengutip. Lima adalah eksperimen teracak dan 21 memakai desain pra-eksperimental atau kuasi-eksperimental, sebagian besar mengukur hasil segera setelah intervensi, dan hanya tiga memberi pembelajar peran aktif dalam desain yang diberdayakan AI. Penulisnya memperingatkan "Turing Trap" pendidikan — memakai AI untuk mereplikasi pengajaran manusia alih-alih memperkuat [[human-in-the-loop-ai|pertimbangan manusia]] — dan menyerukan kasus kegagalan serta kondisi batas sebagai pengganti narasi keberhasilan yang berlaku.

- **Simulasi menyerap pemain peran yang langka.** [[astra-atco-training-simulator]] menyasar kendala kapasitas dalam pelatihan pengatur lalu lintas udara: *simpilots*, pelatih manusia khusus yang memerankan pilot sekaligus pengatur dalam ruang udara tersimulasi. ASTRA menggantikannya dengan sim-pilot otonom yang digerakkan [[llm|LLM]], mempertahankan kompleksitas skenario sambil menghapus hambatan kepegawaian dan memungkinkan praktik [[adaptive-learning|adaptif]] dalam skala besar. Ini deskripsi sistem, bukan uji khasiat, tetapi ia menamai mekanisme yang berulang dalam AI di VET: ketika masukan yang langka adalah manusia terampil yang memerankan lawan, agen dapat memegang peran itu dan membiarkan praktik meluas.

- **Kerja proyek imersif berbantuan agen dapat menaikkan kemampuan desain — secara selektif.** [[ai-ive-pbl-vocational-design-creativity-2026]] merinci AI-IVE-PBL, model empat dimensi dan lima fase (penemuan, pembayangan, pemodelan, komunikasi, penghalusan) yang dijalankan dalam VR dengan asisten manusia digital berbasis LLM pada mata kuliah desain interior tahun pertama di sebuah perguruan tinggi vokasional Tiongkok. Dalam kuasi-eksperimen dua kelompok selama 12 minggu (63 respons valid; 31 vs 32), kondisi agen imersif mencetak skor lebih tinggi pada kemampuan desain (η²p = .138) dan kemampuan kreatif (η²p = .111) di bawah ANCOVA, dengan keterlibatan kognitif d = 0.90, [[student-engagement|keterlibatan perilaku]] d = 0.75, motivasi d = 0.74, kepuasan d = 0.69, dan beban kognitif lebih rendah (d = −0.52). Berpikir inovatif dan keterlibatan afektif tidak mencapai signifikansi, yang oleh penulisnya diatribusikan pada batas jangka pendek atas pola kognitif yang mengakar. Semua hasil adalah [[self-report-measures|laporan diri]], tanpa artefak desain atau penilaian ahli. Dibaca berdampingan dengan [[genai-xr-architectural-design-education-2026]], ketika pipeline [[generative-ai|GenAI]] plus XR menghasilkan [[self-efficacy]] desain yang menurun dan tanpa keunggulan panel tersamar, perbedaannya tampak bukan pada perangkat keras melainkan pada siapa yang memegang struktur fase dan rubriknya.

- **Penilaian adalah tempat masalah autentisitas paling tajam.** [[ai-supported-oral-assessment-tvet-2026]] mendokumentasikan AkoVoice, yang diujicoba di empat kelas Otomotif Level 3 dan satu kelas Teknik Level 3, dirancang agar AI memunculkan bukti rubrik sementara penilai manusia yang menilai. Dari 33 pembelajar yang disurvei, 21 (64%) setuju tugas lisan itu realistis dan proporsi yang sama menyatakan tugas itu memberi cara yang jelas untuk mengomunikasikan apa yang mereka ketahui; tak satu pun tidak setuju bahwa berbicara secara langsung lebih cocok bagi [[authentic-assessment|penilaian autentik]] ini daripada portofolio tertulis. Jumlah kata untuk pertanyaan identik bervariasi lima hingga delapan kali lipat antar pembelajar tanpa meningkatkan akurasi pada pertanyaan berbasis fakta, dan sembilan pembelajar yang menjawab dalam 2 sampai 13 kata semuanya dinilai benar, yang terpendek dua kata, "3500 kgs", dicocokkan berdasarkan nilainya. Siklus penuh penangkapan, penyimpanan, penyusunan draf penilaian AI, dan pelaporan guru berjalan luring di satu laptop Windows dengan memori grafis 8 GB (Mistral 7B melalui Ollama, faster-whisper, Chatterbox), menilai hingga 12 pembelajar sekaligus di bengkel ketika rangka baja mengalahkan wifi, dengan rekaman terenkripsi dan dihapus setelah 90 hari. Makalah itu mencatat EU AI Act memperlakukan AI yang mengevaluasi hasil belajar dalam pelatihan vokasional sebagai berisiko tinggi, sementara Selandia Baru tidak memiliki kerangka TVET khusus sektor.

- **Pendampingan yang terbatas alih-alih substitusi.** [[ai-pedagogical-accompaniment-amico]] berargumen bahwa nilai AI dalam latar teknis dan vokasional bergantung pada mediasi [[pedagogy|pedagogis]] yang akuntabel, bukan pada kemiripan dengan manusia. Prototipe Amico-nya memasangkan AmicoMio, yang berorientasi pada kejelasan teknis dan panduan tugas langkah demi langkah, dengan AmicoTuo, yang berorientasi pada dialog reflektif dan pertanyaan maieutik. Prinsip desainnya adalah *jembatan relasional*: interaksi sengaja bersifat sementara, terarah pada kontak manusia, dan dibatasi pagar pengaman, dengan orang dewasa mempertahankan tanggung jawab human-in-command. Uji coba eksploratif (N = 30, Italia dan Tiongkok, 20 sesi terbatas) menemukan peserta memperlakukan sistem sebagai alat dukung yang terbatas, tanpa laporan ekspektasi substitusi maupun ketergantungan.

- **Pembelajaran berbantuan AI membawa biaya psikologis ketika menggantikan usaha.** [[ai-autonomous-learning-accomplishment-2026]] mensurvei 1,264 mahasiswa vokasional di Tiongkok dengan pemodelan persamaan struktural dan menemukan pembelajaran mandiri berbantuan AI berasosiasi negatif dengan hardiness (komitmen, kendali, tantangan) dan berasosiasi positif dengan berkurangnya prestasi akademik, dimensi kelelahan berupa [[self-assessment|evaluasi diri]] yang negatif. Hardiness memediasi sebagian hubungan itu. Desainnya lintas-seksi, laporan diri, dan satu institusi, sehingga kausalitas tidak ditegakkan, tetapi pembingkaiannya penting bagi VET: ketika keyakinan dibangun melalui praktik berulang, AI sebagai pengganti dapat mengurangi disposisi untuk bertahan sekaligus pengalaman penguasaan yang dirasakan.

- **Mempercepat produksi [[curriculum-design|kurikulum]] tanpa menyerahkan verifikasi.** [[crewscaler-ai-upskilling-framework]] menerapkan AI pada kelima tahap peningkatan keterampilan profesional — akuisisi pengetahuan, pengembangan konten, tinjauan dan verifikasi, [[intelligent-tutoring|pembinaan tutor]], dan pengembangan penilaian — sambil membiarkan desain blueprint, tinjauan pakar bidang, dan penulisan [[misconceptions|miskonsepsi]] pada manusia. Validasi eksternalnya mencakup akreditasi CPE NASBA, tiga dari tiga pembelajar lulus ujian sertifikasi NVIDIA hanya dengan basis pengetahuan kerangka itu, dan bank 530 soal yang ditag ke blueprint 53 keterampilan. Ia masuk di sini karena memperlakukan verifikasi sebagai tahap kelas satu: deteksi [[hallucination-risk|halusinasi]] sebagian besar absen dari pipeline pendidikan, dan makalah itu melaporkan tutoring LLM bawaan hanya mencapai 52–70% tindakan pedagogis yang benar.
- **Dukungan yang dipersepsikan adalah tuas institusional, bukan defisit siswa.** Di antara 784 mahasiswa di enam perguruan tinggi vokasional Tiongkok, [[huang-ai-literacy-vocational-problem-solving-2026|Huang et al. (2026)]] menemukan bahwa kaitan [[ai-literacy|literasi AI]] dengan [[problem-solving|pemecahan masalah kompleks]] yang dilaporkan sendiri (total 0.480) menguat seiring dukungan ICT sekolah yang dipersepsikan: efek tidak langsung bersyarat naik dari 0.117 menjadi 0.176 dan 0.038 menjadi 0.127.

- **Pembaruan kurikulum sebagai kewajiban berkelanjutan, bukan tinjauan berkala.** [[wang-legacy-curriculum-ai-cte-renewal-2026|Wang (2026)]] mengidentifikasi lima dimensi pembaruan yang saling berinteraksi, yaitu transformasi okupasional, kemutakhiran kurikulum, keselarasan kapabilitas fakultas, arsitektur program, dan keselarasan eksternal, serta enam uji kepemimpinan untuk memutuskan apakah suatu mata kuliah dipertahankan, direvisi, diintegrasikan, diganti, atau dihentikan.

## Miskonsepsi Umum

**"Basis bukti AI dalam VET memberi tahu kita tentang pendidikan vokasional."** Ia memberi tahu kita tentang proksi kelas untuk pendidikan vokasional, dan itu adalah celah serius, bukan detail: **tak ada studi dalam basis bukti AI dalam VET yang berlatar tempat kerja**, padahal VET *didefinisikan* oleh pembelajaran berbasis kerja. Temuan tentang alat AI dalam tugas perdagangan tersimulasi belum menghadapi kondisi yang membuat sektor ini khas — klien nyata, konsekuensi keselamatan nyata, variasi nyata dalam peralatan tempat kerja.

**"Efek signifikan pada kemampuan desain atau kreatif bertransfer ke kompetensi okupasional."** Hasil [[quantitative-research|kuantitatif]] terkuat di sini berasal dari **kuasi-eksperimen dua kelompok selama 12 minggu dengan 63 respons valid (31 vs 32)**. Di sana, kondisi agen imersif mencetak skor lebih tinggi pada kemampuan desain (η²p = .138) dan kemampuan kreatif (η²p = .111) di bawah ANCOVA, dengan keterlibatan kognitif d = 0.90. Tiga puluh satu siswa per lengan dalam tugas kelas adalah bukti tentang tugas itu, dan kompetensi okupasional bukan salah satu hasil yang diukur.

**"Pembelajar akan terlalu bergantung pada AI dalam pelatihan praktik."** Bukti uji coba menunjuk arah sebaliknya. Uji coba eksploratif (**N = 30**, Italia dan Tiongkok, **20 sesi terbatas**) menemukan peserta memperlakukan sistem sebagai alat dukung yang terbatas, dengan **tanpa laporan ekspektasi substitusi maupun ketergantungan**. Itu eksploratif dan kecil, dan memang mengisyaratkan bahwa pembingkaian pembelajar vokasional atas alat sebagai peralatan, bukan otoritas, adalah sumber daya yang layak dijadikan dasar desain.

**"Persetujuan pembelajar atas tugas tersimulasi berarti tugas itu menilai hal yang benar."** Dari **33 pembelajar yang disurvei, 21 (64%)** setuju tugas lisan itu realistis dan proporsi yang sama menyatakan tugas itu memberi cara yang jelas untuk mengomunikasikan apa yang mereka ketahui — dan tak satu pun tidak setuju bahwa berbicara secara langsung lebih cocok bagi [[authentic-assessment|penilaian autentik]] ini. Realisme dan kejelasan komunikasi layak diketahui dan bukan validitas: tugas dapat terasa autentik dan tetap gagal menyampel kinerja okupasional yang diwakilinya.

## Implikasi bagi Praktik

**Bagi instruktur**

- Perlakukan studi berbasis tempat kerja sebagai bukti yang hilang dan rancang uji coba Anda agar mencakupnya; perolehan di kelas perlu dan tidak cukup untuk kualifikasi perdagangan.
- Bingkai alat AI sebagai peralatan yang terbatas, bukan otoritas. Bukti uji coba mengisyaratkan pembelajar sudah mendekatinya dengan cara ini, dan pembingkaian itu layak dibuat eksplisit.
- Pisahkan pemeriksaan autentisitas dari pemeriksaan validitas: tanyakan kinerja okupasional apa yang disampel tugas itu, bukan hanya apakah siswa menilainya realistis.

**Bagi pengembang**

- Bangun untuk bantuan terbatas yang berlingkup tugas dan berakhir jelas, yang sesuai dengan cara pembelajar vokasional benar-benar memakai sistem dalam uji coba ini.
- Rancang terhadap variasi tempat kerja — peralatan, aturan keselamatan, interaksi klien — bukan terhadap konfigurasi laboratorium, karena di situlah penerapan akan terjadi.

**Bagi peneliti**

- Lakukan setidaknya sebagian studi di tempat kerja. Sektor yang didefinisikan oleh pembelajaran berbasis kerja dan basis buktinya tidak memuat studi tempat kerja belum menguji klaim sentralnya.

## Konsep terkait

- [[professional-training]]
- [[adult-learning]]
- [[higher-ed]]
- [[career-development-and-readiness]]
- [[simulation]]
- [[authentic-assessment]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[self-efficacy]]

## Artikel terkait

- [[wang-legacy-curriculum-ai-cte-renewal-2026]] — Pembaruan kurikulum CTE adaptif, lima dimensi dan enam uji kepemimpinan
- [[ai-vocational-education-training-review]] — Tinjauan sistematis pertama atas AI dalam VET: tujuan, teori, dan efektivitas empiris
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: pembelajaran berbasis proyek imersif dan kreativitas desain
- [[ai-supported-oral-assessment-tvet-2026]] — AkoVoice: penilaian lisan berbantuan AI luring dalam TVET
- [[ai-pedagogical-accompaniment-amico]] — Prototipe dwimode Amico: prinsip desain dan indikator yang dapat diamati
- [[ai-autonomous-learning-accomplishment-2026]] — Pembelajaran mandiri berbantuan AI dan prestasi yang menurun, dimediasi hardiness
- [[astra-atco-training-simulator]] — Sim-pilot otonom untuk pelatihan ATCO yang dapat diskalakan
- [[crewscaler-ai-upskilling-framework]] — Kerangka ujung-ke-ujung yang dipercepat AI untuk peningkatan keterampilan profesional yang cepat
- [[genai-xr-architectural-design-education-2026]] — Kasus kontra: GenAI plus XR multiuser dengan efikasi diri desain yang menurun
- [[huang-ai-literacy-vocational-problem-solving-2026]] — Dukungan ICT yang dipersepsikan sebagai tuas institusional di perguruan tinggi vokasional
